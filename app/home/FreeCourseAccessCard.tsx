"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function FreeCourseAccessCard() {
  const supabase = useMemo(() => createClient(), []);
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!mounted) return;
      setIsLoggedIn(Boolean(user));
      setLoaded(true);
    }
    void load();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;
        setIsLoggedIn(Boolean(session?.user));
        setLoaded(true);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  if (!loaded || !isLoggedIn) return null;

  return (
    <section className="px-4 pb-6 sm:px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <article className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8">
          <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-indigo-200/30 blur-2xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  Maksuton
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-600 ring-1 ring-slate-200">
                  Sisältyy käyttäjätunnukseen
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
                Ilmainen kurssi
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Käyttäjätunnuksellasi pääset automaattisesti maksuttomaan
                webinaariin ja harjoituskokeisiin ilman erillistä kurssioikeutta.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/kurssi/ilmais-kurssi"
                className="inline-flex items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-600/15 transition hover:bg-[#3142d6]"
              >
                Avaa ilmainen kurssi →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
