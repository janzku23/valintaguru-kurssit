import OrderStatus from "@/components/shop/OrderStatus";
export const metadata = {
  title: "Tilauksen seuranta",
  robots: { index: false, follow: false },
  referrer: "no-referrer" as const,
};
export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;
  return order ? (
    <OrderStatus id={order} />
  ) : (
    <p className="vg-shop-note">
      Avaa tilauksen seuranta maksamisen jälkeen tai ota yhteyttä
      asiakaspalveluun.
    </p>
  );
}
