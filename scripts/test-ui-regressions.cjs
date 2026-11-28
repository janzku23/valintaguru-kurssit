const { test } = require("node:test");
const assert = require("node:assert/strict");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const createLoader = require("./shop-test-loader.cjs");
const load = createLoader();
const { createExamClock, subscribeToExamClock } = load("lib/examClock.ts");
const { addMonths } = load("components/calendar/dateUtils.ts");

test("month navigation visits February from January 31 in either direction", () => {
  for (const [year, expected] of [[2027, 28], [2028, 29]]) {
    const original = new Date(year, 0, 31, 12, 34);
    const next = addMonths(original, 1);
    assert.deepEqual([next.getFullYear(), next.getMonth(), next.getDate()], [year, 1, expected]);
    assert.deepEqual([next.getHours(), next.getMinutes()], [12, 34]);
    assert.equal(original.getDate(), 31);
    const previous = addMonths(new Date(year, 2, 31), -1);
    assert.deepEqual([previous.getMonth(), previous.getDate()], [1, expected]);
  }
});

test("month navigation crosses the year boundary without skipping a month", () => {
  const next = addMonths(new Date(2026, 11, 31), 1);
  assert.deepEqual([next.getFullYear(), next.getMonth(), next.getDate()], [2027, 0, 31]);
  const previous = addMonths(new Date(2027, 0, 31), -1);
  assert.deepEqual([previous.getFullYear(), previous.getMonth(), previous.getDate()], [2026, 11, 31]);
});

function browserClock() {
  let time = 1_000_000;
  let nextId = 0;
  const frames = new Map(), intervals = new Map(), events = new Map();
  return {
    now: () => time,
    advance(ms) { time += ms; },
    frame() { const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(callback => callback()); },
    tick() { [...intervals.values()].forEach(callback => callback()); },
    focus() { events.get("focus")?.(); },
    frames, intervals, events,
    browser: {
      requestAnimationFrame(callback) { frames.set(++nextId, callback); return nextId; },
      cancelAnimationFrame(id) { frames.delete(id); },
      setInterval(callback) { intervals.set(++nextId, callback); return nextId; },
      clearInterval(id) { intervals.delete(id); },
      addEventListener(name, callback) { events.set(name, callback); },
      removeEventListener(name, callback) { if (events.get(name) === callback) events.delete(name); },
    },
  };
}

test("a free exam loses a full hour after one delayed clock event", () => {
  const browser = browserClock();
  const clock = createExamClock(7200, browser.now), ticks = [];
  const stop = subscribeToExamClock(clock, seconds => ticks.push(seconds), browser.browser);
  assert.deepEqual(ticks, []);
  browser.frame();
  browser.advance(3_600_000);
  browser.tick();
  assert.deepEqual(ticks, [7200, 3600]);
  browser.advance(4_000_000);
  browser.focus();
  assert.equal(ticks.at(-1), 0);
  stop();
  assert.equal(browser.intervals.size, 0);
  assert.equal(browser.events.size, 0);
});

test("finishing freezes the actual exam time throughout a delayed save", () => {
  const browser = browserClock(), clock = createExamClock(7200, browser.now);
  browser.advance(600_000);
  assert.equal(clock.stop(), 6600);
  browser.advance(300_000);
  assert.equal(clock.remainingSeconds(), 6600);
  assert.equal(clock.stop(), 6600);
  assert.equal(7200 - clock.remainingSeconds(), 600);
});

function freeExamHarness(file, durationSeconds, t) {
  const originalWindow = global.window, originalDocument = global.document, originalNow = Date.now;
  const browser = browserClock(), states = [], refs = [], effects = [], saved = [];
  let stateIndex = 0, refIndex = 0;
  global.window = { ...browser.browser, setTimeout: () => 1, clearTimeout() {}, confirm: () => true, scrollTo() {} };
  global.document = { getElementById: () => null };
  Date.now = browser.now;
  t.after(() => { global.window = originalWindow; global.document = originalDocument; Date.now = originalNow; });
  const hooks = {
    useState(initial) {
      const index = stateIndex++;
      if (!(index in states)) states[index] = typeof initial === "function" ? initial() : initial;
      return [states[index], value => { states[index] = typeof value === "function" ? value(states[index]) : value; }];
    },
    useRef(initial) { const index = refIndex++; return refs[index] ??= { current: initial }; },
    useMemo: compute => compute(),
    useEffect: (callback, deps) => effects.push({ callback, deps }),
    useEffectEvent: callback => callback,
  };
  const client = {
    auth: { getUser: async () => ({ data: { user: { id: "member" } }, error: null }) },
    from(table) {
      assert.equal(table, "free_course_exam_attempts");
      let payload;
      return {
        insert(row) { saved.push(row); payload = row; return this; },
        select() { return this; },
        async single() { return { data: { ...payload, id: "saved-exam", submitted_at: new Date().toISOString() }, error: null }; },
      };
    },
  };
  const Component = createLoader({
    react: hooks,
    "@/utils/supabase/client": { createClient: () => client },
    "@/components/FreeCourseExamMaterials": { default: () => null },
    "@/data/freeCourse2026": { freeExam2026Questions: [], freeExamTaskArticles: {} },
    "@/data/freeCourseLaw2026": { freeCourseLaw2026Questions: [], lawSourceLabels: {}, LAW_EXAM_ID: "law", LAW_EXAM_DURATION_SECONDS: durationSeconds },
  })(file).default;
  function render() { stateIndex = 0; refIndex = 0; effects.length = 0; return Component(); }
  function click(tree, label) {
    function visit(element) {
      if (!React.isValidElement(element)) return null;
      if (element.type === "button" && renderToStaticMarkup(element).includes(label)) return element;
      return React.Children.toArray(element.props.children).map(visit).find(Boolean);
    }
    const button = visit(tree);
    assert.ok(button, `Expected a ${label} button`);
    button.props.onClick();
  }
  return { browser, saved, effects, render, click };
}

for (const [name, file, duration] of [
  ["Valintakoe G", "components/FreeCoursePracticeClient.tsx", 7200],
  ["Oikeustiede", "components/FreeCourseLawPracticeClient.tsx", 3600],
]) {
  test(`${name}: manual submission records elapsed wall time even without timer ticks`, async t => {
    const fixture = freeExamHarness(file, duration, t);
    fixture.click(fixture.render(), "Aloita koe");
    const tree = fixture.render();
    fixture.browser.advance(600_000);
    fixture.click(tree, "Palauta koe");
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(fixture.saved.length, 1);
    assert.equal(fixture.saved[0].time_used_seconds, 600);
    assert.equal(fixture.saved[0].finished_by_time, false);
    fixture.browser.advance(300_000);
    assert.match(renderToStaticMarkup(fixture.render()), /00:10:00/);
  });

  test(`${name}: resuming after sleep expires and saves the whole allowed duration`, async t => {
    const fixture = freeExamHarness(file, duration, t);
    fixture.click(fixture.render(), "Aloita koe");
    fixture.render();
    const timer = fixture.effects.find(effect => effect.deps.length === 2);
    assert.ok(timer);
    const cleanup = timer.callback();
    fixture.browser.advance((duration + 60) * 1000);
    fixture.browser.tick();
    fixture.render();
    const expiry = fixture.effects.find(effect => effect.deps.length === 3 && effect.deps[2] === 0);
    assert.ok(expiry);
    expiry.callback();
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(fixture.saved.length, 1);
    assert.equal(fixture.saved[0].time_used_seconds, duration);
    assert.equal(fixture.saved[0].finished_by_time, true);
    cleanup();
  });
}

test("clock cleanup cancels a pending first frame as well as interval updates", () => {
  const browser = browserClock(), ticks = [];
  const stop = subscribeToExamClock(createExamClock(60, browser.now), s => ticks.push(s), browser.browser);
  stop();
  browser.frame();
  browser.advance(61_000);
  browser.tick();
  assert.deepEqual(ticks, []);
  assert.equal(browser.frames.size, 0);
});

test("an initial inquiry fetch error is visible and can be retried successfully", async (t) => {
  const originalWindow = global.window, originalFetch = global.fetch;
  t.after(() => { global.window = originalWindow; global.fetch = originalFetch; });
  const timers = [], effects = [], states = [];
  let stateIndex = 0, requests = 0;
  global.window = { setTimeout(callback) { timers.push(callback); return timers.length; }, clearTimeout() {}, addEventListener() {}, removeEventListener() {} };
  global.fetch = async () => ++requests === 1
    ? Response.json({ error: "Kysymysten haku epäonnistui." }, { status: 503 })
    : Response.json({ inquiries: [{ id: "inquiry", topic: "Tuki", message: "Oma aiempi kysymys", status: "open", created_at: "2026-11-28T10:00:00Z" }] });
  const hooks = {
    useState(initial) {
      const index = stateIndex++;
      if (!(index in states)) states[index] = typeof initial === "function" ? initial() : initial;
      return [states[index], value => { states[index] = typeof value === "function" ? value(states[index]) : value; }];
    },
    useCallback: callback => callback,
    useEffect: callback => effects.push(callback),
  };
  const Component = createLoader({ react: hooks })("components/inquiries/MyInquiries.tsx").default;
  const render = () => { stateIndex = 0; return Component(); };
  assert.match(renderToStaticMarkup(render()), /Haetaan kysymyksiä/);
  const cleanup = effects[0]();
  timers.shift()();
  await new Promise(resolve => setImmediate(resolve));
  const tree = render();
  const failed = renderToStaticMarkup(tree);
  assert.match(failed, /role="alert"/);
  assert.match(failed, /Kysymysten haku epäonnistui/);
  assert.doesNotMatch(failed, /Ei vielä kysymyksiä/);
  function findButton(element) {
    if (!React.isValidElement(element)) return null;
    if (element.type === "button") return element;
    return React.Children.toArray(element.props.children).map(findButton).find(Boolean);
  }
  const retry = findButton(tree);
  assert.ok(retry);
  retry.props.onClick();
  await new Promise(resolve => setImmediate(resolve));
  assert.match(renderToStaticMarkup(render()), /Oma aiempi kysymys/);
  assert.equal(requests, 2);
  cleanup();
});

function guruFixture(category = "valintakoe-g") {
  const rights = new Set(["valintakoe-g-etaope"]);
  let user = { id: "current-user" }, authError = null, reads = 0;
  const events = [
    { user_id: "current-user", course_id: "valintakoe-g-etaope", source: "path-node", source_id: "gurupeli:question-1" },
    { user_id: "current-user", course_id: "valintakoe-g", source: "path-node", source_id: "gurupeli:question-2" },
    { user_id: "other-user", course_id: "valintakoe-g-etaope", source: "path-node", source_id: "gurupeli:other-user" },
    { user_id: "current-user", course_id: "oikis", source: "path-node", source_id: "gurupeli:other-game" },
  ];
  const admin = { from(table) {
    assert.equal(table, "guru_game_events"); reads += 1;
    const filters = [];
    return {
      select() { return this; },
      eq(field, value) { filters.push(row => row[field] === value); return this; },
      in(field, values) { filters.push(row => values.includes(row[field])); return this; },
      async order() { return { data: events.filter(row => filters.every(filter => filter(row))), error: null }; },
    };
  } };
  const config = load("data/gurupath/gameConfig.ts");
  const fixtures = createLoader({
    "@/data/gurupath": config,
    "@/lib/courseAccess": { hasCourseAccess: async courseId => rights.has(courseId) },
    "@/lib/supabase/server-user": { createSupabaseServerUser: async () => ({ auth: { getUser: async () => ({ data: { user }, error: authError }) } }) },
    "@/lib/supabase/server-admin": { createSupabaseAdmin: () => admin },
    "@/lib/gurupath/questionBank": {
      getGuruPathWithImports: async () => ({ levels: ["question-1", "question-2"].map(questionId => ({ id: questionId, questionId, category })) }),
      getGuruQuestionWithImports: async () => ({ id: "question-1", answers: [] }),
    },
  });
  return { rights, fixtures, reads: () => reads, setUser(value) { user = value; }, setAuthError(value) { authError = value; } };
}

test("GuruPeli history survives adding or replacing a commercial course variant", async () => {
  const fixture = guruFixture();
  const { GET } = fixture.fixtures("app/api/gurupath/course-progress/route.ts");
  const get = id => GET(new Request(`https://example.test/api/gurupath/course-progress?courseId=${id}`));
  const before = await (await get("valintakoe-g-etaope")).json();
  fixture.rights.add("valintakoe-g");
  const after = await (await get("valintakoe-g")).json();
  assert.deepEqual(after, before);
  assert.deepEqual(after.completed.map(row => row.sourceId), ["gurupeli:question-1", "gurupeli:question-2"]);
  assert.equal((await get("valintakoe-g-etaope")).status, 200);
  fixture.rights.delete("valintakoe-g-etaope");
  assert.deepEqual(await (await get("valintakoe-g")).json(), before);
  assert.equal((await get("oikis")).status, 403);
});

test("GuruPeli history requires a verified user and an active game entitlement", async () => {
  const fixture = guruFixture(), { GET } = fixture.fixtures("app/api/gurupath/course-progress/route.ts");
  const request = () => GET(new Request("https://example.test/api/gurupath/course-progress?courseId=valintakoe-g"));
  fixture.setUser(null);
  assert.equal((await request()).status, 401);
  fixture.setUser({ id: "current-user" });
  fixture.setAuthError(new Error("Invalid session"));
  assert.equal((await request()).status, 401);
  fixture.setAuthError(null);
  fixture.rights.clear();
  assert.equal((await request()).status, 403);
  assert.equal(fixture.reads(), 0);
});

test("an open GuruPeli accepts its still-active course after an additional entitlement", async () => {
  const fixture = guruFixture();
  const { authorizeGuruNode } = fixture.fixtures("lib/gurupath/serverGame.ts");
  fixture.rights.add("valintakoe-g");
  const node = await authorizeGuruNode("valintakoe-g-etaope", "gurupeli:question-1");
  assert.ok(node);
  assert.ok(node.courseIds.includes("valintakoe-g-etaope"));
  assert.ok(node.courseIds.includes("valintakoe-g"));
  assert.equal(node.storageCourseId, "valintakoe-g");
  fixture.rights.delete("valintakoe-g-etaope");
  assert.equal(await authorizeGuruNode("valintakoe-g-etaope", "gurupeli:question-1"), null);
  assert.equal(await authorizeGuruNode("oikis", "gurupeli:question-1"), null);
});

test("shared completion survives replacing the entire game family", async () => {
  const fixture = guruFixture("shared");
  const { GET } = fixture.fixtures("app/api/gurupath/course-progress/route.ts");
  const get = id => GET(new Request(`https://example.test/api/gurupath/course-progress?courseId=${id}`));
  const previous = await (await get("valintakoe-g-etaope")).json();
  fixture.rights.clear();
  fixture.rights.add("oikis-teho");
  const switched = await (await get("oikis-teho")).json();
  assert.deepEqual(switched, previous);
  assert.equal((await get("valintakoe-g-etaope")).status, 403);
});

test("an open shared GuruPeli question survives switching to the combined game", async () => {
  const fixture = guruFixture("shared");
  const { authorizeGuruNode } = fixture.fixtures("lib/gurupath/serverGame.ts");
  assert.ok(await authorizeGuruNode("valintakoe-g-etaope", "gurupeli:question-1"));
  fixture.rights.add("oikis-teho");
  assert.ok(await authorizeGuruNode("valintakoe-g-etaope", "gurupeli:question-1"));
  assert.ok(await authorizeGuruNode("oikis-teho", "gurupeli:question-1"));
  assert.equal(await authorizeGuruNode("oikis", "gurupeli:question-1"), null);
});
