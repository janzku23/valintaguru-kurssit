import { getAdminUsersOverview } from "@/lib/adminData";

export const dynamic = "force-dynamic";

export default async function AdminRightsPage() {
  const users = await getAdminUsersOverview();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">Käyttöoikeudet</p>
        <h1 className="mt-2 text-3xl font-black">Kurssioikeudet</h1>
        <p className="mt-2 text-slate-600">Valitse käyttäjä. Varsinainen oikeuksien muokkaus avautuu opiskelijan hallintasivulle.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {users.filter((user) => user.email !== "admin@valintaguru.fi").map((user) => (
          <a key={user.id} href={`/admin/edistyminen/${user.id}#oikeudet`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <p className="truncate font-black">{user.name || user.email}</p>
            <p className="mt-1 truncate text-sm text-slate-500">{user.email}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {user.courseRights.length === 0 ? <span className="text-sm text-slate-400">Ei aktiivisia kursseja</span> : user.courseRights.map((right) => <span key={right.courseId} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">{right.title}</span>)}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
