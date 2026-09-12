# Common Soil — a community-garden nonprofit website concept

Create Common Soil, an original community-garden nonprofit concept about shared growing spaces, practical care and neighbourhood participation. Build eight complete routes with substantial project and editorial content, an accessible garden explorer, a local volunteer-interest draft and a personal activity planner. The site must feel like a thoughtful civic project with a clear sense of place. It must not be a generic charity landing page with stock impact counters, donation buttons and a contact form that goes nowhere.

Common Soil is fictional. Its four garden projects, neighbourhoods, activities and stories are original illustrative content. The photography establishes atmosphere rather than documenting actual Common Soil work. There are no real addresses, verified facilities, participant totals, harvest figures, biodiversity outcomes or donations. The interaction should remain meaningful: users can explore projects, compare ways to help, prepare a draft, choose activities, notice schedule overlaps and download a personal plan. No application, registration, message, payment or external record is created.

## Research foundation and honest reference use

The primary reference is Burkinow's Bissiri community project at https://burkinow.com/en. It was discovered through Minimal Gallery's nonprofit category at https://minimal.gallery/tag/non-profit-charity/ and its listing at https://minimal.gallery/burkinow-bissiri/. The actual source was directly inspected in the browser, including its Place, Timeline and Project navigation. The Project control was used to reach the project presentation. No donation or contact action was taken.

The observed source creates a strong relationship between place and purpose. It uses an immersive full-screen spatial or photographic presentation, restrained navigation, a sequence of contextual statements, a timeline and a detailed community-space proposal. The project section describes different ways the proposed space could be used and provides deeper project material. This is the useful design lesson: an organisation's purpose becomes more understandable when the visitor can see the place, understand the proposed work and explore the specific ways people might use it.

Do not copy Burkinow's project name, visual identity, photographs, geographic location, impact claims, beneficiary counts, donor incentives, financial actions or source code. The exact rendering engine, scroll choreography, animation timing and donation implementation were not verified. Common Soil uses an original two-dimensional schematic map and ordinary local page interactions rather than claiming to reproduce the source's spatial technology. Its volunteer and activity flows are original design choices, not a copy of a real organisation's registration process.

The target should carry the source's place-led storytelling into a different identity: a warm, approachable garden network with original neighbourhood concepts, readable practical information and several ways into the work. It should feel hopeful without treating hope as evidence. Keep observed reference behavior, original implementation choices and fictional project content clearly separated in the credits and research notes.

## Brand and visual direction

The identity is common soil in a compact two-line lowercase sans-serif wordmark. Keep the wordmark direct and typographic, without an extra decorative symbol. Use locally hosted Geist variable throughout the navigation, controls, labels and most headings. A restrained Georgia italic can soften one editorial phrase, while longer stories use comfortable Georgia body copy. Avoid a decorative sprout logo that imitates the reference mark or a collection of unrelated garden icons.

Use warm paper #f5f2e5, dark garden green #244633, pale leaf green #d6e78a, muted olive dividers and a warm soil-paper tone. The hero's dark green text panel and bright botanical photograph create a clear first impression. The accent should feel like a young leaf rather than a technology highlight. Supporting text uses #52654c on light surfaces; dark sections use pale text with sufficient contrast. Check actual foreground/background combinations instead of assuming that muted green is readable everywhere.

Actual content and control text must be at least fourteen pixels, including mobile. Body descriptions are sixteen to nineteen pixels; long editorial prose is around twenty or twenty-one pixels with generous line height. Do not shrink a desktop map or form until the labels become decorative marks. Reflow the layout and preserve usable text. Headings can be large and expressive, but practical labels, time ranges and form instructions must remain easy to read.

Use broad photographic sections, open editorial typography, an original illustrated map, clear project rows and calm form panels. Avoid repeated three-card sections as the only composition. The homepage should change scale and rhythm: split hero, large mission statement, project photographs, map story, immersive garden moment, participation explanation, original stories and a practical activity invitation. Keep corners mostly square or very lightly softened. The identity should feel like a shared place rather than a polished financial dashboard.

## Complete route map and navigation

Generate index.html, gardens.html, garden.html, stories.html, story.html, volunteer.html, activities.html and about.html. The garden route accepts a known project id and renders a complete project page. The story route accepts a known story id and renders a complete original reflection. Unknown or missing identifiers fall back to a known item so the destination remains usable. These dynamic detail variants do not inflate the eight-route page count.

Every page shares a header, main landmark, skip link, closing invitation and footer. Header navigation includes Our gardens, Growing stories, What's on and Our approach. The main action is Find your part and opens the volunteer draft. On phones, the main links move into a real menu with an expanded state and a clear Close label. The draft action should remain available if it fits naturally; do not reduce it below the readable control size to preserve the desktop arrangement.

Use explicit index.html for home links and relative local paths throughout. Garden cards link to garden.html?id=...; story cards link to story.html?id=...; a garden's participation action preselects that garden in volunteer.html. A garden's activity link can scope activities.html to that garden, but the activity page must visibly name the scope and offer a route back to all gardens. Do not let a hidden query parameter silently contradict a filter labelled All activities.

The footer includes gardens, activities, volunteer interest, stories, approach, credits and a neutral Template library destination. It explains that places and activities are fictional and that drafts and plans remain local. Do not add public provider branding, deployment badges or favicons. Preserve the local font license and the distinction between original illustrations and licensed photographs.

## Homepage story and composition

Open with a split hero. The left side is dark green, with the original statement Good things grow between us in large, closely judged type. Its final phrase is pale leaf green. A short paragraph introduces shared gardens, open doors and small acts of care. The primary action leads to the garden explorer. A small but readable line identifies the concept as an imagined garden network. The right side is a substantial gardening photograph with a concise caption.

The photograph uses local hero.webp, explicit dimensions and high fetch priority. A slight scale settle can provide an arrival motion, but no loader or delayed text is needed. On a phone, place the text above the photograph rather than compressing the two halves into narrow columns. Let the title remain large, and keep the button comfortably tappable. The image should feel immersive without becoming the only way to understand the organisation.

Follow with an open editorial section about a place to plant, a reason to meet and more common ground. The explanation introduces the relationship between growing, learning, making and meeting. It should not claim measured health, social or ecological benefits. The next section presents three of the four original project concepts in large photographic cards, with area, project type, name, a short atmosphere line and a real detail destination.

A map-story section then introduces the imaginary neighbourhood. Pair a large original schematic with a statement about finding a place for different kinds of growing. The preview has four clearly visible numbered markers and a route into the working explorer. Label it as illustrative and not a navigation map. The map is an original composition, not a copied geographic map or a substitute for real directions.

Continue with a broad garden photograph and a large statement about growing more than what is planted. Use a dark shade only where necessary for text contrast. Then explain three ways to contribute: growing and care, welcoming and organising, learning and sharing. Each has practical copy that recognises more than physical gardening work. Follow with three original story cards and a final activity invitation. The last section leads into the sample programme and personal planner rather than a donation action.

## Garden dataset and original spatial explorer

Create four distinct garden concepts. Station Patch belongs to Station Quarter and focuses on food growing. The Orchard Room belongs to Orchard Rise and is a learning-space concept. River Bed belongs to Eastbank and explores a pollinator-oriented planted edge. The Canal Table belongs to Canal End and connects food growing with a shared table. These names, areas, locations and features are fictional. Their exact descriptions and stories are included in the data below.

Each garden record contains an id, name, area, type, local image, schematic x/y position, short tag, introduction, three concept features, three substantial story sections and three ways to help develop the idea. The map coordinates are percentages within the original illustration, not latitude or longitude. Do not pass them to a real mapping service. Do not add a geolocation request, route calculation, postcode search or real address.

The explorer contains a search input and filters for All gardens, Food growing, Learning space and Pollinator space. Search matches name, area, type and introduction case-insensitively. Category and search must combine correctly. A live result count describes project concepts, not operating gardens or impact. The map markers, list results and selected detail card all reflect the same filtered dataset.

Clicking a map marker selects the corresponding garden and updates a substantial image-and-copy panel. Its selected marker and list button expose aria-pressed. The detail panel contains area, type, name, introduction and real links to the full project and a preselected interest draft. Clicking the equivalent list control performs the same selection. This alternative list is essential: nobody should have to understand the map visually to explore the projects.

When a filter removes the currently selected garden, choose the first remaining result. When no gardens match, hide all markers and show a useful empty state in both the list and selection area. Do not retain a stale detail card that appears to match the current filter. Do not remove the entire map frame, since the spatial context can remain useful, but make the absence of results explicit.

The original map depicts an imaginary neighbourhood with pale blocks, paths, a blue-green water shape and a few tree forms. Place names in the drawing are decorative context; essential garden names and controls are real HTML at readable sizes. On mobile, keep markers comfortably sized and put the selected card below the map. Do not let marker labels spill beyond the map's visible bounds. The list follows and remains a complete alternative.

## Complete garden detail pages

A garden detail page begins with a large illustrative photograph, area/type context, the project name and a short original statement. Below it, pair a substantial introduction with a concept-features panel. Features should be described as project ideas, not verified access or facility claims. Include a clear note that real arrangements would need confirmation with a real organiser.

The main project story has three distinct sections. Station Patch explores arrival, shareable tasks and a useful learning routine. The Orchard Room considers a slower learning pace, a shared table and clear invitations. River Bed discusses overlooked edges, maintenance and careful observation without claiming measured habitat restoration. The Canal Table considers exchange, flexible participation and honest records of what happened. These sections must be complete original prose, not repeated placeholder paragraphs.

A final participation band lists three specific ways someone might help develop that concept and links to a preselected volunteer-interest draft. The closing navigation returns to the explorer or opens related sample activities. The page should give the visitor enough context to make a thoughtful choice, even though the place itself is fictional. Do not add real opening hours, transit directions, accessibility certification or a fabricated local contact.

## Original stories and impact language

Create three original reflections: A bench belongs in the plan, Growing a shared rhythm, and What we choose to notice. Each has a category, image, deck and four substantial titled sections. The story archive gives each a large image, readable summary and real destination. The story detail uses a split opener, a comfortable long-form reading column, clear section headings and a final context note.

The first story explains how arrival, pausing and different forms of participation belong in the design of a shared garden. The second examines small repeatable tasks, legible next steps, useful records and changing routines. The third distinguishes activities, observations, outcomes and proposals. Keep the writing reflective and specific. It should not sound like a grant report with invented evidence or a profile of people who do not exist.

A project proposal is not an outcome. The site must not invent tonnes of food grown, volunteers reached, trees saved, emissions avoided, biodiversity improvements, money raised or people helped. Even a count that appears plausible can mislead if the site presents it as real. The four projects and six activities are counts of the local demonstration dataset and can be described exactly that way. The approach page explicitly explains the fictional scope and the habit of keeping evidence attached to a claim.

## Volunteer-interest draft flow

The volunteer page is a local drafting tool, not an application form. It asks which garden interests the visitor, which kind of contribution they might like to try, how familiar that activity feels, what broad time windows could work and an optional practical note. It does not require a name, email, phone number, address, age, medical information or other personal contact details. The optional note should invite availability or project questions and say that personal details are unnecessary.

Garden choices include any garden and the four known project ids. Contribution choices are Growing & care, Welcoming & organising, Learning & sharing, and Making & practical help. Experience choices are a curious beginner, some previous experience, or experience to share. Availability options are weekday mornings, weekday afternoons, Saturday mornings and flexible. Require one contribution choice and at least one valid availability option. Garden defaults to any garden unless a known project is passed in the URL.

Submitting the form previews a complete draft in a separate review panel. The panel lists garden, contribution, experience, availability and the optional note. Escape user-entered text before rendering it. Preserve intentional line breaks. The preview does not automatically save or submit anything. Only after a valid preview should Save draft in this browser and Download my draft become available.

If the visitor changes an input after previewing, invalidate the current preview for saving and ask them to preview again. Do not silently save old values while the visible form contains new ones. A restored draft may populate the form and preview on load. If a garden query parameter changes that restored selection, require a fresh preview so the user can review the updated combination.

Saving persists the validated draft locally. Download creates a plain-text file containing the chosen information and an explicit sentence that no application, registration or message was sent. A clear action removes the saved draft, resets the form and restores the initial preview state. Clearing an interest draft must not erase the separate activity plan. Storage failure leaves the current valid preview downloadable and explains that persistence is unavailable.

## Activity explorer and personal planner

Create six fictional activities on three sample October 2026 Saturdays. Each event record has an id, title, garden id, category, date, start time, end time and description. Categories are Hands-on, Learning and Walk & notice. Use large date blocks and clear time ranges. Explain that this is a sample programme, not actual availability or an invitation to travel to a real event.

Activity filters change the list but do not discard selected activities. If the page is scoped to a garden through its URL, show that garden name in the programme context and offer an All gardens link. Each activity card links to its garden and has an Add to my plan action. The action toggles selected state, changes its label and updates the personal planner. Use a set-like list of known ids so repeated selections never create duplicates.

The planner lists selected events in date and start-time order, with title, date, time, garden and Remove. It shows the number of selected activities and the sum of their durations. Duration is computed from the event's start and end minutes, so a ninety-minute session contributes one and a half hours. The total is a sum of choices, not a claim about confirmed attendance. If activities overlap, their durations are still counted separately and the conflict is explained.

Two activities overlap when they share a date and each begins before the other ends. Events that meet exactly at an endpoint are not overlapping. The initial sample includes a deliberate conflict between the two October 3 activities and another between the October 17 activities. Show a clear text warning naming the conflicting choices and their date. Let the visitor decide what to remove; do not silently replace a choice or pretend travel time has been considered.

Download my activity plan creates a local text file with dates, time ranges, titles, garden names, total selected duration and any overlap warnings. It states that no attendance, registration, availability or travel arrangement is confirmed. Clear my plan removes selected ids while preserving a saved volunteer draft. Empty state explains how to begin and disables the download action. No activity selection sends a message, reserves a place or creates a calendar invitation.

## State, validation and implementation quality

Use one local storage record, common-soil-plan-v1, containing a plan array and an optional draft object. Validate restored plan ids against the current event dataset and remove duplicates. Validate draft garden and contribution choices, filter availability to known options, restore experience only from its allowed values and bound the note to one thousand characters. Corrupt JSON falls back to an empty plan and no draft. Do not trust arbitrary stored HTML or let unknown ids create broken links.

Keep overlap, duration and draft validation in a small importable domain module. The browser must use those same functions, embedded by the static builder, rather than maintaining another subtly different calculation. Tests should exercise overlapping events, adjacent nonoverlapping times, ninety-minute durations and required draft choices. The dataset is small, so a clear pairwise overlap check is preferable to a speculative scheduling abstraction.

All local mutations should have direct, understandable feedback. Counts and selected states update immediately. Use live regions for result counts, draft errors, preview status and overlap messages without announcing the entire page after every click. Avoid artificial loading spinners because no network work is happening. Generated download URLs should be revoked after use. Nothing is posted, uploaded or transmitted to another service.

## Accessibility, responsiveness and final delivery

Use semantic header, nav, main, section, article, aside, form, fieldset, legend, label, button, select and textarea elements. Each actual page has one h1 and a coherent heading sequence. Dynamic garden and story pages must render their h1 promptly and update the document title to match. Map markers are real buttons with clear names and visible focus. The list alternative must expose all the same destinations and selected state.

At 390 pixels, all eight routes must fit without horizontal document overflow. The hero stacks, project and story cards become readable single columns, the map and selection panel stack, and form or planner sidebars move below their primary content. Do not leave a sticky sidebar occupying half a phone. Native inputs and buttons retain comfortable tap targets. Verify actual computed font sizes, not just source declarations, and keep all visible text at fourteen pixels or larger.

Motion is restrained and connected to the content: a slight photographic settle, gentle image-hover changes and responsive selection states. Do not reproduce a complex scroll-jacking experience merely because the source has immersive storytelling. Common Soil must remain easy to navigate and usable with reduced motion. Native scrolling, direct links and a clear map selection are enough to create a rich experience when the content and composition are considered.

Source files live in scripts/common-soil. The builder exports buildCommonSoil() and returns an object containing prompt. Generated pages and assets live in public/demos/common-soil. Write the complete reconstruction prompt to public/prompts/common-soil.md and duplicate it beside the demo. Append exact fictional project, event and story data plus the complete model and interaction code under the required Reference interaction handler heading. Keep all used assets local, including hero.webp, the original schematic map, Geist and its license.

Credits identify the original map, original writing, licensed Unsplash photography and the Burkinow research. The image provenance file records exact source identifiers and local names. Do not copy reference-site photos or imply that the licensed images document these fictional projects. Do not edit shared catalog, router, validator, deployment or credential files from this task.

Before handoff, build all eight routes and verify local targets, titles, heading order and readable text. Exercise map and list selection, combined garden search and type filtering, empty results, project-to-draft preselection, required draft validation, preview invalidation, save restoration, safe literal notes, download execution and clear behavior. Add the two overlapping October 3 events, verify four selected hours and the conflict, remove one and confirm two hours without a warning, then add a ninety-minute event and confirm the new total. Check persistence and clear the QA data afterward. Inspect desktop and mobile screenshots and report concrete results and limits honestly.

## Responsive photographic delivery

Retain each original locally licensed photograph and create an800px-wide WebP derivative at quality80. Supply both widths through srcset on shared photographic components, using a100vw size hint so narrow screens can fetch the smaller file while large or high-density displays retain the original. Do not replace the original source or change the image composition. Record the derivative beside its source in provenance. Keep the hero eager with fetchpriority high and supporting photography lazy.


## Exact fictional project and activity data

```json
{
  "gardens": [
    {
      "id": "station-patch",
      "name": "Station Patch",
      "area": "Station Quarter",
      "kind": "Food growing",
      "image": "garden",
      "x": 24,
      "y": 25,
      "tag": "A useful little piece of the neighbourhood",
      "intro": "An imagined growing space beside an old station yard, built around shared beds, practical learning and a place to stop for a conversation.",
      "features": [
        "Shared growing beds",
        "A tool-library idea",
        "A gathering bench"
      ],
      "story": [
        {
          "title": "Begin with a place to meet",
          "text": "The proposal starts with an ordinary question: where can neighbours spend an hour together without needing to buy anything? A few growing beds are part of the answer, but so are a generous gate, somewhere to put a bag, and a bench that does not belong to anyone in particular."
        },
        {
          "title": "Make the work shareable",
          "text": "Station Patch imagines small tasks that can be explained and finished in a single visit. Watering, labelling, checking a bed, or putting tools away all create ways to contribute. The intention is to make a first visit feel possible without expecting every newcomer to become an expert."
        },
        {
          "title": "Leave room to learn",
          "text": "A shared garden needs more than a planting plan. It needs a way to decide what changes, who keeps the notes, and how a person can ask for help. This concept puts a noticeboard and a regular open session beside the beds, so the social work is as visible as the growing."
        }
      ],
      "needs": [
        "Help plan a welcoming first visit",
        "Think through shared-tool routines",
        "Explore a simple growing diary"
      ]
    },
    {
      "id": "orchard-room",
      "name": "The Orchard Room",
      "area": "Orchard Rise",
      "kind": "Learning space",
      "image": "flowers",
      "x": 76,
      "y": 24,
      "tag": "A garden with a little room for questions",
      "intro": "A learning-garden concept where seasonal observation, seed stories and creative activities can happen around one shared table.",
      "features": [
        "Outdoor learning table",
        "Seasonal observation beds",
        "Seed-library concept"
      ],
      "story": [
        {
          "title": "Learning at a different pace",
          "text": "The Orchard Room is imagined as a place where a question can take its time. A leaf, a seed pod or a patch of soil offers something to observe before anyone needs the right answer. The proposal leaves space for drawing, comparing and returning to the same small detail over several visits."
        },
        {
          "title": "A table as common ground",
          "text": "The central table matters as much as the beds. It gives people a place to sort materials, share a notebook, or begin a conversation while their hands are occupied. The concept includes different kinds of participation, from practical activity to simply looking and listening."
        },
        {
          "title": "Keep the invitation clear",
          "text": "A learning space is easier to enter when visitors know what to expect. The project proposes short session descriptions, a visible meeting point and an explanation of what is optional. These details are intentions in a fictional design, not verified facilities or a promise about a real venue."
        }
      ],
      "needs": [
        "Develop a simple seasonal activity",
        "Organise a seed-story session",
        "Help make instructions welcoming"
      ]
    },
    {
      "id": "river-bed",
      "name": "River Bed",
      "area": "Eastbank",
      "kind": "Pollinator space",
      "image": "woods",
      "x": 29,
      "y": 68,
      "tag": "A softer edge between the path and the water",
      "intro": "An imagined planted corridor that makes room for seasonal flowers, observation and slower journeys along a neighbourhood path.",
      "features": [
        "Seasonal planting concept",
        "Observation stops",
        "Shared care rota"
      ],
      "story": [
        {
          "title": "Notice the edges",
          "text": "River Bed begins with the overlooked strip beside a familiar route. Instead of treating that edge as leftover space, the concept asks what a more varied planting scheme and a few places to pause might make possible. It is a design proposal, not a claim about restored habitat or measured biodiversity."
        },
        {
          "title": "Care before spectacle",
          "text": "A planting plan can be exciting at the beginning and difficult to maintain later. This project puts the care routine into the first conversation: who checks the path, how observations are recorded, and what can be changed when an idea does not work as expected."
        },
        {
          "title": "Observe, then decide",
          "text": "The proposal includes a modest observation practice: visit, describe what is visible, and keep the date with the note. A useful record distinguishes a sighting from a trend and a hope from an outcome. That habit is part of the Common Soil approach to telling an honest project story."
        }
      ],
      "needs": [
        "Plan an observation walk",
        "Help maintain a care diary",
        "Consider a clear path-side sign"
      ]
    },
    {
      "id": "canal-table",
      "name": "The Canal Table",
      "area": "Canal End",
      "kind": "Food growing",
      "image": "harvest",
      "x": 78,
      "y": 70,
      "tag": "Growing is only one part of sharing",
      "intro": "A food-growing and shared-table concept connecting a small kitchen garden with conversations about what we grow, cook and pass on.",
      "features": [
        "Kitchen-garden concept",
        "Shared harvest table",
        "Recipe-notebook idea"
      ],
      "story": [
        {
          "title": "From a bed to a table",
          "text": "The Canal Table imagines a garden whose story does not end at harvest. A table gives the produce a social setting: a place to compare a leaf, write down a recipe, or talk about how an ingredient is used in different homes. The emphasis is on exchange rather than a claim about food distribution."
        },
        {
          "title": "Make participation flexible",
          "text": "Not everyone wants to dig, and not every useful contribution happens in the beds. The concept includes organising labels, setting out a table, keeping notes and welcoming visitors. A shared project becomes more generous when it can recognise different kinds of work."
        },
        {
          "title": "Tell the story carefully",
          "text": "This project would need a clear way to record what actually happened before describing its impact. Attendance, activities and participant observations answer different questions. The design proposes a simple learning log and a habit of asking what could be improved, rather than reaching immediately for an impressive total."
        }
      ],
      "needs": [
        "Collect a sample recipe story",
        "Plan a welcoming table layout",
        "Help structure a learning log"
      ]
    }
  ],
  "events": [
    {
      "id": "open-beds",
      "title": "An open morning in the beds",
      "garden": "station-patch",
      "category": "Hands-on",
      "date": "2026-10-03",
      "start": "09:00",
      "end": "11:00",
      "description": "A sample introduction to shared growing tasks, tools and the rhythm of an open garden session."
    },
    {
      "id": "seed-stories",
      "title": "Seeds, stories & a shared table",
      "garden": "orchard-room",
      "category": "Learning",
      "date": "2026-10-03",
      "start": "10:00",
      "end": "12:00",
      "description": "An imagined session for sorting seeds, comparing notes and thinking about what a seed library could hold."
    },
    {
      "id": "slow-walk",
      "title": "A slower walk along the edge",
      "garden": "river-bed",
      "category": "Walk & notice",
      "date": "2026-10-10",
      "start": "10:00",
      "end": "11:30",
      "description": "A sample observation walk focused on noticing seasonal details and keeping useful notes."
    },
    {
      "id": "table-talk",
      "title": "From garden to table",
      "garden": "canal-table",
      "category": "Learning",
      "date": "2026-10-10",
      "start": "13:00",
      "end": "15:00",
      "description": "An imagined gathering around ingredients, recipes and the different ways people contribute."
    },
    {
      "id": "care-day",
      "title": "A little care goes a long way",
      "garden": "station-patch",
      "category": "Hands-on",
      "date": "2026-10-17",
      "start": "09:30",
      "end": "11:30",
      "description": "A sample morning for considering bed care, labels, shared tools and the next set of small jobs."
    },
    {
      "id": "notice-season",
      "title": "A notebook for the season",
      "garden": "orchard-room",
      "category": "Walk & notice",
      "date": "2026-10-17",
      "start": "11:00",
      "end": "12:30",
      "description": "An imagined creative session using words and sketches to describe what is changing in the garden."
    }
  ],
  "stories": [
    {
      "id": "a-bench-belongs",
      "title": "A bench belongs in the plan",
      "category": "Places & people",
      "image": "garden",
      "dek": "The social life of a garden starts before anyone picks up a spade.",
      "sections": [
        {
          "title": "Somewhere to arrive",
          "text": "A garden can have a beautiful planting plan and still be difficult to enter. A visitor may not know where to stand, what is expected, or whether they are interrupting something. The first useful piece of infrastructure might be a place to sit while those questions settle. A bench makes room for arrival without requiring an immediate contribution."
        },
        {
          "title": "Participation has more than one shape",
          "text": "The person watching a task may be learning how to join it. The person who comes for a conversation may return with an idea. A shared place becomes narrower when every visit must be justified by visible work. This does not mean that care happens by itself. It means that the invitation can recognise different rhythms of participation."
        },
        {
          "title": "Design the pause",
          "text": "A seat placed beside an activity offers a different experience from one hidden at the edge. The relationship between a bench, a path and a working area can make a conversation easier without blocking the task. Shade, a clear approach and a view of what is happening are design questions worth asking early. In this fictional project, they remain questions to investigate rather than verified features."
        },
        {
          "title": "A modest measure",
          "text": "If a real project wanted to understand whether a bench helped, it could begin by observing and asking. Who uses it? When does it feel welcoming? What makes it difficult to reach or comfortable to stay? A photograph of an empty bench cannot answer those questions. The useful story comes from the relationship between the place and the people who choose to use it."
        }
      ]
    },
    {
      "id": "shared-rhythm",
      "title": "Growing a shared rhythm",
      "category": "Ways of working",
      "image": "seedlings",
      "dek": "Small, repeatable tasks can make a shared project easier to enter and easier to keep going.",
      "sections": [
        {
          "title": "The work between the big days",
          "text": "A launch event is easy to describe. The smaller visits between events are less dramatic, but they shape the experience of a shared garden. A label is replaced, a tool returns to its shelf, a note explains what happened yesterday. These actions are not a separate category from the project. They are how the project continues to exist."
        },
        {
          "title": "Make the next task legible",
          "text": "A newcomer should not need to understand the entire garden before doing one useful thing. A clear task has a beginning, a reasonable stopping point and someone or something to consult when a question appears. The aim is not to turn every visit into a checklist, but to reduce the uncertainty that can make a person feel they are in the way."
        },
        {
          "title": "Keep a record that someone will use",
          "text": "A shared notebook does not need to become an elaborate reporting system. A date, a short description and a practical next step may be enough. The record is useful when the next person can understand it without finding the author. It should support continuity rather than becoming another obligation that only one person knows how to maintain."
        },
        {
          "title": "Leave room to change the routine",
          "text": "A routine that works for the first group may not suit the next. People arrive with different schedules, experience and interests. A regular conversation about what is easy, what is unclear and what has become too much can keep the project from depending on invisible effort. Common Soil imagines that conversation as part of the growing work, not as an administrative interruption."
        }
      ]
    },
    {
      "id": "honest-impact",
      "title": "What we choose to notice",
      "category": "Learning in public",
      "image": "flowers",
      "dek": "An honest project story starts by separating what happened, what changed and what we still do not know.",
      "sections": [
        {
          "title": "Begin with the question",
          "text": "A number can make a project look certain before the question behind it is clear. Counting sessions tells us that sessions happened. Counting visits tells us something about attendance. Neither automatically explains whether people felt welcome, learned something useful, or wanted to return. A good account starts by asking what the project is trying to understand."
        },
        {
          "title": "Keep the evidence attached",
          "text": "A short observation becomes more useful when its context stays with it. When was it made? What was happening? Was it one person’s impression or a repeated pattern? These details do not make a story less human. They help a reader understand what the observation can reasonably support and where uncertainty remains."
        },
        {
          "title": "Make room for the awkward result",
          "text": "A project may discover that an activity was difficult to join, that a sign was unclear, or that a care routine asked too much of a few people. Those findings can be valuable even when they do not fit a celebratory headline. Describing a change in response to feedback is often more informative than presenting every decision as a success from the beginning."
        },
        {
          "title": "A proposal is not an outcome",
          "text": "Common Soil’s gardens and activities are fictional concepts. Their stories describe intentions, design questions and possible ways of working. They do not establish real participation, harvest, biodiversity or social outcomes. Keeping that distinction visible is part of the design: a useful invitation can be hopeful without asking the reader to mistake a possibility for evidence."
        }
      ]
    }
  ]
}
```

## Reference interaction handler

```javascript
function durationMinutes(event) {
  const minutes = (value) =>
    Number(value.slice(0, 2)) * 60 + Number(value.slice(3));
  return minutes(event.end) - minutes(event.start);
}
function overlappingEvents(events) {
  const conflicts = [];
  for (let i = 0; i < events.length; i++)
    for (let j = i + 1; j < events.length; j++) {
      const a = events[i],
        b = events[j];
      if (a.date === b.date && a.start < b.end && b.start < a.end)
        conflicts.push([a.id, b.id]);
    }
  return conflicts;
}
function planSummary(ids, events) {
  const selected = events
    .filter((event) => ids.includes(event.id))
    .sort(
      (a, b) => a.date.localeCompare(b.date) || a.start.localeCompare(b.start),
    );
  return {
    selected,
    minutes: selected.reduce((sum, event) => sum + durationMinutes(event), 0),
    conflicts: overlappingEvents(selected),
  };
}
function validateInterest(draft, gardens) {
  if (
    draft.garden !== 'any' &&
    !gardens.some((garden) => garden.id === draft.garden)
  )
    return 'Choose a garden or any garden.';
  if (
    ![
      'Growing & care',
      'Welcoming & organising',
      'Learning & sharing',
      'Making & practical help',
    ].includes(draft.role)
  )
    return 'Choose a way you might like to help.';
  if (
    !Array.isArray(draft.days) ||
    !draft.days.some((day) =>
      [
        'Weekday mornings',
        'Weekday afternoons',
        'Saturday mornings',
        'Flexible',
      ].includes(day),
    )
  )
    return 'Choose at least one availability option.';
  return '';
}

(() => {
  'use strict';
  const { gardens, events, stories } = JSON.parse(
    document.getElementById('soil-data').textContent,
  );
  const gardenById = new Map(gardens.map((garden) => [garden.id, garden]));
  const eventById = new Map(events.map((event) => [event.id, event]));
  const e = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  const key = 'common-soil-plan-v1';
  const allowedDays = [
    'Weekday mornings',
    'Weekday afternoons',
    'Saturday mornings',
    'Flexible',
  ];
  const allowedExperience = [
    "I'm new and curious",
    "I've tried a little before",
    'I have experience to share',
  ];
  let state = { plan: [], draft: null };
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      if (Array.isArray(stored.plan))
        state.plan = [
          ...new Set(stored.plan.filter((id) => eventById.has(id))),
        ];
      if (stored.draft && typeof stored.draft === 'object') {
        const draft = {
          garden: stored.draft.garden,
          role: stored.draft.role,
          experience: allowedExperience.includes(stored.draft.experience)
            ? stored.draft.experience
            : allowedExperience[0],
          days: Array.isArray(stored.draft.days)
            ? [
                ...new Set(
                  stored.draft.days.filter((day) => allowedDays.includes(day)),
                ),
              ]
            : [],
          note:
            typeof stored.draft.note === 'string'
              ? stored.draft.note.slice(0, 1000)
              : '',
        };
        if (!validateInterest(draft, gardens)) state.draft = draft;
      }
    }
  } catch {
    state = { plan: [], draft: null };
  }
  let toastTimer;
  function notify(message) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3300);
  }
  function persist() {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      return true;
    } catch {
      notify('Available for this visit. Browser saving is unavailable.');
      return false;
    }
  }
  function download(name, text) {
    const url = URL.createObjectURL(
      new Blob([text], { type: 'text/plain;charset=utf-8' }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const dateLabel = (date) =>
    new Date(date + 'T12:00:00Z').toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = document.querySelector('header').classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelector('header').classList.remove('menu-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
    }
  });
  const selection = document.getElementById('garden-selection');
  let selectedGarden = gardens[0].id;
  let gardenFilter = 'All gardens';
  function renderSelection(id) {
    const garden = gardenById.get(id);
    if (!selection || !garden) return;
    selectedGarden = id;
    selection.innerHTML = `<article class="garden-selected"><img src="assets/${garden.image}.webp" alt="${garden.name} illustrative photography"><div><p class="eyebrow">${garden.area} / ${garden.kind}</p><h2>${garden.name}</h2><p>${garden.intro}</p><a href="garden.html?id=${garden.id}" class="button">Explore the project ↗</a><a href="volunteer.html?garden=${garden.id}" class="text-link">Imagine taking part →</a></div></article>`;
    document
      .querySelectorAll('[data-map-garden]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.mapGarden === id),
        ),
      );
    document
      .querySelectorAll('[data-list-garden]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.listGarden === id),
        ),
      );
  }
  function filterGardens() {
    const query = document
      .getElementById('garden-search')
      .value.trim()
      .toLowerCase();
    const visible = gardens.filter(
      (garden) =>
        (gardenFilter === 'All gardens' || garden.kind === gardenFilter) &&
        `${garden.name} ${garden.area} ${garden.kind} ${garden.intro}`
          .toLowerCase()
          .includes(query),
    );
    document.getElementById('garden-count').textContent =
      `${visible.length} ${visible.length === 1 ? 'project concept' : 'project concepts'}`;
    document.querySelectorAll('[data-map-garden]').forEach((button) => {
      button.hidden = !visible.some(
        (garden) => garden.id === button.dataset.mapGarden,
      );
    });
    document
      .querySelectorAll('[data-garden-filter]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.gardenFilter === gardenFilter),
        ),
      );
    document.getElementById('garden-list').innerHTML = visible
      .map(
        (garden) =>
          `<article class="garden-list-item"><button data-list-garden="${garden.id}" aria-pressed="${garden.id === selectedGarden}"><img src="assets/${garden.image}.webp" alt=""><div><h3>${garden.name}</h3><p>${garden.area} / ${garden.kind}</p></div></button><a href="garden.html?id=${garden.id}" aria-label="Read about ${garden.name}">↗</a></article>`,
      )
      .join('');
    document.getElementById('garden-empty').hidden = visible.length > 0;
    if (!visible.length) {
      selection.innerHTML =
        '<article class="garden-selected"><div><h2>A different search?</h2><p>No garden concepts match. Try another word or choose All gardens.</p></div></article>';
      return;
    }
    renderSelection(
      visible.some((garden) => garden.id === selectedGarden)
        ? selectedGarden
        : visible[0].id,
    );
  }
  if (selection) {
    document.querySelectorAll('[data-garden-filter]').forEach((button) =>
      button.addEventListener('click', () => {
        gardenFilter = button.dataset.gardenFilter;
        filterGardens();
      }),
    );
    document
      .getElementById('garden-search')
      .addEventListener('input', filterGardens);
    document
      .querySelectorAll('[data-map-garden]')
      .forEach((button) =>
        button.addEventListener('click', () =>
          renderSelection(button.dataset.mapGarden),
        ),
      );
    document
      .getElementById('garden-list')
      .addEventListener('click', (event) => {
        const button = event.target.closest('[data-list-garden]');
        if (button) renderSelection(button.dataset.listGarden);
      });
    filterGardens();
  }
  const gardenDetail = document.getElementById('garden-detail');
  if (gardenDetail) {
    const garden =
      gardenById.get(new URLSearchParams(location.search).get('id')) ||
      gardens[0];
    gardenDetail.innerHTML = `<section class="garden-detail-hero"><img src="assets/${garden.image}.webp" alt="${garden.name} illustrative project photography"><div><p class="eyebrow">${garden.area} / ${garden.kind} / PROJECT CONCEPT</p><h1>${garden.name}</h1><p>${garden.tag}</p></div></section><section class="garden-detail-intro"><div><h2>A place to begin.</h2><p>${garden.intro}</p><a href="volunteer.html?garden=${garden.id}" class="button">Find a way to take part ↗</a></div><aside class="garden-features"><h3>The project idea</h3><ul>${garden.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><p>Illustrative proposal. Facilities, access and activity arrangements are not verified real-world details.</p></aside></section><section class="garden-story"><div><h2>From a patch<br>to a shared place.</h2></div><div>${garden.story.map((section) => `<article><h3>${section.title}</h3><p>${section.text}</p></article>`).join('')}</div></section><section class="garden-needs"><h2>A few ways<br>to help the idea grow.</h2><div><ul>${garden.needs.map((need) => `<li>${need}</li>`).join('')}</ul><a class="button" href="volunteer.html?garden=${garden.id}">Make an interest draft ↗</a></div></section><div class="garden-detail-bottom"><a href="gardens.html" class="text-link">← Back to the neighbourhood</a><a href="activities.html?garden=${garden.id}" class="text-link">Explore related sample activities ↗</a></div>`;
    document.title = `${garden.name} — Common Soil`;
  }
  const storyDetail = document.getElementById('story-detail');
  if (storyDetail) {
    const story =
      stories.find(
        (item) => item.id === new URLSearchParams(location.search).get('id'),
      ) || stories[0];
    storyDetail.innerHTML = `<article><section class="story-opener"><div><p class="eyebrow">${story.category} / ORIGINAL REFLECTION</p><h1>${story.title}</h1><p>${story.dek}</p></div><img src="assets/${story.image}.webp" alt="${story.title} illustrative photography"></section><div class="story-body"><a class="back-link" href="stories.html">← Growing stories</a>${story.sections.map((section) => `<section><h2>${section.title}</h2><p>${section.text}</p></section>`).join('')}<div class="story-end"><p>Original project writing. Common Soil's places and activities are fictional concepts; this is not a report of measured real-world impact.</p><a href="gardens.html" class="text-link">Explore the project ideas ↗</a></div></div></article>`;
    document.title = `${story.title} — Common Soil`;
  }
  const interestForm = document.getElementById('interest-form');
  let currentDraft = null;
  function draftText(draft) {
    return [
      'COMMON SOIL / MY VOLUNTEER-INTEREST DRAFT',
      '',
      `Garden: ${draft.garden === 'any' ? 'Open to any garden' : gardenById.get(draft.garden).name}`,
      `Interest: ${draft.role}`,
      `Experience: ${draft.experience}`,
      `Availability: ${draft.days.join(', ')}`,
      `Notes: ${draft.note || 'No additional notes.'}`,
      '',
      'This is a local draft for a fictional community-garden concept. No application, registration or message has been sent.',
    ].join('\n');
  }
  function renderDraft(draft) {
    const rows = [
      [
        'Garden',
        draft.garden === 'any'
          ? 'Open to any garden'
          : gardenById.get(draft.garden).name,
      ],
      ['A way to help', draft.role],
      ['Experience', draft.experience],
      ['Availability', draft.days.join(', ')],
      ['A note or question', draft.note || 'No additional notes.'],
    ];
    document.getElementById('interest-summary').innerHTML = rows
      .map(
        ([label, value]) =>
          `<div class="draft-row"><span>${label}</span><strong>${e(value)}</strong></div>`,
      )
      .join('');
    document.getElementById('interest-actions').hidden = false;
  }
  if (interestForm) {
    if (state.draft) {
      currentDraft = state.draft;
      interestForm.elements.namedItem('garden').value = currentDraft.garden;
      interestForm.elements.namedItem('role').value = currentDraft.role;
      interestForm.elements.namedItem('experience').value =
        currentDraft.experience;
      interestForm.elements.namedItem('note').value = currentDraft.note;
      interestForm.querySelectorAll('[name="days"]').forEach((input) => {
        input.checked = currentDraft.days.includes(input.value);
      });
      renderDraft(currentDraft);
      document.getElementById('interest-status').textContent =
        'Your saved local draft is ready to review.';
    }
    const requested = new URLSearchParams(location.search).get('garden');
    if (gardenById.has(requested)) {
      interestForm.elements.namedItem('garden').value = requested;
      currentDraft = null;
      document.getElementById('interest-actions').hidden = true;
      document.getElementById('interest-status').textContent =
        'Garden selected. Preview your draft to confirm the details.';
    }
    interestForm.addEventListener('input', () => {
      currentDraft = null;
      document.getElementById('interest-actions').hidden = true;
      document.getElementById('interest-status').textContent =
        'Your answers changed. Preview again to update the draft.';
    });
    interestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(interestForm);
      const draft = {
        garden: data.get('garden'),
        role: data.get('role'),
        experience: data.get('experience'),
        days: data.getAll('days'),
        note: interestForm.elements
          .namedItem('note')
          .value.trim()
          .slice(0, 1000),
      };
      const error = validateInterest(draft, gardens);
      document.getElementById('interest-error').textContent = error;
      if (error) return;
      currentDraft = draft;
      renderDraft(draft);
      document.getElementById('interest-status').textContent =
        'Draft ready. Review it, then save locally or download a copy.';
    });
    document.getElementById('save-interest').addEventListener('click', () => {
      if (!currentDraft) return;
      state.draft = currentDraft;
      document.getElementById('interest-status').textContent = persist()
        ? 'Saved in this browser. No organiser receives this draft.'
        : 'Available for this visit only. You can still download it.';
    });
    document.getElementById('clear-interest').addEventListener('click', () => {
      state.draft = null;
      currentDraft = null;
      interestForm.reset();
      persist();
      document.getElementById('interest-actions').hidden = true;
      document.getElementById('interest-summary').innerHTML =
        '<p>Your draft will appear here after you choose an interest and availability.</p>';
      document.getElementById('interest-status').textContent =
        'The saved interest draft has been cleared.';
    });
    document
      .getElementById('download-interest')
      .addEventListener('click', () => {
        if (!currentDraft) return;
        download('common-soil-interest-draft.txt', draftText(currentDraft));
        document.getElementById('interest-status').textContent =
          'Your draft is ready to download. Nothing was submitted.';
      });
  }
  const eventList = document.getElementById('event-list');
  let eventFilter = 'All activities';
  const requestedGarden = new URLSearchParams(location.search).get('garden');
  function renderEvents() {
    if (!eventList) return;
    const visible = events.filter(
      (event) =>
        (eventFilter === 'All activities' || event.category === eventFilter) &&
        (!gardenById.has(requestedGarden) || event.garden === requestedGarden),
    );
    eventList.innerHTML = visible
      .map((event) => {
        const garden = gardenById.get(event.garden);
        const selected = state.plan.includes(event.id);
        return `<article class="event-card"><div class="event-date"><strong>${event.date.slice(-2)}</strong><span>OCT</span><span>2026</span></div><div><p class="eyebrow">${event.category} / ${garden.name}</p><h2>${event.title}</h2><p>${event.description}</p><span class="event-time">${event.start}–${event.end} / ${durationMinutes(event) / 60} hours / Sample activity</span><div><button data-plan-event="${event.id}" aria-pressed="${selected}" class="button">${selected ? 'Added to my plan ✓' : 'Add to my plan +'}</button><a href="garden.html?id=${garden.id}" class="text-link">Meet the garden ↗</a></div></div></article>`;
      })
      .join('');
    document.getElementById('event-empty').hidden = visible.length > 0;
    document
      .querySelectorAll('[data-event-filter]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.eventFilter === eventFilter),
        ),
      );
  }
  function renderPlan() {
    if (!eventList) return;
    const summary = planSummary(state.plan, events);
    document.getElementById('planned-events').innerHTML = summary.selected
      .length
      ? summary.selected
          .map(
            (event) =>
              `<article class="planned-event"><h3>${event.title}</h3><p>${dateLabel(event.date)} / ${event.start}–${event.end}<br>${gardenById.get(event.garden).name}</p><button data-remove-event="${event.id}">Remove from plan</button></article>`,
          )
          .join('')
      : '<p class="activity-plan-empty">Choose an activity that interests you. Your ideas will stay here as you explore.</p>';
    document.getElementById('plan-total').textContent = summary.selected.length
      ? `${summary.selected.length} ${summary.selected.length === 1 ? 'activity' : 'activities'} / ${summary.minutes / 60} hours of selected activity`
      : '';
    document.getElementById('plan-conflicts').innerHTML = summary.conflicts
      .length
      ? `<strong>A little overlap to consider.</strong><p>${summary.conflicts.map(([a, b]) => `${eventById.get(a).title} and ${eventById.get(b).title} overlap on ${dateLabel(eventById.get(a).date)}.`).join(' ')}</p><p>Choose which you prefer. Travel time is not calculated.</p>`
      : '';
    document.getElementById('download-plan').disabled =
      !summary.selected.length;
    document.getElementById('clear-plan').hidden = !summary.selected.length;
  }
  if (eventList) {
    if (gardenById.has(requestedGarden))
      document.querySelector('.sample-calendar-note').innerHTML =
        `SAMPLE OCTOBER 2026 / ${gardenById.get(requestedGarden).name.toUpperCase()} / <a href="activities.html">All gardens ↗</a>`;
    document.querySelectorAll('[data-event-filter]').forEach((button) =>
      button.addEventListener('click', () => {
        eventFilter = button.dataset.eventFilter;
        renderEvents();
      }),
    );
    eventList.addEventListener('click', (event) => {
      const button = event.target.closest('[data-plan-event]');
      if (!button) return;
      const id = button.dataset.planEvent;
      state.plan = state.plan.includes(id)
        ? state.plan.filter((item) => item !== id)
        : [...state.plan, id];
      persist();
      renderEvents();
      renderPlan();
    });
    document
      .getElementById('planned-events')
      .addEventListener('click', (event) => {
        const button = event.target.closest('[data-remove-event]');
        if (!button) return;
        state.plan = state.plan.filter(
          (id) => id !== button.dataset.removeEvent,
        );
        persist();
        renderEvents();
        renderPlan();
      });
    document.getElementById('clear-plan').addEventListener('click', () => {
      state.plan = [];
      persist();
      renderEvents();
      renderPlan();
    });
    document.getElementById('download-plan').addEventListener('click', () => {
      const summary = planSummary(state.plan, events);
      const text = [
        'COMMON SOIL / MY SAMPLE ACTIVITY PLAN',
        '',
        ...summary.selected.map(
          (event) =>
            `${dateLabel(event.date)} / ${event.start}–${event.end}\n${event.title}\n${gardenById.get(event.garden).name}\n`,
        ),
        `${summary.minutes / 60} hours of selected activity (overlaps counted separately).`,
        ...summary.conflicts.map(
          ([a, b]) =>
            `OVERLAP: ${eventById.get(a).title} / ${eventById.get(b).title}`,
        ),
        '',
        'Fictional activities. No attendance, registration, availability or travel arrangements are confirmed.',
      ].join('\n');
      download('common-soil-activity-plan.txt', text);
      notify('Your sample plan is ready to download. No place was reserved.');
    });
    renderEvents();
    renderPlan();
  }
})();

```
