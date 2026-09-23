import "server-only";

import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";
import type {
  ValintakoeGExercise,
  ValintakoeGQuestion,
} from "@/data/valintakoeGExercises/types";

export type ValintakoeGAnswers = Record<string, string[]>;
export type ValintakoeGAnswerStatus =
  | "correct"
  | "incorrect"
  | "skipped";

export type ValintakoeGScoredQuestion = {
  question: ValintakoeGQuestion;
  selectedAnswerIds: string[];
  correctAnswerIds: string[];
  status: ValintakoeGAnswerStatus;
  isCorrect: boolean;
};

function normalizeIds(ids: string[]) {
  return Array.from(
    new Set(
      ids
        .filter((id): id is string => typeof id === "string")
        .map((id) => id.trim())
        .filter(Boolean)
    )
  ).sort();
}

function sameSet(a: string[], b: string[]) {
  const left = normalizeIds(a);
  const right = normalizeIds(b);

  return (
    left.length === right.length &&
    left.every((value, index) => value === right[index])
  );
}

export function scoreValintakoeGExercise(
  exercise: ValintakoeGExercise,
  answers: ValintakoeGAnswers
) {
  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;

  const normalizedAnswers: ValintakoeGAnswers = {};

  const questions: ValintakoeGScoredQuestion[] =
    exercise.questions.map((question) => {
      const selected = normalizeIds(
        answers[question.id] ?? []
      );

      const skipped =
        selected.length === 0 ||
        selected.includes(UNSURE_ANSWER_ID);

      const validSelected = skipped
        ? []
        : selected.filter((id) =>
            question.options.some(
              (option) => option.id === id
            )
          );

      const correctAnswerIds = normalizeIds(
        question.correctAnswerIds
      );

      let status: ValintakoeGAnswerStatus;
      let isCorrect = false;

      if (skipped) {
        status = "skipped";
        skippedCount += 1;
        normalizedAnswers[question.id] = [
          UNSURE_ANSWER_ID,
        ];
      } else if (
        sameSet(validSelected, correctAnswerIds)
      ) {
        status = "correct";
        isCorrect = true;
        correctCount += 1;
        normalizedAnswers[question.id] = validSelected;
      } else {
        status = "incorrect";
        incorrectCount += 1;
        normalizedAnswers[question.id] = validSelected;
      }

      return {
        question,
        selectedAnswerIds:
          normalizedAnswers[question.id],
        correctAnswerIds,
        status,
        isCorrect,
      };
    });

  return {
    normalizedAnswers,
    questions,
    correctCount,
    incorrectCount,
    skippedCount,
    questionCount: exercise.questions.length,
    percentage:
      exercise.questions.length > 0
        ? Math.round(
            (correctCount / exercise.questions.length) * 100
          )
        : 0,
  };
}
