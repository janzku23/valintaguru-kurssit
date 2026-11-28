import AdminAnnouncements from "@/components/announcements/AdminAnnouncements";
import Link from "next/link";
import { requireAdminPage } from "@/lib/adminAccess";

export const metadata = {
  title: "Tiedotteiden hallinta · ValintaGuru",
  robots: { index: false, follow: false },
};

export default async function AdminAnnouncementsPage() {
  await requireAdminPage();
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-widest text-[#3f51e7]">Sisällönhallinta</p>
      <h1 className="mt-3 text-3xl font-extrabold">Tiedotteet</h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">Julkaise lyhyitä ilmoituksia kirjautuneille opiskelijoille. Etusivulla näkyvät viisi uusinta tiedotetta, ja vanhempia voi selata samasta kortista.</p>
      <Link href="/" className="mt-4 inline-block font-bold text-[#3f51e7]">Katso etusivua →</Link>
      <AdminAnnouncements />
    </>
  );
}
