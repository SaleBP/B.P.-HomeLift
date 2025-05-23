document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.scroll-container');
  const track = container.querySelector('.scroll-track');
  const images = track.querySelectorAll('img');

  // 📌 เลื่อนด้วย scroll wheel แนวนอน
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY * 0.5;
  });

function updateFocusedImage() {
  const images = document.querySelectorAll(".row-img");
  const containerCenter = container.offsetLeft + container.offsetWidth / 2;

  let minDistance = Infinity;
  let focusedImage = null;

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const imgCenter = rect.left + rect.width / 2;
    const distance = Math.abs(containerCenter - imgCenter);

    if (distance < minDistance) {
      minDistance = distance;
      focusedImage = img;
    }
  });

  images.forEach((img) => img.classList.remove("focused"));
  if (focusedImage) focusedImage.classList.add("focused");
}

// เรียกฟังก์ชันนี้เมื่อ scroll
container.addEventListener("scroll", () => {
  updateFocusedImage();
});

// เรียกทันทีเมื่อโหลด
updateFocusedImage();