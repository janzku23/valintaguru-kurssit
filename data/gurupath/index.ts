import type {
  GuruGameId,
  GuruPathCourse,
} from "./types";

import {
  oikisGuruPath,
} from "./oikis";

import {
  valintakoeGGuruPath,
} from "./valintakoeG";

export * from "./types";
export * from "./questions";
export * from "./gameConfig";

export const guruPaths: Record<
  GuruGameId,
  GuruPathCourse
> = {
  oikis:
    oikisGuruPath,

  "valintakoe-g":
    valintakoeGGuruPath,
};

export function getGuruPath(
  gameId: GuruGameId
): GuruPathCourse {
  return guruPaths[gameId];
}
