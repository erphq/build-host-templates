# Supper: an original restaurant website

Build a complete, responsive restaurant concept named Supper. The central experience is choosing a dish, seeing its photograph, and assembling a small local tasting selection. The visitor should feel the hospitality of a generous table through precise typography, beautiful food, and unhurried pacing. Produce a working website, not a static mockup. The result must be independently composed and useful at both phone and desktop sizes.

## Creative direction and reference

The research reference is Ristorante by Damir Cosic, listed at https://www.framer.com/marketplace/templates/ristorante/ with its live preview at https://ristorante.framer.website/. Study its mobile emphasis on menu browsing and convenient reservation access. That is the general principle to carry forward. Do not reproduce its logo, page composition, wording, reviews, food photographs, menu categories, or reservation integration. Supper is an original fictional restaurant with a different visual identity and a different menu interaction. Credit the research reference in the library entry without implying affiliation, endorsement, or ownership of the template.

Use a cool white and cobalt palette inspired by white porcelain on a blue tablecloth. The design should resemble a carefully typeset restaurant identity, with an enormous broad serif masthead and a menu that deserves the visitor's attention. Avoid generic marketing feature cards, glossy SaaS gradients, stock testimonial strips, fake review scores, decorative statistics, and excessive badges. Let the food photography and type do the work. Use a consistent square-edged shape system, restrained rules, and deliberate whitespace. Do not add decorative numbered section labels.

The page is intentionally a single complete restaurant experience. Do not manufacture empty secondary pages merely to increase a page count. All main navigation items should reach real sections, and all prominent controls should perform their described action. The finished page includes the masthead, interactive menu, tasting selection, hospitality story, questions, footer, and a native modal table planner.

## Typography and color

Use DM Serif Display for the Supper wordmark and expressive headings. Its restaurant character is part of the identity, not an arbitrary serif word mixed into otherwise unrelated headlines. Pair it with Geist for body copy, navigation, prices, field labels, and functional controls. Self-host the fonts and include their original licenses. Verify the actual font format before writing the CSS source descriptor; a file returned by a font service may be a TrueType font even if a guessed filename says otherwise. Use font-display swap and preload only the primary display face.

The light palette is paper #f6f7f2, cobalt ink #173bb5, muted text #465983, fine rules #aebde3, and a pale panel #e8edf6. The dark theme uses paper #101c3b, light ink #dae4ff, muted text #b7c5e2, rules #465777, and panel #19284c. Keep foreground contrast readable in both. The photographs retain their original coloring across themes. Use a clearly labeled theme button whose accessible name describes the next action. Store only this preference and the menu selection locally, with a graceful fallback when local storage is unavailable.

At a wide desktop size, use four percent horizontal outer padding and a header approximately 76 pixels high. The masthead should fill the available width while preserving its lowercase shape and period. A responsive size near 23 viewport-width units, bounded between 110 and 340 pixels, is a reasonable starting point. Use tight but readable tracking and a line height near one. The masthead is one heading and one line. Below it, place the concise promise “Good food. Better company.” opposite a short description identifying the restaurant concept. Keep this introduction compact enough that the food appears within the first laptop viewport.

## Header and navigation

The header includes the small Supper brand link, Menu anchor, Our table anchor, theme toggle, and Plan a table action. The brand returns to the same page. Menu scrolls to the menu experience; Our table scrolls to the hospitality story. Plan a table opens the table planner dialog. Avoid an unnecessary hamburger menu when these few links fit on a phone. At narrow widths, hide the redundant desktop reservation button and provide a persistent bottom table action with a generous touch target. Reserve sufficient footer space so this control does not cover the last content.

Provide a skip-to-content link that becomes visible on keyboard focus. Every navigation region needs a useful accessible label. Interactive targets should remain large enough for touch, with visible focus outlines and no reliance on hover alone. Do not use unnamed icon-only controls. If the close button uses a simple cross, give it an explicit Close table planner accessible name.

## The menu as the main composition

On desktop, construct one nearly equal two-column menu stage. The left side is a large food image and the right side is a flat list of three thoughtfully spaced dishes. The image stays sticky within this section while the menu is explored. There are no nested cards. Fine rules separate the items. Each dish has its course, an expressive short line, the actual dish name, an aligned price, a concise ingredient description, and an independent add/remove action.

The three concept dishes are king oyster mushrooms for $24, roasted garden carrots for $16, and dark chocolate tart for $12. Their complete content is included in the exact records below. Prices are illustrative USD values. Keep them in one data source so the visual menu and selection arithmetic cannot diverge. Do not invent real availability, nutritional facts, allergy assurances, preparation guarantees, a real location, or operating hours.

Each expressive heading is a real button that selects the corresponding photograph. Its accessible name should say View followed by the dish name. Indicate the currently selected photograph using aria-pressed and a restrained underline. Update the image source, responsive source set, alternative text, and caption together. The caption contains the dish's short editorial note. Do not update only the visual image and leave stale alternative text behind. The click is deliberate; keyboard and touch users should receive the same experience as mouse users.

Generate three original food photographs in one consistent visual world: overhead or three-quarter editorial food photography, white porcelain on cobalt linen, direct flash, tactile ingredients, no people, no logos, and no embedded text. The mushrooms show browned king oyster pieces on white bean purée with parsley oil and crumbs. The carrots show roasted slender carrots with tahini, pomegranate, and dill. The tart shows dark chocolate pastry with olive oil and salt. Save the exact generation prompts in provenance metadata and identify generated imagery honestly in credits. Do not fetch or redistribute the reference template's photographs.

Create responsive WebP renditions at approximately 640, 960, and 1440 pixels wide. Preserve the aspect ratio and keep files appropriately compressed. Give images explicit width and height. The first food photograph is high priority; other states should be decoded normally when selected. Keep a hero.webp compatibility image for the library's thumbnail conventions, but do not count that duplicate as a new original asset. Include all required renditions in the individual downloadable site.

On phones, place the image above the menu and keep it sticky within the menu stage at a modest height, around 260 pixels. This makes the result of choosing another dish visible as the visitor reads the menu. It must not consume so much of a small viewport that the active controls become unreachable. The sticky image must stop at its section boundary. Later sections use normal document flow. Test at 320 and 390 pixels wide, not only a desktop window narrowed by intuition. Avoid horizontal scrolling and ensure price/name rows wrap without collision.

## Tasting selection behavior

The add button is separate from the photograph-selection button. Adding a dish does not place an order. Each of the three dishes may be included once. Pressing the same action again removes it. The label switches between Add to my table and Remove from table, with aria-pressed reflecting the state. Keep the selected identifiers in a Set, validate stored identifiers against the known dishes, and ignore malformed stored data safely.

Below the menu, show a receipt-like selection section. Its heading is “Your table, so far.” The selected dish names appear in a readable sentence, and the illustrative subtotal is prominent alongside them. With no selected dishes, show an inviting empty state and $0. The maximum example subtotal for all three plates is $52. Explain that this is a local selection, one of each plate, before taxes, and that nothing is ordered. Keep the explanation close to the arithmetic rather than burying it in a legal footer.

Provide Clear table and Copy selection controls. Disable them in the empty state. Clearing must remove the selection, refresh the total, reset all add buttons, and persist the empty selection. Copying creates plain text with dish names, prices, subtotal, and a short statement that no order exists. Because clipboard access can be unavailable in an embedded preview or an offline browser, always expose the same text in a readonly textarea that the visitor can select manually. Report actual clipboard success only when the clipboard promise resolves. On failure, explain that the text is ready to copy. Use a polite live region for meaningful selection updates without announcing every unrelated visual change.

## Hospitality story and practical questions

Follow the interactive section with a generous two-column story. Use a broad heading, “Pull up a chair,” and two short paragraphs about a slow evening, shared plates, and an imagined neighbourhood restaurant. Avoid inflated claims about years in business, awards, famous chefs, or actual customer experiences. A second table action appears here for visitors who have finished browsing. The story is deliberately quieter than the menu so the page has a changing visual rhythm.

The questions section uses native details and summary elements. Answer whether real reservations are available, what happens to the local menu selection, and whether the images depict actual menu items. Make the answers concise and direct. The fictional nature of the concept should be clear without turning every decorative surface into a disclaimer. The footer links to actual image credits and the parent ProtoSites library. Include no empty social icons or fabricated contact details.

## Table planner

Use a native HTML dialog opened with showModal, preserving browser focus behavior, Escape handling, and modal semantics. Its heading is “A table for you.” The form asks for a first name, date, time, and guest count. Use explicit labels and native controls. First name is required, has a reasonable maximum length, and must contain a non-whitespace character. The date is required and cannot precede the current local date. Compute today's date using local year, month, and day rather than UTC serialization, which can shift the date near midnight.

Offer a small set of illustrative evening times and guest counts from one through six. Submit prepares a sample request in the dialog; it never makes a network request or stores personal details. Render the resulting sentence with textContent so entered text is not interpreted as HTML. State the chosen party size, date, and time and explicitly say that nothing has been reserved or sent. Focus the result for keyboard users. Do not claim real availability or display an actual reservation confirmation. A close button and Escape must return the visitor to the page naturally.

## Motion and accessibility

Motion should respond to intention. Use a short opacity and slight scale transition when the selected dish changes, with a calm easing curve and duration near 420 milliseconds. A modest masthead arrival can introduce the page once. A progressive CSS view-timeline reveal may enhance the story heading where supported; the normal state must remain readable in browsers without that feature. Do not introduce a continuous carousel, mandatory intro sequence, scroll hijacking, or animated ornament just to advertise motion.

Respect prefers-reduced-motion in both CSS and JavaScript. With reduced motion, states update instantly and all content remains present. Use transforms and opacity for animated properties. Keep native anchor scrolling and native dialog behavior. Test focus indicators in both color themes, all form labels, the disabled selection actions, selected image state, and modal dismissal. The selected photograph and selected tasting dishes are different states; do not confuse their ARIA attributes or visual treatments.

## Delivery and verification

Deliver the complete HTML, styles, JavaScript, fonts, image renditions, font licenses, image credits, provenance, and this detailed prompt. The site must work when opened from the downloadable folder without a build tool or external application service. Local storage and clipboard capabilities may vary for file URLs, so their fallback paths must remain useful. Link back to the online library for an individual download and to the pack's offline index when packaged in a collection.

Check the desktop and phone layout in a real browser. Exercise every dish selector, add all three plates, verify $52, remove a dish, reload to check persistence, clear the selection, open and close the dialog, and prepare a valid sample request. Check an empty and invalid form without bypassing native validation. Verify the menu photograph changes together with its caption and source set. Inspect all local asset links, ensure one h1, parse the inline script, validate the ZIP, and run the production build. Use Lighthouse as a local performance and accessibility diagnostic, fix actionable failures, and describe measured results honestly. Do not call a clicked download a verified completed download unless that completion was observed. Preserve the distinction between a complete fictional demo and a real restaurant service.


## Exact dish records

```json
[
  {
    "id": "mushrooms",
    "name": "A little smoke.",
    "dish": "King oyster mushrooms",
    "course": "Main",
    "price": 24,
    "image": "mushrooms.webp",
    "description": "Charred mushrooms, white bean purée, parsley oil, and toasted crumbs.",
    "note": "Deeply browned edges. A soft centre. Something bright to finish."
  },
  {
    "id": "carrots",
    "name": "Sweet meets sharp.",
    "dish": "Roasted garden carrots",
    "course": "Small plate",
    "price": 16,
    "image": "carrots.webp",
    "description": "Roasted carrots, tahini, pomegranate, and fresh dill.",
    "note": "Made for the middle of the table, and the last piece of bread."
  },
  {
    "id": "tart",
    "name": "Stay for one more.",
    "dish": "Dark chocolate tart",
    "course": "Dessert",
    "price": 12,
    "image": "tart.webp",
    "description": "Dark chocolate, crisp pastry, olive oil, and a little flaky salt.",
    "note": "A small slice with a long finish. Two forks encouraged."
  }
]
```

## Reference interaction handler

```javascript
const dishes = JSON.parse(document.getElementById('supper-data').textContent);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const selected = new Set();
const dishButtons = [...document.querySelectorAll('[data-dish]')];
const photo = document.getElementById('dish-photo');
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key,value) { try { localStorage.setItem(key,value); } catch { /* The page remains usable without persistence. */ } },
};
try {
  const saved = JSON.parse(storage.get('supper-selection') || '[]');
  if (Array.isArray(saved)) saved.filter(id => dishes.some(d => d.id === id)).forEach(id => selected.add(id));
} catch { /* Ignore malformed local preferences. */ }
function showDish(id) {
  const dish = dishes.find(item => item.id === id);
  if (!dish || photo.dataset.dish === id) return;
  photo.dataset.dish = id;
  photo.src = 'assets/' + dish.image;
  photo.srcset = `assets/${id}-640.webp 640w, assets/${id}-960.webp 960w, assets/${id}.webp 1440w`;
  photo.alt = dish.description + ' Original generated food photograph.';
  document.getElementById('dish-caption').textContent = dish.note;
  dishButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.dish === id)));
  if (!reduced.matches) photo.animate([{opacity:.35,transform:'scale(1.035)'},{opacity:1,transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.7,.3,1)'});
}
dishButtons.forEach(button => button.addEventListener('click', () => showDish(button.dataset.dish)));
function renderSelection() {
  document.getElementById('selection-copy').hidden = true;
  document.getElementById('selection-copy').value = ''; 
  const chosen = dishes.filter(d => selected.has(d.id));
  document.getElementById('selection-items').textContent = chosen.length ? chosen.map(d => d.dish).join(' + ') : 'Choose a plate above to start your table.';
  document.getElementById('selection-total').textContent = '$' + chosen.reduce((sum,d) => sum + d.price,0);
  document.querySelectorAll('[data-add]').forEach(button => {
    const active = selected.has(button.dataset.add);
    button.setAttribute('aria-pressed',String(active));
    button.textContent = active ? 'Remove from table −' : 'Add to my table +';
  });
  document.getElementById('clear-selection').disabled = !chosen.length;
  document.getElementById('copy-selection').disabled = !chosen.length;
  storage.set('supper-selection',JSON.stringify([...selected]));
}
document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.add;
  if (selected.has(id)) selected.delete(id); else selected.add(id);
  renderSelection();
  document.getElementById('selection-status').textContent = selected.size + ' plates in your local selection.';
}));
document.getElementById('clear-selection').addEventListener('click', () => { selected.clear(); renderSelection(); document.getElementById('selection-status').textContent = 'Your table has been cleared.'; });
document.getElementById('copy-selection').addEventListener('click', async () => {
  const text = 'Supper concept menu\n' + dishes.filter(d => selected.has(d.id)).map(d => `${d.dish}: $${d.price}`).join('\n') + '\nSample total: ' + document.getElementById('selection-total').textContent + '\nIllustrative prices. Nothing ordered.';
  const output = document.getElementById('selection-copy');
  output.hidden = false; output.value = text;
  output.focus(); output.select();
  try { await navigator.clipboard.writeText(text); document.getElementById('selection-status').textContent = 'Selection copied.'; }
  catch { document.getElementById('selection-status').textContent = 'Your selection is ready below. Copy the selected text.'; }
});
renderSelection();
const theme = document.getElementById('theme');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  theme.textContent = dark ? 'Light' : 'Dark';
  theme.setAttribute('aria-label',dark ? 'Use light theme' : 'Use dark theme');
  storage.set('supper-theme',dark ? 'dark' : 'light');
}
setTheme(storage.get('supper-theme') === 'dark');
theme.addEventListener('click', () => setTheme(document.documentElement.dataset.theme !== 'dark'));
const dialog = document.getElementById('table-dialog');
const form = document.getElementById('table-form');
const date = document.getElementById('table-date');
const today = new Date();
const localDate = [today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
date.min = localDate;
date.value = localDate;
document.querySelectorAll('[data-reserve]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const field = key => { const value = data.get(key); return typeof value === 'string' ? value.trim() : ''; };
  const summary = `${field('name')}, your unsent table request is ready: ${field('guests')} guests on ${field('date')} at ${field('time')}. This concept has no booking service. Nothing has been reserved or sent.`;
  document.getElementById('request-result').textContent = summary;
  document.getElementById('request-result').focus();
});
if (!reduced.matches) document.querySelector('h1').animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.3,1)'});

```
