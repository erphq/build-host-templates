# Night Shapes | A concept festival

## Build the complete experience

Create a complete six-page responsive festival website called Night Shapes. Deliver a homepage, programme browser, My night planner, and three artist pages for Faye Lumen, Slow Circuit, and Glass Orchard. These are fictional performers and an imagined event. The site must not sell real tickets, imply actual artist bookings, or link to a real ticket merchant.

The event's illustrative dates are September 10-11, 2027, which fall on Friday and Saturday. The homepage presents the name NIGHT SHAPES, the dates, the line “Two imagined nights of live voices and electronic sound,” and a Build my night action. The primary activity is to browse the concept programme, save sets, notice overlaps, compare an illustrative pass, and export a local calendar file.

## Research and originality

The reference examined is Zenith Festival by Roman Rybiansky, https://www.framer.com/marketplace/templates/zenith-festival/ with live preview https://zenithfest.framer.website/ . The listing and live festival layout were inspected read-only. General principles worth learning include making a lineup legible, grouping a programme by day and stage, and keeping the main planning action clear.

Night Shapes has its own typography, performer photography, event identity, programme records, page structure, and local planner. It does not copy the reference's multicolored abstract hero, artist names, dates, venue, ticker composition, copy, graphics, or ticket links. The generated people are fictional adults, not real artist likenesses or promotional photos. All programme and price data is illustrative.

Do not present a source credit as permission to produce a near-copy. The design should be independently recognizable through its poster-style opening, full-width concert image, asymmetric artist presentation, day/stage controls, and conflict-aware personal schedule.

## Visual direction and implementation

Reading this as a music-festival concept for culture-focused visitors, using condensed poster typography, expressive live-performance imagery, and a practical schedule interface. DESIGN_VARIANCE is 8, MOTION_INTENSITY is 6, and VISUAL_DENSITY is 4.

Use the parent project's standalone native HTML/CSS/JavaScript architecture. The display face is Anton from the official Google Fonts source, packaged locally with its license. Use Geist for body copy, programme labels, and controls. Icons come from the installed Lucide library and retain their license. Do not draw decorative icons or fake an audio player with unimplemented controls.

Use one sharp-edged visual system. The light theme has near-white green-tinted paper, dark ink, quiet green-gray borders, and acid-lime action surfaces. The dark theme has charcoal-green paper, light text, and the same lime action color. Maintain an accessible darker accent-text variant in light mode. Keep one consistent theme through every section; photographs retain their original stage colors.

The exact implemented tokens are in the source stylesheet. Primary controls must have dark text on the lime background, not white text with weak contrast. Secondary copy and styled select labels must remain readable in both themes. Avoid decorative gradients, glowing borders, fake scarcity counters, and random colored status dots.

## Header and poster opening

Use a compact 72px header with the Night Shapes wordmark, Artists, Programme, My night with a saved-set count, and a theme control. Keep desktop navigation on one line. On phones the secondary Artists link can be omitted from the header because artists remain available on the homepage and programme. Do not let the programme or planner links disappear.

The homepage begins with a large Anton festival title. It can span one wide line on desktop and two deliberate lines on phones. The actual date, short event description, and Build my night action sit in a clear information row below the title. Follow with a full-width original concert photograph of the fictional headliner. This is a photographic festival identity, not a recolored version of the reference hero.

Reserve the image's dimensions and preserve the performer's face and microphone within its crop. The main title, description, and action must remain understandable before the visitor scrolls. Do not add a fabricated location, ticket countdown, sold-out badge, or previous-edition claim.

## Lineup motion and artist presentation

Use exactly one automatically moving lineup ticker. It contains the three actual fictional artist names as links, with an aria-hidden non-interactive duplicate for continuous motion. The ticker is information, not a strip of unrelated decorative words. It has a visible Pause/Play control with matching accessible names and aria-pressed state.

Pause the ticker during pointer hover and keyboard focus so moving links remain easy to use. A manual paused choice may persist locally. Under reduced motion, remove the animation, hide the duplicate copy, and allow all names to wrap into a readable static layout. Do not leave names clipped when motion is disabled.

The artist section uses an asymmetric image arrangement: the lead act gets a larger image, with two smaller supporting acts. Captions sit below images and contain the artist name and genre. Every image and name leads to its own complete artist page. On phones the artist cards stack in a single column.

Below the lineup, a short programme introduction explains the local scheduling flow and repeats the same Build my night action. Finish the homepage with concise native disclosures about the fictional event, local saved sets, calendar export, and illustrative pass prices. The footer uses the same theme and provides programme, planner, credits, and ProtoSites links.

## Fictional artists

Faye Lumen is an Art pop vocalist concept. Her line is “A voice that changes the room.” Her imagined set moves from intimate songs to larger electronic arrangements. The original generated image shows an adult vocalist under blue stage backlight with natural face lighting. Do not claim real releases, an actual artist biography, or a booked performance.

Slow Circuit is a Live electronics concept. The line is “Built live. Felt together.” The imagined performance develops small synthesizer patterns into a larger rhythm. Its original image shows an adult electronic musician with unbranded equipment. There is no real recording or artist endorsement.

Glass Orchard is an Ambient club duo concept. The line is “Space, texture, and a pulse.” The imagined set moves from atmosphere toward dance-floor energy. The generated image shows two fictional adult performers. It is not documentary concert photography.

The runtime data also supplies icons.plus and icons.check rendered from Lucide for the save controls. Populate those from the licensed library, not arbitrary remote SVG.

The exact artist records are appended below. Keep their images, names, genres, programme links, and biographies consistent. There is no audio asset in the package, so do not add a play button or streaming link that pretends to play a real track.

## Programme browser

Create programme.html with a concise introduction and two accessible day tabs: Friday, September 10, and Saturday, September 11. Friday is the initial selection. Native select controls filter by Stage and Artist. The stage choices are All stages, Hall, and Yard. The artist choices are All artists and the three defined acts.

All filters combine. Update a live set count and show only matching programme records. A no-results state offers a reset for stage and artist filters. Switching days retains the selected stage and artist filters so the visitor can compare them consistently. The tab pattern supports ArrowLeft, ArrowRight, Home, and End, updates aria-selected, and uses roving tabindex.

Each set row presents start time, end time, artist name, genre, stage, and an Add set or Remove set action. The accessible action name includes the artist, day, and start time. Do not rely on a color-only bookmark state. Artist names link to their actual artist pages.

A valid artist query parameter preselects that artist; unknown values are ignored. The displayed programme is local sample data. No live availability, venue feed, ticket API, or real booking information is requested.

## Exact schedule

Friday includes Faye Lumen in Hall from 19:00 to 20:00; Slow Circuit in Yard from 19:30 to 20:30; and Glass Orchard in Hall from 21:00 to 22:00. The first two deliberately overlap to exercise the personal planner's conflict feedback.

Saturday includes Glass Orchard in Yard from 18:00 to 19:00; Faye Lumen in Hall from 19:15 to 20:15; and Slow Circuit in Hall from 21:00 to 22:30. These dates and times are illustrative. Do not add a real street address, transport directions, age restriction, accessibility claim about a physical venue, or a ticket merchant.

All set identifiers are stable and unique. The exact records appear below. Keep times zero-padded and sort the personal schedule by date and start time. A set that ends exactly when another starts does not count as an overlap.

## My night and conflict feedback

Create my-night.html as a working planning surface. Saved set identifiers live in a namespaced local-storage key. Validate loaded data: accept only arrays of known set IDs, ignore invalid entries, and remove duplicates. Storage failure should preserve the current visit's state and explain that persistence is unavailable. No personal data or preferences are transmitted to a server.

Saving or removing a set updates every matching button, the header count, the planner, and a polite status message. The count represents saved sets, not purchased tickets or nights. Artist pages use the same state, so selecting a set there appears in My night.

Group saved sets by day. Show time, artist, stage, and removal action. An empty state directs the visitor to the programme. Clear my night removes the local selection and restores the empty state. Keep keyboard focus sensible when a row disappears; focus the remaining control or the empty-state programme link.

Detect overlaps only when two selected sets occur on the same day and their time intervals intersect. Display the actual artist names and day in the warning. Allow the visitor to keep both in a draft or remove one; do not silently discard a selection. Adding an overlapping set also announces that it conflicts with another saved set.

## Illustrative pass calculator

The planner includes a clearly labeled sample-pass calculator, separate from the saved schedule. Passes are Friday at USD 59, Saturday at USD 69, and Weekend at USD 109. People can range from one to six. The initial choice is one Weekend concept pass. Format totals consistently as illustrative USD values.

The selected pass and quantity update the sample total locally. If saved sets fall on a day outside the chosen sample pass, explain which day is not covered. If the schedule is empty, invite the visitor to save sets before comparing coverage. No taxes, fees, real inventory, purchase, or payment are calculated. There is no checkout button.

## Calendar export

Export schedule creates a local .ics file containing the selected fictional sets. It does not modify a calendar automatically. Use a pure calendar-serialization function so the output can be tested independently of the page.

Include VCALENDAR headers, a product identifier, a concept-calendar name, and one VEVENT per selected set. Each event includes a stable UID under a reserved example domain, a UTC DTSTAMP, floating local DTSTART and DTEND values, artist-based summary, fictional stage location, and a description that says no real ticket or booking exists. Escape calendar text and fold long lines correctly. End with CRLF line endings.

The dates are the actual illustrative September 2027 dates from the data. Do not append a false timezone or imply a real venue's time zone. The site explains that exported times are floating local times. Export is disabled when the schedule is empty. Revoke the temporary Blob URL after the download can start.

## Artist pages

Create faye-lumen.html, slow-circuit.html, and glass-orchard.html. Each page has a unique document title and description, an Artists return link, large name, genre, and a substantial original performance image. Follow with the concise fictional biography and performance direction.

Each artist page lists that act's Friday and Saturday concept sets and uses the same save/remove controls as the programme. An Open my night link leads to the personal planner. Do not add fabricated tour histories, album links, press quotes, audio playback, social accounts, or contact details.

## Motion, theme, and accessibility

Introduce the two festival-title words with a short staggered arrival. Programme rows can receive a brief transform-and-opacity transition after a filter change. Saving sets provides explicit textual feedback. Do not animate dimensions or use an unbounded scroll listener. The ticker is the only perpetual animation and always offers pause and reduced-motion behavior.

The theme initially follows the system and supports a local Light/Dark choice. Keep the button's visible label in its accessible name and preserve contrast across all routes. The event's photographs remain unchanged. Use one page theme throughout rather than alternating inverted sections.

Provide a skip link, semantic navigation, one h1 per page, properly nested headings, native labeled controls, visible focus, accurate selected states, and useful empty states. The programme must be readable with a keyboard and on phones. At small widths, time and artist stay together while stage and save action move beneath. The personal planner stacks the pass calculator after the schedule.

## Asset and packaging contract

Package three original performer images, their responsive 640px and 960px variants, Anton, Geist, font licenses, Lucide's license, CREDITS.txt, and provenance.json. hero.webp duplicates the Faye image for parent-gallery compatibility. Responsive variants are not extra original photographs.

The performer images were generated specifically for this fictional event. No real celebrity likeness, brand logo, or existing artist photo was requested. Exact generation briefs and method are retained. Keep all runtime paths relative so the six-page package works after extraction without a framework installation or external image service.

The calendar serializer, programme data, and actual interaction logic must remain reproducible from the included source and this prompt. Do not leave placeholder links or buttons. The public demo does not send messages, collect payments, or subscribe visitors to anything.

## Validation

Test both days, stage and artist filters, empty-filter recovery, save/remove persistence, the deliberate Friday overlap, cross-day non-overlap, pass totals and coverage, clearing, and calendar export. Verify the calendar's event count, dates, times, escaping, folding, and line endings through a focused deterministic test.

Inspect the homepage, programme, planner, and representative artist page at desktop and phone sizes, including 1280, 768, 390, and 320px where appropriate. Test both themes and the ticker pause state. Confirm that no document-level horizontal overflow occurs and that reduced motion leaves a complete static lineup.

Run local route and asset checks, ZIP integrity and exact prompt-match checks, TypeScript, scoped lint, a performance/accessibility audit, and the parent production build. Only count the site toward the active goal after its ProtoSites publication succeeds.


## Exact programme records

```json
{
  "artists": [
    {
      "slug": "faye-lumen",
      "name": "Faye Lumen",
      "genre": "Art pop",
      "image": "faye.webp",
      "line": "A voice that changes the room.",
      "bio": "Faye Lumen is a fictional vocalist created for the Night Shapes concept. Her imagined set moves between intimate songs and expansive electronic arrangements.",
      "detail": "The performance direction pairs a close, expressive vocal presence with a wide stage atmosphere. This is an original artist concept and generated image, not a real performer profile or release announcement."
    },
    {
      "slug": "slow-circuit",
      "name": "Slow Circuit",
      "genre": "Live electronics",
      "image": "circuit.webp",
      "line": "Built live. Felt together.",
      "bio": "Slow Circuit is a fictional electronic-music project built around live synthesis and a patient sense of momentum.",
      "detail": "The imagined performance begins with small patterns and lets them develop into a larger shared rhythm. No real recordings, endorsements, or artist bookings are implied."
    },
    {
      "slug": "glass-orchard",
      "name": "Glass Orchard",
      "genre": "Ambient club",
      "image": "orchard.webp",
      "line": "Space, texture, and a pulse.",
      "bio": "Glass Orchard is a fictional electronic duo exploring the meeting point of atmosphere and dance-floor energy.",
      "detail": "Their concept set brings soft textures into sharper focus over time. The stage photograph and biography were created for this demonstration and do not depict a real booked act."
    }
  ],
  "days": [
    {
      "id": "friday",
      "name": "Friday",
      "date": "2027-09-10",
      "label": "10 September"
    },
    {
      "id": "saturday",
      "name": "Saturday",
      "date": "2027-09-11",
      "label": "11 September"
    }
  ],
  "sets": [
    {
      "id": "friday-faye",
      "artist": "faye-lumen",
      "day": "friday",
      "stage": "Hall",
      "start": "19:00",
      "end": "20:00"
    },
    {
      "id": "friday-circuit",
      "artist": "slow-circuit",
      "day": "friday",
      "stage": "Yard",
      "start": "19:30",
      "end": "20:30"
    },
    {
      "id": "friday-orchard",
      "artist": "glass-orchard",
      "day": "friday",
      "stage": "Hall",
      "start": "21:00",
      "end": "22:00"
    },
    {
      "id": "saturday-orchard",
      "artist": "glass-orchard",
      "day": "saturday",
      "stage": "Yard",
      "start": "18:00",
      "end": "19:00"
    },
    {
      "id": "saturday-faye",
      "artist": "faye-lumen",
      "day": "saturday",
      "stage": "Hall",
      "start": "19:15",
      "end": "20:15"
    },
    {
      "id": "saturday-circuit",
      "artist": "slow-circuit",
      "day": "saturday",
      "stage": "Hall",
      "start": "21:00",
      "end": "22:30"
    }
  ],
  "passes": [
    {
      "id": "friday",
      "name": "Friday concept pass",
      "price": 59,
      "days": [
        "friday"
      ]
    },
    {
      "id": "saturday",
      "name": "Saturday concept pass",
      "price": 69,
      "days": [
        "saturday"
      ]
    },
    {
      "id": "weekend",
      "name": "Weekend concept pass",
      "price": 109,
      "days": [
        "friday",
        "saturday"
      ]
    }
  ]
}
```

## Reference interaction handler

```javascript
const createCalendar = function createCalendar(
  data,
  selectedIds,
  timestamp = new Date().toISOString(),
) {
  const escape = (value) =>
    value
      .replaceAll('\\', '\\\\')
      .replaceAll('\n', '\\n')
      .replaceAll(',', '\\,')
      .replaceAll(';', '\\;');
  const stamp = timestamp.replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ProtoSites//Night Shapes Concept//EN',
    'CALSCALE:GREGORIAN',
    'X-WR-CALNAME:Night Shapes concept schedule',
  ];
  for (const set of data.sets.filter((item) => selectedIds.includes(item.id))) {
    const artist = data.artists.find((item) => item.slug === set.artist);
    const day = data.days.find((item) => item.id === set.day);
    const date = day.date.replaceAll('-', '');
    lines.push(
      'BEGIN:VEVENT',
      'UID:' + set.id + '@night-shapes.example',
      'DTSTAMP:' + stamp,
      'DTSTART:' + date + 'T' + set.start.replace(':', '') + '00',
      'DTEND:' + date + 'T' + set.end.replace(':', '') + '00',
      'SUMMARY:' + escape(artist.name + ' | Night Shapes concept'),
      'LOCATION:' + escape(set.stage + ' (fictional stage)'),
      'DESCRIPTION:Fictional concept schedule. No ticket purchased or real booking made.',
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return (
    lines
      .flatMap((line) =>
        (line.match(/.{1,73}/g) || ['']).map(
          (part, index) => (index ? ' ' : '') + part,
        ),
      )
      .join('\r\n') + '\r\n'
  );
};
(() => {
  const data = JSON.parse(document.querySelector('#night-data').textContent);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const system = matchMedia('(prefers-color-scheme: dark)');
  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback;
    } catch {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }
  let preferred = read('night-shapes-theme', null);
  if (!['light', 'dark'].includes(preferred)) preferred = null;
  const theme = document.querySelector('#theme');
  function applyTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    theme.textContent = dark ? 'Light' : 'Dark';
    theme.setAttribute(
      'aria-label',
      dark ? 'Use light theme' : 'Use dark theme',
    );
  }
  applyTheme(preferred ? preferred === 'dark' : system.matches);
  theme.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    preferred = dark ? 'dark' : 'light';
    applyTheme(dark);
    write('night-shapes-theme', preferred);
  });
  system.addEventListener('change', () => {
    if (!preferred) applyTheme(system.matches);
  });
  function reveal(el, delay = 0) {
    if (el && !reduced.matches)
      el.animate(
        [
          { transform: 'translateY(16px)', opacity: 0.75 },
          { transform: 'translateY(0)', opacity: 1 },
        ],
        { duration: 550, delay, easing: 'cubic-bezier(.16,1,.3,1)' },
      );
  }
  document
    .querySelectorAll('.title-word')
    .forEach((word, index) => reveal(word, index * 80));
  reduced.addEventListener('change', () => {
    if (reduced.matches) document.getAnimations().forEach((a) => a.cancel());
  });
  const ticker = document.querySelector('.ticker-section');
  if (ticker) {
    const toggle = document.querySelector('#ticker-toggle');
    let paused = read('night-shapes-ticker-paused', false) === true;
    function updateTicker() {
      ticker.classList.toggle('paused', paused);
      toggle.textContent = paused ? 'Play' : 'Pause';
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.setAttribute(
        'aria-label',
        (paused ? 'Play' : 'Pause') + ' lineup motion',
      );
    }
    updateTicker();
    toggle.addEventListener('click', () => {
      paused = !paused;
      updateTicker();
      write('night-shapes-ticker-paused', paused);
    });
  }
  const stored = read('night-shapes-sets', []);
  const selected = new Set(
    Array.isArray(stored)
      ? stored.filter((id) => data.sets.some((set) => set.id === id))
      : [],
  );
  const artistFor = (set) =>
    data.artists.find((artist) => artist.slug === set.artist);
  const dayFor = (set) => data.days.find((day) => day.id === set.day);
  const selectedSets = () =>
    data.sets
      .filter((set) => selected.has(set.id))
      .sort(
        (a, b) =>
          dayFor(a).date.localeCompare(dayFor(b).date) ||
          a.start.localeCompare(b.start),
      );
  function overlaps(a, b) {
    return a.day === b.day && a.start < b.end && a.end > b.start;
  }
  function conflicts() {
    const chosen = selectedSets();
    const pairs = [];
    chosen.forEach((a, index) =>
      chosen.slice(index + 1).forEach((b) => {
        if (overlaps(a, b)) pairs.push([a, b]);
      }),
    );
    return pairs;
  }
  function buttonMarkup(set) {
    const active = selected.has(set.id);
    const label = active ? 'Remove set' : 'Add set';
    return `<button type="button" class="save-set" data-set="${set.id}" aria-pressed="${active}" aria-label="${label}: ${artistFor(set).name}, ${dayFor(set).name}, ${set.start}">${label} ${active ? data.icons.check : data.icons.plus}</button>`;
  }
  function rowMarkup(set) {
    const artist = artistFor(set);
    return `<article class="set-row"><div class="set-time"><time>${set.start}</time><span>until ${set.end}</span></div><div class="set-artist"><h3><a href="${artist.slug}.html">${artist.name}</a></h3><p>${artist.genre}</p></div><span class="stage-label">${set.stage}</span>${buttonMarkup(set)}</article>`;
  }
  function updateButtons() {
    document
      .querySelectorAll('.plan-count')
      .forEach((el) => (el.textContent = String(selected.size)));
    document.querySelectorAll('[data-set]').forEach((button) => {
      const set = data.sets.find((item) => item.id === button.dataset.set);
      if (!set) return;
      const active = selected.has(set.id);
      const label = active ? 'Remove set' : 'Add set';
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute(
        'aria-label',
        label +
          ': ' +
          artistFor(set).name +
          ', ' +
          dayFor(set).name +
          ', ' +
          set.start,
      );
      button.innerHTML =
        label + ' ' + (active ? data.icons.check : data.icons.plus);
    });
  }
  const passType = document.querySelector('#pass-type');
  const passQuantity = document.querySelector('#pass-quantity');
  function updatePass() {
    if (!passType) return;
    const pass =
      data.passes.find((item) => item.id === passType.value) ||
      data.passes.at(-1);
    const amount = Number(passQuantity.value);
    const quantity =
      Number.isInteger(amount) && amount >= 1 && amount <= 6 ? amount : 1;
    document.querySelector('#pass-total').textContent = new Intl.NumberFormat(
      'en-US',
      { style: 'currency', currency: 'USD', maximumFractionDigits: 0 },
    ).format(pass.price * quantity);
    const uncovered = [
      ...new Set(
        selectedSets()
          .filter((set) => !pass.days.includes(set.day))
          .map((set) => dayFor(set).name),
      ),
    ];
    document.querySelector('#pass-coverage').textContent = !selected.size
      ? 'Save sets to compare this sample pass with your draft.'
      : uncovered.length
        ? uncovered.join(' and ') + ' sets are outside this sample pass choice.'
        : 'This sample pass covers the nights currently in your draft.';
  }
  function renderPlan() {
    const container = document.querySelector('#saved-sets');
    if (!container) return;
    document.querySelector('#empty-plan').hidden = selected.size > 0;
    container.innerHTML = data.days
      .map((day) => {
        const chosen = selectedSets().filter((set) => set.day === day.id);
        return chosen.length
          ? `<section class="saved-day"><h2>${day.name}</h2>${chosen.map(rowMarkup).join('')}</section>`
          : '';
      })
      .join('');
    const pairs = conflicts();
    document.querySelector('#conflicts').hidden = pairs.length === 0;
    const list = document.querySelector('#conflict-list');
    list.replaceChildren();
    pairs.forEach(([a, b]) => {
      const li = document.createElement('li');
      li.textContent =
        artistFor(a).name +
        ' overlaps ' +
        artistFor(b).name +
        ' on ' +
        dayFor(a).name +
        '. Pick one, or keep both in your draft.';
      list.append(li);
    });
    document.querySelector('#export-calendar').disabled = selected.size === 0;
    document.querySelector('#clear-plan').disabled = selected.size === 0;
    updatePass();
  }
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('[data-set]');
    if (!button) return;
    const set = data.sets.find((item) => item.id === button.dataset.set);
    if (!set) return;
    const removing = selected.has(set.id);
    if (removing) selected.delete(set.id);
    else selected.add(set.id);
    const persisted = write('night-shapes-sets', [...selected]);
    updateButtons();
    renderPlan();
    let message =
      (removing ? 'Removed ' : 'Added ') +
      artistFor(set).name +
      (removing ? ' from' : ' to') +
      ' My night.';
    if (!persisted) message += ' Saved for this visit only.';
    if (
      !removing &&
      selectedSets().some(
        (other) => other.id !== set.id && overlaps(set, other),
      )
    )
      message += ' This overlaps another saved set.';
    document
      .querySelectorAll('.status')
      .forEach((el) => (el.textContent = message));
    if (document.querySelector('#saved-sets')) {
      const target =
        document.querySelector('[data-set="' + set.id + '"]') ||
        document.querySelector('#clear-plan');
      if (target && !target.disabled) target.focus();
      else document.querySelector('#empty-plan a')?.focus();
    }
  });
  updateButtons();
  renderPlan();
  passType?.addEventListener('change', updatePass);
  passQuantity?.addEventListener('change', updatePass);
  document.querySelector('#clear-plan')?.addEventListener('click', () => {
    selected.clear();
    const persisted = write('night-shapes-sets', []);
    document.querySelectorAll('.status').forEach((el) => {
      el.textContent = persisted
        ? 'My night cleared.'
        : 'Cleared for this visit only. Browser storage is unavailable.';
    });
    updateButtons();
    renderPlan();
    document.querySelector('#empty-plan a').focus();
  });
  document.querySelector('#export-calendar')?.addEventListener('click', () => {
    if (!selected.size) return;
    const calendar = createCalendar(data, [...selected]);
    const url = URL.createObjectURL(
      new Blob([calendar], { type: 'text/calendar;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'night-shapes-concept-schedule.ics';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  const tabs = [...document.querySelectorAll('[data-day-tab]')];
  const stage = document.querySelector('#stage-filter');
  const artist = document.querySelector('#artist-filter');
  let day = 'friday';
  if (artist) {
    const wanted = new URLSearchParams(location.search).get('artist');
    if (data.artists.some((item) => item.slug === wanted))
      artist.value = wanted;
  }
  function filterProgramme() {
    if (!stage) return;
    let count = 0;
    document.querySelectorAll('#programme-panel .set-row').forEach((row) => {
      row.hidden =
        row.dataset.day !== day ||
        (stage.value !== 'All stages' && row.dataset.stage !== stage.value) ||
        (artist.value !== 'all' && row.dataset.artist !== artist.value);
      if (!row.hidden) {
        reveal(row, count * 45);
        count++;
      }
    });
    document.querySelector('#set-count').textContent =
      count + ' ' + (count === 1 ? 'set' : 'sets');
    document.querySelector('#empty-programme').hidden = count > 0;
    document
      .querySelector('#programme-panel')
      .setAttribute('aria-labelledby', 'day-' + day);
  }
  function chooseDay(index) {
    day = tabs[index].dataset.dayTab;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    filterProgramme();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => chooseDay(index));
    tab.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft')
        next = 1 - index;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      chooseDay(next);
      tabs[next].focus();
    });
  });
  stage?.addEventListener('change', filterProgramme);
  artist?.addEventListener('change', filterProgramme);
  document.querySelector('#reset-filters')?.addEventListener('click', () => {
    stage.value = 'All stages';
    artist.value = 'all';
    filterProgramme();
    stage.focus();
  });
  filterProgramme();
})();

```
