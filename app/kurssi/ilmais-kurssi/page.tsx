import FreeCourseSidebar from "@/components/FreeCourseSidebar";

export default function FreeCourseOverviewPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-[#3f51e7] p-7 text-white shadow-sm sm:p-9">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-black uppercase tracking-[0.14em]">
              Maksuton
            </span>

            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">
              Kaikille kirjautuneille
            </span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
            Ilmainen kurssi
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
            Harjoittele vuoden 2026 oikealla Valintakoe G:n yhteisellä osiolla
            sekä oikeustieteen eriytyvällä osiolla. Oikeustieteen
            ennakkomateriaalit löytyvät teoriaosuudesta.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <FreeCourseSidebar active="overview" />

          <section className="grid gap-5 sm:grid-cols-2">
            <a
              href="/kurssi/ilmais-kurssi/teoria"
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
            >
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">
                Webinaari + aineistot
              </span>

              <h2 className="mt-5 text-2xl font-black">
                Teoria ja ennakkomateriaalit
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Yhteisen osion aineistot sekä oikeustieteen vuoden 2026
                ennakkomateriaalit samassa paikassa.
              </p>

              <span className="mt-6 inline-flex font-black text-[#3f51e7]">
                Avaa teoria →
              </span>
            </a>

            <a
              href="/kurssi/ilmais-kurssi/harjoitukset"
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                Kaksi oikeaa koetta
              </span>

              <h2 className="mt-5 text-2xl font-black">Harjoituskokeet</h2>

              <p className="mt-3 leading-7 text-slate-600">
                Valintakoe G 2026 – yhteinen osio (70 kysymystä) sekä
                oikeustieteen eriytyvä osio (30 kysymystä), alkuperäisellä
                pisteytyksellä.
              </p>

              <span className="mt-6 inline-flex font-black text-emerald-700">
                Valitse koe →
              </span>
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
