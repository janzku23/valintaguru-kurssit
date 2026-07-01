"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AsetaSalasanaPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      if (password.length < 8) {
        setError("Salasanan pitää olla vähintään 8 merkkiä.");
        return;
      }

      if (password !== passwordAgain) {
        setError("Salasanat eivät täsmää.");
        return;
      }

      const supabase = createClient();

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setError(
          "Salasanan asetus epäonnistui. Avaa sähköpostilinkki uudelleen."
        );
        return;
      }

      router.replace("/kurssit");
      router.refresh();
    } catch {
      setError(
        "Salasanan asetus epäonnistui. Tarkista linkki tai yritä uudelleen."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-5 py-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
              VG
            </div>

            <h1 className="mt-5 text-3xl font-black text-slate-950">
              Aseta salasana
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Luo salasana ValintaGuru-käyttäjällesi. Tämän jälkeen pääset
              kirjautumaan ostamallasi sähköpostilla.
            </p>
          </div>

          <form onSubmit={handleSetPassword} className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-bold text-slate-800">
                Uusi salasana
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Vähintään 8 merkkiä"
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-800">
                Toista salasana
              </label>
              <input
                type="password"
                value={passwordAgain}
                onChange={(event) => setPasswordAgain(event.target.value)}
                placeholder="Toista salasana"
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Tallennetaan..." : "Tallenna salasana"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}