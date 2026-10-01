import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 2 on muodostettu käyttäjän toimittamasta KESKIVAIKEAT TEHTÄVÄT VALINTAKOE G -dokumentista.
 * Kysymysten sanamuotoja tai vastausvaihtoehtoja ei ole muokattu.
 */
export const valintakoeGMediumExercise2Base = {
  "id": "keskivaikea-harjoitus-2",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 2 – Luontotieto ja sen käyttö kestävyysmurroksessa – havaintoja vakiintuneilta ja nousevilta toimijoilta Suomessa",
  "description": "32 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 32,
  "difficulty": "medium",
  "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
  "articleTitle": "Luontotieto ja sen käyttö kestävyysmurroksessa – havaintoja vakiintuneilta ja nousevilta toimijoilta Suomessa",
  "articleUrl": "https://aluejaymparisto.journal.fi/article/view/143595/98987",
  "questions": [
    {
      "id": "g-m2-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "126"
      },
      "explanation": "A, B ja D yhdistävät oikein toimijaryhmän ja sille artikkelissa kuvatun luontotiedon käyttötavan tai tietotarpeen. C sisältää aineistosta tuttuja elementtejä, mutta yhdistää ne väärin: tiedonvälittäjät ovat tiede–politiikka-rajapinnan asiantuntijoita eivätkä luontotiedon asiantuntijoita.",
      "learningPoint": "Tarkista, mikä ominaisuus kuuluu millekin toimijaryhmälle. Pelkkä aineistosta tutun tiedon tunnistaminen ei riitä, vaan myös tiedon ja toimijan välisen yhteyden pitää olla oikein."
    },
    {
      "id": "g-m2-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Artikkelin perusteella välineellisen tiedonkäytön vakiintuneisuus poistaa olennaisesti luontotiedon käyttöön liittyvät ongelmat, koska tietoa on helposti saatavilla ja sen soveltaminen on suoraviivaista.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "126–127"
      },
      "explanation": "Väite yhdistää oikein kaksi välineellisen tiedonkäytön ominaisuutta: käyttö koettiin verrattain sujuvaksi ja esimerkiksi datan soveltaminen käytäntöön saattoi olla suoraviivaista. Tästä ei kuitenkaan seuraa, että ongelmat poistuisivat. Artikkelissa mainitaan edelleen esimerkiksi datan tarkkuuteen, ajalliseen ja tilalliseen laajuuteen sekä saatavuuteen liittyviä haasteita.",
      "learningPoint": "Tarkista, muuttaako väite aineistossa esitetyn suhteellisen kuvauksen ehdottomaksi. Ilmaus ”verrattain helpoksi” ei tarkoita ongelmatonta."
    },
    {
      "id": "g-m2-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
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
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "128"
      },
      "explanation": "A kokoaa oikein käyttötapojen keskeisen eron. Käsitteellisessä käytössä tietoa joudutaan tulkitsemaan ja soveltamaan erilaisiin päätöksenteon ja toiminnan tilanteisiin. Symbolisessa käytössä huomio siirtyy erityisesti siihen, mitä tiedon käytöllä pyritään saamaan aikaan, ja aineistossa sillä pyrittiin lähes poikkeuksetta vaikuttamaan muiden toimintaan. Muut vaihtoehdot vaihtavat käyttötapojen ominaisuuksia keskenään tai tekevät liian pitkälle menevän rajauksen tieteellisen tiedon merkityksestä.",
      "learningPoint": "Kun kaksi läheistä käsitettä esiintyy aineistossa, tarkista kumpaan käsitteeseen kukin ominaisuus kuuluu. Häiriövaihtoehdossa molemmat ominaisuudet voivat olla aineistosta, mutta niiden suhde on käännetty."
    },
    {
      "id": "g-m2-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "c",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "122"
      },
      "explanation": "A, C ja D soveltavat oikein artikkelin data → informaatio → tietämys → viisaus -jaottelua annettuihin esimerkkeihin. B on väärin, vaikka siinä yhdistetään kaksi artikkelista löytyvää asiaa: luontotyyppien uhanalaisuusarviointi kuuluu artikkelissa tietämykseen, ei viisauteen. Tehtävässä ei siis riitä esimerkin löytäminen, vaan esimerkki pitää yhdistää oikeaan tiedon lajiin.",
      "learningPoint": "Sovella ensin aineiston määritelmää ja tarkista sen jälkeen, mihin luokkaan aineiston esimerkki kuuluu. Väärä vaihtoehto voi sisältää täysin oikean esimerkin mutta sijoittaa sen väärään käsitteelliseen luokkaan."
    },
    {
      "id": "g-m2-q5",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Artikkelin perusteella luontotiedon käyttäjien ja käyttötapojen moninaistuminen tekee tutkijoiden, muiden asiantuntijoiden ja tiedon käyttäjien välisestä henkilöityneestä vuorovaikutuksesta aiempaa vaikeammin toteutettavaa.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "122"
      },
      "explanation": "Aineistossa yhdistetään suoraan kaksi kehityskulkua: perinteisessä luonnonsuojelussa vuorovaikutus on ollut tiivistä ja henkilöitynyttä, mutta käyttäjien, käyttötapojen ja ratkaistavien ongelmien moninaistuminen vaikeuttaa samanlaisen vuorovaikutuksen ylläpitämistä. Väite ei tarkoita, että henkilöitynyt vuorovaikutus katoaisi kokonaan, vaan että sen toteuttaminen vaikeutuu.",
      "learningPoint": "Tarkista, mihin suuntaan aineistossa kuvattu muutos etenee. Olennaista on yhdistää käyttäjäjoukon moninaistuminen siihen, mitä henkilöityneelle vuorovaikutukselle tapahtuu."
    },
    {
      "id": "g-m2-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
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
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "124"
      },
      "explanation": "A yhdistää oikein sekä aineiston osat että niiden toimijaryhmät. Ensimmäinen osa edusti perinteisempää luontotiedon käyttöä luonnonsuojelussa ja politiikan valmistelussa, kun taas toisessa käyttöä tarkasteltiin laajemmin osana kestävyysmurrosta. B ja D vaihtavat näiden kahden aineiston osan ominaisuudet keskenään.",
      "learningPoint": "Kun aineisto jakautuu kahteen osaan, tarkista erikseen, kumpaan osaan kukin toimijaryhmä ja tarkastelunäkökulma kuuluu. Häiriövaihtoehdoissa oikeat kuvaukset voidaan vaihtaa keskenään."
    },
    {
      "id": "g-m2-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "127"
      },
      "explanation": "A ja C yhdistävät oikein välineellisen tiedonkäytön kehittämiskeinot ja käytännön rajoitteet. Artikkelissa sen ongelmia kuvataan ennen kaikkea hallinnollisiksi ja käytännöllisiksi, minkä vuoksi B siirtää toisissa yhteyksissä korostuvia arvoihin ja maailmankuviin liittyviä ongelmia väärään käyttötapaan. Samasta syystä D kääntää artikkelissa esitetyn kehittämistavan vääräksi.",
      "learningPoint": "Erota toisistaan eri tiedonkäyttötapoihin liittyvät ongelmat. Artikkelissa esiintyvä ongelma voi olla sinänsä oikea, mutta se ei välttämättä kuulu juuri välineelliseen tiedonkäyttöön."
    },
    {
      "id": "g-m2-q8",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
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
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "132"
      },
      "explanation": "C kokoaa oikein artikkelissa kuvatun muutoksen: asiantuntijuuden kirjo ja mukana olevien toimijoiden määrä laajenevat siirryttäessä välineellisestä käsitteelliseen ja edelleen symboliseen tiedonkäyttöön. B kääntää tämän kehityssuunnan päinvastaiseksi, ja A sijoittaa symboliselle tiedonkäytölle tyypillisen laajan osallistamisen välineelliseen tiedonkäyttöön.",
      "learningPoint": "Vertaa useampaa ryhmää saman ominaisuuden perusteella. Tässä ratkaisevaa on ymmärtää, miten tarvittavan asiantuntijuuden kirjo ja osallistuvien toimijoiden määrä muuttuvat tiedonkäyttötavasta toiseen."
    },
    {
      "id": "g-m2-q9",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "128–129"
      },
      "explanation": "A, B ja D kuvaavat käsitteellisen tiedonkäytön yhteydessä tunnistettuja haasteita. C kääntää tiedon saatavuutta koskevan havainnon päinvastaiseksi: artikkelin mukaan tiedon etsiminen voi vaatia paljon aikaa ja vaivaa, eikä juuri kyseiseen kontekstiin sopivaa tietoa ole aina olemassa. Tehtävässä pitää yhdistää käsitteellisen tiedonkäytön yleinen haaste siihen, miten se näkyy käytännössä eri tilanteissa.",
      "learningPoint": "Tarkista erityisesti, kääntääkö vaihtoehto aineistossa kuvatun ongelman vahvuudeksi tai päinvastoin. Samalla pitää varmistaa, että muut vaihtoehdot todella kuuluvat samaan tiedonkäytön tapaan."
    },
    {
      "id": "g-m2-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Artikkelin mukaan siirtyminen datasta kohti viisautta tekee luontotiedosta yksiselitteisempää, koska poikkitieteellisyys vähentää tiedon epävarmuutta, poliittisuutta ja subjektiivisuutta.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "126"
      },
      "explanation": "Väitteen ensimmäinen osa vastaa aineistoa: datasta kohti viisautta siirryttäessä näkökulmat moninaistuvat ja tiedontuotanto muuttuu poikkitieteellisemmäksi. Väite kuitenkin johtaa tästä päinvastaisen seurauksen kuin artikkeli. Epävarmuus, poliittisuus ja subjektiivisuus eivät vähene vaan kasvavat.",
      "learningPoint": "Yhdistelmäväitteessä ensimmäinen osa voi olla täysin oikein, vaikka jälkimmäisessä kehityksen suunta on vaihdettu. Tarkista siksi erikseen sekä muutos että sen suunta."
    },
    {
      "id": "g-m2-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 3,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "130–131"
      },
      "explanation": "A, B ja D kuvaavat aineistossa symboliseen tiedonkäyttöön liitettyjä piirteitä. C on uskottava, koska symbolisessa käytössä todella korostettiin arvoja ja tunteita. Artikkelissa kuitenkin todetaan myös vahva yksimielisyys siitä, että symbolisenkin tiedonkäytön tulee perustua tieteelliseen tietoon, jotta toiminta olisi vaikuttavaa ja oikeansuuntaista. Siksi tunteiden korostumisesta ei voida päätellä tieteellisen tiedon jäävän toissijaiseksi.",
      "learningPoint": "Arvioi vaihtoehtoa kokonaisuutena usean läheisen havainnon perusteella. Erityisesti pitää varoa tekemästä yhdestä korostuksesta liian pitkälle menevää päätelmää."
    },
    {
      "id": "g-m2-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 12,
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
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "135"
      },
      "explanation": "B säilyttää artikkelin käyttämän varmuusasteen: yhteyksiä kuvataan tyypillisinä tai usein esiintyvinä, ei automaattisina. A muuttaa nämä yhteydet ehdottomiksi. C on väärin myös siksi, että artikkelissa käsitteellisen tiedonkäytön todetaan usein jättävän nykyisten järjestelmien toimintalogiikan kokonaisuutena kyseenalaistamatta. D puolestaan liittää vähittäisen muutoksen ominaisuuksia symboliseen tiedonkäyttöön.",
      "learningPoint": "Kiinnitä huomiota sanoihin kuten ”usein”, ”voi” ja ”tapauskohtaista”. Teoreettisessa mallissa kuvattu yhteys ei välttämättä tarkoita, että yksi tiedonkäyttötapa johtaisi aina tiettyyn muutostyyppiin."
    },
    {
      "id": "g-m2-q13",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "133"
      },
      "explanation": "A, B ja D säilyttävät artikkelissa tehdyn erottelun: luontotiedon tuotannossa korostuvat erityisesti ekologiset ja taloudelliset välinearvot, kun taas itseisarvo ja merkityksellisyyden kokemukset tulevat näkyvämmiksi tiedon tulkinnassa ja viestinnässä. C yhdistää kaksi aineistossa esiintyvää havaintoa väärin. Vaikka ekologiset ja taloudelliset arvot hallitsivat aineistoa yleisesti, juuri symbolisen tiedonkäytön yhteydessä myös virkistysarvot ja luonnon itseisarvo nähtiin relevantteina.",
      "learningPoint": "Erota toisistaan, missä yhteydessä eri luonnon arvot korostuvat. Se, että jokin arvo hallitsee aineistoa kokonaisuutena, ei tarkoita sen hallitsevan samalla tavalla jokaista tiedonkäyttötapaa."
    },
    {
      "id": "g-m2-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
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
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "133–134"
      },
      "explanation": "C edellyttää kahden läheisen ajatuksen yhdistämistä: kestävyysmurroksessa tietoa pitää tulkita kontekstisidonnaisesti ja samalla huomioida useita tiedon lajeja ja näkökulmia. Tästä seuraa, ettei tiedon tuottaminen ja tulkinta voi rajautua vain tutkijoihin. A kääntää tämän suhteen päinvastaiseksi, ja B menee aineistoa pidemmälle: osallistamisen ja yhteistuotannon todetaan päinvastoin olevan monimutkaisia ja haastavia prosesseja, jotka eivät aina onnistu toivotulla tavalla.",
      "learningPoint": "Yhdistä kaksi läheistä tekstikohtaa ja arvioi, mikä vaihtoehto tiivistää niiden yhteisen merkityksen muuttamatta väitteen laajuutta. Oikea vastaus ei löydy suoraan yhtenä valmiina virkkeenä."
    },
    {
      "id": "g-m2-q15",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Artikkelin perusteella käsitteellinen tiedonkäyttö voidaan samaistaa kestävyysmurrokseen, koska sen moninäkökulmaisuus johtaa nykyisten yhteiskunnallisten järjestelmien toimintalogiikan kokonaisvaltaiseen kyseenalaistamiseen.",
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
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "135"
      },
      "explanation": "Väitteen ansa on siinä, että sen lähtökohta on oikea: käsitteellisessä tiedonkäytössä todella pyritään moninäkökulmaisuuteen. Tästä ei kuitenkaan seuraa väitteessä esitetty johtopäätös. Artikkelin mukaan käsitteellinen tiedonkäyttö johtaa usein kestävyyssiirtymään, eikä se tyypillisesti kyseenalaista nykyisen järjestelmän toimintalogiikkaa kokonaisuutena. Se voi kyllä tapauskohtaisesti edistää myös kestävyysmurrosta, joten myöskään täysin ehdoton suhde ei olisi perusteltu.",
      "learningPoint": "Tarkista sekä päätelmän laajuus että aineiston käyttämä varmuusaste. Se, että jokin tiedonkäyttötapa voi edistää murrosta, ei tarkoita, että se voitaisiin samaistaa murrokseen."
    },
    {
      "id": "g-m2-q16",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 12,
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
      "explanation": "A, B ja C muodostavat artikkelissa kuvatun kokonaisuuden: symbolinen tiedonkäyttö voi tukea rakenteellista muutosta, mutta samalla arvojen, subjektiivisuuden ja tulkinnan korostuminen tuo mukanaan politisoitumisen, polarisaation ja väärinkäytön riskejä. D muuttaa artikkelin varovaisen ilmauksen ”voi parhaimmillaan johtaa” väistämättömäksi seuraukseksi. Tieteelliseen tietoon perustaminen ei takaa tiettyä yhteiskunnallista lopputulosta.",
      "learningPoint": "Tarkista vaihtoehdon kaikki osat ja erityisesti väitteen varmuusaste. ”Voi parhaimmillaan johtaa” ja ”johtaa väistämättä” ovat merkitykseltään olennaisesti erilaisia."
    },
    {
      "id": "g-m2-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
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
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "133 ja 136"
      },
      "explanation": "C yhdistää oikein kaksi artikkelin havaintoa. Pelkkä tiedon tulkinnan siirtäminen asiantuntijalle ei riitä, koska tällöin tiedon käyttäjä ei välttämättä joudu arvioimaan omia toimintatapojaan kriittisesti. Koska eri tilanteisiin sovitetun tiedon tuottaminen edellyttää myös tulkintaa ja erilaisten tietojen yhdistämistä, vastuuta ei voida jättää yksin tutkijoille. B kääntää tiedon tulkinnan ulkoistamisen seurauksen päinvastaiseksi.",
      "learningPoint": "Tarkista, kenelle aineistossa annetaan vastuu ja miten vastuun jakaminen liittyy tiedon tulkintaan. Vaihtoehdossa voi olla oikeita käsitteitä, mutta niiden välinen suhde voi olla käännetty."
    },
    {
      "id": "g-m2-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 12,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "c",
        "d"
      ],
      "source": {
        "articleId": "luontotieto-ja-sen-kaytto-kestavyysmurroksessa",
        "page": "132"
      },
      "explanation": "A edellyttää välineellisen ja käsitteellisen tiedonkäytön vertaamista: rajatummista tietotarpeista siirrytään useampia ilmiöitä ja näkökulmia yhdistävään käyttöön. C yhdistää oikein symbolisen tiedonkäytön mahdollistaman pluralismin sen mukanaan tuomiin haasteisiin. D puolestaan seuraa eri käyttötapojen asiantuntijuutta koskevasta vertailusta. B on väärin, koska moninäkökulmaisuuteen pyrkiminen ei takaa, että sosiaaliset vaikutukset ja valtarakenteet tulevat kattavasti käsitellyiksi.",
      "learningPoint": "Tarkista, muuttaako vaihtoehto aineistossa kuvatun pyrkimyksen tai mahdollisuuden varmaksi seuraukseksi. Tässä moninäkökulmaisuuteen pyrkiminen ei tarkoita, että kaikki olennaiset näkökulmat automaattisesti huomioitaisiin."
    }
  ]
} satisfies ValintakoeGExercise;
