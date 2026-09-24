import { notFound, redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import ValintakoeGQuestionBankAdmin from "@/components/ValintakoeGQuestionBankAdmin";

const ADMIN_EMAIL = "admin@valintaguru.fi";

export default async function ValintakoeGQuestionBankPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      "/kirjaudu?next=/admin/valintakoe-g/tehtavapankki"
    );
  }

  if (
    user.email?.trim().toLowerCase() !==
    ADMIN_EMAIL
  ) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <ValintakoeGQuestionBankAdmin />
      </div>
    </main>
  );
}
