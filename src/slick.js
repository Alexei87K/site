$('.box').slick({
    dots: true,
    arrows: false,
  });

  $('.min-box').slick({
    
    dots: false,
    infinite: false,
    arrows: true, 
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });