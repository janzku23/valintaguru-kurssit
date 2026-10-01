"use client";

export default function GuruGameTopbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="ValintaGuru etusivulle"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-9 w-9 shrink-0 object-contain"
          />

          <div className="min-w-0">
            <div className="truncate text-base font-black tracking-tight text-slate-950">
              ValintaGuru
            </div>

            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-600">
              GuruPeli
            </div>
          </div>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <a
            href="/gurupath"
            className="rounded-full px-3 py-2 text-sm font-black text-slate-600 transition hover:bg-slate-100 hover:text-violet-700 sm:px-4"
          >
            Pelit
          </a>

          <a
            href="/gurupath/ranking"
            className="rounded-full bg-slate-950 px-3 py-2 text-sm font-black text-white transition hover:bg-violet-700 sm:px-4"
          >
            Ranking
          </a>
        </nav>
      </div>
    </header>
  );
}
