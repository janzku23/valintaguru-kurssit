"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/kurssi/ilmais-kurssi", label: "Kurssin etusivu" },
  { href: "/kurssi/ilmais-kurssi/teoria", label: "Teoria" },
  { href: "/kurssi/ilmais-kurssi/harjoitukset", label: "Harjoituskokeet" },
];

export default function FreeCourseTopBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0 font-serif text-xl font-semibold tracking-tight text-slate-950">
          ValintaGuru
        </a>

        <div className="hidden h-6 w-px bg-slate-200 sm:block" />
        <span className="hidden shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 sm:inline-flex">
          Ilmainen kurssi
        </span>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-[#3f51e7] text-white"
                    : "text-slate-700 hover:bg-indigo-50 hover:text-[#3f51e7]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/profiili"
          className="ml-auto shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-indigo-300 hover:text-[#3f51e7] lg:ml-2"
        >
          Oma profiili
        </a>
      </div>

      <nav className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 lg:hidden">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold ${
                active ? "bg-[#3f51e7] text-white" : "bg-slate-50 text-slate-700"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
