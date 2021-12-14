import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 3rem;
  width: 80%;
  z-index: 2;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 3rem;
  flex-direction: row;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

//texts
export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.logo};
  position: relative;
  transition: all 0.2s ease-in-out;
  padding: 1rem;
  border-radius: ${props => props.theme.radius.main} ;

  .logo{
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
  }
  
  .message{
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover{
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
    .message{
      opacity: 1;
    }
    .logo{
      opacity: 0;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    .logo{
      width: 100%;
      font-size: 1.9rem;
    }
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.2rem;
  color: #666;
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: ${props => props.theme.radius.main} ;
  &:hover {
    color: #000;
    background: ${props => props.theme.colors.ligthGray};
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const ContactLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${props => props.theme.radius.main} ;
  transition: all 0.1s ease-in-out;
  padding: 1rem;


  .contact{
    font-size: 1.2rem;
    color: #666;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
  }

  .message{
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover{
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
    .message{
      opacity: 1;
    }
    .contact{
      opacity: 0;
    }
  }

`;

export const LanguageSelect = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;
  border-radius: 10px;
  border: 1px solid rgba(228,228,228,0.5);
  background: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  background: #6937ff;
  margin-right: 1rem;
  border-radius: 4px;
`;
