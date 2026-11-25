import Link from "next/link";
import { requireAdminPage } from "@/lib/adminAccess";
import { createAdminClient } from "@/utils/supabase/admin";
import { BLOG_FIELDS, type BlogPost } from "@/lib/blog/model";
import BlogEditor from "@/components/blog/BlogEditor";
export const metadata = { title: "Blogin hallinta", robots: { index: false, follow: false } };
export default async function AdminBlogPage() {
  await requireAdminPage();
  const { data, error } = await createAdminClient().from("blog_posts").select(BLOG_FIELDS).order("updated_at", { ascending: false });
  return <><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Sisällönhallinta</p><h1 className="mt-3 text-3xl font-extrabold">Blogi</h1><p className="mt-3 max-w-2xl leading-7 text-slate-600">Kirjoita ja julkaise artikkeleita sivustolla. Luonnokset näkyvät vain ylläpitäjälle. Julkaistut kirjoitukset ovat kaikkien luettavissa ilman kirjautumista.</p><Link href="/blogi" className="mt-4 inline-block font-bold text-blue-700">Avaa julkinen blogi →</Link>{error ? <p role="alert" className="mt-8 rounded-xl bg-red-50 p-5 text-red-800">Blogin tallennustilaa ei voitu avata. Päivitä sivu ja yritä uudelleen.</p> : <BlogEditor initialPosts={(data ?? []) as BlogPost[]} />}</>;
}
