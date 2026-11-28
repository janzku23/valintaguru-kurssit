const fs = require("node:fs"),
  path = require("node:path"),
  Module = require("node:module"),
  ts = require("typescript");
module.exports = function createLoader(mocks = {}) {
  const cache = new Map();
  function resolveFile(file) {
    const absolute = path.resolve(__dirname, "..", file);
    for (const candidate of [absolute, `${absolute}.ts`, `${absolute}.tsx`, path.join(absolute, "index.ts"), path.join(absolute, "index.tsx")]) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
    }
    throw new Error(`Test module not found: ${file}`);
  }
  function load(file) {
    const absolute = resolveFile(file);
    if (cache.has(absolute)) return cache.get(absolute).exports;
    const mod = new Module(absolute, module);
    mod.paths = module.paths;
    cache.set(absolute, mod);
    mod.require = (id) => {
      if (Object.hasOwn(mocks, id)) return mocks[id];
      if (id === "server-only") return {};
      if (id.startsWith("@/")) return load(id.slice(2));
      if (id.startsWith(".")) {
        return load(path.resolve(path.dirname(absolute), id));
      }
      return require(id);
    };
    mod._compile(
      ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2022,
          jsx: ts.JsxEmit.ReactJSX,
        },
      }).outputText,
      absolute,
    );
    return mod.exports;
  }
  return load;
};
