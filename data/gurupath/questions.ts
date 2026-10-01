import type {
  GuruGameId,
  GuruGameQuestion,
  GuruGameViewId,
  GuruQuestionCategory,
} from "./types";

/**
 * GURUPELI – AINOA KYSYMYSPANKKI
 *
 * Vain Oikis:
 * placements: { oikis: 10 }
 *
 * Vain Valintakoe G:
 * placements: { "valintakoe-g": 10 }
 *
 * Yhteinen:
 * placements: { oikis: 10, "valintakoe-g": 8 }
 *
 * Yhdistetyn pelin sijainti:
 * combinedOrder: 1, 2, 3...
 *
 * Kategoriat saavat olla täysin sekaisin yhdistetyllä polulla.
 */
export const guruGameQuestions: GuruGameQuestion[] = [
  {
    id: "guru-demo-mc-001",
    type: "multiple-choice",
    title: "Johtopäätös aineistosta",
    prompt: "Kaikki ryhmän A jäsenet kuuluvat ryhmään B. Mikä seuraavista voidaan päätellä varmasti?",
    answers: [
      { id: "a", text: "Kaikki ryhmän A jäsenet kuuluvat ryhmään B." },
      { id: "b", text: "Kaikki ryhmän B jäsenet kuuluvat ryhmään A." },
      { id: "c", text: "Ryhmät A ja B ovat yhtä suuria." },
      { id: "d", text: "Ryhmällä B ei voi olla muita jäseniä." },
    ],
    correctAnswerIds: ["a"],
    explanation: "Annetusta tiedosta seuraa varmasti vain se, että kaikki A:n jäsenet kuuluvat B:hen.",
    points: 1,
    placements: { oikis: 1, "valintakoe-g": 1 },
    combinedOrder: 1,
  },
  {
    id: "guru-demo-tf-001",
    type: "true-false",
    title: "Oikein vai väärin",
    prompt: "Oikeudellisessa päättelyssä johtopäätöksen tulee perustua käytettävissä oleviin oikeuslähteisiin ja annettuihin tosiseikkoihin.",
    answers: [
      { id: "true", text: "Oikein" },
      { id: "false", text: "Väärin" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Oikeudellinen argumentaatio perustuu relevantteihin oikeuslähteisiin ja tapauksessa käytettävissä oleviin tosiseikkoihin.",
    points: 1,
    placements: { oikis: 2 },
    combinedOrder: 2,
  },
  {
    id: "guru-demo-reading-mc-001",
    type: "reading-comprehension",
    title: "Luetun ymmärtäminen",
    prompt: "Mikä oli Aurora-ryhmän ensisijainen tavoite?",
    answers: [
      { id: "a", text: "Lyhentää hakemusten käsittelyaikaa." },
      { id: "b", text: "Lisätä kokousten määrää." },
      { id: "c", text: "Vähentää hakemusten määrää." },
      { id: "d", text: "Keskeyttää toiminta tarkastelujakson jälkeen." },
    ],
    correctAnswerIds: ["a"],
    explanation: "Tekstissä Aurora-ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen.",
    points: 1,
    reading: {
      seconds: 30,
      answerMode: "multiple-choice",
      text: "Aurora-ryhmä aloitti toimintansa keväällä. Ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen ilman, että arvioinnin laatua heikennetään. Ryhmä päätti kokoontua kerran viikossa ja seurata käsittelyaikoja kuukausittain. Ensimmäisen kolmen kuukauden aikana hakemusten määrä kasvoi, mutta keskimääräinen käsittelyaika lyheni. Ryhmä päätti jatkaa samaa toimintamallia seuraavan tarkastelujakson ajan.",
    },
    placements: { oikis: 3, "valintakoe-g": 2 },
    combinedOrder: 3,
  },
  {
    id: "guru-demo-reading-tf-001",
    type: "reading-comprehension",
    title: "Muista yksityiskohta",
    prompt: "Tekstin mukaan helmikuun asiakasmäärä oli suurempi kuin maaliskuun asiakasmäärä.",
    answers: [
      { id: "true", text: "Oikein" },
      { id: "false", text: "Väärin" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Helmikuussa asiakkaita oli 145 ja maaliskuussa 138.",
    points: 1,
    reading: {
      seconds: 30,
      answerMode: "true-false",
      text: "Yksikön asiakasmäärä oli tammikuussa 120. Helmikuussa määrä nousi 145 asiakkaaseen. Maaliskuussa määrä laski 138 asiakkaaseen. Huhtikuun asiakasmäärää ei vielä ollut raportin laatimishetkellä vahvistettu.",
    },
    placements: { "valintakoe-g": 3 },
    combinedOrder: 4,
  },
  {
    id: "guru-demo-reading-statement-001",
    type: "reading-comprehension",
    title: "Arvioi väittämä",
    prompt: "Väittämä: Ryhmän toimintamallia päätettiin muuttaa heti ensimmäisen tarkastelujakson jälkeen.",
    answers: [
      { id: "true", text: "Väittämä pitää paikkansa" },
      { id: "false", text: "Väittämä ei pidä paikkaansa" },
    ],
    correctAnswerIds: ["false"],
    explanation: "Tekstin mukaan ryhmä päätti jatkaa samaa toimintamallia myös seuraavan tarkastelujakson ajan.",
    points: 1,
    reading: {
      seconds: 30,
      answerMode: "statement",
      text: "Seurantaryhmä otti tammikuussa käyttöön uuden toimintamallin. Ensimmäisen tarkastelujakson aikana käsittelyajat lyhenivät ja keskeneräisten asioiden määrä väheni. Ryhmä arvioi tulokset maaliskuun lopussa. Tulosten perusteella toimintamallia ei muutettu, vaan sitä päätettiin jatkaa samanlaisena myös seuraavan tarkastelujakson ajan.",
    },
    placements: { oikis: 4, "valintakoe-g": 4 },
    combinedOrder: 5,
  },
];

function isPositiveOrder(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

export function getGuruQuestionCategory(question: GuruGameQuestion): GuruQuestionCategory {
  const hasOikis = isPositiveOrder(question.placements.oikis);
  const hasG = isPositiveOrder(question.placements["valintakoe-g"]);
  if (hasOikis && hasG) return "shared";
  if (hasOikis) return "oikis";
  return "valintakoe-g";
}

function automaticCombinedOrder(question: GuruGameQuestion) {
  const values = [
    question.placements.oikis,
    question.placements["valintakoe-g"],
  ].filter(isPositiveOrder);
  return values.length ? Math.min(...values) : Number.MAX_SAFE_INTEGER;
}

export function getGuruGameQuestion(questionId: string): GuruGameQuestion | null {
  return guruGameQuestions.find((q) => q.id === questionId) ?? null;
}

export function getGuruQuestionSourceId(questionId: string) {
  return `gurupeli:${questionId}`;
}

/** Tunnistaa sekä uuden että vanhan GuruPath-suorituksen samalle kysymykselle. */
export function isCompletedSourceForQuestion(sourceId: string, questionId: string) {
  return sourceId === getGuruQuestionSourceId(questionId) || sourceId.endsWith(`:${questionId}`);
}

export function getGuruGameQuestionsForView(viewId: GuruGameViewId) {
  const seen = new Set<string>();
  const selected = guruGameQuestions
    .filter((question) => {
      if (seen.has(question.id)) return false;
      const belongs =
        viewId === "combined"
          ? isPositiveOrder(question.placements.oikis) || isPositiveOrder(question.placements["valintakoe-g"])
          : isPositiveOrder(question.placements[viewId as GuruGameId]);
      if (belongs) seen.add(question.id);
      return belongs;
    })
    .map((question) => ({
      question,
      category: getGuruQuestionCategory(question),
      sortOrder:
        viewId === "combined"
          ? isPositiveOrder(question.combinedOrder)
            ? question.combinedOrder
            : automaticCombinedOrder(question)
          : question.placements[viewId as GuruGameId]!,
    }));

  return selected.sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    return a.question.id.localeCompare(b.question.id, "fi");
  });
}
