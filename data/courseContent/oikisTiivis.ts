import { oikisContent } from "./oikis";
import { cloneCourseContent } from "./cloneCourseContent";

export const oikisTiivisContent = cloneCourseContent(oikisContent, {
  courseId: "oikis-tiivis",
  fromPrefix: "oikis",
  toPrefix: "oikis-tiivis",
});
