import "server-only";

import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";
import { getGuruPath, getGuruGameQuestion } from "@/data/gurupath";
import type { GuruGameQuestion, GuruPathNode } from "@/data/gurupath/types";
import type { CourseId } from "@/data/courses";

type AuthorizedNode = {
  question: GuruGameQuestion;
  node: GuruPathNode;
  index: number;
  levels: GuruPathNode[];
  courseIds: CourseId[];
  source: "path-node" | "vault";
};

export async function authorizeGuruNode(
  courseId: string,
  nodeId: string,
): Promise<AuthorizedNode | null> {
  if (!nodeId.startsWith("gurupeli:") || nodeId.length > 140) return null;

  const access = await getGuruGameAccessState();
  if (!access.viewId) return null;
  const path = getGuruPath(access.viewId);
  const questionId = nodeId.slice("gurupeli:".length);
  const index = path.levels.findIndex((node) => node.questionId === questionId);
  if (index < 0) return null;
  const node = path.levels[index];
  const question = getGuruGameQuestion(questionId);
  if (!question) return null;

  // This is the same course selection logic as the combined game map.
  let expectedCourseId: CourseId | null = null;
  if (node.category === "oikis") expectedCourseId = access.oikis.accessCourseId;
  else if (node.category === "valintakoe-g") expectedCourseId = access.valintakoeG.accessCourseId;
  else if (access.viewId === "oikis") expectedCourseId = access.oikis.accessCourseId;
  else if (access.viewId === "valintakoe-g") expectedCourseId = access.valintakoeG.accessCourseId;
  else expectedCourseId = access.oikis.accessCourseId ?? access.valintakoeG.accessCourseId;

  if (!expectedCourseId || courseId !== expectedCourseId) return null;
  const courseIds = [access.oikis.accessCourseId, access.valintakoeG.accessCourseId]
    .filter((value): value is CourseId => value !== null);
  return {
    question,
    node,
    index,
    levels: path.levels,
    courseIds,
    source: node.type === "vault" ? "vault" : "path-node",
  };
}

export function eventMatchesQuestion(sourceId: string, questionId: string) {
  return sourceId === `gurupeli:${questionId}` || sourceId.endsWith(`:${questionId}`);
}

export const GURU_WRONG_COOLDOWN_SECONDS = 15;
export const GURU_WRONG_PENALTY = 5;
