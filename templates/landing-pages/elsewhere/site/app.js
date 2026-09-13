const examples = {
  meeting: {
    title: 'Good meetings deserve a next step.', count: '01 / 03',
    source: 'Monday’s product check-in',
    input: '“Maya will share the new homepage by Thursday. Leo is checking the mobile flow. Let’s review both at our Friday check-in.”',
    ready: 'Preview a prepared action plan.', resultTitle: 'Your action plan is ready to review',
    rows: [['Share the new homepage', 'Maya · Thursday'], ['Check the mobile flow', 'Leo · This week'], ['Review the designs together', 'Friday check-in']],
    finish: 'Three next steps, ready for your review.'
  },
  inbox: {
    title: 'A little clarity in a crowded inbox.', count: '02 / 03',
    source: 'Three messages, one place to start',
    input: '“Could you approve the final artwork today?” · “Here’s your monthly newsletter.” · “Sharing the notes from yesterday—no action needed.”',
    ready: 'Preview a prepared inbox summary.', resultTitle: 'Here’s what needs your attention',
    rows: [['Review and approve the final artwork', 'Action · Today'], ['Monthly newsletter', 'Read when ready'], ['Yesterday’s meeting notes', 'For reference']],
    finish: 'One priority, with the context you need.'
  },
  weekly: {
    title: 'See the week without chasing updates.', count: '03 / 03',
    source: 'Your team’s Friday updates',
    input: '“The homepage is ready for review. Mobile testing is complete. We’re still waiting on the new product photos before we can launch.”',
    ready: 'Preview a prepared weekly update.', resultTitle: 'Your week, clearly laid out',
    rows: [['Homepage design', 'Ready for review'], ['Mobile testing', 'Complete'], ['Product photography', 'Launch blocker']],
    finish: 'Progress and the next blocker, in one view.'
  }
};
let active = 'meeting';
let runId = 0;
const runButton = document.querySelector('#run-example');
const result = document.querySelector('#result-area');
const status = document.querySelector('#demo-status');
const steps = [...document.querySelectorAll('.process-steps span')];
function resetExample(key) {
  runId += 1;
  active = key;
  const data = examples[key];
  document.querySelectorAll('.workflow-choice').forEach(button => {
    const selected = button.dataset.workflow === key;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#demo-title').textContent = data.title;
  document.querySelector('#source-label').textContent = data.source;
  document.querySelector('#source-text').textContent = data.input;
  status.textContent = data.ready;
  result.classList.remove('populated');
  result.innerHTML = '<div class="result-empty"><span class="empty-mark" aria-hidden="true">✳</span><p>The details, gathered.<br><strong>The next step, clearer.</strong></p></div>';
  steps.forEach(step => step.classList.remove('done'));
  runButton.disabled = false;
  runButton.innerHTML = 'Run example <span aria-hidden="true">↗</span>';
}
function showResult(data) {
  const content = document.createElement('div');
  content.className = 'result-content';
  const title = document.createElement('p');
  title.className = 'result-title';
  title.textContent = '✓  ' + data.resultTitle;
  content.append(title);
  data.rows.forEach(([task, owner]) => {
    const row = document.createElement('div');
    row.className = 'result-row';
    const label = document.createElement('span');
    label.textContent = task;
    const detail = document.createElement('span');
    detail.textContent = owner;
    row.append(label, detail);
    content.append(row);
  });
  result.replaceChildren(content);
  result.classList.add('populated');
}
document.querySelectorAll('.workflow-choice').forEach(button => {
  button.addEventListener('click', () => resetExample(button.dataset.workflow));
});
runButton.addEventListener('click', async () => {
  const currentRun = ++runId;
  const data = examples[active];
  runButton.disabled = true;
  runButton.textContent = 'Preparing example…';
  steps.forEach(step => step.classList.remove('done'));
  const messages = ['Reading the sample input…', 'Organizing the key details…', 'Preparing your example…'];
  for (let index = 0; index < steps.length; index += 1) {
    if (currentRun !== runId) return;
    status.textContent = messages[index];
    steps[index].classList.add('done');
    await new Promise(resolve => setTimeout(resolve, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 60 : 420));
  }
  if (currentRun !== runId) return;
  showResult(data);
  status.textContent = data.finish;
  runButton.disabled = false;
  runButton.innerHTML = 'Run again <span aria-hidden="true">↻</span>';
});
