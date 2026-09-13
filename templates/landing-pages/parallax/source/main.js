import * as THREE from 'three';
const journey = document.querySelector('.journey');
const scene = document.querySelector('.scene');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = n => Math.max(0, Math.min(1, n));
const smooth = (a,b,n) => { const p = clamp((n-a)/(b-a)); return p*p*(3-2*p); };
const chapterPositions = [0,.27,.53,.87];
const chapterNames = ['THE APPROACH','THE PHOTON RING','THE EVENT HORIZON','BEYOND THE FAMILIAR'];
let paused = reduced.matches, progress = 0, lastProgress = -1, width = innerWidth, height = innerHeight;
let pointerX = 0, pointerY = 0, time = 0, lastTime = 0;
const motionButton = document.querySelector('#motion');
function updateMotion() { motionButton.textContent = paused ? 'Resume motion ▷' : 'Pause motion Ⅱ'; motionButton.setAttribute('aria-pressed',String(paused)); }
motionButton.onclick = () => { paused = !paused; updateMotion(); };
reduced.addEventListener('change', () => { paused = reduced.matches; updateMotion(); });
updateMotion();
function goToChapter(index) {
 const distance = journey.offsetHeight - scene.offsetHeight;
 const top = journey.getBoundingClientRect().top + scrollY;
 window.scrollTo({top:top+distance*chapterPositions[index],behavior:reduced.matches?'instant':'smooth'});
}
document.querySelectorAll('[data-chapter]').forEach(button => button.addEventListener('click', event => { event.preventDefault(); goToChapter(Number(button.dataset.chapter)); }));
document.querySelector('.skip').onclick = event => { event.preventDefault(); goToChapter(3); };
window.addEventListener('pointermove', event => { pointerX = event.clientX/innerWidth-.5; pointerY = event.clientY/innerHeight-.5; }, {passive:true});

let renderer, material, renderScene, renderCamera;
try {
 renderer = new THREE.WebGLRenderer({canvas:document.querySelector('#space'),alpha:true,antialias:false,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
 const uniforms = {uTexture:{value:null},uAspect:{value:1},uImageAspect:{value:1672/941},uProgress:{value:0},uTime:{value:0},uPointer:{value:new THREE.Vector2()}};
 material = new THREE.ShaderMaterial({uniforms,transparent:true,depthTest:false,depthWrite:false,
 vertexShader:`varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
 fragmentShader:`precision highp float;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uAspect,uImageAspect,uProgress,uTime;
uniform vec2 uPointer;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){
 float flight=smoothstep(.015,.76,uProgress);
 float zoom=exp(flight*2.9);
 vec2 focal=vec2(.508,.46);
 vec2 base=(vUv-.5)*vec2(uAspect/uImageAspect,1.)+.5;
 vec2 relative=base-focal;
 float roll=sin(flight*3.14159)*.025;
 relative=mat2(cos(roll),-sin(roll),sin(roll),cos(roll))*relative;
 vec2 uv=focal+relative/zoom;
 float ringDistance=length((uv-vec2(.51,.36))*vec2(uImageAspect,1.));
 float distortion=sin(uTime*.25+ringDistance*45.)*.0006*(1.-flight);
 uv+=normalize(uv-vec2(.51,.36)+.0001)*distortion;
 uv+=uPointer*.003*(1.-flight);
 vec3 color=texture2D(uTexture,clamp(uv,.001,.999)).rgb;
 float crossing=smoothstep(.68,.80,uProgress);
 color=mix(color,vec3(.008,.011,.016),crossing);
 float vignette=1.-smoothstep(.25,.78,length(vUv-.5))*.25;
 color*=vignette;
 color+=(hash(vUv+fract(uTime)*.001)-.5)*.002;
 gl_FragColor=vec4(color,1.);
}
`});
 const world = new THREE.Scene(); const camera = new THREE.Camera();
 world.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),material));
 new THREE.TextureLoader().load('./assets/blackhole.webp',texture=>{texture.colorSpace=THREE.NoColorSpace;uniforms.uTexture.value=texture;document.querySelector('#space').dataset.ready='true'; scene.dataset.renderMode='webgl';},undefined,()=>{renderer=null;});
 renderScene=world; renderCamera=camera;
} catch (error) { renderer = null; scene.dataset.renderMode='fallback'; console.error('The interactive scene could not initialize.',error); }
const orbitCanvas = document.querySelector('#orbits');
const ctx = orbitCanvas.getContext('2d');
function resize() {
 width=scene.clientWidth; height=scene.clientHeight;
 orbitCanvas.width=width;orbitCanvas.height=height;
 if(renderer){renderer.setSize(width,height);material.uniforms.uAspect.value=width/height;}
}
new ResizeObserver(resize).observe(scene);resize();
function updateStory(p){
 scene.style.setProperty('--progress',p.toFixed(4));
 scene.style.setProperty('--opening',(1-smooth(.03,.2,p)).toFixed(4));
 scene.style.setProperty('--passage',(smooth(.2,.28,p)*(1-smooth(.4,.49,p))).toFixed(4));
 scene.style.setProperty('--end',smooth(.5,.72,p).toFixed(4));
 scene.style.setProperty('--field',smooth(.46,.56,p).toFixed(4));
 scene.style.setProperty('--statement',smooth(.69,.82,p).toFixed(4));
 const final=p>.7;
 document.querySelector('.opening').setAttribute('aria-hidden',String(p>.2));
 document.querySelector('.perspective').setAttribute('aria-hidden',String(!final));
 document.querySelector('.perspective').inert=!final;
 document.querySelector('.word-field').setAttribute('aria-hidden',String(p<.48));
 document.querySelector('.word-field').inert=p<.48;
 const index=Math.min(3,Math.floor(p*4));
 document.querySelectorAll('.journey-controls [data-chapter]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.chapter)===index)));
 document.querySelector('#chapter-name').textContent=chapterNames[index];
 document.querySelector('#progress-label').textContent=`0${index+1} / 04`;
}
function frame(now){
 requestAnimationFrame(frame);
 const delta=Math.min((now-lastTime)/1000,.05);lastTime=now;
 const rect=journey.getBoundingClientRect();
 progress=clamp(-rect.top/Math.max(1,journey.offsetHeight-scene.offsetHeight));
 if(Math.abs(progress-lastProgress)>.0001){updateStory(progress);lastProgress=progress;}
 if(document.hidden||rect.bottom<0)return;
 if(!paused)time+=delta;
 // Keep the black-hole scene free of diagram overlays.
 ctx.clearRect(0,0,width,height);
 if(renderer&&material.uniforms.uTexture.value){material.uniforms.uProgress.value=progress;material.uniforms.uTime.value=time;material.uniforms.uPointer.value.set(reduced.matches?0:pointerX,reduced.matches?0:pointerY);renderer.render(renderScene,renderCamera);}
}
requestAnimationFrame(frame);
const insightDialog=document.querySelector('#insight-dialog');
const briefDialog=document.querySelector('#brief-dialog');
const insights=[['Unseen connections','The useful idea is often between disciplines. We look across research, culture, and technology to find connections that a single perspective misses.'],['Human intuition','Data is a starting point. Context, empathy, and judgment help us ask what the signals mean for real people.'],['Creative intelligence','Research creates possibilities when it becomes something you can see, try, and respond to. We turn insight into tangible directions.'],['Ideas with gravity','A compelling direction has something to pull it forward: a clear purpose, an audience that needs it, and a path to making it real.']];
document.querySelectorAll('[data-insight]').forEach(button=>button.onclick=()=>{const insight=insights[Number(button.dataset.insight)];document.querySelector('#insight-title').textContent=insight[0];document.querySelector('#insight-copy').textContent=insight[1];insightDialog.showModal();});
document.querySelectorAll('[data-open]').forEach(button=>button.onclick=()=>briefDialog.showModal());
document.querySelector('#insight-begin').onclick=()=>{insightDialog.close();briefDialog.showModal();};
document.querySelectorAll('dialog .close').forEach(button=>button.onclick=()=>button.closest('dialog').close());
for(const dialog of [insightDialog,briefDialog])dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
document.querySelector('#brief-form').onsubmit=event=>{event.preventDefault();const data=new FormData(event.currentTarget);const text=`PARALLAX | A STARTING POINT\n\nName: ${data.get('name')}\nDirection: ${data.get('direction')}\n\nThe question\n${data.get('question')}\n\nSaved on your device. Nothing has been submitted.\n`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='parallax-starting-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#brief-status').textContent='Your starting brief is ready to keep.';};
