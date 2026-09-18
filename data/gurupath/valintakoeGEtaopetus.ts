import { valintakoeGGuruPath } from "./valintakoeG";
import { cloneGuruPath } from "./cloneGuruPath";

export const valintakoeGEtaopetusGuruPath = cloneGuruPath(
  valintakoeGGuruPath,
  {
    courseId: "valintakoe-g-etaope",
    title: "Valintakoe G + Etäopetus",
    description: "Valintakoe G + Etäopetuksen oma pelillinen harjoittelupolku.",
    fromPrefix: "g",
    toPrefix: "g-etaope",
    questionFromPrefix: "g",
    questionToPrefix: "g-etaope",
  }
);
