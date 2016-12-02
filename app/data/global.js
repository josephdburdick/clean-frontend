import index from './index';
import groupCleanse from './group-cleanse';

const global = {
  title: "21-Day Cleanse, Detox, and Diet | Clean Program",
  name: "Clean",
  dir: {
    images: "images/"
  },
  icons: {
    btnClose: "icon__btn-x.png"
  },
  views: {
    index,
    groupCleanse
  }
};

export default { global };
