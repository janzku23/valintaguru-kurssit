"use client";

import { useEffect, useMemo, useState } from "react";
import type { Course, CourseId } from "@/data/courses";
import { HOLVI_STORE_URL } from "@/data/courses";

type Props = {
  courses: Course[];
  ownedCourseIds: CourseId[];
};

type FilterId = "all" | "oikis" | "g" | "yo";

type CoursePresentation = {
  category: Exclude<FilterId, "all">;
  eyebrow: string;
  description: string;
  features: string[];
};

const FILTERS: Array<{ id: FilterId; label: string }> = [
  { id: "all", label: "Kaikki" },
  { id: "oikis", label: "Oikis" },
  { id: "g", label: "Valintakoe G" },
  { id: "yo", label: "YO" },
];

const COURSE_PURCHASE_URLS: Partial<Record<CourseId, string>> = {
  "oikis-tiivis":
    "https://holvi.com/shop/ValintaGuru/product/2924c4a5d912b3900a8ff64a33acaf86/",
  "oikis-teho":
    "https://holvi.com/shop/ValintaGuru/product/cb4c0943e31b1004b46d7896c36e9ce1/",
  "valintakoe-g":
    "https://holvi.com/shop/ValintaGuru/product/fe710d122cc569aa42c7915c961f2acf/",
  "valintakoe-g-etaope":
    "https://holvi.com/shop/ValintaGuru/product/53808fad0e707c2e4a17a92355b58b4a/",
};

const COURSE_PRICES: Partial<Record<CourseId, string>> = {
  "oikis-tiivis": "149 €",
  "oikis-teho": "199 €",
  "valintakoe-g": "120 €",
  "valintakoe-g-etaope": "279 €",
};

const PRESENTATION: Partial<Record<CourseId, CoursePresentation>> = {
  oikis: {
    category: "oikis",
    eyebrow: "Oikeustiede",
    description:
      "",
    features: ["Harjoitukset", "Teoria", "GuruPeli"],
  },
  "oikis-tiivis": {
    category: "oikis",
    eyebrow: "Oikeustiede",
    description:
      "",
    features: ["Ennakkomateriaali", "Flashcardit", "GuruPeli"],
  },
  "oikis-teho": {
    category: "oikis",
    eyebrow: "Oikeustiede",
    description:
      "",
    features: ["Teoria", "Harjoitukset", "Etäopetus"],
  },
  "valintakoe-g": {
    category: "g",
    eyebrow: "Valintakoe G",
    description:
      "",
    features: ["Päättely", "Aineistot", "GuruPeli"],
  },
  "valintakoe-g-etaope": {
    category: "g",
    eyebrow: "Valintakoe G",
    description:
      "",
    features: ["Harjoitukset", "GuruPeli", "Etäopetus"],
  },
  yo: {
    category: "yo",
    eyebrow: "Ylioppilaskokeet",
    description:
      "",
    features: ["Teoria", "Flashcardit", "GuruPeli"],
  },
};

function getPresentation(course: Course): CoursePresentation {
  return (
    PRESENTATION[course.id] ?? {
      category: "g",
      eyebrow: course.label,
      description: course.description.replaceAll("GuruPath", "GuruPeli"),
      features: ["Teoria", "Harjoitukset", "GuruPeli"],
    }
  );
}

function getPurchaseUrl(course: Course) {
  const directUrl = COURSE_PURCHASE_URLS[course.id];

  if (directUrl) {
    return directUrl;
  }

  if (
    "purchaseUrl" in course &&
    typeof course.purchaseUrl === "string" &&
    course.purchaseUrl.trim().length > 0 &&
    course.purchaseUrl !== HOLVI_STORE_URL
  ) {
    return course.purchaseUrl;
  }

  return null;
}

export default function CourseShowcase({
  courses,
  ownedCourseIds,
}: Props) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCourses = useMemo(() => {
    if (filter === "all") {
      return courses;
    }

    return courses.filter(
      (course) => getPresentation(course).category === filter
    );
  }, [courses, filter]);

  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  useEffect(() => {
    if (activeIndex > visibleCourses.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, visibleCourses.length]);

  if (visibleCourses.length === 0) {
    return null;
  }

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? visibleCourses.length - 1 : current - 1
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === visibleCourses.length - 1 ? 0 : current + 1
    );
  }

  function relativePosition(index: number) {
    const total = visibleCourses.length;

    if (total <= 1) {
      return 0;
    }

    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
      <div className="grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:grid-cols-[0.72fr_1.28fr]">
        {/* Vasen puoli: teksti + rajaus */}
        <div className="max-w-xl lg:pr-4">
          <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">
            Valmennuskurssit
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
            Valitse tavoitteeseesi sopiva kokonaisuus
          </h2>

          <p className="mt-4 max-w-lg leading-7 text-slate-600 sm:text-lg">
            Rajaa vaihtoehtoja ja selaa kursseja sivusuunnassa.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((item) => {
              const active = item.id === filter;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    active
                      ? "bg-slate-950 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-[#3f51e7]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <a
            href={HOLVI_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#3f51e7] transition hover:text-[#3142d6]"
          >
            Avaa verkkokauppa
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Oikea puoli: IG-tyylinen pyörivä rulla */}
        <div className="relative min-w-0">
          <div className="relative mx-auto overflow-hidden px-1 py-3 sm:px-4">
            <div
              className="relative mx-auto h-[390px] max-w-[760px] sm:h-[370px]"
              style={{ perspective: "1200px" }}
            >
              {visibleCourses.map((course, index) => {
                const position = relativePosition(index);
                const absPosition = Math.abs(position);
                const isActive = position === 0;
                const isVisible = absPosition <= 1;
                const presentation = getPresentation(course);
                const owned = ownedCourseIds.includes(course.id);
                const purchaseUrl = getPurchaseUrl(course);
                const price = COURSE_PRICES[course.id];

                const transform =
                  position === 0
                    ? "translateX(-50%) translateZ(80px) scale(1) rotateY(0deg)"
                    : position === -1
                      ? "translateX(-94%) translateZ(-70px) scale(0.80) rotateY(8deg)"
                      : position === 1
                        ? "translateX(-6%) translateZ(-70px) scale(0.80) rotateY(-8deg)"
                        : position < -1
                          ? "translateX(-118%) translateZ(-140px) scale(0.68)"
                          : "translateX(18%) translateZ(-140px) scale(0.68)";

                return (
                  <article
                    key={course.id}
                    onClick={() => {
                      if (!isActive && isVisible) {
                        setActiveIndex(index);
                      }
                    }}
                    className={`absolute left-1/2 top-0 w-[82%] max-w-[500px] overflow-hidden rounded-[1.75rem] border bg-white transition-all duration-500 ease-out sm:w-[68%] ${
                      isActive
                        ? "z-30 cursor-default border-indigo-200 shadow-xl shadow-slate-900/10"
                        : isVisible
                          ? "z-20 cursor-pointer border-slate-200 shadow-md"
                          : "pointer-events-none z-0 border-slate-100"
                    }`}
                    style={{
                      transform,
                      opacity: isVisible ? 1 : 0,
                      filter: isActive
                        ? "brightness(1)"
                        : "brightness(0.92)",
                    }}
                  >
                    <div className="flex h-[320px] flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3f51e7]">
                          {presentation.eyebrow}
                        </p>

                        {owned && (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-black text-emerald-700">
                            Käytössä
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 font-serif text-xl font-semibold leading-tight text-slate-950 sm:text-2xl">
                        {course.title}
                      </h3>

                      {presentation.description && (
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                          {presentation.description}
                        </p>
                      )}

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {presentation.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex min-h-12 items-end justify-between gap-3 border-t border-slate-100 pt-4">
                        {!isActive ? (
                          <p className="text-[11px] font-black uppercase tracking-[0.13em] text-slate-400">
                            {position < 0 ? "Edellinen" : "Seuraava"} · klikkaa nähdäksesi
                          </p>
                        ) : owned ? (
                          <a
                            href={`/kurssi/${course.id}`}
                            onClick={(event) => event.stopPropagation()}
                            className="ml-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-sm transition hover:bg-emerald-700"
                          >
                            Avaa kurssi
                            <span aria-hidden="true">→</span>
                          </a>
                        ) : (
                          <>
                            <div className="min-w-0">
                              {price && (
                                <>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    Hinta
                                  </p>
                                  <p className="mt-0.5 text-sm font-black text-slate-800">
                                    {price}
                                  </p>
                                </>
                              )}
                            </div>

                            {purchaseUrl ? (
                              <a
                                href={purchaseUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="ml-auto inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#3f51e7] px-4 py-2 text-xs font-black text-white shadow-sm transition hover:bg-[#3142d6]"
                              >
                                Osta Holvista
                                <span aria-hidden="true">↗</span>
                              </a>
                            ) : (
                              <a
                                href={HOLVI_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="ml-auto inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-black text-slate-600 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
                              >
                                Avaa verkkokauppa
                                <span aria-hidden="true">↗</span>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}

              {visibleCourses.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Edellinen kurssi"
                    className="absolute left-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-lg font-black text-slate-700 shadow-lg backdrop-blur transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:left-2"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Seuraava kurssi"
                    className="absolute right-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#3f51e7] text-lg font-black text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#3142d6] sm:right-2"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              {visibleCourses.map((course, index) => (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Näytä kurssi ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-7 bg-[#3f51e7]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
