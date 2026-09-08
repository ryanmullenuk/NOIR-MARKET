# Noir Market: iOS preparation and release handoff

Status: compiled with Xcode 26.3 on GitHub's iPhone simulator runner. NOT signed
for a device, NOT tested on a physical iPhone, NOT uploaded, NOT submitted.
Both native UI tests passed in [run 34170815218](https://github.com/ryanmullenuk/NOIR-MARKET/actions/runs/34170815218):
Free Play (including choosing Manchester and reaching playable controls), and
opening/closing the privacy sheet. That run omitted the then-missing icon.
The icon is now included; use the latest **iOS simulator checks** result to verify
the complete asset-catalog build and unsigned iPhone Release compilation.
Web regression results do not prove that StoreKit works on an iPhone.

## Proposed first release

- App name: Noir Market. Proposed bundle ID: `games.redhead.noirmarket` (confirm
  availability in your Developer account before registering).
- Version 1.0, build 1. iPhone portrait, iOS 16+ deployment target.
- Three free cities. One non-consumable purchase unlocks all 14 cities.
- Product ID: `games.redhead.noirmarket.unlockallcities`.
- Agreed UK one-off unlock price: **£1.99 GBP** (confirmed by Ryan). Configure
  this in App Store Connect; it has NOT been set in the Apple account by this
  repository update. Keep the in-app price sourced from StoreKit displayPrice.
- Support contact: **ryanmullenuk@yahoo.co.uk**.
- Support URL: **https://redhead.games/support.html**.
- Privacy policy URL: **https://redhead.games/privacy.html**.
- No ads, accounts, online leaderboard or subscription in this build.
- Existing on-device save behaviour retained for both modes. The previously
  discussed paid-only saves/reset-on-quit proposal is NOT implemented.
- Native SwiftUI + WKWebView with bundled local game assets, not a remotely
  hosted website. The live web game is unchanged.

## Prepare on your Mac

### Simplified setup

With the tools below installed, run `npm run ios:setup` from the repository
root. This checks the selected Xcode version, installs dependencies, runs the
JavaScript checks, bundles the game, generates the project and opens Xcode.
It does not change your Apple account or install signing credentials.

Alternatively, open the latest **iOS simulator checks** run in GitHub Actions
and download **NoirMarket-Xcode-project** once its packaging step succeeds.
Extract it and open `ios/NoirMarket.xcodeproj`. This contains the source and game
resources, not an installable iPhone app. Make lasting edits in a repository
checkout so they can be saved back to GitHub.

The workflow builds using Xcode 26.3 on a macOS runner and runs two native UI
tests: title → Free Play → city selection → playable screen, and opening and
closing Privacy & support. Check the run result for the exact commit being
released. A generated project artifact alone does not prove compilation passed.
Result bundles and compiler output are saved separately. The app icon is included
in the normal asset-catalog build; no icon override is required.
Purchase verification, physical device tests and signed archive validation are
separate release gates.

The workflow also compiles the Release configuration for a generic iPhone with
signing disabled. This checks device-SDK compilation and packaging, but produces
neither a distributable archive nor an IPA that can be installed on your phone.

### Manual setup

Install Xcode 26 or later from Apple, launch it once, accept its licence and
install an iOS simulator. Install Node.js 22+ and XcodeGen if absent. XcodeGen is
a build-time project generator; it is not an SDK embedded in the app.

From the repository root:

```sh
npm ci
npm run check
npm run ios:prepare
cd ios
xcodegen generate
open NoirMarket.xcodeproj
```

In Xcode select the NoirMarket target, Signing & Capabilities, then select your
Apple team and leave automatic signing on. Confirm the bundle ID. Keep signing
keys, certificates and App Store Connect API keys OUT of the repo and chat.

The generated `.xcodeproj` and Web folder are intentionally ignored. The source
of truth is project.yml and the repository's web assets. Run ios:prepare after
any web change, then regenerate the project if files/settings changed. Record
final signing/build configuration in project.yml, not only the generated project.

Build the simulator before signing:

```sh
xcodebuild -project NoirMarket.xcodeproj -scheme NoirMarket \
  -sdk iphonesimulator -configuration Debug CODE_SIGNING_ALLOWED=NO build
```

Fix any compiler/SDK errors, then run on a physical iPhone. This command has NOT
been run in the Linux preparation environment.

## Release blockers to resolve before an archive

1. Review the included 1024x1024 opaque App Store icon at home-screen size. It
   uses the established plain bold white NOIR MARKET title on black. The PNG
   in Assets.xcassets is the build asset; ios/AppIcon.svg is the editable source.
2. Set the agreed UK unlock price to £1.99 and choose territories in App Store
   Connect. Complete Apple's
   paid-app agreement, banking and tax steps in your account if required. The
   app reads Apple's localised displayPrice; there is no hard-coded price.
3. Enter the support and privacy URLs above into App Store Connect and verify
   both public pages load before submission. The in-app placeholder has been
   replaced with the support email and links. Monitor the published mailbox and
   handle support correspondence according to the privacy policy.
4. Review the privacy manifest against the final archive and any added SDKs.
   The draft declares no tracking/data collection and no directly used
   required-reason APIs. It is not an audit of an as-yet-unbuilt binary.
5. Confirm rights for the bundled game music, Redhead logo and all artwork.
   The rejected personal-use title font is not included.
6. Complete the current age-rating questionnaire honestly for drug references,
   crime, violence and any gambling-style mechanics. Do not pick a rating first
   and tailor answers to it. Apple calculates the rating from the answers.
7. Review export-compliance questions against the finished binary. This project
   does not predeclare a cryptography exemption on your behalf.

## Purchase safety and tests

StoreKit 2 verifies transactions on-device. Only the matching, non-revoked
product in currentEntitlements grants access. Transaction updates handle pending
approvals and revocations. Restore calls AppStore.sync only on a user action.
The web package builder removes UNLOCK WEB PREVIEW entirely, and ignores saved
unlock flags until the native entitlement is checked. The bridge accepts only
the bundled main frame and fixed product ID. This is not a server-authoritative
anti-cheat system; local game state can always be modified on a compromised device.

Configure the non-consumable in App Store Connect and, for local tests, create a
StoreKit Configuration in Xcode with that exact product ID. Do not submit
screenshots that show local test pricing as production pricing.

Required native test matrix (all currently pending):

- Small and large iPhones: logo fade, white two-line title, snow pile, ENTER,
  safe areas, keyboard, all dialogs, scrolling and orientation restrictions.
- Free start, each free city, locked travel/shipping, full start after purchase.
- Successful purchase, cancellation, pending approval, unavailable product,
  offline purchase attempt, restore with/without ownership, refund/revocation.
- Force quit/relaunch, background/foreground, device restart and app update:
  saves survive; verified city access refreshes without losing progress.
- Flight mode: bundled assets, sound and gameplay work. Purchases need Apple.
- Buy/sell, finances, storage, travel, stay, next day, menus, new game and endgame.
- Audio interruption, silent switch, Reduced Motion and VoiceOver controls.
- Web-process termination recovery, long sessions and memory/performance.
- Reinstall: explain that restore recovers purchase ownership, not local saves.
- Confirm web Safari progress is not assumed to migrate into the native sandbox.

## App Store Connect and submission

Create a new iOS app with the matching registered bundle ID. Confirm the name,
primary language, SKU and ownership details. No account has been created or
configured by this preparation work.

Draft subtitle: **Trade. Travel. Survive.**

Draft description:

> Noir Market is a fictional turn-based crime strategy game. Start with £1,000,
> trade in changing markets, manage cash and storage, and decide when to move on.
> News stories can point towards tomorrow's opportunity, but not every rumour is
> reliable. Balance profit against heat, debt and health over a 30-day run.
>
> Play in London, Manchester and Birmingham for free. A one-off in-app purchase
> unlocks all 14 cities and their travel and shipping routes. No subscription.
> Game progress is saved on your device. There are no real-world goods or
> real-money rewards.

Draft review note (use only after native verification):

> This is an offline fictional crime/trading game, not a marketplace for real
> goods. No login is required. Tap ENTER > FREE PLAY > choose a city > PLAY FREE.
> For the non-consumable, tap UNLOCK ALL CITIES and use Apple's purchase sheet.
> Restore Purchases is available in the native footer. Drug references are
> fictional game content and have been declared in the age-rating questionnaire.

Provide real screenshots from the finished iPhone build, not browser mockups.
For an iPhone-only target use an accepted iPhone screenshot size; check the
current specification below. Add an IAP review screenshot and submit the first
IAP with its app version. Answer app privacy based on the final build, complete
review contact details and select manual release if you want control after approval.

In Xcode choose a physical/generic iOS destination, Product > Archive. Validate
the archive, then Distribute App > App Store Connect > Upload. After processing,
test through TestFlight before attaching that exact build to version 1.0 and
submitting the app and purchase for review. No signed archive or upload exists yet.

## Review risk and official references (checked 7 September 2026)

Apple requires Xcode 26+ and iOS 26 SDK+ for uploads since 28 April 2026. This is
the build SDK requirement, not a requirement to drop support for older iPhones.
https://developer.apple.com/news/upcoming-requirements/

Guideline 1.4.3 prohibits encouraging illegal drug consumption/facilitating real
controlled-substance sales. Fictional depiction is not the same as an actual
sale, but the game's theme is a review risk, not a guaranteed acceptance. A
disclaimer or high age rating does not guarantee compliance. Do not conceal the
theme. Guideline 4.2 also assesses lasting entertainment/app functionality.
https://developer.apple.com/app-store/review/guidelines/

Privacy policy URL is required and the policy must also be accessible in-app:
https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/

Screenshot requirements:
https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/

StoreKit entitlements and restore:
https://developer.apple.com/documentation/storekit/transaction/currententitlements
https://developer.apple.com/documentation/storekit/appstore/sync()

XcodeGen setup:
https://github.com/yonaskolb/XcodeGen
