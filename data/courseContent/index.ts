import type { CourseId } from "../courses";
import type { CourseContent, TheoryCourse } from "./types";

import { oikisContent } from "./oikis";
import { oikisTiivisContent } from "./oikisTiivis";
import { oikisTehoContent } from "./oikisTeho";
import { valintakoeGContent } from "./valintakoeG";
import { valintakoeGEtaopetusContent } from "./valintakoeGEtaopetus";
import { yoContent } from "./yo";

export * from "./types";

export const courseContent: Record<CourseId, CourseContent> = {
  oikis: oikisContent,
  "oikis-tiivis": oikisTiivisContent,
  "oikis-teho": oikisTehoContent,
  "valintakoe-g": valintakoeGContent,
  "valintakoe-g-etaope": valintakoeGEtaopetusContent,
  yo: yoContent,
};

export const theoryCourses: TheoryCourse[] = [
  {
    id: "oikis",
    title: "Kyssäripankki (Oikis)",
    sections: oikisContent.theorySections,
  },
  {
    id: "oikis-tiivis",
    title: "Oikis Tiivis - Ennakkomateriaalin hallintaan",
    sections: oikisTiivisContent.theorySections,
  },
  {
    id: "oikis-teho",
    title: "Oikis Teho + Etäopetus",
    sections: oikisTehoContent.theorySections,
  },
  {
    id: "valintakoe-g",
    title: "Valintakoe G",
    sections: valintakoeGContent.theorySections,
  },
  {
    id: "valintakoe-g-etaope",
    title: "Valintakoe G + Etäopetus",
    sections: valintakoeGEtaopetusContent.theorySections,
  },
  {
    id: "yo",
    title: "YO-kokeet",
    sections: yoContent.theorySections,
  },
];

export function getCourseContent(courseId: CourseId): CourseContent {
  return courseContent[courseId];
}
