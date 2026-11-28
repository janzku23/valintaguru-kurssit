import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";
import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";
import { getGuruGameForCourse, getGuruProgressCourseIds, getGuruProgressCoursesForCourse } from "@/lib/gurupath/progressCourses";
import { getGuruPathWithImports } from "@/lib/gurupath/questionBank";
import { eventMatchesQuestion } from "@/lib/gurupath/serverGame";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const supabase = await createSupabaseServerUser();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 });
  const courseId = new URL(request.url).searchParams.get("courseId") ?? "";
  const access = await getGuruGameAccessState();
  const gameId = getGuruGameForCourse(courseId);
  if (!gameId || !getGuruProgressCoursesForCourse(courseId, access).length) {
    return NextResponse.json({ error: "Kurssioikeutta ei löytynyt." }, { status: 403 });
  }
  const path = await getGuruPathWithImports(gameId);
  const courseIds = getGuruProgressCourseIds(access);
  // Entitlement is checked above; always scope privileged history reads to this user.
  const { data, error } = await createSupabaseAdmin().from("guru_game_events")
    .select("source,source_id,created_at")
    .eq("user_id", user.id)
    .in("course_id", courseIds)
    .in("source", ["path-node", "vault"])
    .order("created_at", { ascending: true });
  if (error) return NextResponse.json({ error: "Edistymisen lukeminen epäonnistui." }, { status: 500 });
  return NextResponse.json({
    completed: (data ?? []).filter((row) =>
      (row.source === "path-node" || row.source === "vault") && typeof row.source_id === "string" &&
      path.levels.some((node) => eventMatchesQuestion(row.source_id, node.questionId)),
    ).map((row) => ({ source: row.source, sourceId: row.source_id })),
  }, { headers: { "Cache-Control": "no-store" } });
}
