import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { isCourseId } from "@/data/courses";
import {
  getPracticeExam,
  getPracticeExamQuestionCount,
  toPublicPracticeExam,
} from "@/data/practiceExams";
import { hasCourseAccess } from "@/lib/courseAccess";
import {
  finalizeIfExpired,
  type PracticeExamAttemptRow,
} from "@/lib/practiceExamServer";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ courseId: string; examId: string }> };

async function contextFor(params: Params["params"]) {
  const { courseId, examId } = await params;

  if (!isCourseId(courseId)) {
    return { error: NextResponse.json({ error: "Tuntematon kurssi." }, { status: 404 }) };
  }

  const exam = getPracticeExam(courseId, examId);
  if (!exam) {
    return { error: NextResponse.json({ error: "Harjoituskoetta ei löytynyt." }, { status: 404 }) };
  }

  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 }) };
  }

  if (!(await hasCourseAccess(courseId))) {
    return { error: NextResponse.json({ error: "Sinulla ei ole käyttöoikeutta tähän kurssiin." }, { status: 403 }) };
  }

  return { courseId, examId, exam, user };
}

function historyItem(a: PracticeExamAttemptRow) {
  return {
    id: a.id,
    status: a.status,
    startedAt: a.started_at,
    finishedAt: a.finished_at,
    durationSeconds: a.duration_seconds,
    score: a.score,
    maxScore: a.max_score,
    correctCount: a.correct_count,
    wrongCount: a.wrong_count,
    unsureCount: a.unsure_count,
  };
}

function activeItem(a: PracticeExamAttemptRow, serverNow: string) {
  return {
    id: a.id,
    startedAt: a.started_at,
    expiresAt: a.expires_at,
    answers: a.answers ?? {},
    serverNow,
  };
}

export async function GET(_request: Request, { params }: Params) {
  try {
    const ctx = await contextFor(params);
    if ("error" in ctx) return ctx.error;

    const { courseId, examId, exam, user } = ctx;
    const admin = createAdminClient();
    const now = new Date();

    const { data: rows, error } = await admin
      .from("practice_exam_attempts")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .eq("exam_id", examId)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: `Koehistorian haku epäonnistui: ${error.message}` }, { status: 500 });
    }

    for (const row of (rows ?? []) as PracticeExamAttemptRow[]) {
      await finalizeIfExpired(row, now);
    }

    const { data: fresh, error: freshError } = await admin
      .from("practice_exam_attempts")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .eq("exam_id", examId)
      .order("created_at", { ascending: false });

    if (freshError) {
      return NextResponse.json({ error: freshError.message }, { status: 500 });
    }

    const attempts = (fresh ?? []) as PracticeExamAttemptRow[];
    const active = attempts.find((a) => a.status === "active") ?? null;
    const serverNow = new Date().toISOString();

    return NextResponse.json({
      exam: toPublicPracticeExam(exam),
      serverNow,
      activeAttempt: active ? activeItem(active, serverNow) : null,
      history: attempts
        .filter((a) => a.status === "finished" || a.status === "expired")
        .map(historyItem),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kokeen tietojen haku epäonnistui." },
      { status: 500 }
    );
  }
}

export async function POST(_request: Request, { params }: Params) {
  try {
    const ctx = await contextFor(params);
    if ("error" in ctx) return ctx.error;

    const { courseId, examId, exam, user } = ctx;
    const admin = createAdminClient();
    const now = new Date();

    const { data: activeRows, error: activeError } = await admin
      .from("practice_exam_attempts")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .eq("exam_id", examId)
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(1);

    if (activeError) {
      return NextResponse.json({ error: activeError.message }, { status: 500 });
    }

    const existing = (activeRows?.[0] ?? null) as PracticeExamAttemptRow | null;

    if (existing) {
      const checked = await finalizeIfExpired(existing, now);

      if (checked.status === "active") {
        const serverNow = new Date().toISOString();
        return NextResponse.json({
          resumed: true,
          attempt: activeItem(checked, serverNow),
        });
      }
    }

    const expiresAt = new Date(now.getTime() + exam.durationMinutes * 60 * 1000);

    const { data, error } = await admin
      .from("practice_exam_attempts")
      .insert({
        user_id: user.id,
        course_id: courseId,
        exam_id: examId,
        exam_version: exam.version,
        status: "active",
        answers: {},
        started_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        max_score: getPracticeExamQuestionCount(exam),
        updated_at: now.toISOString(),
      })
      .select("*")
      .single();

    if (error) {
      if (error.code === "23505") {
        const { data: retry } = await admin
          .from("practice_exam_attempts")
          .select("*")
          .eq("user_id", user.id)
          .eq("course_id", courseId)
          .eq("exam_id", examId)
          .eq("status", "active")
          .limit(1);

        const retryAttempt = (retry?.[0] ?? null) as PracticeExamAttemptRow | null;
        if (retryAttempt) {
          const serverNow = new Date().toISOString();
          return NextResponse.json({
            resumed: true,
            attempt: activeItem(retryAttempt, serverNow),
          });
        }
      }

      return NextResponse.json({ error: `Kokeen aloittaminen epäonnistui: ${error.message}` }, { status: 500 });
    }

    const serverNow = new Date().toISOString();
    return NextResponse.json({
      resumed: false,
      attempt: activeItem(data as PracticeExamAttemptRow, serverNow),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kokeen aloittaminen epäonnistui." },
      { status: 500 }
    );
  }
}
