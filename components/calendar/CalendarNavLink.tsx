"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function CalendarNavLink({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const supabase = useMemo(() => createClient(), []);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let active = true;

    async function check() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (active) setVisible(false);
        return;
      }

      const { data } = await supabase.rpc("has_valintaguru_calendar_access");
      if (active) setVisible(Boolean(data));
    }

    void check();

    return () => {
      active = false;
    };
  }, [supabase]);

  if (!visible) return null;

  return (
    <a
      href="/kalenteri"
      className={
        mobile
          ? "block w-full rounded-xl px-4 py-3 font-bold text-slate-900 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
          : "font-bold text-slate-700 transition hover:text-[#3f51e7]"
      }
    >
      Planner
    </a>
  );
}
