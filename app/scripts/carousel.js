const carousel = ((options) => {
  'use strict';
  let _this = {};

  const defaults = {
    lazyLoad: 'progressive',
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
  };

  return { init: _this.init }
})();

export default {
  init : carousel.init
}
