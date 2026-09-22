import type { Course } from "../data/courses";
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

export default function CourseMaterialSidebar({
  course,
  activePage,
}: Props) {
  const modules =
    getAvailableCourseModules(course);

  const activeHref =
    getActiveHref(
      course.id,
      activePage
    );

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
            link.href === activeHref;

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
