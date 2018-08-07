$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 1500,
    dotsEach: 2,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        750: {
            items: 2,
            margin: 50
        },
        1000: {
            items: 3
        }
    }
})