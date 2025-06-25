document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".scroll-item");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;

    items.forEach((item, i) => {
      const itemTop = i * screenHeight;
      const itemBottom = itemTop + screenHeight;

      if (scrollY >= itemTop && scrollY < itemBottom) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});