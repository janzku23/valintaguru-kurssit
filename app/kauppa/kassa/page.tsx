import { sellerAddress } from "@/lib/shop/settings-model";
import Checkout from "@/components/shop/Checkout";
import { catalog, checkDatabaseEnvironment } from "@/lib/shop/server";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Kassa",
  robots: { index: false, follow: false },
};
export default async function CheckoutPage() {
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
  let paymentAvailable = false;
  try {
    await checkDatabaseEnvironment();
    paymentAvailable = true;
  } catch {
    // Never enable payments before configuration and database environment agree.
  }
  return (
    <Checkout
      products={products}
      checkout
      paymentAvailable={paymentAvailable}
      sellerAddress={sellerAddress(process.env)}
    />
  );
}
