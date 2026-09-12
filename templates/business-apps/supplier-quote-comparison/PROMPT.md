ONE-PAGE TOOL: Supplier Quote Comparison
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Compare equivalent quantities, unit costs, shipping, discounts, explicitly entered taxes, lead time, payment terms and validity date. Keep currencies consistent and normalize per unit. Highlight cheapest without overriding delivery requirements.

ACCEPTANCE EXAMPLE
100 units at 10 plus 100 freight = 1100. Alternative 100 at 11 plus 80 freight = 1180. Difference $80. Reject mismatched units/currencies or show an explicit unresolved comparison; expired quotes must be labeled.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: SIDE BY SIDE. Headline: The right quote.
All costs included.. Composition: compare. Palette: green. Primary action: Export comparison. Preview inputs: Oak Supply · 5 days: $1,100 landed; Maple Wholesale · 8 days: $1,180 landed; Cedar Trading · 3 days: $1,250 landed. Preview result: OAK SUPPLY — LOWEST LANDED COST.
