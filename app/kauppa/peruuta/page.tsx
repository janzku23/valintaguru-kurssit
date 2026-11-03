import Cancellation from "@/components/shop/Cancellation";
export const metadata = {
  title: "Peruuta sopimus",
  robots: { index: false, follow: false },
};
export default async function CancelPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  return <Cancellation id={(await searchParams).order} />;
}
