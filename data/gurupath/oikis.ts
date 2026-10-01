import {
  buildGuruPath,
} from "./buildGuruPath";
import type {
  GuruPathNode,
} from "./types";

/**
 * OIKIS – yksi ja ainoa GuruPeli.
 *
 * Nämä ensimmäiset tasot käyttävät nykyisiä
 * courseContent/oikis-kysymyksiä.
 *
 * Uudet GuruPeli-tehtävät lisätään questions.ts:ään.
 */
const oikisBaseLevels:
  GuruPathNode[] = [
    {
      id:
        "oikis-ajattelu-1",
      questionId:
        "oikis-q3",
      questionSource:
        "course",
      title:
        "Mitä oikeustiede tutkii?",
      order: 1,
      type:
        "challenge",
      points: 35,
    },

    {
      id:
        "oikis-ajattelu-2",
      questionId:
        "oikis-q4",
      questionSource:
        "course",
      title:
        "Oikeudellisen ajattelun vaiheet",
      order: 2,
      type:
        "challenge",
      points: 40,
    },

    {
      id:
        "oikis-ajattelu-3",
      questionId:
        "oikis-q5",
      questionSource:
        "course",
      title:
        "Valintakokeen taito",
      order: 3,
      type:
        "challenge",
      points: 40,
    },

    {
      id:
        "oikis-ajattelu-vault",
      questionId:
        "oikis-q12",
      questionSource:
        "course",
      title:
        "Ajattelun checkpoint",
      order: 4,
      type:
        "vault",
      points: 100,
    },

    {
      id:
        "oikis-sopimus-1",
      questionId:
        "oikis-q1",
      questionSource:
        "course",
      title:
        "Sopimusvapaus",
      order: 5,
      type:
        "challenge",
      points: 35,
    },

    {
      id:
        "oikis-sopimus-2",
      questionId:
        "oikis-q6",
      questionSource:
        "course",
      title:
        "Mitä sopimusoikeus käsittelee?",
      order: 6,
      type:
        "challenge",
      points: 35,
    },

    {
      id:
        "oikis-sopimus-3",
      questionId:
        "oikis-q7",
      questionSource:
        "course",
      title:
        "Mistä voidaan päättää?",
      order: 7,
      type:
        "challenge",
      points: 45,
    },

    {
      id:
        "oikis-sopimus-vault",
      questionId:
        "oikis-q8",
      questionSource:
        "course",
      title:
        "Sopimusoikeuden checkpoint",
      order: 8,
      type:
        "vault",
      points: 100,
    },

    {
      id:
        "oikis-rikos-1",
      questionId:
        "oikis-q9",
      questionSource:
        "course",
      title:
        "Rikosoikeuden tehtävä",
      order: 9,
      type:
        "challenge",
      points: 35,
    },

    {
      id:
        "oikis-rikos-2",
      questionId:
        "oikis-q10",
      questionSource:
        "course",
      title:
        "Rangaistavuus",
      order: 10,
      type:
        "challenge",
      points: 45,
    },

    {
      id:
        "oikis-rikos-3",
      questionId:
        "oikis-q11",
      questionSource:
        "course",
      title:
        "Syy-yhteys",
      order: 11,
      type:
        "challenge",
      points: 45,
    },

    {
      id:
        "oikis-rikos-vault",
      questionId:
        "oikis-q2",
      questionSource:
        "course",
      title:
        "Rikosoikeuden checkpoint",
      order: 12,
      type:
        "vault",
      points: 125,
    },
  ];

export const oikisGuruPath =
  buildGuruPath({
    gameId: "oikis",
    title:
      "Oikis · GuruPeli",
    description:
      "Aloita alhaalta ja etene tehtävä kerrallaan kohti seuraavaa tasoa.",
    baseLevels:
      oikisBaseLevels,
  });
