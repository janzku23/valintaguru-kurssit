// Run before hydration: the browser auth client can consume and remove the hash.
// Supabase may fall back to Site URL if redirectTo is not allowed.
export const emailLinkRedirectScript = `
(function () {
  var location = window.location;
  if (location.pathname !== "/") return;
  var parameters = new URLSearchParams(location.hash.slice(1));
  var type = parameters.get("type");
  if (type !== "invite" && type !== "recovery") return;
  location.replace("/aseta-salasana" + location.hash);
})();
`;
