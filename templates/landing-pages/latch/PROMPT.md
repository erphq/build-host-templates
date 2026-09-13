# Build Latch — a feature decision you can inspect

## Intent and finished deliverable

Build an original five-page developer product website called Latch. It is a complete, local feature-flag simulation with an unusually tangible visual identity: warm drafting paper, dark charcoal control surfaces, rust-colored switches, open circuit diagrams, and severe but readable typography. The visitor should understand a feature decision by changing its inputs and reading its exact explanation. This is a working educational product demonstration, not a photograph of a dashboard. Every example flag, organization, environment, subject and owner is fictional. Make the simulation boundary visible without turning every paragraph into a disclaimer. Do not introduce accounts, API keys, deployment actions, invented integrations, customer logos, fake live traffic, signup forms, or claims of serving real production environments.

Deliver index.html, flags.html, flag.html, compare.html and guide.html. Keep all navigation relative so these pages work when hosted in a subdirectory or downloaded as a portable site. Package local fonts, their license notices, original circuit artwork, a preview image, and this complete reconstruction prompt. The user should be able to open the landing page, inspect a configuration, change the percentage, evaluate a subject, save the configuration, navigate away, return, and find the same saved state. Keep the core evaluation model separate from DOM rendering so its mathematical guarantees can be checked independently.

## Brand and composition

The name Latch refers to a visible mechanical gate and a decision retained deliberately. Make a small circuit-shaped logo with CSS rather than a familiar vendor mark: a squared bracket with an inward horizontal contact. Set LATCH in a compact monospaced wordmark. Use the mark only where it helps orientation, principally the header and footer. Do not tile it across the background. The overall mood is an engineering field manual given a contemporary editorial treatment. Avoid glowing particles, translucent cards, starfields, purple gradients, glass dashboards, mascot illustrations, and generic smiling-team photography. This site earns its character through precision, proportion and interaction.

Use paper #eee9e0 as the principal background, charcoal #292722 for primary typography and application headers, muted brown-gray #615b52 for secondary information, rust #b9512e for primary actions, and #b9b0a2 for dividing rules. Favor square edges and thin structural borders. Reserve any softer radius for an actual physical toggle. Large colored surfaces should correspond to a result, a control group or a narrative section. There should not be arbitrary decorative panels nested within decorative panels. Keep a coherent left alignment rail through header, hero, numbered explanations and footer, with approximately four percent desktop edge padding.

Use locally hosted Geist for the main sans-serif family and IBM Plex Mono for keys, labels, formulas and compact instrumentation. Body copy starts at 16 pixels and line height approximately 1.6 to 1.7. Secondary labels remain comfortably readable, usually 14 pixels. Avoid shrinking application content into miniature dashboard text just to fit more columns. Editorial headings can be uppercase with tight tracking and deliberate line breaks. On desktop the hero is large enough to establish a distinctive silhouette, but the interactive switch must remain visible within a normal laptop viewport. On phones reduce heading scale and stack the interface instead of clipping the panel.

## Global shell and navigation

The landing and guide headers use the paper surface. Workspace, editor and comparison headers use charcoal with warm pale text. Both versions contain links to Flag workspace, Rule bench, Compare and Field manual. The landing shell includes an Open the bench action. At narrower widths replace the crowded row with a real Menu button. Its aria-expanded value must follow the open state. Escape closes the menu. Menu links remain keyboard operable and the opened navigation must not cover the full document indefinitely. Use a skip link targeting the single main landmark. Every page has exactly one actual h1 in its rendered content.

Keep a narrow simulation strip under application headers: LOCAL SIMULATION followed by the concise explanation that there is no SDK, network or production connection. Use an understated dot and line treatment rather than a warning icon. Header controls should remain at least approximately 44 pixels high for touch use. Give buttons and links strong keyboard focus outlines, sufficient color contrast and descriptive names. A checked toggle cannot depend solely on its color: retain an associated label and explicit ON or OFF text wherever the surrounding interface needs it. The footer links to all major flows, the reference credits and the enclosing template library. Do not use dead hash links as substitutes for unfinished pages.

## Landing page narrative

The opening is a two-column composition. On the left, place FEATURE CONTROL / MADE INSPECTABLE above the headline A SWITCH. A RULE. A REASON. Set the final phrase in the rust accent. Under it, explain the product in two clear sentences about seeing who matches and why a decision changes. Provide Explore the workspace as the primary action and Read the model as the secondary text link. On the right, build an actual HTML circuit panel, not an image. Its top rail says LATCH / EXAMPLE CIRCUIT and LOCAL. The panel contains the example-switch name, a working boolean toggle, INPUT → CHECK → OUTPUT steps and a large TRUE or FALSE result.

Changing this hero switch updates the output and explanatory sentence immediately. It is a deliberately simple boolean demonstration and does not modify the saved feature workspace. This distinction lets the first interaction be understandable without silently changing a more complicated saved configuration. Keep the panel mechanically convincing with structural lines, a solid result area and aligned labels. Use a modest transition on the toggle contact and result surface, not a continuous animation that suggests processing where no processing occurs. The lower rail links directly into the new-navigation flag in the Staging simulation.

Follow the hero with a linear strip that reads BOOLEAN GATE → ALL CONDITIONS → STABLE BUCKET → EXPLAINED RESULT. Then introduce the argument with DON'T JUST FLIP A SWITCH. FOLLOW THE SIGNAL. Use editorial space and an asymmetrical heading-to-copy relationship. The next section explains the three parts in a flat structural grid: master switch, matching context and stable rollout. Each part has an appropriate native diagram. The boolean part shows an off contact, the targeting part shows plan equals pro, and the rollout part shows a numeric bucket compared with a threshold. These diagrams must reinforce the exact implemented model.

The next large section pairs THE ANSWER COMES WITH ITS WORKING with a vertical evaluation trace. Show a fictional sample subject, the Staging simulation label, the enabled master switch, a matching plan condition, a bucket below threshold and the returned boolean. A later environment section presents Lab, Staging and Release with their different local settings and links to the comparison page. Finish with a concise explanation of the working loop and a large OPEN THE RULE BENCH action. Do not add an unrelated testimonial carousel, fake press strip, invented pricing table or generic FAQ merely to increase page length.

## Workspace page

The workspace is an operational list of three fictional boolean feature flags. It has a large title, a short local-state explanation and an environment selector containing Lab, Staging and Release. Below the heading, show counts for total flags, enabled master switches and targeted configurations. These numbers derive from the actual selected environment; they cannot be hardcoded decoration. A search field filters by name, key or owner without changing saved settings. A no-results state explains that another name or key can be tried. Keep rows aligned and spacious enough to distinguish the human-readable title from the monospaced key.

Each flag row shows its name, key, owner, rollout percentage, count of AND conditions, a real master switch and an Inspect rules link carrying both flag and environment parameters. Toggling a row changes only that flag in the currently selected simulation. Other environments remain untouched. Reflect the changed switch in the enabled count immediately. Export all simulations prepares a JSON document with an explicit simulated marker and known configurations. The export does not claim to be a compatible SDK or vendor configuration. Restore sample configurations returns all known settings and the fictional context to their original state; provide visible feedback describing the local restoration.

Keep search and environment selection orthogonal: changing the environment preserves a useful search term while recalculating the visible row data and summary counts. The environment selection may be retained for the next page visit. Search itself does not need persistent storage. On a narrow screen, let each row reorganize into readable stacked groups with the title first and the inspection action easy to reach. Never compress the four desktop columns until the flag key becomes illegible. Long keys should wrap safely without causing horizontal document scrolling.

## Rule editor and evaluator

The rule bench opens a known flag from the query string, falling back to the first sample when the requested identifier is unknown. It likewise validates the environment parameter against known options. Display the owner, human name, key and description above the main workspace. Provide a backlink to the workspace and an environment selector. The desktop body uses a configuration panel on one side and a context/evaluation panel on the other. At mobile widths stack these panels in their logical order. Every input remains editable with native browser controls rather than hand-built simulated form widgets.

The configuration starts with a master boolean switch, followed by a whole-number rollout percentage from zero through one hundred. Explain that the bucket must be strictly below the threshold. Below it, show an AND condition group with Add condition. Each condition contains an attribute select, compatible operator select and, when appropriate, a value field. Supported attributes are plan, country, beta participation and account age in days. Plan and country support equals, does not equal and is one of. Beta supports is true and is false. Account age supports inclusive at least and at most comparisons. Changing the attribute resets the operator and value to a sensible valid type.

Allow at most five conditions. Removing a condition updates the empty-group explanation. With no conditions, all valid subjects reach the rollout gate; this does not bypass the master switch or subject validation. Adding beyond the maximum should show a short explanatory message. A boolean condition hides the irrelevant text value input. Text values have a reasonable maximum length. Number conditions reject blank, negative and nonfinite values. Rollout rejects blank, fractional, negative or above-one-hundred input. Save persists only a valid configuration. Keep invalid input visible so the visitor can correct it, with an inline error tied to the relevant form area.

Distinguish saved configuration from current draft explicitly. An edit marks the form as unsaved and marks any previous result as a previous evaluation whose draft has changed. Evaluate fictional context uses the current draft, allowing experimentation before save. The result label must say whether saved settings or an unsaved draft produced it. Reload saved settings discards the draft and restores the saved controls. Changing environments loads that environment's independent saved settings. Export saved simulation always exports the saved configuration, even when a different draft is currently visible, and the button name must make this behavior clear.

## Context and evaluation trace

The context form contains fictional subject ID, plan, country, account age and beta participant. Use the exact seeded choices rather than inviting a real person's sensitive data. The subject ID is required, trimmed at its boundaries and capped at a reasonable length. Account age is a whole number between zero and 3650 in the UI. Empty numeric input is invalid rather than silently converted to zero. An invalid context clears or replaces the prior result so a stale true cannot be mistaken for the current outcome. Saving a valid evaluated context makes navigation between editor and comparison coherent.

The result surface shows a large true or false, the reason, the source label, and the bucket when rollout was actually reached. Beneath it, show an ordered trace. Begin with the master switch. If disabled, stop before targeting or hashing. When enabled, record every configured condition with pass or fail and expected value. If any condition fails, stop before rollout. When all conditions pass, require a nonempty subject ID and then calculate the stable bucket. Explain the exact bucket, threshold and percentage comparison. Use text and symbols in addition to color. A false result is normal product information, not an application failure.

Under the editor, show a ten-subject cohort using sample-001 through sample-010. All ten share the current nonidentity attributes, while their identifiers differ. Each row or cell shows its ID, bucket when reached and boolean. This visualization demonstrates stable allocation without claiming that a small cohort must match the configured percentage exactly. When targeting or master switch prevents hashing, show Gate stopped evaluation rather than inventing a bucket. Recompute the cohort from the same draft and validated context as the primary evaluator. Do not use random numbers for its results.

## Exact deterministic model

Implement UTF-8 FNV-1a as a small demonstration hash. Start with unsigned offset basis 2166136261. For each UTF-8 byte, XOR the byte then multiply with Math.imul by 16777619, preserving an unsigned 32-bit result. Hash the flag key, a null separator and the trimmed subject ID. The environment is deliberately absent from the hash input, so the same flag and subject retain the same bucket in all three simulated environments. Preserve subject case. Do not substitute a runtime-dependent language hash or Math.random. Do not call this algorithm cryptographically secure or compatible with another flag platform.

Calculate bucket as floor(unsignedHash divided by 4294967296 multiplied by 10000). Buckets therefore run from zero through 9999. Threshold equals the integer percentage multiplied by 100. Inclusion uses a strict less-than comparison. Zero percent includes nobody and one hundred percent includes every otherwise valid subject. A bucket exactly equal to threshold is excluded. For new-navigation and sample-001 the bucket is 1285, so matching context is excluded at twelve percent and included at thirteen percent. Increasing the percentage cannot remove a subject when other inputs remain unchanged. This monotonic property is a required behavioral guarantee.

Validate configuration independently of the UI because saved browser state can be malformed. Require an actual boolean master switch, an integer percentage in range, an array of no more than five supported conditions and valid attribute/operator/value combinations. Missing string context fails even a does-not-equal condition. String comparisons are case sensitive. Comma-separated lists trim entries and ignore empty entries, but a list containing only empty entries is invalid. Beta requires an actual boolean, not the text true. Account age comparisons require a finite numeric context value. Do not rely on coercion that turns an empty string into zero or a truthy string into a boolean.

## Comparison and guide pages

The comparison page uses a flag selector and the same context form, then displays the three environments side by side on wide screens. Each environment shows enabled state, rollout, condition count, exact condition summary, result, reason and bucket if reached. A link opens that environment's rule bench. Below, compare Lab with Staging, Staging with Release, and Lab with Release. Report which configuration dimensions differ: master switch, percentage or conditions. These summaries inspect saved settings. They do not copy configurations, promote flags or trigger deployment. On mobile the environment cards stack in a logical order.

The field manual is a substantial editorial page, not a modal. Provide anchors for evaluation order, condition semantics, hash and rollout, boundary examples, environments and storage. A desktop side navigation can remain visible while the article scrolls, but becomes a normal list on phones. Show the formula in readable preformatted code with safe overflow contained in the formula block. Explain exact boundaries, draft versus saved behavior, fallback from malformed storage and the limits of the model. The manual should let a technical reader predict the output before using the evaluator. Its copy must agree with the implementation, including the null separator and environment-independent bucket.

## Persistence, assets and motion

Store only known fictional configurations, selected environment and last context under a versioned Latch key. Parse inside a guarded operation. Reconstruct known flag and environment entries from defaults, then accept validated stored overrides. Do not trust arbitrary object keys or inject stored strings into HTML. Escape all user-controlled strings at rendering boundaries. If storage is blocked, keep the interface usable for the current visit and say saving is unavailable. Do not show a saved success message when persistence fails. Export via a generated Blob and revoke the temporary URL after the download has been initiated.

Use the supplied original circuit SVG and WebP as library preview material. The actual website interface remains native HTML and CSS; preview artwork must never replace editable controls. Ship Geist and IBM Plex font files with their licenses. Keep the site independent of image APIs, remote font servers and analytics scripts. Use motion sparingly: a toggle translation, hover feedback on a primary action and a short toast entry. Respect reduced-motion preference by removing unnecessary smooth scrolling and transitions. Nothing needs an endless animation, fake loading sequence, simulated network spinner or theatrical delay.

## Acceptance and quality bar

Verify the domain with independent assertions for zero and one hundred percent, threshold equality, the known 1285 example, monotonic rollout, flag-key separation, environment-independent buckets, missing subject ID, disabled master switch, invalid configuration, text lists, boolean strictness and numeric comparisons. Verify the browser by changing twelve percent to thirteen percent for the same subject and observing false then true; save, navigate away and return; switch environment and confirm isolation; add and remove conditions; make an invalid percentage and confirm save fails; search for an absent flag and inspect the empty state. Test keyboard operation and focus visibility.

Inspect all five pages at desktop and phone dimensions. Check that headlines fit, controls stay readable, menus open and close, evaluation traces wrap, comparison cards stack, formulas contain their own overflow and the document does not scroll horizontally. Confirm all relative local links and assets resolve. Treat successful script parsing as necessary but insufficient evidence of a working site. Do not invent browser or mobile test results. If a tool cannot provide a particular measurement, record that limitation clearly. The finished deliverable should feel like one carefully art-directed developer product with an inspectable working model, not five generic landing-page variations.


## Exact fictional flag and context data

```json
{
  "environments": [
    {
      "id": "lab",
      "name": "Lab",
      "description": "Development simulation"
    },
    {
      "id": "staging",
      "name": "Staging",
      "description": "Review simulation"
    },
    {
      "id": "release",
      "name": "Release",
      "description": "Release simulation"
    }
  ],
  "attributes": [
    {
      "id": "plan",
      "name": "Plan",
      "type": "string"
    },
    {
      "id": "country",
      "name": "Country",
      "type": "string"
    },
    {
      "id": "beta",
      "name": "Beta participant",
      "type": "boolean"
    },
    {
      "id": "tenure",
      "name": "Account age in days",
      "type": "number"
    }
  ],
  "operators": {
    "string": [
      {
        "id": "equals",
        "name": "equals"
      },
      {
        "id": "not_equals",
        "name": "does not equal"
      },
      {
        "id": "one_of",
        "name": "is one of"
      }
    ],
    "boolean": [
      {
        "id": "is_true",
        "name": "is true"
      },
      {
        "id": "is_false",
        "name": "is false"
      }
    ],
    "number": [
      {
        "id": "gte",
        "name": "is at least"
      },
      {
        "id": "lte",
        "name": "is at most"
      }
    ]
  },
  "flags": [
    {
      "id": "new-navigation",
      "name": "New navigation",
      "description": "A fictional interface layout, evaluated for a sample account context.",
      "owner": "Interface team",
      "configs": {
        "lab": {
          "enabled": true,
          "percentage": 100,
          "conditions": []
        },
        "staging": {
          "enabled": true,
          "percentage": 50,
          "conditions": [
            {
              "id": "plan-pro",
              "attribute": "plan",
              "operator": "equals",
              "value": "pro"
            }
          ]
        },
        "release": {
          "enabled": false,
          "percentage": 10,
          "conditions": [
            {
              "id": "plan-pro",
              "attribute": "plan",
              "operator": "equals",
              "value": "pro"
            },
            {
              "id": "beta-only",
              "attribute": "beta",
              "operator": "is_true",
              "value": ""
            }
          ]
        }
      }
    },
    {
      "id": "search-suggestions",
      "name": "Search suggestions",
      "description": "An imagined search enhancement with country and account-age conditions.",
      "owner": "Discovery team",
      "configs": {
        "lab": {
          "enabled": true,
          "percentage": 100,
          "conditions": []
        },
        "staging": {
          "enabled": true,
          "percentage": 75,
          "conditions": [
            {
              "id": "country-list",
              "attribute": "country",
              "operator": "one_of",
              "value": "US, GB, DE"
            }
          ]
        },
        "release": {
          "enabled": true,
          "percentage": 25,
          "conditions": [
            {
              "id": "country-list",
              "attribute": "country",
              "operator": "one_of",
              "value": "US, GB"
            },
            {
              "id": "tenure-min",
              "attribute": "tenure",
              "operator": "gte",
              "value": "30"
            }
          ]
        }
      }
    },
    {
      "id": "compact-dashboard",
      "name": "Compact dashboard",
      "description": "A sample dashboard density preference behind an explicit boolean gate.",
      "owner": "Workspace team",
      "configs": {
        "lab": {
          "enabled": true,
          "percentage": 100,
          "conditions": [
            {
              "id": "beta-test",
              "attribute": "beta",
              "operator": "is_true",
              "value": ""
            }
          ]
        },
        "staging": {
          "enabled": false,
          "percentage": 100,
          "conditions": []
        },
        "release": {
          "enabled": false,
          "percentage": 0,
          "conditions": []
        }
      }
    }
  ],
  "defaultContext": {
    "subjectId": "sample-001",
    "plan": "pro",
    "country": "US",
    "beta": true,
    "tenure": 45
  }
}
```

## Reference interaction handler

```javascript
function hash32(text){let hash=2166136261;for(const byte of new TextEncoder().encode(text)){hash^=byte;hash=Math.imul(hash,16777619)>>>0;}return hash>>>0;}
function rolloutBucket(flagId,subjectId){return Math.floor(hash32(flagId+'\0'+subjectId.trim())/4294967296*10000);}
function inRollout(bucket,percentage){return Number.isInteger(bucket)&&bucket>=0&&bucket<10000&&Number.isInteger(percentage)&&percentage>=0&&percentage<=100&&bucket<percentage*100;}
function validateCondition(condition){if(!condition||typeof condition!=='object')return'Choose a supported condition.';const types={plan:'string',country:'string',beta:'boolean',tenure:'number'};const allowed={string:['equals','not_equals','one_of'],boolean:['is_true','is_false'],number:['gte','lte']};const type=Object.hasOwn(types,condition.attribute)?types[condition.attribute]:null;if(!type||!allowed[type].includes(condition.operator))return'Choose a supported attribute and operator.';if(type==='string'&&(typeof condition.value!=='string'||!condition.value.trim()))return'Add a value for this text condition.';if(type==='string'&&condition.operator==='one_of'&&!condition.value.split(',').some(value=>value.trim()))return'Add at least one comma-separated value.';if(type==='number'&&(!['string','number'].includes(typeof condition.value)||String(condition.value).trim()===''||!Number.isFinite(Number(condition.value))||Number(condition.value)<0))return'Use a non-negative number for account age.';return'';}
function validateConfig(config){if(!config||typeof config!=='object')return'Choose a valid configuration.';if(typeof config.enabled!=='boolean')return'The master switch must be a boolean.';if(!Number.isInteger(config.percentage)||config.percentage<0||config.percentage>100)return'Use a whole rollout percentage from 0 to 100.';if(!Array.isArray(config.conditions)||config.conditions.length>5)return'Use at most five conditions.';for(const condition of config.conditions){const error=validateCondition(condition);if(error)return error;}return'';}
function matchesCondition(condition,context){if(validateCondition(condition))return false;const value=context[condition.attribute];if(['plan','country'].includes(condition.attribute)){if(typeof value!=='string')return false;const expected=condition.value.trim();if(condition.operator==='equals')return value===expected;if(condition.operator==='not_equals')return value!==expected;return expected.split(',').map(item=>item.trim()).filter(Boolean).includes(value);}if(condition.attribute==='beta')return typeof value==='boolean'&&value===(condition.operator==='is_true');if(typeof value!=='number'||!Number.isFinite(value))return false;return condition.operator==='gte'?value>=Number(condition.value):value<=Number(condition.value);}
function evaluateFlag(flagId,config,context){context=context&&typeof context==='object'?context:{};const trace=[];const error=validateConfig(config);if(error)return{value:false,bucket:null,reason:'Invalid configuration',trace:[{step:'Configuration',pass:false,detail:error}]};trace.push({step:'Master switch',pass:config.enabled,detail:config.enabled?'Enabled in this simulation.':'Disabled: evaluation stops here.'});if(!config.enabled)return{value:false,bucket:null,reason:'Master switch is off',trace};for(const condition of config.conditions){const pass=matchesCondition(condition,context);trace.push({step:condition.attribute+' '+condition.operator,pass,detail:condition.attribute==='beta'?'Expected '+(condition.operator==='is_true'?'true':'false'):'Expected '+condition.value});}if(trace.some(step=>!step.pass))return{value:false,bucket:null,reason:'A targeting condition did not match',trace};const subject=typeof context.subjectId==='string'?context.subjectId.trim():'';if(!subject){trace.push({step:'Stable subject ID',pass:false,detail:'A non-empty fictional subject ID is required.'});return{value:false,bucket:null,reason:'Missing subject ID',trace};}const bucket=rolloutBucket(flagId,subject);const included=inRollout(bucket,config.percentage);trace.push({step:'Deterministic rollout',pass:included,detail:`Bucket ${bucket} is ${included?'below':'not below'} threshold ${config.percentage*100} (${config.percentage}%).`});return{value:included,bucket,reason:included?'All conditions and rollout matched':'Outside the rollout percentage',trace};}
function configDifferences(left,right){const differences=[];if(left.enabled!==right.enabled)differences.push('Master switch');if(left.percentage!==right.percentage)differences.push('Rollout percentage');const normalize=conditions=>conditions.map(({attribute,operator,value})=>({attribute,operator,value}));if(JSON.stringify(normalize(left.conditions))!==JSON.stringify(normalize(right.conditions)))differences.push('Targeting conditions');return differences;}

(() => {
  'use strict';
  const seed=JSON.parse(document.getElementById('latch-data').textContent);
  const {flags,environments,attributes,operators}=seed;
  const flagById=new Map(flags.map(flag=>[flag.id,flag]));
  const envById=new Map(environments.map(env=>[env.id,env]));
  const attributeById=new Map(attributes.map(attribute=>[attribute.id,attribute]));
  const key='latch-simulations-v1';
  const clone=value=>JSON.parse(JSON.stringify(value));
  const e=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const initial=()=>({configs:Object.fromEntries(flags.map(flag=>[flag.id,clone(flag.configs)])),environment:'staging',context:{...seed.defaultContext}});
  let state=initial();let toastTimer;
  function normalizeConfig(config){if(!config||typeof config!=='object'||!Array.isArray(config.conditions)||config.conditions.some(condition=>!condition||typeof condition!=='object'))return null;const conditions=Array.isArray(config.conditions)?config.conditions.filter(condition=>condition&&typeof condition==='object').slice(0,6).map((condition,index)=>({id:typeof condition.id==='string'&&/^[a-z0-9-]+$/.test(condition.id)?condition.id:'condition-'+index,attribute:condition.attribute,operator:condition.operator,value:typeof condition.value==='string'?condition.value.slice(0,240):typeof condition.value==='number'?String(condition.value):''})):null;const result={enabled:config.enabled,percentage:config.percentage,conditions};return validateConfig(result)?null:result;}
  function cleanContext(context){return{subjectId:typeof context?.subjectId==='string'?context.subjectId.trim().slice(0,128):seed.defaultContext.subjectId,plan:['free','pro','enterprise'].includes(context?.plan)?context.plan:'pro',country:['US','GB','DE','IN'].includes(context?.country)?context.country:'US',beta:context?.beta===true,tenure:Number.isInteger(context?.tenure)&&context.tenure>=0&&context.tenure<=3650?context.tenure:45};}
  try{const stored=JSON.parse(localStorage.getItem(key)||'null');if(stored&&typeof stored==='object'&&!Array.isArray(stored)){for(const flag of flags)for(const env of environments){const config=normalizeConfig(stored.configs?.[flag.id]?.[env.id]);if(config)state.configs[flag.id][env.id]=config;}if(envById.has(stored.environment))state.environment=stored.environment;if(stored.context)state.context=cleanContext(stored.context);}}catch{state=initial();}
  const params=new URLSearchParams(location.search);
  const currentFlag=flagById.get(params.get('flag'))||flags[0];
  let currentEnv=envById.has(params.get('env'))?params.get('env'):state.environment;
  const config=()=>state.configs[currentFlag.id][currentEnv];
  function notify(message){const node=document.querySelector('.toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),3300);}
  function persist(){try{localStorage.setItem(key,JSON.stringify(state));return true;}catch{notify('Available for this visit. Browser saving is unavailable.');return false;}}
  function download(name,data){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Local simulation JSON prepared. No remote configuration was changed.');}
  const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const open=document.querySelector('header').classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';});document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.querySelector('header').classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';}});
  document.getElementById('hero-toggle')?.addEventListener('change',event=>{const enabled=event.target.checked;document.getElementById('hero-output').textContent=String(enabled);document.getElementById('hero-result').textContent=String(enabled).toUpperCase();document.getElementById('hero-reason').textContent=enabled?'The example switch is enabled.':'The example switch is disabled.';document.querySelector('.hero-readout').classList.toggle('closed',!enabled);});
  const flagList=document.getElementById('flag-list');
  function renderWorkspace(){if(!flagList)return;const env=document.getElementById('workspace-env').value;const query=document.getElementById('flag-search').value.trim().toLowerCase();const visible=flags.filter(flag=>`${flag.id} ${flag.name} ${flag.owner}`.toLowerCase().includes(query));document.getElementById('enabled-count').textContent=flags.filter(flag=>state.configs[flag.id][env].enabled).length;document.getElementById('targeted-count').textContent=flags.filter(flag=>state.configs[flag.id][env].conditions.length).length;flagList.innerHTML=visible.map(flag=>{const settings=state.configs[flag.id][env];return`<article class="flag-row"><div><h2>${flag.name}</h2><span class="flag-key">${flag.id}</span><p>${flag.owner} / Boolean flag</p></div><div class="flag-rule-summary">${settings.percentage}% rollout<small>${settings.conditions.length} ${settings.conditions.length===1?'condition':'conditions'} / ALL must match</small></div><label class="flag-state"><span class="toggle"><input type="checkbox" data-workspace-flag="${flag.id}" ${settings.enabled?'checked':''} aria-label="Enable ${flag.name} in ${envById.get(env).name} simulation"><span></span></span><span>${settings.enabled?'ON':'OFF'}</span></label><a href="flag.html?flag=${flag.id}&env=${env}" class="text-link">Inspect rules ↗</a></article>`;}).join('');document.getElementById('flag-empty').hidden=visible.length>0;}
  if(flagList){document.getElementById('workspace-env').value=currentEnv;document.getElementById('workspace-env').addEventListener('change',event=>{state.environment=event.target.value;currentEnv=event.target.value;persist();renderWorkspace();});document.getElementById('flag-search').addEventListener('input',renderWorkspace);flagList.addEventListener('change',event=>{const input=event.target.closest('[data-workspace-flag]');if(!input)return;const env=document.getElementById('workspace-env').value;state.configs[input.dataset.workspaceFlag][env].enabled=input.checked;persist();renderWorkspace();notify(`${envById.get(env).name} simulation updated locally.`);});document.getElementById('export-workspace').addEventListener('click',()=>download('latch-simulations.json',{kind:'Latch local simulation only',simulated:true,environments,flags:state.configs}));document.getElementById('reset-workspace').addEventListener('click',()=>{state=initial();currentEnv=state.environment;document.getElementById('workspace-env').value=currentEnv;persist();renderWorkspace();notify('Sample configurations and fictional context restored.');});renderWorkspace();}
  function readContext(form){const age=form.elements.namedItem('tenure').value;return{subjectId:form.elements.namedItem('subjectId').value.trim(),plan:form.elements.namedItem('plan').value,country:form.elements.namedItem('country').value,beta:form.elements.namedItem('beta').checked,tenure:age.trim()===''?NaN:Number(age)};}
  function contextError(context){if(!context.subjectId)return'Add a fictional subject ID.';if(!Number.isInteger(context.tenure)||context.tenure<0||context.tenure>3650)return'Use a whole account age from 0 to 3650 days.';return'';}
  function fillContext(form){for(const attribute of ['subjectId','plan','country','tenure'])form.elements.namedItem(attribute).value=state.context[attribute];form.elements.namedItem('beta').checked=state.context.beta;}
  function resultMarkup(result,source){return`<div class="evaluation-readout ${result.value?'true':''}"><span data-result-source>${e(source)}</span><strong>${result.value}</strong><p>${e(result.reason)}</p>${result.bucket!==null?`<div class="bucket-readout">BUCKET ${result.bucket} / 10000<br>POSITION ${(result.bucket/100).toFixed(2)}%</div>`:''}</div><ol class="evaluation-trace">${result.trace.map(step=>`<li class="${step.pass?'trace-pass':'trace-fail'}"><b>${step.pass?'✓':'×'}</b><div><h3>${e(step.step)}</h3><p>${e(step.detail)}</p></div></li>`).join('')}</ol>`;}
  const ruleForm=document.getElementById('rule-form');
  function conditionMarkup(condition){const attribute=attributeById.get(condition.attribute)||attributes[0];const boolean=attribute.type==='boolean';return`<div class="condition-row" data-condition-id="${condition.id}"><div class="condition-row-top"><span>AND CONDITION</span><button type="button" data-remove-condition="${condition.id}">Remove</button></div><div class="condition-fields"><label>Attribute<select data-attribute>${attributes.map(item=>`<option value="${item.id}" ${item.id===condition.attribute?'selected':''}>${item.name}</option>`).join('')}</select></label><label>Operator<select data-operator>${operators[attribute.type].map(item=>`<option value="${item.id}" ${item.id===condition.operator?'selected':''}>${item.name}</option>`).join('')}</select></label><label data-value-label ${boolean?'hidden':''}>Value<input data-condition-value value="${e(condition.value)}" maxlength="240" ${attribute.type==='number'?'type="number" min="0" step="any"':'type="text"'}></label></div><p class="condition-note">${boolean?'Requires an actual boolean context value.':attribute.type==='number'?'Inclusive comparison against a numeric account age.':'Case-sensitive text. Use commas for an is-one-of list.'}</p></div>`;}
  function readDraft(){const raw=ruleForm.elements.namedItem('percentage').value;return{enabled:ruleForm.elements.namedItem('enabled').checked,percentage:raw.trim()===''?NaN:Number(raw),conditions:[...document.querySelectorAll('.condition-row')].map(row=>{const attribute=row.querySelector('[data-attribute]').value;return{id:row.dataset.conditionId,attribute,operator:row.querySelector('[data-operator]').value,value:attribute==='beta'?'':row.querySelector('[data-condition-value]').value.trim()};})};}
  function draftChanged(){document.getElementById('no-conditions').hidden=document.querySelectorAll('.condition-row').length>0;document.getElementById('save-status').textContent='Unsaved draft. Evaluate the context to inspect it, or save it locally.';const source=document.querySelector('[data-result-source]');if(source)source.textContent='PREVIOUS EVALUATION / DRAFT HAS CHANGED';}
  function loadSaved(){const saved=config();ruleForm.elements.namedItem('enabled').checked=saved.enabled;ruleForm.elements.namedItem('percentage').value=saved.percentage;document.getElementById('condition-list').innerHTML=saved.conditions.map(conditionMarkup).join('');document.getElementById('no-conditions').hidden=saved.conditions.length>0;document.getElementById('rule-error').textContent='';document.getElementById('save-status').textContent=`Saved local settings / ${envById.get(currentEnv).name} simulation.`;}
  function renderCohort(settings,context){const node=document.getElementById('cohort-grid');node.className='cohort-grid';node.innerHTML=Array.from({length:10},(_,index)=>{const subjectId='sample-'+String(index+1).padStart(3,'0');const result=evaluateFlag(currentFlag.id,settings,{...context,subjectId});return`<div class="cohort-person ${result.value?'true':''}"><div>${subjectId}<span>${result.bucket===null?'Gate stopped evaluation':'Bucket '+result.bucket}</span></div><strong>${result.value}</strong></div>`;}).join('');}
  function evaluateCurrent(saveContext=false){const form=document.getElementById('context-form');const context=readContext(form);const error=contextError(context);form.querySelector('.context-error').textContent=error;if(error){document.getElementById('evaluation-result').innerHTML='<div class="evaluation-readout"><strong>—</strong><p>Enter a valid fictional context to evaluate.</p></div>';document.getElementById('cohort-grid').innerHTML='';return;}const settings=readDraft();const source=JSON.stringify(settings)===JSON.stringify(config())?'SAVED LOCAL CONFIGURATION':'UNSAVED DRAFT / LOCAL EVALUATION';const result=evaluateFlag(currentFlag.id,settings,context);document.getElementById('evaluation-result').innerHTML=resultMarkup(result,source);renderCohort(settings,context);if(saveContext){state.context=context;persist();}}
  if(ruleForm){document.getElementById('flag-heading').innerHTML=`<div class="flag-title"><p class="eyebrow">BOOLEAN FEATURE / ${currentFlag.owner}</p><h1>${currentFlag.name}</h1><code>${currentFlag.id}</code><p>${currentFlag.description}</p></div>`;document.getElementById('editor-env').value=currentEnv;fillContext(document.getElementById('context-form'));document.getElementById('editor-env').addEventListener('change',event=>{currentEnv=event.target.value;state.environment=currentEnv;persist();loadSaved();evaluateCurrent();});document.getElementById('add-condition').addEventListener('click',()=>{if(document.querySelectorAll('.condition-row').length>=5){notify('This local model supports at most five conditions.');return;}const id='condition-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);document.getElementById('condition-list').insertAdjacentHTML('beforeend',conditionMarkup({id,attribute:'plan',operator:'equals',value:'pro'}));draftChanged();});document.getElementById('condition-list').addEventListener('click',event=>{const button=event.target.closest('[data-remove-condition]');if(button){button.closest('.condition-row').remove();draftChanged();}});document.getElementById('condition-list').addEventListener('change',event=>{if(!event.target.matches('[data-attribute]'))return;const row=event.target.closest('.condition-row');const attribute=attributeById.get(event.target.value);const updated={id:row.dataset.conditionId,attribute:attribute.id,operator:operators[attribute.type][0].id,value:attribute.type==='number'?'0':attribute.type==='boolean'?'':attribute.id==='country'?'US':'pro'};row.outerHTML=conditionMarkup(updated);draftChanged();});ruleForm.addEventListener('input',draftChanged);ruleForm.addEventListener('change',draftChanged);ruleForm.addEventListener('submit',event=>{event.preventDefault();const settings=readDraft();const error=validateConfig(settings);document.getElementById('rule-error').textContent=error;if(error)return;state.configs[currentFlag.id][currentEnv]=settings;const stored=persist();document.getElementById('save-status').textContent=stored?`Saved in ${envById.get(currentEnv).name} simulation. No remote changes.`:'Available for this visit only.';evaluateCurrent();});document.getElementById('discard-draft').addEventListener('click',()=>{loadSaved();evaluateCurrent();});document.getElementById('context-form').addEventListener('submit',event=>{event.preventDefault();evaluateCurrent(true);});document.getElementById('export-flag').addEventListener('click',()=>download(`latch-${currentFlag.id}-${currentEnv}.json`,{kind:'Latch simulation only; not SDK configuration',simulated:true,flag:currentFlag.id,environment:currentEnv,configuration:config()}));loadSaved();evaluateCurrent();}
  const compareForm=document.getElementById('compare-context');
  function renderComparison(saveContext=false){const flag=flagById.get(document.getElementById('compare-flag').value);const context=readContext(compareForm);const error=contextError(context);compareForm.querySelector('.context-error').textContent=error;if(error){document.getElementById('comparison-grid').innerHTML='<p>Enter a valid fictional context to compare simulations.</p>';document.getElementById('configuration-differences').innerHTML='';return;}document.getElementById('comparison-grid').innerHTML=environments.map(env=>{const settings=state.configs[flag.id][env.id];const result=evaluateFlag(flag.id,settings,context);return`<article class="comparison-card"><p class="eyebrow">${env.description}</p><h2>${env.name}</h2><dl><div><dt>Master switch</dt><dd>${settings.enabled?'ON':'OFF'}</dd></div><div><dt>Rollout</dt><dd>${settings.percentage}%</dd></div><div><dt>Conditions</dt><dd>${settings.conditions.length} / AND</dd></div></dl><div class="comparison-conditions">${settings.conditions.length?settings.conditions.map(condition=>`${e(condition.attribute)} ${e(condition.operator)} ${e(condition.value)}`).join('<br>'):'No targeting conditions'}</div><div class="evaluation-readout ${result.value?'true':''}"><span>SIMULATED RESULT</span><strong>${result.value}</strong><p>${e(result.reason)}</p><div class="bucket-readout">${result.bucket===null?'Rollout not reached':'BUCKET '+result.bucket}</div></div><a class="text-link" href="flag.html?flag=${flag.id}&env=${env.id}">Edit this simulation ↗</a></article>`;}).join('');document.getElementById('configuration-differences').innerHTML=[['lab','staging'],['staging','release'],['lab','release']].map(([left,right])=>{const diff=configDifferences(state.configs[flag.id][left],state.configs[flag.id][right]);return`<div class="difference-row"><strong>${envById.get(left).name} → ${envById.get(right).name}</strong><span>${diff.length?diff.join(', '):'Saved settings match'}</span></div>`;}).join('');if(saveContext){state.context=context;persist();}}
  if(compareForm){fillContext(compareForm);if(flagById.has(params.get('flag')))document.getElementById('compare-flag').value=params.get('flag');compareForm.addEventListener('submit',event=>{event.preventDefault();renderComparison(true);});document.getElementById('compare-flag').addEventListener('change',()=>renderComparison());renderComparison();}
})();

```
