import type {
  GuruGameQuestion,
  GuruGameId,
} from "./types";

/**
 * ============================================================
 * GURUPELI – YHTEINEN TEHTÄVÄPANKKI
 * ============================================================
 *
 * Uudet GuruPeli-tehtävät lisätään tähän.
 *
 * Sama tehtävä voidaan antaa molemmille peleille eri
 * järjestysnumerolla:
 *
 * placements: {
 *   oikis: 40,
 *   "valintakoe-g": 32,
 * }
 *
 * Et tarvitse cloneGuruPathia, x/y-koordinaatteja tai next-linkkejä.
 */

export const guruGameQuestions:
  GuruGameQuestion[] = [
    {
      id: "guru-mc-01",
      type: "multiple-choice",
      title:
        "Johtopäätös aineistosta",
      prompt:
        "Aineiston mukaan kaikki ryhmän A jäsenet kuuluvat ryhmään B. Mikä seuraavista seuraa tästä varmasti?",
      answers: [
        {
          id: "a",
          text:
            "Jokainen ryhmän A jäsen kuuluu ryhmään B.",
        },
        {
          id: "b",
          text:
            "Jokainen ryhmän B jäsen kuuluu ryhmään A.",
        },
        {
          id: "c",
          text:
            "Ryhmät A ja B ovat aina yhtä suuria.",
        },
        {
          id: "d",
          text:
            "Ryhmällä B ei voi olla muita jäseniä.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Annetusta tiedosta seuraa vain, että A:n jäsenet kuuluvat B:hen.",
      points: 35,
      placements: {
        oikis: 13,
        "valintakoe-g": 4,
      },
    },

    {
      id: "guru-tf-01",
      type: "true-false",
      title:
        "Aineistoon perustuva väite",
      prompt:
        "Oikein vai väärin: Jos aineistossa ei anneta tietoa väitteen tueksi, väitettä ei tule päätellä pelkän oletuksen perusteella.",
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
      correctAnswerIds: [
        "true",
      ],
      explanation:
        "Aineistotehtävässä johtopäätösten tulee perustua annettuun tietoon.",
      points: 35,
      placements: {
        oikis: 14,
        "valintakoe-g": 5,
      },
    },

    {
      id: "guru-reading-01",
      type:
        "reading-comprehension",
      title:
        "Muista tekstin yksityiskohta",
      prompt:
        "Mikä oli tekstissä mainitun Aurora-ryhmän ensisijainen tavoite?",
      answers: [
        {
          id: "a",
          text:
            "Lyhentää käsittelyaikaa.",
        },
        {
          id: "b",
          text:
            "Lisätä kokousten määrää.",
        },
        {
          id: "c",
          text:
            "Vähentää ryhmän jäsenten määrää.",
        },
        {
          id: "d",
          text:
            "Siirtää päätökset seuraavalle vuodelle.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Tekstissä ensisijaiseksi tavoitteeksi nimettiin käsittelyajan lyhentäminen.",
      points: 50,
      reading: {
        seconds: 75,
        answerMode:
          "multiple-choice",
        text:
          "Kuvitteellinen Aurora-ryhmä aloitti toimintansa keväällä. Ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen ilman, että arvioinnin laatua heikennetään. Ryhmä päätti kokoontua kerran viikossa ja seurata käsittelyaikoja kuukausittain. Ensimmäisen kolmen kuukauden aikana hakemusten määrä kasvoi, mutta keskimääräinen käsittelyaika lyheni. Ryhmä päätti jatkaa samaa toimintamallia vielä seuraavan tarkastelujakson ajan.",
      },
      placements: {
        oikis: 15,
        "valintakoe-g": 6,
      },
    },

    {
      id: "guru-reading-02",
      type:
        "reading-comprehension",
      title:
        "Luetun ymmärtämisen väittämä",
      prompt:
        "Väittämä: Seurantajakson aikana yksikön asiakasmäärä kasvoi jokaisena kuukautena.",
      answers: [
        {
          id: "true",
          text:
            "Väittämä pitää paikkansa",
        },
        {
          id: "false",
          text:
            "Väittämä ei pidä paikkaansa",
        },
      ],
      correctAnswerIds: [
        "false",
      ],
      explanation:
        "Maaliskuussa asiakasmäärä laski helmikuun tasosta.",
      points: 50,
      reading: {
        seconds: 90,
        answerMode:
          "statement",
        text:
          "Kuvitteellisen yksikön asiakasmäärä oli tammikuussa 120. Helmikuussa määrä nousi 145 asiakkaaseen. Maaliskuussa määrä laski 138 asiakkaaseen, vaikka yksikön kokonaiskysyntä pysyi alkuvuotta korkeammalla tasolla. Huhtikuussa yksikkö muutti ajanvarauskäytäntöään, mutta huhtikuun asiakasmäärää ei vielä ollut raportin laatimishetkellä vahvistettu.",
      },
      placements: {
        oikis: 16,
        "valintakoe-g": 7,
      },
    },
  ];

export function getSharedGuruQuestion(
  questionId: string
): GuruGameQuestion | null {
  return (
    guruGameQuestions.find(
      (question) =>
        question.id ===
        questionId
    ) ?? null
  );
}

export function getSharedGuruQuestionsForGame(
  gameId: GuruGameId
): Array<{
  question: GuruGameQuestion;
  order: number;
}> {
  return guruGameQuestions
    .flatMap((question) => {
      const order =
        question.placements[
          gameId
        ];

      if (
        typeof order !==
        "number"
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
        a.order -
        b.order
    );
}
