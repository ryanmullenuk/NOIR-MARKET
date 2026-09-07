#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."
if [[ "$(uname -s)" != Darwin ]]; then
  echo "iOS project setup requires a Mac with Xcode 26 or later." >&2
  exit 1
fi
for tool in node npm xcodegen xcodebuild; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "Missing $tool. Install Node.js 22+, Xcode and XcodeGen, then run npm run ios:setup again." >&2
    exit 1
  fi
done
node -e 'if (Number(process.versions.node.split(".")[0]) < 22) { console.error("Node.js 22 or later is required."); process.exit(1); }'
xcode_version="$(xcodebuild -version)"
echo "$xcode_version"
xcode_major="$(awk '/^Xcode / {split($2,v,"."); print v[1]}' <<< "$xcode_version")"
if [[ -z "$xcode_major" || "$xcode_major" -lt 26 ]]; then
  echo "Select Xcode 26 or later in Xcode Settings > Locations > Command Line Tools." >&2
  exit 1
fi
npm ci
npm run check
npm run ios:prepare
xcodegen generate --spec ios/project.yml
if [[ "${CI:-false}" != true ]]; then
  open ios/NoirMarket.xcodeproj
fi
