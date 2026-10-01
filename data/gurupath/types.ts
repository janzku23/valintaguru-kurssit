import type { CourseId } from "@/data/courses";

export type GuruGameId =
  | "oikis"
  | "valintakoe-g";

export type GuruPathNodeType =
  | "challenge"
  | "vault";

export type GuruQuestionSource =
  | "course"
  | "shared";

export type GuruGameQuestionType =
  | "multiple-choice"
  | "true-false"
  | "reading-comprehension";

export type GuruGameAnswerMode =
  | "multiple-choice"
  | "true-false"
  | "statement";

export type GuruGameAnswer = {
  id: string;
  text: string;
};

export type GuruGameQuestion = {
  /**
   * Pysyvä tehtävän ID.
   * Älä vaihda tätä julkaisun jälkeen.
   */
  id: string;

  type: GuruGameQuestionType;

  /**
   * Kartalla näkyvä lyhyt nimi.
   */
  title: string;

  /**
   * Varsinainen kysymys.
   */
  prompt: string;

  answers: GuruGameAnswer[];
  correctAnswerIds: string[];
  explanation: string;

  /**
   * Oikeasta vastauksesta saatavat pisteet.
   */
  points?: number;

  /**
   * Vain luetun ymmärtämisen tehtävissä.
   */
  reading?: {
    text: string;
    seconds: number;
    answerMode: GuruGameAnswerMode;
  };

  /**
   * Mille GuruPelille kysymys kuuluu ja millä tasolla.
   *
   * Esimerkki:
   * placements: {
   *   oikis: 40,
   *   "valintakoe-g": 32,
   * }
   */
  placements: Partial<
    Record<GuruGameId, number>
  >;
};

export type GuruPathNode = {
  /**
   * Pysyvä tason ID.
   */
  id: string;

  questionId: string;

  /**
   * course = vanha courseContent.quizQuestions-kysymys
   * shared = questions.ts:n yhteinen GuruPeli-kysymys
   */
  questionSource:
    | GuruQuestionSource;

  title: string;

  /**
   * Tason järjestys pelissä.
   * 1 = ensimmäinen taso.
   */
  order: number;

  type?: GuruPathNodeType;

  points: number;
};

export type GuruPathCourse = {
  gameId: GuruGameId;
  title: string;
  description: string;
  levels: GuruPathNode[];
};

/**
 * GuruGameId on tarkoituksella CourseId:n alijoukko:
 * molemmat canonical-pelit tallentavat edistymisen nykyisiin
 * course_id-arvoihin "oikis" ja "valintakoe-g".
 */
export type GuruGameCourseId =
  Extract<CourseId, GuruGameId>;
