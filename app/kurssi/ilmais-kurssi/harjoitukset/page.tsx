import FreeCoursePageHeader from "@/components/FreeCoursePageHeader";
import Link from "next/link";
import FreeCourseSidebar from "@/components/FreeCourseSidebar";

const exams = [
  {
    title: "Yhteinen osio",
    description:
      "Saat käyttää koeaineistoja koko kokeen ajan.",
    href: "/kurssi/ilmais-kurssi/harjoitukset/valintakoe-g-2026",
    badge: "70 kysymystä · 2 h",
    accent: "blue",
  },
  {
    title: "Oikeustieteen eriytyvä osio",
    description:
      "Lue ennakkomateriaalit ennen koetta ja sulje ne aloittaessasi.",
    href: "/kurssi/ilmais-kurssi/harjoitukset/oikeustiede-2026",
    badge: "30 kysymystä · 1 h",
    accent: "violet",
  },
] as const;

export default function FreeCourseExercisesPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-10 text-slate-950 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FreeCoursePageHeader
          title="Harjoituskokeet"
          description="Valitse koe. Tutustu aineistoihin ja aloita, kun olet valmis."
        />

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <FreeCourseSidebar active="exercises" />

          <section aria-label="Valitse harjoituskoe" className="grid min-w-0 gap-6 self-start md:grid-cols-2">
            {exams.map((exam) => (
              <Link
                key={exam.href}
                href={exam.href}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7] sm:p-8"
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

                <p className="mt-7 text-xs font-semibold text-slate-500">Valintakoe G · 2026</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950">
                  {exam.title}
                </h2>

                <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                  {exam.description}
                </p>

                <span
                  className={`mt-8 border-t border-slate-100 pt-6 text-sm font-bold ${
                    exam.accent === "violet"
                      ? "text-violet-700"
                      : "text-blue-700"
                  }`}
                >
                  Siirry kokeeseen →
                </span>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
