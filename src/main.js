document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 150 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 150 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 150 });
  