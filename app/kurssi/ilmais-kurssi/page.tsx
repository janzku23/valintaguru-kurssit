import Link from "next/link";
import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import FreeCourseWebinarCard from "@/components/FreeCourseWebinarCard";

export default function FreeCourseOverviewPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#3f51e7]">ValintaGuru / Maksuton kurssi</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">Aloita tästä, omaan tahtiin.</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">Harjoittele vuoden 2026 oikeilla valintakoetehtävillä. Valitse yhteinen osio tai oikeustieteen koe, tutustu aineistoihin ja testaa osaamisesi.</p>
        </header>
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <FreeCourseSidebar active="overview" />
          <div className="min-w-0 space-y-7">
            <section className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-extrabold">Harjoituskokeet ja aineistot</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Yhteinen osio: 70 kysymystä ja 2 tuntia. Oikeustieteen osio: 30 kysymystä ja 1 tunti. Kummankin kokeen aineistot ja lukuohjeet löytyvät suoraan sen aloitussivulta.</p>
              <Link href="/kurssi/ilmais-kurssi/harjoitukset" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3142d6]">Valitse harjoituskoe →</Link>
            </section>
            <FreeCourseWebinarCard />
          </div>
        </div>
      </div>
    </main>
  );
}
