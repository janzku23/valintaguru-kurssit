"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import Script from "next/script";
import { createClient } from "@/utils/supabase/client";
import CourseAccessCard from "../components/CourseAccessCard";
import CourseShowcase from "../components/CourseShowcase";
import InquiryStatusLink from "../components/inquiries/InquiryStatusLink";
import { CourseId, courses, HOLVI_STORE_URL } from "../data/courses";
import testiImage from "../assets/testi.jpg";
import frontLogo from "../assets/frontlogo.png";
import logo from "../assets/logo.png";
import Etusivulogo from "../assets/Etusivulogo.png";
import uudetkurssit from "../assets/uudetkurssit.png";

type StudentCourseRow = {
  id?: string;
  user_id?: string | null;
  email?: string | null;
  course_id?: string | null;
  course_slug?: string | null;
  course_title?: string | null;
  title?: string | null;
  status?: string | null;
  created_at?: string | null;
};

export default function Home() {
  const supabase = useMemo(() => createClient(), []);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [ownedCourseIds, setOwnedCourseIds] = useState<CourseId[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const loadUserAndCourses = useCallback(async () => {
    setLoading(true);

    const {
      data: { user: currentUser },
      error,
    } = await supabase.auth.getUser();

    if (error || !currentUser) {
      setUser(null);
      setOwnedCourseIds([]);
      setLoading(false);
      return;
    }

    setUser(currentUser);

    const rows: StudentCourseRow[] = [];

    const byUserId = await supabase
      .from("student_courses")
      .select("*")
      .eq("user_id", currentUser.id);

    if (!byUserId.error && byUserId.data) {
      rows.push(...byUserId.data);
    }

    if (currentUser.email) {
      const normalizedEmail = currentUser.email.trim().toLowerCase();

      const byEmail = await supabase
        .from("student_courses")
        .select("*")
        .eq("email", normalizedEmail);

      if (!byEmail.error && byEmail.data) {
        rows.push(...byEmail.data);
      }
    }

    const ids = rows
      .filter((row) => {
        if (!row.status) {
          return true;
        }

        const normalizedStatus = row.status.trim().toLowerCase();

        return (
          normalizedStatus === "active" ||
          normalizedStatus === "käytössä" ||
          normalizedStatus === "enabled"
        );
      })
      .map((row) => row.course_id || row.course_slug)
      .filter((id): id is string => Boolean(id))
      .map((id) => id.toLowerCase() as CourseId);

    setOwnedCourseIds(Array.from(new Set(ids)));
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    void loadUserAndCourses();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      void loadUserAndCourses();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [loadUserAndCourses, supabase]);

  const isLoggedIn = Boolean(user);

  const ownedCourses = courses.filter((course) =>
    ownedCourseIds.includes(course.id.toLowerCase() as CourseId),
  );


  const instagramProfileUrl = "https://www.instagram.com/valintaguru/";
  const tiktokProfileUrl = "https://www.tiktok.com/@valintaguru";
  const [instagramSlide, setInstagramSlide] = useState(0);

  const instagramPosts = [
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 1" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 2" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 3" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 4" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 5" },
  ];

  const previousInstagramSlide = () => {
    setInstagramSlide((current) =>
      current === 0 ? instagramPosts.length - 1 : current - 1,
    );
  };

  const nextInstagramSlide = () => {
    setInstagramSlide((current) =>
      current === instagramPosts.length - 1 ? 0 : current + 1,
    );
  };

  const getInstagramPosition = (index: number) => {
    const total = instagramPosts.length;
    let position = (index - instagramSlide + total) % total;

    if (position > Math.floor(total / 2)) {
      position -= total;
    }

    return position;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffdf8] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 md:px-8">
          <a
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-950 bg-white sm:h-11 sm:w-11">
              <img
                src={logo.src}
                alt="ValintaGuru"
                className="h-full w-full object-cover"
              />
            </span>

            <span className="truncate font-serif text-lg font-semibold tracking-tight min-[390px]:text-xl sm:text-2xl">
              ValintaGuru
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#omat-kurssit" className="transition hover:text-[#3f51e7]">
              Omat kurssit
            </a>

            {isLoggedIn ? (
              <InquiryStatusLink />
            ) : (
              <a href="/kysy" className="transition hover:text-[#3f51e7]">
                Kysy
              </a>
            )}

            {isLoggedIn && ownedCourses.length > 0 && (
              <>
                <a href="/kalenteri" className="transition hover:text-[#3f51e7]">
                  Kalenteri
                </a>
              </>
            )}

            <a href="#kurssit" className="transition hover:text-[#3f51e7]">
              Valmennuskurssit
            </a>
            {/*
            <a href="#miksi" className="transition hover:text-[#3f51e7]">
              Miksi ValintaGuru?
            </a>
            */}
            <a href="#ajankohtaista" className="transition hover:text-[#3f51e7]">
              Ajankohtaista
            </a>

            {/*
            {isLoggedIn && (
              <a href="/profiili" className="transition hover:text-[#3f51e7]">
                Profiili
              </a>
              
            )}
              */}
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
                  href="#omat-kurssit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Omat kurssit</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                {isLoggedIn ? (
                  <InquiryStatusLink
                    mobile
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                ) : (
                  <a
                    href="/kysy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                  >
                    <span>Kysy</span>
                    <span className="text-xl text-slate-400">›</span>
                  </a>
                )}

                {isLoggedIn && ownedCourses.length > 0 && (
                  <a
                    href="/kalenteri"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl bg-indigo-50 px-4 py-3.5 font-bold text-[#3f51e7] transition hover:bg-indigo-100"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-base shadow-sm">
                        📅
                      </span>
                      <span>Kalenteri</span>
                    </span>
                    <span className="text-xl text-indigo-300">›</span>
                  </a>
                )}

                {isLoggedIn && ownedCourses.length > 0 && (
                  <a
                    href="/gurupath"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl bg-violet-50 px-4 py-3.5 font-bold text-violet-700 transition hover:bg-violet-100"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-base shadow-sm">
                        ◈
                      </span>
                      <span>GuruPeli</span>
                    </span>
                    <span className="text-xl text-violet-300">›</span>
                  </a>
                )}

                <a
                  href="#kurssit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Valmennuskurssit</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                <a
                  href="#miksi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Miksi ValintaGuru?</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                <a
                  href="#ajankohtaista"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                >
                  <span>Ajankohtaista</span>
                  <span className="text-xl text-slate-400">›</span>
                </a>

                {isLoggedIn && (
                  <a
                    href="/profiili"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
                  >
                    <span>Profiili</span>
                    <span className="text-xl text-slate-400">›</span>
                  </a>
                )}
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




<section className="relative h-[260px] w-full overflow-hidden border-b border-slate-200 bg-[#fffdf8] sm:h-[360px] lg:h-[460px]">
  <img
    src={Etusivulogo.src}
    alt="ValintaGuru"
    className="h-full w-full object-cover object-center"
  />
</section>

{/* HERO SECTION */}
<section className="relative overflow-hidden border-b border-slate-200 bg-[#fffdf8]">
  <div className="absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[#3f51e7] opacity-90 sm:h-72 sm:w-72" />

  <div className="absolute -bottom-20 -left-12 h-32 w-32 rounded-[2.5rem] border-[8px] border-[#f3a31b] opacity-80 sm:left-8 sm:h-40 sm:w-40 sm:border-[10px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">

    {/* VASEN PUOLI */}
    <div>
      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-bold leading-5 text-[#3f51e7] sm:px-4 sm:text-sm">
        Verkossa · Omaan tahtiin · Tavoitteellisesti
      </div>

      <h1 className="mt-5 max-w-3xl break-words font-serif text-[2.55rem] font-semibold leading-[1.02] tracking-tight sm:mt-7 sm:text-5xl md:text-7xl">
        Valmistaudu fiksummin
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
        ValintaGurun valmennuskurssit auttavat sinua ymmärtämään kokeen
        rakennetta, kehittämään päättelyä, analysoimaan tekstejä
        huolellisesti ja hallitsemaan ajankäyttöä koetilanteessa
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
        <a
          href={isLoggedIn ? "#omat-kurssit" : "/kirjaudu"}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#3f51e7] px-5 py-3.5 text-center font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-[#3142d6] sm:w-auto sm:px-7"
        >
          {isLoggedIn ? "Jatka opiskelua" : "Kirjaudu kurssialustalle"}
        </a>

        <a
          href="#kurssit"
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:w-auto sm:px-7"
        >
          Tutustu kursseihin
        </a>
      </div>

      <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 text-center text-sm min-[390px]:grid-cols-3 sm:mt-9">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <strong className="block text-lg text-[#3f51e7] sm:text-xl">
            100 %
          </strong>

          <span className="text-xs text-slate-600 sm:text-sm">
            verkossa
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <strong className="block text-lg text-[#3f51e7] sm:text-xl">
            24/7
          </strong>

          <span className="text-xs text-slate-600 sm:text-sm">
            käytettävissä
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <strong className="block text-lg text-[#3f51e7] sm:text-xl">
            Oma
          </strong>

          <span className="text-xs text-slate-600 sm:text-sm">
            opiskelutahti
          </span>
        </div>
      </div>
    </div>

    {/* OIKEA PUOLI */}
    <div className="relative mx-auto w-full max-w-xl px-1 sm:px-0">
      <div className="absolute -inset-2 rotate-2 rounded-[1.75rem] bg-[#f3a31b] sm:-inset-4 sm:rotate-3 sm:rounded-[2.25rem]" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15 sm:rounded-[2rem] sm:p-3">
        <img
          src={frontLogo.src}
          alt="ValintaGurun kurssialusta"
          className="aspect-[16/10] w-full rounded-[1.1rem] object-cover sm:aspect-[4/2] sm:rounded-[1.4rem]"
        />

        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-7 sm:rounded-2xl sm:p-4">
          <p className="text-sm font-bold text-[#3f51e7]">
            Uudistunut kurssialusta
          </p>

          <p className="mt-1 text-sm font-semibold leading-5 sm:text-base sm:leading-normal">
            Teoria, harjoitukset ja oma edistyminen yhdessä paikassa.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      <section id="omat-kurssit" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Kurssialusta</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">Omat kurssisi</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-700">Näet tässä ne kurssit, joihin sinulla on aktiivinen käyttöoikeus.</p>
          </div>
          <a href="#kurssit" className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-center font-bold text-white transition hover:bg-[#3f51e7] sm:w-fit">Hanki uusi kurssi</a>
        </div>

        {loading ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><h3 className="text-2xl font-extrabold">Tarkistetaan kirjautumista...</h3><p className="mt-3 text-slate-700">Haetaan käyttäjää ja kurssioikeuksia.</p></div>
        ) : !isLoggedIn ? (
          <div className="mt-8 grid gap-6 rounded-[2rem] border border-indigo-100 bg-indigo-50 p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div><h3 className="text-2xl font-extrabold">Kirjaudu nähdäksesi omat kurssisi</h3><p className="mt-3 leading-8 text-slate-700">Kirjaudu samalla sähköpostiosoitteella, jolla kurssi on hankittu.</p></div>
            <a href="/kirjaudu" className="inline-flex w-full items-center justify-center rounded-full bg-[#3f51e7] px-6 py-3 text-center font-bold text-white sm:w-fit">Kirjaudu sisään</a>
          </div>
        ) : ownedCourses.length > 0 ? (
          <>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {ownedCourses.map((course) => (
                <CourseAccessCard key={course.id} course={course} />
              ))}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <div>
                <p className="font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
                  Kurssin lisätyökalut
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                  Kalenteri ja GuruPeli
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Nämä työkalut avautuvat käyttöön, kun käyttäjätililläsi on vähintään yksi aktiivinen kurssi.
                </p>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <a
                  href="/kalenteri"
                  className="group block overflow-hidden rounded-[2rem] border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-[#fff8e8] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-full p-5 sm:p-7 lg:p-8">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#3f51e7]/10" />
                    <div className="pointer-events-none absolute -bottom-14 right-20 h-28 w-28 rounded-[2rem] border-[8px] border-[#f3a31b]/20" />

                    <div className="relative flex h-full flex-col">
                      <div className="flex gap-4 sm:gap-5">
                        <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#3f51e7] text-3xl shadow-lg shadow-indigo-600/20 sm:flex">
                          📅
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
                              ValintaGuru kalenteri
                            </p>

                            <span className="rounded-full bg-[#f3a31b]/15 px-3 py-1 text-xs font-black text-[#a96500]">
                              Sisältyy kurssiisi
                            </span>
                          </div>

                          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                            Suunnittele opiskelu ja muu elämä samaan kalenteriin
                          </h3>

                          <p className="mt-3 leading-7 text-slate-600">
                            Suunnittele tulevat viikot, seuraa opiskeluaikaasi,
                            hallitse toistuvia menoja ja yhdistä halutessasi
                            perheen yhteinen kalenteri.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                          Viikkosuunnittelu
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                          Opiskelutilastot
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                          Perhekalenteri
                        </span>
                      </div>

                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3f51e7] px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-600/20 transition group-hover:bg-[#3142d6]">
                          Avaa kalenteri
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/gurupath"
                  className="group block overflow-hidden rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-indigo-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-full p-5 sm:p-7 lg:p-8">
                    <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full border-[12px] border-violet-200/40" />
                    <div className="pointer-events-none absolute -bottom-16 -left-8 h-36 w-36 rotate-12 rounded-[2rem] bg-indigo-100/60" />

                    <div className="relative flex h-full flex-col">
                      <div className="flex gap-4 sm:gap-5">
                        <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-3xl font-black text-white shadow-lg shadow-slate-900/20 sm:flex">
                          ◈
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-bold uppercase tracking-[0.16em] text-violet-700">
                              GuruPeli
                            </p>

                            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-700">
                              Pelaa & opiskele
                            </span>
                          </div>

                          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                            Etene polulla, kerää pisteitä ja nouse rankingissa
                          </h3>

                          <p className="mt-3 leading-7 text-slate-600">
                            Ratkaise polun haasteita, avaa uusia polkuja ja tavoittele
                            kärkisijaa !
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                          Taso
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                          Kurssipolut
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                          Sijoitus
                        </span>
                      </div>

                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white shadow-lg shadow-slate-900/15 transition group-hover:bg-violet-700">
                          Avaa GuruPeli
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><h3 className="text-2xl font-extrabold">Sinulla ei ole vielä aktiivisia kursseja</h3><p className="mt-3 leading-8 text-slate-700">Kun hankit kurssin, se ilmestyy tähän samalla sähköpostiosoitteella kirjautumisen jälkeen.</p><a href="#kurssit" className="mt-6 inline-flex rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white">Tutustu kursseihin</a></div>
        )}
      </section>

      <section id="kurssit" className="scroll-mt-20 border-y border-slate-200 bg-white py-12 sm:py-16 lg:py-20">
        <CourseShowcase
          courses={courses}
          ownedCourseIds={ownedCourseIds}
        />
      </section>

      <section id="miksi" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#eee9df] p-3 shadow-xl shadow-slate-900/10">
            <img src={uudetkurssit.src} alt="Opiskelua ValintaGurun avulla" className="aspect-square w-full rounded-[1.4rem] object-cover" />
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Miksi ValintaGuru?</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">Tavoitteellista opiskelua ilman turhaa säätöä</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Selkeä kokonaisuus", "Teoriat, harjoitukset ja materiaalit löytyvät samalta alustalta."],
                ["Kokeen taidot", "Harjoittele päättelyä, tekstianalyysiä ja ajankäytön hallintaa."],
                ["Oma eteneminen", "Tunnista vahvuutesi ja keskity niihin aiheisiin, joissa kehitystä tarvitaan."],
                ["Joustava opiskelu", "Kaikki kurssit ovat verkossa ja käytettävissä omassa aikataulussasi."],
              ].map(([title, description], index) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 font-black text-[#3f51e7]">{index + 1}</span>
                  <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ajankohtaista" className="scroll-mt-20 bg-[#3f51e7] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="font-bold uppercase tracking-[0.18em] text-indigo-100">Ajankohtaista</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
                Seuraa ValintaGurun uusimpia vinkkejä
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-indigo-100 lg:mx-0">
                Katso uusimmat sisällöt Instagramista ja TikTokista.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-center font-bold text-[#3f51e7] sm:w-auto"
                >
                  Avaa Instagram
                </a>
                <a
                  href={tiktokProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
                >
                  Avaa TikTok
                </a>
              </div>
            </div>

            <div className="flex min-w-0 items-center justify-center lg:justify-end">
              <div className="w-full min-w-0 max-w-[560px] rounded-[1.5rem] bg-white p-3 text-slate-950 shadow-2xl shadow-indigo-950/20 sm:rounded-[2rem] sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#3f51e7]">Instagram</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-600">@valintaguru</p>
                  </div>
                  <a
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
                  >
                    Seuraa
                  </a>
                </div>

                <div className="relative mt-4 h-[210px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 min-[390px]:h-[230px] sm:h-[270px]">
                  <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
                    {instagramPosts.map((post, index) => {
                      const position = getInstagramPosition(index);
                      const isVisible = Math.abs(position) <= 2;
                      const isActive = position === 0;

                      const transform =
                        position === 0
                          ? "translateX(0) translateZ(80px) scale(1) rotateY(0deg)"
                          : position === -1
                            ? "translateX(-46%) translateZ(0) scale(0.82) rotateY(12deg)"
                            : position === 1
                              ? "translateX(46%) translateZ(0) scale(0.82) rotateY(-12deg)"
                              : position === -2
                                ? "translateX(-76%) translateZ(-90px) scale(0.66) rotateY(18deg)"
                                : "translateX(76%) translateZ(-90px) scale(0.66) rotateY(-18deg)";

                      return (
                        <button
                          key={post.alt}
                          type="button"
                          onClick={() => setInstagramSlide(index)}
                          aria-label={`Näytä Instagram-kuva ${index + 1}`}
                          aria-current={isActive ? "true" : undefined}
                          className={`absolute aspect-[4/3] w-[180px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl transition-all duration-500 ease-out min-[390px]:w-[205px] sm:w-[285px] ${
                            isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                          } ${isActive ? "z-30" : Math.abs(position) === 1 ? "z-20" : "z-10"}`}
                          style={{
                            transform,
                            filter: isActive
                              ? "brightness(1)"
                              : Math.abs(position) === 1
                                ? "brightness(0.84)"
                                : "brightness(0.67)",
                          }}
                        >
                          <img
                            src={post.image}
                            alt={post.alt}
                            className="h-full w-full object-cover"
                          />
                          {!isActive && (
                            <span className="absolute inset-0 bg-slate-950/10" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={previousInstagramSlide}
                    aria-label="Edellinen Instagram-kuva"
                    className="absolute left-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-slate-950 shadow-lg transition hover:scale-105"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextInstagramSlide}
                    aria-label="Seuraava Instagram-kuva"
                    className="absolute right-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-slate-950 shadow-lg transition hover:scale-105"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {instagramPosts.map((post, index) => (
                    <button
                      key={post.alt}
                      type="button"
                      onClick={() => setInstagramSlide(index)}
                      aria-label={`Näytä Instagram-kuva ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        instagramSlide === index
                          ? "w-7 bg-[#3f51e7]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 min-w-0 overflow-hidden rounded-[1.5rem] bg-white p-2 text-slate-950 shadow-2xl shadow-indigo-950/20 sm:rounded-[2rem] sm:p-4 md:p-5">
            <blockquote
              className="tiktok-embed"
              cite={tiktokProfileUrl}
              data-unique-id="valintaguru"
              data-embed-type="creator"
              style={{
                margin: "0 auto",
                maxWidth: "100%",
                minWidth: "0",
                width: "100%",
              }}
            >
              <section className="flex min-h-[360px] items-center justify-center p-5 text-center sm:min-h-[420px] sm:p-8">
                <div>
                  <p className="text-lg font-extrabold">Ladataan TikTok-profiilia…</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${tiktokProfileUrl}?refer=creator_embed`}
                    className="mt-4 inline-flex rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white"
                  >
                    @valintaguru TikTokissa
                  </a>
                </div>
              </section>
            </blockquote>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#fffdf8]">
  <div className="mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:px-5 sm:py-12 md:grid-cols-2 md:px-8 lg:grid-cols-4">
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 overflow-hidden rounded-full border border-slate-950 bg-white">
          <img
            src={logo.src}
            alt="ValintaGuru"
            className="h-full w-full object-cover"
          />
        </span>

        <span className="font-serif text-2xl font-semibold">
          ValintaGuru
        </span>
      </div>

      <p className="mt-4 max-w-sm leading-7 text-slate-600">
        Valmennuskurssit valintakoe G:hen ja oikeustieteen
        eriytyvään osioon.
      </p>
    </div>

    <div>
      <p className="font-extrabold">Kurssialusta</p>

      <div className="mt-4 flex flex-col gap-3 text-slate-600">
        <a
          href="#omat-kurssit"
          className="transition hover:text-[#3f51e7]"
        >
          Omat kurssit
        </a>

        {isLoggedIn && ownedCourses.length > 0 && (
          <>
            <a
              href="/kalenteri"
              className="transition hover:text-[#3f51e7]"
            >
              Kalenteri
            </a>

            <a
              href="/gurupath"
              className="transition hover:text-[#3f51e7]"
            >
              GuruPeli
            </a>
          </>
        )}

        <a
          href="/kysy"
          className="transition hover:text-[#3f51e7]"
        >
          Kysy ValintaGurulta
        </a>

        <a
          href={HOLVI_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[#3f51e7]"
        >
          Verkkokauppa ↗
        </a>

        {isLoggedIn && (
          <a
            href="/profiili"
            className="transition hover:text-[#3f51e7]"
          >
            Profiili
          </a>
        )}
      </div>
    </div>

    <div>
      <p className="font-extrabold">Ehdot</p>

      <div className="mt-4 flex flex-col gap-3 text-slate-600">
        <a
          href="/ehdot/tietosuojakaytanto"
          className="transition hover:text-[#3f51e7]"
        >
          Tietosuojakäytäntö
        </a>

        <a
          href="/ehdot/palautuskaytanto"
          className="transition hover:text-[#3f51e7]"
        >
          Palautuskäytäntö
        </a>

        <a
          href="/ehdot/kayttoehdot"
          className="transition hover:text-[#3f51e7]"
        >
          Käyttöehdot
        </a>

        <a
          href="/ehdot/toimituskaytanto"
          className="transition hover:text-[#3f51e7]"
        >
          Toimituskäytäntö
        </a>
      </div>
    </div>

    <div>
      <p className="font-extrabold">ValintaGuru Oy</p>

      <div className="mt-4 flex flex-col gap-3 text-slate-600">
        <p>Y-tunnus 3573013-4</p>

        <a
          href="mailto:info@valintaguru.com"
          className="transition hover:text-[#3f51e7]"
        >
          info@valintaguru.com
        </a>

        <a
          href="/ehdot/yhteystiedot"
          className="transition hover:text-[#3f51e7]"
        >
          Yhteystiedot
        </a>

        <a
          href="/ehdot/oikeudellinen-huomautus"
          className="transition hover:text-[#3f51e7]"
        >
          Oikeudellinen huomautus
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-slate-200 px-4 py-5 sm:px-5">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row">
      <p>© 2026 ValintaGuru Oy</p>

      <a
        href="/ehdot"
        className="font-semibold transition hover:text-[#3f51e7]"
      >
        Kaikki ehdot ja yritystiedot
      </a>
    </div>
  </div>
</footer>
      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
    </main>
  );
}