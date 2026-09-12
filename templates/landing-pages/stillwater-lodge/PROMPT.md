# Stillwater Lodge — complete hospitality website brief

Create Stillwater Lodge, an imagined intimate lakeside retreat for slow mornings, good food, woodland walks, and a little more time outside. Build a complete nine-page hospitality website with a credible browsing journey and a working local stay planner. The result must feel like a thoughtfully designed independent hotel website, with deep editorial content, large and varied photography, room comparison, room detail pages, dining menus, activities, and a practical way to collect an itinerary. Do not create a single hero and a handful of generic feature cards. The user must be able to explore the destination in depth and make meaningful choices without encountering decorative dead ends.

Stillwater is fictional. The accommodation, location, prices, sizes, amenities, activity durations, menu items and policies are illustrative. The photographs establish atmosphere and are not documentation of an actual Stillwater property. The planner saves only local browser data or creates a downloadable text file. It does not reserve rooms, check live inventory, collect payment, send email, submit a message, or create an external booking. Keep this context concise but clear throughout the relevant practical flows.

## Research foundation and observed behavior

The primary reference is Hyll Hotel, discovered through Minimal Gallery's Hotel & Venue category at https://minimal.gallery/tag/hotel-venue/. Its individual listing is https://minimal.gallery/hyll/. The actual website at https://www.hyllhotel.com and its stays page at https://hyllhotel.com/stay/ were inspected in the browser on September 8, 2026. This is a different reference from Ramble. Use its editorial country-house language, image hierarchy, room comparison structure, and menu experience as the quality benchmark. Do not copy Hyll's name, wordmark, photography, guest claims, exact copy, location, contact information, booking links, or source code.

The observed homepage has a pale, warm canvas, a centered expressive serif wordmark, a compact menu control on the left, and a dark booking action on the right. Its opening imagery is inset within substantial side margins rather than bleeding to the very edge. The loaded hero photograph showed a warm sitting room, natural window light, an armchair, and a lamp. Subsequent sections alternate narrative typography and room or lifestyle photography. A concise hotel introduction leads into a stay story, a room archive, food and drink content, curated stays, and separate invitations to be active or idle. The reference's full DOM exposes complete navigation destinations for stays, dining, seasonal visits, experiences, events, gifts, about, and contact.

The menu was opened and inspected. It presents a large split composition: generously sized serif navigation links on one side, a substantial bedroom photograph on the other, a visible close action, and secondary practical navigation. This is an actual observed interaction, not an inferred pattern. Adapt its spatial confidence into the Stillwater menu while keeping the destination labels original and every link local.

The stay listing was also directly inspected. It offers radio-style filters for all rooms and two room families. Each room is a large horizontal composition with descriptive information at left and an oversized room photograph at right. Room details expand inline, exposing sleeping capacity, bed type, and amenities. The image area includes previous/next controls and small position indicators. The real booking action leads to an external booking service; that destination was not used to make a reservation. Its inventory, pricing computation, checkout, exact easing curves, and backend architecture were not verified. Stillwater's local planning logic is an original implementation, not a copy or claim about the reference system.

## Original identity and design language

Use Stillwater in a large, compact Georgia serif wordmark, with LODGE in very small tracked sans-serif below it. Center this identity in a three-part header. The left menu button contains a simple three-line mark and a small text label on desktop. The right action reads Plan a stay and is dark olive with a small arrow. Avoid a decorative registration mark, luxury crest, fake award badge, or unrelated logo symbol. The brand should feel calm and human, not like a generic travel booking platform.

Use a warm paper background of #f5f2eb, dark olive ink near #272d25, deep green controls near #293226, pale oatmeal sections, and muted sage dividers. Let the imagery supply the blue of the water, the brown of timber, and the green of the trees. The overall direction is an intimate country-house editorial aesthetic translated into a lakeside lodge. Avoid glossy gradients, aggressive black-and-white contrast, bright app-blue actions, pill-shaped cards everywhere, or a dashboard-style layout.

Typography pairs a locally hosted Geist variable font with system Georgia. Geist handles navigation, labels, controls, prices, dates, capacities, and small practical copy. Georgia handles the wordmark, large headings, room names, and selected editorial paragraphs. Use italics as a second voice within carefully chosen headlines. Headlines may be large, but retain the reference's sense of intimacy by balancing them with modest practical controls. Body text should remain easy to read. Do not use monospace for customer-facing room or booking information.

Use three-to-nine-percent horizontal margins depending on the section. The opening image is inset around six percent on desktop. Editorial passages sit in a narrower centered column and have substantial vertical breathing room. Story sections alternate portrait photography with relatively narrow text columns. Room listing rows are broad and information-rich. Corners are only lightly softened, generally two or three pixels. There should be no heavy shadows around content blocks. Photography can be atmospheric and deep, while text stays crisp against the pale page.

## Complete pages and navigation

Generate index.html, stays.html, experiences.html, dining.html, about.html, plan.html, waterside-room.html, forest-suite.html, and cedar-cabin.html. Every page includes the shared sticky header, full menu dialog, footer, accessible skip link, and clear page title. Use relative links that work beneath a nested demo path. The footer links back to the parent ProtoSites library with ../../. Navigation should never imply a real hotel phone number or email address.

The menu destinations are Stay awhile, Do a little, Eat well, Our corner of the world, and Plan your stay. Add a smaller question link to about.html#questions. The menu is a native dialog so focus remains inside it, Escape dismisses it, and background controls are unavailable while open. Update aria-expanded on the menu trigger when it opens and closes. At mobile sizes, remove the secondary photograph and retain generous readable navigation links. The menu should fit a real phone viewport without clipping its final destination.

Every room card links to a full dedicated room page. Every Plan a stay action leads to plan.html, optionally with a validated stay query parameter. Experience links can open filtered views using the mood parameter, and dining can preselect the supper experience. Query parameters are conveniences, not trusted data. Ignore values that do not appear in the known dataset. Keep the same shared planner behavior regardless of the route used to reach it.

## Homepage narrative and visual composition

Open with a large inset lake photograph under the header. A small contextual label sits near the image's upper edge. Place the original headline A little closer to doing nothing low on the left, with its second phrase italic. A quiet Find your room link appears low on the right, or beneath the headline on mobile. The image should remain the dominant visual element. It needs explicit dimensions, a local hero.webp file, high fetch priority, and object-fit cover. Add a very slight scale-settle animation over roughly two seconds. Do not hide the entire page behind a loader.

Follow with a centered editorial introduction about good food, deep sleep, and a lake that asks nothing of the guest. Use a small uppercase label, then a substantial serif paragraph with one italic phrase. This section should create a pause after the photograph. It is not a three-card benefits row. The next section pairs a tall cabin photograph with the heading Wake up somewhere else, a concise stay introduction, a room link, and a secondary approach link.

The room preview section uses a pale oatmeal background, a large heading, and a horizontal archive of three room options. On desktop, all three may fit; on tablet and mobile the track scrolls naturally. Each card has a large photograph, room family, capacity, name, short atmosphere line, and a real detail link. Provide previous and next controls below the track. The arrows move one actual card width plus the computed gap. Use scroll snapping without hijacking page scrolling.

Next place a broad lake photograph with white text over a restrained dark shade. The headline More in the moment provides a change in scale and atmosphere. Follow it with the food story, reversing the image/text order from the earlier stay story. The final image section is a pair of substantial destination panels: Do a little leads to outdoor activities, and Do less leads to lodge-based experiences. Both panels use real local photographs and a visible route into the site. Close with an editorial invitation and the practical footer.

## Stays listing and detail pages

The stays page starts with a large bedroom photograph and the title Stay awhile. A centered introductory passage describes three different ways to settle in. Below it are filters All stays, Lodge rooms, and Private cabins. Selecting a family hides nonmatching rows and updates a live count. Use aria-pressed on the filter buttons. Hidden rows should be absent from layout and keyboard navigation. Do not merely fade them while retaining empty space.

Each room row follows the observed reference hierarchy: left-side room family, serif name, a substantial description, capacity, size, starting sample rate, primary room-detail action, secondary planning action, and expandable amenities. The right side is a large photograph with a discreet room number and atmosphere caption. On mobile, put the image first and let the description and actions follow. The three rooms are Waterside Room, Forest Suite, and Cedar Cabin. Their exact data is included below and must remain the source of truth for both presentation and calculation.

Waterside Room is a two-guest, 28-square-metre concept with a sample nightly rate of 245 dollars. Forest Suite is a three-guest, 46-square-metre concept at 325 dollars. Cedar Cabin is a four-guest, 62-square-metre concept at 395 dollars. These values are illustrative and should never be presented as verified availability. Each room has six amenities and a three-image gallery. The listing ends with an included-details section about breakfast, room to roam, and comfortable everyday things.

Each room detail page contains a breadcrumb back to stays, room family, large name, atmosphere line, and expansive image gallery. Gallery arrows wrap through three known assets and update the numerical counter and selected position controls. Clicking the main photograph opens a native modal with the currently selected image. Provide a visible close action and explicit Escape handling. Follow the gallery with a split editorial description and a bordered practical panel containing rate, size, capacity, breakfast context, and a preselected planner link.

Continue the room page with amenities, disclosure panels, a large woodland image, and two related stays. The disclosure panels explain concept status, illustrative arrival/departure timing, and the need to verify individual accessibility requirements with a real accommodation provider. Do not invent accessible facilities or a real pet policy. The page must remain useful and visually rich below the gallery, not terminate after a booking card.

## Experiences and dining journeys

The experiences page opens with woodland photography and the headline Do a little. Or a little less. A centered passage introduces four possibilities: First light on the lake, The long way round, Supper at the long table, and The art of doing less. Their categories are Outdoors and At the lodge. Each activity has a large image, duration, title, description, indicative per-person price or included status, and a working Add to my plan action.

Selecting an experience toggles its pressed state and button label, then stores only known activity identifiers in the local plan data. The confirmation should explain how many ideas were saved and that nothing is booked. A link opens the planner with those choices restored. Filters show all, outdoor, or lodge experiences, and valid mood query parameters select the corresponding category on arrival. The page closes with seasonal editorial guidance that makes the fictional nature of the setting explicit rather than claiming actual weather or access conditions.

The dining page contains a large atmospheric restaurant photograph, a breakfast story, an interactive sample menu, and an after-dinner lounge story. Menu tabs are Supper, Breakfast, and By the glass. Switching tabs updates actual dish rows, descriptions, and sample prices. Breakfast items are marked included. The supper list contains a squash and barley dish, a trout dish, mushroom pie, and apple crumble. The drinks list includes clearly identified alcohol-free options and an illustrative house wine. No order button or table reservation is submitted. A planning link can preselect the supper activity locally.

## Local stay planner and calculation rules

The planner is a complete practical page with a large introduction, a three-part form, and a sticky summary column on desktop. The form asks for arrival, departure, guests, accommodation, and optional experiences. Use native date inputs, a guest select, room radio inputs, and activity checkboxes. Label everything visibly and group related controls with fieldsets and legends. Avoid custom datepicker complexity when native inputs already serve the task.

Dates must represent a stay from today onward, with departure after arrival and a length from one through fourteen nights. Calculate nights using UTC midnight timestamps so daylight-saving changes do not create fractional nights. Use a local-calendar date string to establish today's minimum. Reject absent, malformed, reversed, past, or overlong dates. Guests range from one to four. Reject a room whose illustrated capacity is lower than the guest count. Visually soften incompatible room choices but keep enough information to understand why another room is needed.

The room subtotal is the nightly rate multiplied by nights. Paid experiences are charged once per selected experience per guest, not once per night. First light on the lake costs 35 dollars per person and supper costs 65 dollars per person. The walk and idle afternoon are included. The sample total is room subtotal plus the selected experience charges. Show each line separately, followed by a prominent total. State that tax, travel, live availability and a booking are not included.

When inputs are invalid, show a useful explanation and disable saving and downloading. Do not retain an old valid total after the user makes a new invalid selection. When inputs become valid, update the summary immediately and allow an explicit Update my stay plan action to confirm readiness. Saving stores validated dates, guest count, room identifier and selected activity identifiers under stillwater-plan-v1. Restored data must be validated before use. Corrupt storage falls back to an empty plan. Unavailable storage should leave the current form and download working.

Download my itinerary creates a plain-text file with the room, dates, nights, guests, selected activities, durations and sample total. Include a clear sentence that no reservation, payment or message was submitted. Use a temporary Blob URL and revoke it after initiating the download. Do not request a name, email, phone number, passport, card, or address. There is no reason to collect personal information for this local demonstration.

## About, accessibility, motion, and delivery

The about page is a real editorial destination with a large opening statement, broad landscape image, two-column story, three values, and frequently asked questions. Explain the imagined property, licensed mood photography, local planner, sample rates and nonbooking scope. Provide enough practical context that users do not confuse a beautiful demo with an operating hotel. Keep this honest information integrated with the experience rather than turning every section into a disclaimer.

Use semantic landmarks, one h1 per page, coherent headings, native controls, descriptive image alternatives, and visible keyboard focus in a warm clay accent. Main navigation must work with keyboard and touch. Native dialogs should trap focus and restore it to their triggers. Handle Escape at capture phase so a focused input does not accidentally prevent dismissal. Use live regions for result counts, saved ideas, planner errors, and confirmation states without excessive announcements.

Motion should be restrained but present. The opening image settles gently. Editorial sections reveal with a small vertical movement and opacity transition when entering the viewport. Use IntersectionObserver, unobserve after the first reveal, and leave content visible if the API is unavailable. Room archives use native smooth scroll and snap; gallery controls change the selected image. Dialogs enter with a short fade and vertical offset. Respect prefers-reduced-motion by removing decorative motion and using immediate carousel scrolling. Never make content permanently invisible while waiting for animation.

At 390 pixels, every page must fit without horizontal document overflow. The hero remains immersive, the header retains menu and planning actions, the room archive scrolls internally, and room detail pages become one column. Filters wrap neatly. The planner summary moves below the form and becomes a complete review section. Inputs retain adequate tap targets, and room options show their names and capacities without truncation. Avoid desktop fixed widths and nested containers that leave the actual content too narrow.

The build module lives in scripts/stillwater-lodge and exports buildStillwaterLodge(), returning an object containing prompt. Generated files live in public/demos/stillwater-lodge. Write the complete reconstruction prompt to public/prompts/stillwater-lodge.md and duplicate it as PROMPT.md in the demo. Append exact destination data and the actual full JavaScript implementation under the heading Reference interaction handler. Keep all assets local and preserve hero.webp for the parent library preview.

Use licensed Unsplash images with the exact identifiers recorded in assets/provenance.json. Local files include hero, cabin, room, suite, forest, lake, dining, breakfast and lounge WebP images. Credit https://unsplash.com/license and make clear that the images are illustrative and do not depict one real property. The local Geist font is covered by the SIL Open Font License and includes its license text. All brand copy, layout, CSS and planning logic are original project work. Do not redistribute source photographs from Hyll.

Before handoff, verify all nine generated pages, relative links, local assets and unique h1 headings. Inspect desktop and 390-pixel layouts. Exercise room filtering, room gallery stepping and modal dismissal, activity selection persistence, menu tabs, planner date validation, room capacity validation, cost calculation, local save restoration, and a download attempt. A representative valid check is two nights in the 245-dollar Waterside Room for two guests with a 35-dollar paddle each: 490 plus 70 equals 560 dollars. A four-guest Waterside selection must reject the capacity mismatch. Report observed browser behavior and any untested limitations honestly.

## Final responsive image implementation

Every local photograph has 480,800,and1200-pixel WebP derivatives plus the original. Use90vw sizes for primary images and a45vw desktop/90vw phone hint for supporting photographs. When the room gallery changes, update both src and srcset in the main image and enlarged dialog, and give the enlarged image a90vw hint. Include all derivatives in downloads; do not leave a stale responsive source when switching images.


## Exact destination data

```json
{
  "stays": [
    {
      "id": "waterside-room",
      "name": "Waterside Room",
      "type": "Lodge rooms",
      "rate": 245,
      "guests": 2,
      "size": 28,
      "image": "room",
      "gallery": [
        "room",
        "lounge",
        "lake"
      ],
      "tag": "A window to the water",
      "description": "A good bed, a deep armchair, and the lake doing its thing outside. Our most intimate rooms keep the essentials close and the days wonderfully open.",
      "amenities": [
        "King-size bed",
        "Rain shower",
        "Lake-facing window",
        "Reading corner",
        "Tea & coffee",
        "Breakfast included"
      ]
    },
    {
      "id": "forest-suite",
      "name": "Forest Suite",
      "type": "Lodge rooms",
      "rate": 325,
      "guests": 3,
      "size": 46,
      "image": "suite",
      "gallery": [
        "suite",
        "lounge",
        "forest"
      ],
      "tag": "A little room to linger",
      "description": "A generous bedroom and a separate sitting space, tucked into the quiet side of the lodge. For long mornings, another chapter, and absolutely no hurry.",
      "amenities": [
        "King-size bed",
        "Separate lounge",
        "Sofa bed for one",
        "Deep soaking tub",
        "Forest outlook",
        "Breakfast included"
      ]
    },
    {
      "id": "cedar-cabin",
      "name": "Cedar Cabin",
      "type": "Private cabins",
      "rate": 395,
      "guests": 4,
      "size": 62,
      "image": "cabin",
      "gallery": [
        "cabin",
        "room",
        "forest"
      ],
      "tag": "Your own small world",
      "description": "A timber hideaway among the trees, with room to gather and space to retreat. A private deck, a slow breakfast, and a path that eventually leads to the lake.",
      "amenities": [
        "Two bedrooms",
        "Private timber deck",
        "Wood-burning stove",
        "Kitchenette",
        "Dog-friendly concept",
        "Breakfast hamper"
      ]
    }
  ],
  "experiences": [
    {
      "id": "paddle",
      "title": "First light on the lake",
      "category": "Outdoors",
      "image": "lake",
      "duration": "90 minutes",
      "price": 35,
      "description": "Take a quiet paddle while the water is still. A gentle start to a day with no particular destination."
    },
    {
      "id": "walk",
      "title": "The long way round",
      "category": "Outdoors",
      "image": "forest",
      "duration": "2 hours",
      "price": 0,
      "description": "Follow a woodland loop, stop where the light falls, and return in time for a late lunch."
    },
    {
      "id": "table",
      "title": "Supper at the long table",
      "category": "At the lodge",
      "image": "dining",
      "duration": "One unhurried evening",
      "price": 65,
      "description": "Seasonal plates, good company, and the pleasure of letting someone else decide what comes next."
    },
    {
      "id": "slow",
      "title": "The art of doing less",
      "category": "At the lodge",
      "image": "lounge",
      "duration": "As long as you like",
      "price": 0,
      "description": "Claim an armchair. Find a book. Let the afternoon take care of itself."
    }
  ]
}
```

## Reference interaction handler

```javascript
(() => {
  'use strict';
  const { stays, experiences } = JSON.parse(
    document.getElementById('lodge-data').textContent,
  );
  const money = (n) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n);
  const key = 'stillwater-plan-v1';
  let saved = {};
  try {
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    if (data && typeof data === 'object' && !Array.isArray(data)) saved = data;
  } catch {
    saved = {};
  }
  const selectedExperiences = new Set(
    Array.isArray(saved.experiences)
      ? saved.experiences.filter((id) => experiences.some((x) => x.id === id))
      : [],
  );
  function persist(data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }
  const menu = document.getElementById('site-menu');
  const menuButton = document.querySelector('.menu-toggle');
  menuButton.addEventListener('click', () => {
    menu.showModal();
    menuButton.setAttribute('aria-expanded', 'true');
  });
  menu.addEventListener('close', () =>
    menuButton.setAttribute('aria-expanded', 'false'),
  );
  document
    .querySelectorAll('[data-close]')
    .forEach((button) =>
      button.addEventListener('click', () => button.closest('dialog').close()),
    );
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key !== 'Escape') return;
      const dialog = [...document.querySelectorAll('dialog[open]')].at(-1);
      if (dialog) {
        event.preventDefault();
        dialog.close();
      }
    },
    true,
  );
  if (
    'IntersectionObserver' in window &&
    !matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    document.body.classList.add('motion-ready');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('seen');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll('.reveal')
      .forEach((node) => observer.observe(node));
  }
  document.querySelectorAll('[data-room-slide]').forEach((button) =>
    button.addEventListener('click', () => {
      const track = document.querySelector('.room-track');
      const width = track
        .querySelector('.stay-card')
        .getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap);
      track.scrollBy({
        left: Number(button.dataset.roomSlide) * (width + gap),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
    }),
  );
  document.querySelectorAll('[data-stay-filter]').forEach((button) =>
    button.addEventListener('click', () => {
      const type = button.dataset.stayFilter;
      const rows = [...document.querySelectorAll('.room-row')];
      rows.forEach((row) => {
        row.hidden = type !== 'All stays' && row.dataset.type !== type;
      });
      document
        .querySelectorAll('[data-stay-filter]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      const count = rows.filter((row) => !row.hidden).length;
      document.getElementById('stay-count').textContent =
        `${count} ${count === 1 ? 'WAY' : 'WAYS'} TO STAY`;
    }),
  );
  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const images = JSON.parse(gallery.dataset.gallery);
    let index = 0;
    const update = (next) => {
      index = (next + images.length) % images.length;
      const image = gallery.querySelector('img');
      image.src = `assets/${images[index]}.webp`;
      image.srcset = `assets/${images[index]}-480.webp 480w, assets/${images[index]}-800.webp 800w, assets/${images[index]}-1200.webp 1200w, assets/${images[index]}.webp 1400w`;
      const enlarged = document.querySelector('#photo-dialog img');
      enlarged.src = image.src;
      enlarged.srcset = image.srcset;
      enlarged.sizes = '90vw';
      document.getElementById('gallery-count').textContent =
        `${String(index + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
      document
        .querySelectorAll('[data-gallery-index]')
        .forEach((button) =>
          button.setAttribute(
            'aria-pressed',
            String(Number(button.dataset.galleryIndex) === index),
          ),
        );
    };
    document
      .querySelectorAll('[data-gallery-step]')
      .forEach((button) =>
        button.addEventListener('click', () =>
          update(index + Number(button.dataset.galleryStep)),
        ),
      );
    document
      .querySelectorAll('[data-gallery-index]')
      .forEach((button) =>
        button.addEventListener('click', () =>
          update(Number(button.dataset.galleryIndex)),
        ),
      );
    update(0);
    gallery
      .querySelector('.gallery-open')
      .addEventListener('click', () =>
        document.getElementById('photo-dialog').showModal(),
      );
  }
  function filterExperiences(category) {
    document.querySelectorAll('.experience-grid article').forEach((article) => {
      article.hidden =
        category !== 'All experiences' && article.dataset.category !== category;
    });
    document
      .querySelectorAll('[data-experience-filter]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.experienceFilter === category),
        ),
      );
  }
  document
    .querySelectorAll('[data-experience-filter]')
    .forEach((button) =>
      button.addEventListener('click', () =>
        filterExperiences(button.dataset.experienceFilter),
      ),
    );
  const mood = new URLSearchParams(location.search).get('mood');
  if (['Outdoors', 'At the lodge'].includes(mood)) filterExperiences(mood);
  function renderExperienceButtons() {
    document.querySelectorAll('[data-save-experience]').forEach((button) => {
      const selected = selectedExperiences.has(button.dataset.saveExperience);
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = selected ? 'Added to my plan ✓' : 'Add to my plan +';
    });
  }
  document.querySelectorAll('[data-save-experience]').forEach((button) =>
    button.addEventListener('click', () => {
      const id = button.dataset.saveExperience;
      if (selectedExperiences.has(id)) selectedExperiences.delete(id);
      else selectedExperiences.add(id);
      saved = { ...saved, experiences: [...selectedExperiences] };
      const stored = persist(saved);
      renderExperienceButtons();
      document.querySelector('.experience-note').textContent = stored
        ? `${selectedExperiences.size} ${selectedExperiences.size === 1 ? 'idea' : 'ideas'} saved for your stay plan. Nothing is booked.`
        : 'Your choices are available for this visit. Browser saving is unavailable.';
    }),
  );
  renderExperienceButtons();
  const menus = {
    supper: [
      ['Roasted squash & barley', 'Sage, brown butter, toasted seeds', 18],
      ['Lake-country trout', 'New potatoes, greens, lemon butter', 32],
      [
        'Woodland mushroom pie',
        'Flaky pastry, garden leaves, mustard cream',
        27,
      ],
      ['Apple & oat crumble', 'Warm custard, a little cinnamon', 12],
    ],
    breakfast: [
      ['The slow morning', 'Eggs, sourdough, mushrooms, roasted tomatoes', 0],
      ['Yoghurt & the season', 'Fruit compote, oats, local-style honey', 0],
      ['Something from the oven', 'Warm pastries, butter, preserves', 0],
      ['A very good cup', 'Coffee, loose-leaf tea, or hot chocolate', 0],
    ],
    drinks: [
      ['Orchard spritz', 'Apple, rosemary, sparkling water · alcohol-free', 9],
      ['A glass of red', 'A soft, seasonal house selection · illustrative', 12],
      ['Lakeside tonic', 'Citrus, cucumber, botanical tonic · alcohol-free', 8],
      ['Something warm', 'Spiced apple, orange peel, a cinnamon stick', 7],
    ],
  };
  function renderMenu(type) {
    const target = document.getElementById('sample-menu');
    if (!target) return;
    target.innerHTML = menus[type]
      .map(
        ([name, description, price]) =>
          `<article class="dish"><div><h3>${name}</h3><span>${price ? money(price) : 'Included'}</span></div><p>${description}</p></article>`,
      )
      .join('');
    document
      .querySelectorAll('[data-menu]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.menu === type),
        ),
      );
  }
  document
    .querySelectorAll('[data-menu]')
    .forEach((button) =>
      button.addEventListener('click', () => renderMenu(button.dataset.menu)),
    );
  renderMenu('supper');
  const form = document.getElementById('stay-planner');
  if (!form) return;
  const localDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const today = localDate(new Date());
  const arrival = document.getElementById('arrival');
  const departure = document.getElementById('departure');
  const guests = document.getElementById('guests');
  arrival.min = today;
  departure.min = today;
  const validDate = (value) =>
    /^\d{4}-\d{2}-\d{2}$/.test(value || '') &&
    !Number.isNaN(Date.parse(value + 'T00:00:00Z'));
  if (validDate(saved.arrival) && saved.arrival >= today)
    arrival.value = saved.arrival;
  if (validDate(saved.departure) && saved.departure > today)
    departure.value = saved.departure;
  if ([1, 2, 3, 4].includes(saved.guests)) guests.value = String(saved.guests);
  const params = new URLSearchParams(location.search);
  const stayId = params.get('stay') || saved.stay;
  if (stays.some((stay) => stay.id === stayId))
    form.querySelector(`input[name="stay"][value="${stayId}"]`).checked = true;
  const requestedExperience = params.get('experience');
  if (experiences.some((x) => x.id === requestedExperience))
    selectedExperiences.add(requestedExperience);
  form.querySelectorAll('[name="experience"]').forEach((input) => {
    input.checked = selectedExperiences.has(input.value);
  });
  let currentPlan = null;
  function readPlan() {
    const stay = stays.find(
      (item) => item.id === new FormData(form).get('stay'),
    );
    const guestCount = Number(guests.value);
    const chosen = [
      ...form.querySelectorAll('[name="experience"]:checked'),
    ].map((input) => experiences.find((x) => x.id === input.value));
    const nights =
      (Date.parse(departure.value + 'T00:00:00Z') -
        Date.parse(arrival.value + 'T00:00:00Z')) /
      86400000;
    return {
      stay,
      guestCount,
      chosen,
      nights,
      arrival: arrival.value,
      departure: departure.value,
    };
  }
  function validation(plan) {
    if (!validDate(plan.arrival) || !validDate(plan.departure))
      return 'Choose an arrival and departure date to complete your plan.';
    if (plan.arrival < today)
      return 'Choose an arrival date from today onward.';
    if (!Number.isInteger(plan.nights) || plan.nights < 1 || plan.nights > 14)
      return 'Choose a stay between 1 and 14 nights, with departure after arrival.';
    if (plan.guestCount > plan.stay.guests)
      return `${plan.stay.name} is designed for up to ${plan.stay.guests} guests. Choose another stay or fewer guests.`;
    return '';
  }
  function updatePlan(showErrors = false) {
    const plan = readPlan();
    const error = validation(plan);
    currentPlan = error ? null : plan;
    document.getElementById('plan-error').textContent = showErrors ? error : '';
    document.getElementById('summary-stay').textContent = plan.stay.name;
    form.querySelectorAll('.planner-room').forEach((label) => {
      const room = stays.find(
        (x) => x.id === label.querySelector('input').value,
      );
      label.classList.toggle('incompatible', plan.guestCount > room.guests);
    });
    document.getElementById('save-plan').disabled = Boolean(error);
    document.getElementById('download-plan').disabled = Boolean(error);
    if (error) {
      document.getElementById('summary-dates').textContent = error;
      document.getElementById('summary-lines').innerHTML = '';
      document.getElementById('plan-total').textContent = '—';
      return;
    }
    const roomTotal = plan.stay.rate * plan.nights;
    const experienceTotal = plan.chosen.reduce(
      (sum, x) => sum + x.price * plan.guestCount,
      0,
    );
    plan.total = roomTotal + experienceTotal;
    document.getElementById('summary-dates').textContent =
      `${plan.arrival} → ${plan.departure} · ${plan.nights} ${plan.nights === 1 ? 'night' : 'nights'} · ${plan.guestCount} ${plan.guestCount === 1 ? 'guest' : 'guests'}`;
    document.getElementById('summary-lines').innerHTML =
      `<div class="summary-line"><span>${plan.nights} nights × ${money(plan.stay.rate)}</span><span>${money(roomTotal)}</span></div>` +
      plan.chosen
        .map(
          (x) =>
            `<div class="summary-line"><span>${x.title}</span><span>${x.price ? money(x.price * plan.guestCount) : 'Included'}</span></div>`,
        )
        .join('');
    document.getElementById('plan-total').textContent = money(plan.total);
  }
  form.addEventListener('change', () => {
    updatePlan(true);
    document.getElementById('plan-status').textContent = '';
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    updatePlan(true);
    if (currentPlan)
      document.getElementById('plan-status').textContent =
        'Your sample plan is ready. Save it locally or download a copy.';
  });
  document.getElementById('save-plan').addEventListener('click', () => {
    updatePlan(true);
    if (!currentPlan) return;
    const p = currentPlan;
    saved = {
      arrival: p.arrival,
      departure: p.departure,
      guests: p.guestCount,
      stay: p.stay.id,
      experiences: p.chosen.map((x) => x.id),
    };
    document.getElementById('plan-status').textContent = persist(saved)
      ? 'Saved in this browser. Nothing is booked or sent.'
      : 'Browser saving is unavailable. You can still download your plan.';
  });
  document.getElementById('download-plan').addEventListener('click', () => {
    updatePlan(true);
    if (!currentPlan) return;
    const p = currentPlan;
    const text = [
      'STILLWATER LODGE — YOUR SAMPLE STAY',
      '',
      p.stay.name,
      `${p.arrival} to ${p.departure}`,
      `${p.nights} nights · ${p.guestCount} guests`,
      '',
      'A few possibilities:',
      ...p.chosen.map((x) => `- ${x.title} (${x.duration})`),
      '',
      `Illustrative total: ${money(p.total)}`,
      '',
      'Stillwater Lodge is a fictional hospitality concept. No reservation, payment, or message has been submitted.',
    ].join('\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'stillwater-stay-plan.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.getElementById('plan-status').textContent =
      'Your sample itinerary is ready to download. Nothing is booked.';
  });
  updatePlan();
})();

```
