import type { ReactNode } from "react";

import { freeCourseMaterials } from "@/data/freeCourseMaterials";

type Props = {
  exam: "g" | "law";
  readingContent?: Record<string, ReactNode>;
};

export default function FreeCourseExamMaterials({ exam, readingContent = {} }: Props) {
  const isLaw = exam === "law";
  return (
    <section aria-label="Kokeen aineistot ja lähdelinkit" className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">01 / Aineistot</p>
      <h3 className="mt-2 text-xl font-extrabold text-slate-950">
        {isLaw ? "Lue ennakkomateriaalit ennen koetta" : "Avaa koeaineistot valmiiksi"}
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
        {isLaw
          ? "Tutustu molempiin lähteisiin ja alla oleviin rajauksiin. Jos harjoittelet alkuperäistä koetilannetta, sulje ennakkomateriaalit ennen kokeen aloittamista."
          : "Voit lukea aineistot tällä sivulla tai avata ne PDF-tiedostoina omiin välilehtiinsä. Yhteisen osion aineistot ovat käytettävissä kokeen aikana."}
      </p>
      <div className="mt-5 grid min-w-0 gap-4 xl:grid-cols-2">
        {freeCourseMaterials[exam].map((material) => (
          <article key={material.id} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 xl:has-[details[open]]:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{material.label}</p>
            <h4 className="mt-2 break-words text-base font-bold leading-6 text-slate-950">{material.title}</h4>
            {material.author && <p className="mt-2 text-sm text-slate-500">{material.author}</p>}
            <p className="mt-3 text-sm leading-6 text-slate-600">{material.scope}</p>
            <div className="mt-auto pt-5">
              <a href={material.originalUrl ?? material.url} target="_blank" rel="noopener noreferrer"
                aria-label={`Avaa PDF: ${material.title} (uusi välilehti)`}
                className="inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-xl bg-[#3f51e7] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#3142d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]">
                Avaa {isLaw ? "ennakkomateriaali" : material.label.toLowerCase()} (PDF) <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-3 text-xs text-slate-500">Lähde: Yliopistovalinnat.fi</p>
            </div>
            {(readingContent[material.id] || isLaw) && (
              <details className="mt-4 rounded-xl border border-slate-200">
                <summary className="cursor-pointer rounded-xl px-4 py-3 text-sm font-bold text-[#3f51e7] hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f51e7]">
                  Lue {isLaw ? "ennakkomateriaali" : material.label.toLowerCase()} tällä sivulla
                </summary>
                {isLaw ? (
                  <div className="border-t border-slate-200">
                    <iframe src={material.url} title={material.title} loading="lazy" className="h-[70vh] min-h-[360px] w-full border-0" />
                    <p className="p-4 text-xs leading-6 text-slate-500">Jos PDF ei näy selaimessasi, avaa se yllä olevasta PDF-painikkeesta.</p>
                  </div>
                ) : readingContent[material.id]}
              </details>
            )}
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-6 text-slate-500">PDF-linkit avautuvat uuteen välilehteen.</p>
    </section>
  );
}
