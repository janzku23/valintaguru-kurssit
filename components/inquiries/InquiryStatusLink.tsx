"use client";

import { useEffect, useState } from "react";

type Props = {
  mobile?: boolean;
  onNavigate?: () => void;
};

type SummaryResponse = {
  isAdmin?: boolean;
  openCount?: number;
  unreadCount?: number;
};

export default function InquiryStatusLink({
  mobile = false,
  onNavigate,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    let loading = false;

    async function loadSummary() {
      if (loading || document.visibilityState === "hidden") return;
      loading = true;

      try {
        const response = await fetch("/api/inquiries/mine?summary=1", {
          cache: "no-store",
        });

        if (!response.ok) {
          if (active && response.status === 401) setCount(0);
          return;
        }

        const data = (await response.json()) as SummaryResponse;

        if (!active) {
          return;
        }

        const admin = Boolean(data.isAdmin);

        setCount(admin ? data.openCount ?? 0 : data.unreadCount ?? 0);
      } catch {
        // Navigaatiolinkki toimii myös ilman ilmoitusmäärää.
      } finally {
        loading = false;
      }
    }

    void loadSummary();

    const refresh = () => {
      void loadSummary();
    };

    const interval = window.setInterval(refresh, 30_000);
    window.addEventListener("focus", refresh);
    window.addEventListener("pageshow", refresh);
    document.addEventListener("visibilitychange", refresh);
    window.addEventListener("valintaguru:inquiry-created", refresh);
    window.addEventListener("valintaguru:inquiry-read", refresh);

    return () => {
      active = false;
      window.clearInterval(interval);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("pageshow", refresh);
      document.removeEventListener("visibilitychange", refresh);
      window.removeEventListener("valintaguru:inquiry-created", refresh);
      window.removeEventListener("valintaguru:inquiry-read", refresh);
    };
  }, []);

  /*
   * Admin käyttää nyt samaa /kysy-sivua kuin muutkin.
   * /kysy tunnistaa admin@valintaguru.fi-käyttäjän ja näyttää
   * suoraan AdminInquiryPanelin.
   */
  const href = "/kysy";
  const label = "Ota yhteyttä";

  if (mobile) {
    return (
      <a
        href={href}
        onClick={onNavigate}
        className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-[#3f51e7]"
      >
        <span>{label}</span>

        <span className="flex items-center gap-2">
          {count > 0 && (
            <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-black text-white">
              ({count})
            </span>
          )}

          <span className="text-xl text-slate-400">›</span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 transition hover:text-[#3f51e7]"
    >
      <span>{label}</span>

      {count > 0 && (
        <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-black text-white">
          ({count})
        </span>
      )}
    </a>
  );
}
