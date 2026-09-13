const projects = [
  {name:'Counterform',type:'Identity / Culture',image:'./assets/chrome-knot.webp',description:'A cultural identity built around productive tension. An impossible chrome form becomes a flexible symbol: sculptural, adaptable, and unmistakably physical. Restrained typography gives the object room to speak.'},
  {name:'Out of phase',type:'Campaign / Art direction',image:'./assets/cobalt-study.webp',description:'A campaign about the moment a familiar pattern breaks. A cobalt shell opens around a single bright point, giving the identity a language of reveal, contrast, and controlled disruption.'},
  {name:'New angles',type:'Editorial / Digital',image:'./assets/paper-study.webp',description:'An editorial world shaped by folds, shadows, and a change in perspective. Deep burgundy paper and polished metal bring a tactile discipline to a digital-first collection.'}
];
const hero=document.querySelector('#hero');
const work=document.querySelector('#work');
const stage=document.querySelector('.work-stage');
const cards=[...document.querySelectorAll('[data-card]')];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let frame=0;
let current=0;
let pointerX=0;
let pointerY=0;
let paused=false;
const clamp=x=>Math.min(1,Math.max(0,x));
function renderGallery(){
  const travel=Math.max(1,work.offsetHeight-stage.offsetHeight);
  const progress=clamp(-work.getBoundingClientRect().top/travel);
  const phase=progress*2;
  current=Math.round(phase);
  cards.forEach((card,index)=>{
    const distance=index-phase;
    const x=distance<0?distance*260:distance*95;
    const y=distance<0?distance*75:distance*33;
    const rotation=distance*11;
    card.style.transform=`translate3d(${x}px,${y}px,${-Math.abs(distance)*120}px) rotate(${rotation}deg)`;
    card.style.zIndex=String(30-Math.round(Math.abs(distance)*10));
    card.style.opacity=String(Math.max(.22,1-Math.abs(distance)*.28));
    card.inert=!reduced.matches&&index!==current;
    card.style.pointerEvents=reduced.matches||index===current?'auto':'none';
  });
  document.querySelectorAll('[data-project-index]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.projectIndex)===current)));
  document.querySelector('#project-caption').textContent=`0${current+1} / ${projects[current].name.toUpperCase()} — ${projects[current].type.toUpperCase()}`;
  stage.style.setProperty('--progress',`${progress*100}%`);
}
function render(){
  frame=0;
  hero.style.setProperty('--hero-p',String(clamp(-hero.getBoundingClientRect().top/hero.offsetHeight)));
  if(!paused&&!reduced.matches){hero.style.setProperty('--mx',`${pointerX}px`);hero.style.setProperty('--my',`${pointerY}px`);}
  renderGallery();
}
function schedule(){if(!frame)frame=requestAnimationFrame(render);}
window.addEventListener('scroll',schedule,{passive:true});
window.addEventListener('resize',schedule);
reduced.addEventListener('change',schedule);
hero.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=hero.getBoundingClientRect();pointerX=(e.clientX/r.width-.5)*20;pointerY=((e.clientY-r.top)/r.height-.5)*14;schedule();});
hero.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;schedule();});
document.querySelectorAll('[data-project-index]').forEach(button=>button.addEventListener('click',()=>{
  const top=work.getBoundingClientRect().top+scrollY;
  const travel=work.offsetHeight-stage.offsetHeight;
  window.scrollTo({top:top+travel*Number(button.dataset.projectIndex)/2,behavior:reduced.matches?'auto':'smooth'});
}));
document.querySelector('#motion-toggle').addEventListener('click',e=>{paused=!paused;document.body.classList.toggle('paused',paused);e.currentTarget.setAttribute('aria-pressed',String(paused));e.currentTarget.textContent=paused?'Resume ambient ▷':'Pause ambient Ⅱ';});
const caseDialog=document.querySelector('#case-dialog');
let caseIndex=0;
function showCase(index){
  caseIndex=index;const p=projects[index];
  document.querySelector('#case-title').textContent=p.name;
  document.querySelector('#case-type').textContent=p.type.toUpperCase();
  document.querySelector('#case-description').textContent=p.description;
  document.querySelector('#case-image').src=p.image;
  document.querySelector('#case-image').alt=`${p.name} — original art direction study`;
  if(!caseDialog.open)caseDialog.showModal();
  caseDialog.scrollTop=0;
}
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>showCase(Number(button.dataset.case))));
document.querySelector('#next-case').addEventListener('click',()=>showCase((caseIndex+1)%projects.length));
const briefDialog=document.querySelector('#brief-dialog');
document.querySelectorAll('[data-open-brief]').forEach(button=>button.addEventListener('click',()=>briefDialog.showModal()));
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}));
document.querySelector('#brief-form').addEventListener('submit',event=>{
  event.preventDefault();const data=new FormData(event.currentTarget);
  const text=`ROOK — PROJECT BRIEF\n\nName: ${data.get('name')}\nFocus: ${data.get('scope')}\n\nThe idea\n${data.get('idea')}\n\nPrepared locally. This brief has not been sent.\n`;
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download='rook-project-brief.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  document.querySelector('#brief-status').textContent='Your brief is ready. The download stays on your device.';
});
schedule();
