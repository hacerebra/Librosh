// Slider functionality
let currentSlide = 0;
const slides = [
  {
    image: 'assets/images/Rectangle 25.png',
    title: 'Hoş geldin!',
    subtitle: 'Seni görmek çok güzel. Kategorileri keşfet, kitaplığını oluştur.'
  },
  {
    image: 'assets/images/Rectangle 26.png',
    title: 'Kitapları keşfet!',
    subtitle: 'Seni görmek çok güzel. Kategorileri keşfet.'
  },
  {
    image: 'assets/images/Rectangle 27.png',
    title: 'Kitaplığını oluştur!',
    subtitle: 'Seni görmek çok güzel. Kategorileri keşfet.'
  }
];

function createSlider() {
  const sliderContainer = document.querySelector('.slider');
  if (!sliderContainer) return;
  sliderContainer.innerHTML = '';

  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
    slideElement.innerHTML = `
      <img src="${slide.image}" alt="Slide ${index + 1}">
      <div class="overlay">
        <h1>${slide.title}</h1>
        <p>${slide.subtitle}</p>
      </div>
    `;
    sliderContainer.appendChild(slideElement);
  });

  const navContainer = document.createElement('div');
  navContainer.className = 'slider-nav';
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = index === 0 ? 'active' : '';
    dot.onclick = () => goToSlide(index);
    navContainer.appendChild(dot);
  });
  sliderContainer.appendChild(navContainer);

  const prevArrow = document.createElement('button');
  prevArrow.className = 'slider-arrows prev-arrow';
  prevArrow.innerHTML = '‹';
  prevArrow.onclick = () => {
    prevSlide();
    restartAutoPlay();
  };

  const nextArrow = document.createElement('button');
  nextArrow.className = 'slider-arrows next-arrow';
  nextArrow.innerHTML = '›';
  nextArrow.onclick = () => {
    nextSlide();
    restartAutoPlay();
  };

  sliderContainer.appendChild(prevArrow);
  sliderContainer.appendChild(nextArrow);
}

function showSlide(index) {
  const slideElements = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-nav button');

  slideElements.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slideElements[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  restartAutoPlay();
}

let autoPlayInterval;
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}
function restartAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

document.addEventListener('DOMContentLoaded', function () {
  createSlider();
  startAutoPlay();
});