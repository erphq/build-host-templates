# Ramble | Make room for wonder

## Complete experience

Build a complete six-page responsive travel-concept website named Ramble. Deliver a homepage, a journey index, a trip-planner page, and individual pages for High country, Wild coast, and Forest pause. These are imagined journeys illustrated by original generated landscapes. The site must not pretend to sell real travel, quote actual availability, provide route guidance, or submit a booking.

The main headline is “Make room for wonder.” Supporting copy is “Three imagined journeys. Choose a landscape and shape a trip around it.” Use Plan a trip consistently for the planning action. The homepage should lead with a concise introduction and a wide, swipeable landscape gallery. A visitor can browse with arrows, keyboard, or touch, explore a journey, and create a dated local draft with their chosen duration and pace.

## Reference and independent composition

Research reference: Travora by Pilgrims Design, https://www.framer.com/marketplace/templates/71443/ with live preview https://travora.framer.website/ . The listing, live homepage, and a linked destination page were inspected. The useful principle is a clear progression from destination imagery to a planning action.

Ramble deliberately uses different composition, content, and assets: a compact left-aligned introduction on a bright surface, a horizontal landscape gallery with captions outside images, a pace selector, a separate local planner, imagined journeys without prices, and its own generated scenery. Do not copy Travora's tropical hero, mixed-serif headline, brand mark, orange CTA system, customer counts, ratings, destination catalog, prose, or source code.

The three scenes are not photographs of actual destinations. Their names describe landscape moods, not bookable places. Preserve that distinction in the credits, journey descriptions, planner context, and downloaded draft. The reference credit records research; it is not permission to produce a near-copy.

## Design read and engineering direction

Reading this as a bright travel-concept site for curious explorers, with strong photography, a varied page rhythm, and motivated gallery motion. DESIGN_VARIANCE is 7, MOTION_INTENSITY is 6, and VISUAL_DENSITY is 3. The asymmetric, wide gallery creates the primary composition. Motion communicates arrival, a changed journey, or updated planning choices. It must be visible in the actual implementation, not merely promised in the prompt.

Preserve the parent project's standalone HTML/CSS/JavaScript packaging architecture. Reuse only the installed Lucide icon renderer from the existing utility code; do not reuse the Aven page shell, typography system, or layout components. No additional client animation framework is required. Use native scroll snap, IntersectionObserver, and the Web Animations API for small, isolated effects. Keep all six pages usable when animation is disabled.

## Color, typography, and surfaces

The light palette uses #f2f7fb for the page, #142d42 for ink, #526879 for supporting text, #1469b8 for the single blue accent, #e4eef5 for grouped interactive surfaces, and #c1d1de for borders. The dark palette uses #101f2b for the page, #edf5fb for ink, #afc5d5 for supporting text, #9bcaf0 for accent, #1b3040 for surfaces, and #3f5869 for borders. Accent-button text must remain dark against the pale dark-mode accent. Do not invert individual sections into a different theme midway through a page.

Use locally hosted Geist variable throughout. Headlines are medium-weight sans-serif with tight tracking and a clear line-height. The homepage h1 stays within two lines and uses roughly 58–98px depending on viewport. Body text is 16–20px according to role. Keep the hero's description under 20 words, and keep the planning CTA visible before scrolling. Do not add a decorative eyebrow, version number, fake trust strip, or scroll instruction.

Use a consistent 12px corner radius for image frames, interactive surfaces, buttons, and form controls. Native checkboxes may retain their platform treatment. Use one border color per theme, modest padding, and no ornamental glow, grain, or gradients. Photographs keep their original colors in both themes. Captions stay below images; no decorative labels are overlaid on the landscape.

## Navigation and homepage

The header is at most 72px high on desktop. It contains the Ramble wordmark, Journeys, Our approach, Plan a trip, and a theme control. Keep desktop navigation on one line. On phones, omit the secondary Our approach link from the header while retaining the section in the page. The journey and planning destinations remain directly available.

The hero contains a left-aligned headline, short description, one planning CTA, and the journey gallery. The gallery shows a large landscape with part of the next scene visible. It is a real horizontal browsing surface, not three decorative cards or an autoplay slideshow. Previous and Next controls have clear accessible names and disabled states at the bounds. The current journey name updates in a polite live region.

The gallery consists of three semantic article slides. Each has an image link, journey title link, category and concept duration below the image, and a clearly named explore action. All journeys remain reachable even if the visitor does not use the arrow buttons. Native touch and trackpad scrolling must work. ArrowLeft and ArrowRight work when the gallery itself is focused.

Below the gallery, use a spacious statement headed “A good trip has room to change.” The text is short and directly tied to flexible planning. A real pace selector offers Slow mornings and More exploring. Selecting a pace changes the explanatory copy and the planner link's validated pace query. Use the same planning label, Plan a trip.

The next section is a forest photograph with a focused explanation and a link to Forest pause. The final content section contains three concise native disclosures about imagined destinations, the local planner, and changing choices. Do not repeat the same split-image structure across all sections. The footer uses the same page theme, essential links, credits, and a short fictional-concept statement.

## Motion behavior

Use a restrained entry translation on the main headline. Keep its text visible throughout; do not hide the first meaningful content behind a long loading animation. Use IntersectionObserver for one-time secondary image and heading arrivals. A small translation and opacity change are sufficient to establish sequence.

The horizontal gallery uses native scrolling with scroll snap. Arrow controls scroll to a known slide, and IntersectionObserver detects the currently prominent slide after touch or trackpad movement. Update the current-name label and button disabled states to match the actual visible journey. Inactive landscape images may have a small scale and reduced opacity, returning to normal for the active slide. Only transform and opacity animate.

Pace-copy changes, planner-image changes, and a newly created draft may receive brief transitions that acknowledge the state change. No infinite animation, custom cursor, scroll-jacking, automatic slide timer, or whole-page progress effect is needed. Do not claim WebGL, video, GSAP, or physics if none is implemented.

Honor prefers-reduced-motion in both CSS and JavaScript. Native smooth scrolling becomes instant, Web Animations are skipped, and ongoing animations are canceled if the system preference changes. Content remains visible and all controls remain usable. Avoid window-level scroll listeners and React state updates on animation frames.

## Journey content

High country is a Mountains concept with a default four-day duration. Its summary describes clear water, open ridgelines, and space between thoughts. The imagined itinerary begins with settling in, continues with a day by the water and a wider-view day, and ends with an unhurried departure. A fifth optional day provides open time. This is not a real trail, summit plan, or safety assessment.

Wild coast is a Coast concept with a default five-day duration. Its narrative focuses on a cove, changing light, and open days. Its possible rhythm includes arrival, a shoreline-themed day, a separately researched detour, another look at familiar light, and departure. It does not provide tide, surf, navigation, or actual location information.

Forest pause is a Forest concept with a default three-day duration. It emphasizes quieter mornings and noticing a small part of a landscape. Its possible days include settling in, a day of observation, a simple morning, a return to a favorite view, and departure. Do not present this as a real woodland route or activity recommendation.

The exact journey records and all daily copy are appended below. Use them consistently across gallery captions, the journey index, detail pages, planner preview, and generated draft. Durations must correspond to the displayed number of days.

## Journey index and detail pages

The index page is headed “Choose your change of scene.” Provide filters for All landscapes, Mountains, Coast, and Forest. Filtering updates the actual visible records and a live journey count. Each record includes a large landscape, title, concise summary, default duration, landscape type, and a detail link. This is a functional content list; maintain consistent comparison cues.

Create high-country.html, wild-coast.html, and forest-pause.html. Each has a unique title and description, a Journeys return link, an introductory headline, the summary, and a Plan a trip link with the correct journey query. Follow with a large, unobstructed landscape image.

Below the image, explain the imagined journey in a concise story section. The itinerary section uses meaningful daily titles in native disclosures. The day number is functional itinerary context, not decorative section numbering. Show the configured default duration and always include a departure day as the last entry.

A small packing section contains four ordinary checklist items. It is explicitly an illustrative starting point; real preparation depends on actual destination and plans. Checkboxes work locally and visually mark completed items. Do not invent specialized equipment advice, weather forecasts, route conditions, or real-world safety guarantees.

## Date-aware local planner

Create plan.html with a landscape select, start-date input, duration select for three, four, or five days, and a pace select. Labels belong above controls. The main button is Create trip draft. Show a selected-landscape preview beside the form on desktop and below it on phones.

Validate journey and pace query parameters against known values. Unknown journey values fall back to the first concept. A valid journey query preselects that journey and its default duration. A valid explore pace query preselects More exploring. Do not inject query strings into HTML.

The start date is required and cannot precede the visitor's current local calendar date. Derive that minimum from local year, month, and day rather than assuming UTC equals the local date. Validate the native form and the allowed duration before creating output. Use UTC-based arithmetic to add whole calendar days, avoiding daylight-saving errors, and format the resulting dates with an explicit UTC time zone.

For the selected duration, use the first duration-minus-one activities and the departure activity as the final day. Each dated result row contains the date, meaningful activity title, and the matching explanation. Pace changes add a brief statement about a lighter schedule or an additional independently researched stop. No travel price, booking availability, transport schedule, or reservation is calculated.

Create result elements with DOM textContent rather than user-controlled HTML. The output section has a meaningful heading and becomes focusable when created so keyboard users can find the result. It scrolls into view according to the motion preference. Edit choices returns to the form. Changing any form input invalidates and hides the old result, preventing an outdated draft from being downloaded as if it reflected new choices.

Download draft creates a plain-text file with the chosen journey, date range, pace, dated activities, and an explicit statement that the journey is imagined and nothing has been booked or sent. Revoke the temporary Blob URL after the download can start. No network request, email, payment, or backend record is created. Form content is not stored remotely.

## Theme and accessibility

Use the system color scheme initially, with a local Day/Night control that persists an explicit light or dark preference when browser storage is available. Handle storage failures without breaking the interface. Update the visible control text and accessible action name together. The system preference continues to apply until the visitor makes an explicit choice.

Provide a skip link, semantic navigation, one h1 per page, properly nested headings, visible focus, descriptive alternatives, labeled inputs, native disclosures, and status announcements for gallery, filters, and results. Disabled gallery controls must be visually and semantically disabled. Theme changes never alter image content. Keep all controls reachable without hover.

At narrow widths, use a single-column page flow. The gallery remains horizontally swipeable because that is its explicit browsing interaction; the document itself must not scroll sideways. Forms, result rows, packing choices, and journey records stack. Check long journey titles, date controls, and large text at 320px as well as normal phone and desktop widths.

## Asset production and packaging

Use the three original generated assets mountains.webp, coast.webp, and forest.webp. The first shows a turquoise lake beneath a rugged alpine ridge, the second a sandy cove and rugged coast, and the third a woodland stream with a small waterfall. All were generated as imagined 16:9 landscapes with natural daylight and no people, typography, logos, or UI. Exact briefs and generation method are in provenance.json.

hero.webp is a duplicate of mountains.webp for parent-gallery compatibility, not a fourth image. Each landscape also has 640px and 960px WebP variants alongside its 1440px base. Use srcset and sizes to avoid sending desktop imagery to small phone views; update the responsive source set together with the planner preview image. Include the local Geist font, its license, CREDITS.txt, and provenance. Keep all runtime paths relative so the extracted six-page package works offline without a framework installation or remote image host. Reserve image dimensions, load the first landscape promptly, and defer secondary scenes where useful.

## Acceptance and quality checks

Verify the actual gallery movement, disabled endpoints, keyboard navigation, touch-friendly layout, journey filters, pace-link changes, query preselection, date validation, correct date counts, result invalidation, and local draft download. Inspect the layout in both themes at desktop and phone widths, including 1280, 768, 390, and 320px where appropriate. Test the reduced-motion path and confirm content remains visible.

Read all visible copy for clarity and remove decorative filler, fake metrics, mismatched captions, and unnecessary metadata. Do not add em dashes, arbitrary section numbers, badges on images, or mixed-family italic hero words. Preserve one consistent theme and accent across each page. Run a scoped performance/accessibility audit, local route and asset checks, ZIP integrity and prompt-match checks, TypeScript, appropriate lint, and the parent production build before publication.

Only mark the site delivered after the updated ProtoSites deployment succeeds. A sitemap link, a fetched template page, or an unfinished concept does not count toward the active collection goal.


## Exact journey records

```json
[
  {
    "slug": "high-country",
    "name": "High country",
    "kind": "Mountains",
    "image": "mountains.webp",
    "days": 4,
    "summary": "Clear water, open ridgelines, and a little more space between one thought and the next.",
    "intro": "An imagined mountain journey built around broad landscapes and unhurried days. Use it as a starting point for a travel mood, not a real trail or destination guide.",
    "daysPlan": [
      [
        "Settle into the landscape",
        "Arrive, unpack, and leave the first afternoon open. This sample plan begins with time to find your bearings."
      ],
      [
        "Spend a day by the water",
        "Make space for a lake-side morning, a long lunch, and time to look at the landscape without a fixed agenda."
      ],
      [
        "Find a wider view",
        "Choose an illustrative day focused on a change of perspective. Real routes and conditions would need separate planning."
      ],
      [
        "Keep an afternoon free",
        "Leave room for a return to a favorite place, a book, or a change of plan."
      ],
      [
        "Take the slow way home",
        "Pack without rushing and leave time for the journey back."
      ]
    ],
    "packing": [
      "Comfortable everyday layers",
      "A reusable water bottle",
      "A notebook or book",
      "A small day bag"
    ]
  },
  {
    "slug": "wild-coast",
    "name": "Wild coast",
    "kind": "Coast",
    "image": "coast.webp",
    "days": 5,
    "summary": "A sandy cove, a changing tide, and days that leave room for the unexpected.",
    "intro": "An imagined coastal escape shaped around light, water, and open time. The landscape is generated and the schedule is illustrative; no real route, tide, or booking information is supplied.",
    "daysPlan": [
      [
        "Arrive without a full agenda",
        "Settle in and keep the first part of the trip simple. This sample itinerary leaves the evening open."
      ],
      [
        "Follow the shoreline mood",
        "Build a day around looking at the coast, a relaxed meal, and time beside the water. This is not a navigation or tide guide."
      ],
      [
        "Make room for a detour",
        "Keep an open day for a local discovery you would research separately when planning a real journey."
      ],
      [
        "Stay for the changing light",
        "Return to a favorite view at another time of day and notice how the place feels different."
      ],
      [
        "Leave a little room at the end",
        "Pack, pause, and head home without turning the final morning into a checklist."
      ]
    ],
    "packing": [
      "Comfortable everyday clothing",
      "Sun protection suited to your plans",
      "A reusable water bottle",
      "A book for open afternoons"
    ]
  },
  {
    "slug": "forest-pause",
    "name": "Forest pause",
    "kind": "Forest",
    "image": "forest.webp",
    "days": 3,
    "summary": "A quiet stream, rich green light, and a gentler rhythm for a few days away.",
    "intro": "An imagined woodland break for slower mornings and simple days. Treat it as a creative trip concept, not a guide to a real forest, route, or outdoor activity.",
    "daysPlan": [
      [
        "Ease into a different rhythm",
        "Arrive, put away the timetable, and leave space to settle into the imagined setting."
      ],
      [
        "Make a day of noticing",
        "Use this sample day for looking, listening, and spending time with one small part of the landscape."
      ],
      [
        "Keep the morning simple",
        "A slow start and an open afternoon give the trip room to breathe."
      ],
      [
        "Return to a favorite place",
        "Revisit a view, read, or change the plan entirely. The point is to make the time feel your own."
      ],
      [
        "Carry the quiet home",
        "Leave the final morning open for packing and an unhurried departure."
      ]
    ],
    "packing": [
      "Comfortable everyday layers",
      "A reusable water bottle",
      "A notebook or sketchbook",
      "A small bag for essentials"
    ]
  }
]
```

## Reference interaction handler

```javascript
(() => {
  const journeys = JSON.parse(
    document.querySelector('#ramble-data').textContent,
  );
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function animate(el, frames, options) {
    if (el && !reduced.matches) el.animate(frames, options);
  }
  const themeButton = document.querySelector('#theme');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const stored = localStorage.getItem('ramble-theme');
    if (['light', 'dark'].includes(stored)) preference = stored;
  } catch {}
  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeButton.textContent = dark ? 'Day' : 'Night';
    themeButton.setAttribute(
      'aria-label',
      dark ? 'Use day theme' : 'Use night theme',
    );
  }
  setTheme(preference ? preference === 'dark' : systemTheme.matches);
  themeButton.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    preference = dark ? 'dark' : 'light';
    setTheme(dark);
    try {
      localStorage.setItem('ramble-theme', preference);
    } catch {}
  });
  systemTheme.addEventListener('change', () => {
    if (!preference) setTheme(systemTheme.matches);
  });
  animate(
    document.querySelector('.arrive'),
    [{ transform: 'translateY(14px)' }, { transform: 'translateY(0)' }],
    { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' },
  );
  if (!reduced.matches) {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(
            entry.target,
            [
              { opacity: 0.65, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 700, easing: 'cubic-bezier(.16,1,.3,1)' },
          );
          reveal.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));
  }
  reduced.addEventListener('change', () => {
    if (reduced.matches)
      document.getAnimations().forEach((animation) => animation.cancel());
  });
  const track = document.querySelector('#gallery-track');
  if (track) {
    const slides = [...track.querySelectorAll('.journey-slide')];
    const previous = document.querySelector('#previous');
    const next = document.querySelector('#next');
    let current = 0;
    function showState(index) {
      current = index;
      previous.disabled = index === 0;
      next.disabled = index === slides.length - 1;
      document.querySelector('#current-journey').textContent =
        journeys[index].name;
      slides.forEach((slide, i) =>
        slide.classList.toggle('current', i === index),
      );
    }
    function go(index) {
      const target = Math.max(0, Math.min(slides.length - 1, index));
      showState(target);
      const padding = parseFloat(getComputedStyle(track).paddingLeft);
      track.scrollTo({
        left: slides[target].offsetLeft - padding,
        behavior: reduced.matches ? 'auto' : 'smooth',
      });
    }
    previous.addEventListener('click', () => go(current - 1));
    next.addEventListener('click', () => go(current + 1));
    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(current + 1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(current - 1);
      }
    });
    const visible = new IntersectionObserver(
      (entries) => {
        const winner = entries
          .filter(
            (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.65,
          )
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (winner) showState(Number(winner.target.dataset.slide));
      },
      { root: track, threshold: [0.65, 0.9] },
    );
    slides.forEach((slide) => visible.observe(slide));
  }
  const paceButtons = [...document.querySelectorAll('[data-pace]')];
  paceButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const slow = button.dataset.pace === 'slow';
      paceButtons.forEach((x) =>
        x.setAttribute('aria-pressed', String(x === button)),
      );
      const copy = document.querySelector('#pace-copy');
      copy.textContent = slow
        ? 'Fewer fixed plans, longer pauses, and afternoons with nothing to prove.'
        : 'More room for a new view each day, with time to decide what interests you.';
      document.querySelector('#pace-plan').href =
        'plan.html?pace=' + (slow ? 'slow' : 'explore');
      animate(
        copy,
        [
          { opacity: 0.45, transform: 'translateY(6px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 320 },
      );
    }),
  );
  const filters = [...document.querySelectorAll('[data-filter]')];
  filters.forEach((button) =>
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      let count = 0;
      filters.forEach((x) =>
        x.setAttribute('aria-pressed', String(x === button)),
      );
      document.querySelectorAll('[data-kind]').forEach((card) => {
        card.hidden =
          selected !== 'All landscapes' && card.dataset.kind !== selected;
        if (!card.hidden) {
          count++;
          animate(
            card,
            [
              { opacity: 0.5, transform: 'translateY(12px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 350 },
          );
        }
      });
      document.querySelector('#journey-count').textContent =
        count + ' ' + (count === 1 ? 'journey' : 'journeys');
    }),
  );
  const form = document.querySelector('#trip-form');
  if (!form) return;
  const selected = document.querySelector('#journey-select');
  const duration = document.querySelector('#trip-days');
  const pace = document.querySelector('#trip-pace');
  const date = document.querySelector('#start-date');
  const result = document.querySelector('#trip-result');
  const error = document.querySelector('#form-error');
  const query = new URLSearchParams(location.search);
  const requested = journeys.find((j) => j.slug === query.get('journey'));
  if (requested) {
    selected.value = requested.slug;
    duration.value = String(requested.days);
  }
  if (query.get('pace') === 'explore') pace.value = 'explore';
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-');
  date.min = today;
  function preview() {
    const j =
      journeys.find((item) => item.slug === selected.value) || journeys[0];
    const image = document.querySelector('#plan-image');
    image.srcset = [640, 960, 1440]
      .map(
        (width) =>
          'assets/' +
          j.image.replace(
            '.webp',
            width === 1440 ? '.webp' : '-' + width + '.webp',
          ) +
          ' ' +
          width +
          'w',
      )
      .join(', ');
    image.src = 'assets/' + j.image;
    image.alt = 'Original generated ' + j.kind.toLowerCase() + ' landscape';
    document.querySelector('#plan-name').textContent = j.name;
    document.querySelector('#plan-description').textContent = j.summary;
    animate(
      image,
      [
        { opacity: 0.5, transform: 'scale(1.015)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      { duration: 450 },
    );
  }
  selected.addEventListener('change', () => {
    const j = journeys.find((item) => item.slug === selected.value);
    duration.value = String(j.days);
    preview();
  });
  preview();
  let draft = '';
  form.addEventListener('input', () => {
    result.hidden = true;
    draft = '';
    error.textContent = '';
  });
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    error.textContent = '';
    if (!form.reportValidity()) return;
    const j = journeys.find((item) => item.slug === selected.value);
    const days = Number(duration.value);
    if (!j || ![3, 4, 5].includes(days) || date.value < today) {
      error.textContent = 'Choose a valid journey, duration, and start date.';
      return;
    }
    const parts = date.value.split('-').map(Number);
    const start = Date.UTC(parts[0], parts[1] - 1, parts[2]);
    if (!Number.isFinite(start)) {
      error.textContent = 'Choose a valid start date.';
      return;
    }
    const plan = [...j.daysPlan.slice(0, days - 1), j.daysPlan.at(-1)];
    const slow = pace.value !== 'explore';
    const rhythm = slow ? 'Slow mornings' : 'More exploring';
    const summary =
      j.name +
      ' | ' +
      dateFormat.format(new Date(start)) +
      ' to ' +
      dateFormat.format(new Date(start + (days - 1) * 86400000)) +
      ' | ' +
      rhythm;
    document.querySelector('#result-summary').textContent = summary;
    const list = document.querySelector('#result-days');
    list.replaceChildren();
    draft = 'RAMBLE / LOCAL TRIP DRAFT\n\n' + summary + '\n\n';
    plan.forEach(([title, copy], index) => {
      const day = new Date(start + index * 86400000);
      const row = document.createElement('article');
      row.className = 'result-day';
      const time = document.createElement('time');
      time.dateTime = day.toISOString().slice(0, 10);
      time.textContent = dateFormat.format(day);
      const heading = document.createElement('h3');
      heading.textContent = title;
      const text = document.createElement('p');
      text.textContent =
        copy +
        (slow
          ? ' Keep the day lightly planned.'
          : ' Leave room for an additional independently researched stop.');
      row.append(time, heading, text);
      list.append(row);
      draft +=
        time.textContent + '\n' + title + '\n' + text.textContent + '\n\n';
    });
    draft +=
      'Imagined journey only. This is not real route guidance. Nothing has been booked or sent.';
    result.hidden = false;
    result.focus({ preventScroll: true });
    animate(
      result,
      [
        { opacity: 0.6, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 500 },
    );
    result.scrollIntoView({
      behavior: reduced.matches ? 'auto' : 'smooth',
      block: 'start',
    });
  });
  document.querySelector('#edit-plan').addEventListener('click', () => {
    form.scrollIntoView({
      behavior: reduced.matches ? 'auto' : 'smooth',
      block: 'start',
    });
    selected.focus({ preventScroll: true });
  });
  document.querySelector('#download-plan').addEventListener('click', () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: 'text/plain;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ramble-trip-draft.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();

```
