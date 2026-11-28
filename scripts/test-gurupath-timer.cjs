const { test } = require("node:test");
const assert = require("node:assert/strict");
const load = require("./shop-test-loader.cjs")();
const { subscribeToGuruReadingTimer } = load("lib/gurupath/readingTimer.ts");

function browserClock() {
  let time = 1_000_000;
  let id = 0;
  const storage = new Map();
  const frames = new Map();
  const intervals = new Map();
  const browser = {
    sessionStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: (key) => storage.delete(key),
    },
    requestAnimationFrame: (callback) => { frames.set(++id, callback); return id; },
    cancelAnimationFrame: (timer) => frames.delete(timer),
    setInterval: (callback, delay) => {
      assert.equal(delay, 250);
      intervals.set(++id, callback);
      return id;
    },
    clearInterval: (timer) => intervals.delete(timer),
  };
  return {
    browser, storage, frames, intervals,
    now: () => time,
    frame: () => {
      const callbacks = [...frames.values()];
      frames.clear();
      callbacks.forEach((callback) => callback(time));
    },
    // One clock event after a pause models throttled background tabs, too.
    tick: (ms) => { time += ms; [...intervals.values()].forEach((callback) => callback()); },
  };
}

const deadlineKey = (node = "node") => `gurupeli:reading-deadline:${node}`;
const consumedKey = (node = "node") => `gurupeli:reading-consumed:${node}`;
function subscribe(clock, ticks, duration = 60, node = "node") {
  return subscribeToGuruReadingTimer(node, duration, (seconds) => ticks.push(seconds), clock.browser, clock.now);
}

test("first update waits for the browser and remaining seconds follow the deadline", () => {
  const clock = browserClock(), ticks = [];
  const stop = subscribe(clock, ticks);
  assert.deepEqual(ticks, []);
  assert.equal(clock.storage.get(deadlineKey()), String(clock.now() + 60_000));
  clock.frame();
  assert.deepEqual(ticks, [60]);
  clock.tick(250);
  assert.deepEqual(ticks, [60]);
  clock.tick(750);
  assert.deepEqual(ticks, [60, 59]);
  stop();
});

test("expiry completes once, consumes the text and clears the interval", () => {
  const clock = browserClock(), ticks = [];
  const stop = subscribe(clock, ticks, 2);
  clock.frame();
  clock.tick(1_999);
  assert.deepEqual(ticks, [2, 1]);
  clock.tick(1);
  assert.deepEqual(ticks, [2, 1, 0]);
  assert.equal(clock.storage.get(consumedKey()), "1");
  assert.equal(clock.storage.has(deadlineKey()), false);
  assert.equal(clock.intervals.size, 0);
  clock.tick(10_000);
  assert.deepEqual(ticks, [2, 1, 0]);
  stop();
});

test("unmount before the first frame cancels all updates and keeps the deadline", () => {
  const clock = browserClock(), ticks = [];
  const stop = subscribe(clock, ticks);
  const queuedFrame = [...clock.frames.values()][0];
  const deadline = clock.storage.get(deadlineKey());
  stop();
  assert.equal(clock.frames.size, 0);
  assert.equal(clock.intervals.size, 0);
  queuedFrame();
  clock.tick(120_000);
  assert.deepEqual(ticks, []);
  assert.equal(clock.storage.get(deadlineKey()), deadline);
  assert.equal(clock.storage.has(consumedKey()), false);
});

test("reopening or reloading a reading task resumes its original deadline", () => {
  const clock = browserClock(), first = [], reopened = [];
  const stop = subscribe(clock, first);
  clock.frame();
  const deadline = clock.storage.get(deadlineKey());
  clock.tick(17_250);
  assert.equal(first.at(-1), 43);
  stop();
  clock.tick(5_000);
  const stopReopened = subscribe(clock, reopened);
  clock.frame();
  assert.deepEqual(reopened, [38]);
  assert.equal(clock.storage.get(deadlineKey()), deadline);
  stopReopened();
});

test("a deadline that elapsed while closed opens the question without restarting reading", () => {
  const clock = browserClock(), ticks = [];
  clock.storage.set(deadlineKey(), String(clock.now() - 1_000));
  const stop = subscribe(clock, ticks);
  clock.frame();
  assert.deepEqual(ticks, [0]);
  assert.equal(clock.storage.get(consumedKey()), "1");
  assert.equal(clock.storage.has(deadlineKey()), false);
  assert.equal(clock.intervals.size, 0);
  stop();
});

test("previously consumed text stays hidden after early continuation or reload", () => {
  const clock = browserClock(), ticks = [];
  clock.storage.set(consumedKey(), "1");
  const stop = subscribe(clock, ticks);
  assert.equal(clock.storage.has(deadlineKey()), false);
  clock.frame();
  assert.deepEqual(ticks, [0]);
  assert.equal(clock.intervals.size, 0);
  stop();
});

test("a throttled interval uses elapsed wall time even before the first frame", () => {
  const clock = browserClock(), ticks = [];
  const stop = subscribe(clock, ticks);
  clock.tick(21_500);
  assert.deepEqual(ticks, [39]);
  clock.tick(45_000);
  assert.deepEqual(ticks, [39, 0]);
  clock.frame();
  assert.deepEqual(ticks, [39, 0]);
  stop();
});

test("Strict Mode setup, cleanup and setup keep one timer and the same deadline", () => {
  const clock = browserClock(), cancelled = [], active = [];
  const stopFirst = subscribe(clock, cancelled);
  const deadline = clock.storage.get(deadlineKey());
  stopFirst();
  const stopSecond = subscribe(clock, active);
  assert.equal(clock.intervals.size, 1);
  assert.equal(clock.frames.size, 1);
  assert.equal(clock.storage.get(deadlineKey()), deadline);
  clock.frame();
  clock.tick(1_000);
  assert.deepEqual(cancelled, []);
  assert.deepEqual(active, [60, 59]);
  stopSecond();
});

test("different tasks keep separate reading deadlines", () => {
  const clock = browserClock(), first = [], second = [];
  const stopFirst = subscribe(clock, first, 60, "first");
  const stopSecond = subscribe(clock, second, 20, "second");
  clock.frame();
  assert.deepEqual(first, [60]);
  assert.deepEqual(second, [20]);
  stopFirst();
  clock.tick(20_000);
  assert.deepEqual(first, [60]);
  assert.deepEqual(second, [20, 0]);
  assert.equal(clock.storage.has(deadlineKey("first")), true);
  assert.equal(clock.storage.get(consumedKey("second")), "1");
  stopSecond();
});

test("invalid stored deadlines recover to a fresh finite reading time", () => {
  for (const value of ["NaN", "Infinity", "-10", "0", "invalid"]) {
    const clock = browserClock(), ticks = [];
    clock.storage.set(deadlineKey(), value);
    const stop = subscribe(clock, ticks);
    clock.frame();
    assert.deepEqual(ticks, [60], value);
    assert.equal(clock.storage.get(deadlineKey()), String(clock.now() + 60_000));
    stop();
  }
});

test("a new attempt after cooldown gets a fresh deadline after storage is reset", () => {
  const clock = browserClock(), ticks = [];
  clock.storage.set(consumedKey(), "1");
  clock.browser.sessionStorage.removeItem(consumedKey());
  clock.browser.sessionStorage.removeItem(deadlineKey());
  const stop = subscribe(clock, ticks);
  clock.frame();
  assert.deepEqual(ticks, [60]);
  assert.equal(clock.storage.has(consumedKey()), false);
  stop();
});

test("a reading task with zero reading time completes on its first frame", () => {
  const clock = browserClock(), ticks = [];
  const stop = subscribe(clock, ticks, 0);
  clock.frame();
  assert.deepEqual(ticks, [0]);
  assert.equal(clock.storage.get(consumedKey()), "1");
  assert.equal(clock.intervals.size, 0);
  stop();
});
