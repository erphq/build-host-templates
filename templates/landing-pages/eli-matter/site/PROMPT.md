# Eli Mercer — design, image, interaction

Build an original minimal personal folio for Eli Mercer, a fictional multidisciplinary designer. The portfolio should begin with readable first-person writing, then connect that writing to three concrete studies: a visual identity, a publication cover, and a small digital drawing instrument. Its purpose is to make a design practice understandable without turning it into an agency pitch. The homepage is a dark, narrow reading column. Case pages expand to show a specific interactive artifact. The visitor should be able to change a color, edit a title, and adjust a line field, seeing a clear consequence for each action.

## Reference and original direction

Adrien Griveau’s website was found in the DesEngs Minimum directory and inspected in the browser. The reviewed page was a dark, text-led personal presentation with modest paragraphs, restrained section headings, and direct links to work, interests, and conversations. Its strength was the confidence to let ordinary text carry a personal practice. Borrow that general restraint. Do not reuse the person’s biography, employer, companies, talks, social links, email address, wording, or career history. Eli is fictional, and the three projects are original exercises created for this collection.

The transformation is substantial. Instead of a real career history, Eli’s home introduces a way of working and links to complete original study pages. The artifacts are code-native: a simple identity poster, a live publication title, and a deterministic field of curves. They are not screenshots borrowed from the reference or decorative placeholders. This portfolio should differ clearly from the other minimal studies in the batch. It has no photographic hero, no left fixed rail, no object table, no editorial portrait contact sheet, and no shared template with a different color. Its defining feature is a small dark reading space that opens into an interactive piece of work.

## Four complete documents

Create index.html, signal.html, open-index.html, and field-lines.html. The index contains the practice introduction, a short explanation of the fictional identity, three substantial project links with discipline and year, small visual previews, and a paragraph about understandable interactions. Each project document contains a return link, title, discipline/year, introduction, interactive artifact, three prose sections, and next-project navigation. Count only these complete documents, not assets or redirects. Use relative links and local assets so the downloaded site can run independently of the collection.

The three projects must remain distinct in content and behavior. Signal, without noise is a fictional listening-room identity study using a ring, a word, and a fine information line. An open index is a publication cover whose subject title can change while the series structure remains stable. Field lines is a drawing instrument in which one numeric control changes the number of curves. Do not add fake clients, metrics, launches, publications, interviews, or awards. The studies are propositions, not evidence of commercial work.

## Visual system

Use a dark near-black green, #191b19, as the page background. Main text is a soft pale gray-green, #dbded5. Body paragraphs may use #bac1b4, while small labels use a sufficiently readable muted green near #a5b197. Rules use #4b5645. Links have a visible underline whose color brightens on hover. Do not use low-contrast text simply to appear subtle. The dark surface should feel like a quiet personal notebook, not a cybersecurity landing page or a futuristic terminal. Avoid neon effects, glows, gradients, particle backgrounds, monospace walls of code, and floating badges.

Use locally bundled Geist as the main typeface. The homepage heading is about 22px, regular weight, with a relaxed line height near 1.55. Paragraphs are 16px with generous line height around 1.8. Section labels are small but readable, about 13px, with modest uppercase letter spacing. Case titles are approximately 30px, not oversized display statements. Georgia appears only in the publication artifact, where it expresses the fictional cover’s editorial character. Keep the font license in the assets and do not redistribute a system font.

The header and homepage share a 760px outer rail with 30px inner padding. The header begins about 70px from the top on a desktop. The name is a simple text link at left, and “Design / image / interaction” sits opposite in small text. There is no complex navigation because the homepage itself is the index. The personal reading column begins about 70px below the header. Its line length should be comfortable enough that the introduction feels like a short letter, not a banner. On mobile the top margin reduces, side padding becomes 24px, and the heading remains around 21px.

## Homepage content and previews

Begin with “I’m Eli, a designer interested in the point where a clear idea becomes something you can see, hold, or change.” Follow with a paragraph explaining the movement between visual identity, publication, and digital experiments. A second paragraph explicitly states that Eli is fictional and the work was created for this portfolio. These statements should be direct and modest. Do not invent a location, current employment, or years of experience to make the identity appear more established.

A Selected studies section contains three project paragraphs. Each starts with a linked title, followed by discipline and year in smaller type, then a one-sentence summary. This is a reading sequence rather than a card grid. Beneath it, show three small original SVG previews in one row. The previews are links to the same case documents and have meaningful accessible names. They are supplementary; the project names and summaries must remain useful even if the images have not loaded. The row should stay inside the narrow rail without forcing horizontal scrolling.

Finish the home with A way of working. Explain that an understandable experiment exposes the relationship between input and result: a color button changes a color, a title field changes a title, and a drawing control changes a visible rule. This paragraph gives the reader a reason to open the studies. The footer states that the folio is fictional and the projects are original studies, then links to credits. Do not add an email link that points to an invented address or a form that pretends to contact a real designer.

## Signal identity study

The first case widens to an approximately 1000px outer rail. Its heading area remains narrower, around 700px, so text is still easy to read. The artifact is a warm ember-colored poster. A circular ring sits toward the upper right. A large lowercase “signal” anchors the lower-middle area, with tight but readable letter spacing. A thin line and small phrase, “A ROOM FOR LISTENING / IDENTITY STUDY,” sit below. These elements are original and intentionally few. Do not add a mockup of a real venue, a logo belonging to another organization, or a fictitious campaign claim.

Below the artifact, place three plain buttons: Ember, Fog, and Moss. Their colors are #e5a25d, #d2d5cc, and #b5c2a1. Clicking one changes the poster’s background through a CSS custom property. The type and ring remain dark and legible. Only the chosen button has aria-pressed=true and an underline. A live status reports the selected study. The control is a visual comparison, not a brand approval, product variant, or purchase option. It should update immediately without loading indicators or a remote request.

The writing explains the limited number of identity parts, color as a condition, and the work still needed to turn a single study into a real system. It must not claim naming clearance, a launch, client approval, or complete brand delivery. The original SVG thumbnail uses the same ring, word, and rule so the homepage preview accurately represents the case. Preserve a meaningful SVG label. The case’s live artifact can use HTML and CSS to keep the text sharp and accessible.

## Publication cover study

An open index uses a pale blue cover surface, #b7c7db, with dark blue-gray text. The small series label reads “OPEN INDEX / 01.” The main title begins as “Ways of paying attention.” It is a large Georgia serif, roughly 80px on desktop and 52px on a phone, with a compact line height. The lower information line reads “NOTES / OBSERVATIONS / SMALL QUESTIONS.” The title can wrap naturally, but the layout must reserve enough space that the lower line does not overlap it.

A visible Cover title label accompanies a text input below the cover. Limit the input to 60 characters. Each input event updates the live cover using textContent. An empty or whitespace-only value displays “An untitled thought.” The Reset title button restores the original title in both the field and cover and updates the status. No input is saved or transmitted. A visitor can type angle brackets and see them literally. Do not insert the input as HTML or turn it into a URL. The field is an interaction study, not a publishing action.

The case prose discusses a stable cover structure, the importance of live text, and the limits of the fictional publication. There are no printed issues for sale and no fabricated contributors. Paper, binding, editorial commissioning, and distribution remain outside the study. The thumbnail is a static original SVG representation of the initial cover, while the case artifact is live HTML text. This is an intentional difference, not a broken synchronization: the small preview identifies the initial study, and the case lets the reader explore it.

## Field-lines instrument

The final artifact is a pale moss drawing field with dark curves. Use an SVG viewBox of 900 by 680. The range control is labeled Line density and runs from 8 to 32 in integer steps, starting at 20. A visible output states the current number of lines. Each change rebuilds the curve group with exactly that number of paths. Use a deterministic rule rather than random values so the same setting produces the same drawing. The path construction supplied below creates a changing woven rhythm while keeping the endpoints within a bounded field.

The drawing is an original visual experiment, not a physical simulation, audio visualizer, or AI-generated response. Do not label it as a magnetic field calculation or add scientific units. A live status states the number of curves. The range input must be keyboard usable and visibly focused. On mobile it should remain large enough to adjust without colliding with the label or output. There is no perpetual animation; the only change occurs when the visitor changes the control.

The prose explains one input and its visible consequence, variation within a rule, and the value of a small understandable instrument. This is the most interactive case, but it should remain a portfolio page rather than expanding into a complex editor. Do not add export menus, accounts, layers, undo history, or a gallery of random presets. A clear small experiment is sufficient and consistent with the site’s stated practice.

## Accessibility, responsive behavior, and checks

Every document has exactly one h1, semantic main content, a skip link, normal project links, and visible focus styles. Long paragraphs remain in a narrow reading measure. On phones, reduce the artifact padding and title sizes while preserving a comfortable minimum height. The poster’s ring should not collide with the word. The publication title must wrap inside the surface, including a long 60-character input. Controls may wrap, and the text field becomes full width when necessary. All pages must avoid horizontal document overflow at 390px and 320px.

Test the home visually on desktop and mobile. Open Signal, select Moss, and confirm the CSS background, selected state, and status agree. Open the publication, enter a harmless angle-bracket phrase, and confirm literal rendering; reset and verify the original text returns. Open Field lines and use keyboard arrows or the range control to reach a different count, checking that the number of SVG paths matches the displayed output. These are real functional checks, not merely assertions that buttons exist. Inspect local links, asset availability, and script syntax before handoff.

Keep the code small and coherent. The exact content, original preview artwork, responsive stylesheet, and interaction script follow as implementation specifications. They make the prompt detailed enough to reproduce the study without guessing the behaviors. Preserve the deliberate scope and the distinction between real functionality and fictional context. The finished result should read as an independent designer’s clear, personal collection of experiments, not a generic dark landing page with project cards attached.

## Exact data.mjs specification

```javascript
export const works = [
  {
    id: 'signal',
    title: 'Signal, without noise',
    discipline: 'Visual identity',
    year: '2026',
    color: '#e5a25d',
    summary:
      'A small identity study for an imagined listening room. One ring, one line, and a word that can hold its place.',
    sections: [
      [
        'An identity with very few parts',
        'The fictional listening room began with a practical constraint: its printed material needed to remain readable from across a small room. The study uses a clear word, a single circular interruption, and a quiet information line. The mark is not intended to encode an elaborate hidden story. Its value is the consistency with which it can sit beside content.',
      ],
      [
        'Color as a condition',
        'The three color studies change the atmosphere without changing the layout. Ember feels warm and public, Fog is neutral, and Moss is more subdued. The selector is a visual tool for comparing contrast and mood. It does not claim that a client approved any direction or that a complete brand system has been delivered.',
      ],
      [
        'What a system would still need',
        'This is an original fictional identity exercise. Real applications would require legibility tests, production proofs, naming checks, and a broader content inventory. The poster is a concrete starting point, not evidence of a launch, client relationship, or commercial trademark.',
      ],
    ],
  },
  {
    id: 'open-index',
    title: 'An open index',
    discipline: 'Publication',
    year: '2025',
    color: '#b7c7db',
    summary:
      'A publication cover that makes room for a changing subject, with a stable relationship between title and index.',
    sections: [
      [
        'A cover that can change its mind',
        'An open index imagines a small series of essays whose subjects change from issue to issue. Instead of giving each edition an unrelated cover, the study establishes a consistent reading order: series name, topic, and a short index line. The large title is allowed to wrap naturally, with enough space to retain its own shape.',
      ],
      [
        'The title is real text',
        'The title field in this study changes the visible cover using live text. Try a short subject or a longer phrase and notice how the composition responds. The sample remains plain text, not an image or an HTML injection. The field has a sensible character limit so the small experiment stays within its intended range.',
      ],
      [
        'A study before a publication',
        'No issue has been printed and no essays are sold here. The cover is original artwork for a fictional publication. Paper choice, binding, editorial commissioning, and distribution are outside the scope of this visual exercise. The design asks how a stable structure can leave room for a different voice.',
      ],
    ],
  },
  {
    id: 'field-lines',
    title: 'Field lines',
    discipline: 'Digital experiment',
    year: '2026',
    color: '#b5c2a1',
    summary:
      'A small drawing instrument that turns a single density value into a field of curved lines.',
    sections: [
      [
        'One input, a visible consequence',
        'Field lines is an experiment in making a digital control feel understandable. A range input changes the number of curves in a bounded drawing. The relationship between action and result is direct: more density produces more lines. There is no hidden model, external API, or unexplained loading state.',
      ],
      [
        'Variation inside a rule',
        'The curves share a simple mathematical construction. Their spacing and bend create a woven visual rhythm without random noise. The drawing remains deterministic, so the same setting returns the same field. That makes the experiment useful as a study of interaction rather than an endlessly changing decorative background.',
      ],
      [
        'A small enough instrument',
        'The range is intentionally limited. The piece is not a production illustration tool, an audio visualizer, or a simulation of a physical force. It is an original code-native study in the relationship between a control, a rule, and a visible surface. Its small scope makes the interaction easy to inspect and understand.',
      ],
    ],
  },
];

```

## Exact art.mjs specification

```javascript
export function art(id) {
  if (id === 'signal')
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 680" role="img" aria-label="Original Signal poster with circular mark"><rect width="900" height="680" fill="#e5a25d"/><circle cx="690" cy="190" r="88" fill="none" stroke="#242720" stroke-width="28"/><path d="M90 390H810" stroke="#242720" stroke-width="4"/><text x="82" y="345" font-family="Arial,sans-serif" font-size="145" letter-spacing="-9" fill="#242720">signal</text><text x="90" y="440" font-family="Arial,sans-serif" font-size="23" fill="#242720">A ROOM FOR LISTENING</text><text x="90" y="610" font-family="Arial,sans-serif" font-size="17" fill="#242720">IDENTITY STUDY / 2026</text></svg>`;
  if (id === 'open-index')
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 680" role="img" aria-label="Original Open Index publication cover"><rect width="900" height="680" fill="#b7c7db"/><text x="80" y="100" font-family="Arial,sans-serif" font-size="24" fill="#263140">OPEN INDEX / 01</text><text x="75" y="310" font-family="Georgia,serif" font-size="100" fill="#263140">Ways of</text><text x="75" y="420" font-family="Georgia,serif" font-size="100" fill="#263140">paying attention.</text><path d="M80 515H820" stroke="#263140"/><text x="80" y="555" font-family="Arial,sans-serif" font-size="18" fill="#263140">NOTES / OBSERVATIONS / SMALL QUESTIONS</text></svg>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 680" role="img" aria-label="Original curved line field"><rect width="900" height="680" fill="#b5c2a1"/><g stroke="#334133" stroke-width="2" fill="none">${Array.from({ length: 20 }, (_, i) => `<path d="M80 ${80 + i * 26} C${250 + i * 4} ${70 + i * 8},${650 - i * 5} ${620 - i * 6},820 ${80 + i * 26}"/>`).join('')}</g></svg>`;
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
  margin: 0;
  background: #191b19;
  color: #dbded5;
  font:
    16px/1.8 Geist,
    Arial,
    sans-serif;
}
a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #7d8577;
}
a:hover {
  text-decoration-color: #e3e9d8;
}
button,
input,
select {
  font: inherit;
  color: inherit;
}
button {
  cursor: pointer;
}
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 2px solid #d3dbbe;
  outline-offset: 5px;
}
.skip {
  position: absolute;
  top: -80px;
}
.skip:focus {
  top: 10px;
  background: #191b19;
  padding: 10px;
  z-index: 9;
}
header {
  max-width: 760px;
  margin: 70px auto 0;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 14px;
}
header a {
  text-decoration: none;
}
header a:hover {
  text-decoration: underline;
}
.personal {
  max-width: 760px;
  margin: 70px auto;
  padding: 0 30px;
}
.personal h1 {
  font-size: 22px;
  line-height: 1.55;
  font-weight: 400;
  margin: 0 0 28px;
}
.personal p {
  margin: 0 0 25px;
  color: #bac1b4;
}
.personal h2 {
  font-size: 13px;
  color: #a5b197;
  font-weight: 400;
  margin: 58px 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.work-note {
  margin-bottom: 32px !important;
}
.work-note a {
  color: #e0e6d7;
  display: inline;
  font-size: 18px;
}
.work-note span {
  display: block;
  font-size: 13px;
  margin-top: 6px;
  color: #a7b09e;
}
.miniatures {
  display: flex;
  gap: 12px;
  margin: 30px 0;
}
.miniatures a {
  display: block;
  flex: 1;
}
.miniatures img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 9/6.8;
}
.case {
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 30px;
}
.case-head {
  max-width: 700px;
  margin: 0 auto 40px;
}
.case-head h1 {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.3;
  margin: 20px 0;
}
.case-head p {
  color: #b9c1b0;
}
.meta {
  font-size: 12px;
  color: #a5b197;
}
.work-surface {
  background: var(--surface, #e5a25d);
  color: #242720;
  min-height: 540px;
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.signal-symbol {
  width: 130px;
  height: 130px;
  border: 20px solid currentColor;
  border-radius: 50%;
  align-self: flex-end;
}
.signal-word {
  font-size: clamp(80px, 12vw, 150px);
  line-height: 1;
  letter-spacing: -0.075em;
}
.surface-foot {
  border-top: 2px solid currentColor;
  padding-top: 18px;
  font-size: 15px;
}
.cover-label {
  font-size: 18px;
}
.cover-title {
  font:
    400 80px/1.08 Georgia,
    serif;
  max-width: 740px;
  overflow-wrap: anywhere;
  margin: 35px 0;
}
.publication {
  background: #b7c7db;
  color: #263140;
}
.field {
  padding: 0;
  background: #b5c2a1;
  display: block;
}
.field svg {
  display: block;
  width: 100%;
  height: auto;
  min-height: 360px;
}
.controls {
  border: 1px solid #4b5645;
  border-top: 0;
  padding: 17px 22px;
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}
.controls button {
  background: none;
  border: 0;
  padding: 8px 0;
  font-size: 14px;
  min-height: 44px;
}
.controls button[aria-pressed='true'] {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.controls label {
  font-size: 14px;
}
.controls input[type='text'] {
  background: #252b23;
  border: 1px solid #68745f;
  padding: 10px 13px;
  flex: 1;
  min-width: 200px;
  max-width: 600px;
}
.controls input[type='range'] {
  flex: 1;
  min-width: 160px;
  accent-color: #bccda6;
}
.controls output {
  font-size: 14px;
}
.status {
  font-size: 12px;
  color: #aab89b;
  margin: 14px 0;
}
.writing {
  max-width: 670px;
  margin: 65px auto;
}
.writing section {
  margin-bottom: 38px;
}
.writing h2 {
  font-size: 19px;
  font-weight: 400;
}
.writing p {
  color: #bac1b4;
  line-height: 1.9;
}
.next {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding-top: 22px;
  border-top: 1px solid #4b5645;
  font-size: 14px;
}
footer {
  max-width: 1000px;
  margin: 75px auto 30px;
  padding: 0 30px;
  color: #a5b197;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
footer p {
  max-width: 550px;
  margin: 0;
}
@media (max-width: 650px) {
  header {
    margin-top: 28px;
    padding: 0 24px;
  }
  .personal {
    margin: 45px auto;
    padding: 0 24px;
  }
  .personal h1 {
    font-size: 21px;
  }
  .personal h2 {
    margin-top: 40px;
  }
  .miniatures {
    gap: 8px;
  }
  .case {
    margin-top: 40px;
    padding: 0 24px;
  }
  .case-head h1 {
    font-size: 27px;
  }
  .work-surface {
    min-height: 380px;
    padding: 30px;
  }
  .signal-symbol {
    width: 80px;
    height: 80px;
    border-width: 13px;
  }
  .signal-word {
    font-size: 80px;
  }
  .surface-foot {
    font-size: 12px;
  }
  .cover-title {
    font-size: 52px;
  }
  .cover-label {
    font-size: 14px;
  }
  .field {
    padding: 0;
    min-height: 0;
  }
  .field svg {
    min-height: 260px;
  }
  .controls {
    padding: 12px 15px;
    gap: 15px;
  }
  .controls input[type='text'] {
    min-width: 0;
    width: 100%;
    flex-basis: 100%;
  }
  .writing {
    margin-top: 40px;
  }
  footer {
    padding: 0 24px;
    display: block;
    margin-top: 50px;
  }
  footer p {
    margin-bottom: 15px;
  }
  .next {
    font-size: 13px;
  }
}

```

## Exact site.js specification

```javascript
const surface = document.querySelector('#surface');
for (const button of document.querySelectorAll('[data-color]'))
  button.addEventListener('click', () => {
    surface.style.setProperty('--surface', button.dataset.color);
    for (const other of document.querySelectorAll('[data-color]'))
      other.setAttribute('aria-pressed', String(other === button));
    document.querySelector('#status').textContent =
      button.textContent + ' color study selected.';
  });
const titleInput = document.querySelector('#cover-input');
if (titleInput) {
  titleInput.addEventListener('input', () => {
    document.querySelector('#cover-title').textContent =
      titleInput.value.trim() || 'An untitled thought.';
    document.querySelector('#status').textContent =
      'Cover text updated locally.';
  });
  document.querySelector('#reset-title').addEventListener('click', () => {
    titleInput.value = 'Ways of paying attention.';
    document.querySelector('#cover-title').textContent = titleInput.value;
    document.querySelector('#status').textContent =
      'Original cover title restored.';
  });
}
const density = document.querySelector('#density');
if (density) {
  const group = document.querySelector('#curves');
  function draw() {
    const count = Number(density.value);
    group.replaceChildren();
    for (let i = 0; i < count; i++) {
      const y = 80 + i * (520 / (count - 1));
      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
      );
      path.setAttribute(
        'd',
        `M80 ${y} C${250 + i * 4} ${70 + i * 8},${650 - i * 5} ${620 - i * 6},820 ${y}`,
      );
      group.append(path);
    }
    document.querySelector('#density-value').textContent = count + ' lines';
    document.querySelector('#status').textContent =
      'Drawing updated to ' + count + ' curves.';
  }
  density.addEventListener('input', draw);
  draw();
}

```
