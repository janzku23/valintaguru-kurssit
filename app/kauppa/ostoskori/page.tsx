import Checkout from "@/components/shop/Checkout";
import { catalog } from "@/lib/shop/server";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Ostoskori",
  robots: { index: false, follow: false },
};
export default async function CartPage() {
  let products: Awaited<ReturnType<typeof catalog>> | null = null;
  try {
    products = await catalog(true);
  } catch {}
  if (!products)
    return (
      <p className="vg-shop-note">
        Kauppaan ei juuri nyt saada yhteyttä. Ostoskorisi säilyy selaimessasi.
        Yritä myöhemmin uudelleen.
      </p>
    );
  return <Checkout products={products} />;
}
