import "server-only";
import {
  createHash,
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";
import { cookies } from "next/headers";
import { createAdminClient } from "@/utils/supabase/admin";
import { assertPaymentMatch, signedQuery, uuid, verifySignature } from "./core";
import { shopConfig, shopRequestConfig } from "./config";
import {
  paytrail,
  safePaytrailHref,
  type CreatedPayment,
  type PaymentInfo,
} from "./paytrail";
import type { Order, OrderItem, Payment, Product, PublicOrder } from "./types";

export const db = createAdminClient;
export async function rpc<T>(
  name: string,
  args: Record<string, unknown> = {},
): Promise<T> {
  const { data, error } = await db().rpc(name, args);
  if (error) throw new Error(error.message);
  return data as T;
}
export async function orderById(id: string) {
  if (!uuid(id)) throw new Error("Tilausta ei löytynyt.");
  const { data, error } = await db()
    .from("shop_orders")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) throw new Error("Tilausta ei löytynyt.");
  return data as Order;
}
export async function itemsForOrder(id: string) {
  const { data, error } = await db()
    .from("shop_order_items")
    .select("*")
    .eq("order_id", id)
    .order("id");
  if (error) throw new Error("Tilausrivejä ei voitu hakea.");
  return data as OrderItem[];
}
export async function catalog(includeHidden = false) {
  let query = db()
    .from("shop_products")
    .select("*")
    .eq("published", true)
    .eq("archived", false)
    .eq("reviewed", true)
    .order("sort_order")
    .order("id");
  if (!includeHidden) query = query.eq("visible", true);
  const { data, error } = await query;
  if (error) throw new Error("Kaupan tuotteita ei voitu hakea.");
  return data as Product[];
}
export function tokenHash(token: string) {
  return createHash("sha256").update(token).digest("hex");
}
export async function shopSession(create = false) {
  const jar = await cookies();
  let token = jar.get("vg_shop_session")?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) {
    if (!create)
      throw new Error(
        "Tilausta ei löytynyt tässä selaimessa. Kirjaudu tai ota yhteyttä asiakaspalveluun.",
      );
    token = randomBytes(32).toString("hex");
    jar.set("vg_shop_session", token, {
      httpOnly: true,
      secure: shopRequestConfig().site.startsWith("https:"),
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
  return token;
}
export async function ownOrder(id: string) {
  const session = await shopSession();
  const order = await orderById(id);
  const expected = tokenHash(session);
  if (
    expected.length !== order.access_hash.length ||
    !timingSafeEqual(Buffer.from(expected), Buffer.from(order.access_hash))
  )
    throw new Error("Tilausta ei löytynyt.");
  return order;
}
export async function checkDatabaseEnvironment() {
  const c = shopConfig();
  if (
    !(await rpc<boolean>("shop_check_environment", {
      p_mode: c.mode,
      p_merchant: c.merchant,
      p_ref: process.env.SHOP_SUPABASE_PROJECT_REF,
    }))
  )
    throw new Error("Kaupan tietokantaympäristöä ei ole vahvistettu.");
}
export async function assertEnvironment(order: Order) {
  await checkDatabaseEnvironment();
  const config = shopConfig();
  if (order.mode !== config.mode || order.merchant_id !== config.merchant)
    throw new Error("Tilaus kuuluu eri maksuympäristöön.");
}
export async function guardRequest(
  request: Request,
  scope: string,
  limit = 20,
) {
  const config = shopRequestConfig();
  if (request.headers.get("origin") !== config.site)
    throw new Error("Virheellinen pyynnön alkuperä.");
  if (Number(request.headers.get("content-length") ?? 0) > 16384)
    throw new Error("Pyyntö on liian suuri.");
  const ip =
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "local";
  const key = createHmac("sha256", config.internalSecret)
    .update(`${scope}:${ip}`)
    .digest("hex");
  if (
    !(await rpc<boolean>("shop_rate", {
      p_key: key,
      p_limit: limit,
      p_seconds: 600,
    }))
  )
    throw new Error("Liian monta pyyntöä. Odota hetki ennen uutta yritystä.");
}
export async function bodyOf(
  request: Request,
): Promise<Record<string, unknown>> {
  const text = await request.text();
  if (text.length > 16384) throw new Error("Pyyntö on liian suuri.");
  const body: unknown = JSON.parse(text);
  if (!body || typeof body !== "object" || Array.isArray(body))
    throw new Error("Virheellinen pyyntö.");
  return body as Record<string, unknown>;
}
export async function createPayment(order: Order) {
  await assertEnvironment(order);
  const result = await rpc<{ payment: Payment; created: boolean }>(
    "shop_start_payment",
    { p_order: order.id },
  );
  const payment = result.payment;
  if (!result.created) {
    if (payment.href && ["new", "pending", "delayed"].includes(payment.status))
      return safePaytrailHref(payment.href, payment.transaction_id ?? undefined);
    throw new Error(
      "Maksua käsitellään. Tarkista tilauksen tila ennen uutta maksuyritystä.",
    );
  }
  const config = shopConfig(),
    items = await itemsForOrder(order.id);
  const back = `${config.site}/api/shop/return`;
  const callback = `${config.site}/api/shop/callback`;
  try {
    const { data, requestId } = await paytrail<CreatedPayment>(
      "POST",
      "/payments",
      {
        stamp: payment.stamp,
        reference: String(order.number),
        amount: order.amount_cents,
        currency: order.currency,
        language: "FI",
        customer: { email: order.email },
        items: items.map((item) => ({
          unitPrice: item.total_cents,
          units: 1,
          vatPercentage: item.vat_percentage,
          productCode: item.product_id,
          description: item.name.slice(0, 100),
          stamp: item.id,
        })),
        redirectUrls: { success: back, cancel: back },
        callbackUrls: { success: callback, cancel: callback },
      },
    );
    // Create returns a settlement reference. The signed GET verifies the order reference.
    if (!uuid(data.transactionId))
      throw new Error("Virheellinen maksuvastaus.");
    const href = safePaytrailHref(data.href, data.transactionId);
    const { error } = await db()
      .from("shop_payments")
      .update({
        transaction_id: data.transactionId,
        href,
        request_id: requestId,
        status: "new",
        updated_at: new Date().toISOString(),
      })
      .eq("id", payment.id)
      .in("status", ["creating", "unknown"]);
    if (error) throw new Error("Maksun tallennus epäonnistui.");
    return href;
  } catch (error) {
    // An HTTP timeout does not prove that the payment was not created. Never blindly POST again.
    await db()
      .from("shop_payments")
      .update({ status: "unknown", updated_at: new Date().toISOString() })
      .eq("id", payment.id)
      .eq("status", "creating");
    throw error;
  }
}
export async function reconcilePayment(
  payment: Payment,
  transaction = payment.transaction_id,
) {
  if (!transaction || !uuid(transaction))
    throw new Error("Maksutunniste odottaa vahvistusta.");
  const order = await orderById(payment.order_id);
  await assertEnvironment(order);
  const { data, requestId } = await paytrail<PaymentInfo>(
    "GET",
    `/payments/${transaction}`,
    undefined,
    transaction,
  );
  assertPaymentMatch(data, {
    transactionId: transaction,
    amount: order.amount_cents,
    currency: order.currency,
    stamp: payment.stamp,
    reference: String(order.number),
  });
  await rpc("shop_record_payment", {
    p_payment: payment.id,
    p_transaction: transaction,
    p_status: data.status,
    p_amount: data.amount,
    p_currency: data.currency,
    p_stamp: data.stamp,
    p_reference: data.reference,
    p_provider: data.provider ?? null,
    p_request: requestId,
  });
  if (data.status === "new" && data.href && !payment.href) {
    const href = safePaytrailHref(data.href, transaction);
    const { error } = await db()
      .from("shop_payments")
      .update({ href })
      .eq("id", payment.id)
      .eq("transaction_id", transaction)
      .eq("status", "new");
    if (error) throw new Error("Maksulinkin tallennus epäonnistui.");
  }
  return { order, info: data };
}
export async function verifyCallback(request: Request) {
  const fields = signedQuery(new URL(request.url)),
    config = shopConfig();
  if (
    !verifySignature(fields, "", config.secret, fields.signature ?? "") ||
    fields["checkout-account"] !== config.merchant
  )
    throw new Error("Virheellinen maksun allekirjoitus.");
  return fields;
}
export async function validatedCallbackPayment(request: Request) {
  const fields = await verifyCallback(request);
  const stamp = fields["checkout-stamp"],
    transaction = fields["checkout-transaction-id"];
  if (!stamp || !uuid(transaction)) throw new Error("Maksutunniste puuttuu.");
  const { data, error } = await db()
    .from("shop_payments")
    .select("*")
    .eq("stamp", stamp)
    .single();
  if (error || !data) throw new Error("Maksua ei löytynyt.");
  const payment = data as Payment,
    order = await orderById(payment.order_id);
  if (
    fields["checkout-amount"] !== String(order.amount_cents) ||
    !["ok", "fail", "pending", "delayed"].includes(fields["checkout-status"])
  )
    throw new Error("Callback ei vastaa tilausta.");
  return { payment, order, transaction };
}
export async function paymentCallback(request: Request) {
  const { payment, order, transaction } =
    await validatedCallbackPayment(request);
  // GET is authoritative even for a replayed, valid but outdated browser redirect.
  await reconcilePayment(payment, transaction);
  return order.id;
}
export async function publicOrder(order: Order): Promise<PublicOrder> {
  const items = await itemsForOrder(order.id);
  const { data: payment, error } = await db()
    .from("shop_payments")
    .select("status")
    .eq("order_id", order.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw new Error("Maksutietoa ei saatu.");
  const { data: email } = await db()
    .from("shop_jobs")
    .select("status")
    .eq("dedupe_key", `access:${order.id}`)
    .maybeSingle();
  return {
    id: order.id,
    number: order.number,
    status: order.status,
    amount_cents: order.amount_cents,
    fulfillment_status: order.fulfillment_status,
    payment_status: payment?.status ?? null,
    items: items.map(({ name, total_cents, access_days }) => ({
      name,
      total_cents,
      access_days,
    })),
    access_email_sent: email?.status === "done",
    cancellation_requested: !!order.cancellation_requested_at,
    mode: order.mode,
  };
}
// Only safe, actionable messages are returned to visitors. Provider/DB errors stay out of responses/logs.
export function shopError(error: unknown, status = 400) {
  const message = error instanceof Error ? error.message : "";
  const safe =
    /^(Virheellinen ostoskori|Sama kurssioikeus|Tuote ei ole|Tuotetta ei löytynyt|Alennuskoodi|Alennuskoodin|Koodi ei koske|Hinta muuttui|Liian monta|Maksua käsitellään|Tilausta ei löytynyt)/.test(
      message,
    );
  console.error("shop_request_failed", {
    category: safe ? "validation" : "service",
    status,
  });
  return Response.json(
    {
      error: safe
        ? message
        : "Pyyntöä ei voitu käsitellä. Tarkista tilauksen tila tai yritä myöhemmin uudelleen.",
    },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
