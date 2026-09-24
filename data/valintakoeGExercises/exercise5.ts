import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 5 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
 */
export const valintakoeGExercise5Base = {
  "id": "harjoitus-5",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 5 – Suomalaisen demokratiapolitiikan sudenkuopat",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
  "articleTitle": "Suomalaisen demokratiapolitiikan sudenkuopat",
  "articleUrl": "https://journal.fi/politiikka/article/view/125172",
  "questions": [
    {
      "id": "g-h5-q1",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Periaatepäätöksen näkökulmasta osallistumisen eriytyminen on ongelma, mutta artikkelin kirjoittajan mukaan osallistumisen eriytyminen pitäisi sallia osana samaa demokratisaatioprosessia.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "tosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "249"
      },
      "explanation": "Tekstissä asetetaan vastakkain Periaatepäätöksen näkemys ja kirjoittajan esittämä näkemys. Periaatepäätös pitää osallistumisen eriytymistä ongelmana, kun taas kirjoittajan mukaan eriytyminen pitäisi sallia, jotta epätasa-arvo voidaan huomioida. Ratkaisevaa on erottaa toisistaan, kenen näkemyksestä kulloinkin puhutaan.",
      "learningPoint": "Tunnista, säilyykö tekstikohdan keskeinen ajatus samana, vaikka se on tiivistetty ja ilmaistu eri sanoin. Tarkista erityisesti, että molempien näkemysten välinen ero säilyy oikein. Hakuvinkki: Hae esimerkiksi ”osallistumisen eriytyminen”."
    },
    {
      "id": "g-h5-q2",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 1,
      "prompt": "Mikä seuraavista kuvaa parhaiten sitä, miten Periaatepäätös määrittelee demokratian tekstin mukaan?",
      "options": [
        {
          "id": "a",
          "text": "Demokratia määritellään suomalaisen yhteiskuntajärjestyksen arvopohjaksi."
        },
        {
          "id": "b",
          "text": "Demokratia määritellään ensisijaisesti avoimen demokratiaprosessin tuottamaksi arvopohjaksi."
        },
        {
          "id": "c",
          "text": "Demokratia määritellään ainoastaan talouden ja hyvinvoinnin takaajaksi."
        },
        {
          "id": "d",
          "text": "Demokratia määritellään valtiollisesta yhteiskuntajärjestyksestä riippumattomaksi toimintatavaksi."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247"
      },
      "explanation": "A vastaa suoraan tekstissä esitettyä määritelmää. B kääntää tekstissä tehdyn erottelun: juuri tällaista avoimen demokratiaprosessin kautta tapahtuvaa arvopohjan määrittelyä Periaatepäätös ei kirjoittajan mukaan tee. C on liian ehdoton, koska tekstissä demokratia yhdistetään myös talouteen, hyvinvointiin ja elämänlaatuun, mutta ei ainoastaanniihin.",
      "learningPoint": "Paikanna tekstistä täsmällinen määritelmä ja erottele se lähellä olevista, uskottavilta kuulostavista vaihtoehdoista. Hakuvinkki: Hae esimerkiksi ”arvopohjana”."
    },
    {
      "id": "g-h5-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Vuoden 1916 naiskansanedustajien määrän taso saavutettiin Suomessa uudelleen vasta vuonna 1966.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        }
      ],
      "correctAnswerIds": [
        "vaarin"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "246"
      },
      "explanation": "Väitteessä käytetty 1966 löytyy tekstistä, mutta se on yhdistetty väärään tapahtumaan. Vuoden 1916 taso saavutettiin uudelleen vuonna 1951. Vuosi 1966 tarkoittaa ajankohtaa, jolloin naisten määrä alkoi merkittävästi kasvaa. Tehtävän ansa syntyy siis kahdesta lähekkäin esiintyvästä oikeasta vuosiluvusta.",
      "learningPoint": "Tarkista, mihin tapahtumaan tekstissä esiintyvä vuosiluku liittyy. 1966 on tekstissä oikea vuosiluku, mutta se liittyy naisten määrän merkittävän kasvun alkamiseen, ei vuoden 1916 tason saavuttamiseen uudelleen. Oikea tieto voi siis tehdä väitteestä väärän, jos se yhdistetään väärään tapahtumaan. Hakuvinkki: Hae esimerkiksi ”vuoden 1916 taso” tai ”1966”."
    },
    {
      "id": "g-h5-q4",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat tekstissä esitettyjä Periaatepäätöksen kahta sudenkuoppaa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Historiapoliittinen sudenkuoppa liittyy siihen, että menneisyyden tulkintoja ja historiapolitiikkaa ei avata riittävästi."
        },
        {
          "id": "b",
          "text": "Julkispoliittinen sudenkuoppa liittyy oletukseen yhtenäisestä ja kaikkien kesken jaetusta yhteiskunnallisen toiminnan ja osallistumisen julkistilasta."
        },
        {
          "id": "c",
          "text": "Historiapoliittinen sudenkuoppa perustuu oletukseen kaikkien kesken jaetusta yhtenäisestä julkistilasta."
        },
        {
          "id": "d",
          "text": "Julkispoliittinen sudenkuoppa tarkoittaa ensisijaisesti demokraattisten tulevaisuudenkuvien irrottamista menneisyyden tulkinnoista."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247"
      },
      "explanation": "A yhdistää historiapoliittisen sudenkuopan oikeaan kuvaukseen ja B julkispoliittisen sudenkuopan oikeaan kuvaukseen. C ja D käyttävät tekstissä oikeasti esiintyviä ajatuksia, mutta ne on yhdistetty väärään sudenkuoppaan. Siksi pelkkä käsitteiden tunnistaminen ei riitä, vaan on tarkistettava, mikä ominaisuus kuuluu kummallekin.",
      "learningPoint": "Tarkista, mihin käsitteeseen tekstissä oleva oikea tieto kuuluu. Häiriövaihtoehto voi sisältää täysin oikean tiedon, mutta yhdistää sen väärään käsitteeseen. Hakuvinkki: Hae esimerkiksi ”sudenkuoppa” tai ”julkistilasta”."
    },
    {
      "id": "g-h5-q5",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Periaatepäätöksen mukaan poliittisten vastakkainasettelujen vahvistuminen on negatiivinen kehityskulku, vaikka siinä todetaan Suomen verrattain huonot sijoitukset osallistuvan ja puntaroivan demokratian indekseissä.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "tosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247"
      },
      "explanation": "Väite säilyttää tekstissä esitetyn yhteyden: Periaatepäätöksessä tunnistetaan Suomen heikot sijoitukset osallistuvan ja puntaroivan demokratian indekseissä, mutta samalla poliittisten vastakkainasettelujen vahvistuminen nähdään kielteisenä. Ratkaisevaa on huomata, että tekstissä nämä kaksi asiaa asetetaan nimenomaan rinnakkain.",
      "learningPoint": "Tunnista sama merkitys, vaikka kysymyksen sanamuoto ei täysin vastaa aineiston sanamuotoa. Esimerkiksi negatiivinen kehityskulku voidaan ilmaista hieman eri tavoin merkityksen muuttumatta. Hakuvinkki: Hae esimerkiksi ”puntaroivan demokratian” tai ”vastakkainasettelujen”."
    },
    {
      "id": "g-h5-q6",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa tekstin mukaan Periaatepäätöksen suhtautumista Suomen demokratian menneisyyteen?",
      "options": [
        {
          "id": "a",
          "text": "Menneisyyden tulkintoja käsitellään yksityiskohtaisesti sekä onnistumisten että epäonnistumisten kautta."
        },
        {
          "id": "b",
          "text": "Menneisyyden tulkinnat esitetään ohimennen ainoastaan positiivisessa valossa viittaamalla vahvoihin perinteisiin."
        },
        {
          "id": "c",
          "text": "Menneisyyden tulkinnat jätetään kokonaan pois eikä Suomen demokratian perinteisiin viitata lainkaan."
        },
        {
          "id": "d",
          "text": "Menneisyyttä tarkastellaan ensisijaisesti saamelaisten totuus- ja sovintokomission onnistumisten kautta."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247"
      },
      "explanation": "B säilyttää tekstin kaksi olennaista rajausta: menneisyyttä käsitellään ohimennen ja ainoastaan positiivisessa valossa. C menee liian pitkälle väittäessään, ettei menneisyyteen viitattaisi lainkaan. A puolestaan väittää päinvastoin, että menneisyyttä käsiteltäisiin yksityiskohtaisesti ja moniulotteisesti.",
      "learningPoint": "Tunnista, mikä vaihtoehto tiivistää tekstikohdan merkityksen oikein. Tarkista erityisesti, ettei vaihtoehto muuta sitä, kuinka laajasti ja millä tavalla menneisyyttä Periaatepäätöksessä käsitellään. Hakuvinkki: Hae esimerkiksi ”vahvat perinteet” tai ”positiivisessa valossa”."
    },
    {
      "id": "g-h5-q7",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Artikkelin mukaan Periaatepäätös avaa, miksi Suomen aiempi demokratiapolitiikka on saanut kansainvälisiltä järjestöiltä suosituksia epäkohtien suhteen ja miksi niiden toteuttamisessa on epäonnistuttu.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        }
      ],
      "correctAnswerIds": [
        "vaarin"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "248"
      },
      "explanation": "Väitteessä yksi ratkaiseva asia on muutettu: tekstissä Periaatepäätös ei avaa suositusten saamisen tai niiden toteuttamisessa epäonnistumisen syitä. Väitteessä taas sanotaan, että se avaa ne. Muuten väite käyttää samoja asioita kuin aineisto, joten ratkaisu riippuu tämän yhden merkityssuunnan huomaamisesta.",
      "learningPoint": "Etsi väitteestä sana tai ilmaus, joka kääntää tekstin merkityksen vastakkaiseksi. Tässä ratkaiseva ero on ”ei avaa” → ”avaa”. Hakuvinkki: Hae esimerkiksi ”suosituksia” tai ”ei avaa”."
    },
    {
      "id": "g-h5-q8",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Polarisaatio on artikkelin mukaan aina demokratian kannalta ongelma.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "246"
      },
      "explanation": "Tekstissä ei esitetä polarisaatiota automaattisesti tai kaikissa tilanteissa demokratian ongelmana. Väitteeseen lisätty ”aina” tekee väitteestä liian ehdottoman. Ratkaisevaa on huomata, että tekstin ilmaus ”ei itsessään” ei tarkoita, ettei polarisaatio voisi joissakin olosuhteissa muodostua ongelmalliseksi.",
      "learningPoint": "Tarkista, onko aineiston rajattuun väitteeseen lisätty liian ehdoton ilmaus. Sanat kuten aina, kaikki, vain ja ei koskaan voivat muuttaa muuten uskottavan väitteen vääräksi. Hakuvinkki: Hae esimerkiksi ”polarisaatio itsessään”."
    },
    {
      "id": "g-h5-q9",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 4,
      "prompt": "Saamelaisten totuus- ja sovintokomission oikeudenmukainen toiminta edellyttää tekstin mukaan, että saamelaiset osallistuvat prosessiin samoista lähtökohdista kuin muut suomalaisen yhteiskunnan toimijat.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "249"
      },
      "explanation": "Tekstissä korostetaan, että saamelaisten tulee saada osallistua prosessiin omista lähtökohdistaan. Väitteessä tämä on muutettu muotoon samoista lähtökohdista kuin muut suomalaisen yhteiskunnan toimijat. Ratkaisevaa on siis tarkistaa, kenen lähtökohdista osallistumisen tulee tapahtua.",
      "learningPoint": "Tarkista väitteen yksittäiset rajaukset tarkasti. Suurin osa väitteestä voi vastata aineistoa, vaikka yksi muutettu ilmaus tekee kokonaisuudesta väärän. Hakuvinkki: Hae esimerkiksi ”omista lähtökohdistaan” tai ”totuus- ja sovintokomission”."
    },
    {
      "id": "g-h5-q10",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Poliittisen vastakkainasettelun vahvistuminen on artikkelin mukaan itsessään ongelmallista demokratialle.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        }
      ],
      "correctAnswerIds": [
        "vaarin"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "250"
      },
      "explanation": "Tekstissä sanotaan, että poliittisen vastakkainasettelun vahvistuminen ei itsessään ole ongelmallista. Väitteessä merkitys on käännetty vastakkaiseksi poistamalla kielto: ”ei ole ongelmallista” → ”on ongelmallista”. Samat käsitteet esiintyvät molemmissa, mutta niiden merkityssuunta on päinvastainen.",
      "learningPoint": "Tarkista, onko aineiston väitteen merkityssuunta käännetty vastakkaiseksi. Erityisesti kielteiset ilmaukset, kuten ”ei ole”, kannattaa tarkistaa huolellisesti. Hakuvinkki: Hae esimerkiksi ”vastakkainasettelun vahvistuminen”."
    }
  ]
} satisfies ValintakoeGExercise;
