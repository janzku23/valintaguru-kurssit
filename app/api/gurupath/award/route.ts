import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";
import { hasCourseAccess } from "@/lib/courseAccess";
import { isCourseId } from "@/data/courses";

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
    return NextResponse.json(
      { error: "Kirjautuminen vaaditaan." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => ({}));

  const courseId =
    typeof body.courseId === "string" ? body.courseId.trim() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "";
  const sourceId =
    typeof body.sourceId === "string" ? body.sourceId.trim() : "";

  if (
    !courseId ||
    !isCourseId(courseId) ||
    !sourceId ||
    !ALLOWED_SOURCES.has(source)
  ) {
    return NextResponse.json(
      { error: "Virheellinen palkintopyyntö." },
      { status: 400 }
    );
  }

  const allowed = await hasCourseAccess(courseId);

  if (!allowed) {
    return NextResponse.json(
      { error: "Tähän kurssiin ei ole aktiivista käyttöoikeutta." },
      { status: 403 }
    );
  }

  const cap = REWARD_CAPS[source];
  const admin = createSupabaseAdmin();

  const { data, error } = await admin.rpc("award_gurupath_xp", {
    p_user_id: user.id,
    p_course_id: courseId,
    p_source: source,
    p_source_id: sourceId,
    p_xp: cap.xp,
    p_score: cap.score,
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
