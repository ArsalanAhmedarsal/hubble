const preIcon = '<img src="img/slider-arrow-prev.png" alt="">';
const nextIcon = '<img src="img/slider-arrow.png" alt="">';


$('.listing-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoHeight: true,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('.lable-slider').owlCarousel({
   
    loop: true,
    margin: 10,
    dots:false,
    nav: true,
    autoHeight: true,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0:{
            items:4.5
        },
        600:{
            items:5.5
        },
        1000:{
            items:6.5
        }
    }
});



function NavigtionToggle() {
    var element = document.getElementById("mobile-nav-toggle");
    element.classList.toggle("mobile-nav-show");
}

