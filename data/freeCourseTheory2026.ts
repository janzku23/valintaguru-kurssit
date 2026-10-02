export type FreeTheoryPage = {
  page: number;
  blocks: string[];
};

export type FreeTheoryArticle = {
  id: string;
  title: string;
  author: string;
  localPdfUrl: string;
  originalPdfUrl: string;
  pages: FreeTheoryPage[];
};

export const freeCourseTheory2026: FreeTheoryArticle[] = [
  {
    "id": "aineisto-1",
    "title": "Tutkimustiedon hyödyntäminen valtioneuvoston ja eduskunnan päätöksenteossa ja valmistelussa – kirjallisuuskatsaus",
    "author": "Antti Pelkonen",
    "localPdfUrl": "/aineistot/valintakoe-g-2026/Aineisto-1-1.pdf",
    "originalPdfUrl": "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Aineisto-1-1.pdf",
    "pages": [
      {
        "page": 1,
        "blocks": [
          "Tutkimustiedon hyödyntäminen valtioneuvoston ja eduskunnan päätöksenteossa ja valmistelussa",
          "– kirjallisuuskatsaus",
          "Antti Pelkonen",
          "Suomessa ei ole tehty tutkimukseen perustuvaa kokoavaa analyysiä tutkitun tiedon hyödyntämisestä poliittisen päätöksenteon tukena. Tässä artikkelissa kartoitetaan kirjallisuuskatsauksen avulla aiheeseen liittyvää tutkimusta ja luodaan tällaista kokonaiskuvaa valtioneuvoston ja eduskunnan päätöksenteon kontekstissa. Artikkeli tarkastelee, mitä olemassa oleva tutkimus kertoo tutkimustiedon hyödyntämisestä ja erityisesti hyödyntämisen yleisyydestä valtioneuvoston ja eduskunnan päätöksenteossa. Artikkelissa tarkastellaan 38 tutkimusta vuosilta 2010–2023.",
          "Johdanto",
          "Yhteiskunnallisen päätöksenteon tietopohjan vahvistamisesta on puhuttu pitkään sekä kansainvälisesti että Suomessa (esim. Baron, 2018). Suomessa aihetta pohdittiin varsin intensiivisesti muun muassa 2010-luvun alussa, jolloin valtioneuvoston piirissä asiaa tarkasteli sekä poikkihallinnollinen kehittämistyöryhmä (valtioneuvoston kanslia, 2011) että selvityshenkilö (Raivio, 2014). Vuonna 2013 valtion tutkimuslaitosten ja -rahoituksen kokonaisuudistuksessa (ns. TULA-uudistus) linjattiin, että ”yhteiskuntapolitiikan valmistelun, päätöksenteon ja toimeenpanon tulisi perustua tutkittuun tietoon” (valtioneuvosto, 2013, s. 2). Aihepiirin kehittämistyötä on sittemmin tehty sekä valtionhallinnossa että tiedeyhteisön piirissä.",
          "2020-luvulla myös hallitusohjelmakirjauksissa on tunnistettu tutkitun tiedon merkitys päätöksenteon tukena. Pääministeri Marinin hallituksen (2019–2023) ohjelmassa linjattiin lupauksista politiikan uudistamiseksi. Yksi lupauksista koski tietopohjaista politiikkaa: hallitus sitoutui ”tietopohjaisen politiikan tekoon sekä systemaattiseen vaikutusarviointiin kaikessa lainvalmistelussa” sekä yhteistyön syventämiseen tiedeyhteisön kanssa (valtioneuvosto, 2019, s. 11). Vastaavasti pääministeri Orpon hallitusohjelmassa (2023–2027) todetaan, että ”hallitus hyödyntää yhteiskunnallisia tietovarantoja ja tutkittua tietoa aktiivisesti päätöksenteossaan, jotta rajalliset resurssit voidaan kohdistaa vaikuttaviin toimenpiteisiin” (valtioneuvosto 2023, s. 212). Vuonna 2019 Kiinasta käynnistynyt COVID-19pandemia nosti tieteen ja poliittisen päätöksenteon suhteen globaalisti aivan uudella tavalla valokeilaan ja suuren kiinnostuksen kohteeksi.",
          "Julkisessa keskustelussa sekä Suomessa että laajemminkin päätöksenteon tietopohjaisuudesta esitetään aika ajoin erilaisia näkemyksiä ja arvioita. Arviot pohjautuvat"
        ]
      },
      {
        "page": 2,
        "blocks": [
          "usein esimerkiksi henkilökohtaisiin kokemuksiin, satunnaisiin prosesseihin tai yksittäisten tutkimusten tuloksiin. Tutkimustietoon perustuvaa, kokoavaa analyysiä siitä, kuinka yleistä tutkimustiedon hyödyntäminen päätöksenteossa on ja minkä tahojen tuottamaa tutkittua tietoa hyödynnetään päätöksenteon ja päätöksenteon valmistelun tukena erilaisissa kansallisissa konteksteissa, ei useinkaan ole. Tässä artikkelissa pyritään kirjallisuuskatsauksen avulla luomaan tällaista analyysiä Suomen, ja erityisesti valtioneuvoston ja eduskunnan päätöksenteon, kontekstissa. Kokoavalla analyysillä tarkoitetaan tässä artikkelissa nimenomaan näkymää tutkimustiedon hyödyntämisen laajuuteen ja yleisyyteen päätöksenteossa.",
          "Artikkeli etenee seuraavasti. Seuraavassa luvussa tarkastellaan aiempaa kansainvälisestä tutkimusta suhteessa artikkelin keskeisiin kiinnostuksen kohteisiin ja sen pohjalta esitetään täsmennetyt tutkimuskysymykset. Tämän jälkeen esitetään kirjallisuuskatsauksen toteutustapa, menetelmät sekä muodostettu aineisto ja perustellaan näihin liittyvät keskeiset ratkaisut. Seuraavissa kolmessa luvussa kuvataan tutkimuksen tulokset ja viimeisessä luvussa vedetään tulokset yhteen ja tehdään niiden perusteella johtopäätöksiä.",
          "Tietopohjainen päätöksenteko – Tutkimustiedon hyödyntämisen yleisyys, politiikkapohjainen tieto ja kansalliset erityispiirteet",
          "Tietopohjaisesta politiikasta on viime vuosina tullut ideaali, jota muun muassa monet kansainväliset organisaatiot (esimerkiksi Euroopan unioni, Taloudellisen yhteistyön ja kehityksen järjestö OECD ja Maailman terveysjärjestö WHO) voimallisesti edistävät. Samalla aihetta koskeva kansainvälinen tutkimus on lisääntynyt. Tutkimuksessa keskeisiä kiinnostuksen kohteita ovat olleet muun muassa kysymykset siitä, mitkä tekijät edistävät ja estävät tutkimustiedon käyttöä, miten tutkimuksen hyödyntämistä voitaisiin lisätä ja minkälaisia vaikutuksia tutkimustiedon edistämiseen pyrkivillä toimenpiteillä on ollut (esim. Oliver ym., 2014). Mielenkiintoista on, että kansainvälisessä tutkimuksessa on varsin vähän tarkasteltu kysymystä siitä, missä määrin poliittinen päätöksenteko ja päätöksenteon valmistelu todella on tutkimusnäyttöön perustuvaa. Esimerkiksi Oliver ym. (2014) toteavat, että tutkimuksen perusteella tiedetään yllättävän niukasti siitä, missä määrin päätöksentekijät ja valmistelijat tutkimustietoa käyttävät. Vastaavasti Head (2015, s. 474) arvioi, että on vähän tutkimusta siitä, mitä tiedon lähteitä ja miten tutkimustietoa päätöksenteossa käytetään. Erityisen vähän on tutkimuksia, jotka pyrkivät määrällisesti arvioimaan, missä määrin ja miten tutkimusta käytetään poliittisten päätösten tukena (Zardo & Collie, 2015). Esimerkiksi terveyspolitiikan osalta Masood ym. (2020) arvioivat, että on selvä puute laajamittaisesta, kvantifioivasta näytöstä koskien sitä, missä määrin päätöksentekijät hyödyntävät tutkimustietoa. Samanlaiseen tulokseen päätyvät Orton ym. (2011) systemaattisessa kirjallisuuskatsauksessa. Kun otetaan huomioon aihetta tarkastelevan kansainvälisen tutkimuskirjallisuuden vähyys, kysymys tutkimustiedon hyödyntämisen yleisyydestä on erityisen kiinnostava, sillä sen voidaan ajatella olevan koko tietopohjaisen päätöksenteon ajatuksen taustalla. Kysymys on myös poliittis-hallinnollisen järjestelmän"
        ]
      },
      {
        "page": 3,
        "blocks": [
          "kannalta tärkeä: jos tiedämme kovin vähän tutkimustiedon hyödyntämisen yleisyydestä, se heijastuu tietämykseemme koko tietopohjaisen päätöksenteon tilasta.",
          "Yksittäisiä, laajoja aineistoja hyödyntäviä kansainvälisiä tutkimuksia tutkimustiedon käytön yleisyydestä on kuitenkin olemassa. Niiden tulokset viittaavat hieman eri suuntiin (ks. myös OECD, 2020, s. 14). Newmanin ym. (2017, s. 165) laajan kyselytutkimuksen mukaan politiikan valmistelijat eivät systemaattisesti hyödynnä akateemista tutkimustietoa politiikkaanalyysissä ja valmistelussa. Williamson ym. (2019) analysoivat tutkimustiedon käyttöä 131 politiikkadokumentin valmistelussa Australiassa terveyspolitiikan alueella ja saivat tulokseksi, että yleisesti ottaen tutkimustietoa hyödynnettiin ”kohtuullisesti”. Samansuuntaiseen tulokseen päätyy edellä mainittu Masoodin ym. (2020) systemaattinen katsaus: tutkimus antaa ”maltillista näyttöä” siitä, että erityyppistä tutkimustietoa käytetään politiikkapäätösten valmistelun tukena. Toisaalta on myös tutkimuksia, jotka raportoivat tutkimustiedon vahvasta ja laajasta hyödyntämisestä. Esimerkiksi Yin ym. (2021) analysoivat 7730:tä COVID-19-kriisiin liittyvää politiikkadokumenttia ja päätyivät johtopäätökseen, että globaalisti tarkastellen politiikkadokumentit merkittävässä määrin kytkeytyivät ajankohtaiseen, vertaisarvioituun ja korkeatasoiseen tieteelliseen tutkimukseen. Artikkeli tuntuisi osoittavan, että tietyntyyppisissä tilanteissa, tässä tapauksessa globaalin pandemian olosuhteissa, tutkimustietoon tukeutuminen voi olla ekstensiivistäkin.",
          "Tietopohjaisen politiikan ideaali voi joissain tapauksissa myös kääntyä toiseen ääripäähän. Näin on esimerkiksi tilanteissa, joissa tutkimustietoa käytetään valikoivasti poimien vain tavoiteltua ratkaisua ja poliittista linjausta tukevaa tutkimusnäyttöä päätöksenteon tueksi. Tietopohjainen politiikka muuttuu tällöin politiikkapohjaiseksi tiedoksi (policy-based evidence). Sen voidaan nähdä perustuvan kahdentyyppiseen valikoivuuteen: tutkimusnäyttö voidaan ohittaa tai vääristää, mikäli se on ristiriidassa poliittisten arvojen tai ideologian kanssa (normatiivinen valikoivuus), tai näyttö voidaan sivuuttaa tai tulkita väärin johtuen poliittis-hallinnollisen järjestelmän rajoittuneesta havaintokyvystä (kognitiivinen valikoivuus) (Strassheim & Kettunen, 2014). Tutkimuskirjallisuudesta löytyy runsaasti esimerkkejä politiikkaprosesseista, joissa tutkimusnäyttöä on hyödynnetty valikoivasti eri tavoin (esim. Parkhurst, 2017, s. 47–49). Cairneyn (2019) mukaan tietopohjainen politiikka ja politiikkapohjainen näyttö voidaankin nähdä eräänlaisena jatkumona, jonka ääripäissä ovat selkeästi kumpaankin kategoriaan kuuluvat tilanteet. Näiden väliin asettuu monenlaisia tilanteita, joissa on elementtejä kummastakin ja joita on viime kädessä vaikea kategorisoida selkeästi kummankaan otsikon alle. Mielenkiintoista on, että kansainvälisiä tutkimuksia, joissa systemaattisesti arvioitaisiin valikoivan tutkimustiedon käytön yleisyyttä, ei vaikuttaisi olevan.",
          "Aiempi tutkimus antaa vahvoja viitteitä myös siitä, että tutkimustiedon käytön toimintatavat ovat vahvasti kansallisesti institutionalisoituneita ja juurtuneita ja ne vaihtelevat merkittävästi eri maiden välillä. Tutkimuksen hyödyntämisen edellytyksiin vaikuttavia tekijöitä ovat esimerkiksi politiikan teon tavat ja kulttuuri, hallintasuhteet, tutkimustiedon tarjonta ja"
        ]
      },
      {
        "page": 4,
        "blocks": [
          "tuottajat sekä yleinen tutkimuksen ja tieteen arvostus, tutkimustiedon kysyntä sekä kytkennät tutkimustiedon tuottajien ja käyttäjien välillä (esim. Nutley ym., 2010). Näihin tekijöihin liittyvien kansallisten erityispiirteiden voi olettaa heijastuvan vahvasti siihen, missä määrin, miten ja minkä tahojen tuottamaa tutkimustietoa päätöksenteossa hyödynnetään. Toki on huomattava, että monet näistä tekijöistä voivat vaihdella kansallisesti eri politiikkasektoreilla. On esimerkiksi esitetty, että tietoon pohjautuvan politiikan edellytykset ovat paremmat sellaisilla politiikka-alueilla, joissa ideologiset kiistat ovat vähäisempiä ja tietty politiikkaparadigma tai lähestymistapa on jossain määrin vakiintunut (Head, 2015). Joka tapauksessa eri politiikkasektoreilla voi ajatella olevan erilaisia taipumuksia tutkimustiedon hyödyntämiseen ja ne voivat myös vaihdella ajan yli.",
          "Moderneissa yhteiskunnissa tutkimustietoa tuottavat hyvin monenlaiset toimijat. Kysymys siitä, minkä tahojen tuottamaan tietoa päätöksenteon tukena hyödynnetään, voikin kytkeytyä sekä edellä esiintuotuun tiedon valikoivaan käyttöön että kansallisiin erityispiirteisiin. Voi esimerkiksi olla, että kansallisista erityispiirteistä tai institutionaalisista rakenteista johtuen erilaisten tiedontuottajien asema suhteessa päätöksentekoon poikkeaa toisistaan. Samoin voi olla, että asiaan vaikuttaa tutkimustiedon mahdollinen valikoiva käyttö siten, että tietyissä tilanteissa tietoisesti vain tiettyjen tiedontuottajien tietoa hyödynnetään.",
          "Kytkeytyen edellä kuvattuun aiempaan tutkimuskirjallisuuteen tässä artikkelissa etsitään kirjallisuuskatsauksen avulla vastauksia seuraaviin tutkimuskysymyksiin:",
          "• Minkälaisista näkökulmista tutkimustiedon hyödyntämisen yleisyyttä valtioneuvoston",
          "ja eduskunnan päätöksenteossa ja päätöksenteon valmistelussa on tutkimuskirjallisuudessa tarkasteltu? • Minkälaisia hyödyntämisen yleisyyttä tarkastelevia tutkimuksia on olemassa? • Minkälaisia havaintoja on tehty hyödyntämisen yleisyydestä tutkimuskirjallisuudessa?",
          "Tähän liittyen kiinnitetään huomiota myös tutkimustiedon valikoivan käytön yleisyyteen. • Mitä tutkimukset kertovat siitä, minkä tahojen tuottamaa tietoa päätöksenteon tukena",
          "hyödynnetään?",
          "Tutkimus tuo kansainvälisestikin katsottuna uudenlaista näkökulmaa tutkimukseen, joka tarkastelee tutkitun tiedon ja päätöksenteon suhteita. Kuten edellä todettiin, tutkimustiedon hyödyntämisen yleisyyttä on kansainvälisessäkin tutkimuksessa tarkasteltu varsin vähän. Vastaavanlaisia, kokoavia analyysejä yhden maan tilanteesta ei näyttäisi ole olemassa, ainakaan englanniksi julkaistuna. Tässä suhteessa artikkeli avaa uuden tarkastelutavan aihepiiriin, ja olisikin hyvin kiinnostavaa, mikäli vastaavia analyysejä tehtäisiin Suomen kannalta kiinnostavien verrokkimaiden (esim. Pohjoismaiden) konteksteissa.",
          "Tutkimustiedon hyödyntäminen päätöksenteossa ja päätöksenteon valmistelussa voi olla hyvin moninaista. Alan tutkimuksessa viitataan usein ideaalityyppiseen jaotteluun, jonka mukaan tutkimustiedon hyödyntäminen voi olla instrumentaalista, käsitteellistä tai"
        ]
      },
      {
        "page": 5,
        "blocks": [
          "symbolista (esim. Amara ym., 2004; Weiss, 1979). Instrumentaalinen hyödyntäminen viittaa tilanteisiin, jossa tutkimustuloksia hyödynnetään suoraviivaisesti osana päätöksentekoa. Käsitteellisessä hyödyntämisessä puolestaan tietoa käytetään ymmärryksen lisäämiseen, kun taas symbolisessa hyödyntämisessä tutkimustietoa hyödynnetään toiminnan tai (jo päätettyjen) toimenpiteiden perustelemiseen tai legitimointiin, jolloin kyse on pitkälti tiedon poliittisesta tai taktisesta käytöstä. Hyödyntämisen tavat eivät ole toisiaan poissulkevia ja niitä voidaan jakaa edelleen yksityiskohtaisempiin muotoihin. Olennaista kuitenkin on, että ideaalityypit kuvaavat sitä, miten tutkimustietoa voidaan päätöksentekoprosesseissa käyttää monilla eri tavoin sekä monin erilaisin perustein, motiivein ja tavoittein. Aihetta tarkastelevan tutkimuksen näkökulmasta tärkeä seuraus tästä moninaisuudesta on se, että hyödyntämistä voidaan olettaa tapahtuvan myös siten, ettei siitä jää merkintää tai muuta jälkeä mihinkään asiakirjaan. Näin ollen hyödyntämistä voi olla tutkimuksen keinoin vaikea tavoittaa, ja sitä joudutaan analysoimaan usein myös epäsuorasti, esimerkiksi tarkastelemalla tutkimustoimijoiden edustusta eli ”läsnäoloa” erilaisissa päätöksenteko- ja valmistelutilanteissa. Olennainen seuraus tästä on, ettei ole olemassa yhtä (tai useampaa) selkeää mittaria tai seikkaa, joka kokonaisvaltaisesti kertoisi tutkimustiedon hyödyntämisestä, vaan asiaa on tutkimuksen keinoin perustellusti lähestytty monenlaisista näkökulmista. Tämä näkyy myös tämän tutkimuksen aineiston muodostavissa tutkimuksissa. Samalla on huomattava, että myös päätöksenteko- ja valmisteluprosessit ja -tilanteet ovat moninaisia. Lainvalmistelu on sekä valtioneuvoston että eduskunnan osalta keskeinen prosessi, mutta etenkin valtioneuvoston osalta kyseeseen tulevat myös monenlaiset muut päätöstilanteet ja niiden valmistelu, esimerkiksi muu sääntely, strategiat ja ohjausasiakirjat.",
          "Aineisto ja menetelmät",
          "Tässä kirjallisuuskatsauksessa yhdistetään kartoittavan (scoping review) ja systemaattisen kirjallisuuskatsauksen (systematic review) lähestymistapoja. Molemmissa katsaustyypeissä tutkimusaineistona ovat tietystä aiheesta tehdyt aiemmat tutkimukset. Katsauksissa olemassa olevia tutkimuksia etsitään laajasti useista luotettavista tietokannoista, kuvataan tutkimusten valinnan ja poissulkemisen kriteerit ja johtopäätökset johdetaan aineiston muodostavien tutkimusten tuloksista (Petticrew & Roberts, 2006). Keskeinen ero katsaustyyppien välillä liittyy siihen, minkälaisia kysymyksiin niitä sovelletaan. Systemaattiset katsaukset tarkastelevat tarkasti rajattuja kysymyksiä, kun taas kartoittavat katsaukset käsittelevät laajempia kysymyksiä ja pyrkivät luomaan kokonaiskuvaa olemassa olevasta tutkimustiedosta ja siitä, minkälaisia tutkimuksia tietystä aiheesta tai tutkimuskysymyksistä on olemassa. Kartoittavat katsaukset ovat luonteeltaan kuvailevampia kuin systemaattiset katsaukset, jotka pyrkivät tarjoamaan hyvin rajatun tuloksen tarkasti rajattuun tutkimuskysymykseen.",
          "Tämä tutkimus on luonteeltaan kartoittava katsaus: siinä pyritään luomaan kokonaiskuvaa ja kartoittamaan olemassa olevaa tutkimusta liittyen tutkimustiedon hyödyntämiseen päätöksenteon tukena ja erityisesti kysymykseen hyödyntämisen yleisyydestä ja tietoa"
        ]
      },
      {
        "page": 6,
        "blocks": [
          "tuottavista tahoista. Toisaalta siinä hyödynnetään systemaattisissa katsauksissa normaalisti toteutettua menettelyä, jonka mukaan katsaukseen sisällytetyt artikkelit myös arvioidaan. Arviointia ei kartoittavissa katsauksissa välttämättä yleensä tehdä.",
          "Kartoittavan katsauksen tavoitteiden mukaisesti tässä artikkelissa pyritään kartoittamaan tutkimusta, joka tarkastelee tutkimustiedon hyödyntämisen yleisyyttä ja päätöksenteon tukena käytetyn tiedon tuottajia, sekä muodostamaan tästä tutkimuksesta ja siinä saaduista havainnoista kokonaiskuvaa. Tästä syystä tarkasteluun on sisällytetty myös sellaisia tutkimuksia, joissa kysymykset hyödyntämisen yleisyydestä tai päätöksentekoa tukevan tutkimustiedon tuottajista eivät ole tutkimusten pääkohde, mutta niitä on tutkimuksissa tarkasteltu (osana tutkimusta), ja jotka siten tuottavat olennaista tietoa tämän katsauksen tutkimuskysymyksiin. Tavoitteena on siis ollut kartoittaa ja koostaa tutkimusnäyttöä mahdollisimman laaja-alaisesti.",
          "Tässä artikkelissa toteutetussa kirjallisuushaussa hyödynnettiin pääasiallisesti kolmea tietokantaa: Summon-, Finna- ja Melinda-tietokantoja. Kuvaus tietokannoista sekä toteutetuista hauista on liitteessä 1. Kirjallisuuskatsaukseen sisällytettävien tutkimusten valinnassa sovellettiin seuraavia sisäänottokriteerejä:",
          "1) Tutkimus tarkastelee tutkimustiedon hyödyntämistä päätöksenteossa Suomessa. 2) Tutkimus käsittelee tutkimustiedon hyödyntämistä valtioneuvoston tai eduskunnan",
          "valmisteluun tai päätöksentekoon kytkeytyen. 3) Tutkimus perustuu empiiriseen tutkimusaineistoon. 4) Tutkimus on julkaistu 1.1.2010 jälkeen. 5) Tutkimus tuottaa tietoa tämän kirjallisuuskatsauksen tutkimuskysymyksiin.",
          "Kirjallisuuskatsauksessa huomioitiin sekä vertaisarvioitu tutkimuskirjallisuus että tutkimusraportit ja muu ”harmaa kirjallisuus”. Vertaisarvioimattomia tutkimuksia ei suljettu katsauksen ulkopuolelle, sillä aiheesta on tutkimuksia varsin rajallinen määrä ja tavoitteena oli kokoavan analyysin luominen. Vertaisarvioimattomien tutkimusten sisällyttämistä systemaattisiin tai kartoittaviin katsauksiin pidetään tärkeänä juuri tulosten kattavuuden näkökulmasta (Haddaway ym., 2020). Rajautuminen vertaisarvioituun kirjallisuuteen olisi karsinut tuloksia tutkimuksen tavoitteeseen nähden epätarkoituksenmukaisella tavalla. Tutkimusten tulosten käsittelyn yhteydessä vertaisarvioidut tutkimukset on merkitty kursiivilla, jotta lukija tietää, milloin viitataan vertaisarvioituun ja milloin vertaisarvioimattomaan tutkimukseen (esim. Elomäki ym., 2021).",
          "Kirjallisuushaussa tutkimuksia löytyi 967. Hakuprosessin aikana löydettiin lisäksi muista lähteistä (mm. suoraan kirjoittajilta, verkkosivustoilta ja artikkelien lähdeluetteloista) 35 hakutuloksiin sisältymätöntä, teeman kannalta relevantilta vaikuttavaa tutkimusta. Tutkimusten vastaavuus sisäänottokriteerien suhteen arvioitiin kahdessa vaiheessa, ensin abstraktien osalta ja tämän vaiheen läpäisseiden tutkimusten osalta koko tekstin perusteella (ks. kuvio 1)."
        ]
      },
      {
        "page": 7,
        "blocks": [
          "Sisäänottokriteerien arviointivaiheen jälkeen jäljellä oli 45 tutkimusta. Tutkimukset arviointiin hyödyntämällä kahta arviointikehikkoa: laadulliset tutkimukset arviointiin tukeutuen Critical Appraisal Skills Programmen (2018) arviointikriteeristöön ja määrälliset tutkimukset Petticrew’n ja Robertsin (2006, s. 142–143) kriteeristöön. Tässä yhteydessä suljettiin pois seitsemän tutkimusta, joista kuusi oli pro gradu -tutkielmia ja yksi muu vertaisarvioimaton tutkimus.1",
          "Lopulliseen analyysiin sisällytettiin 38 tutkimusta, joista koottiin keskeiset tiedot Exceltietokantaan: tekijä(t), julkaisu, julkaisuvuosi, tieto vertaisarvioinnista, tutkimuksen aineistot ja menetelmät, päätöksenteon konteksti, tutkimuksen tarkempi kohdentuminen sekä tarkasteluajanjakso ja linkki tutkimukseen. Analyysiin sisällytetyt tutkimukset on kuvattu liitteessä 2.",
          "Katsaukseen sisällytettyjen tutkimusten analyysissä tutkimukset jaettiin ensin pääasiallisen tutkimuskohteen perusteella kahteen pääkategoriaan. Ensimmäisen kategorian muodostivat geneeriset tutkimukset eli tutkimukset, jotka tarkastelevat tutkimustiedon hyödyntämistä valtioneuvoston tai eduskunnan valmistelussa tai päätöksenteossa yleisesti riippumatta politiikkasektoreista. Toisen kategorian muodostivat politiikkasektorikohtaiset tutkimukset, jotka kohdistuvat yleensä yhteen politiikan lohkoon. Geneerisiä tutkimuksia löytyi kaikkiaan 13 ja sektorikohtaisia 25 (ks. taulukko 1). Näiden kahden kategorian sisällä tehtiin tarkempia jäsennyksiä tutkimusten kohdentumisen osalta. Tämän jälkeen artikkeleista etsittiin tutkimuskysymysten suhteen olennaisimmat tulokset."
        ]
      },
      {
        "page": 8,
        "blocks": [
          "Muista lähteistä löydetyt",
          "Tietokantojen hakutulos kokonaisuudessaan (N = 967)",
          "artikkelit (N = 37)",
          "Artikkeleita tuplien poistamisen",
          "Abstraktien perusteella",
          "jälkeen (N = 785)",
          "poissuljetut (N = 673)",
          "1. Ei empiirinen tutkimus",
          "(N = 126) 2. Ei valtioneuvosto tai",
          "Abstraktien läpikäynti (N = 785)",
          "eduskunta (N = 37) 3. Ei tutkimustiedon",
          "hyödyntäminen (N = 280) 4. Ei poliittinen",
          "Koko tekstien läpikäynti",
          "(N = 112)",
          "päätöksenteko (N = 156) 5. Ei Suomi (N = 69) 6. Ei saatavilla tai",
          "luettavissa (N = 4) 7. Toisen julkaisun aiempi,",
          "eriniminen versio (N = 1)",
          "Laadunarviointiin etenevät",
          "artikkelit (N = 45)",
          "Koko tekstin perusteella",
          "poissuljetut (N = 67)",
          "1. Ei empiirinen tutkimus",
          "Laadunarvioinnissa",
          "(N = 20) 2. Ei valtioneuvosto tai",
          "poissuljetut artikkelit (N = 7)",
          "eduskunta (N = 15) 3. Ei tutkimustiedon",
          "hyödyntäminen (N = 23) 4. Ei poliittinen",
          "Systemaattiseen katsaukseen valitut",
          "Valinta Arviointi Koko tekstit Abstraktit Identifiointi",
          "artikkelit (N = 38)",
          "päätöksenteko (N = 5) 5. Ei Suomi (N = 2) 6. Ei saatavilla tai",
          "luettavissa (N = 1) 7. Toisen julkaisun aiempi,",
          "eriniminen versio (N = 1)",
          "Kuvio 1. Kirjallisuushaun toteutusprosessi."
        ]
      },
      {
        "page": 9,
        "blocks": [
          "Kaikista tutkimuksista 66 % on vertaisarvioituja (25/38), mutta vertaisarvioidut tutkimukset jakaantuvat epätasaisesti geneeristen ja sektorikohtaisten tutkimusten välillä. Geneerisistä tutkimuksista vertaisarvioituja on 31 % (4/13), kun taas sektorikohtaisista tutkimuksista niitä on valtaosa (84 %, 21/25). Sektorikohtaisista vertaisarvioiduista tutkimuksista suuri osa (76 %, 16/21) on kansainvälisesti vertaisarvioituja.",
          "Taulukko 1. Analyysiin sisällytetyt tutkimukset",
          "Tutkimukset Geneeriset Sektorikohtaiset Yhteensä Yhteensä Kv. vertaisarvoidut Kotimaiset vertaisarvioidut Vertaisarvioimattomat Laadulliset ja määrälliset Laadulliset Määrälliset",
          "Vastaavasti kun katsotaan tutkimusmenetelmiä, huomataan, että suurehko osa kaikista tutkimuksista (61 %, 23/38) oli laadullisia. Laadullisia ja määrällisiä menetelmiä yhdistäviä tutkimuksia oli kolmannes tutkimuksista, kun taas yksinomaan määrällisiä menetelmiä hyödyntäviä tutkimuksia oli vain kolme kappaletta. Sektorikohtaisissa tutkimuksissa (76 %, 19/25) laadullisten osuus korostuu geneerisiä (31 %, 4/13) huomattavasti enemmän. Yhteenvetäen voisi sanoa, että sektorikohtainen tutkimus on tyypillisesti vertaisarvioitu laadullinen tutkimus, kun taas geneerinen tutkimus on vertaisarvioimaton ja laadullinen tai laadullisia ja määrällisiä aineistoja yhdistävä tutkimus.",
          "Seuraavissa kolmessa luvussa tarkastellaan löydettyjen tutkimusten näkökulmia ja keskeisiä tuloksia. Ensin käsitellään geneerisiä tutkimuksia siten, että aluksi tarkastellaan valtioneuvoston päätöksentekoa ja sitten eduskuntaa tarkastelevia geneerisiä tutkimuksia. Tämän jälkeen tarkastellaan sektorikohtaisia tutkimuksia.",
          "Tutkimustiedon hyödyntäminen valtioneuvoston päätöksenteossa ja päätöksenteon valmistelussa",
          "Valtioneuvoston päätöksentekoon ja sen valmisteluun kohdistuvat geneeriset tutkimukset voidaan jakaa tutkimuskohteen perusteella kolmeen ryhmään. Ensimmäisen ryhmän muodostavat tutkimukset, jotka kohdistuvat ministeriöiden lainvalmisteluun, ja toisen ryhmän tutkimukset, jotka tarkastelevat tutkijoiden edustusta ministeriöiden työryhmissä. Kolmannessa ryhmässä ovat tutkimukset, jotka tarkastelevat päätöksentekoa tukevien tutkimusrahoitusinstrumenttien hyödyntämistä."
        ]
      },
      {
        "page": 10,
        "blocks": [
          "Tutkimustiedon hyödyntäminen ministeriöiden lainvalmistelussa",
          "Kattavin tutkimus tutkimustiedon käytön yleisyydestä ministeriöiden lainvalmistelussa on Nieminen ym. (2019). Tutkimuksessa analysoidaan tutkimusviittauksia vuoden 2017 hallituksen esityksissä ja huomataan, että hieman yli puolet esityksistä (55 %) sisälsi ainakin yhden viittauksen tutkimustietoon (Nieminen ym., 2019, s. 33). Tutkimuksessa havaitaan myös, että työryhmissä valmistelluissa lakihankkeissa suuressa osassa (79 %) oli tutkimusviitteitä ja että laajoissa lakihankkeissa lähes kaikissa oli tutkimusviitteitä. Tutkimuksesta ei kuitenkaan käy ilmi, kuinka suuressa osassa hallituksen esityksiä olisi hyödynnetty tutkimusta laajemmin. Verrattuna aiempiin tutkimuksiin tutkimusviittausten määrän havaitaan lisääntyneen ”noin 20 prosenttiyksikön verran” (Nieminen ym., 2019, s. 55).",
          "Niemisen ym. tutkimuksessa todetaan myös, että vuoden 2017 hallituksen esityksissä suurin tutkimustiedon tuottaja oli hallinto, joka tuotti 59 % kaikista viittauksista. Vain 6 % kaikista tutkimusviittaushavainnoista luokiteltiin luokkaan akateeminen tutkimustieto, ja tutkimuksessa todetaan, että ”kaiken kaikkiaan pelkästään akateemista tutkimusta hyödynnettiin verrattain vähän” (Nieminen ym., 2019, s. 47).2",
          "Slantin ym. (2014) haastatteluaineistoja hyödyntävässä tutkimuksessa puolestaan havaitaan, että lakihankkeissa tutkimustietoa hyödynnetään mutta hyödynnettävä tutkimustieto on yleensä jo olemassa olevaa tutkimusta, koska uutta tutkimusta ei useinkaan ehditä tilata tiukkojen aikataulujen vuoksi. Olemassa olevan tutkimuksen osalta haasteena puolestaan on, että se ei välttämättä vastaa lakihankkeen tiedontarpeisiin (Slant ym., 2014, s. 43). Uutta tutkimusta pyritään tilaamaan erityisesti silloin, jos aihe on ”yhteiskunnallisesti kiistanalainen” tai ”täysin uudenlainen” (Slant ym., 2014, s. 45).",
          "Molemmissa edellä mainituissa tutkimuksissa eräs keskeinen havainto on, että ministeriöiden lainvalmistelun kontekstissa tiettyjä tiedontuottajia pidetään luotettavampina kuin toisia. Nieminen ym. (2019, s. 61) toteavat, että luotetun tiedontuottajan aseman saavuttaneita tiedontuottajia tyypillisesti ovat oman hallinnonalan virastot ja tutkimuslaitokset. Slantin ym. (2014, s. 47) tutkimuksessa päädytään huomioon, että luotettavina tahoina pidetään erityisesti yliopistoja ja valtion tutkimuslaitoksia, kun taas konsulttiyrityksiin ja sidosryhmien tuottamaan tietoon suhtaudutaan varauksellisemmin. Tutkimuksen mukaan lakihankkeissa tietoa ”lähdetään kartoittamaan lähteistä, jotka ovat hallinnonalalle tyypillisiä”, ja niitä ovat esimerkiksi hallinnonalojen tutkimuslaitokset ja erilaiset tilastot (Slant ym., 2014, s. 44). Slant ym. (2014) havaitsevat myös, että erityisesti poliittisesti vahvasti ohjatuissa lakihankkeissa epämieluinen tieto voi jäädä hyödyntämättä, sillä tutkimus osoittaa eri suuntaan kuin poliittisesti priorisoitu ratkaisumalli. Tällaiset tilanteet ovat kuitenkin tutkimuksen mukaan melko harvinaisia.",
          "Tutkijoiden edustus ministeriöiden työryhmissä ja selvitysmiehinä",
          "Holli ja Turkka (2021) lähestyvät tutkimustiedon hyödyntämistä analysoimalla tutkijoiden osallistumista valtion komiteoihin ja ministeriöiden laajapohjaisiin työryhmiin vuosina 1980–"
        ]
      },
      {
        "page": 11,
        "blocks": [
          "2018. Heidän tuloksensa osoittavat, että tutkijoiden osuus on ajanjaksolla vähentynyt selvästi. 1980-luvulla tutkijoiden osuus komiteoiden jäsenistä liikkui 5–7 %:n välillä ja nousi 10–12 %:iin 1990-luvun alkupuolella. Vuosina 2000–2010 työryhmien jäsenistä 7–8 % oli tutkijoita, mutta 2010-luvulla tutkijoiden osuus vähentyi nopeasti. Erityisen dramaattisesti tilanne muuttui vuosina 2015–2018, jolloin tutkijoiden prosentuaalinen osuus yli puolittui aiemmasta: vuonna 2015 tutkijoiden osuus oli hieman alle 5 % ja vuonna 2018 runsaat 3 %.",
          "Holli ja Turkka (2021) havaitsevat, että samalla myös tutkijoiden asema työryhmissä on heikentynyt. 1980-luvulla tutkijat muodostivat komiteoiden ”kovasta ytimestä” eli puheenjohtajista ja varsinaisista jäsenistä 6–7 %, ja osuus kasvoi 10 %:iin vuonna 1993. Vuosina 2000–2010 tutkijoiden osuus laajapohjaisten valmistelutyöryhmien kovasta ytimestä oli noin 6–7 %, mutta vuonna 2018 se oli enää 3 %. Tutkimuksessa todetaan, että myös sellaisten työryhmien määrä, joissa ei ole lainkaan tutkijoita mukana, on noussut tarkasteluajanjaksolla selvästi: 1980- ja 1990 aikana niitä oli tarkastelluista valmisteluelimistä kolmas- tai neljäsosa, 2000-luvun alussa hieman yli puolet ja 2010-luvulla jo lähes kolme neljäsosaa (Holli & Turkka, 2021).",
          "Holli (2016) puolestaan tutkii selvityshenkilöinstituution muutoksia ja havaitsee, että tutkijoiden osuus selvityshenkilöistä on noussut. Kun 1990-luvulla selvityshenkilöistä 17 % oli tutkijoita, 2000-luvulla osuus oli noussut 27 %:iin (Holli, 2016).",
          "Päätöksentekoa tukevan tutkimuksen rahoitusinstrumentit ja niiden hyödyntäminen",
          "Artikkelin johdannossa mainitun vuoden 2013 TULA-uudistuksen osana perustettiin kaksi tutkimuksen rahoitusvälinettä (valtioneuvoston selvitys- ja tutkimustoiminta VN TEAS ja strategisen tutkimuksen rahoitusväline), joiden tarkoituksena on nimenomaisesti tuottaa tutkimustietoa päätöksenteon ja sen valmistelun tueksi.3 Kärkkäinen ym. (2022) analysoivat VN TEAS -toiminnassa tuotetun tiedon hyödyntämistä. Ministeriöiden virkamiehille suunnatun kyselyn tulosten mukaan yli kolmannes vastaajista (36 %) kertoi hyödyntävänsä valtioneuvoston selvitys- ja tutkimustoiminnassa tuotettua tietoa hyvin usein tai usein (eli vähintään muutaman kerran kuukaudessa). Tulokset osoittavat myös, että valtioneuvoston selvitys- ja tutkimustoiminnassa tuotettua tietoa hyödynnetään ministeriöissä monenlaisissa politiikkavalmistelun tilanteissa. Sitä käytetään erityisesti ymmärryksen lisäämisessä ja käsitteistön selkeyttämisessä, politiikkavalmistelun ja lainsäädäntöhankkeiden tukena sekä uudistushankkeissa ja strategioiden laadinnassa. Kyselytulokset kertovat tutkimustiedon hyödyntämisen yleisyydestä myös yleisemmällä tasolla: valtaosa vastaajista (75 %) hyödyntää tutkimustietoa työssään hyvin usein tai usein. Mielenkiintoinen tulos myös on, että kaikkein yleisin vastaajien käyttämä tutkimustiedon lähde olivat valtion tutkimuslaitokset (43 % vastaajista hyödynsi hyvin usein tai usein).",
          "Kivistö ym. (2022) tarkastelevat strategisen tutkimuksen rahoitusvälineen kautta rahoitettujen tutkimushankkeiden hyödyntämistä päätöksenteon tukena, ja he havaitsevat, että strategisen"
        ]
      },
      {
        "page": 12,
        "blocks": [
          "tutkimuksen yleisin käyttötarkoitus julkisella sektorilla on ollut uusien linjausten ja strategioiden valmistelu. Strategisen tutkimuksen tuloksia on hyödynnetty melko usein myös lainsäädännön valmistelussa. Ministeriöiden välillä on kuitenkin selviä eroavaisuuksia siinä, miten ja missä määrin ne ovat strategista tutkimusta hyödyntäneet.",
          "Tutkimustiedon hyödyntäminen eduskunnan valmistelussa ja päätöksenteossa",
          "Eduskunnan osalta geneeriset tutkimukset voidaan jakaa kolmeen ryhmään. Ensinnäkin on tutkimuksia, jotka tarkastelevat tutkimustiedon käyttöä ja lähteitä kansanedustajien työssä yleisesti. Toisena ryhmänä ovat tutkimukset, joissa tarkastellaan valiokuntakuulemisia ja kolmannessa ryhmässä kohteena ovat yleisistuntokeskustelut.",
          "Tutkimustiedon käyttö ja lähteet kansanedustajien työssä",
          "Useissa tutkimuksissa todetaan, että erilaista tutkimustietoa on kansanedustajilla runsaasti saatavilla mutta tiedon hyödyntämisen osalta tilanne on haastavampi (Aula & Konttinen, 2020; Kontula, 2018; Leppänen ym., 2020). Leppäsen ym. (2020) mukaan ongelmana on pikemminkin tiedon runsaus kuin sen puute. Kontula (2018, s. 41) kuvaa nykytilannetta siten, että ”poliitikoille tietoa kannetaan kaksin käsin” mutta loppujen lopuksi eduskunnan käytänteissä tietoa hyödynnetään ”verraten suppeasti”. Kansanedustajien haastatteluihin pohjautuen Aula & Konttinen (2020) esittävät, että eduskunnassa ei ole pulaa tiedosta tai tietolähteistä vaan haasteena on asettaa eri reittejä tuleva tieto oikeisiin mittasuhteisiin ja hyödyntää sitä päätöksenteossa. Tieteellisen tutkimuksen lukemiselle ei ole kansanedustajan työssä aikaa, minkä vuoksi tiedonhankinta keskittyy jo valmiiksi käsiteltyyn tietoon (Aula & Konttinen, 2020).",
          "Leppäsen ym. (2020, s. 20) tutkimuksen mukaan kansanedustajilla ei yleensä ole mahdollisuutta perehtyä syvälliseen tutkimustietoon ja pääasiallisesti he etsivät hyödynnettävää tietoa ”erilaisista raporteista, suoraan asiantuntijoilta, ministeriöiden asiakirjoista tai tilastoista”. Tietoa myös usein haetaan sellaisilta tahoilta, joiden ”tiedetään olevan jokseenkin saman mielisiä oman taustaryhmän kannan kanssa” (Leppänen ym., 2020, s. 20).",
          "Hieman vanhemmassa Jussilan (2012, s. 36–38) kyselytutkimuksessa kansanedustajat pitivät tutkimuslaitosten ja yliopistojen tuottaman tutkimustiedon roolia päätöksenteossa ”merkittävänä”. Tärkein tutkitun tiedon lähde kansanedustajille tällöin oli media. Huomionarvoinen tulos myös on, että 65 % vastanneista kansanedustajista oli täysin tai osin samaa mieltä väittämän ”kansanedustajakollegani käyttävät tutkimustietoa valikoidusti oman näkemyksensä perusteluun” kanssa (Jussila, 2012, s. 36–38)."
        ]
      },
      {
        "page": 13,
        "blocks": [
          "Valiokuntakuulemiset eduskunnassa",
          "Useassa tutkimuksessa esitetään, että valiokuntien asiantuntijakuulemiset ovat eduskunnassa tärkein päätöksentekoa tukeva tutkimustiedon hyödyntämistä edistävä rakenne (Aula & Konttinen, 2020; Kontula, 2018, s. 41; Leppänen ym., 2020, s. 22). Toisaalta tehdään huomio, että eduskunnan valiokuntien kuulemisvaiheessa tutkimustiedolla on ”enää rajallinen vaikutus lopputulokseen” (Nieminen ym., 2019, s. 24).",
          "Seppänen ym. (2023) tutkivat tutkijoiden osallistumisen yleisyyttä valiokuntakuulemisissa lähes neljännesvuosisadan aikajänteellä (1999–2022).4 Aineisto kattaa kaikki eduskunnan asiantuntijakuulemiset tuolta ajalta eli yhteensä yli 145 000 kuulemiskäyntiä. Kaikista kuulemisista 7 % oli tutkijoiden kuulemisia. Hallituskausittain tutkijoiden kuulemisten osuus vaihteli 5 %:sta 11 %:iin. Tieteentekijöiden osuus oli suurin pääministeri Marinin kaudella. Pitkällä aikajänteellä havaitaan, että tutkijakuulemisten osuus on kasvanut hieman. Valiokunnittain kuulemisissa on suuria eroja: suurimmat tutkijakuulemisten osuudet olivat perustuslakivaliokunnassa (44 %) ja tulevaisuusvaliokunnassa (25 %), kun taas muissa valiokunnissa osuudet olivat tuntuvasti pienempiä. Seppänen ym. (2023) tarkastelevat myös tutkijakuulemisten osuutta kevään 2023 hallitusneuvotteluissa. Neuvotteluissa tutkijakuulemisten osuus kaikista kuulemisista oli noin 9 %.",
          "Nieminen ym. (2019) saavat vastaavanlaisia tuloksia omassa tutkimuksessaan. Tarkastelun kohteena olivat vuoden 2014 kaikki eduskunnan asiantuntijakuulemiset (N = 6 739) sekä vuodelta 2017 kolmen valiokunnan (hallintovaliokunta, sosiaali- ja terveysvaliokunta ja valtiovarainvaliokunta) asiantuntijakuulemiset. Tutkimuksessa havaitaan, että vuonna 2014 kaikista lausunnon antaneista tutkimustahoja oli 11 %. Tutkimustahoja enemmän lausuntoja antoivat ministeriöt (31 % lausunnoista), etujärjestöt (20 %) ja muut valtion viranomaiset (17 %). Tutkimustahojen lausunnoista hieman vajaassa puolessa (45 %) tapauksista lausunnonantaja oli sektoritutkimuslaitos. Toiseksi eniten kuulemisia oli yliopistoilla (29 %). Yksittäisistä tutkimusorganisaatioista kuultiin eniten Terveyden ja hyvinvoinnin laitosta (44 % kaikista sektoritutkimuslaitosten kuulemisista). Tieteenaloista oikeustieteen edustajia kuultiin selvästi eniten, sillä 54 % kuulluista tutkimustahoista edusti oikeustiedettä. Valiokunnista aktiivisin tutkijoiden kuulija oli perustuslakivaliokunta, jossa oli kaikista tutkijoiden kuulemisista 40 % (Nieminen ym., 2019, 52).",
          "Vuoden 2017 osalta Nieminen ym. (2019) havaitsevat, että tutkimustahojen kuulemisia oli hallintovaliokunnan kuulemisista 8 %, sosiaali- ja terveysvaliokunnan kuulemisista 13 % ja valtiovarainvaliokunnan kuulemisista 9 %. Kaikissa näissä valiokunnissa tutkijoiden osuus kuulleista oli kuitenkin noussut vuoteen 2014 verrattuna. Eniten kuulemisia näissä valiokunnissa oli Terveyden ja hyvinvoinnin laitoksella (35 % kaikista tutkimusorganisaatioiden kuulemisista) ja sillä oli muun muassa enemmän kuulemisia kuin kaikilla yliopistoilla (20 % kaikista tutkimusorganisaatioiden kuulemisista) yhteensä. Jussilan (2012, 39) tutkimuksen mukaan vaalikaudella 2007-2010 sosiaali- ja terveysvaliokunnan kuulemista asiantuntijoista (N = 1674) 7 % oli tutkijoita."
        ]
      },
      {
        "page": 14,
        "blocks": [
          "Tutkimustietoon vetoaminen yleisistuntokeskusteluissa",
          "Syväterä (2020) tarkastelee eduskunnan yleisistuntokeskusteluja vuosina 1994–2017. Tutkimuksessa analysoiduista keskusteluista 61 % sisälsi viittauksia tieteen auktoriteettiin. Tutkimuksessa havaitaan myös, että eduskuntakeskustelussa tieteen auktoriteettiin viitataan kaikilla politiikan alueilla – ei vain alueilla, jotka edellyttävät monimutkaista teknistä tietoa. Erityisen usein tieteen auktoriteettiin viitataan ”tiheästi poliittisesti latautuneissa, kilpaileviin intresseihin ja arvoihin liittyvissä keskusteluissa” (Syväterä, 2020, s. 61). Tutkimuksessa tehdään myös havainto siitä, että tieteeseen vetoaminen lisääntyi ja vahvistui tarkasteluajanjaksolla, mutta tätä ei välttämättä pidä tulkita siten, että tieteen asema päätöksenteossa olisi vahvistunut. Kyse saattaa olla myös siitä, että ”kansanedustajat pitävät tieteen auktoriteettiin viittaamista entistä mielekkäämpänä retorisena strategiana”. (Syväterä, 2020, s. 61.)",
          "Toisessa tutkimuksessa (Syväterä ym., 2023) vertaillaan tieteeseen vetoamista parlamentaarisissa yleiskeskusteluissa neljässä maassa (Suomi, Iso-Britannia, Australia ja Kenia) sekä erityisesti sitä, mihin organisaatioihin tieteellisinä auktoriteetteinä vedotaan. Suomen kohdalla analysoidaan 144 eduskuntakeskustelua, joista 76 keskustelussa (53 %) vedotaan tieteeseen. Näistä 76 keskustelusta 45 keskustelussa (59 %) viitataan johonkin organisaatioon tieteellisen auktoriteetin lähteenä. Neljän maan vertailussa Suomessa niiden keskustelujen osuus, joissa vedotaan tieteeseen, on kaikkein alhaisin ja niiden keskustelujen osuus, joissa nimetään jokin organisaatio, on toiseksi alhaisin Kenian jälkeen. Suomessa selvästi eniten tieteellisenä auktoriteettina viitataan tutkimuslaitoksiin (40 % viittauksista), ja Suomi eroaa tässä suhteessa muista maista merkittävästi: Australiassa ja Keniassa useimmin vedotaan hallitusten välisiin järjestöihin (esim. OECD, WHO, Yhdistyneet kansakunnat) ja Isossa-Britanniassa hallinnollisiin organisaatioihin. Suomessa yliopistojen osuus viittauksista on vertailumaiden toiseksi pienin (7 % viittauksista). Yksittäisistä organisaatioista Suomessa eniten vedotaan Terveyden ja hyvinvoinnin laitokseen, jonka jälkeen tulevat OECD, Työterveyslaitos, WHO, Kansaneläkelaitos ja Tilastokeskus.",
          "Politiikkasektorikohtaiset tutkimukset",
          "Tässä luvussa tarkastellaan politiikkasektorikohtaisia tutkimuksia. Sektorikohtaisista tutkimuksista suuri osa kohdistuu sosiaali- ja terveyspolitiikan sekä ympäristö, ilmasto- ja energiapolitiikan alueille.",
          "Ympäristö-, ilmasto- ja energiapolitiikka",
          "Ilmastopolitiikassa useampi tutkimus on tarkastellut tutkitun tiedon käyttöä kansallisten ilmastostrategioiden valmistelussa. Kerkkänen (2010) tutkii väitöstutkimuksessaan ensimmäisen kansallisen ilmastostrategian valmistelua ja havaitsee, että tässä prosessissa tiedon tuotannon ja politiikan prosessit olivat vahvasti toisiinsa yhteenkietoutuneita. Tutkimuksessa huomataan, että ilmastostrategian laadinnan kohdalla ilmastopolitiikkaa koskevaa tutkimustietoa koettiin olevan paljon, jopa liikaakin, ja tiedon paljous puolestaan"
        ]
      },
      {
        "page": 15,
        "blocks": [
          "vahvisti erilaisten perinteisten, legitiimin aseman saavuttaneiden asiantuntijatahojen roolia politiikkaprosessissa: tiettyjen kansallisesti vakiintuneen aseman saavuttaneiden tutkimuslaitosten ja niitä edustavien tutkijoiden nähtiin edustavan arvovapaana pidettyä asiantuntijuutta (Kerkkänen, 2010, s. 250–254).",
          "Levin (2010) tutkii väitöskirjassaan vuoden 2001 kansallisen ilmastostrategian ja erityisesti sitä vuonna 2005 seuranneen ilmastonmuutoksen sopeutumisstrategian laadintaa. Tutkimuksessa esitetään, että yksi valtion tutkimuslaitos, tässä tapauksessa Suomen ympäristökeskus (Syke), oli keskeinen toimija tieteen ja politiikan välisen vuorovaikutuksen vahvistamisessa sopeutumisstrategian yhteydessä. Tutkimuksessa todetaan, että Syken keskeisen roolin taustalla olivat yhtäältä ministeriöiden vähäiset resurssit tehdä tutkimusta ja tutkimuspohjaisia politiikkasuosituksia ”in house” mutta toisaalta myös tutkimuslaitoksen rooli legitiiminä tiedon tuottajana ministeriölle ja valtioneuvostolle.",
          "Saarela ja Söderman (2015) puolestaan tutkivat kansallisen ilmasto- ja energiastrategian valmisteluprosessia vuosina 2011–2013. Yhtenä tuloksena on, että prosessiin tiedon tuottajiksi pääsi mukaan vain ”luottotoimijoita” – toimijoita, jotka olivat olleet jo aiemmissa vastaavissa prosesseissa mukana (Teknologian tutkimuskeskus VTT, Valtion taloudellinen tutkimuskeskus VATT, Syke). ”Ulkopuolisilla”, kuten esimerkiksi kilpailevilla tutkimuslaitoksilla, yliopistoilla tai muilla tiedon tuottajilla, ei ollut mahdollisuuksia päästä prosessiin mukaan. Tutkimuksessa havaitaan, että strategiaprosessissa käytettävissä ollut tutkimustieto oli kaukana kattavasta vaikuttavuusalueiden, ulottuvuuksien ja toimijoiden osalta. Lisäksi huomataan, että osa vaikutusarvioinneista tehtiin niin myöhään, että osa poliittisista ratkaisuista oli tehty jo ennen arviointien valmistumista.",
          "Myös Hildén (2011) on tutkinut vaikutusarviointien hyödyntämistä ilmastopolitiikassa ja toteaa, että arviointeja on hyödynnetty ilmastopolitiikan kehittämisessä ja ne ovat edistäneet politiikkaoppimista mutta arviointien hyödyllisyyttä rajoittaa usein kapea mandaatti ja vahva kytkentä olemassa olevaan politiikkalinjaan. Samansuuntaiseen johtopäätökseen päätyvät Pilli-Sihvola ym. (2015), jotka tarkastelevat ilmastoskenaarioiden käyttöä päätöksenteossa Suomessa, Ruotsissa ja Norjassa. He toteavat, ettei ilmastoskenaarioiden täyttä potentiaalia hyödynnetä ja että ilmastotutkijoiden ja politiikkatoimijoiden välisessä kommunikaatiossa on vahvistamisen varaa.",
          "Hieman yleisemmällä tasolla asiaa tarkastelevat Kukkonen ja Ylä-Anttila (2020), jotka tutkivat tieteellisten organisaatioiden ja argumenttien roolia ilmastopoliittisissa diskurssiverkostoissa ja osoittavat, että 2000-luvun kuluessa tieteellisistä argumenteista on tullut keskeisempiä ilmastopolitiikkaa koskevissa keskustelussa. Samaan tapaan Wagner ym. (2020) tutkivat tiedon vaihdon verkostoja kansallisen tason ilmastopolitiikassa neljässä maassa (ml. Suomi) ja toteavat, että ilmastopolitiikan toimijat suosivat nimenomaan tieteellisiä organisaatioita tutkitun tiedon tuottajina.",
          "Silfverberg ym. (2018) tarkastelevat ympäristöön liittyvän tutkimustiedon käyttöä päätöksenteon tukena yleisesti. He havaitsevat, että ympäristötiedon käyttö päätöksenteossa"
        ]
      },
      {
        "page": 16,
        "blocks": [
          "on usein vajavaista tai tietoa valikoidaan tarkoitushakuisesti. Tutkimus antaa viitteitä myös siitä, että virkavalmistelussa tutkimustietoa käytetään mutta tieteellisen tiedon merkitys saattaa heikentyä, kun valmistelusta siirrytään poliittiseen päätöksentekoon. Tutkimuksen mukaan päätöksentekijät ja valmistelijat hakevat ympäristötietoa etenkin sektoritutkimuslaitoksista (Syke ja Luonnonvarakeskus Luke), kun taas yliopistotutkijoiden yhteys päätöksentekoon on ”usein heikko”. Yliopistoista Helsingin yliopisto ja Itä-Suomen yliopisto näyttäytyivät muita yliopistoja vahvempina tiedontuottajina päätöksenteon näkökulmasta. Saarela (2020) puolestaan havaitsee väitöskirjassaan, että ympäristöpolitiikan alueella tutkijoiden ja politiikan valmistelijoiden välinen vuorovaikutus on viime aikoina alkanut kehittyä vuorovaikutteisempaan suuntaan.",
          "Ympäristöpolitiikan alueella on myös tutkimuksia, joissa tarkastellaan spesifimpiä politiikan osa-alueita. Pihlajamäki ja Tynkkynen (2011) tutkivat tutkimustiedon roolia ja käyttöä Itämeren rehevöitymisen estämiseen tähtäävässä politiikassa. He havaitsevat, että hallinnossa ja politiikan teossa usein edellytetään tutkimustiedon pelkistämistä ja yleistämistä. He huomaavat myös, että politiikkaprosesseissa kuullaan usein tiettyjä (samoja) tutkijoita ja että tutkimuslaitosten tutkijoita kuullaan enemmän kuin yliopistojen tutkijoita.",
          "Sosiaali- ja terveyspolitiikka",
          "Sosiaali- ja terveyspolitiikkaan liittyvät tutkimukset voidaan jakaa tutkimuskohteen ja rajautumisen perusteella kolmeen kategoriaan. Ensimmäinen kategoria kohdistuu tutkimustiedon käyttöön politiikkasektorilla yleensä, ja siinä on vain yksi tutkimus. Kilpeläisen ym. (2019) tutkimuksessa tarkastellaan kyselyihin perustuvan tiedon käyttöä terveyspolitiikassa. Heidän tulostensa mukaan terveyskyselytietoon perustuvia analyysejä on laajasti käytetty suomalaisen terveyspolitiikan kehittämisessä, toimeenpanossa, seurannassa ja arvioinnissa. Terveyskyselyihin perustuvat tutkimukset ovat muun muassa vaikuttaneet veropoliittisiin ratkaisuihin (alkoholi- ja tupakkavero).",
          "Toisena kategoriana ovat tutkimukset, jotka tarkastelevat tutkimustiedon hyödyntämistä suurten sosiaali- ja terveyspolitiikkaan ja -järjestelmään liittyvien reformien ja kokeilujen yhteydessä. Hiilamo (2021) tarkastelee tutkimukseen perustuvan asiantuntijatiedon käyttöä sote-uudistuksen eri vaiheissa vuosina 2005–2019. Tutkimuksessa todetaan, että tärkein yksittäinen sote-uudistuksen tieteellinen asiantuntijataho on ollut Terveyden ja hyvinvoinnin laitos. Artikkeli päätyy tulokseen, ettei sote-uudistuksessa tutkimustietoa ole käytetty systemaattisesti hyödyksi ja että akateemisilla sote-asiantuntijoilla oli vähäinen rooli soteuudistuksen valmistelussa ennen Sipilän hallitusta. Tutkimuksessa havaitaan myös, että sote-valmistelun useissa vaiheissa poliittiset linjaukset olivat ristiriidassa virkamiesten ja akateemisten asiantuntijoiden näkemysten kanssa.",
          "Pinheiro ym. (2017) puolestaan tutkivat valinnanvapautta korostaneita terveydenhuollon uudistuksia ja niiden perustelemiseen ja legitimointiin käytettyä tietopohjaa. Tulosten mukaan tietopohja on useimmiten ollut luonteeltaan anekdoottista ja vertailumaiden kokemuksiin perustuvaa. Lainsäädäntöesitysten tutkimuksellinen tietopohja oli usein"
        ]
      },
      {
        "page": 17,
        "blocks": [
          "niukkaa, eikä se perustunut tutkimusnäytön systemaattiseen arviointiin. Kansainväliset politiikkavirtaukset (”fashion following”) olivat varsin keskeisessä roolissa, eikä kontekstuaalisia seikkoja (l. suomalaisen terveydenhuoltojärjestelmän ominaispiirteet) välttämättä otettu kunnolla huomioon. Elomäki ym. (2021) puolestaan analysoivat pääministeri Sipilän hallituksen yritystä uudistaa perhevapaajärjestelmää. Heidän tulostensa mukaan uudistuksen valmistelussa taloustieteellinen tieto sai korostetun aseman, mikä näkyi muun muassa työryhmien jäsenyyksissä sekä kvantitatiivisiin ja tilastollisiin menetelmiin perustuvan taloustieteellisen tutkimuksen keskeisessä roolissa. Arviot kustannus- ja työllisyysvaikutuksista muodostivat neuvotteluissa keskeisimmän tietopohjan, kun taas sosiaalitieteellinen tutkimus perhevapaiden epätasaisesta jakautumisesta ja perhevapaiden käytön perusteista ei päässyt uudistuksen linjausten perustaksi.",
          "Kolmannen kategorian muodostavat tutkimukset, jotka tarkastelevat sosiaali- ja terveyspolitiikan alueella tehtyjä rajatumpia lakihankkeita tai päätösprosesseja. Kurko (2015; myös Kurko ym., 2012) tutkii lääkelain muutosprosessia, jolla laajennettiin vuonna 2006 nikotiinikorvaustuotteiden myyntiä apteekkijakelusta päivittäistavarakauppoihin, kioskeihin ja huoltoasemille. Hän havaitsee, että lainmuutosprosessissa olemassa olevaa tutkimusnäyttöä ei käytetty täysimääräisesti hyväksi ja sitä osin käytettiin valikoivasti. Lainvalmistelussa päätös perustui enemmän oletuksiin kuin varsinaiseen tutkimusnäyttöön. Leppo ja Hecksher (2011) tutkivat odottaville äideille kohdistettuja alkoholin käyttöä koskevia suosituksia Suomessa ja Tanskassa sekä niiden taustalla olevaa päätöksentekoa. He toteavat, että kummassakin maassa on omaksuttu politiikka, jossa raskaana olevia suositellaan pidättäytymään alkoholista kokonaan. Tutkimuksessa todetaan kuitenkin, että tämä linjaus ei perustu olemassa olevaan tutkimusnäyttöön vaan pikemminkin varovaisuusperiaatteeseen. Suomen osalta havaitaan myös, että suositukset ja politiikkadokumentit valottivat hyvin niukasti suositusten perusteluja eikä niissä viitattu tutkimukseen eikä systemaattisia kirjallisuuskatsauksia laadittu.",
          "Edelleen St-Martin ym. (2018) tarkastelevat sitä, miten tutkimusnäyttöä on hyödynnetty päätöksenteossa Suomessa, Tanskassa, Ruotsissa ja Norjassa, kun on päätetty siitä, sisällytetäänkö rotavirusrokotus kansalliseen rokotusohjelmaan. He havaitsevat, että eri maissa tutkimustietoa käytettiin ja tulkittiin eri tavoin ja että maat myös päätyivät erilaisiin päätöksiin, vaikka ne tulkitsivat samaa kansainvälistä tutkimustietoa omissa kansallisissa konteksteissaan. Suomen osalta todettiin, että kansainvälisen tutkimustiedon ohella hyödynnettiin myös Suomessa tehtyä tutkimusta. Ylöstalo (2020a) puolestaan tutkii feministisen (tutkimus)tiedon roolia politiikanteossa käyttämällä sukupuolitietoisen budjetoinnin aloitetta esimerkkinä. Artikkelin tulosten mukaan feministisen tiedon käyttö on ensi sijassa symbolista, sen preferoitu muoto on kvantitatiivinen ja uskottavia tiedon tuottajat ovat tasa-arvoasiantuntijat ja ekonomistit."
        ]
      },
      {
        "page": 18,
        "blocks": [
          "Muut politiikkasektorit",
          "Ylönen ym. (2020) tutkivat yhteisöverouudistuksiin kytkeytyneen tiedontuotannon muutoksia 1990-luvun alusta 2010-luvulle ja erityisesti vuosien 1993 ja 2014 verouudistuksiin liittyneitä asiantuntijatyöryhmiä ja tietopohjaa. Tutkimuksessa havaitaan, että yhteisöverotuksen osalta päätöksenteossa käytettävän tiedon painopiste on siirtynyt oikeustieteellisestä taloustieteelliseen tutkimustietoon. Muutoksen seurauksena tiedon rooli veropoliittisessa päätöksenteossa on muuttunut: oikeustieteelliseen tutkimukseen verrattuna taloustieteelliset vaikutusarviot antavat sisällöltään konkreettisempia suosituksia politiikkatoimille. Siirtymä merkitsi myös sitä, että talousteoreettisiin taustaoletuksiin perustuvat dynaamiset laskelmat (käyttäytymisvaikutukset) tulivat keskeiseksi osaksi suomalaista veropolitiikan valmistelua. Poliittista päätöksentekoa kehystävä asiantuntijatieto on alkanut yhä konkreettisemmin määrittää veropolitiikan sisältöä, ja näin ollen taloustieteen roolin korostumisella on myös ollut yhteisöveropolitiikkaa epäpolitisoiva vaikutus.",
          "Koulutuspolitiikan alueella Pinheiron ym. (2017) tutkimus tarkastelee korkeakoulujen fuusioita laajoina politiikkareformeina, ja niitä perustelleita ja niiden legitimointiin käytettyä tietopohjaa. He havaitsevat, että kansainvälisillä esimerkeillä ja muiden maiden kokemuksilla oli keskeinen merkitys reformien perusteluiden tietopohjassa tutkitun tiedon sijasta.",
          "Liikuntapolitiikan alueella Hämäläinen ja Villa (2014) tutkivat tutkimustiedon käyttöä viidessä liikuntapoliittisessa asiakirjassa (joista kolme valtioneuvostotasoisia) ja niiden valmistelussa. He havaitsevat, että asiakirjoissa tutkimustieto oli taustalla läsnä mutta eksplisiittisesti sitä tuotiin esiin vain vähän. Tutkimusten systemaattista erittelyä ei juuri tehty politiikkatoimien asiakirjojen valmisteluprosessien aikana. Työryhmiin osallistuneiden asiantuntijoiden tieto oli usein suodattunut useaan kertaan siten, ettei tutkimuksellisen alkuperän erottelu ollut enää mahdollista. Tutkijat havaitsivat myös, että tutkimustietoa oli paljon saatavilla, mutta sen läpikäyminen ja politiikkatoimen valmistelun tarpeisiin valikoiminen koettiin haasteelliseksi.",
          "Kriminaalipolitiikan alueella Helmisen ym. (2019) tutkimuksessa tarkastellaan tutkijoiden osallistumista 147 kriminaalipoliittisen lainsäädäntöhankkeen valmisteluun vuosina 1991– 2017. Hankkeiden valmisteluun oli dokumentoidusti osallistunut yhteensä 163 eri tutkijaa, ja ne sisälsivät yhteensä 883 jonkin tutkimustahon (tutkijan, N = 818 tai tutkimusorganisaation, N = 65) osallistumiskertaa. Tutkijoiden osallistumiskerroista (N = 818) valtaosa oli oikeustieteilijöiden (87 %), miesten (88 %) ja Helsingin yliopiston tutkijoiden osallistumisia (48 %). Tieteenaloista oikeustieteellä oli vallitseva rooli erityisesti eduskunnan valiokunnissa tapahtuneissa osallistumisissa (91 %) mutta myös ministeriössä tapahtuneissa osallistumisissa (78 %). Tutkimusorganisaation nimissä tapahtuneista osallistumisista (N = 65) eniten eli neljäsosa oli Terveyden ja hyvinvoinnin laitoksen ja vajaa viidesosa Oikeuspoliittisen tutkimuslaitoksen osallistumisia.",
          "Noin kaksi kolmasosaa tutkimustahojen osallistumisista oli eduskunnan valiokunnissa tapahtuneita osallistumisia. Tutkijoiden osuus kaikista valiokunnissa annetuista lausunnoista ja kuulemisista (N = 2936) oli 20 %. Valiokunnista tutkijoita oli kuultu eniten"
        ]
      },
      {
        "page": 19,
        "blocks": [
          "lakivaliokunnassa, perustuslakivaliokunnassa ja hallintovaliokunnassa. Perustuslakivaliokunnassa tutkijoita oli myös kuultu eniten suhteessa muihin tahoihin, sillä tutkimustahojen kuulemiset muodostivat yli kaksi kolmasosaa kaikista perustuslakivaliokunnan kuulemisista.",
          "Keskustelu ja johtopäätökset",
          "Keskeisenä kiinnostuksen kohteena tässä artikkelissa on ollut tutkimustiedon hyödyntäminen valtioneuvoston ja eduskunnan päätöksenteossa ja valmistelun tukena ja erityisesti se, mistä näkökulmista aihetta on tutkittu ja mitä tutkimus kertoo hyödyntämisen yleisyydestä. Artikkelin lopuksi vedetään yhteen keskeisiä havaintoja ja pohditaan niiden luomaa näkymää tieteen ja päätöksenteon suhteeseen sekä aihepiirin tutkimustarpeisiin.",
          "Tutkimuksen näkökulmat, hyödyntämisen yleisyys ja tutkimuksen tuottajat",
          "Aiheeseen liittyvä tutkimus näyttäytyy kirjallisuuskatsauksen perusteella varsin moninaiselta. Tutkimusta on tehty monenlaisista näkökulmista ja erilaisilla lähestymistavoilla ja erilaisiin päätöksentekoprosesseihin ja -konteksteihin kytkeytyen. Tämä on yhtäältä rikkaus, mutta toisaalta moninaisuus on myös haaste. Esimerkiksi tutkimuksia, joissa toistettaisiin samantyyppisiä tutkimusasetelmia ei ole kovinkaan paljoa, jolloin tiedon kumuloituminen jää vähäisemmäksi. Tutkimusta siis tarvittaisiin enemmän.",
          "Hyödyntämisen yleisyyden osalta osassa tutkimuksista päädytään määrällisiin arvioihin. Kuten artikkelin alussa todettiin, kansainvälisessä tutkimuskirjallisuudessa määrällisiä arvioita on tehty hyvin vähän (ks. esim. Masood ym., 2020), mikä nostaa Suomea koskevien tutkimustulosten kiinnostavuutta. Eduskunnan valiokuntakuulemisten osalta tiedämme, että viimeisen neljännesvuosisadan aikana 7 % kuulemisista on ollut tutkijoiden kuulemisia (Seppänen ym., 2023). Edelleen konkreettisina numeerisina tuloksia saadaan esimerkiksi se, että hieman yli puolet hallituksen esityksistä sisältää vähintään yhden viittauksen tutkimustietoon (Nieminen ym., 2019), että 2000-luvulla valtioneuvoston työryhmissä tutkijoiden osuus työryhmien jäsenistä oli 6,4 % (Holli & Turkka, 2021) ja että 61 %:ssa eduskunnan yleisistuntokeskusteluista vedotaan tieteen auktoriteettiin (Syväterä, 2020). Tulokset ovat mielenkiintoisia ja arvokkaita, mutta samalla keskeiseksi kysymykseksi nousee niiden tulosten asettaminen jonkinlaiselle mittatikulle. Yksi mahdollisuus mittatikuksi olisi kansainvälinen vertailutieto, mutta sitä ei juurikaan tutkimuksissa tuoda esiin. Poikkeuksena tästä on lähinnä Hollin ja Turkan (2021) artikkeli, jossa kevyesti verrataan tilannetta Norjaan. Toinen hieman kansainvälistä vertailua sisältävä tutkimus on Syväterä ym. (2023).",
          "Toinen vaihtoehto eräänlaiseksi mittatikuksi olisi verrata tutkimuksen saamaa ”äänenpainoa” päätöksenteossa suhteessa muiden toimijoiden rooliin. Tästä on joissain tutkimuksissa esimerkkejä. Esimerkiksi tutkimustoimijoiden kuulemisten määrää eduskunnan valiokunnissa on suhteutettu muiden toimijoiden, kuten esimerkiksi ministeriöiden ja etujärjestöjen, antamien lausuntojen määrään (Nieminen ym., 2019). Tällaistakaan"
        ]
      },
      {
        "page": 20,
        "blocks": [
          "suhteuttamista ei tutkimuksissa systemaattisesti tehdä, eikä se luonnollisesti ole kaikissa tapauksissa mahdollistakaan.",
          "Kun varsinaiset mittatikut puuttuvat, tilanteen arvioiminen on haastavaa. Yleisenä arviona voisi kuitenkin esittää, etteivät edellä mainitut määrälliset tulokset välttämättä ole kovinkaan korkeita. Voisi ajatella, että mikäli päätöksentekoa tehdään tutkimustietoon vahvasti tukeutuen, tutkijoiden osuus eduskunnassa kuulluista asiantuntijoista voisi olla korkeampi kuin yksi kymmenesosa tai että tutkijoiden osuus työryhmäjäsenistä voisi olla suurempi kuin reilut 6 %. Toki on huomattava, ettei asiantilaa voida arvioida yksittäisten lukujen perusteella ja että lukuihin vaikuttavat monenlaiset tekijät, joita ei tässä ole mahdollista tarkastella.",
          "Määrällisten tutkimusten ohella on myös laadullisia tutkimuksia, jotka valottavat kysymystä tutkimustiedon hyödyntämisen yleisyydestä. Nämä ovat usein yksittäisiin tapaustutkimuksiin perustuvia tutkimuksia, joista osa kylläkin tarkastelee hyvin laajoja politiikkaprosesseja. Useammassa tällaisessa tutkimuksessa on päädytty siihen, ettei tutkimustiedon hyödyntäminen tarkastelluissa prosesseissa ole ollut systemaattista (esim. Hiilamo, 2021; Kurko, 2015; Pinheiro ym., 2017). Osassa tutkimuksia tuloksena myös saadaan, että virkavalmistelussa tutkittua tietoa hyödynnetään mutta varsinaisessa poliittisessa päätöksenteossa ei niinkään (Silfverberg ym., 2018; Tuomisto ym., 2017). Tutkimuksissa havaitaan myös, että uudistuksia saatetaan oikeuttaa tutkitulla tiedolla, mutta toteutuksessa tutkitun tiedon rooli voi jäädä pienemmäksi (Ylöstalo, 2020b).",
          "Kun huomioidaan kokonaisuutena sekä määrälliset ja laadulliset tutkimukset, muodostuu samansuuntainen kuva kuin yksittäisissä, laajoja aineistoja hyödyntäneissä kansainvälisissä tutkimuksissa. Näissä tuloksena usein on ollut se, että tutkimustietoa käytettiin ”kohtalaisesti” (Williamson, 2019) tai että löydettiin ”maltillista näyttöä” tutkimustiedon hyödyntämisestä (Masood ym., 2020). Mielenkiintoista on, että tutkimuksia, joissa olisi päädytty siihen, että tutkimustietoa käytettiin hyvin vahvasti päätöksenteon valmistelussa, ei Suomen osalta juurikaan löytynyt. Useat laadulliset tutkimukset päätyvät päinvastoin melko kriittiseen arvioon.",
          "Kysymystä tutkimustiedon hyödyntämisen yleisyydestä voi pohtia myös yli ajan tapahtuneen muutoksen kautta. Ajallista muutosta tarkastelevia tutkimuksia on kuitenkin valitettavan vähän, ja tulokset osoittavat hieman eri suuntiin. Tutkimuksista systemaattisin tässä suhteessa on Hollin ja Turkan (2021) tutkimus, jonka mukaan tutkijoiden määrä valtioneuvoston laajapohjaisissa työryhmissä on vähentynyt ja asema heikentynyt. Toisaalta tutkijoiden osuus selvityshenkilöistä on noussut (Holli, 2016). Myös eduskunnan yleisistuntokeskusteluissa tieteeseen vetoaminen on lisääntynyt (Syväterä, 2020), tutkimusviittaukset lakiteksteissä ovat lisääntyneet (Nieminen ym., 2019) ja valiokuntakuulemisissakin tutkijoiden osuus on hieman kasvanut (Seppänen ym., 2023). Lisäksi on yksittäisiä laadullisia havaintoja, joiden mukaan esimerkiksi ilmastopolitiikassa tieteellisistä argumenteista on tullut keskeisempiä (Kukkonen & Ylä-Anttila, 2020) ja"
        ]
      },
      {
        "page": 21,
        "blocks": [
          "tutkijoiden ja politiikan valmistelijoiden välinen vuorovaikutus on alkanut kehittyä vuorovaikutteisempaan suuntaan (Saarela, 2020).",
          "Kuten kansainvälisen tutkimuskirjallisuuden perusteella saattaa olettaa, tutkimuksissa tehtiin havaintoja myös tutkimustiedon valikoivasta käytöstä (policy-based evidence). Saarelan (2019) haastattelututkimuksessa bioenergiapolitiikan alueella raportoitiin tutkimustiedon sivuuttamisesta ja osin arvioitiin tutkimustiedon valikoivan käytön olevan yleistäkin. Myös ympäristöpolitiikan (Silfverberg ym., 2018) ja terveyspolitiikan (Kurko, 2015, s. 94–96) alueelta havaittiin esimerkkejä tutkimustiedon valikoivasta käytöstä. Myös useat geneeriset tutkimukset toivat saman havainnon esiin (Jussila, 2012; Leppänen ym., 2020; Slant ym. 2014; Tuomisto ym., 2017). Valikoiva käyttö näyttäisi liittyvän erityisesti tilanteisiin, joihin liittyy vahvoja poliittisia kantoja (Slant ym., 2014; Tuomisto ym., 2017). Huomionarvoista kuitenkin on, että räikeitä esimerkkejä (vrt. Cairney, 2019) politiikkapohjaisesta tiedosta ei tutkimuksissa kuitenkaan raportoitu. Arviot ilmiön yleisyydestä vaihtelivat.",
          "Päätöksenteossa hyödynnetyn tutkimustiedon tuottajien osalta tutkimusten tulokset osoittavat selkeästi samaan suuntaan. Tutkimusten perusteella näyttää siltä, että etenkin valtion tutkimuslaitoksilla on keskeinen, jopa ensisijainen, rooli tutkimustiedon tuottajana päätöksenteossa (esim. Jussila, 2012; Kerkkänen, 2010; Levin, 2010; Nieminen ym. 2019; Pihlajamäki & Tynkkynen, 2011; Saarela & Söderman, 2015; Silfverberg ym., 2018; Slant ym., 2014). Kaikissa edellä mainituissa tutkimuksissa tuloksena esitetään, että tutkimuslaitokset nousevat esiin tahoina, jotka ovat luotettuja tiedon tuottajia ja joista tutkimustietoa haetaan. Osassa tutkimuksissa myös yliopistot nousevat tutkimuslaitosten rinnalle, mutta nämä tutkimukset ovat määrällisesti vähemmistössä. Useammassa tutkimuksessa havainto oli, että tutkituissa politiikkaprosesseissa tiedon tuottajiksi ovat päässeet vain tietyt luottotoimijat (esim. Pihlajamäki & Tynkkynen, 2011; Saarela & Söderman, 2015).",
          "Valtion tutkimuslaitosten keskeinen rooli tiedon tuottajana kytkeytyy vahvasti suomalaiseen tutkimusjärjestelmän ominaispiirteisiin ja poliittis-hallinnollisen päätöksenteon ja tutkimuksen institutionaaliseen organisoitumiseen (vrt. Nutley ym., 2010). Valtion tutkimuslaitosten roolina suomalaisessa järjestelmässä on nimenomaan tuottaa tutkittua tietoa hallinnonalojen päätöksenteon ja kehittämisen tueksi. Monissa muissa maissa, esimerkiksi Ruotsissa, ei tutkimuslaitossektorilla ole perinteisesti ollut samanlaista roolia. Hieman yllättävää kuitenkin on, kuinka selkeästi tutkimuslaitosten asema suhteessa valtioneuvoston ja eduskunnan päätöksentekoon näyttäisi eroavan yliopistoista tässä tutkimuksessa löydettyjen tutkimusten perusteella.",
          "Tieteen ja päätöksenteon suhde, tutkimuksen rajoitteet ja jatkotutkimustarpeet",
          "Kirjallisuuskatsauksen tutkimusten perusteella tutkimuksen ja päätöksenteon suhde näyttäytyy moninaiselta, vaihtelevalta ja varsin usein myös kontekstisidonnaiselta. Paikoin tutkittua tietoa on paljon, jopa liikaakin, kun taas paikoin sitä puuttuu tai olemassa oleva tutkimustieto ei ole relevanttia päätöksenteon kannalta. Mikäli relevanttia tutkittua tietoa ei ole valmiina, sitä ei aina ehditä tai kyetä hankkimaan. Tutkimusta hyödynnetään"
        ]
      },
      {
        "page": 22,
        "blocks": [
          "päätöksenteossa ja päätöksenteon valmistelussa ja siihen myös vedotaan eri vaiheissa, mutta samalla sitä käytetään ainakin ajoittain valikoivasti. Myös päätöksentekijät tunnistavat valikoivan käytön. Yhtäältä voisikin nähdä, että tutkitun tiedon ja päätöksenteon suhde määrittyy jokaisessa valmistelu- ja päätöksentekoprosessissa aina erikseen: on kustakin tilanteesta kiinni, miten tutkittua tietoa kyetään, halutaan ja onnistutaan kytkemään prosessiin mukaan. Lisäksi voisi arvioida, että tutkimustiedon ja päätöksenteon suhde näyttäytyy vähintäänkin osin suljetulta, eksklusiiviselta, sillä kirjallisuuskatsauksen perusteella usein perinteisillä, legitiimin aseman saavuttaneilla tutkimustahoilla on etulyöntiasema päätöksentekoprosesseissa. Tämä on tärkeä havainto, sillä se kuvastaa tilannetta, jossa osa tutkimustiedon tuottajista jää prosessien ulkopuolelle ja potentiaali hyödyntämättä.",
          "Tutkimustiedon hyödyntämisen laajuus ja intensiteetti vaihtelevat tilanteittain. Kiinnostava kysymys onkin se, mitkä tekijät vaikuttavat siihen, että tietyssä valmistelu- ja päätöksentekoprosesseissa tutkittua tietoa hyödynnetään ja toisissa ei niinkään. Aiemman tutkimuksen perusteella tiedetään, että muun muassa korkeampi koulutustaso (tutkijankoulutus) ja aiempi työkokemus tutkimusorganisaatioissa lisäävät politiikkavalmistelijoiden taipumusta hyödyntää tutkimustietoa työssään (ks. esim. Kärkkäinen ym., 2022, s. 54; Thune & Gulbrandsen, 2018), mutta hyödyntämiseen vaikuttavat varmasti hyvin monet muutkin, kuten esimerkiksi politiikkaorganisaatioon, -sektoriin ja kontekstiin liittyvät, seikat. Tutkimustiedon ja päätöksenteon suhde on epäilemättä myös kaikkea muuta kuin lineaarinen: valmistelu- ja päätöksentekoprosessit ovat usein hyvin moninaisia ja monimutkaisia ja näissä prosesseissa tutkimustieto voi kytkeytyä ja kietoutua siihen monin tavoin. Useimmiten tutkittu tieto myös suodattuu prosesseissa moneen kertaan ja monen toimijan kautta.",
          "Artikkelin alussa viitattiin tutkimustiedon hyödyntämisen erilaisiin muotoihin, instrumentaaliseen, käsitteelliseen ja symboliseen hyödyntämiseen. Tässä artikkelissa ensisijaisena näkökulmana on ollut hyödyntämisen yleisyys, eikä tarkastelluista tutkimuksista useinkaan erotella hyödyntämisen muotoja edellä kuvatun jaottelun mukaisesti. Kuitenkin, kuten edellä todettiin, tutkimuksissa löydettiin näyttöä tutkimustiedon valikoivasta käytöstä omien poliittisten näkemysten tai jo tehtyjen päätösten perustelemiseksi. Tämäntyyppinen tutkimustiedon hyödyntäminen on hyvin lähellä symbolista käyttöä. Hyödyntämisen eri muotojen tarkempi analyysi olisikin hyvin tärkeää myös yleisyyden arvioinnin näkökulmasta: jos ajateltaisiin, että hyödyntäminen olisi laajaalaisesti symbolista (esim. jo tehtyjä päätöksiä jälkikäteen legitimoivaa), niin on mahdollista, että päätöksenteon laatu ei välttämättä paranisi, vaikka tutkimustiedon määrällinen hyödyntäminen lisääntyisikin. Osa tutkimuksista suhtautuukin jossain määrin kriittisesti tutkimustiedon hyödyntämiseen.",
          "Lopuksi on hyvä pohtia hieman kirjallisuushaussa löydetyn ja katsaukseen valikoituneen tutkimuskirjallisuuden mahdollisia puutteita ja epävarmuuksia. Ensinnäkin katsauksen"
        ]
      },
      {
        "page": 23,
        "blocks": [
          "muodostamaa kokonaiskuvaa pohdittaessa on tärkeä pitää mielessä käsitellyn aineiston rajallisuus: aineisto käsittää 38 tutkimusta. Se on väistämättä varsin pieni määrä, kun puhutaan hyvin laajasta ilmiökokonaisuudesta. Tutkimusta on siis varsin vähän, mikä asettaa rajoituksia yleisten johtopäätösten tekemiselle. Toiseksi on selvää, että tutkimusmenetelmiin liittyy aina vahvuuksia ja heikkouksia. Kun esimerkiksi kyselyillä tai haastatteluilla tutkitaan tutkimustiedon hyödyntämistä, voi riskinä olla, että vastaajat haluavat antaa hyödyntämisestä todellisuutta paremman kuvan. Asiakirja-aineistojen ongelmana voi olla se, ettei niihin välttämättä systemaattisesti dokumentoida niiden laadinnassa hyödynnettyä tutkimuskirjallisuutta eikä muuten kuvata valmistelussa tapahtunutta tutkimustiedon hyödyntämistä. Tämä on ilmeinen ongelma, jos esimerkiksi hallituksen esityksiä käytetään tutkimusaineistona.",
          "Tutkimustiedon hyödyntämistä jää väistämättä piiloon. Tämä voi vaikuttaa tässä katsauksessa saatuihin tuloksiin. Tähän tutkimukseen valikoituneessa tutkimuskirjallisuudessa huomionarvoista on kuitenkin se, että valtaosassa tutkimuksia hyödynnettiin useantyyppisiä aineistoja. Kolmasosassa tutkimuksia hyödynnettiin sekä laadullisia että määrällisiä aineistoja. Pelkästään laadullisiin aineistoihin nojaavissa tutkimuksissa (N = 23, 61 %) hyödynnettiin useita laadullisia aineistotyyppejä rinnakkain. Useiden aineistotyyppien hyödyntäminen tukee monipuolisen kuvan luomista ja osaltaan pienentää riskiä siitä, että yksi aineisto antaisi vinoutunutta näkymää tutkimuksen kohteeseen. Ehkä yhtenä puutteena aineistoon valikoituneessa kirjallisuudessa voidaan kuitenkin pitää sitä, ettei uudenlaisia tutkimusmenetelmiä ja aineistoja, kuten esimerkiksi erilaisia suuria data-aineistoja hyödyntäviä tutkimuksia, juurikaan löytynyt. Esimerkiksi laajoja politiikkadokumenttien aineistopankkeja on jo olemassa, ja ne saattavat avata uudenlaisen mielenkiintoisen väylän analysoida tutkimustiedon käyttöä päätöksenteossa.",
          "On myös huomioitava tarkasteltujen tutkimusten pitkähkö aikajänne: tutkimukset on julkaistu aikavälillä 2010–2023, mutta osassa tutkimuksista analysoitavat aineistot voivat olla vanhempiakin. Näin ollen tutkimuksista muodostuva kuva ei välttämättä kuvaa yksioikoisesti nykyhetkeä vaan myös tilannetta pidemmän ajanjakson aikana, ja tilanne on saattanut joiltain osin jo muuttuakin.",
          "Tämän kirjallisuuskatsauksen perusteella on selvää, että aiheesta tarvitaan Suomessa lisää tutkimusta. Samalla on huomattava, että tutkimustiedon hyödyntäminen poliittisessa päätöksenteossa on varsin laaja tematiikka, ja kotimaisen ja kansainvälisen tutkimuksen perusteella aihepiiristä tiedetäänkin jo varsin paljon. Kansainvälinen tutkimus täydentää kotimaista tutkimusta teeman yleisemmän ymmärryksen vahvistamisessa, mutta suomalaisesta kontekstista konkreettisesti voivat luonnollisesti kertoa vain Suomen päätöksentekojärjestelmään liittyvät tutkimukset. Suomea koskevan tutkimuksen vahvistaminen olisi tärkeää muun muassa siksi, että tutkimustiedon hyödyntämistä päätöksenteon tukena voidaan edistää tutkimustietoon pohjautuen. Tarvitaan sekä geneerisiä tutkimuksia että eri politiikkasektoreita ja niiden päätöksentekoprosesseja tarkastelevia"
        ]
      },
      {
        "page": 24,
        "blocks": [
          "tutkimuksia. Tärkeää olisi myös, että vertaisarvioituja tutkimuksia olisi enemmän, sillä niihin pohjautuva näyttö on vahvempaa ja niiden painoarvo tieteellisessä keskustelussa on luonnollisesti suurempi.",
          "Olemassa olevassa tietopohjassa on kuitenkin selkeitä aukkoja. Esimerkiksi sellaista tutkimusta, joka analysoisi päätöksentekijöiden (ministereiden) suhdetta tutkittuun tietoon, ei tällä hetkellä ole. Miten ministerit työssään hyödyntävät tutkittua tietoa? Mikä on esimerkiksi erityisavustajien rooli tässä? Mitä lähteitä ministerit käyttävät tutkitun tiedon saamiseksi? Yleisemmin ottaen yksittäiset tutkimukset ovat usein pistemäisiä ja tarkkarajaisia ja luonnollisesti päätöksenteon ja tutkimuksen laajasta rajapinnasta vain pienen osan kattavia. Ehkä ideaalitapauksessa olisi mahdollista laatia pitkäjänteisempi tutkimusohjelma tai -agenda, jolla voitaisiin lähteä tarkastelemaan päätöksenteon ja tutkimustiedon rajapintaa kokonaisvaltaisemmasta ja systeemisesti mietitystä lähtökohdasta käsin.",
          "Tärkeä näkökohta, joka olemassa olevista tutkimuksista usein puuttuu, on tutkimuksen vaikuttavuus päätöksentekoon. Tutkimukset useimmiten tarkastelevat sitä, missä määrin tutkimustieto on ”läsnä” valmistelu- ja päätöksentekoprosessissa. Vähemmän on tutkimuksia, jotka avaavat sitä, miten tutkimustieto viime kädessä on päätöksentekoon vaikuttanut. Tämänkaltaisten tutkimusten vähyyteen on varmasti monia syitä, joista metodologiset haasteet ovat varmastikin yksi keskeinen. Kuitenkin voisi ajatella, että tarkat tapaustutkimukset, kuten esimerkiksi sote-uudistusta analysoiva tutkimus (Hiilamo, 2021), voisivat olla ensimmäinen askel tähän suuntaan. Niitä olisi hyvä kohdistaa juuri isoihin ja merkittäviin päätöksentekoprosesseihin, joilla on keskeistä yhteiskunnallista merkitystä.",
          "Viitteet",
          "1) Pro gradu -tutkielmat suljettiin tässä vaiheessa lähtökohtaisesti katsauksen",
          "ulkopuolelle. 2) Tutkimuksessa havaintoyksikkönä on hallituksen esityksen yhdessä osiossa olleet",
          "viittauskokonaisuudet, jotka saattoivat sisältää useiden eri tahojen tuottamia tutkimusviitteitä. Tiedontuottajat jaoteltiin luokkiin hallinto, akateeminen, muu ja useita. Luokittelu on jossain määrin epätarkka, sillä varsin suuri osuus (21 %) havainnoista luokiteltiin luokkaan ”useita tiedontuottajia”. Tämä luokka saattoi siis sisältää myös esimerkiksi akateemisia tiedontuottajia. 3) Kevään 2023 hallitusneuvotteluissa linjattiin VN TEAS -toiminnan lakkauttamisesta.",
          "Syksyn 2024 budjettiriihessä hallitus päätti uudesta kuuden miljoonan euron määrärahasta valtioneuvoston päätöksentekoa tukevaan tutkimustoimintaan. 4) Tutkijoiden osallistumisesta valiokuntakuulemisiin on tehty useita pro gradu -",
          "tutkielmia. Niiden tulokset ovat pitkälti samansuuntaisia kuin tässä esitettyjen tulosten."
        ]
      },
      {
        "page": 25,
        "blocks": [
          "Lähteet",
          "Amara, N., Ouimet, M. & Landry, R. (2004). New evidence on instrumental, conceptual, and symbolic utilization of university research in government agencies. Science Communication, 26(1), 75–106. https://doi.org/10.1177/1075547004267491",
          "Aula, V. & Konttinen, L. (2020). Miten kansaa edustetaan? Selvitys kansanedustajien työstä eduskuntatyön uudistamiseksi. Sitra. https://www.sitra.fi/wp/wpcontent/uploads/2020/02/miten-kansaa-edustetaan.pdf",
          "Baron, J. (2018). A brief history of evidence-based policy. The ANNALS of the American Academy of Political and Social Science, 678(1), 40–50. https://doi.org/10.1177/0002716218763128",
          "Cairney, P. (2019). The UK government’s imaginative use of evidence to make policy. British Politics, 14(1), 1–22. https://doi.org/10.1057/s41293-017-0068-2",
          "Critical Appraisal Skills Programme. (2018). CASP qualitative checklist. https://caspuk.net/casp-tools-checklists/",
          "Elomäki, A., Mustosmäki, A. & Koskinen Sandberg, P. (2021). The sidelining of gender equality in a corporatist and knowledge-oriented regime: the case of failed family leave reform in Finland. Critical Social Policy, 41(2), 294–314. https://doi.org/10.1177/0261018320947060",
          "ExLibris. (2014). Summon: Provider Content in the Central Discovery Index. https://knowledge.exlibrisgroup.com/Summon/Product_Documentation/Overview_of_The_S ummon_Service/Central_Discovery_Index/Summon%3A_Provider_Content_in_the_Central_Disco-very_Index",
          "Haddaway, N., Bethel, A., Dicks, L. Koricheva, J., Macura, B., Petrokofsky, G. Pullin, A., S., Savilaakso, S. & Stewart, G. B. (2020). Eight problems with literature reviews and how to fix them. Nature Ecology Evolution, 4, 1582–1589. https://doi.org/10.1038/s41559-020-01295-x",
          "Head, B. (2015). Toward more “evidence-informed” policy making? Public Administration Review, 76(3), 472–484. https://doi.org/10.1111/puar.12475",
          "Helminen M., Lundell, S. & Alvesalo-Kuusi, A. (2019). Tutkittu tieto kriminaalipoliittisissa lakihankkeissa. Suomen kulttuurirahasto. https://urn.fi/URN:NBN:-fi-fe2021042825074",
          "Hiilamo, H. (2021). Tutkimukseen perustuvan asiantuntijatiedon käyttö päätöksenteossa: esimerkkinä sote-uudistus. Hallinnon tutkimus, 40(2), 111–128. https://doi.org/10.37450/ht.110879",
          "Hildén, M. (2011). The evolution of climate policies – the role of learning and evaluations. Journal of Cleaner Production, 19(16), 1798–1811. https://doi.org/10.1016/j.jclepro.2011.05.004"
        ]
      },
      {
        "page": 26,
        "blocks": [
          "Holli, A. (2016). Selvityshenkilöt uudella vuosituhannella: Tutkimus selvityshenkilöinstituution piirteistä ja muutostrendeistä 1990-luvulta nykypäivään. Hallinnon tutkimus, 35(1), 5–23.",
          "Holli, A. & Turkka, S. (2021). Tieteen muuttuva rooli korporatistisessa neuvonannossa: pitkittäisanalyysi tutkijoiden asemasta ministeriöiden valmistelutyöryhmissä 1980–2018. Politiikka, 63(1), 54–81. https://doi.org/10.37452/politiikka.98500",
          "Hämäläinen, R.-M. & Villa, T. (2014). Tutkimustiedon käyttö terveyttä edistävien liikunnan politiikkatoimien valmistelussa. Liikunta ja tiede, 51(1), 36–43.",
          "Jussila, H. (2012). Päätöksenteon tukena vai hyllyssä pölyttymässä? Sosiaalipoliittisen tutkimustiedon käyttö eduskuntatyössä. Kelan tutkimusosasto.",
          "Kerkkänen, A. (2010). Ilmastonmuutoksen hallinnan politiikka. Kansainvälisen ilmastokysymyksen haltuunotto Suomessa. Tampere University Press.",
          "Kilpeläinen, K., Koponen, P., Tolonen, H., Koskinen, S., Borodulin, K. & Gissler, M. (2019). From monitoring to action: utilising health survey data in national policy development and implementation in Finland. Archives of Public Health, 77(48). https://doi.org/10.1186/s13690- 019-0374-9",
          "Kivistö, J., Kohtamäki, V., Lilja, E., Lyytinen, A., Tirronen, J., Holmberg, K. & Teräsahde, S. (2022). Strategisen tutkimuksen rahoitusinstrumentin arviointi. Valtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-383-487-3",
          "Kontula, A. (2018). Eduskunta. Ystäviä ja vihamiehiä. Into.",
          "Kukkonen, A. & Ylä-Anttila, T. (2020). The science-policy interface as a discourse network: Finland’s climate change policy 2002-2015. Politics and Governance, 8(2), 200–214. https://doi.org/10.17645/pag.v8i2.2603",
          "Kurko, T. (2015). Deregulation of nicotine replacement therapy products in Finland: reasons for pharmaceutical policy changes and reflections on smoking cessation practices [väitöskirja, Helsingkin yliopisto]. Helda. http://urn.fi/URN:ISBN:978-951-51-1223-1",
          "Kurko, T., Silvast, A., Wahlroos, H., Pietilä, K. & Airaksinen, M. (2012). Is pharmaceutical policy evidence-informed? A case of the deregulation process of nicotine replacement therapy products in Finland. Health Policy, 105(2–3), 246–255. https://doi.org/10.1016/j.healthpol.2012.02.013",
          "Kärkkäinen, T., Lauronen, J.-P. & Muhonen, R. (2022). Valtioneuvoston selvitys- ja tutkimustoiminnassa tuotetun tiedon hyödyntäminen valmistelun ja päätöksenteon tukena. Valtioneuvoston kanslia. http://urn.fi/URN:N-BN:fi-fe2022101962593",
          "Leppo, A. & Hecksher, D. (2011). The rise of the total abstinence model. Recommendations regarding alcohol use during pregnancy in Finland and Denmark. Nordisk alkohol- & narkotikatidskrift, 28(1), 7–27. https://doi.org/10.2478/v10199-011-0002-7"
        ]
      },
      {
        "page": 27,
        "blocks": [
          "Leppänen, J., Aula, V. & Konttinen, L. (2020). Miten tietoa käytetään päätöksenteossa? Selvitys kansanedustajien tiedonkäytöstä lainsäädäntötyöhön liittyvässä päätöksenteossa. Sitra.",
          "Levin, K. (2010). Protecting biodiversity in a changing climate: the role of science in adaptation policy advancement. Yale University.",
          "Masood, S., Kothari, A. & Regan, S. (2020). The use of research in public health policy: a systematic review. Evidence & Policy, 16(1), 7–43. https://doi.org/10.1332/174426418X15193814624487",
          "Newman, J. Cherney, A. & Head, B. (2017). Policy capacity and evidence-based policy in the public service. Public Management Review, 19(2), 157–174. https://doi.org/10.1080/14719037.2016.1148191",
          "Nieminen, K., Alasuutari, N., Kautto, P., Saarela, S.-P., Järvi-kangas, I., Hiltunen, E. & Rantala, K. (2019). Tutkimustiedon hyödyntämisen hyvät käytännöt lainvalmistelussa: kohti parempaa sääntelyä? Valtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-287-741-3",
          "Nutley, S., Morton, S., Jung, T. & Boaz, A. (2010). Evidence and policy in six European countries: diverse approaches and common challenges. Evidence & Policy, 6(2), 131–144. https://doi.org/10.1332/174426410X502275",
          "OECD (2020). Building capacity for evidence-informed policy-making. OECD Publishing. https://doi.org/10.1787/86331250-en",
          "Oliver, K., Lorenc, T. & Innvær, S. (2014). New directions in evidence-based policy research: a critical analysis of the literature. Health Research Policy and Systems, 12(1), 34. https://doi.org/10.1186/1478-4505-12-34",
          "Orton, L., Lloyd-Williams, F. & Taylor-Robinson, D. (2011). The use of research evidence in public health decision making processes: systematic review. PloS One, 6(7), e21704. https://doi.org/10.1371/journal.pone.0021704",
          "Parkhurst, J. (2017). The politics of evidence: from evidence -based policy to the good governance of evidence. Taylor & Francis.",
          "Petticrew, M. & Roberts, H. (2006). Systematic reviews in the social sciences. Blackwell Publishing.",
          "Pihlajamäki, M. & Tynkkynen, N. (2011). The challenge of bridging science and policy in the baltic sea eutrophication governance in Finland: the perspective of science. AMBIO, 40(2), 191–199. https://doi.org/10.1007/s13280-010-0130-4",
          "Pilli-Sihvola, K., van Oort, B., Hanssen-Bauer, I., Ollikainen, M., Rummukainen, M. & Tuomenvirta, H. (2015). Communication and use of climate scenarios for climate change adaptation in Finland, Sweden and Norway. Local Environment, 20(4), 510–524. https://doi.org/10.1080/13549839.2014.967757"
        ]
      },
      {
        "page": 28,
        "blocks": [
          "Pinheiro, R., Nordstrand Berg, L., Kekäle, J. & Tynkkynen, L.-K. (2017). Exploring the interplay between ‘fashion’ and ‘evidence-based’ policy: A comparative account of higher education and health care in the Nordics. Scandinavian Journal of Public Administration, 21(1), 33–55. https://doi.org/10.58235/sjpa.v21i1.14884",
          "Raivio, K. (2014). Näyttöön perustuva päätöksenteko – suomalainen neuvonantojärjestelmä. Valtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-287-135-0",
          "Saarela, S.-R. (2019). From pure science to participatory knowledge production? Researchers’ perceptions on science–policy interface in bioenergy policy. Science & Public Policy, 46(1), 81–90. https://doi.org/10.1093/scipol/scy039",
          "Saarela, S.-R. (2020). In between two worlds? Science-policy interaction in Finnish environmental governance [väitöskirja, Helsingin yliopisto]. Helda. http://urn.fi/URN:ISBN:978-951-51-5933-5",
          "Saarela, S.-R. & Söderman, T. (2015). The challenge of knowledge exchange in national policy impact assessment – a case of finnish climate policy. Environmental Science & Policy, 54, 340–348. https://doi.org/10.1016/j.envsci.2015.07.029",
          "Seppänen, J.-T., Nokelainen, O., Nygård, S. & Ojala, J. (2023). Kuuleeko edustkunta tieteentekijöitä? Tieteessä tapahtuu, 41(3), 6–14.",
          "Silfverberg, O., Huotari, E. & Kolehmainen, L. (2018). Ympäristötutkimuksen ja päätöksenteon saumakohdassa: Miten parantaa tieteellisen ympäristötiedon vaikuttavuutta? Ympäristötiedon foorumi. https://www.ymparistotiedonfoorumi.fi/wpcontent/uploads/2018/12/Ymparistotutkimus_paatoksenteossa_YTFselvitys-1.pdf",
          "Slant, O., Rantala, K. & Kautto, P. (2014). Vaikuttavaa vaikutusarviointia? Vaikutusarvioinnin merkitys lainvalmisteluprosessissa. Oikeuspoliittinen tutkimuslaitos.",
          "St-Martin, G., Lindstrand, A., Sandbu, S. & Kølsen Fischer, T. (2018). Selection and interpretation of scientific evidence in preparation for policy decisions: a case study regarding introduction of rotavirus vaccine into national immunization programs in Sweden, Norway, Finland, and Denmark. Frontiers in Public Health, 6. https://doi.org/10.3389/fpubh.2018.00131",
          "Strassheim, H. & Kettunen, P. (2014). When does evidence-based policy turn into policybased evidence? Configurations, contexts and mechanisms. Evidence & Policy, 10(2), 259– 277. http://dx.doi.org/10.1332/174426514X13990433991320",
          "Syväterä, J. (2020). Tieteen monitahoinen auktoriteetti: Analyysi eduskunnan uutta lainsäädäntöä koskevista keskusteluista. Sosiologia, 57(1), 44–64.",
          "Syväterä, J., Rautalin, M. & Kustán Magyari, A. (2023). From where do legislators draw scientific knowledge? Organizations as scientific authorities in four countries’ parliamentary"
        ]
      },
      {
        "page": 29,
        "blocks": [
          "debates. The British Journal of Sociology, 74(2), 222–240. https://doi.org/10.1111/1468- 4446.12989",
          "Thune, T. & Gulbrandsen, M. (30.11.2018). Exploring the use of research in policy making: insights from the literature and a pilot survey. OSIRIS Blog. https://www.sv.uio.no/tik/english/research/centre/osiris/osirisblog/resinpolicy.html",
          "Tuomisto, J., Muurinen, R., Paavola, J.-M., Asikainen, A. Ropponen, T. & Nissilä, J. (2017). Tiedon sitominen päätöksentekoon. Valtioneuvoston kanslia. https://urn.fi/URN:ISBN:978- 952-287-386-6",
          "Valtioneuvosto. (2013). Valtioneuvoston periaatepäätös valtion tutkimuslaitosten ja tutkimusrahoituksen kokonaisuudistukseksi. 5.9.2013.",
          "Valtioneuvosto. (2019). Osallistava ja osaava Suomi. Pääministeri Sanna Marinin hallituksen ohjelma 10.12.2019. http://urn.fi/URN:ISBN:978-952-287-808-3",
          "Valtioneuvosto. (2023). Vahva ja välittävä Suomi: Pääministeri Petteri Orpon hallituksen ohjelma 20.6.2023. http://urn.fi/URN:ISBN:978-952-383-763-8",
          "Valtioneuvoston kanslia. (2011). Poliittisen päätöksenteon tietopohjan parantaminen – tavoitteet todeksi. http://urn.fi/URN:ISBN:978-952-5896-61-9",
          "Wagner, P., Ylä‐Anttila, T., Gronow, A., Ocelík P., Schmidt, L. & Delicado, A. (2020). Information exchange networks at the climate science‐policy inter-face: evidence from the Czech Republic, Finland, Ireland, and Portugal. Governance, 34(1), 211–228. https://doi.org/10.1111/gove.12484",
          "Weiss, C. (1979). The many meanings of research utilization. Public Administration Review, 39(5), 426–431. https://doi.org/10.2307/3109916",
          "Williamson, A., Makkar, S. & Redman, S. (2019). How was research engaged with and used in the development of 131 policy documents? Findings and measurement implications from a mixed methods study. Implementation Science, 14(1). https://doi.org/10.1186/s13012-019- 0886-2",
          "Yin, Y., Gao, J., Jones, B. F. & Wang D. (2021). Coe-volution of policy and science during the pandemic. Science, 371(6525), 128–130. https://doi.org/10.1126/science.abe3084",
          "Ylönen, M., Jaakkola, J., Saari, L. & Hiilamo, H. (2020). Näyttöperusteisuus ja yritysten verotus: ekonomismin nousu suomalaisen yhteisöveropolitiikan tiedontuotannossa. Poliittinen talous, 8(1), 27—69. https://doi.org/10.51810/pt.96159",
          "Ylöstalo, H. (2020a). Depoliticisation and repoliticisation of feminist knowledge in a Nordic knowledge regime: The case of gender budgeting in Finland. Nordic Journal of Women’s Studies, 28(2), 126–139. https://doi.org/10.1080/08038740.2020.1727008"
        ]
      },
      {
        "page": 30,
        "blocks": [
          "Ylöstalo, H. (2020b). The role of scientific knowledge in dealing with complex policy problems under conditions of uncertainty. Policy and Politics, 48(2), 259–276. https://doi.org/10.1332/030557319X15707904457648",
          "Zardo, P. & Collie, A. (2015). Type, frequency and purpose of information used to inform public health policy and program decision-making. BMC Public Health, 15, 381. https://doi.org/10.1186/s12889-0151581-0"
        ]
      }
    ]
  },
  {
    "id": "aineisto-2",
    "title": "Tiedediplomatian muuttuva kuva 2009–2025 – kaikkia hyödyttävästä yhteistyöstä geopoliittiseen kilpailuun",
    "author": "Johanna Ketola",
    "localPdfUrl": "/aineistot/valintakoe-g-2026/Aineisto-2-1.pdf",
    "originalPdfUrl": "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Aineisto-2-1.pdf",
    "pages": [
      {
        "page": 1,
        "blocks": [
          "Tiedediplomatian muuttuva kuva 2009–2025",
          "– kaikkia hyödyttävästä yhteistyöstä geopoliittiseen kilpailuun",
          "Johanna Ketola",
          "Tiedediplomatia on verrattain uusi ja vakiintumaton käsite, jolla viitataan tutkimusta ja ulkopolitiikkaa yhdistelevään toimintaan. Tämä artikkeli kuvaa tiedediplomatian muutosta vuosien 2009 ja 2025 välillä ja tarkastelee muutosta suomalaisessa viitekehyksessä. Päähavaintona on, että tiedediplomatia on geo- ja valtapolitiikan sävyttämässä diskurssissa tavoittelemisen arvoinen ideaali etsittäessä ratkaisuja ihmiskunnan yhteisiin ongelmiin. Tutkimuksessa kuitenkin tarvitaan kriittisyyttä: käsitteenä tiedediplomatialla on heikko analyyttinen selitysvoima. Monitulkintaisuuden vuoksi ei ole selvää, mitä tiedediplomatia lopulta selittää. Onkin pureuduttava politiikkaan käsitteen välineellistämisen takana.",
          "Johdanto",
          "Tiedediplomatia (science diplomacy) on aihe, josta kirjotetaan kasvavissa määrin eri tieteenaloilla, erityisesti kansainvälisen politiikassa (Fähnrich, 2017; Turekian, 2018). Aihe on sikäli poikkeuksellinen politiikan tutkimuksessa, sillä varsinaista empiiristä valta-analyysia tiedediplomatiakirjallisuudessa on verrattain vähän. Tämä artikkeli pureutuu tiedediplomatian valtaulottuvuuksiin ja keskittyy erityisesti siihen, millaisiin tarkoitusperiin tiedediplomatia on käsitteenä valjastettu ja kenen toimesta. Aineistona ovat aikaisempi kirjallisuus, asiantuntijaraportit ja Suomessa kerätty haastatteluaineisto.",
          "Määritelmällisesti tiedediplomatia viittaa toimintaan, jossa yhdistyy tutkimus, ulkopolitiikka ja kansainväliset suhteet (Leijten, 2017). Tiedediplomatia on erilaisten kansainvälisten toimijoiden keskinäisiä suhteita kysymyksissä, joissa on tieteellinen tarkoitus, prosessi tai tavoite. Lisäksi se on tutkimuskohde. Tiedediplomatia on siis sekä subjekti että objekti: se on käytänteiden joukko ja oppiala, jossa näitä käytänteitä tarkastellaan lähemmin (Karltofen & Acuto, 2018, s. 9; Uusikylä ym., 2021b).",
          "Käsitteenä tiedediplomatia on vakiintumaton. Monen yhteiskuntatieteellisen käsitteen tavoin sille ei ole selvää määritelmää. Tiedediplomatia on käsitteenä monitulkintainen ja tutkimuskohteena laaja. Tästä seuraa vääjäämättä, että tiedediplomatian analyyttinen selitysvoima on heikko.",
          "Tässä artikkelissa kuvataan ensinnäkin aikaisempaan laadulliseen tutkimukseen pohjaten tiedediplomatian kehitystä vuosien 2009 ja 2025 välillä. Toiseksi artikkelissa tyypitellään laadullisen aineiston pohjalta erilaiset tavat ymmärtää tiedediplomatia."
        ]
      },
      {
        "page": 2,
        "blocks": [
          "Tutkimuksen tavoitteena on arvioida kriittisesti tiedediplomatiadiskurssia ja tuoda kansainvälistä tiedediplomatiakeskustelua lähemmäs suomalaista yleisöä. Tutkimus tukee tiedediplomatiasta kiinnostuneita ymmärtämään tiedediplomatiaa käsitteellisesti ja käytännöllisesti, ja se auttaa tunnistamaan tiedediplomatian heikkoudet ja vahvuudet.",
          "Artikkeli etenee niin, että seuraavaksi määritellään tutkimuksen peruskäsitteet, diplomatia ja tiedediplomatia, minkä jälkeen esitellään tutkimuksen aineisto ja analysoidaan se. Lopusta löytyvät artikkelin johtopäätökset.",
          "Diplomatian ja tiedediplomatian käsitteet sekä määritelmät",
          "Tässä luvussa avataan ensin tutkimukselle keskeiset käsitteet. Lopuksi tarkastellaan tiedediplomatiaa tutkimuskohteena sekä sen erilaisia käytänteitä ja muotoja.",
          "Diplomatia",
          "Diplomatia on yksinkertaistetusti taitoa hoitaa kansainvälisiä asioita ilman väkivaltaa tai sillä uhkaamista. Se on valtioiden keskinäisten suhteiden virallista hoitoa ja kansainvälisten suhteiden hoitamista neuvottelukeinoin (Merriam-Webster, ei pvm.).",
          "Diplomatian päätehtävästä ei ole täyttä yksimielisyyttä, mutta yleisimmin diplomatian tarkoituksena nähdään rauhan saavuttaminen ja ylläpitäminen. Toisaalta osa näkee diplomatian puhtaasti vallankäytön näkökulmasta itsekkäästi käyttäytyvien valtioiden keinona turvata omat intressinsä kilpailullisessa kansainvälisessä järjestelmässä (Barston, 1997, s. 1, 214; Berridge, 2003, s. 69–70; Zhang, 2015, s. 2). Kun sotateoreetikko Carl von Clausewitzin klassikkoteoksen (1989) mukaan diplomatia on sodan jatkamista muilla keinoilla, Michel Foucault argumentoi, että politiikka on sodan jatkamista muilla keinoilla (Hongisto, 2011, s. 66).",
          "Ronald Peter Barstonin (1997) mukaan diplomatialla hoidetaan valtioiden keskinäisiä suhteita ja suhteita muihin toimijoihin. Diplomatia on luonteeltaan edustuksellista tarkoittaen, että valtiot tai muut kansainvälisen järjestelmän institutionaaliset toimijat eivät sinällään kommunikoi, vaan diplomatia on ennen kaikkea kansainvälistä viestintää ihmisten välillä. Tämä inhimillinen ulottuvuus kuitenkin helposti unohtuu, kun katsoo esimerkiksi uutisotsikoiden tyypillisiä ilmaisuja, kuten ”Suomi hakee”, ”Yhdysvallat vetäytyy”, ”Venäjä kiistää” ja ”Iran uhkailee”.",
          "Diplomatia on osoittautunut varsin kriisinkestäväksi ja valtioiden välisten suhteiden kannalta välttämättömäksi instituutioksi (Jönsson, 2002, s. 212; Scharpf, 1999, s. 56). Vaikka diplomatia on laajentunut käsittämään myös muunlaisten kansainvälisten suhteiden hoitoa kuin kahden valtion välistä virallista toimintaa, diplomatia liitetään yhä vahvasti Wienin sopimuksen (1961) mukaiseen kodifioituun valtioiden väliseen viestintään (Berridge, 2015).",
          "Diplomatian tutkimuksen merkkiteoksessaan On Diplomacy – A Genealogy of Western Estrangement James Der Derian (1987, s. 93) tarjoaa yleisen ja vaivalloisesti suomeksi kääntyvän määritelmän diplomatialle: ”a mediation between estranged individuals, groups or"
        ]
      },
      {
        "page": 3,
        "blocks": [
          "entities.” Tämä minimalistinen mutta varsin väljä diplomatian määritelmä voitaisiin kääntää suomeksi yksinkertaisesti siten, että diplomatia on vuoropuhelua toisistaan vieraantuneiden yksilöiden, ryhmien ja organisaatioiden välillä.",
          "Lähtöolettamuksena siten on, että diplomatiaa määrittää keskeisesti vieraantuneisuus (alienation, estrangement). Vieraantuneisuuden määritelmä kumpuaa Adam Smithin, Georg Wilhelm Friedrich Hegelin ja Karl Marxin viitoittamista heterogeenisistä teorioista (Lagerspetz, 2024, s. 219–221). Vieraantumisella voidaan viitata yksilön vieraantumiseen hänen tuotannostaan, työntekoprosessistaan, työntekovälineestään ja muista eläinlajeista (Der Derian, 1987, s. 6–8). Vieraantuneisuuden teorioita yhdistää ajatus siitä, että yksilöiden väliseen toimintaan liittyy aina mahdollisia positiivisia tai negatiivisia seurauksia, jotka eivät ole ennakoitavissa tai jotka eivät ole toimijoiden tarkoittamia. Eerik Lagerspetzin mukaan Smithille ja Marxille tarkoittamattomien seurausten laki oli yhteiskuntatieteiden perusta, ja moderneissa yhteiskunnissa se ilmenee instituutioiden erillisyytenä ihmisistä. Se ilmenee niin, että valtiot, oikeusjärjestys ja talous näyttäytyvät kasvottomina sortavina mahteina – eivät dynaamisina organismeina, joiden toimintaa säätelee ihmisten toiminta. (Lagerspetz, 2024, s. 219–221.)",
          "Diplomatian ennakkoehtona on ero, joka tehdään sosiaalisissa suhteissa yksilön ja muiden yksilöiden välille. Samalla se tekee diplomatiasta ytimeltään neuvottelua erillisten subjektien välillä. Vaikka vieraantuminen on kokonaisvaltaisesti ja määritelmällisesti mukana diplomatiassa, ei vieraantuminen selitä diplomatiaa kaikenkattavasti (Der Derian, 1987, s. 29). Tämän määrittelyn pohjalta diplomatian lähtökohdaksi muodostuu subjektien erillisyys ja sisäänrakennettu toiseus, potentiaalinen intressiristiriita sekä toiminnan arvaamattomat seuraukset.",
          "Tiedediplomatia",
          "Tiedediplomatia on ilmiönä vanha (ks. esim. Turekian, 2018), mutta sen modernina syntyhetkenä pidetään usein presidentti Barack Obaman puhetta “uudesta alusta” Kairon yliopistolla vuonna 2009. Puhe toi tiedeyhteistyön osaksi Yhdysvaltojen maineenparannuskampanjaa terrorismin vastaisen sodan jälkimainingeissa. Yhtenä taustatekijänä oli, että sodasta huolimatta Yhdysvallat oli säilyttänyt asemansa ja kiinnostavuutensa vetovoimaisena maana tiede- ja tutkimuspiireissä (Turekian, 2018). Puheen jälkeen Yhdysvallat lanseerasi tiede- ja teknologiaohjelmia muslimienemmistöisissä maissa. Lisäksi jatkotoimenpiteenä tiedediplomatia käsitteellistettiin Wilton Park seminaarissa, jonka lopputuotteena oli vuonna 2010 julkaistu ja edelleen käytetty tiedediplomatian kolmijakoinen määritelmä. Tiedediplomatian osa-alueita erottaa se, millä tiede ja politiikka kytkeytyvät toisiinsa. Kategorioita ovat science in diplomacy, diplomacy for science ja science for diplomacy. Nämä kategoriat voidaan suomentaa esimerkiksi siten, että ensimmäinen viittaa tietopohjaiseen päätöksentekoon, toinen tieteenteon edistämiseen diplomatian keinoin ja kolmas kategoria kansainvälisten suhteiden edistämiseen tieteen avulla."
        ]
      },
      {
        "page": 4,
        "blocks": [
          "Science in diplomacy on yksinkertaistetusti ulkopolitiikkaa palvelevaa tiedontuotantoa (Ruffini, 2018b). Kategoria kontekstualisoituu eritoten tietopohjaisen päätöksenteon diskurssiin, missä tieteellä on politiikkaa palveleva ja osittain välineellistetty rooli. Tässä kategoriassa tiedediplomatiaa määrittävät ensisijaisesti ulkopoliittiset prioriteetit, joita tiede, tutkimus ja tutkijat henkilöinä tukevat.",
          "Diplomacy for science viittaa tilanteisiin, joita määrittävät tutkimuksen ja tieteen intressit ja joissa diplomatiaa tarvitaan tieteen edistämiseksi. Vaikka tiede ja tiedeyhteisö ovatkin perusluonteeltaan kansainvälisiä, diplomatian keinoin tieteentekemisen edellytyksiä voidaan toisinaan parantaa, erityisesti autoritaarisissa ja hierarkkisen toimintakulttuurin maissa (Uusikylä, 2021a).",
          "Science for diplomacy -kategoria kääntyy toiminnaksi, jossa tieteenteko edistää kansainvälisiä suhteita, parhaimmillaan globaalien julkishyödykkeiden, kuten rauhan ja terveyden, edistämistä (Björn & Kola, 2021). Näissä tilanteissa eri toimijoiden intressien katsotaan kanavoituvan kaikkia hyödyttäväksi universaaliksi toiminnaksi, kuten kansainvälisiksi sopimuksiksi (Uusikylä, 2021a).",
          "On myös esitetty muita tapoja hahmottaa tiedediplomatia. Matthias Leese (2018) jakaa tiedediplomatian keppeihin ja porkkanoihin. Pierre-Bruno Ruffini (2020c) sen sijaan jakaa tiedediplomatian sen mukaan, ovatko edistettävät edut itsekkäitä vai jaettuja eli ovatko ne lähtökohtaisesti orientoineita kilpailuun vai yhteistyöhön. Jako voidaan tehdä myös karkeasti sen mukaan, ovatko intressit ensisijaisesti tiedeyhteisön vai päätöksentekokoneiston (ks. taulukko 2, s. 13).",
          "Tiedediplomatiadiskurssiin kuuluu tiiviisti käsitys siitä, että on olemassa objektiivisesti todennettavia yhteisiä intressejä, ihmiskunnan suuria ongelmia, joihin vastaaminen on kaikkien vastuulla. Näistä useimmiten mainitaan ilmastonmuutos. Horst W. J. Rittelin ja Melvin W. Webberin (1973) käsitteellistämä viheliäisten ongelmien terminologia näkyy myös tiedediplomatian yhteydessä (mm. Björn & Kola, 2021).",
          "Tiedediplomatian käsitteellistämisen aikoihin tiedediplomatia ymmärrettiin kansainvälisessä politiikassa eritoten neoliberaalin institutionalismin näkökulmasta. Sen lähtöoletus kansainvälisestä järjestelmästä on, että sääntöpohjaisen järjestelmän potentiaali nojaa sääntelyyn ja instituutioihin, ja eri toimijoiden yhteistyöllä voidaan edistää toimijoiden jaettuja intressejä. (Keohane, 1984.)",
          "Tässä kontekstissa tiedediplomatia hahmottui positiivisena teknokraattisena voimavarana ja instrumenttina, joka edistää universaaleita tieteen ja vapauden arvoja. Lähtötilanteessa tiedediplomatian katsottiin ainakin retorisesti hyödyttävän tiedeyhteisöä ja palvelevan samalla kansallisvaltioiden demokraattisia, legitiimejä yhteiskunnallisia tavoitteita luottaen ihmisen kykyihin ratkaista maailmanmitan ongelmat yhteistyön, tieteen ja teknologian avulla. Tämä globaalihallinnallinen näkökulma on korostunut eurooppalaisessa tiedediplomatiadiskurssissa, mikä painottaa sitä, että yhteiset ongelmat yhdistävät ja luovat"
        ]
      },
      {
        "page": 5,
        "blocks": [
          "valtioiden välille keskinäisriippuvuuksia pakottaen ne yhteistoimintaan (Stone, 2020, s. 54– 57).",
          "Samalla lähestymistapa sivuuttaa toisenlaisen näkökulman politiikan perusluonteesta: politiikka on myös ideologista ja arvoihin kytkeytyvää kilpailua erilaisten ihmisyhteisöjen välillä. On idealistista ajatella, että tiedediplomatiassa nimenomaan tiede edustaisi neutraaliutta ja arvovapautta ja diplomatia politiikkaa.",
          "Tätä mieltä on myös Tim Flink (2020), joka on muistuttanut, että valta, arvot, kilpailu ja omien intressien ajaminen ovat myös osa tiedeyhteisöjä ja tiedeyhteistyötä. Flink on todennut (2020) raflaavasti, että tiedeyhteistyö ei ole ”globaali Woodstock” eikä tiedediplomatia-termin käyttö eri yhteyksissä muuta asiaa. Kamppailu arvoista, resursseista ja vaikutusvallasta ei tiedediplomatiassa siis rajoitu diplomatiaan ja sen taustamäärittäjiin, kuten ulkopolitiikkaan, vaan se on myös osa tiedettä ja erilaisia yhteistyömuotoja. Diplomatiasta puhuminen vallan tai politiikan sijaan on myös omiaan sumentamaan kuvaa intressiristiriidoista ja kilpailusta.",
          "Huomio neutraalin tieteen ongelmallisuudesta ja arvovapaudesta on tehty tietopohjaisen päätöksenteon kirjallisuudessa jo varhain (mm. Latour, 1987; Pielke, 2007; Putnam, 1981). Tiedediplomatiassa tieteen ”objektiivisuus” haastettiin vasta myöhään, eikä tieteen neutraaliuden haastaminen ole vielä valtavirtaa.",
          "Tiedediplomatia tutkimuskohteena",
          "Politiikan tutkimuksen näkökulmasta kiinnostavaa tiedediplomatiassa on se, missä valtaa on, kuka sitä käyttää, miten sitä käytetään ja mitä seurauksia tästä on. Politiikan tutkija saattaa kuitenkin pettyä syventyessään tiedediplomatiakirjallisuuteen, sillä siinä harvoin päästään empiirisesti käsiksi tähän.",
          "Tiedediplomatiakirjallisuus on deskriptiivistä luonnehdintaa tavoista, joilla tutkijat, tieteenteko ja diplomatia tai laajemmin kansainväliset suhteet toimivat vuorovaikutuksessa. Tämä avautuu nopealla vilkaisulla tiedediplomatian johtavaan amerikkalaiseen verkkojournaaliin Science & Diplomacy, jota julkaisee Yhdysvaltain monitieteellinen American Association for the Advancement of Science (AAAS). Ensinnäkään kyseessä ei ole vertaisarvioitu tieteellinen julkaisu, ja siinä tutkimuksellisesti liikutaan usein kevyellä pohjalla. Julkaisuaiheiden laaja kirjo kertoo, kuinka tiedediplomatia-käsite on monimuotoisesti sulautunut osaksi eri tieteenaloja ja erilaisia kansainvälispoliittisia kysymyksiä.",
          "Tyypillisesti tiedediplomatiaa tutkitaan tapaustutkimuksina, joissa tarkastellaan yksittäisten maiden tiedediplomatiatoimintaa. Kirjallisuutta vaivaa itsetehostus – tarve perustella, miksi tiedediplomatia on tärkeää ja miksi sitä tarvitaan. Tiedediplomatialla on selitetty niin Etelämannersopimusta vuonna 1959, Kiinan ja Yhdysvaltojen välien lämpenemistä 1970luvulla, kansainvälisen ydinaseita vastustavan liikkeen menestystä 1980-luvulla sekä Yhdysvaltojen ja Kuuban diplomaattisuhteiden normalisointiprosessia 2010-luvulla (Berkman, 2019; Lane, 2016; Mas-Permejo ym., 2024). Müller (2021) pitää tiedediplomatian"
        ]
      },
      {
        "page": 6,
        "blocks": [
          "ansiona Iranin ydinasesopimusta, Yhdistyneiden kansakuntien Agenda 2030 toimintaohjelmaa ja Pariisin ilmastosopimusta – kaikki vuodelta 2015.",
          "Kriittinen tiedediplomatiatutkimuksen koulukunta on leimallisen eurooppalainen ja pieni. Sen näkyvimpiin edustajiin kuuluu saksalaistutkija Tim Flink. Flinkin (2020) mukaan tiedediplomatia on täynnä höttöisiä ja romantisoituja lupauksia siitä, kuinka sen avulla valtioiden väliset suhteet ja yhteisiin haasteisiin vastaaminen mahdollistuu. Flink on pyrkinyt osoittamaan tieteenalan tutkimukselliset ongelmat ja aukot, esimerkiksi kyseenalaistamalla sen, että suuret monikansalliset tutkimusinfrastruktuurihankkeet muuttaisivat niissä työskentelevien käsityksiä muiden kansallisuuksien edustajista ja parantaisivat valtioiden välisiä suhteita. Charlotte Rungius, Flink ja Sebastian Riedel purkavat vuonna 2022 julkaistussa tutkimuksessaan tiedediplomatiahankkeiden epävarmuuksia tarkastelemalla Lähi-idän SESAME-hiukkaskiihdytintä, jonka esikuvana on ollut Euroopan hiukkasfysiikan tutkimuskeskus CERN. Tutkimus näyttää, kuinka vaikea on osoittaa tiedediplomatiahankkeiden edistävän yleviä tavoitteita, kuten rauhaa ja yhteisymmärrystä. Sama tietysti pätee myös toisinpäin: on vaikea osoittaa, etteikö näin voisi tapahtua.",
          "Vaihtoehdoksi amerikkalaiselle Science & Diplomacy -julkaisulle ollaankin perustamassa uutta, eurooppalaista tieteellistä tiedediplomatiajournaalia Frontiers in Science Diplomacy, mistä journaalin tuleva akateeminen julkaisijatalo kertoi Madridin tiedediplomatiakonferenssin yhteydessä joulukuussa 2023.",
          "Tiedediplomatia käytänteenä",
          "Yhdysvaltojen sisäpolitiikassa tapahtuneet muutokset ovat vaikuttaneet merkittävästi tiedediplomatian käytänteisiin ja muotoihin. Tunnetusti demokraatit ovat olleet republikaaneja yhteistyöhakuisempia ja avoimempia kansainväliselle yhteistyölle. Kuten monet muutkin angloamerikkalaiset ilmiöt, tiedediplomatia on levinnyt Yhdysvaltoja ja Britanniaa kauemmas, ja siitä on tullut osa useiden maiden ulkopoliittista repertuaaria. Kuten tämän tutkimuksen aineistosta hahmottuu (ks. taulukko 1), Yhdysvallat on useimpien maiden tiedediplomatiatoiminnan kohdemaa. Tätä selittää sen johtava asema tieteen (yliopistot, englanninkieliset julkaisut, vaihto-ohjelmat), teknologian ja kansainvälisen kaupan mahtina, mikä tekee Yhdysvalloista vetovoimaisen eri tiedediplomatian toiminta-alueilla ja sovellusaloilla.",
          "Kuva on aineiston keruun ja analyysin jälkeen kuitenkin muuttumassa. Presidentti Donald J. Trumpin vuonna 2025 alkanut toinen kausi ja moninaiset hyökkäykset yliopistoja kohtaan vähentää Yhdysvaltojen vetovoimaa ja taloudellista houkuttelevuutta (Brint, 2025). Toki tutkimuksen kansainväliset rakenteet, kuten englannin kielen dominanssi julkaisumarkkinoilla, muuttuvat hitaasti ja suosivat yhä angloamerikkalaisia toimijoita.",
          "Tiedediplomatiassa ei kuitenkaan ole kyse ”Amerikan mallin” kopioinnista. Eri mailla on laaja variaatio intressien, rationaalien, orientaatioiden ja kumppanimaiden suhteen (Fähnrich, 2017; Ruffini, 2018a). Italiassa ja Espanjassa tiedediplomatian kansallisesti tarkasteltuna"
        ]
      },
      {
        "page": 7,
        "blocks": [
          "rationaalina on maiden tiedediasporan hyödyntäminen (Ruffini, 2018a). Ranskassa puolestaan on perinteisesti vahva panostus ranskan kielen ja kulttuurin edistämiseen maailmalla (Ruffini, 2020b). Saksassa poikkeuksellisen vahvat tiede- ja tutkimusorganisaatiot (Fähnrich, 2017) ovat pitäneet huolen siitä, että tiedediplomatiakeskustelussa ei unohdu tieteen kansainvälistyminen. Tanskan tiedediplomatiatoiminnassa on painottunut innovaatiot ja tiedediplomatian kaupallinen potentiaali, suuntana Yhdysvallat (Uusikylä ym., 2021a).",
          "Taulukkoon 1 on hahmotettuna aikaisemman kirjallisuuden pohjalta eri maiden tiedediplomatiatoimintaa sen mukaan, millainen rationaali toiminnassa korostuu (tieteen edistäminen, oman maan diasporan hyödyntäminen tiedediplomatian kohdemaissa, kansainvälisen kaupan edistäminen, kielen ja kulttuurin edistäminen, opiskelijaliikkuvuus ja koulutusvienti), mikä tiedediplomatian kolmesta kategoriasta toiminnassa painottuu (science in diplomacy, diplomacy for science ja science for diplomacy), millaisiin kysymyksiin toiminta on orientoitunut (akateemiset globaalit, taloudelliset ja ulkopoliittiset), kuka toimintaa ohjaa (mikä taho valtionhallinnossa), mitkä ovat sen keskeisiä kohdemaita ja mitkä konkreettiset teemat korostuvat. Koska tiedediplomatia ja sen painotukset ovat usein keskusjohtoisia ja verovaroin tuettuja projekteja, hallitusten vaihdokset muuttavat painopisteitä.",
          "Useilla mailla on suurlähetystöverkostoihin kytketyt tiedediplomatiaverkostot, joiden kautta edistetään vaihtelevasti tiede-, kulttuuri- ja kieliyhteistyön lisäksi esimerkiksi innovaatio- ja teknologiakauppaa. Verkostot vaihtelevat siltä osin, mikä taho ohjaa niiden toimintaa. Usein kyse on työnjaosta tieteestä ja ulkopolitiikasta vastaavien ministeriöiden kesken.",
          "Suomen Team Finland Knowledge -verkoston puitteissa työskentelee 8 asiantuntijaa eri puolilla maailmaa. Verkoston toiminnan ohjaus on opetus- ja kulttuuriministeriössä, jonka verkkosivuilla verkoston asiantuntijoiden toimintaa kuvataan seuraavasti ”Heidän tehtävänään on seurata (toiminta-)alueidensa korkeakoulu- ja tiedepolitiikkaa, raportoida siitä Suomeen ja näin edistää yhteistyömahdollisuuksia ja näkyvyyttä kohdemaassa sekä avustaa suomalaisia korkeakouluja ja muita sektorin toimijoita yhteistyön lisäämisessä alueen toimijoiden kanssa.” (Opetusministeriö, ei pvm.)"
        ]
      },
      {
        "page": 8,
        "blocks": [
          "Taulukko 1. Tiedediplomatian erilaisia muotoja kirjallisuuden pohjalta eri maissa (Fähnrich, 2017; Krasnyak, 2018; Ruffini, 2018, 2020a, 2020b; Uusikylä ym., 2021a, Uusikylä ym., 2021b).",
          "III Globaalit kysymykset",
          "Ulkoministeriö (UM)",
          "Iso-Britannia Globaalit ongelmat, kehityskysymykset",
          "Rationaali Piirre Kategoria Orientaatio Ohjaus Kohdemaat Teemat Espanja Diaspora Globaali, yhteiskunta, maakuva",
          "Intia Tiede, diaspora",
          "* II Akateeminen Tiede- ja teknologiaministeriö, UM",
          "Tieteen laadun parantaminen ja ylläpito erit. physical and life sciences, laaja diaspora ja aivovuoto",
          "Aasia ja länsimaat ml. Itävalta, Japani, Ranska, Saksa, US, UK, Venäjä",
          "* Avaruustutkimus",
          "Italia Diaspora Tiede III Akateeminen Löyhästi UM ja opetuksesta, yliopistoista ja tutkimuksesta vastaava(t) ministeriö(t)",
          "Japani Tiede Tiede II Akateeminen Pääministerin kanslia",
          "Intia, EU, Sveitsi, UK, US",
          "Tiedeyhteistyö eri näkökulmista: globaaliongelmien ratkaisu, oman teknologisen kehityksen parantaminen, tasavertainen kumppanuus erit. Itä-Aasian maihin Kanada Kauppa, opiskelijat",
          "Kauppa I Taloudellinen UM globaali Tehdä maasta kilpailukykyinen erit. taloudessa Kiina Tiede Tiede I, II Akateeminen Tiede- ja teknologiaministeriö ml. Tiedeakatemia",
          "Pohjois- Amerikka, EU, Japani, Afrikka",
          "Tulkinnanvaraista, kuvauksissa korostuu tiedeyhteistyön merkitys eri tavoilla ml. parhaiden teknologisten innovaatioiden tavoittelu Ranska Kulttuuri Maakuva I Akateeminen UM EU, Aasia, Pohjois- Amerikka, Välimeren alue",
          "Tieteenaloista korostuu terveys ja erilaiset teknologian muodot (bio, ympäristö, nano) Saksa Tiede, opiskelijat",
          "I Akateeminen Opetus- ja tutkimusministeriö",
          "Globaali Erilaiset vaihtoohjelmat",
          "Maakuva, tiede, opiskelijat",
          "I * Opetus- ja kulttuuriministeriö",
          "Nousevat taloudet",
          "Suomi Koulutus Maakuva, kauppa",
          "Koulutusvienti, ilmakehätieteet ja tähän liittyvät kaupalliset ratkaisut"
        ]
      },
      {
        "page": 9,
        "blocks": [
          "Sveitsi Tiede, kauppa",
          "II Taloudellinen, akateeminen, poliittinen",
          "Tiede, yhteiskunta, kauppa",
          "EU, Yhdysvallat, Kiina, Intia, Brasilia, Singapore",
          "Ulko-, opetus-, tiede- ja innovaatiokysymyksistä vastaava federal council",
          "Eri toimipaikoissa eri portfolio: ml. tiedeyhteistyö, innovaatiot, koulutus, startupit, rahoitusta yksityissektorilta ja kiinteä yritysyhteistyö Iso- Britannia",
          "Tiedeministeriö ja UM",
          "Tiede, maakuva, kauppa",
          "Tiede, kauppa, maakuva",
          "II Akateeminen, globaalit kysymykset",
          "II Globaalit kysymykset",
          "Globaali Pysyminen tieteen kärkimaana eri tavoin (myös globaalit kysymykset, talous, arvot) Yhdysvallat Tiede Tiede, yhteiskunta, maakuva",
          "* Globaali Maailman lahjakkaimpien kykyjen houkuttelu, mikä ylläpitää tieteen tasoa ja kanavoituu globaaliksi vaikutusvallaksi Venäjä Kulttuuri Maakuva I Poliittinen * Perinteisesti itsenäisten valtioiden yhteisö",
          "Neuvostoliiton aikaisen imagon ylläpitäminen tieteellisesti korkeatasoisena maana erit. matemaattisissa tieteissä *Ei tietoa tai ei pystytä määrittelemään"
        ]
      },
      {
        "page": 10,
        "blocks": [
          "Aineisto ja analyysi",
          "Artikkelin tiedediplomatian kehityskaarta kuvaava aineisto perustuu aikaisempaan tutkimukseen sekä seuraaviin viimeaikaisiin tiedediplomatiayhteisön laatimiin raportteihin. Aikaisempi tutkimus kartoitettiin kirjallisuuskatsauksessa, joka koostui vuosina 2015–2020 julkaistuista vertaisarvioiduista Web of Science -tietokannassa poimituista artikkelista. Aineistoon sisällytettiin eniten siteeratut artikkelit, joiden hakusanana oli ”science diplomacy”. Katsauksessa kartoitettiin tutkimusten pääasialliset tavoitteet, metodit ja tulokset. Tätä kokonaisuutta täydentää lähdeluettelossa mainittu, vuoden 2020 jälkeen julkaistu ja vertaisarvioitu kirjallisuus sekä seuraavaksi esiteltävät raportit, joista tunnistettujen pääteemojen mukaan tiedediplomatian geopoliittiseksi käänteeksi kuvattava muutos on helppo todentaa.",
          "Analyysin pohjana on käytetty neljän vuosina 2022–2025 toteutetun työpajan raporttia. Nämä ovat seuraavat: 1) raportti kansallisesta pienryhmäkeskustelusta, joka käsitteli suomalaista tiedediplomatiaa ja järjestettiin Helsingissä joulukuussa 2022, 2) Madridissa joulukuussa 2023 järjestetyn Euroopan unionin (EU) ensimmäisen tiedediplomatiakonferenssin raportti, 3) geopoliittisia vaikutuksia käsitelleen eurooppalaisen tiedediplomatiatyöpajan raportti huhtikuulta 2024 ja 4) Euroopan komission tiedediplomatiaraportti helmikuulta 2025. Raportit 2) ja 4) ovat saatavilla avoimesti (European Commission: Directorate-General for Research and Innovation ym., 2025; European Science Diplomacy Conference, 2023), mutta raportit 1) ja 3) eivät ole julkisia.",
          "Tiedediplomatian tyypittelyyn liittyvä analyysi pohjautuu vuosina 2020–2021 kerättyyn puolistrukturoituun haastatteluaineistoon (N = 30), johon haastateltiin tiedediplomatian kanssa työskenteleviä viranomaisia ja tutkijoita. Asiantuntijahaastattelu toteutettiin kuuden kirjallisuuskatsauksessa identifioidun pääteeman kautta. Kysymyskokonaisuudet ja teemat olivat kaikille haastateltaville samoja. Asiantuntijahaastatteluissa huomioitiin haastateltavien tulkinnat ja heidän merkityksenantonsa. Haastatteluaineisto pseudonymisoitiin ja purettiin narratiiviseksi tiivistelmäraportiksi, minkä jälkeen aineisto kategorisoitiin tiedediplomatian kolmijaon mukaisesti.",
          "Vuosien 2022–2025 aikana raporttiaineistossa korostuvat seuraavat tiedediplomatian kehityksen kannalta keskeiset teemat: geopoliittinen ja teknologinen kilpailu, sota ja rauha, Ukraina, Venäjä, Kiina sekä vakoilu. Muutos on havaittavissa esimerkiksi EU-tiedediplomatiaasiakirjojen painotuseroissa: kun vuonna 2019 hyväksytyssä niin sanotussa Madridin tiedediplomatiajulistuksessa painottui kestävän kehityksen tavoitteet sekä ihmisoikeuksiin, demokratiaan ja tieteen itsenäisyyteen nojaavat arvot, joulukuussa 2023 järjestetyssä tiedediplomatiakonferenssissa nähtiin siirtymä kohti tiede- ja teknologianyhteistyön vaarojen ja riskien tunnistamista. Tämä näkyy raportin vahvassa retoriikassa ”geopoliittisista jännitteistä”. Geopolitiikkadiskurssi näkyy EU:n tiedediplomatiaraportissa ja komissaari Ekaterina Zaharovan esipuheessa, jossa todetaan, että ”today, science, technology and innovation translate more than ever into power and geopolitical influence, and this is one of"
        ]
      },
      {
        "page": 11,
        "blocks": [
          "the reasons why they matter for diplomacy” (European Commission: Directorate-General for Research and Innovation ym., 2025). Keskusteluun ovat lisäksi tulleet mukaan vahvemmin humanitaariset painotukset, kuten sotaa pakenevan ukrainalaisdiasporan tukeminen (suomalainen työpaja, 2022; ks. aiheesta myös esim. Lattu & Rostedt, 2022).",
          "Taulukossa 2 esitellään tiedediplomatian tyypittely. Oransseissa painotussarakkeissa on jaoteltu aikaisemman teoriakirjallisuuden pohjalta, onko kyseisen kategorian puitteissa tehty tiedediplomatia ensisijaisesti kansallisesti vai kansainvälisesti orientoitunutta. Kirjaus on siten teorialähtöinen. Violeteissa tavoite -sarakkeissa on sekä aineiston että teorian syntetisoinnin perusteella pyritty hahmottamaan, millaisiin tavoitteisiin kukin tiedediplomatiatyyppi nojaa ja millä perustein. Vihreällä pohjalla löytyvään toimijoita ja instrumentteja -sarakkeeseen on kirjattu aineistossa mainittuja konkreettisia välineitä, joilla tiedediplomatiaa Suomessa tehdään. Viimeisissä, sinisissä sarakkeissa on teorialähtöistä pohdintaa siitä, mikä demokraattisen järjestelmän arvo ja strategia sen toteuttamiseksi on syytä huomioida, jotta tiedediplomatia ei etäänny demokraattisen yhteiskunnan perusarvoista."
        ]
      },
      {
        "page": 12,
        "blocks": [
          "Taulukko 2. Aineisto purettuna käsitekategorian, tavoitteiden toiminnan ja arvojen mukaan.",
          "Painotus kansallinen",
          "Tavoite Toimijoita ja instrumentteja",
          "Arvo ja strategia sen ylläpitämiseksi",
          "vs. kansainvälinen",
          "Kansallinen Ulkopolitiikka",
          "Määritellyt",
          "Demokratia Vaalit",
          "Science in diplomacy",
          "Tietopohjan laajentaminen",
          "kansallisen politiikan yhtenä",
          "Ulkopoliittiset päätöksentekijät, diplomaatit, tiedontuottajina tutkimuslaitokset",
          "sektorina",
          "ulkopoliittiset tavoitteet",
          "ml. Ulkopoliittinen instituutti, Ilmatieteen",
          "laitos sekä instrumentit, kuten VN",
          "TEAS, tutkijat diplomaatteina",
          "Diplomacy",
          "Tieteenteon edellytysten",
          "Pitkäjänteinen ja",
          "Molemmat Tieteen kansainvälistyminen,",
          "Suomen edustustot maailmalla, Team Finland",
          "Tieteen itsenäisyys",
          "for science",
          "Parasta tiedettä ja tutkimusta",
          "Knowledge -verkosto,",
          "joka parantaa myös kotimaassa",
          "parantuminen ja tieteen laadun vahvistuminen mm.",
          "avoin tiedepolitiikka, tiedeyhteisölähtöiset",
          "tehtävää tiedettä",
          "Suomen Akatemia, tiedeakatemiat,",
          "aloitteet",
          "vaihto-ohjelmien, liikkuvuuden, yhteis-",
          "yliopistot",
          "työverkostojen, tutkimusinfrahankkeiden",
          "myötä",
          "Science",
          "Kansainvälinen Tiedeyhteistyön",
          "Potentiaalisesti kaikki",
          "avulla voidaan",
          "Rauha, turvallisuus,",
          "Vastaukset globaaliongelmiin, globaalien",
          "kansainvälisen",
          "Monenvälisyys Globaalidemokratia",
          "for diplomacy",
          "hyvinvointi",
          "julkishyödykkeiden",
          "parantaa kahdenvälisiä",
          "turvaaminen",
          "suhteita tai vastata globaaleihin",
          "järjestelmän toimijat, eri järjestöt ml. Yhdistyneet kansakunnat, Taloudellisen yhteistyön ja",
          "haasteisiin",
          "kehityksen järjestö OECD, UNESCO, kansallisvaltiot,",
          "globaalit tiedontuottajat,",
          "välineinä esim. kansainväliset sopimukset"
        ]
      },
      {
        "page": 13,
        "blocks": [
          "Science in diplomacy -kategoria ymmärrettiin parhaiten ulkopoliittisten päätöksentekijöiden ja diplomaattien tietopohjan laajentamiseen liittyvinä toimina ja instrumentteina, joista erityisesti mainittiin Ulkopoliittinen instituutti ja valtioneuvoston tutkimus-, kehitys ja arviointitoiminta (VN TEAS). Mainintoja saivat yliopistot, hajanaiset ulkomaiset tiedontuottajaorganisaation (mm. Tukholman rauhantutkimusinstituutti Sipri) ja myös eiakateemiset tiedontuottajat, kuten CMI - Martti Ahtisaari Peace Foundation.",
          "Kotimaisena ongelmana pidettiin tiedontuotannon markkinoiden kokoa (haastateltava, H30): maa on pieni eikä kansainvälisesti kunnianhimoisia tutkijoita meritoi ulkopoliittinen vaikuttamistyö. Haastatteluhetkellä visioitiin, että VN TEAS-instrumentista voisi tulla mahdollisuus vaikuttaa kansainvälispoliittiseen keskusteluun (H11). Samalla kuitenkin kritisoitiin valtioneuvostovetoisen instrumentin rajoittavan tutkijoiden vapautta, sillä raportit olivat alisteisia hankkeiden ohjausryhmille (H30). Tieteen itsenäisyyden säilyttäminen korostuikin tiedediplomatian keskeisenä ohjaavana arvona. Kuitenkin haastattelut vahvistavat aikaisemman kirjallisuuden käsityksen siitä, että ulkopolitiikan ja tieteen suhteessa tiede on toissijaista ja politiikka määrittää tahdin (H18; H22).",
          "Samalla kun globaaliongelmista puhuttiin laajasti haastatteluissa, tiedediplomatia nähtiin kansallisena projektina, ”Ab Suomi Oy:n” tehtävänä (H11). Tiedediplomatian tavoitteena oli luoda Suomesta” kuvaa toimijana, joka on ratkaisemassa viheliäitä ongelmia” (H2), mikä jättää tulkinnanvaraiseksi, onko imagopolitiikka kuitenkin tärkeämpää kuin aito edistyminen ongelmien ratkaisussa. Samanlainen ulkopoliittinen realismi paistaa kommentista, että ”tiedediplomatia tarjoaa kulissin erilaisille toimille”. Tiedediplomatiassa tärkeää on myös imago: “Epäitsekkyys on itsekkyyttä.” (H30.)",
          "Vaikka Suomi voisi olla tiedediplomatiassa kokoaan suurempi (H2), ”haasteena on se, että meillä kaikki on niin pientä” (H17). Suuruuden ekonomiaan liittyvät myös pelot siitä, kuinka EU ja sitä kautta Suomi jää jalkoihin suurten maiden temmellyskentällä muun muassa kyberpuolella, jossa erityisesti Yhdysvalloilla on runsaasti yrityspuolen osaamista ”vetoapunaan”. Kybermaailmassa “haetaan kauhun tasapainoa”, ja suurvalloilla on parhaat resurssit tähän kamppailuun. (H22.)",
          "Diplomacy for science -kategoriassa korostui pohdinta siitä, kuinka diplomatian keinoin voidaan edistää tutkimuksen tekoa. Tässä viitekehyksessä nousi erityisesti esiin edellä mainittu Team Finland Knowledge -verkosto mutta myös erilaiset ei-juridisesti sitovat kansainväliset yhteisymmärryspöytäkirjat ja kansainväliset tiede- ja tutkimussopimukset, joilla yhteistyötä vauhditetaan usein EU:n ulkopuolisten maiden toimesta, mutta joiden todellinen merkitys jää usein kirjausten sitomattomuuden takia vaatimattomaksi (H27). Erilaiset diplomatian arvovaltapalvelut ja niiden merkitys autoritaarisissa ja hierarkkisen toimintakulttuurin maissa myös tunnistettiin. Yleisesti haastatteluissa korostui, että tieteen ja tutkimuksen itsenäisyyttä ja vapautta pidettiin erittäin tärkeänä osana tiedediplomatiaa."
        ]
      },
      {
        "page": 14,
        "blocks": [
          "Science for diplomacy -kategoria heijasteli sitä, kuinka haastatteluhetkellä globaaliongelmista korostui erityisesti ilmastonmuutos ja tähän liittyvä suomalainen tutkimus ja teknologia. Samalla kuitenkin on huomattava, että ilmastopolitiikka oli haastatteluhetkellä yksi maakuvatyön kärkiteema ja siten jää tulkinnanvaraiseksi, mitä havainto lopulta selittää. Suomen näkökulmasta kiinnostavaa haastatteluissa oli, kuinka kansalliseksi kärkiteemaksi noussutta koulutusvientiä perusteltiin esimerkiksi juuri ilmastoaiheisiin nähden kevyesti: ilmastoaiheissa Suomen monipuoliset vahvuudet tunnistettiin kauttaaltaan perustutkimuksesta vientiteollisuuteen ja kansainväliseen diplomatiaan, kun taas koulutus hahmottui eksplisiittisemmin osaksi Suomen maakuvatyötä.",
          "Aineiston keräämisessä selväksi tuli, että eri tieteenalojen edustajat olivat hyvin kärkkäitä edistämään omia etujaan, mistä voidaan päätellä, että mikäli tiedediplomatia Suomessa resursoitaisiin vahvemmin, eri intressiristiriidat nousisivat voimallisemmin esiin. Suomen pienet resurssit ja maailman suuret ongelmat muodostivat yhdessä vaikean strategisen dilemman: valtaosa haastateltavista kuitenkin halusi uskoa Suomen vaikutusmahdollisuuksiin, mutta tiedediplomatiakenttää vaivasi strategisen ohjauksen puute. Toki onnistumisiakin mainittiin, esimerkiksi kuinka Suomi oli onnistunut vaikuttamaan esimerkiksi kansainvälisiin päästöneuvotteluihin (H9).",
          "Tulosten tarkastelu",
          "Tässä luvussa arvioidaan analyysin tuloksia. Ensin avataan tiedediplomatiaa strategisena välineenä ja sitten tarkastellaan tiedediplomatiadiskurssin muotoutumista poliittisten muutosten valossa.",
          "Tiedediplomatian reaalipoliittinen käänne",
          "Tiedediplomatia on enemmän tai vähemmän strategisesti valittu keino erilaisten intressien edistämiseen. Kuten taulukko 1 havainnollistaa, intressien määrittämisen taustalla on usein eri hallitusten ja ministeriöiden tavoitteet. Nämä tavoitteet muuttuvat ajan kuluessa ja vaihtuvat demokratioissa vaalien myötä, mutta kansainvälisessä aineistossa on tunnistettavissa useita tyypillisiä rationaaleja, joita ovat tieteellisten, kaupallisten ja ulkopoliittisten intressien edistäminen.",
          "Tutkimuksessa olisikin hedelmällisempää jatkossa keskittyä tähän politiikkaan tiedediplomatian taustalla – ei niinkään erilaisiin aktiviteettikartoituksiin, sillä nämä ovat pääsääntöisesti kansallisten politiikkojen ja resursoinnin ilmentymiä. Valtio-opillisesti olisi kiinnostavaa esimerkiksi ymmärtää, ajavatko suuret eurooppalaiset puolueet, kuten oikeistopopulistit, vihreät, sosiaalidemokraatit tai konservatiivit, samantyyppistä tiedediplomatiaa ja, jos ajavat, millaista se on. Samalla tulisi tehdä tarkemmin eroa itsenäisten, ei-valtiollisten tiedediplomatiatoimijoiden tavoitteenasetteluun ja pohtia, miten se eroaa hallitusten ajamasta linjasta. Nyt tulkintaa leimaa valtiokeskeinen näkökulma, jossa itsenäisten toimijoiden työ sovitetaan tulkinnallisesti yhteen virallisen toiminnan kanssa."
        ]
      },
      {
        "page": 15,
        "blocks": [
          "Esimerkiksi yliopistoilla, tiedeakatemioilla ja tieteellisillä seuroilla voi olla hyvinkin virallisesta linjasta poikkeavia pyrkimyksiä ja näkemyksiä (esim. Yhdysvallat).",
          "Tiedediplomatian “keksiminen” on itsessään hyvä esimerkki siitä, mitä tiedediplomatia käytänteenä on valtiokeskeisestä valtaperspektiivistä. Sen käsitteellinen synty paikallistuu hetkeen, jolloin Yhdysvalta oli maailman ainoa supervalta. Maavertailussa voidaan huomata, että globaalisti tarkasteltuna varsin suuri osa erilaisista tiede- ja teknologiaprojekteista kiinnittyy Yhdysvaltoihin ja Isoon-Britanniaan. Syynä on paitsi näiden maiden korkea tieteen taso, mutta myös niiden isot vahvat tiedepanostukset. Käänteisesti asia tuli esiin haastatteluaineistossa: ongelmana pidettiin yhteistyötä tutkimuksellisesti vähemmän edistyneiden maiden kanssa, ja nähtiin luontevana tähdätä sinne, mistä on opittavaa. Tiedediplomatiaa voidaankin pitää Yhdysvaltojen liimastrategiana, jonka tavoitteena on ylläpitää maailman johtavan suurvallan asemaa. Kielikysymys ei ole tässä kokonaisuudessa vähäpätöinen, sillä englanti on yhä kansainvälinen tieteen kieli.",
          "Haastatteluaineistoista välittyy, että samalla kyse voi olla jaetuista, yhteiseksi puetuista tai yhteisesti sovituista intresseistä. Geo- ja valtapoliittisesta käänteestä huolimatta ihmiskunnan yhteisiin haasteisiin vastaaminen ei ole täysin poistunut asialistalta, ja Suomella nähtiin edelleen rooli näissä yhteisissä talkoissa. Kansallisten etujen tunnistamisen ja edistämisen suhteen oltiin varsin varovaisia, ja Suomen etu nähtiin maailman etuna erityisesti koulutus- ja ilmastoteemoissa. Tämä heijastaa Suomen pitkää ulkopoliittista linjaa kansainvälisen politiikan lääkärinä, ei tuomarina.",
          "Tällä hetkellä tiedediplomatiassa painottuu aikaisempaa vahvemmin tieteen ja teknologian merkitys valtaresurssina. Toimintaympäristöä leimaa Kiinan ja Yhdysvaltojen kiristynyt teknologinen kilpailu ja riskien tunnistaminen kansainvälisessä tiedeyhteistyössä. Muutos heijastuu myös kotimaiseen keskusteluun, jossa aikaisempaa valppaammin keskustellaan tieteenteon avoimuuden rajoista. Muutos ei kuitenkaan ole yhtäkkinen.",
          "Vuosiin 2017–2018 paikantuu aineiston valossa tiedediplomatian reaalipoliittinen käänne, jossa valtakysymykset ja intressit nousivat tiiviimmin osaksi tiedediplomatiadiskursseja. Käänne ajoittuu Trumpin ensimmäiseen valtakauteen. Yhdysvalloilla on keskeinen rooli kansainvälisen politiikan agendan määrittäjänä ja suunnan näyttäjänä. Trumpin hallinnon vahvimman oikeutta korostava ulkopolitiikka on ongelmallinen paitsi pienille maille, myös globaalille tiedeyhteisölle ja moniääniselle näyttöperusteiselle politiikalle laajemmin.",
          "Kun 15 vuotta sitten tiedediplomatia oli ennen kaikkea keino parantaa yhteyksiä ja suhteita keskittymällä siihen, mikä yhdistää maita ja niiden väestöjä pikemminkin kuin mikä niitä erottaa, nyt tiedediplomatiakeskustelua sävyttää eräänlainen riskienhallintadiskurssi. Tiedeja teknologiayhteistyö on globalisoituneen maailman välttämättömyys, mutta samalla keskustelussa painottuvat turvallisuusnäkökulmat ja tarve kytkeytyä irti riippuvuuksista. Reaalipoliittinen käänne tarkoittaa ennen muuta sitä, että tiedediplomatiaa harjoitetaan ja tarkastellaan pikemminkin intressilähtöisesti kuin arvolähtöisesti eri osa-alueilla. Tässä"
        ]
      },
      {
        "page": 16,
        "blocks": [
          "käänteessä tieteen, tutkimuksen ja globaaliongelmakeskeisten ratkaisujen edistäminen jää muiden toimijoiden aktiivisuuden varaan.",
          "Suomen kaltaisen pienen maan selviytymisstrategiaksi jää sopeutuminen. Hyvänä esimerkkinä toimii Suomen Akatemiaa koskevan lain muuttaminen niin, että tieteelliselle tutkimukselle jaettu rahoitus ei saisi olla ristiriidassa Suomen ulko- ja turvallisuuspolitiikan kanssa. Lakihanketta on kritisoitu vahvasti: siinä on nähty kaikuja suomettumisesta ja epädemokraattisten maiden tavoista alistaa tiede poliittisille päämäärille (Sauli & Juntunen, 2025).",
          "Tiedediplomatiakeskustelussa on sitkeästi pysynyt mukana vahva eetos sille, että globaalihallintaan, kansainvälistymiseen ja ihmisyhteisöjen väliseen vuorovaikutukseen tulee panostaa eri syistä. Vaikeina aikoina on ylläpidettävä kielten ja kulttuurien tuntemusta tai muuten tulevaisuudessa häämöttävinä helpompina aikoina ei ole lähtökohtia rakentaa suhteita erilaisiin yhteisöihin. Esimerkiksi joulukuussa 2022 järjestetyssä suomalaisessa työpajassa todettiin, että suomalainen tiedeyhteisö on noudattanut tarkasti sanktioita ja institutionaalinen yhteistyö venäläistoimijoiden kanssa on lakkautettu, mutta samalla todettiin, että tarve strategiselle ja laaja-alaiselle Venäjä-osaamiselle, mukaan lukien kielen ja kulttuurin tuntemukselle, ei tule katoamaan mihinkään. Madridin työpajassa vuonna 2023 korostuivat samansuuntaiset vetoomukset kiinan kielen ja kulttuurin opiskelun puolesta.",
          "Tässä palataan vieraantuneisuuden käsitteeseen ja ongelmaan, jossa instituutiot näyttäytyvät ihmisyhteisöjen ulkopuolella toimiviksi organismeiksi, joihin omalla toiminnallaan ei voi vaikuttaa. Suurvaltapoliittinen käänne kansainvälisissä suhteissa on ongelmallinen, sillä se korostaa toimijakeskeistä näkökulmaa. Näkökulma kiinnittyy institutionaalisiin järjestelyihin, rakenteisiin ja resursointiin, joka tuottaa yhteistyölle uhkia.",
          "Tiedediplomatian potentiaalina on, että käsitteen avulla voidaan tarkastella diplomaatteja, tutkijoita ja tiedeyhteistyötä muustakin kuin kansallisesta ”maan edustajien” näkökulmasta. Näin tulee huomioiduksi myös se, että yksittäisillä ihmisillä ja heidän neuvottelukyvyillään voi olla merkittävä vaikutus laajempiin positiivisiin kehityskulkuihin ja luottamuksen rakentamiseen. Tutkimusstrategiana tämä on vaikeaa, sillä yksilön rooli tulisi piirtyä esiin laajemmasta kontekstista.",
          "Minding the gap – tiedediplomatian erilaiset kuilut",
          "Tiedediplomatiaa harjoitetaan paitsi eri maissa eri lähtökohdista myös eri tieteenaloilla ja politiikan sektoreilla. Näin ollen erilaisia vieraantuneisuuden kuiluja ja intressiristiriitoja on vääjäämättä erittäin suuri määrä institutionaalisella tasolla yksilötasosta puhumattakaan. Tämän aineiston pohjalta niitä on esimerkiksi suhteissa Eurooppa–Yhdysvallat, tutkijat– diplomaatit ja autoritaariset maat – demokraattiset maat.",
          "Useissa selvityksissä peräänkuulutetaan strategisempaa otetta tiedediplomatiaan. Eurooppalaisella tasolla tätä keskustelua pyrittiin vauhdittamaan lanseeraamalla prosessi, jonka lopputulos, helmikuussa 2025 julkaistu raportti ei kuitenkaan ole strategia vaan"
        ]
      },
      {
        "page": 17,
        "blocks": [
          "suosituksia sisältävä jäsentely, jossa kuvataan ja jäsennellään, mitä EU:n ulkosuhteissa tapahtuu tutkimuksen ja tieteen näkökulmasta.",
          "Tiedediplomatian kenttä on varsin laaja. Siten strategisuus on välttämättömyys. Vain sillä, että tavoitteista sovitaan erikseen, voidaan päättää, mihin resurssit keskitetään ja mikä on tiedediplomatian varsinainen hahmo ja muoto. Strategioillakaan ei kuitenkaan pystytä täysin hallitsemaan tiedediplomatian ennakoimattomia vaikutuksia.",
          "Johtopäätökset",
          "Tiede ja teknologia ovat kautta historian olleet vallan välineitä. On selvää, että tutkijat ja tiedeyhteisö tarvitsevat tiedediplomatiaa enemmän kuin päätöksentekijät. Tutkijakunnalle ja erilaisille tieteen välittäjäorganisaatioille tiedediplomatia on väylä päästä kiinni valtaan. Tiedediplomatiassa ilmennyt toiveikkuus tiedediplomatian kansainvälistä politiikkaa transformoivasta potentiaalista vaikuttaa nykyluennassa naiivilta, kun maailmanpolitiikkaa voi heiluttaa nopeasti pikaviestipalvelussa.",
          "Vaikka tiedediplomatia itsessään tuskin kykenee murtamaan puhtaan valtapolitiikan kovaa ydintä, tiedediplomatia antaa välineitä jatkaa tieteen ja vapauden universalismin puolustamista sekä globaaliongelmakeskeistä hallintaa. Tiedediplomatian laaja ja moninainen toimijakenttä yrityksistä kansalaisjärjestöihin ja tiedeakatemioihin mahdollistaa kuitenkin näiden teemojen edistämisen kansainvälispoliittisesti vaikeina aikoina.",
          "Tiedediplomatia tarjoaa eräänlaisen teknokraattisen utopian siitä, kuinka kansainvälinen politiikka voisi muotoutua yhteisesti sovittujen päämäärien pohjalta ja kanavoitua laajoja ihmisjoukkoja hyödyttäväksi toiminnaksi. Tässä ideaalissa toimenpiteet määrittelisi kosmopoliittinen tiedeyhteisö ja tavoitteet määriteltäisiin universaalin vapauden ja eetoksen näkökulmasta. Parhaiten tätä mallia ovat toistaiseksi vastanneet Yhdistyneiden kansakuntien vuosituhattavoitteet ja sen jälkeen kestävän kehityksen tavoitteet. Keskiössä olivat ihmisoikeudet, ja tavoitteita edistettiin demokraattisesti niin kansainvälisesti kuin kansallisestikin.",
          "Vaikka tämä utopia on kauempana kuin koskaan sitten tiedediplomatian käsitteellistämisen, on myös syytä tietoisesti vastustaa trendejä, jotka pönkittävät maailman käsittämistä puhtaasta valtapoliittisesta perspektiivistä. Tarvitsemme yhä mielikuvia ja tavoitteita, joilla rakennetaan positiivisia tulevaisuuksia globaalisti sotien, etenevän ilmastokriisin, luontokadon ja pandemiariskien olosuhteissa.",
          "Lähteet",
          "Barston, R. P. (1997). Modern diplomacy. Longman.",
          "Berkman, P. A. (2019). Evolution of science diplomacy and its local-global applications. European Foreign Affairs Review, 24(AI), 63–79. https://doi.org/10.54648/eerr2019019",
          "Berridge, G. R. (2003). Diplomacy – theory and practice. Palgrave Macmillan UK."
        ]
      },
      {
        "page": 18,
        "blocks": [
          "Berridge, G. R. (2015). Diplomacy: theory and practice (5. painos). Palgrave Macmillan.",
          "Björn, P. & Kola, J. (2021). Kansainvälinen tiedediplomatia viheliäisten ongelmien ratkaisujen avaimena. Turun yliopiston blogi. https://blogit.utu.fi/utu/2021/11/09/kansainvalinentiedediplomatia-viheliaisten-ongelmien-ratkaisujen-avaimena/",
          "Brint, S. (2025). US universities in the age of Trump: is there a way to prevent their long-term decline? Society, 2025. https://doi.org/10.1007/s12115-025-01124-6",
          "Clausewitz, C. von. (1989). On war. Princeton University Press.",
          "Flink, T. (2020). The sensationalist discourse of science diplomacy: a critical reflection. The Hague Journal of Diplomacy, 15(3), 359–370. https://doi.org/10.1163/1871191X-BJA10032",
          "Der Derian, J. (1987). On diplomacy: a genealogy of Western estrangement. Blackwell.",
          "Fähnrich, B. (2017). Science diplomacy: investigating the perspective of scholars on politics– science collaboration in international affairs. Public Understanding of Science, 26(6), 688– 703. https://doi.org/10.1177/0963662515616552",
          "European Commission: Directorate-General for Research and Innovation, Gjedssø Bertelsen, R., Bochereau, L., Chelioti, E., Dávid, Á., Gailiūtė-Janušonė, D., Hartl, M., Liberatore, A., Mauduit, J.-C., Müller, J. M. & Van Langenhove, L. (toim.). (2025). A European framework for science diplomacy: recommendations of the EU Science Diplomacy Working Groups. Publications Office of the European Union. https://data.europa.eu/doi/10.2777/9235330",
          "European Science Diplomacy Conference. (2025). Report about the 1 st European Science Diplomacy Conference: Towards a European Approach to Science Diplomacy, 18-19 December 2023, Madrid, Spain. https://2023.eu-science-diplomacy.servicefacility.eu/docs/Report_about_the_1st_European_Science_Diplomacy_Conference_Towards_ a_European_Approach_to_Science_Diplomacy.pdf",
          "Hongisto, P. (2011). Valta on edelleen tietoa. Tieteessä tapahtuu, 29(4–5), 65–66.",
          "Jönsson, C. (2002). Diplomacy, bargaining, and negotiation. Teoksessa W. Carlsnaes, T. Risse & B. A. Simmons (toim.), Handbook of international relations (s. 212–234). SAGE Publications. https://doi.org/10.4135/9781848608290.n11",
          "Karltofen, C. & Acuto, M. (2018). Science diplomacy: Introduction to a boundary problem. Global Policy, 9(3), 8–14. https://doi.org/10.1111/1758-5899.12621",
          "Keohane, R. O. (1984). After hegemony: cooperation and discord in the world political economy. Princeton University Press.",
          "Krasnyak, O. (2018). National styles in science, diplomacy, and science diplomacy: a case study of the United Nations Security Council P5 Countries. Brill Research Perspectives in Diplomacy and Foreign Policy, 3(1), 1–100. https://doi.org/10.1163/24056006-12340009"
        ]
      },
      {
        "page": 19,
        "blocks": [
          "Lagerspetz, E. (2024). Itsemäärääminen ja valta — Kirjoituksia poliittisesta filosofiasta. Gaudeamus.",
          "Lane, E. (22.3.2016). Science diplomacy improves Cuba, U.S. relations. American Association for the Advancement of Science. https://www.aaas.org/news/science-diplomacy-improvescuba-us-relations",
          "Lattu, A. & Mäkinen-Rostedt, K. (2022). #ScienceForUkraine, Suomi, tiede ja sota – aika reflektoida. Tieteessä tapahtuu, 5. https://www.tieteessatapahtuu.fi/numerot/5- 2022/scienceforukraine-suomi-tiede-ja-sota-aika-reflektoida",
          "Latour, B. (1987). Science in action: how to follow scientists and engineers through society. Harvard University Press.",
          "Leese, M. (2018), Between a carrot and a stick: science diplomacy and access to EU research funding. Global Policy, 9(S3), 48–52. https://doi.org/10.1111/1758-5899.12546",
          "Leijten, J. (2017). Exploring the future of innovation diplomacy. European Journal of Futures Research, 5, 20. https://doi.org/10.1007/s40309-017-0122-8",
          "Mas-Permejo, P., Marimón-Torres, N. & Dickinson-Meneses, F. (17.10.2024). Cuba-US scientific collaboration: science diplomacy in challenging times. Science & Diplo-macy. https://doi.org/10.1126/scidip.adt9910",
          "Merriam-Webster. (ei pvm.). Diplomacy. Teoksessa Merriam-Webster.com dictionary. Haettu 2.3.2025 osoitteesta https://www.merriam-webster.com/dictionary/diplomacy",
          "Müller, J.-M. (3.5.2021). Science for Multilateralism. Science & Diplomacy, 10(2) https://www.sciencediplomacy.org/perspective/2021/science-for-multilateralism",
          "Pielke, Jr., R. A. (2007). The honest broker: Making sense of science in policy and politics. Cambridge University Press.",
          "Putnam, H. (1981). Reason, truth and history. Cambridge University Press. https://doi.org/10.1017/CBO9780511625398",
          "Rittel, H. W. & Webber, M. M. (1973). Dilemmas in a general theory of planning. Policy Sciences, 4(2), 155–169.",
          "Ruffini, P.-B. (2018a). Science and diplomacy: a new dimension of international relations. Springer. https://doi.org/10.1007/978-3-319-55104-3",
          "Ruffini, P.-B. (2018b). The intergovernmental panel on climate change and the sciencediplomacy nexus. Global Policy, 9(S3) 73–77. https://doi.org/10.1111/1758-5899.12588",
          "Ruffini, P.-B. (2020a). Conceptualizing science diplomacy in the practitioner-driven literature: a critical review. Humanities and Social Sciences Communications, 7(1), 1–9. https://doi.org/10.1057/s41599-020-00609-5"
        ]
      },
      {
        "page": 20,
        "blocks": [
          "Ruffini, P.-B. (28.6.2020b). France’s science diplomacy. Science & Diplomacy. https://www.sciencediplomacy.org/article/2020/frances-science-diplomacy",
          "Ruffini, P. (2020c). Collaboration and competition: the twofold logic of science diplomacy. The Hague Journal of Diplomacy, 15(3), 371–382. https://doi.org/10.1163/1871191X-BJA10028",
          "Rungius, C., Flink, T. & Riedel, S. (2022). SESAME - A synchrotron light source in the Middle East: An international research infrastructure in the making. Open Research Europe, 4(1), 51. https://doi.org/10.12688/open-reseurope.13362.2",
          "Rungius, C. & Flink, T. (2020). Romancing science for global solutions: on narratives and interpretative schemas of science diplomacy. Humanities and Social Science Communications, 7, 102. https://doi.org/10.1057/s41599-020-00585-w",
          "Sauli, M. & Juntunen, K. (13.2.2025). Akateemikko uudesta lakihankkeesta: Olisi erikoista, että demokratiassa lakiin kirjattaisiin, mitä tutkimuksen pitää olla. Yle. https://yle.fi/a/74-",
          "Scharpf, F. (1999). Governing in Europe: effective and democratic? Oxford Academic. https://doi.org/10.1093/acprof:oso/9780198295457.001.0001",
          "Stone, D. (2020). Making global policy. Cambridge University Press.",
          "Turekian, V. (2018). The evolution of science diplomacy. Global Policy, 9(3), 5–7. https://doi.org/10.1111/1758-5899.12622 Opetus- ja kulttuuriministeriö. (ei pvm.). Team Finland Knowledge -verkosto. Haettu 23.3.2025 osoitteesta https://okm.fi/-/team-finlandknowlegde-verkosto",
          "Uusikylä, P., Ketola, J., Oreschnikoff, A. & Jaakkola, S. (2021a). Kansainvälisen tiedediplomatian tila (policy brief 2021:11). Valtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-383-174-2",
          "Uusikylä, P. Ketola, J. Oreschnikoff, A., Aula, P., Kuosmanen, J., Jaakkola, S. & Jalonen, H. (2021b). Kohti mahdollistavaa tiedediplomatiaa. Suomalaisen tiedediplomatian tila ja kehittämistarpeet (valtioneuvoston selvitys- ja tutkimustoiminnan julkaisusarja 2021:41). Valtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-383-174-2",
          "Zhang, J. (2015). Interpersonal prominence and international presence: implicitness constructed and translated in diplomatic discourse. Cambridge Scholars Publishing."
        ]
      }
    ]
  }
];
