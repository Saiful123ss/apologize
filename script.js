const surpriseBtn = document.getElementById('surpriseBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

surpriseBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.classList.add('show');
  }, 200);
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);
});
