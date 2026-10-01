import { hasCourseAccess } from "@/lib/courseAccess";
import { getGuruGameDefinition } from "@/data/gurupath";
import type {
  GuruGameAccessSlot,
  GuruGameAccessState,
  GuruGameId,
} from "@/data/gurupath";

async function resolveGameAccess(gameId: GuruGameId): Promise<GuruGameAccessSlot> {
  const definition = getGuruGameDefinition(gameId);
  const results = await Promise.all(
    definition.productCourseIds.map(async (courseId) => ({
      courseId,
      hasAccess: await hasCourseAccess(courseId),
    }))
  );

  const match = results.find((item) => item.hasAccess);
  return {
    hasAccess: Boolean(match),
    accessCourseId: match?.courseId ?? null,
  };
}

export async function hasGuruGameAccess(gameId: GuruGameId): Promise<boolean> {
  return (await resolveGameAccess(gameId)).hasAccess;
}

export async function getGuruGameAccessState(): Promise<GuruGameAccessState> {
  const [oikis, valintakoeG] = await Promise.all([
    resolveGameAccess("oikis"),
    resolveGameAccess("valintakoe-g"),
  ]);

  const viewId =
    oikis.hasAccess && valintakoeG.hasAccess
      ? "combined"
      : oikis.hasAccess
        ? "oikis"
        : valintakoeG.hasAccess
          ? "valintakoe-g"
          : null;

  return { oikis, valintakoeG, viewId };
}
