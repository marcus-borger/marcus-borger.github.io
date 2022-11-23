document.addEventListener("DOMContentLoaded", function(){
    const carousels = document.querySelectorAll(".carousel");
    const sidenav = document.querySelectorAll(".sidenav");
    const parallax = document.querySelectorAll(".parallax");
  
    M.Sidenav.init(sidenav);
    M.Parallax.init(parallax);
    
    M.Carousel.init(carousels, {
        numVisible: 5,
        padding: 125
    });


});

