$(document).ready(function () {
    $("#carousel-wrapper").owlCarousel({
        items: 1,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 100,
        dots: true,
        rewind: true,
        nav: true,
        navText: ['<i class="lni lni-chevron-left-circle"></i>', '<i class="lni lni-chevron-right-circle"></i>'],
        dots: false
    });
});



$(document).ready(function () {
    $(".title").hide().fadeIn(2000);
});