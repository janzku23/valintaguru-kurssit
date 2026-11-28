type TimerWindow = Pick<
  Window,
  "sessionStorage" | "requestAnimationFrame" | "cancelAnimationFrame" | "setInterval" | "clearInterval"
>;

/** Tilaa kellonaikaan perustuvan lukuajan päivitykset vasta selaimen tapahtumissa. */
export function subscribeToGuruReadingTimer(
  nodeId: string,
  durationSeconds: number,
  onTick: (remainingSeconds: number) => void,
  browserWindow: TimerWindow = window,
  now: () => number = Date.now,
) {
  const deadlineKey = `gurupeli:reading-deadline:${nodeId}`;
  const consumedKey = `gurupeli:reading-consumed:${nodeId}`;
  const consumed = browserWindow.sessionStorage.getItem(consumedKey) === "1";
  const storedDeadline = Number(browserWindow.sessionStorage.getItem(deadlineKey));
  const hasDeadline = Number.isFinite(storedDeadline) && storedDeadline > 0;
  // Myös jo päättynyt määräaika säilytetään: uudelleenavaus ei anna lisää lukuaikaa.
  const deadline = hasDeadline ? storedDeadline : now() + durationSeconds * 1000;

  if (!consumed && !hasDeadline) {
    browserWindow.sessionStorage.setItem(deadlineKey, String(deadline));
  }

  let stopped = false;
  let previousSeconds: number | undefined;
  let interval: number | undefined;
  const syncTimer = () => {
    if (stopped) return;
    const remaining = consumed ? 0 : Math.max(0, Math.ceil((deadline - now()) / 1000));

    if (remaining === 0) {
      stopped = true;
      browserWindow.sessionStorage.setItem(consumedKey, "1");
      browserWindow.sessionStorage.removeItem(deadlineKey);
      if (interval !== undefined) browserWindow.clearInterval(interval);
    }

    if (remaining !== previousSeconds) {
      previousSeconds = remaining;
      onTick(remaining);
    }
  };

  // Ensimmäinen tilapäivitys tehdään selaimen piirrossa; intervalli toimii myös taustalla.
  const frame = browserWindow.requestAnimationFrame(syncTimer);
  if (!consumed) interval = browserWindow.setInterval(syncTimer, 250);

  return () => {
    stopped = true;
    browserWindow.cancelAnimationFrame(frame);
    if (interval !== undefined) browserWindow.clearInterval(interval);
  };
}
