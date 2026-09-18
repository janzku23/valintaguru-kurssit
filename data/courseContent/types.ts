import type { CourseId } from "../courses";

export type TheoryEmbed = {
  type: "canva" | "pdf";
  title: string;
  url: string;
};

export type TheoryImage = {
  fileName: string;
  title?: string;
  description?: string;
  alt?: string;
};

export type TheoryBlock = {
  id: string;
  title: string;
  content: string;
  image?: TheoryImage;
};

export type TheorySection = {
  id: string;
  title: string;
  content: string;
  subtitle?: string;
  blocks?: TheoryBlock[];
  embed?: TheoryEmbed;
};

export type QuizAnswer = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  answers: QuizAnswer[];
  correctAnswerIds: string[];
  explanation: string;
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type CourseContent = {
  courseId: CourseId;
  theorySections: TheorySection[];
  quizQuestions: QuizQuestion[];
  flashcards: Flashcard[];
};

export type TheoryCourse = {
  id: CourseId;
  title: string;
  sections: TheorySection[];
};
