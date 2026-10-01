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

import {
  getGuruPath,
  getGuruGameQuestion,
} from "@/data/gurupath";

import type {
  GuruGameId,
  GuruPathNode,
} from "@/data/gurupath";

type NodeStatus =
  | "done"
  | "open"
  | "locked"
  | "missing";

type Props = {
  gameId: GuruGameId;
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

const X_PATTERN = [
  50,
  31,
  23,
  34,
  56,
  75,
  78,
  63,
  42,
  26,
];

function sourceForNode(
  node: GuruPathNode
) {
  return node.type ===
    "vault"
    ? "vault"
    : "path-node";
}

function sourceIdForNode(
  node: GuruPathNode
) {
  return `gurupath:${node.id}:${node.questionId}`;
}

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
  gameId,
}: Props) {
  const path =
    useMemo(
      () =>
        getGuruPath(
          gameId
        ),
      [gameId]
    );

  const levels =
    path.levels;

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

  const lastAutoCenteredIndexRef =
    useRef<number | null>(
      null
    );

  useEffect(() => {
    let cancelled =
      false;

    async function loadProgress() {
      setLoadingProgress(
        true
      );

      setPositioningMap(
        true
      );

      setProgressError(
        null
      );

      try {
        const response =
          await fetch(
            `/api/gurupath/course-progress?courseId=${encodeURIComponent(
              gameId
            )}`,
            {
              cache:
                "no-store",
            }
          );

        const data =
          await response.json();

        if (
          !response.ok
        ) {
          throw new Error(
            data?.error ??
              "GuruPeli-edistymistä ei voitu hakea."
          );
        }

        if (!cancelled) {
          setCompletedEntries(
            data.completed ??
              []
          );
        }
      } catch (caught) {
        if (!cancelled) {
          setProgressError(
            caught instanceof
              Error
              ? caught.message
              : "GuruPeli-edistymistä ei voitu hakea."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingProgress(
            false
          );
        }
      }
    }

    void loadProgress();

    return () => {
      cancelled = true;
    };
  }, [gameId]);

  const completedSourceIds =
    useMemo(
      () =>
        new Set(
          completedEntries.map(
            (entry) =>
              entry.sourceId
          )
        ),
      [completedEntries]
    );

  function isNodeDone(
    node: GuruPathNode
  ) {
    return completedSourceIds.has(
      sourceIdForNode(node)
    );
  }

  /**
   * AINOA kysymyslähde:
   * data/gurupath/questions.ts
   */
  function resolveQuestion(
    node: GuruPathNode
  ) {
    return getGuruGameQuestion(
      node.questionId
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

  if (
    levels.length === 0
  ) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-black">
            Ei GuruPeli-kysymyksiä
          </h1>

          <p className="mt-3 text-slate-600">
            Lisää kysymykset tiedostoon data/gurupath/questions.ts.
          </p>
        </div>
      </section>
    );
  }

  if (
    selectedNode &&
    selectedQuestion
  ) {
    return (
      <section className="px-4 py-7 sm:px-6 sm:py-10">
        <GuruPathChallenge
          key={
            selectedNode.id
          }
          gameId={
            gameId
          }
          nodeId={
            selectedNode.id
          }
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
                GuruPeli
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
              {showReturnToCurrent && (
                <button
                  type="button"
                  onClick={() =>
                    centerLevel(
                      focusIndex,
                      true
                    )
                  }
                  className="absolute right-4 top-4 z-30 rounded-full border border-violet-200 bg-white/95 px-4 py-2.5 text-xs font-black text-violet-700 shadow-lg backdrop-blur transition hover:bg-violet-50 sm:right-5 sm:top-5 sm:text-sm"
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
                  "relative h-[600px] overflow-y-auto overscroll-contain bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_34%,#f5f3ff_68%,#ecfdf5_100%)] sm:h-[670px] lg:h-[720px]",
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
                  <div className="pointer-events-none absolute left-[-100px] top-[8%] h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />

                  <div className="pointer-events-none absolute right-[-100px] top-[42%] h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

                  <div className="pointer-events-none absolute left-[-120px] top-[75%] h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />

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
                            <path
                              key={`${node.id}-road`}
                              d={`M ${from.x} ${from.y} C ${from.x} ${middleY}, ${to.x} ${middleY}, ${to.x} ${to.y}`}
                              fill="none"
                              stroke={
                                active
                                  ? "#8b5cf6"
                                  : "#cbd5e1"
                              }
                              strokeWidth="2"
                              strokeDasharray={
                                active
                                  ? undefined
                                  : "4 5"
                              }
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                            />
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
                            disabled={
                              !isOpen
                            }
                            onClick={() =>
                              setSelectedNodeId(
                                node.id
                              )
                            }
                            className={[
                              "relative grid h-[82px] w-[82px] place-items-center rounded-full border-[6px] text-xl font-black transition sm:h-[90px] sm:w-[90px]",
                              isDone
                                ? "border-emerald-100 bg-emerald-500 text-white shadow-[0_8px_0_#047857]"
                                : isOpen
                                  ? "border-violet-100 bg-violet-600 text-white shadow-[0_9px_0_#5b21b6] hover:-translate-y-1"
                                  : isMissing
                                    ? "cursor-not-allowed border-amber-100 bg-amber-400 text-white shadow-[0_8px_0_#b45309]"
                                    : "cursor-not-allowed border-slate-100 bg-slate-300 text-slate-500 shadow-[0_8px_0_#94a3b8]",
                              isCurrent
                                ? "ring-8 ring-violet-200/60"
                                : "",
                            ].join(
                              " "
                            )}
                          >
                            {isDone
                              ? "✓"
                              : isMissing
                                ? "!"
                                : index +
                                  1}
                          </button>

                          <div className="absolute left-1/2 top-[104px] w-[170px] -translate-x-1/2 text-center sm:w-[190px]">
                            <div
                              className={[
                                "rounded-2xl border bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur",
                                isCurrent
                                  ? "border-violet-300 shadow-md shadow-violet-100"
                                  : "border-slate-200",
                              ].join(
                                " "
                              )}
                            >
                              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">
                                {isCurrent
                                  ? "Nykyinen taso"
                                  : `Taso ${index + 1}`}
                              </p>

                              <p className="mt-1 line-clamp-2 text-xs font-black leading-4 text-slate-900 sm:text-sm">
                                {
                                  node.title
                                }
                              </p>

                              <p className="mt-1 text-[11px] font-bold text-violet-600">
                                {
                                  node.points
                                }{" "}
                                p
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}

                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-black text-emerald-700 shadow-sm">
                    Aloitus
                  </div>

                  <div className="absolute left-1/2 top-7 -translate-x-1/2 rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-black text-violet-700 shadow-sm">
                    Jatka ylöspäin ↑
                  </div>
                </div>
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
                Vieritä karttaa ylös tai alas nähdäksesi muita tasoja.
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
