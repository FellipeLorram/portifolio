import React from 'react';

import { FreeLanceText, HeroSection, LeftSide } from './HeroStyles';
import Message from '../svg/Icons/Message';
import HeroImage from '../svg/Images/HeroImage';

const Hero = () => (
  <HeroSection>
    <LeftSide>
      <div className="text">
        <h1>Desenvolvedor Web</h1>
        <p className="big">Meu objetivo é <b>transformar</b> a sua <b>idéia em ação</b></p>
      </div>
      <FreeLanceText>
        Disponível para free-lance
        <Message />
      </FreeLanceText>
    </LeftSide>
    <div className="hero-image">
      <HeroImage />
    </div>
  </HeroSection>
);

export default Hero;
