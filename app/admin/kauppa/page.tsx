import { requireAdminPage } from "@/lib/adminAccess";
import AdminShop from "@/components/shop/AdminShop";
import "@/app/kauppa/shop.css";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Verkkokaupan hallinta",
  robots: { index: false, follow: false },
};
export default async function AdminShopPage() {
  await requireAdminPage();
  return (
    <AdminShop
      initialMode={
        process.env.PAYTRAIL_MODE === "production" ? "production" : "test"
      }
    />
  );
}
