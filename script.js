// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const animateElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  animateElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
