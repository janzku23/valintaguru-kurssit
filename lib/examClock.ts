/** A fixed deadline keeps exam time accurate after throttled timers or sleep. */
export function createExamClock(durationSeconds: number, now: () => number = Date.now) {
  const deadline = now() + durationSeconds * 1000;
  let stoppedAt: number | null = null;
  const remainingSeconds = () => Math.max(
    0,
    Math.min(durationSeconds, Math.ceil((deadline - (stoppedAt ?? now())) / 1000)),
  );
  return {
    remainingSeconds,
    stop() {
      stoppedAt ??= now();
      return remainingSeconds();
    },
  };
}

type ExamClock = ReturnType<typeof createExamClock>;
type TimerWindow = Pick<Window,
  "requestAnimationFrame" | "cancelAnimationFrame" | "setInterval" | "clearInterval" | "addEventListener" | "removeEventListener"
>;

export function subscribeToExamClock(
  clock: ExamClock,
  onTick: (remainingSeconds: number) => void,
  browserWindow: TimerWindow = window,
) {
  let previous: number | undefined;
  const sync = () => {
    const remaining = clock.remainingSeconds();
    if (remaining !== previous) {
      previous = remaining;
      onTick(remaining);
    }
  };
  const frame = browserWindow.requestAnimationFrame(sync);
  const interval = browserWindow.setInterval(sync, 250);
  browserWindow.addEventListener("focus", sync);
  browserWindow.addEventListener("pageshow", sync);
  return () => {
    browserWindow.cancelAnimationFrame(frame);
    browserWindow.clearInterval(interval);
    browserWindow.removeEventListener("focus", sync);
    browserWindow.removeEventListener("pageshow", sync);
  };
}
