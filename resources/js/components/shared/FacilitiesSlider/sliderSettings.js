const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  cssEase: 'linear',
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

export default settings;