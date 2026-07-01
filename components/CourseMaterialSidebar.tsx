import { Course } from "../data/courses";

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

export default function CourseMaterialSidebar({ course, activePage }: Props) {
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
          const isActive = link.id === activePage;

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