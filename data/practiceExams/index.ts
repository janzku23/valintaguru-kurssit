import "server-only";
import type { CourseId } from "@/data/courses";

import { oikisPracticeExams } from "./oikis";
import { oikisTehoPracticeExams } from "./oikisteho";
import { oikisTehoEtaopetusPracticeExams } from "./oikistehoEtaopetus";

import type {
  PracticeExam,
  PracticeExamCourseId,
  PublicPracticeExam,
} from "./types";
import { getCorrectAnswerIds } from "./types";

export * from "./types";

const exams: Partial<Record<PracticeExamCourseId, PracticeExam[]>> = {
  oikis: oikisPracticeExams,
  "oikis-teho": oikisTehoPracticeExams,
  "oikis-teho-etaope": oikisTehoEtaopetusPracticeExams,
};

export function isPracticeExamCourseId(
  value: CourseId | string
): value is PracticeExamCourseId {
  return (
    value === "oikis" ||
    value === "oikis-teho" ||
    value === "oikis-teho-etaope"
  );
}

export function getPracticeExamsForCourse(
  courseId: CourseId | string
): PracticeExam[] {
  return isPracticeExamCourseId(courseId)
    ? exams[courseId] ?? []
    : [];
}

export function getPracticeExam(
  courseId: CourseId | string,
  examId: string
): PracticeExam | null {
  return (
    getPracticeExamsForCourse(courseId).find(
      (exam) => exam.id === examId
    ) ?? null
  );
}

export function getPracticeExamQuestionCount(
  exam: PracticeExam
): number {
  return exam.sections.reduce(
    (sum, section) => sum + section.questions.length,
    0
  );
}

export function toPublicPracticeExam(
  exam: PracticeExam
): PublicPracticeExam {
  return {
    id: exam.id,
    version: exam.version,
    courseId: exam.courseId,
    title: exam.title,
    description: exam.description,
    durationMinutes: exam.durationMinutes,
    questionCount: getPracticeExamQuestionCount(exam),

    // Nämä kaksi ovat tärkeät aloitusnäkymälle.
    articleUrl: exam.articleUrl,
    intro: exam.intro,

    sections: exam.sections.map((section) => ({
      id: section.id,
      title: section.title,
      description: section.description,
      questions: section.questions.map((question) => ({
        id: question.id,
        prompt: question.prompt,
        options: question.options,
        allowsMultipleAnswers:
          getCorrectAnswerIds(question).length > 1,
      })),
    })),
  };
}
