import { notFound } from "next/navigation";
import Link from "next/link";
import CourseMaterialSidebar from "../../../../components/CourseMaterialSidebar";
import ProgressView from "../../../../components/ProgressView";
import { getCourseById, getCourseTitleInSentence, isCourseId } from "../../../../data/courses";
import { hasCourseAccess } from "../../../../lib/courseAccess";
import { getPracticeExamsForCourse } from "@/data/practiceExams";
import { getValintakoeGExercises, isValintakoeGCourseId } from "@/data/valintakoeGExercises";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CourseProgressPage({ params }: Props) {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const practices = isValintakoeGCourseId(courseId)
    ? getValintakoeGExercises(courseId).map((exercise) => ({
        id: exercise.id,
        title: exercise.title,
        href: `/kurssi/${courseId}/harjoitukset?koe=${encodeURIComponent(exercise.id)}`,
        questionIds: exercise.questions.map((question) => question.id),
      }))
    : getPracticeExamsForCourse(courseId).map((exam) => ({
        id: exam.id,
        title: exam.title,
        href: `/kurssi/${courseId}/harjoitukset?koe=${encodeURIComponent(exam.id)}`,
        questionIds: exam.sections.flatMap((section) => section.questions.map((question) => question.id)),
      }));

  const allowed = await hasCourseAccess(courseId);

  if (!allowed) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#f5f8ff] px-4 py-12 text-slate-950 sm:px-6">
        <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="font-bold text-blue-700">
            Ei käyttöoikeutta
          </p>

          <h1 className="mt-3 text-3xl font-extrabold">
            Sinulla ei ole pääsyä kurssin {getCourseTitleInSentence(course)} edistymiseen
          </h1>

          <p className="mt-4 leading-8 text-slate-700">
            Tämä edistymisnäkymä kuuluu kurssiin, joka ei ole tällä käyttäjällä käytössä.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Takaisin omiin kursseihin
            </Link>

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

  return (
    <main className="min-h-screen w-full bg-[#f5f8ff] px-4 py-6 text-slate-950 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-[1500px]">
        <header className="mb-6 flex min-w-0 flex-wrap items-end justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{course.label}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Edistyminen</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Tunnista vahvuutesi, seuraa kehitystäsi ja löydä seuraava askel harjoitteluun.</p>
          </div>
          <a href={`/kurssi/${courseId}/harjoitukset`} className="inline-flex min-h-11 items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
            Jatka harjoittelua <span aria-hidden="true">→</span>
          </a>
        </header>

        <details className="mb-5 min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm lg:hidden">
          <summary className="min-h-11 cursor-pointer px-4 py-3 text-sm font-bold text-slate-700">Kurssin sisällysluettelo</summary>
          <CourseMaterialSidebar course={course} activePage="progress" />
        </details>

        <div className="grid min-w-0 items-start gap-5 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-6">
          <div className="hidden min-w-0 lg:sticky lg:top-24 lg:block">
            <CourseMaterialSidebar course={course} activePage="progress" />
          </div>
          <section aria-label="Oman oppimisen seuranta" className="min-w-0">
            <ProgressView key={courseId} courseId={courseId} practices={practices} />
          </section>
        </div>
      </div>
    </main>
  );
}
