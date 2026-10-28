import { oikisTehoContent } from "./oikisTeho";
import { cloneCourseContent } from "./cloneCourseContent";

/**
 * Etäopetus seuraa Oikis Tehon sisältöä automaattisesti.
 * Kurssin, teorioiden, kysymysten ja flashcardien ID:t pysyvät kuitenkin
 * etäopetukselle ominaan, jotta opiskelijoiden suoritukset eivät sekoitu.
 * Säilytä olemassa oleva courseId: sitä käytetään myös muualla sovelluksessa.
 */
export const oikisTehoEtaopetusContent = cloneCourseContent(oikisTehoContent, {
  courseId: "oikis-teho-etaope",
  fromPrefix: "oikis-teho",
  toPrefix: "oikis-teho-etaope",
});
