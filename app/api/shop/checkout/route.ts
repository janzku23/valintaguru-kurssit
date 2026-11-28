import { createHmac } from "node:crypto";
import {
  checkDatabaseEnvironment,
  bodyOf,
  createPayment,
  guardRequest,
  orderById,
  orderForCheckout,
  rpc,
  shopError,
  shopSession,
  tokenHash,
} from "@/lib/shop/server";
import { productIds, uuid } from "@/lib/shop/core";
import { shopConfig } from "@/lib/shop/config";
import {
  checkoutConsent,
  checkoutConsentVersion,
} from "@/lib/shop/checkout-consent";
import type { Quote } from "@/lib/shop/types";
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
    const products = productIds(body.productIds);
    const code = typeof body.code === "string" ? body.code.slice(0, 40) : "";
    const key = createHmac("sha256", config.internalSecret)
      .update(`${token}:${body.key}`)
      .digest("hex");
    const accessHash = tokenHash(token);
    let order = await orderForCheckout(key, accessHash);
    if (!order) {
      try {
        const consentTexts: string[] = [];
        if (body.consentVersion === checkoutConsentVersion) {
          const quote = await rpc<Quote>("shop_quote", {
            p_products: products,
            p_code: code,
          });
          consentTexts.push(checkoutConsent.terms);
          if (quote.items.some((item) => item.legal_kind === "digital_content")) {
            if (body.withdrawalAck !== true)
              throw new Error("Virheellinen ostoskori tai suostumus.");
            consentTexts.push(checkoutConsent.digital);
          }
          if (quote.items.some((item) => item.legal_kind === "service")) {
            if (body.serviceAck !== true)
              throw new Error("Virheellinen ostoskori tai suostumus.");
          }
        }
        const id = await rpc<string>("shop_checkout", {
          p_products: products,
          p_code: code,
          p_email: email,
          p_name: name,
          p_hash: accessHash,
          p_key: key,
          p_mode: config.mode,
          p_merchant: config.merchant,
          p_terms: consentTexts.length
            ? { ...SHOP_TERMS, checkout_consents: consentTexts }
            : SHOP_TERMS,
          p_immediate: true,
          p_ack: body.withdrawalAck === true,
          p_expected: body.expectedAmount,
        });
        order = await orderById(id);
      } catch (error) {
        // Another request may have reserved the last coupon use after our lookup.
        order = await orderForCheckout(key, accessHash);
        if (!order) throw error;
      }
    }
    const id = order.id;
    if (order.status !== "unpaid")
      return Response.json({ orderId: id, href: null, completed: true });
    // Order stays queryable when the provider request has an ambiguous outcome.
    try {
      return Response.json({
        orderId: id,
        href: await createPayment(order),
      });
    } catch {
      return Response.json({ orderId: id, href: null }, { status: 202 });
    }
  } catch (error) {
    return shopError(error);
  }
}
