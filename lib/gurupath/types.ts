export type GuruProfile = {
  user_id: string;
  display_name: string | null;
  is_public: boolean;
  level: number;
  xp: number;
  lifetime_xp: number;
  best_level: number;
  total_score: number;
};

export type GuruLeaderboardRow = {
  rank: number;
  display_name: string;
  best_level: number;
  lifetime_xp: number;
  total_score: number;
};

export type GuruAwardRequest = {
  courseId: string;
  source:
    | "flashcard"
    | "true-false"
    | "multiple-choice"
    | "theory"
    | "path-node"
    | "vault"
    | "daily"
    | "manual";
  sourceId: string;
  xp: number;
  score?: number;
};
