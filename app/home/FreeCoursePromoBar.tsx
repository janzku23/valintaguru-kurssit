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

    /*
    <section className="border-b border-indigo-200 bg-gradient-to-r from-[#173aa5] via-[#3159d9] to-[#3f51e7] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 text-center sm:flex-row sm:px-5 sm:text-left md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em]">
            Maksuton
          </span>
          <p className="text-sm font-bold sm:text-base">
            Ilmottaudu ilmaiskurssille ja kokeile ValintaGurua maksutta!
          </p>
        </div>

        <FreeCourseScrollButton className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-black text-[#3142d6] shadow-lg shadow-indigo-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-50">
          Ilmoittaudu ilmaiskurssille →
        </FreeCourseScrollButton>
      </div>
    </section> */

<section className="relative overflow-hidden border-b border-amber-400/25 bg-gradient-to-r from-[#08090d] via-[#191919] to-[#08090d] text-white">
  {/* Hillitty kultainen taustavalo */}
  <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-80 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-80 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />

  <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3.5 text-center sm:flex-row sm:px-5 sm:text-left md:px-8">
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-start">
      {/* Kampanjatunniste */}
      <span className="inline-flex items-center rounded-full border border-amber-300/40 bg-gradient-to-r from-[#f5d78d] via-[#d9a944] to-[#f5d78d] px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-[#17120a] shadow-[0_0_18px_rgba(245,190,80,0.15)]">
        BLACK WEEK
      </span>

      {/* Tarjousteksti */}
      <p className="text-sm font-semibold leading-relaxed text-white/90 sm:text-base">
        Kaikki kurssit{" "}
        <span className="font-black text-[#f5cf78]">
          −40 %
        </span>{" "}
        koodilla{" "}
        <span className="font-black tracking-wide text-white">
          "BLACKWEEK"
        </span>
        <span className="ml-2 whitespace-nowrap text-xs font-medium text-amber-200/80 sm:text-sm">
          23.–29.11.
        </span>
      </p>
    </div>

    {/* Toimintapainike */}
    <FreeCourseScrollButton className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-amber-200/50 bg-gradient-to-r from-[#f5d78d] to-[#e9b950] px-5 py-2.5 text-sm font-black text-[#211808] shadow-[0_4px_22px_rgba(217,169,68,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#ffe6a8] hover:to-[#f5ce75] hover:shadow-[0_6px_28px_rgba(217,169,68,0.3)]">
     Ilmoittaudu ilmaiskurssille
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </FreeCourseScrollButton>
  </div>
</section>

  );
}
