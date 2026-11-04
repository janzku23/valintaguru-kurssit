"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHomeAuth } from "@/app/home/HomeAuthProvider";
import { useCart } from "./cart";
import { cartWithoutOverlap } from "@/lib/shop/cart-model";
import { money, type Product } from "@/lib/shop/types";

export function AddToCart({
  product,
  products,
}: {
  product: Product;
  products: Product[];
}) {
  const { ids, setIds, ready } = useCart();
  const { ownedCourseIds, loading } = useHomeAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const owned =
    product.course_ids.length > 0 &&
    product.course_ids.every((courseId) =>
      ownedCourseIds.some((id) => id === courseId),
    );
  if (owned)
    return (
      <Link
        className="vg-shop-btn secondary"
        href={
          product.course_ids.length === 1
            ? `/kurssi/${product.course_ids[0]}`
            : "/#omat-kurssit"
        }
      >
        Kurssi on jo käytössäsi
      </Link>
    );

  if (ids.includes(product.id))
    return (
      <Link className="vg-shop-btn" href="/kauppa/kassa">
        Siirry kassalle
      </Link>
    );

  const overlaps = products.some(
    (item) =>
      ids.includes(item.id) &&
      item.course_ids.some((id) => product.course_ids.includes(id)),
  );
  if (overlaps)
    return (
      <Link className="vg-shop-btn secondary" href="/kauppa/ostoskori">
        Näytä ostoskori
      </Link>
    );

  return (
    <>
      <button
        className="vg-shop-btn"
        disabled={!ready || loading}
        type="button"
        onClick={() => {
          try {
            setIds(cartWithoutOverlap(ids, product, products));
            setError("");
            router.push("/kauppa/kassa");
          } catch (error) {
            setError(
              error instanceof Error
                ? error.message
                : "Ostoskorin päivittäminen epäonnistui.",
            );
          }
        }}
      >
        Osta kurssi
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
  if (!products.length)
    return (
      <p className="vg-shop-muted">Kaupassa ei ole tällä hetkellä kursseja.</p>
    );
  return (
    <section
      className="vg-shop-grid"
      id="kurssit"
      aria-label="Ostettavat kurssit"
    >
      {products.map((product) => (
        <article
          className={`vg-product-card ${selected && product.course_ids.includes(selected) ? "selected" : ""}`}
          key={product.id}
        >
          <h2>
            <Link href={`/kauppa/${product.slug}`}>{product.name}</Link>
          </h2>
          <div className="vg-product-price">
            {money(product.sale_price_cents ?? product.price_cents)}
          </div>
          {product.vat_percentage !== null && (
            <small className="vg-shop-muted">
              Sis. ALV{" "}
              {new Intl.NumberFormat("fi-FI").format(product.vat_percentage)} %
            </small>
          )}
          <div className="vg-shop-actions">
            <AddToCart product={product} products={products} />
          </div>
        </article>
      ))}
    </section>
  );
}
