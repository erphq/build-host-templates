# Maya Ren — editorial image maker

Create an original five-page editorial portrait portfolio for Maya Ren, a fictional image maker. The work concerns people in the middle of a working day: a ceramic artist holding an unfinished bowl, a dancer resting beside a rehearsal window, and a gardener standing at a seed table. These are original generated portraits of fictional adults. They must not be presented as documentary access to real people, real organizations, or actual commissions. The website should nevertheless treat the images with the seriousness of editorial work: readable captions, specific compositional notes, and a clear distinction between what an image shows and what it cannot establish.

## Reference research

James Braund’s website was reached through the DesEngs Minimum directory and inspected in the browser. The reviewed home used a serif identity and role, direct navigation to portraits, projects, personal work, and profile, and an editorial introduction beside prominent photography. Its framing emphasized human context rather than a generic services pitch. Use that broad relationship between words and images as the starting lesson. Do not copy its name, studio address, real subjects, portraits, project titles, biography, contact information, or wording. Do not reproduce its precise opening composition. Maya’s original direction is a three-column contact sheet followed by split portrait-and-story case pages.

The visual identity uses a warm paper background and dark burgundy text, with Georgia carrying most of the reading experience. A few small metadata labels use a locally bundled sans-serif. The site should feel like an editorial proof with three considered stories, not a commercial photography theme. Avoid full-screen slideshows, huge agency slogans, award badges, client logos, a services grid, fake statistics, or a subscription form. The content and the images are enough. Keep the navigation small and the controls obvious.

## Page structure and reading order

Build index.html, clay-hours.html, between-counts.html, under-glass.html, and profile.html as complete documents. The home introduces the three stories, each with an image, title, subject line, and year. Each case has its own original photograph, a distinct introductory sentence, three substantive paragraphs, an editorial pull quote, a disclosure about the constructed image, an expandable considerations note, and a next-story link. The Profile page explains the fictional practice and includes a useful local planning-list interaction. There are no thin placeholder pages counted as completed work.

The story sequence is Clay hours, Between counts, and Under glass. Clay hours focuses on the hand-held bowl and the balance between subject and workshop. Between counts considers a pause in movement and the tonal relationships of a black-and-white rehearsal scene. Under glass looks at direct gaze, a working surface, and the greenhouse as context. Their writing must remain different. Do not mechanically replace nouns in one case template and call the result three separate editorial narratives. Use the supplied copy as the minimum substantive content, keeping its limitations and distinctions intact.

## Visual system

Use #f5f1e9 for the page and #512f2d for the principal text. Rules can use a muted brown near #bea99d. A planning-list surface may be slightly darker paper, #ebe4d8, but ordinary text should not sit inside cards. The background remains constant from page to page. There are no gradients, drop shadows, glass layers, rounded image corners, or decorative animated shapes. Photographs carry their own colors. The dancer remains black and white while the maker’s blue shirt and the gardener’s greens establish different temperatures.

Use Georgia for the identity, navigation, major headings, body paragraphs, and quotes. The identity is approximately 21px with a smaller italic role beneath it. The homepage heading is about 35px, regular weight, with a line height close to 1.2. Case titles can be 42px on desktop and 36px on a phone. Main paragraphs are approximately 16px with a line height between 1.65 and 1.85. Small captions, metadata, and status messages use Geist at no less than 12px. Bundle Geist locally and include its license. Do not attempt to bundle Georgia; it is a system font request.

The header uses a three-column composition across the full page width: identity left, a short centered line about people in the middle of things, and Stories/Profile navigation right. A thin horizontal rule anchors the header. Desktop side padding is around 35px. The current navigation link is underlined with a comfortable offset. Links use normal underlines on hover, and all keyboard focus outlines remain visible. At tablet size the centered note disappears and the header becomes a two-column row. Do not introduce a hamburger menu for only two links.

## Contact-sheet homepage

The opening statement reads “There is a story in the work. And another in the pause.” Place it on the left of a spacious introductory row. On the right, use three short lines identifying the imagined encounters and the selection years. This introduction should be visible without consuming the whole first viewport. Beneath it, place three equal-width portrait studies in a single desktop row, separated by roughly 24px. The images have a four-to-five displayed ratio using considered object-position settings so the people remain visible. This contact sheet is deliberately different from Nola’s asymmetrical full-width sequence.

Under each image, put the story title and subject line on the left, with a small numbered year label on the right. The images and titles link to the case documents. Do not hide titles until hover. The subject line is a description, not an invented person’s name or client credit. Below the contact sheet, a short centered paragraph explains that each image has construction notes. The footer clearly identifies the portfolio as fictional and the scenes as generated. Keep this note discreet but readable, and link to the asset credits.

On a phone, the three-column contact sheet becomes a vertical sequence with full-width landscape images. The photographs were created in a landscape ratio, so this reveals more of their contextual environment instead of squeezing the face into a tiny portrait card. Preserve useful margins around each image. Captions remain legible and aligned. The layout must not retain three columns at 390px or create a horizontal carousel requiring a gesture to discover the remaining stories.

## Original photographs

Generate Clay hours as a realistic editorial portrait of a fictional adult woman in a modest pottery workshop. She wears a cobalt-blue work shirt and holds an unglazed pale bowl. Frame her at the left with shelves of vessels softly visible to the right. Use natural daylight and tactile material detail. The expression should be thoughtful and unforced. The scene contains no text, logos, identifiable real artist, or reference-site image. Save an optimized landscape WebP as assets/maker.webp.

Generate Between counts as a separate black-and-white image of a fictional adult male dancer resting on a low bench beside a rehearsal-studio window. He wears ordinary charcoal rehearsal clothes, and the pale wooden floor leaves some quiet surrounding space. The image should show an interval, not a staged leap or a recreation of a reference photograph. Use restrained grain and directional afternoon light. Save it as assets/dancer.webp. Do not infer a real company, performance, injury, or personal history from the image.

Generate Under glass as an original portrait of a fictional older gardener in olive workwear, standing at a wooden seed table inside a greenhouse. Keep tomato vines, glass structure, and warm daylight visible enough to establish context. The subject’s gaze can be direct and calm. The color palette is muted green and brown. Save it as assets/garden.webp. The scene is not a real garden record or evidence of a particular farming method. Include honest asset credits for all three generated scenes and keep reference imagery out of the download.

## Case documents

On desktop a case uses two columns: the portrait on the left and the reading column on the right, with a generous gap near 60px. The portrait can remain sticky within its column as the visitor reads, but it must not exceed the viewport in a way that hides its caption or blocks navigation. The reading column begins with a return link, title, subject/year metadata, and a larger introductory sentence. Paragraphs follow at a comfortable measure. A pull quote between the early sections is set in a larger italic serif with fine rules above and below. It is original editorial writing, not a quotation attributed to the fictional subject.

The final paragraph in each case explains that the image and person are generated. Do not fabricate an interview to make the case sound richer. The expandable Editorial considerations section discusses how a real assignment would require informed participation, agreed usage, context, and room for the subject to revise or decline the approach. Use a native details/summary element so keyboard and assistive-technology behavior are reliable. The disclosure should open and close without a custom animation library.

The next-story link names the destination and follows the intended three-story loop. On mobile the portrait becomes a normal full-width landscape image above the text, and sticky positioning is removed. The title and paragraphs follow naturally. A reader should not need to scroll sideways or dismiss a floating portrait to read the story. Every page has one h1, meaningful alt text, and normal browser navigation. Keep source dimensions on images to prevent layout shift.

## Profile and local planning list

The Profile page uses a two-column editorial arrangement, with a short statement at left and a longer practice explanation at right. The statement is “Look with someone, not just at them.” Explain that Maya Ren is fictional and that the portfolio is an exercise in visual context, not real access to subjects. Discuss how listening could change the location, timing, or appropriateness of an image. Do not invent credentials, education, representation, awards, clients, or booking availability.

After the prose, provide five visible checkboxes for editorial considerations. They cover the subject’s own account, publication and usage, access needs and pace, available light, and reviewing the approach together. The labels should be full meaningful sentences, not icons or vague tags. The visitor chooses any subset and selects Prepare planning list. If no consideration is selected, show a recoverable live message and keep the output hidden. Do not silently generate an empty document.

A successful preparation creates a plain-text numbered list in a visible paper-colored area, with a heading and an explicit note that it is local planning, not a booking or message. Reveal a Copy planning list button. If any checkbox changes afterward, hide the previous output and copy button and ask the visitor to prepare an updated list. This prevents copying stale selections. Clipboard success produces a short confirmation; failure leaves the text visible for manual copying. No checkbox values or personal information are sent anywhere, and no storage is necessary.

## Verification and portability

Test all five pages at desktop and phone sizes. Check the home composition visually, including the subjects’ framing in the contact sheet, and inspect every route at 390px for horizontal overflow and one h1. Open and close the native considerations disclosure. In Profile, submit with no choices, select two considerations, prepare the list, verify only those two sentences appear, then change a checkbox and confirm that the old output disappears. Prepare again and verify the copy status if clipboard access is available. Do not describe a prepared list as a sent inquiry.

Keep the implementation standalone, with locally bundled assets, relative links, and a small interaction script. The supplied exact content, stylesheet, and script below define the details needed to rebuild it. Preserve the original distinction between the three stories and the accessible responsive behavior. The goal is an editorial portfolio that has enough substance to read and enough restraint to let the images matter, rather than a marketing page with portraits attached.

## Exact data.mjs specification

```javascript
export const stories = [
  {
    id: 'clay-hours',
    name: 'Clay hours',
    image: 'maker',
    subject: 'A maker at work',
    year: '2026',
    intro:
      'The pause between shaping a vessel and deciding that it is finished.',
    quote: 'A portrait can begin with what someone is holding.',
    paragraphs: [
      'Clay hours is an original imagined portrait session centered on the relationship between a person and a working object. The unfinished bowl gives the hands something natural to do. The workshop remains visible, but its shelves are softened so they offer context without competing with the face.',
      'The blue work shirt carries the strongest color. Against warm clay and pale walls, it creates a calm center of gravity. The frame leaves room to one side so the subject does not feel enclosed by the image. This space is not intended for advertising copy; it allows the workshop to remain part of the portrait.',
      'The scene and person were generated for this fictional portfolio. No real artist was photographed or interviewed. The writing explains editorial choices in the constructed image, not a documentary encounter. In a real commission, consent, accurate context, and the subject’s own account would shape the process.',
    ],
  },
  {
    id: 'between-counts',
    name: 'Between counts',
    image: 'dancer',
    subject: 'A rehearsal interval',
    year: '2025',
    intro: 'A movement study made from a moment when the movement stops.',
    quote: 'The interval tells a different story from the performance.',
    paragraphs: [
      'Between counts imagines a dancer in the quiet part of a rehearsal day. The bench, window, and wooden floor provide enough information to suggest the setting. The body is at rest, with a small forward lean that keeps the image from becoming a formal seated portrait.',
      'Black and white removes the invitation to read the room through color. Attention moves instead to the direction of light, the weight of fabric, and the relationship between the figure and the empty floor. The photograph treats rehearsal as a lived space rather than a spectacle.',
      'This is an original generated editorial study featuring a fictional adult. It is not backstage access to a real company or a portrait of a named performer. The case describes framing and tonal decisions without inventing a publication, a commission, or a personal history for the subject.',
    ],
  },
  {
    id: 'under-glass',
    name: 'Under glass',
    image: 'garden',
    subject: 'A gardener’s afternoon',
    year: '2026',
    intro: 'A person, a seed table, and a room whose walls are made of light.',
    quote: 'Context is something to listen to, not merely a background.',
    paragraphs: [
      'Under glass places an imagined gardener among plants and everyday working surfaces. The seed table gives the portrait an anchor, while the greenhouse’s structure creates a soft rhythm around the figure. The direct gaze makes the image conversational rather than observational from a distance.',
      'Greens and warm browns remain muted. The light is bright enough to reveal the glasshouse but soft enough to preserve the face and hands. The composition balances the person with the growing environment, avoiding both a tightly isolated headshot and an anonymous wide scene.',
      'The person and location are fictional, created as an original generated photograph. The image makes no claims about a real garden, farming practice, age-related experience, or interview. A real editorial assignment would require context from the participant rather than a story inferred from their appearance.',
    ],
  },
];

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
  background: #f5f1e9;
  color: #512f2d;
  font:
    16px/1.65 Georgia,
    serif;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
button,
input {
  font: inherit;
  color: inherit;
}
button {
  cursor: pointer;
}
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid #855735;
  outline-offset: 5px;
}
.skip {
  position: absolute;
  top: -70px;
}
.skip:focus {
  top: 10px;
  background: white;
  z-index: 9;
}
header {
  padding: 25px 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  align-items: start;
  border-bottom: 1px solid #bea99d;
}
.name {
  font-size: 21px;
}
.role {
  font-size: 13px;
  display: block;
  font-style: italic;
}
.top-note {
  text-align: center;
  font-size: 13px;
}
nav {
  justify-self: end;
  display: flex;
  gap: 25px;
  font-size: 14px;
}
nav a[aria-current] {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.home {
  padding: 35px;
}
.lead {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: end;
  margin: 25px 0 45px;
}
.lead h1 {
  font-size: 35px;
  font-weight: 400;
  line-height: 1.2;
  max-width: 600px;
  margin: 0;
}
.lead p {
  max-width: 260px;
  font-size: 14px;
  margin: 0;
}
.contact-sheet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.print {
  margin: 0;
}
.print img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4/5;
  object-fit: cover;
}
.print:nth-child(1) img {
  object-position: 30% center;
}
.print:nth-child(3) img {
  object-position: 42% center;
}
.print figcaption {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 14px;
}
.print h2 {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}
.print .sub {
  font:
    12px/1.5 Geist,
    Arial,
    sans-serif;
  margin-top: 5px;
}
.home-end {
  font-size: 14px;
  max-width: 500px;
  margin: 55px auto;
  text-align: center;
}
.case {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 60px;
  padding: 45px 35px;
}
.portrait {
  margin: 0;
  align-self: start;
  position: sticky;
  top: 30px;
}
.portrait img {
  width: 100%;
  display: block;
  aspect-ratio: 4/5;
  object-fit: cover;
}
.portrait figcaption {
  font:
    12px/1.5 Geist,
    Arial,
    sans-serif;
  margin-top: 12px;
}
.case-text {
  padding: 0 25px 0 0;
}
.case-text h1 {
  font-size: 42px;
  font-weight: 400;
  margin: 25px 0 10px;
  line-height: 1.1;
}
.case-text .meta {
  font:
    12px/1.5 Geist,
    Arial,
    sans-serif;
}
.case-text .intro {
  font-size: 21px;
  line-height: 1.5;
  margin: 25px 0 35px;
}
.case-text p {
  line-height: 1.85;
}
.case-text blockquote {
  font-size: 26px;
  font-style: italic;
  margin: 45px 0;
  padding: 25px 0;
  border-top: 1px solid #bea99d;
  border-bottom: 1px solid #bea99d;
}
.session {
  border-top: 1px solid #bea99d;
  margin: 40px 0;
}
.session summary {
  cursor: pointer;
  padding: 18px 0;
  font-size: 17px;
  min-height: 44px;
}
.session p {
  font-size: 14px;
  margin-top: 0;
}
.next {
  font-size: 14px;
  margin-top: 40px;
}
.profile {
  max-width: 1050px;
  margin: 60px auto;
  padding: 0 35px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 90px;
}
.profile h1 {
  font-size: 39px;
  font-weight: 400;
  line-height: 1.15;
  margin: 0;
}
.profile h2 {
  font-size: 24px;
  font-weight: 400;
  margin-top: 40px;
}
.profile p {
  line-height: 1.85;
}
.brief {
  margin-top: 45px;
  border-top: 1px solid #bea99d;
  padding-top: 22px;
}
.brief label {
  display: flex;
  gap: 12px;
  align-items: center;
  min-height: 44px;
}
.brief input {
  accent-color: #754941;
  width: 17px;
  height: 17px;
}
.brief button {
  background: none;
  border: 0;
  border-bottom: 1px solid #754941;
  padding: 12px 0;
  min-height: 44px;
}
.brief-output {
  font:
    14px/1.7 Geist,
    Arial,
    sans-serif;
  white-space: pre-wrap;
  background: #ebe4d8;
  padding: 20px;
  margin: 20px 0;
}
.status {
  font:
    12px/1.6 Geist,
    Arial,
    sans-serif;
}
footer {
  display: flex;
  justify-content: space-between;
  gap: 35px;
  padding: 25px 35px;
  margin-top: 40px;
  border-top: 1px solid #bea99d;
  font:
    12px/1.5 Geist,
    Arial,
    sans-serif;
}
footer p {
  max-width: 550px;
  margin: 0;
}
[hidden] {
  display: none !important;
}
@media (max-width: 800px) {
  header {
    grid-template-columns: 1fr 1fr;
    padding: 22px;
  }
  .top-note {
    display: none;
  }
  .home {
    padding: 22px;
  }
  .lead {
    display: block;
    margin: 20px 0 35px;
  }
  .lead h1 {
    font-size: 29px;
    max-width: 550px;
  }
  .lead p {
    margin-top: 25px;
    max-width: 420px;
  }
  .contact-sheet {
    gap: 16px;
  }
  .print h2 {
    font-size: 16px;
  }
  .print figcaption {
    display: block;
  }
  .case {
    gap: 30px;
    padding: 30px 22px;
  }
  .case-text {
    padding: 0;
  }
  .case-text h1 {
    font-size: 34px;
  }
  .profile {
    padding: 0 22px;
    gap: 45px;
  }
}
@media (max-width: 550px) {
  nav {
    gap: 18px;
  }
  .contact-sheet {
    display: block;
  }
  .print {
    margin-bottom: 38px;
  }
  .print img {
    aspect-ratio: 3/2;
    object-position: center !important;
  }
  .print figcaption {
    display: flex;
  }
  .case {
    display: flex;
    flex-direction: column;
    padding-top: 28px;
  }
  .portrait {
    position: static;
  }
  .portrait img {
    aspect-ratio: 3/2;
  }
  .case-text h1 {
    font-size: 36px;
    margin-top: 20px;
  }
  .case-text .intro {
    font-size: 21px;
  }
  .profile {
    display: block;
    margin-top: 38px;
  }
  .profile h1 {
    font-size: 34px;
    margin-bottom: 35px;
  }
  .case-text blockquote {
    font-size: 24px;
  }
  footer {
    padding: 22px;
    display: block;
  }
  footer p {
    margin-bottom: 15px;
  }
}

```

## Exact site.js specification

```javascript
const form = document.querySelector('#brief-form');
if (form) {
  const output = document.querySelector('#brief-output');
  const copy = document.querySelector('#copy-brief');
  const status = document.querySelector('#brief-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const chosen = [...form.querySelectorAll('input:checked')].map(
      (input) => input.value,
    );
    if (!chosen.length) {
      status.textContent =
        'Choose at least one consideration before preparing the brief.';
      output.hidden = true;
      copy.hidden = true;
      return;
    }
    output.textContent =
      'MAYA REN — EDITORIAL CONSIDERATIONS\n\n' +
      chosen.map((text, i) => `${i + 1}. ${text}`).join('\n') +
      '\n\nA local planning list, not a booking or message.';
    output.hidden = false;
    copy.hidden = false;
    status.textContent = 'Planning list ready. Nothing has been sent.';
  });
  form.addEventListener('change', () => {
    output.hidden = true;
    copy.hidden = true;
    status.textContent = 'Selection changed. Prepare an updated list.';
  });
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.textContent);
      status.textContent = 'Planning list copied.';
    } catch {
      status.textContent =
        'Copy unavailable. Select the visible list and copy it manually.';
    }
  });
}

```
