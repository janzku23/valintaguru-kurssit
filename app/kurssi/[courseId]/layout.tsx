import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAvailableCourseModules } from "@/lib/courseNavigation";
import { hasCourseAccess } from "../../../lib/courseAccess";

import {
  getCourseById,
  isCourseId,
} from "../../../data/courses";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    courseId: string;
  }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    return {
      title: "Kurssia ei löytynyt | ValintaGuru",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const course = getCourseById(courseId);

  if (!course) {
    return {
      title: "Kurssia ei löytynyt | ValintaGuru",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      default: course.title,
      template: `%s | ${course.title} | ValintaGuru`,
    },

    description: course.description,

    /**
     * Kurssialue on käyttäjäkohtainen / käyttöoikeuden takana.
     *
     * Emme halua Googlen indeksoivan:
     * - teoriaa
     * - tehtäviä
     * - flashcardeja
     * - podcasteja
     * - edistymistä
     * - kirjautuneen käyttäjän kurssinäkymiä
     */
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        noimageindex: true,
      },
    },

    openGraph: {
      type: "website",
      siteName: "ValintaGuru",
      title: `${course.title} | ValintaGuru`,
      description: course.description,
      locale: "fi_FI",
    },

    twitter: {
      card: "summary_large_image",
      title: `${course.title} | ValintaGuru`,
      description: course.description,
    },
  };
}

export default async function CourseLayout({
  children,
  params,
}: Props) {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  // Navigaatio näytetään vain käyttäjälle, jolla on kurssioikeus.
  // Moduulien näkyvyys tulee nykyisestä keskitetystä hallinnasta.
  const allowed = await hasCourseAccess(courseId);
  const modules = allowed ? getAvailableCourseModules(course) : [];
  const courseHref = `/kurssi/${courseId}`;

  return (
    <div className="min-h-screen bg-[#f5f8ff]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="ValintaGurun etusivu">
            <img src="/logo.png" alt="" className="h-10 w-10 rounded-full object-contain" />
            <span className="hidden text-lg font-extrabold tracking-tight text-blue-800 sm:inline">ValintaGuru</span>
          </a>

          {allowed && (
            <nav aria-label="Kurssin navigaatio" className="hidden min-w-0 items-center gap-1 lg:flex">
              <a href={courseHref} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Kurssin etusivu</a>
              {modules.map((module) => (
                <a key={module.id} href={module.href} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{module.title}</a>
              ))}
            </nav>
          )}

          <div className="flex shrink-0 items-center gap-2">
            <a href="/" className="rounded-full border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700 sm:px-4">Omat kurssit</a>
            {allowed && (
              <details className="group relative lg:hidden">
                <summary className="cursor-pointer list-none rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-blue-700 [&::-webkit-details-marker]:hidden" aria-label="Avaa kurssivalikko">Valikko <span aria-hidden="true">☰</span></summary>
                <nav aria-label="Kurssin mobiilinavigaatio" className="absolute right-0 top-full z-50 mt-2 max-h-[75vh] w-[min(85vw,19rem)] space-y-1 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <a href={courseHref} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50">Kurssin etusivu</a>
                  {modules.map((module) => (
                    <a key={module.id} href={module.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50">{module.title}</a>
                  ))}
                </nav>
              </details>
            )}
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}