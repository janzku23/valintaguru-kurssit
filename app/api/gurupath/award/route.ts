import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";

export const dynamic = "force-dynamic";

const ALLOWED_SOURCES = new Set([
  "flashcard",
  "true-false",
  "multiple-choice",
  "theory",
  "path-node",
  "vault",
  "daily",
]);

// Server-side maximums. Never trust XP sent by the browser.
const REWARD_CAPS: Record<string, { xp: number; score: number }> = {
  flashcard: { xp: 4, score: 4 },
  "true-false": { xp: 5, score: 5 },
  "multiple-choice": { xp: 7, score: 7 },
  theory: { xp: 25, score: 15 },
  "path-node": { xp: 35, score: 30 },
  vault: { xp: 100, score: 100 },
  daily: { xp: 60, score: 50 },
};

export async function POST(request: Request) {
  const userClient = await createSupabaseServerUser();

  const {
    data: { user },
  } = await userClient.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));

  const courseId = typeof body.courseId === "string" ? body.courseId.trim() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "";
  const sourceId = typeof body.sourceId === "string" ? body.sourceId.trim() : "";

  if (!courseId || !sourceId || !ALLOWED_SOURCES.has(source)) {
    return NextResponse.json({ error: "Virheellinen palkintopyyntö." }, { status: 400 });
  }

  // The client may request only the configured reward for the source.
  // Better still: when you wire this to existing QuizView / FlashcardView,
  // derive sourceId from your real task ID.
  const cap = REWARD_CAPS[source];
  const xp = cap.xp;
  const score = cap.score;

  const admin = createSupabaseAdmin();

  const { data, error } = await admin.rpc("award_gurupath_xp", {
    p_user_id: user.id,
    p_course_id: courseId,
    p_source: source,
    p_source_id: sourceId,
    p_xp: xp,
    p_score: score,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const result = Array.isArray(data) ? data[0] : data;

  return NextResponse.json({
    awarded: Boolean(result?.inserted),
    profile: {
      level: result?.new_level ?? 1,
      xp: Number(result?.new_xp ?? 0),
      lifetime_xp: Number(result?.new_lifetime_xp ?? 0),
      total_score: Number(result?.new_total_score ?? 0),
    },
  });
}
