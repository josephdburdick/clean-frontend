(function () {
  'use strict';

  // describe('Give it some context', function () {
  //   describe('maybe a bit more context here', function () {
  //     it('should run here few assertions', function () {
  //
  //     });
  //   });
  // });

  describe('Clean Media Modal', function () {
    it('should exist', function () {
      assert.isObject(mediaModal);
    })
    it('should open modal when modal links are clicked', function () {
      const link = `
        <a href="#" href="modal--primary" class="text-muted" data-toggle="modal" data-target="#modal--primary" data-media-url="https://www.youtube.com/embed/mTpO2SD7XpY" data-media-autoplay="true">
          Open Modal
        </a>`;
      $(link).appendTo($('body'));
      $(link).trigger('click');
      // $('[data-toggle="modal"][data-media-url]').on('click', (e) => {
      //   const
      //     $this = $(e.currentTarget),
      //     media = {
      //       url: $this.data('media-url'),
      //       autoplay: !!$this.data('media-autoplay'),
      //       controls: !!$this.data('media-controls')
      //     },
      //     modal = {
      //       $el: $($this.data('target')),
      //       target: $this.data('target')
      //     };
      //   // if modal doesn't exist, add it and cache it
      //   if (!$(modal.target).length){
      //     $(mediaModal.modalTemplate()).appendTo($('body'));
      //     modal.$el = $(modal.target);
      //   }
      //   assert(modal.$el.length > 0)
      // }).trigger('click');

    });
  });

})();
