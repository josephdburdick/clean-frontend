import inputSpinner from './input-spinner';
const $ = window.jQuery || {};

const validateForm = ({ form, schema }) => {
  const $form = $(form);
  $form.on('submit', function(e) {
    e.preventDefault();
    const data = {
      array: $form.serializeArray(),
      obj: {}
    };

    data.array.reduce((acc, cur) => {
      data.obj[cur.name] = cur;
    }, {});

    console.log(data);
  });
};

const purchaseSteps = (() => {
  const schema = {
    name: {
      value: '',
      type: 'String'
    },
    'participant-count': {
      value: 0,
      type: 'Number'
    },
    products: {
      vanilla: {
        value: 0,
        type: 'Number'
      },
      chocolate: {
        value: 0,
        type: 'Number'
      },
      mixed: {
        value: 0,
        type: 'Number'
      },
    },
    startDate: {
      value: '',
      type: 'Date'
    }
  };

  const registerEvents = () => {
    inputSpinner.init();
    validateForm({
      form: '#form__cleanse-together',
      schema
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
