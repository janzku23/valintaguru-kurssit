import { NextResponse } from "next/server";

// IMPORTANT: The legacy endpoint accepted a client-chosen sourceId and awarded
// points without validating an answer. It MUST NOT remain available alongside
// the authoritative /api/gurupath/answer endpoint.
export async function POST() {
  return NextResponse.json(
    { error: "Vanha palkintoreitti on poistettu käytöstä. Päivitä GuruPeli." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
