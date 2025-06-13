document.addEventListener('DOMContentLoaded', function () {
  const textintro = document.querySelector('.textintro');

  function checkVisibility() {
    const rect = textintro.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      textintro.classList.add('visible');
      window.removeEventListener('scroll', checkVisibility); // ทำครั้งเดียว
    }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // ตรวจทันทีเผื่อโหลดมาถึงพอดี
});