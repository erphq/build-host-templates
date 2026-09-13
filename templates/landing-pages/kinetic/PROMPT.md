# Kinetic — an original movement-studio website and local session planner

Create Kinetic, a fictional movement and fitness studio with an athletic poster identity, substantial class and studio stories, a useful weekly schedule, a personal shortlist and a local booking-interest draft. Build six complete routes. The site must be visually distinct from calm hospitality pages, community-garden projects and neutral SaaS interfaces. It should feel like a studio with a strong relationship to music, space and graphic culture, while making the practical journey easy to understand.

Kinetic is not an operating studio. Its four formats, two locations and twelve sample sessions are original illustrative content. There are no real bookings, payments, instructor messages, membership purchases, availability guarantees or health outcomes. The site does not give exercises, routines, intensity recommendations, equipment settings or medical advice. Its descriptions concern the atmosphere, structure and design of fictional studio formats. Its planner compares times, not the suitability of combining classes.

## Live reference research and boundaries

The primary reference is Gymbox at https://gymbox.com/. The live homepage and class archive at https://gymbox.com/class/ were directly inspected in the browser. The View schedule control was opened, revealing a studio-location selector leading to timetables. No booking, membership, trial registration, payment or contact action was performed. Frame at https://moveyourframe.com/ was also consulted as public context for class discovery, but Gymbox is the main visual and structural reference.

The observed Gymbox homepage uses a black navigation surface, bold athletic typography, dramatic interior imagery and a strong campaign proposition. It continues into class-category discovery with large photographs, category labels and links into a deeper archive. The class page provides a prominent title, a schedule destination, category filters and many linked class-detail entries. The timetable entry asks the visitor to choose a studio before proceeding. These observations establish a useful journey from brand atmosphere to class format to practical scheduling.

Do not copy the reference's name, boxed wordmark, campaign copy, yellow brand palette, photographs, class names, customer claims, location list, offers or code. Do not reproduce its health, recovery or performance claims. The authenticated timetable, real capacity, instructor availability, cancellation policy, account flow and payment implementation were not inspected. Kinetic's shortlist, overlap checking and local draft are original implementation choices rather than claims about the source product.

Translate the source's poster confidence into a separate direction: signal orange, black, off-white, monochrome imagery and a locally hosted condensed display typeface. Kinetic should have its own typography, content, graphic proportions and class names. The task is a complete original studio concept informed by a high-quality reference, not an imitation of an existing gym business.

## Identity, imagery and graphic system

Use KINETIC as a direct uppercase wordmark in Barlow Condensed Bold, with a small directional arrow. Host the font locally and include its SIL Open Font License. Use locally hosted Geist variable for body copy, navigation, metadata, controls, form labels and schedule details. The contrast between condensed poster headings and clear practical text is central to the design. Do not compress body text or schedule labels to create an artificial athletic look.

The principal colours are near-black #111214, off-white #f4f4ef and signal orange #ff7047. Pale blue, lilac and a muted acid yellow distinguish the individual class concepts. Keep the main orange meaning consistent: a strong invitation, a highlighted phrase, or an important visual accent. It is not an error colour everywhere. Timing-conflict warnings use a separate pale warm panel with dark readable text.

All actual content and controls are at least fourteen pixels. Body descriptions are sixteen to nineteen pixels, and long studio or class passages can be eighteen to twenty-three pixels. Schedule times and class names are larger. The display face may be very large and tightly led, but ordinary labels must remain legible. Do not use tiny metadata, miniature calendars or an entire desktop timetable scaled down for a phone.

Use licensed independent fitness and studio photography, stored locally as WebP. The hero photograph and several class images may be presented in monochrome through CSS, with functional dark overlays where text sits on them. This is art direction, not a claim that the photographs depict Kinetic premises or instructors. Image alternatives should describe the visible subject and state illustrative context where useful. Do not invent credentials for people in photographs.

Keep buttons mostly rectangular and direct. Use thin rules, large cropped type, photographic class panels and strong changes between dark and light sections. Avoid rounded wellness cards, pastel health dashboards, inspirational testimonials, body-transformation imagery or fabricated results. The visual energy should come from composition and typography, not unsupported promises.

## Complete routes and navigation

Generate index.html, classes.html, class.html, schedule.html, studios.html and plan.html. The class detail route accepts a known class id and renders a complete format page. Unknown or missing identifiers fall back to Pulse. The schedule accepts known class or studio parameters and visibly selects the corresponding filter. The plan route can accept a class parameter to preselect its interest draft. All paths are relative, and home navigation uses explicit index.html.

The shared header contains the Kinetic wordmark, The classes, The week, The studios, My plan with a live count, and Find your session. Every destination is real within the demo. On mobile, the main navigation is revealed by a Menu button with aria-expanded and a clear Close state. Escape closes the menu. The shortlist remains reachable through the navigation and schedule actions even when space is limited.

The footer contains class formats, sample schedule, studio stories, personal plan, credits and a neutral Template library link. It explains the fictional scope without hiding it in a separate legal document. Do not add favicons, public provider branding, deployment-service badges, fake social channels or an email address that suggests a real studio exists. Preserve image and font licensing information in the credits.

## Homepage poster sequence

Begin with a full-width photographic hero under the black header. Use a monochrome gym-interior image with a strong dark shade. The original headline is Your kind of movement, set in very large condensed uppercase type. The final word is orange. A small readable line identifies the page as an original movement-studio concept. The primary action leads to class formats. Supporting copy near the lower edge explains the four formats, two imagined spaces and a sample week.

The hero should feel like an athletic poster brought into a browser. Its image can settle from a slight scale enlargement, but there is no loading screen, autoplay requirement or hidden initial content. Keep the headline and action visible on a small laptop. On mobile, preserve the condensed type's impact while allowing natural line wrapping and maintaining a readable description. Do not let a long word extend beyond the viewport.

Follow the hero with an orange graphic strip and a concise introduction to four different ways into the studio concept. The next section is a horizontally scrollable class archive with four substantial photographic panels. Each contains the class style, large format name, a directional link, a short atmosphere line and sample duration. Previous and next controls move by one actual card width plus the gap. Touch scrolling and scroll snapping should work naturally.

A dark timetable poster follows. It presents two sample Monday sessions and explicitly notes that they overlap. This creates a practical connection between the brand story and the working planner. The section links to the full schedule. Do not imply that the sample slots have available places or that the visitor should attend both.

Next use a large studio photograph with a statement about the room having a point of view. Link to the studio stories. Then create a clearer-first-step section that explains exploring a format, making a personal list and keeping practical questions. Finish with a strong graphic statement on a pale blue surface and a final invitation to explore the week. The page should contain varied compositions rather than the same card row repeated with new headings.

## Class formats and their stories

Create four original class concepts: Pulse, Forge, Loop and Shift. Their broad styles are Rhythm, Strength, Cycle and Floor. Pulse and Loop use forty-five-minute sample slots. Forge and Shift use fifty-minute sample slots. These durations describe the fictional timetable and are not exercise prescriptions. Each record includes an image, colour, short line, introduction, three original story sections and four practical format notes.

Pulse is music-led and social in its visual direction. Its story considers the soundtrack, an open room and a welcome that does not ask the visitor to perform an identity. Forge uses an organised studio-floor concept and a clearer relationship between layout and session structure. Loop imagines a dedicated cycle room with a contained visual atmosphere. Shift is a quieter floor-based concept whose design differs from the louder poster language. None of these descriptions promises physical, mental or therapeutic outcomes.

The classes archive opens with a large poster-style title and a short explanation. Its four cards use a two-column desktop grid and a single-column phone layout. Images stay substantial. Each card leads to class.html with the correct id. A contextual section explains that these are descriptions rather than prescriptions and points to the local draft for practical questions.

Each detail page has a large split opening: class name, style, duration and short line on one side, illustrative photography on the other. Continue with a substantial introduction and a colour-coded format-notes panel. The main story has three distinct headings and paragraphs. Do not replace them with generic repeated feature text. Follow with all sample sessions for that format, each with date, time, studio and a working Add to my plan button.

A detail page also links back to all formats and to a preselected interest draft. The content should help someone understand the imagined studio experience without pretending to determine what is suitable for them. Do not add workout instructions, repetitions, pace targets, resistance settings, calorie estimates or medical screening questions.

## Studio stories

Create two fictional studios: The Foundry in West Quarter and Signal House in East Quarter. These are invented area names, not real addresses. The Foundry is imagined as a converted workroom with an open floor, a dedicated cycle-room concept and a shared arrival space. Signal House is a different room character with a movement space, quieter floor-based room and a clear meeting-point idea. Photography is illustrative and may come from different real locations.

The studio page opens with a strong condensed statement about the room setting the scene. Each studio receives a large photograph, area context, name, atmosphere line, substantial description, concept notes and a route to its filtered sample schedule. Follow the studio pair with a longer editorial passage about arrival, the place to wait, readable information and the role of the room in the experience.

Practical questions explain that no real studio is operating, no reservation can be made and no routine is recommended. Access, equipment, changing facilities, age requirements, class content and individual arrangements are not verified. Do not create a fake map pin, travel route, phone number or opening-hours claim. A real visitor would need a real provider's information; this site offers only a local way to organise interests and questions.

## Weekly schedule and filters

The sample programme covers October 5 through October 11, 2026, with twelve sessions. The exact records are appended below. Sessions have a safe id, class id, studio id, date, start time and end time. Use padded twenty-four-hour times so sorting and overlap comparisons remain clear. The page labels the week as fictional and avoids availability badges such as Only two spots left or Booking now.

Provide day controls for All week and each Monday-through-Sunday date. Add styled selects for class style, studio and time of day. Time periods are Morning before 12:00, Midday from 12:00 to before 17:00, and Evening from 17:00 onward. Filters combine. Selecting a class through a query parameter should set its style filter; selecting a studio should set that studio filter. Reset filters returns to the complete week and clears all four dimensions.

Render matching sessions grouped by date and ordered chronologically. Each row shows a prominent start time, duration and end time, class name linked to detail, coloured style label, studio name, area and Add to my plan. The live count reports sample sessions matching the current view. If nothing matches, show a useful empty state with a direct action to restore the whole week.

On phones, day controls scroll inside their own rail. Session rows reflow into readable cards with time at left and format, studio and action at right. Do not require horizontal page panning to read a timetable. Keep the session action visible without hover. Filtering must not discard saved sessions, and a selected button must remain selected when its row returns after a filter change.

## Personal shortlist and timing logic

The personal plan stores distinct known session ids. Adding an already selected session toggles it off rather than duplicating it. All header counts and buttons update together. The plan page lists selected sessions in date and start-time order, with format, date, duration, studio and Remove. It also displays the total number of selected sessions and the sum of their minutes.

The total is descriptive, not prescriptive. It does not recommend a training volume, frequency or combination. Overlapping sessions are counted separately in the sum and explicitly flagged. A pair overlaps when the dates match, the first start is before the second end, and the second start is before the first end. Exactly adjacent intervals do not overlap. Studio differences do not eliminate a timing conflict, and travel time is not calculated.

The sample Monday deliberately contains Pulse from 18:00 to 18:45 and Forge from 18:15 to 19:05. Together they total ninety-five selected minutes and create one conflict. Removing either clears that conflict and leaves the appropriate forty-five or fifty minutes. Thursday also has an intentional overlap between different studio concepts. These examples make the planner meaningful without inventing a booking backend.

The conflict message names the formats and date. It allows the user to keep both as possibilities or remove one. Do not silently reject or replace a choice, and do not suggest which class is better for the person. A plan is a shortlist of interests, not an exercise programme. The empty state explains how to begin and disables the download action until at least one session is selected.

Download my shortlist creates a plain-text file containing dates, times, format names, studio names, selected minutes and overlap warnings. It states that no booking, payment or message was made and that the shortlist is not exercise advice. Clear sessions removes only the session list, preserving a separately saved interest draft. Every action remains local.

## Local booking-interest draft

The lower part of the plan page contains a complete booking-interest drafting flow. It asks for a class format, a studio or either studio, a visit context and an optional practical question. Context choices are First visit, Returning to the concept and Just exploring. The form does not ask for a name, email address, telephone number, age, weight, medical history, fitness goal or other personal or health details.

Require a known class format and a known context. Studio defaults to either studio and must remain within the known options. The practical question is optional and limited to one thousand characters. Its label invites questions about the studio experience or format and explicitly says personal or medical details are unnecessary. Do not present the draft as a message that will reach an instructor.

Submitting previews the selected information in a separate panel. The preview lists class and style, studio, context and question. Escape the note before rendering it and preserve intentional line breaks. Only a valid current preview can be saved or downloaded. If the visitor edits an input after previewing, hide the stale preview and require another preview action. This prevents the save action from silently preserving old values.

Saving stores the draft in the browser. Download creates a text file with the chosen context and a clear local-only statement. Clearing removes the draft and resets the form without deleting the session shortlist. A known class query parameter preselects the format and requires a fresh preview so the visitor can review the full combination. A restored saved draft can populate both form and preview when no new query overrides it.

There is no booking confirmation, payment collection, cancellation policy, email delivery or available-seat check. The success message says Saved in this browser and explicitly notes that no studio receives it. This is a concrete, useful drafting tool, not a fake submission flow.

## Persistence, validation and code structure

Use kinetic-interest-v1 as the local storage key, with selected session ids and an optional draft. Validate restored ids against the current session dataset and remove duplicates. Reconstruct the draft from known class, studio and context values, and bound the optional note. Corrupt JSON falls back to an empty shortlist and no draft. Unknown query parameters should be ignored or fall back to a known class rather than creating an error page.

Keep duration, overlap, schedule filtering and draft validation in a small importable model module. The browser uses the same functions embedded by the static builder. Test those functions directly: forty-five- and fifty-minute durations, combined filters, zero-result combinations, overlapping Monday sessions, adjacent nonoverlapping intervals and required draft choices. The dataset is small, so a clear pairwise conflict check is sufficient and easier to review than a speculative scheduling framework.

User-entered notes remain text. Never inject raw form values into HTML. Use native controls and delegated listeners where that avoids duplicating event logic across schedule and class-detail buttons. Update selected labels without rerendering unrelated long-form content unnecessarily. Persist changes once per actual user action. If storage is unavailable, keep the current visit working and explain that it cannot be saved across visits.

Download files through temporary Blob URLs and revoke them afterward. Do not create calendar invitations, send email, call booking APIs, use a payment SDK or request location access. The site's real value is its complete local exploration journey and original visual design, not an implied connection to services that do not exist.

## Accessibility and responsive art direction

Use semantic navigation, main landmarks, one actual h1 per route, coherent headings, real buttons, labelled selects and textareas. Day filters and saved-session actions expose aria-pressed. Menu state uses aria-expanded. Result counts, conflict messages, form errors and confirmations use suitable live regions without repeatedly announcing the entire schedule. Keep focus rings visible against dark, orange and pale surfaces.

At 390 pixels, all six routes must fit without horizontal document overflow. Condensed display type may be large, but long words must wrap or scale within the content width. The class archive becomes a readable single column. Studio stories stack. The schedule becomes cards. Plan sidebars move below the selected sessions, and the interest form uses one column. Do not retain fixed desktop widths or reduce labels below fourteen pixels to force a layout to fit.

Motion should support the poster language: a slight photographic settle, restrained class-image hover changes and a native horizontal class track with arrow controls. Respect reduced motion by removing decorative transitions and using immediate scrolling. Do not add flashing effects, strobing, continuous shake, autoplay sound or an exercise timer. The site is a studio concept, not a workout instruction surface.

## Assets, build contract and final checks

Store the licensed photography locally as hero.webp and the class/studio images. Record exact Unsplash source identifiers, URLs, local names and the license at https://unsplash.com/license in provenance.json. State that images are illustrative and do not depict Kinetic instructors or premises. Include Barlow Condensed Bold from the official Google Fonts repository with its license, and the local Geist variable font with its license. Do not redistribute Gymbox or Frame assets.

Source files live in scripts/kinetic. Export buildKinetic() from the build module and return an object containing prompt. Generated output lives in public/demos/kinetic. Write the public reconstruction prompt to public/prompts/kinetic.md and duplicate it beside the demo. Append the exact fictional class, studio and session data and the full model plus interaction code under the required Reference interaction handler heading. Do not edit shared catalog, router, validator, deployment or credential files.

Before handoff, run scoped lint, syntax and model tests. In the browser, combine day/style/studio/time filters, verify empty results and reset, add the overlapping Monday pair, confirm ninety-five minutes and the conflict, remove one and check the updated total. Test class-detail selection buttons, studio-to-schedule filtering, shortlist persistence, draft validation, safe literal notes, preview invalidation, save restoration, downloads and clear actions. Inspect desktop and mobile screenshots, check all detail variants, measure actual text sizes and overflow, and clear QA state before delivery. Report what was actually observed and any remaining limits honestly.


## Exact fictional class, studio and schedule data

```json
{
  "classes": [
    {
      "id": "pulse",
      "name": "Pulse",
      "style": "Rhythm",
      "image": "rhythm",
      "color": "#ff7047",
      "duration": 45,
      "line": "A room. A playlist. Your own rhythm.",
      "intro": "A fictional rhythm-led studio format with a strong musical identity and a social, open-room atmosphere. The idea is a class that feels like an event, with a clear beginning and a shared soundtrack.",
      "sections": [
        {
          "title": "The sound sets the scene",
          "text": "Pulse is imagined around a carefully considered playlist and a room with space to see what is happening. The music gives the session a character, while the studio design keeps the focus on the group rather than a wall of screens."
        },
        {
          "title": "An invitation, not a performance",
          "text": "The concept is about joining a room without needing to arrive with a polished version of yourself. A clear welcome, a visible host and a straightforward explanation of the format would be part of the studio experience. This page does not provide movement instructions or assess suitability."
        },
        {
          "title": "Before a real visit",
          "text": "Kinetic is not an operating studio. In a real setting, class content, access arrangements, instructor support and individual requirements would need a direct conversation with the provider. The sample schedule here is for exploring a website, not making a training plan."
        }
      ],
      "details": [
        "Rhythm-led format concept",
        "45-minute sample slot",
        "Open studio setting",
        "No routine or exercise prescription"
      ]
    },
    {
      "id": "forge",
      "name": "Forge",
      "style": "Strength",
      "image": "strength",
      "color": "#c7d4ee",
      "duration": 50,
      "line": "Clear structure. A different kind of focus.",
      "intro": "An imagined strength-class format organised around a studio floor, a clear session structure and a practical approach to the room. The page describes the concept, not a set of exercises or promised results.",
      "sections": [
        {
          "title": "A floor with a purpose",
          "text": "Forge gives the physical layout a role in the experience. Equipment has a place, routes through the room are legible, and the session is presented as a sequence rather than an improvised collection of tasks. The photography is illustrative and does not document a Kinetic facility."
        },
        {
          "title": "Keep the context visible",
          "text": "A useful class description can explain the setting, duration and general format without making assumptions about the person reading it. Forge keeps those details close and leaves individual suitability to a real conversation with a qualified provider."
        },
        {
          "title": "A concept you can explore",
          "text": "Use the timetable to compare fictional slots and save a personal interest list. The list is not a recommendation about how often to exercise, which classes to combine or what intensity to choose. No booking, payment or instruction is delivered."
        }
      ],
      "details": [
        "Strength-format concept",
        "50-minute sample slot",
        "Organised studio-floor setting",
        "No performance or health claims"
      ]
    },
    {
      "id": "loop",
      "name": "Loop",
      "style": "Cycle",
      "image": "cycle",
      "color": "#e9ec7c",
      "duration": 45,
      "line": "The soundtrack goes round. So does the room.",
      "intro": "A fictional indoor-cycle concept with a graphic visual identity, a music-first atmosphere and a simple, contained studio format. Its schedule is a demonstration rather than an invitation to a real session.",
      "sections": [
        {
          "title": "One room, one atmosphere",
          "text": "Loop imagines a dedicated space where light, sound and layout belong to one idea. The room is intentionally different from the open movement floor: a more contained environment with a strong shared focal point."
        },
        {
          "title": "The practical details matter",
          "text": "Knowing the duration, location concept and broad format can make a class easier to understand. It does not establish whether a session is appropriate for a particular person. This site does not give resistance settings, pacing instructions or fitness guidance."
        },
        {
          "title": "Put a possibility in your week",
          "text": "The local plan lets you collect interesting sample sessions and notice timing conflicts. It does not calculate travel, recommend class combinations or reserve a place. Keep the distinction between exploring a concept and arranging a real visit clear."
        }
      ],
      "details": [
        "Indoor-cycle format concept",
        "45-minute sample slot",
        "Dedicated room direction",
        "No equipment settings or training advice"
      ]
    },
    {
      "id": "shift",
      "name": "Shift",
      "style": "Floor",
      "image": "floor",
      "color": "#d4bee8",
      "duration": 50,
      "line": "Less noise. More room to notice.",
      "intro": "An imagined floor-based movement format with a quieter visual pace, generous room spacing and a different relationship to the studio soundtrack. The description is editorial, not exercise or medical advice.",
      "sections": [
        {
          "title": "A change in the room",
          "text": "Shift is the counterpoint to Kinetic’s louder poster language. The concept uses softer light, a less crowded visual field and a clear boundary between the session space and the rest of the studio. It describes an atmosphere rather than a promised physical or mental outcome."
        },
        {
          "title": "A description with limits",
          "text": "Words such as gentle or suitable for everyone can hide important differences between people and classes. This fictional description avoids those claims. A real class would need its own explanation of content, instructor support and individual considerations."
        },
        {
          "title": "Make the next question clear",
          "text": "If the format interests you, add a sample slot to your local plan or prepare a booking-interest draft. The draft is a place for practical questions about the studio experience. It is not sent to an instructor and does not ask for medical information."
        }
      ],
      "details": [
        "Floor-based format concept",
        "50-minute sample slot",
        "Quieter room direction",
        "No therapeutic or suitability claims"
      ]
    }
  ],
  "studios": [
    {
      "id": "foundry",
      "name": "The Foundry",
      "area": "West Quarter",
      "image": "studio",
      "line": "A little industrial. A lot of character.",
      "description": "An imagined studio in a converted workroom, with a strong graphic entrance, an open floor and a dedicated cycle-room concept. This is a fictional setting, not a real address.",
      "notes": [
        "Open-floor room concept",
        "Dedicated cycle-room concept",
        "Shared arrival space"
      ]
    },
    {
      "id": "signal",
      "name": "Signal House",
      "area": "East Quarter",
      "image": "floor",
      "line": "A different corner of the same idea.",
      "description": "A fictional light-filled studio with a movement room, a quieter floor-based space and a place to pause before the next thing. Photographs are mood references, not verified premises.",
      "notes": [
        "Movement-room concept",
        "Quieter floor-space concept",
        "Clear meeting-point idea"
      ]
    }
  ],
  "sessions": [
    {
      "id": "mon-pulse",
      "classId": "pulse",
      "studio": "foundry",
      "date": "2026-10-05",
      "start": "18:00",
      "end": "18:45"
    },
    {
      "id": "mon-forge",
      "classId": "forge",
      "studio": "foundry",
      "date": "2026-10-05",
      "start": "18:15",
      "end": "19:05"
    },
    {
      "id": "tue-loop",
      "classId": "loop",
      "studio": "foundry",
      "date": "2026-10-06",
      "start": "07:30",
      "end": "08:15"
    },
    {
      "id": "tue-shift",
      "classId": "shift",
      "studio": "signal",
      "date": "2026-10-06",
      "start": "18:30",
      "end": "19:20"
    },
    {
      "id": "wed-forge",
      "classId": "forge",
      "studio": "foundry",
      "date": "2026-10-07",
      "start": "12:15",
      "end": "13:05"
    },
    {
      "id": "wed-pulse",
      "classId": "pulse",
      "studio": "signal",
      "date": "2026-10-07",
      "start": "18:00",
      "end": "18:45"
    },
    {
      "id": "thu-loop",
      "classId": "loop",
      "studio": "foundry",
      "date": "2026-10-08",
      "start": "18:00",
      "end": "18:45"
    },
    {
      "id": "thu-shift",
      "classId": "shift",
      "studio": "signal",
      "date": "2026-10-08",
      "start": "18:30",
      "end": "19:20"
    },
    {
      "id": "fri-pulse",
      "classId": "pulse",
      "studio": "foundry",
      "date": "2026-10-09",
      "start": "17:30",
      "end": "18:15"
    },
    {
      "id": "sat-shift",
      "classId": "shift",
      "studio": "signal",
      "date": "2026-10-10",
      "start": "09:00",
      "end": "09:50"
    },
    {
      "id": "sat-loop",
      "classId": "loop",
      "studio": "foundry",
      "date": "2026-10-10",
      "start": "10:00",
      "end": "10:45"
    },
    {
      "id": "sun-pulse",
      "classId": "pulse",
      "studio": "signal",
      "date": "2026-10-11",
      "start": "10:00",
      "end": "10:45"
    }
  ]
}
```

## Reference interaction handler

```javascript
function sessionMinutes(session) {
  const minutes = (value) =>
    Number(value.slice(0, 2)) * 60 + Number(value.slice(3));
  return minutes(session.end) - minutes(session.start);
}
function sessionConflicts(sessions) {
  const result = [];
  for (let i = 0; i < sessions.length; i++)
    for (let j = i + 1; j < sessions.length; j++) {
      const a = sessions[i],
        b = sessions[j];
      if (a.date === b.date && a.start < b.end && b.start < a.end)
        result.push([a.id, b.id]);
    }
  return result;
}
function filterSessions(sessions, classes, filters) {
  return sessions.filter((session) => {
    const type = classes.find((item) => item.id === session.classId);
    const hour = Number(session.start.slice(0, 2));
    const period = hour < 12 ? 'morning' : hour < 17 ? 'midday' : 'evening';
    return (
      (!filters.day || session.date === filters.day) &&
      (!filters.style || type.style === filters.style) &&
      (!filters.studio || session.studio === filters.studio) &&
      (!filters.period || period === filters.period)
    );
  });
}
function validateInterest(draft, classes, studios) {
  if (!classes.some((item) => item.id === draft.classId))
    return 'Choose a class format to ask about.';
  if (
    draft.studio !== 'either' &&
    !studios.some((item) => item.id === draft.studio)
  )
    return 'Choose a studio or either studio.';
  if (
    !['First visit', 'Returning to the concept', 'Just exploring'].includes(
      draft.context,
    )
  )
    return 'Choose the context for your interest.';
  return '';
}

(() => {
  'use strict';
  const { classes, studios, sessions } = JSON.parse(
    document.getElementById('kinetic-data').textContent,
  );
  const classById = new Map(classes.map((item) => [item.id, item]));
  const studioById = new Map(studios.map((item) => [item.id, item]));
  const sessionById = new Map(sessions.map((item) => [item.id, item]));
  const key = 'kinetic-interest-v1';
  const e = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  let state = { selected: [], draft: null };
  let currentDraft = null;
  let toastTimer;
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      if (Array.isArray(stored.selected))
        state.selected = [
          ...new Set(stored.selected.filter((id) => sessionById.has(id))),
        ];
      if (stored.draft && typeof stored.draft === 'object') {
        const draft = {
          classId: stored.draft.classId,
          studio: stored.draft.studio,
          context: stored.draft.context,
          note:
            typeof stored.draft.note === 'string'
              ? stored.draft.note.slice(0, 1000)
              : '',
        };
        if (!validateInterest(draft, classes, studios)) state.draft = draft;
      }
    }
  } catch {
    state = { selected: [], draft: null };
  }
  const dateLabel = (date) =>
    new Date(date + 'T12:00:00Z').toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
  function notify(message) {
    const node = document.querySelector('.toast');
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('show'), 3300);
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
  function updateButtons() {
    document.querySelectorAll('.plan-count').forEach((node) => {
      node.textContent = state.selected.length;
    });
    document.querySelectorAll('[data-session]').forEach((button) => {
      const selected = state.selected.includes(button.dataset.session);
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = selected ? 'In my plan ✓' : 'Add to my plan +';
    });
  }
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
  document.querySelectorAll('[data-track]').forEach((button) =>
    button.addEventListener('click', () => {
      const track = document.querySelector('.class-track');
      const card = track.querySelector('.class-card');
      const gap = Number(getComputedStyle(track).gap.replace('px', ''));
      track.scrollBy({
        left:
          Number(button.dataset.track) *
          (card.getBoundingClientRect().width + gap),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
    }),
  );
  const classDetail = document.getElementById('class-detail');
  if (classDetail) {
    const item =
      classById.get(new URLSearchParams(location.search).get('id')) ||
      classes[0];
    classDetail.innerHTML = `<section class="class-detail-hero" style="--class-color:${item.color}"><div><p class="eyebrow">${item.style} / ${item.duration}-MINUTE SAMPLE FORMAT</p><h1>${item.name}</h1><p>${item.line}</p><a href="schedule.html?class=${item.id}" class="button">See sample sessions ↗</a></div><img src="assets/${item.image}.webp" alt="${item.name} illustrative movement photography"></section><section class="class-detail-intro"><p>${item.intro}</p><aside class="class-facts" style="--class-color:${item.color}"><h2>FORMAT NOTES</h2><ul>${item.details.map((detail) => `<li>${detail}</li>`).join('')}</ul></aside></section><section class="class-story"><div><h2>THE IDEA<br>BEHIND<br>THE ROOM.</h2></div><div>${item.sections.map((section) => `<article><h3>${section.title}</h3><p>${section.text}</p></article>`).join('')}</div></section><section class="class-slots"><p class="eyebrow">FICTIONAL SESSIONS / OCTOBER 5–11, 2026</p><h2>PUT A POSSIBILITY<br>IN YOUR WEEK.</h2>${sessions
      .filter((session) => session.classId === item.id)
      .map(
        (session) =>
          `<article class="mini-session"><div><h3>${dateLabel(session.date)} / ${session.start}–${session.end}</h3><p>${studioById.get(session.studio).name} / No live availability</p></div><button class="button" data-session="${session.id}" aria-pressed="false">Add to my plan +</button></article>`,
      )
      .join(
        '',
      )}</section><div class="class-detail-bottom"><a class="text-link" href="classes.html">← All class formats</a><a class="text-link" href="plan.html?class=${item.id}#interest">Make a local interest draft ↗</a></div>`;
    document.title = `${item.name} / ${item.style} — Kinetic`;
  }
  const sessionList = document.getElementById('session-list');
  const filters = { day: '', style: '', studio: '', period: '' };
  function renderSchedule() {
    if (!sessionList) return;
    const visible = filterSessions(sessions, classes, filters);
    const days = [...new Set(visible.map((session) => session.date))];
    sessionList.innerHTML = days
      .map(
        (day) =>
          `<section class="schedule-day"><h2>${dateLabel(day)}</h2>${visible
            .filter((session) => session.date === day)
            .map((session) => {
              const item = classById.get(session.classId),
                studio = studioById.get(session.studio);
              return `<article class="session-row"><div class="session-time"><strong>${session.start}</strong><span>${sessionMinutes(session)} min / to ${session.end}</span></div><div class="session-class" style="--class-color:${item.color}"><h3><a href="class.html?id=${item.id}">${item.name} ↗</a></h3><span>${item.style}</span></div><div class="session-studio"><p>${studio.name}</p><span>${studio.area}</span></div><button class="button" data-session="${session.id}" aria-pressed="false">Add to my plan +</button></article>`;
            })
            .join('')}</section>`,
      )
      .join('');
    document.getElementById('session-count').textContent =
      `${visible.length} sample ${visible.length === 1 ? 'session' : 'sessions'}`;
    document.getElementById('schedule-empty').hidden = visible.length > 0;
    document
      .querySelectorAll('[data-day]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.day === filters.day),
        ),
      );
    updateButtons();
  }
  if (sessionList) {
    const params = new URLSearchParams(location.search);
    const requestedClass = classById.get(params.get('class'));
    if (requestedClass) filters.style = requestedClass.style;
    if (studioById.has(params.get('studio')))
      filters.studio = params.get('studio');
    document.getElementById('style-filter').value = filters.style;
    document.getElementById('studio-filter').value = filters.studio;
    document.querySelectorAll('[data-day]').forEach((button) =>
      button.addEventListener('click', () => {
        filters.day = button.dataset.day;
        renderSchedule();
      }),
    );
    for (const property of ['style', 'studio', 'period'])
      document
        .getElementById(property + '-filter')
        .addEventListener('change', (event) => {
          filters[property] = event.target.value;
          renderSchedule();
        });
    const reset = () => {
      filters.day = '';
      filters.style = '';
      filters.studio = '';
      filters.period = '';
      for (const property of ['style', 'studio', 'period'])
        document.getElementById(property + '-filter').value = '';
      renderSchedule();
    };
    document.getElementById('reset-filters').addEventListener('click', reset);
    document.getElementById('reset-empty').addEventListener('click', reset);
    renderSchedule();
  }
  function selectedSessions() {
    return sessions
      .filter((session) => state.selected.includes(session.id))
      .sort(
        (a, b) =>
          a.date.localeCompare(b.date) || a.start.localeCompare(b.start),
      );
  }
  function renderPlan() {
    const target = document.getElementById('plan-sessions');
    if (!target) return;
    const selected = selectedSessions();
    target.innerHTML = selected.length
      ? selected
          .map((session) => {
            const item = classById.get(session.classId);
            return `<article class="planned-session"><strong>${session.start}</strong><div><h3>${item.name}</h3><p>${dateLabel(session.date)} / ${sessionMinutes(session)} minutes<br>${studioById.get(session.studio).name} / ${item.style}</p></div><button data-remove-session="${session.id}">Remove</button></article>`;
          })
          .join('')
      : '<div class="plan-empty"><h3>A format caught your eye?</h3><p>Add a sample session from the schedule. Your personal shortlist will appear here, with any timing overlaps clearly marked.</p></div>';
    const conflicts = sessionConflicts(selected);
    document.getElementById('plan-overlaps').innerHTML = conflicts.length
      ? `<strong>A timing clash to consider.</strong><p>${conflicts
          .map(([a, b]) => {
            const first = sessionById.get(a),
              second = sessionById.get(b);
            return `${classById.get(first.classId).name} and ${classById.get(second.classId).name} overlap on ${dateLabel(first.date)}.`;
          })
          .join(
            ' ',
          )}</p><p>Keep both as possibilities or remove one. Travel and suitability are not calculated.</p>`
      : '';
    const minutes = selected.reduce(
      (sum, session) => sum + sessionMinutes(session),
      0,
    );
    document.getElementById('plan-duration').textContent = selected.length
      ? `${selected.length} sample ${selected.length === 1 ? 'session' : 'sessions'} / ${minutes} selected minutes`
      : '';
    document.getElementById('download-plan').disabled = !selected.length;
    document.getElementById('clear-sessions').hidden = !selected.length;
  }
  document.addEventListener('click', (event) => {
    const add = event.target.closest('[data-session]');
    if (add) {
      const id = add.dataset.session;
      if (!sessionById.has(id)) return;
      state.selected = state.selected.includes(id)
        ? state.selected.filter((item) => item !== id)
        : [...state.selected, id];
      persist();
      updateButtons();
      renderPlan();
      notify('Your local shortlist is updated. Nothing is booked.');
      return;
    }
    const remove = event.target.closest('[data-remove-session]');
    if (remove) {
      state.selected = state.selected.filter(
        (id) => id !== remove.dataset.removeSession,
      );
      persist();
      updateButtons();
      renderPlan();
    }
  });
  document.getElementById('clear-sessions')?.addEventListener('click', () => {
    state.selected = [];
    persist();
    updateButtons();
    renderPlan();
  });
  document.getElementById('download-plan')?.addEventListener('click', () => {
    const selected = selectedSessions();
    const text = [
      'KINETIC / MY SAMPLE SESSION SHORTLIST',
      '',
      ...selected.map(
        (session) =>
          `${dateLabel(session.date)} / ${session.start}–${session.end}\n${classById.get(session.classId).name} / ${studioById.get(session.studio).name}\n`,
      ),
      `${selected.reduce((sum, session) => sum + sessionMinutes(session), 0)} selected minutes; overlaps counted separately.`,
      ...sessionConflicts(selected).map(
        ([a, b]) =>
          `OVERLAP: ${classById.get(sessionById.get(a).classId).name} / ${classById.get(sessionById.get(b).classId).name}`,
      ),
      '',
      'Fictional sessions. No booking, payment or message. This shortlist is not exercise advice or a training recommendation.',
    ].join('\n');
    download('kinetic-session-shortlist.txt', text);
    notify('Your shortlist is ready to download. No place was reserved.');
  });
  const form = document.getElementById('interest-form');
  function interestText(draft) {
    return [
      'KINETIC / LOCAL BOOKING-INTEREST DRAFT',
      '',
      `Format: ${classById.get(draft.classId).name} / ${classById.get(draft.classId).style}`,
      `Studio: ${draft.studio === 'either' ? 'Either studio' : studioById.get(draft.studio).name}`,
      `Context: ${draft.context}`,
      `Question: ${draft.note || 'No additional question.'}`,
      '',
      'This is a local draft for a fictional studio. No booking, email, payment or message has been sent. No exercise or medical advice is provided.',
    ].join('\n');
  }
  function renderInterest(draft) {
    document.getElementById('interest-preview').hidden = false;
    const rows = [
      [
        'Class format',
        classById.get(draft.classId).name +
          ' / ' +
          classById.get(draft.classId).style,
      ],
      [
        'Studio',
        draft.studio === 'either'
          ? 'Either studio'
          : studioById.get(draft.studio).name,
      ],
      ['Context', draft.context],
      ['A practical question', draft.note || 'No additional question.'],
    ];
    document.getElementById('interest-summary').innerHTML = rows
      .map(
        ([label, value]) =>
          `<div class="draft-detail"><span>${label}</span><strong>${e(value)}</strong></div>`,
      )
      .join('');
  }
  if (form) {
    if (state.draft) {
      currentDraft = state.draft;
      for (const field of ['classId', 'studio', 'context', 'note'])
        form.elements.namedItem(field).value = currentDraft[field];
      renderInterest(currentDraft);
      document.getElementById('interest-status').textContent =
        'Your saved local draft is ready to review.';
    }
    const requested = classById.get(
      new URLSearchParams(location.search).get('class'),
    );
    if (requested) {
      form.elements.namedItem('classId').value = requested.id;
      currentDraft = null;
      document.getElementById('interest-preview').hidden = true;
    }
    form.addEventListener('input', () => {
      currentDraft = null;
      document.getElementById('interest-preview').hidden = true;
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const draft = {
        classId: form.elements.namedItem('classId').value,
        studio: form.elements.namedItem('studio').value,
        context: form.elements.namedItem('context').value,
        note: form.elements.namedItem('note').value.trim().slice(0, 1000),
      };
      const error = validateInterest(draft, classes, studios);
      document.getElementById('interest-error').textContent = error;
      if (error) return;
      currentDraft = draft;
      renderInterest(draft);
      document.getElementById('interest-status').textContent =
        'Draft ready. Review it, then save locally or download.';
    });
    document.getElementById('save-interest').addEventListener('click', () => {
      if (!currentDraft) return;
      state.draft = currentDraft;
      document.getElementById('interest-status').textContent = persist()
        ? 'Saved in this browser. No studio receives this draft.'
        : 'Available for this visit only. You can still download it.';
    });
    document
      .getElementById('download-interest')
      .addEventListener('click', () => {
        if (!currentDraft) return;
        download('kinetic-interest-draft.txt', interestText(currentDraft));
        document.getElementById('interest-status').textContent =
          'Your draft is ready to download. Nothing was submitted.';
      });
    document.getElementById('clear-interest').addEventListener('click', () => {
      state.draft = null;
      currentDraft = null;
      form.reset();
      persist();
      document.getElementById('interest-preview').hidden = true;
      notify('The saved interest draft was cleared.');
    });
  }
  updateButtons();
  renderPlan();
})();

```
