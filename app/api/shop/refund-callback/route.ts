import { refundCallback } from "@/lib/shop/refunds";
import { shopError } from "@/lib/shop/server";
export const runtime = "nodejs";
export async function GET(request: Request) {
  try {
    await refundCallback(request);
    return new Response("OK");
  } catch (error) {
    return shopError(error, 503);
  }
}
