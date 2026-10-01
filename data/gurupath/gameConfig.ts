import type { CourseId } from "@/data/courses";
import type { GuruGameId, GuruGameViewId } from "./types";

type GuruGameDefinition = {
  id: GuruGameId;
  title: string;
  description: string;
  productCourseIds: readonly CourseId[];
};

export const guruGameDefinitions: Record<GuruGameId, GuruGameDefinition> = {
  oikis: {
    id: "oikis",
    title: "Oikeustiede",
    description: "Oikeustieteen GuruPeli.",
    productCourseIds: [
      "oikis",
      "oikis-tiivis",
      "oikis-teho",
      "oikis-teho-etaope",
    ],
  },
  "valintakoe-g": {
    id: "valintakoe-g",
    title: "Valintakoe G",
    description: "Valintakoe G:n GuruPeli.",
    productCourseIds: ["valintakoe-g", "valintakoe-g-etaope"],
  },
};

export const guruGameIds: GuruGameId[] = ["oikis", "valintakoe-g"];
export const guruGameViewIds: GuruGameViewId[] = ["oikis", "valintakoe-g", "combined"];

export function isGuruGameId(value: string): value is GuruGameId {
  return guruGameIds.includes(value as GuruGameId);
}

export function isGuruGameViewId(value: string): value is GuruGameViewId {
  return guruGameViewIds.includes(value as GuruGameViewId);
}

export function getGuruGameDefinition(gameId: GuruGameId) {
  return guruGameDefinitions[gameId];
}
