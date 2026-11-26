import FreeCoursePageHeader from "@/components/FreeCoursePageHeader";
import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import FreeCourseLawPracticeClient from "@/components/FreeCourseLawPracticeClient";

export default function FreeCourseLawExam2026Page() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-10 text-slate-950 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FreeCoursePageHeader
          title="Oikeustieteen eriytyvä osio"
          description="Vuoden 2026 alkuperäinen koe. Lue ennakkomateriaalit ennen aloittamista."
        />

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <FreeCourseSidebar active="exercises" />

          <section className="min-w-0">
            <FreeCourseLawPracticeClient />
          </section>
        </div>
      </div>
    </main>
  );
}
