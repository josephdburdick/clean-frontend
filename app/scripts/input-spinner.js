const inputSpinner = (() => {
  const filterInputValue = str => str.replace(/[^0-9]/, '');
  const registerEvents = (options) => {
    // increase || decrease
    $('.input-spinner [type="button"][data-role]').on('click', function(e) {
      const $btn = $(this);
      const $input = $btn.closest('.input-spinner').find('input:not([type="button"])');
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
      // e.preventDefault();
    });

    // Remove all characters except numbers

    $('.input-spinner input[type="text"]').on('change keypress', (e) => {
      e.currentTarget.value = filterInputValue(e.currentTarget.value);
      return this;
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
