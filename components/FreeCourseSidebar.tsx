type Props = {
  active: "overview" | "theory" | "exercises";
};

const mainLinks = [
  { id: "overview", label: "Kurssin etusivu", href: "/kurssi/ilmais-kurssi" },
  { id: "theory", label: "Teoria ja aineistot", href: "/kurssi/ilmais-kurssi/teoria" },
  { id: "exercises", label: "Harjoituskokeet", href: "/kurssi/ilmais-kurssi/harjoitukset" },
] as const;

export default function FreeCourseSidebar({ active }: Props) {
  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-28 lg:w-80 lg:self-start">
      <div className="mb-5">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Maksuton</p>
        <h2 className="mt-1 text-xl font-extrabold text-slate-950">Sisällysluettelo</h2>
      </div>

      <nav className="space-y-2">
        {mainLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <div key={link.id}>
              <a
                href={link.href}
                className={`block rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {link.label}
              </a>

              {link.id === "theory" && active === "theory" && (
                <div className="mt-2 space-y-1 border-l-2 border-blue-100 pl-2">
                  <a href="#webinaari" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Webinaari 4.11.</a>
                  <a href="#aineisto-1" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Aineisto 1</a>
                  <a href="#aineisto-2" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Aineisto 2</a>
                </div>
              )}

              {link.id === "exercises" && active === "exercises" && (
                <div className="mt-2 border-l-2 border-blue-100 pl-2">
                  <div className="rounded-xl bg-blue-50 px-3 py-2.5 text-sm font-bold text-blue-700">
                    Valintakoe G 2026
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
