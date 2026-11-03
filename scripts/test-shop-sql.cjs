// Real PostgreSQL tests on an isolated contract fixture, never the live Supabase database.
const { test, before, after } = require("node:test");
const assert = require("node:assert/strict"),
  fs = require("node:fs"),
  path = require("node:path");
const { randomUUID } = require("node:crypto");
const { PGlite } = require(
  process.env.SHOP_SQL_TEST_MODULE || "@electric-sql/pglite",
);
let db;
const uid = randomUUID(),
  admin = randomUUID(),
  p1 = randomUUID(),
  p2 = randomUUID(),
  overlap = randomUUID();
async function q(sql, args = []) {
  return (await db.query(sql, args)).rows;
}
async function rpc(fn, args) {
  return (
    await q(
      `select public.${fn}(${args.map((_, i) => "$" + (i + 1)).join(",")}) as result`,
      args,
    )
  )[0].result;
}
async function checkout(
  ids = [p1],
  code = "",
  amount = 1001,
  key = randomUUID(),
  ack = true,
) {
  return rpc("shop_checkout", [
    ids,
    code,
    "student@example.test",
    "Student",
    "hash",
    key,
    "test",
    "375917",
    { version: "test", paragraphs: ["Frozen terms"] },
    true,
    ack,
    amount,
  ]);
}
async function paidOrder() {
  const id = await checkout(),
    o = (await q("select * from shop_orders where id=$1", [id]))[0],
    { payment: p } = await rpc("shop_start_payment", [id]),
    tx = randomUUID();
  await record(o, p, tx, "ok");
  return { id, o, p, tx };
}
async function record(
  o,
  p,
  tx,
  status,
  amount = 1001,
  currency = "EUR",
  stamp = p.stamp,
  ref = String(o.number),
) {
  return rpc("shop_record_payment", [
    p.id,
    tx,
    status,
    amount,
    currency,
    stamp,
    ref,
    "test",
    null,
  ]);
}
async function refund(id, amount, revoke = []) {
  const rid = randomUUID();
  await rpc("shop_start_refund", [id, amount, revoke, admin, rid]);
  await rpc("shop_record_refund", [rid, randomUUID(), "ok"]);
  return rid;
}
before(async () => {
  db = new PGlite();
  await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;
 create table auth.users(id uuid primary key,email text,deleted_at timestamptz,email_confirmed_at timestamptz default now());create function auth.uid() returns uuid language sql as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;grant usage on schema auth to authenticated;grant execute on function auth.uid() to authenticated;
 create table public.student_courses(id uuid primary key default gen_random_uuid(),user_id uuid references auth.users(id),email text,course_id text,course_slug text,course_title text,title text,status text,unique(user_id,course_id));
 alter table student_courses enable row level security;grant select,insert,update,delete on student_courses to authenticated;create policy existing_read on student_courses for select to authenticated using(true);`);
  await db.exec(
    fs.readFileSync(
      path.join(__dirname, "../supabase/migrations/20261103_paytrail_shop.sql"),
      "utf8",
    ),
  );
  await db.exec(
    fs.readFileSync(
      path.join(
        __dirname,
        "../supabase/migrations/20261103000100_shop_unlimited_access.sql",
      ),
      "utf8",
    ),
  );
  await q("insert into auth.users(id,email)values($1,$2),($3,$4)", [
    uid,
    "student@example.test",
    admin,
    "admin@example.test",
  ]);
  for (const [id, slug, price, course] of [
    [p1, "g", 1001, "valintakoe-g"],
    [p2, "oikis", 999, "oikis-teho"],
    [overlap, "bundle", 2000, "valintakoe-g"],
  ])
    await q(
      `insert into shop_products(id,slug,name,description,price_cents,vat_percentage,course_ids,access_days,legal_kind,reviewed,published)values($1,$2,$2,'Description',$3,25.5,$4,30,'digital_content',true,true)`,
      [id, slug, price, [course]],
    );
});
after(async () => {
  await db?.close();
});
test("migration executes; historical prices, VAT and access duration remain frozen", async () => {
  const id = await checkout();
  await q("update shop_products set price_cents=2000 where id=$1", [p1]);
  const i = (
    await q("select * from shop_order_items where order_id=$1", [id])
  )[0];
  assert.equal(i.total_cents, 1001);
  assert.equal(Number(i.vat_percentage), 25.5);
  assert.equal(i.access_days, 30);
  await q("update shop_products set price_cents=1001 where id=$1", [p1]);
});
test("forged/stale amount aborts checkout atomically", async () => {
  const key = randomUUID();
  await assert.rejects(checkout([p1], "", 1, key), /Hinta muuttui/);
  assert.equal(
    (
      await q("select count(*)::int n from shop_orders where request_key=$1", [
        key,
      ])
    )[0].n,
    0,
  );
});
test("duplicate items, overlapping packages and absent products are rejected", async () => {
  await assert.rejects(checkout([p1, p1]), /ostoskori/);
  await assert.rejects(checkout([p1, overlap]), /kahdesti/);
  await assert.rejects(checkout([randomUUID()]), /löytynyt/);
});
test("unpublished and archived products cannot be purchased", async () => {
  await q("update shop_products set published=false where id=$1", [p2]);
  await assert.rejects(checkout([p2], "", 999), /myynnissä/);
  await q("update shop_products set published=true,archived=true where id=$1", [
    p2,
  ]);
  await assert.rejects(checkout([p2], "", 999), /myynnissä/);
  await q("update shop_products set archived=false where id=$1", [p2]);
});
test("percentage discount allocates exact integer cents across VAT lines", async () => {
  await q(
    "insert into shop_discounts(code,kind,value)values('TEN','percent',10)",
  );
  const r = await rpc("shop_quote", [[p1, p2], "TEN"]);
  assert.equal(r.amount_cents, 1800);
  assert.equal(r.discount_cents, 200);
  assert.equal(
    r.items.reduce((s, i) => s + i.total_cents, 0),
    1800,
  );
  assert.equal(
    r.items.reduce((s, i) => s + i.discount_cents, 0),
    200,
  );
});
test("fixed discount obeys product restriction, max uses and expiry", async () => {
  await q(
    "insert into shop_discounts(code,kind,value,max_uses,product_ids)values('ONCE','fixed',200,1,$1)",
    [[p1]],
  );
  await assert.rejects(rpc("shop_quote", [[p2], "ONCE"]), /koske/);
  await checkout([p1], "ONCE", 801);
  await assert.rejects(checkout([p1], "ONCE", 801), /käyttökerrat/);
  await q(
    "insert into shop_discounts(code,kind,value,starts_at,ends_at)values('OLD','percent',10,now()-interval '2 days',now()-interval '1 day')",
  );
  await assert.rejects(rpc("shop_quote", [[p1], "OLD"]), /voimassa/);
});
test("checkout retries create only one order; missing digital consent fails", async () => {
  const key = randomUUID(),
    a = await checkout([p1], "", 1001, key),
    b = await checkout([p1], "", 1001, key);
  assert.equal(a, b);
  assert.equal(
    (
      await q(
        "select count(*)::int n from shop_order_items where order_id=$1",
        [a],
      )
    )[0].n,
    1,
  );
  await assert.rejects(
    checkout([p1], "", 1001, randomUUID(), false),
    /suostumus/,
  );
});
test("pending, delayed and cancelled payments never deliver; repeated ok delivers once", async () => {
  const id = await checkout(),
    o = (await q("select * from shop_orders where id=$1", [id]))[0],
    a = await rpc("shop_start_payment", [id]),
    b = await rpc("shop_start_payment", [id]),
    p = a.payment,
    tx = randomUUID();
  assert.equal(a.payment.id, b.payment.id);
  assert.equal(b.created, false);
  for (const status of ["pending", "delayed", "fail"]) {
    await record(o, p, tx, status);
    await assert.rejects(rpc("shop_fulfill", [id, uid, false]), /vahvistettu/);
  }
  for (let i = 0; i < 3; i++) await record(o, p, tx, "ok");
  assert.equal(
    (
      await q(
        "select count(*)::int n from shop_jobs where order_id=$1 and kind='fulfill'",
        [id],
      )
    )[0].n,
    1,
  );
  await record(o, p, tx, "fail");
  assert.equal(
    (await q("select status from shop_payments where id=$1", [p.id]))[0].status,
    "ok",
  );
});
test("transaction, amount, currency, stamp and reference must match", async () => {
  const { o, p, tx } = await paidOrder();
  for (const args of [
    [randomUUID(), 1001, "EUR", p.stamp, String(o.number)],
    [tx, 1, "EUR", p.stamp, String(o.number)],
    [tx, 1001, "USD", p.stamp, String(o.number)],
    [tx, 1001, "EUR", "forged", String(o.number)],
    [tx, 1001, "EUR", p.stamp, "forged"],
  ])
    await assert.rejects(
      record(o, p, args[0], "ok", ...args.slice(1)),
      /vastaa/,
    );
});
test("fulfillment binds existing Auth email and grants exactly once", async () => {
  const { id } = await paidOrder();
  await assert.rejects(rpc("shop_fulfill", [id, admin, false]), /Käyttäjä/);
  await rpc("shop_fulfill", [id, uid, false]);
  await rpc("shop_fulfill", [id, uid, false]);
  assert.equal(
    (
      await q(
        "select count(*)::int n from shop_entitlement_grants g join shop_order_items i on i.id=g.item_id where i.order_id=$1",
        [id],
      )
    )[0].n,
    1,
  );
  const r = (
    await q(
      "select * from student_courses where user_id=$1 and course_id='valintakoe-g'",
      [uid],
    )
  )[0];
  assert.equal(r.status, "käytössä");
  assert.equal(r.shop_manual_access, false);
});
test("one refunded order never revokes another order or an admin grant", async () => {
  const a = await paidOrder(),
    b = await paidOrder();
  await rpc("shop_fulfill", [a.id, uid, false]);
  await rpc("shop_fulfill", [b.id, uid, false]);
  const ia = (
    await q("select id from shop_order_items where order_id=$1", [a.id])
  )[0].id;
  await refund(a.id, 1001, [ia]);
  assert.equal(
    (
      await q(
        "select status from student_courses where user_id=$1 and course_id='valintakoe-g'",
        [uid],
      )
    )[0].status,
    "käytössä",
  );
  await q(
    "update student_courses set status='käytössä' where user_id=$1 and course_id='valintakoe-g'",
    [uid],
  );
  const ib = (
    await q("select id from shop_order_items where order_id=$1", [b.id])
  )[0].id;
  await refund(b.id, 1001, [ib]);
  const r = (
    await q(
      "select * from student_courses where user_id=$1 and course_id='valintakoe-g'",
      [uid],
    )
  )[0];
  assert.equal(r.status, "käytössä");
  assert.equal(r.shop_manual_access, true);
});
test("partial refund prevents over-refunds and retry duplicates", async () => {
  const { id } = await paidOrder(),
    rid = randomUUID();
  await rpc("shop_start_refund", [id, 600, [], admin, rid]);
  assert.equal(
    (await rpc("shop_start_refund", [id, 600, [], admin, rid])).created,
    false,
  );
  await assert.rejects(
    rpc("shop_start_refund", [id, 402, [], admin, randomUUID()]),
    /ylittää/,
  );
  await rpc("shop_record_refund", [rid, randomUUID(), "ok"]);
  assert.equal(
    (await q("select status from shop_orders where id=$1", [id]))[0].status,
    "partially_refunded",
  );
});
test("old destructive rights deletion is rejected; manual editor preserves purchases", async () => {
  const { id } = await paidOrder();
  await rpc("shop_fulfill", [id, uid, false]);
  await assert.rejects(
    q("delete from student_courses where user_id=$1", [uid]),
    /Maksettua/,
  );
  await rpc("shop_manual_rights", [uid, []]);
  assert.equal(
    (
      await q(
        "select status from student_courses where user_id=$1 and course_id='valintakoe-g'",
        [uid],
      )
    )[0].status,
    "käytössä",
  );
});
test("expired shop rights are hidden by RLS; active manual rights stay visible", async () => {
  await q(
    "update shop_entitlement_grants set expires_at=now()-interval '1 second' where user_id=$1",
    [uid],
  );
  await rpc("shop_manual_rights", [
    uid,
    [{ id: "oikis-teho", title: "Manual" }],
  ]);
  await db.exec("set role authenticated");
  await db.exec(`select set_config('request.jwt.claim.sub','${uid}',false)`);
  const rows = await q("select course_id from student_courses");
  assert.ok(!rows.some((x) => x.course_id === "valintakoe-g"));
  assert.ok(rows.some((x) => x.course_id === "oikis-teho"));
  await db.exec("reset role");
});
test("anonymous/authenticated clients cannot read orders, mutate rights or call privileged functions", async () => {
  for (const role of ["anon", "authenticated"]) {
    await db.exec(`set role ${role}`);
    await assert.rejects(
      q("select email from shop_orders"),
      /permission denied/,
    );
    await assert.rejects(
      q("select shop_find_user('student@example.test')"),
      /permission denied/,
    );
    await assert.rejects(
      q("update student_courses set status='käytössä'"),
      /permission denied/,
    );
    await db.exec("reset role");
  }
});
test("persistent rate limits cap repeated calls", async () => {
  assert.equal(await rpc("shop_rate", ["rate-test", 1, 600]), true);
  assert.equal(await rpc("shop_rate", ["rate-test", 1, 600]), false);
});
test("cancellation queues one receipt and preserves first timestamp", async () => {
  const { id } = await paidOrder();
  await rpc("shop_cancel", [id, "Student"]);
  const first = (
    await q("select cancellation_requested_at from shop_orders where id=$1", [
      id,
    ])
  )[0].cancellation_requested_at;
  await rpc("shop_cancel", [id, "Again"]);
  assert.deepEqual(
    (
      await q("select cancellation_requested_at from shop_orders where id=$1", [
        id,
      ])
    )[0].cancellation_requested_at,
    first,
  );
  assert.equal(
    (
      await q(
        "select count(*)::int n from shop_jobs where order_id=$1 and kind='cancel'",
        [id],
      )
    )[0].n,
    1,
  );
});
test("workers claim exclusive jobs with expiring lease tokens", async () => {
  const [a] = await q("select * from shop_claim_job(null)"),
    [b] = await q("select * from shop_claim_job(null)");
  assert.ok(a.id);
  assert.notEqual(a.id, b.id);
  await q(
    "update shop_jobs set lease_until=now()-interval '1 second',available_at=now()-interval '1 day' where id=$1",
    [a.id],
  );
  const [c] = await q("select * from shop_claim_job(null)");
  assert.equal(c.id, a.id);
  assert.notEqual(c.lease_token, a.lease_token);
});
test("sales aggregates execute on persisted data and yield 30 Helsinki business dates", async () => {
  const r = await rpc("shop_sales_stats", ["test"]);
  assert.equal(r.chart.length, 30);
  assert.ok(r.orders > 0 && r.paid > 0 && r.refunds > 0);
  assert.ok(Array.isArray(r.top));
});

test("database environment marker separates payment modes and project refs", async () => {
  assert.equal(
    await rpc("shop_check_environment", ["test", "375917", "test-ref"]),
    false,
  );
  await q(
    "insert into shop_environment(mode,merchant_id,project_ref)values('test','375917','test-ref')",
  );
  assert.equal(
    await rpc("shop_check_environment", ["test", "375917", "test-ref"]),
    true,
  );
  assert.equal(
    await rpc("shop_check_environment", ["production", "375917", "test-ref"]),
    false,
  );
  assert.equal(
    await rpc("shop_check_environment", ["test", "375917", "wrong-ref"]),
    false,
  );
});

test("shop purchases require a verified mailbox and cannot be read by another user", async () => {
  const { id } = await paidOrder();
  await rpc("shop_fulfill", [id, uid, false]);
  await rpc("shop_manual_rights", [uid, []]);
  await q("update auth.users set email_confirmed_at=null where id=$1", [uid]);
  await db.exec(
    `select set_config('request.jwt.claim.sub','${uid}',false);set role authenticated`,
  );
  assert.ok(
    !(await q("select course_id from student_courses")).some(
      (r) => r.course_id === "valintakoe-g",
    ),
  );
  await db.exec("reset role");
  await q("update auth.users set email_confirmed_at=now() where id=$1", [uid]);
  await db.exec("set role authenticated");
  assert.ok(
    (await q("select course_id from student_courses")).some(
      (r) => r.course_id === "valintakoe-g",
    ),
  );
  await db.exec(`select set_config('request.jwt.claim.sub','${admin}',false)`);
  assert.ok(
    !(await q("select course_id from student_courses")).some(
      (r) => r.course_id === "valintakoe-g",
    ),
  );
  await db.exec("reset role");
});
test("refund confirmed before fulfillment cannot later recreate revoked rights", async () => {
  const { id } = await paidOrder(),
    item = (
      await q("select id from shop_order_items where order_id=$1", [id])
    )[0].id;
  await refund(id, 1001, [item]);
  await rpc("shop_fulfill", [id, uid, false]);
  assert.equal(
    (
      await q(
        "select count(*)::int n from shop_entitlement_grants where item_id=$1 and revoked_at is null",
        [item],
      )
    )[0].n,
    0,
  );
});

test("unlimited product snapshots, delivery and RLS have no expiration", async () => {
  const id = randomUUID();
  await q(
    "insert into shop_products(id,slug,name,price_cents,vat_percentage,course_ids,access_days,legal_kind,reviewed,published)values($1,$2,'Forever',1001,25.5,array['oikis'],null,'digital_content',true,true)",
    [id, "forever-" + id],
  );
  const oid = await checkout([id]),
    o = (await q("select * from shop_orders where id=$1", [oid]))[0],
    { payment: p } = await rpc("shop_start_payment", [oid]);
  await record(o, p, randomUUID(), "ok");
  await rpc("shop_fulfill", [oid, uid, false]);
  assert.equal(
    (
      await q("select access_days from shop_order_items where order_id=$1", [
        oid,
      ])
    )[0].access_days,
    null,
  );
  const row = (
    await q(
      "select * from student_courses where user_id=$1 and course_id='oikis'",
      [uid],
    )
  )[0];
  assert.equal(row.shop_access_until, null);
  assert.equal(row.status, "käytössä");
  await db.exec(
    `select set_config('request.jwt.claim.sub','${uid}',false);set role authenticated`,
  );
  assert.ok(
    (await q("select course_id from student_courses")).some(
      (r) => r.course_id === "oikis",
    ),
  );
  await db.exec("reset role");
  await assert.rejects(
    q("delete from student_courses where user_id=$1 and course_id='oikis'", [
      uid,
    ]),
    /Maksettua/,
  );
  const item = (
    await q("select id from shop_order_items where order_id=$1", [oid])
  )[0].id;
  await refund(oid, 1001, [item]);
  assert.equal(
    (
      await q(
        "select status from student_courses where user_id=$1 and course_id='oikis'",
        [uid],
      )
    )[0].status,
    "inactive",
  );
});
test("refunding one unlimited purchase preserves another source and manual access", async () => {
  const product = randomUUID();
  await q(
    "insert into shop_products(id,slug,name,price_cents,vat_percentage,course_ids,access_days,legal_kind,reviewed,published)values($1,$2,'Forever',1001,25.5,array['oikis'],null,'digital_content',true,true)",
    [product, "forever-" + product],
  );
  const orders = [];
  for (let n = 0; n < 2; n++) {
    const id = await checkout([product]),
      o = (await q("select * from shop_orders where id=$1", [id]))[0],
      { payment: p } = await rpc("shop_start_payment", [id]);
    await record(o, p, randomUUID(), "ok");
    await rpc("shop_fulfill", [id, uid, false]);
    orders.push(id);
  }
  const item = async (id) =>
    (await q("select id from shop_order_items where order_id=$1", [id]))[0].id;
  await refund(orders[0], 1001, [await item(orders[0])]);
  let r = (
    await q(
      "select * from student_courses where user_id=$1 and course_id='oikis'",
      [uid],
    )
  )[0];
  assert.equal(r.status, "käytössä");
  assert.equal(r.shop_access_until, null);
  await rpc("shop_manual_rights", [uid, [{ id: "oikis", title: "Manual" }]]);
  await refund(orders[1], 1001, [await item(orders[1])]);
  r = (
    await q(
      "select * from student_courses where user_id=$1 and course_id='oikis'",
      [uid],
    )
  )[0];
  assert.equal(r.status, "käytössä");
  assert.equal(r.shop_manual_access, true);
});
