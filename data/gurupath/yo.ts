import type { GuruPathCourse } from "./types";

/**
 * YO - GURUPATH
 *
 * Nykyisestä courseContentista löytyvät varmasti yo-q1 ja yo-q2.
 * Kun lisäät YO-kysymyksiä, voit tehdä tänne esimerkiksi erilliset
 * biologian, kemian ja fysiikan polut.
 */
export const yoGuruPath: GuruPathCourse = {
  courseId: "yo",
  title: "YO-valmennus",
  description:
    "YO-aineiden osaamista yhdistävä pelillinen harjoittelupolku.",
  sections: [
    {
      id: "yo-luonnontieteet",
      title: "1. Luonnontieteiden startti",
      description:
        "Biologian ja kemian nykyisistä perustehtävistä rakennettu aloituspolku.",
      nodes: [
        {
          id: "yo-startti-1",
          questionId: "yo-q1",
          title: "Biologia",
          x: 10,
          y: 58,
          next: ["yo-startti-2"],
        },
        {
          id: "yo-startti-2",
          questionId: "yo-q2",
          title: "Kemia",
          x: 43,
          y: 34,
          next: ["yo-startti-vault"],
        },
        {
          id: "yo-startti-vault",
          questionId: "yo-q2",
          title: "Startti Vault",
          type: "vault",
          x: 84,
          y: 58,
          next: [],
          xp: 100,
          score: 100,
        },
      ],
    },

    /**
     * Suositeltu jatkorakenne:
     *
     * "yo-biologia"
     * "yo-kemia"
     * "yo-fysiikka"
     * "yo-terveystieto"
     *
     * Jokainen voi olla oma GuruPathSection.
     */
  ],
};
