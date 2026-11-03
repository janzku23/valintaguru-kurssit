import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { catalog } from "@/lib/shop/server";
import { AddToCart } from "@/components/shop/Catalog";
import { money, accessDuration } from "@/lib/shop/types";
import { getCourseById } from "@/data/courses";
export const dynamic = "force-dynamic";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await catalog(true);
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <main className="vg-shop-section">
      <Link href="/kauppa" className="vg-shop-muted">
        ← Kaikki kurssit
      </Link>
      <div className="vg-shop-columns">
        <section className="vg-shop-panel">
          <span className="vg-product-badge">{p.category}</span>
          <h1>{p.name}</h1>
          <p className="vg-shop-muted">{p.description}</p>
          <h2 style={{ marginTop: 32 }}>Mitä kurssi sisältää?</h2>
          <p style={{ whiteSpace: "pre-line" }}>{p.content}</p>
          {p.course_ids.map((id) => {
            const course = getCourseById(id);
            return (
              course && (
                <div key={id} className="vg-shop-note">
                  <strong>{course.title}</strong>
                  <ul>
                    {course.modules.map((m) => (
                      <li key={m.id}>✓ {m.title}</li>
                    ))}
                  </ul>
                </div>
              )
            );
          })}
          <h2>Kenelle kurssi sopii?</h2>
          <p>{p.audience}</p>
        </section>
        <aside className="vg-shop-panel">
          {p.image_url && (
            <Image
              src={p.image_url}
              alt={p.name}
              width={600}
              height={450}
              sizes="(max-width: 800px) 100vw, 440px"
              className="vg-product-image"
            />
          )}
          <p className="vg-shop-eyebrow vg-shop-muted">Oma seuraava askel</p>
          <div className="vg-product-price">
            {p.sale_price_cents && <del>{money(p.price_cents)}</del>}
            {money(p.sale_price_cents ?? p.price_cents)}
          </div>
          <p className="vg-shop-muted">
            Sis. ALV {p.vat_percentage} % · Ei toimituskuluja
          </p>
          <div className="vg-shop-note">
            <strong>
              {p.access_days === null
                ? "Henkilökohtainen kurssioikeus"
                : `Käyttöoikeus ${accessDuration(p.access_days)}`}
            </strong>
            <p className="vg-shop-muted">
              Voimassa maksun vahvistamisesta.{" "}
              {p.course_ids.length > 1
                ? `Paketti avaa ${p.course_ids.length} kurssia.`
                : "Henkilökohtainen kurssioikeus."}
            </p>
          </div>
          <p className="vg-shop-muted">
            {p.legal_kind === "service"
              ? "Opetusta tai palvelua sisältävä kurssi. Peruuttamisoikeutta arvioidaan palvelua koskevien sääntöjen mukaan."
              : "Sähköisesti toimitettava digitaalinen sisältö. Välitön toimitus edellyttää kassalla erillistä suostumusta."}
          </p>
          <div className="vg-shop-actions">
            <AddToCart product={p} products={products} checkout />
          </div>
          <div className="vg-shop-actions">
            <AddToCart product={p} products={products} />
          </div>
          <div className="vg-shop-actions">
            <Link href="/kauppa/ostoskori" className="vg-shop-btn secondary">
              Siirry ostoskoriin →
            </Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13 }}>
            <Link href="/kauppa/ehdot">Lue osto- ja toimitusehdot</Link>
          </p>
        </aside>
      </div>
    </main>
  );
}
