-- Public reading through RLS. All writes go through the server's admin check.
create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (length(slug) between 1 and 120 and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (length(trim(title)) between 1 and 200),
  excerpt text not null check (length(trim(excerpt)) between 1 and 500),
  content text not null check (length(trim(content)) between 1 and 100000),
  category text not null check (length(trim(category)) between 1 and 80),
  author text not null check (length(trim(author)) between 1 and 100),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default clock_timestamp()
);
alter table public.blog_posts enable row level security;
revoke all on public.blog_posts from anon, authenticated;
grant select on public.blog_posts to anon, authenticated;
grant select, insert, update, delete on public.blog_posts to service_role;
create policy blog_public_read on public.blog_posts for select to anon, authenticated
  using (published_at is not null and published_at <= now());
create index blog_posts_publication on public.blog_posts (published_at desc) where published_at is not null;
create function public.blog_set_updated_at() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  new.updated_at = clock_timestamp();
  return new;
end;
$$;
revoke all on function public.blog_set_updated_at() from public, anon, authenticated;
create trigger blog_posts_updated before update on public.blog_posts
  for each row execute function public.blog_set_updated_at();
