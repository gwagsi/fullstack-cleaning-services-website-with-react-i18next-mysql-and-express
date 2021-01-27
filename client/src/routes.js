import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';

import Context from './utils/context';


import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";





/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import Portfolio from "pages/Portfolio";
import Index from "pages/Index.js";
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";

{/**
  import Home from './hooks/home';
import Header from './hooks/header';
import HooksContainer1 from './hooks/hook1';
import Callback from './hooks/callback';
import HooksForm from './hooks/hooks_form1';
import PrivateComponent from './hooks/privatecomponent';
import SignUp from './hooks/signup';


import Profile from './Profile/profile';
import ShowUser from './Profile/showuser';
import SendMessage from './Profile/sendmessage';
import ShowMessages from './Profile/showmessages';
import ReplytoMessage from './Profile/replytomessage';

import Posts from './Blog/posts';
import AddPost from './Blog/addpost';
import ShowPost from './Blog/showpost';
import EditPost from './Blog/editpost';

 */}



const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/signup'}} />
  }
  />
)



const Routes = () => {
    const context = useContext(Context)

      return(
        <div>
          <Router history={history} >
        
           
              {/**
               *  <Header />
          <br />
          <br />
          <div>
               <Switch>
                <Route exact path='/' component={Home} />
              <Route path='/hooksform' component={HooksForm} />

              <Route path='/hookscontainer' component={HooksContainer1} />
              <Route path='/authcheck' component={AuthCheck} />
              <Route path='/signup' component={SignUp} />

              <Route path='/posts' component={Posts} />
              <Route path='/post/:pid' component={ShowPost} />
              <Route path='/editpost/:pid' component={EditPost} />
              <Route path='/addpost' component={AddPost} />

              <Route path="/user/:name" component={ ShowUser } />

              <PrivateRoute path='/profile'
                            auth={context.authState}
                            component={Profile} />

              <PrivateRoute path="/sendmessage"
                            auth={context.authState}
                            component={ SendMessage } />

              <PrivateRoute path="/showmessages/:id"
                            auth={context.authState}
                            component={ ShowMessages } />
              <PrivateRoute path="/replytomessage"
                            auth={context.authState}
                            component={ ReplytoMessage } />

              <PrivateRoute path='/privateroute'
                            auth={context.authState}
                            component={PrivateComponent} />
              <PrivateRoute path="/profile"
                            auth={context.authState}
                            component={Profile} />
              <Route path='/callback'
                     render={(props) => { context.handleAuth(props);
                                           return <Callback />}} />


            </Switch>
            </div>
               */}
             <div><Switch>
              <Route exact path='/' component={Index} />
              <Route path="/blog" component={BlogIndexPage}></Route>
              <Route path="/about" component={AboutUsPage}></Route>
              <Route path="/services" component={Portfolio}></Route>
              <Route path="/contact-us" component={ContactUsPage}></Route>
              <Route path="/portfolio" component={MainLandingPage}></Route>


              </Switch></div>
             
          </Router>
        </div>
  )}



export default Routes;
