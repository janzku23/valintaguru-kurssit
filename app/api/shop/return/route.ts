import { after } from "next/server";
import { processJobs } from "@/lib/shop/jobs";
import { NextResponse } from "next/server";
import {
  validatedCallbackPayment,
  reconcilePayment,
  shopError,
} from "@/lib/shop/server";
import { shopConfig } from "@/lib/shop/config";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function GET(request: Request) {
  try {
    const { payment, order, transaction } =
      await validatedCallbackPayment(request);
    const id = order.id;
    // A transient provider outage still returns the customer to a truthful order status page.
    try {
      await reconcilePayment(payment, transaction);
    } catch {
      console.error("shop_return_reconciliation_pending", {
        payment: payment.id,
      });
    }
    after(async () => {
      await processJobs(id, 3);
    });
    const response = NextResponse.redirect(
      new URL(`/kauppa/tilaus?order=${id}`, shopConfig().site),
      303,
    );
    response.headers.set("Cache-Control", "no-store");
    response.headers.set("Referrer-Policy", "no-referrer");
    return response;
  } catch (error) {
    return shopError(error, 503);
  }
}
