import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'acorn';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gamePath = path.join(root, 'game.js');
const source = fs.readFileSync(gamePath, 'utf8');
const program = parse(source, {
  ecmaVersion: 'latest',
  sourceType: 'script',
  allowHashBang: true
});

const declarations = new Map();

for (const node of program.body) {
  if (node.type !== 'FunctionDeclaration' || !node.id) continue;
  const entries = declarations.get(node.id.name) ?? [];
  entries.push(node);
  declarations.set(node.id.name, entries);
}

const removals = [];
const removedNames = [];

for (const [name, nodes] of declarations) {
  if (nodes.length < 2) continue;
  removedNames.push(`${name}:${nodes.length - 1}`);
  for (const node of nodes.slice(0, -1)) removals.push([node.start, node.end]);
}

let cleaned = source;

for (const [start, end] of removals.sort((a, b) => b[0] - a[0])) {
  cleaned = `${cleaned.slice(0, start)}${cleaned.slice(end)}`;
}

cleaned = cleaned.replace(/\n{4,}/g, '\n\n\n');
fs.writeFileSync(gamePath, cleaned);

const bytesRemoved = Buffer.byteLength(source) - Buffer.byteLength(cleaned);
console.log(`Removed ${removals.length} shadowed top-level function declarations (${bytesRemoved.toLocaleString()} bytes).`);
console.log(`Functions: ${removedNames.join(', ')}`);
