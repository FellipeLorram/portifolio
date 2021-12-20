import React from 'react';
import Node from '../svg/Icons/Node';
import ReactIcon from '../svg/Icons/ReactIcon';
import Mongo from '../svg/Icons/Mongo';

import { AboutContainer } from './AboutStyles';
import Python from '../svg/Icons/Python';
import JS from '../svg/Icons/JS';
import HtmlIcon from '../svg/Icons/HtmlIcon';
import Arrow from '../svg/Icons/Arrow';

const About = () => {
  const icons = [
    {key: 0, svg: Node()},   
    {key: 10, svg: ReactIcon()},
    {key: 20, svg: Mongo()},
    {key: 30, svg: JS()},
    {key: 40, svg: HtmlIcon()},
    {key: 60, svg: Python()},
  ];
  return (
    <AboutContainer>
      <div className="top-side">
        <h2>Sobre</h2>
        <p className="about">Nascido e crescido no Rio de janeiro,
          tive meu primeiro contato com o mundo da programação aos 12 anos,
          quando fiz 2 módulos de um curso de desenvolvimento de jogos. Aos 15 anos iniciei meu ensino médio junto com...
        </p>
        <Arrow />
      </div>
      <div className="bottom-side">
        {icons.map(icon => (
          <div key={icon.key} className="icon-container">{icon.svg}</div>
        ))
        }
      </div>
    </AboutContainer>
  )
};

export default About;
        // {icons.map((icon) => (icon()) )}
