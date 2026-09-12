# KILN / Material-led craft journal

## The brief
Build a complete, original, production-quality responsive website for KILN: A ceramic studio with close material studies and a small-batch collection. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “No two alike.”. The primary action is “Find your workshop”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is material-led craft journal. The defining composition is editorial title and pottery image, studio process, glaze swatches, collection list, workshop booking. Use the three brand colors #dddfe0, #283139, #566776 as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Small-batch ceramics / Made by hand. Compose the hero according to the kiln reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “From earth to everyday”, and “Find your workshop”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “No two alike.”. Supporting copy: “Small-batch vessels, shaped by hand and made to become part of your daily rituals.”.
2. Brand story: “A trace of the maker.”. Copy: “Slight variations in shape and glaze make each piece its own. Our concept studio collection celebrates the marks of a slow, deliberate making process.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. From earth to everyday: 1) Center / On the wheel: Clay finds its balance before it finds its form. 2) Shape / In the hands: Walls are pulled, edges softened, and handles joined. 3) Fire / In the kiln: Glaze and heat bring the final surface to life.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “How do I care for a piece?” Answer: “For this sample collection, gentle hand washing is recommended. A real product page should provide tested food safety and care information.” “Can I try making a piece?” Answer: “Use the workshop planner to select a sample session and group size. The summary stays on your device.” Use native disclosures or an accessible accordion.
5. Interactive experience: choose glaze and vessel shape; view care details; select a workshop date and seats. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full workshop interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged ceramic craft image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone ceramic craft composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use slow image entrance, glaze selection feedback, workshop summary reveal. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like KILN, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Use a material-oriented split hero: Georgia headline at 8vw, a quiet supporting sentence, and a tall pottery photograph with rounded arch shoulders. A single large K. mark sits near the image edge. Lower process steps should be editorial rather than catalog-like.

The hero supporting copy is exactly: “Small-batch vessels, shaped by hand and made to become part of your daily rituals.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “A little evidence of the hand.”. Supporting text: “A soft edge. A subtle change in glaze. The marks of making are the things that keep a useful object interesting.”. Caption: “Earth, water, and time.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the spread layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
Workshops: Wheel introduction, Hand-building vessels, Glaze exploration. Glaze directions: Chalk, Slate, Moss. Seats integer 1–6. Require a date today or later. Total uses an illustrative flat $75 per seat, regardless of session.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Process imagery reveals in sequence. Glaze choices receive clear selection feedback. The workshop summary remains readable in reduced motion.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero kiln"><div class="kiln-title"><p class="small-label">Small-batch ceramics / Made by hand</p><h1>No two alike.</h1><p>Objects for everyday rituals.<br>Made slowly, used often.</p><a class="button" href="#experience">Find your workshop <span aria-hidden="true">↗</span></a></div><div class="kiln-photo"><img class="hero-image" src="assets/hero.webp?v=2" alt="ceramic craft photograph for KILN" width="1536" height="1024" fetchpriority="high"></div><span class="kiln-mark">K.</span></section>
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
.kiln{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  padding: 55px 6%;
  position: relative;
}
.kiln-title{
  align-self: center;
}
.kiln-title h1{
  font:
    400 clamp(65px, 8vw, 105px)/1.04 Georgia,
    serif;
  letter-spacing: -5px;
}
.kiln-title > p:not(.small-label){
  margin-top: 25px;
}
.kiln-photo{
  height: 600px;
  border-radius: 200px 200px 4px 4px;
  overflow: hidden;
}
.kiln-mark{
  position: absolute;
  bottom: 40px;
  right: 25px;
  font-size: 120px;
  font-family: Georgia;
  color: var(--paper);
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
.kiln{
    display: block;
    padding: 45px 22px;
  }
.kiln-title h1{
    font-size: 76px;
    letter-spacing: -4px;
  }
.kiln-photo{
    height: 420px;
    margin-top: 35px;
  }
.kiln-mark{
    font-size: 95px;
  }
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
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Find your workshop.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="workshop"><label>Workshop<select name="session"><option value="Wheel introduction">Wheel introduction</option><option value="Hand-building vessels">Hand-building vessels</option><option value="Glaze exploration">Glaze exploration</option></select></label><label>Glaze direction<select name="glaze"><option value="Chalk">Chalk</option><option value="Slate">Slate</option><option value="Moss">Moss</option></select></label><label>Vessel form<select name="vessel"><option value="Cup">Cup</option><option value="Bowl">Bowl</option><option value="Vase">Vase</option></select></label><label>Seats<input name="guests" type="number" min="1" max="6" value="1" required></label><label>Preferred date<input type="date" name="date" required></label><button class="button" type="submit">Prepare my plan <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
workshop: (v) => {
    if (!futureDate(v.date))
      return message('Please choose a workshop date today or later.');
    plan([
      `${v.session} / ${v.glaze} glaze / ${v.vessel}`,
      `${v.guests} ${count(v, 'guests') === 1 ? 'seat' : 'seats'} / ${v.date}`,
      `Illustrative workshop total: ${dollars(count(v, 'guests') * 75)}`,
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
Primary image
{
  "subject": "ceramics",
  "source_page": "https://www.pexels.com/photo/potter-hands-working-on-clay-17846719/",
  "author": "Elizabeth Gartside",
  "image_url": "https://images.pexels.com/photos/17846719/pexels-photo-17846719.jpeg?cs=srgb&dl=pexels-parfumdefemme-17846719.jpg&fm=jpg",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "width": 4016,
  "height": 6016
}

The imagery is used for a fictional design concept. No endorsement by depicted people, photographers or brands is implied.

Secondary image 1
{
  "site_slug": "ceramics",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/photo-of-a-ceramic-vase-8274442/",
  "image_url": "https://images.pexels.com/photos/8274442/pexels-photo-8274442.jpeg?cs=srgb&dl=pexels-rahmi-aksoz-53797721-8274442.jpg&fm=jpg",
  "author": "Rahmi Aks\u00f6z",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "ceramic vase handmade",
  "width": 4288,
  "height": 2848
}

Secondary image 2
{
  "site_slug": "ceramics",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/pottery-workplace-with-clay-pots-on-shelves-4706113/",
  "image_url": "https://images.pexels.com/photos/4706113/pexels-photo-4706113.jpeg?cs=srgb&dl=pexels-ai25studioai-4706113.jpg&fm=jpg",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "pottery workshop shelves",
  "author": "AI25.Studio Studio",
  "width": 4000,
  "height": 6000
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
