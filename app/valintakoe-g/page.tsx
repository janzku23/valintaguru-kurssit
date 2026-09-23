import type { Metadata } from "next";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: "Mikä on Valintakoe G? | ValintaGuru",
  description:
    "Valintakoe G on useiden yhteiskunnallisten alojen yhteinen yliopistojen valintakoe. Lue, miten koe toteutetaan ja mitä taitoja siinä tarvitaan.",
  alternates: {
    canonical: "/valintakoe-g",
  },
  openGraph: {
    type: "article",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: `${siteUrl}/valintakoe-g`,
    title: "Mikä on Valintakoe G? | ValintaGuru",
    description:
      "Tietoa Valintakoe G:stä, vuoden 2027 koepäivästä, digitaalisesta toteutuksesta ja kokeessa tarvittavista taidoista.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikä on Valintakoe G? | ValintaGuru",
    description:
      "Tietoa Valintakoe G:stä ja kokeessa tarvittavista taidoista.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mikä on Valintakoe G?",
  description:
    "Tietoa Valintakoe G:stä, sen toteutuksesta ja kokeessa tarvittavista taidoista.",
  inLanguage: "fi-FI",
  url: `${siteUrl}/valintakoe-g`,
  isPartOf: {
    "@type": "WebSite",
    name: "ValintaGuru",
    url: siteUrl,
  },
};

export default function ValintakoeGPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pageJsonLd
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="min-h-screen bg-[#fffdf8] text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              ValintaGuru
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/valintakoe-g-pisterajat"
                className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:inline-flex"
              >
                Pisterajat 2026
              </Link>

              <Link
                href="/#kurssit"
                className="inline-flex rounded-full bg-[#3f51e7] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#3142d6]"
              >
                Valmennuskurssit
              </Link>
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
                Mikä on Valintakoe G?
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
                Valintakoe G on useiden yhteiskunnallisten alojen yhteinen yliopistojen valintakoe. Sen kautta voi hakea muun muassa oikeustieteen, hallintotieteiden, sosiaalitieteiden, yhteiskuntatieteiden ja viestintätieteiden koulutuksiin.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/valintakoe-g-pisterajat"
                  className="inline-flex rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white transition hover:bg-[#3142d6]"
                >
                  Katso pisterajat 2026
                </Link>

                <Link
                  href="/#kurssit"
                  className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
                >
                  Tutustu valmennuksiin
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <p className="font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
                Valintakoe G 2027
              </p>

              <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
                <p>
                  Vuoden 2027 valintakoe G järjestetään{" "}
                  <strong className="font-extrabold text-slate-950">
                    keskiviikkona 9.6.2027 klo 14.00
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
            </article>

            <aside className="grid gap-4">
              <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">
                  Ajankohta
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
                  Valintakoe suoritetaan omalla kannettavalla tietokoneella.
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-amber-800">
                  Kokeessa keskeistä
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  Kyky lukea ja ymmärtää tieteellistä tekstiä, löytää aineistosta olennaista tietoa sekä analysoida ja soveltaa annettua tietoa tehokkaasti rajatussa ajassa.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f7f8ff]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-6 rounded-[2rem] bg-[#3f51e7] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div>
                <p className="font-bold uppercase tracking-[0.16em] text-indigo-100">
                  Valintakoe G
                </p>

                <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                  Valintakoe G pisterajat 2026
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-indigo-100">
                  Tutustu valintakoe Gä käyttäneiden hakukohteiden vuoden 2026 lopullisiin pisterajoihin.
                </p>
              </div>

              <Link
                href="/valintakoe-g-pisterajat"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 font-bold text-[#3f51e7] transition hover:bg-indigo-50 sm:w-fit"
              >
                Avaa pisterajat
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 ValintaGuru Oy</p>

            <Link
              href="/"
              className="font-bold text-slate-700 transition hover:text-[#3f51e7]"
            >
              Takaisin etusivulle
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
