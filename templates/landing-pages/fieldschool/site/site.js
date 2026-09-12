const courses = JSON.parse(
  document.getElementById('fieldschool-data').textContent,
);
const storageKey = 'fieldschool-notebook-v1';
function load() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return value && typeof value === 'object' && !Array.isArray(value)
      ? value
      : {};
  } catch {
    return {};
  }
}
let notebook = load();
const say = (message) =>
  document
    .querySelectorAll('[data-status]')
    .forEach((el) => (el.textContent = message));
function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(notebook));
    say('Saved in this browser.');
    return true;
  } catch {
    say(
      'Browser storage is unavailable. Export your notebook to keep this session.',
    );
    return false;
  }
}
function download(text, name) {
  const url = URL.createObjectURL(
    new Blob([text], { type: 'text/markdown;charset=utf-8' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const search = document.getElementById('course-search');
function filterCourses() {
  const query = search.value.trim().toLowerCase();
  const subject = document.getElementById('subject').value;
  let count = 0;
  document.querySelectorAll('[data-course]').forEach((el) => {
    const item = courses.find((course) => course.id === el.dataset.course);
    const visible =
      (!subject || item.subject === subject) &&
      `${item.name} ${item.subject} ${item.lead}`.toLowerCase().includes(query);
    el.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('course-count').textContent =
    `${count} ${count === 1 ? 'course' : 'courses'}`;
  document.getElementById('no-courses').hidden = count !== 0;
}
if (search) {
  search.addEventListener('input', filterCourses);
  document.getElementById('subject').addEventListener('change', filterCourses);
  document.getElementById('reset-search').addEventListener('click', () => {
    search.value = '';
    document.getElementById('subject').value = '';
    filterCourses();
  });
  filterCourses();
}
function luminance(hex) {
  const values = hex
    .slice(1)
    .match(/../g)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}
function contrast(a, b) {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
const lab = document.getElementById('lab');
const compactLayout = matchMedia('(max-width: 700px)');
function updateColor() {
  const background = document.getElementById('paper').value;
  const ink = document.getElementById('ink').value;
  const specimen = document.getElementById('specimen');
  specimen.style.backgroundColor = background;
  specimen.style.color = ink;
  const ratio = contrast(background, ink);
  document.getElementById('lab-output').textContent =
    `${ratio.toFixed(2)}:1 — ${ratio >= 4.5 ? 'Meets the AA ratio for ordinary text' : 'Below the AA ratio for ordinary text'}`;
  return { background, ink, contrast: ratio.toFixed(2) };
}
function updateType() {
  const size = document.getElementById('size').value;
  const leading = document.getElementById('leading').value;
  const measure = document.getElementById('measure').value;
  const family = document.getElementById('family').value;
  const specimen = document.getElementById('specimen');
  specimen.style.setProperty('--size', size + 'px');
  specimen.style.setProperty('--leading', leading);
  specimen.style.setProperty('--measure', measure + 'ch');
  specimen.style.fontFamily =
    family === 'serif' ? 'Georgia, serif' : 'Field, Arial, sans-serif';
  document.getElementById('lab-output').textContent =
    `${size}px / ${leading} line height / ${measure}ch / ${family}`;
  return { size, leading, measure, family };
}
function updateLayout() {
  const columns = document.getElementById('columns').value;
  const gap = document.getElementById('gap').value;
  const narrow = document.getElementById('narrow').checked;
  const specimen = document.getElementById('specimen');
  specimen.style.setProperty('--columns', columns);
  specimen.style.setProperty('--gap', gap + 'px');
  specimen.classList.toggle('narrow', narrow);
  const composition = columns === '2fr 1fr' ? 'Two-to-one composition' : 'Balanced composition';
  const layoutDescription = narrow
    ? 'Narrow stacked preview'
    : compactLayout.matches
      ? `Stacked on this screen; ${composition.toLowerCase()} on wider screens`
      : composition;
  document.getElementById('lab-output').textContent =
    `${layoutDescription} / ${gap}px gap`;
  return { columns, gap, narrow };
}
const updates = { color: updateColor, type: updateType, layout: updateLayout };
if (lab) {
  const id = lab.dataset.lesson;
  const saved = notebook[id];
  const controls = [...lab.querySelectorAll('input,select')];
  if (saved?.settings && typeof saved.settings === 'object') {
    const aliases = { paper: 'background' };
    controls.forEach((control) => {
      const value = saved.settings[aliases[control.id] || control.id];
      if (control.type === 'checkbox') {
        control.checked = value === true;
        return;
      }
      if (typeof value !== 'string') return;
      if (control.type === 'color' && !/^#[0-9a-f]{6}$/i.test(value)) return;
      if (
        control.tagName === 'SELECT' &&
        ![...control.options].some((option) => option.value === value)
      )
        return;
      if (
        control.type === 'range' &&
        !(
          Number(value) >= Number(control.min) &&
          Number(value) <= Number(control.max)
        )
      )
        return;
      control.value = value;
    });
  }
  const reflect = updates[id];
  if (id === 'layout') compactLayout.addEventListener('change', reflect);
  controls.forEach((control) => control.addEventListener('input', reflect));
  reflect();
  const note = document.getElementById('reflection-note');
  note.value = typeof saved?.note === 'string' ? saved.note.slice(0, 4000) : '';
  const complete = document.getElementById('complete-lesson');
  function completionState() {
    const done = notebook[id]?.complete === true;
    complete.setAttribute('aria-pressed', String(done));
    complete.textContent = done
      ? 'Marked complete — undo'
      : 'Mark lesson complete';
  }
  function saveExperiment() {
    notebook[id] = {
      ...notebook[id],
      settings: reflect(),
      note: note.value.trim().slice(0, 4000),
    };
    persist();
  }
  document
    .getElementById('save-experiment')
    .addEventListener('click', saveExperiment);
  complete.addEventListener('click', () => {
    notebook[id] = {
      ...notebook[id],
      complete: notebook[id]?.complete !== true,
      settings: reflect(),
      note: note.value.trim().slice(0, 4000),
    };
    persist();
    completionState();
  });
  completionState();
}
function renderNotebook() {
  const list = document.getElementById('notes');
  if (!list) return;
  list.replaceChildren();
  const saved = courses.filter(
    (course) => notebook[course.id] && typeof notebook[course.id] === 'object',
  );
  document.getElementById('empty-notebook').hidden = saved.length > 0;
  document.getElementById('progress').textContent =
    `${courses.filter((course) => notebook[course.id]?.complete === true).length} of 3 lessons marked complete`;
  document.getElementById('export-notebook').disabled = saved.length === 0;
  document.getElementById('clear-notebook').disabled = saved.length === 0;
  saved.forEach((course) => {
    const entry = notebook[course.id];
    const article = document.createElement('article');
    article.className = 'note';
    const heading = document.createElement('h2');
    heading.textContent = course.name;
    const state = document.createElement('p');
    state.textContent =
      entry.complete === true
        ? 'Lesson marked complete'
        : 'Experiment in progress';
    const note = document.createElement('p');
    note.textContent =
      typeof entry.note === 'string' && entry.note
        ? entry.note.slice(0, 4000)
        : 'No reflection written yet.';
    const settings = document.createElement('pre');
    settings.textContent = JSON.stringify(entry.settings || {}, null, 2);
    const link = document.createElement('a');
    link.href = course.id + '.html';
    link.className = 'button';
    link.textContent = 'Continue experimenting ↗';
    article.append(heading, state, note, settings, link);
    list.append(article);
  });
}
renderNotebook();
document.getElementById('export-notebook')?.addEventListener('click', () => {
  const entries = courses
    .filter((course) => notebook[course.id])
    .map((course) => {
      const entry = notebook[course.id];
      return `## ${course.name}\n\n${entry.complete === true ? 'Marked complete' : 'In progress'}\n\n${typeof entry.note === 'string' ? entry.note.slice(0, 4000) : ''}\n\nSettings:\n${JSON.stringify(entry.settings || {}, null, 2)}\n`;
    });
  download(
    '# Fieldschool notebook\n\n' + entries.join('\n'),
    'fieldschool-notebook.md',
  );
  say('Notebook download prepared.');
});
document.getElementById('clear-notebook')?.addEventListener('click', () => {
  document.getElementById('clear-confirmation').hidden = false;
  document.getElementById('cancel-clear').focus();
});
document.getElementById('cancel-clear')?.addEventListener('click', () => {
  document.getElementById('clear-confirmation').hidden = true;
  document.getElementById('clear-notebook').focus();
});
document.getElementById('confirm-clear')?.addEventListener('click', () => {
  const previous = notebook;
  notebook = {};
  if (!persist()) {
    notebook = previous;
    say('The notebook could not be cleared. Your notes are still available to export.');
    return;
  }
  renderNotebook();
  document.getElementById('clear-confirmation').hidden = true;
  say('Notebook cleared in this browser.');
  document.querySelector('#empty-notebook a').focus();
});
