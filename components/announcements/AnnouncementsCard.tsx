import type { ReactNode } from "react";
import BrandLogo from "@/components/BrandLogo";
import { formatAnnouncementDate, type Announcement } from "@/lib/announcements/model";
import AnnouncementText from "./AnnouncementText";

export default function AnnouncementsCard({
  children,
  footer,
  showAdminLink = false,
}: {
  children: ReactNode;
  footer: ReactNode;
  showAdminLink?: boolean;
}) {
  return (
    <aside aria-labelledby="announcements-heading" className="relative isolate mx-auto flex max-h-[40rem] w-full max-w-xl flex-col overflow-hidden rounded-[2rem] border border-[#dfe2ee] bg-white shadow-[0_24px_70px_-30px_rgba(35,42,96,0.32)] sm:max-h-[42rem]">
      <div className="relative isolate shrink-0 overflow-hidden border-b border-[#e8e9f1] bg-[#fffdf8] px-5 pb-6 pt-6 sm:px-7 sm:pb-7 sm:pt-7">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border-[32px] border-[#e9ecff]/80 sm:-right-12" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-3 bottom-6 -z-10 h-16 w-16 rotate-12 rounded-[1.3rem] border-[5px] border-[#edbf61]/65 sm:right-6" />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <BrandLogo />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3f51e7] sm:text-[11px]">Ajankohtaista</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#eadab9] bg-[#fff8e9] px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-[#79551e]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#d9a441]" />
            Opiskelijoille
          </span>
        </div>

        <h2 id="announcements-heading" className="mt-6 font-serif text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#171d38] sm:text-[2.85rem]">
          <span className="block">ValintaGuru</span>{" "}
          <span className="mt-1 block text-[#3f51e7]">tiedottaa</span>
        </h2>
        {showAdminLink && (
          <a href="/admin/tiedotteet" className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full border border-indigo-200 bg-white/90 py-2 pl-2 pr-4 text-xs font-bold text-[#3f51e7] transition hover:border-[#3f51e7] hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]">
            <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-base">+</span>
            Uusi tiedote
          </a>
        )}
      </div>

      <div role="region" aria-label="Tiedotteet" tabIndex={0} className="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-color:#c9cfed_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#3f51e7]">
        {children}
      </div>

      <nav aria-label="Tiedotteiden sivut" className="flex shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-[#e8e9f1] bg-[#fafafc] px-5 py-2 sm:px-7">
        {footer}
      </nav>
    </aside>
  );
}

export function AnnouncementItem({ announcement, latest = false, children }: {
  announcement: Announcement;
  latest?: boolean;
  children?: ReactNode;
}) {
  return (
    <li className="relative border-l border-[#e2e5f2] pb-3 pl-4 last:pb-0 sm:pl-5">
      <span aria-hidden="true" className={`absolute -left-[4.5px] top-6 h-2 w-2 rounded-full ${latest ? "bg-[#3f51e7] ring-4 ring-[#eef0ff]" : "border-2 border-[#bdc5ec] bg-white"}`} />
      <article className={`min-w-0 rounded-2xl border p-4 ${latest ? "border-[#dfe3fc] bg-gradient-to-br from-[#f0f2ff] via-[#f8f9ff] to-white" : "border-transparent bg-white"}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <time dateTime={announcement.created_at} className="text-[11px] font-medium tabular-nums text-slate-500">{formatAnnouncementDate(announcement.created_at)}</time>
          {latest && <span className="rounded-full border border-[#efdfbd] bg-[#fff7e7] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#805b20]">Uusin tiedote</span>}
        </div>
        <AnnouncementText announcement={announcement} latest={latest} />
        {children}
      </article>
    </li>
  );
}
