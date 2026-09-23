import "server-only";

import { valintakoeGExercise1Base } from "./exercise1";
import type {
  PublicValintakoeGExercise,
  ValintakoeGCourseId,
  ValintakoeGExercise,
} from "./types";

export * from "./types";

export function isValintakoeGCourseId(
  value: string
): value is ValintakoeGCourseId {
  return (
    value === "valintakoe-g" ||
    value === "valintakoe-g-etaope"
  );
}

const baseExercises = [valintakoeGExercise1Base];

export function getValintakoeGExercises(
  courseId: ValintakoeGCourseId
): ValintakoeGExercise[] {
  return baseExercises.map((exercise) => ({
    ...exercise,
    courseId,
  }));
}

export function getValintakoeGExercise(
  courseId: string,
  exerciseId: string
): ValintakoeGExercise | null {
  if (!isValintakoeGCourseId(courseId)) {
    return null;
  }

  return (
    getValintakoeGExercises(courseId).find(
      (exercise) => exercise.id === exerciseId
    ) ?? null
  );
}

export function toPublicValintakoeGExercise(
  exercise: ValintakoeGExercise
): PublicValintakoeGExercise {
  return {
    id: exercise.id,
    version: exercise.version,
    courseId: exercise.courseId,
    title: exercise.title,
    description: exercise.description,
    durationMinutes: exercise.durationMinutes,
    difficulty: exercise.difficulty,
    articleTitle: exercise.articleTitle,
    articleUrl: exercise.articleUrl,
    notice: exercise.notice,
    questionCount: exercise.questions.length,
    questions: exercise.questions.map((question) => ({
      id: question.id,
      prompt: question.prompt,
      options: question.options,
      allowsMultipleAnswers:
        question.correctAnswerIds.length > 1 ||
        question.questionType === "multiple",
    })),
  };
}
