import type { Course } from "../data/courses";
import type { TheorySection } from "../data/courseContent/types";
import { getAvailableCourseModules } from "@/lib/courseNavigation";

type Props = {
  course: Course;
  activePage:
    | "overview"
    | "theory"
    | "tasks"
    | "flashcards"
    | "podcast"
    | "progress"
    | "exams";

  /**
   * Annetaan vain teoriasivulla.
   * Muilla sivuilla sidebar toimii täsmälleen kuten ennenkin.
   */
  theorySections?: TheorySection[];
  activeTheorySectionId?: string;
};

type TheoryGroup = {
  title: string;
  sections: TheorySection[];
};

function getActiveHref(
  courseId: string,
  activePage: Props["activePage"]
) {
  switch (activePage) {
    case "theory":
      return `/kurssi/${courseId}/teoria`;

    case "tasks":
    case "exams":
      return `/kurssi/${courseId}/harjoitukset`;

    case "flashcards":
      return `/kurssi/${courseId}/flashcardit`;

    case "podcast":
      return `/kurssi/${courseId}/podcast`;

    case "progress":
      return `/kurssi/${courseId}/edistyminen`;

    case "overview":
    default:
      return `/kurssi/${courseId}`;
  }
}

function groupTheorySections(
  sections: TheorySection[]
): TheoryGroup[] {
  const groups = new Map<string, TheorySection[]>();

  for (const section of sections) {
    const groupTitle =
      section.subtitle?.trim() || "Muut teoriat";

    const current = groups.get(groupTitle);

    if (current) {
      current.push(section);
    } else {
      groups.set(groupTitle, [section]);
    }
  }

  // Map säilyttää datatiedoston järjestyksen.
  return Array.from(groups.entries()).map(
    ([title, groupedSections]) => ({
      title,
      sections: groupedSections,
    })
  );
}

export default function CourseMaterialSidebar({
  course,
  activePage,
  theorySections = [],
  activeTheorySectionId,
}: Props) {
  /**
   * TÄMÄ ON ALKUPERÄISEN SIDEBARISI TÄRKEÄ LOGIIKKA.
   * Vain kurssille oikeasti saatavilla olevat moduulit näkyvät.
   * Esim. Flashcardit / Podcast / Edistyminen eivät ilmesty,
   * ellei courseNavigation salli niitä.
   */
  const modules =
    getAvailableCourseModules(course);

  const activeHref =
    getActiveHref(
      course.id,
      activePage
    );

  const theoryHref =
    `/kurssi/${course.id}/teoria`;

  const theoryGroups =
    groupTheorySections(theorySections);

  const links = [
    {
      id: "overview",
      title: "Kurssin etusivu",
      href: `/kurssi/${course.id}`,
    },
    ...modules.map((module) => ({
      id: module.id,
      title: module.title,
      href: module.href,
    })),
  ];

  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:w-80 lg:self-start">
      <div className="mb-5">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          {course.label}
        </p>

        <h2 className="mt-1 text-xl font-extrabold text-slate-950">
          Sisällysluettelo
        </h2>
      </div>

      <nav className="space-y-2">
        {links.map((link) => {
          const isActive =
            link.href === activeHref;

          const isTheoryLink =
            link.href === theoryHref;

          /**
           * Teoria laajennetaan vain silloin kun:
           * 1) kyseinen Teoria-moduuli on courseNavigationin mukaan näkyvissä
           * 2) ollaan teoriasivulla
           * 3) teoria-aineistoa on oikeasti olemassa
           *
           * Muut sidebar-linkit säilyvät täysin alkuperäisen logiikan mukaisina.
           */
          if (
            isTheoryLink &&
            activePage === "theory" &&
            theoryGroups.length > 0
          ) {
            return (
              <div
                key={link.id}
                className="overflow-hidden rounded-2xl border border-blue-200 bg-white"
              >
                <a
                  href={link.href}
                  className="flex items-center justify-between bg-blue-600 px-4 py-3 text-sm font-bold text-white"
                >
                  <span>{link.title}</span>

                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs font-black">
                    {theorySections.length}
                  </span>
                </a>

                <div className="space-y-2 p-2">
                  {theoryGroups.map((group) => {
                    const containsActive =
                      group.sections.some(
                        (section) =>
                          section.id ===
                          activeTheorySectionId
                      );

                    return (
                      <details
                        key={group.title}
                        open={containsActive}
                        className="group overflow-hidden rounded-xl border border-slate-200 bg-white"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 bg-slate-50 px-3 py-2.5 text-sm font-extrabold text-slate-900 transition hover:bg-blue-50 [&::-webkit-details-marker]:hidden">
                          <span>{group.title}</span>

                          <span
                            aria-hidden="true"
                            className="text-base font-black text-blue-700 transition group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>

                        <div className="space-y-1 border-t border-slate-200 p-2">
                          {group.sections.map(
                            (section) => {
                              const isActiveSection =
                                section.id ===
                                activeTheorySectionId;

                              return (
                                <a
                                  key={section.id}
                                  href={`${theoryHref}?section=${encodeURIComponent(
                                    section.id
                                  )}`}
                                  className={`block rounded-lg px-3 py-2 text-sm font-semibold leading-5 transition ${
                                    isActiveSection
                                      ? "bg-blue-600 text-white"
                                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                                  }`}
                                >
                                  {section.title}
                                </a>
                              );
                            }
                          )}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <a
              key={link.id}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {link.title}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
