"use client";

import { useState, type FormEvent } from "react";
import { ANNOUNCEMENT_CONTENT_LIMIT, ANNOUNCEMENT_TITLE_LIMIT } from "@/lib/announcements/model";
import AnnouncementsFeed from "./AnnouncementsFeed";

export default function AdminAnnouncements() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [published, setPublished] = useState(false);
  const [revision, setRevision] = useState(0);

  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    setSaving(true);
    setError(null);
    setPublished(false);
    try {
      const response = await fetch("/api/admin/tiedotteet", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Julkaiseminen epäonnistui.");
      setTitle("");
      setContent("");
      setPublished(true);
      setRevision(value => value + 1);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Julkaiseminen epäonnistui.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-8 grid items-start gap-8 xl:grid-cols-2">
      <form onSubmit={publish} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <fieldset disabled={saving} className="space-y-5 disabled:opacity-70">
          <legend className="mb-5 text-xl font-extrabold">Uusi tiedote</legend>
          <label className="block text-sm font-bold text-slate-700">
            Otsikko
            <input required name="title" maxLength={ANNOUNCEMENT_TITLE_LIMIT} value={title} onChange={event => setTitle(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-[#3f51e7]" />
          </label>
          <label className="block text-sm font-bold text-slate-700">
            Tiedotteen teksti
            <textarea required name="content" rows={6} maxLength={ANNOUNCEMENT_CONTENT_LIMIT} value={content} onChange={event => setContent(event.target.value)} aria-describedby="announcement-content-hint" className="mt-2 block w-full resize-y rounded-xl border border-slate-300 px-4 py-3 font-normal leading-6 outline-[#3f51e7]" />
          </label>
          <p id="announcement-content-hint" className="text-xs text-slate-500">{content.length}/{ANNOUNCEMENT_CONTENT_LIMIT} merkkiä. Tiedote näkyy kaikille kirjautuneille heti julkaisun jälkeen.</p>
          <button type="submit" className="min-h-12 rounded-full bg-[#3f51e7] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3142d6]">{saving ? "Julkaistaan…" : "Julkaise tiedote"}</button>
        </fieldset>
        {error && <p role="alert" className="mt-5 text-sm leading-6 text-red-700">{error}</p>}
        {published && <p role="status" className="mt-5 text-sm font-semibold leading-6 text-emerald-700">Tiedote julkaistu. Se näkyy nyt kirjautuneiden etusivulla.</p>}
      </form>
      <AnnouncementsFeed key={revision} allowDelete showAdminLink={false} />
    </div>
  );
}
