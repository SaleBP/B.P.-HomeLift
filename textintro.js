document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".textintro span");

  letters.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`;
  });
});