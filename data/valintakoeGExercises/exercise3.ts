import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 3 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * Lähdedokumentin aikaraja: 40 min.
 */
export const valintakoeGExercise3Base = {
  "id": "harjoitus-3",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 3 – Disinformaation kultakausi koittaa saastuneessa informaatioympäristössä",
  "description": "40 minuutin aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 40,
  "difficulty": "easy",
  "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
  "articleTitle": "Disinformaation kultakausi koittaa saastuneessa informaatioympäristössä",
  "articleUrl": "https://journal.fi/mediaviestinta/article/view/160075",
  "questions": [
    {
      "id": "g-h3-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vastaa artikkelissa esitettyä Oxford Dictionariesin määritelmää totuudenjälkeisyydestä?",
      "options": [
        {
          "id": "a",
          "text": "Tilanteet, joissa objektiiviset faktat vaikuttavat yleiseen mielipiteeseen enemmän kuin tunteisiin vetoaminen."
        },
        {
          "id": "b",
          "text": "Tilanteet, joissa objektiivisilla faktoilla on yleisen mielipiteen muodostumisessa vähemmän merkitystä kuin tunteisiin vetoamisella."
        },
        {
          "id": "c",
          "text": "Tilanteet, joissa faktat ja tunteet vaikuttavat yleiseen mielipiteeseen yhtä voimakkaasti."
        },
        {
          "id": "d",
          "text": "Tilanteet, joissa objektiivisten faktojen merkitys rajoittuu poliittiseen päätöksentekoon."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "177",
        "section": "artikkelin alku"
      },
      "explanation": "B säilyttää määritelmän olennaisen suuruussuhteen: objektiivisten faktojen merkitys on vähäisempi kuin tunteisiin vetoamisen. A kääntää suhteen päinvastaiseksi ja C muuttaa sen tasavertaiseksi. D puolestaan rajaa määritelmää tavalla, jota tekstissä ei tehdä.",
      "learningPoint": "Tarkista vertailusanojen, kuten enemmän, vähemmän ja yhtä paljon, suunta."
    },
    {
      "id": "g-h3-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 4,
      "prompt": "Vehkoon mukaan vuonna 2016 sosiaalisen median viestintäympäristö ja teknologinen kehitys kohtasivat poliittisen populismin tavalla, joka oli aidosti uutta.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "177"
      },
      "explanation": "Väite vastaa aineistoa täsmällisesti. Tässä ratkaiseva kohta on poliittinen populismi: opiskelijan pitää tarkistaa, minkä poliittisen ilmiön kanssa sosiaalisen median viestintäympäristö ja teknologinen kehitys Vehkoon mukaan kohtasivat vuonna 2016. Jos populismi vaihdettaisiin esimerkiksi liberalismiin, muuten lähes samanlainen väite muuttuisi vääräksi.",
      "learningPoint": "Kiinnitä huomiota väitteen yksittäisiin käsitteisiin. Muuten täysin oikealta näyttävä väite voi muuttua vääräksi yhden keskeisen sanan vuoksi."
    },
    {
      "id": "g-h3-q3",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa artikkelin mukaan totuudenjälkeisyyttä?",
      "options": [
        {
          "id": "a",
          "text": "Yksittäistä poliittista strategiaa, jonka tarkoituksena on korvata perinteinen media sosiaalisella medialla."
        },
        {
          "id": "b",
          "text": "Teknologista kehitystä, jonka seurauksena fiktiivisen sisällön tuottaminen on tullut mahdolliseksi."
        },
        {
          "id": "c",
          "text": "Teknologiassa, mediassa ja politiikassa tapahtuneiden kehityskulkujen sarjaa, jonka seurauksena faktaa ja fiktiota on entistä helpompi sekoittaa."
        },
        {
          "id": "d",
          "text": "Sosiaalisen median kehitysvaihetta, jossa poliitikot ovat menettäneet mahdollisuutensa viestiä suoraan seuraajilleen."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "177"
      },
      "explanation": "C tiivistää kirjoittajan määritelmän säilyttäen sekä kehityskulkujen kolme aluetta että niiden seurauksen. Muut vaihtoehdot kaventavat tai muuttavat määritelmää.",
      "learningPoint": "Etsi kappaleen pääajatus sen sijaan, että etsisit vain täysin samoja sanoja."
    },
    {
      "id": "g-h3-q4",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Vehkoon mukaan Trumpin jakaman ”Trump Gaza” -tekoälyvideon poliittinen strategia perustuu siihen, että videon pitäisi näyttää niin aidolta, ettei katsoja tunnista sitä tekoälyllä tehdyksi.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "178"
      },
      "explanation": "Kirjoittaja esittää lähes päinvastaisen ajatuksen: videon tekoälyperäisyys on hänen mukaansa nähtävissä. Poliittinen strategia perustuu tekstissä siihen, ettei minkään tarvitse olla totta, ei siihen, että tekoälyn käyttö pitäisi onnistuneesti salata.",
      "learningPoint": "Tarkista, onko vaihtoehdossa aineiston merkityssuunta käännetty vastakkaiseksi."
    },
    {
      "id": "g-h3-q5",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista pitävät artikkelin mukaan paikkansa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "X:stä on purettu vihapuheen ja disinformaation vastaisia sääntöjä."
        },
        {
          "id": "b",
          "text": "Meta ilmoitti luopuvansa faktantarkistusohjelmastaan kaikkialla maailmassa."
        },
        {
          "id": "c",
          "text": "Trumpin hallinto on pysäyttänyt venäläisen propagandan torjumiseen tarkoitettuja operaatioita."
        },
        {
          "id": "d",
          "text": "Mark Zuckerberg ilmoitti Metan luopuvan faktantarkistusohjelmastaan Yhdysvalloissa."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c",
        "d"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "178"
      },
      "explanation": "A, C ja D vastaavat tekstissä esitettyjä tietoja. B laajentaa Yhdysvaltoja koskevan tiedon perusteettomasti koko maailmaan. Tässä kannattaa tarkistaa erityisesti väitteen kohdejoukko ja maantieteellinen rajaus.",
      "learningPoint": "Tarkista aina, koskeeko väite täsmälleen samaa joukkoa tai aluetta kuin aineistossa."
    },
    {
      "id": "g-h3-q6",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 1,
      "prompt": "Voiko artikkelin mukaan tutusta puheäänestä tuottaa synteettisen äänen jo muutaman sekunnin puhenäytteen perusteella?",
      "options": [
        {
          "id": "kylla",
          "text": "Kyllä"
        },
        {
          "id": "ei",
          "text": "Ei"
        }
      ],
      "correctAnswerIds": [
        "kylla"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "178"
      },
      "explanation": "Teksti ilmaisee asian suoraan. Ratkaisevaa on huomata sekä tarvittavan puhenäytteen lyhyys että se, että kyse on synteettisen äänen tuottamisesta.",
      "learningPoint": "Harjoittele yksittäisen täsmällisen tiedon löytämistä nopeasti oikeasta tekstikohdasta."
    },
    {
      "id": "g-h3-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Mikä seuraavista on EPÄTOSI artikkelissa esitetyn faktantarkistuksen käsitteen perusteella?",
      "options": [
        {
          "id": "a",
          "text": "Faktantarkistus voi tarkoittaa poliitikkojen esittämien väitteiden tarkistamista."
        },
        {
          "id": "b",
          "text": "Faktantarkistus voi olla ennen julkaisua tapahtuva osa journalistista prosessia."
        },
        {
          "id": "c",
          "text": "Faktantarkistuksessa voidaan tarkistaa myös jutun narratiivia ja kronologiaa."
        },
        {
          "id": "d",
          "text": "Faktantarkistus tarkoittaa journalismissa yksinomaan yksittäisten faktatietojen oikeellisuuden tarkistamista."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "Artikkelissa faktantarkistus kuvataan laajaksi alueeksi. Siihen voivat kuulua muun muassa politiikan faktantarkistus, julkaisua edeltävä tarkistus, narratiivin ja kronologian arviointi, OSINT sekä verkkomateriaalin aitouden tarkistaminen. D tekee tästä perusteettomasti yksinomaisen toiminnan.",
      "learningPoint": "Kiinnitä huomiota sanoihin kuten vain, aina, kaikki ja yksinomaan."
    },
    {
      "id": "g-h3-q8",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista ilmaisee artikkelissa esitetyn ajatuksen faktantarkistuksen ja tiedonhankinnan suhteesta eri sanoin mutta saman merkityksen säilyttäen?",
      "options": [
        {
          "id": "a",
          "text": "Faktantarkistus ja tiedonhankinta ovat toisilleen läheisiä journalistisia osa-alueita."
        },
        {
          "id": "b",
          "text": "Faktantarkistus on korvannut tiedonhankinnan journalistisessa työssä."
        },
        {
          "id": "c",
          "text": "Faktantarkistus ja tiedonhankinta ovat toisistaan riippumattomia työvaiheita."
        },
        {
          "id": "d",
          "text": "Tiedonhankinta on faktantarkistuksen vastakohta journalistisessa työssä."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "A ilmaisee lähisukulaisuuden eri sanoin säilyttäen alkuperäisen merkityksen. Muut vaihtoehdot muuttavat näiden kahden toiminnan välistä suhdetta.",
      "learningPoint": "Älä etsi vain samoja sanoja; tarkista, säilyykö merkitys sanamuodon vaihtuessa."
    },
    {
      "id": "g-h3-q9",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 9,
      "prompt": "Artikkelin mukaan faktapohjaisuus on journalismin perusta, mutta faktojen tarkistamista ja tiedon verifiointia on jo pitkään opetettu alan korkeakouluopinnoissa järjestelmällisesti omina kursseinaan.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "Väite muuttaa artikkelin ajallista tietoa. Tekstin mukaan omia kursseja ei ole juurikaan ollut ennen viime vuosia, kun taas tehtävä sijoittaa järjestelmällisen opetuksen jo pitkälle menneisyyteen.",
      "learningPoint": "Tarkista erityisesti ilmaukset kuten ennen, nykyään, viime vuosina ja aiemmin."
    },
    {
      "id": "g-h3-q10",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista EIVÄT pidä paikkaansa artikkelin perusteella? Valitse kaikki väärät vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Faktantarkistuksen ja verifioinnin osaamista pitäisi Vehkoon mukaan päivittää jatkuvasti."
        },
        {
          "id": "b",
          "text": "Totuudenjälkeisestä politiikasta uutisoitaessa toimittajan pitäisi välttää harhaanjohtavien narratiivien tahatonta vahvistamista."
        },
        {
          "id": "c",
          "text": "Vehkoon mukaan ”väestönvaihtoon” viittaavia poliitikkojen lausuntoja kontekstoitiin aiemmin järjestelmällisemmin salaliittoteorioihin kuin nykyään."
        },
        {
          "id": "d",
          "text": "Verkossa liikkuvan materiaalin aitouden tarkistaminen kuuluu artikkelissa faktantarkistuksen laajaan alueeseen."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "C kääntää tekstissä kuvatun kehityksen suunnan. Artikkelin mukaan kontekstointi on nykyään yleisempää kuin muutama vuosi sitten, ei päinvastoin. A, B ja D vastaavat artikkelissa esitettyä.",
      "learningPoint": "Kun tekstissä verrataan ennen–nyt-tilannetta, tarkista tarkasti, kumpaan suuntaan muutos tapahtuu."
    },
    {
      "id": "g-h3-q11",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Oikein vai väärin? Artikkelin mukaan informaation ja datan määrän kasvu johtuu siitä, että mis- ja disinformaation määrä kasvaa.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "Aineistossa suhde kulkee informaation ja datan kokonaismäärästä niiden sisältämään mis- ja disinformaatioon: ihmiskunta tuottaa kasvavan määrän informaatiota ja dataa, josta osa on mis- ja disinformaatiota. Kysymyksen väite kääntää suhteen ja esittää mis- ja disinformaation kasvun informaation ja datan kokonaismäärän kasvun syyksi. Tällaista syy-seuraussuhdetta aineistossa ei esitetä.",
      "learningPoint": "Kun tekstissä kuvataan kahden asian välistä suhdetta, tarkista kumpi liittyy kumpaan. Samojen käsitteiden esiintyminen sekä tekstissä että väitteessä ei riitä, jos niiden välinen suhde on käännetty."
    }
  ]
} satisfies ValintakoeGExercise;
