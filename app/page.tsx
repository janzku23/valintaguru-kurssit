"use client";

import { useEffect, useMemo, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import CourseAccessCard from "../components/CourseAccessCard";
import LockedCourseCard from "../components/LockedCourseCard";
import { CourseId, courses } from "../data/courses";

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

  useEffect(() => {
    loadUserAndCourses();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUserAndCourses();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function loadUserAndCourses() {
    setLoading(true);

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      setUser(null);
      setOwnedCourseIds([]);
      setLoading(false);
      return;
    }

    setUser(user);

    const rows: StudentCourseRow[] = [];

    const byUserId = await supabase
      .from("student_courses")
      .select("*")
      .eq("user_id", user.id);

    if (!byUserId.error && byUserId.data) {
      rows.push(...byUserId.data);
    }

    if (user.email) {
      const byEmail = await supabase
        .from("student_courses")
        .select("*")
        .eq("email", user.email.toLowerCase());

      if (!byEmail.error && byEmail.data) {
        rows.push(...byEmail.data);
      }
    }

    const ids = rows
      .filter((row) => {
        if (!row.status) return true;
        return row.status.toLowerCase() === "active";
      })
      .map((row) => row.course_id || row.course_slug)
      .filter(Boolean)
      .map((id) => id!.toLowerCase()) as CourseId[];

    const uniqueIds = Array.from(new Set(ids));

    setOwnedCourseIds(uniqueIds);
    setLoading(false);
  }

  const isLoggedIn = !!user;

  const ownedCourses = courses.filter((course) =>
    ownedCourseIds.includes(course.id.toLowerCase() as CourseId)
  );

  const lockedCourses = courses.filter(
    (course) => !ownedCourseIds.includes(course.id.toLowerCase() as CourseId)
  );

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-extrabold text-blue-700">
            ValintaGuru
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#omat-kurssit" className="transition hover:text-blue-700">
              Omat kurssit
            </a>

            <a href="#muut-kurssit" className="transition hover:text-blue-700">
              Muut kurssit
            </a>

            {isLoggedIn && (
              <a href="/profiili" className="transition hover:text-blue-700">
                Profiili
              </a>
            )}

            <a
              href="https://valintaguru.fi"
              className="transition hover:text-blue-700"
            >
              Valintaguru.fi
            </a>
          </nav>

          <a
            href={isLoggedIn ? "/profiili" : "/kirjaudu"}
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            {loading
              ? "Tarkistetaan..."
              : isLoggedIn
                ? "Oma profiili"
                : "Kirjaudu"}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-100">
            Kurssialusta
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Tervetuloa takaisin opiskelemaan.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            Näet tällä sivulla ne kurssit, joihin sinulla on käyttöoikeus.
            Jokaisella kurssilla on omat teoriat, harjoitukset ja materiaalit.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={isLoggedIn ? "#omat-kurssit" : "/kirjaudu"}
              className="rounded-full bg-white px-7 py-3 font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              {isLoggedIn ? "Näytä omat kurssit" : "Kirjaudu sisään"}
            </a>

            <a
              href="https://valintaguru.fi"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Siirry verkkosivuille
            </a>
          </div>
        </div>
      </section>

      <section id="omat-kurssit" className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-blue-700">Omat kurssit</p>

            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Käyttöoikeutesi
            </h2>
          </div>
        </div>

        {loading ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-950">
              Tarkistetaan kirjautumista...
            </h3>

            <p className="mt-3 leading-8 text-slate-700">
              Haetaan käyttäjää ja kurssioikeuksia.
            </p>
          </div>
        ) : !isLoggedIn ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-950">
              Kirjaudu nähdäksesi omat kurssisi
            </h3>

            <p className="mt-3 leading-8 text-slate-700">
              Kurssioikeudet näkyvät vain kirjautuneelle käyttäjälle. Kirjaudu
              samalla sähköpostilla, jolla kurssi on ostettu.
            </p>

            <a
              href="/kirjaudu"
              className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Kirjaudu sisään
            </a>
          </div>
        ) : ownedCourses.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ownedCourses.map((course) => (
              <CourseAccessCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-950">
              Sinulla ei ole vielä aktiivisia kursseja
            </h3>

            <p className="mt-3 leading-8 text-slate-700">
              Kun ostat kurssin ValintaGurun verkkosivuilta, se ilmestyy tähän
              näkymään kirjautumisen jälkeen.
            </p>

            <a
              href="https://valintaguru.fi"
              className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Siirry verkkosivuille
            </a>
          </div>
        )}
      </section>

      <section id="muut-kurssit" className="mx-auto max-w-7xl px-6 py-12">
        <div>
          <p className="font-bold text-blue-700">Muut kurssit</p>

          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Muut kokonaisuudet
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-slate-700">
            Nämä kurssit eivät ole tällä hetkellä käytössä tällä käyttäjällä.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {lockedCourses.map((course) => (
            <LockedCourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <footer className="mt-14 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold text-blue-700">
              ValintaGuru
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Kurssialusta opiskelijoille.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            <a href="#omat-kurssit" className="hover:text-blue-700">
              Omat kurssit
            </a>

            <a href="#muut-kurssit" className="hover:text-blue-700">
              Muut kurssit
            </a>

            {isLoggedIn && (
              <a href="/profiili" className="hover:text-blue-700">
                Profiili
              </a>
            )}

            <a href="https://valintaguru.fi" className="hover:text-blue-700">
              Valintaguru.fi
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}