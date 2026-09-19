import "server-only";
import type { CourseId } from "@/data/courses";
import { oikisPracticeExams } from "./oikis";
import { valintakoeGPracticeExams } from "./valintakoeG";
import type { PracticeExam, PracticeExamCourseId, PublicPracticeExam } from "./types";

export * from "./types";

const exams: Record<PracticeExamCourseId, PracticeExam[]> = {
  oikis: oikisPracticeExams,
  "valintakoe-g": valintakoeGPracticeExams,
};

export function isPracticeExamCourseId(value: CourseId | string): value is PracticeExamCourseId {
  return value === "oikis" || value === "valintakoe-g";
}

export function getPracticeExamsForCourse(courseId: CourseId | string): PracticeExam[] {
  return isPracticeExamCourseId(courseId) ? exams[courseId] : [];
}

export function getPracticeExam(courseId: CourseId | string, examId: string): PracticeExam | null {
  return getPracticeExamsForCourse(courseId).find((exam) => exam.id === examId) ?? null;
}

export function getPracticeExamQuestionCount(exam: PracticeExam): number {
  return exam.sections.reduce((sum, section) => sum + section.questions.length, 0);
}

export function toPublicPracticeExam(exam: PracticeExam): PublicPracticeExam {
  return {
    id: exam.id,
    version: exam.version,
    courseId: exam.courseId,
    title: exam.title,
    description: exam.description,
    durationMinutes: exam.durationMinutes,
    questionCount: getPracticeExamQuestionCount(exam),
    sections: exam.sections.map((section) => ({
      id: section.id,
      title: section.title,
      description: section.description,
      questions: section.questions.map((question) => ({
        id: question.id,
        prompt: question.prompt,
        options: question.options,
      })),
    })),
  };
}
