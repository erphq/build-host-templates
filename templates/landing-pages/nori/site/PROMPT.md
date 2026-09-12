# NORI / Japanese restaurant editorial

## The brief
Build a complete, original, production-quality responsive website for NORI: A modern Japanese dining room with restrained type and a seasonal menu. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “A season at the counter.”. The primary action is “Request a table”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is japanese restaurant editorial. The defining composition is narrow title beside food photograph, seasonal tasting menu, chef approach, dining notes, table request. Use the three brand colors #172926, #f2f0e8, #d2bb84 as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Seasonal dining / Counter & table. Compose the hero according to the nori reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “At the counter”, and “Request a table”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “A season at the counter.”. Supporting copy: “A small seasonal menu. A thoughtful progression. An evening at the counter, in good company.”.
2. Brand story: “Led by the season.”. Copy: “A small menu, a thoughtful progression, and the pleasure of sitting at the counter. Our fictional seasonal kitchen brings a contemporary sensibility to familiar Japanese techniques.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. At the counter: 1) Early Season / Spring: Asparagus, citrus, delicate broth, and a light finish. 2) High Summer / Summer: Tomato, chilled noodles, grilled fish, and stone fruit. 3) Late Harvest / Autumn: Mushroom, roasted squash, warm rice, and pear.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “Can dietary needs be accommodated?” Answer: “A real restaurant would review dietary requests before confirming a reservation. Include them in your local request summary.” “Is this a real reservation?” Answer: “No. This is a fully interactive concept that prepares a reservation request on your device. Nothing is sent to a restaurant.” Use native disclosures or an accessible accordion.
5. Interactive experience: switch seasonal menu; choose service, party size, and date; generate a local reservation request. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full restaurant interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged sushi restaurant image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone sushi restaurant composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use dish entrance, menu accordion, reservation status transition. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like NORI, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Use a narrow-left NORI wordmark and heritage-appropriate Georgia headline, a large central food image, and a small supporting right rail. Keep the theme dark forest through every section. Image edges are clean rectangles; the food, not decorative ornament, supplies texture.

The hero supporting copy is exactly: “A small seasonal menu. A thoughtful progression. An evening at the counter, in good company.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “The season sets the table.”. Supporting text: “Flavor begins with attention: the temperature of a broth, the texture of rice, the balance between the familiar and the unexpected.”. Caption: “A considered progression.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the spread layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
Require a date today or later, choose 18:00 early evening or 20:30 late evening, party size integer 1–6, and optional dietary notes up to 400 characters. Return a local request summary without claiming availability or a confirmed booking.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Dish imagery enters once. Seasonal menu filtering uses active states and no automatic carousel. Reservation summaries appear under the form.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero nori"><div class="nori-title"><span class="nori-word">NORI</span><h1>A season at the counter.</h1><a class="button" href="#experience">Request a table <span aria-hidden="true">↗</span></a></div><div class="nori-image"><img class="hero-image" src="assets/hero.webp?v=2" alt="sushi restaurant photograph for NORI" width="1536" height="1024" fetchpriority="high"></div><div class="nori-side"><p class="small-label">Seasonal dining / Counter &amp; table</p><p class="hero-description">A small seasonal menu. A thoughtful progression. An evening at the counter, in good company.</p></div></section>
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
.nori{
  display: grid;
  grid-template-columns: 0.9fr 1.25fr 0.35fr;
  gap: 40px;
  padding: 50px 4.2%;
}
.nori-word{
  font-size: clamp(80px, 10vw, 160px);
  line-height: 1;
  letter-spacing: -8px;
}
.nori-title{
  align-self: center;
}
.nori-title h1{
  font:
    400 48px/1.12 Georgia,
    serif;
  letter-spacing: -2px;
  margin-top: 30px;
}
.nori-image{
  height: 590px;
}
.nori-side{
  align-self: flex-end;
  padding-bottom: 20px;
}
.nori-side .hero-description{
  font-size: 13px;
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
.nori{
    grid-template-columns: 1fr 1.3fr;
  }
.nori-side{
    display: none;
  }
.nori-image{
    height: 500px;
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
.nori{
    grid-template-columns: 1fr;
    padding: 40px 22px;
    gap: 35px;
  }
.nori-word{
    font-size: 130px;
    letter-spacing: -6px;
  }
.nori-title h1{
    font-size: 48px;
    max-width: 340px;
    margin-top: 10px;
  }
.nori-image{
    height: 410px;
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
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Request a table.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="restaurant"><label>Preferred date<input type="date" name="date" required></label><label>Service<select name="service"><option value="18:00 / Early evening">18:00 / Early evening</option><option value="20:30 / Late evening">20:30 / Late evening</option></select></label><label>Party size<input name="guests" type="number" min="1" max="6" value="2" required></label><label>Dietary notes<textarea name="notes" maxlength="400" placeholder="Optional dietary requirements"></textarea></label><button class="button" type="submit">Prepare my plan <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
restaurant: (v) => {
    if (!futureDate(v.date))
      return message('Please choose a date today or later.');
    plan([
      `Table request: ${v.guests} guests / ${v.date}`,
      `Service: ${v.service}`,
      v.notes ? 'Dietary notes: ' + v.notes : 'No dietary notes provided.',
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
  "slug": "nori",
  "prompt": "Exquisite minimal omakase composition, two immaculate nigiri on dark handmade stone plate with subtle wasabi accent, dark forest-black background, controlled side lighting, spacious refined restaurant editorial photograph. Vertical 1024x1536. No text or logo. Photorealistic fine dining food photography, impeccable rice texture and fresh fish, restrained arrangement.",
  "generation_tool": "Built-in image generation",
  "provenance": "Original AI-generated campaign asset",
  "width": 1024,
  "height": 1536
}

Secondary image 1
{
  "site_slug": "sushi",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/chef-preparing-sushi-8951048/",
  "image_url": "https://images.pexels.com/photos/8951048/pexels-photo-8951048.jpeg?cs=srgb&dl=pexels-ivan-s-8951048.jpg&fm=jpg",
  "author": "Ivan S",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "sushi chef preparing",
  "width": 7952,
  "height": 5304
}

Secondary image 2
{
  "site_slug": "sushi",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/raw-salmon-in-close-up-17564445/",
  "image_url": "https://images.pexels.com/photos/17564445/pexels-photo-17564445.jpeg?cs=srgb&dl=pexels-nadin-sh-78971847-17564445.jpg&fm=jpg",
  "author": "Nadin Sh",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "salmon sashimi close up",
  "width": 4160,
  "height": 5547
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
