// stała navSlide jest równa anonimowej funkcji
const navSlide = () => {
  // Stałe 
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLinks = document.querySelectorAll('.nav-link li');

  //Działanie burgera
  burger.addEventListener('click', () => {
    // Rozsuniecie listy 
    nav.classList.toggle('nav-active');

  });

    // Animacja chowania
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
  })
}

navSlide();