import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 10: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise10Base = {
  "id": "keskivaikea-harjoitus-10",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 10 – Suomen valtion indeksisidonnaisten menojen tarkastelu simulaatiomallilla",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
  "articleTitle": "Suomen valtion indeksisidonnaisten menojen tarkastelu simulaatiomallilla",
  "articleUrl": "https://journal.fi/kak/article/view/179813/125898",
  "questions": [
    {
      "id": "g-m10-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nIndeksisidonnaisuus voi suojata etuuksien saajien ostovoimaa hintojen noustessa, mutta samalla se voi kasvattaa valtion menoja automaattisesti. Tämän vuoksi indeksisidonnaisuuden vaikutukset julkiseen talouteen eivät ole yksinomaan myönteisiä tai kielteisiä.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "135 ja 149"
      },
      "explanation": "Indeksoinnilla pyritään säilyttämään etuuksien ostovoima, mutta sama mekanismi nostaa valtion menoja hintojen ja palkkojen kasvaessa. Väittämä yhdistää indeksisidonnaisuuden kaksi erilaista vaikutusta. Epätosi olisi oikea vastaus, jos indeksoinnilla olisi artikkelin mukaan vain toinen näistä vaikutuksista.\n\nLähde:\nS. 135 ja 149, erityisesti \"Yhteenveto\". Sivulla 149 todetaan: \"Menojen kasvun sitominen indeksien arvon muutoksiin on kaksiteräinen miekka\".",
      "learningPoint": "Opiskelijan tulee yhdistää indeksisidonnaisuuden tarkoitus sen julkistaloudellisiin seurauksiin ja tunnistaa sama merkitys eri sanoin ilmaistuna.\nHakuvinkki: Ctrl+F: kaksiteräinen miekka ja ostovoima."
    },
    {
      "id": "g-m10-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kysyntä- ja tarjontashokkien vaikutukset julkiseen talouteen?",
      "options": [
        {
          "id": "a",
          "text": "Kysyntäshokissa kuluttajahinnat kasvavat yleensä palkkoja ja BKT:tä nopeammin, kun taas tarjontashokissa nimelliset verotulot kasvavat välittömästi menoja nopeammin."
        },
        {
          "id": "b",
          "text": "Kysyntäshokissa indeksisidonnaiset menot kasvavat aina verotuloja nopeammin, kun taas tarjontashokissa verotulojen kasvu kompensoi menojen kasvun kokonaan."
        },
        {
          "id": "c",
          "text": "Kysyntäshokissa inflaatio ei vaikuta palkkoihin, kun taas tarjontashokissa hintojen nousu perustuu yksinomaan kotimaisen kokonaiskysynnän kasvuun."
        },
        {
          "id": "d",
          "text": "Kysyntäshokissa palkkojen ja nimellisten verotulojen kasvu voi osittain kompensoida indeksisidonnaisia menoja, kun taas tarjontashokissa kuluttajahinnat voivat kasvaa palkkoja ja BKT:tä nopeammin."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "135"
      },
      "explanation": "D on oikein. Kysyntäshokissa palkkojen ja nimellisten verotulojen kasvu voi osittain kompensoida indeksisidonnaisten menojen kasvua. Tarjontashokissa hinnat voivat nousta palkkoja ja BKT:tä nopeammin, jolloin verotulojen kasvu jää jälkeen menojen kasvusta.\nA vaihtaa shokkien keskeiset vaikutukset keskenään.\nB on väärin, koska artikkelissa ei esitetä vaikutuksia ehdottomina. Verotulojen kasvu voi kompensoida menoja osittain, ei välttämättä kokonaan.\nC on väärin, koska kysyntäshokki liittyy myös palkkojen kasvuun ja tarjontashokki voi johtua esimerkiksi energian tai tuontihyödykkeiden kallistumisesta.\n\nLähde:\nS. 135, johdanto. Ratkaiseva lainaus: \"Tämä tekee tarjontashokeista usein julkisen talouden kannalta haastavampia.\"",
      "learningPoint": "Opiskelijan tulee erottaa kahden taloudellisen shokin ominaisuudet ja yhdistää ne oikeisiin vaikutuksiin. Väärät vaihtoehdot sisältävät osittain oikeita vaikutuksia mutta liittävät ne väärään shokkiin.\nHakuvinkki: Ctrl+F: Kysyntäshokissa ja Tarjontashokissa."
    },
    {
      "id": "g-m10-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nTutkimuksessa käytetyn simulaatiomallin ensisijaisena tavoitteena on ennustaa mahdollisimman tarkasti tulevien vuosien inflaatio ja indeksien pisteluvut. Politiikkavaihtoehtojen vertailu on tutkimuksessa vain toissijainen käyttötarkoitus.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "136–137"
      },
      "explanation": "Tutkimuksen tarkoituksena on vertailla indeksisidonnaisuutta koskevien politiikkavaihtoehtojen vaikutuksia pitkän aikavälin menokehitykseen. Malli tuottaa mahdollisia kehityspolkuja ja niiden vaihteluvälejä, ei yhtä tarkkaa tulevaisuusennustetta.\nVäittämä on väärin, koska se esittää tutkimuksen päätavoitteeksi asian, jonka tutkijat nimenomaisesti rajaavat tavoitteensa ulkopuolelle.\n\nLähde:\nS. 136–137, johdanto. Sivulla 136 todetaan: \"Tarkoituksena ei ole ennustaa inflaation tai indeksiarvojen tarkkaa kehitystä.\"",
      "learningPoint": "Opiskelijan tulee erottaa mallin varsinainen käyttötarkoitus sellaisesta tavoitteesta, jota tutkijat eivät tavoittele. Erityisesti on tarkistettava, ennustetaanko yksittäistä lopputulosta vai tarkastellaanko mahdollisten lopputulosten vaihtelua.\nHakuvinkki: Ctrl+F: Tarkoituksena ei ole ennustaa."
    },
    {
      "id": "g-m10-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä indeksien muodostamisperusteita? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Työeläkeindeksi muodostuu 80-prosenttisesti kuluttajahintaindeksistä ja 20-prosenttisesti ansiotasoindeksistä."
        },
        {
          "id": "b",
          "text": "YLE-indeksissä kuluttajahintaindeksin paino on kaksi kolmasosaa ja ansiotasoindeksin yksi kolmasosa."
        },
        {
          "id": "c",
          "text": "Yliopistoindeksissä ansiotasoindeksillä on suurempi paino kuin kuluttajahintaindeksillä ja kotimarkkinoiden perushintaindeksillä yhteensä."
        },
        {
          "id": "d",
          "text": "Kansaneläkeindeksi muodostuu suoraan ansiotasoindeksistä ja teollisuuden tuottajahintaindeksistä."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "140 ja 157"
      },
      "explanation": "A on oikein. Työeläkeindeksi muodostuu 80-prosenttisesti kuluttajahintaindeksistä ja 20-prosenttisesti ansiotasoindeksistä.\nB on väärin. YLE-indeksissä ansiotasoindeksin paino on kaksi kolmasosaa ja kuluttajahintaindeksin yksi kolmasosa.\nC on oikein. Yliopistoindeksissä ansiotasoindeksin paino on 0,64 eli 64 prosenttia. Kahden muun indeksin yhteenlaskettu paino on 0,21 + 0,15 = 0,36 eli 36 prosenttia.\nD on väärin. Kansaneläkeindeksi seuraa elinkustannusindeksiä.\n\nLähde:\nS. 140 ja 157, liite 2 \"Indeksien muodostuminen\". Sivulla 157 työeläkeindeksin painoiksi ilmoitetaan 0,8 ja 0,2 sekä yliopistoindeksin painoiksi 0,64, 0,21 ja 0,15.",
      "learningPoint": "Opiskelijan tulee yhdistää indeksi oikeisiin osatekijöihin ja verrata niiden painoja. Yhden oikean luvun tunnistaminen ei riitä, vaan myös indeksien väliset suhteet on tarkistettava.\nHakuvinkki: Ctrl+F: Liite 2 ja Yliopistoindeksi."
    },
    {
      "id": "g-m10-q5",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein politiikkavaihtoehtojen 1 ja 2 keskeisen eron?",
      "options": [
        {
          "id": "a",
          "text": "Vaihtoehdossa 1 nykyiset jäädytykset jatkuvat vuoteen 2035, kun taas vaihtoehdossa 2 ne päättyvät vuonna 2027."
        },
        {
          "id": "b",
          "text": "Vaihtoehdossa 1 nykyiset indeksijäädytykset ja -jarrut jatkuvat vuoteen 2027, kun taas vaihtoehdossa 2 ne pidetään voimassa koko simulointijakson eli vuoteen 2035."
        },
        {
          "id": "c",
          "text": "Vaihtoehdossa 1 kaikki indeksikorotukset pienenevät yhdellä prosenttiyksiköllä, kun taas vaihtoehdossa 2 vähennys tehdään vain inflaation ylittäessä kaksi prosenttia."
        },
        {
          "id": "d",
          "text": "Vaihtoehdossa 1 indeksisidonnaisuus poistetaan kokonaan, kun taas vaihtoehdossa 2 se säilytetään vain sosiaaliturvamenoissa."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "145"
      },
      "explanation": "B on oikein. Vaihtoehdot 1 ja 2 sisältävät nykyisenkaltaiset indeksijarrut ja -jäädytykset, mutta niiden voimassaoloaika eroaa.\nA vaihtaa voimassaoloajat keskenään.\nC on väärin, koska yhden prosenttiyksikön sääntöpohjaiset jarrut liittyvät vaihtoehtoihin 3 ja 4.\nD on väärin, koska indeksisidonnaisuuden täydellistä poistamista ei mallinneta tutkimuksessa.\n\nLähde:\nS. 145, taulukko 3 ja politiikkavaihtoehtojen kuvaukset. Vaihtoehdossa 2 nykyiset jäädytykset ja jarrut pidetään voimassa \"vuoteen 2035 saakka\".",
      "learningPoint": "Opiskelijan tulee erottaa samankaltaiset politiikkavaihtoehdot niiden keston perusteella ja yhdistää oikea päättymisvuosi oikeaan vaihtoehtoon.\nHakuvinkki: Ctrl+F: Politiikkavaihtoehto 2."
    },
    {
      "id": "g-m10-q6",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nSuomen indeksisidonnaisten valtion menojen järjestelmä eroaa monista muista euroalueen maista sekä indeksisidonnaisuuden laajuuden että korotusten automaattisuuden perusteella. Suomessa indeksointi koskee sosiaaliturvan lisäksi esimerkiksi korkeakoulutuksen ja puolustuksen rahoitusta.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "139",
        "section": "Julkisten menojen indeksisidonnaisuus EU-maissa ja Suomessa"
      },
      "explanation": "Artikkelissa todetaan, että monissa muissa maissa indeksointi näyttäisi painottuvan eläkkeisiin ja tiettyihin etuuksiin. Suomessa indeksisidonnaisuus ulottuu laajemmin myös muihin valtion menoihin, kuten puolustukseen, korkeakouluihin ja ammatilliseen koulutukseen.\nEpätosi olisi oikea vastaus, jos Suomen järjestelmä rajautuisi muiden maiden tavoin pääasiassa eläkkeisiin tai jos artikkelissa ei esitettäisi sen automaattisuutta erityispiirteenä.\n\nLähde:\nS. 139, \"Julkisten menojen indeksisidonnaisuus EU-maissa ja Suomessa\". Sivulla 139 Suomen järjestelmää kuvataan \"poikkeuksellisen laajaksi\".",
      "learningPoint": "Opiskelijan tulee yhdistää kansainvälinen vertailu ja Suomen järjestelmän konkreettiset erityispiirteet.\nHakuvinkki: Ctrl+F: poikkeuksellisen laaja ja puolustusmenojen."
    },
    {
      "id": "g-m10-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin taulukossa 1 esitettyjä indeksisidonnaisten menojen osuuksien muutoksia vuosina 2024–2026? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hyvinvointialueiden hintaindeksin osuus kasvoi jokaisena tarkasteltuna vuonna, ja se oli vuonna 2026 suurempi kuin kansaneläkeindeksin ja työeläkeindeksin osuudet yhteensä."
        },
        {
          "id": "b",
          "text": "Kansaneläkeindeksin osuus pieneni vuosina 2024–2026, mutta työeläkeindeksin osuus kasvoi samalla ajanjaksolla."
        },
        {
          "id": "c",
          "text": "Valtionosuusindeksin osuus kasvoi vuosina 2024–2026, kun taas kuluttajahintaindeksin osuus oli vuonna 2026 hieman pienempi kuin vuonna 2024."
        },
        {
          "id": "d",
          "text": "Yliopistoindeksin osuus pieneni vuosittain, vaikka indeksisidonnaisten valtion menojen kokonaismäärä kasvoi."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "140"
      },
      "explanation": "A on oikein. Hyvinvointialueiden hintaindeksin osuus kasvoi vuosittain. Vuonna 2026 sen osuus oli 43,00 %, kun kansaneläkeindeksin ja työeläkeindeksin osuudet olivat yhteensä 17,20 + 12,16 = 29,36 %.\nB on väärin. Kansaneläkeindeksin osuus pieneni, mutta myös työeläkeindeksin osuus pieneni.\nC on oikein. Valtionosuusindeksin osuus kasvoi 6,29 prosentista 7,98 prosenttiin. Kuluttajahintaindeksin osuus puolestaan pieneni 7,01 prosentista 6,95 prosenttiin.\nD on väärin. Yliopistoindeksin osuus kasvoi hieman 5,28 prosentista 5,31 prosenttiin.\n\nLähde:\nS. 140, taulukko 1 \"Indeksisidonnaisten valtion menojen osuus (%) indeksityypeittäin\".\nTaulukossa hyvinvointialueiden hintaindeksin osuudet ovat 41,25 %, 42,15 % ja 43,00 %. Kansaneläkeindeksin osuudet ovat 19,63 %, 17,57 % ja 17,20 % sekä työeläkeindeksin 12,54 %, 12,18 % ja 12,16 %.",
      "learningPoint": "Opiskelijan tulee vertailla taulukon prosenttiosuuksia sekä ajallisesti että eri indeksiryhmien välillä. Erityisesti tulee erottaa osuuden kasvu tai pieneneminen menojen euromääräisestä kehityksestä.\nHakuvinkki: Ctrl+F: Taulukko 1. Tarkista vuodet 2024 ja 2026 sekä laske tarvittaessa kahden indeksiryhmän osuudet yhteen."
    },
    {
      "id": "g-m10-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nPolitiikkavaihtoehdossa 3 yhden prosenttiyksikön indeksijarrua sovelletaan, kun inflaatio on vähintään kaksi prosenttia. Tästä seuraa, että mallissa 1,9 prosentin inflaatio johtaa suurempaan indeksikorotukseen kuin tasan kahden prosentin inflaatio.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "145–146"
      },
      "explanation": "Kun inflaatio on 1,9 %, kahden prosentin kynnys ei täyty, joten korotus on 1,9 %. Kun inflaatio on tasan 2,0 %, yhden prosenttiyksikön jarru aktivoituu ja korotus jää 1,0 prosenttiin.\nTutkijat huomauttavat, ettei tällainen epäjatkuvuus olisi käytännön toteutuksessa toivottava. Tutkimuksen tarkoituksena on kuitenkin havainnollistaa jarrun vaikutusten suuruusluokkaa.\n\nLähde:\nS. 145–146, taulukko 3 ja politiikkavaihtoehdon 3 tarkennus. Sivulla 146 todetaan: \"1,9 %:n inflaatio johtaa täysimääräiseen (1,9 %) indeksikorotukseen\".",
      "learningPoint": "Opiskelijan tulee tunnistaa politiikkasäännön toteutumisen ehto ja soveltaa sitä kahteen lähellä toisiaan olevaan inflaatiolukuun.\nHakuvinkki: Ctrl+F: 1,9 %:n inflaatio ja 2,0 %:n."
    },
    {
      "id": "g-m10-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tutkimuksen Monte Carlo -simuloinnin ja geometrisen Brownin liikkeen tehtäviä?",
      "options": [
        {
          "id": "a",
          "text": "Monte Carlo -menetelmä määrittää indeksien tulevat arvot historiallisten keskiarvojen perusteella ilman satunnaisuutta, kun taas geometrinen Brownin liike vertailee politiikkavaihtoehtojen poliittista hyväksyttävyyttä."
        },
        {
          "id": "b",
          "text": "Geometrinen Brownin liike määrittää valtion budjetin menoluokat, kun taas Monte Carlo -menetelmä poistaa indeksien kehityksestä satunnaisvaihtelun."
        },
        {
          "id": "c",
          "text": "Monte Carlo -menetelmällä luodaan satunnaisesti valittuihin muuttujiin perustuvia skenaarioita, ja geometrisen Brownin liikkeen avulla mallinnetaan indeksien arvojen kehitykseen liittyvää satunnaisuutta ajan kuluessa."
        },
        {
          "id": "d",
          "text": "Monte Carlo -menetelmä perustuu yksittäiseen todennäköisimpään inflaatiouraan, kun taas geometrinen Brownin liike varmistaa indeksien palautuvan aina pitkän aikavälin keskiarvoon."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "143–144",
        "section": "Aineisto ja menetelmä"
      },
      "explanation": "C on oikein. Monte Carlo -menetelmässä muodostetaan suuri määrä mahdollisia kehityspolkuja satunnaisesti valituista arvoista. Geometrinen Brownin liike kuvaa indeksien satunnaista kehitystä ajan funktiona.\nA on väärin, koska Monte Carlo -menetelmä perustuu nimenomaan satunnaisuuteen. Poliittisen hyväksyttävyyden arviointi ei ole geometrisen Brownin liikkeen tehtävä.\nB on väärin, koska mallin budjettirakenne perustuu valtion talousarvion tietoihin eikä geometriseen Brownin liikkeeseen.\nD on väärin. Tutkimuksessa tarkastellaan useita mahdollisia kehityspolkuja, eikä käytetty malli oleta indeksien palautuvan aina tietylle keskimääräiselle tasolle.\n\nLähde:\nS. 143–144, \"Aineisto ja menetelmä\". Sivulla 143 todetaan Monte Carlo -menetelmän perustuvan \"muuttujien arvojen satunnaisvalintaan\".",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksessa käytetyt menetelmät niiden oikeisiin tehtäviin ja erottaa toisistaan skenaarioiden muodostaminen sekä indeksien ajallisen kehityksen mallintaminen.\nHakuvinkki: Ctrl+F: Monte Carlo -menetelmällä ja geometrisen Brownin liikkeen."
    },
    {
      "id": "g-m10-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nTutkimuksen simulaatiomallissa negatiiviset indeksimuutokset pienentävät automaattisesti indeksisidonnaisia menoja kaikissa neljässä politiikkavaihtoehdossa. Tämän vuoksi menot voivat laskea indeksimuutosten seurauksena myös ilman erillisiä leikkauksia.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "145",
        "section": "Politiikkavaihtoehdot"
      },
      "explanation": "Väittämä on väärin, koska simulaatiomallissa negatiiviset indeksimuutokset eivät automaattisesti vähennä indeksisidonnaisia menoja.\nPolitiikkavaihtoehdoissa 1 ja 2 positiiviset indeksimuutokset voivat kasvattaa menoja, mutta negatiiviset muutokset eivät pienennä niitä.\nVaihtoehdoissa 3 ja 4 indeksikorotuksia pienennetään yhden prosenttiyksikön jarrulla, mutta indeksikorotus ei voi muuttua negatiiviseksi.\nNäin ollen väittämässä esitetty automaattinen menojen pieneneminen ei vastaa mallin oletuksia.\n\nLähde:\nS. 145, \"Politiikkavaihtoehdot\". Sivulla todetaan: \"negatiiviset muutokset eivät pienennä niitä\".",
      "learningPoint": "Opiskelijan tulee tarkistaa, miten positiiviset ja negatiiviset indeksimuutokset vaikuttavat menoihin. Erityisesti on huomattava, ettei indeksin lasku tarkoita automaattisesti menojen laskua.\nHakuvinkki: Ctrl+F: negatiiviset muutokset ja ei voi olla negatiivinen."
    },
    {
      "id": "g-m10-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista väittämistä vastaavat taulukon 4 simulaatiotuloksia vuodelle 2035? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Politiikkavaihtoehdossa 4 vuoden 2035 odotetut menot ovat pienemmät kuin vaihtoehdossa 3, ja myös kumulatiivinen menokertymä on pienempi."
        },
        {
          "id": "b",
          "text": "Politiikkavaihtoehdossa 2 vuoden 2035 odotetut menot ovat noin 1,07 miljardia euroa pienemmät kuin vaihtoehdossa 1."
        },
        {
          "id": "c",
          "text": "Politiikkavaihtoehdossa 3 kumulatiivinen menokertymä on pienempi kuin vaihtoehdossa 4, vaikka vuoden 2035 menot ovat suuremmat."
        },
        {
          "id": "d",
          "text": "Politiikkavaihtoehdossa 1 vuoden 2035 odotetut menot ovat pienemmät kuin vaihtoehdossa 2, mutta kumulatiivinen menokertymä on suurempi."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "147"
      },
      "explanation": "A on oikein. Vaihtoehdon 4 menot ja kumulatiivinen kertymä ovat molemmat pienempiä kuin vaihtoehdossa 3.\nB on oikein, koska 73,78 − 72,71 = 1,07 miljardia euroa.\nC on väärin, sillä vaihtoehdon 3 kumulatiivinen kertymä on 722,42 miljardia euroa eli suurempi kuin vaihtoehdon 4 kertymä 713,71 miljardia euroa.\nD on väärin, koska vaihtoehdon 1 menot ovat vuonna 2035 suuremmat kuin vaihtoehdon 2 menot.\n\nLähde:\nS. 147, taulukko 4 \"Simulaation tulokset\".\nTaulukossa vuoden 2035 menojen odotusarvot ovat vaihtoehdoissa 1–4 vastaavasti 73,78; 72,71; 69,88 ja 68,32 miljardia euroa. Kumulatiiviset kertymät ovat 740,86; 736,14; 722,42 ja 713,71 miljardia euroa.",
      "learningPoint": "Opiskelijan tulee verrata politiikkavaihtoehtojen menotasoja ja kumulatiivisia kertymiä. Yhden vuoden menot ja koko ajanjakson menokertymä on pidettävä erillään.\nHakuvinkki: Ctrl+F: Taulukko 4. Vertaa sarakkeita \"Menot vuonna 2035\" ja \"Kumulatiivinen kertymä\"."
    },
    {
      "id": "g-m10-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä aiempien tutkimusten tuloksia?",
      "options": [
        {
          "id": "a",
          "text": "Biggsin, Brownin ja Springsteadin (2005) tutkimuksessa hintasidonnaisen indeksoinnin todettiin hillitsevän menojen kasvua mutta pienentävän tulevien sukupolvien etuuksia suhteessa palkkoihin."
        },
        {
          "id": "b",
          "text": "De la Fuenten (2020) tutkimuksessa eläkkeiden indeksointiin liittyvien päätösten pitkän aikavälin kustannukset saattoivat kasvaa moninkertaisiksi välittömiin vaikutuksiin verrattuna."
        },
        {
          "id": "c",
          "text": "Bánkowskin ym. (2023) tutkimuksessa inflaation nousun havaittiin voivan heikentää euroalueen maiden budjettitasapainoa, vaikka nimelliset verotulot kasvaisivat."
        },
        {
          "id": "d",
          "text": "Cornillen ym. (2023) tutkimuksessa tarkasteltiin Espanjan eläkejärjestelmän indeksisääntöjä ja osoitettiin väliaikaisiksi tarkoitettujen eläkekorotusten pitkän aikavälin kustannusten kasvavan moninkertaisiksi."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "137–138",
        "section": "Katsaus relevanttiin kirjallisuuteen"
      },
      "explanation": "A on oikein. Hintasidonnaisuus hillitsi menojen kasvua, mutta samalla tulevien etuuksien suhteellinen taso palkkoihin nähden pieneni.\nB on oikein. De la Fuente tarkasteli Espanjan eläkejärjestelmää ja indeksointipäätösten pitkäaikaisia kustannuksia.\nC on oikein. Bánkowskin ym. tulokset osoittivat, ettei verotulojen kasvu välttämättä kompensoi indeksoinnin synnyttämiä menopaineita.\nD on väärin, koska se liittää Espanjan eläkejärjestelmää koskevan havainnon Belgian julkistaloutta tutkineeseen Cornillen ym. tutkimukseen.\n\nLähde:\nS. 137–138, \"Katsaus relevanttiin kirjallisuuteen\". Sivulla 137 Cornillen ym. tutkimus yhdistetään Belgian julkiseen talouteen, kun taas Espanjan eläkejärjestelmää käsittelevä tutkimus on De la Fuenten (2020).",
      "learningPoint": "Opiskelijan tulee yhdistää aiempi tutkimus oikeaan kohdemaan, tutkimuskysymykseen ja tulokseen. Väärä vaihtoehto sisältää artikkelissa esitetyn havainnon mutta liittää sen väärään tutkimukseen.\nHakuvinkki: Ctrl+F: Cornille, De la Fuente ja Biggs."
    },
    {
      "id": "g-m10-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Oikein vai väärin?\nTutkimuksessa käytetty geometrinen Brownin liike poikkeaa artikkelissa kuvatuista stationaarisista prosesseista siten, ettei sen mallinnuksessa oleteta shokkien vaikutusten aina palautuvan nopeasti ennalta määrätyn pitkän aikavälin tason ympärille.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "144",
        "section": "Aineisto ja menetelmä"
      },
      "explanation": "Tutkijat vertaavat malliaan stationaarisiin prosesseihin, joissa poikkeamat pitkän aikavälin tasosta oletetaan väliaikaisiksi. Tässä tutkimuksessa shokit voivat vaikuttaa myöhempien kehityspolkujen mahdollisuuksiin pidempään, ja epävarmuus kasvaa ajan myötä.\n\nLähde:\nS. 144, \"Aineisto ja menetelmä\". Ratkaiseva lainaus: \"shokit muuttavat koko tulevien mahdollisuuksien avaruutta\".",
      "learningPoint": "Opiskelijan tulee yhdistää kahden mallinnustavan erot niiden oletuksiin shokkien vaikutuksista. Erityisesti tulee erottaa väliaikainen poikkeama pitkäkestoisesti muuttuvasta kehityspolusta.\nHakuvinkki: Ctrl+F: stationaarisia prosesseja ja itsekorjautuvuuteen."
    },
    {
      "id": "g-m10-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin tutkimuksen simulaatiotulosten tulkintaan liittyviä rajauksia?",
      "options": [
        {
          "id": "a",
          "text": "Simulaatiotulokset sisältävät indeksisidonnaisten menojen lisäksi verotulojen muutokset, joten niiden perusteella voidaan arvioida suoraan valtiontalouden rakenteellista tasapainoa."
        },
        {
          "id": "b",
          "text": "Simulaatiotulokset osoittavat, miten indeksisidonnaiset menot kehittyvät erilaisissa skenaarioissa, mutta ne eivät sisällä harkinnanvaraisia menolisäyksiä tai -leikkauksia eivätkä julkisen talouden tulopuolen dynamiikkaa."
        },
        {
          "id": "c",
          "text": "Simulaatiotulokset ennustavat vuoden 2035 toteutuvat valtion menot, koska Monte Carlo -menetelmä poistaa tulevaisuuden inflaatioon liittyvän epävarmuuden."
        },
        {
          "id": "d",
          "text": "Simulaatiotulokset kattavat kaikki valtion menot riippumatta indeksisidonnaisuudesta, minkä vuoksi tulokset voidaan suoraan tulkita koko valtion budjetin kehitykseksi."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "147 ja 149",
        "section": "Tulokset"
      },
      "explanation": "B on oikein. Tutkimus tarkastelee valittujen indeksisidonnaisten menojen mahdollisia kehityspolkuja ja politiikkavaihtoehtojen vaikutuksia niihin.\nA on väärin, koska tulopuolen dynamiikkaa ei ole sisällytetty malliin.\nC on väärin, koska simulaatiot kuvaavat mahdollisia tulevaisuuksia eivätkä poista epävarmuutta.\nD on väärin, koska malli keskittyy indeksisidonnaisiin menoihin, ei kaikkiin valtion budjettimenoihin.\n\nLähde:\nS. 147 ja 149, \"Tulokset\" ja \"Yhteenveto\". Sivulla 147 todetaan: \"Tulokset kuvaavat ainoastaan automaattisia indeksisidonnaisia budjettikorotuksia\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, mitä mallissa on mukana ja mitä siitä on rajattu pois. Menopuolen projektioita ei saa tulkita suoraan koko julkisen talouden ennusteiksi.\nHakuvinkki: Ctrl+F: ainoastaan automaattisia ja tulopuolen dynamiikkaa."
    },
    {
      "id": "g-m10-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin taulukon 4 tuloksia ja politiikkavaihtoehtojen välisiä eroja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Vaihtoehdon 4 vuoden 2035 odotetut menot ovat yli viisi miljardia euroa pienemmät kuin vaihtoehdossa 1, ja kumulatiivinen menokertymä on yli 25 miljardia euroa pienempi."
        },
        {
          "id": "b",
          "text": "Vaihtoehtojen 1 ja 2 vuoden 2035 odotettujen menojen erotus on suurempi kuin vaihtoehtojen 3 ja 4 vastaava erotus."
        },
        {
          "id": "c",
          "text": "Vaihtoehdon 3 kumulatiivinen menokertymä on yli kahdeksan miljardia euroa suurempi kuin vaihtoehdossa 4, vaikka kummassakin käytetään kaikkia indeksisidonnaisia menoja koskevaa sääntöpohjaista jarrua."
        },
        {
          "id": "d",
          "text": "Vaihtoehdon 2 kumulatiivinen menokertymä on yli 20 miljardia euroa pienempi kuin vaihtoehdossa 1, koska nykyisiä jäädytyksiä jatketaan vuoteen 2035."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "145 ja 147"
      },
      "explanation": "A on oikein. Vaihtoehtojen 1 ja 4 vuoden 2035 menojen erotus on 73,78 − 68,32 = 5,46 miljardia euroa. Kumulatiivisten menojen erotus on 740,86 − 713,71 = 27,15 miljardia euroa.\nB on väärin. Vaihtoehtojen 1 ja 2 erotus on 1,07 miljardia euroa, kun vaihtoehtojen 3 ja 4 erotus on 1,56 miljardia euroa.\nC on oikein. Vaihtoehdon 3 kumulatiivinen kertymä on 722,42 miljardia euroa ja vaihtoehdon 4 kertymä 713,71 miljardia euroa. Erotus on 8,71 miljardia euroa. Molemmissa vaihtoehdoissa käytetään kaikkia indeksisidonnaisia menoja koskevaa jarrua, mutta vaihtoehdossa 3 jarru aktivoituu vain vähintään kahden prosentin inflaatiolla.\nD on väärin. Vaihtoehtojen 1 ja 2 kumulatiivisten kertymien erotus on taulukon pyöristetyistä arvoista laskettuna 4,72 miljardia euroa, ei yli 20 miljardia euroa. Artikkelin leipätekstissä vastaavaksi erotukseksi ilmoitetaan noin 4,74 miljardia euroa, mikä ei muuta väittämän virheellisyyttä.\n\nLähde:\nS. 145 ja 147, taulukot 3 ja 4.\nTaulukon 4 mukaan:",
      "learningPoint": "Opiskelijan tulee laskea politiikkavaihtoehtojen välisiä erotuksia ja yhdistää tulokset politiikkasääntöihin. Yhden vuoden menot ja koko ajanjakson kertymä on erotettava toisistaan.\nHakuvinkki: Ctrl+F: Taulukko 4 ja Politiikkavaihtoehto 4."
    },
    {
      "id": "g-m10-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nPolitiikkavaihtoehdossa 3 yhden prosenttiyksikön indeksijarru koskee kaikkia indeksisidonnaisia menoja, mutta sitä sovelletaan vain vähintään kahden prosentin inflaation aikana. Politiikkavaihtoehdossa 4 sama jarru on voimassa inflaatiotasosta riippumatta. Näiden sääntöjen perusteella vaihtoehto 4 voi hillitä menojen kasvua myös tilanteissa, joissa vaihtoehdon 3 jarru ei aktivoidu.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "145–146"
      },
      "explanation": "Vaihtoehdot 3 ja 4 koskevat molemmat kaikkia indeksisidonnaisia menoja, mutta niiden aktivointiehdot eroavat toisistaan.\nVaihtoehdossa 3 jarru aktivoituu vasta inflaation ollessa vähintään kaksi prosenttia. Vaihtoehdossa 4 korotusta pienennetään yhdellä prosenttiyksiköllä inflaatiosta riippumatta, mutta indeksikorotus ei voi muuttua negatiiviseksi.\nEsimerkiksi 1,5 prosentin inflaatiolla vaihtoehdon 3 jarru ei aktivoidu, mutta vaihtoehdossa 4 korotus jää 0,5 prosenttiin.\n\nLähde:\nS. 145–146, taulukko 3 ja politiikkavaihtoehtojen tarkennukset. Sivulla 145 todetaan vaihtoehdosta 4: \"kahden prosentin sääntöä ei ole\".",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi samankaltaista sääntöä ja tarkistaa niiden soveltamisehdot. Erityisesti tulee huomata, että sama vähennys voi tuottaa erilaisen lopputuloksen aktivointiehdon vuoksi.\nHakuvinkki: Ctrl+F: kahden prosentin sääntöä ja Indeksikorotus ei voi."
    },
    {
      "id": "g-m10-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein tutkimuksen taulukossa 2 esitetyt indeksien kasvu- ja volatiliteettiarvot sekä niiden merkityksen?",
      "options": [
        {
          "id": "a",
          "text": "Kotimarkkinoiden perushintaindeksillä on tarkastelluista indekseistä pienin volatiliteetti, vaikka sen keskimääräinen kasvu on suurin."
        },
        {
          "id": "b",
          "text": "Ansiotasoindeksin volatiliteetti on suurempi kuin kuluttajahintaindeksin, vaikka sen keskimääräinen kasvu on hieman pienempi."
        },
        {
          "id": "c",
          "text": "Teollisuuden tuottajahintaindeksin kasvu on pienempi kuin ansiotasoindeksin, mutta sen volatiliteetti on suurempi kuin kotimarkkinoiden perushintaindeksin."
        },
        {
          "id": "d",
          "text": "Kotimarkkinoiden perushintaindeksillä on tarkastelluista indekseistä sekä suurin kasvu että suurin volatiliteetti, kun taas ansiotasoindeksillä on pienin volatiliteetti."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "143"
      },
      "explanation": "D on oikein. Kotimarkkinoiden perushintaindeksin molemmat parametriarvot ovat taulukon suurimmat, ja ansiotasoindeksin volatiliteetti on pienin.\nA on väärin, koska kotimarkkinoiden perushintaindeksillä on suurin, ei pienin, volatiliteetti.\nB on väärin, koska ansiotasoindeksin volatiliteetti 0,95 on pienempi kuin kuluttajahintaindeksin 2,12.\nC on väärin, koska teollisuuden tuottajahintaindeksin kasvu 2,21 on suurempi kuin ansiotasoindeksin 2,04, ja sen volatiliteetti 2,51 on pienempi kuin kotimarkkinoiden perushintaindeksin 6,01.\n\nLähde:\nS. 143, taulukko 2 \"Mallin parametriarvot\".\nTaulukossa kotimarkkinoiden perushintaindeksin kasvu on 2,73 ja volatiliteetti 6,01. Ansiotasoindeksin kasvu on 2,04 ja volatiliteetti 0,95.",
      "learningPoint": "Opiskelijan tulee vertailla kahden eri parametrin arvoja useiden indeksien välillä. Kasvu ja volatiliteetti kuvaavat eri asioita, eikä suurempi kasvu automaattisesti tarkoita suurempaa volatiliteettia.\nHakuvinkki: Ctrl+F: Taulukko 2 ja vertaa sarakkeita \"Kasvu\" ja \"Volatiliteetti\"."
    },
    {
      "id": "g-m10-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nTutkijoiden mukaan politiikkavaihtoehdot 3 ja 4 tuottavat simulaatiossa selvästi suuremman menojen kasvua hillitsevän vaikutuksen kuin nykyisten jäädytysten jatkaminen. Tästä huolimatta tutkimuksen tarkoituksena ei ole suositella kyseisiä vaihtoehtoja poliittisiksi päätöksiksi, vaan havainnollistaa niiden mahdollisia taloudellisia vaikutuksia.",
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "148",
        "section": "Tulokset"
      },
      "explanation": "Vaihtoehdot 3 ja 4 vähentävät simuloitujen indeksisidonnaisten menojen kasvua enemmän kuin vaihtoehdot 1 ja 2. Tutkijat kuitenkin erottavat taloudellisten vaikutusten arvioinnin poliittisesta päätöksenteosta.\nArtikkelissa ei käsitellä kattavasti politiikkatoimien sosiaalisia ja poliittisia tavoitteita, joten simulaation perusteella ei tehdä suoraa politiikkasuositusta.\n\nLähde:\nS. 148, \"Tulokset\". Sivulla 148 todetaan: \"emme ehdota tai suosittele politiikkatoimenpiteitä\".",
      "learningPoint": "Opiskelijan tulee erottaa tutkimustuloksen osoittama taloudellinen vaikutus tutkijoiden esittämästä politiikkasuosituksesta. Vaikutusten vertailu ei sellaisenaan tarkoita tietyn vaihtoehdon suosittelemista.\nHakuvinkki: Ctrl+F: emme ehdota tai suosittele ja selvästi näkyvämmän."
    },
    {
      "id": "g-m10-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä simulaatiomallin oletuksia ja rajoituksia?",
      "options": [
        {
          "id": "a",
          "text": "Mallissa joidenkin budjettikohtien indeksisidonnaisten osuuksien oletetaan pysyvän kiinteinä koko simulointijakson ajan, vaikka niiden todelliset osuudet voivat muuttua vuosittain."
        },
        {
          "id": "b",
          "text": "Hyvinvointialueiden hintaindeksin yksinkertaistetussa mallinnuksessa käytetään ansiotasoindeksiä painolla 0,7 ja kuluttajahintaindeksiä painolla 0,3."
        },
        {
          "id": "c",
          "text": "Kuluttajahintaindeksille ja elinkustannusindeksille käytetään samaa simulaatiota, eikä niiden tulevaa kehitystä mallinneta erikseen."
        },
        {
          "id": "d",
          "text": "Mallissa hyvinvointialueiden hintaindeksi muodostetaan suoraan ansiotasoindeksistä, kuluttajahintaindeksistä ja sosiaaliturvamaksuista niiden alkuperäisillä painoilla 0,6, 0,3 ja 0,1."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "157–158"
      },
      "explanation": "A on oikein. Osittain indeksisidonnaisten budjettikohtien osuudet pidetään mallissa kiinteinä, vaikka todellisuudessa ne voivat vaihdella.\nB on oikein. Mallissa hyvinvointialueiden hintaindeksi yksinkertaistetaan kahteen osatekijään, joiden painot ovat 0,7 ja 0,3.\nC on oikein. Kuluttajahintaindeksin ja elinkustannusindeksin tulevaa kehitystä ei erotella mallinnuksessa.\nD on väärin. Se kuvaa hyvinvointialueiden hintaindeksin alkuperäistä muodostumista mutta ei tutkimuksessa käytettyä yksinkertaistettua laskentatapaa. Mallissa sosiaaliturvamaksuja ei käsitellä erillisenä osatekijänä.\n\nLähde:\nS. 157–158, liitteet 2 ja 3. Sivulla 158 todetaan: \"Yksinkertaisuuden vuoksi laskemme indeksin kahdesta ensimmäisestä kertoimilla 0,7 ja 0,3.\"",
      "learningPoint": "Opiskelijan tulee erottaa indeksin todellinen muodostumisperiaate tutkimuksessa käytetystä mallinnusoletuksesta. Väärä vaihtoehto sisältää artikkelissa esiintyvät oikeat painot mutta liittää ne väärään laskentatilanteeseen.\nHakuvinkki: Ctrl+F: Yksinkertaisuuden vuoksi ja Hyvinvointialueiden hintaindeksi."
    },
    {
      "id": "g-m10-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Rissasen, Savolaisen ja Collanin tutkimuksen tulosten ja rajoitusten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Pitkäkestoiset, kaikkia indeksisidonnaisia menoja koskevat sääntöpohjaiset jarrut voivat hillitä simuloitua menojen kasvua enemmän kuin nykyisten rajattujen jäädytysten jatkaminen, mutta tämä ei yksin osoita niiden olevan yhteiskunnallisesti paras politiikkavaihtoehto."
        },
        {
          "id": "b",
          "text": "Koska simulaatiomalli huomioi inflaation epävarmuuden, sen avulla voidaan arvioida suoraan myös valtion verotulojen kehitystä ja julkisen talouden rakenteellista kestävyyttä."
        },
        {
          "id": "c",
          "text": "Tutkimuksen tulosten perusteella väliaikaisten indeksijarrujen vaikutus voi jäädä vähäiseksi, jos ne ajoittuvat matalan inflaation kauteen, mikä tukee pidemmän aikavälin vaikutusten tarkastelua."
        },
        {
          "id": "d",
          "text": "Koska vaihtoehto 4 tuottaa pienimmän odotetun menotason vuonna 2035, tutkijat osoittavat sen olevan kaikissa mahdollisissa taloudellisissa tilanteissa yksiselitteisesti paras ratkaisu myös etuudensaajien ostovoiman kannalta."
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
        "articleId": "suomen-valtion-indeksisidonnaisten-menojen-tarkastelu-simulaatiomallilla",
        "page": "142, 148–149",
        "section": "Indeksisidonnaisuuksien muuttamisesta"
      },
      "explanation": "A on oikein. Vaihtoehdot 3 ja 4 tuottavat simulaatiossa suurempia menojen kasvua hillitseviä vaikutuksia kuin vaihtoehdot 1 ja 2. Tutkimuksessa ei kuitenkaan arvioida kaikkia vaihtoehtojen yhteiskunnallisia vaikutuksia eikä esitetä poliittista suositusta.\nB on väärin. Mallissa tarkastellaan indeksisidonnaisten menojen kehitystä. Verotulojen dynamiikkaa ei ole sisällytetty malliin, ja sen lisääminen esitetään jatkotutkimusmahdollisuutena.\nC on oikein. Lyhytaikaisen indeksijarrun vaikutus riippuu sen ajoittumisesta. Jos inflaatio pysyy maltillisena, jarru voi tuottaa vain vähäisiä säästöjä. Tämä tukee pitkäkestoisten vaikutusten tarkastelun merkitystä.\nD on väärin. Vaihtoehto 4 tuottaa pienimmän simuloidun menotason, mutta tutkimus ei osoita sen olevan kaikissa tilanteissa paras. Etuudensaajien ostovoimavaikutusten tarkempi arviointi jää jatkotutkimuksen mahdollisuudeksi.\n\nLähde:\nS. 142, 148–149, \"Indeksisidonnaisuuksien muuttamisesta\", \"Tulokset\" ja \"Yhteenveto\". Sivulla 142 todetaan maltillisen inflaation aikana indeksijarrun vaikutuksen voivan jäädä \"käytännössä hyvinkin pieneksi\". Sivulla 149 todetaan poliittisten ja sosiaalisten tavoitteiden jääneen tarkastelun ulkopuolelle.",
      "learningPoint": "Opiskelijan tulee erottaa simulaatiotuloksista tehtävät perustellut päätelmät perusteettomista yleistyksistä. Erityisesti on tarkistettava, milloin menojen kasvun hillitseminen muutetaan väitteeksi politiikkavaihtoehdon kokonaisvaltaisesta paremmuudesta.\nHakuvinkki: Ctrl+F: poliittiset ja sosiaaliset tavoitteet, tulopuolen dynamiikkaa ja maltillisena."
    }
  ]
} satisfies ValintakoeGExercise;
