import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";
import { authorizeGuruNode, GURU_WRONG_COOLDOWN_SECONDS } from "@/lib/gurupath/serverGame";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const supabase = await createSupabaseServerUser();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 });
  const url = new URL(request.url);
  const courseId = url.searchParams.get("courseId") ?? "";
  const nodeId = url.searchParams.get("nodeId") ?? "";
  const authorized = await authorizeGuruNode(courseId, nodeId);
  if (!authorized) {
    return NextResponse.json({ error: "Ei käyttöoikeutta." }, { status: 403 });
  }
  const { data, error } = await createSupabaseAdmin().from("guru_game_penalties")
    .select("created_at")
    .eq("user_id", user.id)
    .in("course_id", authorized.courseIds)
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
