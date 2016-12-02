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
    });
  });

})();
