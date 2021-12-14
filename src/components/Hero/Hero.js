import React from 'react';

import { FreeLanceText, HeroSection, LeftSide, MessageButton, RigthSide } from './HeroStyles';
import Message from '../svg/Icons/Message';

const Hero = (props) => (
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
  </HeroSection>
);

export default Hero;

/*
      <div className="text">
        <span className='small_text'>Olá, me chamo <b>Fellipe Lorram</b> e sou</span>
        <br />
        <span className='hero_text'>Desenvolvedor<br /> Web</span>
        <br />
      </div>
*/
