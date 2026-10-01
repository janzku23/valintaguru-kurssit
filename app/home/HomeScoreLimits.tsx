export default function HomeScoreLimits() {
  return (
      <section className="border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-[#fff8e8]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12 md:px-8 lg:py-16">
          <a
            href="/valintakoe-g-pisterajat"
            className="group block overflow-hidden rounded-[2rem] border border-indigo-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#3f51e7]">
                    Valintakoe G
                  </span>

                  <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-800">
                    Pisterajat 2026
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                  Katso Valintakoe G:n lopulliset pisterajat
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  Pisterajat hallintotieteisiin, sosiaali- ja yhteiskuntatieteisiin, viestintätieteisiin sekä oikeustieteeseen. Samalta sivulta löydät myös tiiviin kuvauksen siitä, mikä Valintakoe G on.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3f51e7] px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-600/20 transition group-hover:bg-[#3142d6] sm:w-auto">
                  Avaa pisterajat
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>
  );
}
