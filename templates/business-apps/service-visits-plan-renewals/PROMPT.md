PRODUCT: Service Visits & Plan Renewals
WHO AND OUTCOME
For a small AC, appliance or maintenance service business booking both paid one-off jobs and SERVICE PLAN visits. Keep one calendar and one job record regardless of how the visit is paid.

SCREENS AND FIELDS
Today's schedule shows time window, customer, address, equipment and One-off or Service plan covered badge. Job detail holds contact, complaint, checklist, before/after photos, parts, labor, quotation approval, completion note and payment receipt. Equipment detail holds model/serial and history. Optional contract: start/end dates, equipment, included services, visit allowance/frequency, exclusions, price and payments. Renewals view lists expiry, remaining visits, quoted renewal and next follow-up.

RULES AND STATES
Job: Scheduled → In progress → Awaiting approval when extras arise → Completed → Paid where money is due; allow cancellation with reason. Completing a covered visit consumes its allowance exactly once; cancellation consumes none. Record contract coverage as a snapshot for the service date. Show excluded work as an explicit extra quote before charging. Contract expiry never deletes history. Renewal creates a new dated term and does not rewrite the old one. Prevent conflicting appointment windows for the same operator. No route-distance or live ETA claims without an actual mapping integration.

ACCEPTANCE AND OUTPUT
A contract allows 4 visits and has 2 completed. Completing another leaves 1, even after a repeated submission. A cancelled booking still leaves 1. Covered labor is 0; an approved excluded part of 600 creates a 600 amount due. An expired contract requires a one-off quote or a new renewal term. Export service report with photos, receipt, upcoming visits and renewal list. Verify rescheduling, exclusions and date boundaries.

IMPLEMENTATION
Use a small persistent database and private attachment storage where needed. One owner account is sufficient; only add restricted customer links or operator access when the workflow explicitly requires it. Enforce access server-side, never only through hidden UI. Data must survive refresh and reopen. Include backup/export and safe corrections; confirm destructive deletion. No ERP AI dependency, table designer, role matrix or generic enterprise dashboard. External messaging/payment/tax integrations must be real and explicitly configured; otherwise provide clearly labeled manual recording or message preparation. Never simulate successful payment, filing, OCR, message sending or delivery.

APP-SPECIFIC VISUAL DESIGN
DESIGN IDENTITY: Fieldwork — Blue service route.
COLOR TOKENS: background #f6f8fb; primary text #20334e; primary accent #4383e5. Derive quiet borders and secondary surfaces from this palette. Use contrast-checked status colors and text labels. Do not apply the gallery's black shell to the app.
TYPOGRAPHY: Geist sans. Use self-hosted fonts when available, 16px body, 14px labels, tabular numerals for money. Display sizes below are desktop targets, not mobile minimums.
DESKTOP COMPOSITION: Use a compact rail and a route-first workspace. Left column is a chronological technician schedule with time, service, address and state. Right is a powder-blue next-stop panel with location icon, customer, distance when known, arrival time and Open job. Use a 42px title and 36px arrival time. Keep check-in, work checklist, materials and completion proof inside the visit detail.
RESPONSIVE BEHAVIOR: Show next stop first, followed by route sequence; technician actions stay reachable at the bottom.
DETAILS AND BEHAVIOR: The preview is a visual direction, not the complete field list. Implement every functional requirement in the app specification. Sample headings and fictional brand names are editable; show demo data only in an explicit example mode. Preserve this composition, typography and material treatment instead of falling back to a generic admin dashboard. Add meaningful empty, loading, validation, disabled and failure states. Interactive controls need visible focus and at least 44px touch targets. Actual application text must remain readable; do not copy the gallery thumbnail's scaled-down text sizes.

IMAGE COMPOSITION (REFINES THE BASE DESIGN ABOVE)
Use the technician photo in the next-stop card with visible upper-body/work context above. Fade the lower portion into blue for customer, arrival and Open job; keep the route list on the left.
Reference photo: https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85
Source: https://unsplash.com/s/photos/field-technician
Use this supplied image URL or a suitable owner-provided image of the same subject. Reserve image dimensions, use deliberate object-fit cover crops, preserve the subject, lazy-load below-the-fold images, and keep controls and text on contrast-checked overlays or solid surfaces. Do not replace photography with emoji, icon placeholders or CSS illustrations. On narrow screens reduce image height only as needed while preserving the functional mobile layout. These are illustrative sample photos, not evidence about real customers or transactions.

US LOCALE
Use USD ($) with en-US grouping and cents, American English, US names and addresses, MM/DD/YYYY dates, 12-hour times, Fahrenheit, and US customary units. Sample amounts are fictional USD values, not converted exchange rates. Treat sample tax rates as illustrative only; require the business to configure applicable rates and taxability. Use US small-business imagery and preserve the supplied image provenance.

IMPLEMENTATION AND DESIGN CONTRACT
Build this working app, not a promotional page. Use the exact inputs, states, formulas and exports above. Use a responsive workspace with labeled controls, 16px body text, visible keyboard focus, sufficient contrast, and a clear primary action. Follow the app-specific palette and typography above. Use self-hosted fonts; body 16px/400 and labels 14px/500. Size headings and results according to the app-specific hierarchy above; ordinary section headings default to 28px/600. Use 44px minimum control heights. Follow the app-specific corner radii, panel treatment, spacing and desktop composition above; where unspecified, use 8px controls and 24px section gaps. Primary buttons use the primary token with a contrast-checked label. Use thin neutral borders, not a shadow on every element. Below 768px follow the app-specific mobile layout above and keep primary actions reachable. Keep sample data behind Load example and visibly label it; do not mix it with real user data.

No ERP AI dependency, enterprise table-configuration screen, or permission matrix. Use the smallest architecture that fulfills this specific workflow. Keep secrets server-side. Only add authentication where the brief requires protected shared data. Prefer local file processing and allow users to clear their data.

Verify each numeric example and primary workflow specified above, including empty, invalid and failed states. Confirm that downloaded files contain the displayed results. Report any unavailable integration plainly; do not ship a button that simulates success. Deliver the complete app and only the setup steps needed for real integrations.
