-- Unlimited access uses NULL, never a distant artificial expiration date.
-- Existing finite products, orders and manual rights keep their original durations.
begin;
do $$ declare c record; begin
 for c in select conname from pg_constraint where conrelid='public.shop_products'::regclass and contype='c'
  and pg_get_constraintdef(oid) like '%published%' and pg_get_constraintdef(oid) like '%access_days%' loop
  execute format('alter table public.shop_products drop constraint %I',c.conname);
 end loop;
end $$;
alter table public.shop_products drop constraint if exists shop_products_publish_ready;
alter table public.shop_products add constraint shop_products_publish_ready check(not published or (reviewed and vat_percentage is not null and legal_kind is not null));
alter table public.shop_order_items alter column access_days drop not null;
alter table public.shop_entitlement_grants alter column expires_at drop not null;
drop policy if exists shop_expiry_guard on public.student_courses;
create policy shop_expiry_guard on public.student_courses as restrictive for select to authenticated
 using(shop_manual_access or (user_id=auth.uid() and status in ('active','käytössä','enabled','kaytossa')
  and (shop_access_until is null or shop_access_until>now()) and (select public.shop_email_verified())));
create or replace function public.shop_refresh_access(p_user uuid,p_course text) returns void
language plpgsql security definer set search_path=public,pg_temp as $$
declare until_at timestamptz; unlimited boolean; begin
 perform pg_advisory_xact_lock(hashtextextended(p_user::text||':'||p_course,0));
 select max(expires_at), coalesce(bool_or(expires_at is null),false) into until_at, unlimited from shop_entitlement_grants where user_id=p_user and course_id=p_course and revoked_at is null;
 perform set_config('valintaguru.shop_write','1',true);
 update student_courses set shop_access_until=case when unlimited then null else coalesce(until_at,'epoch'::timestamptz) end,
 status=case when unlimited or until_at>now() then 'käytössä' else 'inactive' end
 where user_id=p_user and course_id=p_course and not shop_manual_access;
 perform set_config('valintaguru.shop_write','0',true);
end $$;

create or replace function public.shop_preserve_manual() returns trigger
language plpgsql set search_path=public,pg_temp as $$ begin
 if current_setting('valintaguru.shop_write',true) is distinct from '1' then
 if TG_OP='DELETE' then
 if exists(select 1 from shop_entitlement_grants where user_id=old.user_id and course_id=old.course_id and revoked_at is null and (expires_at is null or expires_at>now())) then raise exception 'Maksettua kurssioikeutta ei voi poistaa. Muokkaa manuaalista oikeutta kaupan suojatulla toiminnolla.'; end if;
 return old;
 end if;
 new.shop_manual_access=new.status in ('käytössä','active','enabled','kaytossa');
 end if;
 return new;
end $$;

create or replace function public.shop_fulfill(p_order uuid,p_user uuid,p_new boolean) returns void
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
 values(i.id,c,p_user,case when i.access_days is null then null else o.paid_at+make_interval(days=>i.access_days) end,case when exists(select 1 from shop_refunds where order_id=o.id and status='ok' and i.id=any(revoke_item_ids)) then now() else null end)
 on conflict(item_id,course_id)do nothing;
 insert into student_courses(user_id,email,course_id,course_slug,course_title,title,status,shop_manual_access,shop_access_until)
 values(p_user,o.email,c,c,i.name,i.name,'käytössä',false,case when i.access_days is null then null else o.paid_at+make_interval(days=>i.access_days) end) on conflict(user_id,course_id)do nothing;
 perform shop_refresh_access(p_user,c); perform set_config('valintaguru.shop_write','1',true);
 end loop; end loop;
 perform set_config('valintaguru.shop_write','0',true);
 update shop_orders set user_id=p_user,new_user=p_new,fulfillment_status='delivered' where id=o.id;
 insert into shop_jobs(order_id,kind,dedupe_key)values(o.id,'receipt','receipt:'||o.id),(o.id,'access','access:'||o.id) on conflict(dedupe_key)do nothing;
 insert into shop_events(order_id,kind)values(o.id,'delivered');
end $$;
revoke all on function public.shop_refresh_access(uuid,text), public.shop_preserve_manual(), public.shop_fulfill(uuid,uuid,boolean) from public,anon,authenticated;
grant execute on function public.shop_refresh_access(uuid,text), public.shop_preserve_manual(), public.shop_fulfill(uuid,uuid,boolean) to service_role;
commit;
notify pgrst,'reload schema';
