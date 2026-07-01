import type { TheoryCourse } from "../data/courseContent";

type Props = {
  courses: TheoryCourse[];
  activeCourseId: string;
  activeSectionId: string;
  onSelectCourse: (courseId: string) => void;
  onSelectSection: (courseId: string, sectionId: string) => void;
};

export default function TheorySidebar({
  courses,
  activeCourseId,
  activeSectionId,
  onSelectCourse,
  onSelectSection,
}: Props) {
  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:w-80">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Sisällysluettelo
        </p>
        <h2 className="mt-1 text-xl font-extrabold text-slate-950">
          Materiaalit
        </h2>
      </div>

      <nav className="space-y-3">
        {courses.map((course) => {
          const isActiveCourse = course.id === activeCourseId;

          return (
            <div
              key={course.id}
              className={`rounded-2xl border p-3 transition ${
                isActiveCourse
                  ? "border-blue-200 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => onSelectCourse(course.id)}
                className="flex w-full items-center justify-between text-left"
              >
                <span
                  className={`font-bold ${
                    isActiveCourse ? "text-blue-800" : "text-slate-900"
                  }`}
                >
                  {course.title}
                </span>

                <span
                  className={`rounded-full px-2 py-1 text-xs font-bold ${
                    isActiveCourse
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {course.sections.length}
                </span>
              </button>

              {isActiveCourse && (
                <div className="mt-3 space-y-2">
                  {course.sections.map((section, index) => {
                    const isActiveSection = section.id === activeSectionId;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => onSelectSection(course.id, section.id)}
                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition ${
                          isActiveSection
                            ? "bg-blue-600 text-white"
                            : "bg-white text-slate-700 hover:bg-blue-100"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${
                            isActiveSection
                              ? "bg-white text-blue-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {index + 1}
                        </span>

                        <span className="text-sm font-semibold leading-6">
                          {section.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}