import { Course } from "../data/courses";

type Props = {
  course: Course;
};

export default function LockedCourseCard({ course }: Props) {
  return (
    <article className="flex min-h-[260px] flex-col rounded-3xl border border-slate-200 bg-white/70 p-6 opacity-80 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
          Ei käytössä
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
          Lukittu
        </span>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-700">
        {course.title}
      </h2>

      <p className="mt-4 flex-1 leading-8 text-slate-600">
        {course.description}
      </p>

      <a
        href="https://valintaguru.fi"
        className="mt-6 inline-flex w-fit rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
      >
        Katso lisätiedot
      </a>
    </article>
  );
}