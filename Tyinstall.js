document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.scroll-container');
  const track = container.querySelector('.scroll-track');
  const images = track.querySelectorAll('img');

  // Scroll ด้วย wheel
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY * 3; // ปรับความเร็วการ scroll
  });

  function updateFocusedImage() {
    const containerRect = container.getBoundingClientRect();
    const focusZoneStart = containerRect.left + (containerRect.width - 640) / 2;
    const focusZoneEnd = containerRect.left + (containerRect.width + 640) / 2;

    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect();
      const imgCenter = imgRect.left + imgRect.width / 2;

      if (imgCenter >= focusZoneStart && imgCenter <= focusZoneEnd) {
        img.classList.add("focused");
      } else {
        img.classList.remove("focused");
      }
    });
  }

  container.addEventListener("scroll", updateFocusedImage);
  window.addEventListener("resize", updateFocusedImage); // รองรับการ resize จอ
  updateFocusedImage();
});


// Typeinstall.js

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");

  if (scrollContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // ป้องกันการ drag image ออกไป
    const images = scrollContainer.querySelectorAll("img");
    images.forEach(img => {
      img.addEventListener("dragstart", (e) => e.preventDefault());
    });

        function momentumScroll() {
      scrollContainer.scrollLeft -= velocity;
      velocity *= 0.99; // ค่าหน่วง (0.9 = ลื่น, 0.99 = ลื่นมาก, 0.8 = หยุดไว)

      if (Math.abs(velocity) > 0.5) {
        momentumID = requestAnimationFrame(momentumScroll);
      }
    }

    scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5; // ปรับความไว
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }
});

