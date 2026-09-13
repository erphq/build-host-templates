# Vesper — an original neighborhood hotel concept

Build Vesper as a complete, standalone urban boutique hotel website. The hotel, its Marlow Quarter setting, the room collection, menu, prices, and neighborhood destinations are fictional. The experience should feel like a considered hospitality editorial, with enough practical detail to support a useful local planning exercise. It must not imply real room inventory, current hotel availability, a verified address, a reservation service, or payment processing. The main conversion is a local stay draft: a readable document the visitor can review, copy, or download without sending anything outside the browser.

Vesper should feel different from a remote lodge, a wellness retreat, or a generic luxury hotel template. Its personality comes from city life: warm timber, brick, an intimate downstairs dining room, the rhythm of a neighborhood, and a room that offers a quieter counterpoint. The identity is friendly but restrained. Use conversational headings and precise room facts. Avoid aspirational claims about being the best, award badges, invented review scores, false occupancy urgency, real hotel logos, or a decorative booking form that does nothing. The public site must remain provider neutral and must not include a favicon, hosting badge, or AI-provider branding.

## Reference and original interpretation

The live reference is The Hoxton, specifically its Holborn hotel overview, bedroom collection, and Rondo restaurant page. The overview was inspected at https://thehoxton.com/london/holborn/, the room page at https://thehoxton.com/london/holborn/rooms/, and dining at https://thehoxton.com/london/holborn/rondo-restaurant/. The global homepage at https://thehoxton.com/ provides the broader hospitality navigation context. Treat these as references for information hierarchy and the relationship between practical planning and editorial storytelling. Do not reproduce their brand, visual assets, room names, text, address, menu, or live booking behavior.

At a 1471-pixel desktop viewport, the hotel reference presented a cream navigation shell, a very wide interior hero with a greeting over the photograph, and a horizontal booking bar crossing the image’s lower edge. Below it, the page moved through a neighborhood introduction, sleep and booking stories, location information, FAQs, dining, events, and a longer neighborhood sequence. The bedrooms page used a centered pale-peach editorial introduction, large room photography, alternating text and image passages, an expandable amenity list, and a room collection with capacities and sleeping arrangements. The restaurant page used a large image beside a separate identity panel. These observed patterns support a complete hotel experience rather than an isolated hero and card grid.

Vesper interprets those lessons with its own composition. The home page begins with a large two-line serif headline above the interior photograph rather than an overlaid greeting. A small side note introduces the imagined neighborhood. The practical band at the image edge contains honest links and summary facts, not inactive date fields. Rooms receive complete individual stories, and the planner lives on its own page with a transparent itemized estimate. Dining becomes a tobacco-colored editorial chapter. The neighborhood is an original illustrated concept map, not a map borrowed from a real city. Motion is brief and user-driven, with no autoplay photography carousel or continuously moving text.

## Design system and typography

Use chalk paper #f2eee5 as the main page background, deep warm ink #292923 for text, tobacco #793e2c for the top notice, and cobalt #2047b1 for primary actions. The restaurant chapter uses a related dark rust background #703b2c with warm off-white text. Secondary surfaces are sand and pale olive, including #e9dfcd for the estimate and detail panels and #d0d2be for closing invitations. These colors should make the hotel feel urban and material without defaulting to a cream-and-green countryside aesthetic. Borders are visible warm gray lines, normally one pixel, and corners remain square except for the small circular hero stamp.

Use Georgia for the large editorial headings and Geist for navigation, body text, forms, specifications, and utility labels. Georgia is requested as a system font and is not bundled. Geist is locally hosted as a variable WOFF2 file with its SIL Open Font License included. The wordmark is a lowercase serif treatment reading vesper, followed by a small asterisk-like ornament. It must not include a registered trademark symbol. The mark is text, not a copied logo. At desktop size it is approximately 43 pixels, while the mobile treatment is approximately 38 pixels.

The main desktop headline reaches approximately 112 to 124 pixels on a wide screen, with a tight but readable line height near one and negative letter spacing appropriate to the serif. Section headings range from about 38 to 65 pixels. Room card headings are around 34 pixels. Editorial body copy is 17 or 18 pixels on important narrative sections, with a comfortable line height around 1.6. Standard content is at least 16 pixels. Buttons and navigation never fall below 14 pixels. Secondary eyebrow labels may be 12 pixels with modest uppercase tracking. Do not reduce control text to fit a dense mobile layout; change the layout instead.

The page should use broad, deliberate spacing. Outer desktop gutters are generally 4.4 percent for image-led sections, 8 percent for editorial sections, and 12 percent for narrower room narratives. Major vertical gaps are around 65 to 100 pixels. A restrained one-pixel rule separates room facts, footer content, and accordion rows. Avoid a repeated stack of rounded cards. Different sections should have different structural roles: a masthead-like hero, a wide photograph, an information band, a three-room comparison, a full-bleed dining chapter, a map-and-story spread, and a final invitation.

## Images, derivatives, and credits

Use the four original generated interior images supplied with the project: nook.webp, corner.webp, suite.webp, and dining.webp. They are architectural concepts made for this fictional hotel. Each also has a 720-pixel derivative for smaller screens. The large derivatives are 1500 pixels wide and preserve a three-to-two ratio. The hero.webp file is an optimized derivative of the Corner concept and is provided for the external template catalog. The website itself can use the same Corner image through responsive source sets. Do not load remote image services at runtime, and do not replace these images with unrelated real hotel photographs.

The Nook image shows a compact rust-toned bedroom with a queen bed, warm timber, a tall window, and pale stone textures. The Corner image shows an ochre headboard, industrial windows, an olive reading chair, and strong afternoon light. The Suite image shows a more generous sitting area separated from the bed by an open walnut partition, with dusk beyond the windows. The dining image shows oxblood banquettes, round tables, amber lighting, a brick arch, and a warm urban restaurant mood. Alt text should describe these visible features and make clear that the interiors are original generated concepts.

Treat the photographs as editorial compositions, not floor plans or proof of physical room dimensions. Some sleeping surfaces described by the fictional room specification may not be visible in the concept image; say so on the room story page. A second image use on a room page is a labeled crop of the same generated interior, not an invented alternate camera angle. Use object-fit cropping to draw attention to material relationships while retaining a clear full-room view above. Include a plain-text CREDITS file that explains generated imagery, original map artwork, local font licensing, and the reference relationship without exposing local filesystem paths or provider names.

## Home page composition

The home page is index.html. Begin with a narrow tobacco notice explaining that this is an imagined city hotel. Below it, place the wordmark at the left of an 88-pixel desktop header and a five-link navigation row at the right. Links lead to the hotel, rooms, dining, neighborhood, and planner. The planner link receives the cobalt button treatment. On mobile, the header becomes a compact wordmark and Menu button, with the navigation revealed in a full-width panel below the header. The active page should be indicated with aria-current and a visible underline where appropriate.

The hero starts beneath the header with the headline “City outside. Your world inside.” in two large lines. Keep the words readable and avoid a forced narrow text column. A smaller right-hand column contains the Vesper and Marlow Quarter label, a short explanation, and a room link. Below this sits the Corner interior photograph, approximately 620 pixels tall at wide desktop sizes. A small circular paper-colored stamp at the upper right reads “Good nights. Better days.” It is decorative and hidden from assistive technology because it adds mood rather than essential information.

At the lower image edge, place the practical stay band. Its four columns communicate the imagined neighborhood, the one-to-thirty-night planning range, the one-to-four-guest room range, and a real planner link. The band overlaps the image slightly on desktop, but it must remain in normal document flow and must never hide the image caption or next section. Under the band, show a small caption identifying the Corner image and the fictional hotel concept. This creates a useful visual hinge between the atmosphere of the hero and the information that follows.

The next section is a wide editorial introduction with a small eyebrow in the first column and a larger heading and paragraphs in the second. Explain the hotel’s relationship to a city day: somewhere to return to, a table downstairs, a bookshop nearby, and an imagined neighborhood. Follow this with the three-room comparison, each containing a large image, title, summary, size, capacity, fictional rate, and a link to its complete room story. Use equal image ratios but let the copy remain natural. A concise note beneath the collection explains that the prices are examples, not live rates.

After rooms, create a full-width dining spread with photography on the left and a tobacco-colored text panel on the right. The heading “One more plate. One less plan.” should feel like a different chapter from the rooms section. Follow with a neighborhood teaser that combines the original map graphic and a short editorial introduction. Finish with a pale olive closing invitation to the local planner. The footer repeats the fictional context, includes credits, and provides useful internal navigation. It should not become an oversized directory or a marketing claims panel.

## Rooms and individual room stories

The rooms.html page begins with a centered editorial heading and introduction. It then presents the three rooms as substantial alternating image-and-copy rows. The first and third place the image on the left; the second reverses the balance. Each row includes its room number, name, summary, floor-area concept, sleeping arrangement, capacity, fictional nightly rate, story link, and planner link with a room query parameter. These are real links. Do not turn the entire row into one oversized click target that makes the individual actions ambiguous.

The Nook is 19 square meters, with one queen bed, a capacity of two, and a fictional rate of £145 per room per night. The Corner is 29 square meters, with one king bed and one single daybed, capacity three, and a rate of £215. The Afterhours Suite is 46 square meters, with one king bed and one double sofa bed, capacity four, and a rate of £320. These values are the single source of truth for cards, room pages, planner options, itemized calculations, and draft exports. Do not duplicate them in independent mutable structures.

Each room has its own complete HTML page: nook.html, corner.html, and suite.html. The opening is a split composition with a generous serif title and planning action on one side and the room photograph on the other. Beneath it is a four-part specification band. Follow with an editorial story explaining the room’s mood and who it suits. The text should make clear that capacity refers to all guests, including children, and should describe the actual conceptual sleeping arrangement rather than merely repeating a maximum number.

The next section pairs a detail crop of the same image with a material-focused paragraph. Then include accessible native details elements covering suitability, access questions, and the estimate calculation. Access copy must be honest: generated imagery and total floor area cannot establish turning space, thresholds, bathroom configuration, bed heights, or an accessible route. Invite the visitor to record questions in the local draft rather than claiming verified accessibility. Finish each room page with the shared amenity concept list and a useful link back into planning.

## Dining and neighborhood chapters

The dining.html page is a complete restaurant story for the fictional Common Table. Use a strong image-and-color split at the top, with an oversized serif heading in the tobacco panel. Explain the rhythm from morning coffee to evening conversation without claiming real opening hours. The content should feel like a coherent hospitality concept, not a menu pasted below a photograph. Use an original morning menu and a later sharing menu in two clear columns, with item descriptions and illustrative prices.

The menu prices do not alter the stay estimator. The planner’s optional breakfast is a separate invented package priced at £18 per guest per morning. Explain that distinction so a visitor does not infer an ordering or package-selection system that does not exist. Include a concise note that ingredients, allergens, dietary suitability, and actual food availability are not verified. There is no table reservation button, order action, or external restaurant message. A final link can invite the visitor to include a dining preference in the local stay draft.

The neighborhood.html page introduces the imagined Marlow Quarter. Build an original diagram using HTML and CSS: pale paper streets, a blue canal strip, a central Vesper marker, and four numbered destinations. Provide an accessible text description of the relative positions and identify the graphic as illustrative and not to scale. Do not use a real map tile, real address, or a navigation link that implies geographic accuracy. The numbered places are Paper Window, the Arc Rooms, Marlow Market, and Canal Steps.

Each place receives a substantial paragraph, a category, an imagined walking time, and a short suggestion about the kind of visit it invites. The page then offers a loose day narrative, moving from coffee to books, market, art, and a quiet stretch outside. This is a mood-based itinerary, not verified travel advice. Make the fictional setting clear near the top and near the map. If the page mentions real-world planning, it should simply remind the reader to confirm current local routes and access information for an actual trip.

## Local stay estimator

The planner is plan.html. Its introduction clearly states that no booking, payment, availability check, or external message occurs. On desktop, use a wider form column and a narrower sticky estimate panel. On mobile, place the compact estimate panel before the form so the selected room and current state are easy to understand, then let the form flow naturally below. The estimate must not remain sticky on a small screen. Use full-width readable controls, explicit labels, and enough space between date inputs.

The stay settings are arrival, departure, total guests, room identifier, and a breakfast boolean. Default to an arrival seven calendar days after the visitor’s local current day, a departure two days later, two guests, the Nook, and no breakfast. Calculate dates using integer UTC calendar-day numbers after validating the original YYYY-MM-DD string. This avoids daylight-saving changes producing fractional nights. Reject invalid calendar dates, past arrivals, same-day or reversed departures, and stays longer than thirty nights. Do not guess a corrected date or silently shift the visitor’s selection.

Guests must be an integer from one through six in the input range, even though the largest room holds four. This makes the capacity error meaningful and explicit. If the chosen room is too small, explain its maximum and ask the visitor to choose a larger room or reduce the guest count. Do not silently upgrade the room. The demo estimates one room at a time; it does not invent a multi-room booking system. Invalid states clear the old itemized total and disable draft review so a stale valid price cannot be mistaken for the current plan.

The room subtotal is nightly room rate multiplied by nights. If breakfast is selected, add £18 multiplied by guests and nights. Show the room name, guest count, room calculation, breakfast calculation or not-included state, and total. Format whole-pound amounts with the en-GB currency formatter. All calculations are fictional GBP examples. Do not describe the total as a real quote or imply that taxes, fees, inventory, or market rates have been checked. Keep that explanation adjacent to the estimate rather than hiding it in a footer.

Update the estimate on input, and provide an explicit Update estimate action with clear status feedback. Saving is separate: Save stay settings writes only the five non-personal planning fields to a namespaced local-storage key. On reload, validate the stored object through the same calculation function before restoring it. Expired or malformed settings should produce a clear message and fresh defaults. Storage access can fail; the estimator and draft must still work. A room query parameter from a room story may select that room while preserving valid saved dates and guests, even if the result then needs a capacity correction.

## Draft review, persistence, and interaction quality

The second planner section collects a name and optional notes. These personal details stay in the current page and are never included in saved stay settings. The name is required and must contain a non-space character. Clear custom validity on input so a visitor can recover after an invalid submission. Notes have a reasonable length limit and may contain access questions, dining preferences, or the kind of city day the visitor wants. Insert all user text through textContent or textarea.value, never through HTML interpolation.

Reviewing a valid draft opens a native modal dialog. The draft includes the fictional context, name, dates, nights, guest count, room and sleeping arrangement, room subtotal, breakfast calculation, total, notes, and a clear statement that nothing has been reserved or sent. The initial focus goes to Close, a safe action. Escape closes the dialog. Closing restores body scrolling and returns focus to the review action. The draft textarea is read-only but selectable, allowing manual copying when clipboard access is unavailable.

Prepare a real text Blob and a download link named vesper-stay-draft.txt. Revoke the previous object URL before replacing it and revoke it when the dialog closes. The Copy draft action should report success only after the clipboard promise resolves. If access fails, focus and select the text and explain manual copying. Do not claim that a download completed merely because the link was prepared. The displayed status should say that a text download is prepared and that nothing has been sent or reserved.

Reset removes the saved stay key, clears the current name and notes, restores fresh default dates, and returns focus to arrival. If local storage cannot be cleared, preserve the current plan and explain the failure rather than pretending the saved state disappeared. The planner should expose useful live status regions without announcing every keystroke in long prose. Keep branching responsibilities small: date validation and estimation are pure functions, while DOM rendering, persistence, and draft preparation have separate coherent functions.

## Responsive behavior and verification

At widths below 720 pixels, change the composition instead of shrinking the desktop site. Stack the hero note beneath the headline, shorten the image to an intentional portrait-like crop, turn the stay band into two columns plus a full-width action, and make room cards a single column. Alternate room features should all place their photographs before text on mobile. Room story specification bands become two-by-two. Dining and neighborhood spreads become sequential sections. Forms become one column and buttons remain at least 44 pixels tall.

There must be no horizontal page overflow at a 390-pixel viewport. Verify every route, not only the home page. Check the large Afterhours Suite title, long sleeping arrangements, the map caption, date controls, itemized estimate lines, modal actions, and footer links. Maintain one meaningful h1 per page and a logical heading sequence. All visible control text should remain at least 14 pixels, with body copy at 16 to 18 pixels and only secondary labels at 12 pixels. Focus outlines must be visible on both light and dark surfaces.

Motion should support the page without requiring a pause control. A short entrance animation may fade and translate the opening composition by about 14 pixels over roughly 650 milliseconds. Image hover can gently scale a room card over about 550 milliseconds. Button color changes can take around 180 milliseconds. There are no infinite animations, auto-advancing slides, or scroll-jacking. Respect prefers-reduced-motion by disabling animations and transitions and restoring ordinary scroll behavior.

Test date arithmetic across a daylight-saving boundary, leap-day validity, invalid dates, same-day and reversed dates, past arrivals, thirty-night limits, all three room rates, breakfast multiplication, each capacity boundary, and malformed room identifiers. Test the browser flow with an actual room selection, saved settings, reload, capacity error, valid correction, draft review, clipboard result, prepared text download, Escape dismissal, and reset. Record actual observed outcomes and any limitations. Finish with a deterministic build exporting buildVesper() and returning the assembled prompt, complete local assets, font license, credits, research notes, and all eight HTML pages.


## Reference interaction handler

```javascript
const rooms = [{"id":"nook","name":"The Nook","number":"01","line":"A little room. A whole city.","size":19,"capacity":2,"bed":"One queen bed","rate":145,"tone":"rust","summary":"A compact retreat with a deep window seat, warm timber, and just enough room to put the day down.","alt":"Original generated compact hotel room with a rust linen headboard, warm timber furniture and tall city window.","story":"The Nook is built around the moment you come back. Shoes below the bench, a book beside the bed, the street carrying on beyond the glass. A simple palette of rust linen, pale stone, and walnut lets the daylight set the mood.","detail":"The headboard wraps the sleeping area in a soft band of color. A small writing ledge takes the place of a large desk, leaving the center of the room open. Blackout curtains and individual reading lights are part of the imagined room specification.","fit":"Best for a solo city break or two people travelling light. The queen bed is the only sleeping surface; this concept does not include a cot or extra bed.","access":"The compact route around the bed may not suit every mobility need. Use the draft to record turning-space, transfer-side, or bathroom questions. No accessible room configuration is represented as confirmed."},{"id":"corner","name":"The Corner","number":"02","line":"Let the afternoon stay a while.","size":29,"capacity":3,"bed":"One king + one single daybed","rate":215,"tone":"ochre","summary":"Two directions of daylight, a chair worth staying in, and a generous daybed for a third guest.","alt":"Original generated corner hotel room with an ochre king bed, industrial windows and olive reading chair.","story":"The Corner turns towards the changing light. Tall windows bring the city into view, while an olive chair and a long daybed create a place to read without sitting on the bed. The room is imagined for days with a little more breathing space.","detail":"Ochre fabric sits against warm brick and dark timber. A small table can hold breakfast or a laptop, but the room does not ask either to become a full-time occupation. Linen curtains soften the edges of the architecture.","fit":"For two people who want more floor space, or three sharing the king bed and single daybed. The third guest is included in the fictional nightly room rate; no extra-person supplement is added by this demo.","access":"The wider floor plan suggests more room to move, but dimensions beyond the total floor area have not been verified. Record specific access requirements in the local draft rather than treating the illustration as a guarantee."},{"id":"suite","name":"The Afterhours Suite","number":"03","line":"Stay in. The city will wait.","size":46,"capacity":4,"bed":"One king + one double sofa bed","rate":320,"tone":"blue","summary":"A separate sitting area, warm pools of lamplight, and enough space for a slow start or a late conversation.","alt":"Original generated urban suite with walnut room partition, rust sitting area, travertine table and blue-hour city windows.","story":"The Afterhours Suite is less about spectacle than the luxury of a second room. A low partition separates sleeping and sitting, allowing one person to read while another rests. The city becomes a backdrop instead of a schedule.","detail":"A rust sofa anchors the sitting area. The coffee table is imagined in pale travertine, the reading lamp in cobalt, and the partition in open-grain walnut. At dusk, practical lamps make a series of smaller rooms within the room.","fit":"For up to four guests using a king bed and double sofa bed. The sofa bed shares the sitting area, so privacy differs from a two-bedroom suite. The estimator treats this as one room with one nightly rate.","access":"This is a split-zone concept, not a verified accessible suite. Ask about thresholds, bathroom fittings, bed heights, and the route from the lift in your draft. No physical hotel or room inspection is implied."}];
function isoDay(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}-${String(date.getDate()).padStart(2, '0')}`;
}
function dayNumber(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const parsed = Date.parse(`${value}T00:00:00Z`);
  if (!Number.isFinite(parsed) || new Date(parsed).toISOString().slice(0,10) !== value) return NaN;
  return parsed / 86400000;
}
function defaultStay(today = isoDay()) {
  const start = dayNumber(today) + 7;
  const date = day => new Date(day * 86400000).toISOString().slice(0,10);
  return {arrival:date(start),departure:date(start+2),guests:2,room:'nook',breakfast:false};
}
function estimateStay(stay, rooms, today = isoDay()) {
  const room = rooms.find(item=>item.id===stay.room);
  if (!room) return {error:'Choose one of the three room concepts.'};
  const arrival = dayNumber(stay.arrival);
  const departure = dayNumber(stay.departure);
  if (!Number.isFinite(arrival) || !Number.isFinite(departure)) return {error:'Enter a valid arrival and departure date.'};
  if (arrival < dayNumber(today)) return {error:'Choose an arrival date today or later.'};
  const nights = departure-arrival;
  if (nights < 1) return {error:'Departure must be at least one day after arrival.'};
  if (nights > 30) return {error:'This demo estimates stays of up to 30 nights.'};
  const guests = Number(stay.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 6) return {error:'Choose a whole number of guests from 1 to 6.'};
  if (guests > room.capacity) return {error:`${room.name} holds up to ${room.capacity} guests. Choose a larger room or reduce the guest count.`};
  const roomTotal = room.rate * nights;
  const breakfastTotal = stay.breakfast === true ? guests * nights * 18 : 0;
  return {room,nights,guests,roomTotal,breakfastTotal,total:roomTotal+breakfastTotal};
}

(function () {
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? 'Close −' : 'Menu +';
      nav.classList.toggle('open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.textContent = 'Menu +';
        menu.focus();
      }
    });
  }
  const form = document.getElementById('stay-form');
  if (!form) return;
  const key = 'vesper-stay-v1';
  const fields = Object.fromEntries(['arrival','departure','guests','room','breakfast'].map(id=>[id,document.getElementById(id)]));
  const saveStatus = document.getElementById('save-status');
  const draftStatus = document.getElementById('draft-status');
  const review = document.getElementById('review-draft');
  const dialog = document.getElementById('draft-dialog');
  const name = document.getElementById('draft-name');
  let downloadUrl = '';
  const money = value => new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:0}).format(value);
  function readStay() {
    return {arrival:fields.arrival.value,departure:fields.departure.value,guests:Number(fields.guests.value),room:fields.room.value,breakfast:fields.breakfast.checked};
  }
  function fillStay(stay) {
    fields.arrival.value = typeof stay.arrival === 'string' ? stay.arrival : '';
    fields.departure.value = typeof stay.departure === 'string' ? stay.departure : '';
    fields.guests.value = String(stay.guests);
    fields.room.value = stay.room;
    fields.breakfast.checked = stay.breakfast === true;
  }
  function line(label, amount, total = false) {
    const row = document.createElement('div');
    row.className = total ? 'estimate-line estimate-total' : 'estimate-line';
    const labelNode = document.createElement('span');
    const valueNode = document.createElement('span');
    labelNode.textContent = label;
    valueNode.textContent = amount;
    row.append(labelNode,valueNode);
    return row;
  }
  function renderEstimate() {
    const stay = readStay();
    const result = estimateStay(stay,rooms);
    const room = rooms.find(item=>item.id===stay.room) || rooms[0];
    const image = document.getElementById('estimate-image');
    image.src = `assets/${room.id}-720.webp`;
    image.alt = room.alt;
    const error = document.getElementById('estimate-error');
    error.hidden = !result.error;
    error.textContent = result.error || '';
    const lines = document.getElementById('estimate-lines');
    lines.replaceChildren();
    review.disabled = Boolean(result.error);
    if (result.error) return result;
    lines.append(
      line(result.room.name,`${result.guests} ${result.guests===1?'guest':'guests'}`),
      line(`${result.nights} ${result.nights===1?'night':'nights'} × ${money(result.room.rate)}`,money(result.roomTotal)),
      line(stay.breakfast ? `Breakfast · ${result.guests} × ${result.nights} × £18` : 'Breakfast · not included',money(result.breakfastTotal)),
      line('Illustrative total',money(result.total),true),
    );
    return result;
  }
  function restore() {
    let stay = defaultStay();
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && typeof saved === 'object' && !estimateStay(saved,rooms).error) {
          stay = saved;
          saveStatus.textContent = 'Saved stay settings restored from this device.';
        } else {
          saveStatus.textContent = 'Saved settings were expired or invalid. A fresh plan is shown.';
        }
      }
    } catch {
      saveStatus.textContent = 'Saved settings could not be read. You can still estimate and prepare a draft.';
    }
    const roomQuery = new URLSearchParams(location.search).get('room');
    if (rooms.some(item=>item.id===roomQuery)) {
      stay.room = roomQuery;
      saveStatus.textContent = 'The linked room is selected. Saved dates and guests are kept when valid.';
    }
    fillStay(stay);
    fields.arrival.min = isoDay();
    fields.departure.min = isoDay();
    renderEstimate();
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const result = renderEstimate();
    saveStatus.textContent = result.error ? 'Update the highlighted stay details to continue.' : 'Estimate updated. Changes are not saved until you choose Save stay settings.';
  });
  form.addEventListener('input', () => {
    renderEstimate();
    saveStatus.textContent = 'Stay settings changed. Choose Save stay settings to remember them.';
    draftStatus.textContent = '';
  });
  document.getElementById('save-stay').addEventListener('click', () => {
    const result = renderEstimate();
    if (result.error) {
      saveStatus.textContent = 'Fix the stay details before saving.';
      return;
    }
    try {
      localStorage.setItem(key,JSON.stringify(readStay()));
      saveStatus.textContent = 'Stay settings saved on this device. Name and notes were not saved.';
    } catch {
      saveStatus.textContent = 'This browser could not save the settings. Your current estimate still works.';
    }
  });
  document.getElementById('reset-stay').addEventListener('click', () => {
    try {
      localStorage.removeItem(key);
    } catch {
      saveStatus.textContent = 'Saved settings could not be removed. The current plan has been kept.';
      return;
    }
    fillStay(defaultStay());
    name.value = '';
    name.setCustomValidity('');
    document.getElementById('draft-notes').value = '';
    renderEstimate();
    saveStatus.textContent = 'Saved settings removed. A fresh two-night plan is shown.';
    draftStatus.textContent = '';
    fields.arrival.focus();
  });
  name.addEventListener('input',()=>name.setCustomValidity(''));
  function makeDraft(stay,result) {
    const notes = document.getElementById('draft-notes').value.trim();
    return [
      'VESPER — LOCAL STAY DRAFT',
      'Fictional hotel concept. Not a reservation, quote, availability check, or message.',
      '',
      `Prepared for: ${name.value.trim()}`,
      'Place: Vesper, imagined Marlow Quarter',
      `Arrival: ${stay.arrival}`,
      `Departure: ${stay.departure}`,
      `Nights: ${result.nights}`,
      `Guests, including children: ${result.guests}`,
      `Room: ${result.room.name} (${result.room.bed}; capacity ${result.room.capacity})`,
      `Room estimate: ${result.nights} × ${money(result.room.rate)} = ${money(result.roomTotal)}`,
      `Breakfast: ${stay.breakfast ? `${result.guests} guests × ${result.nights} mornings × £18 = ${money(result.breakfastTotal)}` : 'Not included'}`,
      `Illustrative total: ${money(result.total)}`,
      '',
      'Preferences and questions:',
      notes || 'None added.',
      '',
      'All rooms, places and amounts are fictional. No taxes, fees, live inventory or payment services are connected. This document is a local planning example only. No hotel has been contacted and nothing has been reserved.',
    ].join('\n');
  }
  document.getElementById('draft-form').addEventListener('submit', event => {
    event.preventDefault();
    const result = renderEstimate();
    if (result.error) {
      draftStatus.textContent = 'Fix the stay details before preparing a draft.';
      return;
    }
    if (!name.value.trim()) {
      name.setCustomValidity('Enter a name containing at least one non-space character.');
      name.reportValidity();
      return;
    }
    const text = makeDraft(readStay(),result);
    document.getElementById('draft-output').value = text;
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    downloadUrl = URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
    document.getElementById('download-draft').href = downloadUrl;
    document.getElementById('copy-status').textContent = 'Text download prepared. Nothing has been sent or reserved.';
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    document.getElementById('close-draft').focus();
  });
  function closeDraft() { dialog.close(); }
  document.getElementById('close-draft').addEventListener('click',closeDraft);
  document.getElementById('edit-draft').addEventListener('click',closeDraft);
  dialog.addEventListener('close',()=>{
    document.body.style.overflow = '';
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    downloadUrl = '';
    document.getElementById('download-draft').removeAttribute('href');
    review.focus();
  });
  document.getElementById('copy-draft').addEventListener('click',async()=>{
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(document.getElementById('draft-output').value);
      status.textContent = 'Draft copied. Nothing has been sent or reserved.';
    } catch {
      document.getElementById('draft-output').focus();
      document.getElementById('draft-output').select();
      status.textContent = 'Clipboard access was unavailable. The draft is selected for manual copying.';
    }
  });
  restore();
})();

```

## Exact style implementation

```css
@font-face{font-family:Geist;src:url('assets/geist-variable.woff2') format('woff2');font-display:swap;font-weight:100 900}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f2eee5;color:#292923;font:16px/1.6 Geist,Arial,sans-serif}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit}button,a,input,select,textarea{touch-action:manipulation}button{cursor:pointer}img{display:block;width:100%;object-fit:cover}h1,h2,h3,p{margin:0}h1,h2,h3{font-weight:450;line-height:1.04}h1,h2,.serif{font-family:Georgia,'Times New Roman',serif;font-weight:400}h1{font-size:clamp(64px,7vw,112px);letter-spacing:-.065em}h2{font-size:clamp(38px,4.2vw,65px);letter-spacing:-.045em}h3{font-size:25px;letter-spacing:-.03em}p+p{margin-top:20px}p{max-width:65ch}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,summary:focus-visible{outline:3px solid #204ec8;outline-offset:5px}button:disabled{cursor:not-allowed;opacity:.55}[hidden]{display:none!important}.skip{position:fixed;top:-80px;left:20px;background:#fff;padding:12px;z-index:100}.skip:focus{top:10px}.notice{background:#793e2c;color:#fff8ee;text-align:center;padding:8px 20px;font-size:14px}.header{height:88px;display:flex;align-items:center;justify-content:space-between;padding:0 4.4%;border-bottom:1px solid #bbb6aa;gap:24px}.brand{font-family:Georgia,serif;font-size:43px;letter-spacing:-.07em;line-height:1}.brand i{font-size:20px;vertical-align:top;padding-left:3px}.header nav{display:flex;gap:28px;align-items:center}.header nav a{font-size:14px}.header nav a[aria-current=page]{text-decoration:underline;text-underline-offset:7px}.button{display:inline-flex;justify-content:center;align-items:center;min-height:48px;padding:12px 24px;background:#2047b1;color:white;border:1px solid #2047b1;font-size:14px;line-height:1.4;border-radius:0;gap:20px;transition:background .18s,color .18s}.button:hover{background:#153480}.button.secondary{background:transparent;color:inherit;border-color:currentColor}.button.secondary:hover{background:#e4d8c7;color:#292923}.text-link{display:inline-block;border-bottom:1px solid;padding-bottom:4px;font-size:14px}.eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;line-height:1.5;display:block}.menu-button{display:none}.hero{padding:34px 4.4% 0}.hero-top{display:flex;justify-content:space-between;align-items:end;padding-bottom:32px;gap:40px}.hero-top h1{font-size:clamp(68px,8vw,124px);line-height:.96;max-width:850px}.hero-side{max-width:235px;padding-bottom:10px}.hero-side p{font-size:16px;margin:16px 0}.hero-image{position:relative}.hero-image img{height:min(58vw,620px)}.hero-stamp{position:absolute;right:30px;top:28px;background:#e9d7ad;color:#533323;width:118px;height:118px;border-radius:50%;display:grid;place-content:center;text-align:center;font-family:Georgia,serif;font-size:22px;line-height:1.1;transform:rotate(9deg)}.hero-caption{display:flex;justify-content:space-between;border-bottom:1px solid #bbb6aa;padding:14px 0;gap:20px;font-size:12px}.stay-strip{margin:-30px 4% 0;position:relative;background:#f9f6ef;display:grid;grid-template-columns:1fr 1fr 1fr auto;border:1px solid #c2bbaa;box-shadow:0 10px 30px #3023190c}.stay-strip>div{padding:22px 26px;border-right:1px solid #c2bbaa}.stay-strip strong{display:block;font-size:19px;font-weight:450}.stay-strip .button{margin:10px}.intro{display:grid;grid-template-columns:1fr 2fr;padding:100px 8%;gap:50px}.intro h2{max-width:780px}.intro p{margin-top:30px;font-size:18px}.section{padding:65px 4.4% 90px}.section-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:35px}.room-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.room-card .photo{overflow:hidden}.room-card img{aspect-ratio:4/3;transition:transform .55s}.room-card a:hover img{transform:scale(1.035)}.room-card h3{font-family:Georgia,serif;font-size:34px;margin:22px 0 12px}.room-meta{display:flex;justify-content:space-between;gap:12px;font-size:14px;border-top:1px solid #aaa397;border-bottom:1px solid #aaa397;padding:12px 0;margin:18px 0}.room-card p{font-size:16px;min-height:78px}.room-card .text-link{margin-top:10px}.dining-band{display:grid;grid-template-columns:1.1fr 1fr;background:#703b2c;color:#fff5e5}.dining-band img{height:100%;min-height:590px}.dining-copy{padding:70px 13%;display:flex;flex-direction:column;justify-content:center;align-items:start}.dining-copy h2{margin:22px 0 28px;font-size:clamp(48px,5vw,75px)}.dining-copy .text-link{margin-top:30px}.neighborhood-tease{display:grid;grid-template-columns:1fr 1fr;gap:8%;padding:100px 8%;align-items:center}.neighborhood-tease h2{margin:20px 0 25px}.map{aspect-ratio:1.12;background:#e6ddc9;position:relative;overflow:hidden;border:1px solid #baae96}.map:before,.map:after{content:'';position:absolute;background:#f6f0e4;transform:rotate(-17deg);width:145%;height:24px;left:-15%;top:45%;border-top:1px solid #b9a88f;border-bottom:1px solid #b9a88f}.map:after{transform:rotate(64deg);top:35%}.river{position:absolute;right:10%;height:140%;width:45px;background:#99b7c0;transform:rotate(20deg);top:-20%}.map .pin{position:absolute;background:#f9f4e9;border:1px solid #6c4f37;padding:5px 9px;font-size:14px;z-index:2;transform:translate(-50%,-50%)}.map .hotel-pin{left:48%;top:44%;background:#2047b1;color:#fff;border:0;font-size:18px}.map-label{position:absolute;left:16px;bottom:15px;font-size:12px;z-index:3}.closing{padding:70px 8%;background:#d0d2be;display:flex;justify-content:space-between;align-items:center;gap:50px}.closing h2{max-width:720px}.closing p{max-width:320px;margin-bottom:22px}.footer{padding:48px 4.4%;display:grid;grid-template-columns:1fr 1.4fr 1fr;gap:45px;border-top:1px solid #aaa397;font-size:14px}.footer p{max-width:500px}.footer nav{display:flex;flex-direction:column;align-items:start;gap:8px}.page-head{padding:65px 8% 60px;text-align:center}.page-head .eyebrow{margin-bottom:22px}.page-head h1{max-width:1000px;margin:auto}.page-head p{margin:28px auto 0;font-size:18px;max-width:700px}.room-feature{display:grid;grid-template-columns:1.6fr 1fr;margin:0 4.4% 80px;border-top:1px solid #b5ac9d;border-bottom:1px solid #b5ac9d}.room-feature:nth-child(even){grid-template-columns:1fr 1.6fr}.room-feature:nth-child(even) .feature-photo{order:2}.feature-photo img{height:100%;min-height:460px}.feature-copy{padding:45px 45px;display:flex;flex-direction:column;justify-content:center;align-items:start}.feature-copy h2{margin:18px 0 22px}.feature-copy p{margin-bottom:10px}.feature-copy .room-meta{width:100%}.feature-copy .button{margin-top:16px}.amenities{background:#e8dfcc;padding:60px 8%}.amenities h2{font-size:42px;margin-bottom:30px}.amenity-list{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;list-style:none;padding:25px 0;margin:0;border-top:1px solid #a99b85}.amenity-list li{font-size:16px}.room-hero{display:grid;grid-template-columns:.8fr 1.2fr;min-height:620px}.room-hero-copy{padding:65px 12% 50px;display:flex;flex-direction:column;align-items:start;justify-content:center}.room-hero h1{font-size:clamp(60px,6vw,88px);margin:20px 0 25px}.room-hero-copy p{font-size:18px}.room-hero-copy .button{margin-top:28px}.room-hero img{height:100%;min-height:620px}.spec-band{display:grid;grid-template-columns:repeat(4,1fr);padding:26px 8%;background:#e7ddc9;gap:20px}.spec-band strong{display:block;font-size:19px;font-weight:450}.story{padding:90px 12%;display:grid;grid-template-columns:1fr 1.3fr;gap:12%}.story p{font-size:18px}.detail-band{display:grid;grid-template-columns:1fr 1fr;margin:0 8% 80px;background:#e9dfcd}.detail-crop{overflow:hidden;min-height:450px}.detail-crop img{height:100%;transform:scale(1.45);object-position:70% 60%}.detail-copy{padding:50px;display:flex;flex-direction:column;justify-content:center}.detail-copy h2{font-size:42px;margin:18px 0 25px}.details-section{padding:0 12% 85px}.details-section h2{font-size:42px;margin-bottom:25px}details{border-top:1px solid #aaa397;padding:18px 0}details:last-child{border-bottom:1px solid #aaa397}summary{font-size:18px;cursor:pointer}details p{padding:20px 25px 5px;font-size:16px}.restaurant-hero{display:grid;grid-template-columns:1fr 1fr;background:#743b2a;color:#fff5e7}.restaurant-hero img{height:680px}.restaurant-hero>div{padding:65px 12%;display:flex;flex-direction:column;justify-content:center}.restaurant-hero h1{font-size:clamp(68px,8vw,120px);margin:20px 0 30px}.restaurant-hero p{font-size:18px}.menu-layout{display:grid;grid-template-columns:1fr 1fr;gap:10%;padding:85px 10%}.menu-layout h2{margin-bottom:25px}.menu-row{display:flex;justify-content:space-between;gap:20px;border-top:1px solid #aaa397;padding:19px 0}.menu-row strong{font-weight:500}.menu-row p{font-size:14px;margin-top:5px}.menu-note{padding:25px;border:1px solid #a89b88;margin-top:30px;font-size:14px}.guide-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 7%;padding:20px 8% 70px}.place{border-top:1px solid #aaa397;padding:32px 0}.place h2{font-size:39px;margin:16px 0}.place p{font-size:17px}.place .eyebrow:last-child{margin-top:22px}.guide-map{margin:0 8% 65px;display:grid;grid-template-columns:1.2fr 1fr;gap:7%;align-items:center}.guide-map h2{margin:20px 0}.planner{display:grid;grid-template-columns:1.35fr 1fr;gap:6%;padding:10px 8% 90px;align-items:start}.planner-form{border-top:1px solid #aaa397;padding-top:30px}.planner-form h2{font-size:36px;margin-bottom:25px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.form-grid .wide{grid-column:1/-1}label{display:flex;flex-direction:column;gap:7px;font-size:14px}input,select,textarea{background:#fcfaf5;border:1px solid #aaa397;border-radius:0;min-height:49px;padding:11px 12px;width:100%;min-width:0;color:#292923;font-size:16px}textarea{min-height:120px;resize:vertical}.check{display:flex;flex-direction:row;align-items:start;gap:12px;margin:25px 0}.check input{width:20px;min-height:20px;flex:none;margin-top:3px;accent-color:#2047b1}.check small{font-size:14px;color:#5a554b}.estimate{background:#e9dfcd;border:1px solid #b7a88d;position:sticky;top:25px}.estimate img{height:220px}.estimate-content{padding:30px}.estimate h2{font-size:35px;margin-bottom:20px}.estimate-line{display:flex;justify-content:space-between;gap:15px;border-bottom:1px solid #b9ab94;padding:12px 0;font-size:16px}.estimate-total{font-size:27px;font-family:Georgia,serif}.estimate-note{font-size:14px;margin-top:22px}.error{background:#fff2dc;border-left:4px solid #8b3022;padding:18px;color:#713321;margin:20px 0;font-size:16px}.status{font-size:14px;margin-top:16px;min-height:24px}.draft-section{margin-top:42px;border-top:1px solid #aaa397;padding-top:30px}.draft-section p{margin-bottom:24px}.draft-section .button{margin-top:22px}.planner-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}.dialog{border:1px solid #8d806b;background:#f9f5eb;color:#292923;padding:35px;width:min(700px,calc(100% - 36px));max-height:90vh}.dialog::backdrop{background:#20160ec9}.dialog-top{display:flex;justify-content:space-between;gap:20px;align-items:start}.dialog h2{font-size:38px}.dialog textarea{height:330px;margin-top:25px;font-size:15px;line-height:1.7}.dialog p{font-size:14px;margin-top:16px}.dialog .button{min-height:44px}.dialog-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.reveal{animation:enter .65s ease both}@keyframes enter{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@media(min-width:1600px){body{max-width:1800px;margin:auto}}@media(max-width:950px){.header{padding:0 5%;height:80px}.header nav{gap:18px}.hero-top h1{font-size:80px}.hero-side{max-width:200px}.room-grid{gap:18px}.room-card h3{font-size:28px}.room-card p{min-height:105px}.room-meta{flex-direction:column;gap:4px}.dining-copy{padding:45px 10%}.dining-band img{min-height:530px}.stay-strip>div{padding:18px}.stay-strip strong{font-size:16px}.room-hero-copy{padding:45px 10%}.room-hero h1{font-size:65px}.story{padding:70px 8%;gap:7%}.feature-copy{padding:30px}.feature-copy h2{font-size:44px}.feature-photo img{min-height:490px}.detail-copy{padding:35px}.planner{padding:10px 5% 70px;gap:4%}.estimate-content{padding:22px}.restaurant-hero img{height:620px}.footer{gap:25px}}
@media(max-width:720px){h1{font-size:62px}h2{font-size:41px}.notice{font-size:12px;padding:8px 14px}.header{height:76px;position:relative;z-index:10;background:#f2eee5}.brand{font-size:38px}.menu-button{display:block;background:transparent;border:1px solid #827461;padding:9px 15px;min-height:44px;font-size:14px}.header nav{display:none;position:absolute;left:0;right:0;top:75px;background:#f2eee5;border-bottom:1px solid #9a8c78;padding:25px 5%;flex-direction:column;align-items:stretch;gap:22px}.header nav.open{display:flex}.header nav a{font-size:16px}.hero{padding:32px 5% 0}.hero-top{display:block;padding-bottom:28px}.hero-top h1{font-size:clamp(58px,16vw,86px);letter-spacing:-.065em}.hero-side{max-width:none;padding:25px 0 0;display:grid;grid-template-columns:1fr auto;align-items:end;gap:20px}.hero-side .eyebrow{grid-column:1/-1}.hero-side p{margin:0;max-width:220px;font-size:16px}.hero-side .text-link{max-width:100px}.hero-image img{height:430px;object-position:60% center}.hero-stamp{width:87px;height:87px;font-size:18px;top:15px;right:15px}.stay-strip{margin:0;grid-template-columns:1fr 1fr;box-shadow:none}.stay-strip>div{padding:15px;border-bottom:1px solid #c2bbaa}.stay-strip>div:nth-child(3){grid-column:1/-1;border-right:0}.stay-strip .button{grid-column:1/-1;margin:14px}.hero-caption{font-size:12px;display:block}.hero-caption span{display:block}.intro{padding:65px 6%;display:block}.intro h2{margin-top:20px}.intro p{font-size:17px;margin-top:24px}.section{padding:35px 5% 60px}.section-head{display:block;margin-bottom:25px}.section-head .text-link{margin-top:20px}.room-grid{grid-template-columns:1fr;gap:40px}.room-card h3{font-size:34px}.room-card p{min-height:0}.room-meta{flex-direction:row;font-size:14px}.dining-band{grid-template-columns:1fr}.dining-band img{min-height:0;height:390px}.dining-copy{padding:42px 7% 50px}.dining-copy h2{font-size:53px}.neighborhood-tease{padding:60px 6%;grid-template-columns:1fr;gap:35px}.neighborhood-tease .map{order:2}.closing{display:block;padding:50px 6%}.closing>div{margin-top:28px}.footer{padding:40px 6%;grid-template-columns:1fr;gap:26px}.footer nav{flex-direction:row;flex-wrap:wrap;gap:20px}.page-head{padding:45px 6%}.page-head h1{font-size:58px}.page-head p{font-size:17px}.room-feature,.room-feature:nth-child(even){display:flex;flex-direction:column;margin:0 5% 45px}.room-feature:nth-child(even) .feature-photo{order:0}.feature-photo img{height:290px;min-height:0}.feature-copy{padding:28px 8px}.feature-copy h2{font-size:43px}.amenities{padding:42px 6%}.amenity-list{grid-template-columns:1fr 1fr;gap:22px}.amenities h2{font-size:36px}.room-hero{display:flex;flex-direction:column;min-height:0}.room-hero-copy{padding:40px 6%}.room-hero h1{font-size:64px}.room-hero img{min-height:0;height:390px}.spec-band{grid-template-columns:1fr 1fr;padding:25px 6%;gap:24px}.spec-band strong{font-size:17px}.story{padding:55px 6%;display:block}.story h2{margin-bottom:25px}.story p{font-size:17px}.detail-band{grid-template-columns:1fr;margin:0 5% 50px}.detail-crop{min-height:0;height:300px}.detail-copy{padding:30px 24px}.detail-copy h2{font-size:37px}.details-section{padding:0 6% 55px}.details-section h2{font-size:35px}.restaurant-hero{display:flex;flex-direction:column}.restaurant-hero img{height:370px}.restaurant-hero>div{padding:40px 7%}.restaurant-hero h1{font-size:83px}.menu-layout{grid-template-columns:1fr;padding:50px 6%;gap:45px}.menu-layout h2{font-size:40px}.guide-grid{grid-template-columns:1fr;padding:10px 6% 45px}.place h2{font-size:37px}.guide-map{grid-template-columns:1fr;margin:0 6% 45px;gap:30px}.guide-map .map{order:2}.planner{grid-template-columns:1fr;padding:0 6% 55px;gap:35px}.estimate{position:static;grid-row:1}.estimate img{height:190px}.estimate-content{padding:24px}.form-grid{grid-template-columns:1fr}.form-grid .wide{grid-column:auto}.planner-form h2{font-size:34px}.dialog{padding:22px}.dialog h2{font-size:31px}.dialog-top{gap:10px}.dialog-top .button{padding:10px 12px}.dialog textarea{height:290px}.dialog-actions{display:grid;grid-template-columns:1fr}.map .pin{font-size:14px}.hero-caption{line-height:1.6}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation:none!important;transition:none!important}}

```
