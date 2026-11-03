import { createHmac } from "node:crypto";
import {
  checkDatabaseEnvironment,
  bodyOf,
  createPayment,
  guardRequest,
  orderById,
  rpc,
  shopError,
  shopSession,
  tokenHash,
} from "@/lib/shop/server";
import { productIds, uuid } from "@/lib/shop/core";
import { shopConfig } from "@/lib/shop/config";
import { SHOP_TERMS } from "@/lib/shop/terms";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    await guardRequest(request, "checkout", 8);
    await checkDatabaseEnvironment();
    const body = await bodyOf(request),
      config = shopConfig(),
      token = await shopSession(true);
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      name.length < 2 ||
      name.length > 160 ||
      /[\r\n\u0000]/.test(name)
    )
      throw new Error("Virheellinen ostoskori tai asiakastieto.");
    if (
      body.terms !== true ||
      body.immediate !== true ||
      !uuid(body.key) ||
      !Number.isSafeInteger(body.expectedAmount)
    )
      throw new Error("Virheellinen ostoskori tai suostumus.");
    const key = createHmac("sha256", config.internalSecret)
      .update(`${token}:${body.key}`)
      .digest("hex");
    const id = await rpc<string>("shop_checkout", {
      p_products: productIds(body.productIds),
      p_code: typeof body.code === "string" ? body.code.slice(0, 40) : "",
      p_email: email,
      p_name: name,
      p_hash: tokenHash(token),
      p_key: key,
      p_mode: config.mode,
      p_merchant: config.merchant,
      p_terms: SHOP_TERMS,
      p_immediate: true,
      p_ack: body.withdrawalAck === true,
      p_expected: body.expectedAmount,
    });
    // Order stays queryable when the provider request has an ambiguous outcome.
    try {
      return Response.json({
        orderId: id,
        href: await createPayment(await orderById(id)),
      });
    } catch {
      return Response.json({ orderId: id, href: null }, { status: 202 });
    }
  } catch (error) {
    return shopError(error);
  }
}
