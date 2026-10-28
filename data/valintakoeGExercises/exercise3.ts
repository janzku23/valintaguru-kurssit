import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 3: päivitetyn tehtävätekstin tehtävät 1–10.
 * Tehtävän 10 perustelu ja oppimisvinkki säilytettiin vanhasta tiedostosta,
 * koska uusi teksti katkesi. Kategoria päivitettiin sisältöä vastaavaksi (3).
 * Lähdelainaukset ovat explanation-kentissä.
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
  "articleUrl": "https://journal.fi/prologi/article/view/157134/102515",
  "questions": [
    {
      "id": "g-h3-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 10,
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "177",
        "section": "artikkelin alku."
      },
      "explanation": "Ratkaisevaa on kahden asian keskinäinen suhde. Aineiston mukaan objektiivisilla faktoilla on vähemmän merkitystä kuin tunteisiin vetoamisella.\nA kääntää suuruussuhteen päinvastaiseksi. C tekee asioista yhtä merkityksellisiä. D puolestaan lisää määritelmään rajauksen, jota aineistossa ei ole.\n\nLähdelainaus:\n”objektiivisilla faktoilla on vähemmän merkitystä yleiseen mielipiteeseen kuin tunteisiin vetoamisella.”",
      "learningPoint": "Kun kysymyksessä verrataan kahta asiaa, tarkista kummankin asema. Kiinnitä erityistä huomiota sanoihin kuten enemmän, vähemmän, suurempi, pienempi ja yhtä paljon."
    },
    {
      "id": "g-h3-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 1,
      "prompt": "Vehkoon mukaan vuonna 2016 sosiaalisen median viestintäympäristö ja teknologinen kehitys kohtasivat poliittisen populismin tavalla, joka oli aidosti uutta.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "177"
      },
      "explanation": "Väite vastaa aineistoa suoraan. Siinä mainitaan sama vuosi, samat kehityskulut ja sama poliittinen ilmiö kuin aineistossa.\nTässä ei tarvitse tehdä laajempaa päätelmää. Olennaista on paikantaa kohta ja tarkistaa, vastaako väite siinä annettua tietoa.\n\nLähdelainaus:\n”vuonna 2016 sosiaalisen median viestintäympäristö ja teknologinen kehitys kohtasivat poliittisen populismin tavalla, joka oli aidosti uutta.”",
      "learningPoint": "Poimi väitteestä yksilöllinen hakusana, kuten 2016 tai populismi, paikanna kohta aineistosta ja tarkista väitteen sisältö sitä ympäröivästä tekstistä."
    },
    {
      "id": "g-h3-q3",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "177"
      },
      "explanation": "C tiivistää aineiston pidemmän kuvauksen säilyttäen sen keskeisen merkityksen. Totuudenjälkeisyyttä ei kuvata vain teknologisena tai poliittisena ilmiönä, vaan useiden kehityskulkujen kokonaisuutena.\n\nLähdelainaus:\n”Totuudenjälkeisyys on sarja teknologiassa, mediassa ja politiikassa tapahtuneita kehityskulkuja...”",
      "learningPoint": "Selvitä, mitä aineistossa todella tarkoitetaan, ja vertaa vaihtoehtojen merkitystä siihen. Oikea vaihtoehto voi käyttää eri sanoja ja tiivistää pidemmän tekstikohdan."
    },
    {
      "id": "g-h3-q4",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Vehkoon mukaan Trumpin jakaman ”Trump Gaza” tekoälyvideon poliittinen strategia perustuu siihen, että videon pitäisi näyttää niin aidolta, ettei katsoja tunnista sitä tekoälyllä tehdyksi.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "178"
      },
      "explanation": "Kysymyksessä aineiston merkitys käännetään vastakkaiseksi. Aineiston mukaan videon tekoälyperäisyys on selvästi havaittavissa. Poliittinen strategia ei siis perustu siihen, että tekoälyn käyttö onnistuttaisiin piilottamaan katsojalta.\n\nLähdelainaus:\n”Kuka tahansa näkee, että video on tekoälyllä tehty...”",
      "learningPoint": "Älä tarkista vain sitä, esiintyvätkö samat asiat aineistossa. Vertaa myös väitteen merkitystä alkuperäiseen tekstiin ja tarkista, onko se käännetty vastakkaiseksi."
    },
    {
      "id": "g-h3-q5",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 14,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A, C ja D vastaavat aineiston tietoja.\nB on väärin, koska aineistossa Metan faktantarkistusohjelmasta luopuminen rajataan Yhdysvaltoihin. Kysymyksessä tämä laajennetaan koskemaan koko maailmaa.\n\nLähdelainauset:\n”Vihapuheen ja disinformaation vastaiset säännöt on purettu X:stä.”\n”Meta luopuu faktantarkistusohjelmastaan Yhdysvalloissa.”",
      "learningPoint": "Tarkista aina, kuinka laajaa joukkoa, aluetta tai tilannetta aineiston tieto koskee. Jos aineistossa asia rajataan esimerkiksi yhteen maahan, sitä ei voi ilman perustetta yleistää koko maailmaan."
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
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "kylla"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "178"
      },
      "explanation": "Aineistossa asia ilmaistaan suoraan. Synteettisen äänen tuottamiseen voi riittää vain muutaman sekunnin puhenäyte.\n\nLähdelainaus:\n”Kenen tahansa puheesta voi nykyään tuottaa synteettisen äänen vain muutaman sekunnin puhenäytteen pohjalta.”",
      "learningPoint": "Paikanna kysymyksen ratkaiseva yksityiskohta aineistosta ja tarkista se suoraan. Tässä olennaisia hakusanoja ovat esimerkiksi synteettinen ääni ja puhenäyte."
    },
    {
      "id": "g-h3-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 8,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "Artikkelissa faktantarkistus kuvataan laajaksi kokonaisuudeksi. Siihen voi kuulua esimerkiksi poliittisten väitteiden tarkistamista, julkaisua edeltävää tarkistamista sekä narratiivin ja kronologian arviointia.\nD rajaa faktantarkistuksen yksinomaan yksittäisten faktatietojen tarkistamiseen. Tämä tekee aineiston laajemmasta kuvauksesta perusteettoman ehdottoman.\n\nLähdelainaus:\n”faktantarkistus ei ole pelkkää yksityiskohtien syynäämistä.”",
      "learningPoint": "Kiinnitä huomiota ehdottomiin sanoihin, kuten vain, aina, kaikki, yksinomaan ja ei koskaan. Tarkista, onko aineiston väite todella yhtä ehdoton kuin kysymyksessä."
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
          "text": "Faktantarkistus ja tiedonhankinta ovat toisilleen läheisiä journalistisia osa alueita."
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "A ilmaisee sanan lähisukulaisia eri tavalla. Ilmaus ”toisilleen läheisiä journalistisia osa alueita” säilyttää aineiston alkuperäisen merkityksen.\n\nLähdelainaus:\n”Faktantarkistus ja tiedonhankinta ovat lähisukulaisia.”",
      "learningPoint": "Älä etsi vain aineiston täsmälleen samoja sanoja. Vertaa kysymyksen ja aineiston merkityksiä. Eri sanamuoto voi ilmaista täysin saman asian."
    },
    {
      "id": "g-h3-q9",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Artikkelin mukaan faktapohjaisuus on journalismin perusta, mutta faktojen tarkistamista ja tiedon verifiointia on jo pitkään opetettu alan korkeakouluopinnoissa järjestelmällisesti omina kursseinaan.",
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
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "Aineiston mukaan omia kursseja ei ole juurikaan ollut ennen viime vuosia. Kysymyksessä opetus sijoitetaan paljon aikaisemmaksi väittämällä sitä tapahtuneen järjestelmällisesti jo pitkään.\n\nLähdelainaus:\n”faktojen tarkistamista ja tiedon verifiointia ei ole juurikaan opetettu alan korkeakouluopinnoissa omina kursseinaan ennen viime vuosia.”",
      "learningPoint": "Kiinnitä huomiota ajallisiin ilmauksiin, kuten ennen, jälkeen, aiemmin, nykyään, viime vuosina ja jo pitkään. Tieto voi olla oikea, mutta väärään ajankohtaan sijoitettuna koko väite muuttuu vääräksi."
    },
    {
      "id": "g-h3-q10",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 3,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "disinformaation-kultakausi-koittaa-saastuneessa-informaatioymparistossa",
        "page": "179"
      },
      "explanation": "C kääntää tekstissä kuvatun kehityksen suunnan. Artikkelin mukaan kontekstointi on nykyään yleisempää kuin muutama vuosi sitten, ei päinvastoin. A, B ja D vastaavat artikkelissa esitettyä.\n\nLähdelainaus:\n”vielä muutama vuosi sitten moni poliitikko sai kyseenalaistamatta viitata ’väestönvaihtoon’, nykyään tällaiset lausunnot kontekstoidaan usein salaliittoteoriaan viittaavina.”",
      "learningPoint": "Kun tekstissä verrataan ennen–nyt-tilannetta, tarkista tarkasti, kumpaan suuntaan muutos tapahtuu."
    }
  ]
} satisfies ValintakoeGExercise;
