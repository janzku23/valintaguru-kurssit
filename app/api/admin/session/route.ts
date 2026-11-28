import { getCurrentAdmin } from "@/lib/adminAccess";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(
    { isAdmin: Boolean(await getCurrentAdmin()) },
    { headers: { "Cache-Control": "private, no-store", Vary: "Cookie" } },
  );
}
