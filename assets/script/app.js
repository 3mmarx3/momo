
    const steps = document.querySelectorAll('.quiz-step');
    const progressIndicator = document.getElementById('progressIndicator');
    const progressLabel = document.getElementById('progressLabel');
    const resetBtn = document.getElementById('resetBtn');
    const supportBtn = document.getElementById('supportBtn');

    let currentIndex = 0;

    function updateProgress() {
      const totalSteps = steps.length;
      const percent = Math.round(((currentIndex + 1) / totalSteps) * 100);
      progressIndicator.style.width = percent + '%';
      progressLabel.textContent = percent + '%';
    }

    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle('active', i === index);
      });
      currentIndex = index;
      updateProgress();
    }

    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target === 'complete') {
          window.location.href = 'https://www.google.com';
        } else {
          const nextStep = document.getElementById(target);
          const nextIndex = parseInt(nextStep.getAttribute('data-index')) - 1;
          showStep(nextIndex);
        }
      });
    });

    resetBtn.addEventListener('click', () => {
      showStep(0);
    });

    supportBtn.addEventListener('click', () => {
      alert('Contact support for assistance.');
    });

    updateProgress();
