"use client";
import Link from "next/link";
export default function BlogError({ reset }: { reset: () => void }) {
  return <main className="min-h-screen bg-slate-50 px-5 py-20 text-slate-950"><div className="mx-auto max-w-2xl rounded-3xl bg-white p-8"><h1 className="text-3xl font-extrabold">Kirjoitusta ei voitu ladata</h1><p className="mt-4 text-slate-600">Yhteydessä on tilapäinen häiriö. Kokeile uudelleen hetken kuluttua.</p><button onClick={reset} className="mt-6 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white">Yritä uudelleen</button><Link href="/blogi" className="ml-5 font-bold text-blue-700">Takaisin blogiin</Link></div></main>;
}
