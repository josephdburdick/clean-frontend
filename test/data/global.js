Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _groupCleanse = require('./group-cleanse');

var _groupCleanse2 = _interopRequireDefault(_groupCleanse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = {
  title: "21-Day Cleanse, Detox, and Diet | Clean Program",
  name: "Clean",
  dir: {
    images: "images/"
  },
  icons: {
    btnClose: "icon__btn-x.png"
  },
  views: {
    index: _index2.default,
    groupCleanse: _groupCleanse2.default
  }
};

exports.default = { global: global };

//# sourceMappingURL=global.js.map
