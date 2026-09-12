# OBJECT / 01 / Industrial furniture catalog

## The brief
Build a complete, original, production-quality responsive website for OBJECT / 01: A furniture collection that treats each object like an exhibit. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Made to live with.”. The primary action is “Configure your chair”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is industrial furniture catalog. The defining composition is large collection title, product cutaway image, material swatches, dimensions diagram, care accordion, shopping bag. Use the three brand colors #e9e8e4, #292927, #545b44 as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Objects with a long view. Compose the hero according to the object reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Considered from every angle”, and “Configure your chair”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Made to live with.”. Supporting copy: “Purposeful furniture with honest materials, generous proportions, and a place in the everyday.”.
2. Brand story: “Useful. Beautiful. Yours.”. Copy: “Good furniture earns its place over time. This collection explores a small set of purposeful forms, considered proportions, and materials that welcome daily use.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Considered from every angle: 1) Form / A clear silhouette: A compact footprint, a generous seat, and no unnecessary gestures. 2) Material / A natural touch: Explore oak, ash, and walnut finishes in the configuration below. 3) Care / Built for daily life: Dust with a soft cloth and keep natural wood away from prolonged moisture.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “Can I compare dimensions?” Answer: “The compact concept is 70 × 72 × 76 cm; the generous version is 82 × 80 × 78 cm. These are example specifications.” “How do finishes differ?” Answer: “Oak has a warm, open grain; ash is lighter; walnut is darker. The selector records the finish in your demo bag.” Use native disclosures or an accessible accordion.
5. Interactive experience: choose material and size, reveal dimensions, add and remove configured furniture in a demo bag. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full cart interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged furniture image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone furniture composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use material transition, object entrance, bag feedback. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like OBJECT / 01, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Use an exhibit-like heading row: small collection label on the left, oversized title on the right. A large product image follows, then a lean specification and CTA rail. Present material closeups as large rectangular studies with minimal framing.

The hero supporting copy is exactly: “Purposeful furniture with honest materials, generous proportions, and a place in the everyday.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “The useful becomes the beautiful.”. Supporting text: “A familiar gesture can become a lasting object. A curve that supports you. A surface that welcomes touch. A proportion that feels right.”. Caption: “Form, material, and a place to sit.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the contact-study layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
The Study lounge chair is a sample $480. Options are Oak, Ash, Walnut; sizes are Compact and Generous. Compact example dimensions are 70 × 72 × 76 cm; Generous dimensions 82 × 80 × 78 cm. Price does not change by size. Record finish, size, and integer quantity 1–10 in the local bag.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Material choices receive immediate text and selected-state feedback. Product imagery reveals slowly; avoid rotating a flat photo as if it were a 3D model.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero object"><div class="object-head"><p class="small-label">Objects with a long view</p><h1>Made to live with.</h1></div><div class="object-art"><img class="hero-image" src="assets/hero.webp?v=2" alt="furniture photograph for OBJECT / 01" width="1536" height="1024" fetchpriority="high"></div><div class="object-footer"><span>STUDY CHAIR / COLLECTION 01</span><a class="button" href="#experience">Configure your chair <span aria-hidden="true">↗</span></a></div></section>
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
.object{
  padding: 40px 4.2%;
}
.object-head{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
}
.object-head h1{
  max-width: 750px;
  font-size: clamp(50px, 6.7vw, 95px);
}
.object-head .small-label{
  max-width: 150px;
  margin-top: 10px;
}
.object-art{
  height: 470px;
  margin-top: 30px;
}
.object-art img{
  object-position: center 55%;
}
.object-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.object-footer > span{
  font-size: 11px;
  letter-spacing: 2px;
}
.object-footer .button{
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
@media (max-width: 700px){
.hero .small-label{
    font-size: 10px;
    margin-bottom: 20px;
  }
.hero .button{
    margin-top: 25px;
  }
.object{
    padding: 35px 22px;
  }
.object-head{
    display: block;
  }
.object-head h1{
    font-size: 67px;
  }
.object-art{
    height: 390px;
  }
.object-footer{
    display: block;
  }
.object-footer .button{
    margin-top: 20px;
  }
}
.hero .small-label{
  font-weight: 500;
}
.hero .button{
  animation-delay: 0s !important;
}
.object-art{background:#e0e1df}
.object-art img{object-fit:contain;object-position:center}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Configure your chair.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="cart"><label>Finish<select name="option"><option value="Oak">Oak</option><option value="Ash">Ash</option><option value="Walnut">Walnut</option></select></label><label>Dimensions<select name="size"><option value="Compact">Compact</option><option value="Generous">Generous</option></select></label><label>Quantity<input name="quantity" type="number" min="1" max="10" value="1" required></label><p class="price">$480<span> / sample price</span></p><button class="button" type="submit">Add to demo bag <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div><div id="bag" class="bag" aria-live="polite"><h3>Your demo bag</h3><p>Your bag is empty.</p></div></div></section>
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
Primary image: original generated artwork
{
  "slug": "object",
  "prompt": "Full sculptural lounge chair, natural oak curved frame and deep forest-green leather seat, centered on light cool-gray seamless studio, entire chair visible. Architectural product photography, horizontal 1536x1024. No logo or text. Refined realistic wood grain, precise joinery, comfortable sculptural form, premium furniture campaign.",
  "generation_tool": "Built-in image generation",
  "provenance": "Original AI-generated campaign asset",
  "width": 1536,
  "height": 1024
}

Secondary image 1
{
  "site_slug": "furniture",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/crafted-wooden-chair-18334983/",
  "image_url": "https://images.pexels.com/photos/18334983/pexels-photo-18334983.jpeg?cs=srgb&dl=pexels-darkshadephotos-18334983.jpg&fm=jpg",
  "author": "Darkshade Photos",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "wooden furniture detail",
  "width": 1825,
  "height": 2738
}

Secondary image 2
{
  "site_slug": "furniture",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/lounge-chair-in-front-of-coffee-table-7195554/",
  "image_url": "https://images.pexels.com/photos/7195554/pexels-photo-7195554.jpeg?cs=srgb&dl=pexels-artbovich-7195554.jpg&fm=jpg",
  "author": "Max Vakhtbovych",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "living room lounge chair",
  "width": 5520,
  "height": 3685
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
