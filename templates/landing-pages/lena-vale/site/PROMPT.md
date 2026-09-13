# Lena Vale — an independent product designer's quiet portfolio

Build a complete, original minimal portfolio for the fictional product designer Lena Vale. This is a personal collection of considered design studies, not an agency sales page and not a software landing page. The first impression should be an ordinary, confident introduction from a thoughtful person. It should not announce itself with a giant typographic spectacle, a full-screen photograph, a spinning logo, a gradient, a loading sequence or a sentence about changing the future. Keep the interface exceptionally quiet so the visitor can read the work and decide whether the design thinking interests them.

## Reference interpretation and originality

The selected reference is dom.fyi, discovered through the DesEngs directory of super minimal websites. Study the principle of a narrow reading column, a brief introduction and a direct index of projects. Do not copy its personal biography, client names, project names, typography measurements, contact information or brand identity. Lena has a different discipline, three original product concepts, a warmer paper surface, small original interface thumbnails and complete essay-like case pages. The work should feel related to the discipline of minimal personal websites while remaining recognizably its own portfolio.

A portfolio does not become substantial by accumulating marketing sections. Its substance is in the decisions within the work. Every case here must explain the situation, the question, a chosen response, an important detail, a tradeoff and an unresolved next question. Do not add fabricated conversion improvements, anonymous testimonials, prestigious employer logos or awards. Label the projects as independent studies. The fictional nature of the designer should be clearly explained on the information page, without placing a large warning across the visual introduction. Contact uses an example-domain address and must never send a message.

## Deliverable and routes

Deliver five complete pages: index.html, shelf.html, window.html, thread.html and about.html. Every project has its own permanent relative URL and works when loaded directly. Use static HTML, local CSS, a small local JavaScript file and locally packaged artwork. Do not depend on a router, remote font service, external image service or backend. Include a credits file and the font license. All links should remain usable when the folder is hosted below another website's demos directory. The Collection link in the footer leads two directory levels upward to the enclosing library.

The homepage is a narrow list with a human introduction. Shelf is a case about retaining intention in a reading collection. Window is a case about the capacity between calendar events. Thread is a case about handover language and the distinction between acknowledgment and approval. The information page explains working principles, the scope of the studies and the example contact address. A visitor can move through all three cases using Next links and return to the selected-work anchor from any case. Avoid unnecessary menus, tabs or overlays. The complete navigation must remain visible and comprehensible on phones.

## Visual grammar

Use an almost-white warm background, #fcfcfa, with dark olive-gray text, #30332e. Secondary text uses #62685f, which remains readable. Lines are subtle #e1e4dc. The main page wrapper is approximately 724 pixels wide including side padding, centered on desktop. Give it roughly 75 pixels of top padding and 26 pixels of horizontal padding. This creates generous surrounding whitespace without turning the first screen into empty theatre. At smaller widths the wrapper uses about 22 pixels of padding and 35 pixels above the header. The content remains a single column throughout.

Use a locally hosted Geist variable font. Body copy is 16 pixels with a 1.65 line height. Most labels, navigation and captions are 14 pixels. The homepage heading is around 27 pixels, regular or medium rather than bold, with a 1.45 line height and slightly tightened tracking. Case titles may be 32 pixels on desktop and 28 on phones. Section headings are about 19 pixels and do not use all caps. There is no dramatic display font. Hierarchy comes from space, line length, proximity and a few restrained size changes. Preserve normal sentence case in the personal copy.

Links are recognizable through subtle underlines or their position in navigation. Give keyboard focus a clear two-pixel olive outline with comfortable offset. Do not remove the focus indicator to achieve visual cleanliness. Primary navigation can use text without an underline at rest because it is clearly grouped in the header. Project rows are full-area anchors, but the project title and year must remain readable if hover is unavailable. On hover, a thumbnail can rotate very slightly; do not move the entire row or make the title chase the pointer. Reduced-motion preference removes that transition and smooth scrolling.

## Header and homepage

The header places Lena Vale on the left and Work plus Information on the right. The name is a home link. Work points to the homepage's selected-work anchor, including from other pages. Information opens about.html. Keep the header in normal document flow, not sticky. It should leave around 65 pixels before the introduction on a desktop and about 48 pixels on a phone. A visible hamburger would add friction to only two links, so do not introduce one. The name and links must fit within a 390-pixel viewport without wrapping awkwardly or using text smaller than 14 pixels.

The introduction begins with “I design useful things with a little room to breathe.” Set an intentional line break after “things” at common desktop widths, while allowing natural mobile wrapping. Follow with a short paragraph introducing Lena as an independent product designer interested in small decisions that make everyday tools feel considered. A smaller muted note mentions reading, time and the spaces between people. It is personal context rather than a pitch. Do not place a large call-to-action button beneath this text. The next action is naturally the project list immediately below.

After roughly 74 pixels, show Selected independent studies as a small muted section heading. The list contains exactly three rows, each with a 48 by 58 pixel preview, a title and one sentence, and a year with a small directional arrow. The title is medium weight, the description is 14 pixels, and the year remains separate. Divide rows with thin horizontal rules and use about 23 pixels of vertical padding. Do not wrap each row in a rounded card or shadow. On phones, reduce the thumbnail to 40 by 50 pixels and the gap to 13 pixels. Allow descriptions to wrap; do not truncate them into meaningless fragments.

Below the list, add A note on the work. Explain that the pieces are self-initiated studies rather than client launches. Each starts with a small question and follows it through an interface, tradeoffs and something still worth testing. Link to the information page. The footer follows after a substantial but reasonable gap with a fine rule, the period of the studies, Contact, Credits and Collection. It is not a second giant headline. At mobile widths stack the period and links so nothing is crowded. Keep the footer legible rather than fading it until it is ornamental.

## Case-page reading rhythm

Every case uses the same quiet reading framework while retaining its own content and visual material. Start with discipline and year, then project name and one-line purpose, followed by a concise introductory paragraph. A two-column definition list identifies Lena's role and the duration/scope of the independent study. On a phone it becomes one column. The metadata is actual text, not an image. A large original interface artwork follows, filling the reading column. Its caption explains what the viewer should notice rather than merely repeating the project name.

After the first figure, use a narrower text measure of around 590 pixels. Introduce the central question as a heading and explain the context. Follow with The decision and a paragraph describing the chosen approach. Keep paragraphs around a few sentences each; do not make every sentence its own isolated block. The content should be readable as an essay. A person skimming headings can understand the argument, while a person reading every paragraph encounters specific design reasoning rather than abstract adjectives about simplicity, elegance or delight.

Each case includes a small functional comparison of language. It is not a full simulation of the pictured application. The comparison shows the starting wording and the design direction using two native buttons. A selected button has aria-pressed true. Clicking either updates a live text region using textContent, not raw HTML. This lets a visitor inspect a concrete content decision without adding unnecessary product functionality to the portfolio. The initial state shows the design direction. There is no automatic cycling, network delay, saved account state or animation beyond ordinary button feedback.

Continue with Following the detail, a second artwork and caption, The tradeoff, and What I would test next. End with a simple navigation row: All work on the left, next project on the right. Cycle Shelf to Window, Window to Thread and Thread back to Shelf. The next project must have a real page. Keep images within the wrapper and provide dimensions to avoid layout shift. Load the first figure normally and later figures lazily. The cases should remain understandable with images unavailable because the captions and prose describe the decisions.

## Artwork requirements

Create original vector artwork for each project and export optimized WebP versions for the website. The art should look like a considered interface study, not a screenshot borrowed from a real product. Shelf uses a pale green-gray field and a light reading surface. Show a small collection with article titles and saved reasons, then a reading view with a single text column. Window uses a pale blue-gray field and a day view with confirmed events and softer surrounding time. Thread uses warm clay-gray and a handover document with current state, open question and next step. No reference-site artwork is reused.

The art may simplify small body text into lines where the visual intent is the layout rather than the prose, but principal labels should remain actual legible text within the vector. At thumbnail size, the distinction between green reading, blue time and clay handover should be visible without relying on a logo. Avoid photorealistic device frames, glossy phones, floating browser windows or enormous shadows. The illustrated surfaces can have a small radius because they are product studies, while the portfolio itself remains flat and unboxed. Include accurate alternative descriptions and captions outside the image.

## Information page and contact

The information page begins “A little about the way I work.” Explain that Lena is fictional and the portfolio is an original design study. Discuss starting from the words a person uses to describe a problem and finding mismatches between those words and the structure of their tools. Present four working principles as a simple list: make current state clear; support leaving and returning; describe results in language; and keep uncertainty visible. These are not packaged services, pricing tiers or claims of professional credentials. Do not turn this page into a resume with fabricated employers.

Explain which parts of the projects are functional. The wording comparisons work; the pictured applications are visual studies. No customer outcomes or participant research are asserted. The contact section uses hello@lenavale.example and a Copy button. Clicking attempts to copy that exact address and reports Email copied only after clipboard success. If clipboard access is unavailable, display the address in a fallback sentence for manual copying. Never launch an external email client or submit a form automatically. The contact explanation instructs a person adapting the template to replace the example details.

## Accessibility, implementation and verification

Use semantic header, nav, main, article, section, figure, figcaption and footer elements appropriately. Exactly one h1 appears on each page. Add a skip link that is visually hidden until keyboard focus. Use native anchors and buttons so browser navigation and keyboard operation work without custom event emulation. The comparison output is a polite live region. The clipboard result has status semantics. Images have explicit width and height. Decorative thumbnails can have empty alt text because the adjacent linked title provides the accessible name. Main case figures have useful alt text describing their subject.

Keep JavaScript small and specific. Do not add a framework for three comparison controls and one copy action. Read only data attributes belonging to the current component, update text safely, and update the pressed state of both buttons. Do not create persistent storage for temporary comparison choices. This portfolio has no reason to collect analytics, personal information or browser fingerprints. Use relative asset paths, no favicon, and no generator/provider metadata. Preserve the third-party font license and list the design research reference in the credits. The original source artwork should remain available in the portable package.

Test each direct page route. Verify all navigation destinations and image files exist. On a real browser, click both comparison buttons in at least one case and confirm both visible text and pressed state change. Test the clipboard success or fallback honestly. At desktop and 390-pixel phone width, inspect the homepage and a case page, then measure document overflow across all five routes. Verify the metadata stacks and footer links fit. Do not declare a visual quality result solely from syntax checks. Record what was actually inspected and any untested behavior rather than inventing a perfect score.

## Exact original case content

The following project narratives are part of the build brief. Preserve their specificity and honest study framing. They may be edited for line rhythm, but must not be replaced with generic case-study filler or invented success metrics.

### Shelf

A quieter place to keep what you read.

Shelf is a self-initiated study of a familiar problem: saving an article is easy; finding the reason you saved it is harder. I designed a small reading space around that missing context, rather than another endless wall of bookmarks.

What if a saved link remembered your intention?

The starting collection contained essays, recipes, references and half-read interviews. Sorting these by publication date made the archive tidy, but not useful. The important distinction was between something to read, something to use and something to return to. Those are different promises to a future self.

I replaced folder selection at the moment of saving with one optional sentence: “Keep this because…” The sentence stays visible beside the title. It can be changed later without opening a separate metadata panel. Collections still exist, but they become a secondary way of looking rather than a compulsory filing task.

The reading view removes the archive navigation and gives the text a consistent measure. A small return link retains the collection context. Highlights use a quiet underline rather than a large colored block; they do not compete with the original author’s hierarchy. The saved reason appears at the end, when the reader is deciding what to do next.

A free-text reason is slower than a single tap. I kept it optional and left the save action immediately available. This study does not claim that every saved item needs explanation. It asks whether a little context helps the important items survive a large collection.

The most useful change was not a new navigation pattern. It was admitting that “saved” describes an action, not an intention. I would next test how often people return to their own notes after a month, and whether those notes still explain the original interest.

Starting wording: Folder: Miscellaneous

Design wording: Keep this because: a useful way to explain public space.

### Window

Making room between the things on a calendar.

Window is a calendar concept that treats the space between appointments as something worth seeing. It is a deliberately small experiment in planning a day without turning every free minute into another task.

Can a calendar show capacity without demanding productivity?

A conventional calendar makes an unbooked afternoon look empty. In practice, a person may need time to travel, prepare, recover or simply leave something unresolved. I wanted to represent those softer boundaries without assigning them the same visual weight as a meeting.

The central gesture is a soft window around a commitment. A user can add preparation or travel time as a pale extension, while the confirmed event remains crisp. The extension belongs to the event, so moving the meeting preserves the relationship. It is not a second item to manage.

The day view starts with the next meaningful transition rather than midnight. A compact weekly strip provides orientation without shrinking seven full schedules onto a phone. A text summary states the available stretches in plain language. The product avoids a score for how efficiently the time has been used.

Soft boundaries can look like confirmed bookings. I separated them through labels, line treatment and an explicit legend, rather than relying on opacity alone. A shared calendar would need a clear policy for what is private and what is visible; this concept remains a personal planning study.

I learned to design the absence as carefully as the event. A calmer calendar is not one with fewer controls. It is one that can say “this time is available” without implying that it should immediately be filled.

Starting wording: 14:00 — Project review

Design wording: 13:45 prepare · 14:00 review · 15:00 breathing room

### Thread

A handover that explains what happens next.

Thread is a handover concept for small creative teams. It collects the decision, the material and the next action into one readable note. The study focuses on the moment when work changes hands, not on replacing an entire project-management system.

What does the next person need before they can begin?

A handover often arrives as a link followed by several chat messages. The link may be correct while the state of the work remains unclear. Is it ready for review? Is feedback required today? Which part is still uncertain? I mapped these questions into a small repeatable structure.

The note has three parts: current state, open question and next step. Attachments sit beneath the explanation rather than preceding it. The recipient can acknowledge the next step without implying approval of every detail. This makes the response more precise than a generic checkmark.

A narrow history records meaningful changes in plain language. It does not log every keystroke. The current note is always the primary surface; earlier versions are available through a simple disclosure. The interface makes responsibility visible without turning a human conversation into a status dashboard.

A structured note can become another form to fill out. I limited the required content to the next action and let the other fields remain short. The concept is most appropriate for consequential handovers, not for every small message exchanged during a day.

The design became clearer when I stopped treating acknowledgment as approval. A person can confirm that they understand the next step while still disagreeing with a proposal. That distinction is small in the interface and large in the working relationship.

Starting wording: Here is the latest file. Thoughts?

Design wording: Review the opening sequence. The ending is still exploratory.
