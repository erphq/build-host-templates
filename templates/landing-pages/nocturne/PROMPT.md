# NOCTURNE — complete website build prompt

Build an illustrated night journal around the supplied original gold-engraved moon landscape, readable original essays, a real quiet-minute timer and an artwork download.

## Visual direction, composition and working behavior

The hero artwork shows a large crescent, gold-traced cloud banks, indigo mountains, a dark lake and a small observatory. Keep the dark left area available for the headline “For minds / that wander.” Cormorant Garamond handles display type; a simple local sans face handles controls. Use charcoal-blue, gold and warm ivory. Preserve the detailed engraved character of the image instead of adding unrelated cosmic or black-hole imagery.

The full-height first scene contains the wordmark, small journal/ritual/download navigation, a Still the sky toggle, the invitation to enter the journal, and three view controls. The whole sky, A little closer and Down to earth change the artwork's zoom and position and update the explanatory note. A small canvas star layer adds restrained twinkling. Pause stops its clock; reduced motion removes automatic animation. Mobile framing must retain the crescent and preserve headline contrast without cropping the text.

The journal has three original entries: The art of looking twice, Small beneath a larger sky, and A map without a destination. Their subjects are attention, perspective and wonder. Each opens an accessible reading dialog with its own complete prose, a close action, and Another page navigation. Keep essays readable and distinguish poetic writing from factual astronomical claims.

The ritual section includes an arched view of the landscape, a one-minute timer, a start/end button and a dimmer. The timer must use an actual elapsed-time deadline, not merely a decorative countdown. Render minutes and seconds correctly: the initial state is 01:00, not 00:60. Ending early resets the state; completion reads Welcome back and allows another minute. The dimmer adjusts only the illustration's darkness, keeping the timer and control legible.

Close with a clear artwork download and the NOCTURNE wordmark. The download must serve the supplied original WebP and use a sensible filename. Do not invent a subscription backend or request unnecessary personal information. These interactions are local, complete, and usable without accounts.

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
Asset type: original wide horizontal hero illustration for NOCTURNE, a visual journal of night and wonder. Create the artwork alone, not a website mockup.
Primary request: An original dark celestial landscape with a towering luminous crescent moon in the UPPER RIGHT, rolling indigo night mountains, charcoal clouds, intricate gold-etched cloud banks, and a tiny lakeside observatory in the LOWER RIGHT. The observatory is an understated astronomical dome beside a dark still lake.
Style: hand-engraved luminous illustrated tapestry, extraordinarily fine gold engraved and stippled linework, black, copper and ivory details, luminous multicolor star points, sweeping dotted contour lines through the night sky, sparse emerald and blue contours, rich layered ornamental celestial detail. This is an illustration, not photorealistic.
Composition: wide 16:9 landscape, ideally 2048x1152. Moon and the richest ornamental landscape detail on the right. Preserve quiet DARK negative space throughout the LEFT third for a headline to be overlaid later. Clouds and mountains create a coherent wide scene and atmospheric depth. Refined editorial art, intricate but restrained.
Constraints: entirely new original composition. No text, lettering, logo, watermark, website UI or typography. Do not use or recreate any source image. Generate exactly one landscape image.


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
