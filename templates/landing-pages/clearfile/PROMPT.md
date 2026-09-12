# Clearfile — complete SaaS website specification

Create an original, production-quality fictional document-review SaaS website named Clearfile. Deliver three complete standalone pages: a marketing homepage, a working sample review room, and a pricing page. The homepage must make the product easy to understand; the review room must genuinely let visitors read sample documents, change their review status, write notes, and save those decisions in their own browser. The pricing page must calculate and explain the difference between monthly and annual billing. This is a complete interactive concept, not a real file-sharing service or a screenshot-only marketing mockup.

## Reference principles and independent design

The research source is Papermark at https://www.papermark.com/, discovered through https://saaspo.com/. Study the sequencing principle: an atmospheric introduction establishes the feeling, then a large operational product view makes the promise concrete. Use that general lesson without reproducing Papermark's full-bleed photographic hero, typography composition, brand, customer names, trust claims, product screenshots, logos, copy, or source code. Clearfile uses an original full-width still life, a teal identity, an interactive multi-view product window, a sticky workflow narrative, and its own original content. Credit the source as design research in the library entry, not as a sponsor or affiliate.

Clearfile should feel settled and practical. Imagine a desk where the work, the review, and the decision all have a clear place. The main metaphor is translucent sea-glass acrylic holding paper, followed by original document-cover artwork and layered review surfaces. Avoid generic glowing orbs, neon purple gradients, endless pill badges, floating dashboards that cannot be used, fake company-logo strips, and invented user testimonials. Do not add a performance statistic without a real data source. The sample documents are fictional and should be labeled as examples.

## Design tokens

Use Geist Variable throughout. Establish contrast through scale and weight, not through an arbitrary second display typeface. The large homepage heading uses approximately 450 weight, tight tracking around -0.065em, and 1.02 line height. Body copy is 16 to 19 pixels depending on hierarchy, with comfortable 1.55 to 1.8 line height. Product metadata is 12 to 14 pixels, but never hide a necessary action in unreadably tiny text. Self-host the font and include its license. Use font-display swap and a single sensible font preload.

Light theme tokens: paper #f3f5f2, ink #123c39, muted text #526862, dividers #c5d1cb, supporting panel #e1eae4, and accent #ad3825. Dark theme tokens: paper #102b29, ink #edf4eb, muted text #b4c9c1, dividers #41605a, panel #1d3a35, and accent #ffad98. The dark decision section retains its deliberately dark presentation in both themes. Never invert or recolor the photograph. Use 5 to 8 pixel corners consistently for functional surfaces. Avoid a mixture of oversized rounded cards and hard-edged components without a reason.

The normal desktop outer rail is five percent of the viewport. Header height is 80 pixels, dropping to 70 on phones. Section padding is typically 75 pixels vertically, while the hero receives roughly 85 pixels above and 65 below. Use broader spacing around major narrative changes and tighter rhythm inside the review interface. Borders are one pixel. Focus outlines are three pixels in the accent color with five-pixel offset. Actions should have a minimum useful touch height near 44 to 48 pixels.

## Shared page shell

Create a text wordmark, clearfile, with a small CSS-built document mark. The mark is a simple outlined rectangle with a thick top rule and slight skew, not a copied logo or an external icon font. It is decorative and hidden from assistive technology; the brand link itself has readable text. Navigation includes Product, Pricing, a theme toggle, and a desktop Try the demo link. Product goes to demo.html. Pricing goes to pricing.html. The wordmark returns to index.html.

Use ordinary anchor links between these standalone pages so navigation works from a local folder and within the hosted library. The theme toggle is a button. Its visible label and accessible name describe the next action, switching between Light and Dark. Persist the preference in a clearfile-specific local-storage key, with try/catch so restricted storage does not break the page. Do not introduce authentication or an unusable Sign in button.

All pages include a visible-on-focus skip link targeting main. Use one h1 per page, a main landmark, labeled navigation, and a footer. The footer links to Product, Pricing, actual credits, and ProtoSites. Include a short honest statement that this is a fictional SaaS concept, its documents and prices are examples, and reviews stay in the browser. Do not scatter long technical disclaimers throughout the marketing copy.

## Homepage: cinematic opening

Build a full-width atmospheric hero rather than the former small inset photograph. Place the original teal tray photograph behind the entire opening, cover the viewport width, and use a dark teal directional overlay that preserves legibility. The photograph is a visual metaphor, not a claim about a manufactured product. The reference uses a looping workplace video; this original study uses its own still life with a progressive scroll-linked translation. Do not claim video playback in the implementation or prompt.

The desktop header overlays the hero, approximately 88 pixels high, with 6.25-percent horizontal rails. Use white navigation text and a white demo action. The hero extends behind it through a negative header-height margin. Give the opening approximately 780 pixels of minimum height at a normal desktop size, with generous space above the headline. Headline: “The work’s ready. Bring everyone with it.” Use two deliberate lines, regular Geist, near 6.7vw bounded between 54 and 96 pixels, tight -0.06em tracking, and 1.04 line height. The supporting paragraph is roughly 510 pixels wide and 18 pixels in size. Its job is to explain the review product, not advertise design quality.

The primary action opens the actual demo.html review room. Below it, a three-column footer rail links to the product, workflow, and handoff sections. These are real same-page anchors with useful labels. Do not add fabricated certification badges, revenue counters, company logos, customer reviews, or investment claims to imitate the reference's trust sections. Instead, show the real sample workflow and original product artifacts.

At phone widths, reduce the hero padding, keep the primary action reachable, and maintain clear white-on-teal contrast. The header becomes 76 pixels high. The three footer links can stack on the narrowest screens. Preserve normal scrolling and do not shrink functional text merely to retain a desktop arrangement.

## Homepage: full product demonstration

Follow the hero with a broad editorial statement. Its leading clause is darker and medium-weight, while the continuation is muted but fully readable. Use 26 to 39 pixel type, a measure around 820 pixels, and generous space before the product window. The statement explains shared context and decisions.

The product demonstration is a substantial HTML application surface, framed in dark teal with roughly 48 pixels of desktop padding. It is not a screenshot with nonfunctional controls. The window has a 215-pixel navigation sidebar, a toolbar, a title region, and three switchable views: Documents, Decisions, and Handoff. On narrow screens the sidebar converts to a horizontal view selector and the outer frame padding reduces to 12 pixels.

Documents shows three original Northstar project artifacts. Each artifact has a real link to its exact sample document through demo.html?document=brand, launch, or handoff. Create the cover artwork in HTML and CSS: sea-glass ring geometry for the brand direction, terracotta vertical bars for the launch brief, and a blue modular grid for the handoff. Give them distinct compositions and concise original cover typography. This artwork is decorative; hide its tiny printed labels from assistive technology and give the functional document link readable title, type, owner, and status text.

The desktop gallery has three columns. Phone presentation becomes compact horizontal document rows with a small cover beside the metadata, preserving readability rather than scaling down the entire application. Document statuses load from the same browser-local review data used by the real review room. Approved and Changes requested receive restrained semantic backgrounds; every state remains written as text.

Decisions shows a flat list of current document decisions with file icons, owners, types, status, and a link to review the chosen document. Handoff shows a four-item working checklist: check document links, confirm the next owner, resolve review notes, and package current files. Store only the checked identifiers in a separate Clearfile local key. Validate restored data as an array, ignore unknown identifiers, and show an accurate count from zero to four. The checklist does not transmit files or claim to complete a real project.

View buttons expose aria-pressed, selected styling, and explicit content changes. A short 260-millisecond opacity and eight-pixel translation may ease the selected pane into place. Reduced motion updates it instantly. The Handoff call to action in the later workflow section must select this view, scroll the product section into view, and place focus on the selected navigation button without an extra scroll jump.

## Homepage: sticky workflow narrative

The next section is a two-column workflow narrative. On the left, a sticky introduction explains the journey from asking for feedback to moving the project forward. On the right, three large stacked demonstration panels show context, decision, and handoff. Each panel contains a meaningful product illustration and a working link or button, not only a title and paragraph.

The context panel contains an original document cover with a layered review-note surface. Clearly identify the note as sample writing, not a testimonial. The decision panel contains a file header, two visible status treatments, a written explanation, and a link to the Brand direction review. The handoff panel presents a clear completion symbol, short description, and a working Try the checklist button. Use a consistent 7-pixel panel shape, fine borders, moderate shadows for elevated note surfaces, and a real hierarchy between headings and product details.

The left introduction remains sticky only while its owning section scrolls. On phones it returns to normal flow above the panels. A progressive CSS view timeline can raise each panel by 35 pixels as it enters. The original hero image may translate and scale slightly on exit. There is no fake progress timer, autoplay carousel, mandatory animation sequence, or global scroll-loop handler. Every section stays visible and useful when motion is reduced or unsupported.

## Homepage: final handoff and questions

Use a deep teal closing section with a large two-line value statement on one side and a considered completion panel on the other. The panel contains a completion icon, a short next-step message, and a real pricing link. The primary action opens the sample room. The final questions explain actual supported controls, local-only storage, and the fictional project material. Keep the three-page product intact: this richer homepage leads into the working review room and transparent sample pricing rather than replacing them with empty marketing links.

## Review-room page

The review room has a compact page heading followed by a two-column workspace. The sidebar is approximately 280 pixels wide and includes a labeled search field, a live result count, and one selection button for each sample document. The main panel presents owner and type metadata, document title, summary, complete body text, a decision selector, note textarea, Save review action, Reset sample reviews action, and a status message.

Use the exact three records supplied below: Brand direction, Launch brief, and Production handoff. Their body text is real original sample writing, not lorem ipsum. Parse the optional document query parameter and validate it against known identifiers. An unknown identifier falls back to the first document. Do not put raw query text into HTML. Selecting a document updates the title, metadata, summary, body, status, and note together. Use textContent or an equivalent safe rendering method for text, especially review notes.

Search matches document title, owner, and type case-insensitively. It filters the sidebar while leaving the active document readable. Update a polite live count and show a clear empty state when nothing matches. Clearing the field reveals all three documents. Selection buttons expose aria-pressed and point to the document panel through aria-controls. A selected button uses a background and border rather than relying only on color.

The decision selector offers exactly three known states. Notes have a maximum length of 1,200 characters. Save review writes the current known document's status and trimmed note to browser-local storage, then refreshes its sidebar status. The saved object is namespaced to Clearfile. Validate stored values before using them: status must be a known option and note must be a string bounded to the maximum length. Ignore malformed JSON and unknown records, retaining the original sample defaults.

A save message must distinguish actual persistent browser storage from an in-memory fallback. Say “Review saved in this browser. Nothing sent.” only when storage succeeds. If storage is unavailable, say the review is saved for this visit. Reset sample reviews restores all original statuses and notes, persists that reset if possible, refreshes the current panel, and reports the result. Make it clear that visitors should save before switching documents and only saved changes are retained. Do not silently imply that this is a synchronized collaborative backend.

The workspace must remain usable on phones. Stack the document list above the content panel, simplify the document buttons to compact rows, and reduce internal padding while preserving readable body text and form controls. Keep the document textarea resizable vertically. Avoid fixed-height panels that trap users in multiple competing scroll regions. The whole page scrolls naturally.

## Pricing page

Use a clear two-line page heading and short explanation followed by a labeled Monthly/Annual button group. Display three sample plans: Solo, Team, and Studio. Monthly example prices are $12, $28, and $64. Annual monthly equivalents are $9, $22, and $49, corresponding to total annual charges of $108, $264, and $588. Derive these totals from the plan data; never hand-code inconsistent totals in separate components.

When Annual is selected, each plan shows its monthly equivalent and explicitly states the total billed yearly. When Monthly is selected, each shows the monthly amount billed monthly. A live status message summarizes the selected billing mode. aria-pressed tracks the selected button. Include the plan's actual sample feature list from the data and a demo link, not a checkout button. The Team plan may use the sea-glass background for visual emphasis, but do not fabricate a Most popular claim.

At desktop size, use three equal columns with aligned padding. On phones, stack the plans. Keep the caveat about illustrative USD prices, taxes, and no actual subscription close to the plans. Do not collect payment details or add a broken purchase flow. All demo links reach the same fully working review room; the concept does not enforce plan limits.

## Motion and delivery

Use motion to clarify changes. Document switching may animate the content from six pixels below with opacity rising over approximately 230 milliseconds. Do not animate the document body indefinitely. A progressive CSS view-timeline can raise the homepage product panel into place by around 35 pixels as it enters the viewport. In unsupported browsers, the panel is already visible. Avoid reducing text contrast during scrolling. Buttons may shift their arrows subtly on hover. There is no need for a perpetual ticker or fake loading sequence.

Honor prefers-reduced-motion in JavaScript and CSS. Disable entrance and scroll motion under that preference while keeping state changes immediate and complete. Animate only transform and opacity. Do not add a global scroll listener. Use native document flow and ordinary page navigation.

Deliver index.html, demo.html, pricing.html, the complete assets folder, credits, font licenses, and this detailed prompt. All three pages work when extracted from a downloadable folder. Verify local links and the offline pack return link. Test deep links to each sample document, invalid query fallback, search with and without matches, saving a changed status and note, reloading to check persistence, restoring sample data, both billing modes and arithmetic, and desktop/phone navigation. Run source syntax, asset, prompt, TypeScript, lint, and production-build checks appropriate to the existing library. Inspect actual rendered pages and use performance/accessibility diagnostics to find real issues. Report only observed behavior; a working local demonstration does not prove a real multi-user SaaS backend exists.


## Exact sample records

```json
{
  "documents": [
    {
      "id": "brand",
      "name": "Brand direction",
      "owner": "Jules",
      "kind": "Creative",
      "summary": "A clearer visual language for the next chapter.",
      "body": "Use the sea-glass palette as the primary identity. Keep typography quiet and spacious. Reserve the vermilion accent for decisions and next actions. The launch presentation should introduce the new wordmark before showing its applications.",
      "status": "In review",
      "note": "Please confirm the accent-color direction."
    },
    {
      "id": "launch",
      "name": "Launch brief",
      "owner": "Mina",
      "kind": "Strategy",
      "summary": "One useful promise, shared across every launch touchpoint.",
      "body": "The launch explains how teams collect feedback, make a decision, and keep a clean record. Start with a small invited group. Gather qualitative feedback on the review flow before opening wider access. Publish a plain-language changelog after the first iteration.",
      "status": "Changes requested",
      "note": "Add the owner for the first customer interviews."
    },
    {
      "id": "handoff",
      "name": "Production handoff",
      "owner": "Theo",
      "kind": "Delivery",
      "summary": "The final details that make the work ready to use.",
      "body": "Package the source files with a short readme. Include font licenses, image provenance, export sizes, and a contact owner in the real project. Verify links and keyboard navigation. Archive superseded exports so the current version is easy to find.",
      "status": "Approved",
      "note": "Ready for the example archive."
    }
  ],
  "plans": [
    {
      "id": "solo",
      "name": "Solo",
      "monthly": 12,
      "annual": 9,
      "description": "A focused space for independent work.",
      "features": [
        "3 active review rooms",
        "1 editor",
        "Local concept demo"
      ]
    },
    {
      "id": "team",
      "name": "Team",
      "monthly": 28,
      "annual": 22,
      "description": "A shared rhythm for a small team.",
      "features": [
        "20 active review rooms",
        "5 editors",
        "Review-history concept"
      ]
    },
    {
      "id": "studio",
      "name": "Studio",
      "monthly": 64,
      "annual": 49,
      "description": "Room for a larger review practice.",
      "features": [
        "60 active review rooms",
        "15 editors",
        "Structured handoff concept"
      ]
    }
  ]
}
```

## Reference interaction handler

```javascript
const data = JSON.parse(document.getElementById('clearfile-data').textContent);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const storage = {
  read(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
};
const theme = document.getElementById('theme');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  theme.textContent = dark ? 'Light' : 'Dark';
  theme.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
  storage.write('clearfile-theme', dark ? 'dark' : 'light');
}
setTheme(storage.read('clearfile-theme') === 'dark');
theme.addEventListener('click', () =>
  setTheme(document.documentElement.dataset.theme !== 'dark'),
);
const states = ['In review', 'Changes requested', 'Approved'];
function loadReviews() {
  const initial = Object.fromEntries(
    data.documents.map((d) => [d.id, { status: d.status, note: d.note }]),
  );
  try {
    const saved = JSON.parse(storage.read('clearfile-reviews') || '{}');
    for (const d of data.documents) {
      const value = saved?.[d.id];
      if (
        value &&
        states.includes(value.status) &&
        typeof value.note === 'string'
      )
        initial[d.id] = {
          status: value.status,
          note: value.note.slice(0, 1200),
        };
    }
  } catch {
    /* Use sample records when local data is malformed. */
  }
  return initial;
}
if (document.getElementById('document-search')) {
  let reviews = loadReviews();
  let active = new URLSearchParams(location.search).get('document');
  if (!data.documents.some((d) => d.id === active))
    active = data.documents[0].id;
  const buttons = [...document.querySelectorAll('[data-document]')];
  const status = document.getElementById('review-status');
  const note = document.getElementById('review-note');
  function showDocument(id) {
    const doc = data.documents.find((d) => d.id === id);
    if (!doc) return;
    active = id;
    document.getElementById('document-title').textContent = doc.name;
    document.getElementById('document-owner').textContent =
      'Owner: ' + doc.owner;
    document.getElementById('document-kind').textContent = doc.kind;
    document.getElementById('document-summary').textContent = doc.summary;
    document.getElementById('document-body').textContent = doc.body;
    status.value = reviews[id].status;
    note.value = reviews[id].note;
    buttons.forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.document === id)),
    );
    document.getElementById('review-message').textContent = '';
    if (!reduced.matches)
      document.querySelector('.document-content').animate(
        [
          { opacity: 0.5, transform: 'translateY(6px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 230, easing: 'ease-out' },
      );
  }
  function refreshList() {
    buttons.forEach(
      (b) =>
        (b.querySelector('small').textContent =
          reviews[b.dataset.document].status),
    );
  }
  buttons.forEach((b) =>
    b.addEventListener('click', () => showDocument(b.dataset.document)),
  );
  document
    .getElementById('document-search')
    .addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();
      let count = 0;
      buttons.forEach((b) => {
        const doc = data.documents.find((d) => d.id === b.dataset.document);
        b.hidden = !`${doc.name} ${doc.owner} ${doc.kind}`
          .toLowerCase()
          .includes(query);
        if (!b.hidden) count++;
      });
      document.getElementById('search-empty').hidden = count !== 0;
      document.getElementById('search-count').textContent =
        count + ' documents';
    });
  document.getElementById('save-review').addEventListener('click', () => {
    reviews[active] = {
      status: status.value,
      note: note.value.trim().slice(0, 1200),
    };
    refreshList();
    const saved = storage.write('clearfile-reviews', JSON.stringify(reviews));
    document.getElementById('review-message').textContent = saved
      ? 'Review saved in this browser. Nothing sent.'
      : 'Review saved for this visit. Browser storage is unavailable.';
  });
  document.getElementById('reset-reviews').addEventListener('click', () => {
    reviews = Object.fromEntries(
      data.documents.map((d) => [d.id, { status: d.status, note: d.note }]),
    );
    storage.write('clearfile-reviews', JSON.stringify(reviews));
    refreshList();
    showDocument(active);
    document.getElementById('review-message').textContent =
      'Sample reviews restored.';
  });
  refreshList();
  showDocument(active);
}
const billingButtons = [...document.querySelectorAll('[data-billing]')];
billingButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const annual = button.dataset.billing === 'annual';
    billingButtons.forEach((b) =>
      b.setAttribute('aria-pressed', String(b === button)),
    );
    data.plans.forEach((plan) => {
      document.querySelector(`[data-price="${plan.id}"]`).textContent =
        '$' + (annual ? plan.annual : plan.monthly);
      document.querySelector(`[data-bill-note="${plan.id}"]`).textContent =
        annual
          ? '$' + plan.annual * 12 + ' billed yearly. Illustrative USD.'
          : '$' + plan.monthly + ' billed monthly. Illustrative USD.';
    });
    document.getElementById('billing-status').textContent = annual
      ? 'Annual prices shown. Monthly equivalents; full year billed at once.'
      : 'Monthly prices shown.';
  }),
);
const platformTabs = [...document.querySelectorAll('[data-platform-tab]')];
function selectPlatform(name) {
  platformTabs.forEach((button) => {
    const selected = button.dataset.platformTab === name;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-platform-pane]').forEach((pane) => {
    const selected = pane.dataset.platformPane === name;
    pane.hidden = !selected;
    if (selected && !reduced.matches)
      pane.animate(
        [
          { opacity: 0.35, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 260, easing: 'ease-out' },
      );
  });
}
platformTabs.forEach((button) =>
  button.addEventListener('click', () =>
    selectPlatform(button.dataset.platformTab),
  ),
);
if (platformTabs.length) {
  const reviews = loadReviews();
  document.querySelectorAll('[data-home-status]').forEach((node) => {
    const status = reviews[node.dataset.homeStatus].status;
    node.textContent = status;
    node.dataset.status = status;
  });
  const checks = [...document.querySelectorAll('[data-handoff]')];
  let savedChecks = [];
  try {
    const parsed = JSON.parse(storage.read('clearfile-handoff') || '[]');
    if (Array.isArray(parsed)) savedChecks = parsed;
  } catch {
    /* Default to an unchecked local list. */
  }
  checks.forEach(
    (input) => (input.checked = savedChecks.includes(input.dataset.handoff)),
  );
  function updateHandoff() {
    const selected = checks
      .filter((input) => input.checked)
      .map((input) => input.dataset.handoff);
    document.getElementById('handoff-progress').textContent =
      selected.length + ' of 4 checks complete';
    storage.write('clearfile-handoff', JSON.stringify(selected));
  }
  checks.forEach((input) => input.addEventListener('change', updateHandoff));
  updateHandoff();
  document
    .querySelector('[data-open-handoff]')
    .addEventListener('click', () => {
      selectPlatform('handoff');
      document
        .getElementById('product')
        .scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth' });
      platformTabs
        .find((button) => button.dataset.platformTab === 'handoff')
        .focus({ preventScroll: true });
    });
}

```
