const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');
const cache = new Map();
let context = {error:Response.json({error:'Forbidden'},{status:403})};
function load(file){
 const absolute=path.resolve(__dirname,'..',file);
 if(cache.has(absolute)) return cache.get(absolute).exports;
 const mod=new Module(absolute,module); mod.paths=module.paths; cache.set(absolute,mod);
 mod.require=id=>{
  if(id==='server-only') return {};
  if(id==='@/lib/adminAccess') return {requireAdminApi:async()=>context};
  if(id==='@/data/courses') return {courses:[{id:'oikis-teho'},{id:'valintakoe-g'}]};
  if(id.startsWith('@/')) return load(id.slice(2)+'.ts');
  return require(id);
 };
 mod._compile(ts.transpileModule(fs.readFileSync(absolute,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,absolute);
 return mod.exports;
}
const model=load('lib/adminDashboardModel.ts');
const validation=load('lib/adminWorkspaceValidation.ts');
const prices=[{id:'oikis-teho',title:'Oikis',price:199},{id:'valintakoe-g',title:'G',price:120}];
const user=(id,courseIds)=>({id,email:id+'@example.com',createdAt:'2026-01-01',courseIds});
test('Oikis and bundled G count once; standalone G still counts',()=>{
 const p=model.portfolio([user('1',['oikis-teho','valintakoe-g']),user('2',['valintakoe-g'])]);
 assert.deepEqual(p.counts,{'oikis-teho':1,'valintakoe-g':1});
 assert.equal(model.valuation(p.counts,prices).amount,319);
});
test('tier bundles, duplicate grants and casing do not double count',()=>{
 assert.deepEqual(model.billableCourses(['OIKIS-TEHO','oikis','oikis-tiivis','oikis-teho','valintakoe-g']),['oikis-teho']);
 assert.deepEqual(model.billableCourses(['valintakoe-g','valintakoe-g-etaope']),['valintakoe-g-etaope']);
});
test('team exclusion matches specified local parts across domains and configured admin',()=>{
 for(const email of [' Info@Valintaguru.fi ','jani.tuomaala@gmail.com','Iina.Lindholm@gmail.com','julianna.lintukangas@outlook.com','admin@valintaguru.fi']) assert.equal(model.isTeamEmail(email),true);
 assert.equal(model.isTeamEmail('other@example.com','other@example.com'),true);
 assert.equal(model.isTeamEmail('jani.tuomaala2@gmail.com'),false);
 assert.equal(model.isTeamEmail('info@example.com'),false);
});
test('missing prices are explicit; zero price is valid',()=>{
 assert.deepEqual(model.valuation({unknown:3,'oikis-teho':2},prices),{amount:398,unpriced:3});
 assert.deepEqual(model.valuation({'oikis-teho':2},[{...prices[0],price:0}]),{amount:0,unpriced:0});
});
test('forecast waits 7 days, uses ownership changes rather than signup dates',()=>{
 const now={date:'2026-10-28',users:20,counts:{'oikis-teho':5}};
 assert.equal(model.forecast(now,[{...now,date:'2026-10-22'}],prices),null);
 const forecast=model.forecast(now,[{date:'2026-10-21',users:13,counts:{'oikis-teho':3}}],prices);
 assert.equal(forecast.dailyRevenue,398/7); assert.equal(forecast.dailyUsers,1);
});
test('price changes revalue both observations, not artificial new revenue',()=>{
 const now={date:'2026-10-28',users:5,counts:{'oikis-teho':5}};
 assert.equal(model.forecast(now,[{...now,date:'2026-10-21'}],[{...prices[0],price:400}]).dailyRevenue,0);
});
test('revocations produce negative growth; stale history cannot mislead',()=>{
 const now={date:'2026-10-28',users:5,counts:{'oikis-teho':2}};
 assert.equal(model.forecast(now,[{...now,date:'2026-10-21',counts:{'oikis-teho':3}}],prices).dailyRevenue,-199/7);
 assert.equal(model.forecast(now,[{...now,date:'2026-08-01'}],prices),null);
 assert.equal(model.forecast({...now,counts:{unknown:1}},[{...now,date:'2026-10-21'}],prices),null);
});
test('business dates follow Helsinki including daylight saving',()=>{
 assert.equal(model.helsinkiDay(new Date('2026-10-24T22:30:00Z')),'2026-10-25');
 assert.equal(model.helsinkiDay(new Date('2026-10-25T22:30:00Z')),'2026-10-26');
});
test('input validation rejects invalid dates, future follower observations and unsafe links',()=>{
 for(const d of ['2026-02-30','2026-13-01','x']) assert.throws(()=>validation.validateRecord({kind:'event',key:'e',data:{title:'Test',date:d}},[]));
 for(const url of ['javascript:alert(1)','http://example.com','https://name:secret@example.com']) assert.throws(()=>validation.validateRecord({kind:'link',key:'l',data:{label:'Test',url}},[]));
 assert.throws(()=>validation.validateRecord({kind:'follower',key:'2999-01-01',data:{count:1}},[]));
});
test('price validation accepts cents and rejects negative, nonfinite and subcent values',()=>{
 for(const price of [-1,NaN,Infinity,1.111]) assert.throws(()=>validation.validateRecord({kind:'price',key:'oikis-teho',data:{price}},['oikis-teho']));
 assert.equal(validation.validateRecord({kind:'price',key:'oikis-teho',data:{price:19.99}},['oikis-teho']).data.price,19.99);
 assert.throws(()=>validation.validateRecord({kind:'portfolio',key:'2026-10-28',data:{users:100}},[]));
});
const api=load('app/api/admin/workspace/route.ts');
const req=(body,origin='https://valintaguru.fi')=>new Request('https://valintaguru.fi/api/admin/workspace',{method:'POST',headers:{origin,'Content-Type':'application/json'},body:JSON.stringify(body)});
test('API refuses non-admin access before reading or writing records',async()=>{
 context={error:Response.json({error:'Forbidden'},{status:403})};
 assert.equal((await api.POST(req({}))).status,403);
});
test('API rejects cross-origin requests and protected portfolio writes',async()=>{
 context={admin:{from(){throw new Error('No DB access expected')}}};
 assert.equal((await api.POST(req({},'https://untrusted.example'))).status,403);
 assert.equal((await api.POST(req({kind:'portfolio',key:'today',data:{}}))).status,400);
});
test('API requires valid revision for deletes; stale revision yields conflict',async()=>{
 let wrote=false;
 const query={delete(){return this},eq(){return this},select:async()=>({data:[],error:null})};
 context={admin:{from(){wrote=true;return query}}};
 const body={kind:'todo',key:'t',data:{title:'T',done:false,priority:'normal'}};
 assert.equal((await api.POST(req({...body,action:'delete'}))).status,400);
 assert.equal((await api.POST(req({...body,revision:'old',action:'delete'}))).status,409);
 assert.equal(wrote,true);
});
test('API handles optimistic concurrent updates without silently overwriting',async()=>{
 const query={update(){return this},eq(){return this},select(){return this},maybeSingle:async()=>({data:null,error:null})};
 context={admin:{from:()=>query}};
 assert.equal((await api.POST(req({kind:'price',key:'oikis-teho',data:{price:200},revision:'old'}))).status,409);
});
const integrations=load('lib/adminDashboardIntegrations.ts');
test('Vercel query is server-authenticated and excludes incomplete UTC day',async()=>{
 process.env.VERCEL_ANALYTICS_TOKEN='test-token';process.env.VERCEL_ANALYTICS_PROJECT_ID='test-project';
 const saved=global.fetch;
 global.fetch=async(url,options)=>{
  assert.equal(url.hostname,'api.vercel.com');assert.equal(url.searchParams.get('by'),'day');
  assert.equal(options.headers.Authorization,'Bearer test-token');
  const until=new Date(url.searchParams.get('until'));assert.equal(until.getUTCHours(),23);assert.equal(until.getUTCMilliseconds(),999);
  return Response.json({data:[{timestamp:'2026-10-21T00:00:00Z',pageviews:10,visitors:8}]});
 };
 try{assert.equal((await integrations.vercelTraffic()).rows[0].visitors,8)}finally{global.fetch=saved;delete process.env.VERCEL_ANALYTICS_TOKEN;delete process.env.VERCEL_ANALYTICS_PROJECT_ID}
});
test('integration failure is unavailable, not fabricated zero visitors',async()=>{
 assert.equal((await integrations.vercelTraffic()).available,false);
});
test('Instagram refuses a token connected to the wrong account',async()=>{
 process.env.INSTAGRAM_ACCESS_TOKEN='test';process.env.INSTAGRAM_USER_ID='123';process.env.META_GRAPH_VERSION='v99.0';
 const saved=global.fetch;global.fetch=async()=>Response.json({followers_count:99,username:'wrong_account'});
 try{await assert.rejects(integrations.instagramFollowers(),/eri tiliin/)}finally{global.fetch=saved;delete process.env.INSTAGRAM_ACCESS_TOKEN;delete process.env.INSTAGRAM_USER_ID;delete process.env.META_GRAPH_VERSION}
});
