# Sequence — an independent design studio

Build a complete, original portfolio and agency website called Sequence. The result should feel like a small, precise studio with a coherent point of view. It must have an editorially restrained black interface, a permanent desktop introduction column, a large scrolling gallery of original identity projects, detailed individual project pages, a substantial studio page, and a useful local project brief builder. Treat this as a connected website, with real pages and working navigation, rather than a single landing-page mockup. Every project is a self-initiated concept. Do not imply actual commercial clients, awards, funding announcements, or business results.

## Research and the transferable idea

The primary structural reference is https://www.pixeluplabs.com/. The discovery source inspected was https://minimal.gallery/. Pixel Up Labs was selected because its design makes an unusually clear trade: the agency introduction remains available while the work occupies most of the reading experience. It does not try to compete with its projects through giant interface typography. Its own site is a framework for the work. Translate that relationship into an original brand, original copy, original illustration, and original project systems. Do not reuse its name, logo, copy, photography, client identities, or project artwork.

At a measured viewport of 1280 by 720, the reference has a 64-pixel sticky header. The left introduction begins at x=20 and y=84 with a 405-pixel text width. The heading is Inter Display at 30 pixels, weight 500, 33-pixel line height, and approximately negative 1.1-pixel tracking. The project column begins at x=457.5 and has a width of 802.5 pixels. Its first image begins at y=84 and is 464.94 pixels high, giving it an aspect ratio of approximately 1.726. The second project image begins at y=642.53. This repeated image-plus-caption rhythm is a central quality of the reference.

The live reference was scrolled to later projects. The introduction and bottom calls to action remained visible in the left column while the project gallery advanced on the right. The header also stayed at the top of the viewport. The agency's own layout is nearly monochrome; individual projects supply the expressive color. Project captions have a modest title at the left, a short explanation beneath, and tiny uppercase discipline and year metadata along the right. The first image is an isolated luminous brand symbol. Later projects alternate motion, website compositions, editorial material, and device mockups. This variety makes the long gallery feel like a sequence of distinct creative worlds.

At a measured mobile viewport of 390 by 844, the reference switches to a single column with 16-pixel side margins and a menu control. The header remains 64 pixels tall. The heading becomes 24 pixels with a 26.4-pixel line height. The introduction, trusted-company strip, and two calls to action appear before the project gallery. The main gallery starts around y=443.6, at a width of 358 pixels. Project metadata wraps below the title instead of squeezing into the same row. These are actual DOM measurements. In contrast, the timings used for Sequence's visual breathing effect and appearance transitions are new design decisions. Do not describe them as measured reference timings.

The reference page sequence continues through twelve projects, then frequently asked questions, a personal audit invitation, and a full footer. The selected adaptation uses four substantial original projects to keep the site manageable while preserving the editorial rhythm. It retains an explanatory studio section, native disclosure questions, a contrasting contact invitation, and a large closing wordmark. The reference's small navigation links use a measured 150-millisecond color transition. The exact carousel and video timing were not established. Sequence should use its own documented, accessible motion values.

## Original brand direction

Sequence is a fictional independent design practice concerned with the relationships between brand strategy, visual identity, and digital experience. Its central phrase is “Good things happen when everything comes together.” The name suggests continuity without requiring a literal timeline everywhere. The mark is two small overlapping elliptical loops, drawn in code. The wordmark is lowercase, compact, and slightly tightened. Use an almost-black olive background, a warm pale text color, muted green-gray supporting text, fine olive-gray borders, and an acid chartreuse accent. The accent should appear in the mark, a few important words, availability dots, the primary action, and the closing invitation.

Use Geist as the interface typeface, served locally from the assets directory. Its neutral shape leaves room for the visual personalities of the projects. Weights should mostly be regular or medium. Avoid making every heading bold. The title in the permanent introduction is expressive through its phrasing and line breaks, not sheer size. On desktop it should sit around 33 pixels at a typical laptop width. Body text should be approximately 15 pixels with comfortable line height. Uppercase metadata is only 10 or 11 pixels, with increased tracking, and should remain secondary. Never use tiny metadata for essential navigation or the main explanation.

There should be no rounded dashboard cards, pill-filled hero, gradient headline, testimonial carousel, decorative analytics numbers, or oversized menu of services before the work. The interface is flat and architectural. Borders establish rails and section boundaries. The project images can contain gradients, shadows, and sculptural treatment because those belong to the portfolio work itself. Make that distinction visually clear: the website chrome is quiet while the artwork is vivid. The background should remain continuous across the intro and gallery, separated by a single subtle vertical rule.

## Desktop layout

Create a sticky 70-pixel header across the full width. Put the wordmark at the left and the navigation at the right. Navigation contains Selected work, The studio, Our approach, and Start a conversation. The final link is a pale rectangular action with a diagonal arrow, and should feel compact enough to belong in the navigation. The header has a fine bottom border and a slightly translucent dark background. Preserve a reliable focus outline and do not let transparency reduce legibility against imagery as the page scrolls.

Below the header, use a grid with 34.5 percent of the width assigned to the introduction and 65.5 percent to the content. The intro rail is sticky at 70 pixels and fills the remaining viewport height. It has 26-pixel horizontal padding, a right border, and two vertically separated content groups. The upper group contains a small availability line, the main statement, and one short supporting paragraph. The lower group contains a label, a static horizontal strip of the four fictional project names, a secondary studio link, and the chartreuse contact action. This balance should hold at laptop heights without clipping either action.

The gallery starts with a tiny index row and then four project entries. Give the content column 24-pixel horizontal padding. Each project image should be a wide rectangle with an aspect ratio near 1.64. Place the caption directly beneath it, with a 14-pixel gap. The project title should be about 23 pixels, with its short description below in muted gray. The right side of the caption contains disciplines and year. Leave approximately 43 pixels after an entry. The work should dominate the page rather than being boxed inside padded cards. Each complete image is a link to a real case-study page.

Add a round pale arrow at the lower-right corner of each project image. On a pointer device it begins just outside the image and slides into view when the image is hovered or focused. On narrow screens it remains visible because there is no hover. Use a restrained image scale transition of 750 milliseconds with a smooth deceleration. Do not translate the caption, distort the image, or make hover necessary to understand what the link does. The first Orbit image gets a barely visible pair of outline circles that expand once on pointer hover or keyboard focus. Do not add continuously moving strips or loops; all ambient graphics remain still until the visitor interacts. This is a gentle enhancement to an already complete image.

## Project artwork and content

Create the artwork as original local SVG illustrations. The first project, Orbit, is a concept research intelligence platform. Its artwork shows a large intertwined orbital sculpture in luminous yellow-green metal against a dark olive field, with a soft pool of reflected light and a ground shadow. The composition uses several elliptical paths with thick metallic gradient strokes. Small corner labels identify the project and the identity system. Keep the main sculpture centered but leave enough visual breathing room that the artwork does not feel like a logo squeezed into a card. Its case-study message is “A clearer signal in a noisy world.”

The second project is Parallel, a concept developer infrastructure identity. Its image should be lavender and midnight purple, with a very faint architectural grid. Two thick, upright parallel blocks are rotated together to create a sculptural mark. Use a lighter top surface and darker side surface so that the graphic reads as dimensional. The project name appears simply in the upper-left corner. A small line at the lower-left communicates the idea of building what comes next. This project shifts the gallery away from Orbit's organic loops into a much more geometric construction.

The third project is Fieldwork, a concept editorial journal about the relationship between city life and the outdoors. Create a stylized landscape from layered muted green hills and a pale sky. Place a slightly rotated magazine cover in the foreground. The cover has a warm off-white paper tone, a large serif Fieldwork title, a tiny issue label, a mountain illustration, and a short two-line editorial headline. The surrounding landscape should extend beyond the cover, making the image feel like a considered still life rather than a flat screenshot. It introduces a softer, more tactile visual world into the sequence.

The fourth project is Forma, a concept furniture identity. Its artwork is warm clay and terracotta. Show a sculptural upholstered bench or chair in the center, built with simple original vector shapes, warm highlights, darker material sides, and a soft shadow. Set a large lowercase forma wordmark at the upper-left, with deliberately tight spacing. The artwork should evoke material and proportion without borrowing a recognizable designer chair. The message is “Make room for what comes next.” Each of these four projects should have a unique palette and recognizable visual language.

## Full case-study pages

Generate an individual page for every project: orbit.html, parallel.html, fieldwork.html, and forma.html. Reuse the same header and footer for consistency. Begin with a link back to all work, then a two-column title area. Put the discipline and year above the oversized project name on the left; place the one-sentence project idea on the right. The project title can be dramatically larger here than on the home page because the project itself is now the main subject. Follow with a wide hero illustration using the same original asset seen on the home page.

After the hero, include a two-column context section. The left column has a numbered label, a short heading, and a list of four actual conceptual deliverables. The right column contains two thoughtful paragraphs describing the creative question and the design response. Explain specific visual decisions rather than inventing commercial success metrics. Include a concise statement that the work is self-initiated. The case study should be a piece of design reasoning that someone can read, not a gallery of pictures with no explanation.

Continue with a paired design-system display. One side uses the project's accent color, a large project wordmark, and small supporting labels. The other side is an off-white typography specimen with oversized letters, numerals, and punctuation. Follow with a large browser-style digital concept. It contains a minimal browser top bar, an internal brand navigation, a project headline, supporting copy, and a simple orbital geometric visual. Clearly label any noninteractive mock interface as a concept rather than presenting its call to action as a working website button. This section communicates how the identity becomes an experience.

End each study with a numbered explanation of the digital expression and then a large Next concept link. Sequence the projects cyclically so visitors can continue browsing without returning to the home page. The last study should link back to Orbit. All next links must point to generated pages. Do not create empty routes or dead project links. The case-study footer should retain the large Sequence wordmark, short studio statement, direct contact route, credits link, and a relative return link to the ProtoSites collection.

## Studio page

The studio page is a real editorial page with substantial content. Begin with a small label and a large statement: “A clear point of view. A shared sense of possibility.” Use the accent on the second part, but keep the typography simple. Follow with a split explanation of the studio concept, its connected way of thinking, and the fact that these are self-initiated studies. Use the original Parallel artwork as a wide visual break. The page should feel related to the home page without repeating its permanent sidebar layout.

Include a four-stage approach section with numbered horizontal rows. The stages are Find the signal, Set the direction, Build the system, and Make it real. Each stage gets a full paragraph describing the decisions it resolves. Use the numbering as a reading aid, not decorative fake data. On desktop, the number, stage title, and explanation sit in three columns. On mobile, the explanation moves below the title while remaining aligned with it. The approach anchor in the global navigation must lead directly to this section.

Below the process, include another split section about direct creative collaboration, followed by a two-column list of Brand and Digital capabilities. The capabilities are supporting information after the work and the approach, not the lead message. Close with the same chartreuse invitation used on the home page. The invitation contains a short uppercase label, a two-line statement about ambition and possibility, and a simple underlined link to the contact page.

## Local brief interaction

The contact page should provide a meaningful action without pretending to send a message to a fictional studio. On the left, place a large question, “What are you thinking?”, with a few encouraging lines and a clear explanation of the local behavior. On the right, build a real form with visible labels for name, email, company or project, scope, context, and timing. The name and email are required. The context requires at least twenty characters. Use native email validation, sensible maximum lengths, and ordinary HTML form controls.

Represent the scope choices as accessible checkbox chips. They must remain actual labeled checkboxes, with visible selected styling and a visible focus indicator. Offer Strategy, Identity, Website, Product, and Something else. Timing is a styled select with three useful choices. The submit button should say Create my project brief, because that is exactly what happens. Explain below the button that the draft remains unsent and can be reviewed, edited, copied, or downloaded. Do not add a fake loading spinner or a success message claiming someone will respond.

On valid submission, create a plain-text brief from the form data, hide the form, and reveal a clearly titled result panel. Render user content with textContent, never innerHTML. Move focus to the result panel so keyboard and screen-reader users understand the transition. Provide Download brief, Copy brief, and Back to editing controls. Editing should restore the original form with all values intact. Download should use a text Blob and revoke its temporary object URL. Copy should report success in a live region, and gracefully explain that download remains available if clipboard access fails.

## Responsive behavior and accessibility

At 900 pixels, collapse the split home layout into one column and release the sticky introduction. The introduction now precedes the project list and uses a natural height. At 580 pixels, show a compact mobile menu button with aria-expanded and aria-controls. Opening it reveals the navigation directly under the sticky header; Escape closes it. The menu should not cover the entire screen or trap the user in an unnecessary modal interaction. Maintain comfortable tap targets and clear text labels. Do not rely on icon recognition for primary navigation.

At a 390-pixel viewport, use roughly 18-pixel side margins. Reduce the introduction heading to about 31 pixels. Change project images to a slightly taller ratio, around 1.3, so the artwork remains meaningful on a small screen. Let metadata use its own full-width row with discipline at one side and year at the other. Stack all case-study content and design specimens. Keep the digital mockup readable by stacking its internal columns. The studio process rows should retain a small number column, with the body paragraph beneath the title.

Include a skip link to the main content on every page. Use a semantic header, navigation, main, sections, articles, labels, and footer. Give project artwork useful alt text that describes the original concept. Decorative rings and arrows should be hidden from assistive technology where an accessible label already communicates their meaning. Native details elements handle the FAQ disclosures. Respect reduced-motion preferences by disabling animations, hover transitions, and smooth scrolling. The website must be complete and understandable with those effects disabled.

## Delivery and verification

Implement the site through a buildSequence function that writes all generated pages into public/demos/sequence and returns an object containing the complete prompt string. Store source modules and styles in scripts/sequence. Keep the build separate from unrelated categories and shared application infrastructure. Deliver local artwork, a local font, an accurate credits file, and a raster hero.webp preview for collection cards. Write the reproducible prompt both beside the demo and under public/prompts/sequence.md. No image or font should depend on an expiring remote URL.

Verify the page count, internal links, local asset references, prompt length, and the build function's return shape. Inspect the desktop home page and a narrow mobile layout. Exercise the menu, FAQ disclosure, form validation, brief generation, editing, download, and copy error handling where the environment permits. Check that the persistent rail does not collide with the header or cover its bottom action at normal laptop sizes. Distinguish observed behavior from assumptions in the final handoff. Report any verification limitations plainly, and do not invent screenshot measurements that were not actually collected.


## Exact content and project data

```javascript
export const projects = [
  {
    slug: 'orbit',
    name: 'Orbit',
    line: 'A clearer signal in a noisy world.',
    type: 'Brand strategy, digital experience',
    year: '2026',
    color: '#c9fd58',
    theme: 'signal',
    brief:
      'Orbit is a self-initiated concept for a research intelligence platform. The challenge was to make complex information feel navigable without flattening the substance that makes it useful.',
    idea: 'One point of focus. An orbital symbol connects individual discoveries into a larger picture. A bright chartreuse signal cuts through a deep charcoal interface, while an open typographic system gives ideas room to breathe.',
    details: [
      'Positioning and verbal identity',
      'Symbol and motion system',
      'Research workspace concept',
      'Responsive marketing website',
    ],
  },
  {
    slug: 'parallel',
    name: 'Parallel',
    line: 'Infrastructure with a human perspective.',
    type: 'Positioning, identity, website',
    year: '2026',
    color: '#adb4ff',
    theme: 'parallel',
    brief:
      'Parallel explores a new visual language for developer infrastructure. The goal is a platform identity that conveys technical precision while remaining welcoming to people building their first application.',
    idea: 'Two lines, moving together. A lavender palette and a modular grid give a dense technical category an approachable rhythm. The identity stretches from small command-line details to large architectural compositions.',
    details: [
      'Brand foundations',
      'Variable graphic language',
      'Developer landing page',
      'Documentation art direction',
    ],
  },
  {
    slug: 'fieldwork',
    name: 'Fieldwork',
    line: 'A daily practice. A wider perspective.',
    type: 'Art direction, editorial, commerce',
    year: '2025',
    color: '#d7ccba',
    theme: 'fieldwork',
    brief:
      'Fieldwork is a concept journal about the spaces between city life and the outdoors. We wanted the site to feel collected over time: considered, tactile, and full of possibilities.',
    idea: 'An editorial grid meets an open landscape. Oversized serif lettering, restrained captions, and generous image fields make a place for long-form thinking. Earth tones ground the digital experience in the physical world.',
    details: [
      'Editorial identity',
      'Digital journal experience',
      'Membership journey',
      'Print system concepts',
    ],
  },
  {
    slug: 'forma',
    name: 'Forma',
    line: 'Make room for what comes next.',
    type: 'Identity, product direction',
    year: '2025',
    color: '#e9b6a2',
    theme: 'forma',
    brief:
      'Forma is a self-initiated exploration of a modern furniture brand. The question was how to communicate lasting quality without relying on the usual vocabulary of quiet luxury.',
    idea: 'Form becomes the message. Warm clay, sculptural letterforms, and a precise product grid turn ordinary objects into something to look at again. The system is restrained enough to let material and proportion lead.',
    details: [
      'Visual identity',
      'Product presentation system',
      'Commerce concept',
      'Packaging and print direction',
    ],
  },
];

```

## Complete layout implementation

```css
@font-face {
  font-family: Geist;
  src: url('assets/geist-variable.woff2') format('woff2');
  font-display: swap;
  font-weight: 100 900;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}
body {
  margin: 0;
  background: #10110f;
  color: #f3f3ed;
  font:
    15px/1.45 Geist,
    Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
select,
textarea {
  font: inherit;
}
button,
a,
input,
textarea,
select {
  -webkit-tap-highlight-color: transparent;
}
button {
  color: inherit;
  cursor: pointer;
}
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid #d0ff71;
  outline-offset: 5px;
}
::selection {
  background: #c9fd58;
  color: #10110f;
}
.skip {
  position: fixed;
  top: -80px;
  z-index: 99;
  background: #c9fd58;
  color: #111;
  padding: 15px;
}
.skip:focus {
  top: 0;
}
.header {
  height: 70px;
  border-bottom: 1px solid #30312b;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;
  background: #10110ff5;
  backdrop-filter: blur(16px);
}
.logo {
  font-size: 23px;
  letter-spacing: -1px;
  font-weight: 600;
  display: flex;
  gap: 11px;
  align-items: center;
}
.mark {
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
  transform: rotate(-30deg);
}
.mark:before,
.mark:after {
  content: '';
  position: absolute;
  border: 3px solid #c9fd58;
  border-radius: 50%;
  width: 11px;
  height: 23px;
  top: 0;
}
.mark:before {
  left: 1px;
}
.mark:after {
  right: 1px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 12px;
}
.nav a:not(.contact):hover {
  color: #c9fd58;
}
.nav .contact {
  background: #eff0e8;
  color: #151612;
  padding: 12px 16px;
  display: flex;
  gap: 30px;
}
.menu {
  display: none;
  background: transparent;
  border: 0;
  padding: 10px;
}
.shell {
  display: grid;
  grid-template-columns: 34.5% 65.5%;
  min-height: calc(100vh - 70px);
}
.rail {
  min-width: 0;
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  padding: 27px 26px 24px;
  border-right: 1px solid #30312b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.eyebrow,
.meta,
.small-label {
  font:
    10px/1.5 Geist,
    Arial,
    sans-serif;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #92968b;
}
.rail h1 {
  font-size: clamp(27px, 2.55vw, 40px);
  line-height: 1.13;
  letter-spacing: -1.5px;
  font-weight: 450;
  margin: 43px 0 20px;
  max-width: 420px;
}
.rail h1 em {
  font-style: normal;
  color: #c9fd58;
}
.rail .intro {
  color: #979b90;
  max-width: 345px;
  font-size: 15px;
  line-height: 1.55;
}
.availability {
  display: flex;
  gap: 7px;
  align-items: center;
  font-size: 11px;
  color: #c2c6b9;
}
.dot {
  height: 6px;
  width: 6px;
  border-radius: 100%;
  background: #c9fd58;
  box-shadow: 0 0 12px #c9fd5860;
}
.ticker {
  overflow: hidden;
  margin: 22px 0 28px;
  border-top: 1px solid #30312b;
  border-bottom: 1px solid #30312b;
  padding: 17px 0;
}
.ticker-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  color: #9b9f92;
  font-size: 18px;
  letter-spacing: -0.7px;
}
.button {
  border: 1px solid #33362e;
  padding: 13px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
  font-size: 12px;
  background: #1b1d17;
}
.button:hover {
  background: #272b20;
}
.button.primary {
  margin-top: 9px;
  color: #111;
  background: #c9fd58;
  border-color: #c9fd58;
}
.button.primary:hover {
  background: #dfff9a;
}
.rail-bottom > .eyebrow {
  margin: 0 0 20px;
}
.content {
  min-width: 0;
  padding: 25px 24px 0;
}
.work-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.project {
  margin-bottom: 43px;
}
.visual {
  height: auto;
  aspect-ratio: 1.64;
  position: relative;
  display: block;
  overflow: hidden;
  background: #1e201a;
}
.visual > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.visual:hover > img {
  transform: scale(1.035);
}
.project .open-label {
  position: absolute;
  right: 16px;
  bottom: 16px;
  background: #f2f2e9;
  color: #151612;
  border-radius: 100%;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  transform: translateY(68px);
  transition: transform 0.3s;
}
.visual:hover .open-label,
.visual:focus-visible .open-label {
  transform: none;
}
.project-caption {
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: baseline;
}
.project-caption h2 {
  font-size: 23px;
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 450;
  margin: 0 0 4px;
}
.project-caption p {
  margin: 0;
  color: #8a8e81;
  font-size: 13px;
}
.project-caption .meta {
  text-align: right;
  font-size: 9px;
  white-space: nowrap;
}
.project-caption .meta span {
  margin-left: 25px;
}
.orbit-motion {
  position: absolute;
  left: 50%;
  top: 48%;
  width: 34%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  transition:
    transform 0.7s ease,
    opacity 0.7s ease;
  pointer-events: none;
}
.orbit-motion:before,
.orbit-motion:after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid #dbffa044;
  border-radius: 50%;
}
.orbit-motion:after {
  inset: -17%;
  border-color: #dbffa01f;
}
.section {
  padding: 48px 0;
  border-top: 1px solid #30312b;
}
.section h2 {
  font-size: 31px;
  font-weight: 450;
  line-height: 1.2;
  letter-spacing: -1px;
  margin: 0 0 32px;
  max-width: 460px;
}
.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.services h3 {
  font-size: 16px;
  font-weight: 450;
}
.services p,
.copy {
  color: #9fa391;
  line-height: 1.7;
  font-size: 14px;
}
.faq details {
  border-top: 1px solid #30312b;
  padding: 20px 0;
}
.faq summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
}
.faq summary:after {
  content: '+';
  color: #9ea58f;
}
.faq details[open] summary:after {
  content: '−';
}
.faq details p {
  max-width: 570px;
  color: #939889;
  font-size: 13px;
  line-height: 1.7;
}
.cta {
  background: #c9fd58;
  color: #17200a;
  padding: 35px;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px 0 40px;
}
.cta .eyebrow {
  color: #4b5b31;
}
.cta h2 {
  font-size: clamp(30px, 4vw, 56px);
  font-weight: 450;
  letter-spacing: -2px;
  line-height: 1.03;
  margin: 20px 0;
}
.cta a {
  align-self: flex-start;
  border-bottom: 1px solid #1a250d;
  padding-bottom: 7px;
  font-size: 13px;
}
.footer {
  border-top: 1px solid #30312b;
  padding: 30px 0 20px;
}
.footer-word {
  font-size: clamp(60px, 9.7vw, 156px);
  font-weight: 500;
  letter-spacing: -0.085em;
  line-height: 1.1;
  margin-left: -5px;
}
.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  font-size: 10px;
  color: #828977;
  margin-top: 35px;
  padding-bottom: 4px;
}
.footer-row a:hover {
  color: #c9fd58;
}
.page {
  max-width: 1500px;
  margin: auto;
  padding: 60px 26px 0;
}
.page-title {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 30px 0 65px;
  align-items: end;
}
.page-title h1 {
  font-size: clamp(60px, 10vw, 145px);
  line-height: 0.95;
  font-weight: 450;
  letter-spacing: -0.065em;
  margin: 0;
}
.page-title .eyebrow {
  font-size: 10px;
  letter-spacing: 1.3px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.page-title p {
  font-size: 25px;
  line-height: 1.25;
  letter-spacing: -0.7px;
  max-width: 430px;
  margin: 0;
}
.case-hero {
  width: 100%;
  height: auto;
  aspect-ratio: 1.9;
  object-fit: cover;
  display: block;
}
.case-overview {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 90px;
  padding: 80px 0;
}
.case-overview h2 {
  font-size: 32px;
  font-weight: 450;
  letter-spacing: -1px;
  line-height: 1.2;
  max-width: 400px;
  margin: 20px 0;
}
.case-overview p {
  color: #a2a794;
  line-height: 1.8;
  max-width: 590px;
}
.deliverables {
  list-style: none;
  padding: 0;
  margin: 35px 0 0;
}
.deliverables li {
  border-top: 1px solid #34382d;
  padding: 13px 0;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.case-system {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 60px;
}
.specimen {
  padding: 40px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.specimen strong {
  font-size: clamp(60px, 8vw, 130px);
  line-height: 0.85;
  letter-spacing: -8px;
  font-weight: 500;
}
.specimen .meta {
  color: inherit;
}
.specimen.alphabet {
  background: #e9eadf;
  color: #22251a;
}
.specimen.alphabet strong {
  font-size: clamp(50px, 6vw, 90px);
  letter-spacing: -5px;
  line-height: 1.15;
}
.study-screen {
  background: #22261c;
  padding: 6%;
  margin-bottom: 70px;
}
.mock-browser {
  background: #f7f8ef;
  color: #20251a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 35px 70px #0005;
}
.browser-bar {
  display: flex;
  gap: 5px;
  border-bottom: 1px solid #dce1d1;
  padding: 13px 18px;
}
.browser-bar i {
  width: 5px;
  height: 5px;
  background: #b8c0ac;
  border-radius: 50%;
}
.mock-nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 27px;
  font-size: 12px;
}
.mock-inner {
  padding: 40px 28px 65px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  align-items: center;
}
.mock-inner h3 {
  font-size: clamp(26px, 4.6vw, 70px);
  line-height: 1.04;
  letter-spacing: -2px;
  font-weight: 450;
  margin: 0 0 20px;
}
.mock-inner p {
  font-size: 13px;
  max-width: 290px;
  color: #737c68;
}
.mock-orbit {
  aspect-ratio: 1;
  border: 1px solid #9aaa82;
  border-radius: 50%;
  position: relative;
  transform: rotate(-30deg);
}
.mock-orbit:after,
.mock-orbit:before {
  content: '';
  position: absolute;
  inset: 20%;
  border: 1px solid #8fa36e;
  border-radius: 50%;
}
.mock-orbit:after {
  inset: 40%;
  background: #b0d86a;
}
.next {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 65px;
  border-top: 1px solid #30312b;
}
.next strong {
  font-size: 60px;
  font-weight: 450;
  letter-spacing: -3px;
}
.studio-hero {
  font-size: clamp(48px, 7vw, 110px);
  line-height: 1.04;
  letter-spacing: -0.05em;
  max-width: 1150px;
  font-weight: 450;
  margin: 50px 0 65px;
}
.studio-hero span {
  color: #c9fd58;
}
.studio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  border-top: 1px solid #34382d;
  padding: 50px 0 70px;
}
.studio-grid h2 {
  font-size: 32px;
  font-weight: 450;
  letter-spacing: -1px;
  max-width: 420px;
  margin-top: 0;
}
.process {
  counter-reset: step;
}
.process article {
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  gap: 30px;
  padding: 36px 0;
  border-top: 1px solid #34382d;
}
.process article:before {
  counter-increment: step;
  content: '0' counter(step);
  color: #8b967c;
  font-size: 12px;
}
.process h3 {
  font-weight: 450;
  font-size: 27px;
  letter-spacing: -1px;
  margin: 0;
}
.process p {
  margin: 0;
  color: #9fa391;
  line-height: 1.7;
  max-width: 510px;
}
.brief-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  margin: 65px 0;
}
.brief-layout h1 {
  font-size: clamp(55px, 6.5vw, 100px);
  line-height: 1;
  letter-spacing: -4px;
  font-weight: 450;
  margin: 22px 0;
}
.brief-layout aside p {
  max-width: 350px;
  color: #9fa391;
  line-height: 1.7;
}
.form {
  max-width: 650px;
}
.form label,
.form legend {
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
  color: #c9cdbf;
}
.form input,
.form textarea,
.form select {
  display: block;
  width: 100%;
  border: 1px solid #3a4032;
  background: #171b12;
  padding: 16px;
  color: #f1f4e9;
  margin-top: 10px;
  margin-bottom: 27px;
  border-radius: 0;
}
.form textarea {
  resize: vertical;
}
.form fieldset {
  border: 0;
  padding: 0;
  margin: 25px 0;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.chips label {
  position: relative;
}
.chips input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}
.chips span {
  display: block;
  border: 1px solid #3a4032;
  padding: 10px 16px;
  cursor: pointer;
}
.chips input:checked + span {
  background: #c9fd58;
  color: #192010;
  border-color: #c9fd58;
}
.chips input:focus-visible + span {
  outline: 2px solid #c9fd58;
  outline-offset: 4px;
}
.form-note {
  font-size: 11px;
  color: #969d89;
  line-height: 1.6;
  margin-top: 20px;
}
.result {
  padding: 30px;
  border: 1px solid #c9fd58;
  background: #181f0f;
  max-width: 650px;
}
.result pre {
  font:
    14px/1.8 Geist,
    sans-serif;
  white-space: pre-wrap;
}
.result button {
  margin-top: 15px;
}
.hidden,
[hidden] {
  display: none !important;
}
.reveal {
  animation: appear 0.65s ease-out both;
}
@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (min-width: 1600px) {
  .rail {
    padding: 32px;
  }
  .content {
    padding: 32px 32px 0;
  }
}
@media (max-width: 900px) {
  .header {
    height: 64px;
    padding: 0 18px;
  }
  .nav {
    gap: 20px;
  }
  .shell {
    grid-template-columns: 1fr;
  }
  .rail {
    position: relative;
    top: 0;
    height: auto;
    min-height: 510px;
    border-right: 0;
    border-bottom: 1px solid #30312b;
    padding: 25px 20px;
  }
  .rail h1 {
    font-size: 38px;
    max-width: 520px;
    margin: 30px 0 20px;
  }
  .rail .intro {
    max-width: 430px;
  }
  .rail-bottom {
    margin-top: 45px;
    max-width: 500px;
  }
  .ticker {
    margin: 20px 0;
  }
  .content {
    padding: 28px 20px 0;
  }
  .project-caption .meta {
    font-size: 9px;
  }
  .footer-word {
    font-size: 17vw;
  }
  .case-overview {
    gap: 35px;
    padding: 40px 0;
  }
  .page {
    padding: 35px 20px 0;
  }
  .page-title {
    gap: 30px;
    margin-bottom: 40px;
  }
  .page-title p {
    font-size: 21px;
  }
  .brief-layout {
    gap: 40px;
  }
  .specimen {
    min-height: 300px;
    padding: 24px;
  }
  .case-system {
    gap: 14px;
  }
  .process article {
    grid-template-columns: 40px 1fr 1.4fr;
    gap: 20px;
  }
}
@media (max-width: 580px) {
  .logo {
    font-size: 21px;
  }
  .menu {
    display: block;
  }
  .nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    padding: 22px;
    background: #171b12;
    flex-direction: column;
    align-items: stretch;
    border-bottom: 1px solid #34382d;
  }
  .nav.open {
    display: flex;
  }
  .nav .contact {
    justify-content: space-between;
  }
  .rail h1 {
    font-size: 31px;
    letter-spacing: -1.2px;
    margin-top: 27px;
  }
  .rail {
    min-height: 530px;
    padding: 24px 18px;
  }
  .content {
    padding: 22px 18px 0;
  }
  .rail-bottom {
    margin-top: 33px;
  }
  .visual {
    aspect-ratio: 1.3;
  }
  .project-caption {
    flex-wrap: wrap;
    gap: 9px;
  }
  .project-caption .meta {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-top: 5px;
  }
  .project-caption h2 {
    font-size: 24px;
  }
  .project {
    margin-bottom: 35px;
  }
  .services {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .section {
    padding: 33px 0;
  }
  .section h2 {
    font-size: 29px;
  }
  .cta {
    padding: 25px;
    min-height: 245px;
  }
  .cta h2 {
    font-size: 41px;
  }
  .footer-row {
    flex-wrap: wrap;
  }
  .footer-row span:first-child {
    width: 100%;
  }
  .page-title {
    grid-template-columns: 1fr;
    gap: 28px;
    margin: 30px 0;
  }
  .page-title h1 {
    font-size: 79px;
  }
  .case-hero {
    aspect-ratio: 1.2;
  }
  .case-overview,
  .studio-grid,
  .brief-layout {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .case-system {
    grid-template-columns: 1fr;
  }
  .specimen {
    min-height: 330px;
  }
  .specimen strong {
    font-size: 95px;
  }
  .specimen.alphabet strong {
    font-size: 65px;
  }
  .mock-inner {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .mock-inner h3 {
    font-size: 37px;
  }
  .mock-orbit {
    width: 65%;
    margin: 10px auto;
  }
  .mock-nav {
    font-size: 10px;
    padding: 15px;
  }
  .next strong {
    font-size: 44px;
  }
  .studio-hero {
    font-size: 53px;
  }
  .process article {
    grid-template-columns: 30px 1fr;
  }
  .process article p {
    grid-column: 2;
  }
  .brief-layout {
    margin: 20px 0 45px;
  }
  .brief-layout h1 {
    font-size: 70px;
  }
  .project .open-label {
    width: 34px;
    height: 34px;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *:before,
  *:after {
    animation: none !important;
    transition: none !important;
  }
  html {
    scroll-behavior: auto;
  }
}

.visual:hover .orbit-motion,
.visual:focus-visible .orbit-motion {
  transform: translate(-50%, -50%) scale(1.13);
  opacity: 0.5;
}

```

## Reference interaction handler

```javascript
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.nav').classList.toggle('open', !expanded);
  menu.textContent = expanded ? 'Menu +' : 'Close −';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true')
    menu.click();
});
const form = document.querySelector('#brief-form');
let brief = '';
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const field = (key) => {
    const value = data.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };
  brief = `SEQUENCE — PROJECT BRIEF\n\nName: ${field('name')}\nEmail: ${field('email')}\nCompany: ${field('company') || 'Not supplied'}\nScope: ${
    data
      .getAll('scope')
      .filter((value) => typeof value === 'string')
      .join(', ') || 'To be defined'
  }\nTimeline: ${field('timeline')}\n\nProject context\n${field('context')}\n\nThis is a local, unsent brief for a fictional studio.`;
  document.querySelector('#brief-text').textContent = brief;
  form.hidden = true;
  const result = document.querySelector('#brief-result');
  result.hidden = false;
  result.focus();
});
document.querySelector('#edit-brief')?.addEventListener('click', () => {
  document.querySelector('#brief-result').hidden = true;
  form.hidden = false;
  form.querySelector('input').focus();
});
document.querySelector('#download-brief')?.addEventListener('click', () => {
  const blob = new Blob([brief], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sequence-project-brief.txt';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.querySelector('#copy-brief')?.addEventListener('click', async () => {
  const output = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(brief);
    output.textContent = 'Brief copied.';
  } catch {
    output.textContent =
      'Copy is unavailable in this browser. Download the brief instead.';
  }
});

```
