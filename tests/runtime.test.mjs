import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { JSDOM, VirtualConsole } from 'jsdom';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
  .replace('<script src="game.js"></script>', '');
const game = fs.readFileSync(path.join(root, 'game.js'), 'utf8');

const wait = (window, milliseconds) => new Promise((resolve) => {
  window.setTimeout(resolve, milliseconds);
});

async function createGame(storage = {}) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => {
    if (!/Not implemented: HTMLMediaElement/.test(error.message)) errors.push(error);
  });

  const dom = new JSDOM(html, {
    url: 'https://redhead.games/index.html',
    runScripts: 'outside-only',
    pretendToBeVisual: true,
    virtualConsole
  });
  const { window } = dom;

  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  window.navigator.vibrate = () => true;
  for (const [key, value] of Object.entries(storage)) {
    window.localStorage.setItem(key, value);
  }
  window.eval(game);
  window.document.dispatchEvent(new window.Event('DOMContentLoaded'));
  await wait(window, 1400);

  return { dom, errors, window };
}

test('V9.4 starts once and reaches the playable title screen', async () => {
  const { dom, errors, window } = await createGame();

  assert.equal(window.document.title, 'Noir Market V9.4');
  assert.equal(window.NOIR_MARKET_VERSION, '9.4');
  assert.equal(window.document.getElementById('splashLoaderText').textContent, 'ENTER');
  assert.equal(window.document.getElementById('splashEnter').disabled, false);
  assert.equal(window.document.querySelectorAll('#marketTable .row:not(.header)').length, 14);
  assert.equal(window.document.querySelectorAll('.live-dust,.game-dust,canvas').length, 0);
  assert.deepEqual(errors, []);

  dom.window.close();
});

test('older saves migrate without losing player progress', async () => {
  const fresh = await createGame();
  const oldState = JSON.parse(JSON.stringify(fresh.window.s));
  oldState.day = 17;
  oldState.cash = 43210;
  oldState.bank = 9876;
  oldState.city = 3;
  oldState.playerName = 'Regression Runner';
  fresh.dom.window.close();

  const { dom, errors, window } = await createGame({
    noir_market_v8_8: JSON.stringify(oldState)
  });

  assert.equal(window.s.day, 17);
  assert.equal(window.s.cash, 43210);
  assert.equal(window.s.bank, 9876);
  assert.equal(window.s.city, 3);
  assert.equal(window.s.playerName, 'Regression Runner');
  assert.ok(window.localStorage.getItem('noir_market_v9_4'));
  assert.deepEqual(errors, []);

  dom.window.close();
});

test('intro, city selection and trade screens remain connected', async () => {
  const { dom, errors, window } = await createGame();
  const document = window.document;

  document.getElementById('splashEnter').click();
  await wait(window, 20);
  assert.equal(document.getElementById('modalTitle').textContent, 'How to Play');

  const london = [...document.querySelectorAll('button')]
    .find((button) => button.textContent.trim() === 'London');
  assert.ok(london, 'London starting-city button is missing');
  london.click();

  const play = document.getElementById('playWelcomeBtn');
  assert.equal(play.disabled, false);
  play.click();
  await wait(window, 20);

  document.getElementById('buyBtn').click();
  await wait(window, 20);
  assert.equal(document.getElementById('modalTitle').textContent, 'Buy');
  assert.equal(document.querySelectorAll('[data-buydrug]').length, 14);

  document.getElementById('modalCloseBtn').click();
  document.getElementById('travelBtn').click();
  await wait(window, 20);
  assert.match(document.getElementById('modalTitle').textContent, /Travel/i);
  assert.ok(document.querySelectorAll('[data-city]').length >= 13);
  assert.deepEqual(errors, []);

  dom.window.close();
});
