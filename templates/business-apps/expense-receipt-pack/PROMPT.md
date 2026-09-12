ONE-PAGE TOOL: Expense Receipt Pack
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Upload receipt images/PDFs, enter or confirm merchant, date, purpose, category, currency and amount, reorder and remove files. OCR is optional only with a real configured provider, confidence and manual review. Export expense PDF and ZIP of original receipts with CSV manifest.

ACCEPTANCE EXAMPLE
240 hotel + 68 lunch + 22 parking = $330. Flag duplicate file hashes, unsupported files, mixed currencies and missing amounts. Keep originals intact; failed OCR never produces invented values. Process locally where possible and provide Clear all.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: PAPERCLIP. Headline: Receipts in.
Report out.. Composition: upload. Palette: purple. Primary action: Export expense pack. Preview inputs: Hotel receipt: $240; Team lunch: $68; Parking: $22. Preview result: $330 — 3 RECEIPTS · USD.
