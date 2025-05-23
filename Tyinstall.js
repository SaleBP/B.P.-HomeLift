const container = document.querySelector('.scroll-container');
const track = document.querySelector('.scroll-track');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('dragging');
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('dragging');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('dragging');
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX); // scroll-fastness
  container.scrollLeft = scrollLeft - walk;

  // loop effect (check if scroll reaches clone end, then jump)
  if (container.scrollLeft >= track.scrollWidth / 2) {
    container.scrollLeft = 0;
  } else if (container.scrollLeft <= 0) {
    container.scrollLeft = track.scrollWidth / 2;
  }
});
