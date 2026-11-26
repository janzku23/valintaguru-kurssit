import { freeCourseWebinar } from "@/data/freeCourseMaterials";

export default function FreeCourseWebinarCard() {
  return (
    <section id="webinaari" className="scroll-mt-32 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3f51e7]">Webinaaritallenne</p>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-950">Yhdessä kohti valintakoetta</h2>
        </div>
        <time dateTime={freeCourseWebinar.dateTime} className="rounded-2xl border border-indigo-200 bg-white px-5 py-3 text-base font-extrabold text-[#3142d6]">
          {freeCourseWebinar.date}
        </time>
      </div>
      <div className="relative -mx-4 mt-8 aspect-video overflow-hidden rounded-2xl border border-indigo-200 bg-white sm:-mx-6">
        <iframe
          src="https://www.canva.com/design/DAHacsb29wE/17_TqQVH6nq63JJToYQEcg/view?embed"
          title="Yhdessä kohti valintakoetta – webinaaritallenne 10.11.2026"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          allow="fullscreen; autoplay"
          allowFullScreen
        />
      </div>
    </section>
  );
}
