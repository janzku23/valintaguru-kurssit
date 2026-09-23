import "server-only";

import { createAdminClient } from "@/utils/supabase/admin";
import {
  getValintakoeGExercise,
  type ValintakoeGCourseId,
} from "@/data/valintakoeGExercises";
import { getValintakoeGReadingCategory } from "@/data/valintakoeGExercises/categories";
import type {
  ValintakoeGDifficulty,
  ValintakoeGQuestion,
  ValintakoeGQuestionType,
} from "@/data/valintakoeGExercises/types";
import {
  scoreValintakoeGExercise,
  type ValintakoeGAnswers,
} from "@/lib/valintakoeGExerciseScoring";

export type ValintakoeGExerciseAttemptRow = {
  id: string;
  user_id: string;
  course_id: ValintakoeGCourseId;
  exercise_id: string;
  exercise_version: number;
  status: "active" | "finished" | "expired";
  answers: ValintakoeGAnswers | null;
  question_times: Record<string, number> | null;
  started_at: string;
  expires_at: string;
  finished_at: string | null;
  duration_seconds: number | null;
  correct_count: number | null;
  incorrect_count: number | null;
  skipped_count: number | null;
  question_count: number | null;
  created_at: string;
  updated_at: string;
};

type MetadataRow = {
  question_id: string;
  exercise_id: string;
  category_id: number;
  difficulty: ValintakoeGDifficulty;
  question_type: ValintakoeGQuestionType;
  article_id: string | null;
  source_page: string | null;
  source_section: string | null;
};

function durationSeconds(
  startedAt: string,
  finishedAt: Date,
  durationMinutes: number
) {
  const elapsed = Math.max(
    0,
    Math.floor(
      (finishedAt.getTime() -
        new Date(startedAt).getTime()) /
        1000
    )
  );

  return Math.min(
    elapsed,
    durationMinutes * 60
  );
}

function safeQuestionTime(value: unknown) {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    value < 0
  ) {
    return null;
  }

  return Math.round(value);
}

async function loadMetadataOverrides(
  exerciseId: string,
  questions: ValintakoeGQuestion[]
) {
  const admin = createAdminClient();
  const ids = questions.map((question) => question.id);

  if (ids.length === 0) {
    return new Map<string, MetadataRow>();
  }

  const { data, error } = await admin
    .from("valintakoe_g_question_metadata")
    .select(
      "question_id,exercise_id,category_id,difficulty,question_type,article_id,source_page,source_section"
    )
    .eq("exercise_id", exerciseId)
    .in("question_id", ids);

  if (error) {
    console.warn(
      "Valintakoe G metadata override fetch failed:",
      error
    );
    return new Map<string, MetadataRow>();
  }

  return new Map(
    ((data ?? []) as MetadataRow[]).map((row) => [
      row.question_id,
      row,
    ])
  );
}

function effectiveMetadata(
  exerciseId: string,
  question: ValintakoeGQuestion,
  override?: MetadataRow
) {
  const categoryId =
    override?.category_id ?? question.categoryId;

  return {
    exerciseId,
    categoryId,
    difficulty:
      override?.difficulty ?? question.difficulty,
    questionType:
      override?.question_type ??
      question.questionType,
    articleId:
      override?.article_id ??
      question.source?.articleId ??
      null,
    sourcePage:
      override?.source_page ??
      question.source?.page ??
      null,
    sourceSection:
      override?.source_section ??
      question.source?.section ??
      null,
  };
}

export async function ensureValintakoeGProgressRows(
  attempt: ValintakoeGExerciseAttemptRow
) {
  const exercise = getValintakoeGExercise(
    attempt.course_id,
    attempt.exercise_id
  );

  if (!exercise) return;

  const admin = createAdminClient();

  const { data: existing, error: existingError } =
    await admin
      .from("student_progress_attempts")
      .select("id")
      .eq("user_id", attempt.user_id)
      .eq("course_id", attempt.course_id)
      .eq("session_id", attempt.id)
      .limit(1);

  if (existingError) {
    throw new Error(
      `Edistymisen tarkistus epäonnistui: ${existingError.message}`
    );
  }

  if ((existing ?? []).length > 0) {
    return;
  }

  const result = scoreValintakoeGExercise(
    exercise,
    attempt.answers ?? {}
  );

  const overrides = await loadMetadataOverrides(
    exercise.id,
    exercise.questions
  );

  const answeredAt =
    attempt.finished_at ?? new Date().toISOString();

  const rows = result.questions.map((item) => {
    const metadata = effectiveMetadata(
      exercise.id,
      item.question,
      overrides.get(item.question.id)
    );

    const category =
      getValintakoeGReadingCategory(
        metadata.categoryId
      );

    const answerTimeMs = safeQuestionTime(
      attempt.question_times?.[item.question.id]
    );

    return {
      user_id: attempt.user_id,
      course_id: attempt.course_id,
      question_id: item.question.id,
      question: item.question.prompt,
      area: exercise.title,
      category:
        category?.name ??
        `Kategoria ${metadata.categoryId}`,
      category_id: metadata.categoryId,
      exercise_id: exercise.id,
      difficulty: metadata.difficulty,
      question_type: metadata.questionType,
      article_id: metadata.articleId,
      source_page: metadata.sourcePage,
      answer_status: item.status,
      selected_answer_ids:
        item.selectedAnswerIds,
      correct_answer_ids:
        item.correctAnswerIds,
      is_correct: item.isCorrect,
      answered_at: answeredAt,
      answer_time_ms: answerTimeMs,
      answer_time_source:
        answerTimeMs != null
          ? "active_question"
          : null,
      session_duration_ms:
        attempt.duration_seconds != null
          ? attempt.duration_seconds * 1000
          : null,
      session_id: attempt.id,
      session_type: "valintakoe_g_harjoitus",
      session_name: exercise.title,
    };
  });

  if (rows.length === 0) return;

  const { error: insertError } = await admin
    .from("student_progress_attempts")
    .insert(rows);

  if (insertError) {
    throw new Error(
      `Valintakoe G -edistymisen tallennus epäonnistui: ${insertError.message}`
    );
  }
}

export async function finalizeValintakoeGExerciseAttempt(
  attempt: ValintakoeGExerciseAttemptRow,
  status: "finished" | "expired",
  finishedAt = new Date()
) {
  const exercise = getValintakoeGExercise(
    attempt.course_id,
    attempt.exercise_id
  );

  if (!exercise) {
    throw new Error(
      "Valintakoe G -harjoitusta ei löytynyt."
    );
  }

  const result = scoreValintakoeGExercise(
    exercise,
    attempt.answers ?? {}
  );

  const admin = createAdminClient();
  const duration = durationSeconds(
    attempt.started_at,
    finishedAt,
    exercise.durationMinutes
  );

  const { data, error } = await admin
    .from("valintakoe_g_exercise_attempts")
    .update({
      status,
      answers: result.normalizedAnswers,
      finished_at: finishedAt.toISOString(),
      duration_seconds: duration,
      correct_count: result.correctCount,
      incorrect_count: result.incorrectCount,
      skipped_count: result.skippedCount,
      question_count: result.questionCount,
      updated_at: finishedAt.toISOString(),
    })
    .eq("id", attempt.id)
    .eq("user_id", attempt.user_id)
    .select("*")
    .single();

  if (error) {
    throw new Error(
      `Harjoituksen tuloksen tallennus epäonnistui: ${error.message}`
    );
  }

  const finalized =
    data as ValintakoeGExerciseAttemptRow;

  await ensureValintakoeGProgressRows(finalized);

  return finalized;
}

export async function finalizeValintakoeGIfExpired(
  attempt: ValintakoeGExerciseAttemptRow,
  now = new Date()
) {
  if (
    attempt.status === "active" &&
    new Date(attempt.expires_at).getTime() <=
      now.getTime()
  ) {
    return finalizeValintakoeGExerciseAttempt(
      attempt,
      "expired",
      now
    );
  }

  return attempt;
}

export function valintakoeGResultOf(
  attempt: ValintakoeGExerciseAttemptRow
) {
  const questionCount = attempt.question_count ?? 0;
  const correctCount = attempt.correct_count ?? 0;

  return {
    correctCount,
    incorrectCount: attempt.incorrect_count ?? 0,
    skippedCount: attempt.skipped_count ?? 0,
    questionCount,
    percentage:
      questionCount > 0
        ? Math.round(
            (correctCount / questionCount) * 100
          )
        : 0,
    durationSeconds: attempt.duration_seconds,
  };
}

export async function buildValintakoeGExerciseReview(
  attempt: ValintakoeGExerciseAttemptRow
) {
  const exercise = getValintakoeGExercise(
    attempt.course_id,
    attempt.exercise_id
  );

  if (!exercise) return [];

  const result = scoreValintakoeGExercise(
    exercise,
    attempt.answers ?? {}
  );

  const overrides = await loadMetadataOverrides(
    exercise.id,
    exercise.questions
  );

  return result.questions.map((item) => {
    const metadata = effectiveMetadata(
      exercise.id,
      item.question,
      overrides.get(item.question.id)
    );

    const category =
      getValintakoeGReadingCategory(
        metadata.categoryId
      );

    return {
      questionId: item.question.id,
      prompt: item.question.prompt,
      options: item.question.options,
      selectedAnswerIds: item.selectedAnswerIds,
      correctAnswerIds: item.correctAnswerIds,
      status: item.status,
      isCorrect: item.isCorrect,
      categoryId: metadata.categoryId,
      categoryName:
        category?.name ??
        `Kategoria ${metadata.categoryId}`,
      difficulty: metadata.difficulty,
      questionType: metadata.questionType,
      sourcePage: metadata.sourcePage,
      sourceSection: metadata.sourceSection,
      explanation:
        item.question.explanation ?? null,
      learningPoint:
        item.question.learningPoint ?? null,
    };
  });
}
