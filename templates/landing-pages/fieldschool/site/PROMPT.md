# Fieldschool — learn by making something

Build Fieldschool as a complete, original six-page creative learning website. The result must combine a considered course storefront with three usable browser exercises and a persistent personal notebook. A visitor should move from a useful question to a concrete experiment without encountering an account wall, a fake video player, an unavailable course, or an action that merely opens a decorative modal. The site teaches introductory relationships in color, typography and layout. Its ambition is a small, coherent learning experience, with enough care in composition and interaction to feel worth returning to.

The central message is learning through a deliberate change. The homepage introduces this idea; the course shelf helps the visitor choose a subject; each lesson explains a principle, gives the visitor controls, and asks a reflection question. The notebook keeps settings and reflections together. These are six complete destinations: index.html, courses.html, color.html, type.html, layout.html and notebook.html. Do not count filter states or query-string variations as additional pages. All pages share navigation and a clear path back to the collection.

## Observed reference and independent direction

The structural reference is https://www.superhi.com/. Its live homepage was inspected in a browser at 1280 pixels. The main headline measured92px with92px line height, weight400 and a width of approximately684px, using a Haas display family. The page connects a prominent educational proposition to a course catalogue, an accessible starter course, examples of student work, subject pathways and practical questions. The transferable idea is that the course promise is demonstrated through making and a clearly reachable starting point. This is a reference observation, not permission to reuse the reference's branding, images, claims, student identities, course content or source code.

Fieldschool uses an independent warm-paper visual system, quiet green ink, burnt-orange and dusty-blue study sheets, and a compact folded-paper identity. The layout is a two-column invitation beside an original collage of exercise sheets, followed by a restrained course shelf. Do not reproduce SuperHi's visual effects, logo, customer testimonials, enrollment figures or commercial offer. There are no invented students, tutors, companies or credentials. Demonstrate value through the actual exercises instead of social proof that cannot be substantiated.

The contrast lesson refers directly to W3C's explanation at https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html. Implement the relative-luminance ratio and compare the unrounded number against4.5 for ordinary text. The displayed ratio may be rounded to two decimal places, but the pass condition must use the original value. Describe this as one text-contrast check, not a complete accessibility certification or a universal judgment of whether a palette is good.

## Identity, typography and tone

Use Fieldschool in lowercase as a compact wordmark. Pair it with a small original CSS folded-page mark: a slightly rotated outlined rectangle with a central fold. This is the brand symbol, not a replacement for a functional interface icon. Arrow characters may accompany links whose text already communicates the destination. No action should rely on an unexplained symbol alone. Do not insert a favicon or public build-platform attribution.

Host the Geist variable font locally and retain its SIL license. Use it for navigation, body text, controls and most headings. A system Georgia italic can introduce a warmer note in the homepage's final headline word and in a few original poster studies. Keep this contrast deliberate; the site should not alternate randomly between font families. Headlines use medium weight, compact leading and negative tracking, while body paragraphs use comfortable line spacing and a constrained measure.

The default page background is warm paper near#f4f1e7 and the text is dark green ink near#272c25. Supporting copy should remain clearly legible, around#555d4e. Sage near#d6dcbb provides a calm shared surface. A deeper green near#304a43 supports the instructional manifesto. Original exercise sheets use burnt orange#df5c36, dusty blue#75919d and pale yellow-green#d8d890. Treat these as related materials, not colors randomly assigned to interchangeable cards.

Write visible copy as a practical invitation. Prefer phrases such as Choose an exercise, Save experiment, Your reflection and Export notebook. Explain what the visitor can actually do. Do not present a professional course credential, paid membership, staff feedback service, cloud account or cross-device synchronization. Suggested exercise durations are practice estimates, not video lengths. The product boundaries should be clear in the footer and relevant notebook copy without overwhelming the creative experience with technical disclaimers.

## Homepage geometry and sequence

At a large laptop width, use approximately5percent horizontal padding. The header has around25px vertical padding, with the brand on the left and three useful links on the right. A fine divider separates it from the hero. There is no sticky sale banner or oversized navigation container. The header is a clear way into Courses, My notebook and the first lesson.

The hero has two columns, a slightly wider visual column, a gap near5percent and72px top padding. The headline scales from48 to98px, with three intentional lines and the final word in italic. Supporting text is18px, about430px wide, followed by a filled dark-green action. Keep the proposition visible within a small laptop viewport; do not add extra eyebrow rows, animated badges or a paragraph long enough to push the starting action out of view.

The right side is an original collage on a pale neutral field with an arched top. Three exercise sheets overlap at restrained angles. Color appears as circles and a rounded column, typography as a large letterform pair, and composition as unequal blocks. A round paper-like sticker describes the emphasis on trying. Give the collage dimensionality through overlap and a low-contrast offset shadow, not stock floating glass panels or a fake screenshot. The artwork must be locally generated from original SVG and exported as WebP.

Below the hero, use a single sage rail with three factual principles: three hands-on lessons, self-paced use and the browser as the studio. It is not a logo wall. The next section introduces the course shelf with a large heading and a short paragraph aligned to opposite sides. Three course posters sit in equal columns because these are parallel offerings, but the rest of the page must not repeat this arrangement. Beneath each poster, show subject, suggested duration, a meaningful title, one explanatory paragraph and a lesson link.

Follow with a dark-green instructional section. Its left column contains the central idea about learning by moving things; its right column contains three sequential principles with large serif numerals. The number has a real instructional role here. Each principle has a short heading and explanation. Continue with an asymmetric sample section: a large orange typographic poster on one side, a color-lesson invitation on the other. Finish with native FAQ disclosures and a sage closing invitation. Alternate these compositions to create an intentional reading rhythm.

## Course catalogue

The courses page is a substantial selection destination, not a duplicate of the homepage. Start with a large introduction and a concise explanation of the shared learning pattern. Add a search field and subject selector with visible labels. The subject choices are Every subject, Color, Typography and Layout. Search should match the course title, subject and short description without requiring exact capitalization. Combine the query and subject filters rather than allowing one to silently reset the other.

Show a live result count with correct singular and plural wording. When no result matches, show an explanatory empty state and preserve the controls so the visitor can recover. The Reset filters action clears both controls and immediately restores all three courses. The course cards use the same original posters as the home page and link directly to their actual lessons. Do not invent more lessons to make the grid longer, or advertise content that has no destination.

## Lesson structure

Each lesson starts with its subject, suggested practice time, a specific question or proposition, supporting text and its original poster. Below this, use a narrow lesson navigation column and a wider reading-and-experiment column. At desktop sizes the lesson navigation can remain sticky near the top while the article scrolls. It links to all three subjects and the notebook, and visibly identifies the current lesson. On mobile it becomes a wrapping row in document flow.

The main article contains a clear introduction to the principle, three concrete steps, a challenge, a functioning experiment, a reflection area and a next destination. The content must be original and correspond to the controls on that page. Avoid a long generic essay that never explains what the visitor should change. Reading copy is17–18px, with a line height around1.8 and a maximum width suitable for close reading.

The exercise has a labelled toolbar, a controls area, a large specimen and an output row. The specimen is live HTML and CSS. It must not be a single flattened image pretending to be interactive. Changing any input immediately updates both the specimen and a plain-language summary of the settings. Preserve the surrounding interface's readable colors even when the visitor intentionally chooses a low-contrast experiment.

## Color exercise

Provide two native color inputs with visible labels Paper and Ink. Start with the site's warm paper and dark green. Apply the chosen values only to the specimen, which contains a small publication label, a large headline and a real paragraph. Keep that text constant while the visitor changes colors so the comparison has a stable basis. The ratio is measured from the selected hexadecimal colors, not sampled from a screenshot.

Convert each sRGB channel to a zero-to-one value. Apply the linear branch at0.04045 and the power branch otherwise, then combine channels with the standard relative-luminance weights. Divide the lighter luminance plus0.05 by the darker luminance plus0.05. Display a two-decimal ratio and a clear sentence stating whether it reaches the ordinary-text AA threshold. White against black should produce21:1, and equal colors should produce1:1. Those provide useful boundary checks.

The challenge asks for a warm pair above the threshold and a cooler alternative. The reflection asks which choice changed the tone more and where the stronger pair could be used. Saving stores the paper, ink, ratio and reflection together. The visitor can return to the lesson and see the selected colors restored. A saved ratio is descriptive; when restoring, recalculate from the actual controls so stale or edited storage cannot create a contradictory output.

## Typography exercise

Use a family selector with two constrained choices: editorial serif and practical sans. Add range inputs for reading size from16 to28px, leading from1.3 to2 in0.1 steps, and measure from24 to55characters. Start at20px,1.6 and38characters. Apply these settings to the paragraph specimen using CSS custom properties and a controlled family mapping. Never use arbitrary stored text as a font URL or stylesheet.

Keep the headline and paragraph together so the learner can judge hierarchy, but apply the reading-size control to the paragraph rather than making every UI element larger. The output row lists size, line height, measure and family. On a narrow screen, the actual container width naturally limits the paragraph even if the selected character measure is larger. This demonstrates that a measure is a maximum, not permission to force horizontal scrolling.

The challenge is to find a useful reading rhythm around18–22px and compare families with other variables held steady. The reflection concerns whether a wider measure helps or hinders tracking. Save exact string values from the constrained controls, restore only values within the supported range, and keep the example prose intact. The lesson's value is in seeing a relationship, not generating a pretend quality score.

## Layout exercise

Use a native selector for balanced columns or a two-to-one proportion. A range controls the gap from8 to48px in4px steps. A checkbox enables a narrow stacked preview. The specimen contains original composition artwork, a short label, a headline and supporting text. The wider image and narrower explanation should create a visible difference between the two proportion choices. Do not merely change a badge while keeping the layout fixed.

The narrow preview limits the specimen to360px and stacks its contents. Mobile styles also stack it automatically, regardless of the desktop proportion selection. The output explains the current composition and gap in plain language. Keep the checkbox meaningful on desktop and harmless on mobile. Saving stores proportion, gap, narrow-preview state and reflection. The next destination after the final lesson is the notebook rather than a nonexistent fourth course.

## Notebook and persistence

Use one dedicated local-storage key with a version suffix. Store one record per known course ID, containing constrained settings, a reflection of at most4000characters and an explicit completion boolean. Load defensively: malformed JSON, arrays or null should produce an empty notebook. Restore controls only when their values fit known options and supported ranges. Ignore unknown course records when rendering and counting progress.

The learner explicitly saves an experiment or marks a lesson complete. Merely moving a slider must not claim that progress was saved. The completion control is reversible and exposes aria-pressed. Saving a reflection should preserve the current completion state. Marking complete also saves the current settings and text, so the notebook does not show an old experiment beside a new completion state. If browser storage fails, retain the current in-memory state and explain that a portable export is needed.

The notebook page presents completion as a count out of three, followed by saved lessons. Each entry includes its real course title, current status, reflection, formatted settings and a direct Continue experimenting link. Render user text with textContent so strings containing angle brackets are shown literally. If no reflection has been written, say so plainly. The empty notebook has a useful explanation and a course link; export and clear controls are disabled until something exists.

Export a Markdown file containing the course headings, completion states, reflections and settings. Use a browser Blob and a temporary object URL, then release the URL after the download action. Say that the download was prepared rather than claiming the file was read or stored on disk. Clearing the notebook requires a local inline confirmation with a cancellation path because it deletes the visitor's saved work. This is a product interaction, not an external permission flow.

## Responsive, motion and verification

At approximately950px, reduce the hero scale and lesson side navigation width. At700px, stack the hero, instructional sections, sample feature, lesson opener and notebook columns. Course posters become wider on mobile to reduce unnecessary scrolling. The header wraps navigation instead of clipping links or adding an elaborate menu for three destinations. Maintain at least12px secondary metadata and14px controls, with body copy normally16–18px. Do not shrink an entire desktop canvas into a phone-shaped miniature.

Motion is restrained and purposeful: a brief small entrance where used, a slight course-image zoom on hover and a subtle color transition inside the experiment. There is no autoplay video, artificial cursor or endless marquee. Respect reduced-motion preferences. All content and selected states remain visible without animation. The page is complete without JavaScript for the introductory material, while the exercises require it for state updates.

Verify all six routes and local assets, one main landmark and h1 per page, keyboard focus, labels and visible result feedback. Test combined catalogue filters and the reset path. Test black/white and equal-color contrast boundaries. Change typography settings, save a reflection containing literal markup characters, mark a lesson complete, navigate to the notebook and return to verify restoration. Test layout proportions and narrow preview. Exercise clear cancellation and confirmation. Inspect desktop and mobile compositions and check overflow. Report actual evidence and remaining limits; a successful build alone does not prove interaction or visual quality.


## Exact course model

```javascript
export const courses = [
  {
    id: 'color',
    name: 'Make color work.',
    subject: 'Color',
    duration: 25,
    lead: 'A palette is a set of relationships. Learn to make those relationships useful.',
    output: 'A two-color reading surface with a measured contrast ratio.',
    color: '#df5c36',
    lesson: 'Two colors. One clear message.',
    steps: [
      'Choose a background that gives the page its temperature.',
      'Choose an ink color that remains readable against it.',
      'Check the measured ratio, then describe the feeling.',
    ],
    copy: 'A warm surface can feel welcoming without becoming pale and difficult to read. Begin with a clear distinction between ink and paper. A color has no fixed mood in isolation: its neighbor changes the relationship. Use the experiment below to compare a cream surface with an orange one. Keep the text constant so you can see what the color pair changes.',
    challenge:
      'Create a warm palette that reaches at least 4.5:1 contrast for ordinary text. Then make a second pair that feels cooler. Save both observations in your notebook.',
    reflection:
      'Which choice changed the tone more: the background, or the ink? Where would the stronger pair be useful?',
  },
  {
    id: 'type',
    name: 'Give words a voice.',
    subject: 'Typography',
    duration: 30,
    lead: 'The same sentence can whisper, explain, or take the whole room.',
    output:
      'A readable editorial specimen with a deliberate scale and measure.',
    color: '#75919d',
    lesson: 'Set the pace of a paragraph.',
    steps: [
      'Choose a family that fits the voice of the text.',
      'Adjust the reading size before you adjust the headline.',
      'Change the measure and line height, then read it aloud.',
    ],
    copy: 'Typography organizes attention over time. The headline creates an invitation, but the paragraph keeps the reader moving. If the lines are too long, finding the next one becomes work. If the leading is too tight, neighboring lines compete. A useful type study changes one variable at a time and keeps enough real text on screen to judge the result.',
    challenge:
      'Find a comfortable reading rhythm between 18 and 22 pixels. Compare serif and sans-serif at the same size. Save the setting you would use for a short studio journal.',
    reflection:
      'Did a wider measure make the text feel calmer, or simply harder to track? Which variable would you change first on a phone?',
  },
  {
    id: 'layout',
    name: 'Find a useful rhythm.',
    subject: 'Layout',
    duration: 35,
    lead: 'A grid is a way to make room for difference, not a reason to make everything equal.',
    output: 'A responsive composition built around proportion and white space.',
    color: '#d8d890',
    lesson: 'Give the page a structure.',
    steps: [
      'Begin with a single strong focal point.',
      'Choose how supporting items relate to that focal point.',
      'Test the relationship at a narrow width before adding decoration.',
    ],
    copy: 'A layout gives different kinds of information different jobs. A large photograph can establish a place while a smaller caption explains why it matters. The relationship is more useful than a row of equally loud cards. Start with three pieces of content: an image, a title, and a note. Change their proportions and ask where your eye goes first.',
    challenge:
      'Build an editorial composition with one dominant image and a secondary note. Compare a balanced grid with a two-to-one split. Save a version that still makes sense in the narrow preview.',
    reflection:
      'What became more important when the columns changed? Does the mobile order preserve the same story?',
  },
];

```

## Exact responsive CSS

```css
@font-face {
  font-family: Field;
  src: url('assets/geist-variable.woff2') format('woff2');
  font-display: swap;
  font-weight: 100 900;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #f4f1e7;
  color: #272c25;
  font:
    16px/1.6 Field,
    Arial,
    sans-serif;
}
a {
  color: inherit;
  text-underline-offset: 5px;
}
button,
input,
select,
textarea {
  font: inherit;
}
button {
  cursor: pointer;
}
button,
a,
input,
select,
textarea {
  outline-offset: 5px;
}
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #b44020;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
h1,
h2,
h3,
p {
  margin: 0;
}
h1,
h2,
h3 {
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.055em;
}
h1 {
  font-size: clamp(48px, 6.8vw, 98px);
}
h2 {
  font-size: clamp(34px, 4.7vw, 64px);
}
h3 {
  font-size: 28px;
}
p {
  max-width: 62ch;
}
.skip {
  position: fixed;
  top: -80px;
  left: 20px;
  background: #fff;
  padding: 14px;
  z-index: 30;
}
.skip:focus {
  top: 10px;
}
[hidden] {
  display: none !important;
}
.header {
  padding: 25px 5%;
  display: flex;
  gap: 30px;
  align-items: center;
  border-bottom: 1px solid #c9cbbd;
}
.brand {
  font-size: 29px;
  letter-spacing: -1.8px;
  text-decoration: none;
  font-weight: 600;
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand i {
  display: inline-block;
  width: 23px;
  height: 27px;
  border: 2px solid;
  transform: rotate(-9deg);
  background: linear-gradient(
    90deg,
    transparent 45%,
    #272c25 45% 53%,
    transparent 53%
  );
}
nav {
  display: flex;
  gap: 28px;
  align-items: center;
  font-size: 14px;
}
nav a {
  text-decoration: none;
}
nav a[aria-current='page'] {
  text-decoration: underline;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  min-height: 48px;
  padding: 13px 22px;
  background: #272c25;
  color: #fff;
  border: 1px solid #272c25;
  border-radius: 3px;
  text-decoration: none;
  font-size: 14px;
}
.button.light {
  background: #f4f1e7;
  color: #272c25;
}
.button:hover {
  background: #414d37;
  color: #fff;
}
.button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 22px;
}
.hero {
  display: grid;
  grid-template-columns: 1fr 1.07fr;
  align-items: center;
  gap: 5%;
  padding: 72px 5% 86px;
  overflow: hidden;
}
.hero h1 {
  max-width: 680px;
}
.hero h1 em {
  font-family: Georgia, serif;
  font-weight: 400;
}
.hero p {
  margin: 28px 0 32px;
  font-size: 18px;
  max-width: 430px;
}
.hero-art {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
  background: #e9e3d6;
  border-radius: 50% 50% 3px 3px;
}
.hero-art img {
  width: 88%;
  transform: rotate(-7deg);
  box-shadow: 14px 25px 0 #272c2514;
}
.hero-art .sticker {
  position: absolute;
  right: -10px;
  bottom: 40px;
  width: 136px;
  height: 136px;
  border-radius: 50%;
  background: #d5dc75;
  display: grid;
  place-items: center;
  text-align: center;
  line-height: 1.2;
  font-size: 17px;
  transform: rotate(12deg);
  border: 1px solid #272c25;
}
.rail {
  display: flex;
  gap: 35px;
  padding: 24px 5%;
  justify-content: space-between;
  background: #d6dcbb;
  font-size: 14px;
}
.section {
  padding: 90px 5%;
}
.section-top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 35px;
  margin-bottom: 45px;
}
.section-top p {
  max-width: 330px;
  font-size: 17px;
}
.course-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}
.course-art {
  display: block;
  overflow: hidden;
  background: #e5dfcf;
  aspect-ratio: 4/5;
}
.course-art img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s;
}
.course-art:hover img {
  transform: scale(1.025);
}
.course-info {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 20px 0 12px;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.course h3 a {
  text-decoration: none;
}
.course p {
  margin: 16px 0 22px;
  color: #555d4e;
  font-size: 15px;
}
.manifesto {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 12%;
  background: #304a43;
  color: #f6f1e3;
}
.manifesto p {
  font-size: 19px;
  margin-top: 24px;
}
.manifesto ol {
  padding: 0;
  list-style: none;
  margin: 0;
  display: grid;
  gap: 36px;
  counter-reset: principle;
}
.manifesto li {
  counter-increment: principle;
  display: grid;
  grid-template-columns: 45px 1fr;
  gap: 18px;
}
.manifesto li:before {
  content: counter(principle);
  font-family: Georgia, serif;
  font-size: 48px;
  font-style: italic;
}
.manifesto li p {
  font-size: 16px;
  margin-top: 12px;
}
.sample-section {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 10%;
  align-items: center;
}
.sample-section h2 {
  margin-bottom: 25px;
}
.sample-section p {
  margin-bottom: 28px;
  font-size: 18px;
}
.sample-poster {
  background: #df5c36;
  padding: 40px;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotate(3deg);
  color: #221d15;
  box-shadow: 16px 15px 0 #ddd7c4;
}
.sample-poster b {
  font-size: clamp(55px, 7vw, 96px);
  line-height: 0.9;
  letter-spacing: -0.07em;
  font-weight: 500;
}
.sample-poster span {
  font-family: Georgia, serif;
  font-size: 25px;
}
.faq {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 12%;
  border-top: 1px solid #c9cbbd;
}
details {
  border-bottom: 1px solid #c9cbbd;
  padding: 22px 0;
}
summary {
  cursor: pointer;
  font-size: 18px;
}
details p {
  margin-top: 15px;
  color: #555d4e;
}
.closing {
  background: #d6dcbb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.footer {
  padding: 42px 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.footer p {
  font-size: 12px;
  max-width: 520px;
  color: #555d4e;
}
.footer nav {
  justify-content: flex-end;
}
.intro {
  padding: 65px 5% 45px;
  max-width: 1200px;
}
.intro p {
  font-size: 19px;
  margin-top: 25px;
}
.filters {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: end;
  margin-bottom: 35px;
}
.filters label {
  display: grid;
  gap: 8px;
  font-size: 14px;
}
.filters input,
.filters select {
  border: 1px solid #aaaf9e;
  padding: 12px;
  background: #fff;
  min-height: 48px;
  border-radius: 3px;
}
.filters input {
  width: min(340px, 75vw);
}
.status {
  font-size: 14px;
  color: #424b3c;
  display: block;
  min-height: 24px;
  margin: 18px 0;
}
.lesson-head {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 8%;
  padding: 55px 5%;
  align-items: center;
}
.lesson-head h1 {
  font-size: clamp(45px, 6vw, 76px);
}
.lesson-head p {
  margin-top: 25px;
  font-size: 18px;
}
.lesson-head img {
  max-height: 380px;
  object-fit: cover;
}
.lesson-body {
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  gap: 7%;
  padding: 40px 5% 80px;
}
.lesson-nav {
  position: sticky;
  top: 25px;
  align-self: start;
  display: grid;
  gap: 16px;
  font-size: 14px;
}
.lesson-nav a {
  text-decoration: none;
  border-left: 2px solid #bec4b1;
  padding: 8px 15px;
}
.lesson-nav a[aria-current='page'] {
  border-color: #ad3f22;
  font-weight: 600;
}
.lesson-copy {
  max-width: 800px;
}
.lesson-copy h2 {
  font-size: 36px;
  margin: 0 0 24px;
}
.lesson-copy p {
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 1.8;
}
.lesson-copy ol {
  padding-left: 22px;
  margin: 25px 0 45px;
}
.lesson-copy li {
  padding: 8px 0;
}
.lab {
  margin: 50px 0;
  border: 1px solid #bac0aa;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
}
.lab-bar {
  padding: 18px 25px;
  background: #e9ecdf;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 14px;
}
.lab-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  padding: 25px;
  border-bottom: 1px solid #ced3c0;
}
.lab-controls label {
  display: grid;
  gap: 7px;
  font-size: 14px;
  flex: 1;
  min-width: 125px;
}
.lab-controls input:not([type='color']),
.lab-controls select {
  max-width: 100%;
  min-height: 42px;
  accent-color: #414d37;
}
.lab-controls input[type='color'] {
  width: 100%;
  height: 44px;
  border: 1px solid #aaa;
  background: white;
}
.specimen {
  padding: 40px;
  min-height: 320px;
  transition:
    background-color 0.2s,
    color 0.2s;
}
.specimen h3 {
  font-size: 48px;
  margin-bottom: 25px;
}
.specimen p {
  font-size: 18px;
  max-width: 45ch;
}
.specimen .specimen-label {
  font: 12px Field;
  margin-bottom: 35px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.lab-result {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  background: #e9ecdf;
  flex-wrap: wrap;
}
.lab-result output {
  font-size: 14px;
}
.lab-result strong {
  font-size: 23px;
}
.type-specimen p {
  max-width: var(--measure, 38ch);
  font-size: var(--size, 20px);
  line-height: var(--leading, 1.6);
}
.layout-specimen {
  display: grid;
  grid-template-columns: var(--columns, 2fr 1fr);
  gap: var(--gap, 24px);
  align-items: center;
}
.layout-specimen img {
  aspect-ratio: 1;
  object-fit: cover;
}
.layout-specimen h3 {
  font-size: 35px;
}
.layout-specimen p {
  font-size: 16px;
}
.layout-specimen.narrow {
  max-width: 360px;
  margin: auto;
  grid-template-columns: 1fr;
}
.reflection {
  padding: 28px;
  background: #e4e8d4;
}
.reflection h3 {
  margin-bottom: 18px;
}
.reflection p {
  font-size: 16px;
}
.reflection textarea {
  display: block;
  width: 100%;
  min-height: 150px;
  padding: 16px;
  border: 1px solid #aeb79b;
  background: #fff;
  margin: 20px 0;
}
.lesson-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 28px;
}
.notebook {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8%;
  padding: 10px 5% 80px;
}
.notebook-aside {
  background: #d6dcbb;
  padding: 30px;
  align-self: start;
}
.notebook-aside h2 {
  font-size: 38px;
  margin-bottom: 20px;
}
.notebook-aside p {
  font-size: 15px;
}
.notebook-list {
  display: grid;
  gap: 30px;
}
.note {
  padding: 25px 0;
  border-bottom: 1px solid #c9cbbd;
}
.note h2 {
  font-size: 32px;
  margin-bottom: 16px;
}
.note p {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  margin-bottom: 20px;
}
.note pre {
  white-space: pre-wrap;
  font-size: 14px;
  padding: 18px;
  background: #e9ecdf;
  overflow-wrap: anywhere;
}
.note .button {
  margin-top: 20px;
}
.empty {
  padding: 35px;
  background: #e9ecdf;
}
.empty h2 {
  font-size: 35px;
  margin-bottom: 20px;
}
.empty p {
  margin-bottom: 25px;
}
.danger {
  background: transparent;
  border: 1px solid #727c63;
  min-height: 44px;
  padding: 10px 15px;
  margin-top: 15px;
  font-size: 14px;
}
.fade-in {
  animation: arrive 0.6s both;
}
@keyframes arrive {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 950px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    padding-top: 45px;
  }
  .hero-art {
    min-height: 440px;
  }
  .hero h1 {
    font-size: 66px;
  }
  .hero-art .sticker {
    width: 105px;
    height: 105px;
    font-size: 14px;
  }
  .course-grid {
    gap: 18px;
  }
  .lesson-body {
    grid-template-columns: 170px minmax(0, 1fr);
    gap: 4%;
  }
  .lesson-head {
    gap: 5%;
  }
  .specimen {
    padding: 26px;
  }
  .lab-controls {
    gap: 15px;
  }
  .manifesto,
  .faq {
    gap: 7%;
  }
}
@media (max-width: 700px) {
  .header {
    padding: 19px 5%;
    flex-wrap: wrap;
    gap: 18px;
  }
  .brand {
    font-size: 27px;
  }
  .header nav {
    width: 100%;
    justify-content: space-between;
    gap: 15px;
    font-size: 14px;
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 45px;
    padding: 45px 5% 55px;
  }
  .hero h1 {
    font-size: clamp(52px, 12vw, 72px);
    max-width: 620px;
  }
  .hero p {
    font-size: 17px;
  }
  .hero-art {
    min-height: 390px;
    max-width: 490px;
    width: 100%;
    margin: auto;
  }
  .hero-art img {
    width: 74%;
  }
  .hero-art .sticker {
    right: 10px;
    bottom: 25px;
  }
  .rail {
    flex-wrap: wrap;
    gap: 14px 30px;
  }
  .section {
    padding: 60px 5%;
  }
  .section-top {
    display: block;
  }
  .section-top p {
    margin-top: 25px;
  }
  .course-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .course-art {
    aspect-ratio: 5/4;
  }
  .manifesto,
  .sample-section,
  .faq,
  .lesson-head,
  .notebook {
    grid-template-columns: 1fr;
    gap: 38px;
  }
  .sample-poster {
    min-height: 350px;
    transform: rotate(1deg);
    margin-right: 10px;
  }
  .closing {
    display: block;
  }
  .closing .button {
    margin-top: 30px;
  }
  .footer {
    grid-template-columns: 1fr;
  }
  .footer nav {
    justify-content: start;
    flex-wrap: wrap;
  }
  .intro {
    padding-top: 40px;
  }
  .lesson-head {
    padding-top: 40px;
  }
  .lesson-head img {
    max-height: 260px;
  }
  .lesson-body {
    display: block;
    padding-top: 10px;
  }
  .lesson-nav {
    position: static;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    gap: 8px;
  }
  .lesson-nav a {
    padding: 8px 10px;
    font-size: 14px;
  }
  .lesson-copy p {
    font-size: 17px;
  }
  .specimen h3 {
    font-size: 40px;
  }
  .lab-controls {
    padding: 20px;
    gap: 20px;
  }
  .specimen {
    padding: 25px;
  }
  .layout-specimen {
    grid-template-columns: 1fr;
  }
  .layout-specimen img {
    max-height: 260px;
  }
  .notebook {
    padding-top: 10px;
  }
  .notebook-aside {
    padding: 25px;
  }
  .reflection {
    padding: 22px;
  }
  .lab-result {
    padding: 20px;
  }
  .hero-art .sticker {
    border-radius: 50%;
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

.course p, .notebook-aside p { font-size: 16px; }

```

## Reference interaction handler

```javascript
const courses = JSON.parse(
  document.getElementById('fieldschool-data').textContent,
);
const storageKey = 'fieldschool-notebook-v1';
function load() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return value && typeof value === 'object' && !Array.isArray(value)
      ? value
      : {};
  } catch {
    return {};
  }
}
let notebook = load();
const say = (message) =>
  document
    .querySelectorAll('[data-status]')
    .forEach((el) => (el.textContent = message));
function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(notebook));
    say('Saved in this browser.');
    return true;
  } catch {
    say(
      'Browser storage is unavailable. Export your notebook to keep this session.',
    );
    return false;
  }
}
function download(text, name) {
  const url = URL.createObjectURL(
    new Blob([text], { type: 'text/markdown;charset=utf-8' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const search = document.getElementById('course-search');
function filterCourses() {
  const query = search.value.trim().toLowerCase();
  const subject = document.getElementById('subject').value;
  let count = 0;
  document.querySelectorAll('[data-course]').forEach((el) => {
    const item = courses.find((course) => course.id === el.dataset.course);
    const visible =
      (!subject || item.subject === subject) &&
      `${item.name} ${item.subject} ${item.lead}`.toLowerCase().includes(query);
    el.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('course-count').textContent =
    `${count} ${count === 1 ? 'course' : 'courses'}`;
  document.getElementById('no-courses').hidden = count !== 0;
}
if (search) {
  search.addEventListener('input', filterCourses);
  document.getElementById('subject').addEventListener('change', filterCourses);
  document.getElementById('reset-search').addEventListener('click', () => {
    search.value = '';
    document.getElementById('subject').value = '';
    filterCourses();
  });
  filterCourses();
}
function luminance(hex) {
  const values = hex
    .slice(1)
    .match(/../g)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}
function contrast(a, b) {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
const lab = document.getElementById('lab');
const compactLayout = matchMedia('(max-width: 700px)');
function updateColor() {
  const background = document.getElementById('paper').value;
  const ink = document.getElementById('ink').value;
  const specimen = document.getElementById('specimen');
  specimen.style.backgroundColor = background;
  specimen.style.color = ink;
  const ratio = contrast(background, ink);
  document.getElementById('lab-output').textContent =
    `${ratio.toFixed(2)}:1 — ${ratio >= 4.5 ? 'Meets the AA ratio for ordinary text' : 'Below the AA ratio for ordinary text'}`;
  return { background, ink, contrast: ratio.toFixed(2) };
}
function updateType() {
  const size = document.getElementById('size').value;
  const leading = document.getElementById('leading').value;
  const measure = document.getElementById('measure').value;
  const family = document.getElementById('family').value;
  const specimen = document.getElementById('specimen');
  specimen.style.setProperty('--size', size + 'px');
  specimen.style.setProperty('--leading', leading);
  specimen.style.setProperty('--measure', measure + 'ch');
  specimen.style.fontFamily =
    family === 'serif' ? 'Georgia, serif' : 'Field, Arial, sans-serif';
  document.getElementById('lab-output').textContent =
    `${size}px / ${leading} line height / ${measure}ch / ${family}`;
  return { size, leading, measure, family };
}
function updateLayout() {
  const columns = document.getElementById('columns').value;
  const gap = document.getElementById('gap').value;
  const narrow = document.getElementById('narrow').checked;
  const specimen = document.getElementById('specimen');
  specimen.style.setProperty('--columns', columns);
  specimen.style.setProperty('--gap', gap + 'px');
  specimen.classList.toggle('narrow', narrow);
  const composition = columns === '2fr 1fr' ? 'Two-to-one composition' : 'Balanced composition';
  const layoutDescription = narrow
    ? 'Narrow stacked preview'
    : compactLayout.matches
      ? `Stacked on this screen; ${composition.toLowerCase()} on wider screens`
      : composition;
  document.getElementById('lab-output').textContent =
    `${layoutDescription} / ${gap}px gap`;
  return { columns, gap, narrow };
}
const updates = { color: updateColor, type: updateType, layout: updateLayout };
if (lab) {
  const id = lab.dataset.lesson;
  const saved = notebook[id];
  const controls = [...lab.querySelectorAll('input,select')];
  if (saved?.settings && typeof saved.settings === 'object') {
    const aliases = { paper: 'background' };
    controls.forEach((control) => {
      const value = saved.settings[aliases[control.id] || control.id];
      if (control.type === 'checkbox') {
        control.checked = value === true;
        return;
      }
      if (typeof value !== 'string') return;
      if (control.type === 'color' && !/^#[0-9a-f]{6}$/i.test(value)) return;
      if (
        control.tagName === 'SELECT' &&
        ![...control.options].some((option) => option.value === value)
      )
        return;
      if (
        control.type === 'range' &&
        !(
          Number(value) >= Number(control.min) &&
          Number(value) <= Number(control.max)
        )
      )
        return;
      control.value = value;
    });
  }
  const reflect = updates[id];
  if (id === 'layout') compactLayout.addEventListener('change', reflect);
  controls.forEach((control) => control.addEventListener('input', reflect));
  reflect();
  const note = document.getElementById('reflection-note');
  note.value = typeof saved?.note === 'string' ? saved.note.slice(0, 4000) : '';
  const complete = document.getElementById('complete-lesson');
  function completionState() {
    const done = notebook[id]?.complete === true;
    complete.setAttribute('aria-pressed', String(done));
    complete.textContent = done
      ? 'Marked complete — undo'
      : 'Mark lesson complete';
  }
  function saveExperiment() {
    notebook[id] = {
      ...notebook[id],
      settings: reflect(),
      note: note.value.trim().slice(0, 4000),
    };
    persist();
  }
  document
    .getElementById('save-experiment')
    .addEventListener('click', saveExperiment);
  complete.addEventListener('click', () => {
    notebook[id] = {
      ...notebook[id],
      complete: notebook[id]?.complete !== true,
      settings: reflect(),
      note: note.value.trim().slice(0, 4000),
    };
    persist();
    completionState();
  });
  completionState();
}
function renderNotebook() {
  const list = document.getElementById('notes');
  if (!list) return;
  list.replaceChildren();
  const saved = courses.filter(
    (course) => notebook[course.id] && typeof notebook[course.id] === 'object',
  );
  document.getElementById('empty-notebook').hidden = saved.length > 0;
  document.getElementById('progress').textContent =
    `${courses.filter((course) => notebook[course.id]?.complete === true).length} of 3 lessons marked complete`;
  document.getElementById('export-notebook').disabled = saved.length === 0;
  document.getElementById('clear-notebook').disabled = saved.length === 0;
  saved.forEach((course) => {
    const entry = notebook[course.id];
    const article = document.createElement('article');
    article.className = 'note';
    const heading = document.createElement('h2');
    heading.textContent = course.name;
    const state = document.createElement('p');
    state.textContent =
      entry.complete === true
        ? 'Lesson marked complete'
        : 'Experiment in progress';
    const note = document.createElement('p');
    note.textContent =
      typeof entry.note === 'string' && entry.note
        ? entry.note.slice(0, 4000)
        : 'No reflection written yet.';
    const settings = document.createElement('pre');
    settings.textContent = JSON.stringify(entry.settings || {}, null, 2);
    const link = document.createElement('a');
    link.href = course.id + '.html';
    link.className = 'button';
    link.textContent = 'Continue experimenting ↗';
    article.append(heading, state, note, settings, link);
    list.append(article);
  });
}
renderNotebook();
document.getElementById('export-notebook')?.addEventListener('click', () => {
  const entries = courses
    .filter((course) => notebook[course.id])
    .map((course) => {
      const entry = notebook[course.id];
      return `## ${course.name}\n\n${entry.complete === true ? 'Marked complete' : 'In progress'}\n\n${typeof entry.note === 'string' ? entry.note.slice(0, 4000) : ''}\n\nSettings:\n${JSON.stringify(entry.settings || {}, null, 2)}\n`;
    });
  download(
    '# Fieldschool notebook\n\n' + entries.join('\n'),
    'fieldschool-notebook.md',
  );
  say('Notebook download prepared.');
});
document.getElementById('clear-notebook')?.addEventListener('click', () => {
  document.getElementById('clear-confirmation').hidden = false;
  document.getElementById('cancel-clear').focus();
});
document.getElementById('cancel-clear')?.addEventListener('click', () => {
  document.getElementById('clear-confirmation').hidden = true;
  document.getElementById('clear-notebook').focus();
});
document.getElementById('confirm-clear')?.addEventListener('click', () => {
  const previous = notebook;
  notebook = {};
  if (!persist()) {
    notebook = previous;
    say('The notebook could not be cleared. Your notes are still available to export.');
    return;
  }
  renderNotebook();
  document.getElementById('clear-confirmation').hidden = true;
  say('Notebook cleared in this browser.');
  document.querySelector('#empty-notebook a').focus();
});

```
