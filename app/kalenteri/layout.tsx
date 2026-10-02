import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { courses } from "@/data/courses";
import { hasCourseAccess } from "@/lib/courseAccess";

export const dynamic = "force-dynamic";

export default async function CalendarAccessLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/kirjaudu?next=/kalenteri");
  }

  const accessResults = await Promise.all(
    courses.map((course) => hasCourseAccess(course.id))
  );

  const hasPaidCourseAccess = accessResults.some(Boolean);

  if (!hasPaidCourseAccess) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-12 text-slate-950 sm:px-6">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#3f51e7]">
            ValintaGuru kalenteri
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Kalenteri kuuluu maksullisiin valmennuskursseihin
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            Ilmaiskurssi ei avaa Kalenteria. Saat Kalenterin käyttöön, kun tililläsi on vähintään yksi aktiivinen maksullisen kurssin käyttöoikeus.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/kurssi/ilmais-kurssi"
              className="rounded-full bg-[#3f51e7] px-5 py-3 text-sm font-black text-white"
            >
              Takaisin ilmaiskurssille
            </a>
            <a
              href="/"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700"
            >
              Etusivulle
            </a>
          </div>
        </section>
      </main>
    );
  }

  return children;
}
