import FreeCourseSidebar from "@/components/FreeCourseSidebar";

const exams = [
  {
    title: "Valintakoe G 2026 – yhteinen osio",
    description:
      "Vuoden 2026 alkuperäinen yhteinen osio: 70 kysymystä, 2 tuntia ja sama +1 / −1 / 0 -pisteytys.",
    href: "/kurssi/ilmais-kurssi/harjoitukset/valintakoe-g-2026",
    badge: "70 kysymystä · 2 h",
    accent: "blue",
  },
  {
    title: "Oikeustieteen eriytyvä osio 2026",
    description:
      "Vuoden 2026 alkuperäinen oikeustieteen eriytyvä osio: C1–C30, 60 minuuttia ja sama +1 / −1 / 0 -pisteytys.",
    href: "/kurssi/ilmais-kurssi/harjoitukset/oikeustiede-2026",
    badge: "30 kysymystä · 1 h",
    accent: "violet",
  },
] as const;

export default function FreeCourseExercisesPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-[#3f51e7] p-7 text-white shadow-sm sm:p-9">
          <p className="font-semibold text-blue-100">Ilmainen kurssi</p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Harjoituskokeet 2026
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-50 sm:text-lg">
            Valitse harjoiteltava koe. Molemmat ovat omia kokonaisia
            koesuorituksiaan ja tallentuvat käyttäjäkohtaisesti.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <FreeCourseSidebar active="exercises" />

          <section className="grid min-w-0 gap-5 md:grid-cols-2">
            {exams.map((exam) => (
              <a
                key={exam.href}
                href={exam.href}
                className="group flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.12em] ${
                    exam.accent === "violet"
                      ? "bg-violet-50 text-violet-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {exam.badge}
                </span>

                <h2 className="mt-5 text-2xl font-black leading-tight text-slate-950">
                  {exam.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {exam.description}
                </p>

                <span
                  className={`mt-6 font-black ${
                    exam.accent === "violet"
                      ? "text-violet-700"
                      : "text-blue-700"
                  }`}
                >
                  Avaa koe →
                </span>
              </a>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
