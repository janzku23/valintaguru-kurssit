import "server-only";
import {
  db,
  itemsForOrder,
  orderById,
  reconcilePayment,
  rpc,
  assertEnvironment,
} from "./server";
import { shopConfig } from "./config";
import { sendOrderEmail } from "./email";
import type { Job, Payment } from "./types";

async function fulfill(id: string) {
  const order = await orderById(id);
  await assertEnvironment(order);
  if (order.status === "unpaid") throw new Error("payment_not_verified");
  let userId = await rpc<string | null>("shop_find_user", {
    p_email: order.email,
  });
  let isNew = false;
  if (!userId) {
    const { data, error } = await db().auth.admin.createUser({
      email: order.email,
      email_confirm: false,
      user_metadata: { created_by: "paytrail", account_type: "student" },
    });
    if (error || !data.user) {
      // Concurrent orders/admin provisioning may have created the same account.
      userId = await rpc<string | null>("shop_find_user", {
        p_email: order.email,
      });
      if (!userId) throw new Error("user_creation_failed");
    } else {
      userId = data.user.id;
      isNew = true;
    }
  }
  await rpc("shop_fulfill", {
    p_order: order.id,
    p_user: userId,
    p_new: isNew,
  });
}
export async function processJobs(orderId?: string, limit = 3) {
  let completed = 0,
    failed = 0;
  for (let i = 0; i < limit; i++) {
    const jobs = await rpc<Job[]>("shop_claim_job", {
      p_order: orderId ?? null,
    });
    const job = jobs[0];
    if (!job) break;
    try {
      const order = await orderById(job.order_id);
      await assertEnvironment(order);
      if (job.kind === "fulfill") await fulfill(order.id);
      else if (job.kind === "access") {
        if (order.fulfillment_status !== "delivered")
          throw new Error("not_delivered");
        if (!order.user_id) throw new Error("missing_order_user");
        const admin = db().auth.admin;
        const { data, error } = await admin.getUserById(order.user_id);
        const user = data?.user;
        if (error || !user) throw new Error("order_user_lookup_failed");
        // Existing confirmed accounts already have access through their usual login.
        if (!user.email_confirmed_at) {
          if (user.email?.toLowerCase() !== order.email.toLowerCase())
            throw new Error("order_user_email_mismatch");
          const invite = await admin.inviteUserByEmail(order.email, {
            redirectTo: `${shopConfig().site}/aseta-salasana`,
          });
          if (invite.error || invite.data?.user?.id !== user.id)
            throw new Error("auth_invite_failed");
        }
      } else {
        // Skip stale pending notifications if the payment has since completed.
        if (job.kind !== "pending" || order.status === "unpaid")
          await sendOrderEmail(job, order, await itemsForOrder(order.id));
      }
      const { error } = await db()
        .from("shop_jobs")
        .update({ status: "done", lease_until: null, last_error: null })
        .eq("id", job.id)
        .eq("lease_token", job.lease_token);
      if (error) throw new Error("job_commit_failed");
      completed++;
    } catch {
      failed++;
      const { error } = await db()
        .from("shop_jobs")
        .update({
          status: "queued",
          lease_until: null,
          last_error: `${job.kind}_failed`,
          available_at: new Date(
            Date.now() +
              Math.min(3600000, 30000 * 2 ** Math.min(job.attempts, 7)),
          ).toISOString(),
        })
        .eq("id", job.id)
        .eq("lease_token", job.lease_token);
      console.error("shop_job_failed", {
        job: job.id,
        kind: job.kind,
        attempts: job.attempts,
        persisted: !error,
      });
    }
  }
  return { completed, failed };
}
export async function reconcileOutstanding(limit = 10) {
  const { data, error } = await db()
    .from("shop_payments")
    .select("*")
    .in("status", ["new", "pending", "delayed", "unknown"])
    .not("transaction_id", "is", null)
    .lt("updated_at", new Date(Date.now() - 60000).toISOString())
    .order("updated_at")
    .limit(limit);
  if (error) throw new Error("reconciliation_query_failed");
  let reconciled = 0;
  for (const payment of data as Payment[]) {
    try {
      await reconcilePayment(payment);
      reconciled++;
    } catch {
      await db()
        .from("shop_payments")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", payment.id);
      console.error("shop_reconcile_failed", { payment: payment.id });
    }
  }
  return reconciled;
}
