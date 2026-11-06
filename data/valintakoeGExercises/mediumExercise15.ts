import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 15: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise15Base = {
  "id": "keskivaikea-harjoitus-15",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 15 – Kansalaisuus demokratian episteemisessä infrastruktuurissa – kompleksisuusteoreettinen tulkinta",
  "description": "35 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 35,
  "difficulty": "medium",
  "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
  "articleTitle": "Kansalaisuus demokratian episteemisessä infrastruktuurissa – kompleksisuusteoreettinen tulkinta",
  "articleUrl": "https://journal.fi/politiikka/article/view/176163",
  "questions": [
    {
      "id": "g-m15-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein artikkelin tutkimuksellista lähestymistapaa ja sen rajauksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Artikkeli on käsitteellinen tutkimus, jossa demokratian episteeminen infrastruktuuri on kohdeilmiö ja kompleksisuusteoria toimii sen tarkastelun analyyttisena välineenä."
        },
        {
          "id": "b",
          "text": "Artikkelin esimerkit muodostavat empiirisen aineiston, jonka perusteella neljän mekanismin vaikutukset on tilastollisesti osoitettu."
        },
        {
          "id": "c",
          "text": "Artikkelissa tarkastellaan erityisesti kansalaisten osallistumisen, vuorovaikutuksen ja tiedollisen valikoitumisen mekanismeja, mutta niiden ymmärtäminen edellyttää myös institutionaalisten ja teknologisten rakenteiden huomioimista."
        },
        {
          "id": "d",
          "text": "Artikkelin tavoitteena on osoittaa, että kansalaisten poliittinen tietämys yksin määrää demokratian episteemisen infrastruktuurin vahvuuden."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "102–103"
      },
      "explanation": "A on oikein. Kompleksisuusteoria on artikkelin metoditeoria, jonka avulla demokratian episteemistä infrastruktuuria jäsennetään.\nB on väärin. Esimerkkien tarkoituksena on havainnollistaa käsitteellistä tulkintaa, ei todistaa mekanismien vaikutuksia empiirisesti.\nC on oikein. Kansalaisten osallistuminen on tarkastelun painopiste, mutta sitä ei eroteta ympäröivistä institutionaalisista ja teknologisista rakenteista.\nD on väärin. Artikkelissa nimenomaan kyseenalaistetaan demokratian tiedollisen perustan palauttaminen yksittäisten kansalaisten tietämykseen.\n\nLähde:\nS. 102–103, johdanto. Ratkaiseva lainaus, s. 103: ”Artikkelissa hyödynnettävät esimerkit eivät ole empiiristä todistusaineistoa”.",
      "learningPoint": "Opiskelijan tulee erottaa käsitteellisen tutkimuksen tavoitteet empiirisestä tutkimuksesta sekä tunnistaa, mitä tutkimuksessa rajataan tarkastelun kohteeksi.\nHakuvinkki: Ctrl+F: metoditeoriana ja empiiristä todistusaineistoa."
    },
    {
      "id": "g-m15-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nCondorcet’n valamiehistöteoreeman mukaan enemmistöpäätöksen todennäköisyys olla oikea kasvaa äänestäjien määrän lisääntyessä, jos yksittäisen äänestäjän todennäköisyys olla oikeassa ylittää sattuman ja äänestäjät tekevät päätöksensä toisistaan riippumatta. Artikkelissa kuitenkin kyseenalaistetaan näiden oletusten soveltuvuus todelliseen poliittiseen päätöksentekoon.",
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "103–104",
        "section": "Tietäminen ja tietämättömyys demokratiassa"
      },
      "explanation": "Teoreeman johtopäätös edellyttää sekä sattumaa parempaa yksilöllistä osumatodennäköisyyttä että päätösten riippumattomuutta. Artikkelissa todetaan, että poliittiset kysymykset sisältävät usein ristiriitaisia arvoja ja että kansalaisten mielipiteet rakentuvat vuorovaikutuksessa.\n\nLähde:\nS. 103–104, ”Tietäminen ja tietämättömyys demokratiassa”. Ratkaiseva lainaus, s. 103: ”jos jokaisella äänestäjällä on parempi kuin sattumanvarainen todennäköisyys olla oikeassa (p > 0.5)”.",
      "learningPoint": "Opiskelijan tulee tunnistaa teoreeman johtopäätöksen toteutumisen ehdot ja verrata niitä artikkelissa esitettyyn kritiikkiin.\nHakuvinkki: Ctrl+F: Condorcet ja riippumattomuudesta."
    },
    {
      "id": "g-m15-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein artikkelin erottelua tietämättömyyden ja strategisesti tuotetun tietämättömyyden välillä?",
      "options": [
        {
          "id": "a",
          "text": "Tietämättömyys johtuu aina kansalaisten haluttomuudesta hankkia tietoa, kun taas strateginen tietämättömyys syntyy yhteiskunnan monimutkaisuudesta ilman tietoista toimintaa."
        },
        {
          "id": "b",
          "text": "Tietämättömyys voi syntyä yhteiskunnallisten keskinäisriippuvuuksien ylittäessä kansalaisen tiedollisen kapasiteetin, kun taas strategisesti tuotetussa tietämättömyydessä joku ylläpitää tietämättömyyttä siitä hyötyäkseen."
        },
        {
          "id": "c",
          "text": "Tietämättömyys tarkoittaa artikkelissa yksinomaan valheelliseen tietoon uskomista, kun taas strateginen tietämättömyys tarkoittaa asiantuntijoiden kykyä käsitellä epävarmuutta."
        },
        {
          "id": "d",
          "text": "Strategisesti tuotettu tietämättömyys on demokratian kannalta neutraalia, mutta yhteiskunnan monimutkaisuudesta syntyvä tietämättömyys oikeuttaa asiantuntijavallan."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "104",
        "section": "Tietäminen ja tietämättömyys demokratiassa"
      },
      "explanation": "B on oikein. Artikkelissa erotetaan monimutkaisen yhteiskunnan ominaispiirteenä syntyvä tietämättömyys tietoisesti tuotetusta tietämättömyydestä.\nA on väärin. Se vaihtaa ilmiöiden syntymekanismit keskenään.\nC on väärin. Tietämättömyys ei tarkoita pelkästään virheellisiä uskomuksia.\nD on väärin. Artikkelissa ei pidetä tietämättömyyttä asiantuntijavallan oikeutuksena, ja strateginen tietämättömyys voi vahingoittaa demokratian tiedollista perustaa.\n\nLähde:\nS. 104, ”Tietäminen ja tietämättömyys demokratiassa”. Ratkaiseva lainaus: ”Tietämättömyyttä tuotetaan ja ylläpidetään, koska joku hyötyy siitä”.",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi tietämättömyyden muotoa niiden oikeisiin syntymekanismeihin ja yhteiskunnallisiin seurauksiin.\nHakuvinkki: Ctrl+F: strategisesta tuottamisesta ja kognitiivisen kapasiteetin."
    },
    {
      "id": "g-m15-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nKompleksisuusteoreettisesti ymmärretty emergenssi tarkoittaa, ettei demokratian episteemistä infrastruktuuria voida selittää pelkästään sen yksittäisten osien ominaisuuksilla. Kokonaisuudella voi olla kausaalista voimaa, joka ohjaa ja rajoittaa yksittäisten toimijoiden toimintaa, mutta ei täysin määrää sitä, sillä toimijat voivat myös pyrkiä muuttamaan kohtaamiaan rakenteellisia ehtoja.",
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "103 ja 106"
      },
      "explanation": "Emergenssissä kokonaisuuden ominaisuudet syntyvät osien vuorovaikutuksesta. Nämä ominaisuudet voivat puolestaan ohjata ja rajoittaa yksittäisiä toimijoita, mutta toimijoilla säilyy mahdollisuus tulkita ja muuttaa kohtaamiaan rakenteellisia ehtoja.\n\nLähde:\nS. 103 ja 106, emergenssiä käsittelevät osuudet. Ratkaiseva lainaus, s. 103: ”Ilmaantuvat rakenteet rajoittavat, mutta eivät määrää toimintaa”.",
      "learningPoint": "Opiskelijan tulee erottaa rakenteiden vaikutus toiminnan täydellisestä määräytymisestä. Kausaalinen voima ei tarkoita, että yksittäisillä toimijoilla ei olisi lainkaan vaikutusmahdollisuuksia.\nHakuvinkki: Ctrl+F: rajoittavat, mutta eivät määrää ja kausaalinen voima."
    },
    {
      "id": "g-m15-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta episteemisestä toimijuudesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Episteeminen toimijuus edellyttää kansalaiselta kaikkien poliittisesti merkityksellisten tosiasioiden hallintaa ennen yhteiskunnalliseen keskusteluun osallistumista."
        },
        {
          "id": "b",
          "text": "Episteeminen toimijuus sisältää sekä perusteltujen uskomusten muodostamisen että vastuun niiden poliittisista seurauksista."
        },
        {
          "id": "c",
          "text": "Reflektiivinen toimijuus voi ilmetä esimerkiksi tietolähteiden luotettavuuden tarkistamisena ja omien ennakkoluulojen tunnistamisena."
        },
        {
          "id": "d",
          "text": "Episteeminen toimijuus toteutuu parhaiten silloin, kun kansalainen ulkoistaa kokonaan tiedollisen harkintansa asiantuntijoille ja instituutioille."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b",
        "c"
      ],
      "source": {
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "107–108",
        "section": "Episteeminen toimijuus tiedollisen epävarmuuden oloissa"
      },
      "explanation": "B on oikein. Toimijuuteen kuuluu sekä kyky muodostaa perusteltuja uskomuksia että vastuu niiden yhteiskunnallisista vaikutuksista.\nC on oikein. Lähdekritiikki ja omien ennakkokäsitysten arviointi ovat artikkelissa mainittuja esimerkkejä reflektiivisestä toimijuudesta.\nA on väärin. Episteeminen toimijuus ei edellytä täydellistä tietoa.\nD on väärin. Kansalainen ei voi kokonaan siirtää vastuutaan asiantuntijoille.\n\nLähde:\nS. 107–108, ”Episteeminen toimijuus tiedollisen epävarmuuden oloissa”. Ratkaiseva lainaus, s. 108: ”Episteeminen toimijuus sisältää siis kaksi toisiaan täydentävää ulottuvuutta”.",
      "learningPoint": "Opiskelijan tulee yhdistää episteemisen toimijuuden määritelmä sen käytännön ilmenemismuotoihin ja erottaa vastuun kantaminen täydellisen tiedon vaatimuksesta.\nHakuvinkki: Ctrl+F: kaksi toisiaan täydentävää ulottuvuutta ja ennakkoluuloja."
    },
    {
      "id": "g-m15-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein luottamuksen ja itseorganisoitumisen merkityksen demokratian episteemiselle infrastruktuurille?",
      "options": [
        {
          "id": "a",
          "text": "Luottamus syntyy vasta sen jälkeen, kun kaikki yhteiskunnalliset tietoväitteet on todistettu oikeiksi, ja itseorganisoituminen takaa demokraattisen kehityksen."
        },
        {
          "id": "b",
          "text": "Itseorganisoituminen edellyttää aina ulkopuolista ohjausta, kun taas luottamus on artikkelin mukaan riippumaton toimijoiden välisistä suhteista."
        },
        {
          "id": "c",
          "text": "Luottamus voi mahdollistaa yhteisen tiedonmuodostuksen, mutta virheellisen tiedon varaan rakentuva itseorganisoituminen voi myös syventää episteemisiä kuiluja ja polarisaatiota."
        },
        {
          "id": "d",
          "text": "Luottamuksen heikkeneminen vahvistaa automaattisesti kollektiivista episteemistä toimijuutta, koska se vähentää yhteisiin normeihin sitoutumista."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "109",
        "section": "Luottamus episteemisen infrastruktuurin relationaalisena perustana"
      },
      "explanation": "C on oikein. Luottamus mahdollistaa yhteisen tiedonmuodostuksen, mutta itseorganisoituminen voi johtaa myös demokratian kannalta kielteisiin seurauksiin.\nA on väärin. Luottamus toimii vuorovaikutuksen edellytyksenä, eikä itseorganisoituminen takaa myönteistä kehitystä.\nB on väärin. Itseorganisoituminen tarkoittaa tiedonmuodostusta ilman ulkopuolista ohjausta, ja luottamus rakentuu suhteissa.\nD on väärin. Luottamuksen rapautuminen voi heikentää episteemistä toimijuutta.\n\nLähde:\nS. 109, ”Luottamus episteemisen infrastruktuurin relationaalisena perustana”. Ratkaiseva lainaus: ”Itseorganisoituminen ei itsessään takaa demokraattista kehitystä”.",
      "learningPoint": "Opiskelijan tulee erottaa itseorganisoitumisen mahdollisuudet sen automaattisesta hyödyllisyydestä. Sama mekanismi voi erilaisissa olosuhteissa vahvistaa tai heikentää demokratiaa.\nHakuvinkki: Ctrl+F: Itseorganisoituminen ei itsessään ja Luottamus on."
    },
    {
      "id": "g-m15-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein artikkelissa esitettyjä Condorcet’n valamiehistöteoreeman rajoituksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Teoreemaa on kritisoitu siitä, että poliittisiin ja moraalisiin kysymyksiin ei aina ole olemassa objektiivisesti oikeita ja kaikkien hyväksymiä ratkaisuja."
        },
        {
          "id": "b",
          "text": "Teoreema selittää enemmistöpäätösten lisäksi sen, miten poliittiset päätösvaihtoehdot syntyvät ja miten päätöksenteon jälkeiset erimielisyydet vaikuttavat demokratiaan."
        },
        {
          "id": "c",
          "text": "Äänestäjien riippumattomuutta koskeva oletus on ongelmallinen, koska mielipiteet voivat muodostua vuorovaikutuksessa ja kietoutua sosiaalisiin identiteetteihin."
        },
        {
          "id": "d",
          "text": "Teoreeman mukaan enemmistöpäätöksen oikeellisuus paranee äänestäjien määrän kasvaessa riippumatta yksittäisten äänestäjien tietämyksestä tai päätösten riippumattomuudesta."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "103–104",
        "section": "Tietäminen ja tietämättömyys demokratiassa"
      },
      "explanation": "A on oikein. Teoreema perustuu oletukseen oikeista vastauksista, vaikka poliittiset kysymykset sisältävät usein ristiriitaisia arvoja.\nB on väärin. Artikkelissa todetaan, ettei teoreema selitä päätösvaihtoehtojen muodostumista eikä huomioi päätöksenteon jälkeisten erimielisyyksien arvoa.\nC on oikein. Kansalaisten näkemykset eivät synny toisistaan riippumatta, vaan vuorovaikutuksessa, mielipidevaikuttajien ohjauksessa ja osana identiteettejä.\nD on väärin. Teoreeman johtopäätös edellyttää tiettyjen ehtojen täyttymistä, kuten sattumaa parempaa yksilöllistä osumatodennäköisyyttä ja päätösten riippumattomuutta.\n\nLähde:\nS. 103–104, ”Tietäminen ja tietämättömyys demokratiassa”.\nRatkaiseva lainaus, s. 104: ”teoreema rajoittuu äänestyskäyttäytymisen tutkimukseen eikä selitä, miten päätösvaihtoehdot syntyvät”.",
      "learningPoint": "Opiskelijan tulee erottaa teoreeman johtopäätös sen edellytyksistä ja soveltamisalan rajoituksista. Teoreettista väitettä ei saa yleistää tilanteisiin, joissa sen oletukset eivät toteudu.\nHakuvinkki: Ctrl+F: Teoreemaa on kuitenkin kritisoitu ja päätösvaihtoehdot."
    },
    {
      "id": "g-m15-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Oikein vai väärin?\nArtikkelissa digitaalisten alustojen ja tekoälyn vaikutukset demokratian episteemiseen infrastruktuuriin ymmärretään kaksijakoisiksi. Teknologia voi laajentaa tiedon saatavuutta ja osallistumismahdollisuuksia, mutta samalla algoritmit voivat kaventaa vastakkaisten näkemysten kohtaamista ja vahvistaa episteemisiä kuplia.",
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "110–112"
      },
      "explanation": "Digitaaliset alustat mahdollistavat uudenlaisia osallistumisen ja tiedon jakamisen muotoja. Toisaalta algoritmit voivat vahvistaa ennakkokäsityksiä ja vähentää erilaisten näkökulmien kohtaamista.\nArtikkelissa teknologinen kehitys ei siis ole yksiselitteisesti demokratiaa vahvistava tai heikentävä ilmiö.\n\nLähde:\nS. 110–112, erityisesti ”Kansalaisten osallistuminen edistää episteemisen infrastruktuurin uusiutumista”.\nRatkaiseva lainaus, s. 112: ”Teknologia voi sekä vahvistaa osallistumista että ohentaa jaettua todellisuutta.”",
      "learningPoint": "Opiskelijan tulee tunnistaa, voivatko kaksi vastakkaista kehityskulkua toteutua saman teknologisen muutoksen seurauksena. Myönteinen vaikutus yhdellä osa-alueella ei sulje pois kielteisiä vaikutuksia toisella.\nHakuvinkki: Ctrl+F: Teknologia voi sekä ja episteemisiä kuplia."
    },
    {
      "id": "g-m15-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein Archerin morfogeneettisen syklin vaiheet ja niiden sisällöt?",
      "options": [
        {
          "id": "a",
          "text": "Ensimmäisessä vaiheessa toimijat muuttavat rakenteita, toisessa vaiheessa rakenteet määrittävät toiminnan puitteet ja kolmannessa vaiheessa syntyy sosiaalinen vuorovaikutus."
        },
        {
          "id": "b",
          "text": "Ensimmäisessä vaiheessa rakenteellinen ehdollistaminen määrittää toiminnan puitteet, toisessa toimijat käyttävät näitä puitteita tavoitteidensa edistämiseen ja kolmannessa rakenteet muuttuvat seuraavan syklin lähtökohdiksi."
        },
        {
          "id": "c",
          "text": "Ensimmäisessä vaiheessa muodostetaan yhteiset normipiirit, toisessa toteutuu morfostaattinen jatkuvuus ja kolmannessa kansalaiset luopuvat rakenteiden muuttamisesta."
        },
        {
          "id": "d",
          "text": "Ensimmäisessä vaiheessa kansalaiset muodostavat uskomuksensa toisistaan riippumatta, toisessa asiantuntijat määrittävät hyväksyttävän tiedon ja kolmannessa rakenteet pysyvät muuttumattomina."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "110",
        "section": "Kansalaisten osallistuminen edistää episteemisen infrastruktuurin uusiutumista"
      },
      "explanation": "B on oikein. Archerin mallissa aiemmat rakenteet muodostavat toiminnan lähtökohdat, toimijat hyödyntävät niitä vuorovaikutuksessa ja tämän seurauksena rakenteet voivat muuttua.\nA on väärin. Vaiheiden järjestys on muutettu.\nC on väärin. Normipiirit ja morfostaasi liittyvät ensisijaisesti jatkuvuuden ylläpitämiseen, eivät Archerin kolmen vaiheen kuvaukseen.\nD on väärin. Archerin mallissa rakenteet ja toimijuus vaikuttavat toisiinsa, eikä muutoksen lähtökohtana ole toisistaan riippumaton tiedonmuodostus.\n\nLähde:\nS. 110, ”Kansalaisten osallistuminen edistää episteemisen infrastruktuurin uusiutumista”.\nRatkaiseva lainaus: ”Muutos jäsentyy Archerilla (1995) syklinä, joka koostuu kolmesta vaiheesta.”",
      "learningPoint": "Opiskelijan tulee yhdistää prosessin vaiheet oikeaan järjestykseen ja ymmärtää, miten edellisen vaiheen tulos vaikuttaa seuraavaan. Oikeat käsitteet eivät muodosta oikeaa vastausta, jos niiden ajallinen järjestys muuttuu.\nHakuvinkki: Ctrl+F: Ensin rakenteellinen ehdollistaminen ja Kolmanneksi."
    },
    {
      "id": "g-m15-q10",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta kansalaisten osallistumisen mahdollisuuksista ja rajoituksista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Osallistuva budjetointi voi tuoda asiantuntijatiedon ja kansalaisten kokemukset yhteen sekä muuttaa sitä, millaisia ongelmia pidetään poliittisesti merkityksellisinä."
        },
        {
          "id": "b",
          "text": "Kansalaisraadit takaavat, että kansalaisten esittämät näkemykset muuttuvat poliittisiksi päätöksiksi, vaikka ne eivät olisi yhteydessä päätöksenteon instituutioihin."
        },
        {
          "id": "c",
          "text": "Puntaroivat käytännöt voivat vahvistaa päätöksenteon legitimiteettiä, mutta niiden vaikutuksia voivat rajoittaa epätasainen osallistuminen ja olemassa olevat valta-asetelmat."
        },
        {
          "id": "d",
          "text": "Osallistavat käytännöt poistavat asiantuntijoiden ja kansalaisten väliset valtaerot, koska kaikki tiedon muodot saavat niissä automaattisesti saman aseman."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "110–111"
      },
      "explanation": "A on oikein. Osallistuva budjetointi voi muuttaa hallinnon yksisuuntaista päätöksentekoa yhteistoiminnalliseksi tiedonmuodostukseksi.\nB on väärin. Osallistuminen voi jäädä symboliseksi, jos sillä ei ole yhteyttä varsinaiseen päätöksentekoon.\nC on oikein. Puntaroivien käytäntöjen ongelmina mainitaan epätasainen osallistuminen ja valta-asetelmien vaikutus.\nD on väärin. Keskustelun kieli ja hyväksyttävän tiedon määrittely voivat suosia tiettyjä toimijoita ja sulkea muita näkökulmia ulkopuolelle.\n\nLähde:\nS. 110–111, kansalaisten osallistumista ja morfogeneesiä käsittelevä osuus.\nRatkaiseva lainaus, s. 111: ”ilman kytkentää päätöksenteon ytimeen se uhkaa jäädä symboliseksi”.",
      "learningPoint": "Opiskelijan tulee erottaa osallistumisen tarjoama mahdollisuus sen toteutuneesta vaikutuksesta. Osallistuminen ei automaattisesti tarkoita vallan tasaisempaa jakautumista.\nHakuvinkki: Ctrl+F: osallistuva budjetointi ja symboliseksi."
    },
    {
      "id": "g-m15-q11",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein morfogeneesin ja morfostaasin välistä eroa demokratian episteemisessä infrastruktuurissa?",
      "options": [
        {
          "id": "a",
          "text": "Morfogeneesi tarkoittaa vakiintuneiden normien ylläpitämistä, kun taas morfostaasi kuvaa yhteiskunnallisten rakenteiden uudistumista."
        },
        {
          "id": "b",
          "text": "Morfogeneesi tarkoittaa kansalaisten henkilökohtaista tiedonhankintaa, kun taas morfostaasi tarkoittaa digitaalisten alustojen tuottamaa informaation määrän kasvua."
        },
        {
          "id": "c",
          "text": "Morfogeneesi ja morfostaasi ovat saman prosessin kaksi nimeä, jotka molemmat kuvaavat ainoastaan rakenteiden pysyvyyttä."
        },
        {
          "id": "d",
          "text": "Morfogeneesi kuvaa rakenteita uudistavia prosesseja, kun taas morfostaasi viittaa järjestelmän muodon ja vakauden ylläpitämiseen."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "110 ja 112"
      },
      "explanation": "D on oikein. Morfogeneesi liittyy rakenteiden muutokseen, morfostaasi niiden jatkuvuuteen.\nA on väärin. Käsitteiden merkitykset on vaihdettu keskenään.\nB on väärin. Kumpikaan käsite ei tarkoita yksinomaan yksilöllistä tiedonhankintaa tai informaation määrän kasvua.\nC on väärin. Käsitteet kuvaavat eri mekanismeja, vaikka molemmat ovat tarpeellisia demokratian episteemiselle infrastruktuurille.\n\nLähde:\nS. 110 ja 112, infrastruktuurin uusiutumista ja jatkuvuutta käsittelevät osiot.\nRatkaiseva lainaus, s. 112: ”morfostaasista eli ’pyrkimyksestä säilyttää tai ylläpitää järjestelmän annettu muoto, rakenne tai tila’”.",
      "learningPoint": "Opiskelijan tulee erottaa rakenteiden uudistuminen ja jatkuvuuden ylläpitäminen toisistaan sekä tunnistaa, miksi demokratia tarvitsee molempia.\nHakuvinkki: Ctrl+F: morfogeneesiksi ja morfostaasista."
    },
    {
      "id": "g-m15-q12",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nArtikkelissa normipiirit ymmärretään kollektiivisesti ylläpidetyiksi rakenteiksi, jotka voivat tehdä käyttäytymisestä ennustettavampaa ja vahvistaa tiedollista vastuullisuutta. Niiden tehtävänä ei kuitenkaan ole poistaa kaikkia erimielisyyksiä, vaan mahdollistaa niiden käsittely yhteisten normien puitteissa.",
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "112–113",
        "section": "Normipiirit tukevat episteemisen infrastruktuurin jatkuvuutta"
      },
      "explanation": "Normipiirit muodostuvat yhteisistä odotuksista, joita ryhmät ylläpitävät ja vahvistavat. Ne voivat tehdä tiedollisista käytännöistä ennustettavampia ja vähentää mielivaltaa.\nArtikkelissa ei kuitenkaan edellytetä kansalaisten olevan kaikista kysymyksistä samaa mieltä. Olennaista on, että erimielisyyksiä voidaan käsitellä yhteisten periaatteiden mukaisesti.\n\nLähde:\nS. 112–113, ”Normipiirit tukevat episteemisen infrastruktuurin jatkuvuutta”.\nRatkaiseva lainaus, s. 113: ”Tämä ei merkitse yksimielisyyden vaatimusta”.",
      "learningPoint": "Opiskelijan tulee erottaa yhteisiin normeihin sitoutuminen täydellisen yksimielisyyden vaatimuksesta. Yhteinen toimintatapa ei tarkoita samanlaisia mielipiteitä.\nHakuvinkki: Ctrl+F: Tämä ei merkitse yksimielisyyden ja Normipiirit luovat odotuksia."
    },
    {
      "id": "g-m15-q13",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin kuvausta luottamuksen ja tiedon legitimiteetin suhteesta?",
      "options": [
        {
          "id": "a",
          "text": "Tiedon hyväksyttävyys voi riippua sen sisällön lisäksi siitä, miten se sopii yhteisössä vallitseviin odotuksiin ja käytäntöihin."
        },
        {
          "id": "b",
          "text": "Marginalisoitujen ryhmien kokemustieto voi jäädä poliittisen keskustelun ulkopuolelle, jos sitä ei pystytä ilmaisemaan vallitsevissa käytännöissä hyväksyttävällä tavalla."
        },
        {
          "id": "c",
          "text": "Tiedon legitimiteetti määräytyy yksinomaan sen totuusarvon perusteella, eikä institutionaalisilla odotuksilla tai yhteisöllisillä tulkintakehyksillä ole vaikutusta siihen, kenen väitteitä pidetään uskottavina."
        },
        {
          "id": "d",
          "text": "Luottamus voi mahdollistaa kollektiivisen tiedonmuodostuksen, mutta se voi myös sitoa tiedon arviointia kapeisiin tulkintakehyksiin."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "109",
        "section": "Luottamus episteemisen infrastruktuurin relationaalisena perustana"
      },
      "explanation": "A on oikein. Yhteiskunnalliset tiedon oikeuttamisen tavat vaikuttavat siihen, mitä pidetään merkityksellisenä tietona.\nB on oikein. Esimerkiksi toimeentuloon ja alueelliseen eriarvoisuuteen liittyvä kokemustieto voi jäädä sivuun, jos sitä ei esitetä poliittisesti relevantiksi tunnistetulla tavalla.\nC on väärin. Se poistaa tiedon legitimiteettiin vaikuttavat sosiaaliset ja institutionaaliset ehdot.\nD on oikein. Luottamus voi avata keskustelua erilaisille näkökulmille mutta myös vahvistaa kapeita tulkintakehyksiä.\n\nLähde:\nS. 109, ”Luottamus episteemisen infrastruktuurin relationaalisena perustana”.\nRatkaiseva lainaus: ”Tiedon hyväksyttävyys ei määräydy vain sen sisäisen totuusarvon perusteella”.",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin useista tiedon hyväksyttävyyteen vaikuttavista tekijöistä nostetaan yksi ainoaksi selitykseksi.\nHakuvinkki: Ctrl+F: sisäisen totuusarvon ja marginalisoitujen."
    },
    {
      "id": "g-m15-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä normipiirien toimintatapoja ja esimerkkejä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Journalismin eettiset säännöt ja tieteellisen yhteisön itsekorjausmekanismit voivat ylläpitää episteemistä järjestystä luomalla yhteisiä odotuksia tiedon luotettavuudesta."
        },
        {
          "id": "b",
          "text": "Normipiirien vaikutus perustuu siihen, että yksittäinen kansalainen määrittää yhteisön normit riippumatta muiden toimijoiden sitoutumisesta."
        },
        {
          "id": "c",
          "text": "Normipiirit voivat vahvistaa tiedollista vastuullisuutta, kun yhteisö reagoi esimerkiksi ilmeisten tosiseikkojen rikkomiseen paheksunnalla tai sanktioilla."
        },
        {
          "id": "d",
          "text": "Normipiirit ylläpitävät demokratian vakautta vain silloin, kun ne estävät kokonaan vakiintuneiden käytäntöjen muuttumisen."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "112–113",
        "section": "Normipiirit tukevat episteemisen infrastruktuurin jatkuvuutta"
      },
      "explanation": "A on oikein. Artikkelissa journalismin eettiset säännöt ja tieteen itsekorjausmekanismit mainitaan esimerkkeinä jatkuvuutta ylläpitävistä normipiireistä.\nB on väärin. Normipiirien vaikutus syntyy kollektiivisesta sitoutumisesta, ei yksittäisen toimijan päätöksestä.\nC on oikein. Yhteisön paheksunta ja sanktiot voivat vähentää episteemisesti vastuuttoman toiminnan hyväksyttävyyttä.\nD on väärin. Normipiirit voivat myös muuttua, jos niiden legitimiteetti heikkenee ja uusia normeja muodostuu.\n\nLähde:\nS. 112–113, ”Normipiirit tukevat episteemisen infrastruktuurin jatkuvuutta”.\nRatkaiseva lainaus, s. 112–113: ”Normien voima ei synny yksittäisten toimijoiden uskomuksista”.",
      "learningPoint": "Opiskelijan tulee yhdistää normipiirien kollektiivinen syntytapa niiden käyttäytymistä ohjaaviin seurauksiin. Lisäksi tulee erottaa jatkuvuuden ylläpitäminen muutoksen täydellisestä estämisestä.\nHakuvinkki: Ctrl+F: journalismin eettiset säännöt ja paheksunnalla tai sanktioilla."
    },
    {
      "id": "g-m15-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin sivun 114 kuviota 1 ja siinä kuvattuja demokratian episteemisen infrastruktuurin mekanismeja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kansalaisten episteeminen toimijuus liittyy vastuuseen tarkastella kriittisesti omia uskomuksia ja osallistua yhteiseen keskusteluun, kun taas relationaaliset käytännöt liittyvät sosiaalisiin käytäntöihin, jotka legitimoivat tietoa ja vakiinnuttavat odotuksia."
        },
        {
          "id": "b",
          "text": "Infrastruktuurin uusiutuminen tarkoittaa yhteisten normien ja instituutioiden ylläpitämää tiedollista vakautta, kun taas jatkuvuutta ylläpitävät rakenteet kuvaavat ensisijaisesti rakenteiden ja toimijuuden keskinäisestä muovautumisesta syntyviä uusia sosiaalisia muotoja."
        },
        {
          "id": "c",
          "text": "Infrastruktuurin uusiutumisessa rakenteen ja toimijuuden keskinäinen muovautuminen tuottaa uusia sosiaalistumisen muotoja, kun taas jatkuvuutta ylläpitävissä rakenteissa yhteisten normien ja instituutioiden hidas sopeutuminen ylläpitää tiedollista järjestystä."
        },
        {
          "id": "d",
          "text": "Kuvion mukaan demokratian kausaalinen voima syntyy yksinomaan kansalaisten episteemisestä toimijuudesta, ja kolme muuta mekanismia ovat sen seurauksia ilman itsenäistä merkitystä."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "114"
      },
      "explanation": "A on oikein. Kuviossa kansalaisten episteeminen toimijuus liittyy kriittiseen harkintaan ja relationaaliset käytännöt tiedon legitimointiin sosiaalisessa vuorovaikutuksessa.\nB on väärin. Siinä infrastruktuurin uusiutumisen ja jatkuvuutta ylläpitävien rakenteiden ominaisuudet on vaihdettu keskenään.\nC on oikein. Uusiutuminen liittyy rakenteen ja toimijuuden keskinäiseen muovautumiseen, jatkuvuus puolestaan normien ja instituutioiden ylläpitämään tiedolliseen vakauteen.\nD on väärin. Kuvio esittää neljä toisiinsa kytkeytyvää mekanismia, joiden yhteisvaikutuksesta demokratian kausaalinen voima muodostuu.\n\nLähde:\nS. 114, kuvio 1 ”Episteemisen demokratian kausaalinen voima” sekä johtopäätösten ensimmäiset kappaleet.\nRatkaiseva lainaus, s. 114: ”Yhdessä mekanismit antavat demokratialle kausaalista voimaa eli kykyä tuottaa ja ylläpitää yhteistä tiedollista perustaa.”",
      "learningPoint": "Opiskelijan tulee yhdistää kuvion neljä mekanismia niiden oikeisiin tehtäviin. Pelkkä mekanismien nimien tunnistaminen ei riitä, vaan on erotettava niiden roolit yhteisen tiedollisen perustan rakentumisessa.\nHakuvinkki: Siirry painetulle sivulle 114 ja tarkastele kuviota 1. Ctrl+F: Episteemisen demokratian kausaalinen voima."
    },
    {
      "id": "g-m15-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Tosi vai epätosi?\nElder-Vassin käsityksessä emergentin kokonaisuuden kausaalinen voima syntyy sen osien erityisestä järjestäytymisestä ja keskinäisistä suhteista. Tämä ei tarkoita, että tietty vaikutus toteutuisi väistämättä, vaan että kokonaisuudella on taipumus mahdollistaa tietynlaisia vaikutuksia tietyissä olosuhteissa.",
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "106",
        "section": "Demokratian episteeminen infrastruktuuri emergenttinä kokonaisuutena"
      },
      "explanation": "Elder-Vassin mukaan emergentillä kokonaisuudella voi olla vaikutusmahdollisuuksia, joita sen yksittäisillä osilla ei ole.\nKausaalinen voima ei kuitenkaan tarkoita determinististä mekanismia. Vaikutuksen toteutuminen riippuu myös olosuhteista.\n\nLähde:\nS. 106, ”Demokratian episteeminen infrastruktuuri emergenttinä kokonaisuutena”.\nRatkaiseva lainaus: ”Kausaalinen voima ei tarkoita lineaarista syy–seurausketjua”.",
      "learningPoint": "Opiskelijan tulee erottaa vaikutuksen mahdollistava mekanismi vaikutuksen väistämättömästä toteutumisesta. Kausaalinen voima ei tarkoita automaattista lopputulosta.\nHakuvinkki: Ctrl+F: taipumukselliseen ominaisuuteen ja Elder-Vass."
    },
    {
      "id": "g-m15-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa käsitellyt tutkijat ja heidän teoreettiset näkökulmansa?",
      "options": [
        {
          "id": "a",
          "text": "Archer tarkastelee normipiirejä kollektiivisesti ylläpidettyinä rakenteina, kun taas Elder-Vass esittää kolmivaiheisen morfogeneettisen syklin."
        },
        {
          "id": "b",
          "text": "Luhmann esittää Condorcet’n valamiehistöteoreeman ehdot, kun taas Goodin ja Spiekermann kuvaavat luottamusta yhteisön itseorganisoitumisen perustana."
        },
        {
          "id": "c",
          "text": "Elder-Vass korostaa normipiirien kollektiivista rakentumista, Archer tarkastelee rakenteiden ja toimijuuden keskinäistä muovautumista morfogeneettisessä syklissä ja Luhmannin mukaan luottamuksen testaaminen edeltää merkitysten käsittelyä."
        },
        {
          "id": "d",
          "text": "Buckley määrittelee episteemisen toimijuuden yksinomaan kansalaisen henkilökohtaiseksi tietämykseksi, kun taas Lynch esittää morfostaasin järjestelmän rakenteiden ylläpitämisenä."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "109–113"
      },
      "explanation": "C on oikein. Kaikki kolme tutkijaa on yhdistetty artikkelissa käsiteltyihin näkökulmiinsa. Luhmannin mukaan luottamuksen testaaminen edeltää merkitysten käsittelyä.\nA on väärin. Normipiirien käsitettä käsitellään Elder-Vassin yhteydessä ja kolmivaiheista morfogeneettistä sykliä Archerin yhteydessä.\nB on väärin. Condorcet’n teoreema ei ole Luhmannin esittämä, eikä Goodinin ja Spiekermannin artikkelissa käsitelty rooli vastaa Luhmannin luottamusta koskevaa näkemystä.\nD on väärin. Morfostaasia käsitellään Buckleyn yhteydessä, eikä episteemistä toimijuutta määritellä pelkäksi henkilökohtaiseksi tietämykseksi.\n\nLähde:\nS. 109–113, luottamusta, morfogeneesiä ja normipiirejä käsittelevät osiot.\nRatkaisevat kohdat: Luhmannin luottamusta koskeva tulkinta s. 109, Archerin kolmivaiheinen sykli s. 110 ja Elder-Vassin normipiirit s. 112–113.",
      "learningPoint": "Opiskelijan tulee yhdistää kolme tutkijaa oikeisiin käsitteisiin ja teoreettisiin malleihin. Väärissä vaihtoehdoissa artikkelissa esiintyviä oikeita käsitteitä liitetään vääriin tutkijoihin.\nHakuvinkki: Ctrl+F: Luhmannin, Archerilla ja normipiirin."
    },
    {
      "id": "g-m15-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Oikein vai väärin?\nArtikkelin johtopäätösten mukaan episteeminen toimijuus, relationaaliset käytännöt, morfogeneettinen uusiutuminen ja morfostaattinen jatkuvuus ovat demokratian episteemisen infrastruktuurin välttämättömiä mutta eivät yksin riittäviä ehtoja. Siksi niiden tunnistaminen ei vielä osoita, että demokratian tiedollinen perusta säilyisi vakaana kaikissa olosuhteissa.",
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "114",
        "section": "Johtopäätökset"
      },
      "explanation": "Artikkelin neljä mekanismia muodostavat yhdessä demokratian episteemisen infrastruktuurin perustaa, mutta ne eivät takaa järjestelmän kestävyyttä.\nSamat mekanismit voivat myös heikentää demokratiaa esimerkiksi silloin, kun luottamus murenee tai kansalaisten episteeminen toimijuus kaventuu.\n\nLähde:\nS. 114, ”Johtopäätökset”.\nRatkaiseva lainaus: ”välttämättömiä – joskaan ei riittäviä – ehtoja”.",
      "learningPoint": "Opiskelijan tulee erottaa välttämätön ehto riittävästä ehdosta. Se, että jokin mekanismi on tarpeellinen järjestelmän toiminnalle, ei tarkoita sen yksin takaavan onnistunutta lopputulosta.\nHakuvinkki: Ctrl+F: välttämättömiä ja joskaan ei riittäviä."
    },
    {
      "id": "g-m15-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin johtopäätöksiä ja jatkotutkimusta koskevia rajauksia?",
      "options": [
        {
          "id": "a",
          "text": "Artikkelin käsitteellinen tarkastelu ei yksin riitä osoittamaan, miten neljä mekanismia toimivat erilaisissa institutionaalisissa ympäristöissä."
        },
        {
          "id": "b",
          "text": "Polykriisit tarjoavat tilanteita, joissa voidaan tarkastella demokraattisten järjestelmien kykyä ylläpitää tiedonmuodostusta ja luottamusta samanaikaisten häiriöiden keskellä."
        },
        {
          "id": "c",
          "text": "Vertaileva tutkimus voisi auttaa selvittämään, miksi samankaltaiset osallistumisen muodot vahvistavat demokratian tiedollista perustaa joissakin olosuhteissa mutta lisäävät polarisaatiota toisissa."
        },
        {
          "id": "d",
          "text": "Artikkelissa on empiirisesti osoitettu, että samat osallistumisen muodot tuottavat samanlaisia vaikutuksia kaikissa demokraattisissa järjestelmissä riippumatta niiden instituutioista ja mediaympäristöistä."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "116",
        "section": "Johtopäätökset"
      },
      "explanation": "A on oikein. Kirjoittaja toteaa, että käsitteellistä tarkastelua on täydennettävä mekanismien toiminnan tutkimisella erilaisissa konteksteissa.\nB on oikein. Polykriiseissä useat samanaikaiset häiriöt voivat koetella demokratian tiedollista perustaa.\nC on oikein. Kirjoittaja ehdottaa tutkimusta siitä, miksi samankaltaiset osallistumisen muodot voivat johtaa erilaisiin seurauksiin.\nD on väärin. Artikkeli ei ole empiirinen vaikutustutkimus, eikä siinä osoiteta osallistumisen tuottavan samanlaisia seurauksia kaikissa olosuhteissa.\n\nLähde:\nS. 116, ”Johtopäätökset”.\nRatkaiseva lainaus: ”Tarvitsemme myös lisää vertailevaa tutkimusta”.",
      "learningPoint": "Opiskelijan tulee erottaa käsitteellisen tutkimuksen johtopäätökset empiirisesti osoitetuista vaikutuksista. Lisäksi tulee huomata, miten olosuhteet voivat muuttaa saman mekanismin seurauksia.\nHakuvinkki: Ctrl+F: Pelkkä käsitteellinen tarkastelu ja vertailevaa tutkimusta."
    },
    {
      "id": "g-m15-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Jalosen artikkelin kokonaisargumentin ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Demokratian episteemisen infrastruktuurin vahvuutta ei voida arvioida yksinomaan kansalaisten tietämyksen perusteella, koska tiedon muodostuminen ja hyväksyttävyys riippuvat myös institutionaalisista, sosiaalisista ja teknologisista suhteista."
        },
        {
          "id": "b",
          "text": "Demokratian episteemisen infrastruktuurin vakaus edellyttää, että kansalaiset luopuvat erimielisyyksistä ja hyväksyvät yhteisen totuuden, jonka asiantuntijat määrittävät poliittisen keskustelun ulkopuolella."
        },
        {
          "id": "c",
          "text": "Kansalaisten osallistuminen voi sekä vahvistaa että heikentää demokratian tiedollista perustaa, ja vaikutusten ymmärtäminen edellyttää osallistumisen, luottamuksen, teknologian ja normatiivisten käytäntöjen yhteisvaikutuksen tarkastelua."
        },
        {
          "id": "d",
          "text": "Morfogeneettinen uusiutuminen voi artikkelin mukaan korvata kokonaan morfostaattisen jatkuvuuden, koska demokratian episteeminen infrastruktuuri toimii parhaiten ilman vakiintuneita normeja."
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
        "articleId": "kansalaisuus-demokratian-episteemisessa-infrastruktuurissa",
        "page": "114–116",
        "section": "Johtopäätökset"
      },
      "explanation": "A on oikein. Demokratian episteeminen infrastruktuuri muodostuu kansalaisten, instituutioiden ja teknologisten ympäristöjen välisissä suhteissa. Sitä ei voi palauttaa yksittäisten kansalaisten tietämykseen.\nB on väärin. Artikkeli ei edellytä täydellistä yksimielisyyttä eikä pidä demokratiaa asiantuntijoiden määrittämään totuuteen perustuvana järjestelmänä.\nC on oikein. Osallistumisen vaikutukset riippuvat sen suhteesta muihin mekanismeihin. Sama osallistumisen muoto voi erilaisissa olosuhteissa vahvistaa yhteistä tiedollista perustaa tai syventää jakolinjoja.\nD on väärin. Demokratia tarvitsee sekä uusiutumista että jatkuvuutta. Ilman vakautta ylläpitäviä normeja yhteinen tiedollinen perusta voi haurastua.\n\nLähde:\nS. 114–116, ”Johtopäätökset”, erityisesti kuvio 1 sivulla 114.\nRatkaiseva lainaus, s. 115: ”Tämä kehitys voi ilmetä sekä demokratian tiedollisen perustan vahvistumisena että sen haurastumisena.”",
      "learningPoint": "Opiskelijan tulee yhdistää artikkelin neljä mekanismia niiden mahdollisiin seurauksiin ja tunnistaa, miksi yhden mekanismin vahvistuminen ei yksin takaa demokratian kestävyyttä. Erityisesti tulee erottaa osallistumisen mahdollisuus vahvistaa demokratia siitä oletuksesta, että osallistuminen tuottaisi aina myönteisiä seurauksia.\nHakuvinkki: Ctrl+F: neljästä toisiinsa kietoutuvasta prosessista, sekä demokratian tiedollisen perustanja informaatioresilienssiä."
    }
  ]
} satisfies ValintakoeGExercise;
