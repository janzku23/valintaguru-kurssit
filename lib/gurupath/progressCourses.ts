import { getGuruGameDefinition, guruGameIds } from "@/data/gurupath/gameConfig";
import type { GuruGameAccessState } from "@/data/gurupath/types";

/** A game's history belongs to the game, across its commercial course variants. */
export function getGuruProgressCourseIds(access: GuruGameAccessState) {
  if (!access.oikis.hasAccess && !access.valintakoeG.hasAccess) return [];
  // Shared questions keep their completion even if the user's course family changes.
  return guruGameIds.flatMap((gameId) => [...getGuruGameDefinition(gameId).productCourseIds]);
}

export function getGuruGameForCourse(courseId: string) {
  return guruGameIds.find((id) => getGuruGameDefinition(id).productCourseIds
    .some((value) => value === courseId));
}

export function getGuruProgressCoursesForCourse(courseId: string, access: GuruGameAccessState) {
  const gameId = getGuruGameForCourse(courseId);
  return gameId && (gameId === "oikis" ? access.oikis : access.valintakoeG).hasAccess
    ? [...getGuruGameDefinition(gameId).productCourseIds]
    : [];
}
