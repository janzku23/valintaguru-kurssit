import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 7: uusimman tehtävätekstin tehtävät 1–12.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 * Uusi teksti ei ilmoita aikarajaa tai linkkiä; nykyiset arvot säilytetään.
 */
export const valintakoeGExercise7Base = {
  "id": "harjoitus-7",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 7 – Ujoja portinvartijoita vai tieteen saavutettavuuden edistäjiä? Sosiaalityön tutkimuksen seuran some-viestinnän aktivoituminen",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
  "articleTitle": "Ujoja portinvartijoita vai tieteen saavutettavuuden edistäjiä? Sosiaalityön tutkimuksen seuran some-viestinnän aktivoituminen",
  "articleUrl": "https://journal.fi/janus/article/view/156213",
  "questions": [
    {
      "id": "g-h7-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Sosiaalityön tutkimuksen seuran uuden some-strategian voidaan katsoa edustaneen bottom-up-lähestymistapaa erityisesti siksi, että",
      "options": [
        {
          "id": "a",
          "text": "viestittävästä aiheesta pyrittiin muodostamaan heti alussa yhtenäinen ja mahdollisimman kattava kokonaisuus."
        },
        {
          "id": "b",
          "text": "kokonaiskuvan annettiin rakentua vähitellen yksittäisten havainnollistavien sisältöjen kertyessä some-tilille."
        },
        {
          "id": "c",
          "text": "eri tutkimusaiheiden tasapuolinen näkyvyys pyrittiin varmistamaan ennen viestinnän aloittamista."
        },
        {
          "id": "d",
          "text": "viestinnän kokonaisuus laadittiin yhteistyössä siten, että kaikkien osallistujien tutkimukselliset näkökulmat sisällytettiin siihen alusta lähtien."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "503",
        "section": "kohta ennen otsikkoa Matkalla opittua"
      },
      "explanation": "Bottom-up-mallissa kokonaisuutta ei rakenneta ensin valmiiksi, vaan kokonaiskuva syntyy vähitellen yksittäisten kuvausten kertyessä. A ja D kuvaavat tekstissä top-down-lähestymistapaa. C on uskottava häiriövaihtoehto, mutta tekstissä todetaan päinvastoin, että prosessissa sallitaan joidenkin aiheiden painottuminen eri vaiheissa.\n\nLähde:\n”Oma some-strategiamme puolestaan edusti bottom-up-lähestymistapaa, jossa kokonaiskuva muodostuu pistemäisten havainnollistavien kuvausten kertyessä some-tilille ajan kanssa.”",
      "learningPoint": "Yhdistä ominaisuus oikeaan lähestymistapaan. Sekä top-down että bottom-up kuvataan aineistossa, mutta valmiiksi hahmoteltu kokonaisuus ja vähitellen rakentuva kokonaiskuva kuuluvat eri malleihin.\n\nHakuvinkki: Hae esimerkiksi ”bottom-up” ja vertaa kuvausta juuri sitä edeltävään top-down-kuvaukseen."
    },
    {
      "id": "g-h7-q2",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista pitävät paikkansa Sosiaalityön tutkimuksen seuran viestintätiimin toiminnasta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Jokaisen tiimiläisen tehtävänä oli seurata oman työyhteisönsä ajankohtaisia asioita ja tuoda niistä viikoittain uusia syötteitä viestittäväksi."
        },
        {
          "id": "b",
          "text": "Tiimin ensisijaiseksi yhteydenpitokanavaksi sovittiin Instagram, koska sitä käytettiin myös seuran ulkoisessa viestinnässä."
        },
        {
          "id": "c",
          "text": "Tiimiin nimettiin edustaja jokaisesta kuudesta sosiaalityötä opettavasta yliopistosta."
        },
        {
          "id": "d",
          "text": "Tiimiläisten tehtävänä oli keskittyä oman organisaationsa sisältöihin eikä täydentää muiden tiimiläisten tuomia syötteitä."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "501",
        "section": "kohta Seuran viestinnän toteutus ja aktivoituminen"
      },
      "explanation": "A ja C vastaavat tekstin kuvausta. B sekoittaa kaksi eri käyttötarkoitusta: Signal oli viestintätiimin ensisijainen yhteydenpitokanava, kun taas Instagram oli ulkoisen viestinnän kanava. D on väärin, koska tiimiläisten tehtävänä oli nimenomaan myös täydentää muiden tuomia syötteitä paikallisilla näkökulmilla.\n\nLähde:\n”Keväällä 2024 seuran hallitus päätti perustaa erillisen viestintätiimin, johon nimettiin edustaja jokaisesta kuudesta sosiaalityötä opettavasta yliopistosta.”\n\nSamassa kohdassa todetaan, että jokaisen tiimiläisen tehtävänä oli seurata oman työyhteisönsä ajankohtaisia asioita, tuoda niistä viikoittain uusia syötteitä ja täydentää muiden syötteitä paikallisilla näkökulmilla.",
      "learningPoint": "Tarkista, mihin tarkoitukseen kukin viestintäkanava on tarkoitettu. Signal oli tiimin sisäisen yhteydenpidon kanava, kun taas Instagram palveli ulkoista viestintää.\n\nHakuvinkki: Hae esimerkiksi ”Signal” tai ”viestintätiimi” ja lue koko ympäröivä kappale."
    },
    {
      "id": "g-h7-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Tiedeviestinnän jatkumomallin perusteella seuran ulkoisen viestinnän voitiin ajatella palvelevan samalla sekä tieteen sisäistä viestintää, oppimista että tutkimustiedon popularisointia.",
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "504",
        "section": "kohta Ulkoisen ja sisäisen viestinnän väliset suhteet"
      },
      "explanation": "Väite tiivistää tekstissä luetellut kolme tasoa eri sanoin. Tieteen sisäinen viestintä vastaa tasoa 1, oppimista palveleva pedagoginen tehtävä tasoa 2 ja popularisointi tasoa 3. Tehtävässä pitää tunnistaa, että lyhyempi muotoilu säilyttää alkuperäisen merkityksen, vaikka se ei kopioi tekstiä sanasta sanaan.\n\nLähde:\n”Viestintämme on voinut palvella tieteen sisäistä viestintää saman ja eri alojen tutkijoiden välillä (taso 1), toimia pedagogisena välineenä johdattaen alan opiskelijoita ja muita oppijoita alan peruskysymysten äärelle (taso 2) ja popularisoida sosiaalityön tutkimus- ja teoriatietoa medialle ja laajalle yleisölle (taso 3).”",
      "learningPoint": "Vertaa tiivistettyä väitettä tekstin kolmeen viestinnän tasoon. Lyhyempi ilmaus on samanmerkityksinen, kun se säilyttää tieteen sisäisen viestinnän, pedagogisen tehtävän ja popularisoinnin.\n\nHakuvinkki: Hae esimerkiksi ”pedagogisena” tai ”taso 1”."
    },
    {
      "id": "g-h7-q4",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa oikein sitä, miten seuran someviestinnän aktivoituminen vaikutti joidenkin yliopistojen työyhteisöjen sisäiseen viestintään?",
      "options": [
        {
          "id": "a",
          "text": "Uudet sisäisen viestinnän käytännöt mahdollistivat sen, että työyhteisöjen ajankohtaisista asioista ei enää tarvinnut kysellä erikseen."
        },
        {
          "id": "b",
          "text": "Viestintätiimin toiminta yhdenmukaisti eri yliopistojen sisäisen viestinnän käytännöt keskenään."
        },
        {
          "id": "c",
          "text": "Ajankohtaisten asioiden säännöllinen kysely eri sisäisissä kanavissa synnytti joihinkin työyhteisöihin uusia sisäisen viestinnän käytäntöjä."
        },
        {
          "id": "d",
          "text": "Työyhteisöjen sisäisen viestinnän kehittäminen oli viestintätiimin perustamisen ensisijainen tavoite."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "504",
        "section": "kohta Ulkoisen ja sisäisen viestinnän väliset suhteet"
      },
      "explanation": "C säilyttää sekä tapahtumaketjun että tekstin rajauksen: säännöllinen kyseleminen johti uusiin käytäntöihin joissakin työyhteisöissä. B menee liian pitkälle, sillä tekstissä ei sanota kaikkien yliopistojen käytäntöjen yhdenmukaistuneen. D puolestaan muuttaa seurauksen alkuperäiseksi tavoitteeksi. A kääntää ajatuksen väärään suuntaan: juuri säännöllinen kysely oli osa syntynyttä toimintatapaa.\n\nLähde:\n”Se, että viestintätiimimme myötä kunkin yliopiston työyhteisökokouksissa, sähköpostilistoilla, WhatsApp-ryhmissä tai muissa kanavissa alettiin säännöllisesti kysellä mainituista ajankohtaisista asioista, loi joihinkin työyhteisöihin uusia sisäisen viestinnän käytäntöjä.”",
      "learningPoint": "Tunnista sama tapahtumaketju tiivistetystä kuvauksesta. Oikean vaihtoehdon pitää säilyttää sekä säännöllisen kyselyn yhteys uusiin käytäntöihin että rajaus vain joihinkin työyhteisöihin.\n\nHakuvinkki: Hae esimerkiksi ”sisäisen viestinnän käytäntöjä”."
    },
    {
      "id": "g-h7-q5",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista kuvaavat artikkelin mukaan seuran sosiaalisen median perussisältöjä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Uusista tieteellisistä artikkeleista julkaistiin tarinoita, joita koottiin myöhempää katselua varten kohokohtaan."
        },
        {
          "id": "b",
          "text": "Tulevista sosiaalityön väitöstilaisuuksista tiedotettiin erikseen aina heti, kun tilaisuuden ajankohta varmistui."
        },
        {
          "id": "c",
          "text": "Konferenssiin osallistuvaa työyhteisön jäsentä voitiin pyytää tekemään seuran someen postaus tapahtumasta sosiaalityön tutkimuksen näkökulmasta."
        },
        {
          "id": "d",
          "text": "Tieteellisiä yleisötapahtumia koskevat julkaisut tehtiin pääasiassa pysyvinä julkaisuina, jotta ne säilyivät tilillä myöhempää katselua varten."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "502",
        "section": "taulukko 1: Seuran sosiaalisen median perussisällöt"
      },
      "explanation": "A ja C vastaavat taulukon kuvauksia. B on lähellä oikeaa, mutta väitöstilaisuuksista tiedotettiin kootusti etukäteen kuukauden tai parin välein, ei aina yksittäin heti ajankohdan varmistuttua. D vaihtaa julkaisumuodon: yleisötapahtumia julkaistiin pääosin tarinoina, jotka koottiin myöhemmin kohokohtaan.\n\nLähde:\nUusista artikkeleista kerrotaan:\n\n”Näistä julkaistiin tarinana kuvakaappaus otsikosta ja kirjoittajatiedoista sekä linkki, ja tarinat koottiin kohokohdaksi myöhempää katselua varten.”\n\nKonferenssiesiintymisistä puolestaan todetaan, että osallistujalta pyydettiin ”seuran someen postaus tapahtumasta sosiaalityön tutkimuksen näkökulmasta”.",
      "learningPoint": "Lue taulukon sisältötyyppi ja siihen liittyvä julkaisukäytäntö yhdessä. Tarkista, mille sisällölle julkaisumuoto ja julkaisurytmi kuuluvat, äläkä siirrä niitä toiselta riviltä.\n\nHakuvinkki: Paikanna taulukko 1 ja vertaa erityisesti rivejä Uudet tieteelliset artikkelit, Tulevat sosiaalityön väitöstilaisuudet, Konferenssiesiintymiset ja Tieteellisten yleisötapahtumien mainostaminen."
    },
    {
      "id": "g-h7-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 10,
      "prompt": "Artikkelin mukaan laajemman tutkijajoukon kannustaminen tarjoamaan viestittävää sisältöä osoittautui työläämmäksi kuin eri kanavia ja eri tavoin keskeneräisinä tulevien sisältöehdotusten hallitseminen.",
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
        "oikein"
      ],
      "source": {
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "505",
        "section": "kohta Keskeneräisyyden sallimisen tärkeys"
      },
      "explanation": "Väite ilmaisee tekstin vertailun eri sanoin mutta säilyttää suuruussuhteen oikein. Työläämmäksi kuvataan tutkijoiden kannustaminen tarjoamaan sisältöä. Ehdotusten tuleminen eri kanavia pitkin tai keskeneräisinä aiheuttaa hallittavaa työtä, mutta tekstin mukaan se on näistä kahdesta pienempi haaste.\n\nLähde:\n”Olemme kuitenkin havainneet, että laajemman tutkijajoukon kannustaminen tarjoamaan viestittävää sisältöä on merkittävästi työllistävämpi tehtävä kuin sen hallitseminen, että ehdotuksia tai vastauksia sisällön tuottamisen pyyntöihin tulee useampia teknisiä kanavia pitkin, useille eri henkilöille tai eri tavoin keskeneräisinä.”",
      "learningPoint": "Tarkista, kumpi vertailtavista tehtävistä kuvataan työläämmäksi. Väite voi käyttää eri sanoja kuin aineisto, mutta tutkijoiden kannustamisen ja sisältöehdotusten hallinnan välisen suuruussuhteen pitää säilyä.\n\nHakuvinkki: Hae esimerkiksi ”työllistävämpi”."
    },
    {
      "id": "g-h7-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista EI vastaa artikkelissa esitettyä kuvausta eri yleisöille viestimisestä?",
      "options": [
        {
          "id": "a",
          "text": "Sosiaalityön tutkimuksesta on perusteltua viestiä esimerkiksi sosiaalityöntekijöille, heidän organisaatioilleen, päättäjille, asiakkaille ja suurelle yleisölle."
        },
        {
          "id": "b",
          "text": "Seuran sometilit ovat käytännössä tavoittaneet paljon myös sosiaalityön ja lähialojen tutkijoita."
        },
        {
          "id": "c",
          "text": "Eri yleisöille olisi hyödyllistä viestiä hieman erilaisin tavoin ja tyylein."
        },
        {
          "id": "d",
          "text": "Sosiaalisen median moninaiset yleisöt ovat helpottaneet erilaisten viestintätapojen kohdentamista kullekin yleisölle sopiviksi."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "504",
        "section": "kohta Ulkoisen ja sisäisen viestinnän väliset suhteet"
      },
      "explanation": "D kääntää tekstin merkityksen vastakkaiseksi. Moninaiset yleisöt eivät helpottaneet erilaisten viestintätapojen toteuttamista, vaan tekivät siitä haastavaa. A, B ja C vastaavat saman tekstikohdan sisältöä.\n\nLähde:\n”Eri yleisöille olisi kuitenkin hyvä pystyä viestimään hieman erilaisilla tavoilla ja tyyleillä, mutta somen laajojen moninaisten yleisöjen äärellä tämän toteuttaminen on ollut haastavaa.”",
      "learningPoint": "Vertaa vaihtoehdon vaikutusta aineistoon. Ilmaukset ”helpottaneet” ja ”ollut haastavaa” kuvaavat tässä vastakkaisia vaikutuksia, vaikka muu sisältö olisi lähellä tekstiä.\n\nHakuvinkki: Hae esimerkiksi ”eri yleisöille” tai ”moninaisten yleisöjen”."
    },
    {
      "id": "g-h7-q8",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa tarkimmin artikkelin näkemystä keskeneräisyyden sallimisesta viestinnässä?",
      "options": [
        {
          "id": "a",
          "text": "Keskeneräisyyttä kannattaa sallia lähinnä viestintätiimin sisäisessä työssä, mutta ulkoiseen viestintään tulisi ottaa vain valmiita tutkimustuloksia."
        },
        {
          "id": "b",
          "text": "Keskeneräisyyden salliminen voi madaltaa osallistumisen kynnystä, ja myös viestinnän yhteisöllinen rakenne saa kehittyä vähitellen."
        },
        {
          "id": "c",
          "text": "Keskeneräisten sisältöehdotusten vastaanottamista kannattaa välttää, koska niiden käsittely vie enemmän aikaa kuin tutkijoiden aktivointi."
        },
        {
          "id": "d",
          "text": "Keskeneräisyyden sallimisen tavoitteena on ennen kaikkea vähentää tarvetta aktiivisesti pyytää sisältöjä muilta tutkijoilta."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "505",
        "section": "kohta Keskeneräisyyden sallimisen tärkeys"
      },
      "explanation": "B tiivistää kirjoittajien näkemyksen: viestinnän ei tarvitse olla kaikissa vaiheissa täysin valmis, vaan myös keskeneräisyyttä voidaan hyväksyä samalla kun toimintaa rakennetaan. A on väärin, koska artikkelissa kerrotaan myös tutkimustoiminnasta, jossa ei keskustella pelkästään valmiista vertaisarvioiduista tuloksista. C kääntää tekstissä esitetyn työmäärävertailun. D muuttaa vaikutuksen päinvastaiseksi: keskeneräisyyden sallimisen katsotaan tukevan aktiivista sisältöjen kysymistä, ei vähentävän sen tarvetta.\n\nLähde:\n”Keskeneräisyyden salliminen ja jopa siitä iloitseminen ovat tärkeitä myös siksi, että viestintää koordinoiva taho uskaltaa ja jaksaa kysyä aktiivisesti sisältöjen perään muilta toimijoilta.”\n\nMyöhemmin samassa kohdassa:\n\n”Myös viestinnän yhteisöllinen rakenne saa mielestämme olla keskeneräinen; silti jo matkalla voidaan tehdä paljon tärkeää näkyväksi.”",
      "learningPoint": "Yhdistä lähekkäisten virkkeiden yhteinen ajatus ja vertaa sitä vaihtoehtoon. Oikea tiivistelmä säilyttää keskeneräisyyden sallimisen merkityksen sekä osallistumiselle että yhteisöllisten rakenteiden kehittymiselle.\n\nHakuvinkki: Hae ”keskeneräinen” tai ”keskeneräisyyden” ja lue ympäröivä kappale kokonaisuutena."
    },
    {
      "id": "g-h7-q9",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa tarkimmin artikkelissa esitettyä tiedeviestinnän saavutettavuuden ajatusta?",
      "options": [
        {
          "id": "a",
          "text": "Tieteen saavutettavuus toteutuu ensisijaisesti silloin, kun tutkimustieto on avoimesti saatavilla ja kiinnostunut yleisö voi löytää sen itse."
        },
        {
          "id": "b",
          "text": "Tieteen saavutettavuuteen kuuluu tutkimustulosten levittämisen lisäksi sen avaaminen, miten tiede toimii ja miten tutkimustuloksia voidaan ymmärtää."
        },
        {
          "id": "c",
          "text": "Tieteen saavutettavuudessa keskeistä on tutkimustulosten välittäminen mahdollisimman laajalle yleisölle, kun taas tieteen prosesseista kertominen kuuluu ensisijaisesti tieteen sisäiseen viestintään."
        },
        {
          "id": "d",
          "text": "Tieteen saavutettavuudessa tutkimustulosten ymmärrettäväksi tekeminen on tärkeää lähinnä silloin, kun tutkimustieto ei ole avoimesti saatavilla."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "503",
        "section": "kohta ennen otsikkoa Matkalla opittua"
      },
      "explanation": "B säilyttää tekstin keskeisen erottelun: saavutettavuus ei tarkoita vain sitä, että tutkimustieto on saatavilla tai että tuloksista kerrotaan, vaan myös tutkimuksen toimintatapojen ja prosessien avaamista. A kuvaa tekstissä mainittua tiedeviestinnän yksinkertaisinta, passiivista muotoa, mutta ei laajempaa saavutettavuuden ajatusta. C rajaa tieteen prosesseista viestimisen perusteettomasti tieteen sisälle. D taas luo ehdon, jota tekstissä ei esitetä.\n\nLähde:\n”Laaksosen ja Poutasen (2020) mukaan yhtä tärkeää kuin tulosten viestiminen on kuitenkin viestintä siitä, miten tiede toimii, tulosten avaaminen ja ymmärrettäväksi tekeminen sekä tieteen prosesseista kertominen.”",
      "learningPoint": "Tunnista saavutettavuuden laajempi merkitys eri sanamuodossa. Tulosten levittämisen lisäksi vaihtoehdon pitää sisältää tieteen toimintatapojen avaaminen ja tutkimustulosten ymmärrettäväksi tekeminen.\n\nHakuvinkki: Hae esimerkiksi ”saavutettavuuden” ja lue koko sitä seuraava kappale."
    },
    {
      "id": "g-h7-q10",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Artikkelin mukaan tutkijoiden ”ujous” tutkimuksestaan viestimisessä on ongelmallista kaikissa tilanteissa riippumatta siitä, millaiset yhteisölliset viestintärakenteet heidän ympärillään ovat.",
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "507",
        "section": "Johtopäätökset"
      },
      "explanation": "Väite tekee artikkelin näkemyksestä liian ehdottoman. Kirjoittajat eivät määrittele ujoutta itsessään kielteiseksi, vaan sen merkitys riippuu myös ympäröivistä sosiaalisista ja yhteisöllisistä rakenteista. Ratkaiseva ansa on sana ”kaikissa” sekä väitteen loppuosa ”riippumatta” viestintärakenteista.\n\nLähde:\n”Sosiaalityössä tiedämme, että ujous sinänsä ei ole myönteistä tai kielteistä. Ongelmia piirteistä tulee vasta, jos sosiaaliset rakenteet tuottavat niistä sellaisia.”\n\nMyöhemmin todetaan:\n\n”Sosiaalityön tutkimuksessa ujous tulee helposti tuottaneeksi portinvartijuutta etenkin silloin, jos yhteisölliset rakenteet aktiiviselle tutkimusviestinnälle eivät ole riittävän selkeät ja vahvat.”",
      "learningPoint": "Tarkista sanat ”kaikissa” ja ”riippumatta”. Ne muuttavat ympäröivistä rakenteista riippuvan kuvauksen ehdottomaksi väitteeksi, jota aineisto ei tue.\n\nHakuvinkki: Hae ”ujous sinänsä” tai ”portinvartijuutta”."
    },
    {
      "id": "g-h7-q11",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista vastaavat artikkelissa kuvattuja seuran Instagram-viestinnän alkuvaiheita? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Uudenlainen ulkoinen viestintä aloitettiin Instagramissa toukokuussa 2024."
        },
        {
          "id": "b",
          "text": "Instagram yhdistettiin seuran Facebook-tiliin jo ennen uudenlaisen viestinnän aloittamista."
        },
        {
          "id": "c",
          "text": "Helmikuuhun 2025 mennessä Instagramissa oli julkaistu uuden mallin mukaisesti 100 pysyvää julkaisua."
        },
        {
          "id": "d",
          "text": "Julkaisemisen perusrakenne vakiintui vasta sen jälkeen, kun Instagram oli yhdistetty Facebookiin seuraavana syksynä."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "501–502",
        "section": "kohta Seuran viestinnän toteutus ja aktivoituminen"
      },
      "explanation": "A ja C säilyttävät sekä tapahtumat että niiden ajankohdat oikein. B vaihtaa tapahtumien järjestyksen: Instagram-viestintä alkoi ensin toukokuussa ja Facebook-linkitys tehtiin vasta seuraavana syksynä. D ei myöskään vastaa tekstiä, sillä julkaisurakenteen kerrotaan selkeytyneen nopeasti ensimmäisen puolen vuoden aikana. Facebook-linkitystä ei esitetä tämän kehityksen edellytyksenä.\n\nLähde:\n”Uudenlainen, arkinen ja tiivis ulkoinen viestintä aloitettiin toukokuussa 2024 uudella Instagram-tilillä, joka seuraavana syksynä linkitettiin aiemmin luotuun seuran Facebook-tiliin.”\n\nSeuraavalla sivulla todetaan:\n\n”Tätä tekstiä kirjoitettaessa helmikuussa 2025 seura on julkaissut uuden mallin mukaisesti Instagram-tilillään toukokuun alusta alkaen 100 pysyvää julkaisua ja satoja vuorokaudessa katoavia tarinajulkaisuja.”",
      "learningPoint": "Yhdistä kukin tapahtuma oikeaan ajankohtaan. Instagram-viestinnän alkaminen, Facebook-linkitys ja julkaisujen määrän tarkastelu kuuluvat eri vaiheisiin, eikä niiden järjestystä voi vaihtaa.\n\nHakuvinkki: Hae esimerkiksi ”toukokuussa 2024” ja seuraa tapahtumien aikajärjestystä seuraavan sivun alkuun asti."
    },
    {
      "id": "g-h7-q12",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa tarkimmin artikkelin johtopäätöksissä esitettyä portinvartijuusmetaforaa?",
      "options": [
        {
          "id": "a",
          "text": "Tiedeviestinnän yhteisöllisten rakenteiden tulisi korvata yksittäiset tutkijat avoimempina portinvartijoina, jotta tutkimustiedon pääsy julkisuuteen voidaan varmistaa."
        },
        {
          "id": "b",
          "text": "Tutkimusviestinnän tavoitteena tulisi olla portin avaaminen mahdollisimman monille, vaikka portinvartijuuden perusrakenne säilyisi ennallaan."
        },
        {
          "id": "c",
          "text": "Tiedeviestinnän rakenteiden tarkoituksena ei pitäisi olla uudenlaisen portinvartijuuden rakentaminen, vaan itse ajatus tutkimuksen eri osapuolia erottavista porteista tulisi kyseenalaistaa."
        },
        {
          "id": "d",
          "text": "Portinvartijuus voidaan poistaa ensisijaisesti vahvistamalla tutkijoiden yksilöllistä rohkeutta viestiä omasta tutkimuksestaan."
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "507",
        "section": "Johtopäätökset"
      },
      "explanation": "C säilyttää johtopäätöksen olennaisen eron: kirjoittajien tavoitteena ei ole tehdä portinvartijasta avoimempaa, vaan kyseenalaistaa koko porttiin perustuva asetelma. A ja B ovat siksi erityisen uskottavia häiriövaihtoehtoja: niissä viestintää kyllä avataan, mutta portinvartijuuden perusajatus jätetään voimaan. D puolestaan siirtää ratkaisun yhteisöllisistä rakenteista ensisijaisesti yksittäisten tutkijoiden ominaisuuksiin.\n\nLähde:\n”Väitämme, että yhteisöllisten tiedeviestinnän rakenteiden tehtävänä ei kuitenkaan pidä olla asettuminen avoimemmaksi portinvartijaksi vaan koko metaforan portti on tärkeää osata kyseenalaistaa.”\n\nKirjoittajat jatkavat, että porttien ja aitojen sijaan sosiaalityön tutkimus, käytännöt ja asiakkaat ovat samaa kenttää, jolle rakennettuja aitoja ja portteja tulisi pikemminkin purkaa.",
      "learningPoint": "Vertaa metaforan selitystä kirjoittajien johtopäätökseen. Portin avaaminen ja koko porttiin perustuvan asetelman kyseenalaistaminen ovat eri ajatuksia, joten oikean parafraasin pitää säilyttää jälkimmäinen.\n\nHakuvinkki: Hae ”avoimemmaksi portinvartijaksi” ja lue kappale loppuun."
    }
  ]
} satisfies ValintakoeGExercise;
