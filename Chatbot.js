// เปิด/ปิดหน้าต่างแชท
document.getElementById("chat-icon").addEventListener("click", function () {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.style.display = (chatWindow.style.display === "none") ? "block" : "none";
  });
  
  document.getElementById("chat-close").addEventListener("click", function () {
    document.getElementById("chat-window").style.display = "none";
  });
  
  // ฟังก์ชันตอบสนองเมื่อคลิกปุ่มตัวเลือก
  function handleOption(option) {
    const chatWindow = document.getElementById("chat-window");
    const response = document.createElement("div");
    response.className = "chat-message user";
    response.textContent = "คุณเลือก: " + option;
    chatWindow.appendChild(response);
  
    // เพิ่มคำตอบของบอทแบบง่าย ๆ
    const botReply = document.createElement("div");
    botReply.className = "chat-message bot";
    if (option === "บริการ") {
      botReply.textContent = "เรามีบริการติดตั้งและบำรุงรักษาลิฟต์บ้านครบวงจรครับ";
    } else if (option === "ปรับแต่งลิฟต์") {
      botReply.textContent = "สามารถเลือกสี วัสดุ และขนาดลิฟต์ได้ตามต้องการเลยครับ";
    } else if (option === "ติดต่อ") {
      botReply.textContent = "สามารถติดต่อเราได้ที่ 038 387 141 หรือ LINE: @bphomelift";
    }
    chatWindow.appendChild(botReply);
  }