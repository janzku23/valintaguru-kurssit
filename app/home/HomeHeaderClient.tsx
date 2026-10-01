"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { useHomeAuth } from "./HomeAuthProvider";

export default function HomeHeaderClient() {
  const { loading, isLoggedIn } = useHomeAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 md:px-8">
          <a
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-950 bg-white sm:h-11 sm:w-11">
              <Image
                src={logo}
                alt="ValintaGuru"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </span>

            <span className="truncate font-serif text-lg font-semibold tracking-tight min-[390px]:text-xl sm:text-2xl">
              ValintaGuru
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a
              href="/kysy"
              className="transition hover:text-[#3f51e7]"
            >
            Ota yhteyttä
            </a>

            <a
              href="/valintakoe-g"
              className="transition hover:text-[#3f51e7]"
            >
              Valintakoe G
            </a>

            <a
              href="/oikeustiede"
              className="transition hover:text-[#3f51e7]"
            >
              Oikeustiede
            </a>

            <a
              href="/valintakoe-g-pisterajat"
              className="transition hover:text-[#3f51e7]"
            >
              Pisterajat
            </a>

            <a
              href="/tietoa-meista"
              className="transition hover:text-[#3f51e7]"
            >
              Tietoa meistä
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#kurssit"
              className="hidden rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7] lg:inline-flex"
            >
              Tutustu kursseihin
            </a>

            <a
              href={isLoggedIn ? "/profiili" : "/kirjaudu"}
              className="hidden whitespace-nowrap rounded-full bg-[#3f51e7] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-[#3142d6] sm:inline-flex"
            >
              {loading
                ? "Tarkistetaan..."
                : isLoggedIn
                  ? "Oma profiili"
                  : "Kirjaudu"}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={
                mobileMenuOpen
                  ? "Sulje navigointivalikko"
                  : "Avaa navigointivalikko"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-[#3f51e7] hover:text-[#3f51e7] lg:hidden"
            >
              {mobileMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-5 md:px-8">
              <nav className="flex flex-col gap-2">
                <a
                  href="/kysy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Kysy (Ota yhteyttä)</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                <a
                  href="/valintakoe-g"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Valintakoe G</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                <a
                  href="/oikeustiede"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Oikeustiede</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                <a
                  href="/valintakoe-g-pisterajat"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Pisterajat</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                <a
                  href="/tietoa-meista"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Tietoa meistä</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>
              </nav>

              <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">
                <a
                  href="#kurssit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
                >
                  Tutustu kursseihin
                </a>

                <a
                  href={isLoggedIn ? "/profiili" : "/kirjaudu"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#3f51e7] px-5 py-3.5 text-center font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#3142d6]"
                >
                  {loading
                    ? "Tarkistetaan..."
                    : isLoggedIn
                      ? "Oma profiili"
                      : "Kirjaudu"}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}
