import { notFound } from "next/navigation";
import CourseMaterialSidebar from "@/components/CourseMaterialSidebar";
import PodcastView from "@/components/PodcastView";
import {
  getCourseById,
  isCourseId,
} from "@/data/courses";
import { getPodcastContent } from "@/data/podcasts";
import { hasCourseAccess } from "@/lib/courseAccess";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CoursePodcastPage({
  params,
}: Props) {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course =
    getCourseById(courseId);

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
            {course.title} podcast-sisältöön
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

  const content =
    getPodcastContent(courseId);

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-8 text-white shadow-sm">
          <p className="font-semibold text-blue-100">
            {course.label}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            Podcast
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
            Kuuntele, seuraa esitystä ja kertaa jakson tärkeimmät asiat.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <CourseMaterialSidebar
            course={course}
            activePage="podcast"
          />

          <section className="min-w-0">
            {content ? (
              <>
                <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    {content.title}
                  </p>

                  <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">
                    {content.description}
                  </p>
                </div>

                <PodcastView
                  content={content}
                />
              </>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Podcast
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                  Podcast-sisältöä ei ole vielä lisätty
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Tälle kurssille voidaan lisätä Canva-esitys, äänitiedosto ja tiivis teoriaosuus.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
