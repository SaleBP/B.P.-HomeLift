<script>
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

    // Optional: ปิด quickbar เมื่อคลิกนอก panel
    document.addEventListener("click", (e) => {
      if (panel.classList.contains("open") && !panel.contains(e.target) && e.target !== toggle) {
        panel.classList.remove("open");
      }
    });
  });
</script>
