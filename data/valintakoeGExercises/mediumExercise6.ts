import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 6: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise6Base = {
  "id": "keskivaikea-harjoitus-6",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 6 – Stigman ja tunnustuksen dynamiikan analyysi: Mikrotunnustuksellinen lähestymistapa",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
  "articleTitle": "Stigman ja tunnustuksen dynamiikan analyysi: Mikrotunnustuksellinen lähestymistapa",
  "articleUrl": "https://journal.fi/sosiologia/article/view/152519/98161",
  "questions": [
    {
      "id": "g-m6-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nVälimäen mikrotunnustuksellisessa lähestymistavassa stigmaa tarkastellaan sekä yksilön mahdollisuuksia rajoittavana tunnustusvajeena että vuorovaikutuksessa ilmenevänä tunnustuksen hakemisen haasteena. Näiden näkökulmien yhdistäminen perustuu Honnethin ja Goffmanin teorioiden soveltamiseen.",
      "options": [
        {
          "id": "a",
          "text": "Tosi"
        },
        {
          "id": "b",
          "text": "Epätosi"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "272 ja 276"
      },
      "explanation": "Honnethin tunnustussuhdeteoria auttaa ymmärtämään stigmaa yhteiskunnallisena tunnustusvajeena, joka vaikeuttaa tunnustuksen saamista. Goffmanin vuorovaikutussosiologia puolestaan auttaa tarkastelemaan, miten yksilöt voivat hakea tunnustusta ja hallita stigmaa vuorovaikutustilanteissa.\nVäittämän molemmat osat vastaavat artikkelia. Epätosi olisi oikein, jos lähestymistapa perustuisi vain toiseen teoriaan tai käsittelisi yksinomaan tunnustuksen saamista.\n\nLähde:\nS. 272 ja 276, johdanto sekä \"Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen\". Sivulla 276 todetaan: \"stigman kokemuksen kaksi vastavuoroista puolta tunnustuksen saamisen ja tunnustuksen hakemisen näkökulmasta\".",
      "learningPoint": "Opiskelijan tulee yhdistää lähestymistavan kaksi keskeistä ulottuvuutta ja tunnistaa, miten eri teoriat täydentävät toisiaan.\nHakuvinkki: Ctrl+F: kaksi vastavuoroista puolta."
    },
    {
      "id": "g-m6-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein Honnethin tunnustussuhdeteorian kolme tunnustuksen muotoa ja niihin liittyvät yksilön itsesuhteen ulottuvuudet?",
      "options": [
        {
          "id": "a",
          "text": "Rakkaus liittyy itsekunnioitukseen, kunnioitus itsearvostukseen ja arvostus itseluottamukseen."
        },
        {
          "id": "b",
          "text": "Rakkaus liittyy itsearvostukseen, kunnioitus itseluottamukseen ja arvostus itsekunnioitukseen."
        },
        {
          "id": "c",
          "text": "Rakkaus liittyy itseluottamukseen, kunnioitus itsekunnioitukseen ja arvostus itsearvostukseen."
        },
        {
          "id": "d",
          "text": "Rakkaus liittyy itseluottamukseen, kunnioitus itsearvostukseen ja arvostus itsekunnioitukseen."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "273",
        "section": "Stigma, Honneth ja tunnustuksen saaminen"
      },
      "explanation": "C yhdistää kaikki kolme tunnustuksen muotoa oikein. Rakkaus mahdollistaa itseluottamuksen, kunnioitus itsekunnioituksen ja arvostus itsearvostuksen.\nA, B ja D sisältävät artikkelissa esiintyvät oikeat käsitteet, mutta yhdistävät ne vääriin tunnustussuhteisiin.\n\nLähde:\nS. 273, \"Stigma, Honneth ja tunnustuksen saaminen\". Ratkaiseva lainaus: \"rakkautta (itseluottamuksen ulottuvuus)\" ja \"kunnioitusta (itsekunnioituksen ulottuvuus)\". Arvostus yhdistetään samassa kappaleessa itsearvostukseen.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan läheiset teoreettiset käsitteet ja niiden väliset suhteet. Yhden oikean käsitteen tunnistaminen ei riitä, vaan kaikkien kolmen yhteyden tulee olla oikein.\nHakuvinkki: Ctrl+F: itseluottamuksen ulottuvuus."
    },
    {
      "id": "g-m6-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 4,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan Honnethin tunnustussuhdeteoria korostaa erityisesti yksilöiden aktiivisia keinoja hallita stigmaa vuorovaikutuksessa, kun taas Goffmanin vuorovaikutussosiologia selittää ensisijaisesti yhteiskunnallisten tunnustusvajeiden rakenteellista syntymistä.",
      "options": [
        {
          "id": "a",
          "text": "Oikein"
        },
        {
          "id": "b",
          "text": "Väärin"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "272 ja 274–276"
      },
      "explanation": "Väittämä vaihtaa teorioiden keskeiset painotukset keskenään.\nHonnethin teoria auttaa ymmärtämään yhteiskunnallisia tunnustussuhteita ja niiden puutteita. Goffmanin teoria puolestaan korostaa yksilöiden aktiivista toimintaa, itsensä esittämistä ja stigman hallintaa vuorovaikutustilanteissa.\n\nLähde:\nS. 272 ja 274–276. Sivulla 272 todetaan Honnethin teorian painottavan yhteiskunnallista tunnustusvajetta ja Goffmanin tarkastelevan tunnustuksen hakemisen haasteita.",
      "learningPoint": "Opiskelijan tulee tunnistaa, mitä ilmiön ulottuvuutta kukin teoria selittää. Väärä väittämä voi muodostua vaihtamalla kahden teorian selitystehtävät keskenään.\nHakuvinkki: Ctrl+F: Honnethin tunnustussuhdeteorialla ja Goffmanin vuorovaikutussosiologian."
    },
    {
      "id": "g-m6-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä käsityksiä stigman luonteesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Stigman merkitys voi vaihdella vuorovaikutustilanteiden välillä, jolloin sama ominaisuus tai elämäntilanne ei välttämättä aiheuta stigmatisoitumista kaikissa tilanteissa."
        },
        {
          "id": "b",
          "text": "Stigma on pysyvä yksilön ominaisuus, jonka merkitys säilyy samana riippumatta yhteiskunnallisista muutoksista tai vuorovaikutuksen osapuolista."
        },
        {
          "id": "c",
          "text": "Stigman vaikutus yksilöön voi ilmetä eri tavoin, sillä yksilöt voivat esimerkiksi vastustaa stigmaa, neuvotella sen merkityksestä tai mukautua siihen."
        },
        {
          "id": "d",
          "text": "Stigma johtaa aina yhteiskunnalliseen marginalisoitumiseen, vaikka yksilö onnistuisi löytämään vaihtoehtoisia tunnustuksen lähteitä."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "271–272"
      },
      "explanation": "A kuvaa stigman kontekstisidonnaisuutta. C kuvaa yksilöiden erilaisia mahdollisuuksia suhtautua stigmaan.\nB on väärin, koska stigma ei ole muuttumaton yksilön ominaisuus, vaan sen merkitys rakentuu vuorovaikutuksessa ja muuttuu yhteiskunnallisten olosuhteiden mukana.\nD on väärin, koska artikkelissa nimenomaan kyseenalaistetaan ajatus stigman väistämättömästä marginalisoivasta vaikutuksesta.\n\nLähde:\nS. 271–272, johdanto, ja s. 275, \"Stigma, Goffman ja tunnustuksen hakeminen\". Sivulla 271 todetaan: \"Se, mikä on stigmatisoitua yhdessä vuorovaikutustilanteessa, voi olla toisessa tilanteessa hyväksyttyä.\"",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin kontekstisidonnainen havainto muutetaan ehdottomaksi. Erityisesti on tarkistettava ilmaukset \"aina\", \"kaikissa\" ja \"riippumatta\".\nHakuvinkki: Ctrl+F: ei ole mitenkään yksioikoinen."
    },
    {
      "id": "g-m6-q5",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Kyllä vai ei?\nVoidaanko artikkelin neljän aineistoesimerkin perusteella päätellä, että kaikki tutkimusaineiston 35 nuorta aikuista kokivat työn ja koulutuksen ulkopuolella olemisen stigmatisoivana ja suhtautuivat elämäntilanteeseensa samalla tavalla?",
      "options": [
        {
          "id": "a",
          "text": "Kyllä"
        },
        {
          "id": "b",
          "text": "Ei"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "276–277",
        "section": "Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen"
      },
      "explanation": "Tutkimuksen tausta-aineisto koostuu 35 nuoren aikuisen haastattelusta, mutta artikkelissa analysoidaan neljää teoreettisesti kiinnostavaa esimerkkiä.\nEsimerkkien tarkoituksena on havainnollistaa lähestymistavan soveltamista, ei kuvata kaikkien haastateltujen kokemuksia. Artikkelissa myös todetaan, etteivät kaikki nuoret aikuiset koe elämäntilannettaan stigmaattisena.\n\nLähde:\nS. 276–277, \"Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen\". Sivulla 277 todetaan: \"Valitut aineistoesimerkit eivät kuvaa siten aineiston kokonaisuutta.\"",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksen koko aineisto yksittäisistä analyysiin valituista tapauksista. Muutaman esimerkin perusteella ei saa tehdä kaikkia haastateltuja koskevaa johtopäätöstä.\nHakuvinkki: Ctrl+F: 35 nuoren aikuisen ja eivät kuvaa."
    },
    {
      "id": "g-m6-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein mikrotunnustuksellisen lähestymistavan teoreettista perustaa ja sen kehittämisessä käytettyä tutkimusaineistoa?",
      "options": [
        {
          "id": "a",
          "text": "Honnethin vuonna 1963 julkaistua tunnustussuhdeteoriaa ja Goffmanin vuonna 1995 julkaistua stigmateosta sovellettiin lähestymistavan kehittämisessä, jota havainnollistettiin 35 nuoren aikuisen haastatteluaineistolla."
        },
        {
          "id": "b",
          "text": "Goffmanin vuonna 1963 julkaistua stigmateosta ja Honnethin vuonna 1995 julkaistua tunnustussuhdeteoriaa sovellettiin lähestymistavan kehittämisessä, jota havainnollistettiin Nuorisobarometrin erillisnäytteen haastatteluaineistolla."
        },
        {
          "id": "c",
          "text": "Goffmanin vuonna 1995 julkaistua stigmateosta ja Honnethin vuonna 1963 julkaistua tunnustussuhdeteoriaa sovellettiin lähestymistavan kehittämisessä, jota havainnollistettiin neljän nuoren aikuisen haastatteluaineistolla."
        },
        {
          "id": "d",
          "text": "Honnethin ja Goffmanin teoriat julkaistiin molemmat vuonna 2009, jolloin myös tutkimuksessa käytetty Nuorisobarometrin erillisnäytteen haastatteluaineisto muodostettiin."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "272–273 ja 276"
      },
      "explanation": "B yhdistää oikeat teoreetikot, heidän artikkelissa hyödynnetyt teoksensa ja tutkimusaineiston.\nA on väärin, koska teoreetikoiden julkaisuvuodet on vaihdettu keskenään.\nC on väärin, koska julkaisuvuodet ovat väärin ja neljä viittaa analysoituihin aineistoesimerkkeihin, ei koko haastatteluaineiston kokoon.\nD on väärin, koska teoriat eivät ole vuodelta 2009 eikä artikkelissa esitetä haastatteluaineiston muodostuneen kyseisenä vuonna.\n\nLähde:\nS. 272–273 ja 276, erityisesti sivun 276 alaviite 1.\nArtikkelissa viitataan Goffmanin vuoden 1963 stigmateokseen ja Honnethin vuoden 1995 tunnustussuhdeteoriaan. Sivun 276 alaviitteessä todetaan tutkimusaineiston \"koostuu 35 nuoren aikuisen haastattelusta\".",
      "learningPoint": "Opiskelijan tulee yhdistää teoreetikot oikeisiin julkaisuvuosiin ja erottaa toisistaan teoreettiset lähteet sekä empiirinen tutkimusaineisto. Lisäksi tulee tarkistaa, mitä aineiston lukumäärät tarkoittavat.\nHakuvinkki: Ctrl+F: Goffman (1963), Honneth (1995) ja 35 nuoren aikuisen."
    },
    {
      "id": "g-m6-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä selityksiä sille, miten stigma voi vaikuttaa yksilön tunnustuksen hakemiseen ja sosiaaliseen vetäytymiseen? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Yksilön sisäistämät kielteiset käsitykset omasta elämäntilanteestaan voivat saada hänet kokemaan, ettei hän ansaitse muiden arvostusta, mikä voi vähentää halua hakeutua vuorovaikutukseen."
        },
        {
          "id": "b",
          "text": "Sosiaalinen vetäytyminen osoittaa, ettei yksilö enää tarvitse muiden tunnustusta myönteisen itsesuhteen muodostamiseen."
        },
        {
          "id": "c",
          "text": "Aiemmat kielteiset vuorovaikutuskokemukset voivat vahvistaa pelkoa väärinkohtelusta ja siten vaikeuttaa tunnustuksen hakemista uusissa sosiaalisissa tilanteissa."
        },
        {
          "id": "d",
          "text": "Yhteiskunnallinen tunnustusvaje estää kaikkia stigmatisoituja yksilöitä hakemasta tunnustusta riippumatta heidän omista tulkinnoistaan ja toimintamahdollisuuksistaan."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "277–279",
        "section": "Aineistoesimerkki 1: Stigma tunnustuksen hakemisen esteenä"
      },
      "explanation": "A on oikein, sillä ensimmäisessä aineistoesimerkissä haastateltava on sisäistänyt kielteisiä käsityksiä itsestään. Hän ei näe itseään arvostuksen arvoisena, minkä vuoksi myös tunnustuksen hakeminen muilta tuntuu tarpeettomalta.\nC on oikein, koska haastateltavan pitkään jatkunut koulukiusaaminen ja muut kielteiset kokemukset ovat vaikuttaneet hänen suhtautumiseensa vuorovaikutustilanteisiin. Pelko väärinkohtelusta voi johtaa niiden välttämiseen.\nB on väärin, sillä vetäytyminen ei tarkoita tunnustuksen tarpeen katoamista. D on väärin, koska stigma ei artikkelin mukaan aina estä tunnustuksen hakemista.\n\nLähde:\nS. 277–279, \"Aineistoesimerkki 1: Stigma tunnustuksen hakemisen esteenä\". Sivulla 278 todetaan, että yksilö voi kokea, \"ettei hän lähtökohtaisesti ole muiden antaman tunnustuksen arvoinen\". Sivulla 279 käsitellään väärinkohtelun pelkoa sosiaalisen vetäytymisen yhteydessä.",
      "learningPoint": "Opiskelijan tulee yhdistää haastateltavan kokemukset tutkijan esittämään tulkintaan sosiaalisesta vetäytymisestä. On erotettava mahdollinen selittävä tekijä kaikissa tilanteissa toteutuvasta syy-seuraussuhteesta.\nHakuvinkki: Ctrl+F: koulukiusaamisen ja väärinkohdelluksi."
    },
    {
      "id": "g-m6-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Tosi vai epätosi?\nHonnethin tunnustussuhdeteorian perusteella työn ja koulutuksen ulkopuolella oleminen voi vaikeuttaa nuoren aikuisen mahdollisuuksia saada yhteiskunnallista arvostusta. Tästä ei kuitenkaan seuraa, että kaikki tällaisessa elämäntilanteessa olevat nuoret aikuiset tulkitsisivat tilanteensa stigmatisoivaksi tai syyttäisivät siitä itseään.",
      "options": [
        {
          "id": "a",
          "text": "Tosi"
        },
        {
          "id": "b",
          "text": "Epätosi"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "273–274",
        "section": "Stigma, Honneth ja tunnustuksen saaminen"
      },
      "explanation": "Honnethin teorian näkökulmasta työ muodostaa tärkeän yhteiskunnallisen arvostuksen lähteen. Sen ulkopuolelle jääminen voi siten vaikeuttaa arvostuksen saamista.\nArtikkelissa kuitenkin korostetaan, että yksilöt tulkitsevat elämäntilannettaan eri tavoin. Osa voi nähdä tilanteensa väliaikaisena tai ulkopuolisista tekijöistä johtuvana eikä välttämättä sisäistä siihen liittyvää stigmaa.\n\nLähde:\nS. 273–274, \"Stigma, Honneth ja tunnustuksen saaminen\". Sivulla 274 todetaan: \"mutta näin eivät tee kuitenkaan kaikki nuoret aikuiset\".",
      "learningPoint": "Opiskelijan tulee erottaa väitteet \"voi vaikeuttaa\", \"kaikki kokevat\" ja \"eivät kaikki koe\". Yhteiskunnallinen tunnustusvaje ei tarkoita samanlaista yksilöllistä kokemusta jokaiselle.\nHakuvinkki: Ctrl+F: mutta näin eivät tee ja väliaikaisena."
    },
    {
      "id": "g-m6-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 4,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tunnustuksen saamisen ja hakemisen välistä suhdetta mikrotunnustuksellisessa lähestymistavassa?",
      "options": [
        {
          "id": "a",
          "text": "Tunnustuksen saaminen edellyttää aina sitä, että yksilö on ensin onnistunut muuttamaan yhteiskunnassa vallitsevat stigmatisoivat käsitykset."
        },
        {
          "id": "b",
          "text": "Tunnustuksen hakeminen tarkoittaa sitä, että muut ihmiset myöntävät yksilölle arvostusta, kun taas tunnustuksen saaminen tarkoittaa yksilön omia pyrkimyksiä tulla arvostetuksi."
        },
        {
          "id": "c",
          "text": "Tunnustuksen saaminen ja hakeminen ovat toisistaan riippumattomia, sillä yksilön käsitys itsestään muodostuu ilman muiden ihmisten vaikutusta."
        },
        {
          "id": "d",
          "text": "Yksilö voi hakea tunnustusta pyrkimällä tulemaan nähdyksi ja arvostetuksi, mutta muut eivät välttämättä vastaa tähän antamalla tunnustusta. Toisaalta yksilö ei välttämättä itse koe ansaitsevansa tunnustusta, vaikka muut voisivat sitä antaa."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "276",
        "section": "Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen"
      },
      "explanation": "D kuvaa molemmat artikkelissa esitetyt mahdollisuudet. Yksilö voi aktiivisesti hakea tunnustusta saamatta sitä, tai hän voi itse tulkita olevansa tunnustuksen arvoa vailla, vaikka muut olisivat valmiita antamaan sitä.\nA on väärin, koska tunnustusta voi saada myös tilanteissa, joissa yhteiskunnallinen stigma ei ole kadonnut.\nB vaihtaa tunnustuksen saamisen ja hakemisen merkitykset keskenään.\nC on väärin, koska molemmat teoriat korostavat yksilöiden riippuvuutta muiden antamasta tunnustuksesta.\n\nLähde:\nS. 276, \"Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen\". Sivulla 276 todetaan: \"Tunnustuksen saaminen ja hakeminen kietoutuvat olennaisesti toisiinsa.\"",
      "learningPoint": "Opiskelijan tulee erottaa tunnustuksen hakija ja tunnustuksen antaja sekä ymmärtää heidän välinen suhteensa. Tunnustuksen hakeminen ei automaattisesti tarkoita sen saamista.\nHakuvinkki: Ctrl+F: vastavuoroisesti vastaa ja muut voisivat antaa."
    },
    {
      "id": "g-m6-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nGoffmanin stigmakäsityksen mukaan stigma ilmenee aina välittömästi muille havaittavana ominaisuutena. Siksi yksilö ei voi vaikuttaa siihen, millaisissa vuorovaikutustilanteissa stigma tulee esiin tai mitä siitä paljastuu muille.",
      "options": [
        {
          "id": "a",
          "text": "Oikein"
        },
        {
          "id": "b",
          "text": "Väärin"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "275",
        "section": "Stigma, Goffman ja tunnustuksen hakeminen"
      },
      "explanation": "Goffman erottaa kaksi stigman ilmenemisen tapaa: välittömästi havaittavan ja mahdollisesti paljastuvan stigman.\nPiilossa olevan stigman kohdalla yksilö voi pyrkiä hallitsemaan sen paljastumista esimerkiksi valikoimalla vuorovaikutustilanteita tai kertomalla siitä vain tiettyjä asioita.\nVäittämä on väärin, koska se poistaa artikkelissa esitetyn erottelun ja kieltää yksilön mahdollisuuden vaikuttaa stigman ilmenemiseen.\n\nLähde:\nS. 275, \"Stigma, Goffman ja tunnustuksen hakeminen\". Sivulla 275 todetaan: \"Toisaalta stigma voi olla piilossa, vaikka yksilö tietää olevansa altis sen paljastumiselle.\"",
      "learningPoint": "Opiskelijan tulee tunnistaa, onko jokin ominaisuus kaikissa tilanteissa välttämätön vai vain yksi mahdollinen ilmenemismuoto.\nHakuvinkki: Ctrl+F: piilossa ja paljastumiselle."
    },
    {
      "id": "g-m6-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa toisesta aineistoesimerkistä, jossa haastateltava osallistui pajatoimintaan? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Pajatoimintaan osallistuminen helpotti haastateltavan kokemusta omasta elämäntilanteestaan, koska hän pystyi kertomaan tekevänsä jotakin ja etenevänsä kohti työ- tai koulutusmarkkinoita."
        },
        {
          "id": "b",
          "text": "Haastateltava koki työn ja koulutuksen ulkopuolella olemisen stigmatisoivaksi kaikissa tilanteissa, myös niiden nuorten seurassa, jotka olivat samanlaisessa elämäntilanteessa."
        },
        {
          "id": "c",
          "text": "Haastateltavan kokemus osoittaa, että tavanomainen kysymys opiskelusta voi saada erilaisia merkityksiä sen mukaan, kuka kysymyksen esittää ja millaisia odotuksia tilanteeseen liittyy."
        },
        {
          "id": "d",
          "text": "Pajatoiminnan aloittaminen poisti haastateltavan yhteiskunnallisen stigman kokonaan, minkä vuoksi hän ei enää voinut joutua muiden kielteisen arvioinnin kohteeksi."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "279–280",
        "section": "Aineistoesimerkki 2: Stigmasta erottautuminen"
      },
      "explanation": "A on oikein, sillä pajatoiminta antoi haastateltavalle mahdollisuuden esittää elämäntilanteensa myönteisemmässä valossa. Hän koki täyttävänsä paremmin muiden odotuksia.\nC on oikein, koska opiskelua koskevan kysymyksen merkitys riippui haastateltavan mukaan kysyjästä. Kysymys saattoi olla kiusallinen, jos haastateltava koki, ettei hänen elämäntilanteensa vastannut odotuksia.\nB on väärin, sillä samanlaisessa elämäntilanteessa olevien seurassa stigma saattoi olla jaettu eikä välttämättä estänyt vapaata vuorovaikutusta.\nD on väärin, koska haastateltavan kokemus muuttui, mutta tutkimus ei osoita yhteiskunnallisen stigman kadonneen.\n\nLähde:\nS. 279–280, \"Aineistoesimerkki 2: Stigmasta erottautuminen\". Sivulla 279 haastateltava toteaa: \"Mutta nyt on silleen ollut vähän parempi\". Sivulla 280 tutkija kuvaa, miten stigman merkitys vaihtelee vuorovaikutustilanteittain.",
      "learningPoint": "Opiskelijan tulee erottaa yksittäisessä vuorovaikutustilanteessa tapahtuva muutos yhteiskunnallisen stigman poistumisesta. Lisäksi on tarkistettava, koskeeko havainto kaikkia tilanteita vai vain tiettyjä konteksteja.\nHakuvinkki: Ctrl+F: mä oon [pajalla] ja riippuen kuka sitä kysyy."
    },
    {
      "id": "g-m6-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin neljän aineistoesimerkin sisältöä?",
      "options": [
        {
          "id": "a",
          "text": "Ensimmäisessä aineistoesimerkissä haastateltavan kielteinen käsitys itsestään vaikeutti hänen pyrkimyksiään hakea tunnustusta muilta ihmisiltä."
        },
        {
          "id": "b",
          "text": "Toisessa aineistoesimerkissä haastateltava pyrki erottautumaan stigmasta osoittamalla etenevänsä kohti koulutusta ja työelämää."
        },
        {
          "id": "c",
          "text": "Kolmannessa aineistoesimerkissä haastateltava sai arvostusta palvelujärjestelmän kaikilta ammattilaisilta, mutta hänen läheisensä suhtautuivat hänen elämäntilanteeseensa kielteisesti."
        },
        {
          "id": "d",
          "text": "Neljännessä aineistoesimerkissä haastateltava kyseenalaisti yhteiskunnassa vallitsevaa stigmaa ja pyrki saamaan tunnustusta omalle elämäntilanteelleen."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "278–282"
      },
      "explanation": "C on virheellinen, koska kolmannessa aineistoesimerkissä haastateltava koki osan palvelujärjestelmän ammattilaisten kohtelevan häntä epäkunnioittavasti. Hän sai kuitenkin myönteistä tunnustusta muista palveluista ja läheisiltään.\nA, B ja D vastaavat artikkelin esimerkkien sisältöjä. Ensimmäisessä korostuu tunnustuksen hakemisen estyminen, toisessa stigmasta erottautuminen ja neljännessä stigman yhteiskunnallinen haastaminen.\n\nLähde:\nS. 278–282, aineistoesimerkit 1–4. Erityisesti s. 280–281, \"Aineistoesimerkki 3: Stigma ja kamppailu itsearvostuksesta\".\nSivulla 281 haastateltavan myönteisinä tunnustuksen lähteinä mainitaan pajatoiminta, terapia ja läheiset.",
      "learningPoint": "Opiskelijan tulee yhdistää neljä aineistoesimerkkiä oikeisiin kokemuksiin ja tunnustuksen lähteisiin. Väärässä vaihtoehdossa myönteisen ja kielteisen tunnustuksen antajat on vaihdettu keskenään.\nHakuvinkki: Ctrl+F: pajatoiminnan, terapian ja läheisten."
    },
    {
      "id": "g-m6-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Kyllä vai ei?\nVoidaanko kolmannen aineistoesimerkin perusteella päätellä, että yhteiskunnallisesti stigmatisoitu henkilö voi saada tunnustusta joissakin vuorovaikutussuhteissa, vaikka hän kokisi toisissa suhteissa epäkunnioittavaa kohtelua ja arvostuksen puutetta?",
      "options": [
        {
          "id": "a",
          "text": "Kyllä"
        },
        {
          "id": "b",
          "text": "Ei"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "280–281",
        "section": "Aineistoesimerkki 3: Stigma ja kamppailu itsearvostuksesta"
      },
      "explanation": "Kolmannessa aineistoesimerkissä haastateltava koki palvelujärjestelmässä epäkunnioittavaa kohtelua, mutta sai samalla tunnustusta pajatoiminnasta, terapiasta ja läheisiltään.\nNämä myönteiset kohtaamiset auttoivat häntä muodostamaan aiempaa myönteisemmän käsityksen itsestään.\n\nLähde:\nS. 280–281, \"Aineistoesimerkki 3: Stigma ja kamppailu itsearvostuksesta\". Sivulla 281 todetaan: \"yksilö voi kuitenkin hakea tunnustusta muista konteksteista\".",
      "learningPoint": "Opiskelijan tulee yhdistää haastateltavan eri vuorovaikutussuhteissa saamat kokemukset yleisemmäksi päätelmäksi tunnustuksen kontekstisidonnaisuudesta.\nHakuvinkki: Ctrl+F: tunnustusta muualta ja myönteisten kohtaamisten."
    },
    {
      "id": "g-m6-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin tutkimuksen aineistoesimerkkien ja niistä tehtävien johtopäätösten välistä suhdetta?",
      "options": [
        {
          "id": "a",
          "text": "Neljä aineistoesimerkkiä muodostavat edustavan otoksen kaikista työn ja koulutuksen ulkopuolella olevista nuorista aikuisista, minkä vuoksi niiden perusteella voidaan arvioida stigman yleisyyttä."
        },
        {
          "id": "b",
          "text": "Haastatteluaineisto osoittaa suoraan, miten tunnustusta annettiin yksittäisissä vuorovaikutustilanteissa, koska tutkija havainnoi haastateltavien kohtaamisia muiden ihmisten kanssa."
        },
        {
          "id": "c",
          "text": "Aineistoesimerkkien tarkoituksena on osoittaa, että kaikki työn ja koulutuksen ulkopuolella olevat nuoret aikuiset kokevat stigman samalla tavalla, vaikka he suhtautuvat siihen eri keinoin."
        },
        {
          "id": "d",
          "text": "Aineistoesimerkit havainnollistavat mikrotunnustuksellisen lähestymistavan soveltamista haastateltavien kertomuksiin vuorovaikutuskokemuksistaan, mutta eivät kuvaa suoraan havaittuja tilanteita tai koko aineiston kokemusten jakaumaa."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "277",
        "section": "Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen"
      },
      "explanation": "D huomioi sekä tutkimuksen menetelmän että aineiston rajaukset.\nA on väärin, koska neljää esimerkkiä ei ole valittu edustavaksi otokseksi eikä tutkimuksen tavoitteena ole mitata stigman yleisyyttä.\nB on väärin, sillä tutkija analysoi haastateltavien kertomuksia ja pohdintoja, ei suoraan havainnoituja vuorovaikutustilanteita.\nC on väärin, koska artikkelissa korostetaan kokemusten moninaisuutta eikä väitetä kaikkien nuorten kokevan stigmaa samalla tavalla.\n\nLähde:\nS. 277, \"Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen\". Sivulla 277 todetaan: \"nämä aineistoesimerkit eivät siten kuvaa suoraan haastateltujen kokemia vuorovaikutustilanteita\".",
      "learningPoint": "Opiskelijan tulee erottaa haastateltavien kertomukset suoraan havainnoidusta vuorovaikutuksesta. Lisäksi tulee tunnistaa, millaisia johtopäätöksiä tarkoituksellisesti valituista aineistoesimerkeistä voidaan tehdä.\nHakuvinkki: Ctrl+F: eivät siten kuvaa suoraan ja aineiston kokonaisuutta."
    },
    {
      "id": "g-m6-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tietoja tutkimusaineistosta, aineistoesimerkkien valinnasta ja analyysin tavoitteista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Artikkelissa analysoidaan yksityiskohtaisesti neljää aineistoesimerkkiä, jotka on valittu 35 nuoren aikuisen haastatteluihin perustuvasta tutkimusaineistosta."
        },
        {
          "id": "b",
          "text": "Artikkelissa tarkastellaan yksityiskohtaisesti vain osaa tutkimusaineistosta, sillä neljä aineistoesimerkkiä valittiin havainnollistamaan stigman ja tunnustuksen välistä dynamiikkaa eikä kuvaamaan koko aineiston kokemusten jakaumaa."
        },
        {
          "id": "c",
          "text": "Neljä aineistoesimerkkiä valittiin siten, että jokainen niistä edustaa yhtä Honnethin tunnustussuhdeteorian kolmesta tunnustuksen muodosta tai Goffmanin neljännestä tunnustussuhteesta."
        },
        {
          "id": "d",
          "text": "Tutkimuksen kaikki 35 haastattelua analysoitiin artikkelissa yksityiskohtaisesti, jotta niiden perusteella voitaisiin määrittää, kuinka yleistä stigman kokeminen on työn ja koulutuksen ulkopuolella olevilla nuorilla aikuisilla."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "276–277",
        "section": "Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen"
      },
      "explanation": "A on oikein. Tutkimuksessa hyödynnetty aineisto koostuu 35 nuoren aikuisen haastattelusta, joista tutkija on valinnut neljä esimerkkiä yksityiskohtaiseen tarkasteluun.\nB on oikein. Aineistoesimerkit valittiin niiden teoreettisen kiinnostavuuden perusteella. Niiden tarkoituksena on havainnollistaa erilaisia stigman ja tunnustuksen välisiä suhteita, ei kuvata kokemusten yleisyyttä koko aineistossa.\nC on väärin. Honnethin teoriassa tunnustuksen muotoja on kolme, mutta Goffmanilta ei artikkelissa esitellä neljättä vastaavaa tunnustussuhdetta. Neljä aineistoesimerkkiä havainnollistavat erilaisia stigman ja tunnustuksen dynamiikkoja.\nD on väärin. Artikkelissa ei analysoida yksityiskohtaisesti kaikkia 35 haastattelua eikä pyritä määrittämään stigman kokemisen yleisyyttä.\n\nLähde:\nS. 276–277, \"Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen\", erityisesti sivun 276 alaviite 1.\nSivulla 277 todetaan: \"Valitut aineistoesimerkit eivät kuvaa siten aineiston kokonaisuutta.\"",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksen koko haastatteluaineisto yksityiskohtaiseen analyysiin valituista esimerkeistä. Lisäksi on tarkistettava, millaisia johtopäätöksiä teoreettisesti valittujen tapausten perusteella voidaan tehdä.\nHakuvinkki: Ctrl+F: 35 nuoren aikuisen, teoreettisesti ja aineiston kokonaisuutta."
    },
    {
      "id": "g-m6-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nEnsimmäisessä aineistoesimerkissä haastateltavan sosiaalista vetäytymistä voidaan tulkita hänen sisäistämänsä stigman ja tunnustuksen hakemiseen liittyvien pelkojen kautta. Tutkija ei kuitenkaan väitä, että haastateltavan käsitys muiden kielteisestä suhtautumisesta olisi välttämättä oikea, vaan vetäytyminen voi näyttäytyä ymmärrettävänä myös silloin, kun yksilön tulkinta omasta tunnustuksen arvoisuudestaan on virheellinen.",
      "options": [
        {
          "id": "a",
          "text": "Tosi"
        },
        {
          "id": "b",
          "text": "Epätosi"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "278–279",
        "section": "Aineistoesimerkki 1: Stigma tunnustuksen hakemisen esteenä"
      },
      "explanation": "Väittämä yhdistää kolme artikkelissa esitettyä tietoa.\nEnsinnäkin haastateltava on kokenut pitkään jatkunutta koulukiusaamista ja muita kielteisiä vuorovaikutuskokemuksia.\nToiseksi hän on alkanut tulkita itseään yhteiskunnassa vallitsevien stigmatisoivien käsitysten kautta eikä koe ansaitsevansa muiden tunnustusta.\nKolmanneksi tutkija huomauttaa, ettei haastateltavan käsitys välttämättä vastaa muiden ihmisten todellista suhtautumista. Tästä huolimatta sosiaalinen vetäytyminen voi olla ymmärrettävää hänen omasta näkökulmastaan.\nEpätosi olisi oikein, jos tutkija esittäisi haastateltavan tulkinnan muiden suhtautumisesta varmasti oikeaksi tai väittäisi stigman aiheuttavan väistämättä sosiaalista vetäytymistä.\n\nLähde:\nS. 278–279, \"Aineistoesimerkki 1: Stigma tunnustuksen hakemisen esteenä\".\nSivulla 279 todetaan: \"Yksilön tulkinta siitä, ettei hän ole tunnustuksen arvoinen, saattaa toki olla virheellinen\".",
      "learningPoint": "Opiskelijan tulee erottaa yksilön oma tulkinta, hänen toimintansa ja tutkijan esittämä selitys toisistaan. Erityisesti on tarkistettava, edellyttääkö toiminnan ymmärrettävyys sitä, että yksilön käsitys muiden suhtautumisesta on tosiasiallisesti oikea.\nHakuvinkki: Ctrl+F: saattaa toki olla virheellinen ja vetäytyä."
    },
    {
      "id": "g-m6-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein Honnethin tunnustussuhdeteorian, Goffmanin vuorovaikutussosiologian ja artikkelissa esitetyt aineistoesimerkit?",
      "options": [
        {
          "id": "a",
          "text": "Honnethin arvostuksen ulottuvuus korostaa yksilön oikeudellista yhdenvertaisuutta, minkä vuoksi kolmannen aineistoesimerkin keskeinen ongelma liittyy haastateltavan oikeuksien menettämiseen palvelujärjestelmässä."
        },
        {
          "id": "b",
          "text": "Goffmanin näkökulmasta stigman hallinta tarkoittaa ennen kaikkea yhteiskunnallisten tunnustussuhteiden muuttamista, minkä vuoksi toinen aineistoesimerkki kuvaa koko yhteiskunnan stigman poistumista pajatoiminnan seurauksena."
        },
        {
          "id": "c",
          "text": "Honnethin arvostuksen ulottuvuus auttaa ymmärtämään työn merkitystä yhteiskunnallisen tunnustuksen lähteenä, kun taas Goffmanin näkökulma auttaa tarkastelemaan, miten yksilö voi hakea tunnustusta eri vuorovaikutustilanteissa stigmasta huolimatta."
        },
        {
          "id": "d",
          "text": "Goffmanin tunnustussuhdeteoriassa rakkaus, kunnioitus ja arvostus muodostavat kolme itsesuhteen ulottuvuutta, kun taas Honnethin vuorovaikutussosiologia keskittyy stigman salaamiseen ja paljastamiseen."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "273–276",
        "section": "Stigma, Honneth ja tunnustuksen saaminen"
      },
      "explanation": "C on oikein. Honnethin teoria auttaa selittämään, miksi työn ja koulutuksen ulkopuolella oleminen voi vaikeuttaa yhteiskunnallisen arvostuksen saamista. Goffmanin teoria puolestaan auttaa tarkastelemaan, miten yksilöt toimivat vuorovaikutustilanteissa ja pyrkivät saamaan tunnustusta stigmasta huolimatta.\nA on väärin, koska oikeudellinen yhdenvertaisuus kuuluu Honnethin kunnioituksen ja itsekunnioituksen ulottuvuuteen, ei arvostuksen ulottuvuuteen. Kolmannessa esimerkissä ei myöskään kuvata oikeuksien menettämistä.\nB on väärin, sillä Goffmanin näkökulma korostaa yksilöiden vuorovaikutuksellista toimintaa. Toisessa esimerkissä pajatoiminta helpottaa haastateltavan tunnustuksen hakemista, mutta ei poista yhteiskunnallista stigmaa.\nD on väärin, koska tunnustussuhteiden kolmijako kuuluu Honnethille ja stigman hallintaa koskeva vuorovaikutussosiologinen näkökulma Goffmanille.\n\nLähde:\nS. 273–276, \"Stigma, Honneth ja tunnustuksen saaminen\", \"Stigma, Goffman ja tunnustuksen hakeminen\" sekä \"Mikrotunnustuksellinen lähestymistapa ja sen soveltaminen\".\nSivulla 273 todetaan työn muodostavan \"tärkeän institutionalisoidun väylän hakea arvostusta\". Sivulla 275 kuvataan Goffmanin näkökulmaa tunnustuksen aktiiviseen hakemiseen.",
      "learningPoint": "Opiskelijan tulee yhdistää teoreettinen käsite sen oikeaan selitystehtävään ja aineistoesimerkkiin. Väärät vaihtoehdot sisältävät artikkelin oikeita käsitteitä mutta liittävät ne väärään teoriaan tai tunnustuksen ulottuvuuteen.\nHakuvinkki: Ctrl+F: arvostuksen ulottuvuuteen ja aktiivisia toimijoita."
    },
    {
      "id": "g-m6-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Oikein vai väärin?\nNeljännessä aineistoesimerkissä haastateltavan ystävät eivät pitäneet häntä samanlaisena \"sosiaalipummina\" kuin niitä ihmisiä, joita he arvostelivat. Tämä osoittaa tutkijan mukaan, että haastateltava sai ystäviltään juuri sellaista tunnustusta, jota hän tavoitteli, ja että heidän suhtautumisensa poisti hänen kokemansa tunnustusvajeen.",
      "options": [
        {
          "id": "a",
          "text": "Oikein"
        },
        {
          "id": "b",
          "text": "Väärin"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "282",
        "section": "Aineistoesimerkki 4: Stigman haastaminen"
      },
      "explanation": "Väittämän ensimmäinen osa vastaa artikkelia. Ystävät eivät pitäneet haastateltavaa samanlaisena kuin arvostelemiaan ihmisiä, vaan kutsuivat häntä \"erilaiseksi sosiaali-ihmiseksi\".\nJälkimmäinen osa on kuitenkin väärin. Haastateltava koki myös tämän luonnehdinnan ongelmallisena, sillä siinä hänen arvonsa määrittyi yhteiskunnallisen asemansa kautta ja muut hänen ominaisuutensa jäivät taka-alalle.\nTutkijan mukaan tunnustuksen saaminen ei automaattisesti tarkoita tunnustuksen kokemista. Tunnustuksen on vastattava sitä, millaista tunnustusta yksilö itse hakee.\nLisäksi merkitystä on sillä, pitääkö yksilö tunnustuksen antajaa itselleen merkityksellisenä.\n\nLähde:\nS. 282, \"Aineistoesimerkki 4: Stigman haastaminen\".\nSivulla 282 todetaan: \"minkälainen tunnustuksen saaminen tahansa ei johda tunnustuksen kokemukseen\".",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan ulkopuolisen antama myönteinen arvio ja yksilön oma kokemus tunnustuksesta. Erityisesti on tarkistettava, voidaanko toisen ihmisen myönteiseksi tarkoitettu suhtautuminen tulkita varmasti onnistuneeksi tunnustukseksi.\nHakuvinkki: Ctrl+F: erilainen sosiaali-ihminen ja minkälainen tunnustuksen."
    },
    {
      "id": "g-m6-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyä Honnethin ja Goffmanin teorioiden vertailua?",
      "options": [
        {
          "id": "a",
          "text": "Honnethin tunnustussuhdeteoria kiinnittää enemmän huomiota yhteiskunnallisiin tunnustussuhteisiin ja tunnustusvajeisiin kuin yksilöiden moninaisiin vuorovaikutuksellisiin tunnustuksen hakemisen keinoihin."
        },
        {
          "id": "b",
          "text": "Goffmanin vuorovaikutussosiologia tarjoaa Honnethin teoriaa tarkempia välineitä yksilöiden stigman hallinnan ja tunnustuksen hakemisen tapojen tarkasteluun vuorovaikutuksessa."
        },
        {
          "id": "c",
          "text": "Honnethin teoria painottaa Goffmanin teoriaa enemmän stigman vuorovaikutustilanteissa tapahtuvaa hallintaa, kun taas Goffmanin teoria keskittyy ensisijaisesti yhteiskunnallisten tunnustusvajeiden rakenteellisiin taustoihin."
        },
        {
          "id": "d",
          "text": "Honnethin ja Goffmanin näkökulmat täydentävät toisiaan, koska molemmat tunnistavat yksilön riippuvuuden muiden antamasta tunnustuksesta mutta painottavat stigman eri ulottuvuuksia."
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
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "274–276 ja 283"
      },
      "explanation": "A on oikein. Honnethin teoria auttaa ymmärtämään yhteiskunnallisia tunnustussuhteita ja niissä ilmeneviä tunnustusvajeita. Yksilön aktiivinen tunnustuksen hakeminen jää teoriassa vähäisemmälle huomiolle.\nB on oikein. Goffmanin vuorovaikutussosiologia mahdollistaa yksilöiden stigman hallinnan, itsensä esittämisen ja tunnustuksen hakemisen tarkemman analyysin.\nC on väärin. Väittämä vaihtaa teorioiden keskeiset painotukset keskenään. Honneth korostaa yhteiskunnallisia tunnustussuhteita ja tunnustusvajetta, kun taas Goffman tarkastelee stigman vuorovaikutuksellista luonnetta sekä yksilöiden aktiivisia toimintatapoja.\nD on oikein. Molemmissa teorioissa yksilöiden nähdään olevan riippuvaisia muiden antamasta tunnustuksesta. Teoriat täydentävät toisiaan, koska ne tarkastelevat stigman ja tunnustuksen suhdetta eri näkökulmista.\n\nLähde:\nS. 274–276 ja 283, erityisesti \"Stigma, Goffman ja tunnustuksen hakeminen\" sekä \"Mikrotunnustuksellisen lähestymistavan hyödyntämisestä\".\nSivulla 275 todetaan Goffmanin teoriasta: \"mahdollista kiinnittää tarkasti ja monipuolisesti huomiota siihen, miten erilaisin tavoin yksilöt hakevat tunnustusta vuorovaikutuksessa\".",
      "learningPoint": "Opiskelijan tulee yhdistää kummankin teoreetikon näkökulma oikeaan selitystehtävään. Väärässä vaihtoehdossa teorioiden ominaisuudet on vaihdettu keskenään, vaikka molemmat ominaisuudet esiintyvät artikkelissa.\nHakuvinkki: Ctrl+F: Toisin kuin Honnethilla ja juurikaan huomiota."
    },
    {
      "id": "g-m6-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Välimäen tutkimuksen havaintojen ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Koska stigma voi vaikeuttaa tunnustuksen saamista, mikrotunnustuksellinen lähestymistapa tarkastelee myös sitä, millä tavoin yksilöt voivat hakea tunnustusta ja toimia stigmasta huolimatta."
        },
        {
          "id": "b",
          "text": "Koska osa haastateltavista onnistui löytämään vaihtoehtoisia tunnustuksen lähteitä, voidaan päätellä, ettei yhteiskunnallinen stigma enää vaikuttanut heidän mahdollisuuksiinsa saada tunnustusta muissa tilanteissa."
        },
        {
          "id": "c",
          "text": "Vaikka stigma voi ilmetä yhteiskunnallisena tunnustusvajeena, sen vaikutus yksilön vuorovaikutuskokemuksiin riippuu myös tilanteesta ja siitä, miten yksilö itse tulkitsee stigman merkityksen."
        },
        {
          "id": "d",
          "text": "Koska mikrotunnustuksellinen lähestymistapa yhdistää Honnethin ja Goffmanin teoriat, tutkimus osoittaa sen soveltuvan sellaisenaan kaikkiin stigmatisoituihin ihmisryhmiin ilman jatkokehittämistä."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "stigman-ja-tunnustuksen-dynamiikan-analyysi",
        "page": "283–285",
        "section": "Mikrotunnustuksellisen lähestymistavan hyödyntämisestä"
      },
      "explanation": "A on oikein. Mikrotunnustuksellisen lähestymistavan keskeinen ajatus on tarkastella stigmaa sekä tunnustuksen saamisen että hakemisen haasteena. Yksilö voi joutua tunnustusvajeiseen asemaan, mutta tämä ei välttämättä estä häntä toimimasta ja hakemasta tunnustusta muilta.\nB on väärin. Vaihtoehtoisten tunnustuksen lähteiden löytäminen ei tarkoita yhteiskunnallisen stigman poistumista. Yksilö voi saada tunnustusta yhdessä tilanteessa mutta kohdata stigmatisointia toisessa.\nC on oikein. Artikkelissa korostetaan stigman kontekstisidonnaisuutta ja sen vaikutusten moninaisuutta. Stigman merkitys muodostuu suhteessa yksilöön, vuorovaikutustilanteeseen ja yhteiskunnallisiin tunnustussuhteisiin.\nD on väärin. Tutkija esittää lähestymistavan mahdollisesti soveltuvan myös muihin stigmatisoituihin ihmisryhmiin, mutta korostaa jatkokehittämisen tarvetta. Esimerkiksi etnografinen aineisto voisi auttaa tutkimaan tunnustuksen vuorovaikutuksellista rakentumista tarkemmin.\n\nLähde:\nS. 283–285, \"Mikrotunnustuksellisen lähestymistavan hyödyntämisestä\" ja \"Lopuksi\".\nSivulla 283 todetaan: \"Stigma ei ole staattinen ilmiö, vaan stigman merkitys muuttuu jatkuvasti ajan, paikan ja jopa vuorovaikutustilanteen mukaan.\"\nSivulla 284 tutkija toteaa, että lähestymistapa \"vaatii jatkokehittelyä\".",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan yksittäinen mahdollisuus, yleinen periaate ja kaikkia tilanteita koskeva johtopäätös. Erityisesti on tarkistettava, voidaanko jonkin ilmiön esiintymisestä yhdessä tilanteessa päätellä sen toteutuvan tai puuttuvan kaikissa muissa tilanteissa.\nHakuvinkki: Ctrl+F: loose coupling, jatkokehittelyä ja Lopuksi."
    }
  ]
} satisfies ValintakoeGExercise;
