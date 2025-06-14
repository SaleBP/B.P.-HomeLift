document.addEventListener("DOMContentLoaded", () => {
  // ========= Top Bar Scroll Effect =========
  const topBar = document.querySelector('.top-bar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      topBar.classList.add('transparent');
    } else {
      topBar.classList.remove('transparent');
    }
  });

  // ========= ติดต่อเรา Hover Dropdown =========
  const wrapper = document.querySelector(".nav-contact-wrapper");
  let timeout;

  wrapper.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    wrapper.classList.add("show");
  });

  wrapper.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      wrapper.classList.remove("show");
    }, 1000);
  });

  // ========= Fade-in Animation =========
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

  // ========= Cursor Ball =========
  const ball = document.createElement("div");
  ball.classList.add("cursor-ball");
  document.body.appendChild(ball);

  let hovering = false;

  document.addEventListener("mousemove", (e) => {
    const scale = hovering ? 1.8 : 1;
    ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
  });

  const hoverTargets = document.querySelectorAll("a, button, .clickable");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      hovering = true;
      ball.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      hovering = false;
      ball.classList.remove("hovering");
    });
  });

  // ========= Carousel Dots =========
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


  // ========= Chatbot =========
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
});




// ========= Preloader =========
window.onload = function () {
  let progress = 0;
  const sliderBall = document.getElementById("slider-ball");
  const fill = document.getElementById("slider-fill");
  const percentText = document.getElementById("loader-percent");
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  const maxSlide = 205;

  const interval = setInterval(() => {
    progress += Math.random() * 2.5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      sliderBall.style.left = maxSlide + "px";
      fill.style.width = "100%";

      setTimeout(() => {
        preloader.classList.add("fade-out");
        const mainContent = document.getElementById("main-content");

if (mainContent) {
  mainContent.style.opacity = 1;
}
      }, 500);
    }

    percentText.textContent = Math.floor(progress) + "%";
    sliderBall.style.left = (progress / 100) * maxSlide + "px";
    fill.style.width = progress + "%";
  }, 16);
};


document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // แสดงแค่ครั้งเดียว
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeUps.forEach(el => observer.observe(el));
});

