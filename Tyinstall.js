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

.image-stack {
  position: relative;
  width: 100%;
  height: 300px;
}

.piece {
  position: absolute;
  width: 80%;
  left: 10%;
  top: 0;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 0.6s ease, opacity 0.4s ease;
}

/* เมื่อ active */
.carousel-item.active .piece-1 {
  transition-delay: 0.1s;
  transform: translateY(0);
  opacity: 1;
}
.carousel-item.active .piece-2 {
  transition-delay: 0.3s;
  transform: translateY(0);
  opacity: 1;
}
.carousel-item.active .piece-3 {
  transition-delay: 0.5s;
  transform: translateY(0);
  opacity: 1;
}
