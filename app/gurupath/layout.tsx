import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";
import GuruGameTopbar from "@/components/gurupath/GuruGameTopbar";

export const dynamic = "force-dynamic";

/**
 * Kaikilla GuruPelin alisivuilla sama ylapalkki ja maksullisen pelin tarkistus.
 * Ilmaiskurssin omistaminen ei yksin avaa Gurupelia tai rankingia.
 */
export default async function GuruPathAccessLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/kirjaudu?next=/gurupath");

  const access = await getGuruGameAccessState();
  if (!access.viewId) {
    return (
      <>
        <GuruGameTopbar />
        <main className="min-h-screen bg-[#f5f8ff] px-4 py-12 text-slate-950 sm:px-6">
          <section className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">GuruPeli</p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">
              GuruPeli kuuluu maksullisiin valmennuskursseihin
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Ilmaiskurssi ei avaa GuruPeliä, rankingia tai maksullisten kurssien pelipolkuja.
              Saat ne käyttöön aktiivisella Oikis- tai Valintakoe G -kurssioikeudella.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/" className="rounded-full bg-violet-700 px-5 py-3 text-sm font-black text-white">
                Etusivulle
              </a>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <GuruGameTopbar />
      {children}
    </>
  );
}
