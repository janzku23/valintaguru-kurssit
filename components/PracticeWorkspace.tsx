"use client";

import { useId, type ReactNode } from "react";

type Props = {
  navigation: ReactNode;
  navigationOpen: boolean;
  onNavigationToggle: () => void;
  children: ReactNode;
};

export default function PracticeWorkspace({
  navigation,
  navigationOpen,
  onNavigationToggle,
  children,
}: Props) {
  const navigationId = useId();

  return (
    <div className="space-y-4">
      <div className={navigationOpen ? "flex justify-start" : "mx-auto flex w-full max-w-5xl justify-start"}>
        <button
          type="button"
          aria-expanded={navigationOpen}
          aria-controls={navigationId}
          onClick={onNavigationToggle}
          className="inline-flex min-h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 5h12M4 10h12M4 15h12" />
          </svg>
          Sisällysluettelo
          <span className="text-xs font-medium text-slate-500">
            {navigationOpen ? "Piilota" : "Näytä"}
          </span>
        </button>
      </div>

      <div className={navigationOpen ? "grid items-start gap-6 lg:grid-cols-[340px_minmax(0,1fr)]" : "mx-auto w-full max-w-5xl"}>
        <aside
          id={navigationId}
          hidden={!navigationOpen}
          aria-label="Kurssin sisällysluettelo"
          className="min-w-0 max-h-[60dvh] overflow-y-auto overscroll-contain rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:max-h-[75dvh]"
        >
          {navigation}
        </aside>
        {children}
      </div>
    </div>
  );
}
