import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import FreeCourseLawPracticeClient from "@/components/FreeCourseLawPracticeClient";

export default function FreeCourseLawExam2026Page() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-violet-800 to-[#3f51e7] p-7 text-white shadow-sm sm:p-9">
          <p className="font-semibold text-violet-100">Ilmainen kurssi</p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Oikeustieteen eriytyvä osio 2026
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-violet-50 sm:text-lg">
            Alkuperäiset C1–C30-kysymykset, 60 minuutin koeaika ja sama
            +1 / −1 / 0 -pisteytys kuin vuoden 2026 kokeessa.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <FreeCourseSidebar active="exercises" />

          <section className="min-w-0">
            <FreeCourseLawPracticeClient />
          </section>
        </div>
      </div>
    </main>
  );
}
