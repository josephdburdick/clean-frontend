const $ = window.jQuery || {};

import mobileMenu from './mobile-menu';
import mediaModal from './media-modal';
import carousel from './carousel';
import purchaseSteps from './purchase-steps';

$('document').ready(() => {
  mobileMenu.init();
  mediaModal.init();
  carousel.init();
  purchaseSteps.init();
});
