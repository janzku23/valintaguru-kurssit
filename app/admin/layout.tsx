import type { ReactNode } from "react";
import { requireAdminPage } from "@/lib/adminAccess";

const nav = [
  { href: "/admin", label: "Yleiskuva", icon: "⌂" },
  { href: "/admin/kayttajat", label: "Käyttäjät", icon: "♟" },
  { href: "/admin/oikeudet", label: "Kurssioikeudet", icon: "✓" },
  { href: "/admin/edistyminen", label: "Edistyminen", icon: "↗" },
  { href: "/admin/valintakoe-g/tehtavapankki", label: "G-tehtäväpankki", icon: "G" },
  { href: "/tiedustelut", label: "Tiedustelut", icon: "✉" },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const user = await requireAdminPage();

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-slate-950 text-white lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-7">
            <a href="/" className="text-xl font-black tracking-tight">ValintaGuru</a>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/50">Admin Center</p>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-xs font-black">
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-white/10 p-5">
            <p className="truncate text-sm font-bold">{user.email}</p>
            <a href="/" className="mt-3 inline-flex text-sm font-bold text-indigo-300 hover:text-indigo-200">← Takaisin sivustolle</a>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <a href="/admin" className="font-black">ValintaGuru Admin</a>
              <a href="/" className="rounded-full border border-slate-200 px-3 py-2 text-xs font-black">Sivustolle</a>
            </div>
            <div className="flex gap-2 overflow-x-auto border-t border-slate-100 px-3 py-2">
              {nav.slice(0, 5).map((item) => (
                <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-2 text-xs font-bold">
                  {item.label}
                </a>
              ))}
            </div>
          </header>

          <main className="p-4 sm:p-6 xl:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
