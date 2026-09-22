import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_7_ARTICLE_URL =
  "https://www.edilex.fi/artikkelit/100047.pdf";

/**
 * Yhteinen Koe 7 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama 2–4 vuorokauden valmistautumisohjeistus kuin muissa OikisTeho-kokeissa.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - "Jätän vastaamatta" poistetaan lähdevaihtoehdoista, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 */
export const oikisTehoExam7 = {
  id: "koe-7",
  version: 1,
  title: "Harjoitustentti7",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_7_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 7:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_7_ARTICLE_URL,
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
      id: "koe-7-kysymykset",
      title: "Koe 7 – Tiedonhallinnan organisointi kunnassa",
      questions: [
        {
          id: "oikis-koe-7-q1",
          prompt: "Mikä seuraavista muodostaa artikkelin mukaan tiedonhallinnan kansallisen yleissääntelyn perustan?",
          options: [
            {
              id: "a",
              text: "Vain tiedonhallintalaki ja tietosuojalaki.",
            },
            {
              id: "b",
              text: "Tiedonhallintalaki, julkisuuslaki ja arkistolaki.",
            },
            {
              id: "c",
              text: "Perustuslaki, kuntalaki ja hallintolaki.",
            },
            {
              id: "d",
              text: "Varhaiskasvatuslaki ja perusopetuslaki.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelissa todetaan, että tiedonhallinnan merkittävin kansallinen yleissääntely perustuu tiedonhallintalakiin (906/2019), julkisuuslakiin (621/1999) sekä arkistolakiin (831/1994) (s. 2)",
        },

        {
          id: "oikis-koe-7-q2",
          prompt: "Mikä on kunnan organisatorinen rooli nimenomaan tiedonhallintalain mukaan?",
          options: [
            {
              id: "a",
              text: "Kunnat ovat rekisterinpitäjiä.",
            },
            {
              id: "b",
              text: "Kunnat ovat arkistonmuodostajia.",
            },
            {
              id: "c",
              text: "Kunnat ovat tiedonhallintayksiköitä.",
            },
            {
              id: "d",
              text: "Kunnat ovat julkisyhteisöitä.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Tiedonhallintalain 4 §:n 1 momentin 7 kohdan mukaan kunnat ovat tiedonhallintayksiköitä (s. 2).",
        },

        {
          id: "oikis-koe-7-q3",
          prompt: "Mihin kunnan vapaus organisoida tehtävänsä ja rakenteensa ensisijaisesti perustuu?",
          options: [
            {
              id: "a",
              text: "Kuntalakiin.",
            },
            {
              id: "b",
              text: "Perustuslaissa turvattuun itsehallintoon.",
            },
            {
              id: "c",
              text: "Euroopan unionin yleiseen tietosuoja-asetukseen.",
            },
            {
              id: "d",
              text: "Tiedonhallintalain joustavuuteen.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Kunnilla on perustuslain 121 §:n perusteella itsehallinto, joka antaa vapauden organisoida tehtävät ja rakenteen (s. 2).",
        },

        {
          id: "oikis-koe-7-q4",
          prompt: "Mitä tarkoitetaan \"peruskunnalla\" kuntaoikeudellisessa kirjallisuudessa?",
          options: [
            {
              id: "a",
              text: "Kunnan ja hyvinvointialueen muodostamaa kokonaisuutta.",
            },
            {
              id: "b",
              text: "Kunnan omaa organisaatiota.",
            },
            {
              id: "c",
              text: "Vain kunnan lakisääteisiä pakollisia toimielimiä.",
            },
            {
              id: "d",
              text: "Kunnan konsernirakennetta, johon kuuluvat myös tytäryhtiöt.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelissa määritellään, että peruskunnalla viitataan kunnan omaan organisaatioon (s. 3).",
        },

        {
          id: "oikis-koe-7-q5",
          prompt: "Mitkä ovat kuntalain mukaan pakollisia toimielimiä kunnassa?",
          options: [
            {
              id: "a",
              text: "Valtuusto, kunnanhallitus ja opetuslautakunta.",
            },
            {
              id: "b",
              text: "Valtuusto, kunnanhallitus ja tarkastuslautakunta.",
            },
            {
              id: "c",
              text: "Valtuusto ja sivistyslautakunta.",
            },
            {
              id: "d",
              text: "Kunnanhallitus, keskusvaalilautakunta ja rehtori.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Kuntalain 14 §:n ja 30 §:n mukaan kunnassa on oltava valtuusto, kunnanhallitus ja tarkastuslautakunta (s. 4)",
        },

        {
          id: "oikis-koe-7-q6",
          prompt: "Kuka tai mikä käyttää kunnan yleistä päätösvaltaa kuntalain mukaan?",
          options: [
            {
              id: "a",
              text: "Kunnanhallitus.",
            },
            {
              id: "b",
              text: "Kunnanjohtaja.",
            },
            {
              id: "c",
              text: "Hallintosääntö.",
            },
            {
              id: "d",
              text: "Valtuusto.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Valtuusto käyttää kunnan yleistä päätösvaltaa kuntalain 14 §:n 2 momentin perusteella (s. 4-5).",
        },

        {
          id: "oikis-koe-7-q7",
          prompt: "Voiko yksittäinen viranhaltija (esim. rehtori) olla julkisuuslain mukainen viranomainen?",
          options: [
            {
              id: "a",
              text: "Kyllä, jos hänellä on itsenäistä toimivaltaa.",
            },
            {
              id: "b",
              text: "Ei, vain toimielimet voivat olla viranomaisia.",
            },
            {
              id: "c",
              text: "Kyllä, mutta vain jos hän on valtuuston jäsen.",
            },
            {
              id: "d",
              text: "Ei, kunnalliset viranomaiset ovat aina monijäsenisiä.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Julkisuuslain perustelujen mukaan myös yksittäinen viranhaltija voi olla viranomainen, jos hänellä on itsenäistä toimivaltaa (s. 8).",
        },

        {
          id: "oikis-koe-7-q8",
          prompt: "Mikä on kunnan hallintosäännön merkitys viranomaisten määräytymisessä?",
          options: [
            {
              id: "a",
              text: "Se on lakia ylempänä oleva säädös.",
            },
            {
              id: "b",
              text: "Siinä on lain mukaan nimenomaisesti lueteltava kaikki julkisuuslain mukaiset viranomaiset.",
            },
            {
              id: "c",
              text: "Siinä annetaan määräykset toimielimistä, johtamisesta ja toimivallasta.",
            },
            {
              id: "d",
              text: "Se ei vaikuta viranomaisten toimivaltaan.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Valtuusto päättää hallintosäännöstä, jossa annetaan määräykset toimielimistä, johtamisesta ja toimielinrakenteesta (s. 4).",
        },

        {
          id: "oikis-koe-7-q9",
          prompt: "Mikä on suurin haaste kunnan tiedonhallinnan sääntelyn organisoimisessa artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Rahoituksen puute.",
            },
            {
              id: "b",
              text: "Kunnan itsehallintoon perustuva organisoimisen vapaus ja sääntelyn hajautuneisuus.",
            },
            {
              id: "c",
              text: "Teknisten järjestelmien vanhentuminen.",
            },
            {
              id: "d",
              text: "Henkilökunnan osaamattomuus.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Organisaatiorakennetta määrittävä sääntely ja itsehallinnon vapaus muodostavat haasteen, koska tiedonhallinnan sääntely hajautuu useaan säännökseen (s. 2-3).",
        },

        {
          id: "oikis-koe-7-q10",
          prompt: "Mikä toimielin toimii kunnassa tiedonhallintayksikön johtona tiedonhallintalain mukaan?",
          options: [
            {
              id: "a",
              text: "Valtuusto.",
            },
            {
              id: "b",
              text: "Tarkastuslautakunta.",
            },
            {
              id: "c",
              text: "Sivistyslautakunta.",
            },
            {
              id: "d",
              text: "Kunnanhallitus.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Taulukon 2 mukaan kunnanhallitus on lähtökohtaisesti tiedonhallintayksikön johto tiedonhallintalain perusteella (s. 24).",
        },

        {
          id: "oikis-koe-7-q11",
          prompt: "Mikä on kaksikielisen kunnan erityisvaatimus opetustoimen hallinnossa kuntalain mukaan?",
          options: [
            {
              id: "a",
              text: "Kumpaakin kieliryhmää varten on oltava erillinen toimielin tai jaosto.",
            },
            {
              id: "b",
              text: "Kaikki asiakirjat on säilytettävä kahtena kappaleena.",
            },
            {
              id: "c",
              text: "Valtuuston on oltava puoliksi suomenkielinen ja puoliksi ruotsinkielinen.",
            },
            {
              id: "d",
              text: "Tiedonhallintayksikön johtajia on oltava kaksi.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Kuntalain 30 §:n 4 momentin mukaan kaksikielisessä kunnassa asetetaan opetustoimen hallintoon erillinen toimielin kumpaakin kieliryhmää varten tai yhteinen toimielin jaostoilla (s. 5).",
        },

        {
          id: "oikis-koe-7-q12",
          prompt: "Miten arkistolaki määrittelee kunnalliset toimielimet?",
          options: [
            {
              id: "a",
              text: "Tiedonhallintayksiköiksi.",
            },
            {
              id: "b",
              text: "Arkistonmuodostajiksi.",
            },
            {
              id: "c",
              text: "Rekisterinpitäjiksi.",
            },
            {
              id: "d",
              text: "Julkisuusviranomaisiksi.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Arkistolain mukaan kunnalliset viranomaiset ja toimielimet ovat arkistonmuodostajia (s. 2).",
        },

        {
          id: "oikis-koe-7-q13",
          prompt: "Voiko kunnan viranhaltija olla henkilötietojen käsittelijä suhteessa työnantajaansa (kuntaan)?",
          options: [
            {
              id: "a",
              text: "Kyllä, jos hän käsittelee lasten tietoja.",
            },
            {
              id: "b",
              text: "Ei, hän toimii osana rekisterinpitäjän (kunnan viranomaisen) toimintaa.",
            },
            {
              id: "c",
              text: "Kyllä, jos hän on rehtori.",
            },
            {
              id: "d",
              text: "Vain jos asiasta on sovittu erillisellä sopimuksella.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Rekisterinpitäjään palvelussuhteessa olevat luonnolliset henkilöt, kuten viranhaltijat, eivät ole henkilötietojen käsittelijöitä, vaan toimivat osana rekisterinpitäjän toimintaa (s. 23)",
        },

        {
          id: "oikis-koe-7-q14",
          prompt: "Mikä on \"viranomaisen, jonka hallussa asiakirjat ovat\" merkitys julkisuuslaissa?",
          options: [
            {
              id: "a",
              text: "Se on vain fyysinen sijaintipaikka.",
            },
            {
              id: "b",
              text: "Se on toimivaltainen päättämään asiakirjojen käsittelystä ja luovuttamisesta.",
            },
            {
              id: "c",
              text: "Se tarkoittaa aina kunnanhallitusta.",
            },
            {
              id: "d",
              text: "Sillä ei ole oikeudellista merkitystä.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Julkisuuslain 14 §:n mukaan viranomainen, jonka hallussa asiakirjat ovat, on toimivaltainen päättämään niiden käsittelystä ja luovuttamisesta (s. 8).",
        },

        {
          id: "oikis-koe-7-q15",
          prompt: "Mitä perusoikeuksia tiedonhallinnan sääntelyn taustalla vaikuttaa artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Henkilötietojen suoja, asiakirjajulkisuus ja hyvä hallinto.",
            },
            {
              id: "b",
              text: "Sananvapaus",
            },
            {
              id: "c",
              text: "Oikeus sivistykseen ja työhön.",
            },
            {
              id: "d",
              text: "Itsehallinto ja omistusoikeus.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Tiedonhallinnan yleissääntelyn taustalla vaikuttavat henkilötietojen suoja, asiakirjajulkisuus sekä hyvän hallinnon perusoikeuksien toteuttaminen (s. 2).",
        },

        {
          id: "oikis-koe-7-q16",
          prompt: "Kenellä on vahingonkorvausvastuu kunnan viranhaltijan aiheuttamasta vahingosta?",
          options: [
            {
              id: "a",
              text: "Viranhaltijalla henkilökohtaisesti.",
            },
            {
              id: "b",
              text: "Valtuustolla.",
            },
            {
              id: "c",
              text: "Kunnalla julkisoikeudellisena oikeushenkilönä.",
            },
            {
              id: "d",
              text: "Valtiolla.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Vahingonkorvauslain mukaan kunta on velvollinen korvaamaan vahingot, jotka siihen virkasuhteessa olevat henkilöt aiheuttavat (s. 22).",
        },

        {
          id: "oikis-koe-7-q17",
          prompt: "Milloin yhteisrekisterinpitäjyys muodostuu kunnassa artikkelin tulkinnan mukaan?",
          options: [
            {
              id: "a",
              text: "Aina kun kaksi viranhaltijaa keskustelee keskenään.",
            },
            {
              id: "b",
              text: "Kun tiedonhallintayksikön johto ja järjestämisvastuullinen viranomainen ovat eri tahoja.",
            },
            {
              id: "c",
              text: "Vain kun kunta tekee yhteistyötä yksityisen yrityksen kanssa.",
            },
            {
              id: "d",
              text: "Sitä ei voi muodostua kunnan sisällä.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Yhteisrekisterinpitäjyys määräytyy sen mukaan, mikä toimielin johtaa tiedonhallintayksikköä ja mikä kunnan viranomainen hoitaa järjestämisvastuullisia tehtäviä (s. 23).",
        },

        {
          id: "oikis-koe-7-q18",
          prompt: "Kuka on arkistolain mukaan vastuussa arkistotoimesta kunnassa?",
          options: [
            {
              id: "a",
              text: "Valtuusto.",
            },
            {
              id: "b",
              text: "Kunnanhallitus.",
            },
            {
              id: "c",
              text: "Henkilötietojen käsittelijä.",
            },
            {
              id: "d",
              text: "Varhaiskasvatusjohtaja.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Arkistolain 9 §:n mukaan kunnanhallitus on vastuussa arkistotoimesta (s. 14)",
        },

        {
          id: "oikis-koe-7-q19",
          prompt: "Oikein vai väärin: Tiedonhallintamallin ylläpitovastuu on tiedonhallintalain mukaan tiedonhallintayksiköllä, kun taas arkistonmuodostussuunnitelman laatimisvelvollisuus on arkistonmuodostajilla",
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
          explanation: "Tiedonhallintalain 5 §:n 1 momentin perusteella tiedonhallintamallin ylläpitovastuu on tiedonhallintalain mukaan tiedonhallintayksiköllä, kun taas arkistonmuodostussuunnitelman laatimisvelvollisuus on arkistonmuodostajilla (s. 14).",
        },

        {
          id: "oikis-koe-7-q20",
          prompt: "Onko arkistolain mukainen arkistonmuodostussuunnitelma edelleen pakollinen?",
          options: [
            {
              id: "a",
              text: "Ei, se on poistunut tiedonhallintalain myötä.",
            },
            {
              id: "b",
              text: "Kyllä, se on edelleen voimassa oleva velvoite kunnallisille viranomaisille.",
            },
            {
              id: "c",
              text: "Vain jos kunta on vapaaehtoisesti niin päättänyt.",
            },
            {
              id: "d",
              text: "Se on pakollinen vain valtionhallinnolle, ei kunnille.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Arkistolain 8 §:n mukaan arkistonmuodostajan on määrättävä arkistonmuodostussuunnitelmasta (s. 14-15).",
        },

        {
          id: "oikis-koe-7-q21",
          prompt: "Oikein vai väärin: Kasvatuksen ja koulutuksen lautakunta ei voi olla rekisterinpitäjä.",
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
          explanation: "Euroopan unionin tuomioistuimen rekisterinpitäjyyden muodostumista koskevan oikeuskäytännön perusteella vaikuttaa siltä, että varhaiskasvatuksen ja perusopetuksen tehtävää hoitava kunnan viranomainen, kuten kasvatuksen ja koulutuksen lautakunta, voi olla rekisterinpitäjä, kun se sille kuntalain mukaisessa hallintosäännössä määrättyjen tehtävien perusteella voi määritellä henkilötietojen käsittelyn tarkoituksia ja keinoja (s. 20)",
        },

        {
          id: "oikis-koe-7-q22",
          prompt: "Kuka päättää asiakirjan antamisesta julkisuuslain mukaan, jos se on lautakunnan hallussa?",
          options: [
            {
              id: "a",
              text: "Kaupunginjohtaja.",
            },
            {
              id: "b",
              text: "Tietosuojavaltuutettu.",
            },
            {
              id: "c",
              text: "Kunnanarkistonhoitaja.",
            },
            {
              id: "d",
              text: "Lautakunta tai sen määräämä viranhaltija.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Julkisuuslain 14 §:n mukaan viranomainen, jonka hallussa asiakirja on, tekee päätöksen sen luovuttamisesta (s. 8)",
        },

        {
          id: "oikis-koe-7-q23",
          prompt: "Oikein vai väärin: Tiedonhallintalain mukaan tiedonhallintayksikön johdon tuolee huolehtia siitä, että tiedonhallintayksikössä on asianmukaiset työvälineet.",
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
          explanation: "Tiedonhallintalain 4 §:n 2 momentin 4 kohdan mukaan tiedonhallintayksikön johdon on huolehdittava, että tiedonhallintayksikössä on asianmukaiset työvälineet tiedonhallintaa koskevien velvollisuuksien toteuttamiseksi (s. 18).",
        },

        {
          id: "oikis-koe-7-q24",
          prompt: "Voiko kunnan hallintosääntö ohittaa tiedonhallintalain velvoitteet?",
          options: [
            {
              id: "a",
              text: "Kyllä, koska kunnalla on itsehallinto.",
            },
            {
              id: "b",
              text: "Ei, hallintosääntö on alempiasteinen säädös ja sen on oltava sopusoinnussa lain kanssa.",
            },
            {
              id: "c",
              text: "Vain jos valtuusto tekee yksimielisen päätöksen.",
            },
            {
              id: "d",
              text: "Kyllä, jos kyse on vain varhaiskasvatuksen tiedoista.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Hallintosääntö on kunnan sisäinen normi, joka ei voi kumota valtakunnallista lainsäädäntöä, kuten tiedonhallintalakia (s. 3-4). Tämä täytyy hieman osata lukea rivien välistä osittain ja ymmärtää oikeusjärjestystä kokonaisuutena.",
        },

        {
          id: "oikis-koe-7-q25",
          prompt: "Oikein vai väärin: Tietosuojavastaavan tehtävä on nimenomaan seurata tietosuoja-asetuksen noudattamista.",
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
          explanation: "Tietosuojavastaavan tehtävä on siten valvoa eikä seurata tietosuoja-asetuksen noudattamista (s. 18, taulukko 1)",
        },

        {
          id: "oikis-koe-7-q26",
          prompt: "Mikä on artikkelin pääjohtopäätös tiedonhallinnan organisoinnista kunnassa?",
          options: [
            {
              id: "a",
              text: "Se on yksinkertaista ja selkeää.",
            },
            {
              id: "b",
              text: "Kunnat eivät tarvitse tiedonhallintamallia.",
            },
            {
              id: "c",
              text: "Se vaatii lakisääteisten roolien ja kunnan oman hallintosäännön tarkkaa yhteensovittamista.",
            },
            {
              id: "d",
              text: "Kaikki vastuu tulisi siirtää suoraan valtiolle.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Artikkelin mukaan tiedonhallinnan säädösten moninaisuus ja kunnan itsehallinto edellyttävät huolellista analyysia vastuista ja rooleista (kappale 8, johtopäätökset).",
        },

      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
