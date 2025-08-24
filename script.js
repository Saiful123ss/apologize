// --- Background floating hearts ---
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 8 + 5;
    this.speed = Math.random() * 1 + 0.5;
    this.opacity = Math.random();
  }
  draw() {
    ctx.fillStyle = `rgba(255,105,180,${this.opacity})`;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x - this.size, this.y - this.size,
                      this.x - this.size * 2, this.y + this.size / 3,
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x + this.size * 2, this.y + this.size / 3,
                      this.x + this.size, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
  }
  update() {
    this.y -= this.speed;
    if (this.y < -10) this.y = canvas.height + 20;
    this.draw();
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}
for (let i = 0; i < 40; i++) hearts.push(new Heart());
animate();

// --- Typewriter effect ---
const letterText = `My love,\n\nI’m truly sorry for my mistakes and the pain I may have caused. 
I never want to hurt you. All I want is to see you happy.\n\nPlease forgive me and give me a chance to prove myself.`;
let i = 0;
function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("letter").textContent += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// --- Music Toggle ---
const music = new Audio("https://www.bensound.com/bensound-music/bensound-romantic.mp3");
document.getElementById("musicToggle").addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

// --- Confetti Effect ---
document.getElementById("confettiBtn").addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
});

// --- Confetti CSS via JS ---
const style = document.createElement("style");
style.textContent = `
.confetti {
  position: fixed;
  top: 0;
  width: 8px; height: 8px;
  background: hsl(${Math.random()*360}, 100%, 70%);
  animation: fall linear forwards;
}
@keyframes fall {
  to { transform: translateY(100vh) rotate(720deg); }
}`;
document.head.appendChild(style);
