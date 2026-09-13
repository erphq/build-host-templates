# PARALLAX — complete website build prompt

Build an independent intelligence-and-design studio with a cinematic inward journey toward a black hole, using the supplied original astronomical illustration. The visual is an art-directed experience, not a scientific relativity simulator.

## Visual direction, composition and working behavior

Use nearly black space, warm ivory type and restrained copper highlights. The initial scene has a modest letterspaced brand, a compact pale navigation pill, a motion pause control, and short centered display copy: “BEYOND / THE KNOWN.” Use natural letter proportions and enough breathing room above the luminous disk. Avoid the earlier long, stretched split headline, noisy blue tunnel and flat Saturn-like concentric rings.

Use the supplied blackhole.webp, whose luminous turbulent disk bends over and beneath a deep central shadow. The camera-like zoom must actually run in WebGL. A ShaderMaterial samples the texture around a focal point inside the upper dark shadow, enlarges it as scroll progress increases, adds a small lens/roll displacement, and transitions into dark space after crossing. The source implementation contains the intended uniforms, focal point and interpolation. Keep the render scene and camera in their own variables; WebGLRenderer does not have an Object3D userData container. Verify that rendering succeeds rather than silently judging the poster image as a working effect.

Provide four chapter controls: Approach, Orbit, Event horizon and Beyond. Clicking a chapter seeks to its corresponding scroll position. The close-orbit state must visibly enlarge the luminous arch; the horizon passes outside the viewport as the view enters darkness. The final scene reveals “LOOK AGAIN. / THERE’S MORE.” with quieter clickable perspective labels around it. The labels open original explanatory dialogs for unseen connections, human intuition, creative intelligence and ideas with gravity. Hidden scene controls must also be inert so they cannot intercept keyboard focus or pointer actions.

Maintain a static poster fallback, truthful initialization failure handling, pause control and reduced-motion behavior. The user can skip the visual journey to the final perspective. Keep normal document scrolling and a complete closing studio section. The project dialog accepts a name, a question, and a direction, validates the fields and downloads a starting brief without sending data anywhere. No observational data or physical black-hole accuracy is claimed.

## Deliverable and implementation discipline

Use the included completed website as the implementation reference. Preserve its independent brand, copy, original assets, and real interactions. This specification documents that completed work; do not treat it as permission to copy an unrelated reference website. If adapting the template for another brand, create an independent identity and obtain suitable assets rather than silently retaining names, factual claims or third-party marks.

The `site/` directory is a portable static website. Keep resource URLs relative so it works beneath the catalog's preview path and when the folder is served independently. Preserve stable section IDs, label associations, focus visibility, semantic buttons and links, image dimensions, and descriptive alt text. Use textContent or safe DOM construction for user-provided values. Do not add analytics, credentials, private research archives, account access, fake integrations, or backend requests to a local-only demonstration.

Where the package includes `source/`, `package.json` and a lockfile, edit the readable source and run the existing build command to refresh the distributed bundle under `site/`. Preserve pinned dependency versions and their licenses. For other entries, edit the supplied readable HTML, CSS and JavaScript directly. Avoid a framework migration merely to rebuild a static page. Do not rewrite minified dependency code by hand.

## Responsive behavior and accessibility

Inspect the actual rendered site at a normal desktop width, 390 pixels and 320 pixels. Reserve image space to avoid layout shifts; confirm that every font, illustration, model and decoder loads. Do not shrink body text until it becomes unreadable to preserve desktop geometry. Collapse navigation, controls and editorial grids deliberately. Keep essential copy and actions outside clipping layers, and inspect italic descenders and transformed display lettering as rendered glyphs.

Exercise keyboard navigation, selected states, focus restoration, native form validation, dialog Escape behavior and all primary actions. Motion should reinforce the composition or communicate a state change. Pausing animation must not disable the rest of the site, and reduced-motion users must have a coherent usable version. Never expose hidden panels to focus. Check initial, loading, completed, reset and failure states where they apply.

## Assets, provenance and publication

Use the exact included images and fonts for reconstruction. The image-generation briefs below are the project's original asset briefs where available; they are not prompts taken from third-party reference creators. Keep all supplied copyright, font and model licenses. The repository license does not replace third-party asset licenses. The Porsche model in SUNDAY retains its creator attribution and CC BY-SA 4.0 terms, including for adaptations.

The public template detail page is the searchable canonical landing page. The separate preview copy is marked noindex by the catalog build; do not ship that preview-only noindex setting to a user's final custom website. Give an independently deployed site its own meaningful title, description, favicon and canonical URL when the target domain is known. Keep private configuration and development paths outside public packages. Deploy with the existing build.host workflow and retain the Made with Proto badge when the owner requests it. Never invent a live URL or report a pending deployment as successful.

## Acceptance checklist

The page loads from a nested preview URL and as a standalone static directory. Every local asset resolves. The main interaction runs to its actual completion, can be replayed or reset where appropriate, and reports truthful status. Small-screen controls do not overlap. No external transaction or message is implied by a local download. All source files needed to reproduce the behavior and all relevant asset credits are present. Verify the resulting page in a browser; successful compilation alone does not prove a working visual experience.


## Original asset-generation briefs

### blackhole cinematic prompt

Use case: ads-marketing.
Asset type: original ultra-photoreal astronomical VFX landscape image for a cinematic website, not a webpage, UI mockup, film screenshot, or recreation of a specific film frame.
Primary request: Wide 16:9 cinematic physically inspired black hole, ideally 2048x1152. An enormous perfectly black central shadow at the exact center, with diameter approximately 32 percent of the frame height. A luminous turbulent ivory-gold accretion disk is viewed nearly edge-on. Its far side is gravitationally lensed into a large magnificent arch ABOVE the shadow, while a thinner lower lensed arc bends below the shadow. A brilliant thin horizontal foreground disk crosses low across the black shadow. The disk extends across approximately 90 percent of the frame width.
Visual detail: ultra-photoreal astronomical visual-effects sophistication, fine turbulent gaseous filaments and irregular plasma texture rather than solid surfaces, strongly asymmetric brightness, subtle warm glow, restrained bloom, convincing extreme gravitational lensing and immense scale.
Composition and environment: deep almost-black surrounding space with sparse fine stars; large very dark negative space across the top for website typography that will be added later. The shadow remains truly black and cleanly legible. The composition feels like a massive luminous gravitational phenomenon in deep space.
Constraints: one completely original image. NO concentric Saturn rings, NO planet, NO blue cloud tunnel, NO labels, NO text, NO UI, NO watermark, NO film assets. Do not depict solid nested elliptical orbital bands. Generate exactly one landscape image.


## Included file map

- `ASSET-PROMPTS.md`
- `package.json`
- `site/app.js`
- `site/assets/THREE-LICENSE.txt`
- `site/assets/fonts/BODONI-LICENSE.txt`
- `site/assets/fonts/DMSANS-LICENSE.txt`
- `site/brand-icon.svg`
- `site/index.html`
- `site/site.webmanifest`
- `site/styles.css`
- `source/main.js`
- `template.json`
