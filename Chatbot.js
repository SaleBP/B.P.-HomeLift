document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const chatWindow = document.getElementById("chat-window");
    const closeChat = document.getElementById("close-chat");
    const chatMessages = document.getElementById("chat-messages");
  
    // เปิด/ปิดกล่องแชท
    chatIcon.addEventListener("click", function () {
      chatWindow.style.display = (chatWindow.style.display === "none" || chatWindow.style.display === "") ? "flex" : "none";
    });
  
    // ปิดแชทเมื่อคลิกปุ่ม ×
    closeChat.addEventListener("click", function () {
      chatWindow.style.display = "none";
    });
  
    // ฟังก์ชันให้ scroll ไปข้อความล่าสุด
    function scrollToLatestMessage() {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    // ฟังก์ชันตอบสนองเมื่อคลิกปุ่มตัวเลือก
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

    <script>
  const slider = document.querySelector('.image-row');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // ความเร็วในการลาก
    slider.scrollLeft = scrollLeft - walk;
  });

  
</script>


  });
  