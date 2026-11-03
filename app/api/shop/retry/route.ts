import {
  bodyOf,
  createPayment,
  guardRequest,
  ownOrder,
  shopError,
} from "@/lib/shop/server";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    await guardRequest(request, "retry", 6);
    const body = await bodyOf(request);
    if (typeof body.orderId !== "string")
      throw new Error("Tilausta ei löytynyt.");
    return Response.json({
      href: await createPayment(await ownOrder(body.orderId)),
    });
  } catch (error) {
    return shopError(error);
  }
}
