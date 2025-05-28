document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('quickbar-toggle');
  const panel = document.getElementById('quickbar-panel');
  const closeBtn = document.getElementById('quickbar-close');

  toggleBtn.addEventListener('click', () => {
    panel.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
  });
});
