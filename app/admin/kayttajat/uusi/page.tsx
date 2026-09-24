import AdminUserPanel from "@/components/AdminUserPanel";

export default function NewAdminUserPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">Käyttäjähallinta</p>
        <h1 className="mt-2 text-3xl font-black">Luo tai päivitä käyttäjä</h1>
        <p className="mt-2 text-slate-600">Nykyinen kutsu- ja kurssienavauslogiikka säilyy käytössä.</p>
      </div>
      <AdminUserPanel />
    </div>
  );
}
