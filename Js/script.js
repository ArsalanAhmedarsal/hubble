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


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
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

