import {
  bodyOf,
  db,
  guardRequest,
  ownOrder,
  rpc,
  shopError,
} from "@/lib/shop/server";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    await guardRequest(request, "cancel", 6);
    const body = await bodyOf(request);
    if (
      body.confirm !== true ||
      typeof body.name !== "string" ||
      body.name.trim().length < 2 ||
      body.name.length > 160
    )
      throw new Error("Virheellinen ostoskori tai asiakastieto.");
    let id: string | null = null;
    if (typeof body.orderId === "string" && body.orderId) {
      id = (await ownOrder(body.orderId)).id;
    } else if (
      typeof body.email === "string" &&
      /^\d{1,16}$/.test(String(body.number))
    ) {
      const { data, error } = await db()
        .from("shop_orders")
        .select("id")
        .eq("number", body.number)
        .eq("email", body.email.trim().toLowerCase())
        .not("paid_at", "is", null)
        .maybeSingle();
      if (error) throw new Error("cancel_query_failed");
      id = data?.id ?? null;
    } else throw new Error("Virheellinen ostoskori tai asiakastieto.");
    if (id) await rpc("shop_cancel", { p_order: id, p_name: body.name.trim() });
    // Deliberately identical for unknown order/email. Receipt goes only to the stored customer address.
    return Response.json({ success: true });
  } catch (error) {
    return shopError(error);
  }
}
