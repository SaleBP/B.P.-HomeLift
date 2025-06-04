document.addEventListener("DOMContentLoaded", () => {
  // ✅ Register GSAP Plugin
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // ✅ ScrollSmoother Setup
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true
  });

  // ✅ Animate Caption Overlay ทีละบรรทัด
  gsap.from(".caption-overlay p", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".caption-overlay",
      start: "top 80%",
    }
  });

  // ✅ Top Bar Scroll Effect
  const topBar = document.querySelector('.top-bar');
  window.addEventListener('scroll', () => {
    topBar.classList.toggle('transparent', window.scrollY > 10);
  });

  // ✅ Hover Dropdown
  const wrapper = document.querySelector(".nav-contact-wrapper");
  let timeout;
  wrapper.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    wrapper.classList.add("show");
  });
  wrapper.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => wrapper.classList.remove("show"), 1000);
  });

  // ✅ IntersectionObserver Fade-in
  const faders = document.querySelectorAll('.fade-in:not(.fade-late)');
  const delayedFaders = document.querySelectorAll('.fade-in.fade-late');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const delayedObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -200px 0px' });

  faders.forEach(el => appearOnScroll.observe(el));
  delayedFaders.forEach(el => delayedObserver.observe(el));

  // ✅ Cursor Ball
  const ball = document.createElement("div");
  ball.classList.add("cursor-ball");
  document.body.appendChild(ball);
  let hovering = false;
  document.addEventListener("mousemove", (e) => {
    const scale = hovering ? 1.8 : 1;
    ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
  });
  document.querySelectorAll("a, button, .clickable").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      hovering = true;
      ball.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      hovering = false;
      ball.classList.remove("hovering");
    });
  });

  // ✅ Carousel Dots
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

  // ✅ Chatbot
  const chatIcon = document.getElementById("chat-icon");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const chatMessages = document.getElementById("chat-messages");

  chatIcon.addEventListener("click", () => {
    chatWindow.style.display =
      chatWindow.style.display === "none" || chatWindow.style.display === ""
        ? "flex"
        : "none";
  });

  closeChat.addEventListener("click", () => {
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
});
