import {
  bodyOf,
  guardRequest,
  rpc,
  shopError,
  shopSession,
} from "@/lib/shop/server";
import { productIds } from "@/lib/shop/core";
import type { Quote } from "@/lib/shop/types";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    await guardRequest(request, "quote", 60);
    await shopSession(true);
    const body = await bodyOf(request);
    const data = await rpc<Quote>("shop_quote", {
      p_products: productIds(body.productIds),
      p_code: typeof body.code === "string" ? body.code.slice(0, 40) : "",
    });
    return Response.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return shopError(error);
  }
}
