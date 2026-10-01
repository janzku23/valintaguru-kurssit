import {
  hasCourseAccess,
} from "@/lib/courseAccess";
import {
  getGuruGameDefinition,
} from "@/data/gurupath";
import type {
  GuruGameId,
} from "@/data/gurupath";

/**
 * Yksi GuruPeli voi aueta usealla eri kaupallisella kurssipaketilla.
 *
 * Esim. oikis-teho ja oikis-tiivis avaavat saman "oikis"-pelin.
 */
export async function hasGuruGameAccess(
  gameId: GuruGameId
): Promise<boolean> {
  const definition =
    getGuruGameDefinition(
      gameId
    );

  const results =
    await Promise.all(
      definition.productCourseIds.map(
        (courseId) =>
          hasCourseAccess(
            courseId
          )
      )
    );

  return results.some(Boolean);
}
