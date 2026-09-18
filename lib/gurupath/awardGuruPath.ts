import type { GuruAwardRequest } from "./types";

export async function awardGuruPath(input: GuruAwardRequest) {
  const response = await fetch("/api/gurupath/award", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error ?? "GuruPath-palkinnon tallennus epäonnistui.");
  }

  return data as {
    awarded: boolean;
    profile: {
      level: number;
      xp: number;
      lifetime_xp: number;
      total_score: number;
    };
  };
}
