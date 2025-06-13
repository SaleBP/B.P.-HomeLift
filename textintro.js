document.addEventListener('scroll', () => {
  const text = document.querySelector('.textintro');
  const hero = document.querySelector('.hero');
  const heroRect = hero.getBoundingClientRect();

  // คำนวณสัดส่วน scroll ภายใน hero
  const scrollRatio = Math.min(Math.max(1 - heroRect.bottom / heroRect.height, 0), 1);

  // ปรับ Y: เริ่มที่ 30 → จบที่ 0
  const translateY = 30 - scrollRatio * 30;

  text.style.transform = `translateX(-50%) translateY(${translateY}px)`;
});