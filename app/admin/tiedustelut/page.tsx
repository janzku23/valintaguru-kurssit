import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import AdminInquiryPanel from "@/components/inquiries/AdminInquiryPanel";

export const dynamic = "force-dynamic";
const ADMIN_EMAIL = "admin@valintaguru.fi";

export default async function AdminInquiriesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/kirjaudu?next=/admin/tiedustelut");
  }

  if (user.email?.trim().toLowerCase() !== ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6">
      <section className="mx-auto w-full max-w-5xl">
        <a href="/" className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700">← Takaisin etusivulle</a>
        <div className="mb-6 rounded-[2rem] bg-gradient-to-br from-slate-950 to-violet-900 p-7 text-white shadow-xl sm:p-9">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-200">Admin</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold">Tiedustelut</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-200">Kaikki etusivun lomakkeen kautta saapuneet kysymykset. Kirjautuneen käyttäjän vastaus tallentuu hänen tililleen; vierailijan vastaus lähetetään sähköpostiin.</p>
        </div>
        <AdminInquiryPanel />
      </section>
    </main>
  );
}
