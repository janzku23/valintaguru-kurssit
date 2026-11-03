import { shopAdmin } from "@/lib/shop/admin";
import { bodyOf, guardRequest } from "@/lib/shop/server";
import {
  activateProductionShop,
  shopSettingsStatus,
} from "@/lib/shop/readiness";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;
const headers = { "Cache-Control": "no-store" };
export async function GET() {
  const ctx = await shopAdmin();
  if ("error" in ctx) return ctx.error;
  try {
    return Response.json(await shopSettingsStatus(), { headers });
  } catch {
    return Response.json(
      { error: "Maksuasetusten tilaa ei saatu tarkistettua." },
      { status: 503, headers },
    );
  }
}
export async function POST(request: Request) {
  const ctx = await shopAdmin();
  if ("error" in ctx) return ctx.error;
  try {
    await guardRequest(request, "activate-shop", 5);
    const body = await bodyOf(request);
    if (body.action !== "activate" || body.confirm !== true)
      return Response.json(
        { error: "Vahvista tuotantokaupan aktivointi." },
        { status: 400, headers },
      );
    return Response.json(await activateProductionShop(), { headers });
  } catch {
    return Response.json(
      {
        error:
          "Aktivointi ei onnistunut. Tarkista asetukset ja Paytrail-tunnukset. Nykyistä maksuympäristöä ei korvata.",
      },
      { status: 409, headers },
    );
  }
}
