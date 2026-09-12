# Apogee — A wider perspective

## Complete deliverable and purpose

Build a complete five-page responsive website for Apogee, a fictional independent research initiative. Deliver a homepage, a searchable field archive, and individual pages for Meridian, Vesper, and Aeon. The site must be immediately recognizable as an exploration of planetary imagery and research questions. Its visual center is a large blue planetary image, a confident typographic headline, a numbered mission index, and a useful mission browser. The implementation must have its own markup and visual system rather than reuse a software-marketing or portfolio page shell.

The main headline is exactly “A wider perspective.” The supporting copy is “New questions. Different horizons. A place to explore what comes next.” The primary action is Explore the missions and leads to the homepage mission browser. The secondary action is Open field archive and opens archive.html. These are working navigation actions. Do not add a fabricated launch countdown, fake live telemetry, invented institutional partnerships, membership counts, donations, or an external signup flow.

All three missions are illustrative concept studies. The point is to present a coherent research narrative and enable useful exploration, not to impersonate a real space agency. A small disclosure identifies the fictional initiative and explains the use of credited NASA images. The interface should remain confident and concise; reserve detailed provenance for the credits and prompt rather than overwhelming every section with disclaimers.

## Actual reference and interpretation

The principal visual reference is Astro Lab by Raunak Das, listed at https://www.framer.com/marketplace/templates/astro-lab/ with a live preview at https://astrolab.framer.website/ . The listing, live hero, and research-section anchor were inspected on September 8, 2026. The observed design uses a large blue planet, dark navy surfaces, restrained sans-serif typography, rectangular actions, and research imagery. Its marketplace description advertises a mission and research-oriented landing page.

Translate those general principles into Apogee's own composition: a much larger two-line editorial headline, a compact horizontal mission strip, a vertical mission selector beside an image panel, a three-part method section, an immersive horizon spread, a three-study archive, and a monumental footer wordmark. Preserve the relationship between imagery and quiet technical labels while changing the identity, content, typography scale, asset selection, and interactions. Do not copy the reference's source code, logo, sample partners, creator links as business actions, research-paper titles, or claims.

The additional visual research context is the user's Collect UI Framer and hero-section collections. They inform the requirement that each new ProtoSites entry have its own composition. They do not supply the source code or images for Apogee. This is a coded HTML adaptation, not a Framer-native template file.

## Visual system

Use a near-black navy background, #080d16. Slightly raised surfaces use #101925. Primary text is #edf2fa; secondary text is #99a8bd; thin dividers are #283446. Use pale blue #9fc8ff for quiet emphasis and a controlled yellow-green #cdf269 for selected states and the typographic brand symbol. Keep the palette consistent across all five pages. Images carry most of the visual richness. Avoid turning every section into a gradient or adding decorative stars, orbital lines, glowing borders, or fake instrument graphics.

Use the bundled Geist variable font. Body copy is 16px at roughly 1.55 line-height. Important introductions are 18–20px. Display typography is relatively light, around weight 450, with tight tracking and close line-height. The desktop hero headline is fluid, roughly 80–156px, and its two lines must remain readable. Supporting research headings are approximately 42–88px depending on context. Project titles are intentionally oversized. On mobile, reduce them deliberately while preserving strong hierarchy rather than simply scaling the entire desktop page.

Use thin rules and square-edged image regions. The primary CTA is a light rectangular button with dark text, generous horizontal padding, and a small northeast arrow. Secondary actions are simple text links. Mission and archive controls are also rectangular. The primary visual identity comes from large image fields, flat dark surfaces, clear numbering, and deliberate type scale—not rounded app cards.

Use outer gutters near 5vw on wide screens, with practical bounds of 22–90px. Main sections are roughly 100px apart on desktop and 65px apart on phones. The header is approximately 90px tall on desktop and 74px on mobile. Keep content within a wide maximum around 1700px. Never use smaller text to hide layout failures or allow critical labels to disappear behind imagery.

## Header and opening view

The header contains the typographic Apogee wordmark, a simple typographic slash in the accent color, and navigation for The missions, Field archive, Our approach, and ProtoSites. The desktop header is horizontal and separated from the hero by a thin rule. On mobile, replace its links with an accessible Menu button that expands an ordinary navigation panel beneath the header. The menu must announce its state, close after selecting a destination, and close with Escape while returning focus to its toggle.

Use assets/hero.webp as a full-bleed image covering the hero. The enormous blue planet occupies the right portion, leaving dark space at left for typography. Preserve the atmospheric rim and cloud detail. A limited dark overlay may improve contrast, but do not obscure the planet or apply artificial color filters. The image is explicitly a generated speculative world, not a real observational result.

Place a compact introductory label above the headline, then the two-line headline, the short supporting copy, and the two primary navigation choices. Keep the text aligned to the outer page rail. At the bottom of the hero, place three small labels for the concept range, scroll instruction, and generated-image status. On small screens, simplify this metadata so it does not compete with the main action.

Below the hero, create a mission strip with three numbered links: AP–01 Meridian, AP–02 Vesper, and AP–03 Aeon. Each includes its field and an arrow. On desktop this is a horizontal index. On mobile it becomes three structured rows. It is navigation, not a row of fake statistics.

## Homepage mission browser

Introduce the mission browser with “Three perspectives. One shared curiosity.” and a concise description of the concept collection. Its desktop layout uses a vertical tab list at left and a large image panel at right. Meridian is initially selected. Tabs show mission code, name, and field. The active tab uses brighter text and a small accent treatment; selected state must also be communicated with aria-selected.

The image panel contains the selected mission's image, code, title, and a link to its actual case-study page. Selecting a mission updates all of these together. Never allow the image, heading, and destination to become out of sync. NASA imagery is credited in the panel; Aeon's panel instead says Original generated concept. Keep the title over a carefully darkened lower image region, with adequate contrast.

Implement the tab pattern with tablist, tab, and tabpanel semantics. Use roving tabindex and support the arrow keys, Home, and End. The selected tab names the panel through aria-labelledby. On phones, the tab list becomes a compact three-column row, and the image panel sits below it. This is the same control in a different layout, not an inaccessible duplicate.

## Exact mission content

Meridian is AP–01, field Earth systems. Its focus is Atmospheric patterns, and its instrument direction is Multispectral imaging concept. Its title is “Read the planet. Understand the change.” Its narrative explores the atmosphere as a connected system and how an observation program might make broad patterns easier to understand. The central question is: “How could a sequence of observations reveal patterns that a single image cannot?” The approach begins with broad structures, compares smaller regions over time, preserves uncertainty, and records observation context. Use earth.webp, a credited NASA/ISS image.

Meridian's four illustrative stages are: define the observation question and limits of the sample; compare a consistent sequence of regional views; annotate patterns without inferring unsupported causes; publish the study with assumptions and provenance. These are concept-workflow steps, not claims that a spacecraft has performed them.

Vesper is AP–02, field Orbital studies. Its focus is Light and horizon, and its instrument direction is Optical observation concept. Its title is “The edge of day. A different kind of horizon.” Its narrative concerns transitions of illumination and the relationship between one view and the next. The central question is: “What changes when the same horizon is observed under different illumination?” The approach treats light as context and organizes the sequence around the transition it records, carefully separating imagery from interpretation. Use sunset.webp, a credited NASA/ISS image.

Vesper's stages are: define a repeatable observation window; collect a concept sequence across changing light; compare visible features and document limitations; prepare an illustrated research note for review. The site does not imply these steps have been performed by a real Apogee mission.

Aeon is AP–03, field Deep-space concepts. Its focus is Planetary observation, and its instrument direction is Remote sensing concept. Its title is “Ask a larger question.” The description frames a speculative visual research concept about worlds beyond familiar horizons. The central question is: “How do we communicate a distant world without confusing a hypothesis with an observation?” The approach separates what is seen, modeled, and imagined. Use the original generated hero image, and do not present it as an actual exoplanet photograph.

Aeon's stages are: state the question and distinguish speculation from evidence; plan an illustrative observation sequence; compare assumptions and communicate uncertainty; publish a concept study with transparent image credits. All mission pages show Status: Concept study. No live data, verified discovery, operating instrument, or launch date is implied.

## Remaining homepage sections

After the mission browser, create an approach section with a large heading, “The unknown is an invitation.” Use one text column and three numbered principles in the other: Look closely, Question the obvious, and Share the perspective. Each has a short explanation tied to observation, assumptions, and communication. Use text and divider rules instead of decorative feature cards.

Follow this with a full-width horizon photograph using sunset.webp. The headline is “There’s more to the horizon.” The action Meet Vesper leads to vesper.html. Keep the image credit visible. The image is a real NASA reference photograph used illustratively for a fictional mission, not evidence of Apogee's own work.

The homepage archive teaser shows the three studies with large images, field labels, names, focus descriptions, and save buttons. Each project image and name opens its correct detail page. A View all studies action opens archive.html. Finish with an oversized Apogee wordmark, a short curiosity statement, archive and credits links, and a return to ProtoSites. All navigation must work from a locally extracted package as well as the hosted site.

## Field archive and saved studies

The archive has a large title, “A collection of questions.” It contains an actual search input, filters for All studies, Earth systems, Orbital studies, Deep-space concepts, and Saved, a result count, and the same three study records. Search matches mission name, research focus, and field without case sensitivity. Search and the chosen filter combine. Updating either must immediately update visible records and the count.

The Saved filter shows the visitor's locally bookmarked missions. Save controls expose aria-pressed and an action-specific accessible name such as Save Meridian or Unsave Meridian. The selected appearance must not rely only on color. Saving in the homepage, archive, or a mission page uses the same namespaced local-storage key. Parse stored values defensively, accept only arrays, and discard slugs that are not actual mission records.

When browser storage is unavailable, the interaction must still work in memory for the current page visit and clearly say so. The status text must describe the actual action: added or removed. No account, remote database, tracking event, or network write is required. An empty result state offers a Show all studies reset that clears search and returns to All studies. Removing an item while viewing Saved immediately removes it from that view and updates the count.

## Individual mission pages

Create meridian.html, vesper.html, and aeon.html with unique document titles and descriptions. Keep the shared navigation and footer. The opening contains a Field archive return link, code and field, an oversized mission name, a concise description, and a row of research facts. A save action uses the same saved-state behavior as the archive.

Show the mission image in a large, uninterrupted frame. Under it, include a concise caption distinguishing credited NASA reference imagery from an original generated concept. Follow with a large question section and the mission-specific approach text. Keep body copy in a readable measure rather than stretching it across the full screen.

The research-stage component has four tabs: Frame, Observe, Interpret, and Share. Selecting one updates the visible stage number, a meaningful stage title, and the mission-specific explanation. Use actual tab semantics and keyboard navigation. The component is labeled An illustrative research sequence. Avoid animating a progress bar that could imply a live mission is running.

At the bottom, provide links to the other two missions, each with a code, field, and large name. This creates a complete navigable collection. Every page links back to the archive and ProtoSites. There are no dummy links, nonexistent research PDFs, external recruitment destinations, or forms pretending to contact a real scientific team.

## Assets and provenance

The package contains three image files: hero.webp, earth.webp, and sunset.webp. The latter two are reused from the library's credited NASA asset archive. Preserve their credits and links to the original NASA pages. Keep the Geist font and its SIL license locally. Credits and image-generation provenance must be included in the source ZIP. Do not copy source imagery from the Framer template.

The original generated hero brief is: a wide 16:9 cinematic space image with an enormous blue Earth-like planet occupying the right two thirds, a thin icy-blue atmospheric rim, crisp swirling white clouds, deep dark oceans, and near-black negative space at left for typography. No text, logos, spacecraft, UI, lens flare, or decorative orbital lines. It is a photorealistic speculative world, not a real satellite observation. Record the generation method honestly.

Optimize images for the web while retaining cloud texture and smooth atmospheric gradients. Specify image dimensions to reserve space. Load the hero eagerly and secondary imagery lazily where appropriate. Every runtime asset is local, so the extracted package can be opened without an external image service or installation step.

## Responsive behavior, motion, and acceptance

Verify the index and representative mission/archive states at desktop, tablet, and phone widths, including 1280, 768, 390, and 320px. The mobile header must remain usable, large headings must fit without clipping, the mission tabs must retain readable labels, archive cards must become a single column, and research facts must stack without losing their labels. There must be no body-level horizontal scrolling. Keep links and buttons comfortably tappable.

Use visible keyboard focus and preserve a logical heading hierarchy. The skip link must reach the main content. Menu, tab, save, filter, and search states must all be understandable through semantics. Distinguish selected states through more than color. User text is a local search query only and must never become injected HTML. No user content is transmitted.

Motion is limited to hover response, a small image scale on interactive archive images, and smooth anchor scrolling. Respect prefers-reduced-motion by disabling decorative transitions and smooth scrolling. Do not hide the initial page behind a loading animation. Do not introduce background audio, auto-playing video, fake telemetry, or simulated scientific results.

Before delivery, open all five pages, navigate the mission browser, use keyboard tab changes, exercise stage controls on at least two missions, search for a valid subject and a no-match phrase, save and remove a study, test the Saved view, reload to check persistence, and inspect the small-screen menu. Validate local links, assets, credits, ZIP contents, and the exact prompt. Run the parent site's build and only count the adaptation as delivered after the updated ProtoSites publication succeeds.


## Reference interaction handler

```javascript
(() => {
  const data = JSON.parse(document.querySelector('#apogee-data').textContent);
  const menu = document.querySelector('#navigation');
  const toggle = document.querySelector('.menu-toggle');
  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu
    .querySelectorAll('a')
    .forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
  function bindTabs(selector, choose) {
    const tabs = [...document.querySelectorAll(selector)];
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(index));
      tab.addEventListener('keydown', (event) => {
        let next = index;
        if (['ArrowDown', 'ArrowRight'].includes(event.key))
          next = (index + 1) % tabs.length;
        else if (['ArrowUp', 'ArrowLeft'].includes(event.key))
          next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        select(next);
        tabs[next].focus();
      });
    });
    function select(index) {
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
      });
      choose(index);
    }
  }
  bindTabs('[data-mission]', (index) => {
    const m = data.missions[index];
    document.querySelector('#mission-image').src = 'assets/' + m.image;
    document.querySelector('#mission-image').alt =
      m.slug === 'aeon'
        ? 'Original generated planetary concept'
        : 'Earth observation photograph credited to NASA / ISS crew';
    document.querySelector('#mission-code').textContent = m.code;
    document.querySelector('#mission-title').textContent = m.title;
    const link = document.querySelector('#mission-link');
    link.href = m.slug + '.html';
    link.textContent = 'Explore ' + m.name + ' ↗';
    document.querySelector('#mission-credit').textContent =
      m.slug === 'aeon'
        ? 'Original generated concept'
        : 'Image: NASA / ISS crew';
    document
      .querySelector('#mission-panel')
      .setAttribute('aria-labelledby', 'tab-' + m.slug);
  });
  const current = data.missions.find((m) => m.slug === data.current);
  bindTabs('[data-stage]', (index) => {
    document.querySelector('#stage-number').textContent =
      '0' + (index + 1) + ' / 04';
    document.querySelector('#stage-title').textContent = [
      'Frame the question',
      'Observe the context',
      'Interpret carefully',
      'Share the perspective',
    ][index];
    document.querySelector('#stage-description').textContent =
      current.stages[index];
    document
      .querySelector('#stage-panel')
      .setAttribute('aria-labelledby', 'stage-' + index);
  });
  let saved = [];
  try {
    const stored = JSON.parse(localStorage.getItem('apogee-saved') || '[]');
    if (Array.isArray(stored))
      saved = stored.filter((slug) =>
        data.missions.some((m) => m.slug === slug),
      );
  } catch {}
  const saveButtons = [...document.querySelectorAll('[data-save]')];
  function updateSaved() {
    saveButtons.forEach((button) => {
      const active = saved.includes(button.dataset.save);
      const mission = data.missions.find((m) => m.slug === button.dataset.save);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute(
        'aria-label',
        (active ? 'Unsave ' : 'Save ') + mission.name,
      );
      button.textContent = button.classList.contains('text-link')
        ? active
          ? 'Saved ✓'
          : 'Save study ＋'
        : active
          ? '✓'
          : '＋';
    });
  }
  const filters = [...document.querySelectorAll('[data-filter]')];
  let filter = 'All studies';
  const search = document.querySelector('#search');
  function filterArchive() {
    if (!search) return;
    const query = search.value.trim().toLowerCase();
    let count = 0;
    document.querySelectorAll('.archive-card').forEach((card) => {
      const field =
        filter === 'All studies' ||
        (filter === 'Saved'
          ? saved.includes(card.dataset.slug)
          : card.dataset.field === filter);
      const matches = card.dataset.title.toLowerCase().includes(query);
      card.hidden = !(field && matches);
      if (!card.hidden) count++;
    });
    document.querySelector('#result-count').textContent =
      count + ' ' + (count === 1 ? 'study' : 'studies');
    document.querySelector('#empty').hidden = count > 0;
  }
  saveButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const slug = button.dataset.save;
      saved = saved.includes(slug)
        ? saved.filter((x) => x !== slug)
        : [...saved, slug];
      let message = saved.includes(slug)
        ? 'Study saved in this browser.'
        : 'Study removed from your saved list.';
      try {
        localStorage.setItem('apogee-saved', JSON.stringify(saved));
      } catch {
        message = 'Saved for this visit only. Browser storage is unavailable.';
      }
      updateSaved();
      filterArchive();
      document
        .querySelectorAll('.save-notice')
        .forEach((output) => (output.textContent = message));
    }),
  );
  updateSaved();
  filters.forEach((button) =>
    button.addEventListener('click', () => {
      filter = button.dataset.filter;
      filters.forEach((x) =>
        x.setAttribute('aria-pressed', String(x === button)),
      );
      filterArchive();
    }),
  );
  search?.addEventListener('input', filterArchive);
  document.querySelector('#reset')?.addEventListener('click', () => {
    search.value = '';
    filter = 'All studies';
    filters.forEach((x) =>
      x.setAttribute('aria-pressed', String(x.dataset.filter === filter)),
    );
    filterArchive();
  });
})();

```
