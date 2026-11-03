import type { CourseId } from "./types";

export const HOLVI_STORE_URL =
  "https://holvi.com/shop/ValintaGuru/";

export const SHOP_STORE_URL = "/kauppa";

export const COURSE_PURCHASE_URLS: Record<CourseId, string> = {
  oikis: "/kauppa?course=oikis",
  "oikis-tiivis": "/kauppa?course=oikis-tiivis",
  "oikis-teho": "/kauppa?course=oikis-teho",
  "oikis-teho-etaope": "/kauppa?course=oikis-teho-etaope",
  "valintakoe-g": "/kauppa?course=valintakoe-g",
  "valintakoe-g-etaope": "/kauppa?course=valintakoe-g-etaope",
  yo: SHOP_STORE_URL,
};

// Legacy reference prices for historical admin valuation only. Checkout prices come from Supabase.
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
