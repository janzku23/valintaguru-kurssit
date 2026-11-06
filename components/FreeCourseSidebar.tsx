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
      <nav aria-label="Ilmaiskurssin sisältö" className="space-y-2">
        {mainLinks.map((link) => {
          const isActive = active === link.id;

          return (
            <div key={link.id}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {link.label}
              </Link>

              {link.id === "exercises" && active === "exercises" && (
                <div className="mt-2 space-y-1 border-l-2 border-blue-100 pl-2">
                  <Link
                    href="/kurssi/ilmais-kurssi/harjoitukset/valintakoe-g-2026"
                    className="block rounded-xl px-3 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-50"
                  >
                    Valintakoe G 2026
                  </Link>

                  <Link
                    href="/kurssi/ilmais-kurssi/harjoitukset/oikeustiede-2026"
                    className="block rounded-xl px-3 py-2.5 text-sm font-bold text-violet-700 hover:bg-violet-50"
                  >
                    Oikeustieteen eriytyvä osio 2026
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
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-28 lg:self-start">
      <div className="hidden lg:block">
        <p className="text-xs font-bold uppercase tracking-wide text-[#3f51e7]">Ilmainen kurssi</p>
        <h2 className="mb-5 mt-2 text-xl font-extrabold text-slate-950">Sisällysluettelo</h2>
        <CourseContents active={active} />
      </div>
      <details className="group lg:hidden">
        <summary className="cursor-pointer text-sm font-bold text-slate-800">Selaa kurssin sisältöä</summary>
        <div className="mt-5"><CourseContents active={active} /></div>
      </details>
    </aside>
  );
}
