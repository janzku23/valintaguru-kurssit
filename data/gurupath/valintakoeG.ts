import {
  buildGuruPath,
} from "./buildGuruPath";

/**
 * Valintakoe G GuruPeli.
 *
 * Kysymyksiä EI määritellä täällä.
 * Kaikki kysymykset tulevat:
 *
 * data/gurupath/questions.ts
 */
export const valintakoeGGuruPath =
  buildGuruPath({
    gameId:
      "valintakoe-g",

    title:
      "Valintakoe G · GuruPeli",

    description:
      "Etene taso kerrallaan ja harjoittele aineiston käsittelyä.",
  });
