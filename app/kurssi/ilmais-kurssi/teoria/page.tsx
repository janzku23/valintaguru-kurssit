import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import { freeCourseTheory2026 } from "@/data/freeCourseTheory2026";

export default function FreeCourseTheoryPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-[#3f51e7] p-7 text-white shadow-sm sm:p-9">
          <p className="font-semibold text-blue-100">Ilmainen kurssi</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Teoria ja koeaineistot</h1>
          <p className="mt-4 max-w-3xl leading-7 text-blue-50 sm:text-lg">Vuoden 2026 Valintakoe G:n yhteisen osion kaksi alkuperäistä koeaineistoa.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <FreeCourseSidebar active="theory" />

          <section className="min-w-0 space-y-6">
            <article id="webinaari" className="scroll-mt-32 rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-[#3f51e7]">Webinaari 4.11.</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Maksuton ValintaGuru-webinaari</h2>
              <p className="mt-4 leading-8 text-slate-700">Webinaarilinkki ilmestyy tähän lähempänä 4.11. Sinun ei tarvitse ilmoittautua uudelleen.</p>
              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 font-bold text-[#3142d6]">Linkki tulossa lähempänä 4.11.</div>
            </article>

            {freeCourseTheory2026.map((article, articleIndex) => (
              <article key={article.id} id={article.id} className="scroll-mt-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 p-6 sm:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-700">Aineisto {articleIndex + 1}</p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">{article.title}</h2>
                  <p className="mt-2 font-semibold text-slate-600">{article.author}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={article.localPdfUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white">Avaa PDF</a>
                    <a href={article.originalPdfUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800">Alkuperäinen lähde</a>
                  </div>
                </div>

                <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
                  {article.pages.map((page) => (
                    <section key={page.page} className="mb-10 last:mb-0">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">Sivu {page.page}</span>
                      </div>
                      <div className="space-y-4">
                        {page.blocks.map((block, blockIndex) => (
                          <p key={`${page.page}-${blockIndex}`} className="text-[16px] leading-8 text-slate-800 sm:text-[17px]">{block}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
