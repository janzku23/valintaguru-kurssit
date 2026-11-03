import { createHash, timingSafeEqual } from "node:crypto";
import { processJobs, reconcileOutstanding } from "@/lib/shop/jobs";
import { rpc } from "@/lib/shop/server";
export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const provided = request.headers.get("authorization") ?? "";
  if (
    !secret ||
    !timingSafeEqual(
      createHash("sha256").update(provided).digest(),
      createHash("sha256").update(`Bearer ${secret}`).digest(),
    )
  )
    return new Response("Unauthorized", { status: 401 });
  try {
    // Limit work per invocation; durable leases allow multiple scheduler invocations safely.
    const result = await processJobs(undefined, 2);
    const reconciled = await reconcileOutstanding(1);
    await rpc("shop_maintenance");
    return Response.json(
      { ...result, reconciled },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json({ error: "worker_failed" }, { status: 503 });
  }
}
