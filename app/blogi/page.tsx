import type { Metadata } from "next";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: "Blogi – Valintakokeet ja opiskeluvinkit",

  description:
    "ValintaGurun blogista löydät tietoa valintakokeista, opiskelusta, päättelystä, aineistojen analysoinnista ja tehokkaasta valmistautumisesta.",

  alternates: {
    canonical: "/blogi",
  },

  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: `${siteUrl}/blogi`,
    title: "ValintaGurun blogi",
    description:
      "Tietoa valintakokeista, opiskelutekniikoista ja tehokkaasta valmistautumisesta.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ValintaGurun blogi",
    description:
      "Valintakokeet, opiskeluvinkit ja tehokas valmistautuminen.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const upcomingArticles = [
  {
    category: "Valintakoe G",
    title: "Miten Valintakoe G:hen kannattaa valmistautua?",
    description:
      "Mistä valmistautuminen kannattaa aloittaa ja millaisia taitoja harjoittelussa kannattaa painottaa?",
  },
  {
    category: "Oikeustiede",
    title: "Oikeustieteen eriytyvä osio – mitä kannattaa harjoitella?",
    description:
      "Aineistojen lukeminen, oikeudellinen päättely ja ajankäyttö ovat keskeisiä taitoja valmistautumisessa.",
  },
  {
    category: "Opiskelutekniikka",
    title: "Näin rakennat tehokkaan opiskelusuunnitelman",
    description:
      "Hyvä opiskelusuunnitelma auttaa jakamaan harjoittelun sopiviin kokonaisuuksiin ja seuraamaan omaa etenemistä.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <section className="px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* HERO */}
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-10 text-white shadow-2xl shadow-blue-900/20 sm:px-10 lg:px-14 lg:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
              ValintaGuru
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Blogi
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
              Tietoa valintakokeista, opiskelusta ja tehokkaasta
              valmistautumisesta.
            </p>
          </div>

          {/* INTRO */}
          <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              ValintaGurun blogi
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              Parempaa valmistautumista valintakokeisiin
            </h2>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Blogissa käsittelemme valintakokeisiin valmistautumista,
              opiskelutekniikoita, päättelyä, aineistojen analysointia ja
              ajankäyttöä. Lisäksi löydät tietoa Valintakoe G:stä ja
              oikeustieteen eriytyvästä osiosta.
            </p>
          </section>

          {/* ARTICLES */}
          <section className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Artikkelit
                </p>

                <h2 className="mt-2 text-3xl font-extrabold">
                  Tulossa blogiin
                </h2>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {upcomingArticles.map((article) => (
                <article
                  key={article.title}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                    {article.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-700">
                    {article.description}
                  </p>

                  <div className="mt-6">
                    <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                      Artikkeli tulossa
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SEO CONTENT */}
          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Valintakoe G
              </p>

              <h2 className="mt-2 text-2xl font-extrabold">
                Valmistautuminen Valintakoe G:hen
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Valintakokeeseen valmistautumisessa kannattaa harjoitella
                päättelyä, aineistojen analysointia, tekstinymmärtämistä ja
                ajankäyttöä. Harjoittelun tavoitteena on oppia soveltamaan
                tietoa tehokkaasti myös aikarajoitetussa koetilanteessa.
              </p>

              <Link
                href="/valintakoe-g"
                className="mt-6 inline-flex font-bold text-blue-700 transition hover:text-blue-800"
              >
                Lue lisää Valintakoe G:stä →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Oikeustiede
              </p>

              <h2 className="mt-2 text-2xl font-extrabold">
                Valmistautuminen oikeustieteen valintakokeeseen
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Oikeustieteen eriytyvässä osiossa korostuvat aineistojen
                huolellinen käsittely, olennaisen tiedon tunnistaminen,
                päättely ja kyky soveltaa tietoa tehtäviin.
              </p>

              <Link
                href="/oikeustiede"
                className="mt-6 inline-flex font-bold text-blue-700 transition hover:text-blue-800"
              >
                Lue lisää oikeustieteen valmennuksesta →
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-300">
              ValintaGuru
            </p>

            <h2 className="mt-2 max-w-3xl text-3xl font-extrabold">
              Haluatko aloittaa harjoittelun?
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Tutustu ValintaGurun valmennuskursseihin ja löydä itsellesi
              sopiva tapa valmistautua valintakokeeseen.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/valintakoe-g"
                className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Valintakoe G
              </Link>

              <Link
                href="/oikeustiede"
                className="rounded-full border border-white/20 px-7 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Oikeustiede
              </Link>
            </div>
          </section>

          <div className="mt-10">
            <Link
              href="/"
              className="font-bold text-blue-700 transition hover:text-blue-800"
            >
              ← Takaisin etusivulle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}