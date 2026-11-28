-- Shared member notices. The server's admin check authorizes all writes.
create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null check (length(trim(title)) between 1 and 120),
  content text not null check (length(trim(content)) between 1 and 1000),
  created_at timestamptz not null default clock_timestamp()
);

alter table public.announcements enable row level security;
revoke all on public.announcements from public, anon, authenticated, service_role;
grant select on public.announcements to authenticated;
grant select, insert, delete on public.announcements to service_role;

create policy announcements_member_read on public.announcements
  for select to authenticated
  using ((select auth.uid()) is not null);

create index announcements_chronological on public.announcements (created_at desc, id desc);
