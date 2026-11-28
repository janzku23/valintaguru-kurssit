import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSafeRedirectPath } from "./lib/safeRedirect";

const protectedRoutes = [
  "/teoria",
  "/monivalinta",
  "/kurssit",
  "/harjoitukset",
  "/yo",
  "/oikis",
  "/laakis",
  "/muut",
  "/profiili",
  "/dashboard",
];

function copySessionState(source: NextResponse, target: NextResponse) {
  source.cookies.getAll().forEach((cookie) => target.cookies.set(cookie));
  for (const name of ["Cache-Control", "Pragma", "Expires", "Vary"]) {
    const value = source.headers.get(name);
    if (value) target.headers.set(name, value);
  }
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let response = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }

  if (!supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });

        const previousResponse = response;
        response = NextResponse.next({
          request,
        });
        copySessionState(previousResponse, response);

        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
        Object.entries(headers ?? {}).forEach(([name, value]) => {
          response.headers.set(name, value);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  function redirectWithSession(url: URL) {
    const redirectResponse = NextResponse.redirect(url);
    copySessionState(response, redirectResponse);
    return redirectResponse;
  }

  if (isProtectedRoute && !user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/kirjaudu";
    loginUrl.search = "";
    loginUrl.searchParams.set("next", pathname + request.nextUrl.search);

    return redirectWithSession(loginUrl);
  }

  if (pathname === "/kirjaudu" && user) {
    const next = getSafeRedirectPath(request.nextUrl.searchParams.get("next"));
    const redirectUrl = new URL(next, request.url);
    if (redirectUrl.pathname === "/kirjaudu") {
      redirectUrl.pathname = "/";
      redirectUrl.search = "";
      redirectUrl.hash = "";
    }

    return redirectWithSession(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
