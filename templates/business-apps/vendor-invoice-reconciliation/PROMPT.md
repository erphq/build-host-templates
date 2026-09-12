PRODUCT: Vendor Invoice Reconciliation
WHO AND OUTCOME
A small-business owner needs to complete this job: Find the bills that do not match. Start with business name and the first real entry; no enterprise setup.

SCREENS AND FIELDS
Main workspace: Reconciliation, with search, relevant date/status filters, a primary New entry action, and a visible list of current work. Selecting an entry opens a detail panel containing editable fields, chronological activity, totals, attachments where specified and the next valid action. Fields: Purchase ledger and vendor statement file upload, column mapping, vendor ID, invoice number, dates, subtotal, sales tax, invoice total, payments and open balance. Use an explicit empty state and an optional Load sample business action; sample data never appears to be real.

STATE TRANSITIONS
Imported → Matched / Amount mismatch / Missing / Duplicate → Reviewed. Transitions must be recorded with timestamp. Explain missing requirements inline; do not enable a completion state before its requirements are met. Preserve important previous versions and corrective actions.

BUSINESS RULES
Exact unique vendor ID plus invoice number matching; preserve leading zeros; duplicates need manual review; tolerance is explicit, not silent. Use decimal monetary arithmetic and USD currency. Validate dates, positive quantities, required identities and duplicate references. Show derived amounts immediately and prevent double submission using server-side idempotency.

ACCEPTANCE EXAMPLE AND OUTPUT
Same vendor and invoice number with $180 versus $190 invoice totals flags a $10 difference. Export supplier-wise discrepancies with both source row numbers. This is accounts-payable matching, not tax filing.

IMPLEMENTATION
Use a small persistent database and private attachment storage where needed. One owner account is sufficient; only add restricted customer links or operator access when the workflow explicitly requires it. Enforce access server-side, never only through hidden UI. Data must survive refresh and reopen. Include backup/export and safe corrections; confirm destructive deletion. No ERP AI dependency, table designer, role matrix or generic enterprise dashboard. External messaging/payment/tax integrations must be real and explicitly configured; otherwise provide clearly labeled manual recording or message preparation. Never simulate successful payment, filing, OCR, message sending or delivery.

VERIFY
Test create-edit-reload, the example above, invalid input, duplicate submission, state changes and exported totals. Verify private links cannot access another customer's records where applicable.

APP-SPECIFIC VISUAL DESIGN
DESIGN IDENTITY: reconcile / bills — Mint reconciliation.
COLOR TOKENS: background #f4f7f3; primary text #193b30; primary accent #2b7254. Derive quiet borders and secondary surfaces from this palette. Use contrast-checked status colors and text labels. Do not apply the gallery's black shell to the app.
TYPOGRAPHY: Geist sans. Use self-hosted fonts when available, 16px body, 14px labels, tabular numerals for money. Display sizes below are desktop targets, not mobile minimums.
DESKTOP COMPOSITION: Lead with a 40px two-line title, then a 152px matching-completion ring next to invoice amount requiring review. Below, place purchase-register and VENDOR STATEMENT records side by side with aligned vendor ID, invoice number, invoice total and open balance fields. Connect the compared records with a status icon; show the exact dollar difference in an amber strip. Selecting a mismatch must open this comparison, not a generic table editor.
RESPONSIVE BEHAVIOR: Stack the two labeled source records on mobile and keep the difference visible between them.
DETAILS AND BEHAVIOR: The preview is a visual direction, not the complete field list. Implement every functional requirement in the app specification. Sample headings and fictional brand names are editable; show demo data only in an explicit example mode. Preserve this composition, typography and material treatment instead of falling back to a generic admin dashboard. Add meaningful empty, loading, validation, disabled and failure states. Interactive controls need visible focus and at least 44px touch targets. Actual application text must remain readable; do not copy the gallery thumbnail's scaled-down text sizes.

IMAGE COMPOSITION (REFINES THE BASE DESIGN ABOVE)
Place the accounting portrait in an asymmetric rounded frame at the upper right, about 35% of the canvas width. Keep the title left, matching ring beneath and source comparison fully readable.
Reference photo: https://images.unsplash.com/photo-1758876201985-66c20343e681?auto=format&fit=crop&w=1100&q=85
Source: https://unsplash.com/photos/a-woman-working-on-a-laptop-in-an-office-jRk1o9KbmV4
Use this supplied image URL or a suitable owner-provided image of the same subject. Reserve image dimensions, use deliberate object-fit cover crops, preserve the subject, lazy-load below-the-fold images, and keep controls and text on contrast-checked overlays or solid surfaces. Do not replace photography with emoji, icon placeholders or CSS illustrations. On narrow screens reduce image height only as needed while preserving the functional mobile layout. These are illustrative sample photos, not evidence about real customers or transactions.

US LOCALE
Use USD ($) with en-US grouping and cents, American English, US names and addresses, MM/DD/YYYY dates, 12-hour times, Fahrenheit, and US customary units. Sample amounts are fictional USD values, not converted exchange rates. Treat sample tax rates as illustrative only; require the business to configure applicable rates and taxability. Use US small-business imagery and preserve the supplied image provenance.

IMPLEMENTATION AND DESIGN CONTRACT
Build this working app, not a promotional page. Use the exact inputs, states, formulas and exports above. Use a responsive workspace with labeled controls, 16px body text, visible keyboard focus, sufficient contrast, and a clear primary action. Follow the app-specific palette and typography above. Use self-hosted fonts; body 16px/400 and labels 14px/500. Size headings and results according to the app-specific hierarchy above; ordinary section headings default to 28px/600. Use 44px minimum control heights. Follow the app-specific corner radii, panel treatment, spacing and desktop composition above; where unspecified, use 8px controls and 24px section gaps. Primary buttons use the primary token with a contrast-checked label. Use thin neutral borders, not a shadow on every element. Below 768px follow the app-specific mobile layout above and keep primary actions reachable. Keep sample data behind Load example and visibly label it; do not mix it with real user data.

No ERP AI dependency, enterprise table-configuration screen, or permission matrix. Use the smallest architecture that fulfills this specific workflow. Keep secrets server-side. Only add authentication where the brief requires protected shared data. Prefer local file processing and allow users to clear their data.

Verify each numeric example and primary workflow specified above, including empty, invalid and failed states. Confirm that downloaded files contain the displayed results. Report any unavailable integration plainly; do not ship a button that simulates success. Deliver the complete app and only the setup steps needed for real integrations.
