
  window.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('#textintro p');
    const text = textElement.textContent;
    const parent = textElement.parentElement;

    // ล้างข้อความเก่า
    textElement.remove();

    // ใส่ <span> ล้อมตัวอักษร
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.1}s`; // ปรับเวลาแต่ละตัว
      parent.appendChild(span);
    });
  });
