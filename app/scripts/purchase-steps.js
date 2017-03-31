import inputSpinner from './input-spinner';

const validateForm = ({ form, schema }) => {
  console.log(schema);
  const $form = $(form);
  $form.on('submit', function(e) {
    e.preventDefault();
    const data = $form.serializeArray().map(function(v) {
      return [v.name, v.value];
    });
    console.log(data);
  });
  return schema;
}

const purchaseSteps = (() => {
  const schema = {
    name: {
      value: "",
      type: String
    },
    participants: 0,
    products: {
      vanilla: 0,
      chocolate: 0,
      mixed: 0,
    },
    date: undefined,
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
