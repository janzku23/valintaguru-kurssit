import { oikisGuruPath } from "./oikis";
import { cloneGuruPath } from "./cloneGuruPath";

export const oikisTehoGuruPath = cloneGuruPath(oikisGuruPath, {
  courseId: "oikis-teho",
  title: "Oikis Teho + Etäopetus",
  description: "Oikis Tehon oma pelillinen harjoittelupolku.",
  fromPrefix: "oikis",
  toPrefix: "oikis-teho",
  questionFromPrefix: "oikis",
  questionToPrefix: "oikis-teho",
});
