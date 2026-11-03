"use client";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function PrivacyAnalytics() {
  const path = usePathname();
  if (path.startsWith("/kauppa")) return null;
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
