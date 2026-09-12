ONE-PAGE TOOL: Wholesale Price Sheet
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Business identity, contact, product image, SKU, description, wholesale price, suggested retail price, minimum order quantity, pack size and lead time. Editable single-page price sheet with print layout. Use uploaded product images, not fictional stock availability.

ACCEPTANCE EXAMPLE
Tote wholesale 12 and suggested retail 24 yields retailer gross margin 50%. MOQ 24 totals $288 before shipping and configured tax. Preserve SKU leading zeros and flag MOQ not divisible by pack size.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: MAPLE GOODS. Headline: Your next
best seller.. Composition: sheet. Palette: cream. Primary action: Download price sheet. Preview inputs: Canvas tote · MOQ 24: $12 / unit; Ceramic mug · MOQ 36: $8 / unit; Linen apron · MOQ 12: $18 / unit. Preview result: SPRING / 2027 — WHOLESALE COLLECTION.
