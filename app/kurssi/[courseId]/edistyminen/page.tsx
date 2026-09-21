import { notFound } from "next/navigation";
import CourseMaterialSidebar from "../../../../components/CourseMaterialSidebar";
import ProgressView from "../../../../components/ProgressView";
import { getCourseById, isCourseId } from "../../../../data/courses";
import { hasCourseAccess } from "../../../../lib/courseAccess";

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

  const allowed = await hasCourseAccess(courseId);

  if (!allowed) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#f5f8ff] px-4 py-12 text-slate-950 sm:px-6">
        <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="font-bold text-blue-700">
            Ei käyttöoikeutta
          </p>

          <h1 className="mt-3 text-3xl font-extrabold">
            Sinulla ei ole pääsyä kurssin {course.title} edistymiseen
          </h1>

          <p className="mt-4 leading-8 text-slate-700">
            Tämä edistymisnäkymä kuuluu kurssiin, joka ei ole tällä käyttäjällä käytössä.
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

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f5f8ff] px-3 py-6 text-slate-950 sm:px-5 sm:py-8 lg:px-6 xl:px-8">
      <div className="mx-auto min-w-0 w-full max-w-[1500px]">
        <header className="mb-6 min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-6 text-white shadow-sm sm:p-8">
          <p className="font-semibold text-blue-100">
            {course.label}
          </p>

          <h1 className="mt-3 break-words text-3xl font-extrabold sm:text-4xl">
            Edistyminen
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
            Näet tästä kurssin tehtävistä kertyneen edistymisen ja osa-alueet,
            joita kannattaa harjoitella lisää. Tulokset tallentuvat
            kirjautuneelle käyttäjälle Supabaseen.
          </p>
        </header>

        <div className="grid min-w-0 gap-5 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="min-w-0">
            <CourseMaterialSidebar
              course={course}
              activePage="progress"
            />
          </div>

          <section className="min-w-0 max-w-full space-y-5 overflow-hidden">
            <div className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Kurssi
              </p>

              <h2 className="mt-2 break-words text-2xl font-extrabold text-slate-950 sm:text-3xl">
                {course.title}
              </h2>

              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Edistyminen perustuu tämän kurssin harjoituksissa annettuihin
                vastauksiin. Tallennus tapahtuu käyttäjäkohtaisesti Supabaseen.
              </p>
            </div>

            <div className="min-w-0 max-w-full overflow-hidden">
              <ProgressView courseId={courseId} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
