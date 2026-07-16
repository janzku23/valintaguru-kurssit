import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function getSafeNextPath(value: string | null) {
  if (!value) {
    return "/aseta-salasana";
  }

  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/aseta-salasana";
  }

  return value;
}

function createExpiredLinkRedirect(request: NextRequest) {
  const errorUrl = new URL("/kirjaudu", request.url);

  errorUrl.searchParams.set("mode", "forgot");
  errorUrl.searchParams.set(
    "error",
    "Salasanan asetuslinkki on vanhentunut tai se on jo käytetty. Syötä sähköpostiosoitteesi, niin saat uuden linkin."
  );

  return NextResponse.redirect(errorUrl);
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");
  const nextPath = getSafeNextPath(requestUrl.searchParams.get("next"));

  if (!code) {
    return createExpiredLinkRedirect(request);
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

  const response = NextResponse.redirect(
    new URL(nextPath, request.url)
  );

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
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
    }
  );

  const { error } =
    await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error(
      "Auth-koodin vaihtaminen sessioksi epäonnistui:",
      error
    );

    return createExpiredLinkRedirect(request);
  }

  return response;
}