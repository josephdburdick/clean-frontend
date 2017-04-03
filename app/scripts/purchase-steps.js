import inputSpinner from './input-spinner';

const schema = {
  name: {
    value: '',
    type: 'string'
  },
  participantCount: {
    value: 0,
    type: 'number'
  },
  vanillaCount: {
    value: 0,
    type: 'number'
  },
  chocolateCount: {
    value: 0,
    type: 'number'
  },
  mixedCount: {
    value: 0,
    type: 'number'
  },
  startDate: {
    value: '',
    type: 'Date'
  }
};

const handleInputBinding = input => {
  if (input.name && $(`[data-bind="${input.name}"]`).length) {
    $(`[data-bind="${input.name}"]`).text(input.value);
  }
};

const validateForm = ({ form, schema }) => {
  const $form = $(form);

  $form
    .on('submit', function(e) {
      e.preventDefault();
      const data = {
        array: $form.serializeArray(),
        obj: {}
      };

      data.array.reduce((acc, cur) => {
        data.obj[cur.name] = cur;
      }, {});

      console.log(data);
      console.log(schema);
    })
    .on('change keyup', 'input', (e) => {
      const input = {
        el: e.currentTarget,
        $el: $(e.currentTarget),
        name: e.currentTarget.name,
        value: e.currentTarget.value
      };
      handleInputBinding(input);
      const $nextButton = input.$el.closest('fieldset').find('[data-slide="next"]');

      if (input.$el.closest('fieldset').is('#flavorCount')) {
        let sum = 0;
        const $flavorCountFieldset = input.$el.closest('fieldset');
        const $numberInputs = $flavorCountFieldset.find('input[type="number"]');
        const minimumQuantity = parseInt($('#participantCount').val(), 10);
        $numberInputs.map((i, numberInput) => {
          sum += parseInt(numberInput.value, 10);
        });

        if (minimumQuantity <= sum) {
          $nextButton.prop('disabled', false);
          $flavorCountFieldset.find('.form-control-feedback').addClass('hidden');
        }
        else {
          $nextButton.prop('disabled', true);
          $flavorCountFieldset.find('.form-control-feedback').removeClass('hidden');
        }
      } else {
        if (input.$el.is(':valid') && !input.$el.closest('fieldset').is('#flavorCount')) {
          $nextButton.prop('disabled', false);
        }
        else {
          $nextButton.prop('disabled', true);
        }
      }


      return true;

    });
};

const purchaseStepsCarousel = ({ carouselEl }) => {
  const $carousel = $(carouselEl).slick({
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    cssEase: 'linear',
    draggable: false,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    arrows: false
  });

  $(carouselEl).on('click', '[data-slide]', (e) => {
    /* requires data-slide="next | prev" */
    e.preventDefault;
    const $button = $(e.currentTarget);
    const direction = $button.data('slide');
    const slickArg = ('slick' +
      direction.charAt(0).toUpperCase() +
      direction.slice(1)
    );
    $carousel.slick(slickArg);
  });
};

const purchaseSteps = (() => {
  const registerEvents = () => {
    const options = {
      formEl: '#form__cleanse-together',
      carouselEl: '#form__cleanse-together_carousel'
    };
    inputSpinner.init();
    validateForm({
      form: options.formEl,
      schema
    });
    purchaseStepsCarousel({
      carouselEl: options.carouselEl
    });
  };

  const init = () => registerEvents();

  return {
    init
  };
})();

export default {
  init: purchaseSteps.init
};
