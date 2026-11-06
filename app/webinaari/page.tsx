import Link from "next/link";
import { freeCourseWebinar } from "@/data/freeCourseMaterials";

export default function WebinarPlaceholderPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-16 text-slate-950 sm:px-6">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-indigo-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">Maksuton ValintaGuru-webinaari</p>
        <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">Webinaari {freeCourseWebinar.date}</h1>
        <time dateTime={freeCourseWebinar.dateTime} className="mt-5 inline-flex rounded-2xl bg-indigo-50 px-5 py-3 text-xl font-extrabold text-[#3142d6]">Klo {freeCourseWebinar.time}</time>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">Osallistumislinkki lisätään ilmaiskurssin etusivulle ennen webinaaria. Ilmaiskurssin käyttäjänä sinun ei tarvitse ilmoittautua uudelleen.</p>
        <Link href="/kurssi/ilmais-kurssi#webinaari" className="mt-8 inline-flex rounded-full bg-[#3f51e7] px-6 py-3.5 font-bold text-white transition hover:bg-[#3142d6]">Siirry webinaarin tietoihin →</Link>
      </section>
    </main>
  );
}
