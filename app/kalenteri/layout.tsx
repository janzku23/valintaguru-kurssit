import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

/**
 * Tarkistetaan oikeus palvelimella aina kalenteriin siirryttäessä.
 * Supabasen RLS tekee erillisen lopullisen tietorajoituksen.
 */
export default async function CalendarAccessLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/kirjaudu?next=/kalenteri");
  }

  const { data: allowed, error: accessError } = await supabase.rpc(
    "has_valintaguru_calendar_access",
  );

  if (accessError || allowed !== true) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-12 text-slate-950 sm:px-6">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#3f51e7]">
            ValintaGuru kalenteri
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Kalenteri kuuluu maksulliseen valmennukseen
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            Kalenteri on käytössä vain, jos tilillä on aktiivinen maksullinen
            kurssioikeus tai erikseen myönnetty kalenterioikeus.
          </p>
          <a
            href="/"
            className="mt-7 inline-flex rounded-full bg-[#3f51e7] px-5 py-3 text-sm font-black text-white"
          >
            Etusivulle
          </a>
        </section>
      </main>
    );
  }

  return children;
}
