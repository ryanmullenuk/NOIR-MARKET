import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'acorn';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gamePath = path.join(root, 'game.js');
const source = fs.readFileSync(gamePath, 'utf8');
const comments = [];
const program = parse(source, {
  ecmaVersion: 'latest',
  sourceType: 'script',
  onComment: comments
});

const obsoletePrefixes = [
  'Noir Market V2.8 Loading Optimisation Patch',
  'Legacy compatibility layer: loading text cleanup',
  'Legacy compatibility layer: splash logo priority',
  'Legacy compatibility layer: instant splash particles',
  'Legacy compatibility layer: splash-only canvas snow',
  'Legacy compatibility layer: main screen parallax',
  'Legacy compatibility layer: corrected Redhead Games opening ident',
  'Legacy compatibility layer: corrected main splash logo',
  'Legacy compatibility layer: mobile-safe optimisation layer',
  'Legacy compatibility layer: iOS home screen icon refresh only',
  'Legacy compatibility layer: mobile full-screen splash video',
  'Legacy compatibility layer: full-bleed iOS/PWA icon assets',
  'Legacy compatibility layer: hidden developer testing support',
  'Legacy compatibility layer: hidden testing modal close',
  'Noir Market V8.2: consolidated version metadata',
  'Noir Market V8.2: static splash image',
  'Noir Market V8.2: clean build stabilization',
  'Noir Market V8.2: splash exit',
  'Noir Market V8.3: ENTER freeze fix',
  'Noir Market V8.4: clean splash ENTER recovery',
  'Noir Market V8.5: reliable HOW TO PLAY city PLAY handoff',
  'Noir Market V8.6: performance cleanup'
];

const isIife = (node) => node.type === 'ExpressionStatement'
  && node.expression.type === 'CallExpression'
  && ['FunctionExpression', 'ArrowFunctionExpression'].includes(node.expression.callee?.type);

const removals = [];
const removedLabels = [];

for (const node of program.body) {
  if (!isIife(node)) continue;
  const comment = comments.filter((entry) => entry.end <= node.start).at(-1);
  const label = String(comment?.value ?? '').trim().replace(/\s+/g, ' ');
  if (!obsoletePrefixes.some((prefix) => label.startsWith(prefix))) continue;
  const start = comment?.end <= node.start ? comment.start : node.start;
  removals.push([start, node.end]);
  removedLabels.push(label.split('.')[0]);
}

let cleaned = source;
for (const [start, end] of removals.sort((a, b) => b[0] - a[0])) {
  cleaned = `${cleaned.slice(0, start)}${cleaned.slice(end)}`;
}

cleaned = cleaned.replace(/\n{4,}/g, '\n\n\n');
fs.writeFileSync(gamePath, cleaned);

const bytesRemoved = Buffer.byteLength(source) - Buffer.byteLength(cleaned);
console.log(`Removed ${removals.length} obsolete release layers (${bytesRemoved.toLocaleString()} bytes).`);
for (const label of removedLabels) console.log(`- ${label}`);
