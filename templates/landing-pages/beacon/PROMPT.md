# Beacon: a complete synthetic observability and incident-response workspace

Build Beacon as an original incident and uptime-observability product concept with five complete pages: index.html, monitors.html, incident.html, status.html, and guide.html. The site must be distinct from product analytics, a planning board, or a generic dashboard of unrelated KPI cards. Its subject is service health, ordered check evidence, incident ownership, response chronology, recovery, and clear status communication. A visitor can switch repeatable scenarios, filter services, inspect check history, acknowledge an incident locally, record internal or public-preview updates, apply explicit local recovery, reset an exercise, and export the entire record.

Every scenario and service is fictional. No live endpoint, monitoring provider, credential, external alert, subscriber service, or deployment is connected. The interface must say this plainly near the operational controls and in the public-preview frame. Do not invent live uptime, actual traffic, customer adoption, incident response guarantees, AI root-cause analysis, automatic remediation, or a real status domain. Acknowledgment is not recovery. Selecting public-preview visibility is not publishing. Exporting a Markdown file is not notifying a teammate.

## Source research and original interpretation

Discovery sources: https://saaspo.com/pages/better-stack-landing-page and https://saaspo.com/pages/better-stack-product-page. Actual live product pages inspected: https://betterstack.com/uptime and https://betterstack.com/status-page. The uptime page uses a centered66px headline with roughly59px line height, a prominent product demonstration, and a deep narrative connecting monitoring evidence, incident response, and status communication. At1471×847, observed major section headings were around40px; monitoring detail began near document y1502, incident-management content near3201, status-page content near4294, and closing action near7792.

The status-page reference uses a wide product visual with desktop and phone status views, component histories, incident updates, layout controls, and explanations about communicating service disruption. Its complete page continues through customization, update handling, charts, access, integrations, monitoring, incident workflows, proof, and close. The useful structural lesson is that detection and communication belong to the same operational story, but their audiences differ. The reference’s exact animations, telemetry pipeline, screenshots, source code, branded marks, customer logos, pricing, and performance claims are not copied.

Beacon translates these principles into an original cyan-and-midnight identity with light operational pages. The marketing product canvas is a real constructed service-health view with original sample states, not a copied screenshot. The monitor dashboard uses service rows and chronological evidence rather than general traffic analytics. The incident room shows baseline events separately from local actions. The public status preview intentionally excludes internal notes. The guide explains the state model and limitations so the interface does not imply capabilities it lacks.

## Identity, readable typography, and shared navigation

Use locally bundled Geist Variable throughout with font-display swap and its SIL Open Font License. The original beacon wordmark is lowercase, approximately29px at desktop, weight550, with modest negative tracking. A native CSS mark beside it uses two concentric rings and a center point, suggesting a signal without copying a real logo. Use the licensed Lucide icon family through a local helper that rejects unknown icon names. Do not import another demo’s rendering structure.

Global light palette: ink #16323b, muted #526a70, paper #f2f6f5, line #c7d9d7, teal #126b61, mint #ade4d8, and midnight #112830. The homepage uses the midnight field with bright cool text, teal-tinted panels, and clear mint actions. The monitoring, incident, status, and guide pages use pale surfaces and dark text. This separates the expressive marketing surface from the practical workspace without making them look like different products.

Main body text is16–18px. Actual controls and navigation are at least14px. Secondary labels, timestamps, badges, and utility context are at least12px. Do not use6–10px mock UI labels or shrink a whole desktop screenshot to phone width. Headings use weight500, a line height near1.1, and tracking around minus.045em. The primary content rail is1320px maximum with30px inner gutters. Primary actions are at least48px high, with14px type, mint background, deep-teal text, restrained five-pixel corners, and a16px icon gap.

The shared header is78px tall and sticky at top zero. It contains the brand and real links to Monitors, Incident room, Status preview, and Field guide. Current routes use aria-current. On smaller widths, remove lower-priority navigation labels while keeping useful routes in the footer and contextual actions. Do not add login, signup, account, pricing, subscription, or installation controls that lead nowhere. All pages use ordinary relative anchors, one h1, a skip link, main landmark, viewport metadata, and a clear document title. No favicon links or assistant/platform branding belong in public output.

## Homepage: service health as the product demonstration

Start with a compact top line naming signal, context, and response. A12px synthetic-workspace label keeps the boundary visible without overwhelming the proposition. The main hero is left-led, with a large headline about knowing what changed and owning what happens next. At desktop use clamp(50px,5.3vw,74px), line height1.03, and tight tracking. A narrower adjacent column holds17px explanatory text and a real workspace action. This is not an email-capture hero or a pricing promise.

Place the large service console immediately below. It has a fine blue-green border, nine-pixel corners, a midnight-teal surface, and a quiet grounding shadow. Its top bar labels Service overview and the API slowdown synthetic example. The body uses a340px context column and a flexible service region. The context column explains that two related services and one incident need attention, and its link opens the actual incident exercise with the relevant scenario. The service region has four meaningful rows: Public API, Web dashboard, Sign-in service, and Export worker.

Each row names the service, states its health in text, shows24 ordered check segments, and labels the current synthetic response value. Operational, degraded, and outage have distinct colors as well as text. The check strip is accessible as an image with a summary count. It is not a decorative waveform or a fabricated percentage. The console footer reminds the visitor that detection begins a response and that acknowledgment does not mean recovery. All sample links lead to real local pages; do not draw fake clickable controls that have no behavior.

Follow with a large thesis statement about making impact, evidence, and response legible. Then use three substantial workflow panels linked to Monitors, Incident room, and Status preview. Their content explains what the visitor can actually do: inspect service evidence, record a chronology, and select which updates appear in a public-style view. Keep these panels operationally specific rather than substituting generic growth, speed, or collaboration claims.

The next section changes to a pale mint field and pairs an original timeline visual with explanatory copy. The timeline has three fixed baseline events: threshold crossed, impact scoped, and investigation opened. Use readable timestamps, distinct titles, and meaningful supporting text. The visual demonstrates chronology and a place for the next local update. A real action opens the incident room. Do not animate fake notifications or pretend someone is being paged.

A public-status story follows with a light status-page example beside text about different audiences. Its sample shows degraded API health and an operational sign-in service, clearly labeled as a preview. Explain that internal response detail stays inside while explicitly selected messages appear in the public-style preview. After that, present the three scenario choices as useful launch points. Finish with native FAQ details and a large closing workspace action. The complete page must cover the response loop rather than stop after the first dashboard image.

## Exact synthetic service and scenario model

There are four fictional services. Public API is an HTTP endpoint with nominal latency84ms. Web dashboard is a web interface with nominal142ms. Sign-in service is an authentication component with nominal96ms. Export worker is a background job with nominal210ms. These numbers are original illustrative parameters, not observations of a real system. Service descriptions make the fictional scope explicit. There are no service URLs to probe.

Three scenarios are available. Routine afternoon has every service operational and no active incident. API slowdown affects the API and dashboard as degraded, linked to incident BN-204. Sign-in interruption makes sign-in unavailable and dashboard degraded, linked to BN-205. Each scenario has an original name, description, affected-service list, and health mapping. These definitions are the single source for monitor summaries, service rows, incident context, and public preview.

Every service gets24 deterministic checks. In an affected service, the later check positions contain degraded or failed observations; the final check determines the current displayed health. Operational checks have nominal latency plus a small deterministic variation. A failed response has a null latency and is displayed as No response, never0ms. Degraded response values are visibly larger. The operational-pass count is a count out of24, not a time-based uptime percentage, SLO, or availability guarantee.

Applying local recovery changes the final check to Operational and restores its nominal-range response. Earlier degraded or failed check history stays intact. A recovered service can therefore show current Operational health and fewer than24 operational checks in the historical strip. This distinction is intentional and explained in the guide. Do not erase the past to create a visually perfect green bar. Acknowledging an incident does not alter any check or service health.

## Shared scenario selection and saved response records

Operational pages have a scenario bar above their main content. It includes a labeled styled selector with a custom option menu, the fixed synthetic date context, and a visible local-only disclosure. Recognized scenario query parameters take precedence; otherwise use a valid saved choice, then default to API slowdown. Invalid values fall back safely. Store the choice under beacon-scenario-v1. A change updates the current page and persists for navigation when storage is available.

Use beacon-responses-v1 for a map keyed by known incident IDs. Every incident response record has acknowledged and resolved booleans, a recognized response stage, and a bounded updates array. A local update has text, timestamp, visibility boolean, and kind. Recover only validated records; malformed data returns to the empty response structure. The two incidents keep separate local histories. Switching scenarios never combines their notes. Routine afternoon has no response record and must show a useful no-incident state.

Storage operations are fallible and wrapped in try/catch. If a response write fails, retain the local in-memory change and report that it exists only on the current page. Do not falsely claim it will survive navigation. Scenario changes that cannot persist also report the limitation. No other browser keys are cleared. User-entered update text must be escaped before HTML rendering and exported as plain text. Do not insert raw saved strings into the DOM.

## Monitor dashboard and check inspector

monitors.html begins with the scenario bar, a52px heading, and the selected scenario description. The summary displays the current overall service state, actual operational count out of four, and active synthetic incident count. A recovered incident is no longer active, but remains available in the linked record. These values derive from the selected scenario and local recovery flag, not independently hard-coded KPI cards.

The toolbar has service/type search, a native health filter, and the actual result count. Search is case-insensitive. Filter options are All services, Operational, Degraded, and Outage. Search and health intersect. The list keeps every row meaningful: service name/type, text health badge,24-check strip with pass count, and latest response. A row is a real button with aria-pressed; choosing it changes the check inspector below. If the current selection no longer matches, choose the first visible service. If none match, show a useful empty state and hide the stale inspector.

The inspector names the selected component, provides its description, and contains a native table listing all24 ordered checks, states, and response values. It is the accessible exact-data alternative to the colored strip. Keep the table readable and bounded rather than pushing the entire page horizontally. A Download scenario action exports the current full scenario record. The active-incident banner opens the real incident room and names whether acknowledgment or recovery has been recorded locally.

## Incident room: acknowledgment, updates, and recovery

incident.html uses the selected scenario to show the relevant incident title and impact. BN-204 concerns elevated API response times, severity SEV3, baseline start09:12UTC. BN-205 concerns failing sign-in requests, severity SEV2, baseline start10:04UTC. These are synthetic exercise labels, not operational severity claims about a real company. The baseline event list contains three fixed events with titles and descriptions. The exact source records are included in the appended code.

The desktop incident layout has a290px sticky control rail and a wider chronology column separated by70px. The rail displays severity, incident ID, scenario, ownership state, response stage, and baseline start. Its actions are Acknowledge locally, Apply local recovery, Download incident, and Reset this exercise. All names include the local boundary where it matters. No button calls a provider, silences an alert, changes infrastructure, or sends a notification.

Acknowledge locally records one actual local timestamped ownership event and sets acknowledged=true. It becomes disabled after success to avoid duplicates. It leaves synthetic service health unchanged. Apply local recovery records a separate local event, sets resolved=true, and changes the final synthetic checks for affected services. It too becomes disabled after application. Recovery does not require pretending the actual service was restarted; visible status states that no real service changed.

Baseline events and local events are visually and semantically separate. Baseline times are fixed UTC times on the scenario date. Local actions use actual ISO timestamps and are labeled Local exercise, with Internal or Public preview visibility. Preserve this distinction instead of presenting the user’s current action as something the fictional monitoring system observed in the past. The chronology is ordered as baseline evidence followed by local response events, each with readable time, kind, and full text.

The update form has a Response stage selector, a labeled textarea, an explicit public-preview checkbox, and Add local update. Stages are Investigating, Identified, and Monitoring; recovery is its separate explicit action. Require at least10 trimmed characters and cap text at1000. Limit user updates so the total record stays within40 events while leaving room for acknowledgment and recovery. The public-preview checkbox is off by default and resets after adding a message. No unsent update is silently published or automatically reclassified.

Reset opens a native confirmation dialog explaining removal of the local acknowledgment, recovery, and updates for this scenario. Keep the response cancels. Reset exercise restores the original empty response structure for that incident only. Download is suggested before reset. The source scenarios and the other incident’s local history remain intact. When Routine afternoon is selected, hide the incident controls and show a useful explanation with a monitor link.

## Public status-page preview

status.html is a full designed preview, not an unstyled dump. A prominent top label states Public status-page preview / Not published. Inside the white status frame, show original Beacon branding, Product status, an overall state symbol and heading, selected scenario impact, and a fixed-snapshot disclosure. Do not add a real-looking status domain, subscriber count, signup field, or external publication button.

Each component row shows its name, text health badge, ordered check strip, and Earlier checks/Latest labels. Current status must match the monitor dashboard after scenario or recovery changes. A local recovery produces an operational current state while historical failures remain. The incident section includes the original impact description and only local updates whose public flag is true. Internal notes, acknowledgment text, and recovery notes are not included unless explicitly modeled as public; the default local actions stay internal.

If no update was selected for public preview, say so. If Routine afternoon has no incident, show a clear no-incident message rather than a stale previous event. The lower explanation makes the audience boundary explicit: these are the same facts with less internal detail, still entirely local. Its guide link opens the communication section. The page has exactly one h1 in its explanatory region and sensible h2/h3 hierarchy in the preview.

## Guide and export semantics

guide.html is a substantial reading page with a large introduction, sticky section navigation, and six complete anchored sections. Explain choosing scenarios, reading checks, acknowledging ownership, writing clear updates, applying recovery, and keeping the record. Include a state-meaning table, a public-preview wording example, and real links into the workspace. The text must explain the actual implementation, including that null response is not zero latency and a24-check pass count is not a real uptime percentage.

The communication section emphasizes impact, uncertainty, and the next useful step. It distinguishes observation from causation and internal notes from external-facing language. The recovery section explains why earlier failures remain after current health changes. The local-record section explains browser storage and export limitations without inventing security, compliance, or persistence guarantees. Use17px article body with generous line height, not compressed documentation typography.

The Markdown export includes selected scenario, a synthetic/local disclosure, every service’s current state, current response or No response, count of operational checks, incident title/ID, acknowledgment and recovery flags, response stage, baseline chronology, and all local updates with their visibility labels. It preserves internal notes in the report and must not imply the report is public-ready. Use a safe scenario-derived filename and text/markdown Blob. Revoke temporary object URLs after a short delay. The action reports preparation for download and never claims a remote message was sent or a status page was published.

## Desktop geometry and phone reflow

Desktop homepage rail is1320px including30px gutters. Hero top padding is60px. The hero heading/CTA area uses1.45fr/1fr columns with60px gap and55px before the console. Console context width is340px, its top bar about60px, and services have20px vertical padding. Main section spacing is70–90px. Feature headings are43–57px; the closing display grows to76px. The mint chronology section uses a1fr/1.1fr split and85px gap. Status example and explanation use two equal columns with90px gap.

At1100px reduce the console context to290px, major gaps to40–50px, and service rows to a simpler grid. At800px, header becomes72px and gutters24px. Hero text and CTA stack; the console context pane disappears while all four service rows remain readable. Workflow and scenario panels stack. Incident controls stop being sticky and become a wrapping tool area above the chronology. Public preview uses24px outer margins and the guide navigation becomes a normal-flow link group.

At500px use20px gutters and68px header. Remove the lower-priority incident-room nav label from the crowded top row, retaining contextual incident access and footer routes. Hero display is43px; operational page h1 is36px; service names16px; controls14px; timestamps and metadata12px. Monitor rows reflow into name/health, full-width history, and latest response. The incident timeline becomes one column with timestamp above content. Forms remain16px text, and the public-preview frame has12px outer margins. Exact check tables remain readable within a bounded scroll region. No page should horizontally overflow at390px.

## Motion, assets, build ownership, and acceptance

Motion clarifies entry and state, not a fake live data feed. IntersectionObserver at threshold.2 triggers the hero console over.65 seconds, workflow panels over.55 seconds with .1/.2-second stagger, and timeline items over.6 seconds. The move is18px from reduced opacity to final position. Content is visible by default. Do not endlessly pulse service health, auto-switch scenarios, advance timestamps, or invent streaming checks. Reduced motion disables animations, transitions, and smooth scrolling. Local actions render their result immediately.

Bundle Geist Variable and its license, Lucide license, an original code-rendered hero.webp showing the service-health concept, credits, and provenance. All chart strips, timelines, status components, copy, and sample data are original. No reference screenshots, logos, customer records, or claims are reused. Public credits should be neutral and contain no assistant/platform branding or private machine paths. The visual interface itself remains real HTML with working controls rather than a raster screenshot.

Export buildBeacon() returning {prompt}. Generate only the five owned public pages and matching public/demos/beacon/PROMPT.md and public/prompts/beacon.md. Keep all implementation in scripts/beacon with unique helpers and no imports from other demo structures. The recreation prompt must exceed3000 substantive words and include actual data, state functions, and handlers under the exact heading Reference interaction handler. Keep it synchronized with the final behavior and readable-size rules.

Run scoped lint, syntax, and meaningful model tests. Verify scenario health, null response, acknowledgment leaving checks unchanged, recovery changing only the final affected check, historical pass counts, and export visibility labels. In the browser test scenario persistence, search/health intersection, empty-state recovery, service selection, duplicate-ack prevention, internal/public updates, public-preview filtering, recovery propagation, reset cancellation/confirmation, and current-state report download. Inspect desktop and390px views across all five pages, with readable controls and zero horizontal document overflow. Use Lighthouse only as supporting evidence. State any untested failure branch honestly and restore QA-only response records through the visible exercise controls.

## Final current-state consistency and chart contrast

After local recovery, the monitor description explicitly says recovery has been applied and earlier failures remain visible; it must not keep describing the current service as unavailable while showing Operational. Use darker check-strip fills on light operational pages: #2d8467 operational, #b17d1f degraded, #b44f42 outage. The dark marketing console uses brighter #5bba99, #e4b75f, and #d87164 respectively. Preserve text health labels and exact check tables alongside these color signals.


## Reference interaction handler

```javascript
const bnServices=[{"id":"api","name":"Public API","type":"HTTP endpoint","base":84,"description":"The fictional product’s request and data endpoint."},{"id":"app","name":"Web dashboard","type":"Web interface","base":142,"description":"The fictional signed-in product interface."},{"id":"auth","name":"Sign-in service","type":"Authentication","base":96,"description":"The synthetic account-access component."},{"id":"exports","name":"Export worker","type":"Background job","base":210,"description":"The synthetic document export queue."}];const bnScenarios={"calm":{"name":"Routine afternoon","summary":"All services operational","description":"A normal synthetic check window, with no active incident.","incident":null,"affected":[],"health":{}},"latency":{"name":"API slowdown","summary":"Some services degraded","description":"Elevated API response times are also affecting the web dashboard.","incident":"BN-204","affected":["api","app"],"health":{"api":"Degraded","app":"Degraded"}},"outage":{"name":"Sign-in interruption","summary":"Sign-in service interrupted","description":"The sign-in component is unavailable and dashboard access is affected.","incident":"BN-205","affected":["auth","app"],"health":{"auth":"Outage","app":"Degraded"}}};const bnIncidents={"BN-204":{"id":"BN-204","scenario":"latency","title":"Elevated API response times","severity":"SEV 3","started":"09:12","impact":"Some synthetic API requests take longer than expected. The dashboard may feel slow while waiting for data.","events":[{"time":"09:12","title":"Threshold crossed","text":"Three synthetic API checks exceeded the example response-time threshold."},{"time":"09:14","title":"Impact scoped","text":"The API and web dashboard are affected in this scenario. Sign-in and exports remain operational."},{"time":"09:18","title":"Investigation opened","text":"The exercise is ready for a local acknowledgment and an evidence-based update."}]},"BN-205":{"id":"BN-205","scenario":"outage","title":"Sign-in requests are failing","severity":"SEV 2","started":"10:04","impact":"The synthetic sign-in service is unavailable. Existing pages may load, but new access to the dashboard is interrupted.","events":[{"time":"10:04","title":"Failed checks observed","text":"The synthetic sign-in endpoint returned repeated failures."},{"time":"10:06","title":"Related impact identified","text":"Dashboard access is degraded because it depends on the sign-in component."},{"time":"10:09","title":"Response exercise opened","text":"Practice acknowledging ownership, communicating impact, and recording recovery."}]}};const bnStages=["Investigating","Identified","Monitoring"];
function bnValidResponse(r) {
  return (
    r &&
    typeof r === 'object' &&
    typeof r.acknowledged === 'boolean' &&
    typeof r.resolved === 'boolean' &&
    bnStages.includes(r.stage) &&
    Array.isArray(r.updates) &&
    r.updates.length <= 40 &&
    r.updates.every(
      (u) =>
        u &&
        typeof u.text === 'string' &&
        u.text.length <= 1000 &&
        typeof u.time === 'string' &&
        u.time.length <= 60 &&
        typeof u.public === 'boolean' &&
        typeof u.kind === 'string',
    )
  );
}
function bnEmptyResponse() {
  return {
    acknowledged: false,
    resolved: false,
    stage: 'Investigating',
    updates: [],
  };
}
function bnServiceState(service, scenario, response) {
  const config = bnScenarios[scenario];
  const affected = config.affected.includes(service.id);
  const recovered = !!response?.resolved;
  const health = recovered
    ? 'Operational'
    : config.health[service.id] || 'Operational';
  const checks = Array.from({ length: 24 }, (_, n) => {
    const issue = affected && n >= 17 && n <= 22;
    return {
      sequence: n + 1,
      health: issue
        ? config.health[service.id] || 'Operational'
        : 'Operational',
      ms: issue
        ? config.health[service.id] === 'Outage'
          ? null
          : service.base * 3 + n * 9
        : service.base + ((n * 7) % 29),
    };
  });
  checks[23] = {
    sequence: 24,
    health,
    ms:
      health === 'Outage'
        ? null
        : health === 'Degraded'
          ? service.base * 4 + 45
          : service.base + 12,
  };
  return {
    ...service,
    health,
    checks,
    latency: checks[23].ms,
    passed: checks.filter((c) => c.health === 'Operational').length,
  };
}
function bnScenarioStates(scenario, response) {
  return bnServices.map((s) => bnServiceState(s, scenario, response));
}
function bnExportText(scenario, response) {
  const config = bnScenarios[scenario];
  const incident = bnIncidents[config.incident];
  const states = bnScenarioStates(scenario, response);
  return (
    '# Beacon scenario report\n\nSynthetic exercise: ' +
    config.name +
    '\nNo live monitoring or external notifications.\n\n## Service health\n\n' +
    states
      .map(
        (s) =>
          '- ' +
          s.name +
          ': ' +
          s.health +
          '; ' +
          (s.latency === null ? 'no response' : s.latency + ' ms') +
          '; ' +
          s.passed +
          '/24 synthetic checks operational',
      )
      .join('\n') +
    '\n\n## Incident\n\n' +
    (incident
      ? incident.id +
        ' — ' +
        incident.title +
        '\nAcknowledged locally: ' +
        (response.acknowledged ? 'yes' : 'no') +
        '\nRecovery applied locally: ' +
        (response.resolved ? 'yes' : 'no') +
        '\nResponse stage: ' +
        response.stage +
        '\n\n' +
        incident.events
          .map((e) => e.time + ' UTC · ' + e.title + ' — ' + e.text)
          .join('\n')
      : 'No active incident in this scenario.') +
    '\n\n## Local exercise updates\n\n' +
    (response.updates.length
      ? response.updates
          .map(
            (u) =>
              u.time +
              ' · ' +
              u.kind +
              ' · ' +
              (u.public ? 'public-preview' : 'internal') +
              '\n' +
              u.text,
          )
          .join('\n\n')
      : 'No local updates recorded.') +
    '\n'
  );
}
const bnStorage = {
  read(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null');
    } catch {
      return null;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
};
const bnEsc = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );
const bnRequested = new URLSearchParams(location.search).get('scenario');
const bnSavedScenario = bnStorage.read('beacon-scenario-v1');
let bnScenario = Object.hasOwn(bnScenarios, bnRequested)
  ? bnRequested
  : Object.hasOwn(bnScenarios, bnSavedScenario)
    ? bnSavedScenario
    : 'latency';
const bnStoredResponses = bnStorage.read('beacon-responses-v1');
let bnResponses = Object.fromEntries(
  Object.keys(bnIncidents).map((id) => [
    id,
    bnValidResponse(bnStoredResponses?.[id])
      ? bnStoredResponses[id]
      : bnEmptyResponse(),
  ]),
);
let bnSelectedService =
  new URLSearchParams(location.search).get('service') || 'api';
function bnCurrentIncident() {
  return bnIncidents[bnScenarios[bnScenario].incident];
}
function bnCurrentResponse() {
  const incident = bnCurrentIncident();
  return incident ? bnResponses[incident.id] : bnEmptyResponse();
}
function bnCurrentStates() {
  return bnScenarioStates(bnScenario, bnCurrentResponse());
}
function bnStatusSummary() {
  const states = bnCurrentStates();
  return states.some((s) => s.health === 'Outage')
    ? 'A service is interrupted'
    : states.some((s) => s.health === 'Degraded')
      ? 'Some services are degraded'
      : 'All services operational';
}
function bnRenderedBars(service) {
  return `<div class="check-bars" role="img" aria-label="${service.passed} of 24 synthetic checks operational">${service.checks.map((c) => `<span class="${c.health.toLowerCase()}" title="Check ${c.sequence}: ${c.health}"></span>`).join('')}</div>`;
}
function bnCommitResponse(next) {
  const incident = bnCurrentIncident();
  if (!incident) return false;
  const updated = { ...bnResponses, [incident.id]: next };
  const saved = bnStorage.write('beacon-responses-v1', updated);
  bnResponses = updated;
  return saved;
}
function bnDownload(id) {
  const text = bnExportText(bnScenario, bnCurrentResponse());
  const url = URL.createObjectURL(
    new Blob([text], { type: 'text/markdown;charset=utf-8' }),
  );
  const a = document.createElement('a');
  a.href = url;
  a.download = 'beacon-' + bnScenario + '-scenario.md';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.getElementById(id).textContent =
    'Scenario report prepared for download. Nothing was sent or published.';
}
function bnRenderMonitors() {
  if (!document.getElementById('bn-service-list')) return;
  const states = bnCurrentStates();
  const q = document.getElementById('bn-search').value.trim().toLowerCase();
  const health = document.getElementById('bn-health-filter').value;
  const rows = states.filter(
    (s) =>
      (health === 'All services' || s.health === health) &&
      (s.name + ' ' + s.type).toLowerCase().includes(q),
  );
  if (!rows.some((s) => s.id === bnSelectedService))
    bnSelectedService = rows[0]?.id;
  document.getElementById('bn-monitor-description').textContent =
    bnCurrentResponse().resolved
      ? 'Local recovery has been applied in this synthetic scenario. Earlier failure history remains visible.'
      : bnScenarios[bnScenario].description;
  document.getElementById('bn-health-summary').innerHTML =
    `<div><span>Current scenario</span><h2>${bnStatusSummary()}</h2></div><div><strong>${states.filter((s) => s.health === 'Operational').length} / 4</strong><span>services operational</span></div><div><strong>${bnCurrentIncident() && !bnCurrentResponse().resolved ? '1' : '0'}</strong><span>active synthetic incident</span></div>`;
  document.getElementById('bn-service-count').textContent =
    rows.length + (rows.length === 1 ? ' service' : ' services');
  document.getElementById('bn-service-list').innerHTML = rows
    .map(
      (s) =>
        `<button class="monitor-service" data-service="${s.id}" aria-pressed="${s.id === bnSelectedService}"><span class="monitor-name"><b>${s.name}</b><small>${s.type}</small></span><span class="health ${s.health.toLowerCase()}">${s.health}</span><span class="monitor-history">${bnRenderedBars(s)}<small>${s.passed}/24 checks operational</small></span><span class="monitor-latency">${s.latency === null ? 'No response' : s.latency + ' ms'}<small>Latest synthetic check</small></span></button>`,
    )
    .join('');
  document.getElementById('bn-no-services').hidden = rows.length > 0;
  const incident = bnCurrentIncident();
  document.getElementById('bn-active-incident').innerHTML = incident
    ? `<a class="incident-link" href="incident.html"><span>${incident.severity} · ${incident.id}</span><b>${incident.title}</b><span>${bnCurrentResponse().resolved ? 'Recovered locally' : bnCurrentResponse().acknowledged ? 'Acknowledged locally' : 'Needs acknowledgment'} →</span></a>`
    : '<p class="quiet-state">No incident in the routine scenario. Choose another exercise to practice response.</p>';
  const selected = states.find((s) => s.id === bnSelectedService);
  document.querySelector('.check-inspector').hidden = !selected;
  if (!selected) return;
  document.getElementById('bn-inspector-title').textContent =
    selected.name + ' / check history';
  document.getElementById('bn-inspector-description').textContent =
    selected.description;
  document.getElementById('bn-check-table').innerHTML =
    `<table><caption>24 ordered synthetic checks · selected service</caption><thead><tr><th>Check</th><th>State</th><th>Response</th></tr></thead><tbody>${selected.checks.map((c) => `<tr><th scope="row">${String(c.sequence).padStart(2, '0')}</th><td>${c.health}</td><td>${c.ms === null ? 'No response' : c.ms + ' ms'}</td></tr>`).join('')}</tbody></table>`;
}
function bnTimelineHtml(incident, response) {
  return (
    incident.events
      .map(
        (e) =>
          `<li><time>${e.time} UTC</time><div><span class="event-kind">SYNTHETIC BASELINE</span><h3>${e.title}</h3><p>${e.text}</p></div></li>`,
      )
      .join('') +
    response.updates
      .map(
        (u) =>
          `<li class="local-event"><time>${bnEsc(u.time)}</time><div><span class="event-kind">LOCAL EXERCISE · ${u.public ? 'PUBLIC PREVIEW' : 'INTERNAL'}</span><h3>${bnEsc(u.kind)}</h3><p>${bnEsc(u.text)}</p></div></li>`,
      )
      .join('')
  );
}
function bnRenderIncident() {
  if (!document.getElementById('bn-incident-room')) return;
  const incident = bnCurrentIncident();
  document.getElementById('bn-incident-room').hidden = !incident;
  document.getElementById('bn-incident-empty').hidden = !!incident;
  document.getElementById('bn-incident-title').textContent =
    incident?.title || 'A quiet service window.';
  document.getElementById('bn-incident-impact').textContent =
    incident?.impact || 'There is no active incident in the routine scenario.';
  if (!incident) return;
  const response = bnCurrentResponse();
  document.getElementById('bn-incident-facts').innerHTML =
    `<span class="severity">${incident.severity}</span><h2>${incident.id}</h2><dl><div><dt>Scenario</dt><dd>${bnScenarios[bnScenario].name}</dd></div><div><dt>Ownership</dt><dd>${response.acknowledged ? 'Acknowledged locally' : 'Not acknowledged'}</dd></div><div><dt>Response</dt><dd>${response.resolved ? 'Recovered locally' : response.stage}</dd></div><div><dt>Baseline start</dt><dd>${incident.started} UTC · Sep 8</dd></div></dl>`;
  document.getElementById('bn-acknowledge').disabled = response.acknowledged;
  document.getElementById('bn-acknowledge').textContent = response.acknowledged
    ? 'Acknowledged locally'
    : 'Acknowledge locally';
  document.getElementById('bn-recover').disabled = response.resolved;
  document.getElementById('bn-recover').textContent = response.resolved
    ? 'Local recovery applied'
    : 'Apply local recovery';
  document.getElementById('bn-stage').value = response.stage;
  document.getElementById('bn-timeline').innerHTML = bnTimelineHtml(
    incident,
    response,
  );
}
function bnRenderPublic() {
  if (!document.getElementById('bn-public-components')) return;
  const response = bnCurrentResponse();
  const states = bnCurrentStates();
  const incident = bnCurrentIncident();
  const bad = states.some((s) => s.health !== 'Operational');
  document.getElementById('bn-public-overall').innerHTML =
    `<span class="overall-symbol ${bad ? 'affected' : ''}">${bad ? '!' : '✓'}</span><h2>${bnStatusSummary()}</h2><p>${response.resolved ? 'Recovery was applied locally. Earlier synthetic failures remain in the history.' : bnScenarios[bnScenario].description}</p><span>Scenario snapshot · not a live status report</span>`;
  document.getElementById('bn-public-components').innerHTML = states
    .map(
      (s) =>
        `<article><div><h3>${s.name}</h3><span class="health ${s.health.toLowerCase()}">${s.health}</span></div>${bnRenderedBars(s)}<div class="public-check-labels"><span>Earlier checks</span><span>Latest</span></div></article>`,
    )
    .join('');
  const updates = response.updates.filter((u) => u.public);
  document.getElementById('bn-public-updates').innerHTML = incident
    ? `<div class="public-impact"><span>${incident.id} · ${response.resolved ? 'Recovered locally' : 'Synthetic scenario'}</span><h3>${incident.title}</h3><p>Original scenario impact: ${incident.impact}</p></div>` +
      updates
        .map(
          (u) =>
            `<article class="public-update"><span>${bnEsc(u.time)} · LOCAL PREVIEW</span><h3>${bnEsc(u.kind)}</h3><p>${bnEsc(u.text)}</p></article>`,
        )
        .join('') +
      (updates.length
        ? ''
        : '<p class="boundary-note">No local response update has been included in this preview.</p>')
    : '<p>No incident or response updates in the routine scenario.</p>';
}
function bnRenderAll() {
  bnRenderMonitors();
  bnRenderIncident();
  bnRenderPublic();
}
const bnScenarioSelect = document.getElementById('bn-scenario');
if (bnScenarioSelect) {
  bnScenarioSelect.value = bnScenario;
  if (bnRequested && Object.hasOwn(bnScenarios, bnRequested))
    bnStorage.write('beacon-scenario-v1', bnScenario);
  bnScenarioSelect.addEventListener('change', () => {
    bnScenario = bnScenarioSelect.value;
    const ok = bnStorage.write('beacon-scenario-v1', bnScenario);
    document.getElementById('bn-scenario-save').textContent = ok
      ? 'Scenario saved locally.'
      : 'Scenario changed on this page; browser storage is unavailable.';
    if (document.getElementById('bn-update')) {
      document.getElementById('bn-update').value = '';
      document.getElementById('bn-public').checked = false;
      document.getElementById('bn-action-status').textContent = '';
      document.getElementById('bn-update-status').textContent = '';
    }
    bnRenderAll();
  });
}
if (document.getElementById('bn-service-list')) {
  document
    .getElementById('bn-search')
    .addEventListener('input', bnRenderMonitors);
  document
    .getElementById('bn-health-filter')
    .addEventListener('change', bnRenderMonitors);
  document
    .getElementById('bn-service-list')
    .addEventListener('click', (event) => {
      const button = event.target.closest('[data-service]');
      if (button) {
        bnSelectedService = button.dataset.service;
        bnRenderMonitors();
      }
    });
  document.getElementById('bn-clear-filters').addEventListener('click', () => {
    document.getElementById('bn-search').value = '';
    document.getElementById('bn-health-filter').value = 'All services';
    bnRenderMonitors();
  });
  document
    .getElementById('bn-export-monitor')
    .addEventListener('click', () => bnDownload('bn-monitor-export'));
}
if (document.getElementById('bn-incident-room')) {
  document.getElementById('bn-acknowledge').addEventListener('click', () => {
    const response = bnCurrentResponse();
    if (response.acknowledged) return;
    const ok = bnCommitResponse({
      ...response,
      acknowledged: true,
      updates: [
        ...response.updates,
        {
          time: new Date().toISOString(),
          kind: 'Acknowledged locally',
          text: 'You took ownership of this local response exercise. Service health was not changed.',
          public: false,
        },
      ],
    });
    bnRenderIncident();
    document.getElementById('bn-action-status').textContent = ok
      ? 'Ownership recorded locally. No notification was sent.'
      : 'Ownership recorded on this page only; storage is unavailable.';
  });
  document.getElementById('bn-recover').addEventListener('click', () => {
    const response = bnCurrentResponse();
    if (response.resolved) return;
    const ok = bnCommitResponse({
      ...response,
      resolved: true,
      updates: [
        ...response.updates,
        {
          time: new Date().toISOString(),
          kind: 'Recovery applied locally',
          text: 'The final synthetic checks are now operational. Earlier failure history is preserved.',
          public: false,
        },
      ],
    });
    bnRenderIncident();
    document.getElementById('bn-action-status').textContent = ok
      ? 'Local recovery applied. This did not change any real service.'
      : 'Recovery applied on this page only; storage is unavailable.';
  });
  document
    .getElementById('bn-update-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('bn-update');
      input.setCustomValidity(
        input.value.trim().length >= 10
          ? ''
          : 'Write at least 10 characters of useful context.',
      );
      if (!input.reportValidity()) return;
      const response = bnCurrentResponse();
      if (response.updates.length >= 38) {
        document.getElementById('bn-update-status').textContent =
          'This exercise has reached its update limit. Export the record before resetting.';
        return;
      }
      const stage = document.getElementById('bn-stage').value;
      const ok = bnCommitResponse({
        ...response,
        stage,
        updates: [
          ...response.updates,
          {
            time: new Date().toISOString(),
            kind: stage,
            text: input.value.trim(),
            public: document.getElementById('bn-public').checked,
          },
        ],
      });
      input.value = '';
      document.getElementById('bn-public').checked = false;
      bnRenderIncident();
      document.getElementById('bn-update-status').textContent = ok
        ? 'Update saved to this local exercise. Nothing was published.'
        : 'Update kept on this page only; storage is unavailable.';
    });
  document
    .getElementById('bn-update')
    .addEventListener('input', (event) => event.target.setCustomValidity(''));
  document
    .getElementById('bn-export-incident')
    .addEventListener('click', () => bnDownload('bn-action-status'));
  const dialog = document.getElementById('bn-reset-dialog');
  document
    .getElementById('bn-reset')
    .addEventListener('click', () => dialog.showModal());
  document
    .getElementById('bn-cancel-reset')
    .addEventListener('click', () => dialog.close());
  document.getElementById('bn-confirm-reset').addEventListener('click', () => {
    const ok = bnCommitResponse(bnEmptyResponse());
    bnRenderIncident();
    dialog.close();
    document.getElementById('bn-action-status').textContent = ok
      ? 'Local exercise reset.'
      : 'Exercise reset on this page only; storage is unavailable.';
  });
}
bnRenderAll();
if ('IntersectionObserver' in window) {
  const bnObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered');
          bnObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.2 },
  );
  document
    .querySelectorAll('.hero-console,.workflow-map,.timeline-preview')
    .forEach((el) => bnObserver.observe(el));
}

```
