import AdminUsersTable from "@/components/admin/AdminUsersTable";
import { getAdminUsersOverview } from "@/lib/adminData";

export const dynamic = "force-dynamic";

export default async function AdminProgressPage() {
  const users = (await getAdminUsersOverview()).filter((user) => user.email !== "admin@valintaguru.fi");
  const total = users.reduce((sum, user) => sum + user.attempts, 0);
  const correct = users.reduce((sum, user) => sum + user.correct, 0);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">Oppimisanalytiikka</p>
        <h1 className="mt-2 text-3xl font-black">Opiskelijoiden edistyminen</h1>
        <p className="mt-2 text-slate-600">Avaa opiskelija nähdäksesi kurssikohtaiset tulokset, ajat, harjoituskokeet ja lukutaitokategoriat.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5"><p className="text-sm font-bold text-slate-500">Opiskelijoita</p><p className="mt-2 text-3xl font-black">{users.length}</p></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5"><p className="text-sm font-bold text-slate-500">Vastauksia</p><p className="mt-2 text-3xl font-black">{total}</p></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5"><p className="text-sm font-bold text-slate-500">Oikein yhteensä</p><p className="mt-2 text-3xl font-black">{total > 0 ? Math.round(correct / total * 100) : 0} %</p></div>
      </div>
      <AdminUsersTable users={users} />
    </div>
  );
}
