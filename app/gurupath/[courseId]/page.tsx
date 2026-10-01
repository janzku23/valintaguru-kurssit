import {
  notFound,
} from "next/navigation";

import GuruPathMap from "@/components/gurupath/GuruPathMap";

import {
  getGuruGameDefinition,
  isGuruGameId,
} from "@/data/gurupath";

import {
  hasGuruGameAccess,
} from "@/lib/gurupath/hasGuruGameAccess";

export const dynamic =
  "force-dynamic";

export default async function GuruPathCoursePage({
  params,
}: {
  params: Promise<{
    courseId: string;
  }>;
}) {
  const {
    courseId,
  } = await params;

  /**
   * URL:ssa sallitaan vain kaksi canonical-peliä:
   * /gurupath/oikis
   * /gurupath/valintakoe-g
   */
  if (
    !isGuruGameId(
      courseId
    )
  ) {
    notFound();
  }

  const definition =
    getGuruGameDefinition(
      courseId
    );

  const hasAccess =
    await hasGuruGameAccess(
      courseId
    );

  if (!hasAccess) {
    return (
      <main className="min-h-[calc(100vh-4rem)] bg-[#f8fafc] px-4 py-10 text-slate-950 sm:px-6">
        <section className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-600">
              GuruPeli
            </p>

            <h1 className="mt-2 text-3xl font-black">
              Kurssioikeus vaaditaan
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              {definition.title} GuruPeli avautuu, kun käyttäjällä on jokin tämän kurssiperheen aktiivisista kurssipaketeista.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f8fafc] text-slate-950">
      <GuruPathMap
        gameId={
          courseId
        }
      />
    </main>
  );
}
