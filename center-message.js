window.addEventListener('scroll', () => {
  const img = document.querySelector('.parallax-image');
  const section = document.querySelector('.center-message');

  if (!img || !section) return;

  const rect = section.getBoundingClientRect();
  const offset = rect.top;
  const windowHeight = window.innerHeight;

  if (offset < windowHeight && offset > -rect.height) {
    const scrollProgress = (windowHeight - offset) / (windowHeight + rect.height);
    const moveY = (scrollProgress - 0.5) * 40; // ปรับ 40px สำหรับความเร็วภาพ
    img.style.transform = `translateY(${moveY}px)`;
  }
});