"use client";

import { useState } from "react";

type CourseOption = { id: string; title: string };

export default function UserRightsEditor({
  userId,
  userEmail,
  courses,
  initialCourseIds,
}: {
  userId: string;
  userEmail: string;
  courses: CourseOption[];
  initialCourseIds: string[];
}) {
  const [selected, setSelected] = useState(() => Array.from(new Set(initialCourseIds)));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  async function save() {
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`/api/admin/users/${userId}/rights`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseIds: selected }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Oikeuksien tallennus epäonnistui.");
      setMessage("Kurssioikeudet tallennettu.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Oikeuksien tallennus epäonnistui.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-black">Kurssioikeudet</h2>
          <p className="mt-1 text-sm text-slate-500">{userEmail}</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setSelected(courses.map((course) => course.id))} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black">Valitse kaikki</button>
          <button type="button" onClick={() => setSelected([])} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black">Poista kaikki</button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => {
          const checked = selected.includes(course.id);
          return (
            <label key={course.id} className={`flex cursor-pointer gap-3 rounded-2xl border p-4 ${checked ? "border-indigo-300 bg-indigo-50" : "border-slate-200"}`}>
              <input type="checkbox" checked={checked} onChange={() => toggle(course.id)} className="mt-1 accent-indigo-600" />
              <span>
                <span className="block font-black">{course.title}</span>
                <span className="text-xs text-slate-500">{course.id}</span>
              </span>
            </label>
          );
        })}
      </div>

      {error && <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
      {message && <p className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700">{message}</p>}

      <button type="button" onClick={save} disabled={saving} className="mt-5 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white disabled:opacity-50">
        {saving ? "Tallennetaan…" : "Tallenna oikeudet"}
      </button>
    </section>
  );
}
