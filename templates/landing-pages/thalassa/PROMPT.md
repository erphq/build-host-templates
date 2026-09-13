# THALASSA — complete website build prompt

Build an original illustrated Mediterranean travel-inspiration site with a classical terrace composition, three editable day moods and a local itinerary download. The places and day plans are imaginative starting points, not bookable packages.

## Visual direction, composition and working behavior

Use the supplied terrace illustration: ivory limestone arches, orange boughs, intricate cobalt mosaic, a turquoise sea and a distant island temple. Keep the left area quiet enough for the large “A JOURNEY / WORTH / TELLING.” headline. Use Marcellus for classical display lettering and a simple local sans for functional text. The palette is ivory, cobalt and restrained orange. Keep the source illustration's light and fine ornamental detail rather than adding photoreal stock photography.

The hero includes the small brand, spirit/journey navigation, a clear passage CTA, brief supporting copy, and a compact Mediterranean caption. On desktop the typography and scene share one composition. On mobile let the image continue below the writing, with enough ivory scrim behind body copy and links. Navigation must remain readable against the orange foliage; do not place tiny dark links directly on a busy image without a suitable surface.

The spirit section explains curiosity, detours, and unhurried travel with readable editorial copy. The main journey section is a substantial cobalt surface. Provide three accessible tabs: By the sea, Among old stories and Without a hurry. Each changes the day title, topic line, three moments, and the image framing. The source contains exact morning, afternoon and last-light suggestions. The corresponding selected tab, tab-panel labeling, keyboard left/right handling, and Home/End navigation must remain synchronized.

Let the visitor optionally enter a place they have in mind. Keep this day downloads the current mood, place, and exact three suggestions as UTF-8 text. Change the confirmation only after preparing the file. No booking, enquiry, payment, available-room claim, map lookup, or transport recommendation is implied. Re-selecting a mood clears stale save confirmation without discarding the entered place.

Finish with the framed postcard composition and a large THALASSA footer. The postcard has its own message about leaving space for wonder and a link back to imagining another day. Use restrained scroll movement and honor reduced motion. Preserve complete source, the original illustration and font licenses.

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

### hero prompt

Use case: illustration-story.
Asset type: original wide horizontal hero illustration for THALASSA, an illustrated Mediterranean journey website. Create the artwork alone, not a website mockup.
Primary request: An original colonnaded Mediterranean terrace with cream limestone arches, an intricate cobalt mosaic floor, flowering mandarin and orange boughs above, and a view toward a calm turquoise sea and a distant ancient island temple.
Style: grand luminous travel-editorial classical illustration on pale ivory paper, exceptionally fine illustrative detail, delicate gold ink linework, painterly stippling, rich cobalt mosaics, orange-gold foliage and fruit, elegant Greek architecture. Clearly illustrated rather than photorealistic.
Composition: wide 16:9 landscape, ideally 2048x1152. Architecture, arched colonnade, detailed cobalt mosaic and foliage occupy the RIGHT two-thirds. The LEFT third is mostly quiet light ivory sky or a softly illuminated quiet ivory wall, generously open for a headline that will be added later. The sea and island temple are visible through the colonnade. Warm daylight with graceful architectural depth and spacious travel-editorial beauty.
Constraints: entirely new original composition. No people, weapons, text, lettering, logos, watermark, website UI or typography. Do not use or recreate any source image. Generate exactly one landscape image.


## Included file map

- `ASSET-PROMPTS.md`
- `site/app.js`
- `site/assets/fonts/DISPLAY-LICENSE.txt`
- `site/assets/fonts/DMSANS-LICENSE.txt`
- `site/brand-icon.svg`
- `site/fonts.css`
- `site/index.html`
- `site/site.webmanifest`
- `site/styles.css`
- `template.json`
