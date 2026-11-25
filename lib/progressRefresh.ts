/** Refresh a retained progress page after a retake in another tab or browser history. */
export function subscribeToProgressRefresh(
  refresh: () => void,
  browserWindow: Window = window,
  pageDocument: Document = document,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const schedule = () => {
    if (pageDocument.visibilityState !== "visible") return;
    if (timer != null) clearTimeout(timer);
    // Focus and visibilitychange often arrive together; perform one request.
    timer = setTimeout(() => { timer = null; refresh(); }, 100);
  };
  const onPageShow = (event: PageTransitionEvent) => {
    if (event.persisted) schedule();
  };
  browserWindow.addEventListener("focus", schedule);
  browserWindow.addEventListener("pageshow", onPageShow);
  pageDocument.addEventListener("visibilitychange", schedule);
  return () => {
    if (timer != null) clearTimeout(timer);
    browserWindow.removeEventListener("focus", schedule);
    browserWindow.removeEventListener("pageshow", onPageShow);
    pageDocument.removeEventListener("visibilitychange", schedule);
  };
}
