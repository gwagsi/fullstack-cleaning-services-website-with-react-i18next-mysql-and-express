import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import image2 from "./../images/image_2.jpg";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";

import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

import { useTranslation } from 'react-i18next';


const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  const { t } = useTranslation();
  return (
    <AnimationRevealPage>
      <Hero />
      <div>
      <p>{t('welcome', 'Hello there')}</p>
    </div>
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 d-flex">
            <div
              className="img d-flex align-items-center justify-content-center py-5 py-md-0"
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className="time-open-wrap">
                <div className="desc p-4">
                  <h2>Business Hours</h2>
                  <div className="opening-hours">
                    <h4>Opening Days:</h4>
                    <p className="pl-3">
                      <span>
                        <strong>Monday – Friday:</strong> 9am to 20 pm
                      </span>
                      <span>
                        <strong>Saturday :</strong> 9am to 17 pm
                      </span>
                    </p>
                    <h4>Vacations:</h4>
                    <p className="pl-3">
                      <span>All Sunday Days</span>
                      <span>All Official Holidays</span>
                    </p>
                  </div>
                </div>
                <div className="desc p-4 bg-secondary">
                  <h3 className="heading">For Emergency Cases</h3>
                  <span className="phone">(+01) 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-md-5 pt-md-5">
            <div className="row justify-content-start py-5">
              <div className="col-md-12 heading-section ">
                <span className="subheading">Welcome to Cleaning Company</span>
                <h2 className="mb-4">Let's make you fresher than ever</h2>
                <p>
                  We know the preferences of every homeowner or Business will differ, which
                  is why we proudly offer customizable cleaning programs. No
                  matter whether you need us to come by before a special event,
                  spruce up your home before the holidays, or even clean before
                  or after moving out, we can help. With the use of our
                  eco-friendly cleaning products, our trained cleaning
                  professionals deep-clean your property from top to bottom.
                </p>
              </div>
            </div>
            <div className="row ftco-counter py-5" id="section-counter">
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="45">
                      0
                    </strong>
                  </div>
                  <div className="text">
                    <span>
                      Years of <br />
                      Experienced
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="2342">
                      0
                    </strong>
                  </div>
                  <div className="text">
                    <span>
                      Happy <br />
                      Customers
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="30">
                      0
                    </strong>
                  </div>
                  <div className="text">
                    <span>
                      Building <br />
                      Cleaned
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    <MainFeature2 />
    <Portfolio />
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle"
        }
      ]}
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
    <Blog />
    <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
