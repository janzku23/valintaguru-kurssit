import { notFound } from "next/navigation";
import { getCourseById, isCourseId } from "../../../data/courses";
import { hasCourseAccess } from "../../../lib/courseAccess";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CoursePage({ params }: Props) {
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
            Sinulla ei ole pääsyä kurssiin {course.title}
          </h1>

          <p className="mt-4 leading-8 text-slate-700">
            Tämä kurssi ei kuulu nykyisiin käyttöoikeuksiisi.
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
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-extrabold text-blue-700">
            ValintaGuru
          </a>

          <a
            href="/"
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 hover:text-blue-700"
          >
            Omat kurssit
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-100">
            {course.label}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            {course.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
            {course.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {course.modules.map((module) => (
            <a
              key={module.id}
              href={module.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <h2 className="text-2xl font-extrabold text-blue-700">
                {module.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                {module.description}
              </p>

              <div className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white">
                Avaa
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}