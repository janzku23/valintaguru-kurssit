import type { CourseId } from "./types";

export const HOLVI_STORE_URL =
  "https://holvi.com/shop/ValintaGuru/";

export const COURSE_PURCHASE_URLS: Record<
  CourseId,
  string
> = {
  oikis: HOLVI_STORE_URL,

  "oikis-tiivis":
    "https://holvi.com/shop/ValintaGuru/product/2924c4a5d912b3900a8ff64a33acaf86/",

  "oikis-teho":
    "https://holvi.com/shop/ValintaGuru/product/cb4c0943e31b1004b46d7896c36e9ce1/",

  "oikis-teho-etaope":
    "https://holvi.com/shop/ValintaGuru/product/70897e512ad411304a55fb73963baf02/",

  "valintakoe-g":
    "https://holvi.com/shop/ValintaGuru/product/fe710d122cc569aa42c7915c961f2acf/",

  "valintakoe-g-etaope":
    "https://holvi.com/shop/ValintaGuru/product/53808fad0e707c2e4a17a92355b58b4a/",

  yo: HOLVI_STORE_URL,
};

export const COURSE_PRICES: Partial<
  Record<CourseId, string>
> = {
  "oikis-tiivis": "149 €",
  "oikis-teho": "199 €",
  "oikis-teho-etaope": "379 €",
  "valintakoe-g": "120 €",
  "valintakoe-g-etaope": "279 €",
  
};

export const PURCHASABLE_COURSE_IDS = [
  "oikis",
  "oikis-tiivis",
  "oikis-teho",
  "oikis-teho-etaope",
  "valintakoe-g",
  "valintakoe-g-etaope",
] as const satisfies readonly CourseId[];

const purchasableCourseIds =
  new Set<CourseId>(
    PURCHASABLE_COURSE_IDS
  );

export function isCoursePurchasable(
  courseId: CourseId
): boolean {
  return purchasableCourseIds.has(
    courseId
  );
}
