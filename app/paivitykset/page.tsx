import type { Metadata } from "next";
import Link from "next/link";

type SiteUpdate = {
  date: string;
  title: string;
  changes: string[];
};

/*
 * LISÄÄ UUSI PÄIVITYS TÄHÄN LISTAAN.
 * Päivämäärä kirjoitetaan muodossa VVVV-KK-PP.
 * Voit lisätä changes-listaan niin monta kohtaa kuin tarvitset.
 * Sivulla päivitykset järjestetään automaattisesti uusin ensin.
 * Saman päivän päivitykset näytetään tässä kirjoitetussa järjestyksessä.
 * Tallenna tiedosto ja julkaise sivusto, jotta muutokset näkyvät kävijöille.
 *
 * Kopioitava pohja (lisää listaan ennen edellistä päivitystä):
 * {
 *   date: "2026-10-29",
 *   title: "Kirjoita päivityksen otsikko tähän",
 *   changes: [
 *     "Ensimmäinen muutos.",
 *     "Toinen muutos.",
 *   ],
 * },
 */
const entries: SiteUpdate[] = [
  {
    date: "2026-10-27",
    title: "Sivuston päivityshistoria",
    changes: [
      "Etusivun alareunaan lisätty painike, josta pääsee katsomaan sivuston päivitykset.",
      "Päivityshistoriassa näkyvät muutosten päivämäärät, otsikot ja kuvaukset uusimmasta alkaen.",
    ],
  },
    {
    date: "2026-10-28",
    title: "Sivuston päivityshistoria",
    changes: [
      "Gurupeli on saanut uusia kysymyksiä",
      "Valintakoe G -kurssin harjoituksia päivitetty",
      "Oikis Teho - kurssi saanut lisää teoriaa",
      "Yleisiä parannuksia ja korjauksia"
      
    ],
  },
];

const siteUpdates = [...entries].sort((a, b) =>
  b.date.localeCompare(a.date),
);

function formatUpdateDate(date: string) {
  return new Intl.DateTimeFormat("fi-FI", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "Europe/Helsinki",
  }).format(new Date(`${date}T12:00:00Z`));
}

export const metadata: Metadata = {
  title: "Päivitykset",
  description:
    "Katso, mitä ValintaGurussa on päivitetty. Uudet ominaisuudet, sisällöt ja korjaukset päivämäärineen.",
  alternates: { canonical: "/paivitykset" },
};

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <Link href="/" className="font-serif text-2xl font-semibold">
            ValintaGuru
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
          >
            <span aria-hidden="true">←</span>
            Takaisin etusivulle
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#3f51e7]">
          ValintaGuru kehittyy
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Mitä on päivitetty?
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Täältä löydät sivuston uudet ominaisuudet, sisältöpäivitykset ja
          korjaukset.
        </p>

        {siteUpdates.length === 0 ? (
          <p className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">
            Päivityksiä ei ole vielä julkaistu. Kerromme tulevista muutoksista
            tällä sivulla.
          </p>
        ) : (
          <ol aria-label="Päivityshistoria" className="mt-10 space-y-6">
            {siteUpdates.map((update, index) => (
              <li key={`${update.date}-${update.title}-${index}`}>
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <time
                      dateTime={update.date}
                      className="text-sm font-bold text-slate-500"
                    >
                      {formatUpdateDate(update.date)}
                    </time>
                    {index === 0 && (
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-[#3f51e7]">
                        Uusin päivitys
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                    {update.title}
                  </h2>
                  <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-600 marker:text-[#3f51e7]">
                    {update.changes.map((change, changeIndex) => (
                      <li key={changeIndex}>{change}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
}
