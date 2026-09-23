import type {
  PracticeExam,
  PracticeExamQuestion,
} from "@/data/practiceExams/types";
import {
  getCorrectAnswerIds,
  UNSURE_ANSWER_ID,
} from "@/data/practiceExams/types";

export type PracticeExamAnswerValue =
  | string
  | string[];

export type PracticeExamAnswers = Record<
  string,
  PracticeExamAnswerValue
>;

export type PracticeExamScore = {
  score: number;
  maxScore: number;
  correctCount: number;
  wrongCount: number;
  unsureCount: number;
  normalizedAnswers: PracticeExamAnswers;
};

export function normalizePracticeExamAnswerIds(
  value:
    | PracticeExamAnswerValue
    | null
    | undefined
): string[] {
  if (Array.isArray(value)) {
    return Array.from(
      new Set(
        value
          .filter(
            (item): item is string =>
              typeof item === "string"
          )
          .map((item) => item.trim())
          .filter(Boolean)
      )
    );
  }

  if (
    typeof value === "string" &&
    value.trim()
  ) {
    return [value.trim()];
  }

  return [];
}

function sameAnswerSet(
  selected: string[],
  correct: string[]
) {
  const left = Array.from(
    new Set(selected)
  ).sort();

  const right = Array.from(
    new Set(correct)
  ).sort();

  return (
    left.length === right.length &&
    left.every(
      (value, index) =>
        value === right[index]
    )
  );
}

function isSourceSkipOption(
  question: PracticeExamQuestion,
  optionId: string
) {
  const option = question.options.find(
    (item) => item.id === optionId
  );

  if (!option) return false;

  const text =
    option.text.trim().toLowerCase();

  return (
    text.startsWith("jätän vastaamatta") ||
    text.startsWith("jatan vastaamatta") ||
    text.startsWith("en osaa sanoa")
  );
}

function normalizeStoredAnswer(
  selectedIds: string[]
): PracticeExamAnswerValue {
  if (selectedIds.length <= 1) {
    return (
      selectedIds[0] ??
      UNSURE_ANSWER_ID
    );
  }

  return [...selectedIds].sort();
}

/**
 * Oikeustieteen harjoituskoepisteytys:
 * - täsmälleen oikea vastaus/yhdistelmä: +1
 * - väärä vastaus/yhdistelmä: -1
 * - En osaa sanoa / vastaamatta: 0
 *
 * Monivalinnassa EI anneta osapisteitä.
 */
export function scorePracticeExam(
  exam: PracticeExam,
  answers: PracticeExamAnswers
): PracticeExamScore {
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unsureCount = 0;
  let maxScore = 0;

  const normalizedAnswers:
    PracticeExamAnswers = {};

  for (const section of exam.sections) {
    for (const question of section.questions) {
      maxScore += 1;

      const rawSelected =
        normalizePracticeExamAnswerIds(
          answers[question.id]
        );

      const containsLegacySkip =
        rawSelected.some((id) =>
          isSourceSkipOption(
            question,
            id
          )
        );

      const isUnsure =
        rawSelected.length === 0 ||
        rawSelected.includes(
          UNSURE_ANSWER_ID
        ) ||
        containsLegacySkip;

      if (isUnsure) {
        unsureCount += 1;
        normalizedAnswers[
          question.id
        ] = UNSURE_ANSWER_ID;
        continue;
      }

      const selectedIds =
        rawSelected.filter(
          (id) =>
            id !== UNSURE_ANSWER_ID &&
            !isSourceSkipOption(
              question,
              id
            )
        );

      const correctIds =
        getCorrectAnswerIds(
          question
        );

      normalizedAnswers[
        question.id
      ] = normalizeStoredAnswer(
        selectedIds
      );

      if (
        sameAnswerSet(
          selectedIds,
          correctIds
        )
      ) {
        score += 1;
        correctCount += 1;
      } else {
        score -= 1;
        wrongCount += 1;
      }
    }
  }

  return {
    score,
    maxScore,
    correctCount,
    wrongCount,
    unsureCount,
    normalizedAnswers,
  };
}
