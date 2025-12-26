const steps=document.querySelectorAll('.quiz-step');
const bar=document.getElementById('progressIndicator');
const lbl=document.getElementById('progressLabel');

let i=0;

const upd=()=>{const p=Math.round((i+1)/steps.length*100);bar.style.width=p+'%';lbl.textContent=p+'%'};

const go=n=>{steps.forEach((s,x)=>s.classList.toggle('active',x===n));i=n;upd()};

document.querySelectorAll('.option-btn').forEach(b=>b.onclick=_=>{const t=b.dataset.target;t==='complete'?location.href='https://www.google.com':go(document.getElementById(t).dataset.index-1)});

document.getElementById('resetBtn').onclick=_=>go(0);
document.getElementById('supportBtn').onclick=_=>alert('Contact support for assistance.');

upd();