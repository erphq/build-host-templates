# Index Studio: an independent design practice

Build a substantial, original creative portfolio called Index Studio. This is a complete website for a fictional independent design practice, with an expressive home page, a browsable work archive, four detailed case studies, an editorial information page, and a working inquiry flow that incorporates a visitor’s selected projects. The site should convey a point of view through the relationship between typography, artwork, and layout. It must not feel like a generic services template with a few attractive images added afterward. The portfolio work is the substance, and the interface should make that substance easy and enjoyable to explore.

The central idea is an index of different creative worlds. Index Studio pays close attention to culture, everyday rituals, publishing, and useful objects. Its own identity is clear and relatively neutral: warm ivory, dark olive, acid yellow, direct sans-serif typography, and a huge INDEX masthead. Each project then gets a genuinely different visual system. The visitor should feel that the studio has range without feeling that the website changes its identity every time another project appears. Use repeated structure to create continuity and original imagery to create variety.

## Research foundation and observed reference

The reference was discovered through https://minimal.gallery/. The actual studio inspected was https://boc.studio/, followed by its live archive at https://boc.studio/work. The reference was selected because its archive behaves like a collection of moving contact sheets. Instead of presenting one isolated hero picture for each project, it exposes many applications together. The images make a case for the breadth of each identity before the visitor even opens the detailed project. This is a distinct pattern from a conventional two-column project grid or a persistent introduction beside single large images.

The reference landing state uses a full-screen visual reel with an orange horizontal strip across its center. That strip repeats the studio identity and a compact description. The imagery changes behind it. It feels more like the beginning of an exhibition than a standard agency headline. This should inform the ambition of the Index Studio introduction, but it should not be copied literally. Index Studio replaces the automatic reel with an original arranged wall of three project artifacts, with deliberate angles, depth, and user-triggered movement. The result is visually rich on first paint and does not require a visitor to sit through an entrance sequence.

At the observed desktop viewport of 1471 by 903, Boc Studio’s work archive has a narrow orange utility header roughly 38 pixels high. Its logo sits at the far left, an information control sits near the first quarter of the viewport, and a local-time status sits at the right. The main work navigation occupies approximately the first quarter of the page. The project strips occupy the remaining width. Image tiles in the first visible strip were approximately 335.6 pixels wide and 188.8 pixels high, with roughly 15-pixel gaps. The first strip began at y=53. These are direct browser measurements from the rendered page, rather than guessed CSS values.

The reference archive has a dark charcoal background. Its row captions put the project name at the left, a short positioning line near the middle, and a View project link at the right. The rows are dense, with a restrained amount of vertical space. Three to four rows can be understood in a typical desktop viewport. Project strips visibly move horizontally and show different applications over time. The exact motion duration and easing were not established. Do not claim an exact reference timing. Index Studio should retain the idea of an expansive project contact sheet, but use explicit controls on small screens and ordinary image links rather than inaccessible perpetual movement.

The Filter control was opened live. It revealed categories including Art direction, Brand identity, Campaign, Motion, Strategy, Creative direction, Artificial intelligence, and Generative systems. Opening the control changed its plus sign to a minus and exposed a vertically arranged category list. The category text is large relative to ordinary metadata, while the rest of the interface remains compact. Index Studio adapts this into a clear horizontal set of discipline buttons above the archive, using native buttons with pressed states and a live result count. The actual categories must match the four original project records.

The reference’s interface typography is PP Mori. An inspected small heading used 600 weight at 13 pixels with a 16-pixel line height. That font is not copied or downloaded for this implementation. Use the already licensed local Geist family as an appropriate neutral substitute. Treat the reference as evidence for hierarchy, density, and the image-to-interface relationship. Do not reuse reference artwork, client names, promotional claims, logos, photography, videos, or exact wording. The original studio and all project identities must be independently constructed.

## Original composition and hierarchy

The home page begins with a sticky acid-yellow utility header, 47 pixels high on desktop. The left side contains the small Index Studio wordmark. The right side contains Work, Information, Your selection with a small numerical count, and Let’s talk. The header must remain compact and useful; it is not a giant navigation bar or a floating rounded capsule. A fine bottom rule provides separation. At mobile sizes it grows slightly to 49 pixels and uses tighter spacing. Essential work, selection, and inquiry navigation should remain available without requiring an unexplained icon.

Below the utility bar, create the oversized INDEX masthead on an ivory background. The word should occupy approximately twenty-one percent of the viewport width per font-size unit, producing a headline around 300 pixels at a large desktop width. Use a tight line height near 0.76 and negative letter spacing, with careful left-edge compensation so the optical edge aligns with the page margin. The word is not the studio’s full logo repeated at enormous size. It is an editorial title introducing the collection. A small, three-line studio description sits at the lower right, aligned to the bottom of the masthead area.

The first visual composition is a broad artifact wall inside 24-pixel page margins. Use a muted warm-gray backdrop, a faint change in light, and three original pieces of project artwork. The left item is an electric-blue After Hours poster with chartreuse lettering. The middle is the Daily Bread paper bag and label concept. The right is an Open Water magazine cover. They should feel like artifacts placed together, not three identical dashboard cards. Each has a different slight rotation and vertical offset, and a soft physical shadow. The center piece may overlap the visual hierarchy slightly, but all three remain recognizable and individually clickable.

Make the artifact wall between approximately 420 and 690 pixels tall on desktop, depending on viewport width. Use three columns with slightly different fractions rather than equal thirds. The artworks should have a tall portrait-like presentation inside the wall, cropping their source compositions carefully. On hover or keyboard focus, straighten and lift the selected artifact with a smooth 600-millisecond transition. The motion is directly connected to the visitor’s interaction and stops when the state settles. There is no automatic infinite animation, no forced intro, and no full-screen overlay blocking the content.

Under the wall, place a compact caption row. The left explains the relationship between the projects, and the right links to the work index below. Then add a substantial introduction band with a small descriptor in the left third and a larger three-line statement in the right two thirds. The statement should explain that the studio makes identities that belong in the world and give people a reason to look twice. It should be around 60 pixels on a large desktop, with medium-light weight, tight tracking, and a 1.13 line height. This is a place for a clear thought, not a paragraph of generic positioning language.

## The work archive

The archive changes the page background to deep olive-charcoal, with warm pale text and muted sage supporting copy. Give it 24-pixel outer padding. Start with a heading, The work index, and a small count of four. Place filter buttons opposite the title on desktop. The four filters are All, Culture, Food & drink, and Lifestyle. All begins pressed. A small line below the toolbar reports Showing 4 of 4 projects, and a short instruction explains that projects can be selected as references for an inquiry. This instruction makes the selection behavior discoverable before the visitor encounters the first button.

Each project row begins with a small two-digit index, a clear project title, a short subtitle, and a Select button. The title is approximately 31 pixels at a desktop width. The subtitle is quieter and should not compete with the project name. The Select button is a real button with aria-pressed, and its label changes to Selected when active. Do not make the whole row a button because the images and project title are links to a different action. Maintain a clean distinction between exploring the case study and selecting it as a reference.

Below the row heading, show three original image panels side by side. They should occupy the full row width with only a 12-pixel gap. Each panel has a four-to-three source ratio. Avoid rounded corners and avoid nested frames. The images are already designed as compositions and should not be surrounded by an additional padded card. On image hover, scale the artwork very slightly over 600 milliseconds and reveal a small View study label in the lower-right corner. The entire image is a semantic link with an accessible name that identifies the project and the type of image.

The row footer contains the project disciplines, year, and a View project link. On narrow screens it also contains Previous image and Next image buttons for that project’s strip. The strip changes from a three-column grid into a horizontal scrolling track with native scroll snapping. Each item occupies roughly 85 percent of the available width so the next image is visibly suggested. Controls scroll by one approximate panel width and respect reduced-motion preferences. A visitor can also swipe or scroll naturally. Do not intercept ordinary vertical scrolling or require a drag gesture that keyboard users cannot perform.

Filtering should hide entire project rows without destroying their state. Selecting Culture shows After Hours only. Selecting Food & drink shows Daily Bread only. Selecting Lifestyle shows Open Water and Common Form. Selecting All restores every row. Pressed states and the result count update immediately, and a polite status message communicates the result. The filter should not reload the page or send a network request. Because all project content is present in the static document, navigation remains useful even if JavaScript is unavailable; filtering is an enhancement to a complete archive.

## The four original project systems

After Hours is a self-initiated identity for a late-night arts programme. Its message is Culture doesn’t keep office hours. Use a chartreuse and electric-blue palette, oversized direct sans-serif type, and a pair of parentheses that act as a flexible frame for unexpected content. Its three panels are an identity composition with an enormous bracketed wordmark, a rotated blue poster reading Come as you aren’t, and an admission ticket with an abstract barcode treatment. The project is about a flexible cultural programme, so the applications should demonstrate change within a recognizable system.

Daily Bread is a fictional neighborhood bakery. Its message is The good in the everyday. The visual identity uses warm vermilion, cream paper, a generous serif, and an original wheat illustration. Its first panel is a paper bag with a red label and hand-crafted-feeling botanical mark. Its second is a broad red identity poster that combines the wordmark, a small thought about flour and time, and the wheat symbol. Its third is a rotated morning menu with a clear ruled structure and a short list of bakery items. The prices in that artwork are illustration content, not a functional commerce experience.

Open Water is an original journal about swimming and coastal culture. Its message is A different kind of current. Use strong blue, pale chalk, flowing lines, and large headline lettering. The first panel is a bold identity field with a wave-like path cutting behind the type. The second is a physical magazine cover with an illustrated sea, a restrained serif masthead, and a headline about a slower day. The third is a graphic poster using many related flowing contour lines. These images should communicate movement through form, while remaining static, lightweight SVG assets.

Common Form is a fictional home-object collection. Its message is Objects with a point of view. Use olive, sage, warm paper, and a modular sans-serif identity. The first image shows an original ceramic cup study with a dimensional handle, highlights, and a ground shadow. The second shows a simple folded shipping box with a cream product label and clear object information. The third is a typographic poster with overlapping rounded geometric forms. It should feel useful and considered without borrowing any recognizable designer product or luxury-house identity.

Every artwork must be original and local. Build the visual assets in SVG so that geometric and typographic decisions remain precise and reproducible. Gradients and shadows may be used within object illustrations to communicate material. Keep the website interface itself flat and restrained. All project names are fictional concepts, and no decorative registered-trademark symbols should appear. The credits file should say that these are self-initiated studies and should distinguish original artwork from the licensed font. Produce a raster hero.webp for the parent collection preview in addition to the live SVG assets.

## Detailed case-study pages

Each project gets its own complete page. Begin with the shared utility header and a small Back to the index link. Follow with a very large project title, a short subtitle, discipline and year metadata, and the same selection control used in the archive. Selection state must synchronize across the home page, case studies, and inquiry page through session storage. The project title can be much larger than archive captions because the visitor has intentionally entered a single creative world. Preserve comfortable margins and avoid squeezing the title onto one line if the viewport cannot support it.

The case-study hero is a wide presentation of the project’s primary identity image. Use a natural image height and an explicit aspect ratio so HTML dimension attributes do not accidentally force an oversized fixed-height element. Below it, create a two-column context section. The left contains a numbered label, the central design principle, and a list of four deliverables. The right contains a meaningful project brief and a description of the design response. Explain why the palette, symbol, typography, and application choices belong together. Do not replace reasoning with invented awards, client quotes, or performance statistics.

After the context, show the two secondary artworks as a generous paired gallery. Each figure has a small descriptive caption. On mobile, these become a single column. Follow them with a two-part typography and identity specimen. One part uses the project accent color, a large project name, and its central principle. The other is a neutral alphabet and numeral specimen. This makes the project feel like a system instead of a collection of isolated pictures. The specimen type can be oversized, but all explanatory body text must remain conventionally readable.

End the case study with a further explanation of how the system works across contexts and a direct inquiry link. Then provide a large Next in the index link that moves to the next project. The four projects should connect cyclically so browsing can continue naturally. The page closes with the shared yellow inquiry invitation and the small footer. Every linked project route must be generated. Do not create empty detail pages, fake external project launches, or links that point to an unrelated original reference website.

## Information page

The information page should be a substantial editorial explanation of the practice. Begin with three large lines: Curious by nature, Clear by design, Independent in spirit. The final line may use italic Georgia to create a human counterpoint to Geist. This is a typography decision within the original identity, not a different page theme. Follow with a split introduction that explains the fictional studio, its self-initiated body of work, and its interest in the details of everyday life. The writing should feel specific to the projects displayed in the portfolio.

Use two original artwork panels as a visual bridge between the introductory text and the studio principles. The principles section returns to the dark archive background. Its left column contains a small label; its right contains three numbered rows. Each row combines a short title with a paragraph: Start with attention, Find the simple idea, and Make room for character. Explain what each principle changes in a real design process. Avoid a vague list of values that could belong to any business.

Finish with two columns of capabilities, Thinking and Making. Thinking includes positioning, naming and language, creative direction, and research. Making includes identities, packaging and print, digital experiences, and editorial campaigns. Keep these as supporting information after the work and principles. Then repeat the concise inquiry invitation. The information route should remain reachable on mobile through a visible footer link even if the compact utility bar hides that particular navigation item at the narrowest breakpoint.

## Selection and inquiry behavior

The selection system is an important part of this site’s usefulness. It lets a visitor collect relevant projects before writing an inquiry. Store only the known project slugs under a dedicated session-storage key. Treat any stored value as untrusted data: parse defensively, accept an array of strings, and discard slugs that do not match the known project list. If storage is unavailable, keep the current page interaction working and explain the limitation without crashing the interface. No personal form data needs to be stored between sessions.

Each Select button toggles its project slug, updates all matching controls on the page, and updates the count in the header. Use a polite, temporary status message to announce additions and removals. The count should be ordinary text rather than a decorative badge with an inaccessible meaning. The inquiry page lists the selected project names and gives each a clearly labeled Remove button. If the selection is empty, show a helpful link back to the archive. An empty selection is valid and should never prevent someone from preparing an inquiry.

The inquiry page uses a two-column desktop composition. The left contains a large question, a short explanation, the selected references, and a clear statement that this is a fictional studio and the draft remains local. The right contains a real form. Required fields are name, email, project or organization, and context. Context must contain at least twenty characters. Include native selects for the area of interest and timing. Every input needs a visible label, sensible maximum length, and appropriate autocomplete. Use native browser validation rather than replacing it with incomplete custom validation.

On submission, create a plain-text inquiry draft containing the entered values and current selected project names. Render the user’s input with textContent, never HTML interpolation. Hide the form, reveal a result panel, and move focus to that panel. The result offers Download draft, Copy draft, and Edit details. Preparing the result should create a Blob URL and assign it to a real download anchor with a descriptive filename. Revoke an earlier object URL when generating a replacement draft. The download link must be a genuine browser link rather than a decorative button with no destination.

Copy uses the Clipboard API and reports success or a useful fallback in a polite live region. Editing restores the original form and values and focuses its first field. Neither preparing nor copying a draft should pretend to send a message or create a commercial agreement. Avoid fake progress indicators, fake response-time promises, and claims that someone has received the inquiry. The output is useful because it is a concrete, reviewable draft that the visitor controls.

## Responsive, motion, and accessibility requirements

At approximately 1000 pixels, reduce the archive row heading and remove its secondary subtitle from that compact row; the subtitle still appears on the case-study page. At 700 pixels, stack the masthead description, introduction band, manifesto, case context, and inquiry columns. Change the archive to horizontally scrollable image strips. At very narrow phone widths, retain the essential utility links and allow secondary information to be reached through the footer. Use 16-pixel mobile page margins and avoid any intrinsic-width element that can force the document wider than the viewport.

Motion is meaningful and bounded. The artifact wall responds to hover and focus. Project images gently scale and reveal a study label. Mobile strip buttons scroll their own track. A short page-title arrival may run once and finish within 600 milliseconds. There are no infinite marquees, constantly moving logos, autoplay reels, or background loops that would require a pause control. With prefers-reduced-motion enabled, disable animation and transitions and use immediate scrolling. All information and all actions must remain available in the static state.

Use semantic links for navigation and buttons for state changes. Include a skip link and a single main landmark. Preserve visible keyboard focus. Use actual labels and native form controls. Do not place aria-label on a generic decorative container that does not support it. Grouping semantics should describe a real group, such as the project filters, rather than being added only to silence a validator. Meaningful images need accurate alt text, and purely decorative arrows should not create redundant announcements. Test both appearance and keyboard behavior.

## Build contract and verification

The builder is exported as buildIndexStudio and returns an object containing prompt. Source belongs in scripts/index-studio, generated pages and assets in public/demos/index-studio, and the distributed prompt in public/prompts/index-studio.md. The complete prompt includes this substantive design brief, the exact project records, responsive styles, and actual JavaScript under the heading Reference interaction handler. Keep the work isolated from shared catalogs, validators, application routes, and other demo source directories. The parent task owns integration.

Generate at least seven complete pages: home, information, inquiry, and the four case studies. Deliver twelve original SVG artworks, a raster hero preview, a local font, its license, and clear credits. Verify the build return shape, page count, prompt length, and all local asset and navigation references. Use the root localhost server for browser inspection rather than starting another server. Inspect the desktop home composition, filtering, selection state, a case study, and the inquiry draft. Check mobile overflow and strip navigation when viewport access is coordinated with the parent task.

Report only what was actually observed. A click on a download link proves that the control was exercised, not that a file finished downloading. If only Blob preparation and its filename are verified, state that precisely. Likewise, distinguish direct reference measurements from chosen adaptation values. The finished result should be an original, coherent portfolio with enough depth to explore, enough interaction to be useful, and enough visual confidence to stand apart from a template.


## Exact project content

```javascript
export const projects = [
  {
    slug: 'after-hours',
    name: 'After Hours',
    subtitle: 'Culture doesn’t keep office hours.',
    category: 'Culture',
    discipline: 'Identity / Campaign / Digital',
    year: '2026',
    color: '#caff31',
    ink: '#172018',
    number: '01',
    brief:
      'A self-initiated identity for a late-night arts programme. After Hours brings exhibitions, listening sessions, and performances together under one roof. The challenge was to give an eclectic programme a recognisable rhythm without making every event look the same.',
    idea: 'A bracket opens a possibility. We use an oversized pair of parentheses as an invitation: a flexible container for whatever happens next. Acid yellow, electric blue, and an unapologetically direct typographic voice connect posters, tickets, and a digital programme.',
    scope: [
      'Positioning & naming',
      'Flexible visual identity',
      'Event campaign system',
      'Digital programme concept',
    ],
    principle: 'A frame for the unexpected.',
  },
  {
    slug: 'daily-bread',
    name: 'Daily Bread',
    subtitle: 'The good in the everyday.',
    category: 'Food & drink',
    discipline: 'Strategy / Packaging / Identity',
    year: '2026',
    color: '#da4931',
    ink: '#f9e7cf',
    number: '02',
    brief:
      'Daily Bread is an original neighbourhood bakery concept. It needed an identity that could feel familiar on the first visit and quietly distinctive on the hundredth. We explored how ordinary packaging and small rituals can become the most memorable part of a brand.',
    idea: 'A warm red, a generous serif, and a simple wheat illustration bring a human quality to the system. The paper bag, the morning menu, and the bread label all use the same handful of elements. Repetition becomes recognition, without forcing every surface into a logo pattern.',
    scope: [
      'Brand direction',
      'Packaging and labels',
      'Illustration system',
      'Retail touchpoints',
    ],
    principle: 'Make the ordinary worth keeping.',
  },
  {
    slug: 'open-water',
    name: 'Open Water',
    subtitle: 'A different kind of current.',
    category: 'Lifestyle',
    discipline: 'Art direction / Identity / Editorial',
    year: '2025',
    color: '#265ac2',
    ink: '#e3ece7',
    number: '03',
    brief:
      'An independent swim and coastal culture journal concept. Open Water celebrates the feeling of being outside rather than competitive performance. The visual system had to hold personal stories, practical information, and a changing landscape in the same editorial world.',
    idea: 'A flowing line creates a quiet sense of continuity. Deep blue and chalk white anchor the identity, while oversized type makes headlines feel almost physical. The direction moves comfortably between magazine covers, environmental posters, and a simple digital reading experience.',
    scope: [
      'Editorial identity',
      'Cover system',
      'Art direction',
      'Publication website concept',
    ],
    principle: 'Follow your own line.',
  },
  {
    slug: 'common-form',
    name: 'Common Form',
    subtitle: 'Objects with a point of view.',
    category: 'Lifestyle',
    discipline: 'Identity / Packaging / Commerce',
    year: '2025',
    color: '#a8b2a0',
    ink: '#27312b',
    number: '04',
    brief:
      'Common Form explores a small collection of useful home objects. The brief asked for a brand that could make everyday materials feel considered, without turning simple things into status symbols. The result should be warm, practical, and easy to recognise.',
    idea: 'A modular wordmark and a restrained olive palette keep the system grounded. Sculptural object studies bring material and proportion into focus. A concise label language provides useful details, while flexible layouts allow an object to remain the centre of attention.',
    scope: [
      'Visual identity',
      'Object art direction',
      'Packaging concept',
      'Commerce direction',
    ],
    principle: 'Useful. Considered. Yours.',
  },
];

```

## Exact responsive style implementation

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
  background: #f0f0e8;
  color: #24261f;
  font:
    15px/1.5 Geist,
    Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
button,
input,
textarea,
select {
  font: inherit;
}
button,
a {
  -webkit-tap-highlight-color: transparent;
}
button {
  color: inherit;
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
summary:focus-visible {
  outline: 3px solid #315cd0;
  outline-offset: 4px;
}
::selection {
  background: #d8ff40;
  color: #222;
}
.skip {
  position: fixed;
  top: -80px;
  padding: 15px;
  background: #d8ff40;
  z-index: 100;
}
.skip:focus {
  top: 0;
}
.utility {
  height: 47px;
  background: #d8ff40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #282e2225;
  position: sticky;
  top: 0;
  z-index: 30;
}
.logo {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.65px;
}
.logo span {
  font-weight: 400;
}
.nav {
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 12px;
}
.nav a {
  position: relative;
}
.nav a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.nav .saved-count {
  border: 1px solid #28321e;
  min-width: 21px;
  height: 21px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  font-size: 10px;
  margin-left: 5px;
}
.menu-button {
  display: none;
  background: none;
  border: 0;
}
.page-pad {
  padding-left: 24px;
  padding-right: 24px;
}
.masthead {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 38px;
  padding-bottom: 24px;
  gap: 30px;
}
.masthead h1 {
  font-size: clamp(110px, 20.8vw, 340px);
  font-weight: 550;
  letter-spacing: -0.095em;
  line-height: 0.76;
  margin: 0 0 0 -13px;
}
.masthead-note {
  max-width: 235px;
  padding-bottom: 4px;
  font-size: 13px;
  line-height: 1.45;
}
.masthead-note p {
  margin: 0 0 17px;
}
.micro {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.1px;
}
.hero-wall {
  height: clamp(420px, 45vw, 690px);
  position: relative;
  overflow: hidden;
  background: #d9d8cb;
  margin: 0 24px;
  display: grid;
  grid-template-columns: 1.03fr 0.8fr 1fr;
  gap: 14px;
  padding: 34px;
  align-items: center;
}
.hero-wall:before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, #0000 35%, #0001 72%, #fff3);
}
.hero-wall a {
  position: relative;
  display: block;
  box-shadow: 10px 20px 25px #0002;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.hero-wall a:nth-child(1) {
  transform: rotate(-7deg) translateY(12px);
}
.hero-wall a:nth-child(2) {
  transform: rotate(5deg) translateY(-10px);
  z-index: 2;
}
.hero-wall a:nth-child(3) {
  transform: rotate(-3deg) translateY(18px);
}
.hero-wall a:hover,
.hero-wall a:focus-visible {
  transform: rotate(0) translateY(-12px);
  z-index: 4;
}
.hero-wall img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 0.75;
  object-fit: cover;
}
.hero-caption {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 35px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}
.intro-band {
  padding: 58px 24px 85px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 25px;
  border-top: 1px solid #c9ccbe;
}
.intro-band h2 {
  font-size: clamp(30px, 4.1vw, 63px);
  font-weight: 450;
  line-height: 1.13;
  letter-spacing: -2.3px;
  margin: 0;
  max-width: 920px;
}
.intro-band .micro {
  max-width: 180px;
}
.archive {
  background: #202721;
  color: #edf0e5;
  padding: 25px 24px 60px;
}
.archive-tools {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  margin-bottom: 28px;
  padding-bottom: 22px;
  border-bottom: 1px solid #56634d;
}
.archive-tools h2 {
  font-size: 22px;
  font-weight: 450;
  letter-spacing: -0.6px;
  margin: 0;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.filters button {
  background: none;
  border: 1px solid #56634d;
  border-radius: 0;
  padding: 8px 13px;
  font-size: 11px;
  color: #bfc8b6;
}
.filters button[aria-pressed='true'] {
  color: #1f2918;
  background: #d8ff40;
  border-color: #d8ff40;
}
.archive-topline {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #c1cbb8;
  margin-bottom: 32px;
}
.project-row {
  padding-bottom: 36px;
  margin-bottom: 31px;
  border-bottom: 1px solid #56634d;
}
.row-heading {
  display: grid;
  grid-template-columns: 70px 1fr 1fr auto;
  gap: 20px;
  align-items: baseline;
  margin-bottom: 16px;
}
.row-heading h3 {
  font-size: 31px;
  line-height: 1.15;
  font-weight: 450;
  letter-spacing: -1px;
  margin: 0;
}
.row-heading p {
  font-size: 13px;
  color: #bdc6b3;
  margin: 0;
}
.row-heading .number {
  font-size: 12px;
  color: #c7cfbd;
}
.row-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.save {
  border: 1px solid #79836f;
  background: transparent;
  padding: 7px 11px;
  font-size: 11px;
  white-space: nowrap;
}
.save[aria-pressed='true'] {
  background: #d8ff40;
  color: #192110;
  border-color: #d8ff40;
}
.strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.strip a {
  display: block;
  overflow: hidden;
  position: relative;
}
.strip img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.strip a:hover img {
  transform: scale(1.04);
}
.strip a:after {
  content: 'View study ↗';
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: #f0f0e8;
  color: #24261f;
  padding: 8px 11px;
  font-size: 11px;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.strip a:hover:after,
.strip a:focus-visible:after {
  opacity: 1;
  transform: none;
}
.row-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  gap: 20px;
  font-size: 10px;
  color: #bdc6b3;
}
.strip-nav {
  display: none;
  gap: 8px;
}
.strip-nav button {
  border: 1px solid #79836f;
  background: none;
  width: 36px;
  height: 30px;
}
.manifesto {
  padding: 85px 24px 100px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 25px;
}
.manifesto h2 {
  font-size: clamp(36px, 5vw, 78px);
  line-height: 1.06;
  font-weight: 450;
  letter-spacing: -3px;
  margin: 0 0 40px;
  max-width: 900px;
}
.manifesto p {
  max-width: 670px;
  font-size: 17px;
  line-height: 1.6;
  color: #5a6352;
}
.text-link {
  display: inline-block;
  border-bottom: 1px solid;
  padding-bottom: 5px;
  margin-top: 20px;
  font-size: 13px;
}
.inquiry-banner {
  background: #d8ff40;
  padding: 25px 24px 32px;
}
.inquiry-banner .line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.inquiry-banner a {
  font-size: clamp(55px, 10vw, 155px);
  line-height: 1.15;
  font-weight: 450;
  letter-spacing: -0.065em;
}
.inquiry-banner .arrow {
  font-size: clamp(50px, 9vw, 130px);
}
.footer {
  padding: 22px 24px 30px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  font-size: 11px;
}
.footer div {
  display: flex;
  gap: 25px;
}
.footer a:hover {
  text-decoration: underline;
}
.case-title {
  padding: 55px 24px 45px;
}
.back {
  font-size: 11px;
}
.case-title h1 {
  font-size: clamp(70px, 11vw, 180px);
  letter-spacing: -0.065em;
  font-weight: 450;
  line-height: 0.96;
  margin: 55px 0 38px;
}
.case-subline {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
}
.case-subline p {
  font-size: 25px;
  letter-spacing: -0.7px;
  margin: 0;
}
.case-subline .save {
  font-size: 12px;
  border-color: #79836f;
}
.case-subline .meta {
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #59644e;
}
.case-full {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1.75;
  object-fit: cover;
}
.case-summary {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 80px;
  padding: 70px 24px 90px;
}
.case-summary h2 {
  font-weight: 450;
  font-size: 40px;
  line-height: 1.15;
  letter-spacing: -1.6px;
  max-width: 470px;
  margin: 20px 0 35px;
}
.case-summary p {
  font-size: 16px;
  line-height: 1.75;
  color: #5a6352;
  max-width: 620px;
}
.scope {
  list-style: none;
  padding: 0;
  max-width: 470px;
}
.scope li {
  font-size: 12px;
  border-top: 1px solid #bec6b4;
  padding: 10px 0;
}
.case-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 24px;
}
.case-pair img {
  width: 100%;
  height: auto;
  display: block;
}
.case-pair figure {
  margin: 0;
}
.case-pair figcaption {
  font-size: 11px;
  padding-top: 12px;
  color: #5a6352;
}
.type-panel {
  margin: 65px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 410px;
}
.type-panel > div {
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.type-panel strong {
  font-size: clamp(60px, 7vw, 110px);
  font-weight: 450;
  letter-spacing: -5px;
  line-height: 1;
}
.type-panel .sample {
  background: #e2e4d8;
}
.next-project {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 24px 70px;
  border-top: 1px solid #bec6b4;
}
.next-project h2 {
  font-size: clamp(44px, 7vw, 100px);
  line-height: 1;
  font-weight: 450;
  letter-spacing: -3px;
  margin: 15px 0;
}
.studio-intro {
  padding: 60px 24px 80px;
}
.studio-intro h1 {
  font-size: clamp(55px, 7.3vw, 115px);
  font-weight: 450;
  letter-spacing: -0.055em;
  line-height: 1.06;
  max-width: 1200px;
  margin: 50px 0 0;
}
.studio-intro em {
  font-family: Georgia, serif;
  font-weight: 400;
}
.principles {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 35px;
  padding: 60px 24px;
  background: #202721;
  color: #edf0e5;
}
.principles article {
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 25px;
  border-top: 1px solid #64705c;
  padding: 30px 0;
}
.principles h3 {
  font-size: 28px;
  font-weight: 450;
  line-height: 1.15;
  margin: 0;
  letter-spacing: -0.7px;
}
.principles p {
  font-size: 14px;
  color: #bdc6b3;
  line-height: 1.7;
  margin: 0;
}
.capabilities {
  padding: 70px 24px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}
.capability-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.capability-grid h2 {
  font-weight: 450;
  font-size: 30px;
  letter-spacing: -1px;
}
.capability-grid p {
  line-height: 1.9;
  color: #5a6352;
}
.inquiry-layout {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 90px;
  padding: 60px 24px 90px;
}
.inquiry-layout h1 {
  font-size: clamp(65px, 8vw, 115px);
  line-height: 1;
  letter-spacing: -0.055em;
  font-weight: 450;
  margin: 35px 0;
}
.inquiry-layout aside > p {
  font-size: 16px;
  line-height: 1.7;
  max-width: 350px;
  color: #5a6352;
}
.selection-box {
  margin-top: 45px;
  border-top: 1px solid #adb5a2;
  padding: 22px 0;
}
.selection-box h2 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 17px;
}
.selection-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.selection-list li {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 13px;
  padding: 10px 0;
  border-bottom: 1px solid #cbd1c2;
}
.selection-list button {
  border: 0;
  background: transparent;
  font-size: 11px;
  text-decoration: underline;
}
.selection-box p {
  font-size: 12px;
  color: #5a6352;
}
.form label {
  display: block;
  font-size: 12px;
  margin-bottom: 25px;
}
.form input,
.form textarea,
.form select {
  display: block;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #9ba78d;
  background: #e7eadf;
  color: #24261f;
  padding: 15px;
  margin-top: 10px;
  border-radius: 0;
}
.form textarea {
  resize: vertical;
  min-height: 140px;
}
.submit {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border: 1px solid #232c1c;
  background: #232c1c;
  color: #f1f2e8;
  font-size: 13px;
}
.form-note {
  font-size: 11px;
  line-height: 1.65;
  color: #5a6352;
}
.result {
  border: 1px solid #96a580;
  background: #e6edd8;
  padding: 28px;
  min-width: 0;
}
.result h2 {
  font-size: 35px;
  letter-spacing: -1px;
  font-weight: 450;
}
.result pre {
  white-space: pre-wrap;
  font:
    14px/1.8 Geist,
    sans-serif;
}
.result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.result-actions button,
.result-actions a {
  padding: 12px 17px;
  background: #26321d;
  color: #f4f4e9;
  border: 0;
  font-size: 12px;
}
.result output {
  display: block;
  font-size: 12px;
  margin-top: 15px;
}
.status {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #d8ff40;
  color: #213017;
  padding: 12px 20px;
  font-size: 12px;
  z-index: 40;
  box-shadow: 0 3px 20px #0002;
  max-width: 90vw;
}
.status:empty {
  display: none;
}
[hidden] {
  display: none !important;
}
.page-arrive {
  animation: arrive 0.6s ease-out both;
}
@keyframes arrive {
  from {
    opacity: 0.5;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 1000px) {
  .masthead-note {
    max-width: 180px;
    font-size: 12px;
  }
  .hero-wall {
    padding: 25px;
    height: 430px;
  }
  .row-heading {
    grid-template-columns: 40px 1fr auto;
    gap: 14px;
  }
  .row-heading p {
    display: none;
  }
  .row-heading h3 {
    font-size: 27px;
  }
  .principles {
    grid-template-columns: 1fr;
  }
  .inquiry-layout {
    gap: 45px;
  }
  .case-summary {
    gap: 45px;
  }
  .intro-band h2 {
    font-size: 42px;
  }
  .manifesto h2 {
    font-size: 49px;
  }
}
@media (max-width: 700px) {
  .utility {
    height: 49px;
    padding: 0 16px;
  }
  .nav {
    gap: 15px;
    font-size: 11px;
  }
  .masthead {
    padding: 38px 16px 23px;
    display: block;
  }
  .masthead h1 {
    font-size: 27vw;
    margin-left: -5px;
    letter-spacing: -0.09em;
  }
  .masthead-note {
    display: flex;
    max-width: none;
    justify-content: space-between;
    gap: 25px;
    padding-top: 27px;
    font-size: 12px;
  }
  .masthead-note p {
    margin: 0;
    max-width: 260px;
  }
  .masthead-note .micro {
    max-width: 100px;
    font-size: 9px;
  }
  .hero-wall {
    margin: 0 16px;
    height: 340px;
    padding: 18px;
    gap: 7px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .hero-wall img {
    aspect-ratio: 0.52;
  }
  .hero-caption {
    padding: 12px 16px 25px;
    gap: 20px;
    font-size: 9px;
  }
  .intro-band {
    padding: 32px 16px 45px;
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .intro-band h2 {
    font-size: 33px;
    letter-spacing: -1.25px;
  }
  .archive {
    padding: 24px 16px 40px;
  }
  .archive-tools {
    align-items: start;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
  .filters {
    gap: 7px;
  }
  .filters button {
    padding: 8px 10px;
    font-size: 10px;
  }
  .archive-topline {
    font-size: 9px;
  }
  .row-heading {
    grid-template-columns: 27px 1fr auto;
    gap: 10px;
  }
  .row-heading h3 {
    font-size: 24px;
  }
  .save {
    font-size: 10px;
    padding: 7px;
  }
  .strip {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    gap: 10px;
  }
  .strip a {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }
  .strip a:after {
    opacity: 1;
    transform: none;
  }
  .strip-nav {
    display: flex;
  }
  .row-bottom {
    align-items: center;
  }
  .row-bottom .micro {
    font-size: 9px;
    max-width: 200px;
  }
  .manifesto {
    padding: 45px 16px;
    grid-template-columns: 1fr;
    gap: 27px;
  }
  .manifesto h2 {
    font-size: 40px;
    letter-spacing: -1.7px;
    margin-bottom: 25px;
  }
  .manifesto p {
    font-size: 15px;
  }
  .inquiry-banner {
    padding: 23px 16px;
  }
  .inquiry-banner a {
    font-size: 13vw;
  }
  .footer {
    padding: 20px 16px;
    flex-direction: column;
    gap: 15px;
  }
  .footer div {
    gap: 20px;
    flex-wrap: wrap;
  }
  .case-title {
    padding: 30px 16px;
  }
  .case-title h1 {
    font-size: 17vw;
    margin-top: 45px;
  }
  .case-subline {
    flex-wrap: wrap;
    gap: 20px;
  }
  .case-subline p {
    font-size: 21px;
    max-width: 230px;
  }
  .case-subline .meta {
    width: 100%;
    font-size: 10px;
  }
  .case-full {
    aspect-ratio: 1.2;
  }
  .case-summary {
    grid-template-columns: 1fr;
    padding: 40px 16px;
    gap: 15px;
  }
  .case-summary h2 {
    font-size: 34px;
  }
  .case-summary p {
    font-size: 15px;
  }
  .case-pair {
    padding: 0 16px;
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .type-panel {
    margin: 40px 16px;
    grid-template-columns: 1fr;
  }
  .type-panel > div {
    min-height: 300px;
    padding: 25px;
  }
  .type-panel strong {
    font-size: 65px;
    letter-spacing: -3px;
  }
  .next-project {
    padding: 35px 16px 45px;
  }
  .next-project h2 {
    font-size: 45px;
  }
  .studio-intro {
    padding: 35px 16px 45px;
  }
  .studio-intro h1 {
    font-size: 52px;
    margin-top: 35px;
  }
  .principles {
    padding: 35px 16px;
    gap: 25px;
  }
  .principles article {
    grid-template-columns: 30px 1fr;
    gap: 15px;
  }
  .principles p {
    grid-column: 2;
  }
  .capabilities {
    padding: 40px 16px;
    grid-template-columns: 1fr;
  }
  .capability-grid {
    gap: 25px;
  }
  .inquiry-layout {
    grid-template-columns: 1fr;
    padding: 35px 16px 55px;
    gap: 35px;
  }
  .inquiry-layout h1 {
    font-size: 74px;
    margin: 25px 0;
  }
  .selection-box {
    margin-top: 30px;
  }
  .form-note {
    font-size: 12px;
  }
}
@media (max-width: 440px) {
  .nav {
    gap: 12px;
  }
  .nav a:nth-child(2) {
    display: none;
  }
  .hero-wall {
    height: 280px;
  }
  .hero-wall a:nth-child(2) {
    transform: rotate(5deg) translateY(-5px);
  }
  .row-actions {
    gap: 8px;
  }
  .masthead-note p {
    max-width: 215px;
  }
  .footer {
    font-size: 10px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *:before,
  *:after {
    animation: none !important;
    transition: none !important;
  }
}

@media (max-width: 700px) {
  .intro-band h2 br {
    display: none;
  }
}

```

## Reference interaction handler

```javascript
const STORAGE_KEY = 'index-studio-selection';
function readSelection() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]').filter(
      (x) => typeof x === 'string',
    );
  } catch {
    return [];
  }
}
let selection = readSelection();
const titles = {
  'after-hours': 'After Hours',
  'daily-bread': 'Daily Bread',
  'open-water': 'Open Water',
  'common-form': 'Common Form',
};
selection = selection.filter((slug) => Object.hasOwn(titles, slug));
let statusTimer;
function announce(message) {
  const output = document.querySelector('#status');
  if (!output) return;
  output.textContent = message;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => (output.textContent = ''), 2800);
}
function renderSelection() {
  document
    .querySelectorAll('.saved-count')
    .forEach((el) => (el.textContent = String(selection.length)));
  document.querySelectorAll('[data-save]').forEach((button) => {
    const selected = selection.includes(button.dataset.save);
    button.setAttribute('aria-pressed', String(selected));
    button.textContent = selected ? 'Selected −' : 'Select +';
    button.setAttribute(
      'aria-label',
      `${selected ? 'Selected' : 'Select'} ${titles[button.dataset.save]} as a project reference`,
    );
  });
  const list = document.querySelector('#selection-list');
  if (list) {
    list.replaceChildren();
    for (const slug of selection) {
      const li = document.createElement('li');
      const text = document.createElement('span');
      text.textContent = titles[slug];
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'Remove';
      button.setAttribute(
        'aria-label',
        `Remove ${titles[slug]} from selection`,
      );
      button.addEventListener('click', () => toggleSelection(slug));
      li.append(text, button);
      list.append(li);
    }
    document.querySelector('#selection-empty').hidden = selection.length > 0;
  }
}
function toggleSelection(slug) {
  selection = selection.includes(slug)
    ? selection.filter((x) => x !== slug)
    : [...selection, slug];
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  } catch {
    announce('Selection works on this page; browser storage is unavailable.');
  }
  renderSelection();
  announce(
    `${titles[slug]} ${selection.includes(slug) ? 'added to' : 'removed from'} your selection.`,
  );
}
document
  .querySelectorAll('[data-save]')
  .forEach((button) =>
    button.addEventListener('click', () =>
      toggleSelection(button.dataset.save),
    ),
  );
renderSelection();
document.querySelectorAll('[data-filter]').forEach((button) =>
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document
      .querySelectorAll('[data-filter]')
      .forEach((other) =>
        other.setAttribute('aria-pressed', String(other === button)),
      );
    let count = 0;
    document.querySelectorAll('[data-category]').forEach((row) => {
      row.hidden = category !== 'All' && row.dataset.category !== category;
      if (!row.hidden) count++;
    });
    document.querySelector('#filter-count').textContent =
      `Showing ${count} of 4 projects`;
    announce(
      `${category}: ${count} ${count === 1 ? 'project' : 'projects'} shown.`,
    );
  }),
);
document.querySelectorAll('[data-strip-direction]').forEach((button) =>
  button.addEventListener('click', () => {
    const strip = document.getElementById(button.getAttribute('aria-controls'));
    strip.scrollBy({
      left: strip.clientWidth * 0.85 * Number(button.dataset.stripDirection),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }),
);
let draftUrl;
const form = document.querySelector('#inquiry-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const field = (key) => {
    const value = data.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };
  const draft = `INDEX STUDIO — INQUIRY DRAFT\n\nName: ${field('name')}\nEmail: ${field('email')}\nProject: ${field('project')}\nInterest: ${field('scope')}\nTiming: ${field('timing')}\n\nSelected references\n${selection.map((x) => titles[x]).join('\n') || 'No projects selected'}\n\nContext\n${field('context')}\n\nThis draft is local and unsent. Index Studio is a fictional design practice.`;
  document.querySelector('#draft-text').textContent = draft;
  if (draftUrl) URL.revokeObjectURL(draftUrl);
  draftUrl = URL.createObjectURL(new Blob([draft], { type: 'text/plain' }));
  document.querySelector('#download-draft').href = draftUrl;
  form.hidden = true;
  const result = document.querySelector('#inquiry-result');
  result.hidden = false;
  result.focus();
});
document.querySelector('#edit-draft')?.addEventListener('click', () => {
  document.querySelector('#inquiry-result').hidden = true;
  form.hidden = false;
  form.querySelector('input').focus();
});
document.querySelector('#copy-draft')?.addEventListener('click', async () => {
  const output = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(
      document.querySelector('#draft-text').textContent,
    );
    output.textContent = 'Draft copied.';
  } catch {
    output.textContent =
      'Copy is unavailable here. Use Download draft instead.';
  }
});

```
