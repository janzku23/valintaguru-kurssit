import Link from "next/link";

type Props = {
  active: "overview" | "exercises";
};

const mainLinks = [
  {
    id: "overview",
    label: "Kurssin etusivu",
    href: "/kurssi/ilmais-kurssi",
  },
  {
    id: "exercises",
    label: "Harjoituskokeet",
    href: "/kurssi/ilmais-kurssi/harjoitukset",
  },
] as const;

function CourseContents({ active }: Props) {
  return (
      <nav aria-label="Ilmaiskurssin sisältö" className="space-y-3">
        {mainLinks.map((link) => {
          const isActive = active === link.id;

          return (
            <div key={link.id}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-2xl px-4 py-4 text-sm font-bold transition ${
                  isActive
                    ? "bg-indigo-50 text-[#3142d6]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-indigo-700"
                }`}
              >
                {link.label}
              </Link>

              {link.id === "exercises" && active === "exercises" && (
                <div className="mt-4 space-y-2 border-l-2 border-blue-100 pl-2">
                  <Link
                    href="/kurssi/ilmais-kurssi/harjoitukset/valintakoe-g-2026"
                    className="block rounded-xl px-3 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50"
                  >
                    Yhteinen osio
                  </Link>

                  <Link
                    href="/kurssi/ilmais-kurssi/harjoitukset/oikeustiede-2026"
                    className="block rounded-xl px-3 py-3 text-sm font-bold text-violet-700 hover:bg-violet-50"
                  >
                    Oikeustiede
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </nav>
  );
}

export default function FreeCourseSidebar({ active }: Props) {
  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:self-start">
      <div className="hidden lg:block">
        <h2 className="mb-6 px-4 pt-2 text-xs font-bold uppercase tracking-wider text-slate-500">Kurssin sisältö</h2>
        <CourseContents active={active} />
      </div>
      <details className="group lg:hidden">
        <summary className="cursor-pointer text-sm font-bold text-slate-800">Selaa kurssin sisältöä</summary>
        <div className="mt-5"><CourseContents active={active} /></div>
      </details>
    </aside>
  );
}
