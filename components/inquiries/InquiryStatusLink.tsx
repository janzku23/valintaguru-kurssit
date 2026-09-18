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

export default function InquiryStatusLink({ mobile = false, onNavigate }: Props) {
  const [count, setCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let active = true;

    void fetch("/api/inquiries/mine?summary=1", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return null;
        return response.json() as Promise<SummaryResponse>;
      })
      .then((data) => {
        if (!active || !data) return;

        const admin = Boolean(data.isAdmin);
        setIsAdmin(admin);
        setCount(admin ? data.openCount ?? 0 : data.unreadCount ?? 0);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  const href = isAdmin ? "/admin/tiedustelut" : "/kysy";
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
    <a href={href} className="inline-flex items-center gap-1.5 transition hover:text-[#3f51e7]">
      <span>{label}</span>
      {count > 0 && (
        <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-black text-white">
          ({count})
        </span>
      )}
    </a>
  );
}
