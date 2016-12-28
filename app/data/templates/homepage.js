import helpers from '../helpers';

export default {
  id: "homepage",
  name : "Home",
  url : "homepage.html",
  sections : {
    hero: {
      items: [
        `
          <div class="carousel-item active" itemprop="associatedMedia" itemscope itemtype="MediaObject">
            <img src="images/bg__hero_smoothie--lg-lowres.jpg" data-lazy="images/bg__hero_smoothie--lg.png" alt="First slide" class="carousel-img hidden-xs-down" itemprop="http://schema.org/image">
            <img src="images/bg__hero_smoothie--xs-lowres.jpg" data-lazy="images/bg__hero_smoothie--xs.png" alt="First slide" class="carousel-img hidden-sm-up" itemprop="http://schema.org/image">
            <div class="position-absolute fit-to-parent">
              <div class="row fit-to-parent flex-items-xs-middle flex-items-xs-center">
                <div class="col-lg-4 col-md-6 col-sm-8 col-xs-10 text-xs-center" style="max-width:500px;">
                  <h1 class="mb-2"><img src="images/text__2017-group-cleanse.png" alt="2017 Group Cleanse" class="img-fluid"></h1>
                  <a href="http://www.cleanprogram.com/group-detox-cleanse" class="btn btn-lg btn-block btn-black hero-button mt-2">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        `,
        `
          <div class="carousel-item" itemprop="associatedMedia" itemscope itemtype="MediaObject">
            <img data-lazy="https://placeimg.com/1440/765/nature" alt="First slide" class="carousel-img hidden-sm-down" itemprop="http://schema.org/image">
            <img data-lazy="images/bg__hero_smoothie--xs.png" alt="First slide" class="carousel-img hidden-md-up" itemprop="http://schema.org/image">
            <div class="position-absolute fit-to-parent">
              <div class="row fit-to-parent flex-items-xs-middle flex-items-xs-center">
                <div class="col-lg-4 col-md-6 col-sm-8 col-xs-10 text-xs-center" style="max-width:500px;">
                  <h1 class="mb-2"><img data-lazy="images/text__2017-group-cleanse.png" alt="2017 Group Cleanse" class="img-fluid"></h1>
                  <a href="http://www.cleanprogram.com/group-detox-cleanse" class="btn btn-lg btn-block btn-black hero-button mt-2">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        `,
        `
          <div class="carousel-item" itemprop="associatedMedia" itemscope itemtype="MediaObject">
            <img data-lazy="https://placeimg.com/1440/765/nature" alt="First slide" class="carousel-img hidden-sm-down" itemprop="http://schema.org/image">
            <img data-lazy="images/bg__hero_smoothie--xs.png" alt="First slide" class="carousel-img hidden-md-up" itemprop="http://schema.org/image">
            <div class="position-absolute fit-to-parent">
              <div class="row fit-to-parent flex-items-xs-middle flex-items-xs-center">
                <div class="col-lg-4 col-md-6 col-sm-8 col-xs-10 text-xs-center" style="max-width:500px;">
                  <h1 class="mb-2"><img data-lazy="images/text__2017-group-cleanse.png" alt="2017 Group Cleanse" class="img-fluid"></h1>
                  <a href="http://www.cleanprogram.com/group-detox-cleanse" class="btn btn-lg btn-block btn-black hero-button mt-2">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        `,
        `
          <div class="carousel-item" itemprop="associatedMedia" itemscope itemtype="MediaObject">
            <img data-lazy="https://placeimg.com/1440/765/nature" alt="First slide" class="carousel-img hidden-sm-down" itemprop="http://schema.org/image">
            <img data-lazy="images/bg__hero_smoothie--xs.png" alt="First slide" class="carousel-img hidden-md-up" itemprop="http://schema.org/image">
            <div class="position-absolute fit-to-parent">
              <div class="row fit-to-parent flex-items-xs-middle flex-items-xs-center">
                <div class="col-lg-4 col-md-6 col-sm-8 col-xs-10 text-xs-center" style="max-width:500px;">
                  <h1 class="mb-2"><img data-lazy="images/text__2017-group-cleanse.png" alt="2017 Group Cleanse" class="img-fluid"></h1>
                  <a href="http://www.cleanprogram.com/group-detox-cleanse" class="btn btn-lg btn-block btn-black hero-button mt-2">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        `
      ]
    },
    product: {
      title: "Start Here",
      bodyText: "An innovative appraoch to restoring health care with real care.  The 21-Day Clean Program is the first step toward restoring your body’s natural ability to heal itself. ",
      image: {
        alt: "21-day Group Cleanse Package",
        url: "product__feature_21-day-package.png",
        height: 415,
        width: "100%"
      },
      iconModules: {
        items: [
          {
            text: "Vegetarian",
            image: {
              url: "icon__seal_vegan.png",
              size: 35
            }
          },
          {
            text: "Gluten Free",
            image: {
              url: "icon__seal_gluten-free.png",
              size: 35
            }
          },
          {
            text: "No GMOs",
            image: {
              url: "icon__seal_gmo.png",
              size: 35
            }
          },
          {
            text: "Made in the USA",
            image: {
              url: "icon__seal_usa.png",
              size: 35
            }
          }
        ]
      },
      ctaBtn:{
        text: "Keep Reading",
        href: "#"
      }
    },
    features: {
      items: [
        {
          image: {
            url: "icon__feature_doctor-driven.png",
            width: 356,
            height: 186
          },
          className: "icon-module--doctor-driven",
          title: "Doctor Driven",
          bodyText: "Formulated by Dr. Alejandro Junger, a leader in the field of functional medicine."
        }, {
          image: {
            url: "icon__feature_lab-tested.png",
            width: 356,
            height: 186
          },
          className: "icon-module--lab-tested",
          title: "Lab Tested",
          bodyText: "Our cleanse ingredients are valued for their purity, safety, and functionality."
        }, {
          image: {
            url: "icon__feature_better-results.png",
            width: 356,
            height: 186
          },
          className: "icon-module--better-results",
          title: "Better Results",
          bodyText: "Lose weight, gain energy and mental clarity while improving your digestion."
        }
      ]
    },
    video: {
      id: "modal-prompt__video",
      title: "A Day on the Clean Program",
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
      },
      modal: {
        id: "modal--primary",
        headerText: null,
        url: "https://www.youtube.com/watch?v=aLPFyOtu8KU"
      }
    },
    blog: {
      title: "From the Blog",
      items: [
        {
          title: "Healthy green smoothies to increase energy",
          image: {
            url: "blog__feature_green-smoothie.png",
            width: 382,
            height: 456
          },
          link:{
            href: "#",
            text: "Add to Cart >"
          }
        }, {
          title: "Will this be your new favorite cashew  milk recipe?",
          image: {
            url: "blog__feature_cashew-milk.png",
            width: 382,
            height: 456
          },
          link:{
            href: "#",
            text: "Add to Cart >"
          }
        }, {
          title: "Healthy smoothies for a healthy life",
          image: {
            url: "blog__feature_healthy-smoothie.png",
            width: 382,
            height: 456
          },
          link:{
            href: "#",
            text: "Add to Cart >"
          }
        }
      ]
    },
    story: {
      title: "Share Your Story and Get Support",
      subtitle: "#CLEANPROGRAM",
      link: {
        href:'#'
      },
      bg: {
        alt: "21-day Group Cleanse Package",
        url: "bg__lg_smoothies-on-granite.png",
        height: 455,
        width: 1250
      }
    }
  }
}
