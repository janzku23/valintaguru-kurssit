import { courses, isCourseId } from "@/data/courses";

export default async function KauppaPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course: requestedCourse } = await searchParams;
  const selectedCourseId =
    requestedCourse && isCourseId(requestedCourse) ? requestedCourse : null;

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <span aria-hidden="true">←</span>
            Takaisin
          </a>

          <a
            href="https://holvi.com/shop/ValintaGuru/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#3142d6]"
          >
            Avaa Holvi-kauppa
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-900/15 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
            Kurssikauppa
          </p>

          <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Valitse oma kurssisi
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-50">
            Jokainen kokonaisuus on nyt kurssialustalla oma erillinen kurssinsa,
            jolla on oma teoria, harjoitukset, edistyminen ja GuruPath.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => {
            const selected = course.id === selectedCourseId;

            return (
              <article
                key={course.id}
                className={`flex min-h-[330px] flex-col rounded-[2rem] border bg-white p-6 shadow-sm transition sm:p-7 ${
                  selected
                    ? "border-[#3f51e7] ring-4 ring-indigo-100"
                    : "border-slate-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#3f51e7]">
                    {course.label}
                  </span>

                  {selected && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">
                      Valittu
                    </span>
                  )}
                </div>

                <h2 className="mt-5 text-2xl font-black leading-tight">
                  {course.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                  {course.modules.slice(0, 5).map((module) => (
                    <span
                      key={module.id}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5"
                    >
                      {module.title}
                    </span>
                  ))}
                </div>

                <a
                  href={course.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3.5 font-black text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#3142d6]"
                >
                  Osta Holvista
                  <span className="ml-2" aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 sm:p-6">
          <p className="font-black text-indigo-950">Holvi-linkit yhdessä paikassa</p>
          <p className="mt-2 leading-7 text-indigo-950/80">
            Kun jokaiselle tuotteelle on oma Holvi-tuotelinkki, vaihda linkit vain
            tiedostosta <code>data/courses/purchase.ts</code>. Muu sivusto ei vaadi
            sen jälkeen muutoksia.
          </p>
        </div>
      </section>
    </main>
  );
}
