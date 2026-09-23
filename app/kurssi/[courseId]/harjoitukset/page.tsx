import { notFound } from "next/navigation";
import CourseMaterialSidebar from "@/components/CourseMaterialSidebar";
import PracticeExercisesView from "@/components/PracticeExercisesView";
import ValintakoeGExercisesView from "@/components/ValintakoeGExercisesView";
import QuizView from "@/components/QuizView";
import {
  getCourseById,
  isCourseId,
} from "@/data/courses";
import { getCourseContent } from "@/data/courseContent";
import {
  getPracticeExamsForCourse,
  isPracticeExamCourseId,
  toPublicPracticeExam,
} from "@/data/practiceExams";
import { hasCourseAccess } from "@/lib/courseAccess";
import {
  getValintakoeGExercises,
  isValintakoeGCourseId,
  toPublicValintakoeGExercise,
} from "@/data/valintakoeGExercises";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
  searchParams: Promise<{
    koe?: string;
  }>;
};

export default async function CourseTasksPage({
  params,
  searchParams,
}: Props) {
  const { courseId } = await params;
  const { koe } = await searchParams;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const allowed =
    await hasCourseAccess(courseId);

  if (!allowed) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-6 py-16 text-slate-950">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
          <p className="font-bold text-blue-700">
            Ei käyttöoikeutta
          </p>

          <h1 className="mt-3 text-3xl font-extrabold">
            Sinulla ei ole pääsyä kurssin{" "}
            {course.title} harjoituksiin
          </h1>

          <a
            href="/"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Takaisin omiin kursseihin
          </a>
        </div>
      </main>
    );
  }

  /*
   * VALINTAKOE G + VALINTAKOE G ETÄOPETUS
   *
   * Näillä kursseilla käytetään omaa Valintakoe G -harjoittelumoottoria,
   * omaa lukutaitoprofiilia ja omaa pisteytyslogiikkaa.
   * Oikeustieteen harjoituskoemoottoriin ei kosketa.
   */
  if (isValintakoeGCourseId(courseId)) {
    const exercises = getValintakoeGExercises(courseId).map(
      toPublicValintakoeGExercise
    );

    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <ValintakoeGExercisesView
            course={course}
            exercises={exercises}
            initialExerciseId={koe}
          />
        </div>
      </main>
    );
  }

  /*
   * OIKIS + OIKIS TEHO
   *
   * Näillä kursseilla vanhaa QuizView-monivalintaa
   * EI enää näytetä lainkaan.
   *
   * Harjoitukset ovat kokonaan uuden ajastetun
   * koemoottorin varassa.
   */
  if (isPracticeExamCourseId(courseId)) {
    const exams =
      getPracticeExamsForCourse(courseId).map(
        toPublicPracticeExam
      );

    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <PracticeExercisesView
            course={course}
            exams={exams}
            initialExamId={koe}
          />
        </div>
      </main>
    );
  }

  /*
   * YO säilyy ennallaan.
   * Sen nykyiset tavalliset monivalinnat voivat
   * edelleen käyttää QuizView-komponenttia.
   */
  const content =
    getCourseContent(courseId);

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-8 text-white shadow-sm">
          <p className="font-semibold text-blue-100">
            {course.label}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            Harjoitukset
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
            Tämä näkymä näyttää kurssin{" "}
            {course.title} harjoitukset.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <CourseMaterialSidebar
            course={course}
            activePage="tasks"
          />

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Aiheharjoitukset
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
                {course.title}
              </h2>
            </div>

            <QuizView
              courseId={courseId}
              questions={
                content.quizQuestions
              }
            />
          </section>
        </div>
      </div>
    </main>
  );
}
