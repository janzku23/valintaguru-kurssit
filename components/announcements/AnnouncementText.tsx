"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Announcement } from "@/lib/announcements/model";

export default function AnnouncementText({ announcement, latest }: {
  announcement: Announcement;
  latest: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const textId = useId();

  useEffect(() => {
    if (expanded) return;
    const elements = [titleRef.current, contentRef.current].filter(element => element !== null);
    const observer = new ResizeObserver(() => {
      setHasOverflow(elements.some(element => element.scrollHeight > element.clientHeight + 1));
    });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [expanded, announcement.title, announcement.content]);

  return (
    <>
      <div id={textId}>
        <h3 ref={titleRef} className={`mt-2 min-w-0 break-words font-semibold tracking-tight text-[#202641] [overflow-wrap:anywhere] ${expanded ? "" : "line-clamp-2"} ${latest ? "font-serif text-[1.35rem] leading-tight" : "text-base leading-6"}`}>{announcement.title}</h3>
        <p ref={contentRef} className={`mt-2 min-w-0 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600 [overflow-wrap:anywhere] ${expanded ? "" : "line-clamp-3"}`}>{announcement.content}</p>
      </div>
      {(hasOverflow || expanded) && (
        <button type="button" aria-expanded={expanded} aria-controls={textId} aria-label={`${expanded ? "Näytä vähemmän" : "Lue koko tiedote"}: ${announcement.title}`} onClick={() => setExpanded(value => !value)} className="mt-1 inline-flex min-h-11 items-center gap-2 text-xs font-bold text-[#3f51e7] transition hover:text-[#2638c7] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f51e7]">
          {expanded ? "Näytä vähemmän" : "Lue koko tiedote"}
          <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
        </button>
      )}
    </>
  );
}
