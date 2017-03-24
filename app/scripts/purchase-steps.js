const purchaseSteps = (() => {
  const _this = {
    state: {
      step: 0,
      name: null,
      participants: 0,
      flavors: {
        vanilla: 0,
        chocolate: 0,
        mixed: 0
      },
      date: {
        start: null
      }
    }
  };
  
  const init = () => registerEvents();

  const registerEvents = () => {
    console.log(_this.state);
  }

  return {
    init
  }
})();

export default {
  init: purchaseSteps.init,
}
