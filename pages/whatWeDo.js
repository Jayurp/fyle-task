let currentIndex = 0;
const slidesToShow = 4;
const totalSlides = Math.ceil(document.querySelectorAll('.carousel-slide').length / slidesToShow);

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
        if (idx === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function currentSlide(index) {
    showSlide(index);
}

let autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 3000);
    });
});

showSlide(currentIndex);