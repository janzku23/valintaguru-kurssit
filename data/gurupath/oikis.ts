import {
  buildGuruPath,
} from "./buildGuruPath";

/**
 * Oikis GuruPeli.
 *
 * Kysymyksiä EI määritellä täällä.
 * Kaikki kysymykset tulevat:
 *
 * data/gurupath/questions.ts
 */
export const oikisGuruPath =
  buildGuruPath({
    gameId: "oikis",

    title:
      "Oikis · GuruPeli",

    description:
      "Etene taso kerrallaan ja kerää pisteitä.",
  });
