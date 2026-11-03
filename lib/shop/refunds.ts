import "server-only";
import {
  db,
  orderById,
  rpc,
  assertEnvironment,
  verifyCallback,
} from "./server";
import { paytrail } from "./paytrail";
import { shopConfig } from "./config";
import { uuid } from "./core";
import type { Payment, Refund } from "./types";
export async function startRefund(
  orderId: string,
  amount: number,
  revoke: string[],
  adminId: string,
  id: string,
) {
  const order = await orderById(orderId);
  await assertEnvironment(order);
  const result = await rpc<{ refund: Refund; created: boolean }>(
    "shop_start_refund",
    {
      p_order: orderId,
      p_amount: amount,
      p_revoke: revoke,
      p_admin: adminId,
      p_id: id,
    },
  );
  if (!result.created) return result.refund;
  const refund = result.refund;
  const { data: payment, error } = await db()
    .from("shop_payments")
    .select("*")
    .eq("id", refund.payment_id)
    .single();
  if (error || !payment?.transaction_id) throw new Error("payment_missing");
  const tx = (payment as Payment).transaction_id!;
  const callback = `${shopConfig().site}/api/shop/refund-callback`;
  try {
    // No email fallback: its 'ok' may mean accepted, rather than a completed money transfer.
    const { data } = await paytrail<{ transactionId: string; status: string }>(
      "POST",
      `/payments/${tx}/refund`,
      {
        amount,
        refundStamp: refund.id,
        refundReference: refund.id,
        callbackUrls: { success: callback, cancel: callback },
      },
      tx,
    );
    if (!uuid(data.transactionId))
      throw new Error("refund_transaction_missing");
    await rpc("shop_record_refund", {
      p_refund: refund.id,
      p_transaction: data.transactionId,
      p_status: data.status,
    });
    return { ...refund, status: data.status };
  } catch {
    // Unknown outcome reserves the amount. An administrator must reconcile with Paytrail; no duplicate refund.
    await db()
      .from("shop_refunds")
      .update({ status: "unknown", updated_at: new Date().toISOString() })
      .eq("id", refund.id)
      .eq("status", "creating");
    throw new Error(
      "Palautuksen tila on tarkistettava Paytrailista ennen uutta yritystä.",
    );
  }
}
export async function refundCallback(request: Request) {
  const f = await verifyCallback(request),
    id = f["checkout-stamp"],
    tx = f["checkout-transaction-id"];
  if (!uuid(id) || (!uuid(tx) && f["checkout-status"] !== "fail"))
    throw new Error("refund_missing");
  const { data, error } = await db()
    .from("shop_refunds")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) throw new Error("refund_missing");
  const refund = data as Refund,
    order = await orderById(refund.order_id);
  await assertEnvironment(order);
  if (
    f["checkout-amount"] !== String(refund.amount_cents) ||
    f["checkout-reference"] !== refund.id
  )
    throw new Error("refund_mismatch");
  await rpc("shop_record_refund", {
    p_refund: id,
    p_transaction: uuid(tx) ? tx : null,
    p_status: f["checkout-status"],
  });
}
