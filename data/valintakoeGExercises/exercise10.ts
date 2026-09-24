import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 10 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
 */
export const valintakoeGExercise10Base = {
  "id": "harjoitus-10",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 10 – Ideologia ja politiikan todellistuminen: Konservatismin filosofinen määritelmä",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
  "articleTitle": "Ideologia ja politiikan todellistuminen: Konservatismin filosofinen määritelmä",
  "articleUrl": "https://journal.fi/politiikka/article/view/116240",
  "questions": [
    {
      "id": "g-h10-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Mikä seuraavista kuvaa oikein Michael Oakeshottin ja Samuel Huntingtonin tapoja hahmottaa konservatismia?",
      "options": [
        {
          "id": "a",
          "text": "Molemmat määrittelevät konservatismin ensisijaisesti yksilön temperamentiksi, johon kuuluu varovaisuus muutoksia kohtaan."
        },
        {
          "id": "b",
          "text": "Oakeshott liittää konservatismin säilyttämiseen ja varovaisuuteen, kun taas Huntington kuvaa sitä systemaattiseksi ja teoreettiseksi muutoksen vastustamiseksi."
        },
        {
          "id": "c",
          "text": "Oakeshott määrittelee konservatismin poliittiseksi ideologiaksi, kun taas Huntington pitää sitä ensisijaisesti yksilön dispositiona."
        },
        {
          "id": "d",
          "text": "Molemmat katsovat konservatismin perustuvan muutoksen hyväksymiseen silloin, kun muutos tapahtuu orgaanisesti."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "273",
        "section": "Konservatismin määrittelemisen vaikeus"
      },
      "explanation": "Oakeshottin määritelmässä korostuvat tunnetun hyvän säilyttäminen ja varovaisuus, kun taas Huntington käsittelee konservatismia nimenomaan systemaattisena muutoksen vastustamisena. A on lähellä oikeaa, mutta artikkeli huomauttaa erikseen, ettei Huntington puhu Oakeshottin tavoin konservatismista temperamenttina.",
      "learningPoint": "Tarkista, kenen ajatteluun kukin aineistossa esitetty määritelmä kuuluu. Samassa kohdassa esitellään useita läheisiä näkemyksiä, joten oikea sisältö pitää yhdistää oikeaan henkilöön. Hakuvinkki: Hae esimerkiksi ”Oakeshott” ja vertaa hänen määritelmäänsä heti sen jälkeen esiteltävään Huntingtonin määritelmään."
    },
    {
      "id": "g-h10-q2",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Pentikäisen esittämän konservatismin määritelmän mukaan konservatismissa pyritään säilyttämään aistisen luonnolliseksi mielletty jako. Mitä ”luonnollisella” tässä yhteydessä tarkoitetaan?",
      "options": [
        {
          "id": "a",
          "text": "Sellaista, mikä on säilynyt yhteiskunnassa historiallisesti mahdollisimman pitkään."
        },
        {
          "id": "b",
          "text": "Sellaista, mikä perustuu yksilön välittömiin aistihavaintoihin ympäröivästä yhteiskunnasta."
        },
        {
          "id": "c",
          "text": "Sellaista, mikä on harmoniassa yli-inhimillisen periaatteen kanssa."
        },
        {
          "id": "d",
          "text": "Sellaista, mikä syntyy ilman minkäänlaisia poliittisia tai yhteiskunnallisia muutoksia."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "278",
        "section": "Konservatismin filosofinen määritelmä"
      },
      "explanation": "Artikkelin määritelmässä ”luonnollinen” ei tarkoita yksinkertaisesti vanhaa, muuttumatonta tai aistein havaittavaa. Ratkaisevaa on yhteys yli-inhimilliseen periaatteeseen. D on uskottava häiriövaihtoehto, koska artikkelissa käsitellään säilyttämistä, mutta konservatismi ei kirjoittajan mukaan tarkoita kaiken muutoksen torjumista.",
      "learningPoint": "Tunnista sama merkitys, vaikka kysymys ja aineisto eivät kaikilta osin käytä samaa rakennetta. Kiinnitä erityistä huomiota siihen, miten tekstissä määritellään keskeinen käsite. Hakuvinkki: Hae ”yli-inhimillisen” tai ”luonnollinen”."
    },
    {
      "id": "g-h10-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Rancièren mukaan poliittisen yhteisön implisiittinen tasa-arvo perustuu siihen, että jokaisella yhteisön jäsenellä on sama ymmärrys ja kyky ymmärtää kieltä.",
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
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "277",
        "section": "Aistisen jako – Missä politiikka tapahtuu?"
      },
      "explanation": "Väite säilyttää aineiston olennaisen merkityksen: Rancièren tulkinnassa perustava tasa-arvo liittyy yhteiseen ymmärrykseen ja kykyyn ymmärtää kieltä. Teksti jatkaa tätä käskyn esimerkillä: käskyn totteleminen edellyttää, että käskyn vastaanottaja kykenee ensin ymmärtämään sen.",
      "learningPoint": "Tarkista, säilyttääkö lyhyemmäksi muotoiltu väite alkuperäisen tekstikohdan merkityksen ilman, että siihen on lisätty tai siitä on poistettu ratkaisevaa ehtoa. Hakuvinkki: Hae esimerkiksi ”implisiittinen tasa-arvo”."
    },
    {
      "id": "g-h10-q4",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 4,
      "prompt": "Mikä seuraavista väitteistä Platonin ja konservatismin suhteesta vastaa artikkelin kuvausta?",
      "options": [
        {
          "id": "a",
          "text": "Platon ja konservatismi edustavat molemmat poliittista rationalismia, mutta eroavat siinä, miten ne suhtautuvat yhteiskunnalliseen harmoniaan."
        },
        {
          "id": "b",
          "text": "Platon ja konservatismi suhtautuvat vastakkaisesti politiikan päämäärään, vaikka molemmat perustavat yhteiskunnallisen järjestyksen orgaaniseen muutokseen."
        },
        {
          "id": "c",
          "text": "Konservatismi on Platonin rationalismin vastakohta, mutta artikkelin mukaan niillä voidaan silti nähdä yhteinen päämäärä suhteessa politiikan loppuun."
        },
        {
          "id": "d",
          "text": "Konservatismi ja Platon eroavat toisistaan ennen kaikkea siksi, ettei Platonin ajattelussa ole lainkaan yli-inhimillistä periaatetta."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "280",
        "section": "Konservatismi, Platon ja politiikan loppu"
      },
      "explanation": "Artikkeli tekee tärkeän erottelun keinon ja päämäärän välillä. Platon edustaa rationalismia, jota vasten konservatismi asetetaan, joten ne ovat tässä suhteessa vastakohtia. Tästä huolimatta kirjoittaja katsoo niiden jakavan Rancièren näkökulmasta yhteisen teloksen eli pyrkimyksen kohti politiikan loppua.",
      "learningPoint": "Tarkista erityisesti suhdetta kuvaavat sanat. Kaksi näkemystä voivat olla yhdessä suhteessa vastakkaisia ja toisessa suhteessa samansuuntaisia, joten esimerkiksi vastakohta ja liittolainen eivät tässä sulje toisiaan pois. Hakuvinkki: Hae ”Platonin rationalismille” tai ”politiikan päämäärään”."
    },
    {
      "id": "g-h10-q5",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 4,
      "prompt": "Mikä seuraavista kuvaa oikein Michael Freedenin näkemystä konservatismin ja muutoksen suhteesta?",
      "options": [
        {
          "id": "a",
          "text": "Konservatismi pyrkii säilyttämään yhteiskunnan muuttumattomana, vaikka muutos tapahtuisi luonnollisesti."
        },
        {
          "id": "b",
          "text": "Muutos kuuluu olennaisesti konservatismiin, mutta sen tulisi tapahtua luonnollisesti tai orgaanisesti."
        },
        {
          "id": "c",
          "text": "Konservatismi hyväksyy muutoksen erityisesti silloin, kun sitä ohjaa käytännön tilanteesta erotettu abstrakti ideaali."
        },
        {
          "id": "d",
          "text": "Muutos kuuluu konservatismiin vain silloin, kun sillä palautetaan yhteiskunta aikaisempaan tilaansa."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "274",
        "section": "Konservatismi ja muutos"
      },
      "explanation": "Freeden ei määrittele konservatismia kaiken muutoksen vastustamiseksi. Ratkaisevaa on muutoksen laatu: muutos voi kuulua konservatismiin, kun se tapahtuu luonnollisesti tai orgaanisesti. A muuttaa tämän yleiseksi muutosvastaisuudeksi, kun taas C liittää konservatismiin artikkelissa rationalismille ominaisen abstraktin ideaalin.",
      "learningPoint": "Tarkista väitteen ratkaiseva rajaus. Tässä olennaista ei ole vain se, hyväksytäänkö muutos, vaan millainen muutos hyväksytään. Hakuvinkki: Hae ”Freeden” ja tarkista muutosta kuvaavat sanat."
    },
    {
      "id": "g-h10-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Barberin ja Popen kuvaamassa symbolisessa ideologiassa henkilön ideologinen samaistuminen edellyttää, että hän pystyy sanallistamaan ideologiansa konkreettisen sisällön.",
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
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "276",
        "section": "Yksilö ja ideologia"
      },
      "explanation": "Symbolisessa ideologiassa identiteetti perustuu samaistumiseen tietyn ryhmän kanssa. Artikkelissa nimenomaan todetaan, ettei tämän samaistumisen tarvitse vastata kykyä sanallistaa ideologian konkreettista sisältöä. Väitteessä ”ei tarvitse” on muutettu muotoon ”edellyttää”, jolloin merkitys kääntyy.",
      "learningPoint": "Kiinnitä huomiota kielteisiin ja velvoittaviin ilmauksiin. Ei tarvitse ja edellyttää muodostavat tässä ratkaisevan merkityseron. Hakuvinkki: Hae ”symboliseksi ideologiaksi” tai ”sanallistaa”."
    },
    {
      "id": "g-h10-q7",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Mitkä seuraavista kuvaavat oikein Rancièren käsitettä ”aistisen jako”? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Se koskee yhteistä aistein tavoitettavaa maailmaa."
        },
        {
          "id": "b",
          "text": "Se koskee myös yksilön osaa yhteisessä aistittavassa todellisuudessa."
        },
        {
          "id": "c",
          "text": "Yksilön osa aistisessa määrittää hänen paikkaansa suhteessa aikaan ja tilaan."
        },
        {
          "id": "d",
          "text": "Se viittaa ainoastaan kaikille yhteiseen todellisuuteen eikä yksilön asemaan siinä."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "c"
      ],
      "source": {
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "276",
        "section": "Aistisen jako – Missä politiikka tapahtuu?"
      },
      "explanation": "Aistisen jaossa yhdistyvät yhteinen todellisuus ja yksilön osa siinä, joten A ja B ovat oikein. C täsmentää oikein, mitä yksilön osa merkitsee. D on väärin yhden ratkaisevan sanan vuoksi: ”ainoastaan” poistaa käsitteen yksilöllisen ulottuvuuden.",
      "learningPoint": "Varo sanoja kuten ainoastaan, aina ja kaikki. Muuten oikealta vaikuttava väite voi muuttua vääräksi, jos aineiston kaksiosainen määritelmä rajataan perusteettomasti vain toiseen osaan. Hakuvinkki: Hae ”Aistisen jako viittaa” ja lue koko määritelmä, ei vain ensimmäistä virkkeen osaa."
    },
    {
      "id": "g-h10-q8",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Mikä seuraavista EI pidä paikkaansa artikkelissa esitetyn kuvauksen perusteella?",
      "options": [
        {
          "id": "a",
          "text": "Scrutonin mukaan konservatismi ottaa lähtökohdakseen vallitsevan todellisuuden itsensä."
        },
        {
          "id": "b",
          "text": "O’Hara kutsuu konservatismia epistemologiseksi ideologiaksi."
        },
        {
          "id": "c",
          "text": "Konservatismin epistemologis-empiristinen tulkinta korostaa laajamittaisen poliittisen muutoksen vaikutusten ennustamiseen liittyvien haasteiden tunnustamista."
        },
        {
          "id": "d",
          "text": "O’Haran mukaan konservatismi ottaa poliittisen toimintansa johtotähdeksi abstraktin idean vallitsevan todellisuuden sijasta."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "ideologia-ja-politiikan-todellistuminen-konservatismin-filosofinen-maaritelma",
        "page": "275",
        "section": "Konservatismi ja muutos"
      },
      "explanation": "D kääntää aineistossa esitetyn suhteen päinvastaiseksi. Konservatismin epistemologis-empirististä tulkintaa kuvataan juuri vaihtoehtona rationalistin abstraktille idealle. A, B ja C vastaavat saman tekstikohdan kuvausta.",
      "learningPoint": "Tarkista, kumpi kahdesta vastakkain asetetusta asiasta liitetään mihinkin ajattelutapaan. Tässä sekä abstrakti idea että vallitseva todellisuus löytyvät samasta kohdasta, mutta ne kuuluvat vastakkaisille puolille. Hakuvinkki: Hae ”johtotähdekseen” ja tarkista, mikä asetetaan abstraktin idean tilalle."
    }
  ]
} satisfies ValintakoeGExercise;
