import { shopAdmin, validateProduct, validateDiscount } from "@/lib/shop/admin";
import {
  bodyOf,
  db,
  guardRequest,
  itemsForOrder,
  orderById,
  reconcilePayment,
  rpc,
  shopError,
} from "@/lib/shop/server";
import { uuid } from "@/lib/shop/core";
import { startRefund } from "@/lib/shop/refunds";
import { processJobs } from "@/lib/shop/jobs";
import type { Payment } from "@/lib/shop/types";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function GET(request: Request) {
  const ctx = await shopAdmin();
  if ("error" in ctx) return ctx.error;
  try {
    const params = new URL(request.url).searchParams,
      id = params.get("order");
    if (id) {
      const order = await orderById(id);
      const results = await Promise.all([
        itemsForOrder(id),
        ctx.admin
          .from("shop_payments")
          .select("*")
          .eq("order_id", id)
          .order("created_at"),
        ctx.admin
          .from("shop_refunds")
          .select("*")
          .eq("order_id", id)
          .order("created_at"),
        ctx.admin
          .from("shop_jobs")
          .select("id,kind,status,attempts,last_error,available_at")
          .eq("order_id", id),
        ctx.admin
          .from("shop_events")
          .select("kind,reference_id,created_at")
          .eq("order_id", id)
          .order("created_at", { ascending: false })
          .limit(100),
        order.user_id
          ? ctx.admin
              .from("student_courses")
              .select("course_id,status,shop_manual_access,shop_access_until")
              .eq("user_id", order.user_id)
          : Promise.resolve({ data: [], error: null }),
      ]);
      for (const r of results.slice(1))
        if ("error" in r && r.error) throw new Error("detail_failed");
      const [items, payments, refunds, jobs, events, rights] = results;
      return Response.json(
        {
          order: { ...order, access_hash: undefined, request_key: undefined },
          items,
          payments: (payments as { data: unknown }).data,
          refunds: (refunds as { data: unknown }).data,
          jobs: (jobs as { data: unknown }).data,
          events: (events as { data: unknown }).data,
          rights: (rights as { data: unknown }).data,
        },
        { headers: { "Cache-Control": "no-store" } },
      );
    }
    const mode = params.get("mode") === "production" ? "production" : "test",
      page = Math.max(0, Math.min(100000, Number(params.get("page")) || 0));
    let ordersQuery = ctx.admin
      .from("shop_orders")
      .select(
        "id,number,email,customer_name,mode,status,amount_cents,fulfillment_status,created_at,paid_at,cancellation_requested_at",
        { count: "exact" },
      )
      .eq("mode", mode)
      .order("created_at", { ascending: false })
      .range(page * 30, page * 30 + 29);
    const email = params.get("email");
    if (email)
      ordersQuery = ordersQuery.eq("email", email.trim().toLowerCase());
    const [products, discounts, orders, stats] = await Promise.all([
      ctx.admin
        .from("shop_products")
        .select("*")
        .order("sort_order")
        .order("id"),
      ctx.admin
        .from("shop_discounts")
        .select("*")
        .order("created_at", { ascending: false }),
      ordersQuery,
      rpc("shop_sales_stats", { p_mode: mode }),
    ]);
    if (products.error || discounts.error || orders.error)
      throw new Error("admin_query_failed");
    return Response.json(
      {
        products: products.data,
        discounts: discounts.data,
        orders: orders.data,
        total: orders.count,
        stats,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return shopError(error, 503);
  }
}
export async function POST(request: Request) {
  const ctx = await shopAdmin();
  if ("error" in ctx) return ctx.error;
  try {
    await guardRequest(request, "admin-shop", 120);
    const body = await bodyOf(request);
    if (body.action === "product" || body.action === "discount") {
      const value = body.value;
      if (!value || typeof value !== "object" || Array.isArray(value))
        throw new Error("invalid_body");
      const input = value as Record<string, unknown>,
        isProduct = body.action === "product";
      const row = isProduct ? validateProduct(input) : validateDiscount(input);
      if (input.id !== undefined && !uuid(input.id))
        throw new Error("invalid_id");
      const table = ctx.admin.from(
        isProduct ? "shop_products" : "shop_discounts",
      );
      const result = input.id
        ? await table.update(row).eq("id", input.id).select("id").single()
        : await table.insert(row).select("id").single();
      if (result.error) throw new Error("save_failed");
      return Response.json({ success: true });
    }
    if (body.action === "refund") {
      if (
        !uuid(body.orderId) ||
        !uuid(body.key) ||
        !Number.isSafeInteger(body.amount) ||
        !Array.isArray(body.revoke) ||
        !body.revoke.every(uuid) ||
        body.confirm !== true
      )
        throw new Error("invalid_refund");
      return Response.json(
        await startRefund(
          body.orderId,
          body.amount as number,
          body.revoke,
          ctx.user.id,
          body.key,
        ),
      );
    }
    if (body.action === "process") {
      if (!uuid(body.orderId)) throw new Error("invalid_order");
      const { error } = await ctx.admin
        .from("shop_jobs")
        .update({ available_at: new Date().toISOString() })
        .eq("order_id", body.orderId)
        .eq("status", "queued");
      if (error) throw new Error("queue_failed");
      return Response.json(await processJobs(body.orderId, 2));
    }
    if (body.action === "reconcile") {
      if (!uuid(body.paymentId) || !uuid(body.transactionId))
        throw new Error("invalid_payment");
      const { data, error } = await ctx.admin
        .from("shop_payments")
        .select("*")
        .eq("id", body.paymentId)
        .single();
      if (error || !data) throw new Error("payment_missing");
      await reconcilePayment(data as Payment, body.transactionId);
      return Response.json({ success: true });
    }
    // Refunds with ambiguous HTTP outcomes cannot be marked successful manually; require a signed provider callback.
    if (body.action === "customer") {
      if (typeof body.email !== "string" || body.email.length > 254)
        throw new Error("invalid_email");
      const id = await rpc<string | null>("shop_find_user", {
        p_email: body.email.trim().toLowerCase(),
      });
      const { data, error } = await db()
        .from("shop_orders")
        .select("id,number,amount_cents,status,created_at")
        .eq("email", body.email.trim().toLowerCase())
        .order("created_at", { ascending: false })
        .limit(100);
      if (error) throw new Error("customer_failed");
      return Response.json({ userId: id, orders: data });
    }
    throw new Error("unknown_action");
  } catch (error) {
    return shopError(error);
  }
}
