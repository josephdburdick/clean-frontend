const inputSpinner = (() => {
  const filterInputValue = str => str.replace(/[^0-9]/, '');
  const registerEvents = () => {
    // increase || decrease
    $('.input-spinner [type="button"][data-role]').on('click', function(e) {
      const $btn = $(e.currentTarget);
      const $input = $btn.closest('.input-spinner').find('input:not([type="button"])');
      if ($btn.data('role') === 'increment') {
        if (
          !$input.attr('max') ||
          parseInt($input.val(), 10) < parseInt($input.attr('max'), 10)
        ) {
          $input
            .val(parseInt($input.val(), 10) + 1)
            .trigger('change');
        }
        else {
          $btn.next('disabled', true);
        }
      }

      if ($btn.data('role') === 'decrement') {
        if (
          !$input.attr('min') ||
          parseInt($input.val(), 10) > parseInt($input.attr('min'), 10)
        ) {
          $input
            .val(parseInt($input.val(), 10) - 1)
            .trigger('change');
        }
        else {
          $btn.prev('disabled', true);
        }
      }
      // e.preventDefault();
    });

    // Remove all characters except numbers

    $('.input-spinner input[type="text"]').on('change keypress', (e) => {
      e.currentTarget.value = filterInputValue(e.currentTarget.value);
    });
  };

  const init = () => registerEvents();

  return {
    init,
  };
})();

export default {
  init: inputSpinner.init,
};
