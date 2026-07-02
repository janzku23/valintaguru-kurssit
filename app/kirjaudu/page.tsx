import { Suspense } from "react";
import KirjauduClient from "./KirjauduClient";

export default function KirjauduPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f5f8ff] px-5 py-8">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-200/70 sm:p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                  VG
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  ValintaGuru
                </p>

                <h1 className="mt-3 text-3xl font-black text-slate-950">
                  Ladataan kirjautumista..
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Hetki, avataan kirjautumissivu.
                </p>
              </div>
            </section>
          </div>
        </main>
      }
    >
      <KirjauduClient />
    </Suspense>
  );
}