import type { CourseId } from "@/data/courses";

export type GuruGameId = "oikis" | "valintakoe-g";
export type GuruGameViewId = GuruGameId | "combined";
export type GuruPathNodeType = "challenge" | "vault";
export type GuruQuestionCategory = "oikis" | "shared" | "valintakoe-g";
export type GuruGameQuestionType = "multiple-choice" | "true-false" | "reading-comprehension";
export type GuruGameAnswerMode = "multiple-choice" | "true-false" | "statement";

export type GuruGameAnswer = {
  id: string;
  text: string;
};

export type GuruGameQuestion = {
  /** Pysyvä ID. Sama id = sama tehtävä kaikissa GuruPeli-näkymissä. */
  id: string;
  type: GuruGameQuestionType;
  title: string;
  prompt: string;
  answers: GuruGameAnswer[];
  correctAnswerIds: string[];
  explanation: string;
  points?: number;

  /**
   * Kurssikohtainen järjestys.
   * Vain oikis -> vain Oikis.
   * Vain valintakoe-g -> vain Valintakoe G.
   * Molemmat -> yhteinen kysymys.
   */
  placements: Partial<Record<GuruGameId, number>>;

  /**
   * Sijainti yhdistetyssä pelissä.
   * Oikis-, yhteiset- ja G-kysymykset voivat olla täysin sekaisin.
   * Jos puuttuu, järjestys päätellään placements-numeroista.
   */
  combinedOrder?: number;

  reading?: {
    text: string;
    seconds: number;
    answerMode: GuruGameAnswerMode;
  };
};

export type GuruPathNode = {
  id: string;
  questionId: string;
  title: string;
  order: number;
  type?: GuruPathNodeType;
  points: number;
  category: GuruQuestionCategory;
};

export type GuruPathCourse = {
  viewId: GuruGameViewId;
  title: string;
  description: string;
  levels: GuruPathNode[];
};

export type GuruGameAccessSlot = {
  hasAccess: boolean;
  /** Todellinen kaupallinen courseId, jolla käyttöoikeus löytyi. */
  accessCourseId: CourseId | null;
};

export type GuruGameAccessState = {
  oikis: GuruGameAccessSlot;
  valintakoeG: GuruGameAccessSlot;
  viewId: GuruGameViewId | null;
};
