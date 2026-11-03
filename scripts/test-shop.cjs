const { test } = require("node:test"),
  assert = require("node:assert/strict"),
  { createHmac, randomUUID } = require("node:crypto");
const loader = require("./shop-test-loader.cjs");
const load = loader();
const core = load("lib/shop/core.ts"),
  cart = load("lib/shop/cart-model.ts");
const a = "11111111-1111-4111-8111-111111111111",
  b = "22222222-2222-4222-8222-222222222222";
test("HMAC exactly signs alphabetic lowercase checkout fields, newline and original UTF-8 body", () => {
  const fields = {
    "checkout-timestamp": "2026-11-03",
    "checkout-method": "POST",
    "checkout-algorithm": "sha256",
    "checkout-account": "375917",
    ignored: "value",
  };
  const body = '{"message":"ä"}';
  const expected = createHmac("sha256", "secret")
    .update(
      "checkout-account:375917\ncheckout-algorithm:sha256\ncheckout-method:POST\ncheckout-timestamp:2026-11-03\n" +
        body,
    )
    .digest("hex");
  assert.equal(core.signature(fields, body, "secret"), expected);
  assert.equal(core.verifySignature(fields, body, "secret", expected), true);
  assert.equal(
    core.verifySignature(fields, body + " ", "secret", expected),
    false,
  );
  assert.equal(core.verifySignature(fields, body, "wrong", expected), false);
});
test("SHA-512 and newly added checkout fields are covered, malformed algorithms and signatures fail", () => {
  const f = { "checkout-algorithm": "sha512", "checkout-future": "included" };
  const sig = core.signature(f, "", "s", "sha512");
  assert.equal(sig.length, 128);
  assert.ok(core.verifySignature(f, "", "s", sig));
  assert.ok(
    !core.verifySignature({ ...f, "checkout-future": "changed" }, "", "s", sig),
  );
  for (const bad of ["", "g".repeat(128), "abc"])
    assert.ok(!core.verifySignature(f, "", "s", bad));
  assert.ok(
    !core.verifySignature({ "checkout-algorithm": "md5" }, "", "s", ""),
  );
});
test("callback parsing rejects duplicate/mixed-case parameters and newline injection", () => {
  for (const u of [
    "https://example.test/?checkout-status=ok&checkout-status=fail",
    "https://example.test/?Checkout-status=ok",
    "https://example.test/?signature=a&signature=b",
  ])
    assert.throws(() => core.signedQuery(new URL(u)));
  assert.throws(() =>
    core.signature(
      { "checkout-algorithm": "sha256", "checkout-a": "x\ny" },
      "",
      "s",
    ),
  );
});
test("server refuses any mismatch in payment amount, currency, transaction, stamp, reference or unknown status", () => {
  const p = {
    transactionId: a,
    amount: 1001,
    currency: "EUR",
    stamp: b,
    reference: "123",
    status: "ok",
  };
  assert.doesNotThrow(() => core.assertPaymentMatch(p, p));
  for (const [k, v] of Object.entries({
    amount: 1,
    currency: "USD",
    transactionId: b,
    stamp: a,
    reference: "124",
    status: "refunded",
  }))
    assert.throws(() => core.assertPaymentMatch({ ...p, [k]: v }, p));
});
test("cart accepts only unique UUID product IDs and prevents duplicate course packages", () => {
  for (const value of [[], [a, a], ["x"], Array(21).fill(a), null])
    assert.throws(() => core.productIds(value));
  assert.deepEqual(core.productIds([a, b]), [a, b]);
  const p = { id: a, course_ids: ["g"] },
    same = { id: b, course_ids: ["g", "oikis"] };
  assert.deepEqual(cart.cartWithoutOverlap([a], p, [p]), [a]);
  assert.throws(() => cart.cartWithoutOverlap([a], same, [p]));
});
test("HTML email data is escaped", () => {
  assert.equal(
    core.html('<img onerror="x">&'),
    "&lt;img onerror=&quot;x&quot;&gt;&amp;",
  );
});
const cfg = {
  merchant: "375917",
  secret: "secret",
  mode: "test",
  site: "https://example.test",
  internalSecret: "x".repeat(32),
};
test("Paytrail HTTP client signs exact request and rejects unsigned/tampered responses (mock transport)", async () => {
  const original = global.fetch;
  let sent;
  const api = loader({ "./config": { shopConfig: () => cfg } })(
    "lib/shop/paytrail.ts",
  );
  try {
    global.fetch = async (url, init) => {
      sent = { url, init };
      const raw = '{"transactionId":"' + a + '"}',
        f = { "checkout-algorithm": "sha256", "checkout-account": "375917" };
      return new Response(raw, {
        headers: {
          ...f,
          signature: core.signature(f, raw, "secret"),
          "request-id": "request-test",
        },
      });
    };
    const r = await api.paytrail("POST", "/payments", { amount: 1001 });
    assert.equal(r.requestId, "request-test");
    assert.equal(sent.init.body, '{"amount":1001}');
    assert.ok(
      core.verifySignature(
        sent.init.headers,
        sent.init.body,
        "secret",
        sent.init.headers.signature,
      ),
    );
    global.fetch = async () =>
      new Response('{"status":"ok"}', {
        headers: { "checkout-algorithm": "sha256", signature: "0".repeat(64) },
      });
    await assert.rejects(
      api.paytrail("GET", "/payments/" + a),
      /allekirjoitus/,
    );
  } finally {
    global.fetch = original;
  }
});
test("Paytrail redirect cannot send visitors to arbitrary hosts (mock transport)", () => {
  const api = loader({ "./config": { shopConfig: () => cfg } })(
    "lib/shop/paytrail.ts",
  );
  assert.equal(
    api.safePaytrailHref("https://services.paytrail.com/pay/" + a),
    "https://services.paytrail.com/pay/" + a,
  );
  assert.equal(
    api.safePaytrailHref("https://pay.paytrail.com/pay/" + a, a),
    "https://pay.paytrail.com/pay/" + a,
  );
  assert.throws(() => api.safePaytrailHref("https://pay.paytrail.com/pay/" + a, b));
  for (const url of [
    "javascript:alert(1)",
    "https://evil.test/pay/x",
    "https://services.paytrail.com.evil.test/pay/x",
    "https://name:pass@services.paytrail.com/pay/x",
  ])
    assert.throws(() => api.safePaytrailHref(url));
});
test("all admin commerce handlers deny non-admin users before touching data (mock auth)", async () => {
  const api = loader({
    "@/lib/shop/admin": {
      shopAdmin: async () => ({
        error: Response.json({ error: "Forbidden" }, { status: 403 }),
      }),
    },
    "@/lib/shop/server": {},
    "@/lib/shop/refunds": {},
    "@/lib/shop/jobs": {},
  })("app/api/admin/shop/route.ts");
  for (const method of ["GET", "POST"])
    assert.equal(
      (
        await api[method](
          new Request("https://example.test/api/admin/shop", {
            method,
            ...(method === "POST" ? { body: "{}" } : {}),
          }),
        )
      ).status,
      403,
    );
});
function jobHarness({
  existing = a,
  status = "paid",
  createFails = false,
  emailFails = false,
  confirmed = false,
} = {}) {
  let calls = [],
    claimed = false;
  const job = {
    id: b,
    order_id: a,
    kind: "fulfill",
    attempts: 1,
    lease_token: randomUUID(),
  };
  const order = {
    id: a,
    email: "student@example.test",
    status,
    mode: "test",
    fulfillment_status: "pending",
    user_id: a,
  };
  const chain = {
    update: (body) => {
      calls.push(["update", body]);
      return chain;
    },
    eq: () => chain,
    then: (resolve) => Promise.resolve({ error: null }).then(resolve),
  };
  const admin = {
    from: () => chain,
    auth: {
      admin: {
        getUserById: async () => ({
          data: { user: { id: a, email: order.email, email_confirmed_at: confirmed ? "confirmed" : undefined } },
          error: null,
        }),
        inviteUserByEmail: async (email, options) => {
          calls.push(["invite", email, options]);
          return { data: { user: { id: a } }, error: null };
        },
        createUser: async (input) => {
          calls.push(["create", input]);
          return createFails
            ? { data: { user: null }, error: { message: "duplicate" } }
            : { data: { user: { id: a } }, error: null };
        },
      },
    },
  };
  let finds = 0;
  const server = {
    db: () => admin,
    orderById: async () => order,
    assertEnvironment: async () => {},
    rpc: async (name, args) => {
      calls.push([name, args]);
      if (name === "shop_claim_job") {
        if (claimed) return [];
        claimed = true;
        return [job];
      }
      if (name === "shop_find_user") {
        finds++;
        return createFails && finds > 1 ? a : existing;
      }
      return null;
    },
    itemsForOrder: async () => [],
  };
  const jobs = loader({
    "./server": server,
    "./config": { shopConfig: () => cfg },
    "./email": {
      sendOrderEmail: async () => {
        if (emailFails) throw Error("email_failed");
      },
    },
  })("lib/shop/jobs.ts");
  return { jobs, calls, job, order };
}
test("new Auth user is created only after payment, never email-confirmed or assigned an emailed password (mock Auth)", async () => {
  const h = jobHarness({ existing: null });
  assert.equal((await h.jobs.processJobs(a, 1)).completed, 1);
  const input = h.calls.find((c) => c[0] === "create")[1];
  assert.equal(input.email_confirm, false);
  assert.equal(input.password, undefined);
  assert.ok(h.calls.some((c) => c[0] === "shop_fulfill"));
  const unpaid = jobHarness({ existing: null, status: "unpaid" });
  assert.equal((await unpaid.jobs.processJobs(a, 1)).failed, 1);
  assert.ok(!unpaid.calls.some((c) => c[0] === "create"));
});
test("existing users and concurrent user creation reuse the original Auth identity (mock Auth)", async () => {
  for (const config of [
    { existing: a },
    { existing: null, createFails: true },
  ]) {
    const h = jobHarness(config);
    assert.equal((await h.jobs.processJobs(a, 1)).completed, 1);
    assert.equal(h.calls.find((c) => c[0] === "shop_fulfill")[1].p_user, a);
    if (config.existing) assert.ok(!h.calls.some((c) => c[0] === "create"));
  }
});
test("access job uses the Supabase invitation for unconfirmed accounts and skips confirmed accounts", async () => {
  for (const confirmed of [false, true]) {
    const h = jobHarness({ confirmed });
    h.job.kind = "access";
    h.order.fulfillment_status = "delivered";
    assert.equal((await h.jobs.processJobs(a, 1)).completed, 1);
    const invite = h.calls.find((c) => c[0] === "invite");
    if (confirmed) assert.equal(invite, undefined);
    else assert.deepEqual(invite, [
      "invite",
      h.order.email,
      { redirectTo: "https://example.test/aseta-salasana" },
    ]);
  }
});
test("failed email remains retryable and does not undo payment or course rights (mock Resend)", async () => {
  const h = jobHarness({ emailFails: true });
  h.job.kind = "receipt";
  const r = await h.jobs.processJobs(a, 1);
  assert.equal(r.failed, 1);
  const update = h.calls.find((c) => c[0] === "update")[1];
  assert.equal(update.status, "queued");
  assert.equal(update.last_error, "receipt_failed");
  assert.ok(!h.calls.some((c) => c[0] === "shop_fulfill"));
});
test("Resend receipt includes immutable terms and uses a stable idempotency key (mock Resend)", async () => {
  const original = global.fetch,
    originalKey = process.env.RESEND_API_KEY,
    originalFrom = process.env.SUPPORT_FROM_EMAIL;
  process.env.RESEND_API_KEY = "test-api-key";
  process.env.SUPPORT_FROM_EMAIL = "ValintaGuru <test@example.test>";
  let sent;
  try {
    global.fetch = async (url, init) => {
      sent = { url, init };
      return new Response("{}", { status: 200 });
    };
    const email = loader({
      "./config": { shopConfig: () => cfg },
      "./server": { db: () => ({}) },
    })("lib/shop/email.ts");
    await email.sendOrderEmail(
      { id: b, kind: "receipt" },
      {
        number: 42,
        new_user: true,
        amount_cents: 1001,
        email: "student@example.test",
        terms_version: "v1",
        terms_snapshot: { paragraphs: ["Frozen terms"] },
        immediate_consent: true,
        withdrawal_ack: true,
      },
      [
        {
          name: "<Course>",
          total_cents: 1001,
          vat_percentage: 25.5,
          access_days: 30,
        },
      ],
    );
    assert.equal(sent.init.headers["Idempotency-Key"], "shop-" + b);
    const body = JSON.parse(sent.init.body);
    assert.ok(body.html.includes("&lt;Course&gt;"));
    assert.ok(body.text.includes("Frozen terms"));
    assert.ok(!body.html.includes("/kirjaudu"));
    assert.ok(!body.text.includes("/kirjaudu"));
    assert.ok(body.subject.startsWith("[TESTI]"));
    delete process.env.SUPPORT_FROM_EMAIL;
    await email.sendOrderEmail(
      { id: b, kind: "receipt" },
      { number: 42, terms_snapshot: { paragraphs: [] } },
      [],
    );
    assert.equal(
      JSON.parse(sent.init.body).from,
      "ValintaGuru <info@valintaguru.fi>",
    );
    global.fetch = async () => new Response("{}", { status: 503 });
    await assert.rejects(
      email.sendOrderEmail(
        { id: b, kind: "receipt" },
        { number: 42, terms_snapshot: { paragraphs: [] } },
        [],
      ),
    );
  } finally {
    global.fetch = original;
    if (originalKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalKey;
    if (originalFrom === undefined) delete process.env.SUPPORT_FROM_EMAIL;
    else process.env.SUPPORT_FROM_EMAIL = originalFrom;
  }
});

test("environment guard rejects production credentials in test, unapproved live payments and mismatched Supabase projects", () => {
  const backup = { ...process.env };
  const e = Object.fromEntries(
    require("node:fs")
      .readFileSync(
        require("node:path").join(__dirname, "../.env.example"),
        "utf8",
      )
      .split("\n")
      .filter((l) => l.startsWith("PAYTRAIL_"))
      .map((l) => l.split("=")),
  );
  try {
    Object.assign(process.env, e, {
      NEXT_PUBLIC_SITE_URL: "https://example.test",
      NEXT_PUBLIC_SUPABASE_URL: "https://test-ref.supabase.co",
      SHOP_SUPABASE_PROJECT_REF: "test-ref",
      SHOP_INTERNAL_SECRET: "x".repeat(32),
    });
    const config = load("lib/shop/config.ts").shopConfig;
    assert.equal(config().mode, "test");
    process.env.PAYTRAIL_SECRET_KEY = "wrong";
    assert.throws(config, /Testitila/);
    process.env.PAYTRAIL_SECRET_KEY = e.PAYTRAIL_SECRET_KEY;
    process.env.SHOP_SUPABASE_PROJECT_REF = "wrong";
    assert.throws(config, /Supabase/);
    process.env.SHOP_SUPABASE_PROJECT_REF = "test-ref";
    process.env.PAYTRAIL_MODE = "production";
    assert.throws(config, /rahaliikenne/);
    Object.assign(process.env, {
      PAYTRAIL_MERCHANT_ID: "99999999",
      PAYTRAIL_SECRET_KEY: "non-live-test-input",
      SHOP_LIVE_ENABLED: "true",
      SHOP_LEGAL_REVIEWED: "true",
      SHOP_SELLER_POSTAL_ADDRESS: "Example street 1",
      VERCEL_ENV: "preview",
    });
    assert.throws(config, /rahaliikenne/);
    process.env.VERCEL_ENV = "production";
    assert.equal(config().merchant, "99999999");
    assert.equal(config().mode, "production");
    process.env.SHOP_LIVE_ENABLED = "false";
    assert.throws(config, /rahaliikenne/);
  } finally {
    for (const key of Object.keys(process.env))
      if (!(key in backup)) delete process.env[key];
    Object.assign(process.env, backup);
  }
});

test("customer errors remain understandable when a gateway returns HTML or the network fails", async () => {
  const client = load("components/shop/client-api.ts");
  await assert.rejects(
    client.shopJson(
      new Response("<html>Gateway error</html>", {
        headers: { "Content-Type": "text/html" },
        status: 502,
      }),
    ),
    /Palvelu ei juuri nyt vastaa/,
  );
  await assert.rejects(
    client.shopJson(
      new Response("{broken", {
        headers: { "Content-Type": "application/json" },
      }),
    ),
    /Vastausta ei voitu käsitellä/,
  );
  const original = global.fetch;
  try {
    global.fetch = async () => {
      throw new TypeError("Technical network details");
    };
    await assert.rejects(
      client.shopFetch("https://example.test"),
      /Yhteys katkesi/,
    );
  } finally {
    global.fetch = original;
  }
});

test("public catalog query excludes draft, archived and unreviewed products; hidden products require explicit detail lookup", async () => {
  const calls = [];
  const query = {
    select: () => query,
    eq: (key, value) => {
      calls.push([key, value]);
      return query;
    },
    order: () => query,
    then: (resolve) => Promise.resolve({ data: [], error: null }).then(resolve),
  };
  const server = loader({
    "@/utils/supabase/admin": {
      createAdminClient: () => ({
        from: (table) => {
          assert.equal(table, "shop_products");
          return query;
        },
      }),
    },
    "next/headers": {},
    "./config": { shopConfig: () => cfg },
    "./paytrail": {},
  })("lib/shop/server.ts");
  assert.deepEqual(await server.catalog(), []);
  for (const condition of [
    ["published", true],
    ["archived", false],
    ["reviewed", true],
    ["visible", true],
  ])
    assert.ok(
      calls.some((c) => JSON.stringify(c) === JSON.stringify(condition)),
    );
  calls.length = 0;
  await server.catalog(true);
  assert.ok(!calls.some((c) => c[0] === "visible"));
});
test("a guessed order UUID with another browser session cannot expose order details", async () => {
  const token = "a".repeat(64),
    other = "b".repeat(64);
  let ownerHash;
  const query = {
    select: () => query,
    eq: () => query,
    single: async () => ({
      data: { id: a, access_hash: ownerHash, email: "private@example.test" },
      error: null,
    }),
  };
  const server = loader({
    "@/utils/supabase/admin": {
      createAdminClient: () => ({ from: () => query }),
    },
    "next/headers": {
      cookies: async () => ({ get: () => ({ value: token }) }),
    },
    "./config": { shopConfig: () => cfg },
    "./paytrail": {},
  })("lib/shop/server.ts");
  ownerHash = server.tokenHash(other);
  await assert.rejects(server.ownOrder(a), /Tilausta ei löytynyt/);
  ownerHash = server.tokenHash(token);
  assert.equal((await server.ownOrder(a)).id, a);
});

test("manual rights retain legacy behavior only when both the shop RPC and order table are absent", async () => {
  const calls = [];
  const missing = { code: "PGRST202" };
  let rpcError = missing,
    tableError = { code: "PGRST205" };
  const manual = {
    delete: () => {
      calls.push("delete");
      return { eq: async () => ({ error: null }) };
    },
    upsert: async (rows) => {
      calls.push(["upsert", rows]);
      return { error: null };
    },
  };
  const admin = {
    auth: {
      admin: {
        getUserById: async () => ({
          data: { user: { id: a, email: "Student@Example.test" } },
          error: null,
        }),
      },
    },
    rpc: async () => ({ error: rpcError }),
    from: (table) =>
      table === "shop_orders"
        ? {
            select: () => ({
              limit: async () => ({ data: [], error: tableError }),
            }),
          }
        : manual,
  };
  const route = loader({
    "@/lib/adminAccess": {
      requireAdminApi: async () => ({ admin, user: { id: b } }),
    },
    "@/data/courses": { courses: [{ id: "valintakoe-g", title: "G" }] },
  })("app/api/admin/users/[userId]/rights/route.ts");
  const invoke = () =>
    route.PUT(
      new Request("https://example.test/api/admin/users/" + a + "/rights", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseIds: ["valintakoe-g"] }),
      }),
      { params: Promise.resolve({ userId: a }) },
    );
  assert.equal((await invoke()).status, 200);
  assert.equal(calls[0], "delete");
  assert.equal(calls[1][1][0].email, "student@example.test");
  for (const error of [null, { code: "42501" }, { code: "08006" }]) {
    calls.length = 0;
    tableError = error;
    assert.equal((await invoke()).status, 503);
    assert.equal(calls.length, 0);
  }
  calls.length = 0;
  rpcError = { code: "23505" };
  assert.equal((await invoke()).status, 500);
  assert.equal(calls.length, 0);
  calls.length = 0;
  rpcError = null;
  assert.equal((await invoke()).status, 200);
  assert.equal(calls.length, 0);
});

test("unlimited access requires an explicit admin choice and has a clear duration label", () => {
  const admin = loader({
    "@/lib/adminAccess": {},
    "@/data/courses": { courses: [{ id: "valintakoe-g" }] },
  })("lib/shop/admin.ts");
  const body = {
    slug: "g",
    name: "G",
    description: "Description",
    content: "Content",
    audience: "Applicants",
    category: "G",
    price_cents: 12000,
    sale_price_cents: null,
    vat_percentage: 25.5,
    course_ids: ["valintakoe-g"],
    access_days: null,
    access_unlimited: true,
    legal_kind: "digital_content",
    published: true,
    visible: true,
    reviewed: true,
    archived: false,
    sort_order: 0,
    image_url: null,
  };
  assert.equal(admin.validateProduct(body).access_days, null);
  assert.throws(() =>
    admin.validateProduct({ ...body, access_unlimited: false }),
  );
  assert.equal(
    admin.validateProduct({ ...body, access_unlimited: false, access_days: 30 })
      .access_days,
    30,
  );
  const types = load("lib/shop/types.ts");
  assert.equal(types.accessDuration(null), "toistaiseksi");
  assert.equal(types.accessDuration(30), "30 päivää");
});

test("price-quote configuration does not require payment credentials and still validates origins and secrets", () => {
  const backup = { ...process.env };
  try {
    for (const key of [
      "PAYTRAIL_MERCHANT_ID",
      "PAYTRAIL_SECRET_KEY",
      "PAYTRAIL_MODE",
    ])
      delete process.env[key];
    Object.assign(process.env, {
      NEXT_PUBLIC_SITE_URL: "https://example.test",
      SHOP_INTERNAL_SECRET: "x".repeat(32),
    });
    const config = load("lib/shop/config.ts");
    assert.equal(config.shopRequestConfig().site, "https://example.test");
    assert.throws(config.shopConfig, /PAYTRAIL_MERCHANT_ID/);
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.test/untrusted";
    assert.throws(config.shopRequestConfig, /alkuperän/);
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.test";
    process.env.SHOP_INTERNAL_SECRET = "short";
    assert.throws(config.shopRequestConfig, /32 merkkiä/);
  } finally {
    for (const key of Object.keys(process.env))
      if (!(key in backup)) delete process.env[key];
    Object.assign(process.env, backup);
  }
});

test("homepage prices use current product prices without attributing a bundle price to its included courses", () => {
  const { courseOffers } = load("lib/shop/offers.ts");
  const products = [
    {
      slug: "bundle",
      course_ids: ["bundle", "g", "tiivis"],
      price_cents: 19900,
      sale_price_cents: null,
    },
    {
      slug: "g",
      course_ids: ["g"],
      price_cents: 12000,
      sale_price_cents: 10000,
    },
  ];
  const offers = courseOffers(products, [
    "bundle",
    "g",
    "tiivis",
    "not-for-sale",
  ]);
  assert.deepEqual(offers.bundle, {
    priceCents: 19900,
    href: "/kauppa/bundle",
  });
  assert.deepEqual(offers.g, { priceCents: 10000, href: "/kauppa/g" });
  assert.equal(offers.tiivis, undefined);
  assert.equal(offers["not-for-sale"], undefined);
  assert.deepEqual(courseOffers([], ["g"]), {});
});

test("payment settings serialize only an allow-list of presence flags, never secret values", () => {
  const model = load("lib/shop/settings-model.ts");
  const statuses = model.shopSettingStatuses({
    PAYTRAIL_SECRET_KEY: "never-return-this-paytrail-secret",
    SHOP_INTERNAL_SECRET: "never-return-this-internal-secret",
    CRON_SECRET: "never-return-this-cron-secret",
    SUPABASE_SERVICE_ROLE_KEY: "never-return-this-supabase-secret",
    NEXT_PUBLIC_SITE_URL: "https://www.valintaguru.fi",
    OTHER_PRIVATE_VALUE: "never-return-this-private-value",
  });
  const serialized = JSON.stringify(statuses);
  assert.ok(!serialized.includes("never-return-this"));
  assert.equal(
    statuses.find((s) => s.name === "PAYTRAIL_SECRET_KEY").configured,
    true,
  );
  assert.equal(
    statuses.find((s) => s.name === "PAYTRAIL_MERCHANT_ID").configured,
    false,
  );
  assert.ok(!statuses.some((s) => s.name === "SUPABASE_SERVICE_ROLE_KEY"));
  assert.equal(model.sellerAddress({}), "Purolantie 3, 65300 Vaasa");
});

test("payment-settings APIs reject non-admin users before reading settings or activating production", async () => {
  let calls = 0;
  const forbidden = Response.json({ error: "Forbidden" }, { status: 403 });
  const api = loader({
    "@/lib/shop/admin": { shopAdmin: async () => ({ error: forbidden }) },
    "@/lib/shop/server": {
      guardRequest: async () => {
        calls++;
      },
      bodyOf: async () => ({}),
    },
    "@/lib/shop/readiness": {
      shopSettingsStatus: async () => {
        calls++;
      },
      activateProductionShop: async () => {
        calls++;
      },
    },
  })("app/api/admin/shop/settings/route.ts");
  assert.equal((await api.GET()).status, 403);
  assert.equal(
    (
      await api.POST(
        new Request("https://www.valintaguru.fi/api/admin/shop/settings", {
          method: "POST",
        }),
      )
    ).status,
    403,
  );
  assert.equal(calls, 0);
});

test("payment-settings API accepts no secret-saving action or unconfirmed activation", async () => {
  let activations = 0;
  const api = loader({
    "@/lib/shop/admin": { shopAdmin: async () => ({ user: { id: a } }) },
    "@/lib/shop/server": {
      guardRequest: async () => {},
      bodyOf: async (r) => r.json(),
    },
    "@/lib/shop/readiness": {
      shopSettingsStatus: async () => ({}),
      activateProductionShop: async () => {
        activations++;
      },
    },
  })("app/api/admin/shop/settings/route.ts");
  for (const body of [
    { action: "save-secret", secret: "example" },
    { action: "activate", confirm: false },
  ]) {
    const response = await api.POST(
      new Request("https://www.valintaguru.fi/api/admin/shop/settings", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    );
    assert.equal(response.status, 400);
  }
  assert.equal(activations, 0);
});

function productionHarness({
  deployment = "production",
  marker = null,
  conflicting = 0,
  providerFails = false,
} = {}) {
  const state = { marker, providers: [], inserts: [] };
  const db = () => ({
    from(table) {
      const query = {
        select() {
          return query;
        },
        eq() {
          return query;
        },
        or() {
          return query;
        },
        async maybeSingle() {
          return { data: state.marker, error: null };
        },
        then(resolve, reject) {
          return Promise.resolve({
            error: null,
            count: table === "shop_products" ? 5 : conflicting,
          }).then(resolve, reject);
        },
        async insert(value) {
          state.inserts.push({ table, value });
          if (table === "shop_environment") state.marker = value;
          return { error: null };
        },
      };
      return query;
    },
  });
  const readiness = loader({
    "./server": { db },
    "./config": {
      shopConfig: () => ({
        mode: "production",
        merchant: "99999999",
        site: "https://www.valintaguru.fi",
      }),
    },
    "./paytrail": {
      paytrail: async (...args) => {
        state.providers.push(args);
        if (providerFails) throw Error("provider_error");
        return { data: [] };
      },
    },
  })("lib/shop/readiness.ts");
  const env = {
    VERCEL_ENV: deployment,
    PAYTRAIL_MODE: "production",
    PAYTRAIL_MERCHANT_ID: "99999999",
    NEXT_PUBLIC_SITE_URL: "https://www.valintaguru.fi",
    SHOP_SUPABASE_PROJECT_REF: "prod-ref",
    RESEND_API_KEY: "example-email-secret",
    SUPPORT_FROM_EMAIL: "example@example.test",
    CRON_SECRET: "x".repeat(32),
  };
  return { state, readiness, env };
}
async function withProductionEnv(env, run) {
  const backup = { ...process.env };
  try {
    Object.assign(process.env, env);
    return await run();
  } finally {
    for (const key of Object.keys(process.env))
      if (!(key in backup)) delete process.env[key];
    Object.assign(process.env, backup);
  }
}

test("production activation rejects local/preview deployments, a different binding and conflicting test orders", async () => {
  for (const scenario of [
    { deployment: "preview" },
    { deployment: "development" },
    {
      marker: {
        mode: "test",
        merchant_id: "different",
        project_ref: "prod-ref",
      },
    },
    { conflicting: 1 },
  ]) {
    const h = productionHarness(scenario);
    await withProductionEnv(h.env, async () => {
      await assert.rejects(
        h.readiness.activateProductionShop,
        /eivät ole vielä valmiit/,
      );
      assert.equal(h.state.providers.length, 0);
      assert.equal(h.state.inserts.length, 0);
    });
  }
});

test("production activation validates credentials without a charge and is idempotent", async () => {
  const h = productionHarness();
  await withProductionEnv(h.env, async () => {
    const result = await h.readiness.activateProductionShop();
    assert.equal(result.active, true);
    assert.deepEqual(h.state.providers, [
      ["GET", "/merchants/payment-providers"],
    ]);
    assert.deepEqual(
      h.state.inserts.map((i) => i.table),
      ["shop_environment", "shop_events"],
    );
    assert.equal(h.state.marker.mode, "production");
    assert.equal((await h.readiness.activateProductionShop()).active, true);
    assert.equal(h.state.providers.length, 1);
    assert.equal(h.state.inserts.length, 2);
  });
});

test("invalid Paytrail credentials cannot initialize the production database binding", async () => {
  const h = productionHarness({ providerFails: true });
  await withProductionEnv(h.env, async () => {
    await assert.rejects(h.readiness.activateProductionShop, /provider_error/);
    assert.equal(h.state.inserts.length, 0);
    assert.equal(h.state.marker, null);
  });
});
