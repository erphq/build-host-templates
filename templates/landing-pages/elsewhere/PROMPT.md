# Elsewhere — complete website build prompt

Build a nature-led AI automation product demonstration with an original floating botanical archipelago and three prepared workflow examples. It is a working frontend demo, not a connection to email or an AI API.

## Visual direction, composition and working behavior

Use the supplied sea backdrop, transparent floating garden island, and transparent foreground foliage as three independent depth layers. The scenery is an original impossible botanical archipelago over a bright turquoise sea. Preserve actual alpha on foreground assets. Keep the interface's text and controls in clear areas of the composition and use the established green, cream, and pale botanical palette. Do not replace this scene with a flat scenic photo or reuse a reference site's imagery.

The scene uses gentle ambient movement, pointer depth and a scroll-driven chapter handoff. The heading finishes its transition even if scrolling stops mid-chapter. Pausing freezes ambient and camera movement without snapping the island to a different position. Reduced motion gives a coherent static composition and usable workflow controls. Constrain the layers separately from the reading and control regions so no animation carries important text or buttons off-screen.

Provide three selectable prepared workflows: meeting notes, inbox priorities and weekly updates. Meeting notes turn a sample product check-in into three next actions, including owners and timing. Inbox priorities distinguish the approval request from a newsletter and reference notes. Weekly updates show completed work and the remaining product-photography blocker. Selection changes the headline, source label, sample input, status, and result state together. All sample names and situations are illustrative.

Run example progresses through reading, organizing, and preparing states, then reveals the matching action rows. It disables itself while running and becomes Run again after completion. Use a run identifier so selecting another workflow cancels stale work: an earlier asynchronous sequence must never overwrite the newly selected example. Under reduced motion shorten the staged waits. Clear stale results when changing examples, keep status announcements concise, and ensure each row remains legible on phones. Never show a success message implying real mail was read, an account connected, or a message sent. Preserve the explicit sample-data disclosure.

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

### ASSET PROMPT

Asset A: sea-backdrop
Use case: stylized-concept
Asset type: original cinematic environment backdrop for an immersive animated website; standalone image only, not a website screenshot.
Create exactly ONE wide 16:9 high-resolution landscape image, preferably at least 2048 pixels wide.
Original world: impossible floating botanical islands above a turquoise inland sea. This particular BACKDROP contains no major foreground subject or floating island; it provides the open environment behind separately layered subjects.
Composition: luminous turquoise sea occupies the lower half. Distant misty mountainous islands lie along the far horizon at 55% height. Very pale airy blue sky above with soft wisps of clouds. Lower foreground left and right may have dark softly blurred tropical foliage at the very edges, while the central water stays entirely unobstructed.
Style: sophisticated cinematic stylized realism, tactile and detailed, almost believable, joyful wonder, soft bright daylight. Bright saturated greens on distant islands, cobalt and turquoise water, pale luminous blue sky. Depth and atmospheric haze, elegant natural details.
Avoid: major central subject, foreground floating island, text, UI, logos, watermarks, train, desk, glass dome, giant sprout.

Asset B: garden-island
Use case: stylized-concept
Asset type: original isolated subject layer for an immersive animated website, standalone transparent PNG.
Create exactly ONE high-resolution landscape image at approximately 3:2 aspect ratio. GENUINELY TRANSPARENT BACKGROUND with preserved alpha, not a white background or checkerboard illustration.
Subject: a large impossible floating garden island, sculpted as an elongated oval tilted in three-quarter perspective. Verdant richly textured grass, abundant tiny violet, blue and white wildflowers, lush small trees clustered toward the RIGHT. Cascading vines and delicate rocky roots form its visible underside. A simple elegant pale ivory ribbon walkway makes a graceful asymmetric loop over the top of the island. A small separate stepping-stone island trails to the left.
Composition: mild downward viewing angle, front edge and underside visible. Subject sweeps from lower-left to upper-right, with strongest mass at center-right. Island fills the image while retaining generous transparent padding around its complete silhouette, including hanging roots, vines and trees. Nothing is clipped.
Style: sophisticated cinematic stylized realism, tactile and detailed, almost believable. Bright saturated botanical greens, violet/blue/white wildflowers, soft bright natural daylight, joyful wonder. Designed to float above a turquoise inland sea as a separate compositing layer, but do NOT draw the sea, sky or any background.
Avoid: train, sprout hero, desk, text, UI, logos, watermarks, glass dome, opaque background, painted checkerboard, drop shadow rectangle.

Asset C: foreground-ferns
Use case: stylized-concept
Asset type: original isolated foreground foliage layer for an immersive animated website, standalone transparent PNG.
Create exactly ONE high-resolution landscape image at approximately 3:2 aspect ratio. GENUINELY TRANSPARENT BACKGROUND with preserved alpha, not a white background or checkerboard illustration.
Subject: a detailed graceful framing cluster of lush green fern fronds and thin stems with a few tiny lilac-blue wildflowers. Dense and dominant at the lower-left corner, tapering gracefully toward the right along the bottom. Most of the top and right of the image is empty transparent space.
Style: sophisticated cinematic stylized realism, almost believable photographic botanical texture, bright saturated greens, soft bright natural sunlight, joyful wonder. Matched to a lush floating garden island above a turquoise inland sea, but do NOT draw the sea, island, sky, ground plane or background.
Composition: wide asymmetric foreground framing layer, delicate separable leaves and stems with natural silhouettes, suitable for gentle independent sway motion and pointer parallax. Cluster originates at bottom-left, fern tips rise toward the left-middle, slender stems and tiny lilac-blue flowers extend sparingly into the open space, tapering foliage follows bottom edge toward the right.
Avoid: text, UI, logos, watermarks, train, desk, giant sprout, glass dome, opaque background, painted checkerboard, drop shadow rectangle.


## Included file map

- `ASSET-PROMPTS.md`
- `site/app.js`
- `site/brand-icon.svg`
- `site/index.html`
- `site/scene.js`
- `site/site.webmanifest`
- `site/styles.css`
- `template.json`
