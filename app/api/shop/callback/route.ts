import { after } from "next/server";
import { processJobs } from "@/lib/shop/jobs";
import { paymentCallback, shopError } from "@/lib/shop/server";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function GET(request: Request) {
  try {
    const id = await paymentCallback(request);
    after(async () => {
      await processJobs(id, 3);
    });
    return new Response("OK", { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return shopError(error, 503);
  }
}
