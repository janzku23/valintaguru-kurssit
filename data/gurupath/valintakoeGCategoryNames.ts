import type { ValintakoeGCategoryId } from "./types";

/**
 * Valintakoe G -harjoitusten categories.ts:stä poimitut nimet ja studentTip-vinkit.
 * Pidä nämä tiedot samoina kuin alkuperäisessä kategoriataulukossa.
 * Oma moduuli, koska harjoitusten categories.ts-tiedoston kansiopolkua
 * ei ole saatavilla tämän erillisen koodipaketin lähteissä.
 */
type GuruValintakoeGCategoryInfo = {
  name: string;
  studentTip: string;
};

const VALINTAKOE_G_CATEGORY_INFO: Record<ValintakoeGCategoryId, GuruValintakoeGCategoryInfo> = {
  1: { name: "Suora tiedon paikantaminen", studentTip: "Poimi kysymyksestä avainsanat ja varmista vastaus niiden ympärillä olevasta tekstikohdasta." },
  2: { name: "Synonyymiparafraasi", studentTip: "Älä etsi vain samoja sanoja. Vertaa vaihtoehdon merkitystä aineiston merkitykseen." },
  3: { name: "Tiivistävä parafraasi", studentTip: "Tarkista, säilyvätkö tiivistelmässä tekstin keskeinen väite, rajaus ja suhteet." },
  4: { name: "Yhden ratkaisevan sanan vaihtaminen", studentTip: "Kun väite näyttää lähes sanatarkasti oikealta, tarkista nimet, käsitteet ja rajaavat sanat erityisen tarkasti." },
  5: { name: "Vastakohdaksi muuttaminen", studentTip: "Kiinnitä huomiota kieltoihin ja sanoihin, jotka muuttavat väitteen suunnan päinvastaiseksi." },
  6: { name: "Relaation suunnan vaihtaminen", studentTip: "Älä tarkista vain sitä, esiintyvätkö molemmat käsitteet tekstissä. Tarkista myös, kumpi vaikuttaa kumpaan tai mikä muuttuu miksi." },
  7: { name: "Järjestyksen vaihtaminen merkityksen säilyessä", studentTip: "Tarkista järjestys vaihe vaiheelta, vaikka vaihtoehdossa käytettäisiin samoja tuttuja käsitteitä." },
  8: { name: "Oikea tieto väärässä kategoriassa", studentTip: "Tarkista luvun tai ominaisuuden lisäksi aina, mihin käsitteeseen tai ryhmään se aineistossa kuuluu." },
  9: { name: "Oikea tieto väärässä ajankohdassa", studentTip: "Tarkista tapahtuiko asia ennen vai jälkeen kysymyksessä mainitun tapahtuman." },
  10: { name: "Kehityssuunnan kääntäminen", studentTip: "Kysy itseltäsi: mikä lisääntyy, vähenee, vie tilaa tai muuttuu — ja mihin suuntaan." },
  11: { name: "Kohdejoukon muuttaminen", studentTip: "Tarkista aina, keitä väite koskee: kaikkia, osaa, tiettyä ryhmää vai poikkeusta." },
  12: { name: "Absolutisointi", studentTip: "Kiinnitä huomiota sanoihin kuten aina, kaikki, vain, täysin, yksinomaan ja ei koskaan." },
  13: { name: "Numeron tai määrän muuttaminen", studentTip: "Tarkista sekä numero että sitä rajaava sana, kuten noin, yli, alle tai täsmälleen." },
  14: { name: "Suuruussuhteen muuttaminen", studentTip: "Varmista kumpi on suurempi, pienempi tai yleisempi ja kuinka suuri ero aineistossa todella on." },
  15: { name: "Looginen komplementti", studentTip: "Pidä ryhmän määritelmä samana: esimerkiksi 'ei luota vahvasti' ei tarkoita automaattisesti 'ei luota lainkaan'." },
  16: { name: "Varmuusasteen muuttaminen", studentTip: "Vertaa modaalisia ilmauksia kuten voi, saattaa, todennäköisesti, yleensä ja varmasti." },
  17: { name: "Väittäjän tai lähteen vaihtaminen", studentTip: "Tarkista aina, onko kyse kirjoittajan, tutkimuksen, haastatellun henkilön vai muun lähteen näkemyksestä." },
  18: { name: "Ehto–seuraus-suhteen muuttaminen", studentTip: "Tarkista, mikä on ehto ja mikä seuraus. Älä automaattisesti käännä ehtolausetta toisin päin." },
  19: { name: "Kausaalisuuden ja yhteyden sekoittaminen", studentTip: "Jos aineisto kertoo vain yhteydestä, älä päättele syytä ilman erillistä perustetta." },
  20: { name: "Rajauksen tai poikkeuksen huomaaminen", studentTip: "Lue erityisen tarkasti sanat kuten vain jos, paitsi, lukuun ottamatta, yleensä, tietyissä tilanteissa ja kuitenkin." },
};

export function getGuruValintakoeGCategoryInfo(categoryId?: number | null): GuruValintakoeGCategoryInfo | null {
  if (typeof categoryId !== "number" || !Number.isInteger(categoryId)) return null;
  return VALINTAKOE_G_CATEGORY_INFO[categoryId as ValintakoeGCategoryId] ?? null;
}

/** Säilytetty myös aiemman koodipaketin kanssa yhteensopivaksi. */
export function getGuruValintakoeGCategoryName(categoryId?: number | null): string | null {
  return getGuruValintakoeGCategoryInfo(categoryId)?.name ?? null;
}
