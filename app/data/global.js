import header from './components/header';
import footer from './components/footer';
import modal from './components/modal';

import index from './templates/index';
import homepage from './templates/homepage';
import groupCleanse from './templates/group-cleanse';
import cleanseTogether from './templates/cleanse-together';
import purchaseSteps from './templates/purchase-steps';

const global = {
  title: "21-Day Cleanse, Detox, and Diet | Clean Program",
  name: "Clean",
  dir: {
    images: "images/"
  },
  icons: {
    btnClose: "icon__btn-x.png"
  },
  components: {
    header,
    footer,
    modal
  },
  views: {
    index,
    homepage,
    groupCleanse,
    cleanseTogether,
    purchaseSteps
  }
};

export default { global };
