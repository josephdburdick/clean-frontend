export default {
  id: "global-footer",
  name: "Global Footer",
  connect: {
    social: {
      links: [
        {
          name: 'instagram',
          href: 'http://instagram.com/cleanprogram',
          icon: {
            fa: 'instagram',
            url: 'icon__circle_instagram.svg',
            width: 36,
            height: 36
          }
        },
        {
          name: 'snapchat',
          href: 'https://www.snapchat.com/cleanprogram',
          icon: {
            fa: 'snapchat-ghost',
            url: 'icon__circle_snapchat.svg',
            width: 36,
            height: 36
          }
        },
        {
          name: 'pinterest',
          href: 'http://www.pinterest.com/cleanprogram/',
          icon: {
            fa: 'pinterest-p',
            url: 'icon__circle_pinterest.svg',
            width: 36,
            height: 36
          }
        },
        {
          name: 'facebook',
          href: 'http://www.facebook.com/cleanprogram',
          icon: {
            fa: 'facebook',
            url: 'icon__circle_facebook.svg',
            width: 36,
            height: 36
          }
        },
        {
          name: 'twitter',
          href: 'http://twitter.com/cleanprogram',
          icon: {
            fa: 'twitter',
            url: 'icon__circle_twitter.svg',
            width: 36,
            height: 36
          }
        }
      ]
    },
    telephone: {
      link: {
        text: '(888) 497 - 8417',
        href: 'tel:18884978417'
      },
      icon: {
        url: 'icon__phone.svg',
        width: 30
      }
    },
    email: {
      link: {
        text: 'support@cleanprogram.com',
        href: '#email-support'
      },
      icon: {
        url: 'icon__email.svg',
        width: 30
      }
    },
    newsletter: {
      label: 'Keep in touch for CLEAN updates!'
    },
  },
  nav: {
    id: 'footer-navigation',
    links: [
      {
        text: 'Blog',
        href: '#blog'
      },
      {
        text: 'Press',
        href: '#press'
      },
      {
        text: 'Testimonials',
        href: '#testimonials'
      },

      {
        text: 'Store',
        href: '#store',

      },
      {
        text: 'Wholesale',
        href: '#wholesale'
      },
      {
        text: 'Retail',
        href: '#retail'
      },

      {
        text: 'Coaching',
        href: '#coaching'
      },
      {
        text: 'Loyalty',
        href: '#loyalty'
      },
      {
        text: 'Careers',
        href: '#careers'
      }
    ]
  },
  legal: {
    copyright: () => `Copyright ${new Date().getYear()} &copy;`,
    links: [
      {
        href: 'http://www.cleanprogram.com/terms',
        text: 'Terms &amp; Conditions'
      },
      {
        href: 'http://www.cleanprogram.com/terms#returns',
        text: 'Return Policy'
      },
      {
        href: 'http://www.cleanprogram.com/terms#Health-disclaimer',
        text: 'Health Disclaimers'
      }
    ]
  }
};
