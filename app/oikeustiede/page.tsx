import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oikeustiede | ValintaGuru",
  description:
    "Oikeustieteen esittely on tulossa pian.",
  alternates: {
    canonical: "/oikeustiede",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OikeustiedePage() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-[3rem] border-[10px] border-amber-200" />

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-900/5 sm:p-10 lg:p-14">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-[#3f51e7]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#3f51e7]" />
              Oikeustiede
            </div>

            <h1 className="mt-7 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Esittely tulossa pian
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Rakennamme parhaillaan oikeustieteen osiota.
              Päivitämme tälle sivulle pian tarkemman esittelyn
              oikeustieteen valintakokeesta, eriytyvästä osiosta
              ja ValintaGurun valmennuksesta.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3.5 font-bold text-white transition hover:bg-[#3142d6] sm:w-auto"
              >
                Takaisin etusivulle
              </Link>

              <Link
                href="/#kurssit"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:w-auto"
              >
                Tutustu kursseihin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
