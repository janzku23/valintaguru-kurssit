import { createAdminClient } from "@/utils/supabase/admin";
import { getAdminUsersOverview } from "@/lib/adminData";

export const dynamic = "force-dynamic";

function formatDate(value: string | null) {
  if (!value) return "Ei vielä";
  return new Intl.DateTimeFormat("fi-FI", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export default async function AdminDashboardPage() {
  const admin = createAdminClient();
  const users = await getAdminUsersOverview();

  const [inquiries, examAttempts] = await Promise.all([
    admin.from("support_inquiries").select("id", { count: "exact", head: true }).eq("status", "open"),
    admin.from("practice_exam_attempts").select("id", { count: "exact", head: true }),
  ]);

  const activeLast7Days = users.filter((user) => {
    if (!user.latestActivityAt) return false;
    return Date.now() - new Date(user.latestActivityAt).getTime() <= 7 * 24 * 60 * 60 * 1000;
  }).length;

  const totalAnswers = users.reduce((sum, user) => sum + user.attempts, 0);
  const avgAccuracy = totalAnswers > 0
    ? Math.round(users.reduce((sum, user) => sum + user.correct, 0) / totalAnswers * 100)
    : 0;

  const cards = [
    ["Käyttäjät", users.length.toLocaleString("fi-FI"), "Kaikki Auth-käyttäjät"],
    ["Aktiivisia 7 vrk", activeLast7Days.toLocaleString("fi-FI"), "Tehtäväsuorituksen perusteella"],
    ["Tallennetut vastaukset", totalAnswers.toLocaleString("fi-FI"), `Oikein keskimäärin ${avgAccuracy} %`],
    ["Harjoituskoeyritykset", (examAttempts.count ?? 0).toLocaleString("fi-FI"), "Oikis / Oikis Teho"],
    ["Avoimet tiedustelut", (inquiries.count ?? 0).toLocaleString("fi-FI"), "Odottaa käsittelyä"],
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">ValintaGuru Admin</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Hallintapaneeli</h1>
        <p className="mt-2 max-w-3xl text-slate-600">Käyttäjät, käyttöoikeudet, opiskelijoiden aktiivisuus, harjoitustulokset ja Valintakoe G:n tehtäväpankki samasta paikasta.</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map(([title, value, note]) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold text-slate-500">{title}</p>
            <p className="mt-3 text-3xl font-black">{value}</p>
            <p className="mt-2 text-xs text-slate-500">{note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <a href="/admin/kayttajat" className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl transition hover:-translate-y-0.5">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-indigo-300">Käyttäjät</p>
          <h2 className="mt-3 text-xl font-black">Hallitse opiskelijoita</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Haku, käyttäjätiedot, kurssit ja viimeisin aktiivisuus.</p>
        </a>
        <a href="/admin/oikeudet" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-indigo-600">Oikeudet</p>
          <h2 className="mt-3 text-xl font-black">Kurssioikeudet</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Avaa tai poista käyttäjältä kurssien käyttöoikeuksia.</p>
        </a>
        <a href="/admin/edistyminen" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-indigo-600">Analytiikka</p>
          <h2 className="mt-3 text-xl font-black">Opiskelijoiden edistyminen</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Vastaukset, onnistumisprosentit, kokeet, ajat ja G:n lukutaitoprofiili.</p>
        </a>
        <a href="/admin/valintakoe-g/tehtavapankki" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm transition hover:-translate-y-0.5">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-indigo-600">Valintakoe G</p>
          <h2 className="mt-3 text-xl font-black">Tehtäväpankki</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Kategoriat, vaikeustasot ja kysymysten metadata.</p>
        </a>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-5 sm:p-6">
          <div>
            <h2 className="text-xl font-black">Viimeksi aktiiviset opiskelijat</h2>
            <p className="mt-1 text-sm text-slate-500">Tehtäväsuoritusten perusteella.</p>
          </div>
          <a href="/admin/edistyminen" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black">Näytä kaikki</a>
        </div>
        <div className="divide-y divide-slate-100">
          {users.filter((user) => user.email !== "admin@valintaguru.fi").slice(0, 8).map((user) => (
            <a key={user.id} href={`/admin/edistyminen/${user.id}`} className="grid gap-2 p-5 transition hover:bg-slate-50 sm:grid-cols-[1.5fr_1fr_120px_180px] sm:items-center">
              <div>
                <p className="font-black">{user.name || user.email}</p>
                {user.name && <p className="text-sm text-slate-500">{user.email}</p>}
              </div>
              <p className="text-sm text-slate-600">{user.courseRights.length} kurssia</p>
              <p className="text-sm font-black">{user.accuracy} %</p>
              <p className="text-sm text-slate-500">{formatDate(user.latestActivityAt)}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
