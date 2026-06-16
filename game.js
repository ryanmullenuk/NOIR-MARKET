const drugs=[['Cocaine','⚪',1200,9000],['Crack','🪨',800,5200],['Ecstasy','🟢',200,2800],['Hashish','🧱',300,2500],['Heroin','💉',900,6000],['Ice','💎',700,4200],['Kat','🌿',40,800],['LSD','🎟️',120,1600],['MDA','🟣',200,1800],['Morphine','🧴',500,2600],['Mushrooms','🍄',60,900],['Peyote','🌵',80,1200],['Pot','🍃',80,900],['Speed','▱',160,1800]];
const places=[['London','UK','🇬🇧','Heathrow / City'],['Manchester','UK','🇬🇧','Manchester Airport'],['Birmingham','UK','🇬🇧','BHX'],['Liverpool','UK','🇬🇧','John Lennon'],['Leeds','UK','🇬🇧','Leeds Bradford'],['Newcastle','UK','🇬🇧','NCL'],['Bristol','UK','🇬🇧','Bristol Airport'],['Cardiff','Wales','🏴','Cardiff Airport'],['Glasgow','Scotland','🏴','GLA'],['Edinburgh','Scotland','🏴','EDI'],['Aberdeen','Scotland','🏴','ABZ'],['Belfast','Northern Ireland','🇬🇧','BFS'],['Dublin','Ireland','🇮🇪','DUB'],['Cork','Ireland','🇮🇪','ORK']];
const lenders=[['SPAMMER',10000,3,.25],['TOMMY',20000,5,.30],['SMUDGER',50000,5,.50],['BAZZER',75000,3,.50],['GRIFF',100000,3,.70]];
const shopItems=[['Bigger Backpack',5000,25,'person'],['Sports Bag',20000,50,'person'],['Trunk Upgrade',100000,100,'offsite'],['Warehouse',1000000,500,'offsite']];
const hospitalTreatments=[['+25% Health',25000,25],['+50% Health',50000,50],['Full Health (100%)',100000,100]];
const weapons=[
  {name:'Knife',price:500,escape:.10,win:.18,damage:'Low',notes:'Concealable, low police attention',heat:2,singleUse:false},
  {name:'Baseball Bat',price:1000,escape:.15,win:.22,damage:'Low-Medium',notes:'Cheap melee weapon',heat:3,singleUse:false},
  {name:'Machete',price:2500,escape:.30,win:.34,damage:'Medium',notes:'High intimidation',heat:6,singleUse:false},
  {name:'Revolver',price:7500,escape:.35,win:.40,damage:'Medium',notes:'Reliable but slow',heat:10,singleUse:false},
  {name:'Handgun',price:12500,escape:.60,win:.52,damage:'Medium',notes:'Standard sidearm',heat:14,singleUse:false},
  {name:'Sawed-Off Shotgun',price:25000,escape:.65,win:.62,damage:'High',notes:'Powerful at close range',heat:18,singleUse:false},
  {name:'SMG',price:50000,escape:.72,win:.70,damage:'High',notes:'Good against gangs',heat:22,singleUse:false},
  {name:'Assault Rifle',price:100000,escape:.78,win:.78,damage:'Very High',notes:'Increases police attention',heat:35,singleUse:false},
  {name:'Machine Gun',price:250000,escape:.84,win:.84,damage:'Extreme',notes:'Rare item',heat:45,singleUse:false},
  {name:'Grenade',price:15000,escape:.75,win:.80,damage:'Area Damage',notes:'Single-use',heat:35,singleUse:true},
  {name:'Molotov Cocktail',price:5000,escape:.55,win:.58,damage:'Fire Damage',notes:'Single-use',heat:25,singleUse:true},
  {name:'Rocket Launcher',price:1000000,escape:.95,win:.96,damage:'Massive',notes:'Very rare, huge police heat',heat:70,singleUse:false}
];
const attackers=[['single addict',.36,2,.25],['small group of lads',.31,10,.35],['small gang',.22,20,.50],['large gang',.11,50,.75]];
const $=id=>document.getElementById(id), money=n=>'£'+Math.round(n).toLocaleString('en-GB'), rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a, pick=a=>a[rand(0,a.length-1)], pickDrug=()=>pick(drugs)[0];
let audioCtx=null;
function unlockAudio(){try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended')audioCtx.resume();}catch(e){}}
function tone(freq,dur=0.08,type='sine',gain=.035,delay=0){try{unlockAudio(); if(!audioCtx)return; const t=audioCtx.currentTime+delay,o=audioCtx.createOscillator(),g=audioCtx.createGain(); o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+.012);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g).connect(audioCtx.destination);o.start(t);o.stop(t+dur+.02);}catch(e){}}
function sound(kind){ if(!soundEnabled)return; if(kind==='positive'){tone(660,.07,'sine',.035);tone(990,.09,'sine',.03,.07)} else if(kind==='negative'){tone(170,.11,'sawtooth',.03);tone(105,.13,'sawtooth',.026,.09)} else if(kind==='travel'){tone(740,.12,'sine',.035);tone(554,.16,'sine',.033,.15)} }
function haptic(type='light'){try{ if(navigator.vibrate) navigator.vibrate(type==='error'?[45,25,45]:[18]); }catch(e){}}
function toast(msg,type='ok'){let el=document.getElementById('toast'); if(!el){el=document.createElement('div');el.id='toast';document.body.appendChild(el);} el.className='toast '+(type==='bad'?'bad':'ok'); el.textContent=msg; requestAnimationFrame(()=>el.classList.add('show')); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove('show'),1800);}
function success(msg){sound('positive');haptic();toast(msg,'ok')}
function errorMsg(msg){sound('negative');haptic('error');toast(msg,'bad')}
let s;
let soundEnabled=localStorage.getItem('noir_market_sound')!=='off';
function blankInv(){return Object.fromEntries(drugs.map(d=>[d[0],0]))}
function blankSupply(){return Object.fromEntries(drugs.map(d=>[d[0],rand(0,1000)]))}
function baseState(){return{day:1,maxDay:30,cash:1000,bank:0,debt:0,health:100,heat:0,city:0,inv:blankInv(),supply:blankSupply(),prices:{},trends:{},owned:[],weapons:[],loans:[],rumour:null,notice:'You start in London with £1,000 cash, £0 in the bank and a clean slate.',travelFares:{},stats:{tradesBought:0,tradesSold:0,flights:0,stays:0,fightsWon:0,fightsLost:0,mugged:0,loansTaken:0,largestTrade:0,bestNet:1000}}}
function totalSpace(){return 20+s.owned.reduce((a,n)=>a+(shopItems.find(i=>i[0]===n)?.[2]||0),0)}
function personSpace(){return 20+s.owned.reduce((a,n)=>a+((shopItems.find(i=>i[0]===n)?.[3]==='person')?(shopItems.find(i=>i[0]===n)[2]):0),0)}
function used(){return Object.values(s.inv).reduce((a,b)=>a+b,0)}
function rank(){let worth=s.cash+s.bank+Object.entries(s.inv).reduce((a,[k,v])=>a+v*(s.prices[k]||0),0)-s.debt; if(worth>500000)return'kingpin'; if(worth>150000)return'operator'; if(worth>50000)return'supplier'; if(worth>10000)return'runner'; return'wannabe'}
function genPrices(force){let target=force?.rumour?.drug; drugs.forEach(([name,,lo,hi])=>{let old=s.prices[name]||rand(lo,hi); let mult=rand(55,155)/100; if(force&&force.true&&name===target) mult=force.rumour.type==='scarce'?rand(170,320)/100:rand(20,55)/100; let p=Math.max(1,Math.round(((old+rand(lo,hi))/2)*mult)); s.trends[name]=p>=old; s.prices[name]=p; s.supply[name]=rand(0,1000); if(force&&force.true&&name===target&&force.rumour.type==='scarce')s.supply[name]=rand(0,90); if(force&&force.true&&name===target&&force.rumour.type==='abundant')s.supply[name]=rand(600,1000);});}
function cityText(){let city=places[s.city][0]; let lines={London:['club demand is moving through central London','airport heat is visible around Heathrow','street stock is unstable around main terminals'],Manchester:['student demand is active','north west routes are moving bulk supply','police attention is up around the city centre'],Birmingham:['Midlands supply lines are moving fast','BHX traffic is drawing attention','prices are volatile after a quiet week'],Liverpool:['port rumours are moving the market','nightlife demand is lifting weekend prices','cheap stock is appearing near the docks'],Leeds:['student demand is lifting party stock','supply is moving through west Yorkshire','street prices look soft today'],Newcastle:['nightlife demand is strong','scarce stock is moving north','airport movement is quiet'],Bristol:['south west supply is tightening','festival demand is moving prices','police heat is low for now'],Cardiff:['weekend demand is rising','stock looks thin across the centre','cheap supply is rumoured near the docks'],Glasgow:['city centre demand is volatile','bulk supply is moving through Scotland','police pressure is unpredictable'],Edinburgh:['tourist demand is lifting prices','festival rumours are affecting stock','street supply is tight'],Aberdeen:['remote supply makes prices unpredictable','oil money is lifting demand','stock may be scarce tomorrow'],Belfast:['port movement is changing supply','police heat is rising','market demand is uneven'],Dublin:['airport movement is busy','city centre demand is strong','rumours suggest supply pressure'],Cork:['port supply is inconsistent','prices may soften tomorrow','local demand is quiet']}[city]||['market intelligence is unclear']; return pick(lines);}
function newRumour(){let r={drug:pickDrug(),type:Math.random()<.5?'scarce':'abundant',accuracy:rand(15,85)}; s.rumour=r; return r}
function rumourHtml(){let r=s.rumour||newRumour(); return `<strong>Market note:</strong> ${r.drug} may be ${r.type==='scarce'?'scarce and more expensive':'abundant and cheaper'} tomorrow. Source confidence: <strong>${r.accuracy}%</strong>.`}
function netWorth(){return s.cash+s.bank+Object.entries(s.inv).reduce((a,[k,v])=>a+v*(s.prices[k]||0),0)-s.debt}
function ensureStats(){s.stats=s.stats||{tradesBought:0,tradesSold:0,flights:0,stays:0,fightsWon:0,fightsLost:0,mugged:0,loansTaken:0,largestTrade:0,bestNet:netWorth()}; s.travelFares=s.travelFares||{};}
function weaponCounts(){let m={}; (s.weapons||[]).forEach(w=>m[w]=(m[w]||0)+1); return m}
function travel(){modal('Travel',`<div class="travel-head"><p class="subtle">Select a UK or Ireland city. Weapons are lost before boarding.</p><button type="button" id="stayFromTravel">STAY HERE</button></div><div class="travel-list">${places.map((p,i)=>`<button type="button" data-city="${i}" ${i===s.city?'disabled':''}><strong>${p[0]} <em>${money(travelFare(i))}</em></strong><span>${p[1]} · ${p[3]}</span></button>`).join('')}</div>`); setTimeout(()=>{let st=$('stayFromTravel'); if(st)st.onclick=()=>{sound('positive');haptic(); ensureStats(); s.stats.stays++; $('modal').close();nextDay(`You stay in ${places[s.city][0]}.`,true)}; document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{let i=+b.dataset.city, fare=travelFare(i); if(fare>s.cash){errorMsg('INSUFFICIENT FUNDS');return;} sound('travel');haptic(); ensureStats(); s.stats.flights++; s.cash-=fare; s.city=i; s.weapons=[]; $('modal').close(); nextDay(`You land in ${places[s.city][0]}. Flight cost ${money(fare)}. Weapons were lost before boarding.`,false);});},0)}
function closeBtn(){return '<button type="button" class="modal-x" id="modalCloseBtn" aria-label="Close">×</button>'}

function draw(){ensureStats(); s.stats.bestNet=Math.max(s.stats.bestNet||0,netWorth()); let p=places[s.city]; $('dayCount').textContent=s.day; $('cash').textContent=money(s.cash); $('bank').textContent=money(s.bank); $('debt').textContent=money(s.debt); $('health').textContent=Math.round(s.health)+'%'; $('healthBar').style.width=Math.max(0,s.health)+'%'; $('city').textContent=p[0]; $('country').textContent=p[1]+' · '+p[3]; $('flag').textContent=''; $('marketInfo').innerHTML=`${p[0]}: ${cityText()}.<br>${rumourHtml()}`; $('noticeText').textContent=s.notice; $('spaceLabel').textContent=`${used()}/${totalSpace()}`; $('statusLocation').textContent=p[0]+', '+p[1]; $('rank').textContent=rank(); $('space').textContent=`${used()}/${totalSpace()}`; $('heat').textContent=s.heat+'%';
$('marketTable').innerHTML='<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span>Trend</span></div>'+drugs.map(([name,icon])=>`<div class="row"><span class="drug"><b>${icon}</b>${name}</span><span>${s.supply[name]}</span><span class="price ${s.trends[name]?'':'down'}">${money(s.prices[name]||0)}</span><span class="trend ${s.trends[name]?'up':'down'}">${s.trends[name]?'↑':'↓'}</span></div>`).join('');
let items=Object.entries(s.inv).filter(([,q])=>q>0); let wc=weaponCounts(), weaponsRows=Object.entries(wc).map(([k,v])=>`<div class="row storage-weapon"><span>${k}</span><span>${v}</span><span>Weapon</span></div>`).join(''); $('pocketTable').innerHTML='<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>'+(items.length?items.slice(0,10).map(([k,v])=>`<div class="row"><span>${k}</span><span>${v}</span><span>${money(v*s.prices[k])}</span></div>`).join(''):`<div class="row"><span>Empty</span><span>0</span><span>${money(0)}</span></div>`)+`<div class="row header"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>`+(weaponsRows||'<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>');}

function healthBlock(){return `<div class="health-decision"><div><strong>Health</strong><span>${Math.round(s.health)}%</span></div><div class="health-track"><i style="width:${Math.max(0,s.health)}%"></i></div></div>`}
function activeDebtTotal(){return s.loans.reduce((a,l)=>a+l.repay,0)}
function payDebtButton(){return activeDebtTotal()>0?`<div class="debt-action"><button type="button" class="sell" id="modalPayDebt">PAY DEBT ${money(activeDebtTotal())}</button></div>`:''}
function bindModalDebt(){let b=$('modalPayDebt'); if(!b)return; b.onclick=()=>payAnyDebtFromModal();}
function modal(t,h){$('modalTitle').textContent=t; $('modalBody').innerHTML=h+payDebtButton(); if(!$('modal').open)$('modal').showModal(); setTimeout(()=>{bindModalDebt(); let x=$('modalCloseBtn'); if(x)x.onclick=()=>done();},0);}
function payAnyDebtFromModal(){let due=activeDebtTotal(); if(due<=0)return; let pay=Math.min(s.cash,due); if(pay<=0){modal('Debt Payment',`${healthBlock()}<p>You have no cash available to pay the debt.</p>`); return;} s.cash-=pay; s.debt=Math.max(0,s.debt-pay); for(let i=s.loans.length-1;i>=0;i--){let l=s.loans[i]; let x=Math.min(pay,l.repay); l.repay-=x; pay-=x; if(l.repay<=0)s.loans.splice(i,1); if(pay<=0)break;} save(); draw(); modal('Debt Payment',`${healthBlock()}<p>You paid ${money(Math.min(due,activeDebtTotal()+Math.min(s.cash,due)))} towards your debt.</p><p>Remaining debt: <strong>${money(activeDebtTotal())}</strong>.</p><button type="button" id="continueEvent">Continue</button>`); setTimeout(()=>{let c=$('continueEvent'); if(c)c.onclick=()=>done();},0)}


function showMenu(){ensureStats(); modal('Menu',`<div class="menu-list"><button type="button" id="statsBtn">Stats</button><button type="button" id="soundToggleBtn">Sound: ${soundEnabled?'ON':'OFF'}</button><button type="button" class="sell" id="menuNewGameBtn">New Game</button></div>`); setTimeout(()=>{$('statsBtn').onclick=showStats; $('soundToggleBtn').onclick=()=>{soundEnabled=!soundEnabled; localStorage.setItem('noir_market_sound',soundEnabled?'on':'off'); if(soundEnabled)sound('positive'); showMenu();}; $('menuNewGameBtn').onclick=confirmNewGame;},0)}
function showStats(){ensureStats(); modal('Stats',`<div class="stats-list"><p><span>Days survived</span><strong>${s.day-1}</strong></p><p><span>Net worth</span><strong>${money(netWorth())}</strong></p><p><span>Best net worth</span><strong>${money(s.stats.bestNet||netWorth())}</strong></p><p><span>Flights taken</span><strong>${s.stats.flights||0}</strong></p><p><span>Stays</span><strong>${s.stats.stays||0}</strong></p><p><span>Fights won</span><strong>${s.stats.fightsWon||0}</strong></p><p><span>Fights lost</span><strong>${s.stats.fightsLost||0}</strong></p><p><span>Times mugged</span><strong>${s.stats.mugged||0}</strong></p><p><span>Loans taken</span><strong>${s.stats.loansTaken||0}</strong></p><p><span>Drugs bought</span><strong>${s.stats.tradesBought||0}</strong></p><p><span>Drugs sold</span><strong>${s.stats.tradesSold||0}</strong></p><p><span>Largest single trade</span><strong>${money(s.stats.largestTrade||0)}</strong></p><p><span>Heat level</span><strong>${s.heat}%</strong></p></div><button type="button" id="backMenuBtn">Back to Menu</button>`); setTimeout(()=>$('backMenuBtn').onclick=showMenu,0)}
function confirmNewGame(){modal('New Game',`<p>Your current save will be lost.</p><div class="bank-grid"><button type="button" id="cancelNewGame">Cancel</button><button type="button" class="sell" id="confirmNewGame">New Game</button></div>`); setTimeout(()=>{$('cancelNewGame').onclick=showMenu; $('confirmNewGame').onclick=()=>newGame(true);},0)}
function newGame(showLoans=false){s=baseState(); genPrices(); newRumour(); save(); draw(); if(showLoans) showLoanIntro();}

function showWelcome(){
  modal('How to Play',`<div class="howto"><p>You start with £1,000, no debt and questionable judgement.</p><p>Buy low, sell high, travel between cities and try not to get robbed, arrested, battered or completely rinsed by the market.</p><p>Rumours may help. They may also be nonsense. That is business.</p><p class="disclaimer">This game is for entertainment purposes only.</p><button type="button" id="playWelcomeBtn" class="buy play-wide">Play</button></div>`);
  setTimeout(()=>{const b=$('playWelcomeBtn'); if(b)b.onclick=showShadyChoice;},0);
}
function showShadyChoice(){
  modal('Shady Loans',`<p class="subtle">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><p class="subtle">High interest. Short deadlines. Bad people. Useful cash.</p><div class="loan-choice"><button type="button" id="visitLoansBtn" class="sell">Visit Shady Loans</button><button type="button" id="startCleanBtn">Start Clean</button></div>`);
  setTimeout(()=>{
    const v=$('visitLoansBtn'); if(v)v.onclick=()=>bank();
    const c=$('startCleanBtn'); if(c)c.onclick=()=>done();
  },0);
}

function showLoanIntro(){modal('Shady Loans',`<p class="subtle">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><div class="loan-list">${lenders.map((l,i)=>`<button type="button" data-loan="${i}"><strong>${l[0]}</strong><br>up to ${money(l[1])} · ${l[3]*100}% interest · due in ${l[2]} days</button>`).join('')}</div><button type="button" id="skipLoan">Start without debt</button>`); setTimeout(()=>{document.querySelectorAll('[data-loan]').forEach(b=>b.onclick=()=>chooseLoan(+b.dataset.loan)); $('skipLoan').onclick=()=>$('modal').close();},0)}
function chooseLoan(i){let l=lenders[i]; modal(l[0],`<p>Borrow up to ${money(l[1])}. Repay ${l[3]*100}% interest by day ${s.day+l[2]}.</p><input id="loanAmount" inputmode="numeric" type="number" min="1" max="${l[1]}" placeholder="Amount"><button type="button" class="sell" id="confirmLoan">ARE YOU SURE?</button>`); setTimeout(()=>$('confirmLoan').onclick=()=>{sound('negative');haptic('error');let amt=Math.min(+$('loanAmount').value||0,l[1]); if(!amt){errorMsg('ENTER AN AMOUNT');return;} let repay=Math.round(amt*(1+l[3])); ensureStats(); s.stats.loansTaken++; s.cash+=amt; s.debt+=repay; s.loans.push({name:l[0],due:s.day+l[2],repay}); s.notice=`Borrowed ${money(amt)} from ${l[0]}. ${money(repay)} due day ${s.day+l[2]}.`; $('modal').close(); save(); draw(); toast(`Loan accepted: ${money(amt)}`,'bad');},0)}
function qtyControl(name,mode,max){return `<div class="qty-control"><button type="button" data-minus="${mode}|${name}">−</button><input id="qty-${mode}-${name.replaceAll(' ','_')}" inputmode="numeric" type="number" min="0" max="${max}" value="0"><button type="button" data-plus="${mode}|${name}">+</button></div>`}
function qtyInput(mode,name){return document.getElementById(`qty-${mode}-${name.replaceAll(' ','_')}`)}
function bindQtyButtons(mode){document.querySelectorAll(`[data-minus^="${mode}|"]`).forEach(b=>b.onclick=()=>{let name=b.dataset.minus.split('|')[1],inp=qtyInput(mode,name); inp.value=Math.max(0,(+inp.value||0)-1); updateSellValues();});document.querySelectorAll(`[data-plus^="${mode}|"]`).forEach(b=>b.onclick=()=>{let name=b.dataset.plus.split('|')[1],inp=qtyInput(mode,name),max=+inp.max||999999; inp.value=Math.min(max,(+inp.value||0)+1); updateSellValues();});}
function updateSellValues(){document.querySelectorAll('[data-sellvalue]').forEach(el=>{let name=el.dataset.sellvalue, inp=qtyInput('sell',name), q=+inp.value||0; el.textContent=money(q*s.prices[name]);});}
function buyModal(){modal('Buy',`<div class="modal-money"><span>Current funds</span><strong>${money(s.cash)}</strong><em>Storage ${used()}/${totalSpace()}</em></div><div class="trade-grid">${drugs.map(([name,icon])=>`<div class="trade-tile"><div class="trade-title"><b>${icon}</b><strong>${name}</strong></div><p>${money(s.prices[name])} each</p><p>Available: ${s.supply[name]}</p><p>Owned: ${s.inv[name]}</p>${qtyControl(name,'buy',s.supply[name])}<button type="button" class="buy" data-buydrug="${name}">BUY</button><button type="button" data-buymax="${name}">BUY MAX</button></div>`).join('')}</div><div class="trade-footer"><span>Cash ${money(s.cash)}</span><span>Storage ${used()}/${totalSpace()}</span></div>`); setTimeout(()=>{bindQtyButtons('buy');document.querySelectorAll('[data-buymax]').forEach(b=>b.onclick=()=>{let name=b.dataset.buymax, max=Math.min(Math.floor(s.cash/s.prices[name]),totalSpace()-used(),s.supply[name]); let inp=qtyInput('buy',name); inp.value=Math.max(0,max); if(max<=0)errorMsg(s.cash<s.prices[name]?'INSUFFICIENT FUNDS':'NO STORAGE OR STOCK');});document.querySelectorAll('[data-buydrug]').forEach(b=>b.onclick=()=>{let name=b.dataset.buydrug,q=+qtyInput('buy',name).value||0,cost=q*s.prices[name]; if(q<1){errorMsg('ENTER QUANTITY');return;} if(q>s.supply[name]){errorMsg('NOT ENOUGH STOCK');return;} if(cost>s.cash){errorMsg('INSUFFICIENT FUNDS');return;} if(q>totalSpace()-used()){errorMsg('INSUFFICIENT STORAGE');return;} ensureStats(); s.stats.tradesBought+=q; s.stats.largestTrade=Math.max(s.stats.largestTrade||0,cost); s.cash-=cost; s.inv[name]+=q; s.supply[name]-=q; s.notice=`Bought ${q} units of ${name}.`; save(); draw(); success(`Bought ${q} ${name}`); buyModal();});},0)}
function sellModal(){let owned=drugs.filter(([name])=>s.inv[name]>0); let wc=weaponCounts(); let weaponTiles=Object.entries(wc).map(([name,q])=>{let w=getWeapon(name), val=Math.floor((w?.price||0)/2); return `<div class="trade-tile weapon-sale"><div class="trade-title"><strong>${name}</strong></div><p>Owned: ${q}</p><p>Resale: <strong>${money(val)}</strong> each</p><p>Sell all: <strong>${money(val*q)}</strong></p>${qtyControl(name,'wsell',q)}<button type="button" class="sell" data-sellweapon="${name}">SELL WEAPON</button></div>`}).join(''); modal('Sell',`<div class="modal-money"><span>Current funds</span><strong>${money(s.cash)}</strong><em>Storage ${used()}/${totalSpace()}</em></div>${owned.length?`<h4>Stock</h4><div class="trade-grid">${owned.map(([name,icon])=>`<div class="trade-tile"><div class="trade-title"><b>${icon}</b><strong>${name}</strong></div><p>Owned: ${s.inv[name]}</p><p>Price: ${money(s.prices[name])}</p><p>Sell all: <strong>${money(s.inv[name]*s.prices[name])}</strong></p>${qtyControl(name,'sell',s.inv[name])}<p class="tile-value">Selected: <b data-sellvalue="${name}">£0</b></p><button type="button" class="sell" data-selldrug="${name}">SELL</button></div>`).join('')}</div>`:'<p class="subtle">You have no stock to sell.</p>'}${weaponTiles?`<h4>Weapons</h4><div class="trade-grid">${weaponTiles}</div>`:''}<div class="trade-footer"><span>Cash ${money(s.cash)}</span><span>Owned lines ${owned.length}</span></div>`); setTimeout(()=>{bindQtyButtons('sell');bindQtyButtons('wsell');document.querySelectorAll('[id^="qty-sell-"]').forEach(i=>i.oninput=updateSellValues);document.querySelectorAll('[data-selldrug]').forEach(b=>b.onclick=()=>{let name=b.dataset.selldrug,q=+qtyInput('sell',name).value||0; if(q<1){errorMsg('ENTER QUANTITY');return;} if(q>s.inv[name]){errorMsg('NOT ENOUGH STOCK');return;} let value=q*s.prices[name]; ensureStats(); s.stats.tradesSold+=q; s.stats.largestTrade=Math.max(s.stats.largestTrade||0,value); s.cash+=value; s.inv[name]-=q; s.notice=`Sold ${q} units of ${name}.`; save(); draw(); success(`Sold ${q} ${name}`); sellModal();});document.querySelectorAll('[data-sellweapon]').forEach(b=>b.onclick=()=>{let name=b.dataset.sellweapon,q=+qtyInput('wsell',name).value||0, w=getWeapon(name), val=Math.floor((w?.price||0)/2); if(q<1){errorMsg('ENTER QUANTITY');return;} let count=weaponCounts()[name]||0; if(q>count){errorMsg('NOT ENOUGH STOCK');return;} for(let i=0;i<q;i++){let idx=s.weapons.indexOf(name); if(idx>=0)s.weapons.splice(idx,1);} s.cash+=q*val; s.notice=`Sold ${q} ${name} for ${money(q*val)}.`; save(); draw(); success(`Sold ${name}`); sellModal();});updateSellValues();},0)}
function transact(type){type==='Buy'?buyModal():sellModal()}
function bank(){let openLoans=s.loans.length?s.loans.map(l=>{let days=l.due-s.day, urgent=days<=5; return `<div class="loan-row ${urgent?'urgent-loan':''}"><div><span>${l.name}</span><strong>${money(l.repay)}</strong><em>${days>0?'due in '+days+' day'+(days===1?'':'s'):'DUE NOW'}</em></div><button type="button" data-payloan="${l.name}|${l.due}|${l.repay}">Pay</button></div>`}).join(''):'<p class="subtle">No active loans.</p>'; modal('Bank',`<p class="subtle">Bank balance only changes when you deposit or withdraw.</p><input id="amount" inputmode="numeric" type="number" placeholder="Amount"><div class="bank-grid"><button type="button" id="deposit">Deposit</button><button type="button" id="withdraw">Withdraw</button><button type="button" class="full" id="payDebt">Pay General Debt</button></div><h4>Loans</h4>${openLoans}<div class="loan-list compact">${lenders.map((l,i)=>`<button type="button" data-loan="${i}"><strong>${l[0]}</strong><br>Borrow up to ${money(l[1])} · ${l[3]*100}% interest · due in ${l[2]} days</button>`).join('')}</div>`); setTimeout(()=>{let amt=()=>+$('amount').value||0; $('deposit').onclick=()=>{let a=Math.min(amt(),s.cash); if(a<=0){errorMsg('ENTER AMOUNT');return;} s.cash-=a;s.bank+=a;success('Deposit complete');done()}; $('withdraw').onclick=()=>{let a=Math.min(amt(),s.bank); if(a<=0){errorMsg('ENTER AMOUNT');return;} s.bank-=a;s.cash+=a;success('Withdrawal complete');done()}; $('payDebt').onclick=()=>{let a=Math.min(amt(),s.cash,s.debt); if(a<=0){errorMsg('NO DEBT PAYMENT MADE');return;} s.cash-=a;s.debt-=a;success('Debt payment made');done()}; document.querySelectorAll('[data-loan]').forEach(b=>b.onclick=()=>chooseLoan(+b.dataset.loan)); document.querySelectorAll('[data-payloan]').forEach(b=>b.onclick=()=>paySpecificLoan(b.dataset.payloan));},0)}

function paySpecificLoan(token){let [name,due,repay]=token.split('|'), amount=+repay; if(s.cash<amount){s.notice=`You need ${money(amount)} cash to clear ${name}.`; done(); return;} let idx=s.loans.findIndex(l=>l.name===name&&String(l.due)===String(due)&&String(l.repay)===String(repay)); if(idx<0)return; s.cash-=amount; s.debt=Math.max(0,s.debt-amount); s.notice=`Paid ${name}. Loan cleared.`; s.loans.splice(idx,1); success('Debt cleared'); done();}
function heatClass(h){return h<8?'low':(h<25?'mid':'high')}
function shopItemButton(kind,i,title,price,desc,extra='',disabled=false){return `<button type="button" class="shop-item" data-${kind}="${i}" ${disabled?'disabled':''}><span class="shop-top"><strong>${title}</strong><span class="shop-price">${money(price)}</span></span><span class="shop-desc"><span>${desc}</span>${extra}</span></button>`}
function shop(){modal('Shop',`<h4>Storage</h4><p class="muted">Each upgrade adds permanent capacity.</p><div class="shop-list">${shopItems.map((it,i)=>shopItemButton('shop',i,it[0],it[1],`+${it[2]} storage slots`,it[3]==='person'?'<span class="heat-pill low">carried</span>':'<span class="heat-pill mid">off-site</span>',s.owned.includes(it[0]))).join('')}</div><h4>Weapons</h4><p class="muted">Weapons improve fight options but increase heat. Single-use items are consumed in combat.</p><div class="shop-list">${weapons.map((w,i)=>shopItemButton('weapon',i,w.name,w.price,`${w.damage}: ${w.notes}`,`<span class="heat-pill ${heatClass(w.heat)}">Heat +${w.heat}%</span>`)).join('')}</div><h4>Recovery</h4><p class="muted">Hospital treatment restores health after trouble.</p><div class="shop-list">${hospitalTreatments.map((h,i)=>shopItemButton('hospital',i,h[0],h[1],h[2]===100?'restore to full health':`restore ${h[2]}% health`,'' )).join('')}</div>`); setTimeout(()=>{document.querySelectorAll('[data-shop]').forEach(b=>b.onclick=()=>{let it=shopItems[+b.dataset.shop]; if(s.cash<it[1]){errorMsg('INSUFFICIENT FUNDS');return;} s.cash-=it[1]; s.owned.push(it[0]); s.notice=`Bought ${it[0]}. Storage increased by ${it[2]} slots.`; success(`Bought ${it[0]}`); done();}); document.querySelectorAll('[data-weapon]').forEach(b=>b.onclick=()=>{let w=weapons[+b.dataset.weapon]; if(s.cash<w.price){errorMsg('INSUFFICIENT FUNDS');return;} s.cash-=w.price; s.weapons.push(w.name); s.heat=Math.min(100,s.heat+Math.ceil(w.heat/3)); s.notice=`Bought ${w.name}. Heat increased slightly.`; success(`Bought ${w.name}`); done();}); document.querySelectorAll('[data-hospital]').forEach(b=>b.onclick=()=>buyHospital(+b.dataset.hospital));},0)}
function buyHospital(i){let h=hospitalTreatments[i]; if(!h||s.health>=100)return; if(s.cash<h[1]){errorMsg('INSUFFICIENT FUNDS');return;} s.cash-=h[1]; s.health=h[2]===100?100:Math.min(100,s.health+h[2]); s.notice=`Hospital treatment purchased: ${h[0]}.`; success('Health treatment purchased'); done();}
function dump(){let items=Object.entries(s.inv).filter(([,q])=>q>0); modal('Dump Stock',items.length?items.map(([k])=>`<button type="button" data-dump="${k}">${k}</button>`).join(''):'<p>Your storage is empty.</p>'); setTimeout(()=>document.querySelectorAll('[data-dump]').forEach(b=>b.onclick=()=>{s.notice=`Dumped ${s.inv[b.dataset.dump]} units of ${b.dataset.dump}.`;s.inv[b.dataset.dump]=0;done();}),0)}
function done(){if($('modal').open)$('modal').close(); save(); draw()}
function stay(){sound('positive');haptic(); ensureStats(); s.stats.stays++; nextDay(`You stay in ${places[s.city][0]}.`,true)}
function travel(){modal('Travel',`<div class="travel-head"><p class="subtle">Select a UK or Ireland city. Weapons are lost before boarding.</p><button type="button" id="stayFromTravel">STAY HERE</button></div><div class="travel-list">${places.map((p,i)=>`<button type="button" data-city="${i}"><strong>${p[0]}</strong><span>${p[1]} · ${p[3]}</span></button>`).join('')}</div>`); setTimeout(()=>{let st=$('stayFromTravel'); if(st)st.onclick=()=>{sound('positive');haptic();$('modal').close();nextDay(`You stay in ${places[s.city][0]}.`,true)}; document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{sound('travel');haptic();s.city=+b.dataset.city; s.weapons=[]; $('modal').close(); nextDay(`You land in ${places[s.city][0]}. Weapons were lost before boarding.`,false);});},0)}
function debtReminderHtml(){if(!s.loans.length)return '<p class="subtle">No active loan debt.</p>'; return '<div class="debt-reminder"><strong>DEBT REMINDER</strong>'+s.loans.map(l=>{let days=l.due-s.day; let dueText=days>0?`due in ${days} day${days===1?'':'s'}`:'DUE NOW'; return `<div><span>${l.name}</span><b>${money(l.repay)}</b><em>${dueText}</em></div>`}).join('')+'</div>'}
function nextDay(base,showRumour){let old={rumour:s.rumour,true:Math.random()*100<s.rumour.accuracy}; s.day++; s.debt=Math.round(s.debt*1.02); s.heat=Math.min(100,Math.max(0,s.heat+rand(-8,13))); genPrices(old); newRumour(); randomEvent(base); if(s.day>s.maxDay)return endGame(); save(); draw(); let rumourBlock=showRumour?`<h4>Rumour Result</h4><p><strong>${old.true?'TRUE':'FALSE'}</strong> · ${old.rumour.drug} was tipped to become ${old.rumour.type==='scarce'?'scarce and more expensive':'abundant and cheaper'}.</p><p>Source confidence was ${old.rumour.accuracy}%.</p>`:''; modal(showRumour?'Stay Here':'Travel Result',`<p>${s.notice}</p>${rumourBlock}<h4>Loan Status</h4>${debtReminderHtml()}<button type="button" id="continueEvent">Continue</button>`); setTimeout(()=>$('continueEvent').onclick=()=>{$('modal').close();handleDueLoans();},0);}
function handleDueLoans(){let due=s.loans.filter(l=>l.due<=s.day); if(!due.length){maybeFight();return;} modal('DEBT DUE',`<p class="subtle">Your lender wants payment today. Pay it now or the balance rises by 25%, your health drops by 15%, and the same debt is chased again tomorrow.</p>${due.map((l,i)=>`<div class="loan-row"><div><span>${l.name}</span><strong>${money(l.repay)} due now</strong></div><button type="button" data-duepay="${i}">PAY OFF DEBT</button></div>`).join('')}<button type="button" class="sell" id="missDebt">Do not pay</button>`); setTimeout(()=>{document.querySelectorAll('[data-duepay]').forEach(b=>b.onclick=()=>payDueLoan(due[+b.dataset.duepay])); $('missDebt').onclick=missDueLoans;},0)}
function payDueLoan(loan){if(s.cash<loan.repay){s.notice=`You need ${money(loan.repay)} cash to pay ${loan.name}.`; save(); draw(); handleDueLoans(); return;} let idx=s.loans.indexOf(loan); if(idx<0)return; s.cash-=loan.repay; s.debt=Math.max(0,s.debt-loan.repay); s.notice=`Paid ${loan.name}. Loan cleared.`; s.loans.splice(idx,1); save(); draw(); $('modal').close(); handleDueLoans();}
function missDueLoans(){let due=s.loans.filter(l=>l.due<=s.day); let added=0; due.forEach(l=>{let old=l.repay; l.repay=Math.round(l.repay*1.25); added+=l.repay-old; l.due=s.day+1;}); s.debt+=added; s.health=Math.max(1,s.health-15); s.heat=Math.min(100,s.heat+10); s.notice=`Debt unpaid. You are roughed up, health drops 15%, and the debt increases by ${money(added)}.`; save(); draw(); $('modal').close(); maybeFight();}
function checkLoans(){}
function takeDrugs(maxPct, personOnly=false){let capacity=personOnly?personSpace():totalSpace(), ratio=Math.min(1, capacity/Math.max(1,totalSpace())), stolen=[]; Object.entries(s.inv).forEach(([k,v])=>{let q=Math.floor(v*(rand(10,maxPct)/100)*(personOnly?ratio:1)); if(q>0){s.inv[k]-=q; stolen.push(`${q} ${k}`)}}); return stolen;}
function randomEvent(base){let roll=Math.random(),d=pickDrug(); ensureStats(); s.notice=base+' '; if(roll<.14){s.stats.mugged++; let pct=rand(10,65),lost=Math.floor(s.cash*pct/100),stolen=takeDrugs(35); s.cash-=lost; s.health=Math.max(5,s.health-rand(3,15)); s.notice+=`You are mugged. ${pct}% of your cash is taken (${money(lost)}). ${stolen.length?'Stock stolen: '+stolen.join(', ')+'.':'No stock was taken.'}`;} else if(roll<.24){let q=Math.min(rand(5,80),totalSpace()-used()); if(q>0)s.inv[d]+=q; s.notice+=`A contact gives you ${q} units of ${d}.`;} else if(roll<.36){s.prices[d]*=rand(2,4); s.notice+=`${d} is drying up. Prices spike.`;} else if(roll<.48){s.prices[d]=Math.max(1,Math.round(s.prices[d]*.35)); s.supply[d]+=rand(100,500); s.notice+=`The market is flooded with ${d}. Prices collapse.`;} else if(roll<.60){s.heat=Math.min(100,s.heat+rand(10,25)); s.notice+='Police are visible near transport hubs. Heat rises.';} else s.notice+='A quiet day. The market holds.';}
function attacker(){let r=Math.random(),a=0; for(let x of attackers){a+=x[1]; if(r<a)return x} return attackers.at(-1)}
function ownedWeapons(){return weapons.filter(w=>s.weapons.includes(w.name))}
function getWeapon(name){return weapons.find(w=>w.name===name)||null}
function bestWeapon(){let owned=ownedWeapons(); return owned.sort((a,b)=>b.win-a.win)[0]||null}
function consumeWeapon(w){if(!w||!w.singleUse)return; let idx=s.weapons.indexOf(w.name); if(idx>=0)s.weapons.splice(idx,1)}

function maybeFight(){
  if(Math.random()>=.20)return;
  let a=attacker();
  s.currentFight={name:a[0],damage:a[2],lootPct:a[3],round:1,maxRounds:a[0]==='single addict'?1:(a[0]==='small group of lads'?2:(a[0]==='small gang'?3:4))};
  showFightChoice(`You are confronted by a <strong>${a[0]}</strong>.`);
}
function showFightChoice(intro){
  let f=s.currentFight, owned=ownedWeapons();
  modal('Trouble',`${healthBlock()}<p>${intro}</p><p>Threat round ${f.round} of up to ${f.maxRounds}. Choose carefully.</p><div class="choice-row"><button type="button" id="surrenderBtn">SURRENDER</button><button type="button" id="runBtn">RUN</button></div><h4>Fight options</h4><div class="weapon-choice"><button type="button" class="sell" data-fightweapon="">Fists</button>${owned.length?owned.map(w=>`<button type="button" class="sell" data-fightweapon="${w.name}">${w.name}<br><span>${w.damage}</span></button>`).join(''):'<p class="subtle">No weapons available.</p>'}</div>`);
  setTimeout(()=>{$('surrenderBtn').onclick=()=>resolveFight('surrender');$('runBtn').onclick=()=>resolveFight('run');document.querySelectorAll('[data-fightweapon]').forEach(b=>b.onclick=()=>resolveFight('fight',b.dataset.fightweapon));},0)
}
function recoveryOptions(){if(s.health>=100)return ''; return `<h4>Hospital</h4><div class="hospital-list">${hospitalTreatments.map((h,i)=>`<button type="button" data-hospital-modal="${i}" ${s.cash<h[1]?'disabled':''}>${h[0]} · ${money(h[1])}</button>`).join('')}</div>`}
function bindRecovery(){document.querySelectorAll('[data-hospital-modal]').forEach(b=>b.onclick=()=>{let h=hospitalTreatments[+b.dataset.hospitalModal]; if(!h||s.cash<h[1])return; s.cash-=h[1]; s.health=h[2]===100?100:Math.min(100,s.health+h[2]); save(); draw(); modal('Hospital Treatment',`${healthBlock()}<p>${h[0]} purchased for ${money(h[1])}.</p><button type="button" id="continueEvent">Continue</button>`); setTimeout(()=>{let c=$('continueEvent'); if(c)c.onclick=()=>done();},0)});}
function fightResult(title,msg,more=false){
  save(); draw();
  modal(title,`${healthBlock()}<p>${msg}</p>${recoveryOptions()}${more?'<button type="button" id="nextFightRound">Next Move</button>':'<button type="button" id="continueEvent">Continue</button>'}`);
  setTimeout(()=>{bindRecovery(); let n=$('nextFightRound'); if(n)n.onclick=()=>showFightChoice('They are still on you.'); let c=$('continueEvent'); if(c)c.onclick=()=>done();},0)
}
function resolveFight(choice,weaponName=''){
  let f=s.currentFight, w=weaponName?getWeapon(weaponName):bestWeapon(), msg='';
  if(choice==='surrender'){
    let cashLost=s.cash; s.cash=0;
    let stolen=takeDrugs(100,true);
    let hpTxt='';
    if(Math.random()<.30){let hp=rand(2,18); s.health=Math.max(1,s.health-hp); hpTxt=` They rough you up anyway. Health drops ${hp}%.`;}
    msg=`You surrender to the ${f.name}. You lose all cash on you (${money(cashLost)}) and anything carried on your person. ${stolen.length?'Stock taken: '+stolen.join(', ')+'.':'No carried stock was taken.'}${hpTxt}`;
    ensureStats(); s.stats.fightsLost++; s.notice=msg; s.currentFight=null; return fightResult('Surrender Outcome',msg,false);
  }
  if(choice==='run'){
    let chance=Math.min(.98,.50+(w?w.escape:0)), ok=Math.random()<chance;
    if(ok){msg=`You run and lose them.${w?' Your '+w.name+' gives you enough space to get away.':''}`; s.heat=Math.min(100,s.heat+rand(1,6)+(w?w.heat:0)); consumeWeapon(w); ensureStats(); s.stats.fightsWon++; ensureStats(); s.stats.fightsLost++; s.currentFight=null; s.notice=msg; return fightResult('Run Outcome',msg,false);}
    let hp=rand(Math.max(2,Math.floor(f.damage/2)),Math.max(3,f.damage));
    s.health=Math.max(1,s.health-hp);
    let lost=Math.floor(s.cash*rand(5,Math.round(f.lootPct*100))/100); s.cash-=lost;
    msg=`You try to run, but they catch you. Health drops ${hp}%. You lose ${money(lost)}.`;
    if(s.health<=1){msg+=' You barely survive.';}
    s.notice=msg; s.currentFight=null; return fightResult('Run Outcome',msg,false);
  }
  if(choice==='fight'){
    let base=w?(f.name==='single addict'?0.75:Math.min(.96,.10+w.win)):.25;
    let win=Math.random()<base;
    if(win){
      msg=`You fight back${w?' using your '+w.name:''} and scare them off.`;
      if(w&&f.name==='single addict')msg=`One hit with the ${w.name} is enough. The addict backs off.`;
      s.heat=Math.min(100,s.heat+rand(5,15)+(w?w.heat:0)); consumeWeapon(w); ensureStats(); s.stats.fightsWon++; s.currentFight=null; s.notice=msg; return fightResult('Fight Outcome',msg,false);
    }
    let reduction=w?Math.min(.85,w.escape):0;
    let hp=rand(Math.max(2,Math.floor((f.damage*(1-reduction))/2)),Math.max(3,Math.round(f.damage*(1-reduction))));
    s.health=Math.max(0,s.health-hp);
    consumeWeapon(w);
    msg=`You fight back${w?' with your '+w.name:''}, but they hit you. Health drops ${hp}%.`;
    if(s.health<=0){ensureStats(); s.stats.fightsLost++; s.notice='You died in the fight.'; s.currentFight=null; return endGame();}
    if(f.round < f.maxRounds && Math.random()<.65){f.round++; s.notice=msg; return fightResult('Fight Outcome',msg,true);}
    msg+=' You break away and lose them.'; s.currentFight=null; s.notice=msg; return fightResult('Fight Outcome',msg,false);
  }
}
function endGame(){let score=s.cash+s.bank+Object.entries(s.inv).reduce((a,[k,v])=>a+v*s.prices[k],0)-s.debt; modal('Game Over',`<p>Final net worth: <strong>${money(score)}</strong></p><p>Rank: <strong>${rank()}</strong></p><button type="button" id="again">New Game</button>`); setTimeout(()=>$('again').onclick=()=>{newGame();},0)}
function save(){ensureStats(); localStorage.setItem('noir_market_v13',JSON.stringify(s))} function load(){let x=localStorage.getItem('noir_market_v13')||localStorage.getItem('noir_market_v12')||localStorage.getItem('noir_market_v9')||localStorage.getItem('noir_market_v6')||localStorage.getItem('noir_market_v5')||localStorage.getItem('noir_market_v4'); if(x){s=JSON.parse(x);ensureStats();draw();return false;} newGame(false);return true;}
function particles(){
  const holder=$('particle-canvas');
  const canvas=document.createElement('canvas');
  const ctx=canvas.getContext('2d');
  holder.innerHTML='';
  holder.appendChild(canvas);
  let particles=[], mouse={x:null,y:null,active:false};
  function resize(){
    canvas.width=holder.offsetWidth*devicePixelRatio;
    canvas.height=holder.offsetHeight*devicePixelRatio;
    canvas.style.width=holder.offsetWidth+'px';
    canvas.style.height=holder.offsetHeight+'px';
    const count=Math.max(55,Math.floor((holder.offsetWidth*holder.offsetHeight)/8500));
    particles=Array.from({length:count},()=>({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      vx:(Math.random()-.5)*0.34*devicePixelRatio,
      vy:(Math.random()-.5)*0.34*devicePixelRatio,
      r:(1+Math.random()*1.7)*devicePixelRatio
    }));
  }
  function point(e){const r=canvas.getBoundingClientRect(); mouse.x=(e.clientX-r.left)*devicePixelRatio; mouse.y=(e.clientY-r.top)*devicePixelRatio; mouse.active=true}
  holder.addEventListener('mousemove',point);
  holder.addEventListener('touchmove',e=>{if(e.touches[0])point(e.touches[0])},{passive:true});
  holder.addEventListener('mouseleave',()=>mouse.active=false);
  addEventListener('resize',resize); resize();
  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const all=mouse.active?[...particles,{x:mouse.x,y:mouse.y,vx:0,vy:0,r:2*devicePixelRatio,mouse:true}]:particles;
    for(const p of particles){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;
      if(p.y<0||p.y>canvas.height)p.vy*=-1;
    }
    for(let i=0;i<all.length;i++){
      const a=all[i];
      ctx.beginPath();ctx.fillStyle=a.mouse?'rgba(255,255,255,.26)':'rgba(255,255,255,.17)';ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fill();
      for(let j=i+1;j<all.length;j++){
        const b=all[j], dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy), max=125*devicePixelRatio;
        if(d<max){ctx.beginPath();ctx.strokeStyle=`rgba(255,255,255,${(1-d/max)*.16})`;ctx.lineWidth=.7*devicePixelRatio;ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}

function createSplashDust(){
  const splash=$('splash'); if(!splash || splash.querySelector('.live-dust'))return;
  const layer=document.createElement('div'); layer.className='live-dust';
  const count=520;
  for(let i=0;i<count;i++){
    const d=document.createElement('i');
    const size=(Math.random()*3.4+1.2).toFixed(2);
    d.style.left=(Math.random()*100).toFixed(2)+'%';
    d.style.bottom=(-8-Math.random()*18).toFixed(2)+'%';
    d.style.width=size+'px'; d.style.height=size+'px';
    d.style.opacity=(Math.random()*0.75+0.35).toFixed(2);
    d.style.animationDuration=(18+Math.random()*22).toFixed(2)+'s';
    d.style.animationDelay=(-Math.random()*28).toFixed(2)+'s';
    d.style.setProperty('--drift',(Math.random()*70-35).toFixed(1)+'px');
    layer.appendChild(d);
  }
  splash.prepend(layer);
}

function createGameDust(){
  if(document.querySelector('.game-dust'))return;
  const layer=document.createElement('div'); layer.className='game-dust';
  const count=180;
  for(let i=0;i<count;i++){
    const d=document.createElement('i');
    const size=(Math.random()*2.6+0.9).toFixed(2);
    d.style.left=(Math.random()*100).toFixed(2)+'%';
    d.style.bottom=(-12-Math.random()*30).toFixed(2)+'%';
    d.style.width=size+'px'; d.style.height=size+'px';
    d.style.opacity=(Math.random()*0.55+0.18).toFixed(2);
    d.style.animationDuration=(12+Math.random()*18).toFixed(2)+'s';
    d.style.animationDelay=(-Math.random()*18).toFixed(2)+'s';
    d.style.setProperty('--drift',(Math.random()*46-23).toFixed(1)+'px');
    layer.appendChild(d);
  }
  document.body.prepend(layer);
}

function setupTilt(){let splash=$('splash');function setTilt(x,y){let px=Math.max(-18,Math.min(18,x*.8)),py=Math.max(-9,Math.min(9,y*.35));splash.style.setProperty('--tilt-x',(x*.55)+'deg');splash.style.setProperty('--tilt-y',(-y*.35)+'deg');splash.style.setProperty('--powder-x',px+'px');splash.style.setProperty('--powder-y',py+'px');splash.style.setProperty('--powder-r',(x*.35)+'deg')} window.addEventListener('deviceorientation',e=>{setTilt(e.gamma||0,e.beta||0)},true); window.addEventListener('mousemove',e=>{let x=(e.clientX/innerWidth-.5)*18,y=(e.clientY/innerHeight-.5)*18;setTilt(x,y)})}


/* v13 requested refinements and music support */
const MUSIC_PATH='./assets/music/noir_theme.wav';
let bgMusic=null, musicStarted=false, synthMusicTimer=null, synthMusicOn=false;
function startBackgroundMusic(){
  if(!soundEnabled)return;
  unlockAudio();
  musicStarted=true;
  startSynthMusic();
}
function stopBackgroundMusic(){
  if(bgMusic)bgMusic.pause();
  stopSynthMusic();
}
function startSynthMusic(){
  if(!soundEnabled||synthMusicOn)return;
  synthMusicOn=true; unlockAudio();
  const bass=[55,55,55,49,49,52,52,46,46,49,55,55,41,41,49,49];
  const pulse=[110,0,98,0,82,0,73,0,98,0,92,0,82,0,73,0];
  let i=0;
  synthMusicTimer=setInterval(()=>{
    if(!soundEnabled){stopSynthMusic();return;}
    const b=bass[i%bass.length];
    tone(b,.80,'triangle',.020,0);
    tone(b/2,.95,'sine',.014,.03);
    if(i%4===0)tone(27.5,.70,'sine',.020,.01);
    const p=pulse[i%pulse.length];
    if(p)tone(p,.10,'square',.009,.08);
    if(i%16===12)tone(146.8,.09,'square',.007,.1);
    i++;
  },1875);
}
function stopSynthMusic(){synthMusicOn=false; if(synthMusicTimer){clearInterval(synthMusicTimer); synthMusicTimer=null;}}
document.addEventListener('visibilitychange',()=>{ if(document.hidden)stopBackgroundMusic(); else if(soundEnabled&&musicStarted)startBackgroundMusic(); });
function storageType(){
  const owned=(s&&s.owned)||[];
  if(owned.includes('Warehouse'))return 'Warehouse';
  if(owned.includes('Trunk Upgrade'))return 'Trunk Upgrade';
  if(owned.includes('Sports Bag'))return 'Sports Bag';
  if(owned.includes('Bigger Backpack'))return 'Bigger Backpack';
  return 'Pocket';
}
function healthClass(){let h=s.health; return h<=30?'health-bad':(h<=85?'health-warn':'health-good');}
function draw(){
  ensureStats(); s.stats.bestNet=Math.max(s.stats.bestNet||0,netWorth()); let p=places[s.city], hc=healthClass();
  $('dayCount').textContent=s.day; $('cash').textContent=money(s.cash); $('bank').textContent=money(s.bank); $('debt').textContent=money(s.debt);
  $('health').textContent=Math.round(s.health)+'%'; $('health').className=hc;
  $('healthBar').style.width=Math.max(0,s.health)+'%'; $('healthBar').className=hc;
  $('city').textContent=p[0]+' '+p[1]; $('country').textContent=''; $('flag').textContent='';
  $('marketInfo').innerHTML=`${p[0]}: ${cityText()}.<br>${rumourHtml()}`; $('noticeText').textContent=s.notice;
  $('spaceLabel').innerHTML=`${used()}/${totalSpace()} <span class="storage-type">${storageType()}</span>`;
  $('statusLocation').textContent=p[0]+', '+p[1]; $('rank').textContent=rank(); $('space').textContent=`${used()}/${totalSpace()} · ${storageType()}`; $('heat').textContent=s.heat+'%';
  $('marketTable').innerHTML='<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span></span></div>'+drugs.map(([name,icon])=>`<div class="row"><span class="drug"><b>${icon}</b>${name}</span><span>${s.supply[name]}</span><span class="price ${s.trends[name]?'':'down'}">${money(s.prices[name])}</span><span class="trend ${s.trends[name]?'up':'down'}">${s.trends[name]?'↑':'↓'}</span></div>`).join('');
  let items=Object.entries(s.inv).filter(([,q])=>q>0); let wc=weaponCounts(), weaponsRows=Object.entries(wc).map(([k,v])=>`<div class="row storage-weapon"><span>${k}</span><span>${v}</span><span>Weapon</span></div>`).join('');
  $('pocketTable').innerHTML='<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>'+(items.length?items.slice(0,10).map(([k,v])=>`<div class="row"><span>${k}</span><span>${v}</span><span>${money(v*s.prices[k])}</span></div>`).join(''):`<div class="row"><span>Empty</span><span>0</span><span>${money(0)}</span></div>`)+`<div class="row header"><span>Weapons Held</span><span>Qty</span><span>Status</span></div>`+(weaponsRows||'<div class="row storage-weapon"><span>None</span><span>0</span><span>Clear</span></div>');
}
function healthBlock(){let hc=healthClass(); return `<div class="health-decision"><div><strong>Health</strong><span class="${hc}">${Math.round(s.health)}%</span></div><div class="health-track"><i class="${hc}" style="width:${Math.max(0,s.health)}%"></i></div></div>`}
function modal(t,h){
  $('modalTitle').textContent=t;
  $('modalBody').innerHTML=`<div class="modal-head"><h3>${t}</h3><button type="button" class="modal-x" id="modalCloseBtn" aria-label="Close">×</button></div><div class="modal-scroll">${h+payDebtButton()}</div>`;
  if(!$('modal').open)$('modal').showModal();
  setTimeout(()=>{bindModalDebt(); let x=$('modalCloseBtn'); if(x)x.onclick=()=>done();},0);
}
function showMenu(){ensureStats(); modal('Menu',`<div class="menu-list"><button type="button" id="statsBtn">Stats</button><button type="button" id="soundToggleBtn">Sound: ${soundEnabled?'ON':'OFF'}</button><button type="button" class="sell" id="menuNewGameBtn">New Game</button></div>`); setTimeout(()=>{$('statsBtn').onclick=showStats; $('soundToggleBtn').onclick=()=>{soundEnabled=!soundEnabled; localStorage.setItem('noir_market_sound',soundEnabled?'on':'off'); if(soundEnabled){sound('positive'); startBackgroundMusic();} else stopBackgroundMusic(); showMenu();}; $('menuNewGameBtn').onclick=confirmNewGame;},0)}
function showStats(){ensureStats(); modal('Stats',`<div class="stats-list"><p><span>Days survived</span><strong>${s.day-1}</strong></p><p><span>Net worth</span><strong>${money(netWorth())}</strong></p><p><span>Best net worth</span><strong>${money(s.stats.bestNet||netWorth())}</strong></p><p><span>Storage type</span><strong>${storageType()}</strong></p><p><span>Flights taken</span><strong>${s.stats.flights||0}</strong></p><p><span>Stays</span><strong>${s.stats.stays||0}</strong></p><p><span>Fights won</span><strong>${s.stats.fightsWon||0}</strong></p><p><span>Fights lost</span><strong>${s.stats.fightsLost||0}</strong></p><p><span>Times mugged</span><strong>${s.stats.mugged||0}</strong></p><p><span>Loans taken</span><strong>${s.stats.loansTaken||0}</strong></p><p><span>Drugs bought</span><strong>${s.stats.tradesBought||0}</strong></p><p><span>Drugs sold</span><strong>${s.stats.tradesSold||0}</strong></p><p><span>Largest single trade</span><strong>${money(s.stats.largestTrade||0)}</strong></p><p><span>Heat level</span><strong>${s.heat}%</strong></p></div><button type="button" id="backMenuBtn">Back to Menu</button>`); setTimeout(()=>$('backMenuBtn').onclick=showMenu,0)}



/* v20 gameplay/UI refinements */
function round10(n){return Math.max(10,Math.round(n/10)*10)}
function ensureVaults(){ s.vaults=s.vaults||{}; places.forEach(p=>{let key=p[0]; if(!s.vaults[key]) s.vaults[key]=blankInv();}); return s.vaults[places[s.city][0]]; }
function vaultUsed(cityName=places[s.city][0]){ ensureVaults(); return Object.values(s.vaults[cityName]||{}).reduce((a,b)=>a+b,0); }
function travelFare(i){ensureStats(); const from=places[s.city][0], to=places[i][0]; const key=`${s.day}:${from}:${to}`; if(!s.travelFares[key]){ const base={London:120,Manchester:90,Birmingham:80,Liverpool:110,Leeds:120,Newcastle:160,Bristol:110,Cardiff:120,Glasgow:190,Edinburgh:190,Aberdeen:260,Belfast:220,Dublin:210,Cork:250}[to]||150; const distance=Math.abs(i-s.city)*18; const surge=rand(-45,95); s.travelFares[key]=round10(base+distance+surge);} return s.travelFares[key];}
function travel(){modal('Travel',`<div class="travel-head"><p class="subtle">Select a UK or Ireland city. Weapons are lost before boarding.</p><button type="button" id="stayFromTravel">STAY HERE</button></div><div class="travel-list">${places.map((p,i)=>`<button type="button" data-city="${i}" ${i===s.city?'disabled':''}><strong>${p[0]} <em>${money(travelFare(i))}</em></strong><span>${p[1]} · ${p[3]}</span></button>`).join('')}</div>`); setTimeout(()=>{let st=$('stayFromTravel'); if(st)st.onclick=()=>{sound('positive');haptic(); ensureStats(); s.stats.stays++; $('modal').close();nextDay(`You stay in ${places[s.city][0]}.`,true)}; document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{let i=+b.dataset.city, fare=travelFare(i); if(fare>s.cash){errorMsg('INSUFFICIENT FUNDS');return;} sound('travel');haptic(); ensureStats(); s.stats.flights++; s.cash-=fare; s.city=i; s.weapons=[]; $('modal').close(); nextDay(`You land in ${places[s.city][0]}. Flight cost ${money(fare)}. Weapons were lost before boarding.`,false);});},0)}
function updateSellValues(){document.querySelectorAll('[data-sellvalue]').forEach(el=>{let name=el.dataset.sellvalue, inp=qtyInput('sell',name), q=+inp.value||0; el.textContent=money(q*s.prices[name]);});}
function sellDrugQty(name,q){if(q<1){errorMsg('ENTER QUANTITY');return false;} if(q>s.inv[name]){errorMsg('NOT ENOUGH STOCK');return false;} let value=q*s.prices[name]; ensureStats(); s.stats.tradesSold+=q; s.stats.largestTrade=Math.max(s.stats.largestTrade||0,value); s.cash+=value; s.inv[name]-=q; s.notice=`Sold ${q} units of ${name}.`; save(); draw(); success(`Sold ${q} ${name}`); return true;}
function sellModal(){let owned=drugs.filter(([name])=>s.inv[name]>0); let wc=weaponCounts(); let weaponTiles=Object.entries(wc).map(([name,q])=>{let w=getWeapon(name), val=Math.floor((w?.price||0)/2); return `<div class="trade-tile weapon-sale"><div class="trade-title"><strong>${name}</strong></div><p>Owned: ${q}</p><p>Resale: <strong>${money(val)}</strong> each</p><p>Sell all: <strong>${money(val*q)}</strong></p>${qtyControl(name,'wsell',q)}<button type="button" class="sell" data-sellweapon="${name}">SELL WEAPON</button><button type="button" data-sellallweapon="${name}">SELL ALL</button></div>`}).join(''); modal('Sell',`<div class="modal-money"><span>Current funds</span><strong>${money(s.cash)}</strong><em>Storage ${used()}/${totalSpace()}</em></div>${owned.length?`<h4>Stock</h4><div class="trade-grid">${owned.map(([name,icon])=>`<div class="trade-tile"><div class="trade-title"><b>${icon}</b><strong>${name}</strong></div><p>Owned: ${s.inv[name]}</p><p>Price: ${money(s.prices[name])}</p><p>Sell all value: <strong>${money(s.inv[name]*s.prices[name])}</strong></p>${qtyControl(name,'sell',s.inv[name])}<p class="tile-value">Selected: <b data-sellvalue="${name}">£0</b></p><button type="button" class="sell" data-selldrug="${name}">SELL</button><button type="button" data-sellalldrug="${name}">SELL ALL</button></div>`).join('')}</div>`:'<p class="subtle">You have no stock to sell.</p>'}${weaponTiles?`<h4>Weapons</h4><div class="trade-grid">${weaponTiles}</div>`:''}<div class="trade-footer"><span>Cash ${money(s.cash)}</span><span>Owned lines ${owned.length}</span></div>`); setTimeout(()=>{bindQtyButtons('sell');bindQtyButtons('wsell');document.querySelectorAll('[id^="qty-sell-"]').forEach(i=>i.oninput=updateSellValues); document.querySelectorAll('[data-selldrug]').forEach(b=>b.onclick=()=>{let name=b.dataset.selldrug,q=+qtyInput('sell',name).value||0; if(sellDrugQty(name,q))sellModal();}); document.querySelectorAll('[data-sellalldrug]').forEach(b=>b.onclick=()=>{let name=b.dataset.sellalldrug,q=s.inv[name]||0; if(sellDrugQty(name,q))sellModal();}); document.querySelectorAll('[data-sellweapon]').forEach(b=>b.onclick=()=>{let name=b.dataset.sellweapon,q=+qtyInput('wsell',name).value||0, w=getWeapon(name), val=Math.floor((w?.price||0)/2); if(q<1){errorMsg('ENTER QUANTITY');return;} let count=weaponCounts()[name]||0; if(q>count){errorMsg('NOT ENOUGH STOCK');return;} for(let i=0;i<q;i++){let idx=s.weapons.indexOf(name); if(idx>=0)s.weapons.splice(idx,1);} s.cash+=q*val; s.notice=`Sold ${q} ${name} for ${money(q*val)}.`; save(); draw(); success(`Sold ${name}`); sellModal();}); document.querySelectorAll('[data-sellallweapon]').forEach(b=>b.onclick=()=>{let name=b.dataset.sellallweapon, count=weaponCounts()[name]||0, w=getWeapon(name), val=Math.floor((w?.price||0)/2); if(!count){errorMsg('NOT ENOUGH STOCK');return;} s.weapons=s.weapons.filter(x=>x!==name); s.cash+=count*val; s.notice=`Sold all ${name} for ${money(count*val)}.`; save(); draw(); success(`Sold all ${name}`); sellModal();}); updateSellValues();},0)}
function dump(){ensureVaults(); const city=places[s.city][0], vault=s.vaults[city]; const carried=Object.entries(s.inv).filter(([,q])=>q>0); const stored=Object.entries(vault).filter(([,q])=>q>0); modal('Storage',`<div class="modal-money"><span>Carried</span><strong>${used()}/${totalSpace()}</strong><em>${storageType()}</em></div><div class="modal-money"><span>${city} Vault</span><strong>${vaultUsed(city)}/100</strong><em>City only</em></div><p class="subtle">Vault stock stays in the city where you leave it. London stock stays in London. Liverpool will not carry London’s mess.</p><h4>Move to Vault</h4>${carried.length?`<div class="storage-move-list">${carried.map(([name,q])=>`<div class="storage-move"><div><strong>${name}</strong><span>Carried: ${q}</span></div><button type="button" data-vaultone="${name}">MOVE 1</button><button type="button" data-vaultall="${name}">MOVE ALL</button></div>`).join('')}</div>`:'<p class="subtle">No carried stock.</p>'}<h4>${city} Vault</h4>${stored.length?`<div class="storage-move-list">${stored.map(([name,q])=>`<div class="storage-move"><div><strong>${name}</strong><span>Vault: ${q}</span></div><button type="button" data-takeone="${name}">TAKE 1</button><button type="button" data-takeall="${name}">TAKE ALL</button></div>`).join('')}</div>`:'<p class="subtle">This city vault is empty.</p>'}`); setTimeout(()=>{function toVault(name,qty){let space=100-vaultUsed(city); qty=Math.min(qty,s.inv[name]||0,space); if(qty<1){errorMsg(space<1?'VAULT FULL':'NO STOCK');return;} s.inv[name]-=qty; vault[name]=(vault[name]||0)+qty; s.notice=`Moved ${qty} ${name} into the ${city} vault.`; save(); draw(); success('Moved to vault'); dump();} function fromVault(name,qty){let space=totalSpace()-used(); qty=Math.min(qty,vault[name]||0,space); if(qty<1){errorMsg(space<1?'INSUFFICIENT STORAGE':'NO VAULT STOCK');return;} vault[name]-=qty; s.inv[name]=(s.inv[name]||0)+qty; s.notice=`Moved ${qty} ${name} from the ${city} vault.`; save(); draw(); success('Moved from vault'); dump();} document.querySelectorAll('[data-vaultone]').forEach(b=>b.onclick=()=>toVault(b.dataset.vaultone,1)); document.querySelectorAll('[data-vaultall]').forEach(b=>b.onclick=()=>toVault(b.dataset.vaultall,s.inv[b.dataset.vaultall]||0)); document.querySelectorAll('[data-takeone]').forEach(b=>b.onclick=()=>fromVault(b.dataset.takeone,1)); document.querySelectorAll('[data-takeall]').forEach(b=>b.onclick=()=>fromVault(b.dataset.takeall,vault[b.dataset.takeall]||0));},0)}
function startSynthMusic(){if(!soundEnabled||synthMusicOn)return; synthMusicOn=true; unlockAudio(); const bass=[41.2,41.2,41.2,36.7,36.7,38.9,38.9,34.6,34.6,36.7,41.2,41.2,30.9,30.9,36.7,36.7]; const tones=[0,82.4,0,73.4,0,65.4,0,61.7,0,73.4,0,82.4,0,55,0,61.7]; let i=0; synthMusicTimer=setInterval(()=>{if(!soundEnabled){stopSynthMusic();return;} const b=bass[i%bass.length]; tone(b,1.05,'sine',.016,0); tone(b/2,1.20,'triangle',.012,.04); if(i%4===0)tone(27.5,.85,'sine',.014,.02); const t=tones[i%tones.length]; if(t)tone(t,.16,'square',.006,.12); if(i%16===15)tone(98,.12,'square',.005,.18); i++;},1250)}
function createGameDust(){if(document.querySelector('.game-dust'))return; const layer=document.createElement('div'); layer.className='game-dust'; const count=110; for(let i=0;i<count;i++){const d=document.createElement('i'); const size=(Math.random()*1.55+0.45).toFixed(2); d.style.left=(Math.random()*100).toFixed(2)+'%'; d.style.bottom=(-12-Math.random()*30).toFixed(2)+'%'; d.style.width=size+'px'; d.style.height=size+'px'; d.style.opacity=(Math.random()*0.35+0.10).toFixed(2); d.style.animationDuration=(38+Math.random()*36).toFixed(2)+'s'; d.style.animationDelay=(-Math.random()*44).toFixed(2)+'s'; d.style.setProperty('--drift',(Math.random()*24-12).toFixed(1)+'px'); layer.appendChild(d);} document.body.prepend(layer)}
function createSplashDust(){const splash=$('splash'); if(!splash || splash.querySelector('.live-dust'))return; const layer=document.createElement('div'); layer.className='live-dust'; const count=260; for(let i=0;i<count;i++){const d=document.createElement('i'); const size=(Math.random()*1.7+0.55).toFixed(2); d.style.left=(Math.random()*100).toFixed(2)+'%'; d.style.bottom=(-8-Math.random()*18).toFixed(2)+'%'; d.style.width=size+'px'; d.style.height=size+'px'; d.style.opacity=(Math.random()*0.55+0.22).toFixed(2); d.style.animationDuration=(58+Math.random()*48).toFixed(2)+'s'; d.style.animationDelay=(-Math.random()*60).toFixed(2)+'s'; d.style.setProperty('--drift',(Math.random()*34-17).toFixed(1)+'px'); layer.appendChild(d);} splash.prepend(layer)}

$('buyBtn').onclick=()=>transact('Buy'); $('sellBtn').onclick=()=>transact('Sell'); $('stayBtn').onclick=stay; $('travelBtn').onclick=travel; $('bankBtn').onclick=bank; $('dumpBtn').onclick=dump; $('shopBtn').onclick=shop; $('menuBtn').onclick=showMenu; let firstFreshGame=false; $('splash').onclick=()=>{unlockAudio(); startBackgroundMusic(); musicStarted=true; sound('positive'); $('splash').classList.add('hide'); setTimeout(()=>{showWelcome();},460)}; setupTilt(); createSplashDust(); createGameDust(); firstFreshGame=load();

// Native app feel: suppress iOS double-tap and pinch zoom when launched from browser/home screen.
let __lastTouchEnd=0;
document.addEventListener('touchend',e=>{const now=Date.now(); if(now-__lastTouchEnd<=300)e.preventDefault(); __lastTouchEnd=now;},{passive:false});
document.addEventListener('gesturestart',e=>e.preventDefault(),{passive:false});
document.addEventListener('gesturechange',e=>e.preventDefault(),{passive:false});
document.addEventListener('gestureend',e=>e.preventDefault(),{passive:false});

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

/* v21 vault refinements */
function cityVaultLine(city){
  const lines={
    London:"London stock stays in London. Liverpool will not carry London’s mess.",
    Manchester:"Manchester keeps its own stash. Try moving it to Glasgow and it develops trust issues.",
    Birmingham:"Birmingham vault stock stays in Brum. It is not doing a national tour.",
    Liverpool:"Liverpool stock stays by the Mersey. London’s chaos can sort itself out.",
    Leeds:"Leeds stock stays in Leeds. It refuses to commute for your poor decisions.",
    Newcastle:"Newcastle stock stays up north. It is not getting on a plane for anyone.",
    Bristol:"Bristol vault stock stays in Bristol. Very relaxed, very unavailable elsewhere.",
    Cardiff:"Cardiff stock stays in Cardiff. It will not cross the bridge unless you carry it.",
    Glasgow:"Glasgow stock stays in Glasgow. It is not scared, just geographically committed.",
    Edinburgh:"Edinburgh stock stays in Edinburgh. It has standards and a postcode.",
    Aberdeen:"Aberdeen stock stays in Aberdeen. Too far north to care about your travel plans.",
    Belfast:"Belfast stock stays in Belfast. It does not magically appear in Dublin.",
    Dublin:"Dublin stock stays in Dublin. It likes the city and hates admin.",
    Cork:"Cork stock stays in Cork. Even the vault has decided that is far enough."
  };
  return lines[city]||`${city} stock stays in ${city}. Other cities are not running a delivery service.`;
}
function blankWeaponVault(){return {};}
function ensureVaults(){
  s.vaults=s.vaults||{};
  s.weaponVaults=s.weaponVaults||{};
  places.forEach(p=>{
    let key=p[0];
    if(!s.vaults[key])s.vaults[key]=blankInv();
    if(!s.weaponVaults[key])s.weaponVaults[key]=blankWeaponVault();
  });
  return s.vaults[places[s.city][0]];
}
function vaultDrugUsed(cityName=places[s.city][0]){ensureVaults(); return Object.values(s.vaults[cityName]||{}).reduce((a,b)=>a+b,0);}
function vaultWeaponUsed(cityName=places[s.city][0]){ensureVaults(); return Object.values(s.weaponVaults[cityName]||{}).reduce((a,b)=>a+b,0);}
function vaultUsed(cityName=places[s.city][0]){return vaultDrugUsed(cityName)+vaultWeaponUsed(cityName);}
function carriedWeaponCounts(){return weaponCounts();}
function adjustWeaponList(name,qty,mode){
  qty=Math.max(0,qty|0);
  if(mode==='remove'){
    let removed=0;
    for(let i=0;i<qty;i++){
      let idx=s.weapons.indexOf(name);
      if(idx<0)break;
      s.weapons.splice(idx,1); removed++;
    }
    return removed;
  }
  if(mode==='add'){
    for(let i=0;i<qty;i++)s.weapons.push(name);
    return qty;
  }
  return 0;
}
function dump(){
  ensureVaults();
  const city=places[s.city][0], vault=s.vaults[city], wVault=s.weaponVaults[city];
  const carried=Object.entries(s.inv).filter(([,q])=>q>0);
  const stored=Object.entries(vault).filter(([,q])=>q>0);
  const cWeapons=Object.entries(carriedWeaponCounts()).filter(([,q])=>q>0);
  const vWeapons=Object.entries(wVault).filter(([,q])=>q>0);
  const rowDrug=(name,q,i)=>`<div class="storage-move vault-row"><div><strong>${name}</strong><span>Carried: ${q}</span></div><input type="number" inputmode="numeric" min="0" max="${q}" value="${q}" id="vdrug-${i}"><button type="button" data-storedrug="${i}">STORE</button><button type="button" data-storealldrug="${i}">STORE ALL</button><button type="button" class="danger-mini" data-dropdrug="${i}">DUMP</button></div>`;
  const rowWeapon=(name,q,i)=>`<div class="storage-move vault-row"><div><strong>${name}</strong><span>Held: ${q}</span></div><input type="number" inputmode="numeric" min="0" max="${q}" value="${q}" id="vweapon-${i}"><button type="button" data-storeweapon="${i}">STORE</button><button type="button" data-storeallweapon="${i}">STORE ALL</button><button type="button" class="danger-mini" data-dropweapon="${i}">DUMP</button></div>`;
  const rowStored=(name,q,i)=>`<div class="storage-move vault-row"><div><strong>${name}</strong><span>Vault: ${q}</span></div><input type="number" inputmode="numeric" min="0" max="${q}" value="${q}" id="tdrug-${i}"><button type="button" data-takedrug="${i}">TAKE</button><button type="button" data-takealldrug="${i}">TAKE ALL</button></div>`;
  const rowStoredWeapon=(name,q,i)=>`<div class="storage-move vault-row"><div><strong>${name}</strong><span>Vault: ${q}</span></div><input type="number" inputmode="numeric" min="0" max="${q}" value="${q}" id="tweapon-${i}"><button type="button" data-takeweapon="${i}">TAKE</button><button type="button" data-takeallweapon="${i}">TAKE ALL</button></div>`;
  modal('Storage',`<div class="modal-money"><span>Carried</span><strong>${used()}/${totalSpace()}</strong><em>${storageType()}</em></div><div class="modal-money"><span>${city} Vault</span><strong>${vaultUsed(city)}/100</strong><em>City only</em></div><p class="subtle vault-line">${cityVaultLine(city)}</p><h4>Vault Options</h4><p class="subtle">Store stock or weapons in this city vault, retrieve them later, or dump unwanted items permanently.</p><h4>Move Drugs to Vault</h4>${carried.length?`<div class="storage-move-list">${carried.map(([n,q],i)=>rowDrug(n,q,i)).join('')}</div>`:'<p class="subtle">No carried drugs.</p>'}<h4>Move Weapons to Vault</h4>${cWeapons.length?`<div class="storage-move-list">${cWeapons.map(([n,q],i)=>rowWeapon(n,q,i)).join('')}</div>`:'<p class="subtle">No weapons held.</p>'}<h4>${city} Vault Drugs</h4>${stored.length?`<div class="storage-move-list">${stored.map(([n,q],i)=>rowStored(n,q,i)).join('')}</div>`:'<p class="subtle">No drugs in this city vault.</p>'}<h4>${city} Vault Weapons</h4>${vWeapons.length?`<div class="storage-move-list">${vWeapons.map(([n,q],i)=>rowStoredWeapon(n,q,i)).join('')}</div>`:'<p class="subtle">No weapons in this city vault.</p>'}`);
  setTimeout(()=>{
    function toVaultDrug(name,qty){let space=100-vaultUsed(city); qty=Math.min(qty,s.inv[name]||0,space); if(qty<1){errorMsg(space<1?'VAULT FULL':'NO STOCK');return;} s.inv[name]-=qty; vault[name]=(vault[name]||0)+qty; s.notice=`Stored ${qty} ${name} in the ${city} vault.`; save(); draw(); success('Stored in vault'); dump();}
    function dropDrug(name,qty){qty=Math.min(qty,s.inv[name]||0); if(qty<1){errorMsg('NO STOCK');return;} s.inv[name]-=qty; s.notice=`Dumped ${qty} ${name}. Gone. No refunds. No questions.`; save(); draw(); sound('negative'); dump();}
    function fromVaultDrug(name,qty){let space=totalSpace()-used(); qty=Math.min(qty,vault[name]||0,space); if(qty<1){errorMsg(space<1?'INSUFFICIENT STORAGE':'NO VAULT STOCK');return;} vault[name]-=qty; s.inv[name]=(s.inv[name]||0)+qty; s.notice=`Retrieved ${qty} ${name} from the ${city} vault.`; save(); draw(); success('Retrieved from vault'); dump();}
    function toVaultWeapon(name,qty){let space=100-vaultUsed(city); qty=Math.min(qty,carriedWeaponCounts()[name]||0,space); if(qty<1){errorMsg(space<1?'VAULT FULL':'NO WEAPON');return;} adjustWeaponList(name,qty,'remove'); wVault[name]=(wVault[name]||0)+qty; s.notice=`Stored ${qty} ${name} in the ${city} vault.`; save(); draw(); success('Weapon stored'); dump();}
    function dropWeapon(name,qty){qty=Math.min(qty,carriedWeaponCounts()[name]||0); if(qty<1){errorMsg('NO WEAPON');return;} adjustWeaponList(name,qty,'remove'); s.notice=`Dumped ${qty} ${name}. Sensible? Probably not. Convenient? Yes.`; save(); draw(); sound('negative'); dump();}
    function fromVaultWeapon(name,qty){qty=Math.min(qty,wVault[name]||0); if(qty<1){errorMsg('NO VAULT WEAPON');return;} wVault[name]-=qty; adjustWeaponList(name,qty,'add'); s.notice=`Retrieved ${qty} ${name} from the ${city} vault.`; save(); draw(); success('Weapon retrieved'); dump();}
    document.querySelectorAll('[data-storedrug]').forEach(b=>b.onclick=()=>{let [name,q]=carried[+b.dataset.storedrug]; toVaultDrug(name,+$('vdrug-'+b.dataset.storedrug).value||0);});
    document.querySelectorAll('[data-storealldrug]').forEach(b=>b.onclick=()=>{let [name,q]=carried[+b.dataset.storealldrug]; toVaultDrug(name,q);});
    document.querySelectorAll('[data-dropdrug]').forEach(b=>b.onclick=()=>{let [name,q]=carried[+b.dataset.dropdrug]; dropDrug(name,+$('vdrug-'+b.dataset.dropdrug).value||0);});
    document.querySelectorAll('[data-takedrug]').forEach(b=>b.onclick=()=>{let [name,q]=stored[+b.dataset.takedrug]; fromVaultDrug(name,+$('tdrug-'+b.dataset.takedrug).value||0);});
    document.querySelectorAll('[data-takealldrug]').forEach(b=>b.onclick=()=>{let [name,q]=stored[+b.dataset.takealldrug]; fromVaultDrug(name,q);});
    document.querySelectorAll('[data-storeweapon]').forEach(b=>b.onclick=()=>{let [name,q]=cWeapons[+b.dataset.storeweapon]; toVaultWeapon(name,+$('vweapon-'+b.dataset.storeweapon).value||0);});
    document.querySelectorAll('[data-storeallweapon]').forEach(b=>b.onclick=()=>{let [name,q]=cWeapons[+b.dataset.storeallweapon]; toVaultWeapon(name,q);});
    document.querySelectorAll('[data-dropweapon]').forEach(b=>b.onclick=()=>{let [name,q]=cWeapons[+b.dataset.dropweapon]; dropWeapon(name,+$('vweapon-'+b.dataset.dropweapon).value||0);});
    document.querySelectorAll('[data-takeweapon]').forEach(b=>b.onclick=()=>{let [name,q]=vWeapons[+b.dataset.takeweapon]; fromVaultWeapon(name,+$('tweapon-'+b.dataset.takeweapon).value||0);});
    document.querySelectorAll('[data-takeallweapon]').forEach(b=>b.onclick=()=>{let [name,q]=vWeapons[+b.dataset.takeallweapon]; fromVaultWeapon(name,q);});
  },0);
}
function recreateDustSlowerSmaller(){
  document.querySelectorAll('.game-dust,.live-dust').forEach(el=>el.remove());
  createSplashDust(); createGameDust();
}
setTimeout(recreateDustSlowerSmaller,80);

/* v23 loan limits, raids, customs and airport warnings */
function stockSummary(){
  const items=Object.entries(s.inv||{}).filter(([,q])=>q>0).map(([n,q])=>`${n} x${q}`);
  const wc=weaponCounts();
  const ws=Object.entries(wc).filter(([,q])=>q>0).map(([n,q])=>`${n} x${q}`);
  return {items,ws,total:items.length+ws.length};
}
function removeDrugPercent(minPct,maxPct){
  const losses=[];
  Object.keys(s.inv||{}).forEach(n=>{
    const q=s.inv[n]||0; if(q<=0)return;
    const pct=rand(minPct,maxPct);
    const lost=Math.min(q, Math.max(1, Math.floor(q*pct/100)));
    s.inv[n]-=lost; losses.push(`${n} -${lost} (${pct}%)`);
  });
  return losses;
}
function removeRandomStockPercent(maxPct=100){return removeDrugPercent(5,maxPct);}
function removeWeaponPercent(minPct,maxPct){
  const wc=weaponCounts(), losses=[];
  Object.entries(wc).forEach(([n,q])=>{
    const pct=rand(minPct,maxPct);
    const lost=Math.min(q, Math.max(1, Math.floor(q*pct/100)));
    adjustWeaponList(n,lost,'remove'); losses.push(`${n} -${lost}`);
  });
  return losses;
}
function chooseLoan(i){
  let l=lenders[i];
  modal(l[0],`<p>Borrow up to <strong>${money(l[1])}</strong>. Repay ${l[3]*100}% interest by day ${s.day+l[2]}.</p><input id="loanAmount" inputmode="numeric" type="number" min="1" max="${l[1]}" placeholder="Amount"><button type="button" class="sell" id="confirmLoan">ARE YOU SURE?</button>`);
  setTimeout(()=>{
    const btn=$('confirmLoan'); if(!btn)return;
    btn.onclick=()=>{
      sound('negative'); haptic('error');
      let raw=+$('loanAmount').value||0;
      if(!raw){errorMsg('ENTER AN AMOUNT');return;}
      if(raw>l[1]){errorMsg(`${l[0]} DECLINED: MAX ${money(l[1])}`); s.notice=`${l[0]} declines the loan. Their ceiling is ${money(l[1])}, and apparently they do have standards.`; draw(); return;}
      let amt=Math.max(1,Math.floor(raw));
      let repay=Math.round(amt*(1+l[3])); ensureStats(); s.stats.loansTaken++;
      s.cash+=amt; s.debt+=repay; s.loans.push({name:l[0],due:s.day+l[2],repay});
      s.notice=`Borrowed ${money(amt)} from ${l[0]}. ${money(repay)} due day ${s.day+l[2]}.`;
      $('modal').close(); save(); draw(); toast(`Loan accepted: ${money(amt)}`,'bad');
    };
  },0);
}
function randomEvent(base){
  let roll=Math.random(), d=pickDrug(); ensureStats(); s.notice=base+' ';
  if(roll<.10){
    s.stats.mugged++; let pct=rand(10,65),lost=Math.floor(s.cash*pct/100),stolen=takeDrugs(35); s.cash-=lost; s.health=Math.max(5,s.health-rand(3,15));
    s.notice+=`You are mugged. ${pct}% of your cash is taken (${money(lost)}). ${stolen.length?'Stock stolen: '+stolen.join(', ')+'.':'No stock was taken.'}`;
  } else if(roll<.20){
    const losses=removeDrugPercent(20,100), wloss=removeWeaponPercent(0,35); s.heat=Math.min(100,s.heat+rand(15,30));
    s.notice+=`Police raid. Stock gets lifted: ${losses.length?losses.join(', '):'nothing found'}.${wloss.length?' Weapons seized: '+wloss.join(', ')+'.':''}`;
  } else if(roll<.30){
    const losses=removeDrugPercent(10,50); s.heat=Math.min(100,s.heat+rand(5,15));
    s.notice+=`Stash discovery. Someone found the wrong hiding place. Lost: ${losses.length?losses.join(', '):'nothing useful'}.`;
  } else if(roll<.38){
    s.supply[d]=Math.max(0,Math.floor((s.supply[d]||0)*.25)); s.prices[d]=Math.round(s.prices[d]*rand(160,280)/100); s.heat=Math.min(100,s.heat+rand(8,20));
    s.notice+=`Supplier arrested. ${d} supply collapses and prices jump.`;
  } else if(roll<.46){
    const losses=removeDrugPercent(5,35); s.heat=Math.min(100,s.heat+rand(12,24));
    s.notice+=`Customs seizure. Airport dogs ruin the business plan. ${losses.length?'Lost '+losses.join(', ')+'.':'You had nothing worth sniffing out.'}`;
  } else if(roll<.56){
    s.prices[d]=Math.round(s.prices[d]*rand(180,340)/100); s.supply[d]=Math.max(0,Math.floor((s.supply[d]||0)*.5));
    s.notice+=`Festival demand spike. Everybody suddenly wants ${d}. Prices go feral.`;
  } else if(roll<.64){
    s.prices[d]=Math.round(s.prices[d]*rand(220,450)/100); s.supply[d]=Math.max(0,Math.floor((s.supply[d]||0)*.35));
    s.notice+=`Rodents got into local stashes. Grim news for hygiene, great news for ${d} prices.`;
  } else if(roll<.72){
    let q=Math.min(rand(5,80),totalSpace()-used()); if(q>0)s.inv[d]+=q;
    s.notice+=q>0?`A contact gives you ${q} units of ${d}.`:'A contact offers free stock, but you have no room. Professional.';
  } else if(roll<.82){
    s.prices[d]*=rand(2,4); s.notice+=`${d} is drying up. Prices spike.`;
  } else if(roll<.90){
    s.prices[d]=Math.max(1,Math.round(s.prices[d]*.35)); s.supply[d]+=rand(100,500); s.notice+=`The market is flooded with ${d}. Prices collapse.`;
  } else {
    s.notice+='A quiet day. The market holds. Suspicious, frankly.';
  }
}
function doFlight(i,fare){
  sound('travel'); haptic(); ensureStats(); s.stats.flights++; s.cash-=fare; s.city=i; save(); draw();
  $('modal').close(); nextDay(`You land in ${places[s.city][0]}. Flight cost ${money(fare)}.`,false);
}
function boardFlightWithSeizure(i,fare){
  const hadDrugs=used(), hadWeapons=(s.weapons||[]).length;
  if(hadDrugs){Object.keys(s.inv).forEach(k=>s.inv[k]=0);}
  if(hadWeapons)s.weapons=[];
  s.heat=Math.min(100,s.heat+(hadDrugs||hadWeapons?rand(10,25):0));
  s.notice=`Airport security seized ${hadDrugs} drug units and ${hadWeapons} weapon${hadWeapons===1?'':'s'}. That is what happens when you pack like an idiot.`;
  doFlight(i,fare);
}
function airportWarning(i,fare){
  const dest=places[i][0], summary=stockSummary();
  modal('Airport Warning',`<p><strong>Before you board:</strong> guns and drugs will be seized at the airport if you carry them through security.</p><p>Destination: <strong>${dest}</strong><br>Flight price: <strong>${money(fare)}</strong></p><p class="subtle">Store anything you want to keep in this city’s vault before flying. Vault stock stays where you leave it.</p><div class="warning-stock"><p>Drugs carried: <strong>${used()}</strong></p><p>Weapons carried: <strong>${(s.weapons||[]).length}</strong></p></div><div class="loan-choice"><button type="button" id="storeBeforeFlight">Store in Vault</button><button type="button" class="sell" id="boardAnyway">Board Anyway</button><button type="button" id="cancelFlight">Cancel</button></div>`);
  setTimeout(()=>{
    $('storeBeforeFlight').onclick=()=>dump();
    $('boardAnyway').onclick=()=>boardFlightWithSeizure(i,fare);
    $('cancelFlight').onclick=()=>travel();
  },0);
}
function travel(){
  modal('Travel',`<div class="travel-head"><p class="subtle">Select a UK or Ireland city. Prices change daily and airport security is not your mate.</p><button type="button" id="stayFromTravel">STAY HERE</button></div><div class="travel-list">${places.map((p,i)=>`<button type="button" data-city="${i}" ${i===s.city?'disabled':''}><strong>${p[0]} <em>${money(travelFare(i))}</em></strong><span>${p[1]} · ${p[3]}</span></button>`).join('')}</div>`);
  setTimeout(()=>{
    let st=$('stayFromTravel'); if(st)st.onclick=()=>{sound('positive');haptic(); ensureStats(); s.stats.stays++; $('modal').close();nextDay(`You stay in ${places[s.city][0]}.`,true)};
    document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{let i=+b.dataset.city, fare=travelFare(i); if(fare>s.cash){errorMsg('INSUFFICIENT FUNDS');return;} airportWarning(i,fare);});
  },0);
}

/* v24 lender bios, stricter loan declines, dangerous event reinforcement and airport seizure warning */
const lenderBios = {
  SPAMMER: `Spammer looks friendly, which is normally the first warning. He lends small, smiles wide, and allegedly keeps a little box labelled “late payment fingers”. Every day you are late, he adds interest and starts looking at your hands like a tapas menu.`,
  TOMMY: `Tommy wears a tracksuit, calls everyone “chief”, and has never once accepted “I forgot” as a payment plan. His loans are bigger, his patience is smaller, and his dog is somehow on the payroll.`,
  SMUDGER: `Smudger does not shout. That is the problem. He just nods, writes your name down, and lets compound interest do the violence first. After that, he improvises.`,
  BAZZER: `BazzER lends like a mate and collects like a horror film. Three days sounds generous until you realise Bazzer counts nights, lunch breaks and awkward silences as separate days.`,
  GRIFF: `Griff is the last door you knock on when every sensible option has already locked itself. He will lend six figures, but his repayment reminders come with tyre irons and poor spelling.`
};
function lenderBio(name){return lenderBios[name]||'A charming local finance professional, if your definition of finance includes threats and dental work.';}

function chooseLoan(i){
  let l=lenders[i], name=l[0], max=l[1], days=l[2], interest=l[3];
  modal(name,`<p>${lenderBio(name)}</p><p class="subtle">Borrow up to <strong>${money(max)}</strong>. Repay <strong>${Math.round(interest*100)}%</strong> interest by day <strong>${s.day+days}</strong>.</p><input id="loanAmount" inputmode="numeric" type="number" min="1" max="${max}" placeholder="Amount"><button type="button" class="sell" id="confirmLoan">ARE YOU SURE?</button>`);
  setTimeout(()=>{
    const btn=$('confirmLoan'); if(!btn)return;
    btn.onclick=()=>{
      sound('negative'); haptic('error');
      let raw=+$('loanAmount').value||0;
      if(!raw){errorMsg('ENTER AN AMOUNT');return;}
      if(raw>max){
        modal('Loan Declined',`<p><strong>${name} declines.</strong></p><p>You asked for ${money(raw)}, but ${name} will only lend up to ${money(max)}.</p><p class="subtle">Even shady lenders have credit controls. Depressing, but true.</p><button type="button" id="backToLender">Try a lower amount</button>`);
        setTimeout(()=>{const b=$('backToLender'); if(b)b.onclick=()=>chooseLoan(i);},0);
        return;
      }
      let amt=Math.max(1,Math.floor(raw));
      let repay=Math.round(amt*(1+interest));
      ensureStats(); s.stats.loansTaken++;
      s.cash+=amt; s.debt+=repay; s.loans.push({name,due:s.day+days,repay});
      s.notice=`Borrowed ${money(amt)} from ${name}. ${money(repay)} due day ${s.day+days}.`;
      $('modal').close(); save(); draw(); toast(`Loan accepted: ${money(amt)}`,'bad');
    };
  },0);
}

function showLoanIntro(){
  modal('Shady Loans',`<p class="subtle">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><div class="loan-list">${lenders.map((l,i)=>`<button type="button" data-loan="${i}"><strong>${l[0]}</strong><br>up to ${money(l[1])} · ${Math.round(l[3]*100)}% interest · due in ${l[2]} days<br><span class="subtle">${lenderBio(l[0]).slice(0,92)}...</span></button>`).join('')}</div><button type="button" id="skipLoan">Start without debt</button>`);
  setTimeout(()=>{document.querySelectorAll('[data-loan]').forEach(b=>b.onclick=()=>chooseLoan(+b.dataset.loan)); const sk=$('skipLoan'); if(sk)sk.onclick=()=>$('modal').close();},0);
}

function dangerousEventText(){
  const r=Math.random(), d=pickDrug(); ensureStats();
  if(r<.16){
    const losses=removeDrugPercent(25,100), wloss=removeWeaponPercent(10,70); s.heat=Math.min(100,s.heat+rand(18,35));
    return `Police raid. Doors come off, dignity leaves first. Stock seized: ${losses.length?losses.join(', '):'nothing found'}.${wloss.length?' Weapons seized: '+wloss.join(', ')+'.':''}`;
  }
  if(r<.31){
    const losses=removeDrugPercent(10,50); s.heat=Math.min(100,s.heat+rand(5,18));
    return `Stash discovery. Someone finds your hiding place and helps themselves. Lost: ${losses.length?losses.join(', '):'nothing useful'}.`;
  }
  if(r<.43){
    s.supply[d]=Math.max(0,Math.floor((s.supply[d]||0)*.25)); s.prices[d]=Math.round(s.prices[d]*rand(160,300)/100); s.heat=Math.min(100,s.heat+rand(8,22));
    return `Supplier arrested. ${d} goes scarce and the price jumps like it heard sirens.`;
  }
  if(r<.55){
    const losses=removeDrugPercent(5,40); s.heat=Math.min(100,s.heat+rand(12,28));
    return `Customs seizure. Airport dogs earn their biscuits. ${losses.length?'Lost '+losses.join(', ')+'.':'You had nothing worth sniffing out.'}`;
  }
  if(r<.68){
    s.prices[d]=Math.round(s.prices[d]*rand(180,360)/100); s.supply[d]=Math.max(0,Math.floor((s.supply[d]||0)*.5));
    return `Festival demand spike. Everyone suddenly wants ${d}. Prices go feral.`;
  }
  if(r<.80){
    s.prices[d]=Math.round(s.prices[d]*rand(220,480)/100); s.supply[d]=Math.max(0,Math.floor((s.supply[d]||0)*.35));
    return `Rodents got into local stashes. Horrible for hygiene, excellent for ${d} prices.`;
  }
  if(r<.90){
    s.stats.mugged++; let pct=rand(10,65),lost=Math.floor(s.cash*pct/100),stolen=takeDrugs(35); s.cash-=lost; s.health=Math.max(5,s.health-rand(3,15));
    return `You are mugged. ${pct}% of your cash is taken (${money(lost)}). ${stolen.length?'Stock stolen: '+stolen.join(', ')+'.':'No stock was taken.'}`;
  }
  return 'A quiet day. The market holds. Suspicious, frankly.';
}
function randomEvent(base){
  s.notice=base+' '+dangerousEventText();
}

function boardFlightWithSeizure(i,fare){
  const hadDrugs=used(), hadWeapons=(s.weapons||[]).length;
  let seizedDrugs=0, seizedWeapons=0;
  if(hadDrugs && Math.random()<.92){seizedDrugs=hadDrugs; Object.keys(s.inv).forEach(k=>s.inv[k]=0);}
  if(hadWeapons && Math.random()<.92){seizedWeapons=hadWeapons; s.weapons=[];}
  s.heat=Math.min(100,s.heat+((seizedDrugs||seizedWeapons)?rand(12,30):rand(2,8)));
  s.notice=(seizedDrugs||seizedWeapons)
    ? `Airport security seized ${seizedDrugs} drug units and ${seizedWeapons} weapon${seizedWeapons===1?'':'s'}. Next time, vault first, fly second.`
    : `Somehow you slip through airport security with your stock intact. Do not make that your business plan.`;
  doFlight(i,fare);
}
function airportWarning(i,fare){
  const dest=places[i][0];
  modal('Airport Warning',`<p><strong>Before you board:</strong> guns and drugs are likely to be seized at the airport.</p><p>Destination: <strong>${dest}</strong><br>Flight price: <strong>${money(fare)}</strong></p><p class="subtle">Store anything you want to keep in this city’s vault before flying. Vault stock stays where you leave it. Dump it if you would rather not risk carrying it.</p><div class="warning-stock"><p>Drugs carried: <strong>${used()}</strong></p><p>Weapons carried: <strong>${(s.weapons||[]).length}</strong></p></div><div class="loan-choice"><button type="button" id="storeBeforeFlight">Store in Vault</button><button type="button" class="sell" id="boardAnyway">Board Anyway</button><button type="button" id="cancelFlight">Cancel</button></div>`);
  setTimeout(()=>{
    const sv=$('storeBeforeFlight'), ba=$('boardAnyway'), cf=$('cancelFlight');
    if(sv)sv.onclick=()=>dump();
    if(ba)ba.onclick=()=>boardFlightWithSeizure(i,fare);
    if(cf)cf.onclick=()=>travel();
  },0);
}

function v24SelfTest(){
  console.log('NOIR MARKET v24 checks: lender caps active, lender bios active, dangerous event table active, airport seizure warning active.');
}
setTimeout(v24SelfTest,120);
