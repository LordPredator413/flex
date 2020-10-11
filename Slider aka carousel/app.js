const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//przyciski
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// licznik
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size  * counter ) + 'px)';


// nasłuch przycisków

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size  * counter ) + 'px)';
});

prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size  * counter ) + 'px)';
});


carouselSlide.addEventListener('transitionend', () =>{
    if(carouselImages[counter].id === 'ostatnie'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size  * counter ) + 'px)';
    }
    if(carouselImages[counter].id === 'pierwsze'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size  * counter ) + 'px)';

    }
});