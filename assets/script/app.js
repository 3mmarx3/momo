const questions = Array.from(document.querySelectorAll('.question-item'));
const progressFill = document.querySelector('.progress-fill');
const progressPercent = document.querySelector('.progress-percent');
const restartButton = document.getElementById('restart-button');
const helpButton = document.getElementById('help-button');
let current = 0;

function updateProgress() {
  const percent = Math.round((current / (questions.length - 1)) * 100);
  progressFill.style.width = percent + '%';
  progressPercent.textContent = percent + '%';
}

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.classList.toggle('active', i === index);
  });
  current = index;
  updateProgress();
}

function handleAnswer(e) {
  const button = e.target;
  const parent = button.closest('.question-item');
  parent.querySelectorAll('.answer-button').forEach(b => b.classList.remove('selected'));
  button.classList.add('selected');
  const next = button.getAttribute('data-next');
  if (next === 'finish') {
    window.location.href = 'https://www.google.com';
  } else {
    const nextIndex = questions.findIndex(q => q.id === next);
    if (nextIndex >= 0) showQuestion(nextIndex);
  }
}

questions.forEach(q => {
  q.querySelectorAll('.answer-button').forEach(btn => {
    btn.addEventListener('click', handleAnswer);
  });
});

restartButton.addEventListener('click', () => {
  questions.forEach(q => {
    q.querySelectorAll('.answer-button').forEach(b => b.classList.remove('selected'));
  });
  showQuestion(0);
});

helpButton.addEventListener('click', () => {
  alert('Contact us for any assistance.');
});

showQuestion(0);