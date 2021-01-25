import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/hero/Header";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import image2 from "./../images/image_2.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Welcome to Sademy</Subheading>}
        heading="Let's make you fresher than ever."
        buttonRounded={false}
        primaryButtonUrl="/contact"
        description="We know the preferences of every homeowner will differ, which is why we proudly offer customizable cleaning programs. No matter whether you need us to come by before a special event, spruce up your home before the holidays, or even clean before or after moving out, we can help. With the use of our eco-friendly cleaning products, our trained cleaning professionals deep-clean your property from top to bottom."
        primaryButtonText="Contact Us"
        imageSrc="https://images.pexels.com/photos/4239112/pexels-photo-4239112.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4239112.jpg&fm=jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to Keep every premise Clean, One project at a time."
        buttonRounded={false}
        primaryButtonUrl="/portfolio"
        primaryButtonText="Portfolio"
        imageSrc="https://images.pexels.com/photos/1201588/pexels-photo-1201588.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1201588.jpg&fm=jpg"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Over the years we have grown and identified some core values which makes our client most satisfied"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "We are available for call at any time and at all times. in rain or under sunshine, even at midnight",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Our teams are well trained and ready to fully able to engage on the task",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Our first priority is the customer, after all customer is king",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
