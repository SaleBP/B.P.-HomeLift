document.addEventListener("DOMContentLoaded", function () {
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
  
    // === Carousel Indicator & Looping ===
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
  });
  