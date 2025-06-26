// ========= Top Bar Scroll Effect =========
document.addEventListener("DOMContentLoaded", () => {
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



// ========= แปลงตัวอักษร homelift เป็น span ทีละตัว =========
document.addEventListener("DOMContentLoaded", () => {
  const headline = document.getElementById("headline");
  if (headline) {
    const text = headline.textContent.trim();
    headline.innerHTML = ""; // ล้างข้อความเดิมออกก่อน

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 0.3}s`; // ดีเลย์ทีละตัว
      headline.appendChild(span);
    });
  }
});




// ========= Fade-up Observer =========
document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up-trigger, .fade-up, .option-items");


  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,                     // ✅ ความลึกของการเห็นก่อนแสดง (0.0–1.0)
    rootMargin: "0px 0px -30% 0px"      // ✅ ดันให้แสดงเมื่อ element อยู่ "กลางจอ" มากขึ้น
  });

  fadeUps.forEach(el => observer.observe(el));
})

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.top-bar')?.classList.add('show');
    document.querySelector('#logosoftcolor')?.classList.add('show');
    document.querySelector('#chat-icon')?.classList.add('show'); // ✅ เพิ่มตรงนี้
  }, 4500);
});

    document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("quickbar-toggle");
    const panel = document.getElementById("quickbar-panel");
    const closeBtn = document.getElementById("quickbar-close");

    toggle.addEventListener("click", () => {
      panel.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      panel.classList.remove("open");
    });

    document.addEventListener("click", (e) => {
      if (panel.classList.contains("open") && !panel.contains(e.target) && e.target !== toggle) {
        panel.classList.remove("open");
      }
    });
  });

  let inactivityTimeout;

function showTopbarAndLogo() {
  document.querySelector('.top-bar')?.classList.remove('hidden');
  document.querySelector('#logosoftcolor')?.classList.remove('hidden');
}

function hideTopbarAndLogo() {
  document.querySelector('.top-bar')?.classList.add('hidden');
  document.querySelector('#logosoftcolor')?.classList.add('hidden');
}

function resetInactivityTimer() {
  showTopbarAndLogo(); // แสดงก่อนเสมอเวลาเริ่มเคลื่อนไหว
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    hideTopbarAndLogo();
  }, 500); // 0.5 วินาทีไม่มีการเคลื่อนไหวจะซ่อน
}

// ตรวจจับการเคลื่อนไหวของเมาส์ / scroll / touch
['mousemove', 'scroll', 'touchstart'].forEach(event => {
  window.addEventListener(event, resetInactivityTimer, { passive: true });
});

// เริ่ม timer ครั้งแรกเมื่อหน้าโหลดเสร็จ
resetInactivityTimer();