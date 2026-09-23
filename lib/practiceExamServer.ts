import "server-only";

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
  finishedAt = new Date()
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

  const result =
    scorePracticeExam(
      exam,
      attempt.answers ?? {}
    );

  const admin =
    createAdminClient();

  const { data, error } =
    await admin
      .from(
        "practice_exam_attempts"
      )
      .update({
        status,
        answers:
          result.normalizedAnswers,
        finished_at:
          finishedAt.toISOString(),
        duration_seconds:
          durationSeconds(
            attempt.started_at,
            finishedAt,
            exam
          ),
        score: result.score,
        max_score:
          result.maxScore,
        correct_count:
          result.correctCount,
        wrong_count:
          result.wrongCount,
        unsure_count:
          result.unsureCount,
        updated_at:
          finishedAt.toISOString(),
      })
      .eq(
        "id",
        attempt.id
      )
      .eq(
        "user_id",
        attempt.user_id
      )
      .select("*")
      .single();

  if (error) {
    throw new Error(
      `Kokeen tuloksen tallennus epäonnistui: ${error.message}`
    );
  }

  return data as PracticeExamAttemptRow;
}

export async function finalizeIfExpired(
  attempt: PracticeExamAttemptRow,
  now = new Date()
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
      now
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
