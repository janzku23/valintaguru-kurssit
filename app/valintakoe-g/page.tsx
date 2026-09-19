import type { Metadata } from "next";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: "Valintakoe G valmennuskurssi",

  description:
    "Valmistaudu Valintakoe G:hen ValintaGurun valmennuskurssilla. Harjoittele päättelyä, aineistojen analysointia, tekstinymmärtämistä ja ajankäyttöä.",

  alternates: {
    canonical: "/valintakoe-g",
  },

  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: `${siteUrl}/valintakoe-g`,
    title: "Valintakoe G valmennuskurssi | ValintaGuru",
    description:
      "Valmistaudu Valintakoe G:hen teoria-, harjoitus- ja opiskelun seurantatyökaluilla.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Valintakoe G valmennuskurssi | ValintaGuru",
    description:
      "Valmistaudu Valintakoe G:hen ValintaGurun verkkovalmennuksessa.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Valintakoe G valmennuskurssi",
  description:
    "ValintaGurun valmennuskurssi Valintakoe G:hen valmistautuville.",
  provider: {
    "@type": "EducationalOrganization",
    name: "ValintaGuru",
    url: siteUrl,
  },
  inLanguage: "fi-FI",
  url: `${siteUrl}/valintakoe-g`,
};

export default function ValintakoeGPage() {
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
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-10 text-white shadow-2xl shadow-blue-900/20 sm:px-10 lg:px-14 lg:py-14">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                ValintaGuru
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Valintakoe G valmennuskurssi
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
                Valmistaudu Valintakoe G:hen suunnitelmallisesti ja harjoittele
                kokeessa tarvittavia päättely-, aineisto- ja ajankäyttötaitoja.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kurssi/valintakoe-g"
                  className="rounded-full bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
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
                  Päättely
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Harjoittele kokeessa tarvittavaa ajattelua
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Kurssilla harjoitellaan päättelyä, tekstien tulkintaa ja
                  aineistojen huolellista analysointia.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Harjoittelu
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Tehtäviä ja koeharjoittelua
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Monipuoliset harjoitukset auttavat soveltamaan opittua ja
                  kehittämään toimintavarmuutta koetilanteeseen.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Seuranta
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Seuraa omaa etenemistäsi
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  ValintaGurun opiskelutyökalut auttavat hahmottamaan omaa
                  etenemistä ja tunnistamaan harjoittelua vaativia osa-alueita.
                </p>
              </article>
            </section>

            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-extrabold">
                Valmistaudu Valintakoe G:hen tehokkaasti
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                ValintaGurun valmennuskurssi yhdistää teoriaa, harjoituksia ja
                opiskelun seurantaa yhteen selkeään kokonaisuuteen. Tavoitteena
                on kehittää kokeessa tarvittavia taitoja ja auttaa käyttämään
                opiskeluaika mahdollisimman tehokkaasti.
              </p>

              <Link
                href="/kurssi/valintakoe-g"
                className="mt-7 inline-flex rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Avaa Valintakoe G -kurssi
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}