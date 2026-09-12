# WAVEFORM / High-impact product campaign

## The brief
Build a complete, original, production-quality responsive website for WAVEFORM: An audio product launch with acid-yellow color, outsized type, and sculptural product photography. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Feel every frequency.”. The primary action is “Make them yours”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is high-impact product campaign. The defining composition is split product stage, sound mode selector, feature comparison, product specification blocks, local shopping bag. Use the three brand colors #e4ed4c, #171c1b, #171c1b as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
W01 / Wireless over-ear. Compose the hero according to the waveform reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “A mode for every moment”, and “Make them yours”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Feel every frequency.”. Supporting copy: “Wireless over-ear headphones for the records you know by heart and the details you have never heard.”.
2. Brand story: “Your world. In full detail.”. Copy: “A considered listening experience, from the first note to the last train home. Explore three listening modes and find a finish that fits your everyday.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. A mode for every moment: 1) Focus / Noise control: Bring your attention back to the music. 2) Aware / Transparency: Keep the conversation and the city in reach. 3) Pure / Balanced sound: A natural presentation for your favorite recordings.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “What is included?” Answer: “This concept package includes the headphones, a soft carrying case, and a USB-C charging cable. Product specifications are illustrative.” “Can I choose a finish?” Answer: “Yes. Configure graphite or silver below, then add your selection to the local demo bag.” Use native disclosures or an accessible accordion.
5. Interactive experience: choose a finish and listening mode; adjust quantity; add to a local demo cart and remove products. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full cart interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged audio image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone audio composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use product entrance, selected listening mode, cart feedback. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like WAVEFORM, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Use a 50/50 desktop product stage with 640px minimum height. The left text area is large and open; the right product photograph is edge-to-edge. Preserve the chrome detail: no multiply blend that turns silver into muddy yellow. The W01 product mark anchors the bottom-right. Follow with a full-width editorial product study and a listening-mode selector.

The hero supporting copy is exactly: “Wireless over-ear headphones for the records you know by heart and the details you have never heard.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “Tune into your own world.”. Supporting text: “From the soft contact of the ear cushion to the balance of the headband, a better listening experience begins before the music does.”. Caption: “Every detail has a frequency.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the offset-study layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
The sample unit price is $249. Options are Graphite or Silver. Quantity must be an integer between 1 and 10. Add configuration rows to a local cart; total each row as unit price × quantity, and sum all rows. Remove a row immediately and persist the revised bag.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Listening mode is a native selector; preserve its selected option in the bag. Product imagery enters smoothly and cart feedback is immediate. Never play audio automatically.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero product-hero"><div class="product-copy"><p class="small-label">W01 / Wireless over-ear</p><h1>Feel every frequency.</h1><p class="hero-description">Wireless over-ear headphones for the records you know by heart and the details you have never heard.</p><a class="button" href="#experience">Make them yours <span aria-hidden="true">↗</span></a></div><div class="product-art"><img class="hero-image" src="assets/hero.webp?v=2" alt="audio photograph for WAVEFORM" width="1536" height="1024" fetchpriority="high"><span class="product-code">W01</span></div></section>
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
.product-hero{
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 640px;
}
.product-copy{
  padding: 80px 4% 70px 9%;
  position: relative;
  z-index: 1;
}
.product-copy h1{
  font-size: clamp(50px, 6.5vw, 102px);
}
.product-copy .hero-description{
  margin-top: 25px;
}
.product-art{
  position: relative;
  overflow: hidden;
}
.product-art img{
  mix-blend-mode: normal;
}
.product-code{
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 100px;
  font-weight: 650;
  letter-spacing: -8px;
  color: #17221b;
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
.product-code{
    font-size: 70px;
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
.product-hero{
    display: flex;
    flex-direction: column;
  }
.product-copy{
    padding: 45px 25px 25px;
  }
.product-copy h1{
    font-size: 68px;
  }
.product-art{
    height: 350px;
  }
.product-code{
    font-size: 70px;
    bottom: 10px;
  }
}
.hero-description{
  font-weight: 400;
}
.hero .small-label{
  font-weight: 500;
}
.hero .button{
  animation-delay: 0s !important;
}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Make them yours.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="cart"><label>Finish<select name="option"><option value="Graphite">Graphite</option><option value="Silver">Silver</option></select></label><label>Listening mode<select name="mode"><option value="Focus">Focus</option><option value="Aware">Aware</option><option value="Pure">Pure</option></select></label><label>Quantity<input name="quantity" type="number" min="1" max="10" value="1" required></label><p class="price">$249<span> / sample price</span></p><button class="button" type="submit">Add to demo bag <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div><div id="bag" class="bag" aria-live="polite"><h3>Your demo bag</h3><p>Your bag is empty.</p></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
cart: (v) => {
    bag.push({
      product: content.product,
      option: v.option,
      size: v.size || '',
      mode: v.mode || '',
      color: v.color || '',
      quantity: count(v, 'quantity'),
      price: content.price,
    });
    const saved = saveLocal('bag', bag);
    renderBag();
    message(
      `${v.quantity} × ${content.product} added to your demo bag.${saved ? '' : ' Storage is unavailable; this bag lasts for this visit only.'} No order has been placed.`,
    );
  }
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
  "subject": "audio",
  "source_page": null,
  "image_url": null,
  "author": "AI image generation",
  "license": "AI-generated original asset",
  "generation_tool": "Built-in image generation",
  "prompt": "Premium chrome and black over-ear headphones on saturated acid yellow seamless studio backdrop, sculptural lighting, horizontal 1536x1024, no text.",
  "width": 1536,
  "height": 1024
}

The imagery is used for a fictional design concept. No endorsement by depicted people, photographers or brands is implied.

Secondary image 1
{
  "site_slug": "audio",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/close-up-of-headphones-7858756/",
  "image_url": "https://images.pexels.com/photos/7858756/pexels-photo-7858756.jpeg?cs=srgb&dl=pexels-ron-lach-7858756.jpg&fm=jpg",
  "author": "Ron Lach",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "headphones close up",
  "width": 4480,
  "height": 6720
}

Secondary image 2
{
  "site_slug": "audio",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/a-woman-listening-on-her-headphones-7382359/",
  "image_url": "https://images.pexels.com/photos/7382359/pexels-photo-7382359.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-7382359.jpg&fm=jpg",
  "author": "Polina Tankilevitch",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "woman listening headphones",
  "width": 2000,
  "height": 3000
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
