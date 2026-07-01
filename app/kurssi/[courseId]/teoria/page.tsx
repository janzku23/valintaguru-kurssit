import { notFound } from "next/navigation";
import CourseMaterialSidebar from "../../../../components/CourseMaterialSidebar";
import TheoryCard from "../../../../components/TheoryCard";
import { getCourseById, isCourseId } from "../../../../data/courses";
import { getCourseContent } from "../../../../data/courseContent";
import { hasCourseAccess } from "../../../../lib/courseAccess";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CourseTheoryPage({ params }: Props) {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const allowed = hasCourseAccess(courseId);

  if (!allowed) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-6 py-16 text-slate-950">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
          <p className="font-bold text-blue-700">Ei käyttöoikeutta</p>

          <h1 className="mt-3 text-3xl font-extrabold">
            Sinulla ei ole pääsyä kurssin {course.title} teoriaan
          </h1>

          <p className="mt-4 leading-8 text-slate-700">
            Tämä teoria kuuluu kurssiin, joka ei ole tällä käyttäjällä käytössä.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/"
              className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Takaisin omiin kursseihin
            </a>

            <a
              href="https://valintaguru.fi"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800"
            >
              Valintaguru.fi
            </a>
          </div>
        </div>
      </main>
    );
  }

  const content = getCourseContent(courseId);

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-8 text-white shadow-sm">
          <p className="font-semibold text-blue-100">
            {course.label}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            Teoria
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
            Tämä näkymä näyttää vain kurssin {course.title} teoriaosuudet.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <CourseMaterialSidebar course={course} activePage="theory" />

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Kurssi
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
                {course.title}
              </h2>

              <p className="mt-3 text-lg leading-8 text-slate-700">
                {course.description}
              </p>
            </div>

            {content.theorySections.map((section) => (
              <TheoryCard key={section.id} section={section} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}