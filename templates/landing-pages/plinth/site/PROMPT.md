# Plinth — Objects for ordinary rituals

## Build the complete storefront

Create a complete six-page responsive furniture-store concept called Plinth. Deliver a homepage, a collection browser, a studio page, and individual product pages for the Settle Chair, Orbit Table, and Dome Lamp. The site is a fictional design exploration with a working local bag, not an operating furniture business. Its three product photographs are original generated assets made specifically for the project. All dimensions and prices are illustrative.

The homepage headline is “Objects for ordinary rituals.” The supporting line introduces a seat for the pause, a place for the book, and a little light for the end of the day. The primary action is Meet the collection. The main experience lets a visitor inspect an object, read its concept details, choose a quantity, add it to a bag, adjust that bag, and download a local selection summary. No payment, order, delivery calculation, or external submission occurs.

Treat the three products as one coherent collection with distinct roles. Do not manufacture extra products by recoloring the same image or changing its name. Do not present alternate finishes unless a matching product image and a meaningful specification exist. The supplied products each have one clearly described material direction.

## Reference research and independent design

The research reference is Integro by Mr. Cosmos, listed at https://www.framer.com/marketplace/templates/integro/ . Its live preview is https://gleaming-imagine-750604.framer.app/ . The marketplace, live homepage, and Palma Side Chair product page were inspected. General lessons include giving furniture imagery enough space, providing useful product details, and making the shopping bag understandable.

Plinth has a different composition and content model: an object-first split opening, dark green type, quiet mineral surfaces, three original studio product images, product information placed before the large image on desktop, a filtered and sorted collection, unit-switchable concept dimensions, and a local selection download. The reference's coastal chair scene, identity, copy, source code, material variants, testimonials, and commercial promises are not copied. Reference attribution is a record of research, not a claim that a near-copy is acceptable.

The design should be recognizably its own storefront. Do not reuse Aven's software page shell, Morrow's profile rail, Margin's publication masthead, or Apogee's mission structure. Shared web conventions such as links, quantity controls, and a bag are appropriate; the site's composition, imagery, narrative, and interaction model must serve this collection.

## Visual identity

Use a pale mineral background around #eeece5, dark forest-green ink #183d33, secondary green-gray text #657267, quiet rules #c4cbc0, a slightly deeper wash #e0e4d6, and a restrained pale lime accent #dfe8a4. The product photographs have matching neutral studio backgrounds. Keep their colors natural: ochre upholstery, reddish wood, and cobalt enamel provide the collection's color range.

Use the bundled Geist variable font for the main interface and most display text. Display headings are medium weight, tightly tracked, and large. Use Georgia sparingly for an italic word in selected editorial headings; this should be a deliberate accent, not a second competing design system. Main body text is 16–18px. Small product metadata is secondary. Buttons and controls remain comfortably readable.

The Plinth wordmark is uppercase typographic text with a small 001 collection identifier. Do not use a registration mark or imply trademark registration. The header is a clean horizontal row: wordmark at left, collection/studio/ProtoSites links, and a Bag action with a live item count. On mobile it becomes two simple rows with all destinations visible.

Use square photographic regions, fine dividing rules, large amounts of purposeful image space, and a small number of circular utility controls. The main CTA is a dark green rectangle with light text. Avoid glowing buttons, floating glass cards, fake badges, delivery promises, discount banners, or background decoration that competes with the objects.

## Homepage composition

The desktop opening is divided into a text region and a slightly larger product-image region. The text region has collection metadata, a large three-line headline, a short introduction, a Meet the collection action, and a quiet lower row linking to the studio. The image region shows the complete Settle Chair in its own studio photograph, with a small product identifier and sample price along the bottom. Preserve the chair's silhouette and grounding shadow. Do not crop away its legs or treat the background as a transparent cutout.

The next section introduces all three products with “Good company for everyday living.” Its image grid has a consistent column rhythm, product names, sample prices, and direct add-to-bag utility controls. Images and names link to complete product pages. Product photographs may have a subtle hover scale, but the object and its identity remain visible without hover.

A full-width two-part feature follows for the Dome Lamp. The large image and concise editorial copy establish a different rhythm from the collection grid. Its heading is “A little out of the ordinary.” The action leads to dome-lamp.html. Follow with a restrained studio statement headed “Fewer objects. More intention.” Explain that this is an original visual-concept collection, then link to the studio page.

The footer uses a large Plinth wordmark on dark green, a short positioning statement, working collection/studio/credits links, and the return to ProtoSites. A discreet note identifies the fictional products, illustrative prices, and local-only bag behavior. Do not add a fake email subscription or real-world contact details.

## Products and exact content

The Settle Chair is product 01 in Seating, with an illustrative USD price of 640. Its material direction is Ochre bouclé / dark walnut concept. Its short line is “A softer place to land.” It is a sculptural lounge-chair study that pairs a generous upholstered seat with an expressive wooden frame. Its concept dimensions are width 76cm, depth 84cm, height 74cm. The story concerns a quiet pause at the end of the day and the balance between softness and structure. Actual upholstery performance and care are not verified.

The Orbit Table is product 02 in Tables, with an illustrative USD price of 285. Its material direction is Reddish-brown wood concept. Its short line is “A small center of gravity.” It is a compact side-table study with a circular top and three rounded legs. Its concept dimensions are width 48cm, depth 48cm, height 42cm. The story concerns keeping familiar objects within reach. No load limit, actual timber species, finish durability, or manufacturing specification is asserted.

The Dome Lamp is product 03 in Lighting, with an illustrative USD price of 190. Its material direction is Cobalt enamel concept. Its short line is “A little color. A different mood.” It has a broad curved shade and a short cylindrical base and is shown unlit. Its concept dimensions are width 32cm, depth 32cm, height 38cm. It is not an electrically functional product. No voltage, bulb compatibility, certification, safety test, or lighting-performance claim is implied.

The exact product records are appended below. Use them consistently across the collection, product pages, bag, and downloaded summary. Never let a caption, image, price, or product destination become mismatched.

## Collection browser

The collection page begins with “Make room for character.” and a concise description of the three original concepts. Provide filters for All objects, Seating, Tables, and Lighting. The selected filter is visible and exposed through aria-pressed. Display a live object count. All objects is the initial selection.

Provide a native, labeled sorting control with Collection order, Price: low to high, Price: high to low, and Name. Filtering and sorting must combine. Use numeric prices for sorting rather than formatted currency strings. Restoring Collection order returns to the original product sequence. The grid is three columns on desktop and one on phones. Each product retains its proper name, image, price, and add action after any sort.

Prices are clearly identified as illustrative USD values. Do not invent availability, stock counts, lead times, free delivery, discounts, or checkout totals. The collection browser is a real local interface, not a live commerce integration.

## Product-page layout and controls

Create settle-chair.html, orbit-table.html, and dome-lamp.html. Each page has a unique title and description. On desktop, the information column is on the left, and a large sticky image occupies the right. On mobile the image appears first and the information follows in ordinary document flow. Keep the full object visible and preserve the original photograph's proportions and lighting.

The information column contains All objects navigation, product number and category, a large product name, short line, sample price, material direction, a labeled quantity selector, and an Add to bag action. Quantities are integers from one through nine. The product-page quantity is honored when adding; collection-grid add buttons add one.

Native disclosures contain The idea, Concept dimensions, and Material & care context. The idea is open initially. The dimension disclosure includes cm and in controls with aria-pressed selected states. Inches are calculated by dividing the concept-centimeter value by 2.54 and displayed to one decimal place. Unit switching only changes the display; it never mutates the base dimensions. Keep the illustrative nature of the dimensions visible.

After the main product region, present a short story section that develops the product's everyday role. Follow with the other two products and a link to the full collection. Do not add fake reviews, unverified safety claims, or unrelated material selectors merely to make the page look like a shop.

## Local shopping-bag contract

Use a native modal dialog styled as a right-side bag drawer on desktop and a full-width panel on phones. It contains a heading, a visible Close control, a short local-demo explanation, product rows, an empty state, sample subtotal, Download your selection, and Clear bag. The drawer is constrained to the dynamic viewport and scrolls internally when necessary.

Opening the bag records the triggering button. Escape and the Close control dismiss the modal; closing returns focus to the opener. Backdrop clicks can dismiss it, but clicks inside the drawer must not close it accidentally. When an item is added, open the bag and show the updated selection. The whole interaction remains keyboard usable.

Store the cart under a namespaced browser-storage key as known product slugs with integer quantities. Validate loaded values: ignore unknown products, non-integer quantities, zero/negative values, excessive quantities, arrays, null, and malformed JSON. When storage is unavailable, retain the current page's in-memory bag and announce the limitation. Do not store personal information or send any network request.

Each selected product row has an image, name, unit price, quantity, decrement/increment controls, and a Remove control. Quantity is bounded from one to nine; decrement is disabled at one and increment at nine. Removal is a separate action. Adding the same product again combines quantities up to the limit. The header count represents total units, not distinct product types.

After a row changes, update every bag count, the rendered rows, the empty state, the subtotal, and the action availability. Preserve a sensible keyboard focus target when a row is removed or a control becomes disabled. Clear bag removes all selections and returns to the empty state. Use actual product prices for the subtotal and format USD consistently through the native internationalization API.

Download your selection creates a plain-text file containing names, quantities, line totals, the sample subtotal, and a clear statement that no order has been placed and no payment collected. It uses a local Blob URL that is revoked after the download can start. It is not a checkout button, order confirmation, quote from a real vendor, or payment form. No tax or shipping calculation is fabricated.

## Studio page

The studio page is an honest explanation of the fictional concept. Its opening is “A place for possibility.” A three-image product sequence gives the collection a coherent visual overview. Follow it with three principles: Start with a moment, Give the form a reason, and Keep the context attached.

The final disclosures explain that the objects are not purchasable, how the original images were generated, how the local bag works, and how research informed independent design. Do not invent a factory, founder biography, craft certification, manufacturing process, sustainability claim, or client history. This page should make the scope understandable while retaining the same visual care as the storefront.

## Assets and image direction

Use chair.webp, table.webp, and lamp.webp. hero.webp is a compatibility duplicate of chair.webp for the parent gallery and is not an additional unique asset. The font, license, credits, and generation provenance must be packaged locally. Every runtime asset path remains relative so the extracted six-page website works without a framework installation or external image service.

The three original generation briefs use matching pale neutral-gray seamless studio backgrounds, soft directional light, subtle real-looking grounding shadows, full-object framing, and no text, logos, or UI. The chair is an ochre bouclé lounge concept with a dark walnut frame; the table is reddish-brown wood with a circular top and three rounded legs; the lamp is cobalt-blue enamel with a broad dome and short cylindrical base. Exact prompts and generation method are in provenance.json.

Do not pretend these are photographs of commercially available furniture. Do not recolor one image into a nonexistent material option. Keep each object's photograph with its own record. Preserve texture and smooth studio gradients during compression, reserve image dimensions, and lazy-load secondary product images while giving the homepage chair priority.

## Responsive, accessibility, and validation

Inspect the homepage, collection, representative product pages, and open bag at desktop and phone widths, including 1280, 768, 390, and 320px where appropriate. Header navigation must wrap intentionally. Product names, quantity selectors, CTA labels, dimension rows, and cart controls must stay within the viewport. The phone bag must remain scrollable and all controls reachable. There must be no document-level horizontal scrolling.

Use actual links for navigation, buttons for state changes, labels for select controls, semantic headings, native disclosures, visible focus, and meaningful image alternatives. The body text and selected states must remain readable. The bag's modal behavior must preserve focus and support Escape. User-controlled or stored values must be validated before rendering. Generated product strings are local trusted records, not remote content or user HTML.

Motion is limited to subtle hover response and smooth anchor navigation. Respect reduced motion and keep all initial content visible. Do not add a custom cursor, decorative 3D object made from CSS, autoplay video, or scroll-jacking. The three raster product assets carry the visual work.

Before publication, test adding multiple objects, repeated additions, quantity changes, removal, clearing, reload persistence, collection filters and sorting, and dimension units. Check every local route, image, font, credit link, and ZIP entry. Verify that the downloadable prompt matches the version in the source package. Run the parent application's appropriate checks and production build, then publish to the existing ProtoSites audience. Count this design only after publication succeeds.


## Exact product data

```json
[
  {
    "slug": "settle-chair",
    "name": "Settle Chair",
    "short": "A softer place to land.",
    "category": "Seating",
    "image": "chair.webp",
    "number": "01",
    "price": 640,
    "material": "Ochre bouclé / dark walnut concept",
    "description": "An easy, sculptural lounge chair with a generous seat and an expressive wooden frame. Designed as a visual study of softness held within a clear structure.",
    "dimensions": [
      76,
      84,
      74
    ],
    "care": "For a real upholstered piece, follow the maker’s supplied care instructions. This fictional concept has no tested material or maintenance specification.",
    "story": "The idea begins with the pause at the end of a day. A low seat, a broad back, and a frame with enough presence to feel intentional. The ochre fabric gives the object warmth; dark wood keeps its outline precise."
  },
  {
    "slug": "orbit-table",
    "name": "Orbit Table",
    "short": "A small center of gravity.",
    "category": "Tables",
    "image": "table.webp",
    "number": "02",
    "price": 285,
    "material": "Reddish-brown wood concept",
    "description": "A compact side-table concept with a circular top and three rounded legs. A simple place for the objects that accompany an ordinary day.",
    "dimensions": [
      48,
      48,
      42
    ],
    "care": "Wood appearance and dimensions are illustrative. Actual finish, durability, load limits, and cleaning requirements would need a manufacturer’s specification.",
    "story": "A side table does a quiet kind of work. It keeps a book, a cup, or a lamp close enough to reach. Orbit explores that familiar role through an uncomplicated silhouette and a warm material palette."
  },
  {
    "slug": "dome-lamp",
    "name": "Dome Lamp",
    "short": "A little color. A different mood.",
    "category": "Lighting",
    "image": "lamp.webp",
    "number": "03",
    "price": 190,
    "material": "Cobalt enamel concept",
    "description": "A compact table-lamp concept with a broad curved shade and a simple cylindrical base. Cobalt color gives the quiet form a playful edge.",
    "dimensions": [
      32,
      32,
      38
    ],
    "care": "This is a non-functional generated product concept. No electrical rating, certification, bulb compatibility, or safety testing is implied.",
    "story": "Dome is an exercise in proportion. A low, broad shade balances a short base, allowing color and silhouette to carry the idea. It is shown unlit so the object can be read as a form before it becomes a source of light."
  }
]
```

## Reference interaction handler

```javascript
(() => {
  const products = JSON.parse(
    document.querySelector('#plinth-data').textContent,
  );
  const money = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  let cart = {};
  try {
    const stored = JSON.parse(localStorage.getItem('plinth-bag') || '{}');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      for (const product of products) {
        const quantity = stored[product.slug];
        if (Number.isInteger(quantity) && quantity > 0 && quantity <= 9)
          cart[product.slug] = quantity;
      }
    }
  } catch {}
  const dialog = document.querySelector('#bag-dialog');
  let opener = null;
  function notice(message) {
    document
      .querySelectorAll('.notice')
      .forEach((output) => (output.textContent = message));
  }
  function persist() {
    try {
      localStorage.setItem('plinth-bag', JSON.stringify(cart));
    } catch {
      notice('Bag updated for this visit. Browser storage is unavailable.');
    }
  }
  function renderBag() {
    const selected = products.filter((p) => cart[p.slug]);
    const count = selected.reduce((sum, p) => sum + cart[p.slug], 0);
    document
      .querySelectorAll('.bag-count')
      .forEach((el) => (el.textContent = String(count)));
    document.querySelector('#bag-empty').hidden = count > 0;
    document.querySelector('#bag-summary').hidden = count === 0;
    document.querySelector('#bag-items').innerHTML = selected
      .map(
        (p) =>
          `<article class="bag-item"><img src="assets/${p.image}" alt="${p.name} concept"><div><h3><a href="${p.slug}.html">${p.name}</a></h3><p>${money(p.price)} each</p><div class="bag-item-actions"><button type="button" data-action="decrease" data-slug="${p.slug}" aria-label="Decrease ${p.name} quantity" ${cart[p.slug] === 1 ? 'disabled' : ''}>−</button><span aria-label="Quantity">${cart[p.slug]}</span><button type="button" data-action="increase" data-slug="${p.slug}" aria-label="Increase ${p.name} quantity" ${cart[p.slug] === 9 ? 'disabled' : ''}>＋</button><button type="button" data-action="remove" data-slug="${p.slug}" aria-label="Remove ${p.name}">Remove</button></div></div></article>`,
      )
      .join('');
    document.querySelector('#subtotal').textContent = money(
      selected.reduce((sum, p) => sum + p.price * cart[p.slug], 0),
    );
  }
  function openBag(button) {
    opener = button;
    renderBag();
    dialog.showModal();
  }
  document
    .querySelectorAll('[data-bag]')
    .forEach((button) =>
      button.addEventListener('click', () => openBag(button)),
    );
  document
    .querySelector('#close-bag')
    .addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  });
  document.querySelectorAll('[data-add]').forEach((button) =>
    button.addEventListener('click', () => {
      const product = products.find((p) => p.slug === button.dataset.add);
      if (!product) return;
      const requested = button.hasAttribute('data-product-add')
        ? Number(document.querySelector('#quantity').value)
        : 1;
      const quantity =
        Number.isInteger(requested) && requested >= 1 && requested <= 9
          ? requested
          : 1;
      cart[product.slug] = Math.min(9, (cart[product.slug] || 0) + quantity);
      notice('Selection updated. Maximum nine of each concept.');
      persist();
      openBag(button);
    }),
  );
  document.querySelector('#bag-items').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const slug = button.dataset.slug;
    if (!cart[slug]) return;
    const action = button.dataset.action;
    if (action === 'remove') delete cart[slug];
    else if (action === 'increase') cart[slug] = Math.min(9, cart[slug] + 1);
    else if (action === 'decrease') cart[slug] = Math.max(1, cart[slug] - 1);
    persist();
    renderBag();
    const matching = document.querySelector(
      `[data-action="${action}"][data-slug="${slug}"]`,
    );
    if (matching && !matching.disabled) matching.focus();
    else document.querySelector('#close-bag').focus();
  });
  document.querySelector('#clear-bag').addEventListener('click', () => {
    cart = {};
    persist();
    renderBag();
    document.querySelector('#close-bag').focus();
  });
  document.querySelector('#download-bag').addEventListener('click', () => {
    const selected = products.filter((p) => cart[p.slug]);
    const total = selected.reduce((sum, p) => sum + p.price * cart[p.slug], 0);
    const text =
      'PLINTH / LOCAL SELECTION\n\n' +
      selected
        .map(
          (p) =>
            `${p.name} × ${cart[p.slug]} — ${money(p.price * cart[p.slug])}`,
        )
        .join('\n') +
      '\n\nSample subtotal: ' +
      money(total) +
      '\n\nFictional product concepts and illustrative USD prices. No order has been placed or payment collected.';
    const url = URL.createObjectURL(
      new Blob([text], { type: 'text/plain;charset=utf-8' }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = 'plinth-selection.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  renderBag();
  const grid = document.querySelector('#collection-grid');
  const cards = grid ? [...grid.querySelectorAll('.product-card')] : [];
  const filters = [...document.querySelectorAll('[data-filter]')];
  let filter = 'All objects';
  const sort = document.querySelector('#sort');
  function updateCollection() {
    if (!grid) return;
    const order = sort.value;
    const sorted = [...cards].sort((a, b) =>
      order === 'low'
        ? Number(a.dataset.price) - Number(b.dataset.price)
        : order === 'high'
          ? Number(b.dataset.price) - Number(a.dataset.price)
          : order === 'name'
            ? a.dataset.name.localeCompare(b.dataset.name)
            : cards.indexOf(a) - cards.indexOf(b),
    );
    let count = 0;
    sorted.forEach((card) => {
      card.hidden =
        filter !== 'All objects' && card.dataset.category !== filter;
      if (!card.hidden) count++;
      grid.append(card);
    });
    document.querySelector('#result-count').textContent =
      count + ' ' + (count === 1 ? 'object' : 'objects');
  }
  filters.forEach((button) =>
    button.addEventListener('click', () => {
      filter = button.dataset.filter;
      filters.forEach((x) =>
        x.setAttribute('aria-pressed', String(x === button)),
      );
      updateCollection();
    }),
  );
  sort?.addEventListener('change', updateCollection);
  const unitButtons = [...document.querySelectorAll('[data-unit]')];
  unitButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const inches = button.dataset.unit === 'in';
      unitButtons.forEach((x) =>
        x.setAttribute('aria-pressed', String(x === button)),
      );
      document.querySelectorAll('[data-dimension]').forEach((el) => {
        const cm = Number(el.dataset.dimension);
        el.textContent = inches ? (cm / 2.54).toFixed(1) + ' in' : cm + ' cm';
      });
    }),
  );
})();

```
