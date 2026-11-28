const { test } = require("node:test");
const assert = require("node:assert/strict");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const createLoader = require("./shop-test-loader.cjs");
process.env.TZ = "Europe/Helsinki";
const model = createLoader()("components/calendar/calendarModel.ts");
const day = value => new Date(value + "T12:00:00");
function event(overrides = {}) {
  return { id: "event", calendar_id: "own", owner_id: "member", category_id: "study", title: "Aineistoharjoitus", description: null,
    start_at: "2026-11-25T09:00:00+02:00", end_at: "2026-11-25T10:30:00+02:00", all_day: false,
    visibility: "private", importance: "normal", recurrence: "none", recurrence_until: null,
    reminder_minutes: 15, is_study: true, study_subject: null, actual_minutes: 30, completed: true,
    created_at: "2026-11-25", updated_at: "2026-11-25", ...overrides };
}

test("weeks start on Monday and month grids contain only the necessary full weeks", () => {
  assert.equal(model.dateKey(model.weekDays(day("2027-01-03"))[0]), "2026-12-28");
  assert.equal(model.weekDays(day("2027-01-03")).length, 7);
  assert.equal(model.monthDays(day("2021-02-15")).length, 28);
  assert.equal(model.monthDays(day("2026-11-15")).length, 42);
  assert.equal(model.monthDays(day("2026-02-15")).length, 35);
});

test("overnight appointments appear on both dates and are clipped to each day", () => {
  const night = event({ start_at: "2026-11-25T23:00:00+02:00", end_at: "2026-11-26T01:00:00+02:00" });
  const first = model.dayOccurrences([night], day("2026-11-25"))[0];
  const next = model.dayOccurrences([night], day("2026-11-26"))[0];
  assert.equal(model.occurrenceMinutes(first), 60);
  assert.equal(model.occurrenceMinutes(next), 60);
  assert.equal(first.continuesAfter, true);
  assert.equal(next.continuesBefore, true);
  assert.equal(first.occurrenceId, next.occurrenceId);
  assert.equal(model.dayOccurrences([night], day("2026-11-27")).length, 0);
});

test("all-day events are visible separately and midnight does not create a phantom extra day", () => {
  const allDay = event({ all_day: true, start_at: "2026-11-25T00:00:00+02:00", end_at: "2026-11-26T00:00:00+02:00" });
  assert.equal(model.dayOccurrences([allDay], day("2026-11-25")).length, 1);
  assert.equal(model.dayOccurrences([allDay], day("2026-11-26")).length, 0);
  assert.equal(model.layoutDayEvents(model.dayOccurrences([allDay], day("2026-11-25"))).length, 0);
  assert.equal(model.editEventDraft(allDay).end_date, "2026-11-25");
});

test("weekly appointments preserve local time across daylight saving changes", () => {
  const recurring = event({ start_at: "2026-03-22T09:00:00+02:00", end_at: "2026-03-22T10:00:00+02:00", recurrence: "weekly", recurrence_until: "2026-03-29" });
  const occurrence = model.dayOccurrences([recurring], day("2026-03-29"))[0];
  assert.equal(model.timeLabel(occurrence.start), "09:00");
  assert.equal(model.timeLabel(occurrence.end), "10:00");
  assert.equal(model.occurrenceMinutes(occurrence), 60);
  assert.equal(model.dayOccurrences([recurring], day("2026-04-05")).length, 0);
});

test("recurring overnight appointments remain visible the following day", () => {
  const recurring = event({ start_at: "2026-11-23T23:00:00+02:00", end_at: "2026-11-24T01:00:00+02:00", recurrence: "weekly" });
  const next = model.dayOccurrences([recurring], day("2026-12-01"));
  assert.equal(next.length, 1);
  assert.equal(model.timeLabel(next[0].start), "00:00");
  assert.equal(model.timeLabel(next[0].end), "01:00");
});

test("overlapping appointments use separate lanes while adjacent appointments use the full width", () => {
  const events = [
    event({ id: "a", start_at: "2026-11-25T09:00:00+02:00", end_at: "2026-11-25T11:00:00+02:00" }),
    event({ id: "b", start_at: "2026-11-25T10:00:00+02:00", end_at: "2026-11-25T12:00:00+02:00" }),
    event({ id: "c", start_at: "2026-11-25T10:30:00+02:00", end_at: "2026-11-25T11:30:00+02:00" }),
    event({ id: "d", start_at: "2026-11-25T12:00:00+02:00", end_at: "2026-11-25T13:00:00+02:00" }),
  ];
  const laidOut = model.layoutDayEvents(model.dayOccurrences(events, day("2026-11-25")));
  assert.deepEqual(laidOut.slice(0, 3).map(item => item.lane), [0, 1, 2]);
  assert.ok(laidOut.slice(0, 3).every(item => item.lanes === 3));
  assert.equal(laidOut[3].lanes, 1);
});

test("the timeline expands to include early and late appointments", () => {
  const early = event({ start_at: "2026-11-25T03:30:00+02:00", end_at: "2026-11-25T04:30:00+02:00" });
  const late = event({ id: "late", start_at: "2026-11-25T23:00:00+02:00", end_at: "2026-11-26T00:00:00+02:00" });
  const range = model.timelineHours(model.dayOccurrences([early, late], day("2026-11-25")));
  assert.equal(range.start, 3);
  assert.equal(range.end, 24);
});

test("event creation understands midnight and rejects empty, impossible or equal times", () => {
  const draft = model.newEventDraft("own", day("2026-11-25"), 22);
  const result = model.eventDraftTimes({ ...draft, start: "22:30", end: "00:30" });
  assert.equal(model.dateKey(result.end), "2026-11-26");
  assert.equal((result.end - result.start) / 60_000, 120);
  assert.throws(() => model.eventDraftTimes({ ...draft, end: draft.start }));
  assert.throws(() => model.eventDraftTimes({ ...draft, date: "2026-02-30" }));
  assert.throws(() => model.eventDraftTimes({ ...draft, start: "" }));
  assert.throws(() => model.eventDraftTimes({ ...draft, recurrence: "weekly", recurrence_until: "2026-11-24" }));
});

test("an all-day event covers the local day even when daylight saving shortens it", () => {
  const draft = model.newEventDraft("own", day("2026-03-29"));
  const result = model.eventDraftTimes({ ...draft, all_day: true });
  assert.equal(model.dateKey(result.start), "2026-03-29");
  assert.equal(model.dateKey(result.end), "2026-03-30");
  assert.equal((result.end - result.start) / 3_600_000, 23);
});

function hookHarness(file, mocks = {}) {
  const states = [], refs = [], effects = [];
  let stateIndex = 0, refIndex = 0;
  const hooks = {
    useState(initial) { const index = stateIndex++; if (!(index in states)) states[index] = typeof initial === "function" ? initial() : initial; return [states[index], value => { states[index] = typeof value === "function" ? value(states[index]) : value; }]; },
    useMemo: compute => compute(), useCallback: callback => callback,
    useRef(initial) { return refs[refIndex++] ??= { current: initial }; },
    useEffect: callback => effects.push(callback), useId: () => "dialog-title",
  };
  const css = new Proxy({}, { get: (_, key) => key });
  const Component = createLoader({ react: hooks, "./CalendarBoard.module.css": { __esModule: true, default: css },
    "@/components/BrandLogo": { default: () => React.createElement("span", null, "VG") }, ...mocks })(file).default;
  return { effects, render(props) { stateIndex = 0; refIndex = 0; effects.length = 0; return Component(props); } };
}
function findElement(element, predicate) {
  if (!React.isValidElement(element)) return null;
  if (predicate(element)) return element;
  return React.Children.toArray(element.props.children).map(child => findElement(child, predicate)).find(Boolean);
}
const group = { id: "own", owner_id: "member", name: "Oma kalenteri", kind: "personal", created_at: "2026-01-01" };
const category = { id: "study", user_id: "member", name: "Opiskelu", kind: "study", color_key: "indigo", created_at: "2026-01-01" };
const noAction = async () => {};

test("hiding all calendars stays respected after data refresh and view switches", () => {
  const harness = hookHarness("components/calendar/CalendarBoard.tsx");
  const props = { groups: [group], categories: [category], events: [event()], notes: [], initialDate: "2026-11-25T12:00:00+02:00", onRetry() {}, onSaveEvent: noAction, onDeleteEvent: noAction, onAddNote: noAction, onToggleNote: noAction, onDeleteNote: noAction };
  const tree = harness.render(props);
  assert.match(renderToStaticMarkup(tree), /Aineistoharjoitus/);
  const checkbox = findElement(tree, item => item.type === "input" && item.props.type === "checkbox");
  checkbox.props.onChange();
  let refreshed = harness.render({ ...props, events: [...props.events] });
  assert.doesNotMatch(renderToStaticMarkup(refreshed), /Aineistoharjoitus/);
  assert.match(renderToStaticMarkup(refreshed), /Kalenterit on piilotettu/);
  const month = findElement(refreshed, item => item.type === "button" && item.props.children === "Kuukausi");
  month.props.onClick();
  refreshed = harness.render(props);
  assert.doesNotMatch(renderToStaticMarkup(refreshed), /Aineistoharjoitus/);
});

test("the calendar starts with one primary creation action and a quiet summary entry", () => {
  const html = renderToStaticMarkup(React.createElement(createLoader({
    "./CalendarBoard.module.css": { __esModule: true, default: {} },
    "@/components/BrandLogo": { default: () => React.createElement("span", null, "VG") },
  })("components/calendar/CalendarBoard.tsx").default, { groups: [group], categories: [category], events: [], notes: [], initialDate: "2026-11-25T12:00:00+02:00", onRetry() {}, onSaveEvent: noAction, onDeleteEvent: noAction, onAddNote: noAction, onToggleNote: noAction, onDeleteNote: noAction }));
  assert.equal((html.match(/Uusi tapahtuma/g) ?? []).length, 1);
  assert.match(html, /Viikon yhteenveto/);
  assert.doesNotMatch(html, /Kalenterin ehdotukset|Kannattaa|Lisää viikon menoja/);
  assert.doesNotMatch(html, /Kurssialustalle|Oma rauhallinen paikka/);
});

test("selecting another weekday updates the visible selected date and highlights exactly one column", () => {
  const harness = hookHarness("components/calendar/CalendarBoard.tsx");
  const props = { groups: [group], categories: [category], events: [event()], notes: [], initialDate: "2026-11-25T12:00:00+02:00", onRetry() {}, onSaveEvent: noAction, onDeleteEvent: noAction, onAddNote: noAction, onToggleNote: noAction, onDeleteNote: noAction };
  const tree = harness.render(props);
  const week = findElement(tree, element => element.type?.name === "WeekGrid");
  week.props.onSelect(day("2026-11-26"));
  const html = renderToStaticMarkup(harness.render(props));
  assert.match(html, /Valittuna torstaina 26\.11\./);
  assert.equal((html.match(/data-selected="true"/g) ?? []).length, 1);
});

function controllerFixture(allowed = true) {
  const writes = [], filters = [];
  const tables = { calendar_groups: [group], calendar_categories: [category], calendar_events: [event()], calendar_notes: [] };
  const client = {
    auth: { getUser: async () => ({ data: { user: { id: "member", email: "member@example.test", user_metadata: {} } }, error: null }) },
    rpc: async name => ({ data: name === "has_valintaguru_calendar_access" ? allowed : null, error: null }),
    from(table) {
      const predicates = [];
      let write = null;
      const query = {
        select() { return this; }, order() { return this; },
        eq(field, value) { predicates.push([field, value]); filters.push({ table, field, value }); return this; },
        update(payload) { write = { table, payload, predicates }; writes.push(write); return this; },
        insert(payload) { write = { table, payload, predicates }; writes.push(write); return this; },
        delete() { write = { table, predicates }; writes.push(write); return this; },
        single: async () => ({ data: { id: "event" }, error: null }),
        then(resolve, reject) { return Promise.resolve({ data: write ? [{ id: "event" }] : (tables[table] ?? []).filter(row => predicates.every(([key, value]) => row[key] === value)), error: null }).then(resolve, reject); },
      };
      return query;
    },
  };
  const harness = hookHarness("components/calendar/CalendarApp.tsx", {
    "@/utils/supabase/client": { createClient: () => client },
    "next/navigation": { useRouter: () => ({ replace() {}, refresh() {} }) },
    "./CalendarBoard": { default: () => null },
  });
  return { harness, writes, filters, async initialize() { harness.render(); harness.effects[0](); await new Promise(resolve => setImmediate(resolve)); return harness.render(); } };
}

test("event edits preserve recorded study information and remain scoped to the owner", async () => {
  const fixture = controllerFixture(), board = await fixture.initialize();
  await board.props.onSaveEvent(model.editEventDraft(event()));
  const write = fixture.writes[0];
  assert.equal(write.table, "calendar_events");
  assert.ok(write.predicates.some(([key, value]) => key === "owner_id" && value === "member"));
  for (const key of ["completed", "actual_minutes", "reminder_minutes"]) assert.equal(key in write.payload, false);
  assert.equal(write.payload.visibility, "private");
});

test("foreign calendar and category IDs are rejected before a write", async () => {
  const fixture = controllerFixture(), board = await fixture.initialize();
  const draft = model.editEventDraft(event());
  await assert.rejects(board.props.onSaveEvent({ ...draft, calendar_id: "other-calendar" }), /ei kuulu/);
  await assert.rejects(board.props.onSaveEvent({ ...draft, category_id: "other-category" }), /ei kuulu/);
  assert.equal(fixture.writes.length, 0);
});

test("a missing calendar entitlement never loads private events", async () => {
  const fixture = controllerFixture(false);
  await fixture.initialize();
  assert.equal(fixture.filters.length, 0);
  assert.equal(fixture.writes.length, 0);
});
