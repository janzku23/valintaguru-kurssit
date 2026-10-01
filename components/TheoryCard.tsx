import type {
  TheoryBlock,
  TheorySection,
} from "../data/courseContent/types";

type Props = {
  section: TheorySection;
};

function TheoryImage({
  fileName,
  title,
  description,
  alt,
}: {
  fileName: string;
  title?: string;
  description?: string;
  alt?: string;
}) {
  return (
    <figure className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <div className="flex min-h-[220px] items-center justify-center bg-white p-3 sm:p-5">
        <img
          src={`/theory/biologia/${fileName}.png`}
          alt={alt || title || fileName}
          loading="lazy"
          className="max-h-[680px] w-full object-contain"
        />
      </div>

      {(title || description) && (
        <figcaption className="border-t border-slate-200 px-4 py-3 sm:px-5">
          {title && (
            <p className="font-bold text-slate-900">
              {title}
            </p>
          )}

          {description && (
            <p className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-600">
              {description}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default function TheoryCard({ section }: Props) {
  return (
    <article
      className={[
        "overflow-hidden border border-slate-200 bg-white shadow-sm",
        section.embed?.type === "pdf"
          ? "rounded-2xl"
          : "rounded-3xl",
      ].join(" ")}
    >
      {/* TEKSTIOSUUS */}
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          {section.subtitle || "Teoria"}
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
          {section.title}
        </h2>

        {section.content && (
          <div className="mt-6 whitespace-pre-line text-lg leading-9 text-slate-800">
            {section.content}
          </div>
        )}

        {/* BIOLOGIAN RAKENTEISET TEORIAOSIOT */}
        {section.blocks && section.blocks.length > 0 && (
          <div className="mt-7 space-y-5">
            {section.blocks.map((block: TheoryBlock) => (
              <section
                key={block.id}
                id={block.id}
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <h3 className="text-xl font-extrabold leading-snug text-slate-950 sm:text-2xl">
                  {block.title}
                </h3>

                {block.content && (
                  <div className="mt-3 whitespace-pre-line text-base leading-8 text-slate-800 sm:text-lg sm:leading-9">
                    {block.content}
                  </div>
                )}

                {block.image && (
                  <TheoryImage
                    fileName={block.image.fileName}
                    title={block.image.title}
                    description={block.image.description}
                    alt={block.image.alt}
                  />
                )}
              </section>
            ))}
          </div>
        )}
      </div>

      {/* CANVA */}
      {section.embed?.type === "canva" && (
        <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div
              className="relative w-full"
              style={{
                paddingTop: section.embed.paddingTop ?? "56.25%",
              }}
            >
              <iframe
                src={section.embed.url}
                title={section.embed.title}
                loading="lazy"
                allowFullScreen
                allow="fullscreen"
                className="absolute left-0 top-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* PDF */}
      {section.embed?.type === "pdf" && (
        <div className="border-t border-slate-200 bg-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">
                PDF-teoria
              </p>

              <h3 className="mt-1 truncate text-sm font-bold text-slate-950 sm:text-base">
                {section.embed.title}
              </h3>
            </div>

            <a
              href={section.embed.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Avaa erikseen
            </a>
          </div>

          <iframe
            src={`${section.embed.url}#view=FitH`}
            title={section.embed.title}
            className="
              h-[calc(100dvh-180px)]
              min-h-[700px]
              w-full
              border-0
              bg-white
            "
          />
        </div>
      )}
    </article>
  );
}
