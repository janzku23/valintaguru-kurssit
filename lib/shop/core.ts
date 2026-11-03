import { createHmac, timingSafeEqual } from "node:crypto";

export function signature(
  fields: Record<string, string>,
  body: string,
  secret: string,
  algorithm = "sha256",
) {
  if (algorithm !== "sha256" && algorithm !== "sha512")
    throw new Error("Unsupported HMAC algorithm");
  const normalized: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    const lower = key.toLowerCase();
    if (!lower.startsWith("checkout-")) continue;
    if (lower in normalized || /[\r\n]/.test(key + value))
      throw new Error("Ambiguous signed fields");
    normalized[lower] = value;
  }
  const payload =
    Object.keys(normalized)
      .sort()
      .map((key) => `${key}:${normalized[key]}\n`)
      .join("") + body;
  return createHmac(algorithm, secret).update(payload, "utf8").digest("hex");
}
export function verifySignature(
  fields: Record<string, string>,
  body: string,
  secret: string,
  received: string,
) {
  const algo = fields["checkout-algorithm"];
  if (algo !== "sha256" && algo !== "sha512") return false;
  if (
    !new RegExp(`^[a-fA-F0-9]{${algo === "sha256" ? 64 : 128}}$`).test(received)
  )
    return false;
  try {
    return timingSafeEqual(
      Buffer.from(signature(fields, body, secret, algo), "hex"),
      Buffer.from(received, "hex"),
    );
  } catch {
    return false;
  }
}
export function signedQuery(url: URL) {
  const result: Record<string, string> = {};
  for (const [key, value] of url.searchParams) {
    if (key !== key.toLowerCase() && key.toLowerCase().startsWith("checkout-"))
      throw new Error("Invalid callback fields");
    if (key.startsWith("checkout-") || key === "signature") {
      if (key in result) throw new Error("Duplicate callback field");
      result[key] = value;
    }
  }
  return result;
}
export function uuid(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      value,
    )
  );
}
export function productIds(value: unknown): string[] {
  if (
    !Array.isArray(value) ||
    value.length < 1 ||
    value.length > 20 ||
    !value.every(uuid) ||
    new Set(value).size !== value.length
  )
    throw new Error("Virheellinen ostoskori.");
  return value;
}
export function assertPaymentMatch(
  payment: {
    transactionId: string;
    amount: number;
    currency: string;
    stamp: string;
    reference: string;
    status: string;
  },
  expected: {
    transactionId: string;
    amount: number;
    currency: string;
    stamp: string;
    reference: string;
  },
) {
  for (const key of [
    "transactionId",
    "amount",
    "currency",
    "stamp",
    "reference",
  ] as const) {
    if (payment[key] !== expected[key])
      throw new Error(`Payment mismatch: ${key}`);
  }
  if (!["new", "ok", "fail", "pending", "delayed"].includes(payment.status))
    throw new Error("Unknown payment status");
}
export function html(value: string) {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
}
