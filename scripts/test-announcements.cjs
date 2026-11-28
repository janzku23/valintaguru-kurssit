const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { PGlite } = require("@electric-sql/pglite");
const createLoader = require("./shop-test-loader.cjs");

const model = createLoader()("lib/announcements/model.ts");
const valid = { title: "Uusia harjoituksia", content: "Kurssille on lisätty uusia harjoituksia." };
const id = "00000000-0000-4000-8000-000000000001";
const timestamp = "2026-11-28T09:00:00.123456+00:00";
const request = (method, body = valid, origin = "https://example.test") => new Request("https://example.test/api/admin/tiedotteet", {
  method, headers: { "Content-Type": "application/json", origin }, body: JSON.stringify(body),
});

test("the hero shows the promotion only to guests and notices only after sign-in", () => {
  let auth = { loading: true, user: null };
  const absolute = path.resolve(__dirname, "../app/home/HomeHeroPanel.tsx");
  const mod = new Module(absolute, module);
  mod.require = name => name === "./HomeAuthProvider" ? { useHomeAuth: () => auth }
    : name === "@/components/announcements/AnnouncementsFeed" ? { default: () => React.createElement("p", null, "MEMBER_NOTICES") }
    : require(name);
  mod._compile(ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText, absolute);
  const render = () => renderToStaticMarkup(React.createElement(mod.exports.default, null, React.createElement("p", null, "BLACK_WEEK")));
  assert.doesNotMatch(render(), /BLACK_WEEK|MEMBER_NOTICES/);
  auth = { loading: false, user: null };
  assert.match(render(), /BLACK_WEEK/);
  assert.doesNotMatch(render(), /MEMBER_NOTICES/);
  auth = { loading: false, user: { id } };
  assert.match(render(), /MEMBER_NOTICES/);
  assert.doesNotMatch(render(), /BLACK_WEEK/);
});

test("announcement validation trims text and excludes client-supplied publication dates", () => {
  assert.deepEqual(model.validateAnnouncementInput({ title: ` ${valid.title} `, content: `\n${valid.content}\n`, created_at: "2099-01-01", id }), valid);
  for (const value of [null, [], {}, { ...valid, title: " " }, { ...valid, content: 12 }, { ...valid, title: "x".repeat(121) }, { ...valid, content: "x".repeat(1001) }]) {
    assert.throws(() => model.validateAnnouncementInput(value));
  }
});

test("pagination preserves microseconds and rejects injected filter syntax", () => {
  const cursor = model.announcementCursor({ id, created_at: timestamp });
  assert.deepEqual(model.parseAnnouncementCursor(cursor), { id, createdAt: timestamp });
  assert.equal(model.parseAnnouncementCursor(null), null);
  for (const value of ["", "invalid", `${timestamp}|bad`, `${timestamp}|${id}|extra`, `2026-11-28T09:00:00Z),id.neq.0|${id}`, `2026-99-99T09:00:00Z|${id}`]) {
    assert.throws(() => model.parseAnnouncementCursor(value));
  }
});

test("reading requires a verified user and responses cannot be cached", async () => {
  let user = null;
  let authError = null;
  const orders = [];
  let filter;
  let queryResult = { data: Array.from({ length: 6 }, (_, i) => ({ id: id.slice(0, -1) + i, title: `Notice ${i}`, content: "Text", created_at: timestamp })), error: null };
  const query = {
    select(fields) { assert.equal(fields, model.ANNOUNCEMENT_FIELDS); return this; },
    order(...args) { orders.push(args); return this; },
    limit(limit) { assert.equal(limit, 6); return this; },
    or(value) { filter = value; return this; },
    then(resolve, reject) { return Promise.resolve(queryResult).then(resolve, reject); },
  };
  const { GET } = createLoader({
    "@/lib/adminAccess": { ADMIN_EMAIL: "admin@example.test" },
    "@/utils/supabase/server": { createClient: async () => ({
      auth: { getUser: async () => ({ data: { user }, error: authError }) },
      from(table) { assert.ok(user); assert.equal(table, "announcements"); return query; },
    }) },
  })("app/api/tiedotteet/route.ts");
  const get = cursor => GET(new Request(`https://example.test/api/tiedotteet${cursor ? `?${new URLSearchParams({ cursor })}` : ""}`));
  assert.equal((await get()).status, 401);
  user = { id, email: "student@example.test" };
  authError = new Error("Expired token");
  assert.equal((await get()).status, 401);
  authError = null;
  assert.equal((await get("bad cursor")).status, 400);
  const response = await get();
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "private, no-store");
  assert.equal(response.headers.get("Vary"), "Cookie");
  const first = await response.json();
  assert.equal(first.announcements.length, 5);
  assert.equal(first.canManage, false);
  assert.equal(first.nextCursor, model.announcementCursor(queryResult.data[4]));
  assert.deepEqual(orders, [["created_at", { ascending: false }], ["id", { ascending: false }]]);
  await get(first.nextCursor);
  assert.equal(filter, `created_at.lt.${timestamp},and(created_at.eq.${timestamp},id.lt.${queryResult.data[4].id})`);
  user.email = "admin@example.test";
  queryResult = { data: [], error: null };
  assert.deepEqual(await (await get()).json(), { announcements: [], nextCursor: null, canManage: true });
  queryResult = { data: null, error: { code: "42501" } };
  assert.equal((await get()).status, 500);
});

test("only the admin can publish or remove notices, with origin and input validation", async () => {
  let auth = { error: Response.json({ error: "Forbidden" }, { status: 403 }) };
  let inserted;
  let deletedId;
  let stored = { data: { id, ...valid, created_at: timestamp }, error: null };
  const chain = {
    select() { return this; },
    single: async () => stored,
    maybeSingle: async () => stored,
    eq(field, value) { assert.equal(field, "id"); deletedId = value; return this; },
  };
  const { POST, DELETE } = createLoader({
    "@/lib/adminAccess": { requireAdminApi: async () => auth },
  })("app/api/admin/tiedotteet/route.ts");
  assert.equal((await POST(request("POST"))).status, 403);
  assert.equal((await DELETE(request("DELETE", { id }))).status, 403);
  auth = { user: { id }, admin: { from(table) {
    assert.equal(table, "announcements");
    return { insert(row) { inserted = row; return chain; }, delete() { return chain; } };
  } } };
  assert.equal((await POST(request("POST", valid, "https://evil.test"))).status, 403);
  assert.equal((await DELETE(request("DELETE", { id }, "https://evil.test"))).status, 403);
  assert.equal((await POST(request("POST", { title: " ", content: "Text" }))).status, 400);
  assert.equal((await DELETE(request("DELETE", { id: "bad" }))).status, 400);
  assert.equal(inserted, undefined);
  assert.equal(deletedId, undefined);
  assert.equal((await POST(request("POST", { ...valid, created_at: "2099-01-01", id }))).status, 201);
  assert.deepEqual(inserted, valid);
  assert.equal((await DELETE(request("DELETE", { id }))).status, 200);
  assert.equal(deletedId, id);
  stored = { data: null, error: null };
  assert.equal((await DELETE(request("DELETE", { id }))).status, 404);
  stored = { data: null, error: { code: "failure" } };
  assert.equal((await POST(request("POST"))).status, 500);
  assert.equal((await DELETE(request("DELETE", { id }))).status, 500);
});

test("PostgreSQL enforces member-only reading, server-only writes and stable five-item pages", async () => {
  const db = new PGlite();
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
      create schema auth; grant usage on schema auth to authenticated;
      create function auth.uid() returns uuid language sql stable as $$
        select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid;
      $$;`);
    const migrations = path.join(__dirname, "../supabase/migrations");
    const migration = fs.readdirSync(migrations).find(file => file.endsWith("_member_announcements.sql"));
    assert.ok(migration);
    await db.exec(fs.readFileSync(path.join(migrations, migration), "utf8"));
    await db.exec(`set role service_role;
      insert into announcements(id,title,content,created_at)
      select ('00000000-0000-4000-8000-' || lpad(n::text,12,'0'))::uuid,
        'Notice ' || n, 'Text', '2026-11-28T09:00:00.123456Z'::timestamptz from generate_series(1,12) n;
      reset role; set role anon;`);
    await assert.rejects(db.query("select * from announcements"));
    await db.exec("reset role; set role authenticated");
    assert.deepEqual((await db.query("select * from announcements")).rows, []);
    await db.query("select set_config('request.jwt.claim.sub', $1, false)", [id]);
    assert.equal((await db.query("select * from announcements")).rows.length, 12);
    for (const role of ["authenticated", "anon"]) {
      await db.exec(`reset role; set role ${role}`);
      for (const sql of ["insert into announcements(title,content) values('Attack','Text')", "update announcements set title='Attack'", "delete from announcements"]) {
        await assert.rejects(db.exec(sql));
      }
    }
    await db.exec("reset role; set role service_role");
    const columns = "id,created_at::text as created_at";
    const first = (await db.query(`select ${columns} from announcements order by created_at desc,id desc limit 6`)).rows;
    assert.equal(first.length, 6);
    const cursor = first[4];
    await db.exec("insert into announcements(title,content) values('New notice','Published while reading older notices')");
    const second = (await db.query(`select ${columns} from announcements where (created_at,id)<($1::timestamptz,$2::uuid) order by created_at desc,id desc limit 6`, [cursor.created_at, cursor.id])).rows;
    const lastCursor = second[4];
    const third = (await db.query(`select ${columns} from announcements where (created_at,id)<($1::timestamptz,$2::uuid) order by created_at desc,id desc limit 6`, [lastCursor.created_at, lastCursor.id])).rows;
    const all = [...first.slice(0,5), ...second.slice(0,5), ...third];
    assert.equal(all.length, 12);
    assert.equal(new Set(all.map(row => row.id)).size, 12);
    await assert.rejects(db.exec("insert into announcements(title,content) values(' ','Text')"));
    await assert.rejects(db.exec("insert into announcements(title,content) values('Title',repeat('x',1001))"));
    await assert.rejects(db.exec("update announcements set title='Cannot change publication order'"));
    await db.query("delete from announcements where id=$1", [id]);
    assert.equal((await db.query("select * from announcements where id=$1", [id])).rows.length, 0);
  } finally {
    await db.close();
  }
});
