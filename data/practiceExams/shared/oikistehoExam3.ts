import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_3_ARTICLE_URL =
  "https://journal.fi/lakimies/article/view/155438/119746";

/**
 * Yhteinen Koe 3 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama 2–4 vuorokauden valmistautumisohjeistus kuin muissa OikisTeho-kokeissa.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - "Jätän vastaamatta" poistetaan lähdevaihtoehdoista, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 */
export const oikisTehoExam3 = {
  id: "koe-3",
  version: 1,
  title: "Harjoitustentti 3",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_3_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 3:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_3_ARTICLE_URL,
      buttonText: "Avaa artikkeli",
    },

    instructionsTitle:
      "Miten harjoitustentti suoritetaan?",

    steps: [
      {
        number: 1,
        title: "Tutustu ennakkomateriaaliin",
        text:
          "Avaa artikkeli ja lue sitä 2–4 vuorokautta. Lue artikkeli useaan otteeseen ennen kokeen aloittamista.",
      },
      {
        number: 2,
        title: "Sulje artikkeli ennen koetta",
        text:
          "Oikeassa koetilanteessa ennakkomateriaali ei ole käytettävissä. Tee myös tämä harjoitustentti ilman artikkelia näkyvissä.",
      },
      {
        number: 3,
        title: "Tee 60 minuutin harjoitustentti",
        text:
          "Kun olet valmis, käynnistä koe. Sinulla on 60 minuuttia aikaa vastata artikkeliin perustuviin kysymyksiin.",
      },
      {
        number: 4,
        title: "Tarkista tuloksesi",
        text:
          "Tentin jälkeen näet pisteesi ja voit käydä läpi vastauksesi, vahvuutesi sekä kehityskohteesi.",
      },
    ],

    notice:
      "Älä aloita koetta ennen kuin olet lukenut ennakkomateriaalin. Kun koe käynnistyy, tarkoitus on vastata ilman artikkelia.",
    closing: "Onnea harjoitteluun! 💪",
  },

  sections: [
    {
      id: "koe-3-kysymykset",
      title: "Koe 3 – Sisäpiiritiedon ilmaisukielto ja MAR-asetus",
      questions: [
        {
          id: "oikis-koe-3-q1",
          prompt: "Mikä on artikkelin keskeinen tutkimuskysymys?",
          options: [
            {
              id: "a",
              text: "Milloin sisäpiiritieto syntyy",
            },
            {
              id: "b",
              text: "Milloin sisäpiiritiedon ilmaiseminen on sallittua MAR-asetuksessa",
            },
            {
              id: "c",
              text: "Miten arvopaperimarkkinat toimivat",
            },
            {
              id: "d",
              text: "Miten yhtiöjärjestys laaditaan",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelin tarkoituksena on selvittää, mitkä ovat MAR 14 artiklassa säädetyistä kielloista sisäpiiritiedon ilmaisukiellon ja sitä koskevan poikkeuksen suojatarkoitukset ja systematiikka MAR:n sääntelyjärjestelmässä (s. 648).",
        },

        {
          id: "oikis-koe-3-q2",
          prompt: "Minkä seuraavista MAR-asetuksen 14 artikla kieltää?",
          options: [
            {
              id: "a",
              text: "Sisäpiiritiedon hallussapidon",
            },
            {
              id: "b",
              text: "Sisäpiiritiedon analysoinnin",
            },
            {
              id: "c",
              text: "Sisäpiiritiedon laittoman ilmaisemisen",
            },
            {
              id: "d",
              text: "Julkisen tiedon levittämisen",
            },
          ],
          correctAnswerId: "c",
          explanation: "MAR 14(c) artiklan mukaan henkilö ei saa ilmaista sisäpiiritietoa laittomasti (s. 648).",
        },

        {
          id: "oikis-koe-3-q3",
          prompt: "Mitkä seuraavista väittämistä ovat oikein?",
          options: [
            {
              id: "a",
              text: "Sisäpiiritiedon laiton ilmaiseminen määritellään MAR 10 artiklassa.",
            },
            {
              id: "b",
              text: "Markkinoiden väärinkäyttödirektiivissä säädetään sisäpiiritiedon julkistamisesta ja väärinkäyttöä koskevista kielloista",
            },
            {
              id: "c",
              text: "Sisäpiiritiedon ilmaiseminen, joka tapahtuu osana työn, ammatin tai tehtävien tavanomaista suorittamista, on katsottava sallituksi.",
            },
            {
              id: "d",
              text: "Sisäpiiritiedon ilmaiseminen, joka tapahtuu osana työn, ammatin tai tehtävien tavanomaista suorittamista, on katsottava kielletyksi.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c"],
          explanation: "Sisäpiiritiedon laiton ilmaiseminen määritellään MAR 10(1) artiklassa (s. 648). Markkinoiden väärinkäyttöasetuksessa säädetään sisäpiiritiedon julkistamisesta ja väärinkäyttöä koskevista kielloista (s. 648). Huom, kyseessä on asetus, ei direktiivi. Sisäpiiritiedon ilmaiseminen, joka tapahtuu osana työn, ammatin tai tehtävien tavanomaista suorittamista, on katsottava sallituksi (s. 648).",
        },

        {
          id: "oikis-koe-3-q4",
          prompt: "Oikein vai väärin: Sisäpiiritiedon ilmaiseminen voi olla sallittua normaalin työn yhteydessä.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Sellainen sisäpiiritiedon ilmaiseminen, joka ei tapahdu osana työn, ammatin tai tehtävien tavanomaista suorittamista, on katsottava laittomaksi (s. 648).",
        },

        {
          id: "oikis-koe-3-q5",
          prompt: "Mikä seuraavista on lyhenne Euroopan arvopaperimarkkinaviranomaiselle?",
          options: [
            {
              id: "a",
              text: "USRA",
            },
            {
              id: "b",
              text: "EPRA",
            },
            {
              id: "c",
              text: "EUAV",
            },
            {
              id: "d",
              text: "ESMA",
            },
          ],
          correctAnswerId: "d",
          explanation: "Tulee ilmi esimerkiksi artikkelin sivulla 649.",
        },

        {
          id: "oikis-koe-3-q6",
          prompt: "Mihin seuraavista ilmaisukiellon tulkinta perustuu artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Kansalliseen yhtiöoikeuteen",
            },
            {
              id: "b",
              text: "Asetuksen tavoitteisiin ja rakenteeseen",
            },
            {
              id: "c",
              text: "Yhtiöjärjestykseen",
            },
            {
              id: "d",
              text: "Tilinpäätökseen",
            },
          ],
          correctAnswerId: "b",
          explanation: "Tulkintakehikko on muodostettava säädöksen sisäisen systematiikan ja tavoitteiden sekä säännöksen tulkinnasta annetun oikeuskäytännön avulla (s. 649).",
        },

        {
          id: "oikis-koe-3-q7",
          prompt: "Mikä seuraavista väittämistä on oikein?",
          options: [
            {
              id: "a",
              text: "Markkinat toimivat optimaalisesti, kun sijoittajat luottavat siihen, ettei kukaan hyödy toisten kustannuksella tiedosta, joka ei ole ollut kaikkien saatavilla.",
            },
            {
              id: "b",
              text: "Markkinat toimivat optimaalisesti, kun sijoittajat luottavat siihen, että EU-sääntely on riittävää.",
            },
            {
              id: "c",
              text: "Markkinat toimivat optimaalisesti, kun sijoittajat luottavat siihen, ettei kenelläkään ole enempää tietoa arvopapereista kuin mitä yleisesti julkaistaan.",
            },
            {
              id: "d",
              text: "Markkinat toimivat optimaalisesti, kun arvopapereita voi vaihdella kuka vain ja koska vain.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Markkinat toimivat optimaalisesti, kun sijoittajat luottavat siihen, että kukaan ei oikeudettomasti hyödy toisten kustannuksella sellaisesta tiedosta, jokaei ole ollut kaikkien markkinatoimijoiden saatavilla (s. 651).",
        },

        {
          id: "oikis-koe-3-q8",
          prompt: "Oikein vai väärin: MAR-asetus antaa yksityiskohtaisen määritelmän sallitulle ilmaisulle.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Heti artikkelin ensimmäisestä luvusta ilmenee, että MAR 10 säännöksestä ei saada selvyyttä sille, miten laajasti ilmaisukielto tulee ymmärtään (s. 648-649).",
        },

        {
          id: "oikis-koe-3-q9",
          prompt: "Mihin seuraavista poikkeuksen soveltaminen sisäpiiritiedon julkaisussa soveltuu?",
          options: [
            {
              id: "a",
              text: "Työsuhteeseen",
            },
            {
              id: "b",
              text: "Ammattiin",
            },
            {
              id: "c",
              text: "Tehtäviin",
            },
            {
              id: "d",
              text: "Työnantajaan",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b", "c"],
          explanation: "MAR 10: “Tässä asetuksessa sisäpiiritiedon laittomalla ilmaisemisella tarkoitetaan tilannetta,jossa henkilöllä on hallussaan sisäpiiritietoa ja hän ilmaisee kyseisen sisäpiiritiedon toiselle henkilölle, jollei tämä ilmaiseminen tapahdu osana työn, ammatin tai tehtävien tavanomaista suorittamista.” (s. 648).",
        },

        {
          id: "oikis-koe-3-q10",
          prompt: "Millä seuraavista kriteerillä sisäpiiritiedon ilmaisun sallittavuutta arvioidaan?",
          options: [
            {
              id: "a",
              text: "Taloudellisen arvon perusteella",
            },
            {
              id: "b",
              text: "Tiedon laadun perusteella",
            },
            {
              id: "c",
              text: "Kontekstin perusteella",
            },
            {
              id: "d",
              text: "Yhtiön koon perusteella",
            },
          ],
          correctAnswerId: "c",
          explanation: "Keskeistä on tunnistaa se konteksti, jossa sisäpiiritiedon ilmaisemisen sallittavuutta on arvioitava (s. 649)",
        },

        {
          id: "oikis-koe-3-q11",
          prompt: "Oikein vai väärin: Toisen markkinatoimijat ovat aina toisia toimijoita paremmassa informaatioasemassa.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Toiset markkinatoimijat ovat aina toisia toimijoita paremmassa informaatioasemassa (s. 650).",
        },

        {
          id: "oikis-koe-3-q12",
          prompt: "Mitkä seuraavista ovat MAR-asetuksen tavoitteena?",
          options: [
            {
              id: "a",
              text: "Lisätä verotuloja",
            },
            {
              id: "b",
              text: "Turvata markkinoiden luottamus",
            },
            {
              id: "c",
              text: "Turvata markkinoiden tehokkuus",
            },
            {
              id: "d",
              text: "Nopeuttaa kaupankäyntiä",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "c"],
          explanation: "MAR:n tavoitteet EU:n markkinoiden tehokkuudesta ja markkinaluottamuksesta sekä säädöksen sisäinen systematiikka edellä mainittujen tavoitteiden ilmentäjänä ohjaavat kansallisen tulkinnan mahdollisuuksia (s. 650).",
        },

        {
          id: "oikis-koe-3-q13",
          prompt: "Oikein vai väärin: Kansallinen yhtiöoikeus voi vaikuttaa poikkeuksen tulkintaan.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Ilmaisukieltosäännöstön osalta kansallisen oikeuden säännöt ja periaatteet näyttävät kuitenkin olevan merkittävässä asemassa asetuksen säännösten tulkinnassa (s. 649).",
        },

        {
          id: "oikis-koe-3-q14",
          prompt: "Mitkä seuraavista ovat MAR 7 artiklan mukaan sisäpiiritiedon kriteereitä?",
          options: [
            {
              id: "a",
              text: "Tieto liittyy suoraan tai välillisesti liikkeeseenlaskijaan",
            },
            {
              id: "b",
              text: "Tiedolla olisi huomattava vaikutus rahoitusvälineen hintaan julkistettaessa",
            },
            {
              id: "c",
              text: "Tieto on julkistamatonta",
            },
            {
              id: "d",
              text: "Tieto on täsmällistä",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b", "c", "d"],
          explanation: "Sisäpiiritiedolla tarkoitetaan MAR 7(1)(a) artiklassa tietoa, joka on ”luonteeltaan täsmällistä ja julkistamatonta tietoa, joka liittyy suoraan tai välillisesti yhteen tai useampaan liikkeeseenlaskijaan taikka yhteen tai useampaan rahoitusvälineeseen ja jolla, jos se julkistettaisiin, todennäköisesti olisi huomattava vaikutus kyseisten rahoitusvälineiden hintoihin tai niihin liittyvien rahoitusjohdannaisten hintaan” (s. 651).",
        },

        {
          id: "oikis-koe-3-q15",
          prompt: "Mikä on SEC Regulation FD?",
          options: [
            {
              id: "a",
              text: "Sijoitusneuvonnassa käytetty ohjeistus",
            },
            {
              id: "b",
              text: "Kanadan lainsäädäntö liittyen markkinoiden väärinkäyttöön.",
            },
            {
              id: "c",
              text: "MAR:n lainvalmisteluaineisto",
            },
            {
              id: "d",
              text: "Yhdysvalloissa oleva säädöskokoelma, joilla säädellään tiedon ilmaisemista.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Sääntelyn tarkoituksena voidaan katsoa olevan erityisesti piensijoittajien etujen suojaaminen. Näin on asia erityisesti Yhdysvalloissa, jossa SEC Regulation FD (Fair Disclosure) säännöksillä säännellään tietojen selektiivistä ilmaisemista yhtiön ja analyytikoiden tai institutionaalisten sijoittajien välillä (s. 652)",
        },

        {
          id: "oikis-koe-3-q16",
          prompt: "Mikä seuraavista väittämistä on väärin?",
          options: [
            {
              id: "a",
              text: "MAR:ssa ei nimenomaisesti tunnisteta liikkeeseenlaskijaa suojan kohteena sisäpiiritiedon laittomalta ilmaisemiselta.",
            },
            {
              id: "b",
              text: "Liikkeeseenlaskijan intressiin voi kuulua tiedon pitäminen luottamuksellisena.",
            },
            {
              id: "c",
              text: "Liikeeseenlaskijalla on mahdollisuus MAR:n mukaan ilmaista itse sisäpiiritietoa tarpeelliseksi katsomalleen kohdeyleisölle.",
            },
            {
              id: "d",
              text: "Liikkeeseenlaskijan mahdollisuus kontrolloida sitä koskevien tietojen julkisuutta on markkinoiden tiedontarpeeseen nähden toissijainen.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Liikkeeseenlaskijan mahdollisuus kontrolloida sitä koskevien tietojen julkisuutta on kuitenkin markkinoiden tiedontarpeeseen nähden toissijainen (s. 653). Liikkeeseenlaskijan intressiin voi kuulua tiedon pitäminen luottamuksellisena (s. 653). MAR:ssa ei nimenomaisesti tunnisteta liikkeeseenlaskijaa suojan kohteena sisäpiiritiedon laittomalta ilmaisemiselta (s. 653).",
        },

        {
          id: "oikis-koe-3-q17",
          prompt: "Mikä seuraavista väittämistä on oikein?",
          options: [
            {
              id: "a",
              text: "Sisäpiiritiedon vastaanottaja saa käyttää tietoa rahoitusvälinekaupoissa.",
            },
            {
              id: "b",
              text: "Sisäpiiritiedon vastaanottaja on velvollinen ilmoittamaan tiedosta välittömästi Euroopan arvopaperimarkkinaviranomaiselle.",
            },
            {
              id: "c",
              text: "Sisäpiiritiedon vastaanottaja on velvollinen ilmoittamaan tiedosta välittömästi Finanssivalvonnalle.",
            },
            {
              id: "d",
              text: "Sisäpiiritiedon vastaanottaja ei saa käyttää tietoa rahoitusvälinekaupoissa.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Ilmaisukieltopoikkeus ei voi perustua tällaiseen tehokkuuteen, koska sisäpiiritiedon vastaanottajaa sitoo sisäpiiriläisen velvollisuus olla käyttämättä tietoa rahoitusvälinekaupoissa (s. 654).",
        },

        {
          id: "oikis-koe-3-q18",
          prompt: "Oikein vai väärin: Sisäpiiritiedon ilmaisemisessa ei tarvitse noudattaa suhteellisuusperiaatetta.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Sisäpiiritiedon ilmaisemisessa on noudatettava suhteellisuusperiaatetta (s. 658)",
        },

        {
          id: "oikis-koe-3-q19",
          prompt: "Mitä seuraavista yhtiön tulisi hyödyntää suojakeinoina tiedon luottamuksellisena pysymiselle artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Salassapitosopimuksia",
            },
            {
              id: "b",
              text: "Työsopimuksia",
            },
            {
              id: "c",
              text: "Sisäpiiriluetteloja",
            },
            {
              id: "d",
              text: "Valvontalistauksia",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c"],
          explanation: "Suojakeinoina tiedon luottamuksellisena pysymiselle tulisi lisäksi hyödyntää sisäpiiriluetteloja ja salassapitosopimuksia (s. 656)",
        },

        {
          id: "oikis-koe-3-q20",
          prompt: "Mistä oli kyse EYT:n tapauksessa Grøngaard & Bang?",
          options: [
            {
              id: "a",
              text: "Toisen organisaation oikeudesta saada sisäpiiritietoa ilmaisukiellon estämättä",
            },
            {
              id: "b",
              text: "Työntekijäjärjestön oikeudesta saada sisäpiiritietoa ilmaisukiellon estämättä",
            },
            {
              id: "c",
              text: "Ammattiliiton oikeudesta kuulua sisäpiiriluetteloon kyseisen ammattiliiton työntekijöiden edustamissa yrityksissä",
            },
            {
              id: "d",
              text: "Työntekijöiden oikeudesta saada sisäpiiritietoa ilmaisukiellon estämättä",
            },
          ],
          correctAnswerId: "b",
          explanation: "Euroopan yhteisöjen tuomioistuimessa (EYT) on puolestaan ollut arvioitavana tapaus Grøngaard & Bang, jonka tosiseikastossa keskeisenä kysymyksenä on ollut työntekijäjärjestön oikeus saada tietoa sisäpiiritiedon ilmaisukiellon estämättä (s. 656)",
        },

        {
          id: "oikis-koe-3-q21",
          prompt: "Mitä oikeusohjeita EYT antoi tapauksessa Grøngaard & Bang?",
          options: [
            {
              id: "a",
              text: "Sisäpiiritiedon ilmaisukieltoa koskevaa poikkeusta on tulkittava yleistä kieltoa koskevana poikkeuksena laveasti",
            },
            {
              id: "b",
              text: "Sisäpiiritiedon ilmaiseminen on perusteltua ainoastaan, jos se on ehdottoman tarpeellista.",
            },
            {
              id: "c",
              text: "Sisäpiiritiedon ilmaisemisen sallittavuutta arvioitaessa on otettava huomioon, miten arkaluonteista kyseessä oleva sisäpiiritieto on.",
            },
            {
              id: "d",
              text: "Sisäpiiritiedon ilmaiseminen osana ammatin suorittamista on aina sallittua.",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "c"],
          explanation: "Sivu 658: Sisäpiiritiedon ilmaisukieltoa koskevaa poikkeusta on tulkittava yleistä kieltoa koskevana poikkeuksena suppeasti. Kun sisäpiiritietoa ilmaistaan osana työn, ammatin tai tehtävien tavanomaista suorittamista, sisäpiiritiedon ilmaisemisen ja työn, ammatin tai tehtävien tavanomaisen suorittamisen välillä on oltava läheinen yhteys. Sisäpiiritiedon ilmaiseminen on perusteltua ainoastaan, jos se on ehdottoman tarpeellista. Sisäpiiritiedon ilmaisemisessa on noudatettava suhteellisuusperiaatetta. Sisäpiiritiedon ilmaisemisen sallittavuutta arvioitaessa on otettava huomioon, miten arkaluonteista kyseessä oleva sisäpiiritieto on; erityisen varovainen ilmaisemisessa on oltava silloin, kun tiedolla voisi ilmeisesti olla huomattava vaikutus arvopaperien hintaan. Se, mitä on pidettävä osana työn, ammatin tai tehtävien suorittamista, määräytyy harmonisoinnin puuttuessa suurelta osin kansallisten asiaa koskevien säännösten perusteella.",
        },

        {
          id: "oikis-koe-3-q22",
          prompt: "Oikein vai väärin: Yhtiöoikeus on harmonisoitu EU:ssa samoin kuin arvopaperimarkkinaoikeuskin.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Yhtiöoikeutta ei ole arvopaperimarkkinaoikeutta vastaavassa laajuudessa harmonisoitu EU:ssa (s. 660).",
        },

        {
          id: "oikis-koe-3-q23",
          prompt: "Mitkä seuraavista yleensä kuuluu markkinoiden tunnusteluun?",
          options: [
            {
              id: "a",
              text: "Tietoa luovuttava osapuoli hankkii vastaanottajalta suostumuksen sisäpiiritiedon luvouttamisesta",
            },
            {
              id: "b",
              text: "Tietoa luovuttava osapuoli kertoo vastaanottajalle sisäpiiriläisten velvollisuuksista",
            },
            {
              id: "c",
              text: "Tietoa luovuttava osapuoli antaa vastaanottajalle luvan ilmaista hänelle paljastetun tiedon.",
            },
            {
              id: "d",
              text: "Tietoa luovuttava osapuoli jättää vastaanottajan päätettäväksi sen, kuinka hän tietoa hyödyntää.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b"],
          explanation: "Markkinoiden tunnusteluun kuuluu, että tiedon luovuttava osapuoli hankkii tiedon vastaanottajalta yhtäältä suostumuksen sille, että sisäpiiritietoa saa hänelle antaa, sekä toisaalta tekee tälle selkoa sisäpiiriläisen velvollisuuksista olla käyttämättä ja ilmaisematta hänelle paljastettua tietoa (s. 666).",
        },

        {
          id: "oikis-koe-3-q24",
          prompt: "Milloin sisäpiiritiedon julkistamista on voinut MAR:n mukaan lykätä?",
          options: [
            {
              id: "a",
              text: "Kun tieto koskee jonkun yhtiön osakkaan henkilökohtaista elämää",
            },
            {
              id: "b",
              text: "Kun tiedon julkistaminen lisäisi yhtiön osakkeiden myyntiä huomattavasti",
            },
            {
              id: "c",
              text: "Kun yhtiön hallitus tekee asiasta yksimielisen päätöksen",
            },
            {
              id: "d",
              text: "Kun tiedon julkistaminen olisi liikkeeseenlaskijan intressien vastaista",
            },
          ],
          correctAnswerId: "d",
          explanation: "Käytännössä sisäpiiritiedon julkistamista on voinut olla tarve lykätä esimerkiksi silloin, kun tiedon julkistaminen olisi liikkeeseenlaskijan intressien vastaista (s. 667)",
        },

        {
          id: "oikis-koe-3-q25",
          prompt: "Oikein vai väärin: Edellytyksenä välivaiheen sisäpiiritiedon julkistamattomuudelle on se, että tieto pystytään pitämään luottamuksellisena.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Edellytyksenä välivaiheen sisäpiiritiedon julkistamattomuudelle on se, että tieto pystytään pitämään luottamuksellisena (s. 669).",
        },

        {
          id: "oikis-koe-3-q26",
          prompt: "Oikein vai väärin: Sisäpiiritiedon ilmaisemisen tarpeellisuus tulee arvioida lähtökohtaisesti ulkoisten seikkojen perusteella.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Sisäpiiritiedon ilmaisemisen tarpeellisuus tulee arvioida lähtökohtaisesti ulkoisten seikkojen perusteella (s. 671).",
        },

        {
          id: "oikis-koe-3-q27",
          prompt: "Kuka on vastuussa, mikäli liikkeeseenlaskija puolesta toimiva henkilö ylittää kommunikoinnissaan sen, mitä liikkeeseenlaskija on päättänyt kertoa yhtiöstä ulospäin?",
          options: [
            {
              id: "a",
              text: "Sekä liikkeeseenlaskija että hänen lukuun toimiva henkilö",
            },
            {
              id: "b",
              text: "Liikkeeseenlaskija",
            },
            {
              id: "c",
              text: "Liikkeeseenlaskijan lukuun toimiva henkilö",
            },
            {
              id: "d",
              text: "Osakkeenomistajat",
            },
          ],
          correctAnswerId: "c",
          explanation: "Joskus liikkeeseenlaskijan puolesta tai lukuun toimiva henkilö tulee kommunikoinnissaan ylittäneeksi sen, mitä liikkeeseenlaskija on päättänyt kertoa yhtiöstä ulospäin. Näissä tilanteissa vastuussa on katsottava olevan liikkeeseenlaskijan puolesta tai lukuun toimiva henkilö, ei liikkeeseenlaskija (s. 672)",
        },

        {
          id: "oikis-koe-3-q28",
          prompt: "Oikein vai väärin: Markkinahuhujen vahvistamisen tai torjumisen olisi syytä tapahtua aina yhtiön tavanomaisten tiedottamiskanavien eli käytännössä pörssitiedotteen kautta",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Markkinahuhujen vahvistamisen tai torjumisen olisi syytä tapahtua aina yhtiön tavanomaisten tiedottamiskanavien eli käytännössä pörssitiedotteen kautta (s. 675)",
        },

        {
          id: "oikis-koe-3-q29",
          prompt: "Mikä seuraavista koskee rikkomuksista ilmoittamista?",
          options: [
            {
              id: "a",
              text: "MAR 18 artikla",
            },
            {
              id: "b",
              text: "MAR 32 artikla",
            },
            {
              id: "c",
              text: "MAR 36 artikla",
            },
            {
              id: "d",
              text: "MAR 24 artikla",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelin luku 5.5. koskee rikkomuksista ilmoittamista eli MAR 32 artiklaa.",
        },

        {
          id: "oikis-koe-3-q30",
          prompt: "Oikein vai väärin: Whistleblowingsäännöksen mukaan vain yhtiön osakkeenomistajat voivat ilmoittaa viranomaiselle epäillystä MAR:n säännösten rikkomisesta.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "whistleblowing-säänöksen mukaan kuka tahansa voi ilmoittaa viranomaiselle epäillystä MAR:n säännösten rikkomisesta (s. 675).",
        },

      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
