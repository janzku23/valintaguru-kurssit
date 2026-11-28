export type ValintakoeGReadingCategory = {
  id: number;
  name: string;
  description: string;
  studentTip: string;
};

/**
 * Valintakoe G:n sovitut 14 luetun ymmärtämisen tehtäväkategoriaa.
 * Kategorian id on pysyvä tunniste; päivitä myös muualla käytetyt vanhat categoryId:t.
 */
export const VALINTAKOE_G_READING_CATEGORIES = [
  {
    id: 1,
    name: "Suora tiedon paikantaminen",
    description: "Tehtävässä etsitään aineistosta yksittäinen, täsmällisesti ilmaistu tieto.",
    studentTip: "Poimi kysymyksen avainsanat ja varmista vastaus suoraan aineiston oikeasta kohdasta.",
  },
  {
    id: 2,
    name: "Parafraasin tunnistaminen",
    description: "Tehtävässä tunnistetaan aineiston kanssa samaa tarkoittava ilmaus, vaikka sanavalinnat tai tiivistystapa muuttuvat.",
    studentTip: "Vertaa merkityksiä, älä pelkkiä sanoja. Tarkista, että väitteen rajaukset säilyvät.",
  },
  {
    id: 3,
    name: "Merkityksen tai kehityssuunnan kääntäminen",
    description: "Tehtävässä väitteen merkitys, vastakkaisuus tai aineistossa kuvattu muutoksen suunta on käännetty.",
    studentTip: "Tarkista erityisesti kiellot sekä se, lisääntyykö vai väheneekö jokin ja mihin suuntaan muutos tapahtuu.",
  },
  {
    id: 4,
    name: "Relaation suunnan vaihtaminen",
    description: "Tehtävässä kahden asian välinen suhde esitetään päinvastaisena kuin aineistossa.",
    studentTip: "Tarkista, kumpi asia liittyy kumpaan ja mikä vaikuttaa mihin; käsitteiden esiintyminen ei yksin riitä.",
  },
  {
    id: 5,
    name: "Oikea tieto väärässä kategoriassa",
    description: "Aineistossa oikea tieto liitetään väärään ryhmään, käsitteeseen tai ilmiöön.",
    studentTip: "Varmista tiedon lisäksi, mihin ryhmään tai käsitteeseen se aineistossa kuuluu.",
  },
  {
    id: 6,
    name: "Ajankohdan muuttaminen",
    description: "Aineiston tapahtuma, havainto tai tieto sijoitetaan väärään ajankohtaan tai vaiheeseen.",
    studentTip: "Etsi aikamääreet ja tarkista, tapahtuiko asia ennen vai jälkeen mainitun vaiheen.",
  },
  {
    id: 7,
    name: "Kohteen, toimijan tai lähteen vaihtaminen",
    description: "Väitteessä vaihdetaan se, ketä tieto koskee, kuka toimii tai kuka esittää näkemyksen.",
    studentTip: "Tarkista erikseen väitteen kohde, toimija ja lähde; älä sekoita tutkijan tulkintaa lainattuun näkemykseen.",
  },
  {
    id: 8,
    name: "Absolutisointi",
    description: "Aineiston rajallinen tai ehdollinen väite muutetaan liian ehdottomaksi.",
    studentTip: "Varo sanoja aina, kaikki, vain, täysin ja ei koskaan. Tarkista, onko aineiston ilmaus lievempi.",
  },
  {
    id: 9,
    name: "Numeron tai määrän muuttaminen",
    description: "Aineistossa esitetty numero, lukumäärä tai määrää rajaava ilmaus muutetaan.",
    studentTip: "Tarkista sekä luku että ilmaukset noin, yli, alle ja vähintään.",
  },
  {
    id: 10,
    name: "Suuruussuhteen muuttaminen",
    description: "Aineistossa esitettyjen määrien, osuuksien tai ryhmien keskinäinen suuruusjärjestys muuttuu.",
    studentTip: "Vertaile, mikä on suurempi, pienempi tai yleisempi ja kuinka suuri ero todella on.",
  },
  {
    id: 11,
    name: "Loogisen merkityksen muuttaminen",
    description: "Väitteessä muutetaan aineiston loogista sisältöä esimerkiksi sekoittamalla ryhmän ulkopuolelle jääminen vastakkaiseen ääripäähän.",
    studentTip: "Älä tee päätelmää, jota aineisto ei oikeuta: esimerkiksi 'ei vahvasti samaa mieltä' ei tarkoita 'täysin eri mieltä'.",
  },
  {
    id: 12,
    name: "Varmuusasteen muuttaminen",
    description: "Mahdollinen, todennäköinen tai ehdollinen väite esitetään aineistoa varmempana tai epävarmempana.",
    studentTip: "Vertaa tarkasti ilmauksia voi, saattaa, todennäköisesti, yleensä ja varmasti.",
  },
  {
    id: 13,
    name: "Syy-, seuraus- tai ehtosuhteen muuttaminen",
    description: "Tehtävässä sekoitetaan syy ja seuraus, yhteys ja kausaliteetti tai ehdon ja seurauksen välinen suhde.",
    studentTip: "Selvitä, mikä on syy, seuraus ja ehto. Pelkkä yhteys ei osoita syytä, eikä ehtolausetta voi automaattisesti kääntää.",
  },
  {
    id: 14,
    name: "Rajauksen tai poikkeuksen muuttaminen",
    description: "Aineiston soveltamisalaa rajaava ehto tai poikkeus poistetaan, lisätään tai muutetaan.",
    studentTip: "Huomaa erityisesti ilmaukset paitsi, vain jos, lukuun ottamatta, tietyissä tilanteissa ja kuitenkin.",
  },
] as const satisfies readonly ValintakoeGReadingCategory[];

export type ValintakoeGCategoryId =
  (typeof VALINTAKOE_G_READING_CATEGORIES)[number]["id"];

export const VALINTAKOE_G_MIN_SKILL_SAMPLE = 5;

export function getValintakoeGReadingCategory(categoryId?: number | null) {
  return (
    VALINTAKOE_G_READING_CATEGORIES.find(
      (category) => category.id === categoryId
    ) ?? null
  );
}

export function isValintakoeGReadingCategoryId(
  value: unknown
): value is ValintakoeGCategoryId {
  return typeof value === "number" && getValintakoeGReadingCategory(value) !== null;
}
