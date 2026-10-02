import InquirySection from "@/components/inquiries/InquirySection";
import MyInquiries from "@/components/inquiries/MyInquiries";
import AdminInquiryPanel from "@/components/inquiries/AdminInquiryPanel";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "admin@valintaguru.fi";

export default async function KysyPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const normalizedEmail = user?.email?.trim().toLowerCase() ?? "";
  const isAdmin = normalizedEmail === ADMIN_EMAIL;

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
            <span
              className={[
                "rounded-full px-4 py-2 text-xs font-black sm:text-sm",
                isAdmin
                  ? "bg-violet-100 text-violet-800"
                  : "bg-emerald-50 text-emerald-700",
              ].join(" ")}
            >
              {isAdmin ? "Admin" : "Kirjautunut käyttäjä"}
            </span>
          )}
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:py-16">
        <div
          className={[
            "mb-8 overflow-hidden rounded-[2rem] p-7 text-white shadow-xl sm:p-9 lg:p-11",
            isAdmin
              ? "bg-gradient-to-br from-slate-950 via-violet-950 to-violet-800 shadow-violet-950/15"
              : "bg-gradient-to-br from-[#3f51e7] via-indigo-600 to-violet-700 shadow-indigo-950/15",
          ].join(" ")}
        >
          <p
            className={[
              "text-sm font-black uppercase tracking-[0.18em]",
              isAdmin ? "text-violet-200" : "text-indigo-100",
            ].join(" ")}
          >
            {isAdmin ? "ValintaGuru · Admin" : "Kysy ValintaGurulta"}
          </p>

          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {isAdmin
              ? "Tiedustelut ja vastaukset"
              : "Kysymykset ja vastaukset samassa paikassa"}
          </h1>

          <p
            className={[
              "mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8",
              isAdmin ? "text-violet-100" : "text-indigo-50",
            ].join(" ")}
          >
            {isAdmin
              ? "Tässä näkymässä näet käyttäjien ja vierailijoiden lähettämät kysymykset. Voit vastata avoimiin tiedusteluihin suoraan tästä näkymästä."
              : "Lähetä meille kysymys kursseista, ostamisesta, käyttöoikeuksista tai teknisestä ongelmasta. Kirjautuneena näet tällä samalla sivulla myös aiemmat kysymyksesi ja ValintaGurun vastaukset."}
          </p>
        </div>

        {isAdmin ? (
          <section>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-bold uppercase tracking-[0.16em] text-violet-700">
                  Saapuneet pyynnöt
                </p>

                <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                  Vastaa käyttäjien kysymyksiin
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Avoimet kysymykset näkyvät ensimmäisenä. Vastauksen jälkeen
                  kirjautunut käyttäjä näkee vastauksen omalla Kysy-sivullaan.
                  Vierailijalle vastaus toimitetaan sähköpostiin.
                </p>
              </div>

              <a
                href="/admin"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:border-violet-400 hover:text-violet-700"
              >
                Admin-paneeli
              </a>
            </div>

            <AdminInquiryPanel />
          </section>
        ) : (
          <>
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
                    Uusin kysymys näkyy ensimmäisenä. Kun ValintaGuru vastaa,
                    vastaus ilmestyy tämän kysymyksen yhteyteen.
                  </p>
                </div>

                <MyInquiries />
              </section>
            )}
          </>
        )}
      </section>
    </main>
  );
}
