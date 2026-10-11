import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { authorizeGuruNode, GURU_WRONG_COOLDOWN_SECONDS } from "@/lib/gurupath/serverGame";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const supabase = await createSupabaseServerUser();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 });
  const url = new URL(request.url);
  const courseId = url.searchParams.get("courseId") ?? "";
  const nodeId = url.searchParams.get("nodeId") ?? "";
  if (!(await authorizeGuruNode(courseId, nodeId))) {
    return NextResponse.json({ error: "Ei käyttöoikeutta." }, { status: 403 });
  }
  const { data, error } = await supabase.from("guru_game_penalties")
    .select("created_at")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .eq("node_id", nodeId)
    .order("created_at", { ascending: false })
    .limit(1).maybeSingle();
  if (error) return NextResponse.json({ error: "Jäähyn tarkistus epäonnistui." }, { status: 500 });
  const elapsed = data?.created_at
    ? Math.floor((Date.now() - new Date(data.created_at).getTime()) / 1000) : GURU_WRONG_COOLDOWN_SECONDS;
  const cooldownSeconds = Math.max(0, GURU_WRONG_COOLDOWN_SECONDS - elapsed);
  return NextResponse.json({ active: cooldownSeconds > 0, cooldownSeconds },
    { headers: { "Cache-Control": "no-store" } });
}

export async function POST() {
  return NextResponse.json({ error: "Väärät vastaukset käsitellään vain tarkistetun vastausrajapinnan kautta." },
    { status: 410 });
}
