//your JS code here. If required.
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progressLine = document.querySelector('.progress-line::after'); // We’ll handle this dynamically
const progressContainer = document.querySelector('.progress-line');

let currentActive = 1;

function updateProgress() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update line
  const activeCount = document.querySelectorAll('.circle.active').length;
  const percentage = ((activeCount - 1) / (circles.length - 1)) * 100;
  progressContainer.style.setProperty('--progress-width', `${percentage}%`);

  // Handle buttons
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    updateProgress();
  }
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    updateProgress();
  }
});

// Add dynamic styling to progress line using a CSS variable
const style = document.createElement('style');
style.innerHTML = `
  .progress-line::after {
    width: var(--progress-width, 0%);
  }
`;
document.head.appendChild(style);
updateProgress();
