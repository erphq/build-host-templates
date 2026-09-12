# Roster — team resource planning with a complete local workspace

Create Roster, an original resource-planning SaaS concept for small delivery teams. Its central purpose is to connect people, working-day capacity, project allocations and available time in one clear weekly view. The result must include a substantial marketing website, a genuinely interactive Monday–Friday planning workspace, a project overview, a project detail route and a useful capacity guide. It must be distinct from a meeting scheduler. Roster does not book appointments, find meeting slots, send invitations, create calendar events or manage a conference-room calendar. It assigns whole hours of project work to people on working dates.

The product is fictional and uses a completely invented team and project dataset. All changes remain in the browser. There are no accounts, external notifications, HR updates, employment decisions, payroll calculations, invoices or live collaboration services. The interface should be useful and realistic while remaining honest about that scope. Do not invent customer logos, testimonials, adoption figures, compliance certifications, productivity claims or financial results. A thoughtful local demonstration is enough; it does not need borrowed credibility.

## Live reference research

The primary source is Float at https://www.float.com/. The capacity-planning page at https://www.float.com/product/capacity-planning was also directly inspected in the browser. The live homepage presents a dark, split opening with a strong proposition, visible resource-schedule imagery, person-level utilization context and capacity-versus-demand information. Its navigation leads into product capabilities, and the page continues through resource management, project scoping, delivery insights, integrations and customer material. Use the hierarchy and the relationship between a schedule and capacity information as research, not as content to copy.

The capacity-planning page visibly describes individual working hours and days, full-time and part-time patterns, time off, utilization indicators and over-capacity warnings. Product imagery shows the schedule, person availability settings and leave-related controls. These observations establish an important domain model: a person's available hours are not simply an empty calendar; they come from a working pattern that can be reduced by time away. Project allocations then consume that capacity, and conflicts should remain visible.

The authenticated Float application was not entered. No real team was accessed, no allocation was changed and no account was created. Exact drag behavior, permissions, internal data storage, financial calculations, automation rules, search ranking and backend implementation were not verified. Roster's original local editing dialog and calculation functions are its own implementation choices. Do not claim feature parity or reproduce the source's customer claims, brand assets, screenshot contents or code.

Use a distinct navy-and-cyan direction rather than the existing meeting-scheduling or client-portal templates. The source reference's dark opening can inform confidence and contrast, but Roster should have its own wordmark, illustrations, sample people, projects and writing. The working application should be bright, readable and practical. Its marketing imagery is an original HTML schedule vignette and a locally authored SVG compatibility image, not a copied screenshot of Float.

## Identity, colour and typography

The wordmark is Roster in a compact, confident sans-serif beside three compact allocation blocks: one vertical column beside two stacked cells. Build that small mark with native CSS. Use locally hosted Geist variable throughout. Do not introduce a decorative serif voice, a stock people photograph or a fake team portrait. Initial-based avatars are sufficient for fictional sample people and avoid implying that a pictured person works for the product.

Use a deep navy #132b40 for the marketing header, opening and one workflow section. Main text on light surfaces is #173348. Supporting text is #506677, with contrast checked against the actual background. Cyan #b5e4ed provides the primary light-on-dark action and an editorial band. The workspace background is #f2f6f8, cards are white, and dividers are pale blue-grey. Project blocks use three distinct soft fills with dark text: pale blue for Atlas, lilac for Daylight and peach for Northstar. These colours must remain consistent across schedule blocks, legends, project cards and detail views.

Overbooking uses a pale warm surface and dark terracotta text. Time off uses a quiet patterned background with explicit text. A pattern or colour alone must never carry the state. A day with zero capacity and assigned work remains visibly overbooked. Empty working capacity is inviting but not falsely labelled free of all obligations; it is simply unallocated within this sample project plan.

All actual content and controls are at least fourteen pixels, including mobile. Supporting descriptions are sixteen or seventeen pixels, and the guide body is eighteen pixels. Do not create a miniature desktop dashboard inside the mobile hero. Reflow the demonstration to show fewer days at a readable size. Page headings can be large, but control labels, dates, hours and names are more important than decorative density. Use generous line height and avoid truncating essential project titles or numerical states.

## Routes and shared structure

Create five complete pages: index.html, planner.html, projects.html, project.html and guide.html. The project detail page accepts a known id query parameter and falls back to Atlas when the value is missing or invalid. The planner accepts an optional filter=overbooked parameter so marketing and guide links can open a meaningful view. All paths are relative and should work below a nested demo directory. Home links should use explicit index.html rather than depending on server directory fallback.

The marketing header contains the Roster identity, Team planner, Projects, Capacity guide and a strong Open the planner action. The application header uses the same identity and practical navigation on a white surface. It can omit the redundant primary action because the user is already in the product. A small Local demo label provides context without crowding the workspace. At phone widths, navigation moves behind a real Menu button with aria-expanded. Keep the product's main destinations reachable without the desktop navigation.

Marketing pages close with a simple original invitation and a footer containing planner, projects, guide, credits and a neutral Template library link. Application routes use concise local-context text instead of a large marketing footer. Do not add favicons, provider badges, public deployment-service branding or model-provider promotion. Preserve font-license and original-artwork disclosures in a credits file.

## Marketing homepage composition

Open with a dark split hero. The left column contains a short domain label, the original statement A plan that leaves room for people, an explanation about seeing work and available time together, and two real destinations. The primary action opens the planner; the secondary opens the capacity guide. The headline highlights its final phrase in cyan, using the same sans-serif rather than an unrelated display font.

The right column is a legible original schedule vignette. It shows a week context, three sample people, and three working days with project allocations. Names, roles, dates and hours are readable. The vignette is not a fake interactive drag surface: its project blocks and summary link open the actual planner. It includes a plain note that one person needs breathing room, pointing toward the seeded overbooking example. On mobile, show only the first day beside each person while retaining the route to the complete planner. Do not compress all five days into tiny cells.

Follow the hero with a narrow cyan principle strip and an open editorial explanation of seeing what fits before committing. Then provide three functional perspective controls: People, Capacity and Projects. Each changes the feature explanation and original visual content. People shows sample roles and weekly working hours. Capacity explains a four-day working pattern. Projects shows fixed sample estimates and links to the actual project detail pages. Selected state is visible and exposed through aria-pressed.

A larger capacity story demonstrates the difference between a full week and an impossible day. Use two original planning panels: one shows Ava's twelve planned Monday hours against eight available hours; the other invites the user to move the extra work into available capacity. The explanation must make clear that the problem is daily overbooking, not a lack of total weekly room. Link directly to the overbooked planner filter.

Continue with a dark three-step planning workflow: understand the team, place the work, and keep the plan honest. Each step has practical copy rather than a fabricated benefit metric. Follow it with a project-hours story and three large project rows. Close with questions about meeting scheduling, part-time patterns, local changes and the absence of real team connections. A final cyan section provides a clear return to the working planner.

## Sample team and project model

Use six fictional people: Ava Chen in Design, Noah Ellis in Engineering, Mira Patel in Strategy, Leo Park in Design, Jules Reed in Engineering and Sam Rivera in Strategy. Four people have eight-hour Monday–Friday patterns. Mira works six hours Monday through Thursday and zero Friday, giving twenty-four weekly hours. Leo works eight hours Monday through Thursday and zero Friday, giving thirty-two weekly hours. A sample Friday time-off entry removes eight hours from Jules's week.

The base sample Monday is October 5, 2026. The selected week covers Monday through Friday only. The demo supports a bounded nine-week window from four weeks before the base Monday through four weeks after it. The editable date range ends on the Friday of the last supported week. Previous and next controls disable at the range boundaries. The week label and each date header must reflect the selected month, including September and November; do not hardcode October in every header.

The three fictional projects are Atlas website, Daylight identity and Northstar launch. Each has a client, colour, dark text colour, sample hour estimate, description, owner and phase. Atlas's estimate is one hundred and twenty hours, Daylight's eighty and Northstar's ninety-six. These are reference estimates, not hard limits, billing rates or actual time budgets. The exact seed allocations are appended below and must be shared by the workspace and the domain tests.

Initial sample-week totals are two hundred and eight capacity hours, one hundred and twenty-four allocated project hours, eighty-four available hours and one overbooked person. Ava has twenty-eight planned hours during the week and forty hours of capacity, but Monday contains twelve planned hours. That day is four hours over capacity. This example is intentional and must not be hidden by a weekly utilization percentage that remains below one hundred.

## Exact capacity and allocation calculations

Represent a working pattern as five hour values corresponding to Monday through Friday. Day capacity is the relevant working-pattern value unless time off is true for that person and date, in which case it is zero. A weekend or an absent pattern value has zero capacity. Day booked hours are the sum of allocations matching the person and exact date. Do not infer capacity from empty allocation cells.

For a weekly summary, create the five dates from the selected Monday. Sum their capacity and booked hours separately. Available hours for a person are max(0, capacity minus booked). Team availability is the sum of those person-level nonnegative values. This prevents one person's excess weekly work from subtracting another person's free time. The calculation does not imply that all available hours are interchangeable across roles or skills.

Daily excess is max(0, booked minus capacity) for each day. A person is overbooked when any day has a positive excess. Weekly excess shown beside a person is the sum of those daily excess values. A zero-capacity day with positive work must be counted as overbooked. If capacity is zero, do not divide by zero to calculate utilization; return a deliberate unavailable value rather than Infinity or NaN.

Project hours are summed by project identifier. The planner uses only its selected week's five dates. The project overview and detail pages use all dates stored in the local plan. Make this scope difference explicit in labels and the guide. Moving an allocation to another person or date within the plan preserves its project's total hours. Changing its project moves those hours between project totals. Editing duration changes both person and project calculations.

## Weekly planner interface

The planner begins with a readable title, a short description and an Allocate work action. Four summary tiles show team capacity, project hours, available hours and people overbooked. These values are computed from all six people in the selected week, independent of the current visible person filter. Filters change which people are shown, not the meaning of the team-wide headline totals.

The planning surface contains previous and next week controls, the selected range, a Sample week reset, a CSV export action, person search, a capacity filter and a project-colour legend. Search matches name and role case-insensitively. The filter can show all people, people with at least one overloaded day, or people with available weekly hours. Combined search and filtering must work. If no people match, explain that state rather than leaving an unexplained blank schedule.

On desktop, render a person column and five day columns. Each person cell contains initials, name, role, weekly planned versus capacity hours, and either free hours or daily excess. Each day contains all of its allocation blocks, a way to add hours, a capacity summary and a time-off control when the day belongs to the person's working pattern. Project blocks show the project name, whole hours and an optional short planning note. The full note is available in the editing dialog even if the block's preview is shortened.

An empty working day offers Allocate work. A non-working day or time-off day remains visibly unavailable, but the user can still open an allocation form to explore an explicit overlap. Do not silently delete project work when time off is marked. Preserve the allocation and show the resulting conflict. A part-time non-working Friday does not need a time-off toggle because its base capacity is already zero.

At tablet and phone widths, replace the five-column schedule with a day selector and readable person cards. Each day button identifies the weekday and date. Only the selected day's allocation cell is displayed per person, while the person's weekly totals remain visible. This is a reflow of the same data, not a separate simplified model. Switching days must preserve filters, selected week and stored work. Never require horizontal document panning to read a name or edit an allocation.

## Allocation editing and local persistence

An allocation contains a safe identifier, person id, project id, weekday date, integer duration and optional planning note. The modal form contains native selects for person and project, a date input, a number input constrained to one through twelve whole hours, and a note textarea limited to three hundred characters. It is the same form for adding, editing, reassigning and rescheduling. The heading and remove action make the mode clear.

Before saving, preview the resulting daily load. Exclude the currently edited allocation from existing booked hours before adding its new duration. This prevents an edit from double-counting itself. The preview states the person's name, planned hours, daily capacity and either remaining room or daily excess. Overbooking is allowed as a visible planning condition, not rejected as an invalid record. Invalid dates, weekend dates, unknown people, unknown projects, fractional hours, zero hours and more than twelve hours are rejected.

Save updates or adds the allocation, persists state, closes the dialog and refreshes the relevant planner or project view. Remove deletes only the selected local allocation. Escape and a visible close control dismiss the native dialog without saving. No modal action sends a message, creates a meeting, requests approval or changes a real person's work schedule. Confirmations must use plain local wording rather than implying an external action occurred.

Persist under roster-plan-v1. Store validated allocations, time-off flags and bounded project notes. Restore only known person and project identifiers, safe allocation ids, dates within the supported range, integer hour values and bounded strings. Deduplicate allocation ids during restoration. Corrupt JSON falls back to the original seed plan. An intentionally empty saved allocation list must remain empty rather than being mistaken for missing data. Local-storage failure leaves the current visit working and provides a clear explanation that saving across visits is unavailable.

Escape all user-entered notes before inserting them into HTML. Project notes can be assigned to textarea values and should remain plain text. CSV export quotes every cell and neutralizes text that could be interpreted as a spreadsheet formula. It includes only allocations within the selected Monday–Friday range, with date, person, role, project, hours and note columns. Use a temporary Blob URL, initiate a local download and revoke the URL afterward. Do not upload the CSV or submit it to another application.

## Project overview and project detail

The project overview has a substantial heading and three project cards. Each contains its original initial tile, title, description, planned hours across all dates, number of distinct allocated people and a real detail link. Do not use a generic financial dashboard or invent profit figures. A contextual section explains that this is a plan rather than a timesheet and leads back to the team workspace.

The project detail page contains the project identity, client, phase, owner and description. Three summaries show allocated hours, the fixed sample estimate and estimate remaining. Remaining hours may be negative if planned work exceeds the estimate; do not clamp it to zero or hide the discrepancy. Below, list allocations in date order with person, day, note, duration and Edit. Editing from a project page uses the same allocation dialog and domain functions as the weekly planner.

The detail sidebar shows each contributing person and their total project hours. A labelled note form stores up to twelve hundred characters of local planning context. Saving a note does not create a comment for someone else or send an update. If a project has no allocations, show an honest empty state and a route to the planner. Unknown project query parameters fall back to a known project so the page remains navigable.

## Capacity guide and responsible interpretation

The guide is a complete explanatory page with an opening statement, contents navigation and six substantial sections. Explain working capacity, allocations, daily overbooking, available hours, project estimates and the local demo. Include the exact Ava Monday example: eight hours of Atlas work plus four hours of Daylight against eight hours of capacity, producing four hours of daily excess. Link directly to the overbooked planner view so the reader can test the explanation.

The guide must distinguish intended work from actual time, staffing from meetings, estimates from financial budgets, and capacity from performance. Do not rank people, infer diligence, or equate every unallocated hour with wasted time. The model is a practical planning aid and does not account for every human circumstance. It should encourage a conversation about workable commitments rather than pretending that a number resolves every staffing decision.

Explain the useful test loop: find the overloaded Monday, open the extra Daylight allocation, move it to a day with capacity, save, observe the overbooked count and confirm that project hours remain unchanged. Then mark a working day as time off and see capacity fall while existing work remains. Finally export the selected week or reset the sample plan. These steps should correspond exactly to implemented controls.

## Accessibility, motion and delivery requirements

Use semantic navigation, main landmarks, one h1 per route, coherent heading levels, labelled form fields, native selects, buttons and dialogs. The mobile day selector uses aria-pressed, time-off controls expose pressed state, and overbooking always has text. Provide strong visible focus rings. Never hide the only accessible name behind an icon. Keep body text at sixteen to eighteen pixels and controls and secondary labels at fourteen or larger.

Motion is restrained: a schedule entrance in the hero, a slight lift on linked sample blocks, a responsive perspective switch and a short dialog movement. Respect reduced-motion preferences. No autoplay video, perpetual animation, fake loading delay or artificial typing is necessary. The working planner should respond immediately to edits, and animation must never obscure a capacity warning or make a control harder to use.

Source files live in scripts/roster. The builder exports buildRoster() and returns an object containing prompt. Generated routes and assets live in public/demos/roster, and the reconstruction prompt is written to public/prompts/roster.md and duplicated in the demo. Keep the domain calculation module separate and importable for meaningful tests; embed the same functions into the static browser output rather than maintaining a second calculation implementation. Include the complete domain and interaction code under the required Reference interaction handler heading.

Create and retain the original schedule.svg and hero.webp compatibility image. The visible marketing schedule should remain actual readable HTML. Include local Geist and its license text. Credits explain the original UI and illustration, fictional data and live Float research. Do not redistribute Float logos, customer material, screenshot assets or code. Do not change shared catalog, routing, validation or deployment files from this category task.

Before handoff, test the actual domain functions and browser flows. Verify the initial 208h capacity, 124h allocation, 84h availability and one overloaded person. Move Ava's four-hour Daylight block from Monday to Friday and confirm that overbooking clears without changing the project's total. Mark a day off and confirm the capacity reduction and preserved assignments. Edit duration, reassign a person, remove an allocation, inspect another week, save a project note and verify persistence after reload. Check CSV execution and reset behavior. Inspect all five pages at desktop and 390-pixel widths, verify actual text sizes, measure document overflow, and report concrete observations rather than treating source code alone as proof of completion.


## Exact sample planning data

```json
{
  "people": [
    {
      "id": "ava",
      "name": "Ava Chen",
      "role": "Design",
      "initials": "AC",
      "color": "#cde8ec",
      "hours": [
        8,
        8,
        8,
        8,
        8
      ]
    },
    {
      "id": "noah",
      "name": "Noah Ellis",
      "role": "Engineering",
      "initials": "NE",
      "color": "#d7def5",
      "hours": [
        8,
        8,
        8,
        8,
        8
      ]
    },
    {
      "id": "mira",
      "name": "Mira Patel",
      "role": "Strategy",
      "initials": "MP",
      "color": "#f2dcc8",
      "hours": [
        6,
        6,
        6,
        6,
        0
      ]
    },
    {
      "id": "leo",
      "name": "Leo Park",
      "role": "Design",
      "initials": "LP",
      "color": "#e4ddf0",
      "hours": [
        8,
        8,
        8,
        8,
        0
      ]
    },
    {
      "id": "jules",
      "name": "Jules Reed",
      "role": "Engineering",
      "initials": "JR",
      "color": "#d8e8cb",
      "hours": [
        8,
        8,
        8,
        8,
        8
      ]
    },
    {
      "id": "sam",
      "name": "Sam Rivera",
      "role": "Strategy",
      "initials": "SR",
      "color": "#f0d7d7",
      "hours": [
        8,
        8,
        8,
        8,
        8
      ]
    }
  ],
  "projects": [
    {
      "id": "atlas",
      "name": "Atlas website",
      "client": "Atlas Works",
      "color": "#b9ddeb",
      "ink": "#19465d",
      "estimate": 120,
      "description": "A clear, useful website for an independent architecture practice. Discovery and design are in motion, with engineering joining the next phase.",
      "owner": "Ava Chen",
      "phase": "Design & build"
    },
    {
      "id": "daylight",
      "name": "Daylight identity",
      "client": "Daylight Goods",
      "color": "#d8d2f2",
      "ink": "#443b70",
      "estimate": 80,
      "description": "A warm identity and a flexible packaging system for a considered everyday-goods brand.",
      "owner": "Leo Park",
      "phase": "Creative direction"
    },
    {
      "id": "northstar",
      "name": "Northstar launch",
      "client": "Northstar Labs",
      "color": "#f3d6b9",
      "ink": "#714822",
      "estimate": 96,
      "description": "A focused launch campaign with a clear audience, practical messaging and a useful collection of digital assets.",
      "owner": "Mira Patel",
      "phase": "Strategy & production"
    }
  ],
  "allocations": [
    {
      "id": "a1",
      "person": "ava",
      "project": "atlas",
      "day": "2026-10-05",
      "hours": 8,
      "note": "Homepage direction"
    },
    {
      "id": "a2",
      "person": "ava",
      "project": "daylight",
      "day": "2026-10-05",
      "hours": 4,
      "note": "Identity review"
    },
    {
      "id": "a3",
      "person": "ava",
      "project": "atlas",
      "day": "2026-10-06",
      "hours": 6,
      "note": "Page system"
    },
    {
      "id": "a4",
      "person": "ava",
      "project": "atlas",
      "day": "2026-10-07",
      "hours": 6,
      "note": "Responsive direction"
    },
    {
      "id": "a5",
      "person": "ava",
      "project": "daylight",
      "day": "2026-10-08",
      "hours": 4,
      "note": "Design support"
    },
    {
      "id": "a6",
      "person": "noah",
      "project": "atlas",
      "day": "2026-10-05",
      "hours": 6,
      "note": "Technical discovery"
    },
    {
      "id": "a7",
      "person": "noah",
      "project": "atlas",
      "day": "2026-10-06",
      "hours": 8,
      "note": "Component build"
    },
    {
      "id": "a8",
      "person": "noah",
      "project": "atlas",
      "day": "2026-10-07",
      "hours": 8,
      "note": "Component build"
    },
    {
      "id": "a9",
      "person": "noah",
      "project": "atlas",
      "day": "2026-10-08",
      "hours": 6,
      "note": "Prototype review"
    },
    {
      "id": "a10",
      "person": "mira",
      "project": "northstar",
      "day": "2026-10-05",
      "hours": 6,
      "note": "Audience direction"
    },
    {
      "id": "a11",
      "person": "mira",
      "project": "northstar",
      "day": "2026-10-06",
      "hours": 4,
      "note": "Messaging"
    },
    {
      "id": "a12",
      "person": "mira",
      "project": "northstar",
      "day": "2026-10-07",
      "hours": 4,
      "note": "Launch outline"
    },
    {
      "id": "a13",
      "person": "leo",
      "project": "daylight",
      "day": "2026-10-05",
      "hours": 6,
      "note": "Identity concepts"
    },
    {
      "id": "a14",
      "person": "leo",
      "project": "daylight",
      "day": "2026-10-06",
      "hours": 8,
      "note": "Identity system"
    },
    {
      "id": "a15",
      "person": "leo",
      "project": "daylight",
      "day": "2026-10-07",
      "hours": 6,
      "note": "Packaging studies"
    },
    {
      "id": "a16",
      "person": "leo",
      "project": "daylight",
      "day": "2026-10-08",
      "hours": 4,
      "note": "Presentation"
    },
    {
      "id": "a17",
      "person": "jules",
      "project": "atlas",
      "day": "2026-10-06",
      "hours": 6,
      "note": "Build support"
    },
    {
      "id": "a18",
      "person": "jules",
      "project": "northstar",
      "day": "2026-10-07",
      "hours": 4,
      "note": "Campaign landing page"
    },
    {
      "id": "a19",
      "person": "jules",
      "project": "northstar",
      "day": "2026-10-08",
      "hours": 6,
      "note": "Asset implementation"
    },
    {
      "id": "a20",
      "person": "sam",
      "project": "northstar",
      "day": "2026-10-05",
      "hours": 4,
      "note": "Project planning"
    },
    {
      "id": "a21",
      "person": "sam",
      "project": "atlas",
      "day": "2026-10-06",
      "hours": 4,
      "note": "Content planning"
    },
    {
      "id": "a22",
      "person": "sam",
      "project": "northstar",
      "day": "2026-10-09",
      "hours": 6,
      "note": "Launch review"
    },
    {
      "id": "a23",
      "person": "ava",
      "project": "atlas",
      "day": "2026-10-12",
      "hours": 6,
      "note": "Design handoff"
    },
    {
      "id": "a24",
      "person": "noah",
      "project": "atlas",
      "day": "2026-10-12",
      "hours": 8,
      "note": "Build sprint"
    },
    {
      "id": "a25",
      "person": "leo",
      "project": "daylight",
      "day": "2026-10-13",
      "hours": 6,
      "note": "Final artwork"
    }
  ],
  "baseMonday": "2026-10-05",
  "initialLeave": {
    "jules:2026-10-09": true
  }
}
```

## Reference interaction handler

```javascript
function addDays(date, amount) {
  const value = new Date(date + 'T00:00:00Z');
  value.setUTCDate(value.getUTCDate() + amount);
  return value.toISOString().slice(0, 10);
}
function weekDays(monday) {
  return Array.from({ length: 5 }, (_, index) => addDays(monday, index));
}
function dayCapacity(person, day, leave) {
  const weekday = new Date(day + 'T00:00:00Z').getUTCDay();
  return leave[`${person.id}:${day}`] === true
    ? 0
    : person.hours[weekday - 1] || 0;
}
function dayBooked(personId, day, allocations) {
  return allocations
    .filter((item) => item.person === personId && item.day === day)
    .reduce((sum, item) => sum + item.hours, 0);
}
function weekSummary(person, monday, allocations, leave) {
  const days = weekDays(monday).map((day) => ({
    day,
    capacity: dayCapacity(person, day, leave),
    booked: dayBooked(person.id, day, allocations),
  }));
  const capacity = days.reduce((sum, day) => sum + day.capacity, 0);
  const booked = days.reduce((sum, day) => sum + day.booked, 0);
  return {
    capacity,
    booked,
    available: Math.max(0, capacity - booked),
    overbooked: days.some((day) => day.booked > day.capacity),
    excess: days.reduce(
      (sum, day) => sum + Math.max(0, day.booked - day.capacity),
      0,
    ),
    utilization: capacity ? Math.round((booked / capacity) * 100) : null,
    days,
  };
}
function projectHours(projectId, allocations, days) {
  return allocations
    .filter(
      (item) =>
        item.project === projectId && (!days || days.includes(item.day)),
    )
    .reduce((sum, item) => sum + item.hours, 0);
}
function validateAllocation(item, people, projects) {
  if (
    !people.some((person) => person.id === item.person) ||
    !projects.some((project) => project.id === item.project)
  )
    return 'Choose a known team member and project.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.day || ''))
    return 'Choose a valid working day.';
  const date = new Date(item.day + 'T00:00:00Z');
  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== item.day
  )
    return 'Choose a valid date.';
  if ([0, 6].includes(date.getUTCDay()))
    return 'Allocate work on Monday through Friday.';
  if (!Number.isInteger(item.hours) || item.hours < 1 || item.hours > 12)
    return 'Choose between 1 and 12 whole hours.';
  return '';
}

(() => {
  'use strict';
  const seed = JSON.parse(document.getElementById('roster-data').textContent);
  const people = seed.people;
  const projects = seed.projects;
  const personById = new Map(people.map((person) => [person.id, person]));
  const projectById = new Map(projects.map((project) => [project.id, project]));
  const key = 'roster-plan-v1';
  const minimumDay = addDays(seed.baseMonday, -28);
  const maximumDay = addDays(seed.baseMonday, 32);
  const e = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  let state = {
    allocations: seed.allocations.map((item) => ({ ...item })),
    leave: { ...seed.initialLeave },
    notes: {},
  };
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      if (Array.isArray(stored.allocations))
        state.allocations = [
          ...new Map(
            stored.allocations
              .filter(
                (item) =>
                  item &&
                  typeof item.id === 'string' &&
                  /^[a-z0-9-]+$/.test(item.id) &&
                  !validateAllocation(item, people, projects) &&
                  item.day >= minimumDay &&
                  item.day <= maximumDay,
              )
              .slice(0, 1000)
              .map((item) => [
                item.id,
                {
                  id: item.id,
                  person: item.person,
                  project: item.project,
                  day: item.day,
                  hours: item.hours,
                  note:
                    typeof item.note === 'string'
                      ? item.note.slice(0, 300)
                      : '',
                },
              ]),
          ).values(),
        ];
      if (stored.leave && typeof stored.leave === 'object') {
        state.leave = {};
        for (const [id, value] of Object.entries(stored.leave)) {
          const [person, day] = id.split(':');
          if (
            personById.has(person) &&
            /^\d{4}-\d{2}-\d{2}$/.test(day || '') &&
            day >= minimumDay &&
            day <= maximumDay &&
            value === true
          )
            state.leave[id] = true;
        }
      }
      if (stored.notes && typeof stored.notes === 'object')
        for (const project of projects)
          if (typeof stored.notes[project.id] === 'string')
            state.notes[project.id] = stored.notes[project.id].slice(0, 1200);
    }
  } catch {
    state = {
      allocations: seed.allocations.map((item) => ({ ...item })),
      leave: { ...seed.initialLeave },
      notes: {},
    };
  }
  let monday = seed.baseMonday;
  let dayIndex = 0;
  let editingId = null;
  let toastTimer;
  const dayLabel = (day) =>
    new Date(day + 'T12:00:00Z').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
  const weekdayLabel = (day) =>
    new Date(day + 'T12:00:00Z').toLocaleDateString('en-US', {
      weekday: 'short',
      timeZone: 'UTC',
    });
  function notify(message) {
    const node = document.querySelector('.toast');
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('show'), 3200);
  }
  function persist() {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      return true;
    } catch {
      notify(
        'Your changes are available for this visit. Browser saving is unavailable.',
      );
      return false;
    }
  }
  document.querySelector('.menu-toggle').addEventListener('click', (event) => {
    const open = document.querySelector('header').classList.toggle('menu-open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
    event.currentTarget.textContent = open ? 'Close' : 'Menu';
  });
  const lensContent = {
    people: `<div><h3>Start with the people,<br>not an empty grid.</h3><p>Roles and working patterns give the week its shape. A four-day schedule should never look like five empty days waiting to be filled.</p><a href="planner.html" class="text-button">Meet the sample team ↗</a></div><div class="lens-people">${people
      .slice(0, 3)
      .map(
        (p) =>
          `<div class="lens-person"><b style="background:${p.color}">${p.initials}</b><span>${p.name}<small>${p.role}</small></span><strong>${p.hours.reduce((a, b) => a + b, 0)}h</strong></div>`,
      )
      .join('')}</div>`,
    capacity:
      '<div><h3>Make the available<br>time visible.</h3><p>Working days define capacity. Time off reduces it. Project allocations use it. The relationship stays clear as the plan changes.</p><a href="guide.html#capacity" class="text-button">Understand the calculation ↗</a></div><div class="lens-capacity"><p>LEO PARK / FOUR-DAY WEEK</p><strong>32 hours</strong><div><span></span><span></span><span></span><span></span><span></span></div><p>8h Monday–Thursday. Friday is not a working day.</p></div>',
    projects: `<div><h3>Keep the hours<br>attached to the work.</h3><p>Every allocation belongs to a project. Move the work between people or days and its total remains visible in the project view.</p><a href="projects.html" class="text-button">Explore project hours ↗</a></div><div>${projects.map((p) => `<a class="lens-project" href="project.html?id=${p.id}"><span>${p.name}</span><strong>${p.estimate}h estimate</strong></a>`).join('')}</div>`,
  };
  const lens = document.getElementById('lens-panel');
  if (lens) {
    lens.innerHTML = lensContent.people;
    document.querySelectorAll('[data-lens]').forEach((button) =>
      button.addEventListener('click', () => {
        lens.innerHTML = lensContent[button.dataset.lens];
        document
          .querySelectorAll('[data-lens]')
          .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      }),
    );
  }
  const weeklyGrid = document.getElementById('weekly-grid');
  function allocationBlock(item) {
    const project = projectById.get(item.project);
    return `<button class="allocation-block" data-edit="${item.id}" style="background:${project.color};color:${project.ink}" aria-label="Edit ${project.name}, ${personById.get(item.person).name}, ${dayLabel(item.day)}, ${item.hours} hours"><b>${project.name}</b><span>${item.hours}h planned</span>${item.note ? `<small>${e(item.note)}</small>` : ''}</button>`;
  }
  function renderDay(person, day, index) {
    const items = state.allocations.filter(
      (item) => item.person === person.id && item.day === day,
    );
    const capacity = dayCapacity(person, day, state.leave);
    const booked = dayBooked(person.id, day, state.allocations);
    const isLeave = state.leave[`${person.id}:${day}`] === true;
    const weekday = new Date(day + 'T00:00:00Z').getUTCDay() - 1;
    const working = person.hours[weekday] > 0;
    const capacityText =
      booked > capacity
        ? `${booked - capacity}h over capacity`
        : `${booked} / ${capacity}h`;
    return `<div class="day-cell ${booked > capacity ? 'over' : ''} ${capacity === 0 ? 'off' : ''} ${index === dayIndex ? 'day-selected' : ''}" data-day-index="${index}"><p class="day-mobile-label">${weekdayLabel(day)} ${dayLabel(day)}</p>${items.map(allocationBlock).join('')}${items.length ? `<button class="day-add" data-person="${person.id}" data-day="${day}">+ Add hours</button>` : `<button class="day-empty" data-person="${person.id}" data-day="${day}" aria-label="Allocate work to ${person.name} on ${dayLabel(day)}">${capacity ? '+ Allocate work' : isLeave ? 'Time off' : 'Non-working day'}</button>`}<div class="day-foot"><span>${capacityText}</span>${working ? `<button data-leave-person="${person.id}" data-leave-day="${day}" aria-pressed="${isLeave}" aria-label="${isLeave ? 'Restore working day for' : 'Mark time off for'} ${person.name} on ${dayLabel(day)}">${isLeave ? 'Restore day' : 'Time off'}</button>` : '<span>Not working</span>'}</div></div>`;
  }
  function renderPlanner() {
    if (!weeklyGrid) return;
    const days = weekDays(monday);
    const summaries = people.map((person) => ({
      person,
      ...weekSummary(person, monday, state.allocations, state.leave),
    }));
    document.getElementById('total-capacity').textContent =
      summaries.reduce((sum, p) => sum + p.capacity, 0) + 'h';
    document.getElementById('total-booked').textContent =
      summaries.reduce((sum, p) => sum + p.booked, 0) + 'h';
    document.getElementById('total-available').textContent =
      summaries.reduce((sum, p) => sum + p.available, 0) + 'h';
    document.getElementById('total-overbooked').textContent = summaries.filter(
      (p) => p.overbooked,
    ).length;
    document.getElementById('week-label').textContent =
      `${dayLabel(days[0])}–${new Date(days[4] + 'T00:00:00Z').getUTCDate()}, 2026`;
    document.querySelector('[data-week="-1"]').disabled = monday <= minimumDay;
    document.querySelector('[data-week="1"]').disabled =
      monday >= addDays(seed.baseMonday, 28);
    const query = document
      .getElementById('person-search')
      .value.trim()
      .toLowerCase();
    const filter = document.getElementById('capacity-filter').value;
    const shown = summaries.filter(
      (p) =>
        `${p.person.name} ${p.person.role}`.toLowerCase().includes(query) &&
        (filter !== 'overbooked' || p.overbooked) &&
        (filter !== 'available' || p.available > 0),
    );
    document.querySelector('.mobile-days').innerHTML = days
      .map(
        (day, index) =>
          `<button data-select-day="${index}" aria-pressed="${index === dayIndex}">${weekdayLabel(day)}<span>${new Date(day + 'T00:00:00Z').getUTCDate()}</span></button>`,
      )
      .join('');
    weeklyGrid.innerHTML =
      `<div class="week-head"><div>Team member<span>Weekly planned / capacity</span></div>${days.map((day) => `<div>${weekdayLabel(day)} ${new Date(day + 'T00:00:00Z').getUTCDate()}<span>${new Date(day + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}</span></div>`).join('')}</div>` +
      shown
        .map(
          (summary) =>
            `<section class="person-row" aria-label="${summary.person.name} weekly allocations"><div class="person-cell"><div class="person-identity"><b style="background:${summary.person.color}">${summary.person.initials}</b><div><h3>${summary.person.name}</h3><p>${summary.person.role}</p></div></div><div class="person-load"><strong>${summary.booked}h</strong> / ${summary.capacity}h<span class="${summary.overbooked ? 'over-label' : ''}">${summary.overbooked ? summary.excess + 'h daily excess' : summary.available + 'h available'}</span></div></div>${days.map((day, index) => renderDay(summary.person, day, index)).join('')}</section>`,
        )
        .join('');
    document.getElementById('team-empty').hidden = shown.length > 0;
  }
  if (weeklyGrid) {
    if (new URLSearchParams(location.search).get('filter') === 'overbooked')
      document.getElementById('capacity-filter').value = 'overbooked';
    document.querySelectorAll('[data-week]').forEach((button) =>
      button.addEventListener('click', () => {
        monday = addDays(monday, Number(button.dataset.week) * 7);
        renderPlanner();
      }),
    );
    document.getElementById('reset-week').addEventListener('click', () => {
      monday = seed.baseMonday;
      renderPlanner();
    });
    document
      .getElementById('person-search')
      .addEventListener('input', renderPlanner);
    document
      .getElementById('capacity-filter')
      .addEventListener('change', renderPlanner);
    document
      .querySelector('.mobile-days')
      .addEventListener('click', (event) => {
        const button = event.target.closest('[data-select-day]');
        if (!button) return;
        dayIndex = Number(button.dataset.selectDay);
        renderPlanner();
      });
    weeklyGrid.addEventListener('click', (event) => {
      const button = event.target.closest('[data-leave-person]');
      if (!button) return;
      const id = `${button.dataset.leavePerson}:${button.dataset.leaveDay}`;
      if (state.leave[id]) delete state.leave[id];
      else state.leave[id] = true;
      persist();
      renderPlanner();
      notify(
        'Working capacity updated locally. Existing project work stays visible.',
      );
    });
    document.getElementById('reset-plan').addEventListener('click', () => {
      state = {
        allocations: seed.allocations.map((item) => ({ ...item })),
        leave: { ...seed.initialLeave },
        notes: {},
      };
      persist();
      renderPlanner();
      notify('The sample plan has been restored.');
    });
    document.getElementById('download-week').addEventListener('click', () => {
      const days = weekDays(monday);
      const quote = (value) => {
        const text = String(value);
        const safe =
          typeof value === 'string' && /^[=+\-@\t\r]/.test(text)
            ? "'" + text
            : text;
        return '"' + safe.replaceAll('"', '""') + '"';
      };
      const rows = [
        ['Date', 'Person', 'Role', 'Project', 'Hours', 'Planning note'],
        ...state.allocations
          .filter((item) => days.includes(item.day))
          .map((item) => [
            item.day,
            personById.get(item.person).name,
            personById.get(item.person).role,
            projectById.get(item.project).name,
            item.hours,
            item.note,
          ]),
      ];
      const csv = rows.map((row) => row.map(quote).join(',')).join('\n');
      const url = URL.createObjectURL(
        new Blob([csv], { type: 'text/csv;charset=utf-8' }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.download = `roster-week-${monday}.csv`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      notify('The selected week is ready to download.');
    });
    renderPlanner();
  }
  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = projects
      .map((project) => {
        const hours = projectHours(project.id, state.allocations);
        const team = new Set(
          state.allocations
            .filter((item) => item.project === project.id)
            .map((item) => item.person),
        );
        return `<article class="project-card"><span class="project-icon" style="background:${project.color};color:${project.ink}">${project.name.charAt(0)}</span><h2>${project.name}</h2><p>${project.description}</p><div class="project-hour-pair"><div><strong>${hours}h</strong><span>planned across all dates</span></div><div><strong>${team.size}</strong><span>people allocated</span></div></div><a href="project.html?id=${project.id}" class="text-button">Explore the project ↗</a></article>`;
      })
      .join('');
  }
  renderProjects();
  const projectHeader = document.getElementById('project-header');
  const currentProject =
    projectById.get(new URLSearchParams(location.search).get('id')) ||
    projects[0];
  function renderProjectDetail() {
    if (!projectHeader) return;
    const project = currentProject;
    const items = state.allocations
      .filter((item) => item.project === project.id)
      .sort(
        (a, b) =>
          a.day.localeCompare(b.day) || a.person.localeCompare(b.person),
      );
    const total = projectHours(project.id, state.allocations);
    projectHeader.innerHTML = `<div class="project-hero"><span style="background:${project.color};color:${project.ink}">${project.name.charAt(0)}</span><div><h1>${project.name}</h1><p>${project.client} / ${project.phase} / ${project.owner}</p></div></div><p class="project-description">${project.description}</p>`;
    document.getElementById('project-summary').innerHTML =
      `<div><span>Allocated hours</span><strong>${total}h</strong><span>All dates in the local plan</span></div><div><span>Sample estimate</span><strong>${project.estimate}h</strong><span>Reference, not a time budget lock</span></div><div><span>Estimate remaining</span><strong>${project.estimate - total}h</strong><span>Estimate minus allocated hours</span></div>`;
    document.getElementById('project-allocations').innerHTML = items.length
      ? items
          .map(
            (item) =>
              `<article class="allocation-row"><div><h3>${personById.get(item.person).name}</h3><p>${weekdayLabel(item.day)} ${dayLabel(item.day)} / ${e(item.note || 'Project work')}</p></div><strong>${item.hours}h</strong><button data-edit="${item.id}">Edit</button></article>`,
          )
          .join('')
      : '<p>No hours are allocated to this project yet. Add project work from the team planner.</p>';
    document.getElementById('project-people').innerHTML =
      people
        .filter((person) => items.some((item) => item.person === person.id))
        .map(
          (person) =>
            `<div class="project-person"><b style="background:${person.color}">${person.initials}</b><div><p>${person.name}</p><small>${person.role}</small></div><strong>${items.filter((item) => item.person === person.id).reduce((sum, item) => sum + item.hours, 0)}h</strong></div>`,
        )
        .join('') || '<p>No team members allocated yet.</p>';
  }
  if (projectHeader) {
    document.getElementById('project-note').value =
      state.notes[currentProject.id] || '';
    document
      .getElementById('project-notes')
      .addEventListener('submit', (event) => {
        event.preventDefault();
        state.notes[currentProject.id] = document
          .getElementById('project-note')
          .value.trim()
          .slice(0, 1200);
        const stored = persist();
        document.getElementById('note-status').textContent = stored
          ? 'Saved in this browser. No message was sent.'
          : 'The note is available for this visit only.';
      });
    renderProjectDetail();
  }
  const dialog = document.getElementById('allocation-dialog');
  const form = document.getElementById('allocation-form');
  if (!form) return;
  const fields = {
    person: form.elements.namedItem('person'),
    project: form.elements.namedItem('project'),
    day: form.elements.namedItem('day'),
    hours: form.elements.namedItem('hours'),
    note: form.elements.namedItem('note'),
  };
  fields.day.min = minimumDay;
  fields.day.max = maximumDay;
  function formValue() {
    return {
      id: editingId || 'new',
      person: fields.person.value,
      project: fields.project.value,
      day: fields.day.value,
      hours: Number(fields.hours.value),
      note: fields.note.value.trim().slice(0, 300),
    };
  }
  function updatePreview() {
    const item = formValue();
    const target = document.getElementById('allocation-preview');
    if (validateAllocation(item, people, projects)) {
      target.textContent =
        'Choose a working day and whole hours to preview the daily load.';
      target.classList.remove('warning');
      return;
    }
    const person = personById.get(item.person);
    const capacity = dayCapacity(person, item.day, state.leave);
    const existing = dayBooked(
      item.person,
      item.day,
      state.allocations.filter((allocation) => allocation.id !== editingId),
    );
    const total = existing + item.hours;
    const excess = Math.max(0, total - capacity);
    target.classList.toggle('warning', excess > 0);
    target.textContent = `${person.name}: ${total}h planned against ${capacity}h capacity on ${dayLabel(item.day)}.${excess ? ` This creates ${excess}h of daily overbooking.` : ` ${capacity - total}h remains on this day.`}`;
  }
  function openAllocation(item, person, day) {
    editingId = item?.id || null;
    fields.person.value = item?.person || person || people[0].id;
    fields.project.value = item?.project || currentProject.id;
    fields.day.value = item?.day || day || monday;
    fields.hours.value = item?.hours || 4;
    fields.note.value = item?.note || '';
    document.getElementById('allocation-title').textContent = item
      ? 'Edit allocation'
      : 'Add an allocation';
    document.getElementById('delete-allocation').hidden = !item;
    document.getElementById('allocation-error').textContent = '';
    updatePreview();
    dialog.showModal();
  }
  document.addEventListener('click', (event) => {
    const edit = event.target.closest('[data-edit]');
    if (edit) {
      const item = state.allocations.find(
        (allocation) => allocation.id === edit.dataset.edit,
      );
      if (item) openAllocation(item);
      return;
    }
    const cell = event.target.closest('[data-person][data-day]');
    if (cell) {
      openAllocation(null, cell.dataset.person, cell.dataset.day);
      return;
    }
    if (event.target.closest('[data-add-allocation]')) openAllocation();
  });
  form.addEventListener('input', updatePreview);
  form.addEventListener('change', updatePreview);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const item = formValue();
    const error =
      validateAllocation(item, people, projects) ||
      (item.day < minimumDay || item.day > maximumDay
        ? 'Choose a date within the nine-week sample planning range.'
        : '');
    if (error) {
      document.getElementById('allocation-error').textContent = error;
      return;
    }
    if (editingId)
      state.allocations = state.allocations.map((allocation) =>
        allocation.id === editingId ? item : allocation,
      );
    else
      state.allocations.push({
        ...item,
        id:
          'allocation-' +
          Date.now().toString(36) +
          '-' +
          Math.random().toString(36).slice(2, 6),
      });
    persist();
    dialog.close();
    renderPlanner();
    renderProjectDetail();
    notify(
      'Allocation saved locally. Team capacity and project hours are updated.',
    );
  });
  document.getElementById('delete-allocation').addEventListener('click', () => {
    if (!editingId) return;
    state.allocations = state.allocations.filter(
      (item) => item.id !== editingId,
    );
    persist();
    dialog.close();
    renderPlanner();
    renderProjectDetail();
    notify('Allocation removed from the local plan.');
  });
  document
    .querySelector('[data-close]')
    .addEventListener('click', () => dialog.close());
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && dialog.open) {
        event.preventDefault();
        dialog.close();
      }
    },
    true,
  );
})();

```
