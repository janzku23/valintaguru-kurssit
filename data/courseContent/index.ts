import type { CourseId } from "../courses";
import type { CourseContent, TheoryCourse } from "./types";

import { oikisContent } from "./oikis";
import { valintakoeGContent } from "./valintakoeG";
import { yoContent } from "./yo";

export * from "./types";

export const courseContent: Record<CourseId, CourseContent> = {
  oikis: oikisContent,
  "valintakoe-g": valintakoeGContent,
  yo: yoContent,
};

export const theoryCourses: TheoryCourse[] = [
  {
    id: "oikis",
    title: "Oikis",
    sections: oikisContent.theorySections,
  },
  {
    id: "valintakoe-g",
    title: "Valintakoe G",
    sections: valintakoeGContent.theorySections,
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