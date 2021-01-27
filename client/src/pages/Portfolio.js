import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/Empty";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { Trans, useTranslation } from 'react-i18next';

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";

export default () => {
  const { t , i18n} = useTranslation();
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero />
      <Features
        subheading={<Subheading>{t('services2','SERVICES')} </Subheading>}
        heading={
          <>
            {t('wehaveamazin','We have Amazing')}
            <HighlightedTextInverse>{t('services1','Services')}. </HighlightedTextInverse>
          </>
        }
      />
      <MainFeature
        heading={
          <>
            <wbr />{" "}
            <HighlightedText>{t('comercialbuilding','Commercial Building Cleaning.')} </HighlightedText>
          </>
        }
        description={
          <Description>
           {t('buidlingincleaningdescrip',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.")} 
            <br />
            <br />
           {t('buiddingcleaningdes2','Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.')} 
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText={t('latestoffers','Latest Offers')} 
        imageSrc={
          "https://images.pexels.com/photos/3681787/pexels-photo-3681787.jpeg?cs=srgb&dl=pexels-becosan-3681787.jpg&fm=jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        subheading={<Subheading>{t('windowcleaning','Window Cleaning')} </Subheading>}
        heading={
          <>
            <wbr /> <HighlightedText>{t('windowcleaning','Window Cleaning')}.</HighlightedText>
          </>
        }
        description={
          <Description>
           {t('windowcleaningdesc1',' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
            <br />
            <br />
            {t('windowcleaningdes2','Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat')} .
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText={t('latestoffers','Latest Offers')} 
        imageSrc={
          "https://images.pexels.com/photos/634007/pexels-photo-634007.jpeg?cs=srgb&dl=pexels-nathan-cowley-634007.jpg&fm=jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        heading={
          <>
            <wbr /> <HighlightedText>{t('homecleaning',' Home Cleaning')}.</HighlightedText>
          </>
        }
        description={
          <Description>
            {t('homecleaningdes1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua')}.
            <br />
            <br />
            {t('homecleaningdes2','Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.')}
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText={t('latestoffers','Latest Offers')} 
        imageSrc={
          "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1669799.jpg&fm=jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        heading={
          <>
            <wbr /> <HighlightedText>{t('wasteremoval','Waste Removal')} </HighlightedText>
          </>
        }
        description={
          <Description>
           {t('wasteremovaldes1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')} 
            <br />
            <br />
           {t('wasteremovaldes2','Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.')} 
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText={t('latestoffers','Latest Offers')} 
        imageSrc={
          "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?cs=srgb&dl=pexels-mali-maeder-802221.jpg&fm=jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        heading={
          <>
           
            <wbr /> <HighlightedText>{t('othercleaning','Other Cleaning services.')} </HighlightedText>
          </>
        }
        description={
          <Description>
           {t('othercleaningdes1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.')} 
            <br />
            <br />
           {t('othercleaniingdes2','Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.')} 
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText={t('latestoffers','Latest Offers')} 
        imageSrc={
          "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?cs=srgb&dl=pexels-cottonbro-4107284.jpg&fm=jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      
  
      <Testimonial
        subheading=""
        heading={
          <>
           {t('customers','Customers')}  <HighlightedText>{t('loveus','Love Us.')} </HighlightedText>
          </>
        }
      />
<ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
