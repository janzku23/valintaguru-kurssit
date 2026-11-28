"use client";

import type { ReactNode } from "react";
import AnnouncementsFeed from "@/components/announcements/AnnouncementsFeed";
import { useHomeAuth } from "./HomeAuthProvider";

export default function HomeHeroPanel({ children }: { children: ReactNode }) {
  const { loading, user } = useHomeAuth();
  if (loading) {
    return (
      <div role="status" aria-label="Ladataan ajankohtaista" className="relative mx-auto min-h-80 w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#dfe2ee] bg-[#fffdf8] p-7 shadow-[0_24px_70px_-30px_rgba(35,42,96,0.2)]">
        <div aria-hidden="true" className="animate-pulse space-y-5 motion-reduce:animate-none"><div className="h-10 w-10 rounded-full bg-[#e9ecff]" /><div className="h-7 w-2/3 rounded-lg bg-[#e9ecff]" /><div className="h-4 w-4/5 rounded-full bg-[#f0f1f8]" /><div className="h-24 rounded-2xl bg-[#f0f1f8]" /></div>
      </div>
    );
  }
  return user ? <AnnouncementsFeed key={user.id} /> : children;
}
