import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const supabase = await createSupabaseServerUser();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 });
  const courseId = new URL(request.url).searchParams.get("courseId") ?? "";
  const access = await getGuruGameAccessState();
  const permitted = [access.oikis.accessCourseId, access.valintakoeG.accessCourseId]
    .some((value) => value !== null && value === courseId);
  if (!permitted) return NextResponse.json({ error: "Kurssioikeutta ei löytynyt." }, { status: 403 });
  const { data, error } = await supabase.from("guru_game_events")
    .select("source,source_id,created_at")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .in("source", ["path-node", "vault"])
    .order("created_at", { ascending: true });
  if (error) return NextResponse.json({ error: "Edistymisen lukeminen epäonnistui." }, { status: 500 });
  return NextResponse.json({
    completed: (data ?? []).filter((row) =>
      (row.source === "path-node" || row.source === "vault") && typeof row.source_id === "string",
    ).map((row) => ({ source: row.source, sourceId: row.source_id })),
  }, { headers: { "Cache-Control": "no-store" } });
}
