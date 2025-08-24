// Modal open/close
const surpriseBtn = document.querySelector('.surprise-btn');
const modal = document.querySelector('.surprise-modal');
const closeBtn = document.querySelector('.close-btn');

surpriseBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';
  document.querySelector('.hearts').appendChild(heart);

  // Random position
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Generate hearts
setInterval(createHeart, 500);
