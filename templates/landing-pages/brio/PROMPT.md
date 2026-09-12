# Brio — a bright, complete local form studio

Create Brio, an original forms and workflow product concept with six substantial pages and a genuinely connected build–preview–review journey. The product should feel bright, expressive and useful. It must not reuse a cream-and-green SaaS shell or present another generic project dashboard. Its central interaction is the act of making a form: adding a question, choosing the right type, writing a clear label, arranging the order, trying the result and understanding the answers.

The website is explicitly a local demonstration. It does not create a hosted form, public URL, email submission, account, payment, integration or external automation. Configuration, undo history and responses live in the current browser when storage is available. The first two responses are fictional sample records. Visitors can create additional local responses using sample information, inspect them, change their review state and download copies. Do not imply that a real respondent, organisation or service has received anything.

## Live research and original interpretation

The primary reference is Fillout at https://www.fillout.com/. The live homepage was directly inspected in the browser. Its current opening uses a bright illustrated blue environment, a prominent form proposition, a large prompt-style creation area and buttons offering example form categories. The page includes product tabs, builder-related feature sections, branding examples, response analysis and practical routes into templates and product capabilities. These observations support the idea that a form product can be expressive while still keeping its actual form-making task central.

The reference also visibly explains question creation, themes, routing and reviewing results. Treat those public product relationships as research, not as permission to invent a backend. The authenticated builder was not entered, and no account, hosted form, integration or response submission was created. Exact drag-and-drop mechanics, conditional logic, storage architecture, collaboration features, permission model and delivery workflows were not verified. Brio's local controls and state model are original implementation choices.

Do not copy Fillout's name, logo, hero illustration, screenshots, customer logos, review counts, testimonials, integration marks or website code. Do not reproduce the reference's AI-agent language when no such agent exists in this implementation. Brio's brighter art direction uses original ultramarine, apricot, coral and pale-blue compositions, with a real HTML question playground and an original SVG compatibility illustration. Its workflow is complete within the browser, and the writing should describe that scope accurately.

## Identity and visual system

The wordmark is brio in a bold lowercase sans-serif, paired with a compact expressive asterisk-like mark. Use the locally hosted Geist variable font throughout. The identity should feel direct and energetic, not corporate-neutral or luxury-editorial. Avoid serif display headlines, muted green cards, nature imagery, copied product screenshots or fake human portraits. The subject is the question and the answer, so the original visual language can be built from sheets, fields, labels, choices and useful marks.

Use ultramarine #2846e8 for primary actions, the application header and selected editor states. Use deep ink #17234d for text, #414c66 for supporting text, white or very pale blue for working surfaces, and warm apricot #ffbd96 for the marketing opening. Pale blue #c7d4ff and lemon #e8ec97 provide contrasting form themes and feature surfaces. Colours should define meaningful areas rather than appear as decorative gradients. Ensure white-on-blue controls and dark-on-pastel text meet contrast requirements.

Actual content and control text must be at least fourteen pixels, including mobile. Form labels are sixteen to eighteen pixels. Input text is sixteen or seventeen pixels. Supporting prose is sixteen to nineteen pixels, and the guide body is eighteen. Never scale a desktop builder screenshot down until the questions become unreadable. The mobile builder reflows into a field library, form canvas and property panel, each at a useful width. Decorative artwork may contain typographic marks, but the working interface must remain real readable HTML.

Use generous but controlled radii, around five to twelve pixels depending on the surface. The marketing form sheet can have a bold offset ultramarine shadow that feels graphic rather than photorealistic. Application surfaces use fine blue-grey borders and little or no shadow. The visual rhythm should alternate a bright question playground, large feature panels, a dark workflow section, template sheets and a strong closing invitation. Do not rely on a row of three identical cards as the whole page.

## Complete routes and navigation

Generate index.html, builder.html, preview.html, responses.html, templates.html and guide.html. Every route has a meaningful title, one actual main h1, a skip link and a coherent heading hierarchy. The marketing header contains Why Brio, Templates, The field guide and Make a form. The working header has Build, Preview, Responses and Templates, with a live local-response count. Do not use a nonfunctional login or publish button.

The product pages use a distinct ultramarine application header, not the marketing page shell. On phones, navigation opens behind a real Menu button with aria-expanded. All product destinations remain reachable. Use explicit index.html for home links and relative paths throughout so the site works beneath a nested demo folder. The footer has neutral Template library navigation and credits. Do not add favicons, provider badges, deployment-service branding or public model-provider promotion.

The app's three main destinations form a real loop. Build changes the configuration. Preview renders that configuration as a usable form. Responses shows saved answers together with the questions that produced them. Templates provide reviewed starting points, and the guide explains the practical model and limitations. Every prominent action should lead to one of those working destinations rather than a placeholder anchor.

## Marketing homepage composition

Begin on a warm apricot surface with a large centered proposition: Ask better. Start something. Use ultramarine for the first statement and deep ink for the second. A short explanation introduces the local build, try and review journey. The primary action opens the builder, while the secondary leads to templates. Do not add fabricated adoption metrics, star ratings, customer logos or claims about response conversion.

Beneath the headline, build an original question playground from HTML. It contains a white form sheet with a small ribbon label, a large question, a brief instruction and a working sample control. Three buttons switch between Short answer, Dropdown and Checkbox. The sample control actually changes type, but it does not save a response or transmit data. A clear Make it your own action opens the real builder. The playground demonstrates the product's basic idea without pretending to be a full editor.

Use an angled editorial note beside the form sheet and a small confirmation-style graphic on wide screens. These are original visual elements, not real notifications. Remove them on mobile rather than reducing them to tiny text. The form sheet remains the focus, with its controls at readable size. The entrance animation is a short vertical settle; avoid artificial typing or a loading delay.

Follow with a strong ultramarine subject strip and a two-by-two feature composition. The first panel shows the five question types as substantial tiles. The second uses three coloured form sheets to explain themes and voice. The third demonstrates an invalid email state with clear, readable guidance. The fourth shows a fictional response excerpt and local review state. Each panel links to a real working route.

Continue with a dark workflow section describing Make it, Try it and Learn from it. The copy connects questions, validation and response review. Then show three original template previews with their own colours and purposes. Finish with practical questions about local operation, response storage, question changes and undo, followed by a large apricot invitation to open Brio. The result should feel like a complete product story rather than a static application screenshot surrounded by slogans.

## Starter configuration and templates

The starter form is an imagined workshop signup titled A little room to make. It contains five fields: a required short answer for a sample badge name, a required email question, a required session dropdown, an optional long answer about what would make the workshop useful, and a required checkbox acknowledging the local demonstration. Its three session choices are Design lab, Writing studio and Field notes. The email help explicitly suggests a sample address and says nothing is sent.

Provide two additional templates. Project request asks for a project name, project kind, goal and optional timing. Quick feedback asks for an experience choice, what worked, what could change and an optional willingness-to-try-again checkbox. These are original starting points, not real event registrations, agency intake endpoints or survey campaigns. Their exact configurations are included below.

The template page gives each option a complete visual example, a readable field list, its purpose and a Use this starting point action. Selecting it opens a native dialog that names the template and explains that the current form configuration will be replaced. Existing responses remain readable because they store their own question snapshots. Applying the template saves it and opens the builder. The replacement is part of the same bounded undo history as other configuration changes.

Do not create a hidden publishing step or imply that a template application creates a public form. The user is selecting a local configuration. A storage failure should prevent a misleading redirect that cannot restore the chosen configuration on the next page. Explain the local limitation plainly.

## Form builder layout and behavior

On a wide screen, use three functional areas: a field library at left, a central form canvas and a property panel at right. The page heading and actions sit above them. The field library offers Short answer, Long answer, Email, Dropdown and Checkbox. Each button has a clear name, a simple type mark and useful help where room allows. The demo supports at most twelve questions, and the interface explains that limit without presenting it as a paid-plan restriction.

The canvas displays the current form title and description on the selected theme colour. Its top line shows question count and configuration revision. Each field card shows its order, type, label, required marker, help text and a non-submitting representation of the answer control. A separate field-selection button chooses the question for editing. Up, down and remove controls are distinct buttons with accessible names that include the question label. Moving a field at the top or bottom disables the unavailable direction.

Adding a field creates a safe unique identifier and a sensible default label. A new dropdown begins with two different sample choices. The new field becomes selected. The property panel opens its editable details, and on mobile it can scroll into view after an explicit selection or addition. This is a user-initiated movement, not scroll hijacking. Respect reduced-motion preferences for that movement.

Field properties include label, helpful context, type, required state and dropdown choices when relevant. Use a multiline textarea with one choice per line for dropdown options. Trim options, remove duplicates, discard blank lines and cap the list at twelve choices. A label must contain non-whitespace text. A dropdown must have at least two different nonempty options. Invalid edits display a clear local error and do not change the saved configuration.

Save question applies the edit. Typing in the property panel should indicate that changes are not yet saved. Do not claim every keystroke is persisted if the product requires an explicit save action. Successful changes update the canvas, increment the revision and save the configuration locally. Form settings use the same pattern for title, introduction and one of three themes: Apricot, Blue sky and Lemon. Titles are required and bounded; descriptions have a sensible maximum length.

Removing a field changes the current configuration and leaves undo available. Reordering must be immutable with respect to the prior history snapshot. Undo restores the previous configuration while advancing the current revision so a newly submitted response can still identify the configuration event. Keep at most ten historical configurations. The export action downloads the current form configuration as JSON. It does not create a hosted endpoint or a shareable public URL.

## Mobile builder and accessibility

At phone widths, the field library becomes a compact expandable section rather than an always-open sidebar. The form canvas occupies the full content width. The property panel follows it and remains readable. Do not squeeze three columns into the phone viewport, scale the canvas or hide editing controls behind hover. All type buttons, order controls, labels and save actions retain at least fourteen-pixel text and comfortable targets.

Keep selected state visible through both borders and aria-pressed. A required marker must be explained in the preview and reflected in native required properties. Form fields have visible labels and associated help. Errors are associated through aria-describedby and aria-invalid. Native buttons and controls provide keyboard access. The selected field's properties should never be available only through a pointer drag operation; up and down buttons are the deliberate accessible reordering mechanism.

A zero-field configuration is allowed in the builder so the user can start cleanly. The canvas shows an empty state and an Add action. The preview must explain that a question is needed and provide a builder link instead of rendering an empty form with a submit button. Do not silently reinsert starter fields when an intentionally empty saved configuration is restored.

## Real local preview and validation

The preview renders the exact current configuration. Use a coloured form heading, actual title and introduction, real inputs, help text, required indicators and a clearly labelled Save local response action. The page explicitly asks for sample details and states that no registration, email or external submission occurs. Do not label the action Send, Publish, Book or Register.

Use a custom validation pass with native form controls. Required text answers must contain more than whitespace. Required checkboxes must be true. Email answers must match a reasonable basic address shape when supplied. Dropdown answers must be among the configured options. Optional empty answers are allowed. Show an error beside every invalid field and a concise summary giving the number of questions to check. Focus the first invalid control after an attempted submission.

Do not rely only on browser-native email validation, because the implementation needs consistent inline error feedback across field types. The form can use novalidate while still setting native required and aria-required properties. Preserve the visitor's answers when validation fails. A valid response is appended to local state and followed by a clear confirmation. Offer routes to the response list and to try another response.

Cap the local response collection at a reasonable demonstration limit, such as two hundred records. If that limit is reached, explain how to remove a record or restore samples. Do not fail silently or claim a server error. Local-storage failure should be explained; the current visit can still hold an in-memory response, but the interface must not imply durable hosting.

## Response snapshots and review

Every response stores an id, local creation timestamp, form title, configuration revision, review status, whether it is a fictional seed record, a snapshot of field identifiers, labels and types, and an answer map. The snapshot is essential. If the current form's question is renamed or removed, an older response must still display the question that was actually asked. Do not reinterpret historical answers using today's labels.

The response page begins with counts for all records, New and Reviewed. These values are derived from the current local collection. A search input matches form title and answer text. Status filters combine with search. The visible records can have different form titles and revisions because applying a template does not erase old responses. Each row gives the original form title, revision, question count, sample-versus-local context, a short answer excerpt and an Open response action.

The detail dialog lists every snapshotted question and its answer. Checkboxes display an explicit Yes or No. Empty optional answers display a clear no-answer message. All user text is escaped or assigned as text, and long text wraps without overflowing. A review button toggles New and Reviewed locally. Deleting a local response removes only that record. Restoring the two fictional sample responses is a separate explicit action on the response page.

New and Reviewed are organisational states in this browser, not messages to a team or workflow events in another system. The product should not imply that another person reviewed a record. Dates for the two seed records are clearly sample metadata, while newly created records use the current local creation time. No email address is contacted, even when it is present as a sample answer.

## Exports and data safety

The builder exports JSON containing the current configuration. The response page exports the current filtered view, and the interface states that scope. JSON includes full response snapshots so the relationship between question and answer remains intact. CSV includes response metadata and the union of questions represented in the exported records. If a question's label changed across versions, preserve separate columns where necessary. If two distinct fields share a label, include their identifiers to disambiguate the column headings.

Quote every CSV cell, escape embedded quotation marks and preserve line breaks correctly. Neutralize text beginning with a spreadsheet-formula prefix, including common leading-whitespace variants, so a user's sample answer does not become a formula when opened in spreadsheet software. Booleans and numbers may be represented plainly within quoted cells. A local text export is not an integration, synchronization or remote storage service.

Use Blob URLs for downloads and revoke them after the download begins. Download actions should provide a plain confirmation that a file was prepared. They must not open an email client, upload a file or send data to a third party. Preserve exact current-view semantics in both JSON and CSV rather than exporting a stale or unrelated collection.

## Persistence and defensive loading

Store the configuration, bounded undo history and response collection under brio-studio-v1. On load, validate known field types, safe field identifiers, bounded labels and help text, allowed themes, unique dropdown choices and allowed review states. Reconstruct known fields rather than trusting an arbitrary stored object. Unknown or malformed answer values should become safe empty values, not HTML or executable content.

Corrupt JSON falls back to a starter configuration and the fictional sample records. A valid empty field list or empty response list remains empty. Distinguish absence from intentional removal. Keep history bounded to ten configurations and responses bounded to two hundred. Notes and answers have maximum lengths appropriate to their controls. Avoid introducing speculative accounts, remote APIs or a database for a task that is intentionally local.

Keep field normalization, field validation, answer validation, immutable reordering and CSV construction in a small importable model module. The browser uses those same functions, embedded by the static builder. Test them directly instead of copying the formulas into a test-only implementation. Rendering and DOM listeners belong in the interaction script, while original starter data belongs in a data module. This separation is enough; do not create unnecessary service layers or abstractions.

## Guide, original assets and truthful claims

The guide is a complete practical destination with six sections: asking a useful question, building and arranging, trying the answer, keeping the context, taking a copy and understanding the local scope. Explain the actual controls and limits in plain language. Connect a question type to the kind of answer it helps collect. Explain why snapshots matter and why a response's original label should survive later editing.

Include an original SVG form-study illustration and a WebP hero compatibility asset. The live marketing playground and builder are HTML, not raster mockups. All original art, code, labels, sample names and template descriptions are created for Brio. The locally hosted Geist font includes its SIL Open Font License text. Credits identify the live Fillout research and separate observed public features from Brio's original implementation.

Do not redistribute reference screenshots, illustrated backgrounds, customer logos, testimonials, review scores or integration branding. Do not claim accessibility certification, security compliance, conversion improvements or enterprise capabilities that have not been implemented and verified. The product can be expressive and complete without those claims. Provider-neutral output should still include honest original-work and local-demo disclosure.

## Build contract and verification

Source files live in scripts/brio. The builder exports buildBrio() and returns an object containing prompt. Generated pages and assets live in public/demos/brio, with the public reconstruction prompt at public/prompts/brio.md and a duplicate beside the demo. Append the exact starter data and the complete model plus interaction script under the required Reference interaction handler heading. Keep fonts and assets local. Do not modify shared catalog, router, validator, credentials or deployment files.

Use restrained motion: a form-sheet entrance, small hover responses, theme-sheet composition and native dialog movement. Respect reduced motion throughout. No autoplay, artificial typing, waiting screen or continuous background movement is needed. The working controls should respond immediately and remain usable while any decorative transition runs.

Before handoff, run scoped lint, syntax and domain tests. In the browser, add each supported field type, edit labels and required state, reject an invalid dropdown, reorder a question, remove it and undo. Change form settings, reload and confirm persistence. Submit invalid and valid preview answers, inspect the resulting response, mark it reviewed, change the form label and verify that the old snapshot remains intact. Apply a template and confirm older responses remain readable. Exercise filtered JSON/CSV and configuration exports, empty states and resets. Check all six routes at desktop and 390-pixel widths, measure actual font sizes and overflow, and report observed results and concrete limitations honestly.

## Local reset and long-answer resilience

The builder footer also offers Reset local demo. This explicitly restores the starter workshop form, clears configuration history and returns the response collection to the two fictional samples. It is separate from the response page's narrower Restore sample responses action. Use the full reset after QA so the delivered demo starts cleanly. User-supplied titles, question labels and response excerpts should wrap safely even when they contain an unusually long word; never let unbroken sample text create horizontal page overflow.


## Exact starter configuration and sample data

```json
{
  "fieldTypes": [
    {
      "id": "text",
      "name": "Short answer",
      "symbol": "Aa",
      "help": "A name, a title, a little context."
    },
    {
      "id": "textarea",
      "name": "Long answer",
      "symbol": "¶",
      "help": "Give a thought a little more room."
    },
    {
      "id": "email",
      "name": "Email",
      "symbol": "@",
      "help": "Check a sample email format."
    },
    {
      "id": "select",
      "name": "Dropdown",
      "symbol": "⌄",
      "help": "Make the choices clear."
    },
    {
      "id": "checkbox",
      "name": "Checkbox",
      "symbol": "✓",
      "help": "A single yes-or-no choice."
    }
  ],
  "templates": [
    {
      "id": "workshop",
      "name": "Workshop signup",
      "category": "Bring people together",
      "color": "#ffbf98",
      "description": "A clear starting point for an imagined creative workshop.",
      "form": {
        "title": "A little room to make.",
        "description": "Tell us which workshop interests you. Use sample details—this form saves only in your browser.",
        "theme": "apricot",
        "fields": [
          {
            "id": "name",
            "type": "text",
            "label": "Name for your badge",
            "help": "A sample name is perfect.",
            "required": true,
            "options": []
          },
          {
            "id": "email",
            "type": "email",
            "label": "Email for the demo",
            "help": "Try something like reader@example.com. Nothing is sent.",
            "required": true,
            "options": []
          },
          {
            "id": "session",
            "type": "select",
            "label": "Which session interests you?",
            "help": "Choose one possibility.",
            "required": true,
            "options": [
              "Design lab",
              "Writing studio",
              "Field notes"
            ]
          },
          {
            "id": "hopes",
            "type": "textarea",
            "label": "What would make this useful?",
            "help": "A thought, a question, or an idea. Optional.",
            "required": false,
            "options": []
          },
          {
            "id": "local",
            "type": "checkbox",
            "label": "I understand this is a local demonstration.",
            "help": "No registration or message is submitted.",
            "required": true,
            "options": []
          }
        ]
      }
    },
    {
      "id": "project",
      "name": "Project request",
      "category": "Start on the same page",
      "color": "#c7d4ff",
      "description": "Give a new piece of work a useful first conversation.",
      "form": {
        "title": "What are you working on?",
        "description": "Outline an imaginary project. No request is sent to a team or service.",
        "theme": "sky",
        "fields": [
          {
            "id": "project-name",
            "type": "text",
            "label": "Project name",
            "help": "Give the idea a working title.",
            "required": true,
            "options": []
          },
          {
            "id": "project-kind",
            "type": "select",
            "label": "What kind of project?",
            "help": "Choose the closest fit.",
            "required": true,
            "options": [
              "Brand identity",
              "Website",
              "Editorial project",
              "Something else"
            ]
          },
          {
            "id": "goal",
            "type": "textarea",
            "label": "What should it achieve?",
            "help": "Describe the change you want to make.",
            "required": true,
            "options": []
          },
          {
            "id": "timing",
            "type": "text",
            "label": "Any timing to keep in mind?",
            "help": "A rough idea is enough.",
            "required": false,
            "options": []
          }
        ]
      }
    },
    {
      "id": "feedback",
      "name": "Quick feedback",
      "category": "Listen a little closer",
      "color": "#e6e96c",
      "description": "A small set of questions with room for an honest answer.",
      "form": {
        "title": "How did that feel?",
        "description": "Try a short feedback form using a sample experience. Your answers remain local.",
        "theme": "lemon",
        "fields": [
          {
            "id": "feeling",
            "type": "select",
            "label": "How was the experience?",
            "help": "Choose the answer that fits.",
            "required": true,
            "options": [
              "Really useful",
              "A good start",
              "Mixed",
              "Not quite there"
            ]
          },
          {
            "id": "worked",
            "type": "textarea",
            "label": "What worked well?",
            "help": "A detail is more useful than a score.",
            "required": false,
            "options": []
          },
          {
            "id": "change",
            "type": "textarea",
            "label": "What would you change?",
            "help": "Keep it practical and kind.",
            "required": true,
            "options": []
          },
          {
            "id": "again",
            "type": "checkbox",
            "label": "I would try something like this again.",
            "help": "Optional.",
            "required": false,
            "options": []
          }
        ]
      }
    }
  ],
  "initialResponses": [
    {
      "id": "sample-1",
      "createdAt": "2026-09-09T09:00:00.000Z",
      "formTitle": "A little room to make.",
      "revision": 1,
      "status": "New",
      "fields": [
        {
          "id": "name",
          "label": "Name for your badge",
          "type": "text"
        },
        {
          "id": "email",
          "label": "Email for the demo",
          "type": "email"
        },
        {
          "id": "session",
          "label": "Which session interests you?",
          "type": "select"
        },
        {
          "id": "hopes",
          "label": "What would make this useful?",
          "type": "textarea"
        },
        {
          "id": "local",
          "label": "I understand this is a local demonstration.",
          "type": "checkbox"
        }
      ],
      "answers": {
        "name": "Rowan Sample",
        "email": "rowan@example.com",
        "session": "Design lab",
        "hopes": "A useful way to begin a small design project.",
        "local": true
      },
      "sample": true
    },
    {
      "id": "sample-2",
      "createdAt": "2026-09-09T10:30:00.000Z",
      "formTitle": "A little room to make.",
      "revision": 1,
      "status": "Reviewed",
      "fields": [
        {
          "id": "name",
          "label": "Name for your badge",
          "type": "text"
        },
        {
          "id": "email",
          "label": "Email for the demo",
          "type": "email"
        },
        {
          "id": "session",
          "label": "Which session interests you?",
          "type": "select"
        },
        {
          "id": "hopes",
          "label": "What would make this useful?",
          "type": "textarea"
        },
        {
          "id": "local",
          "label": "I understand this is a local demonstration.",
          "type": "checkbox"
        }
      ],
      "answers": {
        "name": "Casey Example",
        "email": "casey@example.com",
        "session": "Writing studio",
        "hopes": "Time to turn notes into a first draft.",
        "local": true
      },
      "sample": true
    }
  ]
}
```

## Reference interaction handler

```javascript
function cleanField(field) {
  const types = ['text', 'textarea', 'email', 'select', 'checkbox'];
  return {
    id:
      typeof field.id === 'string' && /^[a-z0-9-]+$/.test(field.id)
        ? field.id
        : 'field-invalid',
    type: types.includes(field.type) ? field.type : 'text',
    label:
      typeof field.label === 'string' ? field.label.trim().slice(0, 100) : '',
    help: typeof field.help === 'string' ? field.help.slice(0, 240) : '',
    required: field.required === true,
    options: Array.isArray(field.options)
      ? [
          ...new Set(
            field.options
              .filter((option) => typeof option === 'string')
              .map((option) => option.trim().slice(0, 80))
              .filter(Boolean),
          ),
        ].slice(0, 12)
      : [],
  };
}
function validateField(field) {
  if (!field.label.trim()) return 'Give this question a label.';
  if (field.type === 'select' && field.options.length < 2)
    return 'Add at least two different dropdown choices.';
  return '';
}
function validateAnswers(fields, answers) {
  const errors = {};
  for (const field of fields) {
    const value = answers[field.id];
    if (
      field.required &&
      (field.type === 'checkbox'
        ? value !== true
        : typeof value !== 'string' || !value.trim())
    ) {
      errors[field.id] = 'This question needs an answer.';
      continue;
    }
    if (
      field.type === 'email' &&
      typeof value === 'string' &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    )
      errors[field.id] = 'Use an email address such as reader@example.com.';
    if (field.type === 'select' && value && !field.options.includes(value))
      errors[field.id] = 'Choose one of the available options.';
  }
  return errors;
}
function moveField(fields, id, direction) {
  const next = fields.map((field) => ({
    ...field,
    options: [...field.options],
  }));
  const index = next.findIndex((field) => field.id === id);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= next.length) return next;
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}
function responseColumns(responses) {
  const columns = new Map();
  for (const response of responses)
    for (const field of response.fields) {
      const key = field.id + '::' + field.label;
      if (!columns.has(key))
        columns.set(key, { key, id: field.id, label: field.label });
    }
  return [...columns.values()];
}
function csvCell(value) {
  const text = String(value ?? '');
  const safe =
    typeof value === 'string' && /^(\s*[=+\-@]|\t|\r)/.test(text)
      ? "'" + text
      : text;
  return '"' + safe.replaceAll('"', '""') + '"';
}
function responsesCsv(responses) {
  const columns = responseColumns(responses);
  const rows = [
    [
      'Response',
      'Form',
      'Revision',
      'Status',
      'Recorded locally',
      ...columns.map((column) =>
        columns.filter((item) => item.label === column.label).length > 1
          ? column.label + ' [' + column.id + ']'
          : column.label,
      ),
    ],
    ...responses.map((response) => [
      response.id,
      response.formTitle,
      response.revision,
      response.status,
      response.createdAt,
      ...columns.map((column) =>
        response.fields.some(
          (field) => field.id === column.id && field.label === column.label,
        )
          ? (response.answers[column.id] ?? '')
          : '',
      ),
    ]),
  ];
  return rows.map((row) => row.map(csvCell).join(',')).join('\n');
}

(() => {
  'use strict';
  const seed = JSON.parse(document.getElementById('brio-data').textContent);
  const key = 'brio-studio-v1';
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const e = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  const themeColors = { apricot: '#ffbf98', sky: '#c7d4ff', lemon: '#e8ec97' };
  function sanitizeConfig(value) {
    const fields = Array.isArray(value?.fields)
      ? [
          ...new Map(
            value.fields
              .filter((field) => field && typeof field === 'object')
              .map(cleanField)
              .filter(
                (field) =>
                  field.id !== 'field-invalid' && !validateField(field),
              )
              .slice(0, 12)
              .map((field) => [field.id, field]),
          ).values(),
        ]
      : [];
    return {
      title:
        typeof value?.title === 'string'
          ? value.title.trim().slice(0, 120) || 'Untitled form'
          : 'Untitled form',
      description:
        typeof value?.description === 'string'
          ? value.description.slice(0, 600)
          : '',
      theme: Object.hasOwn(themeColors, value?.theme) ? value.theme : 'apricot',
      revision:
        Number.isInteger(value?.revision) && value.revision > 0
          ? value.revision
          : 1,
      fields,
    };
  }
  function sanitizeResponses(values) {
    if (!Array.isArray(values)) return clone(seed.initialResponses);
    return values
      .filter(
        (value) =>
          value &&
          typeof value.id === 'string' &&
          Array.isArray(value.fields) &&
          value.answers &&
          typeof value.answers === 'object',
      )
      .slice(0, 200)
      .map((value) => {
        const fields = value.fields
          .filter(
            (field) =>
              field &&
              typeof field.id === 'string' &&
              typeof field.label === 'string',
          )
          .slice(0, 12)
          .map((field) => ({
            id: field.id.slice(0, 80),
            label: field.label.slice(0, 100),
            type: ['text', 'textarea', 'email', 'select', 'checkbox'].includes(
              field.type,
            )
              ? field.type
              : 'text',
          }));
        const answers = {};
        for (const field of fields) {
          const answer = value.answers[field.id];
          answers[field.id] =
            typeof answer === 'boolean'
              ? answer
              : typeof answer === 'string'
                ? answer.slice(0, 3000)
                : '';
        }
        return {
          id: value.id.slice(0, 100),
          createdAt:
            typeof value.createdAt === 'string'
              ? value.createdAt.slice(0, 40)
              : '',
          formTitle:
            typeof value.formTitle === 'string'
              ? value.formTitle.slice(0, 120)
              : 'Untitled form',
          revision: Number.isInteger(value.revision) ? value.revision : 1,
          status: value.status === 'Reviewed' ? 'Reviewed' : 'New',
          sample: value.sample === true,
          fields,
          answers,
        };
      });
  }
  let state = {
    config: { ...clone(seed.templates[0].form), revision: 1 },
    history: [],
    responses: clone(seed.initialResponses),
  };
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      if (stored.config && Array.isArray(stored.config.fields))
        state.config = sanitizeConfig(stored.config);
      if (Array.isArray(stored.history))
        state.history = stored.history.slice(-10).map(sanitizeConfig);
      state.responses = sanitizeResponses(stored.responses);
    }
  } catch {
    state = {
      config: { ...clone(seed.templates[0].form), revision: 1 },
      history: [],
      responses: clone(seed.initialResponses),
    };
  }
  let selectedId = state.config.fields[0]?.id || null;
  let propertyTab = 'field';
  let currentResponse = null;
  let templateId = null;
  let toastTimer;
  function notify(message) {
    const node = document.querySelector('.toast');
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('show'), 3200);
  }
  function persist() {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      return true;
    } catch {
      notify('Available for this visit. Browser saving is unavailable.');
      return false;
    }
  }
  function download(name, text, type = 'application/json') {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function counts() {
    document.querySelectorAll('.response-count').forEach((node) => {
      node.textContent = state.responses.length;
    });
  }
  function commitConfig(next, message) {
    state.history.push(clone(state.config));
    state.history = state.history.slice(-10);
    state.config = sanitizeConfig({
      ...next,
      revision: state.config.revision + 1,
    });
    const stored = persist();
    renderBuilder();
    if (message)
      notify(
        stored ? message : 'This edit is available for the current visit.',
      );
  }
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = document.querySelector('header').classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
  });
  document
    .querySelectorAll('[data-close]')
    .forEach((button) =>
      button.addEventListener('click', () => button.closest('dialog').close()),
    );
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const dialog = [...document.querySelectorAll('dialog[open]')].at(-1);
    if (dialog) {
      event.preventDefault();
      dialog.close();
    }
    document.querySelector('header').classList.remove('menu-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = 'Menu';
  });
  const heroQuestion = document.getElementById('hero-question');
  function renderHero(type) {
    if (!heroQuestion) return;
    const controls = {
      text: '<label for="hero-answer">A small idea worth trying<input id="hero-answer" type="text" placeholder="Your answer here"></label>',
      select:
        '<label for="hero-choice">Pick a possibility<select id="hero-choice"><option>Design lab</option><option>Writing studio</option><option>Field notes</option></select></label>',
      checkbox:
        '<label><input type="checkbox">I have a good question in mind.</label>',
    };
    heroQuestion.innerHTML = controls[type];
    document
      .querySelectorAll('[data-hero-type]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.heroType === type),
        ),
      );
  }
  document
    .querySelectorAll('[data-hero-type]')
    .forEach((button) =>
      button.addEventListener('click', () =>
        renderHero(button.dataset.heroType),
      ),
    );
  renderHero('text');
  const fieldList = document.getElementById('field-list');
  function placeholder(field) {
    if (field.type === 'checkbox')
      return '<span class="field-placeholder check">A single checkbox answer</span>';
    if (field.type === 'select')
      return `<span class="field-placeholder">${e(field.options[0])} ⌄</span>`;
    return `<span class="field-placeholder ${field.type === 'textarea' ? 'long' : ''}">${field.type === 'email' ? 'reader@example.com' : 'Your answer here'}</span>`;
  }
  function renderProperties() {
    const target = document.getElementById('property-content');
    if (!target) return;
    document
      .querySelectorAll('[data-property-tab]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.propertyTab === propertyTab),
        ),
      );
    if (propertyTab === 'form') {
      target.innerHTML = `<form id="form-settings"><h2>The first impression.</h2><label>Form title<input name="title" value="${e(state.config.title)}" maxlength="120" required></label><label>Introduction<textarea name="description" rows="4" maxlength="600">${e(state.config.description)}</textarea></label><label>Colour theme<select name="theme">${[
        ['apricot', 'Apricot'],
        ['sky', 'Blue sky'],
        ['lemon', 'Lemon'],
      ]
        .map(
          ([id, label]) =>
            `<option value="${id}" ${state.config.theme === id ? 'selected' : ''}>${label}</option>`,
        )
        .join(
          '',
        )}</select></label><button class="button" type="submit">Save form settings</button><p class="property-error" role="alert"></p></form>`;
      return;
    }
    const field = state.config.fields.find((item) => item.id === selectedId);
    if (!field) {
      target.innerHTML =
        '<h2>A question goes here.</h2><p class="property-help">Add a question or select one in the canvas to edit its details.</p>';
      return;
    }
    target.innerHTML = `<form id="field-settings"><h2>Make the question clear.</h2><label>Question label<input name="label" value="${e(field.label)}" maxlength="100" required></label><label>A little helpful context<textarea name="help" rows="3" maxlength="240">${e(field.help)}</textarea></label><label>Question type<select name="type">${seed.fieldTypes.map((type) => `<option value="${type.id}" ${field.type === type.id ? 'selected' : ''}>${type.name}</option>`).join('')}</select></label><label class="check-setting"><input name="required" type="checkbox" ${field.required ? 'checked' : ''}>Answer required</label><label id="option-setting" ${field.type !== 'select' ? 'hidden' : ''}>Dropdown choices<textarea name="options" rows="5" placeholder="One choice per line">${e(field.options.join('\n'))}</textarea></label><p class="property-help" id="option-help" ${field.type !== 'select' ? 'hidden' : ''}>One choice per line. At least two different choices; up to twelve.</p><button class="button" type="submit">Save question</button><p class="property-error" role="alert"></p></form>`;
  }
  function renderBuilder() {
    if (!fieldList) return;
    if (!state.config.fields.some((field) => field.id === selectedId))
      selectedId = state.config.fields[0]?.id || null;
    document.getElementById('field-count').textContent =
      `${state.config.fields.length} ${state.config.fields.length === 1 ? 'question' : 'questions'} / 12 maximum`;
    document.getElementById('revision-label').textContent =
      `Revision ${state.config.revision}`;
    document.getElementById('undo-config').disabled = !state.history.length;
    document.getElementById('canvas-title').innerHTML =
      `<div class="canvas-title" style="--form-theme:${themeColors[state.config.theme]}"><h2>${e(state.config.title)}</h2><p>${e(state.config.description)}</p></div>`;
    fieldList.innerHTML = state.config.fields.length
      ? state.config.fields
          .map(
            (field, index) =>
              `<article class="field-item ${field.id === selectedId ? 'selected' : ''}"><div class="field-item-top"><span>${String(index + 1).padStart(2, '0')} / ${seed.fieldTypes.find((type) => type.id === field.type).name}</span><div class="field-tools"><button data-move="${field.id}" data-direction="-1" aria-label="Move ${e(field.label)} up" ${index === 0 ? 'disabled' : ''}>↑</button><button data-move="${field.id}" data-direction="1" aria-label="Move ${e(field.label)} down" ${index === state.config.fields.length - 1 ? 'disabled' : ''}>↓</button><button data-remove="${field.id}" aria-label="Remove ${e(field.label)}">×</button></div></div><button class="field-select" data-select="${field.id}" aria-pressed="${field.id === selectedId}"><h3>${e(field.label)}${field.required ? '<span class="required-mark">*</span>' : ''}</h3>${field.help ? `<p>${e(field.help)}</p>` : ''}${placeholder(field)}</button></article>`,
          )
          .join('')
      : '<div class="empty-canvas"><h3>A blank page, ready.</h3><p>Add a question from the library. The preview will be ready when the form has at least one field.</p></div>';
    renderProperties();
    document.getElementById('builder-status').textContent =
      'Saved configuration / revision ' + state.config.revision + '.';
  }
  function focusProperties() {
    if (matchMedia('(max-width:650px)').matches)
      document
        .querySelector('.properties-panel')
        .scrollIntoView({
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant'
            : 'smooth',
          block: 'start',
        });
  }
  if (fieldList) {
    if (matchMedia('(max-width:650px)').matches)
      document.getElementById('field-library').open = false;
    document.querySelectorAll('[data-property-tab]').forEach((button) =>
      button.addEventListener('click', () => {
        propertyTab = button.dataset.propertyTab;
        renderProperties();
      }),
    );
    document.addEventListener('click', (event) => {
      const add = event.target.closest('[data-add-type]');
      if (add) {
        if (state.config.fields.length >= 12) {
          notify('This demo supports up to twelve questions.');
          return;
        }
        const type = seed.fieldTypes.find(
          (item) => item.id === add.dataset.addType,
        );
        if (!type) return;
        const id =
          'field-' +
          Date.now().toString(36) +
          '-' +
          Math.random().toString(36).slice(2, 6);
        selectedId = id;
        propertyTab = 'field';
        commitConfig(
          {
            ...state.config,
            fields: [
              ...state.config.fields,
              {
                id,
                type: type.id,
                label:
                  type.id === 'checkbox'
                    ? 'Your checkbox question'
                    : 'Your new question',
                help: '',
                required: false,
                options:
                  type.id === 'select' ? ['First choice', 'Second choice'] : [],
              },
            ],
          },
          'Question added. Make it your own.',
        );
        focusProperties();
        return;
      }
      const select = event.target.closest('[data-select]');
      if (select) {
        selectedId = select.dataset.select;
        propertyTab = 'field';
        renderBuilder();
        focusProperties();
        return;
      }
      const move = event.target.closest('[data-move]');
      if (move) {
        commitConfig(
          {
            ...state.config,
            fields: moveField(
              state.config.fields,
              move.dataset.move,
              Number(move.dataset.direction),
            ),
          },
          'Question order updated.',
        );
        return;
      }
      const remove = event.target.closest('[data-remove]');
      if (remove)
        commitConfig(
          {
            ...state.config,
            fields: state.config.fields.filter(
              (field) => field.id !== remove.dataset.remove,
            ),
          },
          'Question removed. Undo is available.',
        );
    });
    document
      .getElementById('property-content')
      .addEventListener('input', () => {
        document.getElementById('builder-status').textContent =
          'Unsaved changes. Use the save button to apply them.';
      });
    document
      .getElementById('property-content')
      .addEventListener('change', (event) => {
        if (event.target.name === 'type') {
          const isSelect = event.target.value === 'select';
          document.getElementById('option-setting').hidden = !isSelect;
          document.getElementById('option-help').hidden = !isSelect;
        }
      });
    document
      .getElementById('property-content')
      .addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        if (form.id === 'form-settings') {
          const title = form.elements.namedItem('title').value.trim();
          if (!title) {
            form.querySelector('.property-error').textContent =
              'Give the form a title.';
            return;
          }
          commitConfig(
            {
              ...state.config,
              title,
              description: form.elements.namedItem('description').value,
              theme: data.get('theme'),
            },
            'Form settings saved locally.',
          );
          return;
        }
        const original = state.config.fields.find(
          (field) => field.id === selectedId,
        );
        if (!original) return;
        const field = cleanField({
          ...original,
          label: form.elements.namedItem('label').value,
          help: form.elements.namedItem('help').value,
          type: data.get('type'),
          required: data.get('required') === 'on',
          options: form.elements.namedItem('options').value.split('\n'),
        });
        const error = validateField(field);
        if (error) {
          form.querySelector('.property-error').textContent = error;
          return;
        }
        commitConfig(
          {
            ...state.config,
            fields: state.config.fields.map((item) =>
              item.id === selectedId ? field : item,
            ),
          },
          'Question saved locally.',
        );
      });
    document.getElementById('undo-config').addEventListener('click', () => {
      const previous = state.history.pop();
      if (!previous) return;
      state.config = { ...previous, revision: state.config.revision + 1 };
      persist();
      renderBuilder();
      notify('Last configuration edit undone.');
    });
    document.getElementById('reset-studio').addEventListener('click', () => {
      state = {
        config: { ...clone(seed.templates[0].form), revision: 1 },
        history: [],
        responses: clone(seed.initialResponses),
      };
      selectedId = state.config.fields[0].id;
      propertyTab = 'field';
      persist();
      counts();
      renderBuilder();
      notify(
        'Starter form and two sample responses restored. Local edits cleared.',
      );
    });
    document.getElementById('export-config').addEventListener('click', () => {
      download(
        'brio-form.json',
        JSON.stringify(
          { kind: 'Brio local form configuration', ...state.config },
          null,
          2,
        ),
      );
      notify('Form configuration prepared for download.');
    });
    renderBuilder();
  }
  function fieldControl(field) {
    const id = 'answer-' + field.id;
    const described = `help-${field.id} error-${field.id}`;
    if (field.type === 'checkbox')
      return `<div class="answer-field checkbox" data-answer-field="${field.id}"><label for="${id}"><input id="${id}" name="${field.id}" type="checkbox" aria-describedby="${described}"><span>${e(field.label)}${field.required ? '<span class="required-mark">*</span>' : ''}</span></label>${field.help ? `<p class="answer-help" id="help-${field.id}">${e(field.help)}</p>` : `<span id="help-${field.id}"></span>`}<p class="answer-error" id="error-${field.id}" aria-live="polite"></p></div>`;
    let control;
    if (field.type === 'textarea')
      control = `<textarea id="${id}" name="${field.id}" rows="4" maxlength="3000" aria-describedby="${described}"></textarea>`;
    else if (field.type === 'select')
      control = `<select id="${id}" name="${field.id}" aria-describedby="${described}"><option value="">Choose an option</option>${field.options.map((option) => `<option>${e(option)}</option>`).join('')}</select>`;
    else
      control = `<input id="${id}" name="${field.id}" type="${field.type === 'email' ? 'email' : 'text'}" maxlength="1000" aria-describedby="${described}">`;
    return `<div class="answer-field" data-answer-field="${field.id}"><label for="${id}">${e(field.label)}${field.required ? '<span class="required-mark">*</span>' : ''}</label>${field.help ? `<p class="answer-help" id="help-${field.id}">${e(field.help)}</p>` : `<span id="help-${field.id}"></span>`}${control}<p class="answer-error" id="error-${field.id}" aria-live="polite"></p></div>`;
  }
  const liveWrap = document.getElementById('live-form-wrap');
  function renderPreview() {
    if (!liveWrap) return;
    document.getElementById('response-success').hidden = true;
    liveWrap.hidden = false;
    if (!state.config.fields.length) {
      liveWrap.innerHTML =
        '<section class="preview-empty"><h1>A question comes first.</h1><p>The current form is empty. Add a field in the builder to try a local response.</p><a class="button" href="builder.html">Back to the builder ↗</a></section>';
      return;
    }
    liveWrap.innerHTML = `<section class="live-form-card"><div class="live-form-heading" style="--form-theme:${themeColors[state.config.theme]}"><span>BRIO / LOCAL FORM PREVIEW / REVISION ${state.config.revision}</span><h1>${e(state.config.title)}</h1><p>${e(state.config.description)}</p></div><form class="respondent-form" id="respondent-form" novalidate><div id="answer-summary" class="answer-summary" role="alert" hidden></div>${state.config.fields.map(fieldControl).join('')}<button class="button" type="submit">Save local response ↗</button><p class="respondent-note">Use sample details. This is not a hosted form, registration or email submission. Required questions are marked with an asterisk.</p></form></section>`;
    for (const field of state.config.fields) {
      const input = document.getElementById('answer-' + field.id);
      input.required = field.required;
      input.setAttribute('aria-required', String(field.required));
    }
  }
  if (liveWrap) {
    liveWrap.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const answers = {};
      for (const field of state.config.fields) {
        const input = form.elements.namedItem(field.id);
        answers[field.id] =
          field.type === 'checkbox' ? input.checked : input.value.trim();
      }
      const errors = validateAnswers(state.config.fields, answers);
      for (const field of state.config.fields) {
        const wrapper = liveWrap.querySelector(
          `[data-answer-field="${field.id}"]`,
        );
        wrapper.classList.toggle('has-error', Boolean(errors[field.id]));
        document.getElementById('error-' + field.id).textContent =
          errors[field.id] || '';
        form.elements
          .namedItem(field.id)
          .setAttribute('aria-invalid', String(Boolean(errors[field.id])));
      }
      const summary = document.getElementById('answer-summary');
      if (Object.keys(errors).length) {
        summary.hidden = false;
        summary.textContent = `Check ${Object.keys(errors).length} ${Object.keys(errors).length === 1 ? 'question' : 'questions'} below before saving.`;
        form.elements.namedItem(Object.keys(errors)[0]).focus();
        return;
      }
      if (state.responses.length >= 200) {
        summary.hidden = false;
        summary.textContent =
          'This local demo holds up to 200 responses. Remove a response or restore the sample set to continue.';
        return;
      }
      state.responses.push({
        id:
          'response-' +
          Date.now().toString(36) +
          '-' +
          Math.random().toString(36).slice(2, 6),
        createdAt: new Date().toISOString(),
        formTitle: state.config.title,
        revision: state.config.revision,
        status: 'New',
        sample: false,
        fields: state.config.fields.map(({ id, label, type }) => ({
          id,
          label,
          type,
        })),
        answers,
      });
      const stored = persist();
      counts();
      liveWrap.hidden = true;
      const success = document.getElementById('response-success');
      success.hidden = false;
      success.querySelector('p').textContent = stored
        ? 'Your response was saved in this browser. No registration, email or external submission was sent.'
        : 'Your response is available for this visit only because browser saving is unavailable. Download a copy before leaving this page.';
      success.querySelector('a').hidden = !stored;
      document.getElementById('download-single-response').hidden = stored;
      success.scrollIntoView({
        block: 'start',
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
    });
    document
      .getElementById('another-response')
      .addEventListener('click', renderPreview);
    document
      .getElementById('download-single-response')
      .addEventListener('click', () =>
        download(
          'brio-local-response.json',
          JSON.stringify(state.responses.at(-1), null, 2),
        ),
      );
    renderPreview();
  }
  const responseList = document.getElementById('response-list');
  let responseFilter = 'All';
  function visibleResponses() {
    const query =
      document.getElementById('response-search')?.value.trim().toLowerCase() ||
      '';
    return state.responses
      .filter(
        (response) =>
          (responseFilter === 'All' || response.status === responseFilter) &&
          `${response.formTitle} ${Object.values(response.answers).join(' ')}`
            .toLowerCase()
            .includes(query),
      )
      .slice()
      .reverse();
  }
  function renderResponses() {
    if (!responseList) return;
    document.getElementById('response-total').textContent =
      state.responses.length;
    document.getElementById('response-new').textContent =
      state.responses.filter((response) => response.status === 'New').length;
    document.getElementById('response-reviewed').textContent =
      state.responses.filter(
        (response) => response.status === 'Reviewed',
      ).length;
    const visible = visibleResponses();
    responseList.innerHTML = visible
      .map((response) => {
        const values = response.fields
          .filter((field) => field.type !== 'checkbox')
          .map((field) => response.answers[field.id])
          .filter(Boolean)
          .slice(0, 3);
        return `<article class="response-row"><div><h2>${e(response.formTitle)}</h2><p>Revision ${response.revision} / ${response.fields.length} question snapshot</p><span class="sample-label">${response.sample ? 'Fictional sample record' : 'Created locally in this browser'}</span></div><p class="response-snippet">${values.map(e).join('<br>')}</p><div><span class="response-state ${response.status === 'Reviewed' ? 'reviewed' : ''}">${response.status}</span><button data-response="${e(response.id)}">Open response ↗</button></div></article>`;
      })
      .join('');
    document.getElementById('response-empty').hidden = visible.length > 0;
    document.getElementById('export-json').disabled = !visible.length;
    document.getElementById('export-csv').disabled = !visible.length;
    document
      .querySelectorAll('[data-response-filter]')
      .forEach((button) =>
        button.setAttribute(
          'aria-pressed',
          String(button.dataset.responseFilter === responseFilter),
        ),
      );
    counts();
  }
  function renderResponseDetail() {
    const response = state.responses.find(
      (item) => item.id === currentResponse,
    );
    if (!response) return;
    document.getElementById('response-title').textContent = response.formTitle;
    document.getElementById('response-detail').innerHTML =
      `<p class="response-detail-meta">Revision ${response.revision} / ${response.status} / ${response.sample ? 'Fictional sample' : 'Local response'}<br>${e(response.createdAt)}</p>${response.fields.map((field) => `<section class="answer-detail"><h3>${e(field.label)}</h3><p>${field.type === 'checkbox' ? (response.answers[field.id] ? 'Yes' : 'No') : e(response.answers[field.id] || 'No answer provided.')}</p></section>`).join('')}`;
    document.getElementById('toggle-reviewed').textContent =
      response.status === 'Reviewed' ? 'Mark as new' : 'Mark reviewed';
  }
  if (responseList) {
    document.querySelectorAll('[data-response-filter]').forEach((button) =>
      button.addEventListener('click', () => {
        responseFilter = button.dataset.responseFilter;
        renderResponses();
      }),
    );
    document
      .getElementById('response-search')
      .addEventListener('input', renderResponses);
    responseList.addEventListener('click', (event) => {
      const button = event.target.closest('[data-response]');
      if (!button) return;
      currentResponse = button.dataset.response;
      renderResponseDetail();
      document.getElementById('response-dialog').showModal();
    });
    document.getElementById('toggle-reviewed').addEventListener('click', () => {
      const response = state.responses.find(
        (item) => item.id === currentResponse,
      );
      if (!response) return;
      response.status = response.status === 'Reviewed' ? 'New' : 'Reviewed';
      persist();
      renderResponseDetail();
      renderResponses();
    });
    document.getElementById('delete-response').addEventListener('click', () => {
      state.responses = state.responses.filter(
        (response) => response.id !== currentResponse,
      );
      persist();
      document.getElementById('response-dialog').close();
      renderResponses();
      notify('The local response was removed.');
    });
    document.getElementById('reset-responses').addEventListener('click', () => {
      state.responses = clone(seed.initialResponses);
      persist();
      renderResponses();
      notify('The two fictional sample responses were restored.');
    });
    document.getElementById('export-json').addEventListener('click', () => {
      download(
        'brio-responses.json',
        JSON.stringify(
          { kind: 'Brio local responses', responses: visibleResponses() },
          null,
          2,
        ),
      );
      notify('The current response view is ready as JSON.');
    });
    document.getElementById('export-csv').addEventListener('click', () => {
      download(
        'brio-responses.csv',
        responsesCsv(visibleResponses()),
        'text/csv;charset=utf-8',
      );
      notify('The current response view is ready as CSV.');
    });
    renderResponses();
  }
  document.querySelectorAll('[data-template]').forEach((button) =>
    button.addEventListener('click', () => {
      templateId = button.dataset.template;
      const template = seed.templates.find((item) => item.id === templateId);
      document.getElementById('template-title').textContent =
        `Start with ${template.name.toLowerCase()}?`;
      document.getElementById('template-dialog').showModal();
    }),
  );
  document.getElementById('apply-template')?.addEventListener('click', () => {
    const template = seed.templates.find((item) => item.id === templateId);
    if (!template) return;
    state.history.push(clone(state.config));
    state.history = state.history.slice(-10);
    state.config = {
      ...clone(template.form),
      revision: state.config.revision + 1,
    };
    if (persist()) location.href = 'builder.html';
    else
      notify(
        'Storage is unavailable. The template cannot be carried to another page.',
      );
  });
  counts();
})();

```
