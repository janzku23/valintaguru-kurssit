"use client";

import { useMemo, useState } from "react";
type AdminUserOverview = {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  lastSignInAt: string | null;
  courseRights: Array<{ courseId: string; title: string }>;
  attempts: number;
  correct: number;
  accuracy: number;
  latestActivityAt: string | null;
};

function formatDate(value: string | null) {
  if (!value) return "Ei vielä";
  return new Intl.DateTimeFormat("fi-FI", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}

export default function AdminUsersTable({ users }: { users: AdminUserOverview[] }) {
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("all");

  const courseOptions = useMemo(() => {
    const map = new Map<string, string>();
    users.forEach((user) => user.courseRights.forEach((right) => map.set(right.courseId, right.title)));
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1], "fi"));
  }, [users]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((user) => {
      const text = `${user.email} ${user.name ?? ""}`.toLowerCase();
      const matchesQuery = !q || text.includes(q);
      const matchesCourse = course === "all" || user.courseRights.some((right) => right.courseId === course);
      return matchesQuery && matchesCourse;
    });
  }, [course, query, users]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_280px_auto]">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Hae nimellä tai sähköpostilla…" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <select value={course} onChange={(e) => setCourse(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500">
          <option value="all">Kaikki kurssit</option>
          {courseOptions.map(([id, title]) => <option key={id} value={id}>{title}</option>)}
        </select>
        <div className="flex items-center rounded-2xl bg-slate-100 px-4 py-3 text-sm font-black">{filtered.length} käyttäjää</div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="hidden grid-cols-[1.5fr_1.3fr_120px_120px_170px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-black uppercase tracking-wide text-slate-500 lg:grid">
          <span>Käyttäjä</span><span>Kurssit</span><span>Vastauksia</span><span>Oikein</span><span>Viimeisin aktiivisuus</span>
        </div>
        <div className="divide-y divide-slate-100">
          {filtered.map((user) => (
            <a key={user.id} href={`/admin/edistyminen/${user.id}`} className="grid gap-3 px-5 py-5 transition hover:bg-slate-50 lg:grid-cols-[1.5fr_1.3fr_120px_120px_170px] lg:items-center">
              <div className="min-w-0">
                <p className="truncate font-black">{user.name || user.email}</p>
                <p className="truncate text-sm text-slate-500">{user.email}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {user.courseRights.length === 0 ? <span className="text-sm text-slate-400">Ei oikeuksia</span> : user.courseRights.slice(0, 3).map((right) => <span key={right.courseId} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">{right.title}</span>)}
                {user.courseRights.length > 3 && <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold">+{user.courseRights.length - 3}</span>}
              </div>
              <p className="text-sm"><span className="lg:hidden font-bold">Vastauksia: </span>{user.attempts}</p>
              <p className="text-sm font-black"><span className="lg:hidden font-bold">Oikein: </span>{user.accuracy} %</p>
              <p className="text-sm text-slate-500">{formatDate(user.latestActivityAt)}</p>
            </a>
          ))}
          {filtered.length === 0 && <p className="p-8 text-center text-slate-500">Hakuehdoilla ei löytynyt käyttäjiä.</p>}
        </div>
      </div>
    </div>
  );
}
