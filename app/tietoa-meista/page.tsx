import type { Metadata } from "next";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: "Tietoa meistä",

  description:
    "Tutustu ValintaGuruun. ValintaGuru kehittää selkeitä ja käytännönläheisiä verkkovalmennuksia valintakokeisiin valmistautuville opiskelijoille.",

  alternates: {
    canonical: "/tietoa-meista",
  },

  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: `${siteUrl}/tietoa-meista`,
    title: "Tietoa ValintaGurusta",
    description:
      "ValintaGuru tarjoaa verkkovalmennusta, harjoittelua ja opiskelun työkaluja valintakokeisiin valmistautuville.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tietoa ValintaGurusta",
    description:
      "Tutustu ValintaGuruun ja verkkovalmennuksemme toimintaperiaatteisiin.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "ValintaGuru",
  url: siteUrl,
  description:
    "ValintaGuru tarjoaa verkkovalmennusta valintakokeisiin valmistautuville.",
  inLanguage: "fi-FI",
};

export default function TietoaMeistaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
        <section className="px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-5xl">
            {/* HERO */}
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-10 text-white shadow-2xl shadow-blue-900/20 sm:px-10 lg:px-14 lg:py-14">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                ValintaGuru
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Tietoa meistä
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
                ValintaGuru on verkkopohjainen valmennusympäristö, jonka
                tavoitteena on tehdä valintakokeisiin valmistautumisesta
                selkeämpää, tavoitteellisempaa ja helpommin hallittavaa.
              </p>
            </div>

            {/* INTRO */}
            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Mikä on ValintaGuru?
              </p>

              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Opiskelun työkalut yhdessä paikassa
              </h2>

              <div className="mt-5 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  ValintaGuru tarjoaa valmennuskursseja ja digitaalisia
                  opiskelutyökaluja valintakokeisiin valmistautuville.
                  Palvelussa teoria, harjoittelu ja oman etenemisen seuranta
                  muodostavat yhden kokonaisuuden.
                </p>

                <p>
                  Tavoitteena on auttaa opiskelijaa ymmärtämään kokeen
                  rakennetta, kehittämään päättelyä ja aineistojen analysointia
                  sekä harjoittelemaan tehokasta ajankäyttöä.
                </p>

                <p>
                  Valmennuksen sisältöä ja opiskelutyökaluja kehitetään niin,
                  että opiskelijan on mahdollisimman helppo nähdä mitä
                  kannattaa opiskella seuraavaksi ja missä asioissa tarvitaan
                  vielä harjoittelua.
                </p>
              </div>
            </section>

            {/* PRINCIPLES */}
            <section className="mt-10">
              <div className="mb-7">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Toimintaperiaatteemme
                </p>

                <h2 className="mt-2 text-3xl font-extrabold">
                  Miten haluamme opiskelua kehittää?
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-extrabold text-blue-700">
                    1
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold">
                    Selkeys
                  </h3>

                  <p className="mt-3 leading-7 text-slate-700">
                    Opiskelumateriaalien ja harjoitusten pitää olla helposti
                    löydettävissä ja opiskelijan etenemisen ymmärrettävää.
                  </p>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-extrabold text-blue-700">
                    2
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold">
                    Harjoittelu
                  </h3>

                  <p className="mt-3 leading-7 text-slate-700">
                    Pelkkä lukeminen ei riitä. Tietoa pitää päästä
                    soveltamaan käytännössä erilaisten tehtävien ja
                    koeharjoitusten avulla.
                  </p>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-extrabold text-blue-700">
                    3
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold">
                    Kehittyminen
                  </h3>

                  <p className="mt-3 leading-7 text-slate-700">
                    Oman etenemisen seuraaminen auttaa tunnistamaan vahvuudet
                    ja ne osa-alueet, joihin kannattaa käyttää enemmän aikaa.
                  </p>
                </article>
              </div>
            </section>

            {/* COURSES */}
            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Valmennuskurssit
              </p>

              <h2 className="mt-2 text-3xl font-extrabold">
                Tutustu ValintaGurun valmennuksiin
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                ValintaGuru tarjoaa valmennusta muun muassa Valintakoe G:hen
                sekä oikeustieteen eriytyvään osioon.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/valintakoe-g"
                  className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Valintakoe G
                </Link>

                <Link
                  href="/oikeustiede"
                  className="rounded-full border border-slate-300 bg-white px-7 py-3 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Oikeustieteen valmennus
                </Link>
              </div>
            </section>

            {/* FOOTER NAV */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="font-bold text-blue-700 transition hover:text-blue-800"
              >
                ← Takaisin etusivulle
              </Link>

              <Link
                href="/blogi"
                className="font-bold text-blue-700 transition hover:text-blue-800"
              >
                Lue ValintaGurun blogia →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}