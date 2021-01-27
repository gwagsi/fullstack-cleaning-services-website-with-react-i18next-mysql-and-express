import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/hero/Header";
import Pricing from "components/pricing/ThreePlans";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
import { Trans, useTranslation } from 'react-i18next';

export default () => {
  const { t , i18n} = useTranslation();
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading={t('ourpayingcustomers','Our Paying Customers')} 
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
