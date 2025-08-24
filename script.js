// Open modal
document.querySelector(".surprise-btn").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
});

// Close modal
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    document.querySelector(".modal").style.display = "none";
  }
});
