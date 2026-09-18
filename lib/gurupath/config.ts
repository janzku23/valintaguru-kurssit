export type GuruCourseId =
  | "valintakoe-g"
  | "oikis"
  | "yo"
  | "laakis"
  | string;

export type GuruRewardSource =
  | "flashcard"
  | "true-false"
  | "multiple-choice"
  | "theory"
  | "path-node"
  | "vault"
  | "daily"
  | "manual";

export const GURU_REWARDS = {
  flashcardCorrect: { xp: 4, score: 4 },
  trueFalseCorrect: { xp: 5, score: 5 },
  multipleChoiceCorrect: { xp: 7, score: 7 },
  theoryCompleted: { xp: 25, score: 15 },
  pathNodeCompleted: { xp: 35, score: 30 },
  vaultCompleted: { xp: 100, score: 100 },
  dailyCompleted: { xp: 60, score: 50 },
} as const;

export function xpNeededForLevel(level: number) {
  const safeLevel = Math.max(1, Math.floor(level));
  return safeLevel * 250;
}
