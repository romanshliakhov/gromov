import Swiper from 'swiper/bundle';

let diagnosisSlider = new Swiper(".diagnosis__slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 2.75,
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".diagnosis__btn--next",
    prevEl: ".diagnosis__btn--prev",
  },
  breakpoints: {
    // 320: {
    // },

    // 1024: {

    // },
  },
});

let equipmentProducts = new Swiper(".equipment__products", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".equipment-next",
    prevEl: ".equipment-prev",
  },
  pagination: {
    el: ".equipment__pagination",
    clickable: true,
  },
  breakpoints: {
    // 1240: {
    //   slidesPerView: 2.25,
    // },
    // 1240: {
    //   slidesPerView: 2.25,
    // },
    1240: {
      slidesPerView: 2.5,
    },
  },
});
