import type { Metadata } from "next";
import {
  scoreLimitCategories,
  VALINTAKOE_G_2027_DATE,
  type ScoreLimitCategory,
} from "@/data/valintakoeGPisterajat";

const PAGE_URL =
  "https://www.valintaguru.fi/valintakoe-g-pisterajat";

export const metadata: Metadata = {
  title:
    "Valintakoe G pisterajat 2026 | ValintaGuru",
  description:
    "Katso Valintakoe G:n vuoden 2026 lopulliset pisterajat hallintotieteisiin, yhteiskunta- ja sosiaalitieteisiin, viestintätieteisiin sekä oikeustieteeseen. Lue myös, mikä Valintakoe G on.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Valintakoe G pisterajat 2026 | ValintaGuru",
    description:
      "Valintakoe G:n lopulliset pisterajat 2026 sekä tiivis kuvaus Valintakoe G:stä.",
    url: PAGE_URL,
    siteName: "ValintaGuru",
    locale: "fi_FI",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function renderCategoryNote(
  categoryId: string,
  note: string
) {
  if (
    categoryId === "viestintatieteet" &&
    note ===
      "Vain yhteinen osio: enintään 70 pistettä."
  ) {
    return (
      <>
        <strong className="font-extrabold text-slate-950">
          Vain yhteinen osio:
        </strong>{" "}
        enintään{" "}
        <strong className="font-extrabold text-slate-950">
          70 pistettä
        </strong>
        .
      </>
    );
  }

  if (
    categoryId === "viestintatieteet" &&
    note ===
      "Yhteinen osio + viestintätieteiden eriytyvä osio: enintään 130 pistettä (70 + 60)."
  ) {
    return (
      <>
        <strong className="font-extrabold text-slate-950">
          Yhteinen osio + viestintätieteiden eriytyvä osio:
        </strong>{" "}
        enintään{" "}
        <strong className="font-extrabold text-slate-950">
          130 pistettä
        </strong>{" "}
        (70 + 60).
      </>
    );
  }

  if (
    categoryId === "oikeustiede" &&
    note ===
      "Valintakoe G yhteinen osio: enintään 70 pistettä."
  ) {
    return (
      <>
        <strong className="font-extrabold text-slate-950">
          Valintakoe G yhteinen osio:
        </strong>{" "}
        enintään{" "}
        <strong className="font-extrabold text-slate-950">
          70 pistettä
        </strong>
        .
      </>
    );
  }

  if (
    categoryId === "oikeustiede" &&
    note ===
      "Oikeustieteen eriytyvä osio: enintään 30 pistettä."
  ) {
    return (
      <>
        <strong className="font-extrabold text-slate-950">
          Oikeustieteen eriytyvä osio:
        </strong>{" "}
        enintään{" "}
        <strong className="font-extrabold text-slate-950">
          30 pistettä
        </strong>
        .
      </>
    );
  }

  if (
    categoryId === "oikeustiede" &&
    note ===
      "Yhteensä: enintään 100 pistettä."
  ) {
    return (
      <>
        <strong className="font-extrabold text-slate-950">
          Yhteensä:
        </strong>{" "}
        enintään{" "}
        <strong className="font-extrabold text-slate-950">
          100 pistettä
        </strong>
        .
      </>
    );
  }

  if (
    categoryId === "oikeustiede" &&
    note ===
      "Alla ovat oikeustieteen hakukohteiden lopulliset valintakoevalinnan pisterajat 7.8.2026 varasijavalintojen päättymisen jälkeen."
  ) {
    return (
      <>
        Alla ovat oikeustieteen hakukohteiden{" "}
        <strong className="font-extrabold text-slate-950">
          lopulliset valintakoevalinnan pisterajat 7.8.2026
        </strong>{" "}
        varasijavalintojen päättymisen jälkeen.
      </>
    );
  }

  if (
    categoryId === "oikeustiede" &&
    note ===
      "Pisterajat on ilmoitettu muodossa ensikertalaiset / kaikki hakijat."
  ) {
    return (
      <>
        Pisterajat on ilmoitettu muodossa{" "}
        <strong className="font-extrabold text-slate-950">
          ensikertalaiset / kaikki hakijat
        </strong>
        .
      </>
    );
  }

  return note;
}

function ScoreTable({
  category,
}: {
  category: ScoreLimitCategory;
}) {
  return (
    <section
      id={category.id}
      className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-5 py-6 sm:px-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3f51e7]">
              Valintakoe G · pisterajat 2026
            </p>

            <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl">
              {category.title}
            </h2>
          </div>

          <div className="w-fit rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-sm">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-500">
              Kokeen maksimipistemäärä
            </p>

            <p className="mt-1 font-extrabold text-slate-950">
              {category.maxPoints}
            </p>
          </div>
        </div>

        {category.notes &&
          category.notes.length > 0 && (
            <div className="mt-5 space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm leading-6 text-slate-700">
              {category.notes.map(
                (note, index) => (
                  <p key={`${category.id}-note-${index}`}>
                    {renderCategoryNote(
                      category.id,
                      note
                    )}
                  </p>
                )
              )}
            </div>
          )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <th className="px-5 py-4 sm:px-7">
                Hakukohde
              </th>

              <th className="w-[180px] px-5 py-4 text-right sm:px-7">
                Pisteraja
              </th>
            </tr>
          </thead>

          <tbody>
            {category.rows.map(
              (row, index) => (
                <tr
                  key={`${category.id}-${row.target}`}
                  className={
                    index ===
                    category.rows.length - 1
                      ? ""
                      : "border-b border-slate-100"
                  }
                >
                  <td className="px-5 py-4 font-semibold leading-6 text-slate-800 sm:px-7">
                    {row.target}
                  </td>

                  <td className="px-5 py-4 text-right sm:px-7">
                    <span className="inline-flex min-w-[86px] justify-center rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-black text-[#3f51e7]">
                      {row.score}
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function ValintakoeGPisterajatPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Valintakoe G pisterajat 2026",
    url: PAGE_URL,
    description:
      "Valintakoe G:n vuoden 2026 lopulliset pisterajat ja kuvaus Valintakoe G:stä.",
    inLanguage: "fi",
    isPartOf: {
      "@type": "WebSite",
      name: "ValintaGuru",
      url: "https://www.valintaguru.fi",
    },
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ),
        }}
      />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="font-serif text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
          >
            ValintaGuru
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/valintakoe-g"
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:inline-flex"
            >
              Valintakoe G
            </a>

            <a
              href="/#kurssit"
              className="inline-flex rounded-full bg-[#3f51e7] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#3142d6]"
            >
              Valmennuskurssit
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-100" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-[2.5rem] border-[10px] border-amber-200" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f51e7]">
              Valintakoe G
            </p>

            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Valintakoe G pisterajat 2026
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              Tälle sivulle on koottu{" "}
              <strong className="font-extrabold text-slate-950">
                valintakoe Gä käyttäneiden hakukohteiden lopulliset pisterajat vuodelta 2026
              </strong>
              . Pisterajat ovat 7.8.2026 tilanteen mukaisia.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#pisterajat"
                className="inline-flex rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white transition hover:bg-[#3142d6]"
              >
                Katso pisterajat
              </a>

              <a
                href="#mika-on-valintakoe-g"
                className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
              >
                Mikä on Valintakoe G?
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mika-on-valintakoe-g"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
              Perustiedot
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Mikä on valintakoe G?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Valintakoe G on useiden yhteiskunnallisten alojen yhteinen yliopistojen valintakoe. Sen kautta voi hakea muun muassa oikeustieteen, hallintotieteiden, sosiaalitieteiden, yhteiskuntatieteiden ja viestintätieteiden koulutuksiin.
              </p>

              <p>
                Vuoden 2027 valintakoe G järjestetään{" "}
                <strong className="font-extrabold text-slate-950">
                  {VALINTAKOE_G_2027_DATE}
                </strong>
                .
              </p>

              <p>
                Valintakoe on digitaalinen ja suoritetaan omalla kannettavalla tietokoneella.
              </p>

              <p>
                Valintakoe G{" "}
                <strong className="font-extrabold text-slate-950">
                  ei edellytetä tiettyjen sisältöjen opiskelua tai hallintaa etukäteen
                </strong>
                . Kokeessa tarvittaville valmiuksille on kuitenkin muodostunut pohjaa jo lukio-opinnoissa ja muissa toisen asteen opinnoissa.
              </p>

              <p>
                Kokeessa keskeistä on kyky{" "}
                <strong className="font-extrabold text-slate-950">
                  lukea ja ymmärtää tieteellistä tekstiä, löytää aineistosta olennaista tietoa sekä analysoida ja soveltaa annettua tietoa tehokkaasti rajatussa ajassa
                </strong>
                . Olennaista ei siis ole ulkoa opettelu, vaan se, miten osaat työskennellä kokeessa annettavan aineiston kanssa.
              </p>

              <p>
                Vuoden 2027 kokeen tarkempia sisältö- ja rakennetietoja ei ole vielä kokonaisuudessaan julkaistu. Tietoja täydennetään sitä mukaa, kun yliopistot julkaisevat vuoden 2027 valintaperusteita ja tarkempia tietoja kokeesta.
              </p>
            </div>
          </div>

          <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">
                Valintakoe G 2027
              </p>

              <p className="mt-2 text-2xl font-extrabold text-slate-950">
                9.6.2027 klo 14.00
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Toteutus
              </p>

              <p className="mt-2 text-xl font-extrabold text-slate-950">
                Digitaalinen koe
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Koe suoritetaan omalla kannettavalla tietokoneella.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-amber-800">
                Olennaista kokeessa
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Tieteellisen tekstin ymmärtäminen, olennaisen tiedon löytäminen sekä annetun tiedon analysointi ja soveltaminen rajatussa ajassa.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="pisterajat"
        className="border-y border-slate-200 bg-[#f7f8ff]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
              Vuoden 2026 toteutuneet rajat
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Valintakoe G pisterajat 2026
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Pisterajat ilmoitetaan muodossa{" "}
              <strong className="font-extrabold text-slate-950">
                ensikertalaiset / kaikki hakijat
              </strong>
              . Jos näkyvissä on vain yksi pisteraja, sama raja koski molempia ryhmiä.
            </p>
          </div>

          <nav
            aria-label="Pisterajojen kategoriat"
            className="mt-8 flex gap-2 overflow-x-auto pb-2"
          >
            {scoreLimitCategories.map(
              (category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
                >
                  {category.title}
                </a>
              )
            )}
          </nav>

          <div className="mt-8 grid gap-8 sm:gap-10 lg:gap-12">
            {scoreLimitCategories.map(
              (category) => (
                <ScoreTable
                  key={category.id}
                  category={category}
                />
              )
            )}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-slate-700 sm:p-6">
            <p>
              <strong className="font-extrabold text-slate-950">
                Ensikertalaiset
              </strong>{" "}
              tarkoittaa ensikertalaiskiintiön pisterajaa ja{" "}
              <strong className="font-extrabold text-slate-950">
                kaikki hakijat
              </strong>{" "}
              kaikkien hakijoiden kiintiön pisterajaa.
            </p>

            <p className="mt-3">
              Vuoden 2026 pisterajat ovat toteutuneita pisterajoja, eivät ennuste vuoden 2027 valinnasta. Pisterajat voivat muuttua vuosittain esimerkiksi kokeen vaikeustason, hakijamäärän ja hakijoiden koesuoritusten perusteella.
            </p>

            <p className="mt-3 text-slate-700">
              <strong className="font-extrabold text-slate-950">
                Huomio:
              </strong>{" "}
              Pisterajat ovat vuoden 2026 toteutuneita lopullisia pisterajoja. Vuoden 2027 pisterajat voivat muuttua esimerkiksi kokeen vaikeustason, hakijamäärien ja hakijoiden koesuoritusten perusteella.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] bg-[#3f51e7] p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.16em] text-indigo-100">
                Harjoittele Valintakoe G:hen
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Valmistaudu aineiston tulkintaan, päättelyyn ja ajankäyttöön
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-indigo-100">
                Tutustu ValintaGurun Valintakoe G -valmennuksiin ja harjoittele kokeessa tarvittavia taitoja tavoitteellisesti.
              </p>
            </div>

            <a
              href="/#kurssit"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 font-bold text-[#3f51e7] transition hover:bg-indigo-50 sm:w-fit"
            >
              Tutustu valmennuksiin
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 ValintaGuru Oy</p>

          <a
            href="/"
            className="font-bold text-slate-700 transition hover:text-[#3f51e7]"
          >
            Takaisin etusivulle
          </a>
        </div>
      </footer>
    </main>
  );
}
