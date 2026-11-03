import {
  bodyOf,
  db,
  guardRequest,
  ownOrder,
  publicOrder,
  reconcilePayment,
  shopError,
} from "@/lib/shop/server";
import type { Payment } from "@/lib/shop/types";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    await guardRequest(request, "status", 90);
    const body = await bodyOf(request);
    if (typeof body.orderId !== "string")
      throw new Error("Tilausta ei löytynyt.");
    let order = await ownOrder(body.orderId);
    if (body.refresh === true && order.status === "unpaid") {
      const { data, error } = await db()
        .from("shop_payments")
        .select("*")
        .eq("order_id", order.id)
        .not("transaction_id", "is", null)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw new Error("status_failed");
      if (data) {
        await reconcilePayment(data as Payment);
        order = await ownOrder(order.id);
      }
    }
    return Response.json(await publicOrder(order), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return shopError(error, 404);
  }
}
