import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 13: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise13Base = {
  "id": "keskivaikea-harjoitus-13",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 13 – Media generatiivisen tekoälyn ajassa",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "media-generatiivisen-tekoalyn-ajassa",
  "articleTitle": "Media generatiivisen tekoälyn ajassa",
  "articleUrl": "https://journal.fi/mediaviestinta/article/view/185507/126217",
  "questions": [
    {
      "id": "g-m13-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein tutkimuksen lähestymistapaa ja generatiivisen tekoälyn asemaa aiemmassa mediatutkimuksessa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Aiemmassa tutkimuksessa on painotettu tekoälyn hyödyntämistä journalistisen sisällön tuotannossa ja jakelussa, kun taas katsauksessa tarkastellaan erityisesti tekoälyn vaikutuksia yleisöjen mediankäyttöön."
        },
        {
          "id": "b",
          "text": "Journalismin yleisökäänne tarkoittaa sitä, että mediatutkimus on jo laajasti selvittänyt yleisöjen tapoja käyttää generatiivista tekoälyä aktiivisesti uutisten kuluttamisessa."
        },
        {
          "id": "c",
          "text": "Tutkijat pyrkivät tarkastelemaan yleisöjä aktiivisina mediatoimijoina, jotka voivat tekoälyn avulla vaikuttaa myös siihen, millaisessa muodossa mediasisältöjä kulutetaan."
        },
        {
          "id": "d",
          "text": "Aiempi mediatutkimus on keskittynyt ensisijaisesti yleisöjen tekoälyavusteiseen sisällönmuokkaukseen, kun taas katsauksessa palataan tekoälyn toimituksellisiin käyttötapoihin."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "52–53"
      },
      "explanation": "A on oikein. Aiempi tutkimus on keskittynyt erityisesti tekoälyn hyödyntämiseen journalistisessa työssä. Katsauksessa näkökulma siirretään yleisöjen toimintaan.\nB on väärin. Yleisökäänne on tapahtunut journalistisessa työssä, mutta vastaava käänne mediatutkimuksessa itsessään on kirjoittajien mukaan pitkälti tekemättä.\nC on oikein. Tutkijat tarkastelevat yleisöjen mahdollisuuksia hyödyntää tekoälyä sisältöjen valinnassa, muokkaamisessa ja kuluttamisessa.\nD on väärin. Siinä aiemman tutkimuksen ja katsauksen painotukset on vaihdettu keskenään.\n\nLähde:\nS. 52–53, katsauksen johdanto.\nRatkaiseva lainaus, s. 52: \"Yleisöjä ei kuitenkaan ole vielä tutkittu aktiivisina mediatoimijoina\".",
      "learningPoint": "Opiskelijan tulee erottaa aiemman mediatutkimuksen painotukset katsauksen omasta tutkimusnäkökulmasta. Erityisesti tulee tarkistaa, käsitelläänkö tekoälyä journalistien vai yleisöjen käyttämänä teknologiana.\nHakuvinkki: Ctrl+F: yleisökäänne ja aktiivisina mediatoimijoina."
    },
    {
      "id": "g-m13-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Tosi vai epätosi?\nTutkimuksessa design-fiktioita hyödynnettiin sekä mahdollisten tulevaisuuden median kulutustapojen havainnollistamiseen että haastattelujen ja keskustelujen virikkeinä. Niiden tarkoituksena ei ollut ennustaa yksiselitteisesti, millaiseksi tulevaisuuden mediaympäristö muodostuu.",
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "53–54"
      },
      "explanation": "Design-fiktiot toimivat tutkimuksessa kahdessa roolissa. Ne olivat itsessään aineistoa, joka kuvasi mahdollisia tulevaisuuksia, ja samalla ne auttoivat keräämään lisää aineistoa haastatteluista ja keskusteluista.\nMenetelmän tavoitteena oli mahdollisten kehityskulkujen tarkastelu, ei yhden varman tulevaisuuden ennustaminen.\n\nLähde:\nS. 53–54, tutkimusmenetelmän kuvaus.\nRatkaiseva lainaus, s. 54: \"empiirisenä aineistona\" sekä \"virikkeinä\".",
      "learningPoint": "Opiskelijan tulee erottaa tulevaisuuden mahdollisuuksien tutkiminen ennustamisesta. Lisäksi tulee tunnistaa tutkimusmenetelmän kaksi erilaista käyttötarkoitusta.\nHakuvinkki: Ctrl+F: kahtalaisessa roolissa ja design-fiktiot."
    },
    {
      "id": "g-m13-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein media- ja informaatioympäristön kehitysvaiheet ja niiden keskeiset piirteet?",
      "options": [
        {
          "id": "a",
          "text": "Varhaisen internetin aikana sisältöjen tuotanto ja jakelu olivat kalliita ja hitaita, kun taas digitaalisen median aikakaudella sisällön kulutus muuttui ensimmäistä kertaa valintaperusteiseksi."
        },
        {
          "id": "b",
          "text": "Ennen internetiä median kulutus oli pääosin yksilöllistä, kun taas varhainen internet keskitti sisällön jakelun suurille mediaorganisaatioille."
        },
        {
          "id": "c",
          "text": "Digitaalisen median aikakaudella sisällön tuotannon ja kulutuksen välinen raja alkoi hämärtyä, kun taas tekoälyn ajassa myös tuotanto, jakelu ja muokkaus voivat sulautua jatkuvaksi prosessiksi."
        },
        {
          "id": "d",
          "text": "Tekoälyn aikakaudella sisällöntuotanto palautuu journalististen instituutioiden hallintaan, kun taas varhaisen internetin aikana tekoälyjärjestelmät ohjasivat sisällön näkyvyyttä."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "55–56"
      },
      "explanation": "C on oikein. Digitaalisen ja sosiaalisen median aikana käyttäjistä tuli myös sisällöntuottajia. Tekoälyn aikakaudella tämä kehitys voi jatkua siten, että sisältöä tuotetaan ja muokataan jatkuvasti käyttäjän ja tekoälyn vuorovaikutuksessa.\nA on väärin. Kallis ja hidas sisällöntuotanto liittyy internetiä edeltäneeseen aikaan, kun taas varhainen internet teki tuotannosta ja jakelusta edullisempaa ja helpompaa. Valintaperusteinen kulutus alkoi varhaisen internetin aikana. Digitaalisen ja sosiaalisen median vaiheessa kulutus muuttui edelleen yksilöllisemmäksi sekä ajasta ja paikasta riippumattomammaksi.\nB on väärin. Ennen internetiä korostui lineaarinen massakulutus, ja varhainen internet hajautti aiemmin keskittynyttä sisällöntuotantoa ja jakelua.\nD on väärin. Tekoälyjärjestelmät eivät olleet varhaisen internetin keskeisiä portinvartijoita, eikä tekoälyajan kuvata automaattisesti palauttavan valtaa journalistisille instituutioille.\n\nLähde:\nS. 55–56, taulukko 1 ja \"Sisältöjen tuotanto ja jakelu\".\nRatkaiseva lainaus, s. 56: \"Sisällön tuotanto, muokkaus ja jakelu voivat sulautua jatkuvaksi prosessiksi\".",
      "learningPoint": "Opiskelijan tulee yhdistää kehitysvaiheet niiden oikeisiin ominaisuuksiin. Väärissä vaihtoehdoissa käytetään artikkelin todellisia käsitteitä mutta sijoitetaan ne väärään aikakauteen.\nHakuvinkki: Ctrl+F: Taulukko 1 ja prodifikaatioksi."
    },
    {
      "id": "g-m13-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Oikein vai väärin?\nProdifikaatio tarkoittaa artikkelissa sitä, että tekoälyn avulla mediasisällön tuotanto, muokkaus ja jakelu voivat sulautua jatkuvaksi prosessiksi. Tämä kehitys vie tuottajakäyttäjyyden ajatusta pidemmälle, koska sisällön lopullinen muoto ei välttämättä ole ennalta määrätty.",
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "56",
        "section": "Sisältöjen tuotanto ja jakelu"
      },
      "explanation": "Tuottajakäyttäjyydessä yleisöt osallistuvat sisällöntuotantoon. Prodifikaatiossa tekoäly mahdollistaa vielä pidemmälle menevän kehityksen, jossa tuotanto, jakelu ja muokkaus limittyvät jatkuvasti toisiinsa.\nTämä haastaa ajatuksen valmiista ja pysyvästä mediatuotteesta.\n\nLähde:\nS. 56, \"Sisältöjen tuotanto ja jakelu\".\nRatkaiseva lainaus: \"Tätä kutsumme prodifikaatioksi (prodification).\"",
      "learningPoint": "Opiskelijan tulee erottaa tuottajakäyttäjyys prodifikaatiosta ja tunnistaa, miten jälkimmäinen käsite laajentaa aiempaa kehitystä.\nHakuvinkki: Ctrl+F: tuottajakäyttäjyyden ja prodifikaatioksi."
    },
    {
      "id": "g-m13-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tekoälyajan median kulutuksen mahdollisia muutoksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Ympäristöön sulautuvassa median kulutuksessa tekoäly voi yhdistää mediasisältöjä käyttäjän tilanteeseen ilman erillistä sisällönvalintaa."
        },
        {
          "id": "b",
          "text": "Hyperyksilöllistyminen tarkoittaa, että kaikille käyttäjille esitetään sama sisältö mutta eri ajankohtina."
        },
        {
          "id": "c",
          "text": "Tekoäly voi huomioida useiden käyttäjien mieltymyksiä ja tuottaa niiden perusteella yhteisiä mediakokemuksia, vaikka sisältöä samalla personoidaan."
        },
        {
          "id": "d",
          "text": "Uudelleenjaettu median kulutus tarkoittaa, että tekoäly poistaa käyttäjäkohtaisen muokkauksen ja palauttaa perinteisen lineaarisen massakulutuksen."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "57",
        "section": "Median kulutus"
      },
      "explanation": "A on oikein. Ympäristöön sulautuvassa kulutuksessa tekoäly voi tarjota sisältöä käyttäjän tilanteen perusteella ilman erillistä valintaa.\nB on väärin. Hyperyksilöllistyminen koskee sekä sisällön valintaa että esitystapaa, jotka voivat vaihdella käyttäjäkohtaisesti.\nC on oikein. Together-fiktiossa tekoäly huomioi useiden yhdessä uutislähetystä katsovien henkilöiden mieltymykset.\nD on väärin. Uudelleenjaettu kulutus ei poista personointia, vaan mahdollistaa useiden käyttäjien mieltymysten yhdistämisen.\n\nLähde:\nS. 57, \"Median kulutus\" ja kuva 2, Together.\nRatkaiseva lainaus: \"tekoäly voi myös yhdistää sisällön muokkauksessa useiden käyttäjien intressejä ja preferenssejä\".",
      "learningPoint": "Opiskelijan tulee erottaa yksilöllinen personointi yhteisestä mediakokemuksesta ja huomata, etteivät ne välttämättä sulje toisiaan pois.\nHakuvinkki: Ctrl+F: ympäristöön sulautuvaksi ja reshared consumption."
    },
    {
      "id": "g-m13-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein alustoitumisen ja alustariippuvuuden murtumisen mahdollisia kehityskulkuja tekoälyn aikakaudella?",
      "options": [
        {
          "id": "a",
          "text": "Alustoitumisessa mediaorganisaatiot kehittävät omia tekoälyjärjestelmiään vähentääkseen riippuvuuttaan suurista teknologiayhtiöistä, kun taas alustariippuvuuden murtuminen tarkoittaa vallan keskittymistä muutamille alustoille."
        },
        {
          "id": "b",
          "text": "Alustoituminen ja alustariippuvuuden murtuminen tarkoittavat samaa kehitystä, jossa kaikki mediasisällöt siirtyvät tekoälyjärjestelmien hallintaan."
        },
        {
          "id": "c",
          "text": "Alustariippuvuuden murtuminen tarkoittaa perinteisten sanomalehtien palautumista ainoiksi sisällönjakelijoiksi, kun taas alustoituminen edellyttää tekoälyteknologian poistumista median kulutuksesta."
        },
        {
          "id": "d",
          "text": "Alustoituminen voi vahvistaa suurten alustojen asemaa, kun taas tekoälyteknologian saatavuus voi mahdollistaa omien sovellusten rakentamisen ja vähentää riippuvuutta suurista teknologiayrityksistä."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "58",
        "section": "Keskeiset toimijat"
      },
      "explanation": "D on oikein. Tekoäly voi sekä vahvistaa alustojen keskittymistä että mahdollistaa vaihtoehtoisia, itsenäisempiä teknologisia ratkaisuja.\nA on väärin. Se vaihtaa alustoitumisen ja alustariippuvuuden murtumisen merkitykset keskenään.\nB on väärin. Käsitteet kuvaavat mahdollisia vastakkaisia kehityssuuntia.\nC on väärin. Alustariippuvuuden murtuminen ei tarkoita paluuta internetiä edeltäneeseen mediajärjestelmään.\n\nLähde:\nS. 58, \"Keskeiset toimijat\".\nRatkaiseva lainaus: \"mikä vähentää riippuvuutta suurten teknologiayritysten alustoista\".",
      "learningPoint": "Opiskelijan tulee erottaa kaksi mahdollista vastakkaista kehityssuuntaa. Tekoälyn käyttöönotto ei välttämättä johda vain alustavallan keskittymiseen.\nHakuvinkki: Ctrl+F: deplatformisation ja platformisation."
    },
    {
      "id": "g-m13-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä journalismin yleisösuhteen ja portinvartijuuden muutoksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Digitaalisen median aikakaudella yleisöstä tuli sekä aktiivinen osallistuja että datan lähde, ja alustojen algoritmit alkoivat vaikuttaa sisältöjen näkyvyyteen."
        },
        {
          "id": "b",
          "text": "Tekoälyajan vastavuorovaikutuksessa sisällöntuottajat voivat muokata yleisöjen käyttäytymistä ilman, että yleisöt voivat vaikuttaa sisältöihin."
        },
        {
          "id": "c",
          "text": "Limittyneessä portinvartijuudessa sisällön valintaan, muokkaamiseen ja esittämiseen voivat vaikuttaa journalistit, alustat, tekoälyjärjestelmät ja yleisöt."
        },
        {
          "id": "d",
          "text": "Tekoälyajan portinvartijuudessa yleisöjen vaikutusmahdollisuudet vähenevät, koska sisällön valinta siirtyy kokonaan tekoälyjärjestelmille."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "58–59",
        "section": "Journalismin yleisösuhde"
      },
      "explanation": "A on oikein. Digitaaliset alustat mahdollistivat yleisöjen osallistumisen ja reaaliaikaisen yleisödatan hyödyntämisen sekä vaikuttivat algoritmien avulla sisältöjen näkyvyyteen.\nB on väärin. Vastavuorovaikutuksessa yleisöt voivat muokata ja hyödyntää mediasisältöjä niiden tuottajien tarkoitusperistä poikkeavilla tavoilla. Väittämä liittää toiminnan väärään toimijaan.\nC on oikein. Limittynyt portinvartijuus tarkoittaa useiden toimijoiden osallistumista sisältöjen valintaan, muokkaamiseen ja välittämiseen.\nD on väärin. Artikkelissa todetaan myös yleisöjen vaikutusmahdollisuuksien kasvavan, eikä portinvartijuus siirry yksinomaan tekoälyjärjestelmille.\n\nLähde:\nS. 58–59, \"Journalismin yleisösuhde\" ja \"Portinvartijuus ja agendavalta\".\nRatkaiseva lainaus, s. 59: \"valta jakautuu sisällön tuottajien, alustojen, tekoälyjärjestelmien ja yleisöjen välillä\".",
      "learningPoint": "Opiskelijan tulee erottaa journalistien, alustojen, tekoälyjärjestelmien ja yleisöjen roolit. Erityisesti tulee tarkistaa, kenelle mahdollisuus muokata mediasisältöjä kuuluu ja miten portinvartijuus jakautuu eri toimijoiden kesken.\nHakuvinkki: Ctrl+F: vastavuorovaikutukseksi ja limittyneessä portinvartijuudessa."
    },
    {
      "id": "g-m13-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nTekoälyajan hyperpersonoinnissa sekä sisällön valinta että sen esitystapa ja kehystys voivat mukautua yksittäiselle käyttäjälle. Tämä voi heikentää yhteistä tiedollista pohjaa, vaikka personointi samalla tekisi sisällöstä käyttäjän kannalta kiinnostavampaa tai helpommin lähestyttävää.",
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "57 ja 60",
        "section": "Median kulutus"
      },
      "explanation": "Hyperpersonointi voi mukauttaa sekä sisältöä että sen esitystä. Artikkelissa tunnistetaan kuitenkin riski, että yhteiskunnallisesti merkittävä informaatio tavoittaa osan yleisöstä aiempaa heikommin ja yhteinen tietopohja rapautuu.\n\nLähde:\nS. 57 ja 60, \"Median kulutus\" sekä \"Informaatio-ongelmat, etiikka ja sääntely\".\nRatkaiseva lainaus, s. 60: \"sisällön lisäksi myös sen esitystapa ja kehystys muovautuvat täysin yksittäisen käyttäjän mukaan\".",
      "learningPoint": "Opiskelijan tulee yhdistää personoinnin toimintaperiaate sen mahdollisiin seurauksiin. Yksilöllisesti sopiva sisältö ei välttämättä vahvista yhteiskunnallisesti yhteistä informaatiopohjaa.\nHakuvinkki: Ctrl+F: hyperpersonoinniksi ja jaettu tietopohja."
    },
    {
      "id": "g-m13-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein tekoälyajan mediatalouden käsitteet ja niiden merkitykset?",
      "options": [
        {
          "id": "a",
          "text": "Prefiguraatio tarkoittaa valmiiden mediatuotteiden muuttumista pysyviksi ja muuttumattomiksi, kun taas dereifikaatio tarkoittaa yleisön osallistumista sisältöjen tuottamiseen."
        },
        {
          "id": "b",
          "text": "Dereifikaatio tarkoittaa sisällön pysyvän tuotemuodon hajoamista, kun taas prefiguraatiossa journalistinen työ voi painottua tekoälyn myöhemmin hyödyntämien sisältöjen esiasteiden tuottamiseen."
        },
        {
          "id": "c",
          "text": "Prodifikaatio tarkoittaa sisällön esiasteiden valmistamista ilman yleisön osallistumista, kun taas prefiguraatio tarkoittaa algoritmien siirtymistä journalistisen portinvartijuuden tilalle."
        },
        {
          "id": "d",
          "text": "Dereifikaatio tarkoittaa mediatalouden siirtymistä huomiotaloudesta takaisin tilauspohjaiseen massamediaan, kun taas prefiguraatio tarkoittaa alustatalouden vahvistumista."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "59–60",
        "section": "Mediatalous"
      },
      "explanation": "B on oikein. Dereifikaatiossa mediasisältö ei välttämättä säily selkeärajaisena tuotteena. Prefiguraatiossa puolestaan tuotetaan sisällön esiasteita, joita tekoäly voi hyödyntää lopullisten sisältöjen muodostamisessa.\nA on väärin. Dereifikaatio ei tarkoita tuottajakäyttäjyyttä, eikä prefiguraatio tarkoita pysyvien tuotteiden valmistamista.\nC on väärin. Prodifikaatio koskee tuotannon, muokkauksen ja jakelun sulautumista, eikä prefiguraatio tarkoita portinvartijuuden siirtymistä.\nD on väärin. Kumpikaan käsite ei tarkoita paluuta internetiä edeltävään mediatalouteen.\n\nLähde:\nS. 59–60, \"Mediatalous\".\nRatkaiseva lainaus, s. 59: \"sisällön pysyvän muodon hajoamisena (dereification)\".",
      "learningPoint": "Opiskelijan tulee yhdistää artikkelissa esitellyt uudet käsitteet oikeisiin muutoksiin. Samassa asiayhteydessä esiintyvät käsitteet eivät ole keskenään vaihdettavissa.\nHakuvinkki: Ctrl+F: dereification ja prefiguration."
    },
    {
      "id": "g-m13-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Tosi vai epätosi?\nNewsComics-design-fiktio osoitti tutkimuksessa, että uutisten muuttaminen tekoälyn avulla sarjakuviksi poistaa faktan ja fiktion välisen rajan hämärtymisen riskin. Lisäksi tekoälyn tuottamien kuvien todettiin olevan riippumattomia koulutusaineiston stereotypioista.",
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
        "b"
      ],
      "source": {
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "61"
      },
      "explanation": "Väittämä kääntää design-fiktion herättämät huolet päinvastaisiksi. NewsComics synnytti keskustelua siitä, miten uutisten esittäminen sarjakuvina voi hämärtää faktapohjaisen sisällön ja fiktiivisten elementtien rajaa.\nLisäksi tekoälyn tuottama sheriffihahmo oli mies, mikä havainnollisti mahdollisia stereotyyppisiä esitystapoja. Fiktio ei siis osoittanut riskien poistuneen.\n\nLähde:\nS. 61, kuva 3, NewsComics, sekä s. 60, \"Informaatio-ongelmat, etiikka ja sääntely\".\nRatkaiseva lainaus kuvan 3 kuvatekstistä, s. 61: \"journalismin fiktionalisoitumisesta sekä toisaalta tekoälyn tuottaman sisällön sisältämistä stereotypioista\".",
      "learningPoint": "Opiskelijan tulee erottaa design-fiktion havainnollistama mahdollisuus sen herättämistä riskeistä. Fiktiossa esitettyä teknologiaa ei saa tulkita osoitukseksi siitä, että sen mahdolliset ongelmat olisi ratkaistu.\nHakuvinkki: Ctrl+F: NewsComics ja stereotypioista. Tarkista erityisesti sivun 61 kuva 3."
    },
    {
      "id": "g-m13-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kolmen tutkimuksen aineistoja ja toteutusta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kahdessa ensimmäisessä tutkimuksessa oli mukana 17 tekoälykehitystä seurannutta tutkijaa, ja kolmannessa tutkimuksessa haastateltiin yhdeksää media-alan ammattilaista."
        },
        {
          "id": "b",
          "text": "Kolmannessa tutkimuksessa haastateltiin 17 media-alan ammattilaista, kun taas kahdessa ensimmäisessä tutkimuksessa osallistujina oli yhdeksän tekoälykehitystä seurannutta tutkijaa."
        },
        {
          "id": "c",
          "text": "Kahdessa ensimmäisessä tutkimuksessa hyödynnettiin työpajoja ja design-fiktioita, kun taas kolmannessa tutkimuksessa aiemmin laadittuja fiktioita käytettiin haastattelujen virikkeinä."
        },
        {
          "id": "d",
          "text": "Kolmannessa tutkimuksessa tuotettiin kaikki design-fiktiot ensimmäistä kertaa, minkä jälkeen niitä käytettiin kahden ensimmäisen tutkimuksen työpajoissa."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "54 ja 61–62",
        "section": "Media- ja informaatioympäristön muutos"
      },
      "explanation": "A on oikein. Kahdessa ensimmäisessä tutkimuksessa osallistujia oli 17 ja kolmannen tutkimuksen haastatteluissa yhdeksän.\nB on väärin. Osallistujamäärät ja kohderyhmät on vaihdettu keskenään.\nC on oikein. Ensimmäisissä tutkimuksissa design-fiktioita rakennettiin ja käytettiin keskustelujen tukena. Kolmannessa tutkimuksessa niitä hyödynnettiin uudelleen media-alan ammattilaisten haastatteluissa.\nD on väärin. Design-fiktiot laadittiin aiemmissa tutkimusvaiheissa, eikä kolmas tutkimus edeltänyt niitä.\n\nLähde:\nS. 54 ja 61–62, \"Media- ja informaatioympäristön muutos\" sekä \"Journalismin tulevaisuuskuvat\".\nRatkaisevat lainaukset: s. 54 \"17 tekoälykehitystä seurannutta tutkijaa\" ja s. 61 \"Yhdeksän eri taustoista ja asemista tulevan media-alan ammattilaisen\".",
      "learningPoint": "Opiskelijan tulee yhdistää osallistujamäärät oikeisiin tutkimusvaiheisiin ja tarkistaa design-fiktioiden käyttöjärjestys. Pelkkä lukujen paikantaminen ei riitä.\nHakuvinkki: Ctrl+F: 17 tekoälykehitystä ja Yhdeksän eri taustoista."
    },
    {
      "id": "g-m13-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin taulukossa 2 esitettyä yleisön tarpeiden ja tekoälyn kykyjen luokittelua?",
      "options": [
        {
          "id": "a",
          "text": "Nopeus ja merkitysten hahmottaminen sijoitetaan pysyviin yleisön tarpeisiin, joiden arvioidaan olevan generatiivisen tekoälyn kykyjen piirissä."
        },
        {
          "id": "b",
          "text": "Paikallinen informaatio sekä pääsy päättäjien ja instituutioiden pariin kuuluvat pysyviin tarpeisiin, joita tekoälyn ei katsota kykenevän täyttämään."
        },
        {
          "id": "c",
          "text": "Kasvava video- ja äänisisältöjen kysyntä kuuluu muuttuviin tarpeisiin, joihin generatiivisen tekoälyn arvioidaan kykenevän vastaamaan."
        },
        {
          "id": "d",
          "text": "Kasvava kysyntä varmennetulle informaatiolle kuuluu muuttuviin tarpeisiin, joiden katsotaan olevan generatiivisen tekoälyn kykyjen piirissä."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "62"
      },
      "explanation": "A on oikein. Nopeus ja merkitysten hahmottaminen on sijoitettu pysyviin tarpeisiin, jotka ovat tekoälyn kykyjen piirissä.\nB on oikein. Paikallinen informaatio ja pääsy päättäjien sekä instituutioiden pariin sijoitetaan pysyviin tarpeisiin, jotka ovat tekoälyn kykyjen ulkopuolella.\nC on oikein. Audiovisuaalisen sisällön kasvava kysyntä on muuttuva tarve, johon tekoälyn arvioidaan voivan vastata.\nD on väärin. Varmennetun informaation kasvava kysyntä sijoitetaan tekoälyn kykyjen ulkopuolelle.\n\nLähde:\nS. 62, taulukko 2 \"Journalismin tulevaisuutta muovaavat yleisön tarpeet ja tekoälyn kyvyt\".\nRatkaiseva taulukkokohta: \"Kasvava kysyntä varmennetulle informaatiolle\" sijoitetaan tekoälyn kykyjen ulkopuolelle.",
      "learningPoint": "Opiskelijan tulee tarkistaa taulukosta sekä tarpeen pysyvyys tai muuttuvuus että sen sijoittuminen tekoälyn kykyjen piiriin tai ulkopuolelle. Yhden luokittelutiedon tunnistaminen ei riitä.\nHakuvinkki: Ctrl+F: Taulukko 2 ja varmennetulle informaatiolle."
    },
    {
      "id": "g-m13-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Oikein vai väärin?\nTaulukossa 2 tarkkuus esiintyy sekä tekoälyn kykyjen piirissä että niiden ulkopuolella. Tämä vastaa haastattelutuloksia, joissa tekoälyn mahdollisuuksista tuottaa tulevaisuudessa tarkkaa ja luotettavaa informaatiota esitettiin toisistaan poikkeavia näkemyksiä.",
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "62"
      },
      "explanation": "Taulukossa tarkkuus on sijoitettu molempiin luokkiin. Tämä ei ole ristiriita, vaan kuvastaa osallistujien erimielisyyttä tekoälyn tulevista kyvyistä.\n\nLähde:\nS. 62, taulukko 2 ja sitä edeltävä kappale.\nRatkaiseva lainaus: \"Osallistujien näkökannat kuitenkin erkanivat sen suhteen, kuinka tarkkaa ja luotettavaa tekoälyn tuottama informaatio voi tulevaisuudessa olla.\"",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin tutkimuksessa ei ole saavutettu yksiselitteistä arviota. Erimielistä tutkimushavaintoa ei saa muuttaa väitteeksi tekoälyn varmasti riittävästä tai riittämättömästä tarkkuudesta.\nHakuvinkki: Ctrl+F: näkökannat kuitenkin erkanivat ja Tarkkuus."
    },
    {
      "id": "g-m13-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein Forms-design-fiktion mahdolliset hyödyt ja haitat?",
      "options": [
        {
          "id": "a",
          "text": "Forms yhdistää useiden käyttäjien mieltymyksiä samaan uutislähetykseen ja vähentää näin käyttäjäkohtaisen datankeruun tarvetta."
        },
        {
          "id": "b",
          "text": "Forms tuottaa uutisten pohjalta personoituja sarjakuvia, joiden keskeiseksi hyödyksi nähtiin stereotypioiden poistuminen."
        },
        {
          "id": "c",
          "text": "Forms muuttaa uutissisältöjä käyttäjän valitsemiin formaatteihin ja pituuksiin, minkä arvioitiin voivan parantaa informaation saavutettavuutta mutta samalla heikentää uutisten kykyä rakentaa yleisölle yhteistä ymmärrystä maailmasta."
        },
        {
          "id": "d",
          "text": "Forms suodattaa uutisia yksinomaan myönteiseen sävyyn, jolloin käyttäjä voi välttää ahdistavat uutiset menettämättä yhteyttä ajankohtaisiin tapahtumiin."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "63"
      },
      "explanation": "C on oikein. Forms mahdollistaa sisältöjen muuttamisen esimerkiksi erilaisiin audiovisuaalisiin formaatteihin ja pituuksiin käyttäjän valintojen perusteella. Osallistujien arvion mukaan tämä voisi helpottaa ajankäyttöä ja parantaa saavutettavuutta, mutta samalla heikentää yhteisen ymmärryksen muodostumista. Kyse on mahdollisista vaikutuksista, ei tutkimuksessa osoitetuista varmoista seurauksista.\nA on väärin. Useiden käyttäjien mieltymysten yhdistäminen liittyy Together-fiktioon. Lisäksi Togetherin arvioitiin edellyttävän huomattavasti nykyistä kattavampaa datankeruuta.\nB on väärin. Personoidut uutisarjakuvat liittyvät NewsComics-fiktioon, joka herätti huolia stereotypioista.\nD on väärin. Myönteiseen sävyyn suodattava tekoälyavustaja on Zenith.\n\nLähde:\nS. 63, kuva 4, Forms, ja \"Journalismin tulevaisuuskuvat\" -otsikkoa edeltävä tarkastelu.\nRatkaiseva lainaus kuvatekstistä: \"parantavan informaation saavutettavuutta, mutta samalla heikentävän uutisten kykyä rakentaa yleisölle yhteistä ymmärrystä maailmasta\".",
      "learningPoint": "Opiskelijan tulee yhdistää design-fiktiot niiden oikeisiin toimintoihin ja tutkimuksessa arvioituihin mahdollisiin vaikutuksiin. Samankaltaiset tekoälysovellukset voivat havainnollistaa eri ilmiöitä.\nHakuvinkki: Ctrl+F: Forms, Together ja Zenith."
    },
    {
      "id": "g-m13-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä journalismin vaihtoehtoisia tulevaisuuskuvia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Journalismin marginalisoitumisessa tekoälyjärjestelmät kykenevät vastaamaan yleisöjen informaatiotarpeisiin tehokkaasti, mikä heikentää perinteisen journalismin yleisösuhdetta ja yhteiskunnallista asemaa."
        },
        {
          "id": "b",
          "text": "Journalismi inhimillisenä toimintana -tulevaisuuskuvassa journalismin tärkein kilpailuetu perustuu tekoälyn kykyyn tuottaa varmennettua informaatiota ilman ihmisen osallistumista."
        },
        {
          "id": "c",
          "text": "Journalismi informaation lähteenä -tulevaisuuskuvassa korostuvat uuden ja paikallisen tiedon hankkiminen, pääsy lähteille sekä informaation tarkistaminen ja tulkinta."
        },
        {
          "id": "d",
          "text": "Journalismin vahvistumisessa mediaorganisaatiot luopuvat tekoälyn hyödyntämisestä, koska teknologian käyttö olisi ristiriidassa journalistisen luottamuksen kanssa."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "64–66",
        "section": "Journalismin marginalisoituminen"
      },
      "explanation": "A on oikein. Marginalisoitumisessa tekoälypohjaiset palvelut voivat korvata perinteistä toimitusvetoista uutisvirtaa ja heikentää journalismin asemaa.\nB on väärin. Inhimillisen journalismin tulevaisuuskuvassa korostuvat luottamus, autenttisuus ja ihmisten väliset suhteet, joita tekoäly ei täysin korvaa.\nC on oikein. Journalismin asema informaation lähteenä perustuu erityisesti uuden ja varmennetun tiedon tuottamiseen sekä lähteiden tavoittamiseen.\nD on väärin. Journalismin vahvistumisen tulevaisuuskuvassa tekoälyn hyödyntäminen toimituksellisessa työssä on yksi keskeisistä mahdollisuuksista.\n\nLähde:\nS. 64–66, \"Journalismin marginalisoituminen\", \"Journalismi inhimillisenä toimintana\", \"Journalismi informaation lähteenä\" ja \"Journalismin vahvistuminen\".\nRatkaiseva lainaus, s. 65: \"Uuden tai paikallisen informaation ja tiedon tuottaminen, vallankäytön valvonta sekä informaation tarkistaminen ja varmentaminen\".",
      "learningPoint": "Opiskelijan tulee erottaa neljä tulevaisuuskuvaa niiden taustalla olevien mekanismien perusteella. Oikea ominaisuus voi muuttua vääräksi, jos se liitetään toiseen tulevaisuuskuvaan.\nHakuvinkki: Ctrl+F: Journalismin marginalisoituminen, Journalismi informaation lähteenä ja Journalismin vahvistuminen."
    },
    {
      "id": "g-m13-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Tosi vai epätosi?\nJournalismi inhimillisenä toimintana -tulevaisuuskuvassa inhimillinen vuorovaikutus, aitous ja luottamus voivat säilyttää journalismin merkityksen. Tämä ei kuitenkaan välttämättä tarkoita suurten yleisöjen säilymistä, sillä vastaava strateginen valinta voi johtaa pienemmille yleisöille suunnattuun artesaanituotantoon.",
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "65 ja 67",
        "section": "Journalismi inhimillisenä toimintana"
      },
      "explanation": "Inhimillisen journalismin strategia voi vahvistaa henkilökohtaiseen luottamukseen ja autenttisuuteen perustuvaa yleisösuhdetta. Samalla se voi rajata journalismin yleisöpohjaa, jos sisältöjen arvo perustuu erityisesti pienempien yleisöjen arvostamiin kokemuksiin.\n\nLähde:\nS. 65 ja 67, \"Journalismi inhimillisenä toimintana\" ja \"Journalismin tulevaisuuden tienhaaroja\".\nRatkaiseva lainaus, s. 67: \"journalismi voi kuitenkin muuttua pienempien yleisöjen suosimaksi artesaanituotannoksi\".",
      "learningPoint": "Opiskelijan tulee erottaa journalismin merkityksen säilyminen sen yleisömäärän säilymisestä. Strategian onnistuminen yhdessä suhteessa ei välttämättä tarkoita menestystä kaikilla mittareilla.\nHakuvinkki: Ctrl+F: artesaanituotannoksi ja inhimilliseen yhteyteen."
    },
    {
      "id": "g-m13-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein journalismin tulevaisuuden tienhaaroissa esitetyt jakelustrategiat ja niiden mahdolliset seuraukset?",
      "options": [
        {
          "id": "a",
          "text": "Suurten teknologiayritysten alustoihin integroituminen vahvistaa toimituksellista autonomiaa, koska mediaorganisaatiot saavat itse määrittää alustojen näkyvyys- ja jakeluehdot."
        },
        {
          "id": "b",
          "text": "Omien jakeluratkaisujen kehittäminen takaa suuria teknologiayrityksiä laajemman yleisön, mutta samalla se lisää riippuvuutta ulkopuolisista algoritmeista."
        },
        {
          "id": "c",
          "text": "Suurten alustojen käyttäminen vähentää mediaorganisaatioiden riippuvuutta teknologiayrityksistä, kun taas omien kanavien kehittäminen siirtää kontrollin sisältöjen jakelusta alustoille."
        },
        {
          "id": "d",
          "text": "Suurten alustojen hyödyntäminen voi helpottaa yleisöjen tavoittamista mutta lisätä teknologiariippuvuutta, kun taas omat jakeluratkaisut voivat vahvistaa autonomiaa mutta rajoittaa tavoittavuutta."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "67–68",
        "section": "Journalismin tulevaisuuden tienhaaroja"
      },
      "explanation": "D on oikein. Suuret alustat tarjoavat valmiita jakelukanavia ja käyttäjämääriä, mutta samalla ne määrittävät näkyvyyden ehdot. Omien ratkaisujen kehittäminen voi lisätä itsenäisyyttä mutta vaikeuttaa suurten yleisöjen tavoittamista.\nA on väärin. Alustoihin integroituminen ei anna mediaorganisaatioille valtaa määrittää alustojen toimintaehtoja.\nB on väärin. Omien jakeluratkaisujen kehittäminen ei takaa laajempaa yleisöä eikä artikkelissa esitetä sen itsessään lisäävän riippuvuutta ulkopuolisista algoritmeista.\nC on väärin. Vaihtoehtojen vaikutukset riippuvuuteen ja kontrolliin on käännetty päinvastaisiksi.\n\nLähde:\nS. 67–68, \"Journalismin tulevaisuuden tienhaaroja\".\nRatkaiseva lainaus, s. 67: \"Jälkimmäinen vaihtoehto puolestaan vahvistaisi toimituksellista autonomiaa.\"",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi jakelustrategiaa niiden mahdollisiin hyötyihin ja haittoihin. Väärissä vaihtoehdoissa autonomian, teknologiariippuvuuden ja yleisöjen tavoittamisen kehityssuunnat esitetään artikkeliin nähden vastakkaisina.\nHakuvinkki: Ctrl+F: integroitua olemassa olevien alustojen ja toimituksellista autonomiaa."
    },
    {
      "id": "g-m13-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nJournalismin vahvistumisen tulevaisuuskuvassa tekoälyn tuottaman epäluotettavan sisällön lisääntyminen voi kasvattaa varmennetun journalismin kysyntää. Samalla tekoälyn hyödyntäminen toimituksellisissa prosesseissa voi parantaa journalismin tehokkuutta ja kykyä vastata erilaisiin yleisötarpeisiin.",
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "66–68",
        "section": "Journalismin vahvistuminen"
      },
      "explanation": "Tulevaisuuskuvassa tekoälyn epäluotettavuus voi lisätä ammattimaisen journalismin arvoa. Toisaalta journalismi voi itse hyödyntää tekoälyä esimerkiksi sisällön muokkaamiseen, jakeluun ja yleisöjen tarpeiden ymmärtämiseen.\nTekoälyn aiheuttama kilpailu ja sen tarjoamat mahdollisuudet eivät siis välttämättä sulje toisiaan pois.\n\nLähde:\nS. 66–68, \"Journalismin vahvistuminen\" ja \"Journalismin tulevaisuuden tienhaaroja\".\nRatkaiseva lainaus, s. 66: \"luotettavan informaation arvo kasvaa\".",
      "learningPoint": "Opiskelijan tulee yhdistää tekoälyn mahdolliset kielteiset vaikutukset journalismin kilpailuetuihin ja sen omaan teknologian hyödyntämiseen. Sama teknologinen kehitys voi aiheuttaa sekä uhkia että mahdollisuuksia.\nHakuvinkki: Ctrl+F: Luotettavan informaation kysynnän kasvu ja Tekoälyn hyödyntäminen journalismissa."
    },
    {
      "id": "g-m13-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä journalismin tulevaisuuskuvia ja niiden tutkimuksellisia rajauksia?",
      "options": [
        {
          "id": "a",
          "text": "Neljä tulevaisuuskuvaa perustuvat media-alan ammattilaisten näkemyksiin, ja ne kuvaavat vaihtoehtoisia kehityssuuntia eivätkä varmoja ennusteita."
        },
        {
          "id": "b",
          "text": "Journalismin marginalisoituminen voi liittyä tilanteeseen, jossa tekoälypalvelut vastaavat yleisöjen informaatiotarpeisiin aiempaa tehokkaammin ja heikentävät perinteisen median asemaa."
        },
        {
          "id": "c",
          "text": "Neljä tulevaisuuskuvaa osoittavat, että tekoälyn teknologinen kehitys määrää yksin journalismin tulevaisuuden riippumatta mediaorganisaatioiden valinnoista, sääntelystä tai yleisöjen tarpeista."
        },
        {
          "id": "d",
          "text": "Journalismin tulevaisuuteen voivat vaikuttaa tekoälyn kykyjen lisäksi institutionaaliset, taloudelliset ja sääntelyyn liittyvät tekijät."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "64 ja 67–68",
        "section": "Journalismin tulevaisuuskuvat"
      },
      "explanation": "A on oikein. Tulevaisuuskuvat perustuvat yhdeksän media-alan ammattilaisen haastatteluihin ja niitä käytetään mahdollisten tulevaisuuksien hahmottamiseen.\nB on oikein. Marginalisoitumisen tulevaisuuskuvassa tekoäly voi heikentää journalismin asemaa vastaamalla yleisöjen tarpeisiin perinteistä mediaa tehokkaammin.\nC on väärin. Artikkelissa korostetaan mediaorganisaatioiden strategisia valintoja sekä institutionaalisten, taloudellisten ja sääntelyyn liittyvien tekijöiden merkitystä.\nD on oikein. Tekoälyn kyvyt eivät ole ainoa journalismin tulevaisuutta muovaava tekijä.\n\nLähde:\nS. 64 ja 67–68, \"Journalismin tulevaisuuskuvat\" sekä \"Journalismin tulevaisuuden tienhaaroja\".\nRatkaiseva lainaus, s. 64: \"Tulevaisuuskuvat eivät ole ennusteita vaan erilaisia mahdollisia kehityssuuntia.\"",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin useista mahdollisista vaikuttavista tekijöistä tehdään yksi ehdoton selitys. Erityisesti on tarkistettava, esitetäänkö tulevaisuuskuvat ennusteina vai vaihtoehtoisina mahdollisuuksina.\nHakuvinkki: Ctrl+F: eivät ole ennusteita ja institutionaalisten."
    },
    {
      "id": "g-m13-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Rydenfeltin, Kiskolan ja Olssonin katsauksen tulosten ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Generatiivinen tekoäly voi vahvistaa suurten teknologiayhtiöiden valtaa, mutta sama teknologinen kehitys voi myös mahdollistaa yleisöjen ja pienempien mediatoimijoiden itsenäisemmän sisällöntuotannon ja jakelun."
        },
        {
          "id": "b",
          "text": "Koska tekoäly voi personoida mediasisältöjä, sen käyttöönotto johtaa väistämättä journalistisen median katoamiseen ja kaikkien yleisöjen siirtymiseen tekoälyalustoille."
        },
        {
          "id": "c",
          "text": "Mediaorganisaatioiden strategiset valinnat voivat vaikuttaa siihen, marginalisoituuko journalismi vai kykeneekö se säilyttämään tai vahvistamaan asemaansa esimerkiksi luottamuksen, alkuperäisraportoinnin tai tekoälyn hyödyntämisen avulla."
        },
        {
          "id": "d",
          "text": "Koska tutkimuksessa hahmoteltiin neljä tulevaisuuskuvaa, niiden perusteella voidaan päätellä, mikä niistä toteutuu todennäköisimmin ja minä vuonna muutos tapahtuu."
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
        "articleId": "media-generatiivisen-tekoalyn-ajassa",
        "page": "67–69",
        "section": "Journalismin tulevaisuuden tienhaaroja"
      },
      "explanation": "A on oikein. Katsauksessa tunnistetaan kaksi mahdollista kehityssuuntaa: teknologiayhtiöiden vallan vahvistuminen ja toisaalta yleisöjen sekä muiden toimijoiden kasvavat mahdollisuudet tuottaa, muokata ja jakaa sisältöjä itsenäisesti.\nB on väärin. Tutkijat eivät esitä journalismin katoamista väistämättömänä. He tarkastelevat myös tulevaisuuksia, joissa journalismi säilyy tai vahvistuu.\nC on oikein. Artikkelissa eritellään strategisia tienhaaroja, joissa mediaorganisaatiot voivat painottaa esimerkiksi inhimillistä vuorovaikutusta, uuden informaation tuottamista tai tekoälyn laajaa hyödyntämistä.\nD on väärin. Tulevaisuuskuvat eivät ole todennäköisyysennusteita, eikä tutkimuksessa määritellä niiden toteutumisvuosia.\n\nLähde:\nS. 67–69, \"Journalismin tulevaisuuden tienhaaroja\" ja \"Lopuksi\".\nRatkaiseva lainaus, s. 69: \"Tekoälymurros voi demokratisoida mediasisältöjen tuotantoa, jakelua ja muokkaamista\".",
      "learningPoint": "Opiskelijan tulee erottaa mahdolliset kehityskulut väistämättömistä seurauksista. Lisäksi tulee huomata, että sama teknologinen murros voi johtaa keskenään vastakkaisiin lopputuloksiin riippuen toimijoiden valinnoista ja toimintaympäristöstä.\nHakuvinkki: Ctrl+F: vastakkaisista kehityskuluista, tienhaaroja ja demokratisoida."
    }
  ]
} satisfies ValintakoeGExercise;
