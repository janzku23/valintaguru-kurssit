"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { LoginHeading, LoginLoading } from "./LoginShell";
import { getSafeRedirectPath } from "@/lib/safeRedirect";

type AuthMode = "login" | "forgot";

export default function KirjauduClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const supabase = useMemo(
    () => createClient(),
    []
  );

  const [mode, setMode] =
    useState<AuthMode>(() => searchParams.get("mode") === "forgot" ? "forgot" : "login");

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [
    checkingSession,
    setCheckingSession,
  ] = useState(true);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState(() => searchParams.get("error") ?? "");

  const nextUrl = getSafeRedirectPath(
    searchParams.get("next")
  );

  useEffect(() => {
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
      } catch (sessionError) {
        console.error(
          "Kirjautumisen tarkistus epäonnistui:",
          sessionError
        );
      } finally {
        setCheckingSession(false);
        const isLocalhost =
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1";
        if (isLocalhost) {
          const devEmail = process.env.NEXT_PUBLIC_DEV_ADMIN_EMAIL;
          const devPassword = process.env.NEXT_PUBLIC_DEV_ADMIN_PASSWORD;
          if (devEmail && devPassword) {
            setEmail(devEmail);
            setPassword(devPassword);
          }
        }
      }
    }

    void checkExistingSession();

  }, [
    nextUrl,
    router,
    supabase,
  ]);

  function resetAlerts() {
    setError("");
    setMessage("");
  }

  function switchMode(newMode: AuthMode) {
    resetAlerts();
    setShowPassword(false);
    setMode(newMode);
  }

  async function handleLogin(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    resetAlerts();

    try {
      const cleanEmail = email
        .trim()
        .toLowerCase();

      if (!cleanEmail || !password) {
        setError(
          "Täytä sähköposti ja salasana."
        );
        return;
      }

      const { error: loginError } =
        await supabase.auth.signInWithPassword(
          {
            email: cleanEmail,
            password,
          }
        );

      if (loginError) {
        console.error(
          "Kirjautuminen epäonnistui:",
          loginError
        );

        setError(
          "Kirjautuminen epäonnistui. Tarkista sähköposti ja salasana."
        );

        return;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError(
          "Kirjautuminen onnistui, mutta käyttäjäsessiota ei saatu tallennettua."
        );

        return;
      }

      router.replace(nextUrl);
      router.refresh();
    } catch (loginError) {
      console.error(
        "Kirjautuminen epäonnistui:",
        loginError
      );

      setError(
        "Kirjautuminen epäonnistui. Yritä uudelleen."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    resetAlerts();

    try {
      const cleanEmail = email
        .trim()
        .toLowerCase();

      if (!cleanEmail) {
        setError(
          "Kirjoita sähköpostiosoitteesi."
        );
        return;
      }

      const redirectTo =
        typeof window !== "undefined"
          ? `${window.location.origin}/auth/callback?next=/aseta-salasana`
          : undefined;

      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(
          cleanEmail,
          {
            redirectTo,
          }
        );

      if (resetError) {
        console.error(
          "Salasanan palautuslinkin lähetys epäonnistui:",
          resetError
        );

        if (
          resetError.message
            .toLowerCase()
            .includes("rate limit")
        ) {
          setError(
            "Linkki on pyydetty liian monta kertaa. Odota hetki ja yritä uudelleen."
          );

          return;
        }

        setError(
          "Salasanan asetuslinkin lähetys epäonnistui. Tarkista sähköposti ja yritä uudelleen."
        );

        return;
      }

      setMessage(
        "Jos sähköpostiosoitteella löytyy ValintaGuru-käyttäjä, uusi salasanan asetuslinkki lähetettiin sähköpostiin."
      );
    } catch (resetError) {
      console.error(
        "Salasanan palautuslinkin lähetys epäonnistui:",
        resetError
      );

      setError(
        "Salasanan asetuslinkin lähetys epäonnistui. Yritä uudelleen."
      );
    } finally {
      setLoading(false);
    }
  }

  if (checkingSession) {
    return <LoginLoading />;
  }

  const isLogin = mode === "login";
  const emailInputId = isLogin ? "login-email" : "forgot-email";

  return (
    <>
      <LoginHeading
        title={isLogin ? "Tervetuloa takaisin." : "Salasanan palautus"}
        description={
          isLogin
            ? "Kirjaudu sisään ja jatka siitä, mihin jäit."
            : "Saat sähköpostiisi linkin, jolla voit vaihtaa salasanasi."
        }
      />

      <form
        onSubmit={isLogin ? handleLogin : handleForgotPassword}
        aria-busy={loading}
        className="mt-6 space-y-4"
      >
        <div>
          <label htmlFor={emailInputId} className="block text-[13px] font-semibold text-slate-700">
            Sähköposti
          </label>
          <input
            id={emailInputId}
            name="email"
            type="email"
            inputMode="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="oma@sahkoposti.fi"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            disabled={loading}
            required
            className="mt-2 h-[52px] w-full rounded-xl border border-[#e0e3ee] bg-[#f8f9fd] px-4 text-base text-[#20233b] outline-none transition placeholder:text-slate-400 hover:border-[#c5cbed] focus:border-[#3f51e7] focus:bg-white focus:ring-3 focus:ring-[#3f51e7]/10 disabled:opacity-60"
          />
        </div>

        {isLogin && (
          <div>
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="login-password" className="text-[13px] font-semibold text-slate-700">
                Salasana
              </label>
              <button
                type="button"
                onClick={() => switchMode("forgot")}
                disabled={loading}
                className="inline-flex min-h-6 items-center rounded text-xs font-semibold text-[#3f51e7] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7] disabled:opacity-60"
              >
                Unohditko salasanasi?
              </button>
            </div>
            <div className="relative mt-2">
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Salasanasi"
                autoComplete="current-password"
                disabled={loading}
                required
                className="h-[52px] w-full rounded-xl border border-[#e0e3ee] bg-[#f8f9fd] py-3 pl-4 pr-14 text-base text-[#20233b] outline-none transition placeholder:text-slate-400 hover:border-[#c5cbed] focus:border-[#3f51e7] focus:bg-white focus:ring-3 focus:ring-[#3f51e7]/10 disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Piilota salasana" : "Näytä salasana"}
                aria-pressed={showPassword}
                aria-controls="login-password"
                disabled={loading}
                className="absolute right-1 top-1 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-[#3f51e7] focus-visible:outline-2 focus-visible:outline-[#3f51e7] disabled:opacity-60"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {showPassword ? (
                    <>
                      <path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.9 10.9 0 0 1 12 5c6 0 10 7 10 7a17.1 17.1 0 0 1-3.2 3.8M6.2 6.2A18.3 18.3 0 0 0 2 12s4 7 10 7a10.3 10.3 0 0 0 5-1.4" />
                    </>
                  ) : (
                    <>
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        )}

        {error && (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
            {error}
          </div>
        )}

        {message && (
          <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#3f51e7] px-5 py-3.5 text-sm font-bold text-white shadow-[0_6px_18px_-5px_rgba(63,81,231,0.45)] transition hover:-translate-y-0.5 hover:bg-[#3142d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7] disabled:translate-y-0 disabled:cursor-wait disabled:opacity-60 motion-reduce:transform-none"
        >
          {loading && (
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" className="animate-spin motion-reduce:animate-none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
              <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
          {loading
            ? isLogin ? "Kirjaudutaan…" : "Lähetetään…"
            : isLogin ? "Kirjaudu sisään" : "Lähetä palautuslinkki"}
          {!loading && <span aria-hidden="true">→</span>}
        </button>
      </form>

      {!isLogin && (
        <button
          type="button"
          onClick={() => switchMode("login")}
          disabled={loading}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-slate-600 transition-colors hover:text-[#3f51e7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7] disabled:opacity-60"
        >
          <span aria-hidden="true">←</span>
          Takaisin kirjautumiseen
        </button>
      )}
    </>
  );
}
