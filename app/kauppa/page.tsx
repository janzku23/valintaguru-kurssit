const HOLVI_EMBED_URL =
  "https://holvi.com/shop/ValintaGuru/product/70897e512ad411304a55fb73963baf02/embedded/";

const HOLVI_PRODUCT_URL =
  "https://holvi.com/shop/ValintaGuru/product/70897e512ad411304a55fb73963baf02/";

export default function KauppaPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <span aria-hidden="true">←</span>
              Takaisin
            </a>

            <div>
              <a
                href="/"
                className="text-xl font-extrabold text-blue-700 sm:text-2xl"
              >
                ValintaGuru
              </a>

              <p className="hidden text-xs font-semibold text-slate-500 sm:block">
                Holvi-kurssikauppa
              </p>
            </div>
          </div>

          <a
            href={HOLVI_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Avaa Holvissa
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-900/15 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-100">
            Kurssikauppa
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Osta ValintaGurun kursseja
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-50">
            Valitse haluamasi kurssi ja suorita maksu Holvin turvallisessa
            verkkokaupassa. Käytä ostossa samaa sähköpostiosoitetta, jolla
            kirjaudut ValintaGurun kurssialustalle.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-blue-700">
                  ValintaGurun kurssi
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
                  Kurssin ostaminen
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tuotteen tiedot ja ostopainike näkyvät alla Holvin
                  kauppanäkymässä.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />

                Holvi
              </div>
            </div>
          </div>

          <div className="flex justify-center px-4 py-8 sm:px-8">
            <div className="w-full max-w-[300px] overflow-hidden bg-white">
              <iframe
                src={HOLVI_EMBED_URL}
                title="ValintaGurun Holvi-tuote"
                className="block h-[360px] w-full border-0 bg-white"
                loading="eager"
                allow="payment"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-600">
                Mikäli upotettu kauppanäkymä ei toimi, voit avata tuotteen
                suoraan Holvin verkkokaupassa.
              </p>

              <a
                href={HOLVI_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-6 py-3 font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
              >
                Avaa tuote Holvissa
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="font-bold text-blue-900">
            Käytä samaa sähköpostiosoitetta
          </p>

          <p className="mt-2 text-sm leading-6 text-blue-900/80">
            Käytä ostossa samaa sähköpostiosoitetta, jolla haluat kirjautua
            ValintaGurun kurssialustalle. Kurssin käyttöoikeus yhdistetään tähän
            sähköpostiosoitteeseen.
          </p>
        </div>
      </section>
    </main>
  );
}