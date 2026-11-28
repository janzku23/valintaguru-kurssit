const { test } = require("node:test");
const assert = require("node:assert/strict");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { NextRequest } = require("next/server");
const createLoader = require("./shop-test-loader.cjs");

const userId = "00000000-0000-4000-8000-000000000001";
const oldDate = "2026-01-01T00:00:00.000Z";

async function withEnvironment(run) {
  const values = {
    NEXT_PUBLIC_SUPABASE_URL: "https://audit.example.test",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-placeholder",
    VALINTAGURU_ADMIN_EMAIL: " Configured-Admin@example.test ",
  };
  const previous = Object.fromEntries(Object.keys(values).map((key) => [key, process.env[key]]));
  Object.assign(process.env, values);
  try {
    return await run();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("local return paths reject external origins, backslashes and control characters", () => {
  const { getSafeRedirectPath } = createLoader()("lib/safeRedirect.ts");
  for (const value of [null, undefined, "", "https://outside.example", "//outside.example", "/\\outside.example", "/\t/outside.example", "/\n/outside.example", "/a/..//outside.example", "javascript:alert(1)"]) {
    assert.equal(getSafeRedirectPath(value, "/aseta-salasana"), "/aseta-salasana", String(value));
  }
  assert.equal(getSafeRedirectPath("/kurssi/oikis?tab=teoria#luku-2"), "/kurssi/oikis?tab=teoria#luku-2");
  assert.equal(getSafeRedirectPath("/kurssi/../admin?filter=a%2Fb"), "/admin?filter=a%2Fb");
});

test("successful auth callbacks keep return URLs on this site and preserve session headers", () => withEnvironment(async () => {
  const { GET } = createLoader({
    "next/headers": { cookies: async () => ({ getAll: () => [], set() {} }) },
    "@supabase/ssr": { createServerClient: (_url, _key, options) => ({ auth: {
      exchangeCodeForSession: async () => {
        options.cookies.setAll([{ name: "test-session", value: "fresh", options: { httpOnly: true, sameSite: "lax", path: "/" } }], { "Cache-Control": "private, no-store" });
        return { error: null };
      },
    } }) },
  })("app/auth/callback/route.ts");
  for (const [next, expected] of [["/\\outside.example", "/aseta-salasana"], ["//outside.example", "/aseta-salasana"], ["/profiili?updated=1#salasana", "/profiili?updated=1#salasana"]]) {
    const url = new URL("https://valintaguru.example/auth/callback");
    url.searchParams.set("code", "mock-valid-code");
    url.searchParams.set("next", next);
    const response = await GET(new NextRequest(url));
    assert.equal(response.headers.get("location"), `https://valintaguru.example${expected}`);
    assert.match(response.headers.get("set-cookie"), /test-session=fresh/);
    assert.match(response.headers.get("set-cookie"), /HttpOnly/);
    assert.equal(response.headers.get("cache-control"), "private, no-store");
  }
}));

test("proxy redirects retain refreshed and cleared cookies across multiple cookie writes", () => withEnvironment(async () => {
  let signedIn = true;
  const { proxy } = createLoader({
    "@supabase/ssr": { createServerClient: (_url, _key, options) => ({ auth: {
      getUser: async () => {
        options.cookies.setAll([{ name: "test-session", value: signedIn ? "fresh" : "", options: { path: "/", maxAge: signedIn ? 3600 : 0 } }], { "Cache-Control": "private, no-store", Pragma: "no-cache" });
        options.cookies.setAll([{ name: "test-verifier", value: "", options: { path: "/", maxAge: 0 } }], {});
        return { data: { user: signedIn ? { id: userId } : null } };
      },
    } }) },
  })("proxy.ts");
  const url = new URL("https://valintaguru.example/kirjaudu");
  url.searchParams.set("next", "/profiili?updated=1#salasana");
  let response = await proxy(new NextRequest(url));
  assert.equal(response.headers.get("location"), "https://valintaguru.example/profiili?updated=1#salasana");
  assert.match(response.headers.get("set-cookie"), /test-session=fresh/);
  assert.match(response.headers.get("set-cookie"), /test-verifier=/);
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  assert.equal(response.headers.get("pragma"), "no-cache");
  url.searchParams.set("next", "/\\outside.example");
  response = await proxy(new NextRequest(url));
  assert.equal(response.headers.get("location"), "https://valintaguru.example/");
  url.searchParams.set("next", "/kirjaudu?next=/kirjaudu");
  response = await proxy(new NextRequest(url));
  assert.equal(response.headers.get("location"), "https://valintaguru.example/");
  signedIn = false;
  response = await proxy(new NextRequest("https://valintaguru.example/profiili?tab=asetukset"));
  const login = new URL(response.headers.get("location"));
  assert.equal(login.pathname, "/kirjaudu");
  assert.equal(login.searchParams.get("next"), "/profiili?tab=asetukset");
  assert.match(response.headers.get("set-cookie"), /Max-Age=0/);
}));

function emptyQuery() {
  return {
    select() { return this; }, eq() { return this; }, order() { return this; },
    not() { return this; }, is() { return this; },
    then(resolve, reject) { return Promise.resolve({ data: [], count: 0, error: null }).then(resolve, reject); },
  };
}

test("all legacy admin APIs honor the configured admin and reject the former default account", () => withEnvironment(async () => {
  for (const email of ["configured-admin@example.test", "admin@valintaguru.fi"]) {
    const isConfigured = email.startsWith("configured-");
    const user = { id: userId, email };
    const auth = { getUser: async () => ({ data: { user }, error: null }) };
    let created = 0;
    const load = createLoader({
      "@supabase/supabase-js": { createClient: () => ({ auth }) },
      "@/utils/supabase/server": { createClient: async () => ({ auth }) },
      "@/utils/supabase/admin": { createAdminClient: () => ({ from: emptyQuery }) },
      "@/utils/supabase/provisionStudent": { provisionStudent: async (input) => {
        created += 1;
        return { invited: false, user: { id: userId }, email: input.email, courses: [] };
      } },
      "@/data/valintakoeGExercises": { getValintakoeGExercises: () => [] },
    });
    const cases = [
      ["app/api/admin/create-user/route.ts", "POST", { email: "student@example.test", courseIds: ["valintakoe-g"] }, 200],
      ["app/api/admin/free-course-signups/route.ts", "GET", null, 200],
      ["app/api/admin/inquiries/route.ts", "GET", null, 200],
      ["app/api/admin/valintakoe-g/questions/route.ts", "GET", null, 200],
      ["app/api/admin/inquiries/[id]/reply/route.ts", "POST", { reply: "" }, 400],
    ];
    for (const [file, method, body, allowedStatus] of cases) {
      const request = new NextRequest("https://valintaguru.example/api/admin/test", {
        method,
        headers: { authorization: "Bearer verified-mock-token", "content-type": "application/json" },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      const response = await load(file)[method](request, { params: Promise.resolve({ id: "test-inquiry" }) });
      assert.equal(response.status, isConfigured ? allowedStatus : 403, `${email}: ${file}`);
    }
    assert.equal(created, isConfigured ? 1 : 0);
    const summary = await load("app/api/inquiries/mine/route.ts").GET(new Request("https://valintaguru.example/api/inquiries/mine?summary=1"));
    assert.equal((await summary.json()).isAdmin, isConfigured);
    const session = await load("app/api/admin/session/route.ts").GET();
    assert.equal((await session.json()).isAdmin, isConfigured);
    assert.equal(session.headers.get("cache-control"), "private, no-store");
    assert.equal(session.headers.get("vary"), "Cookie");
  }
}));

test("admin visibility does not accept a stale response after auth state changes", async () => {
  let effect;
  let callback;
  let allowed = false;
  const pending = [];
  const originalFetch = global.fetch;
  global.fetch = () => new Promise((resolve) => pending.push(resolve));
  let cleanup;
  try {
    const { useAdminAccess } = createLoader({
      react: { useMemo: (fn) => fn(), useState: () => [false, (value) => { allowed = value; }], useEffect: (fn) => { effect = fn; } },
      "@/utils/supabase/client": { createClient: () => ({ auth: { onAuthStateChange: (fn) => { callback = fn; return { data: { subscription: { unsubscribe() {} } } }; } } }) },
    })("lib/useAdminAccess.ts");
    useAdminAccess();
    cleanup = effect();
    callback("SIGNED_OUT", null);
    pending[1](Response.json({ isAdmin: false }));
    await new Promise(setImmediate);
    pending[0](Response.json({ isAdmin: true }));
    await new Promise(setImmediate);
    assert.equal(allowed, false);
  } finally {
    cleanup?.();
    global.fetch = originalFetch;
  }
});

test("password setup returns to requesting a link if its initialized session signs out", async () => {
  let effect;
  let callback;
  const states = [];
  const originalWindow = global.window;
  let cleanup;
  global.window = { location: { hash: "" } };
  try {
    const page = createLoader({
      react: {
        useMemo: (fn) => fn(),
        useState(initial) {
          const index = states.length;
          states.push(initial);
          return [initial, (next) => { states[index] = typeof next === "function" ? next(states[index]) : next; }];
        },
        useEffect: (fn) => { effect = fn; },
      },
      "next/navigation": { useRouter: () => ({ replace() {}, refresh() {} }) },
      "@/utils/supabase/client": { createClient: () => ({ auth: {
        getSession: async () => ({ data: { session: { user: { id: userId, email: "student@example.test" } } }, error: null }),
        onAuthStateChange: (fn) => { callback = fn; return { data: { subscription: { unsubscribe() {} } } }; },
      } }) },
    })("app/aseta-salasana/page.tsx");
    page.default();
    cleanup = effect();
    await new Promise(setImmediate);
    assert.equal(states[0], "setPassword");
    callback("SIGNED_OUT", null);
    assert.equal(states[0], "requestLink");
  } finally {
    cleanup?.();
    if (originalWindow === undefined) delete global.window;
    else global.window = originalWindow;
  }
});

test("admin editor excludes revoked and expired rights before an unchanged save", async () => {
  const now = Date.now();
  const rows = [
    { course_id: "valintakoe-g", status: "inactive", shop_manual_access: false },
    { course_id: "oikis-teho", status: "refunded", shop_manual_access: false },
    { course_id: "oikis-tiivis", status: "active", shop_manual_access: false, shop_access_until: oldDate },
    { course_id: "oikis", status: "käytössä", shop_manual_access: true, shop_access_until: oldDate },
  ];
  const { getActiveCourseIdsForEditor } = createLoader()("lib/adminCourseRights.ts");
  assert.deepEqual(getActiveCourseIdsForEditor(rows, now), ["oikis"]);
  let initialCourseIds;
  const page = createLoader({
    "next/link": { default: ({ children, ...props }) => React.createElement("a", props, children) },
    "@/lib/adminData": { getAdminUserDetail: async () => ({ user: { id: userId, email: "student@example.test" }, rights: rows, progress: [], exams: [] }) },
    "@/components/admin/UserRightsEditor": { default: (props) => { initialCourseIds = props.initialCourseIds; return React.createElement("div"); } },
  })("app/admin/edistyminen/[userId]/page.tsx");
  renderToStaticMarkup(await page.default({ params: Promise.resolve({ userId }) }));
  assert.deepEqual(initialCourseIds, ["oikis"]);
  let saved;
  const route = createLoader({
    "@/lib/adminAccess": { requireAdminApi: async () => ({ user: { id: "admin" }, admin: {
      auth: { admin: { getUserById: async () => ({ data: { user: { id: userId, email: "student@example.test" } }, error: null }) } },
      rpc: async (_name, payload) => { saved = payload.p_courses; return { error: null }; },
    } }) },
  })("app/api/admin/users/[userId]/rights/route.ts");
  const response = await route.PUT(new Request("https://valintaguru.example/api/admin/users/test/rights", {
    method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ courseIds: initialCourseIds }),
  }), { params: Promise.resolve({ userId }) });
  assert.equal(response.status, 200);
  assert.deepEqual(saved.map((row) => row.id), ["oikis"]);
});

function signupFixture({ knownUser = true, owner = null, hasSignup = true, hasPreference = true, subscribed = false } = {}) {
  const email = "student@example.test";
  const account = { id: userId, email, email_confirmed_at: oldDate };
  const state = {
    signup: hasSignup ? { email, marketing_consent: subscribed, marketing_consent_at: subscribed ? oldDate : null } : null,
    newsletter: hasPreference ? { email, subscribed, subscribed_at: subscribed ? oldDate : null, updated_at: oldDate } : null,
    invitations: 0,
  };
  const admin = {
    auth: { admin: {
      listUsers: async () => ({ data: { users: knownUser ? [account] : [] }, error: null }),
      inviteUserByEmail: async () => { state.invitations += 1; return { data: { user: account }, error: null }; },
    } },
    from(table) {
      const key = table === "free_course_signups" ? "signup" : "newsletter";
      assert.ok(["free_course_signups", "newsletter_preferences"].includes(table));
      return {
        select() { return this; }, eq() { return this; },
        maybeSingle: async () => ({ data: state[key], error: null }),
        upsert: async (value, options) => {
          if (!state[key] || !options.ignoreDuplicates) state[key] = { ...state[key], ...value };
          return { error: null };
        },
        update: (value) => ({ eq: async () => { state[key] = { ...state[key], ...value }; return { error: null }; } }),
      };
    },
  };
  const route = createLoader({
    "@/utils/supabase/admin": { createAdminClient: () => admin },
    "@/utils/supabase/server": { createClient: async () => ({ auth: { getUser: async () => ({ data: { user: owner }, error: null }) } }) },
  })("app/api/free-course-signup/route.ts");
  return { state, account, submit: (consent = true) => route.POST(new NextRequest("https://valintaguru.example/api/free-course-signup", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, marketingConsent: consent }),
  })) };
}

test("public repeat signups cannot restore a withdrawn newsletter consent", async () => {
  for (const owner of [null, { id: "another-user", email: "student@example.test", email_confirmed_at: oldDate }, { id: userId, email: "student@example.test", email_confirmed_at: null }]) {
    const fixture = signupFixture({ owner });
    const response = await fixture.submit();
    assert.equal(response.status, 200);
    assert.equal(fixture.state.newsletter.subscribed, false);
    assert.equal(fixture.state.newsletter.updated_at, oldDate);
    assert.equal(fixture.state.signup.marketing_consent, false);
    assert.equal(fixture.state.invitations, 0);
  }
});

test("verified owners can opt in again and anonymous unchecked forms do not unsubscribe", async () => {
  const fixture = signupFixture({ owner: { id: userId, email: " Student@Example.Test ", email_confirmed_at: oldDate } });
  assert.equal((await fixture.submit()).status, 200);
  assert.equal(fixture.state.newsletter.subscribed, true);
  assert.equal(fixture.state.signup.marketing_consent, true);
  const subscribed = signupFixture({ subscribed: true });
  assert.equal((await subscribed.submit(false)).status, 200);
  assert.equal(subscribed.state.newsletter.subscribed, true);
  assert.equal(subscribed.state.newsletter.subscribed_at, oldDate);
});

test("a first signup stores consent while new invitations preserve a prior opt out", async () => {
  for (const hasPreference of [false, true]) {
    const fixture = signupFixture({ knownUser: false, hasSignup: false, hasPreference });
    const response = await fixture.submit();
    assert.equal(response.status, 200);
    assert.equal(fixture.state.invitations, 1);
    assert.equal(fixture.state.newsletter.subscribed, !hasPreference);
  }
});
