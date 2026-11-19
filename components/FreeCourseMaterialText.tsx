import type { FreeTheoryArticle } from "@/data/freeCourseTheory2026";

export default function FreeCourseMaterialText({ article }: { article: FreeTheoryArticle }) {
  return (
    <div className="min-w-0 border-t border-slate-200 py-6 sm:px-6">
      <div lang="fi" className="mx-auto min-w-0 max-w-3xl">
        {article.pages.map((page) => (
          <section key={page.page} className="mb-8 last:mb-0">
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-400">Sivu {page.page}</p>
            <div className="space-y-4">
              {page.blocks.map((block, index) => (
                <p key={`${page.page}-${index}`} className="break-words hyphens-auto text-base leading-8 text-slate-700">{block}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
