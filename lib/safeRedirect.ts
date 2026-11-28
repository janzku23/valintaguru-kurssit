const LOCAL_REDIRECT_ORIGIN = "https://local-redirect.invalid";

export function getSafeRedirectPath(
  value: string | null | undefined,
  fallback = "/",
): string {
  if (
    !value?.startsWith("/") ||
    value.startsWith("//") ||
    /[\\\u0000-\u001f\u007f]/.test(value)
  ) {
    return fallback;
  }

  try {
    const url = new URL(value, LOCAL_REDIRECT_ORIGIN);
    if (url.origin !== LOCAL_REDIRECT_ORIGIN || url.pathname.startsWith("//")) {
      return fallback;
    }
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}
