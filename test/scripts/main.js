'use strict';

var $$2 = window.$ || {};

var mobileMenu = function () {
  var _this = {
    state: {
      open: false
    }
  };

  _this.init = function () {
    _this.registerEvents();
  };

  _this.registerEvents = function () {
    $$2('[data-toggle="mobile-menu"]').on('click', function (e) {
      e.preventDefault();
      _this.state.open = !_this.state.open;
      _this.state.open ? $$2('body').addClass('mobile-menu--open') : $$2('body').removeClass('mobile-menu--open');
    });
  };

  return {
    init: _this.init
  };
}();

var mobileMenu$1 = {
  init: mobileMenu.init
};

var $$4 = window.$ || {};
var MEDIA = function () {
  var _state = {};
  var _this = {
    default: {
      iframe: {
        attributes: '\n          class="embed-responsive-item"\n          webkitallowfullscreen\n          mozallowfullscreen\n          allowfullscreen\n          frameborder="0"',
        width: 560,
        height: 315
      }
    },
    is: {},
    get: {
      youtube: {},
      vimeo: {}
    }
  };

  _this.default.iframe.template = function (embedUrl) {
    return '\n    <iframe\n      src="' + embedUrl + '"\n      width="' + _this.default.iframe.width + '"\n      height="' + _this.default.iframe.height + '"\n      ' + _this.default.iframe.attributes + '></iframe>';
  };

  _this.get.vimeo.idByUrl = function (url) {
    var id = false;
    $$4.ajax({
      url: 'https://vimeo.com/api/oembed.json?url=' + url,
      type: 'GET',
      success: function success(response) {
        if (response.video_id) {
          id = response.video_id;
        }
      }
    });
    return id;
  };

  _this.get.youtube.idByUrl = function (url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : false;
  };

  _this.get.youtube.embedUrl = function (url) {
    if (_this.is.video(url) && _this.is.youtube(url)) {
      var id = _this.get.youtube.idByUrl(url);
      var autoplay = '&autoplay=' + (_state.autoplay ? 1 : 0);
      return '//www.youtube.com/embed/' + id + '?' + autoplay;
    }
  };

  _this.get.vimeo.embedUrl = function (url) {
    if (_this.is.video(url) && _this.is.vimeo(url)) {
      var id = _this.get.vimeo.idByUrl(url);
      var autoplay = '&autoplay=' + (_state.autoplay ? 1 : 0);
      return '//player.vimeo.com/video/' + id + '?badge=0' + autoplay;
    }
  };

  _this.get.youtube.embed = function (url) {
    var embedUrl = _this.get.youtube.embedUrl(url);
    return _this.default.iframe.template(embedUrl);
  };

  _this.get.vimeo.embed = function (url) {
    var embedUrl = _this.get.vimeo.embedUrl(url);
    return _this.default.iframe.template(embedUrl);
  };

  _this.is.youtube = function (url) {
    return !!_this.get.youtube.idByUrl(url);
  };
  _this.is.vimeo = function (url) {
    return !!_this.get.vimeo.idByUrl(url);
  };
  _this.is.video = function () {
    return !!_this.is.youtube || !!_this.is.vimeo;
  };
  _this.get.videoType = function (url) {
    if (!!_this.is.youtube(url)) {
      return 'youtube';
    } else if (!!_this.is.vimeo(url)) {
      return 'vimeo';
    } else {
      return 'unknown';
    }
  };

  _this.get.iframe = function (url, settings) {
    _state.autoplay = settings.autoplay;
    if (_this.is.video(url)) {
      var videoType = _this.get.videoType(url);
      return _this.get[videoType].embed(url);
    } else {
      console.warn('Media url type is unknown.');
      return false;
    }
  };

  return {
    is: _this.is,
    get: _this.get
  };
}();

var MEDIA$1 = {
  is: MEDIA.is,
  get: MEDIA.get
};

var $$3 = window.$ || {};

var mediaModal = function () {
  var _this = {};
  _this.init = function () {
    _this.registerEvents();
  };

  _this.registerEvents = function () {
    $$3('[data-toggle="modal"][data-media-url]').on('click', function (e) {
      var $this = $$3(e.currentTarget);
      var media = {
        url: $this.data('media-url'),
        autoplay: !!$this.data('media-autoplay'),
        controls: !!$this.data('media-controls')
      };
      var modal = {
        $el: $$3($this.data('target')),
        target: $this.data('target')
      };
      // if modal doesn't exist, add it and cache it
      if (!$$3(modal.target).length) {
        $$3(mediaModal.modalTemplate()).appendTo($$3('body'));
        modal.$el = $$3(modal.target);
      }

      // add modal listeners
      modal.$el.one('show.bs.modal', function () {
        modal.$el.find('.modal-body').html(mediaModal.wrapperTemplate(MEDIA$1.get.iframe(media.url, {
          autoplay: media.autoplay
        })));
      }).one('hide.bs.modal', function () {
        modal.$el.find('.modal-body').html(mediaModal.wrapperTemplate(mediaModal.placeholderTemplate()));
      });
    });
  };

  _this.placeholderTemplate = function () {
    return '<div class="embed-responsive-item placeholder-block"></div>';
  };

  _this.modalTemplate = function () {
    return '\n  <div\n    class="modal fade"\n    id="modal--primary"\n    tabindex="-1"\n    role="dialog"\n    aria-labelledby="Modal Window"\n    aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <span></span>\n          <a class="close modal__btn-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true"><img src="images/icon__btn-x.png"/></span>\n          </a>\n        </div>\n        <div class="modal-body">\n          ' + _this.placeholderTemplate() + '\n        </div>\n      </div>\n    </div>\n  </div>';
  };

  _this.wrapperTemplate = function (mediaHtml) {
    return '\n    <div role="media" class="media-container embed-responsive embed-responsive-16by9">\n      ' + (mediaHtml ? mediaHtml : null) + '\n    </div>';
  };

  return {
    init: _this.init,
    placeholderTemplate: _this.placeholderTemplate,
    modalTemplate: _this.modalTemplate,
    wrapperTemplate: _this.wrapperTemplate
  };
}();

var mediaModal$1 = {
  init: mediaModal.init,
  placeholderTemplate: mediaModal.placeholderTemplate,
  wrapperTemplate: mediaModal.wrapperTemplate,
  modalTemplate: mediaModal.modalTemplate
};

var carousel = function (options) {
  var _this = {};

  var defaults = {
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

  var settings = Object.assign({}, defaults, options);

  _this.init = function () {
    $('.hero-carousel').slick(settings);
  };

  return { init: _this.init };
}();

var carousel$1 = {
  init: carousel.init
};

var inputSpinner = function () {
  var registerEvents = function registerEvents(options) {
    // increase || decrease
    $('.input-spinner .btn[data-role]').on('click', function () {
      var $btn = $(this);
      var $input = $btn.closest('.input-spinner').find('input');
      if ($btn.data('role') === 'increment') {
        if ($input.attr('max') == undefined || parseInt($input.val()) < parseInt($input.attr('max'))) {
          $input.val(parseInt($input.val(), 10) + 1);
        } else {
          $btn.next('disabled', true);
        }
      }

      if ($btn.data('role') === 'decrement') {
        if ($input.attr('min') == undefined || parseInt($input.val()) > parseInt($input.attr('min'))) {
          $input.val(parseInt($input.val(), 10) - 1);
        } else {
          $btn.prev("disabled", true);
        }
      }
    });

    // Remove all characters except numbers
    var filterInputValue = function filterInputValue(str) {
      return str.replace(/[^0-9]/, '');
    };
    $('.input-spinner input[type="text"]').on('changekeypress', function (e) {
      e.currentTarget.value = filterInputValue(e.currentTarget.value);
      return undefined;
    });
  };

  var init = function init(options) {
    return registerEvents(options);
  };

  return {
    init: init
  };
}();

var inputSpinner$1 = {
  init: inputSpinner.init
};

var purchaseSteps = function () {
  var registerEvents = function registerEvents() {
    inputSpinner$1.init();
  };

  var init = function init() {
    return registerEvents();
  };

  return {
    init: init
  };
}();

var purchaseSteps$1 = {
  init: purchaseSteps.init
};

var $$1 = window.$ || {};

(function () {
  $$1('document').ready(function () {
    mobileMenu$1.init();
    mediaModal$1.init();
    carousel$1.init();
    purchaseSteps$1.init();
  });
})();
//# sourceMappingURL=main.js.map
