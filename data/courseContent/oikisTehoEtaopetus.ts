import { oikisContent } from "./oikis";
import { cloneCourseContent } from "./cloneCourseContent";

export const oikisTehoEtaopetusContent =
  cloneCourseContent(
    oikisContent,
    {
      courseId:
        "oikis-teho-etaope",
      fromPrefix: "oikis",
      toPrefix:
        "oikis-teho-etaope",
    }
  );
