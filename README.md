# Noir Market

Noir Market is a static, installable browser game hosted at [redhead.games](https://redhead.games/index.html). The current release is V9.7.

## Run locally

Requirements: Node.js 22+ and Python 3.

```bash
npm ci
npm run serve
```

Open `http://localhost:4173/index.html`.

## Regression checks

```bash
npm run check
```

This validates JavaScript syntax, release metadata, packaged assets, the runtime-size budget, title-screen startup, the intro/city flow, buy and travel screens, and migration of older saves. GitHub Actions runs the same checks for every push to `main` and every pull request.

## Runtime structure

- `index.html` and `styles.css` contain the app shell and responsive UI.
- `game.js` contains game state, features, save migrations and the single active V9.7 renderer.
- `sw.js` provides network-first offline caching; its cache version must change for each release.
- `manifest.json` and the icon files define the installable PWA.
- Browser saves use `localStorage`. V9.7 writes `noir_market_v9_7` and migrates earlier supported keys.

## iOS preparation

Native SwiftUI/WebKit source and StoreKit 2 purchase handling are in `ios/`.
Run `npm run ios:prepare` to bundle the game offline. See [ios/RELEASE.md](ios/RELEASE.md)
for Mac setup, signing, remaining release blockers and the native test matrix.
This is preparation source, not a signed or submitted App Store build.

## Maintenance commands

```bash
npm run clean:legacy
npm run check
```

Before a release, align the version in `package.json`, `index.html`, `manifest.json`, `sw.js`, the metadata controller in `game.js`, and the regression assertions. Never remove an older save key from the migration list without an explicit data-retention decision.
