import "server-only";

import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { isAdminEmail } from "@/lib/adminIdentity";

export { ADMIN_EMAIL } from "@/lib/adminIdentity";

export async function getCurrentAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  if (!isAdminEmail(user.email)) return null;

  return user;
}

export async function requireAdminPage() {
  const user = await getCurrentAdmin();
  if (!user) redirect("/kirjaudu");
  return user;
}

export async function requireAdminApi() {
  const user = await getCurrentAdmin();

  if (!user) {
    return {
      error: NextResponse.json(
        { error: "Sinulla ei ole oikeutta käyttää admin-toimintoja." },
        { status: 403 },
      ),
    } as const;
  }

  return {
    user,
    admin: createAdminClient(),
  } as const;
}
