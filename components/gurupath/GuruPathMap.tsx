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

const ROW_HEIGHT = 250;
const TOP_PADDING = 170;
const BOTTOM_PADDING = 180;
const RENDER_BUFFER_PX = 750;

// Reitti mutkittelee, mutta kortit pysyvät myös kapeilla puhelimilla ruudulla.
const X_PATTERN = [50, 38, 32, 40, 57, 67, 69, 60, 43, 34];

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

/** Maisemien piirrokset: kirjat, puutarha, kirjasto, akatemia ja huippu. */
function JourneyLandmark({ zone }: { zone: number }) {
  if (zone === 0) {
    return (
      <svg viewBox="0 0 430 340" fill="none" aria-hidden="true" className="h-full w-full">
        <circle cx="270" cy="159" r="140" fill="#ffffff" fillOpacity=".35" />
        <circle cx="275" cy="155" r="104" stroke="#66c7bc" strokeWidth="2" strokeDasharray="5 15" opacity=".55" />
        <path d="M100 252q90-35 190 0t142 0" stroke="#80c7c0" strokeWidth="4" opacity=".6" />
        <rect x="131" y="194" width="214" height="31" rx="10" fill="#416eae" transform="rotate(-10 131 194)" />
        <rect x="116" y="225" width="227" height="30" rx="10" fill="#9a83e7" transform="rotate(3 116 225)" />
        <rect x="124" y="257" width="213" height="30" rx="10" fill="#48a9a0" transform="rotate(-3 124 257)" />
        <path d="M161 206l145-25M153 239l154 8M158 269l138-7" stroke="white" strokeWidth="4" opacity=".7" />
        <path d="m101 76 7 20 20 7-20 7-7 20-7-20-20-7 20-7 7-20ZM353 62l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z" fill="#8d82ce" />
        <circle cx="175" cy="114" r="6" fill="#69c4bb" /><circle cx="337" cy="131" r="5" fill="#b49bec" />
      </svg>
    );
  }
  if (zone === 1) {
    return (
      <svg viewBox="0 0 430 340" fill="none" aria-hidden="true" className="h-full w-full">
        <circle cx="215" cy="150" r="138" stroke="#97a5eb" strokeWidth="2" strokeDasharray="6 12" opacity=".5" />
        <path d="M44 294q80-66 160-16t184-18" stroke="#6faba3" strokeWidth="6" opacity=".5" />
        <path d="M116 259V142M321 276V132" stroke="#65877e" strokeWidth="13" strokeLinecap="round" />
        <circle cx="116" cy="128" r="69" fill="#87cbb2" /><circle cx="82" cy="157" r="49" fill="#aedfd0" /><circle cx="151" cy="151" r="45" fill="#62bdab" />
        <circle cx="321" cy="121" r="79" fill="#b6b7ee" /><circle cx="287" cy="149" r="45" fill="#d6d1fa" /><circle cx="360" cy="148" r="47" fill="#938bdd" />
        <path d="M199 257h66M211 257l4-83 17-31 17 31 4 83" stroke="#7284c2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m230 56 8 22 22 8-22 8-8 22-8-22-22-8 22-8 8-22Z" fill="#ffffff" opacity=".8" />
        <circle cx="64" cy="54" r="6" fill="#90a5e9" /><circle cx="383" cy="66" r="7" fill="#97d5c6" />
      </svg>
    );
  }
  if (zone === 2) {
    return (
      <svg viewBox="0 0 430 340" fill="none" aria-hidden="true" className="h-full w-full">
        <circle cx="238" cy="142" r="145" fill="#ffffff" fillOpacity=".27" />
        <path d="M91 262V115l126-73 126 73v147" stroke="#776cc9" strokeWidth="9" strokeLinejoin="round" />
        <path d="M97 115h241M76 265h285M111 279h231" stroke="#8b7bdc" strokeWidth="12" strokeLinecap="round" />
        <rect x="119" y="139" width="48" height="105" rx="5" fill="#b0a1ec" />
        <rect x="188" y="122" width="48" height="122" rx="5" fill="#7167c3" />
        <rect x="257" y="139" width="48" height="105" rx="5" fill="#a7b2ee" />
        <path d="M130 164h26m-26 29h26m-26 28h26M199 150h26m-26 28h26m-26 28h26m-26 25h26M269 164h25m-25 29h25m-25 28h25" stroke="white" strokeWidth="5" strokeLinecap="round" opacity=".7" />
        <circle cx="215" cy="87" r="14" fill="#e4d9ff" /><path d="m215 73 6 14-6 14-6-14Z" fill="#9384dd" />
        <path d="m63 61 6 18 18 6-18 6-6 18-6-18-18-6 18-6 6-18Z" fill="#a6aff0" />
      </svg>
    );
  }
  if (zone === 3) {
    return (
      <svg viewBox="0 0 430 340" fill="none" aria-hidden="true" className="h-full w-full">
        <circle cx="215" cy="141" r="139" stroke="#c7a8f6" strokeWidth="2" strokeDasharray="4 10" opacity=".7" />
        <path d="M73 139 216 64l141 75H73Z" fill="#bd99ed" fillOpacity=".83" />
        <path d="M86 149h260M77 269h275M67 291h294" stroke="#e9d2ff" strokeWidth="13" strokeLinecap="round" />
        {[117, 184, 251, 318].map((x) => (
          <g key={x}>
            <rect x={x - 19} y="163" width="38" height="98" rx="4" fill="#e5d0fa" />
            <path d={`M${x - 24} 160h48M${x - 24} 264h48`} stroke="#bca0e6" strokeWidth="8" strokeLinecap="round" />
          </g>
        ))}
        <path d="M215 67V34m0 0-15 15m15-15 15 15" stroke="#f7e5ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m80 62 7 18 18 7-18 7-7 18-7-18-18-7 18-7 7-18ZM348 68l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z" fill="#f3d8ff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 430 340" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="220" cy="164" r="153" stroke="#e9c987" strokeWidth="2" strokeDasharray="5 11" opacity=".65" />
      <circle cx="220" cy="164" r="120" stroke="#f4dba0" strokeWidth="2" opacity=".35" />
      <path d="M94 248q-16-98 62-157m191 157q17-100-60-157" stroke="#dbb86b" strokeWidth="7" strokeLinecap="round" />
      {[105,130,155,180,205].map((y, i) => (
        <g key={y}>
          <ellipse cx={101 + (i % 2 ? -2 : 12)} cy={y} rx="10" ry="23" fill="#f3d58c" transform={`rotate(${-35 + i * 8} ${101 + (i % 2 ? -2 : 12)} ${y})`} />
          <ellipse cx={340 - (i % 2 ? -2 : 12)} cy={y} rx="10" ry="23" fill="#f3d58c" transform={`rotate(${35 - i * 8} ${340 - (i % 2 ? -2 : 12)} ${y})`} />
        </g>
      ))}
      <path d="M166 116h108l-17 92a38 38 0 0 1-74 0l-17-92Z" fill="#e7bb64" />
      <path d="M172 134h-30q0 54 38 50m87-50h30q0 54-38 50" stroke="#f7d995" strokeWidth="13" strokeLinecap="round" />
      <path d="M220 242v33m-45 10h90m-71-12h52" stroke="#e7bb64" strokeWidth="14" strokeLinecap="round" />
      <path d="m220 137 12 25 27 4-20 19 5 27-24-13-24 13 5-27-20-19 27-4 12-25Z" fill="#fff3c4" />
      <path d="m66 42 7 19 19 7-19 7-7 19-7-19-19-7 19-7 7-19ZM360 34l6 15 15 6-15 6-6 15-6-15-15-6 15-6 6-15Z" fill="#fbe6ab" />
    </svg>
  );
}

function ZoneAccentIcons({ zone }: { zone: number }) {
  if (zone === 0) {
    return (
      <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" className="h-full w-full">
        <rect x="34" y="96" width="72" height="12" rx="6" fill="#4f67b1" />
        <rect x="40" y="80" width="64" height="12" rx="6" fill="#257f80" />
        <rect x="50" y="64" width="54" height="12" rx="6" fill="#8b5cf6" />
        <path d="M150 56v55M132 111h36" stroke="#257f80" strokeWidth="7" strokeLinecap="round" />
        <path d="m168 31 7 17 17 7-17 7-7 17-7-17-17-7 17-7 7-17Z" fill="#c6b7ff" />
      </svg>
    );
  }
  if (zone === 1) {
    return (
      <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" className="h-full w-full">
        <circle cx="62" cy="88" r="27" fill="#7fd4c4" />
        <circle cx="50" cy="97" r="20" fill="#b8eee3" />
        <circle cx="76" cy="98" r="18" fill="#56b7a8" />
        <path d="M62 120V58" stroke="#5d8b7d" strokeWidth="7" strokeLinecap="round" />
        <path d="M135 122h52M143 122l5-45 13-17 13 17 5 45" stroke="#6f6bc8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (zone === 2) {
    return (
      <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" className="h-full w-full">
        <path d="M42 120V56l68-34 68 34v64" stroke="#6b58bb" strokeWidth="7" strokeLinejoin="round" />
        <path d="M48 56h124M37 122h145" stroke="#8b7bdc" strokeWidth="9" strokeLinecap="round" />
        <rect x="66" y="74" width="22" height="42" rx="3" fill="#b8a8f3" />
        <rect x="100" y="67" width="22" height="49" rx="3" fill="#6b58bb" />
        <rect x="134" y="74" width="22" height="42" rx="3" fill="#9fb0f4" />
      </svg>
    );
  }
  if (zone === 3) {
    return (
      <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" className="h-full w-full">
        <path d="M34 57 110 21l76 36H34Z" fill="#c8a7f3" />
        <path d="M44 65h132M38 126h144" stroke="#eedafe" strokeWidth="10" strokeLinecap="round" />
        {[62, 97, 132, 167].map((x) => (
          <g key={x}>
            <rect x={x - 9} y="73" width="18" height="43" rx="3" fill="#f0e3ff" />
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M68 113h84l-13-48a32 32 0 0 0-58 0l-13 48Z" fill="#e8bf6d" />
      <path d="M84 75H58q0 32 28 29m50-29h26q0 32-28 29" stroke="#ffe5aa" strokeWidth="9" strokeLinecap="round" />
      <path d="m110 69 9 16 18 3-13 12 3 18-17-9-17 9 3-18-13-12 18-3 9-16Z" fill="#fff4c5" />
      <path d="M110 113v21m-28 7h56" stroke="#e8bf6d" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

function JourneyBackdrop({ height }: { height: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #ebfaf7 0%, #e4f3f6 18%, #dee8ff 38%, #e0d7fb 58%, #6b4ea6 79%, #281947 100%)",
        }}
      />
      {JOURNEY_ZONES.map((zone, i) => {
        const top = (JOURNEY_ZONES.length - i - 1) * height / JOURNEY_ZONES.length;
        const sectionHeight = height / JOURNEY_ZONES.length;
        const dark = i >= 3;
        return (
          <div
            key={zone.number}
            className="absolute inset-x-0 overflow-hidden"
            style={{ top, height: sectionHeight }}
          >
            <div className="absolute inset-0" style={{ background: zone.glow }} />
            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

            <div className={`absolute ${i % 2 ? "left-0 sm:left-6" : "right-0 sm:right-6"} top-[17%] h-[250px] w-[min(72%,420px)] opacity-[0.88]`}>
              <div className={`absolute inset-0 rounded-[2.2rem] ${dark ? "bg-white/6" : "bg-white/18"} shadow-[0_24px_80px_rgba(44,22,94,.14)] backdrop-blur-[2px]`} />
              <div className="absolute inset-0">
                <JourneyLandmark zone={i} />
              </div>
            </div>

            <div className={`absolute ${i % 2 ? "right-3 sm:right-8" : "left-3 sm:left-8"} top-[18%] h-[110px] w-[150px] opacity-90 sm:h-[130px] sm:w-[180px]`}>
              <div className={`absolute inset-0 rounded-[1.6rem] ${dark ? "bg-slate-950/18" : "bg-white/32"} backdrop-blur-[2px]`} />
              <ZoneAccentIcons zone={i} />
            </div>

            <div className={`absolute ${i % 2 ? "right-[14px] sm:right-[26px]" : "left-[14px] sm:left-[26px]"} bottom-[18px] rounded-full border px-3 py-1.5 text-[10px] font-black tracking-[.14em] shadow-sm ${dark ? "border-white/15 bg-slate-950/35 text-white/88" : "border-white/45 bg-white/72 text-slate-700"}`}>
              {zone.title}
            </div>

            <svg viewBox="0 0 1000 180" preserveAspectRatio="none" className="absolute bottom-0 h-[130px] w-full" aria-hidden="true">
              <path d="M0 114Q190 34 378 104T714 98T1000 86V180H0Z" fill={dark ? "#fff1c2" : "#ffffff"} fillOpacity={dark ? ".06" : ".16"} />
              <path d="M0 138Q146 106 312 132T672 120T1000 136V180H0Z" fill={dark ? "#d9d1ff" : "#7da7df"} fillOpacity={dark ? ".08" : ".11"} />
            </svg>
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
                <span>{JOURNEY_ZONES[visibleZoneIndex].title}</span>
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
                  <JourneyBackdrop height={canvasHeight} />

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

                          <div className="pointer-events-none absolute left-1/2 top-[98px] w-[158px] -translate-x-1/2 text-center sm:top-[108px] sm:w-[188px]">
                            <div
                              className={[
                                "relative overflow-hidden rounded-2xl border bg-white/95 px-3 py-3 shadow-[0_8px_24px_rgba(35,30,90,.12)] backdrop-blur-md",
                                isCurrent
                                  ? "border-amber-300 shadow-[0_10px_28px_rgba(92,65,154,.22)]"
                                  : "border-white/85",
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

                              <p className="mt-1 line-clamp-2 text-xs font-black leading-4 text-slate-900 sm:text-sm">
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
