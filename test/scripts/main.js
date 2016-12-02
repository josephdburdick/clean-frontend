'use strict';

var MEDIA = function () {
  var _state = {};
  var _this = {
    default: {
      iframe: {
        attributes: 'webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0"',
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
    return '\n    <iframe src="' + embedUrl + '"\n      width="' + _this.default.iframe.width + '"\n      height="' + _this.default.iframe.height + '"\n      ' + _this.default.iframe.attributes + '></iframe>\n  ';
  };
  _this.get.vimeo.idByUrl = function (url) {
    var id = false;
    $.ajax({
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
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return false;
    }
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

var mediaModal = function () {
  var _this = {};
  _this.init = function () {
    _this.registerEvents();
  }, _this.registerEvents = function () {
    $('[data-toggle="modal"][data-media-url]').on('click', function (e) {
      var $this = $(e.currentTarget),
          media = {
        url: $this.data('media-url'),
        autoplay: !!$this.data('media-autoplay'),
        controls: !!$this.data('media-controls')
      },
          modal = {
        $el: $($this.data('target')),
        target: $this.data('target')
      };
      // if modal doesn't exist, add it and cache it
      if (!$(modal.target).length) {
        $(mediaModal.modalTemplate()).appendTo($('body'));
        modal.$el = $(modal.target);
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
  }, _this.placeholderTemplate = function () {
    return '<div class="embed-responsive-item placeholder-block"></div>';
  }, _this.modalTemplate = function () {
    return '\n    <div class="modal fade" id="modal--primary" tabindex="-1" role="dialog" aria-labelledby="Modal Window" aria-hidden="true">\n      <div class="modal-dialog" role="document">\n        <div class="modal-content">\n          <div class="modal-header">\n            <a class="close modal__btn-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true"><img src="images/icon__btn-x.png"/></span>\n            </a>\n          </div>\n          <div class="modal-body">\n            ' + _this.placeholderTemplate() + '\n          </div>\n        </div>\n      </div>\n    </div>';
  }, _this.wrapperTemplate = function (mediaHtml) {
    return '\n    <div role="media" class="media-container embed-responsive embed-responsive-16by9">\n      ' + (!!mediaHtml ? mediaHtml : null) + '\n    </div>';
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

(function () {
  $('document').ready(function () {
    mediaModal$1.init();
  });
})();
//# sourceMappingURL=main.js.map
