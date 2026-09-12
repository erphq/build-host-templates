# AVEN — A considered workspace for ambitious teams

## Objective and deliverables

Build a complete, polished marketing website for Aven, an original fictional workspace brand. Aven brings people, projects, and progress together for small, ambitious teams. The finished experience should feel calm, tactile, dimensional, and carefully composed. This is a full website with a homepage, About page, Stories index, and four story pages. It is not a single hero, a flattened screenshot, or a generic collection of feature cards.

Deliver seven standalone HTML pages with locally packaged fonts, imagery, styles, and interaction code. Keep all relative paths working after extracting the ZIP. The homepage is index.html; the other top-level pages are about.html and stories.html; individual stories live at stories/fieldwork.html, stories/morrow.html, stories/common.html, and stories/northline.html. Assets belong under assets/. A framework implementation is acceptable if requested, but the supplied reference implementation works without a framework, installation step, API key, or image-hosting dependency.

Make the main product experience tangible through live HTML workspace cards and real feature/plan controls. Do not turn the interface into a hero image. Every visible navigation link, tab, form, and primary call to action must have a meaningful destination or behavior. The sample workspace, companies, metrics, plans, and stories are fictional. Preserve the discreet concept disclosures and never imply that a payment, booking, account connection, inquiry, or newsletter subscription has actually been submitted.

## Brand and visual thesis

Brand name: Aven. Use a restrained sans-serif wordmark paired with a small dark circular symbol containing a six-spoke asterisk from the Lucide icon family. Do not use a lightning symbol, a third-party wordmark, or a copied logo. The brand is human and considered, not a neon developer tool or a luxury fashion label.

The page background is warm ivory, #f4f2ee. Primary ink is #151916. Main muted text is approximately #666b65. Use a pale mint/lime accent around #d7e9ce to #dfebc2 for selected workspace rows and selected-product details, warm apricot around #edbd9d for chart segments and avatar treatments, and soft lavender around #dedceb for a third supporting color. These are functional accents inside the product scene, not a rainbow of unrelated section backgrounds.

The primary page stays light and airy. Two deliberately contrasting sections, Pricing and Contact, are dark rounded fields: slate green around #343e3b for pricing and a deeper green around #273530 for contact. Keep their internal text and controls in one coherent light-on-dark family. This contrast is an intentional part of the page sequence. Do not introduce additional theme flips.

Use Albert Sans, locally hosted with its SIL license, for the page and UI. Supply regular, medium, semibold, and bold faces as needed. The main headline is 56px at the reference desktop width, weight 400, line-height 1.1, and letter-spacing approximately -2.5px. Main section titles are 40px, weight 400, line-height 1.1, letter-spacing -1.6px. Main explanatory copy is 17–18px with a 1.45–1.6 line-height. Product-interface labels are smaller because they belong to a scaled sample workspace; preserve a clear distinction between illustrative UI metadata and the main reading text.

Avoid an oversized 100px marketing headline. Avoid three repeated image/text split sections. Avoid generic glowing buttons, glass on every surface, large arbitrary corner radii, decorative scoring meters, and customer claims invented merely to fill space. Every shadow should help explain elevation or overlap.

## Global layout and spacing

At a 1280px desktop viewport, the main content container is 1040px wide, centered with 120px outer margins. For narrower desktop/tablet widths, use a container width of calc(100% - 64px). Below 760px, use calc(100% - 40px), leaving 20px side gutters.

Pricing and Contact use wider section containers: calc(100% - 40px), maximum 1560px, centered, with a 32px radius. Their content returns to the same main alignment rail as the light sections. Below 760px, these wide panels use 10px outer margins, a 25px radius, and approximately 18px inner side gutters.

The page sequence is: floating navigation; hero with live workspace cards; faded fictional brand rail; large dashboard preview; three onboarding steps; four feature tabs and their matching visual panels; integrations; selectable pricing; four illustrative stories; three team perspectives; FAQ; contact draft form; newsletter and footer. Preserve this sequence and the generous pauses between major sections.

Use approximately 125–140px between desktop sections that change the narrative, such as Features to Integrations and Stories to FAQ. Reduce these pauses to about 75–85px on phones. Avoid doubling the spacing merely because two adjacent sections both have padding.

## Floating navigation

The navigation is a fixed, centered capsule at top:24px. Its reference width is 620px, maximum calc(100% - 32px), and minimum height is 62px. Use roughly 8px vertical padding, 18px left padding, and 10px right padding. The translucent white surface has a white edge, a low-opacity shadow, and a 20px backdrop blur. It should look elevated without producing a giant glow.

Place the Aven identity on the left, About/Features/Pricing links in the center, and a black “Let’s talk” capsule on the right. The primary button contains a small white circular arrow. Button height is about 44px; its arrow disc is 28px. The pointer hover lifts the button by at most 2px and turns the arrow slightly toward the upper-right. Keep keyboard focus visible.

On phones, show the Aven identity, compact contact button, and menu icon. The menu opens as a separate rounded white panel below the capsule. It exposes aria-expanded, has a controlled navigation id, closes when a link is followed, and closes with Escape while returning focus to the menu button. Do not let the menu escape the viewport.

## Hero: copy and composition

Use one semantic h1, with this exact three-line composition on desktop:

Clarity and
momentum for
ambitious teams

Supporting copy: “Aven brings your people, plans, and progress together. Build a calmer way to work, with the confidence to keep growing.”

Primary action: “Find your plan”, linking to #pricing. Secondary action: “Let’s talk”, linking to #contact. The primary action is dark and filled; the secondary action has a thin dark outline and no heavy shadow. Place them on one row with a gap of about 13px, approximately 43px below the supporting paragraph.

The hero begins around 179px from the top of the document, leaving room for the fixed navigation and a generous breath beneath it. Use two equal columns separated by about 34px. The text column has a measure of about 430–480px. The right column is a 415px-high workspace stage with perspective, not a separate rectangular photograph.

Behind the hero, use the locally supplied ivory texture. The asset shows subtle vertical folds in paper/plaster, softly lit from the upper-left. Fade the image into the base page color near the bottom of the hero. Keep it quiet enough that the live UI remains the focal point. A simple low-contrast vertical-rib CSS treatment is the fallback if the texture is unavailable; do not leave a broken image.

### Primary floating card

The primary workspace card is approximately 450px wide, positioned near the top-left of the right-hand stage, and rotated clockwise by about 2 degrees. Use a 23px radius, a 2px translucent white rim, a softly graded white surface, a restrained inset highlight, and a broad shadow that falls downward. The surface should feel lightly frosted, with sufficient opacity for readable rows.

Card heading: “Your people”. A small sorting control says “Newest” by default. The three rows are:

- Rowan Ellis / Fieldwork Studio / initials RE / apricot avatar.
- Sol Reyes / Morrow Labs / initials SR / mint avatar.
- Morgan Chen / Kindred Goods / initials MC / lavender avatar.

The first row begins selected, with a pale mint/lime background and rounded corners. Each row is a real button. Selecting another row transfers the visual and aria-pressed state. Selected-row utility glyphs are small and quiet; they are not separate inactive buttons pretending to work. The sorting control switches between original order and alphabetical name order while preserving the selected row.

Footer action inside this card: “Meet your next chapter”, with a small arrow, linking to the contact section. Main row labels are around 14px and company metadata around 12px at the reference desktop size. The avatars are 32px circles with initials, not fabricated photographs of real customers.

### Overlapping activity card

The second card overlaps the lower-right portion of the first. It is approximately 290px wide, rotated counterclockwise by 4 degrees, positioned about 30px beyond the stage’s right edge and 10px above its bottom. Keep it inside the overall hero’s safe clipping region. Use the same material language and a slightly smaller visual density.

Its label is “Time well spent”, its large sample value is “2h 45m”, and the secondary line is “+25m this week”. Below, display seven stacked bars labeled M, T, W, T, F, S, S. Heights are proportionally 42, 76, 63, 91, 73, 58, and 34 percent. Stack pale teal, apricot, and pale lime segments. This is illustrative activity data, not a real productivity claim.

The two cards must feel like one spatial composition. Do not place them in two equal feature-grid cells. Do not flatten their shadow, remove their overlap, or replace them with one raster screenshot.

## Brand rail and dashboard

Below the hero, show a quiet horizontal rail of five fictional brand names: Fieldwork, Morrow, Kindred, Forma, and Common. Use modest functional marks from the same icon family. The rail is muted and fades toward both outer edges. Do not attach invented “trusted by” customer counts.

The large dashboard preview is real HTML. It is a white surface with a narrow pale sidebar, a 6px soft outer frame, a 22px radius, and a shadow concentrated below the object. At desktop it occupies the main container and is about 600px tall. The sidebar is roughly 170px wide; the content area has about 30px padding. At mobile, hide the illustrative sidebar and simplify secondary content instead of compressing every desktop label.

Dashboard heading: “Good things are taking shape.” Include a discreet “Sample workspace” label. Three top metrics are Active projects 12, Team capacity 76%, and On-time delivery 92%. The accompanying change labels are sample data. Below, show a six-month project-momentum line chart with a pale fill and a dark green line, then two project rows: Brand foundations / Fieldwork Studio / In progress; Launch playbook / Morrow Labs / Ready to review. A secondary note reads “One clear next step.” with a short invitation to explore the workspace features.

All diagrams are functional data visualizations, not decorative illustrations. Use SVG or an installed chart library. Give each SVG gradient a unique id. Never allow a shared gradient id to produce unexpected colors when another feature panel is present.

After the dashboard, use three open columns rather than cards. Each has a small bordered number tile, a heading, and a concise paragraph:

01 — “Make a little space”: “Create your workspace and bring your people in. Start simply, without starting over.”
02 — “Find your rhythm”: “Give every project a clear owner, a next step, and a place for the conversation.”
03 — “See what’s growing”: “Turn everyday progress into a clearer picture of what your team can do next.”

## Feature tabs and visual panels

Section heading: “Good work starts with clarity.” Supporting copy: “A considered set of tools to help your team stay connected, see what matters, and keep moving forward.” Center this introduction.

Below, create a broad rounded tab rail with four equally sized tabs: Shared workspace, Clear insights, Smart workflows, Team focus. The active tab is a raised white capsule with a soft shadow; inactive tabs are quiet and transparent. Each tab includes a relevant Lucide glyph. On phones, the tab rail becomes a two-by-two arrangement inside one rounded surface.

Each tab controls exactly one panel and exposes proper tablist/tab/tabpanel semantics. Implement roving tabIndex, aria-selected, aria-controls, Arrow key navigation, Home, and End. Support both vertical and horizontal arrow keys so the same controls remain usable across responsive layouts. Panel transitions should be a short opacity/8px translation change, with no content height collapse.

The panel is a rounded, lightly translucent white container split into two halves. Its left half is an approximately 394px-high visual stage with a muted green/stone abstract material background; its right half contains a tiny mint label, a 34px heading, and a 17px paragraph. The visual stage may contain illustrative UI but must not expose clipped or inaccessible controls; mark decorative nested controls inert and aria-hidden if they are purely illustrative.

Shared workspace: “A little more clarity. A lot less back-and-forth.” Show a larger people card and an overlapping small conversation note. Copy: “Give your team and clients a shared view of the work. Keep conversations, decisions, and the next step connected, from the first brief to the final handover.”

Clear insights: “Know what’s moving. And what needs a hand.” Show a tilted outlook card with a line chart, a quarter label, and a restrained status row. Copy: “Turn scattered updates into a clearer picture. Follow meaningful signals, notice the small wins, and make the next decision with better context.”

Smart workflows: “Make the everyday flow a little better.” Show three linked nodes: A new request arrives; Bring the right person in; Keep the next step moving. The diagram can gently emphasize nodes in sequence. It must not claim a real automation is running. Copy: “Create a reliable rhythm for repeatable work. Bring the right people in at the right moment, with clear handoffs that keep the whole project moving.”

Team focus: “A shared direction. Space to do your best.” Show the three sample people with capacity indicators of 68%, 82%, and 54%. Copy: “Bring priorities and capacity into the same conversation. Give everyone a clear focus, a manageable workload, and room for the unexpected.”

## Integrations

Use a two-column section. Left: “Bring your favorites into the flow.” Supporting copy explains that the workspace should work with the way the team already works. Include a plan CTA and three small numbered instructions: choose the tools your team uses; bring the right context together; make the everyday a little easier.

Right: a softly lit network of six elevated white icon tiles around the Aven symbol. The categories are Calendar, Messages, Files, Analytics, Boards, and Notes. Use subtle connector lines and restrained rotation; keep the central hub stable. Tile sizes are roughly 86px square, radii 22px, with a 116px central hub. Each tile may drift vertically by only 4–5px over a slow six-second alternate loop.

These are real preview buttons. Clicking a tile updates a small live text region describing its intended role and explicitly stating that no account is connected. Never open an authentication flow or claim an actual integration is ready.

## Pricing

Create a wide dark slate-green panel with softly blended low-opacity green and warm material highlights. Use a 76px vertical inset on desktop. Inside the main alignment rail, the left side contains “Room for every chapter.” and a vertical three-plan selector; the right side contains the active plan’s darker translucent detail card. The detail card is about 425px wide, with a 27px radius and 33px padding.

Plans:

Start — “For your next beginning” — $29/month. Description: “A clear, considered foundation for a small team finding its rhythm.” Features: one shared workspace; essential project insights; client conversations in one place; guided setup checklist; three team members.

Grow — “A little more room” — $79/month. Description: “A broader view and more ways to work together as your team takes its next step.” Features: everything in Start; advanced team insights; reusable workflow playbooks; priority support guidance; up to fifteen team members.

Evolve — “Built around your ambitions” — $159/month. Description: “Flexible tools and a shared operating rhythm for teams moving into their next chapter.” Features: everything in Grow; multiple workspaces; cross-team capacity planning; custom onboarding roadmap; up to forty team members.

Start is initially selected. Changing plans updates the visible card, title, price, description, list, and CTA while maintaining the layout. Use the same accessible tab behavior as the feature selector. On phones the selector becomes a horizontal row and the plan card follows below it.

The pale mint “Explore this plan” button scrolls to Contact and presets the chosen plan in the inquiry form. Show the selected plan clearly. These prices are illustrative; there is no payment or checkout flow. Replace invented star ratings with the quiet assurance “Start with what you need. Make room for what comes next.”

## Stories, perspectives, and secondary pages

The stories heading is “A little clarity goes a long way.” Present four two-column case cards with 304px-high images, 20px corner radii, a 26px company title, a small year, and a short description. Images gently scale to 1.04 on hover and a circular arrow appears. Keyboard focus must reveal the same affordance.

Fieldwork: original mint stationery imagery; a design-studio scenario about shared briefs, feedback, and ownership. Morrow: original botanical skincare imagery; a small care-brand scenario about priorities and launch planning. Common: original apricot speaker imagery; an audio-label scenario about product/design/launch collaboration. Northline: licensed laptop/workspace photography; a digital-team scenario about useful reporting and decisions.

Every card opens a complete local story page. A story page contains the brand/category label, a specific headline, a short introduction, a large image, a metadata row, and three narrative sections: Where it begins; A more considered approach; Room to move forward. Include a final contact CTA. Use the original supplied copy, not placeholder paragraphs or invented outcome percentages. Disclose that the story is illustrative and the company fictional.

The About page has a centered headline, a tactile brand field, a two-column statement of purpose, three values, and a plan CTA. The values are Keep it clear, Make it human, and Grow with care. The Stories index contains all four cards and a contact CTA. Preserve the same navigation, typography, and footer across all seven pages.

Below the homepage story grid, use one larger mint-tinted perspective card and two smaller pale cards. Use fictional initials avatars and concise original quotes. Add one discreet line explaining that these are illustrative perspectives. Do not invent real customer endorsements.

## FAQ, contact, newsletter, and footer

FAQ is a two-column section: a left introduction, “A little more before you begin.”, supporting copy, and contact CTA; right, five native disclosures. Questions cover the intended audience, starting small, existing tools, onboarding, and what the inquiry form actually does. The first starts open. The plus icon rotates to a cross when expanded. Answers remain readable without animation.

The Contact section is a wide dark green panel with two columns. Left: “What’s your next chapter?” and “A new direction. A growing team. Let’s give the next step some clarity.” Right: a form with Your name, Email address, and What do you have in mind? The selected plan appears above the fields when a plan CTA has been used.

Use real labels, autocomplete values, required fields, email validation, and sensible maximum lengths: 80 characters for name, 160 for email, 3000 for message. Reject whitespace-only names/messages. The submit label is “Prepare inquiry”. Prevent network submission. Save a local draft under the Aven namespace and show a readable summary. Include a copy-inquiry action and an explicit clear-draft action. Restore valid saved drafts on reload. Handle malformed or unavailable storage without blanking the page. Use textContent or form values for user content; never inject it as HTML.

The form must state, before submission, that this concept saves a draft on the device and sends nothing. Do not use a success message that implies email delivery. If clipboard access fails, let the user select the prepared text manually. Capture the button reference before awaiting clipboard.writeText; do not rely on event.currentTarget after the asynchronous boundary.

The footer includes a newsletter-interest form, page links, a contact link, image credits, the ProtoSites return link, the large line “Make room for what’s next.”, the Aven identity, and a motion pause/resume control. The newsletter form validates email and records interest locally only, then explicitly states that no real subscription was created. Do not use dead social links or invented contact details merely to imitate a template.

## Motion, accessibility, and responsive acceptance

Hero copy enters over about 850ms with a 24px upward settle. The primary workspace card resolves from a slightly stronger rotation and 25px offset over 1.15 seconds; the smaller activity card resolves from -9 to -4 degrees with a 35px offset over 1.25 seconds. Stacked bars grow from 25% scaleY with 60ms stagger increments. Use cubic-bezier(.22,1,.36,1). Keep the final pose defined outside the animation so the site is coherent without animation.

Scroll reveals happen once when a section enters the viewport. Necessary content is never permanently hidden waiting for JavaScript. Respect prefers-reduced-motion everywhere. Pause disables ambient animation and leaves all content in a readable final state; it must not freeze newly revealed content at opacity zero. No strobing, custom cursor, scroll hijacking, or automatic audio is needed.

At widths below 760px, stack the hero, simplify the dashboard, arrange feature tabs in two columns, stack visual and copy panels, turn pricing selectors into a row, and use one-column story cards. Keep primary actions reachable before excessive scrolling. Verify at 320px, 390px, 768px, and 1280px. Check the longest headline, navigation controls, plan labels, form inputs, and story titles for overflow or clipping. Do not shrink normal body text to make the layout fit.

## Reference interaction handler and acceptance checklist

The source includes setupPeople, setupNavigation, setupTabs, setupIntegrations, setupInquiry, setupNewsletter, and setupMotion. Each owns one coherent behavior. Preserve the separation of responsibilities and reuse the same accessible tab function for features and plans. Prefer native controls and browser capabilities over speculative abstractions or new dependencies.

Verify all four feature states by pointer and keyboard. Verify each plan’s title, price, checklist, and contact preselection. Verify person selection and sorting. Verify all seven page routes and all local asset paths. Submit valid dummy inquiry data, reload, copy the summary, and clear it. Test empty and invalid inputs and malformed storage. Confirm that network inspection shows no inquiry or newsletter submission. Check that pausing motion preserves visibility and that reduced-motion styles remove ambient loops.

Keep assets/texture.webp, stationery.webp, speaker.webp, morrow.webp, and northline.webp local. The first three are original generated art. Their briefs are, respectively: low-contrast ivory vertical paper/plaster folds; blank mint and ivory stationery on seafoam; an unbranded apricot speaker on lavender-gray. The remaining imagery is reused from the original ProtoSites collection with provenance. Keep font and icon licenses, and provide image credits in the package. Never reuse a proprietary template’s images or source code.

The final result must be a coherent, working Aven website with its own identity and content, while faithfully maintaining the intended spatial composition, soft material treatment, page rhythm, and clear interaction design. Deliver the complete site, this detailed prompt, and all required assets together.
