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
  });

const previews = document.querySelectorAll(".option-preview-image");

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".option-items li");
  const previews = document.querySelectorAll(".option-preview-image");
  const allDetailImages = document.querySelectorAll("[data-group]");

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      // ซ่อนทั้งหมดก่อน
      previews.forEach(p => p.classList.remove("active"));
      allDetailImages.forEach(img => img.classList.remove("active"));

      // ✅ แสดงเฉพาะกลุ่มที่มี data-group เท่ากับ index
      const groupImages = document.querySelectorAll(`[data-group="${index}"]`);
      groupImages.forEach(img => img.classList.add("active"));

      // ถ้ามีภาพ preview ทางขวา (เลือกได้)
      const preview = document.getElementById(`preview-${index}`);
      if (preview) preview.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
      previews.forEach(p => p.classList.remove("active"));
      allDetailImages.forEach(img => img.classList.remove("active"));
    });
  });
});


