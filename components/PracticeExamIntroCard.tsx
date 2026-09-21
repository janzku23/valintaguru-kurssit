export type PracticeExamCourseId =
  | "oikis"
  | "valintakoe-g"
  | "oikis-teho"
  | "oikis-teho-etaope";

export const UNSURE_ANSWER_ID = "__unsure__";

export type PracticeExamOption = {
  id: string;
  text: string;
};

export type PracticeExamQuestion = {
  id: string;
  prompt: string;
  options: PracticeExamOption[];

  /**
   * Nykyisen koemoottorin vanha yhden oikean vastauksen kenttä.
   * Pidetään mukana, jotta nykyiset oikis.ts ja valintakoeG.ts eivät hajoa.
   */
  correctAnswerId: string;

  /**
   * Käytä tätä, jos kysymyksessä on useampi oikea vastaus.
   * Jos kenttää ei ole, oikea vastaus on [correctAnswerId].
   */
  correctAnswerIds?: string[];

  explanation?: string;
};

export type PracticeExamSection = {
  id: string;
  title: string;
  description?: string;
  questions: PracticeExamQuestion[];
};

export type PracticeExam = {
  id: string;
  version: number;
  courseId: PracticeExamCourseId;
  title: string;
  description: string;
  durationMinutes: number;

  /**
   * Valinnainen ennakkomateriaalin/artikkelin linkki.
   */
  articleUrl?: string;

  sections: PracticeExamSection[];
};

export type PublicPracticeExam = {
  id: string;
  version: number;
  courseId: PracticeExamCourseId;
  title: string;
  description: string;
  durationMinutes: number;
  questionCount: number;
  articleUrl?: string;
  sections: Array<{
    id: string;
    title: string;
    description?: string;
    questions: Array<{
      id: string;
      prompt: string;
      options: PracticeExamOption[];

      /**
       * Frontend voi tämän avulla päättää käytetäänkö radio- vai checkbox-valintaa.
       */
      allowsMultipleAnswers: boolean;
    }>;
  }>;
};

/**
 * Palauttaa kysymyksen kaikki oikeat vastaus-ID:t yhtenäisessä muodossa.
 */
export function getCorrectAnswerIds(
  question: PracticeExamQuestion
): string[] {
  if (
    Array.isArray(question.correctAnswerIds) &&
    question.correctAnswerIds.length > 0
  ) {
    return question.correctAnswerIds;
  }

  return [question.correctAnswerId];
}
