import type { Metadata } from "next";
import { Suspense } from "react";
import KirjauduClient from "./KirjauduClient";
import LoginShell, { LoginLoading } from "./LoginShell";

export const metadata: Metadata = {
  title: "Kirjaudu",
  description: "Kirjaudu ValintaGurun kurssialustalle.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function KirjauduPage() {
  return (
    <LoginShell>
      <Suspense fallback={<LoginLoading />}>
        <KirjauduClient />
      </Suspense>
    </LoginShell>
  );
}
