import { freeCourseWebinar } from "@/data/freeCourseMaterials";

export default function FreeCourseWebinarCard() {
  return (
    <section id="webinaari" className="scroll-mt-32 rounded-3xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">Maksuton webinaari</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-950">Yhdessä kohti valintakoetta</h2>
        </div>
        <time dateTime={freeCourseWebinar.dateTime} className="rounded-2xl border border-indigo-200 bg-white px-5 py-3 text-base font-extrabold text-[#3142d6]">
          {freeCourseWebinar.label}
        </time>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">Osallistumislinkki lisätään tähän ennen webinaaria. Ilmaiskurssin käyttäjänä sinun ei tarvitse ilmoittautua uudelleen.</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">Kopioitava linkki alapuolella !</p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-800"><span className="h-2 w-2 rounded-full bg-indigo-400" aria-hidden="true" />https://meet.google.com/rhg-jfip-evw</p>
    </section>
  );
}
