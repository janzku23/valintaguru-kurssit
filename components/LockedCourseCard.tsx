import { Course } from "../data/courses";

type Props = {
  course: Course;
};

export default function LockedCourseCard({ course }: Props) {
  return (
    <article className="flex min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
          Ei käytössä
        </span>

        <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">
          Saatavilla
        </span>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-800">
        {course.title}
      </h2>

      <p className="mt-4 flex-1 leading-8 text-slate-600">
        {course.description}
      </p>

      <a
        href={`/kauppa?course=${encodeURIComponent(course.id)}`}
        className="mt-6 inline-flex w-fit rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#3142d6]"
      >
        Osta / tutustu
      </a>
    </article>
  );
}
