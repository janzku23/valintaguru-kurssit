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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadSummary() {
      try {
        const response = await fetch("/api/inquiries/mine?summary=1", {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as SummaryResponse;

        if (!active) {
          return;
        }

        const admin = Boolean(data.isAdmin);

        setIsAdmin(admin);
        setCount(admin ? data.openCount ?? 0 : data.unreadCount ?? 0);
      } catch {
        // Navigaatiolinkki toimii myös ilman ilmoitusmäärää.
      }
    }

    void loadSummary();

    const refresh = () => {
      void loadSummary();
    };

    window.addEventListener("valintaguru:inquiry-created", refresh);
    window.addEventListener("valintaguru:inquiry-read", refresh);

    return () => {
      active = false;
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
  const label = isAdmin ? "Tiedustelut" : "Kysy";

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
