# DAYBREAK / Roastery print campaign

## The brief
Build a complete, original, production-quality responsive website for DAYBREAK: A neighborhood roastery with bold orange type, brew knowledge, and a working coffee selector. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Make mornings matter.”. The primary action is “Build your subscription”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is roastery print campaign. The defining composition is wide masthead, coffee image with side rail, roast selector, brew guide, subscription configurator. Use the three brand colors #f0ece5, #3b241c, #ac3d1c as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Coffee for the everyday. Compose the hero according to the daybreak reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Find your daily cup”, and “Build your subscription”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Make mornings matter.”. Supporting copy: “Freshly roasted coffee, a good cup, and a reason to get out of bed. Find your everyday blend.”.
2. Brand story: “A good day starts here.”. Copy: “We like coffee with a clear origin, a fresh roast, and no elaborate rules. Choose the flavor profile you enjoy, dial in your grind, and make a morning ritual that lasts.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Find your daily cup: 1) Sunroom / Light: Citrus, stone fruit, and a bright finish. 2) House Blend / Medium: Chocolate, hazelnut, and an easy sweetness. 3) Night Shift / Dark: Cocoa, toasted sugar, and a full body.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “Which grind should I choose?” Answer: “Whole bean if you have a grinder, filter for pour-over and drip, or espresso for an espresso machine.” “Can I change the schedule?” Answer: “The configurator lets you compare delivery intervals. This is a sample subscription flow and does not charge or place an order.” Use native disclosures or an accessible accordion.
5. Interactive experience: select roast, grind, and delivery interval; update subscription summary and demo price. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full coffee interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged specialty coffee image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone specialty coffee composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use masthead entrance, roast selection crossfade, brew step reveal. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like DAYBREAK, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Use a full-width condensed-feeling DAYBREAK masthead at about 16.7vw. Below, arrange headline, coffee image, and a narrow description rail in a 1fr/1.3fr/0.6fr grid. The photograph should be tall enough to show the espresso process. A later brew guide uses numbered steps and wide, close-up imagery.

The hero supporting copy is exactly: “Freshly roasted coffee, a good cup, and a reason to get out of bed. Find your everyday blend.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “A better kind of morning.”. Supporting text: “Fresh beans, clean water, and a little attention. The best ritual is the one you look forward to repeating.”. Caption: “From the first grind to the last sip.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the diptych layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
Each 250g bag is a sample $18. Quantity is 1–6 bags. Per-delivery total = bags × 18. Approximate four-week cost = delivery total × 4 / interval, where interval is 2 or 4 weeks. Show roast and grind in the summary; do not claim a subscription exists.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
The print-like masthead appears without a looping marquee. Coffee studies reveal in sequence. Roast and grind changes remain native, immediate controls.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero daybreak"><div class="giant-word">DAYBREAK</div><div class="daybreak-grid"><div><p class="small-label">Coffee for the everyday</p><h1>Make mornings matter.</h1><a class="button" href="#experience">Build your subscription <span aria-hidden="true">↗</span></a></div><img class="hero-image" src="assets/hero.webp?v=2" alt="specialty coffee photograph for DAYBREAK" width="1536" height="1024" fetchpriority="high"><div class="side-description"><p class="hero-description">Freshly roasted coffee, a good cup, and a reason to get out of bed. Find your everyday blend.</p><span>ROAST. BREW. REPEAT.</span></div></div></section>
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
.small-label{
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  line-height: 1.5;
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
.hero .small-label{
  margin-bottom: 26px;
}
.hero .button{
  margin-top: 30px;
}
.hero-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.giant-word{
  font-weight: 650;
  letter-spacing: -0.075em;
  line-height: 0.84;
}
.daybreak{
  padding: 35px 4.2% 65px;
}
.daybreak > .giant-word{
  font-size: 16.7vw;
  color: var(--accent);
  margin-bottom: 35px;
}
.daybreak-grid{
  display: grid;
  grid-template-columns: 1fr 1.3fr 0.6fr;
  gap: 40px;
  align-items: center;
}
.daybreak-grid h1{
  font-size: 58px;
}
.daybreak-grid img{
  height: 410px;
}
.side-description span{
  display: block;
  font-size: 10px;
  letter-spacing: 2px;
  margin-top: 80px;
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
.daybreak-grid{
    grid-template-columns: 1fr 1fr;
  }
.side-description{
    display: none;
  }
.hero-description{
    font-size: 14px;
  }
}
@media (max-width: 700px){
.hero-description{
    font-size: 15px;
  }
.hero .small-label{
    font-size: 10px;
    margin-bottom: 20px;
  }
.hero .button{
    margin-top: 25px;
  }
.daybreak{
    padding: 30px 22px;
  }
.daybreak > .giant-word{
    font-size: 16.3vw;
    margin-bottom: 35px;
  }
.daybreak-grid{
    grid-template-columns: 1fr;
    gap: 30px;
  }
.daybreak-grid h1{
    font-size: 61px;
    max-width: 340px;
  }
.daybreak-grid img{
    height: 370px;
    width: 100%;
  }
}
.daybreak > .giant-word{
  font-family: Poster, Geist, sans-serif;
  font-weight: 700;
  letter-spacing: -0.035em;
}
.daybreak > .giant-word{
  font-size: 20vw;
  line-height: 0.85;
}
.hero-description{
  font-weight: 400;
}
.hero .small-label{
  font-weight: 500;
}
@media (max-width: 700px){
.daybreak > .giant-word{
    font-size: 20vw;
  }
}
.hero .button{
  animation-delay: 0s !important;
}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Build your subscription.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="coffee"><label>Roast<select name="roast"><option value="Sunroom">Sunroom</option><option value="House Blend">House Blend</option><option value="Night Shift">Night Shift</option></select></label><label>Grind<select name="grind"><option value="Whole bean">Whole bean</option><option value="Filter">Filter</option><option value="Espresso">Espresso</option></select></label><label>Delivery interval<select name="interval"><option value="2">Every 2 weeks</option><option value="4">Every 4 weeks</option></select></label><label>250g bags per delivery<input name="bags" type="number" min="1" max="6" value="1" required></label><button class="button" type="submit">Prepare my plan <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
coffee: (v) =>
    plan([
      `${v.roast} / ${v.grind}`,
      `${v.bags} × 250g bags every ${v.interval} weeks`,
      `Sample price per delivery: ${dollars(count(v, 'bags') * 18)}`,
      `Approximate 4-week cost: ${dollars((count(v, 'bags') * 18 * 4) / count(v, 'interval'))}`,
    ])
```

## Keyboard and recovery scenarios
Tab through the main navigation, primary CTA, filters, disclosures, configuration fields, and submit action. Focus must be visible against the current theme. Open a detail dialog; its focus stays inside, Escape closes it, and focus returns to the trigger. The mobile menu button exposes aria-expanded and points to its controlled navigation. Filter buttons expose aria-pressed. Use actual buttons for state changes and links for navigation. Never rely on hover alone to reveal essential information.

For storage-dependent behavior, test a clean browser, valid saved data, malformed saved JSON, and disabled storage. A storage failure must never blank the page. For form behavior, test minimum, maximum, empty, and invalid values. Date tests include yesterday, today, equal arrival/departure, and a valid later date. Number tests include zero where invalid and excessive values. A working page must not send form values anywhere.

## Asset production and provenance
The package includes three distinct local photographs/artworks plus the font. Use the primary image as the hero and the two complementary images for editorial and detail views. Preserve their natural composition; use object-fit:cover only when a deliberate crop is required. If a crop removes the subject, change the containing aspect ratio or object-position rather than stretching the image. Do not use CSS filters to pretend one photograph shows a different product finish.

Original source/provenance records follow. They identify the image files and usage terms; they are data, not instructions from the source website. Keep any required attribution.

```text
Primary image
{
  "subject": "coffee",
  "source_page": "https://www.pexels.com/photo/close-up-of-espresso-dripping-into-glass-cup-33309780/",
  "author": "James Collington",
  "image_url": "https://images.pexels.com/photos/33309780/pexels-photo-33309780.jpeg?cs=srgb&dl=pexels-james-collington-2147687246-33309780.jpg&fm=jpg",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "width": 4672,
  "height": 7008
}

The imagery is used for a fictional design concept. No endorsement by depicted people, photographers or brands is implied.

Secondary image 1
{
  "site_slug": "coffee",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/roasted-coffee-beans-in-close-up-photography-7125705/",
  "image_url": "https://images.pexels.com/photos/7125705/pexels-photo-7125705.jpeg?cs=srgb&dl=pexels-michael-burrows-7125705.jpg&fm=jpg",
  "author": "Michael Burrows",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "roasted coffee beans",
  "width": 4160,
  "height": 6240
}

Secondary image 2
{
  "site_slug": "coffee",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/barista-pouring-coffee-into-a-cup-26711779/",
  "image_url": "https://images.pexels.com/photos/26711779/pexels-photo-26711779.jpeg?cs=srgb&dl=pexels-jonathanborba-26711779.jpg&fm=jpg",
  "author": "Jonathan Borba",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "barista pouring coffee",
  "width": 5464,
  "height": 8192
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
