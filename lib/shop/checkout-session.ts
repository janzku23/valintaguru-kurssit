"use client";

const PREFIX = "vg-checkout:";
type Attempt = { key: string; orderId?: string };
const validKey = (value: unknown): value is string =>
  typeof value === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);

function readAttempt(raw: string | null): Attempt | null {
  // Keep unfinished checkout attempts created before order tracking was added.
  if (validKey(raw)) return { key: raw };
  try {
    const value = JSON.parse(raw ?? "null");
    return value && validKey(value.key) ? value : null;
  } catch {
    return null;
  }
}

export function checkoutAttempt(fingerprint: string, email: string) {
  const storageKey = `${PREFIX}${fingerprint}:${email.trim().toLowerCase()}`;
  const stored = readAttempt(sessionStorage.getItem(storageKey));
  if (stored) return { storageKey, key: stored.key };
  const key = crypto.randomUUID();
  sessionStorage.setItem(storageKey, JSON.stringify({ key }));
  return { storageKey, key };
}

export function rememberCheckoutOrder(
  storageKey: string,
  key: string,
  orderId: string,
) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify({ key, orderId }));
  } catch {
    // A confirmed checkout must still navigate if the browser blocks storage.
  }
}

export function completeCheckoutOrder(orderId: string) {
  try {
    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      const storageKey = sessionStorage.key(i);
      if (
        storageKey?.startsWith(PREFIX) &&
        readAttempt(sessionStorage.getItem(storageKey))?.orderId === orderId
      )
        sessionStorage.removeItem(storageKey);
    }
  } catch {
    // Storage access must not prevent the confirmed order from rendering.
  }
}
