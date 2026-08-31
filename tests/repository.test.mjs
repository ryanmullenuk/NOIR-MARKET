import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { parse } from 'acorn';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('release metadata is aligned across the app shell', () => {
  const html = read('index.html');
  const manifest = JSON.parse(read('manifest.json'));
  const serviceWorker = read('sw.js');

  assert.match(html, /<title>Noir Market V9\.4<\/title>/);
  assert.equal(manifest.version, '9.4');
  assert.match(serviceWorker, /noir-market-v9\.4/);
});

test('all packaged assets referenced by the app shell exist', () => {
  const required = [
    'index.html',
    'styles.css',
    'game.js',
    'manifest.json',
    'sw.js',
    'assets/redhead-games-logo.png',
    'assets/splash-static.jpg',
    'assets/game-music.mp3',
    'icon-192.png',
    'icon-512.png',
    'apple-touch-icon.png'
  ];

  for (const file of required) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `${file} is missing`);
  }
});

test('game source parses and contains one active top-level declaration per function', () => {
  const source = read('game.js');
  const program = parse(source, { ecmaVersion: 'latest', sourceType: 'script' });
  const names = program.body
    .filter((node) => node.type === 'FunctionDeclaration' && node.id)
    .map((node) => node.id.name);
  const duplicates = names.filter((name, index) => names.indexOf(name) !== index);

  assert.deepEqual([...new Set(duplicates)], []);
  assert.ok(Buffer.byteLength(source) < 400_000, 'game.js exceeded the 400 KB runtime budget');
});

test('the V9.4 startup remains static and single-renderer', () => {
  const source = read('game.js');

  assert.match(source, /window\.NOIR_STATIC_VISUALS=true/);
  assert.match(source, /draw=renderGameV93/);
  assert.match(source, /load=loadGameV93/);
  assert.match(source, /window\.__NOIR_NATIVE_TIMEOUT\(revealTitle,1250\)/);
  assert.doesNotMatch(source, /requestAnimationFrame\(loop\);\s*}\s*loop\(\);/);
});
