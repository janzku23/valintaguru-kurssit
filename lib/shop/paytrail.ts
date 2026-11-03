import "server-only";
import { randomUUID } from "node:crypto";
import { signature, verifySignature } from "./core";
import { shopConfig } from "./config";
export type PaymentInfo = {
  transactionId: string;
  status: "new" | "ok" | "fail" | "pending" | "delayed";
  amount: number;
  currency: string;
  stamp: string;
  reference: string;
  provider?: string;
  href?: string;
};
export type CreatedPayment = {
  transactionId: string;
  href: string;
  reference: string;
  providers: {
    id: string;
    name: string;
    icon: string;
    url: string;
    parameters: { name: string; value: string }[];
  }[];
};
export async function paytrail<T>(
  method: "POST" | "GET",
  path: string,
  payload?: unknown,
  transaction?: string,
) {
  const config = shopConfig();
  const body = payload === undefined ? "" : JSON.stringify(payload);
  const headers: Record<string, string> = {
    "checkout-account": config.merchant,
    "checkout-algorithm": "sha256",
    "checkout-method": method,
    "checkout-nonce": randomUUID(),
    "checkout-timestamp": new Date().toISOString(),
    "platform-name": "valintaguru",
  };
  if (transaction) headers["checkout-transaction-id"] = transaction;
  headers.signature = signature(headers, body, config.secret);
  headers["Content-Type"] = "application/json; charset=utf-8";
  // API origin is fixed; never accept an arbitrary endpoint supplied by the browser.
  const response = await fetch(`https://services.paytrail.com${path}`, {
    method,
    headers,
    ...(body ? { body } : {}),
    cache: "no-store",
    signal: AbortSignal.timeout(20000),
    redirect: "error",
  });
  const raw = await response.text();
  const signedHeaders = Object.fromEntries(response.headers.entries());
  if (
    !verifySignature(
      signedHeaders,
      raw,
      config.secret,
      response.headers.get("signature") ?? "",
    )
  )
    throw new Error("Paytrail-vastauksen allekirjoitus ei kelpaa.");
  if (
    signedHeaders["checkout-account"] &&
    signedHeaders["checkout-account"] !== config.merchant
  )
    throw new Error("Paytrail-kauppias ei vastaa asetuksia.");
  if (!response.ok)
    throw new Error(`Paytrail hylkäsi pyynnön (${response.status}).`);
  return {
    data: JSON.parse(raw) as T,
    requestId: response.headers.get("request-id"),
  };
}
export function safePaytrailHref(href: string, transaction?: string) {
  const url = new URL(href);
  if (
    url.protocol !== "https:" ||
    !["services.paytrail.com", "pay.paytrail.com"].includes(url.hostname) ||
    url.port ||
    !url.pathname.startsWith("/pay/") ||
    (transaction !== undefined && url.pathname !== `/pay/${transaction}`) ||
    url.username ||
    url.password
  )
    throw new Error("Virheellinen Paytrail-maksuosoite.");
  return url.href;
}
