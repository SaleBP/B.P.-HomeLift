document.addEventListener("DOMContentLoaded", function () {
  // === เปิด/ปิดแชทบอท ===
  const chatIcon = document.getElementById("chat-icon");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const chatMessages = document.getElementById("chat-messages");

  chatIcon.addEventListener("click", function () {
    chatWindow.style.display =
      chatWindow.style.display === "none" || chatWindow.style.display === ""
        ? "flex"
        : "none";
  });

  closeChat.addEventListener("click", function () {
    chatWindow.style.display = "none";
  });

  function scrollToLatestMessage() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // === Fade-in Animation on Scroll ===
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });

  // === ฟังก์ชันตอบสนองของแชทบอท ===
  window.handleOption = function (option) {
    const response = document.createElement("div");
    response.className = "chat-message user";
    response.textContent = "คุณเลือก: " + option;
    chatMessages.appendChild(response);

    const botReply = document.createElement("div");
    botReply.className = "chat-message bot";

    if (option === "บริการ") {
      botReply.textContent = "เรามีบริการติดตั้งและบำรุงรักษาลิฟต์บ้านครบวงจรครับ";
    } else if (option === "ปรับแต่งลิฟต์") {
      botReply.textContent = "สามารถเลือกสี วัสดุ และขนาดลิฟต์ได้ตามต้องการเลยครับ";
    } else if (option === "ติดต่อ") {
      botReply.textContent = "สามารถติดต่อเราได้ที่ 038 387 141 หรือ LINE: @bphomelift";
    }

    chatMessages.appendChild(botReply);
    scrollToLatestMessage();
  };

  // === Carousel Indicators (จุดเลื่อนภาพ) ===
  const imageRow = document.querySelector('.image-row');
  const imageBoxes = document.querySelectorAll('.image-box');
  const dotContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;

  imageBoxes.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      imageRow.scrollTo({
        left: i * imageRow.clientWidth,
        behavior: 'smooth',
      });
      updateDots(i);
    });
    dotContainer.appendChild(dot);
  });

  function updateDots(index) {
    const dots = dotContainer.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  imageRow.addEventListener('scroll', () => {
    const newIndex = Math.round(imageRow.scrollLeft / imageRow.clientWidth);
    if (newIndex !== currentIndex) {
      currentIndex = newIndex % imageBoxes.length;
      updateDots(currentIndex);
    }
  });

  // === Drag-to-Scroll (ลากรูปภาพด้วยเมาส์) ===
  let isDown = false;
  let startX;
  let scrollLeft;

  imageRow.addEventListener('mousedown', (e) => {
    isDown = true;
    imageRow.classList.add('dragging');
    startX = e.pageX - imageRow.offsetLeft;
    scrollLeft = imageRow.scrollLeft;
  });

  imageRow.addEventListener('mouseleave', () => {
    isDown = false;
    imageRow.classList.remove('dragging');
  });

  imageRow.addEventListener('mouseup', () => {
    isDown = false;
    imageRow.classList.remove('dragging');
  });

  imageRow.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - imageRow.offsetLeft;
    const walk = (x - startX) * 1.5;
    imageRow.scrollLeft = scrollLeft - walk;
  });

  // === Top Bar Transparency on Scroll ===
  const topBar = document.querySelector('.top-bar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      topBar.classList.add('transparent');
    } else {
      topBar.classList.remove('transparent');
    }

    document.addEventListener("DOMContentLoaded", function () {
  // ปกติ
  const faders = document.querySelectorAll('.fade-in:not(.fade-late)');
  const delayedFaders = document.querySelectorAll('.fade-in.fade-late');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // 👈 ปกติ
  });

  const delayedObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -200px 0px' // 👈 แสดงช้ากว่า
  });

  faders.forEach(el => appearOnScroll.observe(el));
  delayedFaders.forEach(el => delayedObserver.observe(el));
});

  });
});
