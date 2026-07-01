"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function KirjauduClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const supabase = useMemo(() => createClient(), []);

  // loput nykyisestä koodistasi...

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const nextUrl = searchParams.get("next") || "/";

  useEffect(() => {
    checkExistingSession();

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (!isLocalhost) {
      return;
    }

    const devEmail = process.env.NEXT_PUBLIC_DEV_ADMIN_EMAIL;
    const devPassword = process.env.NEXT_PUBLIC_DEV_ADMIN_PASSWORD;

    if (devEmail && devPassword) {
      setEmail(devEmail);
      setPassword(devPassword);
    }
  }, []);

async function checkExistingSession() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      router.replace(nextUrl);
      router.refresh();
      return;
    }
  } catch {
    // Ei tehdä mitään. Käyttäjä saa jäädä kirjautumissivulle.
  } finally {
    setCheckingSession(false);
  }
}

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const cleanEmail = email.trim().toLowerCase();

      if (!cleanEmail || !password.trim()) {
        setError("Täytä sähköposti ja salasana.");
        return;
      }

      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

        if (error) {
          setError("Kirjautuminen epäonnistui. Tarkista sähköposti ja salasana.");
          return;
        }

        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          setError("Kirjautuminen onnistui, mutta sessiota ei saatu tallennettua.");
          return;
        }

        router.replace(nextUrl);
        router.refresh();
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          emailRedirectTo:
            typeof window !== "undefined"
              ? `${window.location.origin}/kirjaudu`
              : undefined,
        },
      });

      if (error) {
        setError("Rekisteröinti epäonnistui. Tarkista tiedot ja yritä uudelleen.");
        return;
      }

      setMessage("Tili luotu. Tarkista sähköposti ja vahvista kirjautuminen.");
    } finally {
      setLoading(false);
    }
  }

  if (checkingSession) {
    return (
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
                Tarkistetaan kirjautumista
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Hetki, tarkistetaan onko käyttäjä jo kirjautuneena.
              </p>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-5 py-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden lg:block">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-10 text-white shadow-2xl shadow-blue-200">
            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              ValintaGuru
            </div>

            <h1 className="mt-8 max-w-xl text-5xl font-black leading-tight">
              Jatka opintoja siitä, mihin viimeksi jäit.
            </h1>

            <p className="mt-5 max-w-lg text-lg text-blue-50">
              Kirjaudu sisään ja pääset kurssimateriaaleihin, teoriaan,
              monivalintoihin ja harjoituksiin.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-blue-100">
                  Kurssit yhdessä paikassa
                </p>
                <p className="mt-1 text-lg font-bold">
                  Teoria, tehtävät ja harjoittelu selkeästi.
                </p>
              </div>

              <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-blue-100">
                  Oma eteneminen
                </p>
                <p className="mt-1 text-lg font-bold">
                  Kirjautuminen pitää käyttäjän tiedot tallessa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                VG
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                ValintaGuru
              </p>

              <h1 className="mt-3 text-3xl font-black text-slate-950">
                {mode === "login" ? "Kirjaudu sisään" : "Luo käyttäjä"}
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {mode === "login"
                  ? "Kirjaudu sisään jatkaaksesi kurssimateriaaleihin."
                  : "Luo käyttäjä, jotta eteneminen ja kurssit voidaan tallentaa."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-sm font-bold text-slate-800">
                  Sähköposti
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="oma@sahkoposti.fi"
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-800">
                  Salasana
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Salasana"
                  autoComplete={
                    mode === "login" ? "current-password" : "new-password"
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              {message && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Hetki..."
                  : mode === "login"
                    ? "Kirjaudu"
                    : "Luo käyttäjä"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "login" ? "signup" : "login");
                  setError("");
                  setMessage("");
                }}
                className="text-sm font-bold text-blue-700 hover:text-blue-800"
              >
                {mode === "login"
                  ? "Ei käyttäjää? Luo käyttäjä"
                  : "Onko sinulla jo käyttäjä? Kirjaudu sisään"}
              </button>
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            Kirjautuminen vaaditaan kurssimateriaaleihin pääsemiseksi.
          </p>
        </section>
      </div>
    </main>
  );
}

