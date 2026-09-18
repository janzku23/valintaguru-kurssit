import { oikisGuruPath } from "./oikis";
import { cloneGuruPath } from "./cloneGuruPath";

export const oikisTiivisGuruPath = cloneGuruPath(oikisGuruPath, {
  courseId: "oikis-tiivis",
  title: "Oikis Tiivis - Ennakkomateriaalin hallintaan",
  description: "Oikis Tiiviin oma pelillinen harjoittelupolku.",
  fromPrefix: "oikis",
  toPrefix: "oikis-tiivis",
  questionFromPrefix: "oikis",
  questionToPrefix: "oikis-tiivis",
});
