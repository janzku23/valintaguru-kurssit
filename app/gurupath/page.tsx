import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { courses } from "@/data/courses";
import { hasCourseAccess } from "@/lib/courseAccess";

export const dynamic = "force-dynamic";

export default async function GuruPathPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/kirjaudu?next=/gurupath");
  }

  const accessResults = await Promise.all(
    courses.map(async (course) => ({
      course,
      hasAccess: await hasCourseAccess(course.id),
    }))
  );

  const availableCourses = accessResults
    .filter((item) => item.hasAccess)
    .map((item) => item.course);

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6">
      <section className="mx-auto w-full max-w-5xl">
        <a
          href="/"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
        >
          ← Takaisin etusivulle
        </a>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-700">
                ValintaGuru
              </p>

              <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
                GuruPath
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Etene vain niiden kurssien poluilla, joihin sinulla on
                aktiivinen käyttöoikeus. Kaikista kursseista kertyy sama
                Guru Level ja yhteinen ranking.
              </p>
            </div>

            <a
              href="/gurupath/ranking"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-violet-700"
            >
              Avaa ranking
            </a>
          </div>

          {availableCourses.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {availableCourses.map((course, index) => (
                <a
                  key={course.id}
                  href={`/gurupath/${course.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 p-5 transition hover:border-violet-300 hover:bg-violet-50/40"
                >
                  <div className="absolute right-4 top-4 text-5xl font-black text-slate-100 transition group-hover:text-violet-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                      Kurssipolku
                    </p>

                    <h2 className="mt-2 pr-12 text-2xl font-black">
                      {course.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Ratkaise haasteita, avaa reittejä ja kerää pisteitä
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-violet-700">
                      Avaa polku
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-950">
                Ei aktiivisia GuruPath-kursseja
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                GuruPath näyttää vain ne kurssit, joihin käyttäjätililläsi
                on aktiivinen käyttöoikeus.
              </p>
              <a
                href="/"
                className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"
              >
                Takaisin etusivulle
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
