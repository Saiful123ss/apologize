const button = document.querySelector(".surprise-btn");
const container = document.getElementById("hearts-container");

button.addEventListener("click", () => {
  // Create floating hearts
  for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Small bounce effect on button
  button.style.transform = "scale(1.15)";
  setTimeout(() => button.style.transform = "scale(1)", 300);
});
