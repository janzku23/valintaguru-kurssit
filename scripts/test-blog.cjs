const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const Module = require('node:module');
const path = require('node:path');
const ts = require('typescript');
const { PGlite } = require('@electric-sql/pglite');
let auth = { error: Response.json({error:'Forbidden'}, {status:403}) };
function load(file) {
 const absolute=path.resolve(__dirname,'..',file), mod=new Module(absolute,module); mod.paths=module.paths;
 mod.require=id=>id==='@/lib/adminAccess'?{requireAdminApi:async()=>auth}:id.startsWith('@/')?load(id.slice(2)+'.ts'):require(id);
 mod._compile(ts.transpileModule(fs.readFileSync(absolute,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,absolute);
 return mod.exports;
}
const {validateBlogInput,blogSlug}=load('lib/blog/model.ts');
const valid={title:'Näin pääset alkuun',slug:'',excerpt:'Tiivistelmä',content:'## Otsikko\n\nTeksti',category:'Opiskelu',author:'ValintaGuru',published:false};
test('Finnish slugs, required fields and untrusted publication values',()=>{
 assert.equal(blogSlug(valid.title),'nain-paaset-alkuun');
 assert.equal(validateBlogInput(valid).slug,'nain-paaset-alkuun');
 for(const patch of [{title:''},{content:' '},{published:'false'},{slug:'../admin'},{slug:'ABC'},{excerpt:'x'.repeat(501)},{id:'bad'},{id:'11111111-1111-1111-1111-111111111111'}]) assert.throws(()=>validateBlogInput({...valid,...patch}));
});
test('anonymous and ordinary users cannot call the write endpoint',async()=>{
 const {POST}=load('app/api/admin/blogi/route.ts');
 for (const status of [401,403]) {
  auth={error:Response.json({error:'Forbidden'},{status})};
  const response=await POST(new Request('https://example.test/api/admin/blogi',{method:'POST',body:JSON.stringify(valid)}));
  assert.equal(response.status,status);
 }
});
test('PostgreSQL: published public reading, private drafts, no public writes, unique slugs and revisions',async()=>{
 const db=new PGlite();
 try {
  await db.exec('create role anon;create role authenticated;create role service_role bypassrls;');
  await db.exec(fs.readFileSync(path.join(__dirname,'../supabase/migrations/20261125191510_public_blog_posts.sql'),'utf8'));
  await db.exec(`insert into blog_posts(slug,title,excerpt,content,category,author,published_at) values
   ('public','Public','Excerpt','Content','Category','Author',now()),
   ('draft','Draft','Excerpt','Content','Category','Author',null),
   ('future','Future','Excerpt','Content','Category','Author',now()+interval '1 day');`);
  for (const role of ['anon','authenticated']) {
   await db.exec(`set role ${role}`);
   assert.deepEqual((await db.query('select slug from blog_posts')).rows,[{slug:'public'}]);
   assert.deepEqual((await db.query("select slug from blog_posts where slug='draft'")).rows,[]);
   await assert.rejects(db.exec("insert into blog_posts(slug,title,excerpt,content,category,author) values('attack','Attack','x','x','x','x')"));
   await assert.rejects(db.exec("update blog_posts set published_at=now() where slug='draft'"));
   await assert.rejects(db.exec("delete from blog_posts"));
   await db.exec('reset role');
  }
  await db.exec('set role service_role');
  assert.equal((await db.query('select * from blog_posts')).rows.length,3);
  const before=(await db.query("select updated_at::text as revision from blog_posts where slug='draft'")).rows[0].revision;
  await db.exec("update blog_posts set title='Changed',published_at=now() where slug='draft'");
  const stale=await db.query("update blog_posts set title='Stale' where slug='draft' and updated_at=$1 returning id",[before]);
  assert.equal(stale.rows.length,0);
  await db.exec("update blog_posts set published_at=null where slug='public'");
  await db.exec('reset role;set role anon');
  assert.deepEqual((await db.query('select slug from blog_posts')).rows,[{slug:'draft'}]);
  await db.exec('reset role');
  await assert.rejects(db.exec("insert into blog_posts select * from blog_posts where slug='draft'"));
 } finally {await db.close();}
});
test('admin can save drafts and publish; stale saves and duplicate slugs report conflicts',async()=>{
 const saved={id:'11111111-1111-1111-1111-111111111111',...valid,slug:'nain-paaset-alkuun',published_at:null,updated_at:'2026-11-25T18:00:00.000Z'};
 let payload, result={data:saved,error:null};
 const chain={eq(){return this;},select(){return this;},maybeSingle:async()=>result};
 auth={user:{id:'admin'},admin:{from(){return {insert(row){payload=row;return chain;},update(row){payload=row;return chain;},select(){return {eq(){return {maybeSingle:async()=>({data:{published_at:null},error:null})};}}}};}}};
 const {POST}=load('app/api/admin/blogi/route.ts');
 const req=(body,origin='https://example.test')=>new Request('https://example.test/api/admin/blogi',{method:'POST',headers:{'Content-Type':'application/json',origin},body:JSON.stringify(body)});
 assert.equal((await POST(req(valid))).status,200);assert.equal(payload.published_at,null);
 assert.equal((await POST(req({...valid,published:true}))).status,200);assert.ok(Date.parse(payload.published_at));
 assert.equal((await POST(req(valid,'https://evil.test'))).status,403);
 assert.equal((await POST(req({...valid,content:''}))).status,400);
 result={data:null,error:null};
 assert.equal((await POST(req({...valid,id:saved.id,revision:saved.updated_at}))).status,409);
 result={data:null,error:{code:'23505'}};
 assert.equal((await POST(req(valid))).status,409);
});
test('deletion requires admin, a valid request and the current revision',async()=>{
 const {DELETE}=load('app/api/admin/blogi/route.ts');
 const input={id:'11111111-1111-1111-1111-111111111111',revision:'2026-11-25T18:00:00.000Z'};
 const req=(body=input,origin='https://example.test')=>new Request('https://example.test/api/admin/blogi',{method:'DELETE',headers:{'Content-Type':'application/json',origin},body:JSON.stringify(body)});
 for (const status of [401,403]) {
  auth={error:Response.json({error:'Forbidden'},{status})};
  assert.equal((await DELETE(req())).status,status);
 }
 let filters=[],deleted=false,result={data:{id:input.id},error:null};
 const chain={eq(field,value){filters.push([field,value]);return this;},select(){return this;},maybeSingle:async()=>result};
 auth={user:{id:'admin'},admin:{from(table){assert.equal(table,'blog_posts');return {delete(){deleted=true;return chain;}}}}};
 assert.equal((await DELETE(req(input,'https://evil.test'))).status,403);
 for (const body of [null,{}, {...input,id:'bad'}, {...input,revision:'invalid'}]) assert.equal((await DELETE(req(body))).status,400);
 assert.equal(deleted,false);
 const response=await DELETE(req());
 assert.equal(response.status,200);assert.deepEqual(await response.json(),{deleted:true});
 assert.deepEqual(filters,[['id',input.id],['updated_at',input.revision]]);
 result={data:null,error:null};
 assert.equal((await DELETE(req())).status,409);
 result={data:null,error:{code:'failure'}};
 assert.equal((await DELETE(req())).status,500);
});
