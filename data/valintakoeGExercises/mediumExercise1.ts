import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 1: uusimman tehtävätekstin tehtävät 1–20.
 * Kesto 35 min. Kategoriat vastaavat päivitettyä 14 kategorian luokitusta.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
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
      "categoryId": 3,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A on oikein, koska tuotannon puolittuminen tapahtui selvästi ennen tavoitevuotta 2030. C yhdistää oikein kaksi tietoa: veronkorotuksen taustalla olleen ilmastotavoitteen ja turpeen luokittelun uusiutumattomaksi energialähteeksi. D edellyttää lukujen vertaamista: reilut 5500 GWh on alle puolet lähes 12 000 GWh:sta.\nB kääntää Venäjän hyökkäyksen vaikutuksen väärään suuntaan. Artikkelin mukaan hyökkäys korosti turpeen roolia huoltovarmuuspolttoaineena, minkä vuoksi vuoden 2024 lukema olisi ilman hyökkäystä todennäköisesti ollut vielä pienempi.\n\nLähde:\n”hallituksen tavoitteena oli puolittaa energiaturpeen tuotanto vuoteen 2030 mennessä, mutta todellisuudessa tuotannon puolittuminen tapahtui huomattavasti nopeammin.”\nLisäksi artikkelissa kerrotaan, että vuonna 2024 energiaturpeella tuotettiin energiaa reilut 5500 GWh, kun vuonna 2020 määrä oli lähes 12 000 GWh. Veronkorotus puolestaan kytketään hiilineutraalisuustavoitteeseen ja turpeen asemaan uusiutumattomana energialähteenä.",
      "learningPoint": "Tarkista tapahtuman vaikutuksen suunta. Venäjän hyökkäyksen turpeen huoltovarmuusroolia vahvistavaa vaikutusta ei voi muuttaa käytön vähenemistä vauhdittavaksi vaikutukseksi.\nHakuvinkki: Paikanna ensin ”puolittuminen” ja tarkista sen ympäriltä sekä tavoite että toteutunut kehitys. Tarkista tämän jälkeen erikseen Venäjän hyökkäyksen vaikutus."
    },
    {
      "id": "g-m1-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Artikkelin käyttämien käsitteiden perusteella perinne ja perintö tarkoittavat käytännössä samaa asiaa: molemmissa on kyse menneisyydestä periytyvistä ilmiöistä, joita pidetään ryhmän identiteetin ja kulttuurin kannalta luovuttamattomina.",
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
        "articleId": "pyha-paha-turve",
        "page": "68"
      },
      "explanation": "Väite sisältää aluksi yhteisen piirteen: sekä perinne että perintö voivat liittyä menneisyydestä nouseviin ilmiöihin. Ratkaiseva ero syntyy kuitenkin niiden merkityksestä identiteetille ja kulttuurille. Artikkeli nimenomaan erottaa käsitteet toisistaan: perintöön liittyy luovuttamattomaksi koettu merkitys, kun taas perinteeseen ei välttämättä liity tällaista asemaa.\n\nLähde:\n”Perintö ei kuitenkaan ole synonyymi sanalle perinne”\nArtikkelin mukaan perinne tarkoittaa menneisyydestä nousevia ja nykyajassa tulkittuja tai toistettuja ilmiöitä, mutta niitä ei perinnön tavoin pidetä ryhmän identiteetin ja kulttuurin kannalta luovuttamattomina. Samalla artikkelissa perintö ymmärretään vielä tätä laajemmin kulttuurisena prosessina.",
      "learningPoint": "Yhdistä ominaisuus oikeaan käsitteeseen. Perintöön liitettyä luovuttamattomuutta ei voi siirtää automaattisesti perinteeseen, vaikka käsitteillä on yhteisiä piirteitä.\nHakuvinkki: Hae ”perinne”. Älä lopeta ensimmäiseen määritelmään, vaan vertaa sitä samassa kohdassa annettuun perinnön määritelmään."
    },
    {
      "id": "g-m1-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
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
        "articleId": "pyha-paha-turve",
        "page": "70"
      },
      "explanation": "B säilyttää molempien käsitteiden tehtävät oikeassa suhteessa. Perintöteoria auttaa hahmottamaan, millaisia historiallisesti ja yhteisöllisesti rakentuneita merkityksiä turvetuotantoon liittyy. Pyhäteoria puolestaan syventää tätä selittämällä, miksi näihin merkityksiin puuttuminen voi herättää voimakkaita reaktioita.\nA käyttää samoja oikeita elementtejä mutta vaihtaa teorioiden tehtävät keskenään. C on väärin, koska artikkelissa perintö ymmärretään ensisijaisesti kulttuurisena prosessina eikä pyhyyttä rajata uskonnolliseen viitekehykseen. D taas häivyttää teorioiden erilaiset analyyttiset tehtävät.\n\nLähde:\n”perintöteoria konkretisoi energiaturvetuotannon sosio-historialliseen kontekstiin liitettyjä merkityksiä”\nja pyhäteoria puolestaan syventää tätä tarkastelua tarjoamalla selityksen yhteiskunnalliselle keskustelulle ja voimakkaille tunteille, jotka tulkinnassa liittyvät pyhien rajojen loukkaamiseen.",
      "learningPoint": "Yhdistä kummankin teorian tehtävä oikeaan teoriaan. Sosiohistoriallisten merkitysten konkretisointi kuuluu perintöteoriaan ja pyhien rajojen loukkaamiseen liittyvien tunteiden tulkinta pyhäteoriaan.\nHakuvinkki: Paikanna ”perintöteoria konkretisoi” ja tarkista sen jälkeen samasta kohdasta, mitä pyhäteorian sanotaan tekevän."
    },
    {
      "id": "g-m1-q4",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
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
        "articleId": "pyha-paha-turve",
        "page": "70"
      },
      "explanation": "C on ainoa vaihtoehto, joka ei vastaa aineistoa. Kirjoittaja ei pidä aineistoa ongelmattomana eikä ensikäden tietona, vaan tunnistaa nimenomaisesti sen episteemisen ongelman. A, B ja D muodostavat yhdessä artikkelissa esitetyn kokonaisuuden: aineistoa tarvitaan turvetyöntekijöiden kokemusten tarkasteluun, mutta sen kuratoitu ja toisen käden luonne täytyy ottaa huomioon.\nTehtävässä ei siis riitä sen löytäminen, että kirjoittaja käyttää aiempia tutkimuksia. Ratkaisussa pitää yhdistää aineiston alkuperä, siihen liittyvä ongelma ja kirjoittajan perustelu sen käyttämiselle.\n\nLähde:\n”Kyseiset aineistot ovat toisten tutkijoiden ja kirjailijoiden kuratoimia ja edustavat näin toisen käden tietoa.”\nKirjoittaja toteaa lisäksi, että aineistoihin päätyneiden haastateltavien ja sitaattien valinta on ollut tekijöiden tietoinen ratkaisu. Samalla hän perustelee aineistojen käyttämistä tutkimuksen realiteeteilla: vuosien takaisista tapahtumista ei enää saada ajantasaista ensikäden tietoa.",
      "learningPoint": "Vertaa vaihtoehdon ehdottomuutta kirjoittajan arvioon. Ilmaus ”täysin ongelmaton” ei vastaa kuvausta aineistosta, jonka rajoitukset kirjoittaja tunnistaa.\nHakuvinkki: Hae ”episteeminen ongelma”. Lue sen ympäriltä myös kirjoittajan perustelu sille, miksi ongelmalliseksi tunnistettua aineistoa kuitenkin käytetään."
    },
    {
      "id": "g-m1-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 6,
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
        "articleId": "pyha-paha-turve",
        "page": "72"
      },
      "explanation": "A yhdistää oikein kaksi eri ajankohtaa ja niihin liittyvät hallitsevat tavat merkityksellistää suota. B puolestaan yhdistää kaksi kriisitilannetta, joissa turpeen asema vahvistui.\nC käyttää artikkelissa mainittua 1970-lukua, mutta liittää siihen väärän kehitysvaiheen: öljykriisi vahvisti turpeen arvostusta, mutta tuotannon huippuvuodet tulivat myöhemmin. D on väärin, sillä artikkelissa korostetaan nimenomaan, etteivät erilaiset arvottamisen tavat sulje toisiaan pois.\n\nLähde:\n”työnteon eetosta korostava diskurssi oli vallalla vähintään 1900-luvun puoliväliin asti”\nArtikkelin mukaan vuosituhannen vaihdetta lähestyttäessä vapaa-ajan ja virkistyskäytön diskurssit nousivat hallitsevaan asemaan. Samalla turpeen arvostuksen kerrotaan voimistuneen 1970-luvun öljykriisin seurauksena ja vastaavan profiilin nousun tapahtuneen keväällä 2022. Turvetuotannon huippuvuodet puolestaan ajoittuivat vasta 1990-luvun puolivälistä 2000-luvun puoliväliin.",
      "learningPoint": "Yhdistä jokainen ajanjakso oikeaan kehitysvaiheeseen. Turpeen arvostuksen nousu 1970-luvulla ja tuotannon myöhemmät huippuvuodet eivät tarkoita samaa tapahtumaa.\nHakuvinkki: Hae ensin ”öljykriisi” ja vertaa sen yhteydessä kuvattua muutosta myöhemmin mainittuihin turvetuotannon huippuvuosiin."
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
        "articleId": "pyha-paha-turve",
        "page": "71"
      },
      "explanation": "Väitteen ensimmäinen osa muistuttaa artikkelin diskurssin määritelmää: diskurssit ovat jaettuja ja vakiintuneita merkityssuhteiden kokonaisuuksia. Väite muuttuu kuitenkin vääräksi, kun tästä päätellään niiden löytyvän aineistosta sellaisinaan.\nArtikkeli tekee nimenomaisen eron aineistossa olevien selontekojen ja tutkijan tulkinnassa muodostuvien diskurssien välille. Opiskelijan täytyy siis yhdistää diskurssin määritelmä siihen, miten diskurssit tutkimuksessa tunnistetaan.\n\nLähde:\n”tekstistä löytyvät diskurssit syntyvät tutkijan tulkitsemina eivätkä löydy sellaisenaan tutkimusaineistosta.”\nArtikkelissa diskurssi määritellään jaetuksi ja vakiintuneeksi merkityssuhteiden kokonaisuudeksi, joka rakentaa todellisuutta tietyllä tavalla. Tutkija tunnistaa diskursseja aineiston selontekoja tulkitsemalla.",
      "learningPoint": "Tarkista, kääntääkö väite tutkimusmenetelmän perusajatuksen vastakkaiseksi. Tutkijan tulkinnassa muodostuvat diskurssit eivät ole aineistosta sellaisinaan löydettäviä valmiita kokonaisuuksia.\nHakuvinkki: Hae ”tutkijan tulkitsemina” ja tarkista myös sitä edeltävä diskurssin määritelmä."
    },
    {
      "id": "g-m1-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A edellyttää sen tarkistamista, mistä aineistoista neljä diskurssia tunnistettiin. B puolestaan edellyttää traditiodiskurssin erityisaseman ymmärtämistä: se ei ole vain yksi täysin irrallinen diskurssi muiden joukossa, vaan siihen yhdistyy muiden diskurssien ominaisuuksia.\nD on oikein, koska päällekkäisyys ja analyyttinen erottelu voivat toteutua samanaikaisesti. C sekoittaa kaksi aineistokokonaisuutta: kaupungin ja maaseudun vastakkainasettelu nostetaan esiin nimenomaan turvetuotantoa puolustavien puheenvuorojen yhteydessä.\n\nLähde:\n”tunnistin neljä erilaista diskurssia, jotka olen nimennyt seuraavasti: ilmasto, talous, huoltovarmuus ja oikeudenmukaisuus.”\nTurvetuotantoa puolustavista puheenvuoroista erotettiin lisäksi traditiodiskurssi sekä kaupungin ja maaseudun vastakkainasettelu. Traditiodiskurssin todetaan sulkevan ainakin osittain sisäänsä muutkin diskurssit. Kirjoittaja myös huomauttaa diskurssien olevan usein päällekkäisiä, vaikka niitä käsitellään analyyttisistä syistä erillisinä.",
      "learningPoint": "Tarkista, mistä aineistokokonaisuudesta kukin diskurssi tunnistettiin. Turvetuotantoa puolustavissa puheenvuoroissa havaittua vastakkainasettelua ei voi siirtää sellaisenaan hallituksen aineistojen kuvaukseksi.\nHakuvinkki: Paikanna ensin ”neljä erilaista diskurssia”. Tarkista sen jälkeen erikseen kohta ”turvetuotantoa puolustavissa puheenvuoroissa”."
    },
    {
      "id": "g-m1-q8",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
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
        "articleId": "pyha-paha-turve",
        "page": "74–75"
      },
      "explanation": "B yhdistää kaksi ilmastodiskurssin kannalta olennaista tietoa: veronkorotuksen ilmastoperusteen sekä sen, ettei vastustus kohdistunut turpeeseen sinänsä vaan fossiilisen polttoaineen käytöstä aiheutuviin päästöihin.\nA muuttaa argumentin kohdetta päästöistä turpeeseen itsessään. C menee liian pitkälle: hallituksen tavoitteena ei ollut turvetuotannon välitön täydellinen kieltäminen, ja artikkeli nimenomaan huomauttaa, ettei tuotantoa lainsäädännöllä kielletty. D puolestaan liittää ilmastodiskurssiin asioita, jotka siinä jätettiin taka-alalle: artikkelin mukaan turpeenkäyttö yhdistettiin ilmastodiskurssissa kasvihuonekaasupäästöihin ja ilmastonmuutokseen, ei työntekoon, talouskasvuun tai huoltovarmuuteen.\n\nLähde:\nSivulla 74 artikkelissa kuvataan hiilineutraalisuutta tärkeimmäksi yksittäiseksi syyksi energiaturpeen veronkorotukselle ja todetaan, että veronkorotuksen sekä muiden mekanismien oli tarkoitus ohjata turvetta pois energiakäytöstä.\nSivu 75:\n”ilmastodiskurssi ei vastusta niinkään turvetta itsessään vaan päästöjä”\nKirjoittaja jatkaa, että jos turve olisi uusiutuvaa ja tuottamansa päästöt sitovaa polttoainetta, tehty veronkorotus olisi ollut tarpeeton. Samalla artikkelissa korostetaan, ettei turvetuotantoa lainsäädännöllä kokonaan kielletty.",
      "learningPoint": "Selvitä, mihin vastustus kohdistuu. Ilmastodiskurssissa argumentin kohteena ovat päästöt, eikä tätä voi vaihtaa turpeeseen itsessään tai muiden diskurssien suojelemiin arvoihin.\nHakuvinkki: Hae ensin ”ei vastusta” tai ”päästöjä”. Tarkista sen jälkeen, miten tämä liittyy veronkorotuksen tarkoitukseen ja mitä artikkeli sanoo turvetuotannon kieltämisestä."
    },
    {
      "id": "g-m1-q9",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 2,
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
        "articleId": "pyha-paha-turve",
        "page": "76"
      },
      "explanation": "A tunnistaa kaksi artikkelissa erikseen mainittua vastadiskurssin argumenttia. C vaatii lisäksi ymmärtämään tärkeän eron arvon ja siitä tehdyn johtopäätöksen välillä: molemmat diskurssit voivat vedota ilmaston suojelemiseen, vaikka ne päätyvät eri käsitykseen oikeasta toimintatavasta.\nB on väärin, koska vastadiskurssi ei hylännyt ilmastoarvoa vaan käytti sitä oman tulkintansa perustelemiseen. D puolestaan kääntää kirjoittajan arvion päinvastaiseksi.\n\nLähde:\n”Ilmastodiskurssilla vastadiskursiivisessa käytössä oli kaksi keskeistä argumenttia: turpeen korvaamisesta aiheutuvat päästöt ja turpeen kiistanalainen asema uusiutumattomana polttoaineena.”\nSamassa osiossa kirjoittaja toteaa, että vastadiskurssin arvopohja on sama kuin valtadiskurssissa. Vastadiskurssissa kuitenkin argumentoidaan, että energiaturvetuotannon jatkaminen olisi ympäristön ja ilmaston kannalta parempi vaihtoehto kuin alasajo. Kirjoittaja myös toteaa tutkimusten perusteella tämän näkemyksen olevan epäuskottava.",
      "learningPoint": "Tunnista tiivistelmä, joka säilyttää yhteisen arvopohjan ja erilaiset johtopäätökset. Samasta ilmaston arvostamisesta voi aineiston mukaan seurata vastakkaisia käsityksiä parhaasta toimintatavasta.\nHakuvinkki: Hae ”vastadiskurssina sama” tai paikanna kohta ”kaksi keskeistä argumenttia”. Tarkista sen jälkeen, millaiseen johtopäätökseen vastadiskurssissa päädytään."
    },
    {
      "id": "g-m1-q10",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
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
        "articleId": "pyha-paha-turve",
        "page": "76–77"
      },
      "explanation": "B yhdistää talousdiskurssin kaksi tasoa. Konkreettiset investoinnit, työpaikat ja tappiot tekivät argumentista ymmärrettävän myös alan ulkopuolisille, mutta kirjoittaja tulkitsee diskurssia lisäksi pyhän ja perinnön näkökulmasta.\nA jättää tämän laajentamisen huomiotta. C tekee liian pitkälle menevän päätelmän turvetuotannon kansantaloudellisesta merkityksestä. D on väärin, koska artikkelissa talousdiskurssin alueelliset merkitykset voivat nimenomaan linkittyä traditiodiskurssiin.\n\nLähde:\nArtikkelin mukaan talousdiskurssissa toistuivat yrittäjien investoinnit, alueelliset työllisyysvaikutukset ja kasvavat kustannukset.\nSivu 77:\n”Työttömyys ja taloudellinen tappio ovat ilmiöitä, joihin myös turvetuotannon ulkopuoliset henkilöt pystyvät samaistumaan.”\nKirjoittaja liittää talousdiskurssissa erityisen suojeltaviksi asioiksi myös turvetuottajien omaisuudensuojan ja elinkeinonvapauden. Alueelliset taloudelliset hyödyt puolestaan voivat kytkeytyä traditiodiskurssiin ja paikkaidentiteettiin.",
      "learningPoint": "Yhdistä taloudelliset esimerkit kirjoittajan niistä tekemään tulkintaan. Oikean tiivistelmän pitää säilyttää sekä konkreettiset seuraukset että talousdiskurssin laajemmat merkitykset.\nHakuvinkki: Hae ensin ”taloudelliset vaikutukset”. Tarkista sen jälkeen seuraavalta sivulta, miten kirjoittaja tulkitsee niiden merkitystä myös turvetuotannon ulkopuolisille."
    },
    {
      "id": "g-m1-q11",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Artikkelin perusteella huoltovarmuusdiskurssin merkitys liittyi vain 2020-luvun alun kriiseihin, eikä huoltovarmuutta ollut käytetty turpeenkäytön puolustamiseen ennen koronapandemiaa ja maailmanpoliittisen tilanteen epävakautumista.",
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
        "articleId": "pyha-paha-turve",
        "page": "77"
      },
      "explanation": "Väitteessä yhdistetään kaksi sinänsä oikeaa asiaa väärällä tavalla. Kriisit korostivat huoltovarmuusargumentin merkitystä, mutta tästä ei seuraa, että argumentti olisi syntynyt vasta kriisien seurauksena.\nRatkaiseva ero on siis olemassaolon ja merkityksen vahvistumisen välillä. Artikkelin mukaan huoltovarmuus oli jo ennestään turpeenkäyttöä puolustava argumentti.\n\nLähde:\n”Huoltovarmuusnäkökulma on ollut yksi merkittävistä turpeenkäyttöä puolustavista argumenteista, mutta sen merkitys korostuu kriisien yhteydessä”\nKirjoittaja toteaa tämän jälkeen, että 2020-luvun alkuun osuneet koronakriisi ja epävakaa maailmanpoliittinen tilanne heijastuivat aineistossa.",
      "learningPoint": "Erota ilmiön alkaminen sen merkityksen korostumisesta. Huoltovarmuusargumentin vahvistuminen 2020-luvun kriiseissä ei tarkoita, että argumenttia olisi käytetty ensimmäisen kerran vasta silloin.\nHakuvinkki: Hae ”kriisien yhteydessä”. Tarkista erityisesti sitä edeltävä lause, jotta näet, oliko huoltovarmuusargumentti olemassa jo ennen kuvattuja kriisejä."
    },
    {
      "id": "g-m1-q12",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A kuvaa huoltovarmuusdiskurssin yhteyttä muihin diskursseihin. B yhdistää puolestaan pitkän ajallisen jatkuvuuden ja ylisukupolvisuuden traditiodiskurssiin. D tuo mukaan työn identiteetti- ja elämäntapamerkityksen.\nC on väärin, koska juuri traditiodiskurssin keskeinen tehtävä artikkelissa on tuoda näkyviin merkityksiä, joita ei voida palauttaa pelkästään rahalliseen hyötyyn.\n\nLähde:\n”Huoltovarmuusdiskurssi korostaa omavaraisuutta ja kotimaisuutta”\nArtikkelin mukaan polttoaineen tuonti voidaan tässä yhteydessä nähdä sekä taloudellisesti että ympäristöllisesti ongelmallisena. Lisäksi samalla suolla voidaan työskennellä 15-25 vuotta ja turvealan ammatti periytyy usein sukupolvelta toiselle.\nKirjoittaja jatkaa:\n”Turvetuotanto ei ole ollut mikä tahansa työ, vaan työntekijöille ylpeyden aihe, elämäntapa ja osa identiteettiä”\nNäiden merkitysten kautta huoltovarmuus kytkeytyy laajempaan traditiodiskurssiin.",
      "learningPoint": "Tarkista sana ”yksinomaan”. Taloudellisten hyötyjen nostaminen ainoaksi merkitykseksi poistaa aineistossa kuvatut identiteettiin, elämäntapaan ja jatkuvuuteen liittyvät ulottuvuudet.\nHakuvinkki: Paikanna ensin ”omavaraisuutta ja kotimaisuutta” ja lue eteenpäin siihen asti, missä huoltovarmuus liitetään traditiodiskurssiin."
    },
    {
      "id": "g-m1-q13",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
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
        "articleId": "pyha-paha-turve",
        "page": "78–79"
      },
      "explanation": "B edellyttää kahden tiedon yhdistämistä: ensin pitää tunnistaa hallituksen oma oikeudenmukaisuustavoite ja sen jälkeen verrata sitä artikkelissa kuvattuun seurausten epätasaiseen jakautumiseen. Juuri näiden välinen ristiriita mahdollisti oikeudenmukaisuuteen vetoamisen kritiikissä.\nC kääntää tilanteen vääräksi, sillä oikeudenmukaisuus mainittiin jo hallitusohjelmassa. D puolestaan muuttaa kohdentumisen: seuraukset eivät artikkelin mukaan jakautuneet samalla tavalla kaikille.\n\nLähde:\nSivulla 78 todetaan hallitusohjelman tavoitteeksi, että turpeen energiakäytön puolittaminen tapahtuisi ”alueellisesti ja sosiaalisesti oikeudenmukaisimmalla tavalla”. Samalla artikkelissa kerrotaan, että oikeudenmukaisen siirtymän toteutuminen koettiin ainakin osittain epäonnistuneeksi.\nSivu 79:\n”energiaturpeen veronkorotuksen seuraukset eivät jakaantuneet tasapuolisesti kaikille alueille ja väestöryhmille.”\nKoska oikeudenmukaisuus oli mainittu jo hallitusohjelmassa, siihen vetoamalla voitiin kritisoida hallituksen toimia arvoristiriidasta.",
      "learningPoint": "Yhdistä hallituksen tavoite ja toteutuneiden seurausten kuvaus. Oikea tiivistelmä säilyttää niiden välisen ristiriidan sekä sen merkityksen hallituksen toimien kritiikille.\nHakuvinkki: Hae ensin ”oikeudenmukaisimmalla tavalla” ja sen jälkeen ”eivät jakaantuneet tasapuolisesti”. Ratkaisu syntyy näiden kahden kohdan suhteesta."
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A ja B kuvaavat oikeudenmukaisuusdiskurssin abstraktimpaa tasoa: kyse ei ollut pelkästään rahasta tai työpaikoista, vaan myös identiteetin, ammattitaidon ja elämäntavan arvostuksesta. D on siksi oikein: konkreettiset ja identiteettiin liittyvät oikeudenmukaisuuskysymykset eivät sulje toisiaan pois.\nC on väärin juuri tämän vuoksi. Kirjoittajan tulkinnassa kategoriasta toiseen ei siirtynyt vain elinkeino, vaan myös siihen liittyviä kulttuurisia merkityksiä.\n\nLähde:\n”Turvetuottajat kokivat epäoikeudenmukaisena, että heidän elinkeinonsa, ammattitaitonsa ja identiteettinsä oikeutus kyseenalaistettiin”\nArtikkeli yhdistää tämän kaupungin ja maaseudun vastakkainasetteluun. Turveyrittäjien kuvataan kokevan, ettei kaupungeissa tehtävä ja kaupunkilaisten elämään keskittyvä päätöksenteko huomioi riittävästi heidän kokemusmaailmaansa.",
      "learningPoint": "Tarkista, rajaako sana ”vain” muutoksen liian suppeaksi. Aineistossa elinkeinon asemaan liittyvät kysymykset ulottuvat myös identiteettiin ja kulttuurisiin merkityksiin.\nHakuvinkki: Hae ”identiteettinsä” ja lue siitä eteenpäin kaupungin ja maaseudun vastakkainasetteluun asti."
    },
    {
      "id": "g-m1-q15",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
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
        "articleId": "pyha-paha-turve",
        "page": "79–80"
      },
      "explanation": "B vaatii yhdistämään perinnön määritelmän siihen, miten traditiodiskurssia käytännössä sovelletaan. Kyse ei ole vain menneisyydestä, vaan menneisyyden merkitysten käyttämisestä nykyhetken ja tulevaisuuden tulkitsemiseen.\nA kaventaa perinnön liian konkreettisesti muuttumattoman työmenetelmän säilyttämiseen. C rajaa perinnön virheellisesti vain menneisyyteen. D puolestaan siirtää valtadiskurssin suokäsityksen turvetuottajien traditiodiskurssille.\n\nLähde:\nArtikkelissa Smithin perintökäsitys ei rajoitu menneisyyteen:\n”Perintö ei ole pelkästään taaksepäin katsovaa, vaan siihen liittyy myös ajatus nykyhetkestä ja tulevasta.”\nTraditiodiskurssissa turvetuottajat yhdistetään Topeliuksen kuvaamaan työnteon, sisun ja ahkeruuden kehykseen.\nSivulla 80 tätä yhteyttä laajennetaan huoltovarmuuteen, talouskasvuun, alueelliseen työllisyyteen ja sukupolvien jatkumoon. Samalla valtadiskurssin kuvataan kehystävän suot päinvastaisella tavalla suojeltaviksi perintökohteiksi.",
      "learningPoint": "Yhdistä perinnön määritelmä sen myöhempään soveltamiseen. Oikea tiivistelmä kattaa menneisyyden lisäksi nykyhetken ja tulevaisuuden merkitykset.\nHakuvinkki: Paikanna ensin ”ei ole pelkästään taaksepäin”. Tarkista sitten seuraavalta sivulta, mihin asioihin turvetuottajat traditiodiskurssissa liitetään."
    },
    {
      "id": "g-m1-q16",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "Tehtävässä pitää huomata, ettei vastakkain ole yksinkertaisesti ”perintö vastaan ei-perintö”. Molemmat näkökulmat voivat merkityksellistää suon ja turvetuotannon perinnön kautta, mutta ne suojelevat eri asioita.\nA kuvaa tämän konkreettisen eron. B tiivistää diskurssien rakenteellisen samankaltaisuuden niiden erilaisesta sisällöstä huolimatta. D seuraa kirjoittajan pyhäteoreettisesta tulkinnasta.\nC on väärin, koska pyhyys ei kuulu vain turvetuottajien näkökulmaan. Artikkelissa erilaiset osapuolet voivat nimetä eri asioita pyhiksi.\n\nLähde:\nValtadiskurssin kuvataan näkevän suot:\n”suojeltavina perintökohteina, joita turvetuotanto uhkaa.”\nTurvetuottajien traditiodiskurssissa puolestaan turvetuotanto voidaan yhdistää suomalaisuuteen kuuluviin perustaviin periaatteisiin. Jos tämä kokemus perinnöstä ohitetaan, alasajo voi tästä näkökulmasta näyttäytyä jopa pyhäinhäväistyksenä.",
      "learningPoint": "Tarkista pyhyyden kohdentumista koskeva ehdoton rajaus. Sana ”vain” sulkee pyhyyden pois valtadiskurssista, vaikka aineiston mukaan molemmat osapuolet voivat nimetä asioita pyhiksi.\nHakuvinkki: Hae ensin ”suojeltavina perintökohteina” ja sen jälkeen ”pyhäinhäväistyksenä”. Yhdistä näiden kohtien perusteella se, mitä kummassakin diskurssissa pidetään merkityksellisenä."
    },
    {
      "id": "g-m1-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
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
        "articleId": "pyha-paha-turve",
        "page": "80"
      },
      "explanation": "B yhdistää kolme olennaista elementtiä: suon muuttamisen, muutokseen liitetyn taloudellisen ja arkisen merkityksen sekä pitkän ajallisen jatkumon. Juuri aikajänne tekee tapauksesta traditiodiskurssin kannalta merkityksellisen.\nA ja C muuttavat kolumnin tulkinnan lähes vastakkaiseksi. D puolestaan rajaa traditiodiskurssin liian kapeasti turvealan ammattilaisiin, vaikka artikkeli nimenomaan päättelee, että siihen voivat samaistua muutkin maaseudulla asuvat.\n\nLähde:\nKolumnissa kuvataan, kuinka turvetuotannon jälkeen suolla on viljapeltoa ja nuorta metsää. Kirjoittaja tulkitsee tätä seuraavasti:\n”Kirjoituksen aikajänne korostaa traditiodiskurssia”\nArtikkelin mukaan suon ottaminen inhimillisen toiminnan kohteeksi yhdistetään pitäjän taloudelliseen menestykseen, maaseudun elämään ja työntekoon. Lisäksi traditiodiskurssiin voi yhtyä moni turvetuotannon ulkopuoleltakin.",
      "learningPoint": "Tarkista, ketkä voivat jakaa traditiodiskurssin. Sitä ei voi rajata vain turvealan ammattilaisiin, jos aineistossa myös muut maaseudulla asuvat voivat samaistua siihen.\nHakuvinkki: Hae ”yli 60 vuoden” ja tarkista sen jälkeen, mitä kirjoittaja päättelee traditiodiskurssiin yhtyvistä ihmisistä."
    },
    {
      "id": "g-m1-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 2,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A kokoaa oikein turvetuotannolle annetut erilaiset merkitykset. B edellyttää seuraavan päättelyn: jos turvetuotantoon liittyy samanaikaisesti toimeentulo, identiteetti, paikka, historia ja jatkuvuus, tuotannon nopea romahtaminen voi uhata useita itseymmärryksen rakennuspalasia yhtä aikaa.\nD tuo mukaan diskurssien valtakamppailun: kyse ei ole vain siitä, jatkuuko tuotanto, vaan myös siitä, kenen tapa tulkita suon ja turvetuotannon merkityksiä vakiintuu.\nC kaventaa artikkelin tulkinnan taloudelliseksi, vaikka juuri traditiodiskurssin avulla kirjoittaja nostaa esiin taloutta laajemmat merkitykset.\n\nLähde:\nSivulla 80 traditiodiskurssiin liittyvä valtataistelu kuvataan kysymykseksi siitä, onko turvetuottajilla oikeutta perintöönsä vai onko siitä luovuttava ilmastonmuutokseen sopeutumiseksi. Artikkelissa todetaan:\n”Voittava diskurssi ratkaisee, miten soihin liittyviä merkityksiä, muistoja, identiteettejä ja paikkoja tulkitaan nyt ja tulevaisuudessa”\nSivu 81.\nArtikkelin mukaan turve ei merkinnyt alalla toimiville vain toimeentuloa. Siihen liittyi muun muassa omaa identiteettiä, paikkaidentiteettiä, luontosuhdetta sekä historian ja jatkuvuuden kokemusta.",
      "learningPoint": "Kokoa yhteen taloudelliset, identiteettiin liittyvät ja kulttuuriset merkitykset. Oikean tiivistelmän pitää säilyttää selityksen moniulotteisuus ja yhteys diskurssien valtakamppailuun.\nHakuvinkki: Hae ensin ”pelkkää toimeentuloa”. Tarkista sen ympäriltä, mitä muita asioita turvetuotantoon liitetään, ja yhdistä tämä edellisen sivun valtataistelua koskevaan kohtaan."
    },
    {
      "id": "g-m1-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
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
        "articleId": "pyha-paha-turve",
        "page": "81"
      },
      "explanation": "A säilyttää artikkelin kaksi olennaista rajausta. Ensinnäkään kirjoittaja ei esitä pyhyyden tunnistamista perusteeksi muutosten estämiselle, vaan keinoksi ymmärtää muutoksen kohteena olevia merkityksiä. Toiseksi kirjoittaja käyttää varovaista ilmaisua: huomioiminen mahdollisesti helpottaa siirtymiä ja voisi osaltaan vähentää polarisaatiota.\nB tekee ymmärtämisestä muutoksen estämistä. C on väärin, koska turve toimii nimenomaan tapausesimerkkinä laajemmasta ilmiöstä. D puolestaan muuttaa analyyttisen työkalun keinoksi ratkaista, kumman osapuolen arvot ovat oikeampia.\n\nLähde:\nKirjoittaja kertoo käyttäneensä turvekeskustelua tapausesimerkkinä ja toteaa, että piiloon jäävien merkitysten ja arvostusten huomioiminen voisi mahdollisesti helpottaa:\n”välttämätöntä siirtymää kohti kestävämpää yhteiskuntaa.”\nVastaavia keskusteluja voi artikkelin mukaan syntyä esimerkiksi turkistarhauksen sekä maidon- ja lihantuotannon murroksissa. Pyhyyden ja perinnön huomioimisen arvioidaan voivan osaltaan vähentää yhteiskunnallista polarisaatiota.",
      "learningPoint": "Tunnista johtopäätös, joka säilyttää sekä teorian tarkoituksen että kirjoittajan varovaisen ilmaisun. Muutosten ymmärtäminen ja mahdollinen helpottaminen eivät tarkoita niiden estämistä tai varmaa ratkaisua.\nHakuvinkki: Hae ”tapausesimerkkinä” ja lue siitä eteenpäin kohtaan, jossa käsitellään tulevia yhteiskunnallisia murroksia."
    },
    {
      "id": "g-m1-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "Tässä pitää yhdistää artikkelin loppupäätelmän kolme tasoa.\nA kuvaa perintöteorian näkökulmaa: turvetuotanto ei ole vain taloudellinen toiminta, vaan siihen voi liittyä identiteettiä, paikkaa ja historiaa.\nB vaatii vertaamaan keskenään kahta vastakkaista perintökäsitystä. Niiden sisältö on erilainen, mutta niiden taustalla on sama mekanismi: joidenkin asioiden nostaminen erityisen merkityksellisiksi.\nD yhdistää tämän pyhäteoriaan. Pyhyyden avulla kirjoittaja pyrkii ymmärtämään, miksi tällaisiin merkityksiin kohdistuvat muutokset voivat synnyttää voimakkaita tunteita.\nC on väärin. Valta-asema ei tarkoita, että vain valtadiskurssi voisi määritellä asioita pyhiksi. Artikkelissa myös turvetuotannon puolustajien vastadiskurssit nimeävät ja puolustavat omia pyhiksi miellettyjä merkityksiään.\n\nLähde:\nSivulla 81 kirjoittaja toteaa, että turvetuotannon puolustajat nimeävät omissa diskursseissaan pyhiksi sellaisia merkityksiä, jotka jäävät valtadiskurssissa huomiotta. Näihin kuuluvat historiallinen jatkuvuus, identiteetti ja elämän merkityksellisyys.\nSivu 82.\nArtikkelin mukaan turvetuotannon loppuminen:\n”ei tarkoita pelkän ammatinharjoittamisen päättymistä”\nvaan samalla voidaan menettää itseymmärrykselle tärkeitä paikkaan, identiteettiin ja historiaan liittyviä asioita. Kirjoittaja toteaa myös, että turvetuottajien perintö ja energiaturvetuotannon alasajolla suojeltava perintö ovat vastakkaisia, mutta kumpuavat samasta taipumuksesta määritellä jotkin asiat toisia merkityksellisemmiksi.",
      "learningPoint": "Tarkista, kenen diskurssiin merkityksellistäminen liitetään. Sekä valtadiskurssi että vastadiskurssit voivat nimetä omia suojeltavia arvojaan pyhiksi.\nHakuvinkki: Paikanna ensin ”ei tarkoita pelkän ammatinharjoittamisen päättymistä”. Tarkista sen jälkeen samasta loppuosasta, miten kirjoittaja vertaa kahta vastakkaista perintöä ja mitä hän sanoo pyhyyden yhteisöllisestä merkityksestä."
    }
  ]
} satisfies ValintakoeGExercise;
