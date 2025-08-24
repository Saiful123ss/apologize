// Typing effect
const text = "No matter what happens,\nI just want you in my life.\nPlease stay with me ❤️";
let i = 0;
const speed = 60;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;

// Floating hearts continuously
const container = document.getElementById("hearts-container");
setInterval(() => {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 800);

// Surprise popup
const btn = document.querySelector(".surprise-btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
