const track = document.getElementById('scroll-track');
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

track.parentElement.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  track.parentElement.style.cursor = 'grabbing';
});

track.parentElement.addEventListener('mouseleave', () => {
  isDragging = false;
  track.parentElement.style.cursor = 'grab';
});

track.parentElement.addEventListener('mouseup', () => {
  isDragging = false;
  track.parentElement.style.cursor = 'grab';
});

track.parentElement.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;

  // Looping effect
  const maxScroll = track.scrollWidth / 2;
  if (track.scrollLeft <= 0) {
    track.scrollLeft = maxScroll;
  } else if (track.scrollLeft >= maxScroll * 2) {
    track.scrollLeft = maxScroll;
  }
});
