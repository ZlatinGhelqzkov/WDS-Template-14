const introSwiper = new Swiper('.intro-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.intro-swiper-next',
      prevEl: '.intro-swiper-prev',
    },
    
    breakpoints: {
      567: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 4.2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },

      1400: {
        slidesPerView: 6.2,
        spaceBetween: 20,
      },

      1600: {
        slidesPerView: 7,
        spaceBetween: 20,
      }
    }
  });

  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.testimonials-swiper-next',
      prevEl: '.testimonials-swiper-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
    }
  });