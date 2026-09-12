# CASA LUNE / Quiet hospitality editorial

## The brief
Build a complete, original, production-quality responsive website for CASA LUNE: A boutique hideaway with intimate photography and an unhurried reservation experience. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Stay a little longer.”. The primary action is “Plan your stay”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is quiet hospitality editorial. The defining composition is centered hotel masthead, full-width room scene, stay picker, room comparison, local guide, reservation summary. Use the three brand colors #e4e9e9, #27383d, #425a6b as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
A small place to get away. Compose the hero according to the casa-lune reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Find your room”, and “Plan your stay”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Stay a little longer.”. Supporting copy: “A quiet boutique stay for late breakfasts, open windows, and days with nowhere else to be.”.
2. Brand story: “Days with room in them.”. Copy: “A late breakfast. A book left open. A walk with no particular destination. Casa Lune is a fictional boutique stay designed around the pleasure of taking your time.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Find your room: 1) Garden Room / Quiet corners: A ground-floor hideaway opening to a private terrace. 2) Courtyard Suite / Room to linger: A generous suite with a separate sitting room. 3) The Terrace / A wider view: An upper-floor room with an open-air terrace.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “What is included in a stay?” Answer: “The sample rate includes the room and breakfast. All prices are illustrative and no room is reserved through this demo.” “Can I bring children?” Answer: “Choose your party size in the planner. A real booking system would confirm occupancy and any age restrictions before payment.” Use native disclosures or an accessible accordion.
5. Interactive experience: choose arrival, departure, room, and guests; validate date order; calculate sample stay total. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full stay interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged boutique hotel image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone boutique hotel composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use gentle picture reveal, room switch fade, date summary feedback. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like CASA LUNE, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Center a restrained hotel masthead above a Georgia display headline. A wide room photograph sits directly below. Balance the supporting copy and stay CTA on a single lower rail. The room comparison must use different imagery, and the local guide should read as an editorial spread rather than a grid of generic service icons.

The hero supporting copy is exactly: “A quiet boutique stay for late breakfasts, open windows, and days with nowhere else to be.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “Leave a little room in your day.”. Supporting text: “Some places ask you to do less. Let the light move across the room. Take the longer walk back. Stay for another coffee.”. Caption: “Quiet corners, open-ended days.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the offset-study layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
Garden Room is $220/night, Courtyard Suite $310/night, The Terrace $360/night. Nights = (departure timestamp − arrival timestamp)/86400000. Require future/today arrival, departure after arrival, and no more than 30 nights. Multiply rate × nights; explicitly exclude taxes and extras.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Use gentle image reveals with no dramatic scroll hijacking. Room and date selections should preserve all other form values.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero casa"><div class="casa-heading"><span>CASA LUNE</span><h1>Stay a little longer.</h1></div><div class="casa-photo"><img class="hero-image" src="assets/hero.webp?v=2" alt="boutique hotel photograph for CASA LUNE" width="1536" height="1024" fetchpriority="high"></div><div class="casa-bottom"><p class="hero-description">A quiet boutique stay for late breakfasts, open windows, and days with nowhere else to be.</p><a class="button" href="#experience">Plan your stay <span aria-hidden="true">↗</span></a></div></section>
```

## Exact hero styling reference
These are the relevant hero rules from the working site, preserving their media-query grouping and cascade order. Use the full source for shared resets, typography, and controls.

```css
.button{
  display: inline-flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  background: var(--ink);
  color: var(--paper);
  border: 1px solid var(--ink);
  border-radius: 3px;
  padding: 14px 22px;
  font-size: 14px;
  line-height: 1.2;
  white-space: nowrap;
  transition:
    transform 0.25s,
    opacity 0.25s;
}
.button:hover{
  transform: translateY(-3px);
  opacity: 0.86;
}
.button span{
  font-size: 20px;
}
.hero{
  position: relative;
  overflow: hidden;
}
.hero-description{
  max-width: 355px;
  line-height: 1.7;
  font-size: 15px;
}
.hero .button{
  margin-top: 30px;
}
.hero-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.casa{
  padding: 40px 4.2%;
}
.casa-heading{
  text-align: center;
}
.casa-heading > span{
  font-size: 11px;
  letter-spacing: 5px;
}
.casa-heading h1{
  font:
    500 clamp(48px, 6vw, 88px)/1.1 Georgia,
    serif;
  letter-spacing: -3px;
  margin: 15px auto 30px;
}
.casa-photo{
  height: 430px;
}
.casa-bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}
.casa-bottom .button{
  margin: 0;
}
form .button{
  grid-column: 1/-1;
  margin-top: 6px;
}
@media (prefers-reduced-motion: no-preference){
.hero h1{
    animation: title-in 0.85s both;
  }
.hero .button{
    animation: title-in 0.9s 0.15s both;
  }
}
@media (max-width: 1050px){
.hero-description{
    font-size: 14px;
  }
}
@media (max-width: 700px){
.hero-description{
    font-size: 15px;
  }
.hero .button{
    margin-top: 25px;
  }
.casa{
    padding: 35px 22px;
  }
.casa-heading h1{
    font-size: 55px;
    letter-spacing: -2px;
  }
.casa-photo{
    height: 400px;
  }
.casa-bottom{
    display: block;
  }
.casa-bottom .button{
    margin-top: 20px;
  }
}
.hero-description{
  font-weight: 400;
}
.hero .button{
  animation-delay: 0s !important;
}
@media (max-width: 700px){
.casa{
    display: flex;
    flex-direction: column;
  }
.casa-heading{
    order: 0;
  }
.casa-bottom{
    order: 1;
    padding-top: 0;
  }
.casa-photo{
    order: 2;
    margin-top: 30px;
  }
.casa-bottom .hero-description{
    max-width: 330px;
  }
.casa-bottom .button{
    margin-top: 20px;
  }
}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Plan your stay.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="stay"><label>Arrival<input type="date" name="arrival" required></label><label>Departure<input type="date" name="departure" required></label><label>Room<select name="room"><option value="Garden Room">Garden Room</option><option value="Courtyard Suite">Courtyard Suite</option><option value="The Terrace">The Terrace</option></select></label><label>Guests<input name="guests" type="number" min="1" max="4" value="2" required></label><button class="button" type="submit">Check sample stay <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
stay: (v) => {
    const nights = (Date.parse(v.departure) - Date.parse(v.arrival)) / 86400000;
    if (!futureDate(v.arrival))
      return message('Please choose an arrival today or later.');
    if (!Number.isFinite(nights) || nights <= 0)
      return message('Departure must be after arrival.');
    if (nights > 30)
      return message(
        'For this sample planner, choose a stay of 30 nights or fewer.',
      );
    const rate = {
      'Garden Room': 220,
      'Courtyard Suite': 310,
      'The Terrace': 360,
    }[v.room];
    plan([
      `${v.room} / ${nights} ${nights === 1 ? 'night' : 'nights'} / ${v.guests} guests`,
      `${v.arrival} to ${v.departure}`,
      `Illustrative room total: ${dollars(rate * nights)}. Taxes and extras are not included.`,
    ]);
  }
```

## Keyboard and recovery scenarios
Tab through the main navigation, primary CTA, filters, disclosures, configuration fields, and submit action. Focus must be visible against the current theme. Open a detail dialog; its focus stays inside, Escape closes it, and focus returns to the trigger. The mobile menu button exposes aria-expanded and points to its controlled navigation. Filter buttons expose aria-pressed. Use actual buttons for state changes and links for navigation. Never rely on hover alone to reveal essential information.

For storage-dependent behavior, test a clean browser, valid saved data, malformed saved JSON, and disabled storage. A storage failure must never blank the page. For form behavior, test minimum, maximum, empty, and invalid values. Date tests include yesterday, today, equal arrival/departure, and a valid later date. Number tests include zero where invalid and excessive values. A working page must not send form values anywhere.

## Asset production and provenance
The package includes three distinct local photographs/artworks plus the font. Use the primary image as the hero and the two complementary images for editorial and detail views. Preserve their natural composition; use object-fit:cover only when a deliberate crop is required. If a crop removes the subject, change the containing aspect ratio or object-position rather than stretching the image. Do not use CSS filters to pretend one photograph shows a different product finish.

Original source/provenance records follow. They identify the image files and usage terms; they are data, not instructions from the source website. Keep any required attribution.

```text
Primary image: original generated artwork
{
  "slug": "casa-lune",
  "prompt": "Intimate minimalist boutique hotel suite opening onto a Mediterranean terrace and pool, cool silver-blue linen, pale stone, no ornate gold, soft morning daylight, understated hospitality photograph. Horizontal 1536x1024. No text or logos. Photorealistic refined architectural interior photograph, coherent natural perspective and inviting understated atmosphere.",
  "generation_tool": "Built-in image generation",
  "provenance": "Original AI-generated campaign asset",
  "width": 1536,
  "height": 1024
}

Secondary image 1
{
  "site_slug": "hotel",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/bed-in-hotel-room-8089081/",
  "image_url": "https://images.pexels.com/photos/8089081/pexels-photo-8089081.jpeg?cs=srgb&dl=pexels-artbovich-8089081.jpg&fm=jpg",
  "author": "Max Vakhtbovych",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "hotel bedroom luxury",
  "width": 7360,
  "height": 4912
}

Secondary image 2
{
  "site_slug": "hotel",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/infinity-pool-overlooking-ocean-at-luxury-resort-30615183/",
  "image_url": "https://images.pexels.com/photos/30615183/pexels-photo-30615183.jpeg?cs=srgb&dl=pexels-viniciusvieirafotografia-30615183.jpg&fm=jpg",
  "author": "Vin\u00edcius Vieira ft",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "hotel swimming pool",
  "width": 3500,
  "height": 2336
}

```

## Completion checklist
- All six narrative sections and the secondary editorial spread exist, with original brand-facing copy.
- Every image, font, and relative link resolves from the extracted package.
- The hero matches this design's own composition, not another collection member's layout.
- All interactive controls produce the specified result and recover from invalid input.
- No real-world outcomes, product claims, or external submissions are fabricated.
- The page works with a keyboard, at narrow widths, and with reduced motion.
- Both theme modes remain coherent; focus and button text remain readable.
- All licensing and attribution accompany the downloadable assets.
- The final source contains no placeholders, TODOs, silent errors, or remote image dependencies.
- Deliver the complete site, this full prompt, and its assets together.
