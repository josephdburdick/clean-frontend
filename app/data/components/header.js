export default {
  id: 'global-header',
  name: 'Global Header',

  logo: {
    href: '/',
    image: {
      src: 'logo.png',
      alt: 'Clean Program',
      width: 203,
      height: 46
    }
  },
  nav: {
    id: 'primary-navigation',
    links: [
      {
        text: 'The Program',
        href: '#'
      },
      {
        text: 'Daily Shakes',
        href: '#'
      },
      {
        text: 'Store',
        href: '#',
        dropdown: {
          id: 'store',
          items: [
            {
              title: 'The Program',
              text: 'Our flagship programs designed by Dr. Junger, M.D.',
              href: 'http://www.cleanprogram.com/cleanse',
              image: {
                src: 'dd__main-product-photo_1_1_1.jpg',
                width: 80
              }
            },
            {
              title: 'Maintenance Kit',
              text: "Dr. Junger's recommended daily wellness supplements and shake.",
              href: '#/shakes',
              image: {
                src: 'dd__essentials-shake_2.jpg',
                width: 80
              }
            },
            {
              title: 'Shakes',
              text: 'Shakes and superfoods to start your day.',
              href: '#/shakes',
              image: {
                src: 'dd__essentials-shake_2.jpg',
                width: 80
              }
            },
            {
              title: 'Supplements',
              text: 'Probiotics, enzymes and more for daily health.',
              href: '#/supplements',
              image: {
                src: 'dd__clean_meal_support.jpg',
                width: 80
              }
            },
            {
              title: 'Books & Gifts',
              text: 'Literature to get started or stay inspired.',
              href: '#/clean-books',
              image: {
                src: 'dd__Clean-Book.jpg',
                width: 80
              }
            },
            {
              title: 'Clean Gut',
              text: 'Advanced digestive support.',
              href: '#/extra-support',
              image: {
                src: 'dd__BG.jpg',
                width: 80
              }
            },
          ]
        }
      },
      {
        text: 'Blog',
        href: '#'
      },
      {
        text: 'Support',
        href: '#',
        dropdown:{
          id: 'support',
          items: [
            {
              href: 'tel:8884978417',
              title: '(888) 497 - 8417',
              text: 'Call us Monday - Friday<br>9am - 6pm EST',
              image: {
                src: 'icon__phone.svg',
                width: 47,
                circle: true
              }
            },
            {
              href: 'mailto:support@cleanprogram.com',
              title: 'Email Us',
              text: 'Fast replies from our wellness coaches',
              image: {
                src: 'icon__email.svg',
                width: 47,
                circle: true
              }
            },
            {
              href: 'http://clean.helpscoutdocs.com',
              title: 'FAQs',
              text: 'Answers to common questions',
              image: {
                src: 'icon__question.svg',
                width: 47,
                circle: true
              }
            },
            {
              href: 'http://my.cleanprogram.com',
              title: 'Online Community',
              text: 'Support from over 65,000 members',
              image: {
                src: 'icon__community.svg',
                width: 47,
                circle: true
              }
            },
            {
              href: '#',
              title: 'Talk to a Wellness Coach',
              text: 'Book your Free Call Today',
              image: {
                src: 'icon__operator.svg',
                width: 47,
                circle: true
              }
            }
          ]
        }
      },
      {
        text: 'Login',
        href: '#',
        mobileOnly: true
      },
      {
        text: 'My Cart',
        href: '#',
        mobileOnly: true
      }
    ]
  },
  secondaryNav: [
    {
      text: 'Login',
      href: '#login'
    }
  ],
  cart: {
    id: 'primary-cart',
    link: {
      text: 'My Cart',
      href: '#mycart'
    },
    icon: {
      alt: 'Cart Icon',
      src: 'icon__circle_cart.svg',
      size: 26
    },
    count: 12
  }
};
