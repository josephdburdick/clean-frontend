export default {
  name : "Group Cleanse Page",
  url : "group-cleanse.html",
  headerText : "Join the 21-Day Group Cleanse",
  sections : {
    product: {
      title: "21-Day Cleanse",
      price: 425,
      flavors: [
        "Vanilla", "Chocolate", "Other"
      ],
      quantityMax: 10,
      description: `
        <p>
          The 21-Day Clean Program is a simple-to-follow daily routine to help restore your body’s natural ability to heal itself. Many cleansers have experienced better digestion, higher energy levels, healthy weight loss, more youthful-looking skin, and mental clarity.
        </p>
        <p>
          Join our 2017 group cleanse to receive exclusive free content from Dr. Junger, his team of Wellness Coaches, and the Clean community!
        </p>
        `
    },
    "exclusive-content": {
      title: "Exclusive Content",
      sections: [
        {
          titleText: "Quizzes",
          href: "#quizzes",
          bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, {
          titleText: "Videos",
          href: "#videos",
          bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, {
          titleText: "Podcasts",
          href: "#podcasts",
          bodyText: "Tune in every week for cleanse tips, answers to your burning questions, advice from Dr. Junger, and exclusive promos."
        }, {
          titleText: "Emails",
          href: "#emails",
          bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    },
    "join-us": {
      title: "Join Us!",
      buttons: [
        {
          text: "Start January 9",
          date: new Date("January 9, 2017")
        }, {
          text: "Start January 30",
          date: new Date("January 30, 2017")
        }
      ]
    },
    social: {
      title: "Let's Get Social",
      sections: [
        {
          titleText: "Facebook Events",
          icon: "icon.svg",
          bodyText: "Choose your dates and join other cleansers around the world for support, tips, and recipes."
        }, {
          titleText: "#CleanProgram",
          icon: "icon.svg",
          bodyText: "Click, double-tap, and share your way through Clean recipes and testimonials across Instagram."
        }, {
          titleText: "Title",
          icon: "icon.svg",
          bodyText: "Tweet us your questions for quick answers from Dr. Junger and his team of Wellness Coaches."
        }
      ]
    },
    "exclusive-bundles": {
      title: "Exclusive Bundles",
      subtitle: "Enhance your cleanse experience and save on our favorite supportive products.",
      sections: [
        {
          imageUrl: "eliminate+move.png",
          title: "Eliminate + Move",
          bodyText: "Encourage better digestion and relieve constipation during your cleanse and after.",
          price: {
            total: 63,
            now: 50
          },
          link: "#"
        }, {
          imageUrl: "betaglucan+integrity.png",
          title: "Beta Glucan + Integrity",
          bodyText: "Support gut healing and enhance the probiotic power of the cleanse for improved digestion.",
          price: {
            total: 170,
            now: 135
          },
          link: "#"
        }, {
          imageUrl: "clean+cleaneats.png",
          title: "Clean + Clean Eats",
          bodyText: "Get inspired by the story that started the movement and cook up some of Clean’s best recipes.",
          price: {
            total: 45,
            now: 40
          },
          link: "#"
        }
      ]
    }
  }
}
