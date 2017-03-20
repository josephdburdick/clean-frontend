import helpers from '../helpers';

const cleanseTogether = {
  id: "cleanse-together",
  name : "Cleanse Together",
  url : "cleanse-together.html",
  headerText : "Don't Join the 21-Day Group Cleanse",

  sections : {
    hero: {
      image: {
        alt: "Cleanse Together",
        url: "bg__hero_pink-swear.png",
        height: 415,
        width: "100%"
      },

      description: "Save $50 per cleanse and experience the 21-Day Clean Program with built-in support from friends, family, and coworkers.",
      ctaButton: {
        text: "Get Started",
        href: "#"
      }
    },
    "how-it-works": {
      title: "How It Works",
      items: [
        {
          image: {
            url: "icon__feature_people-hug.png",
            width: 170,
            height: 126
          },
          title: "Cleanse Together!",
          description: "Gather your friends, family, and coworkers for a healthy challenge.",
          href: "#cleanse-together"
        }, {
          image: {
            url: "icon_feature_calendar.png",
            width: 140,
            height: 130
          },
          title: "Schedule Your Cleanse",
          description: "Pick a start date that works for everyone in your group.",
          href: "#schedule"
        }, {
          image: {
            url: "icon__feature_blender.png",
            width: 78,
            height: 140
          },
          title: "Pick Your Flavors",
          description: "Make sure each person gets the shake flavors they want.",
          href: "#flavors"
        }, {
          image: {
            url: "icon__feature_piggy-bank.png",
            width: 125,
            height: 154
          },
          title: "Save Money",
          description: "The more people that cleanse together, the bigger the savings!",
          href: "#save"
        }
      ]
    },
    featureGrid: {
      items: [
        {
          image: {
            url: "bg__feature_cheers-w-shakes.png"
          },
          title: "Cleanse Together",
          description: "<p>Save $50 or every cleanse when you purchase together and start together!</p>",
          footer: "<small>*All cleanse together purchases must be made with a single form of payment and shipped to one address. Cleanse Together purchases cannot be combined with other discounts. Other restrictions may apply.</small>"
        },
        {
          image: {
            url: "bg__feature_stethescope.png"
          },
          title: "Doctor Driven",
          description: "<p>The 21-Day Clean Program’s doctor-driven protocol coupled with functional ingredients conveniently help you experience what it means to feel good.</p>",
        }
      ]
    },
    exclusiveContent: {
      title: "Access to Exclusive Content",
      feature: {
        image: {
          alt: "Tune in ever week for tips and answers from Dr. Junger",
          url: "content__feature_stereo-cables.png"
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
    cleanProgramDay: {
      title: "A Day on the Clean Program",
      image: {
        alt: "21-day Group Cleanse Package",
        url: "product__feature_21-day-package.png",
        height: 415,
        width: "100%"
      },
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
      },
      modal: {
        id: "modal--primary",
        headerText: null,
        url: "https://www.youtube.com/watch?v=aLPFyOtu8KU"
      },
    },
    social: {
      title: "Let's Get Social",
      items: [
        {
          href: "http://www.facebook.com/cleanprogram",
          icon: {
            alt: "Facebook",
            width: 136,
            height: 136,
            url: "icon_facebook.svg"
          },
        }, {
          href: "http://www.instagram.com/cleanprogram",
          icon: {
            alt: "Instagram",
            width: 136,
            height: 136,
            url: "icon_instagram.svg"
          },
        }, {
          href: "http://www.twitter.com/cleanprogram",
          icon: {
            alt: "Twitter",
            width: 136,
            height: 136,
            url: "icon_twitter.svg"
          },
        }
      ]
    }
  }
};

export default cleanseTogether;
