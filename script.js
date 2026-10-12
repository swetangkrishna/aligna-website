const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

const cursor=document.getElementById('cursorLight');
window.addEventListener('pointermove',e=>{
  if(!cursor)return;
  cursor.style.left=e.clientX+'px';
  cursor.style.top=e.clientY+'px';
});

document.querySelectorAll('.liquid-card,.glass-shell').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width)*100;
    const y=((e.clientY-r.top)/r.height)*100;
    card.style.setProperty('--mx',x+'%');
    card.style.setProperty('--my',y+'%');
  });
});

document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('pointermove',e=>{
    const r=el.getBoundingClientRect();
    const x=e.clientX-(r.left+r.width/2);
    const y=e.clientY-(r.top+r.height/2);
    el.style.transform=`translate(${x*.08}px,${y*.08}px)`;
  });
  el.addEventListener('pointerleave',()=>el.style.transform='');
});

const modes={
  recovery:{title:'Ready when<br>you are.',score:'82',meter:'82%',insight:'Push volume adjusted −8%',reason:'Chest recovery is still in progress.'},
  wearable:{title:'Signals become<br>context.',score:'78',meter:'78',insight:'Heart rate stream connected',reason:'Live watch data is reaching the phone companion.'},
  ai:{title:'Context in.<br>Action out.',score:'91',meter:'91%',insight:'Today’s plan rebalanced',reason:'Recent load, recovery and goals changed the recommendation.'}
};
const title=document.getElementById('modeTitle');
const score=document.getElementById('modeScore');
const meterText=document.getElementById('meterText');
const insight=document.getElementById('modeInsight');
const reason=document.getElementById('modeReason');
document.querySelectorAll('.mode-switch button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.mode-switch button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const m=modes[btn.dataset.mode];
    if(title)title.innerHTML=m.title;
    if(score)score.textContent=m.score;
    if(meterText)meterText.textContent=m.meter;
    if(insight)insight.textContent=m.insight;
    if(reason)reason.textContent=m.reason;
  });
});

const heroBpm=document.getElementById('heroBpm');
const signalBpm=document.getElementById('signalBpm');
const telemetryHr=document.getElementById('telemetryHr');
const accX=document.getElementById('accX');
const accY=document.getElementById('accY');
const accZ=document.getElementById('accZ');
setInterval(()=>{
  const bpm=76+Math.round(Math.random()*5);
  if(heroBpm)heroBpm.textContent=bpm;
  if(signalBpm)signalBpm.textContent=bpm;
  if(telemetryHr)telemetryHr.textContent=bpm;
  if(accX)accX.textContent='+'+(0.17+Math.random()*.11).toFixed(2);
  if(accY)accY.textContent='−'+(0.03+Math.random()*.08).toFixed(2);
  if(accZ)accZ.textContent='+'+(9.61+Math.random()*.14).toFixed(2);
},1600);

if(window.matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.feature,.problem-cards article,.signal-console,.fundraise-card').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(1200px) rotateX(${-y*1.5}deg) rotateY(${x*1.8}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
}
