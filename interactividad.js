const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const skillItems = document.querySelectorAll('.skill-item');
let currentIndex = 0;

function showSkill(index) {
  const totalSkills = skillItems.length;
  const carouselWidth = document.querySelector('.carousel-container').offsetWidth;

  skillItems.forEach((item, i) => {
    item.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    currentIndex--;
  } else {
    currentIndex = skillItems.length - 1;
  }
  showSkill(currentIndex);
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < skillItems.length - 1) {
    currentIndex++;
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSkill(currentIndex);
});

// Inicializar el carrusel
showSkill(currentIndex);