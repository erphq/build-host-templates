# SUNDAY — complete website build prompt

Build an independent automotive atelier around the supplied Porsche 911 Carrera 4S model. Preserve the real geometry, opening doors and front bonnet, claret materials, and the distinction between an illustrative workshop brief and an actual booking.

## Visual direction, composition and working behavior

The opening composition uses a pale studio surface, a small Sunday wordmark at upper left, a compact dark pill navigation centered above the scene, and a quiet project-planner action at upper right. The two-line uppercase headline is “AN ICON. / FOR LIFE.” Use the supplied Bodoni Moda display faces and DM Sans interface faces. The display is tall, with a controlled narrow treatment; body and controls retain natural proportions. Keep the Porsche large in the lower-right area, with separate caption, paint choices, opening controls, and front/profile/rear camera presets. Do not place essential writing over the vehicle.

Use Three.js with a perspective camera, image-based studio reflections, shadow receiver, and tone mapping. The supplied GLB is already segmented into DoorLeftHinge, DoorRightHinge, and BonnetHinge. Rotate doors around their vertical hinge axes and the bonnet around its horizontal hinge; preserve each node's initial quaternion. Use the real compressed model and packaged Draco decoder files. Avoid the old two-image restoration wipe. The scroll journey turns the camera and opens the panels; explicit Open/Closed controls override automatic opening. Explore in 360° enables drag orbit, with keyboard left/right rotation and named angle presets. Claret, silver, and carbon buttons update materials with accurate selected states. Pause and reduced-motion handling must work, including while the page scrolls. Model loading must show useful progress, and initialization/load failures must show the supplied Porsche poster.

After the showroom, build the details section using real model renders of the light, rear quarter and wheel. Three controls replace the image, caption, and decorative word together. Follow with “Care, in every detail.” This is a substantial colored section, not a generic feature-card row. Body & character selects coral-red paint imagery; The world inside selects deep wine and the leather material study; Back to the road selects pale warm stone and wheel imagery. Hover on a mouse and click/touch both select a service. Maintain accessible vertical tabs, arrow-key navigation, selected state, and the selected scope when opening the project dialog.

Close with the supplied original coastal-road composition, “Take the long way.”, a working project-brief action, and an oversized Sunday footer. Retain the Porsche creator and CC BY-SA license credit. The leather image is a material study, not a claim about the model's actual cabin. The planner keeps name, car, scope choices, and story fields. Require the appropriate inputs, reject an empty scope selection, and generate a UTF-8 text download on the device. It must not submit enquiries.

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

### coastal road prompt

Use case: ads-marketing.
Asset type: original photographic landscape asset for the finale of an automotive website, not a webpage or UI mockup.
Input image: subject reference only for the claret red Porsche 911 Carrera 4S (991 generation), including its body shape and paint finish. Create an entirely new photographic scene.
Primary request: An atmospheric wide 16:9 photograph, ideally 2048x1152, showing a rear three-quarter view of this claret Porsche 911 Carrera 4S on a sweeping quiet coastal mountain road.
Scene: huge cinematic landscape scale, dark olive cypress trees, warm pale limestone mountain terrain, and distant hazy sea. Low morning sun with filmic contrast and convincing natural material detail.
Composition: position the complete car in the bottom-right third, facing along the winding road into the landscape; retain generous darker negative space in the upper and left parts for light webpage typography that will be added later. Road geometry and the vehicle's perspective must be physically credible.
Style: refined real automotive campaign photography with subtle film texture, natural optical depth, beautiful restrained highlights and deep olive shadows.
Constraints: preserve recognizable 911 991 body proportions and claret red finish. No rendered webpage, UI, captions, typography, text, watermark or invented logos. No other vehicles or people. Deliver exactly one photograph.


### leather detail prompt

Use case: product-mockup.
Asset type: original photoreal automotive upholstery material study for a luxury automotive interior-care service section; photograph only.
Primary request: A close-up macro composition of a deep oxblood leather sports-car seat bolster with precise double saddle stitching, fine natural leather grain, a subtly curved perforated leather inset, and a small glimpse of satin metal trim.
Composition: landscape 4:3 or a wide landscape suitable for a 500x310 crop. The upholstery fills the frame edge to edge. Sculptural seat-bolster curves, stitching, perforations and leather texture are the subjects. Keep the composition tight with no complete cabin visible.
Style and lighting: luxury editorial photography, highly convincing tactile material detail, dramatic large-softbox lighting, rich dark wine shadows and warm ivory highlights, elegant restrained contrast.
Constraints: entirely original image, modern sports-car upholstery without claiming any particular manufacturer's cabin. No complete interior, no steering wheel, no logo, no text, no watermark, no people. Exactly one image.


## Included file map

- `ASSET-PROMPTS.md`
- `package.json`
- `site/app.js`
- `site/assets/ATTRIBUTION.txt`
- `site/assets/DRACO-LICENSE.txt`
- `site/assets/THREE-LICENSE.txt`
- `site/assets/draco/draco_wasm_wrapper.js`
- `site/assets/fonts/BODONI-LICENSE.txt`
- `site/assets/fonts/DMSANS-LICENSE.txt`
- `site/brand-icon.svg`
- `site/editorial.css`
- `site/fonts.css`
- `site/index.html`
- `site/showroom.css`
- `site/showroom.js`
- `site/site.webmanifest`
- `site/styles.css`
- `source/showroom.js`
- `template.json`
