ONE-PAGE TOOL: Inventory Count Sheet
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Paste SKU, item, unit and location; group by location, assign date/counter and generate blank count columns. Blind count hides expected stock by default; optional reconciliation compares entered counts to imported expected stock.

ACCEPTANCE EXAMPLE
Expected 40 and counted 37 gives variance -3 only in reconciliation mode. Printable blind count must contain no expected quantities. Preserve SKU leading zeros; duplicate SKU+location rows require review.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: COUNT / ROOM. Headline: Count once.
Count clearly.. Composition: packing. Palette: blue. Primary action: Print count sheet. Preview inputs: A-01 · CT-OLV: Canvas tote; A-02 · MG-IVY: Ceramic mug; B-01 · AP-LIN: Linen apron. Preview result: AISLE A–B — BLIND COUNT WORKSHEET.
