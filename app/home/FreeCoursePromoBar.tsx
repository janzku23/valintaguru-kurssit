"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import FreeCourseScrollButton from "@/components/FreeCourseScrollButton";

export default function FreeCoursePromoBar() {
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
    <section className="border-b border-indigo-200 bg-gradient-to-r from-[#173aa5] via-[#3159d9] to-[#3f51e7] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 text-center sm:flex-row sm:px-5 sm:text-left md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em]">
            Maksuton
          </span>
          <p className="text-sm font-bold sm:text-base">
            Ilmainen ValintaGuru-kurssi + webinaari 4.11.
          </p>
        </div>

        <FreeCourseScrollButton className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-black text-[#3142d6] shadow-lg shadow-indigo-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-50">
          Ilmoittaudu ilmaiskurssille →
        </FreeCourseScrollButton>
      </div>
    </section>
  );
}
