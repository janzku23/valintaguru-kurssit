"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import FreeCourseScrollButton from "@/components/FreeCourseScrollButton";

export default function FreeCourseHeroCta() {
  const supabase = useMemo(() => createClient(), []);
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadAuth() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!mounted) return;
      setIsLoggedIn(Boolean(user));
      setReady(true);
    }

    void loadAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;
        setIsLoggedIn(Boolean(session?.user));
        setReady(true);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  if (!ready || isLoggedIn) return null;

  return (
    <section className="border-b border-slate-200 bg-[#fffdf8] px-4 pb-4 sm:px-5 sm:pb-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 overflow-hidden rounded-[1.75rem] border border-indigo-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3f51e7]">
              Uudistunut kurssialusta
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl">
              Kokeile ValintaGurua maksutta
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600">
              Luo maksuton tunnus. Webinaarilinkki julkaistaan lähempänä 4.11. ja harjoituskokeet lisätään pian.
            </p>
          </div>

          <FreeCourseScrollButton className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3.5 text-center text-sm font-black text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-[#3142d6] sm:w-auto">
            Ilmoittaudu ilmaiskurssille →
          </FreeCourseScrollButton>
        </div>
      </div>
    </section>
  );
}
