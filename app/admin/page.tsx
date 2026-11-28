import { requireAdminPage } from "@/lib/adminAccess";
import { dashboardData } from "@/lib/adminDashboardData";
import { vercelTraffic } from "@/lib/adminDashboardIntegrations";
import AdminWorkspace from "@/components/admin/AdminWorkspace";
import Link from "next/link";
export const dynamic = "force-dynamic";
export const metadata = { title: "Admin · ValintaGuru", robots: { index: false, follow: false } };
export default async function AdminDashboardPage() {
  await requireAdminPage();
  const result = await Promise.all([dashboardData(), vercelTraffic()]).catch(() => null);
  if (!result) {
    return <section className="rounded-3xl border border-amber-300 bg-amber-50 p-8"><h1 className="text-2xl font-black">Koontitietoja ei saatu ladattua</h1><p className="mt-3">Tarkista Supabase-yhteys ja palvelimen asetukset. Voit jatkaa nykyisiin hallintatoimintoihin sivuvalikosta.</p><Link className="mt-5 inline-block font-bold underline" href="/admin">Yritä uudelleen</Link></section>;
  }
  const [data, traffic] = result;
  return <AdminWorkspace data={data} traffic={traffic} />;
}
