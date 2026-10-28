import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 2: uusimman tehtävätekstin tehtävät 1–18.
 * Kesto 32 min. Kategoriat vastaavat päivitettyä 14 kategorian luokitusta.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise2Base = {
  "id": "keskivaikea-harjoitus-2",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 2 – Luontotieto ja sen käyttö kestävyysmurroksessa: havaintoja vakiintuneilta ja nousevilta toimijoilta Suomessa",
  "description": "32 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 32,
  "difficulty": "medium",
  "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
  "articleTitle": "Luontotieto ja sen käyttö kestävyysmurroksessa: havaintoja vakiintuneilta ja nousevilta toimijoilta Suomessa",
  "articleUrl": "https://aluejaymparisto.journal.fi/article/view/143595/98987",
  "questions": [
    {
      "id": "g-m2-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin aineistossa havaittuja eroja luontotiedon käyttäjäryhmien välillä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Ympäristöhallinto, luonnonvara-ala ja tiedetoimittajat määrittelivät luontotietoa ensisijaisesti dataksi ja informaatioksi, ja näille käyttäjille oli tyypillistä kyky soveltaa ja kontekstoida tutkimustietoa."
        },
        {
          "id": "b",
          "text": "Opettajat ja ympäristöjärjestöt ymmärsivät luontotiedon kaikkien neljän merkityksen kautta, ja heidän työssään tutkimustietoa myös yksinkertaistettiin ja tiivistettiin maallikoille ymmärrettäväksi."
        },
        {
          "id": "c",
          "text": "Tiedonvälittäjät määrittelivät luontotiedon ensisijaisesti dataksi, koska he toimivat luontotiedon asiantuntijoina tutkijoiden ja päättäjien välissä."
        },
        {
          "id": "d",
          "text": "Yksityisen sektorin tietotarpeet olivat moninaisia mutta vielä vakiintumattomia, minkä vuoksi niiden määrittely ja niihin vastaaminen oli vaikeaa."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "126",
        "section": "Millaisia merkityksiä eri toimijat antavat luontotiedolle?"
      },
      "explanation": "A, B ja D yhdistävät oikein toimijaryhmän ja sille artikkelissa kuvatun luontotiedon käyttötavan tai tietotarpeen. C sisältää aineistosta tuttuja elementtejä, mutta yhdistää ne väärin: tiedonvälittäjät ovat tiede-politiikka-rajapinnan asiantuntijoita eivätkä luontotiedon asiantuntijoita.\n\nLähde:\nSivu 126, ”Millaisia merkityksiä eri toimijat antavat luontotiedolle?”\n\n”Aineistossa perinteisiä luontotiedon käyttäjiä olivat ympäristöhallinto, luonnonvara-ala sekä tiedetoimittajat.”\n\n”Opettajat ja ympäristöjärjestöt ymmärsivät luontotiedon laajasti kaikkien neljän merkityksen kautta.”\n\n”Yksityisellä sektorilla tietotarpeet ovat moninaisempia, mutta eivät vielä vakiintuneita.”",
      "learningPoint": "Yhdistä käyttötapa ja asiantuntijuus oikeaan toimijaryhmään. Tiede-politiikka-rajapinnan asiantuntijuus ei tarkoita samaa kuin luontotiedon sisällöllinen asiantuntijuus.\n\nHakuvinkki: Hae esimerkiksi ”perinteisiä luontotiedon käyttäjiä” ja vertaa sen jälkeen samasta osiosta eri käyttäjäryhmiä koskevia kuvauksia."
    },
    {
      "id": "g-m2-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Artikkelin perusteella välineellisen tiedonkäytön vakiintuneisuus poistaa olennaisesti luontotiedon käyttöön liittyvät ongelmat, koska tietoa on helposti saatavilla ja sen soveltaminen on suoraviivaista.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "126, 127",
        "section": "Välineellinen tiedonkäyttö"
      },
      "explanation": "Väite yhdistää oikein kaksi välineellisen tiedonkäytön ominaisuutta: käyttö koettiin verrattain sujuvaksi ja esimerkiksi datan soveltaminen käytäntöön saattoi olla suoraviivaista. Tästä ei kuitenkaan seuraa, että ongelmat poistuisivat. Artikkelissa mainitaan edelleen esimerkiksi datan tarkkuuteen, ajalliseen ja tilalliseen laajuuteen sekä saatavuuteen liittyviä haasteita.\n\nLähde:\nSivut 126 ja 127, ”Välineellinen tiedonkäyttö”\n\nSivu 126:\n\n”Välineellisen tiedonkäytön ominaispiirteitä olivat vakiintuneet käytännöt ja järjestelmät, ja aineistossa välineellinen tiedonkäyttö koettiin verrattain helpoksi, sujuvaksi ja onnistuneeksi.”\n\nSivu 127:\n\n”Datan käytön haasteet liittyivät datan ominaisuuksiin, kuten tilalliseen ja ajalliseen laajuuteen tai tarkkuuteen, sekä datan saatavuuteen.”",
      "learningPoint": "Vertaa väitteen voimakkuutta aineistoon. Verrattain helppo ja sujuva tiedonkäyttö ei tarkoita, että tiedon saatavuuteen tai ominaisuuksiin liittyvät ongelmat poistuisivat.\n\nHakuvinkki: Hae ensin ”välineellisen tiedonkäytön ominaispiirteitä” ja tarkista sen jälkeen samasta osiosta, millaisia haasteita datan käyttöön kuitenkin liitetään."
    },
    {
      "id": "g-m2-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelissa esitettyä eroa käsitteellisen ja symbolisen tiedonkäytön välillä?",
      "options": [
        {
          "id": "a",
          "text": "Käsitteellisessä tiedonkäytössä pyritään yhdistämään ja soveltamaan tietoa eri tilanteisiin, kun taas symbolisessa tiedonkäytössä korostuvat tiedon käytön tavoitteet sekä pyrkimys vaikuttaa toimintaan."
        },
        {
          "id": "b",
          "text": "Käsitteellinen tiedonkäyttö perustuu ensisijaisesti tunteiden herättämiseen, kun taas symbolinen tiedonkäyttö perustuu tiedon suoraviivaiseen soveltamiseen ennalta tunnistettuun ongelmaan."
        },
        {
          "id": "c",
          "text": "Käsitteellisessä tiedonkäytössä pyritään ensisijaisesti vaikuttamaan muiden toimintaan, kun taas symbolisessa tiedonkäytössä tietoa sovelletaan lähinnä toimijan omassa suunnittelussa."
        },
        {
          "id": "d",
          "text": "Käsitteellinen ja symbolinen tiedonkäyttö eroavat ennen kaikkea siinä, että vain käsitteellisen tiedonkäytön tulee artikkelin mukaan perustua tieteelliseen tietoon."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "128, 130, 131",
        "section": "Käsitteellinen tiedonkäyttö"
      },
      "explanation": "A kokoaa oikein käyttötapojen keskeisen eron. Käsitteellisessä käytössä tietoa joudutaan tulkitsemaan ja soveltamaan erilaisiin päätöksenteon ja toiminnan tilanteisiin. Symbolisessa käytössä huomio siirtyy erityisesti siihen, mitä tiedon käytöllä pyritään saamaan aikaan, ja aineistossa sillä pyrittiin lähes poikkeuksetta vaikuttamaan muiden toimintaan. Muut vaihtoehdot vaihtavat käyttötapojen ominaisuuksia keskenään tai tekevät liian pitkälle menevän rajauksen tieteellisen tiedon merkityksestä.\n\nLähde:\nSivu 128, ”Käsitteellinen tiedonkäyttö”\n\n”Esimerkkeinä käsitteellisestä tiedonkäytöstä olivat ympäristönsuojelun tai sektoripolitiikan valmistelu, toimijan oman luonnon monimuotoisuustyön suunnittelu sekä yhteiskunnallinen vaikuttamistyö.”\n\nSivu 130, ”Symbolinen tiedonkäyttö”\n\n”Symboliselle tiedonkäytölle oli aineistossa tyypillistä korostaa tiedon käyttöön ja tulkintaan liittyviä tavoitteita, ei niinkään tieteellisen tiedon ominaisuuksia.”\n\nSivu 131:\n\n”Yksi keskeinen ero on se, että symbolisella tiedonkäytöllä pyrittiin lähes poikkeuksetta vaikuttamaan muiden toimintaan.”",
      "learningPoint": "Yhdistä ominaisuudet oikeaan tiedonkäyttötapaan. Käsitteellisen ja symbolisen käytön kuvaukset voivat molemmat löytyä aineistosta, vaikka ne olisi vaihtoehdossa liitetty vääriin käsitteisiin.\n\nHakuvinkki: Paikanna erikseen otsikot ”Käsitteellinen tiedonkäyttö” ja ”Symbolinen tiedonkäyttö” ja vertaa, millaisiin tarkoituksiin tiedon käyttö kummassakin liitetään."
    },
    {
      "id": "g-m2-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa artikkelissa esitetyn luontotiedon jaottelun perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Lajien runsaudessa tai levinneisyydessä havaittujen muutosten tunnistaminen edustaa informaatiota, koska siinä dataa analysoimalla tunnistetaan vuorovaikutussuhteita."
        },
        {
          "id": "b",
          "text": "Luontotyyppien uhanalaisuusarviointi edustaa artikkelin jaottelussa viisautta, koska arvioinnissa tuotetaan suosituksia tulevaa toimintaa varten."
        },
        {
          "id": "c",
          "text": "Ilmastonmuutoksen vaikutusten ymmärtäminen lajeihin ja niiden levinneisyyteen edustaa tietämystä, koska siinä tunnistetaan vuorovaikutusmekanismeja ja keskinäisriippuvuuksia."
        },
        {
          "id": "d",
          "text": "Tiedepaneelien toimintasuositukset voidaan ymmärtää viisaudeksi, koska viisauteen liittyy säännönmukaisuuksien ja toimintaperiaatteiden tunnistaminen sekä kyky varautua samanaikaisiin toimintaympäristön muutoksiin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "c",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "122",
        "section": "Luontotiedon käyttö ja yhteiskunnallinen muutos"
      },
      "explanation": "A, C ja D soveltavat oikein artikkelin data → informaatio → tietämys → viisaus -jaottelua annettuihin esimerkkeihin. B on väärin, vaikka siinä yhdistetään kaksi artikkelista löytyvää asiaa: luontotyyppien uhanalaisuusarviointi kuuluu artikkelissa tietämykseen, ei viisauteen. Tehtävässä ei siis riitä esimerkin löytäminen, vaan esimerkki pitää yhdistää oikeaan tiedon lajiin.\n\nLähde:\nSivu 122, ”Luontotiedon käyttö ja yhteiskunnallinen muutos”\n\n”Dataa analysoimalla voidaan tunnistaa vuorovaikutussuhteita eli informaatiota, esimerkiksi muutoksia lajien runsaudessa tai levinneisyydessä.”\n\n”Esimerkiksi ilmastonmuutoksen vaikutukset lajien ja niiden levinneisyyteen ymmärretään tietämyksenä.”\n\n”Erilaiset arvioinnit, esimerkiksi luontotyyppien uhanalaisuusarviointi tai ympäristövaikutusten arviointi, tuottavat tietämystä.”\n\n”Esimerkiksi tiedepaneelit tekevät toimintasuosituksia, jotka voidaan ymmärtää viisaudeksi.”",
      "learningPoint": "Yhdistä esimerkki oikeaan tiedon lajiin. Luontotyyppien uhanalaisuusarviointi tuottaa artikkelin mukaan tietämystä, eikä sitä voi siirtää viisauden esimerkiksi.\n\nHakuvinkki: Hae esimerkiksi ”dataa analysoimalla”. Jäsennä sen ympäriltä neljän vaiheen ketju data → informaatio → tietämys → viisaus ennen vaihtoehtojen arviointia."
    },
    {
      "id": "g-m2-q5",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Artikkelin perusteella luontotiedon käyttäjien ja käyttötapojen moninaistuminen tekee tutkijoiden, muiden asiantuntijoiden ja tiedon käyttäjien välisestä henkilöityneestä vuorovaikutuksesta aiempaa vaikeammin toteutettavaa.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "122",
        "section": "Mitä luontotieto on?"
      },
      "explanation": "Aineistossa yhdistetään suoraan kaksi kehityskulkua: perinteisessä luonnonsuojelussa vuorovaikutus on ollut tiivistä ja henkilöitynyttä, mutta käyttäjien, käyttötapojen ja ratkaistavien ongelmien moninaistuminen vaikeuttaa samanlaisen vuorovaikutuksen ylläpitämistä. Väite ei tarkoita, että henkilöitynyt vuorovaikutus katoaisi kokonaan, vaan että sen toteuttaminen vaikeutuu.\n\nLähde:\nSivu 122, ”Mitä luontotieto on?”\n\n”Luontotiedon käytössä luonnonsuojelupäätösten yhteydessä on korostunut tutkijoiden, muiden asiantuntijoiden ja luonnonsuojelua toteuttavien henkilöiden vuorovaikutus, joka on tyypillisesti moniulotteista, tapauskohtaista ja henkilöitynyttä.”\n\n”Samanlainen tiivis, henkilöitynyt vuorovaikutus vaikeutuu luontotiedon käyttäjien, käyttötapojen ja ratkottavien haasteiden moninaistuessa.”",
      "learningPoint": "Tunnista tekstissä kuvatun yhteyden tiivistelmä. Käyttäjien ja käyttötapojen moninaistuminen vaikeuttaa henkilöitynyttä vuorovaikutusta, mutta ei tarkoita sen katoamista kokonaan.\n\nHakuvinkki: Hae ”henkilöitynyt vuorovaikutus” ja tarkista, miten sen kuvataan muuttuvan käyttäjien ja käyttötapojen moninaistuessa."
    },
    {
      "id": "g-m2-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista kuvaa oikein tutkimuksessa käytettyä aineistoa ja sen kahta pääosaa?",
      "options": [
        {
          "id": "a",
          "text": "Ensimmäinen osa painottui ympäristöhallinnon virkamiesten ja tutkijoiden kokemuksiin, kun taas toinen osa laajensi tarkastelua muun muassa opettajiin, ympäristöjärjestöihin, tiedetoimittajiin, tiedonvälittäjiin ja luonnonvara-alan toimijoihin."
        },
        {
          "id": "b",
          "text": "Ensimmäisessä osassa tarkasteltiin pääasiassa luontotiedon uusia käyttäjiä yksityisellä sektorilla, kun taas toisessa osassa keskityttiin ympäristöhallinnon vakiintuneisiin luonnonsuojeluprosesseihin."
        },
        {
          "id": "c",
          "text": "Molemmissa aineiston osissa tarkasteltiin samoja toimijaryhmiä, mutta ensimmäinen osa käsitteli tiedon tuotantoa ja toinen yksinomaan tiedon väärinkäyttöä."
        },
        {
          "id": "d",
          "text": "Ensimmäinen osa edusti luontotiedon käyttöä laajasti osana kestävyysmurrosta, kun taas toinen osa rajautui perinteiseen luonnonsuojeluun ja politiikan valmisteluun."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "124",
        "section": "Aineisto ja menetelmät"
      },
      "explanation": "A yhdistää oikein sekä aineiston osat että niiden toimijaryhmät. Ensimmäinen osa edusti perinteisempää luontotiedon käyttöä luonnonsuojelussa ja politiikan valmistelussa, kun taas toisessa käyttöä tarkasteltiin laajemmin osana kestävyysmurrosta. B ja D vaihtavat näiden kahden aineiston osan ominaisuudet keskenään.\n\nLähde:\nSivu 124, ”Aineisto ja menetelmät”\n\n”Aineiston ensimmäisessä osassa syvennyttiin ympäristöhallinnossa työskentelevien virkamiesten ja tutkijoiden kokemuksiin luontotiedon käytöstä…”\n\n”Aineiston toinen osa puolestaan pureutui erilaisten luontotiedon käyttäjien kokemuksiin ja kehitystoiveisiin.”\n\nToiseen osaan kuuluivat opettajat, ympäristöjärjestöt, tiedetoimittajat, tiedonvälittäjät ja luonnonvara-alan toimijat.",
      "learningPoint": "Tarkista, kumpaan aineiston osaan kukin toimijaryhmä ja näkökulma kuuluu. Kahden osan kuvaukset voivat olla itsessään oikeita mutta väärin päin yhdistettyjä.\n\nHakuvinkki: Hae ensin ”aineiston ensimmäisessä osassa” ja sitten ”aineiston toinen osa”. Vertaa kummankin osallistujia ja tarkoitusta."
    },
    {
      "id": "g-m2-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista kuvaavat artikkelin perusteella välineellisen tiedonkäytön kehittämistä ja siihen liittyviä haasteita? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Välineellistä tiedonkäyttöä voidaan tukea täyttämällä tietoaukkoja ja ohjaamalla tiedontuotantoa tunnistettuihin yhteiskunnallisiin tietotarpeisiin."
        },
        {
          "id": "b",
          "text": "Välineellisen tiedonkäytön pääasialliset haasteet liittyivät aineiston mukaan ennen kaikkea arvojen ja maailmankuvien ristiriitoihin."
        },
        {
          "id": "c",
          "text": "Pitkäjänteisen luontotiedon tuotantoa vaikeutti muun muassa se, että rahoitusta oli tyypillisesti tarjolla hanketyöhön, johon pitkäjänteinen seurantatyö sopii huonosti."
        },
        {
          "id": "d",
          "text": "Välineellisen tiedonkäytön kehittäminen edellyttää artikkelin mukaan ensisijaisesti tiedon käyttäjien maailmankuvien muuttamista hallinnollisten ratkaisujen sijaan."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "127",
        "section": "Välineellinen tiedonkäyttö"
      },
      "explanation": "A ja C yhdistävät oikein välineellisen tiedonkäytön kehittämiskeinot ja käytännön rajoitteet. Artikkelissa sen ongelmia kuvataan ennen kaikkea hallinnollisiksi ja käytännöllisiksi, minkä vuoksi B siirtää toisissa yhteyksissä korostuvia arvoihin ja maailmankuviin liittyviä ongelmia väärään käyttötapaan. Samasta syystä D kääntää artikkelissa esitetyn kehittämistavan vääräksi.\n\nLähde:\nSivu 127, ”Välineellinen tiedonkäyttö”\n\n”Välineellistä tiedonkäyttöä voidaan tukea täyttämällä tietoaukkoja esimerkiksi käynnistämällä puuttuvia seurantoja ja toisaalta ohjaamalla tiedontuotantoa vastaamaan tunnistettuihin yhteiskunnallisiin tietotarpeisiin.”\n\n”Välineellisen tiedonkäytön pääasiallisiksi haasteiksi nimettiin hallinnollisia ja käytännöllisiä syitä…”\n\n”Epävarmuus liittyy esimerkiksi rahoitukseen, jota on tyypillisesti tarjolla hanketyöhön, mutta johon pitkäjänteinen seurantatyö istuu huonosti.”",
      "learningPoint": "Yhdistä haaste oikeaan tiedonkäyttötapaan. Arvoihin ja maailmankuviin liittyviä ongelmia ei voi siirtää välineellisen käytön pääasiallisiksi haasteiksi, jos tekstissä korostuvat hallinnolliset ja käytännölliset syyt.\n\nHakuvinkki: Paikanna ”pääasiallisiksi haasteiksi” ja tarkista samasta osiosta sekä ongelmien luonne että niihin esitetyt ratkaisut."
    },
    {
      "id": "g-m2-q8",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista päätelmistä vastaa parhaiten artikkelissa esitettyä yhteyttä luontotiedon käyttötapojen ja tarvittavan asiantuntijuuden välillä?",
      "options": [
        {
          "id": "a",
          "text": "Välineellisessä tiedonkäytössä tarvitaan tyypillisesti laajin mahdollinen toimijajoukko, koska tiedon soveltaminen perustuu sidosryhmien osallistamiseen."
        },
        {
          "id": "b",
          "text": "Käsitteellisessä tiedonkäytössä tarvittava asiantuntijuus yleensä kapenee verrattuna välineelliseen tiedonkäyttöön, koska tiedon käyttäjä siirtyy yksittäisen ilmiön tarkasteluun."
        },
        {
          "id": "c",
          "text": "Välineellinen tiedonkäyttö nojaa tyypillisesti yksittäisiin substanssiasiantuntijoihin, käsitteellinen käyttö laajempaan poikkitieteelliseen asiantuntijajoukkoon ja symbolinen käyttö voi tuoda mukaan vielä sidosryhmiäkin."
        },
        {
          "id": "d",
          "text": "Kaikissa kolmessa tiedonkäyttötavassa asiantuntijuuden rakenne pysyy pääosin samana, vaikka tiedon käyttötarkoitus muuttuu."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "132",
        "section": "Luontotieto kestävyysmurroksen aikakaudella"
      },
      "explanation": "C kokoaa oikein artikkelissa kuvatun muutoksen: asiantuntijuuden kirjo ja mukana olevien toimijoiden määrä laajenevat siirryttäessä välineellisestä käsitteelliseen ja edelleen symboliseen tiedonkäyttöön. B kääntää tämän kehityssuunnan päinvastaiseksi, ja A sijoittaa symboliselle tiedonkäytölle tyypillisen laajan osallistamisen välineelliseen tiedonkäyttöön.\n\nLähde:\nSivu 132, ”Luontotieto kestävyysmurroksen aikakaudella”\n\n”Välineellinen tiedonkäyttö nojaa tyypillisesti yksittäisiin substanssiasiantuntijoihin.”\n\n”Käsitteellinen tiedonkäyttö puolestaan vaatii poikkitieteellisen asiantuntijajoukon yhteistyötä, laajentaen tarvittavan asiantuntijuuden kirjoa ja osallistuvien asiantuntijoiden määrää.”\n\n”Symbolisessa tiedonkäytössä osallistetaan usein vielä laajempi toimijajoukko, esimerkiksi sidosryhmiä asiantuntijoiden lisäksi.”",
      "learningPoint": "Vertaa asiantuntijuuden kirjoa ja osallistujajoukon laajuutta eri käyttötavoissa. Tarkista, missä joukko on rajatumpi ja missä laajempi, vaikka vaihtoehto käyttäisi kaikkia oikeita käsitteitä.\n\nHakuvinkki: Hae ”substanssiasiantuntijoihin” ja seuraa samasta kappaleesta, miten asiantuntijajoukkoa kuvataan käsitteellisessä ja symbolisessa tiedonkäytössä."
    },
    {
      "id": "g-m2-q9",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä havaintoja käsitteellisen tiedonkäytön haasteista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kokonaiskuvan muodostaminen voi edellyttää esimerkiksi ilmastonmuutosta ja luontokatoa koskevan tiedon yhdistämistä, eikä tällainen yhdistäminen ollut haastateltavien mukaan aina onnistunut."
        },
        {
          "id": "b",
          "text": "Luonnonvara-alan toimijat pitivät tiedon soveltamista oikeaan kontekstiin merkittävänä esteenä, koska käytännön suunnittelussa voidaan joutua huomioimaan samanaikaisesti esimerkiksi luonto-, vesistö- ja ilmastovaikutuksia."
        },
        {
          "id": "c",
          "text": "Käsitteellisen tiedonkäytön keskeinen etu oli se, että juuri kyseiseen käyttötarkoitukseen sovitettua tietoa oli yleensä helposti saatavilla."
        },
        {
          "id": "d",
          "text": "Käytännön toimien yhteys laajempiin tavoitteisiin, kuten hiilineutraaliuteen tai luontopositiivisuuteen, koettiin vaikeaksi hahmottaa."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "128, 129",
        "section": "Käsitteellinen tiedonkäyttö"
      },
      "explanation": "A, B ja D kuvaavat käsitteellisen tiedonkäytön yhteydessä tunnistettuja haasteita. C kääntää tiedon saatavuutta koskevan havainnon päinvastaiseksi: artikkelin mukaan tiedon etsiminen voi vaatia paljon aikaa ja vaivaa, eikä juuri kyseiseen kontekstiin sopivaa tietoa ole aina olemassa. Tehtävässä pitää yhdistää käsitteellisen tiedonkäytön yleinen haaste siihen, miten se näkyy käytännössä eri tilanteissa.\n\nLähde:\nSivut 128 ja 129, ”Käsitteellinen tiedonkäyttö”\n\nSivu 128:\n\n”Käyttäjän tulee osata yhdistää eri ilmiöitä, kuten ilmastonmuutosta ja luontokatoa, koskevaa tietoa, mikä ei ollut haastateltavien kokemuksen mukaan aina onnistunut.”\n\nSivu 129:\n\n”Erityisesti luonnonvara-alan toimijat pitivät tiedon soveltamista kontekstiin sopivaksi merkittävänä esteenä luontotiedon käytölle.”\n\n”Nimenomaan käytännön toimien yhteys laajempiin poliittisiin tavoitteisiin, esimerkiksi hiilineutraalius- tai luontopositiivisuustavoitteisiin, koettiin vaikeaksi hahmottaa.”",
      "learningPoint": "Tarkista, muutetaanko aineistossa kuvattu haaste vahvuudeksi. Kontekstiin sopivan tiedon etsimisen vaikeutta ei voi kuvata sen helppona saatavuutena.\n\nHakuvinkki: Hae ”kontekstiin sopivaa tietoa” ja ”käytännön toimien yhteys”."
    },
    {
      "id": "g-m2-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Artikkelin mukaan siirtyminen datasta kohti viisautta tekee luontotiedosta yksiselitteisempää, koska poikkitieteellisyys vähentää tiedon epävarmuutta, poliittisuutta ja subjektiivisuutta.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "126",
        "section": "Millaisia merkityksiä eri toimijat antavat luontotiedolle?"
      },
      "explanation": "Väitteen ensimmäinen osa vastaa aineistoa: datasta kohti viisautta siirryttäessä näkökulmat moninaistuvat ja tiedontuotanto muuttuu poikkitieteellisemmäksi. Väite kuitenkin johtaa tästä päinvastaisen seurauksen kuin artikkeli. Epävarmuus, poliittisuus ja subjektiivisuus eivät vähene vaan kasvavat.\n\nLähde:\nSivu 126, ”Millaisia merkityksiä eri toimijat antavat luontotiedolle?”\n\n”Siirryttäessä datasta kohti viisautta luontoa lähestytään moninaisista näkökulmista ja tiedontuotannosta tulee poikkitieteellistä ja edelleen tieteen rajat ylittävää.”\n\n”Samaan aikaan tiedon epävarmuus, poliittisuus ja subjektiivisuus kasvavat.”",
      "learningPoint": "Vertaa muutoksen suuntaa aineistoon. Siirtyminen datasta kohti viisautta lisää tekstin mukaan epävarmuutta, poliittisuutta ja subjektiivisuutta eikä vähennä niitä.\n\nHakuvinkki: Hae ”datasta kohti viisautta” ja tarkista, mitä kolmelle tiedon ominaisuudelle tapahtuu."
    },
    {
      "id": "g-m2-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Mitkä seuraavista kuvaavat artikkelin mukaan symbolista tiedonkäyttöä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Symbolisessa tiedonkäytössä toiminnan aikaansaamista voitiin tavoitella herättelemällä ajatuksia sekä kannustamalla yksilöitä tarkastelemaan kriittisesti maailmankuviaan ja arvojaan."
        },
        {
          "id": "b",
          "text": "Tunteita herättävä viestintä nähtiin etenkin opettajien, toimittajien ja tiedonvälittäjien kohdalla mahdollisena polkuna pitkäjänteiseen omaehtoiseen toimintaan sitoutumiseen."
        },
        {
          "id": "c",
          "text": "Symbolisessa tiedonkäytössä tieteellisen tiedon merkitys jäi toissijaiseksi, sillä vaikuttavuuden katsottiin perustuvan ennen kaikkea tunteisiin ja luontosuhteeseen."
        },
        {
          "id": "d",
          "text": "Symbolisessa tiedonkäytössä pyrittiin aineiston mukaan lähes poikkeuksetta vaikuttamaan muiden toimintaan."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "130, 131",
        "section": "Symbolinen tiedonkäyttö"
      },
      "explanation": "A, B ja D kuvaavat aineistossa symboliseen tiedonkäyttöön liitettyjä piirteitä. C on uskottava, koska symbolisessa käytössä todella korostettiin arvoja ja tunteita. Artikkelissa kuitenkin todetaan myös vahva yksimielisyys siitä, että symbolisenkin tiedonkäytön tulee perustua tieteelliseen tietoon, jotta toiminta olisi vaikuttavaa ja oikeansuuntaista. Siksi tunteiden korostumisesta ei voida päätellä tieteellisen tiedon jäävän toissijaiseksi.\n\nLähde:\nSivut 130 ja 131, ”Symbolinen tiedonkäyttö”\n\nSivu 130:\n\n”Pääasiassa tarkoitushakuisella tiedonkäytöllä pyrittiin luomaan tai pysäyttämään toimintaa…”\n\n”Aineiston mukaan toimintaa voitiin ohjata herättelemällä ajatuksia ja asettamalla rajoja ilmiön ymmärtämiselle sekä kannustamalla yksilöitä maailmankuvien ja arvojen kriittiseen tarkasteluun.”\n\n”Nämä toimijat näkivätkin tunteita herättävän viestinnän polkuna kohti pitkäjänteistä sitoutumista omaehtoiseen toimintaan luonnon monimuotoisuuden puolesta…”\n\nSivu 131:\n\n”Yksi keskeinen ero on se, että symbolisella tiedonkäytöllä pyrittiin lähes poikkeuksetta vaikuttamaan muiden toimintaan.”",
      "learningPoint": "Yhdistä symbolisen käytön eri piirteet kokonaisuudeksi. Tunteiden ja arvojen korostuminen ei poista samassa osiossa esitettyä vaatimusta tieteelliseen tietoon perustamisesta.\n\nHakuvinkki: Hae ensin ”symboliselle tiedonkäytölle” ja tarkista sen jälkeen samasta osiosta sekä tunteiden että tieteellisen tiedon merkitys."
    },
    {
      "id": "g-m2-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista kuvaa oikein artikkelissa esitettyä yhteyttä tiedonkäyttötapojen ja yhteiskunnallisen muutoksen tyyppien välillä?",
      "options": [
        {
          "id": "a",
          "text": "Välineellinen tiedonkäyttö johtaa aina vähittäiseen muutokseen, käsitteellinen aina kestävyyssiirtymään ja symbolinen aina kestävyysmurrokseen."
        },
        {
          "id": "b",
          "text": "Välineellinen tiedonkäyttö johtaa usein vähittäiseen muutokseen ja käsitteellinen usein kestävyyssiirtymään, mutta tiedonkäyttötavan ja yhteiskunnallisen muutoksen välinen yhteys ei ole yksiselitteinen."
        },
        {
          "id": "c",
          "text": "Käsitteellinen tiedonkäyttö johtaa yleensä kestävyysmurrokseen, koska siinä nykyisten järjestelmien toimintalogiikka kyseenalaistetaan kokonaisuutena."
        },
        {
          "id": "d",
          "text": "Symbolinen tiedonkäyttö liittyy ensisijaisesti vähittäiseen muutokseen, koska siinä pyritään ylläpitämään ja tehostamaan olemassa olevia toimintatapoja."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "134, 135"
      },
      "explanation": "B säilyttää artikkelin käyttämän varmuusasteen: yhteyksiä kuvataan tyypillisinä tai usein esiintyvinä, ei automaattisina. A muuttaa nämä yhteydet ehdottomiksi. C on väärin myös siksi, että artikkelissa käsitteellisen tiedonkäytön todetaan usein jättävän nykyisten järjestelmien toimintalogiikan kokonaisuutena kyseenalaistamatta. D puolestaan liittää vähittäisen muutoksen ominaisuuksia symboliseen tiedonkäyttöön.\n\nLähde:\nSivu 135\n\n”Siksi välineellinen tiedonkäyttö johtaa usein vähittäiseen muutokseen.”\n\n”Käsitteellinen tiedonkäyttö johtaa usein kestävyyssiirtymään, jossa valikoitua luontotietoa tuodaan osaksi uusia toimintatapoja.”\n\nLisäksi kuva 2, sivu 134:\n\n”On kuitenkin huomattava, että tiedonkäyttö ja sen yhteiskunnallinen vaikuttavuus on tapauskohtaista.”",
      "learningPoint": "Tarkista ero sanojen ”usein” ja ”aina” välillä. Tapauskohtaista yhteyttä tiedonkäyttötavan ja muutostyypin välillä ei voi muuttaa automaattiseksi seuraukseksi.\n\nHakuvinkki: Paikanna kuva 2 ja tarkista sen jälkeen sivun 135 tekstistä erikseen välineellistä, käsitteellistä ja symbolista tiedonkäyttöä koskevat kuvaukset."
    },
    {
      "id": "g-m2-q13",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä havaintoja luonnon arvojen huomioimisesta luontotiedossa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Luontotietoa tuotetaan pääasiassa välineellisistä arvoista käsin, ja erityisesti taloudellinen ja ekologinen näkökulma korostuvat tiedontuotannossa."
        },
        {
          "id": "b",
          "text": "Luonnon itseisarvo ja merkityksellisyyden kokemuksiin liittyvät arvot näkyvät erityisesti tiedon tulkinnan ja viestinnän yhteydessä."
        },
        {
          "id": "c",
          "text": "Symbolisessa tiedonkäytössä luonnon taloudelliset arvot syrjäyttivät virkistysarvot ja itseisarvon, koska symbolinen tiedonkäyttö perustui ensisijaisesti välineellisiin arvoihin."
        },
        {
          "id": "d",
          "text": "Yksilöt voivat arvottaa luontoa laajasti, vaikka tiedontuotanto ja päätöksenteko painottuisivat välineellisiin arvoihin."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "132, 133",
        "section": "Moninaisemmalla luontotiedon käytöllä kohti kestävyyttä"
      },
      "explanation": "A, B ja D säilyttävät artikkelissa tehdyn erottelun: luontotiedon tuotannossa korostuvat erityisesti ekologiset ja taloudelliset välinearvot, kun taas itseisarvo ja merkityksellisyyden kokemukset tulevat näkyvämmiksi tiedon tulkinnassa ja viestinnässä. C yhdistää kaksi aineistossa esiintyvää havaintoa väärin. Vaikka ekologiset ja taloudelliset arvot hallitsivat aineistoa yleisesti, juuri symbolisen tiedonkäytön yhteydessä myös virkistysarvot ja luonnon itseisarvo nähtiin relevantteina.\n\nLähde:\nSivu 133, ”Moninaisemmalla luontotiedon käytöllä kohti kestävyyttä”\n\n”Tulosten mukaan luontotietoa tuotetaan pääasiassa välineellisistä arvoista käsin, etenkin taloudellisen ja ekologisen näkökulman kautta, kun taas luonnon itseisarvoa ja merkityksellisyyttä tuodaan esiin tiedon tulkinnan ja viestinnän kautta.”\n\n”Onkin tyypillistä, että yksilöt arvottavat luontoa laajasti, mutta tiedontuotannon ja päätöksenteon tarkastelu painottuu välineellisiin arvoihin.”\n\nLisäksi sivu 132:\n\n”Vaikka etenkin symbolisen tiedonkäytön kontekstissa relevantteina nähtiin virkistysarvot ja luonnon itseisarvo, aineistossa ylipäätään hallitsivat luonnon ekologiset arvot ja luonnon sekä luonnonvarojen taloudelliset arvot.”",
      "learningPoint": "Tarkista, missä yhteydessä kukin arvo korostuu. Aineistossa yleisesti hallitsevia arvoja ei voi siirtää sellaisinaan symbolisen tiedonkäytön erityiseksi kuvaukseksi.\n\nHakuvinkki: Hae ensin ”välineellisistä arvoista” ja tarkista sen jälkeen erikseen, missä yhteydessä ”itseisarvo” mainitaan."
    },
    {
      "id": "g-m2-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Mikä seuraavista päätelmistä on artikkelin perusteella perusteltu tiedon yhteistuotannosta ja kestävyysmurroksesta?",
      "options": [
        {
          "id": "a",
          "text": "Kestävyysmurroksessa luontotiedon tulkinta voidaan jättää ensisijaisesti tutkijoille, koska tiedon yhteistuotannon tarkoituksena on vähentää muiden toimijoiden vaikutusta tiedon soveltamiseen."
        },
        {
          "id": "b",
          "text": "Tiedon yhteistuotanto tekee luontotiedon käytöstä yksiselitteistä, sillä osallistavissa prosesseissa eri toimijoiden arvot ja näkökulmat yhdenmukaistuvat."
        },
        {
          "id": "c",
          "text": "Kestävyysmurrosta tukevassa luontotiedossa voidaan joutua yhdistämään luonnontieteellistä tietoa esimerkiksi paikallistuntemukseen, mikä edellyttää myös muiden kuin tutkijoiden panosta."
        },
        {
          "id": "d",
          "text": "Tiedon yhteistuotantoa tarvitaan lähinnä silloin, kun luonnontieteellistä dataa ei ole saatavilla riittävästi."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "133, 134",
        "section": "Moninaisemmalla luontotiedon käytöllä kohti kestävyyttä"
      },
      "explanation": "C edellyttää kahden läheisen ajatuksen yhdistämistä: kestävyysmurroksessa tietoa pitää tulkita kontekstisidonnaisesti ja samalla huomioida useita tiedon lajeja ja näkökulmia. Tästä seuraa, ettei tiedon tuottaminen ja tulkinta voi rajautua vain tutkijoihin. A kääntää tämän suhteen päinvastaiseksi, ja B menee aineistoa pidemmälle: osallistamisen ja yhteistuotannon todetaan päinvastoin olevan monimutkaisia ja haastavia prosesseja, jotka eivät aina onnistu toivotulla tavalla.\n\nLähde:\nSivut 133 ja 134, ”Moninaisemmalla luontotiedon käytöllä kohti kestävyyttä”\n\nSivu 133:\n\n”Luonnon monia arvoja voidaan nivoa mukaan poikkitieteellisten ja osallistavien tiedon yhteistuotantoprosessien avulla.”\n\nSivu 134:\n\n”Murroksen luomiseksi luontotietoa tulee tulkita paikka- ja kontekstisidonnaisesti, eli esimerkiksi yhdistämällä luonnontiedettä ja paikallistuntemusta.”\n\n”Etenkin tietämys ja viisaus punoivat yhteen tiedon eri lajeja ja vaativat sekä poikkitieteellisempää näkökulmaa että tiedon tulkintaa ja monien näkökulmien huomiointia, eli muidenkin kuin tutkijoiden panosta.”",
      "learningPoint": "Yhdistä paikallinen tulkinta, eri tiedon lajit ja osallistuminen. Oikean tiivistelmän pitää säilyttää myös muiden kuin tutkijoiden panos ilman lupausta yhteistuotannon yksiselitteisestä onnistumisesta.\n\nHakuvinkki: Hae ”yhteistuotanto” ja sen jälkeen ”paikallistuntemusta”. Tarkista, mitä nämä kohdat yhdessä kertovat siitä, keitä tiedon tulkintaan tarvitaan."
    },
    {
      "id": "g-m2-q15",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Artikkelin perusteella käsitteellinen tiedonkäyttö voidaan samaistaa kestävyysmurrokseen, koska sen moninäkökulmaisuus johtaa nykyisten yhteiskunnallisten järjestelmien toimintalogiikan kokonaisvaltaiseen kyseenalaistamiseen.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "135"
      },
      "explanation": "Väitteen ansa on siinä, että sen lähtökohta on oikea: käsitteellisessä tiedonkäytössä todella pyritään moninäkökulmaisuuteen. Tästä ei kuitenkaan seuraa väitteessä esitetty johtopäätös. Artikkelin mukaan käsitteellinen tiedonkäyttö johtaa usein kestävyyssiirtymään, eikä se tyypillisesti kyseenalaista nykyisen järjestelmän toimintalogiikkaa kokonaisuutena. Se voi kyllä tapauskohtaisesti edistää myös kestävyysmurrosta, joten myöskään täysin ehdoton suhde ei olisi perusteltu.\n\nLähde:\nSivu 135\n\n”Käsitteellisen tiedonkäytön ominaispiirre on pyrkimys moninäkökulmaisuuteen, niin käsiteltävien ilmiöiden kuin myös lähestymistapojen suhteen…”\n\n”Käsitteellinen tiedonkäyttö johtaa usein kestävyyssiirtymään, jossa valikoitua luontotietoa tuodaan osaksi uusia toimintatapoja.”\n\n”Käsitteellinen tiedonkäyttö ei siis kyseenalaista tai tarkastele nykyisten järjestelmien toimintalogiikkaa, esimerkiksi kapitalismia, kokonaisuutena, vaan keskittyy usein sektorikohtaiseen tarkasteluun.”",
      "learningPoint": "Erota mahdollinen yhteys käsitteiden samaistamisesta. Käsitteellinen tiedonkäyttö voi edistää murrosta, mutta siitä ei seuraa, että se aina kyseenalaistaisi koko järjestelmän toimintalogiikan.\n\nHakuvinkki: Hae ”käsitteellinen tiedonkäyttö johtaa” ja lue myös sitä seuraavat virkkeet. Pelkkä ensimmäinen havainto ei riitä väitteen arviointiin."
    },
    {
      "id": "g-m2-q16",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein artikkelissa esitettyä symbolisen tiedonkäytön suhdetta kestävyysmurrokseen ja siihen liittyviin riskeihin? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Symbolinen tiedonkäyttö on kestävyysmurroksen kannalta keskeistä, koska siinä voidaan pyrkiä tarkastelemaan ja järjestämään uudelleen nykyisiä rakenteita ja toimintatapoja."
        },
        {
          "id": "b",
          "text": "Symbolisessa tiedonkäytössä arvojen ja arvovalintojen korostuminen voi lisätä tulkinnan subjektiivisuutta ja edelleen tiedon politisoitumista."
        },
        {
          "id": "c",
          "text": "Symbolisen tiedonkäytön keskeinen riski on tiedon väärinkäyttö, ja lisäksi siihen voi liittyä polarisaatiota."
        },
        {
          "id": "d",
          "text": "Symbolinen tiedonkäyttö johtaa väistämättä valtarakenteiden uudelleenjärjestelyyn, jos sen pohjana käytetään tieteellistä tietoa."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "c"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "135"
      },
      "explanation": "A, B ja C muodostavat artikkelissa kuvatun kokonaisuuden: symbolinen tiedonkäyttö voi tukea rakenteellista muutosta, mutta samalla arvojen, subjektiivisuuden ja tulkinnan korostuminen tuo mukanaan politisoitumisen, polarisaation ja väärinkäytön riskejä. D muuttaa artikkelin varovaisen ilmauksen ”voi parhaimmillaan johtaa” väistämättömäksi seuraukseksi. Tieteelliseen tietoon perustaminen ei takaa tiettyä yhteiskunnallista lopputulosta.\n\nLähde:\nSivu 135\n\n”Symbolinen tiedonkäyttö pyrkii luomaan muutosta tarkastelemalla ja uudelleenjärjestelemällä nykyisiä rakenteita ja toimintatapoja, ja siksi symbolinen tiedonkäyttö onkin avainasemassa kestävyysmurroksessa.”\n\n”Symbolisessa tiedonkäytössä korostuvat arvot ja arvovalinnat, jolloin tulkinnan subjektiivisuus korostuu, mikä voi edelleen lisätä tiedon ja tulkinnan politisoitumista sekä yhteiskunnan polarisaatiota.”\n\n”Symbolisen tiedonkäytön keskeinen riski polarisaation lisäksi on tiedon väärinkäyttö.”\n\n”Näistä vaikeuksista huolimatta symbolinen tiedonkäyttö voi parhaimmillaan johtaa valtarakenteiden uudelleen järjestelyyn ja jaettujen tietämysjärjestelmien muutoksiin.”",
      "learningPoint": "Vertaa vaihtoehdon varmuusastetta tekstin ilmaisuun. ”Voi parhaimmillaan johtaa” ei tarkoita väistämätöntä seurausta edes silloin, kun toiminta perustuu tieteelliseen tietoon.\n\nHakuvinkki: Hae ”symbolinen tiedonkäyttö pyrkii” ja seuraa koko kappaleen argumenttia hyödyistä riskeihin ja mahdollisiin seurauksiin."
    },
    {
      "id": "g-m2-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelissa esitettyä vastuuta luontotiedon soveltamisesta kestävyysmurroksessa?",
      "options": [
        {
          "id": "a",
          "text": "Tutkijoiden tulisi vastata sekä tiedon tuottamisesta että sen soveltamisesta eri käyttötilanteisiin, koska tiedon käyttäjien osallistuminen lisää tulkinnan subjektiivisuutta."
        },
        {
          "id": "b",
          "text": "Tiedon tulkinnan ulkoistaminen asiantuntijoille vahvistaa tiedon käyttäjän vastuuta, koska asiantuntijat tarjoavat valmiin pohjan käyttäjän omien toimintatapojen kriittiseen tarkasteluun."
        },
        {
          "id": "c",
          "text": "Tutkijat eivät yksin pysty tuottamaan kaikkiin käyttötilanteisiin sovitettua tietoa siitä, miten toimia, joten myös tiedon käyttäjien tulee osallistua tiedon soveltamiseen ja kantaa vastuuta sen käytön onnistumisesta."
        },
        {
          "id": "d",
          "text": "Tiedon käyttäjien vastuu korostuu ensisijaisesti luonnontieteellisen datan tuottamisessa, kun taas tutkijoiden tehtäväksi jää eri tiedon lajien yhteensovittaminen."
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "133, 136"
      },
      "explanation": "C yhdistää oikein kaksi artikkelin havaintoa. Pelkkä tiedon tulkinnan siirtäminen asiantuntijalle ei riitä, koska tällöin tiedon käyttäjä ei välttämättä joudu arvioimaan omia toimintatapojaan kriittisesti. Koska eri tilanteisiin sovitetun tiedon tuottaminen edellyttää myös tulkintaa ja erilaisten tietojen yhdistämistä, vastuuta ei voida jättää yksin tutkijoille. B kääntää tiedon tulkinnan ulkoistamisen seurauksen päinvastaiseksi.\n\nLähde:\nSivut 133 ja 136\n\nSivu 133:\n\n”Toisaalta tiedon tulkinnan ulkoistaminen siirtää mukanaan myös vastuun tiedon käytön onnistumisesta, eikä haasta tiedon käyttäjää tarkastelemaan toimintatapojaan kriittisesti.”\n\nSivu 136:\n\n”Koska kestävyysmurros edellyttää tiedon eri lajien yhteen punontaa, eivät tutkijat yksin pysty vastaamaan aineistossakin moneen kertaan esitettyyn toiveeseen eri käyttötilanteisiin sovitetusta tiedosta…”\n\n”Siksi myös tiedon käyttäjien tulee osallistua tiedon soveltamiseen ja kantaa vastuuta tiedon käytön onnistumisesta.”",
      "learningPoint": "Tarkista, miten vastuu muuttuu tiedon tulkintaa ulkoistettaessa. Vastuun siirtymistä pois käyttäjältä ei voi kuvata käyttäjän vastuun vahvistumisena.\n\nHakuvinkki: Hae ensin ”tulkinnan ulkoistaminen” ja sen jälkeen ”tiedon käyttäjien tulee”. Yhdistä kohtien antama tieto vastuusta."
    },
    {
      "id": "g-m2-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista päätelmistä voidaan tehdä artikkelin perusteella välineellisen, käsitteellisen ja symbolisen tiedonkäytön eroista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Välineellisessä tiedonkäytössä tietotarpeet ovat tyypillisesti rajatumpia ja käyttäjät alan asiantuntijoita, kun taas käsitteellisessä tiedonkäytössä pyritään yhdistämään useampia ilmiöitä ja näkökulmia."
        },
        {
          "id": "b",
          "text": "Käsitteellisessä tiedonkäytössä moninäkökulmaisuus takaa sosiaalisten vaikutusten ja valtarakenteiden kattavan huomioimisen, mikä vähentää tiedon politisoitumisen riskiä."
        },
        {
          "id": "c",
          "text": "Symbolisessa tiedonkäytössä tiedon pluralismi sekä arvojen ja maailmankuvien moninaisuus korostuvat, mutta samalla myös politisoituminen, polarisaatio ja kompleksisuus voivat muodostua haasteiksi."
        },
        {
          "id": "d",
          "text": "Siirryttäessä välineellisestä käsitteelliseen ja symboliseen tiedonkäyttöön tiedon soveltamiseen ja tulkintaan osallistuvien toimijoiden joukko voi laajentua."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "c",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "132, 134, 135"
      },
      "explanation": "A edellyttää välineellisen ja käsitteellisen tiedonkäytön vertaamista: rajatummista tietotarpeista siirrytään useampia ilmiöitä ja näkökulmia yhdistävään käyttöön. C yhdistää oikein symbolisen tiedonkäytön mahdollistaman pluralismin sen mukanaan tuomiin haasteisiin. D puolestaan seuraa eri käyttötapojen asiantuntijuutta koskevasta vertailusta. B on väärin, koska moninäkökulmaisuuteen pyrkiminen ei takaa, että sosiaaliset vaikutukset ja valtarakenteet tulevat kattavasti käsitellyiksi.\n\nLähde:\nSivut 132, 134 ja 135\n\nSivu 132:\n\n”Välineellinen tiedonkäyttö nojaa tyypillisesti yksittäisiin substanssiasiantuntijoihin.”\n\n”Käsitteellinen tiedonkäyttö puolestaan vaatii poikkitieteellisen asiantuntijajoukon yhteistyötä…”\n\n”Symbolisessa tiedonkäytössä osallistetaan usein vielä laajempi toimijajoukko, esimerkiksi sidosryhmiä asiantuntijoiden lisäksi.”\n\nSivu 134, kuva 2: välineelliseen tiedonkäyttöön liitetään muun muassa selkeät tietotarpeet ja alan asiantuntijat, käsitteelliseen käyttöön ilmiöitä yhdistävä tieto ja monenlaiset tiedonkäyttäjät sekä symboliseen käyttöön tiedon pluralismi, arvojen ja maailmankuvien moninaisuus, politisoituminen, polarisaatio ja kompleksisuus.\n\nSivu 135:\n\n”Käsitteellisen tiedonkäytön ominaispiirre on pyrkimys moninäkökulmaisuuteen…”\n\nSamassa yhteydessä kuitenkin todetaan, että oikeudenmukaisuuteen ja sosiaalisiin arvoihin liittyvät näkökulmat voivat jäädä vähemmälle ja että sosiaalisten vaikutusten ja valtarakenteiden puutteellinen käsittely voi johtaa politisoitumiseen ja polarisaatioon.",
      "learningPoint": "Erota tavoite sen varmaksi väitetystä toteutumisesta. Moninäkökulmaisuuteen pyrkiminen ei takaa kaikkien sosiaalisten vaikutusten ja valtarakenteiden huomioimista.\n\nHakuvinkki: Paikanna ensin kuva 2 sivulta 134 ja vertaa sen jälkeen sivun 135 käsitteellistä tiedonkäyttöä koskevaan tekstiin."
    }
  ]
} satisfies ValintakoeGExercise;
