import {
  redirect,
} from "next/navigation";

import {
  createClient,
} from "@/utils/supabase/server";

import {
  guruGameIds,
  getGuruGameDefinition,
} from "@/data/gurupath";

import {
  hasGuruGameAccess,
} from "@/lib/gurupath/hasGuruGameAccess";

export const dynamic =
  "force-dynamic";

export default async function GuruPathPage() {
  const supabase =
    await createClient();

  const {
    data: { user },
  } =
    await supabase.auth.getUser();

  if (!user) {
    redirect(
      "/kirjaudu?next=/gurupath"
    );
  }

  const games =
    await Promise.all(
      guruGameIds.map(
        async (gameId) => ({
          definition:
            getGuruGameDefinition(
              gameId
            ),

          hasAccess:
            await hasGuruGameAccess(
              gameId
            ),
        })
      )
    );

  const availableGames =
    games.filter(
      (game) =>
        game.hasAccess
    );

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f8fafc] text-slate-950">
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-[2.25rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6 shadow-sm sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">
            ValintaGuru
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
            GuruPeli
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Valitse peli. Oikiksella on yksi yhteinen polku ja Valintakoe G:llä yksi yhteinen polku riippumatta siitä, mikä kyseisen kurssiperheen paketti sinulla on.
          </p>
        </div>

        {availableGames.length >
        0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {availableGames.map(
              ({
                definition,
              }) => (
                <a
                  key={
                    definition.id
                  }
                  href={`/gurupath/${definition.id}`}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-600">
                        GuruPeli
                      </p>

                      <h2 className="mt-2 text-2xl font-black">
                        {
                          definition.title
                        }
                      </h2>

                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                        {
                          definition.description
                        }
                      </p>
                    </div>

                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-violet-100 text-xl font-black text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                      ↑
                    </span>
                  </div>

                  <span className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white transition group-hover:bg-violet-700">
                    Avaa peli
                  </span>
                </a>
              )
            )}
          </div>
        ) : (
          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">
              Ei aktiivisia GuruPelejä
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              GuruPeli avautuu, kun käyttäjätililläsi on Oikis- tai Valintakoe G -kurssiperheen aktiivinen käyttöoikeus.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
