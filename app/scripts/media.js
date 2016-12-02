const MEDIA = (() => {
  let _state = {};
  const _this = {
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
  _this.default.iframe.template = (embedUrl) => `
    <iframe src="${embedUrl}"
      width="${_this.default.iframe.width}"
      height="${_this.default.iframe.height}"
      ${_this.default.iframe.attributes}></iframe>
  `;
  _this.get.vimeo.idByUrl = (url) => {
    var id = false;
    $.ajax({
      url: 'https://vimeo.com/api/oembed.json?url='+url,
      type: 'GET',
      success: function(response) {
        if(response.video_id) {
          id = response.video_id;
        }
      }
    });
    return id;
  };
  _this.get.youtube.idByUrl = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return false;
    }
  };
  _this.get.youtube.embedUrl = (url) => {
    if (_this.is.video(url) && _this.is.youtube(url)){
      const id = _this.get.youtube.idByUrl(url);
      const autoplay = `&autoplay=${_state.autoplay ? 1 : 0}`;
      return `//www.youtube.com/embed/${id}?${autoplay}`;
    }
  }
  _this.get.vimeo.embedUrl = (url) => {
    if (_this.is.video(url) && _this.is.vimeo(url)){
      const id = _this.get.vimeo.idByUrl(url);
      const autoplay = `&autoplay=${_state.autoplay ? 1 : 0}`;
      return `//player.vimeo.com/video/${id}?badge=0${autoplay}`;
    }
  }
  _this.get.youtube.embed = (url) => {
    const embedUrl = _this.get.youtube.embedUrl(url);
    return _this.default.iframe.template(embedUrl);
  }
  _this.get.vimeo.embed = (url) => {
    const embedUrl = _this.get.vimeo.embedUrl(url);
    return _this.default.iframe.template(embedUrl);
  }
  _this.is.youtube = (url) => !!_this.get.youtube.idByUrl(url);
  _this.is.vimeo = (url) => !!_this.get.vimeo.idByUrl(url);
  _this.is.video = () => !!_this.is.youtube || !!_this.is.vimeo;
  _this.get.videoType = (url) => {
    if (!!_this.is.youtube(url)) {
      return 'youtube';
    } else if (!!_this.is.vimeo(url)) {
      return 'vimeo';
    } else {
      return 'unknown';
    }
  }
  _this.get.iframe = (url, settings) => {
    _state.autoplay = settings.autoplay;
    if (_this.is.video(url)){
      const videoType = _this.get.videoType(url);
      return _this.get[videoType].embed(url);
    } else {
      console.warn('Media url type is unknown.');
      return false;
    }
  }

  return {
    is: _this.is,
    get: _this.get
  };
})();

export default {
  is: MEDIA.is,
  get: MEDIA.get
}
