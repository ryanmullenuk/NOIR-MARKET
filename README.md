Noir Market

Every city has a price.

Noir Market is a dark, street-level trading game built around risk, movement, rumours, police heat and survival. The player buys stock in one city, moves across the map, watches market changes, manages cash and reputation, and tries to climb the ranks without getting caught, robbed, raided or wiped out.

The game is designed as a lightweight browser-based web app with mobile-first presentation and installable PWA behaviour.

⸻

Current Version

Version: V5.0
Status: Stable test build
Build type: Browser / PWA
Primary platform: Mobile browser, especially iPhone Safari
Secondary platform: Desktop browser

⸻

Game Summary

Noir Market is a trading and risk-management game.

Players must:

* Buy stock when prices are low.
* Travel between cities.
* Sell when prices rise.
* Use storage and vaults to manage risk.
* Avoid police heat.
* Manage loans, finances, contacts and informants.
* Build reputation and climb the rank system.
* Survive long enough to grow net worth.

The game tone is dark, British, street-level and slightly ridiculous.

⸻

Tagline

Every city has a price.

Alternative splash line:

TRADE. RISK. SURVIVE.

⸻

Main Features

Market

The market shows city-specific prices. Prices change based on daily movement, supply, demand, player activity, rumours and news events.

Players can buy and sell stock depending on available cash, carried inventory and local prices.

Storage and Vaults

Each city has its own storage/vault system.

Items stored in one city remain in that city unless the player returns or exports stock through shipping.

Vault upgrades increase capacity and allow safer stock management.

Travel

Players can move between cities to find better prices and opportunities.

Travel can trigger:

* police stops
* seizures
* fines
* arrests
* weapon checks
* random events
* heat-based encounters

Carrying weapons or high-risk stock increases danger.

Shipping / Export

Players can export stock between cities rather than carrying it directly.

Exports can be made from:

* carried stock
* current city vault stock

Shipments carry cost and risk.

Finances

The finance section shows:

* cash held
* bank balance

Players can deposit or withdraw money, including deposit all and withdraw all options.

Black Market

The black market allows players to buy high-risk items such as weapons.

Weapons may be useful, but carrying them while travelling increases police risk.

Hustle

The hustle section contains side opportunities, informants and future business features.

Informants can provide useful tips, false information, vague advice or scams.

Contacts

Contacts allow the player to attempt deals and opportunities.

Results can succeed or fail based on risk, reputation and chance.

Loans

Players can borrow money from lenders.

Loans include:

* borrowing limits
* interest
* repayment deadlines
* early repayment behaviour
* penalties for missed repayment

News and Rumours

The news ticker and rumour system provide market signals, city events and occasional misinformation.

Rumours are not always reliable.

Reputation and Rank

Reputation affects how people deal with the player.

Rank is based on net worth and progression, with the possibility of dropping if wealth falls below the required threshold.

Heat

Heat represents police attention.

Higher heat increases the risk of:

* travel stops
* searches
* raids
* seizures
* arrests
* failed bribe attempts

⸻

V5.0 Key Build Notes

V5.0 is intended as a cleaned-up stable baseline.

Recent improvements include:

* new Noir Market splash logo
* Redhead Games opening ident
* snow-effect splash screen
* animated splash tagline
* loading / enter sequence
* home screen instructions text
* in-game Instructions section
* HOW TO PLAY link to full instructions
* parallax main screen background
* weapon travel risk system
* police bribe resolution system
* improved finance view
* export from carried stock or vault
* clearer contact deal results
* mobile splash layout refinement

⸻

Splash Screen Flow

The intended opening sequence is:

1. Redhead Games logo fades in.
2. Snow effect starts behind the intro.
3. Redhead Games logo fades out.
4. Noir Market splash logo fades in.
5. Tagline cycles:
    * TRADE.
    * RISK.
    * SURVIVE.
6. Loading bar reaches 100%.
7. Button changes to ENTER.
8. Player enters the game.

Splash instruction text:

INSTRUCTIONS
For a better gaming experience, click share and add to homescreen.

⸻

Project Structure

Typical build structure:

index.html
game.js
styles.css
manifest.json
sw.js
CHANGELOGMASTER.txt
assets/
  music/
  splash assets
  background assets
  logo assets
icons/

Exact folder structure may vary depending on packaged release.

⸻

PWA Notes

Noir Market is designed to run as a lightweight installable web app.

Important PWA files:

* manifest.json
* sw.js
* app icons
* Apple touch icons

When deployed under a shared domain, the service worker should be scoped carefully so it does not interfere with other games or apps on the same website.

Recommended deployment path if hosted with NoirJack:

/noir-market/

or:

/market/

Service worker scope should match the game folder only.

⸻

Deployment Notes

Before uploading a new release:

1. Clear old browser cache during testing.
2. Test in desktop browser.
3. Test in iPhone Safari.
4. Test Add to Home Screen behaviour.
5. Confirm service worker updates.
6. Confirm save migration still works.
7. Confirm splash screen loads correctly.
8. Confirm game enters cleanly after pressing ENTER.

⸻

Manual Test Checklist

Recommended checks before release:

* Redhead Games logo fades in and out.
* Snow starts before Noir Market logo appears.
* Noir Market splash fades in smoothly.
* Loading bar completes.
* ENTER button works.
* HOW TO PLAY screen opens.
* INSTRUCTIONS button opens full instructions.
* Main game screen loads.
* Market is visible.
* Buy action works.
* Sell carried stock works.
* Sell vault stock works.
* Storage and vault transfer works.
* Travel works.
* Weapon travel warning appears when carrying weapons.
* Stash weapons option works.
* Ditch weapons option works.
* Shipping export works from carried stock.
* Shipping export works from vault.
* Finances show cash and bank balance.
* Deposit all works.
* Withdraw all works.
* Contact deal result shows SUCCESS or FAILURE.
* Loans borrow and repay correctly.
* Police bribe modal appears where applicable.
* Accepted bribe releases player.
* Failed bribe advances day and applies jail outcome.
* Save and reload works.
* New game works.

⸻

Design Direction

The visual style should remain:

* black
* white
* minimal
* sharp
* premium
* high contrast
* mobile-first
* dark atmospheric
* clean rather than cluttered

The game should feel modern and controlled, not cartoonish or overdesigned.

⸻

Tone of Voice

Game copy should be:

* dark
* British
* short
* sharp
* slightly funny
* street-level
* not too long
* not too serious
* not overly polished

Example tone:

You move carefully and nobody checks the bag. Lucky, not smart.

The officer pockets the cash without looking at it. You got lucky.

The market shifts again. Someone, somewhere, has made a bad decision.

⸻

Development Rules

For future updates:

* Preserve existing working gameplay unless a change is specifically requested.
* Increment the version number for every packaged release.
* Keep save migration from older versions.
* Update CHANGELOGMASTER.txt with each release.
* Run syntax checks before packaging.
* Do not reintroduce heavy startup routines.
* Keep music loading after user interaction.
* Keep splash performance smooth on mobile.
* Avoid unnecessary full-game redraws.
* Do not allow modals to stack.
* Keep section pages full-screen where required.
* Ensure background pages do not scroll or remain interactive under full-screen sections.

⸻

Known Priority

V5.0 is treated as the current stable baseline for future development.

Future work should build from V5.0 unless a later stable release replaces it.

⸻

License / Ownership

Private project owned by Redhead Games.

No reuse, copying, redistribution or commercial deployment is permitted without permission from the owner.
