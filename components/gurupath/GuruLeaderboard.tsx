"use client";

import { useEffect, useMemo, useState } from "react";
import type { GuruLeaderboardRow, GuruProfile } from "@/lib/gurupath/types";
import { xpNeededForLevel } from "@/lib/gurupath/config";

function Medal({ rank }: { rank: number }) {
  if (rank === 1) return <span aria-label="1. sija">🥇</span>;
  if (rank === 2) return <span aria-label="2. sija">🥈</span>;
  if (rank === 3) return <span aria-label="3. sija">🥉</span>;
  return <span className="text-slate-500">#{rank}</span>;
}

export default function GuruLeaderboard() {
  const [profile, setProfile] = useState<GuruProfile | null>(null);
  const [rows, setRows] = useState<GuruLeaderboardRow[]>([]);
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function refresh() {
    setLoading(true);
    setMessage("");

    const [profileRes, boardRes] = await Promise.all([
      fetch("/api/gurupath/profile", { cache: "no-store" }),
      fetch("/api/gurupath/leaderboard", { cache: "no-store" }),
    ]);

    const profileJson = await profileRes.json();
    const boardJson = await boardRes.json();

    if (profileRes.ok && profileJson.profile) {
      setProfile(profileJson.profile);
      setName(profileJson.profile.display_name ?? "");
      setIsPublic(profileJson.profile.is_public ?? false);
    }

    if (boardRes.ok) {
      setRows(boardJson.leaderboard ?? []);
    }

    if (!profileRes.ok) {
      setMessage(profileJson.error ?? "Profiilia ei voitu hakea.");
    } else if (!boardRes.ok) {
      setMessage(boardJson.error ?? "Rankingia ei voitu hakea.");
    }

    setLoading(false);
  }

  useEffect(() => {
    void refresh();
  }, []);

  const myRank = useMemo(() => {
    if (!profile?.display_name || !profile.is_public) return null;
    return rows.find(
      (row) =>
        row.display_name.toLocaleLowerCase("fi") ===
        profile.display_name?.toLocaleLowerCase("fi")
    )?.rank ?? null;
  }, [rows, profile]);

  const nextLevelXp = profile ? xpNeededForLevel(profile.level) : 250;
  const levelProgress = profile
    ? Math.min(100, Math.max(0, (profile.xp / nextLevelXp) * 100))
    : 0;

  async function saveProfile(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const response = await fetch("/api/gurupath/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        displayName: name,
        isPublic,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data?.error ?? "Tallennus epäonnistui.");
      setSaving(false);
      return;
    }

    setProfile(data.profile);
    setMessage(
      data.profile.is_public
        ? "Nimimerkki näkyy nyt rankingissa."
        : "Ranking-näkyvyys on pois päältä."
    );
    setSaving(false);
    await refresh();
  }

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_.8fr] md:p-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
              GuruPath
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Ranking
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Etene millä tahansa ValintaGuru-kurssilla. Rankingissa näkyy vain
              itse valitsemasi nimimerkki – ei sähköpostia tai oikeaa nimeäsi.
            </p>

            {profile && (
              <div className="mt-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-500">
                      Oma tasosi
                    </div>
                    <div className="text-4xl font-black text-slate-950">
                      {profile.level}
                    </div>
                  </div>
                  <div className="text-right text-sm text-slate-600">
                    <div>{profile.xp.toLocaleString("fi-FI")} XP tällä tasolla</div>
                    <div>{profile.lifetime_xp.toLocaleString("fi-FI")} XP yhteensä</div>
                  </div>
                </div>

                <div
                  className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100"
                  aria-label={`Tason eteneminen ${Math.round(levelProgress)} %`}
                >
                  <div
                    className="h-full rounded-full bg-blue-600 transition-[width]"
                    style={{ width: `${levelProgress}%` }}
                  />
                </div>

                <div className="mt-2 flex justify-between text-xs font-semibold text-slate-500">
                  <span>Taso {profile.level}</span>
                  <span>{nextLevelXp.toLocaleString("fi-FI")} XP → seuraava taso</span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={saveProfile}
            className="rounded-2xl bg-slate-50 p-5"
          >
            <h2 className="text-lg font-black text-slate-950">
              Ranking-profiili
            </h2>

            <label className="mt-4 block text-sm font-bold text-slate-700">
              Nimimerkki
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={24}
              placeholder="Esim. Guru2026"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="mt-1 h-5 w-5"
              />
              <span>
                <span className="block text-sm font-bold text-slate-900">
                  Näytä minut rankingissa
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-500">
                  Vain nimimerkki, taso ja pisteet julkaistaan.
                </span>
              </span>
            </label>

            <button
              type="submit"
              disabled={saving || loading}
              className="mt-4 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Tallennetaan…" : "Tallenna"}
            </button>

            {message && (
              <p className="mt-3 text-sm font-semibold text-slate-600" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 md:px-7">
          <div>
            <h2 className="text-xl font-black text-slate-950">
              Ennätystaulukko
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Suurin saavutettu taso ratkaisee. XP toimii tasatilanteen ratkaisijana.
            </p>
          </div>

          {myRank && (
            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
              Oma sijoitus #{myRank}
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="bg-slate-50 text-left text-xs font-black uppercase tracking-wider text-slate-500">
                <th className="px-5 py-3 md:px-7">Sija</th>
                <th className="px-5 py-3">Pelaaja</th>
                <th className="px-5 py-3 text-right">Ennätystaso</th>
                <th className="px-5 py-3 text-right md:px-7">XP</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-7 py-10 text-center text-sm text-slate-500">
                    Ladataan rankingia…
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-7 py-10 text-center text-sm text-slate-500">
                    Rankingissa ei ole vielä pelaajia.
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr
                    key={`${row.rank}-${row.display_name}`}
                    className="border-t border-slate-100"
                  >
                    <td className="px-5 py-4 text-sm font-black md:px-7">
                      <Medal rank={row.rank} />
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {row.display_name}
                    </td>
                    <td className="px-5 py-4 text-right font-black text-slate-950">
                      {row.best_level}
                    </td>
                    <td className="px-5 py-4 text-right text-sm font-semibold text-slate-600 md:px-7">
                      {Number(row.lifetime_xp).toLocaleString("fi-FI")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
