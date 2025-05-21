
window.onload = function () {
  let progress = 0;
  const sliderBall = document.getElementById("slider-ball");
  const fill = document.getElementById("slider-fill");
  const percentText = document.getElementById("loader-percent");
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  const maxSlide = 205; // = 250 (slide-bar width) - 40 (ball) - padding

  const interval = setInterval(() => {
    progress += Math.random() * 2.5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // เคลื่อน ball ไปขวาสุด
      sliderBall.style.left = maxSlide + "px";
      fill.style.width = "100%";

      setTimeout(() => {
        preloader.classList.add("fade-out");
        mainContent.style.opacity = 1;
      }, 500);
    }

    percentText.textContent = Math.floor(progress) + "%";
    sliderBall.style.left = (progress / 100) * maxSlide + "px";
    fill.style.width = progress + "%";
  }, 16);
};


  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".nav-contact-wrapper");
    let timeout;

    wrapper.addEventListener("mouseenter", () => {
      clearTimeout(timeout); // ป้องกันการหายระหว่าง hover
      wrapper.classList.add("show");
    });

    wrapper.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        wrapper.classList.remove("show");
      }, 1000); // ✅ หน่วง 1 วินาทีก่อนหาย
    });
  });

  // ... ส่วนอื่นๆ ของคุณ ...
  // ========== แชทบอท ==========
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

  // ========== Fade-in Animation ==========
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
    rootMargin: '0px 0px -50px 0px'
  });

  const delayedObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -200px 0px'
  });

  faders.forEach(el => appearOnScroll.observe(el));
  delayedFaders.forEach(el => delayedObserver.observe(el));

  // ========== Carousel Indicators ==========
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

  // ========== Drag-to-Scroll (Desktop) ==========
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

document.addEventListener("DOMContentLoaded", () => {
  const ball = document.createElement("div");
  ball.classList.add("cursor-ball");
  document.body.appendChild(ball);

  document.addEventListener("mousemove", (e) => {
    ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
