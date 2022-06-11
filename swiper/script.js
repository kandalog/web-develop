const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 1000,
  loop: true,

  
  autoplay: {
    delay: 2500
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});