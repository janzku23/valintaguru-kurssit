import { SHOP_SELLER } from "@/data/shop/seller";
import { SHOP_TERMS } from "@/lib/shop/terms";
export type LegalBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  updated?: string;
  intro?: string[];
  blocks: LegalBlock[];
};

export const legalPages: LegalPage[] = [
  {
    "slug": "tietosuojakaytanto",
    "title": "Tietosuojakäytäntö",
    "updated": "Päivitetty viimeksi: 22.10.2026",
    "intro": [
      "Tämä tietosuojaseloste koskee ValintaGurun verkkosivustoa valintaguru.fi, digitaalisia valmennuskursseja, oppimisympäristöä sekä niihin liittyvää asiakaspalvelua. Selosteessa kerromme, mitä henkilötietoja käsittelemme, mihin tarkoituksiin ja millä perusteilla.",
      "ValintaGuru Oy toimii henkilötietojen rekisterinpitäjänä. Tietojen käsittelyn oikeusperuste riippuu käsittelyn tarkoituksesta; palvelun käyttäminen ei itsessään tarkoita suostumuksen antamista kaikkeen henkilötietojen käsittelyyn."
    ],
    "blocks": [
      {
        "heading": "1. Rekisterinpitäjä ja yhteystiedot",
        "paragraphs": [
          "ValintaGuru Oy, Y-tunnus 3573013-4. Tietosuojaa koskevat yhteydenotot: info@valintaguru.com."
        ]
      },
      {
        "heading": "2. Mitä tietoja käsittelemme",
        "bullets": [
          "Käyttäjä- ja yhteystiedot: esimerkiksi nimi, sähköpostiosoite, käyttäjätunniste ja käyttäjätilin asetukset.",
          "Kurssitiedot: käyttäjän käyttöoikeudet, ilmoittautumiset ja käytössä olevat valmennuskurssit.",
          "Opiskelutiedot: harjoituksiin ja kokeisiin annetut vastaukset, tulokset, edistyminen ja mahdolliset suorituksiin liittyvät aikamittaukset.",
          "Tilaus- ja maksutiedot: tilauksen sisältö, maksun tila ja tarvittavat laskutus- tai maksutapahtuman tunnisteet. Maksukortin täydellisiä tietoja ei lähtökohtaisesti käsitellä oppimisympäristössämme.",
          "Yhteydenotot: asiakaspalveluviestit, palautteet ja niihin liittyvät käsittelytiedot.",
          "Tekniset tiedot: verkkopyyntöihin liittyvät välttämättömät loki- ja tietoturvatiedot sekä sivuston käyttöön liittyvät tekniset mittarit."
        ]
      },
      {
        "heading": "3. Mistä tiedot saadaan",
        "paragraphs": [
          "Tietoja saadaan käyttäjältä itseltään esimerkiksi rekisteröitymisen, yhteydenoton, opiskelun ja tilauksen yhteydessä. Lisäksi tietoja muodostuu oppimisympäristön käytössä ja teknisissä palveluissa. Maksun tilaa koskevia tietoja voidaan saada käytössä olevalta maksupalveluntarjoajalta."
        ]
      },
      {
        "heading": "4. Käsittelyn tarkoitukset ja oikeusperusteet",
        "bullets": [
          "Käyttäjätilin, kurssikäyttöoikeuden ja oppimisympäristön tarjoaminen sekä opiskelusuoritusten tallentaminen: sopimuksen täytäntöönpano tai käyttäjän pyytämän palvelun tarjoaminen.",
          "Asiakaspalvelu ja palveluun liittyvä viestintä: sopimuksen täytäntöönpano ja tilanteen mukaan oikeutettu etu.",
          "Tilausten, maksujen ja kirjanpidon käsittely: sopimuksen täytäntöönpano sekä lakisääteisten velvoitteiden noudattaminen.",
          "Tietoturva, väärinkäytösten ehkäisy ja palvelun tekninen ylläpito: oikeutettu etu tai tilanteen mukaan lakisääteinen velvoite.",
          "Sivuston yleisen käytön ja suorituskyvyn mittaaminen: palvelun kehittämiseen liittyvä oikeutettu etu henkilötietojen käsittelyn osalta, jos tietoja katsotaan henkilötiedoiksi. Mahdollinen päätelaitteen tietojen käyttö arvioidaan tästä erikseen evästesääntöjen perusteella.",
          "Suostumukseen perustuva markkinointi tai muu valinnainen seuranta: suostumus silloin, kun tällaista käsittelyä otetaan käyttöön ja lainsäädäntö sitä edellyttää."
        ]
      },
      {
        "heading": "5. Käyttämämme tekniset palvelut ja vastaanottajat",
        "paragraphs": [
          "Käsittelemme ja välitämme tietoja vain siinä laajuudessa kuin palvelun toiminta ja lakisääteiset velvoitteet edellyttävät. Emme myy käyttäjien henkilötietoja."
        ],
        "bullets": [
          "Supabase: käyttäjätunnistus, käyttäjätilit, kurssikäyttöoikeudet sekä oppimisympäristön tietokanta.",
          "Vercel: verkkosivuston julkaisu ja tekninen toiminta sekä käyttötilastot (Web Analytics) ja suorituskykymittaukset (Speed Insights), kun nämä palvelut on otettu käyttöön.",
          "Käytössä olevat sähköpostin lähetys- ja maksunvälityspalvelut: vain niille tarpeelliset viesti-, tilaus- tai maksutiedot.",
          "Velvoittavan lainsäädännön mukaiset viranomaiset tarvittaessa."
        ]
      },
      {
        "heading": "6. Vercel Analytics ja Speed Insights",
        "paragraphs": [
          "Vercel Web Analytics auttaa seuraamaan esimerkiksi sivujen näyttökertoja, viittaavia sivustoja sekä kävijöiden selain- ja laiteluokkia. Vercelin kuvauksen mukaan palvelu ei käytä analytiikkaevästeitä, vaan tuottaa koottuja tilastoja ilman pysyvää kävijän tunnistamista eri verkkosivustojen välillä.",
          "Vercel Speed Insights mittaa sivuston suorituskykyä, kuten latautumisnopeutta ja käyttökokemuksen teknisiä mittareita. Vercelin mukaan mittauksia ei yhdistetä yksilöitävään kävijäprofiiliin.",
          "Emme tarkoituksellisesti lähetä analytiikkaan opiskelijoiden nimiä, sähköpostiosoitteita, harjoitusvastauksia tai muita arkaluonteisia sisältöjä. Verkkosivun osoite tai tapahtumatieto voi kuitenkin sisältää tunnisteita, jos sivusto on rakennettu niin; siksi tällaisten tietojen välittäminen tulee estää myös teknisesti."
        ]
      },
      {
        "heading": "7. Evästeet ja selaimeen tallennettavat tiedot",
        "paragraphs": [
          "Kirjautuminen ja oppimisympäristön välttämättömät toiminnot voivat edellyttää istunnon tai käyttöoikeuden ylläpitämiseen tarvittavia evästeitä tai selaimen paikallista tallennustilaa. Näitä käytetään palvelun tekniseen toteuttamiseen.",
          "Vercel Web Analytics on Vercelin dokumentaation mukaan evästeetön analytiikkapalvelu. Evästeettömyys ei kuitenkaan yksin ratkaise, vaatiiko jokin päätelaitteen tietojen lukemisen tai muu seurantatekniikka suostumusta.",
          "Jos otamme käyttöön suostumusta edellyttäviä valinnaisia evästeitä tai seurantatekniikoita, pyydämme suostumuksen ennen niiden käyttöä ja tarjoamme mahdollisuuden peruuttaa se. Pelkkä selaimen evästeasetusten muuttaminen ei korvaa sivustolla vaadittavaa suostumusta."
        ]
      },
      {
        "heading": "8. Tietojen säilytys",
        "paragraphs": [
          "Säilytämme käyttäjä- ja opiskelutietoja niin kauan kuin niitä tarvitaan kurssin tarjoamiseen, käyttäjätilin ylläpitoon, asianmukaiseen asiakaspalveluun tai oikeudellisten vaatimusten käsittelyyn. Tiedot poistetaan tai anonymisoidaan, kun käsittelyperustetta ei enää ole.",
          "Tilaus- ja kirjanpitotietoja säilytetään soveltuvan lainsäädännön edellyttämän ajan. Teknisten lokien ja mittaustietojen säilytysajat määräytyvät niiden käyttötarkoituksen sekä palveluntarjoajien asetusten ja käytäntöjen mukaan."
        ]
      },
      {
        "heading": "9. Tietojen siirtäminen EU- ja ETA-alueen ulkopuolelle",
        "paragraphs": [
          "Palveluntarjoajien käyttö voi edellyttää tietojen käsittelyä EU- tai ETA-alueen ulkopuolella. Tällöin huolehdimme soveltuvien tietosuojasäännösten mukaisista siirtoperusteista ja suojatoimista, kuten Euroopan komission riittävyyspäätöksistä tai vakiosopimuslausekkeista tilanteen mukaan."
        ]
      },
      {
        "heading": "10. Rekisteröidyn oikeudet",
        "bullets": [
          "Oikeus saada tietoa henkilötietojen käsittelystä ja pääsy itseä koskeviin tietoihin.",
          "Oikeus pyytää virheellisten tietojen oikaisua ja soveltuvissa tilanteissa tietojen poistamista.",
          "Oikeus rajoittaa käsittelyä tai vastustaa oikeutettuun etuun perustuvaa käsittelyä tilanteen mukaan.",
          "Oikeus saada soveltuvin osin tiedot siirrettävässä muodossa.",
          "Oikeus peruuttaa mahdollinen suostumus milloin tahansa ilman, että peruuttaminen vaikuttaa sitä edeltäneen käsittelyn lainmukaisuuteen.",
          "Oikeus tehdä valitus tietosuojavaltuutetun toimistolle (tietosuoja.fi)."
        ]
      },
      {
        "heading": "11. Alaikäiset",
        "paragraphs": [
          "Palvelut on suunnattu ensisijaisesti valintakokeisiin valmistautuville opiskelijoille. Alaikäisten henkilötietojen käsittelyssä huomioimme soveltuvat suostumusta ja muita käsittelyperusteita koskevat vaatimukset."
        ]
      },
      {
        "heading": "12. Tietoturva",
        "paragraphs": [
          "Suojaamme tietoja tarkoituksenmukaisilla teknisillä ja organisatorisilla keinoilla, kuten pääsynhallinnalla, käyttöoikeuksien rajaamisella ja turvallisilla yhteyksillä. Täydellistä riskittömyyttä ei voida taata."
        ]
      },
      {
        "heading": "13. Muutokset tietosuojakäytäntöön",
        "paragraphs": [
          "Päivitämme selostetta palvelun ja käsittelyn muuttuessa. Ajantasainen versio julkaistaan tällä sivulla. Olennaisista muutoksista tiedotetaan tarvittaessa erikseen."
        ]
      }
    ]
  },

  {
    slug: "palautuskaytanto", title: "Palautus- ja peruuttamiskäytäntö", updated: SHOP_TERMS.version,
    blocks: [{ paragraphs: SHOP_TERMS.paragraphs.slice(4, 8) }, { paragraphs: ["Verkkoperuuttaminen: https://www.valintaguru.fi/kauppa/peruuta . Voit ilmoittaa peruuttamisesta myös osoitteeseen info@valintaguru.com."] }],
  },
  {
    slug: "kayttoehdot", title: "Käyttöehdot", updated: SHOP_TERMS.version,
    blocks: [{ paragraphs: SHOP_TERMS.paragraphs }, { heading: "Henkilökohtainen käyttö ja tekijänoikeudet", paragraphs: ["Kurssioikeus on henkilökohtainen. Materiaaleja ei saa jakaa, kopioida tai myydä edelleen ilman oikeudenhaltijan lupaa, ellei pakottavasta lainsäädännöstä muuta johdu."] }],
  },
  {
    slug: "toimituskaytanto", title: "Toimituskäytäntö", updated: SHOP_TERMS.version,
    blocks: [{ paragraphs: [SHOP_TERMS.paragraphs[1], SHOP_TERMS.paragraphs[3], "Sähköpostin lähetyshäiriö ei peruuta vahvistettua maksua tai toimitettuja kurssioikeuksia. Epäonnistunutta toimitusta yritetään uudelleen. Jos toimitus ei etene, ota yhteyttä info@valintaguru.com. Salasanoja ei lähetetä sähköpostitse."] }],
  },

  {
    slug: "yhteystiedot",
    title: "Yhteystiedot",
    intro: [
      "Voit ottaa meihin yhteyttä sähköpostitse osoitteeseen info@valintaguru.com.",
      `${SHOP_SELLER.name}, Y-tunnus ${SHOP_SELLER.businessId}. Postiosoite: ${SHOP_SELLER.postalAddress}.`,
      "Autamme mielellämme sinua kurssivalinnoissa, valintakokeisiin liittyvissä kysymyksissä sekä kaikissa muissa ValintaGuruun liittyvissä asioissa.",
    ],
    blocks: [
     
    ],
  },

  {
    slug: "oikeudellinen-huomautus",
    title: "Oikeudellinen huomautus",
    intro: [
      "Tämä asiakirja ei muodosta oikeudellista neuvontaa, eikä ValintaGuru ole vastuussa mahdollisista tulkintavirheistä tai oikeudellisista seuraamuksista, jotka voivat johtua näiden käyttöehtojen soveltamisesta. Käyttäjän vastuulla on varmistaa, että palvelun käyttö on sovellettavien lakien ja säädösten mukaista.",
    ],
    blocks: [
      {
        heading: "Palvelun sisältö",
        paragraphs: [
          "ValintaGurun verkkosivuilla, kursseilla ja oppimateriaaleissa esitetyt tiedot on tarkoitettu opiskelun tueksi. Materiaalit eivät takaa tiettyä koetulosta, opiskelupaikkaa tai muuta yksittäistä lopputulosta.",
        ],
      },
      {
        heading: "Vastuunrajoitus",
        paragraphs: [
          "ValintaGuru pyrkii pitämään palvelun tiedot oikeina ja ajantasaisina, mutta ei takaa, että kaikki sisältö olisi aina virheetöntä, täydellistä tai keskeytyksettä saatavilla.",
          "ValintaGuru ei vastaa sellaisista välillisistä vahingoista tai menetyksistä, jotka aiheutuvat palvelun käytöstä, käyttökatkoksesta tai käyttäjän omista ratkaisuista.",
        ],
      },
      {
        heading: "Ulkoiset palvelut",
        paragraphs: [
          "Palvelu voi sisältää linkkejä tai yhteyksiä kolmansien osapuolten palveluihin. ValintaGuru ei vastaa näiden ulkopuolisten palveluiden sisällöstä, toiminnasta tai tietosuojakäytännöistä.",
        ],
      },
    ],
  },
];

export const legalPageBySlug = Object.fromEntries(
  legalPages.map((page) => [page.slug, page]),
) as Record<string, LegalPage>;