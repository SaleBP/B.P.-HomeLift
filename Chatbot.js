document.getElementById("close-chat").addEventListener("click", function () {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.style.display = "none";
  });
  
  
  // ฟังก์ชันให้ scroll ไปข้อความล่าสุด
  function scrollToLatestMessage() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const chatWindow = document.getElementById("chat-window");
    const chatIcon = document.getElementById("chat-icon");
    const closeChat = document.getElementById("close-chat");
  
    chatIcon.addEventListener("click", function () {
      chatWindow.style.display = (chatWindow.style.display === "none" || chatWindow.style.display === "") ? "flex" : "none";
    });
  
    closeChat.addEventListener("click", function () {
      chatWindow.style.display = "none";
    });
  });
  
  function scrollToLatestMessage() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function handleOption(option) {
    const chatMessages = document.getElementById("chat-messages");
  
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
  }