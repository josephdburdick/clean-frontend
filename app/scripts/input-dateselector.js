// import Moment from 'moment';
const inputDateSelector = (() => {
  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  const today = new Date();
  const registerEvents = () => {
    $('.datepicker').datepicker({
      templates: {
        leftArrow: '<i class="fa fa-caret-left"></i>',
        rightArrow: '<i class="fa fa-caret-right"></i>'
      },
      startDate: addDays(today, 2),
      maxViewMode: 0
    });
  };
  $('#cleanse-together-datepicker-start').on('changeDate', function() {
    $('#startDate').val(
        $('#cleanse-together-datepicker-start').datepicker('getFormattedDate')
    );
  });
  const init = () => registerEvents();
  return {
    init
  };
})();

export default {
  init: inputDateSelector.init
};
