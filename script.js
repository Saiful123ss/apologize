const surpriseBtn = document.getElementById("surpriseBtn");
const overlay = document.getElementById("overlay");
const music = document.getElementById("bg-music");
const heartsContainer = document.getElementById("hearts-container");

surpriseBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  music.play();

  // generate floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 600);
});
