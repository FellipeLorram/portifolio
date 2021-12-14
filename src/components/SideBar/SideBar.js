import React from 'react';
import Link from 'next/link';

import { IconContainer, SideBarContainer } from './SideBarStyles';
import Message from '../svg/Icons/Message';
import Linkedln from '../svg/Icons/Linkedln';
import Instagram from '../svg/Icons/Instagram';
import Whatsapp from '../svg/Icons/Whatsapp';
import Github from '../svg/Icons/GitHub';

const SideBar = () => {
  return (
    <SideBarContainer>


      <a target="_blank" href="https://github.com/FellipeLorram" rel="noopener noreferrer">
        <IconContainer>
          <Github />
        </IconContainer>
      </a>
      
      <IconContainer>
        <Whatsapp />
      </IconContainer>

      <IconContainer>
        <Message />
      </IconContainer>


      <a target="_blank" href="https://www.instagram.com/fellipelorram.silva/" rel="noopener noreferrer">
        <IconContainer>
          <Instagram />
        </IconContainer>
      </a>


      <a target="_blank" href="/https://www.linkedin.com/in/fellipe-lorram-bezerra-da-silva-61a364201/" rel="noopener noreferrer">
        <IconContainer>
          <Linkedln />
        </IconContainer>
      </a>

    </SideBarContainer>
  );
};

export default SideBar;
