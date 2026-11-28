const { test, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { PGlite } = require("@electric-sql/pglite");
const createLoader = require("./shop-test-loader.cjs");

let db;
const config = { internalSecret: "x".repeat(32), mode: "test", merchant: "375917", site: "https://example.test" };
const adminId = randomUUID();

async function rpc(name, args) {
  const parameters = Object.keys(args).map((key, i) => `${key} => $${i + 1}`);
  return (await db.query(`select public.${name}(${parameters}) as data`, Object.values(args))).rows[0].data;
}

// Use the production ownership lookup and SQL functions, with transport confined
// to the in-memory PostgreSQL fixture. No Paytrail, Auth or email request is sent.
const admin = {
  from(table) {
    assert.equal(table, "shop_orders");
    const filters = [];
    const query = {
      select(fields) { assert.equal(fields, "*"); return query; },
      eq(key, value) {
        assert.ok(["id", "request_key", "access_hash"].includes(key));
        filters.push([key, value]);
        return query;
      },
      async maybeSingle() {
        const where = filters.map(([key], i) => `${key} = $${i + 1}`).join(" and ");
        const rows = (await db.query(`select * from shop_orders where ${where}`, filters.map(([, value]) => value))).rows;
        return { data: rows[0] ?? null, error: null };
      },
      single() { return query.maybeSingle(); },
    };
    return query;
  },
};

const server = createLoader({
  "@/utils/supabase/admin": { createAdminClient: () => admin },
  "./config": { shopConfig: () => config },
})("lib/shop/server.ts");

before(async () => {
  db = new PGlite();
  await db.exec(`
    create role anon; create role authenticated; create role service_role bypassrls;
    create schema auth;
    create table auth.users(id uuid primary key,email text,deleted_at timestamptz,email_confirmed_at timestamptz default now());
    create function auth.uid() returns uuid language sql as $$
      select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid;
    $$;
    create table student_courses(id uuid primary key default gen_random_uuid(),user_id uuid references auth.users(id),
      email text,course_id text,course_slug text,course_title text,title text,status text,unique(user_id,course_id));
    alter table student_courses enable row level security;
    grant select,insert,update,delete on student_courses to authenticated;
  `);
  for (const name of ["20261103_paytrail_shop.sql", "20261103000100_shop_unlimited_access.sql"])
    await db.exec(fs.readFileSync(path.join(__dirname, "../supabase/migrations", name), "utf8"));
  await db.query("insert into auth.users(id,email) values($1,'admin@example.test')", [adminId]);
});
after(async () => { await db?.close(); });

async function cart(withCoupon = false) {
  const id = randomUUID();
  await db.query(`insert into shop_products(id,slug,name,description,price_cents,vat_percentage,course_ids,access_days,
    legal_kind,reviewed,published) values($1,$2,'G','Description',1001,25.5,array['valintakoe-g'],30,'digital_content',true,true)`, [id, id]);
  const code = withCoupon ? `ONCE-${randomUUID().slice(0, 8).toUpperCase()}` : "";
  if (code) await db.query("insert into shop_discounts(code,kind,value,max_uses) values($1,'fixed',200,1)", [code]);
  return { productIds: [id], code, expectedAmount: code ? 801 : 1001 };
}

function checkoutRoute(overrides = {}) {
  let providerCreations = 0;
  const api = createLoader({
    "@/lib/shop/config": { shopConfig: () => config },
    "@/lib/shop/server": {
      ...server,
      rpc,
      guardRequest: async () => {},
      checkDatabaseEnvironment: async () => {},
      shopSession: async () => "browser-session",
      shopError: error => Response.json({ error: error.message }, { status: 400 }),
      createPayment: async order => {
        const result = await rpc("shop_start_payment", { p_order: order.id });
        if (result.created) {
          providerCreations++;
          const transaction = randomUUID();
          const href = `https://services.paytrail.com/pay/${transaction}`;
          await db.query("update shop_payments set status='new',transaction_id=$1,href=$2 where id=$3", [transaction, href, result.payment.id]);
          return href;
        }
        return result.payment.href;
      },
      ...overrides,
    },
  })("app/api/shop/checkout/route.ts");
  return { api, providerCreations: () => providerCreations };
}

function submit(api, values) {
  return api.POST(new Request("https://example.test/api/shop/checkout", {
    method: "POST",
    body: JSON.stringify({
      email: "student@example.test", name: "Student", terms: true, immediate: true,
      withdrawalAck: true, serviceAck: false, consentVersion: "2026-11-15.2", ...values,
    }),
  }));
}

test("an identical checkout retry recovers the original order after its coupon's last use was reserved", async () => {
  const values = { ...await cart(true), key: randomUUID() };
  const h = checkoutRoute();
  const first = await submit(h.api, values);
  assert.equal(first.status, 200);
  const original = await first.json();
  const retry = await submit(h.api, values);
  assert.equal(retry.status, 200);
  assert.deepEqual(await retry.json(), original);
  assert.equal(h.providerCreations(), 1);
  const stored = (await db.query("select request_key from shop_orders where id=$1", [original.orderId])).rows[0];
  assert.equal(await server.orderForCheckout(stored.request_key, server.tokenHash("another-browser")), null);
  const otherKey = await submit(h.api, { ...values, key: randomUUID() });
  assert.equal(otherKey.status, 400);
  assert.match((await otherKey.json()).error, /käyttökerrat/);
});

test("a concurrent retry recovers the winner even when both initial ownership lookups saw no order", async () => {
  const values = { ...await cart(true), key: randomUUID() };
  let release;
  const winnerFinished = new Promise(resolve => { release = resolve; });
  let announceLookup;
  const lookupFinished = new Promise(resolve => { announceLookup = resolve; });
  let firstLookup = true;
  const loser = checkoutRoute({
    orderForCheckout: async (...args) => {
      const result = await server.orderForCheckout(...args);
      if (firstLookup) {
        firstLookup = false;
        assert.equal(result, null);
        announceLookup();
        await winnerFinished;
      }
      return result;
    },
  });
  const pending = submit(loser.api, values);
  await lookupFinished;
  const winner = checkoutRoute();
  const won = await submit(winner.api, values);
  const original = await won.json();
  release();
  const recovered = await pending;
  assert.equal(recovered.status, 200);
  assert.deepEqual(await recovered.json(), original);
  assert.equal(winner.providerCreations() + loser.providerCreations(), 1);
});

function storage() {
  const entries = new Map();
  return {
    get length() { return entries.size; },
    getItem: key => entries.get(key) ?? null,
    setItem: (key, value) => entries.set(key, String(value)),
    removeItem: key => entries.delete(key),
    key: index => [...entries.keys()][index] ?? null,
  };
}

test("a confirmed order releases only its own checkout key, so a repurchase after refund creates a new order", async () => {
  const previous = { sessionStorage: global.sessionStorage, localStorage: global.localStorage, window: global.window };
  global.sessionStorage = storage();
  global.localStorage = storage();
  global.window = { dispatchEvent() {} };
  try {
    const sessions = createLoader()("lib/shop/checkout-session.ts");
    const { removePaidOrderItems } = createLoader()("components/shop/cart.ts");
    const values = await cart();
    const fingerprint = JSON.stringify({ productIds: values.productIds, code: "" });
    const first = sessions.checkoutAttempt(fingerprint, "student@example.test");
    const unrelated = sessions.checkoutAttempt("other-cart", "other@example.test");
    sessions.rememberCheckoutOrder(unrelated.storageKey, unrelated.key, randomUUID());
    const h = checkoutRoute();
    const placed = await submit(h.api, { ...values, key: first.key });
    assert.equal(placed.status, 200);
    const order = await placed.json();
    sessions.rememberCheckoutOrder(first.storageKey, first.key, order.orderId);
    assert.equal(sessions.checkoutAttempt(fingerprint, "student@example.test").key, first.key);
    const payment = (await db.query("select * from shop_payments where order_id=$1", [order.orderId])).rows[0];
    const storedOrder = (await db.query("select * from shop_orders where id=$1", [order.orderId])).rows[0];
    await rpc("shop_record_payment", {
      p_payment: payment.id, p_transaction: payment.transaction_id, p_status: "ok", p_amount: 1001,
      p_currency: "EUR", p_stamp: payment.stamp, p_reference: String(storedOrder.number), p_provider: "test",
    });
    const refundId = randomUUID();
    await rpc("shop_start_refund", { p_order: order.orderId, p_amount: 1001, p_revoke: [], p_admin: adminId, p_id: refundId });
    await rpc("shop_record_refund", { p_refund: refundId, p_transaction: randomUUID(), p_status: "ok" });
    // Exercise the actual cleanup called by OrderStatus, even without a matching
    // localStorage last-order marker (for example, when another tab changed it).
    removePaidOrderItems(order.orderId, values.productIds);
    assert.equal(sessions.checkoutAttempt("other-cart", "other@example.test").key, unrelated.key);
    const next = sessions.checkoutAttempt(fingerprint, "student@example.test");
    assert.notEqual(next.key, first.key);
    const repurchase = await submit(h.api, { ...values, key: next.key });
    assert.equal(repurchase.status, 200);
    assert.notEqual((await repurchase.json()).orderId, order.orderId);
    assert.equal(h.providerCreations(), 2);
  } finally { Object.assign(global, previous); }
});

test("legacy unfinished keys still retry safely and completed replays do not start another payment", async () => {
  const previous = global.sessionStorage;
  global.sessionStorage = storage();
  try {
    const sessions = createLoader()("lib/shop/checkout-session.ts");
    const values = await cart();
    const fingerprint = JSON.stringify({ productIds: values.productIds, code: "" });
    const legacyKey = randomUUID();
    const storageKey = `vg-checkout:${fingerprint}:student@example.test`;
    sessionStorage.setItem(storageKey, legacyKey);
    assert.equal(sessions.checkoutAttempt(fingerprint, "student@example.test").key, legacyKey);
    const h = checkoutRoute();
    const placed = await submit(h.api, { ...values, key: legacyKey });
    const order = await placed.json();
    await db.query("update shop_orders set status='paid',paid_at=now() where id=$1", [order.orderId]);
    const replay = await submit(h.api, { ...values, key: legacyKey });
    assert.equal(replay.status, 200);
    assert.deepEqual(await replay.json(), { orderId: order.orderId, href: null, completed: true });
    assert.equal(h.providerCreations(), 1);
    sessions.rememberCheckoutOrder(storageKey, legacyKey, order.orderId);
    sessions.completeCheckoutOrder(order.orderId);
    assert.notEqual(sessions.checkoutAttempt(fingerprint, "student@example.test").key, legacyKey);
  } finally { global.sessionStorage = previous; }
});

function statusHarness() {
  let session, reads = 0, rateCalls = 0;
  const client = {
    from(table) { reads++; return admin.from(table); },
    async rpc(name, args) {
      assert.equal(name, "shop_rate");
      rateCalls++;
      return { data: await rpc(name, args), error: null };
    },
  };
  const statusServer = createLoader({
    "@/utils/supabase/admin": { createAdminClient: () => client },
    "next/headers": { cookies: async () => ({ get: () => ({ value: session }) }) },
    "./config": { shopConfig: () => config, shopRequestConfig: () => config },
  })("lib/shop/server.ts");
  const api = createLoader({
    "@/lib/shop/server": {
      ...statusServer,
      publicOrder: async order => ({ id: order.id, status: order.status }),
      shopError: error => Response.json({ error: error.message }, { status: 404 }),
    },
  })("app/api/shop/status/route.ts");
  return { api, server: statusServer, session(value) { session = value; }, reads: () => reads, rateCalls: () => rateCalls };
}

function statusRequest(orderId, headers = {}, extra = {}) {
  return new Request("https://example.test/api/shop/status", {
    method: "POST",
    headers: { origin: config.site, "content-type": "application/json", "x-vercel-forwarded-for": "192.0.2.17", ...headers },
    body: JSON.stringify({ orderId, ...extra }),
  });
}

test("five verified buyers sharing an IP have independent status budgets, while each browser remains limited", async () => {
  const values = await cart();
  const buyers = [];
  for (let i = 0; i < 5; i++) {
    const session = String(i + 1).repeat(64);
    const checkout = checkoutRoute({ shopSession: async () => session });
    const placed = await submit(checkout.api, { ...values, key: randomUUID() });
    buyers.push({ session, orderId: (await placed.json()).orderId });
  }
  const h = statusHarness();
  for (const buyer of buyers) {
    h.session(buyer.session);
    for (let i = 0; i < 40; i++)
      assert.equal((await h.api.POST(statusRequest(buyer.orderId))).status, 200);
  }
  assert.equal(h.rateCalls(), 200);
  h.session(buyers[0].session);
  for (let i = 40; i < 90; i++)
    assert.equal((await h.api.POST(statusRequest(buyers[0].orderId))).status, 200);
  const blocked = await h.api.POST(statusRequest(buyers[0].orderId, {}, {
    verifiedSessionHash: "f".repeat(64), rateKey: "invented-bucket",
  }));
  assert.equal(blocked.status, 404);
  assert.match((await blocked.json()).error, /Liian monta/);
  h.session(buyers[1].session);
  assert.equal((await h.api.POST(statusRequest(buyers[1].orderId))).status, 200);

  const rateCalls = h.rateCalls();
  h.session("a".repeat(64));
  const guessed = await h.api.POST(statusRequest(buyers[1].orderId));
  assert.equal(guessed.status, 404);
  assert.equal(h.rateCalls(), rateCalls);
  assert.match((await guessed.json()).error, /Tilausta ei löytynyt/);
});

test("status rejects foreign origins and oversized bodies before database access; other shop limits remain IP-based", async () => {
  const h = statusHarness();
  const id = randomUUID();
  assert.equal((await h.api.POST(statusRequest(id, { origin: "https://evil.test" }))).status, 404);
  assert.equal((await h.api.POST(statusRequest(id, { "content-length": "20000" }))).status, 404);
  const tooLarge = new Request("https://example.test/api/shop/status", {
    method: "POST", headers: { origin: config.site }, body: "x".repeat(16385),
  });
  assert.equal((await h.api.POST(tooLarge)).status, 404);
  assert.equal(h.reads(), 0);
  assert.equal(h.rateCalls(), 0);
  const request = statusRequest(id, { "x-vercel-forwarded-for": "192.0.2.18" });
  await h.server.guardRequest(request, "quote", 2);
  h.session("b".repeat(64));
  await h.server.guardRequest(request, "quote", 2);
  h.session("c".repeat(64));
  await assert.rejects(h.server.guardRequest(request, "quote", 2), /Liian monta/);
});

function fakeClock() {
  let now = 0, nextId = 0;
  const timers = new Map();
  const original = { setTimeout: global.setTimeout, clearTimeout: global.clearTimeout };
  global.setTimeout = (callback, delay = 0) => {
    const id = ++nextId;
    timers.set(id, { at: now + delay, callback });
    return id;
  };
  global.clearTimeout = id => timers.delete(id);
  return {
    async advance(ms) {
      const target = now + ms;
      while (timers.size) {
        const [id, timer] = [...timers].sort((a, b) => a[1].at - b[1].at)[0];
        if (timer.at > target) break;
        now = timer.at;
        timers.delete(id);
        timer.callback();
        for (let i = 0; i < 5; i++) await Promise.resolve();
      }
      now = target;
    },
    restore() { Object.assign(global, original); },
  };
}

const pendingOrder = { status: "unpaid", fulfillment_status: "pending", payment_status: "pending" };
const polling = createLoader()("lib/shop/order-polling.ts");

test("three active order tabs stay under the shared IP budget of 90 requests per ten minutes", async () => {
  const clock = fakeClock();
  const stops = [];
  let requests = 0;
  try {
    for (let i = 0; i < 3; i++) stops.push(polling.startOrderPolling(async () => { requests++; return pendingOrder; }));
    await clock.advance(600000);
    assert.equal(requests, 63);
    assert.ok(requests < 90);
  } finally { stops.forEach(stop => stop()); clock.restore(); }
});

test("polling follows pending fulfillment, then stops at delivery or a failed/refunded payment", async () => {
  for (const finalOrder of [
    { ...pendingOrder, status: "paid", fulfillment_status: "delivered" },
    { ...pendingOrder, payment_status: "fail" },
    { ...pendingOrder, status: "refunded" },
  ]) {
    const clock = fakeClock();
    let requests = 0;
    const stop = polling.startOrderPolling(async () => ++requests === 1 ? { ...pendingOrder, status: "paid" } : finalOrder);
    try {
      await clock.advance(600000);
      assert.equal(requests, 2);
    } finally { stop(); clock.restore(); }
  }
});

test("polls do not overlap slow requests, back off on failure and skip hidden tabs", async () => {
  const clock = fakeClock();
  let requests = 0, release;
  let visible = true;
  const wait = new Promise(resolve => { release = resolve; });
  const stop = polling.startOrderPolling(async () => { requests++; return requests === 1 ? wait : null; }, () => visible);
  try {
    await clock.advance(120000);
    assert.equal(requests, 1);
    release(pendingOrder);
    for (let i = 0; i < 5; i++) await Promise.resolve();
    await clock.advance(30000);
    assert.equal(requests, 2);
    await clock.advance(30000);
    assert.equal(requests, 2);
    await clock.advance(30000);
    assert.equal(requests, 3);
    visible = false;
    await clock.advance(600000);
    assert.equal(requests, 3);
    stop();
    visible = true;
    await clock.advance(600000);
    assert.equal(requests, 3);
  } finally { stop(); clock.restore(); }
});
