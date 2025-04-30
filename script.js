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

const toggleButton = document.getElementById('darkToggle');
const elementsToToggle = [
  document.body,
  document.querySelector('.header'),
  document.querySelector('.footer'),
  ...document.querySelectorAll('.section'),
  ...document.querySelectorAll('.card'),
  ...document.querySelectorAll('.item'),
  ...document.querySelectorAll('.nav ul li a')
];

// Function to update button icon
function updateButtonIcon() {
  const isDark = document.body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
}

// Load saved mode
if (localStorage.getItem('theme') === 'dark') {
  elementsToToggle.forEach(el => el.classList.add('dark-mode'));
  updateButtonIcon();
}

// Toggle dark mode on click
toggleButton.addEventListener('click', () => {
  elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateButtonIcon();
});
