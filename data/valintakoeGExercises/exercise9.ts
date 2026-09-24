import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 9 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
 */
export const valintakoeGExercise9Base = {
  "id": "harjoitus-9",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 9 – Populismi ei ole vain populismia",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "populismi-ei-ole-vain-populismia",
  "articleTitle": "Populismi ei ole vain populismia",
  "articleUrl": "https://journal.fi/politiikka/article/view/97344",
  "questions": [
    {
      "id": "g-h9-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Mikä seuraavista kuvaa artikkelin mukaan populaarin politiikan ja uusoikeistolaisen populismin keskeistä eroa?",
      "options": [
        {
          "id": "a",
          "text": "Populaari politiikka perustuu vahvaan johtajuuteen, kun taas uusoikeistolainen populismi pyrkii purkamaan poliittisia hierarkioita."
        },
        {
          "id": "b",
          "text": "Populaari politiikka pyrkii purkamaan eriarvoisia suhteita ylläpitäviä hierarkioita, kun taas uusoikeistolaisessa populismissa kansaan vetoaminen liittyy autoritaarisiin poliittisiin pyrkimyksiin."
        },
        {
          "id": "c",
          "text": "Populaari politiikka ja uusoikeistolainen populismi perustuvat molemmat alhaalta päin organisoituvaan poliittiseen toimintaan, mutta niiden tavoitteet eroavat toisistaan."
        },
        {
          "id": "d",
          "text": "Uusoikeistolainen populismi pyrkii korvaamaan hierarkkisia rakenteita demokraattisemmilla rakenteilla, kun taas populaari politiikka säilyttää olemassa olevat hierarkiat."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "99"
      },
      "explanation": "Artikkelissa populaari politiikka kuvataan alhaalta päin nousevaksi toiminnaksi, joka pyrkii purkamaan eriarvoisia yhteiskunnallisia suhteita ylläpitäviä hierarkioita. Uusoikeistolaisessa populismissa kansaan vetoaminen puolestaan yhdistetään autoritaarisiin pyrkimyksiin. Erityisesti C on uskottava häiriövaihtoehto, mutta artikkelin mukaan uusoikeistolaisessa populismissa ei ole kyse laajojen väestönosien kasvavasti itseorganisoituvasta toiminnasta.",
      "learningPoint": "Tarkista, kumpaan kahdesta lähekkäin käsitellystä ilmiöstä ominaisuus kuuluu. Vaihtoehdoissa voidaan käyttää samoja käsitteitä mutta kääntää niiden ominaisuudet vastakkaisiksi. Hakuvinkki: Hae esimerkiksi ”autoritaarisiin”."
    },
    {
      "id": "g-h9-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Perinteisten puolueiden etääntyminen äänestäjäkunnasta ja monien väestöryhmien jokapäiväisestä elämästä on artikkelin mukaan osaltaan avannut tilaa uusoikeistolaiselle populismille.",
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
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "99"
      },
      "explanation": "Väite vastaa artikkelissa esitettyä yhteyttä, mutta ilmaisee sen hieman eri sanoin. Artikkelissa puolueiden etääntymisen kuvataan olevan yksi niistä tekijöistä, jotka ovat avanneet portteja uusoikeistolaisille populistisille pyrkimyksille. Väite ei muuta tätä esimerkiksi väittämällä etääntymistä ainoaksi syyksi.",
      "learningPoint": "Tunnista sama merkitys, vaikka kysymyksessä käytetään eri sanamuotoa kuin artikkelissa. Tässä ”avannut tilaa” vastaa sisällöllisesti tekstin ilmausta ”avanneet portit”. Hakuvinkki: Hae esimerkiksi ”etääntyminen”."
    },
    {
      "id": "g-h9-q3",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista kuuluivat artikkelin mukaan uusliberalismissa omaksuttuihin ratkaisuihin? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Julkisten palveluiden yksityistäminen."
        },
        {
          "id": "b",
          "text": "Universaalien palveluiden laajentaminen."
        },
        {
          "id": "c",
          "text": "Markkinavoimien vapauttaminen."
        },
        {
          "id": "d",
          "text": "Koulutuksen irrottaminen työ- ja elinkeinoelämän vaatimuksista."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "100"
      },
      "explanation": "Artikkelissa mainitaan sekä julkisten palveluiden yksityistäminen että markkinavoimien vapauttaminen. B kääntää yhden yksityiskohdan päinvastaiseksi: universaaleja palveluita kuvataan purettavan, ei laajennettavan. D tekee vastaavan muutoksen koulutuksen kohdalla: tekstissä puhutaan sen alistamisesta työ- ja elinkeinoelämän vaatimuksille.",
      "learningPoint": "Tarkista erityisesti toimintaa kuvaavat sanat. Vaihtoehto voi sisältää oikean kohteen mutta muuttaa esimerkiksi purkamisen laajentamiseksi tai alistamisen irrottamiseksi. Hakuvinkki: Hae esimerkiksi ”julkisten palveluiden”."
    },
    {
      "id": "g-h9-q4",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Mikä seuraavista pitää artikkelin mukaan paikkansa populismin suhteesta perinteisiin oikeisto-, keskusta- ja vasemmistopuolueisiin?",
      "options": [
        {
          "id": "a",
          "text": "Populistiset vaalistrategiat ovat rajoittuneet uusoikeistolaisiin puolueisiin."
        },
        {
          "id": "b",
          "text": "Perinteiset puolueet ovat vastanneet uusoikeistolaiseen populismiin välttämällä populistisia piirteitä omissa vaaliohjelmissaan."
        },
        {
          "id": "c",
          "text": "Perinteiset oikeisto-, keskusta- ja vasemmistopuolueet ovat pyrkineet vastaamaan uusoikeistolaiseen populismiin myös populistisia piirteitä sisältävillä vaaliohjelmilla."
        },
        {
          "id": "d",
          "text": "Perinteiset puolueet ovat omaksuneet populistisia piirteitä ainoastaan silloin, kun ne ovat muodostaneet liittoumia uusoikeistolaisten puolueiden kanssa."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "100"
      },
      "explanation": "Artikkelin mukaan populististen piirteiden käyttö ei rajoitu uusoikeistoon. Myös perinteiset oikeisto-, keskusta- ja vasemmistopuolueet ovat käyttäneet populistisia piirteitä sisältäviä vaaliohjelmia vastatessaan uusoikeistolaiseen populismiin. D on lähellä mahdollista vastausta, mutta sana ”ainoastaan” lisää rajauksen, jota artikkelissa ei esitetä.",
      "learningPoint": "Kiinnitä huomiota ehdottomiin rajauksiin, kuten ”ainoastaan”, ”kaikki” tai ”ei koskaan”. Muuten uskottava väite voi muuttua vääräksi yhden liian ehdottoman sanan vuoksi. Hakuvinkki: Hae esimerkiksi ”vaaliohjelmilla”."
    },
    {
      "id": "g-h9-q5",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Uusoikeistolainen populismi on artikkelin mukaan lähtökohtaisesti uusliberalismin vastaista politiikkaa, koska uusoikeisto on arvostellut perinteisiä puolueita ja poliittisia eliittejä.",
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
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "101"
      },
      "explanation": "Artikkeli varoittaa päättelemästä poliittisia rintamalinjoja pelkästään osapuolten vastakkainasettelusta tai kovista puheista. Uusoikeistossa on kirjoittajan mukaan omaksuttu myös uusliberalistisia näkemyksiä ja tehty kädenojennuksia uusliberalistien suuntaan. Ratkaiseva ilmaus on ”ei ole välttämättä”: uusoikeistolaisen populismin ja uusliberalismin suhdetta ei kuvata yksiselitteisesti vastakkaiseksi.",
      "learningPoint": "Tarkista väitteen varmuusaste. Jos aineistossa sanotaan ”ei välttämättä”, siitä ei voi tehdä ehdotonta päätelmää siitä, että kaksi asiaa olisivat aina vastakkaisia. Hakuvinkki: Hae esimerkiksi ”uusliberalismin vastaista”."
    },
    {
      "id": "g-h9-q6",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Mikä seuraavista kuvaa artikkelin mukaan italialaisen fasismin valtaannousuun liittynyttä tilannetta?",
      "options": [
        {
          "id": "a",
          "text": "Pohjoisen kapitalistit ja etelän suurtilalliset näkivät fasismin voimana, joka pystyi torjumaan radikalisoituneen työväenluokan ja sen liittolaisten pyrkimyksiä."
        },
        {
          "id": "b",
          "text": "Pohjoisen kapitalistit ja etelän suurtilalliset pitivät fasismia uhkana, koska se pyrki vahvistamaan radikalisoituneen työväenluokan asemaa."
        },
        {
          "id": "c",
          "text": "Fasismi sai valtaannousunsa kannalta keskeisen tukensa työväenliikkeeltä, jonka poliittisia pyrkimyksiä se lupasi edistää."
        },
        {
          "id": "d",
          "text": "Fasistien valtaannousussa keskeistä oli pyrkimys säilyttää heikoksi osoittautunut liberaalidemokratia vahvan valtiomahdin sijasta."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "101"
      },
      "explanation": "Artikkelin mukaan pohjoisen kapitalistit ja etelän suurtilalliset näkivät fasismin keinona torjua radikalisoituneen työväenluokan ja sen liittolaisten pyrkimyksiä. B ja C muuttavat tämän suhteen suunnan: fasismi ei tekstissä tue työväenluokan pyrkimyksiä, vaan sen odotettiin torjuvan niitä. D puolestaan kääntää vahvan valtiomahdin ja liberaalidemokratian välisen suhteen.",
      "learningPoint": "Tarkista, kuka toimii ketä vastaan tai kenen hyväksi. Samat toimijat voidaan säilyttää vaihtoehdossa, vaikka niiden välinen suhde olisi käännetty väärin. Hakuvinkki: Hae esimerkiksi ”pohjoisen kapitalistien”."
    },
    {
      "id": "g-h9-q7",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mitkä seuraavista kuvaavat artikkelin mukaan uusoikeistolaista populismia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Sen suhteet muihin poliittisiin ja yhteiskunnallisiin toimijoihin voivat muuttua."
        },
        {
          "id": "b",
          "text": "Sen ymmärtämiseksi tulisi ensisijaisesti muodostaa pysyviä olemusmääritelmiä."
        },
        {
          "id": "c",
          "text": "Sen sisällä ja eri ryhmittymien välillä esiintyy ideologisia eroja."
        },
        {
          "id": "d",
          "text": "Sen poliittiset liittoutumat määräytyvät pysyvästi oikeisto–keskusta–vasemmisto-jaon perusteella."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "101"
      },
      "explanation": "A ja C vastaavat suoraan artikkelin kuvausta: uusoikeistolaisen populismin muuttuvuus liittyy sekä ideologisiin eroihin että muuttuviin suhteisiin muihin toimijoihin. B on väärin, koska myöhemmin tekstissä nimenomaan kyseenalaistetaan pysyvien olemusmääritelmien mielekkyys. D on väärin, koska kirjoittaja kehottaa tarkastelemaan todellisia liittoutumia jäykkien oikeisto–keskusta–vasemmisto-jakojen sijasta.",
      "learningPoint": "Tunnista, mitkä vaihtoehdot tiivistävät tekstikohdan sisällön oikein, vaikka ne eivät toista artikkelin virkkeitä sanasta sanaan. Tarkista jokaisen vaihtoehdon merkitys erikseen. Hakuvinkki: Hae esimerkiksi ”moniulotteinen”."
    },
    {
      "id": "g-h9-q8",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 11,
      "prompt": "Perussuomalaisten vuoden 2007 eduskuntavaaliohjelmassa hyvinvointivaltion universaalisuuden ja sosiaalisen oikeudenmukaisuuden periaatteet ulotettiin artikkelin mukaan kaikkiin Suomessa asuviin ihmisiin.",
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
        "articleId": "populismi-ei-ole-vain-populismia",
        "page": "102"
      },
      "explanation": "Artikkelissa kyllä todetaan, että vuoden 2007 ohjelmassa asetuttiin hyvinvointivaltion universaalisuuden ja sosiaalisen oikeudenmukaisuuden periaatteiden kannalle. Ratkaiseva tarkennus tulee kuitenkin virkkeen lopussa: periaatteet rajattiin koskemaan yksinomaan Suomen kansalaisia. Väite laajentaa kohdejoukon Suomen kansalaisista kaikkiin Suomessa asuviin.",
      "learningPoint": "Tarkista tarkasti, ketä tekstissä esitetty asia koskee. Muuten oikealta näyttävä väite muuttuu vääräksi, jos havainto laajennetaan alkuperäistä suurempaan ryhmään. Hakuvinkki: Hae esimerkiksi ”eduskuntavaaliohjelmassa 2007”."
    }
  ]
} satisfies ValintakoeGExercise;
