import "server-only";

import { createHash } from "node:crypto";
import { createAdminClient } from "@/utils/supabase/admin";
import { getPracticeExam } from "@/data/practiceExams";
import type { PracticeExam } from "@/data/practiceExams/types";
import {
  getCorrectAnswerIds,
  UNSURE_ANSWER_ID,
} from "@/data/practiceExams/types";
import {
  normalizePracticeExamAnswerIds,
  scorePracticeExam,
  type PracticeExamAnswers,
} from "@/lib/practiceExamScoring";

export type PracticeExamAttemptRow = {
  id: string;
  user_id: string;
  course_id: string;
  exam_id: string;
  exam_version: number;
  status:
    | "active"
    | "finished"
    | "expired";
  answers:
    | PracticeExamAnswers
    | null;
  started_at: string;
  expires_at: string;
  finished_at: string | null;
  duration_seconds: number | null;
  score: number | null;
  max_score: number | null;
  correct_count: number | null;
  wrong_count: number | null;
  unsure_count: number | null;
  created_at: string;
  updated_at: string;
};

type QuestionTimes = Record<string, number>;

/** Compare the row version so a concurrent save cannot overwrite newer answers. */
async function updateActiveAttempt(
  initial: PracticeExamAttemptRow,
  changes: (current: PracticeExamAttemptRow) => Partial<PracticeExamAttemptRow>,
  requireTimeRemaining = false
) {
  const admin = createAdminClient();
  let current = initial;

  for (let retry = 0; retry < 8; retry += 1) {
    const now = new Date();
    if (current.status !== "active" ||
        (requireTimeRemaining && Date.parse(current.expires_at) <= now.getTime())) {
      return { attempt: current, updated: false };
    }

    // Advance even when two writes happen in the same millisecond.
    const updatedAt = new Date(Math.max(now.getTime(), Date.parse(current.updated_at) + 1)).toISOString();
    let query = admin.from("practice_exam_attempts")
      .update({ ...changes(current), updated_at: updatedAt })
      .eq("id", current.id)
      .eq("user_id", current.user_id)
      .eq("status", "active")
      .eq("updated_at", current.updated_at);
    if (requireTimeRemaining) query = query.gt("expires_at", now.toISOString());

    const { data, error } = await query.select("*").maybeSingle();
    if (error) throw new Error(`Koesuorituksen tallennus epäonnistui: ${error.message}`);
    if (data) return { attempt: data as PracticeExamAttemptRow, updated: true };

    const { data: fresh, error: readError } = await admin.from("practice_exam_attempts")
      .select("*").eq("id", current.id).eq("user_id", current.user_id).single();
    if (readError || !fresh) {
      throw new Error(readError?.message ?? "Koeyritystä ei löytynyt.");
    }
    current = fresh as PracticeExamAttemptRow;
  }

  throw new Error("Vastausta tallennetaan toisessa välilehdessä. Yritä tallennusta uudelleen.");
}

export async function savePracticeExamAnswer(
  attempt: PracticeExamAttemptRow,
  questionId: string,
  answer: PracticeExamAnswers[string] | undefined
) {
  return updateActiveAttempt(attempt, (current) => {
    const answers = { ...(current.answers ?? {}) };
    if (answer === undefined) delete answers[questionId];
    else answers[questionId] = answer;
    return { answers, updated_at: new Date().toISOString() };
  }, true);
}

function progressId(attemptId: string, questionId: string) {
  const hash = createHash("sha256").update(`practice-exam:${attemptId}:${questionId}`).digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-5${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

/** Reopening a result also repairs an interrupted sync, without duplicating attempts. */
export async function ensurePracticeExamProgressRows(
  attempt: PracticeExamAttemptRow,
  questionTimes: QuestionTimes = {}
) {
  if (attempt.status === "active") return;
  const exam = getPracticeExam(attempt.course_id, attempt.exam_id);
  if (!exam) throw new Error("Harjoituskoetta ei löytynyt.");
  const admin = createAdminClient();
  const { data: existing, error: readError } = await admin.from("student_progress_attempts")
    .select("question_id").eq("user_id", attempt.user_id)
    .eq("course_id", attempt.course_id).eq("session_id", attempt.id);
  if (readError) throw new Error(`Edistymisen tarkistus epäonnistui: ${readError.message}`);
  const existingIds = new Set((existing ?? []).map((row) => row.question_id as string));
  const result = scorePracticeExam(exam, attempt.answers ?? {});
  const durationMs = attempt.duration_seconds == null ? null : Math.max(0, attempt.duration_seconds * 1000);
  const rows = exam.sections.flatMap((section) => section.questions
    .filter((question) => !existingIds.has(question.id))
    .map((question) => {
      const selected = normalizePracticeExamAnswerIds(result.normalizedAnswers[question.id]);
      const correct = getCorrectAnswerIds(question);
      const sortedCorrect = [...correct].sort();
      const skipped = selected.includes(UNSURE_ANSWER_ID);
      const time = questionTimes[question.id];
      const answerTime = typeof time === "number" && Number.isFinite(time) && time >= 0
        ? Math.round(Math.min(time, durationMs ?? exam.durationMinutes * 60_000)) : null;
      return {
        id: progressId(attempt.id, question.id),
        user_id: attempt.user_id,
        course_id: attempt.course_id,
        question_id: question.id,
        question: question.prompt,
        area: `${exam.title} · ${section.title}`,
        category: "Harjoituskoe",
        selected_answer_ids: selected,
        correct_answer_ids: correct,
        is_correct: !skipped && selected.length === correct.length &&
          [...selected].sort().every((id, index) => id === sortedCorrect[index]),
        answered_at: attempt.finished_at ?? attempt.expires_at,
        answer_time_ms: answerTime,
        answer_time_source: answerTime == null ? null : "active_question",
        session_duration_ms: durationMs,
        session_id: attempt.id,
        session_type: "harjoituskoe",
        session_name: exam.title,
      };
    }));
  if (!rows.length) return;
  // Stable primary keys make concurrent recovery requests idempotent as well.
  const { error } = await admin.from("student_progress_attempts")
    .upsert(rows, { onConflict: "id", ignoreDuplicates: true });
  if (error) throw new Error(`Edistymisen tallennus epäonnistui: ${error.message}`);
}

function durationSeconds(
  startedAt: string,
  finishedAt: Date,
  exam: PracticeExam
) {
  const elapsed = Math.max(
    0,
    Math.floor(
      (finishedAt.getTime() -
        new Date(
          startedAt
        ).getTime()) /
        1000
    )
  );

  return Math.min(
    elapsed,
    exam.durationMinutes * 60
  );
}

export async function finalizePracticeExamAttempt(
  attempt: PracticeExamAttemptRow,
  status:
    | "finished"
    | "expired",
  finishedAt = new Date(),
  questionTimes: QuestionTimes = {}
) {
  const exam = getPracticeExam(
    attempt.course_id,
    attempt.exam_id
  );

  if (!exam) {
    throw new Error(
      "Harjoituskoetta ei löytynyt."
    );
  }

  const { attempt: finalized } = await updateActiveAttempt(attempt, (current) => {
    const result = scorePracticeExam(exam, current.answers ?? {});
    const end = status === "expired" ? new Date(current.expires_at) : finishedAt;
    return {
      status,
      answers: result.normalizedAnswers,
      finished_at: end.toISOString(),
      duration_seconds: durationSeconds(current.started_at, end, exam),
      score: result.score,
      max_score: result.maxScore,
      correct_count: result.correctCount,
      wrong_count: result.wrongCount,
      unsure_count: result.unsureCount,
      updated_at: new Date().toISOString(),
    };
  });
  await ensurePracticeExamProgressRows(finalized, questionTimes);
  return finalized;
}

export async function finalizeIfExpired(
  attempt: PracticeExamAttemptRow,
  now = new Date(),
  questionTimes: QuestionTimes = {}
) {
  if (
    attempt.status === "active" &&
    new Date(
      attempt.expires_at
    ).getTime() <=
      now.getTime()
  ) {
    return finalizePracticeExamAttempt(
      attempt,
      "expired",
      now,
      questionTimes
    );
  }

  return attempt;
}



function isSourceSkipOptionText(
  text: string
) {
  const value =
    text.trim().toLowerCase();

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

export function buildPracticeExamReview(
  attempt: PracticeExamAttemptRow
) {
  const exam = getPracticeExam(
    attempt.course_id,
    attempt.exam_id
  );

  if (!exam) return [];

  const answers =
    attempt.answers ?? {};

  return exam.sections.flatMap(
    (section) =>
      section.questions.map(
        (question) => {
          const selected =
            normalizePracticeExamAnswerIds(
              answers[
                question.id
              ]
            );

          const containsLegacySkip =
            selected.some(
              (id) => {
                const option =
                  question.options.find(
                    (item) =>
                      item.id === id
                  );

                return option
                  ? isSourceSkipOptionText(
                      option.text
                    )
                  : false;
              }
            );

          const selectedAnswerIds =
            selected.length === 0 ||
            containsLegacySkip
              ? [
                  UNSURE_ANSWER_ID,
                ]
              : selected;

          const correctAnswerIds =
            getCorrectAnswerIds(
              question
            );

          return {
            sectionId:
              section.id,
            sectionTitle:
              section.title,
            questionId:
              question.id,
            prompt:
              question.prompt,

            selectedAnswerIds,
            correctAnswerIds,

            // Taaksepäin yhteensopivuus.
            selectedAnswerId:
              selectedAnswerIds[
                0
              ] ??
              UNSURE_ANSWER_ID,
            correctAnswerId:
              correctAnswerIds[
                0
              ] ??
              question.correctAnswerId,

            explanation:
              question.explanation ??
              null,
            options:
              question.options,
          };
        }
      )
  );
}
