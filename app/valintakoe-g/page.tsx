import BrandLogo from "@/components/BrandLogo";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: { absolute: "Valintakoe G | ValintaGuru" },
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
    title: "Valintakoe G | ValintaGuru",
    description:
      "Tietoa valintakoe G:stä, vuoden 2027 koepäivästä, digitaalisesta toteutuksesta ja kokeessa tarvittavista taidoista.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ValintaGuru – valintakoe G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valintakoe G | ValintaGuru",
    description:
      "Tietoa valintakoe G:stä ja kokeessa tarvittavista taidoista.",
    images: ["/og-image.png"],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/valintakoe-g#webpage`,
      name: "Valintakoe G?",
      description:
        "Tietoa valintakoe G:stä, sen toteutuksesta ja kokeessa tarvittavista taidoista.",
      inLanguage: "fi-FI",
      url: `${siteUrl}/valintakoe-g`,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/valintakoe-g#breadcrumb`,
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
          name: "Valintakoe G",
          item: `${siteUrl}/valintakoe-g`,
        },
      ],
    },
  ],
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
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 sm:gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex shrink-0 items-center gap-2 font-serif text-lg sm:gap-2.5 font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              <BrandLogo />
              <span>ValintaGuru</span>
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
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#3f51e7] px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm text-white transition hover:bg-[#3142d6]"
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
                Mikä on valintakoe G?
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Valintakoe G
              </h1>

              <div className="mt-6 max-w-3xl space-y-6 text-lg leading-8 text-slate-700 sm:text-xl">
                <p>
                  <strong className="font-extrabold text-slate-950">Valintakoe G järjestetään keskiviikkona 9.6.2027 klo 14.00.</strong> Koe on digitaalinen, ja se suoritetaan omalla kannettavalla tietokoneella.
                </p>

                <p>
                  Valintakoe G mittaa erityisesti hakijan kykyä ymmärtää, analysoida ja soveltaa tieteellistä tekstiä. Kokeessa menestyminen ei perustu ulkoa opetteluun, vaan siihen, kuinka tehokkaasti osaat käsitellä annettua aineistoa ja ratkaista siihen liittyviä tehtäviä rajatussa ajassa.
                </p>
              </div>

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
              <div className="space-y-8 text-base leading-8 text-slate-700 sm:text-lg">
                <section className="space-y-6">
                  <h2 className="font-serif text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    Mitä valintakokeessa G testataan?
                  </h2>

                  <p>
                    Valintakoe G ei edellytä tiettyjen oppisisältöjen opiskelua etukäteen. Kokeessa tarvittavat taidot ovat kuitenkin kehittyneet jo lukio-opinnoissa ja muissa toisen asteen opinnoissa.
                  </p>

                  <p>
                    Kokeessa korostuvat erityisesti seuraavat taidot:
                  </p>

                  <ul className="list-disc space-y-4 pl-6">
                    <li><strong className="font-extrabold text-slate-950">Tieteellisen tekstin lukeminen ja ymmärtäminen:</strong> Kyky hahmottaa vaativiakin tekstejä, tunnistaa keskeiset käsitteet ja ymmärtää asiayhteyksiä.</li>
                    <li><strong className="font-extrabold text-slate-950">Olennaisen tiedon löytäminen:</strong> Kyky paikantaa aineistosta tehtävän ratkaisemisen kannalta merkityksellinen tieto nopeasti.</li>
                    <li><strong className="font-extrabold text-slate-950">Tiedon analysointi ja soveltaminen:</strong> Kyky tehdä johtopäätöksiä, yhdistellä tietoja ja soveltaa aineistossa esitettyjä asioita.</li>
                    <li><strong className="font-extrabold text-slate-950">Kriittinen lukutaito:</strong> Kyky erottaa toisistaan väitteet, perustelut, tulkinnat ja johtopäätökset.</li>
                    <li><strong className="font-extrabold text-slate-950">Ajankäyttö ja vastaustekniikka:</strong> Kyky ratkaista tehtäviä tarkasti ja tehokkaasti kokeen aikarajoissa.</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="font-serif text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    Miten valintakokeeseen G kannattaa valmistautua?
                  </h2>

                  <p>
                    Vaikka valintakoe G ei edellytä ennakkoon opeteltavia sisältöjä, kokeessa tarvittavia taitoja voi ja kannattaa harjoitella.
                  </p>

                  <p>
                    Tehokas valmistautuminen perustuu erityisesti tieteellisten tekstien lukemiseen, erilaisten aineistopohjaisten tehtävien ratkaisemiseen sekä ajankäytön ja vastaustekniikan kehittämiseen.
                  </p>

                  <p>
                    Pelkkä tekstien lukeminen ei kuitenkaan riitä. On tärkeää harjoitella myös sitä, miten luettua tietoa hyödynnetään tehtävissä ja kuinka oikea vastaus löydetään mahdollisimman tehokkaasti.
                  </p>

                  <p>
                    <strong className="font-extrabold text-slate-950">ValintaGurun valmennuksessa keskitymme juuri näihin taitoihin.</strong> Harjoittelet tieteellisten aineistojen käsittelyä, erilaisia tehtävätyyppejä ja koetilanteessa tarvittavaa vastaustekniikkaa. Tavoitteena on, että opit työskentelemään aineiston kanssa nopeasti, järjestelmällisesti ja tarkasti.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-serif text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    Valintakokeen G rakenne 2027
                  </h2>

                  <p>
                    Valintakoe G koostuu kaikille hakijoille yhteisestä osiosta sekä kahdesta mahdollisesta eriytyvästä osiosta.
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-950">Yhteinen osio – 2 tuntia</h3>
                    <p>
                      Kaikki hakijat suorittavat yhteisen osion. Se mittaa tieteellisen tiedon omaksumista ja soveltamista, aineistojen kriittistä analysointia sekä lähdekritiikkiä. Tehtävät perustuvat kokeessa annettavaan aineistoon.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-950">Oikeustieteen eriytyvä osio – 1 tunti</h3>
                    <p>
                      Oikeustieteen eriytyvä osio mittaa oikeustieteen opinnoissa tarvittavaa osaamista. Osion ennakkomateriaali julkaistaan 7.6.2027 klo 8.00.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-950">Viestintätieteiden eriytyvä osio – 1 tunti</h3>
                    <p>
                      Viestintätieteiden eriytyvä osio mittaa yleistajuisen tekstin kirjoittamisen valmiuksia. Kaikki viestintätieteiden hakukohteet eivät edellytä tämän osion suorittamista.
                    </p>
                  </div>

                  <p>
                    Valintakokeen kokonaiskesto on 2–4 tuntia riippuen hakukohteista. Yhteinen osio suoritetaan aina ensin. Kun koeosiosta siirtyy eteenpäin, siihen ei voi enää palata.
                  </p>
                </section>
              </div>
            </article>

            <aside className="grid gap-4">
              <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                <h2 className="font-serif text-2xl font-semibold leading-tight text-slate-950">
                  Valintakoe G 2027 – tärkeimmät tiedot
                </h2>

                <ul className="mt-6 space-y-4 leading-7 text-slate-700">
                  <li><strong className="font-extrabold text-slate-950">Koepäivä:</strong> Keskiviikko 9.6.2027</li>
                  <li><strong className="font-extrabold text-slate-950">Aloitusaika:</strong> Klo 14.00</li>
                  <li><strong className="font-extrabold text-slate-950">Koemuoto:</strong> Digitaalinen valintakoe</li>
                  <li><strong className="font-extrabold text-slate-950">Välineet:</strong> Oma kannettava tietokone</li>
                  <li><strong className="font-extrabold text-slate-950">Ennakkoon opiskeltava aineisto:</strong> Ei tiettyjä ennakkoon hallittavia oppisisältöjä</li>
                </ul>
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
