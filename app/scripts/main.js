(() => {
  const
    $window = $(window),
    $doc = $('document'),
    $body = $('body');


  $doc.ready(() => {

    /*

    Group Cleanse datepicker
    */
    (() => {

      $('[data-function="datepicker"] input[type="radio"]').on('change', (event) => {
        const $thisRadio = $(event.currentTarget),
        radioDateData = new Date($thisRadio.data('date')),
        radioHumanDate = $thisRadio.data('humandate'),
        modal = {
          $el: $thisRadio.closest('.modal'),
          id: $thisRadio.closest('.modal')[0].id
        },
        $formFieldback = $thisRadio.closest('form').find('[data-function="form-feedback"]');

        $formFieldback.html(`${radioHumanDate} is selected. Thank you for selecting a date!`);
      });
    })();

    /*

    Clean Media
    */
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
      _this.is.video = (url) => !!_this.is.youtube || !!_this.is.vimeo;
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

    /*

    Clean Modal
    */
    (() => {
      const TEMPLATE = {
        placeholder: () => '<div class="embed-responsive-item placeholder-block"></div>',
        modal: () => `
          <div class="modal fade" id="modal--primary" tabindex="-1" role="dialog" aria-labelledby="Modal Window" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <a class="close modal__btn-close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"><img src="${__DATA.get('site').dir.images}/${__DATA.get('site').icons.btnClose}"/></span>
                  </a>
                </div>
                <div class="modal-body">
                  ${TEMPLATE.placeholder()}
                </div>
              </div>
            </div>
          </div>`,
        wrapper: (mediaHtml) => `
          <div role="media" class="media-container embed-responsive embed-responsive-16by9">
            ${!!mediaHtml ? mediaHtml : null}
          </div>`
      };
      $('[data-toggle="modal"][data-media-url]').on('click', (e) => {
        const
          $this = $(e.currentTarget),
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
        if (!$(modal.target).length){
          $(TEMPLATE.modal()).appendTo($body);
          modal.$el = $(modal.target);
        }

        // add modal listeners
        modal.$el
          .one('show.bs.modal', (e) => {
            modal.$el.find('.modal-body').html(
              TEMPLATE.wrapper(
                MEDIA.get.iframe(media.url, {
                  autoplay: media.autoplay
                })
              )
            )
          })
          .one('hide.bs.modal', (e) => {
            modal.$el.find('.modal-body').html(
              TEMPLATE.wrapper(
                TEMPLATE.placeholder()
              )
            )
          });

      })
    })();

  });
})();
