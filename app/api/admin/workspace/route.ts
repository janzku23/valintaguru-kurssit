import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/adminAccess";
import { courses } from "@/data/courses";
import { validateRecord } from "@/lib/adminWorkspaceValidation";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const ctx = await requireAdminApi();
  if ("error" in ctx) return ctx.error;
  if (request.headers.get("origin") && request.headers.get("origin") !== new URL(request.url).origin) return NextResponse.json({ error: "Virheellinen pyynnön alkuperä." }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({ error: "JSON vaaditaan." }, { status: 415 });
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 12000) throw new Error();
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
  } catch { return NextResponse.json({ error: "Virheellinen pyyntö." }, { status: 400 }); }
  let record;
  try { record = validateRecord(body, courses.map(c => c.id)); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Tarkista tiedot." }, { status: 400 }); }
  const table = ctx.admin.from("admin_workspace_records");
  // Per-record optimistic concurrency prevents an old browser tab overwriting a colleague.
  const revision = typeof body.revision === "string" ? body.revision : null;
  if (body.action === "delete") {
    if (!revision || !["todo", "event", "link", "follower"].includes(record.kind)) return NextResponse.json({ error: "Poisto ei ole sallittu." }, { status: 400 });
    const { data, error } = await table.delete().eq("kind", record.kind).eq("key", record.key).eq("updated_at", revision).select("key");
    if (error) return NextResponse.json({ error: "Poisto epäonnistui." }, { status: 500 });
    if (!data.length) return NextResponse.json({ error: "Tieto muuttui toisessa näkymässä. Päivitä sivu." }, { status: 409 });
    return NextResponse.json({ success: true });
  }
  const row = { ...record, updated_at: new Date().toISOString() };
  const result = revision
    ? await table.update(row).eq("kind", record.kind).eq("key", record.key).eq("updated_at", revision).select().maybeSingle()
    : await table.insert(row).select().single();
  if (result.error?.code === "23505" || !result.error && !result.data) return NextResponse.json({ error: "Tieto muuttui toisessa näkymässä. Päivitä sivu." }, { status: 409 });
  if (result.error) return NextResponse.json({ error: "Tallennus epäonnistui. Tarkista admin-työtilan tietokantamigraatio." }, { status: 503 });
  return NextResponse.json({ record: result.data });
}
