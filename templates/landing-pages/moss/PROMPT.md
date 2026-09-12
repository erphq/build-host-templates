# MOSS / LAB / Botanical minimalism

## The brief
Build a complete, original, production-quality responsive website for MOSS / LAB: Botanical care built around tactile photography, a forest palette, and a concise ingredient story. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Less, but better.”. The primary action is “Find your ritual”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is botanical minimalism. The defining composition is asymmetric product and headline, daily ritual steps, ingredient disclosures, paired product collection, routine builder. Use the three brand colors #e5ebe1, #193529, #2c5d3c as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Care, considered. Compose the hero according to the moss reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Meet the essentials”, and “Find your ritual”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Less, but better.”. Supporting copy: “A small collection of botanical essentials. Thoughtfully made for the rituals you return to every day.”.
2. Brand story: “A ritual without the noise.”. Copy: “A small set of everyday essentials. Explore a gentler approach to cleansing, hydration, and the moments you keep for yourself. The routine finder is a design demo, not medical advice.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Meet the essentials: 1) The Cleanser / Cleanse: A simple first step to wash the day away. 2) The Serum / Hydrate: A lightweight layer for your daily routine. 3) The Cream / Finish: A comforting final step, morning or evening.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “Where can I find ingredients?” Answer: “In a real storefront, each product would include a verified full ingredient list. These products are illustrative and make no treatment claims.” “How does the routine finder work?” Answer: “Choose your preferred feel and number of steps. It builds a simple sample routine from the essentials on this page.” Use native disclosures or an accessible accordion.
5. Interactive experience: choose skin preference and routine length; show a matching two- or three-step routine. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full routine interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged botanical skincare image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone botanical skincare composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use soft image entrance, ingredient disclosure expansion, selected routine feedback. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like MOSS / LAB, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Give the left half a large but calm headline; set the right photograph inside a single tall arch with a 45% top radius. Keep the forest palette coherent and avoid tan/brass luxury clichés. Secondary imagery should form a tactile sequence of botanical detail and product texture.

The hero supporting copy is exactly: “A small collection of botanical essentials. Thoughtfully made for the rituals you return to every day.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “A little care, every day.”. Supporting text: “Begin with what you need. A few useful essentials can make a routine feel less like a list and more like a moment you keep.”. Caption: “Simple ingredients. Considered rituals.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the spread layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
A two-step routine includes The Cleanser and either The Serum for Lightweight preference or The Cream for other preferences. A three-step routine includes all three in that order. Preferences are feel choices, not health diagnoses or treatment recommendations.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Use soft 750ms photo reveals and 200ms selection feedback. A routine result appears without shifting focus away from the form.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero moss"><div class="moss-copy"><p class="small-label">Care, considered</p><h1>Less, but better.</h1><p class="hero-description">A small collection of botanical essentials. Thoughtfully made for the rituals you return to every day.</p><a class="button" href="#experience">Find your ritual <span aria-hidden="true">↗</span></a></div><div class="moss-art"><img class="hero-image" src="assets/hero.webp?v=2" alt="botanical skincare photograph for MOSS / LAB" width="1536" height="1024" fetchpriority="high"></div><div class="vertical-note">THE EVERYDAY ESSENTIALS</div></section>
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
.moss{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4%;
  padding: 55px 7% 65px;
}
.moss-copy{
  align-self: center;
  padding: 25px 0;
}
.moss-copy h1{
  font-size: clamp(65px, 8vw, 116px);
}
.moss-copy .hero-description{
  margin-top: 30px;
}
.moss-art{
  height: 560px;
  border-radius: 45% 45% 0 0;
  overflow: hidden;
}
.vertical-note{
  position: absolute;
  right: 20px;
  top: 180px;
  writing-mode: vertical-rl;
  font-size: 10px;
  letter-spacing: 2px;
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
.hero .small-label{
    font-size: 10px;
    margin-bottom: 20px;
  }
.hero .button{
    margin-top: 25px;
  }
.moss{
    display: flex;
    flex-direction: column;
    padding: 40px 25px;
  }
.moss-copy{
    padding: 0;
  }
.moss-copy h1{
    font-size: 76px;
  }
.moss-art{
    height: 390px;
    margin-top: 35px;
    border-radius: 150px 150px 0 0;
  }
.vertical-note{
    display: none;
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
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Find your ritual.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="routine"><label>Preferred feel<select name="feel"><option value="Lightweight">Lightweight</option><option value="Comforting">Comforting</option><option value="Balanced">Balanced</option></select></label><label>Routine length<select name="steps"><option value="2">Two essentials</option><option value="3">The full ritual</option></select></label><button class="button" type="submit">Build my routine <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
routine: (v) => {
    const products =
      count(v, 'steps') === 3
        ? ['The Cleanser', 'The Serum', 'The Cream']
        : [
            'The Cleanser',
            v.feel === 'Lightweight' ? 'The Serum' : 'The Cream',
          ];
    message(
      `Your ${v.feel.toLowerCase()} sample ritual\n\n${products.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\nIllustrative product guidance only. Review verified ingredients and individual suitability before using any real product.`,
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
  "slug": "moss",
  "prompt": "Premium unbranded frosted sage-green serum bottle and low ceramic moisturizer jar on pale cool-green stone, branch shadow, sparse botanical leaf, natural daylight, editorial skincare campaign. Vertical 1024x1536. No text or logo. NOT medical vials. Photorealistic high-end beauty campaign; subtle tactile textures, sophisticated quiet composition.",
  "generation_tool": "Built-in image generation",
  "provenance": "Original AI-generated campaign asset",
  "width": 1024,
  "height": 1536
}

Secondary image 1
{
  "site_slug": "skincare",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/close-up-of-natural-serum-4841274/",
  "image_url": "https://images.pexels.com/photos/4841274/pexels-photo-4841274.jpeg?cs=srgb&dl=pexels-misolo-cosmetic-2588316-4841274.jpg&fm=jpg",
  "author": "Misolo Cosmetic",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "serum bottle natural",
  "width": 5134,
  "height": 3423
}

Secondary image 2
{
  "site_slug": "skincare",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/woman-doing-skincare-on-her-face-9253778/",
  "image_url": "https://images.pexels.com/photos/9253778/pexels-photo-9253778.jpeg?cs=srgb&dl=pexels-ron-lach-9253778.jpg&fm=jpg",
  "author": "Ron Lach",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "skincare woman face",
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
