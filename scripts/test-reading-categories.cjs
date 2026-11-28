const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { PGlite } = require("@electric-sql/pglite");
const createLoader = require("./shop-test-loader.cjs");
const load = createLoader();
const {
  VALINTAKOE_G_READING_CATEGORIES: categories,
  isValintakoeGReadingCategoryId,
} = load("data/valintakoeGExercises/categories.ts");
const exercisesModule = load("data/valintakoeGExercises/index.ts");
const exercises = exercisesModule.getValintakoeGExercises("valintakoe-g");
const questions = exercises.flatMap((e) => e.questions.map((q) => ({ ...q, exerciseId: e.id })));
const migrationName = fs.readdirSync(path.join(__dirname, "../supabase/migrations"))
  .find((name) => name.endsWith("_align_valintakoe_g_reading_categories.sql"));
const migration = fs.readFileSync(path.join(__dirname, "../supabase/migrations", migrationName), "utf8");

test("all exercise questions and GuruPeli feedback use the same 14 categories", () => {
  assert.deepEqual(categories.map((c) => c.id), Array.from({ length: 14 }, (_, i) => i + 1));
  assert.equal(questions.length, 458);
  for (const q of questions) assert.ok(isValintakoeGReadingCategoryId(q.categoryId), q.id);
  const guruCategories = load("data/gurupath/valintakoeGCategoryNames.ts");
  for (const c of categories) {
    assert.equal(guruCategories.getGuruValintakoeGCategoryName(c.id), c.name);
    assert.equal(guruCategories.getGuruValintakoeGCategoryInfo(c.id).studentTip, c.studentTip);
  }
  for (const id of [0, 15, 16, 17, 18, 19, 20, 1.5, NaN, Infinity, null, undefined, "1"]) {
    assert.equal(isValintakoeGReadingCategoryId(id), false);
    assert.equal(guruCategories.getGuruValintakoeGCategoryInfo(id), null);
  }
  const guruQuestions = load("data/gurupath/questions.ts").guruGameQuestions;
  let classified = 0;
  for (const q of guruQuestions) {
    const match = q.explanation.match(/Tehtäväkategoria:\s*(\d+)\s*–\s*([^\n]+)/);
    if (!match) continue;
    const category = categories.find((c) => c.id === Number(match[1]));
    assert.ok(category, q.id);
    assert.equal(match[2], `${category.name}.`, q.id);
    classified += 1;
  }
  assert.equal(classified, 100);
});

function adminRoute(overrides = []) {
  const writes = [];
  const route = createLoader({
    "next/server": { NextResponse: { json: (body, init) => Response.json(body, init) } },
    "@/utils/supabase/server": { createClient: async () => ({ auth: {
      getUser: async () => ({ data: { user: { email: "admin@valintaguru.fi" } }, error: null }),
    } }) },
    "@/utils/supabase/admin": { createAdminClient: () => ({ from: (table) => {
      assert.equal(table, "valintakoe_g_question_metadata");
      return {
        select: async () => ({ data: overrides, error: null }),
        upsert: async (value) => { writes.push(value); return { error: null }; },
      };
    } }) },
    "@/data/valintakoeGExercises": exercisesModule,
  })("app/api/admin/valintakoe-g/questions/route.ts");
  return { route, writes };
}

test("admin accepts 1–14 and rejects retired categories before writing", async () => {
  const { route, writes } = adminRoute();
  for (const categoryId of [0, 15, 16, 17, 18, 19, 20, 2.5]) {
    const response = await route.PATCH(new Request("https://example.test/questions", {
      method: "PATCH", body: JSON.stringify({ exerciseId: "harjoitus-1", questionId: "g-h1-q1", categoryId, difficulty: "easy" }),
    }));
    assert.equal(response.status, 400);
    assert.match((await response.json()).error, /1–14/);
  }
  assert.equal(writes.length, 0);
  for (const c of categories) {
    const response = await route.PATCH(new Request("https://example.test/questions", {
      method: "PATCH", body: JSON.stringify({ exerciseId: "harjoitus-1", questionId: "g-h1-q1", categoryId: c.id, difficulty: "easy" }),
    }));
    assert.equal(response.status, 200);
  }
  assert.deepEqual(writes.map((w) => w.category_id), categories.map((c) => c.id));
});

test("admin falls back from invalid stored IDs and keeps valid manual classifications", async () => {
  const { route } = adminRoute([
    { exercise_id: "harjoitus-1", question_id: "g-h1-q1", category_id: 20 },
    { exercise_id: "harjoitus-1", question_id: "g-h1-q2", category_id: 14 },
  ]);
  const data = await (await route.GET()).json();
  assert.equal(data.categories.length, 14);
  assert.equal(data.questions.find((q) => q.questionId === "g-h1-q1").categoryId, 2);
  assert.equal(data.questions.find((q) => q.questionId === "g-h1-q2").categoryId, 14);
});

test("exercise review uses current names and falls back from a retired override", async () => {
  const overrides = [
    { question_id: "g-h1-q1", category_id: 20 },
    { question_id: "g-h1-q2", category_id: 14 },
  ];
  const server = createLoader({
    "@/utils/supabase/admin": { createAdminClient: () => ({ from: () => ({
      select: () => ({ eq: () => ({ in: async () => ({ data: overrides, error: null }) }) }),
    }) }) },
    "@/data/valintakoeGExercises": exercisesModule,
  })("lib/valintakoeGExerciseServer.ts");
  const review = await server.buildValintakoeGExerciseReview({
    course_id: "valintakoe-g", exercise_id: "harjoitus-1", answers: {},
  });
  const first = review.find((q) => q.questionId === "g-h1-q1");
  const second = review.find((q) => q.questionId === "g-h1-q2");
  assert.equal(first.categoryId, 2);
  assert.equal(first.categoryName, "Parafraasin tunnistaminen");
  assert.equal(second.categoryId, 14);
  assert.equal(second.categoryName, "Rajauksen tai poikkeuksen muuttaminen");
});

const legacyNames = [
  "Suora tiedon paikantaminen", "Synonyymiparafraasi", "Tiivistävä parafraasi",
  "Yhden ratkaisevan sanan vaihtaminen", "Vastakohdaksi muuttaminen", "Relaation suunnan vaihtaminen",
  "Järjestyksen vaihtaminen merkityksen säilyessä", "Oikea tieto väärässä kategoriassa",
  "Oikea tieto väärässä ajankohdassa", "Kehityssuunnan kääntäminen", "Kohdejoukon muuttaminen",
  "Absolutisointi", "Numeron tai määrän muuttaminen", "Suuruussuhteen muuttaminen",
  "Looginen komplementti", "Varmuusasteen muuttaminen", "Väittäjän tai lähteen vaihtaminen",
  "Ehto–seuraus-suhteen muuttaminen", "Kausaalisuuden ja yhteyden sekoittaminen", "Rajauksen tai poikkeuksen huomaaminen",
];

async function fixture() {
  const db = new PGlite();
  await db.exec(`
    create table valintakoe_g_reading_categories (
      id smallint primary key constraint valintakoe_g_reading_categories_id_check check(id between 1 and 20),
      name text not null unique, description text not null, student_tip text not null,
      created_at timestamptz default now(), updated_at timestamptz default now()
    );
    create table valintakoe_g_question_metadata (
      exercise_id text, question_id text, category_id smallint not null references valintakoe_g_reading_categories(id),
      difficulty text default 'easy', source_page text default '42', updated_at timestamptz default now(),
      primary key(exercise_id,question_id)
    );
    create table student_progress_attempts (
      id text primary key, course_id text not null, exercise_id text, question_id text not null,
      category_id smallint constraint student_progress_attempts_category_id_check check(category_id is null or category_id between 1 and 20),
      category text, is_correct boolean default true, selected_answer_ids text[] default array['a'],
      correct_answer_ids text[] default array['a'], answer_status text default 'correct',
      answered_at timestamptz default now(), answer_time_ms integer default 1234,
      session_id text default 'session', session_duration_ms integer default 5678
    );
  `);
  for (const [i, name] of legacyNames.entries()) {
    await db.query("insert into valintakoe_g_reading_categories(id,name,description,student_tip) values($1,$2,'old description','old tip')", [i + 1, name]);
  }
  const all = [...questions.map((q) => [q.exerciseId, q.id, q.categoryId]),
    ["harjoitus-1", "g-h1-q11", 3], ["harjoitus-2", "g-h2-q12", 2], ["harjoitus-3", "g-h3-q11", 4]];
  for (const [i, [exerciseId, questionId]] of all.entries()) {
    const legacyId = i % 20 + 1;
    await db.query("insert into valintakoe_g_question_metadata(exercise_id,question_id,category_id) values($1,$2,$3)", [exerciseId, questionId, legacyId]);
    for (const courseId of ["valintakoe-g", "valintakoe-g-etaope"]) {
      await db.query("insert into student_progress_attempts(id,course_id,exercise_id,question_id,category_id,category,is_correct) values($1,$2,$3,$4,$5,$6,$7)",
        [`${courseId}:${questionId}`, courseId, exerciseId, questionId, legacyId, legacyNames[legacyId - 1], i % 2 === 0]);
    }
  }
  await db.exec(`
    insert into student_progress_attempts(id,course_id,question_id,category_id,category) values
      ('guru','valintakoe-g','guru-demo-mc-001',null,null),
      ('other','oikis-teho','g-h1-q3',8,'Other course category');
    update student_progress_attempts set exercise_id=null where id='valintakoe-g:g-h1-q1';
    update student_progress_attempts set category_id=15,category='Looginen komplementti'
      where question_id='g-h2-q4' and course_id in ('valintakoe-g','valintakoe-g-etaope');
  `);
  return { db, all };
}

test("migration aligns both course histories and retired questions, preserves answers, and enforces 1–14", async () => {
  const { db, all } = await fixture();
  try {
    const before = (await db.query("select to_jsonb(p)-'category_id'-'category' as data from student_progress_attempts p order by id")).rows;
    const metadataBefore = (await db.query("select to_jsonb(m)-'category_id'-'updated_at' as data from valintakoe_g_question_metadata m order by question_id")).rows;
    await db.exec(migration);
    assert.deepEqual((await db.query("select id,name,description,student_tip from valintakoe_g_reading_categories order by id")).rows,
      categories.map((c) => ({ id: c.id, name: c.name, description: c.description, student_tip: c.studentTip })));
    const expected = new Map(all.map(([exerciseId, questionId, categoryId]) => [questionId, { exerciseId, categoryId }]));
    for (const row of (await db.query("select * from valintakoe_g_question_metadata")).rows) {
      assert.equal(row.category_id, expected.get(row.question_id).categoryId, row.question_id);
    }
    for (const row of (await db.query("select * from student_progress_attempts where id not in ('guru','other')")).rows) {
      const categoryId = expected.get(row.question_id).categoryId;
      assert.equal(row.category_id, categoryId, row.id);
      assert.equal(row.category, categories.find((c) => c.id === categoryId).name, row.id);
    }
    assert.deepEqual((await db.query("select to_jsonb(p)-'category_id'-'category' as data from student_progress_attempts p order by id")).rows, before);
    assert.deepEqual((await db.query("select to_jsonb(m)-'category_id'-'updated_at' as data from valintakoe_g_question_metadata m order by question_id")).rows, metadataBefore);
    assert.deepEqual((await db.query("select id,category_id,category from student_progress_attempts where id in ('guru','other') order by id")).rows,
      [{ id: "guru", category_id: null, category: null }, { id: "other", category_id: 8, category: "Other course category" }]);
    for (const categoryId of [0, 15, 16, 17, 18, 19, 20]) {
      await assert.rejects(db.query("update student_progress_attempts set category_id=$1 where id='valintakoe-g:g-h2-q4'", [categoryId]), /check constraint/);
      await assert.rejects(db.query("update valintakoe_g_question_metadata set category_id=$1 where question_id='g-h2-q4'", [categoryId]), /check constraint/);
      await assert.rejects(db.query("insert into valintakoe_g_reading_categories(id,name,description,student_tip) values($1,'retired','x','x')", [categoryId]), /check constraint/);
    }
    const after = (await db.query("select * from student_progress_attempts order by id")).rows;
    await db.exec(migration);
    assert.deepEqual((await db.query("select * from student_progress_attempts order by id")).rows, after);
  } finally { await db.close(); }
});

test("unknown categorized history aborts migration without changing the catalogue", async () => {
  const { db } = await fixture();
  try {
    await db.query("insert into student_progress_attempts(id,course_id,exercise_id,question_id,category_id,category) values('unknown','valintakoe-g','missing','unknown',20,'Old label')");
    const before = (await db.query("select * from valintakoe_g_reading_categories order by id")).rows;
    await assert.rejects(db.exec(migration), /Unmapped Valintakoe G history/);
    assert.deepEqual((await db.query("select * from valintakoe_g_reading_categories order by id")).rows, before);
    assert.equal((await db.query("select category_id from student_progress_attempts where id='unknown'")).rows[0].category_id, 20);
  } finally { await db.close(); }
});

test("a late constraint failure rolls back catalogue, metadata and history together", async () => {
  const { db } = await fixture();
  try {
    await db.query("update student_progress_attempts set category_id=20 where id='other'");
    const tables = ["valintakoe_g_reading_categories", "valintakoe_g_question_metadata", "student_progress_attempts"];
    const snapshot = async () => Promise.all(tables.map(async (table) =>
      (await db.query(`select to_jsonb(t) as data from ${table} t order by to_jsonb(t)::text`)).rows));
    const before = await snapshot();
    await assert.rejects(db.exec(migration), /student_progress_attempts_category_id_check/);
    assert.deepEqual(await snapshot(), before);
  } finally { await db.close(); }
});
