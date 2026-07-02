"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

type AuthMode = "login" | "forgot" | "updatePassword";

export default function KirjauduClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const supabase = useMemo(() => createClient(), []);

  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const nextUrl = searchParams.get("next") || "/";

  useEffect(() => {
    const urlMode = searchParams.get("mode");
    const urlType = searchParams.get("type");
    const hasCode = Boolean(searchParams.get("code"));

    const hash =
      typeof window !== "undefined" ? window.location.hash.toLowerCase() : "";

    const isPasswordLink =
      urlMode === "reset" ||
      urlType === "recovery" ||
      hash.includes("type=recovery") ||
      hasCode;

    if (isPasswordLink) {
      setMode("updatePassword");
      setCheckingSession(false);
      return;
    }

    checkExistingSession();

    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    if (!isLocalhost) {
      return;
    }

    const devEmail = process.env.NEXT_PUBLIC_DEV_ADMIN_EMAIL;
    const devPassword = process.env.NEXT_PUBLIC_DEV_ADMIN_PASSWORD;

    if (devEmail && devPassword) {
      setEmail(devEmail);
      setPassword(devPassword);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function resetAlerts() {
    setError("");
    setMessage("");
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    resetAlerts();

    try {
      const cleanEmail = email.trim().toLowerCase();

      if (!cleanEmail || !password.trim()) {
        setError("Täytä sähköposti ja salasana.");
        return;
      }

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
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    resetAlerts();

    try {
      const cleanEmail = email.trim().toLowerCase();

      if (!cleanEmail) {
        setError("Kirjoita sähköpostiosoitteesi.");
        return;
      }

      const redirectUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/kirjaudu?mode=reset`
          : undefined;

      const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
        redirectTo: redirectUrl,
      });

      if (error) {
        setError(
          "Salasanan palautuslinkin lähetys epäonnistui. Tarkista sähköposti ja yritä uudelleen."
        );
        return;
      }

      setMessage(
        "Jos sähköpostilla löytyy käyttäjä, saat hetken kuluttua linkin salasanan vaihtamiseen."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdatePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    resetAlerts();

    try {
      if (!password.trim() || !passwordAgain.trim()) {
        setError("Täytä uusi salasana molempiin kenttiin.");
        return;
      }

      if (password.length < 8) {
        setError("Salasanan pitää olla vähintään 8 merkkiä pitkä.");
        return;
      }

      if (password !== passwordAgain) {
        setError("Salasanat eivät täsmää.");
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setError(
          "Salasanan asettaminen epäonnistui. Avaa sähköpostin linkki uudelleen ja yritä vielä kerran."
        );
        return;
      }

      setMessage("Salasana asetettu onnistuneesti. Voit nyt jatkaa kurssiin.");

      router.replace(nextUrl);
      router.refresh();
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

  const title =
    mode === "login"
      ? "Kirjaudu sisään"
      : mode === "forgot"
        ? "Unohditko salasanan?"
        : "Aseta uusi salasana";

  const description =
    mode === "login"
      ? "Kirjaudu sisään ostossa käytetyllä sähköpostilla ja salasanalla."
      : mode === "forgot"
        ? "Kirjoita sähköpostisi, niin lähetämme linkin salasanan vaihtamiseen."
        : "Aseta uusi salasana sähköpostiin saamasi linkin kautta.";

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
                  Pääsy ostetuille kursseille
                </p>
                <p className="mt-1 text-lg font-bold">
                  Käyttäjä luodaan ostoksen perusteella, ei kirjautumissivulta.
                </p>
              </div>

              <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-blue-100">
                  Oma eteneminen
                </p>
                <p className="mt-1 text-lg font-bold">
                  Kirjautuminen pitää tehtävät ja edistymisen tallessa.
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
                {title}
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>

            {mode === "login" && (
              <form onSubmit={handleLogin} className="mt-8 space-y-4">
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
                    autoComplete="current-password"
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
                  {loading ? "Kirjaudutaan..." : "Kirjaudu"}
                </button>
              </form>
            )}

            {mode === "forgot" && (
              <form onSubmit={handleForgotPassword} className="mt-8 space-y-4">
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
                  {loading ? "Lähetetään..." : "Lähetä palautuslinkki"}
                </button>
              </form>
            )}

            {mode === "updatePassword" && (
              <form onSubmit={handleUpdatePassword} className="mt-8 space-y-4">
                <div>
                  <label className="text-sm font-bold text-slate-800">
                    Uusi salasana
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Uusi salasana"
                    autoComplete="new-password"
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-800">
                    Uusi salasana uudelleen
                  </label>
                  <input
                    type="password"
                    value={passwordAgain}
                    onChange={(event) => setPasswordAgain(event.target.value)}
                    placeholder="Kirjoita salasana uudelleen"
                    autoComplete="new-password"
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
                  {loading ? "Tallennetaan..." : "Aseta salasana"}
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              {mode === "login" ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode("forgot");
                    resetAlerts();
                  }}
                  className="text-sm font-bold text-blue-700 hover:text-blue-800"
                >
                  Unohditko salasanan?
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    resetAlerts();
                  }}
                  className="text-sm font-bold text-blue-700 hover:text-blue-800"
                >
                  Takaisin kirjautumiseen
                </button>
              )}
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            Käyttäjää ei voi luoda tältä sivulta. Kurssioikeus aktivoidaan
            ostoksen jälkeen sähköpostiin lähetettävän linkin kautta.
          </p>
        </section>
      </div>
    </main>
  );
}