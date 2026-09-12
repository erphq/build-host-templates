# Serein: product analytics with a different perspective

Build Serein as an original, complete analytics product concept. Replace the previous unrelated template structure entirely. The deliverable is a substantial product-led homepage, a working analytics explorer, a saved-view notebook, and a detailed methodology page. Existing public entry points must remain useful: index.html is the new homepage; about.html explains the data contract; stories.html opens the notebook; old story URLs lead to meaningful preset analytics questions. Do not retain old customer stories, pricing claims, team messaging, imagery, or layout sections that belong to the replaced template.

The core experience uses an original deterministic synthetic dataset, not a live analytics service. A visitor can choose a segment, date-range length, metric, and chart style; inspect linked calculations; download the selected rows as CSV; save a named view; write an interpretation; reopen the same controls; and download a report containing the evidence and their note. Every visible claim about data must distinguish a calculation from a hypothesis. Avoid fictional traction, endorsements, production integrations, and unsupported causal conclusions.

## Reference research and intended structural translation

Research source: https://saaspo.com/pages/posthog-landing-page. Inspect the actual live pages https://posthog.com/ and https://posthog.com/product-analytics before implementing. The reference is distinctive because its public site behaves like an application environment: persistent navigation surrounds a framed content window, and the analytics product page begins with a large chart before its product headline. The page contains functional section navigation, tabbed demonstrations, substantive definitions, a role/use-case table, feature explanations, installation information, comparison material, and questions. It is not a giant slogan above three generic benefit cards.

During live desktop inspection at 1471×847, the content window ran approximately from x153 to x1318, with a persistent inner side navigation about 250px wide. The product screenshot occupied most of the right-hand pane. The observed h1 was 36px with 45px line height; introductory h2 text was around 28px with 35px line height. The visible navigation remained steady as the content scrolled inside the window. Selecting the Trends tab changed the feature panel to a chart-specific explanation and screenshot. The page exposed an explicit pause-carousel control; autoplay timing was not reverse-engineered. The visual reference includes branded wallpaper and a mascot, neither of which belongs in this original implementation.

Translate the chart-first framing, persistent wayfinding, tab-to-explanation relationship, and depth of educational content. Do not copy PostHog’s mascot, wallpaper, operating-system imitation, exact controls, brand artwork, customer content, code, or product claims. Serein uses a calmer pale-lilac desktop field, a warm-white document window, cobalt-purple chart strokes, and occasional muted lime or peach surfaces. It has ordinary document scrolling instead of trapping the user in an application-sized internal scroll pane. The actual explorer and notebook are the product, not screenshots pretending to be interactive.

## Identity, typography, and global structure

Use locally bundled Geist Variable throughout, with font-display swap and its SIL Open Font License. Use original text branding: serein, accompanied by a small analytics descriptor and a simple native three-bar mark. The mark is constructed from three six-pixel columns at differing heights, with cobalt, lavender, and pale-purple fills and a slight vertical skew. It is not a copy of a reference logo. Use the existing Lucide icon family through Serein’s own local UI helper, retaining its ISC license; do not depend on the old template’s rendering module.

Global palette: ink #282637, muted #625d70, rules #d5d2dd, paper #faf9f5, lilac #e5e2f0, blue #5143c6, and lime #e8edb7. The page background is warm paper. Typography uses 15px body at line height 1.6, weight 500 headings, tight tracking around -.045em, and line height near 1.12. Utility labels are small uppercase text with .13em tracking, used only where they convey a real category or control context. Keep body explanations comfortably readable, generally 13–16px; very small text belongs only inside illustrative preview graphics and subordinate metadata.

The shared header is 72px tall, sticky at top zero, and has a translucent warm-paper background with enough opacity to protect legibility. It has a fine bottom rule, subtle blur, and padding aligned to a 1320px rail. The brand is 25px. Navigation links are Explore, Notebook with the actual saved-view count, and The method. A compact Open the demo button provides a real explorer route. At narrow widths, remove redundant method and CTA controls before squeezing the essential routes. Current-page links use aria-current. Every page has a skip link, main landmark, one h1, accessible navigation, descriptive title, viewport metadata, and real relative links.

Buttons use the blue accent, white text, a restrained border and two-pixel lower shadow, five-pixel corners, and a minimum 46px main target height. A compact header action may be 35px. Hover may lift the button one pixel without moving surrounding layout. Plain actions use a neutral surface and rule. Focus-visible outlines are two-pixel cobalt with five-pixel offset. Never rely on color alone for chart mode, selected segment, or saved-view state. The footer uses original-concept and synthetic-data disclosures, local navigation, licenses/credits, and a generic link back to all designs. Do not expose platform branding in public copy or credit files. Do not add favicon links.

## Homepage window and first impression

The homepage’s desktop surface uses pale lilac with 32px top, 40px right, 65px bottom, and 125px left padding. A small sticky dock sits in the left margin, with links to Overview, Questions, Lenses, and Notebook. It is wayfinding, not a fake desktop launcher. The primary content window has maximum width 1250px, a light border, twelve-pixel radius, and a subtle broad shadow. It remains in normal document flow. The window title bar is 42px high and contains a compact product-intelligence description and a synthetic/local-demo disclosure.

The hero begins with a real original chart panel, before the headline. It has a maximum width about 930px, 22px by 28px padding, white background, eight-pixel corners, fine rules, and a quiet shadow. At the top show a short dataset context and a working Explore this view link. Below show the average daily visitor value, a clearly labeled final-fourteen-day period, and a line/area chart calculated from the actual included data. The chart has grid lines, start/mid/end date labels, an unambiguous legend, and a synthetic-data label. The line is not decorative random geometry: it is generated from the same selection function as the explorer.

Below the chart, use a centered compact hero statement about gaining a different perspective on what happens next. The desktop display grows to around 66px with line height 1.03 and -.055em tracking. The copy encourages following a pattern, examining drop-off, and keeping the question. It must not promise automatic causal explanations or autonomous decision-making. Provide a primary explorer link and a secondary in-page method link. The introductory chart and headline together create the product-led opening; do not replace the chart with a prism photograph, stock team image, or anonymous dashboard skeleton.

Follow with a two-column explanatory section. The left contains a 42px heading about charts being a place to begin; the right contains one stronger 20px paragraph and a quieter 14px explanation. It should distinguish a visible change, a useful segment, and the still-missing story. The next section introduces three analytic lenses with a large heading, a three-button control row, and one substantial content panel at a time. Each button uses aria-pressed and corresponds to a hidden panel. The selected tab is white with a cobalt underline; the inactive ones use lilac.

## Three complete analytic lenses

The Trends panel pairs a 30px heading and a concrete explanation with a meaningful line/area graphic. It explains that a date range helps distinguish one busy day from a broader pattern and that comparison periods must have matching durations. A captioned callout identifies the current-versus-prior-period relationship. Its CTA opens the explorer with metric=visitors. The chart is an original native graphic built from the included synthetic records, not a copied provider image.

The Journeys panel explains starts and completions and explicitly uses a weighted activation ratio. Its illustration shows a complete initial stage and a shorter completion stage, labeled as an illustrative preview. The percentage shown in that marketing illustration must not be passed off as the current explorer value. The actual explorer computes exact values dynamically. Its CTA opens metric=activation. The Segments panel contrasts new and returning visitors with distinct muted visual fields and short descriptions of their different contexts. Its CTA opens the new-visitor segment. Changing a lens changes both the visual and the explanatory text, never just the selected tab color.

After the lens demonstration, show three substantial question links. They are separate original prompts about new-visitor activation over seven days, returning activity over twenty-eight days, and daily-visitor momentum over fourteen days. Their URLs encode real recognized controls. Use a contiguous three-column composition with one-pixel rules, lilac/lime/peach surfaces, and a readable short question. Every entire tile is a real navigation target. Do not add fake customer names or metrics to make these examples look like commissioned case studies.

The notebook story pairs a native paper-note composition on lime with a heading and explanation about saving context. The paper contains an example observation, a next question, and a reminder that observation is not explanation. It is preauthored educational sample text, not an AI analysis of user data. The notebook action works whether empty or populated. Next, provide a data-contract region with a field/meaning table and an explorer link to the underlying rows. Finish with native FAQ details and a large closing invitation. The complete page should be a substantial narrative, not an abbreviated feature strip.

## Dataset, aggregation, and semantic accuracy

The dataset consists of 56 fixed days, July 7 through August 31, 2026, with exactly two records per day: New visitors and Returning visitors. Original formulas create deterministic trend and variation. Each record contains date, segment, visitors, starts, completed, and events. All generated values are synthetic and do not describe real people or a real product. The full record array and calculation functions are included in the appended interaction handler so the standalone page is reproducible without requests.

Selecting seven, fourteen, or twenty-eight days uses the final N sample days ending August 31. The previous comparison uses the preceding N days. There are enough included days for all three comparisons. All visitors combines the two segment records per day before summarizing. The average-daily-visitors metric is the sum of daily visitor counts divided by selected days. It is not a unique-user total across the whole period. Total product events is the sum of selected daily events. Activation is total completed divided by total starts, multiplied by 100. The chart displays the selected metric per day, while the summary uses the appropriate period aggregation.

For visitor and event comparisons, show relative percentage change from the prior period. For activation, show a difference in percentage points. Do not label the latter as a relative percent. The daily activation series divides each day’s completions by that day’s starts. The period activation is the weighted aggregate, not the mean of daily percentages. The method page explains this difference with a clear example. Count charts start at zero and use a rounded upper bound above the observed maximum. Activation charts use zero to 100. No axis truncation exaggerates the change.

## Explorer controls and linked output

The explorer page has a large heading and concise fixed-sample explanation, then a framed analytics window with a title bar. Its control row includes labeled native selects for segment, date range, and metric, followed by Line/Bars buttons with aria-pressed. Supported segments are All visitors, New visitors, and Returning visitors. Supported metric keys are visitors, events, and activation. Supported range lengths are 7, 14, and 28. Supported chart styles are line and bar. Query parameters initialize these controls only if the resulting complete configuration passes validation; otherwise use a safe default of all visitors, fourteen days, daily visitors, and line.

When any control changes, use one shared selection and summarization pipeline. Update the three summary values, selected-metric underline, chart label, visible start/end dates, prior-period comparison, chart itself, funnel, formula explanation, and table. These surfaces cannot disagree about selected segment or period. Do not add artificial loading delays to this entirely local calculation. A short opacity transition may soften a chart replacement when reduced motion is off.

The chart is responsive SVG in an 820×320 coordinate system. Its plot spans approximately x50 to770 and y45 to265. There are five grid levels, with numeric labels to the left and three date labels beneath. A count axis rounds above the largest value; the activation axis stays fixed at100. A line mode includes a translucent area, a three-pixel stroke, and individual points with title text. Bar mode uses correctly scaled rectangles and per-bar title text. The SVG has an accessible image label naming the metric, segment, and duration. The exact values are also presented in an accessible table, so hover is not the only way to inspect them.

Below the chart, the activation journey reports total starts, total completions, proportional stage widths, and the weighted conversion rate for the current selection. The adjacent save panel asks for a view name. It saves the exact current controls, not a different default query. Names are required, trimmed, and limited to80 characters. The notebook holds at most12 views; if full, explain how to remove a saved view before adding another. Report successful saving only when local storage succeeds, and provide a real notebook link. If storage fails, retain the current explorer and offer CSV as a portable alternative.

The evidence section contains every selected daily record with a caption describing segment and number of days. Columns are date, visitors, starts, completions, events, and activation. The CSV export includes the same rows and correct headers. It uses fixed safe filenames derived from range length, a text/csv Blob, a normal anchor download, and timely object-URL revocation. The status says prepared for download rather than claiming the browser finished saving. The table is horizontally scrollable only within its labeled data region on phones; the entire page must not overflow.

## Notebook state, notes, and export

The notebook is a complete page with an honest empty state. When no valid saved views exist, show a paper/document illustration, a useful explanation, and a working explorer action. Do not seed the notebook with fabricated personal discoveries. When saved views exist, show a sticky left list and a wider detail panel. Each list button includes the saved name and segment/range metadata, with aria-pressed. Selecting one renders its original controls against the fixed dataset, displays the named metric value, and loads its separate note.

The detail panel has a Reopen controls link with the exact saved parameters, a responsive chart, a calculated metric summary, a labeled textarea for interpretation, actual save status, report download, and remove action. Notes are limited to3000 characters. Save on input with explicit success/failure reporting. Failed storage must leave the current in-page note intact and say it is page-only. Never fabricate an analysis or overwrite the user’s note with a generated conclusion. Saved text is rendered through textContent, field values, or a complete HTML escape function.

The report is Markdown containing saved name, synthetic-data disclosure, segment, exact date period, metric label and value, the user’s note or an honest empty-note statement, and the daily CSV records in a fenced block. It ends with the descriptive-data limitation. Use a safe fixed filename and text/markdown MIME type. Removing a saved view requires a native confirmation dialog explaining that the controls and note will be removed locally and suggesting report download first. Cancel preserves it. Confirm persists the filtered list before claiming success; if storage fails, retain the view and report the problem.

Use one local key, serein-views-v1. Parse defensively. Saved records must have bounded string IDs and names, a bounded note, and a valid recognized configuration. Limit recovered records to12. Ignore malformed records rather than crashing the page. Update the notebook count in shared navigation after saves and removals. There is no server synchronization, user account, telemetry, tracking SDK, uploaded data, or cross-device claim.

## Method page and compatibility routes

about.html is a substantive data-methodology page with its own large introduction, sticky table of contents, and four anchored sections: sample, metrics, comparison, and saved context. It describes the 56-day synthetic period, two segment records per day, exact metric formulas, matching comparison durations, percentage-point interpretation, zero-based axes, limits on causal claims, and browser-local portability. It includes a real formula table and links into activation exploration and notebook use. It must look like part of the same designed product, not an unstyled readme.

stories.html is a compatibility route rendering the complete notebook page. Preserve old stories/northline.html and stories/fieldwork.html links as small redirects with visible fallback links to new-visitor activation and returning-visitor events presets respectively. They must not keep the old fabricated customer narratives or imagery. The main current navigation uses explore.html, notebook.html, and about.html. Remove old unused template images, fonts, and favicon assets from this owned demo directory. No favicon link should appear in generated HTML.

## Responsive geometry and meaningful motion

At desktop width, the homepage window is surrounded by the lilac field and the sticky dock. Hero and major sections generally use65px inset. The chart panel has22–28px internal padding. Intro, notebook story, and data contract are two-column compositions with65–70px gaps. Lens content uses one text column and one slightly wider visual column with38px padding and roughly380px minimum height. The notebook paper sits in a430px-tall visual. This is an intentionally varied sequence: chart-first hero, split explanation, tabbed product demonstration, contiguous question grid, paper-note story, data table, FAQ, close.

At1100px, reduce the desktop dock allowance and section insets to45px, tighten gaps to40px, and reduce some heading sizes. At800px, remove the dock and use22px outside the main window. Hero type becomes47px. Split story sections stack; lens panels become one column; question tiles stack; analytics controls wrap; the funnel/save section becomes one column; notebook navigation stops being sticky and becomes a grid. Do not simply scale a desktop screenshot to unreadability.

At500px, header height becomes65px and the redundant top CTA disappears. Window margins are12px and content insets are18–22px. Hero type is37px, section titles around33px, and notebook title around29px. Product controls become a two-column grid with segment spanning full width and chart style on its own row. Metric summaries retain three columns with compact but readable values. The chart has a minimum visual height to avoid becoming a thin strip. The notebook list and principles become one column. Method tables use compact cell padding, and the main page stays within390px width. Add whitespace around line breaks before hiding them with CSS so sentences never join accidentally.

IntersectionObserver reveals the hero chart, question links, and notebook paper only once at threshold .25. The hero line draws through a stroke-dash animation over1.2 seconds. Question tiles enter over .55 seconds with .1 and .2-second delays. Notebook paper settles over .8 seconds. Lens transitions last280ms with a10px vertical movement; explorer chart replacements fade over240ms. These motions explain construction and state. They never change data, cycle controls without consent, or delay local calculations. Reduced-motion CSS disables animation, transitions, smooth scrolling, and unnecessary paper rotations; JavaScript respects the same media query.

## Assets, build contract, and verification

Bundle assets/geist-variable.woff2, GEIST-LICENSE.txt, LUCIDE-LICENSE.txt, CREDITS.txt, provenance.json, and hero.webp. The preview image is an original code-rendered chart illustration based on the same synthetic data, not a screenshot or asset from a third-party analytics provider. Do not expose platform/vendor assistant branding in public credits. Preserve actual third-party font and icon attribution accurately. All visible charts in the product remain native code generated from records.

Export buildSerein() returning {prompt}. The builder generates owned public pages and public/prompts/serein.md. The full recreation prompt must exceed3000 substantive words and include the actual shared data/calculation/interaction code under the exact heading Reference interaction handler. Keep source and generated prompts synchronized. Use local UI helpers with unique names, and do not import old template structure. Run scoped lint, JavaScript syntax checks, and meaningful calculation tests.

Verify segment aggregation, prior-period boundaries, weighted activation, average-daily visitors, CSV row count, valid/invalid configs, linked charts and tables, query initialization, Line/Bars changes, saved views, note persistence, reopening controls, removal cancellation/confirmation, and report creation. Inspect all major pages at desktop and390px, including empty and saved notebook states. Test for horizontal document overflow and console errors. Restore or remove QA-only saved records through the visible interface. Report untested failure branches honestly. A polished appearance is not enough unless the calculations, labels, controls, and exported evidence agree.


## Verified text contrast tokens

Use #665c76 for utility labels, window metadata, inactive lens labels, table headings, and question categories. Use #6b6278 for white-surface chart metadata and supporting callout text. The chart legend accent is #6954b3. The paper-note metadata, prose, and note tag use #5e654e. General muted prose uses #625d70. These darker foregrounds preserve the original lilac, lime, white, and peach surfaces while meeting at least4.5:1 for the previously flagged small text; the minimum computed ratio for those foreground/background pairs is above5:1. Do not return to the earlier pale foregrounds to simulate visual hierarchy. Use spacing, size, and weight instead.


## Reference interaction handler

```javascript
const pmSegments=["All visitors","New visitors","Returning visitors"];const pmMetrics={"visitors":{"label":"Daily visitors","summary":"Average daily visitors","unit":"people / day"},"events":{"label":"Product events","summary":"Total product events","unit":"events"},"activation":{"label":"Activation rate","summary":"Activation rate","unit":"% of starts"}};const pmRecords=[{"date":"2026-07-07","segment":"New visitors","visitors":170,"starts":105,"completed":55,"events":680},{"date":"2026-07-07","segment":"Returning visitors","visitors":134,"starts":64,"completed":49,"events":938},{"date":"2026-07-08","segment":"New visitors","visitors":188,"starts":117,"completed":61,"events":763},{"date":"2026-07-08","segment":"Returning visitors","visitors":140,"starts":67,"completed":51,"events":991},{"date":"2026-07-09","segment":"New visitors","visitors":201,"starts":125,"completed":65,"events":826},{"date":"2026-07-09","segment":"Returning visitors","visitors":139,"starts":67,"completed":51,"events":995},{"date":"2026-07-10","segment":"New visitors","visitors":207,"starts":128,"completed":67,"events":861},{"date":"2026-07-10","segment":"Returning visitors","visitors":130,"starts":62,"completed":47,"events":943},{"date":"2026-07-11","segment":"New visitors","visitors":205,"starts":127,"completed":67,"events":864},{"date":"2026-07-11","segment":"Returning visitors","visitors":117,"starts":56,"completed":43,"events":863},{"date":"2026-07-12","segment":"New visitors","visitors":161,"starts":100,"completed":53,"events":644},{"date":"2026-07-12","segment":"Returning visitors","visitors":70,"starts":34,"completed":26,"events":490},{"date":"2026-07-13","segment":"New visitors","visitors":149,"starts":92,"completed":49,"events":607},{"date":"2026-07-13","segment":"Returning visitors","visitors":63,"starts":30,"completed":23,"events":452},{"date":"2026-07-14","segment":"New visitors","visitors":173,"starts":107,"completed":57,"events":714},{"date":"2026-07-14","segment":"Returning visitors","visitors":98,"starts":47,"completed":36,"events":708},{"date":"2026-07-15","segment":"New visitors","visitors":168,"starts":104,"completed":55,"events":705},{"date":"2026-07-15","segment":"Returning visitors","visitors":106,"starts":51,"completed":39,"events":775},{"date":"2026-07-16","segment":"New visitors","visitors":171,"starts":106,"completed":56,"events":728},{"date":"2026-07-16","segment":"Returning visitors","visitors":121,"starts":58,"completed":45,"events":891},{"date":"2026-07-17","segment":"New visitors","visitors":181,"starts":112,"completed":60,"events":724},{"date":"2026-07-17","segment":"Returning visitors","visitors":138,"starts":66,"completed":51,"events":966},{"date":"2026-07-18","segment":"New visitors","visitors":198,"starts":123,"completed":66,"events":803},{"date":"2026-07-18","segment":"Returning visitors","visitors":154,"starts":74,"completed":57,"events":1089},{"date":"2026-07-19","segment":"New visitors","visitors":181,"starts":112,"completed":60,"events":746},{"date":"2026-07-19","segment":"Returning visitors","visitors":129,"starts":62,"completed":48,"events":925},{"date":"2026-07-20","segment":"New visitors","visitors":197,"starts":122,"completed":66,"events":821},{"date":"2026-07-20","segment":"Returning visitors","visitors":130,"starts":62,"completed":48,"events":943},{"date":"2026-07-21","segment":"New visitors","visitors":241,"starts":149,"completed":80,"events":1008},{"date":"2026-07-21","segment":"Returning visitors","visitors":159,"starts":76,"completed":59,"events":1157},{"date":"2026-07-22","segment":"New visitors","visitors":242,"starts":150,"completed":81,"events":968},{"date":"2026-07-22","segment":"Returning visitors","visitors":148,"starts":71,"completed":55,"events":1036},{"date":"2026-07-23","segment":"New visitors","visitors":236,"starts":146,"completed":79,"events":955},{"date":"2026-07-23","segment":"Returning visitors","visitors":135,"starts":65,"completed":51,"events":956},{"date":"2026-07-24","segment":"New visitors","visitors":225,"starts":140,"completed":76,"events":922},{"date":"2026-07-24","segment":"Returning visitors","visitors":125,"starts":60,"completed":47,"events":897},{"date":"2026-07-25","segment":"New visitors","visitors":213,"starts":132,"completed":72,"events":885},{"date":"2026-07-25","segment":"Returning visitors","visitors":122,"starts":59,"completed":46,"events":887},{"date":"2026-07-26","segment":"New visitors","visitors":170,"starts":105,"completed":57,"events":724},{"date":"2026-07-26","segment":"Returning visitors","visitors":92,"starts":44,"completed":35,"events":688},{"date":"2026-07-27","segment":"New visitors","visitors":169,"starts":105,"completed":58,"events":676},{"date":"2026-07-27","segment":"Returning visitors","visitors":104,"starts":50,"completed":39,"events":728},{"date":"2026-07-28","segment":"New visitors","visitors":211,"starts":131,"completed":72,"events":855},{"date":"2026-07-28","segment":"Returning visitors","visitors":156,"starts":75,"completed":59,"events":1103},{"date":"2026-07-29","segment":"New visitors","visitors":226,"starts":140,"completed":77,"events":926},{"date":"2026-07-29","segment":"Returning visitors","visitors":173,"starts":83,"completed":66,"events":1233},{"date":"2026-07-30","segment":"New visitors","visitors":244,"starts":151,"completed":83,"events":1009},{"date":"2026-07-30","segment":"Returning visitors","visitors":185,"starts":89,"completed":71,"events":1328},{"date":"2026-07-31","segment":"New visitors","visitors":261,"starts":162,"completed":90,"events":1088},{"date":"2026-07-31","segment":"Returning visitors","visitors":191,"starts":92,"completed":73,"events":1381},{"date":"2026-08-01","segment":"New visitors","visitors":273,"starts":169,"completed":94,"events":1092},{"date":"2026-08-01","segment":"Returning visitors","visitors":188,"starts":90,"completed":72,"events":1316},{"date":"2026-08-02","segment":"New visitors","visitors":243,"starts":151,"completed":84,"events":983},{"date":"2026-08-02","segment":"Returning visitors","visitors":143,"starts":69,"completed":55,"events":1012},{"date":"2026-08-03","segment":"New visitors","visitors":240,"starts":149,"completed":83,"events":982},{"date":"2026-08-03","segment":"Returning visitors","visitors":130,"starts":62,"completed":50,"events":932},{"date":"2026-08-04","segment":"New visitors","visitors":265,"starts":164,"completed":92,"events":1093},{"date":"2026-08-04","segment":"Returning visitors","visitors":154,"starts":74,"completed":59,"events":1111},{"date":"2026-08-05","segment":"New visitors","visitors":253,"starts":157,"completed":88,"events":1056},{"date":"2026-08-05","segment":"Returning visitors","visitors":147,"starts":71,"completed":57,"events":1073},{"date":"2026-08-06","segment":"New visitors","visitors":243,"starts":151,"completed":85,"events":972},{"date":"2026-08-06","segment":"Returning visitors","visitors":149,"starts":72,"completed":58,"events":1043},{"date":"2026-08-07","segment":"New visitors","visitors":239,"starts":148,"completed":84,"events":967},{"date":"2026-08-07","segment":"Returning visitors","visitors":158,"starts":76,"completed":61,"events":1117},{"date":"2026-08-08","segment":"New visitors","visitors":243,"starts":151,"completed":85,"events":994},{"date":"2026-08-08","segment":"Returning visitors","visitors":173,"starts":83,"completed":67,"events":1233},{"date":"2026-08-09","segment":"New visitors","visitors":219,"starts":136,"completed":77,"events":909},{"date":"2026-08-09","segment":"Returning visitors","visitors":156,"starts":75,"completed":61,"events":1125},{"date":"2026-08-10","segment":"New visitors","visitors":236,"starts":146,"completed":83,"events":988},{"date":"2026-08-10","segment":"Returning visitors","visitors":171,"starts":82,"completed":66,"events":1241},{"date":"2026-08-11","segment":"New visitors","visitors":289,"starts":179,"completed":102,"events":1156},{"date":"2026-08-11","segment":"Returning visitors","visitors":215,"starts":103,"completed":83,"events":1505},{"date":"2026-08-12","segment":"New visitors","visitors":304,"starts":188,"completed":107,"events":1227},{"date":"2026-08-12","segment":"Returning visitors","visitors":215,"starts":103,"completed":84,"events":1516},{"date":"2026-08-13","segment":"New visitors","visitors":313,"starts":194,"completed":111,"events":1274},{"date":"2026-08-13","segment":"Returning visitors","visitors":208,"starts":100,"completed":81,"events":1478},{"date":"2026-08-14","segment":"New visitors","visitors":313,"starts":194,"completed":111,"events":1285},{"date":"2026-08-14","segment":"Returning visitors","visitors":196,"starts":94,"completed":77,"events":1405},{"date":"2026-08-15","segment":"New visitors","visitors":305,"starts":189,"completed":109,"events":1264},{"date":"2026-08-15","segment":"Returning visitors","visitors":183,"starts":88,"completed":72,"events":1325},{"date":"2026-08-16","segment":"New visitors","visitors":259,"starts":161,"completed":93,"events":1036},{"date":"2026-08-16","segment":"Returning visitors","visitors":139,"starts":67,"completed":55,"events":973},{"date":"2026-08-17","segment":"New visitors","visitors":247,"starts":153,"completed":89,"events":999},{"date":"2026-08-17","segment":"Returning visitors","visitors":137,"starts":66,"completed":54,"events":970},{"date":"2026-08-18","segment":"New visitors","visitors":275,"starts":171,"completed":99,"events":1122},{"date":"2026-08-18","segment":"Returning visitors","visitors":178,"starts":85,"completed":70,"events":1268},{"date":"2026-08-19","segment":"New visitors","visitors":275,"starts":171,"completed":99,"events":1133},{"date":"2026-08-19","segment":"Returning visitors","visitors":192,"starts":92,"completed":76,"events":1377},{"date":"2026-08-20","segment":"New visitors","visitors":284,"starts":176,"completed":103,"events":1180},{"date":"2026-08-20","segment":"Returning visitors","visitors":209,"starts":100,"completed":82,"events":1507},{"date":"2026-08-21","segment":"New visitors","visitors":299,"starts":185,"completed":108,"events":1196},{"date":"2026-08-21","segment":"Returning visitors","visitors":225,"starts":108,"completed":89,"events":1575},{"date":"2026-08-22","segment":"New visitors","visitors":317,"starts":197,"completed":115,"events":1279},{"date":"2026-08-22","segment":"Returning visitors","visitors":237,"starts":114,"completed":94,"events":1670},{"date":"2026-08-23","segment":"New visitors","visitors":299,"starts":185,"completed":109,"events":1218},{"date":"2026-08-23","segment":"Returning visitors","visitors":206,"starts":99,"completed":82,"events":1464},{"date":"2026-08-24","segment":"New visitors","visitors":311,"starts":193,"completed":114,"events":1277},{"date":"2026-08-24","segment":"Returning visitors","visitors":202,"starts":97,"completed":80,"events":1447},{"date":"2026-08-25","segment":"New visitors","visitors":349,"starts":216,"completed":127,"events":1440},{"date":"2026-08-25","segment":"Returning visitors","visitors":227,"starts":109,"completed":90,"events":1633},{"date":"2026-08-26","segment":"New visitors","visitors":345,"starts":214,"completed":127,"events":1380},{"date":"2026-08-26","segment":"Returning visitors","visitors":214,"starts":103,"completed":86,"events":1498},{"date":"2026-08-27","segment":"New visitors","visitors":334,"starts":207,"completed":123,"events":1347},{"date":"2026-08-27","segment":"Returning visitors","visitors":203,"starts":97,"completed":81,"events":1432},{"date":"2026-08-28","segment":"New visitors","visitors":322,"starts":200,"completed":119,"events":1310},{"date":"2026-08-28","segment":"Returning visitors","visitors":197,"starts":95,"completed":79,"events":1401},{"date":"2026-08-29","segment":"New visitors","visitors":313,"starts":194,"completed":116,"events":1285},{"date":"2026-08-29","segment":"Returning visitors","visitors":200,"starts":96,"completed":80,"events":1433},{"date":"2026-08-30","segment":"New visitors","visitors":275,"starts":171,"completed":102,"events":1144},{"date":"2026-08-30","segment":"Returning visitors","visitors":175,"starts":84,"completed":70,"events":1269},{"date":"2026-08-31","segment":"New visitors","visitors":280,"starts":174,"completed":104,"events":1120},{"date":"2026-08-31","segment":"Returning visitors","visitors":191,"starts":92,"completed":77,"events":1337}];
function pmSelectRows(config, previous = false) {
  const days = Number(config.days);
  const dates = [...new Set(pmRecords.map((r) => r.date))];
  const end = previous ? dates.length - days : dates.length;
  const selected = dates.slice(end - days, end);
  return selected.map((date) => {
    const rows = pmRecords.filter(
      (r) =>
        r.date === date &&
        (config.segment === 'All visitors' || r.segment === config.segment),
    );
    return {
      date,
      ...Object.fromEntries(
        ['visitors', 'starts', 'completed', 'events'].map((k) => [
          k,
          rows.reduce((sum, r) => sum + r[k], 0),
        ]),
      ),
    };
  });
}
function pmSummarizeRows(rows) {
  const total = (k) => rows.reduce((sum, r) => sum + r[k], 0);
  return {
    visitors: total('visitors') / rows.length,
    events: total('events'),
    activation: total('starts')
      ? (total('completed') / total('starts')) * 100
      : 0,
    starts: total('starts'),
    completed: total('completed'),
    visitorDays: total('visitors'),
  };
}
function pmPointValue(row, metric) {
  return metric === 'activation'
    ? row.starts
      ? (row.completed / row.starts) * 100
      : 0
    : row[metric];
}
function pmValidView(value) {
  return (
    value &&
    typeof value === 'object' &&
    [7, 14, 28].includes(Number(value.days)) &&
    pmSegments.includes(value.segment) &&
    Object.hasOwn(pmMetrics, value.metric) &&
    ['line', 'bar'].includes(value.chart)
  );
}
function pmCsv(rows) {
  return (
    'Date,Visitors,Starts,Completions,Events,Activation percent\n' +
    rows
      .map((r) =>
        [
          r.date,
          r.visitors,
          r.starts,
          r.completed,
          r.events,
          ((r.completed / r.starts) * 100).toFixed(2),
        ].join(','),
      )
      .join('\n') +
    '\n'
  );
}
const pmReduced = matchMedia('(prefers-reduced-motion: reduce)');
const pmStorage = {
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
const pmEscape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );
const pmSavedRaw = pmStorage.read('serein-views-v1');
let pmSaved = Array.isArray(pmSavedRaw)
  ? pmSavedRaw
      .filter(
        (v) =>
          v &&
          typeof v.id === 'string' &&
          typeof v.name === 'string' &&
          v.name.length <= 80 &&
          typeof v.note === 'string' &&
          v.note.length <= 3000 &&
          pmValidView(v.config),
      )
      .slice(0, 12)
  : [];
function pmUpdateCount() {
  document
    .querySelectorAll('[data-saved-count]')
    .forEach((el) => (el.textContent = pmSaved.length));
}
pmUpdateCount();
const pmDefault = {
  days: 14,
  segment: 'All visitors',
  metric: 'visitors',
  chart: 'line',
};
const pmParams = new URLSearchParams(location.search);
const pmCandidate = {
  ...pmDefault,
  ...Object.fromEntries(
    [...pmParams].filter(([k]) => Object.hasOwn(pmDefault, k)),
  ),
};
let pmView = pmValidView(pmCandidate)
  ? { ...pmCandidate, days: Number(pmCandidate.days) }
  : pmDefault;
function pmFormat(value, metric) {
  return metric === 'activation'
    ? value.toFixed(1) + '%'
    : Math.round(value).toLocaleString('en-US');
}
function pmChartSvg(rows, config) {
  const values = rows.map((r) => pmPointValue(r, config.metric));
  const max =
    config.metric === 'activation'
      ? 100
      : Math.ceil((Math.max(...values) * 1.15) / 10) * 10;
  const px = (n) => 50 + n * (720 / Math.max(1, rows.length - 1));
  const py = (v) => 265 - (v / max) * 220;
  const points = values.map((v, n) => px(n) + ',' + py(v));
  const grids = [0, 0.25, 0.5, 0.75, 1]
    .map(
      (r) =>
        `<line x1="50" x2="770" y1="${py(max * r)}" y2="${py(max * r)}"/><text x="38" y="${py(max * r) + 4}" text-anchor="end">${Math.round(max * r)}</text>`,
    )
    .join('');
  let plot;
  if (config.chart === 'bar') {
    const width = (720 / rows.length) * 0.62;
    plot = values
      .map(
        (v, n) =>
          `<rect class="data-bar" x="${50 + (n * 720) / rows.length + 5}" y="${py(v)}" width="${width}" height="${265 - py(v)}"><title>${rows[n].date}: ${pmFormat(v, config.metric)}</title></rect>`,
      )
      .join('');
  } else {
    plot =
      `<path class="chart-area" d="M50,265 L${points.join(' L')} L770,265 Z"/><polyline class="chart-line" points="${points.join(' ')}"/>` +
      values
        .map(
          (v, n) =>
            `<circle cx="${px(n)}" cy="${py(v)}" r="3.5"><title>${rows[n].date}: ${pmFormat(v, config.metric)}</title></circle>`,
        )
        .join('');
  }
  return `<svg viewBox="0 0 820 320" role="img" aria-label="${pmEscape(pmMetrics[config.metric].label + ' for ' + config.segment + ' over ' + rows.length + ' sample days. Exact values are available in the data export.')}" class="dynamic-chart"><g class="chart-grid">${grids}</g>${plot}<text x="50" y="300">${rows[0].date.slice(5)}</text><text x="410" y="300" text-anchor="middle">${rows[Math.floor(rows.length / 2)].date.slice(5)}</text><text x="770" y="300" text-anchor="end">${rows.at(-1).date.slice(5)}</text></svg>`;
}
function pmDownload(text, filename, mime) {
  const url = URL.createObjectURL(new Blob([text], { type: mime }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function pmReadControls() {
  return {
    days: Number(document.getElementById('pm-days').value),
    segment: document.getElementById('pm-segment').value,
    metric: document.getElementById('pm-metric').value,
    chart: pmView.chart,
  };
}
function pmRenderExplorer() {
  const rows = pmSelectRows(pmView);
  const sums = pmSummarizeRows(rows);
  const previous = pmSummarizeRows(pmSelectRows(pmView, true));
  const delta =
    pmView.metric === 'activation'
      ? sums.activation - previous.activation
      : ((sums[pmView.metric] - previous[pmView.metric]) /
          previous[pmView.metric]) *
        100;
  document.getElementById('pm-metric-strip').innerHTML = Object.entries(
    pmMetrics,
  )
    .map(
      ([key, metric]) =>
        `<div class="${key === pmView.metric ? 'selected' : ''}"><span>${metric.summary}</span><strong>${pmFormat(sums[key], key)}</strong><small>${metric.unit}</small></div>`,
    )
    .join('');
  document.getElementById('pm-chart-label').textContent =
    pmMetrics[pmView.metric].label + ' / ' + pmView.segment;
  document.getElementById('pm-range-label').textContent =
    rows[0].date + ' — ' + rows.at(-1).date;
  document.getElementById('pm-comparison').textContent =
    (delta >= 0 ? '+' : '') +
    delta.toFixed(1) +
    (pmView.metric === 'activation' ? ' percentage points' : '%') +
    ' vs preceding ' +
    pmView.days +
    ' days';
  document.getElementById('pm-chart').innerHTML = pmChartSvg(rows, pmView);
  document.getElementById('pm-chart-caption').textContent =
    'Fixed synthetic period ending August 31, 2026. Hover chart points for values, or inspect the table below.';
  document.getElementById('pm-funnel').innerHTML =
    `<div><span>Started a project</span><b>${sums.starts.toLocaleString('en-US')}</b><i style="width:100%"></i></div><div><span>Completed first action</span><b>${sums.completed.toLocaleString('en-US')}</b><i style="width:${sums.activation}%"></i></div><p>${sums.activation.toFixed(1)}% of starts became completions.</p>`;
  document.getElementById('pm-table').innerHTML = rows
    .map(
      (r) =>
        `<tr><th scope="row">${r.date}</th><td>${r.visitors}</td><td>${r.starts}</td><td>${r.completed}</td><td>${r.events}</td><td>${((r.completed / r.starts) * 100).toFixed(1)}%</td></tr>`,
    )
    .join('');
  document.getElementById('pm-formula').textContent =
    'Average daily visitors = visitor-days ÷ days. Total events = sum of daily events. Activation = total completions ÷ total starts × 100.';
  document.getElementById('pm-table-caption').textContent =
    pmView.segment + ' · ' + pmView.days + ' daily sample records';
  if (!pmReduced.matches)
    document
      .getElementById('pm-chart')
      .animate([{ opacity: 0.35 }, { opacity: 1 }], { duration: 240 });
}
if (document.getElementById('pm-segment')) {
  for (const key of ['segment', 'days', 'metric']) {
    const input = document.getElementById('pm-' + key);
    input.value = pmView[key];
    input.addEventListener('change', () => {
      pmView = pmReadControls();
      pmRenderExplorer();
    });
  }
  document.querySelectorAll('[data-chart]').forEach((button) =>
    button.addEventListener('click', () => {
      pmView.chart = button.dataset.chart;
      document
        .querySelectorAll('[data-chart]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      pmRenderExplorer();
    }),
  );
  document
    .querySelectorAll('[data-chart]')
    .forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.chart === pmView.chart)),
    );
  pmRenderExplorer();
  document
    .getElementById('pm-save-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('pm-view-name');
      input.setCustomValidity(
        input.value.trim() ? '' : 'Give this view a name.',
      );
      if (!input.reportValidity()) return;
      const status = document.getElementById('pm-save-status');
      if (pmSaved.length >= 12) {
        status.textContent =
          'Your local notebook holds 12 views. Remove a saved view before adding another.';
        return;
      }
      const next = [
        ...pmSaved,
        {
          id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
          name: input.value.trim(),
          note: '',
          config: { ...pmView },
        },
      ];
      if (pmStorage.write('serein-views-v1', next)) {
        pmSaved = next;
        pmUpdateCount();
        status.innerHTML =
          'View saved. <a href="notebook.html">Open your notebook →</a>';
        input.value = '';
      } else
        status.textContent =
          'Storage unavailable. This view could not be saved; download its CSV to keep the data.';
    });
  document
    .getElementById('pm-view-name')
    .addEventListener('input', (event) => event.target.setCustomValidity(''));
  document.getElementById('pm-csv').addEventListener('click', () => {
    pmDownload(
      pmCsv(pmSelectRows(pmView)),
      'serein-sample-' + pmView.days + '-days.csv',
      'text/csv;charset=utf-8',
    );
    document.getElementById('pm-download-status').textContent =
      'CSV prepared for download.';
  });
}
let pmSelectedId = pmSaved[0]?.id;
function pmSelectedView() {
  return pmSaved.find((v) => v.id === pmSelectedId);
}
function pmRenderNotebook() {
  const empty = document.getElementById('pm-empty');
  if (!empty) return;
  empty.hidden = pmSaved.length > 0;
  document.getElementById('pm-notebook').hidden = pmSaved.length === 0;
  if (!pmSaved.length) return;
  if (!pmSelectedView()) pmSelectedId = pmSaved[0].id;
  const savedView = pmSelectedView();
  const rows = pmSelectRows(savedView.config);
  const sums = pmSummarizeRows(rows);
  document.getElementById('pm-saved-list').innerHTML = pmSaved
    .map(
      (v) =>
        `<button data-saved-id="${pmEscape(v.id)}" aria-pressed="${v.id === pmSelectedId}"><b>${pmEscape(v.name)}</b><span>${pmEscape(v.config.segment)} · ${v.config.days} days</span></button>`,
    )
    .join('');
  document.getElementById('pm-saved-title').textContent = savedView.name;
  document.getElementById('pm-saved-meta').textContent =
    savedView.config.segment + ' / ' + savedView.config.days + ' sample days';
  document.getElementById('pm-reopen').href =
    'explore.html?' + new URLSearchParams(savedView.config).toString();
  document.getElementById('pm-saved-chart').innerHTML = pmChartSvg(
    rows,
    savedView.config,
  );
  document.getElementById('pm-saved-stats').textContent =
    pmMetrics[savedView.config.metric].summary +
    ': ' +
    pmFormat(sums[savedView.config.metric], savedView.config.metric);
  document.getElementById('pm-note').value = savedView.note;
  document.getElementById('pm-note-status').textContent =
    'Notes stay in this browser.';
  document.getElementById('pm-report-status').textContent = '';
}
if (document.getElementById('pm-notebook')) {
  pmRenderNotebook();
  document
    .getElementById('pm-saved-list')
    .addEventListener('click', (event) => {
      const button = event.target.closest('[data-saved-id]');
      if (button) {
        pmSelectedId = button.dataset.savedId;
        pmRenderNotebook();
      }
    });
  document.getElementById('pm-note').addEventListener('input', (event) => {
    const view = pmSelectedView();
    if (!view) return;
    view.note = event.target.value;
    const saved = pmStorage.write('serein-views-v1', pmSaved);
    document.getElementById('pm-note-status').textContent = saved
      ? 'Note saved.'
      : 'Storage unavailable. Note changes are kept on this page only.';
  });
  document.getElementById('pm-report').addEventListener('click', () => {
    const v = pmSelectedView();
    if (!v) return;
    const rows = pmSelectRows(v.config);
    const sums = pmSummarizeRows(rows);
    const text =
      '# ' +
      v.name +
      '\n\nSynthetic Serein sample.\n\nSegment: ' +
      v.config.segment +
      '\nPeriod: ' +
      rows[0].date +
      ' to ' +
      rows.at(-1).date +
      '\nMetric: ' +
      pmMetrics[v.config.metric].summary +
      '\nValue: ' +
      pmFormat(sums[v.config.metric], v.config.metric) +
      '\n\n## Interpretation\n\n' +
      (v.note || 'No interpretation added.') +
      '\n\n## Daily data\n\n```csv\n' +
      pmCsv(rows) +
      '```\n\nDescriptive synthetic data. No causal or statistical significance claims.\n';
    pmDownload(text, 'serein-research-note.md', 'text/markdown;charset=utf-8');
    document.getElementById('pm-report-status').textContent =
      'Report prepared for download.';
  });
  const dialog = document.getElementById('pm-remove-dialog');
  document
    .getElementById('pm-remove')
    .addEventListener('click', () => dialog.showModal());
  document
    .getElementById('pm-keep')
    .addEventListener('click', () => dialog.close());
  document.getElementById('pm-confirm-remove').addEventListener('click', () => {
    const next = pmSaved.filter((v) => v.id !== pmSelectedId);
    if (pmStorage.write('serein-views-v1', next)) {
      pmSaved = next;
      pmUpdateCount();
      pmRenderNotebook();
      dialog.close();
    } else {
      dialog.close();
      document.getElementById('pm-report-status').textContent =
        'Storage unavailable. The saved view was not removed.';
    }
  });
}
document.querySelectorAll('[data-lens]').forEach((button) =>
  button.addEventListener('click', () => {
    document
      .querySelectorAll('[data-lens]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelectorAll('[data-lens-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.lensPanel !== button.dataset.lens;
      if (!panel.hidden && !pmReduced.matches)
        panel.animate(
          [
            { opacity: 0.3, transform: 'translateY(10px)' },
            { opacity: 1, transform: 'none' },
          ],
          { duration: 280, easing: 'ease-out' },
        );
    });
  }),
);
if ('IntersectionObserver' in window) {
  const pmObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          pmObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.25 },
  );
  document
    .querySelectorAll('.hero-chart,.question-links,.notebook-visual')
    .forEach((el) => pmObserver.observe(el));
}

```
