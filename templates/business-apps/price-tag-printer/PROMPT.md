ONE-PAGE TOOL: Price Tag Printer
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Paste product/SKU/price CSV, set copies per product, tag size, font and optional barcode only for supplied validated identifiers. Preview printable US Letter sheet with trim marks and export PDF. USD with two decimals; no automatic tax claims.

ACCEPTANCE EXAMPLE
Three products with 4 copies each produce 12 tags. Price 0 renders $0.00, missing or negative prices require review. Reject invalid barcode inputs; printing must honor chosen physical dimensions without browser scaling.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: TAG / PRESS. Headline: Ready for
the shelf.. Composition: labels. Palette: purple. Primary action: Print price tags. Preview inputs: CANVAS TOTE: $30.00; CERAMIC MUG: $20.00; LINEN APRON: $38.00. Preview result: 12 tags — US LETTER · PRINT AT 100%.
