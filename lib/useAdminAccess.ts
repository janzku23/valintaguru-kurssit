"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function useAdminAccess(): boolean {
  const supabase = useMemo(() => createClient(), []);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let latestRequest = 0;

    async function refresh() {
      const requestId = ++latestRequest;
      try {
        const response = await fetch("/api/admin/session", {
          cache: "no-store",
          signal: controller.signal,
        });
        const allowed = response.ok && (await response.json()).isAdmin === true;
        if (!controller.signal.aborted && requestId === latestRequest) {
          setIsAdmin(allowed);
        }
      } catch {
        if (!controller.signal.aborted && requestId === latestRequest) {
          setIsAdmin(false);
        }
      }
    }

    void refresh();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      void refresh();
    });

    return () => {
      controller.abort();
      subscription.unsubscribe();
    };
  }, [supabase]);

  return isAdmin;
}
