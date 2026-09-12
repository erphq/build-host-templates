# FORMA / Architectural editorial

## The brief
Build a complete, original, production-quality responsive website for FORMA: A coastal architecture practice, framed through monumental imagery and precise editorial typography. This is a fictional brand concept. Use the supplied HTML demo as the working reference, and turn this specification into a complete website, not a single hero or a screenshot. The primary headline is exactly “Spaces for a slower life.”. The primary action is “Plan a project”. The audience should immediately understand what this brand offers and have a useful way to explore it. Do not imply that the fictional business is operating or that an order, booking, or message has been sent.

## Art direction
The visual language is architectural editorial. The defining composition is oversized wordmark, full-bleed landscape, offset project index, material study, project inquiry. Use the three brand colors #eef0ed, #242b28, #39614a as the page background, foreground, and accent respectively. Build a deliberate type hierarchy: a confident display headline, short readable descriptions, compact labels, and clear action text. Use locally hosted Geist for sans-serif text; for explicitly editorial hospitality, dining, craft, or magazine treatments, use a restrained Georgia display face. Keep display letter spacing around -0.04em to -0.065em and body copy at 16px or larger. Do not copy MotionSites branding or use its prompt text. Keep a single consistent theme throughout the page.

## First viewport
Independent architecture practice. Compose the hero according to the forma reference with the supplied image and headline. Use purposeful negative space rather than extra slogans. Ensure the headline, useful context, and primary action are visible on a normal laptop. Use clamp-based type sizing and preserve image focal points. The navigation contains “Our approach”, “Selected spaces”, and “Plan a project”, each linking to a real section. A mobile menu must open, close, announce its state, and remain keyboard accessible.

## Complete content and page flow
1. Hero: “Spaces for a slower life.”. Supporting copy: “Considered homes and shared spaces, shaped by light, landscape, and the way you live.”.
2. Brand story: “Room to breathe.”. Copy: “We design homes around the things that endure: good light, honest materials, and a deep connection to place. Every project begins by listening to the landscape.”. Use a different layout rhythm from the hero and allow the prose to breathe.
3. Selected spaces: 1) Cove House / Residential: A courtyard home opening onto the coast. 2) Pine Retreat / Retreats: A small retreat among mature pines. 3) Gathering Hall / Public: A generous room for a changing community.. Use the relevant project, product, article, or service presentation. Detail buttons must reveal meaningful content in an accessible dialog; never leave dead links.
4. Questions: “How does a project begin?” Answer: “With a conversation about your site, the way you live, and what you hope to build. The project planner below helps you put those ideas into words.” “Do you work with existing buildings?” Answer: “Yes. Thoughtful adaptations and additions are part of this concept practice.” Use native disclosures or an accessible accordion.
5. Interactive experience: filter projects by Residential, Retreats, and Public; open project details; prepare a project inquiry. Include labels, validation, result feedback, and the ability to change a choice and recompute.
6. Footer: brand wordmark, asset credits, return to the collection, motion control, and a discreet statement that this is an original fictional concept.

## Functional contract
Implement the full projects interaction, not a decorative form. Use the included demo’s behavior and calculations as the baseline. Validate numeric ranges and date ordering before producing a result. Show all prices as illustrative sample prices. Any simulated reservation or inquiry must explicitly say that nothing was submitted. Local cart and saved selections should survive a reload when browser storage is available; handle unavailable or invalid local storage gracefully. Provide add/remove behavior where applicable. Do not build a fake checkout, collect payment details, or invent a backend connection. The main call to action must lead to the experience form on this page.

## Images and assets
Use assets/hero.webp, a locally packaged architecture image. Read assets/CREDITS.txt for actual source, photographer, reuse license, or original generation provenance. Keep this provenance with derivatives. Do not hotlink paid, inaccessible, or random images. Avoid inventing additional product photos. Repeated crops should be treated as visual studies of the supplied image, not evidence of separate real projects. Reserve intrinsic width and height, preload the hero, and lazy-load lower images. Include the locally hosted font and its license. If producing a new image, use a clean standalone architecture composition with no website text, watermark, or UI chrome; match the palette and the visual purpose of the supplied asset.

## Motion and interaction design
Use image reveal, project hover pan, staggered section entrance. Every movement must communicate hierarchy, content arrival, selection feedback, or a change of state. Favor transform and opacity; avoid scrolling event loops, flashing, layout-shifting entrances, and decorative effects that obstruct reading. Honor prefers-reduced-motion and provide a pause control for automatic motion. Hover treatments need matching focus treatments. Do not hide necessary content until an animation executes.

## Responsive and accessible delivery
At wide sizes, use the intentional composition described above. At tablet sizes, reduce large type and simplify multi-column regions. Below 700px, collapse complex layouts into a clear single column, keep 22px side gutters, show the accessible mobile navigation, and ensure forms use the available width. Avoid horizontal overflow at 320px, 390px, 768px, and 1440px. Preserve readable controls under text zoom. Use semantic header, nav, main, section, form, label, button, and footer elements; one h1; ordered heading levels; visible focus; descriptive alt text; sufficient color contrast; an aria-live result; and native dialog dismissal with Escape. Test both manual theme states.

## Deliverables and acceptance
Deliver the complete working site with all sections, assets, interaction code, and source. A standalone index.html with packaged local assets is preferred for portability. There must be no TODOs, empty placeholder blocks, broken asset URLs, inert buttons, inaccessible dialogs, or unacknowledged remote dependencies. Verify filters, dialogs, form validation, calculations, local persistence, menu behavior, reduced motion, and downloads. State any remaining limitations honestly. The result should feel like FORMA, with its own composition and point of view, rather than a generic template with a renamed heading.

## Site-specific composition: the actual decisions
At 1440px, the wordmark is a near-full-width 300–340px typographic structure. A 22px utility rail precedes it. The landscape begins immediately below the wordmark, with a low-set 64px two-line headline and a single contrasting CTA. Place the secondary material image in a narrow portrait column beside a much larger exterior image. Keep the project list spacious and architectural; avoid rounded cards.

The hero supporting copy is exactly: “Considered homes and shared spaces, shaped by light, landscape, and the way you live.”. This replaces any gallery description that discusses the design itself. End-user copy must describe the brand offering, not announce the art direction.

## Secondary editorial spread
Heading: “A study in light and material.”. Supporting text: “A home begins with its setting. Orient the rooms toward the changing light; let the threshold hold the transition.”. Caption: “Light, mass, and the spaces between.”. Use two distinct local images, assets/detail-1.webp and assets/detail-2.webp. Do not repeat the hero image throughout the page. The spread belongs between the brand story and collection; it should broaden the visual narrative. Follow the diptych layout in the reference. At desktop, use unequal image sizes or staggered baselines appropriate to that family. At mobile, stack in reading order, preserve crop quality, and keep captions connected to their images.

## Exact functional rules
No financial estimate is calculated. Gather type (Residential, Retreats, Public), phase, and a required 600-character maximum project description. Return those values and the next-step guidance as plain text.

Empty state: explain what the user can choose without fabricating a result. Editing state: allow native controls and preserve related values. Invalid state: keep the form values, show a specific recoverable validation message, and do not alter the cart or saved list. Success state: expose a readable result in the live region and clearly distinguish a local demonstration from a real external transaction. Repeated submit must be safe: calculators replace their result; cart additions are intentional new items; saved-list toggles do not create duplicates.

## Motion choreography
The project photography enters with a 20px rise over 750ms. The large masthead stays still so the architecture owns the movement.
Use the entrance easing cubic-bezier(.16,1,.3,1) for title and section transitions. Hero headline duration 850ms; CTA duration 900ms with 150ms offset. Use a 750ms section entrance with 20–22px translation. Hover image scale may reach 1.035 over 600ms. Button hover translates upward by no more than 3px over 250ms. Avoid animating width, height, padding, or top/left. The complete page remains readable if IntersectionObserver is absent or animation is disabled. Prefer native CSS scroll timelines for optional image stories; do not hijack scrolling.

## Responsive geometry and layout invariants
The wide content container is 1440px with 60px desktop side padding, reduced to 35px near 1050px and 22px below 700px. Main navigation height is 88px wide and 72px narrow. The navigation switches to a menu only on narrow screens. Story and experience sections use two columns with up to 80px gaps; collapse them below 700px. Introductory and editorial sections are separated by 65–120px depending on viewport. Controls retain a usable hit target and visible labels. Inputs may not force grid min-content overflow; use min-width:0 on the owning grid children. Never use negative margins that push text outside its clipping ancestor.

At 320px, 390px, 768px, 1050px, and 1440px, verify the longest headline and the longest CTA. If a title wraps into an accidental third line, adjust its width and font clamp within its intended type hierarchy. Do not shrink body text to compensate. On a small laptop, the primary action must be reachable and the visual narrative must remain obvious. On mobile, prioritize the headline, useful context, and action before decorative detail.

## Semantic hero markup reference
Use this hierarchy as a precise starting point. Preserve the content and layout roles while adapting to your chosen framework.

```html
<section class="hero forma"><div class="hero-top"><span>Architecture, in good company.</span><span>Homes · Retreats · Shared spaces</span></div><div class="giant-word">FORMA</div><div class="image-stage"><img class="hero-image" src="assets/hero.webp?v=2" alt="architecture photograph for FORMA" width="1536" height="1024" fetchpriority="high"><div class="image-caption"><h1>Spaces for a slower life.</h1><a class="button" href="#experience">Plan a project <span aria-hidden="true">↗</span></a></div></div></section>
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
.hero-top{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 22px 4.2%;
}
.forma > .giant-word{
  font-size: 23.7vw;
  text-align: center;
  padding: 12px 2% 22px;
}
.image-stage{
  position: relative;
  height: 560px;
}
.image-caption{
  position: absolute;
  inset: auto 4.2% 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #fff;
}
.image-caption h1{
  font-size: 64px;
  max-width: 500px;
  text-shadow: 0 2px 30px #14241dcc;
}
.image-caption .button{
  background: #f0f1eb;
  color: #24332c;
  border-color: #f0f1eb;
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
.hero-top{
    font-size: 9px;
    padding: 20px 22px;
    gap: 20px;
  }
.hero-top span:last-child{
    display: none;
  }
.forma > .giant-word{
    font-size: 23vw;
    padding-bottom: 20px;
  }
.image-stage{
    height: 550px;
  }
.image-caption{
    left: 22px;
    right: 22px;
    bottom: 30px;
    display: block;
  }
.image-caption h1{
    font-size: 50px;
    max-width: 330px;
  }
}
.forma{
  display: flex;
  flex-direction: column;
  height: calc(100svh - 88px);
  min-height: 680px;
}
.forma > .giant-word{
  font-size: min(23.7vw, 32svh);
}
.forma .image-stage{
  height: auto;
  min-height: 330px;
  flex: 1;
}
.forma .image-caption{
  bottom: 28px;
}
.forma .image-caption h1{
  font-size: 54px;
  max-width: 440px;
}
.forma .image-stage::after{
  content: '';
  position: absolute;
  inset: 40% 0 0;
  background: linear-gradient(transparent, #0f231c80);
  pointer-events: none;
}
.forma .image-caption{
  z-index: 1;
}
.hero .button{
  animation-delay: 0s !important;
}
@media (max-width: 700px){
.forma{
    height: auto;
    min-height: 0;
  }
.forma > .giant-word{
    font-size: 23vw;
  }
.forma .image-stage{
    height: 550px;
    flex: auto;
  }
.forma .image-caption h1{
    font-size: 48px;
    max-width: 310px;
  }
}

```

## Interactive section markup reference
The following controls and result regions are required. Maintain their names if reusing the reference interaction handler. Replace a native control only with an equally accessible component.

```html
<section class="experience wrap reveal" id="experience"><div class="experience-heading"><p class="small-label">TRY IT FOR YOURSELF</p><h2>Plan a project.</h2><p>Explore this interactive concept. Choices stay on your device; no booking, order, or message is sent.</p></div><div class="configurator"><form id="experience-form" data-kind="projects"><label>Project type<select name="type"><option value="Residential">Residential</option><option value="Retreats">Retreats</option><option value="Public">Public</option></select></label><label>Where are you now?<select name="phase"><option value="Exploring possibilities">Exploring possibilities</option><option value="Site acquired">Site acquired</option><option value="Ready to brief">Ready to brief</option></select></label><label>Your project in a sentence<textarea name="notes" placeholder="A light-filled home close to the coast" maxlength="600" required></textarea></label><button class="button" type="submit">Prepare my plan <span aria-hidden="true">↗</span></button></form><div id="result" class="result" role="status" aria-live="polite" hidden></div></div></section>
```

## Reference interaction handler
The complete source includes shared helpers: plan(lines) renders a local-only summary; message(text) replaces the live result; count(values,key) converts a numeric input; dollars(value) formats USD; futureDate(value) checks against the local calendar date; renderBag() redraws the local cart; saveLocal() handles storage failures. This handler contains the site-specific decision logic. Keep the complete downloadable source alongside this prompt.

```javascript
projects: (v) =>
    plan([
      `${v.type} project / ${v.phase}`,
      v.notes,
      'Suggested next step: gather site photographs, a short brief, and your working budget.',
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
  "subject": "architecture",
  "source_page": null,
  "image_url": null,
  "author": "AI image generation",
  "license": "AI-generated original asset",
  "generation_tool": "Built-in image generation",
  "prompt": "Monolithic off-white concrete coastal villa, blue Mediterranean sea, hard sun, editorial architectural photograph, horizontal 1536x1024, no text.",
  "width": 1536,
  "height": 1024
}

The imagery is used for a fictional design concept. No endorsement by depicted people, photographers or brands is implied.

Secondary image 1
{
  "site_slug": "architecture",
  "position": 1,
  "source_page": "https://www.pexels.com/photo/house-with-swimming-pool-on-santorini-16771759/",
  "image_url": "https://images.pexels.com/photos/16771759/pexels-photo-16771759.jpeg?cs=srgb&dl=pexels-ihor-lypnytskyi-117692765-16771759.jpg&fm=jpg",
  "author": "Ihor Lypnytskyi",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "coastal house exterior",
  "width": 4000,
  "height": 5397
}

Secondary image 2
{
  "site_slug": "architecture",
  "position": 2,
  "source_page": "https://www.pexels.com/photo/minimalist-concrete-architectural-interior-36248805/",
  "image_url": "https://images.pexels.com/photos/36248805/pexels-photo-36248805.jpeg?cs=srgb&dl=pexels-yulia-shapereva-s-58861876-36248805.jpg&fm=jpg",
  "author": "Yulia Shapereva s",
  "license": "Pexels License",
  "license_url": "https://www.pexels.com/license/",
  "art_direction": "concrete minimalist interior",
  "width": 3024,
  "height": 4032
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
