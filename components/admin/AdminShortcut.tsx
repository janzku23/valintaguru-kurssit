"use client";

import { useAdminAccess } from "@/lib/useAdminAccess";

export default function AdminShortcut({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const visible = useAdminAccess();

  if (!visible) return null;

  if (mobile) {
    return (
      <a
        href="/admin"
        onClick={onNavigate}
        className="flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3.5 font-bold text-white transition hover:bg-slate-800"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">⚙</span>
          <span>Admin-hallinta</span>
        </span>
        <span className="text-xl text-white/50">›</span>
      </a>
    );
  }

  return (
    <a
      href="/admin"
      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
    >
      <span aria-hidden="true">⚙</span>
      Admin-hallinta
    </a>
  );
}
