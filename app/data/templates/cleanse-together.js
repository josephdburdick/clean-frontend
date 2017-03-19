import helpers from '../helpers';

const cleanseTogether = {
  id: "cleanse-together",
  name : "Cleanse Together",
  url : "cleanse-together.html",
  headerText : "Don't Join the 21-Day Group Cleanse",

  sections : {
    hero: {
      image: {
        alt: "21-day Group Cleanse Package",
        url: "product__feature_21-day-package.png",
        height: 415,
        width: "100%"
      },
      title: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="17.764in" height="4.194in">
            <image  x="0px" y="0px" width="1279px" height="302px"  xlink:href="data:img/png;base64,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" />
        </svg>
      `,
      description: "Save $50 per cleanse and experience the 21-Day Clean Program with built-in support from friends, family, and coworkers.",
      ctaButton: {
        title: "Get Started",
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
