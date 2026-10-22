import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/data/siteVersion.json';
const data = JSON.parse(readFileSync(path, 'utf8'));
const match = /^(\d+)\.(\d)\.(\d)$/.exec(data.version);
if (!match) throw new Error(`Odottamaton versionumero: ${data.version}`);

let [major, minor, patch] = match.slice(1).map(Number);
patch++;
if (patch === 10) {
  patch = 0;
  minor++;
}
if (minor === 10) {
  minor = 0;
  major++;
}

data.version = `${major}.${minor}.${patch}`;
writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
console.log(`Uusi versio: ${data.version}`);
