PRODUCT: Contractor Site Book & Billing
WHO AND OUTCOME
For a small civil or interior contractor documenting site progress and billing the client in stages. One project connects daily evidence to measured work and stage bills. This is not workforce payroll, purchasing or inventory management.

SCREENS AND FIELDS
Project workspace has Diary, Measurements, Bills and Collections. Set client/site, agreed work items, units, rates and contract value. Diary records date, work completed, headcount by trade, material receipt notes, expenses, issues and photos. Measurements record date, work item, location, completed quantity, approval note and linked diary evidence. Draft a bill by selecting approved unbilled quantities. Bill displays prior billed quantity, this quantity, rate, gross amount, retention, advance adjustment and currently collectible amount. Payments record date, amount, reference and bill allocation.

RULES AND STATES
Diary Draft → Submitted → Corrected revision. Measurement Draft → Approved → Billed; preserve correction history. Bill Draft → Issued → Part paid → Settled. Reserve quantities on issued bills so they cannot be billed twice. Headcount and material receipts never automatically become billable work. Snapshot rates on issue. Track retention receivable separately from currently due; advances have a remaining balance and cannot be applied twice. Payment is a recorded event, not the result of pressing Issue. Support explicit credit corrections rather than silently modifying issued bills.

ACCEPTANCE AND OUTPUT
Approved work is 100 units at 1,000, giving gross 100,000. With 5% retention and 20,000 advance applied, currently due is 75,000 and retention is 5,000. Receiving 30,000 leaves current due 45,000. A second bill cannot select those same 100 units. Export dated site report with photos, measurement sheet, stage bill and cumulative collection statement. Do not label unmeasured material receipts as consumption or project profit.

IMPLEMENTATION
Use a small persistent database and private attachment storage where needed. One owner account is sufficient; only add restricted customer links or operator access when the workflow explicitly requires it. Enforce access server-side, never only through hidden UI. Data must survive refresh and reopen. Include backup/export and safe corrections; confirm destructive deletion. No ERP AI dependency, table designer, role matrix or generic enterprise dashboard. External messaging/payment/tax integrations must be real and explicitly configured; otherwise provide clearly labeled manual recording or message preparation. Never simulate successful payment, filing, OCR, message sending or delivery.

APP-SPECIFIC VISUAL DESIGN
DESIGN IDENTITY: GROUNDWORK — Construction report sheet.
COLOR TOKENS: background #e7ebeb; primary text #283b40; primary accent #467582. Derive quiet borders and secondary surfaces from this palette. Use contrast-checked status colors and text labels. Do not apply the gallery's black shell to the app.
TYPOGRAPHY: Geist sans with Geist Mono dates and shift labels. Use self-hosted fonts when available, 16px body, 14px labels, tabular numerals for money. Display sizes below are desktop targets, not mobile minimums.
DESKTOP COMPOSITION: Use a structural report style: heavy top rule, large Site diary title and boxed date stamp. A weather/shift strip precedes three compact counters for workers, material quantity and labor hours. Work-completed notes use a left rule and engineer-review badge. Actual app includes separate material units, progress photos, delays, equipment and approval evidence; do not sum unlike materials.
RESPONSIVE BEHAVIOR: Date/site controls first; report sections stack and support draft autosave during interrupted site connectivity.
DETAILS AND BEHAVIOR: The preview is a visual direction, not the complete field list. Implement every functional requirement in the app specification. Sample headings and fictional brand names are editable; show demo data only in an explicit example mode. Preserve this composition, typography and material treatment instead of falling back to a generic admin dashboard. Add meaningful empty, loading, validation, disabled and failure states. Interactive controls need visible focus and at least 44px touch targets. Actual application text must remain readable; do not copy the gallery thumbnail's scaled-down text sizes.

IMAGE COMPOSITION (REFINES THE BASE DESIGN ABOVE)
Use the construction photograph as a wide crop at the right of the Site diary heading; overlay a compact date stamp only. Keep weather, labor/material figures and report notes on a solid report sheet.
Reference photo: https://business-templates.build.host/app-photos/us-construction.jpg
Source: AI-generated illustration created for this gallery
Use this supplied image URL or a suitable owner-provided image of the same subject. Reserve image dimensions, use deliberate object-fit cover crops, preserve the subject, lazy-load below-the-fold images, and keep controls and text on contrast-checked overlays or solid surfaces. Do not replace photography with emoji, icon placeholders or CSS illustrations. On narrow screens reduce image height only as needed while preserving the functional mobile layout. These are illustrative sample photos, not evidence about real customers or transactions.

US LOCALE
Use USD ($) with en-US grouping and cents, American English, US names and addresses, MM/DD/YYYY dates, 12-hour times, Fahrenheit, and US customary units. Sample amounts are fictional USD values, not converted exchange rates. Treat sample tax rates as illustrative only; require the business to configure applicable rates and taxability. Use US small-business imagery and preserve the supplied image provenance.

IMPLEMENTATION AND DESIGN CONTRACT
Build this working app, not a promotional page. Use the exact inputs, states, formulas and exports above. Use a responsive workspace with labeled controls, 16px body text, visible keyboard focus, sufficient contrast, and a clear primary action. Follow the app-specific palette and typography above. Use self-hosted fonts; body 16px/400 and labels 14px/500. Size headings and results according to the app-specific hierarchy above; ordinary section headings default to 28px/600. Use 44px minimum control heights. Follow the app-specific corner radii, panel treatment, spacing and desktop composition above; where unspecified, use 8px controls and 24px section gaps. Primary buttons use the primary token with a contrast-checked label. Use thin neutral borders, not a shadow on every element. Below 768px follow the app-specific mobile layout above and keep primary actions reachable. Keep sample data behind Load example and visibly label it; do not mix it with real user data.

No ERP AI dependency, enterprise table-configuration screen, or permission matrix. Use the smallest architecture that fulfills this specific workflow. Keep secrets server-side. Only add authentication where the brief requires protected shared data. Prefer local file processing and allow users to clear their data.

Verify each numeric example and primary workflow specified above, including empty, invalid and failed states. Confirm that downloaded files contain the displayed results. Report any unavailable integration plainly; do not ship a button that simulates success. Deliver the complete app and only the setup steps needed for real integrations.
