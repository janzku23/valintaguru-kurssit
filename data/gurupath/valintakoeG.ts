import {
  buildGuruPath,
} from "./buildGuruPath";
import type {
  GuruPathNode,
} from "./types";

/**
 * VALINTAKOE G – yksi ja ainoa GuruPeli.
 */
const valintakoeGBaseLevels:
  GuruPathNode[] = [
    {
      id:
        "g-perusteet-1",
      questionId:
        "g-q1",
      questionSource:
        "course",
      title:
        "Aineistoon perustaminen",
      order: 1,
      type:
        "challenge",
      points: 35,
    },

    {
      id:
        "g-perusteet-2",
      questionId:
        "g-q2",
      questionSource:
        "course",
      title:
        "Looginen päättely",
      order: 2,
      type:
        "challenge",
      points: 35,
    },

    {
      id:
        "g-perusteet-vault",
      questionId:
        "g-q1",
      questionSource:
        "course",
      title:
        "Perusteiden checkpoint",
      order: 3,
      type:
        "vault",
      points: 100,
    },
  ];

export const valintakoeGGuruPath =
  buildGuruPath({
    gameId:
      "valintakoe-g",
    title:
      "Valintakoe G · GuruPeli",
    description:
      "Aineiston lukemista, loogista päättelyä ja koetilanteen tarkkuutta.",
    baseLevels:
      valintakoeGBaseLevels,
  });
