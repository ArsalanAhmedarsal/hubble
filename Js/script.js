const preIcon = '<img src="img/slider-arrow-prev.png" alt="schliuf-img">';
const nextIcon = '<img src="img/slider-arrow.png" alt="schliuf-img">';


$('.listing-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoHeight: true,
    thumbs: false,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('.lable-slider').owlCarousel({

    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    thumbs: false,
    autoHeight: true,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0: {
            items: 4.5
        },
        600: {
            items: 5.5
        },
        1000: {
            items: 6.5
        }
    }
});






$('.recently-view-slider').owlCarousel({

    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoHeight: true,
    thumbs: false,
    navText: [
        preIcon,
        nextIcon

    ],
    responsive: {
        0: {
            items: 1.5
        },
        600: {
            items: 2.5
        },
        1000: {
            items: 4
        }
    }
});



$(document).ready(function () {
    $('.detail-page-product-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        slideSpeed: 2000,
        autoplay: false,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });



});



$(function () {
    $("#tabs").tabs();
});


function NavigtionToggle() {
    var element = document.getElementById("mobile-nav-toggle");
    element.classList.toggle("mobile-nav-show");
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



//product plus Minus Counter

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

