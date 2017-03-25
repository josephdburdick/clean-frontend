/* eslint-env node, mocha */

describe('Clean Media Modal', () => {
  mediaModal.init();
  const modalID = '#modal--primary';
  it('should exist', function() {
    assert.isObject(mediaModal);
  });

  it('should add a test link', function() {
    const $body = $('body');
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
    $body.should.have.descendants(`a[data-target="${modalID}"]`);
  });

  it('should open modal when modal links are clicked', function() {
    const $body = $('body');
    setTimeout(() => {
      $(`[data-target="${modalID}"]`)[0].click();
      setTimeout(() => {
        $(modalID).modal('hide');
      }, 500);
    }, 500);
  });
});
