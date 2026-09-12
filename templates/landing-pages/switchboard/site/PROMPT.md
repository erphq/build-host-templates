# Switchboard: a complete operational SaaS and local release workspace

Build Switchboard, an original release-planning software concept, as three complete standalone pages: index.html for product-led marketing, workspace.html for a working local task board, and release.html for readiness decisions and a portable handoff. The site must be substantially detailed, with actual product-interface construction, working state transitions, and complete supporting content. It must not be a short photo-and-text landing page. The useful local workflow is the product proof: add work, assign an owner, move it through stages, review the open scope, record release gates, and export the whole context.

## Reference research and original interpretation

The discovery source is https://saaspo.com/pages/linear-landing-page-v4. The actual live references are https://linear.app/homepage and https://linear.app/plan. In the research browser, https://linear.app/ initially resolved to a login surface; the visible Learn more link led to the public homepage. Do not treat the account login as the marketing reference. The public homepage and planning page were both visited and visually inspected, with live DOM measurements and semantic content inspection.

At a 1471×847 desktop viewport, Linear’s headline measured 64px with 64px line height, at approximately y272. Its content rail was roughly 1280px wide. The homepage placed a large application view at about y526, with a real sidebar, issue detail, activity, properties, and an overlay showing the next operation. Below were a large thesis statement, three constructed feature illustrations, intake, planning, AI workflow, build/review, changelog, customer proof, a closing statement, and a dense footer. Feature headings measured 48px with 48px line height. Approximate document positions were intake y2737, planning y3972, automation y5209, build/review y6450, and closing display y9072. These are observed snapshot measurements, not promises about current future versions of the reference.

The planning page pairs a large left heading with right-side explanatory copy, then devotes most of the next screen to a detailed product canvas. Its content proceeds through project management, documents, initiatives, visual planning, progress updates, analytics, related product areas, proof, and close. The central lesson is product specificity: the reference repeatedly demonstrates real kinds of work with complete UI details and contextual controls. Its dark frame uses fine rules and careful muted text instead of large loud cards everywhere. Some demonstrations changed their visible content over time, but exact internal animation timing and library choices were not reverse-engineered.

Switchboard should use closer structural interpretation of the measured proportions and deep product storytelling, while remaining a distinct original product. Do not copy Linear’s mark, customer names, sample issues, source, photos, type files, exact copy, agent claims, or code-review implementation. Use charcoal, warm amber, and muted sage. The original domain is a small release plan, not a clone of a real issue tracker. No real external collaboration, cloud service, deployment, message sending, or AI agent is implied. Every visible action must either work locally, navigate to a real local page, or be presented as static explanatory content.

## Visual identity and shared layout

Use the locally bundled Geist Variable font for all text, with font-display swap and its SIL Open Font License. The text wordmark reads Switchboard, preceded by an original CSS mark comprising three short parallel vertical bars of different heights; the central bar is amber. This mark is a simple native graphic, not a copied external logo. Use the existing Lucide icon family through the shared icon helper and include the ISC license. Avoid mixing icon families or inventing unsupported icon names.

Set theme variables to background #111311, panel #191c19, raised #212620, primary text #e8ece4, muted #a0a79c, rules #30372e, amber #edb877, and green #b4c898. Accent colors communicate status and useful action. High priority is amber, review uses a subdued lavender, completion uses sage. Do not use color as the only distinction: every state has a text label. Maintain visible focus outlines in amber and a five-pixel outline offset. The default body uses 15px Geist with 1.6 line height. Headings are weight 500, tight tracking near -.045em, and around 1.12 line height.

The content container is max-width 1280px, centered, with 24px inner gutters. The sticky header is 76px high and uses an opaque-enough charcoal backdrop, a fine bottom rule, and subtle blur. Horizontal padding aligns it to the interior of the main rail. The wordmark is 23px. Desktop navigation has a 30px gap, 12px text, links to Workspace and Release room, a Method anchor, and a compact Open workspace action. The compact action is 36px minimum height, 11px type, and a restrained six-pixel radius. Do not add a fake login or inactive account menu.

All pages have one h1, a skip link to main, semantic header/footer navigation, a useful document title, viewport metadata, self-contained inline styles and scripts, and ordinary relative HTML links. Keep the pages functional from an extracted standalone folder. The footer includes the original-concept disclosure, browser-local limitation, planning and release links, asset credits, and a return to ProtoSites. It does not imply affiliation with the reference.

## Homepage opening and product canvas

The hero begins 92px below the header inside the main rail. A small label introduces the product as a calmer system for shipping, with one semantic accent light. The main title is “A clear plan. A confident release.” on two lines, using clamp(52px, 5.6vw, 80px), line height 1.03, and -.055em tracking. Keep it left aligned with a maximum measure around 1000px. Under it, a horizontal row places 17px supporting copy on the left and a real workspace CTA on the right. Leave 65px before the product canvas. The description communicates work, review, release, and a clear next move without unsupported performance claims.

The product demo is approximately 1232px of usable width inside the rail, at least 570px tall, bordered with #3a4136, and rounded ten pixels. Its background is #171b16. It uses a 210px sidebar and minmax(0,1fr) main pane. The sidebar is slightly darker, separated by a fine rule, and contains working local links: the sample project opens the workspace, Release room opens release.html, and status links open the workspace with recognized query filters. The low-priority local-demo disclosure sits at the bottom. These sidebar items must be links, not misleading dead navigation.

The main pane begins with a 53px toolbar, 28px horizontal padding, a project breadcrumb, and Open plan. The next region has 35px top padding, 32px horizontal padding, and a 28px title. Show “The next useful release.” with a small Release 01 context label. Under it are three real demonstration buttons: Plan, Review, and Handoff. They are a group with aria-pressed state, an amber selected underline, and matching hidden panels. The buttons use 11px text with small icons and about 23px between them.

The Plan panel is a meaningful sample of eight original work items, grouping active, review, and completed work. Every row has a stable ID, title, area where room permits, and an original owner initial. Do not use lorem ipsum, fake client content, or skeleton rectangles where real information should be readable. The Review panel shows the safe-export task with context, two concrete checks, an owner note, and an In review status. Handoff shows an original document illustration with actual Markdown-related content and a working route into the release room. Changing these sample tabs never modifies the visitor’s saved tasks. The footer labels the canvas as an interactive sample.

The default pane is Plan. The handler changes aria-pressed for every button and hidden for every panel. A newly visible pane may animate from opacity .3 and translateY(10px) to its final position in 280ms using ease-out, unless reduced motion is requested. There is no fake loading delay and no automatic task mutation. Sample visuals are semantic DOM and ordinary text. They are not inaccessible screenshots used as the only explanation of the product.

## Complete homepage narrative

After the hero, leave about 140px before a large thesis statement. It is 28–48px depending on viewport, line height 1.2, with a bright opening sentence and muted continuation. It explains that useful plans reveal importance, motion, and readiness. Follow with three principles separated by vertical rules. Each has a restrained original native diagram, a short 18px title, and 13px explanation. The diagrams represent an idea-to-owner-to-next-move sequence, four differing states, and a check. They are illustrative, not numerical data visualizations or claimed performance metrics.

The first deep feature section has an 85px top inset and a two-column heading region. The left holds a small category label and a 34–50px title about making a thought into a next step. The right holds 20px explanatory copy, 1.5 line height, and a maximum 520px measure. The feature canvas below is at least 420px tall, with a 1fr/70px/1fr grid and 40px by 65px inset. It pairs an original team request note with a specific task card, connected by a directional icon. The card has an ID, title, description, real status, owner initial, and a link that opens that exact sample item in the workspace editor. It is an operational example, not an actual message to anyone.

The second feature section explains the four-stage rhythm and contains a full miniature board with Planned, In progress, In review, and Done. Each column has two original tasks. Every task preview links to its editable workspace route. The board uses four equal columns, 16px gaps, 28px outer padding, quiet dark surfaces, and real labels. Keep metadata subdued while preserving clear task titles. A feature strip below explains board/list views, search/filtering, and local saves. Avoid invented claims about efficiency or teams using the product.

The third feature is release readiness. Its canvas has a large typographic 04 on the left and four carefully written gates on the right. The 04 is the count of deliberate checks, not a score. The grid is 1fr to 1.3fr, with 55px padding and a 90px gap. The gate rows show review, accessibility, recovery, and handoff concerns. A real CTA opens the release room. Clarify that completed work and release decisions are separate concepts.

A lower editorial section pairs an original generated photograph of a sculptural aluminum signal module with writing about attention and specificity. The image is secondary, after detailed product proof. It is assets/signal-module.webp, 1440×960, with explicit dimensions, lazy loading, and truthful alt text. A separate assets/hero.webp rendition is supplied for the library preview. Image provenance records the exact built-in generation prompt and source. The fictional object is not an existing branded product, and the image does not claim to photograph deployed hardware.

Finish with a substantive native FAQ covering actual capabilities, storage, release-check meaning, and restoring samples. Native details provide keyboard and pointer access. The final section is a large left-aligned invitation with an ordinary workspace link. Do not finish after the first product visual; the complete narrative is the intended deliverable.

## Workspace page and actual task model

The workspace opens with a 48px project heading, a short original release goal, and a New work item button. A four-part summary shows actual total scope, active work, review work, and completed work. Values must be computed from current tasks, never hard-coded as fake traction. A toolbar provides Board/List view buttons, search, and a native status selector. All toolbar labels are accessible. Board and list are two views of the same in-memory and locally saved record array.

The initial record set contains eight original items with IDs SB-101 through SB-108, covering first-run mapping, project switching, empty-state writing, narrow-screen layouts, export fallback, release notes, loading/error review, and release-checklist definition. Owners are fictional sample names. Each record has id, title, owner, status, priority, area, and notes. Valid states are Planned, In progress, In review, and Done. Valid priorities are High, Medium, and Low. Areas are Design, Engineering, Content, and Operations. Source records and handler code are appended below for exact recreation.

Task cards have a main edit button and a separate next-state action. The edit button includes ID, priority, title, area, and owner. The next-state action names the destination and cycles Planned → In progress → In review → Done → Planned. It must not silently delete completed work. Status changes update counts and both views and report storage success or failure. Buttons have meaningful accessible names including task and destination. Column Add item controls open the same editor preselected to that column’s status; the top-level add button starts Planned.

The editor uses a native dialog with labeled title, owner, area, status, priority, and context fields. The title is required and capped at 100 characters, owner required and capped at 40, notes capped at 2000. Use native selects for the enumerations. Reject whitespace-only required fields. Existing edits retain their stable ID; new items receive the next numerical SB identifier. Cap this local demo at 200 items and explain the bound if reached. Closing or canceling the dialog must leave the existing task untouched. Native Escape dismissal and focus handling should remain available.

Search is case-insensitive and checks title, owner, ID, and area. Status filtering intersects search rather than replacing it. An empty result state explains the absence and offers Clear filters. Changing views preserves search and status. Query parameters can request a known status or exact existing task; unrecognized values are ignored. The board shows all stages so its shape remains stable even when some columns have no matches. The list focuses on detail with ID, title, state, owner, and priority.

Restore sample plan opens a dedicated confirmation dialog explaining replacement of the current local tasks and release checks. Keep my plan cancels; Restore sample replaces only this concept’s known local records and gates. Do not clear unrelated browser storage. Recommend exporting before reset in the visible copy. This is a reversible local-demo management action, not deletion of external customer data.

## Release room and portable handoff

The release page has its own large heading and complete content. The first working region uses a sticky summary rail and a wider decisions column. The summary shows actual completed count, total count, open count, and number of checked gates. It must only show the plan-complete/gates-checked wording when every task is Done and all four gates are true. Otherwise it states that work and decisions remain. A checked gate is the visitor’s assertion; the application does not infer testing, compliance, or quality.

The four gates use native checkboxes with long descriptive labels and supporting sentences. Their IDs are review, access, recovery, and handoff. Checking one updates the readiness counter, summary, export preview, and saved gate record. If persistence fails, keep the page state and report it. The open-work list is derived from non-Done tasks and links directly to each task editor. If none remain, show a clear all-items-complete message while still asking the visitor to review gates.

The handoff section pairs explanatory text and export actions with a framed Markdown preview. The document includes a summary, every work item and its status/owner/priority/context, then all gates with checked or unchecked markers. Preserve open work in export; do not present a misleading clean release by omitting it. Render the preview with textContent and wrap long words. Copy uses the current serialized state. Reveal a manual readonly fallback and only report successful copying after the Clipboard API resolves. If it rejects, focus and select the manual text and explain what to do.

Download creates a text/markdown Blob, uses the fixed safe filename switchboard-release-handoff.md, triggers an anchor download, and revokes the object URL after one second. Its status says prepared for download, not a claim that the browser finished saving. Export never deploys, publishes, emails, or uploads. Finish the release page with three concise principles that distinguish observed task progress, personally checked decisions, and document portability.

## Storage, safe rendering, motion, and responsiveness

Use local keys switchboard-tasks-v1 and switchboard-gates-v1. JSON reads and writes are wrapped in try/catch. Recover only a validated bounded task array with recognized status and priority and string fields. If saved content is malformed, fall back to original samples rather than crashing. Gate recovery accepts literal true for known gate keys. User-authored strings must be escaped before inclusion in any rendered task HTML; form controls use value and Markdown uses textContent. Do not insert raw local-storage strings as HTML. A failure to persist never implies a successful save.

Motion is lightweight and motivated. IntersectionObserver at threshold .2 marks the intake, mini-board, release, and principles regions when they enter view. Intake task arrival takes .7 seconds. Board cards use .6-second entrance with successive column delays of .1, .2, and .3 seconds. Release checks use .65 seconds with comparable stagger. Entrance moves are 24px upward from reduced opacity to the final state. Observe once and then disconnect each target. Content is visible by default, so unsupported observers cannot leave blank sections. Hover raises a mini-task four pixels over .25 seconds. Reduced motion disables animation, transitions, smooth scrolling, and static angled-paper transforms where appropriate.

At 1050px, reduce product sidebar to 165px, feature gaps to 50px, and board workspace to two columns. At 750px, use 22px gutters and a 68px header, remove Method and redundant header CTA, and retain the main Workspace and Release room links. The hero title is 56px; supporting copy and CTA stack. Hide the product sidebar and keep its main content readable. Principles become visual/text rows, feature headings become single-column, intake stacks vertically, and the mini-board uses two columns. Release summary stops being sticky and the handoff becomes a one-column sequence.

At 450px, use a 44px homepage h1. Demo rows wrap ID above title and keep initials aligned at the edge. Review and Handoff samples become one column. Mini-board and working board both become single-column. Toolbar controls stack with full-width search. Workspace summaries use two columns. List rows keep ID/title and move status beneath; low-value extra columns disappear. Dialog width stays within viewport minus 32px, with a 90dvh maximum and normal overflow. Open-work release rows place status below the title. The readiness and export content remain available with no horizontal document overflow. Confirm at 390px rather than assuming the rules work.

## Build contract and verification

Export buildSwitchboard() returning {prompt}. It builds only the three owned pages under public/demos/switchboard and the matching prompt under public/prompts/switchboard.md. Bundle fonts, licenses, image renditions, credits, and provenance under its assets directory. The assembled prompt must include this full structural recipe plus the actual code under the exact heading Reference interaction handler. Keep the public local pages aligned with the source and preserve all IDs and relative links.

Verify serializer output, validation of malformed records, status counts, full task flow, creating an item, editing context, moving state, search/status intersection, Board/List consistency, reset cancellation and confirmation, persistence after reload, release gates, exact export text, copy fallback, and safe download. Visually inspect desktop hero, product panels, board, dialog, release summary, and phone reflow. Check console errors, asset resolution, and all three local routes. Do not claim external integration, production deployment, multi-user sync, or reduced-motion testing that was not actually performed. The final product should feel complete because its story, structure, and actions agree.

## Original generated asset prompt

Generate one original editorial technology still life for Switchboard, a fictional release-planning product: a small sculptural brushed aluminum switching module with three slender parallel channels and one warm amber illuminated bar, on a near-black charcoal surface. Use wide 3:2 framing, macro detail, precise machining, subtle copper reflections, directional cinematic light, and tactile material. Place the object off-centre with dark negative space. No readable text, brands, logos, interface, people, screens, or watermark. This must be an original fictional object, not a photograph of an existing branded product. Preserve the original source and provenance, then prepare the credited WebP renditions. The image is supporting editorial material; the main product interface remains actual HTML with working controls.

Ensure every hard line break in supporting prose has surrounding whitespace before hiding it at narrow breakpoints. Removing a br element through CSS must not join the end of one sentence directly to the next sentence. This applies to the homepage description, release-room introduction, and narrow workspace guidance.

## Final text contrast refinement

Functional product metadata uses a10px minimum. Muted sample-row labels and the demo footer use #91a184 on the dark product surface so their text meets normal-size contrast requirements. These values apply to both desktop and narrow product layouts.


## Reference interaction handler

```javascript
const statuses=["Planned","In progress","In review","Done"];const initialTasks=[{"id":"SB-101","title":"Map the first-run experience","owner":"Mina","status":"Done","priority":"High","area":"Design","notes":"Document the smallest useful route from arrival to a first saved project."},{"id":"SB-102","title":"Build the project switcher","owner":"Jules","status":"In progress","priority":"High","area":"Engineering","notes":"Support keyboard navigation and preserve the last open project."},{"id":"SB-103","title":"Write helpful empty states","owner":"Ari","status":"In review","priority":"Medium","area":"Content","notes":"Every empty screen should explain the next useful action."},{"id":"SB-104","title":"Check the narrow-screen layouts","owner":"Mina","status":"Planned","priority":"High","area":"Design","notes":"Verify 390px layouts, long project names, focus visibility, and touch targets."},{"id":"SB-105","title":"Add a safe export fallback","owner":"Jules","status":"In review","priority":"Medium","area":"Engineering","notes":"Keep a readable text copy available if clipboard access is denied."},{"id":"SB-106","title":"Prepare the release note","owner":"Ari","status":"Planned","priority":"Low","area":"Content","notes":"Explain the change, what it helps with, and any practical limits."},{"id":"SB-107","title":"Review loading and error states","owner":"Mina","status":"In progress","priority":"Medium","area":"Design","notes":"Make failures specific, recoverable, and free of false success messages."},{"id":"SB-108","title":"Define the release checklist","owner":"Ari","status":"Done","priority":"Medium","area":"Operations","notes":"Agree on review, accessibility, recovery, and handoff gates."}];const gates=[{"id":"review","title":"The important work has been reviewed","text":"Someone has checked the behavior and understood the remaining limits."},{"id":"access","title":"The experience works for more people","text":"Keyboard, phone layouts, labels, and contrast have been checked."},{"id":"recovery","title":"There is a way back","text":"Known failures have a recovery path and a clear owner."},{"id":"handoff","title":"The next person has the context","text":"Changes, open work, and ownership are written down."}];
function validTasks(value) {
  return (
    Array.isArray(value) &&
    value.length <= 200 &&
    value.every(
      (t) =>
        t &&
        typeof t === 'object' &&
        ['id', 'title', 'owner', 'status', 'priority', 'area', 'notes'].every(
          (k) => typeof t[k] === 'string' && t[k].length <= 2000,
        ) &&
        t.title.trim() &&
        statuses.includes(t.status) &&
        ['High', 'Medium', 'Low'].includes(t.priority),
    )
  );
}
function summary(tasks) {
  return {
    total: tasks.length,
    done: tasks.filter((t) => t.status === 'Done').length,
    review: tasks.filter((t) => t.status === 'In review').length,
    open: tasks.filter((t) => t.status !== 'Done').length,
  };
}
function releaseMarkdown(tasks, checks) {
  const s = summary(tasks);
  return (
    '# Switchboard release handoff\n\n' +
    s.done +
    ' of ' +
    s.total +
    ' items complete. ' +
    s.open +
    ' items remain open.\n\n## Work\n\n' +
    tasks
      .map(
        (t) =>
          '- [' +
          (t.status === 'Done' ? 'x' : ' ') +
          '] ' +
          t.id +
          ' · ' +
          t.title +
          ' — ' +
          t.status +
          ' · ' +
          t.owner +
          ' · ' +
          t.priority +
          '\n  ' +
          t.notes,
      )
      .join('\n') +
    '\n\n## Release gates\n\n' +
    gates
      .map((g) => '- [' + (checks[g.id] ? 'x' : ' ') + '] ' + g.title)
      .join('\n') +
    '\n\nPrepared locally with Switchboard. This file does not publish or deploy anything.\n'
  );
}
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const storage = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null');
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
};
const saved = storage.get('switchboard-tasks-v1');
let tasks = validTasks(saved) ? saved : structuredClone(initialTasks);
const storedGates = storage.get('switchboard-gates-v1');
let checks = Object.fromEntries(
  gates.map((g) => [g.id, storedGates?.[g.id] === true]),
);
const escapeTaskText = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  );
const statusClass = (status) => status.toLowerCase().replaceAll(' ', '-');
function saveTasks() {
  const ok = storage.set('switchboard-tasks-v1', tasks);
  const status = document.getElementById('save-status');
  if (status)
    status.textContent = ok
      ? 'Saved in this browser.'
      : 'Storage unavailable. Changes are kept on this page only.';
  return ok;
}
function taskCard(task) {
  return `<article class="work-card"><button class="task-open" data-edit="${escapeTaskText(task.id)}"><span class="task-id">${escapeTaskText(task.id)}<i class="priority priority-${task.priority.toLowerCase()}">${escapeTaskText(task.priority)}</i></span><h3>${escapeTaskText(task.title)}</h3><span class="task-meta"><span>${escapeTaskText(task.area)}</span><span class="owner"><i class="avatar">${escapeTaskText(task.owner.slice(0, 1))}</i>${escapeTaskText(task.owner)}</span></span></button><button class="move-task" data-move="${escapeTaskText(task.id)}" aria-label="Move ${escapeTaskText(task.title)} to ${escapeTaskText(statuses[(statuses.indexOf(task.status) + 1) % statuses.length])}">Move to ${escapeTaskText(statuses[(statuses.indexOf(task.status) + 1) % statuses.length])} →</button></article>`;
}
function matchingTasks() {
  const q = document.getElementById('task-search').value.trim().toLowerCase();
  const s = document.getElementById('status-filter').value;
  return tasks.filter(
    (t) =>
      (s === 'all' || t.status === s) &&
      [t.title, t.owner, t.id, t.area].some((v) => v.toLowerCase().includes(q)),
  );
}
function renderWorkspace() {
  const board = document.getElementById('task-board');
  if (!board) return;
  const filtered = matchingTasks();
  board.innerHTML = statuses
    .map(
      (s, n) =>
        `<section class="work-column"><h2><span class="stage-dot dot-${n}"></span>${s}<b>${filtered.filter((t) => t.status === s).length}</b></h2>${filtered
          .filter((t) => t.status === s)
          .map(taskCard)
          .join(
            '',
          )}<button class="column-add" data-add="${s}">+ Add item</button></section>`,
    )
    .join('');
  document.getElementById('task-list').innerHTML = filtered
    .map(
      (t) =>
        `<button class="list-row" data-edit="${escapeTaskText(t.id)}"><span class="task-id">${escapeTaskText(t.id)}</span><b>${escapeTaskText(t.title)}</b><span class="status ${statusClass(t.status)}">${escapeTaskText(t.status)}</span><span>${escapeTaskText(t.owner)}</span><span class="priority priority-${t.priority.toLowerCase()}">${t.priority}</span></button>`,
    )
    .join('');
  document.getElementById('no-results').hidden = filtered.length !== 0;
  const s = summary(tasks);
  document.getElementById('workspace-stats').innerHTML = [
    ['Total scope', s.total],
    ['In motion', tasks.filter((t) => t.status === 'In progress').length],
    ['Ready for review', s.review],
    ['Complete', s.done],
  ]
    .map(
      ([label, value]) =>
        `<div><span>${label}</span><strong>${value}</strong></div>`,
    )
    .join('');
}
let editingId = null;
const taskDialog = document.getElementById('task-dialog');
function openEditor(id = null, status = 'Planned') {
  editingId = id;
  const t = tasks.find((t) => t.id === id) || {
    title: '',
    owner: '',
    area: 'Design',
    status,
    priority: 'Medium',
    notes: '',
  };
  document.getElementById('dialog-title').textContent = id
    ? 'Edit work item'
    : 'New work item';
  for (const key of ['title', 'owner', 'area', 'status', 'priority', 'notes']) {
    const field = document.getElementById('task-' + key);
    field.value = t[key];
    field.setCustomValidity('');
  }
  taskDialog.showModal();
  document.getElementById('task-title').focus();
}
if (taskDialog) {
  const workspace = document.getElementById('workspace');
  const params = new URLSearchParams(location.search);
  const requestedStatus = params.get('status');
  if (statuses.includes(requestedStatus))
    document.getElementById('status-filter').value = requestedStatus;
  renderWorkspace();
  document
    .getElementById('new-task')
    .addEventListener('click', () => openEditor());
  workspace.addEventListener('click', (event) => {
    const edit = event.target.closest('[data-edit]');
    const move = event.target.closest('[data-move]');
    const add = event.target.closest('[data-add]');
    if (edit) openEditor(edit.dataset.edit);
    if (add) openEditor(null, add.dataset.add);
    if (move) {
      const task = tasks.find((t) => t.id === move.dataset.move);
      task.status =
        statuses[(statuses.indexOf(task.status) + 1) % statuses.length];
      saveTasks();
      renderWorkspace();
    }
  });
  document
    .getElementById('task-search')
    .addEventListener('input', renderWorkspace);
  document
    .getElementById('status-filter')
    .addEventListener('change', renderWorkspace);
  document.getElementById('clear-filters').addEventListener('click', () => {
    document.getElementById('task-search').value = '';
    document.getElementById('status-filter').value = 'all';
    renderWorkspace();
  });
  document.querySelectorAll('[data-view]').forEach((button) =>
    button.addEventListener('click', () => {
      document
        .querySelectorAll('[data-view]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      document.getElementById('task-board').hidden =
        button.dataset.view !== 'board';
      document.getElementById('task-list').hidden =
        button.dataset.view !== 'list';
    }),
  );
  document
    .querySelectorAll('[data-close-dialog]')
    .forEach((b) => b.addEventListener('click', () => taskDialog.close()));
  document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries(
      ['title', 'owner', 'area', 'status', 'priority', 'notes'].map((key) => [
        key,
        document.getElementById('task-' + key).value.trim(),
      ]),
    );
    if (!values.title || !values.owner) return;
    if (!editingId && tasks.length >= 200) {
      document.getElementById('save-status').textContent =
        'This local plan supports up to 200 items. Edit an existing item or export and reset.';
      taskDialog.close();
      return;
    }
    const item = {
      id:
        editingId ||
        'SB-' +
          (Math.max(
            100,
            ...tasks.map((t) => Number(t.id.replace('SB-', '')) || 0),
          ) +
            1),
      ...values,
    };
    tasks = editingId
      ? tasks.map((t) => (t.id === editingId ? item : t))
      : [...tasks, item];
    saveTasks();
    renderWorkspace();
    taskDialog.close();
  });
  for (const key of ['title', 'owner']) {
    const field = document.getElementById('task-' + key);
    field.addEventListener('input', () =>
      field.setCustomValidity(field.value.trim() ? '' : 'Add a ' + key + '.'),
    );
  }
  const reset = document.getElementById('reset-dialog');
  document
    .getElementById('reset-plan')
    .addEventListener('click', () => reset.showModal());
  document
    .getElementById('cancel-reset')
    .addEventListener('click', () => reset.close());
  document.getElementById('confirm-reset').addEventListener('click', () => {
    tasks = structuredClone(initialTasks);
    checks = Object.fromEntries(gates.map((g) => [g.id, false]));
    storage.set('switchboard-gates-v1', checks);
    saveTasks();
    renderWorkspace();
    reset.close();
  });
  if (tasks.some((t) => t.id === params.get('task')))
    openEditor(params.get('task'));
}
function renderRelease() {
  const target = document.getElementById('release-summary');
  if (!target) return;
  const s = summary(tasks);
  const count = Object.values(checks).filter(Boolean).length;
  target.innerHTML = `<div class="release-score"><strong>${s.done}<small>/ ${s.total}</small></strong><span>items complete</span></div><div class="release-signal ${s.open === 0 && count === 4 ? 'is-ready' : ''}">${s.open === 0 && count === 4 ? 'Plan complete. Gates checked.' : 'Work and decisions remain.'}</div><p>${s.open} open items · ${count} of 4 gates checked</p>`;
  document.getElementById('gate-count').textContent = count + ' / 4';
  document.getElementById('open-work').innerHTML =
    tasks
      .filter((t) => t.status !== 'Done')
      .map(
        (t) =>
          `<a href="workspace.html?task=${encodeURIComponent(t.id)}"><span class="task-id">${escapeTaskText(t.id)}</span><b>${escapeTaskText(t.title)}</b><span class="status ${statusClass(t.status)}">${escapeTaskText(t.status)}</span></a>`,
      )
      .join('') ||
    '<p class="all-done">All work items are complete. Review the gates before your next step.</p>';
  const markdown = releaseMarkdown(tasks, checks);
  document.getElementById('handoff-preview').textContent = markdown;
  document.getElementById('handoff-text').value = markdown;
}
if (document.getElementById('release-summary')) {
  document.querySelectorAll('[data-gate]').forEach((input) => {
    input.checked = checks[input.dataset.gate];
    input.addEventListener('change', () => {
      checks[input.dataset.gate] = input.checked;
      const ok = storage.set('switchboard-gates-v1', checks);
      document.getElementById('gate-save').textContent = ok
        ? 'Checks saved in this browser.'
        : 'Storage unavailable. Checks are kept on this page only.';
      renderRelease();
    });
  });
  renderRelease();
  document
    .getElementById('copy-handoff')
    .addEventListener('click', async () => {
      const text = releaseMarkdown(tasks, checks);
      document.getElementById('copy-fallback').hidden = false;
      try {
        await navigator.clipboard.writeText(text);
        document.getElementById('export-status').textContent =
          'Handoff copied as Markdown.';
      } catch {
        document.getElementById('export-status').textContent =
          'Select and copy the handoff below.';
        document.getElementById('handoff-text').focus();
        document.getElementById('handoff-text').select();
      }
    });
  document.getElementById('download-handoff').addEventListener('click', () => {
    const url = URL.createObjectURL(
      new Blob([releaseMarkdown(tasks, checks)], {
        type: 'text/markdown;charset=utf-8',
      }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'switchboard-release-handoff.md';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.getElementById('export-status').textContent =
      'Markdown file prepared for download.';
  });
}
document.querySelectorAll('[data-demo]').forEach((button) =>
  button.addEventListener('click', () => {
    document
      .querySelectorAll('[data-demo]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelectorAll('[data-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.panel !== button.dataset.demo;
      if (!panel.hidden && !reduced.matches)
        panel.animate(
          [
            { opacity: 0.3, transform: 'translateY(10px)' },
            { opacity: 1, transform: 'none' },
          ],
          { duration: 280, easing: 'ease-out' },
        );
    });
  }),
);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.2 },
  );
  document
    .querySelectorAll(
      '.intake-stage,.mini-board,.release-stage,.principle-grid',
    )
    .forEach((el) => observer.observe(el));
}

```
