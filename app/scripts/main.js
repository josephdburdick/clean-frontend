(() => {
  const $window = $(window),
    $doc = $('document'),
    $body = $('body');


  $doc.ready(() => {
    /*

    Group Cleanse datepicker
    */

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

  });
})();
