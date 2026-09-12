# PACE / Athletic typographic poster

## The brief
Build a complete, original, production-quality responsive website for PACE: A running club with race-poster typography and a useful pace calculator. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Find your next gear.”. The primary action is “Find your pace”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is athletic typographic poster. The defining composition is diagonal-free poster hero, club session list, training philosophy, distance calculator, event sign-up. Use the three brand colors #e8e7e2, #232c24, #436339 as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
A running club for your kind of fast. Compose the hero according to the pace reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Run with us”, and “Find your pace”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Find your next gear.”. Supporting copy: “A running community for early starts, easy miles, and the days you surprise yourself.”.
2. Brand story: “Progress has many paces.”. Copy: “Some days you chase a time. Some days you just get out the door. Both count. Explore the sample weekly sessions and find a run that meets you where you are.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Run with us: 1) Easy Miles / All levels: Tuesday / conversational group run. 2) Track Night / Intermediate: Thursday / intervals, warm-up, and a proper cool-down. 3) The Long Way / All levels: Sunday / a longer route with a coffee stop.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “Do I need to be fast?” Answer: “No. Easy sessions are designed for a conversational effort and a welcoming group.” “How is pace calculated?” Answer: “Your target finish time is divided by the distance. The result is a planning number, not a personalized training recommendation.” Use native disclosures or an accessible accordion.
5. Interactive experience: calculate pace from race distance and target time; filter sessions by level; save a demo session. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full pace interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged running image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone running composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use headline slide, session highlights on hover, calculated result entrance. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like PACE, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
Use muscular uppercase display type in the left half of a split hero, around 9vw at desktop with .92 line-height. The right half is a tall action photograph. Avoid italic distortion or diagonal container clipping. The session section should feel like a club noticeboard, with clear day and level information.

The hero supporting copy is exactly: “A running community for early starts, easy miles, and the days you surprise yourself.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “Every pace has a place.”. Supporting text: “The best session is the one that meets you where you are. Run easy together, build confidence, and leave room for the next day.”. Caption: “Show up. Find your rhythm.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the panorama layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
Convert target time to seconds: (hours × 60 + minutes) × 60. Divide by distance in kilometers (5, 10, 21.0975, or 42.195), round to the nearest second, then show floor(seconds/60):seconds%60 padded to two digits per km. Reject a total time of zero.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
A typographic entrance establishes momentum. The pace result updates on intentional submit. Save-state feedback changes immediately and is announced.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero pace"><div class="pace-title"><p class="small-label">A running club for your kind of fast</p><h1>Find your next gear.</h1><a class="button" href="#experience">Find your pace <span aria-hidden="true">↗</span></a></div><div class="pace-photo"><img class="hero-image" src="assets/hero.webp?v=2" alt="running photograph for PACE" width="1536" height="1024" fetchpriority="high"><span>EVERY PACE<br>HAS A PLACE.</span></div></section>
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
.pace{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 4.2%;
  gap: 50px;
}
.pace-title{
  align-self: center;
}
.pace-title h1{
  font-size: clamp(66px, 9vw, 135px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.92;
}
.pace-photo{
  height: 610px;
  position: relative;
}
.pace-photo span{
  position: absolute;
  bottom: 25px;
  left: 25px;
  color: #f0f4e8;
  font-size: 28px;
  line-height: 1;
  font-weight: 650;
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
.pace-photo{
    height: 520px;
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
.pace{
    grid-template-columns: 1fr;
    padding: 45px 22px;
    gap: 35px;
  }
.pace-title h1{
    font-size: 83px;
    max-width: 370px;
  }
.pace-photo{
    height: 470px;
  }
}
.pace-title h1{
  font-family: Poster, Geist, sans-serif;
  font-weight: 700;
  letter-spacing: -0.035em;
}
.pace-title h1{
  font-size: clamp(80px, 11vw, 165px);
}
.hero .small-label{
  font-weight: 500;
}
@media (max-width: 700px){
.pace-title h1{
    font-size: 100px;
  }
}
.pace-photo span{
  background: #16261f99;
  padding: 12px 15px;
}
.hero .button{
  animation-delay: 0s !important;
}
@media (max-width: 700px){
.pace-photo span{
    font-size: 23px;
  }
}
@media (max-width: 700px){
.pace-title h1{
    font-size: clamp(62px, 21vw, 82px);
  }
}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Find your pace.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="pace"><label>Distance<select name="distance"><option value="5">5 km</option><option value="10">10 km</option><option value="21.0975">Half marathon</option><option value="42.195">Marathon</option></select></label><label>Target hours<input name="hours" type="number" min="0" max="12" value="0" required></label><label>Target minutes<input name="minutes" type="number" min="0" max="59" value="30" required></label><button class="button" type="submit">Calculate pace <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div><div id="saved-list" class="saved-list" aria-live="polite"></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
pace: (v) => {
    const time = count(v, 'hours') * 60 + count(v, 'minutes');
    if (time <= 0)
      return message('Enter a target finish time greater than zero.');
    const pace = Math.round((time * 60) / count(v, 'distance'));
    message(
      `Target pace: ${Math.floor(pace / 60)}:${String(pace % 60).padStart(2, '0')} / km\nDistance: ${v.distance} km\nFinish time: ${v.hours}h ${v.minutes}m\n\nUse this as a planning reference and adjust effort to your fitness and conditions.`,
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
  "slug": "pace",
  "prompt": "Athletic adult runner in dark olive technical running clothes on coastal asphalt, dynamic side profile, sunlit grey stone backdrop, stylish performance campaign. Vertical 1024x1536. No race bibs, no logos or text. Motion hinted but sharp main subject. Photorealistic editorial sports campaign, authentic athletic running posture.",
  "generation_tool": "Built-in image generation",
  "provenance": "Original AI-generated campaign asset",
  "width": 1024,
  "height": 1536
}

Secondary image 1
{
  "site_slug": "running",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/close-up-of-a-pair-of-running-shoes-13525579/",
  "image_url": "https://images.pexels.com/photos/13525579/pexels-photo-13525579.jpeg?cs=srgb&dl=pexels-arturoaez225-13525579.jpg&fm=jpg",
  "author": "Arturo A\u00f1ez.",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "running shoes detail",
  "width": 2667,
  "height": 4000
}

Secondary image 2
{
  "site_slug": "running",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/hands-on-starting-line-12659362/",
  "image_url": "https://images.pexels.com/photos/12659362/pexels-photo-12659362.jpeg?cs=srgb&dl=pexels-boom-12659362.jpg&fm=jpg",
  "author": "BOOM \ud83d\udca5 Photography",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "runners track",
  "width": 5142,
  "height": 3428
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
