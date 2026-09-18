import { oikisContent } from "./oikis";
import { cloneCourseContent } from "./cloneCourseContent";

export const oikisTehoContent = cloneCourseContent(oikisContent, {
  courseId: "oikis-teho",
  fromPrefix: "oikis",
  toPrefix: "oikis-teho",
});
