import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 5: uusimman tehtävätekstin tehtävät 1–10. Aikaraja 40 min.
 * Lähdekuvaukset ovat explanation-kentissä, haku- ja muistivinkit learningPoint-kentissä.
 */
export const valintakoeGExercise5Base = {
  "id": "harjoitus-5",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 5 – Demokratian kehittäminen ja osallistumisen eriytyminen",
  "description": "40 minuutin aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 40,
  "difficulty": "easy",
  "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
  "articleTitle": "Suomalaisen demokratiapolitiikan sudenkuopat",
  "articleUrl": "https://journal.fi/politiikka/article/download/125172/86170",
  "questions": [
    {
      "id": "g-h5-q1",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Periaatepäätöksen näkökulmasta osallistumisen eriytyminen on ongelma, mutta artikkelin kirjoittajan mukaan osallistumisen eriytyminen pitäisi sallia osana samaa demokratisaatioprosessia.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "tosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "249",
        "section": "osallistumisen eriytymistä käsittelevä kappale"
      },
      "explanation": "Väite säilyttää artikkelissa esitetyn keskeisen ajatuksen. Periaatepäätöksen näkökulmasta osallistumisen eriytyminen on ongelmallista, kun taas kirjoittaja korostaa erilaisten osallistumisen tilojen ja lähtökohtien merkitystä demokratian kehittymiselle.\nTehtävässä on tärkeää erottaa nämä kaksi näkökulmaa toisistaan. Väite tiivistää molemmat kannat oikein.\n\nLähde:\nArtikkelissa todetaan, että periaatepäätös pitää osallistumisen eriytymistä ongelmana, mutta kirjoittajan mukaan eriytyminen pitäisi sallia osana demokratisaatioprosessia, jotta yhteiskunnallista epätasa-arvoa voitaisiin huomioida paremmin.",
      "learningPoint": "Tarkista, säilyttääkö kysymys aineistossa esitetyn ajatuksen, vaikka sitä olisi tiivistetty tai muotoiltu uudelleen. Kiinnitä erityistä huomiota siihen, että eri toimijoiden näkemykset pysyvät erillään.\nHakuvinkki: Hae ilmausta osallistumisen eriytyminen."
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247",
        "section": "demokratian määritelmää käsittelevä kappale"
      },
      "explanation": "A on oikein, koska se vastaa artikkelissa esitettyä demokratian määritelmää.\nB on väärin, koska kirjoittajan mukaan periaatepäätös ei määrittele arvopohjaa avoimen demokratiaprosessin kautta.\nC on väärin, koska demokratiaa ei määritellä ainoastaan talouden ja hyvinvoinnin takaajaksi.\nD on väärin, koska määritelmä liitetään nimenomaan suomalaiseen yhteiskuntajärjestykseen.\n\nLähde:\nArtikkelissa kerrotaan, että periaatepäätös määrittelee demokratian suomalaisen yhteiskuntajärjestyksen arvopohjaksi. Kirjoittaja huomauttaa, ettei arvopohjaa määritellä avoimen demokratiaprosessin kautta.",
      "learningPoint": "Etsi aineistosta kysytty määritelmä ja tarkista sen sisältö täsmällisesti. Älä valitse vaihtoehtoa vain siksi, että se kuulostaa yleisesti uskottavalta.\nHakuvinkki: Hae sanaa arvopohjana."
    },
    {
      "id": "g-h5-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Vuoden 1916 naiskansanedustajien määrän taso saavutettiin Suomessa uudelleen vasta vuonna 1966.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "vaarin"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "246",
        "section": "naiskansanedustajien määrän historiallista kehitystä käsittelevä kohta"
      },
      "explanation": "Väitteessä käytetty vuosi 1966 löytyy artikkelista, mutta se on yhdistetty väärään tapahtumaan.\nVuosi 1951: Vuoden 1916 naiskansanedustajien määrän taso saavutettiin uudelleen.\nVuosi 1966: Naisten määrä alkoi kasvaa merkittävästi.\nMolemmat vuosiluvut ovat siis aineistosta tuttuja, mutta ne kuvaavat eri asioita.\n\nLähde:\nArtikkelin mukaan vuoden 1916 taso saavutettiin uudelleen vuoden 1951 vaaleissa. Naisten määrä alkoi kasvaa merkittävästi vasta vuonna 1966.",
      "learningPoint": "Tarkista, mihin tapahtumaan aineistossa esiintyvä vuosiluku liittyy. Oikea vuosiluku voi tehdä väitteestä väärän, jos se yhdistetään väärään tapahtumaan.\nHakuvinkki: Hae ilmausta vuoden 1916 taso tai vuosilukua 1966."
    },
    {
      "id": "g-h5-q4",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 5,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247",
        "section": "”Periaatepäätöksen kaksi sudenkuoppaa”"
      },
      "explanation": "A on oikein, koska historiapoliittinen sudenkuoppa koskee menneisyyden tulkintojen ja historiapolitiikan riittämätöntä käsittelyä.\nB on oikein, koska julkispoliittinen sudenkuoppa liittyy oletukseen yhteisestä ja yhtenäisestä julkistilasta.\nC on väärin, koska yhtenäisen julkistilan oletus kuuluu julkispoliittiseen sudenkuoppaan.\nD on väärin, koska menneisyyden tulkintojen sivuuttaminen kuuluu historiapoliittiseen sudenkuoppaan.\n\nLähde:\nArtikkelissa nimetään kaksi sudenkuoppaa. Historiapoliittinen sudenkuoppa liittyy menneisyyden tulkintojen ja historiapolitiikan sivuuttamiseen. Julkispoliittinen sudenkuoppa puolestaan liittyy oletukseen yhtenäisestä ja kaikkien jakamasta julkistilasta.",
      "learningPoint": "Tarkista, mihin käsitteeseen aineistossa esitetty ominaisuus kuuluu. Kaksi läheistä käsitettä voivat esiintyä samassa kappaleessa, jolloin niiden määritelmät on helppo sekoittaa keskenään.\nHakuvinkki: Hae sanaa sudenkuoppa ja vertaa molempien käsitteiden määritelmiä."
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
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "tosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247",
        "section": "demokratian tilaa ja poliittisia vastakkainasetteluja käsittelevä kappale"
      },
      "explanation": "Väite säilyttää aineistossa esitetyn ajatuksen. Periaatepäätöksessä tunnistetaan osallistuvan ja puntaroivan demokratian puutteita, mutta poliittisten vastakkainasettelujen vahvistuminen esitetään silti negatiivisena kehityksenä.\nTehtävässä olennaista on huomata, että nämä kaksi asiaa esitetään artikkelissa rinnakkain. Niiden välillä on kirjoittajan esiin nostama jännite.\n\nLähde:\nArtikkelissa todetaan, että periaatepäätöksessä tunnistetaan Suomen verrattain heikot sijoitukset osallistuvan ja puntaroivan demokratian indekseissä. Samalla poliittisten vastakkainasettelujen vahvistuminen nähdään kielteisenä kehityskulkuna.",
      "learningPoint": "Tarkista, säilyykö aineiston alkuperäinen merkitys, vaikka kysymyksessä käytetään hieman erilaisia sanoja tai tiivistetään pidempi ajatus. Huomioi myös, miten väitteen eri osat liittyvät toisiinsa.\nHakuvinkki: Hae ilmausta puntaroivan demokratian tai vastakkainasettelujen."
    },
    {
      "id": "g-h5-q6",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "247",
        "section": "historiapoliittista sudenkuoppaa käsittelevä kappale"
      },
      "explanation": "A on väärin, koska artikkelin mukaan menneisyyttä ei käsitellä yksityiskohtaisesti ja moniulotteisesti.\nB on oikein, koska se säilyttää aineiston kaksi keskeistä havaintoa. Menneisyyttä käsitellään ohimennen ja ainoastaan positiivisessa valossa.\nC on väärin, koska menneisyyttä ei jätetä kokonaan käsittelemättä. Siihen viitataan mainitsemalla vahvat perinteet.\nD on väärin, koska periaatepäätöksen menneisyyskäsittelyä ei kuvata saamelaisten totuus- ja sovintokomission onnistumisten kautta.\n\nLähde:\nArtikkelissa kerrotaan, että periaatepäätöksessä Suomen demokratian menneisyyttä käsitellään lyhyesti ja myönteisessä valossa. Siinä viitataan demokratian vahvoihin perinteisiin.",
      "learningPoint": "Vertaa vaihtoehtojen kokonaismerkitystä aineistoon. Oikea vaihtoehto voi tiivistää tekstikohdan, mutta sen on säilytettävä kaikki olennaiset rajaukset. Tarkista erityisesti, kuinka laajasti ja millä tavalla asiaa aineistossa käsitellään.\nHakuvinkki: Hae ilmausta vahvat perinteet tai positiivisessa valossa."
    },
    {
      "id": "g-h5-q7",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Artikkelin mukaan Periaatepäätös avaa, miksi Suomen aiempi demokratiapolitiikka on saanut kansainvälisiltä järjestöiltä suosituksia epäkohtien suhteen ja miksi niiden toteuttamisessa on epäonnistuttu.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "vaarin"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "248",
        "section": "Suomen demokratiapolitiikan epäkohtia ja kansainvälisiä suosituksia käsittelevä kappale"
      },
      "explanation": "Kysymyksessä käytetään samoja asioita kuin aineistossa, mutta niiden merkitys muutetaan vastakkaiseksi.\nAineistossa: Periaatepäätös ei avaa suositusten saamisen tai niiden toteuttamisessa epäonnistumisen syitä.\nKysymyksessä: Periaatepäätös avaa nämä syyt.\nRatkaiseva ero on siis kielteisessä ilmauksessa. Kysymyksessä kielto on poistettu, jolloin koko väitteen merkitys muuttuu.\n\nLähde:\nArtikkelin mukaan periaatepäätöksessä mainitaan kansainvälisiltä järjestöiltä saadut suositukset, mutta siinä ei selitetä, miksi Suomi on saanut suosituksia tai miksi niiden toteuttamisessa on epäonnistuttu.",
      "learningPoint": "Tarkista erityisesti kiellot ja verbit. Väite voi sisältää samat henkilöt, tapahtumat ja käsitteet kuin aineisto, mutta yksi muutos voi kääntää sen merkityksen vastakkaiseksi.\nHakuvinkki: Hae sanaa suosituksia tai ilmausta ei avaa."
    },
    {
      "id": "g-h5-q8",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Polarisaatio on artikkelin mukaan aina demokratian kannalta ongelma.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "246",
        "section": "polarisaatiota ja demokratiaa käsittelevä kohta"
      },
      "explanation": "Kysymyksessä käytetty sana aina tekee väitteestä liian ehdottoman.\nArtikkelissa ei väitetä, että polarisaatio olisi kaikissa tilanteissa ongelmallista demokratialle. Sen sijaan kirjoittaja korostaa, ettei polarisaatio itsessään ole ongelma.\nTämä ei kuitenkaan tarkoita, etteikö polarisaatio voisi joissakin tilanteissa aiheuttaa ongelmia. Aineiston väitettä ei siis saa tulkita kumpaankaan suuntaan liian ehdottomasti.\n\nLähde:\nArtikkelissa todetaan, ettei polarisaatio itsessään ole demokratian kannalta ongelma.",
      "learningPoint": "Kiinnitä huomiota sanoihin, jotka tekevät väitteestä ehdottoman. Esimerkiksi aina, kaikki, vain, täysin, yksinomaan ja ei koskaan voivat muuttaa aineiston rajatun ajatuksen liian vahvaksi väitteeksi.\nHakuvinkki: Hae ilmausta polarisaatio itsessään."
    },
    {
      "id": "g-h5-q9",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 14,
      "prompt": "Saamelaisten totuus- ja sovintokomission oikeudenmukainen toiminta edellyttää tekstin mukaan, että saamelaiset osallistuvat prosessiin samoista lähtökohdista kuin muut suomalaisen yhteiskunnan toimijat.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "249",
        "section": "saamelaisten totuus- ja sovintokomissiota käsittelevä kohta"
      },
      "explanation": "Artikkelissa korostetaan, että saamelaisten tulee saada osallistua totuus- ja sovintoprosessiin omista lähtökohdistaan. Tämä tarkoittaa, että osallistumisessa on huomioitava heidän oma asemansa ja lähtökohtansa.\nKysymyksessä tämä on muutettu muotoon samoista lähtökohdista kuin muut suomalaisen yhteiskunnan toimijat.\nAineistossa: Saamelaiset osallistuvat omista lähtökohdistaan.\nKysymyksessä: Saamelaiset osallistuvat samoista lähtökohdista kuin muut toimijat.\nVäite on väärin, koska siinä muutetaan oikeudenmukaisen osallistumisen keskeistä edellytystä.\n\nLähde:\nArtikkelissa todetaan, että komission oikeudenmukainen toiminta edellyttää saamelaisten mahdollisuutta osallistua prosessiin omista lähtökohdistaan.",
      "learningPoint": "Kiinnitä huomiota siihen, millä edellytyksillä tai mistä lähtökohdista jokin toiminta tapahtuu. Väitteessä voidaan säilyttää lähes koko alkuperäinen ajatus, mutta muuttaa osallistumista koskeva olennainen rajaus.\nÄlä tarkista vain sitä, että aineistossa puhutaan samoista henkilöistä ja samasta toiminnasta. Selvitä myös, millaiset lähtökohdat tai erityiset edellytykset aineistossa mainitaan.\nHakuvinkki: Hae aineistosta ilmausta omista lähtökohdistaan tai totuus- ja sovintokomission.\nMuistisääntö: Sama toiminta ei tarkoita samoja lähtökohtia."
    },
    {
      "id": "g-h5-q10",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Poliittisen vastakkainasettelun vahvistuminen on artikkelin mukaan itsessään ongelmallista demokratialle.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "vaarin"
      ],
      "source": {
        "articleId": "suomalaisen-demokratiapolitiikan-sudenkuopat",
        "page": "250",
        "section": "poliittista vastakkainasettelua ja demokratiaa käsittelevä kappale"
      },
      "explanation": "Artikkelissa todetaan, ettei poliittisen vastakkainasettelun vahvistuminen ole itsessään ongelmallista demokratialle.\nKysymyksessä tämä ajatus on muutettu päinvastaiseksi poistamalla kielto.\nAineistossa: Poliittisen vastakkainasettelun vahvistuminen ei itsessään ole ongelmallista.\nKysymyksessä: Poliittisen vastakkainasettelun vahvistuminen on itsessään ongelmallista.\nVäitteessä käytetään samoja käsitteitä kuin aineistossa, mutta niiden merkitys on käännetty vastakkaiseksi. Ratkaiseva ero on sanassa ei.\n\nLähde:\n”poliittisen vastakkainasettelun vahvistuminen ei itsessään ole ongelmallista”",
      "learningPoint": "Tarkista, vastaako kysymyksen merkitys aineistossa esitettyä asiaa vai onko se muutettu vastakkaiseksi. Kiinnitä erityistä huomiota kieltoihin sekä sanoihin, jotka muuttavat väitteen merkitystä.\nÄlä päättele vastausta vain sen perusteella, että kysymyksessä esiintyvät samat käsitteet kuin aineistossa. Vertaa myös sitä, mitä käsitteiden välisestä suhteesta todella sanotaan.\nHakuvinkki: Hae aineistosta ilmausta vastakkainasettelun vahvistuminen ja tarkista sitä ympäröivät virkkeet.\nMuistisääntö: Yksi poistettu kielto voi muuttaa koko väitteen merkityksen."
    }
  ]
} satisfies ValintakoeGExercise;
