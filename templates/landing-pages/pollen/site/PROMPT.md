# Pollen: a complete neighborhood bakery concept and local pickup planner

Build Pollen as an original expressive bakery website with eight complete pages: index.html, menu.html, story.html, pickup.html, basket.html, and three individual bake pages. It must have its own food-led identity and composition rather than reuse a software dashboard, apparel storefront, restaurant menu shell, or generic shopping template. The experience should feel generous, tactile, and neighborhood-scaled, while its actual interactions remain clear and dependable.

The fictional menu has a country loaf, a morning bun, and a chocolate cookie. Each has two explicit pack options, its own price, a complete original description, recipe direction, portion explanation, and a useful relationship to the rest of the menu. Visitors can browse and search, filter by category, choose a pack, add quantities, inspect an exact subtotal, select an illustrative pickup day and matching time, and download a local pickup draft. No real bakery receives anything. Do not take payment, promise inventory, reserve a time, claim a successful order, or ask for delivery or card details.

## Live bakery reference and original translation

Inspect https://tartinebakery.com/ and https://tartinebakery.com/about before designing. The live reference opens with bread-making imagery, a compact typographic welcome, and location-specific paths. Its homepage continues through current bakery activity, special-order categories, food craft, story, and baking resources. The About page uses a full-bleed bread image with widely spaced short words, followed by substantial story-and-bread columns with photography and readable narrative. This is a bakery with an editorial point of view, not merely a grid of purchasable objects.

The observed reference uses PitchSans and restrained, widely tracked text; story headings measured approximately18px and another heading24px at a1471×847 desktop viewport. Video imagery and page-entry transitions were observed, but the exact source animation code and timing were not inspected. Initial route loading briefly displayed a typographic transition before the full page appeared. Do not copy that loading delay; Pollen should render useful content immediately.

Translate the primacy of food, the everyday table story, and the connection between menu and pickup. Do not copy Tartine’s logo, wording, founder history, photographs, location counts, addresses, prices, menu, order providers, publications, or customer quotations. Pollen is an imagined neighborhood bakery with original food imagery and a distinct butter-yellow, tomato-red, and deep-blue identity. It has no real street address, opening date, founding team, production kitchen, or live opening-hours claim. Its story should say what kind of place the concept imagines rather than inventing a business history.

## Identity, typography, and readable controls

Use locally bundled DM Serif Display for the wordmark and large editorial headings, paired with Geist Variable for body, navigation, forms, prices, and status messages. Preserve both font licenses and use font-display swap. The wordmark is lowercase pollen at approximately46px, with a small licensed sun icon beside it. This is original typographic branding, not an existing bakery logo. The sun motif may recur as a small visual punctuation; do not turn it into an endlessly spinning decoration.

Palette: cream #fff7df, butter #f7e6a3, tomato red #b13b28, deep blue #233c87, warm ink #342f28, muted brown #655a45, and rules #d9c99e. Main body copy uses16–18px, and editorial paragraphs may use19–21px. Actual control labels and buttons are at least14px. Secondary categories, reading context, and disclosures are at least12px. Never rely on6–10px text or scale a desktop interface down into an unreadable phone card. The site is expressive through type, proportion, imagery, and warm surfaces, not through low-contrast microcopy.

The main content container is1320px maximum with30px inner gutters. The sticky header is86px tall, cream, and separated by a fine warm rule. Brand sits left; navigation sits right with The bakes, Our little story, Pickup guide, and a bordered Basket link showing the actual pack-quantity count. Current pages use aria-current. Buttons are rounded pill-like shapes with clear14px type and minimum49px height. Red actions have cream text, and actions on red or blue regions use pale butter with dark red text. Focus-visible outlines are three-pixel deep blue with a five-pixel offset.

Each page has one h1, a skip link to main, meaningful title and description, semantic navigation, and ordinary relative anchors. Do not add login, newsletter signup, social accounts, map pins, real addresses, or external order links. The footer includes menu, story, pickup guide, basket, credits, and a generic return to all designs. Its disclosure states that menu and pickup windows are illustrative and only local drafts are created. No assistant/platform branding or favicon links belong in public output.

## Homepage: expressive food first

The hero is a tomato-red two-column composition, approximately .85fr and1.15fr, with cream display text on the left and a large original tabletop photograph on the right. The title is an original short invitation about a little crumb of joy. Use a desktop size growing to104px with line height near.98 and restrained negative tracking. The supporting18px copy names bread for the table, a bun for the walk, and a sweet thing without implying a real daily stock list. The primary action leads to the complete menu.

The food image shows the three original product families together on butter-yellow parchment and a terracotta tabletop. It has a broad rounded upper-left corner and otherwise modest corners, giving the image a distinct bakery-paper composition. A blue circular stamp overlaps the lower-left edge with a sun icon and a short statement about little moments. Stamp text is12px minimum and stays within the viewport. The stamp is not a certification, quality seal, real award, or customer quote.

Use an actual responsive image element with explicit dimensions, an800w/1440w srcset, appropriate sizes, and high fetch priority for the hero. The desktop image fills its panel; at phone width the hero stacks and the photograph becomes a separate generous view below the copy. Keep the food visibly tactile rather than applying heavy filters. Do not put essential text into the image pixels or use stock brand packaging.

A narrow butter-colored strip follows with two concise bakery phrases and a sun separator. It is static, not a marquee. Next, introduce the three-bake collection with a large blue serif heading and a real menu link. Product imagery has a rounded arch top and a4:5 frame. Each card shows category, complete product name, a short original description, starting price, and a real detail-page action. Prices are sample USD and must come from the shared product record. A photograph containing multiple cookies is a serving illustration; pack counts are determined by the selected option, not by the image.

## Rich editorial homepage sequence

After the menu preview, use a full-width split section on butter. One side is a close original country-loaf image; the other explains ordinary little occasions: lunch, a shared bun, something taken home. The heading can be around68px at desktop. This is an original concept story, not an invented testimonial or factual founder narrative. Its action opens story.html, a complete reading page.

The next section asks what kind of morning the visitor has in mind and offers three large contiguous links: a loaf for the table, a bun for the walk, and a chocolate detour. Use butter, soft peach, and muted green surfaces with thin rules. Each includes a category-like context label, expressive serif title, practical pack description, and a real link to that bake. Avoid repeated anonymous feature cards or software-like metric badges. These panels should make a food choice feel concrete.

The preorder explanation changes to deep blue with butter text. A large statement on the left is paired with three numbered steps on the right: choose bakes, pick an illustrative window, and keep a draft. Each step explains actual behavior. The numbered markers are visual hierarchy, not fake order progress. Its action opens the useful pickup guide. Do not describe these sample windows as available inventory or guarantee that a kitchen will prepare anything.

Finish the homepage with native FAQ details about the concept boundary, box quantities, recipe limitations, and what draft preparation does. End with a warm red closing region, sun motif, large serif invitation, and a real menu action. The complete page should have a varied rhythm of hero, food collection, bread story, occasion links, preorder guide, practical questions, and closing invitation. Do not stop after a hero and three products.

## Complete menu and original product data

The three products are The Country Loaf, The Morning Bun, and The Chocolate Cookie. Categories are Bread, Pastries, and Cookies. The Country Loaf has Whole loaf and Sliced loaf options, both950 cents, each representing one loaf. The Morning Bun has Single bun at450 cents and Box of4 at1600 cents. The Chocolate Cookie has Single cookie at350 cents and Box of6 at1800 cents. Quantity always counts the selected pack, and the interface separately shows how many pieces that represents.

Keep prices in integer cents. Store each product’s stable ID, name, category, image, short tag, complete description, flavor note, recipe direction, serving context, portion note, and variant array in one source module. Each variant has a stable ID, label, price, and pieces count. All menu cards, detail prices, basket totals, piece counts, and draft output must derive from those records. Do not duplicate price constants in markup or invent a different price in the basket.

Recipe directions are explicitly fictional product-development notes. They may describe flour, butter, chocolate, sugar, starter, or citrus as appropriate, but they are not verified ingredient or allergen information for real food. Do not claim gluten-free, vegan, allergen-safe, low-sugar, probiotic, nutritious, healthy, or any other dietary/health attribute. The product and guide copy should make the conceptual boundary clear without turning the storefront into a warning-heavy page.

menu.html is a complete menu page with its own large introduction, category filter group, search, actual result count, and full product cards. Search is case-insensitive across product name, description, flavor, and category. Category options are All bakes, Bread, Pastries, and Cookies. Search and category intersect. Selecting Cookies and searching for loaf should produce zero results. The no-results region has a clear explanation and Show all bakes, which resets both controls. Do not silently replace no results with unrelated recommendations.

## Substantial bake-detail pages

Generate bake-country-loaf.html, bake-morning-bun.html, and bake-chocolate-cookie.html. Each begins with a breadcrumb and a large product image beside complete product information. Desktop columns are equal with about75px gap. The image has a large rounded arch top, a modest bottom radius, explicit900×1125 dimensions, and a small blue Pollen stamp. The stamp is decorative original identity, not a verified badge. Keep full product context in alt text and do not claim the image shows actual stock.

The detail column has category, a61px blue serif title, a20px warm-red tagline, and a17px complete description. A form asks “How would you like it?” using a native required select with an empty initial option. Each option includes its label and formatted price. Changing the option updates the selected-price text. No variant is added until a valid choice is made. The main action is Add to my basket, with a live status and a useful basket link after successful addition.

Below the form, native details sections explain the flavor/serving context, pack and portion logic, recipe direction, and local preorder boundary. The first opens initially. These sections contain real original paragraphs, not empty placeholders. The pack note must explain that quantity two of a four-bun box is eight buns and twice the box price. Whole and sliced loaves remain distinct despite equal sample prices. The recipe note repeats that it is not verified dietary information. Finish with related bakes in a substantial pairing region.

Images do not change when a single-versus-box option changes; they illustrate the bake itself. Make the option label and piece count the authoritative quantity description. Do not fake a gallery of alternate shots or reuse another bakery’s food images. Every visible detail-page link must resolve to a real menu, related product, story, or pickup page.

## Bakery story and pickup guide

story.html is a complete editorial page. It opens with a large original statement about an everyday kind of lovely and paragraphs that explicitly introduce Pollen as an imagined neighborhood bakery. Follow with the original shared-table photograph at generous scale. Then three substantial narrative sections discuss the table, a quiet pause, and something to bring along. These are design intentions and everyday food contexts, not fabricated operating history, awards, staff profiles, or sustainability claims.

Close the story with a deep-blue manifesto region and a menu link. Explain that the recipes, prices, and pickup plans are fictional while the local experience is designed to be useful. Do not copy Tartine’s founder story, location history, or published books. The reading experience uses large serif headings and18–21px introductory text, then17–18px body with comfortable line height and measure.

pickup.html must explain the entire local flow. A large introductory heading makes clear that this is a pickup-draft guide. The first working region pairs a small step list and basket action with a table of sample recurring windows. Friday offers09:00–10:00 and11:00–12:00. Saturday offers09:00–10:00,10:00–11:00, and12:00–13:00. Sunday offers10:00–11:00 and11:00–12:00. These are illustrative recurring labels, not dated real availability.

The guide explains that changing day clears the previous slot, that boxes are packs, and that the draft is the finish line. It also explains local storage and recipe-information limits. There is no real pickup address, current opening-hours claim, order lead time, stock availability, payment requirement, delivery promise, or cancellation policy. Do not invent commercial terms for a fictional business. All guide content must match the implemented controls.

## Basket identity, quantities, and subtotal

Use pollen-basket-v1 for a local array of selected product/variant/quantity lines. The key of a line is product ID plus variant ID. Adding the same variant increments its pack quantity. Adding a different variant creates a separate line. A single morning bun and a four-bun box must never merge. Whole and sliced loaf lines also remain distinct. The header count is total pack quantities, following ordinary basket behavior; individual piece counts appear explicitly on each line.

Quantities are integers from1 through6. Decrement is disabled at1 and increment at6. Repeated addition at the maximum reports the bound without changing the saved basket. Each line displays product image, category, name, selected pack label, total pieces represented, quantity controls, remove action, line price, and price per pack. For example, two Box of4 morning-bun packs show eight pieces and3200 cents. All arithmetic uses variant price multiplied by quantity, with currency formatting only at presentation.

Recover only a bounded array of known products, known variants, integer quantities in range, and unique variant keys. At most six distinct variants exist in the collection. Malformed storage falls back to an empty basket. Local writes are fallible: if an addition or basket update cannot persist, report that the saved basket was not changed. Never clear unrelated browser storage. The source data is not mutated when a basket quantity changes.

basket.html has a complete empty state with a menu action. In a filled state, use a wide line-item region and a sticky pickup-planning panel on desktop. The summary shows actual subtotal in USD and explicitly says no tax, delivery, or payment is added. Do not invent free shipping or a checkout discount. Removing the last line returns to the empty state and hides any prepared draft. Repeated quantity changes update all line prices, piece counts, header count, subtotal, and existing valid draft.

## Dependent pickup validation and draft state

Use pollen-pickup-v1 for a valid local pickup plan containing day, slot, and optional note. Restore it only when the day is known, the slot belongs to that day, and the note is a bounded string of at most1200 characters. Otherwise start with empty day/slot/note. The day select is required. Before a day is chosen, the slot select is disabled and says to choose a day first. After choosing a day, populate only its known windows and require an explicit slot choice.

Changing the day clears the previous slot and invalidates/hides any prepared draft. This must happen even when both days happen to contain similarly named windows; the visitor should deliberately choose the new plan. Selecting the empty slot option also invalidates a prepared draft. Do not leave a stale Friday draft visible beside an invalid Saturday picker. The visible status asks for a matching window rather than falsely saying the new plan is saved.

A valid day/slot combination saves locally when storage is available. Notes can update the saved plan. Save failure preserves the in-page plan and reports the limitation. Preparing a draft requires a nonempty basket and a valid day/slot pair in both native form validation and the shared validation function. The action never checks live capacity or contacts a bakery. A valid sample window is not a reservation.

The optional note is for a small occasion or reminder, not a collection point for payment, contact, address, or health information. Do not request personal data that the concept does not need. The interface should not claim it can accommodate dietary requirements. Recipe directions remain separate conceptual content and do not become a promise in a pickup note.

## Preview and portable output

A successfully prepared draft reveals a dedicated section titled as a local plan, not an order confirmation. It includes every bake and pack, pack quantities, total pieces, line prices, subtotal, unquoted tax/delivery, sample pickup day, exact example window, optional note, and an explicit statement that no order/payment/reservation was made. Render user text with textContent inside a wrapping preformatted block. Escape user-controlled strings before any HTML insertion elsewhere.

If quantities or notes change while the plan remains valid, update the preview from current state. If the basket empties or pickup validity is lost, hide the draft and require preparation again. Download reads the current state at action time, validates it, builds text/markdown, and uses the fixed filename pollen-pickup-draft.md. It creates an object URL, clicks a temporary anchor, and revokes the URL after a short delay. Report that the file was prepared for download, not that a real bakery accepted a purchase.

There is no fake order number, success email, payment step, stock reservation, subscriber registration, or external communication. Keep the draft clear enough that it can be reviewed or saved locally, with its fictional status visible in the file itself. Do not label a local-only calculation as a confirmed preorder.

## Responsive layout and motion

Desktop hero uses a wide image and expressive title, with a610px minimum region. The main collection uses three equal columns and28px gaps. Product images retain4:5 proportions, and the arch treatment is a shape choice rather than a device frame. Large sections have70–80px vertical space. The story uses a full-width bread image and a50/50 narrative split; the blue preorder region also uses two columns but a distinctly different numbered-step composition. Keep the site visually varied without adding unrelated decorative widgets.

At1100px tighten gaps to40–55px and reduce oversized headings modestly. At800px the header is76px and the pickup navigation link disappears before controls become cramped. The collection becomes two columns, the product-detail layout stacks, the story intro becomes one column, and the basket summary stops being sticky. The pickup guide’s side panel becomes normal flow above the main guide. The hero can remain two columns until500px, with a smaller but still expressive title.

At500px use20px gutters and a70px header. Keep brand, The bakes, and Basket visible; other routes remain in footer/contextual links. The hero stacks, with80px serif display and a350px food image below. Product cards become one column with readable35px titles and17px descriptions. Product option selects use16px text and50px targets. Basket rows become image plus information, with line price beneath rather than squeezed offscreen. Quantity buttons remain44px with21px symbols. Pickup selects and notes remain16px. Guides and article prose remain17px. No route may horizontally overflow at390px.

Motion is restrained and food-led. Image hover can scale to1.035 over.5 seconds. IntersectionObserver at threshold.2 reveals product cards over.6 seconds with .1/.2-second stagger, occasion panels over.6 seconds, and preorder steps over.55 seconds. Movement is18px and content is visible by default. No animation should delay a basket addition, simulate kitchen progress, or imply that baking has begun. Reduced motion removes animation, transitions, smooth scrolling, and stamp rotation. Prepared-draft scrolling respects the same preference.

## Assets, ownership, and verification

Bundle original table.webp, table-800.webp, loaf.webp, bun.webp, cookie.webp, and hero.webp, with credits and exact generation prompts in public provenance. The shared tabletop is1440px wide with an800px responsive rendition. Product images are900px wide at4:5. Public provenance must not expose private machine paths; preserve original source locations privately under scripts/pollen/asset-sources.json. Include Geist and DM Serif font files and licenses, plus the Lucide license. No reference images, brand packaging, founder portraits, or testimonials are copied.

Export buildPollen() returning {prompt}. Keep all implementation under scripts/pollen and generated output under public/demos/pollen plus public/prompts/pollen.md. Do not modify shared catalogs, deployment files, credentials, or other demos. The assembled prompt must exceed3000 substantive words and include actual records, pricing functions, validation, persistence, filters, pickup dependencies, and export handlers under the exact heading Reference interaction handler. Keep it synchronized with final behavior and readable-size constraints.

Run scoped lint and syntax checks, then model tests for variant identity, price math, pack piece counts, maximum quantities, invalid records, and mismatched pickup day/time. In the browser verify required variant selection, single-versus-box separation, repeated pack increments, subtotal updates, quantity/removal, persistence, menu filter/search intersection, no-results recovery, missing-day/slot prevention, day-change invalidation, valid draft generation, note updates, and current-state download. Inspect desktop homepage/menu/product/story/basket and every route at390px. Confirm one h1, local links, visible focus, correct contrast, and control text at least14px. Restore QA-only basket/plan data through visible controls where available. Use Lighthouse as supporting evidence rather than the definition of design quality, and report any untested failure paths honestly.

## Font delivery refinement

Serve the display face through assets/dm-serif.woff, a compressed WOFF rendition of the licensed bundled DM Serif font. Preload that display font alongside Geist because the large serif heading is visible immediately. Keep the original license and source font available. This changes delivery size, not the typeface, layout, or letterforms.


## Reference interaction handler

```javascript
const plBakes=[{"id":"country-loaf","name":"The Country Loaf","category":"Bread","image":"loaf","tag":"A good table begins here.","description":"A round, deeply golden loaf with a crackly crust and an open, tender-looking crumb. The kind of bread this imagined bakery would put at the center of an ordinary lunch.","flavor":"Toasty crust. A gentle tang. A generous middle.","recipe":"Wheat flour, water, salt, and a flour-and-water starter are the direction for this fictional loaf.","serving":"A thick slice with butter, a generous sandwich, or torn pieces around a shared table.","note":"Choose whole if you like to cut your own slices. Choose sliced for a ready-to-share draft selection.","variants":[{"id":"whole","label":"Whole loaf","price":950,"pieces":1},{"id":"sliced","label":"Sliced loaf","price":950,"pieces":1}]},{"id":"morning-bun","name":"The Morning Bun","category":"Pastries","image":"bun","tag":"A little twist in the morning.","description":"A golden spiral with caramelized edges, visible layers, and a scattering of sugar. Small enough for a quiet break, generous enough to make it feel like one.","flavor":"Buttery layers. Caramel edges. A bright sweet finish.","recipe":"Wheat flour, butter, sugar, milk, yeast, and a little citrus zest are the direction for this fictional bun.","serving":"One for the walk, or a box for a table that is about to fill up.","note":"A single bun is one piece. A box contains four; the basket quantity counts boxes when that option is selected.","variants":[{"id":"single","label":"Single bun","price":450,"pieces":1},{"id":"box-four","label":"Box of 4","price":1600,"pieces":4}]},{"id":"chocolate-cookie","name":"The Chocolate Cookie","category":"Cookies","image":"cookie","tag":"Good things come in uneven circles.","description":"A thick cookie with dark chocolate pieces, a craggy edge, and a soft-looking center. An uncomplicated little reason to pause.","flavor":"Deep chocolate. Brown-sugar notes. A little crunch at the edge.","recipe":"Wheat flour, butter, sugar, egg, dark chocolate, and salt are the direction for this fictional cookie.","serving":"Keep one beside a cup, or choose a box when you are bringing something along.","note":"A single cookie is one piece. A box contains six. Each pack choice stays separate in the local basket.","variants":[{"id":"single","label":"Single cookie","price":350,"pieces":1},{"id":"box-six","label":"Box of 6","price":1800,"pieces":6}]}];const plPickupDays={"Friday":["09:00–10:00","11:00–12:00"],"Saturday":["09:00–10:00","10:00–11:00","12:00–13:00"],"Sunday":["10:00–11:00","11:00–12:00"]};
function plMoney(cents) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}
function plVariant(product, variant) {
  return plBakes
    .find((p) => p.id === product)
    ?.variants.find((v) => v.id === variant);
}
function plValidLine(line) {
  return !!(
    plVariant(line?.product, line?.variant) &&
    Number.isInteger(line.quantity) &&
    line.quantity >= 1 &&
    line.quantity <= 6
  );
}
function plTotal(lines) {
  return lines.reduce(
    (sum, l) => sum + plVariant(l.product, l.variant).price * l.quantity,
    0,
  );
}
function plAdd(lines, product, variant) {
  if (!plVariant(product, variant))
    return { ok: false, lines, message: 'Choose a menu option first.' };
  const found = lines.find(
    (l) => l.product === product && l.variant === variant,
  );
  if (found?.quantity >= 6)
    return {
      ok: false,
      lines,
      message: 'This option already has the maximum quantity of 6.',
    };
  return {
    ok: true,
    lines: found
      ? lines.map((l) => (l === found ? { ...l, quantity: l.quantity + 1 } : l))
      : [...lines, { product, variant, quantity: 1 }],
    message: 'Added to your local basket.',
  };
}
function plValidPickup(day, slot) {
  return Object.hasOwn(plPickupDays, day) && plPickupDays[day].includes(slot);
}
const plReduced = matchMedia('(prefers-reduced-motion: reduce)');
const plStore = {
  read(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null');
    } catch {
      return null;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
};
const plEsc = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );
const plRaw = plStore.read('pollen-basket-v1');
let plLines =
  Array.isArray(plRaw) &&
  plRaw.length <= 6 &&
  plRaw.every(plValidLine) &&
  new Set(plRaw.map((l) => l.product + '::' + l.variant)).size === plRaw.length
    ? plRaw
    : [];
const plPickupRaw = plStore.read('pollen-pickup-v1');
let plPlan =
  plPickupRaw &&
  plValidPickup(plPickupRaw.day, plPickupRaw.slot) &&
  typeof plPickupRaw.note === 'string' &&
  plPickupRaw.note.length <= 1200
    ? plPickupRaw
    : { day: '', slot: '', note: '' };
let plPrepared = false;
function plBadge() {
  document
    .querySelectorAll('[data-pl-count]')
    .forEach(
      (e) => (e.textContent = plLines.reduce((sum, l) => sum + l.quantity, 0)),
    );
}
plBadge();
document.querySelectorAll('[data-pl-add-form]').forEach((form) => {
  const product = plBakes.find((p) => p.id === form.dataset.plAddForm);
  form.querySelector('select').addEventListener('change', (event) => {
    const variant = plVariant(product.id, event.target.value);
    form.querySelector('[data-pl-price]').textContent = variant
      ? plMoney(variant.price) + ' / ' + variant.label
      : 'Choose an option';
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = plAdd(
      plLines,
      product.id,
      form.querySelector('select').value,
    );
    const status = form.querySelector('[data-pl-add-status]');
    if (!result.ok) {
      status.textContent = result.message;
      return;
    }
    if (!plStore.write('pollen-basket-v1', result.lines)) {
      status.textContent =
        'Storage unavailable. This choice could not be added to a saved basket.';
      return;
    }
    plLines = result.lines;
    plBadge();
    status.textContent =
      product.name +
      ' · ' +
      plVariant(product.id, form.querySelector('select').value).label +
      ' added to your local basket.';
    document.querySelector('[data-pl-view-basket]').hidden = false;
  });
});
let plCategory = 'All bakes';
function plMenuCard(p) {
  return `<article class="bake-card"><a class="bake-image" href="bake-${p.id}.html"><img src="assets/${p.image}.webp" width="900" height="1125" loading="lazy" alt="Original ${plEsc(p.name.toLowerCase())} bakery photograph"><span>↗</span></a><div class="bake-meta"><span>${p.category}</span><h3><a href="bake-${p.id}.html">${p.name}</a></h3><p>${p.tag}</p><a class="bake-price" href="bake-${p.id}.html">From ${plMoney(p.variants[0].price)} <span>Choose your bake →</span></a></div></article>`;
}
function plRenderMenu() {
  const query = document.getElementById('pl-search').value.trim().toLowerCase();
  const rows = plBakes.filter(
    (p) =>
      (plCategory === 'All bakes' || p.category === plCategory) &&
      [p.name, p.description, p.flavor, p.category]
        .join(' ')
        .toLowerCase()
        .includes(query),
  );
  document.getElementById('pl-menu-results').innerHTML = rows
    .map(plMenuCard)
    .join('');
  document.getElementById('pl-result-count').textContent =
    rows.length + (rows.length === 1 ? ' bake' : ' bakes');
  document.getElementById('pl-no-results').hidden = rows.length > 0;
}
if (document.getElementById('pl-search')) {
  plRenderMenu();
  document.getElementById('pl-search').addEventListener('input', plRenderMenu);
  document.querySelectorAll('[data-pl-category]').forEach((button) =>
    button.addEventListener('click', () => {
      plCategory = button.dataset.plCategory;
      document
        .querySelectorAll('[data-pl-category]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      plRenderMenu();
    }),
  );
  document.getElementById('pl-clear-menu').addEventListener('click', () => {
    plCategory = 'All bakes';
    document.getElementById('pl-search').value = '';
    document
      .querySelectorAll('[data-pl-category]')
      .forEach((b) =>
        b.setAttribute(
          'aria-pressed',
          String(b.dataset.plCategory === plCategory),
        ),
      );
    plRenderMenu();
  });
}
function plDraft() {
  return (
    '# Pollen pickup draft\n\nLocal plan only. No order, payment, or reservation has been made.\n\n' +
    plLines
      .map((l) => {
        const p = plBakes.find((p) => p.id === l.product);
        const v = plVariant(l.product, l.variant);
        return (
          '- ' +
          p.name +
          ' / ' +
          v.label +
          ' × ' +
          l.quantity +
          ' (' +
          v.pieces * l.quantity +
          ' piece' +
          (v.pieces * l.quantity === 1 ? '' : 's') +
          ') — ' +
          plMoney(v.price * l.quantity)
        );
      })
      .join('\n') +
    '\n\nSubtotal: ' +
    plMoney(plTotal(plLines)) +
    ' USD\nTax and delivery: not quoted\n\nSample pickup day: ' +
    plPlan.day +
    '\nExample window: ' +
    plPlan.slot +
    '\n\n## Draft note\n\n' +
    (plPlan.note || 'No note added.') +
    '\n\nFictional menu and pickup windows. No real bakery has received this draft.\n'
  );
}
function plRenderBasket() {
  const empty = !plLines.length;
  document.getElementById('pl-empty').hidden = !empty;
  document.getElementById('pl-filled').hidden = empty;
  document.getElementById('pl-draft-preview').hidden = empty || !plPrepared;
  if (empty) {
    plPrepared = false;
    return;
  }
  document.getElementById('pl-basket-lines').innerHTML = plLines
    .map((l, n) => {
      const p = plBakes.find((p) => p.id === l.product);
      const v = plVariant(l.product, l.variant);
      return `<article class="basket-row"><a href="bake-${p.id}.html"><img src="assets/${p.image}.webp" width="900" height="1125" alt="${plEsc(p.name)}"></a><div><span>${p.category}</span><h2>${p.name}</h2><p>${v.label} · ${v.pieces * l.quantity} piece${v.pieces * l.quantity === 1 ? '' : 's'}</p><div class="pack-quantity"><button data-pl-quantity="${n}" data-change="-1" ${l.quantity === 1 ? 'disabled' : ''} aria-label="Decrease ${plEsc(p.name + ' ' + v.label)} quantity">−</button><output>${l.quantity}</output><button data-pl-quantity="${n}" data-change="1" ${l.quantity === 6 ? 'disabled' : ''} aria-label="Increase ${plEsc(p.name + ' ' + v.label)} quantity">+</button></div><button class="remove-pack" data-pl-remove="${n}">Remove ${v.label}</button></div><div class="pack-price"><strong>${plMoney(v.price * l.quantity)}</strong><span>${plMoney(v.price)} per pack</span></div></article>`;
    })
    .join('');
  document.getElementById('pl-subtotal').textContent = plMoney(
    plTotal(plLines),
  );
  if (plPrepared)
    document.getElementById('pl-draft-text').textContent = plDraft();
}
function plSaveBasket(next) {
  if (!plStore.write('pollen-basket-v1', next)) {
    document.getElementById('pl-basket-status').textContent =
      'Storage unavailable. Your saved basket was not changed.';
    return;
  }
  plLines = next;
  plBadge();
  plRenderBasket();
  document.getElementById('pl-basket-status').textContent =
    'Basket updated in this browser.';
}
function plRenderSlots() {
  const day = document.getElementById('pl-day').value;
  const slot = document.getElementById('pl-slot');
  slot.disabled = !Object.hasOwn(plPickupDays, day);
  slot.innerHTML =
    '<option value="">' +
    (slot.disabled ? 'Choose a day first' : 'Choose a window') +
    '</option>' +
    (plPickupDays[day] || [])
      .map((time) => `<option>${time}</option>`)
      .join('');
  slot.value = plPlan.day === day ? plPlan.slot : '';
}
function plUpdatePlan() {
  plPlan = {
    day: document.getElementById('pl-day').value,
    slot: document.getElementById('pl-slot').value,
    note: document.getElementById('pl-order-note').value,
  };
  if (plValidPickup(plPlan.day, plPlan.slot)) {
    const ok = plStore.write('pollen-pickup-v1', plPlan);
    document.getElementById('pl-pickup-status').textContent = ok
      ? 'Pickup plan saved locally. These are example windows.'
      : 'Plan kept on this page only; storage is unavailable.';
  }
  if (!plValidPickup(plPlan.day, plPlan.slot) && plPrepared) {
    plPrepared = false;
    plRenderBasket();
  }
  if (plPrepared && plValidPickup(plPlan.day, plPlan.slot))
    document.getElementById('pl-draft-text').textContent = plDraft();
}
if (document.getElementById('pl-basket-lines')) {
  document.getElementById('pl-day').value = plPlan.day;
  document.getElementById('pl-order-note').value = plPlan.note;
  plRenderSlots();
  plRenderBasket();
  document
    .getElementById('pl-basket-lines')
    .addEventListener('click', (event) => {
      const q = event.target.closest('[data-pl-quantity]');
      const remove = event.target.closest('[data-pl-remove]');
      if (q) {
        const index = Number(q.dataset.plQuantity);
        plSaveBasket(
          plLines.map((l, n) =>
            n === index
              ? {
                  ...l,
                  quantity: Math.max(
                    1,
                    Math.min(6, l.quantity + Number(q.dataset.change)),
                  ),
                }
              : l,
          ),
        );
      }
      if (remove)
        plSaveBasket(
          plLines.filter((_, n) => n !== Number(remove.dataset.plRemove)),
        );
    });
  document.getElementById('pl-day').addEventListener('change', () => {
    plPlan.day = document.getElementById('pl-day').value;
    plPlan.slot = '';
    plPrepared = false;
    plRenderSlots();
    plRenderBasket();
    document.getElementById('pl-pickup-status').textContent =
      'Choose a matching example window for this day.';
  });
  document.getElementById('pl-slot').addEventListener('change', plUpdatePlan);
  document
    .getElementById('pl-order-note')
    .addEventListener('input', plUpdatePlan);
  document
    .getElementById('pl-pickup-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      plUpdatePlan();
      if (!plLines.length || !plValidPickup(plPlan.day, plPlan.slot)) {
        document.getElementById('pl-pickup-status').textContent =
          'Choose a valid sample day and one of its matching windows.';
        return;
      }
      plPrepared = true;
      plRenderBasket();
      document.getElementById('pl-draft-status').textContent =
        'Pickup draft prepared locally. No order has been placed.';
      document
        .getElementById('pl-draft-preview')
        .scrollIntoView({
          behavior: plReduced.matches ? 'auto' : 'smooth',
          block: 'start',
        });
    });
  document.getElementById('pl-download-draft').addEventListener('click', () => {
    if (!plLines.length || !plValidPickup(plPlan.day, plPlan.slot)) return;
    const url = URL.createObjectURL(
      new Blob([plDraft()], { type: 'text/markdown;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pollen-pickup-draft.md';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.getElementById('pl-draft-status').textContent =
      'Draft prepared for download. No payment or order was created.';
  });
}
if ('IntersectionObserver' in window) {
  const plObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered');
          plObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.2 },
  );
  document
    .querySelectorAll('.bake-grid,.moment-links,.preorder-story')
    .forEach((el) => plObserver.observe(el));
}

```
