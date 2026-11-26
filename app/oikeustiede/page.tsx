import BrandLogo from "@/components/BrandLogo";
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Oikeustieteen valintakoe";
const pageDescription =
  "Oikeustieteen valintakoe 9.6.2027 klo 14.00. Tutustu kokeen rakenteeseen, ennakkomateriaalin lyhenevään lukuaikaan ja valintakokeeseen valmistautumiseen.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: { absolute: `${pageTitle} | ValintaGuru` },
  description: pageDescription,
  alternates: {
    canonical: "/oikeustiede",
  },
  openGraph: {
    type: "article",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: "/oikeustiede",
    title: `${pageTitle} | ValintaGuru`,
    description: pageDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oikeustiede – ValintaGuru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ValintaGuru`,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/oikeustiede#webpage`,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "fi-FI",
      url: `${siteUrl}/oikeustiede`,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/oikeustiede#breadcrumb`,
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
          name: "Oikeustiede",
          item: `${siteUrl}/oikeustiede`,
        },
      ],
    },
  ],
};

export default function OikeustiedePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="min-h-screen bg-[#fffdf8] text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 sm:gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex shrink-0 items-center gap-2 font-serif text-lg sm:gap-2.5 font-semibold tracking-tight text-slate-950 sm:text-2xl">
              <BrandLogo />
              <span>ValintaGuru</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/valintakoe-g" className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:inline-flex">
                Valintakoe G
              </Link>
              <Link href="/#kurssit" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#3f51e7] px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm text-white transition hover:bg-[#3142d6]">
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
                Mikä on oikeustieteen valintakoe? 
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {pageTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
                Oikeustieteen valintakoe järjestetään keskiviikkona 9.6.2027 klo 14.00. Oikeustieteelliseen haetaan yliopistojen yhteisellä valintakoe G:llä, joka koostuu kahdesta osiosta.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#kurssit" className="inline-flex rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white transition hover:bg-[#3142d6]">
                  Tutustu valmennuksiin
                </Link>
                <Link href="/valintakoe-g" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-[#3f51e7] hover:text-[#3f51e7]">
                  Lue lisää valintakoe G:stä
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="grid gap-8">
              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Valintakokeen rakenne
                </h2>
                <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
                  <ul className="list-disc space-y-2 pl-6 marker:text-[#3f51e7]">
                    <li>Yhteinen osio: <strong className="font-extrabold text-slate-950">2 tuntia</strong></li>
                    <li>Oikeustieteen eriytyvä osio: <strong className="font-extrabold text-slate-950">1 tunti</strong></li>
                    <li>Kokeen kokonaiskesto: <strong className="font-extrabold text-slate-950">3 tuntia</strong></li>
                  </ul>
                  <p>
                    Valintakoe alkaa kaikille yhteisellä osiolla, minkä jälkeen siirrytään oikeustieteen eriytyvään osioon. Osioiden välillä ei voi siirtyä edestakaisin, eikä yhteiseen osioon voi enää palata sen päätyttyä.
                  </p>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Oikeustieteen ennakkomateriaalin lukuaika lyhenee päivällä
                </h2>
                <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
                  <p>
                    Vuonna 2027 oikeustieteen ennakkomateriaali julkaistaan <strong className="font-extrabold text-slate-950">maanantaina 7.6.2027 klo 8.00</strong>. Aiemmin ennakkomateriaalin opiskeluun oli käytettävissä kolme päivää, mutta vuonna 2027 lukuaika lyhenee kahteen päivään.
                  </p>
                  <p>
                    Muutos tekee tehokkaasta lukutekniikasta ja ajankäytön hallinnasta entistä tärkeämpää. Lyhyessä ajassa on pystyttävä omaksumaan laajakin aineisto ja soveltamaan sen sisältöä valintakoetehtävissä.
                  </p>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Valmistautuminen oikeustieteen valintakokeeseen
                </h2>
                <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
                  <p>
                    Oikeustieteen valintakokeessa ei riitä pelkkä asioiden ulkoa opettelu. Kokeessa tarvitaan erityisesti luetun ymmärtämistä, kriittistä ajattelua, tiedon paikantamista ja soveltamista.
                  </p>
                  <p>
                    ValintaGurun valmennukset on suunniteltu kehittämään juuri näitä taitoja. Harjoitustehtävien avulla opit tunnistamaan erilaisia kysymystyyppejä, välttämään yleisiä vastausvirheitä ja työskentelemään tehokkaasti aikapaineen alla.
                  </p>
                  <p>
                    Valmistautumisessa ratkaisevaa ei ole vain harjoittelun määrä, vaan myös sen laatu. Siksi ValintaGurulla keskitymme käytännönläheiseen harjoitteluun ja valintakokeessa tarvittavien taitojen kehittämiseen.
                  </p>
                  <p>
                    Kun ennakkomateriaalin lukuaika lyhenee, kokeeseen kannattaa lähteä mahdollisimman vahvalla vastaustekniikalla. Harjoittelemalla etukäteen voit käyttää varsinaiset lukupäivät uuden aineiston opiskeluun sen sijaan, että opettelisit vasta silloin tehokkaita työskentelytapoja.
                  </p>
                </div>
              </article>
            </div>

            <aside aria-label="Valintakokeen tärkeät tiedot" className="grid gap-4">
              <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">Ajankohta</p>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">9.6.2027 klo 14.00</p>
                <p className="mt-2 leading-7 text-slate-600">Keskiviikko · kokonaiskesto 3 tuntia</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Ennakkomateriaali julkaistaan</p>
                <p className="mt-2 text-xl font-extrabold text-slate-950">7.6.2027 klo 8.00</p>
                <p className="mt-2 leading-7 text-slate-600">Maanantai · lukuaika lyhenee kahteen päivään.</p>
              </div>
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-amber-800">Kokeessa keskeistä</p>
                <p className="mt-2 leading-7 text-slate-700">
                  Luetun ymmärtäminen, kriittinen ajattelu, tiedon paikantaminen ja soveltaminen sekä tehokas ajankäyttö.
                </p>
              </div>
            </aside>
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-500">
            Valintakokeen aikataulua ja rakennetta koskevat tiedot perustuvat Yliopistovalinnat.fi-sivuston julkaisemiin tietoihin. Ajantasaiset valintaperusteet kannattaa aina tarkistaa virallisista lähteistä.
          </p>
        </section>

        <section className="border-y border-slate-200 bg-[#f7f8ff]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-6 rounded-[2rem] bg-[#3f51e7] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div>
                <p className="font-bold uppercase tracking-[0.16em] text-indigo-100">Oikeustiede 2027</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Valmistaudu tavoitteellisesti</h2>
                <p className="mt-4 max-w-3xl leading-8 text-indigo-100">
                  Tutustu ValintaGurun oikeustieteen valmennuskursseihin ja aloita tavoitteellinen valmistautuminen kevään 2027 valintakokeeseen.
                </p>
              </div>
              <Link href="/#kurssit" className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 font-bold text-[#3f51e7] transition hover:bg-indigo-50 sm:w-fit">
                Tutustu valmennuskursseihin
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 ValintaGuru Oy</p>
            <Link href="/" className="font-bold text-slate-700 transition hover:text-[#3f51e7]">Takaisin etusivulle</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
