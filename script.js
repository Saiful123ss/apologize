const surpriseBtn = document.getElementById('surpriseBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

surpriseBtn.addEventListener('click', () => {
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});
