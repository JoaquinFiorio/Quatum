var swiper =  new Swiper(".sl-roadmap", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 55,
    initialSlide: 2,
    centeredSlides: true,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 5.4,
            spaceBetween: 55,
        },
    },
});



var swiper_thump = new Swiper(".slideThumbMain", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        991: {
            slidesPerView: 'auto'
        },
        1100: {
            slidesPerView:  "auto"
        },
    },
});
var swiper2 = new Swiper(".slideThumb", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_thump,
    },
});

var sl_roadmap3 = new Swiper(".sl-roadmap3", {
        spaceBetween: 30,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            
            991: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
});
var sl_roadmap3_thumb = new Swiper(".sl-roadmap3-thumb", {
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
        thumbs: {
          swiper: sl_roadmap3,
        },
});


var swiper = new Swiper(".collection-1", {
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: false,
    autoplay: {
        delay: 0.3, 
    }, 
    freeMode: true, 
    speed: 5000,
    disableOnInteraction: true
});

var swiper = new Swiper(".collection-3", {
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: false
    }, 
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true
});

$(".collection-1,.collection-3").hover(function() {
        (this).swiper.autoplay.stop();
    }, 
    function() {
        (this).swiper.autoplay.start();
});

