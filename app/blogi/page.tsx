import type { Metadata } from "next";
import Link from "next/link";
import { listPublishedPosts } from "@/lib/blog/server";
import { blogDate, readingMinutes } from "@/lib/blog/model";
import { getCurrentAdmin } from "@/lib/adminAccess";

export const dynamic = "force-dynamic";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ValintaGurun blogi – valintakokeet ja opiskeluvinkit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ValintaGurun blogi",
    description:
      "Valintakokeet, opiskeluvinkit ja tehokas valmistautuminen.",
    images: ["/og-image.png"],
  },
};


const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/blogi#webpage`,
      url: `${siteUrl}/blogi`,
      name: "ValintaGurun blogi",
      description:
        "Tietoa valintakokeista, opiskelusta ja tehokkaasta valmistautumisesta.",
      inLanguage: "fi-FI",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Etusivu",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogi",
          item: `${siteUrl}/blogi`,
        },
      ],
    },
  ],
};

export default async function BlogPage() {
  const [postsResult, adminResult] = await Promise.allSettled([
    listPublishedPosts(),
    getCurrentAdmin(),
  ]);
  const posts = postsResult.status === "fulfilled" ? postsResult.value : [];
  const unavailable = postsResult.status === "rejected";
  const isAdmin = adminResult.status === "fulfilled" && Boolean(adminResult.value);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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

          </div>

          {/* ARTICLES */}
          <section className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Artikkelit
                </p>

                <h2 className="mt-2 text-3xl font-extrabold">
                  Uusimmat kirjoitukset
                </h2>
              </div>
              {isAdmin && (
                <Link
                  href="/admin/blogi"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#3f51e7] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#3142d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                    <path d="m16 3 5 5M4 20l4-1 13-13a2.1 2.1 0 0 0-5-3L3 16l-1 5 5-1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Hallitse blogia
                </Link>
              )}
            </div>

            {unavailable ? <p role="alert" className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-7 text-amber-900">Kirjoituksia ei juuri nyt saatu ladattua. Kokeile hetken kuluttua uudelleen.</p> : posts.length === 0 ? <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-8"><h3 className="text-xl font-bold">Ensimmäiset kirjoitukset ovat tulossa</h3><p className="mt-3 leading-7 text-slate-600">Pian löydät täältä vinkkejä opiskeluun ja valintakokeisiin valmistautumiseen. Kaikki kirjoitukset ovat luettavissa maksutta ilman kirjautumista.</p></div> : <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => <article key={post.id} className="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-300 hover:shadow-md">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">{post.category}</p>
                <h3 className="mt-3 break-words text-2xl font-extrabold leading-tight"><Link href={`/blogi/${post.slug}`} className="hover:text-blue-700">{post.title}</Link></h3>
                <p className="mt-3 text-sm text-slate-500"><time dateTime={post.published_at!}>{blogDate(post.published_at!)}</time> · {readingMinutes(post.content)} min</p>
                <p className="mt-4 flex-1 break-words leading-7 text-slate-700">{post.excerpt}</p>
                <Link href={`/blogi/${post.slug}`} className="mt-6 inline-flex font-bold text-blue-700">Lue kirjoitus <span className="sr-only">: {post.title}</span><span aria-hidden="true"> →</span></Link>
              </article>)}
            </div>}

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
    </>
  );
}
