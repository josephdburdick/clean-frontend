const carousel = ((options) => {
  'use strict';
  let _this = {};

  const defaults = {
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px',
    variableWidth: true
  };

  const settings = Object.assign({}, defaults, options);

  _this.init = () => {
    $('.hero-carousel').slick(settings)
      // .on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        // const $nextSlide = slick.$slides[nextSlide];
      // })
  };

  return { init: _this.init }
})();

export default {
  init : carousel.init
}
