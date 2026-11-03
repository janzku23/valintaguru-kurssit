"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "./cart";
import { cartWithoutOverlap } from "@/lib/shop/cart-model";
import { money, type Product } from "@/lib/shop/types";
export function AddToCart({
  product,
  products,
  checkout = false,
}: {
  product: Product;
  products: Product[];
  checkout?: boolean;
}) {
  const { ids, setIds, ready } = useCart();
  const router = useRouter();
  const [error, setError] = useState("");
  return (
    <>
      <button
        className="vg-shop-btn"
        disabled={!ready}
        type="button"
        onClick={() => {
          try {
            setIds(cartWithoutOverlap(ids, product, products));
            setError("");
            if (checkout) router.push("/kauppa/kassa");
          } catch (e) {
            setError(
              e instanceof Error ? e.message : "Lisääminen epäonnistui.",
            );
          }
        }}
      >
        {checkout
          ? "Osta kurssi"
          : ids.includes(product.id)
            ? "Korissa ✓"
            : "Lisää ostoskoriin"}
      </button>
      {error && (
        <p className="vg-shop-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
export default function Catalog({
  products,
  selected,
}: {
  products: Product[];
  selected?: string;
}) {
  const [category, setCategory] = useState("");
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];
  return (
    <section className="vg-shop-section" id="kurssit">
      <div>
        <p className="vg-shop-eyebrow vg-shop-muted">
          Sinun tavoitteesi. Sinun kurssisi.
        </p>
        <h2>Löydä oma valmennuksesi</h2>
      </div>
      {categories.length > 0 && (
        <div
          className="vg-shop-filters"
          role="group"
          aria-label="Tuotekategoriat"
        >
          {["", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c || "Kaikki kurssit"}
            </button>
          ))}
        </div>
      )}
      <div className="vg-shop-grid">
        {products
          .filter((p) => !category || p.category === category)
          .map((p) => (
            <article
              className={`vg-product-card ${p.course_ids.includes(selected ?? "") ? "selected" : ""}`}
              key={p.id}
            >
              {p.image_url && (
                <Image
                  src={p.image_url}
                  alt=""
                  width={600}
                  height={450}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 400px"
                  className="vg-product-image"
                />
              )}
              <span className="vg-product-badge">
                {p.category || "Valmennuskurssi"}
              </span>
              <h3>
                <Link href={`/kauppa/${p.slug}`}>{p.name}</Link>
              </h3>
              <p>{p.description}</p>
              <ul>
                <li>Henkilökohtainen kurssioikeus</li>
                {p.access_days !== null && (
                  <li>{p.access_days} päivän käyttöoikeus</li>
                )}
                <li>
                  {p.course_ids.length > 1
                    ? `${p.course_ids.length} kurssin paketti`
                    : "Oma kurssi oppimisympäristössä"}
                </li>
                <li>Turvallinen maksu Paytrailissa</li>
              </ul>
              <div className="vg-product-price">
                {p.sale_price_cents && <del>{money(p.price_cents)}</del>}
                {money(p.sale_price_cents ?? p.price_cents)}
              </div>
              <small className="vg-shop-muted">
                Sis. ALV {p.vat_percentage} %
              </small>
              <div className="vg-shop-actions">
                <AddToCart product={p} products={products} />
              </div>
              <Link
                href={`/kauppa/${p.slug}`}
                className="vg-shop-muted"
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Tutustu kurssiin →
              </Link>
            </article>
          ))}
      </div>
      {!products.length && (
        <div className="vg-shop-note">
          <h2>Kurssivalikoima päivittyy</h2>
          <p className="vg-shop-muted">
            Kurssit julkaistaan, kun niiden hinnat ja toimitustiedot on
            vahvistettu. Kysy kurssista asiakaspalvelustamme:{" "}
            <a href="mailto:info@valintaguru.com">info@valintaguru.com</a>.
          </p>
        </div>
      )}
    </section>
  );
}
