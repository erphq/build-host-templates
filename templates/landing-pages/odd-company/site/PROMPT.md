# Odd Company | Good ideas. Made visible.

## Complete deliverable

Build a complete five-page creative-studio portfolio called Odd Company. Deliver a homepage, a local project-brief builder, and three individual case studies: OPEN, SHIFT, and TOGETHER. The studio and projects are fictional, self-initiated design concepts. The original generated campaign images are the primary visual content. Do not invent real clients, awards, commercial results, team biographies, or testimonial quotes.

The homepage headline is “GOOD IDEAS. MADE VISIBLE.” Its supporting copy is “Identity, packaging, and campaigns for brands with a clear point of view.” Use Start a project consistently for the inquiry intent. The form creates a local, unsent brief that can be copied or downloaded. It must not send a message or pretend to establish an agreement.

## Reference research and independence

The research reference is AgencyCreative, also presented as Agznko, by Ridhwan Co.: https://www.framer.com/marketplace/templates/agencycreative/ and https://agznko.framer.website/ . The marketplace, live homepage, and Reimagining Brand Identity case-study page were inspected read-only. Useful general principles include presenting work with clear categories and providing complete case-study routes.

Odd Company uses its own visual identity, copy, project artwork, typography, page composition, and interactions. It does not copy the reference's black-and-lime branding, avatar treatment, agency-team imagery, counters, client claims, prose, or code. The work is presented as three large scroll-stacked panels rather than a conventional sequence of agency cards. Each case study has original project-specific content and honest scope.

Do not treat source attribution as a license to recreate a reference page. The result should be independently recognizable. Only the existing Lucide icon renderer is reused as a utility from the parent project; no Aven page shell or styling is imported.

## Design direction

Reading this as an experimental studio portfolio for design-conscious visitors, using a typographic poster language and a clear sequential work presentation. DESIGN_VARIANCE is 8, MOTION_INTENSITY is 7, and VISUAL_DENSITY is 3. Strong display type, one substantial hero artwork, pinned project panels, concise writing, and separate case-study pages create the structure.

Use the existing standalone HTML/CSS/JavaScript packaging architecture. All runtime assets remain local. Motion uses native sticky positioning, progressively enhanced CSS view timelines, and small Web Animations API arrivals. No new animation framework, custom cursor, fake application screenshot, or decorative WebGL scene is required.

## Typography and visual system

Use Archivo Black for display headings and the wordmark. It is obtained from the official Google Fonts repository and packaged with its SIL Open Font License. Use the existing local Geist variable font for body copy, navigation, forms, and small labels. Do not replace Archivo Black with a generic system bold font in the finished package. Preload the display font to reduce visible type changes.

The light palette uses #f5f5f3 paper, #202024 ink, #626269 supporting text, #cbcbce rules, #e9e9e8 grouped surfaces, and #b93926 for the single vermilion UI accent. The dark palette uses #19191d paper, #f2f1f5 ink, #bab8c3 supporting text, #47464f rules, #24242b surfaces, and #ffa58e accent with dark text on accent buttons. Keep photographs in their original colors.

Use one sharp-edged shape system: square image frames, rectangular controls, and flat surfaces. Thin rules organize actual content. Avoid rounded pill navigation, glowing buttons, grain overlays, crosshair decoration, or invented status indicators. Do not invert the theme of individual sections. The whole page follows the selected light or dark token set.

Headlines are large but controlled. The hero remains within two lines on desktop, with its supporting description and primary CTA visible without scrolling. The body uses 16–19px according to context. Project headings must fit their allocated column, especially the longer TOGETHER name. Do not hide clipping by reducing all body text or introducing arbitrary word breaks.

## Header and hero

Use a 72px header with the Odd Company wordmark and links to Work, Practice, and Start a project, plus a theme control. It may remain sticky to keep navigation available during the work sequence. Document the small layer system: normal content, sticky work panels, header, and skip link. Avoid arbitrary high z-index values.

The desktop hero places a large two-line headline and short copy beside one substantial OPEN campaign image. The image is an actual generated raster asset showing the yellow can against blue, not a CSS reconstruction. Preserve the can's wordmark and full silhouette in the crop. The image itself links to the OPEN case study.

A short arrival transition can move the headline into place. Its text remains visible throughout. The hero does not contain a fake logo wall, experience counter, team portraits, award badge, or decorative metadata strip. On phones, the hero stacks naturally with the artwork beneath the introduction.

## Scroll-stacked work presentation

The homepage contains three project panels in the exact order OPEN, SHIFT, TOGETHER. Each panel has a project category, large name, concise project-specific description, an Open study link, and a large image link. Captions and labels belong outside the images. Do not place decorative badges on the artwork.

On desktop, each panel uses native sticky positioning beneath the header, with enough height for the next panel to arrive over it. The panels share the page's theme, so the transition feels like moving through a coherent portfolio. The project text and image must stay fully readable while the panel is pinned. Do not allow the header to cover the case title or action.

Where CSS view timelines are supported, enhance the image's arrival with a small scale and opacity change. Use a named timeline on the project panel so the image animation is driven by the panel's visibility in the document, not by a non-scrolling clipped image wrapper. Declare animation-timeline after the animation shorthand. Use feature detection and a static fallback, because this CSS capability is not supported uniformly across browsers.

On phones and under reduced motion, remove the sticky presentation and use normal document flow. All three studies remain available. This fallback is a designed layout, not an error state. Do not use wheel interception, a custom scrollbar, or a JavaScript scroll loop.

## Exact project narratives

OPEN is a Packaging study. Its line is “A bright idea, easy to recognize.” The concept is a sparkling-water identity using one bold wordmark, one yellow can, and a clear product silhouette. The brief is to make packaging expressive without competing claims. The design decision is to use a yellow can against blue and keep the surrounding composition simple. Scope includes packaging direction, wordmark study, and one campaign image. The outcome is one original generated photograph and a portfolio presentation, not a commercially available beverage or real client commission.

SHIFT is a Graphic design study. Its line is “Give an idea a physical presence.” The concept is an exhibition identity using black-and-white typography, a focused vermilion geometric accent, and a printed poster photographed against a light wall. The brief is to make an exhibition concept confident through a small repeatable visual vocabulary. Scope includes exhibition identity, poster direction, and art direction. The exhibition and small poster copy are fictional; no real event or institution is represented.

TOGETHER is an Identity study. Its line is “A shared idea, made tangible.” The concept appears on a cobalt tote and a white invitation. The brief is to create a welcoming system that works across ordinary objects. The design decision uses direct typography and blue-and-white material contrast. Scope includes visual identity, printed invitation, and an object application. It is a self-initiated concept, not an existing organization or commissioned project.

The exact project records are appended below. Use them consistently in the homepage, case-study pages, image alternatives, and related-project navigation. Do not reuse generic marketing copy across all three narratives.

## Practice and studio statement

After the work sequence, provide a focused practice section headed “MAKE EVERY CHOICE COUNT.” Its brief explanation connects a word, image, object, and digital experience to one coherent idea. Use native disclosures for Identity, Packaging, and Campaigns. Each disclosure contains a concise description of the work, not a generic promise of business growth.

Follow with a studio statement headed “A SMALL STUDIO FOR CLEAR IDEAS.” This is the place to explain the fictional practice and self-initiated nature of the collection. Use two readable paragraphs and no fabricated numbers. The footer uses the wordmark, a short description, the same Start a project action, credits, and the return to ProtoSites.

## Case-study pages

Create open.html, shift.html, and together.html. Each has a unique document title and description. The introduction contains Work navigation, a meaningful category, a large project title, and the short project line. Follow with the corresponding original photograph in a large frame and a concise factual generated-concept caption.

The narrative is organized as The question, The direction, and The scope. These sections use the exact project-specific brief, decision, deliverables, and outcome from the data. Keep body copy readable and the section hierarchy simple. Do not add fake launch dates, conversion improvements, press coverage, or client testimonials.

At the bottom, a large Next study link leads to the following project, cycling from TOGETHER back to OPEN. All routes also provide navigation back to the homepage's work section. The image is one original campaign photograph per project; a crop is not presented as a second commissioned result.

## Local project-brief builder

Create brief.html with a clear “START WITH AN IDEA.” introduction. The form contains a required project name, a scope fieldset with Identity, Packaging, Campaign, and Digital design checkboxes, a required idea description, and a timing select. Timing options are Exploring the idea, This quarter, and Later this year. These choices describe an interest, not a delivery commitment.

Labels appear above text controls, and scope uses a real fieldset and legend. A project name must contain meaningful text, the idea needs at least 20 non-whitespace characters, and at least one scope must be selected. Use native validity feedback and a clear inline message for missing scope. Move focus to the relevant control when necessary. Editing clears obsolete validity messages.

The Create brief action builds a plain-text local draft containing the project name, selected scopes, timing, and idea. Render user content with textContent, never as HTML. The result is a labeled, focusable section. Show it with a short state-change transition when motion is allowed and move it into view without hiding the actual content.

Edit choices returns to the form. Changing an input hides and invalidates the old result. Download brief creates a local text file. Copy brief uses the clipboard only after the visitor clicks the button; if access fails, show a message directing them to the download or selectable text. Do not claim that a message has been sent, a project accepted, a slot reserved, or a contract created.

No email address, payment details, account, remote database, analytics transmission, or external submission is required. The draft is not stored remotely. The user decides what to do with the downloaded text.

## Motion and theme behavior

Use Web Animations API for brief heading and result arrivals, with restrained translation and opacity. IntersectionObserver triggers secondary headings once. The scroll-stack itself uses native CSS. Do not mix several animation engines on the same element or animate layout dimensions. Any image view-timeline enhancement should own only that image's transform and opacity.

Honor prefers-reduced-motion in CSS and JavaScript. Skip new animations, cancel active animations if the preference changes, make scrolling instant, and remove sticky project pinning. Content and controls remain visible. Do not rely on motion to reveal otherwise unavailable links or information.

The initial theme follows the system. A local Light/Dark action persists a valid explicit preference when browser storage works and falls back gracefully otherwise. The visible button text is included in its accessible name. Both themes retain adequate contrast, the same hierarchy, and unchanged image content.

## Assets and packaging

Package open.webp, shift.webp, together.webp, their responsive 640px variants, Archivo Black, Geist, the font licenses, Lucide's license, CREDITS.txt, and generation provenance. hero.webp duplicates open.webp for parent-gallery compatibility and is not another unique image.

All artwork was generated as original fictional campaign imagery. OPEN has the requested word on a yellow can; SHIFT is an exhibition-poster concept; TOGETHER is a tote and invitation still life. Any small ancillary copy within the generated artwork is part of the fictional visual study. It is not quoted from the reference or evidence of a real event.

Keep runtime paths relative so the extracted five-page site works without an installation step or remote image service. Reserve image dimensions and preload the display font. Use responsive images and reasonable compression so large artwork does not make the phone experience unnecessarily slow. Include exact source attribution for the fonts and icon library.

## Acceptance checks

Inspect the homepage, work stack, case pages, and brief flow at desktop and phone widths, including 1280, 768, 390, and 320px where relevant. Confirm that project names and headlines are not clipped, the stack actually pins beneath the header, later panels arrive correctly, and mobile/reduced-motion fallbacks remain in normal flow.

Test every case link, next-study navigation, disclosure, theme state, form validation, scope selection, draft creation, stale-result invalidation, clipboard fallback, and download action. Verify all five HTML routes, relative assets, responsive image references, font licenses, ZIP integrity, and the exact prompt in the download. Run TypeScript, appropriate lint, a scoped performance/accessibility audit, the library validator, and the parent production build.

Read every visible string for clarity. Remove decorative numbering, fake social proof, em dashes, mixed-family emphasis, and claims of work that has not been implemented. Only count the site toward the active goal after the updated ProtoSites deployment succeeds.


## Exact project records

```json
[
  {
    "slug": "open",
    "name": "OPEN",
    "category": "Packaging",
    "image": "open.webp",
    "line": "A bright idea, easy to recognize.",
    "description": "A self-initiated sparkling-water identity that lets one word, one color, and one clear silhouette do the work.",
    "brief": "Create a packaging concept that reads quickly and feels expressive without relying on a collection of competing claims.",
    "decision": "Use a single bold wordmark on a yellow can, then place it against blue to create a clear visual relationship. Keep the surrounding composition simple enough for the object to remain the subject.",
    "deliverables": [
      "Packaging direction",
      "Wordmark study",
      "Campaign image"
    ],
    "outcome": "One original generated campaign photograph and a complete portfolio presentation. This is a fictional concept, not a commercial product or client commission."
  },
  {
    "slug": "shift",
    "name": "SHIFT",
    "category": "Graphic design",
    "image": "shift.webp",
    "line": "Give an idea a physical presence.",
    "description": "An exhibition-identity study built around strong type, a focused geometric accent, and the scale of a printed poster.",
    "brief": "Make an exhibition concept feel confident through a small number of repeatable visual choices.",
    "decision": "Let black-and-white typography establish the structure, with a vermilion form acting as an interruption. Photograph the poster as a physical object so the identity has material context.",
    "deliverables": [
      "Exhibition identity",
      "Poster direction",
      "Art direction"
    ],
    "outcome": "One original generated poster photograph. The exhibition, text, and identity are fictional, and no real event or institutional relationship is implied."
  },
  {
    "slug": "together",
    "name": "TOGETHER",
    "category": "Identity",
    "image": "together.webp",
    "line": "A shared idea, made tangible.",
    "description": "A community-identity concept explored through a tote bag, printed invitation, and a direct typographic voice.",
    "brief": "Create a welcoming visual system that can live across ordinary objects without becoming complicated.",
    "decision": "Use a clear wordmark and a blue-and-white material palette. The objects show how the same idea can carry across different scales and surfaces.",
    "deliverables": [
      "Visual identity",
      "Printed invitation",
      "Object application"
    ],
    "outcome": "One original generated identity still life and a digital case study. This is self-initiated concept work, not an existing community organization or client project."
  }
]
```

## Reference interaction handler

```javascript
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const system = matchMedia('(prefers-color-scheme: dark)');
  let preferred = null;
  try {
    const value = localStorage.getItem('odd-company-theme');
    if (['dark', 'light'].includes(value)) preferred = value;
  } catch {}
  const theme = document.querySelector('#theme');
  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    theme.textContent = dark ? 'Light' : 'Dark';
    theme.setAttribute(
      'aria-label',
      dark ? 'Use light theme' : 'Use dark theme',
    );
  }
  setTheme(preferred ? preferred === 'dark' : system.matches);
  theme.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    preferred = dark ? 'dark' : 'light';
    setTheme(dark);
    try {
      localStorage.setItem('odd-company-theme', preferred);
    } catch {}
  });
  system.addEventListener('change', () => {
    if (!preferred) setTheme(system.matches);
  });
  function arrive(el) {
    if (el && !motion.matches)
      el.animate(
        [
          { transform: 'translateY(15px)', opacity: 0.8 },
          { transform: 'translateY(0)', opacity: 1 },
        ],
        { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' },
      );
  }
  arrive(document.querySelector('.arrive'));
  if (!motion.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            arrive(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    document
      .querySelectorAll('.arrive-secondary')
      .forEach((el) => observer.observe(el));
  }
  motion.addEventListener('change', () => {
    if (motion.matches) document.getAnimations().forEach((a) => a.cancel());
  });
  const form = document.querySelector('#brief-form');
  if (!form) return;
  const result = document.querySelector('#brief-result');
  const error = document.querySelector('#brief-error');
  let draft = '';
  form.addEventListener('input', () => {
    result.hidden = true;
    draft = '';
    error.textContent = '';
    form
      .querySelectorAll('input,textarea')
      .forEach((input) => input.setCustomValidity(''));
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const text = (key) => {
      const value = data.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };
    const project = form.querySelector('[name=project]');
    const idea = form.querySelector('[name=idea]');
    project.setCustomValidity(text('project') ? '' : 'Enter a project name.');
    idea.setCustomValidity(
      text('idea').length >= 20
        ? ''
        : 'Describe the idea in at least 20 characters.',
    );
    if (!form.reportValidity()) return;
    const scopes = data
      .getAll('scope')
      .filter((value) => typeof value === 'string');
    if (!scopes.length) {
      error.textContent = 'Choose at least one kind of work.';
      form.querySelector('[name=scope]').focus();
      return;
    }
    draft =
      'ODD COMPANY / PROJECT BRIEF\n\nProject: ' +
      text('project') +
      '\nScope: ' +
      scopes.join(', ') +
      '\nTiming: ' +
      text('timing') +
      '\n\nThe idea\n' +
      text('idea') +
      '\n\nUnsent local draft for a fictional studio. No message or agreement has been submitted.';
    document.querySelector('#brief-text').textContent = draft;
    error.textContent = '';
    result.hidden = false;
    result.focus({ preventScroll: true });
    arrive(result);
    result.scrollIntoView({
      behavior: motion.matches ? 'auto' : 'smooth',
      block: 'start',
    });
  });
  document.querySelector('#edit-brief').addEventListener('click', () => {
    form.scrollIntoView({
      behavior: motion.matches ? 'auto' : 'smooth',
      block: 'start',
    });
    form.querySelector('[name=project]').focus({ preventScroll: true });
  });
  document.querySelector('#download-brief').addEventListener('click', () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: 'text/plain;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'odd-company-project-brief.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  document.querySelector('#copy-brief').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(draft);
      status.textContent = 'Brief copied.';
    } catch {
      status.textContent =
        'Clipboard access is unavailable. Download the brief or select the text above.';
    }
  });
  form.querySelector('[type=submit]').disabled = false;
})();

```
