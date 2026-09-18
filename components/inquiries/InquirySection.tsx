"use client";

import { FormEvent, useState } from "react";

const TOPICS = [
  "Kurssit ja sisältö",
  "Ostaminen ja käyttöoikeus",
  "Tekninen ongelma",
  "Muu kysymys",
] as const;

type Props = {
  isLoggedIn: boolean;
};

export default function InquirySection({ isLoggedIn }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSending(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, company }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        delivery?: "account" | "email";
      };

      if (!response.ok) {
        setError(data.error ?? "Tiedustelun lähettäminen epäonnistui.");
        return;
      }

      setMessage("");
      setSuccess(
        data.delivery === "account"
          ? "Kiitos! Kysymyksesi lähetettiin. Näet sen ja vastauksemme tällä samalla sivulla."
          : "Kiitos! Kysymyksesi lähetettiin. Vastaus toimitetaan antamaasi sähköpostiosoitteeseen.",
      );

      if (isLoggedIn) {
        window.dispatchEvent(new CustomEvent("valintaguru:inquiry-created"));
      }
    } catch {
      setError("Palvelimeen ei saatu yhteyttä. Yritä uudelleen.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">
            Kysy ValintaGurulta
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
            Jäikö jokin mietityttämään?
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Lähetä meille kysymys kurssista, ostamisesta, käyttöoikeudesta tai
            teknisestä ongelmasta.
          </p>

          <div className="mt-6 rounded-3xl border border-indigo-100 bg-indigo-50 p-5 text-sm leading-7 text-slate-700">
            {isLoggedIn ? (
              <>
                <strong className="text-slate-950">Olet kirjautuneena.</strong>{" "}
                Kysymyksesi ja ValintaGurun vastaukset näkyvät tämän sivun
                alapuolella. Uudesta vastauksesta näkyy punainen ilmoitus Kysy-linkissä.
              </>
            ) : (
              <>
                <strong className="text-slate-950">Et ole kirjautuneena.</strong>{" "}
                Jätä sähköpostiosoite, johon lähetämme vastauksen.
              </>
            )}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-slate-200 bg-[#fffdf8] p-5 shadow-sm sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Nimi <span className="font-medium text-slate-400">(valinnainen)</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={100}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#3f51e7] focus:ring-4 focus:ring-indigo-100"
                placeholder="Etunimi tai nimi"
              />
            </label>

            {isLoggedIn ? (
              <div className="grid gap-2 text-sm font-bold text-slate-800">
                Käyttäjätili
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 font-semibold text-emerald-800">
                  Kirjautunut käyttäjä
                </div>
              </div>
            ) : (
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Sähköposti
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#3f51e7] focus:ring-4 focus:ring-indigo-100"
                  placeholder="sinä@example.com"
                />
              </label>
            )}
          </div>

          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-800">
            Aihe
            <select
              value={topic}
              onChange={(event) =>
                setTopic(event.target.value as (typeof TOPICS)[number])
              }
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-semibold outline-none transition focus:border-[#3f51e7] focus:ring-4 focus:ring-indigo-100"
            >
              {TOPICS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-800">
            Kysymys
            <textarea
              required
              minLength={10}
              maxLength={4000}
              rows={7}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-medium leading-7 outline-none transition focus:border-[#3f51e7] focus:ring-4 focus:ring-indigo-100"
              placeholder="Kirjoita kysymyksesi mahdollisimman selkeästi..."
            />
          </label>

          <label className="hidden" aria-hidden="true">
            Company
            <input
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
              {success}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-500">
              Kysymys näkyy vain ValintaGurun ylläpidolle ja sinulle.
            </p>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex min-w-40 items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#3142d6] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Lähetetään..." : "Lähetä kysymys"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
