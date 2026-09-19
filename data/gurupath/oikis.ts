import type { GuruPathCourse } from "./types";

export const oikisGuruPath:
  GuruPathCourse = {
  courseId: "oikis",
  title: "Kyssäripankki",
  description:
    "Testaa oikeudellista ajattelua, sopimusoikeuden perusteita ja rikosoikeuden keskeisiä käsitteitä.",
  sections: [
    {
      id: "oikis-ajattelu",
      title:
        "1. Oikeudellinen ajattelu",
      description:
        "Ongelman tunnistaminen, oikeuslähteet, perusteleminen ja aineiston tarkka soveltaminen.",
      nodes: [
        {
          id:
            "oikis-ajattelu-1",
          questionId:
            "oikis-q3",
          title:
            "Mitä oikeustiede tutkii?",
          x: 10,
          y: 52,
          next: [
            "oikis-ajattelu-2",
            "oikis-ajattelu-3",
          ],
        },
        {
          id:
            "oikis-ajattelu-2",
          questionId:
            "oikis-q4",
          title:
            "Oikeudellisen ajattelun vaiheet",
          x: 40,
          y: 25,
          next: [
            "oikis-ajattelu-vault",
          ],
          xp: 40,
          score: 35,
        },
        {
          id:
            "oikis-ajattelu-3",
          questionId:
            "oikis-q5",
          title:
            "Valintakokeen taito",
          x: 40,
          y: 76,
          next: [
            "oikis-ajattelu-vault",
          ],
          xp: 40,
          score: 35,
        },
        {
          id:
            "oikis-ajattelu-vault",
          questionId:
            "oikis-q12",
          title:
            "Ajattelun Vault",
          type: "vault",
          x: 82,
          y: 52,
          next: [],
          xp: 100,
          score: 100,
        },
      ],
    },

    {
      id: "oikis-sopimukset",
      title:
        "2. Sopimusoikeuden perusteet",
      description:
        "Sopimusvapaus, sopimuksen kohde ja sopimuksen sitovuus.",
      requiresSections: [
        "oikis-ajattelu",
      ],
      nodes: [
        {
          id:
            "oikis-sopimus-1",
          questionId:
            "oikis-q1",
          title:
            "Sopimusvapaus",
          x: 10,
          y: 52,
          next: [
            "oikis-sopimus-2",
          ],
        },
        {
          id:
            "oikis-sopimus-2",
          questionId:
            "oikis-q6",
          title:
            "Mitä sopimusoikeus käsittelee?",
          x: 35,
          y: 28,
          next: [
            "oikis-sopimus-3",
          ],
        },
        {
          id:
            "oikis-sopimus-3",
          questionId:
            "oikis-q7",
          title:
            "Mistä voidaan päättää?",
          x: 60,
          y: 72,
          next: [
            "oikis-sopimus-vault",
          ],
          xp: 45,
          score: 40,
        },
        {
          id:
            "oikis-sopimus-vault",
          questionId:
            "oikis-q8",
          title:
            "Sopimusoikeuden Vault",
          type: "vault",
          x: 88,
          y: 46,
          next: [],
          xp: 100,
          score: 100,
        },
      ],
    },

    {
      id: "oikis-rikos",
      title:
        "3. Rikosoikeuden perusteet",
      description:
        "Rangaistavuus, tunnusmerkistö sekä rikosoikeuden keskeiset käsitteet.",
      requiresSections: [
        "oikis-sopimukset",
      ],
      nodes: [
        {
          id:
            "oikis-rikos-1",
          questionId:
            "oikis-q9",
          title:
            "Rikosoikeuden tehtävä",
          x: 10,
          y: 52,
          next: [
            "oikis-rikos-2",
            "oikis-rikos-3",
          ],
        },
        {
          id:
            "oikis-rikos-2",
          questionId:
            "oikis-q10",
          title:
            "Rangaistavuus",
          x: 42,
          y: 25,
          next: [
            "oikis-rikos-vault",
          ],
          xp: 45,
          score: 40,
        },
        {
          id:
            "oikis-rikos-3",
          questionId:
            "oikis-q11",
          title: "Syy-yhteys",
          x: 42,
          y: 76,
          next: [
            "oikis-rikos-vault",
          ],
          xp: 45,
          score: 40,
        },
        {
          id:
            "oikis-rikos-vault",
          questionId:
            "oikis-q2",
          title:
            "Rikosoikeuden Vault",
          type: "vault",
          x: 84,
          y: 52,
          next: [],
          xp: 125,
          score: 125,
        },
      ],
    },
  ],
};
