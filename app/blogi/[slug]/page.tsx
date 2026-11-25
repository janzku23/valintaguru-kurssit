import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPost } from "@/lib/blog/server";
import { blogDate, readingMinutes } from "@/lib/blog/model";
import BlogContent from "@/components/blog/BlogContent";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  if (!post) return { title: "Kirjoitusta ei löytynyt" };
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blogi/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/blogi/${post.slug}`, publishedTime: post.published_at!, modifiedTime: post.updated_at, authors: [post.author], images: ["/og-image.png"] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/og-image.png"] } };
}
export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt,
    datePublished: post.published_at, dateModified: post.updated_at, inLanguage: "fi-FI",
    author: { "@type": "Organization", name: post.author }, publisher: { "@type": "Organization", name: "ValintaGuru" },
    mainEntityOfPage: `https://www.valintaguru.fi/blogi/${post.slug}`, image: "https://www.valintaguru.fi/og-image.png" };
  return <main className="min-h-screen bg-[#f5f8ff] px-5 py-12 text-slate-950 sm:py-20">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <div className="mx-auto max-w-3xl"><nav aria-label="Murupolku" className="mb-8 flex gap-3 text-sm font-bold text-blue-700"><Link href="/">Etusivu</Link><span aria-hidden="true">/</span><Link href="/blogi">Blogi</Link></nav>
      <article className="min-w-0 break-words rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">{post.category}</p>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-6 text-sm leading-6 text-slate-500">{post.author} · <time dateTime={post.published_at!}>{blogDate(post.published_at!)}</time> · {readingMinutes(post.content)} min lukuaika</p>
        <p className="mb-10 mt-8 border-b border-slate-100 pb-8 text-xl leading-8 text-slate-600">{post.excerpt}</p>
        <BlogContent content={post.content} />
      </article>
      <Link href="/blogi" className="mt-8 inline-block font-bold text-blue-700">← Kaikki kirjoitukset</Link>
      <aside className="mt-10 rounded-3xl bg-blue-700 p-8 text-white"><h2 className="text-2xl font-extrabold">Vie vinkit käytäntöön</h2><p className="mt-3 leading-7 text-blue-100">Tutustu ValintaGurun valmennuskursseihin ja löydä oma tapasi valmistautua.</p><Link href="/valintakoe-g" className="mt-5 inline-block rounded-full bg-white px-6 py-3 font-bold text-blue-700">Tutustu valmennukseen →</Link></aside>
    </div>
  </main>;
}
