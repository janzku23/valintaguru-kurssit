import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";
import { getValintakoeGExercise } from "@/data/valintakoeGExercises";
import {
  buildValintakoeGExerciseReview,
  ensureValintakoeGProgressRows,
  finalizeValintakoeGExerciseAttempt,
  finalizeValintakoeGIfExpired,
  valintakoeGResultOf,
  type ValintakoeGExerciseAttemptRow,
} from "@/lib/valintakoeGExerciseServer";

export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{ attemptId: string }>;
};

async function loadAttempt(
  params: Params["params"]
) {
  const { attemptId } = await params;
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

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("valintakoe_g_exercise_attempts")
    .select("*")
    .eq("id", attemptId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    return {
      error: NextResponse.json(
        { error: error.message },
        { status: 500 }
      ),
    };
  }

  if (!data) {
    return {
      error: NextResponse.json(
        { error: "Harjoitusyritystä ei löytynyt." },
        { status: 404 }
      ),
    };
  }

  return {
    admin,
    attempt:
      data as ValintakoeGExerciseAttemptRow,
  };
}

export async function GET(
  _request: Request,
  { params }: Params
) {
  try {
    const ctx = await loadAttempt(params);
    if ("error" in ctx) return ctx.error;

    const attempt =
      await finalizeValintakoeGIfExpired(
        ctx.attempt,
        new Date()
      );

    if (attempt.status === "active") {
      return NextResponse.json(
        {
          error:
            "Harjoitus on vielä kesken. Keskeneräistä yritystä ei voi avata historiasta.",
        },
        { status: 409 }
      );
    }

    await ensureValintakoeGProgressRows(attempt);

    return NextResponse.json({
      success: true,
      status: attempt.status,
      result: valintakoeGResultOf(attempt),
      review:
        await buildValintakoeGExerciseReview(
          attempt
        ),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Harjoitussuorituksen tarkastelu epäonnistui.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: Params
) {
  try {
    const ctx = await loadAttempt(params);
    if ("error" in ctx) return ctx.error;

    const checked =
      await finalizeValintakoeGIfExpired(
        ctx.attempt,
        new Date()
      );

    if (checked.status !== "active") {
      return NextResponse.json(
        {
          error:
            "Harjoitusaika on päättynyt. Vastausta ei enää voi muuttaa.",
          finished: true,
          result: valintakoeGResultOf(checked),
          review:
            await buildValintakoeGExerciseReview(
              checked
            ),
        },
        { status: 409 }
      );
    }

    const body = (await request.json()) as {
      questionId?: string;
      answerIds?: string[];
      answerTimeMs?: number;
    };

    const questionId =
      body.questionId?.trim() ?? "";
    const answerIds = Array.isArray(
      body.answerIds
    )
      ? Array.from(
          new Set(
            body.answerIds
              .filter(
                (id): id is string =>
                  typeof id === "string"
              )
              .map((id) => id.trim())
              .filter(Boolean)
          )
        )
      : [];

    const exercise = getValintakoeGExercise(
      checked.course_id,
      checked.exercise_id
    );

    if (!exercise) {
      return NextResponse.json(
        { error: "Harjoitusta ei löytynyt." },
        { status: 404 }
      );
    }

    const question = exercise.questions.find(
      (item) => item.id === questionId
    );

    if (!question) {
      return NextResponse.json(
        { error: "Kysymystä ei löytynyt." },
        { status: 400 }
      );
    }

    const isUnsure =
      answerIds.length === 1 &&
      answerIds[0] === UNSURE_ANSWER_ID;

    const validOptions = answerIds.every(
      (answerId) =>
        answerId === UNSURE_ANSWER_ID ||
        question.options.some(
          (option) => option.id === answerId
        )
    );

    if (
      answerIds.length === 0 ||
      !validOptions ||
      (answerIds.includes(UNSURE_ANSWER_ID) &&
        !isUnsure) ||
      (question.questionType !== "multiple" &&
        !isUnsure &&
        answerIds.length !== 1)
    ) {
      return NextResponse.json(
        { error: "Tuntematon tai virheellinen vastaus." },
        { status: 400 }
      );
    }

    const nextAnswers = {
      ...(checked.answers ?? {}),
      [questionId]: answerIds,
    };

    const nextQuestionTimes = {
      ...(checked.question_times ?? {}),
    };

    if (
      typeof body.answerTimeMs === "number" &&
      Number.isFinite(body.answerTimeMs) &&
      body.answerTimeMs >= 0 &&
      nextQuestionTimes[questionId] == null
    ) {
      nextQuestionTimes[questionId] =
        Math.round(body.answerTimeMs);
    }

    const nowIso = new Date().toISOString();

    const { error } = await ctx.admin
      .from("valintakoe_g_exercise_attempts")
      .update({
        answers: nextAnswers,
        question_times: nextQuestionTimes,
        updated_at: nowIso,
      })
      .eq("id", checked.id)
      .eq("user_id", checked.user_id)
      .eq("status", "active");

    if (error) {
      return NextResponse.json(
        {
          error: `Vastauksen tallennus epäonnistui: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      savedAt: nowIso,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Vastauksen tallennus epäonnistui.",
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
    const ctx = await loadAttempt(params);
    if ("error" in ctx) return ctx.error;

    let attempt =
      await finalizeValintakoeGIfExpired(
        ctx.attempt,
        new Date()
      );

    if (attempt.status === "active") {
      attempt =
        await finalizeValintakoeGExerciseAttempt(
          attempt,
          "finished",
          new Date()
        );
    }

    await ensureValintakoeGProgressRows(attempt);

    return NextResponse.json({
      success: true,
      status: attempt.status,
      result: valintakoeGResultOf(attempt),
      review:
        await buildValintakoeGExerciseReview(
          attempt
        ),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Harjoituksen päättäminen epäonnistui.",
      },
      { status: 500 }
    );
  }
}
