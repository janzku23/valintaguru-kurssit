import { notFound } from "next/navigation";
import GuruPathMap from "@/components/gurupath/GuruPathMap";
import { getCourseById, isCourseId } from "@/data/courses";
import { hasCourseAccess } from "@/lib/courseAccess";

export const dynamic = "force-dynamic";

export default async function GuruPathCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const hasAccess = await hasCourseAccess(courseId);

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6">
        <section className="mx-auto max-w-3xl">
          <a
            href="/gurupath"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700"
          >
            ← Takaisin GuruPeliin
          </a>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">
              GuruPeli
            </p>
            <h1 className="mt-2 text-3xl font-black">
              Kurssioikeus vaaditaan
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Tähän polkuun ei löytynyt aktiivista käyttöoikeutta.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6">
      <div className="mx-auto mb-5 w-full max-w-6xl">
        <a
          href="/gurupath"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
        >
          ← Takaisin GuruPeliin
        </a>
      </div>

      <GuruPathMap
        courseId={courseId}
        courseName={course.title}
      />
    </main>
  );
}
