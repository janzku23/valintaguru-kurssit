import type { CourseId } from "@/data/courses";
import type { GuruPathCourse } from "./types";

import { oikisGuruPath } from "./oikis";
import { valintakoeGGuruPath } from "./valintakoeG";
import { yoGuruPath } from "./yo";

export * from "./types";

export const guruPaths: Record<CourseId, GuruPathCourse> = {
  oikis: oikisGuruPath,
  "valintakoe-g": valintakoeGGuruPath,
  yo: yoGuruPath,
};

export function getGuruPath(courseId: CourseId): GuruPathCourse {
  return guruPaths[courseId];
}
