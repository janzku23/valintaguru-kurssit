import InquirySection from "@/components/inquiries/InquirySection";
import MyInquiries from "@/components/inquiries/MyInquiries";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export default async function KysyPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
          >
            <span aria-hidden="true">←</span>
            Takaisin etusivulle
          </a>

          {user && (
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 sm:text-sm">
              Kirjautunut käyttäjä
            </span>
          )}
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:py-16">
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3f51e7] via-indigo-600 to-violet-700 p-7 text-white shadow-xl shadow-indigo-950/15 sm:p-9 lg:p-11">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-100">
            Kysy ValintaGurulta
          </p>

          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Kysymykset ja vastaukset samassa paikassa
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-50 sm:text-lg sm:leading-8">
            Lähetä meille kysymys kursseista, ostamisesta, käyttöoikeuksista tai
            teknisestä ongelmasta. Kirjautuneena näet tällä samalla sivulla myös
            aiemmat kysymyksesi ja ValintaGurun vastaukset.
          </p>
        </div>

        <InquirySection isLoggedIn={Boolean(user)} />

        {user && (
          <section className="mt-10 border-t border-slate-200 pt-10">
            <div className="mb-6">
              <p className="font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
                Omat kysymykset
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                Kysymykset ja ValintaGurun vastaukset
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Uusin kysymys näkyy ensimmäisenä. Kun ValintaGuru vastaa, vastaus
                ilmestyy tämän kysymyksen yhteyteen.
              </p>
            </div>

            <MyInquiries />
          </section>
        )}
      </section>
    </main>
  );
}
