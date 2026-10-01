import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 1 on muodostettu käyttäjän toimittamasta KESKIVAIKEAT TEHTÄVÄT VALINTAKOE G -dokumentista.
 * Kysymysten sanamuotoja tai vastausvaihtoehtoja ei ole muokattu.
 */
export const valintakoeGMediumExercise1Base = {
  "id": "keskivaikea-harjoitus-1",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 1 – Pyhä, paha turve: pyhyys ja perintö energiaturvetuotannon alasajon yhteydessä käytetyissä diskursseissa 2020-luvun Suomessa",
  "description": "35 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 35,
  "difficulty": "medium",
  "articleId": "pyha-paha-turve",
  "articleTitle": "Pyhä, paha turve: pyhyys ja perintö energiaturvetuotannon alasajon yhteydessä käytetyissä diskursseissa 2020-luvun Suomessa",
  "articleUrl": "https://aluejaymparisto.journal.fi/article/view/176212/125925",
  "questions": [
    {
      "id": "g-m1-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta energiaturpeen tuotannon vähenemisestä ja siihen vaikuttaneista tekijöistä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hallituksen tavoitteena oli puolittaa energiaturpeen tuotanto vuoteen 2030 mennessä, mutta puolittuminen toteutui tavoiteltua nopeammin."
        },
        {
          "id": "b",
          "text": "Venäjän hyökkäys Ukrainaan vauhditti energiaturpeen käytön vähenemistä, koska turpeen merkitys huoltovarmuuspolttoaineena pieneni."
        },
        {
          "id": "c",
          "text": "Energiaturpeen veronkorotus liittyi hallituksen hiilineutraalisuustavoitteeseen, ja Suomessa energiaturve luokitellaan uusiutumattomaksi energialähteeksi."
        },
        {
          "id": "d",
          "text": "Vuonna 2024 energiaturpeella tuotetun energian määrä oli alle puolet vuoden 2020 määrästä."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "67"
      },
      "explanation": "A on oikein, koska tuotannon puolittuminen tapahtui selvästi ennen tavoitevuotta 2030. C yhdistää oikein kaksi tietoa: veronkorotuksen taustalla olleen ilmastotavoitteen ja turpeen luokittelun uusiutumattomaksi energialähteeksi. D edellyttää lukujen vertaamista: reilut 5500 GWh on alle puolet lähes 12 000 GWh:sta. B kääntää Venäjän hyökkäyksen vaikutuksen väärään suuntaan. Artikkelin mukaan hyökkäys korosti turpeen roolia huoltovarmuuspolttoaineena, minkä vuoksi vuoden 2024 lukema olisi ilman hyökkäystä todennäköisesti ollut vielä pienempi.",
      "learningPoint": "Tarkista tapahtuman vaikutuksen suunta. Sama tapahtuma voidaan mainita sekä kysymyksessä että aineistossa, vaikka vaihtoehdossa sen vaikutus olisi käännetty päinvastaiseksi."
    },
    {
      "id": "g-m1-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Artikkelin käyttämien käsitteiden perusteella perinne ja perintö tarkoittavat käytännössä samaa asiaa: molemmissa on kyse menneisyydestä periytyvistä ilmiöistä, joita pidetään ryhmän identiteetin ja kulttuurin kannalta luovuttamattomina.",
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
        "articleId": "pyha-paha-turve",
        "page": "68"
      },
      "explanation": "Väite sisältää aluksi yhteisen piirteen: sekä perinne että perintö voivat liittyä menneisyydestä nouseviin ilmiöihin. Ratkaiseva ero syntyy kuitenkin niiden merkityksestä identiteetille ja kulttuurille. Artikkeli nimenomaan erottaa käsitteet toisistaan: perintöön liittyy luovuttamattomaksi koettu merkitys, kun taas perinteeseen ei välttämättä liity tällaista asemaa.",
      "learningPoint": "Kaksi läheistä käsitettä voivat jakaa ominaisuuksia, mutta kaikkia toisen käsitteen ominaisuuksia ei saa siirtää toiselle. Tarkista siis, mihin käsitteeseen tietty ominaisuus tekstissä liitetään."
    },
    {
      "id": "g-m1-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista kuvaa parhaiten sitä, miten perintöteoria ja pyhäteoria täydentävät toisiaan artikkelin energiaturvetuotantoa koskevassa tarkastelussa?",
      "options": [
        {
          "id": "a",
          "text": "Perintöteoria selittää ensisijaisesti alasajon herättämiä voimakkaita tunteita, kun taas pyhäteoria sijoittaa turvetuotannon sosiohistorialliseen kontekstiin."
        },
        {
          "id": "b",
          "text": "Perintöteoria auttaa konkretisoimaan turvetuotantoon sosiohistoriallisesti liitettyjä merkityksiä, kun taas pyhäteoria auttaa tulkitsemaan voimakkaita tunteita pyhien rajojen loukkaamisen kautta."
        },
        {
          "id": "c",
          "text": "Perintöteoria tarkastelee turvetuotantoa pääasiassa aineellisena kulttuuriperintönä, kun taas pyhäteoria rajaa tarkastelun turvetuotannon uskonnollisiin merkityksiin."
        },
        {
          "id": "d",
          "text": "Molemmat teoriat selittävät turvetuotannon alasajoa samalla tavalla, minkä vuoksi niiden yhdistäminen ennen kaikkea vahvistaa saman tulkinnan kahden eri käsitteen avulla."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "70"
      },
      "explanation": "B säilyttää molempien käsitteiden tehtävät oikeassa suhteessa. Perintöteoria auttaa hahmottamaan, millaisia historiallisesti ja yhteisöllisesti rakentuneita merkityksiä turvetuotantoon liittyy. Pyhäteoria puolestaan syventää tätä selittämällä, miksi näihin merkityksiin puuttuminen voi herättää voimakkaita reaktioita. A käyttää samoja oikeita elementtejä mutta vaihtaa teorioiden tehtävät keskenään. C on väärin, koska artikkelissa perintö ymmärretään ensisijaisesti kulttuurisena prosessina eikä pyhyyttä rajata uskonnolliseen viitekehykseen. D taas häivyttää teorioiden erilaiset analyyttiset tehtävät.",
      "learningPoint": "Kun aineistossa esitellään kaksi käsitettä ja niille eri tehtävät, tarkista tarkasti mikä tehtävä kuuluu millekin käsitteelle. Häiriövaihtoehto voi sisältää täysin oikeat tiedot mutta yhdistää ne väärin päin."
    },
    {
      "id": "g-m1-q4",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Mikä seuraavista EI vastaa artikkelin kuvausta tutkimuksen aineistosta ja sen käyttöön liittyvistä rajoituksista?",
      "options": [
        {
          "id": "a",
          "text": "Turvetuotannossa mukana olleiden näkemyksiä tarkastellaan sekä tutkimusten että populaarien tietokirjojen kautta."
        },
        {
          "id": "b",
          "text": "Osa turvetyöntekijöiden kokemuksia kuvaavasta aineistosta on toisen käden tietoa, koska tutkijat ja kirjailijat ovat tehneet valintoja siitä, ketkä ja mitkä sitaatit aineistoon päätyvät."
        },
        {
          "id": "c",
          "text": "Kirjoittaja pitää käytettyjä sitaatteja täysin ongelmattomana ensikäden aineistona, koska haastateltavien kokemukset on tallennettu ennen energiaturvetuotannon alasajoa."
        },
        {
          "id": "d",
          "text": "Kirjoittaja tunnistaa aineiston episteemisen ongelman mutta perustelee sen käyttöä sillä, ettei vuosien takaisista tapahtumista ole enää mahdollista saada ajantasaista ensikäden tietoa."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "70"
      },
      "explanation": "C on ainoa vaihtoehto, joka ei vastaa aineistoa. Kirjoittaja ei pidä aineistoa ongelmattomana eikä ensikäden tietona, vaan tunnistaa nimenomaisesti sen episteemisen ongelman. A, B ja D muodostavat yhdessä artikkelissa esitetyn kokonaisuuden: aineistoa tarvitaan turvetyöntekijöiden kokemusten tarkasteluun, mutta sen kuratoitu ja toisen käden luonne täytyy ottaa huomioon. Tehtävässä ei siis riitä sen löytäminen, että kirjoittaja käyttää aiempia tutkimuksia. Ratkaisussa pitää yhdistää aineiston alkuperä, siihen liittyvä ongelma ja kirjoittajan perustelu sen käyttämiselle.",
      "learningPoint": "Kiinnitä huomiota ilmauksiin kuten ”täysin ongelmaton”. Jos kirjoittaja itse tuo esiin aineiston rajoituksia ja epävarmuuksia, vaihtoehto ei voi muuttaa suhtautumista ehdottomaksi."
    },
    {
      "id": "g-m1-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta suomalaisten suosuhteen muuttumisesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Työnteon eetosta korostava suhtautuminen suohon oli hallitseva vähintään 1900-luvun puoliväliin asti, mutta vuosituhannen vaihdetta lähestyttäessä vapaa-ajan ja virkistyskäytön merkitys vahvistui."
        },
        {
          "id": "b",
          "text": "Turpeen arvostus energialähteenä voimistui 1970-luvun öljykriisin seurauksena, ja samantapainen turpeen profiilin nousu tapahtui Venäjän hyökättyä Ukrainaan vuonna 2022."
        },
        {
          "id": "c",
          "text": "Turvetuotannon huippuvuodet sijoittuivat 1970-luvulle, minkä jälkeen tuotanto- ja käyttömäärät alkoivat vähentyä tasaisesti."
        },
        {
          "id": "d",
          "text": "Suon arvostaminen itsessään ja turvetuotannon arvostaminen sulkevat artikkelin mukaan toisensa käytännössä pois."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "72"
      },
      "explanation": "A yhdistää oikein kaksi eri ajankohtaa ja niihin liittyvät hallitsevat tavat merkityksellistää suota. B puolestaan yhdistää kaksi kriisitilannetta, joissa turpeen asema vahvistui. C käyttää artikkelissa mainittua 1970-lukua, mutta liittää siihen väärän kehitysvaiheen: öljykriisi vahvisti turpeen arvostusta, mutta tuotannon huippuvuodet tulivat myöhemmin. D on väärin, sillä artikkelissa korostetaan nimenomaan, etteivät erilaiset arvottamisen tavat sulje toisiaan pois.",
      "learningPoint": "Samassa tekstikohdassa voidaan mainita useita ajanjaksoja ja kehitysvaiheita. Tarkista, mikä tapahtuma kuuluu mihinkin ajankohtaan."
    },
    {
      "id": "g-m1-q6",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Artikkelin diskurssianalyyttisen lähestymistavan perusteella aineistosta tunnistetut diskurssit ovat valmiina aineistossa olevia merkityskokonaisuuksia, jotka tutkijan tehtävänä on paikantaa mahdollisimman objektiivisesti ilman niiden tulkinnallista rakentamista.",
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
        "articleId": "pyha-paha-turve",
        "page": "71"
      },
      "explanation": "Väitteen ensimmäinen osa muistuttaa artikkelin diskurssin määritelmää: diskurssit ovat jaettuja ja vakiintuneita merkityssuhteiden kokonaisuuksia. Väite muuttuu kuitenkin vääräksi, kun tästä päätellään niiden löytyvän aineistosta sellaisinaan. Artikkeli tekee nimenomaisen eron aineistossa olevien selontekojen ja tutkijan tulkinnassa muodostuvien diskurssienvälille. Opiskelijan täytyy siis yhdistää diskurssin määritelmä siihen, miten diskurssit tutkimuksessa tunnistetaan.",
      "learningPoint": "Älä arvioi pitkää väitettä vain sen alun perusteella. Tarkista, vastaako koko väitteen tiivistämä tutkimusprosessi aineistossa kuvattua lähestymistapaa."
    },
    {
      "id": "g-m1-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein artikkelissa tunnistettujen diskurssien keskinäisiä suhteita? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hallituksen ohjelmasta, lakiesityksestä, selvityksistä ja eduskuntakeskusteluista tunnistettiin ilmasto-, talous-, huoltovarmuus- ja oikeudenmukaisuusdiskurssit."
        },
        {
          "id": "b",
          "text": "Traditiodiskurssi esiintyi turvetuotantoa puolustavissa puheenvuoroissa ja sisälsi ainakin osittain myös muiden diskurssien ominaisuuksia."
        },
        {
          "id": "c",
          "text": "Kaupungin ja maaseudun vastakkainasettelu tunnistettiin sekä hallituksen aineistojen että turvetuotantoa puolustavien puheenvuorojen yhteiseksi itsenäiseksi diskurssiksi."
        },
        {
          "id": "d",
          "text": "Artikkelissa diskurssit käsitellään analyyttisesti erillisinä, vaikka kirjoittaja toteaa niiden olevan usein päällekkäisiä."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "73"
      },
      "explanation": "A edellyttää sen tarkistamista, mistä aineistoista neljä diskurssia tunnistettiin. B puolestaan edellyttää traditiodiskurssin erityisaseman ymmärtämistä: se ei ole vain yksi täysin irrallinen diskurssi muiden joukossa, vaan siihen yhdistyy muiden diskurssien ominaisuuksia. D on oikein, koska päällekkäisyys ja analyyttinen erottelu voivat toteutua samanaikaisesti. C sekoittaa kaksi aineistokokonaisuutta: kaupungin ja maaseudun vastakkainasettelu nostetaan esiin nimenomaan turvetuotantoa puolustavien puheenvuorojen yhteydessä.",
      "learningPoint": "Tarkista sekä mitä diskursseja tunnistettiin että mistä aineistokokonaisuudesta ne tunnistettiin. Oikea käsite voi tehdä vaihtoehdosta väärän, jos se liitetään väärään aineistoon tai toimijaryhmään."
    },
    {
      "id": "g-m1-q8",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista päätelmistä vastaa parhaiten artikkelin ilmastodiskurssia koskevaa analyysia?",
      "options": [
        {
          "id": "a",
          "text": "Turpeen energiakäytön vastustaminen perustui ensisijaisesti turpeeseen itsessään liittyviin kielteisiin kulttuurisiin merkityksiin, minkä vuoksi turpeen päästöjen määrä oli argumentaatiossa toissijainen."
        },
        {
          "id": "b",
          "text": "Ilmastodiskurssissa turpeen käytön vähentäminen kytkeytyi fossiilisten polttoaineiden päästöihin, ja jos turve olisi ollut päästönsä sitova uusiutuva polttoaine, veronkorotukselle ei artikkelin mukaan olisi ollut samaa perustetta."
        },
        {
          "id": "c",
          "text": "Hallituksen tavoitteena oli kieltää turvetuotanto kokonaan, mutta oikeudenmukaisen siirtymän tavoite johti siihen, että osa energiaturvetuotannosta päätettiin sallia 2030-luvun jälkeen."
        },
        {
          "id": "d",
          "text": "Ilmastodiskurssi yhdisti turpeen käytön ensisijaisesti huoltovarmuuteen ja työntekoon, mutta näiden arvojen katsottiin olevan ilmastotavoitteita vähemmän merkityksellisiä."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "74–75"
      },
      "explanation": "B yhdistää kaksi ilmastodiskurssin kannalta olennaista tietoa: veronkorotuksen ilmastoperusteen sekä sen, ettei vastustus kohdistunut turpeeseen sinänsä vaan fossiilisen polttoaineen käytöstä aiheutuviin päästöihin. A muuttaa argumentin kohdetta päästöistä turpeeseen itsessään. C menee liian pitkälle: hallituksen tavoitteena ei ollut turvetuotannon välitön täydellinen kieltäminen, ja artikkeli nimenomaan huomauttaa, ettei tuotantoa lainsäädännöllä kielletty. D puolestaan liittää ilmastodiskurssiin asioita, jotka siinä jätettiin taka-alalle: artikkelin mukaan turpeenkäyttö yhdistettiin ilmastodiskurssissa kasvihuonekaasupäästöihin ja ilmastonmuutokseen, ei työntekoon, talouskasvuun tai huoltovarmuuteen.",
      "learningPoint": "Selvitä, mihin asiaan argumentti todellisuudessa kohdistuu. Turve, turpeen polttaminen ja siitä aiheutuvat päästöt ovat läheisiä asioita, mutta niitä ei voi käsitellä väitteessä keskenään vaihdettavina."
    },
    {
      "id": "g-m1-q9",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mitkä seuraavista kuvaavat oikein sitä, miten turvetuotannon puolustajat käyttivät ilmastodiskurssia vastadiskurssina? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Turvetuotannon puolustajat nostivat esiin sekä turpeen korvaamisesta aiheutuvia päästöjä että turpeen kiistanalaista asemaa uusiutumattomana polttoaineena."
        },
        {
          "id": "b",
          "text": "Vastadiskurssissa ilmaston ja ympäristön merkitys kiistettiin, ja turvetuotannon jatkamista perusteltiin niiden sijaan yksinomaan taloudellisilla hyödyillä."
        },
        {
          "id": "c",
          "text": "Vastadiskurssin arvopohja oli ilmaston osalta sama kuin valtadiskurssissa, mutta sen perusteella päädyttiin erilaiseen tulkintaan siitä, kumpi toimintatapa olisi ilmaston kannalta parempi."
        },
        {
          "id": "d",
          "text": "Kirjoittajan mukaan turvetuotannon puolustajien vaihtoehtoinen ilmastotulkinta vastasi tutkimustietoa paremmin kuin valtadiskurssin tulkinta."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "76"
      },
      "explanation": "A tunnistaa kaksi artikkelissa erikseen mainittua vastadiskurssin argumenttia. C vaatii lisäksi ymmärtämään tärkeän eron arvon ja siitä tehdyn johtopäätöksen välillä: molemmat diskurssit voivat vedota ilmaston suojelemiseen, vaikka ne päätyvät eri käsitykseen oikeasta toimintatavasta. B on väärin, koska vastadiskurssi ei hylännyt ilmastoarvoa vaan käytti sitä oman tulkintansa perustelemiseen. D puolestaan kääntää kirjoittajan arvion päinvastaiseksi.",
      "learningPoint": "Erota toisistaan argumentin arvopohja, käytetty perustelu ja siitä tehty johtopäätös. Sama arvo voi toimia kahden vastakkaisen argumentin lähtökohtana."
    },
    {
      "id": "g-m1-q10",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa parhaiten talousdiskurssin argumentaation rakennetta artikkelissa?",
      "options": [
        {
          "id": "a",
          "text": "Turvetuotannon taloudellisia menetyksiä käsiteltiin ensisijaisesti yksittäisten yrittäjien henkilökohtaisena ongelmana, eikä niitä pyritty yhdistämään laajempiin yhteiskunnallisiin vaikutuksiin."
        },
        {
          "id": "b",
          "text": "Turvetuotannon investointeja, työllisyysvaikutuksia ja kustannuksia korostamalla taloudelliset seuraukset voitiin esittää laajemmin ymmärrettävinä, ja samalla omaisuudensuoja sekä elinkeinonvapaus näyttäytyivät erityisinä suojeltavina asioina."
        },
        {
          "id": "c",
          "text": "Talousdiskurssin keskeisenä tavoitteena oli osoittaa, että turvetuotanto muodosti niin suuren osan Suomen kansantaloudesta, ettei sen alasajo ollut taloudellisesti mahdollista."
        },
        {
          "id": "d",
          "text": "Talousdiskurssi erotettiin traditiodiskurssista täysin, koska taloudellisten hyötyjen ei katsottu liittyvän alueelliseen identiteettiin tai turvetuotannon perintömerkityksiin."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "76–77"
      },
      "explanation": "B yhdistää talousdiskurssin kaksi tasoa. Konkreettiset investoinnit, työpaikat ja tappiot tekivät argumentista ymmärrettävän myös alan ulkopuolisille, mutta kirjoittaja tulkitsee diskurssia lisäksi pyhän ja perinnön näkökulmasta. A jättää tämän laajentamisen huomiotta. C tekee liian pitkälle menevän päätelmän turvetuotannon kansantaloudellisesta merkityksestä. D on väärin, koska artikkelissa talousdiskurssin alueelliset merkitykset voivat nimenomaan linkittyä traditiodiskurssiin.",
      "learningPoint": "Yhdistä konkreettiset esimerkit kirjoittajan niistä tekemään tulkintaan. Pelkkä investointien tai työpaikkojen löytäminen ei vielä ratkaise tehtävää."
    },
    {
      "id": "g-m1-q11",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Artikkelin perusteella huoltovarmuusdiskurssin merkitys liittyi vain 2020-luvun alun kriiseihin, eikä huoltovarmuutta ollut käytetty turpeenkäytön puolustamiseen ennen koronapandemiaa ja maailmanpoliittisen tilanteen epävakautumista.",
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
        "articleId": "pyha-paha-turve",
        "page": "77"
      },
      "explanation": "Väitteessä yhdistetään kaksi sinänsä oikeaa asiaa väärällä tavalla. Kriisit korostivat huoltovarmuusargumentin merkitystä, mutta tästä ei seuraa, että argumentti olisi syntynyt vasta kriisien seurauksena. Ratkaiseva ero on siis olemassaolon ja merkityksen vahvistumisen välillä. Artikkelin mukaan huoltovarmuus oli jo ennestään turpeenkäyttöä puolustava argumentti.",
      "learningPoint": "Tarkista, sanotaanko ilmiön alkaneen tiettynä ajankohtana vai ainoastaan korostuneen silloin. Nämä eivät tarkoita samaa asiaa."
    },
    {
      "id": "g-m1-q12",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta huoltovarmuuden ja traditiodiskurssin yhteydestä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Huoltovarmuus yhdistyy omavaraisuuteen ja kotimaisuuteen, ja ulkomaisen polttoaineen käyttö voidaan kehystää sekä taloudelliseksi että ympäristölliseksi ongelmaksi."
        },
        {
          "id": "b",
          "text": "Turvetuotannon pitkä aikajänne sekä ammatin mahdollinen periytyminen sukupolvelta toiselle auttavat yhdistämään huoltovarmuuden traditiodiskurssiin."
        },
        {
          "id": "c",
          "text": "Traditiodiskurssissa turvetuotannon yhteiskunnallinen merkitys perustuu yksinomaan sen tuottamaan taloudelliseen hyötyyn."
        },
        {
          "id": "d",
          "text": "Turvetuotannon puolustajien näkökulmasta työ saattoi olla yhtä aikaa yhteiskunnallisesti merkityksellistä, elämäntapa ja osa työntekijän identiteettiä."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "78"
      },
      "explanation": "A kuvaa huoltovarmuusdiskurssin yhteyttä muihin diskursseihin. B yhdistää puolestaan pitkän ajallisen jatkuvuuden ja ylisukupolvisuuden traditiodiskurssiin. D tuo mukaan työn identiteetti- ja elämäntapamerkityksen. C on väärin, koska juuri traditiodiskurssin keskeinen tehtävä artikkelissa on tuoda näkyviin merkityksiä, joita ei voida palauttaa pelkästään rahalliseen hyötyyn.",
      "learningPoint": "Varo sanoja kuten ”yksinomaan”. Kun aineisto antaa samalle ilmiölle taloudellisia, yhteiskunnallisia, identiteettiin liittyviä ja ylisukupolvisia merkityksiä, yhden niistä nostaminen ainoaksi selitykseksi muuttaa aineiston sisältöä."
    },
    {
      "id": "g-m1-q13",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista kuvaa parhaiten sitä, miksi oikeudenmukaisuusdiskurssia voitiin käyttää hallituksen toimien kritisoimiseen?",
      "options": [
        {
          "id": "a",
          "text": "Hallitusohjelmassa oikeudenmukaisuus oli rajattu ensisijaisesti ilmastopolitiikan kustannusten valtakunnalliseen tasajakoon, mutta turvetuotannon alasajo poikkesi tästä tavoitteesta."
        },
        {
          "id": "b",
          "text": "Hallitusohjelmassa tavoiteltiin alueellisesti ja sosiaalisesti oikeudenmukaista turpeen energiakäytön puolittamista, mutta alasajon seuraukset kohdistuivat käytännössä epätasaisesti eri alueisiin ja väestöryhmiin."
        },
        {
          "id": "c",
          "text": "Hallitusohjelmassa ei käsitelty siirtymän oikeudenmukaisuutta, vaikka myöhemmissä energiaturpeesta luopumista koskevissa raporteissa siitä tuli keskeinen tavoite."
        },
        {
          "id": "d",
          "text": "Oikeudenmukaisuusdiskurssi perustui ensisijaisesti siihen, että energiaturpeen veronkorotus vaikutti samalla tavalla kaikkiin suomalaisiin mutta turveyrittäjät kokivat vaikutukset muita voimakkaammin."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "78–79"
      },
      "explanation": "B edellyttää kahden tiedon yhdistämistä: ensin pitää tunnistaa hallituksen oma oikeudenmukaisuustavoite ja sen jälkeen verrata sitä artikkelissa kuvattuun seurausten epätasaiseen jakautumiseen. Juuri näiden välinen ristiriita mahdollisti oikeudenmukaisuuteen vetoamisen kritiikissä. C kääntää tilanteen vääräksi, sillä oikeudenmukaisuus mainittiin jo hallitusohjelmassa. D puolestaan muuttaa kohdentumisen: seuraukset eivät artikkelin mukaan jakautuneet samalla tavalla kaikille.",
      "learningPoint": "Tarkista, millainen suhde kahden tiedon välillä on. Tässä oikeudenmukaisuus ei ollut vain kritiikin esittämä vaatimus, vaan hallituksen oma tavoite, johon kritiikki voitiin suhteuttaa."
    },
    {
      "id": "g-m1-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista vastaavat artikkelin kuvausta oikeudenmukaisuusdiskurssin ja traditiodiskurssin suhteesta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Epäoikeudenmukaisuuden kokemus liittyi taloudellisten seurausten lisäksi siihen, että turvetuottajat kokivat elinkeinonsa, ammattitaitonsa ja identiteettinsä oikeutuksen kyseenalaistetuksi."
        },
        {
          "id": "b",
          "text": "Kaupungin ja maaseudun vastakkainasettelu liittyi kokemukseen siitä, ettei kaupungeissa tehtävä päätöksenteko huomioinut riittävästi turveyrittäjien kokemusmaailmaa."
        },
        {
          "id": "c",
          "text": "Artikkelin tulkinnassa lainsäädännön muuttama turpeen asema koski vain elinkeinon yhteiskunnallista hyväksyttävyyttä eikä vaikuttanut turveyrittäjien työlleen antamiin kulttuurisiin merkityksiin."
        },
        {
          "id": "d",
          "text": "Oikeudenmukaisuuden kokemuksessa konkreettiset taloudelliset seuraukset ja identiteettiin liittyvät kysymykset saattoivat esiintyä samanaikaisesti."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "79"
      },
      "explanation": "A ja B kuvaavat oikeudenmukaisuusdiskurssin abstraktimpaa tasoa: kyse ei ollut pelkästään rahasta tai työpaikoista, vaan myös identiteetin, ammattitaidon ja elämäntavan arvostuksesta. D on siksi oikein: konkreettiset ja identiteettiin liittyvät oikeudenmukaisuuskysymykset eivät sulje toisiaan pois. C on väärin juuri tämän vuoksi. Kirjoittajan tulkinnassa kategoriasta toiseen ei siirtynyt vain elinkeino, vaan myös siihen liittyviä kulttuurisia merkityksiä.",
      "learningPoint": "Tarkista, mihin kaikkeen tekstissä kuvattu muutos kohdistuu. Taloudellista elinkeinoa koskeva muutos voi aineistossa olla yhteydessä myös identiteettiin ja kulttuurisiin merkityksiin."
    },
    {
      "id": "g-m1-q15",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista päätelmistä on artikkelin traditiodiskurssia koskevan analyysin perusteella perustelluin?",
      "options": [
        {
          "id": "a",
          "text": "Traditiodiskurssissa turvetuotannon merkitys perustuu ennen kaikkea siihen, että muuttumattomana säilynyt historiallinen työmenetelmä halutaan siirtää tuleville sukupolville."
        },
        {
          "id": "b",
          "text": "Traditiodiskurssi yhdistää turvetuotannon historiallisen työnteon ja sisun kaltaisiin merkityksiin sekä nykyisiin kokemuksiin huoltovarmuudesta, työllisyydestä ja sukupolvien jatkuvuudesta."
        },
        {
          "id": "c",
          "text": "Traditiodiskurssi tarkastelee perintöä ensisijaisesti menneisyyden säilyttämisenä, minkä vuoksi nykyhetken ja tulevaisuuden muutokset jäävät sen ulkopuolelle."
        },
        {
          "id": "d",
          "text": "Traditiodiskurssi rakentuu valtadiskurssin tavoin ajatukselle siitä, että suon säilyttäminen koskemattomana on keskeinen suomalainen kulttuuriperinnön muoto."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "79–80"
      },
      "explanation": "B vaatii yhdistämään perinnön määritelmän siihen, miten traditiodiskurssia käytännössä sovelletaan. Kyse ei ole vain menneisyydestä, vaan menneisyyden merkitysten käyttämisestä nykyhetken ja tulevaisuuden tulkitsemiseen. A kaventaa perinnön liian konkreettisesti muuttumattoman työmenetelmän säilyttämiseen. C rajaa perinnön virheellisesti vain menneisyyteen. D puolestaan siirtää valtadiskurssin suokäsityksen turvetuottajien traditiodiskurssille.",
      "learningPoint": "Yhdistä ensin käsitteen määritelmä siihen, miten käsitettä myöhemmin sovelletaan aineiston tulkintaan. Oikea vastaus ei löydy suoraan yhdestä virkkeestä."
    },
    {
      "id": "g-m1-q16",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin analyysia valtadiskurssin ja turvetuottajien traditiodiskurssin välisestä ristiriidasta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Valtadiskurssissa suo voidaan kehystää suojeltavaksi perintökohteeksi, kun taas turvetuottajien traditiodiskurssissa turvetuotanto voi itsessään edustaa suomalaisuuteen liittyviä merkityksiä."
        },
        {
          "id": "b",
          "text": "Molemmat diskurssit voivat nojata perintöön, vaikka ne määrittelevät eri tavoin sen, mikä on säilyttämisen ja suojelemisen arvoista."
        },
        {
          "id": "c",
          "text": "Turvetuottajien traditiodiskurssin ja valtadiskurssin ero johtuu artikkelin mukaan siitä, että vain turvetuottajien diskurssissa asioille annetaan pyhiä merkityksiä."
        },
        {
          "id": "d",
          "text": "Turvetuotannon alasajo saattoi turvetuottajien perinnölle antamien merkitysten näkökulmasta näyttäytyä pyhäinhäväistyksenä, jos heidän kokemansa perintö ja siihen liittyvät arvot ohitettiin."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "80"
      },
      "explanation": "Tehtävässä pitää huomata, ettei vastakkain ole yksinkertaisesti ”perintö vastaan ei-perintö”. Molemmat näkökulmat voivat merkityksellistää suon ja turvetuotannon perinnön kautta, mutta ne suojelevat eri asioita. A kuvaa tämän konkreettisen eron. B tiivistää diskurssien rakenteellisen samankaltaisuuden niiden erilaisesta sisällöstä huolimatta. D seuraa kirjoittajan pyhäteoreettisesta tulkinnasta. C on väärin, koska pyhyys ei kuulu vain turvetuottajien näkökulmaan. Artikkelissa erilaiset osapuolet voivat nimetä eri asioita pyhiksi.",
      "learningPoint": "Tässä olennaista on vertailla kahden diskurssin suhdetta samaan ilmiöön eikä olettaa niiden olevan kaikilta osin toistensa vastakohtia. Tarkista, mitä kumpikin suojelee ja millä perusteella."
    },
    {
      "id": "g-m1-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mikä seuraavista kuvaa parhaiten sitä, miten artikkelissa tulkitaan MT:n kolumnissa esitettyä yli 60 vuoden muutosta suolla?",
      "options": [
        {
          "id": "a",
          "text": "Pitkä aikajänne osoittaa ennen kaikkea, että suon taloudellinen merkitys on vähentynyt asteittain ja luonnonsuojelullinen arvo syrjäyttänyt turvetuotannon merkityksen."
        },
        {
          "id": "b",
          "text": "Suon muuttaminen turvetuotannon kautta pelloksi ja metsäksi liitetään paikalliseen taloudelliseen menestykseen ja työntekoon, ja pitkä aikajänne vahvistaa muutoksen yhteyttä traditiodiskurssiin."
        },
        {
          "id": "c",
          "text": "Kolumnissa kuvattu muutos tukee valtadiskurssin käsitystä siitä, että suon arvo perustuu ensisijaisesti sen säilyttämiseen mahdollisimman koskemattomana."
        },
        {
          "id": "d",
          "text": "Pitkä aikajänne osoittaa, että traditiodiskurssi perustuu yksinomaan sukupolvelta toiselle siirtyvään turvetuotannon ammattiin eikä laajempaan maaseudun kokemukseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "80"
      },
      "explanation": "B yhdistää kolme olennaista elementtiä: suon muuttamisen, muutokseen liitetyn taloudellisen ja arkisen merkityksen sekä pitkän ajallisen jatkumon. Juuri aikajänne tekee tapauksesta traditiodiskurssin kannalta merkityksellisen. A ja C muuttavat kolumnin tulkinnan lähes vastakkaiseksi. D puolestaan rajaa traditiodiskurssin liian kapeasti turvealan ammattilaisiin, vaikka artikkeli nimenomaan päättelee, että siihen voivat samaistua muutkin maaseudulla asuvat.",
      "learningPoint": "Tarkista, ketkä voivat aineiston mukaan jakaa tietyn diskurssin. Älä rajaa näkemystä automaattisesti vain siihen ryhmään, jonka toiminnasta diskurssi ensisijaisesti kertoo."
    },
    {
      "id": "g-m1-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Mitkä seuraavista väittämistä voidaan perustella artikkelin traditiodiskurssia koskevalla analyysilla? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Turvetuottajien perintöön liittyvät merkitykset ulottuivat toimeentulon lisäksi muun muassa ammatti-identiteettiin, paikkaidentiteettiin, luontosuhteeseen sekä kokemukseen historiasta ja jatkuvuudesta."
        },
        {
          "id": "b",
          "text": "Turvetuotannon nopea alasajo saattoi olla erityisen voimakas kokemus siksi, että kysynnän romahtaminen uhkasi samalla useita turvetuottajien itseymmärrykselle merkityksellisiä asioita."
        },
        {
          "id": "c",
          "text": "Artikkelin mukaan turvetuottajien kokema menetys johtui pääasiassa siitä, ettei energiaturvetuotannolle tarjottu taloudellisesti yhtä kannattavaa korvaavaa elinkeinoa."
        },
        {
          "id": "d",
          "text": "Traditiodiskurssiin liittyvä konflikti koskee myös sitä, kenellä on valta määritellä, miten soihin liittyviä merkityksiä, muistoja, identiteettejä ja paikkoja tulkitaan tulevaisuudessa."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "80–81"
      },
      "explanation": "A kokoaa oikein turvetuotannolle annetut erilaiset merkitykset. B edellyttää seuraavan päättelyn: jos turvetuotantoon liittyy samanaikaisesti toimeentulo, identiteetti, paikka, historia ja jatkuvuus, tuotannon nopea romahtaminen voi uhata useita itseymmärryksen rakennuspalasia yhtä aikaa. D tuo mukaan diskurssien valtakamppailun: kyse ei ole vain siitä, jatkuuko tuotanto, vaan myös siitä, kenen tapa tulkita suon ja turvetuotannon merkityksiä vakiintuu. C kaventaa artikkelin tulkinnan taloudelliseksi, vaikka juuri traditiodiskurssin avulla kirjoittaja nostaa esiin taloutta laajemmat merkitykset.",
      "learningPoint": "Varo vaihtoehtoa, joka muuttaa moniulotteisen selityksen yhdeksi pääasialliseksi syyksi. Tarkista kaikki aineistossa ilmiölle annetut merkitykset ennen johtopäätöstä."
    },
    {
      "id": "g-m1-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Mikä seuraavista päätelmistä vastaa parhaiten artikkelin lopussa esitettyä ajatusta pyhyyden ja perinnön merkityksestä yhteiskunnallisissa siirtymissä?",
      "options": [
        {
          "id": "a",
          "text": "Pyhyyden ja perinnön tunnistaminen voi auttaa ymmärtämään muutoksissa uhatuiksi koettuja merkityksiä, minkä vuoksi niiden huomioiminen saattaa helpottaa tulevien kestävyyssiirtymien toteuttamista ja vähentää polarisaatiota."
        },
        {
          "id": "b",
          "text": "Turvetuotannon tapaus osoittaa kirjoittajan mukaan, että kestävyyssiirtymistä tulisi luopua silloin, kun muutos uhkaa jonkin ammattiryhmän pyhiksi kokemia asioita."
        },
        {
          "id": "c",
          "text": "Pyhyyden ja perinnön näkökulmat soveltuvat ensisijaisesti energiaturvetuotannon tarkasteluun, koska muiden elinkeinojen muutoksissa ei synny vastaavia kulttuurisia merkityksiä."
        },
        {
          "id": "d",
          "text": "Kilpailevien pyhyyksien tunnistamisen tarkoituksena on ratkaista, kumman osapuolen arvot ovat yhteiskunnallisessa muutoksessa oikeutetumpia."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "81"
      },
      "explanation": "A säilyttää artikkelin kaksi olennaista rajausta. Ensinnäkään kirjoittaja ei esitä pyhyyden tunnistamista perusteeksi muutosten estämiselle, vaan keinoksi ymmärtää muutoksen kohteena olevia merkityksiä. Toiseksi kirjoittaja käyttää varovaista ilmaisua: huomioiminen mahdollisesti helpottaa siirtymiä ja voisi osaltaan vähentää polarisaatiota. B tekee ymmärtämisestä muutoksen estämistä. C on väärin, koska turve toimii nimenomaan tapausesimerkkinä laajemmasta ilmiöstä. D puolestaan muuttaa analyyttisen työkalun keinoksi ratkaista, kumman osapuolen arvot ovat oikeampia.",
      "learningPoint": "Tarkista erityisesti kirjoittajan käyttämä varmuusaste. ”Voi helpottaa” tai ”saattaa vähentää” ei tarkoita, että vaikutus toteutuu varmasti tai että teoria antaa yhden oikean ratkaisun."
    },
    {
      "id": "g-m1-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä muodostavat yhdessä artikkelin loppupäätelmien mukaisen kuvauksen turvetuotannon alasajosta sekä perinnön ja pyhyyden merkityksestä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Turvetuotannon loppuminen voi merkitä alan harjoittajille ammatin menettämisen lisäksi sellaisten paikkaan, identiteettiin ja historiaan liittyvien merkitysten menettämistä, joita voidaan perinnön merkityksellisyyden vuoksi nimetä pyhiksi."
        },
        {
          "id": "b",
          "text": "Energiaturvetuotannon alasajossa vastakkain olevat perintökäsitykset ovat sisällöltään erilaisia, mutta molemmat perustuvat taipumukseen määritellä joitakin asioita muita merkityksellisemmiksi."
        },
        {
          "id": "c",
          "text": "Koska valtadiskurssi perustui hallituksen päätöksiin, turvetuotannon puolustajien vastadiskurssit eivät artikkelin mukaan kyenneet nimeämään omia suojeltavia arvojaan pyhiksi."
        },
        {
          "id": "d",
          "text": "Artikkelin perusteella pyhyyden käsitteen hyöty liittyy siihen, että sen avulla voidaan ymmärtää, miksi eri osapuolet voivat reagoida voimakkaasti silloin, kun yhteiskunnallinen muutos koskee heidän erityisen merkityksellisiksi kokemiaan asioita."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "pyha-paha-turve",
        "page": "81–82"
      },
      "explanation": "Tässä pitää yhdistää artikkelin loppupäätelmän kolme tasoa. A kuvaa perintöteorian näkökulmaa: turvetuotanto ei ole vain taloudellinen toiminta, vaan siihen voi liittyä identiteettiä, paikkaa ja historiaa. B vaatii vertaamaan keskenään kahta vastakkaista perintökäsitystä. Niiden sisältö on erilainen, mutta niiden taustalla on sama mekanismi: joidenkin asioiden nostaminen erityisen merkityksellisiksi. D yhdistää tämän pyhäteoriaan. Pyhyyden avulla kirjoittaja pyrkii ymmärtämään, miksi tällaisiin merkityksiin kohdistuvat muutokset voivat synnyttää voimakkaita tunteita. C on väärin. Valta-asema ei tarkoita, että vain valtadiskurssi voisi määritellä asioita pyhiksi. Artikkelissa myös turvetuotannon puolustajien vastadiskurssit nimeävät ja puolustavat omia pyhiksi miellettyjä merkityksiään.",
      "learningPoint": "Tarkista, kuka määrittelee minkäkin asian merkitykselliseksi ja pyhäksi. Valta-asemassa oleva diskurssi ja vastadiskurssi voivat molemmat käyttää samaa merkityksellistämisen mekanismia, vaikka niiden suojelemat asiat ovat erilaisia."
    }
  ]
} satisfies ValintakoeGExercise;
