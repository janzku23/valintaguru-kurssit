"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type SignupResponse = {
  success?: boolean;
  invited?: boolean;
  existingUser?: boolean;
  message?: string;
  error?: string;
};

export default function FreeCourseSignup() {
  const supabase = useMemo(() => createClient(), []);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [existingUser, setExistingUser] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function checkAuth() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!mounted) return;
      setIsLoggedIn(Boolean(user));
      setCheckingAuth(false);
    }

    void checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;
        setIsLoggedIn(Boolean(session?.user));
        setCheckingAuth(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setExistingUser(false);

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setError("Kirjoita sähköpostiosoitteesi.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/free-course-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          marketingConsent,
          website,
        }),
      });

      const result = (await response.json()) as SignupResponse;
      if (!response.ok) {
        setError(result.error ?? "Ilmoittautuminen epäonnistui. Yritä uudelleen.");
        return;
      }

      setSuccess(
        result.message ??
          "Ilmoittautuminen onnistui. Tarkista sähköpostisi ja viimeistele käyttäjätunnuksen luonti."
      );
      setExistingUser(Boolean(result.existingUser));
      setEmail("");
      setMarketingConsent(false);
    } catch (requestError) {
      console.error("Ilmaiskurssin ilmoittautuminen epäonnistui:", requestError);
      setError("Palvelimeen ei saatu yhteyttä. Yritä hetken kuluttua uudelleen.");
    } finally {
      setSending(false);
    }
  }

  // Ei välähdä kirjautuneelle edes auth-tarkistuksen aikana.
  if (checkingAuth || isLoggedIn) return null;

  return (
    <section id="ilmainen-kurssi" className="px-4 py-8 sm:px-5 sm:py-12 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-xl shadow-slate-900/5">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-gradient-to-br from-[#173aa5] via-[#2458d8] to-[#3f51e7] p-7 text-white sm:p-9 lg:p-11">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
              Maksuton
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Ilmainen ValintaGuru-kurssi
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
              Luo maksuton käyttäjätunnus. Webinaarilinkki julkaistaan lähempänä
              4.11.2026
            </p>
             <p className="mt-4 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
              Jo kurssin ostaneiden ei tarvitse erikseen ilmottautua
            </p>

            <div className="mt-7 grid gap-3 text-sm font-bold text-blue-50 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2458d8]">✓</span>
                Webinaari 4.11.2026, kellonaika tarkentuu myöhemmin
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2458d8]">✓</span>
                Testaa ilmaiseksi mihin pisteesi riittäisivät 2026 kokeella
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9 lg:p-11">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#3f51e7]">
              Ilmoittaudu mukaan
            </p>
            <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
              Sähköposti riittää
            </h3>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Saat sähköpostiisi kutsun, jonka kautta asetat salasanan. Jos
              käyttäjätunnuksesi on jo olemassa, käytät samaa tunnusta.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-slate-800">
                  Sähköpostiosoitteesi <span className="text-red-500">*</span>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="sahkoposti@esimerkki.fi"
                  autoComplete="email"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#3f51e7] focus:ring-4 focus:ring-indigo-100"
                />
              </label>

              <div className="hidden" aria-hidden="true">
                <label>
                  Verkkosivu
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </label>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(event) => setMarketingConsent(event.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-[#3f51e7]"
                />
                <span className="text-sm font-semibold leading-6 text-slate-700">
                  Kyllä, haluan jatkossa sähköpostitse ValintaGurun uutisia,
                  opiskeluvinkkejä ja tietoa tulevista tapahtumista.
                </span>
              </label>

              <p className="text-xs leading-5 text-slate-500">
                Uutiskirjevalinta on vapaaehtoinen eikä vaikuta maksuttoman
                kurssin saamiseen.
              </p>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800">
                  {success}
                  {existingUser && (
                    <a href="/kirjaudu" className="ml-2 underline underline-offset-2">
                      Kirjaudu sisään →
                    </a>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#173f9f] px-5 py-4 text-base font-black text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#123482] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Ilmoittaudutaan..." : "Ilmoittaudu maksuttomalle kurssille"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
