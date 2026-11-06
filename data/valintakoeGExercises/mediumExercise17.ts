import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 17: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise17Base = {
  "id": "keskivaikea-harjoitus-17",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 17 – Käsitteet kriisissä? Katsauksessa kriisinhallinnan eräät suomenkieliset käsitteet, määritelmät, niiden suhteet ja kansainväliset vastineet",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "kasitteet-kriisissa",
  "articleTitle": "Käsitteet kriisissä? Katsauksessa kriisinhallinnan eräät suomenkieliset käsitteet, määritelmät, niiden suhteet ja kansainväliset vastineet",
  "articleUrl": "https://journal.fi/kosmopolis/article/view/161868/120883",
  "questions": [
    {
      "id": "g-m17-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein katsauksen menetelmää, tavoitteita ja rajauksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Katsaus hyödyntää narratiivista kirjallisuuskatsausta ja käsiteanalyysin vaikutteita, mutta tavoittelee ensisijaisesti käsitteiden välisten suhteiden kokonaiskuvaa."
        },
        {
          "id": "b",
          "text": "Katsauksessa käytetään systemaattista kirjallisuuskatsausta, jonka tavoitteena on tunnistaa kaikki tarkasteltujen käsitteiden kansainväliset määritelmät."
        },
        {
          "id": "c",
          "text": "Tarkastelussa painottuvat kansainvälisten organisaatioiden englanninkieliset määritelmät, minkä kirjoittaja tunnistaa rajoitteeksi pohjoismaisten ja muiden kielialueiden vaikutusten vuoksi."
        },
        {
          "id": "d",
          "text": "Katsauksen tavoitteena on määritellä kuusi käsitettä lopullisesti, jotta niiden kontekstisidonnaisista tulkinnoista voidaan luopua."
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
        "articleId": "kasitteet-kriisissa",
        "page": "44–45",
        "section": "Menetelmä ja lähestymistapa"
      },
      "explanation": "A on oikein. Katsaus on narratiivinen ja hyödyntää käsiteanalyysin näkökulmia, mutta ei tarkastele yksittäisiä käsitteitä käsiteanalyysin edellyttämässä syvyydessä.\nB on väärin. Menetelmä ei ole systemaattinen katsaus eikä määritelmiä pyritä kokoamaan tyhjentävästi.\nC on oikein. Englanninkielisten kansainvälisten määritelmien painottaminen jättää esimerkiksi pohjoismaisten vaikutteiden tarkastelun vähäiseksi.\nD on väärin. Kirjoittaja korostaa määritelmien moninaisuutta ja kontekstisidonnaisuutta.\n\nLähde:\nS. 44–45, ”Menetelmä ja lähestymistapa”.\nRatkaiseva lainaus, s. 45: ”Tavoitteena ei ole ollut löytää kaikkia mahdollisia määritelmiä”.",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksen menetelmä sen tavoitteista ja tunnistaa, mitä katsauksessa tietoisesti jätetään tarkastelun ulkopuolelle.\nHakuvinkki: Ctrl+F: narratiivinen katsaus ja Tavoitteena ei ole ollut."
    },
    {
      "id": "g-m17-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nKatsauksen mukaan englanninkielinen crisis management voi suomeksi tarkoittaa sekä kriisinhallintaa että kriisijohtamista. Käsitteiden painotukset eivät kuitenkaan ole täysin samat, sillä kriisinhallinnassa korostuu yleisempi hallintaprosessi ja kriisijohtamisessa henkilöihin tai organisaatioihin keskittyvä johtaminen.",
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
        "articleId": "kasitteet-kriisissa",
        "page": "43 ja 52"
      },
      "explanation": "Kirjoittaja tunnistaa suomenkielisten käsitteiden päällekkäisyyden mutta erottaa niiden painotukset. Kriisinhallinta voi kattaa laajan prosessin, kun taas kriisijohtaminen painottaa johtamisvastuuta ja johtoroolissa olevia toimijoita.\n\nLähde:\nS. 43 ja 52, johdanto ja ”Kriisijohtaminen”.\nRatkaiseva lainaus, s. 43: ”hajaantuneempaa hallintaa tai henkilöihin tai organisaatioihin keskittyvää johtamisfokusta”.",
      "learningPoint": "Opiskelijan tulee yhdistää englanninkielisen käsitteen käännösvaihtoehdot niiden merkityseroihin. Sama englanninkielinen termi ei välttämättä tarkoita täysin samanlaista toimintaa kaikissa suomenkielisissä yhteyksissä.\nHakuvinkki: Ctrl+F: crisis management ja johtamisfokusta."
    },
    {
      "id": "g-m17-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kriisin kansainväliset määritelmät ja niiden painotukset?",
      "options": [
        {
          "id": "a",
          "text": "IMERA-säädös painottaa aseellisten konfliktien syntymistä, kun taas Naton määritelmä keskittyy tavaroiden ja palvelujen vapaaseen liikkuvuuteen."
        },
        {
          "id": "b",
          "text": "Kielitoimiston sanakirja määrittelee kriisin yksinomaan sisämarkkinoiden häiriöksi, kun taas IMERA-säädös tarkastelee kriisiä yleisenä elämän käännekohtana."
        },
        {
          "id": "c",
          "text": "Naton määritelmä painottaa yhteiskunnan tasapainon häiriintymistä ja konfliktin mahdollisuutta, kun taas IMERA-säädös korostaa poikkeuksellisen tapahtuman mahdollisia vakavia vaikutuksia sisämarkkinoihin."
        },
        {
          "id": "d",
          "text": "EU:n vuoden 2018 asetuksessa kriisi rajataan yksinomaan taloudellisiin häiriöihin, kun taas Kokonaisturvallisuuden sanastossa kriisin määritelmä koskee vain aseellisia selkkauksia."
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
        "articleId": "kasitteet-kriisissa",
        "page": "46–47"
      },
      "explanation": "C on oikein. Naton määritelmä liittyy valtioiden tasapainon häiriintymiseen ja mahdolliseen konfliktiin. IMERA-säädös painottaa sisämarkkinoiden toimintaa ja liikkuvuutta.\nA on väärin. Naton ja IMERA-säädöksen painotukset on vaihdettu keskenään.\nB on väärin. Kielitoimiston sanakirja määrittelee kriisin yleisesti kärjistyneeksi tai vaaralliseksi tilanteeksi, käännekohdaksi tai murrokseksi.\nD on väärin. Vuoden 2018 EU-asetus sisältää myös aseellisiin selkkauksiin ja luonnononnettomuuksiin liittyviä tilanteita. Kokonaisturvallisuuden sanaston määritelmä on yleisempi.\n\nLähde:\nS. 46–47, taulukko 1.\nRatkaiseva lainaus, s. 46: ”Määritelmille yhteistä on kriisi poikkeamana normaalista.”",
      "learningPoint": "Opiskelijan tulee yhdistää eri organisaatioiden määritelmät oikeisiin lähteisiin ja erottaa niiden politiikka-alakohtaiset painotukset.\nHakuvinkki: Ctrl+F: IMERA-säädös ja Nato (2015)."
    },
    {
      "id": "g-m17-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Oikein vai väärin?\nKokonaisturvallisuuden sanastossa suositellaan kriisin sijaan häiriötilanne- ja poikkeusolot-käsitteitä niiden täsmällisyyden vuoksi. Häiriötilanteita voidaan yleensä hallita tavanomaisin toimivaltuuksin, kun taas poikkeusoloissa voidaan ottaa käyttöön tavanomaisesta poikkeavia viranomaisten tai poliittisen johdon valtuuksia.",
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
        "articleId": "kasitteet-kriisissa",
        "page": "47–48"
      },
      "explanation": "Kokonaisturvallisuuden sanastossa käsitteitä erotellaan vakavuuden ja toimivaltuuksien perusteella. Häiriötilanteessa voidaan tarvita tavallista tiiviimpää yhteistyötä, mutta tilannetta voidaan yleensä hallita tavanomaisin toimivaltuuksin.\nPoikkeusoloihin puolestaan liittyy mahdollisuus ottaa käyttöön poikkeuksellisia toimivaltuuksia. Tämä ei kuitenkaan tarkoita, että niitä otettaisiin automaattisesti käyttöön jokaisessa poikkeusolotilanteessa.\n\nLähde:\nS. 47–48, taulukon 1 jälkeinen tarkastelu.\nRatkaiseva lainaus, s. 47: ”molemmat ovat kriisejä, mutta eroavat toisistaan vakavuudeltaan”.",
      "learningPoint": "Opiskelijan tulee erottaa häiriötilanteen ja poikkeusolojen määritelmät sekä yhdistää ne oikeisiin viranomaistoiminnan edellytyksiin. Erityisesti tulee huomata ero tavanomaisten ja poikkeuksellisten toimivaltuuksien välillä.\nHakuvinkki: Ctrl+F: tavanomaisesta poikkeava ja tarkempia käsitteitä."
    },
    {
      "id": "g-m17-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta kriisin, häiriötilanteen ja poikkeusolojen välisistä suhteista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kaikki häiriötilanteet ovat automaattisesti kriisejä, koska ne poikkeavat normaalista toiminnasta."
        },
        {
          "id": "b",
          "text": "Häiriötilanne voi kehittyä poikkeusoloihin johtavaksi tilanteeksi, jos sen taustalta paljastuu esimerkiksi vihamielinen toiminta ja poikkeukselliset toimivaltuudet katsotaan tarpeellisiksi."
        },
        {
          "id": "c",
          "text": "Poikkeusolot liittyvät vahvasti valtion ja viranomaisten toimintaan, kun taas kriisejä ja häiriötilanteita voi esiintyä myös muunlaisissa organisaatioissa."
        },
        {
          "id": "d",
          "text": "Poikkeusolot ovat aina vaikutuksiltaan lievempiä kuin häiriötilanteet, koska niiden julistaminen perustuu poliittiseen päätökseen."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b",
        "c"
      ],
      "source": {
        "articleId": "kasitteet-kriisissa",
        "page": "48–49"
      },
      "explanation": "A on väärin. Artikkelissa todetaan, etteivät kaikki häiriötilanteet tai poikkeusolot ole kriisejä. Häiriötilanne voi jäädä vaikutuksiltaan rajalliseksi, ja poikkeusolojen tulkinta kriisiksi voi olla poliittisesti kiistanalainen.\nB on oikein. Artikkelissa esitetään esimerkki sähköverkon häiriöstä, joka voi vihamielisen toiminnan paljastuessa johtaa poikkeusolovaltuuksien käyttöönoton arviointiin.\nC on oikein. Poikkeusolot ovat valtiollinen ja poliittinen käsite, kun taas häiriötilanteita ja kriisejä voi esiintyä monenlaisissa organisaatioissa.\nD on väärin. Poikkeusolot ovat usein vaikutuksiltaan laajempia tai vakavampia kuin häiriötilanteet. Poliittinen päätöksenteko ei tarkoita tilanteen olevan lievempi.\n\nLähde:\nS. 48–49, kuva 1 ja sitä selittävä teksti.\nRatkaiseva lainaus, s. 48: ”kaikki häiriötilanteet tai poikkeusolot eivät ole kriisejä”.",
      "learningPoint": "Opiskelijan tulee erottaa käsitteiden päällekkäisyys niiden täydellisestä vastaavuudesta. Häiriötilanne, kriisi ja poikkeusolot eivät ole kaikissa tilanteissa sama asia, eikä yhden käsitteen esiintyminen automaattisesti tarkoita toisen toteutumista.\nHakuvinkki: Ctrl+F: kaikki häiriötilanteet ja sähköverkon häiriö."
    },
    {
      "id": "g-m17-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kriisinhallinnan syklin ja hiipivien kriisien erityispiirteet?",
      "options": [
        {
          "id": "a",
          "text": "Kriisinhallinnan sykli kattaa vain kriisin aikaiset toimet, kun taas hiipivät kriisit syntyvät aina äkillisesti ja päättyvät selvästi tunnistettavaan tapahtumaan."
        },
        {
          "id": "b",
          "text": "Hiipivät kriisit ovat lyhyitä ja helposti ennakoitavia, minkä vuoksi niiden hallinta perustuu ensisijaisesti kriisin jälkeiseen palautumiseen."
        },
        {
          "id": "c",
          "text": "Kriisinhallinnan sykli erottaa kriisiä edeltävän, kriisinaikaisen ja kriisin jälkeisen toiminnan, mutta hiipivien kriisien epäselvät alku- ja päättymiskohdat vaikeuttavat näiden vaiheiden erottamista."
        },
        {
          "id": "d",
          "text": "Polykriiseissä eri kriisit ovat toisistaan riippumattomia, kun taas hiipivät kriisit tarkoittavat vain yksittäisen organisaation maineeseen liittyviä kriisejä."
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
        "articleId": "kasitteet-kriisissa",
        "page": "50",
        "section": "Kriisinhallinta"
      },
      "explanation": "C on oikein. Kriisinhallinnan sykli erottaa kolme ajallista vaihetta, mutta hiipivät kriisit voivat kehittyä pitkään ja muuttua akuuteiksi vasta myöhemmin.\nA on väärin. Kriisinhallinta voi sisältää myös varautumisen ja palautumisen.\nB on väärin. Hiipivät kriisit ovat vaikeasti havaittavia ja voivat jatkua pitkään.\nD on väärin. Polykriiseissä kriisit voivat olla päällekkäisiä ja vaikuttaa toisiinsa. Hiipivät kriisit eivät rajoitu mainekriiseihin.\n\nLähde:\nS. 50, ”Kriisinhallinta”.\nRatkaiseva lainaus: ”Hiipivät kriisit ovat häilyviä niiden alku- ja päättymispisteiden”.",
      "learningPoint": "Opiskelijan tulee yhdistää kriisinhallinnan ajalliset vaiheet tilanteisiin, joissa niiden rajat hämärtyvät. Kaikkia kriisejä ei voida jakaa selkeästi alkaviin ja päättyviin tapahtumiin.\nHakuvinkki: Ctrl+F: hiipivät kriisit ja kriisinhallinnan syklissä."
    },
    {
      "id": "g-m17-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin taulukossa 2 esitettyjä kriisinhallinnan määritelmiä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "EU CBRNE Glossary sisältää kriisinhallintaan varautumisen, kriisiin reagoimisen, vaikutusten lieventämisen ja palautumisen."
        },
        {
          "id": "b",
          "text": "Kokonaisturvallisuuden sanasto määrittelee kriisinhallinnan ensisijaisesti organisaation sisäiseksi johtamistoiminnaksi, eikä määritelmässä viitata kansainväliseen toimintaan."
        },
        {
          "id": "c",
          "text": "Naton termistöön perustuva määritelmä painottaa kriisien hillitsemistä, niiden kärjistymisen estämistä aseellisiksi konflikteiksi ja mahdollisten vihollisuuksien hillitsemistä."
        },
        {
          "id": "d",
          "text": "Kielitoimiston sanakirjan mukaan kriisinhallinta tarkoittaa yksinomaan kriisin jälkeistä jälleenrakennusta."
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
        "articleId": "kasitteet-kriisissa",
        "page": "51"
      },
      "explanation": "A on oikein. EU CBRNE Glossaryn määritelmä kattaa kriisinhallinnan eri vaiheet ennen kriisiä, sen aikana ja sen jälkeen.\nB on väärin. Kokonaisturvallisuuden sanastossa kriisinhallinta määritellään suunnitelluksi kansainväliseksi toiminnaksi.\nC on oikein. Naton määritelmä keskittyy erityisesti kriisien ja aseellisten konfliktien hillitsemiseen.\nD on väärin. Kielitoimiston sanakirjassa kriisinhallinta tarkoittaa kriisin ehkäisemistä tai rauhoittamista.\n\nLähde:\nS. 51, taulukko 2.\nRatkaiseva lainaus, EU CBRNE Glossary: ”toimet, joilla pyritään ehkäisemään kriisitilanteita (varautuminen), reagoimaan niihin”.",
      "learningPoint": "Opiskelijan tulee yhdistää taulukon määritelmät niiden oikeisiin lähteisiin ja erottaa yleinen kriisinhallinta kansainvälisestä kriisinhallintatoiminnasta.\nHakuvinkki: Ctrl+F: EU CBRNE Glossary ja koordinoidut toimet."
    },
    {
      "id": "g-m17-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan crisis management -käsitteen suomentaminen pelkästään kansainväliseksi sotilaalliseksi tai siviilikriisinhallinnaksi voi kaventaa käsitteen merkitystä. Kansainvälisessä kirjallisuudessa käsitteellä voidaan tarkoittaa myös yhteiskunnallista, poliittista ja organisatorista kriisinhallintaa.",
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
        "articleId": "kasitteet-kriisissa",
        "page": "50–51",
        "section": "Kriisinhallinta"
      },
      "explanation": "Kokonaisturvallisuuden sanastossa kriisinhallinta liittyy erityisesti kansainvälisiin operaatioihin. Englanninkielinen crisis management on kuitenkin usein tätä laajempi käsite, joka kattaa esimerkiksi organisaatioiden ja yhteiskunnan kriisinhallinnan.\n\nLähde:\nS. 50–51, ”Kriisinhallinta”.\nRatkaiseva lainaus, s. 51: ”Sanastossa ehdotettu englanninkielinen käännös on osin harhaanjohtava”.",
      "learningPoint": "Opiskelijan tulee erottaa yhden sanaston rajattu määritelmä käsitteen laajemmasta kansainvälisestä käytöstä. Yhden määritelmän perusteella ei saa kaventaa käsitteen kaikkia mahdollisia merkityksiä.\nHakuvinkki: Ctrl+F: osin harhaanjohtava ja yhteiskunnallisen, poliittisen."
    },
    {
      "id": "g-m17-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kriisinhallinnan, kriisijohtamisen ja kriisijohtajuuden käsitteet?",
      "options": [
        {
          "id": "a",
          "text": "Kriisijohtajuus tarkoittaa kaikkien yhteiskunnan toimijoiden yhteistoimintaa, kun taas kriisinhallinta viittaa yksinomaan yksittäisen johtajan päätöksiin."
        },
        {
          "id": "b",
          "text": "Kriisijohtaminen on kriisinhallintaa laajempi käsite, joka sisältää kaikki kriisiä edeltävät, kriisinaikaiset ja kriisin jälkeiset toimet."
        },
        {
          "id": "c",
          "text": "Kriisinhallinta ja kriisijohtajuus ovat täysin toisistaan erillisiä käsitteitä, sillä kriisinhallinnassa ei voi olla yksilöjohtajien toimintaa."
        },
        {
          "id": "d",
          "text": "Kriisinhallinta voi kattaa laajan hallintaprosessin, kriisijohtaminen painottaa johtoroolissa olevien toimijoiden toimintaa ja kriisijohtajuus erityisesti henkilöjohtajien kriisinaikaista johtamista."
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
        "articleId": "kasitteet-kriisissa",
        "page": "52 ja 54",
        "section": "Kriisijohtaminen"
      },
      "explanation": "D on oikein. Kirjoittajan käsitekartassa kriisinhallinta on laajin käsite. Kriisijohtaminen sijoittuu sen sisälle ja kriisijohtajuus puolestaan kriisijohtamisen osaksi.\nA on väärin. Se liittää yhteistoiminnallisen kriisinhallinnan piirteitä kriisijohtajuuteen.\nB on väärin. Kriisijohtaminen on osa kriisinhallintaa, ei sitä laajempi käsite.\nC on väärin. Kriisijohtajuus sisältyy kriisijohtamiseen ja sitä kautta kriisinhallintaan.\n\nLähde:\nS. 52 ja 54, ”Kriisijohtaminen” ja kuva 2.\nRatkaiseva lainaus, s. 54: ”Kriisinhallinta sisältää kriisijohtamisen”.",
      "learningPoint": "Opiskelijan tulee tunnistaa käsitteiden hierarkkinen suhde ja erottaa laaja hallintaprosessi johtamisrooleihin keskittyvästä toiminnasta.\nHakuvinkki: Ctrl+F: Kriisinhallinta sisältää kriisijohtamisen ja henkilöjohtajien."
    },
    {
      "id": "g-m17-q10",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvausta kokonaisturvallisuuden ja yhteistoiminnallisen kriisinhallinnan eroista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kokonaisturvallisuus korostaa eri toimijoiden yhteistoiminnallista varautumista, kun taas yhteistoiminnallinen kriisinhallinta kattaa selvemmin myös kriisin aikaisen ja jälkeisen yhteistyön."
        },
        {
          "id": "b",
          "text": "Yhteistoiminnallinen kriisinhallinta rajautuu valtion ja viranomaisten yhteistyöhön, kun taas kokonaisturvallisuus kattaa myös kansalaiset ja järjestöt."
        },
        {
          "id": "c",
          "text": "Kokonaisturvallisuus on kirjoittajan mukaan yhteistoiminnallista kriisinhallintaa normatiivisempi käsite, koska se sisältää oletuksen tietyn yhteistoimintamallin toivottavuudesta."
        },
        {
          "id": "d",
          "text": "Yhteistoiminnallinen kriisinhallinta tarkoittaa yksinomaan kriisin jälkeistä oppimista, kun taas kokonaisturvallisuus tarkoittaa vain kriisin aikana tapahtuvaa toimintaa."
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
        "articleId": "kasitteet-kriisissa",
        "page": "53",
        "section": "Kokonaisturvallisuus ja yhteistoiminnallinen kriisinhallinta"
      },
      "explanation": "A on oikein. Kokonaisturvallisuus painottaa varautumista, yhteistoiminnallinen kriisinhallinta kattaa selvemmin kriisin eri vaiheet.\nB on väärin. Yhteistoiminnallinen kriisinhallinta korostaa myös muiden kuin valtiollisten toimijoiden välistä yhteistyötä.\nC on oikein. Kokonaisturvallisuus on tiettyyn suomalaisen turvallisuuspolitiikan malliin viittaava ja siten normatiivisempi käsite.\nD on väärin. Yhteistoiminnallinen kriisinhallinta kattaa varautumisen, kriisiin vastaamisen ja kriisistä oppimisen.\n\nLähde:\nS. 53, ”Kokonaisturvallisuus ja yhteistoiminnallinen kriisinhallinta”.\nRatkaiseva lainaus: ”Yhteistoiminnallinen kriisinhallinta on tätä laajempi”.",
      "learningPoint": "Opiskelijan tulee erottaa kahden läheisen käsitteen ajalliset ja normatiiviset painotukset. Molemmat kuvaavat yhteistyötä, mutta eivät täysin samalla tavalla.\nHakuvinkki: Ctrl+F: normatiivisemman oletuksen ja autonomisten toimijoiden."
    },
    {
      "id": "g-m17-q11",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Tosi vai epätosi?\nPolykriisit ja hiipivät kriisit haastavat kriisinhallinnan perinteistä vaiheittaista tarkastelua eri tavoin. Polykriiseissä kriisit voivat olla päällekkäisiä ja vaikuttaa toisiinsa, kun taas hiipivissä kriiseissä erityisesti niiden vähittäinen kehittyminen ja epäselvät alku- ja päättymiskohdat vaikeuttavat varautumista ja vastuunjakoa.",
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
        "articleId": "kasitteet-kriisissa",
        "page": "50",
        "section": "Kriisinhallinta"
      },
      "explanation": "Polykriisit muodostuvat useista toisiinsa kytkeytyvistä kriiseistä, kun taas hiipivät kriisit kehittyvät vähitellen ja voivat jäädä pitkään vaikeasti havaittaviksi.\nMolemmat vaikeuttavat kriisiä edeltävän, kriisinaikaisen ja kriisin jälkeisen toiminnan selkeää erottamista.\n\nLähde:\nS. 50, ”Kriisinhallinta”.\nRatkaiseva lainaus: ”monien päällekkäisten ja toisiinsa vaikuttavien kriisien polykriisit”.",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi kriisityyppiä niiden ominaispiirteisiin ja ymmärtää, miksi ne haastavat kriisinhallinnan syklimallia eri tavoin.\nHakuvinkki: Ctrl+F: polykriisit ja hiipivät kriisit."
    },
    {
      "id": "g-m17-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin kuvausta kriisinhallinnan erilaisista määritelmistä?",
      "options": [
        {
          "id": "a",
          "text": "ISO:n vuoden 2021 kriisinhallinnan määritelmä vastaa sykliajattelua, kun taas vuoden 2025 määritelmä viittaa ensisijaisesti kriisin aikaiseen toimintaan."
        },
        {
          "id": "b",
          "text": "Kokonaisturvallisuuden sanaston kriisinhallinnan määritelmä painottaa suunniteltua kansainvälistä toimintaa, kun taas Kielitoimiston sanakirjan määritelmä on yleisempi."
        },
        {
          "id": "c",
          "text": "EU CBRNE Glossaryn määritelmä kattaa kriisin ehkäisemisen, siihen reagoimisen, vaikutusten lieventämisen ja palautumisen."
        },
        {
          "id": "d",
          "text": "ISO:n vuoden 2025 määritelmä laajensi kriisinhallinnan ensisijaisesti kaikkiin kriisin vaiheisiin, kun taas vuoden 2021 määritelmä rajasi sen kriisin aikaiseen toimintaan."
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
        "articleId": "kasitteet-kriisissa",
        "page": "50–51",
        "section": "Kriisinhallinta"
      },
      "explanation": "A on oikein. Vuoden 2021 määritelmä vastaa laajempaa sykliajattelua, kun taas vuoden 2025 määritelmä painottaa kriisinaikaista toimintaa.\nB on oikein. Kokonaisturvallisuuden sanasto viittaa kansainväliseen toimintaan, mutta Kielitoimiston sanakirja kuvaa kriisinhallintaa yleisemmin.\nC on oikein. EU CBRNE Glossary kattaa kriisinhallinnan useita ajallisia vaiheita.\nD on väärin. Se vaihtaa ISO:n määritelmien ajalliset painotukset keskenään.\n\nLähde:\nS. 50–51, ”Kriisinhallinta” ja taulukko 2.\nRatkaiseva lainaus, s. 50: ”ISO:n aiempi (2021) kriisinhallinnan [...] määritelmä vastaa syklinäkökulmaa”.",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi eri vuonna julkaistua määritelmää niiden oikeisiin sisältöihin. Samalta organisaatiolta peräisin olevat määritelmät eivät välttämättä painota samoja asioita.\nHakuvinkki: Ctrl+F: uudempi (2025) ja aiempi (2021)."
    },
    {
      "id": "g-m17-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nKokonaisturvallisuuden käsitteen kansainvälisten vastineiden tarkastelu on kirjoittajan mukaan tarpeellista, koska suomalaisen kokonaisturvallisuusmallin erityisyyden korostaminen voi jättää muiden käsitteiden alla tehdyn monitoimijaisen kriisinhallinnan tutkimuksen ja käytännöt huomiotta.",
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
        "articleId": "kasitteet-kriisissa",
        "page": "44 ja 52"
      },
      "explanation": "Kirjoittaja katsoo, että kokonaisturvallisuuden vertaaminen kansainvälisiin käsitteisiin auttaa tunnistamaan samankaltaisia toimintatapoja ja hyödyntämään niistä tehtyä tutkimusta.\nYhteistoiminnallinen kriisinhallinta on yksi vaihtoehtoinen käsite, jonka avulla tätä voidaan tehdä.\n\nLähde:\nS. 44 ja 52, johdanto ja ”Kokonaisturvallisuus ja yhteistoiminnallinen kriisinhallinta”.\nRatkaiseva lainaus, s. 44: ”muiden käsitteiden alla kuvatut käytännöt ja tutkimus voivat jäädä sivuun”.",
      "learningPoint": "Opiskelijan tulee yhdistää käsitteiden kansainvälisen vertailun tarve siihen mahdolliseen seuraukseen, että muiden käsitteiden alla tuotettu tutkimustieto jää hyödyntämättä.\nHakuvinkki: Ctrl+F: kansainvälisesti uniikkina ja jäädä sivuun."
    },
    {
      "id": "g-m17-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein poikkeusolojen ja häiriötilanteiden eroja sekä niiden suhdetta poliittiseen päätöksentekoon? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Poikkeusoloihin liittyy usein erityisten toimivaltuuksien myöntäminen valtionjohdolle tai viranomaisille, ja Suomessa niiden käyttöönotto on poliittisesti johdettu prosessi."
        },
        {
          "id": "b",
          "text": "Häiriötilanne tarkoittaa aina tilannetta, jossa valmiuslain mukaiset poikkeukselliset toimivaltuudet on jo otettu käyttöön."
        },
        {
          "id": "c",
          "text": "Poikkeusolojen tarve voi olla poliittisesti kiistelty, vaikka häiriötilanteen vaikutukset olisivat vakavia ja sen taustalla olisi vihamielistä toimintaa."
        },
        {
          "id": "d",
          "text": "Häiriötilanteita voi esiintyä vain valtion ja viranomaisten toiminnassa, kun taas poikkeusolot koskevat ensisijaisesti yksittäisten organisaatioiden sisäisiä prosesseja."
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
        "articleId": "kasitteet-kriisissa",
        "page": "48–49"
      },
      "explanation": "A on oikein. Poikkeusolot liittyvät valtion erityisvaltuuksiin, ja Suomessa niiden käyttöönotto edellyttää poliittista päätöksentekoa ja parlamentaarista hyväksyntää.\nB on väärin. Häiriötilanne voidaan usein hallita tavanomaisin toimivaltuuksin.\nC on oikein. Poikkeusolojen tarve on poliittisesti arvioitava ja mahdollisesti kiistanalainen, eikä vakavakaan häiriötilanne automaattisesti johda poikkeusoloihin.\nD on väärin. Häiriötilanteita voi esiintyä erilaisissa organisaatioissa, mutta poikkeusolot liittyvät vahvasti valtioon.\n\nLähde:\nS. 48–49, poikkeusolojen kansainvälinen tarkastelu ja kuva 1.\nRatkaiseva lainaus, s. 48: ”Poikkeusolojen käsite linkittyy vahvasti valtioon”.",
      "learningPoint": "Opiskelijan tulee yhdistää käsitteiden määritelmät niiden toimivaltuuksia ja poliittista päätöksentekoa koskeviin rajauksiin.\nHakuvinkki: Ctrl+F: hallituksen ja presidentin yksimielisyyttä ja poliittisuuden vuoksi."
    },
    {
      "id": "g-m17-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvan 2 käsitekarttaa ja sen selitystä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kriisinhallinta on käsitekartassa laajin käsite, jonka sisälle sijoittuvat kriisijohtaminen ja kriisijohtajuus."
        },
        {
          "id": "b",
          "text": "Kriisijohtajuus kattaa käsitekartassa kaiken yhteistoiminnallisen kriisinhallinnan, koska yksittäiset johtajat vastaavat kaikkien toimijoiden yhteisistä toimenpiteistä."
        },
        {
          "id": "c",
          "text": "Kokonaisturvallisuus ja yhteistoiminnallinen kriisinhallinta kuvaavat eri toimijoiden yhteistyöhön perustuvia kriisinhallinnan muotoja, mutta niiden ajalliset ja normatiiviset painotukset eroavat."
        },
        {
          "id": "d",
          "text": "Kokonaisturvallisuus on käsitekartassa kriisinhallintaa laajempi yläkäsite, joka sisältää kaiken kriisin aikaisen ja jälkeisen toiminnan."
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
        "articleId": "kasitteet-kriisissa",
        "page": "54"
      },
      "explanation": "A on oikein. Kriisinhallinta kattaa laajasti kriiseihin liittyvän toiminnan, ja kriisijohtaminen sekä kriisijohtajuus sijoittuvat sen sisälle.\nB on väärin. Kriisijohtajuus viittaa henkilöjohtajien toimintaan, ei kaikkeen yhteistoiminnalliseen kriisinhallintaan.\nC on oikein. Molemmat käsitteet kuvaavat yhteistyötä, mutta kokonaisturvallisuus painottaa yhteistoiminnallista varautumista ja on normatiivisempi.\nD on väärin. Kriisinhallinta on käsitekartan laajin käsite, ei kokonaisturvallisuus.\n\nLähde:\nS. 54, kuva 2 ja sen jälkeinen kappale.\nRatkaiseva lainaus: ”Kriisinhallinta on määritelty yleisemmäksi käsitteeksi”.",
      "learningPoint": "Opiskelijan tulee tulkita käsitekartan hierarkkisia suhteita ja yhdistää ne käsitteiden ajallisiin sekä normatiivisiin painotuksiin.\nHakuvinkki: Siirry sivun 54 kuvaan 2. Ctrl+F: Kriisinhallinta on määritelty yleisemmäksi."
    },
    {
      "id": "g-m17-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Tosi vai epätosi?\nKuvan 3 perusteella kokonaisturvallisuuden ensisijainen painotus sijoittuu kriisiä edeltävään varautumiseen, mutta sen mahdolliset ulottuvuudet voivat ulottua myös kriisin aikaiseen ja jälkeiseen toimintaan. Vastaavasti kriisijohtamisen ja kriisijohtajuuden ensisijainen painotus on kriisin aikaisessa johtamisessa, vaikka niillä voi olla myös kriisiä edeltäviä ja jälkeisiä ulottuvuuksia.",
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
        "articleId": "kasitteet-kriisissa",
        "page": "55"
      },
      "explanation": "Kuvassa kokonaisturvallisuuden paksu viiva sijoittuu kriisiä edeltävään vaiheeseen, mutta vaaleampi viiva jatkuu myös myöhempiin vaiheisiin.\nKriisijohtamisen ja kriisijohtajuuden paksu viiva puolestaan sijoittuu kriisin aikaiseen vaiheeseen, mutta vaaleammat viivat ulottuvat kriisiä edeltävään ja jälkeiseen aikaan.\n\nLähde:\nS. 55, kuva 3 ja sitä edeltävä teksti.\nRatkaiseva lainaus: ”paksummat (mahdolliset painotukset) sekä vaaleammat viivat (mahdolliset ulottuvuudet)”.",
      "learningPoint": "Opiskelijan tulee erottaa käsitteen ensisijainen ajallinen painotus sen mahdollisista muista ulottuvuuksista. Kuvion paksu ja vaalea viiva eivät tarkoita samaa asiaa.\nHakuvinkki: Siirry sivun 55 kuvaan 3. Ctrl+F: paksummat ja vaaleammat viivat."
    },
    {
      "id": "g-m17-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kansainvälisten ja suomalaisten kriisinhallintakäsitteiden väliset suhteet?",
      "options": [
        {
          "id": "a",
          "text": "Kokonaisturvallisuuden sanaston crisis management -käännös kattaa kansainvälisessä käytössä yksinomaan sotilaalliset kriisinhallintaoperaatiot, joten sitä ei tarvitse täsmentää muilla käsitteillä."
        },
        {
          "id": "b",
          "text": "Kansainvälisessä kirjallisuudessa crisis leadership tarkoittaa yleisimmin hajautettua yhteiskunnallista kriisinhallintaa, kun taas crisis management viittaa vain henkilöjohtajien kriisiaikaisiin päätöksiin."
        },
        {
          "id": "c",
          "text": "Kokonaisturvallisuuden sanaston kriisinhallintaa koskeva käännös on osittain harhaanjohtava, koska crisis management voi tarkoittaa kansainvälisiä operaatioita laajempaa toimintaa, ja crisis leadership painottaa yleensä henkilöityneempää johtamista."
        },
        {
          "id": "d",
          "text": "Suomenkieliset kriisinhallinta ja kriisijohtaminen vastaavat täysin erillisiä englanninkielisiä käsitteitä, joiden käyttö ei kansainvälisessä kirjallisuudessa mene päällekkäin."
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
        "articleId": "kasitteet-kriisissa",
        "page": "51–52",
        "section": "Kriisinhallinta"
      },
      "explanation": "C on oikein. Englanninkielinen crisis management voi viitata monenlaiseen kriisinhallintaan, ja crisis leadership painottaa henkilöjohtajuutta. Suomenkieliset vastineet ovat osittain päällekkäisiä.\nA on väärin. Crisis management ei rajoitu kansainvälisiin kriisinhallintaoperaatioihin.\nB on väärin. Käsitteiden painotukset on vaihdettu keskenään.\nD on väärin. Kirjoittaja korostaa käsitteiden päällekkäistä käyttöä.\n\nLähde:\nS. 51–52, ”Kriisinhallinta” ja ”Kriisijohtaminen”.\nRatkaiseva lainaus, s. 52: ”crisis leadership viittaisi henkilöityneempään kriisitilanteiden johtamiseen”.",
      "learningPoint": "Opiskelijan tulee yhdistää crisis management ja crisis leadership niiden oikeisiin merkityspainotuksiin sekä tunnistaa, miten suomenkieliset vastineet voivat olla osittain päällekkäisiä. Väärissä vaihtoehdoissa käsitteisiin liitetään toisen käsitteen ominaisuuksia tai niiden merkitystä rajataan perusteettomasti.\nHakuvinkki: Ctrl+F: crisis leadership viittaisi ja osin harhaanjohtava."
    },
    {
      "id": "g-m17-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin johtopäätöksiä kriisinhallinnan ajallisista ulottuvuuksista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kriisinhallinta ja yhteistoiminnallinen kriisinhallinta voivat kattaa kriisiä edeltävän, kriisinaikaisen ja kriisin jälkeisen toiminnan, vaikka kriisinhallinnan määritelmät voivat painottaa myös vain kriisinaikaista toimintaa."
        },
        {
          "id": "b",
          "text": "Kokonaisturvallisuus rajautuu kaikissa tulkinnoissa vain kriisiä edeltävään aikaan, eikä kriisinaikainen vaste tai kriisin jälkeinen oppiminen voi liittyä siihen."
        },
        {
          "id": "c",
          "text": "Kriisijohtaminen ja kriisijohtajuus voivat sisältää kriisiä edeltäviä ja jälkeisiä ulottuvuuksia, vaikka niiden keskeinen painotus on kriisin aikaisessa johtamisessa."
        },
        {
          "id": "d",
          "text": "Polykriisit ja hiipivät kriisit tekevät kriisin ajallisista vaiheista aina selkeämpiä, koska niiden alkaminen ja päättyminen voidaan määritellä täsmällisesti."
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
        "articleId": "kasitteet-kriisissa",
        "page": "55"
      },
      "explanation": "A on oikein. Kriisinhallinta ja yhteistoiminnallinen kriisinhallinta kattavat lähtökohtaisesti kaikki kriisin vaiheet.\nB on väärin. Kokonaisturvallisuuden painotus on varautumisessa, mutta se voi ulottua myös kriisin aikaiseen ja jälkeiseen toimintaan.\nC on oikein. Kriisijohtamisen ja kriisijohtajuuden painotus on kriisin aikainen, mutta niiden ajalliset ulottuvuudet voivat olla laajempia.\nD on väärin. Polykriisit ja hiipivät kriisit nimenomaan hämärtävät vaiheiden välisiä rajoja.\n\nLähde:\nS. 55, johtopäätökset ja kuva 3.\nRatkaiseva lainaus: ”kriisien vaiheiden erot edelleen hämärtyvät”.",
      "learningPoint": "Opiskelijan tulee erottaa käsitteiden tavalliset painotukset niiden mahdollisista laajemmista merkityksistä. Ensisijainen ajallinen painotus ei tarkoita ehdotonta rajausta.\nHakuvinkki: Ctrl+F: kriisin kaikkiin vaiheisiin ja varautumisen ja vasteen suhde."
    },
    {
      "id": "g-m17-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista väittämistä EI vastaa kirjoittajan johtopäätöksiä kriisinhallinnan käsitteiden määrittelystä?",
      "options": [
        {
          "id": "a",
          "text": "Käsitteiden määritelmät voivat olla toimijakohtaisia, kontekstisidonnaisia ja poliittisia, minkä vuoksi yhtä lopullista määritelmää ei välttämättä ole."
        },
        {
          "id": "b",
          "text": "Rajapintakäsitteiden näkökulma voi mahdollistaa eri käsitteellisten ymmärrysten arvioimisen ja yhteistyön eroavista määritelmistä huolimatta."
        },
        {
          "id": "c",
          "text": "Kansainvälisten organisaatioiden ja standardien määritelmät voivat tarjota lähtökohtia yhteiselle ymmärrykselle, vaikka niitä ei pidettäisi lopullisina totuuksina."
        },
        {
          "id": "d",
          "text": "Kriisinhallinnan käsitteille tulee määritellä yksi pysyvä ja yleispätevä merkitys, koska erilaiset kriisit voidaan kuvata samoilla käsitteillä ilman kontekstisidonnaista tulkintaa."
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
        "articleId": "kasitteet-kriisissa",
        "page": "55–56"
      },
      "explanation": "A on oikein. Kirjoittaja painottaa määritelmien muuttuvuutta ja kiistanalaisuutta.\nB on oikein. Rajapintakäsitteiden avulla voidaan rakentaa yhteistä ymmärrystä ilman täydellistä yksimielisyyttä määritelmistä.\nC on oikein. Kansainväliset standardit ja sanastot voivat auttaa yhteisen käsitteellisen perustan rakentamisessa.\nD on väärin. Kirjoittaja korostaa käsitteiden joustavuutta, sillä kriisit eivät ole keskenään samanlaisia.\n\nLähde:\nS. 55–56, johtopäätösten loppu.\nRatkaiseva lainaus, s. 56: ”Lopulliset määritelmät eivät edes ole välttämättömiä.”",
      "learningPoint": "Opiskelijan tulee erottaa yhteisten määritelmien hyödyllisyys niiden ehdottomasta ja pysyvästä sitovuudesta. Käsitteiden selkeys ei edellytä yhtä ainoaa lopullista määritelmää.\nHakuvinkki: Ctrl+F: Lopulliset määritelmät ja rajapintakäsitteiden."
    },
    {
      "id": "g-m17-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Niskasen katsauksen käsitteellisten vertailujen ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suomenkielisten kriisinhallintakäsitteiden vertaaminen kansainvälisiin määritelmiin voi paljastaa käsitteiden kansallisia erityispiirteitä ja auttaa tunnistamaan muissa yhteyksissä käytettyjä vastaavia käsitteitä."
        },
        {
          "id": "b",
          "text": "Koska kriisin määritelmät vaihtelevat, kirjoittajan mukaan käsitteitä ei ole mahdollista käyttää tutkimuksessa tai käytännön kriisinhallinnassa lainkaan."
        },
        {
          "id": "c",
          "text": "Kriisinhallinnan, kriisijohtamisen ja kokonaisturvallisuuden käsitteet voivat olla osittain päällekkäisiä, mutta niiden erojen ymmärtäminen auttaa valitsemaan tilanteeseen sopivia käsitteitä."
        },
        {
          "id": "d",
          "text": "Kokonaisturvallisuus on kansainvälisesti ainoa käsite, jolla voidaan kuvata eri toimijoiden yhteistyöhön perustuvaa kriisinhallintaa, eikä yhteistoiminnallisen kriisinhallinnan käsite tuo siihen uusia näkökulmia."
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
        "articleId": "kasitteet-kriisissa",
        "page": "53–56",
        "section": "Johtopäätökset"
      },
      "explanation": "A on oikein. Kansainvälinen vertailu auttaa tunnistamaan suomalaisen kriisikäsitteistön erityispiirteitä ja laajempia yhteyksiä.\nB on väärin. Käsitteiden moninaisuus ei estä niiden käyttöä, vaan korostaa määrittelyn merkitystä.\nC on oikein. Käsitteiden päällekkäisyys ja erilaiset painotukset tekevät niiden huolellisesta valinnasta tärkeää.\nD on väärin. Yhteistoiminnallinen kriisinhallinta tarjoaa kokonaisturvallisuudelle kansainvälisen ja analyyttisemmän vertailukohdan.\n\nLähde:\nS. 53–56, ”Johtopäätökset”, erityisesti kuvat 2 ja 3.\nRatkaiseva lainaus, s. 56: ”Tietoisuus kriisinhallinnan käsitteiden moninaisuudesta mahdollistaa kriittisen tarkastelun ohella yhteistyön”.",
      "learningPoint": "Opiskelijan tulee yhdistää katsauksen keskeiset johtopäätökset ja erottaa käsitteiden moninaisuus niiden käyttökelvottomuudesta. Päällekkäiset käsitteet voivat olla hyödyllisiä, vaikka ne eivät tarkoittaisi täsmälleen samaa asiaa.\nHakuvinkki: Ctrl+F: kansainvälisiä määritelmiä ja käsitteiden moninaisuudesta."
    }
  ]
} satisfies ValintakoeGExercise;
