document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById('scroll-track');
  if (!track) {
    console.error("ไม่เจอ scroll-track");
    return;
  }

  const container = track.parentElement;
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  container.scrollLeft = track.scrollWidth / 2; // เริ่มตรงกลางเพื่อ loop

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });

  container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;

    const maxScroll = track.scrollWidth / 2;
    if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll;
    } else if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft = maxScroll;
    }
  });
});
