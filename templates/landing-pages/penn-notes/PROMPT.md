# Penn Avery — a small reading room

Build a complete original portfolio for Penn Avery, a fictional writer and researcher. The site is primarily a place to read. It should feel closer to a personal essay collection than a content platform. Use a quiet cream page, a narrow reading measure, readable serif text and a small sans-serif navigation. The writing itself is the work. Do not add stock photographs, decorative dashboard screenshots, testimonials, client logos, engagement numbers, a newsletter gate or a generic marketing hero. The homepage should contain a short introduction and two recent essays, with a link to the complete writing index.

The directly inspected reference is https://nickdilallo.com/. It uses a centered narrow content region, a clear personal heading and section labels beside readable text. Transfer the discipline of a limited column and the straightforward separation of biography, contact and writing. Do not copy its author identity, employment history, clients, speaking events or essay titles. Penn has an original serif reading voice, three original self-contained essays and a local notebook. The source was visually inspected on desktop; do not claim measurements or mobile interactions that were not tested there.

## Complete document structure

Produce seven full documents: index.html, writing.html, notebook.html, about.html, a-useful-pause.html, keeping-the-question.html and ordinary-labels.html. Each essay must exist as a complete static document, not a card opening an empty route. All prose should be available without JavaScript. The writing index renders all three entries in ordinary HTML before its filters initialize. JavaScript enhances filtering, reading size and the notebook only. Use relative local links so the standalone download works without a client router. Each page gets a descriptive title, a meta description, one h1 and a skip link.

The header contains Penn Avery, the secondary line Writer and researcher, and three links: Writing, Notebook and About. It is a single compact row at desktop and a stacked identity/navigation arrangement on phones. The page container is approximately seven hundred and ninety pixels wide including its side padding. It is centered with generous surrounding whitespace. Do not interpret minimalism as ten-pixel type. The body is eighteen pixels, the essay text nineteen pixels and its line height around 1.85. Long-form readability is the central quality requirement.

## Typography and material

Use Georgia or a comparable ordinary system serif for the writing. Use a locally hosted Geist variable font for navigation, labels, controls and metadata. The contrast between those roles should be clear but not theatrical. The page background is warm paper near #faf8f1, with ink around #35352f and readable muted text around #66665a. A dark clay hover color gives links a small change without making the page colorful. Headlines are normal-weight serif, forty to fifty-eight pixels depending on the viewport, with modest negative tracking. The title should never become so wide that it breaks the reading column.

Links are underlined with a visible offset. Buttons are plain outlined controls rather than pills. Input fields and selects use the same quiet sans-serif and a visible border. Keyboard focus uses a contrasting outline with enough offset to be seen. Do not remove native selection behavior, browser zoom or standard keyboard interaction. There is no reason to implement a custom cursor, animated text reveal or scrolling effect. If color transitions are included, make them short and disable them for reduced motion. The entire site should remain understandable as a static document.

## Homepage and writing index

The homepage title is Words for things worth noticing. Follow it with a short introduction about language, research and everyday decisions, then a sentence explaining that this is a place for finished essays and questions still being carried. The Recent writing section contains the two newest essays. Each has a date, linked title and a one-sentence description. The date occupies a small left column on desktop and moves above the title on mobile. This gives the homepage a compact editorial rhythm without a grid of cards. End with All writing and the quiet footer.

The writing index begins with a simple heading and a short description. Below it, offer a search input labeled Find an essay and a native subject select. The search checks the title and description, using a trimmed case-insensitive substring. The subject choices are All subjects, Language and Research. The two conditions combine. Display an accurate result count and a useful empty-state sentence when nothing matches. Do not remove an entry from the underlying collection when it is filtered. Its saved state should remain intact. Prevent the filter form from navigating away on Enter; it is a local search control.

Each essay entry shows its subject, date, title and description, followed by a small Save to notebook button. The button uses aria-pressed to communicate state and changes its visible label when saved. Clicking again removes the essay from the saved list. The state must survive a page reload when local storage is available. If storage is unavailable, explain that the list was not changed instead of displaying a false success. Do not make a bookmark action appear to publish a recommendation or send anything to the author.

## The three essays

Use the complete original text included below. A useful pause examines the language immediately before a consequential decision. It moves from a concrete photograph-archive example through the difference between an action and its boundary, then explains why useful confirmation requires understanding the underlying system. Keeping the question examines how observations can harden prematurely into findings. It distinguishes witnessed events from interpretations and describes a way to preserve the route back to original material. Ordinary labels explains why familiar navigation language can be a considered choice rather than a lack of personality.

These are actual readable essays with a beginning, development and ending. Do not replace them with summaries or repeated placeholder paragraphs. Their examples should remain fictional and modest. They do not cite invented studies or claim that the author worked for a real company. Keep the prose in paragraphs with comfortable spacing. The essay page begins with a back link, subject/date line, title and descriptive deck. A small toolbar provides reading-size selection and the save button. The body follows without interleaved promotions. End with a short byline and a route to the notebook.

## Reading controls

The text-size select has Standard, Larger and Largest choices corresponding to nineteen, twenty-two and twenty-five pixels for the essay body. It changes the reading text only. Do not enlarge navigation or the whole document indiscriminately. The size change should happen immediately and preserve the text in normal flow. It does not need to persist because a small visible control is sufficient for this demonstration. Test the largest setting at a narrow viewport to ensure the body still wraps and no fixed-width element causes overflow.

Save buttons on essay pages and the writing index share the same storage key and allowed essay identifiers. They must agree after navigation. Store only recognized identifiers, deduplicate the saved list and reject malformed storage. A corrupted notebook should fall back to an empty valid state rather than breaking the entire essay page. Do not store arbitrary serialized markup or unnecessary tracking information. The author cannot see what the visitor saves. This boundary belongs in the notebook explanation, not as a repeated warning in every paragraph.

## Notebook behavior

The notebook is a small local companion to the essays. It displays saved entries in a simple list with title, description and a Remove button whose accessible label includes the essay title. If the list is empty, show a clear sentence and a link to Writing. Removing one entry must preserve all other saved entries and the reflection. The list is rendered with DOM creation and textContent so that the implementation does not rely on unsafe interpolation of user text.

Below the saved list, provide a textarea for a reflection of up to five thousand characters. Populate it from valid saved storage. Typing changes the local field and announces that the note has unsaved changes. Save note persists the current value and reports success only after storage succeeds. If storage fails, leave the entered text intact and offer export as the way to keep it. The Export notebook action must include the current textarea value, even if it has not yet been saved locally. This distinction matters because a visitor may export precisely when storage is unavailable.

The export is a Markdown text file with a heading, the titles of saved essays and the current reflection. Create a Blob, prepare a download through an anchor and revoke the temporary URL after use. Report that the file was prepared, not that it is definitely present on the user's disk. No network transmission, account, subscription or email is involved. The notebook should not grow into a task manager, tagging system or social platform. Its usefulness comes from doing one small thing clearly.

## About and colophon

The About page introduces Penn's interest in close observation, interface language and research synthesis. It explains the preference for reading the actual sentence and watching the actual interaction before turning an observation into a general principle. It includes a short section on the work, a note about the local reading features and a colophon. Identify Penn as a fictional writer once in the introduction and keep the rest of the page focused on the practice. Do not attach real client logos, publications, awards or speaking claims to this identity.

The footer is small and contains the name, a colophon or credits link and the collection link. Include the local font license and a credits document describing the original writing and reference research. No favicon or authoring-provider marker should appear in public output, metadata or downloads. Preserve license text when cleaning branding. The downloadable pages should retain all essay text and the local font. They should not require a development server or any private source path to be readable.

## Responsive acceptance and testing

At narrow widths, use twenty-three-pixel side gutters, stack the header, stack the filters and move recent-essay dates above their titles. The reading toolbar may become a vertical arrangement. Avoid squeezing the save button beside a select if that makes either difficult to use. The notebook remove button should remain attached to the correct entry and should not overlap its title. Check the longest title and the largest reading size at three hundred and ninety pixels. The document must not overflow horizontally.

Exercise search with a matching term and a zero-result term. Combine the Research subject with a query and confirm the count. Save an essay, navigate to the notebook, reload, remove it and verify the change. Write a reflection, save it, reload and confirm the value remains. Prepare an export with an unsaved edit and verify the prepared content includes that edit where the browser tools permit inspection. Test invalid stored data if a safe isolated test context is available. Do not alter the user's unrelated browser storage.

Finally, read the rendered essays rather than relying only on source checks. Verify headings, line lengths, paragraph spacing, focus outlines and all relative links. Check script syntax and report the exact browser behaviors exercised. The acceptance condition is a complete minimal writer portfolio with genuine original prose and a small dependable notebook. Extra features do not compensate for weak writing or an unreadable measure. Preserve the limited structure and spend the effort on content, state accuracy and the experience of reading.


## Complete original essays

### A useful pause

On the small space between an instruction and a decision.

There is a particular kind of sentence that appears just before we do something difficult to undo. It is usually short. It may ask whether we are sure, or tell us that a change will be permanent. Because the sentence is small, it is easy to treat it as a finishing detail. I think it is closer to a hinge. The whole experience turns on whether the person understands what comes next.

I noticed this while helping a friend organize a shared archive. We were not designing a product. We were moving old photographs into folders and trying to decide what to keep. A button said remove. The photographs disappeared from the current view, but neither of us knew whether they still existed elsewhere. The word had described an action without describing its boundary. We stopped working and searched for an explanation.

A useful pause would have told us what the action changed. Remove from this folder is different from delete the only copy. The distinction is not a matter of adding more words indiscriminately. It is a matter of choosing the missing fact. Sometimes that fact is where something goes. Sometimes it is who can see it. Sometimes it is whether there is a way back. A sentence earns its place when it gives the decision a clearer shape.

The familiar question, Are you sure?, asks the person to supply certainty without supplying new information. It can become a ritual rather than a real check. We learn to dismiss it because it rarely changes our understanding. A better confirmation names the consequence in ordinary language and gives the alternative a clear label. The pause becomes useful because it contains something we did not already know.

This does not mean every action needs a warning. Too many pauses make an interface harder to use, and warnings lose their force when they appear for trivial changes. The important work is deciding where a pause belongs. Reversible edits can often happen immediately with a visible way to undo them. Irreversible actions need a more deliberate moment. The language should follow the actual behavior rather than compensate for an unclear system.

I now look for these hinges when I read an interface. Before sharing, what is the audience? Before deleting, what is the scope? Before paying, what is the total? Before leaving, what has been saved? These questions are not a checklist to paste into every screen. They are a way to notice what the person must understand at a particular moment. The answer may fit in a label, a sentence or the arrangement of the controls themselves.

Our photograph problem ended with a small experiment. We removed a duplicate from a test folder and checked the original location. Then we wrote down what happened so we would not have to rediscover it. The interface had made us do that work ourselves. A clearer sentence could have spared us the uncertainty, but only if someone had first understood the underlying action.

Writing for a decision is therefore partly an act of investigation. You cannot describe the consequence accurately until you know what the system does. The useful pause comes after that investigation. It is brief because the thinking behind it was not. The goal is not to make a person hesitate. It is to let them continue with a decision that belongs to them.

### Keeping the question

A note on what gets lost when an observation becomes a conclusion.

A notebook can hold a question without needing to answer it. A report is less comfortable with that arrangement. Reports want headings, findings and a sense of arrival. Somewhere between the notebook and the report, a tentative observation can become a confident statement. The change is often so small that nobody notices. A person said this becomes people need this. An uncertainty has quietly acquired a title.

I have been trying to preserve more of the original question in my research notes. Not because every conclusion is suspicious, but because a conclusion becomes more useful when its route is still visible. What prompted the observation? Who was present? What was the person trying to do? Was this the first time the situation occurred, or part of a pattern? These details do not all belong in the headline, but they should remain within reach.

Consider a participant who cannot find a document. It is tempting to record that search is broken. Yet the difficulty might come from an unfamiliar title, a missing permission, a document that was never uploaded or an expectation that the system cannot meet. The visible struggle is real. Its explanation is not yet settled. Good notes can distinguish the event from the interpretation without making either disappear.

One practice that helps is writing the observation and the interpretation in separate sentences. The participant opened three folders before asking a colleague for the file. I wonder whether the folder names match the language used by the team. The first sentence records something witnessed. The second offers a question to investigate. Together they are more informative than a label such as poor information architecture, which compresses the uncertainty before it has been examined.

This separation also makes collaboration easier. Another researcher can agree with the observation and disagree with the interpretation. A designer can suggest a different explanation. A developer can reveal a technical constraint that changes the picture. If the note presents only a finished finding, those conversations become arguments over a conclusion. If it preserves the question, they can become a shared investigation.

There is a practical limit. A team cannot carry every possibility forever. Decisions still have to be made, and a report that refuses to distinguish strong evidence from weak evidence is not especially helpful. Keeping the question does not mean avoiding judgment. It means making the judgment legible: here is what we saw, here is what we think it means, and here is what would change our mind.

I use a small margin note for that last part. It names the next observation that would strengthen or weaken the interpretation. Sometimes it is another conversation. Sometimes it is a review of the actual document names. Sometimes the answer is already available in a support log or a piece of product behavior we have not inspected. The note turns uncertainty into a direction for work instead of a vague disclaimer.

The final report can still be clear. It can recommend a change and explain why that change is worth trying. But it should leave a thread back to the original material. When the circumstances change, that thread helps the next person revise the conclusion without starting from nothing. A good research artifact is not only a record of what we decided. It is a way to continue thinking after the meeting is over.

### Ordinary labels

Why a familiar word can be the most considered choice.

A label has a small job and a large audience. It needs to be understood quickly by people who arrive with different habits, levels of attention and amounts of context. That makes ordinary language a surprisingly demanding material. The most familiar word is not always the right one, but novelty is rarely a useful goal by itself.

When I review a navigation system, I try reading the labels away from the page. A clever phrase can feel obvious beside a large illustration and become mysterious in a menu. The surrounding design had been doing the explanatory work. A good label should survive at least a little separation from that context. It does not need to say everything, but it should point in a recognizable direction.

This is why I like testing labels in a sentence. If you wanted to find your saved essays, where would you look? If the label cannot fit naturally into the answer, it may be asking the reader to learn the interface's private vocabulary. Sometimes a specialized term is necessary. When it is, the product should introduce it deliberately rather than assume that everyone arrived knowing it.

There is room for personality elsewhere. A project description, a welcome note or an editorial heading can carry a distinctive voice. The controls that help someone move through the experience can remain plain. Consistency is not the absence of character. It is a kind of courtesy: the same action receives the same name, and the person can spend their attention on the thing they came to do.

The ordinary label is often the result of several rejected alternatives. It can look effortless because the debate has disappeared from the surface. That is a good outcome. The reader does not need to admire the wording. They need to know where the link will take them, and then arrive somewhere that keeps the promise.

## Exact local interaction behavior

```javascript
const pennEssays=[{"id":"a-useful-pause","title":"A useful pause","dek":"On the small space between an instruction and a decision."},{"id":"keeping-the-question","title":"Keeping the question","dek":"A note on what gets lost when an observation becomes a conclusion."},{"id":"ordinary-labels","title":"Ordinary labels","dek":"Why a familiar word can be the most considered choice."}];
(() => {
  const key = 'penn-notebook-v1';
  const ids = pennEssays.map((e) => e.id);
  let state = { saved: [], note: '' };
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || 'null');
    if (
      parsed &&
      Array.isArray(parsed.saved) &&
      typeof parsed.note === 'string'
    )
      state = {
        saved: [...new Set(parsed.saved.filter((id) => ids.includes(id)))],
        note: parsed.note.slice(0, 5000),
      };
  } catch {}
  function persist(next) {
    try {
      localStorage.setItem(key, JSON.stringify(next));
      state = next;
      return true;
    } catch {
      return false;
    }
  }
  function message(text) {
    const el =
      document.getElementById('save-status') ||
      document.getElementById('notebook-status');
    if (el) el.textContent = text;
  }
  function updateButtons() {
    document.querySelectorAll('[data-save]').forEach((b) => {
      const saved = state.saved.includes(b.dataset.save);
      b.setAttribute('aria-pressed', String(saved));
      b.textContent = saved ? 'Saved to notebook' : 'Save to notebook';
    });
  }
  document.querySelectorAll('[data-save]').forEach((b) =>
    b.addEventListener('click', () => {
      const id = b.dataset.save;
      const exists = state.saved.includes(id);
      const next = {
        ...state,
        saved: exists
          ? state.saved.filter((x) => x !== id)
          : [...state.saved, id],
      };
      if (!persist(next)) {
        message(
          'Browser storage is unavailable. The saved list was not changed.',
        );
        return;
      }
      updateButtons();
      message(
        exists
          ? 'Essay removed from your notebook.'
          : 'Essay saved to your notebook.',
      );
    }),
  );
  updateButtons();
  const query = document.getElementById('query'),
    topic = document.getElementById('topic');
  if (query) {
    function filter() {
      let count = 0;
      const q = query.value.trim().toLowerCase();
      document.querySelectorAll('.essay-list article').forEach((a) => {
        a.hidden = !(
          a.dataset.search.includes(q) &&
          (topic.value === 'All subjects' || a.dataset.topic === topic.value)
        );
        if (!a.hidden) count++;
      });
      document.getElementById('count').textContent =
        count + ' ' + (count === 1 ? 'essay' : 'essays');
      document.getElementById('empty').hidden = count > 0;
    }
    query.addEventListener('input', filter);
    topic.addEventListener('change', filter);
    document
      .querySelector('.filters')
      .addEventListener('submit', (e) => e.preventDefault());
  }
  const size = document.getElementById('text-size');
  if (size)
    size.addEventListener('change', () => {
      document.querySelector('.essay-body').style.fontSize = size.value + 'px';
    });
  const list = document.getElementById('saved-list');
  if (list) {
    function render() {
      list.replaceChildren();
      if (!state.saved.length) {
        const p = document.createElement('p');
        p.textContent =
          'No essays saved yet. Choose one from the writing page.';
        const a = document.createElement('a');
        a.href = 'writing.html';
        a.textContent = 'Browse writing →';
        list.append(p, a);
        return;
      }
      for (const id of state.saved) {
        const essay = pennEssays.find((e) => e.id === id),
          entry = document.createElement('article');
        entry.className = 'saved-entry';
        const copy = document.createElement('div'),
          h = document.createElement('h2'),
          a = document.createElement('a');
        a.href = id + '.html';
        a.textContent = essay.title;
        h.append(a);
        const p = document.createElement('p');
        p.textContent = essay.dek;
        copy.append(h, p);
        const remove = document.createElement('button');
        remove.textContent = 'Remove';
        remove.setAttribute('aria-label', 'Remove ' + essay.title);
        remove.addEventListener('click', () => {
          if (
            !persist({ ...state, saved: state.saved.filter((x) => x !== id) })
          ) {
            message('Storage unavailable. The essay was not removed.');
            return;
          }
          render();
          message('Essay removed from this notebook.');
        });
        entry.append(copy, remove);
        list.append(entry);
      }
    }
    render();
    const note = document.getElementById('reflection');
    note.value = state.note;
    note.addEventListener('input', () =>
      message('Unsaved note. Choose Save note to keep it in this browser.'),
    );
    document
      .getElementById('save-reflection')
      .addEventListener('click', () =>
        message(
          persist({ ...state, note: note.value })
            ? 'Your note is saved in this browser.'
            : 'Storage unavailable. Export the notebook to keep your current note.',
        ),
      );
    document.getElementById('export-notebook').addEventListener('click', () => {
      const text =
        '# Penn reading notebook\n\n## Saved essays\n\n' +
        state.saved
          .map((id) => '- ' + pennEssays.find((e) => e.id === id).title)
          .join('\n') +
        '\n\n## Reflection\n\n' +
        note.value +
        '\n';
      const url = URL.createObjectURL(
        new Blob([text], { type: 'text/markdown;charset=utf-8' }),
      );
      const a = document.createElement('a');
      a.href = url;
      a.download = 'penn-reading-notebook.md';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      message('Notebook prepared for download, including your current note.');
    });
  }
})();

```
