document.addEventListener('scroll', () => {
  const text = document.querySelector('.textintro');
  const hero = document.querySelector('.hero');
  const heroRect = hero.getBoundingClientRect();

  // scrollRatio: 0 (ยังไม่ถึง), 1 (ถึงท้าย hero)
  const scrollRatio = Math.min(Math.max(1 - heroRect.bottom / heroRect.height, 0), 1);

  // ยิ่ง scroll มาก ยิ่งลด translateY (เริ่มที่ 30 → ไปถึง 0)
  const translateY = 30 - scrollRatio * 30;

  text.style.transform = `translateX(-50%) translateY(${translateY}px)`;
});
