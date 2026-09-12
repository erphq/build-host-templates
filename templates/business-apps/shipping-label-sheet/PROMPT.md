ONE-PAGE TOOL: Shipping Label Sheet
Build one complete, working single-page utility for a US small business. No signup, dashboard, admin console, account setup or multi-page app. The page follows input → live preview/result → copy, print or download. Optional browser-only draft storage must be clearly labeled with Clear all.

INPUTS, CALCULATIONS AND OUTPUT
Paste CSV addresses, map recipient/company/street/unit/city/state/ZIP, choose label dimensions, sheet margins, row/column count and starting position. Preview US Letter sheet and export printable PDF at actual size. These are address labels, not purchased postage.

ACCEPTANCE EXAMPLE
Preserve ZIP 02108 and ZIP+4 as strings. With 6 labels per sheet, 7 recipients makes 2 pages. Long addresses wrap inside boundaries. Provide calibration guide, exact dimensions and a clear postage-not-included note.

US LOCALE
Use USD, en-US thousands separators, two-decimal currency outputs, American English and US names (Emily Carter, Jessica Miller, Maple Goods, Oak Supply Co.). Use US addresses, ZIP strings, US Letter printing, inches and pounds when relevant. Dates must be unambiguous; numeric dates use MM/DD/YYYY. All samples are fictional and available through Load example, never mixed into user data. Any tax rates are user-configured examples, not a national rate.

IMPLEMENTATION
Use decimal-safe money arithmetic and explicit rounding at the displayed/exported precision. Validate inputs inline, show useful empty/error states, and preserve edits during recalculation. Never fabricate OCR, payment, email, postage, cloud save or export success. Process files locally where possible. No network upload of user files without an explicit user action and destination. Actual downloads must open and contain the displayed totals. If PDF export is implemented through browser print, label it Print / Save as PDF. Do not add unnecessary backend dependencies.

DESIGN
Follow the supplied preview composition and palette; translate tiny gallery text to accessible 16px body and labeled controls. Responsive one-page layout, 44px touch targets, keyboard focus, readable contrast, no horizontal overflow. Keep input and output together on desktop; stack them in workflow order on mobile. Use actual product uploads when requested; no stock photos of unrelated people or regional factory imagery.

VERIFY
Test the numeric example above, zero/blank/negative inputs, reset, repeated export, keyboard operation and a 390px mobile viewport. Ensure printed pages have no navigation, clipped rows or missing totals. Deliver the working tool and explain only real required integrations.

VISUAL REFERENCE
Brand: ADDRESS / STUDIO. Headline: From your list
to their doorstep.. Composition: labels. Palette: pink. Primary action: Print address labels. Preview inputs: Olivia Bennett: 120 Oak St · Austin, TX 78701; Michael Davis: 48 Maple Ave · Denver, CO 80203; Sophia Wilson: 25 Cedar Ln · Raleigh, NC 27601. Preview result: 6 labels — US LETTER · 2 × 3.
