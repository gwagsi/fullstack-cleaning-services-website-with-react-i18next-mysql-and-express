import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Trans, useTranslation } from 'react-i18next'

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  bg-black);
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;







export default () => {
  const { t } = useTranslation();
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
       {t('home','Home')}
      </NavLink>
      <NavLink href="/about">
      {t('about1','About')}
      
      </NavLink>
      <NavLink href="/services">
      {t('services1','Services')}  
      </NavLink>
      
      <NavLink href="/contact-us">
      {t('contact','Contact Us')}
      </NavLink>
      <NavLink href="/blog">
      {t('blog','Blog')}
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/contact-us">
      {t('hireUs','Hire Us')} 
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} language='hello'/>
       
      </HeroContainer>
    </Container>
  );
};
