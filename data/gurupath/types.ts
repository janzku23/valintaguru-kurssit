import type { CourseId } from "@/data/courses";

export type GuruPathNodeType = "challenge" | "vault";

export type GuruPathNode = {
  /**
   * Pysyvä GuruPath-solmun ID.
   * Älä vaihda ID:tä sen jälkeen, kun käyttäjät ovat aloittaneet polun,
   * koska suoritus tallennetaan tällä tunnisteella.
   */
  id: string;

  /**
   * Nykyisen courseContent.quizQuestions-taulukon kysymyksen ID.
   * Esim. "g-q1", "oikis-q2", "yo-q1".
   */
  questionId: string;

  title: string;
  type?: GuruPathNodeType;

  /**
   * Sijainti kartalla prosentteina 0–100.
   */
  x: number;
  y: number;

  /**
   * Seuraavien solmujen ID:t.
   */
  next: string[];

  /**
   * Palkinto. Tavallinen solmu oletuksena 35 XP / 30 score.
   * Vault oletuksena 100 XP / 100 score.
   */
  xp?: number;
  score?: number;
};

export type GuruPathSection = {
  id: string;
  title: string;
  description: string;
  nodes: GuruPathNode[];

  /**
   * Jos määritetty, osio avautuu vasta kun nämä osiot ovat valmiita.
   */
  requiresSections?: string[];
};

export type GuruPathCourse = {
  courseId: CourseId;
  title: string;
  description: string;
  sections: GuruPathSection[];
};
