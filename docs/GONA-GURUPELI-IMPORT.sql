create table public.gona_gurupeli_questions (
 id text primary key check (id ~ '^gona-[a-z0-9-]{1,120}$'),
 ordinal bigint generated always as identity (start with 1000000) unique not null,
 category text not null check (category in ('valintakoe-g','oikis','shared')),
 question jsonb not null check (jsonb_typeof(question)='object' and question->>'id' is not null and question->>'id'=id),
 content_hash text not null check (content_hash ~ '^[a-f0-9]{64}$'),
 source_batch text not null,
 approved_at timestamptz not null,
 created_at timestamptz not null default now(),
 status text not null default 'active' check (status in ('active','probe','withdrawn'))
);
alter table public.gona_gurupeli_questions enable row level security;
revoke all on public.gona_gurupeli_questions from public, anon, authenticated;
grant select, insert, update on public.gona_gurupeli_questions to service_role;
grant usage, select on sequence public.gona_gurupeli_questions_ordinal_seq to service_role;
comment on table public.gona_gurupeli_questions is 'Only owner-approved GONA AI GuruPeli imports. Answer keys are server-only; no client grants or RLS policies. Stable append-only order preserves existing progress.';
