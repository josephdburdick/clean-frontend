import inputSpinner from './input-spinner';
// const $ = window.jQuery || {};

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
      const $nextButton = input.$el.closest('fieldset').find('[data-slide="next"]')
      const { value, type } = schema[input.name];
      console.log(input.value);
      if (
        input.value !== value &&
        typeof input.value === type
      ) {
        return $nextButton.is(':disabled') ? $nextButton.prop('disabled', false) : null;
      } else {
        return $nextButton.not(':disabled') ? $nextButton.prop('disabled', true) : null;
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
    speed: 500,
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
  const schema = {
    name: {
      value: '',
      type: 'string'
    },
    'participant-count': {
      value: 0,
      type: 'number'
    },
    products: {
      vanilla: {
        value: 0,
        type: 'number'
      },
      chocolate: {
        value: 0,
        type: 'number'
      },
      mixed: {
        value: 0,
        type: 'number'
      },
    },
    startDate: {
      value: '',
      type: 'Date'
    }
  };

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
