import { valintakoeGContent } from "./valintakoeG";
import { cloneCourseContent } from "./cloneCourseContent";

/**
 * Etäopetusversio perii aina Valintakoe G:n teoriat,
 * harjoitukset ja flashcardit.
 *
 * Kun lisäät uuden teorian valintakoeG.ts-tiedostoon,
 * se tulee automaattisesti myös tähän kurssiin.
 */
export const valintakoeGEtaopetusContent = cloneCourseContent(
  valintakoeGContent,
  {
    courseId: "valintakoe-g-etaope",
    fromPrefix: "g",
    toPrefix: "g-etaope",
  }
);
