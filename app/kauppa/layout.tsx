import ShopTheme from "@/components/shop/ShopTheme";
import Link from "next/link";
import { HomeAuthProvider } from "@/app/home/HomeAuthProvider";
import HomeHeaderClient from "@/app/home/HomeHeaderClient";
import ShopNav from "@/components/shop/ShopNav";
import "./shop.css";
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShopTheme>
      <HomeAuthProvider>
        <HomeHeaderClient />
      </HomeAuthProvider>
      <div className="vg-shop-container">
        <ShopNav mode={process.env.PAYTRAIL_MODE ?? "test"} />
        {children}
        <footer className="vg-shop-footer">
          <Link href="/">ValintaGuru</Link>
          <div>
            <Link href="/kauppa/ehdot">Osto- ja toimitusehdot</Link>
            <Link href="/ehdot/tietosuojakaytanto">Tietosuoja</Link>
            <a href="mailto:info@valintaguru.com">Asiakaspalvelu</a>
          </div>
          <small>
            ValintaGuru Oy · Y-tunnus 3573013-4 · Maksunvälittäjä Paytrail Oyj
          </small>
        </footer>
      </div>
    </ShopTheme>
  );
}
