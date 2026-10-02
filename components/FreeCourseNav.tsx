type Props = {
  active: "overview" | "theory" | "exercises";
};

const links = [
  { id: "overview", title: "Kurssin etusivu", href: "/kurssi/ilmais-kurssi" },
  { id: "theory", title: "Teoria ja webinaari", href: "/kurssi/ilmais-kurssi/teoria" },
  { id: "exercises", title: "Harjoituskokeet", href: "/kurssi/ilmais-kurssi/harjoitukset" },
] as const;

export default function FreeCourseNav({ active }: Props) {
  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:w-80 lg:self-start">
      <div className="mb-5">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-700">
          Maksuton
        </p>
        <h2 className="mt-1 text-xl font-extrabold text-slate-950">
          Ilmainen kurssi
        </h2>
      </div>
      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`block rounded-2xl px-4 py-3 text-sm font-bold transition ${
              active === link.id
                ? "bg-[#3f51e7] text-white"
                : "bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-[#3f51e7]"
            }`}
          >
            {link.title}
          </a>
        ))}
      </nav>
      <a
        href="/"
        className="mt-5 block rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-600 transition hover:border-indigo-200 hover:text-[#3f51e7]"
      >
        ← Etusivulle
      </a>
    </aside>
  );
}
