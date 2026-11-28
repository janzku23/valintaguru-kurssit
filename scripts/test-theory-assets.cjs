const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const { execFileSync } = require("node:child_process");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const createLoader = require("./shop-test-loader.cjs");

const root = path.resolve(__dirname, "..");
const absolute = path.join(root, "components/TheoryCard.tsx");
const component = new Module(absolute, module);
component.paths = module.paths;
component._compile(ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText, absolute);
const TheoryCard = component.exports.default;
const { biologiaTheorySections } = createLoader()("data/courseContent/biologia.ts");

test("every rendered biology theory image matches an existing asset with the exact production filename", () => {
  // Exact Git names also catch case errors on case-insensitive development Macs.
  const tracked = new Set(execFileSync("git", ["ls-files", "-z", "public/theory/biologia"], { cwd: root, encoding: "utf8" }).split("\0"));
  const images = [];
  for (const section of biologiaTheorySections) {
    const markup = renderToStaticMarkup(React.createElement(TheoryCard, { section }));
    for (const image of markup.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      const file = `public${image[1]}`;
      assert.ok(tracked.has(file), `Missing exact filename: ${file}`);
      assert.ok(fs.statSync(path.join(root, file)).isFile());
      images.push(image[1]);
    }
  }
  assert.equal(images.length, biologiaTheorySections.flatMap(section => section.blocks ?? []).filter(block => block.image).length);
  assert.ok(images.includes("/theory/biologia/Lihakset.jpg"));
  assert.ok(images.includes("/theory/biologia/keuhkotuuletus.png"));
});

test("an unlisted image keeps the established PNG path", () => {
  const section = { id: "future", title: "Future", blocks: [{ id: "new", title: "New", image: { fileName: "future-diagram" } }] };
  const markup = renderToStaticMarkup(React.createElement(TheoryCard, { section }));
  assert.match(markup, /src="\/theory\/biologia\/future-diagram\.png"/);
});
