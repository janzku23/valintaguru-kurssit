"use client";

import { useMemo, useState } from "react";

import { Course } from "../data/courses";
import { getCourseContent } from "../data/courseContent";
import type { TheorySection } from "../data/courseContent/types";

type Props = {
  course: Course;
  activePage:
    | "overview"
    | "theory"
    | "tasks"
    | "flashcards"
    | "progress"
    | "exams";
};

type BiologyGroup = {
  title: string;
  sections: TheorySection[];
};

function getBiologyGroups(
  sections: TheorySection[]
): BiologyGroup[] {
  const biologySections = sections.filter((section) =>
    section.id.startsWith("yo-biologia-")
  );

  const grouped = new Map<string, TheorySection[]>();

  for (const section of biologySections) {
    const groupTitle =
      section.subtitle?.trim() || "Biologia";

    const existing = grouped.get(groupTitle);

    if (existing) {
      existing.push(section);
    } else {
      grouped.set(groupTitle, [section]);
    }
  }

  return Array.from(grouped.entries())
    .map(([title, groupedSections]) => ({
      title,
      sections: groupedSections,
    }))
    .sort((a, b) =>
      a.title.localeCompare(b.title, "fi", {
        numeric: true,
      })
    );
}

function getChapterNumber(title: string) {
  const match = title.match(/^(\d+\.\d+)/);

  return match?.[1] ?? "";
}

function removeChapterNumber(title: string) {
  return title.replace(/^\d+\.\d+\s*/, "");
}

export default function CourseMaterialSidebar({
  course,
  activePage,
}: Props) {
  const [biologyOpen, setBiologyOpen] = useState(
    activePage === "theory"
  );

  const [openBiologyGroups, setOpenBiologyGroups] =
    useState<Record<string, boolean>>({});

  const courseContent = useMemo(() => {
    try {
      return getCourseContent(course.id);
    } catch {
      return null;
    }
  }, [course.id]);

  const biologyGroups = useMemo(() => {
    if (!courseContent) {
      return [];
    }

    return getBiologyGroups(
      courseContent.theorySections
    );
  }, [courseContent]);

  const links = [
    {
      id: "overview",
      title: "Kurssin etusivu",
      href: `/kurssi/${course.id}`,
    },
    {
      id: "theory",
      title: "Teoria",
      href: `/kurssi/${course.id}/teoria`,
    },
    {
      id: "tasks",
      title: "Harjoitukset",
      href: `/kurssi/${course.id}/harjoitukset`,
    },
    {
      id: "flashcards",
      title: "Flashcardit",
      href: `/kurssi/${course.id}/flashcardit`,
    },
    {
      id: "progress",
      title: "Edistyminen",
      href: `/kurssi/${course.id}/edistyminen`,
    },
  ];

  function toggleBiologyGroup(title: string) {
    setOpenBiologyGroups((current) => ({
      ...current,
      [title]: !current[title],
    }));
  }

  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:w-80">
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
            link.id === activePage;

          const isTheory =
            link.id === "theory";

          if (!isTheory) {
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
          }

          return (
            <div
              key={link.id}
              className="overflow-hidden rounded-2xl"
            >
              <div
                className={`flex items-center ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-50 text-slate-700"
                }`}
              >
                <a
                  href={link.href}
                  className="flex-1 px-4 py-3 text-sm font-bold"
                >
                  {link.title}
                </a>

                {course.id === "yo" &&
                  biologyGroups.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setBiologyOpen(
                          (current) => !current
                        )
                      }
                      className={`mr-2 flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black transition ${
                        isActive
                          ? "bg-white/20 text-white hover:bg-white/30"
                          : "bg-white text-slate-500 hover:bg-blue-50"
                      }`}
                      aria-label={
                        biologyOpen
                          ? "Sulje teoria"
                          : "Avaa teoria"
                      }
                    >
                      {biologyOpen ? "−" : "+"}
                    </button>
                  )}
              </div>

              {course.id === "yo" &&
                activePage === "theory" &&
                biologyOpen &&
                biologyGroups.length > 0 && (
                  <div className="mt-2 space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
                    <div className="rounded-xl bg-white">
                      <div className="flex items-center justify-between px-3 py-3">
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">
                            Biologia
                          </p>

                          <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                            Biologia 1–6
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1 border-t border-slate-100 p-2">
                        {biologyGroups.map(
                          (group) => {
                            const isOpen =
                              openBiologyGroups[
                                group.title
                              ] ?? false;

                            return (
                              <div
                                key={group.title}
                                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleBiologyGroup(
                                      group.title
                                    )
                                  }
                                  className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition ${
                                    isOpen
                                      ? "bg-blue-50"
                                      : "hover:bg-slate-50"
                                  }`}
                                >
                                  <div>
                                    <p
                                      className={`text-sm font-extrabold ${
                                        isOpen
                                          ? "text-blue-800"
                                          : "text-slate-800"
                                      }`}
                                    >
                                      {
                                        group.title
                                      }
                                    </p>

                                    <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                                      {
                                        group
                                          .sections
                                          .length
                                      }{" "}
                                      lukua
                                    </p>
                                  </div>

                                  <span className="text-sm font-black text-slate-400">
                                    {isOpen
                                      ? "−"
                                      : "+"}
                                  </span>
                                </button>

                                {isOpen && (
                                  <div className="space-y-1 border-t border-slate-100 p-1.5">
                                    {group.sections.map(
                                      (section) => {
                                        const chapter =
                                          getChapterNumber(
                                            section.title
                                          );

                                        const title =
                                          removeChapterNumber(
                                            section.title
                                          );

                                        return (
                                          <a
                                            key={
                                              section.id
                                            }
                                            href={`/kurssi/${course.id}/teoria?section=${encodeURIComponent(
                                              section.id
                                            )}`}
                                            className="flex items-start gap-2 rounded-lg px-2.5 py-2.5 text-left transition hover:bg-blue-50"
                                          >
                                            {chapter && (
                                              <span className="mt-0.5 shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-black text-slate-600">
                                                {
                                                  chapter
                                                }
                                              </span>
                                            )}

                                            <span className="text-xs font-semibold leading-5 text-slate-700">
                                              {
                                                title
                                              }
                                            </span>
                                          </a>
                                        );
                                      }
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}