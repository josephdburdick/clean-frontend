import inputSpinner from './input-spinner';

const purchaseSteps = (() => {
  const registerEvents = () => {
    inputSpinner.init()
  };

  const init = () => registerEvents();

  return {
    init,
  };
})();

export default {
  init: purchaseSteps.init,
};
