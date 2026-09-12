# Margin — A journal of design and everyday culture

## Build the publication

Create a complete six-page responsive editorial website called Margin. Deliver a front page, searchable story archive, about/colophon page, and three full article pages. The publication is a fictional design concept, but its essays must be complete and readable. They are original reflective writing about spaces, observations, and objects. Do not replace article bodies with repeated filler, unsupported news reporting, fabricated interviews, or excerpts that lead nowhere.

The three essays are “A room to think in.”, “The city, one detail at a time.”, and “The pleasure of turning a page.” Use the full manuscripts appended below. Keep their respective categories Spaces, Observations, and Objects. All articles are credited to the Margin editors and dated September 8, 2026. This is a fictional editorial team; do not invent author credentials. Calculate reading times from the actual article body at 200 words per minute, rounded up to at least one minute.

The homepage must feel like a considered publication at first glance. A large serif masthead, a ruled navigation strip, a prominent cover story, smaller secondary stories, an editor's note, and a concise issue index establish the hierarchy. The work is the reading experience. Do not add a generic marketing hero, software mockup, pricing section, client logo strip, contact-sales form, or fake subscription system.

## Research and independence

The publication reference examined for this build is The New by Mr. Cosmos: https://www.framer.com/marketplace/templates/the-new/ . Its live preview is https://creative-plans-151022.framer.app/ . The marketplace listing, live front page, and a linked article page were inspected on September 8, 2026. Useful general principles include complete article routes, clear editorial navigation, category organization, and strong typographic hierarchy.

Margin deliberately has its own design: a warm paper palette, red-brown serif masthead, image-and-story front-page composition, reflective design writing, readable article measure, local reading list, text-size controls, and a print treatment. The reference's condensed all-caps two-line hero, cosmic subject matter, numerical article presentation, images, and text are not copied. No Framer template code or assets are included. This is original HTML implementation informed by research, not a Framer-native remix.

The two licensed architecture photographs come from the existing ProtoSites asset archive and retain their photographer credits. The book still life is an original generated asset previously created for ProtoSites. It is reused honestly as an illustration, not presented as a newly commissioned photograph. Reference attribution does not substitute for independent composition or asset rights.

## Visual identity and layout

Use #f5f0e6 as the paper background, #28241f for primary ink, #736b60 for secondary text, #c9beae for rules, #e9e0d2 for subtle selected surfaces, and #a82f22 for the red-brown editorial accent. The palette should feel like a contemporary printed journal viewed on screen. Use flat surfaces, fine rules, square image edges, and deliberate whitespace. Avoid shadows, nested rounded cards, decorative gradients, or ornamental texture overlays.

Use Georgia or the reader's compatible system serif for the masthead, story titles, essay headings, and body text. Use the bundled Geist variable font for navigation, metadata, controls, and supporting interface copy. This contrast is structural: serif carries editorial voice, sans-serif carries orientation. Do not require an external font request. Body interface text is generally 16px; metadata is secondary and compact. Essay text starts at 18px with approximately 1.85 line-height and can be enlarged by the reader.

The masthead is a large, tightly tracked serif “Margin” with a small issue number 01. It must not use a registration symbol or claim trademark registration. On desktop it can reach roughly 19vw, bounded to a practical size, with a short italic statement at the right: “There’s always another way to look.” On phones, remove that secondary statement and retain a clear, well-proportioned masthead.

Use a centered content width capped near 1440px and desktop gutters around 40px. At smaller widths use 20–25px gutters. The publication's overall rhythm should come from aligned rules, headings, and images. The masthead and navigation establish the top rail; story titles and captions follow the same horizontal boundaries.

## Header and navigation

The edition bar contains a short publication descriptor and Issue 01 — September 2026. Beneath it sit the masthead and then a navigation row separated by a heavier top rule and a fine bottom rule. Navigation includes The front page, All stories, About the journal, Reading list with a live saved count, and a reading-mode control.

Every link must lead to a real page or state. Reading list opens archive.html#saved and activates the saved-story filter. On mobile the navigation wraps into two clear rows rather than becoming an overflowing horizontal ribbon. All primary destinations remain visible; no hamburger menu is needed for this small set. The reading-mode control has an action-specific accessible name and changes the entire site's day/night palette.

## Front-page composition

Start the main content with a small In this issue label and concise issue metadata. The lead story occupies roughly two thirds of the main editorial region. Give it a large title, a short standfirst, a Read the cover story link, and a substantial photograph. The concrete interior photograph must retain its curved forms and material detail; use a deliberate crop instead of stretching it.

The remaining third contains two secondary stories stacked vertically. Each has its own image, category, calculated reading time, serif title, standfirst, and article link. Their titles are significantly smaller than the cover headline. Thin rules separate these stories. This is a hierarchy of stories, not three equal marketing cards.

Follow with an editor's note arranged as a small label, a strong serif heading, and a text column. The heading is “For the things between the headlines.” The note explains the first issue's focus on a room, a street, and a book. Link to the about page. Do not add invented readership statistics or testimonials.

The final homepage section is an issue index. Present the three essays as numbered typographic rows with title, category, calculated reading time, and a save control. The index should offer a fast alternative to browsing images. A status region announces reading-list changes. The footer uses a smaller Margin wordmark, publication context, a story link, colophon and image-credit links, and a return to ProtoSites.

## Story archive

The archive opens with “A few good things to read.” and a concise description. Provide a real search input followed by filters for All stories, Spaces, Observations, Objects, and Reading list. Search matches the title, category, and standfirst without case sensitivity. Search and category selection combine, and every change updates the visible story count.

Use a three-column grid on desktop and a single column on phones. Each archive item includes the corresponding image, category, reading time, title, standfirst, and save button. All image and title links open the actual article page. Images should preserve a coherent editorial crop; do not use arbitrary animated previews or a shared generic placeholder.

When no stories match, show an understandable empty state and a Show all stories reset. Reset clears the search and returns to the All stories filter. Removing the last item from Reading list must immediately show the empty state. The URL's #saved state activates the reading list on direct entry and when navigation changes the hash.

## Article reading experience

Create room-to-think.html, looking-up.html, and turn-the-page.html. Each page has a unique document title, a return to the archive, category, reading time, publication date, a large serif article title, the full standfirst, an editorial byline, and a save action. Follow the opening with the article's credited image and caption. Captions distinguish actual licensed photography from the generated book concept.

The reading region uses a comfortable main text measure around 680px. On desktop a narrow sticky rail provides links to the three article sections, text-size controls, and a Print this essay action. On phones the rail becomes a compact control row; the essay itself remains in ordinary document flow. Do not trap scrolling or force the reader through scroll effects.

Use the complete three-section manuscript for each essay. Paragraphs must remain distinct and headings must clearly mark the argument's progression. A restrained drop cap may begin the first paragraph, but it must not overlap text or cause clipping at larger text sizes. Article headings are around 32–34px, body text starts at 18px, and generous line-height makes the essay comfortable to read.

At the end of the article, include an end-of-essay marker and a second save action synchronized with the one at the top. Follow with links to the other two essays, using small images and meaningful titles. The article page must be a finished reading experience, not a modal containing a short excerpt.

## Reader controls and local state

Store saved article slugs under a namespaced local-storage key. Accept only known slugs from an array and handle invalid JSON or unavailable storage gracefully. Saving and removing update every button for that article, the header count, the archive's visible results, and a polite status message. Use aria-pressed and an accessible name such as Save followed by the actual title. The selected state should include text or a check mark, not color alone.

The reading-mode control switches to a dark palette with #24231f paper, #ece6da text, #b8afa0 secondary copy, #565045 rules, and #ffa491 accent. Keep image colors unchanged. Persist the mode when possible. The accessible name changes to describe the next action, such as Use day reading mode. The site must remain usable when storage cannot be written.

Text-size choices are 18px, 21px, and 24px. They apply to the essay body using a CSS custom property, announce their selected state with aria-pressed, and persist only a valid choice. Use clear accessible labels: Standard text size, Larger text size, Largest text size. Do not change the entire page's scale or shrink surrounding interface labels.

The print action invokes the browser's print flow. Provide print CSS that removes navigation, reading controls, save buttons, related stories, and the footer while retaining the article title, standfirst, byline, image caption, and body. Use readable print sizes and avoid awkward breaks after headings. Do not pretend a PDF has been generated unless an actual download exists.

No account, email subscription, analytics event, payment, or backend write is part of this demonstration. Reading preferences and bookmarks stay locally in the browser. Search text is not transmitted or injected into HTML.

## About and colophon

The about page opens with “A little space for a longer look.” Explain the fictional publication's editorial premise. Use an image-and-text spread with the original generated book image and the three subjects of the issue. Follow with a colophon built from accessible native disclosures.

The disclosures describe writing and editorial approach, photography and image credits, reference and independent design, and local reading-list behavior. Their copy should be factual about the implementation. Do not claim a real editorial staff, publication history, circulation, commercial clients, or institutional affiliation. The first disclosure can be open initially; every disclosure must work with a keyboard.

## Asset contract

Package room.webp, city.webp, book.webp, the Geist variable font, CREDITS.txt, and the font license. hero.webp is a compatibility copy of room.webp for the parent gallery and is not an additional unique image. The room photograph is by Yulia Shapereva s; the Mexico City architecture photograph is by Moisés Fonseca. Their exact source-page links and Pexels licensing information belong in CREDITS.txt. The book image is labeled as an original generated visual concept, with its generation brief retained.

Keep runtime asset paths relative. The six-page package should work after extraction by opening index.html, without installing a framework or relying on a remote image host. Compress sensibly, preserve image focal points, and reserve dimensions to prevent layout shifts. Do not replace these assets with unverified stock URLs or reference-template imagery.

## Responsive, accessibility, and finishing requirements

Inspect the front page, archive, and representative article states at 1280, 768, 390, and 320px widths. Ensure the masthead, navigation, long titles, save labels, and reading controls remain within the viewport. On small phones, secondary stories stack vertically; on larger phones they may share a row when each remains readable. Never force a desktop column system into a narrow viewport by shrinking text.

Use a skip link, semantic navigation, one meaningful h1 per page, correctly nested essay headings, visible focus, labels for search, and descriptive image alternatives. Save controls must stay synchronized across duplicate positions on a page. Larger text should reflow without horizontal scrolling. Use reduced-motion rules to remove hover transitions and smooth scrolling where requested by the platform.

Verify search matches and no-match behavior, filters, saved-list entry and removal, reload persistence, night/day mode, all three text sizes, section links, related-article navigation, and disclosure behavior. Confirm all six HTML routes and local assets exist, the downloadable ZIP opens correctly, and the prompt in the ZIP exactly matches the library prompt. Run the parent application's TypeScript, appropriate lint, library validation, and production build. Only count this design toward the collection after its publication succeeds.

## Complete essay manuscripts

The build appends the exact original manuscripts below. Preserve their section structure and meaning. These are the actual article bodies, not placeholders.

### A room to think in.

#### Begin with the pause

An empty room is rarely empty. There is the direction of the light, the distance between two walls, the shape of the sound when a door closes. Before furniture arrives, the room already offers a set of possibilities. The question is which of them we choose to notice.

In this short design essay, the room is a way of thinking about attention. A clear surface does not have to be a performance of restraint. It can simply be a place where the next activity has room to happen: a book opened, a drawing unfolded, a conversation allowed to continue.

The most interesting interiors are not necessarily the ones with the fewest objects. A crowded studio can feel generous when everything has a relationship to the work. A nearly bare room can feel anxious when every surface asks to be admired. Quantity alone tells us very little.

#### The useful edge

Look at the place where a wall meets a window. That edge decides how the light enters, where a person might stand, and whether the outside feels near or far away. It is a modest detail with an unusually large effect on the experience of the room.

There are similar edges in other kinds of design. A margin around a paragraph makes reading easier. A pause between two sections lets an idea settle. The space beside a control helps a person understand what belongs together. These are not ornamental leftovers. They help the work function.

This is why an interior photograph can be useful even without a shopping list attached to it. We can study the relationship between surfaces and openings. We can notice what the frame makes obvious and what it leaves unresolved. We can borrow a question without trying to reproduce the whole room.

#### Leave something open

A room that works well is able to absorb ordinary life. Its best qualities remain present when the chair is moved, the light changes, or a stack of papers appears. A design that depends on permanent stillness may be a compelling image, but it asks a great deal of the person who must live with it.

The invitation, then, is not to make every place quieter. It is to decide what deserves emphasis and what can remain available. A useful emptiness is not an absence of thought. It is a decision to leave room for the next thought.

Try looking at a familiar room before changing anything. Notice one boundary, one source of light, and one place that is always being used differently from the way it was intended. That small inventory may offer a more useful starting point than another collection of perfect interiors.


### The city, one detail at a time.

#### Change the frame

A familiar street can become almost invisible. We know which corner to turn, where the pavement narrows, and how long the next crossing will take. The journey becomes a sequence of instructions. Everything that does not help us arrive is easy to overlook.

Looking up changes the frame. A facade becomes a pattern of openings. A projecting ledge makes a line across the sky. The same building that seemed ordinary at eye level can become a surprising arrangement of depth, shadow, and repetition.

This does not require a dramatic destination. The exercise works best with something close enough to revisit. A stair, a doorway, a shopfront after closing: each offers a manageable subject. The aim is to see one thing more clearly, rather than collect as many impressive things as possible.

#### A pattern and its exception

Repetition gives a surface its rhythm. Windows establish a sequence; joints create a measure; shadows make the structure legible. Once the pattern becomes clear, the exceptions become interesting. One opening is deeper. One panel has weathered differently. One edge turns a corner in an unexpected way.

A good observation makes room for both. The pattern explains the whole, while the exception gives it specificity. If we only describe the system, the building becomes abstract. If we only collect unusual details, we lose the relationship that makes them matter.

Photography can help by making a deliberate boundary. What belongs in this frame? What happens if the sky occupies less of it? Where does the eye enter, and what keeps it moving? These questions concern the image in front of us, not an invented story about the people who made the building.

#### Return another day

A second visit is often more revealing than a second location. The light falls differently. A door is open. The sound of traffic changes the atmosphere. The object has not necessarily changed, but our experience of it has.

An archive of these small observations can become a useful design resource. Keep the location and photographer attached to an image. Separate visible details from assumptions. Make a note of the question the image raises, rather than immediately turning it into a rule.

The city offers more than a collection of finished designs. It offers evidence of use, adaptation, maintenance, and time. Looking closely does not turn every detail into a masterpiece. It makes the ordinary world less generic, which is a worthwhile beginning.


### The pleasure of turning a page.

#### An object with an order

A book is both a collection and a sequence. We can see it as an object all at once, but we encounter its contents a little at a time. The cover makes a promise. The first spread sets a rhythm. A page turn changes the relationship between what we have just seen and what appears next.

That small action is part of the design. It gives the reader a moment of control and the maker an opportunity to shape a transition. Two images shown together say something different from the same images separated by a blank page.

The book in this visual study is a generated concept. Its value here is as a starting point for thinking about an editorial object, not as a claim about an existing publication. The orange and black spreads, the blue surface, and the weight of the pages suggest a set of design questions.

#### Let the sequence do some work

Not every page has to be the loudest page. A strong sequence can alternate density and space, close-up and distance, explanation and image. The quieter moments give the more assertive ones a place to land.

This principle is useful on a screen as well. If every section uses the same scale, the same image ratio, and the same amount of text, the reader loses a sense of progress. Variation becomes meaningful when it follows the content rather than a desire to keep changing the scenery.

A caption can provide a precise anchor. A short introduction can establish a question. A large image can make an argument that would be weakened by another paragraph. Choosing among these forms is part of editing, not simply the final stage of decoration.

#### Make room for the reader

A well-considered publication allows more than one way through. Someone may read it in order, return to a single image, or follow the index toward a particular subject. The structure should support those choices without making the publication feel fragmented.

The same care belongs in a digital reading experience. Clear headings, a comfortable line length, a useful archive, and a reading list can help a person find their way back. These controls are most successful when they serve the text quietly.

The pleasure of a page turn is partly the pleasure of a clear next step. Something has ended, something is beginning, and the reader can decide to continue. It is a modest interaction, but a publication is made from many modest decisions that hold together.

## Reference interaction handler

```javascript
(() => {
  const articles = JSON.parse(
    document.querySelector('#margin-data').textContent,
  );
  let saved = [];
  let night = false;
  let size = 18;
  try {
    const value = JSON.parse(localStorage.getItem('margin-saved') || '[]');
    if (Array.isArray(value))
      saved = value.filter((slug) => articles.some((a) => a.slug === slug));
    night = localStorage.getItem('margin-night') === 'true';
    const storedSize = Number(localStorage.getItem('margin-size'));
    if ([18, 21, 24].includes(storedSize)) size = storedSize;
  } catch {}
  function persist(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }
  const theme = document.querySelector('#theme');
  function applyTheme() {
    document.body.classList.toggle('night', night);
    theme.setAttribute(
      'aria-label',
      night ? 'Use day reading mode' : 'Use night reading mode',
    );
  }
  applyTheme();
  theme.addEventListener('click', () => {
    night = !night;
    applyTheme();
    persist('margin-night', String(night));
  });
  const saveButtons = [...document.querySelectorAll('[data-save]')];
  function renderSaved() {
    document.querySelector('#saved-count').textContent = String(saved.length);
    saveButtons.forEach((button) => {
      const active = saved.includes(button.dataset.save);
      const a = articles.find((x) => x.slug === button.dataset.save);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute(
        'aria-label',
        (active ? 'Unsave ' : 'Save ') + a.title,
      );
      button.textContent = active ? 'Saved to reading list ✓' : 'Save story ＋';
    });
  }
  const search = document.querySelector('#search');
  const filters = [...document.querySelectorAll('[data-filter]')];
  let filter = location.hash === '#saved' ? 'Reading list' : 'All stories';
  function updateArchive() {
    if (!search) return;
    const query = search.value.trim().toLowerCase();
    let count = 0;
    filters.forEach((button) =>
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.filter === filter),
      ),
    );
    document.querySelectorAll('.archive-card').forEach((card) => {
      const category =
        filter === 'All stories' ||
        (filter === 'Reading list'
          ? saved.includes(card.dataset.slug)
          : card.dataset.category === filter);
      card.hidden = !(
        category && card.dataset.search.toLowerCase().includes(query)
      );
      if (!card.hidden) count++;
    });
    document.querySelector('#result-count').textContent =
      count + ' ' + (count === 1 ? 'story' : 'stories');
    document.querySelector('#empty').hidden = count > 0;
  }
  saveButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const slug = button.dataset.save;
      const wasSaved = saved.includes(slug);
      saved = wasSaved ? saved.filter((x) => x !== slug) : [...saved, slug];
      const stored = persist('margin-saved', JSON.stringify(saved));
      renderSaved();
      updateArchive();
      const notice = document.querySelector('#notice');
      if (notice)
        notice.textContent = stored
          ? wasSaved
            ? 'Story removed from your reading list.'
            : 'Story saved in this browser.'
          : 'Reading list updated for this visit. Browser storage is unavailable.';
    }),
  );
  renderSaved();
  filters.forEach((button) =>
    button.addEventListener('click', () => {
      filter = button.dataset.filter;
      updateArchive();
    }),
  );
  search?.addEventListener('input', updateArchive);
  document.querySelector('#reset')?.addEventListener('click', () => {
    filter = 'All stories';
    search.value = '';
    updateArchive();
  });
  window.addEventListener('hashchange', () => {
    if (location.hash === '#saved') {
      filter = 'Reading list';
      updateArchive();
    }
  });
  document.querySelectorAll('.reading-link').forEach((link) =>
    link.addEventListener('click', () => {
      if (search) {
        filter = 'Reading list';
        updateArchive();
      }
    }),
  );
  updateArchive();
  const sizes = [...document.querySelectorAll('[data-size]')];
  function applySize() {
    document.documentElement.style.setProperty('--reading-size', size + 'px');
    sizes.forEach((button) =>
      button.setAttribute(
        'aria-pressed',
        String(Number(button.dataset.size) === size),
      ),
    );
  }
  applySize();
  sizes.forEach((button) =>
    button.addEventListener('click', () => {
      size = Number(button.dataset.size);
      applySize();
      persist('margin-size', String(size));
    }),
  );
  document
    .querySelector('#print')
    ?.addEventListener('click', () => window.print());
})();

```
