import helpers from '../helpers';

const cleanseTogether = {
  id: "cleanse-together",
  name : "Cleanse Together",
  url : "cleanse-together.html",
  headerText : "Don't Join the 21-Day Group Cleanse",

  sections : {
    hero: {
      video: {
        id: "modal-prompt__video",
        title: "Video Modal",
        url: "https://www.youtube.com/watch?v=aLPFyOtu8KU",
        poster: {
          url: "video__bg_poster--xl.png",
          alt: "Clean Hero Video"
        },
        play: {
          image: {
            url: "video__btn_play.png",
            alt: "Play Video",
            width: 143,
            height: 143
          }
        }
      }
    },
    modals: {
      video:{
        id: "modal--primary",
        headerText: null,
        url: "https://www.youtube.com/watch?v=aLPFyOtu8KU"
      }
    },
    product: {
      title: "Join the 21-Day Group Cleanse",
      image: {
        alt: "21-day Group Cleanse Package",
        url: "product__feature_21-day-package.png",
        height: 415,
        width: "100%"
      },
      description: `
        <p>
          The 21-Day Clean Program is a simple-to-follow daily routine to help restore your body’s natural ability to heal itself. Many cleansers have experienced better digestion, higher energy levels, healthy weight loss, more youthful-looking skin, and mental clarity.
        </p>
        <p>
          Join our 2017 group cleanse to receive exclusive free content from Dr. Junger, his team of Wellness Coaches, and the Clean community!
        </p>
        `
    },
    purchaseform: {
      title: "21-Day Cleanse",
      price: "475.00",
      flavor: {
        title: "Flavor",
        items: ["Vanilla", "Chocolate", "Mixed"]
      },
      cleanseCTA: "When would you like to cleanse?",
      quantity: {
        title: "Quantity",
        count: 10
      },
      image: {
        alt: "21-day Group Cleanse Package",
        url: "http://placehold.it/960x600",
        height: 415,
        width: "100%"
      },
      quantityMax: 10,
      startDate: {
        title: "Date",
        dates: [
          {
            text: `Start on ${helpers.formatDate('January 9, 2017')}`,
            date: new Date('January 9, 2017')
          }, {
            text: `Start on ${helpers.formatDate('January 30, 2017')}`,
            date: new Date('January 30, 2017')
          }
        ]
      },
      addToCart: {
        iconClass: "fa fa-plus",
        buttonText: "+ Add To Cart"
      },
    },
    "exclusive-content": {
      title: "Group Cleanse Exclusive Content",
      feature: {
        image: {
          alt: "Tune in ever week for tips and answers from Dr. Junger",
          url: "content__feature_podcasts.png"
        },
        title: "Podcasts",
        href: "#podcasts",
        bodyText: "Tune in every week for cleanse tips, answers to your burning questions, advice from Dr. Junger, and exclusive promos."
      },
      items: [
        {
          icon: "icon_quiz.svg",
          image: {
            url: "icon_quiz.png",
            width: 313,
            height: 186
          },
          className: "icon-module--quiz",
          title: "Quizzes",
          href: "#quizzes"
        }, {
          icon: "icon_email.svg",
          image: {
            url: "icon_email.png",
            width: 313,
            height: 186
          },
          className: "icon-module--email",
          title: "Emails",
          href: "#emails"
        }, {
          icon: "icon_video.svg",
          image: {
            url: "icon_video.png",
            width: 313,
            height: 186
          },
          className: "icon-module--video",
          title: "Videos",
          href: "#videos"
        }
      ]
    },
    join: {
      title: "Join Us!",
      bodyText: "Doing a homemade cleanse or following the book, Clean? Sign up for our exclusive content to guide your journey – it’s 100% FREE!",
      background: {
        url: "newsletter__bg_jars.png",
        size: "cover"
      },
      options: [
        {
          name: "option-jan9",
          text: `Start ${helpers.formatDate('January 9, 2017')}`,
          date: new Date("January 9, 2017")
        }, {
          name: "option-jan30",
          text: `Start ${helpers.formatDate('January 30, 2017')}`,
          date: new Date("January 30, 2017")
        }
      ]
    },
    social: {
      title: "Let's Get Social",
      items: [
        {
          title: "Facebook Events",
          icon: {
            width: 80,
            height: 80,
            url: "icon_facebook.svg"
          },
          bodyText: "Choose your dates and join other cleansers around the world for support, tips, and recipes."
        }, {
          title: "#CleanProgram",
          icon: {
            width: 80,
            height: 80,
            url: "icon_instagram.svg"
          },
          bodyText: "Click, double-tap, and share your way through Clean recipes and testimonials across Instagram."
        }, {
          title: "LIVE Q&A",
          icon: {
            width: 80,
            height: 80,
            url: "icon_twitter.svg"
          },
          bodyText: "Tweet us your questions for quick answers from Dr. Junger and his team of Wellness Coaches."
        }
      ]
    },
    bundles: {
      title: "Exclusive Bundles",
      subtitle: "Enhance your cleanse experience and save on our favorite supportive products.",
      items: [
        {
          image: {
            url: "bundles__product_eliminate+move.png",
            width: 298,
            height: 206
          },
          title: "Eliminate + Move",
          bodyText: "Encourage better digestion and relieve constipation during your cleanse and after.",
          price: {
            total: 63,
            now: 50
          },
          link:{
            href: "#",
            text: "Add to Cart >"
          }
        }, {
          image: {
            url: "bundles__product_integrity+beta-glucan.png",
            width: 298,
            height: 206
          },
          title: "Beta Glucan + Integrity",
          bodyText: "Support gut healing and enhance the probiotic power of the cleanse for improved digestion.",
          price: {
            total: 170,
            now: 135
          },
          link:{
            href: "#",
            text: "Add to Cart >"
          }
        }, {
          image: {
            url: "bundles__product_clean+clean-eats.png",
            width: 298,
            height: 206
          },
          title: "Clean + Clean Eats",
          bodyText: "Get inspired by the story that started the movement and cook up some of Clean’s best recipes.",
          price: {
            total: 45,
            now: 40
          },
          link:{
            href: "#",
            text: "Add to Cart >"
          }
        }
      ]
    }
  }
};

export default cleanseTogether;
