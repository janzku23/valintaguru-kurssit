const test = require('node:test');
const assert = require('node:assert/strict');
const load = require('./shop-test-loader.cjs')();
const { buildProgressAnalytics, getProgressStatus, progressForPeriod, hasQuestionTiming, buildProgressSessions, deduplicateProgress } = load('lib/progressAnalytics.ts');
const { loadProgressRows } = load('lib/loadProgress.ts');
let id = 0;
function row(overrides={}) {
  return { id: String(++id), course_id:'valintakoe-g', question_id:`q${id}`, question:'Kysymys', area:'Tiedonhaku', selected_answer_ids:['a'], is_correct:true, answered_at:'2026-11-25T10:00:00Z', ...overrides };
}

test('skipped status overrides flags and includes legacy empty selections',()=>{
  for(const input of [{selected_answer_ids:[]},{selected_answer_ids:null},{selected_answer_ids:['__unsure__']},{answer_status:'skipped'}]) assert.equal(getProgressStatus(row(input)), 'skipped');
  assert.equal(getProgressStatus(row({is_correct:false})), 'incorrect');
});
test('no attempted answers means unknown accuracy, not 0% knowledge',()=>{
  const data=buildProgressAnalytics([row({selected_answer_ids:['__unsure__']})]);
  assert.equal(data.summary.accuracy,null);assert.equal(data.groups[0].accuracy,null);assert.equal(data.weakest,null);assert.equal(data.review.length,1);
});
test('accuracy excludes skips; every status has its own count',()=>{
  const data=buildProgressAnalytics([row(),row({is_correct:false}),row({selected_answer_ids:[]})]);
  assert.deepEqual(data.summary,{total:3,correct:1,incorrect:1,skipped:1,resolved:2,accuracy:50});
});
test('correcting a mistake clears review and updates current area knowledge',()=>{
  const first=row({question_id:'stable',is_correct:false,answered_at:'2026-11-20T12:00:00Z'});
  const second=row({question_id:'stable',answered_at:'2026-11-25T12:00:00Z'});
  const data=buildProgressAnalytics([second,first]);
  assert.equal(data.summary.accuracy,50);assert.equal(data.groups[0].accuracy,100);assert.equal(data.review.length,0);assert.equal(data.latest.length,1);
});
test('session retries deduplicate while separate attempts remain',()=>{
  const a=row({question_id:'q',session_id:'s'}), b=row({question_id:'q',session_id:'s'}), c=row({question_id:'q',session_id:'other'});
  assert.equal(deduplicateProgress([a,b,c]).length,2);
  assert.equal(buildProgressAnalytics([a,b,c]).latest.length,1);
});
test('same question IDs in different exercises are separate questions',()=>{
  const data=buildProgressAnalytics([row({question_id:'q',exercise_id:'ex1'}),row({question_id:'q',exercise_id:'ex2'})]);
  assert.equal(data.latest.length,2);
});
test('weak and strong labels require five answered unique questions',()=>{
  const sparse=Array.from({length:4},()=>row({is_correct:false}));
  assert.equal(buildProgressAnalytics(sparse).weakest,null);
  assert.equal(buildProgressAnalytics([...sparse,row({is_correct:false})]).weakest.accuracy,0);
  assert.equal(buildProgressAnalytics(Array.from({length:5},()=>row())).strongest.accuracy,100);
  assert.equal(buildProgressAnalytics(Array.from({length:5},()=>row({is_correct:false}))).strongest,null);
});
test('trend requires two full groups of 20 resolved attempts and ignores skips',()=>{
  const rows=Array.from({length:20},()=>row({is_correct:false,answered_at:'2026-11-01T12:00:00Z'}));
  rows.push(...Array.from({length:20},()=>row()));
  rows.push(...Array.from({length:50},()=>row({selected_answer_ids:[]})));
  assert.equal(buildProgressAnalytics(rows).trend,100);
  assert.equal(buildProgressAnalytics(rows.slice(1)).trend,null);
});
test('active days use Finnish time across midnight',()=>{
  const data=buildProgressAnalytics([row({answered_at:'2026-11-24T23:30:00Z'}),row({answered_at:'2026-11-25T12:00:00Z'})]);
  assert.equal(data.activeDays,1);
});
test('period filter uses seven Finnish calendar days, includes whole completed session',()=>{
  const before=row({session_id:'s',answered_at:'2026-11-18T21:59:00Z'});
  const after=row({session_id:'s',answered_at:'2026-11-18T22:01:00Z'});
  const outside=row({answered_at:'2026-11-18T21:00:00Z'});
  assert.equal(progressForPeriod([before,after,outside],'7',Date.parse('2026-11-25T10:00:00Z')).length,2);
});
test('G exercise sessions appear, session duration counted once, no penalty for wrong',()=>{
  const common={session_id:'g',session_type:'valintakoe_g_harjoitus',session_duration_ms:90000};
  const session=buildProgressSessions([row(common),row({...common,is_correct:false}),row({...common,selected_answer_ids:[]})])[0];
  assert.equal(session.durationMs,90000);assert.equal(session.paceMs,30000);assert.equal(session.score,1);assert.equal(session.total,3);
});
test('law exam points include negative scores, independently of accuracy',()=>{
  const common={session_id:'law',session_type:'harjoituskoe'};
  const session=buildProgressSessions([row(common),row({...common,is_correct:false}),row({...common,is_correct:false})])[0];
  assert.equal(session.score,-1);assert.equal(session.accuracy,33);
});
test('legacy exam pace is not active time; missing timing is not zero',()=>{
  assert.equal(hasQuestionTiming(row({session_type:'harjoituskoe',answer_time_ms:10000})),false);
  assert.equal(hasQuestionTiming(row({session_type:'harjoituskoe',answer_time_ms:10000,answer_time_source:'active_question'})),true);
  const data=buildProgressAnalytics([row(),row({answer_time_ms:-4}),row({answer_time_ms:NaN})]);
  assert.equal(data.activeTimeMs,null);assert.equal(data.averageTimeMs,null);
});
function queryClient(records, cap=500, failAt=-1) {
  const requests=[];
  return {requests,from(table){
    assert.equal(table,'student_progress_attempts');
    const request={filters:[],orders:[]};requests.push(request);
    return {
      select(columns,options){assert.equal(columns,'*');assert.equal(options.count,'exact');return this;},
      eq(key,value){request.filters.push([key,value]);return this;},
      order(key){request.orders.push(key);return this;},
      range(start,end){request.start=start;request.end=end;return this;},
      abortSignal(){return this;},
      then(resolve){
        assert.deepEqual(request.filters,[['user_id','student'],['course_id','valintakoe-g']]);
        assert.deepEqual(request.orders,['answered_at','id']);
        return Promise.resolve(request.start===failAt?{error:{message:'network failed'}}:{data:records.slice(request.start,Math.min(request.end+1,request.start+cap)),count:records.length,error:null}).then(resolve);
      }
    };
  }};
}
test('pagination fetches all 1201 rows with ownership/course filters, even with server cap',async()=>{
  const records=Array.from({length:1201},()=>row());const client=queryClient(records,100);
  const actual=await loadProgressRows(client,'student','valintakoe-g');
  assert.equal(actual.length,1201);assert.equal(client.requests.length,13);
});
test('page failure rejects instead of presenting partial statistics',async()=>{
  const client=queryClient(Array.from({length:600},()=>row()),500,500);
  await assert.rejects(loadProgressRows(client,'student','valintakoe-g'),/network failed/);
});
test('aborted loads perform no query',async()=>{
  const client=queryClient([]);const controller=new AbortController();controller.abort();
  await assert.rejects(loadProgressRows(client,'student','valintakoe-g',controller.signal),/keskeytettiin/);
  assert.equal(client.requests.length,0);
});

const { buildPracticeReviews, practiceForProgressRow } = load('lib/progressRecommendations.ts');
const { scorePracticeExam } = load('lib/practiceExamScoring.ts');
const practices = [
  { id:'ex-1',title:'Harjoitus 1 – Tiedonhaku',href:'/harjoitukset?koe=ex-1',questionIds:['legacy-q1'] },
  { id:'ex-2',title:'Harjoitus 2 – Päättely',href:'/harjoitukset?koe=ex-2',questionIds:['legacy-q2'] },
];
test('recommendation names and links to the exercise with most unresolved latest answers',()=>{
  const rows=[row({exercise_id:'ex-1',is_correct:false})];
  rows.push(...Array.from({length:51},(_,i)=>row({exercise_id:'ex-2',is_correct:false,selected_answer_ids:i<20?[]:['a']})));
  const recommendation=buildPracticeReviews(rows,practices)[0];
  assert.equal(recommendation.practice.title,'Harjoitus 2 – Päättely');
  assert.equal(recommendation.practice.href,'/harjoitukset?koe=ex-2');
  assert.equal(recommendation.rows.length,51);assert.equal(recommendation.incorrect,31);assert.equal(recommendation.skipped,20);
});
test('recommendation ignores already corrected errors and never counts historical retries twice',()=>{
  const old=row({exercise_id:'ex-1',question_id:'same',is_correct:false,answered_at:'2026-11-20T12:00:00Z'});
  const fixed=row({exercise_id:'ex-1',question_id:'same',answered_at:'2026-11-25T12:00:00Z'});
  assert.deepEqual(buildPracticeReviews([old,fixed],practices),[]);
});
test('practice identification uses the exercise ID or question catalogue, not unrelated labels',()=>{
  assert.equal(practiceForProgressRow(row({exercise_id:'ex-2',session_name:practices[0].title}),practices).id,'ex-2');
  assert.equal(practiceForProgressRow(row({question_id:'legacy-q2',session_name:practices[0].title}),practices).id,'ex-2');
  assert.equal(practiceForProgressRow(row({exercise_id:'removed',session_name:practices[0].title}),practices),null);
  assert.equal(practiceForProgressRow(row({session_name:'Unknown'}),practices),null);
});
test('unidentified historical answers have no fabricated destination',()=>{
  const groups=buildPracticeReviews([row({is_correct:false})],practices);
  assert.equal(groups[0].practice,null);assert.equal(groups[0].key,'unknown');
});
test('law exam history agrees with actual scoring for multiple answers, skips and unanswered questions',()=>{
  const exam={sections:[{questions:[
    {id:'single',options:[{id:'a',text:'A'},{id:'b',text:'B'}],correctAnswerId:'a'},
    {id:'multi',options:[{id:'a',text:'A'},{id:'b',text:'B'}],correctAnswerId:'a',correctAnswerIds:['a','b']},
    {id:'skip',options:[{id:'a',text:'A'},{id:'e',text:'Jätän vastaamatta'}],correctAnswerId:'a'},
    {id:'empty',options:[{id:'a',text:'A'}],correctAnswerId:'a'},
  ]}]};
  const scored=scorePracticeExam(exam,{single:'a',multi:['a'],skip:'e'});
  const rows=exam.sections[0].questions.map(question=>row({course_id:'oikis-teho',question_id:question.id,session_id:'law-first',session_type:'harjoituskoe',session_name:'Harjoitustentti 1',is_correct:question.id==='single',selected_answer_ids:[].concat(scored.normalizedAnswers[question.id])}));
  const session=buildProgressSessions(rows)[0];
  assert.equal(session.score,scored.score);assert.equal(session.total,scored.maxScore);
  assert.equal(session.correct,scored.correctCount);assert.equal(session.incorrect,scored.wrongCount);assert.equal(session.skipped,scored.unsureCount);
  assert.deepEqual([session.score,session.correct,session.incorrect,session.skipped],[0,1,1,2]);
});
test('repeat sessions retain separate points, attempts and skip counts; sync retries do not add a new attempt',()=>{
  const base={course_id:'oikis-teho',question_id:'law-q1',session_type:'harjoituskoe',session_name:'Harjoitustentti 2'};
  const first=row({...base,session_id:'first',is_correct:false,answered_at:'2026-10-01T12:00:00Z'});
  const second=row({...base,session_id:'second',answered_at:'2026-11-25T12:00:00Z'});
  const duplicate={...second,id:'duplicate-sync'};
  const sessions=buildProgressSessions([first,second,duplicate]);
  assert.equal(sessions.length,2);assert.equal(sessions[0].attemptNumber,2);assert.equal(sessions[0].score,1);assert.equal(sessions[0].scoreChange,2);
  assert.equal(sessions[1].attemptNumber,1);assert.equal(sessions[1].score,-1);
  const periodSessions=buildProgressSessions([first,second],'7',Date.parse('2026-11-25T15:00:00Z'));
  assert.equal(periodSessions.length,1);assert.equal(periodSessions[0].attemptNumber,2);assert.equal(periodSessions[0].scoreChange,2);
});
test('a changed exam length does not produce a misleading point comparison',()=>{
  const common={session_type:'harjoituskoe',session_name:'Harjoitustentti 1'};
  const first=row({...common,session_id:'old',answered_at:'2026-10-01T12:00:00Z'});
  const second=[row({...common,session_id:'new'}),row({...common,session_id:'new'})];
  assert.equal(buildProgressSessions([first,...second])[0].scoreChange,null);
});
test('real law exam catalogues identify source questions correctly',()=>{
  const {getPracticeExamsForCourse}=load('data/practiceExams/index.ts');
  const exams=getPracticeExamsForCourse('oikis-teho');
  const catalogue=exams.map(exam=>({id:exam.id,title:exam.title,href:`/kurssi/oikis-teho/harjoitukset?koe=${exam.id}`,questionIds:exam.sections.flatMap(section=>section.questions.map(question=>question.id))}));
  for(const practice of catalogue)for(const questionId of practice.questionIds){
    assert.equal(practiceForProgressRow(row({question_id:questionId}),catalogue).id,practice.id);
  }
});

const { nextPracticeStep } = load('lib/progressRecommendations.ts');
for (const courseId of ['valintakoe-g', 'oikis-teho']) {
  test(`${courseId}: completed retakes advance recommendation to another unresolved practice, then an untried one`,()=>{
    const reading=courseId==='valintakoe-g';
    const catalogue=reading
      ? load('data/valintakoeGExercises/index.ts').getValintakoeGExercises(courseId).slice(0,3).map(ex=>({id:ex.id,title:ex.title,href:`/kurssi/${courseId}/harjoitukset?koe=${ex.id}`,questionIds:ex.questions.map(q=>q.id)}))
      : load('data/practiceExams/index.ts').getPracticeExamsForCourse(courseId).slice(0,3).map(ex=>({id:ex.id,title:ex.title,href:`/kurssi/${courseId}/harjoitukset?koe=${ex.id}`,questionIds:ex.sections.flatMap(s=>s.questions.map(q=>q.id))}));
    const sessionRows=(practice, session, date, statuses)=>practice.questionIds.map((questionId,index)=>row({
      course_id:courseId, question_id:questionId, exercise_id:reading?practice.id:null,
      session_id:session,session_name:practice.title,session_type:reading?'valintakoe_g_harjoitus':'harjoituskoe',
      answered_at:date, is_correct:statuses[index]!=='incorrect'&&statuses[index]!=='skipped',
      answer_status:statuses[index]??'correct',selected_answer_ids:statuses[index]==='skipped'?['__unsure__']:['a'],
    }));
    const history=[
      ...sessionRows(catalogue[0],'first-a','2026-11-20T10:00:00Z',['incorrect','skipped']),
      ...sessionRows(catalogue[1],'first-b','2026-11-21T10:00:00Z',['incorrect']),
    ];
    const firstStep=nextPracticeStep(history,catalogue);
    assert.equal(firstStep.kind,'review');assert.equal(firstStep.practice.id,catalogue[0].id);
    assert.equal(firstStep.review.incorrect,1);assert.equal(firstStep.review.skipped,1);

    const correctedA=sessionRows(catalogue[0],'retry-a','2026-11-25T10:00:00Z',[]);
    const afterFirst=[...history,...correctedA,{...correctedA[0],id:'sync-retry'}];
    const secondStep=nextPracticeStep(afterFirst,catalogue);
    assert.equal(secondStep.kind,'review');assert.equal(secondStep.practice.id,catalogue[1].id);
    assert.equal(secondStep.practice.href,catalogue[1].href);
    assert.ok(!buildPracticeReviews(afterFirst,catalogue).some(group=>group.key===catalogue[0].id));

    const afterBoth=[...afterFirst,...sessionRows(catalogue[1],'retry-b','2026-11-25T11:00:00Z',[])];
    const thirdStep=nextPracticeStep(afterBoth,catalogue);
    assert.equal(thirdStep.kind,'new');assert.equal(thirdStep.practice.id,catalogue[2].id);
    assert.equal(thirdStep.practice.href,catalogue[2].href);

    const allCorrect=[...afterBoth,...sessionRows(catalogue[2],'first-c','2026-11-25T12:00:00Z',[])];
    assert.deepEqual(nextPracticeStep(allCorrect,catalogue),{kind:'complete',practice:null});
  });
}
test('a still skipped answer remains in the review list after a partial improvement',()=>{
  const practice=practices[0];
  const earlier=[row({exercise_id:practice.id,question_id:'a',is_correct:false,answered_at:'2026-11-20T10:00:00Z'}),row({exercise_id:practice.id,question_id:'b',selected_answer_ids:[],answered_at:'2026-11-20T10:00:00Z'})];
  const corrected=row({exercise_id:practice.id,question_id:'a',answered_at:'2026-11-25T10:00:00Z'});
  const step=nextPracticeStep([...earlier,corrected],practices);
  assert.equal(step.kind,'review');assert.equal(step.review.incorrect,0);assert.equal(step.review.skipped,1);
});

const { subscribeToProgressRefresh }=load('lib/progressRefresh.ts');
const waitForRefresh=()=>new Promise(resolve=>setTimeout(resolve,140));
test('return events refresh retained progress and coalesce focus with visibilitychange',async()=>{
  const browserWindow=new EventTarget(),pageDocument=new EventTarget();pageDocument.visibilityState='visible';
  let refreshes=0;const unsubscribe=subscribeToProgressRefresh(()=>refreshes++,browserWindow,pageDocument);
  assert.equal(refreshes,0);
  browserWindow.dispatchEvent(new Event('focus'));pageDocument.dispatchEvent(new Event('visibilitychange'));
  await waitForRefresh();assert.equal(refreshes,1);
  browserWindow.dispatchEvent(Object.assign(new Event('pageshow'),{persisted:false}));
  await waitForRefresh();assert.equal(refreshes,1);
  browserWindow.dispatchEvent(Object.assign(new Event('pageshow'),{persisted:true}));
  await waitForRefresh();assert.equal(refreshes,2);
  unsubscribe();
});
test('background pages do not refresh, and leaving the page cancels scheduled refreshes',async()=>{
  const browserWindow=new EventTarget(),pageDocument=new EventTarget();pageDocument.visibilityState='hidden';
  let refreshes=0;const unsubscribe=subscribeToProgressRefresh(()=>refreshes++,browserWindow,pageDocument);
  browserWindow.dispatchEvent(new Event('focus'));pageDocument.dispatchEvent(new Event('visibilitychange'));
  await waitForRefresh();assert.equal(refreshes,0);
  pageDocument.visibilityState='visible';pageDocument.dispatchEvent(new Event('visibilitychange'));
  unsubscribe();await waitForRefresh();assert.equal(refreshes,0);
  browserWindow.dispatchEvent(Object.assign(new Event('pageshow'),{persisted:true}));
  await waitForRefresh();assert.equal(refreshes,0);
});
