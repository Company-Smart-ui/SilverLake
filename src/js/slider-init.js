var swiper = new Swiper(".HomepageSwiperInit", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".hp-pagination-init",
      clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
            grabCursor:false,
        },
    },
  });
var swiper = new Swiper(".HomepageSwiperFull", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-full-pagination-init",
        clickable: true,
    },
});
var swiper = new Swiper(".OwnSwiperFull", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-full-pagination-init",
        clickable: true,
    },
});
var swiper = new Swiper(".HomepageSwiperBlocks", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-blocks-next',
        prevEl: '.swiper-blocks-prev',
    },
    breakpoints: {
        420: {
            spaceBetween: 40,
            grabCursor:false,
            slidesPerView: 2,
        },
        1200: {
            spaceBetween: 70,
            grabCursor:false,
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".SwiperResale", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});

// gallery Swiper
var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    breakpoints: {
        420: {
            grabCursor:false,
            slidesPerView: 2,
        },
        991: {
            grabCursor:false,
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1200: {
            grabCursor:false,
            spaceBetween: 40,
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: '.gallery-next-init',
        prevEl: '.gallery-prev-init',
    },
});
