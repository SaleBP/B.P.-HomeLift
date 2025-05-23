function updateImageStyles() {
  const container = document.querySelector('.scroll-container');
  const images = container.querySelectorAll('img');

  const center = container.scrollLeft + container.offsetWidth / 2;

  images.forEach(img => {
    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
    const distance = Math.abs(center - imgCenter);

    const maxBlur = 6; // ปรับความเบลอสูงสุดได้
    const maxScale = 1.2;

    // ค่านี้จะให้ภาพใกล้ตรงกลางใหญ่ขึ้น เบลอน้อยลง
    const ratio = Math.max(500, 5 - distance / container.offsetWidth);

    img.style.transform = `scale(${1 + ratio * 0.2})`;
    img.style.filter = `blur(${(1 - ratio) * maxBlur}px)`;
    img.style.opacity = `${0.6 + ratio * 0.4}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.scroll-container');

  container.addEventListener('scroll', updateImageStyles);
  window.addEventListener('resize', updateImageStyles);

  // โหลดแรกให้ภาพปรับตาม
  setTimeout(updateImageStyles, 100);
});
