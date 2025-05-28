document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("quickbar-toggle");
  const menu = document.getElementById("quickbar-menu");

  toggle.addEventListener("click", function() {
    menu.classList.toggle("show");
  });
});