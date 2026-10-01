"use client";

import CourseAccessCard from "../../components/CourseAccessCard";
import { courses } from "../../data/courses";
import type { CourseId } from "../../data/courses";
import { useHomeAuth } from "./HomeAuthProvider";

export default function OwnedCoursesClient() {
  const { loading, isLoggedIn, ownedCourseIds } = useHomeAuth();
  const ownedCourses = courses.filter((course) =>
    ownedCourseIds.includes(course.id.toLowerCase() as CourseId),
  );

  return (
      <section id="omat-kurssit" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Kurssialusta</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">Omat kurssisi</h2>
            
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
                  Kalenteri ja GuruPeli (Tulossa)
                </h3>
                
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
  );
}
