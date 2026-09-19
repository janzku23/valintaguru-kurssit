import type { PracticeExam } from "@/data/practiceExams/types";
import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";

export type PracticeExamAnswers = Record<string, string>;

export function scorePracticeExam(exam: PracticeExam, answers: PracticeExamAnswers) {
  let correctCount = 0;
  let wrongCount = 0;
  let unsureCount = 0;
  const normalizedAnswers: PracticeExamAnswers = {};

  for (const section of exam.sections) {
    for (const question of section.questions) {
      const selected = answers[question.id] ?? UNSURE_ANSWER_ID;
      normalizedAnswers[question.id] = selected;

      if (selected === UNSURE_ANSWER_ID) unsureCount += 1;
      else if (selected === question.correctAnswerId) correctCount += 1;
      else wrongCount += 1;
    }
  }

  return {
    score: correctCount - wrongCount,
    maxScore: correctCount + wrongCount + unsureCount,
    correctCount,
    wrongCount,
    unsureCount,
    normalizedAnswers,
  };
}
