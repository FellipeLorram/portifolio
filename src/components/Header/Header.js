import Link from 'next/link';
import React, { useState } from 'react';
import Menu from '../svg/Icons/Menu';
import Message from '../svg/Icons/Message';

import {
  ContactLink,
  Container,
  LanguageSelect,
  Logo,
  LogoContainer,
  MenuContainer,
  NavLink,
  NavLinkContainer
} from './HeaderStyles';

const Header = () => {
  const [languageState, setLanguageState] = useState(true);
  const links = [
    { text: 'Home' },
    { text: 'Projetos' },
    { text: 'Sobre' },
  ];
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <Logo>
            <span className="logo">Fellipe Lorram</span>
            <span className="message">
              <Message></Message>
            </span>
          </Logo>
        </Link>
      </LogoContainer>

      <NavLinkContainer>
        {links.map((link) => (
          <NavLink key={link.text}>
            {link.text}
          </NavLink>
        ))}
        <ContactLink>
          <span className="contact">
            contato
          </span>
          <span className="message">
            <Message></Message>
          </span>
        </ContactLink>
      </NavLinkContainer>
      <LanguageSelect
        onClick={() => setLanguageState(!languageState)}
      >
        {languageState ? 'en/USA' : 'pt/BRS'}
      </LanguageSelect>
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  )
};

export default Header;
