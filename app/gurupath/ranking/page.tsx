import GuruLeaderboard from "@/components/gurupath/GuruLeaderboard";

export default function GuruPathRankingPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6">
      <div className="mx-auto mb-5 w-full max-w-5xl">
        <a
          href="/gurupath"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
        >
          ← Takaisin GuruPeliin
        </a>
      </div>

      <GuruLeaderboard />
    </main>
  );
}
