// import Moment from 'moment';
const inputDateSelector = (() => {
  const registerEvents = () => {
    $('.datepicker').datepicker({
      templates: {
        leftArrow: '<i class="fa fa-caret-left"></i>',
        rightArrow: '<i class="fa fa-caret-right"></i>'
      },
      startDate: 'today',
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
