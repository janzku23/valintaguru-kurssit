import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 3 on muodostettu käyttäjän toimittamasta KESKIVAIKEAT TEHTÄVÄT VALINTAKOE G -dokumentista.
 * Kysymysten sanamuotoja tai vastausvaihtoehtoja ei ole muokattu.
 * Lähdedokumentissa Tehtävä 8 esiintyy kahdesti. Molemmat versiot säilytetään erillisinä kysymyksinä.
 */
export const valintakoeGMediumExercise3Base = {
  "id": "keskivaikea-harjoitus-3",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 3 – Helsinki Garden ja kamppailu kaupunkikuvasta",
  "description": "30 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 30,
  "difficulty": "medium",
  "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
  "articleTitle": "Helsinki Garden ja kamppailu kaupunkikuvasta",
  "articleUrl": "https://journal.fi/yhdyskuntasuunnittelu/article/view/154853/106008",
  "questions": [
    {
      "id": "g-m3-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyä Helsinki Gardenin suunnitteluprosessia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Nordenskiöldinkadun sijaintia pidettiin Mäntymäkeä parempana sekä kaupungin talousvaikutusten että liikenteen kannalta, vaikka myös sen kaupunkikuvallisiin vaikutuksiin liittyi ongelmia."
        },
        {
          "id": "b",
          "text": "Mäntymäen vaihtoehdosta luovuttiin ensisijaisesti sen kaupunkikuvallisten ongelmien vuoksi, koska taloudellisissa ja liikenteellisissä arvioissa sijaintien välillä ei havaittu merkittäviä eroja."
        },
        {
          "id": "c",
          "text": "Hajautetulla eli diaspora-vaihtoehdolla nähtiin olevan kaupunkikuvallisia etuja, mutta sen tarkempaa tutkimista ei jatkettu."
        },
        {
          "id": "d",
          "text": "Nordenskiöldinkatu valittiin lopulliseksi sijainniksi, koska sen kaupunkikuvalliset arvot arvioitiin valmisteluvaiheessa Mäntymäkeä merkittävämmiksi."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "89"
      },
      "explanation": "A yhdistää oikein Nordenskiöldinkadun taloudelliset ja liikenteelliset edut siihen, ettei sijainti silti ollut kaupunkikuvallisesti ongelmaton. C on oikein, koska hajautetulla mallilla nähtiin kaupunkikuvallisia etuja, mutta sitä ei tutkittu pidemmälle. B sekoittaa julkisessa keskustelussa esitetyn perustelun varsinaisiin ensisijaisiin syihin: artikkelin mukaan Mäntymäen hylkäämisen ensisijaiset syyt olivat kaupunkitaloudellisia ja liikenteellisiä.",
      "learningPoint": "Erota toisistaan eri sijaintivaihtoehtoihin liitetyt ominaisuudet ja se, millä perusteella ratkaisu tosiasiassa tehtiin. Useampi vaihtoehto sisältää artikkelista tuttuja tietoja, mutta ne on yhdistetty väärään perusteeseen tai sijaintiin."
    },
    {
      "id": "g-m3-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Helsinki Gardenin kaavavaiheessa rakennuksen kokoa pienennettiin kritiikin seurauksena. Mikä seuraavista kuvaa artikkelin perusteella parhaiten muutosten merkitystä?",
      "options": [
        {
          "id": "a",
          "text": "Muutokset ratkaisivat hankkeen keskeisen kaupunkikuvallisen ongelman, sillä uudisrakennus ei niiden jälkeen enää noussut ympäröivää rakennuskantaa korkeammalle."
        },
        {
          "id": "b",
          "text": "Muutokset olivat artikkelin tulkinnan mukaan melko vähäisiä suhteessa hankkeen mittakaavaan, vaikka rakennuksen pinta-alaa ja korkeutta pienennettiin."
        },
        {
          "id": "c",
          "text": "Muutokset kohdistuivat rakennusten korkeuteen mutta eivät kokonaisalaan, minkä vuoksi hankkeen rakennusvolyymi pysyi käytännössä ennallaan."
        },
        {
          "id": "d",
          "text": "Muutokset olivat ensisijaisesti hallinto-oikeuden määräämiä toimenpiteitä, joilla kaava saatettiin maankäyttö- ja rakennuslain mukaiseksi."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "93"
      },
      "explanation": "Tehtävässä pitää yhdistää tehdyt konkreettiset muutokset kirjoittajien arvioon niiden merkityksestä. Hanketta todella pienennettiin sekä pinta-alan että korkeuden osalta, mutta tästä ei seuraa, että mittakaavaongelma olisi kirjoittajien mukaan ratkennut. Hyväksytyn kaavan viitesuunnitelmassa rakennus kohosi edelleen selvästi vanhan jäähallin, Töölön korttelirakenteen ja Olympiastadionin yläpuolelle.",
      "learningPoint": "Tarkista paitsi se, mitä konkreettisesti muutettiin, myös se, miten muutoksen merkitystä arvioidaan. Oikea vastaus voi tiivistää useamman virkkeen kokonaisuuden eri sanoin."
    },
    {
      "id": "g-m3-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Tosi vai epätosi? Suunnitteluvarausmenettelyyn liittyvä jännite syntyy artikkelin mukaan siitä, että hankkeen tavoitteita voidaan määritellä varausvaiheessa hyvinkin yksityiskohtaisesti, vaikka varsinaisen kaavoituksen pitäisi säilyä riippumattomana eikä kaavan sisällöstä voida sitovasti sopia etukäteen.",
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
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "82–83"
      },
      "explanation": "Väite yhdistää kaksi samaan ongelmaan kuuluvaa tietoa. Suunnitteluvaraus voi käytännössä määrittää pitkälle tavoiteltavan asemakaavan suuntaviivoja, mutta kaavoituksen pitäisi samalla säilyä itsenäisenä. Juuri tätä sopimussitovuuden ja riippumattoman kaavoituksen välistä suhdetta artikkelissa kuvataan ongelmalliseksi.",
      "learningPoint": "Tarkista, millainen suhde kahden prosessin välille aineistossa muodostetaan. Pelkkä suunnitteluvarauksen ja kaavoituksen löytäminen tekstistä ei riitä, vaan niiden välinen jännite pitää ymmärtää."
    },
    {
      "id": "g-m3-q4",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista kuvaa oikein artikkelissa esitettyä kaupungin roolin muuttumista Helsinki Garden -hankkeen aikana?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunki siirtyi hankkeen aktiivisesta tukemisesta vähitellen valvojan rooliin, kun hankkeen rahoitusvaikeudet ja kaupunkikuvallinen kritiikki lisääntyivät."
        },
        {
          "id": "b",
          "text": "Kaupunki säilytti koko prosessin ajan ensisijaisesti neutraalin mahdollistajan roolin, vaikka poliittinen johto suhtautui hankkeeseen myönteisesti."
        },
        {
          "id": "c",
          "text": "Kaupungin rooli kehittyi valvonnasta ja hankkeen jarruttamisesta kohti kumppanuutta ja aktiivista hankkeen tukemista."
        },
        {
          "id": "d",
          "text": "Kaupunki muuttui hankkeen kumppaniksi vasta sen jälkeen, kun asemakaava oli hyväksytty ja Museoviraston valitus hylätty."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "95"
      },
      "explanation": "C säilyttää sekä artikkelissa esitetyt roolit että niiden oikean kehityssuunnan. A kääntää suunnan päinvastaiseksi. B sivuuttaa muutoksen aktiiviseksi tukijaksi, ja D sijoittaa kumppaniksi muuttumisen liian myöhäiseen vaiheeseen.",
      "learningPoint": "Kun aineistossa kuvataan ajallista prosessia, tarkista sekä sen vaiheet että niiden järjestys ja muutoksen suunta. Häiriövaihtoehto voi sisältää kaikki oikeat roolit mutta järjestää ne väärin."
    },
    {
      "id": "g-m3-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein suojeludiskurssin ja kaupunkikehitysdiskurssin eroa Helsinki Garden -hankkeessa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suojeludiskurssissa olemassa olevan ympäristön kulttuurihistorialliset ja kaupunkikuvalliset arvot muodostivat suunnittelulle reunaehtoja."
        },
        {
          "id": "b",
          "text": "Kaupunkikehitysdiskurssissa kaupunkikuva nähtiin ensisijaisesti olemassa olevan ympäristön ominaisuutena, johon uuden rakentamisen tuli visuaalisesti mukautua."
        },
        {
          "id": "c",
          "text": "Kaupunkikehitysdiskurssissa kaupunkikuvaa voitiin tuottaa uuden arkkitehtuurin avulla ilman vahvaa vaatimusta yhteensovittamisesta olemassa olevaan ympäristöön."
        },
        {
          "id": "d",
          "text": "Suojeludiskurssissa hankkeen mittakaavaa pidettiin ennen kaikkea sijoittajan taloudelliseen kannattavuuteen liittyvänä kysymyksenä."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98"
      },
      "explanation": "A ja C kuvaavat näkökulmien keskeisen eron oikein. Suojeludiskurssissa olemassa olevan paikan arvot määrittävät uuden rakentamisen reunaehtoja. Kaupunkikehitysdiskurssissa kaupunkikuva puolestaan ymmärretään enemmän uuden rakennuksen ja arkkitehtuurin kautta. B liittää suojeludiskurssille ominaisen ajatuksen kaupunkikehitysdiskurssiin, ja D tekee saman hankkeen taloudellista mittakaavaa koskevalle näkemykselle.",
      "learningPoint": "Kun tekstissä vertaillaan kahta näkökulmaa, tarkista tarkasti, kumpaan näkökulmaan kukin ominaisuus kuuluu. Häiriövaihtoehdot voivat sisältää täysin oikeaa tietoa mutta liittää sen väärään diskurssiin."
    },
    {
      "id": "g-m3-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista kuvaa oikein Helsinki Gardenin koon kehitystä ja siihen kohdistunutta arviointia ennen kaavavaihetta ja sen alussa?",
      "options": [
        {
          "id": "a",
          "text": "Kilpailun voittaneen ehdotuksen laajuus oli 150 000 neliötä, ja vaikka jury piti sitä tarpeettoman massiivisena, hankkeen laajuus kasvoi myöhemmin osallistumis- ja arviointisuunnitelman vaiheessa yli 200 000 neliöön."
        },
        {
          "id": "b",
          "text": "Kilpailun voittaneen ehdotuksen laajuus ylitti jo 200 000 neliötä, minkä vuoksi sitä supistettiin ennen ensimmäistä julkista kuulemista 150 000 neliöön."
        },
        {
          "id": "c",
          "text": "Jury piti 150 000 neliön ehdotusta mittakaavaltaan onnistuneena, mutta kaavavaiheessa Museovirasto vaati hankkeen kasvattamista yli 200 000 neliöön."
        },
        {
          "id": "d",
          "text": "Hankkeen laajuus pysyi kilpailuvaiheesta ensimmäiseen julkiseen kuulemiseen 150 000 neliössä, mutta rakennusten korkeutta kasvatettiin merkittävästi."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91"
      },
      "explanation": "Ratkaisussa pitää yhdistää kaksi hankkeen eri vaihetta. Kilpailun voittanut 150 000 neliön ehdotus oli jo juryn mielestä tarpeettoman massiivinen. Tästä huolimatta hanke ei pienentynyt ennen kaavavaihetta, vaan oli osallistumis- ja arviointisuunnitelman yhteydessä kasvanut yli 200 000 neliöön. Muut vaihtoehdot muuttavat joko lukujen järjestystä, juryn arviota tai kehityksen suuntaa.",
      "learningPoint": "Tarkista samaa asiaa koskevat tiedot kahdesta eri vaiheesta ja päättele niiden perusteella muutoksen suunta. Pelkkä lukujen löytäminen ei riitä, vaan ne täytyy sijoittaa oikeaan ajankohtaan."
    },
    {
      "id": "g-m3-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa kuvattua Helsinki Gardenin kaavavaiheen konfliktia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "SAFA, Museovirasto ja Helsingin kaupunginmuseo kohdistivat kritiikkiä erityisesti hankkeen mittakaavaan ja sen suhteeseen arvokkaaseen kulttuuriympäristöön."
        },
        {
          "id": "b",
          "text": "Museovirasto katsoi jo ensimmäisessä kannanotossaan, ettei hankkeen kaupunkikuvallisia ongelmia voitaisi missään tapauksessa ratkaista jatkosuunnittelulla."
        },
        {
          "id": "c",
          "text": "Kaavaluonnosvaiheessa Museovirasto arvioi, ettei suunnitelma ollut kulttuuriympäristön kannalta olennaisesti parantunut ja ettei valtavan koon aiheuttamaa ristiriitaa voitu ratkaista arkkitehtuurin keinoin."
        },
        {
          "id": "d",
          "text": "Kaavaehdotusvaiheessa asiantuntijakritiikki lieveni, koska rakennusmassojen supistamisen katsottiin poistaneen hankkeen keskeiset ongelmat."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91–92"
      },
      "explanation": "A kuvaa asiantuntijatahojen kritiikin keskeistä sisältöä ja C Museoviraston myöhempää, selvästi jyrkempää kantaa. B on väärin, koska ensimmäisessä kannanotossa Museovirasto piti ongelmien huomioon ottamista jatkosuunnittelussa vielä mahdollisena. Tehtävässä pitää siis huomata myös kannan muuttuminen prosessin eri vaiheissa. D on väärin, sillä kritiikki päinvastoin voimistui kaavaehdotusvaiheessa.",
      "learningPoint": "Saman toimijan näkemys voi muuttua prosessin aikana. Tarkista paitsi se, mitä toimija sanoi, myös missä vaiheessa kyseinen kanta esitettiin."
    },
    {
      "id": "g-m3-q8",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mikä seuraavista päätelmistä on artikkelin perusteella perusteltu kaupungin taloudellisesta tuesta Helsinki Garden -hankkeelle?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunki piti koko hankkeen ajan kiinni markkinahintaisuudesta, vaikka se tuki hankkeen kannattavuutta muilla tavoilla."
        },
        {
          "id": "b",
          "text": "Kaupunki rahoitti hanketta alusta lähtien suoraan julkisilla varoilla, vaikka hanketta kuvattiin julkisuudessa yksityisrahoitteiseksi."
        },
        {
          "id": "c",
          "text": "Kaupungin osallistuminen hankkeen taloudellisten edellytysten tukemiseen vahvistui prosessin aikana, ja myöhemmin kaupunki myös luopui tontin markkinahintaisuuden vaatimuksesta."
        },
        {
          "id": "d",
          "text": "Kaupungin taloudellinen tuki päättyi sen jälkeen, kun suunnittelualueen ulkopuolelle luvattu asuntorakennusoikeus poistettiin hankkeesta."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "96"
      },
      "explanation": "C yhdistää prosessin kaksi eri vaihetta. Kaupunki tuki ensin hankkeen taloudellisia edellytyksiä mutta ilmoitti samalla pitävänsä kiinni tontin markkinahintaisuudesta. Myöhemmässä vaiheessa tästäkin periaatteesta artikkelin mukaan luovuttiin ja tontin hintaa laskettiin. A pitää paikkansa vain prosessin aikaisemmassa vaiheessa, joten sitä ei voi yleistää koko hankkeen ajalle.",
      "learningPoint": "Kun prosessi muuttuu ajan kuluessa, aikaisemmassa vaiheessa oikea väite ei välttämättä kuvaa myöhempää tilannetta. Tarkista saman asian tila vähintään kahdessa eri vaiheessa."
    },
    {
      "id": "g-m3-q8-2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mikä seuraavista päätelmistä on artikkelin perusteella perusteltu kaupungin taloudellisesta tuesta Helsinki Garden -hankkeelle?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunki piti koko hankkeen ajan kiinni markkinahintaisuudesta, vaikka se tuki hankkeen kannattavuutta muilla tavoilla."
        },
        {
          "id": "b",
          "text": "Kaupunki rahoitti hanketta alusta lähtien suoraan julkisilla varoilla, vaikka hanketta kuvattiin julkisuudessa yksityisrahoitteiseksi."
        },
        {
          "id": "c",
          "text": "Kaupungin osallistuminen hankkeen taloudellisten edellytysten tukemiseen vahvistui prosessin aikana, ja myöhemmin kaupunki myös luopui tontin markkinahintaisuuden vaatimuksesta."
        },
        {
          "id": "d",
          "text": "Kaupungin taloudellinen tuki päättyi sen jälkeen, kun suunnittelualueen ulkopuolelle luvattu asuntorakennusoikeus poistettiin hankkeesta."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "96"
      },
      "explanation": "C yhdistää prosessin kaksi eri vaihetta oikein. Kaupunki tuki ensin hankkeen kannattavuutta mutta ilmoitti pitävänsä kiinni tontin markkinahintaisuudesta. Myöhemmin tästäkin periaatteesta luovuttiin. A kuvaa vain aikaisempaa vaihetta ja yleistää sen virheellisesti koko prosessiin.",
      "learningPoint": "Tarkista saman asian tila prosessin eri vaiheissa. Aikaisemmassa vaiheessa oikea tieto voi muuttua vääräksi, jos se yleistetään koskemaan koko prosessia."
    },
    {
      "id": "g-m3-q9",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyä Groatin jaottelua uuden arkkitehtuurin suhteesta ympäristöönsä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Yhdessä lähestymistavassa uuden arkkitehtuurin ajatellaan edustavan omaa aikaansa, jolloin sen ei tarvitse visuaalisesti sopeutua ympäristöönsä."
        },
        {
          "id": "b",
          "text": "Visuaalista yhtenäisyyttä ja jatkuvuutta korostava lähestymistapa kuuluu niihin kategorioihin, joissa kontekstuaaliseen yhteensopivuuteen pyritään."
        },
        {
          "id": "c",
          "text": "Kaikissa neljässä lähestymistavassa uuden rakennuksen edellytetään sopeutuvan olemassa olevaan ympäristöön, mutta sopeutumisen voimakkuus vaihtelee."
        },
        {
          "id": "d",
          "text": "Syvällisempi kontekstin ymmärtäminen kuuluu lähestymistapaan, jossa sopeutuminen ulottuu pelkkää visuaalista yhteensopivuutta pidemmälle."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "84–85"
      },
      "explanation": "A, B ja D sijoittavat Groatin kuvaamat ominaisuudet oikeisiin lähestymistapoihin. C on väärin, koska artikkelissa tehdään nimenomainen ero kategorioiden välille: kahdessa ensimmäisessä kontekstuaalinen yhteensopivuus ei ole välttämätöntä, kun taas kahdessa jälkimmäisessä siihen pyritään.",
      "learningPoint": "Kun aineistossa esitellään useita läheisiä kategorioita, tarkista, mikä ominaisuus kuuluu mihinkin jaottelun osaan. Pelkkä ominaisuuksien tunnistaminen aineistosta ei riitä."
    },
    {
      "id": "g-m3-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Tosi vai epätosi? Helsinki Gardenin ensimmäinen varsinainen julkinen kuuleminen tapahtui vasta kaavavaiheessa vuonna 2018, vaikka hankkeen sijaintiin ja volyymiin liittyvät keskeiset ratkaisut oli tehty jo valmisteluvaiheessa.",
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
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91"
      },
      "explanation": "Väitteen molemmat osat vastaavat artikkelia. Ensimmäinen varsinainen kuuleminen tapahtui vuonna 2018, mutta hankkeen kaupunkikuvallisen yhteensopivuuden kannalta keskeiset ratkaisut sijainnista ja volyymista oli tehty jo aiemmin. Olennaista on yhdistää päätösten ajankohta osallistamisen ajankohtaan.",
      "learningPoint": "Kiinnitä huomiota tapahtumien keskinäiseen ajoitukseen. Tarkista, mitkä ratkaisut oli tehty ennen tiettyä prosessin vaihetta ja mitkä vasta sen aikana."
    },
    {
      "id": "g-m3-q11",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelin tulkintaa arkkitehtikilpailun merkityksestä Helsinki Garden -prosessissa?",
      "options": [
        {
          "id": "a",
          "text": "Kilpailu haastoi hankkeen sijoittajavetoisesti määrätyn laajuuden, minkä seurauksena hankkeen volyymia pienennettiin olennaisesti jo ennen kaavoitusta."
        },
        {
          "id": "b",
          "text": "Kilpailu toimi kirjoittajien mukaan ennen kaikkea keinona arvioida eri sijaintivaihtoehtoja, minkä seurauksena hajautettu malli valittiin jatkosuunnitteluun."
        },
        {
          "id": "c",
          "text": "Kilpailu esitettiin laadun takeena, mutta kirjoittajien tulkinnan mukaan se pikemminkin validoi jo valittua ratkaisuperiaatetta kuin haastoi hankkeen lähtökohtaisesti määrättyä laajuutta."
        },
        {
          "id": "d",
          "text": "Kilpailun keskeinen tehtävä oli ratkaista hankkeen rahoitusongelmat tuomalla mukaan uusia yksityisiä sijoittajia."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98"
      },
      "explanation": "C yhdistää kaksi artikkelissa erotettua tasoa: sen, miten kilpailua perusteltiin, ja sen, miten kirjoittajat tulkitsevat sen tosiasiallista merkitystä. Kilpailu esitettiin laadun takaavana ratkaisuna, mutta kirjoittajien analyysissa se ei aidosti haastanut hankkeen lähtökohtia. A kääntää tämän tulkinnan päinvastaiseksi.",
      "learningPoint": "Erota toisistaan se, miten jokin menettely esitetään, ja se, millaiseksi sen merkitys artikkelin analyysissa arvioidaan. Väärä vaihtoehto voi muuttaa kirjoittajien kritiikin päinvastaiseksi lopputulokseksi."
    },
    {
      "id": "g-m3-q12",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa kuvattua kaupunkikuvallisten ja kulttuurihistoriallisten arvojen arvioinnin ongelmaa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kaupunkikuvallisten arvojen huomioon ottamista vaikeuttaa se, ettei niitä ole helppo tunnistaa ja mitata."
        },
        {
          "id": "b",
          "text": "Visuaalisten ja esteettisten ominaisuuksien arviointi voidaan kokea subjektiiviseksi, mikä vaikeuttaa niitä koskevaa argumentointia."
        },
        {
          "id": "c",
          "text": "Kulttuuriympäristöarvojen arvioinnissa asiantuntijatiedon asema on täysin yksiselitteinen, koska museoviranomaisten lain turvaamaa asiantuntija-asemaa ei voida suunnitteluprosessissa kyseenalaistaa."
        },
        {
          "id": "d",
          "text": "Museoviranomaisilla on kulttuuriperintökysymyksissä lain turvaama asiantuntija-asema, mutta heidän asiantuntijatietoaan voidaan tästä huolimatta kyseenalaistaa suunnitteluprosesseissa."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "85"
      },
      "explanation": "A ja B kuvaavat kaupunkikuvallisen arvottamisen yleisiä vaikeuksia. D yhdistää oikein kaksi näennäisesti ristiriitaista tietoa: museoviranomaisilla on lain turvaama asiantuntija-asema, mutta tämä ei tarkoita, ettei heidän arvioitaan käytännössä kyseenalaistettaisi. C absolutisoi asiantuntija-aseman seuraukset tavalla, jota artikkeli ei tue.",
      "learningPoint": "Varo muuttamasta vahvaakaan aineistossa esitettyä asemaa ehdottomaksi. Lain turvaama asiantuntija-asema ei tässä tarkoita, että asiantuntijatietoa aina hyväksyttäisiin tai ettei sitä voitaisi kyseenalaistaa."
    },
    {
      "id": "g-m3-q13",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista kuvaa oikein artikkelissa esitettyä suhdetta Helsinki Gardenin mittakaavan ja hankkeen taloudellisen kannattavuuden välillä?",
      "options": [
        {
          "id": "a",
          "text": "Hankkeen suuri mittakaava johtui ensisijaisesti liikuntapaikkojen tilallisista vaatimuksista, minkä vuoksi kaupunkikuvallista yhteensovittamista voitiin tehdä lähinnä julkisivuratkaisuilla."
        },
        {
          "id": "b",
          "text": "Hankkeen mittakaava liittyi kaupunkikehitysdiskurssissa sijoittajan taloudellisiin tarpeisiin, ja erityisesti maanpäällisiä neliöitä sekä korkeaa rakentamista tarvittiin tuottaviin toimintoihin ja asumiseen."
        },
        {
          "id": "c",
          "text": "Hankkeen mittakaavan pienentämistä pidettiin taloudellisesti ongelmattomana, koska asuminen ja liiketilat muodostivat vain vähäisen osan kokonaisuudesta."
        },
        {
          "id": "d",
          "text": "Korkean rakentamisen tarve perustui sekä suojelu- että kaupunkikehitysdiskurssissa ensisijaisesti monitoimiareenan ja muiden liikuntatilojen vaatimiin tilaratkaisuihin."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "99"
      },
      "explanation": "B yhdistää oikein hankkeen mittakaavan, taloudellisen kannattavuuden ja korkean rakentamisen tarkoituksen. Artikkelissa mittakaava ei näyttäydy vain arkkitehtonisena ratkaisuna, vaan se kytkeytyy tuottavien maanpäällisten neliöiden tarpeeseen. A ja D vaihtavat korkean rakentamisen perusteen liikuntapaikkojen tilavaatimuksiin, vaikka artikkelissa nimenomaan todetaan, etteivät ne edellyttäneet korkeaa rakentamista.",
      "learningPoint": "Tarkista, mihin tarkoitukseen jokin aineistossa kuvattu ratkaisu liittyy. Oikeiden käsitteiden esiintyminen vaihtoehdossa ei riitä, jos niiden välinen yhteys on väärä."
    },
    {
      "id": "g-m3-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta Helsinki Gardenin suunnitteluprosessin osallistamisesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Varsinainen julkinen kuuleminen käynnistyi vasta sen jälkeen, kun hankkeen sijaintia ja volyymia koskevat keskeiset ratkaisut oli jo tehty."
        },
        {
          "id": "b",
          "text": "Kaupunki perusteli julkisen keskustelun lykkäämistä sillä, että hanke oli vielä liian varhaisessa vaiheessa."
        },
        {
          "id": "c",
          "text": "Suunnitteluvarausmenettely varmisti artikkelin mukaan sen, että avoin demokraattinen osallistuminen tapahtui ennen hankkeen keskeisten tavoitteiden määrittämistä."
        },
        {
          "id": "d",
          "text": "Johtopäätöksissä suunnitteluprosessi liitetään ongelmaan, jossa menettely voi näyttää muodollisesti vuorovaikutteiselta, vaikka ratkaisevia suunnittelupäätöksiä on tehty ennen osallisten kuulemista."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "91"
      },
      "explanation": "A ja B kuvaavat hankkeen alkuvaiheen tapahtumia, kun taas D yhdistää nämä tapahtumat artikkelin myöhempään tulkintaan suunnitteluprosessin vuorovaikutteisuudesta. C kääntää suhteen päinvastaiseksi: artikkelissa suunnitteluvarausmenettelyyn liittyväksi ongelmaksi tunnistetaan juuri avoimen ja riippumattoman päätöksenteon sekä etukäteen määriteltyjen tavoitteiden välinen jännite.",
      "learningPoint": "Tarkista tapahtumien järjestys. Olennaista on hahmottaa, mitä oli päätetty ennen osallistamistaja mitä tapahtui vasta julkisen kuulemisen alettua."
    },
    {
      "id": "g-m3-q15",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelissa esitettyä eroa siinä, miten suojeludiskurssi ja kaupunkikehitysdiskurssi ymmärsivät Helsinki Gardenin kaupunkikuvallisen yhteensopivuuden?",
      "options": [
        {
          "id": "a",
          "text": "Molemmat diskurssit pitivät olemassa olevan ympäristön arvoja suunnittelun sitovina lähtökohtina, mutta erosivat siinä, kuinka paljon korkeaa rakentamista alueelle voitiin sallia."
        },
        {
          "id": "b",
          "text": "Suojeludiskurssi korosti olemassa olevan ympäristön kulttuurisia ja visuaalisia arvoja suunnittelun reunaehtoina, kun taas kaupunkikehitysdiskurssissa kaupunkikuva voitiin nähdä enemmän uuden rakennuksen ominaisuutena ja arkkitehtuurilla ratkaistavana tehtävänä."
        },
        {
          "id": "c",
          "text": "Suojeludiskurssi painotti uuden rakennuksen taiteellista itsenäisyyttä, kun taas kaupunkikehitysdiskurssi edellytti visuaalista jatkuvuutta Töölön olemassa olevan rakennuskannan kanssa."
        },
        {
          "id": "d",
          "text": "Diskurssien välinen ero koski ensisijaisesti sitä, tunnustettiinko Olympiastadionilla kulttuurihistoriallista arvoa, sillä vain suojeludiskurssissa tällaisia arvoja pidettiin olemassa olevina."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98"
      },
      "explanation": "B edellyttää kahden diskurssin peruslähtökohtien vertaamista. Ero ei ollut vain siinä, kuinka suuri rakennus hyväksyttiin, vaan syvemmällä siinä, mitä kaupunkikuvallisella yhteensopivuudella ylipäätään tarkoitettiin. C vaihtaa diskurssien ominaisuudet keskenään. D puolestaan kaventaa laajemman arvokonfliktin yhteen kysymykseen Olympiastadionin arvosta.",
      "learningPoint": "Vertaa kahden näkökulman lähtöoletuksia äläkä vain yksittäisiä kannanottoja. Tarkista erityisesti, kumpi näkökulma liittää kaupunkikuvan olemassa olevaan ympäristöön ja kumpi uuden rakennuksen ominaisuuksiin."
    },
    {
      "id": "g-m3-q16",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä voidaan perustella artikkelin perusteella Helsinki Gardenin kaupunkikuvallisesta sopeuttamisesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hanketta pienennettiin kaavaprosessin aikana, mutta kirjoittajien mukaan muutokset jäivät vähäisiksi suhteessa sijoituspaikkaa ja massoittelua koskeviin perusratkaisuihin."
        },
        {
          "id": "b",
          "text": "Hallinto-oikeus katsoi, että kulttuurihistorialliset, rakennustaiteelliset ja maisemalliset arvot oli kaavaratkaisussa turvattu riittävästi."
        },
        {
          "id": "c",
          "text": "Kirjoittajat ja hallinto-oikeus päätyivät samaan arvioon siitä, että rakennuksen ulkoasua koskevat yksityiskohtaiset määräykset ratkaisivat hankkeen keskeiset kaupunkikuvalliset ongelmat."
        },
        {
          "id": "d",
          "text": "Hyväksytyssä ratkaisussa rakennus jäi madaltamisen jälkeen sekä vanhan jäähallin että Olympiastadionin korkeuden alapuolelle."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "93–94"
      },
      "explanation": "A vastaa kirjoittajien omaa arviota ja B hallinto-oikeuden kantaa. Tehtävän keskeinen ansa on C: sekä hallinto-oikeus että kirjoittajat käsittelevät samoja kaavamääräyksiä, mutta arvioivat niiden merkityksen eri tavoin. D on väärin, sillä rakennus kohosi edelleen yli vanhan jäähallin ja Töölön korttelirakenteen sekä myös Olympiastadionin yläpuolelle.",
      "learningPoint": "Erota toisistaan aineistossa referoitu ulkopuolisen toimijan kanta ja artikkelin kirjoittajien oma arvio. Sama asia voi esiintyä molemmissa, mutta siitä tehty johtopäätös voi olla erilainen."
    },
    {
      "id": "g-m3-q17",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Tosi vai epätosi? Artikkelin perusteella kaupungin muuttuminen Helsinki Garden -hankkeen aktiiviseksi tukijaksi tarkoitti, että se luopui prosessin aikana sekä osasta aiemmin korostamiaan taloudellisia periaatteita että kirjoittajien tulkinnan mukaan kaupunkikuvallisten arvojen valvojan roolista.",
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
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "97 ja 99"
      },
      "explanation": "Väitteen ratkaiseminen edellyttää kaupungin roolin muutoksen yhdistämistä sen konkreettisiin toimiin. Taloudellisella puolella kaupunki luopui myöhemmin markkinahintaisuuden vaatimuksesta. Samalla kirjoittajat tulkitsevat kaupungin siirtyneen kaupunkikuvaa valvovasta asemasta hankkeen kumppaniksi ja aktiiviseksi tukijaksi.",
      "learningPoint": "Yhdistä kaksi samaa kehityskulkua kuvaavaa tietoa ja arvioi, vastaako niitä tiivistävä kokonaisväite aineistoa. Tehtävää ei ratkaista yhden ilmauksen tunnistamisella."
    },
    {
      "id": "g-m3-q18",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Mikä seuraavista kuvaa parhaiten artikkelissa esitettyä yhteyttä suunnitteluvarausmenettelyn ja Helsinki Garden -hankkeen demokraattisen päätöksenteon välillä?",
      "options": [
        {
          "id": "a",
          "text": "Suunnitteluvarausmenettely lisäsi yksityisen toimijan mahdollisuuksia osallistua suunnitteluun, mutta samalla hankkeen keskeisiä tavoitteita voitiin määrittää jo ennen varsinaista kaavoitusta ja julkista osallistamista."
        },
        {
          "id": "b",
          "text": "Suunnitteluvarausmenettely siirsi asemakaavan laatimisen kokonaan Projekti GH:lle, jolloin kaupungilla ei enää ollut muodollista päätösvaltaa kaavan sisällöstä."
        },
        {
          "id": "c",
          "text": "Suunnitteluvarausmenettely varmisti, että hankkeen sijaintia ja laajuutta koskevat ratkaisut tehtiin vasta julkisen kuulemisen jälkeen, jolloin sopimusmenettely ei rajoittanut kaavoituksen riippumattomuutta."
        },
        {
          "id": "d",
          "text": "Suunnitteluvarausmenettelyn ongelma liittyi artikkelin mukaan ensisijaisesti siihen, ettei Helsinki omistanut hankkeen suunnittelualuetta ja joutui siksi neuvottelemaan maanomistajan kanssa."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "82–83"
      },
      "explanation": "A yhdistää suunnitteluvarausmenettelyn kaksi artikkelissa kuvattua puolta: se parantaa yksityisen kiinteistökehittäjän mahdollisuuksia osallistua suunnitteluprosessiin, mutta samalla varausvaiheessa voidaan määritellä pitkälle myöhemmän asemakaavan suuntaviivoja. Helsinki Gardenissa tätä ongelmaa konkretisoi se, että tavoitteita oli jo lyöty lukkoon ennen osallistamista. B menee liian pitkälle: kaavoitusta ei siirretty kokonaan yksityiselle toimijalle. C kääntää tapahtumajärjestyksen päinvastaiseksi, ja D on väärin, koska kyse oli nimenomaan kunnan omistamasta alueesta.",
      "learningPoint": "Erota toisistaan vaikutusvallan vahvistuminen ja päätösvallan täydellinen siirtyminen. Se, että yksityinen toimija saa vahvan aseman suunnittelun alkuvaiheessa, ei tarkoita, että muodollinen kaavoitusvalta olisi kokonaan siirtynyt sille."
    },
    {
      "id": "g-m3-q19",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin johtopäätöksiä Helsinki Gardenin mittakaavasta, kaupunkikuvasta ja hankkeen taloudellisista lähtökohdista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suojeludiskurssissa hankkeen massoittelu ja volyymi nähtiin keskeisinä ongelmina, joita ei voitu enää myöhemmällä arkkitehtonisella hienosäädöllä ratkaista."
        },
        {
          "id": "b",
          "text": "Kaupunkikehitysdiskurssissa hankkeen suuri mittakaava liittyi olennaisesti sijoittajan taloudelliseen yhtälöön ja tuottavien neliöiden tarpeeseen."
        },
        {
          "id": "c",
          "text": "Kaupunkikuvallisen yhteensopivuuden vahvempi huomioiminen olisi kirjoittajien mukaan voitu toteuttaa ilman vaikutusta hankkeen taloudelliseen yhtälöön."
        },
        {
          "id": "d",
          "text": "Kirjoittajien mukaan arkkitehtikilpailu haastoi tehokkaasti hankkeen sijoittajavetoisesti määrätyn laajuuden ja johti kaupunkikuvallisten reunaehtojen asettamiseen taloudellisten tavoitteiden edelle."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "98–99"
      },
      "explanation": "A ja B yhdistävät saman konfliktin kaksi eri puolta. Suojeludiskurssissa ongelma oli erityisesti rakennuksen mittakaavassa ja massoittelussa, kun taas kaupunkikehitysdiskurssissa juuri mittakaava liittyi hankkeen taloudelliseen toimivuuteen. C on väärin, koska artikkelissa todetaan nimenomaisesti kaupunkikuvan mittakaavallisen huomioimisen vaikuttaneen taloudelliseen yhtälöön. D kääntää kirjoittajien tulkinnan arkkitehtikilpailusta päinvastaiseksi.",
      "learningPoint": "Tarkista usean tekijän välinen suhde: mikä oli kaupunkikuvallinen ongelma, mikä oli taloudellinen tavoite ja miksi niiden yhteensovittaminen oli vaikeaa. Vaihtoehto voi sisältää oikeat käsitteet mutta esittää niiden välisen suhteen väärin."
    },
    {
      "id": "g-m3-q20",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kokonaispäätelmistä vastaa parhaiten artikkelin analyysia siitä, miksi kaupunkikuvan vaaliminen jäi Helsinki Garden -prosessissa taloudellisten ja kaupunkikehityksellisten tavoitteiden varjoon?",
      "options": [
        {
          "id": "a",
          "text": "Kaupunkikuvallisia arvoja ei tunnistettu hankkeen missään vaiheessa, minkä vuoksi niitä ei voitu sisällyttää suunnitteluun tai päätöksentekoon."
        },
        {
          "id": "b",
          "text": "Kaupunkikuvalliset ongelmat tunnistettiin, mutta hankkeen keskeiset sijaintia ja mittakaavaa koskevat ratkaisut oli pitkälti määritelty jo varhaisessa vaiheessa, minkä jälkeen niitä pyrittiin sovittamaan ympäristöön lähinnä arkkitehtonisin keinoin samalla kun kaupunki vahvisti rooliaan hankkeen tukijana."
        },
        {
          "id": "c",
          "text": "Kaupunkikuvan vaaliminen jäi sivuun ensisijaisesti siksi, että hallinto-oikeus kielsi kaupunkikuvallisten ja kulttuurihistoriallisten näkökohtien käyttämisen asemakaavan arviointiperusteina."
        },
        {
          "id": "d",
          "text": "Kaupunkikuvalliset tavoitteet ja sijoittajan taloudelliset tavoitteet saatiin prosessin loppuvaiheessa sovitettua yhteen, koska hankkeen rakennusvolyymia pienennettiin olennaisesti ja kaupunki palasi riippumattoman valvojan rooliin."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "helsinki-garden-ja-kamppailu-kaupunkikuvasta",
        "page": "97–100"
      },
      "explanation": "B yhdistää artikkelin johtopäätösten kolme toisiinsa liittyvää havaintoa: hankkeen keskeisiä ratkaisuja tehtiin jo varhain, kaupunkikuvallisia ongelmia pyrittiin tämän jälkeen ratkaisemaan muuttamatta olennaisesti hankkeen peruslähtökohtia, ja samalla kaupungin rooli muuttui hanketta aktiivisesti tukevaksi. A on liian ehdoton, sillä kaupunkikuvallisia ongelmia tunnistettiin useissa vaiheissa. C vääristää hallinto-oikeuden kannan, ja D kääntää sekä hankkeen sopeuttamista että kaupungin roolin muutosta koskevat johtopäätökset päinvastaisiksi.",
      "learningPoint": "Yhdistä muutama samaan kokonaisuuteen kuuluva havainto ja arvioi, mikä vaihtoehto tiivistää niiden välisen yhteyden muuttamatta artikkelin johtopäätöstä. Älä valitse vaihtoehtoa vain siksi, että sen yksittäiset käsitteet löytyvät aineistosta."
    }
  ]
} satisfies ValintakoeGExercise;
