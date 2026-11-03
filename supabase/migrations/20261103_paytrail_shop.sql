-- Compare against the live schema before application. No existing users/materials are replaced.
begin;
do $$ begin
 if to_regclass('public.student_courses') is null then raise exception 'Missing existing student_courses: provide live schema first'; end if;
 if exists(select 1 from (values ('user_id'),('email'),('course_id'),('course_slug'),('course_title'),('title'),('status')) x(c)
   where not exists(select 1 from information_schema.columns where table_schema='public' and table_name='student_courses' and column_name=x.c))
 then raise exception 'student_courses differs from audited application contract'; end if;
 if not exists(select 1 from pg_index where indrelid='public.student_courses'::regclass and indisunique
   and pg_get_indexdef(indexrelid) ~ '\(user_id, course_id\)') then raise exception 'Expected existing unique (user_id,course_id) index'; end if;
end $$;

create table public.shop_environment (
 id boolean primary key default true check(id), mode text not null check(mode in ('test','production')),
 project_ref text not null, merchant_id text not null
);
-- Configure this explicitly in the selected database, never automatically in application code.
create table public.shop_products (
 id uuid primary key default gen_random_uuid(), slug text unique not null check(slug ~ '^[a-z0-9-]{1,80}$'),
 name text not null check(length(name) between 1 and 160), description text not null default '', category text not null default '',
 content text not null default '', audience text not null default '', price_cents integer not null check(price_cents between 1 and 99999999),
 sale_price_cents integer check(sale_price_cents > 0 and sale_price_cents < price_cents), currency text not null default 'EUR' check(currency='EUR'),
 vat_percentage numeric(4,1) check(vat_percentage between 0 and 100),
 course_ids text[] not null check(cardinality(course_ids) between 1 and 20),
 access_days integer check(access_days between 1 and 3650), legal_kind text check(legal_kind in ('digital_content','service')),
 published boolean not null default false, visible boolean not null default true, archived boolean not null default false,
 reviewed boolean not null default false, sort_order integer not null default 0, image_url text,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 check(not published or (reviewed and vat_percentage is not null and access_days is not null and legal_kind is not null)),
 check(course_ids <@ array['oikis','oikis-tiivis','oikis-teho','oikis-teho-etaope','valintakoe-g','valintakoe-g-etaope','yo']::text[])
);
create table public.shop_discounts (
 id uuid primary key default gen_random_uuid(), code text unique not null check(code ~ '^[A-Z0-9_-]{3,40}$'),
 kind text not null check(kind in ('percent','fixed')), value integer not null check(value>0),
 active boolean not null default true, starts_at timestamptz not null default now(), ends_at timestamptz,
 max_uses integer check(max_uses>0), product_ids uuid[] not null default '{}', created_at timestamptz not null default now(),
 check(kind<>'percent' or value<=100), check(ends_at is null or ends_at>starts_at)
);
create table public.shop_orders (
 id uuid primary key default gen_random_uuid(), number bigint generated always as identity unique,
 request_key text unique not null, access_hash text not null, email text not null, customer_name text not null,
 mode text not null check(mode in ('test','production')), merchant_id text not null,
 status text not null default 'unpaid' check(status in ('unpaid','paid','partially_refunded','refunded')),
 amount_cents integer not null check(amount_cents>0), discount_cents integer not null default 0, currency text not null default 'EUR' check(currency='EUR'),
 discount_id uuid references public.shop_discounts(id), reservation_until timestamptz not null default now()+interval '30 minutes',
 user_id uuid references auth.users(id), fulfillment_status text not null default 'pending' check(fulfillment_status in ('pending','delivered')),
 terms_version text not null, terms_snapshot jsonb not null, immediate_consent boolean not null, withdrawal_ack boolean not null,
 consent_at timestamptz not null default now(), created_at timestamptz not null default now(), paid_at timestamptz,
 cancellation_requested_at timestamptz, cancellation_name text,
 new_user boolean not null default false
);
create table public.shop_order_items (
 id uuid primary key default gen_random_uuid(), order_id uuid not null references public.shop_orders(id),
 product_id uuid not null references public.shop_products(id), name text not null, price_cents integer not null,
 discount_cents integer not null, total_cents integer not null check(total_cents>=0), vat_percentage numeric(4,1) not null,
 course_ids text[] not null, access_days integer not null, legal_kind text not null,
 description text not null, unique(order_id,product_id)
);
create table public.shop_payments (
 id uuid primary key default gen_random_uuid(), order_id uuid not null references public.shop_orders(id),
 transaction_id uuid unique, stamp text unique not null, status text not null default 'creating'
 check(status in ('creating','unknown','new','ok','fail','pending','delayed')),
 href text, provider text, request_id text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index shop_payment_order on public.shop_payments(order_id,created_at);
create table public.shop_refunds (
 id uuid primary key default gen_random_uuid(), order_id uuid not null references public.shop_orders(id),
 payment_id uuid not null references public.shop_payments(id), transaction_id uuid unique,
 amount_cents integer not null check(amount_cents>0), revoke_item_ids uuid[] not null default '{}',
 status text not null default 'creating' check(status in ('creating','unknown','pending','ok','fail')),
 created_by uuid not null references auth.users(id), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
-- Provenance only: all access checks still use existing student_courses, never this ledger.
create table public.shop_entitlement_grants (
 item_id uuid not null references public.shop_order_items(id), course_id text not null, user_id uuid not null references auth.users(id),
 expires_at timestamptz not null, revoked_at timestamptz, primary key(item_id,course_id)
);
alter table public.student_courses add column shop_manual_access boolean not null default true;
alter table public.student_courses add column shop_access_until timestamptz;
-- Inactive legacy rows must not prevent activating a subsequently purchased right.
update public.student_courses set shop_manual_access=false where status is not null and status not in ('käytössä','active','enabled','kaytossa');
-- Existing manual rows retain their current status and unlimited behaviour.
create policy shop_expiry_guard on public.student_courses as restrictive for select to authenticated
 using(shop_manual_access or shop_access_until is null or shop_access_until>now());
create function public.shop_email_verified() returns boolean
language sql stable security definer set search_path=public,pg_temp as $$
 select exists(select 1 from auth.users where id=auth.uid() and email_confirmed_at is not null and deleted_at is null)
$$;
drop policy shop_expiry_guard on public.student_courses;
create policy shop_expiry_guard on public.student_courses as restrictive for select to authenticated
 using(shop_manual_access or (user_id=auth.uid() and shop_access_until>now() and (select public.shop_email_verified())));
revoke all on public.student_courses from anon;
-- Browser grants are never trusted for entitlement writes. Existing server admin endpoints remain usable.
revoke insert,update,delete on public.student_courses from anon,authenticated;

create table public.shop_jobs (
 id uuid primary key default gen_random_uuid(), order_id uuid not null references public.shop_orders(id),
 kind text not null check(kind in ('fulfill','receipt','access','pending','refund','cancel')),
 dedupe_key text unique not null, refund_id uuid references public.shop_refunds(id),
 status text not null default 'queued' check(status in ('queued','running','done')),
 attempts integer not null default 0, available_at timestamptz not null default now(), lease_until timestamptz, lease_token uuid,
 last_error text, created_at timestamptz not null default now()
);
create table public.shop_events (
 id bigint generated always as identity primary key, order_id uuid references public.shop_orders(id),
 kind text not null, reference_id text, created_at timestamptz not null default now()
);
create table public.shop_rate_limits (key text primary key, hits integer not null, expires_at timestamptz not null);

-- Fail closed: shop tables have no browser access, including public catalog (served by filtered server query).
do $$ declare t text; begin
 foreach t in array array['shop_environment','shop_products','shop_discounts','shop_orders','shop_order_items','shop_payments','shop_refunds','shop_entitlement_grants','shop_jobs','shop_events','shop_rate_limits'] loop
 execute format('alter table public.%I enable row level security',t);
 execute format('revoke all on public.%I from anon, authenticated',t);
 execute format('grant all on public.%I to service_role',t);
 end loop;
end $$;
grant usage,select on sequence public.shop_orders_number_seq, public.shop_events_id_seq to service_role;

create function public.shop_rate(p_key text,p_limit integer,p_seconds integer) returns boolean
language plpgsql security definer set search_path=public,pg_temp as $$
declare n integer; begin
 insert into shop_rate_limits(key,hits,expires_at) values(p_key,1,now()+make_interval(secs=>p_seconds))
 on conflict(key) do update set hits=case when shop_rate_limits.expires_at<now() then 1 else shop_rate_limits.hits+1 end,
 expires_at=case when shop_rate_limits.expires_at<now() then excluded.expires_at else shop_rate_limits.expires_at end returning hits into n;
 return n<=p_limit;
end $$;

-- Quote and checkout use exactly the same SQL arithmetic. Fixed discounts allocated in cents, including VAT.
create function public.shop_quote(p_products uuid[],p_code text default '') returns jsonb
language plpgsql security definer set search_path=public,pg_temp as $$
declare d shop_discounts; p shop_products; lines jsonb='[]'; subtotal integer=0; eligible integer=0; reduction integer=0; used integer; n integer=0; v integer; part integer; remaining integer; ids text[]='{}'; c text;
begin
 if cardinality(p_products) not between 1 and 20 or cardinality(p_products)<>(select count(distinct x) from unnest(p_products)x) then raise exception 'Virheellinen ostoskori'; end if;
 if p_code<>'' then
 select * into d from shop_discounts where code=upper(trim(p_code)) for update;
 if not found or not d.active or now()<d.starts_at or (d.ends_at is not null and now()>=d.ends_at) then raise exception 'Alennuskoodi ei ole voimassa'; end if;
 select count(*) into used from shop_orders where discount_id=d.id and (status<>'unpaid' or reservation_until>now() or exists(select 1 from shop_payments where order_id=shop_orders.id and status<>'fail'));
 if d.max_uses is not null and used>=d.max_uses then raise exception 'Alennuskoodin käyttökerrat on käytetty'; end if;
 end if;
 for p in select * from shop_products where id=any(p_products) order by id for share loop
 if not p.published or p.archived or not p.reviewed then raise exception 'Tuote ei ole myynnissä'; end if;
 foreach c in array p.course_ids loop
 if c=any(ids) then raise exception 'Sama kurssioikeus on korissa kahdesti'; end if; ids=array_append(ids,c);
 end loop;
 n=n+1; v=coalesce(p.sale_price_cents,p.price_cents); subtotal=subtotal+v;
 if d.id is not null and (cardinality(d.product_ids)=0 or p.id=any(d.product_ids)) then eligible=eligible+v; end if;
 end loop;
 if n<>cardinality(p_products) then raise exception 'Tuotetta ei löytynyt'; end if;
 if d.id is not null and eligible=0 then raise exception 'Koodi ei koske näitä tuotteita'; end if;
 if d.id is not null then reduction=least(subtotal-1,eligible,case when d.kind='percent' then (eligible::bigint*d.value/100)::integer else d.value end); end if;
 remaining=reduction;
 for p in select * from shop_products where id=any(p_products) order by id loop
 v=coalesce(p.sale_price_cents,p.price_cents); part=0;
 if d.id is not null and (cardinality(d.product_ids)=0 or p.id=any(d.product_ids)) then
 -- sequential proportional allocation uses remaining eligible value to allocate rounding exactly.
 part=case when eligible=v then remaining else (remaining::bigint*v/eligible)::integer end;
 eligible=eligible-v; remaining=remaining-part;
 end if;
 lines=lines||jsonb_build_object('product_id',p.id,'name',p.name,'price_cents',v,'discount_cents',part,'total_cents',v-part,'vat_percentage',p.vat_percentage,'course_ids',p.course_ids,'access_days',p.access_days,'legal_kind',p.legal_kind,'description',p.description);
 end loop;
 if subtotal-reduction>99999999 then raise exception 'Ostoskorin summa on liian suuri'; end if;
 return jsonb_build_object('items',lines,'subtotal_cents',subtotal,'discount_cents',reduction,'amount_cents',subtotal-reduction,'discount_id',d.id,'currency','EUR');
end $$;

create function public.shop_checkout(p_products uuid[],p_code text,p_email text,p_name text,p_hash text,p_key text,p_mode text,p_merchant text,p_terms jsonb,p_immediate boolean,p_ack boolean,p_expected integer) returns uuid
language plpgsql security definer set search_path=public,pg_temp as $$
declare q jsonb; oid uuid; line jsonb; begin
 perform pg_advisory_xact_lock(hashtextextended(p_key,0));
 select id into oid from shop_orders where request_key=p_key;
 if found then return oid; end if;
 q=shop_quote(p_products,p_code);
 if (q->>'amount_cents')::integer<>p_expected then raise exception 'Hinta muuttui. Tarkista ostoskorin uusi summa'; end if;
 if not p_immediate then raise exception 'Välittömän toimituksen pyyntö puuttuu'; end if;
 if exists(select 1 from jsonb_array_elements(q->'items')x where x->>'legal_kind'='digital_content') and not p_ack then raise exception 'Digitaalisen sisällön suostumus puuttuu'; end if;
 insert into shop_orders(request_key,access_hash,email,customer_name,mode,merchant_id,amount_cents,discount_cents,discount_id,terms_version,terms_snapshot,immediate_consent,withdrawal_ack)
 values(p_key,p_hash,p_email,p_name,p_mode,p_merchant,(q->>'amount_cents')::integer,(q->>'discount_cents')::integer,(q->>'discount_id')::uuid,p_terms->>'version',p_terms,p_immediate,p_ack) returning id into oid;
 for line in select * from jsonb_array_elements(q->'items') loop
 insert into shop_order_items(order_id,product_id,name,price_cents,discount_cents,total_cents,vat_percentage,course_ids,access_days,legal_kind,description)
 values(oid,(line->>'product_id')::uuid,line->>'name',(line->>'price_cents')::integer,(line->>'discount_cents')::integer,(line->>'total_cents')::integer,(line->>'vat_percentage')::numeric,array(select jsonb_array_elements_text(line->'course_ids')),(line->>'access_days')::integer,line->>'legal_kind',line->>'description');
 end loop;
 insert into shop_events(order_id,kind)values(oid,'order_created'); return oid;
end $$;

create function public.shop_start_payment(p_order uuid) returns jsonb
language plpgsql security definer set search_path=public,pg_temp as $$
declare o shop_orders; p shop_payments; begin
 select * into o from shop_orders where id=p_order for update;
 if not found or o.status<>'unpaid' then raise exception 'Tilausta ei voi maksaa'; end if;
 select * into p from shop_payments where order_id=p_order and status<>'fail' order by created_at desc limit 1;
 if found then return jsonb_build_object('payment',to_jsonb(p),'created',false); end if;
 insert into shop_payments(order_id,stamp)values(p_order,gen_random_uuid()::text) returning * into p;
 return jsonb_build_object('payment',to_jsonb(p),'created',true);
end $$;

-- Only called after HMAC and authoritative GET verification in the server module.
create function public.shop_record_payment(p_payment uuid,p_transaction uuid,p_status text,p_amount integer,p_currency text,p_stamp text,p_reference text,p_provider text,p_request text default null) returns uuid
language plpgsql security definer set search_path=public,pg_temp as $$
declare p shop_payments; o shop_orders; begin
 select * into p from shop_payments where id=p_payment;
 select * into o from shop_orders where id=p.order_id for update;
 select * into p from shop_payments where id=p_payment for update;
 if p.id is null or p.stamp<>p_stamp or o.number::text<>p_reference or o.amount_cents<>p_amount or o.currency<>p_currency
 or (p.transaction_id is not null and p.transaction_id<>p_transaction) or p_status not in('new','ok','fail','pending','delayed') then raise exception 'Maksutiedot eivät vastaa tilausta'; end if;
 update shop_payments set transaction_id=p_transaction,status=case when status='ok' then 'ok' else p_status end,provider=p_provider,request_id=p_request,updated_at=now() where id=p.id;
 if p_status='ok' then
 update shop_orders set status='paid',paid_at=coalesce(paid_at,now()) where id=o.id and status='unpaid';
 insert into shop_jobs(order_id,kind,dedupe_key) values(o.id,'fulfill','fulfill:'||o.id) on conflict(dedupe_key)do nothing;
 elsif p_status in('pending','delayed') then
 insert into shop_jobs(order_id,kind,dedupe_key) values(o.id,'pending','pending:'||o.id) on conflict(dedupe_key)do nothing;
 end if;
 insert into shop_events(order_id,kind,reference_id)values(o.id,'payment_'||p_status,p.id::text);
 return o.id;
end $$;

create function public.shop_find_user(p_email text) returns uuid
language sql security definer set search_path=public,pg_temp as $$ select id from auth.users where lower(email)=lower(p_email) and deleted_at is null limit 1 $$;

create function public.shop_refresh_access(p_user uuid,p_course text) returns void
language plpgsql security definer set search_path=public,pg_temp as $$
declare until_at timestamptz; begin
 perform pg_advisory_xact_lock(hashtextextended(p_user::text||':'||p_course,0));
 select max(expires_at) into until_at from shop_entitlement_grants where user_id=p_user and course_id=p_course and revoked_at is null;
 perform set_config('valintaguru.shop_write','1',true);
 update student_courses set shop_access_until=coalesce(until_at,'epoch'::timestamptz),
 status=case when until_at>now() then 'käytössä' else 'inactive' end
 where user_id=p_user and course_id=p_course and not shop_manual_access;
 perform set_config('valintaguru.shop_write','0',true);
end $$;

-- Admin provisioning/upserts outside the shop explicitly become a manual source.
create function public.shop_preserve_manual() returns trigger
language plpgsql set search_path=public,pg_temp as $$ begin
 if current_setting('valintaguru.shop_write',true) is distinct from '1' then
 if TG_OP='DELETE' then
 if exists(select 1 from shop_entitlement_grants where user_id=old.user_id and course_id=old.course_id and revoked_at is null and expires_at>now()) then raise exception 'Maksettua kurssioikeutta ei voi poistaa. Muokkaa manuaalista oikeutta kaupan suojatulla toiminnolla.'; end if;
 return old;
 end if;
 new.shop_manual_access=new.status in ('käytössä','active','enabled','kaytossa');
 end if;
 return new;
end $$;
create trigger shop_manual_source before insert or update or delete on public.student_courses for each row execute function public.shop_preserve_manual();

create function public.shop_fulfill(p_order uuid,p_user uuid,p_new boolean) returns void
language plpgsql security definer set search_path=public,pg_temp as $$
declare o shop_orders; i shop_order_items; c text; begin
 select * into o from shop_orders where id=p_order for update;
 if o.status not in('paid','partially_refunded','refunded') then raise exception 'Maksua ei ole vahvistettu'; end if;
 if not exists(select 1 from auth.users where id=p_user and lower(email)=o.email and deleted_at is null) then raise exception 'Käyttäjä ei vastaa tilausta'; end if;
 if o.fulfillment_status='delivered' then return; end if;
 perform set_config('valintaguru.shop_write','1',true);
 for i in select * from shop_order_items where order_id=o.id order by id loop
 foreach c in array i.course_ids loop
 perform pg_advisory_xact_lock(hashtextextended(p_user::text||':'||c,0));
 insert into shop_entitlement_grants(item_id,course_id,user_id,expires_at,revoked_at)
 values(i.id,c,p_user,o.paid_at+make_interval(days=>i.access_days),case when exists(select 1 from shop_refunds where order_id=o.id and status='ok' and i.id=any(revoke_item_ids)) then now() else null end)
 on conflict(item_id,course_id)do nothing;
 insert into student_courses(user_id,email,course_id,course_slug,course_title,title,status,shop_manual_access,shop_access_until)
 values(p_user,o.email,c,c,i.name,i.name,'käytössä',false,o.paid_at+make_interval(days=>i.access_days)) on conflict(user_id,course_id)do nothing;
 perform shop_refresh_access(p_user,c); perform set_config('valintaguru.shop_write','1',true);
 end loop; end loop;
 perform set_config('valintaguru.shop_write','0',true);
 update shop_orders set user_id=p_user,new_user=p_new,fulfillment_status='delivered' where id=o.id;
 insert into shop_jobs(order_id,kind,dedupe_key)values(o.id,'receipt','receipt:'||o.id),(o.id,'access','access:'||o.id) on conflict(dedupe_key)do nothing;
 insert into shop_events(order_id,kind)values(o.id,'delivered');
end $$;

create function public.shop_claim_job(p_order uuid default null) returns setof public.shop_jobs
language plpgsql security definer set search_path=public,pg_temp as $$ begin
 return query update shop_jobs set status='running',attempts=attempts+1,lease_until=now()+interval '5 minutes',lease_token=gen_random_uuid()
 where id=(select id from shop_jobs where (p_order is null or order_id=p_order) and available_at<=now() and (status='queued' or (status='running' and lease_until<now())) order by available_at,created_at for update skip locked limit 1)
 returning *;
end $$;

create function public.shop_start_refund(p_order uuid,p_amount integer,p_revoke uuid[],p_admin uuid,p_id uuid) returns jsonb
language plpgsql security definer set search_path=public,pg_temp as $$
declare o shop_orders; p shop_payments; r shop_refunds; reserved bigint; begin
 select * into o from shop_orders where id=p_order for update;
 select * into r from shop_refunds where id=p_id;
 if found then
 if r.order_id<>p_order then raise exception 'Palautustunniste on jo käytössä'; end if;
 return jsonb_build_object('refund',to_jsonb(r),'created',false);
 end if;
 if o.status not in('paid','partially_refunded') then raise exception 'Tilausta ei voi palauttaa'; end if;
 select * into p from shop_payments where order_id=o.id and status='ok';
 select coalesce(sum(amount_cents),0) into reserved from shop_refunds where order_id=o.id and status<>'fail';
 if p_amount<1 or p_amount>o.amount_cents-reserved then raise exception 'Palautussumma ylittää jäljellä olevan maksun'; end if;
 if exists(select 1 from unnest(p_revoke)x where not exists(select 1 from shop_order_items where id=x and order_id=o.id)) then raise exception 'Virheellinen palautusrivi'; end if;
 insert into shop_refunds(id,order_id,payment_id,amount_cents,revoke_item_ids,created_by)values(p_id,o.id,p.id,p_amount,p_revoke,p_admin) returning * into r;
 insert into shop_events(order_id,kind,reference_id) values(o.id,'refund_requested',r.id::text);
 return jsonb_build_object('refund',to_jsonb(r),'created',true);
end $$;

create function public.shop_record_refund(p_refund uuid,p_transaction uuid,p_status text) returns void
language plpgsql security definer set search_path=public,pg_temp as $$
declare r shop_refunds; o shop_orders; g record; total bigint; begin
 select * into r from shop_refunds where id=p_refund;
 select * into o from shop_orders where id=r.order_id for update;
 select * into r from shop_refunds where id=p_refund for update;
 if r.id is null or (p_transaction is null and p_status<>'fail') or p_status not in('ok','pending','fail') or (r.transaction_id is not null and r.transaction_id<>p_transaction) then raise exception 'Virheellinen palautusvahvistus'; end if;
 update shop_refunds set transaction_id=coalesce(p_transaction,transaction_id),status=case when status='ok' then 'ok' else p_status end,updated_at=now()where id=r.id;
 if p_status='ok' then
 update shop_entitlement_grants set revoked_at=coalesce(revoked_at,now())where item_id=any(r.revoke_item_ids);
 for g in select distinct user_id,course_id from shop_entitlement_grants where item_id=any(r.revoke_item_ids) order by user_id,course_id loop perform shop_refresh_access(g.user_id,g.course_id); end loop;
 select coalesce(sum(amount_cents),0)into total from shop_refunds where order_id=o.id and status='ok';
 update shop_orders set status=case when total>=amount_cents then 'refunded' else 'partially_refunded' end where id=o.id;
 insert into shop_jobs(order_id,kind,dedupe_key,refund_id)values(o.id,'refund','refund:'||r.id,r.id)on conflict(dedupe_key)do nothing;
 end if;
 insert into shop_events(order_id,kind,reference_id)values(o.id,'refund_'||p_status,r.id::text);
end $$;

create function public.shop_manual_rights(p_user uuid,p_courses jsonb) returns void
language plpgsql security definer set search_path=public,pg_temp as $$
declare c record; x jsonb; email_at text; begin
 select email into email_at from auth.users where id=p_user;
 if email_at is null then raise exception 'Käyttäjä puuttuu'; end if;
 perform pg_advisory_xact_lock(hashtextextended(p_user::text,0));
 perform set_config('valintaguru.shop_write','1',true);
 -- All old manual rights are reset atomically, while purchased sources remain.
 for c in select course_id from student_courses where user_id=p_user order by course_id loop
 update student_courses set shop_manual_access=false where user_id=p_user and course_id=c.course_id;
 perform shop_refresh_access(p_user,c.course_id); perform set_config('valintaguru.shop_write','1',true);
 end loop;
 for x in select * from jsonb_array_elements(p_courses) loop
 insert into student_courses(user_id,email,course_id,course_slug,course_title,title,status,shop_manual_access)
 values(p_user,lower(email_at),x->>'id',x->>'id',x->>'title',x->>'title','käytössä',true)
 on conflict(user_id,course_id)do update set shop_manual_access=true,status='käytössä';
 end loop;
 perform set_config('valintaguru.shop_write','0',true);
end $$;

create function public.shop_cancel(p_order uuid,p_name text) returns void
language plpgsql security definer set search_path=public,pg_temp as $$ begin
 update shop_orders set cancellation_requested_at=coalesce(cancellation_requested_at,now()),cancellation_name=coalesce(cancellation_name,p_name)where id=p_order and status<>'unpaid';
 if not found then return; end if;
 insert into shop_jobs(order_id,kind,dedupe_key)values(p_order,'cancel','cancel:'||p_order)on conflict(dedupe_key)do nothing;
end $$;

create function public.shop_sales_stats(p_mode text) returns jsonb
language sql security definer set search_path=public,pg_temp as $$
 select jsonb_build_object(
 'orders',(select count(*)from shop_orders where mode=p_mode),
 'paid',(select count(*)from shop_orders where mode=p_mode and paid_at is not null),
 'failed',(select count(*)from shop_payments p join shop_orders o on o.id=p.order_id where o.mode=p_mode and p.status='fail'),
 'gross',(select coalesce(sum(amount_cents),0)from shop_orders where mode=p_mode and paid_at is not null),
 'refunds',(select coalesce(sum(r.amount_cents),0)from shop_refunds r join shop_orders o on o.id=r.order_id where o.mode=p_mode and r.status='ok'),
 'today',(select coalesce(sum(amount_cents),0)from shop_orders where mode=p_mode and paid_at>=date_trunc('day',now() at time zone 'Europe/Helsinki') at time zone 'Europe/Helsinki'),
 'week',(select coalesce(sum(amount_cents),0)from shop_orders where mode=p_mode and paid_at>=now()-interval '7 days'),
 'month',(select coalesce(sum(amount_cents),0)from shop_orders where mode=p_mode and paid_at>=now()-interval '30 days'),
 'chart',(select jsonb_agg(jsonb_build_object('day',to_char(day,'YYYY-MM-DD'),'amount',coalesce((select sum(amount_cents)from shop_orders where mode=p_mode and paid_at is not null and (paid_at at time zone 'Europe/Helsinki')::date=day::date),0))order by day)from generate_series((now() at time zone 'Europe/Helsinki')::date-29,(now() at time zone 'Europe/Helsinki')::date,'1 day'::interval)day),
 'top',(select coalesce(jsonb_agg(x),'[]'::jsonb)from(select i.product_id,max(i.name)name,count(*)units,sum(i.total_cents)amount from shop_order_items i join shop_orders o on o.id=i.order_id where o.mode=p_mode and o.paid_at is not null group by i.product_id order by sum(i.total_cents)desc limit 10)x)
 )
$$;

create function public.shop_check_environment(p_mode text,p_merchant text,p_ref text) returns boolean
language sql security definer set search_path=public,pg_temp as $$
 select exists(select 1 from shop_environment where id and mode=p_mode and merchant_id=p_merchant and project_ref=p_ref)
$$;

create function public.shop_maintenance() returns void
language plpgsql security definer set search_path=public,pg_temp as $$ begin
 perform set_config('valintaguru.shop_write','1',true);
 update student_courses set status='inactive' where not shop_manual_access and shop_access_until<=now() and status in ('active','käytössä','enabled');
 perform set_config('valintaguru.shop_write','0',true);
 delete from shop_rate_limits where expires_at<now()-interval '1 day';
end $$;

-- Every privileged RPC is unavailable to anon/authenticated, including future helper additions in this migration.
do $$ declare f record; begin
 for f in select oid::regprocedure as signature from pg_proc where pronamespace='public'::regnamespace and proname=any(array['shop_email_verified','shop_rate','shop_quote','shop_checkout','shop_start_payment','shop_record_payment','shop_find_user','shop_refresh_access','shop_preserve_manual','shop_fulfill','shop_claim_job','shop_start_refund','shop_record_refund','shop_manual_rights','shop_cancel','shop_sales_stats','shop_check_environment','shop_maintenance']) loop
 execute format('revoke all on function %s from public, anon, authenticated',f.signature);
 execute format('grant execute on function %s to service_role',f.signature);
 end loop;
end $$;
grant execute on function public.shop_email_verified() to authenticated;
commit;
