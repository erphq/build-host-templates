# Edition House: complete art-commerce website

Create Edition House, a complete independent art-print storefront with ten substantial pages. It must feel like a confident publisher of art, with considered photography, original print compositions, editorial storytelling, and useful shopping interactions. This is not a single promotional page. Visitors can browse six distinct prints, switch between artwork and illustrated room views, filter and sort a collection, configure sizes and frames, add selections to a persistent local bag, edit quantities, and download a selection summary. No orders or payments are submitted. All products and specifications are illustrative.

## Research and reference fidelity

The primary research reference is The Print Loft, discovered at https://minimal.gallery/tag/e-commerce/ and listed at https://minimal.gallery/the-print-loft/. Its actual home page, https://www.theprintloft.art/, and the product page https://www.theprintloft.art/products/dusk-over-ridge were inspected in the browser on September 8, 2026. Use the reference's information architecture, visual variety, product emphasis, and interaction depth as the quality benchmark. Do not redistribute the reference's artwork, brand, customer reviews, photographs, artist biographies, or code.

The reference home page visibly contains an immersive full-bleed collection hero with moving imagery and a pause control. Further down are collector quotations, a room-image carousel, shop-the-look links, a selected-works archive, Artwork and In Room toggles, edition information, series narratives, related collections, an art-finder invitation, journal previews, and gift-card content. The essential lesson is the transition between atmosphere and a specific product. Shopping is woven into an editorial experience, with enough depth to reward continued scrolling.

The product page visibly uses a large left gallery and a narrower right purchase column. Thumbnails provide artwork, room, detail, and video views. The purchase column includes a title, price, expandable description, size choices, framing choices, finish choices, and a prominent acquisition button. More information follows in care, materials, delivery, collector responses, related work, artist context, and frequently asked questions. These are observed controls and sections. The underlying checkout system, actual stock tracking, exact motion duration, easing curves, and rendering framework were not verified. Treat those as unknown rather than inventing facts.

Edition House retains the idea of an immersive opening followed by a rich art archive, room stories, series narratives, editorial guides, and complete product selection. Its native CSS image-settle motion, dialog transitions, and scroll-snapping room track are original implementation choices. Its room stages are original CSS illustrations rather than photographs, measured room previews, or augmented reality. The hero photograph is licensed separately from Unsplash. Its six artworks are original vector compositions created for this project.

## Brand, type, colour, and voice

The identity is a compact two-line EDITION HOUSE wordmark at the top left, set in a confident sans-serif. At the footer, the name becomes a huge single-line wordmark that nearly spans the page. This creates the feeling of a publisher's imprint and a memorable end to the experience. Avoid unrelated symbols, ornamental logos, badges, or generic trust strips.

Use warm off-white #f3f0e8 for the page, dark forest-grey #30392f for text and primary controls, and sage-grey for dividers. Product stages vary among chalk, plaster, pale olive, and warm paper. A deep green #303d31 manifesto creates a decisive change in pace. Clay, saffron, dusty cobalt, natural oak, and muted green live mostly in the original artwork. Do not use a decorative purple gradient, a black technology theme, or bright blue default buttons. The only functional photographic gradient shades the hero so white text remains legible.

Host Geist locally and use it for navigation, labels, descriptions, captions, prices, controls, and practical text. Pair it with system Georgia for generous editorial headings. Georgia italics provide a softer second voice within selected headlines. Keep large headings tightly tracked, with deliberate line breaks and calm lengths. Avoid monospace labels in commerce controls. Uppercase tracking belongs only in short section labels and edition context. Body copy should be warm, direct, and specific. Do not fabricate testimonials, artist biographies, reviews, shipping promises, or awards.

Use standard section padding near 3.3 percent of the viewport, with wider five-to-eight-percent insets for long editorial passages. Give major sections sixty to one hundred pixels of vertical room. Product cards are flat compositions of artwork stage, caption, and price. Do not wrap them in rounded white containers. Controls are rectangular, with thin borders and restrained arrows. Reserve circles for bag counts and carousel arrows. The rhythm should alternate broad photography, open typography, compact product archives, illustrative rooms, and deep green storytelling.

## Routes and shared structure

Create index.html, collection.html, craft.html, journal.html, terra-study.html, blue-hour.html, intervals.html, soft-sun.html, architectural-notes.html, and after-the-rain.html. Every route must be a complete page with the shared announcement, sticky header, navigation, bag, search, newsletter, and footer. Links are relative so the store works beneath public/demos/edition-house without a router dependency. Include a footer link to the surrounding ProtoSites library using ../../.

Header links are Shop all prints, New editions, The journal, and Our approach. New editions opens collection.html?category=Abstract. The journal contains real anchored articles at #scale and #colour. The approach page includes a #faq anchor. Every product card links to its actual product page. The bag counter displays total units rather than distinct lines. It updates immediately after mutations and restores consistently across page navigation.

On mobile, collapse the desktop links into a real Menu button. Clicking it reveals the links in a panel immediately below the header. Use aria-expanded, and change the label to Close while expanded. Keep the bag visible. Do not use hover-only menus or let the dropdown extend beyond the viewport. Search can remain a desktop utility because the complete collection is directly accessible through the mobile navigation.

## Home page composition

Start with a narrow dark announcement and a practical link to the approach. Beneath it is the pale sticky header. The hero is a full-width interior photograph, with warm natural textures and a strong white heading positioned low on the left. The line A new perspective introduces Make yourself at home, with the second line italic. A light rectangular Explore the collection button sits below. Small contextual labels appear near the top edge, and a brief supporting note appears at lower right on desktop. The image should dominate the first viewport without pushing the purchase destination out of view.

Use local hero.webp with explicit dimensions and high fetch priority. Object-fit cover preserves the immersive framing. Add a slow image-settle animation from a very slight scale enlargement to its final position. Use opacity only as a short enhancement, never as a blocking loading screen. Provide reduced-motion behavior. The reference's animated loader does not justify delaying the visitor behind an imitation splash screen.

Follow with an editorial introduction: a small label in the left column, a large headline in the middle, and a concise paragraph at right. The heading is Some things just feel like you. The copy introduces art for the corners, conversations, and everyday moments that make a home. On tablet, the body paragraph may wrap under the middle headline. On a phone, all elements become a single deliberate vertical sequence.

The next section is A few favourites, a four-product archive with Artwork and In a room controls and a link to the full collection. Each card contains its original print, title, starting price, series, and illustrative edition size. The quick-add plus button is discreet on desktop but always available on touch and keyboard focus. Changing the view must alter the scene around the artwork while preserving the same original composition.

After the product grid, create a large split story for Colour & Form. The left side shows Terra Study in a natural wood frame above a console; the right is a warm paper panel with A warmer way to see the world, concise series copy, and a collection link. Follow this with Picture it here, a room carousel containing The reading corner, A brighter morning, and Room to think. Every scene has an actual product link. Native horizontal scroll and scroll snap support gestures, while explicit arrows move one tile at a time.

A deep green manifesto follows with the large statement Not just something for the wall. Something to live with. Use generous spacing and one simple approach link. Finish the editorial sequence with two asymmetric journal previews: Finding the right scale and When colours become company. One image should emphasise a room; the other should emphasise the art itself. Close with newsletter and footer rather than another generic conversion card.

## Collection and product requirements

The collection page opens with Find your point of view and a short explanation. Below the introduction, provide All, Abstract, Geometric, and Landscape filter buttons. Add an Artwork/In a room toggle and a native sort select with Featured, Price low to high, Price high to low, and Alphabetical. Keep filtering and sorting independent. Display a live result count. Read a valid category query parameter at load and ignore invalid categories. Hidden products must be removed from both layout and keyboard navigation. Use a three-column desktop grid and two columns on phones.

The product gallery precedes purchase information on mobile and sits to its left on desktop. The gallery has three real choices: The artwork, In a room, and A closer look. The detail view zooms the original composition inside a clipped stage. The room view adds a frame, a console, wall colour, and a soft daylight pattern. Clicking the main image opens a native modal with the large artwork and an explicit Close control. Native Escape dismissal must remain intact.

The purchase column contains the series, edition context, product title, calculated price, short description, size, frame, quantity, and Add to bag. Size radios are S, 30 × 40 cm; M, 50 × 70 cm; and L, 70 × 100 cm. Medium adds 45 dollars to the base price and large adds 95. Framing options are Unframed, Natural oak, and Black. Natural oak adds 65 dollars, black adds 55, and unframed adds zero. Use proper fieldsets, legends, visible labels, and native radio inputs. Do not rely on swatch colour alone.

Changing a frame updates the selected name, price, and main artwork's border treatment. Selecting a size changes the price. A quantity select supports one through five for initial addition. The action opens the local bag with the selected configuration. Supporting text makes clear this is an illustrative storefront, not a live purchase. Expandable sections cover the work's original story, concept paper and frame specification, and demonstration delivery context. Continue beneath the purchase area with a large room scene and three related products.

## Bag data and defensive behavior

Use a native dialog styled as a right-hand drawer. It has a title, unit count, close control, scrollable line items, subtotal, download action, and clear action. An empty bag shows an editorial invitation and a real collection link. Every line item includes artwork thumbnail, product title, size, frame, unit price, quantity controls, and removal. The identity of a line is the product identifier plus size plus frame. Re-adding a matching configuration increases its quantity; a different configuration creates a new line.

Persist under edition-house-bag-v1 in localStorage. Validate restored data: known product identifiers, allowed size keys, allowed frame labels, integer quantities between one and twenty. Do not trust stored prices. Derive every price from current product data and the size/frame maps. Corrupt JSON falls back to an empty bag. Unavailable storage leaves the current in-memory visit working. Quantity decrement removes the line at zero; increment caps at twenty. The total is the sum of each validated quantity multiplied by its derived unit price.

Download your selection creates a plain-text file with title, size, frame, quantity, unit price, and sample subtotal. Include a sentence saying no order has been placed. Release the temporary object URL after the download begins. The clear action returns the drawer to its empty state and updates every visible bag count. Do not include a fake checkout, payment form, or shipping calculator.

Search opens a separate labelled native dialog and focuses its input. Match case-insensitively against name, category, series, and description. Render links with artwork thumbnail, title, category, and starting price. Include a meaningful no-results state. The newsletter validates email with native browser validation and shows a local confirmation saying the address was not submitted. No data leaves the page.

## Approach and journal depth

The approach page is a real editorial destination. Use an opening statement, a two-scene gallery, a two-column brand essay, three principles, and frequently asked questions. Explain that the store is fictional, the six artworks are original, the room illustrations are authored visualisations, and the bag is local. Principles should describe having an original point of view, attending to material context, and making art easy to live with. Avoid invented manufacturing certifications or misleading sustainability claims.

The journal contains two complete articles. Finding the right scale explains the relationship between artwork and furniture, breathing room, paper templates, grouping, and small/medium/large use cases. Include a compact size guide and a route back to shopping. When colours become company discusses choosing a feeling, echoing a small colour through a room, and using a print to change the atmosphere. Each article has a large artwork or room stage alongside readable text. On desktop, the image can remain sticky while the article scrolls; disable that arrangement on mobile.

## Accessibility, motion, and delivery

Use semantic landmarks, one h1 per page, coherent heading levels, fieldsets, labels, buttons, details, summary, and dialog. Include a visible-on-focus skip link. All interactive controls require visible focus rings in a high-contrast clay accent. Preserve native Escape behavior and focus trapping from dialog. Use descriptive artwork alt text, but avoid redundant text on thumbnail images inside clearly labelled controls. Keep product prices as text and selected states available through native checked states or aria-pressed.

At 390 pixels, avoid document overflow, preserve two product columns, show the bag and menu, and keep option controls easy to tap. The product page becomes one column with gallery first. The hero uses stable viewport units and a sensible height. The room track scrolls inside its container. At reduced-motion preference, remove nonessential animations and transitions and make arrow scrolling immediate. Do not add endless ambient animation to still art.

Source files belong to scripts/edition-house. Generated files belong to public/demos/edition-house. Export buildEditionHouse() from build.mjs and return an object containing prompt. Write the same complete prompt to public/prompts/edition-house.md and the demo's PROMPT.md. Keep hero.webp for the parent library's preview compatibility. Store the Geist variable font locally with its license text. Preserve source SVG and WebP files for all six original artworks.

The hero interior is Unsplash photo-1600210492486-724fe5c67fb0, downloaded from https://images.unsplash.com/photo-1600210492486-724fe5c67fb0. Its usage is covered by https://unsplash.com/license. Credit the source, local file, license, original print artwork, font, and reference research in assets/CREDITS.txt. Do not imply endorsement by a photographer, property owner, reference store, or artist. Original vector artwork must remain distinguishable from licensed photography and CSS room illustrations.

Before delivery, build all ten pages and inspect desktop and mobile views. Check every local image, font, internal route, and anchor. Filter a category, sort by price, switch artwork and room views, open a product, select medium and natural oak, confirm the calculated price, add two units, inspect the subtotal, change quantities, remove a line, and verify persistence across navigation. Check search results, empty results, gallery modal dismissal, and newsletter confirmation. Report what was actually tested rather than treating the presence of JavaScript as proof of behavior. The result should have the depth and visual variety of a high-quality art shop while remaining honest about its demonstration scope.


## Responsive image and caption refinements

Serve the original hero photograph through 640, 960, 1440, and 1800-pixel source candidates with sizes=100vw. Include all three added responsive WebP files in the asset bundle. Product category captions use 12-pixel text in #56604f against the warm page, including phones, so the commerce metadata remains readable.


## Exact product data

```json
[
  {
    "id": "terra-study",
    "name": "Terra Study",
    "series": "Colour & Form",
    "category": "Abstract",
    "price": 85,
    "edition": 75,
    "colors": [
      "#bf512e",
      "#e8ac68",
      "#454a32"
    ],
    "description": "An ochre sun settles into the space between two earthen forms. A study in warmth, weight, and the generous pause.",
    "story": "Terra began with a handful of paper offcuts on a studio floor. Moving one shape a few millimetres changed the entire conversation. This edition keeps the edges crisp and lets the colour do the talking."
  },
  {
    "id": "blue-hour",
    "name": "Blue Hour",
    "series": "Colour & Form",
    "category": "Abstract",
    "price": 95,
    "edition": 50,
    "colors": [
      "#284c70",
      "#e5cfb0",
      "#c85532"
    ],
    "description": "A quiet arrangement of cobalt, chalk and clay. For the moment when the room turns blue and the evening is still yours.",
    "story": "Three tones, two curved forms, one small interruption. Blue Hour considers how a strong colour can create a sense of stillness rather than noise."
  },
  {
    "id": "intervals",
    "name": "Intervals",
    "series": "Line & Rhythm",
    "category": "Geometric",
    "price": 75,
    "edition": 100,
    "colors": [
      "#253e35",
      "#eddec3",
      "#b74d2f"
    ],
    "description": "Repeating lines find their own rhythm. An architectural print for a thoughtful corner, or a room with room to breathe.",
    "story": "The intervals are deliberate: close enough to gather into a surface, open enough for the paper to remain part of the drawing. Seen from a distance, the entire composition changes."
  },
  {
    "id": "soft-sun",
    "name": "Soft Sun",
    "series": "Colour & Form",
    "category": "Abstract",
    "price": 85,
    "edition": 75,
    "colors": [
      "#dbaf49",
      "#e7bdab",
      "#8d3d32"
    ],
    "description": "A low sun and a long afternoon. Muted saffron, blush and oxblood meet on a field of warm paper.",
    "story": "Some colours feel like a place. Soft Sun borrows the feeling of a bright room at the end of an afternoon, when even the shadows seem warm."
  },
  {
    "id": "architectural-notes",
    "name": "Architectural Notes",
    "series": "Line & Rhythm",
    "category": "Geometric",
    "price": 110,
    "edition": 50,
    "colors": [
      "#252923",
      "#d9c6a5",
      "#7a7856"
    ],
    "description": "An arch, a stair, a shifting plane. Familiar architectural gestures arranged into a place that exists only on paper.",
    "story": "A notebook of thresholds became this composition. The forms suggest a building without describing one, allowing memory to fill the spaces between."
  },
  {
    "id": "after-the-rain",
    "name": "After the Rain",
    "series": "Colour & Form",
    "category": "Landscape",
    "price": 125,
    "edition": 40,
    "colors": [
      "#657d72",
      "#d1b07e",
      "#334e5a"
    ],
    "description": "A horizon softened by weather. Layers of muted green and blue make a small window into a quieter landscape.",
    "story": "Built from broad, irregular bands of colour, this landscape is an invented place. Its atmosphere comes from the rhythm of the layers and the light that passes between them."
  }
]
```

## Reference interaction handler

```javascript
(() => {
  'use strict';
  const products = JSON.parse(
    document.getElementById('edition-data').textContent,
  );
  const byId = new Map(products.map((p) => [p.id, p]));
  const money = (n) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n);
  const storageKey = 'edition-house-bag-v1';
  const sizePrice = { S: 0, M: 45, L: 95 };
  const framePrice = { Unframed: 0, 'Natural oak': 65, Black: 55 };
  let bag = [];
  let toastTimer;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved))
      bag = saved
        .filter(
          (item) =>
            byId.has(item.id) &&
            Object.hasOwn(sizePrice, item.size) &&
            Object.hasOwn(framePrice, item.frame) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0 &&
            item.quantity <= 20,
        )
        .map(({ id, size, frame, quantity }) => ({
          id,
          size,
          frame,
          quantity,
        }));
  } catch {
    bag = [];
  }
  function price(item) {
    return (
      byId.get(item.id).price + sizePrice[item.size] + framePrice[item.frame]
    );
  }
  function notify(message) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }
  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(bag));
    } catch {
      notify(
        'Your selection is available for this visit. Browser saving is unavailable.',
      );
    }
    renderBag();
  }
  function renderBag() {
    const count = bag.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.bag-count').forEach((node) => {
      node.textContent = count;
    });
    document.getElementById('bag-empty').hidden = bag.length > 0;
    document.getElementById('bag-summary').hidden = bag.length === 0;
    document.getElementById('bag-items').innerHTML = bag
      .map((item, index) => {
        const p = byId.get(item.id);
        return `<article class="bag-line"><a href="${p.id}.html"><img src="assets/${p.id}.webp" alt="${p.name}"></a><div><h3>${p.name}</h3><p>${item.size} / ${item.frame}</p><p>${money(price(item))} each</p><div class="bag-line-controls"><button data-adjust="${index}" data-delta="-1" aria-label="Decrease ${p.name} quantity">−</button><span>${item.quantity}</span><button data-adjust="${index}" data-delta="1" aria-label="Increase ${p.name} quantity" ${item.quantity >= 20 ? 'disabled' : ''}>+</button><button data-remove="${index}">Remove</button></div></div></article>`;
      })
      .join('');
    document.getElementById('subtotal').textContent = money(
      bag.reduce((sum, item) => sum + price(item) * item.quantity, 0),
    );
  }
  function add(id, size = 'S', frame = 'Unframed', quantity = 1) {
    if (!byId.has(id)) return;
    const item = bag.find(
      (entry) =>
        entry.id === id && entry.size === size && entry.frame === frame,
    );
    if (item) item.quantity = Math.min(20, item.quantity + quantity);
    else bag.push({ id, size, frame, quantity });
    persist();
    document.getElementById('bag').showModal();
  }
  document
    .querySelectorAll('[data-bag]')
    .forEach((button) =>
      button.addEventListener('click', () =>
        document.getElementById('bag').showModal(),
      ),
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
    },
    true,
  );
  document
    .querySelectorAll('[data-close]')
    .forEach((button) =>
      button.addEventListener('click', () => button.closest('dialog').close()),
    );
  document.querySelectorAll('dialog').forEach((dialog) =>
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    }),
  );
  document
    .querySelectorAll('[data-add]')
    .forEach((button) =>
      button.addEventListener('click', () => add(button.dataset.add)),
    );
  document.getElementById('bag-items').addEventListener('click', (event) => {
    const remove = event.target.closest('[data-remove]');
    if (remove) {
      bag.splice(Number(remove.dataset.remove), 1);
      persist();
      return;
    }
    const adjust = event.target.closest('[data-adjust]');
    if (!adjust) return;
    const index = Number(adjust.dataset.adjust);
    bag[index].quantity = Math.min(
      20,
      bag[index].quantity + Number(adjust.dataset.delta),
    );
    if (bag[index].quantity < 1) bag.splice(index, 1);
    persist();
  });
  document.getElementById('clear').addEventListener('click', () => {
    bag = [];
    persist();
  });
  document.getElementById('download').addEventListener('click', () => {
    const lines = bag.map(
      (item) =>
        `${byId.get(item.id).name} — ${item.size} / ${item.frame} — ${item.quantity} × ${money(price(item))}`,
    );
    lines.push(
      '',
      `Sample subtotal: ${money(bag.reduce((sum, item) => sum + price(item) * item.quantity, 0))}`,
      '',
      'Edition House is a fictional storefront. No order has been placed.',
    );
    const url = URL.createObjectURL(
      new Blob(['EDITION HOUSE / YOUR COLLECTION\n\n' + lines.join('\n')], {
        type: 'text/plain',
      }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = 'edition-house-selection.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  const productInfo = document.querySelector('[data-product]');
  const options = document.getElementById('product-options');
  function selectedOptions() {
    const data = new FormData(options);
    return {
      id: productInfo.dataset.product,
      size: data.get('size'),
      frame: data.get('frame'),
    };
  }
  if (options) {
    options.addEventListener('change', () => {
      const selection = selectedOptions();
      document.getElementById('product-price').textContent = money(
        price(selection),
      );
      document.getElementById('frame-name').textContent = selection.frame;
      const frame = document.querySelector('.gallery-main .framed');
      frame.style.borderWidth = selection.frame === 'Unframed' ? '0' : '9px';
      frame.style.borderColor =
        selection.frame === 'Black' ? '#242522' : '#ac8157';
    });
    options.addEventListener('submit', (event) => {
      event.preventDefault();
      const selection = selectedOptions();
      add(
        selection.id,
        selection.size,
        selection.frame,
        Number(document.getElementById('quantity').value),
      );
    });
  }
  document.querySelectorAll('[data-gallery]').forEach((button) =>
    button.addEventListener('click', () => {
      const view = button.dataset.gallery;
      const main = document.querySelector('.gallery-main');
      main.classList.toggle('detail', view === 'detail');
      main
        .querySelector('.art-stage')
        .classList.toggle('in-room', view === 'room');
      document
        .querySelectorAll('[data-gallery]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    }),
  );
  document
    .querySelector('[data-zoom]')
    ?.addEventListener('click', () =>
      document.getElementById('zoom').showModal(),
    );
  document.querySelectorAll('[data-view]').forEach((button) =>
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.art-grid .art-stage')
        .forEach((stage) =>
          stage.classList.toggle('in-room', button.dataset.view === 'room'),
        );
      document
        .querySelectorAll('[data-view]')
        .forEach((b) =>
          b.setAttribute(
            'aria-pressed',
            String(b.dataset.view === button.dataset.view),
          ),
        );
    }),
  );
  const grid = document.querySelector('.collection-grid');
  let category = 'All';
  function filterCollection(value) {
    category = value;
    const cards = [...grid.querySelectorAll('.art-card')];
    cards.forEach((card) => {
      card.hidden = category !== 'All' && card.dataset.category !== category;
    });
    document
      .querySelectorAll('[data-filter]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.filter === category),
        ),
      );
    document.querySelector('.result-count').textContent =
      `${cards.filter((card) => !card.hidden).length} prints`;
  }
  if (grid) {
    document
      .querySelectorAll('[data-filter]')
      .forEach((button) =>
        button.addEventListener('click', () =>
          filterCollection(button.dataset.filter),
        ),
      );
    const requested = new URLSearchParams(location.search).get('category');
    if (['Abstract', 'Geometric', 'Landscape'].includes(requested))
      filterCollection(requested);
    document.getElementById('sort').addEventListener('change', (event) => {
      const mode = event.target.value;
      const cards = [...grid.children];
      const compare = {
        low: (a, b) => Number(a.dataset.price) - Number(b.dataset.price),
        high: (a, b) => Number(b.dataset.price) - Number(a.dataset.price),
        name: (a, b) => a.dataset.name.localeCompare(b.dataset.name),
        featured: (a, b) =>
          products.findIndex((p) => p.name === a.dataset.name) -
          products.findIndex((p) => p.name === b.dataset.name),
      };
      cards.sort(compare[mode]).forEach((card) => grid.append(card));
    });
  }
  document.querySelectorAll('[data-slide]').forEach((button) =>
    button.addEventListener('click', () => {
      const track = document.querySelector('.room-track');
      const tile = track.querySelector('.room-tile');
      track.scrollBy({
        left:
          Number(button.dataset.slide) *
          (tile.getBoundingClientRect().width + 24),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
    }),
  );
  const menu = document.querySelector('.mobile-menu');
  menu.addEventListener('click', () => {
    const open = document.querySelector('header').classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
  });
  const search = document.getElementById('search');
  function renderSearch() {
    const query = document
      .getElementById('search-input')
      .value.trim()
      .toLowerCase();
    const found = products.filter((p) =>
      `${p.name} ${p.series} ${p.category} ${p.description}`
        .toLowerCase()
        .includes(query),
    );
    document.getElementById('search-results').innerHTML = found.length
      ? found
          .map(
            (p) =>
              `<a class="search-result" href="${p.id}.html"><img src="assets/${p.id}.webp" alt=""><div><p>${p.name}</p><span>${p.category} · From ${money(p.price)}</span></div></a>`,
          )
          .join('')
      : '<p>No prints found. Try a colour, title, or style.</p>';
  }
  document.querySelector('[data-search]').addEventListener('click', () => {
    renderSearch();
    search.showModal();
    document.getElementById('search-input').focus();
  });
  document
    .getElementById('search-input')
    .addEventListener('input', renderSearch);
  document.getElementById('newsletter').addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.querySelector('output').textContent =
      'You’re on the list — in this demo. No email address was submitted.';
    event.currentTarget.reset();
  });
  renderBag();
})();

```
