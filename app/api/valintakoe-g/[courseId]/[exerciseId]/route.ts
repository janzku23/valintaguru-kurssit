import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import {
  getValintakoeGExercise,
  isValintakoeGCourseId,
  toPublicValintakoeGExercise,
} from "@/data/valintakoeGExercises";
import { hasCourseAccess } from "@/lib/courseAccess";
import {
  finalizeValintakoeGIfExpired,
  type ValintakoeGExerciseAttemptRow,
} from "@/lib/valintakoeGExerciseServer";

export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{
    courseId: string;
    exerciseId: string;
  }>;
};

async function getContext(
  params: Params["params"]
) {
  const { courseId, exerciseId } =
    await params;

  if (!isValintakoeGCourseId(courseId)) {
    return {
      error: NextResponse.json(
        { error: "Tuntematon Valintakoe G -kurssi." },
        { status: 404 }
      ),
    };
  }

  const exercise = getValintakoeGExercise(
    courseId,
    exerciseId
  );

  if (!exercise) {
    return {
      error: NextResponse.json(
        { error: "Harjoitusta ei löytynyt." },
        { status: 404 }
      ),
    };
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      error: NextResponse.json(
        { error: "Kirjautuminen vaaditaan." },
        { status: 401 }
      ),
    };
  }

  if (!(await hasCourseAccess(courseId))) {
    return {
      error: NextResponse.json(
        {
          error:
            "Sinulla ei ole käyttöoikeutta tähän kurssiin.",
        },
        { status: 403 }
      ),
    };
  }

  return {
    courseId,
    exerciseId,
    exercise,
    user,
  };
}

function historyItem(
  attempt: ValintakoeGExerciseAttemptRow
) {
  return {
    id: attempt.id,
    status: attempt.status,
    startedAt: attempt.started_at,
    finishedAt: attempt.finished_at,
    durationSeconds: attempt.duration_seconds,
    correctCount: attempt.correct_count,
    incorrectCount: attempt.incorrect_count,
    skippedCount: attempt.skipped_count,
    questionCount: attempt.question_count,
  };
}

function activeItem(
  attempt: ValintakoeGExerciseAttemptRow,
  serverNow: string
) {
  return {
    id: attempt.id,
    startedAt: attempt.started_at,
    expiresAt: attempt.expires_at,
    answers: attempt.answers ?? {},
    questionTimes: attempt.question_times ?? {},
    serverNow,
  };
}

export async function GET(
  _request: Request,
  { params }: Params
) {
  try {
    const ctx = await getContext(params);
    if ("error" in ctx) return ctx.error;

    const admin = createAdminClient();
    const now = new Date();

    const { data, error } = await admin
      .from("valintakoe_g_exercise_attempts")
      .select("*")
      .eq("user_id", ctx.user.id)
      .eq("course_id", ctx.courseId)
      .eq("exercise_id", ctx.exerciseId)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        {
          error: `Harjoitushistorian haku epäonnistui: ${error.message}`,
        },
        { status: 500 }
      );
    }

    for (const row of
      (data ?? []) as ValintakoeGExerciseAttemptRow[]) {
      await finalizeValintakoeGIfExpired(
        row,
        now
      );
    }

    const { data: fresh, error: freshError } =
      await admin
        .from("valintakoe_g_exercise_attempts")
        .select("*")
        .eq("user_id", ctx.user.id)
        .eq("course_id", ctx.courseId)
        .eq("exercise_id", ctx.exerciseId)
        .order("created_at", {
          ascending: false,
        });

    if (freshError) {
      return NextResponse.json(
        { error: freshError.message },
        { status: 500 }
      );
    }

    const attempts =
      (fresh ?? []) as ValintakoeGExerciseAttemptRow[];
    const active =
      attempts.find(
        (attempt) => attempt.status === "active"
      ) ?? null;
    const serverNow = new Date().toISOString();

    return NextResponse.json({
      exercise: toPublicValintakoeGExercise(
        ctx.exercise
      ),
      serverNow,
      activeAttempt: active
        ? activeItem(active, serverNow)
        : null,
      history: attempts
        .filter(
          (attempt) =>
            attempt.status === "finished" ||
            attempt.status === "expired"
        )
        .map(historyItem),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Harjoituksen tietojen haku epäonnistui.",
      },
      { status: 500 }
    );
  }
}

export async function POST(
  _request: Request,
  { params }: Params
) {
  try {
    const ctx = await getContext(params);
    if ("error" in ctx) return ctx.error;

    const admin = createAdminClient();
    const now = new Date();

    const { data: activeRows, error: activeError } =
      await admin
        .from("valintakoe_g_exercise_attempts")
        .select("*")
        .eq("user_id", ctx.user.id)
        .eq("course_id", ctx.courseId)
        .eq("exercise_id", ctx.exerciseId)
        .eq("status", "active")
        .order("created_at", {
          ascending: false,
        })
        .limit(1);

    if (activeError) {
      return NextResponse.json(
        { error: activeError.message },
        { status: 500 }
      );
    }

    const existing =
      (activeRows?.[0] ??
        null) as ValintakoeGExerciseAttemptRow | null;

    if (existing) {
      const checked =
        await finalizeValintakoeGIfExpired(
          existing,
          now
        );

      if (checked.status === "active") {
        const serverNow =
          new Date().toISOString();

        return NextResponse.json({
          resumed: true,
          attempt: activeItem(
            checked,
            serverNow
          ),
        });
      }
    }

    const expiresAt = new Date(
      now.getTime() +
        ctx.exercise.durationMinutes * 60_000
    );

    const { data, error } = await admin
      .from("valintakoe_g_exercise_attempts")
      .insert({
        user_id: ctx.user.id,
        course_id: ctx.courseId,
        exercise_id: ctx.exerciseId,
        exercise_version: ctx.exercise.version,
        status: "active",
        answers: {},
        question_times: {},
        started_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        question_count: ctx.exercise.questions.length,
        updated_at: now.toISOString(),
      })
      .select("*")
      .single();

    if (error) {
      if (error.code === "23505") {
        const { data: retry } = await admin
          .from("valintakoe_g_exercise_attempts")
          .select("*")
          .eq("user_id", ctx.user.id)
          .eq("course_id", ctx.courseId)
          .eq("exercise_id", ctx.exerciseId)
          .eq("status", "active")
          .limit(1);

        const retryAttempt =
          (retry?.[0] ??
            null) as ValintakoeGExerciseAttemptRow | null;

        if (retryAttempt) {
          const serverNow =
            new Date().toISOString();
          return NextResponse.json({
            resumed: true,
            attempt: activeItem(
              retryAttempt,
              serverNow
            ),
          });
        }
      }

      return NextResponse.json(
        {
          error: `Harjoituksen aloittaminen epäonnistui: ${error.message}`,
        },
        { status: 500 }
      );
    }

    const serverNow = new Date().toISOString();

    return NextResponse.json({
      resumed: false,
      attempt: activeItem(
        data as ValintakoeGExerciseAttemptRow,
        serverNow
      ),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Harjoituksen aloittaminen epäonnistui.",
      },
      { status: 500 }
    );
  }
}
