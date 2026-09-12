# Firstword: a complete product-led brief-writing SaaS

Build Firstword, an original brief-writing product for creative teams, as three complete standalone pages: index.html, examples.html, and brief.html. Visitors must complete a real browser-local workflow: arrange rough notes, edit a structured brief, preview exact Markdown, copy with a manual fallback, and download. Preserve the existing deterministic records and serializer. No account, cloud collaboration, AI request, or invented project fact is implied.

## Live reference research and structural direction

Study https://www.relume.ai/ and https://lovable.dev/, discovered through https://saaspo.com/. Detailed live-reference measurements are in /Users/vish/Developer/protosites-assets/research-saas/blueprint.md. At 1471px desktop width Relume uses a roughly 628px headline/composer and a 1280×720 autoplay product demonstration; Lovable combines a centered prompt, animated process demonstrations, and a sticky left narrative whose active item changes with successive large visuals. Borrow that structural depth and product scale. Use original Firstword identity, content, records, and interface. Do not copy reference assets, code, logos, customers, claims, or distinctive art.

This brief supersedes the earlier narrow split composition and its prohibition on a centered composer. The intended upgrade is a complete product-led marketing story, not a different photo beside text. No invented pricing, customer logos, endorsements, or traction. Demonstrate actual product behavior as the proof.

## Identity and shared shell

Self-host Space Grotesk for headings and wordmark, Geist for body and controls. Preserve bundled licenses. Light palette: paper #f6f4ef, ink #24251f, muted #65665c, rules #c9c9ba, yellow #f5dc60; dark canvas uses warm light text and sage panels. The yellow composer and fixed pale product demonstration retain dark text in either theme. Use 1240–1280px desktop rails, about 100–130px between major narrative sections, tight display tracking near -.055em, line-height near 1.05, readable 15–18px body, compact utility labels, 6–14px panels, and restrained control rounding.

Sticky header approximately 72px high: Firstword wordmark, Starters, My brief, The approach, functional theme button. Remove The approach on narrow screens. Ordinary file-relative anchors must work from an extracted folder. Include skip link, one h1 per page, main, labeled navigation, and a footer explaining that this is an original local concept, with links to starters, credits, and ProtoSites. Never add nonfunctional login controls.

## Homepage composition

Begin centered with “Big ideas. A better beginning.” at 52px on phones to 88px on large desktop screens. Explain that rough notes become a clear creative brief. Place the real composer beneath at roughly 720px wide. Its yellow surface contains project name, project type, notes, accurate character count, and Arrange my brief. Keep the product stage introduced early rather than making the hero a huge empty poster. Place browser-local disclosure, resume link, and three working starter nudges below the composer.

Composer validation: project name maximum 100 characters, notes maximum 3000 and minimum 20 non-whitespace characters. Recognized types Website, Campaign, Product launch. A known example query parameter populates its exact original record; otherwise restore a defensively parsed draft. Input saves locally when available. Submission uses the first nonempty line as objective, preserves all trimmed notes as context, and adds type-specific deliverables and questions. Audience, success, and timing stay blank. Successful storage navigates to brief.html; storage failure shows exact Markdown in an inline readonly copy field. Opening a sample must not overwrite an existing brief before submission.

Next build a large interactive product stage, roughly 1280px wide and at least 625px tall, on a muted sage surface. It contains an app bar, workspace rail, legible sample document, and contextual rail. Render actual Firstword sample content with semantic HTML rather than an anonymous image. Fieldnotes studio has meaningful objective, deliverables, and constraints. Brief, Questions, and Export controls switch visible panels and aria-pressed. Questions shows sample decisions including one open decision; Export shows readable sample Markdown. Reset sample restores Brief. These demonstration actions never modify saved writing. Label it as an interactive example and provide a working Use this starter action.

Follow with a static capability line about preserved notes, visible decisions, and portable words. Then build a substantial two-column workflow: narrow sticky explanation on the left, three stacked product panels on the right. Collect shows meaningful rough notes on a paper surface; Shape shows an ordered brief structure; Share shows the resulting document and Markdown file. Each panel has a caption explaining real behavior. IntersectionObserver highlights the matching step as its panel enters the central viewport. A brief stagger on structure rows communicates assembly. Keep normal scrolling and all content accessible without motion.

Next show three substantial starter preview cards. Each has category, title, actual opening note, deliverables, description, and a working starter link. Use muted sage, clay, and yellow visual fields. No empty skeleton lines or fabricated customer success. Follow with the original letterpress-block photograph as a secondary editorial metaphor, not the product hero. Use bundled responsive WebP assets, explicit dimensions, lazy loading, truthful alt text, and preserved provenance.

Close the narrative with native FAQ details covering deterministic arrangement, editing, local storage, one-current-brief replacement, and failure fallbacks. End with a yellow closing section and a working return-to-composer link.

## Starters page

Create a complete library with a large split introduction, project-type filtering, preview cards, and detailed input/output comparisons. All starters, Website, Campaign, and Product launch filters update card visibility, aria-pressed, and an aria-live result count without altering stored writing.

Below the cards, native details dossiers expose the full original notes and exact type-specific deliverables/questions. First dossier opens initially. Each includes Use this starter. The three records remain Fieldnotes studio, The long weekend, and Small Hours. Use source data verbatim; the builder appends the exact records to this prompt. Finish with a working start-from-scratch action.

## Brief editor

Keep the complete existing editing flow. Validate saved fields as bounded strings and project kind as recognized; malformed or missing data gets an honest empty state with working start and library actions. Desktop uses a sticky control rail and approximately 820px document. The rail contains Write/Preview, Copy brief, Download Markdown, actual save status, return to notes, and a readiness overview counting nonempty audience, success, and timing. It names outstanding decisions without pretending to assess writing quality.

Use labeled native fields for title, objective, context, audience, deliverables, questions, success, and timing. Textareas remain resizable and bounded. Edits update exact preview, export text, and storage; storage failures preserve in-page work and report the limit. Switching Write/Preview retains values, uses aria-pressed, and may perform a brief reduced-motion-aware transition.

Copy uses current fields and reports success only after clipboard resolution. Always expose a readonly fallback with the same text, selecting it if copying fails. Download uses a text/markdown Blob and sanitized title-derived filename, revokes the object URL, and truthfully reports preparation. Missing audience, success, and timing serialize as “To be decided.” User text goes through values or textContent, never unsanitized HTML.

## Responsive design and motion

At tablet width remove the sample secondary rail; at narrow widths remove its sidebar and keep the document readable rather than scaling the entire UI. Around 390px use 20px gutters, stacked composer metadata fields, 52px hero type, 31px product title, comfortable targets, full-width starter cards, one-column dossiers, and normal-flow editor controls. Workflow copy stops being sticky. Long words and Markdown wrap without overflow.

Respect reduced motion across CSS and JavaScript. Purposeful motion includes sample panel changes, workflow row entrances, and starter-paper hover settling. Do not add fake typing delays to the real form or automatic actions that mutate writing. Use the existing Lucide icon family via the project helper. Ensure visible focus, contrast in both themes, labels, and meaningful status announcements.

## Architecture and acceptance

Preserve buildFirstword API. marketing.mjs owns the rich homepage and starters markup; build.mjs retains shell and editor; data.mjs retains source records and serialization; site.js owns interactions; site.css owns presentation. Reuse the real flow instead of duplicating a generator. Generated pages and packaged prompts use the integration builder.

Verify original serializer tests, source syntax, scoped generation, desktop layout, sample panels/reset, filters, starter population, input validation, successful submission, edit persistence, readiness count, exact preview, copy fallback, download, dark theme, mobile overflow, and reduced motion. All three pages must be complete and useful offline, with no external service required. Preserve image credits and licenses. Keep the generated recreation prompt synchronized with the final implementation.

## Exact homepage geometry and hierarchy

The desktop header height is 72px. Its horizontal padding is the larger of five percent of the viewport or half the unused space outside a 1280px rail. Keep the wordmark at approximately 27px, and navigation at 14px. Its background must be an opaque theme paper color so scrolling copy does not compete with navigation. The header is sticky at top zero with z-index 30. The document sets scroll padding for fixed navigation; individual workflow targets use about 110px scroll margin.

For desktop widths above 800px, the centered hero has 40px top and 30px bottom padding with 24px horizontal padding. Its overall maximum width is 1000px. The small uppercase introductory label uses 11px Geist, weight 600, approximately .12em tracking, and 1.4 line height. The two-line h1 uses clamp(56px, 5.5vw, 78px), line-height 1.01, weight 500, and -.065em tracking. Use 18px above and below it. The description is 18px with 1.55 line height and 24px below it. The exact phrase after a line break needs a separating space when that break disappears on phones; never concatenate “brief.Start”.

The composer is 720px maximum width, with 22px vertical and 26px horizontal padding, 10px corner radius, a subtle ochre rule, and a very quiet broad shadow. Its top fields use a 1.6-to-one column ratio and a 28px gap. Labels are 11px; project name is 18px; type selection is 14px with a minimum 40px control height. The notes area is 17px, line height 1.5, with an initial desktop height and minimum height of 64px. It remains manually resizable. The bottom row has a top border, 12px top padding, a real count, and a dark 44px-high action. Keep the storage fallback expandable rather than clipped to this compact height.

The starter nudges appear 20px below the composer support line. Their labels are 11px with 6px vertical and 10px horizontal padding, a one-pixel rule, 4px corners, and small arrows. They point to known original records. They are not a second submit path and should never bypass the form's validation.

The product theater uses maximum width 1280px, 12px top margin, 32px padding on the top and sides, and no bottom padding. Its background is #dedfce with #c5c6b4 border and 14px top corners. The stage's utility label and reset button occupy one row with 24px bottom margin. The application window is #f9f8f4, has 10px top corners, at least 625px height, a restrained border, and a quiet grounding shadow. Its app bar is 58px high, uses 24px horizontal padding, and separates brand, sample title, and starter action.

Within the application window, use columns 175px, minmax(0,1fr), and 220px. The minimum interior height is 570px. The left workspace rail has 30px vertical and 16px horizontal padding; the central page has 24px vertical and 40px horizontal padding; the context rail has 40px vertical and 24px horizontal padding. The central sample document has maximum width 560px and minimum height 440px. Its title is 36px Space Grotesk, line-height 1.12, -.045em tracking, weight 500. Main sample prose is 12–13px, appropriate for a deliberately scaled but readable demonstration. Tab labels are 11px and the selected tab has a two-pixel ink underline. Sample metadata uses 9px uppercase labels sparingly. The contextual rail uses a 16px short heading, 11px body, and a small explicit sample disclosure.

## Exact sample-state construction

The default Brief panel has a working-draft label, Fieldnotes studio title, concise sample description, and three organized content regions: objective, deliverables, and priorities. Its objective must be taken from the original Fieldnotes opening line. Its deliverables come from the Website defaults. Its priorities summarize photography, process, and inquiry. A pale note at the bottom clarifies that the content is a starting structure. The left rail shows the three existing sample project names as working links to index.html?example=fieldnotes, index.html?example=weekend, and index.html?example=smallhours. Clicking one opens the real composer with that starter populated. Preserve the selected-looking Fieldnotes visual treatment, and add a clear hover/focus treatment to all three links. These are local starter routes, not a remote project switcher.

The Questions panel changes the document rather than merely recoloring a button. It has a new title, three numbered questions, and example answers for visitor and next action. The essential-pages decision remains visibly open. These are preauthored demonstration decisions, not conclusions inferred from user input. The panel must never be mixed with the current saved brief. Its rows are approximately 19px vertically padded, with 18px gap between number and content, and a light separating rule.

The Export panel shows a different title and a wrapped, monospaced sample Markdown block. The code sample contains title, objective, deliverables, and a timing gap. It is a compact demonstration of the format, not the full live editor export. The real editor always uses the complete serializer with every defined section. Preserve this distinction in copy and implementation.

All three controls use data-demo-view values overview, questions, and preview. Corresponding panels use data-demo-panel with the same values. The handler sets aria-pressed on every control, hides unmatched panels through the hidden property, and applies a short entry class only to the visible panel when reduced motion is off. Reset invokes overview through the same handler. Do not create duplicate state logic for reset. No sample-view handler calls localStorage, form submission, clipboard, or download.

## Workflow dimensions and timing

The desktop workflow rail has a maximum 1280px width, 20px horizontal padding, 130px vertical margin, columns in the proportion .85fr to 1.35fr, and a 90px gap. Its explanation is sticky at 130px from the top and aligns to the start. The title scales between 36px and 54px, with 1.1 line height, -.055em tracking, and weight 500. Its body has a 310px maximum measure, 15px type, and muted color. The step navigation begins 45px below the text. Each link has 20px vertical padding, a bottom rule, a 14px title, and a small numbered marker. The active state emphasizes text weight and adds yellow behind the step marker.

Each right-hand workflow panel has at least 430px visual height, 45px inset, 10px corners, and 85px spacing before the next step. The collect background is #e4e6d5; the shape background is #ddcbb7; share uses #e4dc98. Paper surfaces use warm off-white and dark ink independent of surrounding theme. The rough-note surface is rotated minus three degrees. The structured sheet is a readable list of actual brief sections. The export sheet rotates three degrees and uses two offset paper shadows; its confirmation label remains inside the visible panel rather than overflowing the viewport.

The observer uses rootMargin '-20% 0px -35% 0px' and threshold zero. For each intersecting panel, highlight its corresponding data-step-link and add is-active. This is viewport-triggered emphasis, not a scrubbed timeline: scrolling determines which stage is active, while row entrances run on their own short timeline. The structure rows animate from opacity .2 and translateY(12px) to opacity 1 and zero translation over .55 seconds, staggered by 80ms per row using a custom item index. The animation is not tied to data generation and must never delay the real brief. Reduced motion disables it entirely.

Sample-document transitions run for .3 seconds, moving from opacity .4 and translateY(8px) to the final position. Starter preview hover uses a .4-second transform transition that settles its angled paper toward zero rotation and raises it eight pixels. Do not add perpetual animation or fake automatic typing to satisfy a motion requirement. The meaningful motion is state change and workflow explanation; the ordinary page remains readable and usable at rest.

## Starter-card and supporting-section geometry

The starter grid has three equal minmax(0,1fr) columns with 28px gaps. A preview is 340px tall with 32px top padding and 35px horizontal inset. Its paper has 28px internal padding, at least 355px height, and a slight project-specific rotation. The crop intentionally introduces the document as a designed preview, while the full notes remain available in the dossier. The preview title is 28px, weight 500, line-height 1.05, and -.05em tracking. Its category label is 8px and its excerpt and deliverables are 10px. Below the visual, the real card title is 25px with a 13px description and 12px action. Do not replace the full accessible card text with the mini-document's small type.

Section introductions use a left title and right explanation, separated by a generous gap of about 70px, with 50px before the grid. The editorial section is approximately 1240px wide, columns 1.05fr and 1fr, gap 90px, and margin 130px vertically. It reuses assets/type-blocks.webp, assets/type-blocks-640.webp, and assets/type-blocks-960.webp; the large rendition has declared 1440×960 dimensions. The desktop visible crop is square, and the mobile crop returns to 3:2. Use assets/space-grotesk.ttf and assets/geist-variable.woff2 for fonts. Preserve assets/CREDITS.txt and the original image provenance; no external font or image URL is required.

The FAQ uses a two-column introduction/content arrangement within 1240px, with native details and custom plus/minus indicators. Summary text is 15px and the answers are 14px. The final yellow section has roughly 80px top and 90px bottom padding; its large two-line heading grows up to 80px. Its action returns to the actual composer anchor, not an empty signup page.

## Breakpoint-by-breakpoint adaptation

At 1100px and below, add 20px margins around the product theater, remove its contextual rail, and reduce the workspace sidebar to 145px. Reduce workflow column gap to 50px and demonstration inset to 30px. Starter previews reduce to 310px height and a 20px horizontal inset. The editorial gap becomes 50px.

At 800px and below, the workflow becomes one column with 75px vertical margin, normal-flow introductory copy, and 35px gap before the demonstrations. The workflow navigation becomes a horizontal group with compact text. The app sidebar disappears; central page padding becomes 24px by 30px. Starter grids become one column, with each card temporarily using a visual/text two-column arrangement. The editor rail becomes a wrapping normal-flow toolbar. The readiness overview uses full available width. Maintain the actual writing sheet beneath those controls, rather than a tiny scaled document.

At 500px and below, the hero uses 36px vertical and 20px horizontal padding, 52px heading, and 15px description. Composer fields stack, notes start at 100px height, and the action/count row remains compact. The product theater has 12px exterior margins and 12px side padding; the app page uses 20px padding. Hide the redundant sample project title in the app bar. The sample title becomes 31px; its metadata and body remain readable. Workflow visuals use 28px by 20px inset and at least 390px height. Starter cards switch from tablet split to fully stacked, with 355px visual height, 32px preview title, and 12px preview excerpt. Dossiers become one column and category text drops out of their summary to preserve the project name. The editor uses 22px writing-sheet padding and 22px project-name field type. Verify 390px width explicitly.

## Input, persistence, and export invariants

The local keys remain firstword-theme, firstword-input, and firstword-brief. Treat storage parsing and writing as fallible operations. Parsed objects must be plain object-like records rather than arrays or primitives. Draft recovery uses bounded title/notes and validates project kind. Editor recovery requires every expected field to be a string no longer than 6000 characters and a known project kind. Never trust a saved object merely because JSON parsing succeeded.

The form updates its counter from the current textarea value. Whitespace-only title receives a custom validity message; notes require 20 trimmed characters even if native minlength counts leading spaces. Clear custom validity when the user edits the corresponding field. Do not create a fabricated spinner or wait before deterministic arrangement. On successful creation save input and brief, then navigate through a normal location change. On failure keep the generated Markdown on the current page.

The editor reads current fields at export time and merges them with the saved kind. Readiness checks only audience, success, and timing for nonempty trimmed strings; changing the title does not alter its count. Preview uses textContent, not innerHTML. Copy and download use the same briefMarkdown function, so edits cannot diverge between visible output and exported content. The local status distinguishes a successful save from values that are currently only on the page. Only one current brief is retained, and the visible copy must say so before visitors assume a multi-document cloud workspace exists.


## Final accessibility refinements

The product demonstration uses level-two headings beneath the page heading. Muted text inside fixed light product surfaces uses #5b5c4d for reliable contrast. Tiny eight- and nine-pixel labels are raised to a ten-pixel minimum; functional body and control text keep their larger sizes. Sidebar project names link to populated starter routes.


## Exact starter records and structural defaults

```json
{
  "kinds": {
    "website": {
      "name": "Website",
      "deliverables": "Page outline\nContent inventory\nVisual direction\nResponsive prototype",
      "questions": "Who is the primary visitor?\nWhat should they do next?\nWhich pages are essential?"
    },
    "campaign": {
      "name": "Campaign",
      "deliverables": "Core message\nChannel plan\nCreative concepts\nLaunch checklist",
      "questions": "Who should this reach?\nWhat action should the campaign inspire?\nHow will the team judge success?"
    },
    "product": {
      "name": "Product launch",
      "deliverables": "Positioning statement\nLaunch narrative\nProduct demonstration\nFeedback plan",
      "questions": "Who is the first customer?\nWhat changes for them?\nWhat evidence supports the promise?"
    }
  },
  "examples": [
    {
      "id": "fieldnotes",
      "title": "Fieldnotes studio",
      "kind": "website",
      "label": "A better starting point for a studio website.",
      "notes": "Introduce a small landscape architecture studio to potential residential clients.\nThe site should make the project photography easy to browse.\nWe need a clear explanation of the process and a simple way to prepare an inquiry.\nKeep the writing warm, concrete, and concise."
    },
    {
      "id": "weekend",
      "title": "The long weekend",
      "kind": "campaign",
      "label": "Give a local event one clear invitation.",
      "notes": "Invite neighbours to a weekend of independent music and food.\nThe campaign needs a poster, a short email, and three social posts.\nMake the schedule easy to understand.\nAvoid exaggerated claims and keep the invitation friendly."
    },
    {
      "id": "smallhours",
      "title": "Small Hours",
      "kind": "product",
      "label": "Explain a new product without the jargon.",
      "notes": "Introduce a focus timer for people who work in short creative sessions.\nShow how to set a session, take a break, and review the week.\nThe launch should include a product demo and a simple getting-started guide.\nWe want feedback from a small invited group before opening more widely."
    }
  ]
}
```

## Reference interaction handler

```javascript
const makeBrief = function makeBrief(input) {
  const notes = input.notes.trim();
  const firstLine =
    notes
      .split(/\n/)
      .map((line) => line.trim())
      .find(Boolean) || '';
  const kind = Object.hasOwn(kinds, input.kind) ? input.kind : 'website';
  return {
    title: input.title.trim(),
    kind,
    objective: firstLine,
    context: notes,
    audience: '',
    deliverables: kinds[kind].deliverables,
    questions: kinds[kind].questions,
    success: '',
    timing: '',
  };
};
const briefMarkdown = function briefMarkdown(brief) {
  return `# ${brief.title}\n\n## Objective\n\n${brief.objective}\n\n## Context\n\n${brief.context}\n\n## Audience\n\n${brief.audience || 'To be decided.'}\n\n## Deliverables\n\n${brief.deliverables}\n\n## Open questions\n\n${brief.questions}\n\n## Success criteria\n\n${brief.success || 'To be decided.'}\n\n## Timing\n\n${brief.timing || 'To be decided.'}\n`;
};
const data = JSON.parse(document.getElementById('firstword-data').textContent);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const store = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
};
function readObject(key) {
  try {
    const value = JSON.parse(store.get(key) || 'null');
    return value && typeof value === 'object' && !Array.isArray(value)
      ? value
      : null;
  } catch {
    return null;
  }
}
const theme = document.getElementById('theme');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  theme.textContent = dark ? 'Light' : 'Dark';
  theme.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
  store.set('firstword-theme', dark ? 'dark' : 'light');
}
setTheme(store.get('firstword-theme') === 'dark');
theme.addEventListener('click', () =>
  setTheme(document.documentElement.dataset.theme !== 'dark'),
);
const form = document.getElementById('brief-form');
if (form) {
  const title = document.getElementById('project-title');
  const kind = document.getElementById('project-kind');
  const notes = document.getElementById('project-notes');
  const exampleId = new URLSearchParams(location.search).get('example');
  const example = data.examples.find((item) => item.id === exampleId);
  const draft = example || readObject('firstword-input');
  if (draft) {
    title.value =
      typeof draft.title === 'string' ? draft.title.slice(0, 100) : '';
    kind.value = Object.hasOwn(data.kinds, draft.kind) ? draft.kind : 'website';
    notes.value =
      typeof draft.notes === 'string' ? draft.notes.slice(0, 3000) : '';
  }
  function updateCount() {
    document.getElementById('character-count').textContent =
      notes.value.length + ' / 3000';
  }
  form.addEventListener('input', () => {
    updateCount();
    store.set(
      'firstword-input',
      JSON.stringify({
        title: title.value,
        kind: kind.value,
        notes: notes.value,
      }),
    );
  });
  updateCount();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    title.setCustomValidity(title.value.trim() ? '' : 'Add a project name.');
    notes.setCustomValidity(
      notes.value.trim().length >= 20
        ? ''
        : 'Add at least 20 characters of notes.',
    );
    if (!form.reportValidity()) return;
    const input = { title: title.value, kind: kind.value, notes: notes.value };
    store.set('firstword-input', JSON.stringify(input));
    const brief = makeBrief(input);
    const saved = store.set('firstword-brief', JSON.stringify(brief));
    if (saved) {
      location.href = 'brief.html';
      return;
    }
    document.getElementById('storage-fallback').hidden = false;
    document.getElementById('fallback-text').value = briefMarkdown(brief);
    document.getElementById('form-status').textContent =
      'Browser storage is unavailable. Your brief is ready below to copy.';
  });
  title.addEventListener('input', () => title.setCustomValidity(''));
  notes.addEventListener('input', () => notes.setCustomValidity(''));
  const saved = readObject('firstword-brief');
  document.getElementById('resume-brief').hidden = !(
    saved && typeof saved.title === 'string'
  );
}
const editor = document.getElementById('brief-editor');
if (editor) {
  const brief = readObject('firstword-brief');
  const fields = [
    'title',
    'objective',
    'context',
    'audience',
    'deliverables',
    'questions',
    'success',
    'timing',
  ];
  const valid =
    brief &&
    fields.every(
      (key) => typeof brief[key] === 'string' && brief[key].length <= 6000,
    ) &&
    Object.hasOwn(data.kinds, brief.kind);
  document.getElementById('empty-brief').hidden = !!valid;
  editor.hidden = !valid;
  if (valid) {
    fields.forEach(
      (key) =>
        (document.querySelector(`[data-field="${key}"]`).value = brief[key]),
    );
    const preview = document.getElementById('markdown-preview');
    function readFields() {
      return {
        ...brief,
        ...Object.fromEntries(
          fields.map((key) => [
            key,
            document.querySelector(`[data-field="${key}"]`).value,
          ]),
        ),
      };
    }
    function update() {
      const current = readFields();
      preview.textContent = briefMarkdown(current);
      document.getElementById('export-text').value = briefMarkdown(current);
      const saved = store.set('firstword-brief', JSON.stringify(current));
      document.getElementById('save-state').textContent = saved
        ? 'Saved in this browser'
        : 'Changes kept on this page only';
    }
    editor.addEventListener('input', update);
    update();
    document.querySelectorAll('[data-view]').forEach((button) =>
      button.addEventListener('click', () => {
        const writing = button.dataset.view === 'write';
        document.getElementById('write-panel').hidden = !writing;
        document.getElementById('preview-panel').hidden = writing;
        document
          .querySelectorAll('[data-view]')
          .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
        if (!reduced.matches)
          (writing
            ? document.getElementById('write-panel')
            : document.getElementById('preview-panel')
          ).animate(
            [
              { opacity: 0.4, transform: 'translateY(8px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 220, easing: 'ease-out' },
          );
      }),
    );
    document
      .getElementById('copy-brief')
      .addEventListener('click', async () => {
        const text = briefMarkdown(readFields());
        const fallback = document.getElementById('export-fallback');
        fallback.hidden = false;
        document.getElementById('export-text').value = text;
        try {
          await navigator.clipboard.writeText(text);
          document.getElementById('export-status').textContent =
            'Brief copied as Markdown.';
        } catch {
          document.getElementById('export-status').textContent =
            'Select and copy the brief below.';
          document.getElementById('export-text').focus();
          document.getElementById('export-text').select();
        }
      });
    document.getElementById('download-brief').addEventListener('click', () => {
      const current = readFields();
      const blob = new Blob([briefMarkdown(current)], {
        type: 'text/markdown;charset=utf-8',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download =
        (current.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') || 'firstword-brief') + '.md';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      document.getElementById('export-status').textContent =
        'Markdown file prepared for download.';
    });
  }
}

// Marketing demonstrations use fixed sample data and never modify saved writing.
const demoButtons = [...document.querySelectorAll('[data-demo-view]')];
function showDemo(view) {
  demoButtons.forEach((button) =>
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.demoView === view),
    ),
  );
  document.querySelectorAll('[data-demo-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.demoPanel !== view;
    panel.classList.toggle('demo-enter', !panel.hidden && !reduced.matches);
  });
}
demoButtons.forEach((button) =>
  button.addEventListener('click', () => showDemo(button.dataset.demoView)),
);
document
  .getElementById('demo-reset')
  ?.addEventListener('click', () => showDemo('overview'));
const steps = [...document.querySelectorAll('[data-step]')];
if (steps.length && 'IntersectionObserver' in window) {
  const stepObserver = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          document
            .querySelectorAll('[data-step-link]')
            .forEach((link) =>
              link.classList.toggle(
                'active',
                link.dataset.stepLink === entry.target.dataset.step,
              ),
            );
          entry.target.classList.add('is-active');
        });
    },
    { rootMargin: '-20% 0px -35% 0px', threshold: 0 },
  );
  steps.forEach((step) => stepObserver.observe(step));
}
document.querySelectorAll('[data-filter]').forEach((button) =>
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document
      .querySelectorAll('[data-filter]')
      .forEach((item) =>
        item.setAttribute('aria-pressed', String(item === button)),
      );
    let visible = 0;
    document.querySelectorAll('[data-kind]').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.kind !== filter;
      if (!card.hidden) visible++;
    });
    document.getElementById('filter-count').textContent =
      visible + (visible === 1 ? ' starter' : ' starters');
  }),
);
function updateReadiness() {
  const keys = ['audience', 'success', 'timing'];
  const missing = keys.filter(
    (key) => !document.querySelector(`[data-field="${key}"]`)?.value.trim(),
  );
  const count = document.getElementById('readiness-count');
  if (!count) return;
  count.textContent = 3 - missing.length + ' / 3';
  document.getElementById('readiness-label').textContent = missing.length
    ? 'Still to decide: ' + missing.join(', ') + '.'
    : 'Audience, success, and timing are in place.';
}
if (editor) {
  editor.addEventListener('input', updateReadiness);
  updateReadiness();
}

```
