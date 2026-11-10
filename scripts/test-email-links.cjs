const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const source = fs.readFileSync(path.join(__dirname, "../lib/emailLinkRedirect.ts"), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const exportsObject = {};
vm.runInNewContext(compiled, { exports: exportsObject });

function destination(pathname, hash) {
  let result = null;
  vm.runInNewContext(exportsObject.emailLinkRedirectScript, {
    URLSearchParams,
    window: { location: { pathname, hash, replace: (url) => { result = url; } } },
  });
  return result;
}

test("invite and recovery landing on home preserve the entire session fragment", () => {
  for (const type of ["invite", "recovery"]) {
    const hash = `#access_token=test-access&refresh_token=test-refresh&type=${type}&expires_in=3600`;
    assert.equal(destination("/", hash), `/aseta-salasana${hash}`);
  }
});

test("password setup and other pages do not enter a redirect loop", () => {
  for (const pathname of ["/aseta-salasana", "/aseta-salasana/", "/auth/callback", "/kauppa"]) {
    assert.equal(destination(pathname, "#type=invite&access_token=test"), null);
  }
});

test("ordinary visits, magic links, OAuth and PKCE are not diverted", () => {
  for (const hash of ["", "#kurssit", "#type=magiclink&access_token=test", "#access_token=test", "#error=access_denied"]) {
    assert.equal(destination("/", hash), null);
  }
});

test("typed expired invitations reach the existing invalid-link screen", () => {
  const hash = "#type=invite&error=access_denied&error_code=otp_expired";
  assert.equal(destination("/", hash), `/aseta-salasana${hash}`);
});

test("fragment parameters cannot choose an external redirect destination", () => {
  const hash = "#type=invite&next=https://example.invalid&redirect_to=//example.invalid";
  assert.equal(destination("/", hash), `/aseta-salasana${hash}`);
});

test("fallback executes before hydration in root layout", () => {
  const layout = fs.readFileSync(path.join(__dirname, "../app/layout.tsx"), "utf8");
  assert.match(layout, /<Script[\s\S]*?id="email-link-redirect"[\s\S]*?strategy="beforeInteractive"[\s\S]*?__html: emailLinkRedirectScript/);
});
