import type { GuruPathCourse } from "./types";

/**
 * VALINTAKOE G - GURUPATH
 *
 * UUDEN TEHTÄVÄN LISÄYS:
 * 1. Lisää varsinainen QuizQuestion data/courseContent/valintakoeG.ts-tiedostoon.
 * 2. Lisää tähän node, jonka questionId vastaa uuden kysymyksen id:tä.
 *
 * Tässä käytetään tällä hetkellä varmasti olemassa olevia kysymyksiä:
 * g-q1 ja g-q2.
 */
export const valintakoeGGuruPath: GuruPathCourse = {
  courseId: "valintakoe-g",
  title: "Valintakoe G",
  description:
    "Aineiston lukemista, loogista päättelyä ja koetilanteen tarkkuutta.",
  sections: [
    {
      id: "g-perusteet",
      title: "1. Päättelyn perusteet",
      description:
        "Aloita aineistolähtöisestä vastaamisesta ja loogisen päättelyn perustaidoista.",
      nodes: [
        {
          id: "g-perusteet-1",
          questionId: "g-q1",
          title: "Aineistoon perustaminen",
          x: 10,
          y: 58,
          next: ["g-perusteet-2"],
        },
        {
          id: "g-perusteet-2",
          questionId: "g-q2",
          title: "Looginen päättely",
          x: 40,
          y: 34,
          next: ["g-perusteet-vault"],
        },
        {
          id: "g-perusteet-vault",
          questionId: "g-q1",
          title: "Perusteiden Vault",
          type: "vault",
          x: 82,
          y: 58,
          next: [],
          xp: 100,
          score: 100,
        },
      ],
    },

    /**
     * Lisää seuraava osio käyttöön, kun olet lisännyt siihen
     * omat uniikit kysymykset courseContent/valintakoeG.ts-tiedostoon.
     *
     * Esimerkki:
     *
     * {
     *   id: "g-aineistot",
     *   title: "2. Aineistot",
     *   description: "Tekstit, taulukot ja johtopäätökset.",
     *   requiresSections: ["g-perusteet"],
     *   nodes: [
     *     {
     *       id: "g-aineistot-1",
     *       questionId: "g-q3",
     *       title: "Tekstiaineisto",
     *       x: 10,
     *       y: 55,
     *       next: ["g-aineistot-2"],
     *     },
     *   ],
     * },
     */
  ],
};
