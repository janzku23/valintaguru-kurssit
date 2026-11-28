import type { PublicOrder } from "./types";

export const ORDER_POLL_INTERVAL_MS = 30000;

export function shouldPollOrder(order: PublicOrder) {
  if (order.status === "refunded") return false;
  if (order.status !== "unpaid")
    return order.fulfillment_status !== "delivered";
  return order.payment_status !== "fail";
}

export function startOrderPolling(
  load: () => Promise<PublicOrder | null>,
  isVisible: () => boolean = () => true,
) {
  let stopped = false;
  let delay = ORDER_POLL_INTERVAL_MS;
  let timer: ReturnType<typeof setTimeout>;
  const schedule = (wait: number) => {
    timer = setTimeout(() => void poll(), wait);
  };
  async function poll() {
    if (stopped) return;
    if (!isVisible()) {
      schedule(ORDER_POLL_INTERVAL_MS);
      return;
    }
    let order: PublicOrder | null;
    try {
      order = await load();
    } catch {
      order = null;
    }
    if (stopped || (order && !shouldPollOrder(order))) return;
    delay = order ? ORDER_POLL_INTERVAL_MS : Math.min(delay * 2, 300000);
    schedule(delay);
  }
  schedule(0);
  return () => {
    stopped = true;
    clearTimeout(timer);
  };
}
