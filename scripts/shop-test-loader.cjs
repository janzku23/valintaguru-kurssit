const fs = require("node:fs"),
  path = require("node:path"),
  Module = require("node:module"),
  ts = require("typescript");
module.exports = function createLoader(mocks = {}) {
  const cache = new Map();
  function load(file) {
    const absolute = path.resolve(__dirname, "..", file);
    if (cache.has(absolute)) return cache.get(absolute).exports;
    const mod = new Module(absolute, module);
    mod.paths = module.paths;
    cache.set(absolute, mod);
    mod.require = (id) => {
      if (Object.hasOwn(mocks, id)) return mocks[id];
      if (id === "server-only") return {};
      if (id.startsWith("@/")) return load(id.slice(2) + ".ts");
      if (id.startsWith(".")) {
        let target = path.resolve(path.dirname(absolute), id);
        if (!path.extname(target)) target += ".ts";
        return load(target);
      }
      return require(id);
    };
    mod._compile(
      ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2022,
        },
      }).outputText,
      absolute,
    );
    return mod.exports;
  }
  return load;
};
