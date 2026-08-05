"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import Script from "next/script";
import { createClient } from "@/utils/supabase/client";
import CourseAccessCard from "../components/CourseAccessCard";
import LockedCourseCard from "../components/LockedCourseCard";
import { CourseId, courses } from "../data/courses";
import testiImage from "../assets/testi.jpg";
import frontLogo from "../assets/frontlogo.png";
import logo from "../assets/logo.png";

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

  const lockedCourses = courses.filter(
    (course) =>
      !ownedCourseIds.includes(course.id.toLowerCase() as CourseId),
  );

  const instagramProfileUrl = "https://www.instagram.com/valintaguru/";
  const tiktokProfileUrl = "https://www.tiktok.com/@valintaguru";
  const [instagramSlide, setInstagramSlide] = useState(0);

  const instagramPosts = [
    { image: testiImage.src, alt: "ValintaGurun Instagram-julkaisu 1" },
    { image: testiImage.src, alt: "ValintaGurun Instagram-julkaisu 2" },
    { image: testiImage.src, alt: "ValintaGurun Instagram-julkaisu 3" },
    { image: testiImage.src, alt: "ValintaGurun Instagram-julkaisu 4" },
    { image: testiImage.src, alt: "ValintaGurun Instagram-julkaisu 5" },
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
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fffdf8]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 overflow-hidden rounded-full border border-slate-950 bg-white">
              <img src={logo.src} alt="ValintaGuru" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-2xl font-semibold tracking-tight">ValintaGuru</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#omat-kurssit" className="transition hover:text-[#3f51e7]">Omat kurssit</a>
            <a href="#kurssit" className="transition hover:text-[#3f51e7]">Valmennuskurssit</a>
            <a href="#miksi" className="transition hover:text-[#3f51e7]">Miksi ValintaGuru?</a>
            <a href="#ajankohtaista" className="transition hover:text-[#3f51e7]">Ajankohtaista</a>
            {isLoggedIn && <a href="/profiili" className="transition hover:text-[#3f51e7]">Profiili</a>}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/kauppa" className="hidden rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:inline-flex">
              Tutustu kursseihin
            </a>
            <a href={isLoggedIn ? "/profiili" : "/kirjaudu"} className="rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-[#3142d6]">
              {loading ? "Tarkistetaan..." : isLoggedIn ? "Oma profiili" : "Kirjaudu"}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3f51e7] opacity-95" />
        <div className="absolute -bottom-20 left-8 h-40 w-40 rounded-[2.5rem] border-[10px] border-[#f3a31b] opacity-90" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-[#3f51e7]">
              Verkossa · omaan tahtiin · tavoitteellisesti
            </div>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Valmistaudu valintakokeeseen fiksummin.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              ValintaGurun valmennuskurssit auttavat sinua ymmärtämään kokeen rakennetta, kehittämään päättelyä, analysoimaan tekstejä huolellisesti ja hallitsemaan ajankäyttöä koetilanteessa.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={isLoggedIn ? "#omat-kurssit" : "/kirjaudu"} className="rounded-full bg-[#3f51e7] px-7 py-3.5 font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-[#3142d6]">
                {isLoggedIn ? "Jatka opiskelua" : "Kirjaudu kurssialustalle"}
              </a>
              <a href="/kauppa" className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-900 transition hover:border-[#3f51e7] hover:text-[#3f51e7]">
                Tutustu kursseihin
              </a>
            </div>
            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="block text-xl text-[#3f51e7]">100 %</strong><span className="text-slate-600">verkossa</span></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="block text-xl text-[#3f51e7]">24/7</strong><span className="text-slate-600">käytettävissä</span></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="block text-xl text-[#3f51e7]">Oma</strong><span className="text-slate-600">opiskelutahti</span></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rotate-3 rounded-[2.25rem] bg-[#f3a31b]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/15">
              <img src={frontLogo.src} alt="ValintaGurun kurssialusta" className="aspect-[4/2] w-full rounded-[1.4rem] object-cover" /> 
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-bold text-[#3f51e7]">Uudistunut kurssialusta</p>
                <p className="mt-1 font-semibold">Teoria, harjoitukset ja oma edistyminen yhdessä paikassa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="omat-kurssit" className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Kurssialusta</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Omat kurssisi</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-700">Näet tässä ne kurssit, joihin sinulla on aktiivinen käyttöoikeus.</p>
          </div>
          <a href="/kauppa" className="inline-flex w-fit rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-[#3f51e7]">Hanki uusi kurssi</a>
        </div>

        {loading ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><h3 className="text-2xl font-extrabold">Tarkistetaan kirjautumista...</h3><p className="mt-3 text-slate-700">Haetaan käyttäjää ja kurssioikeuksia.</p></div>
        ) : !isLoggedIn ? (
          <div className="mt-8 grid gap-6 rounded-[2rem] border border-indigo-100 bg-indigo-50 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div><h3 className="text-2xl font-extrabold">Kirjaudu nähdäksesi omat kurssisi</h3><p className="mt-3 leading-8 text-slate-700">Kirjaudu samalla sähköpostiosoitteella, jolla kurssi on hankittu.</p></div>
            <a href="/kirjaudu" className="inline-flex rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white">Kirjaudu sisään</a>
          </div>
        ) : ownedCourses.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">{ownedCourses.map((course) => <CourseAccessCard key={course.id} course={course} />)}</div>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><h3 className="text-2xl font-extrabold">Sinulla ei ole vielä aktiivisia kursseja</h3><p className="mt-3 leading-8 text-slate-700">Kun hankit kurssin, se ilmestyy tähän samalla sähköpostiosoitteella kirjautumisen jälkeen.</p><a href="/kauppa" className="mt-6 inline-flex rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white">Tutustu kursseihin</a></div>
        )}
      </section>

      <section id="kurssit" className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Valmennuskurssit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Valitse tavoitteeseesi sopiva kokonaisuus</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Opiskele joustavasti missä tahansa. Kurssit keskittyvät valintakokeessa tarvittaviin taitoihin ja auttavat tunnistamaan omat vahvuutesi sekä kehityskohteesi.</p>
          </div>
          <div id="muut-kurssit" className="mt-10 grid gap-6 md:grid-cols-3">{lockedCourses.map((course) => <LockedCourseCard key={course.id} course={course} />)}</div>
          <a href="/kauppa" className="mt-8 inline-flex rounded-full bg-[#3f51e7] px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-600/20">Avaa kurssikauppa</a>
        </div>
      </section>

      <section id="miksi" className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#eee9df] p-3 shadow-xl shadow-slate-900/10">
            <img src={testiImage.src} alt="Opiskelua ValintaGurun avulla" className="aspect-square w-full rounded-[1.4rem] object-cover" />
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Miksi ValintaGuru?</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Tavoitteellista opiskelua ilman turhaa säätöä</h2>
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

      <section id="ajankohtaista" className="bg-[#3f51e7] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="font-bold uppercase tracking-[0.18em] text-indigo-100">Ajankohtaista</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
                Seuraa ValintaGurun uusimpia vinkkejä
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-indigo-100 lg:mx-0">
                Katso uusimmat sisällöt Instagramista ja TikTokista.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-white px-7 py-3.5 font-bold text-[#3f51e7]"
                >
                  Avaa Instagram
                </a>
                <a
                  href={tiktokProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Avaa TikTok
                </a>
              </div>
            </div>

            <div className="flex min-w-0 items-center justify-center lg:justify-end">
              <div className="w-full max-w-[560px] rounded-[2rem] bg-white p-4 text-slate-950 shadow-2xl shadow-indigo-950/20 sm:p-5">
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

                <div className="relative mt-4 h-[240px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 sm:h-[270px]">
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
                          className={`absolute aspect-[4/3] w-[220px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl transition-all duration-500 ease-out sm:w-[285px] ${
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

          <div className="mt-6 overflow-hidden rounded-[2rem] bg-white p-4 text-slate-950 shadow-2xl shadow-indigo-950/20 md:p-5">
            <blockquote
              className="tiktok-embed"
              cite={tiktokProfileUrl}
              data-unique-id="valintaguru"
              data-embed-type="creator"
              style={{
                margin: "0 auto",
                maxWidth: "100%",
                minWidth: "288px",
                width: "100%",
              }}
            >
              <section className="flex min-h-[420px] items-center justify-center p-8 text-center">
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
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8 lg:grid-cols-4">
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

        <a
          href="/kauppa"
          className="transition hover:text-[#3f51e7]"
        >
          Kurssikauppa
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

  <div className="border-t border-slate-200 px-5 py-5">
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