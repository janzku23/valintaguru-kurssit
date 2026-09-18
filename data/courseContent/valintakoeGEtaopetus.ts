import { valintakoeGContent } from "./valintakoeG";
import { cloneCourseContent } from "./cloneCourseContent";

export const valintakoeGEtaopetusContent = cloneCourseContent(
  valintakoeGContent,
  {
    courseId: "valintakoe-g-etaope",
    fromPrefix: "g",
    toPrefix: "g-etaope",
  }
);
