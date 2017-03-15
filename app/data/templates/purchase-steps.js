const purchaseSteps = {
  id: 'purchase-steps',
  name: 'Purchase Steps',
  url: 'purchase-steps.html',
  headerText: 'Purchase Steps',

  sections: {
    bg: {
      image: {
        alt: 'Cleanse Together',
        url: 'bg__view_cleanse-together.jpg'
      }
    },
    headingImage: {
      style: "position: relative;margin-bottom: -2em;z-index: 10;pointer-events: none;",
      alt: "Cleanse Together",
      mobile: {
        url: "text__cleanse-together--mobile.png",
        width: 230,
        height: 146
      },
      desktop: {
        url: "text__cleanse-together.png",
        width: 996,
        height: 236
      }
    },
  }
};

export default purchaseSteps;
