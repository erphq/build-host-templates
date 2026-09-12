PRODUCT: Accountant Document & Bill Desk
WHO AND OUTCOME
For an accountant collecting monthly client records. One client/month workspace holds the missing-document checklist and the purchase bills being reviewed. Avoid a separate bill organizer with duplicate uploads.

SCREENS AND FIELDS
Client list shows period, received/requested count and overdue requests. Period detail contains checklist, uploaded files, purchase bill review and export. Each request has document type, due date, required/optional flag, status and comment. Each bill has original PDF/photo, supplier, vendor ID if supplied, invoice number/date, subtotal, sales tax, total, due date and review note. Keep extracted values alongside the source preview; OCR is optional and must use a real configured provider or explicit manual entry.

RULES AND STATES
Requested → Uploaded → Needs correction or Accepted. Uploading is not acceptance. A rejected file remains in history with its reason and replacement. Flag supplier + invoice number + calendar-year duplicates, and repeated file hashes, for review rather than silently discarding them. Validate total against entered subtotal plus taxes and adjustments; flag discrepancies without silently changing source values. A restricted expiring upload link exposes only the designated client's period; store files privately and enforce scope server-side. Owner can revoke links. Do not send requests automatically.

ACCEPTANCE AND OUTPUT
A month requires bank statement, sales register and purchase bills. Receiving the statement and a bill gives 2 of 3 categories received; a missing sales register prevents Complete. An uploaded bill with subtotal 1,000 and entered tax 180 but total 1,200 shows a 20 discrepancy. Replacement preserves the first file. Export reviewed bills CSV and a ZIP of original files with a manifest and missing-document list. Verify revoked and cross-client links fail.

IMPLEMENTATION
Use a small persistent database and private attachment storage where needed. One owner account is sufficient; only add restricted customer links or operator access when the workflow explicitly requires it. Enforce access server-side, never only through hidden UI. Data must survive refresh and reopen. Include backup/export and safe corrections; confirm destructive deletion. No ERP AI dependency, table designer, role matrix or generic enterprise dashboard. External messaging/payment/tax integrations must be real and explicitly configured; otherwise provide clearly labeled manual recording or message preparation. Never simulate successful payment, filing, OCR, message sending or delivery.

APP-SPECIFIC VISUAL DESIGN
DESIGN IDENTITY: folio — Lavender document room.
COLOR TOKENS: background #f3f1fa; primary text #332e52; primary accent #6954c6. Derive quiet borders and secondary surfaces from this palette. Use contrast-checked status colors and text labels. Do not apply the gallery's black shell to the app.
TYPOGRAPHY: Geist sans. Use self-hosted fonts when available, 16px body, 14px labels, tabular numerals for money. Display sizes below are desktop targets, not mobile minimums.
DESKTOP COMPOSITION: Build a client-month document room: left-aligned 44px title and oversized 80px received/required count. Four document-type tiles form a 2-by-2 matrix: bank statements, purchase invoices, sales register, expense receipts. Each contains file count, latest upload and review status; missing documents use dashed borders. A bottom bar shows client, due date and Request remaining. Tiles open file lists and upload/review controls.
RESPONSIVE BEHAVIOR: Retain two columns only when tiles are at least 160px; otherwise stack. Put upload and missing-file requests within the selected type.
DETAILS AND BEHAVIOR: The preview is a visual direction, not the complete field list. Implement every functional requirement in the app specification. Sample headings and fictional brand names are editable; show demo data only in an explicit example mode. Preserve this composition, typography and material treatment instead of falling back to a generic admin dashboard. Add meaningful empty, loading, validation, disabled and failure states. Interactive controls need visible focus and at least 44px touch targets. Actual application text must remain readable; do not copy the gallery thumbnail's scaled-down text sizes.

IMAGE COMPOSITION (REFINES THE BASE DESIGN ABOVE)
Use the document photograph across the upper-right 47% of the page, softly meeting the lavender canvas. Place the received-count badge over the image and readable document tiles below.
Reference photo: https://images.unsplash.com/photo-1582134534988-f8bcfc928273?auto=format&fit=crop&w=1100&q=85
Source: https://unsplash.com/s/photos/papers
Use this supplied image URL or a suitable owner-provided image of the same subject. Reserve image dimensions, use deliberate object-fit cover crops, preserve the subject, lazy-load below-the-fold images, and keep controls and text on contrast-checked overlays or solid surfaces. Do not replace photography with emoji, icon placeholders or CSS illustrations. On narrow screens reduce image height only as needed while preserving the functional mobile layout. These are illustrative sample photos, not evidence about real customers or transactions.

US LOCALE
Use USD ($) with en-US grouping and cents, American English, US names and addresses, MM/DD/YYYY dates, 12-hour times, Fahrenheit, and US customary units. Sample amounts are fictional USD values, not converted exchange rates. Treat sample tax rates as illustrative only; require the business to configure applicable rates and taxability. Use US small-business imagery and preserve the supplied image provenance.

IMPLEMENTATION AND DESIGN CONTRACT
Build this working app, not a promotional page. Use the exact inputs, states, formulas and exports above. Use a responsive workspace with labeled controls, 16px body text, visible keyboard focus, sufficient contrast, and a clear primary action. Follow the app-specific palette and typography above. Use self-hosted fonts; body 16px/400 and labels 14px/500. Size headings and results according to the app-specific hierarchy above; ordinary section headings default to 28px/600. Use 44px minimum control heights. Follow the app-specific corner radii, panel treatment, spacing and desktop composition above; where unspecified, use 8px controls and 24px section gaps. Primary buttons use the primary token with a contrast-checked label. Use thin neutral borders, not a shadow on every element. Below 768px follow the app-specific mobile layout above and keep primary actions reachable. Keep sample data behind Load example and visibly label it; do not mix it with real user data.

No ERP AI dependency, enterprise table-configuration screen, or permission matrix. Use the smallest architecture that fulfills this specific workflow. Keep secrets server-side. Only add authentication where the brief requires protected shared data. Prefer local file processing and allow users to clear their data.

Verify each numeric example and primary workflow specified above, including empty, invalid and failed states. Confirm that downloaded files contain the displayed results. Report any unavailable integration plainly; do not ship a button that simulates success. Deliver the complete app and only the setup steps needed for real integrations.
