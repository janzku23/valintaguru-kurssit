import type { CourseId } from "../courses";

export type TheoryEmbed = {
  type: "canva";
  title: string;
  url: string;
};

export type TheorySection = {
  id: string;
  title: string;
  content: string;
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