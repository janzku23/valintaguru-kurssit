import Link from "next/link";
import { SHOP_TERMS } from "@/lib/shop/terms";
export const metadata = { title: "Osto- ja toimitusehdot" };
export default function TermsPage() {
  return (
    <main className="vg-shop-prose">
      <p className="vg-shop-eyebrow vg-shop-muted">
        Versio {SHOP_TERMS.version}
      </p>
      <h1>Osto- ja toimitusehdot</h1>
      {SHOP_TERMS.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p>
        <Link href="/kauppa/peruuta">Peruuta sopimus</Link> ·{" "}
        <Link href="/ehdot/tietosuojakaytanto">Tietosuojakäytäntö</Link> ·{" "}
        <Link href="/ehdot/yhteystiedot">Yhteystiedot</Link>
      </p>
    </main>
  );
}
