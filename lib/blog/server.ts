import "server-only";
import { cache } from "react";
import { createClient } from "@supabase/supabase-js";
import { BLOG_FIELDS, type BlogPost } from "./model";

// Public queries deliberately use the anonymous role, without a login cookie.
function publicBlogClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
export async function listPublishedPosts() {
  const { data, error } = await publicBlogClient().from("blog_posts").select(BLOG_FIELDS)
    .not("published_at", "is", null).lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });
  if (error) throw new Error("Blogikirjoituksia ei voitu hakea.", { cause: error });
  return (data ?? []) as BlogPost[];
}
export const getPublishedPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await publicBlogClient().from("blog_posts").select(BLOG_FIELDS)
    .eq("slug", slug).not("published_at", "is", null).lte("published_at", new Date().toISOString()).maybeSingle();
  if (error) throw new Error("Blogikirjoitusta ei voitu hakea.", { cause: error });
  return data as BlogPost | null;
});
