# Folio — a complete client-work portal and product website

Build Folio as an original client-work SaaS concept for independent studios, creative agencies, consultants and freelancers. Its purpose is to give a project brief, deliverables, feedback and approval decisions one coherent home. The website must include both a polished marketing experience and a real local product journey. Visitors should be able to enter a sample workspace, inspect projects, open a deliverable, leave a local comment, approve a version, request changes with a reason, complete milestones, create a new project from a brief, and find that project again. This is a replacement for a generic legacy template, so do not reuse its layout, colour system, navigation, section order, illustrations or text.

The product is fictional and operates locally in the browser. There are no accounts, invitations, external messages, payment transactions, signatures, uploads or client notifications. The sample studio, people, projects, artwork and prices are invented demonstration content. Clearly communicate that context in the workspace and relevant actions without filling the marketing page with warnings. Avoid public platform-provider branding, deployment-service badges, favicons added by the implementation, fake customer logos, fabricated testimonials, review counts or unsupported adoption claims. The product should stand under its own Folio identity.

## Research foundation and honest reference use

The primary reference is Bonsai's actual client-portal page at https://www.hellobonsai.com/client-portal. The forms page at https://www.hellobonsai.com/forms was also inspected. Both were read directly in a browser on September 8, 2026, including page structure, visible product imagery and feature sequence. These are first-party product pages, not a screenshot collection or a guessed imitation of an authenticated application. Use them to understand how a mature client-work product explains its value and exposes the practical relationships between a portal, project status, documents, forms and feedback.

The observed client-portal page has a compact navigation header, a centered large sans-serif proposition, a concise explanatory paragraph, a prominent primary action, and a large product presentation beneath it. The product presentation combines a substantial contextual image with a legible portal interface. Subsequent content explains access, project visibility, files, branding, messages and task collaboration, then moves into larger feature-specific visual sections. Additional capability links and practical questions close the page. The forms page connects intake questions to project information and describes field types, client onboarding and the relationship between forms and a shared workspace.

The actual authenticated Bonsai application was not entered. No account was created, no client was contacted, and no real project or approval was changed. Exact permission models, authentication behavior, backend data storage, collaboration delivery, payment processing and internal keyboard behavior were not verified. Do not claim that Folio reproduces those internals. Its local project state, validation, approval logic and interaction code are original implementation choices inspired by the publicly visible product relationships.

Visually, retain the reference's confidence in a clear proposition and a large product demonstration. Do not copy its wordmark, screenshots, green brand symbol, review claims, customer names, CTA wording or website assets. Folio instead uses a warm paper canvas, dark olive ink, butter-yellow accents, pale sage product stages, original client artwork and a studio-like tone. The result should be recognisably a client-work product, with a distinct identity and more substantial interaction than a static landing page.

## Brand and visual system

The wordmark is folio in a compact, confident sans-serif, paired with a small folded-page shape made with CSS. The mark is simple enough to belong in both marketing navigation and application chrome. Use the locally hosted Geist variable font for all interface and most marketing text. Large selected phrases may use system Georgia italic to introduce warmth, but do not turn the product into a serif editorial magazine. The hierarchy should remain practical and contemporary.

Use #f5f3e9 as the primary marketing surface, #273327 as the main ink and action colour, #f1d765 for the final invitation, and soft green-grey dividers. Product surfaces are near white with pale sage sidebars and restrained borders. Review states use muted yellow, approval uses green, changes requested uses warm terracotta, and active work uses a quiet blue. Status colour always appears with text. Never rely on a dot or colour patch to communicate a decision.

Buttons have a modest five-pixel radius, clear labels, and enough padding to feel comfortable. Marketing sections can have generous whitespace, while product screens need denser but readable information. Use a consistent spacing rhythm and avoid arbitrary nested cards. A portal may naturally contain a sidebar, main surface, project section and deliverable row, but each level should have a clear responsibility. Do not create card-inside-card stacks purely for decoration.

The marketing hero uses a centered headline, two purposeful actions, and a large original product preview beneath. That preview should be crisp HTML, not an illegible screenshot pasted into a rounded rectangle. Use actual sample data shared with the live workspace so the preview and product feel connected. The product hero includes a narrow studio sidebar, a breadcrumb, greeting, three operational summaries, a featured project, a design board, and a clear review destination. The interface details are meaningful, not random numbers or fake analytics.

Create three original vector design boards for the fictional Verdant project. The identity board contains a green wordmark, botanical form and coordinated colour blocks. The creative-direction board uses a simple composition and a clear theme. The packaging board shows original bags and cartons with the same brand language. Preserve SVG sources and WebP display versions. These assets should look like plausible creative deliverables, and they should be the same files opened in the review dialog. Keep hero.webp as a local compatibility preview asset for the surrounding template library.

## Complete route map and shared navigation

Generate five complete pages: index.html, workspace.html, project.html, brief.html and plans.html. The project page uses a validated id query parameter to display a known sample or locally created project. It also accepts an optional tab query parameter for overview, files, brief or activity. Unknown values must fall back to a known project and a safe default tab rather than leaving the page empty. Every route must function under a nested demo path with relative links.

The marketing header contains the Folio wordmark, How it works, Client briefs, Plans, Explore the product, Open demo and Start a project. Every item leads to a real section or route. How it works points to the workflow section on the homepage. Client briefs and Start a project open the actual brief form. Explore the product and Open demo lead to the local workspace. Avoid a login form that has no authentication service behind it.

The application has its own coherent shell. A left sidebar contains the Folio identity, the fictional Northline Studio selector, Overview, Projects, Client review and New brief. A compact note explains that the workspace is a local demonstration. The profile at the bottom is sample studio-owner information, not a real logged-in person. The main area begins with a simple breadcrumb bar and a New project action. On mobile, the sidebar disappears and the top bar retains a route to Folio and the new-project action. The overview, project back link and visible controls must still provide a complete navigation path.

The marketing footer contains product routes, credits and a neutral Template library link to ../../. Do not add public build-service or model-provider branding. Preserve font-license information and original-artwork disclosure in the credits. Footer copy states that this is a fictional product with local data and no external submissions. Application pages use a compact demo footer or contextual note rather than repeating the entire marketing footer.

## Marketing homepage sequence

Begin with the centered proposition Great work deserves a better back-and-forth. Use a large but controlled type scale, an italic phrase for warmth, and a short description of briefs, feedback and approvals sharing one home. The primary action is Explore the live demo. A secondary text link starts a brief. A small note says no sign-up is needed. Avoid invented urgency, trial countdowns, fake discounts or unsupported performance metrics.

Place the original portal preview immediately beneath this introduction on a pale sage stage. Its small labels remain believable, but the preview should not be the only way to understand the product on mobile. A subtle entrance lifts it a few pixels and settles its opacity. A compact approval notification may overlap the lower-right edge on desktop, showing a sample creative-direction decision. It should disappear on phones rather than obscuring the interface. This notification is decorative product context, not a live toast or a claimed event from a real customer.

Follow with a quiet audience strip naming the types of teams the concept is for. These are audience categories, not customer logos. Then create an editorial problem section: the project is moving, and everyone should know where. Explain the friction of scattered briefs, feedback and files in plain language. Use a broad headline and a narrower explanation rather than three identical benefits cards.

The workflow section contains three real buttons: Brief, Review and Approve. Switching them changes both the explanatory copy and the original product vignette. Brief shows a useful intake form preview. Review shows the actual Verdant identity asset with version and review context. Approve shows a clear decision state and a next-step message. Each vignette links to the corresponding working product route. The tabs must not merely change their active colour while leaving content unchanged.

Next, show a branded client-space story. Pair a warm marketing statement with an original client welcome panel containing packaging artwork and the Verdant identity. The panel should communicate that the client sees a considered project home. Continue with four useful capabilities: purposeful briefs, visible progress, contextual feedback and proper handoff. Each has a real route into the demo. Keep the copy specific and avoid claiming enterprise security, integrations or collaboration services that are not implemented.

A walkthrough section invites the visitor to take the client seat. It explains three steps: open the project, review the work, and make the next step clear. Follow with practical questions about local operation, custom projects, feedback transmission and reset behavior. Finish with a butter-yellow invitation to open Folio. This final section should be visually distinct and concise, not another repetitive product screenshot.

## Workspace behavior and data

The workspace opens with a greeting and a short status explanation. Three summary tiles show active projects, deliverables waiting for a decision, and approved deliverables. Derive these counts from current project and decision data. Do not hardcode the live counts in a way that becomes incorrect after an approval. The marketing preview may show the initial seed state, but the working workspace must always reflect local changes.

Use three initial projects: Verdant brand identity, Solstice website refresh, and Orbit launch campaign. Each has a client, type, status, target date, owner, colour, initial, description, deliverables and milestones. Exact data appears below. Sample names are invented and must never be represented as real customers. A project card shows its identity, current status, client, type, milestone completion and target date. Every card opens project.html with its own identifier.

Provide search across project and client names. Add All projects, In review, In progress and Planning filters. Search and status filtering operate together. A useful empty state explains that no projects match and suggests another name or status. Do not leave blank space without explanation. The Next up section lists deliverables currently in review and links directly to the relevant project's files tab. If no work is waiting for review, show a calm empty state rather than fake pending tasks.

The reset action restores the original sample state, including removing local projects, decisions, milestone overrides and comments. This is a reversible demo workflow within an explicitly local product; it does not delete remote data. Label it Reset demo data and keep it in the compact demo footer. Do not make reset the primary action or present it as a destructive account operation.

## Project overview and deliverables

A project page starts with a back link, identity tile, project name, client context and current status. The four tabs are Overview, Deliverables, Project brief and Activity. Use button controls with tab semantics and selected state. The active tab is rendered into a single panel. Keep the project identity visible while switching sections so the user remains oriented.

Overview contains a short project description, milestone checklist, latest deliverables, project details and a concise local-context note. Milestone checkboxes work. Toggling a milestone persists an override and updates completion labels. Do not tie arbitrary milestone completion to an approval without an explicit relationship in the data. The project card's progress reads the same milestone values when returning to the workspace.

Deliverables show original artwork previews, titles, kind, version, status and an Open for review action. All previews point to known local assets. A newly created project starts with no deliverables; its empty state explains that the brief and milestones are ready and offers the sample Verdant project for exploring the review flow. Never invent an uploaded file or claim that a user's brief automatically generated real design work.

The shared brief displays the project goal, audience, useful context and target date. For a newly created project, these values come directly from the validated form. Preserve line breaks in longer text. Escape every user-supplied string before inserting it into HTML. For seed projects, use original illustrative context. Activity contains local decisions and feedback alongside a clearly labelled sample project-created entry. Do not fabricate precise event timestamps or imply that another person has taken an action.

## Review, feedback and approval flow

Opening a deliverable launches a native dialog with the title and version, a large original design board on the left, and a practical review column on the right. The review column contains current status, a short instruction, Approve this version, Request changes, a labelled feedback textarea and Save local feedback. A visible close button and Escape dismissal are required. Native modal focus behavior should keep background actions unavailable while the dialog is open.

Approval changes the specific project-and-deliverable decision to Approved. It updates the dialog status, underlying project display, activity content and workspace summaries. The confirmation explicitly says the decision was saved locally and no client message was sent. The action is not a contract signature, a payment acceptance or a transmitted approval. Do not add a legally binding checkbox or fake electronic signature.

Request changes requires a nonempty explanatory note. If the note is blank, focus the textarea and show a clear instruction to add context. If a note is present, save it to that deliverable, change the decision to Changes requested, clear the textarea and update the status. This prevents an ambiguous negative decision without useful feedback. Save local feedback adds a comment without changing the decision. Limit individual notes to one thousand characters and retain a bounded history, such as the latest thirty notes per deliverable.

Feedback and decisions are identified by the combination of project id and deliverable id. Reopening the same deliverable restores its state. Other deliverables retain their own decisions. Do not let a global approval flag affect every file. Render notes as escaped text with preserved line breaks. A note containing HTML-looking characters must display literally rather than becoming markup or script.

## Brief creation journey

The brief page is an actual creation flow, not a static sample form. Its opening statement explains that a few thoughtful answers create a better starting point. The first section offers three templates: Brand identity, Website and Campaign. These are native radio options with visible title and explanation. Selecting a template updates the guidance questions in the side panel. On mobile, the template options become a vertical list and the side panel may be removed if the form itself remains understandable.

The essentials include project name, client or team, target date and project owner. The direction section asks for a goal, intended audience and optional context. Use native required validation, sensible maximum lengths and visible labels. Trim text before accepting it so whitespace-only required answers do not create empty projects. Keep the form limited to sample project information; there is no need for email addresses, phone numbers, payment details or private client documents.

Submitting creates a bounded local project record with a safe generated id. Use a conventional local prefix and a unique suffix. The new project begins in Planning, has a completed brief milestone, and has direction, review and handoff milestones still open. It has no deliverables until a real implementation would add them. After successfully saving, navigate to that project's brief tab. The user should immediately see the values they entered and be able to return to the workspace where the new project is listed.

Cap custom projects at a reasonable demonstration limit, such as thirty. If storage is unavailable, explain that the local record cannot be carried to another page. Do not redirect to a page that cannot restore the project. No form content is posted to a server. The success mechanism is local storage plus navigation, not a fake network submission.

## Persistence, validation and implementation quality

Store custom project records and overlays for decisions, milestones and comments under folio-workspace-v2. Keep seed project data in the bundled source. Validate restored custom records: safe identifiers, bounded strings, allowed project types, allowed owners and date-shaped values. Reconstruct known fields rather than trusting arbitrary stored markup. Decisions must be one of the supported states, tasks must be booleans, and comments must be bounded strings. Corrupt JSON should fall back to the original seed state without crashing the application.

Use coherent functions for formatting, status derivation, rendering, persistence and review state. Avoid speculative service abstractions or a framework migration for this static demonstration. The project's existing static build contract is sufficient. Share the same seed data between marketing previews, workspace cards and project pages where practical. Do not duplicate a second implementation of approval logic for each route. Keep functions scoped to the page that needs them and guard optional DOM elements before binding listeners.

The plans page contains three illustrative tiers: Solo, Studio and Collective. Monthly base prices are nineteen, thirty-nine and seventy-nine dollars. A billing toggle changes the displayed monthly equivalent to eighty percent of the base for the annual option and updates the billing explanation. Prices and limits are fictional product concepts. All tier actions open the same accessible demo workspace; no subscription or checkout is created. Avoid saying a real discount is available or charging anything.

## Responsive behavior, accessibility and motion

At desktop size, the application sidebar is fixed within its own viewport-height column and the main workspace fills the remaining width. Project cards use three columns when space allows and two at intermediate widths. The project overview becomes a single column before its content gets cramped. On phones, remove the sidebar, retain a compact top bar, use one-column project cards, and let project tabs scroll within their own rail without causing document overflow.

The marketing hero must be readable at 390 pixels. Its large HTML preview can become a simplified narrow view: hide the decorative sidebar, preserve the main greeting, summary and project review, and remove the floating approval notice. Do not scale a full desktop interface down until labels become the only explanation of the product. The surrounding headline and real demo link carry the message. Keep all primary actions at comfortable tap sizes and preserve meaningful text contrast.

Use one h1 per route, semantic navigation, main landmarks, fieldsets, legends, labels, buttons, checkboxes, radio inputs and native dialogs. Focus rings must be visible. Statuses have text and colour. Errors are announced through an alert or polite live region as appropriate. Keep the dialog close action reachable and handle Escape at capture phase. Respect reduced-motion preferences across entrance, hover and dialog transitions. Motion should demonstrate polish without delaying a required control or hiding content.

The source lives in scripts/folio and generated output in public/demos/folio. Export buildFolio() from build.mjs and return an object containing prompt. Write the complete prompt to public/prompts/folio.md and duplicate it in the demo. Append exact seed data and actual JavaScript under the required heading Reference interaction handler. Include local fonts, license text, artwork sources, WebP versions, hero.webp and credits. Do not modify shared catalog, library builder or application files from this category implementation.

Before handoff, run scoped lint and syntax checks, generate all five pages, inspect desktop and mobile compositions, and verify local targets. Exercise the complete flow: filter the workspace, open Verdant, review identity, reject empty change requests, save feedback containing literal angle brackets, request changes, approve the version, close and reopen the dialog, inspect activity and counts, complete a milestone, create a brief, and find the new project. Test billing toggle and mobile navigation. Report observed results and any concrete limitations rather than treating the presence of code as proof that the behavior works.

## Compatibility destinations

Preserve old incoming links without presenting the superseded design. Generate small redirect documents with visible fallback links: about.html continues to index.html; stories.html continues to workspace.html; stories/atelier.html continues to the Verdant project; stories/morrow.html continues to the Solstice project. These four compatibility documents are not counted among the five complete product pages. They contain no old layout, old branding, copied story content or favicon. Remove the obsolete local favicon asset during the build, and do not add a favicon link to any page.

## Readability and semantic detail

Use #4f5e43 for secondary text on the light paper, sage, white and pale review surfaces. This replaces the overly pale secondary green values that failed contrast checks, including tiny preview labels, inactive workflow tabs, explanatory paragraphs, numbered walkthrough notes and footer disclosure. Check contrast against the actual local background rather than assuming one muted colour passes everywhere. The HTML product preview follows the page hierarchy: the main marketing proposition is the sole h1, its preview greeting is h2, and the nested deliverable title is h3. Preserve their visual font sizes independently from heading level; do not skip from the page h1 to a decorative h3.


## Readable type and mobile reflow

Use a minimum 12px for secondary metadata throughout the site and at least14px for controls and product explanations. Never shrink labels to5–10px. On narrow screens, stack the preview statistics and review illustration, wrap project metadata, and keep review actions at least44px high. Preserve visible text rather than scaling the desktop preview. Use #4f5e43 for secondary text on light surfaces.


## Exact sample data

```json
{
  "projects": [
    {
      "id": "verdant",
      "name": "Verdant — brand identity",
      "client": "Verdant Studio",
      "type": "Brand identity",
      "status": "In review",
      "due": "2026-10-16",
      "owner": "Alex",
      "color": "#dfe8c5",
      "initial": "V",
      "description": "A fresh visual identity for a neighbourhood plant studio. The direction pairs an expressive wordmark with a simple, useful packaging system.",
      "deliverables": [
        {
          "id": "direction",
          "name": "Creative direction",
          "kind": "Presentation",
          "version": "v2",
          "status": "Approved",
          "file": "direction.svg"
        },
        {
          "id": "identity",
          "name": "Identity system",
          "kind": "Design board",
          "version": "v3",
          "status": "In review",
          "file": "identity.svg"
        },
        {
          "id": "packaging",
          "name": "Packaging concepts",
          "kind": "Design board",
          "version": "v1",
          "status": "In progress",
          "file": "packaging.svg"
        }
      ],
      "tasks": [
        {
          "id": "brief",
          "name": "Project brief",
          "done": true
        },
        {
          "id": "discovery",
          "name": "Discovery & direction",
          "done": true
        },
        {
          "id": "identity",
          "name": "Identity review",
          "done": false
        },
        {
          "id": "handoff",
          "name": "Final handoff",
          "done": false
        }
      ]
    },
    {
      "id": "solstice",
      "name": "Solstice — website refresh",
      "client": "Solstice Coffee",
      "type": "Website",
      "status": "In progress",
      "due": "2026-10-23",
      "owner": "Sam",
      "color": "#ecd5c6",
      "initial": "S",
      "description": "A welcoming website for a small coffee roaster, bringing the people, process and seasonal coffees into one clear story.",
      "deliverables": [
        {
          "id": "sitemap",
          "name": "Site structure",
          "kind": "Document",
          "version": "v1",
          "status": "Approved",
          "file": "direction.svg"
        },
        {
          "id": "homepage",
          "name": "Homepage concept",
          "kind": "Design board",
          "version": "v2",
          "status": "In progress",
          "file": "identity.svg"
        }
      ],
      "tasks": [
        {
          "id": "brief",
          "name": "Project brief",
          "done": true
        },
        {
          "id": "structure",
          "name": "Site structure",
          "done": true
        },
        {
          "id": "design",
          "name": "Page design",
          "done": false
        },
        {
          "id": "build",
          "name": "Build & launch",
          "done": false
        }
      ]
    },
    {
      "id": "orbit",
      "name": "Orbit — launch campaign",
      "client": "Orbit Audio",
      "type": "Campaign",
      "status": "Planning",
      "due": "2026-11-06",
      "owner": "Alex",
      "color": "#d4dff0",
      "initial": "O",
      "description": "An original launch concept for a compact speaker, with a clear message and a flexible set of campaign assets.",
      "deliverables": [
        {
          "id": "brief",
          "name": "Campaign brief",
          "kind": "Document",
          "version": "v1",
          "status": "In review",
          "file": "direction.svg"
        }
      ],
      "tasks": [
        {
          "id": "brief",
          "name": "Project brief",
          "done": true
        },
        {
          "id": "concept",
          "name": "Campaign concept",
          "done": false
        },
        {
          "id": "assets",
          "name": "Asset production",
          "done": false
        },
        {
          "id": "launch",
          "name": "Launch handoff",
          "done": false
        }
      ]
    }
  ],
  "templates": [
    {
      "id": "brand",
      "name": "Brand identity",
      "description": "Set the direction before the first design.",
      "questions": [
        "What should people feel?",
        "Who are we designing for?",
        "What needs to change?"
      ]
    },
    {
      "id": "website",
      "name": "Website",
      "description": "Turn a website wish list into a clear starting point.",
      "questions": [
        "What is the primary goal?",
        "Who will use the site?",
        "Which pages matter most?"
      ]
    },
    {
      "id": "campaign",
      "name": "Campaign",
      "description": "Give the message, audience and deliverables a home.",
      "questions": [
        "What are we launching?",
        "Who needs to hear it?",
        "What should they do next?"
      ]
    }
  ]
}
```

## Reference interaction handler

```javascript
(() => {
  'use strict';
  const seed = JSON.parse(document.getElementById('folio-data').textContent);
  const key = 'folio-workspace-v2';
  const e = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  const clean = (value, max) =>
    typeof value === 'string' ? value.slice(0, max).trim() : '';
  let state = { custom: [], decisions: {}, tasks: {}, comments: {} };
  try {
    const stored = JSON.parse(localStorage.getItem(key) || '{}');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      state.custom = Array.isArray(stored.custom)
        ? stored.custom
            .filter(
              (p) =>
                p &&
                /^local-[a-z0-9-]+$/.test(p.id) &&
                typeof p.name === 'string' &&
                typeof p.client === 'string',
            )
            .slice(0, 30)
            .map((p) => ({
              id: p.id,
              name: clean(p.name, 80),
              client: clean(p.client, 60),
              type: ['Brand identity', 'Website', 'Campaign'].includes(p.type)
                ? p.type
                : 'Brand identity',
              due: /^\d{4}-\d{2}-\d{2}$/.test(p.due) ? p.due : '2026-10-30',
              owner: p.owner === 'Sam' ? 'Sam' : 'Alex',
              description: clean(p.description, 1500),
              audience: clean(p.audience, 1000),
              notes: clean(p.notes, 1500),
            }))
        : [];
      for (const property of ['decisions', 'tasks', 'comments']) {
        if (
          stored[property] &&
          typeof stored[property] === 'object' &&
          !Array.isArray(stored[property])
        )
          state[property] = stored[property];
      }
    }
  } catch {
    state = { custom: [], decisions: {}, tasks: {}, comments: {} };
  }
  function projectList() {
    return [
      ...seed.projects,
      ...state.custom.map((p) => ({
        ...p,
        status: 'Planning',
        initial: p.client.charAt(0).toUpperCase(),
        color: '#e0e9cf',
        deliverables: [],
        tasks: [
          { id: 'brief', name: 'Project brief', done: true },
          { id: 'direction', name: 'Creative direction', done: false },
          { id: 'review', name: 'Client review', done: false },
          { id: 'handoff', name: 'Final handoff', done: false },
        ],
      })),
    ];
  }
  const projects = projectList();
  const selectedId = new URLSearchParams(location.search).get('id');
  const project = projects.find((p) => p.id === selectedId) || projects[0];
  let toastTimer;
  function notify(message) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }
  function persist() {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      return true;
    } catch {
      notify(
        'Your changes are available for this visit. Browser saving is unavailable.',
      );
      return false;
    }
  }
  function decision(p, d) {
    const value = state.decisions[`${p.id}:${d.id}`];
    return [
      'Approved',
      'Changes requested',
      'In review',
      'In progress',
    ].includes(value)
      ? value
      : d.status;
  }
  function taskDone(p, task) {
    const value = state.tasks[`${p.id}:${task.id}`];
    return typeof value === 'boolean' ? value : task.done;
  }
  function statusClass(status) {
    return (
      {
        Approved: 'approved',
        'In review': 'review',
        'Changes requested': 'changes',
        'In progress': 'progress',
        Planning: '',
      }[status] || ''
    );
  }
  function badge(status) {
    return `<span class="status ${statusClass(status)}">${e(status)}</span>`;
  }
  function projectStatus(p) {
    if (!p.deliverables.length) return p.status;
    if (p.deliverables.some((d) => decision(p, d) === 'Changes requested'))
      return 'In progress';
    if (p.deliverables.some((d) => decision(p, d) === 'In review'))
      return 'In review';
    return 'In progress';
  }
  function dateLabel(value) {
    const date = new Date(value + 'T12:00:00');
    return Number.isNaN(date.getTime())
      ? 'To be planned'
      : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  const countNode = document.getElementById('nav-project-count');
  if (countNode) countNode.textContent = projects.length;
  document.querySelector('.mobile-menu')?.addEventListener('click', (event) => {
    const open = document
      .querySelector('.marketing-header')
      .classList.toggle('menu-open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
    event.currentTarget.textContent = open ? 'Close' : 'Menu';
  });
  const featureContent = {
    brief: `<div><h3>Start on<br>the same page.</h3><p>A useful brief captures the goal, the people, and the things that matter. Give the project a clear starting point without a long email chain.</p><a class="text-link" href="brief.html">Create a client brief ↗</a></div><div class="mini-form"><span>NORTHLINE STUDIO / PROJECT BRIEF</span><h4>Let's make something good.</h4><label>What are we making?<span>Brand identity for Verdant</span></label><label>Who is it for?<span>A neighbourhood of plant people.</span></label><label>What should it feel like?<span>Warm. Useful. Full of life.</span></label><span class="mini-button">A clear starting point ✓</span></div>`,
    review: `<div><h3>Keep the feedback<br>with the work.</h3><p>The latest version, the useful context, and a place to leave a thoughtful note. Everyone knows what they are looking at.</p><a class="text-link" href="project.html?id=verdant&tab=files">Review a deliverable ↗</a></div><div class="mini-review"><img src="assets/identity.webp" alt="Original Verdant identity design board"><div><b>Identity system / v3</b><span class="status review">In review</span></div><p>Sample note: The warmer palette feels right. Let's keep that direction.</p></div>`,
    approve: `<div><h3>A clear yes.<br>A useful next step.</h3><p>Record an approval or ask for changes with context. The decision stays beside the version, ready for the next stage of work.</p><a class="text-link" href="project.html?id=verdant">Try a local approval ↗</a></div><div class="mini-approved"><span>✓</span><h4>Creative direction approved.</h4><p>Version 2 / Verdant Studio<br>The next chapter can begin.</p></div>`,
  };
  const stage = document.getElementById('feature-stage');
  if (stage) {
    stage.innerHTML = featureContent.brief;
    document.querySelectorAll('[data-feature]').forEach((button) =>
      button.addEventListener('click', () => {
        stage.innerHTML = featureContent[button.dataset.feature];
        document
          .querySelectorAll('[data-feature]')
          .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      }),
    );
  }
  document.querySelectorAll('[data-billing]').forEach((button) =>
    button.addEventListener('click', () => {
      const annual = button.dataset.billing === 'annual';
      document.querySelectorAll('[data-price]').forEach((price) => {
        price.textContent =
          '$' +
          (Number(price.dataset.price) * (annual ? 0.8 : 1)).toFixed(
            annual ? 2 : 0,
          );
      });
      document.querySelectorAll('.billing-note').forEach((note) => {
        note.textContent = annual
          ? 'Illustrative monthly equivalent, billed yearly'
          : 'Illustrative monthly price';
      });
      document
        .querySelectorAll('[data-billing]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    }),
  );
  function renderProjectCard(p) {
    const done = p.tasks.filter((t) => taskDone(p, t)).length;
    return `<a class="project-card" href="project.html?id=${e(p.id)}"><div class="project-card-top"><span class="project-initial" style="--project-color:${p.color}">${e(p.initial)}</span>${badge(projectStatus(p))}</div><h3>${e(p.name)}</h3><p>${e(p.client)} / ${e(p.type)}</p><div class="project-card-progress" aria-label="${done} of ${p.tasks.length} milestones complete">${p.tasks.map((t) => `<span class="${taskDone(p, t) ? 'complete' : ''}"></span>`).join('')}</div><div class="project-card-foot"><span>${done} / ${p.tasks.length} milestones</span><span>Target ${dateLabel(p.due)}</span></div></a>`;
  }
  const grid = document.getElementById('project-grid');
  if (grid) {
    let filter = 'All';
    function renderWorkspace() {
      const query = document
        .getElementById('project-search')
        .value.trim()
        .toLowerCase();
      const visible = projects.filter(
        (p) =>
          (filter === 'All' || projectStatus(p) === filter) &&
          `${p.name} ${p.client}`.toLowerCase().includes(query),
      );
      grid.innerHTML = visible.map(renderProjectCard).join('');
      document.getElementById('project-empty').hidden = visible.length > 0;
      document.getElementById('stat-projects').textContent = projects.length;
      document.getElementById('stat-reviews').textContent = projects.reduce(
        (n, p) =>
          n +
          p.deliverables.filter((d) => decision(p, d) === 'In review').length,
        0,
      );
      document.getElementById('stat-approved').textContent = projects.reduce(
        (n, p) =>
          n +
          p.deliverables.filter((d) => decision(p, d) === 'Approved').length,
        0,
      );
      const actions = projects.flatMap((p) =>
        p.deliverables
          .filter((d) => decision(p, d) === 'In review')
          .map((d) => ({ p, d })),
      );
      document.getElementById('next-actions').innerHTML = actions.length
        ? actions
            .map(
              ({ p, d }) =>
                `<a class="next-action" href="project.html?id=${e(p.id)}&tab=files"><span class="action-icon">◷</span><div><h3>${e(d.name)} is ready for review</h3><p>${e(p.client)} / ${e(d.version)}</p></div><span>↗</span></a>`,
            )
            .join('')
        : '<p class="small">No deliverables are waiting for review. A little room to make progress.</p>';
    }
    document.querySelectorAll('[data-project-filter]').forEach((button) =>
      button.addEventListener('click', () => {
        filter = button.dataset.projectFilter;
        document
          .querySelectorAll('[data-project-filter]')
          .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
        renderWorkspace();
      }),
    );
    document
      .getElementById('project-search')
      .addEventListener('input', renderWorkspace);
    document.getElementById('reset-demo').addEventListener('click', () => {
      state = { custom: [], decisions: {}, tasks: {}, comments: {} };
      persist();
      location.reload();
    });
    renderWorkspace();
  }
  const projectPanel = document.getElementById('project-panel');
  let activeTab = ['overview', 'files', 'brief', 'activity'].includes(
    new URLSearchParams(location.search).get('tab'),
  )
    ? new URLSearchParams(location.search).get('tab')
    : 'overview';
  let currentDeliverable = null;
  const dialog = document.getElementById('deliverable-dialog');
  function feedbackFor(d) {
    const notes = state.comments[`${project.id}:${d.id}`];
    return Array.isArray(notes)
      ? notes
          .filter((note) => typeof note === 'string')
          .slice(-30)
          .map((note) => clean(note, 1000))
      : [];
  }
  function deliverableRows() {
    if (!project.deliverables.length)
      return '<p>Your brief is ready. Deliverables will appear here as this local project takes shape.</p>';
    return `<div class="deliverable-list">${project.deliverables.map((d) => `<div class="deliverable-row"><img class="deliverable-thumb" src="assets/${d.file.replace('.svg', '.webp')}" alt="Original sample design board"><div><h3>${e(d.name)}</h3><p>${e(d.kind)} / ${e(d.version)}</p></div>${badge(decision(project, d))}<button data-review="${d.id}">Review ↗</button></div>`).join('')}</div>`;
  }
  function overview() {
    return `<div class="overview-layout"><div><section class="app-card"><h2>The project, in a few words.</h2><p>${e(project.description)}</p></section><section class="app-card"><h2>Milestones</h2>${project.tasks.map((t) => `<label class="milestone"><input type="checkbox" data-task="${t.id}" ${taskDone(project, t) ? 'checked' : ''}><span>${e(t.name)}</span><small>${taskDone(project, t) ? 'Complete' : 'To come'}</small></label>`).join('')}</section><section class="app-card"><h2>Latest deliverables</h2>${deliverableRows()}</section></div><aside><section class="app-card"><h2>Project details</h2><dl class="project-info-list"><div><dt>Client</dt><dd>${e(project.client)}</dd></div><div><dt>Project type</dt><dd>${e(project.type)}</dd></div><div><dt>Studio owner</dt><dd>${e(project.owner)}</dd></div><div><dt>Target date</dt><dd>${dateLabel(project.due)}</dd></div></dl></section><div class="overview-note"><h3>A shared point of view.</h3><p>This sample portal keeps the brief, work and decisions together. Everything you change is local to this browser.</p></div></aside></div>`;
  }
  function files() {
    if (!project.deliverables.length)
      return `<section class="app-card"><h2>A clean starting point.</h2><p>This project has a brief and milestones. There are no deliverables to review yet. Explore the Verdant sample project to try feedback and approvals.</p><a href="project.html?id=verdant&tab=files" class="button small" style="margin-top:20px">Explore sample deliverables ↗</a></section>`;
    return `<div class="files-grid">${project.deliverables.map((d) => `<article class="file-card"><img src="assets/${d.file.replace('.svg', '.webp')}" alt="Original ${e(d.name)} concept artwork"><div>${badge(decision(project, d))}<h3>${e(d.name)}</h3><p>${e(d.kind)} / ${e(d.version)} / Original demo artwork</p><button data-review="${d.id}" class="button small">Open for review ↗</button></div></article>`).join('')}</div>`;
  }
  function briefRead() {
    return `<section class="app-card brief-read"><h2>The shared brief</h2><h3>What we're making</h3><p>${e(project.name)} / ${e(project.type)}</p><h3>The goal</h3><p>${e(project.description)}</p><h3>Who it's for</h3><p>${e(project.audience || 'A thoughtful audience looking for a clear, useful and welcoming experience. This is illustrative sample context.')}</p><h3>Useful context</h3><p>${e(project.notes || 'Keep the direction warm, practical and easy to recognise. Explore the current deliverables and leave feedback beside the relevant version.')}</p><h3>Target date</h3><p>${dateLabel(project.due)} / ${e(project.owner)} leads the project.</p></section>`;
  }
  function activity() {
    const rows = project.deliverables.flatMap((d) => {
      const entries = [];
      if (state.decisions[`${project.id}:${d.id}`])
        entries.push(
          `<div class="activity-row"><b>✓</b><div><h3>${e(d.name)} — ${e(decision(project, d))}</h3><small>Local decision / ${e(d.version)}</small></div></div>`,
        );
      feedbackFor(d).forEach((note) =>
        entries.push(
          `<div class="activity-row"><b>AR</b><div><h3>Feedback on ${e(d.name)}</h3><p>${e(note)}</p><small>Local demo note</small></div></div>`,
        ),
      );
      return entries;
    });
    return `<section class="app-card"><h2>Project activity</h2>${rows.join('')}<div class="activity-row"><b>+</b><div><h3>Project brief created</h3><p>${e(project.name)} has a clear starting point.</p><small>Sample project history</small></div></div></section>`;
  }
  function renderProject() {
    if (!projectPanel) return;
    document.getElementById('project-heading').innerHTML =
      `<div class="project-title-row"><div><span class="project-initial" style="--project-color:${project.color}">${e(project.initial)}</span><div><h1>${e(project.name)}</h1><p>${e(project.client)} / A shared project space</p></div></div>${badge(projectStatus(project))}</div>`;
    const panels = { overview, files, brief: briefRead, activity };
    projectPanel.innerHTML = panels[activeTab]();
    document
      .querySelectorAll('[data-tab]')
      .forEach((button) =>
        button.setAttribute(
          'aria-selected',
          String(button.dataset.tab === activeTab),
        ),
      );
  }
  function renderReview() {
    const d = currentDeliverable;
    if (!d) return;
    document.getElementById('deliverable-title').textContent = d.name;
    document.getElementById('deliverable-image').src =
      `assets/${d.file.replace('.svg', '.webp')}`;
    const status = document.getElementById('deliverable-status');
    status.className = `status ${statusClass(decision(project, d))}`;
    status.textContent = decision(project, d);
    document.getElementById('deliverable-version').textContent =
      `${d.version} / ${d.kind}`;
    document.getElementById('feedback-list').innerHTML = feedbackFor(d)
      .map(
        (note) =>
          `<article class="feedback-note"><b>Alex / Local demo note</b><p>${e(note)}</p></article>`,
      )
      .join('');
  }
  if (projectPanel) {
    document.querySelectorAll('[data-tab]').forEach((button) =>
      button.addEventListener('click', () => {
        activeTab = button.dataset.tab;
        renderProject();
      }),
    );
    projectPanel.addEventListener('change', (event) => {
      const input = event.target.closest('[data-task]');
      if (!input) return;
      state.tasks[`${project.id}:${input.dataset.task}`] = input.checked;
      persist();
      renderProject();
    });
    projectPanel.addEventListener('click', (event) => {
      const button = event.target.closest('[data-review]');
      if (!button) return;
      currentDeliverable = project.deliverables.find(
        (d) => d.id === button.dataset.review,
      );
      document.getElementById('review-notice').textContent = '';
      document.getElementById('feedback').value = '';
      renderReview();
      dialog.showModal();
    });
    document
      .querySelector('[data-close]')
      .addEventListener('click', () => dialog.close());
    document.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Escape' && dialog.open) {
          event.preventDefault();
          dialog.close();
        }
      },
      true,
    );
    function setDecision(value) {
      if (!currentDeliverable) return;
      state.decisions[`${project.id}:${currentDeliverable.id}`] = value;
      persist();
      renderReview();
      renderProject();
      document.getElementById('review-notice').textContent =
        `${value} saved locally. No client message was sent.`;
    }
    document
      .getElementById('approve-deliverable')
      .addEventListener('click', () => setDecision('Approved'));
    document.getElementById('request-changes').addEventListener('click', () => {
      const note = document.getElementById('feedback').value.trim();
      if (!note) {
        document.getElementById('review-notice').textContent =
          'Add a note explaining the changes, then request changes.';
        document.getElementById('feedback').focus();
        return;
      }
      const id = `${project.id}:${currentDeliverable.id}`;
      state.comments[id] = [
        ...feedbackFor(currentDeliverable),
        note.slice(0, 1000),
      ].slice(-30);
      document.getElementById('feedback').value = '';
      setDecision('Changes requested');
    });
    document
      .getElementById('feedback-form')
      .addEventListener('submit', (event) => {
        event.preventDefault();
        const note = document.getElementById('feedback').value.trim();
        if (!note || !currentDeliverable) return;
        state.comments[`${project.id}:${currentDeliverable.id}`] = [
          ...feedbackFor(currentDeliverable),
          note.slice(0, 1000),
        ].slice(-30);
        persist();
        document.getElementById('feedback').value = '';
        renderReview();
        document.getElementById('review-notice').textContent =
          'Feedback saved locally. Nothing was sent.';
      });
    renderProject();
  }
  const briefForm = document.getElementById('brief-form');
  if (briefForm) {
    function renderTemplate() {
      const selected =
        seed.templates.find(
          (t) => t.id === new FormData(briefForm).get('template'),
        ) || seed.templates[0];
      document.getElementById('template-questions').innerHTML =
        selected.questions.map((question) => `<p>${e(question)}</p>`).join('');
    }
    briefForm
      .querySelectorAll('[name="template"]')
      .forEach((input) => input.addEventListener('change', renderTemplate));
    briefForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(briefForm);
      const name = clean(data.get('name'), 80),
        client = clean(data.get('client'), 60),
        description = clean(data.get('goal'), 1500),
        audience = clean(data.get('audience'), 1000);
      if (!name || !client || !description || !audience) {
        document.getElementById('brief-error').textContent =
          'Add a project name, client, goal and audience to create a useful brief.';
        return;
      }
      if (state.custom.length >= 30) {
        document.getElementById('brief-error').textContent =
          'This local demo holds up to 30 custom projects. Reset the workspace to start fresh.';
        return;
      }
      const template =
        seed.templates.find((t) => t.id === data.get('template')) ||
        seed.templates[0];
      const id =
        'local-' +
        Date.now().toString(36) +
        '-' +
        Math.random().toString(36).slice(2, 7);
      state.custom.push({
        id,
        name,
        client,
        type: template.name,
        due: clean(data.get('due'), 10),
        owner: data.get('owner') === 'Sam' ? 'Sam' : 'Alex',
        description,
        audience,
        notes: clean(data.get('notes'), 1500),
      });
      if (persist()) location.href = `project.html?id=${id}&tab=brief`;
      else
        document.getElementById('brief-error').textContent =
          'Browser storage is unavailable. This project cannot be carried to another page in the local demo.';
    });
    renderTemplate();
  }
})();

```
