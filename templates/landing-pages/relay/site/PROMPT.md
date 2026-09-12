# Relay — connect the work, clarify the next step

Build a complete, original visual workflow product named Relay. The site must combine an expressive marketing page with a useful local workflow studio, three editable recipes, two substantial fictional scenario studies, a working guide, and an illustrative pricing calculator. This is not a generic landing page decorated with automation icons. The connected-node diagram, the record editor, the decision logic, and the visible output should all describe the same small but meaningful system. A visitor must be able to understand a rule, change its inputs, run a local test, save the configuration, and copy its JSON.

Relay’s central idea is that a handoff becomes easier when its decision is visible. The demonstration begins with a record, applies one explicit rule, and chooses between a review branch and a ready branch. Keep the scope focused and honest. No external services, accounts, files, messages, or calendars are connected. The interface should be complete and useful as a local demonstration without pretending to run an operational automation platform. Every result needs a plain-language explanation of why that branch was selected.

## Research and original adaptation

The structural research reference is https://www.make.com/en. The parent task inspected the live reference at a 1280-pixel viewport and measured a hero heading around 48 pixels with a 60-pixel line height and weight 700. The page uses connected circular node visuals to make automation tangible, a strong hero proposition, solution-category tabs, and substantial platform sections. The parent exercised the solution tabs and observed the content changing to Marketing. These are observed reference properties, not assumptions about how its backend works.

The actual live page was also inspected read-only during this build. It presents a visual automation proposition, a supporting explanation of connected applications and data, primary and secondary actions, a company-logo band, a platform overview, solution tabs, integration examples, security content, scenario stories, and a closing invitation. The tabs include IT, Operations, Marketing, Sales, Finance, customer experience, and people. The current active solution section contains a relevant image, a heading, a paragraph, and a destination link. This demonstrates that the tabs change meaningful content rather than merely recoloring a selected button.

The transferable lesson is the relationship between the product’s visual language and its explanation. Nodes, branches, records, and outputs should appear in the marketing story and remain recognizable in the working interface. The page should not describe a powerful visual tool and then offer only a static picture. Relay adapts that relationship into a smaller original demonstration: four nodes, three decision types, three recipes, and a visible local result. The reduced scope permits the full interaction to be implemented and tested within a static website.

Do not copy Make’s name, logo, customer identities, app logos, commercial claims, colors, source code, or artwork. Do not borrow its security certifications, scale statistics, or integration counts. Relay’s own palette is bright blue, pale blue-gray, deep navy, and warm coral. The diagrams and icons are original code-authored SVG and CSS. The recipes and scenario stories are fictional examples written for this site. Exact reference animation timing was not measured, so document Relay’s motion as an original design choice rather than claiming a match.

## Brand and interface language

Use a compact lowercase Relay wordmark paired with an original line icon that suggests a path splitting and continuing. The identity should feel practical and clear, with enough character to distinguish it from a default business template. Avoid registered-trademark decoration. Use local Geist for the complete interface and body text. It is a neutral enough family to support the diagram without making the page feel anonymous. Headlines use medium-to-semibold weights, tight tracking, and a compact line height.

The main page background is a very pale blue-gray near #f5f7fb. The primary blue is approximately #2856d8. Ink is deep navy near #162748, with a muted blue-gray around #52627c for supporting paragraphs. Borders are a pale blue around #ccd7ed. Coral near #ff9a82 is reserved for the decision node and a few supporting surfaces. Review and ready outputs have distinct blue-green tones, but the selected path itself always uses the primary blue so the rule’s state remains legible.

Keep the interface mostly flat, with restrained rounded corners. Major panels use roughly ten to twelve pixels of radius. Buttons and form controls use five to six. Shadows are broad and low-contrast, mainly beneath the diagram frame and the tilted example-record card. Do not introduce a different visual system for the studio, pricing page, and scenario pages. Shared color, type, spacing, and icon choices should make them feel like parts of one product.

Write visible copy in plain language. Prefer Record, Decision rule, Review, Ready, Local test, Save route, and Copy JSON. Explain technical details where they help the visitor understand an action. Avoid phrases that imply a real message was sent, a file was moved, or an automation was deployed. The local boundary belongs beside the test action and result, not only in a footer. The product should be confident about what it does and precise about what it does not do.

## Marketing page composition

Create an eighty-pixel white header with a fine bottom border. Use approximately 6.25 percent horizontal page padding. The Relay identity is on the left; navigation is on the right. Navigation links lead to Recipes, How it works, Pricing model, and Open the studio. The final action is a filled blue rectangle with a modest radius. On smaller screens, preserve readable navigation and introduce a simple menu only when the available width actually requires it. The menu must use aria-expanded and Escape support.

The hero uses a two-column layout with a slightly wider product column. Give it generous top and bottom padding, approximately ninety-five and eighty pixels on a desktop. The left side contains a small uppercase eyebrow, a large three-line heading, a concise explanatory paragraph, a filled action, and a quieter recipe link. The heading is about sixty-five pixels at a typical large laptop width, with a line height near 1.08 and negative tracking. Highlight the phrase about the next step in blue.

The right side is a framed workflow canvas. Its top toolbar gives the diagram a short title and identifies it as a local demonstration. The canvas uses a subtle dotted grid. Four circular or rounded nodes sit on the grid: the record at the left, a decision in the middle, and two outputs on the right. The input and decision are centered vertically; the review output is above and the ready output below. The links between them use original SVG paths. Use a smooth split in the branches rather than an angular flowchart assembled from unrelated divs.

Each node has an icon, a short readable label, and a tiny numbered role label. The decision node is visually distinct through a coral border and a rotated rounded-square treatment around its icon. Node controls are actual buttons, not purely decorative shapes. Clicking a node updates the explanation below the diagram and its pressed state. The explanation is a polite live region and should not disappear during interaction. This makes the marketing diagram useful without requiring the visitor to enter the studio first.

Below the hero, add a concise rail of three product principles: begin with a record, make the decision visible, and test without sending anything. These are descriptive statements, not customer logos or unverifiable trust claims. Continue with a centered section that introduces recipes. Three buttons represent Content, Operations, and Design. Selecting one updates the recipe title, explanatory paragraph, record example, and destination link. The selected state should be clear, and all content changes must agree with the same recipe record.

The recipe feature uses a split white panel. Its left contains the recipe’s explanation and a link to open it in the studio. Its right contains a slightly tilted example-record card with title, review flag, priority, and next step. The record card is not an editable form; it is a clear preview of the selected recipe. The tab interaction should update every displayed value so there is no contradictory leftover content from the first recipe.

A longer product-story section follows. Place a concise introduction in the left column and three stacked explanatory panels in the right. The panels explain shaping the input, making the rule visible, and understanding the output. Each contains an original interface fragment: record fields, a small connected path, or formatted local output. At wide sizes, the introduction can remain sticky while these panels pass. On mobile, it becomes ordinary stacked content. The page concludes with native FAQ disclosures and a strong blue closing invitation.

## Diagram geometry and motion

The workflow canvas uses a ten-to-seven aspect ratio and a minimum height that keeps node labels readable. Place the input around eighteen percent of its width and fifty percent of its height. Place the decision around forty-eight percent and fifty percent. Place the review at eighty-two percent and twenty-four percent, and the ready node at eighty-two percent and seventy-five percent. The SVG path viewBox is six hundred by four hundred and twenty, matching this coordinate system closely enough for a coherent responsive layout.

Default paths are pale blue, with a subtle dashed treatment. The active output branch becomes solid primary blue and slightly thicker. The input-to-decision connection remains visible as part of the shared path. Small branch labels help explain the meaning, but they can disappear at very narrow widths when the node names and live explanation already convey the state. Never let a connector cross through a label or an icon in a way that makes the route ambiguous.

Motion should explain state, not compete with reading. Running a local test briefly scales the selected output icon over approximately five hundred milliseconds. Animate the icon itself rather than overwriting the node’s positioning transform, because the latter changes at mobile breakpoints. Do not use an infinite pulse, moving particle loop, or animated marquee. Supporting story panels may have a small scroll-linked arrival where the browser supports it, but the content must remain complete without that enhancement.

Respect prefers-reduced-motion by disabling transitions and animations. Every selected path, button state, and result remains visible in the static version. Hover arrows can move slightly, but their meaning must not depend on motion. The diagram must work for keyboard users, and the selected node explanation must be available as ordinary text.

## Record model and branch rules

The working record contains a title, an integer urgency between one and five, and a boolean needsReview flag. The rule configuration contains one of three rule kinds and a priority threshold between one and five. The record title is required and limited to one hundred characters. Trim leading and trailing whitespace before evaluating, saving, or exporting. Do not allow a title consisting only of spaces to pass as a meaningful record. Use native form validation with a focused custom validity message for this case.

The review-flag rule sends the record to review when needsReview is true and to ready when it is false. The priority rule sends the record to review when urgency is greater than or equal to the threshold. Equality is intentionally included and must be tested. The always-review rule sends every record to review regardless of priority or flag. Implement these rules in one small pure function reused by the browser and the build-time test. Do not duplicate the decision logic in separate event handlers.

Every result includes a branch identifier and a plain-language reason. The priority explanation should state the actual record priority and threshold. The flag explanation should state whether review is marked. The always-review explanation should say that the route requires review for every record. The studio uses that same result to highlight the canvas, show its explanation, and prepare the test output. These three representations must never disagree.

The three recipes are Content, Operations, and Design. Content begins with a draft that needs editorial review. Operations begins with a high-priority request and a threshold of four. Design uses an always-review rule for a project handoff. A recipe query in the studio URL explicitly selects that recipe and should take precedence over any saved configuration. Opening the studio without a recipe query may restore a valid saved route. Preserve the associated recipe identity so its branch labels match the restored configuration.

## Studio layout and interaction

The studio page starts with a clear page title and short explanation, followed by a two-column workspace. The left column is a compact configuration form around three hundred and twenty pixels wide. The right contains a toolbar, the diagram, record preview, branch explanation, test result, and status feedback. The workspace should fit a desktop comfortably without forcing the editor into a narrow decorative sidebar. At tablet and mobile widths, the form and canvas stack naturally.

The form has a record-title input, priority select, review checkbox, rule select, and a conditional threshold select. The threshold field is visible only for the priority rule. Use visible labels and native controls. The checkbox should be easy to identify as a boolean condition. The Run local test button is full width, with a concise local-only note beneath it. Editing any input updates the record preview and branch explanation immediately and clears the previous test output so it cannot be mistaken for a fresh result.

The toolbar contains Save route and Copy JSON. Saving stores the current configuration in local storage under a dedicated Relay key. It should not ask for a cloud account or claim that a workflow has been published. The visible status must distinguish a successful local save from unavailable storage. Parse saved values defensively and reject malformed rule names, priorities, thresholds, or titles. Retain a valid saved recipe association when restoring branch labels.

Running the local test validates the form, evaluates the pure rule, and displays a formatted JSON output with the record title, human-readable route name, reason, and localOnly set to true. The result should be rendered through textContent, not HTML insertion. This prevents entered text from becoming markup. The operation does not create any external side effect. A short node response makes the selected output easy to locate visually.

Copy JSON prepares the configuration, reveals a labeled read-only text area, and attempts to write the same text to the clipboard. On success, announce that Route JSON was copied. On failure, focus and select the text area and explain that the visitor can copy it manually. The visible fallback is useful even when clipboard access is blocked. Do not hide the only copyable representation or report success before the browser API succeeds.

## Recipe library and scenario pages

Preserve the existing stories.html route as a complete recipe library. It is not a dead redirect or a collection of placeholder cards. Each of the three recipe rows has a small original diagram symbol, team label, title, concise description, fuller explanation, and a working link into the studio with the correct recipe query. The page then introduces two fictional scenario studies. These use the existing routes stories/lantern.html and stories/morrow.html, preserving links that may already exist elsewhere in the collection.

Lantern is an editorial review scenario. Explain how a working draft can be ready for internal sharing while still needing another set of eyes. The useful change is an explicit review flag attached to the record. Show the same interactive diagram and explain both possible outcomes. Do not claim that a real editorial team adopted the product or saved a measured amount of time. The study is a concrete design example, not a testimonial.

Morrow is a request-triage scenario. Explain how a priority threshold makes an incoming request’s path explicit. Show that a priority equal to four belongs in the review branch when the threshold is four. Include the local reason and a link to try the Operations recipe. The diagram’s labels must initialize to the Operations recipe rather than being overwritten by the default Content recipe during page load. Both scenario pages need substantial prose, a visual explanation, a useful takeaway, and a complete shared footer.

## Guide and pricing model

Preserve about.html as the working guide. Its page title introduces the relationship between the rule and result. A compact section navigation links to records, rules, testing, saving, and local boundaries. The main article explains each part with concrete examples, including threshold equality and the distinction between live preview and an explicitly run test. Keep the guide’s body text around sixteen pixels on desktop with generous line height. Code examples can use a small monospace block, but ordinary paragraphs should stay in the interface family.

The guide must explain saved-route precedence: a specific recipe query starts from that recipe, while a plain studio visit restores a valid saved configuration. Explain storage and clipboard fallbacks. Make clear that the review output is not a real notification and the ready output does not publish or move content. The guide should describe the actual implementation and avoid speculative integrations, enterprise controls, or unsupported security promises.

Add pricing.html as an illustrative pricing model. It contains a local range slider, a count of example operations, and a calculated example monthly total. The fictional model begins at twelve dollars for one thousand operations and adds four-tenths of one cent for each operation above that allowance. The slider ranges from one thousand to twenty thousand in steps of five hundred. Update the count and total immediately as it moves. The mathematical relationship should be obvious from nearby copy.

Label the page and result explicitly as illustrative. There is no checkout, subscription, payment, billing, or tracked usage. The only product action leads to the local studio. Include a short FAQ explaining the example operation unit, confirming that local tests do not create a bill, and stating that the fictional plan cannot be purchased. This gives the pricing page substance without inventing an operating commercial service.

## Responsive and accessibility requirements

At around nine hundred pixels, stack the marketing hero and keep the diagram at a comfortable maximum width. Reduce the editor’s left column somewhat before the workspace stacks at approximately seven hundred pixels. The record preview and reason can stack earlier to avoid narrow text columns. On a phone, keep node circles large enough to recognize, shorten supporting labels, and preserve the input-decision-output relationship. Do not shrink the entire desktop canvas into unreadable text.

At very narrow widths, use a real menu button that exposes the existing navigation. Escape closes it and restores focus. The header links should not overflow behind the logo. Footer navigation wraps or stacks. Recipe rows become single-column compositions. The guide’s sticky navigation becomes an ordinary wrapping list. Pricing controls and result stack. All form fields use min-width zero or a constrained width so their native select content cannot force horizontal document overflow.

Include a skip link, one main landmark, semantic navigation, meaningful headings, labeled forms, native details elements, and visible keyboard focus. Buttons that represent selections use aria-pressed. Node buttons have readable text labels. SVG icons and connector graphics are decorative and hidden from assistive technology. Use live regions for concise state feedback, not for constantly re-announcing the entire page. Avoid invalid ARIA attributes on generic decorative containers.

## Delivery, compatibility, and verification

Export buildRelay from scripts/relay/build.mjs and return an object containing prompt. Generate seven complete pages: index.html, studio.html, stories.html, about.html, pricing.html, stories/lantern.html, and stories/morrow.html. Keep source in scripts/relay, output in public/demos/relay, and the distributed prompt in public/prompts/relay.md. The assembled prompt must include the exact recipe data, responsive CSS, and actual JavaScript under the heading Reference interaction handler. Preserve nested-page asset paths with the appropriate relative prefix.

Deliver a local licensed Geist font, its license, an original connected-workflow hero.webp thumbnail, optional source SVG, and accurate credits. Do not emit a favicon or public platform branding. Do not edit shared application files, catalogs, validators, or other categories. The parent task owns collection integration and deployment. The build should be reproducible from the owned source and should not rely on an expiring remote asset URL.

Run scoped lint and meaningful rule assertions. Test true and false review flags, priority above and below threshold, equality at the boundary, and always-review behavior. In the browser, change the rule and inputs, inspect the active path and explanation, run a local test, save and restore a route, switch recipes, and copy JSON. Check the price calculator arithmetic and all old routes. Inspect the desktop composition and a narrow layout, measure document overflow, and report only observed results. A successful clipboard status is evidence of that API result; an untested external action must never be claimed.

The finished site should make a small workflow feel understandable and worth exploring. Its visual ambition comes from the diagram, the rhythm of the product story, and the clarity of each state. Its usefulness comes from one coherent record model and a decision function that the visitor can inspect, change, and test safely within the browser.


## Exact recipe definitions

```javascript
export const recipes = [
  {
    id: 'content',
    name: 'A considered content review',
    team: 'Content',
    trigger: 'Draft received',
    review: 'Editorial review',
    ready: 'Ready to share',
    rule: 'review',
    threshold: 3,
    title: 'Autumn studio notes',
    urgency: 2,
    needsReview: true,
    description:
      'Give a draft a clear review path before it becomes a handoff.',
    detail:
      'Collect the working title and review flag, then route the draft to an editor when another look is needed. A cleared draft moves to the ready branch.',
  },
  {
    id: 'requests',
    name: 'A useful request triage',
    team: 'Operations',
    trigger: 'Request received',
    review: 'Priority review',
    ready: 'Standard queue',
    rule: 'priority',
    threshold: 4,
    title: 'Update the project guide',
    urgency: 4,
    needsReview: false,
    description:
      'Keep urgent requests visible without treating every request as urgent.',
    detail:
      'Compare the request priority with an explicit threshold. Higher-priority work goes to review; the remaining work follows the standard path.',
  },
  {
    id: 'handoff',
    name: 'A clear project handoff',
    team: 'Design',
    trigger: 'Work prepared',
    review: 'Final review',
    ready: 'Handoff ready',
    rule: 'always',
    threshold: 3,
    title: 'Northstar identity files',
    urgency: 3,
    needsReview: true,
    description: 'Make one deliberate review part of the handoff.',
    detail:
      'Use a required-review rule before passing work on. The local test explains which route is chosen and why, without sending files or messages.',
  },
];
export const nodeDescriptions = {
  input:
    'The record that starts the route. Give it a title, priority and review flag.',
  rule: 'The decision point. Choose a review flag, a priority threshold or a required review.',
  review:
    'The review branch keeps the next decision visible. No message is sent.',
  ready:
    'The alternative branch prepares a clear local handoff. Nothing is published.',
};
export function chooseRoute(record, rule, threshold) {
  if (rule === 'always')
    return {
      branch: 'review',
      reason: 'This route requires a review for every record.',
    };
  if (rule === 'priority')
    return record.urgency >= threshold
      ? {
          branch: 'review',
          reason: `Priority ${record.urgency} meets the threshold of ${threshold}.`,
        }
      : {
          branch: 'ready',
          reason: `Priority ${record.urgency} is below the threshold of ${threshold}.`,
        };
  return record.needsReview
    ? { branch: 'review', reason: 'The record is marked as needing review.' }
    : {
        branch: 'ready',
        reason: 'The record is not marked as needing review.',
      };
}

```

## Exact responsive CSS

```css
@font-face {
  font-family: Geist;
  src: url('assets/geist-variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
* {
  box-sizing: border-box;
}
html {
  --paper: #f5f7fb;
  --ink: #162748;
  --muted: #52627c;
  --blue: #2856d8;
  --line: #ccd7ed;
  --panel: #e8eefb;
  --coral: #ff9a82;
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font:
    16px/1.6 Geist,
    Arial,
    sans-serif;
}
button,
input,
select,
textarea {
  font: inherit;
}
button {
  color: inherit;
  cursor: pointer;
}
a {
  color: inherit;
  text-underline-offset: 5px;
}
button,
a,
input,
select,
textarea,
summary {
  outline-offset: 5px;
}
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--blue);
}
[hidden] {
  display: none !important;
}
.skip {
  position: fixed;
  top: -90px;
  left: 20px;
  background: white;
  padding: 12px;
  z-index: 30;
}
.skip:focus {
  top: 10px;
}
.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 0 6.25%;
  background: #fff;
  border-bottom: 1px solid var(--line);
  position: relative;
  z-index: 10;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 28px;
  font-weight: 650;
  letter-spacing: -1.3px;
}
.brand svg {
  color: var(--blue);
}
.header nav {
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 13px;
}
.header nav a {
  text-decoration: none;
}
.header nav .nav-cta {
  background: var(--blue);
  color: white;
  padding: 11px 18px;
  border-radius: 6px;
}
.menu-toggle {
  display: none;
}
.hero {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 6%;
  align-items: center;
  padding: 95px 6.25% 80px;
  background: linear-gradient(150deg, #f5f7fb, #e7edfc);
}
.hero h1 {
  font-size: clamp(46px, 5.1vw, 72px);
  line-height: 1.08;
  letter-spacing: -0.055em;
  margin: 0 0 25px;
  font-weight: 630;
}
.hero h1 span {
  color: var(--blue);
}
.hero p {
  font-size: 18px;
  color: var(--muted);
  max-width: 430px;
  margin: 0 0 28px;
}
.eyebrow {
  font-size: 11px;
  letter-spacing: 0.09em;
  color: var(--blue);
  margin-bottom: 25px;
}
.primary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background: var(--blue);
  color: #fff;
  padding: 13px 22px;
  border: 0;
  border-radius: 6px;
  min-height: 48px;
  text-decoration: none;
  font-weight: 500;
}
.primary:hover svg {
  transform: translateX(3px);
}
svg {
  flex-shrink: 0;
  transition: transform 0.2s;
}
.actions {
  display: flex;
  gap: 22px;
  align-items: center;
  flex-wrap: wrap;
}
.text-link {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  text-decoration: none;
  min-height: 44px;
  font-size: 14px;
}
.route-frame {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 20px 70px #24469414;
  overflow: hidden;
  min-width: 0;
}
.route-toolbar {
  padding: 15px 22px;
  border-bottom: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 11px;
}
.route-toolbar span:last-child {
  color: var(--muted);
}
.route-canvas {
  position: relative;
  width: 100%;
  aspect-ratio: 10/7;
  background-image: radial-gradient(#b9c9ea 1px, transparent 1px);
  background-size: 18px 18px;
  min-height: 320px;
}
.route-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.route-lines path {
  fill: none;
  stroke: #b5c7ed;
  stroke-width: 3;
  stroke-dasharray: 4 6;
}
.route-canvas[data-branch='review'] .line-review,
.route-canvas[data-branch='ready'] .line-ready {
  stroke: var(--blue);
  stroke-width: 4;
  stroke-dasharray: none;
}
.node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  transform: translate(-50%, -32px);
  width: 112px;
  border: 0;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
.node-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 18px #1a42a122;
  background: var(--blue);
  color: white;
  border: 6px solid #e5ebfc;
}
.node-rule .node-icon {
  background: #fff;
  color: var(--blue);
  border-color: var(--coral);
  transform: rotate(45deg);
  border-radius: 18px;
}
.node-rule svg {
  transform: rotate(-45deg);
}
.node-review .node-icon {
  background: #143b61;
  border-color: #cbe2ee;
}
.node-ready .node-icon {
  background: #26755b;
  border-color: #d4eade;
}
.node[aria-pressed='true'] .node-icon {
  outline: 2px solid var(--blue);
  outline-offset: 4px;
}
.node strong {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  max-width: 110px;
}
.node small {
  font-size: 10px;
  color: var(--muted);
}
.branch-label {
  position: absolute;
  font-size: 10px;
  color: var(--muted);
  left: 58%;
  padding: 2px 6px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 4px;
}
.branch-label.yes {
  top: 23%;
}
.branch-label.no {
  top: 72%;
}
.node-info {
  padding: 17px 22px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  color: var(--muted);
  min-height: 76px;
}
.trust-rail {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 28px 6.25%;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
}
.trust-rail span {
  display: flex;
  gap: 10px;
  align-items: center;
}
.section {
  padding: 90px 6.25%;
}
.section-heading {
  max-width: 760px;
  margin: 0 auto 45px;
  text-align: center;
}
.section-heading h2 {
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 550;
  letter-spacing: -0.045em;
  line-height: 1.12;
  margin: 0 0 22px;
}
.section-heading p {
  color: var(--muted);
  max-width: 620px;
  margin: auto;
  font-size: 17px;
}
.recipe-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 35px;
  flex-wrap: wrap;
}
.recipe-tabs button {
  background: #fff;
  border: 1px solid var(--line);
  padding: 13px 24px;
  border-radius: 6px;
  font-size: 14px;
}
.recipe-tabs button[aria-pressed='true'] {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}
.recipe-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: center;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 45px;
}
.recipe-feature h3 {
  font-size: 33px;
  line-height: 1.15;
  letter-spacing: -0.035em;
  font-weight: 550;
  margin: 0 0 20px;
}
.recipe-feature p {
  color: var(--muted);
}
.record-card {
  background: var(--panel);
  padding: 30px;
  border-radius: 9px;
  transform: rotate(-3deg);
  box-shadow: 0 18px 45px #1c448215;
}
.record-card > span {
  font-size: 11px;
  color: var(--blue);
}
.record-card h3 {
  font-size: 24px;
  line-height: 1.2;
  margin: 15px 0 25px;
}
.record-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid #becdec;
  padding: 14px 0;
  font-size: 12px;
}
.record-row b {
  font-weight: 500;
}
.workflow-story {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 10%;
  align-items: start;
  background: #edf2fc;
}
.workflow-intro {
  position: sticky;
  top: 35px;
}
.workflow-intro h2 {
  font-size: 43px;
  line-height: 1.13;
  letter-spacing: -0.04em;
  font-weight: 550;
  margin: 0 0 22px;
}
.workflow-intro p {
  color: var(--muted);
}
.story-panels {
  display: grid;
  gap: 30px;
}
.story-panel {
  padding: 32px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
}
.story-panel h3 {
  font-size: 27px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0 0 15px;
  font-weight: 550;
}
.story-panel p {
  font-size: 14px;
  color: var(--muted);
}
.field-lines {
  display: grid;
  gap: 12px;
  margin: 28px 0 5px;
}
.field-lines > div {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--paper);
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 5px;
  font-size: 12px;
}
.field-lines span {
  margin-left: auto;
  color: var(--blue);
}
.route-preview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 35px 15px;
}
.route-preview i {
  height: 4px;
  flex: 1;
  background: var(--line);
}
.route-preview .mini-circle {
  display: grid;
  place-items: center;
  background: var(--blue);
  color: white;
  min-width: 55px;
  height: 55px;
  border-radius: 50%;
}
.route-preview .mini-circle:last-child {
  background: #26755b;
}
.output-paper {
  padding: 24px;
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: 6px;
  margin-top: 25px;
  font:
    12px/1.8 ui-monospace,
    monospace;
  color: #244d83;
  white-space: pre-wrap;
}
.faq {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 10%;
}
.faq h2 {
  font-size: 42px;
  line-height: 1.1;
  font-weight: 550;
  letter-spacing: -0.04em;
  margin: 0;
}
.faq details {
  border-top: 1px solid var(--line);
  padding: 20px 0;
}
.faq summary {
  cursor: pointer;
  font-weight: 500;
}
.faq p {
  color: var(--muted);
  font-size: 14px;
}
.closing {
  padding: 80px 6.25%;
  text-align: center;
  background: var(--blue);
  color: #fff;
}
.closing h2 {
  font-size: clamp(40px, 5vw, 65px);
  line-height: 1.1;
  letter-spacing: -0.045em;
  font-weight: 550;
  margin: 0 0 30px;
}
.closing .primary {
  background: #fff;
  color: var(--blue);
}
footer {
  padding: 35px 6.25%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 30px;
  border-top: 1px solid var(--line);
  background: #fff;
}
footer nav {
  display: flex;
  gap: 24px;
  font-size: 13px;
}
footer p {
  font-size: 11px;
  color: var(--muted);
  max-width: 350px;
  margin: 0;
}
.page-intro {
  padding: 60px 6.25% 35px;
  max-width: 940px;
}
.page-intro h1 {
  font-size: clamp(44px, 5vw, 68px);
  line-height: 1.08;
  font-weight: 570;
  letter-spacing: -0.05em;
  margin: 0 0 25px;
}
.page-intro p {
  font-size: 17px;
  color: var(--muted);
  max-width: 620px;
}
.studio-layout {
  padding: 0 4% 65px;
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 25px;
}
.route-form {
  padding: 26px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
  align-self: start;
}
.route-form h2 {
  font-size: 20px;
  font-weight: 550;
  letter-spacing: -0.025em;
  margin: 0 0 25px;
}
.route-form label:not(.check-label) {
  display: grid;
  gap: 8px;
  font-size: 12px;
  margin-bottom: 22px;
}
.route-form input:not([type='checkbox']),
.route-form select {
  width: 100%;
  min-width: 0;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 5px;
  padding: 11px;
}
.check-label {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 28px;
  font-size: 12px;
}
.check-label input {
  accent-color: var(--blue);
  width: 17px;
  height: 17px;
}
.route-form .primary {
  width: 100%;
  margin-top: 8px;
}
.secondary {
  border: 1px solid var(--line);
  padding: 11px 17px;
  border-radius: 5px;
  background: #fff;
  font-size: 13px;
  min-height: 44px;
}
.studio-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  margin-bottom: 18px;
  font-size: 12px;
}
.studio-toolbar > div {
  display: flex;
  gap: 10px;
}
.studio-main {
  min-width: 0;
}
.studio-main .route-canvas {
  max-height: 460px;
}
.studio-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 22px;
}
.studio-details h3 {
  font-size: 13px;
  margin: 0 0 12px;
  font-weight: 550;
}
.studio-details pre {
  margin: 0;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 20px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font:
    12px/1.75 ui-monospace,
    monospace;
  min-height: 135px;
}
.studio-details .reason {
  background: var(--panel);
  border-radius: 6px;
  padding: 20px;
  color: var(--muted);
  font-size: 13px;
}
.studio-details .reason p {
  margin: 0;
}
.run-status {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  min-height: 20px;
}
.route-export {
  margin-top: 18px;
  width: 100%;
  min-height: 190px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 6px;
  font:
    12px/1.7 ui-monospace,
    monospace;
}
.recipe-list {
  padding: 0 6.25% 75px;
  display: grid;
  gap: 25px;
}
.recipe-row {
  display: grid;
  grid-template-columns: 180px 1fr auto;
  gap: 35px;
  align-items: center;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 10px;
  padding: 30px;
}
.recipe-symbol {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 7px;
  background: var(--panel);
}
.recipe-symbol i {
  width: 45px;
  height: 45px;
  background: var(--blue);
  border: 6px solid #ccd9f7;
  border-radius: 50%;
}
.recipe-symbol i:nth-child(2) {
  background: var(--coral);
  border-color: #ffe0d7;
}
.recipe-row h2 {
  font-size: 27px;
  font-weight: 550;
  letter-spacing: -0.035em;
  line-height: 1.2;
  margin: 10px 0;
}
.recipe-row p {
  font-size: 14px;
  color: var(--muted);
  max-width: 580px;
}
.recipe-row > div > span {
  font-size: 11px;
  color: var(--blue);
}
.guide {
  padding: 20px 6.25% 70px;
  display: grid;
  grid-template-columns: 210px minmax(0, 800px);
  gap: 8%;
  justify-content: space-between;
}
.guide nav {
  display: grid;
  gap: 15px;
  align-self: start;
  position: sticky;
  top: 30px;
  font-size: 13px;
}
.guide article h2 {
  font-size: 30px;
  font-weight: 550;
  letter-spacing: -0.035em;
  line-height: 1.2;
  margin: 35px 0 20px;
}
.guide article p,
.guide article li {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
}
.guide article pre {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 24px;
  border-radius: 7px;
  font:
    13px/1.8 ui-monospace,
    monospace;
  white-space: pre-wrap;
}
.price-layout {
  padding: 0 6.25% 75px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 8%;
}
.price-controls {
  padding: 35px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
}
.price-controls label {
  font-size: 16px;
  font-weight: 550;
  display: block;
  margin-bottom: 22px;
}
.price-controls input {
  width: 100%;
  accent-color: var(--blue);
}
.price-controls output {
  display: block;
  font-size: 13px;
  margin-top: 18px;
  color: var(--muted);
}
.price-controls p {
  font-size: 14px;
  color: var(--muted);
  margin-top: 30px;
}
.price-result {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 35px;
  background: var(--panel);
}
.price-result span {
  font-size: 13px;
}
.price-result strong {
  display: block;
  font-size: 65px;
  font-weight: 500;
  letter-spacing: -0.05em;
  margin: 20px 0;
}
.price-result p {
  color: var(--muted);
  font-size: 13px;
}
.case-body {
  max-width: 820px;
  padding: 0 6.25% 70px;
  margin: auto;
}
.case-body h2 {
  font-size: 30px;
  line-height: 1.2;
  font-weight: 550;
  letter-spacing: -0.03em;
  margin-top: 45px;
}
.case-body p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--muted);
}
.case-body .route-frame {
  margin-top: 40px;
}
.case-body .primary {
  margin-top: 25px;
}
@supports (animation-timeline: view()) {
  .story-panel {
    animation: arrive both;
    animation-timeline: view();
    animation-range: entry 0% cover 25%;
  }
  @keyframes arrive {
    from {
      transform: translateY(35px);
    }
    to {
      transform: translateY(0);
    }
  }
}
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 5%;
  }
  .hero > div:first-child {
    max-width: 650px;
  }
  .hero h1 {
    font-size: 58px;
  }
  .hero p {
    max-width: 560px;
  }
  .route-frame {
    max-width: 720px;
    width: 100%;
    margin: auto;
  }
  .section {
    padding: 65px 5%;
  }
  .recipe-feature {
    padding: 30px;
    gap: 5%;
  }
  .workflow-story {
    gap: 5%;
  }
  .studio-layout {
    grid-template-columns: 270px minmax(0, 1fr);
    padding-inline: 3%;
    gap: 18px;
  }
  .studio-details {
    grid-template-columns: 1fr;
  }
  .studio-layout .node strong {
    font-size: 10px;
    max-width: 85px;
  }
  .studio-layout .node-icon {
    width: 54px;
    height: 54px;
  }
  .studio-layout .node {
    width: 90px;
    transform: translate(-50%, -27px);
  }
  .recipe-row {
    grid-template-columns: 125px 1fr;
    gap: 25px;
  }
  .recipe-row > a {
    grid-column: 2;
    justify-self: start;
  }
  .recipe-symbol {
    height: 125px;
  }
  .guide {
    grid-template-columns: 160px 1fr;
    gap: 5%;
  }
  .price-layout {
    gap: 4%;
  }
  .header {
    padding-inline: 5%;
  }
  .header nav {
    gap: 20px;
  }
}
@media (max-width: 700px) {
  .header {
    height: 70px;
  }
  .header nav {
    gap: 16px;
    font-size: 12px;
  }
  .header .nav-cta {
    display: none;
  }
  .hero {
    padding: 40px 5%;
  }
  .hero h1 {
    font-size: clamp(42px, 10vw, 58px);
  }
  .hero p {
    font-size: 16px;
  }
  .route-canvas {
    min-height: 300px;
  }
  .node {
    width: 88px;
  }
  .node strong {
    font-size: 10px;
    max-width: 85px;
  }
  .node-icon {
    width: 58px;
    height: 58px;
  }
  .branch-label {
    font-size: 9px;
    left: 54%;
  }
  .route-toolbar {
    padding: 13px 16px;
  }
  .node-info {
    padding: 15px 16px;
    font-size: 11px;
  }
  .trust-rail {
    padding: 24px 5%;
    gap: 20px;
    font-size: 11px;
  }
  .recipe-feature {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .record-card {
    transform: none;
  }
  .workflow-story {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .workflow-intro {
    position: static;
  }
  .workflow-intro h2 {
    font-size: 38px;
  }
  .faq {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .faq h2 {
    font-size: 38px;
  }
  .section-heading h2 {
    font-size: 36px;
  }
  .section-heading p {
    font-size: 16px;
  }
  .story-panel {
    padding: 25px;
  }
  .studio-layout {
    grid-template-columns: 1fr;
    padding: 0 5% 50px;
  }
  .route-form {
    padding: 24px;
  }
  .studio-toolbar {
    margin-top: 10px;
  }
  .studio-layout .route-canvas {
    min-height: 310px;
  }
  .studio-layout .node {
    transform: translate(-50%, -27px);
  }
  .recipe-list {
    padding-inline: 5%;
  }
  .recipe-row {
    grid-template-columns: 1fr;
    padding: 25px;
    gap: 22px;
  }
  .recipe-row > a {
    grid-column: 1;
  }
  .recipe-symbol {
    max-width: 160px;
    width: 100%;
  }
  .guide {
    grid-template-columns: 1fr;
    padding: 0 5% 50px;
    gap: 25px;
  }
  .guide nav {
    position: static;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .price-layout {
    grid-template-columns: 1fr;
    padding-inline: 5%;
    gap: 25px;
  }
  .page-intro {
    padding: 40px 5% 28px;
  }
  .page-intro h1 {
    font-size: 43px;
  }
  .case-body {
    padding-inline: 5%;
  }
  footer {
    padding: 30px 5%;
    flex-direction: column;
  }
  .closing {
    padding: 60px 5%;
  }
  .recipe-tabs button {
    padding: 11px 15px;
    font-size: 12px;
  }
}
@media (max-width: 380px) {
  .header nav {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 25px;
    border-bottom: 1px solid var(--line);
  }
  .header nav.open {
    display: grid;
  }
  .menu-toggle {
    display: block;
    background: white;
    border: 1px solid var(--line);
    padding: 8px 12px;
    border-radius: 5px;
  }
  .node-icon {
    width: 50px;
    height: 50px;
    border-width: 5px;
  }
  .node {
    transform: translate(-50%, -25px);
    width: 76px;
  }
  .node strong {
    font-size: 10px;
    max-width: 75px;
  }
  .branch-label {
    display: none;
  }
  .studio-toolbar {
    align-items: start;
    gap: 10px;
    flex-direction: column;
  }
  .route-toolbar {
    font-size: 10px;
  }
  .route-form label:not(.check-label) {
    font-size: 13px;
  }
  .hero h1 {
    font-size: 42px;
  }
  footer nav {
    gap: 17px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}

.studio-toolbar button {
  white-space: nowrap;
}
@media (max-width: 580px) {
  .studio-toolbar {
    flex-wrap: wrap;
  }
  .studio-toolbar > span {
    width: 100%;
  }
}

```

## Reference interaction handler

```javascript
function chooseRoute(record, rule, threshold) {
  if (rule === 'always')
    return {
      branch: 'review',
      reason: 'This route requires a review for every record.',
    };
  if (rule === 'priority')
    return record.urgency >= threshold
      ? {
          branch: 'review',
          reason: `Priority ${record.urgency} meets the threshold of ${threshold}.`,
        }
      : {
          branch: 'ready',
          reason: `Priority ${record.urgency} is below the threshold of ${threshold}.`,
        };
  return record.needsReview
    ? { branch: 'review', reason: 'The record is marked as needing review.' }
    : {
        branch: 'ready',
        reason: 'The record is not marked as needing review.',
      };
}
const data = JSON.parse(document.getElementById('relay-data').textContent);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch {
    return null;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};
let current =
  data.recipes.find((r) => r.id === data.initialRecipe) || data.recipes[0];
const requested = new URLSearchParams(location.search).get('recipe');
if (data.recipes.some((r) => r.id === requested))
  current = data.recipes.find((r) => r.id === requested);
const labelNodes = (recipe) => {
  document
    .querySelectorAll('[data-node-label="input"]')
    .forEach((n) => (n.textContent = recipe.trigger));
  document
    .querySelectorAll('[data-node-label="review"]')
    .forEach((n) => (n.textContent = recipe.review));
  document
    .querySelectorAll('[data-node-label="ready"]')
    .forEach((n) => (n.textContent = recipe.ready));
};
labelNodes(current);
document.querySelectorAll('[data-node]').forEach((button) =>
  button.addEventListener('click', () => {
    document
      .querySelectorAll('[data-node]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    document.getElementById('node-description').textContent =
      data.nodeDescriptions[button.dataset.node];
  }),
);
document.querySelectorAll('[data-recipe-tab]').forEach((button) =>
  button.addEventListener('click', () => {
    const recipe = data.recipes.find((r) => r.id === button.dataset.recipeTab);
    current = recipe;
    labelNodes(recipe);
    document
      .querySelectorAll('[data-recipe-tab]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    document.getElementById('recipe-title').textContent = recipe.name;
    document.getElementById('recipe-copy').textContent = recipe.detail;
    document.getElementById('open-recipe').href =
      'studio.html?recipe=' + recipe.id;
    document.getElementById('example-record-team').textContent =
      'EXAMPLE RECORD / ' + recipe.team.toUpperCase();
    document.getElementById('example-record-title').textContent = recipe.title;
    document.getElementById('example-record-review').textContent =
      recipe.needsReview ? 'Yes' : 'No';
    document.getElementById('example-record-priority').textContent =
      recipe.urgency + ' of 5';
    const outcome = chooseRoute(recipe, recipe.rule, recipe.threshold);
    document.getElementById('example-record-route').textContent =
      outcome.branch === 'review' ? recipe.review : recipe.ready;
  }),
);
const form = document.getElementById('route-form');
if (form) {
  const title = document.getElementById('record-title');
  const urgency = document.getElementById('record-priority');
  const review = document.getElementById('record-review');
  const rule = document.getElementById('rule-kind');
  const threshold = document.getElementById('rule-threshold');
  const saved = read('relay-route-v2');
  const seed =
    !requested &&
    saved &&
    typeof saved.title === 'string' &&
    ['review', 'priority', 'always'].includes(saved.rule) &&
    Number.isInteger(saved.urgency) &&
    saved.urgency >= 1 &&
    saved.urgency <= 5 &&
    Number.isInteger(saved.threshold) &&
    saved.threshold >= 1 &&
    saved.threshold <= 5
      ? saved
      : current;
  if (seed === saved && data.recipes.some((r) => r.id === saved.recipe)) {
    current = data.recipes.find((r) => r.id === saved.recipe);
    labelNodes(current);
  }
  title.value = seed.title.slice(0, 100);
  urgency.value = String(seed.urgency);
  review.checked = seed.needsReview === true;
  rule.value = seed.rule;
  threshold.value = String(seed.threshold);
  const validTitle = () => {
    title.setCustomValidity(title.value.trim() ? '' : 'Add a record title.');
    return form.reportValidity();
  };
  const configuration = () => ({
    recipe: current.id,
    title: title.value.trim(),
    urgency: Number(urgency.value),
    needsReview: review.checked,
    rule: rule.value,
    threshold: Number(threshold.value),
  });
  function reflect() {
    const config = configuration();
    const result = chooseRoute(config, config.rule, config.threshold);
    document.querySelector('.route-canvas').dataset.branch = result.branch;
    document.getElementById('route-reason').textContent = result.reason;
    document.getElementById('threshold-label').hidden =
      config.rule !== 'priority';
    document.getElementById('record-preview').textContent = JSON.stringify(
      {
        title: config.title,
        priority: config.urgency,
        needsReview: config.needsReview,
      },
      null,
      2,
    );
    return { config, result };
  }
  form.addEventListener('input', () => {
    title.setCustomValidity('');
    reflect();
    document.getElementById('run-result').textContent =
      'Run a local test to see the updated result.';
    document.getElementById('run-status').textContent =
      'Configuration changed.';
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validTitle()) return;
    const { config, result } = reflect();
    const output = {
      record: config.title,
      route: result.branch === 'review' ? current.review : current.ready,
      reason: result.reason,
      localOnly: true,
    };
    document.getElementById('run-result').textContent = JSON.stringify(
      output,
      null,
      2,
    );
    document.getElementById('run-status').textContent =
      'Local test complete. No external action occurred.';
    if (!reduced.matches)
      document
        .querySelector(`[data-node="${result.branch}"] .node-icon`)
        .animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' },
          ],
          { duration: 500 },
        );
  });
  document.getElementById('save-route').addEventListener('click', () => {
    if (!validTitle()) return;
    const { config } = reflect();
    const saved = write('relay-route-v2', config);
    document.getElementById('run-status').textContent = saved
      ? 'Route saved in this browser.'
      : 'Storage unavailable. Keep this page open to retain the route.';
  });
  document
    .getElementById('export-route')
    .addEventListener('click', async () => {
      if (!validTitle()) return;
      const text = JSON.stringify(configuration(), null, 2);
      const fallback = document.getElementById('route-export');
      fallback.hidden = false;
      fallback.value = text;
      try {
        await navigator.clipboard.writeText(text);
        document.getElementById('run-status').textContent =
          'Route JSON copied.';
      } catch {
        fallback.focus();
        fallback.select();
        document.getElementById('run-status').textContent =
          'Select and copy the route JSON below.';
      }
    });
  reflect();
}
const operations = document.getElementById('operations');
operations?.addEventListener('input', () => {
  const count = Number(operations.value);
  document.getElementById('operation-count').textContent =
    count.toLocaleString() + ' local test operations';
  document.getElementById('price-total').textContent =
    '$' + (12 + Math.max(0, count - 1000) * 0.004).toFixed(2);
});
const menu = document.getElementById('menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  document.getElementById('main-nav').classList.toggle('open', open);
  menu.textContent = open ? 'Close' : 'Menu';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.click();
    menu.focus();
  }
});

```
