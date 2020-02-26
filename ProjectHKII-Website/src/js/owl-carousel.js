$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    autoplay:true,
    nav:true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
        }
    }
})