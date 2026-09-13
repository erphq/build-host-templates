# Sol Arden — small tools, carefully made

Build a complete original minimal portfolio for Sol Arden, a fictional independent developer. The site should feel quiet, direct and technically thoughtful. Its homepage contains a short introduction, one working project, one development note and a brief link to the practice. Do not add a dashboard aesthetic merely because the author is a developer. There should be no fake terminal, streaming logs, glowing grid, code rain, technology-logo wall or invented performance chart. The work is a small useful browser tool, and the portfolio should let that modest scope be a source of confidence.

## Reference interpretation

The directly inspected reference is https://benja.dev/, discovered through https://desengs.com/minimum/. Its observed homepage uses a dark background, compact white text, restrained navigation and a sparse project index. Content is arranged with generous open areas rather than repeated cards. Transfer the quiet dark surface and the willingness to describe a project in a sentence. Do not copy the person's name, projects, companies, biography or phrasing. Sol uses an original green-charcoal palette, a compact central content region and a complete local text utility called Linework. The reference is a guide to restraint, not a source of identity or application code.

The portfolio should differ from the other minimal studies in the library. It is not a left-rail visual archive, a serif essay collection or an art-director contact sheet. It is a dark index with small type hierarchy and useful direct links. Its principal heading is deliberately moderate, around twenty-eight to thirty-nine pixels. The composition should remain recognizable even without an oversized title. Most of the page's character comes from alignment, spacing, color and the clarity of its descriptions.

## Complete documents

Create four complete routes: index.html, linework.html, small-tools.html and about.html. The homepage introduces the practice and links to the tool and note. Linework is a complete local utility. Small tools is a full original development essay explaining its decisions. About describes the practice and the site's boundaries. All reading content must be static HTML. JavaScript is used only where the tool needs it. Do not create empty project routes or use a modal as a substitute for a complete page. Every document has one h1, a meaningful title, a meta description, a skip link and consistent navigation.

Use relative local links and assets. The standalone download should work without a routing service or a framework server. The header contains Sol Arden on the left and Linework, Notes and About on the right. At narrow widths, stack the identity and navigation rather than squeezing the links or hiding them behind a menu. The footer contains the identity, credits and a collection link. Avoid inventing an email address or social profile for the fictional author. The working tool and the development note are enough to establish the practice.

## Visual system

Use a near-black green-charcoal background around #181b1b, primary text around #e8ebe6 and secondary text around #b1b9b2. Supporting labels can use #a7b1aa, but they must remain readable. A restrained pale-green fill distinguishes the primary Process list button. Do not use neon highlights, gradients, glass effects or colored glows. The page should feel like a well-edited index, not a command center. Keep surfaces flat and let the textarea border explain its function.

Use locally hosted Geist with font-display swap and an Arial fallback. The overall body size is sixteen pixels with a comfortable line height. The homepage heading is compact and lightly weighted. Navigation and metadata use twelve-to-fourteen-pixel text, while long-form reading uses seventeen-to-eighteen pixels. Do not use monospace everywhere. This is a developer's portfolio, not a terminal emulator. A normal sans-serif keeps the writing approachable and makes the tool's text area easier to read.

The page container is approximately nine hundred and eighty pixels including forty-pixel desktop side padding. It is centered. The homepage introduction begins slightly inset from the main left edge, while the project index returns to the main alignment. A short closing paragraph sits toward the right. These small shifts create rhythm without building a complicated layout. At mobile widths, return all content to a single left alignment with twenty-three-pixel side gutters. Empty space should separate ideas, not force the visitor through several blank screens.

## Homepage details

The principal heading says Independent developer. Small tools, carefully made. Follow it with a short description of browser software for specific tasks, fewer moving parts and clearer behavior. The Current project section contains one row: Linework, a one-sentence explanation and an Open link. The From the notebook section links to On keeping a tool small with a month and year. The short final paragraph names ordinary edges such as empty input, clear errors and a useful export. A link leads to About.

Keep the homepage intentionally compact. Do not repeat the tool's complete explanation there. The visitor who wants to use it can open it directly. The visitor who wants to understand the implementation can read the note. Do not invent multiple projects merely to make the index look established. One finished object with a thoughtful account is more credible than six vague placeholders. The original fictional identity should be described honestly on the About page without a large disclaimer dominating the introduction.

## Linework purpose

Linework cleans short lists of text while preserving the original input. The tool has two labeled textareas: Input and Output. Input is editable; Output is read-only but selectable. On desktop they sit side by side. On a phone they stack in reading order. The input may contain one item per line. The tool does not parse spreadsheets, execute code, access files automatically or send text to a remote service. It works only on the text a person deliberately places in the input field.

The options are explicit and appear in the order they are applied. Trim surrounding spaces is initially checked. Remove blank lines is initially checked. Keep first occurrence is initially checked. Ignore case for duplicates is initially unchecked. Sort alphabetically is initially unchecked. Use native checkboxes inside a fieldset with a clear legend. Do not hide the transformation rules behind a generic Clean button or apply unselected transformations automatically. The visible order is part of the specification.

## Processing semantics

Normalize carriage-return and carriage-return-line-feed endings into a single newline before splitting. Treat an empty string as zero input lines. If trimming is enabled, trim each line. If blank-line removal is enabled, remove lines whose trimmed value is empty. If duplicate removal is enabled, keep the first occurrence of each comparison key. The comparison key is the line itself unless case-insensitive duplicate comparison is selected, in which case it is the lowercase line. Preserve the first original spelling in the output. Do not lowercase all output merely to compare duplicates.

Sorting is a separate final operation. It uses a case-insensitive alphabetical comparison, while duplicate comparison follows its own option. These are deliberately distinct behaviors. The user may want differently cased lines retained but sorted together. After processing, join the lines with newline characters and place the result in the output textarea. Report the original input-line count and final output-line count. The input remains untouched. Do not overwrite the source text or silently change the controls during processing.

A changed input or option does not automatically replace the existing output. Instead, display a short status explaining that Process list will update it. This makes the working state explicit and avoids surprising someone who is selecting an earlier output. The Process list button is the primary action. It should remain easy to find without becoming a large full-width marketing button on desktop. On a phone, the action group can wrap with comfortable gaps.

## Supporting actions

Load example fills the input with a deliberate test list containing leading spaces, a duplicate, an empty line and differently cased entries. It then processes that example through the current options. The example should demonstrate actual edge cases, not arbitrary lorem ipsum. Clear empties both input and output, announces the change and returns focus to the input. It does not need a confirmation because the text is local working material and the user explicitly requested the action. Do not clear automatically after copy or download.

Copy output uses the visible output value and the native clipboard API. If output is empty, explain that a non-empty list should be processed first. If the clipboard API succeeds, announce that the output was copied. If it fails, explain that the output can be selected and copied manually, focus it and select its text. Do not show a success message before awaiting the clipboard operation. A secure-context restriction or permission failure is a real possible state and should be handled without breaking the tool.

Save text uses the same visible output, adds a trailing newline and prepares a plain-text download named linework.txt. It must not run the transformation again during export. A separate processing path could produce a file that differs from what the visitor sees. Create a Blob, use a temporary object URL and revoke it after the action. If output is empty, show a useful message instead of downloading a meaningless empty file. Announce preparation rather than claiming the file has been saved to a particular location.

## Privacy and state

Do not persist the input or output. A short list may contain private material, and this tool has no reason to retain it. The page should explain near the controls that processing is local, text is not uploaded and working text is not saved between visits. This is the one place where the boundary matters. Do not repeat technical warnings in every navigation item or paragraph. There is no account, telemetry, query logging, backend, file synchronization or external API.

The tool state consists of the current DOM control values and the visible output. That is enough. Avoid adding a state-management library, worker pool, database or custom event system. Keep the transformation readable and in one coherent function. Its branching is limited to the five explicit options. Separate download and clipboard responsibilities into their own handlers. Preserve validation and error feedback while keeping the code small. Simplicity should mean fewer unnecessary parts, not missing behaviors.

## Development note

The page On keeping a tool small contains the complete original essay below. It explains why a small tool can make its purpose visible, how repeated list cleaning led to Linework, why transformations are explicit and why input remains separate from output. It also explains empty states, clipboard failure and the decision not to persist text. The essay has a real argument and a conclusion. Do not replace it with a bullet list of technologies or a claim that the tool revolutionizes productivity.

Use a reading column around six hundred and fifty pixels wide. The note begins with a back link, a date/discipline line, a moderate title and a short deck. Paragraphs are seventeen or eighteen pixels with a generous line height around 1.85. The pale text should be comfortable against the dark background. End with a link to the working utility. The note is part of the portfolio's substance, so it must be complete in the static HTML and available without JavaScript.

## About page

The About page begins with Useful is enough and introduces Sol as a fictional independent developer. Explain an interest in clear controls, understandable failures and outputs that can leave the application in a useful format. Describe the process of beginning with a narrow task and a concrete example, building a small version and refining confusing behavior. The text should sound like a person explaining a practice, not a generic agency manifesto.

Include a section explaining that the site has no account, analytics or text history. The tool runs locally, and the portfolio consists of ordinary documents with a local font. Link directly to the utility and note. Do not add unverified client names, employment history, awards or public contact addresses. The portfolio is an original demonstration. Its credibility comes from the working object and the specificity of the explanation, not from borrowed authority.

## Responsive and accessibility requirements

At six hundred and forty pixels and below, stack the header, remove the homepage introduction inset and use a single column throughout. The project row can place its description below the title and Open link. The note row should put its date below the title. Stack input and output with a clear gap. The options can become a vertical list, while action buttons wrap naturally. Ensure the labels and controls remain readable at three hundred and ninety pixels. No horizontal document overflow is acceptable.

Use native links, buttons, checkboxes and textareas. Keep the output selectable even though it is read-only. Provide a skip link, visible focus outlines and logical heading order. The status region should announce results without moving focus unnecessarily. Clear is the exception because returning focus to the input supports the requested next action. Do not make color the only indication of a state. The text of the status and the actual output should communicate what happened. No animation is needed beyond optional short button-color changes inside a reduced-motion condition.

## Assets and verification

Include the locally hosted Geist font and its license. The cover asset should be an original representation of the compact dark homepage, not a screenshot stolen from the reference. Keep source, prompt, research notes and public files inside this site's owned directories. Do not emit a favicon, source-map reference, provider branding or a path to the development machine. Preserve third-party license text. The reference URL belongs in the credits and research documentation, not as a prominent public claim of affiliation.

Test the utility with the provided example. Under defaults it should trim spaces, remove the empty line and retain the first exact duplicate while keeping differently cased entries separate. Enable ignore-case duplicate comparison and verify those entries merge while retaining the first spelling. Enable sorting and verify order changes. Disable trimming and verify surrounding spaces remain meaningful for duplicate comparison. Check empty input, copy without output, a successful process, clear and download preparation. Confirm the source textarea remains unchanged after processing.

Visit all four routes on desktop and mobile. Verify one h1 per page, valid local links and assets, no script errors and no overflow. Read the complete note and inspect the dark text contrast visually. Report exact observed browser behavior rather than treating a source scan as an interaction test. The acceptance condition is a finished minimal developer portfolio with one dependable small tool, a substantial original note and an honest practice introduction. Stop adding features when that experience is complete; the restraint is part of the design.


## Original development note

A small tool has an advantage that is easy to lose. It can make its whole purpose visible. A person arrives with a particular piece of work, changes one or two things and leaves with a result they understand. There is no need to learn a workspace, invite a team or choose a plan. The tool succeeds by making the task smaller than it was before.

I built Linework after repeatedly cleaning short lists by hand. The lists were not important enough to justify a large application, but they were long enough to make the repetition annoying. Some lines had extra spaces. Some appeared twice. Sometimes the order mattered and sometimes alphabetical order was more useful. The first prototype was a textarea and a button. That was enough to expose the actual decisions.

The central decision was to make every transformation explicit. Trimming whitespace is different from removing blank lines. Removing duplicates can be case-sensitive or case-insensitive. Sorting changes order and should not happen merely because it looks tidier. A tool that performs all of these actions automatically can destroy information while appearing helpful. I wanted the output to be predictable from the controls.

The implementation reads the input as lines and applies the selected operations in a fixed order. Trimming happens first, followed by blank-line removal, duplicate removal and optional sorting. That order is visible in the explanation. If duplicates are removed without trimming, two lines with different surrounding spaces remain different. If case is ignored for duplicate detection, the first original spelling is retained. Those details are small, but they are the behavior.

I deliberately kept the input and output separate. The source text remains available after processing, so a person can compare the result or change the options without reconstructing what they started with. Copying uses the visible output. Downloading uses the same output. There is no second transformation hidden inside the export path. The tool should not surprise someone at the moment they try to leave with their work.

Empty input is a valid state. It does not need an error banner or a red border. The tool can say that there are no lines to process and show an empty output. A clipboard failure is different: the person has requested an action that the browser did not permit. In that case, the interface explains the limitation and leaves the output selectable. The distinction keeps feedback proportional to what happened.

I also chose not to store the text automatically. A list can contain private material even when the tool itself seems harmless. The browser does all the processing locally, and the page does not send the input anywhere. Closing the page clears the working text. That behavior is explained beside the tool, where it matters. It is a deliberate limitation rather than an invitation to add an account system.

The result is not a revolutionary product. It is a useful object with a small surface area. I can explain its behavior in a few paragraphs, test its edge cases and maintain it without a large framework. That is the kind of development I want this portfolio to show: enough care to make the ordinary action dependable, and enough restraint to stop when the task is complete.

## Exact processing and interaction implementation

```javascript
(() => {
  const input = document.getElementById('input');
  if (!input) return;
  const output = document.getElementById('output'),
    status = document.getElementById('summary');
  function process() {
    let lines = input.value
      ? input.value.replace(/\r\n?/g, '\n').split('\n')
      : [];
    const original = lines.length;
    if (document.getElementById('trim').checked)
      lines = lines.map((x) => x.trim());
    if (document.getElementById('blank').checked)
      lines = lines.filter((x) => x.trim() !== '');
    if (document.getElementById('unique').checked) {
      const seen = new Set(),
        ignore = document.getElementById('ignore').checked;
      lines = lines.filter((line) => {
        const key = ignore ? line.toLowerCase() : line;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }
    if (document.getElementById('sort').checked)
      lines.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' }),
      );
    output.value = lines.join('\n');
    status.textContent =
      original +
      ' input lines → ' +
      lines.length +
      ' output lines. Original text preserved.';
  }
  document.getElementById('process').addEventListener('click', process);
  document.getElementById('example').addEventListener('click', () => {
    input.value = '  Willow\nBirch\nWillow\n\ncedar\nCedar';
    process();
  });
  document.getElementById('clear').addEventListener('click', () => {
    input.value = '';
    output.value = '';
    status.textContent = 'Input and output cleared.';
    input.focus();
  });
  document.getElementById('copy').addEventListener('click', async () => {
    if (!output.value) {
      status.textContent = 'Process a non-empty list before copying.';
      return;
    }
    try {
      await navigator.clipboard.writeText(output.value);
      status.textContent = 'Output copied to the clipboard.';
    } catch {
      status.textContent =
        'Clipboard unavailable. Select the output and copy it manually.';
      output.focus();
      output.select();
    }
  });
  document.getElementById('download').addEventListener('click', () => {
    if (!output.value) {
      status.textContent = 'Process a non-empty list before saving.';
      return;
    }
    const url = URL.createObjectURL(
      new Blob([output.value + '\n'], { type: 'text/plain;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'linework.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    status.textContent = 'Output text prepared for download.';
  });
  input.addEventListener(
    'input',
    () =>
      (status.textContent =
        'Input changed. Choose Process list to update the output.'),
  );
  document
    .querySelector('fieldset')
    .addEventListener(
      'change',
      () =>
        (status.textContent =
          'Options changed. Choose Process list to update the output.'),
    );
})();

```
