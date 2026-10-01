import type {
  CourseId,
} from "@/data/courses";
import type {
  GuruGameId,
} from "./types";

export type GuruGameDefinition = {
  id: GuruGameId;
  title: string;
  description: string;

  /**
   * Mikä tahansa näistä kurssioikeuksista
   * avaa saman yhden GuruPelin.
   */
  productCourseIds:
    readonly CourseId[];
};

export const guruGameDefinitions: Record<
  GuruGameId,
  GuruGameDefinition
> = {
  oikis: {
    id: "oikis",
    title: "Oikis",
    description:
      "Yksi yhteinen Oikis GuruPeli kaikille Oikis-kurssipaketeille.",
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
    description:
      "Yksi yhteinen Valintakoe G GuruPeli kaikille G-kurssipaketeille.",
    productCourseIds: [
      "valintakoe-g",
      "valintakoe-g-etaope",
    ],
  },
};

export const guruGameIds: GuruGameId[] = [
  "oikis",
  "valintakoe-g",
];

export function isGuruGameId(
  value: string
): value is GuruGameId {
  return (
    value === "oikis" ||
    value === "valintakoe-g"
  );
}

export function getGuruGameDefinition(
  gameId: GuruGameId
): GuruGameDefinition {
  return guruGameDefinitions[gameId];
}
