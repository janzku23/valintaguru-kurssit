import type { CourseId } from "@/data/courses";
import type { GuruPathCourse } from "./types";

import { oikisGuruPath } from "./oikis";
import { oikisTiivisGuruPath } from "./oikisTiivis";
import { oikisTehoGuruPath } from "./oikisTeho";
import { oikisTehoEtaopetusGuruPath } from "./oikisTehoEtaopetus";
import { valintakoeGGuruPath } from "./valintakoeG";
import { valintakoeGEtaopetusGuruPath } from "./valintakoeGEtaopetus";
import { yoGuruPath } from "./yo";

export * from "./types";

export const guruPaths: Record<
  CourseId,
  GuruPathCourse
> = {
  oikis:
    oikisGuruPath,
  "oikis-tiivis":
    oikisTiivisGuruPath,
  "oikis-teho":
    oikisTehoGuruPath,
  "oikis-teho-etaope":
    oikisTehoEtaopetusGuruPath,
  "valintakoe-g":
    valintakoeGGuruPath,
  "valintakoe-g-etaope":
    valintakoeGEtaopetusGuruPath,
  yo:
    yoGuruPath,
};

export function getGuruPath(
  courseId: CourseId
): GuruPathCourse {
  return guruPaths[
    courseId
  ];
}
