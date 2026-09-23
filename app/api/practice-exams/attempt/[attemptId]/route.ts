import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import {
  getPracticeExam,
  getCorrectAnswerIds,
  UNSURE_ANSWER_ID,
} from "@/data/practiceExams";
import type {
  PracticeExamAnswerValue,
  PracticeExamAnswers,
} from "@/lib/practiceExamScoring";
import {
  buildPracticeExamReview,
  finalizeIfExpired,
  finalizePracticeExamAttempt,
  type PracticeExamAttemptRow,
} from "@/lib/practiceExamServer";

export const dynamic =
  "force-dynamic";

type Params = {
  params: Promise<{
    attemptId: string;
  }>;
};

async function loadAttempt(
  params: Params["params"]
) {
  const { attemptId } =
    await params;

  const supabase =
    await createClient();

  const {
    data: { user },
    error: userError,
  } =
    await supabase.auth.getUser();

  if (userError || !user) {
    return {
      error: NextResponse.json(
        {
          error:
            "Kirjautuminen vaaditaan.",
        },
        { status: 401 }
      ),
    };
  }

  const admin =
    createAdminClient();

  const { data, error } =
    await admin
      .from(
        "practice_exam_attempts"
      )
      .select("*")
      .eq(
        "id",
        attemptId
      )
      .eq(
        "user_id",
        user.id
      )
      .maybeSingle();

  if (error) {
    return {
      error: NextResponse.json(
        {
          error:
            error.message,
        },
        { status: 500 }
      ),
    };
  }

  if (!data) {
    return {
      error: NextResponse.json(
        {
          error:
            "Koeyritystä ei löytynyt.",
        },
        { status: 404 }
      ),
    };
  }

  return {
    admin,
    attempt:
      data as PracticeExamAttemptRow,
  };
}

function resultOf(
  a: PracticeExamAttemptRow
) {
  return {
    score: a.score,
    maxScore:
      a.max_score,
    correctCount:
      a.correct_count,
    wrongCount:
      a.wrong_count,
    unsureCount:
      a.unsure_count,
    durationSeconds:
      a.duration_seconds,
  };
}

function normalizeIncomingIds(
  body: {
    answerId?: unknown;
    answerIds?: unknown;
  }
) {
  if (
    Array.isArray(
      body.answerIds
    )
  ) {
    return Array.from(
      new Set(
        body.answerIds
          .filter(
            (item): item is string =>
              typeof item ===
              "string"
          )
          .map((item) =>
            item.trim()
          )
          .filter(Boolean)
      )
    );
  }

  if (
    typeof body.answerId ===
      "string" &&
    body.answerId.trim()
  ) {
    return [
      body.answerId.trim(),
    ];
  }

  return [];
}

function isSourceSkipOption(
  text: string
) {
  const value =
    text
      .trim()
      .toLowerCase();

  return (
    value.startsWith(
      "jätän vastaamatta"
    ) ||
    value.startsWith(
      "jatan vastaamatta"
    ) ||
    value.startsWith(
      "en osaa sanoa"
    )
  );
}

export async function GET(
  _request: Request,
  { params }: Params
) {
  try {
    const ctx =
      await loadAttempt(
        params
      );

    if ("error" in ctx) {
      return ctx.error;
    }

    const attempt =
      await finalizeIfExpired(
        ctx.attempt,
        new Date()
      );

    if (
      attempt.status ===
      "active"
    ) {
      return NextResponse.json(
        {
          error:
            "Koe on vielä kesken. Keskeneräistä yritystä ei voi avata historiasta.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        status:
          attempt.status,
        result:
          resultOf(
            attempt
          ),
        review:
          buildPracticeExamReview(
            attempt
          ),
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof
          Error
            ? error.message
            : "Koesuorituksen tarkastelu epäonnistui.",
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
    const ctx =
      await loadAttempt(
        params
      );

    if ("error" in ctx) {
      return ctx.error;
    }

    const checked =
      await finalizeIfExpired(
        ctx.attempt,
        new Date()
      );

    if (
      checked.status !==
      "active"
    ) {
      return NextResponse.json(
        {
          error:
            "Koeaika on päättynyt. Vastausta ei enää voi muuttaa.",
          finished: true,
          result:
            resultOf(
              checked
            ),
          review:
            buildPracticeExamReview(
              checked
            ),
        },
        { status: 409 }
      );
    }

    const body =
      (await request.json()) as {
        questionId?: unknown;
        answerId?: unknown;
        answerIds?: unknown;
      };

    const questionId =
      typeof body.questionId ===
        "string"
        ? body.questionId.trim()
        : "";

    if (!questionId) {
      return NextResponse.json(
        {
          error:
            "Kysymystunniste puuttuu.",
        },
        { status: 400 }
      );
    }

    const exam =
      getPracticeExam(
        checked.course_id,
        checked.exam_id
      );

    if (!exam) {
      return NextResponse.json(
        {
          error:
            "Harjoituskoetta ei löytynyt.",
        },
        { status: 404 }
      );
    }

    const question =
      exam.sections
        .flatMap(
          (section) =>
            section.questions
        )
        .find(
          (item) =>
            item.id ===
            questionId
        );

    if (!question) {
      return NextResponse.json(
        {
          error:
            "Kysymystä ei löytynyt.",
        },
        { status: 400 }
      );
    }

    let answerIds =
      normalizeIncomingIds(
        body
      );

    const legacySkipIds =
      question.options
        .filter((option) =>
          isSourceSkipOption(
            option.text
          )
        )
        .map(
          (option) =>
            option.id
        );

    if (
      answerIds.some(
        (id) =>
          legacySkipIds.includes(
            id
          )
      )
    ) {
      answerIds = [
        UNSURE_ANSWER_ID,
      ];
    }

    const hasUnsure =
      answerIds.includes(
        UNSURE_ANSWER_ID
      );

    if (
      hasUnsure &&
      answerIds.length > 1
    ) {
      return NextResponse.json(
        {
          error:
            "En osaa sanoa -valintaa ei voi yhdistää muihin vastauksiin.",
        },
        { status: 400 }
      );
    }

    const validOptionIds =
      new Set(
        question.options.map(
          (option) =>
            option.id
        )
      );

    const hasInvalid =
      answerIds.some(
        (id) =>
          id !==
            UNSURE_ANSWER_ID &&
          !validOptionIds.has(
            id
          )
      );

    if (hasInvalid) {
      return NextResponse.json(
        {
          error:
            "Tuntematon vastausvaihtoehto.",
        },
        { status: 400 }
      );
    }

    const allowsMultiple =
      getCorrectAnswerIds(
        question
      ).length > 1;

    const realAnswerIds =
      answerIds.filter(
        (id) =>
          id !==
          UNSURE_ANSWER_ID
      );

    if (
      !allowsMultiple &&
      realAnswerIds.length >
        1
    ) {
      return NextResponse.json(
        {
          error:
            "Tähän kysymykseen voi valita vain yhden vaihtoehdon.",
        },
        { status: 400 }
      );
    }

    const nextAnswers:
      PracticeExamAnswers = {
        ...(checked.answers ??
          {}),
      };

    if (
      answerIds.length ===
      0
    ) {
      delete nextAnswers[
        questionId
      ];
    } else {
      let stored:
        PracticeExamAnswerValue;

      if (hasUnsure) {
        stored =
          UNSURE_ANSWER_ID;
      } else if (
        allowsMultiple
      ) {
        stored = Array.from(
          new Set(
            realAnswerIds
          )
        ).sort();
      } else {
        stored =
          realAnswerIds[
            0
          ];
      }

      nextAnswers[
        questionId
      ] = stored;
    }

    const nowIso =
      new Date().toISOString();

    const { error } =
      await ctx.admin
        .from(
          "practice_exam_attempts"
        )
        .update({
          answers:
            nextAnswers,
          updated_at:
            nowIso,
        })
        .eq(
          "id",
          checked.id
        )
        .eq(
          "user_id",
          checked.user_id
        )
        .eq(
          "status",
          "active"
        );

    if (error) {
      return NextResponse.json(
        {
          error:
            `Vastauksen tallennus epäonnistui: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        savedAt:
          nowIso,
        answerIds,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof
          Error
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
    const ctx =
      await loadAttempt(
        params
      );

    if ("error" in ctx) {
      return ctx.error;
    }

    let attempt =
      await finalizeIfExpired(
        ctx.attempt,
        new Date()
      );

    if (
      attempt.status ===
      "active"
    ) {
      attempt =
        await finalizePracticeExamAttempt(
          attempt,
          "finished",
          new Date()
        );
    }

    return NextResponse.json(
      {
        success: true,
        status:
          attempt.status,
        result:
          resultOf(
            attempt
          ),
        review:
          buildPracticeExamReview(
            attempt
          ),
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof
          Error
            ? error.message
            : "Kokeen päättäminen epäonnistui.",
      },
      { status: 500 }
    );
  }
}
