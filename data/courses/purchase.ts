/**
 * Yksi paikka kaikille Holvi-linkeille.
 *
 * Nyt kaikki kurssit vievät ValintaGurun Holvi-kaupan etusivulle.
 * Kun luot jokaiselle tuotteelle oman Holvi-tuotesivun, vaihda vain
 * kyseisen avaimen URL tähän tiedostoon.
 */
export const HOLVI_STORE_URL = "https://holvi.com/shop/ValintaGuru/";

export const COURSE_PURCHASE_URLS = {
  oikis: HOLVI_STORE_URL,
  "oikis-tiivis": HOLVI_STORE_URL,
  "oikis-teho": HOLVI_STORE_URL,
  "valintakoe-g": HOLVI_STORE_URL,
  "valintakoe-g-etaope": HOLVI_STORE_URL,
  yo: HOLVI_STORE_URL,
} as const;
