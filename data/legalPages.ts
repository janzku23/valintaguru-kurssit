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