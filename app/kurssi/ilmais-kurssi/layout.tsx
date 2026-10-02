import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import FreeCourseTopBar from "@/components/FreeCourseTopBar";

export const dynamic = "force-dynamic";

export default async function FreeCourseLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/kirjaudu?next=/kurssi/ilmais-kurssi");

  return (
    <>
      <FreeCourseTopBar />
      {children}
    </>
  );
}
