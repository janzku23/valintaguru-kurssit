import { TheorySection } from "../data/courseContent";

type Props = {
  section: TheorySection;
};

export default function TheoryCard({ section }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Teoria
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
          {section.title}
        </h2>

        <div className="mt-6 whitespace-pre-line text-lg leading-9 text-slate-800">
          {section.content}
        </div>
      </div>

      {section.embed?.type === "canva" && (
        <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
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

          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>Canva-esitys avautuu suoraan tässä teoriaosiossa.</span>

            <a
              href={section.embed.url.replace("?embed", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 hover:text-blue-800"
            >
              Avaa koko näytössä
            </a>
          </div>
        </div>
      )}
    </article>
  );
}