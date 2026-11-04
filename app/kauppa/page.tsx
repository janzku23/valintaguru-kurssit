import Catalog from "@/components/shop/Catalog";
import { catalog } from "@/lib/shop/server";
export const dynamic = "force-dynamic";
export const metadata = { title: "Kurssikauppa" };
export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;
  let products: Awaited<ReturnType<typeof catalog>> = [];
  let unavailable = false;
  try {
    products = await catalog();
  } catch {
    unavailable = true;
  }
  return (
    <main className="vg-shop-section vg-shop-catalog">
      <h1>Kurssikauppa</h1>
      {unavailable ? (
        <div className="vg-shop-note" role="status">
          <h2>Kaupan valikoimaa ei saatu ladattua</h2>
          <p>
            Yritä hetken kuluttua uudelleen. Asiakaspalvelu:
            info@valintaguru.com.
          </p>
        </div>
      ) : (
        <Catalog products={products} selected={course} />
      )}
    </main>
  );
}
