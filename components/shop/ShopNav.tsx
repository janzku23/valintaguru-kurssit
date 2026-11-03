"use client";
import Link from "next/link";
import { useCart } from "./cart";
export default function ShopNav({ mode }: { mode: string }) {
  const { ids, ready } = useCart();
  return (
    <>
      <nav className="vg-shop-nav" aria-label="Kurssikauppa">
        <Link href="/kauppa">Kurssikauppa</Link>
        <div>
          <Link href="/kauppa/ostoskori" className="vg-cart-link">
            Ostoskori <span>{ready ? ids.length : "—"}</span>
          </Link>
        </div>
      </nav>
      {mode !== "production" && (
        <div className="vg-test-banner">
          Paytrail-testikauppa · Käytä vain testimaksutapoja. Testitilaus voi
          luoda käyttäjätunnuksen ja kurssioikeuden.
        </div>
      )}
    </>
  );
}
