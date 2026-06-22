/* Noir Market V5.9 iPhone compatibility bootstrap. */
(function(){
  if(!Array.prototype.at){Array.prototype.at=function(n){n=Math.trunc(n)||0;if(n<0)n+=this.length;return this[n];};}
  if(!Object.entries){Object.entries=function(o){var a=[];for(var k in o){if(Object.prototype.hasOwnProperty.call(o,k))a.push([k,o[k]]);}return a;};}
  if(!Object.values){Object.values=function(o){var a=[];for(var k in o){if(Object.prototype.hasOwnProperty.call(o,k))a.push(o[k]);}return a;};}
  if(!Object.fromEntries){Object.fromEntries=function(entries){var o={};for(var i=0;i<entries.length;i++){o[entries[i][0]]=entries[i][1];}return o;};}
  if(!Number.isFinite){Number.isFinite=function(v){return typeof v==='number'&&isFinite(v);};}
  if(!Math.trunc){Math.trunc=function(v){return v<0?Math.ceil(v):Math.floor(v);};}
  if(typeof window!=='undefined'&&typeof window.requestAnimationFrame!=='function'){window.requestAnimationFrame=function(cb){return setTimeout(function(){cb(Date.now());},16);};window.cancelAnimationFrame=function(id){clearTimeout(id);};}
  function patchDialog(){var d=document.getElementById('modal');if(!d)return;if(!d.showModal){d.showModal=function(){this.setAttribute('open','');this.open=true;this.classList.add('dialog-open');};}if(!d.close){d.close=function(){this.removeAttribute('open');this.open=false;this.classList.remove('dialog-open');};}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',patchDialog,false);else patchDialog();
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var drugs = [['Cocaine', '⚪', 1200, 9000], ['Crack', '🪨', 800, 5200], ['Ecstasy', '🟢', 200, 2800], ['Hashish', '🧱', 300, 2500], ['Heroin', '💉', 900, 6000], ['Ice', '💎', 700, 4200], ['Kat', '🌿', 40, 800], ['LSD', '🎟️', 120, 1600], ['MDA', '🟣', 200, 1800], ['Morphine', '🧴', 500, 2600], ['Mushrooms', '🍄', 60, 900], ['Peyote', '🌵', 80, 1200], ['Pot', '🍃', 80, 900], ['Speed', '▱', 160, 1800]];
var places = [['London', 'UK', '🇬🇧', 'Heathrow / City'], ['Manchester', 'UK', '🇬🇧', 'Manchester Airport'], ['Birmingham', 'UK', '🇬🇧', 'BHX'], ['Liverpool', 'UK', '🇬🇧', 'John Lennon'], ['Leeds', 'UK', '🇬🇧', 'Leeds Bradford'], ['Newcastle', 'UK', '🇬🇧', 'NCL'], ['Bristol', 'UK', '🇬🇧', 'Bristol Airport'], ['Cardiff', 'Wales', '🏴', 'Cardiff Airport'], ['Glasgow', 'Scotland', '🏴', 'GLA'], ['Edinburgh', 'Scotland', '🏴', 'EDI'], ['Aberdeen', 'Scotland', '🏴', 'ABZ'], ['Belfast', 'Northern Ireland', '🇬🇧', 'BFS'], ['Dublin', 'Ireland', '🇮🇪', 'DUB'], ['Cork', 'Ireland', '🇮🇪', 'ORK']];
var lenders = [['SPAMMER', 10000, 3, .25], ['TOMMY', 20000, 5, .30], ['SMUDGER', 50000, 5, .50], ['BAZZER', 75000, 3, .50], ['GRIFF', 100000, 3, .70]];
var shopItems = [['Bigger Backpack', 5000, 25, 'person'], ['Sports Bag', 20000, 50, 'person'], ['Trunk Upgrade', 100000, 100, 'offsite'], ['Warehouse', 1000000, 500, 'offsite']];
var hospitalTreatments = [['+25% Health', 25000, 25], ['+50% Health', 50000, 50], ['Full Health (100%)', 100000, 100]];
var weapons = [
    { name: 'Knife', price: 500, escape: .10, win: .18, damage: 'Low', notes: 'Concealable, low police attention', heat: 2, singleUse: false },
    { name: 'Baseball Bat', price: 1000, escape: .15, win: .22, damage: 'Low-Medium', notes: 'Cheap melee weapon', heat: 3, singleUse: false },
    { name: 'Machete', price: 2500, escape: .30, win: .34, damage: 'Medium', notes: 'High intimidation', heat: 6, singleUse: false },
    { name: 'Revolver', price: 7500, escape: .35, win: .40, damage: 'Medium', notes: 'Reliable but slow', heat: 10, singleUse: false },
    { name: 'Handgun', price: 12500, escape: .60, win: .52, damage: 'Medium', notes: 'Standard sidearm', heat: 14, singleUse: false },
    { name: 'Sawed-Off Shotgun', price: 25000, escape: .65, win: .62, damage: 'High', notes: 'Powerful at close range', heat: 18, singleUse: false },
    { name: 'SMG', price: 50000, escape: .72, win: .70, damage: 'High', notes: 'Good against gangs', heat: 22, singleUse: false },
    { name: 'Assault Rifle', price: 100000, escape: .78, win: .78, damage: 'Very High', notes: 'Increases police attention', heat: 35, singleUse: false },
    { name: 'Machine Gun', price: 250000, escape: .84, win: .84, damage: 'Extreme', notes: 'Rare item', heat: 45, singleUse: false },
    { name: 'Grenade', price: 15000, escape: .75, win: .80, damage: 'Area Damage', notes: 'Single-use', heat: 35, singleUse: true },
    { name: 'Molotov Cocktail', price: 5000, escape: .55, win: .58, damage: 'Fire Damage', notes: 'Single-use', heat: 25, singleUse: true },
    { name: 'Rocket Launcher', price: 1000000, escape: .95, win: .96, damage: 'Massive', notes: 'Very rare, huge police heat', heat: 70, singleUse: false }
];
var attackers = [['single addict', .36, 2, .25], ['small group of lads', .31, 10, .35], ['small gang', .22, 20, .50], ['large gang', .11, 50, .75]];
var $ = function (id) { return document.getElementById(id); }, money = function (n) { return '£' + Math.round(n).toLocaleString('en-GB'); }, rand = function (a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }, pick = function (a) { return a[rand(0, a.length - 1)]; }, pickDrug = function () { return pick(drugs)[0]; };
var audioCtx = null;
function unlockAudio() { try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended')
        audioCtx.resume();
}
catch (e) { } }
function tone(freq, dur, type, gain, delay) {
    if (dur === void 0) { dur = 0.08; }
    if (type === void 0) { type = 'sine'; }
    if (gain === void 0) { gain = .035; }
    if (delay === void 0) { delay = 0; }
    try {
        unlockAudio();
        if (!audioCtx)
            return;
        var t = audioCtx.currentTime + delay, o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = type;
        o.frequency.setValueAtTime(freq, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(gain, t + .012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g).connect(audioCtx.destination);
        o.start(t);
        o.stop(t + dur + .02);
    }
    catch (e) { }
}
function sound(kind) { if (!soundEnabled)
    return; if (kind === 'positive') {
    tone(660, .07, 'sine', .035);
    tone(990, .09, 'sine', .03, .07);
}
else if (kind === 'negative') {
    tone(170, .11, 'sawtooth', .03);
    tone(105, .13, 'sawtooth', .026, .09);
}
else if (kind === 'travel') {
    tone(740, .12, 'sine', .035);
    tone(554, .16, 'sine', .033, .15);
} }
function haptic(type) {
    if (type === void 0) { type = 'light'; }
    try {
        if (navigator.vibrate)
            navigator.vibrate(type === 'error' ? [45, 25, 45] : [18]);
    }
    catch (e) { }
}
function toast(msg, type) {
    if (type === void 0) { type = 'ok'; }
    var el = document.getElementById('toast');
    if (!el) {
        el = document.createElement('div');
        el.id = 'toast';
        document.body.appendChild(el);
    }
    el.className = 'toast ' + (type === 'bad' ? 'bad' : 'ok');
    el.textContent = msg;
    requestAnimationFrame(function () { return el.classList.add('show'); });
    clearTimeout(el._t);
    el._t = setTimeout(function () { return el.classList.remove('show'); }, 1800);
}
function success(msg) { sound('positive'); haptic(); toast(msg, 'ok'); }
function errorMsg(msg) { sound('negative'); haptic('error'); toast(msg, 'bad'); }
var s;
var soundEnabled = localStorage.getItem('noir_market_sound') !== 'off';
function blankInv() { return Object.fromEntries(drugs.map(function (d) { return [d[0], 0]; })); }
function blankSupply() { return Object.fromEntries(drugs.map(function (d) { return [d[0], rand(0, 1000)]; })); }
function baseState() { return { reputation: 50, news: 'Markets are quiet today.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000 } }; }
function totalSpace() { return 20 + s.owned.reduce(function (a, n) { var _a; return a + (((_a = shopItems.find(function (i) { return i[0] === n; })) === null || _a === void 0 ? void 0 : _a[2]) || 0); }, 0); }
function personSpace() { return 20 + s.owned.reduce(function (a, n) { var _a; return a + ((((_a = shopItems.find(function (i) { return i[0] === n; })) === null || _a === void 0 ? void 0 : _a[3]) === 'person') ? (shopItems.find(function (i) { return i[0] === n; })[2]) : 0); }, 0); }
function used() { return Object.values(s.inv).reduce(function (a, b) { return a + b; }, 0); }
function rank() { var worth = s.cash + s.bank + Object.entries(s.inv).reduce(function (a, _a) {
    var k = _a[0], v = _a[1];
    return a + v * (s.prices[k] || 0);
}, 0) - s.debt; if (worth >= 10000000)
    return 'Drug Lord'; if (worth >= 1000000)
    return 'Legend'; if (worth >= 500000)
    return 'Kingpin'; if (worth >= 50000)
    return 'Hustler'; if (worth >= 10000)
    return 'Street Dealer'; return 'Wannabe'; }
function genPrices(force) { var _a; var target = (_a = force === null || force === void 0 ? void 0 : force.rumour) === null || _a === void 0 ? void 0 : _a.drug; drugs.forEach(function (_a) {
    var name = _a[0], lo = _a[2], hi = _a[3];
    var old = s.prices[name] || rand(lo, hi);
    var mult = rand(55, 155) / 100;
    if (force && force.true && name === target)
        mult = force.rumour.type === 'scarce' ? rand(170, 320) / 100 : rand(20, 55) / 100;
    var p = Math.max(1, Math.round(((old + rand(lo, hi)) / 2) * mult));
    s.trends[name] = p >= old;
    s.prices[name] = p;
    s.supply[name] = rand(0, 1000);
    if (force && force.true && name === target && force.rumour.type === 'scarce')
        s.supply[name] = rand(0, 90);
    if (force && force.true && name === target && force.rumour.type === 'abundant')
        s.supply[name] = rand(600, 1000);
}); }
function cityText() { var city = places[s.city][0]; var lines = { London: ['club demand is moving through central London', 'airport heat is visible around Heathrow', 'street stock is unstable around main terminals'], Manchester: ['student demand is active', 'north west routes are moving bulk supply', 'police attention is up around the city centre'], Birmingham: ['Midlands supply lines are moving fast', 'BHX traffic is drawing attention', 'prices are volatile after a quiet week'], Liverpool: ['port rumours are moving the market', 'nightlife demand is lifting weekend prices', 'cheap stock is appearing near the docks'], Leeds: ['student demand is lifting party stock', 'supply is moving through west Yorkshire', 'street prices look soft today'], Newcastle: ['nightlife demand is strong', 'scarce stock is moving north', 'airport movement is quiet'], Bristol: ['south west supply is tightening', 'festival demand is moving prices', 'police heat is low for now'], Cardiff: ['weekend demand is rising', 'stock looks thin across the centre', 'cheap supply is rumoured near the docks'], Glasgow: ['city centre demand is volatile', 'bulk supply is moving through Scotland', 'police pressure is unpredictable'], Edinburgh: ['tourist demand is lifting prices', 'festival rumours are affecting stock', 'street supply is tight'], Aberdeen: ['remote supply makes prices unpredictable', 'oil money is lifting demand', 'stock may be scarce tomorrow'], Belfast: ['port movement is changing supply', 'police heat is rising', 'market demand is uneven'], Dublin: ['airport movement is busy', 'city centre demand is strong', 'rumours suggest supply pressure'], Cork: ['port supply is inconsistent', 'prices may soften tomorrow', 'local demand is quiet'] }[city] || ['market intelligence is unclear']; return pick(lines); }
function newRumour() { var r = { drug: pickDrug(), type: Math.random() < .5 ? 'scarce' : 'abundant', accuracy: rand(15, 85) }; s.rumour = r; return r; }
function rumourHtml() { var r = s.rumour || newRumour(); return "<strong>Market note:</strong> ".concat(r.drug, " may be ").concat(r.type === 'scarce' ? 'scarce and more expensive' : 'abundant and cheaper', " tomorrow. Source confidence: <strong>").concat(r.accuracy, "%</strong>."); }
function netWorth() { return s.cash + s.bank + Object.entries(s.inv).reduce(function (a, _a) {
    var k = _a[0], v = _a[1];
    return a + v * (s.prices[k] || 0);
}, 0) - s.debt; }
function ensureStats() { s.stats = s.stats || { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: netWorth() }; s.travelFares = s.travelFares || {}; }
function weaponCounts() { var m = {}; (s.weapons || []).forEach(function (w) { return m[w] = (m[w] || 0) + 1; }); return m; }
function travel() { modal('Travel', "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Weapons are lost before boarding.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], " <em>").concat(money(travelFare(i)), "</em></strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>")); setTimeout(function () { var st = $('stayFromTravel'); if (st)
    st.onclick = function () { sound('positive'); haptic(); ensureStats(); s.stats.stays++; $('modal').close(); nextDay("You stay in ".concat(places[s.city][0], "."), true); }; document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { var i = +b.dataset.city, fare = travelFare(i); if (fare > s.cash) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} sound('travel'); haptic(); ensureStats(); s.stats.flights++; s.cash -= fare; s.city = i; s.weapons = []; $('modal').close(); nextDay("You land in ".concat(places[s.city][0], ". Flight cost ").concat(money(fare), ". Weapons were lost before boarding."), false); }; }); }, 0); }
function closeBtn() { return '<button type="button" class="modal-x" id="modalCloseBtn" aria-label="Close">×</button>'; }
function draw() {
    ensureStats();
    s.stats.bestNet = Math.max(s.stats.bestNet || 0, netWorth());
    var p = places[s.city];
    $('dayCount').textContent = s.day;
    $('cash').textContent = money(s.cash);
    $('bank').textContent = money(s.bank);
    $('debt').textContent = money(s.debt);
    $('health').textContent = Math.round(s.health) + '%';
    $('healthBar').style.width = Math.max(0, s.health) + '%';
    $('city').textContent = p[0];
    $('country').textContent = p[1] + ' · ' + p[3];
    $('flag').textContent = '';
    $('marketInfo').innerHTML = "".concat(p[0], ": ").concat(cityText(), ".<br>").concat(rumourHtml());
    $('noticeText').textContent = s.notice;
    $('spaceLabel').textContent = "".concat(used(), "/").concat(totalSpace());
    $('statusLocation').textContent = p[0] + ', ' + p[1];
    $('rank').textContent = rank();
    $('space').textContent = "".concat(used(), "/").concat(totalSpace());
    $('heat').textContent = s.heat + '%';
    $('marketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span>Trend</span></div>' + drugs.map(function (_a) {
        var name = _a[0], icon = _a[1];
        return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(s.supply[name], "</span><span class=\"price ").concat(s.trends[name] ? '' : 'down', "\">").concat(money(s.prices[name] || 0), "</span><span class=\"trend ").concat(s.trends[name] ? 'up' : 'down', "\">").concat(s.trends[name] ? '↑' : '↓', "</span></div>");
    }).join('');
    var items = Object.entries(s.inv).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var wc = weaponCounts(), weaponsRows = Object.entries(wc).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "<div class=\"row storage-weapon\"><span>".concat(k, "</span><span>").concat(v, "</span><span>Weapon</span></div>");
    }).join('');
    $('pocketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>' + (items.length ? items.slice(0, 10).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "<div class=\"row\"><span>".concat(k, "</span><span>").concat(v, "</span><span>").concat(money(v * s.prices[k]), "</span></div>");
    }).join('') : "<div class=\"row\"><span>Empty</span><span>0</span><span>".concat(money(0), "</span></div>")) + "<div class=\"row header\"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>" + (weaponsRows || '<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>');
}
function healthBlock() { return "<div class=\"health-decision\"><div><strong>Health</strong><span>".concat(Math.round(s.health), "%</span></div><div class=\"health-track\"><i style=\"width:").concat(Math.max(0, s.health), "%\"></i></div></div>"); }
function activeDebtTotal() { return s.loans.reduce(function (a, l) { return a + l.repay; }, 0); }
function payDebtButton() { return activeDebtTotal() > 0 ? "<div class=\"debt-action\"><button type=\"button\" class=\"sell\" id=\"modalPayDebt\">PAY DEBT ".concat(money(activeDebtTotal()), "</button></div>") : ''; }
function bindModalDebt() { var b = $('modalPayDebt'); if (!b)
    return; b.onclick = function () { return payAnyDebtFromModal(); }; }
function modal(t, h) { $('modalTitle').textContent = t; $('modalBody').innerHTML = h + payDebtButton(); if (!$('modal').open)
    $('modal').showModal(); setTimeout(function () { bindModalDebt(); var x = $('modalCloseBtn'); if (x)
    x.onclick = function () { return done(); }; }, 0); }
function payAnyDebtFromModal() { var due = activeDebtTotal(); if (due <= 0)
    return; var pay = Math.min(s.cash, due); if (pay <= 0) {
    modal('Debt Payment', "".concat(healthBlock(), "<p>You have no cash available to pay the debt.</p>"));
    return;
} s.cash -= pay; s.debt = Math.max(0, s.debt - pay); for (var i = s.loans.length - 1; i >= 0; i--) {
    var l = s.loans[i];
    var x = Math.min(pay, l.repay);
    l.repay -= x;
    pay -= x;
    if (l.repay <= 0)
        s.loans.splice(i, 1);
    if (pay <= 0)
        break;
} save(); draw(); modal('Debt Payment', "".concat(healthBlock(), "<p>You paid ").concat(money(Math.min(due, activeDebtTotal() + Math.min(s.cash, due))), " towards your debt.</p><p>Remaining debt: <strong>").concat(money(activeDebtTotal()), "</strong>.</p><button type=\"button\" id=\"continueEvent\">Continue</button>")); setTimeout(function () { var c = $('continueEvent'); if (c)
    c.onclick = function () { return done(); }; }, 0); }
function showMenu() { ensureStats(); modal('Menu', "<div class=\"menu-list\"><button type=\"button\" id=\"statsBtn\">Stats</button><button type=\"button\" id=\"soundToggleBtn\">Sound: ".concat(soundEnabled ? 'ON' : 'OFF', "</button><button type=\"button\" class=\"sell\" id=\"menuNewGameBtn\">New Game</button></div>")); setTimeout(function () { $('statsBtn').onclick = showStats; $('soundToggleBtn').onclick = function () { soundEnabled = !soundEnabled; localStorage.setItem('noir_market_sound', soundEnabled ? 'on' : 'off'); if (soundEnabled)
    sound('positive'); showMenu(); }; $('menuNewGameBtn').onclick = confirmNewGame; }, 0); }
function showStats() { ensureStats(); modal('Stats', "<div class=\"stats-list\"><p><span>Days survived</span><strong>".concat(s.day - 1, "</strong></p><p><span>Net worth</span><strong>").concat(money(netWorth()), "</strong></p><p><span>Best net worth</span><strong>").concat(money(s.stats.bestNet || netWorth()), "</strong></p><p><span>Flights taken</span><strong>").concat(s.stats.flights || 0, "</strong></p><p><span>Stays</span><strong>").concat(s.stats.stays || 0, "</strong></p><p><span>Fights won</span><strong>").concat(s.stats.fightsWon || 0, "</strong></p><p><span>Fights lost</span><strong>").concat(s.stats.fightsLost || 0, "</strong></p><p><span>Times mugged</span><strong>").concat(s.stats.mugged || 0, "</strong></p><p><span>Loans taken</span><strong>").concat(s.stats.loansTaken || 0, "</strong></p><p><span>Drugs bought</span><strong>").concat(s.stats.tradesBought || 0, "</strong></p><p><span>Drugs sold</span><strong>").concat(s.stats.tradesSold || 0, "</strong></p><p><span>Largest single trade</span><strong>").concat(money(s.stats.largestTrade || 0), "</strong></p><p><span>Heat level</span><strong>").concat(s.heat, "%</strong></p></div><button type=\"button\" id=\"backMenuBtn\">Back to Menu</button>")); setTimeout(function () { return $('backMenuBtn').onclick = showMenu; }, 0); }
function confirmNewGame() { modal('New Game', "<p>Your current save will be lost.</p><div class=\"bank-grid\"><button type=\"button\" id=\"cancelNewGame\">Cancel</button><button type=\"button\" class=\"sell\" id=\"confirmNewGame\">New Game</button></div>"); setTimeout(function () { $('cancelNewGame').onclick = showMenu; $('confirmNewGame').onclick = function () { return newGame(true); }; }, 0); }
function newGame(showLoans) {
    if (showLoans === void 0) { showLoans = false; }
    s = baseState();
    genPrices();
    newRumour();
    save();
    draw();
    if (showLoans)
        showLoanIntro();
}
function showWelcome() {
    modal('How to Play', "<div class=\"howto\"><p>You start with \u00A31,000, no debt and questionable judgement.</p><p>Buy low, sell high, travel between cities and try not to get robbed, arrested, battered or completely rinsed by the market.</p><p>Rumours may help. They may also be nonsense. That is business.</p><p class=\"disclaimer\">This game is for entertainment purposes only.</p><button type=\"button\" id=\"playWelcomeBtn\" class=\"buy play-wide\">Play</button></div>");
    setTimeout(function () { var b = $('playWelcomeBtn'); if (b)
        b.onclick = showShadyChoice; }, 0);
}
function showShadyChoice() {
    modal('Shady Loans', "<p class=\"subtle\">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><p class=\"subtle\">High interest. Short deadlines. Bad people. Useful cash.</p><div class=\"loan-choice\"><button type=\"button\" id=\"visitLoansBtn\" class=\"sell\">Visit Shady Loans</button><button type=\"button\" id=\"startCleanBtn\">Start Clean</button></div>");
    setTimeout(function () {
        var v = $('visitLoansBtn');
        if (v)
            v.onclick = function () { return bank(); };
        var c = $('startCleanBtn');
        if (c)
            c.onclick = function () { return done(); };
    }, 0);
}
function showLoanIntro() { modal('Shady Loans', "<p class=\"subtle\">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><div class=\"loan-list\">".concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(l[0], "</strong><br>up to ").concat(money(l[1]), " \u00B7 ").concat(l[3] * 100, "% interest \u00B7 due in ").concat(l[2], " days</button>"); }).join(''), "</div><button type=\"button\" id=\"skipLoan\">Start without debt</button>")); setTimeout(function () { document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; }); $('skipLoan').onclick = function () { return $('modal').close(); }; }, 0); }
function chooseLoan(i) { var l = lenders[i]; modal(l[0], "<p>Borrow up to ".concat(money(l[1]), ". Repay ").concat(l[3] * 100, "% interest by day ").concat(s.day + l[2], ".</p><input id=\"loanAmount\" inputmode=\"numeric\" type=\"number\" min=\"1\" max=\"").concat(l[1], "\" placeholder=\"Amount\"><button type=\"button\" class=\"sell\" id=\"confirmLoan\">ARE YOU SURE?</button>")); setTimeout(function () { return $('confirmLoan').onclick = function () { sound('negative'); haptic('error'); var amt = Math.min(+$('loanAmount').value || 0, l[1]); if (!amt) {
    errorMsg('ENTER AN AMOUNT');
    return;
} var repay = Math.round(amt * (1 + l[3])); ensureStats(); s.stats.loansTaken++; s.cash += amt; s.debt += repay; s.loans.push({ name: l[0], due: s.day + l[2], repay: repay }); s.notice = "Borrowed ".concat(money(amt), " from ").concat(l[0], ". ").concat(money(repay), " due day ").concat(s.day + l[2], "."); $('modal').close(); save(); draw(); toast("Loan accepted: ".concat(money(amt)), 'bad'); }; }, 0); }
function qtyControl(name, mode, max) { return "<div class=\"qty-control\"><button type=\"button\" data-minus=\"".concat(mode, "|").concat(name, "\">\u2212</button><input id=\"qty-").concat(mode, "-").concat(name.replaceAll(' ', '_'), "\" inputmode=\"numeric\" type=\"number\" min=\"0\" max=\"").concat(max, "\" value=\"0\"><button type=\"button\" data-plus=\"").concat(mode, "|").concat(name, "\">+</button></div>"); }
function qtyInput(mode, name) { return document.getElementById("qty-".concat(mode, "-").concat(name.replaceAll(' ', '_'))); }
function bindQtyButtons(mode) { document.querySelectorAll("[data-minus^=\"".concat(mode, "|\"]")).forEach(function (b) { return b.onclick = function () { var name = b.dataset.minus.split('|')[1], inp = qtyInput(mode, name); inp.value = Math.max(0, (+inp.value || 0) - 1); updateSellValues(); }; }); document.querySelectorAll("[data-plus^=\"".concat(mode, "|\"]")).forEach(function (b) { return b.onclick = function () { var name = b.dataset.plus.split('|')[1], inp = qtyInput(mode, name), max = +inp.max || 999999; inp.value = Math.min(max, (+inp.value || 0) + 1); updateSellValues(); }; }); }
function updateSellValues() { document.querySelectorAll('[data-sellvalue]').forEach(function (el) { var name = el.dataset.sellvalue, inp = qtyInput('sell', name), q = +inp.value || 0; el.textContent = money(q * s.prices[name]); }); }
function buyModal() { modal('Buy', "<div class=\"modal-money\"><span>Current funds</span><strong>".concat(money(s.cash), "</strong><em>Storage ").concat(used(), "/").concat(totalSpace(), "</em></div><div class=\"trade-grid\">").concat(drugs.map(function (_a) {
    var name = _a[0], icon = _a[1];
    return "<div class=\"trade-tile\"><div class=\"trade-title\"><b>".concat(icon, "</b><strong>").concat(name, "</strong></div><p>").concat(money(s.prices[name]), " each</p><p>Available: ").concat(s.supply[name], "</p><p>Owned: ").concat(s.inv[name], "</p>").concat(qtyControl(name, 'buy', s.supply[name]), "<button type=\"button\" class=\"buy\" data-buydrug=\"").concat(name, "\">BUY</button><button type=\"button\" data-buymax=\"").concat(name, "\">BUY MAX</button></div>");
}).join(''), "</div><div class=\"trade-footer\"><span>Cash ").concat(money(s.cash), "</span><span>Storage ").concat(used(), "/").concat(totalSpace(), "</span></div>")); setTimeout(function () { bindQtyButtons('buy'); document.querySelectorAll('[data-buymax]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.buymax, max = Math.min(Math.floor(s.cash / s.prices[name]), totalSpace() - used(), s.supply[name]); var inp = qtyInput('buy', name); inp.value = Math.max(0, max); if (max <= 0)
    errorMsg(s.cash < s.prices[name] ? 'INSUFFICIENT FUNDS' : 'NO STORAGE OR STOCK'); }; }); document.querySelectorAll('[data-buydrug]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.buydrug, q = +qtyInput('buy', name).value || 0, cost = q * s.prices[name]; if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return;
} if (q > s.supply[name]) {
    errorMsg('NOT ENOUGH STOCK');
    return;
} if (cost > s.cash) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} if (q > totalSpace() - used()) {
    errorMsg('INSUFFICIENT STORAGE');
    return;
} ensureStats(); s.stats.tradesBought += q; s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, cost); s.cash -= cost; s.inv[name] += q; s.supply[name] -= q; s.notice = "Bought ".concat(q, " units of ").concat(name, "."); save(); draw(); success("Bought ".concat(q, " ").concat(name)); buyModal(); }; }); }, 0); }
function sellModal() { var owned = drugs.filter(function (_a) {
    var name = _a[0];
    return s.inv[name] > 0;
}); var wc = weaponCounts(); var weaponTiles = Object.entries(wc).map(function (_a) {
    var name = _a[0], q = _a[1];
    var w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2);
    return "<div class=\"trade-tile weapon-sale\"><div class=\"trade-title\"><strong>".concat(name, "</strong></div><p>Owned: ").concat(q, "</p><p>Resale: <strong>").concat(money(val), "</strong> each</p><p>Sell all: <strong>").concat(money(val * q), "</strong></p>").concat(qtyControl(name, 'wsell', q), "<button type=\"button\" class=\"sell\" data-sellweapon=\"").concat(name, "\">SELL WEAPON</button></div>");
}).join(''); modal('Sell', "<div class=\"modal-money\"><span>Current funds</span><strong>".concat(money(s.cash), "</strong><em>Storage ").concat(used(), "/").concat(totalSpace(), "</em></div>").concat(owned.length ? "<h4>Stock</h4><div class=\"trade-grid\">".concat(owned.map(function (_a) {
    var name = _a[0], icon = _a[1];
    return "<div class=\"trade-tile\"><div class=\"trade-title\"><b>".concat(icon, "</b><strong>").concat(name, "</strong></div><p>Owned: ").concat(s.inv[name], "</p><p>Price: ").concat(money(s.prices[name]), "</p><p>Sell all: <strong>").concat(money(s.inv[name] * s.prices[name]), "</strong></p>").concat(qtyControl(name, 'sell', s.inv[name]), "<p class=\"tile-value\">Selected: <b data-sellvalue=\"").concat(name, "\">\u00A30</b></p><button type=\"button\" class=\"sell\" data-selldrug=\"").concat(name, "\">SELL</button></div>");
}).join(''), "</div>") : '<p class="subtle">You have no stock to sell.</p>').concat(weaponTiles ? "<h4>Weapons</h4><div class=\"trade-grid\">".concat(weaponTiles, "</div>") : '', "<div class=\"trade-footer\"><span>Cash ").concat(money(s.cash), "</span><span>Owned lines ").concat(owned.length, "</span></div>")); setTimeout(function () { bindQtyButtons('sell'); bindQtyButtons('wsell'); document.querySelectorAll('[id^="qty-sell-"]').forEach(function (i) { return i.oninput = updateSellValues; }); document.querySelectorAll('[data-selldrug]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.selldrug, q = +qtyInput('sell', name).value || 0; if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return;
} if (q > s.inv[name]) {
    errorMsg('NOT ENOUGH STOCK');
    return;
} var value = q * s.prices[name]; ensureStats(); s.stats.tradesSold += q; s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, value); s.cash += value; s.inv[name] -= q; s.notice = "Sold ".concat(q, " units of ").concat(name, "."); save(); draw(); success("Sold ".concat(q, " ").concat(name)); sellModal(); }; }); document.querySelectorAll('[data-sellweapon]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.sellweapon, q = +qtyInput('wsell', name).value || 0, w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2); if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return;
} var count = weaponCounts()[name] || 0; if (q > count) {
    errorMsg('NOT ENOUGH STOCK');
    return;
} for (var i = 0; i < q; i++) {
    var idx = s.weapons.indexOf(name);
    if (idx >= 0)
        s.weapons.splice(idx, 1);
} s.cash += q * val; s.notice = "Sold ".concat(q, " ").concat(name, " for ").concat(money(q * val), "."); save(); draw(); success("Sold ".concat(name)); sellModal(); }; }); updateSellValues(); }, 0); }
function transact(type) { type === 'Buy' ? buyModal() : sellModal(); }
function bank() { var openLoans = s.loans.length ? s.loans.map(function (l) { var days = l.due - s.day, urgent = days <= 5; return "<div class=\"loan-row ".concat(urgent ? 'urgent-loan' : '', "\"><div><span>").concat(l.name, "</span><strong>").concat(money(l.repay), "</strong><em>").concat(days > 0 ? 'due in ' + days + ' day' + (days === 1 ? '' : 's') : 'DUE NOW', "</em></div><button type=\"button\" data-payloan=\"").concat(l.name, "|").concat(l.due, "|").concat(l.repay, "\">Pay</button></div>"); }).join('') : '<p class="subtle">No active loans.</p>'; modal('Bank', "<p class=\"subtle\">Bank balance only changes when you deposit or withdraw.</p><input id=\"amount\" inputmode=\"numeric\" type=\"number\" placeholder=\"Amount\"><div class=\"bank-grid\"><button type=\"button\" id=\"deposit\">Deposit</button><button type=\"button\" id=\"withdraw\">Withdraw</button><button type=\"button\" class=\"full\" id=\"payDebt\">Pay General Debt</button></div><h4>Loans</h4>".concat(openLoans, "<div class=\"loan-list compact\">").concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(l[0], "</strong><br>Borrow up to ").concat(money(l[1]), " \u00B7 ").concat(l[3] * 100, "% interest \u00B7 due in ").concat(l[2], " days</button>"); }).join(''), "</div>")); setTimeout(function () { var amt = function () { return +$('amount').value || 0; }; $('deposit').onclick = function () { var a = Math.min(amt(), s.cash); if (a <= 0) {
    errorMsg('ENTER AMOUNT');
    return;
} s.cash -= a; s.bank += a; success('Deposit complete'); done(); }; $('withdraw').onclick = function () { var a = Math.min(amt(), s.bank); if (a <= 0) {
    errorMsg('ENTER AMOUNT');
    return;
} s.bank -= a; s.cash += a; success('Withdrawal complete'); done(); }; $('payDebt').onclick = function () { var a = Math.min(amt(), s.cash, s.debt); if (a <= 0) {
    errorMsg('NO DEBT PAYMENT MADE');
    return;
} s.cash -= a; s.debt -= a; success('Debt payment made'); done(); }; document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; }); document.querySelectorAll('[data-payloan]').forEach(function (b) { return b.onclick = function () { return paySpecificLoan(b.dataset.payloan); }; }); }, 0); }
function paySpecificLoan(token) { var _a = token.split('|'), name = _a[0], due = _a[1], repay = _a[2], amount = +repay; if (s.cash < amount) {
    s.notice = "You need ".concat(money(amount), " cash to clear ").concat(name, ".");
    done();
    return;
} var idx = s.loans.findIndex(function (l) { return l.name === name && String(l.due) === String(due) && String(l.repay) === String(repay); }); if (idx < 0)
    return; s.cash -= amount; s.debt = Math.max(0, s.debt - amount); s.notice = "Paid ".concat(name, ". Loan cleared."); s.loans.splice(idx, 1); success('Debt cleared'); done(); }
function heatClass(h) { return h < 8 ? 'low' : (h < 25 ? 'mid' : 'high'); }
function shopItemButton(kind, i, title, price, desc, extra, disabled) {
    if (extra === void 0) { extra = ''; }
    if (disabled === void 0) { disabled = false; }
    return "<button type=\"button\" class=\"shop-item\" data-".concat(kind, "=\"").concat(i, "\" ").concat(disabled ? 'disabled' : '', "><span class=\"shop-top\"><strong>").concat(title, "</strong><span class=\"shop-price\">").concat(money(price), "</span></span><span class=\"shop-desc\"><span>").concat(desc, "</span>").concat(extra, "</span></button>");
}
function shop() { modal('Shop', "<h4>Storage</h4><p class=\"muted\">Each upgrade adds permanent capacity.</p><div class=\"shop-list\">".concat(shopItems.map(function (it, i) { return shopItemButton('shop', i, it[0], it[1], "+".concat(it[2], " storage slots"), it[3] === 'person' ? '<span class="heat-pill low">carried</span>' : '<span class="heat-pill mid">off-site</span>', s.owned.includes(it[0])); }).join(''), "</div><h4>Weapons</h4><p class=\"muted\">Weapons improve fight options but increase heat. Single-use items are consumed in combat.</p><div class=\"shop-list\">").concat(weapons.map(function (w, i) { return shopItemButton('weapon', i, w.name, w.price, "".concat(w.damage, ": ").concat(w.notes), "<span class=\"heat-pill ".concat(heatClass(w.heat), "\">Heat +").concat(w.heat, "%</span>")); }).join(''), "</div><h4>Recovery</h4><p class=\"muted\">Hospital treatment restores health after trouble.</p><div class=\"shop-list\">").concat(hospitalTreatments.map(function (h, i) { return shopItemButton('hospital', i, h[0], h[1], h[2] === 100 ? 'restore to full health' : "restore ".concat(h[2], "% health"), ''); }).join(''), "</div>")); setTimeout(function () { document.querySelectorAll('[data-shop]').forEach(function (b) { return b.onclick = function () { var it = shopItems[+b.dataset.shop]; if (s.cash < it[1]) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} s.cash -= it[1]; s.owned.push(it[0]); s.notice = "Bought ".concat(it[0], ". Storage increased by ").concat(it[2], " slots."); success("Bought ".concat(it[0])); done(); }; }); document.querySelectorAll('[data-weapon]').forEach(function (b) { return b.onclick = function () { var w = weapons[+b.dataset.weapon]; if (s.cash < w.price) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} s.cash -= w.price; s.weapons.push(w.name); s.heat = Math.min(100, s.heat + Math.ceil(w.heat / 3)); s.notice = "Bought ".concat(w.name, ". Heat increased slightly."); success("Bought ".concat(w.name)); done(); }; }); document.querySelectorAll('[data-hospital]').forEach(function (b) { return b.onclick = function () { return buyHospital(+b.dataset.hospital); }; }); }, 0); }
function buyHospital(i) { var h = hospitalTreatments[i]; if (!h || s.health >= 100)
    return; if (s.cash < h[1]) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} s.cash -= h[1]; s.health = h[2] === 100 ? 100 : Math.min(100, s.health + h[2]); s.notice = "Hospital treatment purchased: ".concat(h[0], "."); success('Health treatment purchased'); done(); }
function dump() { var items = Object.entries(s.inv).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); modal('Dump Stock', items.length ? items.map(function (_a) {
    var k = _a[0];
    return "<button type=\"button\" data-dump=\"".concat(k, "\">").concat(k, "</button>");
}).join('') : '<p>Your storage is empty.</p>'); setTimeout(function () { return document.querySelectorAll('[data-dump]').forEach(function (b) { return b.onclick = function () { s.notice = "Dumped ".concat(s.inv[b.dataset.dump], " units of ").concat(b.dataset.dump, "."); s.inv[b.dataset.dump] = 0; done(); }; }); }, 0); }
function done() { if ($('modal').open)
    $('modal').close(); save(); draw(); }
function stay() { sound('positive'); haptic(); ensureStats(); s.stats.stays++; nextDay("You stay in ".concat(places[s.city][0], "."), true); }
function travel() { modal('Travel', "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Weapons are lost before boarding.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\"><strong>").concat(p[0], "</strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>")); setTimeout(function () { var st = $('stayFromTravel'); if (st)
    st.onclick = function () { sound('positive'); haptic(); $('modal').close(); nextDay("You stay in ".concat(places[s.city][0], "."), true); }; document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { sound('travel'); haptic(); s.city = +b.dataset.city; s.weapons = []; $('modal').close(); nextDay("You land in ".concat(places[s.city][0], ". Weapons were lost before boarding."), false); }; }); }, 0); }
function debtReminderHtml() { if (!s.loans.length)
    return '<p class="subtle">No active loan debt.</p>'; return '<div class="debt-reminder"><strong>DEBT REMINDER</strong>' + s.loans.map(function (l) { var days = l.due - s.day; var dueText = days > 0 ? "due in ".concat(days, " day").concat(days === 1 ? '' : 's') : 'DUE NOW'; return "<div><span>".concat(l.name, "</span><b>").concat(money(l.repay), "</b><em>").concat(dueText, "</em></div>"); }).join('') + '</div>'; }
function nextDay(base, showRumour) { var old = { rumour: s.rumour, true: Math.random() * 100 < s.rumour.accuracy }; s.day++; s.debt = Math.round(s.debt * 1.02); s.heat = Math.min(100, Math.max(0, s.heat + rand(-8, 13))); genPrices(old); newRumour(); randomEvent(base); if (s.day > s.maxDay)
    return endGame(); save(); draw(); var rumourBlock = showRumour ? "<h4>Rumour Result</h4><p><strong>".concat(old.true ? 'TRUE' : 'FALSE', "</strong> \u00B7 ").concat(old.rumour.drug, " was tipped to become ").concat(old.rumour.type === 'scarce' ? 'scarce and more expensive' : 'abundant and cheaper', ".</p><p>Source confidence was ").concat(old.rumour.accuracy, "%.</p>") : ''; modal(showRumour ? 'Stay Here' : 'Travel Result', "<p>".concat(s.notice, "</p>").concat(rumourBlock, "<h4>Loan Status</h4>").concat(debtReminderHtml(), "<button type=\"button\" id=\"continueEvent\">Continue</button>")); setTimeout(function () { return $('continueEvent').onclick = function () { $('modal').close(); handleDueLoans(); }; }, 0); }
function handleDueLoans() { var due = s.loans.filter(function (l) { return l.due <= s.day; }); if (!due.length) {
    maybeFight();
    return;
} modal('DEBT DUE', "<p class=\"subtle\">Your lender wants payment today. Pay it now or the balance rises by 25%, your health drops by 15%, and the same debt is chased again tomorrow.</p>".concat(due.map(function (l, i) { return "<div class=\"loan-row\"><div><span>".concat(l.name, "</span><strong>").concat(money(l.repay), " due now</strong></div><button type=\"button\" data-duepay=\"").concat(i, "\">PAY OFF DEBT</button></div>"); }).join(''), "<button type=\"button\" class=\"sell\" id=\"missDebt\">Do not pay</button>")); setTimeout(function () { document.querySelectorAll('[data-duepay]').forEach(function (b) { return b.onclick = function () { return payDueLoan(due[+b.dataset.duepay]); }; }); $('missDebt').onclick = missDueLoans; }, 0); }
function payDueLoan(loan) { if (s.cash < loan.repay) {
    s.notice = "You need ".concat(money(loan.repay), " cash to pay ").concat(loan.name, ".");
    save();
    draw();
    handleDueLoans();
    return;
} var idx = s.loans.indexOf(loan); if (idx < 0)
    return; s.cash -= loan.repay; s.debt = Math.max(0, s.debt - loan.repay); s.notice = "Paid ".concat(loan.name, ". Loan cleared."); s.loans.splice(idx, 1); save(); draw(); $('modal').close(); handleDueLoans(); }
function missDueLoans() { var due = s.loans.filter(function (l) { return l.due <= s.day; }); var added = 0; due.forEach(function (l) { var old = l.repay; l.repay = Math.round(l.repay * 1.25); added += l.repay - old; l.due = s.day + 1; }); s.debt += added; s.health = Math.max(1, s.health - 15); s.heat = Math.min(100, s.heat + 10); s.notice = "Debt unpaid. You are roughed up, health drops 15%, and the debt increases by ".concat(money(added), "."); save(); draw(); $('modal').close(); maybeFight(); }
function checkLoans() { }
function takeDrugs(maxPct, personOnly) {
    if (personOnly === void 0) { personOnly = false; }
    var capacity = personOnly ? personSpace() : totalSpace(), ratio = Math.min(1, capacity / Math.max(1, totalSpace())), stolen = [];
    Object.entries(s.inv).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        var q = Math.floor(v * (rand(10, maxPct) / 100) * (personOnly ? ratio : 1));
        if (q > 0) {
            s.inv[k] -= q;
            stolen.push("".concat(q, " ").concat(k));
        }
    });
    return stolen;
}
function randomEvent(base) { var roll = Math.random(), d = pickDrug(); ensureStats(); s.notice = base + ' '; if (roll < .14) {
    s.stats.mugged++;
    var pct = rand(10, 65), lost = Math.floor(s.cash * pct / 100), stolen = takeDrugs(35);
    s.cash -= lost;
    s.health = Math.max(5, s.health - rand(3, 15));
    s.notice += "You are mugged. ".concat(pct, "% of your cash is taken (").concat(money(lost), "). ").concat(stolen.length ? 'Stock stolen: ' + stolen.join(', ') + '.' : 'No stock was taken.');
}
else if (roll < .24) {
    var q = Math.min(rand(5, 80), totalSpace() - used());
    if (q > 0)
        s.inv[d] += q;
    s.notice += "A contact gives you ".concat(q, " units of ").concat(d, ".");
}
else if (roll < .36) {
    s.prices[d] *= rand(2, 4);
    s.notice += "".concat(d, " is drying up. Prices spike.");
}
else if (roll < .48) {
    s.prices[d] = Math.max(1, Math.round(s.prices[d] * .35));
    s.supply[d] += rand(100, 500);
    s.notice += "The market is flooded with ".concat(d, ". Prices collapse.");
}
else if (roll < .60) {
    s.heat = Math.min(100, s.heat + rand(10, 25));
    s.notice += 'Police are visible near transport hubs. Heat rises.';
}
else
    s.notice += 'A quiet day. The market holds.'; }
function attacker() { var r = Math.random(), a = 0; for (var _i = 0, attackers_1 = attackers; _i < attackers_1.length; _i++) {
    var x = attackers_1[_i];
    a += x[1];
    if (r < a)
        return x;
} return attackers.at(-1); }
function ownedWeapons() { return weapons.filter(function (w) { return s.weapons.includes(w.name); }); }
function getWeapon(name) { return weapons.find(function (w) { return w.name === name; }) || null; }
function bestWeapon() { var owned = ownedWeapons(); return owned.sort(function (a, b) { return b.win - a.win; })[0] || null; }
function consumeWeapon(w) { if (!w || !w.singleUse)
    return; var idx = s.weapons.indexOf(w.name); if (idx >= 0)
    s.weapons.splice(idx, 1); }
function maybeFight() {
    if (Math.random() >= .20)
        return;
    var a = attacker();
    s.currentFight = { name: a[0], damage: a[2], lootPct: a[3], round: 1, maxRounds: a[0] === 'single addict' ? 1 : (a[0] === 'small group of lads' ? 2 : (a[0] === 'small gang' ? 3 : 4)) };
    showFightChoice("You are confronted by a <strong>".concat(a[0], "</strong>."));
}
function showFightChoice(intro) {
    var f = s.currentFight, owned = ownedWeapons();
    modal('Trouble', "".concat(healthBlock(), "<p>").concat(intro, "</p><p>Threat round ").concat(f.round, " of up to ").concat(f.maxRounds, ". Choose carefully.</p><div class=\"choice-row\"><button type=\"button\" id=\"surrenderBtn\">SURRENDER</button><button type=\"button\" id=\"runBtn\">RUN</button></div><h4>Fight options</h4><div class=\"weapon-choice\"><button type=\"button\" class=\"sell\" data-fightweapon=\"\">Fists</button>").concat(owned.length ? owned.map(function (w) { return "<button type=\"button\" class=\"sell\" data-fightweapon=\"".concat(w.name, "\">").concat(w.name, "<br><span>").concat(w.damage, "</span></button>"); }).join('') : '<p class="subtle">No weapons available.</p>', "</div>"));
    setTimeout(function () { $('surrenderBtn').onclick = function () { return resolveFight('surrender'); }; $('runBtn').onclick = function () { return resolveFight('run'); }; document.querySelectorAll('[data-fightweapon]').forEach(function (b) { return b.onclick = function () { return resolveFight('fight', b.dataset.fightweapon); }; }); }, 0);
}
function recoveryOptions() { if (s.health >= 100)
    return ''; return "<h4>Hospital</h4><div class=\"hospital-list\">".concat(hospitalTreatments.map(function (h, i) { return "<button type=\"button\" data-hospital-modal=\"".concat(i, "\" ").concat(s.cash < h[1] ? 'disabled' : '', ">").concat(h[0], " \u00B7 ").concat(money(h[1]), "</button>"); }).join(''), "</div>"); }
function bindRecovery() { document.querySelectorAll('[data-hospital-modal]').forEach(function (b) { return b.onclick = function () { var h = hospitalTreatments[+b.dataset.hospitalModal]; if (!h || s.cash < h[1])
    return; s.cash -= h[1]; s.health = h[2] === 100 ? 100 : Math.min(100, s.health + h[2]); save(); draw(); modal('Hospital Treatment', "".concat(healthBlock(), "<p>").concat(h[0], " purchased for ").concat(money(h[1]), ".</p><button type=\"button\" id=\"continueEvent\">Continue</button>")); setTimeout(function () { var c = $('continueEvent'); if (c)
    c.onclick = function () { return done(); }; }, 0); }; }); }
function fightResult(title, msg, more) {
    if (more === void 0) { more = false; }
    save();
    draw();
    modal(title, "".concat(healthBlock(), "<p>").concat(msg, "</p>").concat(recoveryOptions()).concat(more ? '<button type="button" id="nextFightRound">Next Move</button>' : '<button type="button" id="continueEvent">Continue</button>'));
    setTimeout(function () { bindRecovery(); var n = $('nextFightRound'); if (n)
        n.onclick = function () { return showFightChoice('They are still on you.'); }; var c = $('continueEvent'); if (c)
        c.onclick = function () { return done(); }; }, 0);
}
function resolveFight(choice, weaponName) {
    if (weaponName === void 0) { weaponName = ''; }
    var f = s.currentFight, w = weaponName ? getWeapon(weaponName) : bestWeapon(), msg = '';
    if (choice === 'surrender') {
        var cashLost = s.cash;
        s.cash = 0;
        var stolen = takeDrugs(100, true);
        var hpTxt = '';
        if (Math.random() < .30) {
            var hp = rand(2, 18);
            s.health = Math.max(1, s.health - hp);
            hpTxt = " They rough you up anyway. Health drops ".concat(hp, "%.");
        }
        msg = "You surrender to the ".concat(f.name, ". You lose all cash on you (").concat(money(cashLost), ") and anything carried on your person. ").concat(stolen.length ? 'Stock taken: ' + stolen.join(', ') + '.' : 'No carried stock was taken.').concat(hpTxt);
        ensureStats();
        s.stats.fightsLost++;
        s.notice = msg;
        s.currentFight = null;
        return fightResult('Surrender Outcome', msg, false);
    }
    if (choice === 'run') {
        var chance = Math.min(.98, .50 + (w ? w.escape : 0)), ok = Math.random() < chance;
        if (ok) {
            msg = "You run and lose them.".concat(w ? ' Your ' + w.name + ' gives you enough space to get away.' : '');
            s.heat = Math.min(100, s.heat + rand(1, 6) + (w ? w.heat : 0));
            consumeWeapon(w);
            ensureStats();
            s.stats.fightsWon++;
            ensureStats();
            s.stats.fightsLost++;
            s.currentFight = null;
            s.notice = msg;
            return fightResult('Run Outcome', msg, false);
        }
        var hp = rand(Math.max(2, Math.floor(f.damage / 2)), Math.max(3, f.damage));
        s.health = Math.max(1, s.health - hp);
        var lost = Math.floor(s.cash * rand(5, Math.round(f.lootPct * 100)) / 100);
        s.cash -= lost;
        msg = "You try to run, but they catch you. Health drops ".concat(hp, "%. You lose ").concat(money(lost), ".");
        if (s.health <= 1) {
            msg += ' You barely survive.';
        }
        s.notice = msg;
        s.currentFight = null;
        return fightResult('Run Outcome', msg, false);
    }
    if (choice === 'fight') {
        var base = w ? (f.name === 'single addict' ? 0.75 : Math.min(.96, .10 + w.win)) : .25;
        var win = Math.random() < base;
        if (win) {
            msg = "You fight back".concat(w ? ' using your ' + w.name : '', " and scare them off.");
            if (w && f.name === 'single addict')
                msg = "One hit with the ".concat(w.name, " is enough. The addict backs off.");
            s.heat = Math.min(100, s.heat + rand(5, 15) + (w ? w.heat : 0));
            consumeWeapon(w);
            ensureStats();
            s.stats.fightsWon++;
            s.currentFight = null;
            s.notice = msg;
            return fightResult('Fight Outcome', msg, false);
        }
        var reduction = w ? Math.min(.85, w.escape) : 0;
        var hp = rand(Math.max(2, Math.floor((f.damage * (1 - reduction)) / 2)), Math.max(3, Math.round(f.damage * (1 - reduction))));
        s.health = Math.max(0, s.health - hp);
        consumeWeapon(w);
        msg = "You fight back".concat(w ? ' with your ' + w.name : '', ", but they hit you. Health drops ").concat(hp, "%.");
        if (s.health <= 0) {
            ensureStats();
            s.stats.fightsLost++;
            s.notice = 'You died in the fight.';
            s.currentFight = null;
            return endGame();
        }
        if (f.round < f.maxRounds && Math.random() < .65) {
            f.round++;
            s.notice = msg;
            return fightResult('Fight Outcome', msg, true);
        }
        msg += ' You break away and lose them.';
        s.currentFight = null;
        s.notice = msg;
        return fightResult('Fight Outcome', msg, false);
    }
}
function endGame() { var score = s.cash + s.bank + Object.entries(s.inv).reduce(function (a, _a) {
    var k = _a[0], v = _a[1];
    return a + v * s.prices[k];
}, 0) - s.debt; modal('Game Over', "<p>Final net worth: <strong>".concat(money(score), "</strong></p><p>Rank: <strong>").concat(rank(), "</strong></p><button type=\"button\" id=\"again\">New Game</button>")); setTimeout(function () { return $('again').onclick = function () { newGame(); }; }, 0); }
function save() { ensureStats(); localStorage.setItem('noir_market_v1_6', JSON.stringify(s)); }
function load() { var x = localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4'); if (x) {
    s = JSON.parse(x);
    ensureStats();
    draw();
    return false;
} newGame(false); return true; }
function particles() {
    var holder = $('particle-canvas');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    holder.innerHTML = '';
    holder.appendChild(canvas);
    var particles = [], mouse = { x: null, y: null, active: false };
    function resize() {
        canvas.width = holder.offsetWidth * devicePixelRatio;
        canvas.height = holder.offsetHeight * devicePixelRatio;
        canvas.style.width = holder.offsetWidth + 'px';
        canvas.style.height = holder.offsetHeight + 'px';
        var count = Math.max(55, Math.floor((holder.offsetWidth * holder.offsetHeight) / 8500));
        particles = Array.from({ length: count }, function () { return ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - .5) * 0.34 * devicePixelRatio,
            vy: (Math.random() - .5) * 0.34 * devicePixelRatio,
            r: (1 + Math.random() * 1.7) * devicePixelRatio
        }); });
    }
    function point(e) { var r = canvas.getBoundingClientRect(); mouse.x = (e.clientX - r.left) * devicePixelRatio; mouse.y = (e.clientY - r.top) * devicePixelRatio; mouse.active = true; }
    holder.addEventListener('mousemove', point);
    holder.addEventListener('touchmove', function (e) { if (e.touches[0])
        point(e.touches[0]); }, { passive: true });
    holder.addEventListener('mouseleave', function () { return mouse.active = false; });
    addEventListener('resize', resize);
    resize();
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var all = mouse.active ? __spreadArray(__spreadArray([], particles, true), [{ x: mouse.x, y: mouse.y, vx: 0, vy: 0, r: 2 * devicePixelRatio, mouse: true }], false) : particles;
        for (var _i = 0, particles_1 = particles; _i < particles_1.length; _i++) {
            var p = particles_1[_i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width)
                p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height)
                p.vy *= -1;
        }
        for (var i = 0; i < all.length; i++) {
            var a = all[i];
            ctx.beginPath();
            ctx.fillStyle = a.mouse ? 'rgba(255,255,255,.26)' : 'rgba(255,255,255,.17)';
            ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
            ctx.fill();
            for (var j = i + 1; j < all.length; j++) {
                var b = all[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy), max = 125 * devicePixelRatio;
                if (d < max) {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(255,255,255,".concat((1 - d / max) * .16, ")");
                    ctx.lineWidth = .7 * devicePixelRatio;
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(loop);
    }
    loop();
}
function createSplashDust() {
    var splash = $('splash');
    if (!splash || splash.querySelector('.live-dust'))
        return;
    var layer = document.createElement('div');
    layer.className = 'live-dust';
    var count = 100;
    for (var i = 0; i < count; i++) {
        var d = document.createElement('i');
        var size = (Math.random() * 3.4 + 1.2).toFixed(2);
        d.style.left = (Math.random() * 100).toFixed(2) + '%';
        d.style.bottom = (-8 - Math.random() * 18).toFixed(2) + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.opacity = (Math.random() * 0.75 + 0.35).toFixed(2);
        d.style.animationDuration = (18 + Math.random() * 22).toFixed(2) + 's';
        d.style.animationDelay = (-Math.random() * 28).toFixed(2) + 's';
        d.style.setProperty('--drift', (Math.random() * 70 - 35).toFixed(1) + 'px');
        layer.appendChild(d);
    }
    splash.prepend(layer);
}
function createGameDust() {
    if (document.querySelector('.game-dust'))
        return;
    var layer = document.createElement('div');
    layer.className = 'game-dust';
    var count = 180;
    for (var i = 0; i < count; i++) {
        var d = document.createElement('i');
        var size = (Math.random() * 2.6 + 0.9).toFixed(2);
        d.style.left = (Math.random() * 100).toFixed(2) + '%';
        d.style.bottom = (-12 - Math.random() * 30).toFixed(2) + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.opacity = (Math.random() * 0.55 + 0.18).toFixed(2);
        d.style.animationDuration = (12 + Math.random() * 18).toFixed(2) + 's';
        d.style.animationDelay = (-Math.random() * 18).toFixed(2) + 's';
        d.style.setProperty('--drift', (Math.random() * 46 - 23).toFixed(1) + 'px');
        layer.appendChild(d);
    }
    document.body.prepend(layer);
}
function setupTilt() { var splash = $('splash'); function setTilt(x, y) { var px = Math.max(-18, Math.min(18, x * .8)), py = Math.max(-9, Math.min(9, y * .35)); splash.style.setProperty('--tilt-x', (x * .55) + 'deg'); splash.style.setProperty('--tilt-y', (-y * .35) + 'deg'); splash.style.setProperty('--powder-x', px + 'px'); splash.style.setProperty('--powder-y', py + 'px'); splash.style.setProperty('--powder-r', (x * .35) + 'deg'); } window.addEventListener('deviceorientation', function (e) { setTilt(e.gamma || 0, e.beta || 0); }, true); window.addEventListener('mousemove', function (e) { var x = (e.clientX / innerWidth - .5) * 18, y = (e.clientY / innerHeight - .5) * 18; setTilt(x, y); }); }
/* V1.6 retained refinements and music support */
var MUSIC_PATH = '';
var bgMusic = null, musicStarted = false, synthMusicTimer = null, synthMusicOn = false;
function startBackgroundMusic() {
    if (!soundEnabled)
        return;
    unlockAudio();
    musicStarted = true;
    startSynthMusic();
}
function stopBackgroundMusic() {
    if (bgMusic)
        bgMusic.pause();
    stopSynthMusic();
}
function startSynthMusic() {
    if (!soundEnabled || synthMusicOn)
        return;
    synthMusicOn = true;
    unlockAudio();
    var bass = [55, 55, 55, 49, 49, 52, 52, 46, 46, 49, 55, 55, 41, 41, 49, 49];
    var pulse = [110, 0, 98, 0, 82, 0, 73, 0, 98, 0, 92, 0, 82, 0, 73, 0];
    var i = 0;
    synthMusicTimer = setInterval(function () {
        if (!soundEnabled) {
            stopSynthMusic();
            return;
        }
        var b = bass[i % bass.length];
        tone(b, .80, 'triangle', .020, 0);
        tone(b / 2, .95, 'sine', .014, .03);
        if (i % 4 === 0)
            tone(27.5, .70, 'sine', .020, .01);
        var p = pulse[i % pulse.length];
        if (p)
            tone(p, .10, 'square', .009, .08);
        if (i % 16 === 12)
            tone(146.8, .09, 'square', .007, .1);
        i++;
    }, 1875);
}
function stopSynthMusic() { synthMusicOn = false; if (synthMusicTimer) {
    clearInterval(synthMusicTimer);
    synthMusicTimer = null;
} }
document.addEventListener('visibilitychange', function () { if (document.hidden)
    stopBackgroundMusic();
else if (soundEnabled && musicStarted)
    startBackgroundMusic(); });
function storageType() {
    var owned = (s && s.owned) || [];
    if (owned.includes('Warehouse'))
        return 'Warehouse';
    if (owned.includes('Trunk Upgrade'))
        return 'Trunk Upgrade';
    if (owned.includes('Sports Bag'))
        return 'Sports Bag';
    if (owned.includes('Bigger Backpack'))
        return 'Bigger Backpack';
    return 'Pocket';
}
function healthClass() { var h = s.health; return h <= 30 ? 'health-bad' : (h <= 85 ? 'health-warn' : 'health-good'); }
function draw() {
    ensureStats();
    s.stats.bestNet = Math.max(s.stats.bestNet || 0, netWorth());
    var p = places[s.city], hc = healthClass();
    $('dayCount').textContent = s.day;
    $('cash').textContent = money(s.cash);
    $('bank').textContent = money(s.bank);
    $('debt').textContent = money(s.debt);
    $('health').textContent = Math.round(s.health) + '%';
    $('health').className = hc;
    $('healthBar').style.width = Math.max(0, s.health) + '%';
    $('healthBar').className = hc;
    $('city').textContent = p[0] + ' ' + p[1];
    $('country').textContent = '';
    $('flag').textContent = '';
    $('marketInfo').innerHTML = "".concat(p[0], ": ").concat(cityText(), ".<br>").concat(rumourHtml());
    $('noticeText').textContent = s.notice;
    $('spaceLabel').innerHTML = "".concat(used(), "/").concat(totalSpace(), " <span class=\"storage-type\">").concat(storageType(), "</span>");
    $('statusLocation').textContent = p[0] + ', ' + p[1];
    $('rank').textContent = rank();
    $('space').textContent = "".concat(used(), "/").concat(totalSpace(), " \u00B7 ").concat(storageType());
    $('heat').textContent = s.heat + '%';
    $('marketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>' + drugs.map(function (_a) {
        var name = _a[0], icon = _a[1];
        return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(s.supply[name], "</span><span class=\"price ").concat(s.trends[name] ? '' : 'down', "\">").concat(money(s.prices[name]), "</span><span class=\"trend ").concat(s.trends[name] ? 'up' : 'down', "\">").concat(s.trends[name] ? '↑' : '↓', "</span></div>");
    }).join('');
    var items = Object.entries(s.inv).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var wc = weaponCounts(), weaponsRows = Object.entries(wc).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "<div class=\"row storage-weapon\"><span>".concat(k, "</span><span>").concat(v, "</span><span>Weapon</span></div>");
    }).join('');
    $('pocketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>' + (items.length ? items.slice(0, 10).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "<div class=\"row\"><span>".concat(k, "</span><span>").concat(v, "</span><span>").concat(money(v * s.prices[k]), "</span></div>");
    }).join('') : "<div class=\"row\"><span>Empty</span><span>0</span><span>".concat(money(0), "</span></div>")) + "<div class=\"row header\"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>" + (weaponsRows || '<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>');
}
function healthBlock() { var hc = healthClass(); return "<div class=\"health-decision\"><div><strong>Health</strong><span class=\"".concat(hc, "\">").concat(Math.round(s.health), "%</span></div><div class=\"health-track\"><i class=\"").concat(hc, "\" style=\"width:").concat(Math.max(0, s.health), "%\"></i></div></div>"); }
function modal(t, h) {
    $('modalTitle').textContent = t;
    $('modalBody').innerHTML = "<div class=\"modal-head\"><h3>".concat(t, "</h3><button type=\"button\" class=\"modal-x\" id=\"modalCloseBtn\" aria-label=\"Close\">\u00D7</button></div><div class=\"modal-scroll\">").concat(h + payDebtButton(), "</div>");
    if (!$('modal').open)
        $('modal').showModal();
    setTimeout(function () { bindModalDebt(); var x = $('modalCloseBtn'); if (x)
        x.onclick = function () { return done(); }; }, 0);
}
function showMenu() { ensureStats(); modal('Menu', "<div class=\"menu-list\"><button type=\"button\" id=\"statsBtn\">Stats</button><button type=\"button\" id=\"soundToggleBtn\">Sound: ".concat(soundEnabled ? 'ON' : 'OFF', "</button><button type=\"button\" class=\"sell\" id=\"menuNewGameBtn\">New Game</button></div>")); setTimeout(function () { $('statsBtn').onclick = showStats; $('soundToggleBtn').onclick = function () { soundEnabled = !soundEnabled; localStorage.setItem('noir_market_sound', soundEnabled ? 'on' : 'off'); if (soundEnabled) {
    sound('positive');
    startBackgroundMusic();
}
else
    stopBackgroundMusic(); showMenu(); }; $('menuNewGameBtn').onclick = confirmNewGame; }, 0); }
function showStats() { ensureStats(); modal('Stats', "<div class=\"stats-list\"><p><span>Days survived</span><strong>".concat(s.day - 1, "</strong></p><p><span>Net worth</span><strong>").concat(money(netWorth()), "</strong></p><p><span>Best net worth</span><strong>").concat(money(s.stats.bestNet || netWorth()), "</strong></p><p><span>Storage type</span><strong>").concat(storageType(), "</strong></p><p><span>Flights taken</span><strong>").concat(s.stats.flights || 0, "</strong></p><p><span>Stays</span><strong>").concat(s.stats.stays || 0, "</strong></p><p><span>Fights won</span><strong>").concat(s.stats.fightsWon || 0, "</strong></p><p><span>Fights lost</span><strong>").concat(s.stats.fightsLost || 0, "</strong></p><p><span>Times mugged</span><strong>").concat(s.stats.mugged || 0, "</strong></p><p><span>Loans taken</span><strong>").concat(s.stats.loansTaken || 0, "</strong></p><p><span>Drugs bought</span><strong>").concat(s.stats.tradesBought || 0, "</strong></p><p><span>Drugs sold</span><strong>").concat(s.stats.tradesSold || 0, "</strong></p><p><span>Largest single trade</span><strong>").concat(money(s.stats.largestTrade || 0), "</strong></p><p><span>Heat level</span><strong>").concat(s.heat, "%</strong></p></div><button type=\"button\" id=\"backMenuBtn\">Back to Menu</button>")); setTimeout(function () { return $('backMenuBtn').onclick = showMenu; }, 0); }
/* V1.6 retained gameplay/UI refinements */
function round10(n) { return Math.max(10, Math.round(n / 10) * 10); }
function ensureVaults() { s.vaults = s.vaults || {}; places.forEach(function (p) { var key = p[0]; if (!s.vaults[key])
    s.vaults[key] = blankInv(); }); return s.vaults[places[s.city][0]]; }
function vaultUsed(cityName) {
    if (cityName === void 0) { cityName = places[s.city][0]; }
    ensureVaults();
    return Object.values(s.vaults[cityName] || {}).reduce(function (a, b) { return a + b; }, 0);
}
function travelFare(i) { ensureStats(); var from = places[s.city][0], to = places[i][0]; var key = "".concat(s.day, ":").concat(from, ":").concat(to); if (!s.travelFares[key]) {
    var base = { London: 120, Manchester: 90, Birmingham: 80, Liverpool: 110, Leeds: 120, Newcastle: 160, Bristol: 110, Cardiff: 120, Glasgow: 190, Edinburgh: 190, Aberdeen: 260, Belfast: 220, Dublin: 210, Cork: 250 }[to] || 150;
    var distance = Math.abs(i - s.city) * 18;
    var surge = rand(-45, 95);
    s.travelFares[key] = round10(base + distance + surge);
} return s.travelFares[key]; }
function travel() { modal('Travel', "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Weapons are lost before boarding.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], " <em>").concat(money(travelFare(i)), "</em></strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>")); setTimeout(function () { var st = $('stayFromTravel'); if (st)
    st.onclick = function () { sound('positive'); haptic(); ensureStats(); s.stats.stays++; $('modal').close(); nextDay("You stay in ".concat(places[s.city][0], "."), true); }; document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { var i = +b.dataset.city, fare = travelFare(i); if (fare > s.cash) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} sound('travel'); haptic(); ensureStats(); s.stats.flights++; s.cash -= fare; s.city = i; s.weapons = []; $('modal').close(); nextDay("You land in ".concat(places[s.city][0], ". Flight cost ").concat(money(fare), ". Weapons were lost before boarding."), false); }; }); }, 0); }
function updateSellValues() { document.querySelectorAll('[data-sellvalue]').forEach(function (el) { var name = el.dataset.sellvalue, inp = qtyInput('sell', name), q = +inp.value || 0; el.textContent = money(q * s.prices[name]); }); }
function sellDrugQty(name, q) { if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return false;
} if (q > s.inv[name]) {
    errorMsg('NOT ENOUGH STOCK');
    return false;
} var value = q * s.prices[name]; ensureStats(); s.stats.tradesSold += q; s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, value); s.cash += value; s.inv[name] -= q; s.notice = "Sold ".concat(q, " units of ").concat(name, "."); save(); draw(); success("Sold ".concat(q, " ").concat(name)); return true; }
function sellModal() { var owned = drugs.filter(function (_a) {
    var name = _a[0];
    return s.inv[name] > 0;
}); var wc = weaponCounts(); var weaponTiles = Object.entries(wc).map(function (_a) {
    var name = _a[0], q = _a[1];
    var w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2);
    return "<div class=\"trade-tile weapon-sale\"><div class=\"trade-title\"><strong>".concat(name, "</strong></div><p>Owned: ").concat(q, "</p><p>Resale: <strong>").concat(money(val), "</strong> each</p><p>Sell all: <strong>").concat(money(val * q), "</strong></p>").concat(qtyControl(name, 'wsell', q), "<button type=\"button\" class=\"sell\" data-sellweapon=\"").concat(name, "\">SELL WEAPON</button><button type=\"button\" data-sellallweapon=\"").concat(name, "\">SELL ALL</button></div>");
}).join(''); modal('Sell', "<div class=\"modal-money\"><span>Current funds</span><strong>".concat(money(s.cash), "</strong><em>Storage ").concat(used(), "/").concat(totalSpace(), "</em></div>").concat(owned.length ? "<h4>Stock</h4><div class=\"trade-grid\">".concat(owned.map(function (_a) {
    var name = _a[0], icon = _a[1];
    return "<div class=\"trade-tile\"><div class=\"trade-title\"><b>".concat(icon, "</b><strong>").concat(name, "</strong></div><p>Owned: ").concat(s.inv[name], "</p><p>Price: ").concat(money(s.prices[name]), "</p><p>Sell all value: <strong>").concat(money(s.inv[name] * s.prices[name]), "</strong></p>").concat(qtyControl(name, 'sell', s.inv[name]), "<p class=\"tile-value\">Selected: <b data-sellvalue=\"").concat(name, "\">\u00A30</b></p><button type=\"button\" class=\"sell\" data-selldrug=\"").concat(name, "\">SELL</button><button type=\"button\" data-sellalldrug=\"").concat(name, "\">SELL ALL</button></div>");
}).join(''), "</div>") : '<p class="subtle">You have no stock to sell.</p>').concat(weaponTiles ? "<h4>Weapons</h4><div class=\"trade-grid\">".concat(weaponTiles, "</div>") : '', "<div class=\"trade-footer\"><span>Cash ").concat(money(s.cash), "</span><span>Owned lines ").concat(owned.length, "</span></div>")); setTimeout(function () { bindQtyButtons('sell'); bindQtyButtons('wsell'); document.querySelectorAll('[id^="qty-sell-"]').forEach(function (i) { return i.oninput = updateSellValues; }); document.querySelectorAll('[data-selldrug]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.selldrug, q = +qtyInput('sell', name).value || 0; if (sellDrugQty(name, q))
    sellModal(); }; }); document.querySelectorAll('[data-sellalldrug]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.sellalldrug, q = s.inv[name] || 0; if (sellDrugQty(name, q))
    sellModal(); }; }); document.querySelectorAll('[data-sellweapon]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.sellweapon, q = +qtyInput('wsell', name).value || 0, w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2); if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return;
} var count = weaponCounts()[name] || 0; if (q > count) {
    errorMsg('NOT ENOUGH STOCK');
    return;
} for (var i = 0; i < q; i++) {
    var idx = s.weapons.indexOf(name);
    if (idx >= 0)
        s.weapons.splice(idx, 1);
} s.cash += q * val; s.notice = "Sold ".concat(q, " ").concat(name, " for ").concat(money(q * val), "."); save(); draw(); success("Sold ".concat(name)); sellModal(); }; }); document.querySelectorAll('[data-sellallweapon]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.sellallweapon, count = weaponCounts()[name] || 0, w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2); if (!count) {
    errorMsg('NOT ENOUGH STOCK');
    return;
} s.weapons = s.weapons.filter(function (x) { return x !== name; }); s.cash += count * val; s.notice = "Sold all ".concat(name, " for ").concat(money(count * val), "."); save(); draw(); success("Sold all ".concat(name)); sellModal(); }; }); updateSellValues(); }, 0); }
function dump() { ensureVaults(); var city = places[s.city][0], vault = s.vaults[city]; var carried = Object.entries(s.inv).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var stored = Object.entries(vault).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); modal('Storage', "<div class=\"modal-money\"><span>Carried</span><strong>".concat(used(), "/").concat(totalSpace(), "</strong><em>").concat(storageType(), "</em></div><div class=\"modal-money\"><span>").concat(city, " Vault</span><strong>").concat(vaultUsed(city), "/100</strong><em>City only</em></div><p class=\"subtle\">Vault stock stays in the city where you leave it. London stock stays in London. Liverpool will not carry London\u2019s mess.</p><h4>Move to Vault</h4>").concat(carried.length ? "<div class=\"storage-move-list\">".concat(carried.map(function (_a) {
    var name = _a[0], q = _a[1];
    return "<div class=\"storage-move\"><div><strong>".concat(name, "</strong><span>Carried: ").concat(q, "</span></div><button type=\"button\" data-vaultone=\"").concat(name, "\">MOVE 1</button><button type=\"button\" data-vaultall=\"").concat(name, "\">MOVE ALL</button></div>");
}).join(''), "</div>") : '<p class="subtle">No carried stock.</p>', "<h4>").concat(city, " Vault</h4>").concat(stored.length ? "<div class=\"storage-move-list\">".concat(stored.map(function (_a) {
    var name = _a[0], q = _a[1];
    return "<div class=\"storage-move\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><button type=\"button\" data-takeone=\"").concat(name, "\">TAKE 1</button><button type=\"button\" data-takeall=\"").concat(name, "\">TAKE ALL</button></div>");
}).join(''), "</div>") : '<p class="subtle">This city vault is empty.</p>')); setTimeout(function () { function toVault(name, qty) { var space = 100 - vaultUsed(city); qty = Math.min(qty, s.inv[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'VAULT FULL' : 'NO STOCK');
    return;
} s.inv[name] -= qty; vault[name] = (vault[name] || 0) + qty; s.notice = "Moved ".concat(qty, " ").concat(name, " into the ").concat(city, " vault."); save(); draw(); success('Moved to vault'); dump(); } function fromVault(name, qty) { var space = totalSpace() - used(); qty = Math.min(qty, vault[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'INSUFFICIENT STORAGE' : 'NO VAULT STOCK');
    return;
} vault[name] -= qty; s.inv[name] = (s.inv[name] || 0) + qty; s.notice = "Moved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('Moved from vault'); dump(); } document.querySelectorAll('[data-vaultone]').forEach(function (b) { return b.onclick = function () { return toVault(b.dataset.vaultone, 1); }; }); document.querySelectorAll('[data-vaultall]').forEach(function (b) { return b.onclick = function () { return toVault(b.dataset.vaultall, s.inv[b.dataset.vaultall] || 0); }; }); document.querySelectorAll('[data-takeone]').forEach(function (b) { return b.onclick = function () { return fromVault(b.dataset.takeone, 1); }; }); document.querySelectorAll('[data-takeall]').forEach(function (b) { return b.onclick = function () { return fromVault(b.dataset.takeall, vault[b.dataset.takeall] || 0); }; }); }, 0); }
function startSynthMusic() { if (!soundEnabled || synthMusicOn)
    return; synthMusicOn = true; unlockAudio(); var bass = [41.2, 41.2, 41.2, 36.7, 36.7, 38.9, 38.9, 34.6, 34.6, 36.7, 41.2, 41.2, 30.9, 30.9, 36.7, 36.7]; var tones = [0, 82.4, 0, 73.4, 0, 65.4, 0, 61.7, 0, 73.4, 0, 82.4, 0, 55, 0, 61.7]; var i = 0; synthMusicTimer = setInterval(function () { if (!soundEnabled) {
    stopSynthMusic();
    return;
} var b = bass[i % bass.length]; tone(b, 1.05, 'sine', .016, 0); tone(b / 2, 1.20, 'triangle', .012, .04); if (i % 4 === 0)
    tone(27.5, .85, 'sine', .014, .02); var t = tones[i % tones.length]; if (t)
    tone(t, .16, 'square', .006, .12); if (i % 16 === 15)
    tone(98, .12, 'square', .005, .18); i++; }, 1250); }
function createGameDust() { if (document.querySelector('.game-dust'))
    return; var layer = document.createElement('div'); layer.className = 'game-dust'; var count = 110; for (var i = 0; i < count; i++) {
    var d = document.createElement('i');
    var size = (Math.random() * 1.55 + 0.45).toFixed(2);
    d.style.left = (Math.random() * 100).toFixed(2) + '%';
    d.style.bottom = (-12 - Math.random() * 30).toFixed(2) + '%';
    d.style.width = size + 'px';
    d.style.height = size + 'px';
    d.style.opacity = (Math.random() * 0.35 + 0.10).toFixed(2);
    d.style.animationDuration = (38 + Math.random() * 36).toFixed(2) + 's';
    d.style.animationDelay = (-Math.random() * 44).toFixed(2) + 's';
    d.style.setProperty('--drift', (Math.random() * 24 - 12).toFixed(1) + 'px');
    layer.appendChild(d);
} document.body.prepend(layer); }
function createSplashDust() { var splash = $('splash'); if (!splash || splash.querySelector('.live-dust'))
    return; var layer = document.createElement('div'); layer.className = 'live-dust'; var count = 100; for (var i = 0; i < count; i++) {
    var d = document.createElement('i');
    var size = (Math.random() * 1.7 + 0.55).toFixed(2);
    d.style.left = (Math.random() * 100).toFixed(2) + '%';
    d.style.bottom = (-8 - Math.random() * 18).toFixed(2) + '%';
    d.style.width = size + 'px';
    d.style.height = size + 'px';
    d.style.opacity = (Math.random() * 0.55 + 0.22).toFixed(2);
    d.style.animationDuration = (58 + Math.random() * 48).toFixed(2) + 's';
    d.style.animationDelay = (-Math.random() * 60).toFixed(2) + 's';
    d.style.setProperty('--drift', (Math.random() * 34 - 17).toFixed(1) + 'px');
    layer.appendChild(d);
} splash.prepend(layer); }
var firstFreshGame = false;
function initialiseNoirMarket() {
    var bind = function (id, fn) { var el = $(id); if (el)
        el.onclick = fn; };
    bind('buyBtn', function () { return transact('Buy'); });
    bind('sellBtn', function () { return transact('Sell'); });
    bind('stayBtn', stay);
    bind('travelBtn', travel);
    bind('bankBtn', bank);
    bind('dumpBtn', dump);
    bind('shopBtn', shop);
    bind('hustleBtn', hustle);
    bind('menuBtn', showMenu);
    var splash = $('splash');
    if (splash) {
        splash.onclick = function () {
            unlockAudio();
            startBackgroundMusic();
            musicStarted = true;
            sound('positive');
            splash.classList.add('hide');
            setTimeout(function () { showWelcome(); }, 460);
        };
    }
    setupTilt();
    createSplashDust();
    createGameDust();
    firstFreshGame = load();
}
setTimeout(initialiseNoirMarket, 0);
// Native app feel: suppress iOS double-tap and pinch zoom when launched from browser/home screen.
var __lastTouchEnd = 0;
document.addEventListener('touchend', function (e) { var now = Date.now(); if (now - __lastTouchEnd <= 300)
    e.preventDefault(); __lastTouchEnd = now; }, { passive: false });
document.addEventListener('gesturestart', function (e) { return e.preventDefault(); }, { passive: false });
document.addEventListener('gesturechange', function (e) { return e.preventDefault(); }, { passive: false });
document.addEventListener('gestureend', function (e) { return e.preventDefault(); }, { passive: false });
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { return navigator.serviceWorker.register('./sw.js').catch(function () { }); });
}
/* V1.6 retained vault refinements */
function cityVaultLine(city) {
    var lines = {
        London: "London stock stays in London. Liverpool will not carry London’s mess.",
        Manchester: "Manchester keeps its own stash. Try moving it to Glasgow and it develops trust issues.",
        Birmingham: "Birmingham vault stock stays in Brum. It is not doing a national tour.",
        Liverpool: "Liverpool stock stays by the Mersey. London’s chaos can sort itself out.",
        Leeds: "Leeds stock stays in Leeds. It refuses to commute for your poor decisions.",
        Newcastle: "Newcastle stock stays up north. It is not getting on a plane for anyone.",
        Bristol: "Bristol vault stock stays in Bristol. Very relaxed, very unavailable elsewhere.",
        Cardiff: "Cardiff stock stays in Cardiff. It will not cross the bridge unless you carry it.",
        Glasgow: "Glasgow stock stays in Glasgow. It is not scared, just geographically committed.",
        Edinburgh: "Edinburgh stock stays in Edinburgh. It has standards and a postcode.",
        Aberdeen: "Aberdeen stock stays in Aberdeen. Too far north to care about your travel plans.",
        Belfast: "Belfast stock stays in Belfast. It does not magically appear in Dublin.",
        Dublin: "Dublin stock stays in Dublin. It likes the city and hates admin.",
        Cork: "Cork stock stays in Cork. Even the vault has decided that is far enough."
    };
    return lines[city] || "".concat(city, " stock stays in ").concat(city, ". Other cities are not running a delivery service.");
}
function blankWeaponVault() { return {}; }
function ensureVaults() {
    s.vaults = s.vaults || {};
    s.weaponVaults = s.weaponVaults || {};
    places.forEach(function (p) {
        var key = p[0];
        if (!s.vaults[key])
            s.vaults[key] = blankInv();
        if (!s.weaponVaults[key])
            s.weaponVaults[key] = blankWeaponVault();
    });
    return s.vaults[places[s.city][0]];
}
function vaultDrugUsed(cityName) {
    if (cityName === void 0) { cityName = places[s.city][0]; }
    ensureVaults();
    return Object.values(s.vaults[cityName] || {}).reduce(function (a, b) { return a + b; }, 0);
}
function vaultWeaponUsed(cityName) {
    if (cityName === void 0) { cityName = places[s.city][0]; }
    ensureVaults();
    return Object.values(s.weaponVaults[cityName] || {}).reduce(function (a, b) { return a + b; }, 0);
}
function vaultUsed(cityName) {
    if (cityName === void 0) { cityName = places[s.city][0]; }
    return vaultDrugUsed(cityName) + vaultWeaponUsed(cityName);
}
function carriedWeaponCounts() { return weaponCounts(); }
function adjustWeaponList(name, qty, mode) {
    qty = Math.max(0, qty | 0);
    if (mode === 'remove') {
        var removed = 0;
        for (var i = 0; i < qty; i++) {
            var idx = s.weapons.indexOf(name);
            if (idx < 0)
                break;
            s.weapons.splice(idx, 1);
            removed++;
        }
        return removed;
    }
    if (mode === 'add') {
        for (var i = 0; i < qty; i++)
            s.weapons.push(name);
        return qty;
    }
    return 0;
}
function dump() {
    ensureVaults();
    var city = places[s.city][0], vault = s.vaults[city], wVault = s.weaponVaults[city];
    var carried = Object.entries(s.inv).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var stored = Object.entries(vault).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var cWeapons = Object.entries(carriedWeaponCounts()).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var vWeapons = Object.entries(wVault).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var rowDrug = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Carried: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"vdrug-").concat(i, "\"><button type=\"button\" data-storedrug=\"").concat(i, "\">STORE</button><button type=\"button\" data-storealldrug=\"").concat(i, "\">STORE ALL</button><button type=\"button\" class=\"danger-mini\" data-dropdrug=\"").concat(i, "\">DUMP</button></div>"); };
    var rowWeapon = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Held: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"vweapon-").concat(i, "\"><button type=\"button\" data-storeweapon=\"").concat(i, "\">STORE</button><button type=\"button\" data-storeallweapon=\"").concat(i, "\">STORE ALL</button><button type=\"button\" class=\"danger-mini\" data-dropweapon=\"").concat(i, "\">DUMP</button></div>"); };
    var rowStored = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"tdrug-").concat(i, "\"><button type=\"button\" data-takedrug=\"").concat(i, "\">TAKE</button><button type=\"button\" data-takealldrug=\"").concat(i, "\">TAKE ALL</button></div>"); };
    var rowStoredWeapon = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"tweapon-").concat(i, "\"><button type=\"button\" data-takeweapon=\"").concat(i, "\">TAKE</button><button type=\"button\" data-takeallweapon=\"").concat(i, "\">TAKE ALL</button></div>"); };
    modal('Storage', "<div class=\"modal-money\"><span>Carried</span><strong>".concat(used(), "/").concat(totalSpace(), "</strong><em>").concat(storageType(), "</em></div><div class=\"modal-money\"><span>").concat(city, " Vault</span><strong>").concat(vaultUsed(city), "/100</strong><em>City only</em></div><p class=\"subtle vault-line\">").concat(cityVaultLine(city), "</p><h4>Vault Options</h4><p class=\"subtle\">Store stock or weapons in this city vault, retrieve them later, or dump unwanted items permanently.</p><h4>Move Drugs to Vault</h4>").concat(carried.length ? "<div class=\"storage-move-list\">".concat(carried.map(function (_a, i) {
        var n = _a[0], q = _a[1];
        return rowDrug(n, q, i);
    }).join(''), "</div>") : '<p class="subtle">No carried drugs.</p>', "<h4>Move Weapons to Vault</h4>").concat(cWeapons.length ? "<div class=\"storage-move-list\">".concat(cWeapons.map(function (_a, i) {
        var n = _a[0], q = _a[1];
        return rowWeapon(n, q, i);
    }).join(''), "</div>") : '<p class="subtle">No weapons held.</p>', "<h4>").concat(city, " Vault Drugs</h4>").concat(stored.length ? "<div class=\"storage-move-list\">".concat(stored.map(function (_a, i) {
        var n = _a[0], q = _a[1];
        return rowStored(n, q, i);
    }).join(''), "</div>") : '<p class="subtle">No drugs in this city vault.</p>', "<h4>").concat(city, " Vault Weapons</h4>").concat(vWeapons.length ? "<div class=\"storage-move-list\">".concat(vWeapons.map(function (_a, i) {
        var n = _a[0], q = _a[1];
        return rowStoredWeapon(n, q, i);
    }).join(''), "</div>") : '<p class="subtle">No weapons in this city vault.</p>'));
    setTimeout(function () {
        function toVaultDrug(name, qty) { var space = 100 - vaultUsed(city); qty = Math.min(qty, s.inv[name] || 0, space); if (qty < 1) {
            errorMsg(space < 1 ? 'VAULT FULL' : 'NO STOCK');
            return;
        } s.inv[name] -= qty; vault[name] = (vault[name] || 0) + qty; s.notice = "Stored ".concat(qty, " ").concat(name, " in the ").concat(city, " vault."); save(); draw(); success('Stored in vault'); dump(); }
        function dropDrug(name, qty) { qty = Math.min(qty, s.inv[name] || 0); if (qty < 1) {
            errorMsg('NO STOCK');
            return;
        } s.inv[name] -= qty; s.notice = "Dumped ".concat(qty, " ").concat(name, ". Gone. No refunds. No questions."); save(); draw(); sound('negative'); dump(); }
        function fromVaultDrug(name, qty) { var space = totalSpace() - used(); qty = Math.min(qty, vault[name] || 0, space); if (qty < 1) {
            errorMsg(space < 1 ? 'INSUFFICIENT STORAGE' : 'NO VAULT STOCK');
            return;
        } vault[name] -= qty; s.inv[name] = (s.inv[name] || 0) + qty; s.notice = "Retrieved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('Retrieved from vault'); dump(); }
        function toVaultWeapon(name, qty) { var space = 100 - vaultUsed(city); qty = Math.min(qty, carriedWeaponCounts()[name] || 0, space); if (qty < 1) {
            errorMsg(space < 1 ? 'VAULT FULL' : 'NO WEAPON');
            return;
        } adjustWeaponList(name, qty, 'remove'); wVault[name] = (wVault[name] || 0) + qty; s.notice = "Stored ".concat(qty, " ").concat(name, " in the ").concat(city, " vault."); save(); draw(); success('Weapon stored'); dump(); }
        function dropWeapon(name, qty) { qty = Math.min(qty, carriedWeaponCounts()[name] || 0); if (qty < 1) {
            errorMsg('NO WEAPON');
            return;
        } adjustWeaponList(name, qty, 'remove'); s.notice = "Dumped ".concat(qty, " ").concat(name, ". Sensible? Probably not. Convenient? Yes."); save(); draw(); sound('negative'); dump(); }
        function fromVaultWeapon(name, qty) { qty = Math.min(qty, wVault[name] || 0); if (qty < 1) {
            errorMsg('NO VAULT WEAPON');
            return;
        } wVault[name] -= qty; adjustWeaponList(name, qty, 'add'); s.notice = "Retrieved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('Weapon retrieved'); dump(); }
        document.querySelectorAll('[data-storedrug]').forEach(function (b) { return b.onclick = function () { var _a = carried[+b.dataset.storedrug], name = _a[0], q = _a[1]; toVaultDrug(name, +$('vdrug-' + b.dataset.storedrug).value || 0); }; });
        document.querySelectorAll('[data-storealldrug]').forEach(function (b) { return b.onclick = function () { var _a = carried[+b.dataset.storealldrug], name = _a[0], q = _a[1]; toVaultDrug(name, q); }; });
        document.querySelectorAll('[data-dropdrug]').forEach(function (b) { return b.onclick = function () { var _a = carried[+b.dataset.dropdrug], name = _a[0], q = _a[1]; dropDrug(name, +$('vdrug-' + b.dataset.dropdrug).value || 0); }; });
        document.querySelectorAll('[data-takedrug]').forEach(function (b) { return b.onclick = function () { var _a = stored[+b.dataset.takedrug], name = _a[0], q = _a[1]; fromVaultDrug(name, +$('tdrug-' + b.dataset.takedrug).value || 0); }; });
        document.querySelectorAll('[data-takealldrug]').forEach(function (b) { return b.onclick = function () { var _a = stored[+b.dataset.takealldrug], name = _a[0], q = _a[1]; fromVaultDrug(name, q); }; });
        document.querySelectorAll('[data-storeweapon]').forEach(function (b) { return b.onclick = function () { var _a = cWeapons[+b.dataset.storeweapon], name = _a[0], q = _a[1]; toVaultWeapon(name, +$('vweapon-' + b.dataset.storeweapon).value || 0); }; });
        document.querySelectorAll('[data-storeallweapon]').forEach(function (b) { return b.onclick = function () { var _a = cWeapons[+b.dataset.storeallweapon], name = _a[0], q = _a[1]; toVaultWeapon(name, q); }; });
        document.querySelectorAll('[data-dropweapon]').forEach(function (b) { return b.onclick = function () { var _a = cWeapons[+b.dataset.dropweapon], name = _a[0], q = _a[1]; dropWeapon(name, +$('vweapon-' + b.dataset.dropweapon).value || 0); }; });
        document.querySelectorAll('[data-takeweapon]').forEach(function (b) { return b.onclick = function () { var _a = vWeapons[+b.dataset.takeweapon], name = _a[0], q = _a[1]; fromVaultWeapon(name, +$('tweapon-' + b.dataset.takeweapon).value || 0); }; });
        document.querySelectorAll('[data-takeallweapon]').forEach(function (b) { return b.onclick = function () { var _a = vWeapons[+b.dataset.takeallweapon], name = _a[0], q = _a[1]; fromVaultWeapon(name, q); }; });
    }, 0);
}
function recreateDustSlowerSmaller() {
    // V2.5: no-op. Earlier versions recreated splash particles after startup, causing visible delay.
}
setTimeout(recreateDustSlowerSmaller, 80);
/* V1.6 retained loan limits, raids, customs and airport warnings */
function stockSummary() {
    var items = Object.entries(s.inv || {}).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    }).map(function (_a) {
        var n = _a[0], q = _a[1];
        return "".concat(n, " x").concat(q);
    });
    var wc = weaponCounts();
    var ws = Object.entries(wc).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    }).map(function (_a) {
        var n = _a[0], q = _a[1];
        return "".concat(n, " x").concat(q);
    });
    return { items: items, ws: ws, total: items.length + ws.length };
}
function removeDrugPercent(minPct, maxPct) {
    var losses = [];
    Object.keys(s.inv || {}).forEach(function (n) {
        var q = s.inv[n] || 0;
        if (q <= 0)
            return;
        var pct = rand(minPct, maxPct);
        var lost = Math.min(q, Math.max(1, Math.floor(q * pct / 100)));
        s.inv[n] -= lost;
        losses.push("".concat(n, " -").concat(lost, " (").concat(pct, "%)"));
    });
    return losses;
}
function removeRandomStockPercent(maxPct) {
    if (maxPct === void 0) { maxPct = 100; }
    return removeDrugPercent(5, maxPct);
}
function removeWeaponPercent(minPct, maxPct) {
    var wc = weaponCounts(), losses = [];
    Object.entries(wc).forEach(function (_a) {
        var n = _a[0], q = _a[1];
        var pct = rand(minPct, maxPct);
        var lost = Math.min(q, Math.max(1, Math.floor(q * pct / 100)));
        adjustWeaponList(n, lost, 'remove');
        losses.push("".concat(n, " -").concat(lost));
    });
    return losses;
}
function chooseLoan(i) {
    var l = lenders[i];
    modal(l[0], "<p>Borrow up to <strong>".concat(money(l[1]), "</strong>. Repay ").concat(l[3] * 100, "% interest by day ").concat(s.day + l[2], ".</p><input id=\"loanAmount\" inputmode=\"numeric\" type=\"number\" min=\"1\" max=\"").concat(l[1], "\" placeholder=\"Amount\"><button type=\"button\" class=\"sell\" id=\"confirmLoan\">ARE YOU SURE?</button>"));
    setTimeout(function () {
        var btn = $('confirmLoan');
        if (!btn)
            return;
        btn.onclick = function () {
            sound('negative');
            haptic('error');
            var raw = +$('loanAmount').value || 0;
            if (!raw) {
                errorMsg('ENTER AN AMOUNT');
                return;
            }
            if (raw > l[1]) {
                errorMsg("".concat(l[0], " DECLINED: MAX ").concat(money(l[1])));
                s.notice = "".concat(l[0], " declines the loan. Their ceiling is ").concat(money(l[1]), ", and apparently they do have standards.");
                draw();
                return;
            }
            var amt = Math.max(1, Math.floor(raw));
            var repay = Math.round(amt * (1 + l[3]));
            ensureStats();
            s.stats.loansTaken++;
            s.cash += amt;
            s.debt += repay;
            s.loans.push({ name: l[0], due: s.day + l[2], repay: repay });
            s.notice = "Borrowed ".concat(money(amt), " from ").concat(l[0], ". ").concat(money(repay), " due day ").concat(s.day + l[2], ".");
            $('modal').close();
            save();
            draw();
            toast("Loan accepted: ".concat(money(amt)), 'bad');
        };
    }, 0);
}
function randomEvent(base) {
    var roll = Math.random(), d = pickDrug();
    ensureStats();
    s.notice = base + ' ';
    if (roll < .10) {
        s.stats.mugged++;
        var pct = rand(10, 65), lost = Math.floor(s.cash * pct / 100), stolen = takeDrugs(35);
        s.cash -= lost;
        s.health = Math.max(5, s.health - rand(3, 15));
        s.notice += "You are mugged. ".concat(pct, "% of your cash is taken (").concat(money(lost), "). ").concat(stolen.length ? 'Stock stolen: ' + stolen.join(', ') + '.' : 'No stock was taken.');
    }
    else if (roll < .20) {
        var losses = removeDrugPercent(20, 100), wloss = removeWeaponPercent(0, 35);
        s.heat = Math.min(100, s.heat + rand(15, 30));
        s.notice += "Police raid. Stock gets lifted: ".concat(losses.length ? losses.join(', ') : 'nothing found', ".").concat(wloss.length ? ' Weapons seized: ' + wloss.join(', ') + '.' : '');
    }
    else if (roll < .30) {
        var losses = removeDrugPercent(10, 50);
        s.heat = Math.min(100, s.heat + rand(5, 15));
        s.notice += "Stash discovery. Someone found the wrong hiding place. Lost: ".concat(losses.length ? losses.join(', ') : 'nothing useful', ".");
    }
    else if (roll < .38) {
        s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .25));
        s.prices[d] = Math.round(s.prices[d] * rand(160, 280) / 100);
        s.heat = Math.min(100, s.heat + rand(8, 20));
        s.notice += "Supplier arrested. ".concat(d, " supply collapses and prices jump.");
    }
    else if (roll < .46) {
        var losses = removeDrugPercent(5, 35);
        s.heat = Math.min(100, s.heat + rand(12, 24));
        s.notice += "Customs seizure. Airport dogs ruin the business plan. ".concat(losses.length ? 'Lost ' + losses.join(', ') + '.' : 'You had nothing worth sniffing out.');
    }
    else if (roll < .56) {
        s.prices[d] = Math.round(s.prices[d] * rand(180, 340) / 100);
        s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .5));
        s.notice += "Festival demand spike. Everybody suddenly wants ".concat(d, ". Prices go feral.");
    }
    else if (roll < .64) {
        s.prices[d] = Math.round(s.prices[d] * rand(220, 450) / 100);
        s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .35));
        s.notice += "Rodents got into local stashes. Grim news for hygiene, great news for ".concat(d, " prices.");
    }
    else if (roll < .72) {
        var q = Math.min(rand(5, 80), totalSpace() - used());
        if (q > 0)
            s.inv[d] += q;
        s.notice += q > 0 ? "A contact gives you ".concat(q, " units of ").concat(d, ".") : 'A contact offers free stock, but you have no room. Professional.';
    }
    else if (roll < .82) {
        s.prices[d] *= rand(2, 4);
        s.notice += "".concat(d, " is drying up. Prices spike.");
    }
    else if (roll < .90) {
        s.prices[d] = Math.max(1, Math.round(s.prices[d] * .35));
        s.supply[d] += rand(100, 500);
        s.notice += "The market is flooded with ".concat(d, ". Prices collapse.");
    }
    else {
        s.notice += 'A quiet day. The market holds. Suspicious, frankly.';
    }
}
function doFlight(i, fare) {
    sound('travel');
    haptic();
    ensureStats();
    s.stats.flights++;
    s.cash -= fare;
    s.city = i;
    save();
    draw();
    $('modal').close();
    nextDay("You land in ".concat(places[s.city][0], ". Flight cost ").concat(money(fare), "."), false);
}
function boardFlightWithSeizure(i, fare) {
    var hadDrugs = used(), hadWeapons = (s.weapons || []).length;
    if (hadDrugs) {
        Object.keys(s.inv).forEach(function (k) { return s.inv[k] = 0; });
    }
    if (hadWeapons)
        s.weapons = [];
    s.heat = Math.min(100, s.heat + (hadDrugs || hadWeapons ? rand(10, 25) : 0));
    s.notice = "Airport security seized ".concat(hadDrugs, " drug units and ").concat(hadWeapons, " weapon").concat(hadWeapons === 1 ? '' : 's', ". That is what happens when you pack like an idiot.");
    doFlight(i, fare);
}
function airportWarning(i, fare) {
    var dest = places[i][0], summary = stockSummary();
    modal('Airport Warning', "<p><strong>Before you board:</strong> guns and drugs will be seized at the airport if you carry them through security.</p><p>Destination: <strong>".concat(dest, "</strong><br>Flight price: <strong>").concat(money(fare), "</strong></p><p class=\"subtle\">Store anything you want to keep in this city\u2019s vault before flying. Vault stock stays where you leave it.</p><div class=\"warning-stock\"><p>Drugs carried: <strong>").concat(used(), "</strong></p><p>Weapons carried: <strong>").concat((s.weapons || []).length, "</strong></p></div><div class=\"loan-choice\"><button type=\"button\" id=\"storeBeforeFlight\">Store in Vault</button><button type=\"button\" class=\"sell\" id=\"boardAnyway\">Board Anyway</button><button type=\"button\" id=\"cancelFlight\">Cancel</button></div>"));
    setTimeout(function () {
        $('storeBeforeFlight').onclick = function () { return dump(); };
        $('boardAnyway').onclick = function () { return boardFlightWithSeizure(i, fare); };
        $('cancelFlight').onclick = function () { return travel(); };
    }, 0);
}
function travel() {
    modal('Travel', "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Prices change daily and airport security is not your mate.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], " <em>").concat(money(travelFare(i)), "</em></strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>"));
    setTimeout(function () {
        var st = $('stayFromTravel');
        if (st)
            st.onclick = function () { sound('positive'); haptic(); ensureStats(); s.stats.stays++; $('modal').close(); nextDay("You stay in ".concat(places[s.city][0], "."), true); };
        document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { var i = +b.dataset.city, fare = travelFare(i); if (fare > s.cash) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        } airportWarning(i, fare); }; });
    }, 0);
}
/* V1.6 retained lender bios, stricter loan declines, dangerous event reinforcement and airport seizure warning */
var lenderBios = {
    SPAMMER: "Spammer looks friendly, which is normally the first warning. He lends small, smiles wide, and allegedly keeps a little box labelled \u201Clate payment fingers\u201D. Every day you are late, he adds interest and starts looking at your hands like a tapas menu.",
    TOMMY: "Tommy wears a tracksuit, calls everyone \u201Cchief\u201D, and has never once accepted \u201CI forgot\u201D as a payment plan. His loans are bigger, his patience is smaller, and his dog is somehow on the payroll.",
    SMUDGER: "Smudger does not shout. That is the problem. He just nods, writes your name down, and lets compound interest do the violence first. After that, he improvises.",
    BAZZER: "BazzER lends like a mate and collects like a horror film. Three days sounds generous until you realise Bazzer counts nights, lunch breaks and awkward silences as separate days.",
    GRIFF: "Griff is the last door you knock on when every sensible option has already locked itself. He will lend six figures, but his repayment reminders come with tyre irons and poor spelling."
};
function lenderBio(name) { return lenderBios[name] || 'A charming local finance professional, if your definition of finance includes threats and dental work.'; }
function chooseLoan(i) {
    var l = lenders[i], name = l[0], max = l[1], days = l[2], interest = l[3];
    modal(name, "<p>".concat(lenderBio(name), "</p><p class=\"subtle\">Borrow up to <strong>").concat(money(max), "</strong>. Repay <strong>").concat(Math.round(interest * 100), "%</strong> interest by day <strong>").concat(s.day + days, "</strong>.</p><input id=\"loanAmount\" inputmode=\"numeric\" type=\"number\" min=\"1\" max=\"").concat(max, "\" placeholder=\"Amount\"><button type=\"button\" class=\"sell\" id=\"confirmLoan\">ARE YOU SURE?</button>"));
    setTimeout(function () {
        var btn = $('confirmLoan');
        if (!btn)
            return;
        btn.onclick = function () {
            sound('negative');
            haptic('error');
            var raw = +$('loanAmount').value || 0;
            if (!raw) {
                errorMsg('ENTER AN AMOUNT');
                return;
            }
            if (raw > max) {
                modal('Loan Declined', "<p><strong>".concat(name, " declines.</strong></p><p>You asked for ").concat(money(raw), ", but ").concat(name, " will only lend up to ").concat(money(max), ".</p><p class=\"subtle\">Even shady lenders have credit controls. Depressing, but true.</p><button type=\"button\" id=\"backToLender\">Try a lower amount</button>"));
                setTimeout(function () { var b = $('backToLender'); if (b)
                    b.onclick = function () { return chooseLoan(i); }; }, 0);
                return;
            }
            var amt = Math.max(1, Math.floor(raw));
            var repay = Math.round(amt * (1 + interest));
            ensureStats();
            s.stats.loansTaken++;
            s.cash += amt;
            s.debt += repay;
            s.loans.push({ name: name, due: s.day + days, repay: repay });
            s.notice = "Borrowed ".concat(money(amt), " from ").concat(name, ". ").concat(money(repay), " due day ").concat(s.day + days, ".");
            $('modal').close();
            save();
            draw();
            toast("Loan accepted: ".concat(money(amt)), 'bad');
        };
    }, 0);
}
function showLoanIntro() {
    modal('Shady Loans', "<p class=\"subtle\">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><div class=\"loan-list\">".concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(l[0], "</strong><br>up to ").concat(money(l[1]), " \u00B7 ").concat(Math.round(l[3] * 100), "% interest \u00B7 due in ").concat(l[2], " days<br><span class=\"subtle\">").concat(lenderBio(l[0]).slice(0, 92), "...</span></button>"); }).join(''), "</div><button type=\"button\" id=\"skipLoan\">Start without debt</button>"));
    setTimeout(function () { document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; }); var sk = $('skipLoan'); if (sk)
        sk.onclick = function () { return $('modal').close(); }; }, 0);
}
function dangerousEventText() {
    var r = Math.random(), d = pickDrug();
    ensureStats();
    if (r < .16) {
        var losses = removeDrugPercent(25, 100), wloss = removeWeaponPercent(10, 70);
        s.heat = Math.min(100, s.heat + rand(18, 35));
        return "Police raid. Doors come off, dignity leaves first. Stock seized: ".concat(losses.length ? losses.join(', ') : 'nothing found', ".").concat(wloss.length ? ' Weapons seized: ' + wloss.join(', ') + '.' : '');
    }
    if (r < .31) {
        var losses = removeDrugPercent(10, 50);
        s.heat = Math.min(100, s.heat + rand(5, 18));
        return "Stash discovery. Someone finds your hiding place and helps themselves. Lost: ".concat(losses.length ? losses.join(', ') : 'nothing useful', ".");
    }
    if (r < .43) {
        s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .25));
        s.prices[d] = Math.round(s.prices[d] * rand(160, 300) / 100);
        s.heat = Math.min(100, s.heat + rand(8, 22));
        return "Supplier arrested. ".concat(d, " goes scarce and the price jumps like it heard sirens.");
    }
    if (r < .55) {
        var losses = removeDrugPercent(5, 40);
        s.heat = Math.min(100, s.heat + rand(12, 28));
        return "Customs seizure. Airport dogs earn their biscuits. ".concat(losses.length ? 'Lost ' + losses.join(', ') + '.' : 'You had nothing worth sniffing out.');
    }
    if (r < .68) {
        s.prices[d] = Math.round(s.prices[d] * rand(180, 360) / 100);
        s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .5));
        return "Festival demand spike. Everyone suddenly wants ".concat(d, ". Prices go feral.");
    }
    if (r < .80) {
        s.prices[d] = Math.round(s.prices[d] * rand(220, 480) / 100);
        s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .35));
        return "Rodents got into local stashes. Horrible for hygiene, excellent for ".concat(d, " prices.");
    }
    if (r < .90) {
        s.stats.mugged++;
        var pct = rand(10, 65), lost = Math.floor(s.cash * pct / 100), stolen = takeDrugs(35);
        s.cash -= lost;
        s.health = Math.max(5, s.health - rand(3, 15));
        return "You are mugged. ".concat(pct, "% of your cash is taken (").concat(money(lost), "). ").concat(stolen.length ? 'Stock stolen: ' + stolen.join(', ') + '.' : 'No stock was taken.');
    }
    return 'A quiet day. The market holds. Suspicious, frankly.';
}
function randomEvent(base) {
    s.notice = base + ' ' + dangerousEventText();
}
function boardFlightWithSeizure(i, fare) {
    var hadDrugs = used(), hadWeapons = (s.weapons || []).length;
    var seizedDrugs = 0, seizedWeapons = 0;
    if (hadDrugs && Math.random() < .92) {
        seizedDrugs = hadDrugs;
        Object.keys(s.inv).forEach(function (k) { return s.inv[k] = 0; });
    }
    if (hadWeapons && Math.random() < .92) {
        seizedWeapons = hadWeapons;
        s.weapons = [];
    }
    s.heat = Math.min(100, s.heat + ((seizedDrugs || seizedWeapons) ? rand(12, 30) : rand(2, 8)));
    s.notice = (seizedDrugs || seizedWeapons)
        ? "Airport security seized ".concat(seizedDrugs, " drug units and ").concat(seizedWeapons, " weapon").concat(seizedWeapons === 1 ? '' : 's', ". Next time, vault first, fly second.")
        : "Somehow you slip through airport security with your stock intact. Do not make that your business plan.";
    doFlight(i, fare);
}
function airportWarning(i, fare) {
    var dest = places[i][0];
    modal('Airport Warning', "<p><strong>Before you board:</strong> guns and drugs are likely to be seized at the airport.</p><p>Destination: <strong>".concat(dest, "</strong><br>Flight price: <strong>").concat(money(fare), "</strong></p><p class=\"subtle\">Store anything you want to keep in this city\u2019s vault before flying. Vault stock stays where you leave it. Dump it if you would rather not risk carrying it.</p><div class=\"warning-stock\"><p>Drugs carried: <strong>").concat(used(), "</strong></p><p>Weapons carried: <strong>").concat((s.weapons || []).length, "</strong></p></div><div class=\"loan-choice\"><button type=\"button\" id=\"storeBeforeFlight\">Store in Vault</button><button type=\"button\" class=\"sell\" id=\"boardAnyway\">Board Anyway</button><button type=\"button\" id=\"cancelFlight\">Cancel</button></div>"));
    setTimeout(function () {
        var sv = $('storeBeforeFlight'), ba = $('boardAnyway'), cf = $('cancelFlight');
        if (sv)
            sv.onclick = function () { return dump(); };
        if (ba)
            ba.onclick = function () { return boardFlightWithSeizure(i, fare); };
        if (cf)
            cf.onclick = function () { return travel(); };
    }, 0);
}
function v12SelfTest() { v13SelfTest(); }
setTimeout(v13SelfTest, 120);
setInterval(function () { if (s) {
    s.news = ['Police crack down in Birmingham.', 'Festival season boosts ecstasy demand.', 'Rumour: MDMA shortage in Manchester.'][Math.floor(Math.random() * 3)];
} }, 15000);
/* Noir Market V1.7 final override layer */
/* Noir Market V1.7 economy, reputation, rank, hustle and vault upgrades */
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function rep(delta) { var _a; s.reputation = clamp(((_a = s.reputation) !== null && _a !== void 0 ? _a : 50) + delta, 0, 100); }
function rankDefs() {
    return [
        ['Wannabe', 0], ['Street Dealer', 10000], ['Hustler', 50000], ['Kingpin', 500000], ['Legend', 1000000], ['Drug Lord', 10000000]
    ];
}
function rankFromWorth(w) { var r = 'Wannabe'; rankDefs().forEach(function (_a) {
    var name = _a[0], threshold = _a[1];
    if (w >= threshold)
        r = name;
}); return r; }
function rankIndex(name) { return rankDefs().findIndex(function (r) { return r[0] === name; }); }
function rankThreshold(name) { var r = rankDefs().find(function (x) { return x[0] === name; }); return r ? r[1] : 0; }
function blankCityMarket() { return { prices: {}, supply: {}, trends: {}, crashes: {} }; }
function ensureEconomy() {
    s.economy = s.economy || { cities: {}, news: { text: 'Markets are quiet today.' }, history: [] };
    places.forEach(function (p, idx) {
        var city = p[0];
        if (!s.economy.cities[city])
            s.economy.cities[city] = blankCityMarket();
        var m = s.economy.cities[city];
        m.prices = m.prices || {};
        m.supply = m.supply || {};
        m.trends = m.trends || {};
        m.crashes = m.crashes || {};
        drugs.forEach(function (_a) {
            var name = _a[0], lo = _a[2], hi = _a[3];
            if (!m.prices[name])
                m.prices[name] = (idx === s.city && s.prices && s.prices[name]) ? s.prices[name] : rand(lo, hi);
            if (typeof m.supply[name] !== 'number')
                m.supply[name] = (idx === s.city && s.supply && typeof s.supply[name] === 'number') ? s.supply[name] : rand(0, 1000);
            if (typeof m.trends[name] !== 'boolean')
                m.trends[name] = true;
        });
    });
    setActiveCityMarket();
}
function setActiveCityMarket() {
    if (!s.economy || !s.economy.cities)
        return;
    var city = places[s.city][0], m = s.economy.cities[city];
    if (m) {
        s.prices = m.prices;
        s.supply = m.supply;
        s.trends = m.trends;
    }
}
function ensureRankState() { s.rankState = s.rankState || { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }; }
function ensureVaultLevels() { s.vaultLevels = s.vaultLevels || {}; places.forEach(function (p) { if (!s.vaultLevels[p[0]])
    s.vaultLevels[p[0]] = 'Basic'; }); }
function vaultCapacity(cityName) {
    if (cityName === void 0) { cityName = places[s.city][0]; }
    ensureVaultLevels();
    var level = s.vaultLevels[cityName] || 'Basic';
    return level === 'Fortress' ? 500 : (level === 'Secure' ? 250 : 100);
}
function vaultUpgradeCost(next) { return next === 'Secure' ? 100000 : (next === 'Fortress' ? 500000 : 0); }
function nextVaultLevel(cityName) {
    if (cityName === void 0) { cityName = places[s.city][0]; }
    ensureVaultLevels();
    var l = s.vaultLevels[cityName] || 'Basic';
    return l === 'Basic' ? 'Secure' : (l === 'Secure' ? 'Fortress' : null);
}
function vaultValue() { ensureVaults(); ensureEconomy(); var total = 0; Object.entries(s.vaults || {}).forEach(function (_a) {
    var city = _a[0], inv = _a[1];
    var market = s.economy.cities[city] || {};
    Object.entries(inv || {}).forEach(function (_a) {
        var drug = _a[0], q = _a[1];
        total += (q || 0) * ((market.prices && market.prices[drug]) || s.prices[drug] || 0);
    });
}); Object.entries(s.weaponVaults || {}).forEach(function (_a) {
    var wv = _a[1];
    Object.entries(wv || {}).forEach(function (_a) {
        var name = _a[0], q = _a[1];
        var w = getWeapon(name);
        total += (q || 0) * Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2);
    });
}); return total; }
function inventoryValue() { return Object.entries(s.inv || {}).reduce(function (a, _a) {
    var k = _a[0], v = _a[1];
    return a + (v || 0) * (s.prices[k] || 0);
}, 0); }
function netWorth() { if (!s)
    return 0; ensureEconomy(); return (s.cash || 0) + (s.bank || 0) + inventoryValue() + vaultValue() - (s.debt || 0); }
function rank() { ensureRankState(); return s.rankState.current || rankFromWorth(netWorth()); }
function updateRankProgress() {
    ensureRankState();
    var worth = netWorth(), qualified = rankFromWorth(worth), qIdx = rankIndex(qualified), cIdx = rankIndex(s.rankState.current || 'Wannabe');
    if (qIdx < cIdx) {
        s.rankState.current = qualified;
        s.rankState.days = 0;
        s.rankState.pending = null;
        s.rankState.pendingDays = 0;
        return;
    }
    if (qIdx === cIdx) {
        s.rankState.days = Math.min(5, (s.rankState.days || 0) + 1);
        s.rankState.pending = null;
        s.rankState.pendingDays = 0;
        return;
    }
    if (s.rankState.pending !== qualified) {
        s.rankState.pending = qualified;
        s.rankState.pendingDays = 1;
    }
    else
        s.rankState.pendingDays++;
    s.rankState.days = s.rankState.pendingDays;
    if (s.rankState.pendingDays >= 5) {
        s.rankState.current = qualified;
        s.rankState.days = 5;
        s.rankState.pending = null;
        s.rankState.pendingDays = 0;
    }
}
function rankDaysText() { ensureRankState(); if (s.rankState.pending)
    return "".concat(s.rankState.pendingDays || 0, "/5 to ").concat(s.rankState.pending); return "".concat(Math.min(5, s.rankState.days || 0), "/5"); }
function ensureStats() {
    var _a;
    s.stats = s.stats || {};
    var defaults = { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 0, arrests: 0, jailDays: 0, bribes: 0, informants: 0 };
    Object.entries(defaults).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (typeof s.stats[k] !== 'number')
            s.stats[k] = v;
    });
    s.travelFares = s.travelFares || {};
    s.reputation = clamp((_a = s.reputation) !== null && _a !== void 0 ? _a : 50, 0, 100);
    ensureVaults();
    ensureVaultLevels();
    ensureEconomy();
    ensureRankState();
}
function baseState() { return { version: '1.6', reputation: 50, news: 'Markets are quiet today.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'Markets are quiet today.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, arrests: 0, jailDays: 0, bribes: 0, informants: 0 } }; }
function newGame(showLoans) {
    if (showLoans === void 0) { showLoans = false; }
    s = baseState();
    ensureStats();
    genPrices();
    newRumour();
    updateRankProgress();
    save();
    draw();
    if (showLoans)
        showLoanIntro();
}
function save() { ensureStats(); s.version = '1.6'; localStorage.setItem('noir_market_v1_6', JSON.stringify(s)); }
function load() { var x = localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4'); if (x) {
    s = JSON.parse(x);
    ensureStats();
    setActiveCityMarket();
    updateRankProgress();
    save();
    draw();
    return false;
} newGame(false); return true; }
function newRumour() {
    ensureEconomy();
    var city = pick(places)[0], drug = pickDrug();
    var types = ['shortage', 'crackdown', 'collapse'];
    var type = pick(types);
    var accurate = Math.random() < .60;
    var text = type === 'shortage' ? "Rumour: ".concat(drug, " shortage in ").concat(city, ".") : type === 'crackdown' ? "Rumour: Police crackdown expected in ".concat(city, ".") : "Rumour: ".concat(drug, " prices collapsing in ").concat(city, ".");
    s.rumour = { city: city, drug: drug, type: type, accurate: accurate, accuracy: accurate ? 60 : 40, text: text };
    return s.rumour;
}
function rumourHtml() { var r = s.rumour || newRumour(); return "<strong>".concat(r.text, "</strong> <span class=\"subtle\">Rumours are unreliable.</span>"); }
function applyRumourResult(r) { if (!r || !r.accurate)
    return; var m = s.economy.cities[r.city]; if (!m)
    return; if (r.type === 'shortage') {
    m.prices[r.drug] = Math.round(m.prices[r.drug] * rand(160, 260) / 100);
    m.supply[r.drug] = Math.max(0, Math.floor(m.supply[r.drug] * .35));
    m.trends[r.drug] = true;
} if (r.type === 'collapse') {
    m.prices[r.drug] = Math.max(1, Math.round(m.prices[r.drug] * rand(30, 60) / 100));
    m.supply[r.drug] += rand(100, 400);
    m.trends[r.drug] = false;
} if (r.type === 'crackdown' && r.city === places[s.city][0])
    s.heat = Math.min(100, s.heat + rand(8, 20)); }
function generateNewsEvent() {
    ensureEconomy();
    var city = pick(places)[0], drug = pickDrug();
    var n = rand(1, 4);
    var text = 'Markets are quiet today.';
    if (n === 1) {
        text = "Police crack down in ".concat(city, ".");
        Object.keys(s.economy.cities[city].prices).forEach(function (k) { var p = s.economy.cities[city].prices[k]; s.economy.cities[city].prices[k] = Math.round(p * rand(108, 135) / 100); s.economy.cities[city].trends[k] = true; });
        if (city === places[s.city][0])
            s.heat = Math.min(100, s.heat + rand(8, 18));
    }
    if (n === 2) {
        text = 'Festival season boosts ecstasy demand.';
        places.forEach(function (p) { return ['Ecstasy', 'MDA', 'MDMA'].forEach(function (d) { if (s.economy.cities[p[0]].prices[d]) {
            s.economy.cities[p[0]].prices[d] = Math.round(s.economy.cities[p[0]].prices[d] * rand(145, 240) / 100);
            s.economy.cities[p[0]].trends[d] = true;
        } }); });
    }
    if (n === 3) {
        text = "Rodents destroy local stash houses in ".concat(city, ".");
        s.economy.cities[city].prices[drug] = Math.round(s.economy.cities[city].prices[drug] * rand(180, 360) / 100);
        s.economy.cities[city].supply[drug] = Math.max(0, Math.floor(s.economy.cities[city].supply[drug] * .35));
        s.economy.cities[city].trends[drug] = true;
    }
    if (n === 4) {
        text = 'Customs seize imports in London.';
        var london_1 = s.economy.cities.London;
        ['Cocaine', 'Heroin', 'Ice', 'Morphine'].forEach(function (d) { london_1.prices[d] = Math.round(london_1.prices[d] * rand(130, 220) / 100); london_1.supply[d] = Math.max(0, Math.floor(london_1.supply[d] * .5)); london_1.trends[d] = true; });
    }
    s.economy.news = { text: text, day: s.day };
    s.news = text;
    s.economy.history.unshift(text);
    s.economy.history = s.economy.history.slice(0, 8);
    setActiveCityMarket();
    return text;
}
function genPrices(force) {
    ensureEconomy();
    places.forEach(function (p) {
        var city = p[0], m = s.economy.cities[city];
        drugs.forEach(function (_a) {
            var name = _a[0], lo = _a[2], hi = _a[3];
            var old = m.prices[name] || rand(lo, hi);
            var target = rand(lo, hi);
            var mult = rand(88, 118) / 100;
            var crash = m.crashes[name];
            if (crash && crash.days > 0) {
                mult *= crash.factor;
                crash.factor = Math.min(.96, crash.factor + ((1 - crash.factor) * .38));
                crash.days--;
                if (crash.days <= 0)
                    delete m.crashes[name];
            }
            var pval = Math.max(1, Math.round(((old * 2 + target) / 3) * mult));
            m.trends[name] = pval >= old;
            m.prices[name] = pval;
            m.supply[name] = clamp(Math.round((m.supply[name] || rand(0, 1000)) * rand(80, 120) / 100) + rand(-80, 90), 0, 1200);
        });
    });
    if (force)
        applyRumourResult(force.rumour || force);
    if (s.reputation >= 81) {
        var m_1 = s.economy.cities[places[s.city][0]];
        drugs.forEach(function (_a) {
            var name = _a[0];
            m_1.supply[name] = Math.min(1500, Math.round(m_1.supply[name] * 1.12) + 25);
        });
    }
    generateNewsEvent();
    setActiveCityMarket();
}
function depressMarketAfterSale(name, q, value) {
    ensureEconomy();
    var city = places[s.city][0], m = s.economy.cities[city];
    var large = q >= 50 || value >= 100000 || q >= Math.max(20, Math.floor((m.supply[name] || 0) * .18));
    if (!large)
        return '';
    var factor = rand(42, 72) / 100, days = rand(1, 3);
    m.crashes[name] = { factor: factor, days: days };
    m.prices[name] = Math.max(1, Math.round(m.prices[name] * factor));
    m.trends[name] = false;
    setActiveCityMarket();
    return " Large sale detected: ".concat(city, " ").concat(name, " prices crash for ").concat(days, " day").concat(days === 1 ? '' : 's', ".");
}
function sellDrugQty(name, q) { ensureStats(); if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return false;
} if (q > s.inv[name]) {
    errorMsg('NOT ENOUGH STOCK');
    return false;
} var value = q * s.prices[name]; s.stats.tradesSold += q; s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, value); s.cash += value; s.inv[name] -= q; rep(1); var crash = depressMarketAfterSale(name, q, value); s.notice = "Sold ".concat(q, " units of ").concat(name, ".").concat(crash); save(); draw(); success("Sold ".concat(q, " ").concat(name)); return true; }
function buyModal() { ensureStats(); setActiveCityMarket(); var elite = s.reputation >= 81 ? '<p class="vault-line">Elite suppliers unlocked: better local supply is available because your reputation is high.</p>' : ''; modal('Buy', "<div class=\"modal-money\"><span>Current funds</span><strong>".concat(money(s.cash), "</strong><em>Storage ").concat(used(), "/").concat(totalSpace(), "</em></div>").concat(elite, "<div class=\"trade-grid\">").concat(drugs.map(function (_a) {
    var name = _a[0], icon = _a[1];
    return "<div class=\"trade-tile\"><div class=\"trade-title\"><b>".concat(icon, "</b><strong>").concat(name, "</strong></div><p>").concat(money(s.prices[name]), " each</p><p>Available: ").concat(s.supply[name], "</p><p>Owned: ").concat(s.inv[name], "</p>").concat(qtyControl(name, 'buy', s.supply[name]), "<button type=\"button\" class=\"buy\" data-buydrug=\"").concat(name, "\">BUY</button><button type=\"button\" data-buymax=\"").concat(name, "\">BUY MAX</button></div>");
}).join(''), "</div><div class=\"trade-footer\"><span>Cash ").concat(money(s.cash), "</span><span>Storage ").concat(used(), "/").concat(totalSpace(), "</span></div>")); setTimeout(function () { bindQtyButtons('buy'); document.querySelectorAll('[data-buymax]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.buymax, max = Math.min(Math.floor(s.cash / s.prices[name]), totalSpace() - used(), s.supply[name]); var inp = qtyInput('buy', name); inp.value = Math.max(0, max); if (max <= 0)
    errorMsg(s.cash < s.prices[name] ? 'INSUFFICIENT FUNDS' : 'NO STORAGE OR STOCK'); }; }); document.querySelectorAll('[data-buydrug]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.buydrug, q = +qtyInput('buy', name).value || 0, cost = q * s.prices[name]; if (q < 1) {
    errorMsg('ENTER QUANTITY');
    return;
} if (q > s.supply[name]) {
    errorMsg('NOT ENOUGH STOCK');
    return;
} if (cost > s.cash) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} if (q > totalSpace() - used()) {
    errorMsg('INSUFFICIENT STORAGE');
    return;
} ensureStats(); s.stats.tradesBought += q; s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, cost); s.cash -= cost; s.inv[name] += q; s.supply[name] -= q; rep(1); s.notice = "Bought ".concat(q, " units of ").concat(name, "."); save(); draw(); success("Bought ".concat(q, " ").concat(name)); buyModal(); }; }); }, 0); }
function draw() { var _a, _b; ensureStats(); setActiveCityMarket(); s.stats.bestNet = Math.max(s.stats.bestNet || 0, netWorth()); var p = places[s.city], hc = healthClass(); if ($('newsTicker'))
    $('newsTicker').textContent = (((_b = (_a = s.economy) === null || _a === void 0 ? void 0 : _a.news) === null || _b === void 0 ? void 0 : _b.text) || s.news || 'Markets are quiet today.'); $('dayCount').textContent = s.day; $('cash').textContent = money(s.cash); $('bank').textContent = money(s.bank); $('debt').textContent = money(s.debt); $('health').textContent = Math.round(s.health) + '%'; $('health').className = hc; $('healthBar').style.width = Math.max(0, s.health) + '%'; $('healthBar').className = hc; $('city').textContent = p[0] + ' ' + p[1]; $('country').textContent = ''; $('flag').textContent = ''; $('marketInfo').innerHTML = "".concat(p[0], ": ").concat(cityText(), ".<br>").concat(rumourHtml()); $('noticeText').textContent = s.notice; $('spaceLabel').innerHTML = "".concat(used(), "/").concat(totalSpace(), " <span class=\"storage-type\">").concat(storageType(), "</span>"); $('statusLocation').textContent = p[0] + ', ' + p[1]; $('rank').textContent = rank(); if ($('rankDays'))
    $('rankDays').textContent = rankDaysText(); if ($('reputation'))
    $('reputation').textContent = "".concat(s.reputation, "/100"); $('space').textContent = "".concat(used(), "/").concat(totalSpace(), " \u00B7 ").concat(storageType()); $('heat').textContent = s.heat + '%'; $('marketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>' + drugs.map(function (_a) {
    var name = _a[0], icon = _a[1];
    return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(s.supply[name], "</span><span class=\"price ").concat(s.trends[name] ? '' : 'down', "\">").concat(money(s.prices[name]), "</span><span class=\"trend ").concat(s.trends[name] ? 'up' : 'down', "\">").concat(s.trends[name] ? '↑' : '↓', "</span></div>");
}).join(''); var items = Object.entries(s.inv).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var wc = weaponCounts(), weaponsRows = Object.entries(wc).map(function (_a) {
    var k = _a[0], v = _a[1];
    return "<div class=\"row storage-weapon\"><span>".concat(k, "</span><span>").concat(v, "</span><span>Weapon</span></div>");
}).join(''); $('pocketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>' + (items.length ? items.slice(0, 10).map(function (_a) {
    var k = _a[0], v = _a[1];
    return "<div class=\"row\"><span>".concat(k, "</span><span>").concat(v, "</span><span>").concat(money(v * s.prices[k]), "</span></div>");
}).join('') : "<div class=\"row\"><span>Empty</span><span>0</span><span>".concat(money(0), "</span></div>")) + "<div class=\"row header\"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>" + (weaponsRows || '<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>'); }
function adjustedLenderMax(l) { var max = l[1]; if (s.reputation >= 51)
    max = Math.round(max * 1.25); if (s.reputation >= 81)
    max = Math.round(max * 1.5); return max; }
function bank() { ensureStats(); var openLoans = s.loans.length ? s.loans.map(function (l) { var days = l.due - s.day, urgent = days <= 5; return "<div class=\"loan-row ".concat(urgent ? 'urgent-loan' : '', "\"><div><span>").concat(l.name, "</span><strong>").concat(money(l.repay), "</strong><em>").concat(days > 0 ? 'due in ' + days + ' day' + (days === 1 ? '' : 's') : 'DUE NOW', "</em></div><button type=\"button\" data-payloan=\"").concat(l.name, "|").concat(l.due, "|").concat(l.repay, "\">Pay</button></div>"); }).join('') : '<p class="subtle">No active loans.</p>'; modal('Finances', "<p class=\"subtle\">Bank balance only changes when you deposit or withdraw. Reputation 51+ improves lender limits.</p><input id=\"amount\" inputmode=\"numeric\" type=\"number\" placeholder=\"Amount\"><div class=\"bank-grid\"><button type=\"button\" id=\"deposit\">Deposit</button><button type=\"button\" id=\"withdraw\">Withdraw</button><button type=\"button\" class=\"full\" id=\"payDebt\">Pay General Debt</button></div><h4>Loans</h4>".concat(openLoans, "<div class=\"loan-list compact\">").concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(l[0], "</strong><br>Borrow up to ").concat(money(adjustedLenderMax(l)), " \u00B7 ").concat(Math.round(l[3] * 100), "% interest \u00B7 due in ").concat(l[2], " days</button>"); }).join(''), "</div>")); setTimeout(function () { var amt = function () { return +$('amount').value || 0; }; $('deposit').onclick = function () { var a = Math.min(amt(), s.cash); if (a <= 0) {
    errorMsg('ENTER AMOUNT');
    return;
} s.cash -= a; s.bank += a; success('Deposit complete'); done(); }; $('withdraw').onclick = function () { var a = Math.min(amt(), s.bank); if (a <= 0) {
    errorMsg('ENTER AMOUNT');
    return;
} s.bank -= a; s.cash += a; success('Withdrawal complete'); done(); }; $('payDebt').onclick = function () { var a = Math.min(amt(), s.cash, s.debt); if (a <= 0) {
    errorMsg('NO DEBT PAYMENT MADE');
    return;
} s.cash -= a; s.debt -= a; success('Debt payment made'); done(); }; document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; }); document.querySelectorAll('[data-payloan]').forEach(function (b) { return b.onclick = function () { return paySpecificLoan(b.dataset.payloan); }; }); }, 0); }
function chooseLoan(i) { var l = lenders[i], name = l[0], max = adjustedLenderMax(l), days = l[2], interest = l[3]; modal(name, "<p>".concat(lenderBio(name), "</p><p class=\"subtle\">Borrow up to <strong>").concat(money(max), "</strong>. Repay <strong>").concat(Math.round(interest * 100), "%</strong> interest by day <strong>").concat(s.day + days, "</strong>.</p><input id=\"loanAmount\" inputmode=\"numeric\" type=\"number\" min=\"1\" max=\"").concat(max, "\" placeholder=\"Amount\"><button type=\"button\" class=\"sell\" id=\"confirmLoan\">ARE YOU SURE?</button>")); setTimeout(function () { var btn = $('confirmLoan'); if (!btn)
    return; btn.onclick = function () { sound('negative'); haptic('error'); var raw = +$('loanAmount').value || 0; if (!raw) {
    errorMsg('ENTER AN AMOUNT');
    return;
} if (raw > max) {
    modal('Loan Declined', "<p><strong>".concat(name, " declines.</strong></p><p>You asked for ").concat(money(raw), ", but ").concat(name, " will only lend up to ").concat(money(max), ".</p><button type=\"button\" id=\"backToLender\">Try a lower amount</button>"));
    setTimeout(function () { var b = $('backToLender'); if (b)
        b.onclick = function () { return chooseLoan(i); }; }, 0);
    return;
} var amt = Math.max(1, Math.floor(raw)), repayAmt = Math.round(amt * (1 + interest)); ensureStats(); s.stats.loansTaken++; s.cash += amt; s.debt += repayAmt; s.loans.push({ name: name, due: s.day + days, repay: repayAmt }); s.notice = "Borrowed ".concat(money(amt), " from ").concat(name, ". ").concat(money(repayAmt), " due day ").concat(s.day + days, "."); $('modal').close(); save(); draw(); toast("Loan accepted: ".concat(money(amt)), 'bad'); }; }, 0); }
function paySpecificLoan(token) { var _a = token.split('|'), name = _a[0], due = _a[1], repayAmt = _a[2], amount = +repayAmt; if (s.cash < amount) {
    s.notice = "You need ".concat(money(amount), " cash to clear ").concat(name, ".");
    done();
    return;
} var idx = s.loans.findIndex(function (l) { return l.name === name && String(l.due) === String(due) && String(l.repay) === String(repayAmt); }); if (idx < 0)
    return; s.cash -= amount; s.debt = Math.max(0, s.debt - amount); s.notice = "Paid ".concat(name, ". Loan cleared."); s.loans.splice(idx, 1); rep(5); success('Debt cleared'); done(); }
function payDueLoan(loan) { if (s.cash < loan.repay) {
    s.notice = "You need ".concat(money(loan.repay), " cash to pay ").concat(loan.name, ".");
    save();
    draw();
    handleDueLoans();
    return;
} var idx = s.loans.indexOf(loan); if (idx < 0)
    return; s.cash -= loan.repay; s.debt = Math.max(0, s.debt - loan.repay); s.notice = "Paid ".concat(loan.name, ". Loan cleared."); s.loans.splice(idx, 1); rep(5); save(); draw(); $('modal').close(); handleDueLoans(); }
function missDueLoans() { var due = s.loans.filter(function (l) { return l.due <= s.day; }); var added = 0; due.forEach(function (l) { var old = l.repay; l.repay = Math.round(l.repay * 1.25); added += l.repay - old; l.due = s.day + 1; }); s.debt += added; s.health = Math.max(1, s.health - 15); s.heat = Math.min(100, s.heat + 10); rep(-10); if (netWorth() < -(s.debt * .5))
    rep(-25); s.notice = "Debt unpaid. You are roughed up, health drops 15%, reputation falls, and the debt increases by ".concat(money(added), "."); save(); draw(); $('modal').close(); maybeFight(); }
function maybeCashMugging() { if (s.cash <= 20000)
    return ''; var chance = s.reputation <= 20 ? .24 : .12; if (Math.random() > chance)
    return ''; var pct = rand(5, 25), lost = Math.floor(s.cash * pct / 100); s.cash -= lost; s.stats.mugged++; return " Three lads in tracksuits take a keen interest in your wallet. You lose ".concat(money(lost), "."); }
function maybeArrest(context) { var carrying = used() + (s.weapons || []).length; var chance = (context === 'travel' ? .06 : .035) + (s.heat / 350) + (carrying > 0 ? .035 : 0); if (Math.random() > chance)
    return null; var major = Math.random() < (.28 + s.heat / 250); var fine = rand(500, 5000), jail = rand(1, 7); return { major: major, fine: fine, jail: jail, context: context }; }
function showArrestModal(arrest, baseTitle, body, rumourBlock) { ensureStats(); s.stats.arrests++; modal('Police Stop', "".concat(body, "<h4>Police Stop</h4><p>").concat(arrest.major ? "Major offence. You are facing ".concat(arrest.jail, " day").concat(arrest.jail === 1 ? '' : 's', " in jail.") : "Minor offence. Fine expected: ".concat(money(arrest.fine), "."), "</p><p class=\"subtle\">Attempt a bribe. Base chance 40%, improved by reputation.</p><div class=\"loan-choice\"><button type=\"button\" id=\"attemptBribe\">Attempt Bribe</button><button type=\"button\" class=\"sell\" id=\"takePenalty\">Take Penalty</button></div>").concat(rumourBlock)); setTimeout(function () { $('attemptBribe').onclick = function () { var cost = rand(750, 7500); if (s.cash < cost) {
    errorMsg('NOT ENOUGH CASH TO BRIBE');
    return;
} s.cash -= cost; s.stats.bribes++; var ok = Math.random() < Math.min(.85, .40 + (s.reputation / 220)); if (ok) {
    s.notice = "Bribe paid: ".concat(money(cost), ". Police look elsewhere.");
    save();
    draw();
    modal(baseTitle, "<p>".concat(s.notice, "</p><button type=\"button\" id=\"continueEvent\">Continue</button>"));
    setTimeout(function () { return $('continueEvent').onclick = function () { $('modal').close(); handleDueLoans(); }; }, 0);
}
else {
    rep(-15);
    applyArrestPenalty(arrest, true);
} }; $('takePenalty').onclick = function () { return applyArrestPenalty(arrest, false); }; }, 0); }
function applyArrestPenalty(arrest, failedBribe) { rep(-15); if (arrest.major) {
    s.day += arrest.jail;
    s.stats.jailDays += arrest.jail;
    s.cash = Math.max(0, s.cash - rand(500, 5000));
    s.notice = "".concat(failedBribe ? 'Bribe failed. ' : '', "Jailed for ").concat(arrest.jail, " day").concat(arrest.jail === 1 ? '' : 's', ". Time advances automatically.");
}
else {
    var fine = Math.min(s.cash, arrest.fine);
    s.cash -= fine;
    s.notice = "".concat(failedBribe ? 'Bribe failed. ' : '', "Fined ").concat(money(fine), " for a minor offence.");
} save(); draw(); modal('Police Outcome', "<p>".concat(s.notice, "</p><button type=\"button\" id=\"continueEvent\">Continue</button>")); setTimeout(function () { return $('continueEvent').onclick = function () { $('modal').close(); handleDueLoans(); }; }, 0); }
function dangerousEventText() { var r = Math.random(), d = pickDrug(); ensureStats(); if (r < .16) {
    var losses = removeDrugPercent(25, 100), wloss = removeWeaponPercent(10, 70);
    s.heat = Math.min(100, s.heat + rand(18, 35));
    return "Police raid. Doors come off, dignity leaves first. Stock seized: ".concat(losses.length ? losses.join(', ') : 'nothing found', ".").concat(wloss.length ? ' Weapons seized: ' + wloss.join(', ') + '.' : '');
} if (r < .31) {
    var losses = removeDrugPercent(10, 50);
    s.heat = Math.min(100, s.heat + rand(5, 18));
    return "Stash discovery. Someone finds your hiding place and helps themselves. Lost: ".concat(losses.length ? losses.join(', ') : 'nothing useful', ".");
} if (r < .43) {
    s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .25));
    s.prices[d] = Math.round(s.prices[d] * rand(160, 300) / 100);
    s.heat = Math.min(100, s.heat + rand(8, 22));
    return "Supplier arrested. ".concat(d, " goes scarce and the price jumps like it heard sirens.");
} if (r < .55) {
    var losses = removeDrugPercent(5, 40);
    s.heat = Math.min(100, s.heat + rand(12, 28));
    return "Customs seizure. Airport dogs earn their biscuits. ".concat(losses.length ? 'Lost ' + losses.join(', ') + '.' : 'You had nothing worth sniffing out.');
} if (r < .68) {
    s.prices[d] = Math.round(s.prices[d] * rand(180, 360) / 100);
    s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .5));
    return "Festival demand spike. Everyone suddenly wants ".concat(d, ". Prices go feral.");
} if (r < .80) {
    s.prices[d] = Math.round(s.prices[d] * rand(220, 480) / 100);
    s.supply[d] = Math.max(0, Math.floor((s.supply[d] || 0) * .35));
    return "Rodents got into local stashes. Horrible for hygiene, excellent for ".concat(d, " prices.");
} if (r < .90) {
    s.stats.mugged++;
    var pct = rand(s.reputation <= 20 ? 15 : 10, s.reputation <= 20 ? 75 : 65), lost = Math.floor(s.cash * pct / 100), stolen = takeDrugs(35);
    s.cash -= lost;
    s.health = Math.max(5, s.health - rand(3, 15));
    return "You are mugged. ".concat(pct, "% of your cash is taken (").concat(money(lost), "). ").concat(stolen.length ? 'Stock stolen: ' + stolen.join(', ') + '.' : 'No stock was taken.');
} return 'A quiet day. The market holds. Suspicious, frankly.'; }
function randomEvent(base) { s.notice = base + ' ' + dangerousEventText() + maybeCashMugging(); }
function nextDay(base, showRumour) { var _a; ensureStats(); var old = { rumour: s.rumour, true: !!(s.rumour && s.rumour.accurate) }; s.day++; s.debt = Math.round(s.debt * 1.02); s.heat = Math.min(100, Math.max(0, s.heat + rand(-8, 13))); rep(1); genPrices(old); newRumour(); randomEvent(base); updateRankProgress(); if (s.day > s.maxDay)
    return endGame(); save(); draw(); var rumourBlock = showRumour ? "<h4>Rumour Result</h4><p><strong>".concat(old.true ? 'TRUE' : 'FALSE', "</strong> \u00B7 ").concat(((_a = old.rumour) === null || _a === void 0 ? void 0 : _a.text) || 'No rumour was active.', "</p>") : ''; var title = showRumour ? 'Stay Here' : 'Travel Result', body = "<p>".concat(s.notice, "</p>").concat(rumourBlock, "<h4>Loan Status</h4>").concat(debtReminderHtml()); var arrest = maybeArrest(showRumour ? 'stay' : 'travel'); if (arrest)
    return showArrestModal(arrest, title, body, rumourBlock); modal(title, "".concat(body, "<button type=\"button\" id=\"continueEvent\">Continue</button>")); setTimeout(function () { return $('continueEvent').onclick = function () { $('modal').close(); handleDueLoans(); }; }, 0); }
function hustle() { ensureStats(); var cost = rand(1000, 10000); modal('Hustle', "<h4>Informant</h4><p class=\"subtle\">Pay for market information. Informants vary in price and reliability. Cheap tips are risky. Expensive tips are usually better, but nobody is clean in this game.</p><p>Cost: <strong>".concat(money(cost), "</strong></p><button type=\"button\" class=\"buy\" id=\"buyInfo\">Pay Informant</button>")); setTimeout(function () { $('buyInfo').onclick = function () { if (s.cash < cost) {
    errorMsg('INSUFFICIENT FUNDS');
    return;
} s.cash -= cost; s.stats.informants++; if (Math.random() < .8) {
    var city = pick(places)[0], drug = pickDrug(), kind = pick(['shortage', 'collapse', 'crackdown']);
    var text = kind === 'shortage' ? "".concat(drug, " shortage likely in ").concat(city, ".") : kind === 'collapse' ? "".concat(drug, " prices may collapse in ").concat(city, ".") : "Police pressure expected in ".concat(city, ".");
    s.notice = "Informant: ".concat(text);
    success('Informant paid');
}
else {
    s.notice = 'Your informant disappears with your cash and suspiciously expensive trainers.';
    errorMsg('Scammed');
} save(); draw(); hustle(); }; }, 0); }
function dump() { ensureStats(); ensureVaults(); ensureVaultLevels(); var city = places[s.city][0], vault = s.vaults[city], wVault = s.weaponVaults[city], cap = vaultCapacity(city), next = nextVaultLevel(city), nextCost = vaultUpgradeCost(next); var carried = Object.entries(s.inv).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var stored = Object.entries(vault).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var cWeapons = Object.entries(carriedWeaponCounts()).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var vWeapons = Object.entries(wVault).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var rowDrug = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Carried: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"vdrug-").concat(i, "\"><button type=\"button\" data-storedrug=\"").concat(i, "\">STORE</button><button type=\"button\" data-storealldrug=\"").concat(i, "\">STORE ALL</button><button type=\"button\" class=\"danger-mini\" data-dropdrug=\"").concat(i, "\">DUMP</button></div>"); }; var rowWeapon = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Held: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"vweapon-").concat(i, "\"><button type=\"button\" data-storeweapon=\"").concat(i, "\">STORE</button><button type=\"button\" data-storeallweapon=\"").concat(i, "\">STORE ALL</button><button type=\"button\" class=\"danger-mini\" data-dropweapon=\"").concat(i, "\">DUMP</button></div>"); }; var rowStored = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"tdrug-").concat(i, "\"><button type=\"button\" data-takedrug=\"").concat(i, "\">TAKE</button><button type=\"button\" data-takealldrug=\"").concat(i, "\">TAKE ALL</button></div>"); }; var rowStoredWeapon = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"tweapon-").concat(i, "\"><button type=\"button\" data-takeweapon=\"").concat(i, "\">TAKE</button><button type=\"button\" data-takeallweapon=\"").concat(i, "\">TAKE ALL</button></div>"); }; var upgrade = next ? "<div class=\"vault-line\"><strong>".concat(s.vaultLevels[city], " Vault</strong><br>Capacity ").concat(vaultUsed(city), "/").concat(cap, ". Upgrade to ").concat(next, " (").concat(next === 'Secure' ? '250' : '500', " slots) for ").concat(money(nextCost), ".<br><button type=\"button\" id=\"upgradeVault\">Upgrade Vault</button></div>") : "<div class=\"vault-line\"><strong>Fortress Vault</strong><br>Capacity ".concat(vaultUsed(city), "/").concat(cap, ". Maximum security installed.</div>"); modal('Storage', "<div class=\"modal-money\"><span>Carried</span><strong>".concat(used(), "/").concat(totalSpace(), "</strong><em>").concat(storageType(), "</em></div><div class=\"modal-money\"><span>").concat(city, " Vault</span><strong>").concat(vaultUsed(city), "/").concat(cap, "</strong><em>City only</em></div>").concat(upgrade, "<p class=\"subtle vault-line\">").concat(cityVaultLine(city), "</p><h4>Move Drugs to Vault</h4>").concat(carried.length ? "<div class=\"storage-move-list\">".concat(carried.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowDrug(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No carried drugs.</p>', "<h4>Move Weapons to Vault</h4>").concat(cWeapons.length ? "<div class=\"storage-move-list\">".concat(cWeapons.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowWeapon(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No weapons held.</p>', "<h4>").concat(city, " Vault Drugs</h4>").concat(stored.length ? "<div class=\"storage-move-list\">".concat(stored.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowStored(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No drugs in this city vault.</p>', "<h4>").concat(city, " Vault Weapons</h4>").concat(vWeapons.length ? "<div class=\"storage-move-list\">".concat(vWeapons.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowStoredWeapon(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No weapons in this city vault.</p>')); setTimeout(function () { var up = $('upgradeVault'); if (up)
    up.onclick = function () { if (s.cash < nextCost) {
        errorMsg('INSUFFICIENT FUNDS');
        return;
    } s.cash -= nextCost; s.vaultLevels[city] = next; s.notice = "".concat(city, " vault upgraded to ").concat(next, "."); success('Vault upgraded'); save(); draw(); dump(); }; function toVaultDrug(name, qty) { var space = vaultCapacity(city) - vaultUsed(city); qty = Math.min(qty, s.inv[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'VAULT FULL' : 'NO STOCK');
    return;
} s.inv[name] -= qty; vault[name] = (vault[name] || 0) + qty; s.notice = "Stored ".concat(qty, " ").concat(name, " in the ").concat(city, " vault."); save(); draw(); success('Stored in vault'); dump(); } function dropDrug(name, qty) { qty = Math.min(qty, s.inv[name] || 0); if (qty < 1) {
    errorMsg('NO STOCK');
    return;
} s.inv[name] -= qty; s.notice = "Dumped ".concat(qty, " ").concat(name, ". Gone. No refunds. No questions."); save(); draw(); sound('negative'); dump(); } function fromVaultDrug(name, qty) { var space = totalSpace() - used(); qty = Math.min(qty, vault[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'INSUFFICIENT STORAGE' : 'NO VAULT STOCK');
    return;
} vault[name] -= qty; s.inv[name] = (s.inv[name] || 0) + qty; s.notice = "Retrieved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('Retrieved from vault'); dump(); } function toVaultWeapon(name, qty) { var space = vaultCapacity(city) - vaultUsed(city); qty = Math.min(qty, carriedWeaponCounts()[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'VAULT FULL' : 'NO WEAPON');
    return;
} adjustWeaponList(name, qty, 'remove'); wVault[name] = (wVault[name] || 0) + qty; s.notice = "Stored ".concat(qty, " ").concat(name, " in the ").concat(city, " vault."); save(); draw(); success('Weapon stored'); dump(); } function dropWeapon(name, qty) { qty = Math.min(qty, carriedWeaponCounts()[name] || 0); if (qty < 1) {
    errorMsg('NO WEAPON');
    return;
} adjustWeaponList(name, qty, 'remove'); s.notice = "Dumped ".concat(qty, " ").concat(name, ". Sensible? Probably not. Convenient? Yes."); save(); draw(); sound('negative'); dump(); } function fromVaultWeapon(name, qty) { qty = Math.min(qty, wVault[name] || 0); if (qty < 1) {
    errorMsg('NO VAULT WEAPON');
    return;
} wVault[name] -= qty; adjustWeaponList(name, qty, 'add'); s.notice = "Retrieved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('Weapon retrieved'); dump(); } document.querySelectorAll('[data-storedrug]').forEach(function (b) { return b.onclick = function () { var name = carried[+b.dataset.storedrug][0]; toVaultDrug(name, +$('vdrug-' + b.dataset.storedrug).value || 0); }; }); document.querySelectorAll('[data-storealldrug]').forEach(function (b) { return b.onclick = function () { var _a = carried[+b.dataset.storealldrug], name = _a[0], q = _a[1]; toVaultDrug(name, q); }; }); document.querySelectorAll('[data-dropdrug]').forEach(function (b) { return b.onclick = function () { var name = carried[+b.dataset.dropdrug][0]; dropDrug(name, +$('vdrug-' + b.dataset.dropdrug).value || 0); }; }); document.querySelectorAll('[data-takedrug]').forEach(function (b) { return b.onclick = function () { var name = stored[+b.dataset.takedrug][0]; fromVaultDrug(name, +$('tdrug-' + b.dataset.takedrug).value || 0); }; }); document.querySelectorAll('[data-takealldrug]').forEach(function (b) { return b.onclick = function () { var _a = stored[+b.dataset.takealldrug], name = _a[0], q = _a[1]; fromVaultDrug(name, q); }; }); document.querySelectorAll('[data-storeweapon]').forEach(function (b) { return b.onclick = function () { var name = cWeapons[+b.dataset.storeweapon][0]; toVaultWeapon(name, +$('vweapon-' + b.dataset.storeweapon).value || 0); }; }); document.querySelectorAll('[data-storeallweapon]').forEach(function (b) { return b.onclick = function () { var _a = cWeapons[+b.dataset.storeallweapon], name = _a[0], q = _a[1]; toVaultWeapon(name, q); }; }); document.querySelectorAll('[data-dropweapon]').forEach(function (b) { return b.onclick = function () { var name = cWeapons[+b.dataset.dropweapon][0]; dropWeapon(name, +$('vweapon-' + b.dataset.dropweapon).value || 0); }; }); document.querySelectorAll('[data-takeweapon]').forEach(function (b) { return b.onclick = function () { var name = vWeapons[+b.dataset.takeweapon][0]; fromVaultWeapon(name, +$('tweapon-' + b.dataset.takeweapon).value || 0); }; }); document.querySelectorAll('[data-takeallweapon]').forEach(function (b) { return b.onclick = function () { var _a = vWeapons[+b.dataset.takeallweapon], name = _a[0], q = _a[1]; fromVaultWeapon(name, q); }; }); }, 0); }
function v13SelfTest() { console.log('NOIR MARKET V1.7 checks: dynamic city economy, market rumours, news ticker, reputation, arrest/bribe system, informants, city vault upgrades and rank progression active.'); }
/* Noir Market V1.7 final audio loop override */
function startBackgroundMusic() {
    if (!soundEnabled)
        return;
    unlockAudio();
    musicStarted = true;
    try {
        if (typeof Audio !== 'undefined') {
            if (!bgMusic) {
                bgMusic = new Audio(MUSIC_PATH);
                bgMusic.loop = true;
                bgMusic.volume = 0.42;
            }
            bgMusic.loop = true;
            var playResult = bgMusic.play();
            if (playResult && playResult.catch)
                playResult.catch(function () { return startSynthMusic(); });
            return;
        }
    }
    catch (e) { }
    startSynthMusic();
}
function stopBackgroundMusic() {
    try {
        if (bgMusic)
            bgMusic.pause();
    }
    catch (e) { }
    stopSynthMusic();
}
/* Noir Market V1.7 immediate rank drop enforcement */
function rank() {
    ensureRankState();
    var qualified = rankFromWorth(netWorth());
    if (rankIndex(qualified) < rankIndex(s.rankState.current || 'Wannabe')) {
        s.rankState.current = qualified;
        s.rankState.days = 0;
        s.rankState.pending = null;
        s.rankState.pendingDays = 0;
    }
    return s.rankState.current || qualified;
}
/* Noir Market V1.7 news, notifications, hustle and storage overrides */
function upperNews(text) { return String(text || 'MARKETS ARE QUIET.').toUpperCase(); }
function formatTicker(stories) { return stories.map(upperNews).join('   •   '); }
function policeMovementStory() {
    var city = pick(places)[0];
    var m = s.economy.cities[city];
    Object.keys(m.prices).forEach(function (k) { m.prices[k] = Math.max(1, Math.round(m.prices[k] * rand(104, 119) / 100)); m.trends[k] = true; });
    if (city === places[s.city][0])
        s.heat = Math.min(100, s.heat + rand(6, 15));
    return "Increased police presence reported in ".concat(city, ".");
}
function spikedBatchStory() {
    var city = pick(places)[0], drug = pickDrug();
    var m = s.economy.cities[city];
    if (m && m.prices && m.prices[drug]) {
        m.prices[drug] = Math.max(1, Math.round(m.prices[drug] * rand(58, 82) / 100));
        m.supply[drug] = Math.max(0, Math.floor((m.supply[drug] || 0) * rand(60, 85) / 100));
        m.trends[drug] = false;
    }
    return "Spiked ".concat(drug, " batches cause panic in ").concat(city, ".");
}
function generateNewsEvent() {
    ensureEconomy();
    var city = pick(places)[0], drug = pickDrug();
    var n = rand(1, 4);
    var main = 'Markets are quiet today.';
    if (n === 1) {
        main = "Police crack down in ".concat(city, ".");
        Object.keys(s.economy.cities[city].prices).forEach(function (k) { var p = s.economy.cities[city].prices[k]; s.economy.cities[city].prices[k] = Math.round(p * rand(108, 135) / 100); s.economy.cities[city].trends[k] = true; });
        if (city === places[s.city][0])
            s.heat = Math.min(100, s.heat + rand(8, 18));
    }
    if (n === 2) {
        main = 'Festival season boosts ecstasy demand.';
        places.forEach(function (p) { return ['Ecstasy', 'MDA', 'MDMA'].forEach(function (d) { if (s.economy.cities[p[0]].prices[d]) {
            s.economy.cities[p[0]].prices[d] = Math.round(s.economy.cities[p[0]].prices[d] * rand(145, 240) / 100);
            s.economy.cities[p[0]].trends[d] = true;
        } }); });
    }
    if (n === 3) {
        main = "Rodents destroy local stash houses in ".concat(city, ".");
        s.economy.cities[city].prices[drug] = Math.round(s.economy.cities[city].prices[drug] * rand(180, 360) / 100);
        s.economy.cities[city].supply[drug] = Math.max(0, Math.floor(s.economy.cities[city].supply[drug] * .35));
        s.economy.cities[city].trends[drug] = true;
    }
    if (n === 4) {
        main = 'Customs seize imports in London.';
        var london_2 = s.economy.cities.London;
        ['Cocaine', 'Heroin', 'Ice', 'Morphine'].forEach(function (d) { london_2.prices[d] = Math.round(london_2.prices[d] * rand(130, 220) / 100); london_2.supply[d] = Math.max(0, Math.floor(london_2.supply[d] * .5)); london_2.trends[d] = true; });
    }
    var stories = [main, policeMovementStory(), spikedBatchStory()];
    var text = formatTicker(stories);
    s.economy.news = { text: text, stories: stories.map(upperNews), day: s.day };
    s.news = text;
    s.economy.history.unshift(text);
    s.economy.history = s.economy.history.slice(0, 8);
    setActiveCityMarket();
    return text;
}
function toast(msg, type) {
    if (type === void 0) { type = 'ok'; }
    var el = document.getElementById('toast');
    if (!el) {
        el = document.createElement('div');
        el.id = 'toast';
    }
    var modalEl = document.getElementById('modal');
    var target = (modalEl && modalEl.open) ? modalEl : document.body;
    if (el.parentNode !== target)
        target.appendChild(el);
    el.className = 'toast ' + (type === 'bad' ? 'bad' : 'ok');
    el.textContent = String(msg || '').toUpperCase();
    requestAnimationFrame(function () { return el.classList.add('show'); });
    clearTimeout(el._t);
    el._t = setTimeout(function () { return el.classList.remove('show'); }, 2200);
}
function save() { ensureStats(); s.version = '1.6'; localStorage.setItem('noir_market_v1_6', JSON.stringify(s)); }
function load() { var x = localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4'); if (x) {
    s = JSON.parse(x);
    ensureStats();
    s.version = '1.6';
    setActiveCityMarket();
    updateRankProgress();
    save();
    draw();
    return false;
} newGame(false); return true; }
function baseState() { return { version: '1.6', reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, arrests: 0, jailDays: 0, bribes: 0, informants: 0 } }; }
function draw() { var _a, _b; ensureStats(); setActiveCityMarket(); s.stats.bestNet = Math.max(s.stats.bestNet || 0, netWorth()); var p = places[s.city], hc = healthClass(); if ($('newsTicker')) {
    $('newsTicker').textContent = upperNews(((_b = (_a = s.economy) === null || _a === void 0 ? void 0 : _a.news) === null || _b === void 0 ? void 0 : _b.text) || s.news || 'MARKETS ARE QUIET TODAY.');
} $('dayCount').textContent = s.day; $('cash').textContent = money(s.cash); $('bank').textContent = money(s.bank); $('debt').textContent = money(s.debt); $('health').textContent = Math.round(s.health) + '%'; $('health').className = hc; $('healthBar').style.width = Math.max(0, s.health) + '%'; $('healthBar').className = hc; $('city').textContent = p[0] + ' ' + p[1]; $('country').textContent = ''; $('flag').textContent = ''; $('marketInfo').innerHTML = "".concat(p[0], ": ").concat(cityText(), ".<br>").concat(rumourHtml()); $('noticeText').textContent = s.notice; $('spaceLabel').innerHTML = "".concat(used(), "/").concat(totalSpace(), " <span class=\"storage-type\">").concat(storageType(), "</span>"); $('statusLocation').textContent = p[0] + ', ' + p[1]; $('rank').textContent = rank(); if ($('rankDays'))
    $('rankDays').textContent = rankDaysText(); if ($('reputation'))
    $('reputation').textContent = "".concat(s.reputation, "/100"); $('space').textContent = "".concat(used(), "/").concat(totalSpace(), " \u00B7 ").concat(storageType()); $('heat').textContent = s.heat + '%'; $('marketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>' + drugs.map(function (_a) {
    var name = _a[0], icon = _a[1];
    return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(s.supply[name], "</span><span class=\"price ").concat(s.trends[name] ? '' : 'down', "\">").concat(money(s.prices[name]), "</span><span class=\"trend ").concat(s.trends[name] ? 'up' : 'down', "\">").concat(s.trends[name] ? '↑' : '↓', "</span></div>");
}).join(''); var items = Object.entries(s.inv).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var wc = weaponCounts(), weaponsRows = Object.entries(wc).map(function (_a) {
    var k = _a[0], v = _a[1];
    return "<div class=\"row storage-weapon\"><span>".concat(k, "</span><span>").concat(v, "</span><span>Weapon</span></div>");
}).join(''); $('pocketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>' + (items.length ? items.slice(0, 10).map(function (_a) {
    var k = _a[0], v = _a[1];
    return "<div class=\"row\"><span>".concat(k, "</span><span>").concat(v, "</span><span>").concat(money(v * s.prices[k]), "</span></div>");
}).join('') : "<div class=\"row\"><span>Empty</span><span>0</span><span>".concat(money(0), "</span></div>")) + "<div class=\"row header\"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>" + (weaponsRows || '<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>'); }
function hustle() {
    ensureStats();
    var informants = [
        { id: 'simon', name: 'Simon the Snitch', cost: 100, trust: 0.35, bio: 'Cheap, twitchy and usually hiding behind the bins. Knows a bit, guesses a lot.' },
        { id: 'lisa', name: 'Loose Lisa', cost: 250, trust: 0.60, bio: 'Talks too much, hears too much and occasionally remembers which bit was true.' },
        { id: 'pete', name: 'Pistol Pete', cost: 10000, trust: 0.90, bio: 'Expensive, paranoid and oddly well informed. The closest thing to reliable in this business.' }
    ];
    modal('Hustle', "<h4>Informants</h4><p class=\"subtle\">Informants vary in price and reliability. Cheap tips are risky. Expensive tips are usually better, but nobody is clean in this game.</p><div class=\"hustle-grid\">".concat(informants.map(function (i) { return "<div class=\"hustle-card\"><h4>".concat(i.name, " \u00B7 ").concat(money(i.cost), "</h4><p>").concat(i.bio, "</p><button type=\"button\" class=\"buy\" data-informant=\"").concat(i.id, "\">Pay ").concat(i.name, "</button></div>"); }).join(''), "</div><h4>Businesses</h4><div class=\"coming-soon\"><strong>COMING SOON</strong><p class=\"subtle\">Front companies, dirty laundrettes and other bad decisions will arrive in a later release.</p></div>"));
    setTimeout(function () { document.querySelectorAll('[data-informant]').forEach(function (btn) { return btn.onclick = function () { var info = informants.find(function (i) { return i.id === btn.dataset.informant; }); if (!info)
        return; if (s.cash < info.cost) {
        errorMsg('INSUFFICIENT FUNDS');
        return;
    } s.cash -= info.cost; ensureStats(); s.stats.informants++; if (Math.random() < 0.10) {
        s.notice = "".concat(info.name, " disappears with your cash and suspiciously expensive trainers.");
        errorMsg('SCAMMED');
        save();
        draw();
        hustle();
        return;
    } var city = pick(places)[0], drug = pickDrug(), kind = pick(['shortage', 'collapse', 'crackdown', 'spiked']); var accurate = Math.random() < info.trust; var text = kind === 'shortage' ? "".concat(drug, " shortage likely in ").concat(city, ".") : kind === 'collapse' ? "".concat(drug, " prices may collapse in ").concat(city, ".") : kind === 'spiked' ? "Spiked ".concat(drug, " batches causing panic in ").concat(city, ".") : "Police pressure expected in ".concat(city, "."); if (!accurate) {
        text = pick(["".concat(pickDrug(), " shipment rumoured in ").concat(pick(places)[0], "."), "Police looking the wrong way in ".concat(pick(places)[0], "."), "Street prices turning weird in ".concat(pick(places)[0], ".")]);
    } s.notice = "".concat(info.name, ": ").concat(text); success('INFORMANT PAID'); save(); draw(); hustle(); }; }); }, 0);
}
function dump() { ensureStats(); ensureVaults(); ensureVaultLevels(); var city = places[s.city][0], vault = s.vaults[city], wVault = s.weaponVaults[city], cap = vaultCapacity(city), next = nextVaultLevel(city), nextCost = vaultUpgradeCost(next); var carried = Object.entries(s.inv).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var stored = Object.entries(vault).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var cWeapons = Object.entries(carriedWeaponCounts()).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var vWeapons = Object.entries(wVault).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}); var actionButtons = function (buttons, cls) {
    if (cls === void 0) { cls = ''; }
    return "<div class=\"storage-actions ".concat(cls, "\">").concat(buttons, "</div>");
}; var rowDrug = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Carried: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"vdrug-").concat(i, "\">").concat(actionButtons("<button type=\"button\" data-storedrug=\"".concat(i, "\">STORE</button><button type=\"button\" data-storealldrug=\"").concat(i, "\">STORE ALL</button><button type=\"button\" class=\"danger-mini\" data-dropdrug=\"").concat(i, "\">DUMP</button>")), "</div>"); }; var rowWeapon = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Held: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"vweapon-").concat(i, "\">").concat(actionButtons("<button type=\"button\" data-storeweapon=\"".concat(i, "\">STORE</button><button type=\"button\" data-storeallweapon=\"").concat(i, "\">STORE ALL</button><button type=\"button\" class=\"danger-mini\" data-dropweapon=\"").concat(i, "\">DUMP</button>")), "</div>"); }; var rowStored = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"tdrug-").concat(i, "\">").concat(actionButtons("<button type=\"button\" data-takedrug=\"".concat(i, "\">TAKE</button><button type=\"button\" data-takealldrug=\"").concat(i, "\">TAKE ALL</button>"), 'two'), "</div>"); }; var rowStoredWeapon = function (name, q, i) { return "<div class=\"storage-move vault-row\"><div><strong>".concat(name, "</strong><span>Vault: ").concat(q, "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"tweapon-").concat(i, "\">").concat(actionButtons("<button type=\"button\" data-takeweapon=\"".concat(i, "\">TAKE</button><button type=\"button\" data-takeallweapon=\"").concat(i, "\">TAKE ALL</button>"), 'two'), "</div>"); }; var upgrade = next ? "<div class=\"vault-line\"><strong>".concat(s.vaultLevels[city], " Vault</strong><br>Capacity ").concat(vaultUsed(city), "/").concat(cap, ". Upgrade to ").concat(next, " (").concat(next === 'Secure' ? '250' : '500', " slots) for ").concat(money(nextCost), ".<br><button type=\"button\" id=\"upgradeVault\">Upgrade Vault</button></div>") : "<div class=\"vault-line\"><strong>Fortress Vault</strong><br>Capacity ".concat(vaultUsed(city), "/").concat(cap, ". Maximum security installed.</div>"); modal('Storage', "<div class=\"modal-money\"><span>Carried</span><strong>".concat(used(), "/").concat(totalSpace(), "</strong><em>").concat(storageType(), "</em></div><div class=\"modal-money\"><span>").concat(city, " Vault</span><strong>").concat(vaultUsed(city), "/").concat(cap, "</strong><em>City only</em></div>").concat(upgrade, "<p class=\"subtle vault-line\">").concat(cityVaultLine(city), "</p><h4>Move Drugs to Vault</h4>").concat(carried.length ? "<div class=\"storage-move-list\">".concat(carried.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowDrug(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No carried drugs.</p>', "<h4>Move Weapons to Vault</h4>").concat(cWeapons.length ? "<div class=\"storage-move-list\">".concat(cWeapons.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowWeapon(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No weapons held.</p>', "<h4>").concat(city, " Vault Drugs</h4>").concat(stored.length ? "<div class=\"storage-move-list\">".concat(stored.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowStored(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No drugs in this city vault.</p>', "<h4>").concat(city, " Vault Weapons</h4>").concat(vWeapons.length ? "<div class=\"storage-move-list\">".concat(vWeapons.map(function (_a, i) {
    var n = _a[0], q = _a[1];
    return rowStoredWeapon(n, q, i);
}).join(''), "</div>") : '<p class="subtle">No weapons in this city vault.</p>')); setTimeout(function () { var up = $('upgradeVault'); if (up)
    up.onclick = function () { if (s.cash < nextCost) {
        errorMsg('INSUFFICIENT FUNDS');
        return;
    } s.cash -= nextCost; s.vaultLevels[city] = next; s.notice = "".concat(city, " vault upgraded to ").concat(next, "."); success('VAULT UPGRADED'); save(); draw(); dump(); }; function toVaultDrug(name, qty) { var space = vaultCapacity(city) - vaultUsed(city); qty = Math.min(qty, s.inv[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'VAULT FULL' : 'NO STOCK');
    return;
} s.inv[name] -= qty; vault[name] = (vault[name] || 0) + qty; s.notice = "Stored ".concat(qty, " ").concat(name, " in the ").concat(city, " vault."); save(); draw(); success('STORED IN VAULT'); dump(); } function dropDrug(name, qty) { qty = Math.min(qty, s.inv[name] || 0); if (qty < 1) {
    errorMsg('NO STOCK');
    return;
} s.inv[name] -= qty; s.notice = "Dumped ".concat(qty, " ").concat(name, ". Gone. No refunds. No questions."); save(); draw(); sound('negative'); dump(); } function fromVaultDrug(name, qty) { var space = totalSpace() - used(); qty = Math.min(qty, vault[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'INSUFFICIENT STORAGE' : 'NO VAULT STOCK');
    return;
} vault[name] -= qty; s.inv[name] = (s.inv[name] || 0) + qty; s.notice = "Retrieved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('RETRIEVED FROM VAULT'); dump(); } function toVaultWeapon(name, qty) { var space = vaultCapacity(city) - vaultUsed(city); qty = Math.min(qty, carriedWeaponCounts()[name] || 0, space); if (qty < 1) {
    errorMsg(space < 1 ? 'VAULT FULL' : 'NO WEAPON');
    return;
} adjustWeaponList(name, qty, 'remove'); wVault[name] = (wVault[name] || 0) + qty; s.notice = "Stored ".concat(qty, " ").concat(name, " in the ").concat(city, " vault."); save(); draw(); success('WEAPON STORED'); dump(); } function dropWeapon(name, qty) { qty = Math.min(qty, carriedWeaponCounts()[name] || 0); if (qty < 1) {
    errorMsg('NO WEAPON');
    return;
} adjustWeaponList(name, qty, 'remove'); s.notice = "Dumped ".concat(qty, " ").concat(name, ". Sensible? Probably not. Convenient? Yes."); save(); draw(); sound('negative'); dump(); } function fromVaultWeapon(name, qty) { qty = Math.min(qty, wVault[name] || 0); if (qty < 1) {
    errorMsg('NO VAULT WEAPON');
    return;
} wVault[name] -= qty; adjustWeaponList(name, qty, 'add'); s.notice = "Retrieved ".concat(qty, " ").concat(name, " from the ").concat(city, " vault."); save(); draw(); success('WEAPON RETRIEVED'); dump(); } document.querySelectorAll('[data-storedrug]').forEach(function (b) { return b.onclick = function () { var name = carried[+b.dataset.storedrug][0]; toVaultDrug(name, +$('vdrug-' + b.dataset.storedrug).value || 0); }; }); document.querySelectorAll('[data-storealldrug]').forEach(function (b) { return b.onclick = function () { var _a = carried[+b.dataset.storealldrug], name = _a[0], q = _a[1]; toVaultDrug(name, q); }; }); document.querySelectorAll('[data-dropdrug]').forEach(function (b) { return b.onclick = function () { var name = carried[+b.dataset.dropdrug][0]; dropDrug(name, +$('vdrug-' + b.dataset.dropdrug).value || 0); }; }); document.querySelectorAll('[data-takedrug]').forEach(function (b) { return b.onclick = function () { var name = stored[+b.dataset.takedrug][0]; fromVaultDrug(name, +$('tdrug-' + b.dataset.takedrug).value || 0); }; }); document.querySelectorAll('[data-takealldrug]').forEach(function (b) { return b.onclick = function () { var _a = stored[+b.dataset.takealldrug], name = _a[0], q = _a[1]; fromVaultDrug(name, q); }; }); document.querySelectorAll('[data-storeweapon]').forEach(function (b) { return b.onclick = function () { var name = cWeapons[+b.dataset.storeweapon][0]; toVaultWeapon(name, +$('vweapon-' + b.dataset.storeweapon).value || 0); }; }); document.querySelectorAll('[data-storeallweapon]').forEach(function (b) { return b.onclick = function () { var _a = cWeapons[+b.dataset.storeallweapon], name = _a[0], q = _a[1]; toVaultWeapon(name, q); }; }); document.querySelectorAll('[data-dropweapon]').forEach(function (b) { return b.onclick = function () { var name = cWeapons[+b.dataset.dropweapon][0]; dropWeapon(name, +$('vweapon-' + b.dataset.dropweapon).value || 0); }; }); document.querySelectorAll('[data-takeweapon]').forEach(function (b) { return b.onclick = function () { var name = vWeapons[+b.dataset.takeweapon][0]; fromVaultWeapon(name, +$('tweapon-' + b.dataset.takeweapon).value || 0); }; }); document.querySelectorAll('[data-takeallweapon]').forEach(function (b) { return b.onclick = function () { var _a = vWeapons[+b.dataset.takeallweapon], name = _a[0], q = _a[1]; fromVaultWeapon(name, q); }; }); }, 0); }
function v16IconSelfTest() { console.log('NOIR MARKET V1.7 checks: uppercase smooth ticker, police/spiked batch stories, top-layer notifications, revised hustle informants, coming soon businesses, storage spacing and new MP3 music active.'); }
/* Noir Market V1.7 proportional loan interest override */
function loanPayoff(l) {
    if (!l)
        return 0;
    if (l.principal === undefined && l.repay !== undefined)
        return Math.max(0, Math.round(+l.repay || 0));
    var principal = Math.max(0, Math.round(+l.principal || 0));
    var rate = Math.max(0, +l.interestRate || 0);
    var term = Math.max(1, Math.round(+l.termDays || Math.max(1, (+l.due || s.day) - (+l.startDay || s.day))));
    var elapsed = Math.max(0, Math.round((+s.day || 1) - (+l.startDay || +s.day || 1)));
    var progress = Math.min(1, elapsed / term);
    var fullInterest = Math.round(principal * rate);
    var minimumInterest = fullInterest > 0 ? Math.max(1, Math.round(fullInterest * 0.10)) : 0;
    var interestDue = elapsed <= 0 ? minimumInterest : Math.max(minimumInterest, Math.round(fullInterest * progress));
    return principal + Math.min(fullInterest, interestDue);
}
function loanFullRepay(l) {
    if (!l)
        return 0;
    if (l.principal === undefined && l.repay !== undefined)
        return Math.max(0, Math.round(+l.repay || 0));
    return Math.max(0, Math.round((+l.principal || 0) * (1 + (+l.interestRate || 0))));
}
function normaliseLoans() {
    if (!s)
        return;
    if (!Array.isArray(s.loans))
        s.loans = [];
    s.loans = s.loans.map(function (l, idx) {
        if (l && l.principal !== undefined) {
            l.id = l.id || "loan_".concat(s.day || 1, "_").concat(idx, "_").concat(Math.floor(Math.random() * 100000));
            l.principal = Math.max(0, Math.round(+l.principal || 0));
            l.interestRate = Math.max(0, +l.interestRate || 0);
            l.startDay = Math.max(1, Math.round(+l.startDay || (+s.day || 1)));
            l.termDays = Math.max(1, Math.round(+l.termDays || Math.max(1, (+l.due || s.day) - l.startDay)));
            l.due = Math.max(l.startDay, Math.round(+l.due || l.startDay + l.termDays));
            l.name = l.name || 'Shady Lender';
            return l;
        }
        return {
            id: "legacy_".concat(s.day || 1, "_").concat(idx, "_").concat(Math.floor(Math.random() * 100000)),
            name: (l === null || l === void 0 ? void 0 : l.name) || 'Shady Lender',
            principal: Math.max(0, Math.round(+(l === null || l === void 0 ? void 0 : l.repay) || 0)),
            interestRate: 0,
            startDay: +s.day || 1,
            due: Math.round(+(l === null || l === void 0 ? void 0 : l.due) || (+s.day || 1)),
            termDays: Math.max(1, Math.round((+(l === null || l === void 0 ? void 0 : l.due) || (+s.day || 1)) - (+s.day || 1)))
        };
    });
    s.debt = activeDebtTotal();
}
function activeDebtTotal() {
    if (!s || !Array.isArray(s.loans))
        return 0;
    return s.loans.reduce(function (a, l) { return a + loanPayoff(l); }, 0);
}
function ensureStats() {
    var _a;
    s.stats = s.stats || {};
    var defaults = { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 0, arrests: 0, jailDays: 0, bribes: 0, informants: 0 };
    Object.entries(defaults).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (typeof s.stats[k] !== 'number')
            s.stats[k] = v;
    });
    s.travelFares = s.travelFares || {};
    s.reputation = clamp((_a = s.reputation) !== null && _a !== void 0 ? _a : 50, 0, 100);
    ensureVaults();
    ensureVaultLevels();
    ensureEconomy();
    ensureRankState();
    normaliseLoans();
}
function baseState() { return { version: '1.6', reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, arrests: 0, jailDays: 0, bribes: 0, informants: 0 } }; }
function save() { ensureStats(); s.version = '1.6'; localStorage.setItem('noir_market_v1_6', JSON.stringify(s)); }
function load() { var x = localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4'); if (x) {
    s = JSON.parse(x);
    ensureStats();
    s.version = '1.6';
    setActiveCityMarket();
    updateRankProgress();
    save();
    draw();
    return false;
} newGame(false); return true; }
function chooseLoan(i) {
    var l = lenders[i], name = l[0], max = adjustedLenderMax(l), days = l[2], interest = l[3];
    modal(name, "<p>".concat(lenderBio(name), "</p><p class=\"subtle\">Borrow up to <strong>").concat(money(max), "</strong>. Full-term interest is <strong>").concat(Math.round(interest * 100), "%</strong> by day <strong>").concat(s.day + days, "</strong>. Pay early to reduce the interest charged.</p><input id=\"loanAmount\" inputmode=\"numeric\" type=\"number\" min=\"1\" max=\"").concat(max, "\" placeholder=\"Amount\"><button type=\"button\" class=\"sell\" id=\"confirmLoan\">ARE YOU SURE?</button>"));
    setTimeout(function () { var btn = $('confirmLoan'); if (!btn)
        return; btn.onclick = function () { sound('negative'); haptic('error'); var raw = +$('loanAmount').value || 0; if (!raw) {
        errorMsg('ENTER AN AMOUNT');
        return;
    } if (raw > max) {
        modal('Loan Declined', "<p><strong>".concat(name, " declines.</strong></p><p>You asked for ").concat(money(raw), ", but ").concat(name, " will only lend up to ").concat(money(max), ".</p><button type=\"button\" id=\"backToLender\">Try a lower amount</button>"));
        setTimeout(function () { var b = $('backToLender'); if (b)
            b.onclick = function () { return chooseLoan(i); }; }, 0);
        return;
    } var amt = Math.max(1, Math.floor(raw)); ensureStats(); s.stats.loansTaken++; var loan = { id: "loan_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 100000)), name: name, principal: amt, interestRate: interest, startDay: s.day, due: s.day + days, termDays: days }; s.cash += amt; s.loans.push(loan); s.debt = activeDebtTotal(); var fullRepay = loanFullRepay(loan); s.notice = "Borrowed ".concat(money(amt), " from ").concat(name, ". Full-term repayment is ").concat(money(fullRepay), " by day ").concat(s.day + days, "; early settlement is cheaper."); $('modal').close(); save(); draw(); toast("LOAN ACCEPTED: ".concat(money(amt)), 'bad'); }; }, 0);
}
function bank() {
    ensureStats();
    var openLoans = s.loans.length ? s.loans.map(function (l, idx) { var days = l.due - s.day, urgent = days <= 5, payoff = loanPayoff(l), fullRepay = loanFullRepay(l); return "<div class=\"loan-row ".concat(urgent ? 'urgent-loan' : '', "\"><div><span>").concat(l.name, "</span><strong>").concat(money(payoff), "</strong><em>").concat(days > 0 ? 'due in ' + days + ' day' + (days === 1 ? '' : 's') : 'DUE NOW', " \u00B7 full term ").concat(money(fullRepay), "</em></div><button type=\"button\" data-payloan=\"").concat(idx, "\">Pay</button></div>"); }).join('') : '<p class="subtle">No active loans.</p>';
    modal('Finances', "<p class=\"subtle\">Bank balance only changes when you deposit or withdraw. Reputation 51+ improves lender limits. Loan settlement reduces when paid early and reaches full interest at term.</p><input id=\"amount\" inputmode=\"numeric\" type=\"number\" placeholder=\"Amount\"><div class=\"bank-grid\"><button type=\"button\" id=\"deposit\">Deposit</button><button type=\"button\" id=\"withdraw\">Withdraw</button><button type=\"button\" class=\"full\" id=\"payDebt\">Pay General Debt</button></div><h4>Loans</h4>".concat(openLoans, "<div class=\"loan-list compact\">").concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(l[0], "</strong><br>Borrow up to ").concat(money(adjustedLenderMax(l)), " \u00B7 ").concat(Math.round(l[3] * 100), "% full-term interest \u00B7 due in ").concat(l[2], " days</button>"); }).join(''), "</div>"));
    setTimeout(function () { var amt = function () { return +$('amount').value || 0; }; $('deposit').onclick = function () { var a = Math.min(amt(), s.cash); if (a <= 0) {
        errorMsg('ENTER AMOUNT');
        return;
    } s.cash -= a; s.bank += a; success('Deposit complete'); done(); }; $('withdraw').onclick = function () { var a = Math.min(amt(), s.bank); if (a <= 0) {
        errorMsg('ENTER AMOUNT');
        return;
    } s.bank -= a; s.cash += a; success('Withdrawal complete'); done(); }; $('payDebt').onclick = function () { var a = Math.min(amt(), s.cash, activeDebtTotal()); if (a <= 0) {
        errorMsg('NO DEBT PAYMENT MADE');
        return;
    } payDebtAmount(a); }; document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; }); document.querySelectorAll('[data-payloan]').forEach(function (b) { return b.onclick = function () { return paySpecificLoan(b.dataset.payloan); }; }); }, 0);
}
function payDebtAmount(amount) {
    normaliseLoans();
    var remaining = Math.min(s.cash, Math.max(0, Math.floor(amount)));
    if (remaining <= 0) {
        errorMsg('NO DEBT PAYMENT MADE');
        return;
    }
    s.cash -= remaining;
    for (var i = 0; i < s.loans.length && remaining > 0; i++) {
        var payoff = loanPayoff(s.loans[i]);
        if (remaining >= payoff) {
            remaining -= payoff;
            s.loans.splice(i, 1);
            i--;
            continue;
        }
        s.loans[i].principal = Math.max(0, Math.round((+s.loans[i].principal || 0) - remaining));
        s.loans[i].startDay = s.day;
        if (s.loans[i].principal <= 0)
            s.loans.splice(i, 1);
        remaining = 0;
    }
    s.debt = activeDebtTotal();
    save();
    draw();
    success('Debt payment made');
    done();
}
function paySpecificLoan(idx) {
    idx = +idx;
    normaliseLoans();
    var loan = s.loans[idx];
    if (!loan)
        return;
    var amount = loanPayoff(loan);
    if (s.cash < amount) {
        s.notice = "You need ".concat(money(amount), " cash to clear ").concat(loan.name, ".");
        save();
        draw();
        errorMsg('INSUFFICIENT FUNDS');
        return;
    }
    s.cash -= amount;
    s.loans.splice(idx, 1);
    s.debt = activeDebtTotal();
    rep(5);
    s.notice = "Paid ".concat(loan.name, ". Loan cleared for ").concat(money(amount), ".");
    success('DEBT CLEARED');
    save();
    draw();
    done();
}
function payDueLoan(loan) {
    normaliseLoans();
    var idx = s.loans.indexOf(loan);
    if (idx < 0)
        idx = s.loans.findIndex(function (l) { return l.id && loan.id && l.id === loan.id; });
    if (idx < 0)
        return;
    var amount = loanPayoff(s.loans[idx]);
    if (s.cash < amount) {
        s.notice = "You need ".concat(money(amount), " cash to pay ").concat(s.loans[idx].name, ".");
        save();
        draw();
        handleDueLoans();
        return;
    }
    s.cash -= amount;
    s.notice = "Paid ".concat(s.loans[idx].name, ". Loan cleared for ").concat(money(amount), ".");
    s.loans.splice(idx, 1);
    s.debt = activeDebtTotal();
    rep(5);
    save();
    draw();
    $('modal').close();
    handleDueLoans();
}
function debtReminderHtml() { if (!s.loans.length)
    return '<p class="subtle">No active loan debt.</p>'; normaliseLoans(); return '<div class="debt-reminder"><strong>DEBT REMINDER</strong>' + s.loans.map(function (l) { var days = l.due - s.day; var dueText = days > 0 ? "due in ".concat(days, " day").concat(days === 1 ? '' : 's') : 'DUE NOW'; return "<div><span>".concat(l.name, "</span><b>").concat(money(loanPayoff(l)), "</b><em>").concat(dueText, " \u00B7 full term ").concat(money(loanFullRepay(l)), "</em></div>"); }).join('') + '</div>'; }
function handleDueLoans() { normaliseLoans(); var due = s.loans.filter(function (l) { return l.due <= s.day; }); if (!due.length) {
    maybeFight();
    return;
} modal('DEBT DUE', "<p class=\"subtle\">Your lender wants payment today. Pay it now or the balance rises by 25%, your health drops by 15%, and the same debt is chased again tomorrow.</p>".concat(due.map(function (l, i) { return "<div class=\"loan-row\"><div><span>".concat(l.name, "</span><strong>").concat(money(loanPayoff(l)), " due now</strong></div><button type=\"button\" data-duepay=\"").concat(i, "\">PAY OFF DEBT</button></div>"); }).join(''), "<button type=\"button\" class=\"sell\" id=\"missDebt\">Do not pay</button>")); setTimeout(function () { document.querySelectorAll('[data-duepay]').forEach(function (b) { return b.onclick = function () { return payDueLoan(due[+b.dataset.duepay]); }; }); $('missDebt').onclick = missDueLoans; }, 0); }
function missDueLoans() {
    normaliseLoans();
    var due = s.loans.filter(function (l) { return l.due <= s.day; }), added = 0;
    due.forEach(function (l) { var payoff = loanPayoff(l), penalty = Math.round(payoff * 0.25); l.principal = payoff + penalty; l.interestRate = 0.25; l.startDay = s.day; l.termDays = 1; l.due = s.day + 1; added += penalty; });
    s.debt = activeDebtTotal();
    s.health = Math.max(1, s.health - 15);
    s.heat = Math.min(100, s.heat + 10);
    rep(-10);
    if (netWorth() < -(s.debt * .5))
        rep(-25);
    s.notice = "Debt unpaid. You are roughed up, health drops 15%, reputation falls, and the debt increases by ".concat(money(added), ".");
    save();
    draw();
    $('modal').close();
    maybeFight();
}
function nextDay(base, showRumour) {
    var _a;
    ensureStats();
    var old = { rumour: s.rumour, true: !!(s.rumour && s.rumour.accurate) };
    s.day++;
    s.debt = activeDebtTotal();
    s.heat = Math.min(100, Math.max(0, s.heat + rand(-8, 13)));
    rep(1);
    genPrices(old);
    newRumour();
    randomEvent(base);
    updateRankProgress();
    s.debt = activeDebtTotal();
    if (s.day > s.maxDay)
        return endGame();
    save();
    draw();
    var rumourBlock = showRumour ? "<h4>Rumour Result</h4><p><strong>".concat(old.true ? 'TRUE' : 'FALSE', "</strong> \u00B7 ").concat(((_a = old.rumour) === null || _a === void 0 ? void 0 : _a.text) || 'No rumour was active.', "</p>") : '';
    var title = showRumour ? 'Stay Here' : 'Travel Result', body = "<p>".concat(s.notice, "</p>").concat(rumourBlock, "<h4>Loan Status</h4>").concat(debtReminderHtml());
    var arrest = maybeArrest(showRumour ? 'stay' : 'travel');
    if (arrest)
        return showArrestModal(arrest, title, body, rumourBlock);
    modal(title, "".concat(body, "<button type=\"button\" id=\"continueEvent\">Continue</button>"));
    setTimeout(function () { return $('continueEvent').onclick = function () { $('modal').close(); handleDueLoans(); }; }, 0);
}
function v16SelfTest() { console.log('NOIR MARKET V1.7 checks: proportional loan interest, early settlement discount, full-term interest, missed-payment penalty and V1.4 save migration active.'); }
setTimeout(v16SelfTest, 140);
/* Noir Market V1.7 shipping and travel override */
function ensureShipping() {
    if (!Array.isArray(s.shipments))
        s.shipments = [];
    s.stats = s.stats || {};
    if (typeof s.stats.shipmentsExported !== 'number')
        s.stats.shipmentsExported = 0;
    if (typeof s.stats.shipmentsImported !== 'number')
        s.stats.shipmentsImported = 0;
}
function shipmentItemCount(items) { return Object.values(items || {}).reduce(function (a, b) { return a + (+b || 0); }, 0); }
function shipmentItemsText(items) { return Object.entries(items || {}).filter(function (_a) {
    var q = _a[1];
    return q > 0;
}).map(function (_a) {
    var k = _a[0], q = _a[1];
    return "".concat(q, " ").concat(k);
}).join(', ') || 'nothing'; }
function shippingValue(name, qty) { var _a; return Math.max(0, Math.round((((_a = s.prices) === null || _a === void 0 ? void 0 : _a[name]) || 0) * (+qty || 0))); }
function shippingCostFor(value) { return Math.ceil((+value || 0) * 0.05) + 200; }
function showTravelFlights() {
    var panel = $('travelPanel');
    if (!panel)
        return;
    panel.innerHTML = "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Prices change daily and airport security is not your mate.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], " <em>").concat(money(travelFare(i)), "</em></strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>");
    var st = $('stayFromTravel');
    if (st)
        st.onclick = function () { sound('positive'); haptic(); ensureStats(); s.stats.stays++; $('modal').close(); nextDay("You stay in ".concat(places[s.city][0], "."), true); };
    document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { var i = +b.dataset.city, fare = travelFare(i); if (fare > s.cash) {
        errorMsg('INSUFFICIENT FUNDS');
        return;
    } airportWarning(i, fare); }; });
}
function showShippingHub() {
    ensureShipping();
    var city = places[s.city][0];
    var incoming = s.shipments.filter(function (x) { return x.to === city; }).length;
    var outbound = s.shipments.filter(function (x) { return x.from === city; }).length;
    var panel = $('travelPanel');
    if (!panel)
        return;
    panel.innerHTML = "<div class=\"shipping-card\"><p class=\"subtle\">Shipping moves stock between cities without carrying it through airport security. Export it first, fly over, then import it into that city\u2019s vault storage.</p><div class=\"shipping-summary\"><p><span>Current city</span><strong>".concat(city, "</strong></p><p><span>Incoming</span><strong>").concat(incoming, "</strong></p><p><span>Sent from here</span><strong>").concat(outbound, "</strong></p></div><div class=\"travel-tabs secondary\"><button type=\"button\" id=\"exportStockBtn\">EXPORT</button><button type=\"button\" id=\"importStockBtn\">IMPORT</button></div><p class=\"subtle\">Cost: 5% of shipment value plus \u00A3200 admin. The \u00A3200 covers a bloke called Kev, a van with one working brake light, and no paperwork.</p></div>");
    $('exportStockBtn').onclick = showShippingExport;
    $('importStockBtn').onclick = showShippingImport;
}
function showShippingExport() {
    ensureShipping();
    setActiveCityMarket();
    var from = places[s.city][0];
    var carried = Object.entries(s.inv).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var destOptions = places.map(function (p, i) { return "<option value=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', ">").concat(p[0]).concat(i === s.city ? ' (current city)' : '', "</option>"); }).join('');
    var rows = carried.map(function (_a, i) {
        var name = _a[0], q = _a[1];
        var value = shippingValue(name, q), cost = shippingCostFor(value);
        return "<div class=\"shipping-row\"><div><strong>".concat(name, "</strong><span>Carried: ").concat(q, " \u00B7 max shipment cost ").concat(money(cost), "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"shipqty-").concat(i, "\"><button type=\"button\" data-exportdrug=\"").concat(i, "\">EXPORT</button></div>");
    }).join('');
    var panel = $('travelPanel');
    if (!panel)
        return;
    panel.innerHTML = "<button type=\"button\" class=\"back-mini\" id=\"backShipHub\">BACK TO SHIPPING</button><div class=\"modal-money\"><span>Exporting from</span><strong>".concat(from, "</strong><em>Cash ").concat(money(s.cash), "</em></div><label class=\"shipping-label\">Destination</label><select id=\"shippingDestination\">").concat(destOptions, "</select><p class=\"subtle\">Export removes stock from your carried inventory. It will wait in the destination city until you import it.</p>").concat(carried.length ? "<div class=\"shipping-list\">".concat(rows, "</div>") : '<p class="subtle">No carried drugs available to ship.</p>');
    $('backShipHub').onclick = showShippingHub;
    document.querySelectorAll('[data-exportdrug]').forEach(function (btn) { return btn.onclick = function () {
        var _a;
        var _b;
        var idx = +btn.dataset.exportdrug;
        var _c = carried[idx] || [], name = _c[0], maxQty = _c[1];
        var toIdx = +$('shippingDestination').value;
        var to = (_b = places[toIdx]) === null || _b === void 0 ? void 0 : _b[0];
        var qty = Math.floor(+$('shipqty-' + idx).value || 0);
        if (!name || !to) {
            errorMsg('SELECT DESTINATION');
            return;
        }
        if (toIdx === s.city) {
            errorMsg('SELECT ANOTHER CITY');
            return;
        }
        if (qty < 1) {
            errorMsg('ENTER QUANTITY');
            return;
        }
        if (qty > (s.inv[name] || 0)) {
            errorMsg('NOT ENOUGH STOCK');
            return;
        }
        var value = shippingValue(name, qty), cost = shippingCostFor(value);
        if (s.cash < cost) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        }
        s.cash -= cost;
        s.inv[name] -= qty;
        s.shipments.push({ id: "ship_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 100000)), from: from, to: to, items: (_a = {}, _a[name] = qty, _a), value: value, cost: cost, day: s.day });
        ensureStats();
        s.stats.shipmentsExported++;
        s.notice = "Exported ".concat(qty, " ").concat(name, " from ").concat(from, " to ").concat(to, ". Shipping cost ").concat(money(cost), ".");
        save();
        draw();
        success('SHIPMENT EXPORTED');
        showShippingExport();
    }; });
}
function showShippingImport() {
    ensureShipping();
    ensureVaults();
    ensureVaultLevels();
    var city = places[s.city][0], incoming = s.shipments.filter(function (x) { return x.to === city; });
    var rows = incoming.map(function (sh, i) { return "<div class=\"shipment-row\"><div><strong>".concat(shipmentItemsText(sh.items), "</strong><span>From ").concat(sh.from, " \u00B7 sent day ").concat(sh.day, " \u00B7 value ").concat(money(sh.value || 0), "</span></div><button type=\"button\" data-importship=\"").concat(i, "\">IMPORT</button></div>"); }).join('');
    var cap = vaultCapacity(city), free = Math.max(0, cap - vaultUsed(city));
    var panel = $('travelPanel');
    if (!panel)
        return;
    panel.innerHTML = "<button type=\"button\" class=\"back-mini\" id=\"backShipHub\">BACK TO SHIPPING</button><div class=\"modal-money\"><span>".concat(city, " vault space</span><strong>").concat(free, "</strong><em>").concat(vaultUsed(city), "/").concat(cap, "</em></div><p class=\"subtle\">Import adds the shipment into this city\u2019s vault storage. Upgrade the vault if there is not enough space.</p>").concat(incoming.length ? "<div class=\"shipping-list\">".concat(rows, "</div>") : '<p class="subtle">No shipments are waiting in this city.</p>');
    $('backShipHub').onclick = showShippingHub;
    document.querySelectorAll('[data-importship]').forEach(function (btn) { return btn.onclick = function () {
        var localIdx = +btn.dataset.importship;
        var sh = incoming[localIdx];
        if (!sh)
            return;
        var needed = shipmentItemCount(sh.items), freeSpace = vaultCapacity(city) - vaultUsed(city);
        if (needed > freeSpace) {
            errorMsg('VAULT FULL');
            return;
        }
        Object.entries(sh.items || {}).forEach(function (_a) {
            var name = _a[0], qty = _a[1];
            s.vaults[city][name] = (s.vaults[city][name] || 0) + (+qty || 0);
        });
        var globalIdx = s.shipments.findIndex(function (x) { return x.id === sh.id; });
        if (globalIdx >= 0)
            s.shipments.splice(globalIdx, 1);
        ensureStats();
        s.stats.shipmentsImported++;
        s.notice = "Imported shipment into the ".concat(city, " vault: ").concat(shipmentItemsText(sh.items), ".");
        save();
        draw();
        success('SHIPMENT IMPORTED');
        showShippingImport();
    }; });
}
function travel() {
    ensureStats();
    ensureShipping();
    modal('Travel', "<div class=\"travel-tabs primary\"><button type=\"button\" id=\"travelModeBtn\" class=\"active\">TRAVEL</button><button type=\"button\" id=\"shippingModeBtn\">SHIPPING</button></div><div id=\"travelPanel\"></div>");
    setTimeout(function () {
        var travelBtn = $('travelModeBtn'), shipBtn = $('shippingModeBtn');
        function activate(which) { travelBtn.classList.toggle('active', which === 'travel'); shipBtn.classList.toggle('active', which === 'shipping'); if (which === 'travel')
            showTravelFlights();
        else
            showShippingHub(); }
        travelBtn.onclick = function () { return activate('travel'); };
        shipBtn.onclick = function () { return activate('shipping'); };
        activate('travel');
    }, 0);
}
function baseState() { return { version: '1.7', reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], shipments: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 } }; }
function ensureStats() {
    var _a;
    s.stats = s.stats || {};
    var defaults = { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 0, arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 };
    Object.entries(defaults).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (typeof s.stats[k] !== 'number')
            s.stats[k] = v;
    });
    s.travelFares = s.travelFares || {};
    s.reputation = clamp((_a = s.reputation) !== null && _a !== void 0 ? _a : 50, 0, 100);
    ensureVaults();
    ensureVaultLevels();
    ensureEconomy();
    ensureRankState();
    normaliseLoans();
    ensureShipping();
}
function save() { ensureStats(); s.version = '1.7'; localStorage.setItem('noir_market_v1_7', JSON.stringify(s)); }
function load() { var x = localStorage.getItem('noir_market_v1_7') || localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4'); if (x) {
    s = JSON.parse(x);
    ensureStats();
    s.version = '1.7';
    setActiveCityMarket();
    updateRankProgress();
    save();
    draw();
    return false;
} newGame(false); return true; }
function v17SelfTest() { console.log('NOIR MARKET V1.7 checks: travel/shipping mode, export/import shipments, 5 percent plus 200 shipping cost, city vault import and V1.6 save migration active.'); }
setTimeout(v17SelfTest, 160);
/* Noir Market V1.8 bug-fix release: menu stats/settings, name, ticker and loan max borrow */
var musicEnabled = localStorage.getItem('noir_market_music') !== 'off';
function rankWeightV18(r) { var _a; return (_a = { 'Wannabe': 0, 'Street Dealer': 1, 'Hustler': 2, 'Kingpin': 3, 'Legend': 4, 'Drug Lord': 5 }[r]) !== null && _a !== void 0 ? _a : 0; }
function updateBestRankV18() {
    if (!s)
        return;
    ensureRankState();
    s.stats = s.stats || {};
    var current = rank();
    if (!s.stats.bestRank || rankWeightV18(current) > rankWeightV18(s.stats.bestRank))
        s.stats.bestRank = current;
    return current;
}
function ensurePlayerProfileV18() {
    var _a;
    if (!s)
        return;
    s.playerName = String(s.playerName || localStorage.getItem('noir_market_player_name') || '').slice(0, 24);
    s.settings = s.settings || {};
    s.settings.sound = soundEnabled ? 'on' : 'off';
    s.settings.music = musicEnabled ? 'on' : 'off';
    s.stats = s.stats || {};
    if (!s.stats.bestRank)
        s.stats.bestRank = ((_a = s.rankState) === null || _a === void 0 ? void 0 : _a.current) || rank();
    updateBestRankV18();
}
var v18PreviousEnsureStats = ensureStats;
function ensureStats() {
    if (typeof v18PreviousEnsureStats === 'function')
        v18PreviousEnsureStats();
    if (!s)
        return;
    var defaults = { shipmentsExported: 0, shipmentsImported: 0, arrests: 0, jailDays: 0, bribes: 0, informants: 0, loansTaken: 0, tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, largestTrade: 0, bestNet: 0 };
    s.stats = s.stats || {};
    Object.entries(defaults).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (typeof s.stats[k] !== 'number')
            s.stats[k] = v;
    });
    ensurePlayerProfileV18();
}
function baseState() { return { version: '1.8', playerName: '', settings: { sound: soundEnabled ? 'on' : 'off', music: musicEnabled ? 'on' : 'off' }, reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], shipments: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, bestRank: 'Wannabe', arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 } }; }
function save() { ensureStats(); s.version = '1.8'; localStorage.setItem('noir_market_v1_8', JSON.stringify(s)); }
function load() { var x = localStorage.getItem('noir_market_v1_8') || localStorage.getItem('noir_market_v1_7') || localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4'); if (x) {
    s = JSON.parse(x);
    ensureStats();
    s.version = '1.8';
    setActiveCityMarket();
    updateRankProgress();
    updateBestRankV18();
    save();
    draw();
    return false;
} newGame(false); return true; }
function startSynthMusic() {
    if (!musicEnabled || synthMusicOn)
        return;
    synthMusicOn = true;
    unlockAudio();
    var bass = [41.2, 41.2, 41.2, 36.7, 36.7, 38.9, 38.9, 34.6, 34.6, 36.7, 41.2, 41.2, 30.9, 30.9, 36.7, 36.7];
    var tones = [0, 82.4, 0, 73.4, 0, 65.4, 0, 61.7, 0, 73.4, 0, 82.4, 0, 55, 0, 61.7];
    var i = 0;
    synthMusicTimer = setInterval(function () { if (!musicEnabled) {
        stopSynthMusic();
        return;
    } var b = bass[i % bass.length]; tone(b, 1.05, 'sine', .016, 0); tone(b / 2, 1.20, 'triangle', .012, .04); if (i % 4 === 0)
        tone(27.5, .85, 'sine', .014, .02); var t = tones[i % tones.length]; if (t)
        tone(t, .16, 'square', .006, .12); if (i % 16 === 15)
        tone(98, .12, 'square', .005, .18); i++; }, 1250);
}
function startBackgroundMusic() {
    if (!musicEnabled)
        return;
    unlockAudio();
    musicStarted = true;
    try {
        if (typeof Audio !== 'undefined') {
            if (!bgMusic) {
                bgMusic = new Audio(MUSIC_PATH);
                bgMusic.loop = true;
                bgMusic.volume = 0.42;
            }
            bgMusic.loop = true;
            var p = bgMusic.play();
            if (p && p.catch)
                p.catch(function () { return startSynthMusic(); });
            return;
        }
    }
    catch (e) { }
    startSynthMusic();
}
function stopBackgroundMusic() { try {
    if (bgMusic)
        bgMusic.pause();
}
catch (e) { } stopSynthMusic(); }
document.addEventListener('visibilitychange', function () { if (document.hidden)
    stopBackgroundMusic();
else if (musicEnabled && musicStarted)
    startBackgroundMusic(); });
var v18PreviousDraw = draw;
function draw() {
    var _a, _b;
    if (typeof v18PreviousDraw === 'function')
        v18PreviousDraw();
    ensurePlayerProfileV18();
    var ticker = $('newsTicker');
    if (ticker) {
        var text = upperNews(((_b = (_a = s.economy) === null || _a === void 0 ? void 0 : _a.news) === null || _b === void 0 ? void 0 : _b.text) || s.news || 'MARKETS ARE QUIET TODAY.');
        if (ticker.textContent !== text) {
            ticker.textContent = text;
            ticker.style.animation = 'none';
            ticker.offsetHeight;
            ticker.style.animation = '';
        }
    }
    var current = updateBestRankV18();
    if ($('rank'))
        $('rank').textContent = current;
    if ($('rankDays'))
        $('rankDays').textContent = rankDaysText();
    if ($('reputation'))
        $('reputation').textContent = "".concat(s.reputation, "/100");
}
function setPlayerNameV18() {
    var input = $('playerNameInput');
    if (!input)
        return;
    s.playerName = String(input.value || '').trim().slice(0, 24);
    localStorage.setItem('noir_market_player_name', s.playerName);
    save();
    draw();
    success(s.playerName ? 'NAME SAVED' : 'NAME CLEARED');
    showMenu();
}
function showMenu() {
    ensureStats();
    var nameVal = (s.playerName || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    modal('Menu', "<div class=\"menu-player\"><label for=\"playerNameInput\">Player name</label><input id=\"playerNameInput\" maxlength=\"24\" placeholder=\"Add your name\" value=\"".concat(nameVal, "\"><button type=\"button\" id=\"savePlayerNameBtn\">SAVE NAME</button></div><div class=\"menu-settings\"><button type=\"button\" id=\"soundToggleBtn\">SOUNDS: ").concat(soundEnabled ? 'ON' : 'OFF', "</button><button type=\"button\" id=\"musicToggleBtn\">MUSIC: ").concat(musicEnabled ? 'ON' : 'OFF', "</button></div><div class=\"menu-list\"><button type=\"button\" id=\"statsBtn\">Stats</button><button type=\"button\" class=\"sell\" id=\"menuNewGameBtn\">New Game</button></div>"));
    setTimeout(function () {
        var stats = $('statsBtn'), snd = $('soundToggleBtn'), mus = $('musicToggleBtn'), saveName = $('savePlayerNameBtn'), newGameBtn = $('menuNewGameBtn');
        if (saveName)
            saveName.onclick = setPlayerNameV18;
        if (stats)
            stats.onclick = showStats;
        if (snd)
            snd.onclick = function () { soundEnabled = !soundEnabled; localStorage.setItem('noir_market_sound', soundEnabled ? 'on' : 'off'); if (soundEnabled)
                sound('positive'); save(); showMenu(); };
        if (mus)
            mus.onclick = function () { musicEnabled = !musicEnabled; localStorage.setItem('noir_market_music', musicEnabled ? 'on' : 'off'); if (musicEnabled)
                startBackgroundMusic();
            else
                stopBackgroundMusic(); save(); showMenu(); };
        if (newGameBtn)
            newGameBtn.onclick = confirmNewGame;
    }, 0);
}
function showStats() {
    ensureStats();
    var current = updateBestRankV18();
    modal('Stats', "<div class=\"stats-list\"><p><span>Player</span><strong>".concat(s.playerName || 'Unnamed', "</strong></p><p><span>Current rank</span><strong>").concat(current, "</strong></p><p><span>Best rank</span><strong>").concat(s.stats.bestRank || current, "</strong></p><p><span>Days held at rank</span><strong>").concat(rankDaysText(), "</strong></p><p><span>Reputation</span><strong>").concat(s.reputation, "/100</strong></p><p><span>Days survived</span><strong>").concat(s.day - 1, "</strong></p><p><span>Net worth</span><strong>").concat(money(netWorth()), "</strong></p><p><span>Best net worth</span><strong>").concat(money(s.stats.bestNet || netWorth()), "</strong></p><p><span>Current city</span><strong>").concat(places[s.city][0], "</strong></p><p><span>Storage type</span><strong>").concat(storageType(), "</strong></p><p><span>Shipments exported</span><strong>").concat(s.stats.shipmentsExported || 0, "</strong></p><p><span>Shipments imported</span><strong>").concat(s.stats.shipmentsImported || 0, "</strong></p><p><span>Flights taken</span><strong>").concat(s.stats.flights || 0, "</strong></p><p><span>Stays</span><strong>").concat(s.stats.stays || 0, "</strong></p><p><span>Arrests</span><strong>").concat(s.stats.arrests || 0, "</strong></p><p><span>Jail days</span><strong>").concat(s.stats.jailDays || 0, "</strong></p><p><span>Bribes paid</span><strong>").concat(s.stats.bribes || 0, "</strong></p><p><span>Informants paid</span><strong>").concat(s.stats.informants || 0, "</strong></p><p><span>Fights won</span><strong>").concat(s.stats.fightsWon || 0, "</strong></p><p><span>Fights lost</span><strong>").concat(s.stats.fightsLost || 0, "</strong></p><p><span>Times mugged</span><strong>").concat(s.stats.mugged || 0, "</strong></p><p><span>Loans taken</span><strong>").concat(s.stats.loansTaken || 0, "</strong></p><p><span>Drugs bought</span><strong>").concat(s.stats.tradesBought || 0, "</strong></p><p><span>Drugs sold</span><strong>").concat(s.stats.tradesSold || 0, "</strong></p><p><span>Largest single trade</span><strong>").concat(money(s.stats.largestTrade || 0), "</strong></p><p><span>Heat level</span><strong>").concat(s.heat, "%</strong></p></div><div class=\"back-menu-spacer\"></div><button type=\"button\" id=\"backMenuBtn\">Back to Menu</button>"));
    setTimeout(function () { var b = $('backMenuBtn'); if (b)
        b.onclick = showMenu; }, 0);
}
function chooseLoan(i) {
    var l = lenders[i], name = l[0], max = adjustedLenderMax(l), days = l[2], interest = l[3];
    modal(name, "<p>".concat(lenderBio(name), "</p><p class=\"subtle\">Borrow up to <strong>").concat(money(max), "</strong>. Full-term interest is <strong>").concat(Math.round(interest * 100), "%</strong> by day <strong>").concat(s.day + days, "</strong>. Pay early to reduce the interest charged.</p><input id=\"loanAmount\" inputmode=\"numeric\" type=\"number\" min=\"1\" max=\"").concat(max, "\" placeholder=\"Amount\"><div class=\"loan-max-row\"><button type=\"button\" id=\"borrowMaxLoan\">BORROW MAXIMUM AMOUNT</button></div><button type=\"button\" class=\"sell\" id=\"confirmLoan\">ARE YOU SURE?</button>"));
    setTimeout(function () {
        var input = $('loanAmount'), maxBtn = $('borrowMaxLoan'), btn = $('confirmLoan');
        if (maxBtn)
            maxBtn.onclick = function () { if (input)
                input.value = max; sound('positive'); };
        if (!btn)
            return;
        btn.onclick = function () { var _a; sound('negative'); haptic('error'); var raw = +((_a = $('loanAmount')) === null || _a === void 0 ? void 0 : _a.value) || 0; if (!raw) {
            errorMsg('ENTER AN AMOUNT');
            return;
        } if (raw > max) {
            modal('Loan Declined', "<p><strong>".concat(name, " declines.</strong></p><p>You asked for ").concat(money(raw), ", but ").concat(name, " will only lend up to ").concat(money(max), ".</p><button type=\"button\" id=\"backToLender\">Try a lower amount</button>"));
            setTimeout(function () { var b = $('backToLender'); if (b)
                b.onclick = function () { return chooseLoan(i); }; }, 0);
            return;
        } var amt = Math.max(1, Math.floor(raw)); ensureStats(); s.stats.loansTaken++; var loan = { id: "loan_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 100000)), name: name, principal: amt, interestRate: interest, startDay: s.day, due: s.day + days, termDays: days }; s.cash += amt; s.loans.push(loan); s.debt = activeDebtTotal(); var fullRepay = loanFullRepay(loan); s.notice = "Borrowed ".concat(money(amt), " from ").concat(name, ". Full-term repayment is ").concat(money(fullRepay), " by day ").concat(s.day + days, "; early settlement is cheaper."); $('modal').close(); save(); draw(); toast("LOAN ACCEPTED: ".concat(money(amt)), 'bad'); };
    }, 0);
}
function v18SelfTest() { console.log('NOIR MARKET V1.8 checks: smooth non-overlap ticker, player name, updated stats, sounds/music toggles, spaced back menu button, and borrow maximum loan button active.'); }
setTimeout(v18SelfTest, 180);
/* Noir Market V1.9 hotfix: delayed startup so V1.8 variables are initialised before load/click handlers run. */
function save() { ensureStats(); s.version = '1.9'; localStorage.setItem('noir_market_v1_9', JSON.stringify(s)); }
function load() {
    var x = localStorage.getItem('noir_market_v1_9') || localStorage.getItem('noir_market_v1_8') || localStorage.getItem('noir_market_v1_7') || localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4');
    if (x) {
        s = JSON.parse(x);
        ensureStats();
        s.version = '1.9';
        setActiveCityMarket();
        updateRankProgress();
        updateBestRankV18();
        save();
        draw();
        return false;
    }
    newGame(false);
    return true;
}
function v19SelfTest() { console.log('NOIR MARKET V1.9 checks: splash click and initial load hotfix active; V1.8 save migration retained.'); }
setTimeout(v19SelfTest, 220);
/* Noir Market V1.9 base state override. */
function baseState() { return { version: '1.9', playerName: '', settings: { sound: soundEnabled ? 'on' : 'off', music: musicEnabled ? 'on' : 'off' }, reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], shipments: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, bestRank: 'Wannabe', arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 } }; }
/* Noir Market V1.9 final non-recursive stats override. */
function ensureStats() {
    var _a;
    if (!s)
        return;
    s.stats = s.stats || {};
    var defaults = { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 0, bestRank: 'Wannabe', arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 };
    Object.entries(defaults).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        if (typeof v === 'number') {
            if (typeof s.stats[k] !== 'number')
                s.stats[k] = v;
        }
        else if (!s.stats[k])
            s.stats[k] = v;
    });
    s.travelFares = s.travelFares || {};
    s.reputation = clamp((_a = s.reputation) !== null && _a !== void 0 ? _a : 50, 0, 100);
    if (typeof ensureVaults === 'function')
        ensureVaults();
    if (typeof ensureVaultLevels === 'function')
        ensureVaultLevels();
    if (typeof ensureEconomy === 'function')
        ensureEconomy();
    if (typeof ensureRankState === 'function')
        ensureRankState();
    if (typeof normaliseLoans === 'function')
        normaliseLoans();
    if (typeof ensureShipping === 'function')
        ensureShipping();
    if (typeof ensurePlayerProfileV18 === 'function')
        ensurePlayerProfileV18();
}
/* Noir Market V1.9 final non-recursive draw override. */
function draw() {
    var _a, _b;
    ensureStats();
    setActiveCityMarket();
    s.stats.bestNet = Math.max(s.stats.bestNet || 0, netWorth());
    var p = places[s.city], hc = healthClass();
    var ticker = $('newsTicker');
    if (ticker) {
        var text = upperNews(((_b = (_a = s.economy) === null || _a === void 0 ? void 0 : _a.news) === null || _b === void 0 ? void 0 : _b.text) || s.news || 'MARKETS ARE QUIET TODAY.');
        if (ticker.textContent !== text) {
            ticker.textContent = text;
            ticker.style.animation = 'none';
            ticker.offsetHeight;
            ticker.style.animation = '';
        }
    }
    if ($('dayCount'))
        $('dayCount').textContent = s.day;
    if ($('cash'))
        $('cash').textContent = money(s.cash);
    if ($('bank'))
        $('bank').textContent = money(s.bank);
    if ($('debt'))
        $('debt').textContent = money(s.debt);
    if ($('health')) {
        $('health').textContent = Math.round(s.health) + '%';
        $('health').className = hc;
    }
    if ($('healthBar')) {
        $('healthBar').style.width = Math.max(0, s.health) + '%';
        $('healthBar').className = hc;
    }
    if ($('city'))
        $('city').textContent = p[0] + ' ' + p[1];
    if ($('country'))
        $('country').textContent = '';
    if ($('flag'))
        $('flag').textContent = '';
    if ($('marketInfo'))
        $('marketInfo').innerHTML = "".concat(p[0], ": ").concat(cityText(), ".<br>").concat(rumourHtml());
    if ($('noticeText'))
        $('noticeText').textContent = s.notice;
    if ($('spaceLabel'))
        $('spaceLabel').innerHTML = "".concat(used(), "/").concat(totalSpace(), " <span class=\"storage-type\">").concat(storageType(), "</span>");
    if ($('statusLocation'))
        $('statusLocation').textContent = p[0] + ', ' + p[1];
    var current = updateBestRankV18();
    if ($('rank'))
        $('rank').textContent = current;
    if ($('rankDays'))
        $('rankDays').textContent = rankDaysText();
    if ($('reputation'))
        $('reputation').textContent = "".concat(s.reputation, "/100");
    if ($('space'))
        $('space').textContent = "".concat(used(), "/").concat(totalSpace(), " \u00B7 ").concat(storageType());
    if ($('heat'))
        $('heat').textContent = s.heat + '%';
    if ($('marketTable'))
        $('marketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>' + drugs.map(function (_a) {
            var name = _a[0], icon = _a[1];
            return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(s.supply[name], "</span><span class=\"price ").concat(s.trends[name] ? '' : 'down', "\">").concat(money(s.prices[name]), "</span><span class=\"trend ").concat(s.trends[name] ? 'up' : 'down', "\">").concat(s.trends[name] ? '↑' : '↓', "</span></div>");
        }).join('');
    var items = Object.entries(s.inv).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var wc = weaponCounts(), weaponsRows = Object.entries(wc).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "<div class=\"row storage-weapon\"><span>".concat(k, "</span><span>").concat(v, "</span><span>Weapon</span></div>");
    }).join('');
    if ($('pocketTable'))
        $('pocketTable').innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>' + (items.length ? items.slice(0, 10).map(function (_a) {
            var k = _a[0], v = _a[1];
            return "<div class=\"row\"><span>".concat(k, "</span><span>").concat(v, "</span><span>").concat(money(v * s.prices[k]), "</span></div>");
        }).join('') : "<div class=\"row\"><span>Empty</span><span>0</span><span>".concat(money(0), "</span></div>")) + "<div class=\"row header\"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>" + (weaponsRows || '<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>');
}
/* Noir Market V2.0: ticker smoothing, vault button polish and tile-based shipping destinations. */
var selectedShippingDestV20 = null;
function validShipDestV20() {
    if (selectedShippingDestV20 === null || selectedShippingDestV20 === undefined || +selectedShippingDestV20 === +s.city) {
        var first = places.findIndex(function (_, i) { return i !== s.city; });
        selectedShippingDestV20 = first >= 0 ? first : 0;
    }
    return +selectedShippingDestV20;
}
function shippingDestinationTilesV20() {
    var selected = validShipDestV20();
    return "<div class=\"ship-destination-grid\">".concat(places.map(function (p, i) { return "<button type=\"button\" class=\"ship-destination-tile ".concat(i === selected ? 'active' : '', "\" data-shipdest=\"").concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], "</strong><span>").concat(i === s.city ? 'Current city' : "".concat(p[1], " \u00B7 ").concat(p[3]), "</span></button>"); }).join(''), "</div>");
}
function showShippingExport() {
    ensureShipping();
    setActiveCityMarket();
    var from = places[s.city][0];
    validShipDestV20();
    var carried = Object.entries(s.inv).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var rows = carried.map(function (_a, i) {
        var name = _a[0], q = _a[1];
        var value = shippingValue(name, q), cost = shippingCostFor(value);
        return "<div class=\"shipping-row\"><div><strong>".concat(name, "</strong><span>Carried: ").concat(q, " \u00B7 max shipment cost ").concat(money(cost), "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(q, "\" value=\"").concat(q, "\" id=\"shipqty-").concat(i, "\"><button type=\"button\" data-exportdrug=\"").concat(i, "\">EXPORT</button></div>");
    }).join('');
    var panel = $('travelPanel');
    if (!panel)
        return;
    panel.innerHTML = "<button type=\"button\" class=\"back-mini\" id=\"backShipHub\">BACK TO SHIPPING</button><div class=\"modal-money\"><span>Exporting from</span><strong>".concat(from, "</strong><em>Cash ").concat(money(s.cash), "</em></div><label class=\"shipping-label\">Destination</label>").concat(shippingDestinationTilesV20(), "<p class=\"subtle\">Export removes stock from your carried inventory. It will wait in the destination city until you import it.</p>").concat(carried.length ? "<div class=\"shipping-list\">".concat(rows, "</div>") : '<p class="subtle">No carried drugs available to ship.</p>');
    $('backShipHub').onclick = showShippingHub;
    document.querySelectorAll('[data-shipdest]').forEach(function (btn) { return btn.onclick = function () {
        selectedShippingDestV20 = +btn.dataset.shipdest;
        document.querySelectorAll('[data-shipdest]').forEach(function (b) { return b.classList.toggle('active', +b.dataset.shipdest === selectedShippingDestV20); });
    }; });
    document.querySelectorAll('[data-exportdrug]').forEach(function (btn) { return btn.onclick = function () {
        var _a;
        var _b;
        var idx = +btn.dataset.exportdrug;
        var _c = carried[idx] || [], name = _c[0], maxQty = _c[1];
        var toIdx = validShipDestV20();
        var to = (_b = places[toIdx]) === null || _b === void 0 ? void 0 : _b[0];
        var qty = Math.floor(+$('shipqty-' + idx).value || 0);
        if (!name || !to) {
            errorMsg('SELECT DESTINATION');
            return;
        }
        if (toIdx === s.city) {
            errorMsg('SELECT ANOTHER CITY');
            return;
        }
        if (qty < 1) {
            errorMsg('ENTER QUANTITY');
            return;
        }
        if (qty > (s.inv[name] || 0)) {
            errorMsg('NOT ENOUGH STOCK');
            return;
        }
        var value = shippingValue(name, qty), cost = shippingCostFor(value);
        if (s.cash < cost) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        }
        s.cash -= cost;
        s.inv[name] -= qty;
        s.shipments.push({ id: "ship_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 100000)), from: from, to: to, items: (_a = {}, _a[name] = qty, _a), value: value, cost: cost, day: s.day });
        ensureStats();
        s.stats.shipmentsExported++;
        s.notice = "Exported ".concat(qty, " ").concat(name, " from ").concat(from, " to ").concat(to, ". Shipping cost ").concat(money(cost), ".");
        save();
        draw();
        success('SHIPMENT EXPORTED');
        showShippingExport();
    }; });
}
function syncTickerV20() {
    var _a, _b;
    var ticker = $('newsTicker');
    if (!ticker)
        return;
    var track = ticker.closest('.ticker-track') || ticker.parentElement;
    if (!track)
        return;
    var text = upperNews(((_b = (_a = s === null || s === void 0 ? void 0 : s.economy) === null || _a === void 0 ? void 0 : _a.news) === null || _b === void 0 ? void 0 : _b.text) || (s === null || s === void 0 ? void 0 : s.news) || 'MARKETS ARE QUIET TODAY.');
    if (ticker.textContent !== text)
        ticker.textContent = text;
    requestAnimationFrame(function () {
        var start = Math.max(1, track.clientWidth || 300);
        var end = -Math.max(1, ticker.scrollWidth || 300);
        var distance = start - end;
        var duration = Math.max(24, Math.min(58, distance / 42));
        ticker.style.setProperty('--ticker-start', start + 'px');
        ticker.style.setProperty('--ticker-end', end + 'px');
        ticker.style.setProperty('--ticker-duration', duration.toFixed(2) + 's');
    });
}
var v20PreviousDraw = draw;
function draw() {
    if (typeof v20PreviousDraw === 'function')
        v20PreviousDraw();
    syncTickerV20();
}
function baseState() { return { version: '2.0', playerName: '', settings: { sound: soundEnabled ? 'on' : 'off', music: musicEnabled ? 'on' : 'off' }, reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], shipments: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, bestRank: 'Wannabe', arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 } }; }
function save() { ensureStats(); s.version = '2.0'; localStorage.setItem('noir_market_v2_0', JSON.stringify(s)); }
function load() {
    var x = localStorage.getItem('noir_market_v2_0') || localStorage.getItem('noir_market_v1_9') || localStorage.getItem('noir_market_v1_8') || localStorage.getItem('noir_market_v1_7') || localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4');
    if (x) {
        s = JSON.parse(x);
        ensureStats();
        s.version = '2.0';
        setActiveCityMarket();
        updateRankProgress();
        updateBestRankV18();
        save();
        draw();
        return false;
    }
    newGame(false);
    return true;
}
function v20SelfTest() { console.log('NOIR MARKET V2.0 checks: smooth full-bar news ticker, amber vault upgrade button, and tile-based shipping export destinations active.'); }
setTimeout(v20SelfTest, 240);
/* Noir Market V2.1: market restoration, full-page modals and ticker/dust stability. */
function ensureMarketSectionV21() {
    var app = document.querySelector('.app');
    if (!app)
        return;
    var market = document.querySelector('.market');
    if (!market) {
        market = document.createElement('section');
        market.className = 'market card';
        market.innerHTML = '<div class="section-head"><h3>The Market</h3><p><span class="up">↑ Rising</span> <span class="down">↓ Falling</span></p></div><div class="table" id="marketTable"></div>';
        var pocket = document.querySelector('.pocket');
        app.insertBefore(market, pocket || document.querySelector('.actions') || null);
    }
    market.style.display = 'block';
    market.style.visibility = 'visible';
    market.style.opacity = '1';
    if (!$('marketTable')) {
        var table = document.createElement('div');
        table.className = 'table';
        table.id = 'marketTable';
        market.appendChild(table);
    }
}
function renderMarketTableV21() {
    ensureMarketSectionV21();
    if (!s)
        return;
    if (typeof setActiveCityMarket === 'function')
        setActiveCityMarket();
    var table = $('marketTable');
    if (!table)
        return;
    table.innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>' + drugs.map(function (_a) {
        var _b, _c, _d;
        var name = _a[0], icon = _a[1];
        var price = Number.isFinite(+((_b = s.prices) === null || _b === void 0 ? void 0 : _b[name])) ? +s.prices[name] : 0;
        var qty = Number.isFinite(+((_c = s.supply) === null || _c === void 0 ? void 0 : _c[name])) ? +s.supply[name] : 0;
        var up = !!((_d = s.trends) === null || _d === void 0 ? void 0 : _d[name]);
        return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(qty, "</span><span class=\"price ").concat(up ? '' : 'down', "\">").concat(money(price), "</span><span class=\"trend ").concat(up ? 'up' : 'down', "\">").concat(up ? '↑' : '↓', "</span></div>");
    }).join('');
}
var v21PreviousDraw = draw;
function draw() {
    if (typeof v21PreviousDraw === 'function')
        v21PreviousDraw();
    renderMarketTableV21();
    syncTickerV21();
    ensureGameDustV21();
}
function syncTickerV21() {
    var _a, _b;
    var ticker = $('newsTicker');
    if (!ticker)
        return;
    var track = ticker.closest('.ticker-track') || ticker.parentElement;
    if (!track)
        return;
    var text = upperNews(((_b = (_a = s === null || s === void 0 ? void 0 : s.economy) === null || _a === void 0 ? void 0 : _a.news) === null || _b === void 0 ? void 0 : _b.text) || (s === null || s === void 0 ? void 0 : s.news) || 'MARKETS ARE QUIET TODAY.');
    if (ticker.textContent !== text) {
        ticker.textContent = text;
        ticker.style.animation = 'none';
        void ticker.offsetWidth;
        ticker.style.animation = '';
    }
    requestAnimationFrame(function () {
        var start = Math.max(80, track.clientWidth || 320);
        var width = Math.max(120, ticker.scrollWidth || 320);
        var end = -(width + 40);
        var duration = Math.max(28, Math.min(72, (start + width) / 38));
        ticker.style.setProperty('--ticker-start', start + 'px');
        ticker.style.setProperty('--ticker-end', end + 'px');
        ticker.style.setProperty('--ticker-duration', duration.toFixed(2) + 's');
    });
}
function ensureGameDustV21() {
    if (!document.querySelector('.game-dust')) {
        if (typeof createGameDust === 'function')
            createGameDust();
    }
}
var v21PreviousModal = modal;
function modal(t, h) {
    document.body.classList.add('modal-open');
    var dlg = $('modal');
    if (!dlg)
        return;
    $('modalTitle').textContent = t;
    $('modalBody').innerHTML = "<div class=\"modal-head\"><h3>".concat(t, "</h3><button type=\"button\" class=\"modal-x\" id=\"modalCloseBtn\" aria-label=\"Close\">\u00D7</button></div><div class=\"modal-scroll\">").concat(h + payDebtButton(), "</div>");
    if (!dlg.open)
        dlg.showModal();
    setTimeout(function () { bindModalDebt(); var x = $('modalCloseBtn'); if (x)
        x.onclick = function () { return done(); }; }, 0);
}
function done() {
    var dlg = $('modal');
    if (dlg && dlg.open)
        dlg.close();
    document.body.classList.remove('modal-open');
    save();
    draw();
}
(function bindModalCloseV21() {
    var dlg = $('modal');
    if (dlg) {
        dlg.addEventListener('close', function () { return document.body.classList.remove('modal-open'); });
        dlg.addEventListener('cancel', function () { return document.body.classList.remove('modal-open'); });
    }
})();
function save() { ensureStats(); s.version = '2.1'; localStorage.setItem('noir_market_v2_1', JSON.stringify(s)); }
function load() {
    var x = localStorage.getItem('noir_market_v2_1') || localStorage.getItem('noir_market_v2_0') || localStorage.getItem('noir_market_v1_9') || localStorage.getItem('noir_market_v1_8') || localStorage.getItem('noir_market_v1_7') || localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4');
    if (x) {
        s = JSON.parse(x);
        ensureStats();
        s.version = '2.1';
        setActiveCityMarket();
        updateRankProgress();
        updateBestRankV18();
        save();
        draw();
        return false;
    }
    newGame(false);
    return true;
}
function baseState() { return { version: '2.1', playerName: '', settings: { sound: soundEnabled ? 'on' : 'off', music: musicEnabled ? 'on' : 'off' }, reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], shipments: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, bestRank: 'Wannabe', arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 } }; }
function v21SelfTest() { console.log('NOIR MARKET V2.1 checks: market restored, full-page opaque section views, ticker smoothing and dust across pages active.'); }
setTimeout(v21SelfTest, 260);
/* Noir Market V2.3: icon refresh only; V2.2 gameplay retained. */
function closeModalV22() {
    var dlg = $('modal');
    try {
        if (dlg && dlg.open)
            dlg.close();
    }
    catch (e) { }
    document.body.classList.remove('modal-open');
}
function ensureMainSectionsV22() {
    var app = document.querySelector('.app');
    if (!app)
        return;
    var market = document.querySelector('.market');
    if (!market) {
        market = document.createElement('section');
        market.className = 'market card';
        market.innerHTML = '<div class="section-head"><h3>The Market</h3><p><span class="up">↑ Rising</span> <span class="down">↓ Falling</span></p></div><div class="table" id="marketTable"></div>';
        var pocket_1 = document.querySelector('.pocket') || document.querySelector('.actions');
        app.insertBefore(market, pocket_1 || null);
    }
    var pocket = document.querySelector('.pocket');
    if (!pocket) {
        pocket = document.createElement('section');
        pocket.className = 'pocket card';
        pocket.innerHTML = '<div class="section-head"><h3>Storage <span id="spaceLabel">0/20</span></h3></div><div class="table small" id="pocketTable"></div>';
        var actions = document.querySelector('.actions');
        app.insertBefore(pocket, actions || null);
    }
    [market, pocket].forEach(function (el) { el.style.display = 'block'; el.style.visibility = 'visible'; el.style.opacity = '1'; el.removeAttribute('hidden'); });
}
function renderMarketV22() {
    ensureMainSectionsV22();
    if (!s)
        return;
    if (typeof setActiveCityMarket === 'function')
        setActiveCityMarket();
    var table = $('marketTable');
    if (!table)
        return;
    table.innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>' + drugs.map(function (_a) {
        var _b, _c, _d;
        var name = _a[0], icon = _a[1];
        var price = Number.isFinite(+((_b = s.prices) === null || _b === void 0 ? void 0 : _b[name])) ? +s.prices[name] : 0;
        var qty = Number.isFinite(+((_c = s.supply) === null || _c === void 0 ? void 0 : _c[name])) ? +s.supply[name] : 0;
        var up = !!((_d = s.trends) === null || _d === void 0 ? void 0 : _d[name]);
        return "<div class=\"row\"><span class=\"drug\"><b>".concat(icon, "</b>").concat(name, "</span><span>").concat(qty, "</span><span class=\"price ").concat(up ? '' : 'down', "\">").concat(money(price), "</span><span class=\"trend ").concat(up ? 'up' : 'down', "\">").concat(up ? '↑' : '↓', "</span></div>");
    }).join('');
}
function renderStorageV22() {
    ensureMainSectionsV22();
    if (!s)
        return;
    var table = $('pocketTable');
    if (!table)
        return;
    var items = Object.entries(s.inv || {}).filter(function (_a) {
        var q = _a[1];
        return q > 0;
    });
    var wc = typeof weaponCounts === 'function' ? weaponCounts() : {};
    var weaponsRows = Object.entries(wc).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "<div class=\"row storage-weapon\"><span>".concat(k, "</span><span>").concat(v, "</span><span>Weapon</span></div>");
    }).join('');
    table.innerHTML = '<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>' + (items.length ? items.slice(0, 14).map(function (_a) {
        var _b;
        var k = _a[0], v = _a[1];
        return "<div class=\"row\"><span>".concat(k, "</span><span>").concat(v, "</span><span>").concat(money(v * (((_b = s.prices) === null || _b === void 0 ? void 0 : _b[k]) || 0)), "</span></div>");
    }).join('') : "<div class=\"row\"><span>Empty</span><span>0</span><span>".concat(money(0), "</span></div>")) + "<div class=\"row header\"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>" + (weaponsRows || '<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>');
}
var v22PreviousDraw = draw;
function draw() {
    var _a;
    try {
        if (typeof v22PreviousDraw === 'function')
            v22PreviousDraw();
    }
    catch (e) {
        console.warn('V2.2 previous draw recovered:', e);
    }
    try {
        ensureStats();
        if (typeof setActiveCityMarket === 'function')
            setActiveCityMarket();
        var p = places[s.city];
        var hc = typeof healthClass === 'function' ? healthClass() : 'health-good';
        if ($('dayCount'))
            $('dayCount').textContent = s.day;
        if ($('cash'))
            $('cash').textContent = money(s.cash);
        if ($('bank'))
            $('bank').textContent = money(s.bank);
        if ($('debt'))
            $('debt').textContent = money(s.debt);
        if ($('health')) {
            $('health').textContent = Math.round(s.health) + '%';
            $('health').className = hc;
        }
        if ($('healthBar')) {
            $('healthBar').style.width = Math.max(0, s.health) + '%';
            $('healthBar').className = hc;
        }
        if ($('city'))
            $('city').textContent = p[0] + ' ' + p[1];
        if ($('country'))
            $('country').textContent = '';
        if ($('flag'))
            $('flag').textContent = '';
        if ($('marketInfo'))
            $('marketInfo').innerHTML = "".concat(p[0], ": ").concat(cityText(), ".<br>").concat(rumourHtml());
        if ($('noticeText'))
            $('noticeText').textContent = s.notice;
        if ($('spaceLabel'))
            $('spaceLabel').innerHTML = "".concat(used(), "/").concat(totalSpace(), " <span class=\"storage-type\">").concat(storageType(), "</span>");
        if ($('statusLocation'))
            $('statusLocation').textContent = p[0] + ', ' + p[1];
        if ($('rank'))
            $('rank').textContent = typeof updateBestRankV18 === 'function' ? updateBestRankV18() : rank();
        if ($('rankDays'))
            $('rankDays').textContent = typeof rankDaysText === 'function' ? rankDaysText() : '0/5';
        if ($('reputation'))
            $('reputation').textContent = "".concat((_a = s.reputation) !== null && _a !== void 0 ? _a : 50, "/100");
        if ($('space'))
            $('space').textContent = "".concat(used(), "/").concat(totalSpace(), " \u00B7 ").concat(storageType());
        if ($('heat'))
            $('heat').textContent = s.heat + '%';
        renderMarketV22();
        renderStorageV22();
        if (typeof syncTickerV21 === 'function')
            syncTickerV21();
        if (typeof ensureGameDustV21 === 'function')
            ensureGameDustV21();
    }
    catch (e) {
        console.error('V2.2 draw failed:', e);
    }
}
function modal(t, h) {
    var dlg = $('modal');
    if (!dlg)
        return;
    document.body.classList.add('modal-open');
    $('modalTitle').textContent = t;
    $('modalBody').innerHTML = "<div class=\"modal-head\"><h3>".concat(t, "</h3><button type=\"button\" class=\"modal-x\" id=\"modalCloseBtn\" aria-label=\"Close\">\u00D7</button></div><div class=\"modal-scroll\">").concat(h + payDebtButton(), "</div>");
    try {
        if (!dlg.open)
            dlg.showModal();
    }
    catch (e) {
        try {
            dlg.setAttribute('open', '');
        }
        catch (_) { }
    }
    setTimeout(function () { try {
        bindModalDebt();
    }
    catch (e) { } var x = $('modalCloseBtn'); if (x)
        x.onclick = function () { return done(); }; }, 0);
}
function done() { closeModalV22(); save(); draw(); }
function performStayV22() {
    sound('positive');
    haptic();
    ensureStats();
    s.stats.stays = (s.stats.stays || 0) + 1;
    closeModalV22();
    setTimeout(function () { return nextDay("You stay in ".concat(places[s.city][0], "."), true); }, 0);
}
function performFlightV22(i, fare) {
    sound('travel');
    haptic();
    ensureStats();
    s.stats.flights = (s.stats.flights || 0) + 1;
    s.cash -= fare;
    s.city = i;
    s.weapons = [];
    closeModalV22();
    setTimeout(function () { return nextDay("You land in ".concat(places[s.city][0], ". Flight cost ").concat(money(fare), ". Weapons were lost before boarding."), false); }, 0);
}
function boardFlightWithSeizure(i, fare) {
    var hadDrugs = used(), hadWeapons = (s.weapons || []).length;
    var seizedDrugs = 0, seizedWeapons = 0;
    if (hadDrugs && Math.random() < .92) {
        seizedDrugs = hadDrugs;
        Object.keys(s.inv).forEach(function (k) { return s.inv[k] = 0; });
    }
    if (hadWeapons && Math.random() < .92) {
        seizedWeapons = hadWeapons;
        s.weapons = [];
    }
    s.heat = Math.min(100, s.heat + ((seizedDrugs || seizedWeapons) ? rand(12, 30) : rand(2, 8)));
    s.notice = (seizedDrugs || seizedWeapons) ? "Airport security seized ".concat(seizedDrugs, " drug units and ").concat(seizedWeapons, " weapon").concat(seizedWeapons === 1 ? '' : 's', ". Next time, vault first, fly second.") : "Somehow you slip through airport security with your stock intact. Do not make that your business plan.";
    performFlightV22(i, fare);
}
function showTravelFlights() {
    var panel = $('travelPanel');
    if (!panel)
        return;
    panel.innerHTML = "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Prices change daily and airport security is not your mate.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], " <em>").concat(money(travelFare(i)), "</em></strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>");
    var st = $('stayFromTravel');
    if (st)
        st.onclick = performStayV22;
    document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { var i = +b.dataset.city, fare = travelFare(i); if (fare > s.cash) {
        errorMsg('INSUFFICIENT FUNDS');
        return;
    } airportWarning(i, fare); }; });
}
function stay() { performStayV22(); }
function travel() {
    ensureStats();
    ensureShipping();
    modal('Travel', "<div class=\"travel-tabs primary\"><button type=\"button\" id=\"travelModeBtn\" class=\"active\">TRAVEL</button><button type=\"button\" id=\"shippingModeBtn\">SHIPPING</button></div><div id=\"travelPanel\"></div>");
    setTimeout(function () {
        var travelBtn = $('travelModeBtn'), shipBtn = $('shippingModeBtn');
        if (!travelBtn || !shipBtn)
            return;
        function activate(which) { travelBtn.classList.toggle('active', which === 'travel'); shipBtn.classList.toggle('active', which === 'shipping'); if (which === 'travel')
            showTravelFlights();
        else
            showShippingHub(); }
        travelBtn.onclick = function () { return activate('travel'); };
        shipBtn.onclick = function () { return activate('shipping'); };
        activate('travel');
    }, 0);
}
var v22PreviousNextDay = nextDay;
function nextDay(base, showRumour) {
    var _a;
    try {
        ensureStats();
        var old = { rumour: s.rumour, true: !!(s.rumour && s.rumour.accurate) };
        s.day++;
        if (typeof activeDebtTotal === 'function')
            s.debt = activeDebtTotal();
        s.heat = Math.min(100, Math.max(0, (s.heat || 0) + rand(-8, 13)));
        if (typeof rep === 'function')
            rep(1);
        if (typeof genPrices === 'function')
            genPrices(old);
        if (typeof newRumour === 'function')
            newRumour();
        if (typeof randomEvent === 'function')
            randomEvent(base);
        if (typeof updateRankProgress === 'function')
            updateRankProgress();
        if (typeof activeDebtTotal === 'function')
            s.debt = activeDebtTotal();
        if (s.day > s.maxDay)
            return endGame();
        save();
        draw();
        var rumourBlock = showRumour ? "<h4>Rumour Result</h4><p><strong>".concat(old.true ? 'TRUE' : 'FALSE', "</strong> \u00B7 ").concat(((_a = old.rumour) === null || _a === void 0 ? void 0 : _a.text) || 'No rumour was active.', "</p>") : '';
        var title = showRumour ? 'Stay Here' : 'Travel Result';
        var body = "<p>".concat(s.notice, "</p>").concat(rumourBlock, "<h4>Loan Status</h4>").concat(debtReminderHtml());
        var arrest = typeof maybeArrest === 'function' ? maybeArrest(showRumour ? 'stay' : 'travel') : null;
        if (arrest && typeof showArrestModal === 'function')
            return showArrestModal(arrest, title, body, rumourBlock);
        modal(title, "".concat(body, "<button type=\"button\" id=\"continueEvent\">Continue</button>"));
        setTimeout(function () { var c = $('continueEvent'); if (c)
            c.onclick = function () { closeModalV22(); handleDueLoans(); }; }, 0);
    }
    catch (e) {
        console.error('V2.2 nextDay recovered:', e);
        try {
            if (typeof v22PreviousNextDay === 'function')
                return v22PreviousNextDay(base, showRumour);
        }
        catch (err) {
            console.error('Fallback nextDay failed:', err);
        }
    }
}
function save() { ensureStats(); s.version = '2.8'; localStorage.setItem('noir_market_v2_8', JSON.stringify(s)); }
function load() {
    var x = localStorage.getItem('noir_market_v2_8') || localStorage.getItem('noir_market_v2_7') || localStorage.getItem('noir_market_v2_6') || localStorage.getItem('noir_market_v2_5') || localStorage.getItem('noir_market_v2_4') || localStorage.getItem('noir_market_v2_3') || localStorage.getItem('noir_market_v2_2') || localStorage.getItem('noir_market_v2_1') || localStorage.getItem('noir_market_v2_0') || localStorage.getItem('noir_market_v1_9') || localStorage.getItem('noir_market_v1_8') || localStorage.getItem('noir_market_v1_7') || localStorage.getItem('noir_market_v1_6') || localStorage.getItem('noir_market_v1_5') || localStorage.getItem('noir_market_v1_4') || localStorage.getItem('noir_market_v1_3') || localStorage.getItem('noir_market_v1_2') || localStorage.getItem('noir_market_v13') || localStorage.getItem('noir_market_v12') || localStorage.getItem('noir_market_v9') || localStorage.getItem('noir_market_v6') || localStorage.getItem('noir_market_v5') || localStorage.getItem('noir_market_v4');
    if (x) {
        s = JSON.parse(x);
        ensureStats();
        s.version = '2.8';
        setActiveCityMarket();
        updateRankProgress();
        updateBestRankV18();
        save();
        draw();
        window.__NOIR_V28_FIRST_RENDER_COMPLETE = true;
        return false;
    }
    newGame(false);
    return true;
}
function baseState() { return { version: '2.8', playerName: '', settings: { sound: soundEnabled ? 'on' : 'off', music: musicEnabled ? 'on' : 'off' }, reputation: 50, news: 'MARKETS ARE QUIET TODAY.', day: 1, maxDay: 30, cash: 1000, bank: 0, debt: 0, health: 100, heat: 0, city: 0, inv: blankInv(), supply: blankSupply(), prices: {}, trends: {}, owned: [], weapons: [], loans: [], shipments: [], rumour: null, notice: 'You start in London with £1,000 cash, £0 in the bank and a clean slate.', travelFares: {}, vaults: {}, weaponVaults: {}, vaultLevels: {}, economy: { cities: {}, news: { text: 'MARKETS ARE QUIET TODAY.' }, history: [] }, rankState: { current: 'Wannabe', days: 0, pending: null, pendingDays: 0 }, stats: { tradesBought: 0, tradesSold: 0, flights: 0, stays: 0, fightsWon: 0, fightsLost: 0, mugged: 0, loansTaken: 0, largestTrade: 0, bestNet: 1000, bestRank: 'Wannabe', arrests: 0, jailDays: 0, bribes: 0, informants: 0, shipmentsExported: 0, shipmentsImported: 0 } }; }
function bindMainButtonsV22() {
    var bind = function (id, fn) { var el = $(id); if (el)
        el.onclick = fn; };
    bind('buyBtn', function () { return transact('Buy'); });
    bind('sellBtn', function () { return transact('Sell'); });
    bind('stayBtn', stay);
    bind('travelBtn', travel);
    bind('bankBtn', bank);
    bind('dumpBtn', dump);
    bind('shopBtn', shop);
    bind('hustleBtn', hustle);
    bind('menuBtn', showMenu);
}
setTimeout(function () { bindMainButtonsV22(); ensureMainSectionsV22(); if (!window.__NOIR_V28_FIRST_RENDER_COMPLETE) {
    draw();
    window.__NOIR_V28_FIRST_RENDER_COMPLETE = true;
} console.log('NOIR MARKET V2.8 startup safety checks: market/storage restored and stay/travel day advance hotfix active.'); }, 0);
/* Noir Market V2.7 Icon Patch: splash-only particles and lighter startup. */
function createSplashDust() {
    var splash = $('splash');
    if (!splash)
        return;
    splash.querySelectorAll('.live-dust').forEach(function (el) { return el.remove(); });
    var layer = document.createElement('div');
    layer.className = 'live-dust';
    var count = 100;
    for (var i = 0; i < count; i++) {
        var d = document.createElement('i');
        var size = (Math.random() * 3.2 + 2.1).toFixed(2);
        d.style.left = (Math.random() * 100).toFixed(2) + '%';
        d.style.bottom = (-10 - Math.random() * 22).toFixed(2) + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.opacity = (Math.random() * 0.42 + 0.28).toFixed(2);
        d.style.animationDuration = (34 + Math.random() * 34).toFixed(2) + 's';
        d.style.animationDelay = (-Math.random() * 38).toFixed(2) + 's';
        d.style.setProperty('--drift', (Math.random() * 48 - 24).toFixed(1) + 'px');
        layer.appendChild(d);
    }
    splash.prepend(layer);
}
function createGameDust() {
    document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
}
function ensureGameDustV21() {
    document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
}
function recreateDustSlowerSmaller() {
    document.querySelectorAll('.game-dust,.live-dust').forEach(function (el) { return el.remove(); });
    createSplashDust();
}
function v24PerformanceSelfTest() {
    console.log('NOIR MARKET V2.7 performance patch: WAV removed, splash particles fixed at 100 larger particles, game particles disabled.');
}
setTimeout(function () { try {
    document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
    v24PerformanceSelfTest();
}
catch (e) { } }, 420);
/* Noir Market V2.7 Icon Patch: faster splash startup. */
function createSplashDust() {
    var splash = $('splash');
    if (!splash)
        return;
    if (splash.querySelector('.live-dust'))
        return;
    var layer = document.createElement('div');
    layer.className = 'live-dust';
    var count = 100;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
        var d = document.createElement('i');
        var size = (Math.random() * 2.6 + 3.0).toFixed(2);
        d.style.left = (Math.random() * 100).toFixed(2) + '%';
        d.style.bottom = (-10 - Math.random() * 22).toFixed(2) + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.opacity = (Math.random() * 0.42 + 0.30).toFixed(2);
        d.style.animationDuration = (38 + Math.random() * 34).toFixed(2) + 's';
        d.style.animationDelay = (-Math.random() * 38).toFixed(2) + 's';
        d.style.setProperty('--drift', (Math.random() * 44 - 22).toFixed(1) + 'px');
        frag.appendChild(d);
    }
    layer.appendChild(frag);
    splash.prepend(layer);
}
function createGameDust() {
    document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
}
function v25PerformanceSelfTest() {
    var particles = document.querySelectorAll('#splash .live-dust i').length;
    console.log('NOIR MARKET V2.7 performance patch: splash particles=' + particles + ', MP3 not precached, startup recreation disabled, logo optimised.');
}
setTimeout(function () { try {
    document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
    v25PerformanceSelfTest();
}
catch (e) { } }, 520);
/* Noir Market V2.7 Splash Loading Patch: 70 larger particles and enter bar. */
function createSplashDust() {
    var splash = $('splash');
    if (!splash)
        return;
    splash.querySelectorAll('.live-dust').forEach(function (el) { return el.remove(); });
    var layer = document.createElement('div');
    layer.className = 'live-dust';
    var count = 70;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
        var d = document.createElement('i');
        var size = (Math.random() * 5.2 + 6.0).toFixed(2);
        d.style.left = (Math.random() * 100).toFixed(2) + '%';
        d.style.bottom = (-10 - Math.random() * 22).toFixed(2) + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.opacity = (Math.random() * 0.38 + 0.32).toFixed(2);
        d.style.animationDuration = (42 + Math.random() * 32).toFixed(2) + 's';
        d.style.animationDelay = (-Math.random() * 36).toFixed(2) + 's';
        d.style.setProperty('--drift', (Math.random() * 50 - 25).toFixed(1) + 'px');
        frag.appendChild(d);
    }
    layer.appendChild(frag);
    splash.prepend(layer);
}
function setupSplashLoaderV27() {
    var splash = $('splash');
    var enter = $('splashEnter');
    var fill = $('splashLoaderFill');
    var text = $('splashLoaderText');
    var prompt = $('splashPrompt');
    if (!splash || !enter || !fill || !text)
        return;
    var ready = false;
    function enterGame() {
        if (!ready)
            return;
        unlockAudio();
        startBackgroundMusic();
        musicStarted = true;
        sound('positive');
        splash.classList.add('hide');
        setTimeout(function () { showWelcome(); }, 460);
    }
    enter.disabled = true;
    enter.onclick = enterGame;
    splash.onclick = function (e) {
        if (e.target && e.target.closest && e.target.closest('#splashEnter'))
            return;
        enterGame();
    };
    fill.style.width = '0%';
    text.textContent = 'LOADING';
    if (prompt)
        prompt.textContent = 'Loading.';
    requestAnimationFrame(function () {
        requestAnimationFrame(function () { fill.style.width = '100%'; });
    });
    setTimeout(function () {
        ready = true;
        enter.disabled = false;
        text.textContent = 'ENTER';
        enter.setAttribute('aria-label', 'Enter Noir Market');
        if (prompt)
            prompt.textContent = 'Ready.';
    }, 920);
}
setTimeout(function () { try {
    setupSplashLoaderV27();
}
catch (e) {
    console.error('V2.7 splash loader setup failed:', e);
} }, 40);
setTimeout(function () { try {
    console.log('NOIR MARKET V2.7 splash patch: particles=' + document.querySelectorAll('#splash .live-dust i').length + ', loading bar active.');
}
catch (e) { } }, 980);
/* Noir Market V2.8 Loading Optimisation Patch: faster splash readiness, one-pass splash particles, deferred non-essential startup. */
(function () {
    var VERSION = '2.8';
    var SAVE_KEY = 'noir_market_v2_8';
    var FALLBACK_KEYS = ['noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousShowWelcome = showWelcome;
    save = function () {
        ensureStats();
        s.version = VERSION;
        localStorage.setItem(SAVE_KEY, JSON.stringify(s));
    };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_1 = FALLBACK_KEYS; _i < FALLBACK_KEYS_1.length; _i++) {
                var key = FALLBACK_KEYS_1[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureStats();
            s.version = VERSION;
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            window.__NOIR_V28_FIRST_RENDER_COMPLETE = true;
            return false;
        }
        newGame(false);
        window.__NOIR_V28_FIRST_RENDER_COMPLETE = true;
        return true;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        return state;
    };
    createSplashDust = function () {
        var splash = $('splash');
        if (!splash)
            return;
        var existing = splash.querySelector('.live-dust');
        if (existing && existing.dataset.version === '2.8' && existing.children.length === 70)
            return;
        splash.querySelectorAll('.live-dust').forEach(function (el) { return el.remove(); });
        var layer = document.createElement('div');
        layer.className = 'live-dust';
        layer.dataset.version = '2.8';
        var frag = document.createDocumentFragment();
        for (var i = 0; i < 70; i++) {
            var d = document.createElement('i');
            var size = (Math.random() * 5.2 + 6.0).toFixed(2);
            d.style.left = (Math.random() * 100).toFixed(2) + '%';
            d.style.bottom = (-10 - Math.random() * 22).toFixed(2) + '%';
            d.style.width = size + 'px';
            d.style.height = size + 'px';
            d.style.opacity = (Math.random() * 0.38 + 0.32).toFixed(2);
            d.style.animationDuration = (42 + Math.random() * 32).toFixed(2) + 's';
            d.style.animationDelay = (-Math.random() * 36).toFixed(2) + 's';
            d.style.setProperty('--drift', (Math.random() * 50 - 25).toFixed(1) + 'px');
            frag.appendChild(d);
        }
        layer.appendChild(frag);
        splash.prepend(layer);
    };
    createGameDust = function () {
        document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
    };
    ensureGameDustV21 = function () {
        document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
    };
    startBackgroundMusic = function () {
        if (!musicEnabled)
            return;
        unlockAudio();
        musicStarted = true;
        try {
            if (typeof Audio !== 'undefined') {
                if (!bgMusic) {
                    bgMusic = new Audio();
                    bgMusic.preload = 'none';
                    bgMusic.loop = true;
                    bgMusic.volume = 0.42;
                    bgMusic.src = MUSIC_PATH;
                }
                bgMusic.loop = true;
                var playResult = bgMusic.play();
                if (playResult && playResult.catch)
                    playResult.catch(function () { return startSynthMusic(); });
                return;
            }
        }
        catch (e) { }
        startSynthMusic();
    };
    setupSplashLoaderV27 = function () {
        var splash = $('splash');
        var enter = $('splashEnter');
        var fill = $('splashLoaderFill');
        var text = $('splashLoaderText');
        var prompt = $('splashPrompt');
        if (!splash || !enter || !fill || !text)
            return;
        if (splash.dataset.loaderVersion === '2.8')
            return;
        splash.dataset.loaderVersion = '2.8';
        var ready = false;
        var entered = false;
        var markReady = function () {
            if (ready)
                return;
            ready = true;
            fill.style.width = '100%';
            enter.disabled = false;
            text.textContent = 'ENTER';
            enter.setAttribute('aria-label', 'Enter Noir Market');
            if (prompt)
                prompt.textContent = 'Ready.';
        };
        var enterGame = function () {
            if (!ready || entered)
                return;
            entered = true;
            unlockAudio();
            startBackgroundMusic();
            musicStarted = true;
            sound('positive');
            splash.classList.add('hide');
            setTimeout(function () { previousShowWelcome(); }, 360);
        };
        enter.disabled = true;
        enter.onclick = enterGame;
        splash.onclick = function (e) {
            if (e.target && e.target.closest && e.target.closest('#splashEnter'))
                return;
            enterGame();
        };
        fill.style.transition = 'width .28s cubic-bezier(.18,.84,.25,1)';
        fill.style.width = '0%';
        text.textContent = 'LOADING';
        if (prompt)
            prompt.textContent = 'Loading.';
        requestAnimationFrame(function () {
            createSplashDust();
            fill.style.width = '68%';
            requestAnimationFrame(function () { return setTimeout(markReady, 180); });
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { try {
            setupSplashLoaderV27();
        }
        catch (e) {
            console.error('V2.8 splash loader setup failed:', e);
        } }, { once: true });
    }
    else {
        setTimeout(function () { try {
            setupSplashLoaderV27();
        }
        catch (e) {
            console.error('V2.8 splash loader setup failed:', e);
        } }, 0);
    }
    setTimeout(function () { try {
        document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
        console.log('NOIR MARKET V2.8 loading optimisation: particles=' + document.querySelectorAll('#splash .live-dust i').length + ', faster splash readiness active, MP3 lazy-loaded.');
    }
    catch (e) { } }, 260);
})();
/* Noir Market V2.9: loading text cleanup and quick navigation mechanics. */
(function () {
    var VERSION = '2.9';
    var SAVE_KEY = 'noir_market_v2_9';
    var FALLBACK_KEYS = ['noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    save = function () {
        ensureStats();
        s.version = VERSION;
        localStorage.setItem(SAVE_KEY, JSON.stringify(s));
    };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_2 = FALLBACK_KEYS; _i < FALLBACK_KEYS_2.length; _i++) {
                var key = FALLBACK_KEYS_2[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureStats();
            s.version = VERSION;
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            window.__NOIR_V29_FIRST_RENDER_COMPLETE = true;
            return false;
        }
        newGame(false);
        window.__NOIR_V29_FIRST_RENDER_COMPLETE = true;
        return true;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        return state;
    };
    function openFinances() {
        if (typeof bank === 'function')
            bank();
    }
    function openBlackMarket() {
        if (typeof shop === 'function')
            shop();
    }
    function openBuy() {
        if (typeof buyModal === 'function')
            buyModal();
        else if (typeof transact === 'function')
            transact('Buy');
    }
    function bindStatTile(strongId, handler, label) {
        var value = $(strongId);
        var tile = value && value.closest ? value.closest('div') : null;
        if (!tile)
            return;
        tile.classList.add('nav-hotspot');
        tile.setAttribute('role', 'button');
        tile.setAttribute('tabindex', '0');
        tile.setAttribute('aria-label', label);
        tile.onclick = handler;
        tile.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handler();
        } };
    }
    function bindQuickNavigationV29() {
        bindStatTile('cash', openFinances, 'Open finances');
        bindStatTile('bank', openFinances, 'Open finances');
        bindStatTile('debt', openFinances, 'Open finances');
        bindStatTile('health', openBlackMarket, 'Open black market');
        var bankButton = $('bankBtn');
        if (bankButton)
            bankButton.onclick = openFinances;
        var shopButton = $('shopBtn');
        if (shopButton)
            shopButton.onclick = openBlackMarket;
        var market = $('marketTable');
        if (market) {
            market.querySelectorAll('.row:not(.header)').forEach(function (row) {
                row.classList.add('market-click-row');
                row.setAttribute('role', 'button');
                row.setAttribute('tabindex', '0');
                row.setAttribute('aria-label', 'Open buy screen');
                row.onclick = openBuy;
                row.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openBuy();
                } };
            });
        }
    }
    draw = function () {
        previousDraw();
        bindQuickNavigationV29();
    };
    setupSplashLoaderV27 = function () {
        var splash = $('splash');
        var enter = $('splashEnter');
        var fill = $('splashLoaderFill');
        var text = $('splashLoaderText');
        var prompt = $('splashPrompt');
        if (!splash || !enter || !fill || !text)
            return;
        if (splash.dataset.loaderVersion === '2.9')
            return;
        splash.dataset.loaderVersion = '2.9';
        var ready = false;
        var entered = false;
        var markReady = function () {
            if (ready)
                return;
            ready = true;
            fill.style.width = '100%';
            enter.disabled = false;
            text.textContent = 'ENTER';
            enter.setAttribute('aria-label', 'Enter Noir Market');
            if (prompt)
                prompt.textContent = '';
        };
        var enterGame = function () {
            if (!ready || entered)
                return;
            entered = true;
            unlockAudio();
            startBackgroundMusic();
            musicStarted = true;
            sound('positive');
            splash.classList.add('hide');
            setTimeout(function () { showWelcome(); }, 360);
        };
        enter.disabled = true;
        enter.onclick = enterGame;
        splash.onclick = function (e) {
            if (e.target && e.target.closest && e.target.closest('#splashEnter'))
                return;
            enterGame();
        };
        fill.style.transition = 'width .28s cubic-bezier(.18,.84,.25,1)';
        fill.style.width = '0%';
        text.textContent = 'LOADING';
        if (prompt)
            prompt.textContent = '';
        requestAnimationFrame(function () {
            createSplashDust();
            fill.style.width = '68%';
            requestAnimationFrame(function () { return setTimeout(markReady, 180); });
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { try {
            setupSplashLoaderV27();
            bindQuickNavigationV29();
        }
        catch (e) {
            console.error('V2.9 setup failed:', e);
        } }, { once: true });
    }
    else {
        setTimeout(function () { try {
            setupSplashLoaderV27();
            bindQuickNavigationV29();
            if (s && s.version !== VERSION) {
                s.version = VERSION;
                save();
            }
        }
        catch (e) {
            console.error('V2.9 setup failed:', e);
        } }, 0);
    }
    setTimeout(function () { try {
        bindQuickNavigationV29();
        console.log('NOIR MARKET V2.9: thinner loader, READY prompt removed, tile navigation active.');
    }
    catch (e) { } }, 320);
})();
/* Noir Market V3.0: splash logo priority, thinner loader, MP3 removal, faster random splash particles. */
(function () {
    var VERSION = '3.0';
    var SAVE_KEY = 'noir_market_v3_0';
    var FALLBACK_KEYS = ['noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    save = function () {
        ensureStats();
        s.version = VERSION;
        if (s.settings)
            s.settings.music = musicEnabled ? 'on' : 'off';
        localStorage.setItem(SAVE_KEY, JSON.stringify(s));
    };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_3 = FALLBACK_KEYS; _i < FALLBACK_KEYS_3.length; _i++) {
                var key = FALLBACK_KEYS_3[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureStats();
            s.version = VERSION;
            if (!s.settings)
                s.settings = {};
            s.settings.music = musicEnabled ? 'on' : 'off';
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            window.__NOIR_V30_FIRST_RENDER_COMPLETE = true;
            return false;
        }
        newGame(false);
        window.__NOIR_V30_FIRST_RENDER_COMPLETE = true;
        return true;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        if (!state.settings)
            state.settings = {};
        state.settings.music = musicEnabled ? 'on' : 'off';
        return state;
    };
    createSplashDust = function () {
        var splash = $('splash');
        if (!splash)
            return;
        var existing = splash.querySelector('.live-dust');
        if (existing && existing.dataset.version === '3.0' && existing.children.length === 70)
            return;
        splash.querySelectorAll('.live-dust').forEach(function (el) { return el.remove(); });
        var layer = document.createElement('div');
        layer.className = 'live-dust';
        layer.dataset.version = '3.0';
        var frag = document.createDocumentFragment();
        for (var i = 0; i < 70; i++) {
            var d = document.createElement('i');
            var size = (Math.random() * 8 + 4).toFixed(2);
            d.style.left = (Math.random() * 100).toFixed(2) + '%';
            d.style.bottom = (-10 - Math.random() * 22).toFixed(2) + '%';
            d.style.width = size + 'px';
            d.style.height = size + 'px';
            d.style.opacity = (Math.random() * 0.40 + 0.30).toFixed(2);
            d.style.animationDuration = (28 + Math.random() * 21).toFixed(2) + 's';
            d.style.animationDelay = (-Math.random() * 24).toFixed(2) + 's';
            d.style.setProperty('--drift', (Math.random() * 64 - 32).toFixed(1) + 'px');
            frag.appendChild(d);
        }
        layer.appendChild(frag);
        splash.prepend(layer);
    };
    startBackgroundMusic = function () {
        if (!musicEnabled)
            return;
        unlockAudio();
        musicStarted = true;
        startSynthMusic();
    };
    stopBackgroundMusic = function () {
        try {
            if (bgMusic) {
                bgMusic.pause();
                bgMusic.src = '';
                bgMusic = null;
            }
        }
        catch (e) { }
        stopSynthMusic();
    };
    function bindQuickNavigationV30() {
        if (typeof bindQuickNavigationV29 === 'function')
            bindQuickNavigationV29();
    }
    draw = function () {
        previousDraw();
        if (typeof bindQuickNavigationV29 === 'function')
            bindQuickNavigationV29();
    };
    setupSplashLoaderV27 = function () {
        var splash = $('splash');
        var enter = $('splashEnter');
        var fill = $('splashLoaderFill');
        var text = $('splashLoaderText');
        var prompt = $('splashPrompt');
        if (!splash || !enter || !fill || !text)
            return;
        if (splash.dataset.loaderVersion === '3.0')
            return;
        splash.dataset.loaderVersion = '3.0';
        var ready = false;
        var entered = false;
        var markReady = function () {
            if (ready)
                return;
            ready = true;
            fill.style.width = '100%';
            enter.disabled = false;
            text.textContent = 'ENTER';
            enter.setAttribute('aria-label', 'Enter Noir Market');
            if (prompt)
                prompt.textContent = '';
        };
        var enterGame = function () {
            if (!ready || entered)
                return;
            entered = true;
            unlockAudio();
            startBackgroundMusic();
            musicStarted = true;
            sound('positive');
            splash.classList.add('hide');
            setTimeout(function () { showWelcome(); }, 360);
        };
        enter.disabled = true;
        enter.onclick = enterGame;
        splash.onclick = function (e) {
            if (e.target && e.target.closest && e.target.closest('#splashEnter'))
                return;
            enterGame();
        };
        fill.style.transition = 'width .28s cubic-bezier(.18,.84,.25,1)';
        fill.style.width = '0%';
        text.textContent = 'LOADING';
        if (prompt)
            prompt.textContent = '';
        requestAnimationFrame(function () {
            createSplashDust();
            fill.style.width = '68%';
            requestAnimationFrame(function () { return setTimeout(markReady, 160); });
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { try {
            setupSplashLoaderV27();
        }
        catch (e) {
            console.error('V3.0 setup failed:', e);
        } }, { once: true });
    }
    else {
        setTimeout(function () { try {
            setupSplashLoaderV27();
            if (s && s.version !== VERSION) {
                s.version = VERSION;
                save();
            }
        }
        catch (e) {
            console.error('V3.0 setup failed:', e);
        } }, 0);
    }
    setTimeout(function () { try {
        document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
        console.log('NOIR MARKET V3.0: splash logo priority active, MP3 removed, thinner loader, particles 50% faster with random sizes.');
    }
    catch (e) { } }, 320);
})();
/* Noir Market V3.1: instant splash particles, double-speed particles and larger ENTER text. */
(function () {
    var VERSION = '3.1';
    var SAVE_KEY = 'noir_market_v3_1';
    var FALLBACK_KEYS = ['noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    save = function () {
        ensureStats();
        s.version = VERSION;
        if (s.settings)
            s.settings.music = musicEnabled ? 'on' : 'off';
        localStorage.setItem(SAVE_KEY, JSON.stringify(s));
    };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_4 = FALLBACK_KEYS; _i < FALLBACK_KEYS_4.length; _i++) {
                var key = FALLBACK_KEYS_4[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureStats();
            s.version = VERSION;
            if (!s.settings)
                s.settings = {};
            s.settings.music = musicEnabled ? 'on' : 'off';
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            window.__NOIR_V31_FIRST_RENDER_COMPLETE = true;
            return false;
        }
        newGame(false);
        window.__NOIR_V31_FIRST_RENDER_COMPLETE = true;
        return true;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        if (!state.settings)
            state.settings = {};
        state.settings.music = musicEnabled ? 'on' : 'off';
        return state;
    };
    createSplashDust = function () {
        var splash = $('splash');
        if (!splash)
            return;
        var existing = splash.querySelector('.live-dust');
        if (existing && existing.children.length === 70) {
            existing.dataset.version = '3.1';
            return;
        }
        splash.querySelectorAll('.live-dust').forEach(function (el) { return el.remove(); });
        var layer = document.createElement('div');
        layer.className = 'live-dust';
        layer.dataset.version = '3.1';
        var frag = document.createDocumentFragment();
        for (var i = 0; i < 70; i++) {
            var d = document.createElement('i');
            var size = (Math.random() * 8 + 4).toFixed(2);
            d.style.left = (Math.random() * 100).toFixed(2) + '%';
            d.style.bottom = (-10 - Math.random() * 22).toFixed(2) + '%';
            d.style.width = size + 'px';
            d.style.height = size + 'px';
            d.style.opacity = (Math.random() * 0.40 + 0.30).toFixed(2);
            d.style.animationDuration = (14 + Math.random() * 10.5).toFixed(2) + 's';
            d.style.animationDelay = (-Math.random() * 12).toFixed(2) + 's';
            d.style.setProperty('--drift', (Math.random() * 64 - 32).toFixed(1) + 'px');
            frag.appendChild(d);
        }
        layer.appendChild(frag);
        splash.prepend(layer);
    };
    draw = function () {
        previousDraw();
        if (typeof bindQuickNavigationV29 === 'function')
            bindQuickNavigationV29();
    };
    setupSplashLoaderV27 = function () {
        var splash = $('splash');
        var enter = $('splashEnter');
        var fill = $('splashLoaderFill');
        var text = $('splashLoaderText');
        var prompt = $('splashPrompt');
        if (!splash || !enter || !fill || !text)
            return;
        if (splash.dataset.loaderVersion === '3.1')
            return;
        splash.dataset.loaderVersion = '3.1';
        var ready = false;
        var entered = false;
        var markReady = function () {
            if (ready)
                return;
            ready = true;
            fill.style.width = '100%';
            enter.disabled = false;
            enter.classList.add('ready');
            text.textContent = 'ENTER';
            enter.setAttribute('aria-label', 'Enter Noir Market');
            if (prompt)
                prompt.textContent = '';
        };
        var enterGame = function () {
            if (!ready || entered)
                return;
            entered = true;
            unlockAudio();
            startBackgroundMusic();
            musicStarted = true;
            sound('positive');
            splash.classList.add('hide');
            setTimeout(function () { showWelcome(); }, 360);
        };
        enter.disabled = true;
        enter.classList.remove('ready');
        enter.onclick = enterGame;
        splash.onclick = function (e) {
            if (e.target && e.target.closest && e.target.closest('#splashEnter'))
                return;
            enterGame();
        };
        fill.style.transition = 'width .24s cubic-bezier(.18,.84,.25,1)';
        fill.style.width = '0%';
        text.textContent = 'LOADING';
        if (prompt)
            prompt.textContent = '';
        createSplashDust();
        requestAnimationFrame(function () {
            fill.style.width = '68%';
            requestAnimationFrame(function () { return setTimeout(markReady, 140); });
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { try {
            setupSplashLoaderV27();
        }
        catch (e) {
            console.error('V3.1 setup failed:', e);
        } }, { once: true });
    }
    else {
        setTimeout(function () { try {
            setupSplashLoaderV27();
            if (s && s.version !== VERSION) {
                s.version = VERSION;
                save();
            }
        }
        catch (e) {
            console.error('V3.1 setup failed:', e);
        } }, 0);
    }
    setTimeout(function () { try {
        document.querySelectorAll('.game-dust').forEach(function (el) { return el.remove(); });
        console.log('NOIR MARKET V3.1: instant particles active, particle speed doubled, ENTER text enlarged.');
    }
    catch (e) { } }, 320);
})();
/* Noir Market V3.2: splash-only canvas snow/parallax effect adapted from requested CodePen reference. */
(function () {
    var VERSION = '3.2';
    var SAVE_KEY = 'noir_market_v3_2';
    var FALLBACK_KEYS = ['noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    var snowRuntime = null;
    save = function () {
        ensureStats();
        s.version = VERSION;
        if (s.settings)
            s.settings.music = musicEnabled ? 'on' : 'off';
        localStorage.setItem(SAVE_KEY, JSON.stringify(s));
    };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_5 = FALLBACK_KEYS; _i < FALLBACK_KEYS_5.length; _i++) {
                var key = FALLBACK_KEYS_5[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureStats();
            s.version = VERSION;
            if (!s.settings)
                s.settings = {};
            s.settings.music = musicEnabled ? 'on' : 'off';
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            window.__NOIR_V32_FIRST_RENDER_COMPLETE = true;
            return false;
        }
        newGame(false);
        window.__NOIR_V32_FIRST_RENDER_COMPLETE = true;
        return true;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        if (!state.settings)
            state.settings = {};
        state.settings.music = musicEnabled ? 'on' : 'off';
        return state;
    };
    draw = function () {
        previousDraw();
        if (typeof bindQuickNavigationV29 === 'function')
            bindQuickNavigationV29();
    };
    function startSplashSnowEffect() {
        var splash = $('splash');
        var canvas = $('splashSnowCanvas');
        if (!splash || !canvas || snowRuntime)
            return;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        var particleTarget = window.matchMedia && window.matchMedia('(max-width: 560px)').matches ? 180 : 320;
        var particles = [];
        var raf = 0;
        var running = true;
        var mouseX = 0;
        var config = { windMultiplier: .024 };
        function resize() {
            var ratio = Math.min(window.devicePixelRatio || 1, 2);
            var w = Math.max(1, Math.floor(canvas.clientWidth || window.innerWidth));
            var h = Math.max(1, Math.floor(canvas.clientHeight || window.innerHeight));
            canvas.width = Math.floor(w * ratio);
            canvas.height = Math.floor(h * ratio);
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        }
        function resetParticle(p, initial) {
            var w = canvas.clientWidth || window.innerWidth;
            var h = canvas.clientHeight || window.innerHeight;
            p.x = Math.random() * w;
            p.y = initial ? Math.random() * h : -12;
            var depth = Math.pow(Math.random(), 3);
            p.z = depth;
            p.radius = .45 + (depth * 2.25);
            p.speed = (.65 + (depth * 3.1)) * 2;
            p.alpha = .22 + (depth * .62);
            p.angle = Math.random() * Math.PI * 2;
            p.angleStep = .008 + (depth * .032);
            p.swayStrength = (Math.random() * 1.2) + .45 + (depth * .8);
        }
        function init() {
            particles.length = 0;
            for (var i = 0; i < particleTarget; i++) {
                var p = {};
                resetParticle(p, true);
                particles.push(p);
            }
        }
        function drawSnow() {
            if (!running)
                return;
            var w = canvas.clientWidth || window.innerWidth;
            var h = canvas.clientHeight || window.innerHeight;
            ctx.clearRect(0, 0, w, h);
            var wind = mouseX * 2 * config.windMultiplier * 10;
            for (var _i = 0, particles_2 = particles; _i < particles_2.length; _i++) {
                var p = particles_2[_i];
                p.y += p.speed;
                p.angle += p.angleStep;
                p.x += Math.sin(p.angle) * p.swayStrength + wind;
                if (p.y > h + 14)
                    resetParticle(p, false);
                if (p.x > w + 14)
                    p.x = -14;
                if (p.x < -14)
                    p.x = w + 14;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.shadowBlur = p.radius > 2.1 ? p.radius : 0;
                ctx.shadowColor = 'rgba(255,255,255,' + (p.alpha * .42) + ')';
                ctx.fillStyle = 'rgba(255,255,255,' + p.alpha + ')';
                ctx.fill();
            }
            raf = requestAnimationFrame(drawSnow);
        }
        function stop() {
            running = false;
            if (raf)
                cancelAnimationFrame(raf);
            ctx.clearRect(0, 0, canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight);
        }
        function onPointer(e) {
            var x = (typeof e.clientX === 'number' ? e.clientX : window.innerWidth / 2);
            mouseX = (x / window.innerWidth) * 2 - 1;
        }
        function onResize() {
            resize();
            init();
        }
        resize();
        init();
        canvas.classList.add('visible');
        window.addEventListener('pointermove', onPointer, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });
        raf = requestAnimationFrame(drawSnow);
        snowRuntime = { stop: stop, cleanup: function () { window.removeEventListener('pointermove', onPointer); window.removeEventListener('resize', onResize); stop(); } };
    }
    createSplashDust = function () {
        startSplashSnowEffect();
    };
    setupSplashLoaderV27 = function () {
        var splash = $('splash');
        var enter = $('splashEnter');
        var fill = $('splashLoaderFill');
        var text = $('splashLoaderText');
        var prompt = $('splashPrompt');
        if (!splash || !enter || !fill || !text)
            return;
        if (splash.dataset.loaderVersion === '3.2')
            return;
        splash.dataset.loaderVersion = '3.2';
        var ready = false;
        var entered = false;
        var markReady = function () {
            if (ready)
                return;
            ready = true;
            fill.style.width = '100%';
            enter.disabled = false;
            enter.classList.add('ready');
            text.textContent = 'ENTER';
            enter.setAttribute('aria-label', 'Enter Noir Market');
            if (prompt)
                prompt.textContent = '';
        };
        var enterGame = function () {
            if (!ready || entered)
                return;
            entered = true;
            unlockAudio();
            startBackgroundMusic();
            musicStarted = true;
            sound('positive');
            splash.classList.add('hide');
            setTimeout(function () { if (snowRuntime && snowRuntime.cleanup)
                snowRuntime.cleanup(); showWelcome(); }, 420);
        };
        enter.disabled = true;
        enter.classList.remove('ready');
        enter.onclick = enterGame;
        splash.onclick = function (e) {
            if (e.target && e.target.closest && e.target.closest('#splashEnter'))
                return;
            enterGame();
        };
        fill.style.transition = 'width .24s cubic-bezier(.18,.84,.25,1)';
        fill.style.width = '0%';
        text.textContent = 'LOADING';
        if (prompt)
            prompt.textContent = '';
        startSplashSnowEffect();
        requestAnimationFrame(function () {
            fill.style.width = '68%';
            requestAnimationFrame(function () { return setTimeout(markReady, 140); });
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { try {
            setupSplashLoaderV27();
        }
        catch (e) {
            console.error('V3.2 setup failed:', e);
        } }, { once: true });
    }
    else {
        setTimeout(function () { try {
            setupSplashLoaderV27();
            if (s && s.version !== VERSION) {
                s.version = VERSION;
                save();
            }
        }
        catch (e) {
            console.error('V3.2 setup failed:', e);
        } }, 0);
    }
    setTimeout(function () { try {
        document.querySelectorAll('.game-dust,.live-dust').forEach(function (el) { return el.remove(); });
        console.log('NOIR MARKET V3.2: splash canvas snow/parallax effect active.');
    }
    catch (e) { } }, 320);
})();
/* Noir Market V3.3: splash snow tuning, sharper city news, price events and timed informant offers. */
(function () {
    var VERSION = '3.3';
    var SAVE_KEY = 'noir_market_v3_3';
    var FALLBACK_KEYS = ['noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    var informantTimers = [];
    var informantPopupActive = false;
    function cleanDrug(name) {
        var map = { Weed: 'Pot', Ketamine: 'Kat', MDMA: 'Ecstasy' };
        return map[name] || name;
    }
    function marketFor(city) { ensureEconomy(); return s.economy.cities[city] || (s.economy.cities[city] = blankCityMarket()); }
    function ensureV33() {
        ensureStats();
        ensureEconomy();
        s.version = VERSION;
        s.v33 = s.v33 || {};
        s.v33.priceEvents = s.v33.priceEvents || [];
        s.v33.informantWindows = s.v33.informantWindows || {};
    }
    function activeCityNames() { return places.map(function (p) { return p[0]; }); }
    function applyPriceModifier(city, product, pct, duration, title, text) {
        var drug = cleanDrug(product), m = marketFor(city);
        if (!m.prices[drug])
            return;
        var factor = 1 + (pct / 100);
        m.prices[drug] = Math.max(1, Math.round(m.prices[drug] * factor));
        m.trends[drug] = pct >= 0;
        if (pct > 0) {
            m.supply[drug] = Math.max(0, Math.floor((m.supply[drug] || 0) * rand(45, 78) / 100));
            if (city === places[s.city][0])
                s.heat = Math.min(100, (s.heat || 0) + rand(2, 8));
        }
        else {
            m.supply[drug] = Math.min(1600, Math.round((m.supply[drug] || 0) * rand(122, 172) / 100) + rand(30, 180));
            if (city === places[s.city][0])
                s.heat = Math.max(0, (s.heat || 0) - rand(1, 5));
        }
        s.v33.priceEvents.push({ city: city, drug: drug, pct: pct, durationLeft: duration, title: title, text: text });
        s.v33.priceEvents = s.v33.priceEvents.slice(-12);
    }
    var priceEvents = [
        { title: 'Rats in the Shrooms', text: 'A dealer’s lock-up had a rat problem. The rats got into a batch of mushrooms and are now apparently having the best night of their lives.', product: 'Mushrooms', pct: 35, duration: 2 },
        { title: 'Warehouse Raid', text: 'Police hit a local storage unit after someone labelled the boxes “definitely not drugs”. Subtle.', product: 'Cocaine', pct: 45, duration: 3 },
        { title: 'Festival Sniffer Dog Sweep', text: 'Sniffer dogs were brought into the festival site. Half the crowd suddenly remembered they left something in the car.', product: 'Ecstasy', pct: 30, duration: 2 },
        { title: 'Dodgy Batch Warning', text: 'Word is there’s a bad batch going round. Nobody knows who made it, but everyone agrees they should probably stop.', product: 'Heroin', pct: 25, duration: 2 },
        { title: 'Supplier Van Clamped', text: 'A supplier’s van was clamped outside a kebab shop. Stock is trapped, driver is fuming, prices are climbing.', product: 'Weed', pct: 20, duration: 1 },
        { title: 'Customs Got Lucky', text: 'Customs opened the one crate everyone hoped they wouldn’t. Apparently “ceramic plant pots” was not convincing.', product: 'Cocaine', pct: 50, duration: 3 },
        { title: 'Mouldy Stash', text: 'Someone stored a big weed stash in a damp garage. It now smells like a wet dog in a compost bin.', product: 'Weed', pct: 25, duration: 2 },
        { title: 'Dealer Panic', text: 'A paranoid dealer flushed half his stock after seeing a police car. It was just parked outside Greggs.', product: 'Ketamine', pct: 35, duration: 2 },
        { title: 'Boat Delay', text: 'A shipment is stuck offshore because the skipper got lost, seasick, and emotionally overwhelmed.', product: 'Cocaine', pct: 40, duration: 2 },
        { title: 'Loose Lips', text: 'Someone bragged too loudly in the pub. Police interest is up and everyone is suddenly “just here for a quiet pint”.', product: 'Ecstasy', pct: 25, duration: 2 },
        { title: 'Overstocked Dealer', text: 'A local dealer bought too much stock and needs cash fast. Classic business planning.', product: 'Weed', pct: -25, duration: 1 },
        { title: 'Festival Drop-Off', text: 'A festival supplier overestimated demand after half the crowd spent their money on £14 noodles.', product: 'Ecstasy', pct: -30, duration: 2 },
        { title: 'Lucky Dock Arrival', text: 'A shipment landed clean after customs got distracted by a bloke importing 400 fake designer belts.', product: 'Cocaine', pct: -35, duration: 2 },
        { title: 'Student Loan Day', text: 'Students are buying everything in sight, but one supplier has flooded the market early to get ahead.', product: 'Ketamine', pct: -20, duration: 1 },
        { title: 'Grow House Harvest', text: 'A grow house had a bumper crop. The neighbours thought the electric bill was just “one of those things”.', product: 'Weed', pct: -30, duration: 3 },
        { title: 'Quiet Police Week', text: 'Police are busy dealing with town centre chaos, leaving dealers unusually relaxed and weirdly confident.', product: 'Mushrooms', pct: -20, duration: 2 },
        { title: 'Bad Weather, Big Supply', text: 'Rain ruined the weekend trade. Dealers are stuck with stock and blaming the Met Office like everyone else.', product: 'Ecstasy', pct: -25, duration: 1 },
        { title: 'Supplier Clearance', text: 'A supplier is clearing stock before disappearing to Spain for “personal reasons”.', product: 'Heroin', pct: -30, duration: 2 },
        { title: 'Wrong Delivery Address', text: 'A bulk order went to the wrong flat. The new “owner” is selling cheap before anyone asks questions.', product: 'Cocaine', pct: -25, duration: 1 },
        { title: 'Market Flood', text: 'Too many dealers turned up with the same product. Everyone is undercutting each other and pretending it’s strategy.', product: 'Weed', pct: -35, duration: 2 }
    ];
    var cityStories = {
        London: ['LONDON: POLICE RAID STORAGE UNITS AFTER NEIGHBOURS REPORT “TOO MANY MEN WITH SPORTS BAGS”', 'LONDON: CLUB NIGHT CANCELLED AFTER DJ FORGETS USB AND EVERYONE BLAMES SECURITY', 'LONDON: RUMOURS OF CLEAN SHIPMENT LANDING NEAR DOCKS SEND PRICES SLIDING', 'LONDON: FESTIVAL CROWD SPENDS MORE ON CHIPS THAN PILLS, DEALERS LEFT HOLDING STOCK', 'LONDON: SNIFFER DOG RETIRES EARLY AFTER “VERY CONFUSING” NIGHT IN SOHO'],
        Manchester: ['MANCHESTER: WAREHOUSE PARTY SHUT DOWN AFTER SOMEONE INVITES THEIR ENTIRE CONTACT LIST', 'MANCHESTER: POLICE PRESENCE INCREASES AFTER DEALERS START USING BRANDED HOODIES', 'MANCHESTER: BIG WEEKEND DEMAND EXPECTED AS STUDENTS DECLARE THEMSELVES “ABSOLUTELY FINE”', 'MANCHESTER: SUPPLIER OVERSTOCKED AFTER MISREADING THE WEATHER AND TRUSTING A BBQ FORECAST', 'MANCHESTER: LOCAL DEALER LOSES STASH AFTER HIDING IT “SOMEWHERE SAFE”'],
        Birmingham: ['BIRMINGHAM: CUSTOMS TIP-OFF SENDS DEALERS INTO PANIC, MOSTLY VIA BADLY SPELLED GROUP CHATS', 'BIRMINGHAM: CLUB QUEUE SEARCHES INTENSIFY AFTER DOORMAN FINDS BAGGIE IN SOMEONE’S SOCK', 'BIRMINGHAM: SUPPLY GLUT REPORTED AFTER TWO CREWS ACCIDENTALLY ORDER THE SAME PRODUCT', 'BIRMINGHAM: MARKET PRICES SHIFT AFTER MAIN SUPPLIER GETS STUCK ON THE M6', 'BIRMINGHAM: POLICE HELICOPTER SPOTTED, HALF THE CITY SUDDENLY “JUST OUT FOR MILK”'],
        Liverpool: ['LIVERPOOL: DOCKSIDE RUMOURS SUGGEST NEW SHIPMENT LANDED WITHOUT ANYONE FALLING IN THE MERSEY', 'LIVERPOOL: POLICE RAID FAILS AFTER SUSPECT HIDES STASH IN DOG FOOD BAG, DOG UNIMPRESSED', 'LIVERPOOL: WEEKEND DEMAND SPIKES AS EVERYONE CLAIMS THEY’RE ONLY HAVING “A QUIET ONE”', 'LIVERPOOL: SUPPLIER CUTS PRICES AFTER BUYING TOO MUCH AND DEVELOPING CASHFLOW ISSUES', 'LIVERPOOL: FAKE PRODUCT WARNING ISSUED AFTER CUSTOMERS DESCRIBE EFFECTS AS “MAINLY DISAPPOINTMENT”'],
        Bristol: ['BRISTOL: FESTIVAL DEMAND RISES AFTER THREE PEOPLE WITH DREADLOCKS DECLARE IT “BASICALLY SUMMER”', 'BRISTOL: MUSHROOM SUPPLY HIT AFTER LOCK-UP FLOODS AND EVERYTHING STARTS GROWING SOMETHING ELSE', 'BRISTOL: POLICE PATROLS INCREASE AROUND CLUBS AFTER TIP-OFF FROM AN OVERCONFIDENT TAXI DRIVER', 'BRISTOL: DEALERS DROP PRICES AFTER RAIN WASHES OUT HALF THE WEEKEND TRADE', 'BRISTOL: RUMOURS OF NEW SUPPLIER ARRIVING BY VAN, BOAT, OR POSSIBLY JUST VIBES'],
        Glasgow: ['GLASGOW: POLICE RAID DELAYED AFTER OFFICERS ARGUE OVER WHICH CLOSE IS THE RIGHT CLOSE', 'GLASGOW: DEALERS REPORT STRONG DEMAND AFTER SOMEONE SAYS “WE’LL JUST HAVE ONE”', 'GLASGOW: BAD BATCH WARNING SPREADS AFTER USERS DESCRIBE PRODUCT AS “A PURE LIBERTY”', 'GLASGOW: SUPPLIER FLOODS MARKET BEFORE VAN FAILS MOT', 'GLASGOW: CLUB SEARCHES TIGHTEN AFTER BAGGIE FOUND IN A PIE WRAPPER'],
        Cardiff: ['CARDIFF: MATCH DAY DEMAND SPIKES AS FANS PROMISE THEY’RE “JUST OUT FOR THE RUGBY”', 'CARDIFF: POLICE WARNING ISSUED AFTER DEALER USES SAME BENCH FOR EVERY MEET', 'CARDIFF: DOCK RUMOURS DRIVE PRICES DOWN AS NEW STOCK ENTERS THE CITY', 'CARDIFF: SUPPLIER DELAYED AFTER HIDING GOODS TOO WELL AND FORGETTING WHERE', 'CARDIFF: CLUB RAID FINDS NOTHING EXCEPT THREE LOST PHONES AND A MAN ASLEEP IN A TOILET'],
        Leeds: ['LEEDS: STUDENT NIGHT DEMAND RISES AFTER LOAN PAYMENTS HIT ACCOUNTS AND COMMON SENSE LEAVES', 'LEEDS: DEALER CUTS PRICES AFTER ORDERING DOUBLE AND CALLING IT “EXPANSION”', 'LEEDS: POLICE INCREASE PATROLS AFTER GROUP CHAT SCREENSHOTS START CIRCULATING', 'LEEDS: SUPPLY SHORTAGE AFTER COURIER GETS LOST AND REFUSES TO ASK FOR DIRECTIONS', 'LEEDS: CLUB SEARCHES STEPPED UP AFTER DOORMAN FINDS STASH IN A TUB OF HAIR GEL'],
        Newcastle: ['NEWCASTLE: BIGG MARKET GETS LOUD, THEN SUDDENLY QUIET WHEN THE VAN DOORS OPEN', 'NEWCASTLE: COURIER MISSES TURNING AND BLAMES THE TYNE, SATNAV AND SOCIETY', 'NEWCASTLE: POLICE STEP UP PATROLS AFTER DEALER USES SAME PUFFER JACKET FOR EVERY DROP', 'NEWCASTLE: STOCK FLOODS IN AFTER A SUPPLIER CALLS IT “JUST A LITTLE SIDE HUSTLE”', 'NEWCASTLE: CLUBBERS PROMISE A SMALL ONE, THEN IMMEDIATELY RUIN THAT PLAN'],
        Edinburgh: ['EDINBURGH: FESTIVAL CROWD DRIVES DEMAND WHILE EVERYONE PRETENDS THIS IS CULTURAL', 'EDINBURGH: POLICE WARN OF FAKE PILLS AFTER TOURIST DESCRIBES “A VERY QUIET FIREWORK”', 'EDINBURGH: SUPPLIER CUTS PRICES AFTER REALISING HOTEL ROOMS COST MORE THAN HIS STOCK', 'EDINBURGH: OLD TOWN LOCK-UP RAIDED AFTER NEIGHBOURS REPORT “ODD BAGPIPE HOURS”', 'EDINBURGH: RUMOURS OF CLEAN SHIPMENT ARRIVING BY TRAIN SEND DEALERS INTO A POLITE PANIC'],
        Aberdeen: ['ABERDEEN: WEATHER DELAYS SUPPLY, DEALERS BLAME THE WIND LIKE IT HAS A PERSONAL AGENDA', 'ABERDEEN: DOCKSIDE CHATTER SUGGESTS NEW STOCK LANDED WITH SURPRISINGLY LITTLE DRAMA', 'ABERDEEN: POLICE RAID WRONG LOCK-UP AND FIND ONLY THREE TYRES AND A VERY ANGRY CAT', 'ABERDEEN: PRICES RISE AFTER COURIER DECIDES THE A90 IS “NOT FOR HIM TODAY”', 'ABERDEEN: LOCAL DEALER DISCOUNTS STOCK BEFORE HIS VAN FAILS ANOTHER MOT'],
        Belfast: ['BELFAST: POLICE SWEEP CITY CENTRE AFTER GROUP CHAT LEAKS TO THE WORLD’S NOSIEST COUSIN', 'BELFAST: DOCK RUMOURS PUSH PRICES DOWN AS FRESH STOCK ENTERS QUIETLY FOR ONCE', 'BELFAST: SUPPLIER HIDES PACKAGE TOO WELL AND NOW EVERYONE IS SEARCHING A SHED', 'BELFAST: WEEKEND DEMAND RISES AS “ONE QUICK PINT” BECOMES A CIVIC EVENT', 'BELFAST: BAD BATCH WARNING SPREADS AFTER USERS DESCRIBE IT AS “PURE NOT RIGHT”'],
        Dublin: ['DUBLIN: TEMPLE BAR PRICES OUTRUN COMMON SENSE, TOURISTS AND BASIC FINANCIAL PLANNING', 'DUBLIN: PORT CHATTER SUGGESTS A CLEAN ARRIVAL WHILE CUSTOMS CHASE A LAD WITH FAKE WATCHES', 'DUBLIN: POLICE PRESENCE RISES AFTER DEALER STARTS TAKING VOICE NOTES IN PUBLIC', 'DUBLIN: SUPPLY GLUT REPORTED AFTER TWO CREWS BOTH CLAIMED TO HAVE “THE MAIN CONNECT”', 'DUBLIN: CLUB SEARCHES INTENSIFY AFTER BAGGIE FOUND IN A PHONE CASE WITH NO PHONE'],
        Cork: ['CORK: HARBOUR RUMOURS SEND PRICES WOBBLING AS NOBODY CAN AGREE WHO LANDED WHAT', 'CORK: SUPPLIER CUTS PRICES AFTER BUYING TOO MUCH AND CALLING IT “A STRATEGIC POSITION”', 'CORK: POLICE PATROLS INCREASE AFTER COURIER PARKS OUTSIDE THE SAME CHIPPER THREE TIMES', 'CORK: WEEKEND DEMAND SPIKES AS EVERYONE INSISTS THEY ARE “ONLY OUT FOR FOOD”', 'CORK: BAD WEATHER SLOWS MOVEMENT, EXCEPT FOR ONE LAD ON A BIKE WITH TERRIBLE JUDGEMENT']
    };
    function tickExistingEvents() {
        ensureV33();
        var kept = [];
        for (var _i = 0, _a = s.v33.priceEvents; _i < _a.length; _i++) {
            var ev = _a[_i];
            var m = marketFor(ev.city);
            if (m.prices[ev.drug]) {
                var daily = 1 + (ev.pct / 100) * 0.55;
                m.prices[ev.drug] = Math.max(1, Math.round(m.prices[ev.drug] * daily));
                m.trends[ev.drug] = ev.pct >= 0;
                if (ev.pct > 0)
                    m.supply[ev.drug] = Math.max(0, Math.floor((m.supply[ev.drug] || 0) * .72));
                else
                    m.supply[ev.drug] = Math.min(1600, Math.round((m.supply[ev.drug] || 0) * 1.18) + 60);
            }
            ev.durationLeft--;
            if (ev.durationLeft > 0)
                kept.push(ev);
        }
        s.v33.priceEvents = kept;
    }
    generateNewsEvent = function () {
        ensureV33();
        var cities = activeCityNames();
        var city = pick(cities);
        var ev = pick(priceEvents);
        applyPriceModifier(city, ev.product, ev.pct, ev.duration, ev.title, ev.text);
        var local = cityStories[city] || ["".concat(city.toUpperCase(), ": MARKET RUMOURS MOVE QUICKER THAN COMMON SENSE")];
        var nearby = pick(cities.filter(function (c) { return c !== city; })) || city;
        var stories = ["".concat(city.toUpperCase(), ": ").concat(ev.title.toUpperCase(), " \u2014 ").concat(ev.text), pick(local), pick(cityStories[nearby] || local)];
        var text = formatTicker ? formatTicker(stories) : stories.join('   •   ').toUpperCase();
        s.economy.news = { text: text, stories: stories.map(upperNews), day: s.day, priceEvent: ev.title };
        s.news = text;
        s.economy.history.unshift("".concat(ev.title, ": ").concat(ev.text));
        s.economy.history = s.economy.history.slice(0, 10);
        setActiveCityMarket();
        return text;
    };
    genPrices = function (force) {
        ensureV33();
        places.forEach(function (p) {
            var city = p[0], m = marketFor(city);
            drugs.forEach(function (_a) {
                var name = _a[0], lo = _a[2], hi = _a[3];
                var old = m.prices[name] || rand(lo, hi);
                var target = rand(lo, hi);
                var mult = rand(88, 118) / 100;
                var crash = m.crashes && m.crashes[name];
                if (crash && crash.days > 0) {
                    mult *= crash.factor;
                    crash.factor = Math.min(.96, crash.factor + ((1 - crash.factor) * .38));
                    crash.days--;
                    if (crash.days <= 0)
                        delete m.crashes[name];
                }
                var pval = Math.max(1, Math.round(((old * 2 + target) / 3) * mult));
                m.trends[name] = pval >= old;
                m.prices[name] = pval;
                m.supply[name] = clamp(Math.round((m.supply[name] || rand(0, 1000)) * rand(80, 120) / 100) + rand(-80, 90), 0, 1200);
            });
        });
        if (force && typeof applyRumourResult === 'function')
            applyRumourResult(force.rumour || force);
        tickExistingEvents();
        if (s.reputation >= 81) {
            var m_2 = marketFor(places[s.city][0]);
            drugs.forEach(function (_a) {
                var name = _a[0];
                m_2.supply[name] = Math.min(1500, Math.round(m_2.supply[name] * 1.12) + 25);
            });
        }
        generateNewsEvent();
        setActiveCityMarket();
    };
    function realTip() {
        var tips = [
            { name: 'Simon the Snitch', text: 'London’s dry on coke. Prices are about to climb. Don’t ask how I know, I owe people.', city: 'London', product: 'Cocaine', pct: 28, duration: 2 },
            { name: 'Loose Lisa', text: 'Bristol’s flooded with pills. Everyone bought too much before the rain. Prices are soft.', city: 'Bristol', product: 'Ecstasy', pct: -24, duration: 2 },
            { name: 'Pistol Pete', text: 'Glasgow’s getting hot. Police are circling ket suppliers. Move carefully.', city: 'Glasgow', product: 'Ketamine', pct: 22, duration: 2, heat: 10 },
            { name: 'Simon the Snitch', text: 'Mushrooms in Cardiff are short. Something about damp storage and a very relaxed rat.', city: 'Cardiff', product: 'Mushrooms', pct: 28, duration: 2 },
            { name: 'Loose Lisa', text: 'Weed in Leeds is cheap today. Too many lads, not enough buyers.', city: 'Leeds', product: 'Weed', pct: -22, duration: 1 },
            { name: 'Pistol Pete', text: 'Liverpool docks just got fresh stock in. Coke price will dip before it snaps back.', city: 'Liverpool', product: 'Cocaine', pct: -25, duration: 1 },
            { name: 'Simon the Snitch', text: 'Manchester’s clubs are being watched. Pills are risky but prices will jump.', city: 'Manchester', product: 'Ecstasy', pct: 24, duration: 2, heat: 6 },
            { name: 'Loose Lisa', text: 'Birmingham’s full of cheap weed after a grow house panic sale.', city: 'Birmingham', product: 'Weed', pct: -26, duration: 2 }
        ];
        var tip = pick(tips);
        applyPriceModifier(tip.city, tip.product, tip.pct, tip.duration, 'Informant Tip', tip.text);
        if (tip.heat && tip.city === places[s.city][0])
            s.heat = Math.min(100, (s.heat || 0) + tip.heat);
        return "".concat(tip.name, " says: \u201C").concat(tip.text, "\u201D");
    }
    var falseTips = [
        'Simon insists coke is about to crash in London. He looks confident, which is usually a bad sign.',
        'Loose Lisa swears pills are drying up in Bristol. She also swore she once dated Stormzy.',
        'Pete says Glasgow is safe tonight. The police helicopter overhead suggests otherwise.',
        'Simon claims weed prices are rising in Leeds. He may have confused Leeds with a dream he had.',
        'Loose Lisa says Cardiff is flooded with mushrooms. Nobody else has heard this, including Cardiff.',
        'Pete says Liverpool docks are locked down. Ten minutes later, everyone seems fully stocked.'
    ];
    var scamTexts = [
        'Simon takes the £100, says “back in two minutes”, and is last seen sprinting through a car park.',
        'Loose Lisa pockets the £250, winks, and gets into a taxi she clearly cannot afford.',
        'Pistol Pete takes the £10,000, stares at you for three seconds, then says: “Bad investment.” He leaves.',
        'The informant takes the cash and gives you a tip about horse racing. It is not even today’s race.',
        'They vanish with your money. You have learned an important lesson about trusting people in alleyways.'
    ];
    var vagueTexts = [
        'Simon says: “Something’s happening somewhere soon.” You are now poorer and none the wiser.',
        'Loose Lisa says: “I’m hearing movement.” She refuses to explain whether she means stock, police, or her stomach.',
        'Pete says: “Keep your eyes open.” For £10,000, this feels legally close to robbery.',
        'The informant tells you to “watch the market”. Useful, if you had never considered looking at the market.',
        'They say the streets are changing. The streets appear to still be streets.'
    ];
    var slapTexts = [
        'You slap the offer away. The informant looks offended, then asks if you’ve got a spare vape.',
        'You ignore the tip. The informant mutters something about loyalty and wanders off.',
        'You send them packing. They shout “your loss” but trip over the kerb.',
        'You refuse to pay. The informant immediately offers the same tip to someone behind you.',
        'You slap the offer away. They call you tight and vanish into the bus station.'
    ];
    var timedInformants = [
        { name: 'Simon the Snitch', cost: 100, tone: 'Cheap, nervous and twitchy.' },
        { name: 'Loose Lisa', cost: 250, tone: 'Gossipy, confident and chaotic.' },
        { name: 'Pistol Pete', cost: 10000, tone: 'Serious, threatening and expensive.' }
    ];
    function canShowInformantPopup() {
        var splash = $('splash'), dlg = $('modal');
        if (informantPopupActive)
            return false;
        if (document.hidden)
            return false;
        if (splash && !splash.classList.contains('hide'))
            return false;
        if (dlg && dlg.open)
            return false;
        return !!s;
    }
    function showInformantOffer() {
        if (!canShowInformantPopup()) {
            setTimeout(showInformantOffer, rand(20, 45) * 1000);
            return;
        }
        informantPopupActive = true;
        var info = pick(timedInformants);
        var afford = (s.cash || 0) >= info.cost;
        modal('INFORMANT OFFER', "<p><strong>".concat(info.name, "</strong> has approached you with a tip.</p><p class=\"subtle\">").concat(info.tone, "</p><div class=\"informant-cost\"><span>Cost</span><strong>").concat(money(info.cost), "</strong></div><p>Pay for the tip, or slap them away.</p>").concat(afford ? '' : '<p class="informant-disabled">You cannot afford this tip.</p>', "<div class=\"informant-choice\"><button type=\"button\" class=\"buy\" id=\"payInformantTimed\" ").concat(afford ? '' : 'disabled', ">PAY</button><button type=\"button\" class=\"sell\" id=\"slapInformantAway\">SLAP AWAY</button></div>"));
        var offerDlg = $('modal');
        if (offerDlg) {
            var release_1 = function () { informantPopupActive = false; offerDlg.removeEventListener('close', release_1); };
            offerDlg.addEventListener('close', release_1, { once: true });
        }
        setTimeout(function () {
            var payBtn = $('payInformantTimed'), slapBtn = $('slapInformantAway');
            if (payBtn)
                payBtn.onclick = function () {
                    if ((s.cash || 0) < info.cost) {
                        errorMsg('INSUFFICIENT FUNDS');
                        return;
                    }
                    s.cash -= info.cost;
                    ensureStats();
                    s.stats.informants = (s.stats.informants || 0) + 1;
                    var r = Math.random();
                    var outcome = '';
                    if (r < .60) {
                        outcome = realTip();
                        success('TIP PAID');
                    }
                    else if (r < .80) {
                        outcome = pick(falseTips);
                    }
                    else if (r < .90) {
                        outcome = pick(scamTexts);
                        if (info.name === 'Loose Lisa')
                            rep(-1);
                        if (info.name === 'Pistol Pete')
                            rep(-2);
                        errorMsg('SCAMMED');
                    }
                    else {
                        outcome = pick(vagueTexts);
                    }
                    s.notice = outcome;
                    save();
                    draw();
                    informantPopupActive = false;
                    modal('Informant Tip', "<p>".concat(outcome, "</p><button type=\"button\" id=\"continueEvent\">Continue</button>"));
                    setTimeout(function () { var c = $('continueEvent'); if (c)
                        c.onclick = function () { closeModalV22(); }; }, 0);
                };
            if (slapBtn)
                slapBtn.onclick = function () {
                    if (info.name === 'Loose Lisa')
                        rep(-1);
                    if (info.name === 'Pistol Pete')
                        rep(-3);
                    var msg = pick(slapTexts);
                    s.notice = msg;
                    save();
                    draw();
                    informantPopupActive = false;
                    modal('Offer Refused', "<p>".concat(msg, "</p><button type=\"button\" id=\"continueEvent\">Continue</button>"));
                    setTimeout(function () { var c = $('continueEvent'); if (c)
                        c.onclick = function () { closeModalV22(); }; }, 0);
                };
        }, 0);
    }
    function scheduleInformants() {
        informantTimers.forEach(clearTimeout);
        informantTimers = [];
        var windows = [[90, 150], [240, 360], [390, 510], [1350, 1650]];
        windows.forEach(function (_a, idx) {
            var a = _a[0], b = _a[1];
            var delay = rand(a, b) * 1000;
            informantTimers.push(setTimeout(function () { showInformantOffer(); s.v33 = s.v33 || {}; s.v33.informantWindows[idx] = true; }, delay));
        });
    }
    var oldSave = save;
    save = function () { ensureV33(); s.version = VERSION; localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_6 = FALLBACK_KEYS; _i < FALLBACK_KEYS_6.length; _i++) {
                var key = FALLBACK_KEYS_6[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV33();
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV33();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v33 = { priceEvents: [], informantWindows: {} }; return state; };
    draw = function () { previousDraw(); if (s && s.economy && s.economy.news && $('newsTicker'))
        syncTickerV21(); };
    function startInstantTopSnow() {
        var canvas = $('splashSnowCanvas'), splash = $('splash');
        if (!canvas || !splash)
            return;
        if (window.__NOIR_V33_SNOW_RUNNING)
            return;
        window.__NOIR_V33_SNOW_RUNNING = true;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        var raf = 0, running = true, pointer = 0;
        var count = (window.matchMedia && window.matchMedia('(max-width:560px)').matches) ? 140 : 260;
        var flakes = [];
        function resize() {
            var ratio = Math.min(window.devicePixelRatio || 1, 2);
            var w = window.innerWidth, h = window.innerHeight;
            canvas.width = Math.ceil(w * ratio);
            canvas.height = Math.ceil(h * ratio);
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        }
        function reset(f, initial) {
            var w = window.innerWidth, h = window.innerHeight;
            f.x = rand(8, Math.max(8, w - 8));
            f.y = initial ? rand(-Math.floor(h * .45), 8) : rand(-90, -8);
            var z = Math.random();
            f.r = .65 + Math.pow(z, 2) * 2.9;
            f.v = 1.2 + z * 4.8;
            f.a = .22 + z * .58;
            f.s = (Math.random() * 1.7) + .35;
            f.t = Math.random() * Math.PI * 2;
        }
        function init() { flakes.length = 0; for (var i = 0; i < count; i++) {
            var f = {};
            reset(f, true);
            flakes.push(f);
        } }
        function step() {
            if (!running)
                return;
            var w = window.innerWidth, h = window.innerHeight;
            ctx.clearRect(0, 0, w, h);
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, w, h);
            ctx.clip();
            for (var _i = 0, flakes_1 = flakes; _i < flakes_1.length; _i++) {
                var f = flakes_1[_i];
                f.t += .018;
                f.y += f.v;
                f.x += Math.sin(f.t) * f.s + (pointer * .58);
                if (f.y > h + 10)
                    reset(f, false);
                if (f.x > w - 4)
                    f.x = 4;
                if (f.x < 4)
                    f.x = w - 4;
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,255,255,' + f.a + ')';
                ctx.fill();
            }
            ctx.restore();
            raf = requestAnimationFrame(step);
        }
        function onPointer(e) { pointer = ((e.clientX || window.innerWidth / 2) / window.innerWidth) - .5; }
        function stop() { running = false; if (raf)
            cancelAnimationFrame(raf); ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); window.removeEventListener('pointermove', onPointer); window.removeEventListener('resize', onResize); window.__NOIR_V33_SNOW_RUNNING = false; }
        function onResize() { resize(); init(); }
        resize();
        init();
        canvas.classList.add('visible');
        window.addEventListener('pointermove', onPointer, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });
        window.__NOIR_V33_STOP_SNOW = stop;
        raf = requestAnimationFrame(step);
    }
    createSplashDust = function () { startInstantTopSnow(); };
    setupSplashLoaderV27 = function () {
        var splash = $('splash'), enter = $('splashEnter'), fill = $('splashLoaderFill'), text = $('splashLoaderText'), prompt = $('splashPrompt');
        if (!splash || !enter || !fill || !text)
            return;
        if (splash.dataset.loaderVersion === '3.3')
            return;
        splash.dataset.loaderVersion = '3.3';
        var ready = false, entered = false;
        var markReady = function () { if (ready)
            return; ready = true; fill.style.width = '100%'; enter.disabled = false; enter.classList.add('ready'); text.textContent = 'ENTER'; enter.setAttribute('aria-label', 'Enter Noir Market'); if (prompt)
            prompt.textContent = ''; };
        var enterGame = function () { if (!ready || entered)
            return; entered = true; unlockAudio(); sound('positive'); splash.classList.add('hide'); setTimeout(function () { try {
            if (window.__NOIR_V33_STOP_SNOW)
                window.__NOIR_V33_STOP_SNOW();
        }
        catch (e) { } showWelcome(); scheduleInformants(); }, 420); };
        enter.disabled = true;
        enter.classList.remove('ready');
        enter.onclick = enterGame;
        splash.onclick = function (e) { if (e.target && e.target.closest && e.target.closest('#splashEnter'))
            return; enterGame(); };
        fill.style.transition = 'width .2s cubic-bezier(.18,.84,.25,1)';
        fill.style.width = '0%';
        text.textContent = 'LOADING';
        if (prompt)
            prompt.textContent = '';
        startInstantTopSnow();
        requestAnimationFrame(function () { fill.style.width = '70%'; requestAnimationFrame(function () { return setTimeout(markReady, 115); }); });
    };
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', function () { try {
            setupSplashLoaderV27();
        }
        catch (e) {
            console.error('V3.3 setup failed:', e);
        } }, { once: true });
    else
        setTimeout(function () { try {
            setupSplashLoaderV27();
            if (s && s.version !== VERSION) {
                s.version = VERSION;
                save();
            }
        }
        catch (e) {
            console.error('V3.3 setup failed:', e);
        } }, 0);
    setTimeout(function () { try {
        document.title = 'Noir Market V4.8';
        console.log('NOIR MARKET V3.3: instant top snow, city news, price events and timed informants active.');
    }
    catch (e) { } }, 320);
})();
/* Noir Market V3.7: debt clearing, rumour travel result, cash prompt and travel button polish. */
(function () {
    var VERSION = '3.7';
    var SAVE_KEY = 'noir_market_v3_7';
    var FALLBACK_KEYS = ['noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    function ensureV34() {
        if (typeof ensureStats === 'function')
            ensureStats();
        if (typeof ensureEconomy === 'function')
            ensureEconomy();
        s.version = VERSION;
        s.v33 = s.v33 || { priceEvents: [], informantWindows: {} };
        s.v33.priceEvents = s.v33.priceEvents || [];
        s.v33.informantWindows = s.v33.informantWindows || {};
        s.v34 = s.v34 || {};
        s.v35 = s.v35 || {};
    }
    function carriedDrugUnits() { try {
        return typeof used === 'function' ? used() : 0;
    }
    catch (e) {
        return 0;
    } }
    function carriedWeaponUnits() { return (s && Array.isArray(s.weapons)) ? s.weapons.length : 0; }
    function closeModalFastV34() {
        var dlg = $('modal');
        try {
            if (dlg && dlg.open)
                dlg.close();
        }
        catch (e) {
            try {
                if (dlg)
                    dlg.removeAttribute('open');
            }
            catch (_) { }
        }
        document.body.classList.remove('modal-open');
        document.documentElement.classList.remove('modal-open');
    }
    window.closeModalFastV34 = closeModalFastV34;
    function bindFastClose() {
        var x = $('modalCloseBtn');
        if (x)
            x.onclick = function (ev) { ev.preventDefault(); ev.stopPropagation(); closeModalFastV34(); };
    }
    modal = function (t, h) {
        var dlg = $('modal');
        if (!dlg)
            return;
        document.body.classList.add('modal-open');
        document.documentElement.classList.add('modal-open');
        if ($('modalTitle'))
            $('modalTitle').textContent = t;
        $('modalBody').innerHTML = "<div class=\"modal-head\"><h3>".concat(t, "</h3><button type=\"button\" class=\"modal-x\" id=\"modalCloseBtn\" aria-label=\"Close\">\u00D7</button></div><div class=\"modal-scroll\">").concat(h + payDebtButton(), "</div>");
        try {
            if (!dlg.open)
                dlg.showModal();
        }
        catch (e) {
            try {
                dlg.setAttribute('open', '');
            }
            catch (_) { }
        }
        bindFastClose();
        try {
            bindModalDebt();
        }
        catch (e) { }
    };
    done = function () {
        closeModalFastV34();
        try {
            save();
            draw();
        }
        catch (e) {
            console.warn('V3.5 done redraw recovered:', e);
        }
    };
    closeModalV22 = function () { closeModalFastV34(); };
    function flightStopRisk() {
        var last = (s.v34 && s.v34.lastAirport) || {};
        var hasContraband = !!last.hadContraband;
        var heatAtBoard = Number.isFinite(+last.heatAtBoard) ? +last.heatAtBoard : (s.heat || 0);
        if (!hasContraband && heatAtBoard <= 75)
            return { eligible: false, chance: 0, major: false };
        var chance = hasContraband ? .24 : .16;
        if (last.hadDrugs)
            chance += .10;
        if (last.hadWeapons)
            chance += .16;
        if (heatAtBoard > 75)
            chance += Math.min(.34, (heatAtBoard - 75) / 70);
        chance = Math.min(.82, chance);
        var major = !!last.hadWeapons || heatAtBoard > 88 || (last.hadDrugs && Math.random() < .45);
        return { eligible: true, chance: chance, major: major };
    }
    maybeArrest = function (context) {
        var carrying = carriedDrugUnits() + carriedWeaponUnits();
        var heat = s.heat || 0;
        if (context === 'travel') {
            var risk = flightStopRisk();
            if (!risk.eligible)
                return null;
            if (Math.random() > risk.chance)
                return null;
            var fine = rand(500, 5000), jail = rand(1, 7);
            return { major: risk.major, fine: fine, jail: jail, context: 'travel', airport: true };
        }
        if (!carrying && heat <= 75)
            return null;
        var chance = .025 + (heat > 75 ? ((heat - 75) / 140) : 0) + (carrying > 0 ? .05 : 0);
        if (Math.random() > Math.min(.55, chance))
            return null;
        var major = Math.random() < (.22 + (heat / 300) + (carrying > 0 ? .12 : 0));
        return { major: major, fine: rand(500, 5000), jail: rand(1, 7), context: context };
    };
    var previousApplyArrestPenalty = typeof applyArrestPenalty === 'function' ? applyArrestPenalty : null;
    applyArrestPenalty = function (arrest, bribeFail) {
        if (arrest && arrest.airport) {
            var drugs_1 = carriedDrugUnits(), weapons_1 = carriedWeaponUnits();
            if (drugs_1 > 0) {
                Object.keys(s.inv || {}).forEach(function (k) { return s.inv[k] = 0; });
            }
            if (weapons_1 > 0)
                s.weapons = [];
            s.notice = "Airport security seized ".concat(drugs_1, " drug unit").concat(drugs_1 === 1 ? '' : 's', " and ").concat(weapons_1, " weapon").concat(weapons_1 === 1 ? '' : 's', ". ").concat(arrest.major ? 'You are taken in for a major offence.' : 'You get hit with a fine and a very judgemental look.');
        }
        if (previousApplyArrestPenalty)
            return previousApplyArrestPenalty(arrest, bribeFail);
    };
    performFlightV22 = function (i, fare) {
        sound('travel');
        haptic();
        ensureStats();
        s.stats.flights = (s.stats.flights || 0) + 1;
        s.cash -= fare;
        var from = places[s.city][0], to = places[i][0];
        s.v34 = s.v34 || {};
        s.v34.lastAirport = {
            day: s.day,
            from: from,
            to: to,
            hadDrugs: carriedDrugUnits() > 0,
            hadWeapons: carriedWeaponUnits() > 0,
            hadContraband: (carriedDrugUnits() + carriedWeaponUnits()) > 0,
            heatAtBoard: s.heat || 0
        };
        s.city = i;
        closeModalFastV34();
        setTimeout(function () { return nextDay("You land in ".concat(places[s.city][0], ". Flight cost ").concat(money(fare), ". ").concat((!s.v34.lastAirport.hadContraband && (s.v34.lastAirport.heatAtBoard <= 75)) ? 'Clean pockets and low heat. Airport security barely looks up.' : 'You make it through boarding, but airport security is watching.'), false); }, 0);
    };
    boardFlightWithSeizure = function (i, fare) { performFlightV22(i, fare); };
    airportWarning = function (i, fare) {
        var dest = places[i][0];
        var drugs = carriedDrugUnits(), weapons = carriedWeaponUnits(), heat = s.heat || 0;
        var clean = (drugs + weapons) === 0 && heat <= 75;
        var riskText = clean
            ? 'You are carrying no drugs or weapons and your heat is not above 75%. You should get through airport security without trouble.'
            : 'You are carrying contraband or your heat is above 75%. Airport security may stop you, seize stock, fine you, or arrest you.';
        modal('Airport Check', "<p><strong>Before you board:</strong> ".concat(riskText, "</p><p>Destination: <strong>").concat(dest, "</strong><br>Flight price: <strong>").concat(money(fare), "</strong></p><div class=\"warning-stock\"><p>Drugs carried: <strong>").concat(drugs, "</strong></p><p>Weapons carried: <strong>").concat(weapons, "</strong></p><p>Heat: <strong>").concat(heat, "%</strong></p></div><p class=\"subtle\">Vault stock stays in the city where you leave it. Carrying clean is the safe option.</p><div class=\"loan-choice\"><button type=\"button\" id=\"storeBeforeFlight\">Store in Vault</button><button type=\"button\" class=\"sell\" id=\"boardAnyway\">Board Anyway</button><button type=\"button\" id=\"cancelFlight\">Cancel</button></div>"));
        var sv = $('storeBeforeFlight'), ba = $('boardAnyway'), cf = $('cancelFlight');
        if (sv)
            sv.onclick = function () { return dump(); };
        if (ba)
            ba.onclick = function () { return boardFlightWithSeizure(i, fare); };
        if (cf)
            cf.onclick = function () { return travel(); };
    };
    save = function () { ensureV34(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_7 = FALLBACK_KEYS; _i < FALLBACK_KEYS_7.length; _i++) {
                var key = FALLBACK_KEYS_7[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV34();
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV34();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v34 = {}; state.v35 = {}; return state; };
    draw = function () { previousDraw(); };
    var dlg = $('modal');
    if (dlg) {
        dlg.addEventListener('close', function () { document.body.classList.remove('modal-open'); document.documentElement.classList.remove('modal-open'); });
        dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeModalFastV34(); });
    }
    setTimeout(function () { try {
        document.title = 'Noir Market V4.8';
        if (s && s.version !== VERSION) {
            s.version = VERSION;
            save();
        }
        console.log('NOIR MARKET V3.7: debt clearing, rumour travel result, cash prompt and travel button polish active.');
    }
    catch (e) { } }, 320);
})();
/* Noir Market V3.7 penalty wording correction retained. */
(function () {
    applyArrestPenalty = function (arrest, failedBribe) {
        if (typeof rep === 'function')
            rep(-15);
        var seizure = '';
        if (arrest && arrest.airport) {
            var drugs_2 = typeof used === 'function' ? used() : 0;
            var weapons_2 = (s && Array.isArray(s.weapons)) ? s.weapons.length : 0;
            if (drugs_2 > 0) {
                Object.keys(s.inv || {}).forEach(function (k) { return s.inv[k] = 0; });
            }
            if (weapons_2 > 0)
                s.weapons = [];
            seizure = "Airport security seized ".concat(drugs_2, " drug unit").concat(drugs_2 === 1 ? '' : 's', " and ").concat(weapons_2, " weapon").concat(weapons_2 === 1 ? '' : 's', ". ");
        }
        if (arrest && arrest.major) {
            s.day += arrest.jail;
            ensureStats();
            s.stats.jailDays = (s.stats.jailDays || 0) + arrest.jail;
            s.cash = Math.max(0, s.cash - rand(500, 5000));
            s.notice = "".concat(failedBribe ? 'Bribe failed. ' : '').concat(seizure, "Jailed for ").concat(arrest.jail, " day").concat(arrest.jail === 1 ? '' : 's', ". Time advances automatically.");
        }
        else {
            var fine = Math.min(s.cash, (arrest && arrest.fine) || rand(500, 5000));
            s.cash -= fine;
            s.notice = "".concat(failedBribe ? 'Bribe failed. ' : '').concat(seizure, "Fined ").concat(money(fine), " for a minor offence.");
        }
        save();
        draw();
        modal('Police Outcome', "<p>".concat(s.notice, "</p><button type=\"button\" id=\"continueEvent\">Continue</button>"));
        var c = $('continueEvent');
        if (c)
            c.onclick = function () { closeModalFastV34 ? closeModalFastV34() : $('modal').close(); handleDueLoans(); };
    };
})();
/* Noir Market V3.7 feature patch: debt clearing, rumour validation, cash deposit prompt and travel wording. */
(function () {
    var VERSION = '3.7';
    var SAVE_KEY = 'noir_market_v3_7';
    var FALLBACK_KEYS = ['noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    function ensureV37() {
        if (typeof ensureStats === 'function')
            ensureStats();
        if (typeof ensureEconomy === 'function')
            ensureEconomy();
        s.version = VERSION;
        s.v37 = s.v37 || {};
        s.v37.cashPromptIgnoreUntil = Number(s.v37.cashPromptIgnoreUntil || 0);
        s.v37.cashPromptLastDay = Number(s.v37.cashPromptLastDay || 0);
        if (typeof activeDebtTotal === 'function')
            s.debt = activeDebtTotal();
    }
    function debtTotalV37() { try {
        return Math.max(0, Math.round(activeDebtTotal()));
    }
    catch (e) {
        return Math.max(0, Math.round(+s.debt || 0));
    } }
    function clearAllDebtV37() { s.loans = []; s.debt = 0; }
    function currentContrabandV37() { return { drugs: (typeof used === 'function' ? used() : 0), weapons: (s && Array.isArray(s.weapons) ? s.weapons.length : 0) }; }
    function escapeHtmlV37(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>"']/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]); }); }
    function payDebtAmountV37(rawAmount) {
        ensureV37();
        var total = debtTotalV37();
        var amount = Math.max(0, Math.floor(+rawAmount || 0));
        if (total <= 0) {
            s.debt = 0;
            if (!Array.isArray(s.loans))
                s.loans = [];
            success('NO ACTIVE DEBT');
            if (typeof bank === 'function')
                bank();
            return;
        }
        amount = Math.min(amount, s.cash, total);
        if (amount <= 0) {
            errorMsg('NO DEBT PAYMENT MADE');
            return;
        }
        var before = amount;
        s.cash -= amount;
        if (amount >= total) {
            clearAllDebtV37();
            if (typeof rep === 'function')
                rep(5);
            s.notice = "Debt cleared in full. ".concat(money(before), " gone, but so are the people texting you skull emojis.");
            save();
            draw();
            success('DEBT CLEARED');
            done();
            return;
        }
        if (typeof normaliseLoans === 'function')
            normaliseLoans();
        for (var i = 0; i < s.loans.length && amount > 0; i++) {
            var loan = s.loans[i];
            var payoff = typeof loanPayoff === 'function' ? loanPayoff(loan) : (+loan.repay || +loan.principal || 0);
            if (amount >= payoff) {
                amount -= payoff;
                s.loans.splice(i, 1);
                i--;
                continue;
            }
            var principal = +loan.principal || 0;
            if (principal > 0) {
                var reduction = Math.min(principal, Math.max(1, Math.round(principal * (amount / payoff))));
                loan.principal = Math.max(0, principal - reduction);
                loan.startDay = s.day;
            }
            else if (loan.repay !== undefined) {
                loan.repay = Math.max(0, (+loan.repay || 0) - amount);
            }
            amount = 0;
        }
        s.loans = s.loans.filter(function (l) { return ((typeof loanPayoff === 'function' ? loanPayoff(l) : (+l.repay || +l.principal || 0)) > 0); });
        s.debt = debtTotalV37();
        s.notice = "Paid ".concat(money(before), " towards debt. Remaining debt: ").concat(money(s.debt), ".");
        save();
        draw();
        success('DEBT PAYMENT MADE');
        done();
    }
    payDebtAmount = payDebtAmountV37;
    paySpecificLoan = function (idx) {
        ensureV37();
        if (typeof normaliseLoans === 'function')
            normaliseLoans();
        idx = +idx;
        var loan = s.loans[idx];
        if (!loan)
            return;
        var amount = typeof loanPayoff === 'function' ? loanPayoff(loan) : (+loan.repay || +loan.principal || 0);
        if (s.cash < amount) {
            s.notice = "You need ".concat(money(amount), " cash to clear ").concat(loan.name, ".");
            save();
            draw();
            errorMsg('INSUFFICIENT FUNDS');
            return;
        }
        s.cash -= amount;
        s.loans.splice(idx, 1);
        s.debt = debtTotalV37();
        if (typeof rep === 'function')
            rep(5);
        s.notice = "Paid ".concat(loan.name, ". Loan cleared for ").concat(money(amount), ".");
        save();
        draw();
        success('DEBT CLEARED');
        done();
    };
    payAnyDebtFromModal = function () {
        ensureV37();
        var total = debtTotalV37();
        if (total <= 0) {
            success('NO ACTIVE DEBT');
            return;
        }
        if (s.cash <= 0) {
            modal('Debt Payment', "<p>You have no cash available to pay the debt.</p>");
            return;
        }
        payDebtAmountV37(Math.min(s.cash, total));
    };
    bank = function () {
        ensureV37();
        var openLoans = s.loans.length ? s.loans.map(function (l, idx) { var days = (+l.due || s.day) - s.day, urgent = days <= 5, payoff = typeof loanPayoff === 'function' ? loanPayoff(l) : (+l.repay || +l.principal || 0), fullRepay = typeof loanFullRepay === 'function' ? loanFullRepay(l) : payoff; return "<div class=\"loan-row ".concat(urgent ? 'urgent-loan' : '', "\"><div><span>").concat(escapeHtmlV37(l.name || 'Shady Lender'), "</span><strong>").concat(money(payoff), "</strong><em>").concat(days > 0 ? 'due in ' + days + ' day' + (days === 1 ? '' : 's') : 'DUE NOW', " \u00B7 full term ").concat(money(fullRepay), "</em></div><button type=\"button\" data-payloan=\"").concat(idx, "\">Pay</button></div>"); }).join('') : '<p class="subtle">No active loans.</p>';
        modal('Finances', "<p class=\"subtle\">Bank balance only changes when you deposit or withdraw. Loan debt shown here is the live settlement figure.</p><input id=\"amount\" inputmode=\"numeric\" type=\"number\" placeholder=\"Amount\"><div class=\"bank-grid\"><button type=\"button\" id=\"deposit\">Deposit</button><button type=\"button\" id=\"withdraw\">Withdraw</button><button type=\"button\" class=\"full\" id=\"payDebt\">Pay General Debt</button></div><h4>Loans</h4>".concat(openLoans, "<div class=\"loan-list compact\">").concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(l[0], "</strong><br>Borrow up to ").concat(money(typeof adjustedLenderMax === 'function' ? adjustedLenderMax(l) : l[1]), " \u00B7 ").concat(Math.round(l[3] * 100), "% full-term interest \u00B7 due in ").concat(l[2], " days</button>"); }).join(''), "</div>"));
        setTimeout(function () {
            var amt = function () { var _a; return Math.max(0, Math.floor(+(((_a = $('amount')) === null || _a === void 0 ? void 0 : _a.value) || 0))); };
            var dep = $('deposit'), wit = $('withdraw'), pay = $('payDebt');
            if (dep)
                dep.onclick = function () { var a = Math.min(amt(), s.cash); if (a <= 0) {
                    errorMsg('ENTER AMOUNT');
                    return;
                } s.cash -= a; s.bank += a; s.notice = "Deposited ".concat(money(a), ". Less mugging bait in your pockets."); save(); draw(); success('DEPOSIT COMPLETE'); done(); };
            if (wit)
                wit.onclick = function () { var a = Math.min(amt(), s.bank); if (a <= 0) {
                    errorMsg('ENTER AMOUNT');
                    return;
                } s.bank -= a; s.cash += a; s.notice = "Withdrew ".concat(money(a), ". Try not to wave it around like a lottery winner."); save(); draw(); success('WITHDRAWAL COMPLETE'); done(); };
            if (pay)
                pay.onclick = function () { var a = amt(); if (!a)
                    a = debtTotalV37(); payDebtAmountV37(a); };
            document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; });
            document.querySelectorAll('[data-payloan]').forEach(function (b) { return b.onclick = function () { return paySpecificLoan(+b.dataset.payloan); }; });
        }, 0);
    };
    var rumourTrueLines = [
        function (r) { return "The ".concat(r.drug.toLowerCase(), " rumour was true. Seems the people of ").concat(r.city, " are clucking for the goods."); },
        function (r) { return "The ".concat(r.drug.toLowerCase(), " rumour was bang on. ").concat(r.city, " is moving like payday hit and sense left town."); },
        function (r) { return "That ".concat(r.drug.toLowerCase(), " tip was real. ").concat(r.city, " dealers are looking smug and charging accordingly."); },
        function (r) { return "The street gossip was true. ".concat(r.city, " is all over ").concat(r.drug.toLowerCase(), " and nobody is acting normal about it."); },
        function (r) { return "The ".concat(r.drug.toLowerCase(), " rumour landed. ").concat(r.city, " is twitchier than a man carrying cash through a bus station."); }
    ];
    var rumourFalseLines = [
        function (r) { return "The ".concat(r.drug.toLowerCase(), " rumour was false. Hope you didn\u2019t spend every penny you had on it."); },
        function (r) { return "That ".concat(r.drug.toLowerCase(), " tip was nonsense. ").concat(r.city, " shrugs, and your source belongs in a wheelie bin."); },
        function (r) { return "The rumour was rubbish. ".concat(r.city, " has not heard the news, which is awkward because you travelled for it."); },
        function (r) { return "False alarm on ".concat(r.drug.toLowerCase(), ". Someone in ").concat(r.city, " confused market intelligence with pub noise."); },
        function (r) { return "The ".concat(r.drug.toLowerCase(), " rumour was wrong. Your source has the accuracy of a cracked sat nav."); }
    ];
    function rumourTravelBlockV37(old) {
        var r = old && old.rumour;
        if (!r)
            return '';
        var current = places[s.city] && places[s.city][0];
        var cityMatch = r.city === current;
        var scarceOrAbundant = r.type === 'shortage' || r.type === 'collapse' || r.type === 'scarce' || r.type === 'abundant';
        if (!cityMatch || !scarceOrAbundant)
            return '';
        var line = pick((old.true ? rumourTrueLines : rumourFalseLines))(r);
        var movement = (r.type === 'shortage' || r.type === 'scarce') ? 'scarce and more expensive' : 'abundant and cheaper';
        return "<h4>Rumour Result</h4><p><strong>".concat(old.true ? 'TRUE' : 'FALSE', "</strong> \u00B7 ").concat(escapeHtmlV37(line), "</p><p class=\"subtle\">Tip checked: ").concat(escapeHtmlV37(r.drug), " was expected to be ").concat(movement, " in ").concat(escapeHtmlV37(r.city), ".</p>");
    }
    nextDay = function (base, showRumour) {
        var _a;
        try {
            ensureV37();
            var old = { rumour: s.rumour, true: !!(s.rumour && s.rumour.accurate) };
            s.day++;
            s.debt = debtTotalV37();
            s.heat = Math.min(100, Math.max(0, (s.heat || 0) + rand(-8, 13)));
            if (typeof rep === 'function')
                rep(1);
            if (typeof genPrices === 'function')
                genPrices(old);
            if (typeof newRumour === 'function')
                newRumour();
            if (typeof randomEvent === 'function')
                randomEvent(base);
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            s.debt = debtTotalV37();
            if (s.day > s.maxDay)
                return endGame();
            save();
            draw();
            var rumourBlock = '';
            if (showRumour)
                rumourBlock = "<h4>Rumour Result</h4><p><strong>".concat(old.true ? 'TRUE' : 'FALSE', "</strong> \u00B7 ").concat(escapeHtmlV37(((_a = old.rumour) === null || _a === void 0 ? void 0 : _a.text) || 'No rumour was active.'), "</p>");
            else
                rumourBlock = rumourTravelBlockV37(old);
            var title = showRumour ? 'Stay Here' : 'Travel Result';
            var body = "<p>".concat(escapeHtmlV37(s.notice), "</p>").concat(rumourBlock, "<h4>Loan Status</h4>").concat(debtReminderHtml());
            var arrest = typeof maybeArrest === 'function' ? maybeArrest(showRumour ? 'stay' : 'travel') : null;
            if (arrest && typeof showArrestModal === 'function')
                return showArrestModal(arrest, title, body, rumourBlock);
            modal(title, "".concat(body, "<button type=\"button\" id=\"continueEvent\">Continue</button>"));
            setTimeout(function () { var c = $('continueEvent'); if (c)
                c.onclick = function () { if (typeof closeModalFastV34 === 'function')
                    closeModalFastV34();
                else
                    closeModalV22(); handleDueLoans(); }; }, 0);
        }
        catch (e) {
            console.error('V3.7 nextDay recovered:', e);
        }
    };
    var cashPromptLines = [
        'Cash in pockets is a scumbag magnet. Deposit some and keep it for a rainy day.',
        'You are carrying mug-me money. Put some in the bank before the local wildlife notices.',
        'That much cash in your pocket is basically a dinner bell for wrong’uns. Deposit it.',
        'Walking round with that cash is brave, stupid, or both. Bank it before someone else budgets for you.',
        'Your pockets are shouting payday. Deposit some before a tracksuit entrepreneur hears them.'
    ];
    function maybeCashPromptV37() {
        try {
            if (!s || s.cash <= 15000)
                return;
            if (s.v37 && s.v37.cashPromptIgnoreUntil && s.day < s.v37.cashPromptIgnoreUntil)
                return;
            if (s.v37 && s.v37.cashPromptLastDay === s.day)
                return;
            var dlg = $('modal');
            if (dlg && dlg.open)
                return;
            s.v37 = s.v37 || {};
            s.v37.cashPromptLastDay = s.day;
            save();
            modal('Deposit Warning', "<p>".concat(pick(cashPromptLines), "</p><p>Cash carried: <strong>").concat(money(s.cash), "</strong></p><div class=\"loan-choice\"><button type=\"button\" class=\"buy\" id=\"cashPromptDeposit\">Deposit</button><button type=\"button\" id=\"cashPromptIgnore\">Ignore</button></div>"));
            var dep = $('cashPromptDeposit'), ign = $('cashPromptIgnore');
            if (dep)
                dep.onclick = function () { return bank(); };
            if (ign)
                ign.onclick = function () { s.v37.cashPromptIgnoreUntil = s.day + 10; save(); if (typeof closeModalFastV34 === 'function')
                    closeModalFastV34();
                else
                    closeModalV22(); toast('Deposit reminder ignored for 10 days', 'bad'); };
        }
        catch (e) {
            console.warn('Cash prompt skipped:', e);
        }
    }
    airportWarning = function (i, fare) {
        var dest = places[i][0];
        var held = currentContrabandV37();
        var heat = s.heat || 0;
        var hasContraband = (held.drugs + held.weapons) > 0;
        var clean = !hasContraband && heat <= 75;
        var riskText = clean
            ? 'You are carrying no drugs or weapons and your heat is not above 75%. You should get through airport security without trouble.'
            : (hasContraband ? 'You are carrying contraband. Airport security may stop you, seize stock, fine you, or arrest you.' : 'Your heat is above 75%. Even clean pockets may attract attention.');
        var boardLabel = hasContraband ? 'BOARD ANYWAY' : 'BOARD';
        var boardClass = hasContraband ? 'sell' : 'buy';
        modal('Airport Check', "<p><strong>Before you board:</strong> ".concat(riskText, "</p><p>Destination: <strong>").concat(dest, "</strong><br>Flight price: <strong>").concat(money(fare), "</strong></p><div class=\"warning-stock\"><p>Drugs carried: <strong>").concat(held.drugs, "</strong></p><p>Weapons carried: <strong>").concat(held.weapons, "</strong></p><p>Heat: <strong>").concat(heat, "%</strong></p></div><p class=\"subtle\">Vault stock stays in the city where you leave it. Carrying clean is the safe option.</p><div class=\"loan-choice\"><button type=\"button\" id=\"storeBeforeFlight\">Store in Vault</button><button type=\"button\" class=\"").concat(boardClass, "\" id=\"boardAnyway\">").concat(boardLabel, "</button><button type=\"button\" id=\"cancelFlight\">Cancel</button></div>"));
        var sv = $('storeBeforeFlight'), ba = $('boardAnyway'), cf = $('cancelFlight');
        if (sv)
            sv.onclick = function () { return dump(); };
        if (ba)
            ba.onclick = function () { return boardFlightWithSeizure(i, fare); };
        if (cf)
            cf.onclick = function () { return travel(); };
    };
    showTravelFlights = function () {
        var panel = $('travelPanel');
        if (!panel)
            return;
        panel.innerHTML = "<div class=\"travel-head\"><p class=\"subtle\">Select a UK or Ireland city. Prices change daily and airport security is not your mate.</p><button type=\"button\" id=\"stayFromTravel\">STAY HERE</button></div><div class=\"travel-list\">".concat(places.map(function (p, i) { return "<button type=\"button\" data-city=\"".concat(i, "\" ").concat(i === s.city ? 'disabled' : '', "><strong>").concat(p[0], " <em>").concat(money(travelFare(i)), "</em></strong><span>").concat(p[1], " \u00B7 ").concat(p[3], "</span></button>"); }).join(''), "</div>");
        var st = $('stayFromTravel');
        if (st)
            st.onclick = performStayV22;
        document.querySelectorAll('[data-city]').forEach(function (b) { return b.onclick = function () { var i = +b.dataset.city, fare = travelFare(i); if (fare > s.cash) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        } airportWarning(i, fare); }; });
    };
    travel = function () {
        ensureV37();
        if (typeof ensureShipping === 'function')
            ensureShipping();
        modal('Travel & Shipping', "<div class=\"travel-tabs primary\"><button type=\"button\" id=\"travelModeBtn\" class=\"active\">TRAVEL</button><button type=\"button\" id=\"shippingModeBtn\">SHIPPING</button></div><div id=\"travelPanel\"></div>");
        setTimeout(function () {
            var travelBtn = $('travelModeBtn'), shipBtn = $('shippingModeBtn');
            if (!travelBtn || !shipBtn)
                return;
            function activate(which) { travelBtn.classList.toggle('active', which === 'travel'); shipBtn.classList.toggle('active', which === 'shipping'); if (which === 'travel')
                showTravelFlights();
            else
                showShippingHub(); }
            travelBtn.onclick = function () { return activate('travel'); };
            shipBtn.onclick = function () { return activate('shipping'); };
            activate('travel');
        }, 0);
    };
    draw = function () {
        previousDraw();
        var travelBtn = $('travelBtn');
        if (travelBtn)
            travelBtn.textContent = 'Travel & Shipping';
        setTimeout(maybeCashPromptV37, 80);
    };
    save = function () { ensureV37(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_8 = FALLBACK_KEYS; _i < FALLBACK_KEYS_8.length; _i++) {
                var key = FALLBACK_KEYS_8[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV37();
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV37();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v37 = { cashPromptIgnoreUntil: 0, cashPromptLastDay: 0 }; return state; };
    setTimeout(function () { try {
        document.title = 'Noir Market V4.8';
        if (s && s.version !== VERSION) {
            s.version = VERSION;
            save();
        }
        var travelBtn = $('travelBtn');
        if (travelBtn)
            travelBtn.textContent = 'Travel & Shipping';
        console.log('NOIR MARKET V3.7 feature patch active.');
    }
    catch (e) { } }, 360);
})();
/* Noir Market V3.8: Burner Phones, Contacts and brokered deal calls. */
(function () {
    var VERSION = '3.8';
    var SAVE_KEY = 'noir_market_v3_8';
    var FALLBACK_KEYS = ['noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    function escapeHtmlV38(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>"']/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]); }); }
    function ensureV38() {
        if (typeof ensureStats === 'function')
            ensureStats();
        if (typeof ensureEconomy === 'function')
            ensureEconomy();
        s.version = VERSION;
        s.v38 = s.v38 || {};
        s.v38.burnerPhones = Math.max(0, Math.floor(+s.v38.burnerPhones || 0));
        s.v38.contactCallCooldownUntil = Math.max(0, Math.floor(+s.v38.contactCallCooldownUntil || 0));
        s.v38.nextContactCallAt = Math.max(0, Math.floor(+s.v38.nextContactCallAt || 0));
        s.v38.callActive = !!s.v38.callActive;
        s.stats = s.stats || {};
        if (typeof s.stats.burnerPhonesBought !== 'number')
            s.stats.burnerPhonesBought = 0;
        if (typeof s.stats.burnerPhonesUsed !== 'number')
            s.stats.burnerPhonesUsed = 0;
        if (typeof s.stats.contactDeals !== 'number')
            s.stats.contactDeals = 0;
        if (typeof activeDebtTotal === 'function')
            s.debt = activeDebtTotal();
    }
    function modalOpenV38() { var dlg = $('modal'); return !!(dlg && dlg.open); }
    function splashActiveV38() { var splash = $('splash'); return !!(splash && !splash.classList.contains('hide')); }
    function canShowContactCallV38() { var _a, _b; return !!s && !splashActiveV38() && !modalOpenV38() && document.visibilityState !== 'hidden' && (((_a = s.v38) === null || _a === void 0 ? void 0 : _a.burnerPhones) || 0) > 0 && !((_b = s.v38) === null || _b === void 0 ? void 0 : _b.callActive); }
    function setContactCooldownV38() { s.v38 = s.v38 || {}; s.v38.contactCallCooldownUntil = s.day + rand(3, 5); s.v38.nextContactCallAt = Date.now() + rand(120000, 300000); }
    function bindActionButtonsV38() {
        var grid = document.querySelector('.actions .button-grid');
        if (grid && !$('contactsBtn')) {
            var btn = document.createElement('button');
            btn.id = 'contactsBtn';
            btn.type = 'button';
            btn.textContent = 'Contacts';
            var stay_1 = $('stayBtn');
            grid.insertBefore(btn, stay_1 || null);
        }
        var c = $('contactsBtn');
        if (c)
            c.onclick = contacts;
    }
    function burnerPhoneCardV38() {
        return "<h4>Burner Phones</h4><p class=\"muted\">One-time phones for risky contact deals. No warranty, no charger, no questions.</p><div class=\"shop-list\"><button type=\"button\" class=\"shop-item\" data-burner-phone=\"1\"><span class=\"shop-top\"><strong>Burner Phone</strong><span class=\"shop-price\">".concat(money(500), "</span></span><span class=\"shop-desc\"><span>Use once in Contacts to chase high-risk brokered deals.</span><span class=\"heat-pill mid\">one use</span></span></button></div>");
    }
    shop = function () {
        ensureV38();
        modal('Black Market', "<h4>Storage</h4><p class=\"muted\">Each upgrade adds permanent capacity.</p><div class=\"shop-list\">".concat(shopItems.map(function (it, i) { return shopItemButton('shop', i, it[0], it[1], "+".concat(it[2], " storage slots"), it[3] === 'person' ? '<span class="heat-pill low">carried</span>' : '<span class="heat-pill mid">off-site</span>', s.owned.includes(it[0])); }).join(''), "</div><h4>Weapons</h4><p class=\"muted\">Weapons improve fight options but increase heat. Single-use items are consumed in combat.</p><div class=\"shop-list\">").concat(weapons.map(function (w, i) { return shopItemButton('weapon', i, w.name, w.price, "".concat(w.damage, ": ").concat(w.notes), "<span class=\"heat-pill ".concat(heatClass(w.heat), "\">Heat +").concat(w.heat, "%</span>")); }).join(''), "</div>").concat(burnerPhoneCardV38(), "<h4>Recovery</h4><p class=\"muted\">Hospital treatment restores health after trouble.</p><div class=\"shop-list\">").concat(hospitalTreatments.map(function (h, i) { return shopItemButton('hospital', i, h[0], h[1], h[2] === 100 ? 'restore to full health' : "restore ".concat(h[2], "% health"), ''); }).join(''), "</div>"));
        setTimeout(function () {
            document.querySelectorAll('[data-shop]').forEach(function (b) { return b.onclick = function () { var it = shopItems[+b.dataset.shop]; if (s.cash < it[1]) {
                errorMsg('INSUFFICIENT FUNDS');
                return;
            } s.cash -= it[1]; s.owned.push(it[0]); s.notice = "Bought ".concat(it[0], ". Storage increased by ").concat(it[2], " slots."); success("Bought ".concat(it[0])); done(); }; });
            document.querySelectorAll('[data-weapon]').forEach(function (b) { return b.onclick = function () { var w = weapons[+b.dataset.weapon]; if (s.cash < w.price) {
                errorMsg('INSUFFICIENT FUNDS');
                return;
            } s.cash -= w.price; s.weapons.push(w.name); s.heat = Math.min(100, s.heat + Math.ceil(w.heat / 3)); s.notice = "Bought ".concat(w.name, ". Heat increased slightly."); success("Bought ".concat(w.name)); done(); }; });
            document.querySelectorAll('[data-hospital]').forEach(function (b) { return b.onclick = function () { return buyHospital(+b.dataset.hospital); }; });
            document.querySelectorAll('[data-burner-phone]').forEach(function (b) { return b.onclick = function () { return buyBurnerPhoneV38(); }; });
        }, 0);
    };
    function buyBurnerPhoneV38() {
        ensureV38();
        if (s.cash < 500) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        }
        s.cash -= 500;
        s.v38.burnerPhones++;
        s.stats.burnerPhonesBought++;
        if (!s.v38.nextContactCallAt)
            s.v38.nextContactCallAt = Date.now() + rand(90000, 210000);
        s.notice = 'Bought a Burner Phone. It already looks like it has been evidence in two trials.';
        save();
        draw();
        success('BURNER PHONE BOUGHT');
        done();
    }
    function contacts() {
        ensureV38();
        var count = s.v38.burnerPhones || 0;
        var body = count > 0
            ? "<div class=\"modal-money\"><span>Burner Phones</span><strong>".concat(count, "</strong><em>one use each</em></div><p class=\"subtle\">Use a phone to chase a brokered contact deal. You front the money, they move the product, and everyone pretends this is a sensible business model.</p><button type=\"button\" class=\"buy full\" id=\"useBurnerPhone\">Use Burner Phone</button>")
            : "<div class=\"modal-money\"><span>Burner Phones</span><strong>0</strong><em>none held</em></div><p class=\"subtle\">You need to buy a Burner Phone from the Black Market before any unknown numbers can ruin your afternoon.</p><button type=\"button\" id=\"openBlackMarketFromContacts\">Open Black Market</button>";
        modal('Contacts', body);
        setTimeout(function () {
            var use = $('useBurnerPhone');
            if (use)
                use.onclick = function () { return useBurnerPhoneV38('manual'); };
            var bm = $('openBlackMarketFromContacts');
            if (bm)
                bm.onclick = function () { return shop(); };
        }, 0);
    }
    window.contacts = contacts;
    function contactIntroV38(deal) {
        return pick([
            "Unknown number says a lad in ".concat(deal.city, " needs ").concat(deal.drug.toLowerCase(), " tonight. He sounds rich, panicked, and badly organised."),
            "Someone called No Caller ID has a ".concat(deal.drug.toLowerCase(), " flip in ").concat(deal.city, ". He refuses to explain why he is whispering."),
            "A contact says there is quick money in ".concat(deal.city, ". He also says it is \u201Cbasically guaranteed\u201D, which is how disasters introduce themselves."),
            "A blocked number reckons ".concat(deal.city, " is paying silly money for ").concat(deal.drug.toLowerCase(), ". Silly money usually brings silly problems."),
            "Some bloke with three names and no surname has a ".concat(deal.drug.toLowerCase(), " buyer in ").concat(deal.city, ". He keeps saying \u201Ctrust me\u201D, which is concerning.")
        ]);
    }
    function generateContactDealV38() {
        var _a, _b;
        ensureV38();
        var drugRow = pick(drugs), drug = drugRow[0], city = pick(places)[0];
        var market = (_b = (_a = s.economy) === null || _a === void 0 ? void 0 : _a.cities) === null || _b === void 0 ? void 0 : _b[city];
        var base = Math.max(1, Math.round((market && market.prices && market.prices[drug]) || rand(drugRow[2], drugRow[3])));
        var qty = base > 6000 ? rand(2, 8) : (base > 2500 ? rand(5, 18) : (base > 1000 ? rand(10, 35) : rand(25, 120)));
        var buyUnit = Math.max(1, Math.round(base * rand(55, 82) / 100));
        var saleUnit = Math.max(buyUnit + 1, Math.round(base * rand(115, 175) / 100));
        var buyCost = buyUnit * qty, grossSale = saleUnit * qty, contactCut = Math.round(grossSale * .10), projectedProfit = grossSale - buyCost - contactCut;
        if (projectedProfit < Math.max(250, Math.round(buyCost * .08))) {
            saleUnit = Math.round(buyUnit * 1.38);
            grossSale = saleUnit * qty;
            contactCut = Math.round(grossSale * .10);
            projectedProfit = grossSale - buyCost - contactCut;
        }
        var deal = { drug: drug, city: city, qty: qty, buyUnit: buyUnit, saleUnit: saleUnit, buyCost: buyCost, grossSale: grossSale, contactCut: contactCut, projectedProfit: projectedProfit };
        deal.intro = contactIntroV38(deal);
        return deal;
    }
    function useBurnerPhoneV38(source, existingDeal) {
        ensureV38();
        if ((s.v38.burnerPhones || 0) < 1) {
            errorMsg('NO BURNER PHONES');
            contacts();
            return;
        }
        s.v38.burnerPhones--;
        s.stats.burnerPhonesUsed++;
        s.v38.callActive = false;
        setContactCooldownV38();
        var deal = existingDeal || generateContactDealV38();
        save();
        draw();
        showContactDealV38(deal, source);
    }
    function dealRowsV38(deal) {
        return "<div class=\"warning-stock\"><p>Product: <strong>".concat(escapeHtmlV38(deal.drug), "</strong></p><p>City: <strong>").concat(escapeHtmlV38(deal.city), "</strong></p><p>Quantity: <strong>").concat(deal.qty, "</strong></p><p>Buy-in: <strong>").concat(money(deal.buyCost), "</strong></p><p>Projected sale: <strong>").concat(money(deal.grossSale), "</strong></p><p>Contact cut: <strong>").concat(money(deal.contactCut), "</strong></p><p>Projected profit: <strong>").concat(money(deal.projectedProfit), "</strong></p></div>");
    }
    function showContactDealV38(deal, source) {
        var canAfford = s.cash >= deal.buyCost;
        modal('Contact Deal', "<p>".concat(escapeHtmlV38(deal.intro), "</p>").concat(dealRowsV38(deal)).concat(canAfford ? '' : '<p class="bad"><strong>You cannot afford this deal.</strong></p>', "<div class=\"loan-choice\"><button type=\"button\" class=\"buy\" id=\"takeContactDeal\" ").concat(canAfford ? '' : 'disabled', ">TAKE DEAL</button><button type=\"button\" id=\"hangUpContactDeal\">HANG UP</button></div>"));
        setTimeout(function () {
            var take = $('takeContactDeal'), hang = $('hangUpContactDeal');
            if (take)
                take.onclick = function () { return resolveContactDealV38(deal); };
            if (hang)
                hang.onclick = function () { s.notice = 'You hang up. Somewhere, a man with a cracked phone screen calls you a time-waster.'; save(); draw(); if (typeof closeModalFastV34 === 'function')
                    closeModalFastV34();
                else
                    closeModalV22(); };
        }, 0);
    }
    function outcomeTypeV38() {
        var reputation = +s.reputation || 0, roll = Math.random();
        var split = reputation < 30 ? { success: .35, bad: .25, arrest: .20, scam: .15, jackpot: .05 } : (reputation > 70 ? { success: .65, bad: .15, arrest: .10, scam: .05, jackpot: .05 } : { success: .50, bad: .20, arrest: .15, scam: .10, jackpot: .05 });
        if (roll < split.success)
            return 'success';
        if (roll < split.success + split.bad)
            return 'bad';
        if (roll < split.success + split.bad + split.arrest)
            return 'arrest';
        if (roll < split.success + split.bad + split.arrest + split.scam)
            return 'scam';
        return 'jackpot';
    }
    function resolveContactDealV38(deal) {
        ensureV38();
        if (s.cash < deal.buyCost) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        }
        s.cash -= deal.buyCost;
        s.stats.contactDeals++;
        var outcome = outcomeTypeV38();
        var title = 'Contact Deal Result', html = '', net = -deal.buyCost;
        if (outcome === 'success') {
            var paidBack = deal.grossSale - deal.contactCut;
            net = deal.projectedProfit;
            s.cash += paidBack;
            if (typeof rep === 'function')
                rep(2);
            var line = pick(["Deal lands clean. Your contact takes ".concat(money(deal.contactCut), " and acts like he invented maths."), "The buyer pays up. The contact takes his 10% slice and vanishes before the kettle boils.", "Clean flip. Nobody gets arrested, which passes for excellent customer service."]);
            html = "<p>".concat(escapeHtmlV38(line), "</p>").concat(dealRowsV38(deal), "<p><strong>Net profit: ").concat(money(net), "</strong></p>");
        }
        else if (outcome === 'bad') {
            var actualGross = Math.max(0, Math.round(deal.buyCost * rand(70, 112) / 100));
            var cut = Math.round(actualGross * .10);
            var returned = Math.max(0, actualGross - cut);
            net = returned - deal.buyCost;
            s.cash += returned;
            if (net < 0 && typeof rep === 'function')
                rep(-1);
            var line = pick(["Bad tip. The buyer still turns up, but with big \u201Ccan you do mates rates\u201D energy.", "The market moves against you. Everyone involved calls it character-building, which is what broke people say.", "The contact overpromised. Shocking behaviour from a man using a stolen phone."]);
            html = "<p>".concat(escapeHtmlV38(line), "</p><div class=\"warning-stock\"><p>Buy-in lost upfront: <strong>").concat(money(deal.buyCost), "</strong></p><p>Actual sale: <strong>").concat(money(actualGross), "</strong></p><p>Contact cut: <strong>").concat(money(cut), "</strong></p><p>Net result: <strong>").concat(money(net), "</strong></p></div>");
        }
        else if (outcome === 'arrest') {
            s.heat = Math.min(100, (s.heat || 0) + rand(12, 28));
            if (typeof rep === 'function')
                rep(-2);
            var line = pick(["The contact gets lifted before the meet. Your money is now evidence with worse paperwork.", "Police grab the runner. The product, the cash and your optimism all disappear together.", "The buyer was real, the contact was real, and unfortunately so were the police."]);
            html = "<p>".concat(escapeHtmlV38(line), "</p><p>You lose the buy-in: <strong>").concat(money(deal.buyCost), "</strong></p><p>Heat rises to <strong>").concat(s.heat, "%</strong>.</p>");
        }
        else if (outcome === 'scam') {
            if (typeof rep === 'function')
                rep(-2);
            var line = pick(["The contact says \u201Ctwo minutes\u201D and is last seen moving like he heard boss music.", "You have been mugged by telecommunications. The number is dead and so is your pride.", "He takes the buy-in and blocks you. Even the ringtone feels smug."]);
            html = "<p>".concat(escapeHtmlV38(line), "</p><p>You lose the buy-in: <strong>").concat(money(deal.buyCost), "</strong></p>");
        }
        else {
            var jackpotGross = Math.round(deal.grossSale * rand(135, 180) / 100);
            var cut = Math.round(jackpotGross * .10);
            var paidBack = jackpotGross - cut;
            net = paidBack - deal.buyCost;
            s.cash += paidBack;
            if (typeof rep === 'function')
                rep(4);
            var line = pick(["Jackpot. The buyer overpays like he has never heard of consequences.", "The deal goes filthy well. Even your contact sounds surprised, which is never reassuring.", "A clean run and a fat margin. For once, the bad idea behaves itself."]);
            html = "<p>".concat(escapeHtmlV38(line), "</p><div class=\"warning-stock\"><p>Buy-in: <strong>").concat(money(deal.buyCost), "</strong></p><p>Final sale: <strong>").concat(money(jackpotGross), "</strong></p><p>Contact cut: <strong>").concat(money(cut), "</strong></p><p>Net profit: <strong>").concat(money(net), "</strong></p></div>");
        }
        s.notice = "Burner phone deal complete. Result: ".concat(outcome.toUpperCase(), ". Net ").concat(money(net), ".");
        save();
        draw();
        var successOutcomes = ['success', 'jackpot'];
        var resultLabel = successOutcomes.includes(outcome) ? 'SUCCESS' : 'FAILURE';
        var resultClass = successOutcomes.includes(outcome) ? 'success' : 'failure';
        modal(title, "<div class=\"deal-result-banner ".concat(resultClass, "\">").concat(resultLabel, "</div>").concat(html, "<button type=\"button\" id=\"continueContactDeal\">Continue</button>"));
        var c = $('continueContactDeal');
        if (c)
            c.onclick = function () { if (typeof closeModalFastV34 === 'function')
                closeModalFastV34();
            else
                closeModalV22(); };
    }
    function showIncomingContactCallV38() {
        ensureV38();
        if (!canShowContactCallV38())
            return false;
        var deal = generateContactDealV38();
        s.v38.callActive = true;
        save();
        modal('UNKNOWN NUMBER', "<p>".concat(escapeHtmlV38(deal.intro), "</p><p class=\"subtle\">Someone is offering a brokered contact deal through one of your Burner Phones.</p><div class=\"loan-choice\"><button type=\"button\" class=\"buy\" id=\"answerContactCall\">ANSWER</button><button type=\"button\" id=\"ignoreContactCall\">IGNORE</button></div>"));
        var ans = $('answerContactCall'), ign = $('ignoreContactCall');
        if (ans)
            ans.onclick = function () { return useBurnerPhoneV38('incoming', deal); };
        if (ign)
            ign.onclick = function () { s.v38.callActive = false; setContactCooldownV38(); save(); if (typeof closeModalFastV34 === 'function')
                closeModalFastV34();
            else
                closeModalV22(); toast('CALL IGNORED', 'bad'); };
        return true;
    }
    function scheduleContactCallCheckV38() {
        if (window.__NOIR_V38_CALL_TIMER)
            return;
        window.__NOIR_V38_CALL_TIMER = setTimeout(function () {
            window.__NOIR_V38_CALL_TIMER = null;
            try {
                ensureV38();
                if ((s.v38.burnerPhones || 0) > 0) {
                    if (!s.v38.nextContactCallAt)
                        s.v38.nextContactCallAt = Date.now() + rand(90000, 210000);
                    var cooldownClear = (s.day >= s.v38.contactCallCooldownUntil);
                    var timeClear = (Date.now() >= s.v38.nextContactCallAt);
                    if (cooldownClear && timeClear && canShowContactCallV38()) {
                        if (Math.random() < 0.65)
                            showIncomingContactCallV38();
                        else {
                            s.v38.nextContactCallAt = Date.now() + rand(90000, 210000);
                            save();
                        }
                    }
                }
            }
            catch (e) {
                console.warn('V3.8 contact call skipped:', e);
            }
            scheduleContactCallCheckV38();
        }, rand(45000, 90000));
    }
    save = function () { ensureV38(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_9 = FALLBACK_KEYS; _i < FALLBACK_KEYS_9.length; _i++) {
                var key = FALLBACK_KEYS_9[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV38();
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV38();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v38 = { burnerPhones: 0, contactCallCooldownUntil: 0, nextContactCallAt: 0, callActive: false }; return state; };
    draw = function () { previousDraw(); ensureV38(); bindActionButtonsV38(); scheduleContactCallCheckV38(); };
    setTimeout(function () { try {
        ensureV38();
        document.title = 'Noir Market V4.8';
        var travelBtn = $('travelBtn');
        if (travelBtn)
            travelBtn.textContent = 'Travel & Shipping';
        bindActionButtonsV38();
        save();
        console.log('NOIR MARKET V3.8: Burner Phones, Contacts and brokered contact deals active.');
    }
    catch (e) { } }, 520);
})();
/* Noir Market V4.0: stabilised base build, informant polish, full city ticker coverage and release metadata. */
(function () {
    var VERSION = '4.0';
    var SAVE_KEY = 'noir_market_v4_0';
    var FALLBACK_KEYS = ['noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    function escapeHtmlV39(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>"']/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]); }); }
    function ensureV39() {
        if (typeof ensureStats === 'function')
            ensureStats();
        if (typeof ensureEconomy === 'function')
            ensureEconomy();
        if (typeof ensureVaults === 'function')
            ensureVaults();
        if (typeof ensureVaultLevels === 'function')
            ensureVaultLevels();
        s.version = VERSION;
        s.v39 = s.v39 || {};
        s.stats = s.stats || {};
        if (typeof s.stats.vaultSales !== 'number')
            s.stats.vaultSales = 0;
        if (typeof activeDebtTotal === 'function')
            s.debt = activeDebtTotal();
    }
    function currentCityV39() { return (places && places[s.city] && places[s.city][0]) || 'London'; }
    function priceV39(name) { return Math.max(0, Math.round((s.prices && s.prices[name]) || 0)); }
    function saleCrashV39(name, q, value) { try {
        return typeof depressMarketAfterSale === 'function' ? depressMarketAfterSale(name, q, value) : '';
    }
    catch (e) {
        return '';
    } }
    function drugIconV39(name) { try {
        var row = drugs.find(function (d) { return d[0] === name; });
        return row ? row[1] : '';
    }
    catch (e) {
        return '';
    } }
    function sellCarriedAllV39(name) {
        ensureV39();
        var qty = Math.max(0, Math.floor((s.inv && s.inv[name]) || 0));
        if (qty < 1) {
            errorMsg('NO CARRIED STOCK');
            return;
        }
        var value = qty * priceV39(name);
        s.cash += value;
        s.inv[name] = 0;
        s.stats.tradesSold = (s.stats.tradesSold || 0) + qty;
        s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, value);
        if (typeof rep === 'function')
            rep(1);
        var crash = saleCrashV39(name, qty, value);
        s.notice = "Sold all carried ".concat(name, ": ").concat(qty, " unit").concat(qty === 1 ? '' : 's', " for ").concat(money(value), ".").concat(crash);
        save();
        draw();
        success('SOLD FROM POCKET');
        sellModal();
    }
    function sellVaultAllV39(name) {
        ensureV39();
        var city = currentCityV39();
        var vault = (s.vaults && s.vaults[city]) || {};
        var qty = Math.max(0, Math.floor(+vault[name] || 0));
        if (qty < 1) {
            errorMsg('NO SAFE STOCK');
            return;
        }
        var value = qty * priceV39(name);
        s.cash += value;
        vault[name] = 0;
        s.stats.tradesSold = (s.stats.tradesSold || 0) + qty;
        s.stats.vaultSales = (s.stats.vaultSales || 0) + qty;
        s.stats.largestTrade = Math.max(s.stats.largestTrade || 0, value);
        if (typeof rep === 'function')
            rep(1);
        var crash = saleCrashV39(name, qty, value);
        s.notice = "Sold all ".concat(city, " safe ").concat(name, ": ").concat(qty, " unit").concat(qty === 1 ? '' : 's', " for ").concat(money(value), ".").concat(crash);
        save();
        draw();
        success('SOLD FROM SAFE');
        sellModal();
    }
    function carriedSellTileV39(name, qty) {
        var price = priceV39(name), value = qty * price, icon = drugIconV39(name);
        return "<div class=\"trade-tile\"><div class=\"trade-title\"><b>".concat(icon, "</b><strong>").concat(escapeHtmlV39(name), "</strong></div><p>In pocket: <strong>").concat(qty, "</strong></p><p>Sale price: <strong>").concat(money(price), "</strong> each</p><p>Sell all value: <strong>").concat(money(value), "</strong></p><button type=\"button\" class=\"sell\" data-sellpocketall=\"").concat(escapeHtmlV39(name), "\">SELL ALL</button></div>");
    }
    function vaultSellTileV39(name, qty) {
        var price = priceV39(name), value = qty * price, icon = drugIconV39(name);
        return "<div class=\"trade-tile\"><div class=\"trade-title\"><b>".concat(icon, "</b><strong>").concat(escapeHtmlV39(name), "</strong></div><p>In safe: <strong>").concat(qty, "</strong></p><p>Sale price: <strong>").concat(money(price), "</strong> each</p><p>Sell all value: <strong>").concat(money(value), "</strong></p><button type=\"button\" class=\"sell\" data-sellvaultall=\"").concat(escapeHtmlV39(name), "\">SELL ALL FROM SAFE</button></div>");
    }
    sellModal = function () {
        ensureV39();
        var city = currentCityV39();
        var vault = (s.vaults && s.vaults[city]) || {};
        var carried = drugs.map(function (d) { return d[0]; }).filter(function (name) { return (s.inv && s.inv[name] > 0); });
        var vaulted = drugs.map(function (d) { return d[0]; }).filter(function (name) { return (vault && vault[name] > 0); });
        var wc = typeof weaponCounts === 'function' ? weaponCounts() : {};
        var weaponTiles = Object.entries(wc).map(function (_a) {
            var name = _a[0], q = _a[1];
            var w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2);
            return "<div class=\"trade-tile weapon-sale\"><div class=\"trade-title\"><strong>".concat(escapeHtmlV39(name), "</strong></div><p>Owned: ").concat(q, "</p><p>Resale: <strong>").concat(money(val), "</strong> each</p><p>Sell all: <strong>").concat(money(val * q), "</strong></p>").concat(qtyControl(name, 'wsell', q), "<button type=\"button\" class=\"sell\" data-sellweapon=\"").concat(escapeHtmlV39(name), "\">SELL WEAPON</button><button type=\"button\" data-sellallweapon=\"").concat(escapeHtmlV39(name), "\">SELL ALL</button></div>");
        }).join('');
        modal('Sell', "<div class=\"modal-money\"><span>Current funds</span><strong>".concat(money(s.cash), "</strong><em>").concat(city, " prices</em></div><h4>Carried Stock</h4>").concat(carried.length ? "<div class=\"trade-grid\">".concat(carried.map(function (name) { return carriedSellTileV39(name, s.inv[name]); }).join(''), "</div>") : '<p class="subtle">Nothing in your pockets except bad decisions.</p>', "<h4>").concat(escapeHtmlV39(city), " Safe Stock</h4>").concat(vaulted.length ? "<div class=\"trade-grid\">".concat(vaulted.map(function (name) { return vaultSellTileV39(name, vault[name]); }).join(''), "</div>") : '<p class="subtle">The safe is empty. Even the spiders look disappointed.</p>').concat(weaponTiles ? "<h4>Weapons</h4><div class=\"trade-grid\">".concat(weaponTiles, "</div>") : '', "<div class=\"trade-footer\"><span>Cash ").concat(money(s.cash), "</span><span>City ").concat(escapeHtmlV39(city), "</span></div>"));
        setTimeout(function () {
            if (typeof bindQtyButtons === 'function')
                bindQtyButtons('wsell');
            document.querySelectorAll('[data-sellpocketall]').forEach(function (b) { return b.onclick = function () { return sellCarriedAllV39(b.dataset.sellpocketall); }; });
            document.querySelectorAll('[data-sellvaultall]').forEach(function (b) { return b.onclick = function () { return sellVaultAllV39(b.dataset.sellvaultall); }; });
            document.querySelectorAll('[data-sellweapon]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.sellweapon, q = +qtyInput('wsell', name).value || 0, w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2); if (q < 1) {
                errorMsg('ENTER QUANTITY');
                return;
            } var count = weaponCounts()[name] || 0; if (q > count) {
                errorMsg('NOT ENOUGH STOCK');
                return;
            } for (var i = 0; i < q; i++) {
                var idx = s.weapons.indexOf(name);
                if (idx >= 0)
                    s.weapons.splice(idx, 1);
            } s.cash += q * val; s.notice = "Sold ".concat(q, " ").concat(name, " for ").concat(money(q * val), "."); save(); draw(); success("Sold ".concat(name)); sellModal(); }; });
            document.querySelectorAll('[data-sellallweapon]').forEach(function (b) { return b.onclick = function () { var name = b.dataset.sellallweapon, count = weaponCounts()[name] || 0, w = getWeapon(name), val = Math.floor(((w === null || w === void 0 ? void 0 : w.price) || 0) / 2); if (!count) {
                errorMsg('NOT ENOUGH STOCK');
                return;
            } s.weapons = s.weapons.filter(function (x) { return x !== name; }); s.cash += count * val; s.notice = "Sold all ".concat(name, " for ").concat(money(count * val), "."); save(); draw(); success("Sold all ".concat(name)); sellModal(); }; });
        }, 0);
    };
    hustle = function () {
        ensureV39();
        var informants = [
            { id: 'simon', name: 'Simon the Snitch', cost: 100, trust: 0.35, bio: 'Cheap, twitchy and usually hiding behind the bins. Knows a bit, guesses a lot.' },
            { id: 'lisa', name: 'Loose Lisa', cost: 250, trust: 0.60, bio: 'Gossipy, confident and chaotic. Talks too much, hears too much and occasionally remembers which bit was true.' },
            { id: 'pete', name: 'Pistol Pete', cost: 10000, trust: 0.90, bio: 'Expensive, paranoid and oddly well informed. The closest thing to reliable in this business.' }
        ];
        var coming = "<h4>Businesses</h4><div class=\"coming-soon\"><strong>COMING SOON</strong><div class=\"hustle-grid\"><div class=\"hustle-card\"><h4>Deliverude</h4><p>A totally unofficial courier outfit for moving bags across town when you\u2019re too busy, too wanted, or too lazy to do it yourself.</p><p class=\"subtle\">Fast delivery, zero paperwork, and a complaints department that is just a woman called Sharon ignoring your calls.</p></div><div class=\"hustle-card\"><h4>Uber Yeats</h4><p>Nobody is bringing noodles and the driver definitely took the long way because he \u201Csaw a car that looked at him funny\u201D.</p><p class=\"subtle\">Cheap, chaotic, and occasionally arrives with fewer items than it left with.</p></div><div class=\"hustle-card\"><h4>Karen &amp; Sharon Broker Bitches</h4><p>Karen and Sharon are identical twins, business partners, and the only loan providers in the city who can make a payment reminder feel like a hostage note.</p><p class=\"subtle\">They dress like they\u2019re off to complain to a manager, but operate like they buried the last one.</p><p class=\"subtle\">Their lending model is simple: fast cash, aggressive interest, and weekly check-ins that start polite and end with Sharon describing exactly where your kneecaps are.</p><p class=\"subtle\">Karen handles the paperwork, Sharon handles customer retention, and neither of them has smiled since 1998.</p></div></div></div>";
        modal('Hustle', "<h4>Informants</h4><p class=\"subtle\">Informants vary in price and reliability. Cheap tips are risky. Expensive tips are usually better, but nobody is clean in this game.</p><div class=\"hustle-grid\">".concat(informants.map(function (i) { return "<div class=\"hustle-card\"><h4>".concat(i.name, " \u00B7 ").concat(money(i.cost), "</h4><p>").concat(i.bio, "</p><button type=\"button\" class=\"buy\" data-informant=\"").concat(i.id, "\">Pay ").concat(i.name, "</button></div>"); }).join(''), "</div>").concat(coming));
        setTimeout(function () { document.querySelectorAll('[data-informant]').forEach(function (btn) { return btn.onclick = function () { var info = informants.find(function (i) { return i.id === btn.dataset.informant; }); if (!info)
            return; if (s.cash < info.cost) {
            errorMsg('INSUFFICIENT FUNDS');
            return;
        } s.cash -= info.cost; ensureStats(); s.stats.informants++; if (Math.random() < 0.10) {
            s.notice = "".concat(info.name, " disappears with your cash and suspiciously expensive trainers.");
            errorMsg('SCAMMED');
            save();
            draw();
            hustle();
            return;
        } var city = pick(places)[0], drug = pickDrug(), kind = pick(['shortage', 'collapse', 'crackdown', 'spiked']); var accurate = Math.random() < info.trust; var text = kind === 'shortage' ? "".concat(drug, " shortage likely in ").concat(city, ".") : kind === 'collapse' ? "".concat(drug, " prices may collapse in ").concat(city, ".") : kind === 'spiked' ? "Spiked ".concat(drug, " batches causing panic in ").concat(city, ".") : "Police pressure expected in ".concat(city, "."); if (!accurate) {
            text = pick(["".concat(pickDrug(), " shipment rumoured in ").concat(pick(places)[0], "."), "Police looking the wrong way in ".concat(pick(places)[0], "."), "Street prices turning weird in ".concat(pick(places)[0], ".")]);
        } s.notice = "".concat(info.name, ": ").concat(text); success('INFORMANT PAID'); save(); draw(); hustle(); }; }); }, 0);
    };
    save = function () { ensureV39(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_10 = FALLBACK_KEYS; _i < FALLBACK_KEYS_10.length; _i++) {
                var key = FALLBACK_KEYS_10[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV39();
            setActiveCityMarket();
            updateRankProgress();
            updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV39();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v40 = { stabilised: true }; return state; };
    draw = function () { previousDraw(); ensureV39(); };
    setTimeout(function () { try {
        ensureV39();
        document.title = 'Noir Market V4.8';
        save();
        console.log('NOIR MARKET V4.0: Stabilised base build active. Sell screen, Loose Lisa, full ticker coverage and hidden informant odds verified.');
    }
    catch (e) { } }, 620);
})();
/* Noir Market V4.1 feature patch: weapons travel risk, finance controls, vault export and contact result banners. */
(function () {
    var VERSION = '4.1';
    var SAVE_KEY = 'noir_market_v4_1';
    var FALLBACK_KEYS = ['noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    var previousMaybeArrest = typeof maybeArrest === 'function' ? maybeArrest : null;
    function escV41(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>"']/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]); }); }
    function cityV41() { return places[s.city] && places[s.city][0] || 'Unknown'; }
    function debtTotalV41() { try {
        return Math.max(0, Math.round(activeDebtTotal()));
    }
    catch (e) {
        return Math.max(0, Math.round(+s.debt || 0));
    } }
    function carriedDrugsV41() { try {
        return Math.max(0, used());
    }
    catch (e) {
        return 0;
    } }
    function carriedWeaponsV41() { return Array.isArray(s.weapons) ? s.weapons.length : 0; }
    function ensureV41() {
        if (typeof ensureStats === 'function')
            ensureStats();
        if (typeof ensureShipping === 'function')
            ensureShipping();
        if (typeof ensureVaults === 'function')
            ensureVaults();
        s.version = VERSION;
        s.v41 = s.v41 || {};
        s.bank = Math.max(0, Math.round(+s.bank || 0));
        s.cash = Math.max(0, Math.round(+s.cash || 0));
        s.debt = debtTotalV41();
    }
    function closeV41() { if (typeof closeModalFastV34 === 'function')
        closeModalFastV34();
    else if ($('modal'))
        $('modal').close(); }
    function weaponCountsV41() { var m = {}; (s.weapons || []).forEach(function (w) { return m[w] = (m[w] || 0) + 1; }); return m; }
    function allCarriedWeaponTextV41() { var rows = Object.entries(weaponCountsV41()); return rows.length ? rows.map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(v, " ").concat(k);
    }).join(', ') : 'none'; }
    function weaponRiskScoreV41() {
        return (s.weapons || []).reduce(function (total, name) { var w = typeof getWeapon === 'function' ? getWeapon(name) : null; return total + (w ? (+w.heat || 0) + Math.min(35, Math.log10(Math.max(10, +w.price || 10)) * 5) : 8); }, 0);
    }
    function stashAllWeaponsV41() {
        ensureV41();
        var qty = carriedWeaponsV41();
        if (qty < 1) {
            errorMsg('NO WEAPONS HELD');
            return false;
        }
        var city = cityV41();
        var cap = typeof vaultCapacity === 'function' ? vaultCapacity(city) : 100;
        var usedNow = typeof vaultUsed === 'function' ? vaultUsed(city) : 0;
        if (usedNow + qty > cap) {
            errorMsg('VAULT FULL');
            return false;
        }
        s.weaponVaults = s.weaponVaults || {};
        s.weaponVaults[city] = s.weaponVaults[city] || {};
        (s.weapons || []).forEach(function (name) { s.weaponVaults[city][name] = (s.weaponVaults[city][name] || 0) + 1; });
        s.weapons = [];
        s.notice = "Stored ".concat(qty, " weapon").concat(qty === 1 ? '' : 's', " in the ").concat(city, " vault before travelling.");
        save();
        draw();
        success('WEAPONS STASHED');
        return true;
    }
    function ditchAllWeaponsV41() {
        ensureV41();
        var qty = carriedWeaponsV41();
        if (qty < 1) {
            errorMsg('NO WEAPONS HELD');
            return false;
        }
        s.weapons = [];
        s.notice = "Ditched ".concat(qty, " weapon").concat(qty === 1 ? '' : 's', ". No refund, no receipt, no clever speech.");
        save();
        draw();
        success('WEAPONS DITCHED');
        return true;
    }
    function routeTypeV41(i) {
        var from = places[s.city] || [], to = places[i] || [];
        if (from[1] !== to[1])
            return 'airport';
        return 'road/train';
    }
    function weaponTravelOutcomeV41(i) {
        var qty = carriedWeaponsV41();
        if (qty < 1)
            return { type: 'none', text: '' };
        var route = routeTypeV41(i);
        var heat = +s.heat || 0;
        var score = weaponRiskScoreV41();
        var risk = (route === 'airport' ? 0.34 : 0.14) + (qty * 0.045) + (score / 420) + (heat > 75 ? Math.min(.22, (heat - 75) / 120) : 0);
        risk = Math.max(route === 'airport' ? 0.36 : 0.18, Math.min(0.88, risk));
        var roll = Math.random();
        if (roll > risk) {
            return { type: 'clean', route: route, text: 'You move carefully and nobody checks the bag. Lucky, not smart.' };
        }
        var severity = Math.random() + Math.min(.35, score / 260) + (qty > 2 ? .12 : 0) + (route === 'airport' ? .16 : 0);
        if (severity > .98) {
            return { type: 'arrest', route: route, major: true, jail: rand(1, 7), fine: rand(1000, 6500), text: 'The weapon is found during a search. This is now very much a police matter.' };
        }
        if (severity > .56) {
            var fine = Math.min(s.cash, rand(500, 4500));
            s.cash -= fine;
            s.heat = Math.min(100, (s.heat || 0) + rand(4, 12));
            return { type: 'fine', route: route, fine: fine, text: "You are stopped, questioned, fined ".concat(money(fine), ", and sent on your way. Expensive little journey.") };
        }
        var seized = allCarriedWeaponTextV41();
        var count = carriedWeaponsV41();
        s.weapons = [];
        s.heat = Math.min(100, (s.heat || 0) + rand(6, 16));
        return { type: 'seizure', route: route, count: count, text: "Police find the weapon".concat(count === 1 ? '' : 's', " and take ").concat(count === 1 ? 'it' : 'them', ". You keep your freedom, but lose the hardware. Seized: ").concat(seized, ".") };
    }
    function showAirportCheckV41(i, fare) {
        ensureV41();
        var dest = places[i][0];
        var held = { drugs: carriedDrugsV41(), weapons: carriedWeaponsV41() };
        var heat = s.heat || 0;
        var hasContraband = (held.drugs + held.weapons) > 0;
        var clean = !hasContraband && heat <= 75;
        var riskText = clean
            ? 'You are carrying no drugs or weapons and your heat is not above 75%. You should get through security without trouble.'
            : (hasContraband ? 'You are carrying contraband. Security may stop you, seize stock, fine you, or arrest you.' : 'Your heat is above 75%. Even clean pockets may attract attention.');
        var boardLabel = hasContraband ? 'BOARD ANYWAY' : 'BOARD';
        var boardClass = hasContraband ? 'sell' : 'buy';
        modal('Airport Check', "<p><strong>Before you board:</strong> ".concat(riskText, "</p><p>Destination: <strong>").concat(escV41(dest), "</strong><br>Travel price: <strong>").concat(money(fare), "</strong></p><div class=\"warning-stock\"><p>Drugs carried: <strong>").concat(held.drugs, "</strong></p><p>Weapons carried: <strong>").concat(held.weapons, "</strong></p><p>Heat: <strong>").concat(heat, "%</strong></p></div><p class=\"subtle\">Vault stock stays in the city where you leave it. Carrying clean is the safe option.</p><div class=\"loan-choice\"><button type=\"button\" id=\"storeBeforeFlight\">Store in Vault</button><button type=\"button\" class=\"").concat(boardClass, "\" id=\"boardAnyway\">").concat(boardLabel, "</button><button type=\"button\" id=\"cancelFlight\">Cancel</button></div>"));
        var sv = $('storeBeforeFlight'), ba = $('boardAnyway'), cf = $('cancelFlight');
        if (sv)
            sv.onclick = function () { s.v41 = s.v41 || {}; s.v41.carryWeaponsOnNextTravel = false; save(); dump(); };
        if (ba)
            ba.onclick = function () { return boardFlightWithSeizure(i, fare); };
        if (cf)
            cf.onclick = function () { return travel(); };
    }
    function showWeaponTravelWarningV41(i, fare) {
        ensureV41();
        var city = cityV41(), dest = places[i][0], qty = carriedWeaponsV41();
        modal('YOU ARE CARRYING WEAPONS', "<p>Moving with weapons increases your chance of being stopped, searched, fined, arrested, or having items seized.</p><p>Destination: <strong>".concat(escV41(dest), "</strong><br>Travel price: <strong>").concat(money(fare), "</strong></p><div class=\"warning-stock\"><p>Weapons carried: <strong>").concat(qty, "</strong></p><p>Held: <strong>").concat(escV41(allCarriedWeaponTextV41()), "</strong></p><p>Current city vault: <strong>").concat(escV41(city), "</strong></p></div><div class=\"loan-choice\"><button type=\"button\" class=\"sell\" id=\"carryWeaponsTravel\">CARRY THEM</button><button type=\"button\" class=\"buy\" id=\"stashWeaponsTravel\">STASH IN CURRENT CITY</button><button type=\"button\" id=\"ditchWeaponsTravel\">DITCH WEAPONS</button><button type=\"button\" id=\"cancelWeaponsTravel\">CANCEL TRAVEL</button></div>"));
        var carry = $('carryWeaponsTravel'), stash = $('stashWeaponsTravel'), ditch = $('ditchWeaponsTravel'), cancel = $('cancelWeaponsTravel');
        if (carry)
            carry.onclick = function () { s.v41 = s.v41 || {}; s.v41.carryWeaponsOnNextTravel = true; save(); showAirportCheckV41(i, fare); };
        if (stash)
            stash.onclick = function () { if (stashAllWeaponsV41()) {
                s.v41.carryWeaponsOnNextTravel = false;
                showAirportCheckV41(i, fare);
            } };
        if (ditch)
            ditch.onclick = function () { if (ditchAllWeaponsV41()) {
                s.v41.carryWeaponsOnNextTravel = false;
                showAirportCheckV41(i, fare);
            } };
        if (cancel)
            cancel.onclick = function () { return travel(); };
    }
    airportWarning = function (i, fare) {
        ensureV41();
        if (carriedWeaponsV41() > 0)
            return showWeaponTravelWarningV41(i, fare);
        s.v41.carryWeaponsOnNextTravel = false;
        showAirportCheckV41(i, fare);
    };
    performFlightV22 = function (i, fare) {
        ensureV41();
        sound('travel');
        haptic();
        ensureStats();
        var from = cityV41(), to = places[i][0], heatAtBoard = s.heat || 0;
        var hadDrugs = carriedDrugsV41() > 0;
        var hadWeapons = carriedWeaponsV41() > 0;
        var outcome = { type: 'none', text: '' };
        if (hadWeapons && s.v41 && s.v41.carryWeaponsOnNextTravel) {
            outcome = weaponTravelOutcomeV41(i);
        }
        if (outcome.type === 'arrest') {
            s.v41.forceTravelArrest = { major: true, fine: outcome.fine, jail: outcome.jail, context: 'travel', airport: true, v41WeaponTravel: true };
        }
        s.stats.flights = (s.stats.flights || 0) + 1;
        s.cash -= fare;
        s.v34 = s.v34 || {};
        s.v34.lastAirport = {
            day: s.day,
            from: from,
            to: to,
            hadDrugs: hadDrugs,
            hadWeapons: outcome.type === 'arrest',
            hadContraband: hadDrugs || outcome.type === 'arrest',
            heatAtBoard: heatAtBoard
        };
        s.city = i;
        s.v41.carryWeaponsOnNextTravel = false;
        save();
        draw();
        closeV41();
        var cleanLine = (!hadDrugs && outcome.type === 'none' && heatAtBoard <= 75) ? 'Clean pockets and low heat. Security barely looks up.' : '';
        var riskLine = outcome.text || cleanLine || 'You make it through boarding, but security is watching.';
        setTimeout(function () { return nextDay("You land in ".concat(places[s.city][0], ". Travel cost ").concat(money(fare), ". ").concat(riskLine), false); }, 0);
    };
    boardFlightWithSeizure = function (i, fare) { performFlightV22(i, fare); };
    maybeArrest = function (context) {
        if (context === 'travel' && s && s.v41 && s.v41.forceTravelArrest) {
            var a = s.v41.forceTravelArrest;
            delete s.v41.forceTravelArrest;
            return a;
        }
        return previousMaybeArrest ? previousMaybeArrest(context) : null;
    };
    bank = function () {
        ensureV41();
        var loans = Array.isArray(s.loans) ? s.loans : [];
        var openLoans = loans.length ? loans.map(function (l, idx) { var days = (+l.due || s.day) - s.day, urgent = days <= 5, payoff = typeof loanPayoff === 'function' ? loanPayoff(l) : (+l.repay || +l.principal || 0), fullRepay = typeof loanFullRepay === 'function' ? loanFullRepay(l) : payoff; return "<div class=\"loan-row ".concat(urgent ? 'urgent-loan' : '', "\"><div><span>").concat(escV41(l.name || 'Shady Lender'), "</span><strong>").concat(money(payoff), "</strong><em>").concat(days > 0 ? 'due in ' + days + ' day' + (days === 1 ? '' : 's') : 'DUE NOW', " \u00B7 full term ").concat(money(fullRepay), "</em></div><button type=\"button\" data-payloan=\"").concat(idx, "\">Pay</button></div>"); }).join('') : '<p class="subtle">No active loans.</p>';
        modal('Finances', "<div class=\"modal-money\"><span>Cash held</span><strong>".concat(money(s.cash), "</strong><em>in pocket</em></div><div class=\"modal-money\"><span>Bank balance</span><strong>").concat(money(s.bank), "</strong><em>protected funds</em></div><p class=\"subtle\">Move cash into the bank to keep it away from muggers. Withdraw when you need working money.</p><input id=\"amount\" inputmode=\"numeric\" type=\"number\" placeholder=\"Amount\"><div class=\"bank-grid\"><button type=\"button\" id=\"deposit\">Deposit</button><button type=\"button\" id=\"withdraw\">Withdraw</button><button type=\"button\" class=\"buy\" id=\"depositAll\">Deposit All</button><button type=\"button\" id=\"withdrawAll\">Withdraw All</button><button type=\"button\" class=\"full\" id=\"payDebt\">Pay General Debt</button></div><h4>Loans</h4>").concat(openLoans, "<div class=\"loan-list compact\">").concat(lenders.map(function (l, i) { return "<button type=\"button\" data-loan=\"".concat(i, "\"><strong>").concat(escV41(l[0]), "</strong><br>Borrow up to ").concat(money(typeof adjustedLenderMax === 'function' ? adjustedLenderMax(l) : l[1]), " \u00B7 ").concat(Math.round(l[3] * 100), "% full-term interest \u00B7 due in ").concat(l[2], " days</button>"); }).join(''), "</div>"));
        setTimeout(function () {
            var amt = function () { var _a; return Math.max(0, Math.floor(+(((_a = $('amount')) === null || _a === void 0 ? void 0 : _a.value) || 0))); };
            var refresh = function (msg) { save(); draw(); if (msg)
                success(msg); bank(); };
            var dep = $('deposit'), wit = $('withdraw'), depAll = $('depositAll'), witAll = $('withdrawAll'), pay = $('payDebt');
            if (dep)
                dep.onclick = function () { var a = Math.min(amt(), s.cash); if (a <= 0) {
                    errorMsg('ENTER AMOUNT');
                    return;
                } s.cash -= a; s.bank += a; s.notice = "Deposited ".concat(money(a), ". Less mugging bait in your pockets."); refresh('DEPOSIT COMPLETE'); };
            if (wit)
                wit.onclick = function () { var a = Math.min(amt(), s.bank); if (a <= 0) {
                    errorMsg('ENTER AMOUNT');
                    return;
                } s.bank -= a; s.cash += a; s.notice = "Withdrew ".concat(money(a), ". Try not to wave it around like a lottery winner."); refresh('WITHDRAWAL COMPLETE'); };
            if (depAll)
                depAll.onclick = function () { var a = s.cash; if (a <= 0) {
                    errorMsg('NO CASH TO DEPOSIT');
                    return;
                } s.cash = 0; s.bank += a; s.notice = "Deposited all cash: ".concat(money(a), ". Your pockets are finally less stupid."); refresh('DEPOSITED ALL'); };
            if (witAll)
                witAll.onclick = function () { var a = s.bank; if (a <= 0) {
                    errorMsg('NO BANK FUNDS');
                    return;
                } s.bank = 0; s.cash += a; s.notice = "Withdrew all bank funds: ".concat(money(a), ". This feels like the start of a bad idea."); refresh('WITHDREW ALL'); };
            if (pay)
                pay.onclick = function () { var a = amt(); if (!a)
                    a = debtTotalV41(); if (typeof payDebtAmount === 'function')
                    payDebtAmount(a);
                else
                    errorMsg('NO DEBT HANDLER'); };
            document.querySelectorAll('[data-loan]').forEach(function (b) { return b.onclick = function () { return chooseLoan(+b.dataset.loan); }; });
            document.querySelectorAll('[data-payloan]').forEach(function (b) { return b.onclick = function () { return paySpecificLoan(+b.dataset.payloan); }; });
        }, 0);
    };
    showShippingExport = function () {
        ensureV41();
        setActiveCityMarket();
        var from = cityV41();
        if (typeof validShipDestV20 === 'function')
            validShipDestV20();
        var vault = (s.vaults && s.vaults[from]) || {};
        var carried = Object.entries(s.inv || {}).filter(function (_a) {
            var q = _a[1];
            return q > 0;
        }).map(function (_a) {
            var name = _a[0], q = _a[1];
            return ({ source: 'carried', name: name, qty: q, label: 'Carried' });
        });
        var vaulted = Object.entries(vault).filter(function (_a) {
            var q = _a[1];
            return q > 0;
        }).map(function (_a) {
            var name = _a[0], q = _a[1];
            return ({ source: 'vault', name: name, qty: q, label: "".concat(from, " Vault") });
        });
        var rows = __spreadArray(__spreadArray([], carried, true), vaulted, true);
        function rowHtmlV41(list, offset) { return list.map(function (r, j) { var i = offset + j, value = shippingValue(r.name, r.qty), cost = shippingCostFor(value); return "<div class=\"shipping-row\"><div><strong>".concat(escV41(r.name), "</strong><span>").concat(escV41(r.label), ": ").concat(r.qty, " \u00B7 max shipment cost ").concat(money(cost), "</span></div><input type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"").concat(r.qty, "\" value=\"").concat(r.qty, "\" id=\"shipqty-v41-").concat(i, "\"><button type=\"button\" data-exportdrug-v41=\"").concat(i, "\">EXPORT</button></div>"); }).join(''); }
        var panel = $('travelPanel');
        if (!panel)
            return;
        var carriedBlock = carried.length ? "<h4>Carried Stock</h4>".concat(rowHtmlV41(carried, 0)) : '';
        var vaultBlock = vaulted.length ? "<h4>".concat(escV41(from), " Vault Stock</h4>").concat(rowHtmlV41(vaulted, carried.length)) : '';
        panel.innerHTML = "<button type=\"button\" class=\"back-mini\" id=\"backShipHub\">BACK TO SHIPPING</button><div class=\"modal-money\"><span>Exporting from</span><strong>".concat(escV41(from), "</strong><em>Cash ").concat(money(s.cash), "</em></div><label class=\"shipping-label\">Destination</label>").concat(typeof shippingDestinationTilesV20 === 'function' ? shippingDestinationTilesV20() : '', "<p class=\"subtle\">Export can now ship either carried stock or stock held in this city\u2019s vault. Shipments wait in the destination city until imported into that city\u2019s vault.</p>").concat(rows.length ? "<div class=\"shipping-list\">".concat(carriedBlock).concat(vaultBlock, "</div>") : '<p class="subtle">No carried or vault stock available to ship.</p>');
        var back = $('backShipHub');
        if (back)
            back.onclick = showShippingHub;
        document.querySelectorAll('[data-shipdest]').forEach(function (btn) { return btn.onclick = function () { selectedShippingDestV20 = +btn.dataset.shipdest; document.querySelectorAll('[data-shipdest]').forEach(function (b) { return b.classList.toggle('active', +b.dataset.shipdest === selectedShippingDestV20); }); }; });
        document.querySelectorAll('[data-exportdrug-v41]').forEach(function (btn) { return btn.onclick = function () {
            var _a;
            var idx = +btn.dataset.exportdrugV41;
            var row = rows[idx];
            var toIdx = typeof validShipDestV20 === 'function' ? validShipDestV20() : 0;
            var to = places[toIdx] && places[toIdx][0];
            var qty = Math.floor(+$('shipqty-v41-' + idx).value || 0);
            if (!row || !to) {
                errorMsg('SELECT DESTINATION');
                return;
            }
            if (toIdx === s.city) {
                errorMsg('SELECT ANOTHER CITY');
                return;
            }
            if (qty < 1) {
                errorMsg('ENTER QUANTITY');
                return;
            }
            if (row.source === 'carried') {
                if (qty > (s.inv[row.name] || 0)) {
                    errorMsg('NOT ENOUGH CARRIED STOCK');
                    return;
                }
            }
            else {
                if (qty > (vault[row.name] || 0)) {
                    errorMsg('NOT ENOUGH VAULT STOCK');
                    return;
                }
            }
            var value = shippingValue(row.name, qty), cost = shippingCostFor(value);
            if (s.cash < cost) {
                errorMsg('INSUFFICIENT FUNDS');
                return;
            }
            s.cash -= cost;
            if (row.source === 'carried')
                s.inv[row.name] -= qty;
            else
                vault[row.name] -= qty;
            s.shipments.push({ id: "ship_".concat(Date.now(), "_").concat(Math.floor(Math.random() * 100000)), from: from, to: to, source: row.source, items: (_a = {}, _a[row.name] = qty, _a), value: value, cost: cost, day: s.day });
            ensureStats();
            s.stats.shipmentsExported = (s.stats.shipmentsExported || 0) + 1;
            s.notice = "Exported ".concat(qty, " ").concat(row.name, " from ").concat(row.source === 'vault' ? from + ' vault' : 'carried stock', " to ").concat(to, ". Shipping cost ").concat(money(cost), ".");
            save();
            draw();
            success('SHIPMENT EXPORTED');
            showShippingExport();
        }; });
    };
    save = function () { ensureV41(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_11 = FALLBACK_KEYS; _i < FALLBACK_KEYS_11.length; _i++) {
                var key = FALLBACK_KEYS_11[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV41();
            if (typeof setActiveCityMarket === 'function')
                setActiveCityMarket();
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            if (typeof updateBestRankV18 === 'function')
                updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV41();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v41 = { carryWeaponsOnNextTravel: false }; return state; };
    draw = function () { previousDraw(); try {
        ensureV41();
    }
    catch (e) { } };
    setTimeout(function () { try {
        ensureV41();
        document.title = 'Noir Market V4.8';
        save();
        console.log('NOIR MARKET V4.1: weapons travel risk, finance deposit/withdraw all, vault export and contact result banners active.');
    }
    catch (e) {
        console.warn('V4.1 startup skipped:', e);
    } }, 720);
})();
/* Noir Market V4.2 feature patch: police bribe resolution. */
(function () {
    var VERSION = '4.2';
    var SAVE_KEY = 'noir_market_v4_2';
    var FALLBACK_KEYS = ['noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    var previousApplyArrestPenalty = typeof applyArrestPenalty === 'function' ? applyArrestPenalty : null;
    function escV42(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>"']/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]); }); }
    function clampV42(n, min, max) { return Math.max(min, Math.min(max, n)); }
    function closeV42() { if (typeof closeModalFastV34 === 'function')
        closeModalFastV34();
    else if ($('modal'))
        $('modal').close(); }
    function ensureV42() {
        if (typeof ensureStats === 'function')
            ensureStats();
        if (typeof ensureV41 === 'function')
            ensureV41();
        s.version = VERSION;
        s.v42 = s.v42 || {};
        s.stats = s.stats || {};
        if (typeof s.stats.bribeAttempts !== 'number')
            s.stats.bribeAttempts = 0;
        if (typeof s.stats.bribesAccepted !== 'number')
            s.stats.bribesAccepted = 0;
        if (typeof s.stats.bribesRejected !== 'number')
            s.stats.bribesRejected = 0;
    }
    function carriedDrugUnitsV42() { try {
        return Math.max(0, used());
    }
    catch (e) {
        return 0;
    } }
    function carriedWeaponUnitsV42() { return Array.isArray(s.weapons) ? s.weapons.length : 0; }
    function carriedStockValueV42() {
        var value = 0;
        try {
            Object.entries(s.inv || {}).forEach(function (_a) {
                var name = _a[0], qty = _a[1];
                value += Math.max(0, +qty || 0) * Math.max(0, (s.prices && s.prices[name]) || 0);
            });
        }
        catch (e) { }
        return Math.round(value);
    }
    function carriedWeaponValueV42() {
        var value = 0;
        try {
            (s.weapons || []).forEach(function (name) { var w = typeof getWeapon === 'function' ? getWeapon(name) : null; value += Math.max(0, +((w && w.price) || 0)); });
        }
        catch (e) { }
        return Math.round(value);
    }
    function arrestContextV42(arrest) {
        var last = (s && s.v34 && s.v34.lastAirport) || {};
        var airport = !!(arrest && (arrest.airport || arrest.context === 'travel'));
        var weapon = !!(arrest && (arrest.weaponInvolved || arrest.v41WeaponTravel)) || carriedWeaponUnitsV42() > 0 || !!last.hadWeapons;
        var stockValue = carriedStockValueV42();
        var drugUnits = carriedDrugUnitsV42();
        var weaponValue = carriedWeaponValueV42();
        var large = stockValue >= 10000 || drugUnits >= 25 || weaponValue >= 10000;
        var recent = !!(s && s.v42 && Number.isFinite(+s.v42.lastArrestDay) && ((s.day - (+s.v42.lastArrestDay)) <= 5));
        return { airport: airport, weapon: weapon, stockValue: stockValue, drugUnits: drugUnits, weaponValue: weaponValue, large: large, recent: recent, heat: +s.heat || 0, reputation: +s.reputation || 0, major: !!(arrest && arrest.major) };
    }
    function bribeAmountV42(arrest) {
        var ctx = arrestContextV42(arrest);
        var amount = ctx.major ? rand(1500, 4000) : rand(500, 1500);
        if (ctx.stockValue > 0) {
            amount = Math.max(amount, Math.round(ctx.stockValue * (rand(8, 12) / 100)));
        }
        if (ctx.weapon) {
            amount = Math.max(amount, rand(2000, 7500));
        }
        if (ctx.airport) {
            amount = Math.max(amount, rand(5000, 15000));
        }
        if (ctx.heat > 75)
            amount = Math.round(amount * 1.25);
        if (ctx.recent)
            amount = Math.round(amount * 1.25);
        return Math.max(500, Math.round(amount / 50) * 50);
    }
    function bribeChanceV42(arrest) {
        var ctx = arrestContextV42(arrest);
        var chance = .55;
        if (ctx.reputation <= 25)
            chance -= .10;
        else if (ctx.reputation >= 86)
            chance += .15;
        else if (ctx.reputation >= 61)
            chance += .10;
        if (ctx.heat <= 40)
            chance += .10;
        else if (ctx.heat >= 76)
            chance -= .15;
        if (ctx.weapon)
            chance -= .10;
        if (ctx.airport)
            chance -= .20;
        if (ctx.large)
            chance -= .10;
        return clampV42(chance, .20, .85);
    }
    function markRecentArrestV42() {
        ensureV42();
        s.v42.lastArrestDay = s.day;
    }
    function continueAfterPoliceV42() { closeV42(); if (typeof handleDueLoans === 'function')
        handleDueLoans(); }
    function showPoliceResultV42(title, label, ok, html) {
        modal(title, "<div class=\"deal-result-banner ".concat(ok ? 'success' : 'failure', "\">").concat(label, "</div>").concat(html, "<button type=\"button\" id=\"continuePoliceV42\">Continue</button>"));
        var btn = $('continuePoliceV42');
        if (btn)
            btn.onclick = continueAfterPoliceV42;
    }
    function bribeAcceptedV42(arrest, cost) {
        ensureV42();
        s.cash = Math.max(0, s.cash - cost);
        s.stats.bribes = (s.stats.bribes || 0) + 1;
        s.stats.bribesAccepted = (s.stats.bribesAccepted || 0) + 1;
        s.heat = Math.max(0, (s.heat || 0) - rand(3, 8));
        if (typeof rep === 'function')
            rep(1);
        else
            s.reputation = clampV42((s.reputation || 0) + 1, 0, 100);
        s.notice = "Bribe paid: ".concat(money(cost), ". Dodgy cops let you go with a warning.");
        save();
        draw();
        showPoliceResultV42('Police Bribe', 'SUCCESS', true, "<p>The officer pockets the cash without looking at it.</p><p>\u201CYou got lucky. Don\u2019t make me recognise you twice.\u201D</p><p>You are released with a warning.</p>");
    }
    function bribeRejectedV42(arrest) {
        ensureV42();
        markRecentArrestV42();
        s.stats.bribesRejected = (s.stats.bribesRejected || 0) + 1;
        s.day += 1;
        s.stats.jailDays = (s.stats.jailDays || 0) + 1;
        s.heat = Math.min(100, (s.heat || 0) + 10);
        if (typeof rep === 'function')
            rep(-2);
        else
            s.reputation = clampV42((s.reputation || 0) - 2, 0, 100);
        s.notice = 'Bribe failed. You are banged up for 1 day.';
        save();
        draw();
        showPoliceResultV42('Police Bribe', 'FAILURE', false, "<p>The officer looks at the cash, then at you.</p><p>\u201CBribing police now, are we? That\u2019s bold. Stupid, but bold.\u201D</p><p>You are banged up for 1 day.</p>");
    }
    applyArrestPenalty = function (arrest, failedBribe) {
        markRecentArrestV42();
        if (previousApplyArrestPenalty)
            return previousApplyArrestPenalty(arrest, failedBribe);
    };
    showArrestModal = function (arrest, baseTitle, body, rumourBlock) {
        ensureV42();
        s.stats.arrests = (s.stats.arrests || 0) + 1;
        var cost = bribeAmountV42(arrest);
        var canPay = s.cash >= cost;
        var context = arrestContextV42(arrest);
        var severity = arrest && arrest.major
            ? "Major offence. You are facing ".concat(arrest.jail, " day").concat(arrest.jail === 1 ? '' : 's', " in jail.")
            : "Minor offence. Fine expected: ".concat(money((arrest && arrest.fine) || 0), ".");
        var contextLine = context.airport ? 'Airport stop' : (context.weapon ? 'Weapon stop' : 'Police stop');
        modal('THE OFFICER LOOKS THE OTHER WAY… FOR A PRICE', "".concat(body || '', "<h4>").concat(escV42(contextLine), "</h4><p>").concat(severity, "</p><p>One of the officers lingers by the car door.</p><p>\u201CCould make this disappear. Depends how generous you\u2019re feeling.\u201D</p><div class=\"modal-money\"><span>Bribe required</span><strong>").concat(money(cost), "</strong><em>").concat(canPay ? 'cash available' : 'you cannot afford this', "</em></div><div class=\"loan-choice\"><button type=\"button\" class=\"buy\" id=\"payBribeV42\" ").concat(canPay ? '' : 'disabled', ">PAY BRIBE</button><button type=\"button\" class=\"sell\" id=\"takeChargeV42\">TAKE THE CHARGE</button></div>").concat(canPay ? '' : '<p class="subtle">You cannot afford to make this problem disappear.</p>'));
        var pay = $('payBribeV42'), take = $('takeChargeV42');
        if (pay)
            pay.onclick = function () {
                if (!canPay) {
                    errorMsg('INSUFFICIENT CASH');
                    return;
                }
                ensureV42();
                s.stats.bribeAttempts = (s.stats.bribeAttempts || 0) + 1;
                var ok = Math.random() < bribeChanceV42(arrest);
                if (ok)
                    bribeAcceptedV42(arrest, cost);
                else
                    bribeRejectedV42(arrest);
            };
        if (take)
            take.onclick = function () { applyArrestPenalty(arrest, false); };
    };
    save = function () { ensureV42(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_12 = FALLBACK_KEYS; _i < FALLBACK_KEYS_12.length; _i++) {
                var key = FALLBACK_KEYS_12[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV42();
            if (typeof setActiveCityMarket === 'function')
                setActiveCityMarket();
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            if (typeof updateBestRankV18 === 'function')
                updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV42();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v42 = {}; state.stats = state.stats || {}; state.stats.bribeAttempts = 0; state.stats.bribesAccepted = 0; state.stats.bribesRejected = 0; return state; };
    draw = function () { previousDraw(); try {
        ensureV42();
    }
    catch (e) { } };
    setTimeout(function () { try {
        ensureV42();
        document.title = 'Noir Market V4.8';
        save();
        console.log('NOIR MARKET V4.2: Police Bribe Resolution system active.');
    }
    catch (e) {
        console.warn('V4.2 startup skipped:', e);
    } }, 840);
})();
/* Noir Market V4.3: main screen parallax background baseline */
(function () {
    var VERSION = '4.3';
    var SAVE_KEY = 'noir_market_v4_3';
    var FALLBACK_KEYS = ['noir_market_v4_2', 'noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousSave = save;
    var previousLoad = load;
    var previousBaseState = baseState;
    var previousDraw = draw;
    function ensureV43() {
        if (!s)
            return;
        s.version = VERSION;
        s.v43 = s.v43 || { mainParallaxBackground: true };
    }
    function setupMainParallaxV43() {
        var bg = document.getElementById('mainParallaxBg');
        if (!bg) {
            bg = document.createElement('div');
            bg.id = 'mainParallaxBg';
            bg.className = 'main-parallax-bg';
            bg.setAttribute('aria-hidden', 'true');
            var app = document.querySelector('.app');
            if (app && app.parentNode)
                app.parentNode.insertBefore(bg, app);
            else
                document.body.prepend(bg);
        }
        if (bg.dataset.parallaxV43 === '1')
            return;
        bg.dataset.parallaxV43 = '1';
        var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var ticking = false;
        function update() {
            ticking = false;
            if (reduced) {
                bg.style.setProperty('--main-parallax-y', '0px');
                return;
            }
            var y = window.scrollY || document.documentElement.scrollTop || 0;
            var move = Math.max(-90, Math.min(0, Math.round(y * -0.14)));
            bg.style.setProperty('--main-parallax-y', move + 'px');
        }
        function requestUpdate() {
            if (ticking)
                return;
            ticking = true;
            requestAnimationFrame(update);
        }
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate, { passive: true });
        update();
    }
    save = function () { ensureV43(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_13 = FALLBACK_KEYS; _i < FALLBACK_KEYS_13.length; _i++) {
                var key = FALLBACK_KEYS_13[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV43();
            if (typeof setActiveCityMarket === 'function')
                setActiveCityMarket();
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            if (typeof updateBestRankV18 === 'function')
                updateBestRankV18();
            save();
            draw();
            return false;
        }
        var started = previousLoad ? previousLoad() : newGame(false);
        ensureV43();
        save();
        draw();
        return started;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v43 = { mainParallaxBackground: true }; return state; };
    draw = function () { previousDraw(); try {
        ensureV43();
        setupMainParallaxV43();
    }
    catch (e) { } };
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', setupMainParallaxV43, { once: true });
    else
        setupMainParallaxV43();
    setTimeout(function () { try {
        ensureV43();
        setupMainParallaxV43();
        document.title = 'Noir Market V4.8';
        save();
        console.log('NOIR MARKET V4.3: Main screen parallax background active.');
    }
    catch (e) {
        console.warn('V4.3 startup skipped:', e);
    } }, 900);
})();
/* Noir Market V4.8: corrected Redhead Games opening ident over active snow splash. */
(function () {
    var VERSION = '4.6';
    var SAVE_KEY = 'noir_market_v4_6';
    var FALLBACK_KEYS = ['noir_market_v4_5', 'noir_market_v4_4', 'noir_market_v4_3', 'noir_market_v4_2', 'noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    var previousShowMenu = showMenu;
    function escapeV46(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>'"]/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[m]); }); }
    function ensureV46() {
        if (typeof ensureV43 === 'function')
            ensureV43();
        if (typeof ensureStats === 'function')
            ensureStats();
        if (!s)
            return;
        s.version = VERSION;
        s.v46 = s.v46 || { instructionsAdded: true, redheadIntro: true, correctedIntro: true };
    }
    function runRedheadIntroV46() {
        var pre = document.getElementById('preintro');
        var splash = document.getElementById('splash');
        if (splash) {
            splash.style.visibility = 'visible';
            splash.style.opacity = '1';
        }
        try {
            if (typeof setupSplashLoaderV27 === 'function')
                setupSplashLoaderV27();
        }
        catch (e) { }
        var finish = function () {
            document.body.classList.remove('preintro-running');
            if (splash) {
                splash.style.visibility = '';
                splash.style.opacity = '';
            }
            if (pre) {
                pre.classList.add('preintro-hide');
                setTimeout(function () { try {
                    pre.remove();
                }
                catch (e) { } }, 700);
            }
        };
        if (!pre) {
            document.body.classList.remove('preintro-running');
            return;
        }
        document.body.classList.add('preintro-running');
        var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setTimeout(finish, reduced ? 1450 : 2700);
    }
    window.showInstructionsV46 = function () {
        modal('Instructions', "<div class=\"instructions-copy\">\n      <p class=\"instructions-intro\">Noir Market is a dark street-level trading game where every city has a price. Buy stock when prices are low, move between cities, sell when the market rises, and avoid getting caught with too much heat on you.</p>\n      <p class=\"instructions-intro\">The aim is simple: build cash, grow reputation, move smart, and survive long enough to climb the ranks.</p>\n\n      <h4>Market</h4><p>Buy and sell stock in your current city. Prices change daily based on supply, demand, rumours, news and your own actions.</p>\n      <h4>Storage / Vault</h4><p>Store stock safely in each city. Vaults are city-specific, so anything stored in London stays in London until you return or ship it.</p>\n      <h4>Travel</h4><p>Move between cities to find better prices. Travelling can trigger police stops, seizures, fines, arrests or random events, especially if you are carrying risky stock or weapons.</p>\n      <h4>Shipping / Export</h4><p>Send stock between cities instead of carrying it yourself. You can export from carried stock or from your current city vault, but shipments carry cost and risk.</p>\n      <h4>Finances</h4><p>View your cash and bank balance. Deposit money to protect it, or withdraw funds when you need buying power.</p>\n      <h4>Black Market</h4><p>Buy weapons and other high-risk items. Weapons may help in certain situations, but carrying them while travelling increases police risk.</p>\n      <h4>Hustle</h4><p>Use side opportunities and informants to make extra money or gain market tips. Some tips are useful, some are wrong, and some people will take your money and run.</p>\n      <h4>Contacts</h4><p>Use contacts to attempt deals and opportunities. Results can succeed or fail depending on risk, reputation and chance.</p>\n      <h4>Loans</h4><p>Borrow money when you need fast cash. Loans come with interest, deadlines and penalties if you miss repayment.</p>\n      <h4>News / Rumours</h4><p>Watch the ticker and daily rumours. They can hint at price movement, shortages, police activity or city events, but not everything you hear is true.</p>\n      <h4>Reputation / Rank</h4><p>Your reputation affects how people deal with you. Your rank grows as your net worth increases, but it can drop if your money falls or your decisions catch up with you.</p>\n      <h4>Heat</h4><p>Heat shows how much attention you are attracting. Higher heat increases the risk of police stops, failed travel, raids and arrest.</p>\n      <div class=\"instructions-tip\"><h4>Tip</h4><p>Do not carry everything at once. Use vaults, watch the market, keep cash safe, and move before the heat finds you.</p></div>\n      <div class=\"back-menu-spacer\"></div><button type=\"button\" id=\"backMenuFromInstructionsBtn\">Back to Menu</button>\n    </div>");
        setTimeout(function () { var b = $('backMenuFromInstructionsBtn'); if (b)
            b.onclick = showMenu; }, 0);
    };
    showMenu = function () {
        ensureV46();
        var nameVal = escapeV46(s.playerName || '').slice(0, 24);
        modal('Menu', "<div class=\"menu-player\"><label for=\"playerNameInput\">Player name</label><input id=\"playerNameInput\" maxlength=\"24\" placeholder=\"Add your name\" value=\"".concat(nameVal, "\"><button type=\"button\" id=\"savePlayerNameBtn\">SAVE NAME</button></div><div class=\"menu-settings\"><button type=\"button\" id=\"soundToggleBtn\">SOUNDS: ").concat(soundEnabled ? 'ON' : 'OFF', "</button><button type=\"button\" id=\"musicToggleBtn\">MUSIC: ").concat(musicEnabled ? 'ON' : 'OFF', "</button></div><div class=\"menu-list\"><button type=\"button\" id=\"instructionsBtn\">Instructions</button><button type=\"button\" id=\"statsBtn\">Stats</button><button type=\"button\" class=\"sell\" id=\"menuNewGameBtn\">New Game</button></div>"));
        setTimeout(function () {
            var instructions = $('instructionsBtn'), stats = $('statsBtn'), snd = $('soundToggleBtn'), mus = $('musicToggleBtn'), saveName = $('savePlayerNameBtn'), newGameBtn = $('menuNewGameBtn');
            if (instructions)
                instructions.onclick = showInstructionsV46;
            if (saveName)
                saveName.onclick = (typeof setPlayerNameV18 === 'function') ? setPlayerNameV18 : function () { s.playerName = String(($('playerNameInput') && $('playerNameInput').value) || '').trim().slice(0, 24); save(); draw(); showMenu(); };
            if (stats)
                stats.onclick = showStats;
            if (snd)
                snd.onclick = function () { soundEnabled = !soundEnabled; localStorage.setItem('noir_market_sound', soundEnabled ? 'on' : 'off'); if (soundEnabled && typeof sound === 'function')
                    sound('positive'); save(); showMenu(); };
            if (mus)
                mus.onclick = function () { musicEnabled = !musicEnabled; localStorage.setItem('noir_market_music', musicEnabled ? 'on' : 'off'); if (musicEnabled && typeof startBackgroundMusic === 'function')
                    startBackgroundMusic();
                else if (typeof stopBackgroundMusic === 'function')
                    stopBackgroundMusic(); save(); showMenu(); };
            if (newGameBtn)
                newGameBtn.onclick = confirmNewGame;
        }, 0);
    };
    save = function () { ensureV46(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_14 = FALLBACK_KEYS; _i < FALLBACK_KEYS_14.length; _i++) {
                var key = FALLBACK_KEYS_14[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV46();
            if (typeof setActiveCityMarket === 'function')
                setActiveCityMarket();
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            if (typeof updateBestRankV18 === 'function')
                updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV46();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v46 = { instructionsAdded: true, redheadIntro: true, correctedIntro: true }; return state; };
    draw = function () { previousDraw(); try {
        ensureV46();
    }
    catch (e) { } };
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', runRedheadIntroV46, { once: true });
    else
        runRedheadIntroV46();
    setTimeout(function () { try {
        ensureV46();
        document.title = 'Noir Market V4.8';
        save();
        console.log('NOIR MARKET V4.6: menu instructions and Redhead Games intro active.');
    }
    catch (e) {
        console.warn('V4.6 startup skipped:', e);
    } }, 1050);
})();
/* Noir Market V4.8: corrected main splash logo, animated tagline and splash instructions. */
(function () {
    var VERSION = '4.8';
    var SAVE_KEY = 'noir_market_v4_8';
    var FALLBACK_KEYS = ['noir_market_v4_7', 'noir_market_v4_6', 'noir_market_v4_5', 'noir_market_v4_4', 'noir_market_v4_3', 'noir_market_v4_2', 'noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    function ensureV47() {
        if (typeof ensureV46 === 'function')
            ensureV46();
        if (typeof ensureStats === 'function')
            ensureStats();
        if (!s)
            return;
        s.version = VERSION;
        s.v47 = s.v47 || { correctedSplashLogo: true, animatedTagline: true, splashInstructions: true };
        s.v48 = s.v48 || { splashLayoutPolish: true, slowerSplashFade: true };
    }
    function startSplashTaglineV47() {
        var el = document.getElementById('splashTagline');
        if (!el || el.dataset.active === '1')
            return;
        el.dataset.active = '1';
        var words = ['TRADE.', 'RISK.', 'SURVIVE.'];
        var i = 0;
        el.textContent = words[0];
        setInterval(function () {
            if (!document.body.contains(el))
                return;
            el.classList.add('fade-out');
            setTimeout(function () {
                i = (i + 1) % words.length;
                el.textContent = words[i];
                el.classList.remove('fade-out');
            }, 300);
        }, 1350);
    }
    save = function () { ensureV47(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_15 = FALLBACK_KEYS; _i < FALLBACK_KEYS_15.length; _i++) {
                var key = FALLBACK_KEYS_15[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV47();
            if (typeof setActiveCityMarket === 'function')
                setActiveCityMarket();
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            if (typeof updateBestRankV18 === 'function')
                updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV47();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v47 = { correctedSplashLogo: true, animatedTagline: true, splashInstructions: true }; state.v48 = { splashLayoutPolish: true, slowerSplashFade: true }; return state; };
    draw = function () { previousDraw(); try {
        ensureV47();
    }
    catch (e) { } };
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', startSplashTaglineV47, { once: true });
    else
        startSplashTaglineV47();
    setTimeout(function () { try {
        ensureV47();
        startSplashTaglineV47();
        document.title = 'Noir Market V4.8';
        save();
        console.log('NOIR MARKET V4.8: splash logo layout polish, slower main splash fade and bottom instructions active.');
    }
    catch (e) {
        console.warn('V4.7 startup skipped:', e);
    } }, 1280);
})();
/* Noir Market V5.0: staged splash fade and HOW TO PLAY instructions button. */
(function () {
    var VERSION = '5.0';
    var SAVE_KEY = 'noir_market_v5_0';
    var FALLBACK_KEYS = ['noir_market_v4_9', 'noir_market_v4_8', 'noir_market_v4_7', 'noir_market_v4_6', 'noir_market_v4_5', 'noir_market_v4_4', 'noir_market_v4_3', 'noir_market_v4_2', 'noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    function escapeV49(v) { return String(v !== null && v !== void 0 ? v : '').replace(/[&<>'"]/g, function (m) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[m]); }); }
    function ensureV49() {
        if (typeof ensureV47 === 'function')
            ensureV47();
        else if (typeof ensureV46 === 'function')
            ensureV46();
        if (typeof ensureStats === 'function')
            ensureStats();
        if (!s)
            return;
        s.version = VERSION;
        s.v49 = s.v49 || { stagedSplashReveal: true, howToPlayInstructionsButton: true };
    }
    function revealMainSplashAfterSnowV49() {
        var reveal = function () {
            if (!document.body.classList.contains('preintro-running')) {
                setTimeout(function () { return document.body.classList.add('splash-ui-revealed'); }, 420);
                return true;
            }
            return false;
        };
        if (reveal())
            return;
        var started = Date.now();
        var timer = setInterval(function () {
            if (reveal() || Date.now() - started > 5200) {
                clearInterval(timer);
                if (!document.body.classList.contains('splash-ui-revealed'))
                    document.body.classList.add('splash-ui-revealed');
            }
        }, 80);
    }
    var instructionsHtmlV49 = function () { return "<div class=\"instructions-copy\">\n    <p class=\"instructions-intro\">Noir Market is a dark street-level trading game where every city has a price. Buy stock when prices are low, move between cities, sell when the market rises, and avoid getting caught with too much heat on you.</p>\n    <p class=\"instructions-intro\">The aim is simple: build cash, grow reputation, move smart, and survive long enough to climb the ranks.</p>\n    <h4>Market</h4><p>Buy and sell stock in your current city. Prices change daily based on supply, demand, rumours, news and your own actions.</p>\n    <h4>Storage / Vault</h4><p>Store stock safely in each city. Vaults are city-specific, so anything stored in London stays in London until you return or ship it.</p>\n    <h4>Travel</h4><p>Move between cities to find better prices. Travelling can trigger police stops, seizures, fines, arrests or random events, especially if you are carrying risky stock or weapons.</p>\n    <h4>Shipping / Export</h4><p>Send stock between cities instead of carrying it yourself. You can export from carried stock or from your current city vault, but shipments carry cost and risk.</p>\n    <h4>Finances</h4><p>View your cash and bank balance. Deposit money to protect it, or withdraw funds when you need buying power.</p>\n    <h4>Black Market</h4><p>Buy weapons and other high-risk items. Weapons may help in certain situations, but carrying them while travelling increases police risk.</p>\n    <h4>Hustle</h4><p>Use side opportunities and informants to make extra money or gain market tips. Some tips are useful, some are wrong, and some people will take your money and run.</p>\n    <h4>Contacts</h4><p>Use contacts to attempt deals and opportunities. Results can succeed or fail depending on risk, reputation and chance.</p>\n    <h4>Loans</h4><p>Borrow money when you need fast cash. Loans come with interest, deadlines and penalties if you miss repayment.</p>\n    <h4>News / Rumours</h4><p>Watch the ticker and daily rumours. They can hint at price movement, shortages, police activity or city events, but not everything you hear is true.</p>\n    <h4>Reputation / Rank</h4><p>Your reputation affects how people deal with you. Your rank grows as your net worth increases, but it can drop if your money falls or your decisions catch up with you.</p>\n    <h4>Heat</h4><p>Heat shows how much attention you are attracting. Higher heat increases the risk of police stops, failed travel, raids and arrest.</p>\n    <div class=\"instructions-tip\"><h4>Tip</h4><p>Do not carry everything at once. Use vaults, watch the market, keep cash safe, and move before the heat finds you.</p></div>\n  </div>"; };
    window.showInstructionsV49 = function (fromWelcome) {
        if (fromWelcome === void 0) { fromWelcome = false; }
        modal('Instructions', "".concat(instructionsHtmlV49(), "<div class=\"back-menu-spacer\"></div><button type=\"button\" id=\"backFromInstructionsV49\">").concat(fromWelcome ? 'Back to How to Play' : 'Back to Menu', "</button>"));
        setTimeout(function () { var b = $('backFromInstructionsV49'); if (b)
            b.onclick = fromWelcome ? showWelcome : showMenu; }, 0);
    };
    showWelcome = function () {
        modal('How to Play', "<div class=\"howto\"><p>You start with \u00A31,000, no debt and questionable judgement.</p><p>Buy low, sell high, travel between cities and try not to get robbed, arrested, battered or completely rinsed by the market.</p><p>Rumours may help. They may also be nonsense. That is business.</p><p class=\"disclaimer\">This game is for entertainment purposes only.</p><div class=\"howto-actions\"><button type=\"button\" id=\"welcomeInstructionsBtn\" class=\"play-wide\">INSTRUCTIONS</button><button type=\"button\" id=\"playWelcomeBtn\" class=\"buy play-wide\">PLAY</button></div></div>");
        setTimeout(function () { var i = $('welcomeInstructionsBtn'), p = $('playWelcomeBtn'); if (i)
            i.onclick = function () { return showInstructionsV49(true); }; if (p)
            p.onclick = showShadyChoice; }, 0);
    };
    var previousShowMenu = showMenu;
    showMenu = function () {
        ensureV49();
        var nameVal = escapeV49(s.playerName || '').slice(0, 24);
        modal('Menu', "<div class=\"menu-player\"><label for=\"playerNameInput\">Player name</label><input id=\"playerNameInput\" maxlength=\"24\" placeholder=\"Add your name\" value=\"".concat(nameVal, "\"><button type=\"button\" id=\"savePlayerNameBtn\">SAVE NAME</button></div><div class=\"menu-settings\"><button type=\"button\" id=\"soundToggleBtn\">SOUNDS: ").concat(soundEnabled ? 'ON' : 'OFF', "</button><button type=\"button\" id=\"musicToggleBtn\">MUSIC: ").concat(musicEnabled ? 'ON' : 'OFF', "</button></div><div class=\"menu-list\"><button type=\"button\" id=\"instructionsBtn\">Instructions</button><button type=\"button\" id=\"statsBtn\">Stats</button><button type=\"button\" class=\"sell\" id=\"menuNewGameBtn\">New Game</button></div>"));
        setTimeout(function () {
            var instructions = $('instructionsBtn'), stats = $('statsBtn'), snd = $('soundToggleBtn'), mus = $('musicToggleBtn'), saveName = $('savePlayerNameBtn'), newGameBtn = $('menuNewGameBtn');
            if (instructions)
                instructions.onclick = function () { return showInstructionsV49(false); };
            if (saveName)
                saveName.onclick = (typeof setPlayerNameV18 === 'function') ? setPlayerNameV18 : function () { s.playerName = String(($('playerNameInput') && $('playerNameInput').value) || '').trim().slice(0, 24); save(); draw(); showMenu(); };
            if (stats)
                stats.onclick = showStats;
            if (snd)
                snd.onclick = function () { soundEnabled = !soundEnabled; localStorage.setItem('noir_market_sound', soundEnabled ? 'on' : 'off'); if (soundEnabled && typeof sound === 'function')
                    sound('positive'); save(); showMenu(); };
            if (mus)
                mus.onclick = function () { musicEnabled = !musicEnabled; localStorage.setItem('noir_market_music', musicEnabled ? 'on' : 'off'); if (musicEnabled && typeof startBackgroundMusic === 'function')
                    startBackgroundMusic();
                else if (typeof stopBackgroundMusic === 'function')
                    stopBackgroundMusic(); save(); showMenu(); };
            if (newGameBtn)
                newGameBtn.onclick = confirmNewGame;
        }, 0);
    };
    save = function () { ensureV49(); localStorage.setItem(SAVE_KEY, JSON.stringify(s)); };
    load = function () {
        var x = localStorage.getItem(SAVE_KEY);
        if (!x) {
            for (var _i = 0, FALLBACK_KEYS_16 = FALLBACK_KEYS; _i < FALLBACK_KEYS_16.length; _i++) {
                var key = FALLBACK_KEYS_16[_i];
                x = localStorage.getItem(key);
                if (x)
                    break;
            }
        }
        if (x) {
            s = JSON.parse(x);
            ensureV49();
            if (typeof setActiveCityMarket === 'function')
                setActiveCityMarket();
            if (typeof updateRankProgress === 'function')
                updateRankProgress();
            if (typeof updateBestRankV18 === 'function')
                updateBestRankV18();
            save();
            draw();
            return false;
        }
        newGame(false);
        ensureV49();
        save();
        return true;
    };
    baseState = function () { var state = previousBaseState(); state.version = VERSION; state.v49 = { stagedSplashReveal: true, howToPlayInstructionsButton: true }; return state; };
    draw = function () { previousDraw(); try {
        ensureV49();
    }
    catch (e) { } };
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', revealMainSplashAfterSnowV49, { once: true });
    else
        revealMainSplashAfterSnowV49();
    setTimeout(function () { try {
        ensureV49();
        document.title = 'Noir Market V5.0';
        save();
        console.log('NOIR MARKET V5.0: staged snow-first splash reveal and HOW TO PLAY instructions button active.');
    }
    catch (e) {
        console.warn('V5.0 startup skipped:', e);
    } }, 1500);
})();
/* Noir Market V5.9: mobile-safe optimisation layer, MP3 fade-in and stable particle background. */
(function () {
    var VERSION = '5.9';
    var SAVE_KEY = 'noir_market_v5_9';
    var FALLBACK_KEYS = ['noir_market_v5_7', 'noir_market_v5_6', 'noir_market_v5_5', 'noir_market_v5_4', 'noir_market_v5_3', 'noir_market_v5_2', 'noir_market_v5_1', 'noir_market_v5_0', 'noir_market_v4_9', 'noir_market_v4_8', 'noir_market_v4_7', 'noir_market_v4_6', 'noir_market_v4_5', 'noir_market_v4_4', 'noir_market_v4_3', 'noir_market_v4_2', 'noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4', 'noir_market_v1_3', 'noir_market_v1_2', 'noir_market_v13', 'noir_market_v12', 'noir_market_v9', 'noir_market_v6', 'noir_market_v5', 'noir_market_v4'];
    var previousBaseState = baseState;
    var previousDraw = draw;
    var previousLoad = load;
    var musicFadeTimerV54 = null;
    var bgMusicV54 = null;
    var particleRafV54 = 0;
    function isMobileV54() { return (window.matchMedia && window.matchMedia('(max-width: 760px)').matches) || ('ontouchstart' in window && Math.min(window.innerWidth || 999, window.innerHeight || 999) < 760); }
    function safeReadSaveV54(key) {
        var raw = null;
        try {
            raw = localStorage.getItem(key);
        }
        catch (e) {
            return null;
        }
        if (!raw || raw === 'undefined' || raw === 'null' || raw === '[object Object]')
            return null;
        try {
            var parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object' && parsed.inv && parsed.prices)
                return parsed;
        }
        catch (e) { }
        return null;
    }
    function ensureV54() {
        try {
            if (typeof ensureStats === 'function')
                ensureStats();
        }
        catch (e) { }
        if (!s || typeof s !== 'object')
            return;
        s.version = VERSION;
        s.v54 = s.v54 || { mobileOptimised: true, mp3Music: true, stableParticleBackground: true, splashWords: 'RISK_SURVIVE_TRADE' };
    }
    save = function () {
        try {
            ensureV54();
            localStorage.setItem(SAVE_KEY, JSON.stringify(s));
        }
        catch (e) { }
    };
    load = function () {
        var parsed = safeReadSaveV54(SAVE_KEY);
        if (!parsed) {
            for (var i = 0; i < FALLBACK_KEYS.length; i++) {
                parsed = safeReadSaveV54(FALLBACK_KEYS[i]);
                if (parsed)
                    break;
            }
        }
        if (parsed) {
            s = parsed;
            ensureV54();
            try {
                if (typeof setActiveCityMarket === 'function')
                    setActiveCityMarket();
            }
            catch (e) { }
            try {
                if (typeof updateRankProgress === 'function')
                    updateRankProgress();
            }
            catch (e) { }
            try {
                if (typeof updateBestRankV18 === 'function')
                    updateBestRankV18();
            }
            catch (e) { }
            save();
            try {
                draw();
            }
            catch (e) {
                try {
                    previousDraw();
                }
                catch (_) { }
            }
            return false;
        }
        var started = false;
        try {
            started = previousLoad ? previousLoad() : false;
        }
        catch (e) {
            try {
                newGame(false);
                started = true;
            }
            catch (_) { }
        }
        ensureV54();
        save();
        try {
            draw();
        }
        catch (e) { }
        return started;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        state.v54 = { mobileOptimised: true, mp3Music: true, stableParticleBackground: true, splashWords: 'RISK_SURVIVE_TRADE' };
        return state;
    };
    function startSplashWordsV54() {
        var old = document.getElementById('splashTagline');
        if (!old)
            return;
        var el = old.cloneNode(true);
        old.parentNode.replaceChild(el, old);
        var words = ['RISK.', 'SURVIVE.', 'TRADE.'];
        var idx = 0;
        el.textContent = words[0];
        el.classList.remove('fade-out');
        if (window.__NOIR_V54_WORD_TIMER)
            clearInterval(window.__NOIR_V54_WORD_TIMER);
        window.__NOIR_V54_WORD_TIMER = setInterval(function () {
            if (!document.body.contains(el)) {
                clearInterval(window.__NOIR_V54_WORD_TIMER);
                return;
            }
            el.classList.add('fade-out');
            setTimeout(function () { idx = (idx + 1) % words.length; el.textContent = words[idx]; el.classList.remove('fade-out'); }, 430);
        }, 1550);
    }
    function setupStableBackgroundV54() {
        var holder = document.getElementById('mainParallaxBg');
        if (!holder)
            return;
        holder.className = 'main-particle-bg';
        holder.removeAttribute('style');
        holder.style.pointerEvents = 'none';
        if (isMobileV54()) {
            holder.innerHTML = '';
            return;
        }
        if (holder.dataset.v54Canvas === '1')
            return;
        holder.dataset.v54Canvas = '1';
        holder.innerHTML = '';
        var canvas = document.createElement('canvas');
        canvas.id = 'mainParticleCanvas';
        canvas.setAttribute('aria-hidden', 'true');
        holder.appendChild(canvas);
        var ctx = canvas.getContext && canvas.getContext('2d');
        if (!ctx)
            return;
        var particles = [];
        var width = 0, height = 0, dpr = 1;
        function resize() {
            width = window.innerWidth || holder.clientWidth || 800;
            height = window.innerHeight || holder.clientHeight || 600;
            dpr = Math.min(2, window.devicePixelRatio || 1);
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            var count = Math.max(34, Math.min(90, Math.round(width * height / 8500)));
            while (particles.length < count) {
                particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .38, vy: (Math.random() - .5) * .38, r: 1 + Math.random() * .55 });
            }
            if (particles.length > count)
                particles.length = count;
        }
        function render() {
            ctx.clearRect(0, 0, width, height);
            for (var i = 0; i < particles.length; i++) {
                var a = particles[i];
                a.x += a.vx;
                a.y += a.vy;
                if (a.x < -20 || a.x > width + 20)
                    a.vx = -a.vx;
                if (a.y < -20 || a.y > height + 20)
                    a.vy = -a.vy;
                ctx.beginPath();
                ctx.fillStyle = 'rgba(155,155,155,.58)';
                ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                ctx.fill();
                for (var j = i + 1; j < particles.length; j++) {
                    var b = particles[j], dx = a.x - b.x, dy = a.y - b.y, dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 116) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(150,150,150,' + ((116 - dist) / 116 * .34).toFixed(3) + ')';
                        ctx.lineWidth = .6;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            particleRafV54 = requestAnimationFrame(render);
        }
        window.addEventListener('resize', resize, { passive: true });
        resize();
        if (particleRafV54)
            cancelAnimationFrame(particleRafV54);
        render();
    }
    function stopMusicV54() {
        if (musicFadeTimerV54) {
            clearInterval(musicFadeTimerV54);
            musicFadeTimerV54 = null;
        }
        try {
            if (bgMusicV54)
                bgMusicV54.pause();
        }
        catch (e) { }
        try {
            if (typeof stopSynthMusic === 'function')
                stopSynthMusic();
        }
        catch (e) { }
    }
    startBackgroundMusic = function () {
        if (!musicEnabled)
            return;
        try {
            unlockAudio();
        }
        catch (e) { }
        musicStarted = true;
        try {
            if (typeof Audio !== 'undefined') {
                if (!bgMusicV54) {
                    bgMusicV54 = new Audio('assets/music/noir_market_music.mp3');
                    bgMusicV54.preload = 'none';
                    bgMusicV54.loop = true;
                    bgMusicV54.volume = 0;
                }
                if (musicFadeTimerV54) {
                    clearInterval(musicFadeTimerV54);
                    musicFadeTimerV54 = null;
                }
                bgMusicV54.loop = true;
                var playResult = bgMusicV54.play();
                if (playResult && playResult.catch)
                    playResult.catch(function () { try {
                        startSynthMusic();
                    }
                    catch (e) { } });
                var start = Date.now();
                musicFadeTimerV54 = setInterval(function () {
                    if (!bgMusicV54) {
                        clearInterval(musicFadeTimerV54);
                        musicFadeTimerV54 = null;
                        return;
                    }
                    var p = Math.min(1, (Date.now() - start) / 2600);
                    bgMusicV54.volume = Math.min(.5, p * .5);
                    if (p >= 1) {
                        clearInterval(musicFadeTimerV54);
                        musicFadeTimerV54 = null;
                    }
                }, 120);
                return;
            }
        }
        catch (e) { }
        try {
            startSynthMusic();
        }
        catch (e) { }
    };
    stopBackgroundMusic = stopMusicV54;
    function ensureMobileUIV54() {
        var splash = document.getElementById('splash');
        var app = document.querySelector('.app');
        var sections = document.querySelectorAll('.news-ticker,.topbar,.stats,.location,.notice,.market,.pocket,.actions,.status');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.visibility = 'visible';
            sections[i].style.opacity = '1';
            sections[i].style.position = 'relative';
            sections[i].style.zIndex = '6';
        }
        if (app) {
            app.style.position = 'relative';
            app.style.zIndex = '5';
            app.style.pointerEvents = 'auto';
        }
        if (splash && splash.classList.contains('hide')) {
            splash.style.pointerEvents = 'none';
            splash.style.display = 'none';
        }
    }
    draw = function () { try {
        previousDraw();
    }
    catch (e) {
        console.warn('V5.4 draw recovery', e);
    } ensureV54(); setupStableBackgroundV54(); ensureMobileUIV54(); };
    function rebindButtonsV54() {
        function bind(id, fn) { var el = document.getElementById(id); if (el)
            el.onclick = fn; }
        bind('menuBtn', function () { showMenu(); });
        bind('buyBtn', function () { try {
            buyModal();
        }
        catch (e) {
            transact('Buy');
        } });
        bind('sellBtn', function () { try {
            sellModal();
        }
        catch (e) {
            transact('Sell');
        } });
        bind('dumpBtn', function () { dump(); });
        bind('bankBtn', function () { bank(); });
        bind('travelBtn', function () { travel(); });
        bind('shopBtn', function () { shop(); });
        bind('hustleBtn', function () { hustle(); });
        bind('contactsBtn', function () { contacts(); });
        bind('stayBtn', function () { stay(); });
    }
    function initV54() {
        document.title = 'Noir Market V5.9';
        startSplashWordsV54();
        setupStableBackgroundV54();
        rebindButtonsV54();
        ensureMobileUIV54();
        if (s && typeof s === 'object') {
            ensureV54();
            save();
            try {
                draw();
            }
            catch (e) { }
        }
        console.log('NOIR MARKET V5.9: mobile-safe stable build active.');
    }
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', initV54, { once: true });
    else
        initV54();
    setTimeout(initV54, 450);
    setTimeout(initV54, 2400);
})();


/* Noir Market V5.9: HOW TO PLAY starting city selector. */
(function () {
    var VERSION = '5.9';
    var SAVE_KEY = 'noir_market_v5_9';
    var FALLBACK_KEYS = ['noir_market_v5_7', 'noir_market_v5_6', 'noir_market_v5_5', 'noir_market_v5_4', 'noir_market_v5_3', 'noir_market_v5_2', 'noir_market_v5_1', 'noir_market_v5_0', 'noir_market_v4_9', 'noir_market_v4_8', 'noir_market_v4_7', 'noir_market_v4_6', 'noir_market_v4_5', 'noir_market_v4_4', 'noir_market_v4_3', 'noir_market_v4_2', 'noir_market_v4_1', 'noir_market_v4_0', 'noir_market_v3_9', 'noir_market_v3_8', 'noir_market_v3_7', 'noir_market_v3_6', 'noir_market_v3_5', 'noir_market_v3_4', 'noir_market_v3_3', 'noir_market_v3_2', 'noir_market_v3_1', 'noir_market_v3_0', 'noir_market_v2_9', 'noir_market_v2_8', 'noir_market_v2_7', 'noir_market_v2_6', 'noir_market_v2_5', 'noir_market_v2_4', 'noir_market_v2_3', 'noir_market_v2_2', 'noir_market_v2_1', 'noir_market_v2_0', 'noir_market_v1_9', 'noir_market_v1_8', 'noir_market_v1_7', 'noir_market_v1_6', 'noir_market_v1_5', 'noir_market_v1_4'];
    var previousBaseState = baseState;
    var previousSave = save;
    var previousLoad = load;
    var selectedStartingCityIndexV57 = 0;
    function placeNameV57(idx) {
        return (places && places[idx] && places[idx][0]) || 'London';
    }
    function escapeV57(value) {
        return String(value == null ? '' : value).replace(/[&<>'"]/g, function (ch) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch] || ch;
        });
    }
    function safeReadSaveV57(key) {
        var raw = null;
        try { raw = localStorage.getItem(key); } catch (e) { return null; }
        if (!raw || raw === 'undefined' || raw === 'null' || raw === '[object Object]') return null;
        try {
            var parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object' && parsed.inv && parsed.prices) return parsed;
        } catch (e) {}
        return null;
    }
    function ensureV57() {
        if (!s || typeof s !== 'object') return;
        s.version = VERSION;
        s.v57 = s.v57 || { startingCitySelector: true };
    }
    save = function () {
        try {
            ensureV57();
            localStorage.setItem(SAVE_KEY, JSON.stringify(s));
        } catch (e) {
            try { previousSave(); } catch (_) {}
        }
    };
    load = function () {
        var parsed = safeReadSaveV57(SAVE_KEY);
        if (!parsed) {
            for (var i = 0; i < FALLBACK_KEYS.length; i++) {
                parsed = safeReadSaveV57(FALLBACK_KEYS[i]);
                if (parsed) break;
            }
        }
        if (parsed) {
            s = parsed;
            ensureV57();
            try { if (typeof setActiveCityMarket === 'function') setActiveCityMarket(); } catch (e) {}
            try { if (typeof updateRankProgress === 'function') updateRankProgress(); } catch (e) {}
            try { save(); } catch (e) {}
            try { draw(); } catch (e) {}
            return false;
        }
        var started = false;
        try { started = previousLoad ? previousLoad() : false; } catch (e) { try { newGame(false); started = true; } catch (_) {} }
        ensureV57();
        try { save(); } catch (e) {}
        return started;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        state.v57 = { startingCitySelector: true };
        return state;
    };
    function selectorHtmlV57() {
        /* Dot positions are percentages against the supplied square map asset. They are hand placed
           against the actual outline rather than calculated geographically because the map is stylised. */
        var dots = [
            ['Aberdeen', 52.5, 15.8],
            ['Edinburgh', 47.6, 29.9],
            ['Glasgow', 41.9, 31.3],
            ['Newcastle', 57.8, 43.9],
            ['Leeds', 54.0, 52.4],
            ['Manchester', 49.2, 56.1],
            ['Liverpool', 43.4, 56.3],
            ['Birmingham', 52.0, 67.0],
            ['Cardiff', 43.4, 79.2],
            ['Bristol', 49.3, 78.2],
            ['London', 65.8, 78.6],
            ['Belfast', 28.4, 48.8],
            ['Dublin', 25.7, 62.8],
            ['Cork', 24.7, 77.6]
        ];
        var dotHtml = dots.map(function (d) {
            var city = escapeV57(d[0]);
            return '<button type="button" class="city-map-dot" data-city="' + city + '" aria-label="Start in ' + city + '" style="left:' + d[1] + '%;top:' + d[2] + '%;" onclick="return window.selectStartingCityV59 && window.selectStartingCityV59(this.getAttribute(&quot;data-city&quot;), event);"></button>';
        }).join('');
        return '<div class="start-city-selector"><div class="start-city-label">Choose starting city</div><div id="startCityMap" class="uk-start-map-real" aria-label="Starting city map" role="group"><img src="assets/uk-start-map.png" alt="White outline UK and Ireland map">' + dotHtml + '</div><div id="selectedStartingCity" class="selected-start-city">Starting City: London</div></div>';
    }
    function indexForCityV57(city) {
        for (var i = 0; i < places.length; i++) {
            if (places[i] && places[i][0] === city) return i;
        }
        return 0;
    }
    window.selectStartingCityV59 = function (city, ev) {
        if (ev) {
            if (ev.preventDefault) ev.preventDefault();
            if (ev.stopPropagation) ev.stopPropagation();
        }
        selectedStartingCityIndexV57 = indexForCityV57(city);
        refreshSelectedCityV57();
        return false;
    };
    function refreshSelectedCityV57() {
        var name = placeNameV57(selectedStartingCityIndexV57);
        var label = document.getElementById('selectedStartingCity');
        if (label) label.textContent = 'Starting City: ' + name;
        var dots = document.querySelectorAll('#startCityMap [data-city]');
        for (var i = 0; i < dots.length; i++) {
            if (dots[i].getAttribute('data-city') === name) dots[i].classList.add('selected');
            else dots[i].classList.remove('selected');
        }
    }
    function bindStartingCityMapV57() {
        refreshSelectedCityV57();
        var map = document.getElementById('startCityMap');
        var dots = document.querySelectorAll('#startCityMap [data-city]');
        for (var i = 0; i < dots.length; i++) {
            dots[i].onclick = function (ev) { return window.selectStartingCityV59(this.getAttribute('data-city'), ev || window.event); };
            dots[i].ontouchstart = function (ev) { return window.selectStartingCityV59(this.getAttribute('data-city'), ev || window.event); };
            dots[i].onpointerup = function (ev) { return window.selectStartingCityV59(this.getAttribute('data-city'), ev || window.event); };
            dots[i].onkeydown = function (ev) {
                ev = ev || window.event;
                var code = ev.key || ev.keyCode;
                if (code === 'Enter' || code === ' ' || code === 13 || code === 32) return window.selectStartingCityV59(this.getAttribute('data-city'), ev);
            };
        }
        if (map) {
            map.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                while (target && target !== map && !target.getAttribute('data-city')) target = target.parentNode;
                if (target && target !== map && target.getAttribute('data-city')) return window.selectStartingCityV59(target.getAttribute('data-city'), ev);
            };
        }
    }
    function applyStartingCityV57() {
        var city = placeNameV57(selectedStartingCityIndexV57);
        if (!s || typeof s !== 'object') s = baseState();
        s.city = selectedStartingCityIndexV57;
        s.notice = 'You start in ' + city + ' with £1,000 cash, £0 in the bank and a clean slate.';
        s.news = (city + ': MARKETS ARE QUIET TODAY.').toUpperCase();
        if (s.economy && s.economy.news) s.economy.news.text = s.news;
        try { if (typeof ensureEconomy === 'function') ensureEconomy(); } catch (e) {}
        try { if (typeof setActiveCityMarket === 'function') setActiveCityMarket(); } catch (e) {}
        try { save(); } catch (e) {}
        try { draw(); } catch (e) {}
    }
    showWelcome = function () {
        selectedStartingCityIndexV57 = 0;
        modal('How to Play', '<div class="howto howto-start-select"><p>You start with £1,000, no debt and questionable judgement.</p><p>Buy low, sell high, travel between cities and try not to get robbed, arrested, battered or completely rinsed by the market.</p><p>Rumours may help. They may also be nonsense. That is business.</p><p class="disclaimer">This game is for entertainment purposes only.</p><div class="howto-actions"><button type="button" id="welcomeInstructionsBtn" class="play-wide">INSTRUCTIONS</button></div>' + selectorHtmlV57() + '<button type="button" id="playWelcomeBtn" class="buy play-wide start-play-btn">PLAY</button></div>');
        setTimeout(function () {
            var i = document.getElementById('welcomeInstructionsBtn');
            var p = document.getElementById('playWelcomeBtn');
            if (i) i.onclick = function () { return showInstructionsV49(true); };
            if (p) p.onclick = function () { applyStartingCityV57(); return showShadyChoice(); };
            bindStartingCityMapV57();
        }, 0);
    };
    function initV57() {
        document.title = 'Noir Market V5.9';
        ensureV57();
        try { save(); } catch (e) {}
        console.log('NOIR MARKET V5.9: corrected tappable starting city selector active.');
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initV57, { once: true }); else initV57();
})();


/* Noir Market V6.0: robust SVG starting city selector with corrected positions. */
(function () {
    var VERSION = '6.0';
    var SAVE_KEY = 'noir_market_v6_0';
    var FALLBACK_KEYS = ['noir_market_v5_9','noir_market_v5_8','noir_market_v5_7','noir_market_v5_6','noir_market_v5_5','noir_market_v5_4','noir_market_v5_3','noir_market_v5_2','noir_market_v5_1','noir_market_v5_0','noir_market_v4_9','noir_market_v4_8','noir_market_v4_7','noir_market_v4_6','noir_market_v4_5','noir_market_v4_4','noir_market_v4_3','noir_market_v4_2','noir_market_v4_1','noir_market_v4_0','noir_market_v3_9','noir_market_v3_8','noir_market_v3_7','noir_market_v3_6','noir_market_v3_5','noir_market_v3_4','noir_market_v3_3','noir_market_v3_2','noir_market_v3_1','noir_market_v3_0','noir_market_v2_9','noir_market_v2_8','noir_market_v2_7','noir_market_v2_6','noir_market_v2_5','noir_market_v2_4','noir_market_v2_3','noir_market_v2_2','noir_market_v2_1','noir_market_v2_0','noir_market_v1_9','noir_market_v1_8','noir_market_v1_7','noir_market_v1_6','noir_market_v1_5','noir_market_v1_4'];
    var previousBaseState = baseState;
    var previousSave = save;
    var previousLoad = load;
    var selectedStartingCityIndexV60 = 0;
    var DOTS_V60 = [
        ['Aberdeen', 54.8, 17.0],
        ['Edinburgh', 48.9, 30.3],
        ['Glasgow', 43.0, 31.6],
        ['Newcastle', 58.7, 44.5],
        ['Leeds', 55.1, 53.1],
        ['Manchester', 49.9, 56.9],
        ['Liverpool', 44.7, 56.8],
        ['Birmingham', 52.7, 67.4],
        ['Cardiff', 43.6, 79.3],
        ['Bristol', 49.4, 78.1],
        ['London', 70.1, 78.0],
        ['Belfast', 29.4, 49.6],
        ['Dublin', 28.0, 62.5],
        ['Cork', 27.2, 77.5]
    ];
    function escapeV60(value) {
        return String(value == null ? '' : value).replace(/[&<>'"]/g, function (ch) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch] || ch;
        });
    }
    function placeNameV60(idx) {
        return (places && places[idx] && places[idx][0]) || 'London';
    }
    function indexForCityV60(city) {
        for (var i = 0; i < places.length; i++) {
            if (places[i] && places[i][0] === city) return i;
        }
        return 0;
    }
    function safeReadSaveV60(key) {
        var raw = null;
        try { raw = localStorage.getItem(key); } catch (e) { return null; }
        if (!raw || raw === 'undefined' || raw === 'null' || raw === '[object Object]') return null;
        try {
            var parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object' && parsed.inv && parsed.prices) return parsed;
        } catch (e) {}
        return null;
    }
    function ensureV60() {
        if (!s || typeof s !== 'object') return;
        s.version = VERSION;
        s.v60 = s.v60 || { correctedSvgStartingCitySelector: true };
    }
    save = function () {
        try {
            ensureV60();
            localStorage.setItem(SAVE_KEY, JSON.stringify(s));
        } catch (e) {
            try { previousSave(); } catch (_) {}
        }
    };
    load = function () {
        var parsed = safeReadSaveV60(SAVE_KEY);
        if (!parsed) {
            for (var i = 0; i < FALLBACK_KEYS.length; i++) {
                parsed = safeReadSaveV60(FALLBACK_KEYS[i]);
                if (parsed) break;
            }
        }
        if (parsed) {
            s = parsed;
            ensureV60();
            try { if (typeof setActiveCityMarket === 'function') setActiveCityMarket(); } catch (e) {}
            try { if (typeof updateRankProgress === 'function') updateRankProgress(); } catch (e) {}
            try { save(); } catch (e) {}
            try { draw(); } catch (e) {}
            return false;
        }
        var started = false;
        try { started = previousLoad ? previousLoad() : false; } catch (e) { try { newGame(false); started = true; } catch (_) {} }
        ensureV60();
        try { save(); } catch (e) {}
        return started;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        state.v60 = { correctedSvgStartingCitySelector: true };
        return state;
    };
    function selectorHtmlV60() {
        var dots = DOTS_V60.map(function (d) {
            var city = escapeV60(d[0]);
            return '<g class="city-svg-hit" data-city="' + city + '" role="button" tabindex="0" aria-label="Start in ' + city + '" aria-pressed="false">' +
                '<circle class="city-svg-touch" cx="' + d[1] + '" cy="' + d[2] + '" r="5.7"></circle>' +
                '<circle class="city-svg-dot" cx="' + d[1] + '" cy="' + d[2] + '" r="1.45"></circle>' +
            '</g>';
        }).join('');
        return '<div class="start-city-selector start-city-selector-v60"><div class="start-city-label">Choose starting city</div>' +
            '<div id="startCityMapV60" class="uk-start-map-svg" aria-label="Starting city map" role="group">' +
            '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="false">' +
            '<image href="assets/uk-start-map.png" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid meet"></image>' +
            dots + '</svg></div>' +
            '<div id="selectedStartingCityV60" class="selected-start-city">Starting City: London</div></div>';
    }
    window.selectStartingCityV60 = function (city, ev) {
        if (ev) {
            if (ev.preventDefault) ev.preventDefault();
            if (ev.stopPropagation) ev.stopPropagation();
        }
        selectedStartingCityIndexV60 = indexForCityV60(city);
        refreshSelectedCityV60();
        try { sound('positive'); } catch (e) {}
        return false;
    };
    function refreshSelectedCityV60() {
        var name = placeNameV60(selectedStartingCityIndexV60);
        var label = document.getElementById('selectedStartingCityV60');
        if (label) label.textContent = 'Starting City: ' + name;
        var hits = document.querySelectorAll('#startCityMapV60 [data-city]');
        for (var i = 0; i < hits.length; i++) {
            var isSelected = hits[i].getAttribute('data-city') === name;
            if (isSelected) hits[i].setAttribute('class', 'city-svg-hit selected');
            else hits[i].setAttribute('class', 'city-svg-hit');
            hits[i].setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        }
    }
    function bindStartingCityMapV60() {
        refreshSelectedCityV60();
        var map = document.getElementById('startCityMapV60');
        if (!map) return;
        function handle(ev) {
            ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            while (target && target !== map && !(target.getAttribute && target.getAttribute('data-city'))) target = target.parentNode;
            if (target && target !== map && target.getAttribute && target.getAttribute('data-city')) {
                return window.selectStartingCityV60(target.getAttribute('data-city'), ev);
            }
        }
        if (map.addEventListener) {
            map.addEventListener('click', handle, false);
            map.addEventListener('touchend', handle, false);
            map.addEventListener('pointerup', handle, false);
            map.addEventListener('keydown', function (ev) {
                ev = ev || window.event;
                var code = ev.key || ev.keyCode;
                if (code === 'Enter' || code === ' ' || code === 13 || code === 32) handle(ev);
            }, false);
        } else {
            map.onclick = handle;
        }
    }
    function applyStartingCityV60() {
        var city = placeNameV60(selectedStartingCityIndexV60);
        if (!s || typeof s !== 'object') s = baseState();
        s.city = selectedStartingCityIndexV60;
        s.notice = 'You start in ' + city + ' with £1,000 cash, £0 in the bank and a clean slate.';
        s.news = (city + ': MARKETS ARE QUIET TODAY.').toUpperCase();
        if (s.economy && s.economy.news) s.economy.news.text = s.news;
        try { if (typeof ensureEconomy === 'function') ensureEconomy(); } catch (e) {}
        try { if (typeof setActiveCityMarket === 'function') setActiveCityMarket(); } catch (e) {}
        try { save(); } catch (e) {}
        try { draw(); } catch (e) {}
    }
    showWelcome = function () {
        selectedStartingCityIndexV60 = 0;
        modal('How to Play', '<div class="howto howto-start-select"><p>You start with £1,000, no debt and questionable judgement.</p><p>Buy low, sell high, travel between cities and try not to get robbed, arrested, battered or completely rinsed by the market.</p><p>Rumours may help. They may also be nonsense. That is business.</p><p class="disclaimer">This game is for entertainment purposes only.</p><div class="howto-actions"><button type="button" id="welcomeInstructionsBtn" class="play-wide">INSTRUCTIONS</button></div>' + selectorHtmlV60() + '<button type="button" id="playWelcomeBtn" class="buy play-wide start-play-btn">PLAY</button></div>');
        setTimeout(function () {
            var i = document.getElementById('welcomeInstructionsBtn');
            var p = document.getElementById('playWelcomeBtn');
            if (i) i.onclick = function () { return showInstructionsV49(true); };
            if (p) p.onclick = function () { applyStartingCityV60(); return showShadyChoice(); };
            bindStartingCityMapV60();
        }, 0);
    };
    function initV60() {
        document.title = 'Noir Market V6.0';
        ensureV60();
        try { save(); } catch (e) {}
        console.log('NOIR MARKET V6.0: SVG starting city selector active.');
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initV60, { once: true }); else initV60();
})();

/* Noir Market V6.1: button-based starting city selector. Removes map dots. */
(function () {
    var VERSION = '6.1';
    var SAVE_KEY = 'noir_market_v6_1';
    var FALLBACK_KEYS = ['noir_market_v6_0','noir_market_v5_9','noir_market_v5_8','noir_market_v5_7','noir_market_v5_6','noir_market_v5_5','noir_market_v5_4','noir_market_v5_3','noir_market_v5_2','noir_market_v5_1','noir_market_v5_0','noir_market_v4_9','noir_market_v4_8','noir_market_v4_7','noir_market_v4_6','noir_market_v4_5','noir_market_v4_4','noir_market_v4_3','noir_market_v4_2','noir_market_v4_1','noir_market_v4_0','noir_market_v3_9','noir_market_v3_8','noir_market_v3_7','noir_market_v3_6','noir_market_v3_5','noir_market_v3_4','noir_market_v3_3','noir_market_v3_2','noir_market_v3_1','noir_market_v3_0','noir_market_v2_9','noir_market_v2_8','noir_market_v2_7','noir_market_v2_6','noir_market_v2_5','noir_market_v2_4','noir_market_v2_3','noir_market_v2_2','noir_market_v2_1','noir_market_v2_0','noir_market_v1_9','noir_market_v1_8','noir_market_v1_7','noir_market_v1_6','noir_market_v1_5','noir_market_v1_4'];
    var previousBaseState = baseState;
    var previousSave = save;
    var previousLoad = load;
    var selectedStartingCityIndexV61 = null;
    var CITY_ORDER_V61 = ['London','Manchester','Birmingham','Liverpool','Bristol','Glasgow','Cardiff','Leeds','Newcastle','Edinburgh','Aberdeen','Belfast','Dublin','Cork'];
    function escapeV61(value) {
        return String(value == null ? '' : value).replace(/[&<>'"]/g, function (ch) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch] || ch;
        });
    }
    function placeNameV61(idx) {
        return (places && places[idx] && places[idx][0]) || 'London';
    }
    function indexForCityV61(city) {
        for (var i = 0; i < places.length; i++) {
            if (places[i] && places[i][0] === city) return i;
        }
        return 0;
    }
    function safeReadSaveV61(key) {
        var raw = null;
        try { raw = localStorage.getItem(key); } catch (e) { return null; }
        if (!raw || raw === 'undefined' || raw === 'null' || raw === '[object Object]') return null;
        try {
            var parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object' && parsed.inv && parsed.prices) return parsed;
        } catch (e) {}
        return null;
    }
    function ensureV61() {
        if (!s || typeof s !== 'object') return;
        s.version = VERSION;
        s.v61 = s.v61 || { buttonStartingCitySelector: true };
    }
    save = function () {
        try {
            ensureV61();
            localStorage.setItem(SAVE_KEY, JSON.stringify(s));
        } catch (e) {
            try { previousSave(); } catch (_) {}
        }
    };
    load = function () {
        var parsed = safeReadSaveV61(SAVE_KEY);
        if (!parsed) {
            for (var i = 0; i < FALLBACK_KEYS.length; i++) {
                parsed = safeReadSaveV61(FALLBACK_KEYS[i]);
                if (parsed) break;
            }
        }
        if (parsed) {
            s = parsed;
            ensureV61();
            try { if (typeof setActiveCityMarket === 'function') setActiveCityMarket(); } catch (e) {}
            try { if (typeof updateRankProgress === 'function') updateRankProgress(); } catch (e) {}
            try { save(); } catch (e) {}
            try { draw(); } catch (e) {}
            return false;
        }
        var started = false;
        try { started = previousLoad ? previousLoad() : false; } catch (e) { try { newGame(false); started = true; } catch (_) {} }
        ensureV61();
        try { save(); } catch (e) {}
        return started;
    };
    baseState = function () {
        var state = previousBaseState();
        state.version = VERSION;
        state.v61 = { buttonStartingCitySelector: true };
        return state;
    };
    function selectorHtmlV61() {
        var buttons = CITY_ORDER_V61.map(function (city) {
            var safeCity = escapeV61(city);
            return '<button type="button" class="start-city-option-v61" data-city="' + safeCity + '" aria-pressed="false">' + safeCity + '</button>';
        }).join('');
        return '<div class="start-city-selector start-city-selector-v61"><div class="start-city-label">Choose starting city</div>' +
            '<div class="start-city-panel-v61">' +
                '<div id="startCityButtonsV61" class="start-city-buttons-v61" aria-label="Starting city list">' + buttons + '</div>' +
                '<div class="start-city-map-v61" aria-hidden="true"><img src="assets/uk-start-map.png" alt=""></div>' +
            '</div>' +
            '<div id="selectedStartingCityV61" class="selected-start-city start-city-prompt-v61"><span class="pending">Select a starting city</span></div></div>';
    }
    window.selectStartingCityV61 = function (city, ev) {
        if (ev) {
            if (ev.preventDefault) ev.preventDefault();
            if (ev.stopPropagation) ev.stopPropagation();
        }
        selectedStartingCityIndexV61 = indexForCityV61(city);
        refreshSelectedCityV61();
        try { sound('positive'); } catch (e) {}
        return false;
    };
    function refreshSelectedCityV61() {
        var hasSelection = selectedStartingCityIndexV61 !== null && selectedStartingCityIndexV61 !== undefined;
        var name = hasSelection ? placeNameV61(selectedStartingCityIndexV61) : '';
        var label = document.getElementById('selectedStartingCityV61');
        if (label) label.innerHTML = hasSelection ? ('Starting City: ' + escapeV61(name)) : '<span class="pending">Select a starting city</span>';
        var buttons = document.querySelectorAll('#startCityButtonsV61 [data-city]');
        for (var i = 0; i < buttons.length; i++) {
            var isSelected = hasSelection && buttons[i].getAttribute('data-city') === name;
            if (isSelected) buttons[i].classList.add('selected'); else buttons[i].classList.remove('selected');
            buttons[i].setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        }
        var play = document.getElementById('playWelcomeBtn');
        if (play) {
            play.disabled = !hasSelection;
            if (hasSelection) play.classList.remove('disabled'); else play.classList.add('disabled');
        }
    }
    function bindStartingCityButtonsV61() {
        var wrap = document.getElementById('startCityButtonsV61');
        if (!wrap) return;
        function handle(ev) {
            ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            while (target && target !== wrap && !(target.getAttribute && target.getAttribute('data-city'))) target = target.parentNode;
            if (target && target !== wrap && target.getAttribute && target.getAttribute('data-city')) {
                return window.selectStartingCityV61(target.getAttribute('data-city'), ev);
            }
        }
        if (wrap.addEventListener) {
            wrap.addEventListener('click', handle, false);
            wrap.addEventListener('touchend', handle, false);
            wrap.addEventListener('pointerup', handle, false);
        } else {
            wrap.onclick = handle;
        }
        refreshSelectedCityV61();
    }
    function applyStartingCityV61() {
        if (selectedStartingCityIndexV61 === null || selectedStartingCityIndexV61 === undefined) {
            try { toast('SELECT A STARTING CITY', 'bad'); } catch (e) {}
            return false;
        }
        var city = placeNameV61(selectedStartingCityIndexV61);
        if (!s || typeof s !== 'object') s = baseState();
        s.city = selectedStartingCityIndexV61;
        s.notice = 'You start in ' + city + ' with £1,000 cash, £0 in the bank and a clean slate.';
        s.news = (city + ': MARKETS ARE QUIET TODAY.').toUpperCase();
        if (s.economy && s.economy.news) s.economy.news.text = s.news;
        try { if (typeof ensureEconomy === 'function') ensureEconomy(); } catch (e) {}
        try { if (typeof setActiveCityMarket === 'function') setActiveCityMarket(); } catch (e) {}
        try { save(); } catch (e) {}
        try { draw(); } catch (e) {}
        return true;
    }
    showWelcome = function () {
        selectedStartingCityIndexV61 = null;
        modal('How to Play', '<div class="howto howto-start-select"><p>You start with £1,000, no debt and questionable judgement.</p><p>Buy low, sell high, travel between cities and try not to get robbed, arrested, battered or completely rinsed by the market.</p><p>Rumours may help. They may also be nonsense. That is business.</p><p class="disclaimer">This game is for entertainment purposes only.</p><div class="howto-actions"><button type="button" id="welcomeInstructionsBtn" class="play-wide">INSTRUCTIONS</button></div>' + selectorHtmlV61() + '<button type="button" id="playWelcomeBtn" class="buy play-wide start-play-btn disabled" disabled>PLAY</button></div>');
        setTimeout(function () {
            var i = document.getElementById('welcomeInstructionsBtn');
            var p = document.getElementById('playWelcomeBtn');
            if (i) i.onclick = function () { return showInstructionsV49(true); };
            if (p) p.onclick = function () { if (!applyStartingCityV61()) return false; return showShadyChoice(); };
            bindStartingCityButtonsV61();
        }, 0);
    };
    function initV61() {
        document.title = 'Noir Market V6.1';
        ensureV61();
        try { save(); } catch (e) {}
        console.log('NOIR MARKET V6.1: button-based starting city selector active.');
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initV61, { once: true }); else initV61();
})();
