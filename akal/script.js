// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(reveal => {
    const top = reveal.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      reveal.classList.add('visible');
    }
  });
});

// Testimonials Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
document.getElementById('build-btn').addEventListener('click', () => {
  window.location.href = 'your-target-page.html'; // Replace with your target URL
});
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);
