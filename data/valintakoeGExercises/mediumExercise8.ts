import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 8: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise8Base = {
  "id": "keskivaikea-harjoitus-8",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 8 – Asukkaiden kokemukset asuinalueiden sosiaalisesta sekoittamisesta ja moninaistamisesta: etääntymistä ja lähentymistä",
  "description": "30 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 30,
  "difficulty": "medium",
  "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
  "articleTitle": "Asukkaiden kokemukset asuinalueiden sosiaalisesta sekoittamisesta ja moninaistamisesta: etääntymistä ja lähentymistä",
  "articleUrl": "https://journal.fi/janus/article/view/162388/106811",
  "questions": [
    {
      "id": "g-m8-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nSosiaalisen sekoittamisen tavoitteena on monipuolistaa asuinalueiden asunto- ja asukasrakennetta sekä lisätä erilaisten asukasryhmien vuorovaikutusta. Artikkelin mukaan näiden tavoitteiden toteutuminen ei kuitenkaan seuraa automaattisesti siitä, että erilaiset asukasryhmät asuvat fyysisesti lähellä toisiaan.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "257–258"
      },
      "explanation": "Sosiaalisella sekoittamisella pyritään tuomaan eri sosioekonomisiin ryhmiin kuuluvia asukkaita samoille alueille ja lisäämään heidän keskinäistä ymmärrystään. Artikkelissa kuitenkin korostetaan, että fyysinen läheisyys voi myös lisätä ryhmien välisiä eroja. Väittämä yhdistää politiikan tavoitteen ja sen mahdolliset tavoitteenvastaiset seuraukset.\n\nLähde:\nS. 257–258, tiivistelmä ja johdanto. Sivulla 258 todetaan: \"tilallinen läheisyys voi synnyttää epäviihtyvyyttä ja muuttoliikettä\".",
      "learningPoint": "Opiskelijan tulee erottaa politiikan tavoitteet sen toteutuneista tai mahdollisista vaikutuksista. Tavoiteltu vuorovaikutus ei tarkoita automaattisesti syntyvää läheisyyttä.\nHakuvinkki: Ctrl+F: tilallinen läheisyys ja vuorovaikutuksen lisääntymistä."
    },
    {
      "id": "g-m8-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein sosiaalisen sekoittamisen historialliset kehitysvaiheet ja niiden tavoitteet?",
      "options": [
        {
          "id": "a",
          "text": "Sosiaalinen sekoittaminen syntyi maailmansotien jälkeen ensisijaisesti keskiluokan asumisen tukemiseksi, ja vasta 2000-luvulla sen tavoitteeksi tuli eri yhteiskuntaluokkien kohtaaminen."
        },
        {
          "id": "b",
          "text": "Sosiaalisen sekoittamisen alkuperäinen tavoite oli estää maahanmuuttajaväestön keskittymistä, kun taas maailmansotien jälkeen se muuttui kaupunkikuvallisen moninaisuuden tavoitteluksi."
        },
        {
          "id": "c",
          "text": "Sosiaalisen sekoittamisen varhaisissa tavoitteissa korostui eri yhteiskuntaluokkien kohtaaminen ja keskinäinen ymmärrys, kun taas maailmansotien jälkeen se vahvistui segregaation hallintakeinona."
        },
        {
          "id": "d",
          "text": "Sosiaalinen sekoittaminen kehittyi Suomessa 1960-luvulla ennen kuin sitä alettiin soveltaa Iso-Britannian ja Yhdysvaltojen teollisuuskaupungeissa."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "258–259",
        "section": "Sosiaalinen sekoittaminen kaupunkisuunnittelussa"
      },
      "explanation": "C yhdistää kaksi historiallista vaihetta oikein. Varhaisessa ajattelussa korostuivat yhteiskuntaluokkien kohtaaminen, ymmärrys ja sosiaalinen koheesio. Maailmansotien jälkeen segregaation ja huono-osaisuuden alueellisen keskittymisen ehkäiseminen vahvistui. A ja B vaihtavat kehitysvaiheiden tavoitteita. D kääntää historiallisen järjestyksen vääräksi.\n\nLähde:\nS. 258–259, \"Sosiaalinen sekoittaminen kaupunkisuunnittelussa\". Sivulla 259 todetaan: \"Segregaation hallintakeinoksi sosiaalinen sekoittaminen muuntui selvemmin maailmansotien jälkeisenä aikana\".",
      "learningPoint": "Opiskelijan tulee yhdistää eri aikakaudet niihin liittyviin kaupunkisuunnittelun tavoitteisiin.\nHakuvinkki: Ctrl+F: 1800-luvun ja maailmansotien jälkeisenä."
    },
    {
      "id": "g-m8-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan sosiaalisen sekoittamisen vaikutuksista saatu tutkimusnäyttö on yhdenmukaista ja osoittaa politiikan parantavan asukkaiden välisiä suhteita. Tämän vuoksi politiikan toteuttaminen perustuu ensisijaisesti vahvaan tutkimukselliseen näyttöön sen myönteisistä vaikutuksista.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "258",
        "section": "Sosiaalinen sekoittaminen kaupunkisuunnittelussa"
      },
      "explanation": "Väittämä kääntää artikkelissa esitetyn tutkimustilanteen päinvastaiseksi. Tutkimustulokset ovat ristiriitaisia, ja Galsterin (2007) mukaan politiikan toteuttaminen perustuu enemmän uskoon myönteisistä vaikutuksista kuin tutkimukselliseen evidenssiin.\n\nLähde:\nS. 258, \"Sosiaalinen sekoittaminen kaupunkisuunnittelussa\". Ratkaiseva lainaus: \"tutkimustulokset sosiaalisen sekoittamisen vaikutuksista ovat ristiriitaisia\".",
      "learningPoint": "Opiskelijan tulee erottaa politiikan myönteisiä vaikutuksia koskeva oletus tutkimuksissa osoitetuista vaikutuksista.\nHakuvinkki: Ctrl+F: ristiriitaisia ja evidenssiin."
    },
    {
      "id": "g-m8-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä yhdistävät oikein artikkelin analyysissa tunnistetut teemat ja niiden sisällöt? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Moraalisina rajoina ja erontekoina näyttäytyvä moninaisuus voi kasvattaa asukasryhmien välistä etäisyyttä, vaikka ryhmät asuisivat samalla alueella."
        },
        {
          "id": "b",
          "text": "Moninaisuus stigman purkajana tarkoittaa ensisijaisesti sitä, että asuinalueiden uudistaminen johtaa alkuperäisten asukkaiden vastentahtoisiin muuttoihin."
        },
        {
          "id": "c",
          "text": "Moninaisuus sosiaalisen pääoman lisääjänä voi tarkoittaa esimerkiksi eri asukasryhmien välisen vuorovaikutuksen ja kulttuurisen ymmärryksen vahvistumista."
        },
        {
          "id": "d",
          "text": "Arkkitehtuurin ja tilallisuuden teemassa tarkastellaan yksinomaan asuntojen hintojen vaikutusta alueiden väestörakenteeseen."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "263–266"
      },
      "explanation": "A kuvaa moraalisten rajojen ja erontekojen teemaa. C vastaa lähentävää sosiaalista pääomaa koskevaa teemaa. B liittää syrjivän etäisyyden ja vastentahtoisten muuttojen seurauksia stigman purkamiseen. D rajaa arkkitehtuurin merkityksen virheellisesti asuntojen hintoihin, vaikka teemassa käsitellään fyysisten tilojen vaikutuksia kohtaamisiin.\n\nLähde:\nS. 263–266, kuusi analyysiteemaa ja niiden käsittely. Sivulla 263 esitellään kaikki kuusi teemaa.",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksen kuusi teemaa niiden oikeisiin sisältöihin ja erottaa etääntymistä sekä lähentymistä kuvaavat vaikutukset.\nHakuvinkki: Ctrl+F: Moraalisina rajoina ja sosiaalisen pääoman lisääjänä."
    },
    {
      "id": "g-m8-q5",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein kirjallisuuskatsauksen aineiston muodostamista?",
      "options": [
        {
          "id": "a",
          "text": "Tietokantahauissa löytyi 548 tulosta, joista 49 valittiin lähiluentaan ja 32 tarkempaan temaattiseen analyysiin."
        },
        {
          "id": "b",
          "text": "Tietokantahauissa löytyi 309 tulosta, joista 71 valittiin lähiluentaan ja 49 temaattiseen analyysiin."
        },
        {
          "id": "c",
          "text": "Tietokantahauissa löytyi 548 tulosta, joista 32 valittiin lähiluentaan ja 49 temaattiseen analyysiin."
        },
        {
          "id": "d",
          "text": "Tietokantahauissa löytyi 548 tulosta, joista 71 valittiin suoraan temaattiseen analyysiin ja 32 poistettiin lopullisessa vaiheessa."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "260–263",
        "section": "Kirjallisuuskatsaus"
      },
      "explanation": "A yhdistää aineiston kolme vaihetta oikein. B käyttää duplikaattien poistamisen jälkeistä 309 tuloksen määrää alkuperäisenä hakutuloksena. C vaihtaa lähiluentaan ja temaattiseen analyysiin valittujen määrät. D sekoittaa seulonnan eri vaiheiden lukumäärät.\n\nLähde:\nS. 260–263, \"Kirjallisuuskatsaus\" sekä taulukko 2 sivulla 263. Taulukon mukaan hakutuloksia oli aluksi 548, lähiluentaan otettiin 49 ja temaattiseen analyysiin 32 tekstiä.",
      "learningPoint": "Opiskelijan tulee erottaa alkuperäiset hakutulokset, lähiluentaan valitut tutkimukset ja lopullinen temaattinen aineisto.\nHakuvinkki: Ctrl+F: Taulukko 2."
    },
    {
      "id": "g-m8-q6",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Tosi vai epätosi?\nArtikkelin kirjallisuuskatsaukseen sisällytettiin vain englannin- ja suomenkielisiä vertaisarvioituja artikkeleita, jotka oli julkaistu vuosituhannen vaihteen jälkeen. Hakulausekkeisiin ei kuitenkaan sisällytetty moninaisuuden käsitettä, koska moninaisuuteen liittyviä näkökulmia saattoi esiintyä tutkimuksissa ilman käsitteen nimenomaista käyttöä.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "260",
        "section": "Kirjallisuuskatsaus – Hakustrategia"
      },
      "explanation": "Väittämän molemmat osat vastaavat artikkelia. Hakua rajattiin julkaisukielen, vertaisarvioinnin ja julkaisuajankohdan perusteella. Moninaisuus jätettiin hakulausekkeista pois, koska tutkimuksissa voitiin käsitellä sitä ilman kyseisen käsitteen käyttämistä.\n\nLähde:\nS. 260, \"Kirjallisuuskatsaus – Hakustrategia\". Sivulla 260 todetaan: \"Lausekkeisiin ei sisällytetty moninaisuuden käsitettä\".",
      "learningPoint": "Opiskelijan tulee erottaa tutkimusten sisäänottokriteerit hakulausekkeiden rakentamisesta. Tutkimuksessa käsitelty käsite ei välttämättä esiinny hakusanana.\nHakuvinkki: Ctrl+F: moninaisuuden käsitettä ja vertaisarvioituihin."
    },
    {
      "id": "g-m8-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä selityksiä sille, miksi keskiluokkaisten asukkaiden suhtautuminen sosiaaliseen sekoittamiseen voi ylläpitää asukasryhmien välistä etäisyyttä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Keskiluokkaiset omistusasujat voivat vastustaa sekoittamista asuntojensa arvon laskemisen pelossa ja pitää vuokra-asujia mahdollisina häiriöiden aiheuttajina."
        },
        {
          "id": "b",
          "text": "Keskiluokkaisten asukkaiden myönteinen suhtautuminen moninaisuuteen johtaa tutkimusten mukaan yleensä siihen, että heidän sosiaaliset verkostonsa muodostuvat tasaisesti eri yhteiskuntaluokkien jäsenistä."
        },
        {
          "id": "c",
          "text": "Keskiluokkaiset vanhemmat voivat arvostaa lähikoulun tarjoamaa moninaisuutta mutta samalla pelätä sen heikentävän lastensa myöhempiä menestymismahdollisuuksia."
        },
        {
          "id": "d",
          "text": "Keskiluokkaisten asukkaiden tyytymättömyys paikallisiin palveluihin lisää heidän palvelujen käyttöään ja siten eri asukasryhmien välisiä kohtaamisia."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "263–264",
        "section": "Keskiluokan suhde moninaisuuteen etäisyyden ylläpitäjänä"
      },
      "explanation": "A on oikein. Omistusasujien huoli asuntojen hinnoista ja vuokra-asukkaisiin kohdistuvat ennakkoluulot voivat ylläpitää ryhmien välistä etäisyyttä.\nB on väärin. Myös moninaisuutta arvostavien keskiluokkaisten asukkaiden verkostot voivat muodostua melko homogeenisiksi esimerkiksi yhteiskuntaluokan, etnisyyden ja koulutustason perusteella.\nC on oikein. Vanhemmat voivat samanaikaisesti pitää moninaisuudesta oppimista tärkeänä ja epäillä lähikoulun vaikutusta lapsensa tulevaisuuteen.\nD on väärin. Tyytymättömyys paikallisiin palveluihin voi vähentää niiden käyttöä ja siten myös kohtaamismahdollisuuksia.\n\nLähde:\nS. 263–264, \"Keskiluokan suhde moninaisuuteen etäisyyden ylläpitäjänä\". Sivulla 264 lähikoulua koskevaa ristiriitaa kuvataan \"arvokonfliktiksi\".",
      "learningPoint": "Opiskelijan tulee yhdistää asukkaiden asenteita ja valintoja niiden mahdollisiin vaikutuksiin naapurustosuhteissa. Myönteinen suhtautuminen moninaisuuteen ei välttämättä tarkoita moninaisia sosiaalisia suhteita.\nHakuvinkki: Ctrl+F: arvokonfliktista ja homogeenisiksi."
    },
    {
      "id": "g-m8-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Oikein vai väärin?\nArtikkelissa moraalisten rajojen muodostumista selitetään myös sillä, että samalla asuinalueella elävät ihmiset voivat tulkita toisiaan ennakkoluuloisesti ilman henkilökohtaista vuorovaikutusta. Tällaisia rajoja voivat muodostaa sekä yhteiskuntaluokkaan liittyvät käsitykset että asukkaiden erilaiset arjen rytmit.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "264",
        "section": "Moraalisina rajoina ja erontekoina näyttäytyvä moninaisuus etäisyyden kasvattajana"
      },
      "explanation": "Artikkelissa kuvataan, miten ihmiset voivat tehdä toisistaan havaintoja esimerkiksi kaduilla, kaupoissa ja puistoissa ilman varsinaista kohtaavaa vuorovaikutusta. Tulkinnat voivat perustua ennakkoluuloihin luokka-asemasta, etnisyydestä ja elämäntyylistä. Lisäksi työssäkäyvien ja työelämän ulkopuolella olevien erilaiset päivärytmit voivat vahvistaa eroja.\n\nLähde:\nS. 264, \"Moraalisina rajoina ja erontekoina näyttäytyvä moninaisuus etäisyyden kasvattajana\". Ratkaiseva lainaus: \"voi paradoksaalisesti kasvattaa etäisyyttä ja symbolisia rajoja\".",
      "learningPoint": "Opiskelijan tulee erottaa samassa tilassa oleminen varsinaisesta vuorovaikutuksesta. Lisäksi tulee tarkistaa, voiko etäisyyttä muodostua useammalla kuin yhdellä tavalla.\nHakuvinkki: Ctrl+F: henkilökohtaista ja erilaiset rytmit."
    },
    {
      "id": "g-m8-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Augustin (2014b) tutkimuksessa esitettyä yhteisöhankkeen kokousten vuorovaikutusta ja sen seurauksia?",
      "options": [
        {
          "id": "a",
          "text": "Etnisiin vähemmistöihin kuuluvat vuokralaisnaiset hallitsivat kokousten puheenvuoroja ja määrittelivät, millainen käyttäytyminen julkisessa tilassa oli hyväksyttävää."
        },
        {
          "id": "b",
          "text": "Omistusasujien ja vuokralaisten osallistuminen kokouksiin oli tasavertaista, mutta alueen julkisen tilan käyttöä koskevat päätökset tehtiin yksinomaan viranomaisten toimesta."
        },
        {
          "id": "c",
          "text": "Omistusasujat hallitsivat kokousten puheenvuoroja, mutta tämä vahvisti vuokralaisten mahdollisuuksia määritellä yhteisen julkisen tilan käyttöä."
        },
        {
          "id": "d",
          "text": "Usein valkoiset miespuoliset omistusasujat hallitsivat kokousten puheenvuoroja, mikä vaimensi etnisiin vähemmistöihin kuuluvien vuokralaisnaisten ääntä ja vahvisti omistusasujien vaikutusvaltaa."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "265",
        "section": "Moninaisuus syrjivän etäisyyden tuottajana"
      },
      "explanation": "D yhdistää oikeat toimijat, vuorovaikutuksen epätasapainon ja sen seuraukset.\nA vaihtaa kokouksissa hallitsevassa ja heikommassa asemassa olleet ryhmät. B on väärin, koska tutkimuksessa kuvataan nimenomaan asukasryhmien välistä epätasa-arvoista vuorovaikutusta. C on väärin, sillä omistusasujien hallitseva asema kavensi vuokralaisten äänen kuulumista eikä vahvistanut sitä.\n\nLähde:\nS. 265, \"Moninaisuus syrjivän etäisyyden tuottajana\". Sivulla 265 todetaan omistusasujien \"dominoivat puheenvuoroillaan kokouksia\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, mikä ryhmä käytti valtaa, kenen osallistuminen jäi vähäisemmäksi ja miten tämä vaikutti yhteiseen tilaan.\nHakuvinkki: Ctrl+F: August 2014b ja vaientaen."
    },
    {
      "id": "g-m8-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nArtikkelissa etnisiin vähemmistöihin kuuluvien asukkaiden halu asua samaan ryhmään kuuluvien lähellä tulkitaan yksiselitteisesti sosiaalisen sekoittamisen vastustamiseksi. Tämän vuoksi kyseiset asukkaat eivät voi samanaikaisesti kannattaa sosiaalista sekoittamista rasismin ehkäisykeinona.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "265",
        "section": "Moninaisuus syrjivän etäisyyden tuottajana"
      },
      "explanation": "Artikkelin mukaan etniseen vähemmistöön kuuluvat asukkaat voivat toivoa samaan ryhmään kuuluvia lähinaapureita rasistisen häirinnän pelon vuoksi. Samalla he voivat kannattaa sosiaalisen sekoittamisen yleisiä tavoitteita. Väittämä on väärin, koska se esittää nämä kaksi suhtautumistapaa toisensa poissulkevina.\n\nLähde:\nS. 265, \"Moninaisuus syrjivän etäisyyden tuottajana\". Ratkaiseva lainaus: \"vaikka sinänsä kannattavat sosiaalista sekoittamista rasismin ehkäisykeinona\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, voiko sama henkilö tai ryhmä kannattaa yleistä tavoitetta mutta suhtautua varauksellisesti sen toteuttamiseen omassa ympäristössään.\nHakuvinkki: Ctrl+F: lähinaapureikseen ja rasismin ehkäisykeinona."
    },
    {
      "id": "g-m8-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä myönteisiä kokemuksia sosiaalisesta sekoittamisesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Osa keskiluokkaisista asukkaista arvostaa moninaisuutta, koska se voi lisätä heidän sosiaalista pääomaansa ja tarjota mahdollisuuden irtautua hyväosaisten sosiaalisesta kuplasta."
        },
        {
          "id": "b",
          "text": "Vähävaraisten vuokralaisten sosiaalisen pääoman vahvistuminen edellyttää artikkelin mukaan aina läheisiä ystävyyssuhteita omistusasujien kanssa."
        },
        {
          "id": "c",
          "text": "Joidenkin vähävaraisten vuokralaisten sosiaalinen pääoma on voinut vahvistua omistusasujien kanssa lisääntyneen vuorovaikutuksen seurauksena."
        },
        {
          "id": "d",
          "text": "Moninaisuuden myönteiset vaikutukset kohdistuvat tutkimusten mukaan vain keskiluokkaisiin asukkaisiin, sillä vuokralaisten kokemukset ovat kaikissa tutkimuksissa kielteisiä."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "265–266",
        "section": "Moninaisuus asukkaita toisiinsa lähentävän sosiaalisen pääoman lisääjänä"
      },
      "explanation": "A on oikein, sillä moninaisuus voi olla keskiluokkaisille asukkaille tavoiteltava asia ja vahvistaa heidän sosiaalisia verkostojaan.\nB on väärin. Artikkeli ei aseta läheisiä ystävyyssuhteita sosiaalisen pääoman vahvistumisen välttämättömäksi ehdoksi.\nC on oikein, sillä Rowen ja Dunnin (2015) tutkimuksessa jotkut vähävaraiset vuokra-asujat kokivat sosiaalisen pääomansa lisääntyneen omistusasujien kanssa tapahtuneen vuorovaikutuksen myötä.\nD on väärin, koska artikkelissa esitetään myönteisiä kokemuksia myös vähävaraisten vuokralaisten näkökulmasta.\n\nLähde:\nS. 265–266, \"Moninaisuus asukkaita toisiinsa lähentävän sosiaalisen pääoman lisääjänä\". Sivulla 265 moninaisuutta kuvataan joidenkin keskiluokkaisten asukkaiden \"omaa sosiaalista pääomaansa lisääväksi\" asiaksi.",
      "learningPoint": "Opiskelijan tulee tarkistaa, mitä asukasryhmiä tutkimustulokset koskevat ja millaisia ehtoja myönteisille vaikutuksille esitetään. Joidenkin asukkaiden kokemus ei tarkoita kaikkia asukkaita koskevaa tulosta.\nHakuvinkki: Ctrl+F: sosiaalista pääomaansa ja vähävaraiset vuokra-asujat."
    },
    {
      "id": "g-m8-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä havaintoja arkkitehtuurin ja yhteisten tilojen vaikutuksista asukasryhmien välisiin suhteisiin?",
      "options": [
        {
          "id": "a",
          "text": "Selvästi toisistaan erottuvat vuokra- ja omistusasuntorakennukset voivat vahvistaa asukasryhmien välisiä jakolinjoja ja erilaisuuden kokemuksia."
        },
        {
          "id": "b",
          "text": "Rakennusten ulkoisten erojen vähentäminen voi lieventää erityisesti omistusasujien vuokralaisiin kohdistamia ennakkoluuloja."
        },
        {
          "id": "c",
          "text": "Puistot voivat tarjota eri-ikäisille ja erilaisista etnisistä taustoista tuleville asukkaille kohtaamispaikkoja, joissa minkään yksittäisen ryhmän ei koeta hallitsevan tilaa."
        },
        {
          "id": "d",
          "text": "Yksityiset kuntosalit ja purjehduslaiturit koettiin tutkimuksissa yhdenvertaisiksi kohtaamispaikoiksi, koska ne mahdollistivat kaikkien asukasryhmien tasavertaisen osallistumisen."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "266–267",
        "section": "Arkkitehtuuri ja tilallisuus etäisyyden ja läheisyyden mahdollistajana"
      },
      "explanation": "A on oikein. Artikkelissa kuvataan, kuinka ulkoisesti toisistaan erottuvat vuokra- ja omistusasuntorakennukset voivat vahvistaa asukasryhmien välisiä jakolinjoja ja erilaisuuden kokemuksia.\nB on oikein. Tasa-arvoinen arkkitehtoninen suunnittelu, jossa eri hallintasuhteiden rakennukset eivät erotu toisistaan merkittävästi, voi vähentää erityisesti omistusasujien ennakkoluuloja vuokralaisia kohtaan.\nC on oikein. Puistot voivat houkutella moninaisia kävijäryhmiä ja mahdollistaa kohtaamisia ilman, että jokin asukasryhmä hallitsee tilaa.\nD on väärin. Yksityiset kuntosalit ja purjehduslaiturit esitetään artikkelissa esimerkkeinä tiloista, jotka voivat synnyttää ulossulkemisen kokemuksia. Osa asukkaista kokee niiden olevan suunnattuja parempiosaisille.\n\nLähde:\nS. 266–267, \"Arkkitehtuuri ja tilallisuus etäisyyden ja läheisyyden mahdollistajana\".\nSivulla 267 todetaan joidenkin asukkaiden voivan kokea purjehduslaiturit ja yksityiset kuntosalit \"paremmalle väelle\" suunnitelluiksi.",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin artikkelissa eriarvoisuutta tai etäisyyttä tuottavaksi kuvattu tekijä esitetään päinvastaisesti yhdenvertaisuutta vahvistavana. Erityisesti on tarkistettava, millaisia vaikutuksia eri fyysisillä ympäristöillä havaittiin olevan.\nHakuvinkki: Ctrl+F: purjehduslaiturien ja puistot houkuttelevat."
    },
    {
      "id": "g-m8-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Oikein vai väärin?\nArtikkelin johtopäätösten mukaan eri asukasryhmien välisen moninaisuuden arvostaminen voi vahvistua myös satunnaisten arkisten kohtaamisten kautta. Siksi myönteisten vaikutusten syntyminen ei välttämättä edellytä, että asukasryhmien väliset sosiaaliset verkostot sekoittuvat kokonaan.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "267",
        "section": "Johtopäätökset ja pohdinta"
      },
      "explanation": "Tutkijat toteavat, että eri sosiaaliset maailmat ja moninaisuuden arvostaminen voivat esiintyä rinnakkain. Satunnaiset kohtaamiset esimerkiksi puistoissa tai ostoskaduilla voivat lisätä tuttuutta ja myönteistä suhtautumista, vaikka ihmiset eivät muodostaisi läheisiä sosiaalisia suhteita.\n\nLähde:\nS. 267, \"Johtopäätökset ja pohdinta\". Ratkaiseva lainaus: \"Sekoittamisen ei tarvitse olla kaiken kattavaa tuottaakseen positiivisia vaikutuksia\".",
      "learningPoint": "Opiskelijan tulee erottaa riittäväksi mahdollisesti osoittautuva vuorovaikutus kaikenkattavasta sosiaalisesta sekoittumisesta. Myönteinen vaikutus ei edellytä kaikkien sosiaalisten rajojen katoamista.\nHakuvinkki: Ctrl+F: kaiken kattavaa ja satunnaisten."
    },
    {
      "id": "g-m8-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin artikkelin johtopäätöstä sosiaalisen sekoittamisen ja huono-osaisuuden vähentämisen suhteesta?",
      "options": [
        {
          "id": "a",
          "text": "Sosiaalinen sekoittaminen vähentää itsessään taloudellista huono-osaisuutta, jos eri asukasryhmät kohtaavat riittävän usein yhteisissä tiloissa."
        },
        {
          "id": "b",
          "text": "Sosiaalinen sekoittaminen ei yksin ratkaise taloudellista huono-osaisuutta tai rakenteellista rasismia, minkä vuoksi tutkijat korostavat myös oikeudenmukaisempaa resurssien jakamista."
        },
        {
          "id": "c",
          "text": "Sosiaalisen sekoittamisen vaikutukset riippuvat yksinomaan asukkaiden henkilökohtaisista asenteista, joten yhteiskunnallisella resurssien jakautumisella ei ole olennaista merkitystä."
        },
        {
          "id": "d",
          "text": "Sosiaalisen sekoittamisen onnistumista tulee arvioida vain asukasryhmien vuorovaikutuksen määrän perusteella, koska muut yhteiskunnalliset tekijät eivät kuulu politiikan vaikutuksiin."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "268",
        "section": "Johtopäätökset ja pohdinta"
      },
      "explanation": "B yhdistää kaksi artikkelin johtopäätöstä. Asukasryhmien sijoittaminen samoille alueille ei yksin luo työ- tai koulutusmahdollisuuksia eikä ratkaise rakenteellista rasismia. Tutkijat korostavat distributiivisuutta eli resurssien oikeudenmukaisempaa jakamista.\nA esittää vuorovaikutuksen riittävänä keinona poistaa huono-osaisuutta. C sivuuttaa rakenteelliset tekijät. D rajaa politiikan arvioinnin liian kapeasti.\n\nLähde:\nS. 268, \"Johtopäätökset ja pohdinta\". Ratkaiseva lainaus: \"Sosiaalinen sekoittaminen ei itsessään vähennä taloudellista huono-osaisuutta\".",
      "learningPoint": "Opiskelijan tulee erottaa asukasryhmien vuorovaikutuksen lisääminen taloudellisen ja rakenteellisen eriarvoisuuden vähentämisestä. Tavoiteltu sosiaalinen läheisyys ei yksin takaa resurssien tasaisempaa jakautumista.\nHakuvinkki: Ctrl+F: distributiivisuus ja taloudellista huono-osaisuutta."
    },
    {
      "id": "g-m8-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin taulukossa 2 ja analyysimenetelmän kuvauksessa esitettyjä tietoja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Alkuperäisistä 548 hakutuloksesta poistettiin duplikaatteina 239, ja tämän jälkeen otsikoiden sekä abstraktien seulonnassa poistettiin yksi tutkimus vähemmän kuin duplikaattien poistossa."
        },
        {
          "id": "b",
          "text": "Koko tekstien tarkemman seulonnan jälkeen jäljellä oli 71 tutkimusta, joista 22 poistettiin ennen temaattista analyysia."
        },
        {
          "id": "c",
          "text": "Lähiluentaan hyväksytyistä 49 tutkimuksesta 17 jätettiin tarkemman temaattisen analyysin ulkopuolelle, koska niiden keskiössä eivät olleet eri asukasryhmien kokemukset tai niiden vertailu."
        },
        {
          "id": "d",
          "text": "Temaattiseen analyysiin hyväksyttiin yli puolet alkuperäisistä hakutuloksista, mutta alle puolet duplikaattien poistamisen jälkeen jäljelle jääneistä tutkimuksista."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "263"
      },
      "explanation": "A on oikein. Duplikaatteja poistettiin 239 ja otsikoiden sekä abstraktien seulonnassa 238. Jälkimmäisessä vaiheessa poistettiin siis yksi tutkimus vähemmän.\nB on väärin. Koko tekstien tarkemman seulonnan jälkeen jäljellä oli 49 tutkimusta. Luku 71 kuvaa edellisen seulontavaiheen jälkeistä määrää.\nC on oikein. Lähiluentaan hyväksyttiin 49 tutkimusta, joista 17 rajattiin temaattisen analyysin ulkopuolelle. Lopullinen aineisto koostui 32 tutkimuksesta.\nD on väärin. Temaattiseen analyysiin hyväksyttiin 32 tutkimusta, mikä on noin 5,8 prosenttia alkuperäisistä 548 hakutuloksesta. Se on selvästi alle puolet.\n\nLähde:\nS. 263, taulukko 2 \"Artikkelien seulonnan prosessi ja poistamisen perusteet\".",
      "learningPoint": "Opiskelijan tulee yhdistää taulukon eri seulontavaiheiden lukumääriä ja tehdä pieniä laskutoimituksia. Erityisesti on erotettava toisistaan poistettujen tutkimusten määrät ja kunkin vaiheen jälkeen jäljelle jääneet tutkimukset.\nHakuvinkki: Ctrl+F: Taulukko 2. Vertaa sarakkeita \"Hakutuloksia jäljellä\" ja \"Poistetut määrä\"."
    },
    {
      "id": "g-m8-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Tosi vai epätosi?\nArtikkelin johtopäätösten mukaan sosiaalinen sekoittaminen voi onnistua paremmin uusilla asuinalueilla, joille asukkaat muuttavat suunnilleen samanaikaisesti ja joilla eri hallintasuhteiden asuinrakennukset eivät erotu ulkoisesti merkittävästi toisistaan. Tämä ei kuitenkaan tarkoita, että vastaavat olosuhteet takaisivat eri asukasryhmien välisen läheisen vuorovaikutuksen.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "267–268",
        "section": "Johtopäätökset ja pohdinta"
      },
      "explanation": "Väittämä yhdistää tutkijoiden johtopäätöksen arkkitehtuurin ja asukkaiden muuttoajankohtien merkityksestä.\nRakennusten samankaltaisuus ja samanaikainen muutto voivat vähentää ryhmien välisten rajojen muodostumista. Tutkijat eivät kuitenkaan esitä näitä olosuhteita riittävinä ehtoina läheiselle vuorovaikutukselle. Myös asukkaiden asenteilla, kokemuksilla ja kohtaamisilla on merkitystä.\n\nLähde:\nS. 267–268, \"Johtopäätökset ja pohdinta\". Sivulla 268 todetaan politiikan voivan onnistua paremmin alueilla, \"jonne asukkaat muuttavat suunnilleen samanaikaisesti\".",
      "learningPoint": "Opiskelijan tulee erottaa mahdollinen onnistumista edistävä tekijä onnistumisen takaavasta ehdosta. Ilmaus \"voi onnistua paremmin\" ei tarkoita, että onnistuminen olisi varmaa.\nHakuvinkki: Ctrl+F: samanaikaisesti ja ulkoisesti merkittävästi."
    },
    {
      "id": "g-m8-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa esitetyt tutkimushavainnot ja niitä koskevat lähteet?",
      "options": [
        {
          "id": "a",
          "text": "Augustin (2014b) tutkimuksessa omistusasujien todettiin käyttävän yhteisöhankkeen kokouksissa valtaa vuokralaisten kustannuksella, kun taas Rowen ja Dunnin (2015) tutkimuksessa jotkut vähävaraiset vuokra-asujat kokivat sosiaalisen pääomansa vahvistuneen omistusasujien kanssa käydyn vuorovaikutuksen myötä."
        },
        {
          "id": "b",
          "text": "Augustin (2014b) tutkimuksessa vähävaraisten vuokralaisten sosiaalinen pääoma lisääntyi omistusasujien kanssa käydyn vuorovaikutuksen myötä, kun taas Rowen ja Dunnin (2015) tutkimuksessa omistusasujat vaimensivat vuokralaisnaisten ääntä yhteisöhankkeen kokouksissa."
        },
        {
          "id": "c",
          "text": "Dhalmannin ja Vilkaman (2009) tutkimuksessa keskiluokkaiset omistusasujat hallitsivat yhteisöhankkeen kokouksia, kun taas Augustin (2014b) tutkimuksessa etnisten vähemmistöjen asumistoiveita selitettiin rasistisen häirinnän pelolla."
        },
        {
          "id": "d",
          "text": "Stevenson ym. (2019; 2020) osoittivat vastentahtoisten muuttojen vahvistavan naapurustoidentiteettiä, kun taas Watt (2022) kuvasi moninaisuuden arvostamisen vähentävän ryhmien välisiä ennakkoluuloja."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "265–266",
        "section": "Moninaisuus syrjivän etäisyyden tuottajana"
      },
      "explanation": "A on oikein. Augustin (2014b) tutkimus liittyy epätasa-arvoiseen osallistumiseen ja omistusasujien hallitsevaan asemaan. Rowen ja Dunnin (2015) tutkimuksessa taas käsitellään muun muassa vuokra-asujien myönteisiä kokemuksia sosiaalisesta pääomasta.\nB vaihtaa näiden kahden tutkimuksen havainnot keskenään.\nC on väärin. Dhalmannin ja Vilkaman tutkimuksessa tarkasteltiin muun muassa etnisiin vähemmistöihin kuuluvien asumistoiveita ja rasistisen häirinnän pelkoa. Yhteisöhankkeen kokouksia koskeva havainto liittyy Augustiin.\nD on väärin. Stevenson ym. käsittelevät moninaisuuteen perustuvan naapurustoidentiteetin myönteisiä vaikutuksia, kun taas Watt kuuluu tutkimuksiin, joissa tarkastellaan muun muassa asukkaiden siirtämistä kodeistaan.\n\nLähde:\nS. 265–266, \"Moninaisuus syrjivän etäisyyden tuottajana\" ja \"Moninaisuus asukkaita toisiinsa lähentävän sosiaalisen pääoman lisääjänä\".\nSivulla 265 kuvataan Augustin tutkimuksen yhteisöhankkeen kokouksia. Sivulla 266 todetaan joidenkin vähävaraisten vuokra-asujien kokeneen sosiaalisen pääomansa lisääntyneen.",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimustulos oikeaan lähteeseen. Väärät vaihtoehdot sisältävät artikkelissa esiintyviä tutkimushavaintoja mutta liittävät niitä vääriin tutkimuksiin.\nHakuvinkki: Ctrl+F: August 2014b, Rowe & Dunn 2015 ja Stevenson."
    },
    {
      "id": "g-m8-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan asuinalueen fyysinen uudistaminen voi vähentää alueeseen liittyvää stigmaa, vaikka eri asukasryhmien välinen vuorovaikutus ei merkittävästi lisääntyisi. Tästä voidaan kuitenkin päätellä, että stigman väheneminen johtuu aina nimenomaan sosiaalisesta sekoittamisesta eikä esimerkiksi rakennusten tai puistojen parantamisesta.",
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "266",
        "section": "Moninaisuus stigman purkajana ja läheisyyteen perustuvan naapurustoidentiteetin rakentajana"
      },
      "explanation": "Väittämän ensimmäinen osa on artikkelin mukainen. Asuinalueiden fyysinen uudistaminen voi vähentää koettua eriarvoisuutta ja stigmaa.\nJälkimmäinen osa on väärin. Tutkijat huomauttavat, että asukkaat voivat arvostaa erityisesti rakennusten ja puistojen parannuksia, jotka olisi voitu toteuttaa ilman sosiaalista sekoittamistakin.\nNäin ollen myönteistä muutosta ei voida automaattisesti tulkita sekoittamispolitiikan vaikutukseksi.\n\nLähde:\nS. 266, \"Moninaisuus stigman purkajana ja läheisyyteen perustuvan naapurustoidentiteetin rakentajana\". Ratkaiseva lainaus: \"Aina kyse ei ole kuitenkaan eri asukasryhmien sosiaalisen sekoittamisen onnistumisesta.\"",
      "learningPoint": "Opiskelijan tulee erottaa havaittu myönteinen muutos sen mahdollisista aiheuttajista. Samanaikaisesti toteutettu sosiaalinen sekoittaminen ja fyysinen uudistaminen eivät tarkoita, että kaikki myönteiset seuraukset johtuisivat sekoittamisesta.\nHakuvinkki: Ctrl+F: fyysisiä parannuksia ja ilman sosiaalista sekoittamistakin."
    },
    {
      "id": "g-m8-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä eri asukasryhmien kokemuksia sosiaalisesta sekoittamisesta?",
      "options": [
        {
          "id": "a",
          "text": "Osa keskiluokkaisista asukkaista suhtautui moninaisuuteen varauksellisesti, mutta toiset kokivat sen lisäävän sosiaalista pääomaansa ja mahdollistavan irtautumisen hyväosaisten sosiaalisesta kuplasta."
        },
        {
          "id": "b",
          "text": "Etnisiin vähemmistöihin kuuluvat asukkaat saattoivat kannattaa sosiaalista sekoittamista rasismin ehkäisykeinona ja samalla toivoa samaan ryhmään kuuluvia lähinaapureita turvallisuutensa vuoksi."
        },
        {
          "id": "c",
          "text": "Vähävaraisten vuokralaisten kokemukset olivat tutkimuksissa yksinomaan kielteisiä, kun taas keskiluokkaisten omistusasujien kokemukset olivat yksinomaan myönteisiä."
        },
        {
          "id": "d",
          "text": "Asuinalueiden uudistaminen saattoi tuottaa asukkaille myönteisiä kokemuksia fyysisen ympäristön parantumisesta, mutta uudistuksiin liittyi myös vastentahtoisia muuttoja ja aiempien sosiaalisten verkostojen hajoamista."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "263–266"
      },
      "explanation": "A on oikein. Keskiluokkaisten asukkaiden suhtautuminen sosiaaliseen sekoittamiseen vaihteli. Osa suhtautui moninaisuuteen varauksellisesti esimerkiksi asuntojen arvon laskemisen pelossa, kun taas toiset arvostivat mahdollisuutta elää moninaisessa ympäristössä.\nB on oikein. Etnisiin vähemmistöihin kuuluvat asukkaat saattoivat kannattaa sosiaalista sekoittamista yleisellä tasolla mutta samalla toivoa samaan ryhmään kuuluvia naapureita rasistisen häirinnän pelon vuoksi.\nC on väärin. Tutkimuksissa esiintyi sekä myönteisiä että kielteisiä kokemuksia eri asukasryhmien keskuudessa. Väittämä muuttaa nämä moninaiset havainnot ehdottomiksi yleistyksiksi.\nD on oikein. Asuinalueiden uudistamiseen liittyi sekä myönteisiä kokemuksia rakennusten ja ympäristöjen parantumisesta että kielteisiä seurauksia, kuten vastentahtoisia muuttoja ja sosiaalisten verkostojen hajoamista. Nämä havainnot eivät välttämättä koskeneet samoja asukkaita.\n\nLähde:\nS. 263–266, erityisesti \"Keskiluokan suhde moninaisuuteen etäisyyden ylläpitäjänä\", \"Moninaisuus syrjivän etäisyyden tuottajana\" ja \"Moninaisuus asukkaita toisiinsa lähentävän sosiaalisen pääoman lisääjänä\".\nSivulla 265 todetaan joidenkin keskiluokkaisten asukkaiden pitävän moninaisuutta tavoiteltavana, ja sivulla 266 kuvataan joidenkin vähävaraisten vuokra-asujien myönteisiä kokemuksia sosiaalisen pääoman lisääntymisestä.",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin joidenkin asukkaiden kokemuksista tehdään kaikkia asukkaita koskevia johtopäätöksiä. Erityisesti tulee kiinnittää huomiota ehdottomiin ilmauksiin, kuten \"yksinomaan\", ja verrata niitä artikkelin rajatumpiin havaintoihin.\nHakuvinkki: Ctrl+F: Joillekin keskiluokkaan, jotkut vähävaraiset ja vastentahtoisista."
    },
    {
      "id": "g-m8-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa artikkelin tutkimustulosten ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Koska sosiaalinen sekoittaminen voi lisätä asukkaiden välistä vuorovaikutusta mutta myös vahvistaa eriarvoisuutta, politiikan onnistumista ei voida arvioida pelkästään asuntojen hallintasuhteiden monipuolistumisen perusteella."
        },
        {
          "id": "b",
          "text": "Koska moninaisuuden arvostaminen voi syntyä satunnaisten kohtaamisten kautta, asukasryhmien väliset valtasuhteet ja resurssien epätasainen jakautuminen eivät enää vaikuta sosiaalisen sekoittamisen onnistumiseen."
        },
        {
          "id": "c",
          "text": "Vaikka asuinalue näyttäisi ulkopuolisen arvion perusteella homogeeniselta, sen asukkaat voivat kokea alueen yhteisölliseksi ja elämäntavallisesti moninaiseksi, jolloin asukasrakenteen muuttaminen ei välttämättä ole tarkoituksenmukaisin kehittämistoimi."
        },
        {
          "id": "d",
          "text": "Koska tutkimuksessa tunnistettiin kuusi etääntymistä ja lähentymistä kuvaavaa teemaa, jokainen tarkasteltu tutkimus osoitti sosiaalisen sekoittamisen joko täysin onnistuneen tai täysin epäonnistuneen."
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
        "articleId": "asukkaiden-kokemukset-sosiaalisesta-sekoittamisesta",
        "page": "267–269",
        "section": "Johtopäätökset ja pohdinta"
      },
      "explanation": "A on oikein. Asuntokannan monipuolistuminen ei automaattisesti johda asukasryhmien välisen vuorovaikutuksen lisääntymiseen tai eriarvoisuuden vähenemiseen. Politiikan onnistumista tulee arvioida myös asukkaiden kokemusten ja yhteiskunnallisten vaikutusten perusteella.\nB on väärin. Satunnaiset kohtaamiset voivat lisätä moninaisuuden arvostamista, mutta ne eivät poista yhteiskunnallisia valtasuhteita tai resurssien epätasaista jakautumista. Tutkijat korostavat myös distributiivisuutta eli resurssien oikeudenmukaisempaa jakamista.\nC on oikein. Ulkopuolelta homogeeniseksi tai segregoituneeksi määritelty asuinalue voi olla asukkailleen toimiva ja elämäntavallisesti moninainen. Tällöin alueen kehittäminen ei välttämättä edellytä asukkaiden vaihtamista, vaan esimerkiksi rakennusten ja ympäristön kohentamista.\nD on väärin. Kuusi analyysiteemaa kuvaavat etääntymistä ja lähentymistä tuottavia tekijöitä. Tutkimukset eivät jakaudu yksiselitteisesti täysin onnistuneisiin ja täysin epäonnistuneisiin tapauksiin. Myönteiset ja kielteiset kokemukset voivat esiintyä rinnakkain.\n\nLähde:\nS. 267–269, \"Johtopäätökset ja pohdinta\".\nSivulla 269 todetaan, että ulkopuolelta homogeeniseksi määrittyvä naapurusto voi asukkaiden näkökulmasta olla \"toimiva, kulttuurista ja elämäntavallista moninaisuutta arvostava asuinpaikka\".",
      "learningPoint": "Opiskelijan tulee erottaa mahdolliset vaikutukset välttämättömistä seurauksista. Lisäksi tulee huomata, ettei asuinalueen ulkopuolinen luokittelu välttämättä vastaa asukkaiden omia kokemuksia.\nHakuvinkki: Ctrl+F: distributiivisuus, homogeeninen ja moninaisuuden arvostaminen."
    }
  ]
} satisfies ValintakoeGExercise;
