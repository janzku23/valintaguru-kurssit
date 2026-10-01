import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";

export const dynamic = "force-dynamic";

export default async function GuruPathPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/kirjaudu?next=/gurupath");

  const access = await getGuruGameAccessState();

  const card =
    access.viewId === "combined"
      ? {
          href: "/gurupath/combined",
          eyebrow: "Kaksi kurssia · yksi peli",
          title: "Oikis + Valintakoe G",
          description:
            "",
          badges: ["Oikis", "Yhteiset", "Valintakoe G"],
        }
      : access.viewId === "oikis"
        ? {
            href: "/gurupath/oikis",
            eyebrow: "GuruPeli",
            title: "Oikeustiede",
            description: "",
            badges: ["Oikis", "Yhteiset kysymykset"],
          }
        : access.viewId === "valintakoe-g"
          ? {
              href: "/gurupath/valintakoe-g",
              eyebrow: "GuruPeli",
              title: "Valintakoe G",
              description: "",
              badges: ["Valintakoe G", "Yhteiset kysymykset"],
            }
          : null;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f8fafc] text-slate-950">
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="overflow-hidden rounded-[2.25rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6 shadow-sm sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">ValintaGuru</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">GuruPeli</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Ensimmäiset tehtävät ovat harjoitustehtäviä, joiden tarkoitus on tutustuttaa sinut eri tehtävätyyppeihin
          </p>
        </div>

        {card ? (
          <div className="mt-6">
            <a
              href={card.href}
              className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-600">{card.eyebrow}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{card.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{card.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.badges.map((badge) => (
                      <span key={badge} className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-700">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-violet-100 text-2xl font-black text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">↑</span>
              </div>
              <span className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition group-hover:bg-violet-700">
                Avaa GuruPeli →
              </span>
            </a>
          </div>
        ) : (
          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Ei aktiivisia GuruPelejä</h2>
            <p className="mt-2 leading-7 text-slate-600">
              GuruPeli avautuu, kun käyttäjätililläsi on Oikis- tai Valintakoe G -kurssiperheen aktiivinen käyttöoikeus.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
