const journey = document.querySelector('#return');
const showroom = document.querySelector('#showroom');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = value => Math.max(0, Math.min(1, value));
let frame = 0;
function render() {
 frame = 0;
 document.body.dataset.navCompact = String(journey.getBoundingClientRect().top < -70);
 const travel = Math.max(1, journey.offsetHeight - showroom.offsetHeight);
 const p = reduced.matches ? 0 : clamp(-journey.getBoundingClientRect().top / travel);
 showroom.style.setProperty('--intro-opacity', p < .25 ? '1' : '0');
 showroom.style.setProperty('--return-opacity', p >= .25 ? '1' : '0');
 showroom.style.setProperty('--return-y', p >= .25 ? '0px' : '20px');
 document.querySelector('#return-heading').setAttribute('aria-hidden', String(p < .25));
 document.querySelector('#hero-heading').setAttribute('aria-hidden', String(p >= .25));
 window.dispatchEvent(new CustomEvent('sunday-scroll', {detail:p}));
}
function schedule() { if (!frame) frame = requestAnimationFrame(render); }
window.addEventListener('scroll', schedule, {passive:true});
window.addEventListener('resize', schedule);
reduced.addEventListener('change', schedule);
const details = [
 {image:'porsche-light',alt:'Close-up of the Porsche’s rounded headlamp and claret bodywork.',label:'LIGHT & FORM',text:'The round headlamp. The rising wing. A silhouette with a language all its own.',word:'Closer.'},
 {image:'porsche-rear',alt:'The Porsche’s rear quarter, curved roofline, and red tail lamps.',label:'AN UNMISTAKABLE LINE',text:'A low roof. A broad shoulder. Curves that make a lasting impression from any angle.',word:'Timeless.'},
 {image:'porsche-wheel',alt:'The Porsche front wheel, sculpted spokes, and brake assembly.',label:'WHERE IT ALL CONNECTS',text:'Metal, rubber, and the road. Every detail belongs to the same feeling.',word:'Driven.'}
];
function showImage(image, detail) {
 image.onload = () => {
  if (!reduced.matches) image.animate([{opacity:.25,transform:'scale(1.065)'},{opacity:1,transform:'scale(1.025)'}], {duration:600,easing:'cubic-bezier(.16,1,.3,1)'});
 };
 image.src = './assets/' + detail.image + '.webp'; image.alt = detail.alt;
}
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
 const detail = details[Number(button.dataset.detail)];
 document.querySelectorAll('[data-detail]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 showImage(document.querySelector('#detail-image'), detail);
 document.querySelector('#detail-label').textContent = detail.label;
 document.querySelector('#detail-text').textContent = detail.text;
 document.querySelector('.gallery-word').textContent = detail.word;
}));
const services = [
 {category:'PAINT / SURFACES / DETAIL',description:'Preserve what makes it unmistakable. Bring depth back to the paint, clarity to the lights, and care to every surface.',scope:'Body & character',detail:0},
 {category:'MATERIALS / COMFORT / CHARACTER',description:'Start with how it feels. Choose materials, finishes, and details that make the car unmistakably yours, without losing its character.',scope:'The world inside',detail:1,image:'leather-detail',alt:'A material study of oxblood leather, double stitching, and a perforated seat bolster.'},
 {category:'CARE / CONDITION / CONFIDENCE',description:'A car should feel as good on the road as it looks standing still. Begin with its condition, its history, and the miles you have in mind.',scope:'Back to the road',detail:2}
];
const serviceButtons = [...document.querySelectorAll('[data-service]')];
function selectService(index, focus = false) {
 const service = services[index];
 serviceButtons.forEach((button, i) => { button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
 document.querySelector('.atelier-section').dataset.active = String(index);
 document.querySelector('#care-panel').setAttribute('aria-labelledby', 'care-tab-' + index);
 document.querySelector('#care-category').textContent = service.category;
 document.querySelector('#care-description').textContent = service.description;
 document.querySelector('#care-plan').dataset.plan = service.scope;
 showImage(document.querySelector('#care-image'), service.image ? service : details[service.detail]);
 if (focus) serviceButtons[index].focus();
}
serviceButtons.forEach((button, index) => {
 button.addEventListener('click', () => selectService(index));
 button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') selectService(index); });
 button.addEventListener('keydown', event => {
  const directions = {ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1};
  if (event.key in directions) { event.preventDefault(); selectService((index + directions[event.key] + services.length) % services.length, true); }
  if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); selectService(event.key === 'Home' ? 0 : services.length - 1, true); }
 });
});
const dialog=document.querySelector('#project-dialog');
function openPlanner(scope){
 if(scope)document.querySelectorAll('input[name=scope]').forEach(input=>input.checked=input.value===scope);
 dialog.showModal();
}
document.querySelectorAll('[data-open-brief]').forEach(button=>button.addEventListener('click',()=>openPlanner()));
document.querySelectorAll('[data-plan]').forEach(button=>button.addEventListener('click',()=>openPlanner(button.dataset.plan)));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
document.querySelector('#project-form').addEventListener('submit',event=>{
 event.preventDefault();const data=new FormData(event.currentTarget);const scopes=data.getAll('scope');
 if(!scopes.length){document.querySelector('#project-status').textContent='Choose at least one area to explore.';return;}
 const text=`SUNDAY — RESTORATION BRIEF\n\nName: ${data.get('name')}\nCar: ${data.get('car')}\nAreas to explore: ${scopes.join(', ')}\n\nThe story so far\n${data.get('story')}\n\nPrepared locally. No enquiry or booking has been submitted.\n`;
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='sunday-restoration-brief.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.querySelector('#project-status').textContent='Your restoration brief is ready to keep. Nothing has been sent.';
});
schedule();

const sectionLinks = [...document.querySelectorAll('.nav nav a')];
const navObserver = new IntersectionObserver(entries => {
 for (const entry of entries) {
  if (!entry.isIntersecting) continue;
  sectionLinks.forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('is-active', active); if (active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
 }
}, {rootMargin:'-10% 0px -55% 0px',threshold:0});
['return','craft','approach'].forEach(id => navObserver.observe(document.getElementById(id)));

const warmServiceImages = () => ['porsche-rear','porsche-wheel','leather-detail'].forEach(name => { const image = new Image(); image.src = './assets/' + name + '.webp'; });
if ('requestIdleCallback' in window) requestIdleCallback(warmServiceImages); else setTimeout(warmServiceImages,1500);
