import header from './components/header';
import footer from './components/footer';
import modal from './components/modal';

import index from './templates/index';
import groupCleanse from './templates/group-cleanse';
import cleanseTogether from './templates/cleanse-together';
import homepage from './templates/homepage';

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
    cleanseTogether
  }
};

export default { global };
