import MEDIA from './media';

const mediaModal = (() => {
  const _this = {};
  _this.init = () => {
    _this.registerEvents();
  },
  _this.registerEvents = () => {
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
        $(mediaModal.modalTemplate()).appendTo($('body'));
        modal.$el = $(modal.target);
      }

      // add modal listeners
      modal.$el
        .one('show.bs.modal', () => {
          modal.$el.find('.modal-body').html(
            mediaModal.wrapperTemplate(
              MEDIA.get.iframe(media.url, {
                autoplay: media.autoplay
              })
            )
          )
        })
        .one('hide.bs.modal', () => {
          modal.$el.find('.modal-body').html(
            mediaModal.wrapperTemplate(
              mediaModal.placeholderTemplate()
            )
          )
        });
    });
  },
  _this.placeholderTemplate = () => '<div class="embed-responsive-item placeholder-block"></div>',
  _this.modalTemplate = () => `
    <div class="modal fade" id="modal--primary" tabindex="-1" role="dialog" aria-labelledby="Modal Window" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close modal__btn-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><img src="images/icon__btn-x.png"/></span>
            </a>
          </div>
          <div class="modal-body">
            ${_this.placeholderTemplate()}
          </div>
        </div>
      </div>
    </div>`,
  _this.wrapperTemplate = (mediaHtml) => `
    <div role="media" class="media-container embed-responsive embed-responsive-16by9">
      ${!!mediaHtml ? mediaHtml : null}
    </div>`

  return {
    init: _this.init,
    placeholderTemplate: _this.placeholderTemplate,
    modalTemplate: _this.modalTemplate,
    wrapperTemplate: _this.wrapperTemplate
  }
})();

export default {
  init: mediaModal.init,
  placeholderTemplate: mediaModal.placeholderTemplate,
  wrapperTemplate: mediaModal.wrapperTemplate,
  modalTemplate: mediaModal.modalTemplate
}
