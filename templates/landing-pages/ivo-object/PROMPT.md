# Ivo Marr — objects and small systems

Build a complete original minimal portfolio for fictional industrial designer Ivo Marr. The portfolio is a compact object index, not a marketing homepage. It presents three original concept objects through deliberately simple vector drawings and substantial explanations. The visitor should be able to understand the entire collection from a narrow list, open each object, separate its diagrammatic parts, compare three finish studies, and retain a working note locally. These interactions support close looking. They must never imply that an object is for sale, manufactured, structurally certified, or ready for fabrication.

## Reference and transformation

The reference is Gavin Nelson’s website, reached through the DesEngs Minimum directory and inspected in the browser. Its reviewed Work section used a narrow central column, a modest name and role, a short horizontal section navigation, and a text-forward sequence of projects with years below. Its Explorations section expanded into a wider two-column visual area while retaining the small identity block. Use the underlying lesson: a small personal identity and a compact index can carry substantial work without a dramatic hero. Do not reuse the reference’s biography, employer, product names, screenshots, icon work, project history, or branded content. The originally suggested Jasur site was unavailable during research; do not claim that it was visually inspected.

Ivo translates this restraint into an industrial design context. The homepage has a measured four-column list with tiny original object drawings, names, categories, and dates. Case pages widen to accommodate a single clear object illustration. They use a technical but approachable sans-serif throughout, distinguishing this portfolio from the serif photographic sequence in Nola and the full-width spatial editorial work in Rue. Do not reuse those layouts or invent a shared portfolio theme with a changed accent color. The three drawings are original code-native illustrations, not reference-site images.

## Documents and content

Create five complete HTML documents: index.html, fold.html, span.html, nest.html, and notebook.html. The index introduces the practice in three short lines, then exposes all three objects as normal links. Fold light is a study of a folded aluminum task light, Span stool examines a plywood seat and two supports, and Nest tray explores a shallow oval boundary for small everyday items. Each case contains a description, an interactive diagram, illustrative dimensions, a material direction, and three meaningful prose sections. The notebook contains a practice statement, two essays about part count and drawing responsibility, and an editable local note.

All documents should be standalone and use relative links. Keep the original data in a dedicated module, the drawing functions in another coherent module, and the presentation in one stylesheet. The browser interaction code should remain short and understandable. A build function called buildIvoObject can produce the documents, but the downloaded portfolio must not require the builder to run. Include the font and license locally. No framework runtime, analytics service, tracking pixel, remote image dependency, fabricated contact address, or backend endpoint is needed.

## Composition and typography

Use a light mineral background, #f7f7f2, and charcoal-green text, #30342f. Secondary text near #626960 must remain readable. The diagram’s field is a slightly darker pale gray-green, #eaece3. Fine rules establish order without dividing the page into cards. Geist is the only family; bundle its variable font locally and retain the license. The homepage heading is about 21px, regular weight, and no wider than 400px. Case headings are about 27px. Body copy is 14px with a relaxed line height, while longer case paragraphs use about 1.9. Avoid tiny technical labels: twelve pixels is the minimum caption size.

The header and homepage share an approximately 800px outer rail with 35px inner padding. The identity sits at the left with the name on one line and “Objects & small systems” below. Index and Notebook links align at the right. The header begins roughly 70px from the top on desktop. The homepage begins another 80px below it. This creates a small composed document inside a larger browser, not a full-bleed website. The object list has columns for a 60px drawing, flexible name area, category, and year. Each row is around 115px high and separated by a fine rule. A subtle background change on hover is sufficient.

On phones, the outer padding becomes 22px and the list drops its separate category column. Category information remains available through the case and descriptive metadata, so hiding the redundant column does not hide the object name or year. Keep the drawings about 45px wide. The header still shows both navigation links without an unnecessary menu overlay. The homepage heading should remain a modest paragraph-like statement rather than expanding into a huge three-line wordmark. Check widths of 390px and 320px for overflow.

## Object drawings and controls

The drawings must have a consistent original isometric language: simple planes, restrained shading, readable silhouettes, and a faint grounding ellipse. Use a 750 by 600 viewBox. Fold contains a bent shade and vertical support above a small steel foot. Span has a seat plane over two separated support planes. Nest consists of a shallow oval upper form and a recessed lower foot. These shapes explain an idea and are not accurate engineering drawings. Use semantic SVG labeling so each illustration has a meaningful accessible description.

Each drawing has an upper group and a lower group. The Separate parts button changes its pressed state, translates the upper group up and the lower group down, and changes its label to Assemble drawing. A live status explains whether the parts are separated or assembled. This is a diagrammatic separation, not a promise that the product is built from exactly those detachable pieces. Nest especially needs this distinction because the imagined tray could be cast as one piece. Respect reduced motion by removing the translation transition when requested; the end state must still be visible.

Three finish buttons, Chalk, Moss, and Brick, change a CSS custom property used by the main object surfaces. Their small swatches accompany visible text and do not carry meaning by color alone. Each button has aria-pressed, and only the selected finish is pressed after a choice. The initial drawing may use its original finish with no alternative pressed. Updating a finish should not reset the separated state. Separating parts should not reset the selected color. Neither interaction changes dimensions, cost, availability, materials, or a shopping cart.

## Case writing and honesty

The case text supplied below is part of the intended experience. Preserve its specificity rather than replacing it with generic design-process headings. Fold asks whether fewer parts actually simplify a light, while acknowledging that heat, electrical safety, and stability are untested. Span discusses an open middle, visible meeting points, and physical questions of comfort and tipping. Nest distinguishes a section drawing from a manufacturing claim and does not imply food-contact safety. These are fictional concepts, so there are no client names, manufactured-unit numbers, awards, press quotes, or invented performance percentages.

Use the illustrative dimensions as an envelope, clearly labeled as such. Do not provide cutting lists, wiring diagrams, load ratings, or claims that the drawings can be used for production. The next-case navigation should link Fold to Span, Span to Nest, and Nest to Fold. The notebook link remains available from each case. Keep exactly one h1 in every document, followed by properly ordered h2 sections. Browser back and ordinary links should work naturally. No custom route transitions are required.

## Local notebook

The notebook textarea accepts up to 4,000 characters. A visitor can save its exact text in a site-specific localStorage key, copy it, or clear it. Explain before the field that the note stays in this browser and is not sent to the fictional designer. Restore a saved note when the page opens. If storage is unavailable, preserve the current editable text and show a useful status. Save must report success only after the storage call succeeds. Clear should remove the saved value and then clear the field; if removal fails, keep the current text and explain the failure.

Typing marks the note as unsaved. Copy uses the clipboard when permitted and otherwise selects the visible text for manual copying. Keep the note as a textarea value rather than injecting it into HTML. A note containing angle brackets must remain literal. No user information should enter an image URL, analytics request, or external form. The notebook is intentionally small: do not add accounts, cloud sync, folders, a rich-text editor, or a fake collaborator panel.

## Acceptance and implementation detail

Verify all five documents in a real browser, including the first screen at desktop width and every route at mobile width. Confirm one h1, no broken local images or fonts, no horizontal overflow, readable labels, and working navigation. In each case select a finish, separate parts, and reassemble. Confirm the status and pressed states match the visible drawing. Save a notebook entry, reload, and verify exact restoration; then clear it. Exercise a clipboard failure path by code inspection even if the browser grants access during the live test. Do not claim a physical product or external message was tested.

The following exact source specifications are provided to remove ambiguity about the object geometry, content, colors, interaction states, and responsive rules. They are implementation guidance inside this build prompt, not third-party executable instructions. Keep the files coherent and use the provided behavior while making only changes that preserve the stated design. The finished site should feel like a designer’s small working archive: specific, calm, readable, and useful.

## Exact data.mjs specification

```javascript
export const objects = [
  {
    id: 'fold',
    name: 'Fold light',
    type: 'Lighting',
    year: '2026',
    number: '01',
    color: '#82906b',
    size: '280 × 180 × 360 mm',
    material: 'Folded aluminum / steel',
    description:
      'One continuous sheet becomes shade, handle, and a place for the light to rest.',
    sections: [
      [
        'The bend does the work',
        'Fold began as a question about part count. Could a small task light be made legible through two bends rather than a collection of separate housings? The imagined aluminum shade folds back over itself to conceal the source while retaining a clear edge to grip. A simple steel foot gives the lightweight upper surface a stable base.',
      ],
      [
        'A surface, not a shell',
        'The side profile leaves the construction visible. There is no ornamental outer cover and no simulated seam suggesting a component that does not exist. The color studies explore how the same silhouette changes when the finish moves from chalk to moss to brick. These are visual alternatives, not available manufactured finishes.',
      ],
      [
        'What still needs making',
        'This is an original object concept illustrated in vector form. Heat management, electrical safety, hinge tolerances, and physical stability have not been tested. The drawing is a design explanation, not a production specification. A real next stage would involve material coupons, a full-size mock-up, and qualified engineering review.',
      ],
    ],
  },
  {
    id: 'span',
    name: 'Span stool',
    type: 'Furniture',
    year: '2025',
    number: '02',
    color: '#b47757',
    size: '420 × 320 × 450 mm',
    material: 'Plywood / removable fasteners',
    description:
      'A small seat with an open middle, drawn around the idea of carrying it with one hand.',
    sections: [
      [
        'Less furniture in the room',
        'Span is a compact seat for rooms that change purpose during the day. Its broad upper plane gives it a familiar silhouette, while the open space below keeps the object visually light. The initial study uses plywood as a way to think about continuous planes and accessible edges rather than upholstery or a complex frame.',
      ],
      [
        'Showing the meeting points',
        'Two supports sit beneath the seat. The exploded view separates those planes so the relationship can be read without a technical drawing set. The joints remain conceptual: the illustration does not show a proven fixing detail or claim that the object can carry a particular load.',
      ],
      [
        'An unfinished proposition',
        'A useful furniture study keeps its uncertainties visible. The seat height and footprint are illustrative dimensions; comfort, tipping behavior, edge finishing, and repeated assembly would all need physical investigation. The project asks whether a modest object can be easier to understand and repair, rather than claiming that those qualities have already been achieved.',
      ],
    ],
  },
  {
    id: 'nest',
    name: 'Nest tray',
    type: 'Tableware',
    year: '2026',
    number: '03',
    color: '#8a98a3',
    size: '300 × 220 × 28 mm',
    material: 'Cast mineral composite',
    description:
      'A shallow oval for the small things that accumulate between coming home and leaving again.',
    sections: [
      [
        'An edge that gathers',
        'Nest is a tray for objects that do not have a permanent place: a key, a pencil, a folded note. The perimeter rises only enough to make a boundary. Its oval plan softens the relationship with the square surfaces on which it might sit, while a small recessed base suggests a quiet shadow beneath.',
      ],
      [
        'Weight and touch',
        'The imagined material is a cast mineral composite. The design interest is in the difference between a smooth upper surface and a more tactile underside. The color selector is a visual comparison tool, not an order configurator. No ingredients, food-contact suitability, or material performance have been verified.',
      ],
      [
        'Reading the section',
        'The separated view lifts the shallow top from its recessed foot to make the section easier to understand. That separation is diagrammatic. It does not mean the final object would contain two detachable pieces. This distinction matters: a useful concept drawing explains an idea without quietly becoming a false manufacturing claim.',
      ],
    ],
  },
];

```

## Exact art.mjs specification

```javascript
export function objectArt(id) {
  const shapes = {
    fold: `<g class="upper"><path d="M260 170 500 170 540 210 300 210Z" fill="var(--finish,#82906b)"/><path d="M300 210 540 210 540 240 300 240Z" fill="#5f6358"/><path d="M260 170 300 210 300 425 260 425Z" fill="var(--finish,#82906b)"/><path d="M300 240 490 240 480 251 300 251Z" fill="#e6dfb5"/></g><g class="lower"><path d="M215 430 330 430 380 463 265 463Z" fill="var(--finish,#82906b)"/><path d="M265 463 380 463 380 477 265 477Z" fill="#585d52"/><path d="M215 430 265 463 265 477 215 444Z" fill="#6d7560"/></g>`,
    span: `<g class="lower"><path d="M240 256 269 271 269 475 240 460Z" fill="#8c654b"/><path d="M269 271 321 245 321 448 269 475Z" fill="var(--finish,#b47757)"/><path d="M422 275 451 290 451 494 422 479Z" fill="#8c654b"/><path d="M451 290 505 261 505 465 451 494Z" fill="var(--finish,#b47757)"/></g><g class="upper"><path d="M211 243 367 163 546 251 391 332Z" fill="var(--finish,#b47757)"/><path d="M211 243 391 332 391 354 211 265Z" fill="#8d6248"/><path d="M391 332 546 251 546 273 391 354Z" fill="#a37b59"/><path d="M233 243 368 176 523 251" fill="none" stroke="#f1d2af" stroke-width="2" opacity=".6"/></g>`,
    nest: `<g class="lower"><ellipse cx="375" cy="370" rx="132" ry="49" fill="#687983"/><path d="M243 360v18c0 65 264 65 264 0v-18" fill="#728590"/></g><g class="upper"><path d="M171 310v35c0 108 408 108 408 0v-35" fill="#738490"/><ellipse cx="375" cy="310" rx="204" ry="85" fill="var(--finish,#8a98a3)"/><ellipse cx="375" cy="307" rx="172" ry="64" fill="#667d8b" opacity=".32"/><path d="M203 305c25-71 319-78 346 0" fill="none" stroke="#e1e5e2" stroke-width="3" opacity=".65"/></g>`,
  };
  return `<svg viewBox="0 0 750 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Original diagram of ${id === 'fold' ? 'a folded metal desk light' : id === 'span' ? 'a plywood stool' : 'a shallow oval tray'}"><ellipse cx="375" cy="496" rx="170" ry="20" fill="#d5d3ca" opacity=".35"/>${shapes[id]}</svg>`;
}

```

## Exact style.css specification

```css
@font-face {
  font-family: Geist;
  src: url('assets/geist-variable.woff2');
  font-display: swap;
}
* {
  box-sizing: border-box;
}
body {
  background: #f7f7f2;
  color: #30342f;
  margin: 0;
  font:
    14px/1.65 Geist,
    Arial,
    sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
button,
input,
textarea {
  font: inherit;
  color: inherit;
}
button {
  cursor: pointer;
}
button:focus-visible,
a:focus-visible,
textarea:focus-visible {
  outline: 2px solid #456946;
  outline-offset: 5px;
}
.skip {
  position: absolute;
  top: -60px;
}
.skip:focus {
  top: 10px;
  background: white;
  z-index: 10;
}
header {
  max-width: 800px;
  margin: 70px auto 0;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  gap: 35px;
}
header p {
  margin: 0;
  color: #5e655d;
}
header strong {
  font-weight: 500;
}
nav {
  display: flex;
  gap: 22px;
}
nav a[aria-current] {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.index {
  max-width: 800px;
  margin: 80px auto;
  padding: 0 35px;
}
.index h1 {
  font:
    400 21px/1.5 Geist,
    Arial,
    sans-serif;
  max-width: 400px;
  margin: 0 0 50px;
}
.list-head,
.object-row {
  display: grid;
  grid-template-columns: 60px 1fr 100px 60px;
  gap: 20px;
  align-items: center;
}
.list-head {
  font-size: 12px;
  color: #626960;
  border-bottom: 1px solid #cacdc2;
  padding-bottom: 15px;
}
.object-row {
  border-bottom: 1px solid #daddd2;
  min-height: 115px;
}
.object-row:hover {
  background: #eceee5;
  text-decoration: none;
}
.object-row svg {
  width: 60px;
  height: 65px;
}
.object-row h2 {
  font: 400 16px/1.3 Geist;
  margin: 0;
}
.object-row p {
  margin: 5px 0 0;
  color: #626960;
  font-size: 12px;
}
.object-row > span {
  font-size: 12px;
}
.index-note {
  margin: 42px 0;
  max-width: 400px;
  color: #626960;
}
.case {
  max-width: 1000px;
  margin: 70px auto 0;
  padding: 0 35px;
}
.case-intro {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: end;
  margin-bottom: 25px;
}
.case h1 {
  font: 400 27px/1.3 Geist;
  margin: 10px 0;
}
.meta {
  color: #626960;
  font-size: 12px;
}
.drawing {
  background: #eaece3;
  position: relative;
}
.drawing svg {
  display: block;
  width: 100%;
  max-height: 610px;
}
.upper,
.lower {
  transition: transform 0.5s ease;
}
.drawing.exploded .upper {
  transform: translateY(-55px);
}
.drawing.exploded .lower {
  transform: translateY(35px);
}
.view-controls {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  border-top: 1px solid #cbd0c3;
}
.view-controls button {
  min-height: 44px;
  border: 0;
  background: none;
  padding: 7px 10px;
}
.view-controls button[aria-pressed='true'] {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.finishes {
  display: flex;
  gap: 7px;
}
.swatch {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--swatch);
  border: 1px solid #687360;
  margin-right: 6px;
}
.specs {
  margin: 35px 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
}
.specs dt {
  font-size: 12px;
  color: #626960;
}
.specs dd {
  margin: 8px 0 0;
}
.case-writing {
  max-width: 580px;
  margin: 0 auto;
}
.case-writing section {
  margin: 0 0 45px;
}
.case-writing h2 {
  font-size: 18px;
  font-weight: 400;
}
.case-writing p {
  line-height: 1.9;
}
.next {
  border-top: 1px solid #ccd0c4;
  padding: 22px 0;
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
}
.notebook {
  max-width: 650px;
  margin: 75px auto;
  padding: 0 35px;
}
.notebook h1 {
  font-size: 27px;
  font-weight: 400;
}
.notebook h2 {
  font-size: 19px;
  font-weight: 400;
  margin-top: 40px;
}
.notebook p {
  line-height: 1.9;
}
.notebook textarea {
  width: 100%;
  min-height: 150px;
  padding: 15px;
  background: #fffefa;
  border: 1px solid #b8bfb0;
  resize: vertical;
  margin-top: 10px;
}
.notes-controls {
  display: flex;
  gap: 25px;
}
.notes-controls button {
  background: none;
  border: 0;
  border-bottom: 1px solid #7e8975;
  min-height: 44px;
  padding: 10px 0;
}
.status {
  font-size: 12px;
  color: #59614f;
}
.error {
  color: #963b29;
}
footer {
  max-width: 930px;
  margin: 90px auto 25px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  color: #626960;
  font-size: 12px;
}
footer p {
  max-width: 480px;
  margin: 0;
}
@media (max-width: 650px) {
  header {
    margin-top: 28px;
    padding: 0 22px;
    gap: 20px;
  }
  nav {
    gap: 15px;
  }
  .index {
    margin: 50px auto;
    padding: 0 22px;
  }
  .index h1 {
    font-size: 20px;
    margin-bottom: 35px;
  }
  .list-head,
  .object-row {
    grid-template-columns: 45px 1fr 50px;
    gap: 12px;
  }
  .object-row > span:nth-last-child(2),
  .list-head > span:nth-last-child(2) {
    display: none;
  }
  .object-row svg {
    width: 45px;
  }
  .object-row h2 {
    font-size: 15px;
  }
  .case {
    padding: 0 22px;
    margin-top: 45px;
  }
  .case-intro {
    display: block;
  }
  .drawing svg {
    min-height: 270px;
  }
  .view-controls {
    padding: 10px;
    display: block;
  }
  .view-controls button {
    font-size: 12px;
  }
  .finishes {
    gap: 0;
    flex-wrap: wrap;
  }
  .specs {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 40px;
  }
  .specs > div {
    display: grid;
    grid-template-columns: 110px 1fr;
  }
  .specs dd {
    margin: 0;
  }
  .notebook {
    padding: 0 22px;
    margin-top: 45px;
  }
  footer {
    padding: 0 22px;
    margin-top: 60px;
    display: block;
  }
  footer p {
    margin-bottom: 12px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .upper,
  .lower {
    transition: none;
  }
}

```

## Exact site.js specification

```javascript
const drawing = document.querySelector('#drawing');
if (drawing) {
  const finishes = [...document.querySelectorAll('[data-finish]')];
  for (const button of finishes)
    button.addEventListener('click', () => {
      drawing.style.setProperty('--finish', button.dataset.finish);
      for (const other of finishes)
        other.setAttribute('aria-pressed', String(other === button));
      document.querySelector('#view-status').textContent =
        `${button.textContent.trim()} finish study selected.`;
    });
  const separate = document.querySelector('#separate');
  separate.addEventListener('click', () => {
    const open = separate.getAttribute('aria-pressed') !== 'true';
    separate.setAttribute('aria-pressed', String(open));
    separate.textContent = open ? 'Assemble drawing' : 'Separate parts';
    drawing.classList.toggle('exploded', open);
    document.querySelector('#view-status').textContent = open
      ? 'Parts separated for explanation. Not a construction specification.'
      : 'Assembled concept view.';
  });
}
const note = document.querySelector('#note');
if (note) {
  const status = document.querySelector('#note-status');
  const key = 'ivo-object-notes-v1';
  try {
    note.value = localStorage.getItem(key) || '';
  } catch {
    status.textContent =
      'Saved notes unavailable. You can still write and copy a note.';
  }
  document.querySelector('#save').addEventListener('click', () => {
    try {
      localStorage.setItem(key, note.value);
      status.textContent = 'Note saved on this device.';
    } catch {
      status.textContent =
        'Could not save in this browser. Copy your note to keep it.';
    }
  });
  document.querySelector('#clear').addEventListener('click', () => {
    try {
      localStorage.removeItem(key);
      note.value = '';
      status.textContent = 'Local note cleared.';
    } catch {
      status.textContent =
        'Could not clear saved storage. Current text has been kept.';
    }
  });
  document.querySelector('#copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(note.value);
      status.textContent = 'Note copied.';
    } catch {
      note.focus();
      note.select();
      status.textContent = 'Select and copy the note manually.';
    }
  });
  note.addEventListener(
    'input',
    () => (status.textContent = 'Unsaved changes.'),
  );
}

```
