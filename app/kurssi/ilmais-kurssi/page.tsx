import FreeCoursePageHeader from "@/components/FreeCoursePageHeader";
import Link from "next/link";
import Image from "next/image";
import FreeCourseSidebar from "@/components/FreeCourseSidebar";
import FreeCourseWebinarCard from "@/components/FreeCourseWebinarCard";

export default function FreeCourseOverviewPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-10 text-slate-950 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FreeCoursePageHeader
          title="Tervetuloa ilmaiskurssille"
          description="Harjoittele vuoden 2026 valintakokeilla ja katso webinaaritallenne."
        />
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <FreeCourseSidebar active="overview" />
          <div className="min-w-0 space-y-10">
            <section className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3f51e7]">Testaa osaamisesi</p>
              <h2 className="mt-4 text-2xl font-bold">Kokeile aitoa valintakoetta</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">Valitse yhteinen osio tai oikeustieteen koe. Saat lopuksi pisteet ja oikeat vastaukset.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
                <span className="rounded-lg bg-slate-50 px-3 py-2">Yhteinen osio · 2 h</span>
                <span className="rounded-lg bg-slate-50 px-3 py-2">Oikeustiede · 1 h</span>
              </div>
              <Link href="/kurssi/ilmais-kurssi/harjoitukset" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#3f51e7] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3142d6]">Valitse harjoituskoe →</Link>
            </section>
            <FreeCourseWebinarCard />
            <section aria-labelledby="sovellus-otsikko" className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3f51e7]">ValintaGuru-sovellus</p>
              <h2 id="sovellus-otsikko" className="mt-4 text-2xl font-bold">Opiskele myös puhelimella</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                Lataa ValintaGuru-sovellus iPhonelle tai Androidille ja ota kurssi mukaan arkeen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="https://apps.apple.com/fi/app/valintaguru/id6756317593?l=fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lataa ValintaGuru App Storesta (uusi välilehti)"
                  className="flex h-16 w-56 max-w-full items-center rounded-lg transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]"
                >
                  <Image src="/app-store-badge-fi.svg" alt="Lataa App Storesta" width={224} height={64} className="h-auto w-full" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=fi.gona.valintaguru&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lataa ValintaGuru Google Playsta (uusi välilehti)"
                  className="flex h-16 w-56 max-w-full items-center rounded-lg transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]"
                >
                  <Image src="/google-play-badge-fi.png" alt="Saatavilla Google Playsta" width={646} height={250} className="h-[83.333px] w-full object-fill" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
