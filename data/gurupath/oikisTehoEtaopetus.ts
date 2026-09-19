import { oikisGuruPath } from "./oikis";
import { cloneGuruPath } from "./cloneGuruPath";

export const oikisTehoEtaopetusGuruPath =
  cloneGuruPath(
    oikisGuruPath,
    {
      courseId:
        "oikis-teho-etaope",
      title:
        "Oikis Teho + Etäopetus",
      description:
        "Oikis Teho + Etäopetus -kurssin oma pelillinen harjoittelupolku.",
      fromPrefix:
        "oikis",
      toPrefix:
        "oikis-teho-etaope",
      questionFromPrefix:
        "oikis",
      questionToPrefix:
        "oikis-teho-etaope",
    }
  );
