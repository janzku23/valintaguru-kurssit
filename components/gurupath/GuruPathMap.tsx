"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import GuruPathChallenge from "./GuruPathChallenge";
import { getCourseContent } from "@/data/courseContent";
import { getGuruPath } from "@/data/gurupath";
import type {
  GuruPathNode,
  GuruPathSection,
} from "@/data/gurupath";
import type { CourseId } from "@/data/courses";
import type { QuizQuestion } from "@/data/courseContent";

type NodeStatus = "done" | "open" | "locked" | "missing";

type Props = {
  courseId: CourseId;
  courseName: string;
};

type CompletedEntry = {
  sourceId: string;
  source: "path-node" | "vault";
};

function sourceForNode(node: GuruPathNode) {
  return node.type === "vault" ? "vault" : "path-node";
}

function sourceIdForNode(node: GuruPathNode) {
  return `gurupath:${node.id}:${node.questionId}`;
}

function clampCoordinate(value: number) {
  return Math.max(5, Math.min(95, value));
}

export default function GuruPathMap({
  courseId,
  courseName,
}: Props) {
  const content = useMemo(
    () => getCourseContent(courseId),
    [courseId]
  );

  const path = useMemo(
    () => getGuruPath(courseId),
    [courseId]
  );

  const questionById = useMemo(() => {
    return new Map<string, QuizQuestion>(
      content.quizQuestions.map((question) => [
        question.id,
        question,
      ])
    );
  }, [content.quizQuestions]);

  const [completedEntries, setCompletedEntries] = useState<
    CompletedEntry[]
  >([]);

  const [selectedSectionId, setSelectedSectionId] = useState(
    path.sections[0]?.id ?? ""
  );

  const [selectedNodeId, setSelectedNodeId] = useState<
    string | null
  >(null);

  const [loadingProgress, setLoadingProgress] = useState(true);
  const [progressError, setProgressError] = useState<string | null>(
    null
  );

  const [mobilePathsOpen, setMobilePathsOpen] = useState(false);

  const workspaceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      setLoadingProgress(true);
      setProgressError(null);

      try {
        const response = await fetch(
          `/api/gurupath/course-progress?courseId=${encodeURIComponent(
            courseId
          )}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error ?? "GuruPath-edistymistä ei voitu hakea."
          );
        }

        if (!cancelled) {
          setCompletedEntries(data.completed ?? []);
        }
      } catch (error) {
        if (!cancelled) {
          setProgressError(
            error instanceof Error
              ? error.message
              : "GuruPath-edistymistä ei voitu hakea."
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
  }, [courseId]);

  const completedSourceIds = useMemo(
    () =>
      new Set(
        completedEntries.map((entry) => entry.sourceId)
      ),
    [completedEntries]
  );

  function isNodeDone(node: GuruPathNode) {
    return completedSourceIds.has(sourceIdForNode(node));
  }

  function isSectionComplete(section: GuruPathSection) {
    return (
      section.nodes.length > 0 &&
      section.nodes.every((node) => isNodeDone(node))
    );
  }

  function isSectionUnlocked(section: GuruPathSection) {
    if (!section.requiresSections?.length) {
      return true;
    }

    return section.requiresSections.every((requiredSectionId) => {
      const required = path.sections.find(
        (item) => item.id === requiredSectionId
      );

      return required ? isSectionComplete(required) : false;
    });
  }

  const selectedSection =
    path.sections.find(
      (section) => section.id === selectedSectionId
    ) ??
    path.sections[0] ??
    null;

  const nodeById = useMemo(() => {
    if (!selectedSection) {
      return new Map<string, GuruPathNode>();
    }

    return new Map(
      selectedSection.nodes.map((node) => [node.id, node])
    );
  }, [selectedSection]);

  function getNodeStatus(
    node: GuruPathNode,
    section: GuruPathSection
  ): NodeStatus {
    if (!questionById.has(node.questionId)) {
      return "missing";
    }

    if (isNodeDone(node)) {
      return "done";
    }

    if (!isSectionUnlocked(section)) {
      return "locked";
    }

    const incoming = section.nodes.filter((candidate) =>
      candidate.next.includes(node.id)
    );

    if (incoming.length === 0) {
      return "open";
    }

    return incoming.some((previous) => isNodeDone(previous))
      ? "open"
      : "locked";
  }

  const selectedNode =
    selectedSection && selectedNodeId
      ? selectedSection.nodes.find(
          (node) => node.id === selectedNodeId
        ) ?? null
      : null;

  const selectedQuestion = selectedNode
    ? questionById.get(selectedNode.questionId) ?? null
    : null;

  const courseTotalNodes = path.sections.reduce(
    (sum, section) => sum + section.nodes.length,
    0
  );

  const courseDoneNodes = path.sections.reduce(
    (sum, section) =>
      sum +
      section.nodes.filter((node) => isNodeDone(node)).length,
    0
  );

  const courseProgress =
    courseTotalNodes > 0
      ? Math.round(
          (courseDoneNodes / courseTotalNodes) * 100
        )
      : 0;

  function handleCompleted(
    sourceId: string,
    source: "path-node" | "vault"
  ) {
    setCompletedEntries((current) => {
      if (
        current.some(
          (entry) => entry.sourceId === sourceId
        )
      ) {
        return current;
      }

      return [...current, { sourceId, source }];
    });
  }

  function openNode(nodeId: string) {
    setSelectedNodeId(nodeId);

    window.setTimeout(() => {
      workspaceRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  if (path.sections.length === 0) {
    return (
      <section className="mx-auto w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-black">
          {courseName} · GuruPath
        </h1>
        <p className="mt-4 text-slate-600">
          Tälle kurssille ei ole vielä määritelty GuruPath-polkuja.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl space-y-5">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">
                GuruPath
              </p>

              <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                {path.title || courseName}
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                {path.description}
              </p>
            </div>

            <a
              href="/gurupath/ranking"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-black transition hover:border-violet-300 hover:text-violet-700"
            >
              Ranking →
            </a>
          </div>

          <div className="mt-6">
            <div className="flex justify-between gap-4 text-sm font-bold text-slate-600">
              <span>
                {courseDoneNodes} / {courseTotalNodes} solmua
              </span>
              <span>{courseProgress} %</span>
            </div>

            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-violet-600 transition-[width]"
                style={{ width: `${courseProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE: compact path picker */}
        <div className="border-b border-slate-200 p-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobilePathsOpen((current) => !current)}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left"
          >
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Valittu polku
              </span>
              <span className="mt-1 block font-black text-slate-950">
                {selectedSection?.title}
              </span>
            </span>
            <span className="text-xl text-slate-400">
              {mobilePathsOpen ? "⌃" : "⌄"}
            </span>
          </button>

          {mobilePathsOpen && (
            <div className="mt-3 grid gap-2">
              {path.sections.map((section, index) => {
                const unlocked = isSectionUnlocked(section);
                const complete = isSectionComplete(section);
                const selected =
                  section.id === selectedSection?.id;

                const done = section.nodes.filter((node) =>
                  isNodeDone(node)
                ).length;

                return (
                  <button
                    key={section.id}
                    type="button"
                    disabled={!unlocked}
                    onClick={() => {
                      setSelectedSectionId(section.id);
                      setSelectedNodeId(null);
                      setMobilePathsOpen(false);
                    }}
                    className={[
                      "rounded-2xl border p-4 text-left transition",
                      selected
                        ? "border-violet-300 bg-violet-50"
                        : unlocked
                          ? "border-slate-200 bg-white"
                          : "cursor-not-allowed border-slate-100 bg-slate-50 opacity-55",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-black text-slate-500">
                        {complete ? "✓ VALMIS" : `POLKU ${index + 1}`}
                      </span>
                      {!unlocked && <span>🔒</span>}
                    </div>

                    <p className="mt-1 font-black text-slate-950">
                      {section.title}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-slate-500">
                      {done} / {section.nodes.length} solmua
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* DESKTOP: smaller left sidebar */}
          <aside className="hidden border-r border-slate-200 bg-slate-50/70 p-3 lg:block">
            <p className="px-2 pt-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
              Polut
            </p>

            <div className="mt-2 grid gap-2">
              {path.sections.map((section, index) => {
                const unlocked = isSectionUnlocked(section);
                const complete = isSectionComplete(section);
                const selected =
                  section.id === selectedSection?.id;

                const done = section.nodes.filter((node) =>
                  isNodeDone(node)
                ).length;

                return (
                  <button
                    key={section.id}
                    type="button"
                    disabled={!unlocked}
                    onClick={() => {
                      setSelectedSectionId(section.id);
                      setSelectedNodeId(null);
                    }}
                    className={[
                      "rounded-xl border px-3 py-3 text-left transition",
                      selected
                        ? "border-violet-300 bg-white shadow-sm"
                        : unlocked
                          ? "border-transparent bg-transparent hover:border-slate-200 hover:bg-white"
                          : "cursor-not-allowed border-transparent opacity-45",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wide text-slate-500">
                        {complete ? "✓ valmis" : `Polku ${index + 1}`}
                      </span>
                      {!unlocked && <span className="text-xs">🔒</span>}
                    </div>

                    <p className="mt-1 text-sm font-black leading-5 text-slate-950">
                      {section.title}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-violet-600"
                          style={{
                            width: `${
                              section.nodes.length > 0
                                ? Math.round((done / section.nodes.length) * 100)
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">
                        {done}/{section.nodes.length}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* MAIN WORKSPACE */}
          <div
            ref={workspaceRef}
            className="min-w-0 scroll-mt-24 p-4 sm:p-6"
          >
            {selectedSection && (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black">
                      {selectedSection.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                      {selectedSection.description}
                    </p>
                  </div>

                  {selectedNode && (
                    <button
                      type="button"
                      onClick={() => setSelectedNodeId(null)}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-600 transition hover:border-violet-300 hover:text-violet-700"
                    >
                      ← Takaisin karttaan
                    </button>
                  )}
                </div>

                {progressError && (
                  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {progressError}
                  </p>
                )}

                {selectedNode && selectedQuestion ? (
                  <div className="mt-5">
                    <div className="mb-4 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                        Tehtävä avattu
                      </p>
                      <p className="mt-1 text-sm font-semibold text-violet-950">
                        Olet nyt polun tehtävässä: {selectedNode.title}
                      </p>
                    </div>

                    <GuruPathChallenge
                      key={selectedNode.id}
                      courseId={courseId}
                      nodeId={selectedNode.id}
                      question={selectedQuestion}
                      source={sourceForNode(selectedNode)}
                      xpReward={
                        selectedNode.xp ??
                        (selectedNode.type === "vault" ? 100 : 35)
                      }
                      scoreReward={
                        selectedNode.score ??
                        (selectedNode.type === "vault" ? 100 : 30)
                      }
                      onCompleted={(sourceId, source) =>
                        handleCompleted(sourceId, source)
                      }
                      onClose={() => setSelectedNodeId(null)}
                    />
                  </div>
                ) : loadingProgress ? (
                  <div
                    className="mt-5 grid place-items-center rounded-[1.75rem] bg-slate-950"
                    style={{ minHeight: 460 }}
                  >
                    <p className="font-bold text-slate-300">
                      Ladataan polkua…
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                      <span className="rounded-full bg-violet-50 px-3 py-1.5 text-violet-700">
                        Paina violettia solmua aloittaaksesi
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1.5">
                        Lukitut solmut avautuvat etenemällä
                      </span>
                    </div>

                    <div
                      className="relative mt-5 overflow-hidden rounded-[1.75rem] bg-slate-950"
                      style={{ minHeight: 500 }}
                    >
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="guru-path-v3-line"
                            x1="0"
                            x2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(100 116 139)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgb(139 92 246)"
                            />
                          </linearGradient>
                        </defs>

                        {selectedSection.nodes.flatMap((node) =>
                          node.next.map((nextId) => {
                            const next = nodeById.get(nextId);

                            if (!next) return null;

                            const fromDone = isNodeDone(node);
                            const toDone = isNodeDone(next);
                            const toOpen =
                              getNodeStatus(
                                next,
                                selectedSection
                              ) === "open";

                            const active =
                              fromDone || toDone || toOpen;

                            return (
                              <line
                                key={`${node.id}-${next.id}`}
                                x1={clampCoordinate(node.x)}
                                y1={clampCoordinate(node.y)}
                                x2={clampCoordinate(next.x)}
                                y2={clampCoordinate(next.y)}
                                stroke={
                                  active
                                    ? "url(#guru-path-v3-line)"
                                    : "rgb(51 65 85)"
                                }
                                strokeWidth={active ? 1.2 : 0.75}
                                strokeDasharray={
                                  active ? undefined : "2 2"
                                }
                                vectorEffect="non-scaling-stroke"
                              />
                            );
                          })
                        )}
                      </svg>

                      {selectedSection.nodes.map(
                        (node, index) => {
                          const status = getNodeStatus(
                            node,
                            selectedSection
                          );

                          const isDone = status === "done";
                          const isOpen = status === "open";
                          const isMissing = status === "missing";

                          return (
                            <button
                              key={node.id}
                              type="button"
                              disabled={!isOpen}
                              onClick={() => openNode(node.id)}
                              title={
                                isMissing
                                  ? `Kysymystä ${node.questionId} ei löydy courseContentista.`
                                  : undefined
                              }
                              className={[
                                "absolute w-[86px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-2 py-2 text-center transition sm:w-[112px] sm:px-3 sm:py-3",
                                isDone
                                  ? "border-emerald-400/70 bg-emerald-950/95 text-emerald-100"
                                  : isOpen
                                    ? "border-violet-300 bg-violet-950/95 text-white shadow-lg hover:border-violet-100"
                                    : isMissing
                                      ? "cursor-not-allowed border-amber-600/60 bg-amber-950/80 text-amber-200"
                                      : "cursor-not-allowed border-slate-700 bg-slate-900/95 text-slate-500",
                              ].join(" ")}
                              style={{
                                left: `${clampCoordinate(node.x)}%`,
                                top: `${clampCoordinate(node.y)}%`,
                              }}
                            >
                              <span className="mx-auto grid h-9 w-9 place-items-center rounded-full border border-current/40 text-xs font-black">
                                {isDone
                                  ? "✓"
                                  : isMissing
                                    ? "!"
                                    : node.type === "vault"
                                      ? "V"
                                      : index + 1}
                              </span>

                              <span className="mt-1.5 block text-[10px] font-black leading-tight sm:text-xs">
                                {node.title}
                              </span>
                            </button>
                          );
                        }
                      )}

                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[11px] font-bold text-slate-300">
                        <span className="rounded-full bg-slate-900/85 px-3 py-1.5">
                          ✓ Suoritettu
                        </span>
                        <span className="rounded-full bg-violet-950/85 px-3 py-1.5">
                          Avoin
                        </span>
                        <span className="rounded-full bg-slate-900/85 px-3 py-1.5 text-slate-500">
                          Lukittu
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
