import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";

export const dynamic = "force-dynamic";

const COOLDOWN_SECONDS = 15;
const XP_PENALTY = 5;

export async function GET(request: Request) {
  const supabase = await createSupabaseServerUser();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Kirjautuminen vaaditaan." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);

  const courseId = searchParams.get("courseId")?.trim() ?? "";
  const nodeId = searchParams.get("nodeId")?.trim() ?? "";

  if (!courseId || !nodeId) {
    return NextResponse.json(
      { error: "courseId tai nodeId puuttuu." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("guru_game_penalties")
    .select("created_at")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .eq("node_id", nodeId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  if (!data?.created_at) {
    return NextResponse.json({
      active: false,
      cooldownSeconds: 0,
    });
  }

  const createdAtMs = new Date(data.created_at).getTime();
  const elapsedSeconds = Math.floor(
    (Date.now() - createdAtMs) / 1000
  );

  const remaining = Math.max(
    0,
    COOLDOWN_SECONDS - elapsedSeconds
  );

  return NextResponse.json({
    active: remaining > 0,
    cooldownSeconds: remaining,
  });
}

export async function POST(request: Request) {
  const userClient = await createSupabaseServerUser();

  const {
    data: { user },
  } = await userClient.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Kirjautuminen vaaditaan." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => ({}));

  const courseId =
    typeof body.courseId === "string"
      ? body.courseId.trim()
      : "";

  const nodeId =
    typeof body.nodeId === "string"
      ? body.nodeId.trim()
      : "";

  if (!courseId || !nodeId) {
    return NextResponse.json(
      { error: "Virheellinen GuruPath-pyyntö." },
      { status: 400 }
    );
  }

  const admin = createSupabaseAdmin();

  const { data, error } = await admin.rpc(
    "apply_gurupath_wrong_answer",
    {
      p_user_id: user.id,
      p_course_id: courseId,
      p_node_id: nodeId,
      p_penalty: XP_PENALTY,
      p_cooldown_seconds: COOLDOWN_SECONDS,
    }
  );

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  const result = Array.isArray(data) ? data[0] : data;

  return NextResponse.json({
    applied: Boolean(result?.applied),
    cooldownSeconds: Number(
      result?.cooldown_seconds ?? COOLDOWN_SECONDS
    ),
    profile: {
      level: Number(result?.new_level ?? 1),
      xp: Number(result?.new_xp ?? 0),
      lifetime_xp: Number(
        result?.new_lifetime_xp ?? 0
      ),
      total_score: Number(
        result?.new_total_score ?? 0
      ),
    },
  });
}
