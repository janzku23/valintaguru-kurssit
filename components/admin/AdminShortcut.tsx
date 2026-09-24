"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const ADMIN_EMAIL =
  process.env.NEXT_PUBLIC_VALINTAGURU_ADMIN_EMAIL?.trim().toLowerCase() ||
  "admin@valintaguru.fi";

export default function AdminShortcut({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const supabase = useMemo(() => createClient(), []);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let alive = true;

    void supabase.auth.getUser().then(({ data }) => {
      if (!alive) return;
      setVisible(
        data.user?.email?.trim().toLowerCase() === ADMIN_EMAIL,
      );
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setVisible(
        session?.user.email?.trim().toLowerCase() === ADMIN_EMAIL,
      );
    });

    return () => {
      alive = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

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
