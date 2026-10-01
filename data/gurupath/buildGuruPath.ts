import { getGuruGameQuestionsForView } from "./questions";
import type { GuruGameViewId, GuruPathCourse, GuruPathNode } from "./types";

const VIEW_COPY: Record<GuruGameViewId, { title: string; description: string }> = {
  oikis: {
    title: "Oikeustiede · GuruPeli",
    description: "Oikeustieteen GuruPeli-tehtävät.",
  },
  "valintakoe-g": {
    title: "Valintakoe G · GuruPeli",
    description: "Valintakoe G:n GuruPeli-tehtävät.",
  },
  combined: {
    title: "Oikis + Valintakoe G · GuruPeli",
    description: "Yksi yhteinen polku ilman päällekkäisiä kysymyksiä.",
  },
};

export function buildGuruPath(viewId: GuruGameViewId): GuruPathCourse {
  const levels: GuruPathNode[] = getGuruGameQuestionsForView(viewId).map(
    ({ question, category }, index) => ({
      id: `${viewId}:${question.id}`,
      questionId: question.id,
      title: question.title,
      order: index + 1,
      type: "challenge",
      points: question.points ?? 35,
      category,
    })
  );

  const copy = VIEW_COPY[viewId];
  return { viewId, title: copy.title, description: copy.description, levels };
}
