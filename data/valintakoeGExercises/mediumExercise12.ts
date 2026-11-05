import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 12: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise12Base = {
  "id": "keskivaikea-harjoitus-12",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 12 – Resilienssin ulottuvuudet",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "resilienssin-ulottuvuudet",
  "articleTitle": "Resilienssin ulottuvuudet",
  "articleUrl": "https://journal.fi/kosmopolis/article/view/137710/90023",
  "questions": [
    {
      "id": "g-m12-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein resilienssikäsitteen historiallista kehitystä ja eri tutkimusperinteitä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Resilienssin varhaiset tieteelliset sovellukset liittyivät materiaalien joustavuuteen ja kimmoisuuteen, kun taas Crawford Hollingin ekologinen lähestymistapa korosti järjestelmien sopeutumista ulkoisiin muutoksiin."
        },
        {
          "id": "b",
          "text": "Resilienssin käsite syntyi ekologian tutkimuksessa 1970-luvulla ja siirtyi vasta 2010-luvulla materiaalitieteisiin."
        },
        {
          "id": "c",
          "text": "Materiaalitieteellisessä perinteessä korostui palautuminen aiempaan tilaan, kun taas Hollingin lähestymistavassa painottui kyky sopeutua muutoksiin."
        },
        {
          "id": "d",
          "text": "Resilienssi nousi 1800-luvulla laajasti politiikan ja yhteiskuntatieteiden keskeiseksi käsitteeksi, mutta sen käyttö väheni 2010-luvulla."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "30–31",
        "section": "Johdanto: resilienssikeskustelun nousu"
      },
      "explanation": "A on oikein. Resilienssiä sovellettiin jo 1800-luvun alussa materiaalitutkimuksessa. Hollingin vuonna 1973 esittämä ekologinen näkökulma korosti sopeutumista.\nB on väärin. Materiaalitieteelliset sovellukset edelsivät ekologista resilienssitutkimusta.\nC on oikein. Materiaalitieteellisen ja ekologisen lähestymistavan välinen ero liittyy palautumisen ja sopeutumisen painotuksiin.\nD on väärin. Käsitteen suosio kasvoi voimakkaasti erityisesti 2010-luvulla.\n\nLähde:\nS. 30–31, \"Johdanto: resilienssikeskustelun nousu\". Sivulla 31 todetaan Hollingin painottaneen \"enemmän sopeutumista ja vähemmän insinööri- ja materiaalitieteellistä entisen tasapainon saavuttamista\".",
      "learningPoint": "Opiskelijan tulee yhdistää käsitteen historialliset kehitysvaiheet oikeisiin tieteenaloihin ja erottaa varhaiset sovellukset myöhemmästä popularisoitumisesta.\nHakuvinkki: Ctrl+F: 1800-luvun alusta ja Holling."
    },
    {
      "id": "g-m12-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Tosi vai epätosi?\nResilienssiajattelun ja perinteisen riskienhallinnan keskeinen ero liittyy siihen, että resilienssi tunnustaa ei-toivottujen tapahtumien väistämättömyyden monimutkaisissa järjestelmissä. Tämä ei kuitenkaan tarkoita, että resilienssiajattelu hylkäisi ennaltaehkäisyn ja suojelun kokonaan.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "31 ja 36–37"
      },
      "explanation": "Resilienssiajattelu lähtee siitä, ettei kaikkia häiriöitä voida estää. Siksi järjestelmien on kyettävä myös sopeutumaan ja palautumaan. Ennaltaehkäisy ja suojelu ovat kuitenkin edelleen osa kokonaisvaltaista resilienssin hallintaa.\n\nLähde:\nS. 31 ja 36–37. Sivulla 31 todetaan resilienssin tunnustavan \"ei-toivottujen tapahtumien väistämättömyyden\". Sivulla 36 puolestaan todetaan suojelun sisältyvän resilienssin työkalupakkiin.",
      "learningPoint": "Opiskelijan tulee erottaa perinteisen riskienhallinnan täydentäminen sen korvaamisesta. Uusi lähestymistapa ei välttämättä poista aiempien toimintatapojen merkitystä.\nHakuvinkki: Ctrl+F: väistämättömyyden ja suojelu sisältyy."
    },
    {
      "id": "g-m12-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein yhteiskunnallisen resilienssin tutkimuksessa käytetyt lähestymistavat ja niiden painotukset?",
      "options": [
        {
          "id": "a",
          "text": "Hallinto- ja organisaatiotutkijat tarkastelevat ensisijaisesti yhteisöjen ikärakennetta, kun taas sosiologit keskittyvät paikallishallinnon valmiussuunnitteluun."
        },
        {
          "id": "b",
          "text": "Alue- ja kaupunkisuunnittelijat painottavat yhteisön sosiaalista pääomaa, kun taas hallintotutkijat tutkivat ensisijaisesti rakennusten materiaalista kestävyyttä."
        },
        {
          "id": "c",
          "text": "Sosiologit korostavat yhteisöjen sosioekonomisia rakenteita, hallinto- ja organisaatiotutkijat julkisen hallinnon valmiutta ja alue- sekä kaupunkisuunnittelijat ennaltaehkäisevää rakentamista."
        },
        {
          "id": "d",
          "text": "Kaikki kolme lähestymistapaa määrittelevät yhteiskunnallisen resilienssin yksinomaan luonnonkatastrofin jälkeisen palautumisnopeuden perusteella."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "31–32",
        "section": "Yhteiskunnallinen resilienssi"
      },
      "explanation": "C on oikein. Se yhdistää kolme tutkimuksellista näkökulmaa niiden oikeisiin painotuksiin.\nA on väärin, koska siinä sosiologien ja hallintotutkijoiden painotukset vaihtuvat keskenään.\nB on väärin, koska kaupunkisuunnittelijoiden näkökulmassa korostuu kestävä ja ennaltaehkäisevä rakentaminen.\nD on väärin, sillä yhteiskunnallinen resilienssi kattaa myös ennakoinnin, haavoittuvuuden ja sopeutumisen.\n\nLähde:\nS. 31–32, \"Yhteiskunnallinen resilienssi\". Sivulla 31 sosiologien näkökulmassa mainitaan \"koulutus- ja työllisyystason tai väestön ikärakenteen\" kaltaiset tekijät.",
      "learningPoint": "Opiskelijan tulee yhdistää eri tieteenalojen tarkastelukohteet oikeisiin lähestymistapoihin. Väärät vaihtoehdot hyödyntävät artikkelissa esiintyviä todellisia ominaisuuksia mutta liittävät ne väärään tutkimusperinteeseen.\nHakuvinkki: Ctrl+F: Sosiologit näkevät ja Alue- ja kaupunkisuunnittelijoille."
    },
    {
      "id": "g-m12-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Oikein vai väärin?\nMacleanin, Cuthillin ja Rossin (2014) sosiaalisen resilienssin malli perustui kuuteen attribuuttiin, joihin kuuluivat muun muassa yhteisöverkostot, yhteisön infrastruktuuri sekä monipuolinen ja innovatiivinen talous. Mallia sovellettiin haastatteluihin perustuvissa tapaustutkimuksissa eikä ensisijaisesti laajoissa tilastollisissa vertailuissa.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "32",
        "section": "Kohti resilienssin laadullista arviointia"
      },
      "explanation": "Tutkijoiden kuusi attribuuttia käsittivät tiedot, taidot ja oppimisen, yhteisöverkostot, ihmisten ja paikan väliset yhteydet, infrastruktuurin, talouden sekä hallinnon. Mallin mittaaminen perustui laadulliseen tutkimukseen.\n\nLähde:\nS. 32, \"Kohti resilienssin laadullista arviointia\". Ratkaiseva lainaus: \"Menetelmään kuului haastatteluihin perustuvia tapaustutkimuksia.\"",
      "learningPoint": "Opiskelijan tulee yhdistää oikea tutkimusmalli sen osatekijöihin ja menetelmään. Samankaltaisia indikaattorimalleja esiintyy artikkelissa useita.\nHakuvinkki: Ctrl+F: kuudeksi attribuutiksi."
    },
    {
      "id": "g-m12-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä yhteiskunnallisen resilienssin määrällisiä tutkimuksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Sherriebin, Norrisin ja Galean (2010) tutkimuksessa hyödynnettiin julkisia väestötilastoja ja tarkasteltiin 82:ta Yhdysvaltain lääniä."
        },
        {
          "id": "b",
          "text": "Rapaportin ym. (2018) tutkimuksessa maaseutuyhteisöjen resilienssiarvot olivat korkeimmat ja kaupunkiyhteisöjen matalimmat."
        },
        {
          "id": "c",
          "text": "Scherzerin, Lujalan ja Rødin (2019) tutkimuksessa tarkasteltiin 82:ta Yhdysvaltain lääniä, joista pohjoiset osoittautuivat resilienteimmiksi."
        },
        {
          "id": "d",
          "text": "Rapaportin ym. (2018) tutkimuksessa kaupunkiyhteisöjen resilienssi oli korkeampi kuin maaseutuyhteisöjen, vaikka tutkimuksessa tarkasteltiin molempia ryhmiä."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "33–34",
        "section": "Määrällisten menetelmien esiintulo"
      },
      "explanation": "A on oikein. Sherriebin ym. tutkimus käsitti 82 Yhdysvaltain lääniä.\nB on oikein. Rapaportin ym. tutkimuksessa maaseutuyhteisöt sijoittuivat korkeimmalle ja kaupunkiyhteisöt matalimmalle.\nC on väärin. Scherzerin ym. tutkimus koski Norjan kuntia, ei Yhdysvaltain läänejä.\nD on väärin. Rapaportin tutkimuksessa ryhmien välinen järjestys oli päinvastainen.\n\nLähde:\nS. 33–34, \"Määrällisten menetelmien esiintulo\". Sivulla 33 todetaan Rapaportin ym. tutkimuksesta: \"maaseutuyhteisöt osoittivat korkeimmat resilienssiarvot\".",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimukset oikeisiin kohdejoukkoihin ja vertailla eri yhteisötyyppien tuloksia.\nHakuvinkki: Ctrl+F: 82 Yhdysvaltain ja maaseutuyhteisöt."
    },
    {
      "id": "g-m12-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein organisaation reaktiivisen ja ennakoivan resilienssin eroa?",
      "options": [
        {
          "id": "a",
          "text": "Reaktiivinen resilienssi hyväksyy muutoksen väistämättömyyden ja kehittää uusia toimintamalleja, kun taas ennakoiva resilienssi keskittyy nykytilan säilyttämiseen."
        },
        {
          "id": "b",
          "text": "Ennakoiva resilienssi tarkoittaa ainoastaan kriisin jälkeistä palautumista, kun taas reaktiivinen resilienssi edellyttää uusien liiketoimintamallien kehittämistä ennen kriisiä."
        },
        {
          "id": "c",
          "text": "Reaktiivinen ja ennakoiva resilienssi eroavat vain siinä, että ensimmäistä sovelletaan julkisissa organisaatioissa ja jälkimmäistä yrityksissä."
        },
        {
          "id": "d",
          "text": "Reaktiivinen resilienssi vahvistaa nykyistä järjestelmää muutoksia vastaan, kun taas ennakoiva resilienssi pyrkii rakentamaan järjestelmän, joka pystyy sopeutumaan uusiin olosuhteisiin."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "34–35",
        "section": "Proaktiivista vai reaktiivista, strategista vai taktista?"
      },
      "explanation": "D on oikein. Reaktiivinen lähestymistapa vahvistaa nykyistä järjestelmää, kun taas ennakoiva resilienssi pyrkii sopeutumiskykyyn.\nA vaihtaa lähestymistapojen ominaisuudet keskenään.\nB on väärin, sillä ennakoiva resilienssi ei rajoitu kriisin jälkeiseen palautumiseen.\nC on väärin, koska erottelu koskee toimintastrategioita, ei organisaatioiden omistusmuotoa.\n\nLähde:\nS. 34–35, \"Proaktiivista vai reaktiivista, strategista vai taktista?\". Sivulla 35 ennakoivaa resilienssiä kehittävän organisaation todetaan hyväksyvän \"muutoksen väistämättömyyden\".",
      "learningPoint": "Opiskelijan tulee erottaa reaktiivisen ja ennakoivan resilienssin ominaisuudet toisistaan. Väärässä vaihtoehdossa artikkelissa kuvattu oikea toimintatapa voidaan liittää väärään resilienssistrategiaan.\nHakuvinkki: Ctrl+F: Reaktiivinen lähestymistapa ja ennakoivaa resilienssiä."
    },
    {
      "id": "g-m12-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä organisaation resilienssin vaiheita ja niiden sisältöjä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Duchekin mallissa ennakointiin kuuluvat riskien tunnistaminen ja valmius, kun taas selviytyminen sisältää tilanteeseen sopivien ratkaisujen kehittämisen."
        },
        {
          "id": "b",
          "text": "Duchekin mallissa sopeutuminen edeltää ennakointia, koska organisaation tulee ensin muuttaa toimintatapojaan ja vasta tämän jälkeen tunnistaa mahdolliset riskit."
        },
        {
          "id": "c",
          "text": "Rerupin näkökulmasta resilienssi voi edellyttää sekä aiemmin opittujen toimintatapojen hyödyntämistä että improvisointia odottamattomassa tilanteessa."
        },
        {
          "id": "d",
          "text": "Duchekin mallissa selviytyminen tarkoittaa yksinomaan kriisiä edeltävään suoritustasoon palautumista, eikä siihen sisälly uusien ratkaisujen kehittämistä."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "35",
        "section": "Ennakointi ja improvisaatio"
      },
      "explanation": "A on oikein. Duchekin mallin kolme kronologista vaihetta ovat ennakointi, selviytyminen ja sopeutuminen. Ennakointi sisältää riskien tunnistamisen ja valmiuden, selviytyminen tilanteeseen sopivien ratkaisujen kehittämisen.\nB on väärin. Se muuttaa mallin vaiheiden järjestystä. Sopeutuminen on mallin kolmas vaihe.\nC on oikein. Rerupin mukaan resilienssiä tuotetaan sekä vanhojen keinojen hyödyntämisellä että uusien etsimisellä.\nD on väärin. Selviytymisvaiheeseen kuuluu ratkaisujen kehittäminen, eikä sitä määritellä yksinomaan aiempaan suoritustasoon palautumiseksi.\n\nLähde:\nS. 35, \"Ennakointi ja improvisaatio\". Ratkaiseva lainaus: \"ennakointi, selviytyminen ja sopeutuminen\".",
      "learningPoint": "Opiskelijan tulee yhdistää organisaation resilienssin eri vaiheet oikeisiin tehtäviin ja erottaa toisistaan kahden tutkijan lähestymistavat.\nHakuvinkki: Ctrl+F: Stephanie Duchekin ja Claus Rerup."
    },
    {
      "id": "g-m12-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nOrganisaation resilienssiä voidaan arvioida laadullisten, määrällisten ja semikvantitatiivisten mittareiden avulla. Vaikka organisaation resilienssi on osittain piilevää kapasiteettia ennen kriisiä, sen arviointi voi olla yhteiskunnallista resilienssiä helpompaa, koska tarkastelu rajautuu yhteen organisaatioon.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "35–36",
        "section": "Mittaamisen ongelma"
      },
      "explanation": "Resilienssin hyödyt voivat tulla näkyviksi vasta toteutuneissa kriiseissä. Sitä voidaan silti arvioida indikaattoreiden avulla. Yhteen organisaatioon rajautuva tutkimuskohde mahdollistaa esimerkiksi henkilöstön haastattelut ja kyselyt, joilla saadaan tietoa organisaation omasta resilienssikäsityksestä.\n\nLähde:\nS. 35–36, \"Mittaamisen ongelma\". Sivulla 35 todetaan: \"organisaation resilienssiä ei aina voida mitata suoraan\".",
      "learningPoint": "Opiskelijan tulee erottaa suoran mittaamisen rajoitukset muista arviointimahdollisuuksista. Vaikeasti havaittava ominaisuus ei välttämättä ole kokonaan mittaamisen ulkopuolella.\nHakuvinkki: Ctrl+F: piilevää kapasiteettia ja selkeän edun."
    },
    {
      "id": "g-m12-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kuvion 1 järjestelmät S1–S5 ja niiden toimintakyvyn kehityksen häiriön jälkeen?",
      "options": [
        {
          "id": "a",
          "text": "S2 palautuu aiempaa paremmalle suoritustasolle, kun taas S4 jää pysyvästi alkuperäisen suoritustasonsa alapuolelle."
        },
        {
          "id": "b",
          "text": "S3 kestää häiriön suhteellisen hyvin ja palautuu nopeasti, kun taas S4 voi saavuttaa aiempaa korkeamman suoritustason esimerkiksi teknologisen innovaation avulla."
        },
        {
          "id": "c",
          "text": "S5 palautuu nopeasti alkuperäiseen toimintakykyynsä, koska se on investoinut voimakkaasti vastustuskykyyn."
        },
        {
          "id": "d",
          "text": "S1 säilyttää suoritustasonsa koko häiriön ajan, kun taas S2 romahtaa täysin eikä kykene enää toimimaan."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "37"
      },
      "explanation": "B on oikein. S3:n suorituskyky heikkenee suhteellisen vähän ja palautuu nopeasti. S4 saavuttaa aiempaa korkeamman suorituskyvyn.\nA on väärin, koska S2 jää alkuperäisen tason alapuolelle, kun taas S4 ylittää sen.\nC on väärin. S5 kestää stressiä pitkään mutta romahtaa lopulta, koska se ei kykene sopeutumaan tai palautumaan.\nD on väärin. S1:n suorituskyky laskee huomattavasti ja palautuminen on hidasta. S2 ei palaudu alkuperäiselle tasolle, mutta se ei ole kuvion täydellisesti romahtava järjestelmä.\n\nLähde:\nS. 37, kuvio 1 \"Resilienssikolmio muunnelmineen\" ja sitä seuraava selitys. Ratkaiseva lainaus: \"Järjestelmä S3 on suhteellisen kestävä ja palautuu nopeasti.\"",
      "learningPoint": "Opiskelijan tulee yhdistää kuvion käyrät niiden oikeisiin toimintakyvyn kehityskulkuihin. Ratkaiseminen edellyttää sekä kuvion että sen sanallisen selityksen tulkintaa.\nHakuvinkki: Ctrl+F: Järjestelmä S3 ja Järjestelmä S5."
    },
    {
      "id": "g-m12-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nKriittisen infrastruktuurin tutkimuksessa resilienssiajattelu alkoi korvata pelkkään suojeluun keskittyvää lähestymistapaa 2010-luvun puoliväliin mennessä. Muutos perustui osittain havaintoon, ettei täydellistä suojaa voida taata, mutta resilienssin korostuminen viranomaisasiakirjoissa ei vielä osoita sen toteutuneen käytännön toiminnassa.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "36",
        "section": "Suojelusta resilienssiin"
      },
      "explanation": "Resilienssiajattelun yleistyminen liittyi täydellisen suojelun mahdottomuuteen ja sen kustannustehokkuuden ongelmiin. Tutkija kuitenkin erottaa sääntelyssä tapahtuneen käsitteellisen muutoksen käytännön resilienssinhallinnan toteutumisesta.\n\nLähde:\nS. 36, \"Suojelusta resilienssiin\". Ratkaiseva lainaus: \"täydellistä suojelua voida koskaan taata\".",
      "learningPoint": "Opiskelijan tulee yhdistää ajattelutavan muutoksen syyt ja erottaa ne muutoksen käytännön seurauksista. Virallisen tavoitteen hyväksyminen ei tarkoita automaattisesti sen toteutumista.\nHakuvinkki: Ctrl+F: täydellistä suojelua ja säätelyn tasolla."
    },
    {
      "id": "g-m12-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein kriittisen infrastruktuurin resilienssi-indeksin (CIRI) rakennetta ja mittaamista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "CIRI jakaa resilienssin seitsemään kriisisyklin vaiheeseen, joihin kuuluvat esimerkiksi riskinarviointi, varautuminen, reagointi ja oppiminen."
        },
        {
          "id": "b",
          "text": "CIRI:n mittaaminen aloitetaan kokonaisresilienssiä kuvaavalta tasolta 1, minkä jälkeen tulokset jaetaan yksittäisiksi teknisiksi alaindikaattoreiksi tasolle 4."
        },
        {
          "id": "c",
          "text": "Neljännen tason määrälliset ja laadulliset alaindikaattorit muunnetaan yhteismitalliselle asteikolle 0–5, minkä jälkeen tulokset yhdistetään hierarkiassa ylöspäin."
        },
        {
          "id": "d",
          "text": "CIRI sisältää viisi kriisisyklin vaihetta ja seitsemän indikaattoritasoa, joista viimeinen kuvaa järjestelmän kokonaisresilienssiä."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "38"
      },
      "explanation": "A on oikein. CIRI:n seitsemän vaihetta ovat riskinarviointi, ennaltaehkäisy, varautuminen, ennakkovaroitus, reagointi, toipuminen ja oppiminen.\nB on väärin. Mittaaminen etenee alimmalta eli neljänneltä tasolta kohti ensimmäisen tason kokonaisresilienssiä.\nC on oikein. Alaindikaattorit muunnetaan asteikolle 0–5, jotta määrällisiä ja laadullisia havaintoja voidaan yhdistää.\nD on väärin. CIRI sisältää seitsemän kriisisyklin vaihetta ja neljä indikaattoritasoa, ei päinvastoin.\n\nLähde:\nS. 38, kuvio 2 ja sen jälkeinen selitys. Ratkaiseva lainaus: \"Mittaaminen aloitetaan tasolta (4)\".",
      "learningPoint": "Opiskelijan tulee erottaa kriisisyklin vaiheiden ja indikaattoritasojen lukumäärät sekä ymmärtää mittauksen etenemissuunta.\nHakuvinkki: Ctrl+F: CIRI jakaa ja 0–5."
    },
    {
      "id": "g-m12-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä ekologisen resilienssin teoreettisia näkökulmia?",
      "options": [
        {
          "id": "a",
          "text": "Hollingin mukaan ekosysteemin resilienssi liittyy kykyyn kestää häiriöitä ja sopeutua muutoksiin säilyttäen keskeiset rakenteensa ja toimintonsa."
        },
        {
          "id": "b",
          "text": "Pimmin näkökulmassa resilienssi liittyy ekosysteemin vakauteen ja kykyyn palautua alkuperäiseen tasapainoon häiriön jälkeen."
        },
        {
          "id": "c",
          "text": "Folken ym. mallissa ekosysteemin kriittisen kynnysarvon ylittyminen voi johtaa järjestelmän siirtymiseen toiseen vakauden tilaan."
        },
        {
          "id": "d",
          "text": "Hollingin mukaan ekologisen resilienssin ensisijainen mittari on ekosysteemin palautumisnopeus alkuperäiseen tasapainoon, kun taas Pimm korostaa sopeutumista ilman palautumista."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "40",
        "section": "Sopeutuminen vai palautuminen?"
      },
      "explanation": "A on oikein. Holling korosti sopeutumista ja olennaisten toimintojen säilyttämistä.\nB on oikein. Pimm yhdisti resilienssin vakauteen ja alkuperäiseen tasapainoon palautumiseen.\nC on oikein. Folken mallissa kriittisen kynnysarvon ylittäminen voi johtaa järjestelmämuutokseen.\nD on väärin. Siinä Hollingin ja Pimmin lähestymistavat on vaihdettu keskenään.\n\nLähde:\nS. 40, \"Sopeutuminen vai palautuminen?\" ja \"Järjestelmämuutoksen ehkäisy\". Ratkaiseva lainaus: \"Hollingin kanta on kestänyt ajan hammasta paremmin.\"",
      "learningPoint": "Opiskelijan tulee yhdistää samankaltaiset resilienssikäsitykset oikeisiin tutkijoihin ja tunnistaa palautumisen sekä sopeutumisen ero.\nHakuvinkki: Ctrl+F: Stuart Pimm ja Holling määritteli."
    },
    {
      "id": "g-m12-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nSosioekologisten järjestelmien hallinnassa perinteiset lähestymistavat soveltuvat erityisesti tilanteisiin, joissa epävarmuus on vähäistä ja järjestelmään vaikuttaminen on suhteellisen yksinkertaista. Kun epävarmuus tai vaikuttamisen vaikeus kasvaa suureksi, tarvitaan joustavampaa politiikkaa ja skenaariosuunnittelua.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "41",
        "section": "Sosioekologisten järjestelmien hallinta"
      },
      "explanation": "Artikkelissa ympäristönhallinnan strategian valinta sidotaan kahteen tekijään: epävarmuuden asteeseen ja järjestelmän manipuloimisen vaikeuteen. Jos kumpikin on vähäinen, perinteiset menetelmät voivat toimia. Jos jompikumpi on suuri, tarvitaan joustavampaa suunnittelua.\n\nLähde:\nS. 41, \"Sosioekologisten järjestelmien hallinta\". Ratkaiseva lainaus: \"Joustavampaa politiikkaa sekä skenaariosuunnittelua tarvitaan\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, millä ehdoilla eri hallintastrategiat soveltuvat käyttöön. Erityisesti tulee huomata, että jo yhden vaikeuttavan tekijän kasvu voi edellyttää joustavampaa lähestymistapaa.\nHakuvinkki: Ctrl+F: epävarmuuden asteesta ja Joustavampaa politiikkaa."
    },
    {
      "id": "g-m12-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Briguglion ym. (2005) makrotaloudellisen resilienssin luokittelua?",
      "options": [
        {
          "id": "a",
          "text": "Itsetekoisilla mailla on vähäinen luontainen haavoittuvuus ja heikko talouspolitiikka, kun taas tuhlaajapojilla on suuri luontainen haavoittuvuus ja vahva resilienssipolitiikka."
        },
        {
          "id": "b",
          "text": "Paras mahdollinen -luokkaan kuuluvat maat ovat luonnostaan erittäin haavoittuvia mutta kykenevät vähentämään haavoittuvuuttaan tarkoituksenmukaisella politiikalla."
        },
        {
          "id": "c",
          "text": "Itsetekoisilla mailla on suuri luontainen haavoittuvuus mutta resilienssiä tukeva politiikka, kun taas tuhlaajapojilla on vähäisempi luontainen haavoittuvuus mutta ulkoisille shokeille altistava politiikka."
        },
        {
          "id": "d",
          "text": "Pahin mahdollinen -luokkaan kuuluvat maat ovat luonnostaan vähän haavoittuvia, mutta niiden talouspolitiikka lisää resilienssiä entisestään."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "42",
        "section": "Haavoittuvuus ja resilienssi"
      },
      "explanation": "C on oikein. Itsetekoiset maat kykenevät kompensoimaan suurta haavoittuvuuttaan tarkoituksenmukaisella politiikalla. Tuhlaajapojat taas heikentävät suhteellisen hyvää lähtötilannettaan.\nA vaihtaa luokkien ominaisuudet keskenään.\nB on väärin. Paras mahdollinen -luokkaan kuuluvat maat eivät ole luonnostaan erittäin haavoittuvia, ja ne noudattavat resilienssiä vahvistavaa politiikkaa.\nD on väärin. Pahin mahdollinen -luokassa suuri luontainen haavoittuvuus yhdistyy sitä pahentavaan politiikkaan.\n\nLähde:\nS. 42, \"Haavoittuvuus ja resilienssi\". Ratkaiseva lainaus: \"’Itsetekoiset’ ovat sellaisia makrotalouksia, joilla on suuri luontainen taloudellinen haavoittuvuus\".",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi ominaisuutta, luontainen haavoittuvuus ja harjoitettu politiikka, oikeaan luokkaan.\nHakuvinkki: Ctrl+F: Itsetekoiset ja Tuhlaajapoikia."
    },
    {
      "id": "g-m12-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvioiden 1 ja 5 kuvaamia erilaisia palautumis- ja sopeutumispolkuja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Teknologisen resilienssin kuviossa S4 voi saavuttaa aiempaa korkeamman suorituskyvyn, kun taas makrotaloudellisen resilienssin kuviossa osa kehityspoluista voi johtaa taantumaa edeltänyttä aikaa parempaan taloudelliseen tulokseen."
        },
        {
          "id": "b",
          "text": "Teknologisen resilienssin kuviossa S5 kestää stressiä pitkään ja palautuu nopeasti, kun taas makrotaloudellisessa resilienssissä hystereesi tarkoittaa nopeaa palautumista aiemmalle kasvu-uralle."
        },
        {
          "id": "c",
          "text": "Makrotaloudellisessa resilienssissä alkuperäiselle kasvu-uralle palaaminen voi merkitä onnistunutta palautumista, kun taas teknologisessa resilienssissä aiemman suorituskyvyn ylittäminen voi liittyä kriisin seurauksena syntyneeseen innovaatioon."
        },
        {
          "id": "d",
          "text": "Sekä teknologisessa että makrotaloudellisessa resilienssissä järjestelmän palautuminen tarkoittaa aina täsmälleen kriisiä edeltävän suoritustason saavuttamista, eikä kumpikaan malli huomioi paremmalle tasolle kehittymistä."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "37"
      },
      "explanation": "A on oikein. Molemmissa malleissa järjestelmä voi kriisin jälkeen saavuttaa aiempaa paremman suorituskyvyn.\nB on väärin. S5 romahtaa lopulta eikä kykene palautumaan. Hystereesi puolestaan tarkoittaa tässä yhteydessä pysyvää heikentymistä, ei nopeaa palautumista.\nC on oikein. Makrotaloudellisessa resilienssissä palautumista arvioidaan suhteessa kasvu-uraan. Teknologisessa resilienssissä kriisi voi johtaa myös suorituskykyä parantavaan oppimiseen.\nD on väärin. Molemmat mallit tunnistavat mahdollisuuden aiempaa parempaan kehitykseen.\n\nLähde:\nS. 37, kuvio 1, ja s. 42–43, kuvio 5. Sivulla 37 S4:n kuvataan palautuvan \"jopa aiempaa paremmalle tasolle\". Sivulla 43 kuvataan taloudellisia kehityspolkuja, jotka johtavat taantumaa edeltävää aikaa parempaan tulokseen.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden eri resilienssimallin sanalliset selitykset niiden kuvaamiin kehityspolkuihin. Erityisesti tulee tunnistaa, milloin eri tieteenaloilla kuvataan samaa palautumisen tai sopeutumisen periaatetta eri käsittein.\nHakuvinkki: Ctrl+F: Järjestelmä S4, hystereesiksi ja parempaan tulokseen."
    },
    {
      "id": "g-m12-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nPsykologisen resilienssin tutkimuksessa voidaan tarkastella sekä yksilön persoonallisuuspiirteitä että ajan myötä kehittyvää ihmisen ja ympäristön vuorovaikutusta. Tämä tarkoittaa, ettei artikkelissa esitetä psykologista resilienssiä yksinomaan synnynnäisenä ja muuttumattomana ominaisuutena.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "44–45",
        "section": "Mikä vaikuttaa psykologiseen resilienssiin?"
      },
      "explanation": "Artikkelissa erotetaan kaksi koulukuntaa. Ensimmäinen tarkastelee resilienssiä persoonallisuuden piirteenä ja mahdollisesti geneettisesti perustuvana ominaisuutena. Toinen korostaa resilienssin kehittymistä yksilön ja ympäristön vuorovaikutuksessa.\nNäin ollen psykologinen resilienssi ei artikkelin perusteella rajoitu muuttumattomaan persoonallisuusominaisuuteen.\n\nLähde:\nS. 44–45, \"Mikä vaikuttaa psykologiseen resilienssiin?\". Sivulla 44 todetaan toisesta koulukunnasta: \"resilienssi nähdään kykynä, joka kehittyy ajan myötä ihmisen ja ympäristön vuorovaikutuksessa\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin yksi tutkimuksellinen näkökulma esitetään virheellisesti koko tieteenalan yhteisenä käsityksenä. Eri koulukunnat voivat korostaa saman ilmiön erilaisia selityksiä.\nHakuvinkki: Ctrl+F: persoonallisuuden piirteenä ja kehittyy ajan myötä."
    },
    {
      "id": "g-m12-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa esitetyt psykologisen resilienssin tutkimukset ja niiden tulokset?",
      "options": [
        {
          "id": "a",
          "text": "Bonannon ym. (2007) tutkimuksessa tarkasteltiin yhdysvaltalaisten sotilaiden sodanjälkeistä resilienssiä, kun taas Isaacsin ym. (2017) tutkimuksessa selvitettiin New Yorkin asukkaiden PTSD-oireita syyskuun 11. päivän iskujen jälkeen."
        },
        {
          "id": "b",
          "text": "Graberin ym. (2016) tutkimuksessa poikien havaittiin olevan tyttöjä vähemmän haavoittuvia, vaikka ystävyyssuhteiden laatu oli yhteydessä molempien ryhmien resilienssiin."
        },
        {
          "id": "c",
          "text": "Isaacsin ym. (2017) tutkimuksessa resilienssi oli suurinta sotilailla, joilla oli aiempia psykiatrisia ongelmia, kun taas Bonannon ym. tutkimuksessa PTSD-oireita arvioitiin vain sairaalahoidossa olevilla henkilöillä."
        },
        {
          "id": "d",
          "text": "Bonannon ym. (2007) tutkimuksessa tarkasteltiin PTSD-oireita 9/11-iskujen jälkeen, Isaacsin ym. (2017) tutkimuksessa yhdysvaltalaisten sotilaiden sodanjälkeisiä kokemuksia ja Graberin ym. (2016) tutkimuksessa ystävyyden laadun yhteyttä lasten resilienssiin."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "45",
        "section": "Psykologisen resilienssin mittaaminen"
      },
      "explanation": "D on oikein. Kaikki kolme tutkimusta on yhdistetty oikeisiin tutkimuskohteisiin ja havaintoihin.\nA on väärin. Se vaihtaa Bonannon ja Isaacsin tutkimuskohteet keskenään.\nB on väärin. Graberin ym. tutkimuksessa pojat olivat tarkastelussa haavoittuvampia kuin tytöt.\nC on väärin. Isaacsin ym. tutkimuksessa suurinta resilienssiä havaittiin ryhmässä, jolla ei ollut aiempaa psykiatrista historiaa. Bonannon tutkimus perustui laajaan kotitalousaineistoon.\n\nLähde:\nS. 45, \"Psykologisen resilienssin mittaaminen\". Ratkaiseva lainaus: \"merkittävän positiivisen yhteyden koetun ystävyyden laadun ja itse arvioidun resilienssin välillä\".",
      "learningPoint": "Opiskelijan tulee yhdistää kolme tutkimusta niiden oikeisiin kohdejoukkoihin ja tuloksiin. Väärissä vaihtoehdoissa tutkimusten todellisia havaintoja on siirretty toisten tutkijoiden nimiin tai muutettu vastakkaisiksi.\nHakuvinkki: Ctrl+F: Bonanno, Isaacs ja Graber."
    },
    {
      "id": "g-m12-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan resilienssin mittaamisen kehitys on mahdollistanut eri sovellusalojen järjestelmällisemmän vertailun ja kehittämistarpeiden tunnistamisen. Tästä ei kuitenkaan seuraa, että kaikilla tieteenaloilla käytettäisiin samoja indikaattoreita tai että resilienssille olisi muodostunut yksi yleisesti hyväksytty määritelmä.",
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "46–47",
        "section": "Onko poikkitieteellinen oppiminen mahdollista?"
      },
      "explanation": "Resilienssin mittaaminen on kehittynyt laadullisten, semikvantitatiivisten ja määrällisten menetelmien avulla. Eri sovellusaloilla mittarit ja tarkastelukohteet kuitenkin vaihtelevat.\nArtikkelissa korostetaan käsitteen moniulotteisuutta ja sitä, että sen merkitykset eroavat tieteenalojen välillä. Mittaamisen kehitys ei siis tarkoita käsitteellistä yhdenmukaisuutta.\n\nLähde:\nS. 46–47, \"Onko poikkitieteellinen oppiminen mahdollista?\" ja taulukko 1. Sivulla 46 todetaan: \"Kyse on melkein aina indikaattori-pohjaisesta mittaamisesta\".",
      "learningPoint": "Opiskelijan tulee erottaa useilla aloilla esiintyvä yhteinen menetelmällinen periaate kaikkia aloja koskevasta yhdenmukaisuudesta. Samankaltainen mittaustapa ei tarkoita samoja mittareita tai määritelmiä.\nHakuvinkki: Ctrl+F: indikaattori-pohjaisesta ja merkitysten miinakenttä."
    },
    {
      "id": "g-m12-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyä resilienssikäsitteen kriittistä tarkastelua?",
      "options": [
        {
          "id": "a",
          "text": "Walkerin ja Cooperin (2011) kritiikissä resilienssiajattelu yhdistetään uusliberalistiseen kehitykseen, jossa vastuuta siirretään viranomaisilta kansalaisille ja kansalaisyhteiskunnalle."
        },
        {
          "id": "b",
          "text": "Tierney (2015) kritisoi Yhdysvaltojen resilienssilähestymistapoja muun muassa siitä, etteivät ne turvanneet riittävästi hurrikaani Katrinasta kärsineiden ihmisten asemaa."
        },
        {
          "id": "c",
          "text": "Chandlerin (2014) kritiikki liittyy myös siihen, miten resilienssiajattelu muuttaa käsitystä hallituksesta ja mahdollisuudesta hallita monimutkaisia yhteiskunnallisia prosesseja."
        },
        {
          "id": "d",
          "text": "Bourbeaun (2018; 2013) mukaan resilienssikriittisen tutkimuksen keskeinen vahvuus on se, että se tarkastelee tasapuolisesti käsitteen myönteisiä ja kielteisiä sovelluksia."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "48",
        "section": "Resilienssiä vastaan vai lisää resilienssiä?"
      },
      "explanation": "A on oikein. Walkerin ja Cooperin kritiikki liittyy vastuunsiirtoon julkiselta vallalta kansalaisille ja yksityiselle sektorille.\nB on oikein. Tierney korostaa, että valtion olisi pitänyt ottaa vahvempi rooli Katrinan jälkeisessä jälleenrakennuksessa.\nC on oikein. Chandler tarkastelee resilienssiä osana muuttuvaa käsitystä hallinnasta ja monimutkaisten järjestelmien ohjaamisesta.\nD on väärin. Bourbeau kritisoi resilienssikriittistä suuntausta siitä, että se keskittyy uusliberalistisiin kielteisiin oletuksiin eikä huomioi käsitteen myönteisiä ulottuvuuksia.\n\nLähde:\nS. 48, \"Resilienssiä vastaan vai lisää resilienssiä?\". Ratkaiseva lainaus: \"ei tavoita resilienssin myönteisiä ulottuvuuksia\".",
      "learningPoint": "Opiskelijan tulee erottaa resilienssikäsitteeseen kohdistuva kritiikki itse kritiikkiin kohdistuvasta vastakritiikistä. Väärässä vaihtoehdossa Bourbeaun arvio on muutettu päinvastaiseksi.\nHakuvinkki: Ctrl+F: Bourbeau ja uusliberalistiset kielteiset."
    },
    {
      "id": "g-m12-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Pursiaisen artikkelin johtopäätösten ja resilienssin eri sovellusalojen vertailun perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Palautumista ja sopeutumista korostavat resilienssistrategiat voivat täydentää toisiaan, ja niiden tarkoituksenmukaisuus riippuu tarkasteltavasta uhasta sekä järjestelmän olosuhteista."
        },
        {
          "id": "b",
          "text": "Koska ekologisessa resilienssissä korostetaan sopeutumista, myös yksittäisen sähkökatkoksen jälkeen yhteiskunnan tulisi ensisijaisesti muuttaa pysyvästi toimintarakenteitaan eikä pyrkiä palautumaan normaaliin tilaan."
        },
        {
          "id": "c",
          "text": "Rauhan-, konfliktin- ja maailmanpolitiikan tutkimuksessa voitaisiin hyödyntää muiden alojen indikaattoriperusteisia mittausmenetelmiä, mutta niiden soveltaminen edellyttäisi tarkasteltavaan kohteeseen sopivaa räätälöintiä."
        },
        {
          "id": "d",
          "text": "Resilienssin mittaaminen on kehittynyt niin pitkälle, että yhteiskunnallista, ekologista ja psykologista resilienssiä voidaan arvioida samoilla indikaattoreilla ilman tieteenalakohtaisia muutoksia."
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
        "articleId": "resilienssin-ulottuvuudet",
        "page": "46 ja 49",
        "section": "Onko poikkitieteellinen oppiminen mahdollista?"
      },
      "explanation": "A on oikein. Tutkija korostaa, ettei palautumista ja sopeutumista tule pitää automaattisesti toisensa poissulkevina. Sopiva strategia riippuu uhasta ja tilanteesta.\nB on väärin. Artikkelissa yksittäinen sähkökatkos mainitaan tilanteena, jonka jälkeen normaaliin tilaan palautuminen voi olla tarkoituksenmukaista. Ilmastonmuutoksen kaltaisessa pitkäkestoisessa muutoksessa tarvitaan puolestaan myös sopeutumista.\nC on oikein. Muilla tieteenaloilla kehitetyt indikaattoriperusteiset mittausmenetelmät tarjoavat mahdollisuuksia rauhan-, konfliktin- ja maailmanpolitiikan tutkimukseen, mutta niitä on sovellettava kyseisen alan tarpeisiin.\nD on väärin. Resilienssin sovellusalat eroavat tarkastelukohteidensa, uhkiensa ja mittausmenetelmiensä osalta. Yhteinen indikaattoriperiaate ei tarkoita, että samat indikaattorit sopisivat sellaisinaan kaikille aloille.\n\nLähde:\nS. 46 ja 49, \"Onko poikkitieteellinen oppiminen mahdollista?\" sekä artikkelin loppupäätelmät. Sivulla 49 todetaan, että joskus tarvitaan \"molempia tai useampia resilienssistrategioita\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, missä tilanteissa eri resilienssistrategiat soveltuvat käyttöön ja millä edellytyksillä muiden tieteenalojen mittausmenetelmiä voidaan hyödyntää. Yhdessä tilanteessa toimivaa strategiaa ei saa yleistää kaikkiin kriiseihin.\nHakuvinkki: Ctrl+F: Yksi optio voi olla sopiva ja räätälöidysti."
    }
  ]
} satisfies ValintakoeGExercise;
