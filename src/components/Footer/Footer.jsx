import React from 'react';
import About from '../About';
import Contact from '../Contact/Index';

import { SocialIcons } from '../Header/HeaderStyles';
import { 
  FooterContainer,
  MessageButton,
 } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <About />
      <Contact />
    </FooterContainer>
  );
};

export default Footer;
