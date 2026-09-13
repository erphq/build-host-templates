# Mika Rowan — an independent creative developer

Build a complete, original portfolio for Mika Rowan, a fictional creative developer. The site should feel like a small professional practice has taken care over every sentence and every interaction. It is a place to understand the work, read the decisions behind it and try one modest browser instrument. It is not a software marketing page. Keep the homepage to a short introduction, one selected project and a brief link onward. Resist the temptation to add testimonials, client logos, capability cards, conversion statistics, a newsletter, a pricing table or a wall of technologies. The confidence of this design comes from a deliberate selection and a readable account of how the work was made.

## Reference interpretation

The inspected reference is https://antoinefoucault.com/. It presents a compact, left-aligned professional biography in an otherwise open white field, followed by a small bracketed set of links near the bottom. Transfer the willingness to leave space empty, the directness of the prose and the modest scale of supporting navigation. Do not copy the person's name, biography, projects, credits, social accounts or wording. Mika has a different identity and a more developed project archive. The original interpretation uses a persistent left navigation rail and an offset reading column, with a restrained forest-green palette and a working drawing experiment. This is not a pixel replica, and the reference was not inspected for hidden animation timings or mobile behavior. Do not invent those measurements in the documentation.

## Purpose and audience

The primary visitor is a designer, producer or small organization considering a technical collaborator. They need to understand what Mika makes and how Mika thinks. The secondary visitor is another developer interested in the implementation. Support both without making the homepage read like a technical document. The work index should let someone scan two different projects immediately. Case pages should explain the initial question, the important decision, the implementation approach and the lesson from the iteration. The drawing lab should be usable without first reading a case study. The contact page should prepare a useful project note while remaining honest that this demonstration has no messaging backend.

## Information architecture

Create six complete HTML documents. The homepage is index.html. The selected work index is work.html. The interactive instrument is lab.html. The biographical and project-note page is about.html. The two complete case studies are tide.html and interval.html. These are real separate documents, not modal states or six anchors on one page. Every document should contain one visible h1, a useful document title, a meta description, semantic navigation, a skip link and a complete footer. Navigation should work from a file download as well as from the hosted demo. Use relative local links within the site. The collection link points two directory levels upward when the site is hosted in the library. Do not depend on a client router, a framework hydration pass or an external service to render the reading material.

## Layout system

On a wide desktop, reserve approximately twenty-six percent of the viewport for a fixed left rail. Give it forty-four pixels of top padding and thirty-six pixels of horizontal padding. The rail contains the name, a secondary role line, three navigation links, a small practice description near the bottom and the collection link. The main content begins after this rail and uses a modest additional gutter. It should have a maximum width rather than stretching the paragraphs across a cinema-sized display. The asymmetry must feel purposeful: the rail establishes a stable point, and the project material receives the flexible space.

At intermediate widths, reduce the rail to roughly twenty-four percent and reduce its padding. Reflow the drawing lab into one column before the controls become narrow. Reflow case-study labels above their paragraphs when the two-column arrangement compromises reading. At six hundred and forty pixels and below, the rail becomes an ordinary header in document flow. The name and role remain stacked, and navigation becomes a wrapping horizontal group. Hide the redundant practice note and collection link in that header, but keep the work and contact navigation. The main column has twenty-two-pixel side gutters. Do not preserve desktop geometry by shrinking all the text.

## Color and typography

Use a paper background close to #f6f6f2 and forest ink close to #26372f. Secondary text should remain readable, around #56665b. The palette is low contrast in mood but must not be low contrast in accessibility. Use an actual locally hosted Geist variable font with font-display swap and an Arial fallback. Include its license. Do not request a font from a third-party CDN at runtime. The main title uses a light-to-normal weight around 450, a tight line height close to 1.06 and restrained negative tracking. Desktop heading size scales from approximately forty-two to seventy-eight pixels. The homepage title is intentionally three short lines: I make things / for the browser. Preserve a natural break and avoid making one word an enormous logo.

Body text is sixteen pixels by default, with eighteen-to-twenty-pixel reading paragraphs for important content. Supporting navigation and metadata may be thirteen or fourteen pixels; nothing essential should become miniature. Case-study headings are small section labels rather than repeated oversized headlines. The typography should look like one person edited the page. Avoid a mix of decorative serif headings, monospace labels and unrelated sans-serif components. Links are ordinary text with an underline appearing on hover and a clearly visible focus outline for keyboard navigation. Buttons are simple outlined rectangles with comfortable padding. Do not use pills as the default shape.

## Homepage composition

Start with the small line Independent practice. Follow with the principal heading and a two-line description of thoughtful interfaces and small digital instruments. Leave enough vertical space for the introduction to breathe, but keep the selected work visible without requiring several empty screens of scrolling. The featured project is Tide atlas. Its image is an original abstract coastal diagram rendered from simple geometric land forms against a muted green field. This is meaningful project artwork, not a fake screenshot with microscopic interface text. The label on the artwork describes the atlas observation. Beneath it, place the project name on the left and a concise discipline/year note on the right. The entire project entry should link to the case study.

Below the selected project, use one short paragraph about turning clear ideas into working objects and a simple link to the selected work index. This is the end of the homepage narrative. Do not inflate it into a funnel. The footer is quiet and contains the identity and asset-credit link. Ensure the image artwork has a useful accessible label even though its implementation is CSS rather than a raster photograph. Decorative land forms themselves should not become separately announced controls.

## Selected work index

Use a short page heading, a sentence explaining that these are self-directed studies and a compact two-row project list. Each project row contains its index, title, discipline and year. Rows are links with a generous target area. On smaller screens, remove the redundant discipline column before the title becomes compressed. Preserve the title and year. Below the index, include a short explanation of the practice: interface design, semantic markup, browser graphics and attention to less visible states. A single plain sentence can identify the projects as fictional studies. Do not repeat a disclaimer in every heading or label.

## Case study requirements

Tide atlas is a study in making observations readable without overstating certainty. Its complete narrative should explain why the first map-led prototype was rejected, why the reading surface became primary, how missing locations and date ranges affected the data model and why an elaborate shoreline animation was removed. Interval instrument is a study in translating an analog interference pattern into a predictable digital drawing tool. Explain why its controls expose real quantities, why it begins still, how export is independent of the browser size and why automatic persistence was unnecessary. Use the exact original narratives included below as the base content. They are part of the deliverable, not placeholders to be replaced with generic claims.

Give each case a clear introductory sentence and an original large visual. The Tide visual shares the coastal geometry from the homepage. The Interval visual shows two intersecting line fields. Follow with four sections in a label-and-paragraph arrangement. The final link must move to another useful document: Tide proceeds to Interval, while Interval opens the working lab. There should be no dead Read more links. Do not invent real clients, awards, revenue changes, user counts or deployment claims for these fictional projects.

## Drawing instrument

The lab is a complete small tool. It draws two sets of equally spaced parallel lines on a square canvas. The first is vertical. The second rotates around the same center. A line-count range input changes the density from eight through sixty. A rotation range input changes the angle from zero through ninety degrees. A styled select chooses forest, cobalt or clay ink. Display the current numeric values next to their labels. Updating a control must immediately redraw the output. Do not perform continuous animation when no input has changed.

Use one drawing function for both preview and export. The preview backing store should account for device pixel ratio, capped reasonably to avoid unnecessary memory use. Observe the canvas dimensions through ResizeObserver so changing the viewport produces a sharp correctly proportioned drawing. Clip the pattern to an inset square to keep a consistent paper margin. Fill the paper background explicitly before drawing. The export uses a separate sixteen-hundred-pixel square canvas and the current validated control values, then prepares a PNG download. It must not include the surrounding controls or any hidden platform branding.

Reset restores twenty-six lines, twenty-eight degrees and forest ink. It redraws the preview and announces the reset in a status region. Export announces that an image has been prepared, not that it has definitely been saved to the user's disk. If blob creation fails, present a useful retry message. Revoke the temporary object URL after it has been used. Do not add a paid service, upload endpoint, authentication requirement, analytics call or artificial loading animation. This instrument is deliberately browser-local and deterministic.

## About and project note

The about page opens with a short statement that care is a technical skill. Its body describes the practice in concrete terms: small prototypes, structural clarity, maintainable implementation and documentation that helps the next person continue the work. The project-note form has a name field, an idea textarea and an optional timeframe. Use native labels, autocomplete for the name and appropriate maximum lengths. Require at least twenty meaningful characters in the idea after trimming whitespace. Browser validation alone is insufficient because a string of spaces can satisfy an HTML length constraint.

Submitting the form prepares a plain-text file containing the entered information and a final statement that the note has not been sent. It does not submit to a network address, open an email client or pretend to book a call. Put that boundary immediately above the form where it helps someone decide whether to use it. Announce the result through a status region. Render entered text only into a text Blob, never through innerHTML. Preserve the form values after export so someone can revise the note. A download is a user action, not an automatic side effect of typing.

## Accessibility and motion

Every page needs a skip link visible on focus. Native links, buttons, selects, range inputs and text fields should remain keyboard accessible. Focus indicators must contrast with the background and should not be clipped by a decorative container. There is no need for a custom cursor, scroll hijacking, magnetic button effect or animated page transition. The only optional hover motion is a slight rotation of the decorative coastal form, and it must be inside a prefers-reduced-motion condition. The title and paragraphs must remain visible with animation disabled. Use semantic headings in a logical order. Keep body text readable at browser zoom and prevent horizontal document overflow at mobile widths.

## Implementation and verification

Use the existing standalone builder architecture. Keep source CSS, browser JavaScript and builder markup in the site's own directory. The builder writes the six public pages and the assembled prompt. Keep asset references local. Include font and asset credits in a readable text document. No favicon should be emitted. No source string, document title, download or public metadata should identify the authoring provider. Do not remove third-party font license notices while removing platform branding.

Verify the six routes at desktop and mobile widths. Check one h1 per route, no missing local links, no script syntax errors and no image or font failures. In the lab, change line count, change angle, change ink, reset and prepare an image. Confirm the numeric outputs agree with the controls. In the form, verify a short idea is rejected and a meaningful note produces a text download without a network submission. Check reduced-motion behavior, keyboard focus and the skip link. Read the case narratives for coherence. A passing build alone is not proof that the controls work. Report exactly which browser interactions were exercised and distinguish a prepared download from a completed file save.

## Asset and content handoff

The downloadable site must remain intelligible without the library around it. Store the two licensed font files and original visual assets inside the demo's assets directory, and include a credits document that explains their provenance. Do not point the standalone pages at a development port or at an absolute path on the author's computer. Relative navigation should continue to work when the folder is moved. The only collection link is contextual to the library and should not be mistaken for an essential dependency of the drawing instrument.

Document the exact starting values for the instrument so a future implementation can reproduce the opening composition. Keep the line count, angle, paper color and ink values together in the interaction specification. If a maintainer changes the defaults, update the reset behavior and the displayed outputs in the same change. Avoid a separate hard-coded export drawing that can drift from the preview. The central engineering principle is that a visitor should receive the same visual relationship they just configured, at a predictable export resolution, without losing the ordinary accessibility of the surrounding page.


## Exact project narratives

### Tide atlas

The project began with a notebook, not a map. A fictional coastal field station had observations from volunteers, each recorded with a place, a date and a short description. The original question was how to make those notes readable without giving every sentence the visual authority of a scientific measurement. I built a prototype that places the observation before the coordinates. A reader can move through a quiet chronological list and open the associated place only when that extra context matters.

The first version filled the screen with a map. It looked like a finished product and made the text feel incidental. In the second version I inverted the hierarchy: a simple reading surface occupies the main column, while the map is a supporting view. This changed the development work as well. Keyboard movement, stable headings and links that survive refresh became more important than smooth camera transitions. The design records uncertainty in ordinary language beside the note, rather than hiding it inside a tooltip.

Each observation has a permanent identifier and a plain-text summary. Filtering uses the same collection as the visible results; the number shown is a count, not a decorative metric. A location can be absent. A date can describe a range. These decisions were modeled before the interface because they affect almost every rendering state. The browser prototype uses native URL parameters for shareable views and maintains the original document order for screen readers.

I discarded an animated shoreline reveal. It was attractive in a recording but delayed the exact thing a returning reader wanted to see. The final interaction is smaller: a selected observation gains a clear focus outline, its associated place is brought into view, and the browser back button returns to the same list. This case is a fictional self-directed study, not a deployed monitoring service. The useful result is a more careful account of what the interface knows and what it does not.

### Interval instrument

Interval is a browser drawing study about the space between repeated lines. The starting point was a printed sheet of parallel marks. Rotating another sheet above it produced an interference pattern that was more interesting than either sheet alone. I wanted to reproduce the relationship without turning the page into a decorative animation that nobody could control. The result is a small instrument with named inputs and an exportable output.

The controls describe quantities that actually change the drawing: line count, rotation and ink. There is no fictitious playback timeline and no randomness disguised as precision. A person can return to a configuration and receive the same geometry. The lab page includes a live version of the instrument. It is deliberately still until someone changes a control, which makes its behavior easier to inspect and removes unnecessary movement for readers who are sensitive to animation.

The preview is drawn on a native canvas with a square logical coordinate system. Its CSS size adapts to the available width, while the backing store follows the display pixel ratio. Export uses a separate fixed-size surface, so the saved image does not depend on the width of the browser window. The same rendering function draws both surfaces. Input values are validated and constrained before they reach the drawing loop.

The most useful refinement was separating the instrument from its surrounding portfolio. A visitor can understand the project without interacting, and someone who does interact gets a complete small tool. The export contains only the drawing, with no interface labels or hidden branding. I chose not to persist the settings automatically: the reset control is predictable and the page begins with a considered composition every time. This study demonstrates an implementation approach rather than claiming a production client outcome.

## Working interaction specification

```javascript
(() => {
  const canvas = document.getElementById('drawing');
  function download(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }
  if (canvas) {
    const lines = document.getElementById('lines'),
      angle = document.getElementById('angle'),
      ink = document.getElementById('ink');
    function draw(target, size) {
      target.width = size;
      target.height = size;
      const ctx = target.getContext('2d');
      ctx.fillStyle = '#e9eae2';
      ctx.fillRect(0, 0, size, size);
      const count = Math.max(8, Math.min(60, Number(lines.value) || 26)),
        rotation = Math.max(0, Math.min(90, Number(angle.value) || 0));
      ctx.save();
      ctx.beginPath();
      ctx.rect(size * 0.09, size * 0.09, size * 0.82, size * 0.82);
      ctx.clip();
      ctx.translate(size / 2, size / 2);
      ctx.strokeStyle = ink.value;
      ctx.lineWidth = size / 700;
      for (let field = 0; field < 2; field++) {
        ctx.save();
        ctx.rotate((field * rotation * Math.PI) / 180);
        for (let i = -count; i <= count; i++) {
          const x = (i * size) / count;
          ctx.beginPath();
          ctx.moveTo(x, -size);
          ctx.lineTo(x, size);
          ctx.stroke();
        }
        ctx.restore();
      }
      ctx.restore();
    }
    function render() {
      document.getElementById('lines-value').value = lines.value;
      document.getElementById('angle-value').value = angle.value + '°';
      draw(
        canvas,
        Math.round(canvas.clientWidth * Math.min(devicePixelRatio || 1, 2)),
      );
    }
    document.getElementById('controls').addEventListener('input', render);
    new ResizeObserver(render).observe(canvas);
    document.getElementById('reset').addEventListener('click', () => {
      lines.value = '26';
      angle.value = '28';
      ink.value = '#274d42';
      render();
      document.getElementById('status').textContent =
        'Default drawing restored.';
    });
    document.getElementById('export').addEventListener('click', () => {
      const output = document.createElement('canvas');
      draw(output, 1600);
      output.toBlob((blob) => {
        if (blob) {
          download(blob, 'mika-interval.png');
          document.getElementById('status').textContent =
            'Your 1600-pixel drawing is prepared for download.';
        } else
          document.getElementById('status').textContent =
            'The image could not be prepared. Try again.';
      }, 'image/png');
    });
    render();
  }
  const brief = document.getElementById('brief');
  if (brief)
    brief.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!brief.reportValidity()) return;
      const data = new FormData(brief);
      const text =
        'Project note for Mika Rowan\n\nName: ' +
        data.get('name').trim() +
        '\nTimeframe: ' +
        data.get('time').trim() +
        '\n\n' +
        data.get('idea').trim() +
        '\n\nPrepared locally. This note has not been sent.\n';
      if (data.get('idea').trim().length < 20) {
        document.getElementById('brief-status').textContent =
          'Please describe the idea in at least 20 non-space characters.';
        return;
      }
      download(
        new Blob([text], { type: 'text/plain;charset=utf-8' }),
        'mika-project-note.txt',
      );
      document.getElementById('brief-status').textContent =
        'Project note prepared for download. Nothing was sent.';
    });
})();

```
