import { freeCourseMaterials } from "@/data/freeCourseMaterials";

type Props = {
  exam: "g" | "law";
};

export default function FreeCourseExamMaterials({ exam }: Props) {
  const isLaw = exam === "law";
  return (
    <section aria-label="Kokeen aineistot" className="mt-10 min-w-0 border-t border-slate-200 pt-8">
      <h3 className="text-lg font-bold text-slate-950">
        {isLaw ? "Ennakkomateriaalit" : "Koeaineistot"}
      </h3>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
        {isLaw
          ? "Lue materiaalit ennen koetta. Alkuperäisessä kokeessa niitä ei saanut käyttää."
          : "Avaa molemmat PDF:t ennen aloittamista. Saat käyttää niitä kokeen aikana."}
      </p>
      <div className="mt-6 grid min-w-0 gap-5">
        {freeCourseMaterials[exam].map((material) => (
          <article key={material.id} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{material.label}</p>
            <h4 className="mt-3 break-words text-base font-bold leading-7 text-slate-950">{material.title}</h4>
            {material.author && <p className="mt-3 text-sm text-slate-500">{material.author}</p>}
            {isLaw && <p className="mt-3 text-sm leading-6 text-slate-600">{material.scope}</p>}
            <div className="mt-6">
              <a href={material.originalUrl ?? material.url} target="_blank" rel="noopener noreferrer"
                aria-label={`Avaa PDF: ${material.title} (uusi välilehti)`}
                className="inline-flex min-h-11 items-center gap-3 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-[#3142d6] transition hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]">
                Avaa PDF <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">Lähde: Yliopistovalinnat.fi · PDF:t avautuvat uuteen välilehteen.</p>
    </section>
  );
}
