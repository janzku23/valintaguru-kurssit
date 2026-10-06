import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import { freeCourseTheory2026 } from "@/data/freeCourseTheory2026";

type LawMaterial = {
  id: string;
  label: string;
  title: string;
  scope: string;
  url: string;
  originalUrl?: string;
};

const lawMaterials: readonly LawMaterial[] = [
  {
    id: "oikis-norio",
    label: "Oikeustieteen ennakkomateriaali 1",
    title: "Jaana Norio: Johdatus kuluttajaoikeuteen",
    scope: "Kokeeseen kuuluivat luvut 1–5 ja 7. Luku 6 ei kuulunut ennakkomateriaaliin.",
    url: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Norio-Johdatus-kuluttajaoikeuteen.pdf",
  },
  {
    id: "oikis-rajaesteet",
    label: "Oikeustieteen ennakkomateriaali 2",
    title: "Rajaesteet Pohjoismaissa sosiaali- ja työmarkkinakysymyksissä",
    scope: "Kokeeseen kuuluivat julkaisun sivut 7–80.",
    url: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Rajaesteet-Pohjoismaissa-sosiaali-ja-tyomarkkinakysymyksissa.pdf#page=7",
    originalUrl:
      "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Rajaesteet-Pohjoismaissa-sosiaali-ja-tyomarkkinakysymyksissa.pdf",
  },
] as const;

export default function FreeCourseTheoryPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-[#3f51e7] p-7 text-white shadow-sm sm:p-9">
          <p className="font-semibold text-blue-100">Ilmainen kurssi</p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Teoria ja koeaineistot
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-50 sm:text-lg">
            Vuoden 2026 Valintakoe G:n yhteisen osion aineistot sekä
            oikeustieteen eriytyvän osion kaksi ennakkomateriaalia.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <FreeCourseSidebar active="theory" />

          <section className="min-w-0 space-y-6">
            <article
              id="webinaari"
              className="scroll-mt-32 rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-sm font-black uppercase tracking-[0.15em] text-[#3f51e7]">
                Webinaari 4.11.
              </p>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Maksuton ValintaGuru-webinaari
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Webinaarilinkki ilmestyy tähän lähempänä 4.11. Sinun ei
                tarvitse ilmoittautua uudelleen.
              </p>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 font-bold text-[#3142d6]">
                Linkki tulossa lähempänä 4.11.
              </div>
            </article>

            <section className="rounded-3xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
                Valintakoe G 2026
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Yhteisen osion aineistot
              </h2>
            </section>

            {freeCourseTheory2026.map((article, articleIndex) => (
              <article
                key={article.id}
                id={article.id}
                className="scroll-mt-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 p-6 sm:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-700">
                    Aineisto {articleIndex + 1}
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    {article.title}
                  </h2>

                  <p className="mt-2 font-semibold text-slate-600">
                    {article.author}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={article.localPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white"
                    >
                      Avaa PDF
                    </a>

                    <a
                      href={article.originalPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800"
                    >
                      Alkuperäinen lähde
                    </a>
                  </div>
                </div>

                <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
                  {article.pages.map((page) => (
                    <section key={page.page} className="mb-10 last:mb-0">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                          Sivu {page.page}
                        </span>
                      </div>

                      <div className="space-y-4">
                        {page.blocks.map((block, blockIndex) => (
                          <p
                            key={`${page.page}-${blockIndex}`}
                            className="text-[16px] leading-8 text-slate-800 sm:text-[17px]"
                          >
                            {block}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}

            <section className="rounded-3xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                Oikeustieteen eriytyvä osio 2026
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Ennakkomateriaalit
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-700">
                Oikeustieteen C1–C30-tehtävät perustuivat näihin kahteen
                ennakkomateriaaliin. Materiaalit eivät olleet varsinaisessa
                koetilanteessa käytettävissä.
              </p>
            </section>

            {lawMaterials.map((material) => (
              <article
                key={material.id}
                id={material.id}
                className="scroll-mt-32 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm"
              >
                <div className="border-b border-violet-100 p-6 sm:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-violet-700">
                    {material.label}
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    {material.title}
                  </h2>

                  <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-4 font-semibold leading-7 text-violet-950">
                    {material.scope}
                  </div>

                  <a
                    href={material.originalUrl ?? material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex rounded-full bg-violet-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-800"
                  >
                    Avaa alkuperäinen PDF
                  </a>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <iframe
                      src={material.url}
                      title={material.title}
                      loading="lazy"
                      className="h-[72vh] min-h-[640px] w-full"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Jos selaimesi ei näytä PDF:ää upotettuna, avaa aineisto
                    yllä olevasta painikkeesta uuteen välilehteen.
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
