import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 11: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise11Base = {
  "id": "keskivaikea-harjoitus-11",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 11 – ”Innovatiivisten” peesissä – Suomen maahanmuuttopoliittinen vaikuttaminen Euroopan unionissa vuoden 2024 eurovaalien jälkeen",
  "description": "28 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 28,
  "difficulty": "medium",
  "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
  "articleTitle": "”Innovatiivisten” peesissä – Suomen maahanmuuttopoliittinen vaikuttaminen Euroopan unionissa vuoden 2024 eurovaalien jälkeen",
  "articleUrl": "https://journal.fi/kosmopolis/article/view/179153/126038",
  "questions": [
    {
      "id": "g-m11-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein eurooppalaistumisteorian käsitteitä ja niiden soveltamista Suomen EU-muuttoliikepolitiikkaan? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kansallinen projisointi tarkoittaa pyrkimystä vaikuttaa yhteisen eurooppalaisen politiikan muodostumiseen, ja Suomen osallistuminen EU:n muuttoliikepolitiikan muotoiluun on tästä esimerkki."
        },
        {
          "id": "b",
          "text": "Kansallinen mukautuminen tarkoittaa jäsenvaltion pyrkimystä muuttaa EU:n yhteistä politiikkaa omien tavoitteidensa mukaiseksi, ja muuttoliikepaktin toimeenpano on esimerkki projisoinnista."
        },
        {
          "id": "c",
          "text": "Identiteetin uudelleenrakentuminen liittyy kansallisten ja eurooppalaisten intressien sulautumiseen osaksi kansallista identiteettiä."
        },
        {
          "id": "d",
          "text": "Kansallinen projisointi tarkoittaa EU-lainsäädännön toimeenpanoa kansallisella tasolla, kun taas mukautuminen tarkoittaa kansallisten tavoitteiden viemistä komission valmisteluun."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "33",
        "section": "Eurooppalaistumisteoria analyyttisenä työkaluna"
      },
      "explanation": "A on oikein. Kansallisessa projisoinnissa jäsenvaltio pyrkii vaikuttamaan EU-politiikan sisältöön.\nB on väärin. Se sekoittaa mukautumisen ja projisoinnin keskenään. Muuttoliikepaktin toimeenpano on artikkelin esimerkki mukautumisesta.\nC on oikein. Identiteetin uudelleenrakentumisessa kansalliset ja eurooppalaiset intressit sulautuvat osaksi kansallista identiteettiä.\nD on väärin, koska siinä projisoinnin ja mukautumisen merkitykset on vaihdettu keskenään.\n\nLähde:\nS. 33, \"Eurooppalaistumisteoria analyyttisenä työkaluna\".\nRatkaiseva lainaus: \"Mukautumisella tarkoitetaan valtion poliitikkojen harmonisointia EU-jäsenyyden vaatimuksiin, kun taas projisoinnilla pyritään vaikuttamaan yhteisen eurooppalaisen politiikan luomiseen.\"",
      "learningPoint": "Opiskelijan tulee erottaa kolme läheistä teoreettista käsitettä toisistaan ja yhdistää ne oikeisiin esimerkkeihin. Pelkkä käsitteiden tunnistaminen ei riitä.\nHakuvinkki: Ctrl+F: Mukautumisella tarkoitetaan ja Identiteetin uudelleenrakentaminen."
    },
    {
      "id": "g-m11-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nSuomen EU-muuttoliikepoliittinen vaikuttaminen on artikkelin mukaan ollut vuoden 2024 eurovaalien jälkeisellä lainsäädäntökaudella aiempaa proaktiivisempaa. Vaikuttamisen onnistumista selittää osaltaan se, että useimmat EU-jäsenvaltiot ovat edistäneet Suomen kanssa samansuuntaisia muuttoliikepoliittisia tavoitteita.",
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "31–32"
      },
      "explanation": "Artikkelin mukaan Suomi on pyrkinyt aktiivisesti vaikuttamaan EU:n muuttoliikepolitiikkaan. Onnistumista on helpottanut se, että enemmistö EU-maista on tukenut samankaltaisia tavoitteita. Suomen ei siten ole tarvinnut yksin muodostaa enemmistöä tavoitteidensa taakse.\n\nLähde:\nS. 31–32, johdanto. Sivulla 31 todetaan: \"Suomen vaikuttaminen on ollut korostuneen proaktiivista.\"",
      "learningPoint": "Opiskelijan tulee yhdistää havainto Suomen aktiivisesta vaikuttamisesta tutkijan esittämään selitykseen onnistumiselle. Aktiivisuus ja onnistuminen eivät tarkoita samaa asiaa.\nHakuvinkki: Ctrl+F: korostuneen proaktiivista ja enemmistö EU-maista."
    },
    {
      "id": "g-m11-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein Suomen touko- ja kesäkuussa 2024 osallistumat EU-vaikuttamiskirjeet ja niiden tavoitteet?",
      "options": [
        {
          "id": "a",
          "text": "Toukokuun kirjeessä Suomi vaati turvapaikkasäädösten joustoja välineellistämistilanteissa, kun taas kesäkuun kirjeessä esitettiin Italian ja Albanian järjestelyn hyödyntämistä."
        },
        {
          "id": "b",
          "text": "Toukokuun kirjeessä Suomi osallistui Italian ja Albanian järjestelyä koskevien ratkaisujen edistämiseen, kun taas kesäkuun kirjeessä vaadittiin joustoja turvapaikkasäädöksiin muuttoliikkeen välineellistämistilanteissa."
        },
        {
          "id": "c",
          "text": "Kesäkuun kirjeessä vaadittiin EU:n tullietuusjärjestelmän uudistamista, kun taas toukokuun kirjeessä keskityttiin turvapaikkahakemusten käsittelyn keskeyttämiseen."
        },
        {
          "id": "d",
          "text": "Toukokuun kirjeessä keskityttiin Frontexin rahoitukseen, kun taas kesäkuun kirjeessä vaadittiin jäsenvaltioiden pakollista osallistumista turvapaikanhakijoiden siirtoihin."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "35",
        "section": "Viimeaikaiset muutokset EU:n tasolla ja jäsenvaltioiden vaikutus"
      },
      "explanation": "B on oikein. Toukokuussa 2024 Suomi osallistui kirjeeseen, jossa kehotettiin ottamaan oppia Italian ja Albanian järjestelystä. Kesäkuussa Suomi vaati muiden Pohjoismaiden, Baltian maiden ja Puolan kanssa joustoja välineellistämistilanteissa.\nA vaihtaa kirjeiden tavoitteet keskenään.\nC on väärin. Tullietuusjärjestelmän uudistaminen oli erillinen prosessi. Toukokuun kirjeessä keskityttiin innovatiivisiin ratkaisuihin, kuten Italian ja Albanian järjestelyyn.\nD on väärin. Toukokuun kirjeen keskeinen sisältö ei ollut Frontexin rahoitus eikä kesäkuun kirjeessä vaadittu pakollisia turvapaikanhakijoiden siirtoja.\n\nLähde:\nS. 35, \"Viimeaikaiset muutokset EU:n tasolla ja jäsenvaltioiden vaikutus\".\nRatkaiseva lainaus: \"Toukokuussa 2024 Suomi oli mukana 15 maan Euroopan komissiolle osoittamassa kirjeessä\".",
      "learningPoint": "Opiskelijan tulee yhdistää eri ajankohtina annetut kirjeet oikeisiin tavoitteisiin. Samankaltaisten vaikuttamistoimien aikajärjestys on tarkistettava.\nHakuvinkki: Ctrl+F: Toukokuussa 2024 ja kesäkuussa 2024."
    },
    {
      "id": "g-m11-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nSuomen hallitusohjelmassa tavoiteltu EU-tason taakanjaon vapaaehtoisuus tarkoittaa artikkelin mukaan sitä, ettei jäsenvaltioilla ole muuttoliikepaktin voimaantulon jälkeenkään minkäänlaista velvollisuutta osallistua vaikeimmassa muuttoliiketilanteessa olevien maiden auttamiseen.",
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "37",
        "section": "Suomen EU-muuttoliikepolitiikka nykyisellä lainsäädäntökaudella"
      },
      "explanation": "Hallitusohjelmassa kannatetaan turvapaikanhakijoiden siirtoihin liittyvän taakanjaon vapaaehtoisuutta. Muuttoliikepaktin myötä jäsenvaltioiden on kuitenkin osallistuttava muiden maiden auttamiseen jollakin tavalla. Osallistuminen voi tapahtua esimerkiksi rahallisella korvauksella.\nVäittämä on väärin, koska se laajentaa vapaaehtoisuuden koskemaan kaikkia mahdollisia osallistumismuotoja.\n\nLähde:\nS. 37, \"Suomen EU-muuttoliikepolitiikka nykyisellä lainsäädäntökaudella\".\nRatkaiseva lainaus: \"kaikkien maiden on kuitenkin jollain tapaa osallistuttava pahimmassa muuttoliiketilanteessa olevien maiden auttamiseen\".",
      "learningPoint": "Opiskelijan tulee erottaa turvapaikanhakijoiden siirtojen vapaaehtoisuus yleisestä velvollisuudesta osallistua yhteisvastuuseen. Yhtä osallistumismuotoa koskevaa rajausta ei saa laajentaa kaikkiin muotoihin.\nHakuvinkki: Ctrl+F: kaikkien maiden on kuitenkin ja rahallisella korvauksella."
    },
    {
      "id": "g-m11-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tietoja tutkimusaineistosta ja haastattelujen toteutuksesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Tutkimuksessa haastateltiin kuutta valtioneuvostossa EU-muuttoliikevaikuttamisen parissa työskennellyttä tai työskentelevää virkahenkilöä, ja haastattelut toteutettiin useammalla kuin yhdellä tavalla."
        },
        {
          "id": "b",
          "text": "Haastattelut kestivät noin 25 minuutista tuntiin, ja aineiston analyysissa käytettiin atlas.ti-ohjelmaa sisällönanalyysin tukena."
        },
        {
          "id": "c",
          "text": "Tutkimuksessa haastateltiin kahdeksaa EU-toimielinten virkahenkilöä, joiden näkemyksiä verrattiin Suomen hallituksen kirjallisiin asiakirjoihin."
        },
        {
          "id": "d",
          "text": "Kaikille haastateltaville esitettiin täsmälleen samat kysymykset ilman mahdollisuutta täydentää haastattelurunkoa aiempien haastattelujen perusteella."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "32"
      },
      "explanation": "A on oikein. Haastateltavia oli kuusi, ja he olivat työskennelleet tai työskentelivät valtioneuvostossa. Haastattelut toteutettiin kasvokkain, Teamsin välityksellä tai puhelimitse.\nB on oikein. Haastattelut kestivät noin 25 minuutista tuntiin, ja aineisto analysoitiin sisällönanalyysilla atlas.ti-ohjelmaa hyödyntäen.\nC on väärin. Haastateltavia oli kuusi, eivätkä he olleet EU-toimielinten virkahenkilöitä vaan Suomen valtioneuvoston virkahenkilöitä.\nD on väärin. Kaikille esitettiin samat peruskysymykset, mutta haastattelurunkoa täydennettiin aiemmissa haastatteluissa nousseilla teemoilla.\n\nLähde:\nS. 32, johdanto.\nRatkaiseva lainaus: \"Näitä täydennetään kuudella asiantuntijahaastattelulla.\"",
      "learningPoint": "Opiskelijan tulee yhdistää haastateltavien määrä, tausta, haastattelujen kesto ja analyysimenetelmä. Lisäksi tulee erottaa kaikille yhteiset peruskysymykset täysin muuttumattomasta haastattelurungosta.\nHakuvinkki: Ctrl+F: kuudella asiantuntijahaastattelulla ja 25 minuutista."
    },
    {
      "id": "g-m11-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Suomen ja Tanskan asemaa EU:n muuttoliikepolitiikan niin sanottujen innovatiivisten ratkaisujen edistämisessä?",
      "options": [
        {
          "id": "a",
          "text": "Suomi on ollut innovatiivisten ratkaisujen alkuperäinen pääasiallinen aloitteentekijä, kun taas Tanska on osallistunut vain EU:n muuttoliikelainsäädännön toimeenpanoon."
        },
        {
          "id": "b",
          "text": "Tanska on ollut aktiivinen innovatiivisten ratkaisujen edistäjä, vaikka sillä on erivapaus EU:n oikeus- ja sisäasioissa, kun taas Suomi on edistänyt tavoitteitaan erityisesti yhteistyössä samanmielisten jäsenvaltioiden kanssa."
        },
        {
          "id": "c",
          "text": "Tanskan erivapaus on estänyt sitä osallistumasta EU:n muuttoliikepoliittiseen vaikuttamiseen, minkä vuoksi Suomi on joutunut korvaamaan Tanskan roolin."
        },
        {
          "id": "d",
          "text": "Suomi ja Tanska ovat molemmat vastustaneet turvapaikkaprosessien ulkoistamista EU:n ulkopuolelle, mutta kannattaneet jäsenvaltioiden pakollista turvapaikanhakijoiden siirtojärjestelmää."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "37 ja 39"
      },
      "explanation": "B on oikein. Tanska on ollut aloitteellinen uusien ratkaisujen edistämisessä, vaikka sen erivapaus tarkoittaa, ettei sitä pääosin sido EU:n muuttoliikelainsäädäntö. Suomi on puolestaan osallistunut samanmielisten maiden yhteiseen vaikuttamiseen.\nA on väärin, koska Tanska on ollut keskeinen aloitteentekijä.\nC on väärin, sillä erivapaus ei ole estänyt Tanskaa vaikuttamasta EU-politiikkaan.\nD on väärin, koska molemmat maat ovat edistäneet tiukempaa muuttoliikepolitiikkaa ja ulkoistamiseen liittyviä ratkaisuja.\n\nLähde:\nS. 37 ja 39, Suomen pohjoismainen viiteryhmä ja Tanskan vaikuttaminen.\nSivulla 39 todetaan Tanskan saavuttaneen \"merkittävän aseman niin sanottujen innovatiivisten ratkaisujen edistämisessä\".",
      "learningPoint": "Opiskelijan tulee erottaa Tanskan aloitteellinen rooli Suomen osallistumisesta laajempaan maajoukkoon. Lisäksi tulee yhdistää Tanskan erivapaus sen tosiasialliseen vaikuttamiseen.\nHakuvinkki: Ctrl+F: opt-out ja Tanska on myös maa."
    },
    {
      "id": "g-m11-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä Suomen EU-vaikuttamisen onnistumisia ja niiden taustalla olleita toimintatapoja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Komission paluuasetusehdotuksen ja turvallisia kolmansia maita koskevan ehdotuksen sisällyttämistä lainsäädäntöohjelmaan pidettiin samanmielisten jäsenvaltioiden yhteisen vaikuttamisen onnistumisena."
        },
        {
          "id": "b",
          "text": "Suomen yksilöllisiksi onnistumisiksi katsottiin erityisesti paluukeskuksia koskeva lainsäädäntö ja turvallisen kolmannen maan käsitteen muuttaminen."
        },
        {
          "id": "c",
          "text": "Itärajaan liittyvässä rahoituksessa ja komission Suomen poikkeuslaille antamassa poliittisessa tuessa nähtiin Suomen yksilöllisiä onnistumisia."
        },
        {
          "id": "d",
          "text": "Komission joulukuussa 2024 antamaa välineellistämistiedonantoa pidettiin yksinomaan Suomen pääministerin vaikuttamisen tuloksena, eikä jäsenvaltioiden yhteistyöllä katsottu olleen merkitystä."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "40–41",
        "section": "Tavoitteiden edistäminen ja niissä onnistuminen"
      },
      "explanation": "A on oikein. Paluuasetuksen ja turvallisia kolmansia maita koskevan asetuksen eteneminen nähtiin yhteisen maajoukon onnistumisena.\nB on väärin. Kyseisiä lainsäädäntöehdotuksia pidettiin nimenomaan kollektiivisen vaikuttamisen tuloksina.\nC on oikein. Itärajan rahoitus ja komission poliittinen tuki Suomen poikkeuslaille erotettiin yhteisistä onnistumisista Suomen yksilöllisinä saavutuksina.\nD on väärin. Välineellistämistiedonannon kohdalla kaksi haastateltavaa korosti pääministerin vaikutusta ja neljä maajoukon yhteistyötä.\n\nLähde:\nS. 40–41, \"Tavoitteiden edistäminen ja niissä onnistuminen\".\nSivulla 41 todetaan: \"Suomen yksilölliset onnistumiset liittyivät lähinnä itärajaan liittyvään rahoitukseen\".",
      "learningPoint": "Opiskelijan tulee erottaa Suomen yksilölliset onnistumiset samanmielisten jäsenvaltioiden yhteisistä saavutuksista. Oikea tutkimushavainto voi muuttua vääräksi, jos se liitetään väärään vaikuttamisen muotoon.\nHakuvinkki: Ctrl+F: yksilölliset onnistumiset ja maajoukon onnistumisena."
    },
    {
      "id": "g-m11-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nSuomen EU-muuttoliikevaikuttamisen korkea prioriteetti koski haastattelujen perusteella erityisesti turvapaikanhakijoihin liittyvää politiikkaa. Tästä ei voida päätellä, että työvoiman muuttoliikkeessä olisi tavoiteltu yhtä vahvaa EU-tason yhteistyötä, sillä yhdessä haastattelussa korostettiin kansallisen toiminnan ensisijaisuutta tällä osa-alueella.",
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
        "a"
      ],
      "source": {
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "41",
        "section": "Tavoitteiden edistäminen ja niissä onnistuminen"
      },
      "explanation": "Kaikki kuusi haastateltavaa pitivät turvapaikanhakijoihin liittyvää muuttoliikepolitiikkaa korkealle priorisoituna. Yksi haastateltava kuitenkin totesi, että työvoiman muuttoliikkeessä oli haluttu toimia pääasiassa kansallisesti eikä osallistua EU-tason vapaaehtoisiin järjestelyihin.\nVäittämä on oikein, koska se huomioi muuttoliikepolitiikan eri osa-alueiden välisen eron.\n\nLähde:\nS. 41, \"Tavoitteiden edistäminen ja niissä onnistuminen\".\nRatkaiseva lainaus: \"Korkealle priorisoitu EU-muuttoliikepolitiikka koskee siis vain osaa muuttoliikepolitiikasta\".",
      "learningPoint": "Opiskelijan tulee tarkistaa, mitä muuttoliikepolitiikan osa-aluetta tutkimushavainto koskee. Turvapaikkapolitiikkaa koskevaa johtopäätöstä ei saa automaattisesti laajentaa työperäiseen muuttoliikkeeseen.\nHakuvinkki: Ctrl+F: työvoiman muuttoliikkeessä ja vain osaa."
    },
    {
      "id": "g-m11-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Suomen EU-vaikuttamisen haasteita koskevia haastattelutuloksia?",
      "options": [
        {
          "id": "a",
          "text": "Kaikki haastateltavat pitivät muuttoliikerahoituksen pienuutta keskeisimpänä haasteena, kun taas hallituksen sisäiset erimielisyydet mainittiin vain yhdessä haastattelussa."
        },
        {
          "id": "b",
          "text": "Neljä haastateltavaa piti EU-jaostoja kansallisen valmistelun sisällön tärkeimpinä määrittäjinä, mutta poliittisen tason priorisointia ei pidetty ongelmana."
        },
        {
          "id": "c",
          "text": "Viisi haastateltavaa piti pääministerin kautta vaikuttamista tehokkaimpana keinona, ja kaikki kuusi katsoivat ministeriöiden välisen koordinaation toimivan ongelmitta."
        },
        {
          "id": "d",
          "text": "Kolme haastateltavaa nosti esiin muuttoliikerahoituksen pienuuden, kolme priorisoinnin ja kaikki kuusi nykyisen hallituksen eriävät näkemykset muuttoliikepolitiikassa."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "41–42",
        "section": "EU-vaikuttamisen haasteet ja riskit"
      },
      "explanation": "D on oikein. Kolme haastateltavaa mainitsi rahoituksen pienuuden, kolme priorisoinnin ja kaikki kuusi hallituksen sisäiset näkemyserot.\nA on väärin, koska rahoituksen pienuuden mainitsi kolme haastateltavaa eikä kaikki kuusi.\nB on väärin. EU-jaostoja pidettiin tärkeinä koordinaation kannalta kolmessa haastattelussa, mutta niiden ei nähty vaikuttavan varsinaisen valmistelun sisältöön.\nC on väärin. Pääministerin kautta vaikuttamista piti tehokkaimpana neljä haastateltavaa, ja ministeriöiden välisessä yhteistyössä tunnistettiin haasteita.\n\nLähde:\nS. 41–42, \"EU-vaikuttamisen haasteet ja riskit\".\nSivulla 42 todetaan: \"Kaikki haastateltavat mainitsivat haasteena nykyisen hallituksen eriävät näkemykset muuttoliikepolitiikassa.\"",
      "learningPoint": "Opiskelijan tulee yhdistää haastatteluteemat oikeisiin mainintamääriin. Erityisesti on erotettava toisistaan kolme, neljä ja kaikki kuusi haastateltavaa.\nHakuvinkki: Ctrl+F: Kolmen haastateltavan, Kaikki haastateltavat ja Neljä haastateltavaa."
    },
    {
      "id": "g-m11-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Tosi vai epätosi?\nEurooppalaistumisteorian näkökulmasta Suomen osallistuminen samanmielisten jäsenvaltioiden yhteiseen EU-vaikuttamiseen voi sisältää sekä kansallista projisointia että mukautumista. Suomen omien tavoitteiden edistäminen on voinut edellyttää myös muiden maiden tavoitteiden tukemista.",
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "44",
        "section": "Kansalliset edut ohjaavat integraatiota"
      },
      "explanation": "Kansallinen projisointi tarkoittaa omien tavoitteiden viemistä EU-tasolle. Yhteisessä vaikuttamisessa Suomi on kuitenkin joutunut toimimaan muiden jäsenvaltioiden kanssa, mikä on edellyttänyt myös mukautumista niiden ajamiin tavoitteisiin.\nNäin ollen projisointi ja mukautuminen eivät välttämättä ole käytännössä toisensa poissulkevia toimintatapoja.\n\nLähde:\nS. 44, \"Kansalliset edut ohjaavat integraatiota\".\nRatkaiseva lainaus: \"Kollektiivisessa toiminnassa projisointi ei kuitenkaan ole ollut vain kansallista\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, voivatko kaksi teoreettista ilmiötä toteutua samanaikaisesti. Erityisesti tulee välttää tulkintaa, jonka mukaan kansallisten tavoitteiden edistäminen sulkisi aina pois muiden tavoitteisiin mukautumisen.\nHakuvinkki: Ctrl+F: Kollektiivisessa toiminnassa projisointi."
    },
    {
      "id": "g-m11-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä Suomen EU-vaikuttamisen kehittämisehdotuksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Virkahenkilöiden EU-osaamisen kehittäminen ja suomalaisten määrän lisääminen EU-toimielimissä mainittiin kumpikin viidessä haastattelussa."
        },
        {
          "id": "b",
          "text": "Henkilökohtaiset suhteet nähtiin tärkeinä vaikuttamisväylinä kolmessa haastattelussa, ja verkostoitumisen katsottiin koskevan sekä muiden jäsenvaltioiden että komission virkahenkilöitä."
        },
        {
          "id": "c",
          "text": "Kaikki haastateltavat kannattivat pysyvän pohjoismaisen muuttoliike- ja kehitysyhteistyöryhmän perustamista, ja ehdotuksen katsottiin korvaavan ministeriöiden välisen koordinaation."
        },
        {
          "id": "d",
          "text": "EU-virkahenkilöiden yhteinen perehdytyspolku esitettiin jo käytössä olevana ratkaisuna, jonka vaikutukset Suomen neuvottelumenestykseen oli tutkimuksessa osoitettu."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "43",
        "section": "Vaikuttamisen mahdollisuudet ja kehittämiskohteet"
      },
      "explanation": "A on oikein. Viisi haastateltavaa mainitsi EU-osaamisen kehittämisen ja viisi suomalaisten määrän lisäämisen EU-toimielimissä.\nB on oikein. Kolme haastateltavaa nosti esiin henkilökohtaisten suhteiden merkityksen, ja suhteita pidettiin tärkeinä sekä jäsenvaltioihin että komissioon.\nC on väärin. Pohjoismaista pysyvää ryhmää ehdotettiin yhdessä haastattelussa, eikä sen tarkoituksena ollut korvata kansallista koordinaatiota.\nD on väärin. Yhteinen perehdytyspolku esitettiin kehittämisehdotuksena, ei jo toteutettuna ja vaikutuksiltaan arvioituna käytäntönä.\n\nLähde:\nS. 43, \"Vaikuttamisen mahdollisuudet ja kehittämiskohteet\".\nRatkaiseva lainaus: \"Viisi haastateltavaa mainitsi, että myös virkakunnan EU-osaamista voitaisiin parantaa.\"",
      "learningPoint": "Opiskelijan tulee yhdistää kehittämisehdotukset oikeisiin haastattelumääriin. Erityisesti tulee erottaa viidessä, kolmessa ja yhdessä haastattelussa esiin nousseet ehdotukset sekä huomata, mitkä käytännöt olivat vasta ehdotuksia.\nHakuvinkki: Ctrl+F: Viisi haastateltavaa, henkilökohtaiset suhteet ja perehdytyspolkua."
    },
    {
      "id": "g-m11-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä komission ehdotuksia ja niiden etenemistä?",
      "options": [
        {
          "id": "a",
          "text": "Maaliskuussa 2025 julkaistussa paluuasetusehdotuksessa esitettiin oikeudellisen perustan luomista EU:n ulkopuolisille paluukeskuksille."
        },
        {
          "id": "b",
          "text": "Toukokuussa 2025 annetussa turvallisia kolmansia maita koskevassa ehdotuksessa pyrittiin lieventämään turvapaikanhakijan ja kolmannen maan välistä yhteysvaatimusta."
        },
        {
          "id": "c",
          "text": "Joulukuussa 2024 komissio julkaisi tiedonannon, joka tarjosi poliittista tukea turvapaikkahakemusten vastaanottamisen keskeyttämiselle tietyissä muuttoliikkeen välineellistämistilanteissa."
        },
        {
          "id": "d",
          "text": "Maaliskuussa 2025 julkaistu turvallisen kolmannen maan asetusehdotus loi oikeudellisen perustan paluukeskuksille, ja toukokuussa julkaistu paluuasetusehdotus poisti hakijan ja kolmannen maan välisen yhteysvaatimuksen."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "35–36",
        "section": "Viimeaikaiset muutokset EU:n tasolla ja jäsenvaltioiden vaikutus"
      },
      "explanation": "A on oikein. Paluuasetusehdotuksessa esitettiin oikeudellisen kehyksen luomista EU:n ulkopuolisille paluukeskuksille. Kyse oli ehdotuksesta, ei vielä sen julkaisuhetkellä voimassa olleesta sääntelystä.\nB on oikein. Turvallisen kolmannen maan käsitteen soveltamista koskevassa ehdotuksessa pyrittiin lieventämään hakijan ja kolmannen maan välisen yhteyden vaatimusta.\nC on oikein. Joulukuun 2024 tiedonanto koski muuttoliikkeen käyttämistä aseena ja antoi poliittista tukea Suomen ja Puolan tavoitteille.\nD on väärin. Siinä vaihdetaan maaliskuun ja toukokuun ehdotusten ajankohdat ja sisällöt keskenään. Lisäksi ehdotusten julkaisemista ei pidä sekoittaa sääntelyn voimaantuloon.\n\nLähde:\nS. 35–36, \"Viimeaikaiset muutokset EU:n tasolla ja jäsenvaltioiden vaikutus\".\nSivulla 36 todetaan: \"Maaliskuussa 2025 julkaistiin komission ehdotus EU:n paluuasetukseksi\".",
      "learningPoint": "Opiskelijan tulee erottaa komission eri asiakirjat, niiden julkaisuajankohdat ja tavoitteet. Samankaltaiset ulkoistamiseen liittyvät ehdotukset eivät tarkoita samaa säädöshanketta.\nHakuvinkki: Ctrl+F: Maaliskuussa 2025 ja toukokuussa 2025."
    },
    {
      "id": "g-m11-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nArtikkelissa Suomen rajaturvallisuuteen liittyvää asiantuntemusta pidetään yhtenä EU-vaikuttamisen vahvuutena. Tämä ei kuitenkaan tarkoita, että Suomen olisi yhtä helppoa edistää kaikkia muuttoliikepoliittisia tavoitteitaan, sillä esimerkiksi Somaliaan liittyvä paluuyhteistyö ei ole ollut useimpien muiden EU-maiden prioriteetti.",
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
        "a"
      ],
      "source": {
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "39 ja 41"
      },
      "explanation": "Suomen asiantuntemusta rajakysymyksissä on arvostettu, ja se on voinut lisätä Suomen vaikutusvaltaa. Toisaalta Suomen on vaikeampi edistää tavoitteita, jotka eivät ole muille jäsenvaltioille tärkeitä.\nSomaliaan liittyvä paluuyhteistyö havainnollistaa tilannetta, jossa Suomen kansallinen prioriteetti ei ole saanut laajaa EU-tason tukea.\n\nLähde:\nS. 39 ja 41.\nSivulla 39 todetaan Somaliasta: \"maa ei ole prioriteettimaa Ruotsin lisäksi juuri muille EU-maille\". Sivulla 41 kuvataan Suomen rajavartioston hyvää mainetta ja itärajaosaamista.",
      "learningPoint": "Opiskelijan tulee erottaa tietyllä politiikan osa-alueella saavutettu vaikutusvalta yleisestä vaikutusvallasta. Yhden alan vahvuutta ei saa yleistää kaikkiin neuvottelukysymyksiin.\nHakuvinkki: Ctrl+F: Somalia ja rajavartioston hyvä maine."
    },
    {
      "id": "g-m11-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin artikkelin tulkintaa EU:n muuttoliikepolitiikan integraatiokehityksestä?",
      "options": [
        {
          "id": "a",
          "text": "Muuttoliikepolitiikan integraatio on nykyisellä lainsäädäntökaudella edennyt ensisijaisesti komission itsenäisestä aloitteesta ilman jäsenvaltioiden merkittävää vaikutusta."
        },
        {
          "id": "b",
          "text": "Muuttoliikepolitiikan integraatio voidaan tulkita kansallisten intressien ohjaamaksi, koska jäsenvaltioiden laaja ja aktiivinen yhteistyö on vaikuttanut uusien EU-tason aloitteiden muodostumiseen."
        },
        {
          "id": "c",
          "text": "Muuttoliikepolitiikan integraatio osoittaa, että jäsenvaltiot ovat luopuneet kansallisista tavoitteistaan ja siirtäneet muuttoliikepolitiikan kokonaan komission päätettäväksi."
        },
        {
          "id": "d",
          "text": "Muuttoliikepolitiikan integraatio on pysähtynyt muuttoliikepaktin hyväksymisen jälkeen, sillä jäsenvaltiot eivät ole enää edistäneet uusia EU-tason aloitteita."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "34–35"
      },
      "explanation": "B on oikein. Kirjoittaja yhdistää nykyisen muuttoliikepoliittisen integraation erityisesti Moravcsikin kansallisia intressejä korostavaan näkökulmaan.\nA on väärin, koska jäsenvaltiot ovat olleet keskeisiä aloitteiden edistäjiä.\nC on väärin, koska jäsenvaltiot eivät ole luopuneet kansallisista tavoitteistaan, vaan pyrkineet edistämään niitä EU-tasolla.\nD on väärin. Muuttoliikepaktin jälkeen EU-politiikassa on edistetty uusia niin sanottuja innovatiivisia ratkaisuja.\n\nLähde:\nS. 34–35, eurooppalaistumisteoriaa ja integraatioteorioita käsittelevä osuus.\nSivulla 35 todetaan integraation etenevän \"jäsenvaltioiden suuren joukon systemaattisesta ja julkisesta asioiden edistämisestä johtuen\".",
      "learningPoint": "Opiskelijan tulee erottaa integraation eteneminen sen taustalla olevasta toimijasta ja selitysmekanismista. Erityisesti on tarkistettava, kuvataanko muutosta komission vai jäsenvaltioiden aloitteellisuuden seurauksena.\nHakuvinkki: Ctrl+F: moravcsikilaista integraatiota ja jäsenvaltioiden suuren joukon."
    },
    {
      "id": "g-m11-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä haastattelutuloksia Suomen EU-vaikuttamisen onnistumisista ja kehittämismahdollisuuksista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Pääministerin kautta vaikuttamista piti tehokkaimpana keinona neljä haastateltavaa, ja Suomen hyvän maineen merkitys vaikuttamiselle nousi esiin viidessä haastattelussa."
        },
        {
          "id": "b",
          "text": "Kolme haastateltavaa piti henkilökohtaisia suhteita tärkeinä vaikuttamisväylinä, ja yhtä moni korosti etukäteen valmisteltujen kantojen merkitystä."
        },
        {
          "id": "c",
          "text": "Kaikki kuusi haastateltavaa pitivät Suomen EU-osaamista riittämättömänä, mutta vain yksi katsoi suomalaisten määrää EU-toimielimissä tarpeelliseksi lisätä."
        },
        {
          "id": "d",
          "text": "Viisi haastateltavaa korosti pääministerin kautta vaikuttamista, kun taas neljä piti Suomen hyvää mainetta keskeisenä EU-vaikuttamisen vahvuutena."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "42–43",
        "section": "EU-vaikuttamisen haasteet ja riskit"
      },
      "explanation": "A on oikein. Neljä haastateltavaa piti pääministerin kautta vaikuttamista tehokkaimpana, ja viisi nosti esiin Suomen hyvän maineen.\nB on oikein. Kolme haastateltavaa mainitsi henkilökohtaiset suhteet ja kolme etukäteen valmisteltujen kantojen merkityksen.\nC on väärin. EU-osaamisen kehittämisen mainitsi viisi haastateltavaa, samoin suomalaisten määrän lisäämisen EU-toimielimissä.\nD on väärin. Se vaihtaa pääministerin vaikutuskanavaa ja Suomen hyvää mainetta koskevat haastattelumäärät keskenään.\n\nLähde:\nS. 42–43, \"EU-vaikuttamisen haasteet ja riskit\" sekä \"Vaikuttamisen mahdollisuudet ja kehittämiskohteet\".\nSivulla 42 todetaan: \"Neljä haastateltavaa mainitsi, että kaikkein tehokkain vaikutuskeino Suomelle olisi pääministerin kautta vaikuttaminen.\"\nSivulla 43 todetaan Suomen hyvän maineen nousseen esiin viidessä haastattelussa.",
      "learningPoint": "Opiskelijan tulee yhdistää useita haastatteluteemoja niiden oikeisiin lukumääriin. Tehtävässä ei riitä yhden luvun tunnistaminen, vaan on verrattava kahden eri alaluvun havaintoja.\nHakuvinkki: Ctrl+F: kaikkein tehokkain vaikutuskeino, Suomen hyvä maine ja henkilökohtaiset suhteet."
    },
    {
      "id": "g-m11-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nSuomen osallistumista EU:n muuttoliikepolitiikan muotoiluun voidaan pitää kansallisena projisointina, vaikka Suomi on samalla mukautunut muiden jäsenvaltioiden tavoitteisiin. Tämä ei kuitenkaan osoita, että Suomi olisi pystynyt itsenäisesti määrittämään EU:n muuttoliikepolitiikan suunnan, sillä onnistumista on helpottanut enemmistön samansuuntainen politiikka.",
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "44–45",
        "section": "Kansalliset edut ohjaavat integraatiota"
      },
      "explanation": "Väittämä yhdistää eurooppalaistumisteorian käsitteet ja tutkimuksen johtopäätökset.\nSuomi on pyrkinyt vaikuttamaan EU-politiikan sisältöön eli projisoimaan kansallisia tavoitteitaan. Kollektiivinen toiminta on kuitenkin edellyttänyt myös mukautumista muiden maiden ajamiin asioihin.\nOnnistuminen ei siten tarkoita, että Suomi olisi yksin saanut aikaan EU-politiikan muutokset.\n\nLähde:\nS. 44–45, \"Kansalliset edut ohjaavat integraatiota\" ja \"Johtopäätökset\".\nSivulla 45 todetaan: \"Suomi on onnistunut vaikuttamisessaan lähinnä siksi, että enemmistö EU-maista on ajanut samantyylistä politiikkaa\".",
      "learningPoint": "Opiskelijan tulee yhdistää Suomen onnistuminen sen taustalla oleviin selittäviin tekijöihin. Erityisesti on tarkistettava, johtuiko onnistuminen Suomen itsenäisestä vaikutusvallasta vai myös muiden jäsenvaltioiden samansuuntaisista tavoitteista.\nHakuvinkki: Ctrl+F: enemmistö EU-maista ja Kollektiivisessa toiminnassa."
    },
    {
      "id": "g-m11-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa käsitellyt aiemmat tutkimukset ja niiden näkökulmat eurooppalaistumiseen?",
      "options": [
        {
          "id": "a",
          "text": "Teemu Palosaari tarkasteli Ruotsin turvallisuuspolitiikkaa alkuperäisen kolmijakoisen eurooppalaistumisteorian mukaisesti, kun taas Fredrik Lee-Ohlsson tutki Suomen muuttoliikepolitiikan mukautumista vuosina 1954–2020."
        },
        {
          "id": "b",
          "text": "Hanna Tuominen ja Matti Välimäki tarkastelivat Suomen nykyisen hallituksen kansallista projisointia vuoden 2024 eurovaalien jälkeen, kun taas Palosaari analysoi EU:n muuttoliikepaktin täytäntöönpanoa."
        },
        {
          "id": "c",
          "text": "Fredrik Lee-Ohlsson tarkasteli Suomen ulko- ja turvallisuuspolitiikan sopeutumista EU:hun, kun taas Palosaari analysoi Ruotsin siviilikriisinhallinnan kehittämistä."
        },
        {
          "id": "d",
          "text": "Teemu Palosaari tarkasteli Suomen ulko- ja turvallisuuspolitiikkaa mukautumisen ja projisoinnin näkökulmista, Lee-Ohlsson Ruotsin turvallisuuspoliittista eurooppalaistumista ja Tuominen sekä Välimäki Suomen muuttoliikepolitiikan kehitystä vuosina 1954–2020."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "33–34",
        "section": "Eurooppalaistumisteoria analyyttisenä työkaluna"
      },
      "explanation": "D on oikein. Palosaari tutki Suomen ulko- ja turvallisuuspolitiikkaa, Lee-Ohlsson Ruotsin turvallisuuspoliittista eurooppalaistumista ja Tuominen sekä Välimäki Suomen muuttoliikepolitiikkaa vuosina 1954–2020.\nA on väärin, koska Palosaaren ja Lee-Ohlssonin tutkimuskohteet ovat vaihtuneet ja Tuomisen sekä Välimäen tutkimus on liitetty väärään tutkijaan.\nB on väärin, koska Tuomisen ja Välimäen tutkimus ei käsitellyt vuoden 2024 jälkeistä hallituskautta.\nC on väärin, koska Palosaaren ja Lee-Ohlssonin tutkimuskohteet on vaihdettu keskenään.\n\nLähde:\nS. 33–34, \"Eurooppalaistumisteoria analyyttisenä työkaluna\".\nSivulla 33 todetaan: \"Teemu Palosaari (2011) tarkasteli tutkimuksessaan Suomen ulko- ja turvallisuuspolitiikkaa eurooppalaistumisteorian näkökulmasta\".",
      "learningPoint": "Opiskelijan tulee yhdistää kolme aiempaa tutkimusta oikeisiin tutkijoihin, maihin ja tarkastelukohteisiin. Väärissä vaihtoehdoissa käytetään artikkelissa esiintyviä todellisia tutkimusaiheita mutta liitetään ne vääriin lähteisiin.\nHakuvinkki: Ctrl+F: Palosaari (2011), Lee-Ohlsson ja Tuominen ja Matti Välimäki."
    },
    {
      "id": "g-m11-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nTutkimuksen perusteella Suomen EU-muuttoliikevaikuttamisen kehittämisessä tulisi keskittyä yksinomaan virkahenkilöiden EU-osaamisen lisäämiseen. Poliittisen tason priorisoinnin ja ministeriöiden välisen koordinaation parantaminen ei artikkelin mukaan olisi olennaista, koska ongelmat liittyvät pääasiassa yksittäisten virkahenkilöiden taitoihin.",
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "42–45"
      },
      "explanation": "Väittämä on väärin, koska artikkelissa korostetaan useita toisiaan täydentäviä kehittämistarpeita.\nVirkahenkilöiden EU-osaamisen parantaminen on yksi ehdotus, mutta tutkimuksessa nostetaan vahvasti esiin myös poliittinen priorisointi, ministeriöiden välinen yhteistyö, kokonaisvaltainen lähestymistapa ja resurssit.\nLisäksi hallituksen sisäiset näkemyserot mainittiin kaikissa kuudessa haastattelussa.\n\nLähde:\nS. 42–45, erityisesti \"Vaikuttamisen mahdollisuudet ja kehittämiskohteet\" ja \"Johtopäätökset\".\nSivulla 44 todetaan: \"Ennakollinen ja kokonaisvaltainen vaikuttaminen näyttäytyivät kaikkein tehokkaimpana vaikutuskeinona\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin useista kehittämistarpeista nostetaan yksi ainoaksi selitykseksi tai ratkaisuksi. Erityisesti on tarkistettava ilmaukset \"yksinomaan\" ja \"ei olisi olennaista\".\nHakuvinkki: Ctrl+F: kokonaisvaltainen vaikuttaminen ja poliittisella tasolla."
    },
    {
      "id": "g-m11-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä Suomen EU-vaikuttamisen rajoituksia ja johtopäätöksiä?",
      "options": [
        {
          "id": "a",
          "text": "Suomen muuttoliikepoliittinen vaikuttaminen on onnistunut erityisesti silloin, kun sen tavoitteet ovat olleet samansuuntaisia EU:n jäsenvaltioiden enemmistön tavoitteiden kanssa."
        },
        {
          "id": "b",
          "text": "Suomen mahdollisuudet vaikuttaa EU:n muuttoliikepolitiikkaan voivat riippua myös siitä, kuinka paljon resursseja ja neuvotteluvaltteja sillä on käytettävissään."
        },
        {
          "id": "c",
          "text": "Suomen onnistuminen samanmielisten maiden yhteisessä vaikuttamisessa osoittaa, että Suomi kykenee edistämään yhtä tehokkaasti myös EU:n enemmistön vastaisia tavoitteita ilman muiden jäsenvaltioiden tukea."
        },
        {
          "id": "d",
          "text": "Suomen vaikutusvallan arviointia voisi täydentää tarkastelemalla EU-toimielinten ja muiden jäsenvaltioiden näkemyksiä sekä vertailemalla eri hallituskausia."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "39 ja 45",
        "section": "Johtopäätökset"
      },
      "explanation": "A on oikein. Suomen tavoitteiden samansuuntaisuus EU:n enemmistön kanssa on ollut keskeinen onnistumista selittävä tekijä.\nB on oikein. Resurssien rajallisuus, neuvotteluvalttien puute ja kansallisten tavoitteiden vähäinen kiinnostavuus muille maille voivat heikentää vaikutusmahdollisuuksia.\nC on väärin. Tutkimus ei osoita Suomen pystyvän vaikuttamaan yhtä tehokkaasti tilanteessa, jossa sen tavoitteet olisivat EU:n enemmistön vastaisia. Kirjoittaja pitää tällaista tilannetta mahdollisena vaikuttavuuden arvioinnin jatkotutkimuskohteena.\nD on oikein. Tutkija ehdottaa vertailua eri hallituskausien ja maiden välillä sekä EU-instituutioiden ja muiden jäsenvaltioiden näkökulmien huomioimista.\n\nLähde:\nS. 39 ja 45, \"Johtopäätökset\".\nSivulla 45 todetaan: \"Todellisia vaikuttamismahdollisuuksia voisikin mitata tehokkaammin tilanteessa, jossa Suomen edistämä politiikka olisi EU:n valtavirran vastaista.\"",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksessa tarkasteltu tilanne sellaisesta tilanteesta, jota tutkimus ei ole osoittanut. Yhteistyössä saavutettua onnistumista ei saa yleistää tilanteisiin, joissa vastaavaa tukea ei ole.\nHakuvinkki: Ctrl+F: valtavirran vastaista ja Laajempien johtopäätösten."
    },
    {
      "id": "g-m11-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Heinikosken tutkimuksen tulosten ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suomen kansallisten muuttoliikepoliittisten tavoitteiden edistäminen EU-tasolla on voinut onnistua kollektiivisen vaikuttamisen avulla, vaikka tämä on samalla edellyttänyt mukautumista muiden jäsenvaltioiden tavoitteisiin."
        },
        {
          "id": "b",
          "text": "Suomen onnistuminen EU:n nykyisen muuttoliikepoliittisen valtavirran tukemisessa osoittaa, että Suomen vaikutusvalta olisi yhtä suuri myös tilanteessa, jossa hallitus pyrkisi muuttamaan EU-politiikkaa täysin vastakkaiseen suuntaan."
        },
        {
          "id": "c",
          "text": "Suomen EU-muuttoliikepoliittisen vaikuttamisen kehittäminen edellyttäisi tutkimuksen perusteella muun muassa selkeämpää poliittista priorisointia ja ministeriöiden välistä koordinaatiota, eikä pelkkä virkahenkilöiden EU-osaamisen kehittäminen riittäisi vastaamaan kaikkiin tunnistettuihin haasteisiin."
        },
        {
          "id": "d",
          "text": "Koska EU:n muuttoliikepolitiikka on siirtymässä ulkoistamisen suuntaan, tutkija osoittaa seuraavan Suomen hallituksen jatkavan varmasti samoja tavoitteita riippumatta hallituspohjasta ja kansallisista poliittisista muutoksista."
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
        "articleId": "innovatiivisten-peesissa-suomen-maahanmuuttopoliittinen-vaikuttaminen",
        "page": "44–45",
        "section": "Kansalliset edut ohjaavat integraatiota"
      },
      "explanation": "A on oikein. Suomi on onnistunut edistämään kansallisia tavoitteitaan muiden samanmielisten jäsenvaltioiden kanssa, mutta yhteinen vaikuttaminen on edellyttänyt myös muiden tavoitteisiin mukautumista.\nB on väärin. Tutkimuksessa ei osoiteta Suomen onnistuvan yhtä hyvin valtavirran vastaisessa vaikuttamisessa. Tutkija pitää tätä tärkeänä kysymyksenä vaikutusvallan arvioimisessa.\nC on oikein. Tutkimuksessa tunnistetaan sekä poliittiseen priorisointiin, koordinaatioon, resursseihin että EU-osaamiseen liittyviä kehittämistarpeita. Yhden osa-alueen parantaminen ei automaattisesti ratkaise kaikkia ongelmia.\nD on väärin. Tutkija arvioi Suomen todennäköisesti haluavan pysyä mukana innovatiivisia ratkaisuja koskevissa keskusteluissa myös mahdollisen hallituspohjan muutoksen jälkeen. Tätä ei kuitenkaan esitetä varmana tulevaisuuden tapahtumana.\n\nLähde:\nS. 44–45, \"Kansalliset edut ohjaavat integraatiota\" ja \"Johtopäätökset\".\nSivulla 44 todetaan: \"Kollektiivisessa toiminnassa projisointi ei kuitenkaan ole ollut vain kansallista\".\nSivulla 45 korostetaan poliittisen ja virkatason priorisoinnin sekä ministeriöiden välisen yhteistyön kehittämistä.",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksessa perustellut päätelmät liian pitkälle menevistä yleistyksistä. Erityisesti on tarkistettava, voiko nykyisessä tilanteessa havaittua onnistumista yleistää toisenlaisiin poliittisiin olosuhteisiin ja voidaanko todennäköinen tulevaisuuden kehitys esittää varmana.\nHakuvinkki: Ctrl+F: On todennäköistä, priorisointi ei ole ollut riittävää ja Kollektiivisessa toiminnassa."
    }
  ]
} satisfies ValintakoeGExercise;
