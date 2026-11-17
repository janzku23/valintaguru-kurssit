import {createSupabaseAdmin} from '@/lib/supabase/server-admin';
export const dynamic='force-dynamic';
export async function GET(){try{const {error}=await createSupabaseAdmin().from('gona_gurupeli_questions').select('id').limit(1);return Response.json({destination:'gurupeli',version:'gona-gurupeli-import-v1',ready:!error},{status:error?503:200,headers:{'Cache-Control':'no-store'}})}catch{return Response.json({destination:'gurupeli',ready:false},{status:503,headers:{'Cache-Control':'no-store'}})}}
