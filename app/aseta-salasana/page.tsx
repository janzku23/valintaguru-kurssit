"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

type PageMode =
  | "checking"
  | "setPassword"
  | "requestLink";

export default function AsetaSalasanaPage() {
  const router = useRouter();

  const supabase = useMemo(
    () => createClient(),
    []
  );

  const [mode, setMode] =
    useState<PageMode>("checking");

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [passwordAgain, setPasswordAgain] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    let active = true;

    function showInvalidLinkError() {
      if (!active) {
        return;
      }

      setMode("requestLink");

      setError(
        "Salasanan asetuslinkki ei ole enää voimassa tai se on jo käytetty. Syötä sähköpostiosoitteesi, niin saat uuden linkin."
      );
    }

    async function initializeSession() {
      try {
        /*
         * Supabasen invite-linkki palauttaa istunnon
         * URL:n hash-osassa:
         *
         * #access_token=...
         * &refresh_token=...
         * &type=invite
         *
         * Hash-osaa ei lähetetä palvelimelle, joten
         * se käsitellään tässä client-komponentissa.
         */
        const hashParameters =
          typeof window !== "undefined"
            ? new URLSearchParams(
                window.location.hash.replace(
                  /^#/,
                  ""
                )
              )
            : new URLSearchParams();

        const accessToken =
          hashParameters.get("access_token");

        const refreshToken =
          hashParameters.get("refresh_token");

        const authError =
          hashParameters.get(
            "error_description"
          ) ??
          hashParameters.get("error");

        if (authError) {
          console.error(
            "Supabase-linkin virhe:",
            authError
          );

          showInvalidLinkError();
          return;
        }

        /*
         * Jos kutsulinkissä on tokenit,
         * asetetaan session tiedot manuaalisesti.
         */
        if (accessToken && refreshToken) {
          const {
            data: sessionData,
            error: sessionError,
          } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (sessionError) {
            console.error(
              "Kutsulinkin session asettaminen epäonnistui:",
              sessionError
            );

            showInvalidLinkError();
            return;
          }

          if (!active) {
            return;
          }

          const user =
            sessionData.session?.user;

          if (!user) {
            showInvalidLinkError();
            return;
          }

          if (user.email) {
            setEmail(user.email);
          }

          setError("");
          setMessage("");
          setMode("setPassword");

          /*
           * Poistetaan tokenit näkyvästä URL:stä
           * ilman sivun uudelleenlatausta.
           */
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname +
              window.location.search
          );

          return;
        }

        /*
         * Jos hashissa ei ole tokeneita,
         * tarkistetaan mahdollinen jo olemassa
         * oleva Supabase-session tila.
         */
        const {
          data: { session },
          error: sessionError,
        } =
          await supabase.auth.getSession();

        if (sessionError) {
          console.error(
            "Supabase-session hakeminen epäonnistui:",
            sessionError
          );

          showInvalidLinkError();
          return;
        }

        if (!active) {
          return;
        }

        if (!session?.user) {
          showInvalidLinkError();
          return;
        }

        if (session.user.email) {
          setEmail(session.user.email);
        }

        setError("");
        setMessage("");
        setMode("setPassword");
      } catch (sessionError) {
        console.error(
          "Käyttäjäsession alustaminen epäonnistui:",
          sessionError
        );

        showInvalidLinkError();
      }
    }

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (event, session) => {
          if (!active) {
            return;
          }

          if (
            event === "SIGNED_IN" ||
            event === "PASSWORD_RECOVERY"
          ) {
            if (session?.user.email) {
              setEmail(
                session.user.email
              );
            }

            setError("");
            setMessage("");
            setMode("setPassword");
          }

          if (
            event === "SIGNED_OUT" &&
            mode !== "checking"
          ) {
            setMode("requestLink");
          }
        }
      );

    void initializeSession();

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  function resetAlerts() {
    setError("");
    setMessage("");
  }

  async function handleSetPassword(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    resetAlerts();

    try {
      if (!password || !passwordAgain) {
        setError(
          "Kirjoita uusi salasana molempiin kenttiin."
        );
        return;
      }

      if (password.length < 8) {
        setError(
          "Salasanan pitää olla vähintään 8 merkkiä pitkä."
        );
        return;
      }

      if (password !== passwordAgain) {
        setError(
          "Salasanat eivät täsmää."
        );
        return;
      }

      const {
        data: { session },
        error: sessionError,
      } =
        await supabase.auth.getSession();

      if (
        sessionError ||
        !session?.user
      ) {
        console.error(
          "Salasanan asetuksessa ei löytynyt voimassa olevaa sessiota:",
          sessionError
        );

        setMode("requestLink");

        setError(
          "Salasanan asetuslinkki ei ole enää voimassa. Pyydä uusi linkki."
        );

        return;
      }

      const { error: updateError } =
        await supabase.auth.updateUser({
          password,
        });

      if (updateError) {
        console.error(
          "Salasanan asetus epäonnistui:",
          updateError
        );

        setError(
          updateError.message ||
            "Salasanan asetus epäonnistui."
        );

        return;
      }

      setPassword("");
      setPasswordAgain("");

      setMessage(
        "Salasana asetettiin onnistuneesti. Siirrytään ValintaGuruun."
      );

      /*
       * Session jää voimaan, joten käyttäjä
       * siirtyy suoraan kirjautuneena etusivulle.
       */
      router.replace("/");
      router.refresh();
    } catch (updateError) {
      console.error(
        "Salasanan asetus epäonnistui:",
        updateError
      );

      setError(
        "Salasanan asetus epäonnistui. Pyydä tarvittaessa uusi linkki."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleRequestNewLink(
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

      /*
       * Salasanan palautuslinkki voidaan ohjata
       * suoraan samalle client-sivulle.
       *
       * Tällöin myös recovery-linkin hash-tokenit
       * käsitellään initializeSession-funktiossa.
       */
      const redirectTo =
        typeof window !== "undefined"
          ? `${window.location.origin}/aseta-salasana`
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
          "Uuden salasanan asetuslinkin lähetys epäonnistui:",
          resetError
        );

        if (
          resetError.message
            .toLowerCase()
            .includes("rate limit")
        ) {
          setError(
            "Uusi linkki on pyydetty liian monta kertaa. Odota hetki ja yritä uudelleen."
          );

          return;
        }

        setError(
          "Uuden linkin lähettäminen epäonnistui. Tarkista sähköpostiosoite ja yritä uudelleen."
        );

        return;
      }

      setMessage(
        "Jos sähköpostiosoitteella löytyy ValintaGuru-käyttäjä, uusi salasanan asetuslinkki lähetettiin sähköpostiin."
      );
    } catch (resetError) {
      console.error(
        "Uuden linkin lähettäminen epäonnistui:",
        resetError
      );

      setError(
        "Uuden linkin lähettäminen epäonnistui. Yritä uudelleen."
      );
    } finally {
      setLoading(false);
    }
  }

  if (mode === "checking") {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-5 py-10">
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
          <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-200/70">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
              VG
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              ValintaGuru
            </p>

            <h1 className="mt-3 text-3xl font-black text-slate-950">
              Tarkistetaan linkkiä
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Hetki, tarkistetaan salasanan
              asetuslinkkiä.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-5 py-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
              VG
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              ValintaGuru
            </p>

            <h1 className="mt-3 text-3xl font-black text-slate-950">
              {mode === "setPassword"
                ? "Aseta salasana"
                : "Pyydä uusi linkki"}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {mode === "setPassword"
                ? "Luo salasana ValintaGuru-käyttäjällesi. Tämän jälkeen pääset kirjautumaan sähköpostiosoitteellasi."
                : "Jos aikaisempi linkki suljettiin tai se vanheni, voit pyytää uuden salasanan asetuslinkin."}
            </p>
          </div>

          {mode === "setPassword" && (
            <form
              onSubmit={
                handleSetPassword
              }
              className="mt-8 space-y-4"
            >
              {email && (
                <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    Käyttäjä
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-slate-950">
                    {email}
                  </p>
                </div>
              )}

              <div>
                <label
                  htmlFor="new-password"
                  className="text-sm font-bold text-slate-800"
                >
                  Uusi salasana
                </label>

                <input
                  id="new-password"
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  placeholder="Vähintään 8 merkkiä"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="new-password-again"
                  className="text-sm font-bold text-slate-800"
                >
                  Toista salasana
                </label>

                <input
                  id="new-password-again"
                  type="password"
                  value={
                    passwordAgain
                  }
                  onChange={(event) =>
                    setPasswordAgain(
                      event.target.value
                    )
                  }
                  placeholder="Kirjoita salasana uudelleen"
                  autoComplete="new-password"
                  minLength={8}
                  required
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
                  ? "Tallennetaan..."
                  : "Tallenna salasana"}
              </button>

              <button
                type="button"
                onClick={() => {
                  resetAlerts();
                  setMode(
                    "requestLink"
                  );
                }}
                className="w-full text-sm font-bold text-blue-700 hover:text-blue-800"
              >
                Linkki ei toimi – pyydä
                uusi
              </button>
            </form>
          )}

          {mode === "requestLink" && (
            <form
              onSubmit={
                handleRequestNewLink
              }
              className="mt-8 space-y-4"
            >
              <div>
                <label
                  htmlFor="recovery-email"
                  className="text-sm font-bold text-slate-800"
                >
                  Sähköposti
                </label>

                <input
                  id="recovery-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="oma@sahkoposti.fi"
                  autoComplete="email"
                  required
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
                  ? "Lähetetään..."
                  : "Lähetä uusi linkki"}
              </button>

              <button
                type="button"
                onClick={() =>
                  router.push(
                    "/kirjaudu"
                  )
                }
                className="w-full text-sm font-bold text-blue-700 hover:text-blue-800"
              >
                Takaisin kirjautumiseen
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}