import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 3: uusimman tehtävätekstin tehtävät 1–20.
 * Kategoriat vastaavat päivitettyä 14 kategorian luokitusta.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise3Base = {
  "id": "keskivaikea-harjoitus-3",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 3 – Helsinki Garden ja kamppailu kaupunkikuvasta",
  "description": "30 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 30,
  "difficulty": "medium",
  "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
  "articleTitle": "Helsinki Garden ja kamppailu kaupunkikuvasta",
  "articleUrl": "https://journal.fi/yhdyskuntasuunnittelu/article/view/154853/106008",
  "questions": [
    {
      "id": "g-m3-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyä Helsinki Gardenin suunnitteluprosessia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Nordenskiöldinkadun sijaintia pidettiin Mäntymäkeä parempana sekä kaupungin talousvaikutusten että liikenteen kannalta, vaikka myös sen kaupunkikuvallisiin vaikutuksiin liittyi ongelmia."
        },
        {
          "id": "b",
          "text": "Mäntymäen vaihtoehdosta luovuttiin ensisijaisesti sen kaupunkikuvallisten ongelmien vuoksi, koska taloudellisissa ja liikenteellisissä arvioissa sijaintien välillä ei havaittu merkittäviä eroja."
        },
        {
          "id": "c",
          "text": "Hajautetulla eli diaspora-vaihtoehdolla nähtiin olevan kaupunkikuvallisia etuja, mutta sen tarkempaa tutkimista ei jatkettu."
        },
        {
          "id": "d",
          "text": "Nordenskiöldinkatu valittiin lopulliseksi sijainniksi, koska sen kaupunkikuvalliset arvot arvioitiin valmisteluvaiheessa Mäntymäkeä merkittävämmiksi."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "89",
        "section": "3.2. Paikan kaupunkikuvalliset arvot lähtökohtana, suunnittelutehtävänä vai poissaolevina: valmisteluvaiheen vastakkainasettelu."
      },
      "explanation": "A yhdistää oikein Nordenskiöldinkadun taloudelliset ja liikenteelliset edut siihen, ettei sijainti silti ollut kaupunkikuvallisesti ongelmaton. C on oikein, koska hajautetulla mallilla nähtiin kaupunkikuvallisia etuja, mutta sitä ei tutkittu pidemmälle. B sekoittaa julkisessa keskustelussa esitetyn perustelun varsinaisiin ensisijaisiin syihin: artikkelin mukaan Mäntymäen hylkäämisen ensisijaiset syyt olivat kaupunkitaloudellisia ja liikenteellisiä.\n\nLähde:\nSivu 89, luku 3.2. Paikan kaupunkikuvalliset arvot lähtökohtana, suunnittelutehtävänä vai poissaolevina: valmisteluvaiheen vastakkainasettelu.\n\n”Nordenskiöldinkadun sijainti oli talousvaikutusten suhteen merkittävästi Mäntymäkeä parempi kaupungille, ja sijainti arvioitiin myös liikenteellisesti toimivammaksi.”\n\nSamassa kohdassa todetaan, että kaupunkisuunnittelulautakunta näki hankkeen kaupunkikuvallisen vaikutuksen potentiaalisesti ongelmallisena kummassakin sijainnissa. Diaspora-vaihtoehdon vaikutukset kaupunkikuvaan puolestaan nähtiin ”selkeästi positiivisina”, mutta vaihtoehdon tutkimista ei jatkettu.",
      "learningPoint": "Yhdistä arvio oikeaan sijaintiin ja arviointiperusteeseen. Taloudellista tai liikenteellistä etua ei voi siirtää kaupunkikuvalliseksi eduksi, vaikka kaikki näkökulmat esiintyvät samassa tekstikohdassa.\n\nHakuvinkki: Hae esimerkiksi ”Nordenskiöldinkadun sijainti” ja vertaa samasta kohdasta Mäntymäkeä ja diaspora-vaihtoehtoa koskevia tietoja."
    },
    {
      "id": "g-m3-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Helsinki Gardenin kaavavaiheessa rakennuksen kokoa pienennettiin kritiikin seurauksena. Mikä seuraavista kuvaa artikkelin perusteella parhaiten muutosten merkitystä?",
      "options": [
        {
          "id": "a",
          "text": "Muutokset ratkaisivat hankkeen keskeisen kaupunkikuvallisen ongelman, sillä uudisrakennus ei niiden jälkeen enää noussut ympäröivää rakennuskantaa korkeammalle."
        },
        {
          "id": "b",
          "text": "Muutokset olivat artikkelin tulkinnan mukaan melko vähäisiä suhteessa hankkeen mittakaavaan, vaikka rakennuksen pinta-alaa ja korkeutta pienennettiin."
        },
        {
          "id": "c",
          "text": "Muutokset kohdistuivat rakennusten korkeuteen mutta eivät kokonaisalaan, minkä vuoksi hankkeen rakennusvolyymi pysyi käytännössä ennallaan."
        },
        {
          "id": "d",
          "text": "Muutokset olivat ensisijaisesti hallinto-oikeuden määräämiä toimenpiteitä, joilla kaava saatettiin maankäyttö- ja rakennuslain mukaiseksi."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "93",
        "section": "3.3.2. Riittävästi tutkittu ja sopeutettu."
      },
      "explanation": "Tehtävässä pitää yhdistää tehdyt konkreettiset muutokset kirjoittajien arvioon niiden merkityksestä. Hanketta todella pienennettiin sekä pinta-alan että korkeuden osalta, mutta tästä ei seuraa, että mittakaavaongelma olisi kirjoittajien mukaan ratkennut. Hyväksytyn kaavan viitesuunnitelmassa rakennus kohosi edelleen selvästi vanhan jäähallin, Töölön korttelirakenteen ja Olympiastadionin yläpuolelle.\n\nLähde:\nSivu 93, luku 3.3.2. Riittävästi tutkittu ja sopeutettu.\n\n”pinta-alaa pienennettiin 15 000 kerrosalaneliömetrillä ja rakennuksia madallettiin 5-10 metriä korkeimmissa osissa ja 1,5-3 metriä muualla”\n\nTämän jälkeen artikkelissa todetaan:\n\n”Korkeuden madaltaminen oli kuitenkin lähinnä symbolista.”",
      "learningPoint": "Yhdistä konkreettiset muutokset niiden merkitystä koskevaan arvioon. Oikean tiivistelmän pitää säilyttää sekä pienentäminen että kirjoittajien näkemys muutosten vähäisyydestä suhteessa hankkeen mittakaavaan.\n\nHakuvinkki: Hae esimerkiksi ”15 000” tai ”symbolista” ja tarkista sekä muutosten määrä että niitä seuraava tulkinta."
    },
    {
      "id": "g-m3-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\n\nSuunnitteluvarausmenettelyyn liittyvä jännite syntyy artikkelin mukaan siitä, että hankkeen tavoitteita voidaan määritellä varausvaiheessa hyvinkin yksityiskohtaisesti, vaikka varsinaisen kaavoituksen pitäisi säilyä riippumattomana eikä kaavan sisällöstä voida sitovasti sopia etukäteen.",
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
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "82, 83",
        "section": "2.1. Kaupunkisuunnittelu sijoittajavetoisten hankkeiden kirittäjänä."
      },
      "explanation": "Väite yhdistää kaksi samaan ongelmaan kuuluvaa tietoa. Suunnitteluvaraus voi käytännössä määrittää pitkälle tavoiteltavan asemakaavan suuntaviivoja, mutta kaavoituksen pitäisi samalla säilyä itsenäisenä. Juuri tätä sopimussitovuuden ja riippumattoman kaavoituksen välistä suhdetta artikkelissa kuvataan ongelmalliseksi.\n\nLähde:\nSivut 82 ja 83, luku 2.1. Kaupunkisuunnittelu sijoittajavetoisten hankkeiden kirittäjänä.\n\nSivulla 82:\n\n”Varausvaiheessa määritellään käytännössä hyvin yksityiskohtaiset suuntaviivat tavoitellulle asemakaavapäätökselle.”\n\nSivulla 83:\n\n”Sopimuksiin perustuva menettely on siis vaikeassa suhteessa kaavoitusmenettelyn riippumattomuuden kanssa”\n\nLisäksi artikkelissa todetaan, ettei kaavojen sisällöstä voida sopia sitovasti maankäyttösopimuksissa.",
      "learningPoint": "Tunnista kahden läheisen tekstikohdan yhteinen ajatus. Tiivistelmän pitää säilyttää sekä varausvaiheen yksityiskohtainen ohjaus että kaavoituksen riippumattomuuden vaatimus ja niiden välinen jännite.\n\nHakuvinkki: Hae ensin ”suunnitteluvarausjärjestelmä” ja sen jälkeen ”riippumattomuuden”."
    },
    {
      "id": "g-m3-q4",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa oikein artikkelissa esitettyä kaupungin roolin muuttumista Helsinki Garden -hankkeen aikana?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunki siirtyi hankkeen aktiivisesta tukemisesta vähitellen valvojan rooliin, kun hankkeen rahoitusvaikeudet ja kaupunkikuvallinen kritiikki lisääntyivät."
        },
        {
          "id": "b",
          "text": "Kaupunki säilytti koko prosessin ajan ensisijaisesti neutraalin mahdollistajan roolin, vaikka poliittinen johto suhtautui hankkeeseen myönteisesti."
        },
        {
          "id": "c",
          "text": "Kaupungin rooli kehittyi valvonnasta ja hankkeen jarruttamisesta kohti kumppanuutta ja aktiivista hankkeen tukemista."
        },
        {
          "id": "d",
          "text": "Kaupunki muuttui hankkeen kumppaniksi vasta sen jälkeen, kun asemakaava oli hyväksytty ja Museoviraston valitus hylätty."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "95, 96, 97",
        "section": "3.4.1. Muuttuva kaupungin rooli."
      },
      "explanation": "C säilyttää sekä artikkelissa esitetyt roolit että niiden oikean kehityssuunnan. A kääntää suunnan päinvastaiseksi. B sivuuttaa muutoksen aktiiviseksi tukijaksi, ja D sijoittaa kumppaniksi muuttumisen liian myöhäiseen vaiheeseen.\n\nLähde:\nSivu 95, luku 3.4.1. Muuttuva kaupungin rooli.\n\n”Hankkeen edetessä kaupungin rooli muuttui valvojasta jarruksi ja lopulta kumppaniksi.”\n\nSivuilla 96 ja 97 kuvataan lisäksi, kuinka kaupunki siirtyi tukemaan aktiivisesti hankkeen kannattavuutta ja muuttui myöhemmin hankkeen aktiiviseksi ajajaksi.",
      "learningPoint": "Tarkista, mistä roolista kaupunki siirtyi mihinkin. Valvojasta aktiiviseksi tukijaksi muuttuminen ei tarkoita samaa kuin aktiivisesta tukijasta valvojaksi muuttuminen.\n\nHakuvinkki: Hae ”kaupungin rooli muuttui” ja tarkista, missä järjestyksessä artikkelissa kuvataan valvojan, jarrun ja kumppanin roolit."
    },
    {
      "id": "g-m3-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein suojeludiskurssin ja kaupunkikehitysdiskurssin eroa Helsinki Garden -hankkeessa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suojeludiskurssissa olemassa olevan ympäristön kulttuurihistorialliset ja kaupunkikuvalliset arvot muodostivat suunnittelulle reunaehtoja."
        },
        {
          "id": "b",
          "text": "Kaupunkikehitysdiskurssissa kaupunkikuva nähtiin ensisijaisesti olemassa olevan ympäristön ominaisuutena, johon uuden rakentamisen tuli visuaalisesti mukautua."
        },
        {
          "id": "c",
          "text": "Kaupunkikehitysdiskurssissa kaupunkikuvaa voitiin tuottaa uuden arkkitehtuurin avulla ilman vahvaa vaatimusta yhteensovittamisesta olemassa olevaan ympäristöön."
        },
        {
          "id": "d",
          "text": "Suojeludiskurssissa hankkeen mittakaavaa pidettiin ennen kaikkea sijoittajan taloudelliseen kannattavuuteen liittyvänä kysymyksenä."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98",
        "section": "4. Keskustelu ja johtopäätökset."
      },
      "explanation": "A ja C kuvaavat näkökulmien keskeisen eron oikein. Suojeludiskurssissa olemassa olevan paikan arvot määrittävät uuden rakentamisen reunaehtoja. Kaupunkikehitysdiskurssissa kaupunkikuva puolestaan ymmärretään enemmän uuden rakennuksen ja arkkitehtuurin kautta. B liittää suojeludiskurssille ominaisen ajatuksen kaupunkikehitysdiskurssiin, ja D tekee saman hankkeen taloudellista mittakaavaa koskevalle näkemykselle.\n\nLähde:\nSivu 98, luku 4. Keskustelu ja johtopäätökset.\n\n”Suojeludiskurssin lähtökohtana olivat paikkaan kytkeytyvät kulttuurihistorialliset ja kaupunkikuvalliset arvot, jotka nähtiin kontekstuaalisen yhteensovittamisen perustana ja suunnittelun reunaehtona.”\n\nSamalla sivulla kaupunkikehitysdiskurssista todetaan:\n\n”kaupunkikuvalla ei ollut vahvaa yhteyttä olemassa olevaan ympäristöön, vaan se oli lähinnä rakennukseen liittyvä ominaisuus.”",
      "learningPoint": "Yhdistä näkökulma oikeaan diskurssiin. Olemassa olevan ympäristön reunaehdot ja sijoittajan taloudelliset tarpeet esiintyvät molemmat aineistossa, mutta niitä painotetaan eri diskursseissa.\n\nHakuvinkki: Hae ”Suojeludiskurssin lähtökohtana” ja vertaa sitä samalla sivulla olevaan kaupunkikehitysdiskurssin kuvaukseen."
    },
    {
      "id": "g-m3-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista kuvaa oikein Helsinki Gardenin koon kehitystä ja siihen kohdistunutta arviointia ennen kaavavaihetta ja sen alussa?",
      "options": [
        {
          "id": "a",
          "text": "Kilpailun voittaneen ehdotuksen laajuus oli 150 000 neliötä, ja vaikka jury piti sitä tarpeettoman massiivisena, hankkeen laajuus kasvoi myöhemmin osallistumis- ja arviointisuunnitelman vaiheessa yli 200 000 neliöön."
        },
        {
          "id": "b",
          "text": "Kilpailun voittaneen ehdotuksen laajuus ylitti jo 200 000 neliötä, minkä vuoksi sitä supistettiin ennen ensimmäistä julkista kuulemista 150 000 neliöön."
        },
        {
          "id": "c",
          "text": "Jury piti 150 000 neliön ehdotusta mittakaavaltaan onnistuneena, mutta kaavavaiheessa Museovirasto vaati hankkeen kasvattamista yli 200 000 neliöön."
        },
        {
          "id": "d",
          "text": "Hankkeen laajuus pysyi kilpailuvaiheesta ensimmäiseen julkiseen kuulemiseen 150 000 neliössä, mutta rakennusten korkeutta kasvatettiin merkittävästi."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "87, 91",
        "section": "3.2. Paikan kaupunkikuvalliset arvot lähtökohtana, suunnittelutehtävänä vai poissaolevina: valmisteluvaiheen vastakkainasettelu."
      },
      "explanation": "Ratkaisussa pitää yhdistää kaksi hankkeen eri vaihetta. Kilpailun voittanut 150 000 neliön ehdotus oli jo juryn mielestä tarpeettoman massiivinen. Tästä huolimatta hanke ei pienentynyt ennen kaavavaihetta, vaan oli osallistumis- ja arviointisuunnitelman yhteydessä kasvanut yli 200 000 neliöön. Muut vaihtoehdot muuttavat joko lukujen järjestystä, juryn arviota tai kehityksen suuntaa.\n\nLähde:\nSivu 91, luku 3.2. Paikan kaupunkikuvalliset arvot lähtökohtana, suunnittelutehtävänä vai poissaolevina: valmisteluvaiheen vastakkainasettelu.\n\n”Arkkitehtikilpailun voittanut ehdotus oli raadin mielestä tarpeettoman massiivinen, tosin kehityskelpoinen. Ehdotuksen laajuus oli 150 000 neliötä”\n\nSivu 87, luku 3.1. Konteksti: Helsinki Gardenin monitoimiareenan päävaiheet.\n\n”hanke oli kasvanut entistä suuremmaksi, yli 200 000 neliön laajuiseksi”",
      "learningPoint": "Yhdistä kumpikin laajuus oikeaan suunnitteluvaiheeseen. Molemmat luvut löytyvät tekstistä, mutta niiden sijoittaminen vääriin vaiheisiin muuttaa myös kuvatun kehityksen vääräksi.\n\nHakuvinkki: Hae ensin ”150 000” ja sen jälkeen ”200 000”. Tarkista kummankin luvun yhteydessä, mihin hankkeen vaiheeseen se liittyy."
    },
    {
      "id": "g-m3-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa kuvattua Helsinki Gardenin kaavavaiheen konfliktia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "SAFA, Museovirasto ja Helsingin kaupunginmuseo kohdistivat kritiikkiä erityisesti hankkeen mittakaavaan ja sen suhteeseen arvokkaaseen kulttuuriympäristöön."
        },
        {
          "id": "b",
          "text": "Museovirasto katsoi jo ensimmäisessä kannanotossaan, ettei hankkeen kaupunkikuvallisia ongelmia voitaisi missään tapauksessa ratkaista jatkosuunnittelulla."
        },
        {
          "id": "c",
          "text": "Kaavaluonnosvaiheessa Museovirasto arvioi, ettei suunnitelma ollut kulttuuriympäristön kannalta olennaisesti parantunut ja ettei valtavan koon aiheuttamaa ristiriitaa voitu ratkaista arkkitehtuurin keinoin."
        },
        {
          "id": "d",
          "text": "Kaavaehdotusvaiheessa asiantuntijakritiikki lieveni, koska rakennusmassojen supistamisen katsottiin poistaneen hankkeen keskeiset ongelmat."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91, 92",
        "section": "3.3.1. Sopimaton, aivan liian massiivinen."
      },
      "explanation": "A kuvaa asiantuntijatahojen kritiikin keskeistä sisältöä ja C Museoviraston myöhempää, selvästi jyrkempää kantaa. B on väärin, koska ensimmäisessä kannanotossa Museovirasto piti ongelmien huomioon ottamista jatkosuunnittelussa vielä mahdollisena. Tehtävässä pitää siis huomata myös kannan muuttuminen prosessin eri vaiheissa. D on väärin, sillä kritiikki päinvastoin voimistui kaavaehdotusvaiheessa.\n\nLähde:\nSivut 91 ja 92, luku 3.3.1. Sopimaton, aivan liian massiivinen.\n\nEnsimmäisessä vaiheessa SAFA ja Museovirasto sekä Helsingin kaupunginmuseo kritisoivat hankkeen mittakaavaa suhteessa Olympiastadioniin ja Keskuspuistoon.\n\nMuseoviraston ensimmäisestä kannanotosta todetaan sivulla 92:\n\n”näkökohdat voitaisiin ottaa huomioon taitavalla jatkosuunnittelulla.”\n\nMyöhemmin kaavaluonnoksesta Museovirasto totesi:\n\n”Valtava koko on paikkaansa täysin sopimaton, eikä ristiriitaa voi ratkaista arkkitehtuurin keinoin.”",
      "learningPoint": "Yhdistä toimijan kanta oikeaan vaiheeseen. Myöhemmin esitettyä jyrkempää arviota ei saa siirtää ensimmäiseksi kannanotoksi.\n\nHakuvinkki: Hae ”Museovirasto” ja vertaa vuoden 2018 eri vaiheissa esitettyjä kannanottoja."
    },
    {
      "id": "g-m3-q8",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista päätelmistä on artikkelin perusteella perusteltu kaupungin taloudellisesta tuesta Helsinki Garden -hankkeelle?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunki piti koko hankkeen ajan kiinni markkinahintaisuudesta, vaikka se tuki hankkeen kannattavuutta muilla tavoilla."
        },
        {
          "id": "b",
          "text": "Kaupunki rahoitti hanketta alusta lähtien suoraan julkisilla varoilla, vaikka hanketta kuvattiin julkisuudessa yksityisrahoitteiseksi."
        },
        {
          "id": "c",
          "text": "Kaupungin osallistuminen hankkeen taloudellisten edellytysten tukemiseen vahvistui prosessin aikana, ja myöhemmin kaupunki myös luopui tontin markkinahintaisuuden vaatimuksesta."
        },
        {
          "id": "d",
          "text": "Kaupungin taloudellinen tuki päättyi sen jälkeen, kun suunnittelualueen ulkopuolelle luvattu asuntorakennusoikeus poistettiin hankkeesta."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "96, 97",
        "section": "3.4.1. Muuttuva kaupungin rooli."
      },
      "explanation": "C yhdistää prosessin kaksi eri vaihetta oikein. Kaupunki tuki ensin hankkeen kannattavuutta mutta ilmoitti pitävänsä kiinni tontin markkinahintaisuudesta. Myöhemmin tästäkin periaatteesta luovuttiin. A kuvaa vain aikaisempaa vaihetta ja yleistää sen virheellisesti koko prosessiin.\n\nLähde:\nSivu 96, luku 3.4.1. Muuttuva kaupungin rooli.\n\n”Kaupunki tuki nyt aktiivisesti hankkeen kannattavuuden toteutumista hankkeen ehdoilla, mutta tontin myynnin osalta kaupunki vakuutti pysyvänsä markkinahintaisuudessa”\n\nSivu 97, luku 3.4.2. Kaupungin ajautuminen hankkeen kumppaniksi.\n\n”lopulta kaupunki laski tontin hintaa neljännekseen ja luopui markkinahintaisuuden vaatimuksesta”",
      "learningPoint": "Tarkista, koskeeko tieto yhtä vaihetta vai koko prosessia. Aikaisempi sitoutuminen markkinahintaisuuteen ei kuvaa myöhempää tilannetta, jossa vaatimuksesta luovuttiin.\n\nHakuvinkki: Hae ensin ”markkinahintaisuudessa” ja sitten ”luopui markkinahintaisuuden”."
    },
    {
      "id": "g-m3-q9",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyä Groatin jaottelua uuden arkkitehtuurin suhteesta ympäristöönsä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Yhdessä lähestymistavassa uuden arkkitehtuurin ajatellaan edustavan omaa aikaansa, jolloin sen ei tarvitse visuaalisesti sopeutua ympäristöönsä."
        },
        {
          "id": "b",
          "text": "Visuaalista yhtenäisyyttä ja jatkuvuutta korostava lähestymistapa kuuluu niihin kategorioihin, joissa kontekstuaaliseen yhteensopivuuteen pyritään."
        },
        {
          "id": "c",
          "text": "Kaikissa neljässä lähestymistavassa uuden rakennuksen edellytetään sopeutuvan olemassa olevaan ympäristöön, mutta sopeutumisen voimakkuus vaihtelee."
        },
        {
          "id": "d",
          "text": "Syvällisempi kontekstin ymmärtäminen kuuluu lähestymistapaan, jossa sopeutuminen ulottuu pelkkää visuaalista yhteensopivuutta laajemmalle."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "84, 85",
        "section": "2.2. Kaupunkikuvan suojelu ja vaaliminen."
      },
      "explanation": "A, B ja D sijoittavat Groatin kuvaamat ominaisuudet oikeisiin lähestymistapoihin. C on väärin, koska artikkelissa tehdään nimenomainen ero kategorioiden välille: kahdessa ensimmäisessä kontekstuaalinen yhteensopivuus ei ole välttämätöntä, kun taas kahdessa jälkimmäisessä siihen pyritään.\n\nLähde:\nSivut 84 ja 85, luku 2.2. Kaupunkikuvan suojelu ja vaaliminen.\n\n”uuden arkkitehtuurin tulee heijastaa nykyaikaa eikä sen tarvitse sopeutua visuaalisesti ympäristöönsä.”\n\nArtikkelissa erotellaan tämän lisäksi lähestymistapa, jossa korostetaan uuden ja vanhan ympäristön visuaalista yhtenäisyyttä ja jatkuvuutta, sekä lähestymistapa, jossa sopeutumiseen kuuluu syvällisempi ymmärrys kontekstista.\n\nSivulla 85 jaottelu tiivistetään:\n\n”Kaksi ensimmäistä kategoriaa voidaan ymmärtää siten, että rakennuksen kontekstuaalinen yhteensopivuus ei ole välttämätöntä, kun taas kaksi jälkimmäistä pyrkivät siihen.”",
      "learningPoint": "Tarkista sana ”kaikissa”. Vain osaan lähestymistavoista kuuluvaa vaatimusta ei voi yleistää koko neliosaiseen jaotteluun.\n\nHakuvinkki: Hae ”neljällä tavalla” ja tarkista sen jälkeen kaikkien neljän lähestymistavan erot."
    },
    {
      "id": "g-m3-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Tosi vai epätosi?\n\nHelsinki Gardenin ensimmäinen varsinainen julkinen kuuleminen tapahtui vasta kaavavaiheessa vuonna 2018, vaikka hankkeen sijaintiin ja volyymiin liittyvät keskeiset ratkaisut oli tehty jo valmisteluvaiheessa.",
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
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91",
        "section": "3.3.1. Sopimaton, aivan liian massiivinen."
      },
      "explanation": "Väitteen molemmat osat vastaavat artikkelia. Ensimmäinen varsinainen kuuleminen tapahtui vuonna 2018, mutta hankkeen kaupunkikuvallisen yhteensopivuuden kannalta keskeiset ratkaisut sijainnista ja volyymista oli tehty jo aiemmin. Olennaista on yhdistää päätösten ajankohta osallistamisen ajankohtaan.\n\nLähde:\nSivu 91, luku 3.3.1. Sopimaton, aivan liian massiivinen.\n\n”sijainti ja volyymi oli ratkaistu jo hankevalmisteluvaiheessa, ennen kaavoituksen alkamista ja ennen varsinaista ensimmäistä kuulemista 2018.”\n\nSamassa kohdassa todetaan:\n\n”Hankkeen suuruusluokkaan nähden julkinen kuuleminen alkoi hyvin myöhään.”",
      "learningPoint": "Tarkista tapahtumien keskinäinen ajoitus. Sijaintia ja volyymia koskevat ratkaisut edelsivät ensimmäistä varsinaista julkista kuulemista, eikä niiden ajankohtia voi vaihtaa keskenään.\n\nHakuvinkki: Hae ”ensimmäistä kuulemista” ja tarkista samasta kappaleesta, mitä oli jo ratkaistu ennen sitä."
    },
    {
      "id": "g-m3-q11",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelin tulkintaa arkkitehtikilpailun merkityksestä Helsinki Garden -prosessissa?",
      "options": [
        {
          "id": "a",
          "text": "Kilpailu haastoi hankkeen sijoittajavetoisesti määrätyn laajuuden, minkä seurauksena hankkeen volyymia pienennettiin olennaisesti jo ennen kaavoitusta."
        },
        {
          "id": "b",
          "text": "Kilpailu toimi kirjoittajien mukaan ennen kaikkea keinona arvioida eri sijaintivaihtoehtoja, minkä seurauksena hajautettu malli valittiin jatkosuunnitteluun."
        },
        {
          "id": "c",
          "text": "Kilpailu esitettiin laadun takeena, mutta kirjoittajien tulkinnan mukaan se pikemminkin validoi jo valittua ratkaisuperiaatetta kuin haastoi hankkeen lähtökohtaisesti määrättyä laajuutta."
        },
        {
          "id": "d",
          "text": "Kilpailun keskeinen tehtävä oli ratkaista hankkeen rahoitusongelmat tuomalla mukaan uusia yksityisiä sijoittajia."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98",
        "section": "4. Keskustelu ja johtopäätökset."
      },
      "explanation": "C yhdistää kaksi artikkelissa erotettua tasoa: sen, miten kilpailua perusteltiin, ja sen, miten kirjoittajat tulkitsevat sen tosiasiallista merkitystä. Kilpailu esitettiin laadun takaavana ratkaisuna, mutta kirjoittajien analyysissa se ei aidosti haastanut hankkeen lähtökohtia. A kääntää tämän tulkinnan päinvastaiseksi.\n\nLähde:\nSivu 98, luku 4. Keskustelu ja johtopäätökset.\n\n”Kaupunkikehitysdiskurssin näkökulmasta kaupunkikuva ’hoidettiin’ arkkitehtikilpailulla, joka esitettiin laadun takeena”\n\nKirjoittajat jatkavat, että kilpailu:\n\n”näyttäytyi ennemminkin jo valitun ratkaisuperiaatteen validoimiselta”\n\nkuin sijoittajavetoisesti määrätyn laajuuden haastamiselta.",
      "learningPoint": "Vertaa kilpailulle annettua tehtävää kirjoittajien tulkintaan. Valitun ratkaisun vahvistaminen ja sen lähtökohtien haastaminen ovat eri asioita, eikä ensimmäistä voi muuttaa jälkimmäiseksi.\n\nHakuvinkki: Hae ”laadun takeena” ja lue myös sitä seuraava arvio kilpailun tosiasiallisesta merkityksestä."
    },
    {
      "id": "g-m3-q12",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa kuvattua kaupunkikuvallisten ja kulttuurihistoriallisten arvojen arvioinnin ongelmaa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kaupunkikuvallisten arvojen huomioon ottamista vaikeuttaa se, ettei niitä ole helppo tunnistaa ja mitata."
        },
        {
          "id": "b",
          "text": "Visuaalisten ja esteettisten ominaisuuksien arviointi voidaan kokea subjektiiviseksi, mikä vaikeuttaa niitä koskevaa argumentointia."
        },
        {
          "id": "c",
          "text": "Kulttuuriympäristöarvojen arvioinnissa asiantuntijatiedon asema on täysin yksiselitteinen, koska museoviranomaisten lain turvaamaa asiantuntija-asemaa ei voida suunnitteluprosessissa kyseenalaistaa."
        },
        {
          "id": "d",
          "text": "Museoviranomaisilla on kulttuuriperintökysymyksissä lain turvaama asiantuntija-asema, mutta heidän asiantuntijatietoaan voidaan tästä huolimatta kyseenalaistaa suunnitteluprosesseissa."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "85",
        "section": "2.2. Kaupunkikuvan suojelu ja vaaliminen."
      },
      "explanation": "A ja B kuvaavat kaupunkikuvallisen arvottamisen yleisiä vaikeuksia. D yhdistää oikein kaksi näennäisesti ristiriitaista tietoa: museoviranomaisilla on lain turvaama asiantuntija-asema, mutta tämä ei tarkoita, ettei heidän arvioitaan käytännössä kyseenalaistettaisi. C absolutisoi asiantuntija-aseman seuraukset tavalla, jota artikkeli ei tue.\n\nLähde:\nSivu 85, luku 2.2. Kaupunkikuvan suojelu ja vaaliminen.\n\n”Kaupunkikuvallisia ja kulttuurihistoriallisia arvoja on vaikea ottaa huomioon päätöksenteossa, sillä niitä ei ole helppo identifioida ja mitata.”\n\nLisäksi:\n\n”Erityisesti visuaalisten piirteiden ja esteettisten ominaisuuksien arviointi koetaan usein subjektiiviseksi”\n\nArtikkelissa todetaan myös, että Museovirastolla ja alueellisilla vastuumuseoilla on lain turvaama asiantuntija-asema, mutta:\n\n”Tästä huolimatta heidän asiantuntijatietoaan saatetaan kyseenalaistaa suunnitteluprosesseissa”",
      "learningPoint": "Tarkista ilmaukset ”täysin yksiselitteinen” ja ”ei voida kyseenalaistaa”. Lain turvaama asiantuntija-asema ei tarkoita, että arviot hyväksyttäisiin kaikissa tilanteissa ilman vastaväitteitä.\n\nHakuvinkki: Hae ”asiantuntijatietoaan” ja tarkista myös sitä edeltävä kuvaus museoviranomaisten asemasta."
    },
    {
      "id": "g-m3-q13",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista kuvaa oikein artikkelissa esitettyä suhdetta Helsinki Gardenin mittakaavan ja hankkeen taloudellisen kannattavuuden välillä?",
      "options": [
        {
          "id": "a",
          "text": "Hankkeen suuri mittakaava johtui ensisijaisesti liikuntapaikkojen tilallisista vaatimuksista, minkä vuoksi kaupunkikuvallista yhteensovittamista voitiin tehdä lähinnä julkisivuratkaisuilla."
        },
        {
          "id": "b",
          "text": "Hankkeen mittakaava liittyi kaupunkikehitysdiskurssissa sijoittajan taloudellisiin tarpeisiin, ja erityisesti maanpäällisiä neliöitä sekä korkeaa rakentamista tarvittiin tuottaviin toimintoihin ja asumiseen."
        },
        {
          "id": "c",
          "text": "Hankkeen mittakaavan pienentämistä pidettiin taloudellisesti ongelmattomana, koska asuminen ja liiketilat muodostivat vain vähäisen osan kokonaisuudesta."
        },
        {
          "id": "d",
          "text": "Korkean rakentamisen tarve perustui sekä suojelu- että kaupunkikehitysdiskurssissa ensisijaisesti monitoimiareenan ja muiden liikuntatilojen vaatimiin tilaratkaisuihin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "99",
        "section": "4. Keskustelu ja johtopäätökset."
      },
      "explanation": "B yhdistää oikein hankkeen mittakaavan, taloudellisen kannattavuuden ja korkean rakentamisen tarkoituksen. Artikkelissa mittakaava ei näyttäydy vain arkkitehtonisena ratkaisuna, vaan se kytkeytyy tuottavien maanpäällisten neliöiden tarpeeseen. A ja D vaihtavat korkean rakentamisen perusteen liikuntapaikkojen tilavaatimuksiin, vaikka artikkelissa nimenomaan todetaan, etteivät ne edellyttäneet korkeaa rakentamista.\n\nLähde:\nSivu 99, luku 4. Keskustelu ja johtopäätökset.\n\n”Hankkeen mittakaava, joka oli suojeludiskurssin kritiikin ytimessä, näyttäytyi kaupunkikehitysdiskurssissa lähinnä sijoittajalle olennaisena talouskysymyksenä.”\n\nSamassa kohdassa todetaan:\n\n”Myös korkea rakentaminen liittyi nimenomaan asuinrakentamisen maksimoimiseen, sillä liikuntapaikkojen tilalliset vaatimukset eivät tätä edellytä.”",
      "learningPoint": "Yhdistä tilallinen ratkaisu oikeaan toimintoon. Korkea rakentaminen liittyi asumisen maksimoimiseen, eikä sen perustetta voi vaihtaa liikuntapaikkojen tilavaatimuksiin.\n\nHakuvinkki: Hae ”korkea rakentaminen” ja tarkista, mihin toimintoon sen tarve artikkelissa yhdistetään."
    },
    {
      "id": "g-m3-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta Helsinki Gardenin suunnitteluprosessin osallistamisesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Varsinainen julkinen kuuleminen käynnistyi vasta sen jälkeen, kun hankkeen sijaintia ja volyymia koskevat keskeiset ratkaisut oli jo tehty."
        },
        {
          "id": "b",
          "text": "Kaupunki perusteli julkisen keskustelun lykkäämistä sillä, että hanke oli vielä liian varhaisessa vaiheessa."
        },
        {
          "id": "c",
          "text": "Suunnitteluvarausmenettely varmisti artikkelin mukaan sen, että avoin demokraattinen osallistuminen tapahtui ennen hankkeen keskeisten tavoitteiden määrittämistä."
        },
        {
          "id": "d",
          "text": "Johtopäätöksissä suunnitteluprosessi liitetään ongelmaan, jossa menettely voi näyttää muodollisesti vuorovaikutteiselta, vaikka ratkaisevia suunnittelupäätöksiä on tehty ennen osallisten kuulemista."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91, 100",
        "section": "3.3.1. Sopimaton, aivan liian massiivinen."
      },
      "explanation": "A ja B kuvaavat hankkeen alkuvaiheen tapahtumia, kun taas D yhdistää nämä tapahtumat artikkelin myöhempään tulkintaan suunnitteluprosessin vuorovaikutteisuudesta. C kääntää suhteen päinvastaiseksi: artikkelissa suunnitteluvarausmenettelyyn liittyväksi ongelmaksi tunnistetaan juuri avoimen ja riippumattoman päätöksenteon sekä etukäteen määriteltyjen tavoitteiden välinen jännite.\n\nLähde:\nSivu 91, luku 3.3.1. Sopimaton, aivan liian massiivinen.\n\n”sijainti ja volyymi oli ratkaistu jo hankevalmisteluvaiheessa, ennen kaavoituksen alkamista ja ennen varsinaista ensimmäistä kuulemista 2018.”\n\nSamassa kohdassa todetaan kaupungin vedonneen siihen, että hanke oli liian ”alkutekijöissään” keskustelun aloittamiseksi.\n\nSivu 100, luku 4. Keskustelu ja johtopäätökset.\n\n”tavoitteet oli jo suurelta osin lyöty lukkoon kilpailu- ja valmisteluvaiheessa ennen osallistamisen toteuttamista.”",
      "learningPoint": "Tarkista, tapahtuiko osallistuminen ennen keskeisten tavoitteiden määrittämistä vai sen jälkeen. Samojen tapahtumien mainitseminen ei riitä, jos niiden keskinäinen ajoitus on väärä.\n\nHakuvinkki: Hae ensin ”ensimmäistä kuulemista” ja sitten ”ennen osallistamisen”. Vertaa, miten samaa ongelmaa kuvataan analyysissa ja johtopäätöksissä."
    },
    {
      "id": "g-m3-q15",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelissa esitettyä eroa siinä, miten suojeludiskurssi ja kaupunkikehitysdiskurssi ymmärsivät Helsinki Gardenin kaupunkikuvallisen yhteensopivuuden?",
      "options": [
        {
          "id": "a",
          "text": "Molemmat diskurssit pitivät olemassa olevan ympäristön arvoja suunnittelun sitovina lähtökohtina, mutta erosivat siinä, kuinka paljon korkeaa rakentamista alueelle voitiin sallia."
        },
        {
          "id": "b",
          "text": "Suojeludiskurssi korosti olemassa olevan ympäristön kulttuurisia ja visuaalisia arvoja suunnittelun reunaehtoina, kun taas kaupunkikehitysdiskurssissa kaupunkikuva voitiin nähdä enemmän uuden rakennuksen ominaisuutena ja arkkitehtuurilla ratkaistavana tehtävänä."
        },
        {
          "id": "c",
          "text": "Suojeludiskurssi painotti uuden rakennuksen taiteellista itsenäisyyttä, kun taas kaupunkikehitysdiskurssi edellytti visuaalista jatkuvuutta Töölön olemassa olevan rakennuskannan kanssa."
        },
        {
          "id": "d",
          "text": "Diskurssien välinen ero koski ensisijaisesti sitä, tunnustettiinko Olympiastadionilla kulttuurihistoriallista arvoa, sillä vain suojeludiskurssissa tällaisia arvoja pidettiin olemassa olevina."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98",
        "section": "4. Keskustelu ja johtopäätökset."
      },
      "explanation": "B edellyttää kahden diskurssin peruslähtökohtien vertaamista. Ero ei ollut vain siinä, kuinka suuri rakennus hyväksyttiin, vaan syvemmällä siinä, mitä kaupunkikuvallisella yhteensopivuudella ylipäätään tarkoitettiin. C vaihtaa diskurssien ominaisuudet keskenään. D puolestaan kaventaa laajemman arvokonfliktin yhteen kysymykseen Olympiastadionin arvosta.\n\nLähde:\nSivu 98, luku 4. Keskustelu ja johtopäätökset.\n\nSuojeludiskurssista todetaan:\n\n”paikkaan kytkeytyvät kulttuurihistorialliset ja kaupunkikuvalliset arvot [...] nähtiin kontekstuaalisen yhteensovittamisen perustana ja suunnittelun reunaehtona.”\n\nKaupunkikehitysdiskurssista puolestaan:\n\n”kaupunkikuvalla ei ollut vahvaa yhteyttä olemassa olevaan ympäristöön, vaan se oli lähinnä rakennukseen liittyvä ominaisuus.”\n\nLisäksi kaupunkikuvaa kuvataan suunnittelutehtävänä, johon pyrittiin vastaamaan arkkitehtikilpailulla ja myöhemmin kaavamääräyksillä.",
      "learningPoint": "Yhdistä lähtöoletus oikeaan näkökulmaan. Olemassa olevaan ympäristöön mukautumisen ja uuden rakennuksen itsenäisyyden painotuksia ei voi vaihtaa diskurssien välillä.\n\nHakuvinkki: Hae ”Suojeludiskurssin lähtökohtana” ja ”Kaupunkikehitysdiskurssin näkökulmasta” ja vertaa kuvauksia keskenään."
    },
    {
      "id": "g-m3-q16",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä voidaan perustella artikkelin perusteella Helsinki Gardenin kaupunkikuvallisesta sopeuttamisesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hanketta pienennettiin kaavaprosessin aikana, mutta kirjoittajien mukaan muutokset jäivät vähäisiksi suhteessa sijoituspaikkaa ja massoittelua koskeviin perusratkaisuihin."
        },
        {
          "id": "b",
          "text": "Hallinto-oikeus katsoi, että kulttuurihistorialliset, rakennustaiteelliset ja maisemalliset arvot oli kaavaratkaisussa turvattu riittävästi."
        },
        {
          "id": "c",
          "text": "Kirjoittajat ja hallinto-oikeus päätyivät samaan arvioon siitä, että rakennuksen ulkoasua koskevat yksityiskohtaiset määräykset ratkaisivat hankkeen keskeiset kaupunkikuvalliset ongelmat."
        },
        {
          "id": "d",
          "text": "Hyväksytyssä ratkaisussa rakennus jäi madaltamisen jälkeen sekä vanhan jäähallin että Olympiastadionin korkeuden alapuolelle."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "93, 94",
        "section": "3.3.2. Riittävästi tutkittu ja sopeutettu."
      },
      "explanation": "A vastaa kirjoittajien omaa arviota ja B hallinto-oikeuden kantaa. Tehtävän keskeinen ansa on C: sekä hallinto-oikeus että kirjoittajat käsittelevät samoja kaavamääräyksiä, mutta arvioivat niiden merkityksen eri tavoin. D on väärin, sillä rakennus kohosi edelleen yli vanhan jäähallin ja Töölön korttelirakenteen sekä myös Olympiastadionin yläpuolelle.\n\nLähde:\nSivut 93 ja 94, luku 3.3.2. Riittävästi tutkittu ja sopeutettu.\n\nArtikkelissa todetaan hankkeen pienentämisestä:\n\n”Korkeuden madaltaminen oli kuitenkin lähinnä symbolista.”\n\nHallinto-oikeuden kannasta puolestaan:\n\n”Alueen kulttuurihistoriallisesti, rakennustaiteellisesti ja maisemallisesti merkittävät arvot on riittävästi turvattu kaavaratkaisussa”\n\nKirjoittajien oma arvio seuraa tämän jälkeen:\n\n”rakennuksen ulkoasua koskevat yksityiskohtaiset määräykset ja niiden merkitys arvojen turvaamisessa olivat minimaalisia verrattuna rakennuksen sijoituspaikkaa ja massoittelua koskeviin merkittäviin ratkaisuihin.”",
      "learningPoint": "Erota hallinto-oikeuden kanta artikkelin kirjoittajien omasta arviosta. Samaa ratkaisua käsittelevät toimijat voivat päätyä eri johtopäätöksiin, eikä yhden arviota voi esittää molempien yhteisenä kantana.\n\nHakuvinkki: Hae ”Hallinto-oikeus totesi” ja lue myös lainausta välittömästi seuraava kirjoittajien oma arvio."
    },
    {
      "id": "g-m3-q17",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\n\nArtikkelin perusteella kaupungin muuttuminen Helsinki Garden -hankkeen aktiiviseksi tukijaksi tarkoitti, että se luopui prosessin aikana sekä osasta aiemmin korostamiaan taloudellisia periaatteita että kirjoittajien tulkinnan mukaan kaupunkikuvallisten arvojen valvojan roolista.",
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
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "97, 99",
        "section": "3.4.2. Kaupungin ajautuminen hankkeen kumppaniksi ja 4. Keskustelu ja johtopäätökset."
      },
      "explanation": "Väitteen ratkaiseminen edellyttää kaupungin roolin muutoksen yhdistämistä sen konkreettisiin toimiin. Taloudellisella puolella kaupunki luopui myöhemmin markkinahintaisuuden vaatimuksesta. Samalla kirjoittajat tulkitsevat kaupungin siirtyneen kaupunkikuvaa valvovasta asemasta hankkeen kumppaniksi ja aktiiviseksi tukijaksi.\n\nLähde:\nSivut 97 ja 99, luvut 3.4.2. Kaupungin ajautuminen hankkeen kumppaniksi ja 4. Keskustelu ja johtopäätökset.\n\nSivulla 97 kaupungin kehitystä kuvataan näin:\n\n”Hankkeen aikana kaupungin rooli on muuttunut mahdollistajasta sen aktiiviseksi ajajaksi.”\n\nSamassa yhteydessä kuvataan tontin hinnan laskemista ja markkinahintaisuuden vaatimuksesta luopumista.\n\nSivulla 99 kirjoittajat tiivistävät muutoksen:\n\n”Kaupunkikehitysdiskurssin olennaisena osana oli kaupungin roolin muuttuminen valvojasta ja jarrusta sijoittajavetoisen hankkeen kumppaniksi ja aktiiviseksi tukijaksi.”",
      "learningPoint": "Yhdistä konkreettiset taloudelliset ratkaisut kaupungin roolia koskevaan tulkintaan. Kokonaisväitteen pitää säilyttää molemmat näkökulmat sekä se, mikä niistä esitetään kirjoittajien tulkintana.\n\nHakuvinkki: Hae ensin ”aktiiviseksi ajajaksi” ja sen jälkeen ”aktiiviseksi tukijaksi”. Tarkista, mitä konkreettisia muutoksia kaupungin toimintaan näihin kuvauksiin yhdistetään."
    },
    {
      "id": "g-m3-q18",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelissa esitettyä yhteyttä suunnitteluvarausmenettelyn ja Helsinki Garden -hankkeen demokraattisen päätöksenteon välillä?",
      "options": [
        {
          "id": "a",
          "text": "Suunnitteluvarausmenettely lisäsi yksityisen toimijan mahdollisuuksia osallistua suunnitteluun, mutta samalla hankkeen keskeisiä tavoitteita voitiin määrittää jo ennen varsinaista kaavoitusta ja julkista osallistamista."
        },
        {
          "id": "b",
          "text": "Suunnitteluvarausmenettely siirsi asemakaavan laatimisen kokonaan Projekti GH:lle, jolloin kaupungilla ei enää ollut muodollista päätösvaltaa kaavan sisällöstä."
        },
        {
          "id": "c",
          "text": "Suunnitteluvarausmenettely varmisti, että hankkeen sijaintia ja laajuutta koskevat ratkaisut tehtiin vasta julkisen kuulemisen jälkeen, jolloin sopimusmenettely ei rajoittanut kaavoituksen riippumattomuutta."
        },
        {
          "id": "d",
          "text": "Suunnitteluvarausmenettelyn ongelma liittyi artikkelin mukaan ensisijaisesti siihen, ettei Helsinki omistanut hankkeen suunnittelualuetta ja joutui siksi neuvottelemaan maanomistajan kanssa."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "82, 83, 100",
        "section": "2.1. Kaupunkisuunnittelu sijoittajavetoisten hankkeiden kirittäjänä."
      },
      "explanation": "A yhdistää suunnitteluvarausmenettelyn kaksi artikkelissa kuvattua puolta: se parantaa yksityisen kiinteistökehittäjän mahdollisuuksia osallistua suunnitteluprosessiin, mutta samalla varausvaiheessa voidaan määritellä pitkälle myöhemmän asemakaavan suuntaviivoja. Helsinki Gardenissa tätä ongelmaa konkretisoi se, että tavoitteita oli jo lyöty lukkoon ennen osallistamista. B menee liian pitkälle: kaavoitusta ei siirretty kokonaan yksityiselle toimijalle. C kääntää tapahtumajärjestyksen päinvastaiseksi, ja D on väärin, koska kyse oli nimenomaan kunnan omistamasta alueesta.\n\nLähde:\nSivut 82 ja 83, luku 2.1. Kaupunkisuunnittelu sijoittajavetoisten hankkeiden kirittäjänä.\n\n”Varausvaiheessa määritellään käytännössä hyvin yksityiskohtaiset suuntaviivat tavoitellulle asemakaavapäätökselle.”\n\nSivu 100, luku 4. Keskustelu ja johtopäätökset.\n\n”tavoitteet oli jo suurelta osin lyöty lukkoon kilpailu- ja valmisteluvaiheessa ennen osallistamisen toteuttamista.”\n\nArtikkelissa nostetaan lisäksi esiin vaikeus säilyttää tasapaino sopimussitovuuden sekä kaavoitukselta edellytettävän avoimen ja riippumattoman demokraattisen päätöksenteon välillä.",
      "learningPoint": "Tarkista, muuttaako vaihtoehto vaikutusvallan vahvistumisen täydelliseksi päätösvallan siirtymiseksi. Vahva asema suunnittelun alkuvaiheessa ei tarkoita, että kaupungin muodollinen päätösvalta katoaisi kokonaan.\n\nHakuvinkki: Hae ensin ”suunnitteluvarausjärjestelmä” ja sen jälkeen ”ennen osallistamisen”. Yhdistä menettelyn yleinen kuvaus siihen, miten se näkyi Helsinki Gardenissa."
    },
    {
      "id": "g-m3-q19",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin johtopäätöksiä Helsinki Gardenin mittakaavasta, kaupunkikuvasta ja hankkeen taloudellisista lähtökohdista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suojeludiskurssissa hankkeen massoittelu ja volyymi nähtiin keskeisinä ongelmina, joita ei voitu enää myöhemmällä arkkitehtonisella hienosäädöllä ratkaista."
        },
        {
          "id": "b",
          "text": "Kaupunkikehitysdiskurssissa hankkeen suuri mittakaava liittyi olennaisesti sijoittajan taloudelliseen yhtälöön ja tuottavien neliöiden tarpeeseen."
        },
        {
          "id": "c",
          "text": "Kaupunkikuvallisen yhteensopivuuden vahvempi huomioiminen olisi kirjoittajien mukaan voitu toteuttaa ilman vaikutusta hankkeen taloudelliseen yhtälöön."
        },
        {
          "id": "d",
          "text": "Kirjoittajien mukaan arkkitehtikilpailu haastoi tehokkaasti hankkeen sijoittajavetoisesti määrätyn laajuuden ja johti kaupunkikuvallisten reunaehtojen asettamiseen taloudellisten tavoitteiden edelle."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98, 99",
        "section": "4. Keskustelu ja johtopäätökset."
      },
      "explanation": "A ja B yhdistävät saman konfliktin kaksi eri puolta. Suojeludiskurssissa ongelma oli erityisesti rakennuksen mittakaavassa ja massoittelussa, kun taas kaupunkikehitysdiskurssissa juuri mittakaava liittyi hankkeen taloudelliseen toimivuuteen. C on väärin, koska artikkelissa todetaan nimenomaisesti kaupunkikuvan mittakaavallisen huomioimisen vaikuttaneen taloudelliseen yhtälöön. D kääntää kirjoittajien tulkinnan arkkitehtikilpailusta päinvastaiseksi.\n\nLähde:\nSivut 98 ja 99, luku 4. Keskustelu ja johtopäätökset.\n\nSuojelukoalitiosta todetaan:\n\n”Suojelukoalitio kritisoi ennen kaikkea massoitteluun ja rakennushankkeen volyymiin liittyviä ratkaisuja”\n\nArtikkelissa todetaan myös, että nämä ratkaisut oli tehty jo projektin alkumetreillä, minkä vuoksi niiden ratkaiseminen jatkokehittelyssä osoittautui mahdottomaksi.\n\nHankkeen taloudellisesta puolesta todetaan sivulla 99:\n\n”Hankkeen mittakaava [...] näyttäytyi kaupunkikehitysdiskurssissa lähinnä sijoittajalle olennaisena talouskysymyksenä.”\n\nLisäksi:\n\n”Koska kaupunkikuvan mittakaavallinen huomioiminen olisi vaikuttanut taloudelliseen yhtälöön, se sai väistyä”",
      "learningPoint": "Tarkista, esitetäänkö aineistossa syrjään jäänyt tavoite vaihtoehdossa hallitsevana. Kaupunkikuvallisten reunaehtojen väistyminen taloudellisten tavoitteiden tieltä ei tarkoita niiden asettamista taloudellisten tavoitteiden edelle.\n\nHakuvinkki: Hae ensin ”talouskysymyksenä” ja tarkista sen ympäriltä sekä hankkeen mittakaavaa että kaupunkikuvan huomioimista koskevat perustelut."
    },
    {
      "id": "g-m3-q20",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kokonaispäätelmistä vastaa parhaiten artikkelin analyysia siitä, miksi kaupunkikuvan vaaliminen jäi Helsinki Garden -prosessissa taloudellisten ja kaupunkikehityksellisten tavoitteiden varjoon?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunkikuvallisia arvoja ei tunnistettu hankkeen missään vaiheessa, minkä vuoksi niitä ei voitu sisällyttää suunnitteluun tai päätöksentekoon."
        },
        {
          "id": "b",
          "text": "Kaupunkikuvalliset ongelmat tunnistettiin, mutta hankkeen keskeiset sijaintia ja mittakaavaa koskevat ratkaisut oli pitkälti määritelty jo varhaisessa vaiheessa, minkä jälkeen niitä pyrittiin sovittamaan ympäristöön lähinnä arkkitehtonisin keinoin samalla kun kaupunki vahvisti rooliaan hankkeen tukijana."
        },
        {
          "id": "c",
          "text": "Kaupunkikuvan vaaliminen jäi sivuun ensisijaisesti siksi, että hallinto-oikeus kielsi kaupunkikuvallisten ja kulttuurihistoriallisten näkökohtien käyttämisen asemakaavan arviointiperusteina."
        },
        {
          "id": "d",
          "text": "Kaupunkikuvalliset tavoitteet ja sijoittajan taloudelliset tavoitteet saatiin prosessin loppuvaiheessa sovitettua yhteen, koska hankkeen rakennusvolyymia pienennettiin olennaisesti ja kaupunki palasi riippumattoman valvojan rooliin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "97, 98, 99, 100",
        "section": "4. Keskustelu ja johtopäätökset."
      },
      "explanation": "B yhdistää artikkelin johtopäätösten kolme toisiinsa liittyvää havaintoa: hankkeen keskeisiä ratkaisuja tehtiin jo varhain, kaupunkikuvallisia ongelmia pyrittiin tämän jälkeen ratkaisemaan muuttamatta olennaisesti hankkeen peruslähtökohtia, ja samalla kaupungin rooli muuttui hanketta aktiivisesti tukevaksi. A on liian ehdoton, sillä kaupunkikuvallisia ongelmia tunnistettiin useissa vaiheissa. C vääristää hallinto-oikeuden kannan, ja D kääntää sekä hankkeen sopeuttamista että kaupungin roolin muutosta koskevat johtopäätökset päinvastaisiksi.\n\nLähde:\nSivut 97-100, luku 4. Keskustelu ja johtopäätökset.\n\nArtikkelin kokonaispäätelmästä todetaan sivulla 97:\n\n”kaupunkikuvan vaaliminen joutui väistymään taloudellisen kannattavuuden tieltä.”\n\nSivulla 98 kirjoittajat kuvaavat, kuinka kaupunkikehitysdiskurssissa kaupunkikuva pyrittiin ”hoitamaan” arkkitehtikilpailulla sen sijaan, että hankkeen sijoittajavetoisesti määrättyä laajuutta olisi haastettu.\n\nSivulla 99 kaupungin roolin kuvataan puolestaan muuttuneen:\n\n”valvojasta ja jarrusta sijoittajavetoisen hankkeen kumppaniksi ja aktiiviseksi tukijaksi.”",
      "learningPoint": "Yhdistä varhaiset suunnitteluratkaisut, myöhemmät sopeuttamiskeinot ja kaupungin roolin muutos. Oikean kokonaispäätelmän pitää säilyttää näiden havaintojen välinen yhteys muuttamatta kirjoittajien johtopäätöstä.\n\nHakuvinkki: Hae ensin ”taloudellisen kannattavuuden tieltä” ja tarkista sen jälkeen samasta johtopäätösosiosta arkkitehtikilpailua sekä kaupungin muuttunutta roolia koskevat kohdat."
    }
  ]
} satisfies ValintakoeGExercise;
