PRODUCT: Customer Credit & Collections
WHO AND OUTCOME
For a shop owner extending customer credit. One customer ledger connects every credit sale, repayment and follow-up; do not maintain a second collection balance.

SCREENS AND FIELDS
Open on Customers with total outstanding, overdue and promised today. Customer detail shows opening balance with as-of date, dated credit sales (reference, description, amount, due date), repayments (date, amount, cash/ACH/bank, reference and allocation), and chronological notes. A Follow-ups tab shows customer, outstanding, overdue amount, promised payment date, last contact, next follow-up and prepared reminder. New credit and Record repayment are the primary actions. Allow CSV import with column mapping, row validation and duplicate review.

RULES AND STATES
Outstanding = opening debit + credit sales - allocated repayments - explicit credit adjustments. Record a reason on corrections and preserve the original entry. Never let the same payment be allocated twice. Unallocated excess is a separate customer credit, not negative overdue. A debt becomes overdue only after its due date with a remaining balance. A promise or reminder never marks it paid. Follow-ups move Open → Promise recorded → Received or Rescheduled. Prepare a Text Message message using the customer's number and current amount; sending requires the owner's action unless a real messaging integration is configured.

ACCEPTANCE AND OUTPUT
Opening debt 1,000 plus sales of 2,000 and 500 minus repayment 1,200 gives outstanding 2,300. Allocate 1,000 to the opening debt and 200 to the first sale, leaving that sale 1,800 and the other 500. A repeat import or double click must not duplicate the payment. Export customer statement PDF and CSV, aging list and today's follow-ups. Reload must preserve balances and allocations.

IMPLEMENTATION
Use a small persistent database and private attachment storage where needed. One owner account is sufficient; only add restricted customer links or operator access when the workflow explicitly requires it. Enforce access server-side, never only through hidden UI. Data must survive refresh and reopen. Include backup/export and safe corrections; confirm destructive deletion. No ERP AI dependency, table designer, role matrix or generic enterprise dashboard. External messaging/payment/tax integrations must be real and explicitly configured; otherwise provide clearly labeled manual recording or message preparation. Never simulate successful payment, filing, OCR, message sending or delivery.

APP-SPECIFIC VISUAL DESIGN
DESIGN IDENTITY: LEDGER — Customer ledger.
COLOR TOKENS: background #efede5; primary text #35382a; primary accent #4a542e. Derive quiet borders and secondary surfaces from this palette. Use contrast-checked status colors and text labels. Do not apply the gallery's black shell to the app.
TYPOGRAPHY: Georgia headings with Geist body. Use self-hosted fonts when available, 16px body, 14px labels, tabular numerals for money. Display sizes below are desktop targets, not mobile minimums.
DESKTOP COMPOSITION: Split desktop 45/55: a dark olive bound-ledger style summary on the left, a clean customer index on the right. The ledger uses a subtle spine, fine rule, serif 48px title and 48px amount. Customer rows use initials, name, last activity and right-aligned balance; paid balances use text labels. Record payment opens the selected customer ledger with dated debit/credit entries and running balance.
RESPONSIVE BEHAVIOR: Collapse the decorative ledger summary into a small total above the customer list; preserve the account statement and payment action.
DETAILS AND BEHAVIOR: The preview is a visual direction, not the complete field list. Implement every functional requirement in the app specification. Sample headings and fictional brand names are editable; show demo data only in an explicit example mode. Preserve this composition, typography and material treatment instead of falling back to a generic admin dashboard. Add meaningful empty, loading, validation, disabled and failure states. Interactive controls need visible focus and at least 44px touch targets. Actual application text must remain readable; do not copy the gallery thumbnail's scaled-down text sizes.

IMAGE COMPOSITION (REFINES THE BASE DESIGN ABOVE)
Crop the shopkeeper photograph into the left ledger cover. Keep the customer index on the right clean. Place serif cover copy and collection amount over a dark olive lower gradient, with the portrait visible above.
Reference photo: https://business-templates.build.host/app-photos/us-shop.jpg
Source: AI-generated illustration created for this gallery
Use this supplied image URL or a suitable owner-provided image of the same subject. Reserve image dimensions, use deliberate object-fit cover crops, preserve the subject, lazy-load below-the-fold images, and keep controls and text on contrast-checked overlays or solid surfaces. Do not replace photography with emoji, icon placeholders or CSS illustrations. On narrow screens reduce image height only as needed while preserving the functional mobile layout. These are illustrative sample photos, not evidence about real customers or transactions.

US LOCALE
Use USD ($) with en-US grouping and cents, American English, US names and addresses, MM/DD/YYYY dates, 12-hour times, Fahrenheit, and US customary units. Sample amounts are fictional USD values, not converted exchange rates. Treat sample tax rates as illustrative only; require the business to configure applicable rates and taxability. Use US small-business imagery and preserve the supplied image provenance.

IMPLEMENTATION AND DESIGN CONTRACT
Build this working app, not a promotional page. Use the exact inputs, states, formulas and exports above. Use a responsive workspace with labeled controls, 16px body text, visible keyboard focus, sufficient contrast, and a clear primary action. Follow the app-specific palette and typography above. Use self-hosted fonts; body 16px/400 and labels 14px/500. Size headings and results according to the app-specific hierarchy above; ordinary section headings default to 28px/600. Use 44px minimum control heights. Follow the app-specific corner radii, panel treatment, spacing and desktop composition above; where unspecified, use 8px controls and 24px section gaps. Primary buttons use the primary token with a contrast-checked label. Use thin neutral borders, not a shadow on every element. Below 768px follow the app-specific mobile layout above and keep primary actions reachable. Keep sample data behind Load example and visibly label it; do not mix it with real user data.

No ERP AI dependency, enterprise table-configuration screen, or permission matrix. Use the smallest architecture that fulfills this specific workflow. Keep secrets server-side. Only add authentication where the brief requires protected shared data. Prefer local file processing and allow users to clear their data.

Verify each numeric example and primary workflow specified above, including empty, invalid and failed states. Confirm that downloaded files contain the displayed results. Report any unavailable integration plainly; do not ship a button that simulates success. Deliver the complete app and only the setup steps needed for real integrations.
