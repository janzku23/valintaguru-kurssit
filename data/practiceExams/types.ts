import type { CourseId } from "@/data/courses";

export type PracticeExamCourseId = Extract<CourseId, "oikis" | "valintakoe-g">;
export const UNSURE_ANSWER_ID = "__unsure__";

export type PracticeExamOption = { id: string; text: string };

export type PracticeExamQuestion = {
  id: string;
  prompt: string;
  options: PracticeExamOption[];
  correctAnswerId: string;
  explanation?: string;
};

export type PracticeExamSection = {
  id: string;
  title: string;
  description?: string;
  questions: PracticeExamQuestion[];
};

export type PracticeExam = {
  id: string;
  version: number;
  courseId: PracticeExamCourseId;
  title: string;
  description: string;
  durationMinutes: number;
  sections: PracticeExamSection[];
};

export type PublicPracticeExam = {
  id: string;
  version: number;
  courseId: PracticeExamCourseId;
  title: string;
  description: string;
  durationMinutes: number;
  questionCount: number;
  sections: Array<{
    id: string;
    title: string;
    description?: string;
    questions: Array<{
      id: string;
      prompt: string;
      options: PracticeExamOption[];
    }>;
  }>;
};
