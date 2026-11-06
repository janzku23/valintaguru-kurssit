import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 18: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise18Base = {
  "id": "keskivaikea-harjoitus-18",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 18 – Hiljentyvät kansalaiset: Kokemuksia kärjistyneestä keskusteluilmapiiristä ja median roolista",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "hiljentyvat-kansalaiset",
  "articleTitle": "Hiljentyvät kansalaiset: Kokemuksia kärjistyneestä keskusteluilmapiiristä ja median roolista",
  "articleUrl": "https://journal.fi/mediaviestinta/article/view/178430/126183",
  "questions": [
    {
      "id": "g-m18-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein tutkimuksen aineistoa ja analyysimenetelmää? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kansalaiskyselyyn vastasi 1 000 henkilöä, ja otosta painotettiin muun muassa iän, sukupuolen ja asuinalueen mukaan vastaamaan Suomen väestöä."
        },
        {
          "id": "b",
          "text": "Kaikki 1 000 kyselyvastausta sisällytettiin avoimen kysymyksen laadulliseen analyysiin, ja tekoäly määritteli lopulliset aiheluokat ilman tutkijoiden tekemää uudelleenluokittelua."
        },
        {
          "id": "c",
          "text": "Avoimen kysymyksen analyysiin valittiin 532 vastausta, ja Copilotin tekemää alustavaa ryhmittelyä käytettiin apuna ennen tutkijoiden lähilukua ja luokkien uudelleenmuodostamista."
        },
        {
          "id": "d",
          "text": "Tutkimuksen keskeinen aineisto kerättiin kasvokkaisilla haastatteluilla, joiden tulokset analysoitiin vain tilastollisesti."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "34–35",
        "section": "Aineisto ja menetelmä"
      },
      "explanation": "A on oikein. Kyselyyn vastasi 1 000 henkilöä, ja otosta painotettiin iän, sukupuolen, asuinpaikkakunnan ja maakunnan mukaan.\nB on väärin. Laadulliseen analyysiin otettiin 532 vastausta, ja tutkijat muokkasivat tekoälyn alustavia ryhmittelyjä lähilukemalla.\nC on oikein. Copilot auttoi kokonaiskuvan muodostamisessa, mutta lopulliset luokat rakennettiin tutkijoiden tekemän analyysin perusteella.\nD on väärin. Tiedonkeruu toteutettiin internetissä, ja aineistossa oli sekä määrällisiä että laadullisia vastauksia.\n\nLähde:\nS. 34–35, ”Aineisto ja menetelmä”.\nRatkaiseva lainaus, s. 35: ”Kaikkiaan analysoitiin 532 vastausta.”",
      "learningPoint": "Opiskelijan tulee erottaa koko kyselyaineiston koko laadullisesti analysoidun aineiston koosta sekä yhdistää luvut oikeisiin menetelmiin.\nHakuvinkki: Ctrl+F: 532 vastausta ja Tuhat suomalaista."
    },
    {
      "id": "g-m18-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nArtikkelissa affektiivinen polarisaatio liitetään tunnepohjaiseen vastakkainasetteluun ja ryhmäidentiteetteihin. Sen vuoksi yhteiskunnallinen keskustelu voi kärjistyä myös sellaisissa sosiokulttuurisissa kysymyksissä, jotka eivät alun perin ole puoluepoliittisia mutta voivat kytkeytyä poliittisiin identiteetteihin.",
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "33"
      },
      "explanation": "Affektiivinen polarisaatio liittyy tunteisiin, ryhmäidentiteetteihin ja me vastaan ne -ajatteluun. Artikkelissa mainitaan esimerkiksi maahanmuutto, ilmastonmuutos, ravinto ja seksuaalinen suuntautuminen.\n\nLähde:\nS. 33, johdanto.\nRatkaiseva lainaus: ”Affektiivista vastakkainasettelua ilmenee nykyään usein poliittisten erimielisyyksien lisäksi sosiokulttuurisissa aiheissa”.",
      "learningPoint": "Opiskelijan tulee yhdistää affektiivisen polarisaation määritelmä siihen, millaisissa aiheissa vastakkainasettelua voi esiintyä.\nHakuvinkki: Ctrl+F: affektiivisen ja sosiokulttuurisissa."
    },
    {
      "id": "g-m18-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein tutkimuksen kolme kysymystä ja niiden tarkoitukset?",
      "options": [
        {
          "id": "a",
          "text": "Ensimmäinen kysymys kartoitti toimittajien puolueettomuutta avoimilla vastauksilla, toinen mittasi keskusteluhalukkuutta asteikolla ja kolmas pyysi nimeämään hankalia aiheita."
        },
        {
          "id": "b",
          "text": "Ensimmäinen kysymys selvitti osallistumishalukkuuteen vaikuttavia tekijöitä väittämillä, toinen kartoitti avoimesti hankalia keskusteluaiheita ja niiden syitä, ja kolmas käsitteli toimittajien toimintaa erimielisyyttä herättävissä aiheissa."
        },
        {
          "id": "c",
          "text": "Ensimmäinen ja toinen kysymys olivat avoimia, mutta kolmas perustui haastatteluihin journalistisen median edustajien kanssa."
        },
        {
          "id": "d",
          "text": "Kaikki kolme kysymystä olivat väitemuotoisia, jotta tuloksia voitiin vertailla keskenään samalla viisiportaisella asteikolla."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "35",
        "section": "Aineisto ja menetelmä"
      },
      "explanation": "B on oikein. Se yhdistää kysymysten järjestyksen, vastausmuodot ja tutkimukselliset tavoitteet oikein.\nA on väärin. Kysymysten sisällöt ja vastausmuodot on vaihdettu keskenään.\nC on väärin. Tutkimuksen kysymykset esitettiin kansalaiskyselyssä, ei toimittajahaastatteluissa.\nD on väärin. Toinen kysymys oli avoin eikä viisiportaisella asteikolla vastattava.\n\nLähde:\nS. 35, ”Aineisto ja menetelmä”.\nRatkaiseva lainaus: ”Kysymykset 1 ja 3 esitettiin väitemuodossa ja kysymys 2 avoimena.”",
      "learningPoint": "Opiskelijan tulee yhdistää kysymysten numerot niiden oikeisiin sisältöihin ja vastausmuotoihin.\nHakuvinkki: Ctrl+F: Kysely sisälsi kolme kysymystä."
    },
    {
      "id": "g-m18-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nAvoimen kysymyksen vastausten perusteella henkilökohtainen kosketus keskusteluaiheeseen saattoi lisätä sen kokemista hankalaksi. Pelkkä omakohtainen kosketus ei kuitenkaan riittänyt, sillä hankaluuteen liittyivät usein myös arvot, identiteetti ja ongelmalliseksi koettu keskusteluilmapiiri.",
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "38",
        "section": "Hankalat aiheet ja osallistumisen esteet"
      },
      "explanation": "Tutkimuksessa esimerkiksi työttömyys koettiin henkilökohtaisesti hankalammaksi kuin työmarkkinat yleisenä ilmiönä. Samalla teknologiaa ja digitalisaatiota ei mainittu hankalina aiheina, vaikka ne ovat osa monien arkea.\n\nLähde:\nS. 38, ”Hankalat aiheet ja osallistumisen esteet”.\nRatkaiseva lainaus: ”Pelkkä mikrotason kosketus ei kuitenkaan riittänyt tekemään aiheesta hankalaa.”",
      "learningPoint": "Opiskelijan tulee erottaa hankaluutta mahdollisesti lisäävä tekijä sellaisesta ehdosta, joka yksin riittäisi selittämään hankaluuden.\nHakuvinkki: Ctrl+F: mikrotason kosketus ja keskustelukulttuurin."
    },
    {
      "id": "g-m18-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista väittämistä vastaavat taulukon 3 tietoja hankaliksi koetuista aihepiireistä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Politiikka oli yleisin aihepiiri 206 maininnalla, mutta pelkkä ”politiikka” mainittiin 172 kertaa."
        },
        {
          "id": "b",
          "text": "Moninaisuus/yhdenvertaisuus ja elämänkatsomus saivat yhteensä vähemmän mainintoja kuin pelkkä ”politiikka”."
        },
        {
          "id": "c",
          "text": "Ympäristö/kestävyys ja konflikti/turvallisuus saivat yhtä monta mainintaa, ja molempien prosenttiosuudeksi ilmoitettiin 11 prosenttia."
        },
        {
          "id": "d",
          "text": "Maahanmuutto mainittiin useammin kuin moninaisuus/yhdenvertaisuus, mutta harvemmin kuin elämänkatsomus."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "39"
      },
      "explanation": "A on oikein. Politiikka-aihepiirin kokonaismäärä on 206, josta pelkän politiikan mainintoja on 172.\nB on väärin. Moninaisuuden 111 ja elämänkatsomuksen 88 mainintaa muodostavat yhteensä 199 mainintaa, mikä ylittää 172.\nC on oikein. Molemmilla aihepiireillä oli 59 mainintaa ja 11 prosentin osuus.\nD on väärin. Maahanmuuton 73 mainintaa on vähemmän kuin moninaisuuden 111 mainintaa.\n\nLähde:\nS. 39, taulukko 3.\nRatkaisevat tiedot: politiikka N=206, pelkkä politiikka N=172, ympäristö/kestävyys N=59 ja konflikti/turvallisuus N=59.",
      "learningPoint": "Opiskelijan tulee vertailla taulukon lukumääriä sekä tarvittaessa yhdistää kahden aihepiirin luvut ennen vastaamista.\nHakuvinkki: Siirry sivun 39 taulukkoon 3 ja vertaa saraketta Määrä (N)."
    },
    {
      "id": "g-m18-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein taulukon 1 alkuperäisilmaukset ja niistä muodostetut yläluokat?",
      "options": [
        {
          "id": "a",
          "text": "Huono perustietämys ja mustavalkoinen ajattelu sijoitettiin negatiiviseen sosiaaliseen leimaamiseen, kun taas työpaikalla leimautumisen pelko sijoitettiin argumentoinnin vaikeuksiin."
        },
        {
          "id": "b",
          "text": "Henkilökohtaiset asiat sijoitettiin tiedolliseen ja sosiaaliseen eriytymiseen, kun taas konsensuksesta poikkeaminen sijoitettiin henkilökohtaisuuteen ja yksityisyyteen."
        },
        {
          "id": "c",
          "text": "Sosiaalisen median maalittaminen sijoitettiin vuorovaikutuksen ongelmiin, kun taas keskustelukumppanin kuuntelemattomuus sijoitettiin sosiaalisen median vaikutukseen."
        },
        {
          "id": "d",
          "text": "Huono perustietämys ja jankkaaminen sijoitettiin argumentoinnin ja tietämättömyyden vaikeuksiin, kun taas työpaikalla leimautumisen pelko sijoitettiin negatiiviseen sosiaaliseen leimaamiseen."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "36"
      },
      "explanation": "D on oikein. Molemmat alkuperäisilmaukset on yhdistetty oikeisiin yläluokkiin.\nA on väärin. Yläluokat on vaihdettu keskenään.\nB on väärin. Henkilökohtaiset asiat kuuluvat henkilökohtaisuuteen ja yksityisyyteen, konsensuksesta poikkeaminen tiedolliseen ja sosiaaliseen eriytymiseen.\nC on väärin. Sosiaalisen median maalittaminen kuuluu sosiaalisen median vaikutukseen, kuuntelemattomuus vuorovaikutuksen ja ymmärretyksi tulemisen ongelmiin.\n\nLähde:\nS. 36, taulukko 1.\nRatkaisevat ilmaukset: ”Huono perustietämys” ja ”En halua leimaantua työpaikalla”.",
      "learningPoint": "Opiskelijan tulee yhdistää laadullisen analyysin alkuperäisilmaukset oikeisiin yläluokkiin. Taulukon käsitteiden tunnistaminen ei yksin riitä.\nHakuvinkki: Siirry sivun 36 taulukkoon 1 ja vertaa sarakkeita Alkuperäisilmaukset ja Yläluokat."
    },
    {
      "id": "g-m18-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista väittämistä vastaavat taulukon 4 tuloksia osallistumishalukkuuteen vaikuttavista tekijöistä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Julkisen keskusteluilmapiirin kärjistyneeksi kokeneiden osuus oli suurin 25–34-vuotiaiden ikäryhmässä, jossa täysin tai jokseenkin samaa mieltä oli yhteensä 90 prosenttia."
        },
        {
          "id": "b",
          "text": "Arvostelun tai kiusan kohteeksi joutumista pelkäävien osuus oli suurin 65 vuotta täyttäneillä, vaikka he kokivat keskusteluilmapiirin nuoria harvemmin kärjistyneeksi."
        },
        {
          "id": "c",
          "text": "Riittämätön tieto vähensi keskusteluhalukkuutta useammin 18–24-vuotiailla kuin 35–64-vuotiailla, kun verrataan täysin tai jokseenkin samaa mieltä olleiden osuuksia."
        },
        {
          "id": "d",
          "text": "Lähipiiristä poikkeava näkemys vaikutti 25–34-vuotiaiden osallistumishalukkuuteen harvemmin kuin 65 vuotta täyttäneiden, kun tarkastellaan samaa mieltä olleita."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "39–41"
      },
      "explanation": "A on oikein. Taulukossa 25–34-vuotiaista 38 % oli täysin ja 52 % jokseenkin samaa mieltä, yhteensä 90 %. Tekstissä osuudeksi ilmoitetaan 89 %, joten kysymys perustuu taulukon pyöristettyihin lukuihin.\nB on väärin. Arvostelun pelko oli yleisintä nuorimmassa ikäryhmässä, jossa vastaava osuus oli 51 %. Vanhimmassa ryhmässä osuus oli 16 %.\nC on oikein. Riittämättömän tiedon osuus oli 18–24-vuotiailla 52 % ja 35–64-vuotiailla 25 %.\nD on väärin. Lähipiiristä poikkeavan näkemyksen osuudet olivat 25–34-vuotiailla 39 % ja 65 vuotta täyttäneillä 18 %.\n\nLähde:\nS. 39–41, taulukko 4 ja osallistumisen esteitä käsittelevä teksti.\nRatkaiseva lainaus, s. 39: ”kokemus oli erityisen vahva 25–34-vuotiaiden ikäryhmässä”.",
      "learningPoint": "Opiskelijan tulee laskea yhteen kaksi vastausluokkaa ja verrata ikäryhmien osuuksia. Erityisesti tulee tarkistaa, verrataanko täysin samaa mieltä olleita vai kaikkia samaa mieltä olleita.\nHakuvinkki: Taulukko 4, s. 40. Laske yhteen sarakkeet Täysin samaa mieltä ja Jokseenkin samaa mieltä."
    },
    {
      "id": "g-m18-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nAvoimen kysymyksen vastauksissa mediaan kohdistui pääosin kriittisiä kommentteja. Tutkijoiden mukaan näistä kommenteista ei kuitenkaan voida päätellä vastaajien yleistä suhtautumista mediaan, koska kysymys käsitteli keskusteluun osallistumisen hankaluuksia ja saattoi siksi ohjata vastaajia kuvaamaan ongelmia.",
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "37",
        "section": "Aineisto ja menetelmä"
      },
      "explanation": "Avoin kysymys käsitteli hankalia keskusteluaiheita, joten siihen liittyvä mediakritiikki ei edusta välttämättä vastaajien yleistä arviota journalistisesta mediasta. Lisäksi kyselyn johdannossa mainittiin journalismin rooli, mikä saattoi ohjata vastauksia.\n\nLähde:\nS. 37, ”Aineisto ja menetelmä”, taulukkoa 2 edeltävä teksti.\nRatkaiseva lainaus: ”näitä kommentteja ei voi tulkita vastaajien yleisenä näkemyksenä median toiminnasta”.",
      "learningPoint": "Opiskelijan tulee yhdistää kysymyksen muotoilu ja vastausten tulkintaa koskeva rajaus. Tiettyyn kysymykseen annettua kritiikkiä ei saa yleistää kaikkiin vastaajien näkemyksiin.\nHakuvinkki: Ctrl+F: pääosin kriittisiä ja yleisenä näkemyksenä."
    },
    {
      "id": "g-m18-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein tutkimuksessa tunnistetut osallistumisen esteet ja niitä kuvaavat kokemukset?",
      "options": [
        {
          "id": "a",
          "text": "Riittämätön tietopohja tarkoittaa ensisijaisesti sitä, että henkilö ei halua paljastaa yksityiselämäänsä, kun taas henkilökohtaisuuden arkuus liittyy pelkoon virheellisten faktatietojen esittämisestä."
        },
        {
          "id": "b",
          "text": "Konsensuksesta poikkeaminen liittyy vain puoluepoliittisiin erimielisyyksiin, kun taas leimautumisen pelko koskee yksinomaan sosiaalisen median keskusteluja."
        },
        {
          "id": "c",
          "text": "Huono keskusteluilmapiiri liittyy kuuntelemattomuuteen ja väärinymmärryksiin, kun taas riittämätön tietopohja voi aiheuttaa epävarmuutta omien näkemysten perustelemisessa."
        },
        {
          "id": "d",
          "text": "Sosiaalisen median vaikutus tarkoittaa tutkimuksessa pelkästään anonyymin osallistumisen helpottumista, kun taas konsensuksesta poikkeaminen tarkoittaa henkilökohtaisten tietojen suojaamista."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "41–44"
      },
      "explanation": "C on oikein. Huonoon keskusteluilmapiiriin liittyivät aggressiivisuus, kuuntelemattomuus ja väärinymmärrykset. Riittämätön tieto puolestaan vaikeutti keskusteluun osallistumista ja omien näkemysten perustelemista.\nA on väärin. Siinä riittämättömän tiedon ja henkilökohtaisuuden arkuuden ominaisuudet on vaihdettu keskenään.\nB on väärin. Konsensuksesta poikkeaminen voi liittyä myös vakaumuksiin ja yhteiskunnallisiin tapahtumiin. Leimautumista pelättiin myös esimerkiksi työpaikoilla.\nD on väärin. Sosiaaliseen mediaan liitettiin myös maalittaminen, kuplautuminen ja kärjistyminen. Konsensuksesta poikkeaminen ei tarkoita yksityisyyden suojaamista.\n\nLähde:\nS. 41–44, osallistumisen esteitä käsittelevät osa-alueet 1–6.\nRatkaiseva lainaus, s. 42: ”Riittämätön tietopohja aiheutti epävarmuutta ja pelkoa nolatuksi tulemisesta.”",
      "learningPoint": "Opiskelijan tulee erottaa kuusi osallistumista hankaloittavaa osa-aluetta toisistaan. Samankaltaiset kokemukset voivat liittyä eri mekanismeihin, joten on tarkistettava, mikä tekijä on kussakin kuvauksessa keskeinen.\nHakuvinkki: Ctrl+F: Huono keskusteluilmapiiri ja Riittämätön tietopohja."
    },
    {
      "id": "g-m18-q10",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat tutkimuksen tuloksia riittämättömän tiedon ja osallistumishalukkuuden suhteesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Riittämättömän tiedon osallistumista vähentävä vaikutus oli yleisempi naisilla kuin miehillä, ja ilmiö korostui nuorten sekä opiskelijoiden kokemuksissa."
        },
        {
          "id": "b",
          "text": "Riittämättömän tiedon kokemus koski 46 prosenttia vastaajista, mikä oli suurempi osuus kuin kuulluksi ja ymmärretyksi tulemisen puutteella."
        },
        {
          "id": "c",
          "text": "Riittämättömän tiedon vuoksi osallistumista välttävät saattoivat pitää yhteiskunnallisia kysymyksiä niin monimutkaisina, etteivät kokeneet pystyvänsä perustelemaan näkemyksiään riittävästi."
        },
        {
          "id": "d",
          "text": "Tutkimuksen mukaan tiedon puute oli osallistumisen esteenä harvinaisempi 18–24-vuotiailla kuin 65 vuotta täyttäneillä."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "41–42"
      },
      "explanation": "A on oikein. Riittämätön tieto vähensi osallistumishalukkuutta 30 prosentilla vastaajista, ja kokemus oli yleisempi naisilla kuin miehillä. Tekstissä korostetaan myös nuorten ja opiskelijoiden kokemuksia.\nB on väärin. 46 % liittyi kuulluksi ja ymmärretyksi tulemisen puutteeseen, ei riittämättömään tietoon.\nC on oikein. Avoimissa vastauksissa monimutkaiset yhteiskunnalliset kysymykset ja epävarmuus omasta tietopohjasta mainittiin osallistumisen esteinä.\nD on väärin. Taulukon 4 mukaan nuorimmassa ryhmässä osuus oli 52 % ja vanhimmassa 22 %.\n\nLähde:\nS. 41–42, taulukko 4 ja ”Riittämätön tietopohja”.\nRatkaiseva lainaus, s. 41: ”naiset 38 % ja miehet 20 %”.",
      "learningPoint": "Opiskelijan tulee yhdistää oikeat prosenttiosuudet osallistumisen esteisiin ja verrata määrällisiä tuloksia laadullisiin kokemuksiin.\nHakuvinkki: Ctrl+F: naiset 38 ja ei ole tarpeeksi tietoa."
    },
    {
      "id": "g-m18-q11",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nAnonyymi osallistuminen näyttäytyi tutkimuksessa kaksijakoisena: se saattoi madaltaa joidenkin vastaajien osallistumiskynnystä, mutta anonyymi vihapuhe saattoi samalla karkottaa muita keskustelijoita. Siksi anonyymiyden vaikutusta ei voida tulkita yksiselitteisesti keskusteluhalukkuutta lisääväksi.",
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "41 ja 44"
      },
      "explanation": "Kyselyn mukaan anonyymin osallistumisen mahdollisuus vaikutti myönteisesti 27 prosenttiin vastaajista. Avoimissa vastauksissa anonyymiyden kerrottiin kuitenkin myös mahdollistavan vihapuhetta, joka voi vähentää muiden osallistumista.\n\nLähde:\nS. 41 ja 44, osallistumishalukkuuden tulokset sekä ”Henkilökohtaisuuden arkuus”.\nRatkaiseva lainaus, s. 44: ”anonyymi vihapuhe karkottaa keskusteluista”.",
      "learningPoint": "Opiskelijan tulee erottaa joidenkin vastaajien kokema hyöty kaikille osallistujille oletetusta hyödystä. Sama käytäntö voi vaikuttaa eri ihmisiin eri tavoin.\nHakuvinkki: Ctrl+F: anonyymi osallistuminen ja anonyymi vihapuhe."
    },
    {
      "id": "g-m18-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä journalistiselle medialle asetettuja odotuksia?",
      "options": [
        {
          "id": "a",
          "text": "Erilaisten näkemysten monipuolista esittämistä kannatti 90 prosenttia vastaajista, mikä oli suurempi osuus kuin puolueettomuutta kannattaneiden 87 prosenttia."
        },
        {
          "id": "b",
          "text": "Vähälle huomiolle jääneiden näkökulmien esiin tuomista kannatti 88 prosenttia vastaajista, eli hieman suurempi osuus kuin puolueettomuutta."
        },
        {
          "id": "c",
          "text": "Tutkittuun tietoon perustuvia näkökulmia piti tärkeänä 79 prosenttia vastaajista, mikä oli enemmän kuin viranomaisnäkemyksiin tukeutumista kannattaneiden osuus."
        },
        {
          "id": "d",
          "text": "Viranomaisten tarjoamiin näkemyksiin tukeutumista kannatti 79 prosenttia vastaajista, mikä oli suurempi osuus kuin tutkittuun tietoon perustuvia näkökulmia kannattaneilla."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "44–45",
        "section": "Journalistinen media keskustelun ylläpitäjänä"
      },
      "explanation": "A on oikein. Monipuolista näkemysten esittämistä kannatti 90 % ja puolueettomuutta 87 %.\nB on oikein. Vähälle huomiolle jääneiden näkökulmien esiin tuomisen osuus oli 88 %.\nC on oikein. Tutkittuun tietoon perustuvien näkökulmien osuus oli 79 % ja viranomaisnäkemyksiin tukeutumisen 54 %.\nD on väärin. Se yhdistää 79 prosentin osuuden väärään toimintatapaan ja kääntää samalla näiden kahden odotuksen suuruusjärjestyksen.\n\nLähde:\nS. 44–45, ”Journalistinen media keskustelun ylläpitäjänä” ja taulukko 5.\nRatkaiseva lainaus, s. 45: ”Viranomaisnäkemyksiin tukeutuminen oli tärkeää 54 prosentille vastaajista”.",
      "learningPoint": "Opiskelijan tulee yhdistää journalistiselle medialle asetetut odotukset oikeisiin prosenttiosuuksiin ja vertailla niiden yleisyyttä.\nHakuvinkki: Taulukko 5, s. 45. Laske tarvittaessa yhteen täysin ja jokseenkin samaa mieltä olleiden osuudet."
    },
    {
      "id": "g-m18-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Oikein vai väärin?\nTaulukon 5 perusteella vähälle huomiolle jääneiden näkökulmien esiin tuomista kannatti yhteensä 87 prosenttia vastaajista. Tämä tarkoittaa, että kyseinen toimintatapa sai yhtä suuren kannatuksen kuin toimittajien puolueettomuus, vaikka monipuolista näkemysten esittämistä kannatti vielä suurempi osuus.",
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "45"
      },
      "explanation": "Taulukon pyöristetyt vastausluokat antavat kummallekin toimintatavalle 87 prosentin kannatuksen. Monipuolinen näkemysten esittäminen sai 90 prosentin kannatuksen.\nHuomaa kuitenkin, että artikkelin tekstissä vähälle huomiolle jääneiden näkökulmien osuudeksi ilmoitetaan 88 %. Tehtävän 87 % perustuu nimenomaan taulukon yhteenlaskettuihin, pyöristettyihin lukuihin.\n\nLähde:\nS. 45, taulukko 5.\nRatkaisevat luvut: vähälle huomiolle jääneet näkökulmat 52 % + 35 % ja puolueettomuus 62 % + 25 %.",
      "learningPoint": "Opiskelijan tulee laskea taulukon vastausluokkia yhteen ja erottaa taulukon pyöristettyjen lukujen summa tekstissä ilmoitetusta kokonaisosuudesta.\nHakuvinkki: Taulukko 5, s. 45. Vertaa rivejä puolueettomana ja vähälle huomiolle."
    },
    {
      "id": "g-m18-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein median toimintaa koskevan kritiikin luokittelua ja tulkinnan rajoituksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Yksipuolisuutta koskeva kritiikki liittyi kokemukseen siitä, että mediassa esitetään vain yksi hyväksytty totuus ja muita näkökulmia jää sivuun."
        },
        {
          "id": "b",
          "text": "Puolueellisuutta koskeva kritiikki tarkoitti ensisijaisesti klikkiotsikointia ja puutteellista informaatiota, kun taas huonolaatuisuus viittasi toimittajien poliittisiin mielipiteisiin."
        },
        {
          "id": "c",
          "text": "Huonolaatuisuutta koskevissa kommenteissa arvosteltiin esimerkiksi kohu-uutisointia ja klikkiotsikointia sekä toivottiin tutkivaa journalismia."
        },
        {
          "id": "d",
          "text": "Avoimista vastauksista muodostetut kolme kritiikin aluetta osoittavat, että koko vastaajajoukko suhtautui journalistiseen mediaan pääosin kielteisesti."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "37 ja 45–46"
      },
      "explanation": "A on oikein. Yksipuolisuutta koskeva kritiikki liittyi tiedonvälityksen kapea-alaisuuteen ja näkökulmien puuttumiseen.\nB on väärin. Klikkiotsikointi ja kohu-uutisointi kuuluivat huonolaatuisuuteen, toimittajien poliittiset näkemykset puolueellisuuteen.\nC on oikein. Huonolaatuisuuden yhteydessä mainittiin puutteellinen informaatio, klikkiotsikointi ja kohu-uutisointi.\nD on väärin. Tutkijat rajaavat kritiikin hankalia keskusteluaiheita koskeviin vastauksiin. Sitä ei voida yleistää kaikkien vastaajien yleiseksi mediakäsitykseksi.\n\nLähde:\nS. 37 ja 45–46, taulukko 2 sekä median ongelmakohtien käsittely.\nRatkaiseva lainaus, s. 46: ”Parannusehdotuksina toivottiin tutkivaa ja avointa journalismia.”",
      "learningPoint": "Opiskelijan tulee yhdistää median ongelmakohtien kolme luokkaa oikeisiin esimerkkeihin sekä tunnistaa tulosten yleistettävyyden rajaus.\nHakuvinkki: Ctrl+F: Yksipuolisuus, Puolueellisuus ja Huonolaatuisuus."
    },
    {
      "id": "g-m18-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa taulukoiden 3 ja 4 sekä niitä käsittelevän tekstin perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Politiikka oli avoimissa vastauksissa useimmin nimetty hankala aihepiiri, mutta tästä ei voida suoraan päätellä, että kaikki politiikan maininneet olisivat jättäneet osallistumatta keskusteluihin riittämättömän tiedon vuoksi."
        },
        {
          "id": "b",
          "text": "Koska 80 prosenttia vastaajista koki julkisen keskusteluilmapiirin kärjistyneeksi, täsmälleen sama osuus nimesi politiikan hankalaksi aihepiiriksi avoimessa kysymyksessä."
        },
        {
          "id": "c",
          "text": "Moninaisuus/yhdenvertaisuus mainittiin avoimissa vastauksissa useammin kuin maahanmuutto, mutta tutkimuksen perusteella hankaluuden syyt eivät rajoitu pelkästään aihepiirin sisältöön."
        },
        {
          "id": "d",
          "text": "Koska ympäristö/kestävyys ja konflikti/turvallisuus saivat yhtä monta mainintaa, niiden hankaluuden taustalla oli tutkimuksen mukaan aina sama henkilökohtainen kokemus."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "38–41"
      },
      "explanation": "A on oikein. Politiikka oli yleisin aihepiiri 206 maininnalla. Tutkimuksessa ei kuitenkaan osoiteta, että jokaisen politiikan maininnan taustalla olisi ollut riittämätön tieto.\nB on väärin. 80 % koski kärjistyneeksi koettua keskusteluilmapiiriä koko kyselyssä. Politiikka mainittiin 39 prosentissa analysoiduista avovastauksista.\nC on oikein. Moninaisuus/yhdenvertaisuus sai 111 mainintaa ja maahanmuutto 73. Hankaluuteen vaikuttivat myös arvot, identiteetti, omakohtaiset kokemukset ja keskusteluilmapiiri.\nD on väärin. Sama mainintamäärä ei osoita hankaluuden syiden olevan samoja, eikä tutkimus esitä tällaista ehdotonta yhteyttä.\n\nLähde:\nS. 38–41, taulukot 3 ja 4 sekä ”Hankalat aiheet ja osallistumisen esteet”.\nRatkaiseva lainaus, s. 38: ”Huono keskusteluilmapiiri nousikin useimmin esiin hankaluuden syynä”.",
      "learningPoint": "Opiskelijan tulee yhdistää taulukoiden määrälliset tulokset laadullisiin havaintoihin. Erityisesti on erotettava aiheen mainintojen määrä osallistumattomuuden syistä.\nHakuvinkki: Ctrl+F: kahdeksan yhteiskunnallisen ja Huono keskusteluilmapiiri."
    },
    {
      "id": "g-m18-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Tosi vai epätosi?\nTutkimuksessa 18–24-vuotiaista 51 prosenttia ilmoitti arvostelun tai kiusan kohteeksi joutumisen vaikuttavan osallistumishalukkuuteensa. Tämä osuus oli suurempi kuin saman ikäryhmän riittämättömän tiedon vaikutusta koskeva osuus.",
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "40–41"
      },
      "explanation": "Arvostelun tai kiusan kohteeksi joutumisen osuus oli 14 % + 37 % = 51 %. Riittämättömän tiedon osuus oli 14 % + 38 % = 52 %.\nNäin ollen riittämättömän tiedon osuus oli taulukon pyöristettyjen lukujen perusteella yhden prosenttiyksikön suurempi.\n\nLähde:\nS. 40–41, taulukko 4 ja sitä seuraava teksti.\nRatkaiseva lainaus, s. 41: ”51 prosenttia koki arvostelun tai kiusan kohteeksi joutumisen esteenä”.",
      "learningPoint": "Opiskelijan tulee vertailla saman ikäryhmän kahta eri osallistumisen estettä. Oikea vastaus edellyttää kahden vastausluokan yhteenlaskua kummassakin tapauksessa.\nHakuvinkki: Taulukko 4, s. 40. Vertaa rivejä Pelkään, että joudun muiden arvostelun ja Minulla ei ole tarpeeksi tietoa."
    },
    {
      "id": "g-m18-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein artikkelissa esitettyä median, polarisaatiokäsitysten ja keskustelusta vetäytymisen mahdollista yhteyttä?",
      "options": [
        {
          "id": "a",
          "text": "Median vastakkainasettelua korostava esitystapa voi vahvistaa mielikuvaa yhteiskunnan jakautuneisuudesta, mikä voi lisätä tunnepohjaista polarisaatiota ja syrjäyttää maltillisia näkemyksiä julkisesta keskustelusta."
        },
        {
          "id": "b",
          "text": "Kansalaisten vetäytyminen keskusteluista vähentää automaattisesti median vastakkainasettelua korostavaa uutisointia, minkä seurauksena affektiivinen polarisaatio heikkenee."
        },
        {
          "id": "c",
          "text": "Media voi lisätä polarisaatiota vain silloin, kun yhteiskunnan ideologiset jakolinjat ovat jo objektiivisesti yhtä jyrkkiä kuin mediassa esitetään."
        },
        {
          "id": "d",
          "text": "Vastakkainasettelun korostaminen lisää artikkelin mukaan aina kansalaisten halukkuutta ilmaista maltillisia näkemyksiä, koska yhteiskunnalliset ristiriidat tulevat näkyvämmiksi."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "48",
        "section": "Yhteenveto ja keskustelu"
      },
      "explanation": "A on oikein. Median esitystapa voi vahvistaa käsitystä voimakkaista vastakkainasetteluista. Tämä voi lisätä affektiivista polarisaatiota, syrjäyttää maltillisia ääniä ja heikentää keskustelukulttuuria.\nB on väärin. Artikkelissa ei esitetä vetäytymisen automaattisesti vähentävän polarisoivaa uutisointia.\nC on väärin. Median luoma mielikuva voi poiketa todellisesta mielipideilmapiiristä.\nD on väärin. Vastakkainasettelun korostaminen voi päinvastoin vähentää maltillisten näkemysten esittämistä.\n\nLähde:\nS. 48, ”Yhteenveto ja keskustelu”.\nRatkaiseva lainaus: ”Tällainen väärinkäsityksiin perustuva polarisaatio eli niin sanottu takaisinkytkentä”.",
      "learningPoint": "Opiskelijan tulee yhdistää median esitystapa, polarisaatiota koskevat mielikuvat ja osallistumisen mahdolliset seuraukset. On tarkistettava, esitetäänkö yhteys mahdollisena vai väistämättömänä.\nHakuvinkki: Ctrl+F: takaisinkytkentä ja maltillisia ääniä."
    },
    {
      "id": "g-m18-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat tutkimuksen johtopäätöksiä hankalien aiheiden ja keskustelusta vetäytymisen suhteesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Se, ettei tiettyä aihetta mainittu hankalaksi, osoittaa tutkimuksen mukaan, että siitä keskusteleminen on kaikissa tilanteissa helppoa."
        },
        {
          "id": "b",
          "text": "Aiheen hankaluus voi riippua yhteiskunnallisesta tilanteesta, ja sen puuttuminen vastauksista voi liittyä esimerkiksi siihen, ettei aihe ole kyselyhetkellä ajankohtainen tai kiinnostava."
        },
        {
          "id": "c",
          "text": "Yhteiskunnallista keskustelua voi vaikeuttaa tilanne, jossa osa ihmisistä pitää aihetta oikeutettuna erimielisyyden kohteena mutta toiset tulkitsevat sen keskusteluun kuulumattomaksi."
        },
        {
          "id": "d",
          "text": "Tutkijoiden mukaan kaikki arvoihin tai identiteettiin liittyvät aiheet johtavat välttämättä keskustelusta vetäytymiseen riippumatta keskusteluilmapiiristä."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "38 ja 47"
      },
      "explanation": "A on väärin. Aiheen puuttuminen vastauksista ei tarkoita sen olevan aina helppo keskustelunaihe.\nB on oikein. Hankaluuteen vaikuttavat yhteiskunnallinen tilanne, ajankohtaisuus ja keskustelun konteksti.\nC on oikein. Keskustelu voi muuttua ongelmalliseksi, jos aiheen hyväksyttävyydestä julkisen keskustelun kohteena on ristiriitaisia käsityksiä.\nD on väärin. Arvoihin ja identiteettiin liittyminen ei yksin välttämättä tee aiheesta hankalaa. Myös keskusteluilmapiirillä on merkitystä.\n\nLähde:\nS. 38 ja 47, hankalien aiheiden tarkastelu sekä ”Yhteenveto ja keskustelu”.\nRatkaiseva lainaus, s. 47: ”Aiheen hankaluus on kontekstisidonnaista”.",
      "learningPoint": "Opiskelijan tulee tunnistaa tutkimuksen kontekstisidonnaisuutta koskevat rajaukset. Aiheen hankaluutta ei saa yleistää koskemaan kaikkia ihmisiä ja tilanteita.\nHakuvinkki: Ctrl+F: Aiheen hankaluus on kontekstisidonnaista ja ei-legitiimeihin."
    },
    {
      "id": "g-m18-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin johtopäätöksiä median roolista polarisoituneessa keskustelussa?",
      "options": [
        {
          "id": "a",
          "text": "Media voi lieventää affektiivista polarisaatiota ja vahvistaa empatiaa, jos se tarjoaa yleisölle monipuolisia näkökulmia."
        },
        {
          "id": "b",
          "text": "Valtavirtamedian rakentama mielikuva laajasti jaetusta mielipiteestä voi vaikeuttaa siitä poikkeavien näkemysten pääsyä julkiseen keskusteluun."
        },
        {
          "id": "c",
          "text": "Rakentavan erimielisyyden mahdollistaminen voi tukea demokraattista osallistumista ilman, että kaikkien keskustelijoiden täytyy päätyä samaan tulkintaan."
        },
        {
          "id": "d",
          "text": "Demokratian toimivuus edellyttää, että journalistinen media poistaa julkisesta keskustelusta erimielisyydet ja ohjaa kansalaiset yhteen yhteisesti hyväksyttyyn näkemykseen."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "47–48",
        "section": "Yhteenveto ja keskustelu"
      },
      "explanation": "A on oikein. Monipuoliset näkökulmat voivat vahvistaa empatiaa ja lieventää affektiivista polarisaatiota.\nB on oikein. Median rakentama kuva yleisestä mielipiteestä voi kaventaa siitä poikkeavien näkemysten esittämistä.\nC on oikein. Kirjoittajat korostavat rakentavaa erimielisyyttä ja moniarvoista keskustelua.\nD on väärin. Artikkelin tavoitteena ei ole erimielisyyksien poistaminen vaan niiden rakentavan käsittelyn mahdollistaminen.\n\nLähde:\nS. 47–48, ”Yhteenveto ja keskustelu”.\nRatkaiseva lainaus, s. 48: ”Tavoitteena ei ole tällöin yhteisesti jaettuun tulkintaan pyrkiminen”.",
      "learningPoint": "Opiskelijan tulee erottaa yhteisen keskustelutilan luominen yksimielisyyden vaatimuksesta. Moniäänisyys ei edellytä yhteistä lopputulosta.\nHakuvinkki: Ctrl+F: yhteisesti jaettuun tulkintaan ja rakentavan erimielisyyden."
    },
    {
      "id": "g-m18-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Mäkisen ja Pienimäen tutkimustulosten sekä johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Keskustelusta vetäytymistä ei voida selittää vain kansalaisten tiedon puutteella, sillä osallistumishalukkuuteen vaikuttavat myös esimerkiksi leimautumisen pelko, kuuntelemattomuus ja keskusteluilmapiiri."
        },
        {
          "id": "b",
          "text": "Koska sosiaalinen media tarjoaa matalan kynnyksen osallistumismahdollisuuksia, sen käyttö poistaa tutkimuksen mukaan julkisen keskustelun polarisaatioon liittyvät ongelmat."
        },
        {
          "id": "c",
          "text": "Journalistinen media voi vaikuttaa kansalaisten osallistumismahdollisuuksiin sekä vahvistamalla vastakkainasettelua että tarjoamalla tilaa erilaisille näkemyksille ja rakentavalle erimielisyydelle."
        },
        {
          "id": "d",
          "text": "Tutkimuksen perusteella hiljentyneiden kansalaisten näkemykset voidaan palauttaa julkiseen keskusteluun vain silloin, kun kaikki osallistujat hyväksyvät saman yhteiskunnallisen tulkinnan."
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
        "articleId": "hiljentyvat-kansalaiset",
        "page": "46–48",
        "section": "Yhteenveto ja keskustelu"
      },
      "explanation": "A on oikein. Tutkimuksessa tunnistettiin useita osallistumista hankaloittavia tekijöitä, joista huono keskusteluilmapiiri, leimautuminen ja väärinymmärretyksi tuleminen olivat erityisen keskeisiä.\nB on väärin. Sosiaalinen media voi helpottaa osallistumista, mutta samalla sen kärjistynyt ilmapiiri ja kuplautuminen voivat heikentää rakentavaa keskustelua.\nC on oikein. Media voi esitystavoillaan joko vahvistaa polarisaatiota tai tukea moniäänistä keskustelua ja osallistumista.\nD on väärin. Kirjoittajat korostavat moniarvoista keskustelua ilman velvollisuutta asettua yksiselitteisesti puolesta tai vastaan tai hyväksyä yhteistä tulkintaa.\n\nLähde:\nS. 46–48, ”Yhteenveto ja keskustelu”, sekä s. 41–44, osallistumisen esteiden analyysi.\nRatkaiseva lainaus, s. 48: ”Hiljaisten äänten saaminen mukaan edellyttää journalisteilta hegemonisiksi muodostuneiden diskurssien kriittistä tarkastelua”.",
      "learningPoint": "Opiskelijan tulee yhdistää osallistumisen esteitä koskevat tutkimustulokset median mahdollisiin vaikutuksiin. Erityisesti on erotettava keskusteluun osallistumisen mahdollistaminen siitä oletuksesta, että osallistuminen edellyttäisi yksimielisyyttä.\nHakuvinkki: Ctrl+F: Hiljaisten äänten ja moniarvoisen keskustelun."
    }
  ]
} satisfies ValintakoeGExercise;
