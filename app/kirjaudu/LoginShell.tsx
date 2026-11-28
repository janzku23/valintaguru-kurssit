import type { ReactNode } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export function LoginHeading({
  title = "Tervetuloa takaisin.",
  description = "Kirjaudu sisään ja jatka siitä, mihin jäit.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div>
      <h1 id="login-title" className="font-serif text-[2rem] font-semibold leading-[1.12] tracking-tight text-[#20233b] sm:text-[2.25rem]">
        {title}
      </h1>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export function LoginLoading() {
  return (
    <div role="status" aria-busy="true">
      <LoginHeading />
      <span className="sr-only">Tarkistetaan kirjautumista…</span>
      <div aria-hidden="true" className="mt-6 animate-pulse space-y-4 motion-reduce:animate-none">
        <div>
          <div className="h-4 w-20 rounded bg-slate-100" />
          <div className="mt-2 h-[52px] rounded-xl bg-[#f3f4fa]" />
        </div>
        <div>
          <div className="h-4 w-16 rounded bg-slate-100" />
          <div className="mt-2 h-[52px] rounded-xl bg-[#f3f4fa]" />
        </div>
        <div className="h-[52px] rounded-xl bg-[#3f51e7]/15" />
      </div>
    </div>
  );
}

export default function LoginShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-svh bg-[#f5f3ee] text-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#e6e8f6]/60" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full border-[56px] border-[#e8c780]/15" />
      </div>

      <main className="mx-auto w-full max-w-[1040px] px-4 pb-10 pt-6 sm:px-8 sm:pt-10 lg:pt-[clamp(2rem,7vh,5rem)]">
        <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_24px_80px_-32px_rgba(34,38,75,0.24)]">
          <div className="relative isolate overflow-hidden bg-[#3f51e7] text-white">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-32 -z-10 h-44 w-44 rounded-full border-[28px] border-[#f3a31b]" />
            <header className="px-6 py-5 sm:px-8 sm:py-6">
              <Link href="/" className="inline-flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="inline-flex rounded-full bg-white p-0.5">
                  <BrandLogo />
                </span>
                <span className="font-serif text-2xl font-semibold tracking-tight">ValintaGuru</span>
              </Link>
            </header>

          </div>

          <section aria-labelledby="login-title" className="px-6 py-8 sm:px-9 sm:py-10">
            <div>{children}</div>
            <p className="mt-7 text-center text-xs leading-6 text-slate-500">
              Tarvitsetko apua?{" "}
              <a href="mailto:info@valintaguru.com" className="inline-flex min-h-8 items-center rounded font-medium text-[#3f51e7] underline decoration-[#3f51e7]/25 underline-offset-4 transition-colors hover:decoration-[#3f51e7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]">
                Ota yhteyttä
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
