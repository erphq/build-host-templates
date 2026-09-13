# Rue Space — original spatial studies

Build Rue Space as an original minimal portfolio for a fictional spatial practice. Its subject is the relationship between rooms and the spaces around them: a threshold between street and garden, a room for reading beside someone else, and an installation that creates a small audience inside an existing hall. The site should feel like a concise studio folio pinned beside a working drawing. It is not a real architecture firm, property listing, hotel, construction business, or generic creative agency. The main task is to let a visitor look closely at three proposals, move between image and explanatory diagram, read the reasoning, and gather a local selection.

## Research relationship

Pam, reached through the DesEngs Minimum directory, was inspected in the actual browser. Its reviewed homepage used a small top identity, image-led project presentation, a large but direct studio label, and an editorial relationship between visual work and descriptive text. It is an e-commerce design studio, not an architectural practice. Borrow only the general lessons of image-forward presentation, understated navigation, and project pacing. Do not copy its logos, clients, website mockups, photography, language, services, contact details, or exact layout. The initially suggested Instinct domain now redirects to an AI assistant website, so it is unsuitable as a spatial reference and must not be described as one.

Rue Space is an original translation into another discipline. Its identifying structure is a narrow fixed left rail on desktop, with a two-line text wordmark, two navigation links, and a small practice note at the bottom. The work occupies the remaining width. This differs from Nola’s centered photographic introduction and Ivo’s narrow object table. Do not use one shared shell and change colors. Here the rail is a quiet constant while the images and text move vertically. On smaller screens it becomes a normal top header, avoiding a cramped content column or persistent overlay.

## Complete document set

Create index.html, threshold-court.html, north-reading-room.html, common-stair.html, and practice.html. All five are complete documents with their own titles, one h1, substantial content, and working internal navigation. Each project has a distinct original image, original explanatory diagram, short introduction, illustrative facts, and three prose sections. The Practice page contains a practice statement and the local selection list. It is not a thin placeholder contact page. Use relative links and bundle all assets so the standalone download can be served without the parent library.

The project data is defined precisely in the appendix. Threshold court is a pavilion study around approach and depth. North reading room is a modest shared interior organized by daylight and a table. Common stair is an installation that gathers people without permanently assigning a room a front. Their areas and material descriptions are illustrative. Do not convert them into real addresses, completed commissions, construction costs, client testimonials, or fabricated awards. Keep the writing specific to the proposal’s formal questions and unresolved conditions.

## Color, typography, and space

Use #eeeae1 as the page background and #36392f for primary text. Secondary labels use a readable olive gray near #64685c. Rules use a slightly darker mineral gray than the page, around #c4c5b7. The diagrams have a pale drawing-sheet field, #f2efe6, with warm brown-gray lines. The image colors bring terracotta, blue, ash, and olive into the portfolio. Avoid adding a decorative accent palette that competes with the proposals. There are no gradients behind the page, no glass panels, no pill-shaped navigation, and no floating contact badge.

Use locally bundled Geist throughout. The text wordmark is about 32px on desktop with tight letter spacing and short line height. It reads “rue” over “space,” entirely in lowercase. The main introductory statement is modest, around 20px with 1.5 line height, and should fit within a comfortable short measure. Case titles are around 30px. Body text is 15px, with essay paragraphs using approximately 1.9 line height. Metadata and status text remain at least 12px. Minimalism must not depend on making words too small to read.

The left rail is about 250px wide, fixed from top to bottom, with 34px horizontal and 40px top padding. Its Projects and Practice links appear beneath the wordmark with a clear vertical gap. A small bottom note identifies the practice’s subjects and years. The main content begins to the right of the rail and uses around 25–35px padding. Keep a clear separation between identity and work, but do not add a visible vertical divider unless necessary. The relationship should be established through alignment and negative space.

## Index page

The opening is a two-column row. On the left, set “Rooms and the spaces that happen between them.” On the right, place a short description of the three studies and their shared interest in daylight, shared use, and threshold depth. The descriptive text is slightly smaller and secondary in color. It should not become a long practice manifesto. The first project image begins after a measured gap of around 45px, so the work is visible without scrolling through a full-screen heading.

Present Threshold court first at the full content width. Its image shows an original modest courtyard pavilion with pale brick, a recessed terracotta opening, a birch, and gravel. Beneath the image, align the project name left and “Pavilion / 2026” right. The image and title both link to the full case. North reading room follows at roughly 75 percent width aligned right. Common stair follows at roughly 87 percent width aligned left. This creates a slight editorial rhythm, but the left rail remains the defining difference from a conventional centered photography gallery. On phones all three images become full width within the content margins.

Images have clean square corners and no overlaid text. Their natural landscape ratio remains visible. Use meaningful alternative descriptions based on the proposal, declare dimensions, and load lower images lazily. A subtle hover brightness change is enough; do not zoom the image until it crops unexpectedly or introduce a cursor-following label. Project captions stay visible at all times. The footer explains the fictional nature of the practice and links to a plain-text credits file.

## Original assets

The courtyard image should depict a small contemporary pavilion around a gravel court, not an extravagant villa. Pale cream brick, one deep terracotta doorway, and a slender birch establish scale and material. Keep the light overcast and the geometry legible. The reading-room image should show pale ash shelves, a blue linoleum communal table, a few red tubular chairs, limewashed surfaces, and a garden-facing window. The stair image should show warm plywood seating tiers, olive cushions, a pale blue temporary partition, and a modest industrial hall. All three are original generated architectural concepts. They must not be taken from the reference site or presented as completed construction.

Each project also has a separate original SVG diagram. Threshold court uses an enclosure, a deep entrance, an approach line, and a tree circle. North reading room diagrams the room perimeter, shelves, table, chair marks, and window edge. Common stair uses a dashed existing enclosure and repeated stepped lines beside a partition. These are explanatory relationships, not scaled plans. Place a clear “not to scale” label inside the diagram. Do not add invented survey dimensions, structural symbols, a professional seal, or detailed construction instructions.

## Project reading experience

A case begins with a return link, project title, and one-sentence introduction. Put category and year toward the opposite side on a wide screen. The main image follows directly. Beneath it, use a slim control row: Image and Diagram on the left, Save to selection on the right. These are text buttons with comfortable target sizes. The selected view has an underline and aria-pressed=true. The image and diagram occupy the same conceptual stage but do not need identical physical height if preserving their content requires otherwise.

Changing the view hides the inactive container with the hidden attribute and reveals the selected container. Update a live status to explain whether the visitor is looking at an original generated concept or an explanatory diagram. Do not leave both visual layers in the accessibility tree. The view selection does not change the project facts or selection status. No animation is necessary; a direct switch is more appropriate for comparing spatial information.

Below the visual area, create a two-column reading section. The narrower left column contains a definition list with study type, year, illustrative area, and material direction. The wider right column contains three sections of substantive prose. Threshold court discusses arrival, depth, and the limitations of the concept. North reading room discusses daylight, domestic scale in a shared setting, and unresolved technical requirements. Common stair discusses gathering, visible construction questions, and the distinction between a seating installation and a verified circulation route. These explanations are part of the portfolio’s value and should remain readable rather than being reduced to tiny captions.

End with a next-project link and a link to view the local selection on Practice. The project sequence loops through the three studies. The native browser’s back button should behave normally. Avoid a custom modal route system, forced smooth-scroll library, or page transition that delays reading. Every project should be directly accessible through its HTML URL.

## Local selection

Save to selection records only a project identifier in a site-specific localStorage array. When saved, the button changes to Remove from selection and its pressed state becomes true. Clicking it again removes the identifier. A live status reports the result only after the write succeeds. If storage fails, explain that this browser could not save the selection and retain the currently visible state. Never claim the project was sent to the practice or added to a real inquiry.

The Practice page restores the saved identifiers, validates them against the known project data, and renders a list of project names as normal links. Unknown identifiers are ignored. Each row has a clearly named Remove button. Removing an item updates storage and the visible list. When the list is empty, show a useful sentence directing the visitor to open a study and save it. Disable Copy selection while empty. The copy action produces a plain-text list with the portfolio name and a note that no inquiry was sent. If clipboard access fails, keep the list visible and explain that the names can be copied manually.

The selection contains no name, email address, account, or personal information. There is no backend and no network submission. Do not add a fake contact form, a send button, a shopping basket, or an availability promise. The interaction is a local reference list for a reader comparing concepts. Use textContent when rendering names and status messages. Keep the storage logic small and defensive, including malformed saved JSON and storage-unavailable cases.

## Practice page and mobile behavior

The Practice page begins with “A practice of making room.” Its paragraphs discuss relationships between inside and outside, solitary and shared, permanent and temporary. Explain why an existing threshold or patch of light can be a useful starting point. Distinguish generated images and explanatory diagrams from technical design and consultation. The local selection belongs after the practice writing as a useful continuation, not above it as a dashboard. It should not turn the portfolio into an application screen.

At approximately 850px, convert the fixed rail to a normal header and reset the content’s left margin. The wordmark becomes one line, the two navigation links sit beside it, and the long bottom practice note disappears because it is redundant with the page content. At 550px and below, stack the opening, project introductions, and story columns. The definition list can remain a compact label/value grid. Keep all image studies at full available width. Test long project names and the Save to selection label at 320px and 390px; controls must not collide or cause horizontal scrolling.

Use semantic landmarks, visible focus outlines, normal links, meaningful SVG labels, and one h1 per page. Test project switching, save/remove, selection restoration, empty state, and copy status. Inspect the home visually on desktop and mobile. Confirm that the original image assets and local font are available after extraction. The complete source specifications below define the proposal content, diagrams, responsive rules, and state transitions. They are included as exact implementation guidance so a future builder can reproduce the intended experience without inventing missing behavior.

## Exact data.mjs specification

```javascript
export const projects = [
  {
    id: 'threshold-court',
    name: 'Threshold court',
    image: 'court',
    type: 'Pavilion',
    year: '2026',
    area: '42 m²',
    material: 'Pale brick / terracotta / gravel',
    intro:
      'A small place between a street and a garden. The doorway is the room’s most important object.',
    story: [
      [
        'The space before the room',
        'Threshold court begins with the arrival rather than the enclosure. A gravel surface slows the approach, while one recessed opening draws the eye across an otherwise quiet wall. The tree gives the court a seasonal register without turning it into a planted display. The proposal imagines a place that can remain useful even when the door is closed.',
      ],
      [
        'Depth instead of ornament',
        'The terracotta reveal is deliberately deeper than a simple painted frame. Its shadow changes the opening through the day and gives the threshold somewhere to pause. The pale brick keeps the rest of the elevation calm. Neither material is intended as a claim about a real supplier, structural system, or completed construction.',
      ],
      [
        'A concept with limits',
        'The image and diagram are original speculative studies. The plan explains a relationship between approach, doorway, and enclosed space; it is not a measured survey or a permitting drawing. Drainage, access, structure, planting conditions, and weathering would require site-specific development.',
      ],
    ],
  },
  {
    id: 'north-reading-room',
    name: 'North reading room',
    image: 'room',
    type: 'Interior',
    year: '2025',
    area: '68 m²',
    material: 'Ash / limewash / blue linoleum',
    intro:
      'A shared table, a garden-facing window, and enough quiet space to read beside someone else.',
    story: [
      [
        'A room organized by daylight',
        'The long table faces the strongest source of indirect light. Bookshelves occupy the perimeter so the center remains available to several ways of reading: alone, in a pair, or across a small shared discussion. The blue surface distinguishes the working plane from the pale timber without introducing a loud identity system.',
      ],
      [
        'Domestic scale, public use',
        'The red tubular chairs bring an everyday scale into the room. Their repetition provides rhythm, while the garden view keeps the wall from feeling closed. The image suggests a modest cultural interior rather than a monumental institution. It asks how a small shared resource might feel generous without being large.',
      ],
      [
        'What the drawing cannot answer',
        'This fictional proposal does not establish access compliance, acoustic performance, fire capacity, furniture procurement, or a real building’s dimensions. The accompanying diagram is an explanatory arrangement. A built project would need consultation with users, a site survey, and technical design beyond this visual study.',
      ],
    ],
  },
  {
    id: 'common-stair',
    name: 'Common stair',
    image: 'stair',
    type: 'Installation',
    year: '2026',
    area: '24 m²',
    material: 'Plywood / olive fabric / steel frame concept',
    intro:
      'A stair that is also a small audience, a pause in an exhibition, and a place to turn a room around.',
    story: [
      [
        'A gathering without a stage',
        'Common stair proposes a stepped piece of furniture inside an existing hall. It allows a talk or informal gathering to happen without permanently assigning the room a front. The tiers face an open area, while the blue plane behind them creates a temporary boundary rather than a complete enclosure.',
      ],
      [
        'The underside matters',
        'The plywood is treated as a visible working material. The steps appear simple, but their support, edges, fixings, and handling would determine whether the installation could be assembled and reused. The visual study keeps that question present by avoiding a seamless sculptural finish.',
      ],
      [
        'An illustration, not an access route',
        'The stepped form is a seating concept, not a verified means of circulation or an accessible route. Its geometry is illustrative and has not been tested for loads, falls, fire behavior, or public occupancy. The next stage would be a full-scale review with appropriate design and engineering expertise.',
      ],
    ],
  },
];

```

## Exact plan.mjs specification

```javascript
export function plan(id) {
  const lines =
    id === 'threshold-court'
      ? `<path d="M180 90h400v260H440m-100 0H180V90"/><path d="M340 350v-50h100v50"/><path d="M390 350v90" stroke-dasharray="7 7"/><circle cx="200" cy="445" r="38"/><path d="M160 505h430" stroke-dasharray="4 9"/>`
      : id === 'north-reading-room'
        ? `<path d="M130 110h500v340H130Z"/><path d="M155 140h40v280h-40zm60 0h355v30H215Z"/><path d="M275 235h265v105H275Z"/><path d="M302 212h38m60 0h38m60 0h38m-234 151h38m60 0h38m60 0h38"/><path d="M630 160v190" stroke="#7494a3" stroke-width="10"/>`
        : `<path d="M120 110h520v350H120Z" stroke-dasharray="7 7"/><path d="M210 175h300v235H210Z"/><path d="M210 220h300m-300 47h300m-300 47h300m-300 47h300"/><path d="M185 150h350" stroke="#7494a3" stroke-width="12"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 580" role="img" aria-label="Original explanatory spatial diagram, not to scale"><rect width="750" height="580" fill="#f2efe6"/><g fill="none" stroke="#84715d" stroke-width="3">${lines}</g><text x="45" y="540" font-family="Arial,sans-serif" font-size="14" fill="#615b50">SPATIAL RELATIONSHIP / NOT TO SCALE</text><path d="M682 115v-45m-8 12 8-12 8 12" stroke="#615b50" fill="none" stroke-width="2"/></svg>`;
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
  background: #eeeae1;
  color: #36392f;
  font:
    15px/1.6 Geist,
    Arial,
    sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
button {
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 10px 0;
  min-height: 44px;
}
button:focus-visible,
a:focus-visible {
  outline: 2px solid #7b4636;
  outline-offset: 5px;
}
.skip {
  position: absolute;
  top: -80px;
}
.skip:focus {
  top: 10px;
  z-index: 30;
  background: white;
}
.rail {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  padding: 40px 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wordmark {
  font-size: 32px;
  line-height: 1.05;
  letter-spacing: -0.06em;
}
.wordmark span {
  display: block;
}
.rail nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 45px;
}
.rail nav a[aria-current] {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.rail .small {
  font-size: 12px;
  color: #68695e;
}
.content {
  margin-left: 250px;
  padding: 35px 35px 0 25px;
}
.opening {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 5px 0 45px;
  align-items: start;
}
.opening h1 {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 330px;
  margin: 0;
}
.opening p {
  font-size: 13px;
  color: #64685c;
  max-width: 270px;
  margin: 0;
}
.project {
  margin-bottom: 65px;
}
.project img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 3/2;
  object-fit: cover;
}
.project:nth-child(2) {
  width: 75%;
  margin-left: auto;
}
.project:nth-child(3) {
  width: 87%;
}
.caption {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 12px;
}
.caption h2 {
  font-size: 15px;
  font-weight: 400;
  margin: 0;
}
.caption span {
  font-size: 12px;
  color: #64685c;
}
.project a:hover img {
  filter: brightness(0.98);
}
.case-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  padding: 15px 0 30px;
}
.case-top h1 {
  font-size: 30px;
  font-weight: 400;
  margin: 5px 0;
}
.case-top p {
  margin: 0;
  max-width: 460px;
  color: #64685c;
}
.back {
  font-size: 13px;
  white-space: nowrap;
}
.media-stage img,
.media-stage svg {
  display: block;
  width: 100%;
  max-height: 720px;
  object-fit: contain;
  background: #e5e1d7;
}
.media-tools {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  border-bottom: 1px solid #c4c5b7;
  padding: 8px 0;
}
.media-tools [aria-pressed='true'] {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.view-tabs {
  display: flex;
  gap: 25px;
}
.media-tools button {
  font-size: 13px;
}
.status {
  font-size: 12px;
  color: #64685c;
  margin: 10px 0 25px;
}
.story-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 70px;
  margin: 65px 0;
}
.facts {
  font-size: 13px;
}
.facts dl {
  margin: 0;
}
.facts dt {
  color: #64685c;
  margin-top: 20px;
}
.facts dt:first-child {
  margin-top: 0;
}
.facts dd {
  margin: 4px 0;
}
.story h2 {
  font-size: 19px;
  font-weight: 400;
}
.story p {
  line-height: 1.9;
}
.story section {
  margin-bottom: 38px;
}
.next {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #c4c5b7;
  padding: 22px 0;
}
.practice {
  max-width: 760px;
  padding-top: 20px;
}
.practice h1 {
  font-size: 34px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 45px;
  max-width: 500px;
}
.practice h2 {
  font-size: 20px;
  font-weight: 400;
  margin-top: 40px;
}
.practice p {
  line-height: 1.9;
  max-width: 620px;
}
.shortlist {
  margin-top: 45px;
  border-top: 1px solid #b9bcad;
  padding-top: 20px;
}
.saved-row {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d0d0c4;
  padding: 10px 0;
}
.saved-row button {
  font-size: 13px;
}
.copy-list {
  border-bottom: 1px solid #757d66;
}
footer {
  font-size: 12px;
  color: #64685c;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 70px;
  padding: 25px 0;
  border-top: 1px solid #c4c5b7;
}
footer p {
  margin: 0;
  max-width: 510px;
}
[hidden] {
  display: none !important;
}
@media (max-width: 850px) {
  .rail {
    position: static;
    width: auto;
    padding: 25px;
    display: block;
  }
  .wordmark {
    font-size: 25px;
  }
  .wordmark span {
    display: inline;
  }
  .wordmark span + span:before {
    content: ' ';
  }
  .rail > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
  .rail nav {
    flex-direction: row;
    margin-top: 0;
    gap: 20px;
  }
  .rail .small {
    display: none;
  }
  .content {
    margin: 0;
    padding: 25px;
  }
  .opening {
    gap: 25px;
  }
  .story-grid {
    gap: 35px;
  }
}
@media (max-width: 550px) {
  .rail {
    padding: 22px;
  }
  .content {
    padding: 22px;
  }
  .opening {
    display: block;
    margin-bottom: 30px;
  }
  .opening h1 {
    font-size: 20px;
    margin-bottom: 22px;
  }
  .opening p {
    max-width: 100%;
    font-size: 13px;
  }
  .project,
  .project:nth-child(2),
  .project:nth-child(3) {
    width: 100%;
    margin: 0 0 40px;
  }
  .caption {
    gap: 15px;
  }
  .caption span {
    max-width: 90px;
    text-align: right;
    font-size: 12px;
  }
  .case-top {
    display: block;
    padding-top: 0;
  }
  .back {
    display: block;
    margin-bottom: 25px;
  }
  .case-top h1 {
    font-size: 27px;
  }
  .media-tools {
    gap: 12px;
    align-items: start;
  }
  .view-tabs {
    gap: 14px;
  }
  .media-tools button {
    font-size: 12px;
  }
  .story-grid {
    display: block;
    margin-top: 35px;
  }
  .facts dl {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 10px;
  }
  .facts dt,
  .facts dd {
    margin: 0;
  }
  .story {
    margin-top: 40px;
  }
  .practice h1 {
    font-size: 29px;
    margin-bottom: 30px;
  }
  footer {
    display: block;
    margin-top: 45px;
  }
  footer p {
    margin-bottom: 15px;
  }
  .next {
    font-size: 13px;
    gap: 20px;
  }
  .saved-row {
    gap: 15px;
  }
}
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
  }
}

```

## Exact site.js specification

```javascript
const key = 'rue-space-selection-v1';
const projects = JSON.parse(
  document.querySelector('#project-data').textContent,
);
const selectionStatus = document.querySelector('#selection-status');
function read() {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value)
      ? value.filter((id) => projects.some((p) => p.id === id))
      : [];
  } catch {
    return [];
  }
}
function write(ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
    return true;
  } catch {
    if (selectionStatus)
      selectionStatus.textContent = 'This browser could not save your selection.';
    return false;
  }
}
const save = document.querySelector('#save-project');
if (save) {
  const id = save.dataset.project;
  function render() {
    const saved = read().includes(id);
    save.textContent = saved ? 'Remove from selection' : 'Save to selection';
    save.setAttribute('aria-pressed', String(saved));
  }
  render();
  save.addEventListener('click', () => {
    const ids = read();
    const selected = ids.includes(id);
    if (write(selected ? ids.filter((item) => item !== id) : [...ids, id])) {
      render();
      selectionStatus.textContent = selected
        ? 'Removed from your local selection.'
        : 'Saved to your local selection.';
    }
  });
}
for (const button of document.querySelectorAll('[data-view]'))
  button.addEventListener('click', () => {
    const diagram = button.dataset.view === 'diagram';
    document.querySelector('#photo-view').hidden = diagram;
    document.querySelector('#diagram-view').hidden = !diagram;
    for (const other of document.querySelectorAll('[data-view]'))
      other.setAttribute('aria-pressed', String(other === button));
    document.querySelector('#view-status').textContent = diagram
      ? 'Original explanatory diagram. Not to scale or for construction.'
      : 'Original generated spatial concept. Not a completed building.';
  });
const list = document.querySelector('#saved-projects');
if (list) {
  function render() {
    list.replaceChildren();
    const ids = read();
    document.querySelector('#copy-selection').disabled = !ids.length;
    if (!ids.length) {
      const p = document.createElement('p');
      p.textContent =
        'No projects selected yet. Open a study and choose Save to selection.';
      list.append(p);
      return;
    }
    for (const id of ids) {
      const project = projects.find((p) => p.id === id);
      const row = document.createElement('div');
      row.className = 'saved-row';
      const a = document.createElement('a');
      a.href = id + '.html';
      a.textContent = project.name;
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.setAttribute('aria-label', 'Remove ' + project.name);
      remove.addEventListener('click', () => {
        if (write(read().filter((item) => item !== id))) {
          render();
          selectionStatus.textContent = project.name + ' removed.';
        }
      });
      row.append(a, remove);
      list.append(row);
    }
  }
  render();
  document
    .querySelector('#copy-selection')
    .addEventListener('click', async () => {
      const names = read().map((id) => projects.find((p) => p.id === id).name);
      try {
        await navigator.clipboard.writeText(
          'RUE SPACE — SELECTED CONCEPTS\n\n' +
            names.join('\n') +
            '\n\nLocal reference list. No inquiry has been sent.',
        );
        selectionStatus.textContent = 'Selection copied.';
      } catch {
        selectionStatus.textContent =
          'Copy unavailable. The selected project names remain visible above.';
      }
    });
}

```
