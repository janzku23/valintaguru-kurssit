const { test } = require("node:test");
const assert = require("node:assert/strict");
const { PGlite } = require("@electric-sql/pglite");
const createLoader = require("./shop-test-loader.cjs");

const attemptId = "00000000-0000-4000-8000-000000000001";
const userId = "00000000-0000-4000-8000-000000000002";
const exam = {
  id: "exam", version: 1, courseId: "oikis-teho", title: "Harjoituskoe", description: "Koe", durationMinutes: 30,
  sections: [{ id: "section", title: "Osa", questions: ["q1", "q2"].map((id) => ({
    id, prompt: id, correctAnswerId: "a", options: [{ id: "a", text: "A" }, { id: "b", text: "B" }],
  })) }],
};
const copy = (value) => JSON.parse(JSON.stringify(value));
const quote = (name) => `"${name.replaceAll('"', '""')}"`;

// Execute the real server functions against PostgreSQL, including conditional
// updates and ON CONFLICT. Only the HTTP transport used by Supabase is replaced.
async function fixture(overrides = {}) {
  const db = new PGlite();
  await db.exec(`
    create table practice_exam_attempts (
      id uuid primary key, user_id uuid not null, course_id text, exam_id text, exam_version integer,
      status text, answers jsonb, started_at timestamptz, expires_at timestamptz, finished_at timestamptz,
      duration_seconds integer, score integer, max_score integer, correct_count integer,
      wrong_count integer, unsure_count integer, created_at timestamptz, updated_at timestamptz
    );
    create table student_progress_attempts (
      id text primary key, user_id uuid, course_id text, question_id text, question text, area text, category text,
      selected_answer_ids text[], correct_answer_ids text[], is_correct boolean, answered_at timestamptz,
      answer_time_ms integer, answer_time_source text, session_duration_ms integer,
      session_id text, session_type text, session_name text
    );
  `);
  const now = Date.now();
  const initial = {
    id: attemptId, user_id: userId, course_id: exam.courseId, exam_id: exam.id, exam_version: 1,
    status: "active", answers: {}, started_at: new Date(now - 60_000).toISOString(),
    expires_at: new Date(now + 1_740_000).toISOString(), finished_at: null,
    duration_seconds: null, score: null, max_score: 2, correct_count: null, wrong_count: null,
    unsure_count: null, created_at: new Date(now - 60_000).toISOString(),
    updated_at: new Date(now - 60_000).toISOString(), ...overrides,
  };
  const columns = Object.keys(initial);
  await db.query(`insert into practice_exam_attempts (${columns.map(quote)}) values (${columns.map((_, i) => `$${i + 1}`)})`,
    columns.map((key) => key === "answers" ? JSON.stringify(initial[key]) : initial[key]));

  const control = { beforeUpdate: null, beforeProgress: null, failProgress: 0 };
  const admin = { from(table) {
    let operation = "select", values, fields = "*", limit, order;
    const filters = [];
    const query = {
      select(value) { fields = value; return this; },
      eq(field, value) { filters.push([field, "=", value]); return this; },
      gt(field, value) { filters.push([field, ">", value]); return this; },
      order(field, options) { order = `${quote(field)} ${options?.ascending === false ? "desc" : "asc"}`; return this; },
      limit(value) { limit = value; return this; },
      update(value) { operation = "update"; values = value; return this; },
      upsert(value, options) {
        assert.deepEqual(options, { onConflict: "id", ignoreDuplicates: true });
        operation = "upsert"; values = value; return this;
      },
      single() { return execute("single"); },
      maybeSingle() { return execute("maybe"); },
      then(resolve, reject) { return execute().then(resolve, reject); },
    };
    async function execute(single) {
      try {
        const parameters = [];
        const parameter = (value) => { parameters.push(value); return `$${parameters.length}`; };
        let sql;
        if (operation === "upsert") {
          if (control.beforeProgress) await control.beforeProgress();
          if (control.failProgress > 0) {
            control.failProgress -= 1;
            return { data: null, error: { message: "simulated storage failure" } };
          }
          const keys = Object.keys(values[0]);
          sql = `insert into ${quote(table)} (${keys.map(quote)}) values ${values.map((row) =>
            `(${keys.map((key) => parameter(row[key])).join(",")})`).join(",")} on conflict(id) do nothing returning *`;
        } else {
          if (operation === "update" && control.beforeUpdate) await control.beforeUpdate(values);
          const prefix = operation === "update"
            ? `update ${quote(table)} set ${Object.entries(values).map(([key, value]) =>
              `${quote(key)}=${parameter(key === "answers" ? JSON.stringify(value) : value)}`).join(",")}`
            : `select ${fields === "*" ? "*" : fields.split(",").map(quote).join(",")} from ${quote(table)}`;
          const where = filters.length ? ` where ${filters.map(([key, comparison, value]) =>
            `${quote(key)}${comparison}${parameter(value)}`).join(" and ")}` : "";
          sql = prefix + where + (operation === "update" ? " returning *" :
            `${order ? ` order by ${order}` : ""}${limit ? ` limit ${Number(limit)}` : ""}`);
        }
        const rows = copy((await db.query(sql, parameters)).rows);
        if (single === "single" && rows.length !== 1) return { data: null, error: { message: "Expected one row" } };
        if (single && rows.length > 1) return { data: null, error: { message: "Expected at most one row" } };
        return { data: single ? rows[0] ?? null : rows, error: null };
      } catch (error) { return { data: null, error: { message: error.message } }; }
    }
    return query;
  } };
  const mocks = {
    "next/server": { NextResponse: { json: (body, init) => Response.json(body, init) } },
    "@/utils/supabase/server": { createClient: async () => ({ auth: {
      getUser: async () => ({ data: { user: { id: userId } }, error: null }),
    } }) },
    "@/utils/supabase/admin": { createAdminClient: () => admin },
    "@/data/practiceExams": {
      getPracticeExam: () => exam,
      getCorrectAnswerIds: (question) => question.correctAnswerIds ?? [question.correctAnswerId],
      UNSURE_ANSWER_ID: "__unsure__",
      getPracticeExamQuestionCount: () => 2,
      toPublicPracticeExam: (value) => value,
    },
    "@/data/courses": { isCourseId: () => true },
    "@/lib/courseAccess": { hasCourseAccess: async () => true },
  };
  const load = createLoader(mocks);
  const server = load("lib/practiceExamServer.ts");
  mocks["@/lib/practiceExamServer"] = server;
  const route = load("app/api/practice-exams/attempt/[attemptId]/route.ts");
  const history = load("app/api/practice-exams/[courseId]/[examId]/route.ts");
  return {
    db, control, server, route, history, initial,
    async stored() { return copy((await db.query("select * from practice_exam_attempts")).rows[0]); },
    async progress() { return copy((await db.query("select * from student_progress_attempts order by question_id")).rows); },
  };
}

const params = () => ({ params: Promise.resolve({ attemptId }) });
const request = (method, body) => new Request("https://example.test/api/exam", {
  method, ...(body === undefined ? {} : { body: JSON.stringify(body) }),
});

test("concurrent answer PATCHes preserve both answers and advance the row version", async () => {
  // Both requests see an existing version ahead of the application clock.
  // This also proves retries advance the token even within the same clock tick.
  const f = await fixture({ updated_at: new Date(Date.now() + 60_000).toISOString() });
  try {
    let entered = 0, release;
    const barrier = new Promise((resolve) => { release = resolve; });
    f.control.beforeUpdate = async () => { if (++entered === 2) release(); await barrier; };
    const responses = await Promise.all(["q1", "q2"].map((questionId) =>
      f.route.PATCH(request("PATCH", { questionId, answerIds: ["a"] }), params())));
    assert.deepEqual(responses.map((response) => response.status), [200, 200]);
    const stored = await f.stored();
    assert.deepEqual(stored.answers, { q1: "a", q2: "a" });
    assert.equal(Date.parse(stored.updated_at), Date.parse(f.initial.updated_at) + 2);
    assert.ok(entered >= 3, "one conflicting update must be retried");
  } finally { await f.db.close(); }
});

test("finalization retries a stale snapshot and cannot erase a just-saved answer", async () => {
  const f = await fixture();
  try {
    let injected = false;
    f.control.beforeUpdate = async (patch) => {
      if (patch.status && !injected) {
        injected = true;
        await f.server.savePracticeExamAnswer(f.initial, "q1", "a");
      }
    };
    const finalized = await f.server.finalizePracticeExamAttempt(f.initial, "finished");
    assert.equal(finalized.score, 1);
    assert.deepEqual(finalized.answers, { q1: "a", q2: "__unsure__" });
    assert.equal((await f.progress()).length, 2);
    const late = await f.route.PATCH(request("PATCH", { questionId: "q2", answerIds: ["a"] }), params());
    assert.equal(late.status, 409);
    assert.equal((await late.json()).finished, true);
    assert.equal((await f.stored()).score, 1);
  } finally { await f.db.close(); }
});

test("an expired result syncs on the server and concurrent recovery remains idempotent", async () => {
  const expiresAt = new Date(Date.now() - 60_000).toISOString();
  const f = await fixture({ started_at: new Date(Date.now() - 1_860_000).toISOString(), expires_at: expiresAt, answers: { q1: "a" } });
  try {
    let entered = 0, release;
    const barrier = new Promise((resolve) => { release = resolve; });
    f.control.beforeProgress = async () => { if (++entered === 2) release(); await barrier; };
    const responses = await Promise.all([f.route.GET(request("GET"), params()), f.route.GET(request("GET"), params())]);
    assert.deepEqual(responses.map((response) => response.status), [200, 200]);
    const rows = await f.progress();
    assert.equal(rows.length, 2);
    assert.equal(new Set(rows.map((row) => row.id)).size, 2);
    assert.equal(rows[0].is_correct, true);
    assert.equal(rows[1].is_correct, false);
    assert.deepEqual(rows[1].selected_answer_ids, ["__unsure__"]);
    assert.equal(rows[0].answered_at, expiresAt);
    assert.equal((await f.stored()).status, "expired");
  } finally { await f.db.close(); }
});

test("history repairs a failed progress sync and preserves existing legacy rows", async () => {
  const f = await fixture({ expires_at: new Date(Date.now() - 1000).toISOString(), answers: { q1: "a" } });
  try {
    f.control.failProgress = 1;
    assert.equal((await f.route.GET(request("GET"), params())).status, 500);
    assert.equal((await f.stored()).status, "expired");
    assert.equal((await f.progress()).length, 0);
    await f.db.query(`insert into student_progress_attempts(id,user_id,course_id,session_id,question_id)
      values('00000000-0000-4000-8000-000000000099',$1,$2,$3,'q1')`, [userId, exam.courseId, attemptId]);
    assert.equal((await f.route.GET(request("GET"), params())).status, 200);
    assert.equal((await f.progress()).length, 2);
    assert.equal((await f.route.GET(request("GET"), params())).status, 200);
    assert.equal((await f.progress()).length, 2);
    assert.equal((await f.progress())[0].id, "00000000-0000-4000-8000-000000000099");
  } finally { await f.db.close(); }
});

test("normal submission stores trustworthy scores and bounded question timings", async () => {
  const f = await fixture({ answers: { q1: "a", q2: "b" } });
  try {
    const response = await f.route.POST(request("POST", { score: 999, questionTimes: { q1: 1234, q2: 9e9, unknown: 100 } }), params());
    assert.equal(response.status, 200);
    assert.equal((await response.json()).result.score, 0);
    const rows = await f.progress();
    assert.equal(rows[0].answer_time_ms, 1234);
    assert.equal(rows[0].answer_time_source, "active_question");
    assert.ok(rows[1].answer_time_ms <= rows[1].session_duration_ms);
    assert.equal(rows[1].is_correct, false);
  } finally { await f.db.close(); }
});

test("loading the exam lobby repairs a previously finished attempt without client sync", async () => {
  const f = await fixture({ status: "finished", answers: { q1: "a", q2: "b" }, finished_at: new Date().toISOString(), duration_seconds: 60 });
  try {
    const response = await f.history.GET(request("GET"), { params: Promise.resolve({ courseId: exam.courseId, examId: exam.id }) });
    assert.equal(response.status, 200);
    assert.equal((await f.progress()).length, 2);
  } finally { await f.db.close(); }
});

// A small hook harness lets the tests exercise the actual JSX event handlers
// without a browser or authenticated production account.
function component(file, props, initial) {
  const states = [], refs = [];
  let stateIndex, refIndex;
  const hooks = {
    useState(value) {
      const index = stateIndex++;
      if (!(index in states)) states[index] = Object.hasOwn(initial, index) ? initial[index] : typeof value === "function" ? value() : value;
      return [states[index], (next) => { states[index] = typeof next === "function" ? next(states[index]) : next; }];
    },
    useRef(value) { const index = refIndex++; return refs[index] ??= { current: value }; },
    useMemo: (fn) => fn(), useCallback: (fn) => fn, useEffect() {},
  };
  const View = createLoader({ react: hooks })(file).default;
  return {
    states,
    render() { stateIndex = 0; refIndex = 0; return View(props); },
  };
}
function textOf(node) {
  if (node == null || typeof node === "boolean") return "";
  if (Array.isArray(node)) return node.map(textOf).join("");
  return typeof node === "object" ? textOf(node.props?.children) : String(node);
}
function find(node, predicate) {
  if (!node || typeof node !== "object") return null;
  if (Array.isArray(node)) { for (const child of node) { const match = find(child, predicate); if (match) return match; } return null; }
  return predicate(node) ? node : find(node.props?.children, predicate);
}
function browser(t) {
  const previous = { window: global.window, fetch: global.fetch };
  global.window = { confirm: () => true, scrollTo() {}, setTimeout: () => 0,
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} } };
  t.after(() => { global.window = previous.window; global.fetch = previous.fetch; });
}
const tick = () => new Promise((resolve) => setImmediate(resolve));

for (const reading of [false, true]) {
  test(`${reading ? "reading exercise" : "law exam"}: resuming refreshes server time after waiting in the lobby`, async (t) => {
    browser(t);
    const old = { id: attemptId, startedAt: "2026-11-28T10:00:00Z", expiresAt: "2026-11-28T10:30:00Z", serverNow: "2026-11-28T10:00:00Z", answers: {}, questionTimes: {} };
    const calls = [];
    global.fetch = async (url, options) => {
      calls.push([url, options.method]);
      return Response.json({ resumed: true, attempt: { ...old, serverNow: "2026-11-28T10:10:00Z" } });
    };
    const view = component(reading ? "components/ValintakoeGExerciseRunner.tsx" : "components/PracticeExamRunner.tsx",
      reading ? { exercise: { ...exam, difficulty: "easy", questionCount: 0, questions: [] } } : { exam },
      { 0: false, 3: old });
    const button = find(view.render(), (node) => node.type === "button" && textOf(node).includes(reading ? "Jatka harjoitusta" : "Jatka koetta"));
    assert.ok(button);
    button.props.onClick();
    await tick();
    assert.equal(calls.length, 1);
    assert.equal(calls[0][1], "POST");
    assert.equal(view.states[6], 20 * 60_000);
  });
}

test("the exam client serializes fast selections and waits for both before finishing", async (t) => {
  browser(t);
  const calls = [], pending = [];
  global.fetch = async (url, options = {}) => {
    calls.push(options.method ?? "GET");
    if (options.method === "PATCH") return new Promise((resolve) => { pending.push(() => resolve(Response.json({ success: true }))); });
    return Response.json(options.method === "POST" ? { result: { score: 2, maxScore: 2 }, review: [] } : { history: [], activeAttempt: null });
  };
  const active = { id: attemptId, answers: {}, expiresAt: new Date(Date.now() + 600_000).toISOString(), serverNow: new Date().toISOString() };
  const view = component("components/PracticeExamRunner.tsx", { exam }, { 0: false, 3: active, 5: "exam" });
  const tree = view.render();
  for (const name of ["q1", "q2"]) find(tree, (node) => node.type === "input" && node.props.name === name).props.onChange();
  find(tree, (node) => node.type === "button" && textOf(node) === "Päätä koe").props.onClick();
  await tick();
  assert.deepEqual(calls, ["PATCH"]);
  pending.shift()();
  await tick();
  assert.deepEqual(calls, ["PATCH", "PATCH"]);
  pending.shift()();
  await tick();
  assert.deepEqual(calls, ["PATCH", "PATCH", "POST", "GET"]);
});

test("a failed answer remains retryable and blocks premature submission", async (t) => {
  browser(t);
  const calls = [];
  let fail = true;
  global.fetch = async (_url, options = {}) => {
    calls.push(options.method ?? "GET");
    if (options.method === "PATCH") return Response.json(fail ? { error: "offline" } : { success: true }, { status: fail ? 500 : 200 });
    return Response.json({ history: [], activeAttempt: null, result: { score: 1 }, review: [] });
  };
  const view = component("components/PracticeExamRunner.tsx", { exam }, { 0: false, 3: { id: attemptId }, 5: "exam" });
  let tree = view.render();
  find(tree, (node) => node.type === "input" && node.props.name === "q1").props.onChange();
  find(tree, (node) => node.type === "button" && textOf(node) === "Päätä koe").props.onClick();
  await tick();
  assert.deepEqual(calls, ["PATCH"]);
  tree = view.render();
  const retry = find(tree, (node) => node.type === "button" && textOf(node).includes("Yritä vastausten tallennusta uudelleen"));
  assert.ok(retry);
  fail = false;
  retry.props.onClick();
  await tick();
  tree = view.render();
  find(tree, (node) => node.type === "button" && textOf(node) === "Päätä koe").props.onClick();
  await tick();
  assert.deepEqual(calls, ["PATCH", "PATCH", "POST", "GET"]);
});
