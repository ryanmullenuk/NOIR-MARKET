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
let s;
function blankInv(){return Object.fromEntries(drugs.map(d=>[d[0],0]))}
function blankSupply(){return Object.fromEntries(drugs.map(d=>[d[0],rand(0,1000)]))}
function baseState(){return{day:1,maxDay:30,cash:1000,bank:0,debt:0,health:100,heat:0,city:0,inv:blankInv(),supply:blankSupply(),prices:{},trends:{},owned:[],weapons:[],loans:[],rumour:null,notice:'You start in London with £1,000 cash, £0 in the bank and a clean slate.'}}
function totalSpace(){return 20+s.owned.reduce((a,n)=>a+(shopItems.find(i=>i[0]===n)?.[2]||0),0)}
function personSpace(){return 20+s.owned.reduce((a,n)=>a+((shopItems.find(i=>i[0]===n)?.[3]==='person')?(shopItems.find(i=>i[0]===n)[2]):0),0)}
function used(){return Object.values(s.inv).reduce((a,b)=>a+b,0)}
function rank(){let worth=s.cash+s.bank+Object.entries(s.inv).reduce((a,[k,v])=>a+v*(s.prices[k]||0),0)-s.debt; if(worth>500000)return'kingpin'; if(worth>150000)return'operator'; if(worth>50000)return'supplier'; if(worth>10000)return'runner'; return'wannabe'}
function genPrices(force){let target=force?.rumour?.drug; drugs.forEach(([name,,lo,hi])=>{let old=s.prices[name]||rand(lo,hi); let mult=rand(55,155)/100; if(force&&force.true&&name===target) mult=force.rumour.type==='scarce'?rand(170,320)/100:rand(20,55)/100; let p=Math.max(1,Math.round(((old+rand(lo,hi))/2)*mult)); s.trends[name]=p>=old; s.prices[name]=p; s.supply[name]=rand(0,1000); if(force&&force.true&&name===target&&force.rumour.type==='scarce')s.supply[name]=rand(0,90); if(force&&force.true&&name===target&&force.rumour.type==='abundant')s.supply[name]=rand(600,1000);});}
function cityText(){let city=places[s.city][0]; let lines={London:['club demand is moving through central London','airport heat is visible around Heathrow','street stock is unstable around main terminals'],Manchester:['student demand is active','north west routes are moving bulk supply','police attention is up around the city centre'],Birmingham:['Midlands supply lines are moving fast','BHX traffic is drawing attention','prices are volatile after a quiet week'],Liverpool:['port rumours are moving the market','nightlife demand is lifting weekend prices','cheap stock is appearing near the docks'],Leeds:['student demand is lifting party stock','supply is moving through west Yorkshire','street prices look soft today'],Newcastle:['nightlife demand is strong','scarce stock is moving north','airport movement is quiet'],Bristol:['south west supply is tightening','festival demand is moving prices','police heat is low for now'],Cardiff:['weekend demand is rising','stock looks thin across the centre','cheap supply is rumoured near the docks'],Glasgow:['city centre demand is volatile','bulk supply is moving through Scotland','police pressure is unpredictable'],Edinburgh:['tourist demand is lifting prices','festival rumours are affecting stock','street supply is tight'],Aberdeen:['remote supply makes prices unpredictable','oil money is lifting demand','stock may be scarce tomorrow'],Belfast:['port movement is changing supply','police heat is rising','market demand is uneven'],Dublin:['airport movement is busy','city centre demand is strong','rumours suggest supply pressure'],Cork:['port supply is inconsistent','prices may soften tomorrow','local demand is quiet']}[city]||['market intelligence is unclear']; return pick(lines);}
function newRumour(){let r={drug:pickDrug(),type:Math.random()<.5?'scarce':'abundant',accuracy:rand(15,85)}; s.rumour=r; return r}
function rumourHtml(){let r=s.rumour||newRumour(); return `<strong>Market note:</strong> ${r.drug} may be ${r.type==='scarce'?'scarce and more expensive':'abundant and cheaper'} tomorrow. Source confidence: <strong>${r.accuracy}%</strong>.`}
function draw(){let p=places[s.city]; $('dayCount').textContent=s.day; $('cash').textContent=money(s.cash); $('bank').textContent=money(s.bank); $('debt').textContent=money(s.debt); $('health').textContent=Math.round(s.health)+'%'; $('healthBar').style.width=Math.max(0,s.health)+'%'; $('city').textContent=p[0]; $('country').textContent=p[1]+' · '+p[3]; $('flag').textContent=p[2]; $('marketInfo').innerHTML=`${p[0]}: ${cityText()}.<br>${rumourHtml()}`; $('noticeText').textContent=s.notice; $('spaceLabel').textContent=`${used()}/${totalSpace()}`; $('statusLocation').textContent=p[0]+', '+p[1]; $('rank').textContent=rank(); $('space').textContent=`${used()}/${totalSpace()}`; $('heat').textContent=s.heat+'%';
$('marketTable').innerHTML='<div class="row header"><span>Drug</span><span>Qty</span><span>Price</span><span>Trend</span></div>'+drugs.map(([name,icon])=>`<div class="row"><span class="drug"><b>${icon}</b>${name}</span><span>${s.supply[name]}</span><span class="price ${s.trends[name]?'':'down'}">${money(s.prices[name]||0)}</span><span class="trend ${s.trends[name]?'up':'down'}">${s.trends[name]?'↑':'↓'}</span></div>`).join('');
let items=Object.entries(s.inv).filter(([,q])=>q>0); $('pocketTable').innerHTML='<div class="row header"><span>Drug</span><span>Qty</span><span>Value</span></div>'+(items.length?items.map(([k,v])=>`<div class="row"><span>${k}</span><span>${v}</span><span>${money(v*s.prices[k])}</span></div>`).join(''):`<div class="row"><span>Empty</span><span>0</span><span>${money(0)}</span></div>`);}

function healthBlock(){return `<div class="health-decision"><div><strong>Health</strong><span>${Math.round(s.health)}%</span></div><div class="health-track"><i style="width:${Math.max(0,s.health)}%"></i></div></div>`}
function activeDebtTotal(){return s.loans.reduce((a,l)=>a+l.repay,0)}
function payDebtButton(){return activeDebtTotal()>0?`<div class="debt-action"><button type="button" class="sell" id="modalPayDebt">PAY DEBT ${money(activeDebtTotal())}</button></div>`:''}
function bindModalDebt(){let b=$('modalPayDebt'); if(!b)return; b.onclick=()=>payAnyDebtFromModal();}
function modal(t,h){$('modalTitle').textContent=t; $('modalBody').innerHTML=h+payDebtButton(); if(!$('modal').open)$('modal').showModal(); setTimeout(bindModalDebt,0);}
function payAnyDebtFromModal(){let due=activeDebtTotal(); if(due<=0)return; let pay=Math.min(s.cash,due); if(pay<=0){modal('Debt Payment',`${healthBlock()}<p>You have no cash available to pay the debt.</p>`); return;} s.cash-=pay; s.debt=Math.max(0,s.debt-pay); for(let i=s.loans.length-1;i>=0;i--){let l=s.loans[i]; let x=Math.min(pay,l.repay); l.repay-=x; pay-=x; if(l.repay<=0)s.loans.splice(i,1); if(pay<=0)break;} save(); draw(); modal('Debt Payment',`${healthBlock()}<p>You paid ${money(Math.min(due,activeDebtTotal()+Math.min(s.cash,due)))} towards your debt.</p><p>Remaining debt: <strong>${money(activeDebtTotal())}</strong>.</p><button type="button" id="continueEvent">Continue</button>`); setTimeout(()=>{let c=$('continueEvent'); if(c)c.onclick=()=>done();},0)}

function newGame(showLoans=false){s=baseState(); genPrices(); newRumour(); save(); draw(); if(showLoans) showLoanIntro();}
function showLoanIntro(){modal('Shady Loans',`<p class="subtle">You can start clean, but debt gives you buying power. These terms are deliberately bad and missed payments will hurt.</p><div class="loan-list">${lenders.map((l,i)=>`<button type="button" data-loan="${i}"><strong>${l[0]}</strong><br>up to ${money(l[1])} · ${l[3]*100}% interest · due in ${l[2]} days</button>`).join('')}</div><button type="button" id="skipLoan">Start without debt</button>`); setTimeout(()=>{document.querySelectorAll('[data-loan]').forEach(b=>b.onclick=()=>chooseLoan(+b.dataset.loan)); $('skipLoan').onclick=()=>$('modal').close();},0)}
function chooseLoan(i){let l=lenders[i]; modal(l[0],`<p>Borrow up to ${money(l[1])}. Repay ${l[3]*100}% interest by day ${s.day+l[2]}.</p><input id="loanAmount" type="number" min="1" max="${l[1]}" placeholder="Amount"><button type="button" class="sell" id="confirmLoan">ARE YOU SURE?</button>`); setTimeout(()=>$('confirmLoan').onclick=()=>{let amt=Math.min(+$('loanAmount').value||0,l[1]); if(!amt)return; let repay=Math.round(amt*(1+l[3])); s.cash+=amt; s.debt+=repay; s.loans.push({name:l[0],due:s.day+l[2],repay}); s.notice=`Borrowed ${money(amt)} from ${l[0]}. ${money(repay)} due day ${s.day+l[2]}.`; $('modal').close(); save(); draw();},0)}
function transact(type){modal(type,`<select id="drugSel">${drugs.map(d=>`<option>${d[0]}</option>`).join('')}</select><input id="qtySel" type="number" min="1" placeholder="Quantity"><button type="button" class="${type==='Buy'?'buy':'sell'}" id="doTrans">${type}</button>`); setTimeout(()=>$('doTrans').onclick=()=>{let d=$('drugSel').value,q=+$('qtySel').value||0;if(type==='Buy'){q=Math.min(q,totalSpace()-used(),Math.floor(s.cash/s.prices[d]),s.supply[d]); if(q<1)return; s.cash-=q*s.prices[d]; s.inv[d]+=q; s.supply[d]-=q; s.notice=`Bought ${q} units of ${d}.`;}else{q=Math.min(q,s.inv[d]); if(q<1)return; s.cash+=q*s.prices[d]; s.inv[d]-=q; s.notice=`Sold ${q} units of ${d}.`;} $('modal').close(); save(); draw();},0)}
function bank(){let openLoans=s.loans.length?s.loans.map(l=>`<div class="loan-row"><div><span>${l.name}</span><strong>${money(l.repay)} due day ${l.due}</strong></div><button type="button" data-payloan="${l.name}|${l.due}|${l.repay}">Pay</button></div>`).join(''):'<p class="subtle">No active loans.</p>'; modal('Bank',`<p class="subtle">Bank balance only changes when you deposit or withdraw.</p><input id="amount" type="number" placeholder="Amount"><button type="button" id="deposit">Deposit</button><button type="button" id="withdraw">Withdraw</button><button type="button" id="payDebt">Pay General Debt</button><h4>Loans</h4>${openLoans}<div class="loan-list">${lenders.map((l,i)=>`<button type="button" data-loan="${i}"><strong>${l[0]}</strong><br>Borrow up to ${money(l[1])} · ${l[3]*100}% interest · due in ${l[2]} days</button>`).join('')}</div>`); setTimeout(()=>{let amt=()=>+$('amount').value||0; $('deposit').onclick=()=>{let a=Math.min(amt(),s.cash);s.cash-=a;s.bank+=a;done()}; $('withdraw').onclick=()=>{let a=Math.min(amt(),s.bank);s.bank-=a;s.cash+=a;done()}; $('payDebt').onclick=()=>{let a=Math.min(amt(),s.cash,s.debt);s.cash-=a;s.debt-=a;done()}; document.querySelectorAll('[data-loan]').forEach(b=>b.onclick=()=>chooseLoan(+b.dataset.loan)); document.querySelectorAll('[data-payloan]').forEach(b=>b.onclick=()=>paySpecificLoan(b.dataset.payloan));},0)}

function paySpecificLoan(token){let [name,due,repay]=token.split('|'), amount=+repay; if(s.cash<amount){s.notice=`You need ${money(amount)} cash to clear ${name}.`; done(); return;} let idx=s.loans.findIndex(l=>l.name===name&&String(l.due)===String(due)&&String(l.repay)===String(repay)); if(idx<0)return; s.cash-=amount; s.debt=Math.max(0,s.debt-amount); s.notice=`Paid ${name}. Loan cleared.`; s.loans.splice(idx,1); done();}
function shop(){modal('Shop',`<h4>Storage</h4><p class="muted">Storage upgrades add capacity to your total storage.</p>${shopItems.map((it,i)=>`<button type="button" data-shop="${i}" ${s.owned.includes(it[0])?'disabled':''}><strong>${it[0]}</strong><br>${money(it[1])} · +${it[2]} slots</button>`).join('')}<h4>Weapons</h4><p class="muted">Weapons improve fight options. Flying still carries risk and may cost you weapons.</p>${weapons.map((w,i)=>`<button type="button" data-weapon="${i}"><strong>${w.name}</strong><br>${money(w.price)} · ${w.damage}<br><span>${w.notes}</span></button>`).join('')}<h4>Recovery</h4><p class="muted">Use hospital treatment to restore health after trouble.</p>${hospitalTreatments.map((h,i)=>`<button type="button" data-hospital="${i}"><strong>${h[0]}</strong><br>${money(h[1])}</button>`).join('')}`); setTimeout(()=>{document.querySelectorAll('[data-shop]').forEach(b=>b.onclick=()=>{let it=shopItems[+b.dataset.shop]; if(s.cash<it[1])return; s.cash-=it[1]; s.owned.push(it[0]); s.notice=`Bought ${it[0]}. Storage increased by ${it[2]} slots.`; done();}); document.querySelectorAll('[data-weapon]').forEach(b=>b.onclick=()=>{let w=weapons[+b.dataset.weapon]; if(s.cash<w.price)return; s.cash-=w.price; s.weapons.push(w.name); s.notice=`Bought ${w.name}.`; done();}); document.querySelectorAll('[data-hospital]').forEach(b=>b.onclick=()=>buyHospital(+b.dataset.hospital));},0)}
function buyHospital(i){let h=hospitalTreatments[i]; if(!h||s.cash<h[1]||s.health>=100)return; s.cash-=h[1]; s.health=h[2]===100?100:Math.min(100,s.health+h[2]); s.notice=`Hospital treatment purchased: ${h[0]}.`; done();}
function dump(){let items=Object.entries(s.inv).filter(([,q])=>q>0); modal('Dump Stock',items.length?items.map(([k])=>`<button type="button" data-dump="${k}">${k}</button>`).join(''):'<p>Your storage is empty.</p>'); setTimeout(()=>document.querySelectorAll('[data-dump]').forEach(b=>b.onclick=()=>{s.notice=`Dumped ${s.inv[b.dataset.dump]} units of ${b.dataset.dump}.`;s.inv[b.dataset.dump]=0;done();}),0)}
function done(){if($('modal').open)$('modal').close(); save(); draw()}
function stay(){nextDay(`You stay in ${places[s.city][0]}.`,true)}
function travel(){modal('Travel',`<p class="subtle">Select a UK or Ireland city. Weapons are lost before boarding.</p><div class="travel-list">${places.map((p,i)=>`<button type="button" data-city="${i}">${p[2]} <strong>${p[0]}</strong> · ${p[1]} · ${p[3]}</button>`).join('')}</div>`); setTimeout(()=>document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{s.city=+b.dataset.city; s.weapons=[]; $('modal').close(); nextDay(`You land in ${places[s.city][0]}. Weapons were lost before boarding.`,false);}),0)}
function debtReminderHtml(){if(!s.loans.length)return '<p class="subtle">No active loan debt.</p>'; return '<div class="debt-reminder"><strong>DEBT REMINDER</strong>'+s.loans.map(l=>{let days=l.due-s.day; let dueText=days>0?`due in ${days} day${days===1?'':'s'}`:'DUE NOW'; return `<div><span>${l.name}</span><b>${money(l.repay)}</b><em>${dueText}</em></div>`}).join('')+'</div>'}
function nextDay(base,showRumour){let old={rumour:s.rumour,true:Math.random()*100<s.rumour.accuracy}; s.day++; s.debt=Math.round(s.debt*1.02); s.heat=Math.min(100,Math.max(0,s.heat+rand(-8,13))); genPrices(old); newRumour(); randomEvent(base); if(s.day>s.maxDay)return endGame(); save(); draw(); let rumourBlock=showRumour?`<h4>Rumour Result</h4><p><strong>${old.true?'TRUE':'FALSE'}</strong> · ${old.rumour.drug} was tipped to become ${old.rumour.type==='scarce'?'scarce and more expensive':'abundant and cheaper'}.</p><p>Source confidence was ${old.rumour.accuracy}%.</p>`:''; modal(showRumour?'Stay Here':'Travel Result',`<p>${s.notice}</p>${rumourBlock}<h4>Loan Status</h4>${debtReminderHtml()}<button type="button" id="continueEvent">Continue</button>`); setTimeout(()=>$('continueEvent').onclick=()=>{$('modal').close();handleDueLoans();},0);}
function handleDueLoans(){let due=s.loans.filter(l=>l.due<=s.day); if(!due.length){maybeFight();return;} modal('DEBT DUE',`<p class="subtle">Your lender wants payment today. Pay it now or the balance rises by 25%, your health drops by 15%, and the same debt is chased again tomorrow.</p>${due.map((l,i)=>`<div class="loan-row"><div><span>${l.name}</span><strong>${money(l.repay)} due now</strong></div><button type="button" data-duepay="${i}">PAY OFF DEBT</button></div>`).join('')}<button type="button" class="sell" id="missDebt">Do not pay</button>`); setTimeout(()=>{document.querySelectorAll('[data-duepay]').forEach(b=>b.onclick=()=>payDueLoan(due[+b.dataset.duepay])); $('missDebt').onclick=missDueLoans;},0)}
function payDueLoan(loan){if(s.cash<loan.repay){s.notice=`You need ${money(loan.repay)} cash to pay ${loan.name}.`; save(); draw(); handleDueLoans(); return;} let idx=s.loans.indexOf(loan); if(idx<0)return; s.cash-=loan.repay; s.debt=Math.max(0,s.debt-loan.repay); s.notice=`Paid ${loan.name}. Loan cleared.`; s.loans.splice(idx,1); save(); draw(); $('modal').close(); handleDueLoans();}
function missDueLoans(){let due=s.loans.filter(l=>l.due<=s.day); let added=0; due.forEach(l=>{let old=l.repay; l.repay=Math.round(l.repay*1.25); added+=l.repay-old; l.due=s.day+1;}); s.debt+=added; s.health=Math.max(1,s.health-15); s.heat=Math.min(100,s.heat+10); s.notice=`Debt unpaid. You are roughed up, health drops 15%, and the debt increases by ${money(added)}.`; save(); draw(); $('modal').close(); maybeFight();}
function checkLoans(){}
function takeDrugs(maxPct, personOnly=false){let capacity=personOnly?personSpace():totalSpace(), ratio=Math.min(1, capacity/Math.max(1,totalSpace())), stolen=[]; Object.entries(s.inv).forEach(([k,v])=>{let q=Math.floor(v*(rand(10,maxPct)/100)*(personOnly?ratio:1)); if(q>0){s.inv[k]-=q; stolen.push(`${q} ${k}`)}}); return stolen;}
function randomEvent(base){let roll=Math.random(),d=pickDrug(); s.notice=base+' '; if(roll<.14){let pct=rand(10,65),lost=Math.floor(s.cash*pct/100),stolen=takeDrugs(35); s.cash-=lost; s.health=Math.max(5,s.health-rand(3,15)); s.notice+=`You are mugged. ${pct}% of your cash is taken (${money(lost)}). ${stolen.length?'Stock stolen: '+stolen.join(', ')+'.':'No stock was taken.'}`;} else if(roll<.24){let q=Math.min(rand(5,80),totalSpace()-used()); if(q>0)s.inv[d]+=q; s.notice+=`A contact gives you ${q} units of ${d}.`;} else if(roll<.36){s.prices[d]*=rand(2,4); s.notice+=`${d} is drying up. Prices spike.`;} else if(roll<.48){s.prices[d]=Math.max(1,Math.round(s.prices[d]*.35)); s.supply[d]+=rand(100,500); s.notice+=`The market is flooded with ${d}. Prices collapse.`;} else if(roll<.60){s.heat=Math.min(100,s.heat+rand(10,25)); s.notice+='Police are visible near transport hubs. Heat rises.';} else s.notice+='A quiet day. The market holds.';}
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
    s.notice=msg; s.currentFight=null; return fightResult('Surrender Outcome',msg,false);
  }
  if(choice==='run'){
    let chance=Math.min(.98,.50+(w?w.escape:0)), ok=Math.random()<chance;
    if(ok){msg=`You run and lose them.${w?' Your '+w.name+' gives you enough space to get away.':''}`; s.heat=Math.min(100,s.heat+rand(1,6)+(w?w.heat:0)); consumeWeapon(w); s.currentFight=null; s.notice=msg; return fightResult('Run Outcome',msg,false);}
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
      s.heat=Math.min(100,s.heat+rand(5,15)+(w?w.heat:0)); consumeWeapon(w); s.currentFight=null; s.notice=msg; return fightResult('Fight Outcome',msg,false);
    }
    let reduction=w?Math.min(.85,w.escape):0;
    let hp=rand(Math.max(2,Math.floor((f.damage*(1-reduction))/2)),Math.max(3,Math.round(f.damage*(1-reduction))));
    s.health=Math.max(0,s.health-hp);
    consumeWeapon(w);
    msg=`You fight back${w?' with your '+w.name:''}, but they hit you. Health drops ${hp}%.`;
    if(s.health<=0){s.notice='You died in the fight.'; s.currentFight=null; return endGame();}
    if(f.round < f.maxRounds && Math.random()<.65){f.round++; s.notice=msg; return fightResult('Fight Outcome',msg,true);}
    msg+=' You break away and lose them.'; s.currentFight=null; s.notice=msg; return fightResult('Fight Outcome',msg,false);
  }
}
function endGame(){let score=s.cash+s.bank+Object.entries(s.inv).reduce((a,[k,v])=>a+v*s.prices[k],0)-s.debt; modal('Game Over',`<p>Final net worth: <strong>${money(score)}</strong></p><p>Rank: <strong>${rank()}</strong></p><button type="button" id="again">New Game</button>`); setTimeout(()=>$('again').onclick=()=>{newGame();},0)}
function save(){localStorage.setItem('noir_market_v9',JSON.stringify(s))} function load(){let x=localStorage.getItem('noir_market_v9')||localStorage.getItem('noir_market_v6')||localStorage.getItem('noir_market_v5')||localStorage.getItem('noir_market_v4'); if(x){s=JSON.parse(x);draw();return false;} newGame(false);return true;}
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
function setupTilt(){let splash=$('splash');function setTilt(x,y){let px=Math.max(-18,Math.min(18,x*.8)),py=Math.max(-9,Math.min(9,y*.35));splash.style.setProperty('--tilt-x',(x*.55)+'deg');splash.style.setProperty('--tilt-y',(-y*.35)+'deg');splash.style.setProperty('--powder-x',px+'px');splash.style.setProperty('--powder-y',py+'px');splash.style.setProperty('--powder-r',(x*.35)+'deg')} window.addEventListener('deviceorientation',e=>{setTilt(e.gamma||0,e.beta||0)},true); window.addEventListener('mousemove',e=>{let x=(e.clientX/innerWidth-.5)*18,y=(e.clientY/innerHeight-.5)*18;setTilt(x,y)})}
$('buyBtn').onclick=()=>transact('Buy'); $('sellBtn').onclick=()=>transact('Sell'); $('stayBtn').onclick=stay; $('travelBtn').onclick=travel; $('bankBtn').onclick=bank; $('dumpBtn').onclick=dump; $('shopBtn').onclick=shop; $('newGameBtn').onclick=()=>newGame(true); let firstFreshGame=false; $('splash').onclick=()=>{$('splash').classList.add('hide'); setTimeout(()=>{if(firstFreshGame)showLoanIntro();},460)}; particles(); setupTilt(); firstFreshGame=load();
