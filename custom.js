document.addEventListener("DOMContentLoaded", () => {
  // ✅ 1. Fade-up observer
  const fadeUps = document.querySelectorAll(".fade-up-trigger");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  fadeUps.forEach(el => observer.observe(el));

  // ✅ 2. Hover (แบบใช้ภาพเดียว preview)
  const items = document.querySelectorAll(".option-items li");
  const detailText = document.getElementById("option-detail");
  const previewImg = document.getElementById("option-preview");

  items.forEach((item, index) => {
    // หากใช้แบบเปลี่ยนข้อความ / รูปเดียว
    item.addEventListener("mouseenter", () => {
      detailText.textContent = `ภาษาไทย ${index + 1}`;
      previewImg.src = item.dataset.img;
    });
  });

  // ✅ 3. Hover (แบบใช้หลายภาพ overlay แยกซ้ายขวา)
  const previews = document.querySelectorAll(".option-preview-image");
  const detailImages = document.querySelectorAll(".option-detail-image");

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      // ซ่อนทั้งหมดก่อน
      previews.forEach(p => p.classList.remove("active"));
      detailImages.forEach(d => d.classList.remove("active"));

      // แสดงเฉพาะภาพที่ตรงกับ index
      const preview = document.getElementById(`preview-${index}`);
      const detail = document.getElementById(`detail-${index}`);
      if (preview) preview.classList.add("active");
      if (detail) detail.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
      previews.forEach(p => p.classList.remove("active"));
      detailImages.forEach(d => d.classList.remove("active"));
    });
  });
});

