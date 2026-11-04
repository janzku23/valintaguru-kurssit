import ShopTheme from "@/components/shop/ShopTheme";
import Link from "next/link";
import Image from "next/image";
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
            <figure className="vg-shop-footer-payments">
              <Image
                src="/paytrail-maksutavat.svg"
                alt="Paytrailin maksutavat"
                width={1562}
                height={400}
                unoptimized
              />
            </figure>
          </footer>
        </div>
      </HomeAuthProvider>
    </ShopTheme>
  );
}
