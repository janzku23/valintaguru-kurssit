"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import GuruPathChallenge from "./GuruPathChallenge";
import JourneyScenery from "./JourneyScenery";

import type {
  GuruGameViewId,
  GuruPublicQuestion,
  GuruPathNode,
  GuruPathCourse,
  GuruQuestionCategory,
} from "@/data/gurupath/types";

import type {
  CourseId,
} from "@/data/courses";

type NodeStatus =
  | "done"
  | "open"
  | "locked"
  | "missing";

type Props = {
  viewId: GuruGameViewId;
  path: GuruPathCourse;
  publicQuestions: Record<string, GuruPublicQuestion>;
  progressCourseIds: CourseId[];
  storageCourseIds: {
    oikis: CourseId | null;
    "valintakoe-g": CourseId | null;
  };
};

type CompletedEntry = {
  sourceId: string;
  source:
    | "path-node"
    | "vault";
};

const ROW_HEIGHT = 290;
const TOP_PADDING = 170;
const BOTTOM_PADDING = 250;
const RENDER_BUFFER_PX = 750;

// Reitti mutkittelee, mutta kortit pysyvät myös kapeilla puhelimilla ruudulla.
const X_PATTERN = [50, 39, 34, 41, 57, 64, 66, 59, 43, 35];

/**
 * ValintaGurun viisi visuaalista maailmaa. Eteneminen on aina alhaalta ylöspäin.
 * Kuvitukset ovat paikallisia SVG-elementtejä: ei kuvalatauksia eikä lisäpaketteja.
 */
const JOURNEY_ZONES = [
  {
    title: "Lähtöaukio",
    subtitle: "Jokainen guru aloittaa jostakin.",
    short: "Aloitus",
    number: "01",
    accent: "#257f80",
    glow: "radial-gradient(ellipse at 80% 40%, rgba(88, 210, 191, .25), transparent 65%)",
  },
  {
    title: "Oivallusten puutarha",
    subtitle: "Harjoitus tekee mestarin.",
    short: "Oivallukset",
    number: "02",
    accent: "#4f67b1",
    glow: "radial-gradient(ellipse at 22% 50%, rgba(114, 176, 255, .24), transparent 65%)",
  },
  {
    title: "Tiedon kirjasto",
    subtitle: "Tieto muuttuu taidoksi.",
    short: "Tieto",
    number: "03",
    accent: "#6b58bb",
    glow: "radial-gradient(ellipse at 80% 50%, rgba(158, 137, 255, .27), transparent 65%)",
  },
  {
    title: "Akatemian salit",
    subtitle: "Osaaminen alkaa näkyä.",
    short: "Akatemia",
    number: "04",
    accent: "#efdefe",
    glow: "radial-gradient(ellipse at 25% 40%, rgba(213, 176, 255, .28), transparent 70%)",
  },
  {
    title: "Gurun huippu",
    subtitle: "Huipulle asti, askel kerrallaan.",
    short: "Huippu",
    number: "05",
    accent: "#ffe8a6",
    glow: "radial-gradient(ellipse at 65% 45%, rgba(245, 205, 133, .24), transparent 68%)",
  },
] as const;

function zoneForLevel(index: number, total: number) {
  if (total <= 0) return 0;
  return Math.min(
    JOURNEY_ZONES.length - 1,
    Math.floor((index / total) * JOURNEY_ZONES.length)
  );
}

const LEVELS_PER_STAGE = 10;

function JourneyBackdrop({
  height,
  total,
  scrollTop,
  viewportHeight,
}: {
  height: number;
  total: number;
  scrollTop: number;
  viewportHeight: number;
}) {
  // Maisemat toistuvat kiintein välein, vaikka kysymyspankki kasvaa.
  // Piirretään vain näkymän lähellä olevat etapit, kuten tehtävänapitkin.
  const stageCount = Math.ceil(total / LEVELS_PER_STAGE);
  const visibleStages = Array.from({ length: stageCount }, (_, stage) => {
    const first = stage * LEVELS_PER_STAGE;
    const last = Math.min(first + LEVELS_PER_STAGE, total) - 1;
    const top = last === total - 1 ? 0 : positionForLevel(last, total).y - ROW_HEIGHT / 2;
    const bottom = first === 0 ? height : positionForLevel(first, total).y + ROW_HEIGHT / 2;
    return { stage, first, last, top, height: bottom - top };
  }).filter((stage) =>
    stage.top + stage.height >= scrollTop - RENDER_BUFFER_PX &&
    stage.top <= scrollTop + viewportHeight + RENDER_BUFFER_PX
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #ebfaf7 0%, #e4f3f6 18%, #dee8ff 38%, #e0d7fb 58%, #6b4ea6 79%, #281947 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.85) 1px, transparent 1.5px)",
          backgroundSize: "38px 38px",
        }}
      />
      {visibleStages.map(({ stage, first, last, top, height: stageHeight }) => {
        const zoneIndex = zoneForLevel(Math.floor((first + last) / 2), total);
        const zone = JOURNEY_ZONES[zoneIndex];
        const dark = zoneIndex >= 3;
        const sceneCount = Math.max(1, Math.ceil(stageHeight / 850));

        return (
          <div
            key={stage}
            className="absolute inset-x-0 overflow-hidden"
            style={{ top, height: stageHeight }}
          >
            <div className="absolute inset-0" style={{ background: zone.glow }} />
            <div className="absolute inset-x-6 top-0 h-px bg-white/30 sm:inset-x-10" />
            <div className={`absolute left-4 top-5 hidden sm:block ${dark ? "text-white/70" : "text-slate-600/75"}`}>
              <p className="text-[10px] font-black uppercase tracking-[.2em]">Etappi {String(stage + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-xs font-bold">Tasot {first + 1}–{last + 1}</p>
            </div>

            {Array.from({ length: sceneCount }, (_, scene) => {
              const sceneTop = (scene + 0.5) * stageHeight / sceneCount;
              const onLeft = (stage + scene) % 2 === 0;
              return (
                <div key={scene} className="absolute inset-x-0" style={{ top: sceneTop }}>
                  <div className={`absolute -top-36 h-72 w-[75%] rounded-full blur-3xl ${onLeft ? "-left-1/4" : "-right-1/4"} ${dark ? "bg-violet-300/10" : "bg-white/45"}`} />
                  <div className={`absolute -top-28 w-[40%] max-w-[290px] -translate-y-1/2 opacity-65 sm:w-[32%] sm:opacity-80 ${onLeft ? "left-1 sm:left-5" : "right-1 sm:right-5"}`}>
                    <JourneyScenery zone={zoneIndex} variant={stage + scene} />
                  </div>
                  <div className={`absolute top-36 w-[28%] max-w-[155px] opacity-55 sm:opacity-70 ${onLeft ? "right-0 sm:right-5" : "left-0 sm:left-5"}`}>
                    <JourneyScenery zone={zoneIndex} variant={stage + scene + 1} />
                  </div>
                  <svg viewBox="0 0 1000 220" preserveAspectRatio="none" className="absolute -top-16 h-[220px] w-full" fill="none">
                    <path d="M-40 155Q150 30 340 135T710 120T1040 70" stroke={dark ? "#e9d5ff" : "#ffffff"} strokeOpacity={dark ? ".12" : ".5"} strokeWidth="50" />
                    <path d="M-40 190Q190 105 385 175T760 160T1040 125" stroke={dark ? "#d9c2ff" : "#8caed7"} strokeOpacity=".13" strokeWidth="2" />
                  </svg>
                  {[0, 1, 2].map((spark) => (
                    <span
                      key={spark}
                      className={`absolute h-1.5 w-1.5 rotate-45 ${dark ? "bg-amber-100/60" : "bg-violet-400/35"}`}
                      style={{ left: `${onLeft ? 8 + spark * 8 : 76 + spark * 7}%`, top: 120 + spark * 85 }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function sourceForNode(
  node: GuruPathNode
) {
  return node.type ===
    "vault"
    ? "vault"
    : "path-node";
}



function categoryLabel(
  category: GuruQuestionCategory
) {
  if (category === "oikis") return "Oikis";
  if (category === "valintakoe-g") return "Valintakoe G";
  return "Yhteinen";
}

function categoryClasses(
  category: GuruQuestionCategory
) {
  if (category === "oikis") return "bg-sky-50 text-sky-700 border-sky-100";
  if (category === "valintakoe-g") return "bg-amber-50 text-amber-700 border-amber-100";
  return "bg-violet-50 text-violet-700 border-violet-100";
}

/**
 * index 0 = taso 1 = kartan alin taso.
 */
function positionForLevel(
  index: number,
  total: number
) {
  const visualRow =
    total - 1 - index;

  return {
    x:
      X_PATTERN[
        index %
          X_PATTERN.length
      ],

    y:
      TOP_PADDING +
      visualRow *
        ROW_HEIGHT,
  };
}

export default function GuruPathMap({
  viewId,
  path,
  publicQuestions,
  progressCourseIds,
  storageCourseIds,
}: Props) {
  const levels =
    path.levels;

  const uniqueProgressCourseIds =
    useMemo(
      () =>
        Array.from(
          new Set(
            progressCourseIds
          )
        ),
      [progressCourseIds]
    );

  const [
    completedEntries,
    setCompletedEntries,
  ] = useState<
    CompletedEntry[]
  >([]);

  const [
    selectedNodeId,
    setSelectedNodeId,
  ] = useState<
    string | null
  >(null);

  const [
    loadingProgress,
    setLoadingProgress,
  ] = useState(true);

  const [
    progressError,
    setProgressError,
  ] = useState<
    string | null
  >(null);

  /**
   * Kun tämä on false, kartta voidaan näyttää normaalisti.
   * Ensin pakotetaan oikea scrollTop.
   */
  const [
    positioningMap,
    setPositioningMap,
  ] = useState(true);

  const [
    mapScrollTop,
    setMapScrollTop,
  ] = useState(0);

  const [
    mapViewportHeight,
    setMapViewportHeight,
  ] = useState(650);

  const mapScrollerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const scrollFrameRef =
    useRef<number | null>(
      null
    );

  /**
   * Estää sen, että automaattikeskitys yliajaa käyttäjän
   * manuaalisen scrollauksen jatkuvasti.
   */
  const lastAutoCenteredIndexRef =
    useRef<number | null>(
      null
    );

  useEffect(() => {
    let cancelled =
      false;

    async function loadProgress() {
      setLoadingProgress(true);
      setPositioningMap(true);
      setProgressError(null);

      try {
        const responses =
          await Promise.all(
            uniqueProgressCourseIds.map(
              async (courseId) => {
                const response =
                  await fetch(
                    `/api/gurupath/course-progress?courseId=${encodeURIComponent(
                      courseId
                    )}`,
                    { cache: "no-store" }
                  );

                const data =
                  await response.json();

                if (!response.ok) {
                  throw new Error(
                    data?.error ??
                      "GuruPeli-edistymistä ei voitu hakea."
                  );
                }

                return (
                  data.completed ?? []
                ) as CompletedEntry[];
              }
            )
          );

        const merged =
          new Map<string, CompletedEntry>();

        for (const entries of responses) {
          for (const entry of entries) {
            merged.set(
              entry.sourceId,
              entry
            );
          }
        }

        if (!cancelled) {
          setCompletedEntries(
            Array.from(merged.values())
          );
        }
      } catch (caught) {
        if (!cancelled) {
          setProgressError(
            caught instanceof Error
              ? caught.message
              : "GuruPeli-edistymistä ei voitu hakea."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingProgress(false);
        }
      }
    }

    void loadProgress();

    return () => {
      cancelled = true;
    };
  }, [uniqueProgressCourseIds]);

  function isNodeDone(
    node: GuruPathNode
  ) {
    return completedEntries.some(
      (entry) =>
        (entry.sourceId === `gurupeli:${node.questionId}` || entry.sourceId.endsWith(`:${node.questionId}`))
    );
  }

  function resolveQuestion(
    node: GuruPathNode
  ): GuruPublicQuestion | null {
    return publicQuestions[node.questionId] ?? null;
  }

  function courseIdForNode(
    node: GuruPathNode
  ): CourseId | null {
    if (node.category === "oikis") {
      return storageCourseIds.oikis;
    }

    if (node.category === "valintakoe-g") {
      return storageCourseIds["valintakoe-g"];
    }

    if (viewId === "oikis") {
      return storageCourseIds.oikis;
    }

    if (viewId === "valintakoe-g") {
      return storageCourseIds["valintakoe-g"];
    }

    return (
      storageCourseIds.oikis ??
      storageCourseIds["valintakoe-g"]
    );
  }

  function getNodeStatus(
    node: GuruPathNode,
    index: number
  ): NodeStatus {
    if (
      !resolveQuestion(node)
    ) {
      return "missing";
    }

    if (
      isNodeDone(node)
    ) {
      return "done";
    }

    if (index === 0) {
      return "open";
    }

    const previous =
      levels[
        index - 1
      ];

    return (
      previous &&
      isNodeDone(previous)
    )
      ? "open"
      : "locked";
  }

  const currentOpenIndex =
    levels.findIndex(
      (
        node,
        index
      ) =>
        getNodeStatus(
          node,
          index
        ) === "open"
    );

  const focusIndex =
    currentOpenIndex >= 0
      ? currentOpenIndex
      : Math.max(
          0,
          levels.length - 1
        );

  const selectedIndex =
    selectedNodeId
      ? levels.findIndex(
          (node) =>
            node.id ===
            selectedNodeId
        )
      : -1;

  const selectedNode =
    selectedIndex >= 0
      ? levels[
          selectedIndex
        ]
      : null;

  const selectedQuestion =
    selectedNode
      ? resolveQuestion(
          selectedNode
        )
      : null;

  const doneCount =
    levels.filter(
      (node) =>
        isNodeDone(node)
    ).length;

  const progress =
    levels.length > 0
      ? Math.round(
          (doneCount /
            levels.length) *
            100
        )
      : 0;

  const canvasHeight =
    TOP_PADDING +
    Math.max(
      0,
      levels.length - 1
    ) *
      ROW_HEIGHT +
    BOTTOM_PADDING;

  /**
   * Laskee tarkalleen scrollTopin, jolla taso on viewportin keskellä.
   */
  const getTargetScrollTop =
    useCallback(
      (
        index: number,
        viewportHeight: number
      ) => {
        if (
          levels.length ===
          0
        ) {
          return 0;
        }

        const {
          y,
        } =
          positionForLevel(
            index,
            levels.length
          );

        const maxScroll =
          Math.max(
            0,
            canvasHeight -
              viewportHeight
          );

        return Math.max(
          0,
          Math.min(
            maxScroll,
            y -
              viewportHeight /
                2
          )
        );
      },
      [
        levels.length,
        canvasHeight,
      ]
    );

  /**
   * Pakotettu keskitys.
   *
   * Ei käytetä pelkästään scrollTo():ta, vaan asetetaan myös
   * scrollTop suoraan. Tämä toimii luotettavasti myös heti mountissa.
   */
  const centerLevel =
    useCallback(
      (
        index: number,
        smooth = false
      ) => {
        const scroller =
          mapScrollerRef.current;

        if (!scroller) {
          return false;
        }

        const target =
          getTargetScrollTop(
            index,
            scroller.clientHeight
          );

        if (smooth) {
          scroller.scrollTo({
            top: target,
            behavior:
              "smooth",
          });
        } else {
          /**
           * Suora assignment on tarkoituksellinen.
           * Se ei jää selaimen smooth-scroll / mount timingin varaan.
           */
          scroller.scrollTop =
            target;
        }

        setMapScrollTop(
          target
        );

        lastAutoCenteredIndexRef.current =
          index;

        return true;
      },
      [
        getTargetScrollTop,
      ]
    );

  /**
   * TÄRKEIN KORJAUS:
   *
   * useLayoutEffect ajetaan DOM-muutoksen jälkeen mutta ennen maalausta.
   * Kartta keskitetään nykyiseen tasoon ennen kuin käyttäjä näkee sen.
   */
  useLayoutEffect(() => {
    if (
      loadingProgress ||
      selectedNodeId ||
      levels.length === 0
    ) {
      return;
    }

    let frame1 = 0;
    let frame2 = 0;

    const tryCenter =
      () => {
        const scroller =
          mapScrollerRef.current;

        if (!scroller) {
          frame1 =
            window.requestAnimationFrame(
              tryCenter
            );
          return;
        }

        /**
         * Kaksi framea varmistaa, että elementin korkeus ja scrollHeight
         * ovat varmasti muodostuneet myös dev/hot reload -tilanteessa.
         */
        frame1 =
          window.requestAnimationFrame(
            () => {
              frame2 =
                window.requestAnimationFrame(
                  () => {
                    centerLevel(
                      focusIndex,
                      false
                    );

                    setMapViewportHeight(
                      scroller.clientHeight
                    );

                    setPositioningMap(
                      false
                    );
                  }
                );
            }
          );
      };

    tryCenter();

    return () => {
      if (frame1) {
        window.cancelAnimationFrame(
          frame1
        );
      }

      if (frame2) {
        window.cancelAnimationFrame(
          frame2
        );
      }
    };
  }, [
    loadingProgress,
    selectedNodeId,
    focusIndex,
    levels.length,
    centerLevel,
  ]);

  /**
   * Kun uusi taso aukeaa, keskitetään se vain kerran.
   */
  useEffect(() => {
    if (
      loadingProgress ||
      positioningMap ||
      selectedNodeId ||
      levels.length === 0
    ) {
      return;
    }

    if (
      lastAutoCenteredIndexRef.current ===
      focusIndex
    ) {
      return;
    }

    const timer =
      window.setTimeout(
        () => {
          centerLevel(
            focusIndex,
            true
          );
        },
        60
      );

    return () => {
      window.clearTimeout(
        timer
      );
    };
  }, [
    focusIndex,
    loadingProgress,
    positioningMap,
    selectedNodeId,
    levels.length,
    centerLevel,
  ]);

  useEffect(() => {
    const scroller =
      mapScrollerRef.current;

    if (!scroller) {
      return;
    }

    const updateSize =
      () => {
        setMapViewportHeight(
          scroller.clientHeight
        );
      };

    updateSize();

    const observer =
      new ResizeObserver(
        updateSize
      );

    observer.observe(
      scroller
    );

    return () => {
      observer.disconnect();
    };
  }, [
    loadingProgress,
    selectedNodeId,
  ]);

  function handleMapScroll() {
    if (
      scrollFrameRef.current !==
      null
    ) {
      return;
    }

    scrollFrameRef.current =
      window.requestAnimationFrame(
        () => {
          const scroller =
            mapScrollerRef.current;

          if (scroller) {
            setMapScrollTop(
              scroller.scrollTop
            );
          }

          scrollFrameRef.current =
            null;
        }
      );
  }

  useEffect(() => {
    return () => {
      if (
        scrollFrameRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          scrollFrameRef.current
        );
      }
    };
  }, []);

  const visibleLevelIndexes =
    useMemo(() => {
      const minY =
        mapScrollTop -
        RENDER_BUFFER_PX;

      const maxY =
        mapScrollTop +
        mapViewportHeight +
        RENDER_BUFFER_PX;

      const result:
        number[] = [];

      for (
        let index = 0;
        index <
        levels.length;
        index += 1
      ) {
        const {
          y,
        } =
          positionForLevel(
            index,
            levels.length
          );

        if (
          y >= minY &&
          y <= maxY
        ) {
          result.push(
            index
          );
        }
      }

      /**
       * Nykyinen taso renderöidään aina varmuuden vuoksi,
       * vaikka scroll-state olisi yhden framen jäljessä.
       */
      if (
        levels.length > 0 &&
        !result.includes(
          focusIndex
        )
      ) {
        result.push(
          focusIndex
        );
      }

      return result.sort(
        (a, b) =>
          a - b
      );
    }, [
      levels.length,
      mapScrollTop,
      mapViewportHeight,
      focusIndex,
    ]);

  const visibleIndexSet =
    useMemo(
      () =>
        new Set(
          visibleLevelIndexes
        ),
      [visibleLevelIndexes]
    );

  const centeredIndex =
    useMemo(() => {
      if (
        levels.length ===
        0
      ) {
        return 0;
      }

      const centerY =
        mapScrollTop +
        mapViewportHeight /
          2;

      let closestIndex =
        0;

      let closestDistance =
        Number.POSITIVE_INFINITY;

      for (
        let index = 0;
        index <
        levels.length;
        index += 1
      ) {
        const {
          y,
        } =
          positionForLevel(
            index,
            levels.length
          );

        const distance =
          Math.abs(
            y -
              centerY
          );

        if (
          distance <
          closestDistance
        ) {
          closestDistance =
            distance;

          closestIndex =
            index;
        }
      }

      return closestIndex;
    }, [
      levels.length,
      mapScrollTop,
      mapViewportHeight,
    ]);

  const visibleZoneIndex = zoneForLevel(centeredIndex, levels.length);
  const currentZoneIndex = zoneForLevel(focusIndex, levels.length);

  const showReturnToCurrent =
    Math.abs(
      centeredIndex -
        focusIndex
    ) >= 2;

  function handleCompleted(
    sourceId: string,
    source:
      | "path-node"
      | "vault"
  ) {
    setCompletedEntries(
      (current) => {
        if (
          current.some(
            (entry) =>
              entry.sourceId ===
              sourceId
          )
        ) {
          return current;
        }

        return [
          ...current,
          {
            sourceId,
            source,
          },
        ];
      }
    );
  }

  if (levels.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-black">Ei GuruPeli-kysymyksiä</h1>
          <p className="mt-3 text-slate-600">Lisää kysymykset tiedostoon data/gurupath/questions.ts.</p>
        </div>
      </section>
    );
  }

  if (
    selectedNode &&
    selectedQuestion
  ) {
    const storageCourseId =
      courseIdForNode(
        selectedNode
      );

    if (!storageCourseId) {
      return (
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6 text-red-800">
            Tälle tehtävälle ei löytynyt aktiivista kurssioikeutta.
          </div>
        </section>
      );
    }

    return (
      <section className="px-4 py-7 sm:px-6 sm:py-10">
        <GuruPathChallenge
          key={
            selectedNode.id
          }
          courseId={
            storageCourseId
          }
          nodeId={`gurupeli:${selectedQuestion.id}`}
          levelNumber={
            selectedIndex +
            1
          }
          question={
            selectedQuestion
          }
          valintakoeGCategoryId={selectedNode.valintakoeGCategoryId}
          source={sourceForNode(
            selectedNode
          )}
          pointReward={
            selectedNode.points
          }
          hasNextLevel={
            selectedIndex <
            levels.length - 1
          }
          onCompleted={
            handleCompleted
          }
          onAdvance={() => {
            /**
             * Palataan kartalle.
             * completedEntries on jo päivittynyt -> focusIndex muuttuu.
             * useLayoutEffect/useEffect keskittää uuden tason.
             */
            setPositioningMap(
              true
            );

            lastAutoCenteredIndexRef.current =
              null;

            setSelectedNodeId(
              null
            );
          }}
          onClose={() => {
            setPositioningMap(
              true
            );

            lastAutoCenteredIndexRef.current =
              null;

            setSelectedNodeId(
              null
            );
          }}
        />
      </section>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="px-4 pb-4 pt-5 sm:px-6 sm:pt-7">
        <div className="rounded-[1.75rem] border border-violet-100 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-600">
                {viewId === "combined" ? "Yhdistetty GuruPeli" : "GuruPeli"}
              </p>

              <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {
                  path.title
                }
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Nykyinen taso:{" "}
                <strong>
                  {
                    focusIndex +
                    1
                  }
                </strong>
              </p>

              {viewId === "combined" && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-black text-sky-700">Oikis</span>
                  <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">Yhteinen</span>
                  <span className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">Valintakoe G</span>
                </div>
              )}
            </div>

            <div className="w-full max-w-[250px]">
              <div className="flex justify-between text-xs font-black text-slate-500">
                <span>
                  {
                    doneCount
                  }
                  /
                  {
                    levels.length
                  }{" "}
                  tasoa
                </span>

                <span>
                  {
                    progress
                  }{" "}
                  %
                </span>
              </div>

              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-violet-600 transition-[width]"
                  style={{
                    width:
                      `${progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-violet-50 pt-4">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-violet-500 to-amber-400 transition-[width]"
                style={{ width: `${((currentZoneIndex + 1) / JOURNEY_ZONES.length) * 100}%` }}
              />
            </div>
            <div className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-[11px] font-black text-violet-700">
              {JOURNEY_ZONES[currentZoneIndex].title}
            </div>
          </div>
        </div>

        {progressError && (
          <div className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
            {
              progressError
            }
          </div>
        )}
      </section>

      <section className="px-2 pb-6 sm:px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          {loadingProgress ? (
            <div className="grid h-[620px] place-items-center">
              <div className="text-center">
                <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />

                <p className="mt-4 font-black text-slate-600">
                  Ladataan karttaa…
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="pointer-events-none absolute left-3 top-3 z-30 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/82 px-3 py-2 text-[10px] font-black tracking-wide text-white shadow-lg backdrop-blur-lg sm:left-5 sm:top-5 sm:px-4 sm:py-2.5 sm:text-xs">
                <span className="h-2 w-2 shrink-0 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(253,230,138,.8)]" />
                <span>
                  {JOURNEY_ZONES[visibleZoneIndex].title}
                  <span className="mt-0.5 block text-[9px] font-bold tracking-normal text-white/70 sm:text-[10px]">
                    Etappi {Math.floor(centeredIndex / LEVELS_PER_STAGE) + 1}/{Math.ceil(levels.length / LEVELS_PER_STAGE)}
                    {" · "}Tasot {Math.floor(centeredIndex / LEVELS_PER_STAGE) * LEVELS_PER_STAGE + 1}–{Math.min((Math.floor(centeredIndex / LEVELS_PER_STAGE) + 1) * LEVELS_PER_STAGE, levels.length)}
                  </span>
                </span>
              </div>

              {showReturnToCurrent && (
                <button
                  type="button"
                  onClick={() => {
                    /**
                     * Painikkeessa käytetään suoraa keskitystä.
                     * Ei odoteta mitään effectiä.
                     */
                    centerLevel(
                      focusIndex,
                      true
                    );
                  }}
                  className="absolute right-3 top-3 z-30 rounded-full border border-violet-200 bg-white/95 px-3 py-2 text-[11px] font-black text-violet-700 shadow-lg backdrop-blur transition hover:bg-violet-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600 sm:right-5 sm:top-5 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  ◎ Nykyiseen tasoon{" "}
                  {
                    focusIndex +
                    1
                  }
                </button>
              )}

              <div
                ref={
                  mapScrollerRef
                }
                onScroll={
                  handleMapScroll
                }
                className={[
                  "relative h-[600px] overflow-y-auto overscroll-contain bg-[#ede8f8] sm:h-[670px] lg:h-[720px]",
                  positioningMap
                    ? "opacity-0"
                    : "opacity-100 transition-opacity duration-150",
                ].join(
                  " "
                )}
                style={{
                  scrollbarGutter:
                    "stable",
                }}
              >
                <div
                  className="relative"
                  style={{
                    height:
                      canvasHeight,
                  }}
                >
                  <JourneyBackdrop
                    height={canvasHeight}
                    total={levels.length}
                    scrollTop={mapScrollTop}
                    viewportHeight={mapViewportHeight}
                  />

                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox={`0 0 100 ${canvasHeight}`}
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    {levels
                      .slice(
                        0,
                        -1
                      )
                      .map(
                        (
                          node,
                          index
                        ) => {
                          if (
                            !visibleIndexSet.has(
                              index
                            ) &&
                            !visibleIndexSet.has(
                              index +
                                1
                            )
                          ) {
                            return null;
                          }

                          const from =
                            positionForLevel(
                              index,
                              levels.length
                            );

                          const to =
                            positionForLevel(
                              index +
                                1,
                              levels.length
                            );

                          const next =
                            levels[
                              index +
                                1
                            ];

                          const active =
                            isNodeDone(
                              node
                            ) ||
                            getNodeStatus(
                              next,
                              index +
                                1
                            ) ===
                              "open" ||
                            isNodeDone(
                              next
                            );

                          const middleY =
                            (from.y +
                              to.y) /
                            2;

                          return (
                            <g key={`${node.id}-road`} fill="none" strokeLinecap="round">
                              <path
                                d={`M ${from.x} ${from.y} C ${from.x} ${middleY}, ${to.x} ${middleY}, ${to.x} ${to.y}`}
                                stroke="rgba(255,255,255,.92)"
                                strokeWidth="23"
                                vectorEffect="non-scaling-stroke"
                              />
                              <path
                                d={`M ${from.x} ${from.y} C ${from.x} ${middleY}, ${to.x} ${middleY}, ${to.x} ${to.y}`}
                                stroke={active ? "#b5a2ed" : "#d0cadf"}
                                strokeWidth="13"
                                strokeDasharray={active ? undefined : "2 15"}
                                vectorEffect="non-scaling-stroke"
                              />
                              <path
                                d={`M ${from.x} ${from.y} C ${from.x} ${middleY}, ${to.x} ${middleY}, ${to.x} ${to.y}`}
                                stroke={
                                  active
                                    ? zoneForLevel(index, levels.length) === 4
                                      ? "#d9ac59"
                                      : "#6545c0"
                                    : "rgba(255,255,255,.87)"
                                }
                                strokeWidth="4"
                                strokeDasharray={active ? undefined : "2 13"}
                                vectorEffect="non-scaling-stroke"
                              />
                            </g>
                          );
                        }
                      )}
                  </svg>

                  {visibleLevelIndexes.map(
                    (
                      index
                    ) => {
                      const node =
                        levels[
                          index
                        ];

                      const status =
                        getNodeStatus(
                          node,
                          index
                        );

                      const position =
                        positionForLevel(
                          index,
                          levels.length
                        );

                      const isDone =
                        status ===
                        "done";

                      const isOpen =
                        status ===
                        "open";

                      const isMissing =
                        status ===
                        "missing";

                      const isCurrent =
                        index ===
                        focusIndex;

                      return (
                        <div
                          key={
                            node.id
                          }
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left:
                              `${position.x}%`,
                            top:
                              position.y,
                          }}
                        >
                          <button
                            type="button"
                            disabled={!isOpen}
                            aria-label={`Taso ${index + 1}: ${node.title}. ${isDone ? "Suoritettu" : isOpen ? "Avaa tehtävä" : isMissing ? "Tehtävä puuttuu" : "Lukittu"}.`}
                            onClick={() => setSelectedNodeId(node.id)}
                            className={[
                              "group relative grid h-[78px] w-[78px] place-items-center rounded-full border-[6px] text-xl font-black transition-all duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-violet-500 sm:h-[88px] sm:w-[88px]",
                              isDone
                                ? "border-white bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_8px_0_#047857,0_13px_24px_rgba(5,150,105,.22)]"
                                : isOpen
                                  ? "border-white bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-800 text-white shadow-[0_9px_0_#45218b,0_17px_35px_rgba(78,36,154,.35)] hover:-translate-y-1 hover:shadow-[0_12px_0_#45218b,0_20px_38px_rgba(78,36,154,.42)]"
                                  : isMissing
                                    ? "cursor-not-allowed border-white/80 bg-amber-400 text-slate-900 shadow-[0_7px_0_#b78a36]"
                                    : "cursor-not-allowed border-white/75 bg-gradient-to-br from-slate-300 to-slate-400 text-slate-600 shadow-[0_7px_0_#8994aa]",
                              isCurrent ? "ring-[7px] ring-amber-300/55" : "",
                            ].join(" ")}
                          >
                            <span className="pointer-events-none absolute inset-[5px] rounded-full border border-white/30" aria-hidden="true" />
                            {isCurrent && (
                              <span className="pointer-events-none absolute -inset-[14px] -z-10 rounded-full border-2 border-amber-300/55 motion-safe:animate-pulse" aria-hidden="true" />
                            )}
                            <span className="relative z-10 drop-shadow-sm">
                              {isDone ? "✓" : isMissing ? "!" : index + 1}
                            </span>
                            {node.type === "vault" && (
                              <span className="absolute -right-2 -top-2 z-10 grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-amber-400 text-sm text-amber-950 shadow">★</span>
                            )}
                            {isCurrent && (
                              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-[.12em] text-amber-200 shadow-lg">
                                Pelaa tästä
                              </span>
                            )}
                          </button>

                          <div className="pointer-events-none absolute left-1/2 top-[94px] w-[min(208px,60vw)] -translate-x-1/2 text-center sm:top-[104px] sm:w-[236px]">
                            <div
                              className={[
                                "relative overflow-hidden rounded-2xl border bg-white px-3 py-3 shadow-[0_8px_24px_rgba(35,30,90,.12)] backdrop-blur-md",
                                isCurrent
                                  ? "border-amber-300 shadow-[0_10px_28px_rgba(92,65,154,.22)]"
                                  : "border-slate-200/90",
                              ].join(
                                " "
                              )}
                            >
                              {isCurrent && (
                                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-amber-300 to-violet-500" />
                              )}
                              <div className="flex justify-center">
                                <span
                                  className={[
                                    "rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.08em]",
                                    categoryClasses(node.category),
                                  ].join(" ")}
                                >
                                  {categoryLabel(node.category)}
                                </span>
                              </div>

                              <p className="mt-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">
                                {isCurrent
                                  ? "Nykyinen taso"
                                  : `Taso ${index + 1}`}
                              </p>

                              <p lang="fi"
                                className="mt-1 hyphens-auto text-[13px] font-bold leading-[1.4] text-slate-950 [overflow-wrap:anywhere] sm:text-sm">
                                {
                                  node.title
                                }
                              </p>                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}                </div>
              </div>

              {positioningMap && (
                <div className="absolute inset-0 z-20 grid place-items-center bg-white">
                  <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
                    <p className="mt-3 text-sm font-black text-slate-500">
                      Siirrytään nykyiseen tasoon…
                    </p>
                  </div>
                </div>
              )}

              <div className="border-t border-slate-200 bg-white px-4 py-3 text-center text-xs font-bold text-slate-400">
                Matka alkaa alhaalta. Nouse taso tasolta kohti Gurun huippua. ✦
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
