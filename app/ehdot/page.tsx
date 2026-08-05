import Link from "next/link";
import { legalPages } from "@/data/legalPages";

const descriptions: Record<string, string> = {
  tietosuojakaytanto:
    "Tietoa siitä, mitä henkilötietoja keräämme ja kuinka käsittelemme niitä.",

  palautuskaytanto:
    "Digitaalisten kurssien peruuttamista, palautuksia ja kurssien vaihtamista koskevat ehdot.",

  kayttoehdot:
    "ValintaGurun palveluiden tilaamista, käyttämistä ja kurssimateriaaleja koskevat ehdot.",

  toimituskaytanto:
    "Tietoa digitaalisten kurssien käyttöoikeuksien ja kirjautumisohjeiden toimittamisesta.",

  yhteystiedot:
    "ValintaGuru Oy:n yritys- ja asiakaspalvelutiedot.",

  "oikeudellinen-huomautus":
    "Palvelun sisältöä, vastuita ja ulkopuolisia palveluita koskevat huomautukset.",
};

export default function LegalPagesIndex() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <header className="border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            ValintaGuru
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
          >
            Etusivulle
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">
            ValintaGuru Oy
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-6xl">
            Ehdot ja yritystiedot
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Tutustu ValintaGurun tietosuojakäytäntöön, käyttöehtoihin,
            palautus- ja toimituskäytäntöihin sekä yrityksen
            yhteystietoihin.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {legalPages.map((page) => (
            <Link
              key={page.slug}
              href={`/ehdot/${page.slug}`}
              className="group flex min-h-[230px] flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 font-bold text-[#3f51e7] transition group-hover:bg-[#3f51e7] group-hover:text-white">
                →
              </span>

              <h2 className="mt-6 font-serif text-2xl font-semibold">
                {page.title}
              </h2>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {descriptions[page.slug]}
              </p>

              <span className="mt-6 text-sm font-bold text-[#3f51e7]">
                Lue lisää →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}