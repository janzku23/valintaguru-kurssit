import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import FreeCoursePracticeClient from "@/components/FreeCoursePracticeClient";

export default function FreeCourseExercisesPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-[#3f51e7] p-7 text-white shadow-sm sm:p-9">
          <p className="font-semibold text-blue-100">Ilmainen kurssi</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Valintakoe G 2026 – yhteinen osio</h1>
          <p className="mt-4 max-w-3xl leading-7 text-blue-50 sm:text-lg">Alkuperäiset 70 kysymystä, vastausvaihtoehdot, oikeat vastaukset ja sama pisteytys.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <FreeCourseSidebar active="exercises" />
          <section className="min-w-0"><FreeCoursePracticeClient /></section>
        </div>
      </div>
    </main>
  );
}
