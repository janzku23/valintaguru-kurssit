import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/adminAccess";
import { businessUsers } from "@/lib/adminDashboardData";
import { portfolio, helsinkiDay } from "@/lib/adminDashboardModel";
import { instagramFollowers } from "@/lib/adminDashboardIntegrations";

export async function POST(request: Request) {
  const ctx = await requireAdminApi();
  if ("error" in ctx) return ctx.error;
  if (request.headers.get("origin") !== new URL(request.url).origin) return NextResponse.json({ error: "Virheellinen pyynnön alkuperä." }, { status: 403 });
  const mode = new URL(request.url).searchParams.get("mode");
  try {
    const row = mode === "instagram"
      ? { kind: "follower", key: helsinkiDay(), data: { count: await instagramFollowers(), source: "instagram" } }
      : mode === "portfolio"
        ? { kind: "portfolio", key: helsinkiDay(), data: portfolio((await businessUsers()).users) }
        : null;
    if (!row) return NextResponse.json({ error: "Tuntematon synkronointi." }, { status: 400 });
    const { error } = await ctx.admin.from("admin_workspace_records").upsert({ ...row, updated_at: new Date().toISOString() }, { onConflict: "kind,key" });
    if (error) throw new Error("Tallennus epäonnistui. Tarkista tietokantamigraatio.");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Päivitys epäonnistui." }, { status: 503 });
  }
}
