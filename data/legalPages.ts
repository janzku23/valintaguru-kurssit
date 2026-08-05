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
    slug: "tietosuojakaytanto",
    title: "Tietosuojakäytäntö",
    updated: "Päivitetty viimeksi: 28.11.2025",
    intro: [
      "Tämä tietosuojaseloste koskee ValintaGurun tarjoamia verkkopalveluja ja verkkokauppaa (”Palvelut”), joissa myymme yliopistojen valintakokeisiin ja ylioppilaskirjoituksiin valmistavia valmennuskursseja ja oppimateriaaleja. Selosteessa kerrotaan, kuinka keräämme ja käsittelemme henkilötietojasi, kun käyt verkkosivustollamme, asioit kanssamme tai olet muutoin yhteydessä meihin.",
      "Lue tämä tietosuojaseloste huolellisesti ennen palveluiden käyttöä. Käyttämällä Palveluita hyväksyt henkilötietojesi käsittelyn tässä selosteessa kuvatulla tavalla.",
      "ValintaGuru toimii henkilötietojen rekisterinpitäjänä EU:n ja Suomen tietosuojalainsäädännön mukaisesti.",
    ],
    blocks: [
      {
        heading: "1. Käsiteltävät henkilötiedot",
        paragraphs: ["Voimme kerätä seuraavia tietoja:"],
        bullets: [
          "Yhteystiedot: nimi, osoite, sähköpostiosoite ja puhelinnumero",
          "Maksu- ja tilaustiedot: maksutapahtumien tiedot, ostetut tuotteet sekä toimitus- ja laskutustiedot",
          "Tilitiedot: käyttäjätunnus ja asetukset, jos rekisteröidyt käyttäjäksi",
          "Käyttö- ja tekniset tiedot: IP-osoite, laitteen tyyppi, evästeiden kautta kerätty verkkokäyttäytyminen ja sivustolla tekemäsi toiminnot",
          "Viestintätiedot: esimerkiksi asiakaspalveluun lähettämäsi viestit",
        ],
      },
      {
        heading: "2. Mistä tiedot saadaan",
        paragraphs: ["Saamme henkilötietosi:"],
        bullets: [
          "suoraan sinulta tilausta tehdessä, asiakaspalvelussa ja lomakkeilla",
          "evästeiden ja analytiikan kautta verkkosivuillamme",
          "maksunvälittäjiltä ja logistiikkakumppaneilta tilauksen toimittamiseksi",
          "Shopify-alustalta, joka toimii verkkokauppamme teknisenä palveluntarjoajana",
        ],
      },
      {
        heading: "3. Henkilötietojen käsittelyn tarkoitukset",
        bullets: [
          "Palveluiden toimittaminen: tilausten käsittely, kurssien toimittaminen, käyttäjätilin ylläpito ja opiskelukokemuksen räätälöinti",
          "Markkinointi: sähköposti- ja tekstiviestiviestintä suostumuksen perusteella sekä kohdennettu mainonta",
          "Turvallisuus ja väärinkäytösten estäminen, esimerkiksi maksupetosten ennaltaehkäisy",
          "Lakisääteisten velvoitteiden täyttäminen, kuten kirjanpitovelvoitteet ja viranomaisten pyynnöt",
        ],
      },
      {
        heading: "4. Tietojen luovuttaminen",
        paragraphs: [
          "Luovutamme henkilötietoja vain tarpeellisesti. Emme myy henkilötietojasi.",
        ],
        bullets: [
          "Shopifylle verkkokaupan tuottamiseen",
          "maksupalveluntarjoajille, logistiikkayrityksille ja IT-kumppaneille",
          "markkinointikumppaneille vain suostumuksella",
          "viranomaisille, jos laki niin vaatii",
        ],
      },
      {
        heading: "5. Tietojen siirto EU/ETA-alueen ulkopuolelle",
        paragraphs: [
          "Jos tietoja siirretään EU/ETA-alueen ulkopuolelle, esimerkiksi Shopifyn palvelimille, varmistamme riittävän tietosuojan muun muassa EU:n vakiolausekkeilla.",
        ],
      },
      {
        heading: "6. Tietojen säilytys",
        paragraphs: [
          "Säilytämme tietoja vain sen ajan, mikä on tarpeen:",
        ],
        bullets: [
          "asiakassuhteen hoitoon ja kurssien toimittamiseen",
          "kirjanpidon kannalta, yleensä 6 vuotta",
          "mahdollisten reklamaatioiden käsittelyyn",
        ],
      },
      {
        heading: "7. Oikeutesi",
        paragraphs: [
          "Sinulla on tietosuojalainsäädännön mukaisesti oikeus:",
        ],
        bullets: [
          "saada pääsy omiin tietoihisi",
          "pyytää oikaisua virheellisiin tietoihin",
          "pyytää tietojen poistamista, kun se on mahdollista",
          "rajoittaa käsittelyä",
          "vastustaa suoramarkkinointia",
          "saada tiedot siirrettävässä muodossa",
        ],
      },
      {
        heading: "8. Evästeet",
        paragraphs: [
          "Käytämme evästeitä palvelun toimivuuden, analytiikan ja mainonnan kohdentamisen vuoksi. Voit hallita evästeasetuksia selaimesi kautta.",
        ],
      },
      {
        heading: "9. Alaikäiset",
        paragraphs: [
          "Palvelumme on suunnattu vähintään 16-vuotiaille. Jos huomaat alle 16-vuotiaan tietoja rekisterissä, ota yhteyttä — poistamme ne viipymättä.",
        ],
      },
      {
        heading: "10. Tietoturva",
        paragraphs: [
          "Käytämme teknisiä ja organisatorisia tietoturvatoimia henkilötietojen suojaamiseksi. Mikään tietojen siirtomenetelmä ei kuitenkaan ole täysin riskitön.",
        ],
      },
      {
        heading: "11. Muutokset tietosuojaselosteeseen",
        paragraphs: [
          "Voimme päivittää tätä selostetta lainsäädännön ja toimintamme muuttuessa. Muutoksista informoidaan tällä sivulla.",
        ],
      },
      {
        heading: "12. Yhteystiedot",
        paragraphs: [
          "Tietosuojasta vastaava rekisterinpitäjä: ValintaGuru Oy",
          "Y-tunnus: 3573013-4",
          "Sähköposti: info@valintaguru.com",
          "Voit olla yhteydessä myös tietosuojavaltuutettuun, jos katsot, että tietojasi on käsitelty lainvastaisesti: tietosuoja.fi",
        ],
      },
    ],
  },

  {
    slug: "palautuskaytanto",
    title: "Palautuskäytäntö",
    intro: [
      "Verkkokaupastamme ostettavat valmennuskurssit sisältävät digitaalisen oppimisympäristön, joka on kuluttajansuojalain alainen hyödyke ja/tai palvelu. Kurssiemme maksulliset osat kuuluvat kuluttajansuojalain (20.1.1978/38) 6 luvun 16 §:n 12 kohdan tarkoittamaan digitaaliseen sisältöön, jota ei koske peruuttamisoikeus etämyynnissä (kuluttajansuojalain 6 luvun 14 §).",
    ],
    blocks: [
      {
        heading: "Palautusoikeus",
        paragraphs: [
          "Jos et ole ottanut palvelua käyttöön eli et ole kirjautunut oppimisympäristöön, sinulla on kuluttajansuojalain mukainen 14 päivän perumisoikeus ostopäivästä alkaen.",
          "Jos olet kirjautunut oppimisympäristöön, palvelun toimittaminen on aloitettu ennen peruuttamisajan päättymistä kuluttajan pyynnön tai suostumuksen perusteella. Tällöin palautusoikeutta ei ole, koska digitaalisen sisällön käyttö on aloitettu. Tämä käytäntö on ilmoitettu ja hyväksyttävä ennen kurssin ostoa.",
        ],
      },
      {
        heading: "Kurssin vaihto",
        paragraphs: [
          "Jos haluat vaihtaa kurssin toiseen ennen sen käyttöönottoa, olethan yhteydessä asiakaspalveluumme. Vaihdot käsitellään tapauskohtaisesti.",
          "Jos sinulla on kysyttävää palautuksista tai vaihdoista, voit ottaa yhteyttä asiakaspalveluumme: info@valintaguru.com",
        ],
      },
    ],
  },

  {
    slug: "kayttoehdot",
    title: "Käyttöehdot",
    blocks: [
      {
        heading: "1. Yleiset ehdot",
        paragraphs: [
          "Tervetuloa ValintaGuru-verkkokauppaan. Nämä käyttöehdot koskevat verkkokaupastamme ostettavia tuotteita ja palveluita. Ostamalla ja käyttämällä verkkokauppamme palveluita hyväksyt nämä ehdot.",
        ],
      },
      {
        heading: "2. Tilaaminen ja maksaminen",
        paragraphs: [
          "2.1. Kaikki tilaukset tehdään verkkokaupassamme tai ValintaGurun puhelinsovelluksessa.",
          "2.2. Maksutavat sisältävät verkkopankkimaksut, luottokortit ja muut verkkokaupassa tarjolla olevat maksutavat.",
          "2.3. Tilauksen yhteydessä asiakkaan tulee antaa oikeat ja ajantasaiset tiedot.",
          "2.4. Maksunvälityspalvelun toteuttajana ja maksupalveluntarjoajana toimii Paytrail Oyj (2122839-7) yhteistyössä suomalaisten pankkien ja luottolaitosten kanssa. Paytrail Oyj näkyy maksun saajana tiliotteella tai korttilaskulla ja välittää maksun kauppiaalle. Reklamaatiotapauksissa pyydämme ottamaan ensisijaisesti yhteyttä tuotteen toimittajaan.",
          "Paytrail Oyj, Y-tunnus 2122839-7, Innova 2, Lutakonaukio 7, 40100 Jyväskylä, puhelin 0207 181830.",
        ],
      },
      {
        heading: "3. Digitaalisen sisällön toimitus",
        paragraphs: [
          "3.1. Digitaaliset kurssit ja oppimateriaalit toimitetaan sähköisesti.",
          "3.2. Kurssi aktivoituu 0 minuutin–2 tunnin kuluessa maksun vastaanottamisesta.",
          "3.3. Asiakkaan on kirjauduttava kurssisivuille samalla sähköpostiosoitteella, jolla tilaus on tehty.",
        ],
      },
      {
        heading: "4. Palautus- ja peruutusoikeus",
        paragraphs: [
          "4.1. Verkkokursseilla ei ole palautusoikeutta, jos asiakas on avannut kurssin sisällön.",
          "4.2. Verkkokursseihin liittyvä digitaalinen oppimisympäristö on kuluttajansuojalain alainen palvelu (kuluttajansuojalaki 20.1.1978/38, 6 luku 16 §, 12 kohta). Kuluttajansuojalain 6 luvun 14 §:n säännöksiä peruuttamisoikeudesta etämyynnissä ei sovelleta digitaaliseen sisältöön.",
          "4.3. Mikäli asiakas ei kirjaudu oppimisympäristöön, hänellä on kuluttajansuojalain mukainen 14 päivän peruutusoikeus.",
          "4.4. Jos asiakas kirjautuu oppimisympäristöön, palvelun toimittaminen aloitetaan ennen peruuttamisajan päättymistä kuluttajan pyynnöstä tai suostumuksesta.",
          "4.5. Kurssin vaihtaminen toiseen voi olla mahdollista ennen sen avaamista, ja tämä arvioidaan tapauskohtaisesti.",
        ],
      },
      {
        heading: "5. Asiakkaan velvollisuudet",
        paragraphs: [
          "5.1. Asiakas vastaa siitä, että hänen antamansa tiedot ovat oikein.",
          "5.2. Asiakas sitoutuu käyttämään palvelua vain laillisiin tarkoituksiin.",
          "5.3. Asiakas ei saa jakaa, kopioida tai myydä kurssin materiaaleja kolmansille osapuolille.",
        ],
      },
      {
        heading: "6. ValintaGurun vastuut ja oikeudet",
        paragraphs: [
          "6.1. ValintaGuru pidättää oikeuden päivittää, muokata tai poistaa kursseja ja niiden sisältöjä.",
          "6.2. ValintaGuru ei vastaa teknisistä ongelmista, jotka eivät johdu sen omasta toiminnasta.",
          "6.3. ValintaGuru ei ole vastuussa asiakkaan tekemistä virheistä, kuten kirjautumistietojen menettämisestä.",
        ],
      },
      {
        heading: "7. Immateriaalioikeudet",
        paragraphs: [
          "Kaikki ValintaGurun verkkokursseihin, materiaaleihin ja oppimisympäristöön liittyvät omistusoikeudet, tekijänoikeudet, tavaramerkit ja muut immateriaalioikeudet kuuluvat ValintaGurulle. Kurssimateriaalin tai muun aineiston lainaaminen, kopiointi, tallentaminen, muokkaaminen, muuntelu, siirtäminen, luovuttaminen, muu luvaton käyttö tai hyödyntäminen edes osittain ilman ValintaGurun ennalta antamaa kirjallista lupaa on ehdottomasti kielletty.",
          "Kurssimateriaalin tai muun aineiston luovuttaminen muille tai sen julkaiseminen ja jakaminen missä tahansa sähköisessä tai muussa mediassa on ehdottomasti kielletty. Tämän sopimusehdon vastaisesti menettelevä käyttäjä vastaa täysimääräisesti ValintaGurulle tekijänoikeusrikkomuksella aiheuttamistaan vahingoista.",
        ],
      },
      {
        heading: "8. Yhteystiedot",
        paragraphs: [
          "Mikäli sinulla on kysyttävää, voit ottaa yhteyttä asiakaspalveluumme: info@valintaguru.com",
        ],
      },
    ],
  },

  {
    slug: "toimituskaytanto",
    title: "Toimituskäytäntö",
    blocks: [
      {
        heading: "Digitaaliset tuotteet ja palvelut",
        paragraphs: [
          "ValintaGuru myy digitaalisia valmennuskursseja ja verkkomateriaaleja. Kaikki tuotteemme toimitetaan sähköisesti.",
        ],
      },
      {
        heading: "Toimitustapa",
        paragraphs: [
          "Kun asiakas on suorittanut maksun onnistuneesti verkkokaupassamme, toimitus tapahtuu automaattisesti sähköpostitse.",
        ],
        bullets: [
          "vahvistussähköposti ostoksesta",
          "erillinen sähköposti, joka sisältää käyttäjätunnukset tai kutsulinkin sekä ohjeet kirjautumiseen kurssialustalle",
        ],
      },
      {
        heading: "Toimitusaika",
        paragraphs: [
          "Digitaalisten tuotteiden toimitus tapahtuu normaalisti välittömästi oston tai käyttöoikeuden myöntämisen jälkeen.",
          "Normaalisti käyttäjätunnukset tai kutsulinkki toimitetaan muutaman minuutin kuluessa. Poikkeustilanteissa toimituksessa voi esiintyä lyhyt viive, enintään 24 tuntia.",
        ],
      },
      {
        heading: "Asiakkaan vastuu",
        paragraphs: ["Asiakas vastaa siitä, että:"],
        bullets: [
          "tilauksen yhteydessä annettu sähköpostiosoite on oikein",
          "sähköpostiviestit eivät ohjaudu roskaposti- tai kampanjakansioon",
        ],
      },
      {
        heading: "Ongelmatilanteet",
        paragraphs: [
          "Jos asiakas ei ole saanut käyttäjätunnuksia, kutsulinkkiä tai kirjautumisohjeita kohtuullisen ajan kuluessa, pyydämme ottamaan yhteyttä asiakaspalveluumme: info@valintaguru.com",
          "Autamme viipymättä käyttöoikeuksien aktivoinnissa.",
        ],
      },
      {
        heading: "Toimitusalue",
        paragraphs: [
          "Digitaaliset tuotteemme ovat saatavilla kaikkialle, missä internet-yhteys on käytettävissä.",
        ],
      },
      {
        heading: "Muutokset toimituskäytäntöön",
        paragraphs: [
          "Pidätämme oikeuden muuttaa tätä toimituskäytäntöä. Kulloinkin voimassa oleva toimituskäytäntö on saatavilla verkkosivuillamme.",
          "Tämä toimituskäytäntö koskee ValintaGurun digitaalisia tuotteita ja palveluita.",
        ],
      },
    ],
  },

  {
    slug: "yhteystiedot",
    title: "Yhteystiedot",
    intro: [
      "Voit ottaa meihin yhteyttä sähköpostitse osoitteeseen info@valintaguru.com.",
      "Autamme mielellämme sinua kurssivalinnoissa, valintakokeisiin liittyvissä kysymyksissä sekä kaikissa muissa ValintaGuruun liittyvissä asioissa.",
    ],
    blocks: [
      {
        heading: "ValintaGuru Oy",
        paragraphs: [
          "Y-tunnus 3573013-4",
          "Sähköposti: info@valintaguru.com",
        ],
      },
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