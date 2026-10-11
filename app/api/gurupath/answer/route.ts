import "server-only";
import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";
import {
  authorizeGuruNode,
  eventMatchesQuestion,
  GURU_WRONG_COOLDOWN_SECONDS,
  GURU_WRONG_PENALTY,
} from "@/lib/gurupath/serverGame";

export const dynamic = "force-dynamic";

function jsonError(error: string, status: number) {
  return NextResponse.json({ error }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerUser();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return jsonError("Kirjautuminen vaaditaan.", 401);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 4096) return jsonError("Pyyntö on liian suuri.", 413);
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonError("Virheellinen pyyntö.", 400);
  }
  const input = body as Record<string, unknown>;
  const courseId = input.courseId;
  const nodeId = input.nodeId;
  const selectedAnswerIds = input.selectedAnswerIds;
  if (
    typeof courseId !== "string" || courseId.length > 100 ||
    typeof nodeId !== "string" ||
    !Array.isArray(selectedAnswerIds) || selectedAnswerIds.length < 1 ||
    selectedAnswerIds.length > 20 ||
    !selectedAnswerIds.every((x): x is string => typeof x === "string" && x.length <= 100)
  ) return jsonError("Virheelliset vastaustiedot.", 400);
  if (new Set(selectedAnswerIds).size !== selectedAnswerIds.length) {
    return jsonError("Vastaus sisältää samoja vaihtoehtoja useita kertoja.", 400);
  }

  // Never trust a question ID, source, XP, score, or correctAnswerIds from the browser.
  const authorized = await authorizeGuruNode(courseId, nodeId);
  if (!authorized) return jsonError("Tehtävään ei ole käyttöoikeutta.", 403);
  const { question, node, index, levels, source, courseIds } = authorized;
  const allowedIds = new Set(question.answers.map((answer) => answer.id));
  if (!selectedAnswerIds.every((id) => allowedIds.has(id))) {
    return jsonError("Tuntematon vastausvaihtoehto.", 400);
  }

  const admin = createSupabaseAdmin();
  const { data: completed, error: completedError } = await admin
    .from("guru_game_events")
    .select("source_id")
    .eq("user_id", user.id)
    .in("course_id", courseIds)
    .in("source", ["path-node", "vault"])
    .limit(10000);
  if (completedError) return jsonError("Tehtävän etenemistä ei voitu tarkistaa.", 500);
  const hasCompleted = (questionId: string) => (completed ?? []).some(
    (row) => typeof row.source_id === "string" && eventMatchesQuestion(row.source_id, questionId),
  );

  if (index > 0 && !hasCompleted(levels[index - 1].questionId)) {
    return jsonError("Edellinen taso on suoritettava ensin.", 409);
  }
  if (hasCompleted(question.id)) {
    return NextResponse.json({ correct: true, awarded: false, alreadyCompleted: true,
      explanation: question.explanation, pointsAwarded: 0 }, { headers: { "Cache-Control": "no-store" } });
  }

  const selected = [...selectedAnswerIds].sort();
  const correctIds = [...question.correctAnswerIds].sort();
  const correct = selected.length === correctIds.length && selected.every(
    (value, position) => value === correctIds[position],
  );

  const { data: latestPenalty, error: penaltyQueryError } = await admin
    .from("guru_game_penalties")
    .select("created_at")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .eq("node_id", nodeId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (penaltyQueryError) return jsonError("Jäähyä ei voitu tarkistaa.", 500);
  if (latestPenalty?.created_at) {
    const elapsed = Math.floor((Date.now() - new Date(latestPenalty.created_at).getTime()) / 1000);
    const remaining = Math.max(0, GURU_WRONG_COOLDOWN_SECONDS - elapsed);
    if (remaining > 0) {
      return NextResponse.json({ error: "Jäähy on edelleen voimassa.", cooldownSeconds: remaining },
        { status: 429, headers: { "Cache-Control": "no-store" } });
    }
  }

  // Profile creation is admin-side only. No XP or scoring fields are supplied here.
  const { error: profileError } = await admin.from("guru_game_profiles")
    .upsert({ user_id: user.id }, { onConflict: "user_id", ignoreDuplicates: true });
  if (profileError) return jsonError("Peliprofiilia ei voitu valmistella.", 500);

  if (!correct) {
    const { data: penalty, error: penaltyError } = await admin.rpc("apply_gurupath_wrong_answer", {
      p_user_id: user.id,
      p_course_id: courseId,
      p_node_id: nodeId,
      p_penalty: GURU_WRONG_PENALTY,
      p_cooldown_seconds: GURU_WRONG_COOLDOWN_SECONDS,
    });
    if (penaltyError) return jsonError("Väärän vastauksen käsittely epäonnistui.", 500);
    const result = Array.isArray(penalty) ? penalty[0] : penalty;
    return NextResponse.json({
      correct: false,
      applied: Boolean(result?.applied),
      penaltyPoints: Boolean(result?.applied) ? GURU_WRONG_PENALTY : 0,
      cooldownSeconds: Math.max(0, Number(result?.cooldown_seconds ?? GURU_WRONG_COOLDOWN_SECONDS)),
    }, { headers: { "Cache-Control": "no-store" } });
  }

  // Source and point amount are derived entirely from trusted server content.
  // Question-specific points match the existing GuruPath map (not browser-supplied XP).
  const points = Number.isSafeInteger(node.points) && node.points > 0
    ? Math.min(node.points, 100) : 35;
  const { data: award, error: awardError } = await admin.rpc("award_gurupath_xp", {
    p_user_id: user.id,
    p_course_id: courseId,
    p_source: source,
    p_source_id: `gurupeli:${question.id}`,
    p_xp: points,
    p_score: points,
  });
  if (awardError) return jsonError("Palkinnon tallentaminen epäonnistui.", 500);
  const result = Array.isArray(award) ? award[0] : award;
  const awarded = Boolean(result?.inserted);

  // The attempt is recorded by the trusted server. The award is not lost if
  // analytics storage fails; admin logs should monitor these failures.
  if (awarded) {
    const { error: attemptError } = await admin.from("student_progress_attempts").insert({
      user_id: user.id,
      course_id: courseId,
      question_id: question.id,
      question: question.prompt,
      area: "GuruPeli",
      selected_answer_ids: selectedAnswerIds,
      correct_answer_ids: question.correctAnswerIds,
      is_correct: true,
      answered_at: new Date().toISOString(),
    });
    if (attemptError) console.error("GuruPeli: yrityksen tallennus epäonnistui", attemptError.code);
  }

  return NextResponse.json({
    correct: true,
    awarded,
    alreadyCompleted: !awarded,
    explanation: question.explanation,
    pointsAwarded: awarded ? points : 0,
  }, { headers: { "Cache-Control": "no-store" } });
}
