/* eslint-env node, mocha */
// if (!window.mediaModal) {
//   const mediaModal = window.mediaModal || {};
// }

const $ = window.$ || {};

describe('Clean Media Modal', function() {
  mediaModal.init();
  const $body = $('body');
  const modalID = '#modal--primary';
  let $modal;

  it('should exist', function() {
    assert.isObject(mediaModal);
  });

  it('should add a test link', function() {

    const link = `
      <a
        href="${modalID}"
        class="text-muted"
        data-toggle="modal"
        data-target="${modalID}"
        data-media-url="https://www.youtube.com/embed/mTpO2SD7XpY"
        data-media-autoplay="true">Open Modal</a>`;

    $body.append(link);
    const $link = $('a[data-target="' + modalID + '"]');
    $link.should.have.lengthOf(1);
  });

  it('should open modal when modal links are clicked', function(done) {
    const $link = $('a[data-target="' + modalID + '"]');
    $body.on('click', $link, () => {
      setTimeout(() => {
        $modal = $(modalID);
        $modal.should.have.lengthOf(1);
        done();
        $modal.modal('hide');
      }, 500);
    });
    $link[0].click();
  });

  it('should include an iframe in modal', function(done) {
    const $link = $('a[data-target="' + modalID + '"]');
    $body.on('click', $link, () => {
      setTimeout(() => {
        const $iframe = $(modalID).find('iframe');
        $iframe.should.have.lengthOf(1);
        done();
        $modal.modal('hide');
      }, 1000);
    });
    $link[0].click();
  });

  it('should close a modal', function(done) {
    const $link = $('a[data-target="' + modalID + '"]');
    $body.on('click', $link, () => {
      $modal = $(modalID);
      setTimeout(() => {
        $modal.modal('hide');
        setTimeout(() => {
          $modal.should.have.lengthOf(1);
          $modal.should.be.$hidden;
          done();
        }, 500);
      }, 500);
    });
    $link[0].click();
  });
});
