# Hearth — homes with a point of view

Build a complete, original architectural-property collection named Hearth. The slug was checked against the existing source and generated-demo directories and is unused. The website should combine the atmosphere of an editorial architecture publication with the practical clarity of a small property collection. It needs a distinctive home page, usable collection filters, three substantial property pages, a saved shortlist with comparison, a local viewing-inquiry draft, and a thoughtful guide. This is not a real estate service or a set of actual listings.

Every home, place, price, room count, area, and specification is fictional. The architectural images are newly generated concepts created for this collection. They are not documentary photographs of properties offered for sale. Make this context clear without allowing disclaimers to overwhelm the design. Visitors should be able to explore the architecture and use the interface meaningfully, while understanding that no transaction, viewing, valuation, or agreement can be created here.

## Live research foundation

The live reference is The Modern House at https://themodernhouse.com/. The homepage and the Pine Grove property page at https://themodernhouse.com/sales-list/pine-grove were inspected. The homepage uses a centered masthead, small navigation groups at either side, a large editorial image-and-copy lead, and successive property collections with clear names, prices, locations, and status information. The lead story is treated as editorial content rather than a generic sales headline. This relationship between architecture and practical information is the transferable idea.

At the observed desktop viewport of 1471 by 847, the property detail page uses a full-width photograph beginning at y=64. The image measured approximately 1471 by 796 pixels. A concise cream information panel overlays the image and groups the property name, location, price, tenure, document controls, and viewing action. The visible property presentation is largely photographic and editorial, with restrained borders and a serif treatment for descriptive text. The actual h1 in the inspected DOM was visually hidden, so do not copy that semantic choice.

The viewing request control was opened read-only. It revealed a form containing identity and contact fields, current address information, buying-position questions, and consent controls. No fields were filled and no request was submitted. Hearth should borrow the clarity of a property-specific inquiry, but it should not collect unnecessary personal or financial information for a fictional demo. Its form needs only a name, email, property choice, broad timing preference, and optional questions, and it must prepare an unsent local draft.

Do not reuse The Modern House’s name, logo, listing titles, property facts, photographs, biographies, contact information, form wording, or source code. The reference inspires the balance between large architecture imagery and concise practical detail. Hearth uses an original identity, invented homes, different page compositions, and a local shortlist/comparison workflow. No reference price or real location should appear as a Hearth listing fact.

Exact reference motion timings were not measured. Hearth should use restrained original hover transitions and a native full-image dialog where useful. There is no need for automatic carousels, fake live availability, market statistics, or a dramatic loading sequence. The page should be complete and readable on first paint, with the imagery doing most of the visual work.

## Original identity and typography

Hearth’s wordmark is a quiet upright serif, using system Georgia, centered in the main header. The rest of the interface uses locally licensed Geist. The pairing should feel architectural and approachable: serif for property names, editorial headlines, and reflective statements; sans-serif for navigation, filters, specifications, controls, and longer explanatory reading. Avoid the ornate styling of a luxury hotel brand or the visual density of a property portal.

Use warm stone and soft sage as the foundation. The page background is approximately #f5f3ed, with dark green ink around #28362c. Supporting text is a readable green-gray around #52614c. Pale green panels near #e7e9dd provide quiet contrast. Primary actions use a deeper green around #304a3a. A rust-brown editorial feature section around #8f503b introduces warmth without becoming a bright promotional accent. The photographs supply the strongest variations in color and texture.

Headlines are regular-weight serif with comfortable proportions and slightly tightened tracking. The home hero heading should be around sixty pixels on a large laptop and forty-six on a narrow phone. Property names can be larger on detail pages. Editorial paragraphs are around sixteen to eighteen pixels with generous line height. All controls and navigation are at least fourteen pixels, and secondary labels at least twelve. Do not use tiny uppercase labels as a substitute for readable essential information.

Keep most surfaces flat. Use fine sage-gray rules, simple rectangular buttons, and restrained image hover scaling. Avoid rounded dashboard cards, glossy shadows, animated market charts, or decorative price badges. The interface should make the homes easy to compare while leaving space for the qualities that cannot be reduced to a number. The shortlist’s visual design should feel like an orderly reading surface, not a shopping cart.

## The three original homes

Pine Reach is an imagined three-bedroom house in the invented place Northwood Edge. Its fictional example price is £940,000, illustrative area is 180 square meters, and it has two bathrooms and a woodland garden. The image shows a low modern house with dark vertical timber, full-height glazing, broad concrete steps, and natural planting among pine trees. The architectural idea is a quiet relationship with the landscape, balancing shelter and openness.

The image-generation direction specified an original architectural editorial photograph in a landscape three-to-two frame. It asked for authentic weathered materials, late-afternoon light, a careful three-quarter exterior view, restrained warm interiors visible through glass, and no people, cars, text, logos, or recognizable real building. The final image is a coherent imagined home, not a documentary property photograph. Responsive versions and the collection hero are derivatives of this same composition.

Foundry Loft is an imagined two-bedroom loft in Old Kiln Quarter. Its fictional example price is £625,000, illustrative area is 112 square meters, and it has one bathroom and a private terrace. The image shows tall factory windows, warm brick, oak flooring, a low olive sofa, a walnut table, and an open mezzanine edge. The concept explores how a building’s existing volume can shape a different rhythm of living. It is not a documented warehouse conversion.

The image-generation direction emphasized a spacious editorial interior with diffused morning light and a restrained arrangement of furniture. It excluded people, text, logos, and identifiable real properties. The photograph should convey the scale of the windows and the empty volume as strongly as the objects. Do not invent a history, planning approval, listed-building status, or architect attribution for this fictional setting.

Olive Court is an imagined four-bedroom house in Southbank Gardens. Its fictional example price is £1,180,000, illustrative area is 245 square meters, and it has three bathrooms and a central courtyard. Its original image shows pale limestone and lime plaster, an olive tree in gravel, a shaded colonnade, and glass doors opening toward a simple living room. The house turns toward its own shared outdoor center.

The image-generation direction specified warm early-evening light, tactile stone, native planting, and a composition from within the courtyard that shows the transition between inside and outside. It excluded a pool, people, text, logos, and recognizable real architecture. The resulting scene is an original concept. The property descriptions should discuss the visual relationships in that image without implying that its physical performance, materials, or dimensions have been verified.

## Home page composition

Create a centered header with navigation split into two groups around the Hearth wordmark. The left group contains The homes and Our perspective. The right contains Shortlist with a live saved count and Viewing draft. The header is roughly ninety-four pixels tall on desktop, with fine bottom separation. On mobile, move the wordmark into its own top row and keep the important navigation readable below. Secondary destinations remain available in the footer if space requires one link to be omitted from the narrowest header.

The hero is a two-column editorial composition. The Pine Reach photograph occupies the larger left portion, while a pale sage copy panel fills the right. The headline reads Places for a different everyday, with deliberate line breaks and a restrained serif scale. Supporting copy introduces the imagined collection. A single strong action opens the collection, and a small note explains that there are three fictional homes. The image itself links to Pine Reach and has a concise caption identifying the generated concept.

Below the hero, create a split introduction with a small label at the left and a larger statement at the right: a home is more than the sum of its rooms. The paragraph should discuss light, thresholds, material, and familiar rituals. This is an architectural point of view, not a promise about property value. Leave generous space around the statement so the page feels editorial rather than transactional.

The home collection section displays all three homes. Each card includes a large image, serif title, imagined place, fictional example price, clear specification row, short architectural description, detail link, and save control. The price is always accompanied by its fictional-example label. The specification row includes type, bedrooms, and illustrative area. Do not hide this information behind hover. A saved state must be visible and accessible.

Continue with a rust-brown feature section about Foundry Loft. Pair its image with a short architectural story and a real link to the detail page. The closing guide teaser introduces three ways of reading a home: follow the light, read the thresholds, and notice the materials. The footer contains the original brand, practical navigation, image credits, and a concise statement that the collection is fictional. Do not add real-agent contact details or a newsletter form that has no working destination.

## Collection filters

The collection page has its own large heading, explanation, and a properly labeled results section. Provide three styled selects: home type, minimum bedrooms, and maximum fictional example price. Type options are All types, House, and Loft. Bedroom options are Any number, two or more, three or more, and four or more. Price options are up to £1,500,000, £1,000,000, and £700,000. Use inclusive comparisons so a home exactly at the selected threshold remains visible.

All three filters combine with AND semantics. A house filter should include both Pine Reach and Olive Court. Three or more bedrooms should exclude Foundry Loft. A maximum of £700,000 should show only Foundry Loft when the other filters are unrestricted. A contradictory combination should produce a clear empty state rather than silently ignoring one of the controls. Reset restores every filter to its broadest value and shows all three homes.

Implement the filter rule once as a small pure function, and use it from the browser. The function compares exact type, minimum bed count, and maximum price. There is no remote search, map lookup, inferred affordability, or investment scoring. The result count reflects the actual visible cards. Filtering should not clear the saved shortlist or alter the underlying fictional data.

On desktop, the controls form one row with a reset action. On narrower screens, they reflow into two columns and then a single column. Each select remains at least forty-eight pixels tall with readable fourteen-pixel text. Do not create a horizontal filter bar that clips outside a phone viewport. The cards stack at full width on mobile, preserving the image, price context, and action hierarchy.

## Property detail pages

Generate a complete page for each home. Begin with a link back to the collection, a large serif property name, the imagined place, and the fictional example price. The main photograph follows in a broad field within modest page margins. A View full image action opens a native dialog containing the entire uncropped composition. This is preferable to presenting an image carousel when only one original view exists for that home.

Below the image, display a clear facts band with type, bedrooms, bathrooms, illustrative area, and outside space. The labels are secondary, while the values are large enough to read easily. These facts come from the same data record used in filters and comparison. Do not let a detail page claim a different room count or area from its card. Avoid invented energy ratings, tenure, council charges, exact addresses, or other legal and technical property facts.

The main reading area has a wider editorial column and a narrower inquiry panel. The editorial column begins with the home’s central architectural phrase and continues with sections about the idea and a possible way of living. The inquiry panel repeats the property name, a save action, a link to prepare a viewing draft, and a clear local-demo note. It may remain sticky on desktop, but it becomes an ordinary block on mobile.

Include a conceptual arrangement diagram, built from original HTML and CSS. It shows shared living and dining, a private bedroom wing, bathrooms and circulation, and the outside space. Label it as a relationship diagram rather than a measured floor plan. The number of bedrooms and bathrooms should agree with the fictional record. The diagram must not imply construction suitability, surveyed dimensions, or verified accessibility.

A later section discusses light and material beside a closer presentation of the same generated image. Label this as a detail of the same source, not a second original photograph. End with a contextual note explaining the fictional nature of the home and a small set of other homes to explore. On mobile, these related cards must stack; do not allow an inline desktop grid declaration to override the responsive stylesheet.

## Saved shortlist and comparison

Saving a home stores only its known identifier under a dedicated local-storage key. Parse saved values defensively, accept only a valid array of known property identifiers, and deduplicate it. Every save button and header count derives from the same array. A home saved on the landing page should appear saved on its detail page and in the shortlist after navigation or reload. No account or remote storage is involved.

Use a button for saving, with aria-pressed and a label that includes the visible action phrase and the property name. The visible wording changes between Save home and Saved home, with a clear plus or minus cue. Removing a saved home changes only the local shortlist. It does not modify a listing or contact anyone. If local storage fails, retain the current page state and report that the change is available only for the current page.

The shortlist page compares every saved home. With no selections, show a useful empty state linking back to the collection. With one, explain that another can be added for comparison. With two or three, present the same attributes in the same order: fictional price, type, bedrooms, bathrooms, illustrative area, outside space, character, and imagined place. The comparison is descriptive, not a ranking or recommendation.

On desktop, use a semantic table with property columns, row labels, readable text, and images above each property name. Include remove and detail actions. On mobile, replace the table with stacked comparison cards and definition lists. The phone view should not be a tiny desktop table or require reading narrow columns. Only one representation should be displayed at a time through responsive CSS. When a removal rebuilds the comparison, return focus to the stable shortlist heading.

## Local viewing-inquiry draft

The viewing page contains an explanatory heading, a property preview, and a real form. A recognized home query parameter preselects the relevant property. Ignore unknown values and use a valid default. Changing the property choice updates the preview image, name, imagined place, and fictional price immediately. This keeps the form context clear without requiring a modal or an external request.

Collect only name, email, preferred time of day, broad timing, and optional questions. Do not copy the reference’s address, buying-position, funding, or mortgage questions into a fictional demonstration. Name and email are required, with native validation and sensible length limits. The name should be trimmed and cannot consist only of spaces. If custom validity is used, clear it when the user edits the field so a corrected value can be submitted normally.

Preparing the draft creates a plain-text summary of the chosen home, its fictional context, the visitor’s entered details, and questions. Narrow FormData values to strings before trimming or rendering. Insert user text with textContent rather than HTML. Hide the form, reveal a labeled review panel, and move focus to it. The result must state that it is local and unsent and that no viewing, transaction, or agreement has been created.

Offer Download draft, Copy draft, and Edit details. The download is a real text-file anchor whose Blob URL is created after a valid submission. Revoke an earlier URL before preparing a replacement. Copy reports the actual Clipboard API result and offers the download as a fallback if copying fails. Editing restores the existing form values and focuses the name field. Personal inquiry data is not stored across page reloads or sent to any service.

## Architectural guide

The guide should be a substantial reading page, not a collection of generic frequently asked questions. Its sections discuss light, thresholds, materials, comparison, and the fictional context. Use examples drawn from the three actual concepts: Pine Reach’s roof edge, Foundry Loft’s height, and Olive Court’s shaded courtyard. Keep the writing specific to the imagery while avoiding claims that cannot be verified from a generated scene.

Explain that a single image cannot establish seasonal light, material performance, construction quality, maintenance requirements, or physical access. The conceptual diagrams cannot replace measured plans or surveys. The price and area fields are invented interface data. They should not be used as a market appraisal, purchasing recommendation, or financial decision aid. These limits are part of the product’s context, not an attempt to provide professional property advice.

The guide also explains the local workflow: filters combine, saved identifiers persist when storage is available, comparison uses the same data, and the viewing form produces only a draft. Give the visitor a clear path back to the collection. Do not introduce real contact details, booking services, location maps, mortgage calculators, or purchase controls.

## Responsive and accessibility requirements

At around one thousand pixels, reduce spacing and card typography slightly while preserving readable controls. At eight hundred pixels, stack the hero, property grids, editorial sections, property body, viewing form, and guide. The header becomes a two-row composition with the wordmark above the navigation. Below roughly four hundred and eighty pixels, use one-column filters and a two-by-two facts grid. Preserve generous vertical rhythm rather than reducing text to fit a desktop composition.

All actual control text and navigation remain at least fourteen pixels, secondary labels at least twelve, and editorial body copy around sixteen to eighteen. Images use explicit intrinsic dimensions and responsive source sets to reduce layout movement and unnecessary transfer size. Use object-fit only where a deliberate crop is intended. The full-image dialog uses contain so the whole generated composition can be inspected.

Include a skip link, one main landmark, logical headings, visible focus styles, styled selects, semantic tables or definition lists, and pressed states for save controls. The full-image dialog has an accessible title, explicit close control, native Escape behavior, and focus restoration to its opener. Do not use unsupported ARIA attributes on decorative containers. Concept diagrams can use a genuine image role with a complete descriptive label because they represent a single visual relationship map.

Motion is restrained: images scale slightly on hover, and no content moves continuously. Respect reduced-motion preferences by disabling transitions and smooth scrolling. The static state must retain every piece of information and every working action. Do not hide document overflow globally to mask a layout defect; measure narrow pages and fix the element that is too wide.

## Delivery and verification

Export buildHearth from scripts/hearth/build.mjs and return an object containing prompt. Generate eight complete pages: home, collection, shortlist, viewing draft, guide, and three property details. Keep source in scripts/hearth, output and assets in public/demos/hearth, and the distributed prompt in public/prompts/hearth.md. Append the exact fictional property records, responsive CSS, and real JavaScript beneath Reference interaction handler. Do not modify shared catalogs, application routes, validators, or deployment configuration.

Deliver the three original architectural WebP images, responsive 640-pixel derivatives, a hero preview, the local Geist font and its license, and provider-neutral credits that preserve the generated-image disclosure. Keep original generated files outside the deliverable and do not expose local user paths. No favicon or unrelated platform branding should appear in the generated pages or downloads.

Run scoped lint and test the pure filter with matching, nonmatching, combined, and boundary cases. In the browser, combine type, bed, and price filters; save multiple homes; navigate to the shortlist; compare the correct attributes; remove a home; reload and confirm persistence; open a property-specific viewing draft; change its property; prepare, copy, and edit the draft; and inspect its download link. Verify the image dialog and focus return.

Inspect desktop and mobile pages, including comparison cards and form controls. Measure document width at a 390-pixel viewport and check that no visible controls are smaller than fourteen pixels. Report actual outcomes and distinguish prepared file downloads from completed transfers. The finished site should make architectural exploration feel considered while keeping every practical interaction honest, local, and clear.

## Responsive image delivery

Keep the original1440px architectural photographs and the640px derivatives. Add a960px-wide WebP derivative at quality80 for each property, and include all three widths in srcset. This intermediate size serves phone and tablet displays that otherwise jump from640px to the full original. Preserve the original composition and keep large files available to the full-image viewer. The hero retains fetchpriority high; supporting images remain lazy.


## Exact fictional property records

```javascript
export const homes = [
  {
    id: 'pine-reach',
    name: 'Pine Reach',
    place: 'Northwood Edge',
    type: 'House',
    beds: 3,
    baths: 2,
    area: 180,
    price: 940000,
    outside: 'Woodland garden',
    character: 'Timber & glass',
    color: '#c7d0bd',
    line: 'A quieter relationship with the landscape.',
    description:
      'A low timber house imagined at the edge of a pine grove, with broad glazing and a generous threshold between living space and landscape.',
    story:
      'Pine Reach begins with a long, low roofline and the rhythm of the trees around it. Dark vertical timber gives the exterior a quiet presence, while full-height glazing makes the living room feel connected to the changing light outside. The house is an original architectural concept, not a real listing.',
    living:
      'The imagined plan places shared living spaces along the garden edge, with three bedrooms gathered behind a more private timber elevation. A broad entrance and a simple circulation route keep the daily movement through the house easy to understand. The illustrative area and room counts describe the concept rather than measured accommodation.',
    material:
      'Warm timber, pale concrete, and natural planting form a deliberately restrained palette. The contrast between solid wall and open glazing is the central idea: a home that can feel sheltered without turning away from its setting.',
    note: 'Look at how the roof extends beyond the glass. That shaded edge is part of the relationship between the room and the garden.',
    alt: 'Original generated architectural photograph of a dark timber modern house among pine trees with broad glazing and concrete steps',
  },
  {
    id: 'foundry-loft',
    name: 'Foundry Loft',
    place: 'Old Kiln Quarter',
    type: 'Loft',
    beds: 2,
    baths: 1,
    area: 112,
    price: 625000,
    outside: 'Private terrace',
    character: 'Brick & volume',
    color: '#d7c7b1',
    line: 'Room for a different rhythm of living.',
    description:
      'An imagined warehouse conversion with tall factory windows, warm brick, and an open living space beneath a quiet mezzanine.',
    story:
      'Foundry Loft explores the character of a building that has already had one life. Tall windows and exposed brick establish a strong framework, while a restrained palette of oak, plaster, and soft green leaves room for the scale of the space to be felt. This is an invented interior, not a documented conversion.',
    living:
      'The concept proposes two bedrooms and a shared living area with a flexible edge for working or reading. A mezzanine introduces another level without filling the volume. The layout is intended to suggest a way of living, and is not a measured floor plan or a statement of planning permission.',
    material:
      'The most important material is light. The tall openings carry it deep into the room, while the brick reveals its changing direction. The furniture stays low and simple so the architecture remains the focus.',
    note: 'Notice the relationship between the height of the windows and the low furniture. The empty volume is doing as much work as the objects.',
    alt: 'Original generated photograph of a brick warehouse loft with tall windows, oak floors, an olive sofa and an open mezzanine',
  },
  {
    id: 'olive-court',
    name: 'Olive Court',
    place: 'Southbank Gardens',
    type: 'House',
    beds: 4,
    baths: 3,
    area: 245,
    price: 1180000,
    outside: 'Central courtyard',
    character: 'Stone & shade',
    color: '#d5d6bd',
    line: 'A home that turns toward its own quiet center.',
    description:
      'A limestone courtyard house imagined around an olive tree, with shaded colonnades and a close connection between inside and outside.',
    story:
      'Olive Court is organized around a shared outdoor room. Pale stone and lime plaster hold the light, while the olive tree gives the composition a living center. The house is an original generated architectural concept in an invented place, with no real property offered for sale.',
    living:
      'The illustrative four-bedroom plan wraps around the courtyard so that shared and private rooms can have different relationships with it. A shaded circulation edge connects the spaces without making the garden a corridor. The suggested area and dimensions are fictional specifications for comparison only.',
    material:
      'Stone, gravel, glass, and soft planting create a balance between permanence and seasonal change. Deep openings make shade as important as sunlight. The architectural interest lies in the transition between those conditions.',
    note: 'Follow the line of the colonnade into the shaded living room. The threshold is a sequence of spaces, not a single doorway.',
    alt: 'Original generated architectural photograph of a pale stone courtyard home with an olive tree, gravel, colonnade and open glass doors',
  },
];
export const money = (value) => '£' + value.toLocaleString('en-GB');
export function matchesHome(home, filters) {
  return (
    (!filters.type || home.type === filters.type) &&
    home.beds >= filters.beds &&
    home.price <= filters.price
  );
}

```

## Exact responsive CSS

```css
@font-face {
  font-family: Hearth;
  src: url('assets/geist-variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 95px;
}
body {
  margin: 0;
  background: #f5f3ed;
  color: #28362c;
  font:
    16px/1.7 Hearth,
    Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
p,
figure,
blockquote {
  margin: 0;
}
button,
input,
select,
textarea {
  font: inherit;
}
button {
  cursor: pointer;
  color: inherit;
}
a {
  color: inherit;
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #9b5138;
  outline-offset: 4px;
}
::selection {
  background: #d5deca;
}
.skip {
  position: fixed;
  top: -100px;
  left: 18px;
  z-index: 99;
  background: #fff;
  padding: 14px;
}
.skip:focus {
  top: 0;
}
.header {
  height: 94px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 35px;
  align-items: center;
  padding: 0 4%;
  border-bottom: 1px solid #cbd0c4;
  background: #f5f3ed;
}
.brand {
  font:
    400 46px/1 Georgia,
    serif;
  letter-spacing: -2.5px;
  text-align: center;
}
.header nav {
  display: flex;
  gap: 26px;
  align-items: center;
  font-size: 14px;
}
.header nav:last-child {
  justify-content: flex-end;
}
.header nav a:hover,
.footer nav a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.saved-count {
  display: inline-grid;
  place-items: center;
  min-width: 23px;
  height: 23px;
  border: 1px solid #84957d;
  border-radius: 50%;
  font-size: 12px;
  margin-left: 5px;
}
.eyebrow {
  display: block;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #52614c;
  line-height: 1.65;
}
.hero {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  min-height: 620px;
  border-bottom: 1px solid #cbd0c4;
}
.hero-image {
  min-width: 0;
  position: relative;
}
.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-image .image-caption {
  position: absolute;
  bottom: 20px;
  left: 25px;
  color: #fff;
  background: #25382bce;
  padding: 9px 13px;
  font-size: 12px;
}
.hero-copy {
  padding: 60px 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e7e9dd;
}
.hero-copy h1 {
  font:
    400 clamp(43px, 4.6vw, 69px)/1.08 Georgia,
    serif;
  letter-spacing: -2.3px;
  margin: 25px 0;
}
.hero-copy p {
  font-size: 17px;
  line-height: 1.8;
  color: #52614c;
  max-width: 420px;
}
.button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  background: #304a3a;
  color: #fff;
  border: 1px solid #304a3a;
  padding: 14px 19px;
  min-height: 49px;
  font-size: 14px;
  line-height: 1.45;
}
.button.light {
  background: transparent;
  color: #304a3a;
  border-color: #8a9a82;
}
.button:hover {
  background: #47644f;
  color: #fff;
}
.hero-copy .button {
  align-self: start;
  margin-top: 28px;
}
.hero-copy .demo-note {
  font-size: 12px;
  margin-top: 18px;
  line-height: 1.7;
}
.intro {
  padding: 65px 6%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10%;
  border-bottom: 1px solid #cbd0c4;
}
.intro h2 {
  font:
    400 43px/1.15 Georgia,
    serif;
  letter-spacing: -1.3px;
  margin-bottom: 24px;
  max-width: 800px;
}
.intro p {
  font-size: 17px;
  color: #52614c;
  line-height: 1.9;
  max-width: 650px;
}
.collection {
  padding: 60px 5% 75px;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 35px;
  margin-bottom: 35px;
}
.section-head h2 {
  font:
    400 42px/1.15 Georgia,
    serif;
  letter-spacing: -1.2px;
}
.text-link {
  display: inline-block;
  border-bottom: 1px solid #73856a;
  padding: 6px 0;
  font-size: 14px;
  line-height: 1.6;
}
.homes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}
.home-card {
  min-width: 0;
}
.card-image {
  display: block;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 1.38;
  object-fit: cover;
  transition: transform 0.6s;
}
.card-image:hover img {
  transform: scale(1.025);
}
.card-top {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: start;
  margin-top: 21px;
}
.card-top h3 {
  font:
    400 30px/1.15 Georgia,
    serif;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
}
.card-top p {
  font-size: 14px;
  color: #596b52;
}
.price {
  font-size: 16px;
  margin: 17px 0 4px;
}
.fiction-label {
  font-size: 12px;
  color: #596b52;
  display: block;
}
.card-facts {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  border-top: 1px solid #c7d0bd;
  border-bottom: 1px solid #c7d0bd;
  padding: 12px 0;
  margin: 18px 0;
  font-size: 14px;
}
.card-description {
  font-size: 16px;
  line-height: 1.85;
  color: #52614c;
  margin-bottom: 20px;
}
.card-actions {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}
.save-button {
  font-size: 14px;
  border: 1px solid #8c9c82;
  background: transparent;
  padding: 10px 13px;
  min-height: 43px;
  line-height: 1.5;
}
.save-button[aria-pressed='true'] {
  background: #dce5d2;
  border-color: #859b72;
}
.save-button:hover {
  background: #e4ebdd;
}
.feature-story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #8f503b;
  color: #fff9ee;
  align-items: stretch;
}
.feature-story img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 510px;
}
.feature-story > div {
  padding: 65px 12%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.feature-story .eyebrow {
  color: #f2ddcd;
}
.feature-story h2 {
  font:
    400 47px/1.12 Georgia,
    serif;
  letter-spacing: -1.4px;
  margin: 24px 0;
}
.feature-story p {
  font-size: 17px;
  line-height: 1.8;
  color: #f3dfd2;
}
.feature-story .text-link {
  align-self: start;
  color: #fff;
  border-color: #e1c0ac;
  margin-top: 25px;
}
.guide-teaser {
  padding: 70px 6%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 12%;
}
.guide-teaser h2 {
  font:
    400 44px/1.13 Georgia,
    serif;
  letter-spacing: -1.4px;
}
.guide-teaser p {
  font-size: 17px;
  line-height: 1.85;
  color: #52614c;
  margin-bottom: 25px;
}
.guide-teaser ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.guide-teaser li {
  padding: 18px 0;
  border-top: 1px solid #c7d0bd;
  font-size: 17px;
}
.footer {
  padding: 40px 4%;
  border-top: 1px solid #c7d0bd;
  background: #e7e9dd;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  margin-bottom: 28px;
}
.footer .brand {
  font-size: 41px;
}
.footer nav {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  font-size: 14px;
}
.footer p {
  font-size: 12px;
  line-height: 1.8;
  max-width: 790px;
  color: #52614c;
}
.page-intro {
  padding: 55px 5% 35px;
}
.page-intro h1 {
  font:
    400 clamp(48px, 6.2vw, 88px)/1.08 Georgia,
    serif;
  letter-spacing: -2.7px;
  margin: 22px 0 25px;
  max-width: 1050px;
}
.page-intro p {
  font-size: 18px;
  line-height: 1.8;
  color: #52614c;
  max-width: 800px;
}
.filters {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 20px;
  align-items: end;
  margin: 0 0 25px;
}
.filters label {
  display: grid;
  gap: 8px;
  font-size: 14px;
}
.filters select {
  width: 100%;
  min-width: 0;
  background: #fff;
  border: 1px solid #a8b69c;
  padding: 12px;
  min-height: 48px;
  font-size: 14px;
  color: #30452f;
}
.filter-count {
  font-size: 14px;
  color: #52614c;
  margin: 20px 0 30px;
}
.empty {
  padding: 35px;
  background: #e7ecdf;
  border: 1px solid #c5d1b7;
}
.empty h2,
.empty h3 {
  font:
    400 32px/1.15 Georgia,
    serif;
  margin-bottom: 18px;
}
.empty p {
  font-size: 16px;
  line-height: 1.85;
  margin-bottom: 22px;
}
.status {
  font-size: 14px;
  line-height: 1.8;
  color: #3e5d31;
  min-height: 25px;
  display: block;
  margin-top: 23px;
}
.property-title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
}
.property-title h1 {
  margin-bottom: 16px;
}
.property-title .price-block {
  padding-bottom: 14px;
  min-width: 220px;
  text-align: right;
}
.property-title .price-block strong {
  font-size: 25px;
  font-weight: 400;
}
.property-photo {
  margin: 0 3%;
  position: relative;
}
.property-photo img {
  width: 100%;
  height: auto;
  aspect-ratio: 1.8;
  object-fit: cover;
}
.photo-open {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #f5f3ed;
  color: #304a3a;
  border: 1px solid #758b6a;
  padding: 12px 17px;
  font-size: 14px;
}
.property-facts {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 25px 5%;
  border-bottom: 1px solid #c7d0bd;
  font-size: 14px;
  flex-wrap: wrap;
}
.property-facts span {
  display: block;
  font-size: 12px;
  color: #596b52;
  margin-bottom: 4px;
}
.property-facts strong {
  font-size: 18px;
  font-weight: 400;
}
.property-body {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 10%;
  padding: 65px 7%;
}
.property-copy h2 {
  font:
    400 39px/1.2 Georgia,
    serif;
  letter-spacing: -1px;
  margin: 0 0 25px;
}
.property-copy p {
  font-size: 18px;
  line-height: 1.9;
  color: #52614c;
  margin-bottom: 30px;
}
.property-copy .lead {
  font:
    400 29px/1.5 Georgia,
    serif;
  color: #34452e;
  margin-bottom: 35px;
}
.inquiry-aside {
  position: sticky;
  top: 30px;
  padding: 27px;
  background: #e5e9dc;
  border: 1px solid #c3d0b4;
  align-self: start;
}
.inquiry-aside h2 {
  font:
    400 29px/1.2 Georgia,
    serif;
  margin: 15px 0 22px;
}
.inquiry-aside p {
  font-size: 16px;
  line-height: 1.8;
  color: #52614c;
  margin-bottom: 23px;
}
.inquiry-aside .button,
.inquiry-aside .save-button {
  width: 100%;
  margin-bottom: 12px;
}
.detail-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9%;
  align-items: center;
  padding: 0 7% 70px;
}
.detail-section img {
  width: 100%;
  height: auto;
  aspect-ratio: 1.05;
  object-fit: cover;
}
.detail-section h2 {
  font:
    400 42px/1.15 Georgia,
    serif;
  letter-spacing: -1.2px;
  margin: 20px 0 25px;
}
.detail-section p {
  font-size: 17px;
  color: #52614c;
  line-height: 1.9;
}
.detail-section .eyebrow {
  font-size: 12px;
}
.concept-plan {
  padding: 30px;
  border: 1px solid #b9c7ab;
  background: #eeeee4;
  margin-top: 40px;
}
.concept-plan h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 18px;
}
.plan-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;
  min-height: 240px;
}
.plan-room {
  border: 2px solid #6d8261;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: #f8f8f0;
  min-height: 65px;
}
.plan-room.living {
  grid-row: span 2;
  background: #dce4d0;
}
.plan-room.outside {
  grid-column: 1/-1;
  background: #c6d2b9;
}
.concept-plan p {
  font-size: 12px;
  line-height: 1.8;
  margin: 16px 0 0;
  color: #52614c;
}
.shortlist {
  padding: 10px 5% 70px;
}
.comparison-wrap {
  margin-top: 25px;
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.comparison-table th,
.comparison-table td {
  padding: 18px;
  text-align: left;
  border-bottom: 1px solid #becbb1;
  vertical-align: top;
  font-size: 16px;
  font-weight: 400;
}
.comparison-table th:first-child {
  width: 175px;
  font-size: 14px;
  color: #596b52;
  padding-left: 0;
}
.comparison-table thead th {
  padding-top: 0;
}
.comparison-table img {
  width: 100%;
  aspect-ratio: 1.35;
  object-fit: cover;
  margin-bottom: 20px;
}
.comparison-table h2 {
  font:
    400 28px/1.2 Georgia,
    serif;
  margin-bottom: 18px;
}
.comparison-mobile {
  display: none;
}
.comparison-card {
  border-bottom: 1px solid #becbb1;
  padding-bottom: 30px;
  margin-bottom: 35px;
}
.comparison-card img {
  width: 100%;
  aspect-ratio: 1.4;
  object-fit: cover;
}
.comparison-card h2 {
  font:
    400 32px/1.15 Georgia,
    serif;
  margin: 20px 0;
}
.comparison-card dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  font-size: 16px;
  margin-bottom: 25px;
}
.comparison-card dt {
  color: #596b52;
  font-size: 14px;
}
.comparison-card dd {
  margin: 0;
}
.comparison-card .text-link {
  margin-left: 20px;
}
.shortlist-helper {
  margin-top: 35px;
  padding: 28px;
  background: #e8ecdf;
  font-size: 16px;
  line-height: 1.8;
}
.viewing-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9%;
  padding: 15px 6% 75px;
  align-items: start;
}
.viewing-preview {
  background: #e9ecdf;
  padding: 25px;
}
.viewing-preview img {
  width: 100%;
  height: auto;
  aspect-ratio: 1.4;
  object-fit: cover;
  margin-bottom: 25px;
}
.viewing-preview h2 {
  font:
    400 33px/1.2 Georgia,
    serif;
  margin: 15px 0;
}
.viewing-preview p {
  font-size: 16px;
  line-height: 1.8;
  color: #52614c;
}
.viewing-preview .fiction-label {
  margin-top: 10px;
}
.viewing-form label {
  display: block;
  font-size: 14px;
  margin-bottom: 25px;
}
.viewing-form input,
.viewing-form select,
.viewing-form textarea {
  display: block;
  width: 100%;
  min-width: 0;
  padding: 12px;
  border: 1px solid #a5b39a;
  background: #fff;
  color: #30452f;
  margin-top: 8px;
  font-size: 16px;
  min-height: 48px;
  border-radius: 0;
}
.viewing-form textarea {
  resize: vertical;
  min-height: 130px;
}
.viewing-form .button {
  width: 100%;
}
.form-note {
  font-size: 12px;
  line-height: 1.8;
  color: #52614c;
  margin-top: 20px;
}
.draft {
  padding: 25px;
  background: #e9ecdf;
  border: 1px solid #b6c7a6;
}
.draft h2 {
  font:
    400 35px/1.2 Georgia,
    serif;
  margin: 18px 0;
}
.draft pre {
  font:
    16px/1.85 Hearth,
    sans-serif;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.draft-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 25px;
}
.draft-actions .button {
  padding: 12px 15px;
  font-size: 14px;
}
.draft output {
  font-size: 14px;
  margin-top: 17px;
  display: block;
}
.guide-body {
  display: grid;
  grid-template-columns: 220px minmax(0, 800px);
  gap: 9%;
  padding: 20px 6% 70px;
  justify-content: space-between;
}
.guide-nav {
  position: sticky;
  top: 30px;
  align-self: start;
  display: grid;
  gap: 17px;
  font-size: 14px;
}
.guide-body article section {
  border-top: 1px solid #bfcab4;
  padding: 30px 0;
}
.guide-body h2 {
  font:
    400 34px/1.2 Georgia,
    serif;
  letter-spacing: -0.8px;
  margin-bottom: 23px;
}
.guide-body p,
.guide-body li {
  font-size: 17px;
  line-height: 1.9;
  color: #52614c;
  margin-bottom: 20px;
}
.guide-body ul {
  padding-left: 22px;
}
.photo-dialog {
  width: 100vw;
  height: 100svh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 22px;
  background: #23342c;
  color: #f8f5e9;
  border: 0;
  overflow: hidden;
}
.photo-dialog::backdrop {
  background: #23342c;
}
.photo-dialog-inner {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 20px;
  height: 100%;
}
.photo-dialog-bar {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  font-size: 14px;
}
.photo-dialog-bar button {
  background: #f5f3ed;
  color: #23342c;
  border: 0;
  padding: 10px 17px;
  font-size: 14px;
  min-height: 44px;
}
.photo-dialog img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  min-height: 0;
}
[hidden] {
  display: none !important;
}
@media (max-width: 1050px) {
  .header {
    gap: 23px;
    padding: 0 3%;
  }
  .header nav {
    gap: 18px;
  }
  .hero {
    grid-template-columns: 1.35fr 1fr;
    min-height: 570px;
  }
  .hero-copy {
    padding: 40px 9%;
  }
  .hero-copy h1 {
    font-size: 53px;
  }
  .homes-grid {
    gap: 20px;
  }
  .card-top h3 {
    font-size: 27px;
  }
  .card-actions {
    align-items: start;
    flex-direction: column;
    gap: 10px;
  }
  .property-body {
    gap: 6%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .viewing-layout {
    gap: 6%;
  }
  .comparison-table th:first-child {
    width: 135px;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 13px;
    font-size: 14px;
  }
  .comparison-table h2 {
    font-size: 25px;
  }
}
@media (max-width: 800px) {
  .header {
    height: auto;
    padding: 22px 5%;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .brand {
    grid-column: 1/-1;
    grid-row: 1;
    font-size: 44px;
  }
  .header nav {
    font-size: 14px;
    gap: 20px;
  }
  .header nav:last-child {
    justify-content: flex-end;
  }
  .hero {
    grid-template-columns: 1fr;
    min-height: 0;
  }
  .hero-image img {
    height: auto;
    aspect-ratio: 1.4;
    object-fit: cover;
  }
  .hero-copy {
    padding: 40px 6%;
  }
  .hero-copy h1 {
    font-size: 55px;
    max-width: 600px;
  }
  .hero-copy p {
    max-width: 620px;
  }
  .intro {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 45px 6%;
  }
  .intro h2 {
    font-size: 37px;
  }
  .homes-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .card-image img {
    aspect-ratio: 1.5;
  }
  .card-top h3 {
    font-size: 32px;
  }
  .card-actions {
    flex-direction: row;
    align-items: center;
  }
  .feature-story {
    grid-template-columns: 1fr;
  }
  .feature-story img {
    min-height: 0;
    aspect-ratio: 1.45;
    object-fit: cover;
  }
  .feature-story > div {
    padding: 45px 6%;
  }
  .feature-story h2 {
    font-size: 42px;
  }
  .guide-teaser {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 50px 6%;
  }
  .guide-teaser h2 {
    font-size: 38px;
  }
  .comparison-table {
    display: none;
  }
  .comparison-mobile {
    display: block;
  }
  .property-title {
    display: block;
  }
  .property-title .price-block {
    text-align: left;
    padding-bottom: 0;
    margin-top: 22px;
  }
  .property-photo {
    margin: 0 5%;
  }
  .property-photo img {
    aspect-ratio: 1.4;
  }
  .property-body {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 45px 6%;
  }
  .inquiry-aside {
    position: static;
  }
  .detail-section {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 6% 50px;
  }
  .detail-section img {
    aspect-ratio: 1.4;
  }
  .detail-section h2 {
    font-size: 37px;
  }
  .viewing-layout {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 10px 6% 55px;
  }
  .viewing-preview img {
    aspect-ratio: 1.5;
  }
  .guide-body {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 10px 6% 55px;
  }
  .guide-nav {
    position: static;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
  }
  .filters {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  .filters .button {
    align-self: end;
  }
  .footer-top {
    flex-direction: column;
    gap: 25px;
  }
  .footer .brand {
    grid-column: auto;
  }
  .page-intro h1 {
    font-size: 60px;
  }
  .section-head h2 {
    font-size: 36px;
  }
}
@media (max-width: 480px) {
  .header {
    padding: 20px 5%;
    gap: 20px;
  }
  .header nav {
    gap: 16px;
    font-size: 14px;
  }
  .header nav:last-child a:last-child {
    display: none;
  }
  .hero-image img {
    aspect-ratio: 1.13;
  }
  .hero-image .image-caption {
    left: 18px;
    bottom: 15px;
    font-size: 12px;
    padding: 8px 10px;
  }
  .hero-copy {
    padding: 34px 6%;
  }
  .hero-copy h1 {
    font-size: 46px;
    letter-spacing: -1.8px;
  }
  .hero-copy p {
    font-size: 16px;
  }
  .hero-copy .button {
    width: 100%;
    margin-top: 24px;
  }
  .hero-copy .demo-note {
    font-size: 12px;
  }
  .intro h2 {
    font-size: 34px;
  }
  .intro p {
    font-size: 16px;
  }
  .collection {
    padding: 40px 5% 55px;
  }
  .section-head {
    align-items: start;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 27px;
  }
  .section-head h2 {
    font-size: 35px;
  }
  .card-top h3 {
    font-size: 30px;
  }
  .feature-story h2 {
    font-size: 37px;
  }
  .feature-story p {
    font-size: 16px;
  }
  .guide-teaser p,
  .guide-teaser li {
    font-size: 16px;
  }
  .footer nav {
    gap: 20px;
  }
  .page-intro {
    padding: 35px 5% 28px;
  }
  .page-intro h1 {
    font-size: 50px;
    letter-spacing: -2px;
  }
  .page-intro p {
    font-size: 17px;
  }
  .filters {
    grid-template-columns: 1fr;
    gap: 17px;
  }
  .property-title .price-block strong {
    font-size: 23px;
  }
  .property-facts {
    gap: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 24px 6%;
  }
  .property-facts strong {
    font-size: 17px;
  }
  .property-photo img {
    aspect-ratio: 1.15;
  }
  .photo-open {
    right: 12px;
    bottom: 12px;
    padding: 10px 13px;
  }
  .property-copy h2 {
    font-size: 34px;
  }
  .property-copy .lead {
    font-size: 26px;
  }
  .property-copy p {
    font-size: 17px;
  }
  .detail-section h2 {
    font-size: 34px;
  }
  .detail-section p {
    font-size: 16px;
  }
  .concept-plan {
    padding: 20px;
  }
  .plan-room {
    padding: 10px;
    font-size: 14px;
  }
  .comparison-card dl {
    gap: 13px 16px;
  }
  .comparison-card .text-link {
    margin-left: 15px;
  }
  .viewing-preview {
    padding: 20px;
  }
  .viewing-preview h2 {
    font-size: 30px;
  }
  .draft {
    padding: 22px;
  }
  .draft h2 {
    font-size: 31px;
  }
  .guide-body h2 {
    font-size: 31px;
  }
  .guide-body p,
  .guide-body li {
    font-size: 16px;
  }
  .photo-dialog {
    padding: 17px;
  }
  .photo-dialog-bar {
    align-items: start;
  }
  .photo-dialog-bar span {
    font-size: 14px;
    max-width: 245px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *:before,
  *:after {
    animation: none !important;
    transition: none !important;
  }
}

.homes-grid.related-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 800px) {
  .homes-grid.related-grid {
    grid-template-columns: 1fr;
  }
}

.comparison-table img {
  height: 190px;
  aspect-ratio: auto;
  object-fit: cover;
}
#shortlist-heading {
  font-size: clamp(45px, 4.6vw, 68px);
}
@media (max-width: 480px) {
  .header {
    grid-template-columns: 1.6fr 1fr;
  }
  .header nav a {
    white-space: nowrap;
  }
}

```

## Reference interaction handler

```javascript
const money=(value) => '£' + value.toLocaleString('en-GB');
function matchesHome(home, filters) {
  return (
    (!filters.type || home.type === filters.type) &&
    home.beds >= filters.beds &&
    home.price <= filters.price
  );
}
const homes = JSON.parse(document.getElementById('hearth-data').textContent);
const homeMap = new Map(homes.map((home) => [home.id, home]));
const key = 'hearth-shortlist-v1';
function loadSaved() {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(saved)
      ? [...new Set(saved.filter((id) => homeMap.has(id)))]
      : [];
  } catch {
    return [];
  }
}
let saved = loadSaved();
let draftUrl = '';
let draft = '';
function say(message) {
  document
    .querySelectorAll('[data-status]')
    .forEach((el) => (el.textContent = message));
}
function refreshSaved() {
  document
    .querySelectorAll('[data-saved-count]')
    .forEach((el) => (el.textContent = String(saved.length)));
  document.querySelectorAll('[data-save-home]').forEach((button) => {
    const chosen = saved.includes(button.dataset.saveHome);
    button.setAttribute('aria-pressed', String(chosen));
    button.textContent = chosen ? 'Saved home −' : 'Save home +';
    button.setAttribute(
      'aria-label',
      `${chosen ? 'Saved home' : 'Save home'}: ${homeMap.get(button.dataset.saveHome).name}`,
    );
  });
}
function toggleSaved(id) {
  saved = saved.includes(id)
    ? saved.filter((item) => item !== id)
    : [...saved, id];
  try {
    localStorage.setItem(key, JSON.stringify(saved));
    say(
      saved.includes(id)
        ? 'Home added to your shortlist.'
        : 'Home removed from your shortlist.',
    );
  } catch {
    say('Shortlist updated for this page. Browser storage is unavailable.');
  }
  refreshSaved();
  renderComparison();
  if (document.querySelector('#comparison-table'))
    document.querySelector('#shortlist-heading').focus();
}
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-save-home]');
  if (button) toggleSaved(button.dataset.saveHome);
});
const type = document.querySelector('#type-filter');
function filterHomes() {
  const filters = {
    type: type.value,
    beds: Number(document.querySelector('#beds-filter').value),
    price: Number(document.querySelector('#price-filter').value),
  };
  let count = 0;
  document.querySelectorAll('[data-home]').forEach((article) => {
    const home = homeMap.get(article.dataset.home);
    article.hidden = !matchesHome(home, filters);
    if (!article.hidden) count++;
  });
  document.querySelector('#home-count').textContent =
    `${count} ${count === 1 ? 'home' : 'homes'} in this view`;
  document.querySelector('#empty-homes').hidden = count > 0;
}
if (type) {
  for (const id of ['type-filter', 'beds-filter', 'price-filter'])
    document.getElementById(id).addEventListener('change', filterHomes);
  document.querySelector('#reset-filters').addEventListener('click', () => {
    type.value = '';
    document.querySelector('#beds-filter').value = '0';
    document.querySelector('#price-filter').value = '1500000';
    filterHomes();
  });
  filterHomes();
}
function make(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
const rows = [
  ['Illustrative price', (home) => money(home.price)],
  ['Home type', (home) => home.type],
  ['Bedrooms', (home) => String(home.beds)],
  ['Bathrooms', (home) => String(home.baths)],
  ['Illustrative area', (home) => home.area + ' m²'],
  ['Outside space', (home) => home.outside],
  ['Character', (home) => home.character],
  ['Imagined place', (home) => home.place],
];
function removeButton(home) {
  const button = make('button', 'save-button', 'Saved home −');
  button.type = 'button';
  button.dataset.saveHome = home.id;
  button.setAttribute('aria-pressed', 'true');
  button.setAttribute('aria-label', 'Saved home: ' + home.name);
  return button;
}
function homeLink(home) {
  const link = make('a', 'text-link', 'Read the home ↗');
  link.href = home.id + '.html';
  return link;
}
function renderComparison() {
  const table = document.querySelector('#comparison-table');
  if (!table) return;
  const selected = saved.map((id) => homeMap.get(id));
  document.querySelector('#empty-shortlist').hidden = selected.length > 0;
  document.querySelector('#comparison-wrap').hidden = selected.length === 0;
  document.querySelector('#shortlist-summary').textContent =
    selected.length === 1
      ? '1 home saved. Add another home to compare their character and spaces.'
      : `${selected.length} homes saved for comparison.`;
  table.replaceChildren();
  const header = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headerRow.append(make('th', '', 'The details'));
  for (const home of selected) {
    const th = document.createElement('th');
    th.scope = 'col';
    const image = document.createElement('img');
    image.src = 'assets/' + home.id + '-640.webp';
    image.alt = home.alt;
    th.append(image, make('h2', '', home.name), removeButton(home));
    headerRow.append(th);
  }
  header.append(headerRow);
  table.append(header);
  const body = document.createElement('tbody');
  for (const [label, value] of rows) {
    const row = document.createElement('tr');
    const heading = make('th', '', label);
    heading.scope = 'row';
    row.append(heading);
    for (const home of selected) row.append(make('td', '', value(home)));
    body.append(row);
  }
  const actions = document.createElement('tr');
  actions.append(make('th', '', 'Explore'));
  for (const home of selected) {
    const cell = document.createElement('td');
    cell.append(homeLink(home));
    actions.append(cell);
  }
  body.append(actions);
  table.append(body);
  const mobile = document.querySelector('#comparison-mobile');
  mobile.replaceChildren();
  for (const home of selected) {
    const card = make('article', 'comparison-card');
    const image = document.createElement('img');
    image.src = 'assets/' + home.id + '-640.webp';
    image.alt = home.alt;
    card.append(image, make('h2', '', home.name));
    const list = document.createElement('dl');
    for (const [label, value] of rows)
      list.append(make('dt', '', label), make('dd', '', value(home)));
    card.append(list, removeButton(home), homeLink(home));
    mobile.append(card);
  }
}
const form = document.querySelector('#viewing-form');
function readText(data, name) {
  const value = data.get(name);
  return typeof value === 'string' ? value.trim() : '';
}
function selectedHome() {
  return homeMap.get(document.querySelector('#property-choice').value);
}
function reflectInquiry() {
  const home = selectedHome();
  document.querySelector('#inquiry-home').textContent = home.name;
  document.querySelector('#inquiry-place').textContent =
    home.place + ' · Imagined place';
  document.querySelector('#inquiry-price').textContent =
    money(home.price) + ' · Fictional example price';
  document.querySelector('#inquiry-photo').src =
    'assets/' + home.id + '-640.webp';
  document.querySelector('#inquiry-photo').alt = home.alt;
}
if (form) {
  const query = new URLSearchParams(location.search).get('home');
  if (homeMap.has(query))
    document.querySelector('#property-choice').value = query;
  reflectInquiry();
  document
    .querySelector('#property-choice')
    .addEventListener('change', reflectInquiry);
  form.addEventListener('input', () =>
    document.querySelector('#visitor-name').setCustomValidity(''),
  );
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#visitor-name');
    name.setCustomValidity(name.value.trim() ? '' : 'Add your name.');
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const home = selectedHome();
    draft = `HEARTH — VIEWING INQUIRY DRAFT\n\nHome: ${home.name}\nImagined place: ${home.place}\nFictional example price: ${money(home.price)}\n${home.beds} bedrooms / ${home.baths} ${home.baths === 1 ? 'bathroom' : 'bathrooms'} / illustrative ${home.area} m²\n\nName: ${readText(data, 'name')}\nEmail: ${readText(data, 'email')}\nPreferred time: ${readText(data, 'time')}\nTiming: ${readText(data, 'timing')}\n\nQuestions\n${readText(data, 'questions') || 'No additional questions.'}\n\nThis is a local, unsent draft for a fictional property. No viewing, transaction, or agreement has been created.`;
    document.querySelector('#draft-text').textContent = draft;
    if (draftUrl) URL.revokeObjectURL(draftUrl);
    draftUrl = URL.createObjectURL(
      new Blob([draft], { type: 'text/plain;charset=utf-8' }),
    );
    document.querySelector('#download-draft').href = draftUrl;
    form.hidden = true;
    const result = document.querySelector('#draft-result');
    result.hidden = false;
    result.focus();
  });
}
document.querySelector('#edit-draft')?.addEventListener('click', () => {
  document.querySelector('#draft-result').hidden = true;
  form.hidden = false;
  document.querySelector('#visitor-name').focus();
});
document.querySelector('#copy-draft')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(draft);
    document.querySelector('#copy-status').textContent =
      'Inquiry draft copied.';
  } catch {
    document.querySelector('#copy-status').textContent =
      'Copy is unavailable. Download the draft instead.';
  }
});
const photoDialog = document.querySelector('#photo-dialog');
let photoTrigger = null;
document.querySelectorAll('[data-open-photo]').forEach((button) =>
  button.addEventListener('click', () => {
    const home = homeMap.get(button.dataset.openPhoto);
    document.querySelector('#large-photo').src = 'assets/' + home.id + '.webp';
    document.querySelector('#large-photo').alt = home.alt;
    document.querySelector('#photo-title').textContent =
      home.name + ' — generated architectural concept';
    photoTrigger = button;
    photoDialog.showModal();
    document.body.style.overflow = 'hidden';
  }),
);
document
  .querySelector('#close-photo')
  ?.addEventListener('click', () => photoDialog.close());
photoDialog?.addEventListener('close', () => {
  document.body.style.overflow = '';
  photoTrigger?.focus();
});
refreshSaved();
renderComparison();

```
