import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

function getSafeNextPath(value: string | null) {
  if (!value) {
    return "/";
  }

  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const nextPath = getSafeNextPath(requestUrl.searchParams.get("next"));

  if (!code) {
    const errorUrl = new URL("/kirjaudu", request.url);
    errorUrl.searchParams.set(
      "error",
      "Kutsulinkki on virheellinen tai vanhentunut."
    );

    return NextResponse.redirect(errorUrl);
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    const errorUrl = new URL("/kirjaudu", request.url);
    errorUrl.searchParams.set(
      "error",
      "Supabase-asetukset puuttuvat palvelimelta."
    );

    return NextResponse.redirect(errorUrl);
  }

  const cookieStore = await cookies();

  const response = NextResponse.redirect(new URL(nextPath, request.url));

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },

      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Auth-koodin vaihtaminen epäonnistui:", error);

    const errorUrl = new URL("/kirjaudu", request.url);
    errorUrl.searchParams.set(
      "error",
      "Kutsulinkki on vanhentunut tai se on jo käytetty."
    );

    return NextResponse.redirect(errorUrl);
  }

  return response;
}