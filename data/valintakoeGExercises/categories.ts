export type ValintakoeGReadingCategory = {
  id: number;
  name: string;
  description: string;
  studentTip: string;
};

/**
 * Kategorioiden nimet tulevat kollegan speksistä sellaisinaan.
 * description/studentTip ovat käyttöliittymän tekniset oletustekstit,
 * koska lähdedokumentti ei anna kaikille 20 kategorialle valmista kuvaus- ja vinkkitekstiä.
 * Niitä voi myöhemmin muokata ilman että categoryId:t muuttuvat.
 */
export const VALINTAKOE_G_READING_CATEGORIES: ValintakoeGReadingCategory[] = [
  {
    id: 1,
    name: "Suora tiedon paikantaminen",
    description: "Tehtävä mittaa kykyä löytää aineistosta yksittäinen täsmällinen tieto ja yhdistää se kysyttyyn asiaan.",
    studentTip: "Poimi kysymyksestä avainsanat ja varmista vastaus niiden ympärillä olevasta tekstikohdasta.",
  },
  {
    id: 2,
    name: "Synonyymiparafraasi",
    description: "Tehtävä mittaa kykyä tunnistaa sama merkitys silloin, kun asia ilmaistaan eri sanoin.",
    studentTip: "Älä etsi vain samoja sanoja. Vertaa vaihtoehdon merkitystä aineiston merkitykseen.",
  },
  {
    id: 3,
    name: "Tiivistävä parafraasi",
    description: "Tehtävä mittaa kykyä tunnistaa pidemmän tekstikohdan oikein tiivistetty pääajatus.",
    studentTip: "Tarkista, säilyvätkö tiivistelmässä tekstin keskeinen väite, rajaus ja suhteet.",
  },
  {
    id: 4,
    name: "Yhden ratkaisevan sanan vaihtaminen",
    description: "Tehtävässä muuten oikeaan väitteeseen on voitu vaihtaa yksi merkityksen ratkaisevasti muuttava sana tai käsite.",
    studentTip: "Kun väite näyttää lähes sanatarkasti oikealta, tarkista nimet, käsitteet ja rajaavat sanat erityisen tarkasti.",
  },
  {
    id: 5,
    name: "Vastakohdaksi muuttaminen",
    description: "Tehtävä mittaa kykyä huomata, jos aineiston merkitys on käännetty vastakkaiseksi.",
    studentTip: "Kiinnitä huomiota kieltoihin ja sanoihin, jotka muuttavat väitteen suunnan päinvastaiseksi.",
  },
  {
    id: 6,
    name: "Relaation suunnan vaihtaminen",
    description: "Tehtävissä pitää tunnistaa oikein kahden asian välinen suhde ja huomata, jos suhde on käännetty.",
    studentTip: "Älä tarkista vain sitä, esiintyvätkö molemmat käsitteet tekstissä. Tarkista myös, kumpi vaikuttaa kumpaan tai mikä muuttuu miksi.",
  },
  {
    id: 7,
    name: "Järjestyksen vaihtaminen merkityksen säilyessä",
    description: "Tehtävä mittaa kykyä seurata, missä järjestyksessä aineiston asiat esitetään tai tapahtuvat.",
    studentTip: "Tarkista järjestys vaihe vaiheelta, vaikka vaihtoehdossa käytettäisiin samoja tuttuja käsitteitä.",
  },
  {
    id: 8,
    name: "Oikea tieto väärässä kategoriassa",
    description: "Tehtävässä aineistosta löytyvä oikea tieto on saatettu yhdistää väärään käsitteeseen, ryhmään tai ilmiöön.",
    studentTip: "Tarkista luvun tai ominaisuuden lisäksi aina, mihin käsitteeseen tai ryhmään se aineistossa kuuluu.",
  },
  {
    id: 9,
    name: "Oikea tieto väärässä ajankohdassa",
    description: "Tehtävä mittaa kykyä sijoittaa aineistossa mainittu tieto oikeaan vaiheeseen tai ajankohtaan.",
    studentTip: "Tarkista tapahtuiko asia ennen vai jälkeen kysymyksessä mainitun tapahtuman.",
  },
  {
    id: 10,
    name: "Kehityssuunnan kääntäminen",
    description: "Tehtävä mittaa kykyä tunnistaa muutoksen tai kehityksen oikea suunta.",
    studentTip: "Kysy itseltäsi: mikä lisääntyy, vähenee, vie tilaa tai muuttuu — ja mihin suuntaan.",
  },
  {
    id: 11,
    name: "Kohdejoukon muuttaminen",
    description: "Tehtävä mittaa kykyä huomata, jos aineistossa rajattu kohdejoukko on kysymyksessä laajennettu tai kavennettu.",
    studentTip: "Tarkista aina, keitä väite koskee: kaikkia, osaa, tiettyä ryhmää vai poikkeusta.",
  },
  {
    id: 12,
    name: "Absolutisointi",
    description: "Tehtävä mittaa kykyä huomata liian ehdottomaksi muutettu väite.",
    studentTip: "Kiinnitä huomiota sanoihin kuten aina, kaikki, vain, täysin, yksinomaan ja ei koskaan.",
  },
  {
    id: 13,
    name: "Numeron tai määrän muuttaminen",
    description: "Tehtävä mittaa kykyä tarkistaa luvut, määrät ja niitä rajaavat ilmaukset täsmällisesti.",
    studentTip: "Tarkista sekä numero että sitä rajaava sana, kuten noin, yli, alle tai täsmälleen.",
  },
  {
    id: 14,
    name: "Suuruussuhteen muuttaminen",
    description: "Tehtävä mittaa kykyä vertailla määrien, osuuksien tai ryhmien keskinäisiä suhteita oikein.",
    studentTip: "Varmista kumpi on suurempi, pienempi tai yleisempi ja kuinka suuri ero aineistossa todella on.",
  },
  {
    id: 15,
    name: "Looginen komplementti",
    description: "Tehtävä mittaa kykyä päätellä täsmällisesti, mitä jonkin ryhmän ulkopuolelle jäämisestä seuraa ja mitä siitä ei seuraa.",
    studentTip: "Pidä ryhmän määritelmä samana: esimerkiksi 'ei luota vahvasti' ei tarkoita automaattisesti 'ei luota lainkaan'.",
  },
  {
    id: 16,
    name: "Varmuusasteen muuttaminen",
    description: "Tehtävä mittaa kykyä erottaa mahdollinen, todennäköinen ja varma väite toisistaan.",
    studentTip: "Vertaa modaalisia ilmauksia kuten voi, saattaa, todennäköisesti, yleensä ja varmasti.",
  },
  {
    id: 17,
    name: "Väittäjän tai lähteen vaihtaminen",
    description: "Tehtävä mittaa kykyä tunnistaa, kuka esittää väitteen tai mihin lähteeseen tieto aineistossa perustuu.",
    studentTip: "Tarkista aina, onko kyse kirjoittajan, tutkimuksen, haastatellun henkilön vai muun lähteen näkemyksestä.",
  },
  {
    id: 18,
    name: "Ehto–seuraus-suhteen muuttaminen",
    description: "Tehtävä mittaa kykyä pitää ehdot ja niiden seuraukset oikeassa suhteessa.",
    studentTip: "Tarkista, mikä on ehto ja mikä seuraus. Älä automaattisesti käännä ehtolausetta toisin päin.",
  },
  {
    id: 19,
    name: "Kausaalisuuden ja yhteyden sekoittaminen",
    description: "Tehtävä mittaa kykyä erottaa havaittu yhteys varsinaisesta syy-seuraussuhteesta.",
    studentTip: "Jos aineisto kertoo vain yhteydestä, älä päättele syytä ilman erillistä perustetta.",
  },
  {
    id: 20,
    name: "Rajauksen tai poikkeuksen huomaaminen",
    description: "Tehtävä mittaa kykyä huomata aineiston rajaukset, ehdot ja poikkeukset, jotka muuttavat väitteen soveltamisalaa.",
    studentTip: "Lue erityisen tarkasti sanat kuten vain jos, paitsi, lukuun ottamatta, yleensä, tietyissä tilanteissa ja kuitenkin.",
  },
];

export const VALINTAKOE_G_MIN_SKILL_SAMPLE = 5;

export function getValintakoeGReadingCategory(categoryId: number) {
  return (
    VALINTAKOE_G_READING_CATEGORIES.find(
      (category) => category.id === categoryId
    ) ?? null
  );
}
