const inputSpinner = (() => {
  const registerEvents = (options) => {
    console.log(options);
    $('.input-spinner .btn[data-role]').on('click', function() {
      const $btn = $(this);
      const $input = $btn.closest('.input-spinner').find('input');
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
  };

  const init = (options) => registerEvents(options);

  return {
    init,
  };
})();

export default {
  init: inputSpinner.init,
};
