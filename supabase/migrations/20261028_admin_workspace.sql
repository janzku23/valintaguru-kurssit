-- Additive migration: existing course, auth, and progress tables are untouched.
begin;
create table if not exists public.admin_workspace_records (
  kind text not null check (kind in ('todo','event','follower','price','link','portfolio')),
  key text not null check (length(key) between 1 and 100),
  data jsonb not null check (jsonb_typeof(data) = 'object'),
  updated_at timestamptz not null default now(),
  primary key (kind, key)
);
alter table public.admin_workspace_records enable row level security;
-- Browser clients have no access. All requests go through the existing admin guard.
revoke all on public.admin_workspace_records from anon, authenticated;
grant select, insert, update, delete on public.admin_workspace_records to service_role;
comment on table public.admin_workspace_records is 'Admin dashboard records; service role only. No student data or credentials.';
commit;
