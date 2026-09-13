# Oren Type — a minimal graphic-design archive

Build an original, complete portfolio for a fictional independent graphic practice named Oren Type. This site is an archive before it is an introduction. Its personality comes from the way names, dates and images are arranged, not from a marketing headline or a decorative interface. The visitor should encounter actual work immediately: four original studies in posters, books and identities, each with its own case page and an explanation of the graphic decisions. The homepage must not use a centered sales hero, a stack of rounded cards, a video background, a testimonial section or a services grid.

## Reference and interpretation

The research reference is Experimental Jetset's online archive at jetset.nl, reached through the DesEngs minimum directory. Observe the directness of an archive that gives project names and dates priority, with ordinary navigation and category controls. Do not copy the studio's identity, projects, artwork, wording, archive scale or distinctive historical content. Oren Type uses a much smaller four-entry index, generous oversized project names, an asymmetrical information column and a row of original print previews. It is a new composition derived from the useful principle that the work can be the primary navigation.

The reference should inform restraint, not imitation. Oren is a fictional practice, and every project is a self-initiated study. State that honestly in the footer and information page. Do not invent a long list of clients to make the archive look established. Four carefully described projects are more credible than dozens of empty links. Every visible entry must open a complete page. The names Public interval, Common measure, Room to read and North of noon are original concepts with their own copy and artwork. Their apparent programme details are fictional, and the case text must not imply that events or publications actually occurred.

## Deliverable and navigation

Create six complete static pages: index.html, public-interval.html, common-measure.html, room-to-read.html, north-of-noon.html and information.html. Use a local stylesheet, one small local script, local font files and local original vector and WebP artwork. No backend, account system or external dependency is needed. All URLs are relative. Every case page links to the index and the next project; the sequence cycles back to the first project. The footer links to information/contact, credits and the enclosing template collection two directories above. The site must remain useful when opened from a nested hosting path.

The header has three desktop regions: a 240-pixel identity column, simple horizontal navigation, and a small date-range note aligned at the far side. Set Oren Type around 20 pixels with Independent graphic practice below it at 14 pixels. Navigation contains Index and Information. The date range reads Selected work / 2024—2026. This is a modest document header, not a logo billboard. On phones the brand and navigation fit in one row, with the date note on its own line. Avoid a hamburger because the navigation contains only two links. Keep all controls at a readable size.

## Typography and material

Use a warm near-white surface, #f7f7f3, and near-black type, #171916. Secondary information uses a readable gray-green, #60675a. Structural rules use #b9bcb5. The primary interface has no accent surface. A blue link-hover color, #2746bb, can provide a small indication of interactivity. Individual artworks carry their own limited ink and paper combinations, which must not leak into the navigation as arbitrary page themes. The portfolio should feel consistent even as a blue poster is followed by a red identity study.

Set the interface in a locally hosted Geist variable font. Body text is 15 pixels with a 1.55 line height, which is sufficiently compact for an archive while remaining readable. Navigation and metadata are 14 pixels. Page headings are usually 24 to 30 pixels and regular weight. The project names in the index are the one large typographic gesture: roughly 25 to 47 pixels depending on viewport. Their tracking can be tight, but words must remain readable and avoid clipping. Do not use all-uppercase navigation, decorative monospaced status labels or a second display family simply to create artificial contrast.

Use square edges and direct dividers. No shadows, glass effects or rounded containers surround the index or essay text. The site should look almost like a well-set document on a large sheet. Preserve a clear 30-pixel desktop edge margin and a 20-pixel phone margin. The wide desktop layout uses a 240-pixel left column and the remaining width for work. At around 800 pixels, stack the columns. The left introduction then becomes a compact paragraph block above the archive. Do not shrink the desktop layout into miniature type to preserve the columns on a phone.

## Index composition

The left column begins with the short phrases Words, placed. Objects, considered. Follow with a concise description of the practice's interest in language and physical form. A smaller note tells the visitor there are four independent studies in posters, books and identities. Keep this text narrow on desktop, around 205 pixels, so it forms a quiet vertical counterweight to the large horizontal project names. It should not remain fixed while the page scrolls. The reading experience must work naturally without scroll-triggered pinning or a custom cursor.

The right area starts with Work index, a count of four projects and a native category select. Options are All, Posters, Books and Identities. Below, show four flat rows with a number, project name, category and year. Use a top rule on every row and a final bottom rule. The entire row is an anchor with a clear accessible name. The category is secondary; on phones it can disappear because the project title and year remain useful. The number column narrows to around 30 pixels, and the title becomes about 29 pixels. Preserve normal wrapping rather than truncating meaningful names.

The filter changes the project rows and visible count using actual metadata. Posters shows Public interval and North of noon; Books shows Common measure; Identities shows Room to read. All restores all four. A filter is an index aid, not a new page, and does not need persistent storage. Below the text index, display four small print previews in a flat row, changing to two columns on phones. These previews are a separate visual overview and can remain visible when the text list is filtered; explain the distinction if necessary through a small heading. Each preview is also a link to its complete project.

Under the previews, add a small note that the archive is deliberately small and each entry contains a brief, graphic decisions and limits. Do not add empty projects to fill a grid. Do not create a fake search field when four categories and four entries are sufficient. A proper native category control is more useful here than a custom animated dropdown. Ensure hidden filtered rows are actually hidden from layout and keyboard navigation, including any CSS display rules that would otherwise override the hidden attribute.

## Project folio structure

Each case uses an asymmetrical two-column folio. The left column begins with a backlink, then the project title, a concise caption, and a definition list for format, year and status. The right column begins immediately with a large portrait artwork. This is intentionally different from an essay portfolio with a centered title above a wide image. The title and image are simultaneous on desktop. On phones, the title and metadata precede the image. The artwork is contained rather than cropped, so all type remains visible. Set explicit dimensions and a suitable neutral background for the figure area.

Under the first artwork, use two essay columns. The left explains The starting point and A graphic decision. The right explains A system, in use and At reading distance. Every paragraph must contain specific reasoning about that project's format. Keep text measures under roughly 470 pixels and leave enough space between the columns. At mobile widths stack the sections in a logical reading order. The second figure shows an alternate rotation and reversed-ink study. Label it accurately as a study rather than pretending it is a photograph of a printed object.

After the second figure, include a small live typesetting exercise. It belongs here because the portfolio concerns typography, not because every page needs a software demo. The exercise has a phrase input capped at 70 characters, a letter-spacing range control, a visible numeric output and a live specimen. The initial phrase is the project's title. The range runs from -0.05 to 0.15 em in steps of 0.01. The specimen uses the same packaged Geist font and must not imply it is a newly designed typeface by Oren. Use safe text rendering and let long strings wrap without overflowing.

A Download specimen note button prepares a plain text document with the current phrase, spacing and a note identifying the demonstration font. It does not download a font, place a print order or contact a server. Display a short prepared message only after creating the Blob and triggering the download link. Revoke the temporary object URL after use. The page concludes with Limits and next questions, followed by an index link and next-project link. Keep these actions as ordinary text links rather than large promotional buttons.

## Artwork direction

Public interval uses a pale paper field with blue ink. The word PUBLIC sits near the top and INTERVAL near the bottom, leaving a meaningful interval for programme information. Use a simple rule through the center and readable small event details. The composition is a poster, not a website hero image. Common measure uses warm beige paper and dark ink, with a stacked title, a horizontal measure and an ordinary sentence about human units. The graphic device should look capable of continuing into a book's internal page system.

Room to read uses a warm light paper and dark red ink. An open rectangular path suggests a room without closing it into a badge. Place the title inside the open shape and practical hours below. The concept should remain legible as one-color printed matter. North of noon uses a cool pale field and near-black ink. Repeat the phrase at several scales and positions to suggest distance without arrows or literal landscapes. Every artwork is original vector geometry and typesetting; do not download or redraw reference studio projects. Keep SVG source files alongside optimized WebP display files.

The alternate studies invert paper and ink and rotate the composition. Their captions must identify this transformation plainly. Do not claim these alternates are different finished commissions or production photos. Use figure captions to explain what the reader is seeing. Main images need meaningful alternative text, while tiny repeated decorative previews may use concise alt text tied to the project. No stock photography, device mockups, fake print shadows or paper-texture noise is required. The work itself provides enough visual interest when its proportions are well considered.

## Information page

The information page is a text-led document offset to align with the archive's right column. Begin with A practice of placing things. Explain that Oren Type is fictional and that the projects explore how titles, books and signs behave. Discuss the idea that a visual device should have a job beyond recognition: a cover rule can become a reading aid, and a title interval can become a place for information. This is original practice writing, not a copied studio manifesto. Keep it concrete and avoid exaggerated claims about cultural impact.

Add working notes as a short list. Start with the words, make systems that survive ordinary tools, read at the scale of use, and preserve evidence of what did not work. Explain that all four projects are self-initiated and fictional, and that no external client artwork is reproduced. The live specimen is a spacing demonstration in Geist, not an original font release. Include an example contact address, studio@orentype.example, as plain text. The demonstration should not send email or suggest the address reaches a real person. A person adapting the template can replace it.

## Accessibility and technical behavior

Use one h1 per page and consistent heading order. Add a skip link, semantic navigation landmarks, figure captions and explicit form labels. The filter uses a select; the specimen uses a text input and native range control. Display the numeric spacing beside the slider so a user does not have to infer the setting from thumb position. The output is a polite live region, but avoid announcing every unrelated piece of the page. Keyboard focus uses a clear blue outline. All text colors must have sufficient contrast against their surfaces. Minimalism is not a reason to make labels faint or small.

Use a small script with two coherent responsibilities: filtering the index and updating/exporting the specimen. Keep user-entered text out of innerHTML. The current phrase can be assigned with textContent, and spacing is constrained by a native range input. When the phrase is empty or whitespace, show a short fallback phrase. No persistent storage is needed. The export is text/plain and includes only the local specimen values. The portfolio should load quickly because its artwork is local and its script is tiny. Avoid adding analytics or network features unrelated to the brief.

## Verification requirements

Check all six direct routes, every index/next/back link, and all local font and image assets. Verify category filtering with actual visible row counts, including the two-poster case. Type a new specimen phrase and confirm the visible specimen changes. Adjust spacing and confirm both computed style and numeric output match. Test a long unbroken phrase to ensure it wraps within the content area. Inspect a desktop index and case folio visually. At 390 pixels, verify all routes have no document overflow and the two-column essay becomes one column. Confirm focus indicators and ordinary browser navigation work.

Do not claim a download completed just because a button was clicked; distinguish a prepared export from an independently opened downloaded file. Do not claim mobile measurements if the browser viewport tool did not actually change innerWidth. Record the true measurement. Syntax, link checks and a successful build are useful, but they do not prove visual quality. The acceptance standard is a restrained, coherent archive with real original case content and a small relevant interaction, not a long checklist of unused features.

## Original project narratives

Use the following original project content in the corresponding case pages. Preserve its explicit limits, rather than replacing those limits with fabricated results.

### Public interval

A poster series for an imaginary programme of open conversations.

Public interval is an independent poster study about the time before a discussion begins. The brief was to make an invitation that could be read from across a room and still reward someone standing close to it.

I used the space between the two words as the organizing device. The title occupies the top and bottom of the sheet, while the practical information sits in the interval. That gap is not an empty area waiting for decoration. It is where the invitation happens.

The series uses two ink colors and a single family. Dates occupy a consistent horizontal line, but the length of the interval changes with the title. This allows a related set of posters without forcing every event into an identical silhouette.

A small line reading “come with a question” gives the programme a conversational tone. It is set at ordinary reading size, not used as an ornamental micro-caption. The design works in a monochrome version because position carries the hierarchy before color does.

This is a self-initiated print concept. No event took place and no organizer commissioned the work. The next useful test would be a full-size print viewed at several distances, with particular attention to the date line.

### Common measure

A small reader about ordinary systems of measurement.

Common measure is a fictional reader about the units people use without thinking: a pace, a handful, a page, an afternoon. The project studies how a book can move between precise notation and less precise human language.

I set a stable running measure and allowed the chapter titles to interrupt it. The interruptions are occasional and purposeful. They mark a change in scale, from the body to the room to the city, without requiring a different graphic language for every chapter.

The cover uses a long rule that stops before the edge of the sheet. Inside, the same rule becomes a separator between a definition and an example. A device introduced on the outside therefore has a job to do in the reading experience.

Page numbers are placed near the text rather than at the far corner. This makes them useful during a discussion, when someone is looking for a passage rather than admiring the book as an object. The margins provide enough room for a handwritten note.

The reader is a concept with original sample text. The displayed spreads are layout studies, not a published edition. Paper choice and binding would need a physical dummy before production decisions could be made.

### Room to read

An identity exercise for a fictional neighborhood reading room.

Room to read imagines a small public space with shelves, tables and a weekly reading circle. The identity needed to work on a window, a folded schedule and a sign that could be made without specialist equipment.

The word room becomes a frame without becoming a box. I aligned the letters to an open rectangle and left one side implied. The device suggests an invitation rather than a sealed institution. It remains readable when reproduced in one color.

A fixed set of horizontal positions connects the name, hours and programme titles. The system can be typeset in a basic document editor. The point is to make consistency available to the people running the space, not only to a designer with the original files.

The smallest application is a shelf label. It carries the same open-frame logic but omits the full name, because a label should help someone find a book rather than repeat the identity. Scale changes the amount of information, not just the size of the mark.

This is an original fictional identity exercise. There is no claim of work for an existing reading room. A future test would involve making the schedule with ordinary office tools and checking whether the system survives that change in author.

### North of noon

A typographic field study in direction, repetition and distance.

North of noon began as a phrase in a notebook rather than a commission. I wanted to see whether repetition could create a sense of direction without arrows, maps or a literal horizon.

The words repeat at three scales. The smallest line is not a caption; it is a distant occurrence of the same phrase. Reading becomes a movement through the sheet, with the eye traveling between near and far rather than following one centered title.

Each variation preserves the order of the words but changes their alignment. One uses a strong left edge, another separates the words across the page, and a third compresses them into a narrow column. The family resemblance comes from rhythm rather than a fixed template.

The spaces between letters were adjusted for the printed scale. At small sizes, the phrase needs openness; at large sizes, the same spacing can feel loose. The specimen control on this page lets a visitor observe that relationship with their own short phrase.

This is a personal typographic experiment with no client or public campaign. The work is shown as a process study. The exported specimen is a plain text note of the visitor’s settings, not a font file or a commercial print order.
