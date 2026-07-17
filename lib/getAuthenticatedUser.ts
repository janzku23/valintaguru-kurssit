"use client";

import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

type AuthenticatedUserResult = {
  user: User | null;
  error: Error | null;
};

export async function getAuthenticatedUser(): Promise<AuthenticatedUserResult> {
  const supabase = createClient();

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.error(
      "Supabase-istunnon hakeminen epäonnistui:",
      sessionError
    );

    return {
      user: null,
      error: new Error(
        `Kirjautumisistuntoa ei voitu hakea: ${sessionError.message}`
      ),
    };
  }

  if (!session?.user) {
    return {
      user: null,
      error: new Error("Käyttäjä ei ole kirjautunut sisään."),
    };
  }

  return {
    user: session.user,
    error: null,
  };
}