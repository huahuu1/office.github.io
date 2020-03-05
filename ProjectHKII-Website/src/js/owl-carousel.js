$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        responsiveClass:true,
        dots:false,
        autoplay:true,
        lazyLoad: true,
        nav:true,
        navText: ["<i class='fa fa-chevron-left prev-next-button'></i>","<i class='fa fa-chevron-right prev-next-button'></i>"],
        responsive:{
            0:{
                items:1,
            },
            850: {
                items:3,
            },
            1200: {
                items:5,
            }
        }
    });
});


// $(document).ready(function(){
//     $('.owl-carousel').slick({
//         infinite: true,
//         slidesToShow: 1,
//         arrows: true,
//         dots: false
//     });
// });