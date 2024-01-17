$('.tech-slide-image .owl-carousel , .tech-slide-blog .owl-carousel , .tech-slide-video .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-circle-left'></i>",
      "<i class='fas fa-chevron-circle-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  $('.tech-slide-img .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    navText: [
      "<i class='fas fa-chevron-circle-left'></i>",
      "<i class='fas fa-chevron-circle-right'></i>"
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })