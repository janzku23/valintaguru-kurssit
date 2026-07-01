import { TheorySection } from "../data/courseContent";

type Props = {
  section: TheorySection;
};

export default function TheoryCard({ section }: Props) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
        Teoria
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
        {section.title}
      </h2>

      <div className="mt-6 whitespace-pre-line text-lg leading-9 text-slate-800">
        {section.content}
      </div>
    </article>
  );
}