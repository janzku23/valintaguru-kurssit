import AdminUsersTable from "@/components/admin/AdminUsersTable";
import { getAdminUsersOverview } from "@/lib/adminData";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const users = await getAdminUsersOverview();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">Käyttäjähallinta</p>
          <h1 className="mt-2 text-3xl font-black">Käyttäjät</h1>
          <p className="mt-2 text-slate-600">Näe opiskelijat, kurssioikeudet ja aktiivisuus yhdellä listalla.</p>
        </div>
        <a href="/admin/kayttajat/uusi" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">+ Lisää käyttäjä</a>
      </div>
      <AdminUsersTable users={users} />
    </div>
  );
}
