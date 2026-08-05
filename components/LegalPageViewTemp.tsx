import Link from "next/link";
import type { LegalPage } from "@/data/legalPages";

type LegalPageViewProps = {
  page: LegalPage;
};

export default function LegalPageView({
  page,
}: LegalPageViewProps) {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <header className="border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            ValintaGuru
          </Link>

          <Link
            href="/ehdot"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
          >
            Kaikki ehdot
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <Link
          href="/"
          className="text-sm font-bold text-[#3f51e7] transition hover:underline"
        >
          ← Takaisin etusivulle
        </Link>

        <div className="mt-6 rounded-[2rem] border border-indigo-100 bg-indigo-50 px-6 py-9 md:px-10 md:py-12">
          <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">
            ValintaGuru Oy
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-6xl">
            {page.title}
          </h1>

          {page.updated && (
            <p className="mt-5 text-sm font-semibold text-slate-500">
              {page.updated}
            </p>
          )}
        </div>

        {page.intro && page.intro.length > 0 && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            {page.intro.map((paragraph, index) => (
              <p
                key={`${page.slug}-intro-${index}`}
                className={`text-lg leading-8 text-slate-700 ${
                  index > 0 ? "mt-5" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {page.blocks.length > 0 && (
          <div className="mt-8 space-y-6">
            {page.blocks.map((block, blockIndex) => (
              <section
                key={`${page.slug}-block-${blockIndex}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                {block.heading && (
                  <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                    {block.heading}
                  </h2>
                )}

                {block.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${page.slug}-${blockIndex}-paragraph-${paragraphIndex}`}
                    className="mt-4 whitespace-pre-line leading-8 text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}

                {block.bullets && block.bullets.length > 0 && (
                  <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-700 marker:text-[#3f51e7]">
                    {block.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={`${page.slug}-${blockIndex}-bullet-${bulletIndex}`}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-[#3f51e7] p-7 text-white md:p-9">
          <p className="font-serif text-2xl font-semibold">
            ValintaGuru Oy
          </p>

          <p className="mt-3 text-indigo-100">
            Y-tunnus 3573013-4
          </p>

          <a
            href="mailto:info@valintaguru.com"
            className="mt-1 inline-block font-bold transition hover:underline"
          >
            info@valintaguru.com
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/ehdot"
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
          >
            Näytä kaikki ehdot
          </Link>

          <Link
            href="/"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#3f51e7]"
          >
            Takaisin etusivulle
          </Link>
        </div>
      </article>
    </main>
  );
}