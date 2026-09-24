import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 2 on muodostettu toimitetusta harjoitusmateriaalista.
 * Aikaraja: 45 min. Kaikki tehtävät ovat easy-tasoa.
 */
export const valintakoeGExercise2Base = {
  id: "harjoitus-2",
  version: 1,
  courseId: "valintakoe-g",
  title:
    "Harjoitus 2 – Julkinen keskustelu Ylestä kaipaa analyyttistä tarkkuutta ja sivistysnäkökulmaa",
  description:
    "45 minuutin aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  durationMinutes: 45,
  difficulty: "easy",
  articleId:
    "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
  articleTitle:
    "Julkinen keskustelu Ylestä kaipaa analyyttistä tarkkuutta ja sivistysnäkökulmaa",
  articleUrl:
    "https://journal.fi/mediaviestinta/article/view/162494/105986",
  questions: [
    {
      id: "g-h2-q1",
      questionType: "single",
      difficulty: "easy",
      categoryId: 4,
      prompt:
        "Mikä seuraavista on EPÄTOSI artikkelissa esitetyn julkisen palvelun median yleisösuhteen perusteella?",
      options: [
        {
          id: "a",
          text: "Julkisen palvelun yleisradiotoiminnan tulisi palvella sosiaalisia ja kulttuurisia tavoitteita.",
        },
        {
          id: "b",
          text: "Garnhamin mukaan julkisen palvelun median kehittämät sosiaaliset suhteet ovat poliittisia eivätkä taloudellisia.",
        },
        {
          id: "c",
          text: "Julkisen palvelun median tulisi kohdella yleisöjään viime kädessä kuluttajina.",
        },
        {
          id: "d",
          text: "Julkisen palvelun median suhtautuminen yleisöihin erottaa sen kaupallisista mediayrityksistä.",
        },
      ],
      correctAnswerIds: ["c"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "269",
        section:
          "Kokoavasti julkisen palvelun yleisradiotoiminnan merkitys…",
      },
      explanation:
        "C vaihtaa ratkaisevan käsitteen kansalaisista kuluttajiksi. Muut vaihtoehdot vastaavat saman kappaleen kuvausta toiminnan tavoitteista, Garnhamin näkemyksestä ja erosta kaupallisiin mediayrityksiin. Koska kysytään epätotta vaihtoehtoa, valitaan C.",
      learningPoint:
        "Tarkista tutulta näyttävän lauseen keskeinen käsite. Yhden sanan vaihtuminen voi tehdä muuten aineistoa vastaavasta väitteestä väärän. Hakuvinkki: Vaihtoehdoissa esiintyvä nimi ”Garnham” auttaa paikantamaan kohdan. Lue myös nimeä seuraavat virkkeet.",
    },
    {
      id: "g-h2-q2",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 10,
      prompt:
        "Artikkelissa selostetun Hannu Niemisen katsauksen mukaan Yle-lain vähittäiset muutokset ovat vieneet lakia markkinaehtoiselle medialle aiempaa epäedullisempaan suuntaan.",
      options: [
        { id: "tosi", text: "Tosi" },
        { id: "epatosi", text: "Epätosi" },
      ],
      correctAnswerIds: ["epatosi"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "265",
        section:
          "Erityisesti näihin kysymyksiin tarttuu…",
      },
      explanation:
        "Artikkelissa lain kuvataan muuttuneen markkinaehtoiselle medialle myönteisempään suuntaan. Tehtävä kääntää tämän ajallisen kehityksen epäedullisemmaksi. Muutoksen kohde säilyy samana, mutta kehityksen suunta vaihtuu.",
      learningPoint:
        "Vertaa mielessäsi kahta suuntaa: mihin lähteen mukaan on siirrytty ja mihin tehtävä väittää siirtyneen. Pelkkä muutoksen tunnistaminen ei riitä. Hakuvinkki: Hae nimeä ”Nieminen” ja lue sitä seuraava Yle-lakia käsittelevä virke.",
    },
    {
      id: "g-h2-q3",
      questionType: "single",
      difficulty: "easy",
      categoryId: 2,
      prompt:
        "Mikä seuraavista kuvaa artikkelin mukaan julkisen palvelun kulttuuritarjonnan mahdollisuutta synnyttää yleisössä ennalta odottamattomia elämyksiä?",
      options: [
        {
          id: "a",
          text: "Tarjonta toteuttaa kokemuksia, joiden tarpeen yleisö osaa ilmaista jo ennen niiden kohtaamista.",
        },
        {
          id: "b",
          text: "Tarjonta tuottaa kokemuksia, joiden haluttavuuden yleisö tuntee jo etukäteen aiemmasta tarjonnasta.",
        },
        {
          id: "c",
          text: "Tarjonta vastaa elämyksiin, jotka yleisö on ennen niiden kokemista tunnistanut itselleen tarpeellisiksi.",
        },
        {
          id: "d",
          text: "Tarjonta voi antaa kokemuksia, joita yleisö ei ennen niiden kohtaamista osaa tietää haluavansa.",
        },
      ],
      correctAnswerIds: ["d"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "268",
        section: "Vaikka Ylen nykyisistä haasteista…",
      },
      explanation:
        "D ilmaisee eri sanoin kokemushyödykkeiden keskeisen piirteen: yleisö ei välttämättä pysty ennakoimaan haluavansa tarjottua kokemusta. A, B ja C siirtävät halun tai tarpeen tunnistamisen kokemusta edeltävään aikaan. Ne eivät siksi vastaa tässä kohdassa kuvattua ominaisuutta.",
      learningPoint:
        "Tarkista, säilyttääkö vaihtoehto saman merkityksen eri sanoista huolimatta. Tässä ratkaisee se, mitä yleisö pystyy tietämään etukäteen. Hakuvinkki: Kysymyksen pitkän ilmauksen sijasta voit hakea sanan alkua ”kokemus”. Löydettyäsi käsitteen lue sen selitys.",
    },
    {
      id: "g-h2-q4",
      questionType: "single",
      difficulty: "easy",
      categoryId: 15,
      prompt:
        "Voiko artikkelin kansalaisluottamusta koskevan kuvauksen perusteella sanoa, että vahvasti Yleen instituutiona luottavien ulkopuolelle jäävä joukko on kansalaisten vähemmistö?",
      options: [
        { id: "kylla", text: "Kyllä" },
        { id: "ei", text: "Ei" },
      ],
      correctAnswerIds: ["kylla"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "267",
        section:
          "Nykyhallituksen Yle-vastaisen kampanjan keihäänkärkenä…",
      },
      explanation:
        "Kun vahvasti luottavat muodostavat suuren enemmistön, tämän ryhmän ulkopuolelle jäävät muodostavat vähemmistön. Tehtävä ilmaisee saman jakauman toisen ryhmän näkökulmasta. Ulkopuolelle jääviä ei kuitenkaan voi tämän perusteella nimetä kokonaisuudessaan Yleen epäluottamusta tunteviksi.",
      learningPoint:
        "Säilytä ryhmän määritelmä täsmällisenä myös tarkastellessasi sen ulkopuolelle jääviä. ”Ei luota vahvasti” ei tarkoita samaa kuin ”ei luota lainkaan”. Hakuvinkki: Hae lyhyttä sanan alkua ”luotta”. Lue osuman ympäriltä myös se, kuinka suurta osaa kansalaisista kuvaus koskee.",
    },
    {
      id: "g-h2-q5",
      questionType: "multiple",
      difficulty: "easy",
      categoryId: 8,
      prompt:
        "Mitkä seuraavista yhdistävät Yleä koskevan näkemyksen artikkelissa mainittuun oikeaan esittäjään? Valitse kaikki oikeat vaihtoehdot.",
      options: [
        {
          id: "a",
          text: "Mikko Alkio katsoo Ylen ajavan vasemmistolaista ja feminististä agendaa.",
        },
        {
          id: "b",
          text: "Monet perussuomalaisten kansanedustajat katsovat Ylen ajavan vasemmistolaista ja feminististä agendaa.",
        },
        {
          id: "c",
          text: "Mikko Alkio katsoo Ylen toiminnan heikentävän yksityisten mediayritysten taloudellisia selviytymismahdollisuuksia.",
        },
        {
          id: "d",
          text: "Monet perussuomalaisten kansanedustajat katsovat Ylen toiminnan heikentävän yksityisten mediayritysten taloudellisia selviytymismahdollisuuksia.",
        },
      ],
      correctAnswerIds: ["b", "c"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "266",
        section: "Näissä kamppailuissa… / Toinen tekijä…",
      },
      explanation:
        "Taloudellisia selviytymismahdollisuuksia koskeva näkemys liitetään Alkioon ja ideologista agendaa koskeva näkemys moniin perussuomalaisten kansanedustajiin. A ja D vaihtavat väitteiden esittäjät keskenään. Teksti ei sisällä tällaista tietoa: siinä ei esitetä kyseisiä näkemyksiä A ja D mukaisilla esittäjäyhdistelmillä. Tehtävä koskee artikkelin tekemiä yhdistyksiä, ei näiden henkilöiden kaikkia mahdollisia mielipiteitä.",
      learningPoint:
        "Tarkista kustakin vaihtoehdosta sekä näkemys että sen esittäjä. Oikean väitteen löytyminen tekstistä ei riitä, jos se on liitetty väärään toimijaan. Hakuvinkki: Hae ”Alkio” ja lue myös seuraava kappale. Molempien näkemysten esittäjät löytyvät tältä rajatulta alueelta.",
    },
    {
      id: "g-h2-q6",
      questionType: "single",
      difficulty: "easy",
      categoryId: 9,
      prompt:
        "Mikä seuraavista on EPÄTOSI loppuviitteessä mainitun Ylen julkaisun ”Uusi EU-asetus edellyttää, että valtio turvaa Ylen riippumattomuuden” ajoituksen perusteella?",
      options: [
        {
          id: "a",
          text: "Julkaisun alkuperäiseksi päivämääräksi on merkitty 20.12.2024.",
        },
        {
          id: "b",
          text: "Julkaisun lukupäiväksi on merkitty 10.6.2025.",
        },
        {
          id: "c",
          text: "Julkaisun alkuperäiseksi päivämääräksi on merkitty 22.5.2024.",
        },
        {
          id: "d",
          text: "Julkaisun päivityspäiväksi on merkitty 20.12.2024.",
        },
      ],
      correctAnswerIds: ["a"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "271",
        section: "Loppuviite 3",
      },
      explanation:
        "Päivämäärä 20.12.2024 koskee päivittämistä, ei alkuperäistä julkaisemista. Alkuperäisen julkaisun päivämääräksi on merkitty 22.5.2024 ja lukupäiväksi 10.6.2025. A käyttää siis aineistossa esiintyvää päivämäärää väärässä vaiheessa.",
      learningPoint:
        "Lue päivämäärä yhdessä sitä selittävän ilmauksen kanssa. Erota toisistaan julkaiseminen, päivittäminen ja lähteen lukeminen. Hakuvinkki: Hae julkaisun nimen lyhyttä alkua ”Uusi EU”. Vaihtoehtoisesti siirry artikkelin lopun loppuviitteisiin.",
    },
    {
      id: "g-h2-q7",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 1,
      prompt:
        "Journalistiliiton artikkelissa kuvattu huoli koskee säästöjen kohdentumista Ylen sisältöihin ja media-ammattilaisten työhön.",
      options: [
        { id: "oikein", text: "Oikein" },
        { id: "vaarin", text: "Väärin" },
      ],
      correctAnswerIds: ["oikein"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "268",
        section:
          "Kaiken kaikkiaan viime vuosien Yle-keskustelua…",
      },
      explanation:
        "Tehtävä nimeää samat kaksi säästöjen kohdetta kuin artikkeli: sisällöt ja media-ammattilaisten työn. Kyse on säästöjen kohdentamista koskevasta huolesta. Pelkkä tieto siitä, että Journalistiliitto suhtautuu leikkauksiin kriittisesti, ei vielä riittäisi väitteen tarkistamiseen.",
      learningPoint:
        "Etsi kysytyn toimijan kannanotosta täsmällinen huolen kohde. Jos tehtävässä on kaksi ja-sanalla yhdistettyä osaa, tarkista molemmat. Hakuvinkki: Hae ”Journalistiliitto”. Käytä varsinaisen tekstin osumaa, jossa huolen sisältö avataan, älä pelkkää loppuviitteen otsikkoa.",
    },
    {
      id: "g-h2-q8",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 7,
      prompt:
        "Riku Neuvosen ehdottamiin keinoihin kuuluvat henkilöstön edustajien aseman toteaminen lainsäädännössä sekä selkeä kiintiö Ylen hallintoneuvoston ulkopuolisille jäsenille.",
      options: [
        { id: "tosi", text: "Tosi" },
        { id: "epatosi", text: "Epätosi" },
      ],
      correctAnswerIds: ["tosi"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "267",
        section:
          "Myös julkisoikeuden professori Riku Neuvonen…",
      },
      explanation:
        "Molemmat tehtävässä mainitut keinot sisältyvät Neuvosen ehdotukseen. Niiden esittämisjärjestys on tehtävässä päinvastainen kuin artikkelissa, mutta sisältö säilyy. Lähde ei aseta näitä keinoja ajalliseen toteutusjärjestykseen.",
      learningPoint:
        "Vertaa luettelon osia niiden merkityksen perusteella. Eri esittämisjärjestys ei itsessään muuta väitettä vääräksi.",
    },
    {
      id: "g-h2-q9",
      questionType: "multiple",
      difficulty: "easy",
      categoryId: 3,
      prompt:
        "Mitkä seuraavista tiivistävät oikein artikkelin perusteluja julkisen palvelun median merkityksestä poliittisten ja ekologisten kriisien yhteydessä? Valitse kaikki oikeat vaihtoehdot.",
      options: [
        {
          id: "a",
          text: "Kriisien ratkaiseminen edellyttää kansalaisia, joilla on monipuoliset tiedolliset ja kulttuuriset valmiudet.",
        },
        {
          id: "b",
          text: "Julkisen palvelun median panosta avoimeen julkisuuteen ja demokraattiseen toimintakykyyn ehdotetaan tuettavaksi juridisin keinoin.",
        },
        {
          id: "c",
          text: "Kriisien ratkaisemisessa kansalaisten tiedollisten valmiuksien tulisi korvata heidän kulttuuriset valmiutensa.",
        },
        {
          id: "d",
          text: "Kirjassa ehdotetaan käytänteitä, joilla Ylen moniäänisyyttä ja kulttuurista arvoa voidaan kehittää.",
        },
      ],
      correctAnswerIds: ["a", "b", "d"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "269",
        section:
          "Nämä havainnot sisältävät laajoja yhteiskunnallisia ulottuvuuksia.",
      },
      explanation:
        "A tiivistää kriisien ratkaisemiseen tarvittavia kansalaisvalmiuksia. B ja D kuvaavat samassa kappaleessa esitettyjä tukikeinoja ja kehittämistavoitteita. C on väärin, koska tekstissä tarvitaan sekä tiedollisia että kulttuurisia valmiuksia; toiset eivät korvaa toisia.",
      learningPoint:
        "Vertaa tiivistelmää kappaleen tavoitteisiin, keinoihin ja perusteluihin. Tarkista, ettei tiivistelmä muuta rinnakkaisia asioita toisiaan korvaaviksi. Hakuvinkki: Hae sanan alkua ”ekologis”. Lue koko osuman sisältävä kappale, sillä vaihtoehdot tiivistävät sen eri virkkeitä.",
    },
    {
      id: "g-h2-q10",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 13,
      prompt:
        "Artikkelin mukaan Fideszin vuoden 2010 vaalivoiton jälkeisessä Unkarin julkisen yleisradioyhtiön henkilöstömuutoksessa irtisanottiin täsmälleen 1 600 mediatyöntekijää.",
      options: [
        { id: "oikein", text: "Oikein" },
        { id: "vaarin", text: "Väärin" },
      ],
      correctAnswerIds: ["vaarin"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "266",
        section: "Näiden kehityskulkujen seurauksena…",
      },
      explanation:
        "Artikkeli ilmoittaa irtisanottujen määräksi yli 1 600, ei täsmälleen 1 600. Tehtävässä numeron yhteydessä oleva rajaus muuttuu ja samalla ilmoitettu määrä muuttuu. Aineisto antaa siis tiedon, joka kumoaa tehtävän väitteen.",
      learningPoint:
        "Tarkista luvun lisäksi sitä rajaava sana. ”Yli”, ”noin” ja ”täsmälleen” eivät ole keskenään vaihdettavia ilmauksia.",
    },
    {
      id: "g-h2-q11",
      questionType: "single",
      difficulty: "easy",
      categoryId: 12,
      prompt:
        "Esittääkö kirjoittaja, että vastuu moniarvoisesta kulttuurista ja journalismista kuuluu yksinomaan Ylelle?",
      options: [
        { id: "kylla", text: "Kyllä" },
        { id: "ei", text: "Ei" },
      ],
      correctAnswerIds: ["ei"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "268",
        section: "Viimeinen kappale",
      },
      explanation:
        "Artikkeli nimeää Ylen lisäksi muun muassa sanomalehdet, vaihtoehto- ja yhteisömediat sekä kaupalliset sähköisen median yritykset. Tehtävän sana ”yksinomaan” sulkee nämä muut toimijat pois. Väite on siksi ristiriidassa artikkelin kuvauksen kanssa.",
      learningPoint:
        "Huomaa väitteen ehdottomuutta lisäävät sanat ja tarkista, salliiko lähde muita toimijoita. Ylen merkityksen korostaminen ei vielä tarkoita yksinomaista vastuuta. Hakuvinkki: ”Yle” tuottaa paljon osumia. Rajatumpi haku ”moniarvoi” vie lähemmäs juuri kysyttyä vastuuta käsittelevää kohtaa.",
    },
    {
      id: "g-h2-q12",
      questionType: "single",
      difficulty: "easy",
      categoryId: 2,
      prompt:
        "Mikä seuraavista vastaa artikkelin EMFA-käsittelyssä esitettyä näkemystä Ylen demokraattisten toimintaedellytysten turvaamisesta?",
      options: [
        {
          id: "a",
          text: "Poliittisen riippumattomuuden tukeminen ja rahoituksen riittävyys esitetään vaihtoehtoisina turvaamiskeinoina.",
        },
        {
          id: "b",
          text: "Poliittista riippumattomuutta on tuettava, ja rahoituksen on oltava riittävää sekä ennustettavaa.",
        },
        {
          id: "c",
          text: "Poliittista riippumattomuutta on tuettava, mutta rahoituksen ennustettavuus jää turvaamisen ulkopuolelle.",
        },
        {
          id: "d",
          text: "Rahoituksen riittävyys ja ennustettavuus esitetään poliittisen riippumattomuuden erillisen tukemisen korvaajina.",
        },
      ],
      correctAnswerIds: ["b"],
      source: {
        articleId:
          "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "265",
        section: "Suomessa tämä on näkynyt…",
      },
      explanation:
        "”Ennustettava” ilmaisee tässä saman asian kuin ”ennakoitavissa oleva”. Sana ”lisäksi” osoittaa, että riippumattomuuden tukeminen ja rahoituksen turvaaminen kuuluvat molemmat vaatimuksiin. A ja D muuttavat ne toisiaan korvaaviksi, kun taas C poistaa ennustettavuutta koskevan vaatimuksen.",
      learningPoint:
        "Hyväksy eri sanoin esitetty vaihtoehto, kun merkitys säilyy. Tarkista samalla yhdistävät sanat, jotta parafraasi ei muuta yhdessä vaadittavia asioita vaihtoehdoiksi.",
    },
  ],
} satisfies ValintakoeGExercise;
