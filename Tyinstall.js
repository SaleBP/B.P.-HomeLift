<script>
let index = 0;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
  items.forEach((item, i) => {
    item.classList.remove('active', 'prev', 'next', 'prev-2', 'next-2');
    let offset = (i - index + items.length) % items.length;

    if (offset === 0) item.classList.add('active');
    else if (offset === 1) item.classList.add('next');
    else if (offset === 2) item.classList.add('next-2');
    else if (offset === items.length - 1) item.classList.add('prev');
    else if (offset === items.length - 2) item.classList.add('prev-2');
  });
}

function moveLeft() {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
}

function moveRight() {
  index = (index + 1) % items.length;
  updateCarousel();
}

updateCarousel();
</script>