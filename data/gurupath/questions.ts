import type {
  GuruGameId,
  GuruGameQuestion,
} from "./types";

/**
 * ============================================================
 * GURUPELI – AINOA KYSYMYSPANKKI
 * ============================================================
 *
 * GuruPeli hakee kaikki kysymykset vain tästä tiedostosta.
 *
 * EI enää:
 * - data/courseContent
 * - quizQuestions
 * - questionSource: "course"
 * - vanhoja oikis-q1 / g-q1 -viittauksia
 *
 * Uuden tehtävän lisääminen:
 *
 * placements: {
 *   oikis: 12,
 *   "valintakoe-g": 8,
 * }
 *
 * tarkoittaa:
 * - sama tehtävä on Oikiksessa taso 12
 * - sama tehtävä on Valintakoe G:ssä taso 8
 */

export const guruGameQuestions: GuruGameQuestion[] = [
  /**
   * 1. TAVALLINEN MONIVALINTA
   */
  {
    id: "guru-demo-mc-001",
    type: "multiple-choice",

    title: "Johtopäätös aineistosta",

    prompt:
      "Kaikki ryhmän A jäsenet kuuluvat ryhmään B. Mikä seuraavista voidaan päätellä varmasti?",

    answers: [
      {
        id: "a",
        text: "Kaikki ryhmän A jäsenet kuuluvat ryhmään B.",
      },
      {
        id: "b",
        text: "Kaikki ryhmän B jäsenet kuuluvat ryhmään A.",
      },
      {
        id: "c",
        text: "Ryhmät A ja B ovat yhtä suuria.",
      },
      {
        id: "d",
        text: "Ryhmällä B ei voi olla muita jäseniä.",
      },
    ],

    correctAnswerIds: ["a"],

    explanation:
      "Annetusta tiedosta seuraa varmasti vain se, että kaikki A:n jäsenet kuuluvat B:hen.",

    points: 1,

    placements: {
      oikis: 1,
      "valintakoe-g": 1,
    },
  },

  /**
   * 2. TAVALLINEN OIKEIN / VÄÄRIN
   */
  {
    id: "guru-demo-tf-001",
    type: "true-false",

    title: "Oikein vai väärin",

    prompt:
      "Aineistotehtävässä vastaus voidaan perustaa myös sellaiseen tietoon, jota aineistossa ei ole annettu.",

    answers: [
      {
        id: "true",
        text: "Oikein",
      },
      {
        id: "false",
        text: "Väärin",
      },
    ],

    correctAnswerIds: ["false"],

    explanation:
      "Aineistotehtävässä vastauksen tulee perustua annettuun aineistoon, ellei tehtävänannossa nimenomaisesti muuta edellytetä.",

    points: 1,

    placements: {
      oikis: 2,
      "valintakoe-g": 2,
    },
  },

  /**
   * 3. LUETUN YMMÄRTÄMINEN + MONIVALINTA
   */
  {
    id: "guru-demo-reading-mc-001",
    type: "reading-comprehension",

    title: "Luetun ymmärtäminen",

    prompt:
      "Mikä oli Aurora-ryhmän ensisijainen tavoite?",

    answers: [
      {
        id: "a",
        text: "Lyhentää hakemusten käsittelyaikaa.",
      },
      {
        id: "b",
        text: "Lisätä kokousten määrää.",
      },
      {
        id: "c",
        text: "Vähentää hakemusten määrää.",
      },
      {
        id: "d",
        text: "Keskeyttää toiminta tarkastelujakson jälkeen.",
      },
    ],

    correctAnswerIds: ["a"],

    explanation:
      "Tekstissä Aurora-ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen.",

    points: 1,

    reading: {
      seconds: 30,

      answerMode: "multiple-choice",

      text:
        "Aurora-ryhmä aloitti toimintansa keväällä. Ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen ilman, että arvioinnin laatua heikennetään. Ryhmä päätti kokoontua kerran viikossa ja seurata käsittelyaikoja kuukausittain. Ensimmäisen kolmen kuukauden aikana hakemusten määrä kasvoi, mutta keskimääräinen käsittelyaika lyheni. Ryhmä päätti jatkaa samaa toimintamallia seuraavan tarkastelujakson ajan.",
    },

    placements: {
      oikis: 3,
      "valintakoe-g": 3,
    },
  },

  /**
   * 4. LUETUN YMMÄRTÄMINEN + OIKEIN / VÄÄRIN
   */
  {
    id: "guru-demo-reading-tf-001",
    type: "reading-comprehension",

    title: "Muista yksityiskohta",

    prompt:
      "Tekstin mukaan helmikuun asiakasmäärä oli suurempi kuin maaliskuun asiakasmäärä.",

    answers: [
      {
        id: "true",
        text: "Oikein",
      },
      {
        id: "false",
        text: "Väärin",
      },
    ],

    correctAnswerIds: ["true"],

    explanation:
      "Helmikuussa asiakkaita oli 145 ja maaliskuussa 138.",

    points: 1,

    reading: {
      seconds: 30,

      answerMode: "true-false",

      text:
        "Yksikön asiakasmäärä oli tammikuussa 120. Helmikuussa määrä nousi 145 asiakkaaseen. Maaliskuussa määrä laski 138 asiakkaaseen. Huhtikuun asiakasmäärää ei vielä ollut raportin laatimishetkellä vahvistettu.",
    },

    placements: {
      oikis: 4,
      "valintakoe-g": 4,
    },
  },

  /**
   * 5. LUETUN YMMÄRTÄMINEN + VÄITTÄMÄ
   *
   * Käyttöliittymä on vastaava kuin oikein/väärin,
   * mutta sanamuoto on väittämätyylinen.
   */
  {
    id: "guru-demo-reading-statement-001",
    type: "reading-comprehension",

    title: "Arvioi väittämä",

    prompt:
      "Väittämä: Ryhmän toimintamallia päätettiin muuttaa heti ensimmäisen tarkastelujakson jälkeen.",

    answers: [
      {
        id: "true",
        text: "Väittämä pitää paikkansa",
      },
      {
        id: "false",
        text: "Väittämä ei pidä paikkaansa",
      },
    ],

    correctAnswerIds: ["false"],

    explanation:
      "Tekstin mukaan ryhmä päätti jatkaa samaa toimintamallia myös seuraavan tarkastelujakson ajan.",

    points: 1,

    reading: {
      seconds: 30,

      answerMode: "statement",

      text:
        "Seurantaryhmä otti tammikuussa käyttöön uuden toimintamallin. Ensimmäisen tarkastelujakson aikana käsittelyajat lyhenivät ja keskeneräisten asioiden määrä väheni. Ryhmä arvioi tulokset maaliskuun lopussa. Tulosten perusteella toimintamallia ei muutettu, vaan sitä päätettiin jatkaa samanlaisena myös seuraavan tarkastelujakson ajan.",
    },

    placements: {
      oikis: 5,
      "valintakoe-g": 5,
    },
  },
];

/**
 * Hakee yhden kysymyksen ID:n perusteella.
 */
export function getGuruGameQuestion(
  questionId: string
): GuruGameQuestion | null {
  return (
    guruGameQuestions.find(
      (question) =>
        question.id === questionId
    ) ?? null
  );
}

/**
 * Hakee kaikki tietylle GuruPelille kuuluvat kysymykset
 * ja järjestää ne placements-numeron perusteella.
 */
export function getGuruGameQuestionsForGame(
  gameId: GuruGameId
): Array<{
  question: GuruGameQuestion;
  order: number;
}> {
  return guruGameQuestions
    .flatMap((question) => {
      const order =
        question.placements[gameId];

      if (
        typeof order !== "number"
      ) {
        return [];
      }

      return [
        {
          question,
          order,
        },
      ];
    })
    .sort(
      (a, b) =>
        a.order - b.order
    );
}
