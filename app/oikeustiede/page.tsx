import type { Metadata } from "next";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: "Oikeustieteen valmennuskurssi",

  description:
    "Valmistaudu oikeustieteen eriytyvään osioon ValintaGurun valmennuskurssilla. Harjoittele aineistojen analysointia, oikeudellista päättelyä ja ajankäyttöä.",

  alternates: {
    canonical: "/oikeustiede",
  },

  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: `${siteUrl}/oikeustiede`,
    title: "Oikeustieteen valmennuskurssi | ValintaGuru",
    description:
      "Valmennuskurssi oikeustieteen eriytyvään osioon valmistautuville.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oikeustieteen valmennuskurssi | ValintaGuru",
    description:
      "Valmistaudu oikeustieteen eriytyvään osioon ValintaGurun verkkovalmennuksessa.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Oikeustieteen valmennuskurssi",
  description:
    "ValintaGurun valmennuskurssi oikeustieteen eriytyvään osioon valmistautuville.",
  provider: {
    "@type": "EducationalOrganization",
    name: "ValintaGuru",
    url: siteUrl,
  },
  inLanguage: "fi-FI",
  url: `${siteUrl}/oikeustiede`,
};

export default function OikeustiedePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
        <section className="px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-6 py-10 text-white shadow-2xl shadow-slate-900/20 sm:px-10 lg:px-14 lg:py-14">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                ValintaGuru
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Oikeustieteen valmennuskurssi
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
                Valmistaudu oikeustieteen eriytyvään osioon ja kehitä
                aineistojen analysointia, oikeudellista päättelyä sekä
                koetilanteessa tarvittavaa ajankäyttöä.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kurssi/oikis"
                  className="rounded-full bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Siirry kurssille
                </Link>

                <Link
                  href="/"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
                >
                  Takaisin etusivulle
                </Link>
              </div>
            </div>

            <section className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Aineistot
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Harjoittele tarkkaa lukemista
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Harjoittelu kehittää kykyä löytää laajoista aineistoista
                  olennaisia yksityiskohtia ja ymmärtää niiden merkitys.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Päättely
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Kehitä oikeudellista ajattelua
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Kurssin harjoitukset tukevat oikeudellista päättelyä,
                  soveltamista ja perusteltujen johtopäätösten muodostamista.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Ajankäyttö
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Harjoittele myös koetilannetta
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Tavoitteellinen harjoittelu auttaa kehittämään tehokasta
                  ajankäyttöä ja varmuutta haastaviin tehtäviin.
                </p>
              </article>
            </section>

            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-extrabold">
                Valmistaudu oikeustieteen eriytyvään osioon
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                ValintaGurun kurssi kokoaa teoriaa, harjoittelua ja opiskelun
                seurantaa yhteen paikkaan. Harjoittelun tavoitteena on kehittää
                aineistojen analysointia, päättelyä ja tehokasta työskentelyä
                koetilanteessa.
              </p>

              <Link
                href="/kurssi/oikis"
                className="mt-7 inline-flex rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Avaa oikeustieteen kurssi
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}