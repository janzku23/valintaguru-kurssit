export default function WebinarPlaceholderPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-16 text-slate-950 sm:px-6">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-indigo-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">
          Webinaari 4.11.
        </span>
        <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
          Webinaarilinkki tulossa
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Linkki webinaariin ilmestyy ilmaiskurssin teoriaosioon lähempänä 4.11.
        </p>
        <a
          href="/kurssi/ilmais-kurssi/teoria"
          className="mt-8 inline-flex rounded-full bg-[#3f51e7] px-6 py-3.5 font-black text-white transition hover:bg-[#3142d6]"
        >
          Takaisin teoriaan →
        </a>
      </section>
    </main>
  );
}
