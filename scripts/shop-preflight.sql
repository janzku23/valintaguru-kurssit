-- READ ONLY. Run in the current Supabase SQL editor before applying the shop migration.
-- Contains schema metadata only, no customer rows or credentials.
select table_name,column_name,data_type,is_nullable,column_default
from information_schema.columns
where table_schema='public' and table_name in ('student_courses','course_entitlements','profiles')
order by table_name,ordinal_position;

select tablename,indexname,indexdef from pg_indexes
where schemaname='public' and tablename in ('student_courses','course_entitlements');

select conrelid::regclass::text as table_name,conname,pg_get_constraintdef(oid) as definition
from pg_constraint where conrelid in ('public.student_courses'::regclass,'public.course_entitlements'::regclass);

select tablename,policyname,permissive,roles,cmd,qual,with_check from pg_policies
where schemaname='public' and tablename in ('student_courses','course_entitlements');

select tgrelid::regclass::text as table_name,tgname,pg_get_triggerdef(oid) as definition
from pg_trigger where not tgisinternal and tgrelid in ('public.student_courses'::regclass,'public.course_entitlements'::regclass);

select table_name from information_schema.tables where table_schema='public'
and table_name ~ '(shop|product|order|payment|discount|refund)';
