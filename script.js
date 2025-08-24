// Typewriter effect
const text = "I’m deeply sorry for the times I hurt you. Please forgive me. You mean the world to me, and I’ll do everything to keep your smile forever. 💕";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("apology-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Promises progress
const checkboxes = document.querySelectorAll("#promise-list input");
const progressCount = document.getElementById("progress-count");

function updateProgress() {
  const checked = document.querySelectorAll("#promise-list input:checked").length;
  const total = checkboxes.length;
  const percent = Math.round((checked / total) * 100);
  progressCount.textContent = percent + "%";
}
checkboxes.forEach(cb => cb.addEventListener("change", updateProgress));

// Floating hearts background
const canvas = document.getElementById("hearts-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.alpha = Math.random();
  }
  draw() {
    ctx.fillStyle = `rgba(230,57,123,${this.alpha})`;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x - this.size/2, this.y - this.size/2, 
                      this.x - this.size, this.y + this.size/3, 
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x + this.size, this.y + this.size/3, 
                      this.x + this.size/2, this.y - this.size/2, 
                      this.x, this.y);
    ctx.fill();
  }
  update() {
    this.y -= this.speed;
    if (this.y < -this.size) {
      this.y = canvas.height + this.size;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function initHearts() {
  hearts = [];
  for (let i = 0; i < 50; i++) {
    hearts.push(new Heart());
  }
}
function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animateHearts);
}
initHearts();
animateHearts();

// Music toggle
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  playing = !playing;
});
