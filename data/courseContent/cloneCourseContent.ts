import type { CourseId } from "../courses";
import type { CourseContent } from "./types";

type CloneOptions = {
  courseId: CourseId;
  fromPrefix: string;
  toPrefix: string;
};

function remapId(id: string, fromPrefix: string, toPrefix: string) {
  if (id === fromPrefix) {
    return toPrefix;
  }

  if (id.startsWith(`${fromPrefix}-`)) {
    return `${toPrefix}${id.slice(fromPrefix.length)}`;
  }

  return `${toPrefix}-${id}`;
}

/**
 * Luo teknisesti täysin erillisen kurssisisällön olemassa olevasta pohjasta.
 * Tekstit säilyvät samoina, mutta teoria-, kysymys- ja flashcard-ID:t ovat
 * kurssikohtaisia, joten edistyminen ja GuruPath eivät mene sekaisin.
 */
export function cloneCourseContent(
  base: CourseContent,
  options: CloneOptions
): CourseContent {
  const { courseId, fromPrefix, toPrefix } = options;

  return {
    courseId,
    theorySections: base.theorySections.map((section) => ({
      ...section,
      id: remapId(section.id, fromPrefix, toPrefix),
      blocks: section.blocks?.map((block) => ({
        ...block,
        id: remapId(block.id, fromPrefix, toPrefix),
      })),
    })),
    quizQuestions: base.quizQuestions.map((question) => ({
      ...question,
      id: remapId(question.id, fromPrefix, toPrefix),
      answers: question.answers.map((answer) => ({ ...answer })),
      correctAnswerIds: [...question.correctAnswerIds],
    })),
    flashcards: base.flashcards.map((flashcard) => ({
      ...flashcard,
      id: remapId(flashcard.id, fromPrefix, toPrefix),
    })),
  };
}
