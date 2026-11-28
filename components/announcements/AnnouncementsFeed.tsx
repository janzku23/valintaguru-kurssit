"use client";

import { useEffect, useState } from "react";
import type { AnnouncementPage } from "@/lib/announcements/model";
import AnnouncementsCard, { AnnouncementItem } from "./AnnouncementsCard";

type LoadResult = {
  key: string;
  page: AnnouncementPage | null;
  error: string | null;
};

export default function AnnouncementsFeed({
  allowDelete = false,
  showAdminLink = true,
}: {
  allowDelete?: boolean;
  showAdminLink?: boolean;
}) {
  const [cursors, setCursors] = useState<(string | null)[]>([null]);
  const [revision, setRevision] = useState(0);
  const [result, setResult] = useState<LoadResult | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const cursor = cursors[cursors.length - 1];
  const requestKey = JSON.stringify([cursor, revision]);
  const loading = result?.key !== requestKey;
  const page = result?.page;
  const busy = loading || deleting !== null;

  useEffect(() => {
    const controller = new AbortController();
    const params = cursor ? `?${new URLSearchParams({ cursor })}` : "";
    async function load() {
      try {
        const response = await fetch(`/api/tiedotteet${params}`, {
          cache: "no-store", credentials: "same-origin", signal: controller.signal,
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Tiedotteita ei saatu ladattua.");
        if (!controller.signal.aborted) setResult({ key: requestKey, page: data, error: null });
      } catch (error) {
        if (!controller.signal.aborted) {
          setResult({ key: requestKey, page: null, error: error instanceof Error ? error.message : "Tiedotteita ei saatu ladattua." });
        }
      }
    }
    void load();
    return () => controller.abort();
  }, [cursor, requestKey]);

  async function remove(id: string) {
    setDeleting(id);
    setDeleteError(null);
    try {
      const response = await fetch("/api/admin/tiedotteet", {
        method: "DELETE", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Poistaminen epäonnistui.");
      setConfirmDelete(null);
      setRevision(value => value + 1);
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : "Poistaminen epäonnistui.");
    } finally {
      setDeleting(null);
    }
  }

  return (
    <AnnouncementsCard
      showAdminLink={showAdminLink && page?.canManage}
      footer={<>
        {cursors.length > 1 ? (
          <button type="button" disabled={busy} onClick={() => setCursors(values => values.slice(0, -1))} className="inline-flex min-h-8 items-center gap-1.5 text-[11px] font-bold text-[#3f51e7] transition hover:text-[#2638c7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7] disabled:opacity-50"><span aria-hidden="true">←</span> Uudemmat tiedotteet</button>
        ) : <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-500"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#8893d7]" />Uusimmat tiedotteet</span>}
        {page?.nextCursor && !result?.error && (
          <button type="button" disabled={busy} onClick={() => setCursors(values => [...values, page.nextCursor])} className="group inline-flex min-h-8 items-center gap-2 rounded-full border border-[#d8dcf0] bg-white px-3 py-1.5 text-[11px] font-bold text-[#3f51e7] shadow-sm transition hover:border-[#3f51e7] hover:bg-[#f1f3ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7] disabled:opacity-50">Vanhemmat tiedotteet <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none">→</span></button>
        )}
        {cursors.length > 2 && (
          <button type="button" disabled={busy} onClick={() => setCursors([null])} className="min-h-7 w-full text-left text-[11px] font-bold text-slate-500 hover:text-[#3f51e7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f51e7] disabled:opacity-50">Palaa uusimpiin</button>
        )}
      </>}
    >
      <div aria-busy={loading} aria-live="polite" className="px-5 sm:px-7">
        {loading ? (
          <div role="status" className="space-y-5 py-7">
            <span className="sr-only">Ladataan tiedotteita…</span>
            {[0, 1, 2].map(index => <div key={index} aria-hidden="true" className="animate-pulse space-y-3 rounded-2xl bg-[#f6f7fc] p-4 motion-reduce:animate-none"><div className="h-2 w-24 rounded-full bg-[#e2e6f6]" /><div className="h-3 w-3/4 rounded-full bg-[#e2e6f6]" /><div className="h-2 w-full rounded-full bg-[#eceef8]" /></div>)}
          </div>
        ) : result?.error ? (
          <div className="py-8">
            <p role="alert" className="text-sm leading-6 text-red-700">{result.error}</p>
            <button type="button" onClick={() => setRevision(value => value + 1)} className="mt-3 min-h-11 font-bold text-[#3f51e7]">Yritä uudelleen →</button>
          </div>
        ) : !page?.announcements.length ? (
          <div className="py-10 text-center">
            <div aria-hidden="true" className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e1e5f9] bg-[#f3f5ff] text-[#3f51e7]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7"><path d="M6 4.5h12a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5Z" /><path d="M8 9h8M8 12h8M8 15h5" strokeLinecap="round" /></svg>
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#e6b653]" />
            </div>
            <p className="font-serif text-xl font-semibold tracking-tight text-[#202641]">{cursor ? "Olet ajan tasalla." : "Kuulumisia on tulossa."}</p>
            <p className="mx-auto mt-2 max-w-64 text-sm leading-6 text-slate-500">{cursor ? "Kaikki tiedotteet on nyt selattu. Voit palata uudempiin tiedotteisiin." : "Täältä löydät pian kurssien uutiset ja muut tärkeät ilmoitukset."}</p>
          </div>
        ) : (
          <ol aria-label={cursor ? "Vanhemmat tiedotteet" : "Uusimmat tiedotteet"} className="my-5 py-1 pl-1.5 pr-1">
            {page.announcements.map((announcement, index) => (
              <AnnouncementItem key={announcement.id} announcement={announcement} latest={!cursor && index === 0}>
                {allowDelete && page.canManage && (
                  <div className="mt-2 text-xs">
                    {confirmDelete === announcement.id ? (
                      <div className="flex flex-wrap items-center gap-3">
                        <span>Poistetaanko tiedote?</span>
                        <button type="button" disabled={busy} onClick={() => void remove(announcement.id)} className="min-h-10 font-bold text-red-700 disabled:opacity-50">{deleting === announcement.id ? "Poistetaan…" : "Poista tiedote"}</button>
                        <button type="button" disabled={busy} onClick={() => setConfirmDelete(null)} className="min-h-10 font-bold text-slate-600">Peruuta</button>
                      </div>
                    ) : (
                      <button type="button" disabled={busy} aria-label={`Poista tiedote: ${announcement.title}`} onClick={() => setConfirmDelete(announcement.id)} className="min-h-10 font-bold text-red-700 disabled:opacity-50">Poista</button>
                    )}
                  </div>
                )}
              </AnnouncementItem>
            ))}
          </ol>
        )}
        {deleteError && <p role="alert" className="pb-4 text-sm text-red-700">{deleteError}</p>}
      </div>
    </AnnouncementsCard>
  );
}
