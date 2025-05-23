document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.scroll-container');
  const track = container.querySelector('.scroll-track');
  const images = track.querySelectorAll('img');

  // 📌 เลื่อนด้วย scroll wheel แนวนอน
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  });

  // 📌 ปรับ blur / scale ตามตำแหน่ง scroll
  const updateImageStyles = () => {
    const center = container.scrollLeft + container.offsetWidth / 2;

    images.forEach((img) => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const distance = Math.abs(center - imgCenter);
      const maxDistance = container.offsetWidth / 2;

      const scale = 1 + (1 - distance / maxDistance) * 0.2;
      const blur = Math.min(5, (distance / maxDistance) * 5);
      const opacity = 1 - (distance / maxDistance) * 0.4;

      img.style.transform = `scale(${scale})`;
      img.style.filter = `blur(${blur}px)`;
      img.style.opacity = opacity.toFixed(2);
    });
  };

  container.addEventListener('scroll', updateImageStyles);
  window.addEventListener('resize', updateImageStyles);
  updateImageStyles(); // เรียกตอนโหลดเสร็จ
});
