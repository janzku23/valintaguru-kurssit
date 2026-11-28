import {
  getValintakoeGReadingCategory,
  type ValintakoeGReadingCategory,
} from "@/data/valintakoeGExercises/categories";

type GuruValintakoeGCategoryInfo = Pick<
  ValintakoeGReadingCategory,
  "name" | "studentTip"
>;

/** GuruPeli käyttää samaa luokitusta ja samoja vinkkejä kuin harjoitukset. */
export function getGuruValintakoeGCategoryInfo(
  categoryId?: number | null
): GuruValintakoeGCategoryInfo | null {
  return getValintakoeGReadingCategory(categoryId);
}

/** Säilytetty myös aiemman koodipaketin kanssa yhteensopivaksi. */
export function getGuruValintakoeGCategoryName(categoryId?: number | null): string | null {
  return getGuruValintakoeGCategoryInfo(categoryId)?.name ?? null;
}
