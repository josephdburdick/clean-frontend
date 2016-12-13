import mobileMenu from './mobile-menu';
import mediaModal from './media-modal';
import carousel from './carousel';

(() => {
  $('document').ready(() => {
    mobileMenu.init();
    mediaModal.init();
    carousel.init();
  });
})();
