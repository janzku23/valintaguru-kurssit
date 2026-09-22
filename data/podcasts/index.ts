import type { CourseId } from "@/data/courses";
import type { CoursePodcastContent } from "./types";

export * from "./types";

/*
 * PODCAST-SISÄLLÖT
 *
 * Lisää jokaisen kurssin Canva-linkki ja Firebase Storage
 * -äänitiedoston download URL tähän.
 *
 * Yhdessä jaksossa voi olla rajaton määrä äänitteitä:
 * audioTracks: [
 *   { id: "osa-1", title: "Osa 1", url: "FIREBASE_URL_1" },
 *   { id: "osa-2", title: "Osa 2", url: "FIREBASE_URL_2" },
 * ]
 *
 * Firebase-esimerkki:
 * audioUrl:
 *   "https://firebasestorage.googleapis.com/v0/b/.../o/...mp3?alt=media&token=..."
 *
 * Canva:
 * canvaUrl: "https://www.canva.com/design/XXXX/YYYY/view"
 */

const oikisTehoPodcastBase = {
    enabled: true,
    title: "Oikis Podcast",
    description:
      "Kuuntele keskeiset asiat podcastina, seuraa samalla Canva-esitystä ja kertaa lopuksi tärkeimmät asiat tiiviistä teoriaosuudesta.",
    episodes: [
      {
        id: "oikis-podcast-1",
        title: "Podcast 1",
        subtitle: "Oikeudellisen ajattelun perusteet",
        description:
          "Ensimmäinen Oikis-podcast kokoaa keskeiset lähtökohdat oikeudelliseen ajatteluun ja opiskeluun.",
        canvaUrl:
          "https://www.canva.com/design/DAG9RpTThY8/mzhLBDzVIYiLGGbOGo9wxg/view?embed",
        audioTracks: [
          // Lisää tähän niin monta Firebase-äänitettä kuin haluat.
          // Esimerkki:
          // {
          //   id: "oikis-podcast-1-osa-1",
          //   title: "Osa 1",
          //   url: "https://firebasestorage.googleapis.com/...",
          //   duration: "12 min",
          // },
          // {
          //   id: "oikis-podcast-1-osa-2",
          //   title: "Osa 2",
          //   url: "https://firebasestorage.googleapis.com/...",
          // },
             {
             id: "oikis-podcast-1-osa-1",
             title: "Osa 1",
             url: "https://firebasestorage.googleapis.com/v0/b/gonalaakis.firebasestorage.app/o/Lain%20rakenne%2C%20oikeustoimi%20ja%20kelpoisuus.m4a?alt=media&token=8d83cc45-dc10-4a28-926a-6e8a19fb92c9",
             duration: "12 min",
           },
           {
             id: "oikis-podcast-1-osa-2",
             title: "Osa 2",
             url: "https://firebasestorage.googleapis.com/v0/b/gonalaakis.firebasestorage.app/o/oikeuslahdeoppi.m4a?alt=media&token=babb562c-6710-4358-b5c5-8aebbc80f436",
           },
            {
             id: "oikis-podcast-1-osa-3",
             title: "Osa 3",
             url: "https://firebasestorage.googleapis.com/v0/b/gonalaakis.firebasestorage.app/o/Oikeusvaltioperiaate%20ja%20tuomiovalta.m4a?alt=media&token=d204488f-fcca-4766-82db-93a8e42e15ef",
           },
        ],
        theoryTitle: "Oikeustieteen perusteet",
        theory: `Oikeustieteen keskeiset perusteet ja käsitteet

Oikeustiede on tieteenala, joka tutkii oikeusjärjestystä, sen rakennetta sekä oikeudellisten normien merkitystä yhteiskunnassa. Oikeusjärjestys muodostuu laeista, asetuksista, oikeuskäytännöstä sekä erilaisista oikeudellisista periaatteista, jotka yhdessä ohjaavat yhteiskunnan toimintaa. Oikeudellinen sääntely määrittelee ihmisten, yhteisöjen ja viranomaisten oikeudet sekä velvollisuudet. Samalla se luo puitteet yhteiskunnan toiminnalle ja turvaa yksilöiden oikeusturvaa.

Oikeusjärjestelmän keskeinen tehtävä on ylläpitää yhteiskunnallista järjestystä ja ratkaista ihmisten välisiä ristiriitoja oikeudenmukaisella tavalla. Ilman oikeudellista sääntelyä yhteiskunnassa ei olisi selkeitä sääntöjä siitä, miten eri tilanteissa tulisi toimia tai miten riitatilanteet ratkaistaan. Oikeusjärjestelmä luo ennakoitavuutta ja vakautta, sillä ihmiset voivat suunnitella toimintaansa tietäen, millaisia oikeuksia ja velvollisuuksia heillä on.

Oikeusjärjestelmä ei kuitenkaan ole pelkkä kokoelma sääntöjä. Sen toimintaan liittyy myös tulkintaa, oikeudellista argumentaatiota sekä oikeuden periaatteita. Lakien soveltaminen ei aina ole yksiselitteistä, sillä oikeudelliset säännökset voivat olla yleisluonteisia tai tulkinnanvaraisia. Tämän vuoksi oikeudellisessa päätöksenteossa joudutaan usein punnitsemaan erilaisia tulkintavaihtoehtoja sekä tarkastelemaan lain tarkoitusta ja sen suhdetta muihin oikeusnormeihin. Näiden ilmiöiden ymmärtäminen on keskeistä oikeustieteellisen ajattelun kannalta.

Lain rakenne: pykälät, momentit ja artiklat

Lainsäädäntö on rakennettu systemaattisesti ja loogisesti. Suomessa laki koostuu luvuista, pykälistä ja momenteista. Luku toimii suurempana kokonaisuutena, joka jakaa lain eri aihepiireihin. Esimerkiksi laissa voidaan käsitellä eri luvuissa erilaisia oikeudellisia tilanteita tai rikostyyppejä. Tällainen rakenne helpottaa lain lukemista ja soveltamista, sillä säännökset on järjestetty selkeisiin kokonaisuuksiin.

Pykälä on lain keskeinen rakenneyksikkö, jossa varsinainen oikeussääntö yleensä ilmaistaan. Jokainen pykälä sisältää yhden tai useamman oikeudellisen säännön. Pykälät on numeroitu, jotta niihin voidaan viitata tarkasti esimerkiksi tuomioistuimissa, viranomaispäätöksissä ja oikeudellisessa kirjallisuudessa.

Pykälä voidaan jakaa edelleen momentteihin, jotka täsmentävät pykälän sisältöä ja jäsentävät sääntelyä. Momentit ovat ikään kuin pykälän alakohtia, joiden avulla säännökset voidaan esittää selkeämmin ja yksityiskohtaisemmin. Tämä rakenne auttaa hahmottamaan, mitkä osat pykälästä koskevat tiettyä tilannetta.

Kansainvälisessä oikeudessa käytetään usein termiä artikla. Artikla vastaa käytännössä samaa asiaa kuin pykälä. Artikloja esiintyy esimerkiksi kansainvälisissä sopimuksissa sekä Euroopan unionin säädöksissä. Terminologia vaihtelee oikeusjärjestelmästä riippuen, mutta rakenteellinen tarkoitus on sama: jakaa oikeudellinen sääntely selkeisiin ja helposti viitattaviin osiin.

Lain rakenteen ymmärtäminen on tärkeää, koska oikeudellisessa työssä on usein tarpeen viitata tiettyyn pykälään tai momenttiin tarkasti. Selkeä rakenne auttaa myös tulkitsemaan lakia ja ymmärtämään, miten yksittäiset säännökset liittyvät toisiinsa.

Oikeudelliset peruskäsitteet

Oikeudellisessa ajattelussa käytetään useita keskeisiä käsitteitä, joiden avulla voidaan ymmärtää oikeussuhteita ja oikeudellisia toimijoita. Nämä käsitteet muodostavat oikeudellisen analyysin perustan ja auttavat hahmottamaan, miten oikeusjärjestelmä toimii käytännössä.

Oikeussubjekti tarkoittaa tahoa, jolla voi olla oikeuksia ja velvollisuuksia. Oikeussubjekteja ovat luonnolliset henkilöt eli ihmiset sekä oikeushenkilöt, kuten osakeyhtiöt, yhdistykset ja säätiöt. Oikeushenkilöt ovat oikeudellisia konstrukteja, joiden avulla yhteisöt voivat toimia oikeudellisina toimijoina. Esimerkiksi yritys voi omistaa omaisuutta, tehdä sopimuksia, palkata työntekijöitä ja olla osapuolena oikeudenkäynnissä. Oikeushenkilöiden olemassaolo mahdollistaa monimutkaisten taloudellisten ja yhteiskunnallisten toimintojen järjestämisen.

Oikeuskelpoisuus tarkoittaa oikeussubjektin kykyä olla oikeuksien ja velvollisuuksien kantaja. Kaikilla ihmisillä on oikeuskelpoisuus syntymästä kuolemaan asti. Tämä tarkoittaa, että jokaisella ihmisellä voi olla esimerkiksi omaisuutta, sopimuksia ja muita oikeuksia. Oikeuskelpoisuus on oikeusjärjestelmän peruslähtökohta, sillä ilman sitä yksilöllä ei voisi olla oikeudellista asemaa yhteiskunnassa.

Oikeustoimikelpoisuus puolestaan tarkoittaa henkilön kykyä tehdä itseään sitovia oikeustoimia. Oikeustoimikelpoisuus liittyy henkilön mahdollisuuteen määrätä omista oikeuksistaan ja velvollisuuksistaan. Esimerkiksi sopimuksen tekeminen edellyttää oikeustoimikelpoisuutta.

Oikeustoimikelpoisuus ei kuitenkaan ole kaikilla henkilöillä samanlainen. Alaikäiset henkilöt ovat vajaavaltaisia, mikä tarkoittaa, että heidän oikeustoimikelpoisuuttaan on rajoitettu. He eivät voi esimerkiksi tehdä kaikkia sopimuksia ilman huoltajan suostumusta. Lisäksi tuomioistuin voi tietyissä tilanteissa määrätä henkilön vajaavaltaiseksi esimerkiksi sairauden tai muun vastaavan syyn vuoksi. Tällöin henkilön oikeudellista toimintakykyä voidaan rajoittaa hänen oman etunsa suojaamiseksi.

Oikeustoimi on tahdonilmaisu, jolla perustetaan, muutetaan tai päätetään oikeussuhde. Oikeustoimet ovat keskeinen osa yksityisoikeudellista toimintaa. Tyypillisiä oikeustoimia ovat esimerkiksi sopimukset, lahjoitukset ja testamentit. Oikeustoimien avulla ihmiset ja yhteisöt voivat järjestää keskinäisiä suhteitaan oikeudellisesti sitovalla tavalla.

Oikeusteoriat

Oikeustieteessä on kehitetty erilaisia teorioita, joiden avulla pyritään selittämään oikeuden luonnetta ja oikeudellisten normien pätevyyttä. Oikeusteoriat auttavat ymmärtämään, mistä oikeus saa auktoriteettinsa ja miten oikeudelliset normit muodostuvat.

Normatiiviset teoriat tarkastelevat oikeutta ennen kaikkea normijärjestelmänä. Näissä teorioissa oikeus nähdään sääntöjen kokonaisuutena, joka muodostaa järjestäytyneen ja hierarkkisen rakenteen. Tunnettu esimerkki tällaisesta teoriasta on Hans Kelsenin kehittämä Stufenbau-teoria. Sen mukaan oikeusjärjestelmä muodostaa hierarkkisen kokonaisuuden, jossa alemmat normit saavat pätevyytensä ylemmiltä normeilta. Esimerkiksi asetuksen pätevyys perustuu lakiin, ja lain pätevyys puolestaan perustuslakiin. Tällä tavoin koko oikeusjärjestelmä muodostaa loogisen ja järjestelmällisen kokonaisuuden.

Myös H. L. A. Hart kehitti merkittävän oikeusteorian, jossa keskeinen käsite on tunnistamissääntö. Tunnistamissääntö määrittää, mitkä normit kuuluvat oikeusjärjestelmään ja millä perusteella niiden pätevyys voidaan tunnistaa. Tämän säännön avulla voidaan erottaa oikeudelliset normit muista yhteiskunnallisista säännöistä, kuten moraalisista normeista tai sosiaalisista käytännöistä. Hartin teoria korostaa, että oikeusjärjestelmä ei koostu pelkästään käskyistä ja kielloista, vaan siihen kuuluu myös sääntöjä, jotka määrittävät, miten oikeudellisia normeja luodaan ja sovelletaan.

Kriittisnormatiiviset teoriat puolestaan korostavat oikeuden moraalista ulottuvuutta. Näiden teorioiden mukaan oikeuden pätevyys ei voi perustua pelkästään muodolliseen sääntelyyn, vaan oikeudellisten normien tulee myös olla oikeudenmukaisia ja hyväksyttäviä yhteiskunnassa.

Suomalaisessa oikeustieteessä Kaarlo Tuori on kehittänyt kriittisen oikeuspositivismin teorian. Sen mukaan oikeudellisten normien pätevyys ei perustu pelkästään niiden muodolliseen asemaan oikeusjärjestelmässä, vaan myös niiden hyväksyttävyyteen ja perusteltavuuteen yhteiskunnassa. Tämä näkökulma korostaa oikeuden yhteyttä yhteiskunnallisiin arvoihin ja oikeudenmukaisuuden käsityksiin.

Realistisissa oikeusteorioissa huomio kohdistuu oikeuden käytännön toimintaan. Näissä teorioissa tarkastellaan esimerkiksi sitä, miten tuomioistuimet tosiasiallisesti ratkaisevat oikeudellisia kysymyksiä ja millaisia vaikutuksia oikeudella on yhteiskunnassa. Realistinen näkökulma korostaa, että oikeus ei ole pelkästään abstrakti normijärjestelmä, vaan myös käytännön toimintaa, joka vaikuttaa ihmisten arkeen.

Oikeusvaltioperiaate

Oikeusvaltioperiaate on yksi keskeisimmistä oikeusjärjestelmän periaatteista. Sen mukaan julkisen vallan käytön tulee aina perustua lakiin. Tämä tarkoittaa sitä, että viranomaiset voivat käyttää valtaa vain silloin, kun siihen on selkeä oikeudellinen peruste. Oikeusvaltioperiaate turvaa yksilön oikeudet ja suojaa kansalaisia mielivaltaiselta vallankäytöltä.

Oikeusvaltioperiaate on kirjattu Suomen perustuslakiin. Sen mukaan kaikessa julkisessa toiminnassa on noudatettava tarkoin lakia. Viranomaisten toiminnan tulee siis perustua eduskunnan säätämiin lakeihin, eikä viranomainen voi toimia pelkästään oman harkintansa perusteella.

Oikeusvaltioperiaatteen keskeiset lähtökohdat

Oikeusvaltioperiaate sisältää useita tärkeitä periaatteita, jotka ohjaavat julkisen vallan käyttöä.

Julkisen vallan käytön tulee perustua lakiin

Viranomaisilla tulee olla toimivaltaperuste laissa

Kaikessa julkisessa toiminnassa on noudatettava lakia tarkasti

Yksilön oikeudet ja oikeusturva on turvattava

Tuomioistuinten tulee olla riippumattomia

Näiden periaatteiden avulla pyritään varmistamaan, että vallankäyttö on ennakoitavaa, läpinäkyvää ja oikeudenmukaista.

Oikeusvaltioperiaatteen merkitys yksilölle

Oikeusvaltioperiaate on tärkeä erityisesti yksilön oikeuksien näkökulmasta. Sen avulla varmistetaan, että yksilöitä kohdellaan yhdenvertaisesti ja että heidän oikeuksiaan kunnioitetaan. Viranomaiset eivät voi toimia mielivaltaisesti, vaan heidän on aina pystyttävä perustelemaan toimintansa lailla.

Lisäksi oikeusvaltioperiaate takaa yksilölle oikeuden saada asiansa käsitellyksi riippumattomassa tuomioistuimessa. Jos yksilö kokee, että viranomainen on toiminut lainvastaisesti, hänellä on mahdollisuus hakea muutosta päätökseen tuomioistuimessa.

Oikeusvaltioperiaate ja demokratia

Oikeusvaltioperiaate liittyy läheisesti demokratiaan. Suomessa lait säätää eduskunta, jonka jäsenet valitaan kansanvaaleilla. Tämän vuoksi kansalaisilla on välillinen mahdollisuus vaikuttaa heitä koskeviin lakeihin.

Demokraattinen päätöksenteko ja oikeusvaltioperiaate yhdessä varmistavat, että valtiollinen valta perustuu kansan tahtoon ja että sitä käytetään oikeudellisesti hyväksyttävällä tavalla.

Vallan kolmijako - oppi

Vallan kolmijako-oppi on poliittisen vallan järjestämistä koskeva periaate. Sen mukaan valtiollinen valta jaetaan kolmeen eri osa-alueeseen: lainsäädäntövaltaan, hallitusvaltaan ja tuomiovaltaan. Vallan jakamisen tarkoituksena on estää vallan keskittyminen yhdelle toimijalle ja vähentää vallan väärinkäytön riskiä.

Vallan kolmijako-oppi on yksi modernin oikeusvaltion keskeisistä periaatteista. Sen taustalla on ajatus siitä, että vallan jakaminen eri toimielinten kesken lisää vallankäytön valvontaa ja tasapainoa.

Lainsäädäntövalta

Lainsäädäntövalta kuuluu Suomessa eduskunnalle. Eduskunta säätää lait, jotka ohjaavat yhteiskunnan toimintaa. Lainsäädäntövaltaan kuuluu myös valtion taloudesta päättäminen sekä hallituksen toiminnan valvonta.

Eduskunta koostuu kansanedustajista, jotka valitaan vaaleilla. Tämän vuoksi lainsäädäntövalta perustuu kansan tahtoon ja demokraattiseen päätöksentekoon.

Hallitusvalta

Hallitusvaltaa käyttävät tasavallan presidentti ja valtioneuvosto. Valtioneuvosto koostuu pääministeristä ja muista ministereistä. Hallituksen tehtävänä on johtaa valtion hallintoa ja huolehtia siitä, että lait pannaan täytäntöön.

Valtioneuvoston tulee nauttia eduskunnan luottamusta. Tämä tarkoittaa sitä, että eduskunta voi tarvittaessa erottaa hallituksen, jos se ei enää luota sen toimintaan.

Tuomiovalta

Tuomiovaltaa käyttävät riippumattomat tuomioistuimet. Tuomioistuimet ratkaisevat riita- ja rikosasioita sekä valvovat, että lakia sovelletaan oikein.

Suomen tuomioistuinjärjestelmässä ylimpiä tuomioistuimia ovat:

korkein oikeus

korkein hallinto-oikeus

Tuomioistuinten riippumattomuus on tärkeä osa oikeusvaltiota. Riippumattomuus tarkoittaa sitä, että tuomioistuimet tekevät ratkaisunsa ilman poliittista tai muuta ulkopuolista painostusta.

Vallan kolmijaon merkitys

Vallan kolmijako estää vallan keskittymisen ja lisää vallankäytön valvontaa. Kun eri toimielimet käyttävät eri vallan muotoja, ne voivat myös valvoa toistensa toimintaa.

Tämän järjestelmän avulla pyritään varmistamaan, että valtaa käytetään vastuullisesti ja oikeudenmukaisesti. Vallan kolmijako onkin keskeinen osa demokraattista oikeusvaltiota ja se tukee kansalaisten oikeuksien toteutumista.

Oikeuslähdeoppi

Oikeuslähdeoppi tarkoittaa oppia siitä, millaisia lähteitä voidaan käyttää oikeudellisen ratkaisun perustana. Oikeudellisessa päätöksenteossa tuomioistuimet ja muut oikeudelliset toimijat eivät voi perustaa ratkaisujaan mihin tahansa aineistoon, vaan niiden tulee tukeutua oikeusjärjestyksessä hyväksyttyihin oikeuslähteisiin. Oikeuslähdeoppi määrittelee myös oikeuslähteiden keskinäisen painoarvon. Tämä tarkoittaa sitä, että jotkin oikeuslähteet ovat vahvemmin velvoittavia kuin toiset.

Vahvasti velvoittavat oikeuslähteet ovat sellaisia lähteitä, joita tuomioistuimen on pakko noudattaa. Näihin kuuluvat esimerkiksi perustuslaki, tavalliset lait, asetukset sekä Euroopan unionin oikeus. Myös ratifioidut kansainväliset sopimukset voivat kuulua tähän ryhmään. Kirjoitettu laki on oikeusjärjestyksen tärkein oikeuslähde, sillä se sisältää yhteiskunnan keskeiset oikeudelliset säännöt.

Heikosti velvoittavat oikeuslähteet eivät ole samalla tavalla sitovia kuin kirjoitettu laki, mutta niillä on silti merkitystä oikeudellisessa ratkaisussa. Niitä käytetään erityisesti lain tulkinnan apuna. Heikosti velvoittavia oikeuslähteitä ovat esimerkiksi lakien esityöt, hallituksen esitykset sekä eduskunnan valiokuntien mietinnöt. Myös ylimpien tuomioistuinten ennakkopäätökset kuuluvat tähän ryhmään.

Sallitut oikeuslähteet ovat sellaisia lähteitä, joita voidaan käyttää oikeudellisen argumentaation tukena. Ne eivät kuitenkaan ole oikeudellisesti velvoittavia. Tällaisia lähteitä ovat esimerkiksi oikeuskirjallisuus, viranomaisten ohjeet sekä vakiintunut hallintokäytäntö. Myös niin sanottu soft law kuuluu sallittuihin oikeuslähteisiin. Soft law -säännöt eivät ole oikeudellisesti sitovia, mutta niillä voi silti olla käytännössä merkittävä vaikutus oikeudelliseen tulkintaan.

Oikeuslähteiden väliset ristiriidat

Jos eri oikeuslähteet ovat ristiriidassa keskenään, ratkaisu perustuu tiettyihin oikeudellisiin periaatteisiin. Näiden periaatteiden avulla voidaan ratkaista, mikä sääntö on ensisijainen.

Perustuslaki on oikeusjärjestelmän korkein säädös. Jos tavallinen laki on ristiriidassa perustuslain kanssa, perustuslaki syrjäyttää tavallisen lain. Tätä kutsutaan normihierarkiaksi.

Lex posterior -periaatteen mukaan myöhemmin säädetty laki syrjäyttää aikaisemmin säädetyn lain, jos niiden välillä on ristiriita. Tämä periaate perustuu ajatukseen siitä, että uudempi sääntely korvaa vanhemman.

Lex specialis -periaatteen mukaan erityissäännös syrjäyttää yleissäännöksen. Tämä tarkoittaa, että tarkemmin tiettyä tilannetta koskeva sääntö menee yleisemmän säännön edelle.

Euroopan unionin oikeudella on lisäksi etusija kansalliseen oikeuteen nähden. Jos EU-oikeus ja kansallinen laki ovat ristiriidassa, EU-oikeutta sovelletaan ensisijaisesti.

Oikeudelliset tulkintateoriat

Lakia ei voida aina soveltaa suoraan, vaan sitä on usein tulkittava. Oikeudellisessa tulkinnassa käytetään erilaisia argumentaatiotapoja, joiden avulla pyritään selvittämään lain merkitys.

Semanttinen eli kielellinen tulkinta perustuu lain sanamuotoon. Tulkinnassa tarkastellaan, mitä laki kirjaimellisesti tarkoittaa.

Historiallisessa tulkinnassa pyritään selvittämään lainsäätäjän tarkoitus. Tämä voidaan tehdä tarkastelemalla esimerkiksi lakien esitöitä.

Systemaattisessa tulkinnassa tarkastellaan säädöksen paikkaa oikeusjärjestelmässä. Lain tulkinnassa huomioidaan, miten eri säännökset liittyvät toisiinsa.

Teleologinen tulkinta keskittyy säädöksen tavoitteeseen ja tarkoitukseen. Tulkinnassa pyritään selvittämään, mikä on lain päämäärä ja mitä sillä on pyritty saavuttamaan.

Lisäksi oikeudellisessa tulkinnassa voidaan käyttää vakiintunutta tulkintaa. Tämä tarkoittaa sitä, että samankaltaiset tapaukset pyritään ratkaisemaan samalla tavalla kuin aikaisemmissa ratkaisuissa.

Suomen tuomioistuinjärjestelmä

Suomen tuomioistuinjärjestelmä on kolmiasteinen. Tuomioistuimet ratkaisevat oikeudellisia riitoja sekä rikosasioita ja varmistavat, että lakia sovelletaan oikein.

Yleiset tuomioistuimet käsittelevät riita- ja rikosasioita. Näihin kuuluvat käräjäoikeudet, hovioikeudet sekä korkein oikeus. Käräjäoikeus toimii ensimmäisenä oikeusasteena, hovioikeus toisena oikeusasteena ja korkein oikeus ylimpänä oikeusasteena.

Hallintotuomioistuimet käsittelevät viranomaisten päätöksiä koskevia asioita. Näihin kuuluvat hallinto-oikeudet sekä korkein hallinto-oikeus.

Suomessa toimii myös erityistuomioistuimia, jotka käsittelevät tiettyjä erityisaloja koskevia asioita. Tällaisia tuomioistuimia ovat esimerkiksi markkinaoikeus, työtuomioistuin, vakuutusoikeus sekä valtakunnanoikeus.

Eurooppalainen tuomiovalta

Suomen oikeusjärjestelmä toimii osana laajempaa eurooppalaista oikeusjärjestelmää. Tämä tarkoittaa sitä, että Suomen tuomioistuimet eivät toimi täysin erillään muista eurooppalaisista oikeusjärjestelmistä, vaan ne ovat osa järjestelmää, jossa kansallinen oikeus, Euroopan unionin oikeus sekä ihmisoikeuksia koskevat kansainväliset sopimukset vaikuttavat yhdessä. Eurooppalainen tuomiovalta muodostuu erityisesti Euroopan unionin tuomioistuimesta sekä Euroopan ihmisoikeustuomioistuimesta, jotka valvovat eurooppalaisten oikeussääntöjen tulkintaa ja soveltamista.

Euroopan unionin tuomioistuin on keskeinen EU:n toimielin, jonka tehtävänä on huolehtia siitä, että Euroopan unionin oikeutta tulkitaan ja sovelletaan yhdenmukaisesti kaikissa jäsenvaltioissa. Koska EU-oikeus on osa jäsenvaltioiden oikeusjärjestystä, myös Suomen tuomioistuimilla on velvollisuus ottaa EU-oikeus huomioon ratkaisuissaan. Euroopan unionin tuomioistuin ratkaisee esimerkiksi tilanteita, joissa jäsenvaltioiden välillä on erimielisyyksiä EU-oikeuden tulkinnasta tai joissa epäillään, että jokin jäsenvaltio ei ole noudattanut EU:n sääntöjä.

Kansallisilla tuomioistuimilla on mahdollisuus ja joissakin tilanteissa myös velvollisuus pyytää Euroopan unionin tuomioistuimelta ennakkoratkaisua. Ennakkoratkaisumenettely tarkoittaa sitä, että kansallinen tuomioistuin pyytää EU-tuomioistuimelta tulkintaa EU-oikeuden sisällöstä ennen kuin se ratkaisee oman käsiteltävänsä asian. Tämän tarkoituksena on varmistaa, että EU-oikeutta tulkitaan samalla tavalla kaikissa jäsenvaltioissa. Kun EU-tuomioistuin antaa ennakkoratkaisun, kansallinen tuomioistuin käyttää sitä ohjeena ratkaistessaan asian.

Eurooppalaiseen tuomiovaltaan kuuluu myös Euroopan ihmisoikeustuomioistuin, joka toimii Euroopan neuvoston alaisuudessa. Sen tehtävänä on valvoa Euroopan ihmisoikeussopimuksen noudattamista. Ihmisoikeustuomioistuin käsittelee valituksia, joissa väitetään, että jokin sopimusvaltio on loukannut ihmisoikeussopimuksessa turvattuja oikeuksia, kuten oikeutta oikeudenmukaiseen oikeudenkäyntiin, sananvapautta tai yksityiselämän suojaa.

Yksityinen henkilö voi tehdä valituksen Euroopan ihmisoikeustuomioistuimeen, jos hän katsoo, että hänen ihmisoikeuksiaan on loukattu. Valituksen tekeminen edellyttää kuitenkin, että kaikki kansalliset oikeussuojakeinot on ensin käytetty. Tämä tarkoittaa, että asia on käsitelty ensin kansallisissa tuomioistuimissa ennen kuin se voidaan viedä ihmisoikeustuomioistuimen käsiteltäväksi.

Euroopan ihmisoikeustuomioistuin ei voi kumota kansallisten tuomioistuinten päätöksiä, mutta se voi todeta, että valtio on rikkonut ihmisoikeussopimusta. Tällaisessa tilanteessa tuomioistuin voi määrätä valtion maksamaan valittajalle hyvitystä. Lisäksi valtion on yleensä muutettava käytäntöjään tai lainsäädäntöään, jotta vastaava ihmisoikeusloukkaus ei toistuisi tulevaisuudessa.

Eurooppalainen tuomiovalta on tärkeä osa eurooppalaista oikeusjärjestelmää, sillä se edistää oikeuden yhdenmukaista soveltamista sekä ihmisoikeuksien toteutumista eri maissa. Sen avulla varmistetaan, että sekä EU-oikeus että ihmisoikeussopimus toteutuvat käytännössä kaikissa jäsenvaltioissa.

Kansainvälinen tuomiovalta

Kansainvälisellä tasolla toimii useita tuomioistuimia, jotka ratkaisevat valtioiden välisiä kiistoja sekä vakavia kansainvälisiä rikoksia.

Kansainvälinen tuomioistuin ratkaisee valtioiden välisiä oikeudellisia riitoja kansainvälisen oikeuden perusteella.

Kansainvälinen rikostuomioistuin käsittelee vakavia kansainvälisiä rikoksia, kuten sotarikoksia, rikoksia ihmisyyttä vastaan sekä joukkotuhontaa.

Kansainvälinen oikeus ja ihmisoikeudet

Kansainvälinen oikeus on oikeudenala, joka säätelee valtioiden ja kansainvälisten toimijoiden välisiä suhteita. Sen tavoitteena on luoda sääntöjä ja periaatteita, joiden avulla voidaan ylläpitää kansainvälistä järjestystä, edistää rauhaa sekä turvata valtioiden ja yksilöiden oikeudet. Kansainvälinen oikeus poikkeaa kansallisesta oikeudesta siinä, että se ei koske ainoastaan yhden valtion sisäistä toimintaa, vaan useiden valtioiden välisiä suhteita ja yhteistyötä.

Kansainvälisen oikeuden keskeisiä lähteitä ovat kansainväliset sopimukset, kansainväliset tavat sekä oikeuden yleiset periaatteet. Kansainväliset sopimukset ovat valtioiden välisiä sitovia sopimuksia, joissa sovitaan esimerkiksi kaupasta, turvallisuudesta, ympäristönsuojelusta tai ihmisoikeuksien turvaamisesta. Kun valtio ratifioi eli hyväksyy kansainvälisen sopimuksen, se sitoutuu noudattamaan sen määräyksiä. Kansainväliset tavat puolestaan syntyvät valtioiden vakiintuneesta käytännöstä, jota pidetään oikeudellisesti velvoittavana.

Kansainvälinen oikeus kattaa monia eri osa-alueita. Näitä ovat esimerkiksi kansainvälinen kauppaoikeus, merioikeus, humanitaarinen oikeus sekä kansainvälinen rikosoikeus. Humanitaarinen oikeus koskee erityisesti sodankäyntiä ja aseellisia konflikteja. Sen tavoitteena on suojella siviilejä sekä rajoittaa sodankäynnin keinoja ja menetelmiä. Kansainvälinen rikosoikeus puolestaan käsittelee vakavia kansainvälisiä rikoksia, kuten sotarikoksia, rikoksia ihmisyyttä vastaan ja joukkotuhontaa.

Yksi kansainvälisen oikeuden keskeisimmistä osa-alueista on ihmisoikeuksien suojaaminen. Ihmisoikeudet ovat kaikille ihmisille kuuluvia perustavanlaatuisia oikeuksia, jotka eivät riipu henkilön kansallisuudesta, uskonnosta, sukupuolesta tai muista henkilökohtaisista ominaisuuksista. Ihmisoikeuksien ajatellaan kuuluvan jokaiselle ihmiselle pelkästään siksi, että hän on ihminen.

Moderni ihmisoikeusjärjestelmä kehittyi erityisesti toisen maailmansodan jälkeen. Sodan aikana tapahtuneet vakavat ihmisoikeusloukkaukset johtivat siihen, että kansainvälisessä yhteisössä alettiin korostaa ihmisoikeuksien universaalia merkitystä. Vuonna 1948 Yhdistyneet kansakunnat hyväksyi ihmisoikeuksien yleismaailmallisen julistuksen, joka loi perustan myöhemmille kansainvälisille ihmisoikeussopimuksille.

YK:n ihmisoikeusjärjestelmä sisältää useita keskeisiä sopimuksia. Näitä ovat esimerkiksi kansalaisoikeuksia ja poliittisia oikeuksia koskeva yleissopimus sekä taloudellisia, sosiaalisia ja sivistyksellisiä oikeuksia koskeva yleissopimus. Näissä sopimuksissa turvataan muun muassa oikeus elämään, sananvapaus, uskonnonvapaus, oikeus koulutukseen sekä oikeus työhön.

Euroopassa ihmisoikeuksien suojaamista edistää erityisesti Euroopan ihmisoikeussopimus. Tämä sopimus velvoittaa jäsenvaltioita turvaamaan keskeiset ihmisoikeudet kaikille niiden alueella oleville henkilöille. Sopimuksen noudattamista valvoo Euroopan ihmisoikeustuomioistuin, joka käsittelee yksityisten henkilöiden tekemiä valituksia ihmisoikeusloukkauksista.

Kansainvälinen oikeus ja ihmisoikeudet vaikuttavat myös Suomen oikeusjärjestelmään. Suomi on sitoutunut useisiin kansainvälisiin ihmisoikeussopimuksiin, ja nämä velvoitteet vaikuttavat lainsäädäntöön sekä viranomaisten toimintaan. Tuomioistuimet voivat ottaa kansainväliset sopimukset huomioon ratkaistessaan oikeudellisia kysymyksiä.

Kansainvälisen oikeuden merkitys on kasvanut globalisaation myötä. Valtiot ovat yhä tiiviimmin sidoksissa toisiinsa taloudellisesti, poliittisesti ja oikeudellisesti. Kansainväliset sopimukset ja järjestöt mahdollistavat yhteistyön esimerkiksi ympäristönsuojelussa, turvallisuudessa ja ihmisoikeuksien turvaamisessa.

Ihmisoikeuksien suojelu on keskeinen osa kansainvälistä oikeusjärjestelmää. Sen tavoitteena on varmistaa, että jokaisen ihmisen ihmisarvoa kunnioitetaan ja että perusoikeudet toteutuvat kaikkialla maailmassa. Vaikka ihmisoikeuksien toteutumisessa on edelleen monia haasteita, kansainvälinen oikeus tarjoaa tärkeän välineen niiden edistämiseen ja suojelemiseen.

Suomen täysivaltaisuus

Suomen perustuslain mukaan Suomi on täysivaltainen tasavalta. Täysivaltaisuus tarkoittaa valtion oikeutta käyttää korkeinta valtaa omalla alueellaan sekä päättää itsenäisesti suhteistaan muihin valtioihin.

Täysivaltaisuus voidaan jakaa sisäiseen ja ulkoiseen suvereenisuuteen. Sisäinen suvereenisuus tarkoittaa valtion ylintä valtaa omalla alueellaan. Ulkoinen suvereenisuus tarkoittaa valtion oikeutta päättää itsenäisesti suhteistaan muihin valtioihin.

Nykyisessä kansainvälisessä järjestelmässä täysivaltaisuus ei kuitenkaan ole täysin rajoittamatonta. Kansainväliset sopimukset sekä Euroopan unionin jäsenyys rajoittavat osittain valtion toimivaltaa. Suomi käyttääkin osaa suvereniteetistaan yhdessä muiden EU-jäsenvaltioiden kanssa eurooppalaisen yhteistyön hyväksi.`,
      },
    ],
  
} satisfies Omit<CoursePodcastContent, "courseId">;

const podcastContent: Partial<Record<CourseId, CoursePodcastContent>> = {
  "oikis-teho": {
    ...oikisTehoPodcastBase,
    courseId: "oikis-teho",
    title: "Oikis Teho Podcast",
  },

  "oikis-teho-etaope": {
    ...oikisTehoPodcastBase,
    courseId: "oikis-teho-etaope",
    title: "Oikis Teho + Etäopetus Podcast",
  },

  "valintakoe-g": {
    courseId: "valintakoe-g",
    enabled: false,
    title: "Valintakoe G Podcast",
    description:
      "Kertaa Valintakoe G:n keskeisiä taitoja podcastin, Canva-esityksen ja tiiviin teoriaosuuden avulla.",
    episodes: [
      {
        id: "valintakoe-g-podcast-1",
        title: "Podcast 1",
        subtitle: "Päättely ja aineiston tulkinta",
        description:
          "Johdanto Valintakoe G:n päättelyyn, aineistojen lukemiseen ja olennaisen tiedon tunnistamiseen.",
        canvaUrl: "",
        audioTracks: [],
        theoryTitle: "Jakson ydinkohdat",
        theory: `Valintakoe G:ssä olennaista on lukea annettu tieto täsmällisesti ja erottaa aineistosta se, mitä voidaan varmasti päätellä siitä, mitä ei voida päätellä.

Päättelytehtävissä kannattaa välttää oletuksia, joita aineisto ei tue. Numeerisissa ja taulukollisissa tehtävissä huomio kannattaa kiinnittää yksiköihin, prosentteihin, suhteisiin ja siihen, mitä kysymyksessä tosiasiassa pyydetään.

Podcastia voi käyttää ennen harjoituskoetta nopeana kertauksena tai teoriaosuuden rinnalla.`,
      },
    ],
  },

  /*
   * Kun haluat podcastit myös näihin kursseihin,
   * lisää vastaava sisältö:
   *
   * "oikis-tiivis": { ... }
   * "valintakoe-g-etaope": { ... }
   * yo: { ... }
   */
};

export function hasPodcastForCourse(
  courseId: CourseId
): boolean {
  const content = podcastContent[courseId];

  return Boolean(
    content?.enabled &&
      content.episodes.length > 0
  );
}

export function getPodcastContent(
  courseId: CourseId
): CoursePodcastContent | null {
  const content = podcastContent[courseId];

  if (
    !content?.enabled ||
    content.episodes.length === 0
  ) {
    return null;
  }

  return content;
}
