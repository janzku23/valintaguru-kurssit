import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_2_ARTICLE_URL =
  "https://journal.fi/lakimies/article/view/163747/119764";

/**
 * Yhteinen Koe 2 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama valmistautumisohjeistus kuin Koe 1:ssä.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - artikkeli kuuluu juuri tähän kokeeseen.
 * - "Jätän vastaamatta" ei ole tavallisena vaihtoehtona, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 * - lähdemateriaalissa numerointi hyppää kysymyksestä 8 kysymykseen 10.
 *   Kysymystä 9 ei ole lisätty omasta päästä.
 * - usean oikean vastauksen kysymyksiä ovat 14, 16, 20, 21 ja 25.
 */
export const oikisTehoExam2 = {
  id: "koe-2",
  version: 1,
  title: "Harjoitustentti 2",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_2_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 2:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_2_ARTICLE_URL,
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
      id: "koe-2-kysymykset",
      title:
        "Koe 2 – Merkittävä julkinen valta ja delegointikielto",

      questions: [
        {
          id: "oikis-koe-2-q1",
          prompt:
            "Mitä PL 124 § ensisijaisesti rajoittaa?",
          options: [
            {
              id: "a",
              text: "Lainsäädäntövaltaa",
            },
            {
              id: "b",
              text: "Julkisen hallintotehtävän siirtämistä",
            },
            {
              id: "c",
              text: "Tuomiovaltaa",
            },
            {
              id: "d",
              text: "Budjettivaltaa",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Perustuslain 124 § ilmentää virkamieshallintoperiaatetta julkisten hallintotehtävien organisoinnin lähtökohtana. Säännöksen ensimmäinen virke sallii virkamieshallintoperiaatteesta poikkeamisen ja mahdollistaa julkisen hallintotehtävän antamisen muulle kuin viranomaiselle lailla tai lain nojalla. Säännös edellyttää lisäksi, että julkisen hallintotehtävän antaminen muulle kuin viranomaiselle on tarpeen tehtävän tarkoituksenmukaiseksi hoitamiseksi eikä antaminen saa vaarantaa perusoikeuksia, oikeusturvaa tai muita hyvän hallinnon vaatimuksia (s. 1103).",
        },

        {
          id: "oikis-koe-2-q2",
          prompt:
            "Mikä seuraavista on oikein? Merkittävää julkista valtaa ei saa siirtää…",
          options: [
            {
              id: "a",
              text: "Toiselle viranomaiselle",
            },
            {
              id: "b",
              text: "Eduskunnalle",
            },
            {
              id: "c",
              text: "Yksityiselle henkilölle",
            },
            {
              id: "d",
              text: "Ministeriölle",
            },
          ],
          correctAnswerId: "c",
          explanation:
            "Mikäli tehtävän arvioidaan sisältävän merkittävää julkisen vallan käyttöä, sitä ei voida antaa muulle kuin viranomaiselle tavallisen lain säätämisjärjestyksessä (s. 1103).",
        },

        {
          id: "oikis-koe-2-q3",
          prompt:
            "Mitä seuraavista julkisen hallintotehtävän siirto edellyttää?",
          options: [
            {
              id: "a",
              text: "Ministerin päätöstä",
            },
            {
              id: "b",
              text: "Asetusta",
            },
            {
              id: "c",
              text: "Lakia",
            },
            {
              id: "d",
              text: "Ohjetta",
            },
          ],
          correctAnswerId: "c",
          explanation:
            "Mikäli tehtävän arvioidaan sisältävän merkittävää julkisen vallan käyttöä, sitä ei voida antaa muulle kuin viranomaiselle tavallisen lain säätämisjärjestyksessä (s. 1103).",
        },

        {
          id: "oikis-koe-2-q4",
          prompt:
            "Mitä tarkoitetaan artikkelissa delegointikiellolla?",
          options: [
            {
              id: "a",
              text: "Julkista valtaa ei saa delegoida",
            },
            {
              id: "b",
              text: "Ehdottomaksi muotoiltua ulkoistamisen oikeudellista estettä",
            },
            {
              id: "c",
              text: "Julkista valtaa saa delegoida ainoastaan valtion virkamiehille",
            },
            {
              id: "d",
              text: "Ulkoistamisen esteet on kirjattava perustuslakiin",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Ehdottomaksi muotoiltua ulkoistamisen oikeudellista estettä kutsun artikkelissa delegointikielloksi (s. 1103).",
        },

        {
          id: "oikis-koe-2-q5",
          prompt:
            "Mikä seuraavista vaihtoehdoista on oikein? Julkisen vallan käytön merkittävyyden arviointi on:",
          options: [
            {
              id: "a",
              text: "Automaattista",
            },
            {
              id: "b",
              text: "Tapauskohtaista",
            },
            {
              id: "c",
              text: "Taloudellista",
            },
            {
              id: "d",
              text: "Poliittista",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Julkisen vallan käytön merkittävyyttä arvioidaan hänen mukaansa löyhemmin niissä tilanteissa, joissa tehokkuuden, vaivattomuuden tai liiketalouden intressit ovat suuremmat (s. 1107).",
        },

        {
          id: "oikis-koe-2-q6",
          prompt:
            "Mitä seuraavista julkisen vallan delegointi ei saa vaarantaa?",
          options: [
            {
              id: "a",
              text: "Julkisuuskuvaa",
            },
            {
              id: "b",
              text: "Perusoikeuksia",
            },
            {
              id: "c",
              text: "Hallinnon tehokkuutta",
            },
            {
              id: "d",
              text: "Poliittista ohjausta",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Delegointikielto pidättää merkittävän julkisen vallan käytön vain viranomaisilla perusoikeuksien ja oikeusvaltioperiaatteen toteutumisen turvaamiseksi (s. 1104).",
        },

        {
          id: "oikis-koe-2-q7",
          prompt:
            "Mikä seuraavista väittämistä on oikein?",
          options: [
            {
              id: "a",
              text: "Julkisen vallan käyttö voi olla vain oikeudellista",
            },
            {
              id: "b",
              text: "Julkisen vallan käyttö voi olla myös tosiasiallista",
            },
            {
              id: "c",
              text: "Julkisen vallan käyttö voi olla ainoastaan taloudellista",
            },
            {
              id: "d",
              text: "Julkisen vallan käyttö voi olla symbolista",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Julkinen hallintotehtävä on kattokäsite: se voi sisältää myös julkisen vallan käyttöä, joka puolestaan voi sisältää merkittävää julkisen vallan käyttöä. Merkittävän julkisen vallan käytön delegointikielto. Käsitteet kattavat sekä määrämuotoisen että tosiasiallisen hallintotoiminnan (s. 1108–1109).",
        },

        {
          id: "oikis-koe-2-q8",
          prompt:
            "Oikein vai väärin: Delegointikielto estää kaikkien hallintotehtävien siirron.",
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
          explanation:
            "Muun muassa artikkelin sivulta 1103 käy ilmi, että kielto koskee vain merkittävää julkista valtaa.",
        },

        {
          id: "oikis-koe-2-q10",
          prompt:
            "Mihin seuraavista delegointikielto liittyy?",
          options: [
            {
              id: "a",
              text: "Talousarvioon",
            },
            {
              id: "b",
              text: "Oikeusvaltioperiaatteeseen",
            },
            {
              id: "c",
              text: "Työoikeuteen",
            },
            {
              id: "d",
              text: "Verotukseen",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Delegointikielto turvaa oikeusturvaa (s. 1104).",
        },

        {
          id: "oikis-koe-2-q11",
          prompt:
            "Merkittävä julkinen valta kohdistuu usein:",
          options: [
            {
              id: "a",
              text: "Organisaatioon",
            },
            {
              id: "b",
              text: "Yksilöön",
            },
            {
              id: "c",
              text: "Mediaan",
            },
            {
              id: "d",
              text: "Tutkimukseen",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Tämä käy ilmi useammasta kohdasta artikkelia. Merkittävänä julkisen vallan käyttönä on perustuslain esitöiden mukaan pidettävä ”esimerkiksi itsenäiseen harkintaan perustuvaa oikeutta käyttää voimakeinoja tai puuttua muuten merkittävällä tavalla yksilön perusoikeuksiin” (s. 1109).",
        },

        {
          id: "oikis-koe-2-q12",
          prompt:
            "Oikein vai väärin: Julkinen valta tarkoittaa aina pakkokeinoja.",
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
          explanation:
            "Julkista valtaa voi olla esimerkiksi pelkästään päätös henkilöön liittyvistä oikeuksista. Pakkokeinoja ovat esimerkiksi henkilön kiinniotto tai takavarikko.",
        },

        {
          id: "oikis-koe-2-q13",
          prompt:
            "Oikein vai väärin: Lupapäätösten antaminen on merkittävää julkista vallan käyttöä.",
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
          explanation:
            "Perustuslakivaliokunta on pitänyt merkittävänä julkisen vallan käyttönä myös esimerkiksi passien myöntämistä, rakennuslupa- ja linjaliikennepäätöksiä ja taisteluammuntakoulutusta, eli säännöksen saama sisältö on varsin pistemäinen (s. 1116). HUOM! Tämä teksti on otettu tekstin alaviitteestä. Nekin on hyvä silmäillä materiaalista lävitse.",
        },

        {
          id: "oikis-koe-2-q14",
          prompt:
            "Mitkä seuraavista väittämistä ovat oikein?",
          options: [
            {
              id: "a",
              text: "Julkisen vallan delegointi edellyttää tarkoituksenmukaisuutta",
            },
            {
              id: "b",
              text: "Julkisen vallan delegointi edellyttää oikeudenmukaisuutta",
            },
            {
              id: "c",
              text: "PL 124 §:ssä tulee esiin tarkoituksellisuusperiaate",
            },
            {
              id: "d",
              text: "PL 124 §:ssä tulee esiin oikeusvaltioperiaate",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "d"],
          explanation:
            "Perustuslain 124 § on kuitenkin rajoittavan luonteensa lisäksi myös mahdollistava: Se nimenomaisesti sallii hallinnon kehittämisen hyödyntämällä viranomaiskoneiston ulkopuolisia toimijoita, kun kyse ei ole merkittävästä julkisen vallan käytöstä. Säännöksessä kietoutuvat yhteen oikeusvaltioperiaate ja tarkoituksenmukaisuusvaatimuksen kautta hallinnon tehokkuus, tarpeellisuus ja muu tarkoituksenmukaisuus (s. 1109).",
        },

        {
          id: "oikis-koe-2-q15",
          prompt:
            "Mihin seuraavista merkittävä julkinen valta voi vaikuttaa?",
          options: [
            {
              id: "a",
              text: "Julkisuuskuvaan",
            },
            {
              id: "b",
              text: "Velvollisuuksiin",
            },
            {
              id: "c",
              text: "Median toimintaan",
            },
            {
              id: "d",
              text: "Tutkimukseen",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Julkisen hallintotehtävän käsitteellä perustuslain 124 §:ssä viitataan esitöiden mukaan ”verraten laajaan hallinnollisten tehtävien kokonaisuuteen, johon kuuluu esimerkiksi lakien toimeenpanoa sekä yksityisten henkilöiden ja yhteisöjen oikeuksia, velvollisuuksia ja etuja koskevaan päätöksentekoon liittyviä tehtäviä” (s. 1108).",
        },

        {
          id: "oikis-koe-2-q16",
          prompt:
            "Mitkä seuraavista väittämistä ovat oikein?",
          options: [
            {
              id: "a",
              text: "PL 124 § koskee viranomaisten jo hoitamia tehtäviä.",
            },
            {
              id: "b",
              text: "PL 124 §:n tarkoituksena on korostaa virkamieshallintoperiaatteen ensisijaisuutta.",
            },
            {
              id: "c",
              text: "PL 124 § sallii hallinnon kehittämisen hyödyntämällä viranomaiskoneiston ulkopuolisia toimijoita.",
            },
            {
              id: "d",
              text: "PL 124 §:ssä asetetut rajoitukset ovat oikeusvaltiollisia.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: [
            "a",
            "b",
            "c",
            "d",
          ],
          explanation:
            "Perustuslain 124 § koskee niin viranomaisen jo hoitamia tehtäviä kuin kokonaan uusia tehtäviä (s. 1109). Perustuslain 124 §:n tarkoituksena on korostaa virkamieshallintoperiaatteen ensisijaisuutta (s. 1109). Perustuslain 124 § on kuitenkin rajoittavan luonteensa lisäksi myös mahdollistava: Se nimenomaisesti sallii hallinnon kehittämisen hyödyntämällä viranomaiskoneiston ulkopuolisia toimijoita, kun kyse ei ole merkittävästä julkisen vallan käytöstä (s. 1109). Perustuslain 124 §:ssä asetetut rajoitukset ovatkin luonteeltaan oikeusvaltiollisia (s. 1110).",
        },

        {
          id: "oikis-koe-2-q17",
          prompt:
            "Millä seuraavista perusteista julkisen vallan käytön merkittävyyttä arvioidaan?",
          options: [
            {
              id: "a",
              text: "Päätöksentekijän aseman perusteella",
            },
            {
              id: "b",
              text: "Päätöksen vaikutusten perusteella",
            },
            {
              id: "c",
              text: "Taloudellisen arvon perusteella",
            },
            {
              id: "d",
              text: "Hallinnon koon perusteella",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Julkisen vallan käytön merkittävyyttä arvioidaan hänen mukaansa löyhemmin niissä tilanteissa, joissa tehokkuuden, vaivattomuuden tai liiketalouden intressit ovat suuremmat (s. 1107).",
        },

        {
          id: "oikis-koe-2-q18",
          prompt:
            "Mikä seuraavista kuuluu demokraattiseen oikeusvaltioon?",
          options: [
            {
              id: "a",
              text: "Monarkistinen pyrkimys",
            },
            {
              id: "b",
              text: "Autoritaarinen ohjaus",
            },
            {
              id: "c",
              text: "Presidentiaalinen päätöksenteko",
            },
            {
              id: "d",
              text: "Parlamentaarinen ohjaus ja valvonta",
            },
          ],
          correctAnswerId: "d",
          explanation:
            "Demokraattiseen oikeusvaltioon kuuluu erottamattomana osana hallintotoiminnan parlamentaarinen ohjaus ja valvonta (s. 1111).",
        },

        {
          id: "oikis-koe-2-q19",
          prompt:
            "Kuinka monta perustuslakivaliokunnan lausuntoa Färkkilä on käyttänyt tutkimusaineistonaan?",
          options: [
            {
              id: "a",
              text: "68",
            },
            {
              id: "b",
              text: "77",
            },
            {
              id: "c",
              text: "71",
            },
            {
              id: "d",
              text: "73",
            },
          ],
          correctAnswerId: "c",
          explanation:
            "Tutkimusaineistona on yhteensä 71 perustuslakivaliokunnan lausuntoa, joissa on käsitelty perustuslain 124 §:ää sekä kysymystä julkisen vallan käytön merkittävyydestä säännöksen voimaantulosta vuoden 2025 valtiopäivien kevätistuntokauden loppuun asti (s. 1113).",
        },

        {
          id: "oikis-koe-2-q20",
          prompt:
            "Mitä seuraavista perustuslakivaliokunta on artikkelin mukaan pitänyt merkittävää julkista valtaa sisältävinä tehtävinä?",
          options: [
            {
              id: "a",
              text: "Päiväkotimaksujen määräämistä",
            },
            {
              id: "b",
              text: "Pysyväisluonteiseen asumiseen tarkoitettujen tilojen tarkastaminen",
            },
            {
              id: "c",
              text: "Kurinpitoseuraamusten määrääminen",
            },
            {
              id: "d",
              text: "Hallinnollisten tehtävien määrääminen yhdistyksille",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "c"],
          explanation:
            "Merkittävää julkisen vallan käyttöä sisältävinä tehtävinä perustuslakivaliokunta on pitänyt vakiintuneesti itsenäiseen harkintaan perustuvaa toimivaltaa tarkastaa pysyväisluonteiseen asumiseen tarkoitettuja tiloja sekä määrätä hallinnollisia rahamääräisiä sekä kurinpitoseuraamuksia (s. 1114).",
        },

        {
          id: "oikis-koe-2-q21",
          prompt:
            "Mitkä seuraavista ovat perustuslakivaliokunnan mukaan merkittävää julkisen vallan käyttöä?",
          options: [
            {
              id: "a",
              text: "Tuomita uhkasakko",
            },
            {
              id: "b",
              text: "Valtiontuen maksamisen lopettaminen",
            },
            {
              id: "c",
              text: "Avustuksen myöntämättä jättäminen",
            },
            {
              id: "d",
              text: "Takaisinperinnästä päättäminen",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: [
            "a",
            "b",
            "d",
          ],
          explanation:
            "Merkittävää julkista vallan käyttöä on perustuslakivaliokunnan mukaan itsenäinen toimivalta määrätä hallinnollisia rangaistusluonteisia seuraamusmaksuja, asettaa ja tuomita uhkasakko sekä päättää takaisinperinnästä, valtiontuen maksatuksen keskeyttämisestä ja lopettamisesta sekä sanktioluonteisesta maksun korotuksesta. Puolestaan avustuksen tai tuen myöntämättä jättämistä ei ole pidetty merkittävänä julkisen vallan käyttönä (s. 1115).",
        },

        {
          id: "oikis-koe-2-q22",
          prompt:
            "Oikein vai väärin: Merkittävää julkista valtaa sisältävä tehtävä voidaan antaa muulle kuin viranomaiselle.",
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
          explanation:
            "Merkittävää julkista valtaa sisältävän tehtävän järjestämiseksi virkamieshallintoperiaatteesta poiketen on olemassa intressejä, esimerkiksi resursseihin tai vakiintuneisiin käytäntöihin liittyviä perusteita. Näissä tapauksissa valiokunta on arvioinut, että tehtävä on mahdollista antaa muulle kuin viranomaiselle (s. 1117).",
        },

        {
          id: "oikis-koe-2-q23",
          prompt:
            "Mikä seuraavista voi olla syy virkamieshallintoperiaatteesta poikkeamiseen?",
          options: [
            {
              id: "a",
              text: "Pedagogisten valmiuksien puute virkamieshallinnossa",
            },
            {
              id: "b",
              text: "Resurssit",
            },
            {
              id: "c",
              text: "Yksityisen henkilön pyyntö",
            },
            {
              id: "d",
              text: "Viranomaisten palkkakustannusten säästö",
            },
          ],
          correctAnswerId: "b",
          explanation:
            "Virkamieshallintoperiaatteesta poikkeamista on perusteltu käytännön tarpeen lisäksi voimavarojen kohdentamisella ja toisinaan myös perinteellä (s. 1119).",
        },

        {
          id: "oikis-koe-2-q24",
          prompt:
            "Oikein vai väärin: Myös muulle kuin viranomaiselle voidaan antaa itsenäiseen harkintaan perustuvia voimakeinoja.",
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
          explanation:
            "On mahdollista antaa muulle kuin viranomaiselle itsenäiseen harkintaan perustuvan oikeuden käyttää voimakeinoja tai puuttua muuten merkittävällä tavalla yksilön perusoikeuksiin, jos se on rajattu tarkasti tilaan tai tilanteeseen ja kyse on viranomaisen tilapäisestä tarpeesta saada ulkopuolista apua (s. 1120).",
        },

        {
          id: "oikis-koe-2-q25",
          prompt:
            "Mitkä vallankäytön intensiteettiä kuvaavat kolme intensiteettiä on Keravuori-Ruusanen hahmottanut artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Toimivaltuuksien pysyvyys",
            },
            {
              id: "b",
              text: "Toimivaltuuksien perusoikeusherkkyys",
            },
            {
              id: "c",
              text: "Toimivaltuuksien laatu",
            },
            {
              id: "d",
              text: "Toimivaltuuksien laajuus",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: [
            "b",
            "c",
            "d",
          ],
          explanation:
            "Keravuori-Rusanen on hahmottanut merkittävyyden vallankäytön intensiteettiä kuvaavana määreenä, jossa on tunnistettavissa kolme eri ulottuvuutta: toimivaltuuksien perusoikeusherkkyys, toimivaltuuksien laatu sekä toimivaltuuksien laajuus ja niiden käyttämisen peruste (s. 1122).",
        },

        {
          id: "oikis-koe-2-q26",
          prompt:
            "Oikein vai väärin: Delegointikieltosäännöksen tarkoituksena on luoda virkamieshallintoperiaatteesta joustavampi perusoikeuksien toteutumisen turvaamiseksi.",
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
          explanation:
            "Delegointikieltosäännöksen tarkoituksena on valtiosääntöisesti rajoittaa virkamieshallintoperiaatteesta poikkeamista nimenomaan perusoikeuksien toteutumisen turvaamiseksi (s. 1123).",
        },

        {
          id: "oikis-koe-2-q27",
          prompt:
            "Oikein vai väärin: Valtion vallankäyttömonopolin ytimeen vaikuttaa johdonmukaisimmin ja absoluuttisimmin kuuluvan oikeus puuttua omaisuudensuojaan ja kotirauhansuojaan.",
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
          explanation:
            "Osoitin, että valtion vallankäyttömonopolin ytimeen vaikuttaa johdonmukaisimmin ja absoluuttisimmin kuuluvan oikeus puuttua omaisuudensuojaan ja kotirauhansuojaan, kun taas henkilökohtaiseen koskemattomuuteen ja vapauteen puuttuvan vallankäytön tapauksessa toimivalta on useissa tulkintatilanteissa muotoutunut ei-merkittäväksi formalistisin rajauksin (s. 1127).",
        },
      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
