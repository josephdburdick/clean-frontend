const $ = window.$ || {};

const mobileMenu = (() => {
  const _this = {
    state: {
      open: false,
    },
  };

  _this.init = () => {
    _this.registerEvents();
  };

  _this.registerEvents = () => {
    $('[data-toggle="mobile-menu"]').on('click', (e) => {
      e.preventDefault();
      _this.state.open = !_this.state.open;
      _this.state.open ? $('body').addClass('mobile-menu--open') : $('body').removeClass('mobile-menu--open');
    });
  };

  return {
    init: _this.init,
  };
})();

export default {
  init: mobileMenu.init,
};
