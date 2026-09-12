# TIDE / Coastal adventure journal

## The brief
Build a complete, original, production-quality responsive website for TIDE: A coastal surf school with ocean-first art direction and a lesson planner. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Follow the water.”. The primary action is “Plan a lesson”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is coastal adventure journal. The defining composition is wave panorama with low headline, lesson chooser, instructor notes, session schedule, lesson planner. Use the three brand colors #dcece9, #183d46, #246c7e as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Coastal days. Open water.. Compose the hero according to the tide reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Find your water”, and “Plan a lesson”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Follow the water.”. Supporting copy: “Learn to read the water, find your feet, and make a little more room for the coast.”.
2. Brand story: “There is no perfect first wave.”. Copy: “Start with the basics, learn to read the water, and build confidence one session at a time. Our sample lesson planner helps you find a pace and format that feels right.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Find your water: 1) First Wave / Beginner: A shore briefing, safe equipment setup, and your first guided session. 2) Find Your Line / Progression: Work on positioning, timing, and more consistent rides. 3) Open Session / Confident: A small coached group with an emphasis on reading conditions.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “Do I need my own board?” Answer: “The sample lesson includes a board and wetsuit. A real operator would confirm sizing and conditions in advance.” “What happens in bad conditions?” Answer: “A responsible school assesses conditions and may reschedule. The demo does not display live surf conditions or make a booking.” Use native disclosures or an accessible accordion.
5. Interactive experience: choose experience level and group size; show the recommended lesson and sample total. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full surf interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged surf image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone surf composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use ocean image drift, lesson selection transition, schedule reveal. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like TIDE, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
A giant TIDE wordmark spans the left half of the upper composition, balanced by a large title and lesson CTA. The ocean photograph forms a wide landscape band underneath. Carry clear sea-blue tones and generous daylight through the lower content.

The hero supporting copy is exactly: “Learn to read the water, find your feet, and make a little more room for the coast.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “A little closer to the ocean.”. Supporting text: “Progress comes one wave at a time. Learn the conditions, listen to your instructor, and keep enough room for a good day to surprise you.”. Caption: “Read the water. Find your line.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the contact-study layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
First time recommends First Wave at sample $65/person; Finding my feet recommends Find Your Line at $85; Confident recommends Open Session at $95. Multiply by integer group size 1–6 and reject past dates. Do not assert real-time weather or surf suitability.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
Use one slow landscape settle and normal scroll reveals. The lesson recommendation updates on submit and does not rely on animation for meaning.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero tide"><div class="tide-heading"><div class="giant-word">TIDE</div><div><h1>Follow the water.</h1><a class="button" href="#experience">Plan a lesson <span aria-hidden="true">↗</span></a></div></div><div class="tide-image"><img class="hero-image" src="assets/hero.webp?v=2" alt="surf photograph for TIDE" width="1536" height="1024" fetchpriority="high"></div></section>
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
.tide{
  padding: 40px 4.2%;
}
.tide-heading{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.tide-heading .giant-word{
  font-size: 24vw;
}
.tide-heading h1{
  font-size: 57px;
  max-width: 430px;
}
.tide-image{
  height: 380px;
  margin-top: 30px;
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
.hero .button{
    margin-top: 25px;
  }
.tide{
    padding: 35px 22px;
  }
.tide-heading{
    display: block;
  }
.tide-heading .giant-word{
    font-size: 43vw;
  }
.tide-heading h1{
    font-size: 59px;
    margin-top: 35px;
  }
.tide-image{
    height: 420px;
  }
}
.hero .button{
  animation-delay: 0s !important;
}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Plan a lesson.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="surf"><label>Your experience<select name="level"><option value="First time">First time</option><option value="Finding my feet">Finding my feet</option><option value="Confident">Confident</option></select></label><label>People<input name="guests" type="number" min="1" max="6" value="1" required></label><label>Preferred date<input type="date" name="date" required></label><button class="button" type="submit">Prepare my plan <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
surf: (v) => {
    if (!futureDate(v.date))
      return message('Please choose a lesson date today or later.');
    const lessons = {
      'First time': ['First Wave', 65],
      'Finding my feet': ['Find Your Line', 85],
      Confident: ['Open Session', 95],
    };
    const [lesson, price] = lessons[v.level];
    plan([
      `Recommended session: ${lesson}`,
      `${v.guests} ${count(v, 'guests') === 1 ? 'person' : 'people'} / ${v.date}`,
      `Illustrative group total: ${dollars(price * count(v, 'guests'))}`,
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
  "subject": "surf",
  "source_page": "https://www.pexels.com/photo/surfer-on-wave-10112820/",
  "author": "Dalton Douglas",
  "image_url": "https://images.pexels.com/photos/10112820/pexels-photo-10112820.jpeg?cs=srgb&dl=pexels-douglasphotography-10112820.jpg&fm=jpg",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "width": 5472,
  "height": 3648
}

The imagery is used for a fictional design concept. No endorsement by depicted people, photographers or brands is implied.

Secondary image 1
{
  "site_slug": "surf",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/photograph-of-surfboards-on-the-sand-13763517/",
  "image_url": "https://images.pexels.com/photos/13763517/pexels-photo-13763517.jpeg?cs=srgb&dl=pexels-leon-kohle-3158283-13763517.jpg&fm=jpg",
  "author": "Leon Kohle",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "surfboards beach",
  "width": 6000,
  "height": 3376
}

Secondary image 2
{
  "site_slug": "surf",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/sea-waves-in-close-up-photography-5116194/",
  "image_url": "https://images.pexels.com/photos/5116194/pexels-photo-5116194.jpeg?cs=srgb&dl=pexels-nayla-charo-3181636-5116194.jpg&fm=jpg",
  "author": "Nayla Charo",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "ocean breaking waves",
  "width": 4000,
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
