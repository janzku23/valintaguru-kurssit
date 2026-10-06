import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import KirjauduClient from "./KirjauduClient";

export default function KirjauduPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f5f8ff]">
          <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-5">
              <Link
                href="/"
                aria-label="Takaisin ValintaGurun etusivulle"
                className="inline-flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="ValintaGuru"
                  width={150}
                  height={44}
                  priority
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>
          </header>

          <main className="px-5 py-8">
            <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-200/70 sm:p-8">
                <Link
                  href="/"
                  aria-label="Takaisin ValintaGurun etusivulle"
                  className="mx-auto flex w-fit items-center justify-center"
                >
                  <Image
                    src="/logo.png"
                    alt="ValintaGuru"
                    width={150}
                    height={52}
                    priority
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  ValintaGuru
                </p>

                <h1 className="mt-3 text-3xl font-black text-slate-950">
                  Ladataan kirjautumista..
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Hetki, avataan kirjautumissivu.
                </p>
              </div>
            </section>
            </div>
          </main>
        </div>
      }
    >
      <KirjauduClient />
    </Suspense>
  );
}