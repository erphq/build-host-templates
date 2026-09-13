# ROOK — complete website build prompt

Build an original red creative-studio site with a sculptural identity, three self-initiated projects and a functional local brief. The projects are concept studies, not invented commissioned clients.

## Visual direction, composition and working behavior

Use scarlet, cream, dark ink, and oversized condensed typography. The hero's transparent chrome sculpture sits within the typographic composition and responds subtly to pointer movement. Keep the wordmark and navigation readable. The original chrome-knot, cobalt-study, and folded-paper artwork establish three different material worlds; retain their roles rather than using a generic gallery of unrelated pictures.

Build a pinned project stack with three independent image cards. Scroll progress changes translation, depth, rotation, and opacity. The current card must be the one that accepts pointer and keyboard interaction. Three project index controls seek to the corresponding gallery state. The current caption names Counterform, Out of phase, or New angles, with its design discipline. On reduced-motion devices, expose a usable static gallery instead of hiding off-stage cards. Explicitly pause ambient motion without disabling ordinary navigation.

Each project opens a native dialog with its artwork, name, discipline, and original case-study description. Next exploration cycles through the three projects. The dialog can be dismissed with its close control and Escape; focus returns to the opening action. Include the existing studio/service content and the closing brief invitation. Keep card images, case images, captions and navigation in sync. Every state must remain accessible on a narrow phone, not only in the desktop stacked composition.

The local brief contains name, focus, and an idea. Required-field validation must occur before creating the text file. Save a clearly named UTF-8 brief with the actual entered values, then show confirmation that it stays on the device. No message, payment, enquiry, or real project submission occurs. Retain the source's self-initiated-study wording and the truthful local-demo boundaries.

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

### ASSET PROMPTS

Asset 1

Use case: stylized-concept
Asset type: transparent PNG hero object for an original independent creative studio website.
Primary request: a sculptural chrome ribbon twisted into a complex loose knot, one striking single object, mirror-polished silver with rich scarlet reflected light on its underside, rounded flattened ribbon cross-section, premium surreal product photography, weight and tension.
Scene/backdrop: GENUINELY TRANSPARENT BACKGROUND, alpha-channel PNG cutout. Absolutely no floor, no backdrop, no simulated checkerboard.
Composition/framing: landscape 4:3 image, object centered filling about 75% of frame, all sculptural edges visible with transparent margin. Strong readable silhouette suitable for displaying huge over a red hero and oversized typography.
Lighting/mood: crisp edges and grazing studio light, sophisticated reflection modeling and substantial dimensional volume.
Constraints: original sculptural form, one continuous folded twisted chrome ribbon. No text, no logo, no watermark, no other objects. Preserve genuine transparency around object and through negative spaces.

Asset 2

Use case: ads-marketing
Asset type: original wide 4:3 editorial campaign photo filling a website work tile.
Primary request: a sculptural cobalt-blue translucent glass sphere captured fracturing into a few large controlled curved pieces, saturated cobalt backdrop, liquid-glass highlights, one tiny vivid orange-red ball floating at the center.
Style/medium: sophisticated gallery exhibition art direction; premium photoreal surreal product photography, sharp tactile material and credible optical refraction.
Composition/framing: horizontal 4:3 image; central dimensional glass sculpture with bold silhouette, large curved pieces suspended in controlled tension, sufficient blue breathing room.
Lighting/mood: precise studio illumination describing sculptural glass thickness and curved edges.
Constraints: original art only. Zero text, UI, logos or watermarks. Avoid dozens of small shards, avoid generic stock imagery.

Asset 3

Use case: ads-marketing
Asset type: original wide 4:3 premium conceptual editorial still life for a creative studio website work tile.
Primary request: a tall dramatic burgundy folded-paper architectural sculpture with deep shadows and a thin mirror-polished chrome disc resting against it, on a warm cream background.
Style/medium: premium studio photography with physical paper texture, sophisticated gallery art direction, minimalist but visually powerful.
Composition/framing: horizontal 4:3 image; asymmetrical sculptural composition, bold angular burgundy folds rising from the warm cream floor, one thin chrome disc leaning against the sculpture. Strong scale and controlled breathing room.
Lighting/mood: directional studio light, deep sharp architectural fold shadows, tactile paper grain and crisp mirror-metal highlights.
Constraints: original image. Zero text, UI, logos or watermarks. No extra decorative objects. Warm cream and deep burgundy palette with silver accent.


## Included file map

- `ASSET-PROMPTS.md`
- `site/app.js`
- `site/brand-icon.svg`
- `site/index.html`
- `site/site.webmanifest`
- `site/styles.css`
- `template.json`
