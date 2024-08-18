$(function() {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });

    // -------- video play pause ---------
    var video = $("#myVideo")[0];
    $(".video-card").on("mouseenter", function() {
        video.play();
    });
    $(".video-card").on("mouseleave", function() {
        video.pause();
    });


});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ portfolio title -----------
    var swiper = new Swiper('.tc-portfolio-st2 .title-slider', {
        slidesPerView: "auto",
        spaceBetween: 100,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 30000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });



    // ------------ portfolio cards -----------
    const fraction = document.getElementById("fraction");
    const slides = document.querySelectorAll(".tc-portfolio-st2 .portfolio-slider .swiper-slide");
    const slideCount = slides.length;
    fraction.textContent = `1 / ${slideCount}`;

    var swiper = new Swiper('.tc-portfolio-st2 .portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // direction: 'vertical',
        effect: 'fade',
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,

        on: {
            slideChange: () => {
                fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
            }
        }
    });


    // ------------ blog slider -----------
    var swiper = new Swiper('.tc-blog-st2 .posts-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st2 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });



});



// ------------ gsap scripts -----------
$(function() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1, 
    });

});