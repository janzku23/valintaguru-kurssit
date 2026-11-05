import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 5: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise5Base = {
  "id": "keskivaikea-harjoitus-5",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 5 – Kansalaistaitoja vai kilpailukykyä? Informaatiolukutaidon toimintapoliittiset kehykset",
  "description": "30 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 30,
  "difficulty": "medium",
  "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
  "articleTitle": "Kansalaistaitoja vai kilpailukykyä? Informaatiolukutaidon toimintapoliittiset kehykset",
  "articleUrl": "https://journal.fi/hallinnontutkimus/article/view/116982/76795",
  "questions": [
    {
      "id": "g-m5-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nKorkin ja Turjan tutkimuksessa informaatiolukutaitoa tarkastellaan yksilöllisten tiedonhankintataitojen lisäksi poliittis-hallinnollisena ilmiönä. Tutkimuksessa pyritään selvittämään, millaisiin yhteiskunnallisiin tavoitteisiin ja poliittisiin ongelmiin informaatiolukutaito suomalaisissa politiikka-asiakirjoissa liitetään.",
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "71"
      },
      "explanation": "Tutkimus ei rajoitu yksilön kykyyn hankkia ja arvioida tietoa, vaan tarkastelee informaatiolukutaitoon liitettyjä poliittisia merkityksiä, tavoitteita ja ongelmanmäärittelyjä. Epätosi olisi oikea vastaus, jos tutkimuksessa analysoitaisiin ainoastaan kansalaisten käytännön tiedonhakutaitoja.\n\nLähde:\nS. 71, johdanto. Ratkaiseva lainaus: \"miten informaatiolukutaito käsitteellistyy suomalaisissa politiikka-asiakirjoissa ja millaisena toimintapolitiikan tavoitteena se näyttäytyy\".",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksen kohde ja tutkimuskysymys sekä tunnistaa niiden merkitys uudelleen muotoillusta väitteestä.\nHakuvinkki: Ctrl+F: Tutkimuksessamme tarkastelemme."
    },
    {
      "id": "g-m5-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein informaatiolukutaidon tutkimuksen perinteiset ja uudemmat lähestymistavat?",
      "options": [
        {
          "id": "a",
          "text": "Perinteinen lähestymistapa korostaa yhteisöjen valtasuhteita ja tiedon sosiaalista rakentumista, kun taas uudempi lähestymistapa käsittelee informaatiolukutaitoa kontekstista riippumattomina yksilöllisinä kykyinä."
        },
        {
          "id": "b",
          "text": "Perinteinen lähestymistapa tarkastelee informaatiolukutaitoa yksilön kompetenssina, kun taas uudempi sosiokulttuurinen näkökulma painottaa tiedon tuottamisen ja käyttämisen sosiaalisia käytäntöjä."
        },
        {
          "id": "c",
          "text": "Perinteinen lähestymistapa perustuu ensisijaisesti poliittisten instituutioiden tutkimukseen, kun taas uudempi näkökulma rajoittaa informaatiolukutaidon kirjastoissa tapahtuvaan tiedonhakuun."
        },
        {
          "id": "d",
          "text": "Perinteinen lähestymistapa tarkastelee informaatiolukutaitoa yhteiskunnallisena osallistumisena, kun taas uudempi näkökulma rajaa sen teknologiseen osaamiseen ja yksilöllisiin tiedonkäsittelytaitoihin."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "72"
      },
      "explanation": "B kuvaa molemmat lähestymistavat oikein. Perinteisessä kognitiivisessa lähestymistavassa korostuvat yksilön kompetenssit. Sosiokulttuurinen näkökulma puolestaan tarkastelee tiedon muodostumista ja käyttöä sosiaalisissa ja kulttuurisissa käytännöissä.\nA ja D vaihtavat lähestymistapojen painotukset keskenään. C yhdistää niihin ominaisuuksia, jotka eivät vastaa artikkelin esittämää erottelua.\n\nLähde:\nS. 72, \"Informaatiolukutaidon yhteiskuntapoliittinen tutkimus\". Ratkaiseva lainaus: \"Uudempi sosiokulttuurinen näkökulma kiinnittää huomion informaatiolukutaidon kontekstuaalisuuteen\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, mihin tutkimusperinteeseen kukin ominaisuus kuuluu. Väärissä vaihtoehdoissa oikeita ominaisuuksia yhdistetään väärään lähestymistapaan.\nHakuvinkki: Ctrl+F: kognitiivinen lähestymistapa ja sosiokulttuurinen näkökulma."
    },
    {
      "id": "g-m5-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan suomalaisessa informaatiolukutaidon toimintapolitiikassa on siirrytty hajanaisista hankkeista yhtenäiseen, ministeriöiden yhteisesti koordinoimaan politiikkaan, minkä seurauksena informaatiolukutaidon yhteiskunnallinen merkitys on määritelty aiempaa selkeämmin.",
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "84–85"
      },
      "explanation": "Väittämä kääntää tutkimuksen johtopäätöksen päinvastaiseksi. Tutkijoiden mukaan informaatiolukutaidon edistäminen on hajautunut eri hallinnonaloille, hankkeisiin ja projekteihin. Yhtenäinen ja horisontaalinen toimintapolitiikka esitetään kehittämistarpeena, ei jo toteutuneena saavutuksena.\n\nLähde:\nS. 84–85, päätelmät. Sivulla 85 todetaan: \"millään politiikka-alueella ei ole kokonaisvastuuta informaatiolukutaidon edistämisestä\".",
      "learningPoint": "Opiskelijan tulee erottaa nykytilaa kuvaava tutkimustulos tulevaisuutta koskevasta kehittämisehdotuksesta.\nHakuvinkki: Ctrl+F: kokonaisvastuuta ja horisontaalista."
    },
    {
      "id": "g-m5-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä yhdistävät oikein artikkelin analyysikehikon käsitteet ja niiden ominaisuudet? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Taitojen ja kompetenssien tulkintakehykseen liittyvät esimerkiksi tiedon etsiminen, arviointi ja tehokas käyttäminen."
        },
        {
          "id": "b",
          "text": "Tietokäsitysten tulkintakehys korostaa ensisijaisesti kansalaisten yhteiskunnallista vaikuttamista, demokratiaa ja valtasuhteita."
        },
        {
          "id": "c",
          "text": "Oppimisen tapojen tulkintakehykseen kuuluvat esimerkiksi oppimaan oppiminen, itsenäinen oppiminen ja elinikäinen oppiminen."
        },
        {
          "id": "d",
          "text": "Yhteiskunnallisten vaikutusten ja kansalaistoimijuuden tulkintakehys keskittyy ensisijaisesti teknisiin tiedonhallintaprosesseihin ja työelämän innovaatioihin."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "76"
      },
      "explanation": "A ja C vastaavat taulukon tulkintakehyksiä. B liittää yhteiskunnallisten vaikutusten ja kansalaistoimijuuden ominaisuuksia tietokäsityksiin. D puolestaan yhdistää tiedon käyttämisen tapoihin liittyviä ominaisuuksia väärään tulkintakehykseen.\n\nLähde:\nS. 76, taulukko 2 \"Aineiston analyysikehikko\".\nTaulukossa taitojen ja kompetenssien yhteydessä mainitaan tiedon paikantaminen, arviointi ja käyttäminen. Oppimisen tapojen yhteydessä käsitellään metakognitiivisia taitoja ja elinikäistä oppimista.",
      "learningPoint": "Opiskelijan tulee yhdistää taulukon käsitteet niitä vastaaviin sisällöllisiin elementteihin. Väärät vaihtoehdot käyttävät artikkelin omia ominaisuuksia mutta sijoittavat ne väärään luokkaan.\nHakuvinkki: Ctrl+F: Taulukko 2 ja vertaa tulkintakehyksiä niiden sisällöllisiin elementteihin."
    },
    {
      "id": "g-m5-q5",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Kyllä vai ei?\nVoidaanko artikkelin tutkimusaineiston perusteella päätellä, että kaikki suomalaiset politiikka-asiakirjat vuosilta 2010–2021 käsittelivät informaatiolukutaitoa eksplisiittisesti ja että tutkimuksen 26 dokumenttia edustavat kaikkia kyseisen ajanjakson politiikka-asiakirjoja?",
      "options": [
        {
          "id": "a",
          "text": "Kyllä"
        },
        {
          "id": "b",
          "text": "Ei"
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "73–75 ja 77"
      },
      "explanation": "Tutkimusaineisto muodostettiin valikoimalla tutkimuksen kannalta olennaisia asiakirjoja, eikä se kata kaikkia kyseisen ajanjakson politiikkadokumentteja. Lisäksi vain kymmenessä lopullisen aineiston dokumentissa käytettiin eksplisiittisesti informaatiolukutaitoon liittyvää käsitettä.\n\nLähde:\nS. 73–75 ja 77, \"Menetelmät ja aineisto\" sekä \"Kehysanalyysin tulokset\". Sivulla 77 todetaan: \"Tutkimusaineiston 26 politiikkadokumentista vain kymmenessä käytetään eksplisiittisesti jotakin informaatiolukutaitoon liittyvää käsitettä.\"",
      "learningPoint": "Opiskelijan tulee erottaa valikoitu tutkimusaineisto laajemmasta asiakirjajoukosta ja tunnistaa, mitä eksplisiittinen käsitteen käyttö tarkoittaa.\nHakuvinkki: Ctrl+F: vain kymmenessä ja 26 politiikkadokumentista."
    },
    {
      "id": "g-m5-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tutkimusaineiston muodostamista ja analyysiprosessia?",
      "options": [
        {
          "id": "a",
          "text": "Tutkimusaineisto koostui 38 dokumentista, jotka valittiin suoraan analyysiin ilman esikarsintaa, ja analyysissa muodostettiin 26 koodia."
        },
        {
          "id": "b",
          "text": "Tutkimusaineisto koostui 26 dokumentista, joista muodostettiin ensin 932 erillistä koodia ja myöhemmin 52 yksittäistä koodausta."
        },
        {
          "id": "c",
          "text": "Alustavaan tarkasteluun valittiin 38 dokumenttia, joista 12 rajattiin pois. Lopullisesta 26 dokumentin aineistosta muodostettiin 52 koodia ja 932 yksittäistä koodausta."
        },
        {
          "id": "d",
          "text": "Alustavaan tarkasteluun valittiin 52 dokumenttia, joista 26 hyväksyttiin analyysiin. Näistä muodostettiin 38 koodia ja 932 yksittäistä koodausta."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "75 ja 77"
      },
      "explanation": "C yhdistää aineiston muodostamisen ja analyysin luvut oikein. A jättää aineiston karsinnan huomioimatta. B vaihtaa koodien ja yksittäisten koodausten määrät keskenään. D käyttää aineiston oikeita lukuja mutta sijoittaa ne vääriin vaiheisiin.\n\nLähde:\nS. 75 ja 77, taulukko 1 sekä \"Analyysiprosessi\". Sivulla 75 todetaan: \"Lopullinen tutkimusaineisto koostui 26 politiikkadokumentista\". Sivulla 77 ilmoitetaan 52 koodia ja 932 yksittäistä koodausta.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan alustava aineisto, lopullinen aineisto, koodien määrä ja yksittäisten koodausten määrä.\nHakuvinkki: Ctrl+F: 38 dokumenttia ja 932 kappaletta."
    },
    {
      "id": "g-m5-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tiedonlukutaidon jatkuvan oppimisen ja kilpailukyvyn kehysten tavoitteita? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Jatkuvan oppimisen kehyksessä tiedonlukutaidon edistäminen nähdään keinona vahvistaa yksilön osaamista ja mahdollisuuksia kouluttautua muuttuvassa yhteiskunnassa."
        },
        {
          "id": "b",
          "text": "Kilpailukyvyn kehyksessä tiedonlukutaidon ensisijaisena tavoitteena on vahvistaa kansalaisten yhteiskunnallista vaikuttamista riippumatta teknologisista ja taloudellisista tavoitteista."
        },
        {
          "id": "c",
          "text": "Kilpailukyvyn kehyksessä teknologisen osaamisen ja tiedon hyödyntämisen katsotaan tukevan innovaatioita, tuottavuutta ja kansallista kilpailukykyä."
        },
        {
          "id": "d",
          "text": "Jatkuvan oppimisen kehyksessä yksilön osaamisen päivittämisen tarve poistuu, kun julkinen hallinto huolehtii tietosisältöjen saatavuudesta."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "79–80"
      },
      "explanation": "A yhdistää jatkuvan oppimisen kehyksen yksilön osaamisen vahvistamiseen ja kouluttautumiseen. C kuvaa kilpailukyvyn kehyksen taloudellista ja teknologista perustelua.\nB on väärin, sillä kilpailukyvyn kehyksessä korostuvat nimenomaan teknologiset ja taloudelliset tavoitteet. D on väärin, koska tietosisältöjen saatavuus ei poista yksilön tarvetta kehittää osaamistaan.\n\nLähde:\nS. 79–80, \"Tiedonlukutaito jatkuvana oppimisena\" ja \"Tiedonlukutaito kilpailukykynä\". Sivulla 79 todetaan jatkuvan oppimisen mahdollistavan ja motivoivan uuden osaamisen hankkimiseen. Sivulla 80 kilpailukyvyn tavoitteeksi kuvataan \"Suomen kilpailukyvyn tukeminen\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, millä keinoilla eri kehyksissä pyritään saavuttamaan toimintapoliittisia tavoitteita. On erotettava toisistaan osaamisen kehittämisen välineet ja niiden tavoitellut vaikutukset.\nHakuvinkki: Ctrl+F: mahdollistaa ja motivoi sekä kilpailukyvyn tukeminen."
    },
    {
      "id": "g-m5-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nArtikkelissa digitaalinen lukutaito yhdistetään yksilön teknologiseen osaamiseen ja digiosallisuuden mahdollistamiseen. Tästä voidaan päätellä, että digitaalisten taitojen hallitseminen yksinään riittää takaamaan kansalaisen aktiivisen osallistumisen digitaaliseen yhteiskuntaan.",
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "78 ja 80–81"
      },
      "explanation": "Väittämän ensimmäinen osa vastaa artikkelia. Digitaalinen lukutaito kytkeytyy teknologiseen osaamiseen ja mahdollisuuteen hyödyntää digitaalisia palveluja.\nJälkimmäinen osa on kuitenkin väärin, koska artikkelissa digiosallisuus edellyttää osaamisen lisäksi aktiivista toimijuutta ja motivaatiota. Teknologinen osaaminen ei siis yksin takaa osallistumista.\n\nLähde:\nS. 78 ja 80–81, erityisesti \"Toimijuuden ja osallisuuden näkökulma kilpailukyvyn kehyksessä\". Sivulla 81 todetaan digikansalaisuuden ja -osallisuuden edellyttävän yksilöltä \"digiosaamista ja -tietotaitoja mutta myös aktiivista toimijuutta ja motivaatiota käyttää teknologiaa\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin jokin tekijä esitetään osallisuuden edellytyksenä mutta ei yksin riittävänä ehtona. Erityisesti on tarkistettava ilmaukset \"yksinään\" ja \"riittää\".\nHakuvinkki: Ctrl+F: aktiivista toimijuutta ja motivaatiota."
    },
    {
      "id": "g-m5-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 4,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tutkimuksessa käytetyn kehysanalyysin ja politiikkadokumenttien välistä suhdetta?",
      "options": [
        {
          "id": "a",
          "text": "Kehysanalyysissa ensin määritellään poliittisesti tavoiteltava ratkaisu, jonka perusteella politiikkadokumenteille annetaan niiden yhteiskunnalliset merkitykset."
        },
        {
          "id": "b",
          "text": "Kehysanalyysin tarkoituksena on arvioida ensisijaisesti sitä, ovatko politiikkadokumenttien sisältämät väitteet objektiivisesti tosia vai epätosia."
        },
        {
          "id": "c",
          "text": "Kehysanalyysissa politiikkadokumentteja tarkastellaan ensisijaisesti yksittäisinä julkaisuina, jotta niiden väliset määrälliset erot voidaan asettaa paremmuusjärjestykseen."
        },
        {
          "id": "d",
          "text": "Kehysanalyysilla tunnistetaan politiikkadokumenteissa informaatiolukutaidolle annettuja merkityksiä ja tavoitteita, joiden avulla voidaan hahmottaa ilmiön poliittista ongelmanmäärittelyä."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "74–75"
      },
      "explanation": "D vastaa tutkimuksen menetelmällistä lähtökohtaa. Tutkijat analysoivat dokumenteissa esiintyviä merkityksiä, perusteluja ja tavoitteita ymmärtääkseen informaatiolukutaidon poliittista kehystämistä.\nA vaihtaa analyysin suunnan: tutkijat eivät ensin määrittele tavoiteltavaa poliittista ratkaisua ja sen jälkeen anna dokumenteille merkityksiä.\nB on väärin, koska tutkimuksen ensisijaisena tarkoituksena ei ole väitteiden totuusarvon arvioiminen.\nC on väärin, sillä aineistoa tarkasteltiin yksittäisten dokumenttien erojen sijaan kokonaisuutena.\n\nLähde:\nS. 74–75, \"Kehysanalyysi\" ja \"Analyysiprosessi\". Sivulla 74 kehysanalyysin tavoitteeksi kuvataan selvittää, \"miten informaatiolukutaito puetaan sanoiksi ja tavoitteiksi suomalaisessa politiikassa\".",
      "learningPoint": "Opiskelijan tulee ymmärtää, mikä on analyysimenetelmän tehtävä suhteessa tutkimusaineistoon. Väärässä vaihtoehdossa voidaan kääntää analyysin ja sen kohteen välinen suhde päinvastaiseksi.\nHakuvinkki: Ctrl+F: teoreettismetodologisena ja kokonaisuutena."
    },
    {
      "id": "g-m5-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan tiedonlukutaidon kansalaistaitojen kehys rakentuu yksinomaan kansalaisten yhteiskunnallisen osallistumisen ympärille, eikä siinä käsitellä teknologisia taitoja, tietoturvallisuutta tai digitaalisessa ympäristössä toimimista.",
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "79 ja 81–82"
      },
      "explanation": "Kansalaistaitojen kehyksessä korostuvat aktiivinen kansalaisuus, demokraattinen osallistuminen ja tiedolliset oikeudet, mutta siihen sisältyvät myös teknologiset ja digitaaliset ulottuvuudet.\nEsimerkiksi medialukutaito, verkkolukutaito, tietoturvallisuus ja informaatiovaikuttamiselta suojautuminen liittyvät kansalaistaitoihin. Väittämä on väärin, koska se rajaa nämä ulottuvuudet kokonaan pois.\n\nLähde:\nS. 79 ja 81–82, \"Tiedonlukutaito kansalaistaitoina\" sekä kuvio 2. Sivulla 81 kansalaistaitojen kehyksessä käsitellään myös \"yksityisyyden suojasta ja disinformaatiosta\" syntyviä huolia.",
      "learningPoint": "Opiskelijan tulee erottaa kehyksen keskeinen painotus sen koko sisällöstä. Se, että jokin tavoite korostuu, ei tarkoita muiden tavoitteiden puuttumista.\nHakuvinkki: Ctrl+F: Tiedonlukutaito kansalaistaitoina ja tietoturvallisuus."
    },
    {
      "id": "g-m5-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä voidaan tehdä artikkelin taulukon 1 ja analyysiprosessin kuvauksen perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hallinnon strategioita oli sekä alkuperäisessä haussa että lopullisessa aineistossa enemmän kuin hankedokumentteja."
        },
        {
          "id": "b",
          "text": "Kaikki alkuperäisessä haussa mukana olleet hallitusohjelmat ja lait säilyivät lopullisessa tutkimusaineistossa."
        },
        {
          "id": "c",
          "text": "Koska hankedokumentteja poistettiin analyysista kuusi, myös lopullisen aineiston hallinnon strategioita oli kuusi."
        },
        {
          "id": "d",
          "text": "Lopulliseen aineistoon hyväksyttiin enemmän hankedokumentteja kuin hallitusohjelmia ja lakeja yhteensä."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "75"
      },
      "explanation": "A on oikein, sillä hallinnon strategioita oli molemmissa vaiheissa enemmän kuin hankedokumentteja. B on oikein, koska kaikki kolme hallitusohjelmaa ja neljä lakia säilyivät aineistossa.\nC on väärin, sillä lopullisessa aineistossa hallinnon strategioita oli 13, vaikka niitä poistettiin kuusi. D on väärin, koska hankedokumentteja oli kuusi, kun taas hallitusohjelmia ja lakeja oli yhteensä seitsemän.\n\nLähde:\nS. 75, taulukko 1 \"Tutkimusaineisto\".\nDokumenttityyppi\nAlkuperäinen haku\nLopullinen aineisto\nHallitusohjelmat\n3\n3\nHallinnon strategiat\n19\n13\nHankedokumentit\n12\n6\nLait\n4\n4\nYhteensä\n38\n26",
      "learningPoint": "Opiskelijan tulee tulkita määrällistä aineistoa ja erottaa toisistaan kaikki, osa ja enemmän kuin -tyyppiset väitteet. Tehtävässä pitää tarkistaa myös kahden dokumenttiryhmän yhteenlaskettu määrä.\nHakuvinkki: Ctrl+F: Taulukko 1 ja vertaa sarakkeita \"Analyysiin valitut\" ja \"Alkuperäinen haku\"."
    },
    {
      "id": "g-m5-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyä eri hallinnonalojen roolia tiedonlukutaidon edistämisessä?",
      "options": [
        {
          "id": "a",
          "text": "Opetus- ja kulttuuriministeriön aihepiiriin tiedonlukutaito liittyy erityisesti jatkuvan oppimisen, mediakasvatuksen ja medialukutaitopolitiikan kautta."
        },
        {
          "id": "b",
          "text": "Oikeusministeriön rooliin kuuluu kansalaisten osallisuus- ja vaikuttamismahdollisuuksien tukeminen osana demokratiakasvatusta."
        },
        {
          "id": "c",
          "text": "Sisäministeriön ja valtioneuvoston toimintaan tiedonlukutaidot liittyvät muun muassa radikalisoitumisen ja haitallisen informaation leviämisen ehkäisemisen kautta."
        },
        {
          "id": "d",
          "text": "Liikenne- ja viestintäministeriön keskeisenä tehtävänä kuvataan potilaiden hoitopäätöksiin liittyvän terveystiedon lukutaidon kehittäminen osana sosiaali- ja terveydenhuoltoa."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "78"
      },
      "explanation": "D on virheellinen, sillä potilaiden terveystiedon hyödyntäminen liittyy artikkelissa hyvinvointi- ja terveyspolitiikkaan, ei liikenne- ja viestintäministeriön kuvattuun rooliin.\nA, B ja C vastaavat artikkelissa esitettyä hallinnonalojen työnjakoa. Liikenne- ja viestintäministeriö puolestaan edistää tiedonlukutaitoa esimerkiksi mediakasvatukseen liittyvien strategioiden kautta.\n\nLähde:\nS. 78, \"Informaatiolukutaidon moninaiset muodot ja toimintapolitiikat\". Sivulla 78 liikenne- ja viestintäministeriön rooli yhdistetään \"älystrategiatyöhön\" ja \"tietoyhteiskuntaohjelmaan\".",
      "learningPoint": "Opiskelijan tulee yhdistää oikea toimintapoliittinen tavoite sitä käsittelevään hallinnonalaan. Väärä vaihtoehto sisältää artikkelissa esiintyvän tavoitteen, mutta liittää sen väärään toimijaan.\nHakuvinkki: Ctrl+F: Liikenne- ja viestintäministeriön ja terveydenlukutaito."
    },
    {
      "id": "g-m5-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Kyllä vai ei?\nVoidaanko artikkelin perusteella katsoa, että sama tiedonlukutaitoon liittyvä taito voi palvella useita erilaisia toimintapoliittisia tavoitteita riippuen siitä, missä kehyksessä ja poliittisessa yhteydessä sitä tarkastellaan?",
      "options": [
        {
          "id": "a",
          "text": "Kyllä"
        },
        {
          "id": "b",
          "text": "Ei"
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "82–83"
      },
      "explanation": "Tutkimuksessa tunnistetut kehykset ovat osittain limittäisiä. Esimerkiksi digitaalisia taitoja voidaan edistää yksilön oppimisen, kansallisen kilpailukyvyn tai yhteiskunnallisen osallistumisen näkökulmasta.\nSama taito voi siis saada erilaisia poliittisia merkityksiä ilman, että itse taito muuttuu kokonaan toiseksi.\n\nLähde:\nS. 82–83, \"Päätelmät\". Sivulla 83 todetaan, että \"digi- ja medialukutaitoja edistetään niin kansalaistaitojen, tietotaitojen kuin pedagogisten monilukutaitojen konteksteissa\".",
      "learningPoint": "Opiskelijan tulee yhdistää kehysten limittäisyyttä koskeva havainto siihen, että samaa taitoa voidaan perustella eri tavoitteilla.\nHakuvinkki: Ctrl+F: limittäisiä ja digi- ja medialukutaitoja."
    },
    {
      "id": "g-m5-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin tutkimuksen aineiston ja siitä tehtyjen johtopäätösten välistä suhdetta?",
      "options": [
        {
          "id": "a",
          "text": "Koska tutkimuksessa analysoitiin kansallisia politiikkadokumentteja, sen tulokset osoittavat suoraan, millaiset tiedonlukutaidot suomalaisilla kansalaisilla tosiasiassa ovat."
        },
        {
          "id": "b",
          "text": "Koska tutkimuksessa tarkasteltiin vuosina 2010–2021 julkaistuja dokumentteja, sen perusteella voidaan arvioida kaikkien kyseisen ajanjakson lukutaitohankkeiden vaikuttavuutta."
        },
        {
          "id": "c",
          "text": "Tutkimus kuvaa informaatiolukutaidon kehystämistä valituissa politiikka-asiakirjoissa ja mahdollistaa niiden poliittisten tavoitteiden tarkastelun, mutta ei suoraan mittaa kansalaisten taitotasoa tai politiikkatoimien vaikuttavuutta."
        },
        {
          "id": "d",
          "text": "Tutkimus osoittaa, että kaikki suomalaiset ministeriöt ovat käyttäneet samoja informaatiolukutaidon määritelmiä, vaikka niiden toimintapoliittiset tavoitteet ovat poikenneet toisistaan."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "71, 73–75 ja 82–84"
      },
      "explanation": "C erottaa tutkimuksen todellisen kohteen sellaisista asioista, joita tutkimuksessa ei mitattu.\nA on väärin, koska dokumenttien tavoitteista ei voida suoraan päätellä kansalaisten todellista osaamistasoa.\nB on väärin, koska tutkimus ei ole hankkeiden vaikuttavuusarviointi.\nD on väärin, koska tutkimuksen keskeinen havainto on juuri käsitteiden ja kehystämisen tapojen moninaisuus.\n\nLähde:\nS. 71, 73–75 ja 82–84. Sivulla 71 tutkimuksen kohteeksi määritellään informaatiolukutaidon käsitteellistyminen politiikka-asiakirjoissa. Sivulla 75 kuvataan valikoitu dokumenttiaineisto ja sen teoriaohjaava analyysi.",
      "learningPoint": "Opiskelijan tulee tunnistaa tutkimusasetelman rajat. Politiikkadokumenttien analyysi kertoo siitä, miten ilmiö esitetään ja perustellaan, mutta ei välttämättä siitä, miten tavoitteet toteutuvat käytännössä.\nHakuvinkki: Ctrl+F: politiikkadokumenteissa ja teoriaohjaava."
    },
    {
      "id": "g-m5-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin taulukossa 1 ja analyysiprosessin kuvauksessa esitettyjä tietoja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hallinnon strategioita ja hankedokumentteja poistettiin alkuperäisestä aineistosta yhtä monta, vaikka lopulliseen aineistoon hyväksyttiin niitä eri määrät."
        },
        {
          "id": "b",
          "text": "Lopullisen tutkimusaineiston 26 dokumentista täsmälleen puolet oli hallinnon strategioita."
        },
        {
          "id": "c",
          "text": "Tutkimuksessa muodostettujen yksittäisten koodausten määrä oli yli 18-kertainen muodostettujen koodien määrään verrattuna."
        },
        {
          "id": "d",
          "text": "Hallitusohjelmia ja lakeja oli lopullisessa aineistossa yhteensä enemmän kuin hankedokumentteja ja hallinnon strategioita yhteensä."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "75"
      },
      "explanation": "A on oikein, sillä molemmista dokumenttiryhmistä poistettiin kuusi asiakirjaa (19 − 13 = 6 ja 12 − 6 = 6).\nB on oikein, sillä 13/26 = 50 % eli täsmälleen puolet lopullisesta aineistosta oli hallinnon strategioita.\nC on väärin, sillä 932/52 ≈ 17,92. Koodauksia oli siis alle 18-kertainen määrä koodeihin nähden.\nD on väärin, sillä hallitusohjelmia ja lakeja oli yhteensä seitsemän, kun taas hankedokumentteja ja hallinnon strategioita oli yhteensä 19.\n\nLähde:\nS. 75, taulukko 1, sekä s. 77, \"Analyysiprosessi\".\nTaulukon 1 mukaan alkuperäisessä aineistossa oli 19 hallinnon strategiaa ja 12 hankedokumenttia. Lopulliseen aineistoon valittiin 13 hallinnon strategiaa ja kuusi hankedokumenttia. Sivulla 77 ilmoitetaan 52 koodia ja 932 yksittäistä koodausta.",
      "learningPoint": "Opiskelijan tulee yhdistää taulukon ja tekstin lukumääriä sekä tehdä pieniä laskutoimituksia. Erityisesti on tarkistettava, miten ilmaukset \"täsmälleen\", \"yli\" ja \"enemmän kuin\" vaikuttavat väitteen oikeellisuuteen.\nHakuvinkki: Ctrl+F: Taulukko 1 ja 932 kappaletta."
    },
    {
      "id": "g-m5-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nTutkimuksen mukaan informaatiolukutaidon edistämisen hajautuminen eri hallinnonaloille ja erillisiin hankkeisiin vaikeuttaa yhtenäisen toimintapolitiikan muodostamista. Vaikka informaatiolukutaito on tunnistettu yhteiskunnallisesti tärkeäksi tavoitteeksi, tutkijat katsovat, että sen kehittämisessä tarvitaan sekä yhteistä poliittisen ongelman määrittelyä että hallinnonalojen välistä yhteistyötä.",
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "84–85"
      },
      "explanation": "Väittämä yhdistää kolme artikkelissa esitettyä havaintoa.\nEnsinnäkin informaatiolukutaidon edistäminen on hajautunut useille hallinnonaloille ja erillisiin hankkeisiin, mikä vaikeuttaa tavoitteiden koordinointia.\nToiseksi informaatiolukutaidon yhteiskunnallisesta merkityksestä puuttuu yhteinen poliittisen ongelman määrittely.\nKolmanneksi tutkijat ehdottavat ratkaisuksi yhtenäisempää, hallinnonaloja yhdistävää toimintapolitiikkaa.\nVäittämä olisi väärin, jos tutkijat katsoisivat nykyisen hajautuneen toimintamallin jo takaavan riittävän koordinoinnin tai pitäisivät informaatiolukutaitoa vain yhden ministeriön vastuulle kuuluvana kysymyksenä.\n\nLähde:\nS. 84–85, \"Informaatiolukutaidon toimintapolitiikan tavoitteet poliittis-hallinnollisesta näkökulmasta\".\nSivulla 84 todetaan: \"Suomalaisesta informaatiolukutaidon politiikasta puuttuu julkinen keskustelu siitä, mikä tekee informaatiolukutaidosta yhteiskunnallisesti relevantin ilmiön tai poliittisen ongelman.\"\nSivulla 85 puolestaan todetaan: \"Informaatiolukutaidon edistämiseksi tarvitaan yhtenäistä ja horisontaalista toimintapolitiikkaa\".",
      "learningPoint": "Opiskelijan tulee yhdistää ongelman taustatekijät, niiden seuraukset ja tutkijoiden esittämät ratkaisuehdotukset. Erityisesti on erotettava toisistaan havaittu nykytila ja tavoiteltu muutos.\nHakuvinkki: Ctrl+F: poliittisen ongelman ja horisontaalista toimintapolitiikkaa."
    },
    {
      "id": "g-m5-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein tutkimuksen kolme toimintapoliittista kehystä, niiden painotukset ja toimijuuden näkökulmat?",
      "options": [
        {
          "id": "a",
          "text": "Jatkuvan oppimisen kehyksessä korostuvat kansalaisten kollektiivinen päätöksenteko ja hallinnon dialogisuus, kun taas kansalaistaitojen kehyksessä osallistuminen nähdään ensisijaisesti yksilön osaamisen päivittämisenä."
        },
        {
          "id": "b",
          "text": "Kilpailukyvyn kehyksessä tiedonlukutaito nähdään ennen kaikkea kansalaisten tiedollisena oikeutena, kun taas kansalaistaitojen kehyksessä korostuvat yritysten innovaatiot ja kansantalouden tuottavuus."
        },
        {
          "id": "c",
          "text": "Jatkuvan oppimisen kehyksessä teknologinen osaaminen nähdään yksinomaan kansallisen kilpailukyvyn välineenä, kun taas kilpailukyvyn kehyksessä pääpaino on kansalaisten sivistyksellisissä oikeuksissa."
        },
        {
          "id": "d",
          "text": "Jatkuvan oppimisen kehyksessä korostuu yksilön osaamisen kehittäminen, kilpailukyvyn kehyksessä tiedon taloudellinen hyödyntäminen ja kansalaistaitojen kehyksessä yhteiskunnallinen osallistuminen sekä tiedolliset oikeudet."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "79–82"
      },
      "explanation": "D yhdistää kaikki kolme kehystä niiden keskeisiin painotuksiin.\nA vaihtaa jatkuvan oppimisen ja kansalaistaitojen toimijuuskäsityksiä. Jatkuvan oppimisen kehyksessä osallistuminen liittyy vahvasti yksilön osaamiseen ja motivaatioon, kun taas kansalaistaitojen kehyksessä korostuvat vuorovaikutus ja yhteiskunnallinen toimijuus.\nB liittää kansalaistaitojen oikeudelliset ja yhteiskunnalliset tavoitteet kilpailukykyyn sekä kilpailukyvyn taloudelliset tavoitteet kansalaistaitoihin.\nC on väärin, koska jatkuva oppiminen ei rajoitu kilpailukyvyn vahvistamiseen eikä kilpailukyvyn kehyksen ensisijainen painotus ole sivistyksellisissä oikeuksissa.\n\nLähde:\nS. 79–82, \"Tiedonlukutaidon kehystäminen suomalaisissa politiikkadokumenteissa\", sekä kuvio 2 sivulla 82.\nSivulla 79 jatkuvan oppimisen ja kilpailukyvyn kehysten todetaan olevan lähellä toisiaan, kun taas kansalaistaitojen kehyksessä korostuu aktiivinen kansalaisuus.",
      "learningPoint": "Opiskelijan tulee verrata kolmea toisiinsa osittain limittyvää kehystä. Väärissä vaihtoehdoissa käytetään artikkelin oikeita ominaisuuksia, mutta ne liitetään väärään kehykseen.\nHakuvinkki: Ctrl+F: Ensimmäiseksi aineistosta tunnistettiin ja tarkista kuvio 2 sivulta 82."
    },
    {
      "id": "g-m5-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Oikein vai väärin?\nTutkijoiden mukaan digitalisaation korostuminen politiikkadokumenteissa voi kaventaa informaatiolukutaidon käsitettä teknologisiksi taidoiksi ja jättää laaja-alaiset kansalaistaidot taka-alalle. Tämä kehityssuunta on kuitenkin tutkimuksen perusteella jo toteutunut kaikissa kolmessa toimintapoliittisessa kehyksessä, minkä vuoksi demokratiakasvatuksen näkökulma ei enää sisälly informaatiolukutaidon kansalliseen toimintapolitiikkaan.",
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "79–83"
      },
      "explanation": "Väittämän ensimmäinen osa vastaa tutkijoiden johtopäätöstä. Digitalisaation voimakas korostuminen voi kaventaa informaatiolukutaidon tulkintaa ja jättää muita kansalaistaitoja taka-alalle.\nJälkimmäinen osa on kuitenkin väärin kahdesta syystä.\nEnsinnäkin tutkijat esittävät kaventumisen mahdollisena riskinä, eivät kaikissa kehyksissä jo toteutuneena kehityksenä.\nToiseksi demokratiakasvatus ei ole kadonnut kansallisesta toimintapolitiikasta. Se on keskeinen osa tutkimuksessa tunnistettua kansalaistaitojen kehystä.\n\nLähde:\nS. 79–83, erityisesti \"Tiedonlukutaidon kehystäminen suomalaisissa politiikkadokumenteissa\" ja \"Päätelmät\".\nSivulla 83 todetaan: \"riskinä voi olla, että informaatiolukutaito typistyykin digilukutaidoksi ja demokratiakasvatuksen näkökulma laaja-alaisista kansalaistaidoista jää taustalle.\"\nSivulla 79 puolestaan tunnistetaan kansalaistaitojen kehys, jossa korostuvat aktiivinen kansalaisuus, kriittinen tiedonlukutaito ja demokratiakasvatus.",
      "learningPoint": "Opiskelijan tulee tarkistaa, onko tutkimuksessa kuvattu ilmiö mahdollinen riski vai jo toteutunut kehitys. Lisäksi tulee vertailla johtopäätöstä tutkimuksen tuloksiin ja tunnistaa perusteettomat yleistykset kaikkiin kehyksiin.\nHakuvinkki: Ctrl+F: riskinä voi olla ja kansalaistaitojen kehyksessä."
    },
    {
      "id": "g-m5-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin taulukon 1 ja taulukon 2 perusteella tehtäviä vertailuja?",
      "options": [
        {
          "id": "a",
          "text": "Lopullisessa tutkimusaineistossa hallinnon strategioita oli enemmän kuin hallitusohjelmia ja lakeja yhteensä."
        },
        {
          "id": "b",
          "text": "Alkuperäisessä haussa hankedokumentteja oli enemmän kuin hallitusohjelmia ja lakeja yhteensä."
        },
        {
          "id": "c",
          "text": "Taulukon 2 analyysikehikossa elinikäiseen oppimiseen liittyviä tulkintakehyksiä oli vähemmän kuin kansalaisosallistumiseen liittyviä tulkintakehyksiä."
        },
        {
          "id": "d",
          "text": "Taulukon 2 analyysikehikossa tietoperusteiseen päätöksentekoon, tiedonhallintaan ja tietoyhteiskuntaan liittyviä tulkintakehyksiä oli yhtä monta kuin elinikäiseen oppimiseen liittyviä tulkintakehyksiä."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "75–76"
      },
      "explanation": "A on oikein, sillä 13 hallinnon strategiaa on enemmän kuin kolme hallitusohjelmaa ja neljä lakia yhteensä (7).\nB on oikein, sillä alkuperäisen haun 12 hankedokumenttia on enemmän kuin hallitusohjelmat ja lait yhteensä (3 + 4 = 7).\nC on väärin, koska elinikäiseen oppimiseen liittyy kaksi tulkintakehystä ja kansalaisosallistumiseen samoin kaksi. Niitä on siis yhtä monta.\nD on oikein, koska myös tietoperusteiseen päätöksentekoon liittyy kaksi tulkintakehystä, kuten elinikäiseen oppimiseen.\n\nLähde:\nS. 75–76, taulukot 1 ja 2.\nTaulukossa 1 hallinnon strategioita on lopullisessa aineistossa 13, hallitusohjelmia kolme ja lakeja neljä. Alkuperäisessä haussa hankedokumentteja on 12.\nTaulukossa 2 kaikki kolme politiikan aihepiiriä sisältävät kaksi tulkintakehystä.",
      "learningPoint": "Opiskelijan tulee vertailla kahden taulukon luokkia ja määriä. Tehtävässä on huomattava, milloin väitetään jonkin määrän olevan suurempi, pienempi tai yhtä suuri.\nHakuvinkki: Ctrl+F: Taulukko 1 ja Taulukko 2. Laske tarvittaessa yhteen saman politiikan aihepiirin tulkintakehykset."
    },
    {
      "id": "g-m5-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Korkin ja Turjan tutkimuksen havaintojen ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Koska informaatiolukutaitoa edistetään useilla hallinnonaloilla, sen kehittämistä ei voida pitää yksinomaan koulutus- tai työvoimapoliittisena kysymyksenä."
        },
        {
          "id": "b",
          "text": "Koska jatkuvan oppimisen ja kilpailukyvyn kehykset korostavat yksilöllisiä taitoja, kansalaistaitojen kehyksessä yksilön osaamisella ei ole merkitystä yhteiskunnalliselle osallistumiselle."
        },
        {
          "id": "c",
          "text": "Vaikka informaatiolukutaidon edistäminen tunnistetaan politiikkadokumenteissa tärkeäksi tavoitteeksi, sen käytännön toteuttamisen keinoja ja sosiaalisia tietokäytäntöjä ei aina käsitellä riittävästi."
        },
        {
          "id": "d",
          "text": "Koska tutkimuksessa tunnistettiin kolme toimintapoliittista kehystä, jokainen politiikkadokumentti kuuluu yksiselitteisesti vain yhteen niistä eikä kehysten välillä esiinny päällekkäisyyttä."
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
        "articleId": "informaatiolukutaidon-toimintapoliittiset-kehykset",
        "page": "82–85"
      },
      "explanation": "A on oikein. Tutkimuksessa informaatiolukutaito liittyy koulutuksen ja työvoiman lisäksi esimerkiksi demokratiaan, turvallisuuteen, hyvinvointiin, tiedonhallintaan ja julkisen hallinnon kehittämiseen. Siksi sitä ei voida rajata vain yhdelle tai kahdelle politiikan alueelle.\nB on väärin. Kansalaistaitojen kehyksessäkin tarvitaan yksilöllisiä tiedonlukutaitoja, kuten kriittistä tiedonhankintaa ja arviointia. Kehyksen erityispiirre on, että taidot yhdistetään yhteiskunnalliseen toimijuuteen, vuorovaikutukseen ja osallistumiseen.\nC on oikein. Tutkijoiden mukaan informaatiolukutaidon edistämistä pidetään tärkeänä, mutta dokumenteissa jää usein epäselväksi, miten taitoja käytännössä kehitetään yksilöiden ja yhteisöjen toiminnassa. Arkielämän tietokäytännöt jäävät osittain näkymättömiin.\nD on väärin. Tutkimuksessa kehykset ovat osittain limittäisiä ja samoja taitoja voidaan edistää useissa eri kehyksissä. Kolmen kehyksen tunnistaminen ei tarkoita, että jokainen dokumentti tai taito kuuluisi yksinomaan yhteen kehykseen.\n\nLähde:\nS. 82–85, päätelmät. Sivulla 84 todetaan, ettei informaatiolukutaidon edistäminen ole \"vain koulutus- tai työvoimapoliittinen tavoite\". Samalla sivulla käsitellään käytännön keinojen ja sosiaalisten tietokäytäntöjen puutteellista huomioimista.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan ilmaukset \"vain\", \"osa\", \"ei aina\" ja \"kaikki\". Tehtävässä harjoitellaan myös sitä, ettei tutkimuksen painotuksista saa tehdä perusteettomia poissulkevia johtopäätöksiä."
    }
  ]
} satisfies ValintakoeGExercise;
