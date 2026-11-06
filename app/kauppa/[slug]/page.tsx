import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { catalog } from "@/lib/shop/server";
import { AddToCart } from "@/components/shop/Catalog";
import { money, accessDuration } from "@/lib/shop/types";
import { getCourseById } from "@/data/courses";
export const dynamic = "force-dynamic";

const siteUrl = "https://www.valintaguru.fi";
const socialImage = `${siteUrl}/og-image.png`;

const productTitles: Record<string, string> = {
  "valintakoe-g": "Valintakoe G verkkokurssi 2027 – Tehokurssi",
  "valintakoe-g-etaope": "Valintakoe G 2027 – Tehokurssi + etäopetus",
  "oikis-tiivis": "Oikis Tiivis 2027 – Oikeustieteen valmennuskurssi",
  "oikis-teho": "Oikis Tehokurssi 2027 – Oikeustieteen valmennuskurssi",
  "oikis-teho-etaope": "Oikis Teho 2027 – Valmennuskurssi + etäopetus",
};

type ProductPageProps = { params: Promise<{ slug: string }> };

// Share the catalog read between metadata and the page within this request.
// This does not cache prices across requests or change checkout validation.
const getProductPageData = cache(async (slug: string) => {
  const products = await catalog(true);
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return { product, products };
});

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { product } = await getProductPageData(slug);
  const title = productTitles[product.slug] ?? product.name;
  const description = product.description.replace(/\s+/g, " ").trim();
  const url = `${siteUrl}/kauppa/${encodeURIComponent(product.slug)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    // Hidden products remain reachable by direct link, but are not promoted
    // in search results or the sitemap.
    robots: {
      index: product.visible,
      follow: true,
      googleBot: { index: product.visible, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "fi_FI",
      siteName: "ValintaGuru",
      title: `${title} | ValintaGuru`,
      description,
      url,
      images: [{ url: socialImage, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ValintaGuru`,
      description,
      images: [socialImage],
    },
  };
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const { product: p, products } = await getProductPageData(slug);
  const url = `${siteUrl}/kauppa/${encodeURIComponent(p.slug)}`;
  const organization = { "@id": `${siteUrl}/#organization` };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Course", "Product"],
        "@id": `${url}#course`,
        name: p.name,
        description: p.description,
        url,
        image: p.image_url ? new URL(p.image_url, siteUrl).href : socialImage,
        inLanguage: "fi-FI",
        provider: organization,
        brand: { "@type": "Brand", name: "ValintaGuru" },
        offers: {
          "@type": "Offer",
          url,
          price: ((p.sale_price_cents ?? p.price_cents) / 100).toFixed(2),
          priceCurrency: p.currency,
          seller: organization,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Etusivu", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Kurssikauppa", item: `${siteUrl}/kauppa` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
    ],
  };
  return (
    <main className="vg-shop-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
          <div className="vg-product-price">
            {p.sale_price_cents && <del>{money(p.price_cents)}</del>}
            {money(p.sale_price_cents ?? p.price_cents)}
          </div>
          <p className="vg-shop-muted">
            Sis. ALV{" "}
            {new Intl.NumberFormat("fi-FI").format(p.vat_percentage ?? 0)} % ·
            Ei toimituskuluja
          </p>
          {p.access_days !== null && (
            <p>Käyttöoikeus {accessDuration(p.access_days)}</p>
          )}
          <div className="vg-shop-actions">
            <AddToCart product={p} products={products} />
          </div>
        </aside>
      </div>
    </main>
  );
}
