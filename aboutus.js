const faders = document.querySelectorAll('.fade-in:not(.fade-late)');



const sliders = document.querySelectorAll('.slide-in-right');

const appearSlideObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

sliders.forEach(el => appearSlideObserver.observe(el));
