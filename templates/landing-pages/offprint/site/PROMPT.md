# Offprint — complete editorial publication and edition shop

Create Offprint, an original design and culture magazine concept with a complete reading experience and a small publication shop. This is a substantial eleven-page website, not a single editorial landing page. The visitor should be able to discover a story through photography, browse a categorized archive, search by subject, read six complete original essays, change reading preferences, save stories for later, inspect an issue, choose a publication format, and build a local edition selection. The publication must feel independent-minded and visually confident without pretending to be an established real magazine.

The brand is Offprint. Its voice is curious, precise and unhurried. Its interests are spaces, objects, culture and ideas. The six essays explore a creative room, the use of colour, ordinary objects, the spaces between buildings, an open book, and the practice of looking again. They are reflective editorial writing created for this project. They are not copied interviews, reported profiles, scientific findings, or statements attributed to real contributors. Do not invent authors, circulation figures, awards, press mentions, publication partnerships or testimonials.

## Research and reference interpretation

The primary live reference is Friends of Friends at https://www.freundevonfreunden.com/, also reached through https://www.friendsoffriends.com/. It was discovered in Minimal Gallery's editorial category at https://minimal.gallery/tag/editorial/ and its listing at https://minimal.gallery/friends-of-friends/. Inspect the actual source, not just the directory thumbnail. The homepage and a long-form story, The Poetry of Reduction: Inside the Mind of OLDER Studio, were directly inspected in the browser. The homepage was checked again when this work resumed, confirming its current story archive and navigation.

The observed home page has a compact white navigation bar, an extremely prominent photographic lead, a large headline placed over the image, subject and location metadata, and a sequence of image-led story groups. Its hierarchy alternates lead stories, smaller editorial cards, media rails and broad feature invitations. The page provides routes into a story archive and subject areas rather than treating every card as an isolated promotional block. Its footer includes a newsletter and practical publication links.

The observed long-form story uses a large coloured opening composition, title and category information, visible writing and photography attribution, an opening passage, and a lengthy sequence of text and photography. Images interrupt the reading rhythm at deliberate intervals. The story retains the site's compact navigation and finishes with further editorial context. The research establishes the importance of a complete reading destination, varied image scale, clear metadata and a strong relationship between discovery and long-form content.

Do not copy the reference's name, monogram, photographs, article text, contributor identities, location claims or implementation code. Exact animation timing, internal search ranking, content-management system and authenticated features were not inspected. Offprint's local reading list, focus mode, edition bag and download behavior are original product decisions. The publication shop is an original extension of the concept, not a claim about a Friends of Friends checkout. State observed source behavior and inferred design choices separately in the research notes.

Offprint must be distinctly different from a traditional serif newspaper layout and from an art-print store. Use a compact sans-serif wordmark and a photo-led editorial opening rather than a huge newspaper masthead. Its commerce concerns one magazine issue in three formats, not a catalogue of decorative artwork. Original illustrations accompany the essays and cover; they are not separate products. The reading archive remains the center of the experience, and all six essays are readable in full without payment.

## Identity, typography and visual direction

The wordmark is offprint in a confident lowercase sans-serif, followed by a small directional arrow. Use local Geist variable for the identity, navigation, headings, labels, controls, prices and editorial summaries. Use system Georgia for article body copy and selected italic phrases. This combination should feel like a contemporary design publication: graphic and direct in its headlines, comfortable and deliberate when reading. Do not use a decorative serif masthead, an imitation newspaper texture, or a generic magazine logo borrowed from another brand.

The main surface is near-white #f9f9f5, with dark green-black #202320 ink. Use a coral-orange #e85c32 newsletter band, a pale blue #c8d8e3 issue stage, acid-pale green #d8ec78 for a reading feature, and muted peach and lilac category surfaces. Colour is structural: it distinguishes editorial chapters and article openers. It should not appear as a decorative gradient behind every section. The photographic hero may have a functional dark shade to maintain headline contrast.

Readable typography is a hard requirement. Actual text and controls must be at least fourteen pixels, including mobile. Secondary labels may be twelve pixels or larger, but the implementation should prefer fourteen unless a clear exception is justified. Story descriptions and supporting marketing paragraphs are sixteen pixels. Article prose is approximately twenty pixels on desktop, nineteen on mobile, and grows when the reader chooses the larger setting. Never shrink a desktop composition until the reader must zoom to understand it. Reflow the layout instead.

Use large sans-serif headlines with close but not crushing tracking. Body text has a generous line height and a readable column width. The article body should generally remain around seven hundred to seven hundred and sixty pixels wide on desktop. Its line length is more important than filling the screen. Paragraph spacing must make the essay's argument easy to follow. A drop cap may distinguish the opening paragraph, but should not interfere with the first line or collide with the following text at mobile widths.

The layout is flat and editorial. Product or story cards do not require rounded white shells. Images, captions, titles and text form the unit. Fine rules organize archive controls, story lists and article sections where useful. Use sharp rectangular buttons and small restrained interactions. Avoid piles of badges, fake counters, decorative status dots, promotional urgency, or cards nested within cards. The site should look designed around reading and imagery rather than assembled from generic marketing components.

## Complete route map

Generate index.html, stories.html, reading-list.html, about.html and shop.html. Generate six full article routes: room-for-the-unfinished.html, colour-without-permission.html, ordinary-objects.html, city-between-buildings.html, books-that-stay-open.html and practice-of-looking.html. Every page contains a shared header, footer, search dialog, edition bag dialog and accessible skip link. The article routes have an additional reader-control bar and reading-progress treatment.

All links must work under a nested demo folder. Use explicit index.html for home navigation rather than relying on directory fallback. The header offers Stories, Spaces, Objects, Editions and About. The subject links open stories.html with a validated category parameter. Header utilities open search, the saved reading list and the edition bag. On mobile, the main navigation becomes a real menu with an expanded state. The edition bag remains accessible, and the reading list remains reachable through the footer and archive save actions even if the compact header omits its text link.

The footer uses neutral product language and a Template library link to ../../. Do not include public model-provider or deployment-service branding, favicon links, or promotional badges for the tools used to build the website. Credits should preserve image and font licenses, reference disclosure and original-artwork attribution. Provider-neutral presentation does not mean hiding the fictional nature of the publication or falsely claiming that illustrative images document a reported story.

## Homepage composition and narrative

Begin with the compact header above a full-width photographic lead. The image shows a light-filled creative workspace and should occupy most of the first viewport. The headline Where ideas take up space sits low on the image, aligned to a consistent left inset, with a small category label above it. A short description and Read the story destination sit beneath. The entire lead image links to the original essay about an unfinished creative room. Use a dark gradient only where necessary to preserve the white text against the photograph.

The hero image is local hero.webp, with explicit dimensions and high fetch priority. It enters with a subtle scale settle and opacity transition, not a loading screen. All navigation is available immediately. At phone width, crop the image intentionally and let the title wrap into a few large readable lines. Keep the story link visible. Do not preserve a desktop text arrangement by reducing the title or description to miniature sizes.

Below the lead, include a slim editorial caption line that identifies the current edit and the publication's subjects. Follow with A fresh perspective, a three-story group combining two original graphic illustrations with a city photograph. Each card has a real article link, subject, computed reading time, title, description and Save action. The card image can reveal a simple arrow on hover, but touch and keyboard users must still understand it is a link. The Save action must remain separate from the article link so it does not accidentally navigate.

Next create a broad split feature for Books that stay open. One half is pale green with a large original statement and a clear story destination; the other is a substantial library photograph. This should feel like an editorial spread, not a small card. Follow it with four flat topic panels for Spaces, Objects, Culture and Ideas. Each panel has its own restrained colour, short description and archive link. The panels may rise a few pixels on hover, but they should not animate endlessly.

Then use a large architecture photograph as the backdrop for The practice of looking again. The typography and image should have a different relationship from the opening hero, creating another change of pace. A final editorial section pairs a short note about considered reading with a compact list of related stories. Add a publication teaser showing the original Issue 01 cover as a physical-looking paper object on a pale blue stage. It links to the shop, while the essays remain freely accessible. Finish with the coral newsletter demonstration and dark typographic footer.

## Archive, search and saved reading

The archive opens with a large graphic introduction and a visible count of six original stories. Beneath it, provide category filters for All stories, Spaces, Objects, Culture and Ideas. Include a native sort select for newest, oldest, shortest read and alphabetical order. Add a labelled search input within the archive. Search and category selection must combine correctly, and sorting must preserve the active filter. A live count reports the number of matching stories.

Read a valid category query parameter at load. Ignore unknown categories rather than hiding every story. Match search text case-insensitively against the article title, deck, category, short label and section headings. Do not inject the user's query into HTML. All result markup can be generated from the known article dataset. When no stories match, display a helpful empty state and a Show all stories action that clears the query and category while retaining a predictable archive order.

The global search dialog uses the same matching function. It has a large invitation, a visible close button, a labelled input, a result count and real linked results with small images. Open it with the header utility and focus the input. Use a native dialog and capture-phase Escape handling so the search input cannot consume Escape and leave the modal unexpectedly open. Close should restore normal page interaction. Do not add an external search provider or transmit queries.

Save actions add or remove article identifiers from a local reading list. The same saved state appears on homepage cards, archive cards, article controls, related stories and the saved-list page. The header count reflects the number of distinct stories. Repeatedly saving a story must not create duplicates. Removing a story from the saved page immediately updates the grid and count. The empty state provides a meaningful route back to the archive.

Persist the reading list and reader settings under offprint-reading-v1. Validate the stored object and accept only identifiers that exist in the current article dataset. Boolean settings should be restored only when their value is actually true. Corrupt JSON falls back to an empty list and default settings. If local storage is unavailable, retain a working in-memory visit and explain that the selection cannot persist. Never store email addresses or arbitrary user-supplied HTML in this record.

## Long-form article design

Each article opens with a substantial split composition. The title side uses a category-specific background, a small subject label, a large original heading, a deck, an honest Offprint writing attribution, an illustrative publication date and computed reading time. The image side contains the corresponding photograph or original graphic. This echoes the reference's editorial depth without copying any article or contributor. The article's actual h1 is the only h1 on that page; the shared wordmark is an ordinary link.

Below the opener, provide a reader bar with a route back to all stories, Save, Larger text, Focus view and Copy link. These are functional controls. Larger text toggles the reading-size variable and changes its own label to a clear way back. Focus view hides the contents rail, related-story section, newsletter and footer while widening the useful reading area within a sensible maximum. It does not remove the reader controls or trap the user in a special mode. Settings persist across article navigation but must not hide ordinary archive or shop content.

The article body has four complete titled sections, eight substantial paragraphs, a pulled sentence from the original essay, and a large supporting image after the second section. The side contents rail links to all four section anchors. On mobile, this rail becomes a compact in-flow table of contents above the prose rather than a narrow sticky sidebar. Anchored headings must remain visible below the sticky navigation and reader bar. The inline image has a caption explaining that it is illustrative and that provenance is available.

Use the exact original essays in the supplied data. Do not replace them with repeated generic paragraphs or summaries. The room essay examines space for unfinished work. The colour essay considers personal preference and small reversible experiments. The object essay looks at use, wear and ordinary actions. The city essay examines pauses and edges between buildings. The books essay explores reading without a completion metric. The looking essay offers a modest practice of describing before judging. These are independent reflective arguments, not six variations of the same text.

Compute the word count from article paragraphs and derive reading time using a stated estimate such as one hundred and eighty words per minute, with a three-minute minimum. The displayed word count is factual within the local dataset. Do not invent a popularity score or pretend the reading-time estimate measures the current visitor. A thin progress line may follow document scroll through native CSS scroll-driven animation. Treat it as a convenience, not an exact comprehension measure, and hide nonessential motion for reduced-motion preferences.

At the end, provide a Save action and a route to more stories in the same category. Related cards link to other complete essays. Copy link uses the browser clipboard when available and gives a clear fallback when unavailable. It does not send the link to another person, open a messaging service or create a social post. The interface should support deliberate reading rather than continually interrupting it with conversion prompts.

## Publication shop and local edition bag

The shop presents one original issue, Issue 01: A different point of view. Its opening composition pairs the large original cover with a substantial description and a route to the formats. The cover uses Offprint's graphic language: pale green paper, dark type, pale blue, coral and forest-green geometry. Preserve the SVG source and a WebP derivative. The cover must not imitate a real publication's artwork or redistribute a photograph without appropriate licensing.

Offer three illustrative formats: Print edition at twenty-eight dollars, Digital reading copy at nine dollars, and Print plus digital at thirty-two dollars. The print description is a concept for a sixty-four-page, soft-cover magazine at one hundred and seventy by two hundred and forty millimetres. These are design specifications, not a manufactured inventory claim. The digital option explicitly says no file is delivered by the demo and links readers toward the freely available online essays. The pair is a sample bundle, not an actual promotion.

Each format card includes a title, meaningful explanation, a short list of format details, price and Add action. The page continues with a six-story contents list linking directly to every essay, followed by a clear publication-context note. Do not create a paywall or withhold the original essays behind the bag. The shop demonstrates a complete selection interaction while keeping the editorial work available.

The edition bag is a separate native dialog from search. Its lines contain the original cover thumbnail, format name, unit price, quantity controls and Remove. Clicking Add increases a matching format's quantity rather than duplicating the line. Quantities range from one to nine. Decrementing from one removes the line; incrementing at nine is disabled. The visible header counter is total units, while the reading-list counter remains distinct stories. Do not confuse these two independent collections.

Store only known edition identifiers and bounded integer quantities under offprint-editions-v1. Derive prices from the current edition data rather than trusting stored prices. Validate restored values and ignore unknown formats. Update the subtotal after every change. The empty state links back to the shop. A filled bag offers Download selection, which creates a plain-text file with formats, quantities, unit prices and a sample subtotal. Revoke the Blob URL after the download begins. Include a sentence stating that no order, payment or delivery was submitted.

There is no checkout, subscription, address form, payment field or delivery calculation. Do not use a button that implies a purchase happened. The edition selection is an interactive commerce demonstration, and that limitation should be clear where the user makes a selection. Local storage failure must not crash the page or disable reading. The bag can continue to work for the current visit.

## About page, forms and truthful content

The about page is a complete editorial destination with a strong graphic opening, an original note about the publication, a large workspace photograph, three editorial principles and practical questions. Explain that Offprint is a fictional journal concept and that the essays are original project writing. Describe its attention to ordinary things without presenting invented reporting credentials. The principles concern looking closely, keeping a question open and making room for the reader.

The newsletter appears as a clear visual close to ordinary pages. It uses a labelled email input and native required email validation. Submitting displays a local confirmation and resets the field. The message explicitly states that no address was submitted. Do not persist the address, send a network request or pretend a mailing-list subscription was created. The form is a demonstration of interaction and layout only.

Use licensed Unsplash photography for the workspace, architecture, books, interior, city and studio images. Exact photo identifiers and local filenames belong in assets/provenance.json. The license is https://unsplash.com/license. Images are illustrative visual companions, not documentary evidence about the essays. Original colour, object and issue-cover illustrations should be identified separately. Include the local Geist font and its SIL Open Font License text. No reference-site images, interviews or trademarks are redistributed.

## Accessibility, responsiveness and implementation

Every actual content or control label remains at least fourteen pixels in the final implementation, with sixteen-pixel supporting copy and larger article prose. Never use font-size zero to hide the only accessible name; when an icon replaces visible text, retain a meaningful button name. Provide visible focus treatment, one h1 per page, coherent heading levels, semantic navigation, real buttons, labelled inputs, native selects and native dialogs. Saved states use aria-pressed, menu state uses aria-expanded, and count or confirmation changes use appropriate live regions.

At 390 pixels, all eleven routes must fit without horizontal document overflow. The home lead remains image-led; story grids become a readable single column; topic tiles can remain two columns only if the text and controls fit naturally. The article opener stacks image and title. The contents rail moves into the flow, the reader bar wraps, and the edition bag remains fully usable through its own vertical scrolling. The issue cover stays large enough to read as a publication object. Do not crop control text or rely on horizontal page panning.

Motion is restrained and purposeful: a hero image settle, a slight card-image enlargement, a small topic-panel lift, an issue-cover rotation response and short modal transitions. Native CSS handles the reading-progress line. All decorative transitions respect reduced motion. Content should be present even when animation support is absent. Avoid perpetual marquees, autoplay carousels, simulated typing and fake loading states that delay reading.

Use a small static build architecture in scripts/offprint. The builder exports buildOffprint() and returns an object containing prompt. Generated pages and assets live in public/demos/offprint, and the public prompt is written to public/prompts/offprint.md and duplicated beside the demo. Append exact original article data and the complete interaction code under the required Reference interaction handler heading. Keep all fonts and images local. Do not edit shared catalog, router, validator or deployment files as part of this category implementation.

Before handoff, run scoped lint, syntax checks, local-link checks and browser flows. Verify category query loading, combined category and search filtering, sort order, no-results reset, save persistence, removal and empty reading list, article text-size and focus settings, search Escape dismissal, newsletter confirmation, all three issue formats, quantity changes, bag persistence and download execution. Inspect desktop and phone screenshots, measure overflow, and check the actual rendered font sizes. Report any untested limit honestly. A finished implementation should reward both a quick browse and a complete reading session, while remaining clear about its fictional publication and local-only commerce scope.


## Exact original article data

```json
[
  {
    "id": "room-for-the-unfinished",
    "title": "A room for the unfinished",
    "dek": "Why the most interesting creative spaces leave a little room for things that have not found their form.",
    "category": "Spaces",
    "image": "hero",
    "secondary": "studio",
    "color": "#d8e1df",
    "date": "2026-09-08",
    "label": "THE CREATIVE ROOM",
    "quote": "A useful room does not have to explain itself all at once.",
    "sections": [
      {
        "title": "Before the photograph",
        "paragraphs": [
          "Imagine a room just before someone makes a photograph of it. A chair moves a few inches. A cable disappears behind a table. Three objects become two. The room is not necessarily less truthful after these adjustments, but it has become a different kind of thing: an image of a room, organised for a single point of view. The work of living there is temporarily suspended.",
          "This is not an argument against a beautiful photograph. Images help us notice relationships we might otherwise miss. But they can also make a working space seem like a finished proposition, as though the right arrangement of shelves and lamps could resolve the uncertainty of making something. The most useful room may be the one that remains a little unresolved."
        ]
      },
      {
        "title": "The value of an open surface",
        "paragraphs": [
          "An empty part of a table is an invitation. It can hold a drawing, a conversation, a broken object, or nothing at all. Once every surface has been assigned a permanent role, there are fewer places for an unexpected activity to begin. A room can be carefully considered and still preserve this kind of vacancy. In fact, leaving space often requires more restraint than filling it.",
          "The unfinished does not have to mean chaotic. A tray can gather loose tools without disguising them. A shelf can hold prototypes at different stages. A wall can carry a drawing that is not ready for anyone else's opinion. These small permissions make the room a partner in the process rather than a judge of its progress."
        ]
      },
      {
        "title": "Objects that can change their minds",
        "paragraphs": [
          "A simple stool can become a seat, a side table, or a temporary stand for a wet painting. A light that moves easily can follow the work instead of dictating where the work must happen. Furniture with a narrow job description asks the room to remain predictable. More adaptable objects allow the space to change without a complete redesign.",
          "This suggests a different way to evaluate an interior. Instead of asking only whether the room looks coherent, ask how many different days it can accommodate. Can two people work without facing each other? Can a project remain out overnight? Is there somewhere comfortable to stop? These are modest questions, but their answers shape the feeling of being there."
        ]
      },
      {
        "title": "Leave a little unclaimed",
        "paragraphs": [
          "The temptation is to solve the room once and for all. Choose the palette, buy the final chair, place the last object, and be done. Yet a room that is used will continue to change. Books arrive. Habits shift. A patch of afternoon light becomes more valuable than the original floor plan predicted. A finished interior is often only a photograph taken at a convenient moment.",
          "Perhaps the better ambition is a room with a clear character and a loose grip. Give the essential things a good place. Make the everyday actions easy. Then leave something unclaimed: a wall, a corner, a stretch of table. The next idea may need somewhere to land before you know what it is."
        ]
      }
    ],
    "words": 486,
    "minutes": 3
  },
  {
    "id": "colour-without-permission",
    "title": "Colour without permission",
    "dek": "A small argument for choosing the colour you cannot quite explain.",
    "category": "Ideas",
    "image": "colour",
    "secondary": "interior",
    "color": "#d8ec78",
    "date": "2026-09-06",
    "label": "WAYS OF SEEING",
    "quote": "A colour can belong to a room before it belongs to a plan.",
    "sections": [
      {
        "title": "The difficult favourite",
        "paragraphs": [
          "There is often a colour we like in private and hesitate to use in public. It might be too sharp, too sweet, too close to something we remember from childhood. We can imagine it on a postcard but not on a wall. Asked to explain it, we reach for a practical objection: it will be hard to match, difficult to live with, impossible to take seriously.",
          "Sometimes those objections are useful. A colour changes under different light, and a large surface is a different proposition from a small sample. But sometimes the explanation is simply a way of delaying a choice that feels personal. A room can become very tasteful while quietly excluding everything its occupant likes most."
        ]
      },
      {
        "title": "Start smaller than certainty",
        "paragraphs": [
          "Choosing a strong colour does not require a dramatic gesture. A painted shelf edge, a bowl, a sheet of paper pinned above a desk: these are enough to test a relationship. Live with the colour through a few ordinary days. Notice it in the morning and when the light is low. See whether it continues to offer something after the first excitement fades.",
          "The experiment works best when it remains reversible. There is no need to turn a small preference into a total identity. A bright object can sit among quieter ones without recruiting the whole room to its cause. It may be more interesting as an exception, a note that changes the way the surrounding colours are heard."
        ]
      },
      {
        "title": "A relationship, not a rule",
        "paragraphs": [
          "Colour advice often arrives as a system: a proportion, a wheel, a reliable number of tones. Systems can help us begin, but they do not know the particular green outside a window or the faded red of a book that has been in the family for years. The room is already full of relationships before a palette is formally chosen.",
          "Look for the connections that exist rather than inventing a perfectly matched set. A small ochre shape in a print might make a wooden chair feel warmer. A blue vessel might sharpen the outline of a pale wall. The colours need not be identical. Sometimes a slight disagreement is what gives the arrangement its energy."
        ]
      },
      {
        "title": "Keep the part you cannot explain",
        "paragraphs": [
          "A good room can accommodate more than one kind of reason. Some decisions are practical, some inherited, some accidental, and some simply pleasurable. The colour that makes no sense on a mood board may be the detail that makes the room feel inhabited. It carries a preference that was not selected by committee.",
          "So keep a little room for the difficult favourite. Test it carefully, give it an appropriate scale, and let it remain itself. You do not have to convert every pleasure into a design principle. Sometimes the most honest explanation is that you like looking at it, and would like to keep looking a little longer."
        ]
      }
    ],
    "words": 460,
    "minutes": 3
  },
  {
    "id": "ordinary-objects",
    "title": "The extraordinary ordinary",
    "dek": "A cup, a handle, a place to put your keys. Looking again at the objects that quietly organise a day.",
    "category": "Objects",
    "image": "objects",
    "secondary": "interior",
    "color": "#ead7c3",
    "date": "2026-09-04",
    "label": "OBJECT LESSONS",
    "quote": "Familiarity can make good design almost disappear.",
    "sections": [
      {
        "title": "The object you stopped seeing",
        "paragraphs": [
          "Choose something you used this morning without thinking about it. A cup is a good place to start. Consider where your fingers went, how its weight changed when it was full, and whether you set it down carefully or with confidence. The object participated in the morning without requesting attention. That quiet participation is worth a second look.",
          "We often reserve the language of design for things that announce themselves. A striking chair, an unusual lamp, a building that changes the street. The ordinary object has a different task. It must make sense repeatedly, in distracted hands, on days when nobody is in the mood to admire it. Its success can be measured in how little negotiation it requires."
        ]
      },
      {
        "title": "A sequence of small decisions",
        "paragraphs": [
          "The rim of a cup, the width of a handle, the place where a drawer stops: each detail belongs to a sequence of actions. A handle is not only a shape attached to a surface. It is an invitation to pull in a particular direction with a particular amount of effort. When that invitation is clear, the object seems obvious. When it is confused, we become aware of the design in a less welcome way.",
          "Looking at objects through actions changes the questions we ask. Instead of beginning with style, begin with use. What does the hand need to understand? Where does the object rest between uses? Can it be cleaned without becoming a small project? Does it make the next action easier, or merely decorate the current one?"
        ]
      },
      {
        "title": "The marks of belonging",
        "paragraphs": [
          "An object acquires another layer through familiarity. A scratch tells you which side of the tray is yours. A worn patch on a handle records the usual grip. These marks can be inconvenient, but they can also make an object more legible. It is no longer an anonymous example of a type; it has become this particular thing in this particular life.",
          "Not every sign of wear deserves to be romanticised. A dangerous crack is still a dangerous crack. But neither does every change need to be treated as a failure. Materials have different ways of growing older. Part of choosing an object is choosing the kind of change you are willing to live with."
        ]
      },
      {
        "title": "An exercise in attention",
        "paragraphs": [
          "Try describing an ordinary object without using the words beautiful, minimal, timeless, or iconic. Describe what it does, how it feels, where it catches the light, and what happens when it is put down. The exercise can be surprisingly difficult. Familiar design vocabulary often substitutes for the more precise work of looking.",
          "Then use the object again. There may be nothing to improve. That is a useful discovery too. Attention does not always have to produce a purchase, a redesign, or a new preference. Sometimes it returns a familiar thing to view, and makes the next ordinary action a little less automatic."
        ]
      }
    ],
    "words": 465,
    "minutes": 3
  },
  {
    "id": "city-between-buildings",
    "title": "The city between the buildings",
    "dek": "Doorways, pauses, borrowed shade: the small spaces that turn a route into a place.",
    "category": "Spaces",
    "image": "city",
    "secondary": "architecture",
    "color": "#d4dfeb",
    "date": "2026-09-02",
    "label": "ON FOOT",
    "quote": "A route becomes a place when it offers a reason to pause.",
    "sections": [
      {
        "title": "Look at the intervals",
        "paragraphs": [
          "A street can be described as a collection of buildings, but walking through it reveals another arrangement. There are intervals: the space beside a doorway, the edge of a step, a strip of shade that lasts only an hour. These are not always destinations. They are places where a person can briefly adjust their relationship to the city.",
          "You stop to find a key, wait for a friend, or move out of the path of someone carrying something awkward. The street becomes easier to inhabit when it has room for these small negotiations. An uninterrupted flow may look efficient on a plan, yet the experience of being there depends on the possibility of stepping aside."
        ]
      },
      {
        "title": "The useful edge",
        "paragraphs": [
          "Edges are where many of these possibilities gather. A low wall can offer a temporary seat. A generous threshold can shelter a conversation. A shop window gives a person something to look at while waiting, making the pause feel less exposed. None of these details has to become a spectacle to matter.",
          "The scale is important. A vast empty square and a narrow ledge offer very different kinds of permission. One announces a public space; the other quietly makes an action possible. Both may be useful, but the smaller gesture is easy to overlook because it rarely appears as the main subject of an architectural photograph."
        ]
      },
      {
        "title": "Walk without collecting",
        "paragraphs": [
          "One way to notice these spaces is to take a familiar route without trying to arrive efficiently. Do not make it a hunt for attractive facades. Watch where people pause and where they hurry. Notice the places that seem to invite a small delay, and the stretches where there is nowhere comfortable to stop.",
          "This is an observation exercise, not a complete method for evaluating a neighbourhood. A single walk cannot tell you how a street feels to everyone or at every hour. But it can reveal how much of your own experience comes from details that are neither buildings nor formal public destinations."
        ]
      },
      {
        "title": "A little room in the plan",
        "paragraphs": [
          "The lesson can travel indoors. A corridor can be more than a channel between rooms. An entrance can give someone time to put down a bag before joining a conversation. A workplace can provide a place to stand without blocking the work. These are modest spatial allowances that make daily movement more forgiving.",
          "Perhaps the question is not only how a place looks when empty, but how it accommodates the small hesitations of being human. We change our minds, search our pockets, wait, look back, and stop to talk. A good space has somewhere for those moments to happen."
        ]
      }
    ],
    "words": 424,
    "minutes": 3
  },
  {
    "id": "books-that-stay-open",
    "title": "Books that stay open",
    "dek": "On reading slowly, keeping a page nearby, and letting a book become part of a working life.",
    "category": "Culture",
    "image": "books",
    "secondary": "studio",
    "color": "#e6ddcc",
    "date": "2026-08-29",
    "label": "ON THE SHELF",
    "quote": "A book can be useful long before it has been finished.",
    "sections": [
      {
        "title": "Beyond the finished pile",
        "paragraphs": [
          "There is a particular satisfaction in finishing a book and moving it to the other side of the table. The action makes reading visible as progress. But some books have a different life. They remain open, return to the same page, or wait within reach for a sentence that is needed again. Their usefulness is not well described by completion.",
          "A catalogue, a collection of essays, a book of photographs, a technical manual: each offers its own way of moving through the material. Reading does not always have to be a straight line from first page to last. The form of the book may invite a slower, less orderly relationship."
        ]
      },
      {
        "title": "Keep a page in the room",
        "paragraphs": [
          "An open book changes the space around it. It gives an idea a physical location. You can leave the page beside a drawing, glance at it while making coffee, or point to it in conversation. The page remains available without requiring a search, a login, or a remembered phrase. It is simply there.",
          "This is not a contest between paper and screens. Digital reading has its own forms of access and connection. The point is to notice the particular affordance of a page that stays put. It can become part of the furniture of thought, a temporary reference that asks for no more organisation than a little table space."
        ]
      },
      {
        "title": "Make a useful mark",
        "paragraphs": [
          "The best note is not necessarily the most comprehensive. A short phrase explaining why a passage matters may be more useful later than a perfectly copied paragraph. The note connects the reading to the problem or curiosity that brought you there. Without that connection, a collection of quotations can become another archive that is difficult to enter.",
          "Try leaving a question instead of a conclusion. What would this idea change about the thing you are making? Where does the argument become less convincing? Which detail deserves another look? A question gives the next encounter somewhere to begin, and keeps the book in conversation rather than turning it into evidence for a settled position."
        ]
      },
      {
        "title": "Return without obligation",
        "paragraphs": [
          "A book that has been waiting for months can feel like an unfinished task. It may help to release it from that role. Open it where you like. Read a page. Put it away. The value of the encounter does not have to justify the entire object or complete an imagined syllabus.",
          "Some books become companions because they remain slightly ahead of us. A passage that once seemed obscure becomes useful after a different experience. An image changes when seen beside a new project. Leaving a book unfinished can sometimes preserve the possibility of meeting it again as a different reader."
        ]
      }
    ],
    "words": 433,
    "minutes": 3
  },
  {
    "id": "practice-of-looking",
    "title": "The practice of looking again",
    "dek": "A field guide to noticing what familiarity has edited out.",
    "category": "Ideas",
    "image": "architecture",
    "secondary": "colour",
    "color": "#edbd9f",
    "date": "2026-08-25",
    "label": "SMALL PRACTICES",
    "quote": "Attention is not always a search for something new.",
    "sections": [
      {
        "title": "Begin with what is already there",
        "paragraphs": [
          "Newness is an efficient way to attract attention. A different object, an unfamiliar street, a surprising image: each interrupts the pattern of an ordinary day. But attention can also move in the opposite direction, returning to something so familiar that it has almost disappeared. The challenge is not finding a new subject. It is finding a new question.",
          "Choose a doorway you pass every day. Look at the thickness of its frame, the position of the handle, the way the surrounding wall meets the floor. These details have been present all along. What changes is the amount of time you allow them before deciding that you already know what they are."
        ]
      },
      {
        "title": "Describe before judging",
        "paragraphs": [
          "Judgment arrives quickly. We like a thing, dislike it, or assign it to a category that seems to explain it. Description is slower. It asks for the particular shape of a shadow, the distance between two objects, or the direction in which a surface reflects light. It postpones the convenient summary long enough for something else to become visible.",
          "A notebook can help, but the exercise does not require an attractive record. Write a few plain sentences. Avoid adjectives that could apply to a hundred other things. If the description feels difficult, stay with the difficulty for a moment. It may be showing you where a familiar label has been doing the work of observation."
        ]
      },
      {
        "title": "Change one condition",
        "paragraphs": [
          "Look from a lower position. Return at a different hour. Stand far enough away that the details gather into a pattern, then come close enough for the pattern to break apart. Changing one condition can reveal how much of an object belongs to the relationship between it and the observer.",
          "The same practice can be used with work in progress. Print a screen at a different scale. Read a paragraph aloud. Place a colour beside something unexpected. These changes do not automatically improve the work, but they make it less easy to see only what you intended to make. They create a small distance from your own assumptions."
        ]
      },
      {
        "title": "Let noticing be enough",
        "paragraphs": [
          "There is pressure to make every observation productive. A walk should produce photographs, a notebook should produce ideas, and an idea should become a project. Sometimes this is useful. Sometimes it narrows the attention to things that can be collected and displayed. The world becomes raw material for the next output.",
          "Try an interval of looking that does not need to become anything. Notice a reflection and leave it where it is. Follow the rhythm of a row of windows without taking a picture. The practice is complete when you have paid attention. What remains may be less tangible than a photograph, but it can change the way the next familiar thing appears."
        ]
      }
    ],
    "words": 447,
    "minutes": 3
  }
]
```

## Reference interaction handler

```javascript
(() => {
  'use strict';
  const articles = JSON.parse(
    document.getElementById('offprint-data').textContent,
  );
  const byId = new Map(articles.map((article) => [article.id, article]));
  const storageKey = 'offprint-reading-v1';
  let saved = new Set();
  let settings = { large: false, focus: false };
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (stored && typeof stored === 'object') {
      saved = new Set(
        Array.isArray(stored.saved)
          ? stored.saved.filter((id) => byId.has(id))
          : [],
      );
      settings = { large: stored.large === true, focus: stored.focus === true };
    }
  } catch {
    saved = new Set();
  }
  let toastTimer;
  function notify(message) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }
  function persist() {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ saved: [...saved], ...settings }),
      );
      return true;
    } catch {
      return false;
    }
  }
  function card(article) {
    return `<article class="story-card"><a class="card-image" href="${article.id}.html"><img src="assets/${article.image}.webp" alt="${article.title} illustrative editorial image" width="1400" height="1000"><span class="read-arrow" aria-hidden="true">↗</span></a><div class="meta"><a href="stories.html?category=${article.category}">${article.category}</a><span>${article.minutes} MIN READ</span></div><h3><a href="${article.id}.html">${article.title}</a></h3><p>${article.dek}</p><button data-save="${article.id}" aria-pressed="true" aria-label="Remove ${article.title} from reading list">Saved ✓</button></article>`;
  }
  function renderSaved() {
    document.querySelectorAll('.saved-count').forEach((node) => {
      node.textContent = saved.size;
    });
    const grid = document.getElementById('saved-grid');
    if (grid) {
      grid.innerHTML = [...saved].map((id) => card(byId.get(id))).join('');
      document.getElementById('saved-empty').hidden = saved.size > 0;
      document.getElementById('clear-reading').hidden = saved.size === 0;
    }
    document.querySelectorAll('[data-save]').forEach((button) => {
      const selected = saved.has(button.dataset.save);
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = selected ? 'Saved ✓' : 'Save +';
      button.setAttribute(
        'aria-label',
        selected
          ? `Remove ${byId.get(button.dataset.save).title} from reading list`
          : `Save ${byId.get(button.dataset.save).title}`,
      );
    });
  }
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-save]');
    if (!button) return;
    const id = button.dataset.save;
    if (!byId.has(id)) return;
    const adding = !saved.has(id);
    if (adding) saved.add(id);
    else saved.delete(id);
    const stored = persist();
    renderSaved();
    notify(
      stored
        ? adding
          ? 'Saved to your reading list.'
          : 'Removed from your reading list.'
        : 'Available for this visit. Browser saving is unavailable.',
    );
  });
  document.getElementById('clear-reading')?.addEventListener('click', () => {
    saved.clear();
    persist();
    renderSaved();
    notify('Your reading list is clear.');
  });
  renderSaved();
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = document.querySelector('header').classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
  });
  const search = document.getElementById('search-dialog');
  function matches(article, query) {
    return `${article.title} ${article.dek} ${article.category} ${article.label} ${article.sections.map((section) => section.title).join(' ')}`
      .toLowerCase()
      .includes(query);
  }
  function renderSearch() {
    const query = document
      .getElementById('search-input')
      .value.trim()
      .toLowerCase();
    const results = articles.filter((article) => matches(article, query));
    document.getElementById('search-count').textContent =
      `${results.length} ${results.length === 1 ? 'story' : 'stories'}`;
    document.getElementById('search-results').innerHTML = results.length
      ? results
          .map(
            (article) =>
              `<a class="search-result" href="${article.id}.html"><img src="assets/${article.image}.webp" alt=""><div><p>${article.category} / ${article.minutes} MIN READ</p><h3>${article.title}</h3></div></a>`,
          )
          .join('')
      : '<p>No stories found. Try a different subject or a shorter phrase.</p>';
  }
  document.querySelector('[data-search]').addEventListener('click', () => {
    renderSearch();
    search.showModal();
    document.getElementById('search-input').focus();
  });
  document
    .getElementById('search-input')
    .addEventListener('input', renderSearch);
  document
    .querySelectorAll('[data-close]')
    .forEach((button) =>
      button.addEventListener('click', () => button.closest('dialog').close()),
    );
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key !== 'Escape') return;
      const openDialog = [...document.querySelectorAll('dialog[open]')].at(-1);
      if (openDialog) {
        event.preventDefault();
        openDialog.close();
      }
      if (document.querySelector('header').classList.contains('menu-open')) {
        document.querySelector('header').classList.remove('menu-open');
        menu.setAttribute('aria-expanded', 'false');
        menu.textContent = 'Menu';
      }
    },
    true,
  );
  const archive = document.getElementById('archive-grid');
  if (archive) {
    const initial = new URLSearchParams(location.search).get('category');
    let category = ['Spaces', 'Objects', 'Culture', 'Ideas'].includes(initial)
      ? initial
      : 'All stories';
    const cards = [...archive.children];
    const cardArticle = (node) =>
      articles.find((article) => article.title === node.dataset.title);
    function filterArchive() {
      const query = document
        .getElementById('archive-search')
        .value.trim()
        .toLowerCase();
      cards.forEach((node) => {
        const article = cardArticle(node);
        node.hidden =
          (category !== 'All stories' && article.category !== category) ||
          !matches(article, query);
      });
      document
        .querySelectorAll('[data-filter]')
        .forEach((button) =>
          button.setAttribute(
            'aria-pressed',
            String(button.dataset.filter === category),
          ),
        );
      const count = cards.filter((node) => !node.hidden).length;
      document.getElementById('result-count').textContent =
        `${count} ${count === 1 ? 'story' : 'stories'}`;
      document.getElementById('archive-empty').hidden = count > 0;
    }
    document.querySelectorAll('[data-filter]').forEach((button) =>
      button.addEventListener('click', () => {
        category = button.dataset.filter;
        filterArchive();
      }),
    );
    document
      .getElementById('archive-search')
      .addEventListener('input', filterArchive);
    document.getElementById('sort').addEventListener('change', (event) => {
      const comparisons = {
        newest: (a, b) =>
          cardArticle(b).date.localeCompare(cardArticle(a).date),
        oldest: (a, b) =>
          cardArticle(a).date.localeCompare(cardArticle(b).date),
        shortest: (a, b) => cardArticle(a).words - cardArticle(b).words,
        title: (a, b) => a.dataset.title.localeCompare(b.dataset.title),
      };
      cards
        .sort(comparisons[event.target.value])
        .forEach((node) => archive.append(node));
    });
    document.getElementById('reset-filters').addEventListener('click', () => {
      category = 'All stories';
      document.getElementById('archive-search').value = '';
      filterArchive();
    });
    filterArchive();
  }
  const articlePage = document.querySelector('[data-article]');
  function renderSettings() {
    if (!articlePage) return;
    document.body.classList.toggle('large-text', settings.large);
    document.body.classList.toggle('focus-mode', settings.focus);
    document
      .getElementById('reader-size')
      .setAttribute('aria-pressed', String(settings.large));
    document.getElementById('reader-size').textContent = settings.large
      ? 'Standard text A'
      : 'Larger text A+';
    document
      .getElementById('reader-focus')
      .setAttribute('aria-pressed', String(settings.focus));
    document.getElementById('reader-focus').textContent = settings.focus
      ? 'Exit focus view'
      : 'Focus view';
  }
  if (articlePage) {
    document.getElementById('reader-size').addEventListener('click', () => {
      settings.large = !settings.large;
      persist();
      renderSettings();
    });
    document.getElementById('reader-focus').addEventListener('click', () => {
      settings.focus = !settings.focus;
      persist();
      renderSettings();
    });
    document.getElementById('copy-link').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(location.href.split('#')[0]);
        notify('Story link copied.');
      } catch {
        notify('Copy the story address from your browser to share it.');
      }
    });
    renderSettings();
  }
  document.getElementById('newsletter').addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.querySelector('output').textContent =
      'You’re on the list — in this demo. No email address was submitted.';
    event.currentTarget.reset();
  });
  const editions = [
    { id: 'print', name: 'Issue 01 — Print edition', price: 28 },
    { id: 'digital', name: 'Issue 01 — Digital reading copy', price: 9 },
    { id: 'pair', name: 'Issue 01 — Print + digital', price: 32 },
  ];
  const editionById = new Map(editions.map((edition) => [edition.id, edition]));
  let bag = [];
  try {
    const data = JSON.parse(
      localStorage.getItem('offprint-editions-v1') || '[]',
    );
    if (Array.isArray(data))
      bag = data
        .filter(
          (x) =>
            editionById.has(x.id) &&
            Number.isInteger(x.quantity) &&
            x.quantity > 0 &&
            x.quantity <= 9,
        )
        .map((x) => ({ id: x.id, quantity: x.quantity }));
  } catch {
    bag = [];
  }
  const money = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  function renderBag() {
    document.querySelectorAll('.edition-count').forEach((node) => {
      node.textContent = bag.reduce((n, item) => n + item.quantity, 0);
    });
    document.getElementById('edition-empty').hidden = bag.length > 0;
    document.getElementById('edition-summary').hidden = bag.length === 0;
    document.getElementById('edition-items').innerHTML = bag
      .map(
        (item, index) =>
          `<article class="edition-line"><img src="assets/issue-cover.webp" alt="Offprint Issue 01 original cover"><div><h3>${editionById.get(item.id).name}</h3><p>${money(editionById.get(item.id).price)} each</p><div><button data-edition-adjust="${index}" data-delta="-1" aria-label="Decrease ${editionById.get(item.id).name} quantity">−</button><span>${item.quantity}</span><button data-edition-adjust="${index}" data-delta="1" aria-label="Increase ${editionById.get(item.id).name} quantity" ${item.quantity === 9 ? 'disabled' : ''}>+</button><button data-edition-remove="${index}">Remove</button></div></div></article>`,
      )
      .join('');
    document.getElementById('edition-total').textContent = money(
      bag.reduce(
        (n, item) => n + editionById.get(item.id).price * item.quantity,
        0,
      ),
    );
  }
  function saveBag() {
    try {
      localStorage.setItem('offprint-editions-v1', JSON.stringify(bag));
    } catch {
      notify('Your selection is available for this visit only.');
    }
    renderBag();
  }
  const bagDialog = document.getElementById('edition-bag');
  document
    .querySelectorAll('[data-edition-bag]')
    .forEach((button) =>
      button.addEventListener('click', () => bagDialog.showModal()),
    );
  document.querySelectorAll('[data-edition]').forEach((button) =>
    button.addEventListener('click', () => {
      const id = button.dataset.edition;
      const existing = bag.find((item) => item.id === id);
      if (existing) existing.quantity = Math.min(9, existing.quantity + 1);
      else bag.push({ id, quantity: 1 });
      saveBag();
      bagDialog.showModal();
    }),
  );
  document
    .getElementById('edition-items')
    .addEventListener('click', (event) => {
      const remove = event.target.closest('[data-edition-remove]');
      if (remove) {
        bag.splice(Number(remove.dataset.editionRemove), 1);
        saveBag();
        return;
      }
      const adjust = event.target.closest('[data-edition-adjust]');
      if (!adjust) return;
      const index = Number(adjust.dataset.editionAdjust);
      bag[index].quantity = Math.min(
        9,
        bag[index].quantity + Number(adjust.dataset.delta),
      );
      if (bag[index].quantity < 1) bag.splice(index, 1);
      saveBag();
    });
  document.getElementById('download-editions').addEventListener('click', () => {
    const text = [
      'OFFPRINT — YOUR EDITION SELECTION',
      '',
      ...bag.map(
        (item) =>
          `${editionById.get(item.id).name}: ${item.quantity} × ${money(editionById.get(item.id).price)}`,
      ),
      '',
      `Sample subtotal: ${document.getElementById('edition-total').textContent}`,
      '',
      'Fictional publication shop. No order, payment or delivery has been submitted.',
    ].join('\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'offprint-edition-selection.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify('Edition selection prepared. No order was placed.');
  });
  renderBag();
})();

```
