ONE-PAGE TOOL: Break-Even Calculator
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Fixed costs, unit price, variable unit cost, expected units. Contribution per unit = price minus variable cost; break-even units = ceiling(fixed costs / contribution); profit = units times contribution minus fixed costs. Chart revenue and total cost against volume.

ACCEPTANCE EXAMPLE
6000 fixed, 50 price, 20 variable cost yields 200 units and $10000 revenue. At 250 units profit is $1500. If contribution is zero or negative, show no finite break-even; never divide by zero.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: THRESHOLD. Headline: Know your
break-even.. Composition: calc. Palette: blue. Primary action: Download analysis. Preview inputs: Monthly fixed costs: $6,000; Price per unit: $50; Variable cost per unit: $20. Preview result: 200 — UNITS TO BREAK EVEN.
