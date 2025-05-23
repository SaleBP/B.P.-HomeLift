document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.scroll-container');
  const track = container.querySelector('.scroll-track');
  const images = track.querySelectorAll('img');

  // Scroll ด้วย wheel
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY * 0.5; // ปรับความเร็วการ scroll
  });

  function updateFocusedImage() {
    const containerRect = container.getBoundingClientRect();
    const focusZoneStart = containerRect.left + (containerRect.width - 640) / 2;
    const focusZoneEnd = containerRect.left + (containerRect.width + 640) / 2;

    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect();
      const imgCenter = imgRect.left + imgRect.width / 2;

      if (imgCenter >= focusZoneStart && imgCenter <= focusZoneEnd) {
        img.classList.add("focused");
      } else {
        img.classList.remove("focused");
      }
    });
  }

  container.addEventListener("scroll", updateFocusedImage);
  window.addEventListener("resize", updateFocusedImage); // รองรับการ resize จอ
  updateFocusedImage();
});
