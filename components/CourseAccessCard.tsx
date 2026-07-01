import { Course } from "../data/courses";

type Props = {
  course: Course;
};

export default function CourseAccessCard({ course }: Props) {
  return (
    <article className="flex min-h-[260px] flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
          Käytössä
        </span>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
          Avattu
        </span>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-950">
        {course.title}
      </h2>

      <p className="mt-4 flex-1 leading-8 text-slate-700">
        {course.description}
      </p>

      <a
        href={`/kurssi/${course.id}`}
        className="mt-6 inline-flex w-fit rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
      >
        Avaa kurssi
      </a>
    </article>
  );
}