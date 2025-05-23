<script>
  const items = document.querySelectorAll('.carousel-item');
  const btnLeft = document.querySelector('.nav-btn.left');
  const btnRight = document.querySelector('.nav-btn.right');
  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, i) => {
      item.classList.remove('active');
      if (i === currentIndex) item.classList.add('active');
    });
  }

  btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  updateCarousel();
</script>
