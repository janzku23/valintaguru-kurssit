type Props = {
  title: string;
  description: string;
};

export default function FreeCoursePageHeader({ title, description }: Props) {
  return (
    <header className="mb-10 rounded-3xl border border-indigo-100 bg-white px-6 py-8 sm:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3f51e7]">Maksuton kurssi</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </header>
  );
}
