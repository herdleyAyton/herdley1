$(function(){
  $(function(){
  new WOW().init();
});




  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    // responsive breakpoints
    // breakpoint from 0 up
    responsive: {
      0: {
      items: 1
    },
    //breakpoint from 480 up
    480: {
      items: 2
    },
    // breakpoint from 768 up
         768: {
                items: 3
          }
       
    }
  });
});

