AOS.init();


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Show first slide initially
showSlide(currentSlide);

// Optional: Auto slide change
setInterval(nextSlide, 3000);



//changemakers Swiper

var swiper = new Swiper(".changeMakersSwiper", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },
        // when window width is >= 480px
        540: {
            slidesPerView: 1,

        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 3,

        }
    }
});