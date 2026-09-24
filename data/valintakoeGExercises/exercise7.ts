import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 7 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
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
      "categoryId": 8,
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
      "explanation": "Bottom-up-mallissa kokonaisuutta ei rakenneta ensin valmiiksi, vaan kokonaiskuva syntyy vähitellen yksittäisten kuvausten kertyessä. A ja D kuvaavat tekstissä top-down-lähestymistapaa. C on uskottava häiriövaihtoehto, mutta tekstissä todetaan päinvastoin, että prosessissa sallitaan joidenkin aiheiden painottuminen eri vaiheissa.",
      "learningPoint": "Kun tekstissä esitellään kaksi läheistä käsitettä peräkkäin, tarkista huolellisesti, kumpaan niistä kukin ominaisuus kuuluu. Hakuvinkki: Hae esimerkiksi ”bottom-up” ja vertaa kuvausta juuri sitä edeltävään top-down-kuvaukseen."
    },
    {
      "id": "g-h7-q2",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 8,
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
      "explanation": "A ja C vastaavat tekstin kuvausta. B sekoittaa kaksi eri käyttötarkoitusta: Signal oli viestintätiimin ensisijainen yhteydenpitokanava, kun taas Instagram oli ulkoisen viestinnän kanava. D on väärin, koska tiimiläisten tehtävänä oli nimenomaan myös täydentää muiden tuomia syötteitä paikallisilla näkökulmilla.",
      "learningPoint": "Tarkista, mihin tarkoitukseen tekstissä mainittu kanava, toimintatapa tai tehtävä liittyy. Samassa kappaleessa voi esiintyä useita hyvin läheisiä asioita. Hakuvinkki: Hae esimerkiksi ”Signal” tai ”viestintätiimi” ja lue koko ympäröivä kappale."
    },
    {
      "id": "g-h7-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Tiedeviestinnän jatkumomallin perusteella seuran ulkoisen viestinnän voitiin ajatella palvelevan samalla sekä tieteen sisäistä viestintää, oppimista että tutkimustiedon popularisointia.",
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "504",
        "section": "kohta Ulkoisen ja sisäisen viestinnän väliset suhteet"
      },
      "explanation": "Väite tiivistää tekstissä luetellut kolme tasoa eri sanoin. Tieteen sisäinen viestintä vastaa tasoa 1, oppimista palveleva pedagoginen tehtävä tasoa 2 ja popularisointi tasoa 3. Tehtävässä pitää tunnistaa, että lyhyempi muotoilu säilyttää alkuperäisen merkityksen, vaikka se ei kopioi tekstiä sanasta sanaan.",
      "learningPoint": "Älä etsi vain samoja sanoja. Tarkista, vastaako lyhyemmäksi tiivistetty väite kaikkia alkuperäisen tekstikohdan olennaisia osia. Hakuvinkki: Hae esimerkiksi ”pedagogisena” tai ”taso 1”."
    },
    {
      "id": "g-h7-q4",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 6,
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
      "explanation": "C säilyttää sekä tapahtumaketjun että tekstin rajauksen: säännöllinen kyseleminen johti uusiin käytäntöihin joissakin työyhteisöissä. B menee liian pitkälle, sillä tekstissä ei sanota kaikkien yliopistojen käytäntöjen yhdenmukaistuneen. D puolestaan muuttaa seurauksen alkuperäiseksi tavoitteeksi. A kääntää ajatuksen väärään suuntaan: juuri säännöllinen kysely oli osa syntynyttä toimintatapaa.",
      "learningPoint": "Erota toisistaan tavoite, toiminta ja toiminnan seuraus. Se, että jokin asia syntyy toiminnan seurauksena, ei tarkoita, että se olisi ollut toiminnan alkuperäinen tavoite. Hakuvinkki: Hae esimerkiksi ”sisäisen viestinnän käytäntöjä”."
    },
    {
      "id": "g-h7-q5",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 8,
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
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "502",
        "section": "taulukko 1 – Seuran sosiaalisen median perussisällöt"
      },
      "explanation": "A ja C vastaavat taulukon kuvauksia. B on lähellä oikeaa, mutta väitöstilaisuuksista tiedotettiin kootusti etukäteen kuukauden tai parin välein, ei aina yksittäin heti ajankohdan varmistuttua. D vaihtaa julkaisumuodon: yleisötapahtumia julkaistiin pääosin tarinoina, jotka koottiin myöhemmin kohokohtaan.",
      "learningPoint": "Taulukossa useiden toimintatapojen kuvaukset ovat lähekkäin. Tarkista, mikä julkaisukäytäntö kuuluu juuri kysyttyyn sisältötyyppiin. Hakuvinkki: Paikanna taulukko 1 ja vertaa erityisesti rivejä Uudet tieteelliset artikkelit, Tulevat sosiaalityön väitöstilaisuudet, Konferenssiesiintymiset ja Tieteellisten yleisötapahtumien mainostaminen."
    },
    {
      "id": "g-h7-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 14,
      "prompt": "Artikkelin mukaan laajemman tutkijajoukon kannustaminen tarjoamaan viestittävää sisältöä osoittautui työläämmäksi kuin eri kanavia ja eri tavoin keskeneräisinä tulevien sisältöehdotusten hallitseminen.",
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
        "oikein"
      ],
      "source": {
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "505",
        "section": "kohta Keskeneräisyyden sallimisen tärkeys"
      },
      "explanation": "Väite ilmaisee tekstin vertailun eri sanoin mutta säilyttää suuruussuhteen oikein. Työläämmäksi kuvataan tutkijoiden kannustaminen tarjoamaan sisältöä. Ehdotusten tuleminen eri kanavia pitkin tai keskeneräisinä aiheuttaa hallittavaa työtä, mutta tekstin mukaan se on näistä kahdesta pienempi haaste.",
      "learningPoint": "Kun tekstissä verrataan kahta asiaa, tarkista kumpi niistä kuvataan suuremmaksi, vaikeammaksi tai työläämmäksi. Molemmat asiat voivat löytyä samasta virkkeestä, jolloin niiden keskinäinen suhde ratkaisee. Hakuvinkki: Hae esimerkiksi ”työllistävämpi”."
    },
    {
      "id": "g-h7-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 5,
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
      "explanation": "D kääntää tekstin merkityksen vastakkaiseksi. Moninaiset yleisöt eivät helpottaneet erilaisten viestintätapojen toteuttamista, vaan tekivät siitä haastavaa. A–C vastaavat saman tekstikohdan sisältöä.",
      "learningPoint": "Varo vaihtoehtoa, jossa lähes koko sisältö vastaa aineistoa mutta yksi verbi muuttaa merkityksen päinvastaiseksi. Tässä ratkaiseva ero on ”helpottaneet” vs. ”ollut haastavaa”. Hakuvinkki: Hae esimerkiksi ”eri yleisöille” tai ”moninaisten yleisöjen”."
    },
    {
      "id": "g-h7-q8",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
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
      "explanation": "B tiivistää kirjoittajien näkemyksen: viestinnän ei tarvitse olla kaikissa vaiheissa täysin valmis, vaan myös keskeneräisyyttä voidaan hyväksyä samalla kun toimintaa rakennetaan. A on väärin, koska artikkelissa kerrotaan myös tutkimustoiminnasta, jossa ei keskustella pelkästään valmiista vertaisarvioiduista tuloksista. C kääntää tekstissä esitetyn työmäärävertailun. D muuttaa vaikutuksen päinvastaiseksi: keskeneräisyyden sallimisen katsotaan tukevan aktiivista sisältöjen kysymistä, ei vähentävän sen tarvetta.",
      "learningPoint": "Oikea vaihtoehto ei välttämättä vastaa yhtä aineiston virkettä sanasta sanaan. Tarkista, tiivistääkö vaihtoehto lähekkäisten virkkeiden yhteisen ajatuksen muuttamatta sen suuntaa. Hakuvinkki: Hae ”keskeneräinen” tai ”keskeneräisyyden” ja lue ympäröivä kappale kokonaisuutena."
    },
    {
      "id": "g-h7-q9",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
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
      "explanation": "B säilyttää tekstin keskeisen erottelun: saavutettavuus ei tarkoita vain sitä, että tutkimustieto on saatavilla tai että tuloksista kerrotaan, vaan myös tutkimuksen toimintatapojen ja prosessien avaamista. A kuvaa tekstissä mainittua tiedeviestinnän yksinkertaisinta, passiivista muotoa, mutta ei laajempaa saavutettavuuden ajatusta. C rajaa tieteen prosesseista viestimisen perusteettomasti tieteen sisälle. D taas luo ehdon, jota tekstissä ei esitetä.",
      "learningPoint": "Kun tekstissä esitellään ensin suppeampi ja sitten laajempi näkemys samasta asiasta, tarkista, kumpaa kysymyksessä todella kysytään. Ensimmäinen tekstistä löytyvä oikealta kuulostava kohta ei välttämättä vielä riitä. Hakuvinkki: Hae esimerkiksi ”saavutettavuuden” ja lue koko sitä seuraava kappale."
    },
    {
      "id": "g-h7-q10",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Artikkelin mukaan tutkijoiden ”ujous” tutkimuksestaan viestimisessä on ongelmallista kaikissa tilanteissa riippumatta siitä, millaiset yhteisölliset viestintärakenteet heidän ympärillään ovat.",
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
        "articleId": "ujoja-portinvartijoita-vai-tieteen-saavutettavuuden-edistajia",
        "page": "507",
        "section": "Johtopäätökset"
      },
      "explanation": "Väite tekee artikkelin näkemyksestä liian ehdottoman. Kirjoittajat eivät määrittele ujoutta itsessään kielteiseksi, vaan sen merkitys riippuu myös ympäröivistä sosiaalisista ja yhteisöllisistä rakenteista. Ratkaiseva ansa on sana ”kaikissa” sekä väitteen loppuosa ”riippumatta” viestintärakenteista.",
      "learningPoint": "Tarkista erityisen huolellisesti sanat kuten kaikki, aina, riippumatta, vain ja ei koskaan. Muuten aineistoa hyvin vastaava väite voi muuttua yhdellä ehdottomalla ilmauksella vääräksi. Hakuvinkki: Hae ”ujous sinänsä” tai ”portinvartijuutta”."
    },
    {
      "id": "g-h7-q11",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 9,
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
      "explanation": "A ja C säilyttävät sekä tapahtumat että niiden ajankohdat oikein. B vaihtaa tapahtumien järjestyksen: Instagram-viestintä alkoi ensin toukokuussa ja Facebook-linkitys tehtiin vasta seuraavana syksynä. D ei myöskään vastaa tekstiä, sillä julkaisurakenteen kerrotaan selkeytyneen nopeasti ensimmäisen puolen vuoden aikana. Facebook-linkitystä ei esitetä tämän kehityksen edellytyksenä.",
      "learningPoint": "Kun samassa kohdassa kuvataan useita peräkkäisiä vaiheita, älä tarkista vain sitä, tapahtuiko asia. Tarkista myös milloin ja missä järjestyksessä se tapahtui. Hakuvinkki: Hae esimerkiksi ”toukokuussa 2024” ja seuraa tapahtumien aikajärjestystä seuraavan sivun alkuun asti."
    },
    {
      "id": "g-h7-q12",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 4,
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
      "explanation": "C säilyttää johtopäätöksen olennaisen eron: kirjoittajien tavoitteena ei ole tehdä portinvartijasta avoimempaa, vaan kyseenalaistaa koko porttiin perustuva asetelma. A ja B ovat siksi erityisen uskottavia häiriövaihtoehtoja: niissä viestintää kyllä avataan, mutta portinvartijuuden perusajatus jätetään voimaan. D puolestaan siirtää ratkaisun yhteisöllisistä rakenteista ensisijaisesti yksittäisten tutkijoiden ominaisuuksiin.",
      "learningPoint": "Lähekkäiset vaihtoehdot voivat kaikki puhua avoimuudesta ja tiedon leviämisestä, mutta tarkista, mitä tekstissä halutaan tehdä itse perusrakenteelle. Tässä ratkaiseva ero on portin avaamisen ja koko portin kyseenalaistamisen välillä. Hakuvinkki: Hae ”avoimemmaksi portinvartijaksi” ja lue kappale loppuun."
    }
  ]
} satisfies ValintakoeGExercise;
