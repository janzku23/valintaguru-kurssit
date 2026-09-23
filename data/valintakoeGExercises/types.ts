export type ValintakoeGCourseId =
  | "valintakoe-g"
  | "valintakoe-g-etaope";

export type ValintakoeGDifficulty =
  | "easy"
  | "medium"
  | "hard";

export type ValintakoeGQuestionType =
  | "single"
  | "multiple"
  | "true_false";

export type ValintakoeGOption = {
  id: string;
  text: string;
};

export type ValintakoeGSource = {
  articleId: string;
  page?: string;
  section?: string;
};

export type ValintakoeGQuestion = {
  id: string;
  prompt: string;
  options: ValintakoeGOption[];
  correctAnswerIds: string[];
  categoryId: number;
  questionType: ValintakoeGQuestionType;
  difficulty: ValintakoeGDifficulty;
  source?: ValintakoeGSource;
  explanation?: string;
  learningPoint?: string;
};

export type ValintakoeGExercise = {
  id: string;
  version: number;
  courseId: ValintakoeGCourseId;
  title: string;
  description: string;
  durationMinutes: number;
  difficulty: ValintakoeGDifficulty;
  articleId: string;
  articleTitle: string;
  articleUrl?: string;
  notice?: string;
  questions: ValintakoeGQuestion[];
};

export type PublicValintakoeGQuestion = {
  id: string;
  prompt: string;
  options: ValintakoeGOption[];
  allowsMultipleAnswers: boolean;
};

export type PublicValintakoeGExercise = {
  id: string;
  version: number;
  courseId: ValintakoeGCourseId;
  title: string;
  description: string;
  durationMinutes: number;
  difficulty: ValintakoeGDifficulty;
  articleTitle: string;
  articleUrl?: string;
  notice?: string;
  questionCount: number;
  questions: PublicValintakoeGQuestion[];
};
